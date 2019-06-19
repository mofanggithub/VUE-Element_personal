<template>
  <div id="app">
    <div :style="{background: isRed ? 'red' : '' }">改变我吧</div>

    <button @click="show=true">登陆</button>
    <p>{{show}}</p>
    <Modal 
      v-show = "show"
      title= "标题"
      ok-value = "ok"
      @ok-click = "clickHander"
      :app-show.sync = "show"
      :app-red.sync = "isRed"
    ></Modal>
    <!--<Modal 
      v-show="show" 
      title="妙味课堂" 
      ok-value="ok"
      :app-show.sync="show"
      :is-red.sync="isRed"
    ></Modal>-->

    <!--<Modal title="温馨提示" ok-value="好吧" @ok-click="clickHandle"></Modal>
    -->
    <!--原生html监听事件写在行间中
      关系这个按钮是否被点击了，然后做一些处理
      需要监听一个元素的事件，当用户点击了这个按钮，浏览器内部会发布一个事件，
      接收到这个事件，执行对应的处理函数
    
    <button onclick="alert(1)">按钮</button>
     <button onclick="alert(2)">按钮</button>-->
  </div>
</template>

<script>
import Modal from './components/modal'
export default {
  name: 'app',
  data(){
    return {
      isRed: false,
      show: false  // 隐藏
    }
  },
  components:{
    Modal
  },
  methods:{
    clickHandle(){
      this.isRed = true;
    }/*,
    abc(){
      //alert('我要干其他事情')
      this.show = false;
    }*/
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
