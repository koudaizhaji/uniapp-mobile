<template>
  <view>
    <!-- 头部 -->
    <view class="top relative  flex h-420rpx">
      <view class="flex flex-items-center absolute left-0 right-0 top-60rpx">
        <image src="../../static/images/demo/demo6.jpg"
          class="h-145rpx w-145rpx b-solid b-5rpx b-rd-100% border-#f8f9fa ml-40rpx" @click="navigate('login')"></image>
        <view class="ml-20rpx text-white font-35rpx" @click="navigate('login')">测试昵称</view>
      </view>
      <view class="flex-items-center absolute left-0 right-0 top-60rpx">
        <view class="w150rpx h50rpx ml-85% mb-30rpx mt-50rpx flex">
          <view><image src="../../static/mineimg/setting.png" class="w50rpx h50rpx"></image></view>
        </view>
        <view
          class="flex flex-items-center justify-items-center mt-8 ml-auto px-20rpx h-70rpx w-250rpx bg-white c-#CC4A00 rounded-tl-40rpx rounded-bl-40rpx">
          <view class="line-height-none mr-10rpx i-mdi-diamond-stone"></view>
          尊贵会员SVIP
        </view>
      </view>
    </view>
    <!-- 金币 -->
    <view class="user_coin_info">
        <view>
          <span>金币金额</span>
          <image class="cover_q"
            src="../../static/question.png" />
        </view>
        <view class="coin_bottom">
          <view>
            <view class="coin_content">
              <image src="../../static/coin.png" alt="" />
              <span class="user_icon">10</span>
            </view>
            <view class="coin_record">
              <span>显示全部</span>
              <image src="../../static/coin-spread.png"
                alt="" />
            </view>
          </view>
          <button class="user_coin_cash">金币提现</button>
        </view>
      </view>
    <!-- body -->
    <view class="w-96% m-auto">
      <view class="grid c-#eee w-100% bg-white mb-20rpx mt-20rpx">
        <u-grid :border="true" col="4">
          <u-grid-item v-for="(listItem, listIndex) in list" :key="listIndex">
            <u-icon :customStyle="{ paddingTop: 20 + 'rpx' }" :name="listItem.name" :size="30"></u-icon>
            <text class="c-#000 mt-10rpx mb-10rpx font-size-3">{{ listItem.title }}</text>
          </u-grid-item>
        </u-grid>
      </view>

      <view class="listIcon w100% bg-white">
        <view v-for="(item, index) in menuList[0]" :key="index" class="w96% m-auto">
          <u-cell-group boder="false">
            <u-cell :title="item.title" isLink>
              <template #icon>
                <u-icon size="16" :name="item.leftIcon" :color="item.leftIconStyle"></u-icon>
              </template>
              <template size="13" #value>
                {{ item.value }}
              </template>
            </u-cell>
          </u-cell-group>
        </view>
      </view>

      <view v-for="(item, index) in menuList[1]" :key="index" class="menu bg-white mt-15rpx">
        <u-cell-group>
          <u-cell :title="item.title" class="u-font-9" isLink>
            <template #icon>
              <u-icon size="16" :name="item.leftIcon" :color="item.leftIconStyle"></u-icon>
            </template>
            <template size="10" #value>
              {{ item.value }}
            </template>
          </u-cell>
        </u-cell-group>
      </view>
      <button @click="login" class="bg-white mt-50rpx">去登录</button>
    </view>
    <view class="h-20"></view>
    <TabBar :tabBarList="tabBarList" :selectedIndex="2" />
  </view>
</template>

<script>
import { uni } from "@dcloudio/uni-h5";
export default {

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
            leftIconStyle: "#FFFFE0",
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
body{
  font-family: PingFang SC, PingFang SC-Regular;
}

.grid,
.listIcon,
.menu {
  border-radius: 1px;
}

.top {
  background: url(../../static/bg1.png) no-repeat;
}

.user_coin_info {
  width: 333px;
  height: 68px;
  margin: 18px auto;
  margin-top: -30px;
  background: linear-gradient(228deg, #6acffc -5%, #3a82ef);
  border-radius: 5px;
  box-shadow: 0px 3px 6px 0px rgba(58, 130, 239, 0.31);
  padding: 0 29px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;
  font-family: PingFang SC, PingFang SC-Light;
  font-weight: 300;
  color: #ffffff;
  position: relative;

  .cover_q {
    width: 12px;
    height: 12px;
    position: absolute;
    left: 85px;
    top: 12px;
  }

  .coin_bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;

    // align-items: flex-end;
    >view {
      display: flex;
    }

    .coin_content {
      display: flex;
      flex-direction: row;
      align-items: center;

      image {
        width: 20px;
        height: 20px;
        margin-right: 7px;
      }

      .user_icon {
        font-size: 26px;
        font-family: Akrobat, Akrobat-ExtraBold;
        font-weight: 700;
        text-align: center;
        color: #ffffff;
      }
    }

    .coin_record {
      font-size: 10px;
      font-family: PingFang SC, PingFang SC-Light;
      font-weight: 300;
      text-align: right;
      color: #ffffff;
      margin-top: 14px;
      margin-left: 16px;

      image {
        width: 5px;
        height: 8px;
        margin-left: 5px;
      }

    }
  }

  .user_coin_cash {
    width: 80px;
    height: 26px;
    line-height: 26px;
    background: #ffffff;
    border-radius: 13px;
    font-size: 12px;
    font-family: PingFang SC, PingFang SC-Regular;
    text-align: center;
    color: #3a82ef;
    margin: 0;
    margin-top: 2px;
  }
}
</style>
