<template>
  <div class="student-list content" id="student-list">
    <list-search></list-search>
    <list-table></list-table>
    <turn-page></turn-page>
   
    <transition>
       <list-modal v-if="showModal"></list-modal>
    </transition>
  </div>
</template>
<style >
   /* .v-enter, .v-enter-to, .v-leave, .v-leave-to,
   .v-enter-active, .v-leave-active */
   .v-enter {
     top: -100%;
     height: 0;
   }
   .v-enter-to {
     top: 0;
     height: 100%;
   }
   .v-leave {
      top: 0;
     height: 100%;
   }
   .v-leave-to {
     top: -100%;
     height: 0;
   }
   .v-enter-active, .v-leave-active {
     transition: all .5s;
   }
</style>

<script>
import listSearch from '../components/stuList/listSearch'
import listModal from '../components/stuList/listModal'
import turnPage from '../components/stuList/turnPage'
import listTable from '../components/stuList/listTable'
import { mapState } from 'vuex'
export default {
    components: {
      listSearch,
      listModal,
      listTable,
      turnPage
    },
    computed: {
      ...mapState(['showModal'])
    }
   
};
</script>

<style>
</style>