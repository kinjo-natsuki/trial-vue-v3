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
    const store: object = useStore();
    const count: number = computed(() => store.state.countUp.count);
    const getCount: string = computed(() => store.getters.countUp/getCount);
    function increment2() {
      console.log('store.state', store.state)
      console.log('store.getters', store.getters)
      console.log('store.dispatch', store.dispatch)
      store.dispatch("countUp/increment2");
    }
    function increment() {
      store.commit("countUp/increment");
    }
    function decrement() {
      store.commit("countUp/decrement");
    }
    return { getCount, count, increment, decrement, increment2 };
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
