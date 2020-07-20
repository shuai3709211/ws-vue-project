const path = require("path");
const resolve = dir => {
  return path.join(__dirname, dir);
};
module.exports = {
  transpileDependencies: [],
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    loaderOptions: {
      scss: {
        prependData: `@import "~@/styles/index.scss";`
      }
    }
  },
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  outputDir: "dist",
  assetsDir: "assets",
  // 指定生成的 index.html 的输出路径  (打包之后，改变系统默认的index.html的文件名)
  // indexPath: "myIndex.html",
  // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变)
  filenameHashing: false,
  lintOnSave: true,

  // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。(默认false)
  // runtimeCompiler: false,
  /**
   * 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
   *  打包之后发现map文件过大，项目文件体积很大，设置为false就可以不输出map文件
   *  map文件的作用在于：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。
   *  有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错。
   * */
  productionSourceMap: false,

  chainWebpack: config => {
    config.entry("main").add("babel-polyfill"); // main是入口js文件
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@@", resolve("src/components"))
      .set("assets", resolve("src/assets"))
      .set("mixins", resolve("src/mixins"));
  },

  devServer: {
    host: "0.0.0.0",
    port: 9548, // 端口号
    https: false, // https:{type:Boolean}
    open: true, // 配置自动启动浏览器
    before: require("./mock/mock-server.js")
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      /*忽略console日志*/
      config.optimization.minimizer[0].options.terserOptions.compress.warnings = false;
      // config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
      config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true;
      config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = [
        "console.log"
      ];

      // 公共代码抽离
      config.optimization = {
        splitChunks: {
          cacheGroups: {
            vendor: {
              chunks: "all",
              test: /node_modules/,
              name: "vendor",
              minChunks: 1,
              maxInitialRequests: 5,
              minSize: 0,
              priority: 100
            },
            common: {
              chunks: "all",
              test: /[\\/]src[\\/]js[\\/]/,
              name: "common",
              minChunks: 2,
              maxInitialRequests: 5,
              minSize: 0,
              priority: 60
            },
            styles: {
              name: "styles",
              test: /\.(sa|sc|c)ss$/,
              chunks: "all",
              enforce: true
            },
            runtimeChunk: {
              name: "manifest"
            }
          }
        }
      };

      return {
        output: {
          // 输出重构  打包编译后的 文件名称
          filename: `js/[name].${new Date().getTime()}.js`,
          chunkFilename: `js/[name].${new Date().getTime()}.js`
        },
        externals: {
          // 配置使用CDN
        }
      };
    }
  }
};
