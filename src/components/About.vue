<template>
  <div class="about container row mt-5" >
    <div class="list-group col-4">
      <router-link to="/contact" class="list-group-item list-group-item-action">联系我们</router-link>
      <router-link to="/history" class="list-group-item list-group-item-action ">历史订单</router-link>
      <router-link to="/delivery" class="list-group-item list-group-item-action ">快递信息</router-link>
      <router-link to="/activity" class="list-group-item list-group-item-action ">热门活动</router-link>
   </div>
 

<!-- //放二级路由 -->
    <div class="col-8">
      <router-view />
      </div> 
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-group-item{
  margin-bottom:10px;
  text-align:center;
}
.about{
  margin:0 auto;
}
</style>
