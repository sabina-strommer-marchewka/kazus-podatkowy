<script setup>
const props = defineProps({
  filename: String,
  color: String,
  width: Number,
  height: Number,
})
</script>

<template>
  <span
    class="icon"
    :style="{
      '-webkit-mask-image': `url('./src/assets/icons/${filename}.svg')`,
      'background-color': color,
      width: `${width}px`,
      height: `${height}px`,
    }"
  />
</template>

<style lang="scss" scoped>
.icon {
  mask-size: contain;
  mask-position: center;
  mask-repeat: no-repeat;
  display: block;
}
</style>
