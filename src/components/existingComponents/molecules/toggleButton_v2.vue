<template>
  <BaseButton
    ref="toggleButton"
    buttonType="secondarySimple"
    :disabled="false"
    :class="$style.button"
    @click.stop="onClick"
  >
    <template v-if="this.isClose">
      <span>toggle button 2</span>
    </template>
    <template v-else>
      <span>open</span>
    </template>
  </BaseButton>
</template>

<script>
import BaseButton from '../atoms/baseButton.vue'

export default {
  components: {
    BaseButton,
  },
  props: {
    labelText: {
      type: Array,
      default: () => ['label A', 'label B'],
    },
  },
  data() {
    return {
      isClose: true,
    }
  },
  methods: {
    onClick(ev) {
      this.isClose = !this.isClose
      this.$el.blur()
      this.$emit('click', ev)
    },
  },
}
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
