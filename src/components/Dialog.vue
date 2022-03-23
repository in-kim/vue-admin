<template>
    <el-dialog
        :title="title"
        :visible.sync="centerDialogVisible"
        :width="modalSize"
        center>
        <span>
            <slot />
        </span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="close">Cancel</el-button>
        </span>
    </el-dialog>
</template>

<script>
export default {
    props:{
        title:{type:[String]},
        size:{type:[String]},
        close:{type:[Function]}
    },
    computed:{
        modalSize(){
            switch(this.size){
                case 's':
                    return '30%';
                case 'm':
                    return '50%';
                case 'l':
                    return '70%';
                case 'xl':
                    return '90%';
            }

        }
    }
}
</script>

<style>

</style>