<template>
  <div class="newsbox">
    <el-row>
      <el-col :span="1"><div class="left">1</div></el-col>
      <el-col :span="23">
        <div class="right">
          <router-link :to="{name:'sports'}" class="link">体育新闻</router-link>
          <router-link :to="{name:'tech'}" class="link">技术新闻</router-link>
        </div>
      </el-col>
    </el-row>
      <router-view/>
      <el-row>
      <el-col :span="1"><div class="left">1</div></el-col>
      <el-col :span="22">
        <div class="iterview">
        广告位出租啦,欢迎各位赞助商~~
        </div>
      </el-col>
      <el-col :span="1"><div class="left">1</div></el-col>
    </el-row>
  </div>
</template> 

<script>
// import store from '@/store.js';
export default {
  name: 'music',
  data () {
    return{
    }
  },
    methods: {
    }
}
</script>

<style scoped>
.newsbox{
  margin-bottom: 20px;
}
div.left{
  visibility: hidden;
}
div.right{
  text-align: left;
  padding-bottom: 10px;
  border-bottom: .4px dashed #777;
  margin-bottom: 30px;
}
.link{
  color: #777;
  text-decoration: none;
  margin-left: 10px;
}
.link:hover{
  color: #000;
}

.iterview{
  height: 200px;
  font-size: 30px;
  font-weight: bold;
  border: 1px solid #777;
  margin-top: 10px;
  border-radius: 20px;
  line-height: 200px;
  animation: shan 7s linear 0s infinite;
}


 @keyframes shan{
   0%{
        color: #fff;
      }
    20%{
      color: yellow;
    }
    40%{
      color: red;
    }
    60%{
      color: blue;
    }
    80%{
      color: green;
    }
      100%{
        color: #fff;
      }
}

@-webkit-keyframes shan {
  0%{
        color: fff;
      }
    20%{
      color: #777;
    }
    40%{
      color: red;
    }
    60%{
      color: blue;
    }
    80%{
      color: #000;
    }
      100%{
        color: #fff;
      }
}

@-moz-keyframes shan {
  0%{
        color: fff;
      }
    20%{
      color: #777;
    }
    40%{
      color: red;
    }
    60%{
      color: blue;
    }
    80%{
      color: #000;
    }
      100%{
        color: #fff;
      }
}

@-ms-keyframes shan {
 0%{
        color: fff;
      }
    20%{
      color: #777;
    }
    40%{
      color: red;
    }
    60%{
      color: blue;
    }
    80%{
      color: #000;
    }
      100%{
        color: #fff;
      }
}

@-o-keyframes shan {
 0%{
        color: fff;
      }
    20%{
      color: #777;
    }
    40%{
      color: red;
    }
    60%{
      color: blue;
    }
    80%{
      color: #000;
    }
      100%{
        color: #fff;
      }
}

</style>
