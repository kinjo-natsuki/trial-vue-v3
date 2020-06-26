<template>
  <button
    :type="type"
    :class="[$style[buttonType], disabled && $style.disabled]"
    :disabled="this.disabled"
    role="button"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'button',
      validate(value) {
        return ['submit', 'reset', 'button'].includes(value)
      },
    },
    buttonType: {
      type: String,
      default: 'primary',
      validate(value) {
        return [
          'primary',
          'primarySmall',
          'light',
          'lightSmall',
          'cancel',
          'cancelSmall',
          'secondary',
          'secondarySimple',
        ].includes(value)
      },
    },
    disabled: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, context) {
    const onClick = (ev) => {
      if (props.disabled) {
        return
      }
      context.emit('click', ev)
    };
    return { onClick };
  }
})
</script>

<style lang="scss" module>
$green: #00beb4;
$green-dark: #00857e;
$gray-light-02: #afb5b9;
$black: #37474f;
$gray-super-light: #ebedee;
$green40: #99e5e1; // green 40%, not alpha.
$gray-dark: #879195;
$black-light: #5f6c72;
$gray-dark40: #cfd3d4;

@mixin btn-primary($color: $green) {
  display: block;
  box-sizing: border-box;
  background-color: $color;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  border-radius: 0.5rem;
}

@mixin btn-primaryOptional {
  height: 5rem;
  line-height: (5rem * 1.05);
  padding: 0 2rem;
  font-size: 1.5rem;
}

@mixin btn-hover($fontColor: #fff, $bgColor: $green-dark) {
  transition: background-color 0.6s ease, color 0.6s ease;
  &:hover,
  &:focus,
  &:active {
    color: $fontColor;
    background-color: $bgColor;
    transition: background-color 0.1s ease, color 0.1s ease;
  }
}

@mixin btn-secondaryBackground {
  background-color: #fff;
  background: linear-gradient(#fff 0%, $gray-super-light 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff',
    endColorstr='$gray-super-light',GradientType=0 );
}

@mixin btn-secondary {
  @include btn-secondaryBackground;
  padding-right: 1rem;
  padding-left: 1rem;
  border-color: $gray-light-02;
  border-style: solid;
  text-align: center;
  font-weight: bold;
  text-decoration: none;
}

@mixin btn-secondaryOptional($display: inline-block) {
  display: $display;
  @if $display == inline-block {
    line-height: 3rem;
    height: 3rem;
  }
  border-width: 1px;
  border-radius: 0.5rem;
}

@mixin btn-hoverSecondary(
  $fontColor: #fff,
  $bgColor: $gray-super-light,
  $bgColorDark: $black
) {
  transition: background-color 0.6s ease;
  &:focus,
  &:hover {
    background: none;
    background-color: $bgColor;
    transition: background-color 0.1s ease;
  }
  &:active {
    color: $fontColor;
    background: none;
    background-color: $bgColorDark;
    border-color: $bgColorDark;
    transition: background-color 0.1s ease;
  }
}

@mixin is-disabled-noAlpha {
  zoom: 1;
  cursor: default;
}

@mixin is-disabled {
  opacity: 0.4;
  zoom: 1;
  cursor: default;
}

.primary {
  &:not(.disabled) {
    @include btn-primary;
    @include btn-hover;
  }
  &.disabled {
    @include btn-primary($green40);
    @include is-disabled-noAlpha;
  }
  @include btn-primaryOptional;
}
.primarySmall {
  &:not(.disabled) {
    @include btn-primary;
    @include btn-hover;
  }
  &.disabled {
    @include btn-primary($green40);
    @include is-disabled-noAlpha;
  }
}
.light {
  &:not(.disabled) {
    @include btn-primary(#fff);
    @include btn-hover(#fff, $green-dark);
    color: $green;
  }
  &.disabled {
    @include btn-primary(#fff);
    @include is-disabled-noAlpha;
    color: $green40;
  }
  @include btn-primaryOptional;
}
.lightSmall {
  &:not(.disabled) {
    @include btn-primary(#fff);
    @include btn-hover(#fff, $green-dark);
    color: $green;
  }
  &.disabled {
    @include btn-primary(#fff);
    @include is-disabled-noAlpha;
    color: $green40;
  }
}
.cancel {
  &:not(.disabled) {
    @include btn-primary($gray-dark);
    @include btn-hover($gray-dark, $black-light);
  }
  &.disabled {
    @include btn-primary($gray-dark40);
    @include is-disabled-noAlpha;
  }
  @include btn-primaryOptional;
}
.cancelSmall {
  &:not(.disabled) {
    @include btn-primary($gray-dark);
    @include btn-hover($gray-dark, $black-light);
  }
  &.disabled {
    @include btn-primary($gray-dark40);
    @include is-disabled-noAlpha;
  }
}
.secondary {
  &:not(.disabled) {
    @include btn-secondary;
    @include btn-hoverSecondary;
  }
  &.disabled {
    @include btn-secondary;
    @include is-disabled;
  }
  @include btn-secondaryOptional;
}
.secondarySimple {
  &:not(.disabled) {
    @include btn-secondary;
    @include btn-hoverSecondary;
  }
  &.disabled {
    @include btn-secondary;
    @include is-disabled;
  }
}
</style>
