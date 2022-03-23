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
                    label:"이메일주소 or 고유번호",
                    prop:"title",
                },
                {
                    label:"인증메일 최종발송일시",
                    prop:"certMailAt",
                },
                {
                    label:"인증여부",
                    prop:"certYn",
                },
                {
                    label:"가입일시",
                    prop:"createdAt",
                }
            ],
        }
    },
    computed:{
        columns(){
            return this.$store.state.userManagement.ResultList
        },
        totalSize(){
            let totalSize = Number(this.$store.state.userManagement.ResultData.totalPages);
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