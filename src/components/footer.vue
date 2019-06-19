<template>
  <div class="footer">
    The copyright belongs to MF &copy;2019.
  </div>
</template>

<script>
export default {
  name: 'footer',
  filters:{
    myFilter: function(value){
      return value.split('').reverse().join('');
    }
  },
  data () {
   return{}
  },
  methods:{
   
  }
}
</script>

<style scoped>
  .footer{
    width: 100%;
    padding: 10px 0;
    background: #75adff;
    color: #fff;
    text-align: center;
    font-size: 20px;
  }
</style>
