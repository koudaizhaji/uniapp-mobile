export default {
	phone(phoneNum) {
		return /^1[3456789]\d{9}$/.test(phoneNum + '');
	},
	password(password, callback = ()=>{}) {
		const len = 8;
		if (password.length < len) {
			callback({
				check: false,
				message: '密码长度需要'+len+'个字符'
			})
			return false;
		}
		callback({
			check: true,
			message: ''
		})
		return true;
	}
}