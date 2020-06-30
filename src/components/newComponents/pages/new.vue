<template>
  <div id="app">
    <div id="nav">
      <HelloWorld msg="Hello World!" />
      <CountUpCompositionApi />
      <CountUpVuex />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import HelloWorld from '../HelloWorld.vue'
import CountUpCompositionApi  from '../CountUpCompositionApi.vue'
import CountUpVuex  from '../CountUpVuex.vue'

export default defineComponent({
  name: 'New',
  components: {
    HelloWorld,
    CountUpCompositionApi,
    CountUpVuex
  }
})
</script>

<style>
</style>
