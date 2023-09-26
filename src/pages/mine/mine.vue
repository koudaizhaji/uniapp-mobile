<template>
    <view class="flex flex-col flex-item-center justify-center">
      <image class="h200rpx w200rpx mt200rpx ml-a mr-a mb50rpx" src="/static/logo.png"></image>
      <view class="flex justify-center">
        <text class="font-size-36rpx c-#8f8f94">{{ title }}</text>
      </view>
      <view class="base-btn i-vscode-icons:file-type-light-pnpm">按钮
        <view class="shijieheping">
           世界和平
        </view>
      </view>
      <view class=""></view>
    </view>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: 'mine',
      }
    },
    onLoad() {},
    methods: {},
  }
  </script>

<style scoped lang="scss">
    .base-btn{
    @apply w-200px h-40rpx center ml-a mr-a rounded bg-blue p-x-10 text-2xl text-white;
    .shijieheping{
        @apply w-100px h-20rpx center ml-a mr-a rounded bg-yellow font-size-12px
    }
}

</style>