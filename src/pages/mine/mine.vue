<template>
  <view>
    <!-- 头部 -->
    <view class="top relative  flex h-310rpx">
      <!-- 右上角消息 -->
      <!-- <view
        class="i-dots-horizontal-circle-outline absolute top-50rpx right-20rpx text-white font-size-50rpx z-100 w-100%,"
      >
      </view> -->
      <!-- <image src="../../static/images/bg.jpg" class="h-320rpx w-100%"></image> -->
      <view class="flex flex-items-center absolute left-0 right-0 bottom-50rpx">
        <image
          src="../../static/images/demo/demo6.jpg"
          class="h-145rpx w-145rpx b-solid b-5rpx b-rd-100% border-#f8f9fa ml-40rpx"
          @click="navigate('login')"
        ></image>
        <view class="ml-20rpx text-white font-35rpx" @click="navigate('login')"
          >测试昵称</view
        >
      </view>
      <view class="flex-items-center absolute left-0 right-0 bottom-50rpx">
        <view class="w150rpx h50rpx ml-80% mb-30rpx mt-50rpx">
          <image
            src="../../static/mineimg/information.png"
            class="w50rpx h50rpx mr-15rpx"
          ></image>
          <image
            src="../../static/mineimg/setting.png"
            class="w50rpx h50rpx"
          ></image>
        </view>
        <view
          class="flex flex-items-center justify-items-center ml-auto px-20rpx h-70rpx w31% bg-#FFD43F c-#CC4A00 rounded-tl-40rpx rounded-bl-40rpx"
        >
          <view
            class="line-height-none mr-10rpx i-mdi-parachute-outline"
          ></view>
          会员积分 1.99
        </view>
      </view>
    </view>
    <!-- body -->
    <view class="w-96% m-auto">
      <!-- <view
        class="flex flex-items-center justify-items-center py-20rpx bg-white"
      >
        <view
          class="w-48% flex flex-col flex-items-center justify-items-center"
        >
          <text>福利金</text>
          <text>12.80</text>
        </view>

        <view
          class="w-48% flex flex-col flex-items-center justify-items-center"
        >
          <text>余额</text>
          <text>16.00</text>
        </view>
      </view> -->
      <!-- 图标管理 -->
      <!-- <u-cell-group class="bg-white">
        <u-cell
          size="large"
          title="我的订单"
          value="全部订单"
          isLink
          url="/pages/componentsB/tag/tag"
        >
        </u-cell>
      </u-cell-group> -->
      <!-- <view class="c-#eee w-96% mx-a"> -->
      <view class="grid c-#eee w-100% bg-white mb-20rpx mt-20rpx">
        <u-grid :border="true" col="4">
          <u-grid-item v-for="(listItem, listIndex) in list" :key="listIndex">
            <u-icon
              :customStyle="{ paddingTop: 20 + 'rpx' }"
              :name="listItem.name"
              :size="30"
            ></u-icon>
            <text class="c-#000 mt-10rpx mb-10rpx">{{ listItem.title }}</text>
          </u-grid-item>
        </u-grid>
        <!-- <view class="flex flex-item-center">
				<view class="flex-1 flex flex-column flex-item-center justify-items-center py-30rpx" hover-class="bg-#F1F1F1"
				v-for="i in 4" :key="i">
					<view class="i-mdi-cog-outline font-40rpx line-h"></view>
					<view>代付款</view>
				</view>
			</view> -->
      </view>
      <!-- 全局分割线 -->
      <!-- <u-divider :dashed="true"></u-divider> -->
      <!-- 列表菜单 -->

      <view class="listIcon w100% bg-white">
        <view
          v-for="(item, index) in menuList[0]"
          :key="index"
          class="w96% m-auto"
        >
          <u-cell-group boder="false">
            <u-cell :title="item.title" isLink>
              <template #icon>
                <u-icon
                  size="26"
                  :name="item.leftIcon"
                  :color="item.leftIconStyle"
                ></u-icon>
              </template>
              <template #value>
                {{ item.value }}
              </template>
            </u-cell>
          </u-cell-group>
          <!-- <uni-list-item :title="item.title" :showExtraIcon="item.showExtraIcon" 
			@click="navigate(item.urlname)" :leftIcon="item.leftIcon"
			:leftIconStyle="item.leftIconStyle"></uni-list-item> -->
        </view>
      </view>
      <!-- 全局分割线 -->
      <!-- <u-divider :dashed="true"></u-divider> -->
      <view
        v-for="(item, index) in menuList[1]"
        :key="index"
        class="menu bg-white mt-80rpx"
      >
        <u-cell-group>
          <u-cell :title="item.title" isLink>
            <template #icon>
              <u-icon
                size="32"
                :name="item.leftIcon"
                :color="item.leftIconStyle"
              ></u-icon>
            </template>
            <template #value>
              <!-- <text class="u-slot-value">99</text>-->
              {{ item.value }}
            </template>
          </u-cell>
        </u-cell-group>
        <!-- <uni-list-item :title="item.title" :showExtraIcon="item.showExtraIcon"
			@click="navigate(item.urlname)" :leftIcon="item.leftIcon"
			:leftIconStyle="item.leftIconStyle"></uni-list-item> -->
      </view>
      <button @click="login" class="bg-white mt-50rpx">去登录</button>
    </view>
    <!-- <view class="h-20"></view> -->
    <TabBar :tabBarList="tabBarList" :selectedIndex="2" />
  </view>
</template>

<script>
import { uni } from "@dcloudio/uni-h5";

// import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
export default {
  // components:{uniListItem},
  data() {
    return {
      tabBarList: getApp().globalData.tabBarList,
      menuList: [
        // 菜单列表
        [
          {
            title: "安全中心",
            value: "修改手机号和密码",
            showExtraIcon: true,
            leftIcon: "/src/static/mineimg/safe.png",
            // leftIconStyle: "#FFFFE0",
          },
          {
            title: "推送设置",
            value: "订阅信息推送",
            showExtraIcon: true,
            leftIcon: "/src/static/mineimg/information.png",
          },
          {
            title: "关于我们",
            value: "当前版本V3.0.0",
            showExtraIcon: true,
            leftIcon: "/src/static/mineimg/about.png",
          },
          {
            title: "帮助反馈",
            value: "常见问题和咨询",
            showExtraIcon: true,
            leftIcon: "/src/static/mineimg/feedback.png",
            // leftIconStyle: "#FDBF2E",
            // urlname: "",
          },
        ],
        [
          {
            title: "推荐有礼",
            value: "邀请一人推荐获得5元优惠卷",
            showExtraIcon: true,
            leftIcon: "/src/static/mineimg/gift.png",
            // leftIconStyle: "#9ED45A",
            // urlname: "search",
          },
        ],
      ],
      list: [
        {
          name: "/src/static/mineimg/wallet.png",
          title: "钱包",
        },
        {
          name: "/src/static/mineimg/car.png",
          title: "爱车",
        },
        {
          name: "/src/static/mineimg/order.png",
          title: "订单",
        },
        {
          name: "/src/static/mineimg/integral.png",
          title: "积分",
        },
        // {
        //   name: "home",
        //   title: "首页",
        // },
      ],
    };
  },
  methods: {
    login() {
      uni.navigateTo({
        url: "/pages/login/index",
      });
    },
    navigate(path) {
      if (!path) return;
      uni.navigateTo({
        url: `/pages/${path}/${path}`,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.top-left {
}
.grid,
.listIcon,
.menu {
  border-radius: 15px;
}
.top {
  background: linear-gradient(45deg, #bef000, #a0e19d);
}
</style>
