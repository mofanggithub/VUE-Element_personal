<template>
  <div>
      <el-row class="header">
        <el-col :span="1"><div class="yincang">1</div></el-col>
        <el-col :span="18">
          <div class="left">
            <!-- <img :src="logoUrl" class="logo" /> -->
           MF.Design
          </div>
        </el-col>
        <el-col :span="5">
          <div class="right">
            <img :src="portraitUrl" class="portrait" />
            <el-badge class="mark" :value="12" />
            <el-dropdown>
              <span class="el-dropdown-link">
                选项<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item><router-link :to="{name:'pinglun'}" class="link">查看评论</router-link><el-badge class="mark" :value="12" /></el-dropdown-item>
                <el-dropdown-item disabled>切换账号</el-dropdown-item>
                <el-dropdown-item divided><router-link :to="{name:'login'}" class="link">退出登录</router-link></el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
      </el-row>

      <el-row class="link_box">
        <el-col :span="1"><div class="yincang">1</div></el-col>
        <el-col :span="23">
          <div class="link">
            <router-link v-for="(item,index) in link" :key="index" :to="{name: item.url}" class="linkto" :class="{checked:num==index}" @click.native="change(index)">
              {{item.name}}
            </router-link>
          </div>
        </el-col>
      </el-row>

  </div>
</template>

<script>
export default {
  name: 'header',
  filters:{
    myFilter: function(value){
      return value.split('').reverse().join('');
    }
  },
  data () {
   return{
    //  logoUrl: require("@/img/logo.png")
    portraitUrl: require("@/img/portrait.jpg"),
    link: [
      {name: 'Login', url: 'login'},
      {name: '主页', url: 'HelloWorld'},
      {name: '新闻', url: 'news'},
      {name: '音乐', url: 'music'},
      {name: '个人主页', url: 'personal'},
      {name: '评论区', url: 'pinglun'}
    ],
    num: 0,
    activeName: 'second'
   }
  },
  methods:{
    change: function(index){
      this.num = index;
    },
     handleClick(tab, event) {
        console.log(tab, event);
      }
  }
}
</script>

<style scoped>
  .yincang{
    visibility: hidden;
  }
  .header{
    height: 55px;
    background: #75adff;
    /* border-bottom: 1px solid #fff; */
  }
  .left{
    height: 100%;
    line-height: 55px;
    font-size: 30px;
    color: #fff;
    font-weight: bold;
    box-sizing: border-box;
    padding-left:10px;
    text-align: left;
    font-style: italic;
  }
  .logo{
    width: 50px;
    height: 55px;
    float: left;
    margin-right: 10px;
  }
  .right{
    text-align: left;
    height: 100%;
    line-height: 55px;
  }
  .portrait{
    float: left;
    margin-right: 10px;
    width: 49px;
    height: 49px;
    margin-top: 3px;
    border-radius: 50%;
  }
  .mark{
    margin-left: -19px;
    margin-top: -20px;
  }
  .link{
    color: #606266;
    text-decoration: none;
  }
  .el-popper .mark{
    margin: 0px;
  }
  
  .el-dropdown-link{
    color: #fff;
    cursor: pointer;
  }
  .select{
    color: #fff;
  }
  .link_box{
    background: #fff;
    padding: 10px;
    position: relative;
  }
  .link{
    text-align: left;
    padding-bottom: 10px;
    position: relative;
  }
  .link:after{
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: rgb(228, 231, 237);
    z-index: 1;
  }
  .linkto{
    color: rgb(48, 49, 51);
    font-size: 18px;
    text-decoration: none;
    margin-right: 15px;
  }
  .linkto:hover{
    color: rgb(64, 158, 255);
  }
  .checked{
    color: rgb(64, 158, 255);
  }
</style>
