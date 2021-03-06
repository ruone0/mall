// import { createApp } from 'vue'  vuecli4不需要引入vue和app
import VueRouter from 'vue-router'

// const Home = () =>
//     import ()

// 1.安装插件   vuecli4不需要安装
// createApp(App)

// 2.创建router
const routers = [

]

const router = new VueRouter({
    routers,
    mode: 'history'
})

// 3.导出
export default router