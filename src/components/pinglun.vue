<template>
    <div class="plbox">
        <el-row>
            <el-col :span="1"><div class="yincang">1</div></el-col>
            <el-col :span="22">
                <div class="pinglun">
                    <el-collapse v-model="activeNames" @change="handleChange">
                        <el-collapse-item title="。。four:" name="1">
                            <div>这个还不错的呀</div>
                            <div>emm..至少作为新人是不错啦~</div>
                            <div>
                               <el-rate
                                v-model="value1"
                                disabled
                                :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                                </el-rate>
                            </div>
                        </el-collapse-item>
                        <el-collapse-item title="老街：" name="2">
                            <div>一般吧~</div>
                            <div>
                               <el-rate
                                v-model="value2"
                                disabled
                                :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                                </el-rate>
                            </div>
                        </el-collapse-item>
                        <el-collapse-item title="你爸对你妈说：" name="3">
                            <div>简化流程：设计简洁直观的操作流程；</div>
                            <div>楼主能留个练习方式不</div>
                            <div>加了一起学呀</div>
                            <div>
                               <el-rate
                                v-model="value3"
                                disabled
                                :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                                </el-rate>
                            </div>
                        </el-collapse-item>
                        <el-collapse-item title="黄黄黄哈哈哈：" name="4">
                            <div>加油吧</div>
                            <div>不咋地~</div>
                            <div>
                               <el-rate
                                v-model="value4"
                                disabled
                                :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                                </el-rate>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
                <div class="mine">
                    <el-input
                    type="textarea"
                    :rows="5"
                    placeholder="我也要说"
                    v-model="textarea">
                    </el-input>
                    <div class="dafen">
                        <p>请打分：</p>
                        <el-rate
                        v-model="value5"
                        :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                        </el-rate>
                    </div>
                    <p class="tijiao">
                        <router-link :to="{name:'HelloWorld'}" class="link"><el-button type="primary">提交</el-button></router-link>
                    </p>
                </div>
            </el-col>
            <el-col :span="1"><div class="yincang">1</div></el-col>
        </el-row>
    </div>    
</template>

<script>
export default {
    name:'pinglun',
    data () {
        return{
            activeNames: ['1'],
            value1: 4,
            value2: 3,
            value3: 5,
            value4: 1,
            value5: null,
            textarea: ''
        }
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
}
</script>

<style scoped>
    .yincang{
        visibility: hidden;
    }
    .pinglun{
        text-align: left;
        margin-bottom: 80px;
        padding-bottom: 20px;
        border-bottom: 1px dashed rgb(165, 165, 165);
    }
    .mine{
        text-align: left;
        margin-bottom: 40px;
        padding-bottom: 30px;
    }
    .dafen{
        margin-top: 15px;
        margin-bottom: 20px;
    }
    .dafen p{
        margin-bottom: 8px;
        font-size: 14px;
        color: #606723;
    }
</style>
