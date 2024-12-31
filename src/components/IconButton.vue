<script setup>
import BaseIcon from './BaseIcon.vue'
const props = defineProps({
  iconName: String,
  iconColor: String,
  iconWidth: Number,
  iconHeight: Number,
  bgColor: String,
  bgWidth: Number,
  bgHeight: Number,
  isRounded: Boolean,
  ariaLabel: String,
})
</script>

<template>
  <button
    :aria-label="ariaLabel"
    class="icon-button"
    :class="[{ 'icon-button--rounded': isRounded }]"
    :style="{
      'background-color': bgColor,
      width: `${bgWidth}px`,
      height: `${bgHeight}px`,
    }"
  >
    <BaseIcon :filename="iconName" :color="iconColor" :width="iconWidth" :height="iconHeight" />
  </button>
</template>

<style lang="scss" scoped>
.icon-button {
  display: flex;
  justify-content: center;
  align-items: center;
  &--rounded {
    border-radius: 50%;
  }
}
</style>
