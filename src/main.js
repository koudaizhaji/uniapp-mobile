import {
	createSSRApp
  } from "vue";
  import App from "./App.vue";
  import 'virtual:uno.css'
  // 引入全局 uView 框架
  import uviewPlus from 'uview-plus'

  
  export function createApp() {
  const app = createSSRApp(App);
  // 在这里实例化Vue并挂载到app上
  app.use(uviewPlus);
	return {
	  app,
	};
  }
  