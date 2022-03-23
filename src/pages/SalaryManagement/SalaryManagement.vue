<template>
  <default-layout>
    <search-wrapper ref="searchContainer"/>
    <Table :refresh="refresh"/>
  </default-layout>
</template>

<script>
import DefaultLayout from '@/components/DefaultLayout.vue';
import SearchWrapper from './Search/SearchWrapper';
import Table from './Table/Table';
export default {
  components: { DefaultLayout, SearchWrapper, Table},
    data(){
        return{
        }
    },
    methods:{
      refresh(){
        return this.$refs.searchContainer.fetchData()
      }
    },
}
</script>

<style>
</style>