<template>
  <div class="select-wrapper">
      <label v-if="label">{{label}}</label>
      <el-select v-model="data" placeholder="" :name="name" @change="onChange && onChange">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
          
      </el-select>
  </div>
</template>

<script>
export default {
    name:'comm-select',
    data(){
        return{
            data:'',
        }
    },
    props:{
        label:{ type:[String] },
        options:{ type:[Object, Array]},
        name:{type:[String]},
        onChange:{ type:[Function]},
        value:{ type:[String,Number,Boolean]}
    },
    methods:{
        
    },
    mounted(){
        if(this.value){
            this.data = this.value
        }
    }
}
</script>

<style>
    .select-wrapper{
        display: flex; align-items:center;
    }
    .select-wrapper .el-select{
        flex:1;
    }
    .select-wrapper > label{
        font-size:14px;
        line-height: 16px;
        margin-right:10px;
    }
</style>