<template>
    <div class="newmenu">
       <h3 class="text-center text-warning " col-5>菜单管理</h3>
       <table class="table text-center mt-5">
        <thead >
          <tr>
            <th scope="col">序号</th>
            <th scope="col">品种</th>
            <th scope="col">删除</th>
          </tr>
        </thead>
        <tbody >
           <tr v-for="(item,index) in items" :key="index">
            <td>{{index+1}}</td>
            <td>{{item.name}}</td>
            <td><button class="btn btn-dangerous" @click="del(item)">Del</button></td>
          </tr>
        </tbody>
        </table>
        
    </div>
</template>
<script>
import axios from "axios"
export default {
   name: 'Newmenu',
  data () {
    return {
      msg: '这是newmenu主页',
      // items:[]
    }
  },
  mounted(){
     var that=this
     axios.get('./menu-jmz.json')
     .then(res=>{
        //  console.log(res.data)
        var menus=[]
         for(var key in res.data){
            //  console.log(key)
             var item =res.data[key]
             item.id = key;
            //  that.items.push(item)
            //用当前的menu来实现数据的管理
            menus.push(res.data[key])
         }

        //  console.log(that.items)
        //优势在于通过vuex=>store,直接实现了数据的更新
        that.$store.commit('setMenuItems',menus)
     })
  },
  methods:{
    del(item){
        axios.delete('./menu-jmz/'+item.id+'.json')
      .then(res=>{
         console.log('删除成功')
        //  this.$router.push('/menu') 
        this.$store.commit('deleteMenuItems',item)
        //记住刷新页面的方法
        // location.reload()  
      })  
   }
  }  ,
  computed:{
    items(){
      return this.$store.getters.getMenuItems
    }
  }
}
</script>
<style>

</style>
