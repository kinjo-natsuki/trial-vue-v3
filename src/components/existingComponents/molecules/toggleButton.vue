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

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import BaseButtonV2 from '../atoms/baseButton_v2.vue';

type Props = {
  labelText: array
}

//type EmitOption = 'click';

export default defineComponent({
  components: {
    BaseButtonV2
  },
  props: ['labelText'],
  setup(props: Props,  content: any) {
    const state = reactive({
      isClose: true
    });
    const onClick = (ev: object) => {
      state.isClose = !state.isClose
      //context.root.el.blur()
      content.emit('click'  , ev)
    }
    return{
      state,
      onClick
    };
  }
})
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
