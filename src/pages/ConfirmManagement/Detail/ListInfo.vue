<template>
    <div class="table__list">
        <div class="table__wrapper type02" v-for="(item, index) in store.content" :key="index">
            <span class="title">1차회사</span>
            <form v-on:submit.prevent="onSubmit">
                <table>
                    <colgroup>
                        <col style="width:15%" />
                        <col style="width:35%" />
                        <col style="width:15%" />
                        <col style="width:35%" />
                    </colgroup>
                    <tr>
                        <th>인증여부</th>
                        <td>
                            {{item.status === 'ACCEPTED' ? 'Y' : item.status === 'PARTIAL' ? '부분승인' : 'N'}}
                        </td>
                        <th>인증일시</th>
                        <td>{{item.lastCertAt}}</td>
                    </tr>
                    <tr>
                        <th>추가 인증여부</th>
                        <td>N</td>
                        <th>최종 인증일시</th>
                        <td>-</td>
                    </tr>
                    <tr>
                        <th>기준년도</th>
                        <td colspan="3">
                            <span v-if="EditMode!=='edit'">{{item.standardYear}}</span>
                            <comm-select v-if="EditMode==='edit'" :options="yearList" :onChnage="handleYear" :value="item.standardYear" name="standardYear"/>
                        </td>
                    </tr>
                    <tr>
                        <th>회사명</th>
                        <td>
                            <span v-if="EditMode!=='edit'">{{item.companyName}}</span>
                            <comm-input v-if="EditMode==='edit'" :data="item.companyName" name="companyName"/>
                        </td>
                        <th>연봉</th>
                        <td>
                            <span v-if="EditMode!=='edit'">{{item.salaryVal.toLocaleString('ko-KR')+'원'}}</span>
                            <comm-input v-if="EditMode==='edit'" :data="item.salaryVal" name="salaryVal"/>
                        </td>
                    </tr>
                    <tr>
                        <th>년차</th>
                        <td>
                            <span v-if="EditMode!=='edit'">{{item.annual+'년차'}}</span>
                            <comm-select v-if="EditMode==='edit'" :options="annualList" :value="item.annual" name="annual"></comm-select>
                        </td>
                        <th>직급</th>
                        <td> 
                            <span v-if="EditMode!=='edit'">{{item.rankName}}</span>
                            <comm-select v-if="EditMode==='edit'" :value="item.rankName" name="rankName"></comm-select>
                        </td>
                    </tr>
                    <tr>
                        <th>부서명</th>
                        <td>
                            <span v-if="EditMode!=='edit'">{{item.deptName}}</span>
                            <comm-input v-if="EditMode==='edit'" :data="item.deptName" name="deptName"/>
                        </td>
                        <th>직무</th>
                        <td>
                            <span v-if="EditMode!=='edit'">{{item.dutyName}}</span>
                            <comm-input v-if="EditMode==='edit'" :data="item.dutyName" name="dutyName"/>
                        </td>
                    </tr>
                    <tr>
                        <th>직책</th>
                        <td>
                            <span v-if="EditMode!=='edit'">{{item.positionName}}</span>
                            <comm-input v-if="EditMode==='edit'" :data="item.positionName" name="positionName"/>
                        </td>
                        <th>성과급</th>
                        <td>
                            <span v-if="EditMode!=='edit'">{{item.incentiveVal.toLocaleString('ko-KR')+'원'}}</span>
                            <comm-input v-if="EditMode==='edit'" :data="item.incentiveVal" name="value"/>
                        </td>
                    </tr>
                    <tr>
                        <th>1차연봉/기준년도</th>
                        <td>
                            <span v-if="EditMode!=='edit'">-</span> 
                            <el-row :gutter="5" v-if="EditMode==='edit'">
                                <el-col :span="15">
                                    <comm-input />
                                </el-col>
                                <el-col :span="7">
                                    <comm-select />
                                </el-col>
                            </el-row>
                        </td>
                        <th>2차연봉/기준년도</th>
                        <td>
                            <span v-if="EditMode!=='edit'">-</span> 
                            <el-row :gutter="5" v-if="EditMode==='edit'">
                                <el-col :span="15">
                                    <comm-input />
                                </el-col>
                                <el-col :span="7">
                                    <comm-select />
                                </el-col>
                            </el-row>
                        </td>
                    </tr>
                    <tr>
                        <th>첨부파일</th>
                        <td colspan="3">{{item.fileList}}</td>
                    </tr>
                    <tr v-if="EditMode==='edit'">
                        <th>반려사유</th>
                        <td colspan="3">
                            <el-input type="textarea" v-model="textareaData" placeholder="100자 이상을 입력 해주세요."></el-input>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import CommInput from '@/components/CommInput';
import CommSelect from '@/components/CommSelect';
export default {
    props:{
        EditMode:{
            type:[String]
        }
    },
    components:{ CommInput, CommSelect},
    data(){
        return{
            textareaData:'',
        }
    },
    computed:{
        ...mapState(['comfirmManagement']),
        store(){
            return this.comfirmManagement.detailData
        },
        yearList(){
            let list = [];

            for(let i=2022; i >= 1950; i--){
                list.push({
                    label:i+'년',
                    value:i
                })
            }
            
            return list;
        },
        annualList(){
            let list = [];

            for(let i=1; i <= 30; i++){
                list.push({
                    label:i+'년차',
                    value:i
                })
            }

            return list;
        },
    },
    methods:{
        handleYear(){
            console.log('handleYear');
        }
    },
    mounted(){
        this.store;
    }
}
</script>

<style>

</style>