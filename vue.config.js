module.exports = {
  devServer: {
    host: "127.0.0.1",
    port: "8080",
    disableHostCheck: true,
    proxy: {
      "/api": {
        target: `http://127.0.0.1:5050`,
        changeOrigin: true, //允许跨域
        pathRewrite: {
          "^/api": "",
          //将程序中所以以"/暗号"开头的地址，替换为空字符串，再和target中的基础路径拼接起来作为发送到服务器的最终请求地址。
        },
      },
    },
  },
};
