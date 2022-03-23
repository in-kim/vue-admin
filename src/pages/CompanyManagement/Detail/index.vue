<template>
  <Card body-style="height:100%">
    <company-info />
    <list-info :EditMode="EditMode" ref="tableList"/>

    <div class="button_wrapper">
      <el-button type="primary" @click="handleMode" v-if="!EditMode">수정</el-button>
      <el-button type="success" @click="onSubmit" v-if="EditMode">저장</el-button>
      <el-button type="danger" @click="handleMode" v-if="EditMode">취소</el-button>
      <el-button type="info" @click="goList">목록</el-button>
    </div>
  </Card>  
</template>

<script>
import Card from '@/components/Card';
import CompanyInfo from './CompanyInfo';
import ListInfo from './ListInfo.vue';
export default {
  props:{
    handleDetail:{
      type:[Function]
    },
  },
  data(){
    return{
      EditMode:false,
    }
  },
  components:{ Card, CompanyInfo, ListInfo },
  methods:{
    handleMode(){
      this.EditMode=!this.EditMode;
    },
    async patchData(params){
      try{
        await this.$store.dispatch('companyManagement/patchDetail',{params});
      }catch(error){
        console.log(error);
      }
    },
    onSubmit(){
      let formList = document.querySelectorAll('form');

      // 수정 리스트가 단일일 경우
      if(formList && formList.length === 1){
        let obj = {};


        Object.keys(formList[0]).forEach(el => {
          if(formList[0][el].name){
            if(formList[0][el].name === 'annual'){
              obj[formList[0][el].name] = formList[0][el].value ? formList[0][el].value.replace('년차','') : '';  
            }else if(formList[0][el].name === 'standardYear'){
              obj[formList[0][el].name] = formList[0][el].value ? formList[0][el].value.replace('년','') : '';
            }else{
              obj[formList[0][el].name] = formList[0][el].value ? formList[0][el].value : '';
            }
          }
        });
        console.log('onSubmit : ',obj);
        this.patchData(obj);
      }else{ // 수정 리스트가 다중일 경우
        let obj = {}; // 수정된 값 배열 변수
        
        Object.keys(formList).forEach(i => { // form 순환
          Object.keys(formList[i]).forEach((j) => { // form 내부 데이터 순환
              if(formList[i][j].name){
                if(formList[i][j].name === 'annual'){
                  obj[formList[i][j].name] = formList[i][j].value ? formList[i][j].value.replace('년차','') : '';  
                }else if(formList[i][j].name === 'standardYear'){
                  obj[formList[i][j].name] = formList[i][j].value ? formList[i][j].value.replace('년','') : '';
                }else{
                  obj[formList[i][j].name] = formList[i][j].value ? formList[i][j].value : '';
                }
              }
          });
          console.log('onSubmit : ',obj);
          this.patchData(obj);
          obj=[];
        });
      }

      alert('수정 되었습니다.');
      this.handleMode();
    },
    goList(){
      this.$store.commit('companyManagement/CLEAR_DETAIL_DATA', false);

      this.handleDetail();
    }
  }
}
</script>

<style>

</style>