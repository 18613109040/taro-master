module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  weapp: {
    module: {
      postcss: {
        // 小程序端样式引用本地资源内联
        url: {
          enable: true,
          limit: 102400000000
        }
      }
    }
  },
  h5: {
    devServer: {
      host: 'localhost', // 如需局域网（如手机）访问，请更换为0.0.0.0
      // host: '0.0.0.0', // 如需局域网（如手机）访问，请更换为0.0.0.0
      port: 8080,
      https: false
    }
  }
}
