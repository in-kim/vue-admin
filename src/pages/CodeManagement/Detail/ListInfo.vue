<template>
  <div class="table__wrapper type02">
      <span class="title">1차회사</span>
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
            <td>2021-03-02 17:01:01</td>
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
                <span v-if="!EditMode">2021년</span>
                <comm-select v-if="EditMode" :options="yearList" :onChnage="handleYear"/>
            </td>
          </tr>
          <tr>
            <th>회사명</th>
            <td>
                <span v-if="!EditMode">삼성SDS</span>
                <comm-input v-if="EditMode"/>
            </td>
            <th>연봉</th>
            <td>
                <span v-if="!EditMode">4,257만원</span>
                <comm-input v-if="EditMode"/>
            </td>
          </tr>
          <tr>
            <th>년차</th>
            <td>
                <span v-if="!EditMode">3년차</span>
                <comm-select v-if="EditMode"></comm-select>
            </td>
            <th>직급</th>
            <td> 
                <span v-if="!EditMode">대리</span>
                <comm-select v-if="EditMode"></comm-select>
            </td>
          </tr>
          <tr>
              <th>부서명</th>
              <td>
                 <span v-if="!EditMode">-</span>
                <comm-input v-if="EditMode" />
              </td>
              <th>직무</th>
              <td>
                <span v-if="!EditMode">-</span>
                <comm-input v-if="EditMode" />
              </td>
          </tr>
          <tr>
              <th>직책</th>
              <td>
                <span v-if="!EditMode">-</span>
                <comm-input v-if="EditMode" />
              </td>
              <th>성과급</th>
              <td>
                <span v-if="!EditMode">600만원</span>
                <comm-input v-if="EditMode" />
              </td>
          </tr>
          <tr>
              <th>1차연봉/기준년도</th>
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
              <td colspan="3"></td>
          </tr>
      </table>
  </div>
</template>

<script>
import CommInput from '@/components/CommInput';
import CommSelect from '@/components/CommSelect';
export default {
    props:{
        EditMode:{
            type:[Boolean]
        }
    },
    components:{ CommInput, CommSelect},
    data(){
        return{
            yearList:[
                {
                    label:'2021년',
                    value:'2021'
                }
            ]
        }
    },
    methods:{
        handleYear(){
            console.log('handleYear');
        }
    }
}
</script>

<style>

</style>