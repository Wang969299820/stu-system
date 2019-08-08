<template>
  <ul id="turn-page" class="turnpage">
    <li class="prev-page" @click="turnPage(-2)">上一页</li>
    <template v-if="totalPage <=7">
      <li
        v-for="i in totalPage"
        :key="i"
        :class="{'cur-page': i == nowPage}"
        @click="turnPage(i)"
      >{{i}}</li>
    </template>
    <template v-if="totalPage>7">
      <template v-if="nowPage <=4 ">
        <li v-for="i in 6" :key="i" @click="turnPage(i)" :class="{'cur-page': i == nowPage}">{{i}}</li>
      </template>
      <template v-if="nowPage > 4">
        <li @click="turnPage(1)">1</li>
        <span>...</span>
      </template>
      <template v-if="nowPage > 4 && nowPage <= totalPage - 4">
        <li
          v-for="i in 5"
          :key="nowPage - 3 + i"
          @click="turnPage(nowPage - 3 + i)"
          :class="{'cur-page': i == 3}"
        >{{nowPage - 3 + i}}</li>
      </template>
      <template v-if="nowPage <= totalPage - 4">
        <span>...</span>
        <li @click="turnPage(totalPage)">{{totalPage}}</li>
      </template>
      <template v-if="nowPage > totalPage - 4">
        <li
          v-for="i in 6"
          :key="totalPage - 6 + i"
          @click="turnPage(totalPage - 6 + i)"
          :class="{'cur-page': totalPage - 6 + i == nowPage}"
        >{{totalPage - 6 + i}}</li>
      </template>
    </template>
    <li class="next-page" @click="turnPage(-1)">下一页</li>
  </ul>
</template>

<script>
import {mapState,  mapActions} from 'vuex'
export default {
  methods: {
    turnPage(n) {
      //  -2 上一页 -1下一页 1~n
      this.getStuList(n)
    },
    ...mapActions(['getStuList'])
  },
  computed: {
    ...mapState(['totalPage', 'nowPage'])
  }
};
</script>

<style>
.turnpage {
  user-select: none;
}
</style>