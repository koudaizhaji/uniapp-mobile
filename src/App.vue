<script>
export default {
  onLaunch: function () {
    console.log('App Launch')
    if (this.globalData.type === 'mp-weixin') { //小程序
      this.wxLogin()  // 调用wx登录
    }
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  methods: {
    wxLogin () {
      uni.login({ 
        "provider": "weixin",
        "onlyAuthorize": true, // 微信登录仅请求授权认证
        success: function(event){
          const {code} = event
          //客户端成功获取授权临时票据（code）,向业务服务器发起登录请求。
          uni.request({
              url: 'https://www.example.com/loginByWeixin', //仅为示例，并非真实接口地址。
              data: {
                  code: event.code
              },
              success: (res) => {
                  //获得token完成登录
                uni.setStorageSync('token',res.token)
              }
          });
        },
        fail: function (err) {}
      })
    }
  },
  globalData:{
      type: uni.getSystemInfoSync().uniPlatform, //当前运行环境
      tabBarList: [ //自定义底部tabbar
        {
          icon: "home", //tabBar图标
          img: '../../static/tabbarImg/home.png', //自定义图片
          text: '首页', // 显示的提示文字
          pagePath: "/pages/index/index", // 点击某一个item时，跳转的路径，此路径必须是pagees.json中tabBar字段中定义的路径
          customIcon: false, // 如果使用自定义扩展的图标库字体，需配置此值为true
          midButton: false, // 如果是凸起按钮项，需配置此值为true
        },
        {
          icon: "eye",
          img: '../../static/tabbarImg/find.png',
          text: '发现',
          midButton: false,
          pagePath: "/pages/find/index",
          customIcon: false,
        },
        {
          icon: "account",
          img: '../../static/tabbarImg/my.png',
          text: '个人中心',
          customIcon: false,
          pagePath: "/pages/mine/mine",
          customIcon: false,
        },
      ],
	},
}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-plus/index.scss";
  .uni-padding-top {
    padding-top: var(--status-bar-height);
  }

  uni-page-body,page{
		background-color: #f4f4f4;
	}
</style>