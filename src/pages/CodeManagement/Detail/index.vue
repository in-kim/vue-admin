<template>
  <Card>
    <company-info />
    <list-info :EditMode="EditMode"/>

    <div class="button_wrapper">
      <el-button type="danger" @click="handleMode">반려</el-button>
      <el-button type="success" @click="handleMode">저장</el-button>
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
      EditMode:false,
    }
  },
  components:{ Card, CompanyInfo, ListInfo },
  methods:{
    handleMode(){
      this.EditMode=!this.EditMode
    }
  }
}
</script>

<style>

</style>