<template>
    <div class="loginbox">
        <p class="title">Login</p>
        <p><i class="el-icon-service"></i><el-input v-model="input" ref="input" placeholder=""></el-input></p>
        <p><i class="el-icon-view"></i><el-input v-model="input" placeholder=""></el-input></p>
        <p class="switch">
            <el-switch
            v-model="value3"
            active-text="同意协议"
            inactive-text="不同意协议">
            </el-switch>
        </p>
        <p class="switch">
            <span class="demonstration">验证（请将滑块移动至最右侧）</span>
            <el-slider v-model="value1"></el-slider>
        </p>
        <p><router-link :to="{name:'HelloWorld'}" class="link"><el-button type="primary">登录</el-button></router-link></p>
        <p></p>
    </div>
</template>

<script>
export default {
    name:'login',
    data () {
        return{
            input: '',
            value3: false,
            value1: 0
        }
    },
    method: {
        formatTooltip(val) {
        return val / 100;
      }
    },
    mounted (){
           this.$refs['input'].focus();
    }
}
</script>

<style scoped>
    .loginbox{
        width: 380px;
        padding-bottom: 50px;
        margin: auto;
        margin-top: 20px;
    }
    .title{
        font-size: 30px;
        font-weight: bold;
    }
    .loginbox p{
        text-align: center;
        margin-bottom: 30px;
        position: relative;
    }
    i{
        position: absolute;    
        top: 13px;
        left: 13px;
        z-index: 9;
    }
    .switch{
        text-align: left !important;
    }
    button{
        width: 200px;
    }
    .link{
        color: #fff;
        text-decoration: none;
    }
</style>
