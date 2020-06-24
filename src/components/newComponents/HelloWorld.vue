<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
