<template>
    <view>
        <!-- 信息页 -->
        <view class="info">
            <view>
                <view>头像</view>
                <view>
                    <view>昵称</view>
                    <view>等级</view>
                </view>
            </view>
            <view>
                <view>图标1</view>
                <view>图标2</view>
            </view>
        </view>
        <!-- 卡片页 -->
        <view class="card">
            <view>
                <view>会员</view>
                <view>小字</view>
            </view>
            <view>续费</view>
        </view>
        <!-- 选项页 -->
        <view class="option">
            <view v-for="item in optionList" :key="item.id">
                <view><img :src="item.img"></view>
                <view>{{ item.title }}</view>
            </view>
        </view>
        <!-- 列表页 -->
        <view class="list">
            <view v-for="item in textList" :key="item.id">
                <view>
                    <view><img :src="item.icon"></view>
                    <view>{{ item.title }}</view>
                </view>
                <view>{{ item.text }}</view>
            </view>
        </view>
    </view>
</template>
  
<script>
import { uni } from "@dcloudio/uni-h5";
export default {

    data() {
        return {
            textList: [
                {
                    id: 1,
                    title: "安全中心",
                    text: "修改手机号和密码",
                    icon: "",
                },
                {
                    id: 2,
                    title: "推送设置",
                    text: "订阅信息推送",
                    icon: "",
                },
                {
                    id: 3,
                    title: "关于我们",
                    text: "当前版本V3.0.0",
                    icon: "",
                },
                {
                    id: 4,
                    title: "帮助反馈",
                    text: "常见问题和咨询",
                    icon: "",
                },
                {
                    id: 5,
                    title: "推荐有礼",
                    text: "邀请一人推荐获得5元优惠卷",
                    icon: "",
                },
            ],
            optionList: [
                {
                    img: "",
                    title: "钱包",
                },
                {
                    img: "",
                    title: "爱车",
                },
                {
                    img: "",
                    title: "订单",
                },
                {
                    img: "",
                    title: "积分",
                },
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
body {
    font-family: PingFang SC, PingFang SC-Regular;
    padding: 0;
    margin: 0;
    background-color: #ffffff;
}

.info {
    display: flex;
    justify-content: space-between;
}

.card {
    display: flex;
    justify-content: space-between;
}

.option {
    display: flex;
}

.list {}

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
}</style>
  