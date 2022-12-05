<template>
  <el-form>
    <el-form-item>
      <el-input v-model="user" placeholder="Please input" />
    </el-form-item>
    <el-form-item>
      <el-input v-model="pwd" placeholder="Please input" />
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const user = ref('')
const pwd = ref('')

</script>
