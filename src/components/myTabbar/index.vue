<template>
	<view class="position-fixed bottom-0 flex grid-justify-around w-screen bg-white">
		<view v-for="(item,index) in tabBarList" :key="item.pagePath" @click="handleTab(item)" class="flex flex-col flex-justify-items-center grid-items-center">
			<u-icon :name="item.icon"  :color="selectedIndex !== index ? '' : 'orange'" size="26"></u-icon>
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