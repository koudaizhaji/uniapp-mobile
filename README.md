# uni-mobile-vue-vite

## 🥇基本情况
- 基于uniapp的移动端项目
- uniapp+vue3+vite+unocss（原子化css）+uview
- 一键移动端项目
- 环境要求：
  - nodejs 14.18.1
  - vscode或HBuilder都可开发可编译

✨开发要点：

- 支持`i-mdi-`带上名称定义各类字体图标加上原子css定义图标样式

- 支持scss嵌套定义组合的原子css

- 例

  ```js
  // 定义的就是个人中心的图标，橘色，尺寸60rpx
  <view class="i-mdi-account text-orange-400 font-size-60rpx">
  // 这里的class的shijieheping在base-btn类的中间，后面是很多样式集合。适用于定义的class过多。
  // 另非常常用的，可组合成自定义的class,从而直接使用
  <style scoped lang="scss">
      .base-btn{
      @apply w-200px h-40rpx center ml-a mr-a rounded bg-blue p-x-10 text-2xl text-white;
      .shijieheping{
          @apply w-100px h-20rpx center ml-a mr-a rounded bg-yellow font-size-12px
      }
  }
  
  </style>
  ```

  

## 🥈运行流程
```bash
npm install
npm run dev:h5
```

## 🥉项目目录
```js
my-uniapp-project/
|-- src/
|   |-- pages/                   # Tabbars 相关页面
|   |   |-- home/
|   |   |   |-- home.vue         # 主页
|   |   |   |-- ...
|   |   |-- cart/
|   |   |   |-- cart.vue         # 购物车页面
|   |   |   |-- ...
|   |   |-- mine/
|   |   |   |-- mine.vue      # 个人中心页面
|   |   |   |-- ...
|   |-- api/                  # API 请求
|   |   |-- auth.js           # 登录授权相关的 API
|   |   |-- order.js          # 订单相关的 API
|   |   |-- ...
|   |-- assets/               # 静态资源
|   |   |-- images/           # 图片资源
|   |   |-- fonts/            # 字体资源
|   |   |-- ...
|   |-- common/               # 通用代码
|   |   |-- components/       # 通用组件
|   |   |-- utils/            # 通用工具函数
|   |   |-- ...
|   |-- modules/              # 不同模块的功能
|   |   |-- auth/             # 登录授权功能
|   |   |   |-- components/   # 登录授权相关组件
|   |   |   |-- ...
|   |   |-- kfc-order/        # KFC点餐业务功能
|   |   |   |-- components/   # 点餐业务相关组件
|   |   |   |-- ...
|   |   |-- user-center/      # 通用个人中心功能
|   |   |   |-- components/   # 个人中心相关组件
|   |   |   |-- templates/    # 个人中心相关模板
|   |   |   |-- ...
|   |-- styles/               # CSS 样式属性
|   |   |-- variables.scss    # 变量和全局样式属性
|   |   |-- ...
|   |-- ...
|-- static/                   # 静态资源（不需要经过构建的资源）
|-- uni.scss                 # 主样式文件
|-- manifest.json
|-- pages.json
|-- README.md
|-- package.json
|-- ...
|-- web/                  # Webview 页面
|   |-- webview-1/
|   |   |-- webview-1.vue    # Webview 页面1
|   |   |-- ...
|   |-- webview-2/
|   |   |-- webview-2.vue    # Webview 页面2
|   |   |-- ...
|-- node_modules/             # 第三方库依赖（通过 npm 安装）
|-- ...

```

## 🏅待增
## 🎖 待增E