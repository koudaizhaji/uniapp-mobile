<template>
    <view class="">
         <p class="mt-10 mb-2 font-size-6 font-medium text-center">欢迎登录本系统</p>
         <p class="mb-10 font-size-3 text-center color-coolgray">未注册的手机号验证后自动创建账号</p>
         <view class="flex flex-justify-left grid-items-center h-10 w-80% bg-white m-l-10% border-rd-5">
             <view class="m-l-2 m-r-2">+86 |</view>
             <input v-model="phoneNum" type="number" maxlength="11" placeholder="请输入手机号码" class="w-75%"/>
         </view>
         <view class="flex flex-justify-left grid-items-center h-10 w-80% bg-white m-l-10% border-rd-5 mt-5">
             <input v-model="code" type="number" maxlength="6" placeholder="请输入短信验证码" class="w-70% m-l-5"/>
             <view class="flex flex-justify-center grid-items-center m-l-2 m-r-4 font-size-3 w-25% h-6 bg-#7A7AFA border-rd-1px" :class="{'color-#fff bg-#7A7AFA':!validatePhoneNum}" @click="getCode">获取验证码</view>
         </view>
         <view class="h-10 w-80% m-l-10% border-rd-5 mt-5">
            <u--button :disabled="!validatePhoneNumAndPwd" color="blue" shape="circle" @click="login">登录</u--button>
         </view>
         <view class="flex mt-6 mb-5 m-l-10% ">
             <view>
                 <label class="flex flex-justify-left grid-items-center">
                     <checkbox-group @change="changeChecked">
                        <label>
                            <checkbox :checked="isAgree" style="transform:scale(0.6)" />
                        </label>
                    </checkbox-group>
                     <text style="font-size: 13px;">
                         <text>登录即代表同意</text>
                         <text class="color-#004cfe">[用户协议]</text>
                         <text>和</text>
                         <text class="color-#004cfe">[隐私政策]</text>
                     </text>
                 </label>
             </view>
         </view>
         <view class="flex">
             <view class="m-l-10% w-80% flex font-size-3.5 flex-justify-between">
                 <navigator url="/pages/login/index">密码登录</navigator>
             </view>
         </view>
    </view>
 </template>
 
 <script>
     import Validate from '@/utils/validate.js';
     export default {
         components: {},
         computed: {
			validatePhoneNum() {
				return Validate.phone(this.phoneNum);
			}
		 },
         data() {
             return {
                 phoneNum: '',
                 code: '',
                 isAgree: false
             };
         },
         methods: {
             changeChecked (e) {
                this.isAgree = e.detail.value.length > 0 ? true : false
             },
             getCode() {
				if(!this.validatePhoneNum) {
					return;
				}
				if (!this.isAgree) {
					uni.showToast({
						title: '请先勾选同意协议',
						icon: 'none',
					})
					return;
				}
                uni.showToast({
                    title: '验证码发送成功，请注意查收',
                    icon: 'none',
                })
			}
         }
     }
 </script>
 <style lang="scss" scoped>
 </style>
 