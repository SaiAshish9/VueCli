<template>
<div>
{{msg}} : {{url_msg}}
</div>
</template>


<script>

module.exports={
  data:function(){
    return {
      msg:'SECOND Comp'
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
background: blue;
border-radius: 50%;
height:300px;
width:20%;
margin:auto;
}
</style>
