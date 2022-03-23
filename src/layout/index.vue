<template>
    <div id="app" class="wrapper">
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
}
</script>
<style scoped>
    .wrapper{
        width:100%; height:100%;
    }
</style>