
Vetur 插件对 <script setup> 的支持可能不够完善，建议使用 Volar 插件替代 Vetur。
卸载 Vetur 插件：
使用 Volar  （Vue - Official）
重启

add vite-plugin-mock-dev-server   moke server

add vite-plugin-compress  添加代码压缩
在vue.config.js中配置后
说明  服务器 默认走前端打包的.gz压缩包  如果没有  服务器再打包
前端打包后   服务器只用配置
gzip on;
gzip_static on;
否则
服务器也需要配置gzip压缩
gzip on;   # #开启gzip静态压缩功能
gzip_static on;     # # 
#gzip缓存大小
gzip_buffers 4 16k;
#gzip http版本
gzip_http_version 1.1;
#gzip 压缩级别 1-10 
gzip_comp_level 5;
#gzip 压缩类型
gzip_types text/plain application/javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;  # 是否在http header中添加Vary: Accept-Encoding，建议开启
gzip_vary on;