"use client";

import { File, Folder, Tree } from "@/components/ui/file-tree";

export function ViteFileTree() {
  return (
    <div className="relative flex h-auto w-full md:w-3/4 lg:w-1/2 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background shadow-md">
      <Tree
        className="overflow-hidden rounded-md bg-background p-2"
        initialSelectedId="main"
        initialExpandedItems={["src", "components", "styles", "assets", "state"]}
        elements={VITE_STRUCTURE}
      >
        <Folder value="src" element="src">
          <File value="main">
            <p>main.tsx</p>
          </File>
          <File value="index">
            <p>index.html</p>
          </File>
          <Folder value="components" element="components">
            <File value="header">
              <p>Header.tsx</p>
            </File>
            <File value="recipe-card">
              <p>RecipeCard.tsx</p>
            </File>
            <File value="footer">
              <p>Footer.tsx</p>
            </File>
          </Folder>
          <Folder value="styles" element="styles">
            <File value="global">
              <p>global.css</p>
            </File>
            <File value="recipe-card">
              <p>RecipeCard.css</p>
            </File>
          </Folder>
          <Folder value="assets" element="assets">
            <File value="logo">
              <p>logo.svg</p>
            </File>
            <File value="background">
              <p>background.jpg</p>
            </File>
          </Folder>
          <Folder value="state" element="state">
            <File value="store">
              <p>store.ts</p>
            </File>
          </Folder>
        </Folder>
      </Tree>
    </div>
  );
}

const VITE_STRUCTURE = [
  {
    id: "src",
    name: "src",
    children: [
      { id: "main", name: "main.tsx" },
      { id: "index", name: "index.html" },
      {
        id: "components",
        name: "components",
        children: [
          { id: "header", name: "Header.tsx" },
          { id: "recipe-card", name: "RecipeCard.tsx" },
          { id: "footer", name: "Footer.tsx" },
        ],
      },
      {
        id: "styles",
        name: "styles",
        children: [
          { id: "global", name: "global.css" },
          { id: "recipe-card", name: "RecipeCard.css" },
        ],
      },
      {
        id: "assets",
        name: "assets",
        children: [
          { id: "logo", name: "logo.svg" },
          { id: "background", name: "background.jpg" },
        ],
      },
      {
        id: "state",
        name: "state",
        children: [{ id: "store", name: "store.ts" }],
      },
    ],
  },
];
