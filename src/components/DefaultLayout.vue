<template>
  <el-container class="h-100">
      <AppSidebar :title="title"></AppSidebar>
      <div style="flex:1">
        <AppHeader ref="header"></AppHeader>
        <el-container 
            class="sub__wrapper column"
            v-loading="loading"
            element-loading-text="Loading..."
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(0, 0, 0, 0.8)"
        >
            <slot />
        </el-container>
      </div>
  </el-container>
</template>

<script>
import AppHeader from './Header';
import AppSidebar from './/Sidebar';

export default {
    data(){
        return{
        }
    },
    components:{ AppHeader, AppSidebar },
    computed:{
        loading(){
            return this.$store.state.common.loading            
        }
    },
    methods:{
        title(){
            this.$refs.header.setTitle()
        },
    },
}
</script>
<style scoped>
    .wrapper{
        display: flex;
        background: #C0C4CC;
    }

    .h-100{
        height:100%;
    }
</style>