<template>
  <div class="home container text-center">
    <!-- <h1>{{ msg }}</h1> -->
    <div id="box">
      <div class="bg">
        <h1>欢迎来品尝pizza</h1>
        <h2>这里有各种各样的好吃的pizza</h2>
      </div>
       <button @click="goMenu" class="btn btn-primary btn1">Let's Order.</button> 
    </div>
     <h3>快递信息</h3>
    <my-delivery></my-delivery>
    <h3>历史订单</h3>
  </div>
</template>

<script>
import Delivery from '@/components/about/Delivery' 
export default {
  name: 'Home',
  data () {
    return {
      msg: '这是home主页'
    }
  },
  methods:{
    goMenu(){
       this.$router.push('/menu')
    }
  },
  components:{
    'my-delivery':Delivery
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#box{
  background: url('../../static/pizza.jpg');
  width:100%;
  height:800px;
  padding:10%;
  position: relative;
}
.bg{
  /* background:#ccc; */
  width:500px;
  height:200px;
  opacity: 0.7;
  margin:100px auto;
  line-height: 200px;
  text-align: center;
}
button{
  position: absolute;
  left:450px;
  top:360px;

}
/* .home{
  margin:0 auto;
} */
</style>
