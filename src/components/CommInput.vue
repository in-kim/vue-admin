<template>
  <div class="input-wrapper">
      <label v-if="label">{{label}}</label>
      <el-input v-model="value" :placeholder="placeholder" @input="onChange" :name="name"/>
  </div>
</template>

<script>
export default {
    data(){
        return {
            value:'',
        }
    },
    props:{
        data:{
            type:[String,Number,Object,Array]
        },
        label:{
            type:[String],
        },
        placeholder:{
            type:[String]
        },
        name:{
            type:[String]
        },
        id:{
            type:[String]
        },
        onChange:{
            type:[Function]
        }
    },
    mounted(){
        this.value = this.data;
    }
}
</script>

<style>
    .input-wrapper{
        display:flex; align-items: center;
    }
    .input-wrapper > label{
        font-size:14px; line-height: 16px; word-break: keep-all;
        min-width:80px;

        margin-right:10px;
    }
</style>