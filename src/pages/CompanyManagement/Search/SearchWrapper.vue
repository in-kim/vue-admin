<template>
    <div class="search-wrapper">
        <Card>
            <el-row :gutter="10">
                <el-col :span="6">
                    <comm-input 
                        :data="store.userSeq" 
                        placeholder="입력" 
                        label="고유번호" 
                        :onChange="(val) => handleData('userSeq',val)"
                    />
                </el-col>
                <el-col :span="6">
                    <comm-input 
                        :data="store.companyName" 
                        placeholder="입력" 
                        label="회사명" 
                        :onChange="(val) => handleData('companyName',val)"
                    />
                </el-col>
            </el-row>
            <div class="search__button">
                <el-button type="primary" :plain="true" @click="search">search</el-button>
            </div>
        </Card>
    </div>
</template>

<script>
import Card from '@/components/Card';
import CommInput from '@/components/CommInput.vue';
export default {
    components: { Card, CommInput },
    data(){
        return{
            
        }
    },
    computed:{
        store(){
            return this.$store.state.companyManagement; 
        }
    },
    methods:{
        handleData(target,value){
            this.$store.commit('companyManagement/DEFAULT_ASSIGN',{
                key:target,
                value:value
            })
        },
        search(){
            this.fetchData(this);
        },
        async fetchData(t) {
            try{
                this.$store.commit('common/HANDLE_LODING', true);

                await this.$store.dispatch('companyManagement/search')
            }catch(error){
                t.$message({
                    type:'error',
                    message:error
                })
            }finally{
                this.$store.commit('common/HANDLE_LODING', false);
            }
        }
    },
}
</script>

<style>
    .search-wrapper{
        margin-bottom:30px;
    }
    .search__button{
        display: flex; align-items: center; justify-content: center;

        margin-top:20px;
    }
    .datePicker-wrapper{
        display: flex; align-items: center; gap:10px;
    }
    .datePicker-wrapper > label{
        font-size:14px; line-height: 16px; word-break: keep-all;
        flex:1; max-width:90px;
        word-break: keep-all;
    }
    .datePicker-wrapper > .el-date-editor{
        flex:1;
    } 
</style>