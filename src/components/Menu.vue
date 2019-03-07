<template>
  <div class="menu container row">
    <!-- <h1>{{ msg }}</h1> -->
    <!-- 左菜单展示 -->
    
    <div class="col-7">
       <h3 class="text-center text-primary">点餐</h3>
      <table class="table table-hover text-center">
        <thead class='text-white bg-primary'>
          <tr>
            <th scope="col">尺寸</th>
            <th scope="col">价格</th>
            <th scope="col">加入</th>
          </tr>
        </thead>
        
        <tbody v-for="(item,index) in items" :key="index">
          <tr>
            <td colspan="3">{{item.name}}</td>
          </tr>
          <tr>
            <td colspan="3">{{item.description}}</td>
          </tr>  
          <tr v-for="(item1,index1) in item.options" :key="index1">
              <td>{{item1.size}}</td>
              <td>{{item1.price}}</td>
              <td><button class="btn btn-success" @click="addToBasket(item,item1)">+</button></td>
          </tr>
         
        
       </tbody>
      </table> 
    </div>
    
    <!-- 购物车展示 -->
    <div class="col-5">
      <h3 class="text-center text-primary">购物车</h3>
      <table class="table table-hover text-center">
        <thead class='text-white bg-primary'>
          <tr>
            <th scope="col">数量</th>
            <th scope="col">种类</th>
            <th scope="col">价格</th>
          </tr>
        </thead>
        <template v-if="this.newItems.length>0">
        <tbody v-for="(item,index) in newItems" :key="index">
          <tr>
            <td>
               <button class='btn btn-primary' @click="reduce(item,index)">-</button>
              <input type="number" v-model='item.quantity'>
              <button class='btn btn-primary' @click="add(item,index)">+</button>
            </td>
            <td >{{item.name}}--{{item.size}}</td>
            <td>{{item.price*item.quantity}}</td>
          </tr> 
       </tbody>
       <!-- 计算总价格  总件数 -->
       <tr>
         <td></td>
         <td colspan="2" class="text-info">商品总件数: <span>{{totalNum}}</span>    </td>
       </tr> 
       <tr>
         <td></td>
         <td colspan="2" class="text-info">商品总价格:<span>{{totalPrice}}</span> </td>
       </tr> 
        </template>
        <template v-else>
           <tr>
            <td colspan="3"><h3 class="text-danger ">此购物车空空如也~</h3></td>
          </tr>
        </template>
      </table> 
    </div>
   
   
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Menu',
  data () {
    return {
      msg: '这是menu主页',
      // items:{
        // 0:{
        //   name:"芝士pizza",
        //   description:'这是一款深受大众喜爱的pizza。',
        //   options:[
        //     {
        //       size:'7寸',
        //       price:'80'
        //     },
        //      {
        //       size:'10寸',
        //       price:'110'
        //     }
        //   ]
    
        // },
        // 1:{
        //   name:"榴莲pizza",
        //   description:'这是一款有味道的pizza。请依据个人口味选择',
        //   options:[
        //     {
        //       size:'7寸',
        //       price:'80'
        //     },
        //      {
        //       size:'10寸',
        //       price:'110'
        //     }
        //   ]
    
        // }
      // },
      //当我们在左边添加数据时，newItems 才有数据值
      newItems:[]
    }
  },
  mounted(){
    axios.get('./menu-jmz.json')
    .then(res=>{
      // this.items=res.data
      this.$store.commit('setMenuItems',res.data)
    })
  },
  methods:{
    addToBasket(item,options){
      //点击实现添加去重
      // 当前展示的这一项与我们输出的一项吻合时，实现数量quantity+1
      var result=this.newItems.filter((item1)=>{
        return item.name==item1.name && options.size==item1.size
      })
      if(result!=null&&result.length>0){
        if(result[0].quantity>=10 ){
          result[0].quantity=10
        }else{
           result[0].quantity++

        }
       
      }else{
        this.newItems.push({
          name:item.name,
          size:options.size,
          quantity:1,
          price:options.price
        })  
      }
    },
    reduce(item,index){
      if(item.quantity>1){
        item.quantity--
      }else{
        this.newItems.splic(index,1)
      }
    },
    add(item){
      if(item.quantity>=10){
        item.quantity=10
      }else{
        item.quantity++
      }
    }
  },
  computed:{
    totalPrice(){
      return this.newItems.reduce((pev,cur)=>{
        return pev+cur.quantity*cur.price
      },0)
    },
    totalNum(){
      return this.newItems.length
    },
    items(){
      return this.$store.getters.getMenuItems
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu{
  margin:0 auto;
}
input{
  width:40px;
  text-align: center;
}
span{
  font-weight: bold;
}
</style>
