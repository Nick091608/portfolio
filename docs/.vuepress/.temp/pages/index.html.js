import comp from "/Users/zhangxiaoqiang/Desktop/workspace/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"navbar\":true,\"sidebar\":false,\"contributors\":false,\"editLink\":false,\"lastUpdated\":false},\"headers\":[],\"git\":{\"updatedTime\":1779413367000,\"changelog\":[{\"hash\":\"fa0dbe42d9474992acdb520f763e736a029a7577\",\"time\":1779413367000,\"email\":\"1301807538@qq.com\",\"author\":\"landon\",\"message\":\"deploy: init portfolio\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
