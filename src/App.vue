<template>
  <div class="wrapper">
    <sys-header></sys-header>
    <sys-menu></sys-menu>
    <!-- <sys-content></sys-content> -->

    <div class="right-content">
       <router-view></router-view>
    </div>
  </div>
</template>

<script>
import sysHeader from "./components/sysHeader";
import sysMenu from "./components/sysMenu";
export default {
    components: {
        sysHeader,
        sysMenu
    }
};
</script>

<style>
@import url('./index.css');
</style>