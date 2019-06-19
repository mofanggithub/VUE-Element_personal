<template>
  <div class="techbox">
   <el-row>
      <el-table
      v-loading="loading"
      v-show="isShow"
      :data="tableData"
      style="width: 100%;height:300px;">
      </el-table>
      <el-col :span="1"><div class="left">1</div></el-col>
      <el-col :span="8">
        <div class="">
            <el-carousel trigger="click" class="zouma">
              <el-carousel-item v-for="(img,index) in imgList" :key="index">
                <a v-for="(item,index) in tech" :key="index" :href="item.link"><img :src="img.url"  :alt="item.title"></a>
              </el-carousel-item>
            </el-carousel>
        </div>
      </el-col>
      <el-col :span="1"><div class="left">1</div></el-col>
      <el-col :span="11">
        <div class="right">
          <ul>
            <li v-for="(item,index) in tech" :key="index">
              <div>
                <a :href="item.link" class="listurl">
                  <span class="contents">{{item.title}}</span>
                  <span class="dianji">{{item.tcount}}</span>
                  <span class="time">{{item.ptime}}</span>
                  <span class="clear"></span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :span="3"><div class="left">1</div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'guonei',
  data () {
     return{
       tech: [],
      imgList:[
        {url:require('@/img/tech_one.png')},
        {url:require('@/img/tech_two.png')},
        {url:require('@/img/tech_three.png')},
        {url:require('@/img/tech_four.png')}
      ],
      loading: true,
      isShow: true
     }
  },
  created(){
    this.$axios.get('https://www.apiopen.top/journalismApi')
    .then(res=>{
      console.log(res.data.data);
      this.tech = res.data.data.tech;
      this.sports = res.data.data.sports;
      this.loading = false;
      this.isShow = false;
    }).catch(err=>{
      console.log(err);
    })
  }
   
}
</script>

<style scoped>
div.left{
  visibility: hidden;
}
div.right{
  float: left;
  width: 100%;
}
  .zouma img{
    width: 400px;
    height: 500px;
  }
  li{
    list-style-type: none;
    margin-bottom: 20px;
    text-align: left;
  }
  li a{
    color: #777;
    text-decoration: none;
  }
  li a:hover{
    text-decoration: underline;
  }
  .listurl span{
    font-size: 14px;
  }
  .listurl span.dianji{
    display: inline-block;
    width: 58px;
    font-size: 12px;
    text-align: right;
  }
  .listurl span.time{
    font-size: 13px;
  }
  .listurl span.dianji,.listurl span.time{
    float: right;
    line-height: 22px;
  }
  .clear{
    clear: both;
  }
</style>
