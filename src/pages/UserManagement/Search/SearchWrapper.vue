<template>
    <div class="search-wrapper">
        <Card>
            <el-row :gutter="10">
                <el-col :span="6">
                    <comm-select 
                        label="인증여부"
                        :options="store.authOption"
                        :onChange="(val) => handleData('auth',val)"
                    />
                </el-col>
                <el-col :span="6">
                    <comm-input 
                        :data="store.searchEmail" 
                        placeholder="입력" 
                        label="이메일주소/ 고유번호" 
                        :onChange="(val) => handleData('searchEmail', val)"
                    />
                </el-col>
                <el-col :span="6">
                        <div class="datePicker-wrapper">
                            <label>인증메일 최종발송일</label>
                            <el-date-picker
                                v-model="sendDt"
                                type="daterange"
                                range-separator="To"
                                format="yyyy-MM-dd"
                                value-format="yyyy-MM-dd"
                            />
                        </div>
                </el-col>
                <el-col :span="6">
                        <div class="datePicker-wrapper">
                            <label>가입일</label>
                            <el-date-picker
                                v-model="joinDt"
                                type="daterange"
                                range-separator="To"
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
            sendDt:'',
            joinDt:'',
        }
    },
    computed:{
        store(){
            return this.$store.state.userManagement; 
        }
    },
    methods:{
        handleData(target,value){
            this.$store.commit('userManagement/DEFAULT_ASSIGN',{
                key:target,
                value:value
            })
        },
        search(){
            this.fetchData(this);
        },
        async fetchData(t) {
            let searchParams = {
                certStartDate:this.sendDt[0],
                certEndDate:this.sendDt[1],
                joinStartDate:this.joinDt[0],
                joinEndDate:this.joinDt[1],
            }

            try{
                this.$store.commit('common/HANDLE_LODING', true);

                await this.$store.dispatch('userManagement/search',{searchParams})
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