# 依赖版本管理

    ^2.0.3  ~2.0.3

X.Y.Z
^ X 保存不变 Y 和 Z 永远安装最新的版本
~ X 和 Y 保持不变 Z 永远安装最新的版本

dep
-S --save

devDep
-D --save-dev

npm rebuild
重新下载 node_modules
npm cache clear
清除缓存
