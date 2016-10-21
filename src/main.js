var Vue=require('vue');
var App=require('./App');
var VueRouter=require("vue-router");


console.log(router);
var RouterConfig=require("./config");
var VueResource=require("vue-resource");


Vue.use(VueRouter);
Vue.use(VueResource);
var router=new VueRouter();
RouterConfig(router);
router.start(App,"#apps");
// console.log(VueRouter);
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
