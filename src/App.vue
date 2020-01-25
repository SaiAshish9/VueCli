<template>
  <div id="app">


<router-link :to="{name:'first',params:{msg:'orange'}}">
<button>
1
</button>
</router-link>

<router-link :to="{name:'third',params:{msg:'blue'}}">
<button>
2
</button>
</router-link>

<router-link :to="{name:'second',params:{msg:'green'}}">
<button>
3
</button>
</router-link>

<p>
{{msg}}
</p>

<router-view></router-view>

<router-view name='child'></router-view>

  </div>
</template>

<script>

// import orange from './components/orange'
// import green from './components/green'
// import white from './components/white'


const orange=()=>import('./components/orange')
const green=()=>import('./components/green')
const white=()=>import('./components/white')

export default {
data:function(){
  return{
    msg:'India'
  }
},
components:{
  orange,
  white,
  green
}

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
