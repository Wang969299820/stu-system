<template>
   <div class="search">
      <label for="search-word">关键字搜索:</label>
      <input type="text" id="search-word" v-model="keyword" />
      <button id="search-submit" @click="search">搜索</button>
    </div>
</template>

<script>
export default {
    data() {
       return {
          keyword: ''
       }
    },
    methods: {
       search() {
          this.$store.commit('setKeyword', this.keyword);
          this.$store.dispatch('getStuList', 1)
       }
    }
}
</script>

<style>

</style>