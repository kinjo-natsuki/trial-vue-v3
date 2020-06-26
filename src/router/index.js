import { createRouter, createWebHistory } from 'vue-router';
// import New from '../components/newComponents/new.vue'
// import ToggleButton from '../components/existingComponents/molecules/toggleButton.vue'
// import ToggleButtonV2 from '../components/existingComponents/molecules/toggleButton_v2.vue'
// import HelloWorld from '../components/newComponents/HelloWorld.vue'
//import HelloWorld2 from '../views/HelloWorld_v2.vue'
const routes = [
  // {
  //   path: '/helloworld2',
  //   name: 'HelloWorld2',
  //   component: HelloWorld2
  // }
// {
//   path: '/new',
//   name: 'New',
//   component: New
// },
// {
//   path: '/togglebutton',
//   name: 'ToggleButton',
//   component: ToggleButton
// },
// {
//   path: '/togglebuttonv2',
//   name: 'ToggleButtonV2',
//   component: ToggleButtonV2
// },
// {
//   path: '/helloworld',
//   name: 'HelloWorld',
//   component: HelloWorld
// },
// {
//   path: '/about',
//   name: 'About',
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
// }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
