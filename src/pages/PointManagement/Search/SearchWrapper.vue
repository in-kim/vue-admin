<template>
    <div class="search-wrapper">
        <Card>
            <el-row :gutter="10">
                <el-col :span="6">
                    <comm-select 
                        label="구분"
                        :options="type"
                        :onChange="(val) => handleData('type',val)"
                    />
                </el-col>
                <el-col :span="6">
                    <comm-input 
                        :data="store.userSeq" 
                        placeholder="입력" 
                        label="고유변호" 
                        :onChange="(val) => handleData('userSeq', val)"
                    />
                </el-col>
                <el-col :span="10">
                        <div class="datePicker-wrapper">
                            <label>날짜</label>
                            <el-date-picker
                                v-model="year"
                                type="daterange"
                                range-separator="To"
                                start-placeholder="Start date"
                                end-placeholder="End date"
                                format="yyyy-MM-dd"
                                value-format="yyyy-MM-dd"
                            />
                        </div>
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
            type:[
                {
                    label:'충전',
                    value:'CHARGE',
                },
                {
                    label:'지급',
                    value:'PAYMENY',
                },
                {
                    label:'사용',
                    value:'USE'
                }
            ],
            year:'',
        }
    },
    computed:{
        store(){
            console.log(this.$store.state.pointManagement)
            return this.$store.state.pointManagement; 
        }
    },
    methods:{
        handleData(target,value){
            console.log('userSeq',target,value);
            this.$store.commit('pointManagement/DEFAULT_ASSIGN',{
                key:target,
                value:value
            })
        },
        search(){
            this.fetchData(this);
        },
        async fetchData(t) {
            let searchParams = {
                certMailAt:this.sendDt,
                createAt:this.joinDt,
            }

            try{
                this.$store.commit('common/HANDLE_LODING', true);

                await this.$store.dispatch('pointManagement/search',{searchParams})
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