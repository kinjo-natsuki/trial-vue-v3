<template>
  <div>
    <span>count: {{ count }}</span>
    <button @click="increment()">count up</button>
    <button @click="decrement()">count down</button>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default ({
  setup() {
    const store = useStore();
    const count = computed(() => store.state.count);
    function increment() {
      store.commit("increment");
    }
    function decrement() {
      store.commit("decrement");
    }
    return { count, increment, decrement};
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
