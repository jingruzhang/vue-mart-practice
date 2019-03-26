<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{name}}</p>
    <p>{{age}}</p>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  props: ["name", "age"],
  created() {
    //获取用户信息
    axios.get('/api/userinfo').then(res => {
      console.log(res)
      const {name, age} = res.data.data
      this.name = name
      this.age = age
    })
  }
}
</script>
