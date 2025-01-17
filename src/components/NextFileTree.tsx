"use client";

import { File, Folder, Tree } from "@/components/ui/file-tree";

export function NextFileTree() {
  return (
    <div className="relative flex h-auto w-full md:w-3/4 lg:w-1/2 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background shadow-md">
      <Tree
        className="overflow-hidden rounded-md bg-background p-2"
        initialSelectedId="layout"
        initialExpandedItems={["src", "app", "components", "pages", "lib"]}
        elements={NEXT_STRUCTURE}
      >
        <Folder value="src" element="src">
          <Folder value="app" element="app">
            <File value="layout">
              <p>layout.tsx</p>
            </File>
            <File value="page">
              <p>page.tsx</p>
            </File>
            <Folder value="dashboard" element="dashboard">
              <File value="page">
                <p>page.tsx</p>
              </File>
              <File value="analytics">
                <p>analytics.tsx</p>
              </File>
            </Folder>
            <Folder value="blog" element="blog">
              <File value="page">
                <p>page.tsx</p>
              </File>
              <File value="[slug]">
                <p>[slug].tsx</p>
              </File>
            </Folder>
          </Folder>
          <Folder value="pages" element="pages">
            <File value="api">
              <p>api</p>
            </File>
            <Folder value="api" element="api">
              <File value="checkout">
                <p>checkout.ts</p>
              </File>
            </Folder>
          </Folder>
          <Folder value="components" element="components">
            <File value="navbar">
              <p>navbar.tsx</p>
            </File>
            <File value="footer">
              <p>footer.tsx</p>
            </File>
            <File value="button">
              <p>button.tsx</p>
            </File>
          </Folder>
          <Folder value="lib" element="lib">
            <File value="auth">
              <p>auth.ts</p>
            </File>
            <File value="db">
              <p>db.ts</p>
            </File>
            <File value="stripe">
              <p>stripe.ts</p>
            </File>
          </Folder>
        </Folder>
      </Tree>
    </div>
  );
}

const NEXT_STRUCTURE = [
  {
    id: "src",
    name: "src",
    children: [
      {
        id: "app",
        name: "app",
        children: [
          { id: "layout", name: "layout.tsx" },
          { id: "page", name: "page.tsx" },
          {
            id: "dashboard",
            name: "dashboard",
            children: [
              { id: "page", name: "page.tsx" },
              { id: "analytics", name: "analytics.tsx" },
            ],
          },
          {
            id: "blog",
            name: "blog",
            children: [
              { id: "page", name: "page.tsx" },
              { id: "[slug]", name: "[slug].tsx" },
            ],
          },
        ],
      },
      {
        id: "pages",
        name: "pages",
        children: [
          {
            id: "api",
            name: "api",
            children: [
              { id: "checkout", name: "checkout.ts" },
            ],
          },
        ],
      },
      {
        id: "components",
        name: "components",
        children: [
          { id: "navbar", name: "navbar.tsx" },
          { id: "footer", name: "footer.tsx" },
          { id: "button", name: "button.tsx" },
        ],
      },
      {
        id: "lib",
        name: "lib",
        children: [
          { id: "auth", name: "auth.ts" },
          { id: "db", name: "db.ts" },
          { id: "stripe", name: "stripe.ts" },
        ],
      },
    ],
  },
];
