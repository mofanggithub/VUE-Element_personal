<template>
    <div class="personal">
        <el-row>
            <el-col :span="8"><div class="left">
                <div class="left_box">
                    <img :src="portraitUrl" />
                    MF·Personal
                    <p>乐观向上、长得贼帅。不信你看=></p>
                </div>
                <div class="clear"></div>
            </div></el-col>
            <el-col :span="16"><div class="right">
                <div class="right_box">
                    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
                        <el-tab-pane label="基本资料" name="first">
                            <p class="fl one">姓名：放先森</p>
                            <p class="fl two">年龄：22</p>
                            <p class="fl three">VX：180****0028</p>
                            <p class="fl four">github：<a href="https://github.com/mofanggithub" target="_blank">https://github.com/mofanggithub</a></p>
                        </el-tab-pane>
                        <el-tab-pane label="保密级资料" name="second">
                            <img :src="aloneUrl" class="alone" />
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div></el-col>
        </el-row>
    </div>
</template>


<script>
export default {
    name: 'personal',
    data(){
        return {
            portraitUrl: require("@/img/portrait.jpg"),
            aloneUrl: require("@/img/alone.png"),
             activeName2: 'first'
        }
    },
    method: {
        handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>

<style scoped>
    .personal{
        width: 100%;
        height: 500px;
        padding-top: 25px;
    }
    .left{
        width: 100%;
    }
    .left_box{
        width: 290px;
        float: right;
        font-size: 26px;
        font-weight: bold;
        text-align: center;
    }
    .left_box img{
        display: block;
        width: 100%;
        border-radius: 50%;
        margin-bottom: 20px;
    }
     .left_box p{
         font-size: 14px;
         margin-top: 20px;
     }
    .clear{
        clear: both;
    }
    .right{
        text-align: left;
        width: 100%;
        box-sizing: border-box;
        padding-left: 120px;
    }
    p.one{
        margin-top: 20px;
    }
    p.fl{
        text-align: left;
        font-size: 20px;
        color: #7a7a7a;
        margin-bottom: 45px;
        animation: title 1.5s linear 0s 1;
    }
    p a{
        font-size: 20px;
        color: #7a7a7a;
        text-decoration: none;
    }
    p a:hover{
        text-decoration: underline;
    }
    .alone{
        animation: title 1.5s linear 0s 1;
    }



    @keyframes title{
   0%{
        opacity: 0;
      }
      100%{
        transform: translateX(0);
        opacity: 1;
      }
}

@-webkit-keyframes title {
  0%{
        opacity: 0;
      }
      100%{
        transform: translateX(0);
        opacity: 1;
      }
}

@-moz-keyframes title {
  0%{
        opacity: 0;
      }
      100%{
        transform: translateX(0);
        opacity: 1;
      }
}

@-ms-keyframes title {
 0%{
        opacity: 0;
      }
      100%{
        transform: translateX(0);
        opacity: 1;
      }
}

@-o-keyframes title {
 0%{
        opacity: 0;
      }
      100%{
        transform: translateX(0);
        opacity: 1;
      }
}
</style>

