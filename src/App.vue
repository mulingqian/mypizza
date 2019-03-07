<template>
  <div id="app" class="container">
    <!-- <img src="./assets/logo.png"> -->
    <!-- 导航展示 -->
   <Header></Header>
    
     <!-- 展示路由页面 -->
    <router-view/>
    <router-view name="history"></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header"
export default {
  name: 'App',
  data(){
    return{

    }
  },
  components:{
    'Header':Header
  }
}
</script>

<style>

</style>
