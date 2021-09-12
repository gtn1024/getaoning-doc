import type { SidebarConfig } from "@vuepress/theme-default";

export const zh: SidebarConfig = {
  "/java/": [
    {
      text: "导论",
      children: [
        "intro-introduction-of-java.md",
        "intro-how-to-install-java.md",
        "intro-the-first-program.md",
        "intro-use-java-ide.md",
      ],
    },
    {
      text: "基础入门",
      children: ["basic-comment.md"],
    },
  ],
};
