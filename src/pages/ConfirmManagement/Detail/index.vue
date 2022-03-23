<template>
  <Card>
    <company-info />
    <list-info :EditMode="EditMode" ref="list"/>

    <div class="button_wrapper">
      <el-button type="default" @click="handleMode" v-if="EditMode==='edit'">취소</el-button>
      <el-button type="primary" @click="() => handleMode('edit')" v-if="EditMode!=='edit'">수정</el-button>
      <el-button type="danger" @click="setReject" v-if="EditMode==='edit'">반려</el-button>
      <el-button type="success" @click="onSubmit" v-if="EditMode==='edit'">저장</el-button>
      <el-button type="info" @click="handleDetail">목록</el-button>
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
      EditMode:'',
    }
  },
  components:{ Card, CompanyInfo, ListInfo },
  methods:{
    handleMode(type){
      if(type){
        this.EditMode=type
      }else{
        this.EditMode=''
      }
    },
    async setReject(){
      if(this.$refs.list.textareaData.length > 100){
          this.$store.commit('comfirmManagement/DEFAULT_ASSIGN',{
            key:'infoState',
            value:'REJECTED'
          })

          this.$message({
            type:'success',
            message:'반려 되었습니다.'
          })

          this.EditMode='';
          this.onSubmit();
        
      }else{
        alert('반려사유 100자 이상을 입력해 주세요.');
      }
    },
    async patchData(params, message){
      try{
        const res = await this.$store.dispatch('comfirmManagement/patchDetail',{params});

        if(res.status === 200){
          message({
            type:'success',
            message:'수정 되었습니다.'
          })
          this.handleMode();
        }else{
          message({
            type:'error',
            message:res.data
          })
        }
      }catch(error){
        alert(error);
        message({
          type:'error',
          message:error
        })
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
        this.patchData(obj, this.$message);
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
          this.patchData(obj,this.$message);
          obj=[];
        });
      }
    },
    save(){
      console.log('save')
    }
  }
}
</script>

<style>

</style>