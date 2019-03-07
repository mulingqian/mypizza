<template>
  <div class="admin container row">
    <!-- <h1>{{ msg }}</h1> -->
    <div class="col-7 mt-5">
      <Newpizza></Newpizza>
    </div>
    <div class="col-5 mt-5">
      <Newmenu></Newmenu>
    </div>
    
   
  </div>
</template>

<script>
import Newpizza from '@/components/Newpizza'
import Newmenu from '@/components/Newmenu'
export default {
  name: 'Admin',
  data () {
    return {
      msg: '这是admin主页'
    }
  },
  components:{
    'Newpizza':Newpizza,
    Newmenu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
