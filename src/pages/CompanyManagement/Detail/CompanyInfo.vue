<template>
  <div class="table__wrapper type02">
      <table>
          <tr v-for="(data,index) in tableData" :key="index">
              <th>{{ data.head }}</th>
              <td>{{ data.value}}</td>
          </tr>
      </table>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data(){
        return{}
    },
    computed:{
        ...mapState(['companyManagement']),
        tableData(){
            return [
                {
                    head:'No',
                    value:this.companyManagement.detailData.userSeq,
                },
                {
                    head:'고유번호',
                    value:this.companyManagement.detailData.userSeq,
                },
                {
                    head:'가입일시',
                    value:this.companyManagement.detailData.joinAt,
                },
            ]
        }
    },
}
</script>

<style>

</style>