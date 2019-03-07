import Vue from 'vue'
import Vuex, { mapActions } from 'vuex'
Vue.use(Vuex)


//state,getters,mutations actions都是固定的特有写法
// menuItems，setMenuItems等都是自定义
export var store = new Vuex.Store({
    state: {
        //状态库 数据源
        //表示当前的菜品数组
        menuItems: [],
        currentUser: null,
        isLogin: false //当前的登录状态
    },
    getters: {
        //派生状态的数据源
        getMenuItems: state => state.menuItems,
        currentUser: state => state.currentUser,
        isLogin: state => state.isLogin
    },
    mutations: {
        //更改store的状态值state
        //通过set方法实现get请求数据后的更新
        setMenuItems(state, data) {
            //state当前状态值，data表示传过来的参数
            state.menuItems = data
        },
        //通过push方法实现newPizza页面的post数据让当前数据发生更新
        pushMenuItems(state, data) {
            state.menuItems.push(data)
        },
        // 通过delete方法实现newMenu页面的删除数据功能
        deleteMenuItems(state, data) {
            state.menuItems.forEach((item, index) => {
                if (item == data) {
                    state.menuItems.splice(index, 1)
                }
            })
        },
        UserStatus(state, data) {
            if (data) {
                state.currentUser = data
                state.isLogin = true

            } else {
                state.currentUser = null
                state.isLogin = false
            }
        }
    },
    actions: {
        //触发多个state的操作，使用mutations时会触发时更新
        // 但如果mutations过多就需要actions来触发
        setUser({ commit }, user) {
            commit('UserStatus', user)
        }
    }
})