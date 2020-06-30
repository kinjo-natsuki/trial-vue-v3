import router from './vue-router'

router.beforeEach((to, _, next) => {
  if(to.name === 'Home') {
    console.log('home')
  }
  next()
})

export default router