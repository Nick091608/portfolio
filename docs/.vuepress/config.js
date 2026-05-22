import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  // 如果部署到 https://<username>.github.io/<repo-name>/，请将 base 设置为 "/<repo-name>/"
  // 例如仓库名为 vuepress-starter，则设置为 "/vuepress-starter/"
  base: "/portfolio/",

  lang: "zh-CN",

  title: "个人简历",
  description: "",

  theme: defaultTheme({
    logo: "",
    navbar: ["/", "/get-started"],
  }),

  bundler: viteBundler(),
});
