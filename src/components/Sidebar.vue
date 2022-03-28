<template>
    <div class="sidebar-wrapper">
        <h1 class="logo">Vue Admin</h1>
        <el-aside>
            <el-menu :default-active="isActive">
                <el-menu-item :index="(index+1).toString()" v-for="(item,index) in menu" :key="index" @click="() => handleLink(item.name)">
                    <i :class="item.icon" />
                    <span slot="title">{{item.title}}</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
    </div>
</template>
<script>
import {routes} from '@/router/routes';

export default {
    data(){
        return{
            menu:routes.filter((e) => e.path!=='/' && e.path!=='*' && e.path!=='/login')
        }
    },
    props:{
        setTitle:{
            type:[Function]
        }
    },
    computed:{
        isActive(){
            let menuPath = this.$route.fullPath;
            let idx = '';
            this.menu.forEach((el,index) => {
                idx = el.path === menuPath && index;
            });

            return (idx+1).toString();
        }
    },
    methods:{
        handleLink(path){
            let router = this.$router;
            let page = router.history.current.name;
            if(page !== path){
                router.push(path);
            }
            
            return
        }
    }
}
</script>