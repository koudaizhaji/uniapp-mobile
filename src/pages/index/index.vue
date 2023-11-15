<template>
  <view class="uni-padding-top">
    <!-- hedaer -->
    <view class="h-20 bg-#C9AE5F text-center flex flex-items-center flex-justify-around">
      <view class="font-size-6 c-white">拍拍</view>
      <view class="bg-#DDC990 border-rd-1 flex-items-center flex  w-64 h-10 ">
        <view class="bg-white i-mdi-magnify w-6 h-6 ml-2 mr-1"></view>
        <view><input class="text-left c-white" type="text"></view>
      </view>
      <view class="c-white">签到</view>
    </view>
    <!-- 轮播图 -->
    <u-swiper :list="bannerlist"></u-swiper>
    <!-- 分类 -->
    <view class="w-98% bg-#fff h-50 m-l-1% m-t-2 border-rd-2 flex flex-wrap">
      <view v-for="(item, index) in categoryList" :key="index"
        class="w-20% h-50% flex flex-col grid-justify-center items-center">
        <img :src="item.icon" class="w-15 h-15" />
        <text>{{ item.text }}</text>
      </view>
    </view>
    <!-- 三卡片 -->
    <view class="threecard">
      <view class="threelist position-relative" v-for="item in cardList">
        <view class="font-size-5 ml-2 mt-2 font-semibold">{{ item.title }}</view>
        <view class="font-size-3 ml-2 mt-1 font-medium">{{ item.text }}</view>
        <view class=" position-absolute bottom-1 right-1 " :class="item.icon"></view>
      </view>
    </view>
    <!-- 卡片式 -->
    <view class="w-100% h-200px flex flex-items-center flex-col bg-white ">
      <view class="mb-3 mt-2 font-size-5 font-semibold">最新特价</view>
      <view class=" w-100%">
        <u-swiper :list="bannerlist" previousMargin="30" nextMargin="30" :circular="true" :autoplay="false" radius="5"
          bgColor="#ffffff"></u-swiper>
      </view>
    </view>
    <!-- 轮转 -->
    <!-- <view class="w-98% h-52 bg-#fff m-l-1% m-t-2 overflow-x-scroll" style="white-space:nowrap">
      <view v-for="(item, index) in categoryList" :key="index" class="display-inline-block w-50 h-50">
        <img :src="item.icon" class="w-50" />
      </view>
    </view> -->
    <!-- 商品列表 -->
    <view>
      <!-- 选项栏 -->
      <view style="width: 100%; overflow-x: auto;" class="flex justify-center">
        <ul class="flex p-0 m">
          <li v-for="item in optionList" style="white-space: nowrap;" :key="item.id" @click="changeColor(index)"  class="mr-2.5 ml-2.5">
            <view :class="{'titleActive':item.id===this.activeIndex}" class="font-size-4 text-center mt-2 font-semibold">{{ item.title }}</view>
            <view :class="{'textActive':item.id===this.activeIndex}" class="font-size-3 text-center mt-1 font-medium">{{ item.text }}</view>
          </li>
        </ul>
      </view>
      <!-- 展示栏 -->
      <view class="flex w-100% mt-20px">
        <view class="flex justify-center w-50% bg-white"><img src="../../static/images/demo/cate_01.png" alt=""></view>
        <view class="flex justify-center w-50% bg-white"><img src="../../static/images/demo/cate_02.png" alt=""></view>
      </view>
    </view>
    <view class="h-16"></view>
    <TabBar :tabBarList="tabBarList" :selectedIndex="0" />
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
      activeIndex:1,
      tabBarList: getApp().globalData.tabBarList,
      optionList: [{ id:1,title: '全部', text: '全场严选' }, { id:2,title: '附近', text: '专注好物' }, { id:3,title: '手机', text: '手机选择' }, { id:4,title: '美妆', text: '美妆爆款' }, { id:5,title: '母婴', text: '婴儿用品' }, 
      // { title: '配件', text: '汽车配件' }, { title: '电脑', text: '量大从优' }
    ],
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
      ],
      cardList: [
        { title: '京东特卖', text: '京东特卖家具', icon: 'i-mdi-account-tie bg-green' },
        { title: '京东邮件', text: '京东邮件发送', icon: 'i-mdi-account-supervisor bg-red' },
        { title: '京东回收', text: '京东回收家电', icon: 'i-mdi-apple-icloud bg-blue' },

      ],
    };
  },
  onLoad() { },
  methods: {
    changeColor(index){
      this.activeIndex=index
    }
  },
  components: { image }
}
</script>
<style lang="scss" scoped> 
li{
  list-style: none;
}
.titleActive{
  color: green;
}
.textActive{
  color: white;
  width: 60px;
  background-color: green;
  border-radius: 6px;
}
.threecard {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;

  .threelist {
    height: 70px;
    width: 120px;
    border-radius: 5px;
    background-color: white;
  }
}
</style>


