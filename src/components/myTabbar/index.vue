<template>
	<view class="position-fixed bottom-0 flex grid-justify-around w-screen bg-white h-15 grid-items-center">
		<view v-for="(item,index) in tabBarList" :key="item.pagePath" @click="handleTab(item)" class="flex flex-col flex-justify-items-center grid-items-center" :style="{width: (100/tabBarList.length) + '%'}">
			<u-icon :name="item.icon"  :color="selectedIndex !== index ? '' : 'orange'" size="28"></u-icon>
			<!-- <img :src="item.img"  class="w-6 h-6"  :class="{'w-8 h-8':selectedIndex === index}"/> --> <!-- 自定义图片 -->
			<text :class="{'color-orange':selectedIndex === index}">{{item.text}}</text>
		</view>
	</view>
</template>

<script>
    export default {
		props: {
			tabBarList: {
				type: Array,
				default: () => []
			},
			selectedIndex: {
				type: Number,
				default: 0
			}
		},
        methods: {
			handleTab(e) {
				if (e) {
					uni.redirectTo({
						url: e.pagePath
					})
				}
			}
		}
    }
</script>

<style scoped lang="scss">
    
</style>