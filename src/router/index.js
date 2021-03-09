import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
    import ('@/views/home/Home');
const category = () =>
    import ('@/views/category/Category');
const cart = () =>
    import ('@/views/cart/Cart');
const profile = () =>
    import ('@/views/profile/Profile');


// 1.安装插件   vuecli4不需要安装
Vue.use(VueRouter)

// 2.创建router
const routes = [{
    path: '',
    redirect: '/home'
}, {
    path: '/home',
    component: Home
}, {
    path: '/category',
    component: category
}, {
    path: '/cart',
    component: cart
}, {
    path: '/profile',
    component: profile
}]

const router = new VueRouter({
    routes,
    mode: 'history'
})


// 3.导出
export default router