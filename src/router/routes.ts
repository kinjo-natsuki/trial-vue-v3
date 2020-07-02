import New from '../components/newComponents/pages/new.vue'
import Error from '../components/newComponents/pages/error.vue'
import ToggleButton from '../components/existingComponents/molecules/toggleButton.vue'
import ToggleButtonV2 from '../components/existingComponents/molecules/toggleButton_v2.vue'


export const routes = [
  {
    path: '/',
    name: 'New',
    component: New
  },
  {
    path: '/togglebutton',
    name: 'ToggleButton',
    component: ToggleButton
  },
  {
    path: '/togglebuttonv2',
    name: 'ToggleButtonV2',
    component: ToggleButtonV2
  },
  {
    path: '/:catchAll(.*)',
    name: 'Error',
    component: Error
  }
]