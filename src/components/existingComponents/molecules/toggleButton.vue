<template>
  <BaseButtonV2
    ref="toggleButton"
    buttonType="secondarySimple"
    :disabled="false"
    :class="$style.button"
    @click="onClick"
  >
    <template v-if="state.isClose">
      <span>toggle button</span>
    </template>
    <template v-else>
      <span>open</span>
    </template>
  </BaseButtonV2>
</template>

<script>
import { defineComponent, reactive } from 'vue';
//import BaseButton from '../atoms/baseButton.vue';
import BaseButtonV2 from '../atoms/baseButton_v2.vue';

export default defineComponent({
  components: {
    // BaseButton,
    BaseButtonV2
  },
  props: {
    labelText: {
      type: Array,
      default: () => ['label A', 'label B'],
    },
  },
  setup(props, context) {
    const state = reactive({
      isClose: true
    });
    const onClick = (ev) => {
      state.isClose = !state.isClose
      //context.el.blur()
      context.emit('click', ev)
    }
    return{
      state,
      onClick
    };
  }
})

// export default {
//   components: {
//     BaseButton,
//   },
//   props: {
//     labelText: {
//       type: Array,
//       default: () => ['label A', 'label B'],
//     },
//   },
//   data() {
//     return {
//       isClose: true,
//     }
//   },
//   methods: {
//     onClick() {
//       //this.isClose = !this.isClose
//       ///this.$el.blur()
//      // this.$emit('click', ev)
//     },
//   },
// }
</script>

<style lang="scss" module>
@mixin btn-secondaryOptional($display: inline-block) {
  display: $display;
  @if $display == inline-block {
    line-height: 3rem;
    height: 3rem;
  }
  border-width: 1px;
  border-radius: 0.5rem;
}

.button {
  @include btn-secondaryOptional(inline-flex);
  align-items: center;
  justify-content: center;
  height: 3rem;
  user-select: none;
}
</style>
