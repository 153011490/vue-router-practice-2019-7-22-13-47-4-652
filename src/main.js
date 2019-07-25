import Vue from 'vue'
import App from './ToDoList.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import WelcomePage from './components/WelcomePage'
import Home from './components/Home'
import MyInfo from './components/MyInfo'
import LeftNavigation from './components/LeftNavigation'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueRouter)

const store=new Vuex.Store({
  state:{
    list:[],
    filterType:'All',
    btns:[{type:'All',cls:'none'},
          {type:'Active',cls:'none'},
          {type:'Complete',cls:'none'}
        ],
    name:''
  },
  getters:{
    getList(state){
      return state.list;
    },
    getFilterType(state){
      return state.filterType;
    },
    getBtns(state){
      return state.btns;
    },
    getName(state){
      return state.name;
    }
  },
  mutations:{
    setList(state,item){
      state.list.push(item);
    },
    changeType(state,type){
      state.btns.forEach(btn=>{
        btn.cls=btn.type===type?'selected':'none';
      })
      state.filterType=type;
    },
    setName(state,name){
      state.name=name;
    }
  }
})

const router=new VueRouter({
  routes:[
    {
      path: '/',
      components: {
        welcome: WelcomePage
      }
    },
    {
      path:'/home',
      components:{
        home:Home,
        leftNavigation:LeftNavigation
    }
  },
    {
      path:'/my-info',
      components:{
        info:MyInfo,
        leftNavigation:LeftNavigation
      }
    }
  ]
})

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
