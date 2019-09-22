import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NotFound from '@/components/error-pages/NotFound'
import StudentList from '@/components/student/StudentList'
import StudentDetails from '@/components/student/StudentDetails'
import StudentCreate from '@/components/student/StudentCreate'
import StudentUpdate from '@/components/student/StudentUpdate'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/student/list',
      name: 'StudentList',
      component: StudentList
    },
    {
      path: '/student/create',
      name: 'StudentCreate',
      component: StudentCreate
    },
    {
      path: '/student/update/:id',
      name: 'StudentUpdate',
      component: StudentUpdate
    },
    {
      path: '/student/:id',
      name: 'StudentDetails',
      component: StudentDetails
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
