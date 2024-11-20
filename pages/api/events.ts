import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import https from "https";
import { JSDOM } from "jsdom";

// Defina a interface para um evento
interface Event {
  eventID: string;
  name: string;
  eventType: string;
  heading: string;
  link: string;
  image: string;
  start: string;
  end: string;
  extraData: null | any;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Lógica de fetch dos eventos
  https
    .get("https://leekduck.com/feeds/events.json", (response) => {
      let body = "";
      const eventDates: Record<string, { start: string; end: string }> = {};

      response.on("data", (chunk) => {
        body += chunk;
      });

      response.on("end", () => {
        try {
          const feedJson = JSON.parse(body);

          feedJson.forEach((event: any) => {
            const id = event.eventID;
            const start = event.start;
            const end = event.end;

            eventDates[id] = { start, end };
          });
        } catch (error) {
          console.error("Error parsing JSON:", error);
          res.status(500).json({ error: "Failed to parse events data" });
          return;
        }

        // Continue process with JSDOM
        JSDOM.fromURL("https://leekduck.com/events/", {})
          .then((dom) => {
            const allEvents: Event[] = [];
            ["current", "upcoming"].forEach((category) => {
              const events = dom.window.document.querySelectorAll(
                `div.events-list.${category}-events a.event-item-link`
              );

              events.forEach((e) => {
                const heading =
                  e.querySelector(":scope > .event-item-wrapper > p")
                    ?.textContent || "";
                const name =
                  e.querySelector(
                    ":scope > .event-item-wrapper > .event-item > .event-text-container > .event-text > h2"
                  )?.textContent || "";
                let image =
                  e
                    .querySelector(
                      ":scope > .event-item-wrapper > .event-item > .event-img-wrapper > img"
                    )
                    ?.getAttribute("src") || "";
                if (image.includes("cdn-cgi")) {
                  image =
                    "https://leekduck.com/assets/" + image.split("/assets/")[1];
                }
                const link = e.getAttribute("href") || "";
                let eventID = link.split("/events/")[1];
                eventID = eventID.slice(0, eventID.length - 1);

                const eventItemWrapper = e.querySelector(
                  ":scope > .event-item-wrapper"
                );
                let eventType = (eventItemWrapper?.classList.toString() || "")
                  .replace("event-item-wrapper ", "")
                  .replace("é", "e");

                let start = eventDates[eventID]?.start || "";
                let end = eventDates[eventID]?.end || "";

                if (start.length > 24) {
                  start = new Date(Date.parse(start)).toISOString();
                }
                if (end.length > 24) {
                  end = new Date(Date.parse(end)).toISOString();
                }

                allEvents.push({
                  eventID,
                  name,
                  eventType,
                  heading,
                  link,
                  image,
                  start,
                  end,
                  extraData: null
                });
              });
            });

            // Return the events as JSON
            res.status(200).json(allEvents);
          })
          .catch((err) => {
            console.error("Error fetching events from JSDOM:", err);
            res
              .status(500)
              .json({ error: "Failed to fetch events from source" });
          });
      });
    })
    .on("error", (err) => {
      console.error("Error with HTTPS request:", err.message);
      res.status(500).json({ error: "Failed to fetch events" });
    });
}
