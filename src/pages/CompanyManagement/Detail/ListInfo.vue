<template>
    <div class="table__list">
        <div class="table__wrapper type02" v-for="(item, index) in store" :key="index">
            <span class="title">{{index+1}}차회사</span>
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
                        <td>Y</td>
                        <th>인증일시</th>
                        <td>{{item.certAt}}</td>
                    </tr>
                    <tr>
                        <th>추가 인증여부</th>
                        <td>N</td>
                        <th>최종 인증일시</th>
                        <td>{{item.lastCertAt}}</td>
                    </tr>
                    <tr>
                        <th>기준년도</th>
                        <td colspan="3">
                            <span v-if="!EditMode">{{item.standardYear}}</span>
                            <comm-select v-if="EditMode" :options="yearList" :value="item.standardYear" name="standardYear"/>
                        </td>
                    </tr>
                    <tr>
                        <th>회사명</th>
                        <td>
                            <span v-if="!EditMode">{{item.companyName}}</span>
                            <comm-input v-if="EditMode" :data="item.companyName" name="companyName"/>
                        </td>
                        <th>연봉</th>
                        <td>
                            <span v-if="!EditMode">{{item.salaryVal && item.salaryVal.toLocaleString('ko-KR')+'원'}}</span>
                            <comm-input v-if="EditMode" :data="item.salaryVal" name="salaryVal"/>
                        </td>
                    </tr>
                    <tr>
                        <th>년차</th>
                        <td>
                            <span v-if="!EditMode">{{item.annual}}년차</span>
                            <comm-select v-if="EditMode" :options="annualList" name="annual" :value="item.annual"></comm-select>
                        </td>
                        <th>직급</th>
                        <td> 
                            <span v-if="!EditMode">{{item.rankName}}</span>
                            <comm-select v-if="EditMode" name="rankName"></comm-select>
                        </td> 
                    </tr>
                    <tr>
                        <th>부서명</th>
                        <td>
                            <span v-if="!EditMode">{{item.deptName}}</span>
                            <comm-input v-if="EditMode" :data="item.deptName" name="deptName"/>
                        </td>
                        <th>직무</th>
                        <td>
                            <span v-if="!EditMode">{{item.dutyName}}</span>
                            <comm-input v-if="EditMode" :data="item.dutyCode" name="dutyCode"/>
                        </td>
                    </tr>
                    <tr>
                        <th>직책</th>
                        <td>
                            <span v-if="!EditMode">{{item.positionName}}</span>
                            <comm-input v-if="EditMode" :data="item.positionCode" name="positionCode"/>
                        </td>
                        <th>성과급</th>
                        <td>
                            <span v-if="!EditMode">{{item.annualVal && item.annualVal.toLocaleString('ko-KR')}}</span>
                            <comm-input v-if="EditMode" :data="item.annualVal" name="annualVal"/>
                        </td>
                    </tr>
                    <tr>
                        <th>1차연봉/기준년도</th>
                        <td>
                            <span v-if="!EditMode">{{item.standardYear}}</span> 
                            <el-row :gutter="5" v-if="EditMode">
                                <el-col :span="15">
                                    <comm-input :data="item.salaryVal" name="salaryVal"/>
                                </el-col>
                                <el-col :span="7">
                                    <comm-select />
                                </el-col>
                            </el-row>
                        </td>
                        <th>2차연봉/기준년도</th>
                        <td>
                            <span v-if="!EditMode">-</span> 
                            <el-row :gutter="5" v-if="EditMode">
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
                        <td colspan="3">
                            <div v-if="item.fileList">
                                <span v-for="(item, index) in item.fileList" :key="index">
                                    {{index}}
                                </span>
                            </div>
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
            type:[Boolean]
        },
    },
    components:{ CommInput, CommSelect},
    computed:{
        ...mapState(['companyManagement']),
        store(){
            return this.companyManagement.detailData.content
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
        yearList(){
            let list = [];

            for(let i=2022; i >= 1950; i--){
                list.push({
                    label:i+'년',
                    value:i
                })
            }
            
            return list;
        }
    },
    data(){
        return{
            statusList:['READY','ACCEPTED','PARTIAL','ADD','REJECTED','CANCELED'],
            fetchParams:{
                year:'',
                annual:'',
            }
        }
    },
    methods:{
        handleSelect(target,val){
            this.fetchParams[target] = val
        },
        handleInput(target,val){
            this.$store.commit('companyManagement/DEFAULT_ASSIGN',{
                key:target,
                value:val
            })
        },
    },
}
</script>

<style>

</style>