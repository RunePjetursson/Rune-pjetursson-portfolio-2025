// server/api/project-data.js

import { defineEventHandler, readBody } from "h3";
import fs from "fs";
import path from "path";

// Create an API route for each JSON file you want to serve
export default defineEventHandler(async (event) => {
  // You can add more conditions to match specific file requests
  const fileName = event.context.params.fileName;

  try {
    const filePath = path.resolve(
      "assets/project-data/mmd",
      `${fileName}.json`
    );
    const fileContent = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileContent);
  } catch (error) {
    return { error: "File not found" };
  }
});
