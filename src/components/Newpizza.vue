<template>
    <div class="newpizza">
        <h3 class="mb-3 text-warning">添加新的Pizza</h3>
        <form>
            <div class="form-group">
                <label for="input1"  class="mb-2 text-info">品种</label>
                <input type="text" class="form-control" id="input1" v-model="Newpizza.name" placeholder="你想添什么口味的pizza呢？">
            </div>
            <div class="form-group">
                <label for="input2"  class="mb-2 text-info">商品描述：</label>
                <textarea name="" id="" cols="83" rows="2" v-model="Newpizza.description"></textarea>
            </div>
           <h4 class="size mb-3 mt-3 text-warning">尺寸&价格</h4>
           <div >
               <span>尺寸：</span>
               <select  id="select" v-model="Newpizza.size1">
                   <option value="7寸" selected>7寸</option>
                   <option value="8寸">8寸</option>
                   <option value="9寸">9寸</option>
                   <option value="10寸">10寸</option>
               </select>
               <span>价格：</span>
               <input type="text"  v-model="Newpizza.price1">
           </div>
            <div class="size1 mt-5 ">
               <span>尺寸：</span>
               <select name="" id="select"  v-model="Newpizza.size2">
                   <option value="7寸" selected>7寸</option>
                   <option value="8寸">8寸</option>
                   <option value="9寸">9寸</option>
                   <option value="10寸">10寸</option>
               </select>
               <span>价格：</span>
               <input type="text"  v-model="Newpizza.price2">
           </div>
            <button type="submit" class="btn btn-primary btn-block mt-5" @click.prevent="addpizza">Submit</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios'
export default {
     name: 'Newpizza',
  data () {
    return {
      msg: '这是newpizza主页',
      Newpizza:{}
    }
  },
  mounted(){
    axios.get('./menu-jmz.json')
    .then(res=>{
        console.log(res)
    })
  },
  methods:{
      addpizza(){
          var data={
                name:this.Newpizza.name,
                description:this.Newpizza.description,
                options:[
                    {
                        size:this.Newpizza.size1,
                        price:this.Newpizza.price1
                    },
                    {
                        size:this.Newpizza.size2,
                        price:this.Newpizza.price2
                    }
                ]
          }
          console.log(data)
         axios.post('/menu-jmz.json',data)
         .then(res=>{
             console.log(res.data)
             this.$store.commit('pushMenuItems',data)
            //  this.$router.push('/menu')
         })   

          
      }
  }
}
</script>
<style>
#select{
    width:100px;
    margin-right:180px;
}
span{
    margin-right:20px;
}
</style>
