import { get, post } from '@/request/request.js'


const Login = {
    login: (data) => post('pcadmin/login', data),
}
export default Login