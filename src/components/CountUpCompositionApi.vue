<template>
  <div>
    <span>count: {{ state.count }}</span>
    <button @click="increment">count up</button>
    <button @click="decrement">count down</button>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      count: 0
    });
    const increment = () => {
      state.count++;
    };
    const decrement = () => {
      state.count--;
    }
    return {
      state,
      increment,
      decrement
   };
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
