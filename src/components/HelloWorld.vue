<template>
  <div class="readeMe">  
    <video autoplay=true loop="loop" class="bg_video">
      <source src="http://www.migal.com.cn/templets/default/mp4/video_web.mp4" type="video/mp4">
    </video>
    <div class="mask">
      <h2>匆匆那年</h2>
      <p class="contents">
        匆匆那年我们 究竟说了几遍 &nbsp;&nbsp;再见之后再拖延 可惜谁有没有
<br/>
        爱过不是一场 七情上面的雄辩 &nbsp;&nbsp;匆匆那年我们 一时匆忙撂下 
<br/>
        难以承受的诺言 只有等别人兑现 &nbsp;&nbsp;不怪那吻痕还 没积累成茧
<br/>
        拥抱着冬眠也没能 羽化再成仙 &nbsp;&nbsp;不怪这一段情 没空反复再排练
        <br/>
        是岁月宽容恩赐 反悔的时间 &nbsp;&nbsp;如果再见不能红着眼 是否还能红着脸
<br/>
        就像那年匆促 刻下永远一起 &nbsp;&nbsp;那样美丽的谣言 如果过去还值得眷恋
<br/>
        别太快冰释前嫌 谁甘心就这样 &nbsp;&nbsp;彼此无挂也无牵 我们要互相亏欠
<br/>
        要不然凭何怀缅 匆匆那年我们 &nbsp;&nbsp;见过太少世面 只爱看同一张脸
<br/>
        那么莫名其妙 那么讨人欢喜 &nbsp;&nbsp;闹起来又太讨厌 相爱那年活该
<br/>
        彼此无挂也无牵 我们要互相亏欠 我们要藕断丝连
      </p>
      <p class="luokuan">MF@Design</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      data:[]
    }
  }
  // created(){
  //   this.$axios.get('https://www.apiopen.top/journalismApi')
  //   .then(res=>{
  //     console.log(res.data);
  //   }).catch(err=>{
  //     console.log(err);
  //   })
  // }
  
}
</script>

<style scoped>
.bg_video {
    width: 100% !important;
    object-fit: fill;
    z-index: -1;
}
   .readeMe{
     /*height: 600px; */
     position: relative;
     color: #2b2b2b;
     text-align: left;
   }
    .readeMe h2{
      text-align: center;
      margin-bottom: 15px;
      animation: title 1.5s linear 0s 1;
    }
  .mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    box-sizing: border-box;
    padding: 20px 300px;
}
    .readeMe .contents{
      line-height: 60px;
      font-size: 20px;
      text-align: center;
      animation: contents 1.5s linear 0s 1;
      letter-spacing: 2px;
    }

     .readeMe .luokuan{
          margin-top: 10px;
          font-size: 20px;
          text-align: right;
          font-style: italic;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          padding-right: 46px;
      }
                                   
  @keyframes fudong{
   0%{
        transform: translateY(-40px);
        opacity: 0;
      }
      100%{
        transform: translateY(0);
        opacity: 1;
      }
}

@-webkit-keyframes fudong {
  0%{
        transform: translateY(-40px);
        opacity: 0;
      }
      100%{
        transform: translateY(0);
        opacity: 1;
      }
}

@-moz-keyframes fudong {
  0%{
        transform: translateY(-40px);
        opacity: 0;
      }
      100%{
        transform: translateY(0);
        opacity: 1;
      }
}

@-ms-keyframes fudong {
 0%{
        transform: translateY(-40px);
        opacity: 0;
      }
      100%{
        transform: translateY(0);
        opacity: 1;
      }
}

@-o-keyframes fudong {
 0%{
        transform: translateY(-40px);
        opacity: 0;
      }
      100%{
        transform: translateY(0);
        opacity: 1;
      }
}






  @keyframes title{
   0%{
        transform: translateY(-30px);
        opacity: 0;
      }
      100%{
        transform: translateY(0);
        opacity: 1;
      }
}

@-webkit-keyframes title {
  0%{
        transform: translateY(-30px);
        opacity: 0;
      }
      100%{
        transform: translateY(0);
        opacity: 1;
      }
}

@-moz-keyframes title {
  0%{
        transform: translateY(-30px);
        opacity: 0;
      }
      100%{
        transform: translateY(0);
        opacity: 1;
      }
}

@-ms-keyframes title {
 0%{
        transform: translateY(-30px);
        opacity: 0;
      }
      100%{
        transform: translateY(0);
        opacity: 1;
      }
}

@-o-keyframes title {
 0%{
        transform: translateY(-30px);
        opacity: 0;
      }
      100%{
        transform: translateY(0);
        opacity: 1;
      }
}





 @keyframes contents{
   0%{
        transform: translateY(30px);
        opacity: 0;
      }
      100%{
        transform: translateY(0);
        opacity: 1;
      }
}

@-webkit-keyframes contents {
  0%{
        transform: translateY(30px);
        opacity: 0;
      }
      100%{
        transform: translateY(0);
        opacity: 1;
      }
}

@-moz-keyframes contents {
  0%{
        transform: translateY(30px);
        opacity: 0;
      }
      100%{
        transform: translateY(0);
        opacity: 1;
      }
}

@-ms-keyframes contents {
 0%{
        transform: translateY(30px);
        opacity: 0;
      }
      100%{
        transform: translateY(0);
        opacity: 1;
      }
}

@-o-keyframes contents {
 0%{
        transform: translateY(30px);
        opacity: 0;
      }
      100%{
        transform: translateY(0);
        opacity: 1;
      }
}
</style>
