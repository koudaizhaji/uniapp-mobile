<template>
	<view :style="{height: headerHeight}">
		<u-navbar
			:title="title"
			:leftIconColor="leftIconColor"
			:leftText="leftText"
			:height="headerHeight"
			@leftClick="leftClick"
			:border="false"
			@rightClick="rightClick"
			:borderBottom="false"
			:bgColor="headerBgColor"
			:fixed="true"
			:safeAreaInsetTop='true'>
			<view class="u-nav-slot" slot="right">
				<slot name='right'></slot>
			</view>
		</u-navbar>
	</view>
</template>

<script>
	export default {
		props: {
			headerHeight: { //header高度
				type: String,
				default: '44px'
			},
			headerBgColor: {
				type: String, //header背景颜色
				default: '#fff'
			},
			leftIconColor: {
				type: String, //左侧icon颜色
				default: '#333'
			},
			width: { // 搜索框宽度
				type: String,
				default: '75%'
			},
			title: { // 中间text
				type: String,
				default: ''
			},
			leftText: { // 左侧返回text
				type: String,
				default: ''
			}
		},
		methods: {
			leftClick () {
				uni.navigateBack()
			},
			rightClick () {
				this.$emit('rightClick')
			}
		},
	}
</script>
