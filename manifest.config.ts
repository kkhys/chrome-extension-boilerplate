import { defineManifest } from "@crxjs/vite-plugin";
import { version } from "./package.json";

export default defineManifest(async (env) => ({
  manifest_version: 3,
  name:
    env.mode === "development"
      ? "[development] __MSG_chrome_extension_name__"
      : "__MSG_chrome_extension_name__",
  description: "__MSG_chrome_extension_description__",
  version,
  default_locale: "ja",
  icons: {
    "16": "images/icon-16.png",
    "32": "images/icon-32.png",
    "48": "images/icon-48.png",
    "128": "images/icon-128.png",
  },
}));
