<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <hello></hello>
    <login pmsg="aaa" v-on:cev="receive"></login>
    <button @click="sendchild"> send</button>
    <h2>from childdd:{{info}}</h2>
    <h2>from hahha:{{info1}}</h2>
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'
import login from './login'
export default {
  data:function(){
      return{
        info:"",
        info1:''
      }  
  },
  components: {
    Hello,login
  },
  events:{
    "childev":function(msg){
      this.info=msg;
    }
  },
  methods:{
    sendchild:function(){
      this.$broadcast("aaa","hello parent")
    },
    receive:function(msg){
      this.info1=msg;
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
