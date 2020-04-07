import Vue from 'vue'
import App from './App.vue'
import './App.css'
import VueRouter from 'vue-router'
import {
	MatchBase,
	MatchOne,
	MatchTwo
} from '../vue-router/基础/动态路由匹配/index.js'
import {
	NestBase,
	NestOne,
} from '../vue-router/基础/嵌套路由/index.js'
import {
	ProgrammeBase,
} from '../vue-router/基础/编程式的导航/index.js'
import {
	NameBase,
} from '../vue-router/基础/命名路由/index.js'
import {
	ViewBase,
	ViewOne,
	ViewTwo,
	ViewChildren,
	ViewChildrenView
} from '../vue-router/基础/命名视图/index.js'
import {
	RedirectBase,
	RedirectOne,
} from '../vue-router/基础/重定向和别名/index.js'
import {
	TransferBase,
	TransferOtherView,
} from '../vue-router/基础/路由组件传参/index.js'
import {
	GuaidBase,
} from '../vue-router/进阶/导航守卫/index.js'

Vue.use(VueRouter)
// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [

].concat(
	//动态路由匹配
	[
		{
			path: '/MatchBase/:id',
			component: MatchBase
		},
		{
			path: '/MatchBase/:username/post/:post_id',
			component: MatchBase
		},

		{
			path: '/MatchOne',
			component: MatchOne
		},
		{
			path: '/MatchOne-1',
			component: MatchOne
		},
		{
			path: '/MatchTwo-*',
			component: MatchTwo
		},

		// {
		// 	path: '/*',
		// 	component: MatchTwo
		// },


	]
).concat(
	//嵌套路由
	[
		{
			path: '/NestBase/:id',
			component: NestBase,
			children: [
				{
					path: "children",
					component: NestOne
				}
			]
		}

	]
).concat(
	//编程式导航
	[
		{
			path: '/ProgrammeBase/:id',
			name: "ProgrammeBase",
			component: ProgrammeBase,
		}

	]
).concat(
	//命名路由
	[
		{
			path: '/NameBase/:id',
			name: "NameBase",
			component: NameBase,
		}

	]
)
.concat(
	//命名视图
	[
		{
			path: '/ViewBase',
			// component: ViewBase,
			components: { //components 需要加 s
				default: ViewBase,
				ViewOne,
				ViewTwo
			},
			children: [
				{
					path: "children",
					components: {
						default: ViewChildren,
						ViewChildrenView: ViewChildrenView
					}
				}

			]
		}

	]
)
.concat(
	//重定向和别名
	[
		{
			path: '/RedirectBase',
			redirect: '/RedirectOne',
			alias: '/bbbb',
			component:RedirectBase
		},
		{
			path: '/RedirectOne',
			component:RedirectOne
		},

	]
)
.concat(
	//路由组件传参
	[
		{
			path:"/TransferBase/:id",
			components:{
				default:TransferBase,
				ViewOne:TransferOtherView
			}, 
			props:{
				default:true,
				ViewOne:false
			}
		}
	]
)
.concat(
	//导航守卫
	[
		{
			path:"/GuaidBase",
			component:GuaidBase,
			meta:{requiresAuth:true},
			beforeEnter:(to,from,next) => { //路由独享的守卫
				console.log("路由独享的守卫>>to>>"+to);
				console.log("路由独享的守卫>>from>>"+from);
				next(); 
			}, 
			beforeRouteEnter :(to,from,next) => { //路由独享的守卫
				console.log("beforeRouteEnter>>to>>"+to);
				console.log("beforeRouteEnter>>from>>"+from);
				next(); 
			}, 
			beforeRouteUpdate :(to,from,next) => { //路由独享的守卫
				console.log("beforeRouteUpdate>>to>>"+to);
				console.log("beforeRouteUpdate>>from>>"+from);
				next(); 
			}, 
			beforeRouteLeave :(to,from,next) => { //路由独享的守卫
				console.log("beforeRouteLeave>>to>>"+to);
				console.log("beforeRouteLeave>>from>>"+from);
				next(); 
			}, 
		}
	]
)

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
	// mode: 'history',
	routes // (缩写) 相当于 routes: routes
})

//全局前置守卫
router.beforeEach((to, from, next) => {
	console.log("==========to.matched============"); 
	 console.log(to.matched)
	console.log("===========to.matched==========="); 
	console.log("==========to.meta============"); 
	 console.log(to.meta)
	console.log("===========to.meta==========="); 
	console.log("全局前置守卫>>to>>>",to);
	console.log("全局前置守卫>>from>>>",from);
	
	next();
})
//全局解析守卫
router.beforeEach((to, from, next) => {
	 
	console.log("全局解析守卫>>to>>>",to);
	console.log("全局解析守卫>>from>>>",from);
	
	next();
})

// 全局后置钩子
router.afterEach((to, from) => {
	
	console.log("全局后置钩子>>to>>>",to);
	console.log("全局后置钩子>>from>>>",from);
  })


// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
	router,
	render: h => h(App)
}).$mount('#app')

// 现在，应用已经启动了！
