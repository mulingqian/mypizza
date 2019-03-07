<template>
  <div class="activity">
    <div class="card col-12" v-for="(item,index) in items" :key="index">
      <img class="card-img-top" :src="item.imgsrc" alt="Card image cap">
      <div class="card-body">
        <h4 class="card-title ">{{item.title}}</h4>
        <p class="card-text text-success">{{item.text}}</p>
      </div>
    </div>
   
  
   
  </div>
</template>

<script>
export default {
  name: 'Activity',
  data () {
    return {
      msg: '这是activity主页',
     items:[
         {imgsrc:('../../../static/热门活动.jpg'),title:'热门活动1',text:'三八女王节，有机会抽中免单'},
         {imgsrc:('../../../static/pizza3.jpg'),title:'热门活动2',text:'买pizza，有机会赢得iPhone XS MAX...'},
         {imgsrc:('../../../static/pizza2.jpg'),title:'热门活动3',text:'与好友一起尽享美味pizza，体验海岛风情...'},
       ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
