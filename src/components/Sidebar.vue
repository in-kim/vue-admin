<template>
    <div class="sidebar-wrapper">
        <h1 class="logo"><i class="icon"/> 너의 연봉은 얼마니?</h1>
        <el-aside>
            <el-menu>
                <el-menu-item :index="(index+1).toString()" v-for="(item,index) in routes" :key="index" @click="() => handleLink(item.name)">
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
        return{}
    },
    props:{
        setTitle:{
            type:[Function]
        }
    },
    computed:{
        routes(){
            let menu = [];
            menu = routes.filter((e) => e.path!=='/' && e.path!=='*' && e.path!=='/login')
            return menu;
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