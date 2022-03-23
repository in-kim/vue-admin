<template>
    <Card class="table__wrapper">
        <el-table
            :data="columns"
            stripe
            @row-click="(row) => handleDetail(row)"
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
        handleDetail:{
            type:[Function]
        },
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
                    label:"구분",
                    prop:"status",
                },
                {
                    label:"이메일주소 or 고유번호",
                    prop:"email",
                },
                {
                    label:"회사명",
                    prop:"companyName",
                },
                {
                    label:"입력한 정보 수",
                    prop:"salaryCount",
                },
                {
                    label:"요청일시",
                    prop:"requestAt"
                }
            ],
        }
    },
    computed:{
        columns(){
            return this.$store.state.comfirmManagement.ResultList
        },
        totalSize(){
            let totalSize = Number(this.$store.state.comfirmManagement.ResultData.totalPages);
            return totalSize * 10
        }
    },
    methods:{
        handleCurrentChange(val) {
            this.$store.commit('comfirmManagement/DEFAULT_ASSIGN',{
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