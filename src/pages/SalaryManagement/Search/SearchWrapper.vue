<template>
    <div class="search-wrapper">
        <Card>
            <el-row :gutter="10">
                <el-col :span="6">
                    <comm-select 
                        label="기준년도"
                        :options="year"
                        :onChange="(val) => handleData('year',val)"
                    />
                </el-col>
                <el-col :span="6">
                    <comm-input :data="store.companyName" placeholder="입력" label="회사명" :onChange="(val) => handleData('companyName', val)"/>
                </el-col>
                <el-col :span="6">
                    <comm-select 
                        label="년차"
                        :options="annual"
                        :onChange="(val) => handleData('annual',val)"
                    />
                </el-col>
                <el-col :span="6">
                    <comm-select 
                        label="직급"
                        :options="duty"
                        :onChange="(val) => handleData('duty',val)"
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
import CommSelect from '@/components/CommSelect.vue';
export default {
    components: { Card, CommInput, CommSelect },
    data(){
        return{
            
        }
    },
    computed:{
        store(){
            return this.$store.state.salaryManagement; 
        },
        year(){
            return [
                {
                    key:2019,
                    value:2019,
                }
            ]
        },
        annual(){
            let y = 20;
            let data = [];
            for(let i=1; i <= y; i++){
                data.push({
                    label:i+' 년차',
                    value:i
                });
            }

            return data;
        },
        duty(){
            return [
                { label:'사원', value:'시원'},
                { label:'대리', value:'대리'},
                { label:'과장', value:'과장'},
                { label:'차장', value:'차장'},
                { label:'부장', value:'부장'},
                { label:'이사', value:'이사'},
            ]
        }
    },
    methods:{
        handleData(target,value){
            this.$store.commit('salaryManagement/DEFAULT_ASSIGN',{
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

                await this.$store.dispatch('salaryManagement/search')
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