import type { SidebarConfig } from "@vuepress/theme-default";

export const en: SidebarConfig = {
  "/en/java/": [
    {
      text: "Introduction",
      children: [
        "intro-introduction-of-java.md",
        "intro-how-to-install-java.md",
        "intro-the-first-program.md",
        "intro-use-java-ide.md",
      ],
    },
    {
      text: "Basic",
      children: ["basic-comment.md"],
    },
  ],
};
