import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'



import orange from '../components/orange'
import white from '../components/white'
import green from '../components/green'
const child=()=>import('../components/orange')


Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
{
  name:'root',
  path:'/',
  redirect:{
    name:'first',
    params:{
      msg:'Welcome'
    }
  }
},
    {
      name:'first',
      path:'/orange',
      component:orange,
      children:[
        {
          path:'child',
          component:child
        }
      ]
    },
    // named router and nested router
    {
      name:'second',
      path:'/green/:msg',
      components:{
        default:green,
        child:child
      }
    },
    {
      name:'third',
      path:'/white',
      component:white
    }
  ]
})
