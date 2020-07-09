const Plugins = [];
if (process.env.NODE_ENV === 'production') {
  Plugins.push('transform-remove-console')
} else {
  // 为开发环境修改配置...
}

module.exports = {
  "presets": [
    "@vue/cli-plugin-babel/preset"
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ],
    ...Plugins
  ]
}