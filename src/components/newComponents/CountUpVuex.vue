<template>
  <div>
    <span>count: {{ count }}</span>
    <button @click="increment()">count up</button>
    <button @click="decrement()">count down</button>
    <button @click="increment2()">count up2</button>
    <span>{{ getCount }}</span>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex';
import { computed } from 'vue';

export default ({
  setup() {
    const store = useStore();
    const count = computed(() => store.state.count);
    const getCount = computed(() => store.getters.getCount);
    function increment2() {
      store.dispatch("increment2");
    }
    function increment() {
      store.commit("increment");
    }
    function decrement() {
      store.commit("decrement");
    }
    return { getCount, count, increment, decrement, increment2 };
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
