<template>
  <div id="app">
    <div id="nav">
      <!-- <New /> -->
      <ToggleButton />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
//import New from './components/newComponents/new.vue'
import ToggleButton from './components/existingComponents/molecules/toggleButton.vue'

export default defineComponent({
  name: 'Home',
  components: {
    //New,
    ToggleButton
  }
})
</script>

<style>
</style>
