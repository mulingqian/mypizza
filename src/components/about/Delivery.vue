<template>
  <div class="delivery row">
    <div class="card col-4" v-for="(item,index) in items" :key="index">
      <img class="card-img-top" :src="item.imgsrc" alt="Card image cap">
      <div class="card-body">
        <h4 class="card-title ">{{item.title}}</h4>
        <p class="card-text text-success">{{item.text}}</p>
      </div>
      <button class="btn btn-primary" @click="alert">订单查询</button>
    </div>
   
  
   
  </div>
</template>

<script>
export default {
  name: 'Delivery',
  data () {
    return {
      msg: '这是Delivery主页',
       items:[
         {imgsrc:('../../../static/del-sf.png'),title:'顺丰速运',text:'您的快递信息已发送至河北张家口'},
         {imgsrc:('../../../static/del-yt.jpg'),title:'圆通快递',text:'您的快递信息已发送至山东青岛'},
         {imgsrc:('../../../static/del-zt.jpg'),title:'中通快递',text:'您的快递信息已发送至河南洛阳'}
         ]
    }
  },
   methods:{
    alert(){
      alert('当前快递小哥正在快马加鞭为您派送。')
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  width:200px;
  height:200px;
}
</style>
