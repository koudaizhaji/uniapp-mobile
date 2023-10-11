<template>
	<view>
		<!-- 头部 -->
		<view class="relative flex h-310rpx">
			<!-- 右上角消息 -->
			<view class="i-dots-horizontal-circle-outline absolute top-75rpx right-20rpx text-white font-size-50rpx z-100"></view>
			<image src="../../static/images/bg.jpg" class="h-320rpx w-100%"></image>
			<view class="flex flex-items-center absolute left-0 right-0 bottom-50rpx">
				
				<image src="../../static/images/demo/demo6.jpg"
        class="h-145rpx w-145rpx b-solid b-5rpx b-rd-100% border-#f8f9fa ml-40rpx"
				@click="navigate('login')"></image>

				<view class="ml-20rpx text-white font-35rpx" @click="navigate('login')">测试昵称</view>
				<view class="flex flex-items-center justify-items-center flex-self-end ml-auto px-20rpx 
        h-70rpx bg-#FFD43F c-#CC4A00 rounded-tl-40rpx rounded-bl-40rpx">
          <view class="line-height-none mr-10rpx i-mdi-parachute-outline"></view>
					会员积分 1.99
				</view>
			</view>
		</view>
		<!-- body -->
		<view class="w-100 flex flex-items-center justify-items-center py-20rpx bg-#563761 c-#eee ">
			<view class="w-50% flex flex-col flex-column flex-items-center justify-items-center">
				<text>福利金</text>
				<text>12.80</text>
			</view>
			
			<view class="w-50% flex flex-col  flex-column flex-items-center justify-items-center">
				<text>余额</text>
				<text>16.00</text>
			</view>
		</view>
		<!-- 图标管理 -->
		<u-cell-group>
			<u-cell size="large" title="我的订单" value="全部订单" isLink url="/pages/componentsB/tag/tag">
			</u-cell>
		</u-cell-group>
		<!-- <view class="c-#eee w-96% mx-a"> -->
		<view class="c-#eee w-96% mx-a">
			<u-grid :border="false" col="5">
            <u-grid-item v-for="(listItem,listIndex) in list" :key="listIndex">
                <u-icon
                        :customStyle="{paddingTop:20+'rpx'}"
                        :name="listItem.name"
                        :size="22"
                ></u-icon>
                <text class="c-#000">{{listItem.title}}</text>
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
		<u-divider :dashed="true"></u-divider>
		<!-- 列表菜单 -->
		<view v-for="(item,index) in menuList[0]" :key="index">
			<u-cell-group>
				<u-cell :title="item.title" isLink>
					<template #icon>
						<u-icon size="32" :name="item.leftIcon" :color="item.leftIconStyle"></u-icon>
					</template>
					<template #value>
						<text class="u-slot-value">99</text>
					</template>
				</u-cell>
			</u-cell-group>
			<!-- <uni-list-item :title="item.title" :showExtraIcon="item.showExtraIcon" 
			@click="navigate(item.urlname)" :leftIcon="item.leftIcon"
			:leftIconStyle="item.leftIconStyle"></uni-list-item> -->
		</view>
		<!-- 全局分割线 -->	
		<u-divider :dashed="true"></u-divider>
		<view v-for="(item,index) in menuList[1]" :key="index">
			<u-cell-group>
				<u-cell :title="item.title" isLink>
					<template #icon>
						<u-icon size="32" :name="item.leftIcon" :color="item.leftIconStyle"></u-icon>
					</template>
					<template #value>
						<text class="u-slot-value">99</text>
					</template>
				</u-cell>
			</u-cell-group>
			<!-- <uni-list-item :title="item.title" :showExtraIcon="item.showExtraIcon"
			@click="navigate(item.urlname)" :leftIcon="item.leftIcon"
			:leftIconStyle="item.leftIconStyle"></uni-list-item> -->
		</view>
		<button @click="login">去登录</button>
		<TabBar :tabBarList="tabBarList" :selectedIndex="2"/>
	</view>
</template>

<script>
import { uni } from '@dcloudio/uni-h5';

	// import uniListItem from "@/components/uni-ui/uni-list-item/uni-list-item.vue"
	export default {
		// components:{uniListItem},
		data() {
			return {
				tabBarList: getApp().globalData.tabBarList,
				menuList:[ // 菜单列表
					[{title:'小米会员',showExtraIcon:true,leftIcon:'level',leftIconStyle:'#FDBF2E',urlname:'search-list'},
					{title:'会员中心',showExtraIcon:true,leftIcon:'pause-circle',leftIconStyle:'#FCBE2D',urlname:''},
					{title:'服务中心',showExtraIcon:true,leftIcon:'phone',leftIconStyle:'#FA6C5E',urlname:''},				
					{title:'小米之家',showExtraIcon:true,leftIcon:'home',leftIconStyle:'#FDBF2E',urlname:''}],
					[{title:'更多设置',showExtraIcon:true,leftIcon:'bell',leftIconStyle:'#9ED45A',urlname:'search'}]
				],
				list:[
					{
						name: 'photo',
						title: '图片'
                    },
                    {
                        name: 'lock',
                        title: '锁头'
                    },
                    {
                        name: 'star',
                        title: '星星'
                    },
                    {
                        name: 'hourglass',
                        title: '沙漏'
                    },
                    {
                        name: 'home',
                        title: '首页'
                    }
				]
				
			}
		},
		methods: {
			login () {
				uni.navigateTo({
					url: '/pages/login/index'
				})
			},
			navigate(path){
				if(!path) return;
				uni.navigateTo({
					url:`/pages/${path}/${path}`
				})
			}
		}
	}
</script>

<style scoped lang="scss">

</style>