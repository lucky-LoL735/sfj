<template>
  <el-form>
    <el-form-item label="用户名">
      <el-input v-model="user" placeholder="Please input" />
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="pwd" placeholder="Please input" />
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const user = ref('')
const pwd = ref('')

</script>
