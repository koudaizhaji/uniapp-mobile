<template>
   <view class="">
        <p class="mt-10 mb-2 font-size-6 font-medium text-center">欢迎登录xxxxx</p>
        <p class="mb-10 font-size-1 text-center color-coolgray">未注册的手机号验证后自动创建账号</p>
        <view class="flex flex-justify-left grid-items-center h-10 w-80% bg-white m-l-10% border-rd-5">
            <view class="m-l-2 m-r-2">+86 |</view>
            <input :value="phoneNum" type="number" maxlength="11" placeholder="请输入手机号码"/>
        </view>
        <view class="flex flex-justify-left grid-items-center h-10 w-80% bg-white m-l-10% border-rd-5 mt-5">
            <view class="m-r-5"></view>
            <input :value="passWord" type="password" maxlength="11" placeholder="请输入密码"/>
        </view>
        <view class="flex flex-justify-center grid-items-center h-10 w-80% bg-yellow m-l-10% border-rd-5 mt-5 ">
            <p class="color-white">登录</p>
        </view>
   </view>
</template>

<script>
    import Validate from '@/utils/validate.js';
	export default {
		components: {},
		computed: {
			validatePhoneNumAndPwd() {
				return Validate.phone(this.phoneNum) && Validate.password(this.password);
			}
		},
		data() {
			return {
                phoneNum: '',
				passWord: '',
			};
		},
		methods: {}
	}
</script>
<style lang="scss" scoped>
</style>
