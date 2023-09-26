//定义关于counter的store
import {defineStore} from 'pinia'
import tabBar from '../utils/index'
const useCounter = defineStore("counter",{
    state:() => ({
        tabList: tabBar.indexList,
    }),
    getters: {},
  	actions: {}
})
export default useCounter
