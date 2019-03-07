<template>
  <div class="register container text-center mt-5">
    <img src="../../static/logo.png" width='70' alt="">
    <h4 class="mb-3">注册</h4>
    <form >
      <div class="form-group">
        <input type="email" class="form-control" id="input1" v-model="username" placeholder="请输入您的邮箱">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" id="input2" v-model="password" placeholder="请输入您的密码">
      </div>
       <div class="form-group">
        <input type="password" class="form-control" id="input3" v-model="repassword" placeholder="请再次输入您的密码">
      </div>
      <button type="submit" class="btn btn-primary btn-block" @click.prevent='onSubmit'>Sign Up</button>
    </form>
  </div>
</template>

<script>
//引入axios
import axios from 'axios';
export default {
  name: 'Register',
  data () {
    return {
      msg: '这是register主页',
      username:'',
      password:'',
      repassword:''
    }
  },
  methods:{
    onSubmit(){
      if(this.password===this.repassword){
        var formDate={
          username:this.username,
          password:this.password
        }
        axios.post('./user-jmz.json',formDate)
        .then(res=>{
          console.log('当前数据抛出成功')
          // 当注册成功时跳转到登录页，引导用户登录
          // 两种方法实现跳转 
          // 堆栈法
          // this.$router.push('/login')
          // 替代法
          this.$router.replace('/login')
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.form-control{
    width: 500px;
    
  }
  .register{
    width: 500px;
    margin:0 auto;
  }
  .btn-block{
    width: 107%; 
  }
</style>
