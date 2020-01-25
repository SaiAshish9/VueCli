<template>
<div>
{{msg}} : {{url_msg}}
</div>
</template>


<script>

module.exports={
  data:function(){
    return {
      msg:'THIRD Comp'
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
  background: green;
}

</style>
