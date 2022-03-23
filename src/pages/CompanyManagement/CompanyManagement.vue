<template>
  <default-layout>
    <search-wrapper v-if="!isDetail" ref="searchContainer"/>
    <Table ref="tableContainer" v-if="!isDetail" :handleDetail="handleDetail" :refresh="refresh"/>
    <Detail v-if="isDetail" :handleDetail="handleDetail"/>
  </default-layout>
</template>

<script>
import DefaultLayout from '@/components/DefaultLayout.vue';
import SearchWrapper from './Search/SearchWrapper';
import Table from './Table/Table';
import Detail from './Detail';
export default {
  components: { DefaultLayout, SearchWrapper, Table, Detail},
    data(){
        return{
          isDetail:false,
        }
    },
    methods:{
      handleDetail(row){
        if(row){
          let seq = row.baseSeq;
          this.getDetailData(seq);

          this.isDetail = !this.isDetail;
        }else{
          this.isDetail = !this.isDetail;
        }
      },
      async getDetailData(seq){
        await this.$store.dispatch('companyManagement/getDetail',{seq});
      },
      refresh(){
        return this.$refs.searchContainer.fetchData()
      }
    }
}
</script>

<style>
</style>