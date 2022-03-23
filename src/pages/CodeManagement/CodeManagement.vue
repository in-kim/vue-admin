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
      handleDetail(){
        this.isDetail = !this.isDetail;
      },
      refresh(){
        return this.$refs.searchContainer.fetchData()
      }
    }
}
</script>

<style>
</style>