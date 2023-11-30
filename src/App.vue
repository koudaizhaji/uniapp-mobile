<script>
export default {
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  methods: {},
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
        // {
        //   icon: "eye",
        //   img: '../../static/tabbarImg/find.png',
        //   text: '发现',
        //   midButton: false,
        //   pagePath: "/pages/find/index",
        //   customIcon: false,
        // },
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
		background-color: #ffffff;
		// background-color: #f4f4f4;
    // overflow: auto;
	}
</style>