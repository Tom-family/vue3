import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
// vant 按需引入
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "@vant/auto-import-resolver";
import mockDevServerPlugin from "vite-plugin-mock-dev-server";
import viteCompression from "vite-plugin-compression"; // 引入 Gzip 插件

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // vueDevTools(),
    AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
    mockDevServerPlugin({
      include: ["mock/**/*.mock.{js,ts,cjs,mjs,json,json5}"],
      cors: true,
      log: "info",
    }),
    // 生产环境 gzip 压缩资源
    viteCompression({
      verbose: true, // 是否在控制台输出压缩结果
      algorithm: "gzip", // 使用 gzip 压缩
      ext: ".gz", // 生成的文件扩展名
      // threshold: 10240, // 仅压缩大于 10KB 的文件  默认1501字节
      deleteOriginFile: false, // 是否删除原始文件
      compressionOptions: { level: 9 }, // 压缩级别，1-9，越高压缩率越大
      filter: /\.(js|css|json|txt|ico|svg)(\?.*)?$/i, // 需要压缩的文件
    }),
  ],
  base: "./", // 根据你的部署环境设置正确的 base URL
  server: {
    host: true, // IP配置，支持从IP启动
    port: 5173, // 类型： number 指定服务器端口;
    proxy: {
      "^/fik": "",
      "/api": {
        target: "http://150.158.92.141:9009/api",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // 重写路径
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    assetsInlineLimit: 200 * 1024, // 大于 200KB 的文件会被打包成单独的文件，而小于 200KB 的文件会被内联为 Base64
  },
});
