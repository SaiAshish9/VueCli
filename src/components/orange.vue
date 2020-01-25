<template>
<div>
{{msg}} : {{url_msg}}

<router-view>
</router-view>
</div>
</template>

/* components */
<script>

module.exports={
  data:function(){
    return {
      msg:'FIRST Comp'
    }
  },
  computed:{
    url_msg:function(){
      return this.$route.params.msg
    }
  }
}  

</script>

<style scoped >
div{
  height:300px;
  background: orange;
}

</style>
 
