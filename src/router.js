import Vue from 'vue'
import Router from 'vue-router'
import addStudent from './views/addStu'
import stuList from './views/stuList'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/addStudent',
      component: addStudent,
      name: 'addStu'
    },
    {
      path: '/stuList',
      component: stuList,
      name: 'stuList'
    },
    {
      path: '*',
      redirect: '/stuList'
    }
  ],
  linkActiveClass: 'active'
})
