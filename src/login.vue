<template>
  <div id="one">
     用户名：<input type="text" v-model="username"/>
     密码:<input type="text" v-model="password"/>
     <button @click="login">登录</button>
  </div>
  <h2>from parent:{{info}}</h2>
   <h2>from child:{{info1}}</h2>
</template>

<script>
    export default {
      data () {
        return {
            username:"",
            password:"",
            info:"",
             info1:""
        }
      },
      events:{
        "aaa":function(msg){
           this.info1=msg;
        }
      },
      props:["pmsg"],
      methods:{
       login:function(){
          this.info=this.pmsg;
         this.$emit("cev","child message message 1111");
         this.$http.get("static/user.json").then(function(res){
            var user=res.body.user;
            var pass=res.body.password;
            if(this.username==user&&this.password==pass){
               this.$router.go("/home");
            }
         })
         this.$dispatch("childev","child message");          
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
