<template>
  <div class="left-menu">
    <dl id="menu">
      <dt>学生管理</dt>
      <router-link :to="{name: 'stuList'}" tag="dd">学生列表</router-link>
      <router-link :to="{name: 'addStu'}" tag="dd">新增学生</router-link>
    </dl>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>