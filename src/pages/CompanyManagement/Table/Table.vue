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
                :seq="item.baseSeq"
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
import { mapState } from 'vuex';
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
                    label:"고유번호",
                    prop:"userSeq",
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
                    label:"최초 승인일시",
                    prop:"firstCertAt",
                },
                {
                    label:"추가(최종) 승인일시",
                    prop:"certAt"
                }
            ],
        }
    },
    computed:{
        ...mapState(['companyManagement']),
        columns(){
            return this.companyManagement.ResultList
        },
        totalSize(){
            let totalSize = Number(this.companyManagement.ResultData.totalPages);
            return totalSize * 10
        }
    },
    methods:{
        handleCurrentChange(val) {
            this.$store.commit('companyManagement/DEFAULT_ASSIGN',{
                key:'page',
                value:val === 0 ? 0 : val-1
            })

            this.refresh();
        },
    },
    mounted(){
        this.refresh();
    }
}
</script>

<style>

</style>