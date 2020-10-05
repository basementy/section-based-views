import Vue from 'vue'
import Router from 'vue-router'

import Home from '~/pages/Home/index.vue'
import HomeTasks from '~/pages/Home/sections/SectionTasks/index.vue'
import HomeReminders from '~/pages/Home/sections/SectionReminders/index.vue'
import About from '~/pages/About/index.vue'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '*',
        redirect: '/home/tasks',
      },
      {
        name: 'home',
        path: '/home',
        redirect: '/home/tasks',
        component: Home,
        children: [
          {
            name: 'tasks',
            path: 'tasks',
            component: HomeTasks,
          },
          {
            name: 'reminders',
            path: 'reminders',
            component: HomeReminders,
          },
        ],
      },
      {
        path: '/about',
        component: About,
      },
    ],
  })
}
