<template>
  <div>
    <span>count: {{ state.count }}</span>
    <button @click="increment">count up</button>
    <button @click="decrement">count down</button>
    <span>{{ combinedText }}</span>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, computed } from 'vue';

export default defineComponent({
  setup() {
    const hello = {
      msg: ref('hello'),
      msg2: ref('hello2')
    }
    const state = reactive({
      count: 0
    });
    const increment = () => {
      state.count++;
      hello.msg = 'increment';
      hello.msg2 = 'aaaaa';
    };
    const decrement = () => {
      state.count--;
    }
    const combinedText = computed(() => {
      return hello.msg.value + hello.msg2.value
    })
    return {
      combinedText,
      hello,
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
