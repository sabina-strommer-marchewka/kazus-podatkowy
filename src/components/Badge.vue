<script setup>
const props = defineProps({
  content: [String, Number],
  bgColor: String,
  color: String,
})
</script>

<template>
  <span
    class="badge"
    :style="{
      'background-color': bgColor,
      color: color,
    }"
  >
    <span>{{ content }}</span>
  </span>
</template>

<style lang="scss" scoped>
.badge {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 13px;
  height: 13px;
  font-size: 10px;
}
</style>
