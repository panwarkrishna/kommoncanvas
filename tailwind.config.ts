import type { Config } from "tailwindcss";

/**
 * Tailwind CSS v4 is CSS-first: design tokens (colors, fonts, spacing,
 * keyframes) are declared in `app/globals.css` via the `@theme` directive.
 * This file exists for editor/tooling intellisense and to document the
 * content graph explicitly; it is not required for Tailwind to function.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
  ],
  darkMode: "class",
};

export default config;
