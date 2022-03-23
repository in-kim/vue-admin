<template>
    <Card class="table__wrapper">
        <el-table
            :data="columns"
            stripe
            sortable
        >
            <el-table-column 
                v-for="(item,index) in row"
                :key="index"
                :prop="item.prop"
                :label="item.label"
                :type="item.type"
                sortable
            />
        </el-table>
        <el-pagination
            v-if="columns"
            background
            layout="prev, pager, next"
            :total="totalSize"
            @current-change="handleCurrentChange"
            style="text-align:center"
        />
    </Card>
</template>

<script>
import Card from '@/components/Card';
export default {
    components:{Card},
    props:{
        refresh:{
            type:[Function]
        }
    },
    data(){
        return{
            row:[
                {
                    label:"No",
                    type:"index",
                },
                {
                    label:"기준년도",
                    prop:"year",
                },
                {
                    label:"회사명",
                    prop:"companyName",
                },
                {
                    label:"년차",
                    prop:"annual",
                },
                {
                    label:"직급",
                    prop:"dutyName",
                },
                {
                    label:'연봉',
                    prop:'salary'
                }
            ],
        }
    },
    computed:{
        columns(){
            return this.$store.state.salaryManagement.ResultList
        },
        totalSize(){
            let totalSize = Number(this.$store.state.salaryManagement.ResultData.totalPages);
            return totalSize * 10
        },
    },
    methods:{
        handleCurrentChange(val) {
            this.$store.commit('salaryManagement/DEFAULT_ASSIGN',{
                key:'page',
                value:val === 0 ? 0 : val-1
            })

            this.refresh();
        },
    }
}
</script>

<style>

</style>