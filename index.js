import fs from "fs";
import path from "path";

/**
 * Load JSON config file as a JS object.
 *
 * @param {string} [filePath] - Path to JSON config file (default: Appsetting.json in project root).
 * @returns {object} Parsed JSON config object
 */
export function config(filePath) {
  const resolvedPath = filePath
    ? path.resolve(process.cwd(), filePath)
    : path.resolve(process.cwd(), "Appsetting.json");

  if (!fs.existsSync(resolvedPath)) {
    throw new Error(`Config file not found: ${resolvedPath}`);
  }

  const rawData = fs.readFileSync(resolvedPath, "utf-8");

  try {
    return JSON.parse(rawData); 
  } catch (err) {
    throw new Error(`Invalid JSON format in ${resolvedPath}: ${err.message}`);
  }
}
