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
export default {
    data(){
        return{}
    },
    computed:{
        tableData(){
            return [
                {
                    head:'No',
                    value:'327',
                },
                {
                    head:'고유번호',
                    value:'A001',
                },
                {
                    head:'가입일시',
                    value:'2021-03-07 16:14:21',
                },
            ]
        }
    }
}
</script>

<style>

</style>