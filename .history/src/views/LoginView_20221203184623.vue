<template>
  <el-form v-model="ruleFormRef">
    <el-form-item label="用户名">
      <el-input v-model="user" placeholder="Please input" />
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="pwd" placeholder="Please input" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">登陆</el-button>
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
const user = ref('')
const pwd = ref('')
const ruleFormRef = reactive([])

</script>
