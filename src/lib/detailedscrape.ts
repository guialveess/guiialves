// import fs from "fs/promises";
// import https from "https";
// import * as breakthrough from "../../pages/detailed/breakthrough";
// import * as spotlight from "../../pages/detailed/spotlight";
// import * as communityday from "../../pages/detailed/communityday";
// import * as raidbattles from "../../pages/detailed/raidbattles";
// import * as generic from "../../pages/detailed/generic";

// type Event = {
//   eventID: string;
//   link: string;
//   eventType: string;
// };

// async function fetchEventData(eventID: string): Promise<any> {
//   // Lê o arquivo como uma string (com encoding 'utf8')
//   const events = JSON.parse(
//     await fs.readFile("./files/events.min.json", { encoding: "utf8" })
//   );

//   return new Promise((resolve, reject) => {
//     https
//       .get(
//         "https://raw.githubusercontent.com/bigfoott/ScrapedDuck/data/events.min.json",
//         (res) => {
//           let body = "";
//           res.on("data", (chunk) => {
//             body += chunk;
//           });
//           res.on("end", () => {
//             try {
//               const bkp = JSON.parse(body);

//               // Garantir que `bkp` seja um array antes de iterar
//               if (Array.isArray(bkp)) {
//                 bkp.forEach((e: Event) => {
//                   generic.get(e.link, e.eventID, bkp);
//                   if (e.eventType === "research-breakthrough") {
//                     breakthrough.get(e.link, e.eventID, bkp);
//                   } else if (e.eventType === "pokemon-spotlight-hour") {
//                     spotlight.get(e.link, e.eventID, bkp);
//                   } else if (e.eventType === "community-day") {
//                     communityday.get(e.link, e.eventID, bkp);
//                   } else if (e.eventType === "raid-battles") {
//                     raidbattles.get(e.link, e.eventID, bkp);
//                   }
//                 });
//               } else {
//                 throw new Error("Invalid data format: Expected an array");
//               }

//               resolve(bkp);
//             } catch (error) {
//               reject(error);
//             }
//           });
//         }
//       )
//       .on("error", (error) => reject(error));
//   });
// }

// export default fetchEventData;
