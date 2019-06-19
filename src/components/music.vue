<template>
    <div class="music">
      <el-table
      v-loading="loading"
      v-show="issShow"
      :data="tableData"
      style="width: 100%;height:300px;">
      </el-table>
        <a-player :music="musicList" theme="#b7daff" v-show="isShow"></a-player>
    </div>
</template>

<script>

import VueAplayer from 'vue-aplayer'

export default{

  data(){

    return {
      bkcolor: "#b7daff",

      musicList:[],

      isShow:false,
      loading: true,
      issShow: true

    }

  },
// https://api.bzqll.com/music/kugou/songList?key=579621905&id=578823
  mounted(){
      this.$axios.get('https://api.bzqll.com/music/kugou/songList?key=579621905&id=578823')
    .then(res=>{
        console.log(res.data.data.songs);
        let List = res.data.data.songs;
        List.forEach(element => {

       let obj = {

         title:element.name,

         pic:element.pic,

         url:element.url,

         author:element.singer,

         lrc:element.lrc

       }        

       this.musicList.push(obj);
      this.loading = false;
      this.issShow = false;

     });

       console.log(this.musicList);
       this.isShow=true; 
    }).catch(err=>{
      console.log(err);
    })
  },

  components: {

    'a-player': VueAplayer

  }

}  

</script>

<style>

.music{

  margin:1rem 0;

}

</style>
