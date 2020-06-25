<template>
  <div id="app">
    <div id="nav">
      <New />
      <ToggleButton />
      <ToggleButtonV2 />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import New from './components/newComponents/new.vue'
import ToggleButton from './components/existingComponents/molecules/toggleButton.vue'
import ToggleButtonV2 from './components/existingComponents/molecules/toggleButton_v2.vue'

export default defineComponent({
  name: 'Home',
  components: {
    New,
    ToggleButton,
    ToggleButtonV2
  }
})
</script>

<style>
</style>
