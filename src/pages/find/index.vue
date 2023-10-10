<template>
  <view class="flex flex-col flex-item-center justify-center">
    <view class="text-center">
      <image class="h200rpx w200rpx mt200rpx ml-a mr-a mb50rpx" src="/static/logo.png"></image>
      <view class="flex justify-center">
        <text class="font-size-36rpx c-#8f8f94">{{ title }}</text>
        <view class="i-mdi-account text-orange-400 font-size-60rpx"></view>
      </view>
    </view>
	  <TabBar :tabBarList="tabBarList" :selectedIndex="1"/>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: '发现',
      tabBarList: getApp().globalData.tabBarList,
    }
  },
  onLoad() {},
  methods: {
	  handleTabClicked () {}
  },
}
</script>


