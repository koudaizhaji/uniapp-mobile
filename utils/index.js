const tabBar = {
	indexList: [
		{
			icon: "home", //tabBar图标
			text: '首页', // 显示的提示文字
			pagePath: "/pages/index/index", // 点击某一个item时，跳转的路径，此路径必须是pagees.json中tabBar字段中定义的路径
			customIcon: false, // 如果使用自定义扩展的图标库字体，需配置此值为true
			midButton: false, // 如果是凸起按钮项，需配置此值为true
		},
		{
			icon: "eye",
			text: '发现',
			midButton: false,
			pagePath: "/pages/find/index",
			customIcon: false,
		},
		{
			icon: "account",
			text: '个人中心',
			customIcon: false,
			pagePath: "/pages/mine/mine",
			customIcon: false,
		},
	],
}

export default tabBar
