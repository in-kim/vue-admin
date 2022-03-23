<template>
    <el-header class="header-wrapper">
        <h1>{{title}}</h1>
        <span>
            <el-dropdown @command="handleCommand">
                <i class="el-icon-setting" style="margin-right: 15px"></i>
                <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="logout">LogOut</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <span>Lee성hyun</span>
        </span>
    </el-header>
</template>
<script>
import {routes} from '@/router/routes';
import {AuthService} from '@/services/auth.service.js'
export default {
    data(){
        return{
            title:'',
        }
    },
    methods:{
        setTitle(){
            let page = this.$router.history.current.name;
            let pageRoute="";
            pageRoute = routes.filter((item) => { 
                return item.name === page
            });
            
            return this.title = pageRoute[0].title;
        },
        handleCommand(handleCommand){
            switch(handleCommand){
                case 'logout':{
                    AuthService.makeLogout()
                }
            }
        },
    },
    mounted(){  
        this.setTitle();
    }
}
</script>