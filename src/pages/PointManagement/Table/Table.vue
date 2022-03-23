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
            v-if="totalSize"
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
    data(){
        return{
            row:[
                {
                    label:"No",
                    type:"index",
                },
                {
                    label:"구분",
                    prop:"typeName",
                },
                {
                    label:"고유번호",
                    prop:"userSeq",
                },
                {
                    label:"포인트 금액",
                    prop:"increase",
                },
                {
                    label:"비고",
                    prop:"cont",
                },
                {
                    label:"일시",
                    prop:"createAt"
                }
            ],
            // data: [
            //     {
            //         email:'test@naver.com',
            //         authDt:'2021-03-02 16:11:42',
            //         auth:'Y',
            //         joinDt:'2021-03-02 16:11:22',
            //     },
            //     {
            //         email:'test@naver.com',
            //         authDt:'2021-03-02 16:11:42',
            //         auth:'Y',
            //         joinDt:'2021-03-02 16:11:22',
            //     },
            //     {
            //         email:'test@naver.com',
            //         authDt:'2021-03-02 16:11:42',
            //         auth:'Y',
            //         joinDt:'2021-03-02 16:11:22',
            //     },
            // ]
        }
    },
    computed:{
        columns(){
            return this.$store.state.pointManagement.ResultList
        },
        totalSize(){
            let totalSize = Number(this.$store.state.pointManagement.ResultData.totalPages);
            return totalSize * 10
        }
    },
    methods:{
        handleCurrentChange(val) {
            this.$store.commit('userManagement/DEFAULT_ASSIGN',{
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