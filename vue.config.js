module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        "resolve url": true,
        import: []
      }
    }
  },
  pluginOptions: {
    "cube-ui": {
      postCompile: true,
      theme: false
    }
  },
  configureWebpack: {
    devServer: {
      proxy: {
        "/api": {
          target: "http://localhost:3000", //代理目标
          changeOrigin: true, // 是否改变请求源
        }
      }
      // before(app) {
      //   //模拟后台服务器 express写法
      //   app.get("/api/login", function(req, res) {
      //     const { username, password } = req.query;
      //     if (username == "kaikeba" && password == "123") {
      //       res.json({
      //         code: 1,
      //         token: "kaiekbazhenbucuo-" + (new Date().getTime() + 1000 * 60)
      //       });
      //     } else {
      //       res.status(401).json({
      //         code: 0,
      //         message: "用户名或者密码错误"
      //       });
      //     }
      //   });
      //   //保护接口中间件
      //   function auth(req, res, next) {
      //     if (req.headers.authorization) {
      //       next()
      //     } else {
      //       res.sendStatus(401)
      //     }
      //   }

      //   //获取登录用户信息
      //   app.get("/api/userinfo", auth, function(req, res) {
      //     res.json({code: 1, data: {name: "jingru", age:18}})
      //   })
      // }
    }
  }
};
