<template>
  <el-card class="card-wrapper" :body-style="bodyStyle" :shadow="shadow">
      <div slot="header" v-if="header">{{header}}</div>
      <div class="content">
          <slot />
      </div>
  </el-card>
</template>

<script>
export default {
    props:{
        header:{
            type:[String]
        },
        bodyStyle:{
            type:[String, Array]
        },
        shadow:{
            type:[String]
        }
    },
}
</script>
