import { CodeTabs } from "/Users/zhangxiaoqiang/Desktop/workspace/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.86_markdown-it@14.1.1_vuepress@2.0.0-rc.20_@vuep_0ac59119f9f81100a513d056e1f54308/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/Users/zhangxiaoqiang/Desktop/workspace/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.86_markdown-it@14.1.1_vuepress@2.0.0-rc.20_@vuep_0ac59119f9f81100a513d056e1f54308/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Users/zhangxiaoqiang/Desktop/workspace/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.86_markdown-it@14.1.1_vuepress@2.0.0-rc.20_@vuep_0ac59119f9f81100a513d056e1f54308/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
