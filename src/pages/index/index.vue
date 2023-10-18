<template>
    <view class="uni-padding-top">
      <!-- hedaer -->
      <view class="h-20 text-center bg-yellow">
        <text>header</text>
      </view>
      <!-- 轮播图 -->
      <u-swiper :list="bannerlist"></u-swiper>
      <!-- 分类 -->
      <view class="w-98% bg-#fff h-50 m-l-1% m-t-2 border-rd-2 flex flex-wrap">
        <view v-for="(item,index) in categoryList" :key="index" class="w-20% h-50% flex flex-col grid-justify-center items-center">
          <img :src="item.icon" class="w-15 h-15"/>
          <text>{{ item.text }}</text>
        </view>
      </view>
      <!-- 卡片式 -->
      <view class="w-98% h-52 bg-#fff m-l-1% m-t-2 overflow-x-scroll" style="white-space:nowrap">
        <!-- <u-swiper
          :list="bannerlist"
          previousMargin="30"
          nextMargin="30"
          :circular="false"
          :autoplay="false"
          radius="5"
          bgColor="#ffffff"
        ></u-swiper> -->
          <view v-for="(item,index) in categoryList" :key="index" class="display-inline-block w-50 h-50">
            <img :src="item.icon"  class="w-50"/>
          </view>
      </view>
      <!-- 商品列表 -->
      <view>
        
      </view>
      <TabBar :tabBarList="tabBarList" :selectedIndex="0"/>
    </view>
</template>

<script>
import image from 'uview-plus/libs/config/props/image';

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
                'https://cdn.uviewui.com/uview/swiper/swiper1.png',
                'https://cdn.uviewui.com/uview/swiper/swiper2.png',
                'https://cdn.uviewui.com/uview/swiper/swiper3.png',
                'https://cdn.uviewui.com/uview/swiper/swiper1.png',
                'https://cdn.uviewui.com/uview/swiper/swiper2.png',
                'https://cdn.uviewui.com/uview/swiper/swiper3.png',
            ],
            categoryList: [
                { icon: '../../static/images/demo/cate_01.png', text: '手机数码' },
                { icon: '../../static/images/demo/cate_02.png', text: '买前必领' },
                { icon: '../../static/images/demo/cate_03.png', text: '一起拼团' },
                { icon: '../../static/images/demo/cate_04.png', text: '疯狂砍价' },
                { icon: '../../static/images/demo/cate_05.png', text: '限时秒杀' },
                { icon: '../../static/images/demo/cate_06.png', text: '分销中心' },
                { icon: '../../static/images/demo/cate_07.png', text: '我的收藏' },
                { icon: '../../static/images/demo/cate_08.png', text: '新闻资讯' },
                { icon: '../../static/images/demo/cate_09.png', text: '我的订单' },
                { icon: '../../static/images/demo/cate_01.png', text: '我的积分' }
            ]
        };
    },
    onLoad() { },
    methods: {},
    components: { image }
}
</script>
<style lang="scss" scoped>
</style>


