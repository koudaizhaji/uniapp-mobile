<template>
  <!-- <view class="flex flex-col flex-item-center justify-center uni-padding-top">
    <view class="text-center">
      <image class="h200rpx w200rpx mt200rpx ml-a mr-a mb50rpx" src="/static/logo.png"></image>
      <view class="flex justify-center">
        <text class="font-size-36rpx c-#8f8f94">{{ title }}</text>
        <view class="i-mdi-account text-orange-400 font-size-60rpx"></view>
      </view>
    </view>
	  <TabBar :tabBarList="tabBarList" :selectedIndex="0"/>
  </view> -->
    <u-swiper :list="bannerlist"></u-swiper>
    <TabBar :tabBarList="tabBarList" :selectedIndex="0"/>
</template>

<script>
// import userCounter from '../../../store/counter.js'
// const store = userCounter()
export default {
  data() {
    return {
      title: '首页',
	    tabBarList: getApp().globalData.tabBarList,
      bannerlist: [
          'https://cdn.uviewui.com/uview/swiper/swiper1.png',
          'https://cdn.uviewui.com/uview/swiper/swiper2.png',
          'https://cdn.uviewui.com/uview/swiper/swiper3.png',
      ]
    }
  },
  onLoad () {},
  methods: {},
}
</script>


