// sanity.config.js
import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk';
import { visionTool } from "@sanity/vision";
import schemas from "./schemas/schema";

export default defineConfig({
  title: "alto",
  projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID,
  dataset: import.meta.env.SANITY_STUDIO_DATASET,
  plugins: [
    deskTool(),
    visionTool(),
  ],
  schema: {
    types: schemas,
  },
});
