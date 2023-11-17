<template>
  <view class="uni-padding-top">
    <!-- hedaer -->
    <view class="flex flex-justify-between bg-white">
      <view class="headerLogo">
        <view>拍拍严选</view>
      </view>
      <view class="headerText">
        <p> 专业质检</p>
        <p> 一年质保</p>
        <p> 7天无理由</p>
        <p class="font-bold">></p>
      </view>
    </view>
    <!-- Search -->
    <view class="bg-white text-center flex flex-items-center flex-justify-around">
      <view class="bg-white boders border-rd-2 flex-items-center flex  w-1000 h-8 ">
        <view class="bg-black i-mdi-magnify w-6 h-6 ml-2 mr-1"></view>
        <view><input class=" text-left c-black" type="text"></view>
      </view>
    </view>
    <!-- 分类 -->
    <view class="w-98% bg-#fff h-50 m-l-1% m-t-2 border-rd-2 flex flex-wrap">
      <view v-for="(item, index) in categoryList" :key="index"
        class="w-20% h-50% flex flex-col grid-justify-center items-center">
        <img :src="item.icon" class="w-15 h-15" />
        <text class="font-size-3 font-medium">{{ item.text }}</text>
      </view>
    </view>
    <!-- 轮播图 -->
    <u-swiper :list="bannerlist"></u-swiper>
    <!-- 三卡片 -->
    <!-- <view class="threecard">
      <view class="threelist position-relative" v-for="item in cardList">
        <view class="font-size-5 ml-2 mt-2 font-semibold">{{ item.title }}</view>
        <view class="font-size-3 ml-2 mt-1 font-medium">{{ item.text }}</view>
        <view class=" position-absolute bottom-1 right-1 " :class="item.icon"></view>
      </view>
    </view> -->
    <!-- 卡片式 -->
    <view class="w-100% h-40 mt-4 flex flex-justify-between bg-white ">
      <view class="flex flex-col w-48%">
        <view class="h-6 flex flex-justify-between">
          <view class="font-size-4.4 font-semibold">高价回收</view>
          <view class="mt-1 mr-6 line-height-6 font-size-3 flex"><view class="i-mdi-account-outline h-22px mr-0.5"></view> 赚了￥2000</view>
        </view>
        <!-- flex-grow   font-medium-->
        <view class="mt-3 flex">
          <view><img class="w-20" src="../../static/images/demo/cate_08.png"></view>
          <view >
            <view class="font-size-3 text-right">一加ACE&nbsp;</view>
            <view class="flex font-size-3 h-5 c-#D88E48 text-right" ><view class="h-5 mt-2">价格￥</view><view class="font-size-5 h-5 font-semibold">3800</view></view>
            <view class="ml-2 mt-2.5 text-center font-size-3.5 font-bold h-6 line-height-6 w-20 bg-black border-rd-1 c-#737D41">立即换购</view>
          </view>
        </view>
        <view class="position-relative pl-2 w-33 line-height-8 font-size-3 h-8 bg-#DAF6EE letter_spacing">更多品类高价卖 &nbsp;><view class="triangle"></view></view>
      </view>
      <view class="flex flex-col w-48%">
        <view class="flex">
          <view>
            <view class="font-size-4.5 font-bold">夺宝岛</view>
            <view class="font-size-3 c-#999 mt-1">潮品一元抢购</view>
            <view class="mt-1 w-4 h-4 line-height-4 text-center bg-#DBE0DC border-rd-50% font-bold">></view>
          </view>
          <view class="flex flex-grow-1 flex-justify-center flex-items-center">
            <img class="w-10" src="../../static/images/demo/cate_07.png" >
          </view>
        </view>
        <view class="flex">
          <view>
            <view class="font-size-4.5 font-bold">备件库</view>
            <view class="font-size-3 c-#999 mt-1">点击发现折扣</view>
            <view class="mt-1 w-4 h-4 line-height-4 text-center bg-#DBE0DC border-rd-50% font-bold">></view>
          </view>
          <view class="flex flex-grow-1 flex-justify-center flex-items-center">
            <img class="w-10 " src="../../static/images/demo/cate_09.png" >
          </view>
        </view>
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
          <li v-for="item in optionList" style="white-space: nowrap;" :key="item.id" @click="changeColor(index)"
            class="mr-2.5 ml-2.5">
            <view :class="{'titleActive':item.id===this.activeIndex}" class="font-size-4 text-center mt-2 font-semibold">
              {{ item.title }}</view>
            <view :class="{'textActive':item.id===this.activeIndex}" class="font-size-3 text-center mt-1 font-medium">{{
              item.text }}</view>
          </li>
        </ul>
      </view>
      <!-- 展示栏 -->
      <view class="flex w-100% mt-20px">
        <view class="flex justify-center w-50% bg-white"><img src="../../static/images/demo/cate_04.png" alt=""></view>
        <view class="flex justify-center w-50% bg-white"><img src="../../static/images/demo/cate_06.png" alt=""></view>
      </view>
    </view>
    <view class="h-16"></view>
    <TabBar :tabBarList="tabBarList" :selectedIndex="0" />
  </view>
</template>

<script>
import image from 'uview-plus/libs/config/props/image';
export default {
  data() {
    return {
      title: '首页',
      activeIndex: 1,
      tabBarList: getApp().globalData.tabBarList,
      optionList: [{ id: 1, title: '全部', text: '全场严选' }, { id: 2, title: '附近', text: '专注好物' }, { id: 3, title: '手机', text: '手机选择' }, { id: 4, title: '美妆', text: '美妆爆款' }, { id: 5, title: '母婴', text: '婴儿用品' },
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
    changeColor(index) {
      this.activeIndex = index
    }
  },
  components: { image }
}
</script>
<style lang="scss" scoped> 
body{
    color: #000000;
    font-size: 14px;
    font-family: Arial;
}
.headerLogo {
   position: relative;
   width: 100px;
   height: 15px;
   border-radius: 9px;
   background-color: #BFEF05;
   margin: 10px 0;
   margin-left: 10px;

   &>view:first-child {
     font-size: 21px;
     font-weight: 600;
     line-height: 1px;
     text-align: center;
   }
 }

 .headerText {
   display: flex;
   margin-top: 5px;
   margin-right: 10px;

   &>p {
     font-size: 12px;
     margin-left: 15px;
   }
   &>p:last-child {
     font-size: 12px;
     margin-right: 5px;
   }
 }
 .triangle {
  width: 0;
  height: 0;
  position: absolute;
  top: 0;
  left: 135px;
  border-bottom: 32px solid #DAF6EE; /* 底边的宽度和颜色 */
  border-right: 32px solid transparent; /* 左斜边的宽度和颜色 */
}
.letter_spacing{
  letter-spacing: 1.5px;
}
 .boders {
   border: 2px solid black;
   margin: 0px 10px;
 }

 li {
   list-style: none;
 }

 .titleActive {
   color:  orange;
 }

 .textActive {
   color:  #dd7e30;
   width: 60px;
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
 }</style>


