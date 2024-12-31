<script setup>
import { ref } from 'vue'
import IconButton from './IconButton.vue'
const numbers = ref([
  { value: 1, url: '#', current: false },
  { value: 2, url: '#', current: false },
  { value: 3, url: '#', current: true },
  { value: 4, url: '#', current: false },
  { value: 5, url: '#', current: false },
])
</script>

<template>
  <nav aria-label="pagination" class="pagination">
    <IconButton
      icon-name="arrow-left"
      icon-color="var(--darkGrey)"
      :icon-width="5"
      :icon-height="9"
      bg-color="transparent"
      :bg-width="33"
      :bg-height="33"
      :is-rounded="false"
      aria-label="Przejdź do poprzedniej strony z produktami"
    />
    <ul class="pagination__links">
      <li v-for="(number, index) in numbers" :key="index">
        <a
          :href="number.url"
          :aria-current="number.current ? 'page' : null"
          class="pagination__links-item"
          :class="[{ 'pagination__links-item--current': number.current }]"
          >{{ number.value }}</a
        >
      </li>
    </ul>
    <IconButton
      icon-name="arrow-right"
      icon-color="var(--darkGrey)"
      :icon-width="5"
      :icon-height="9"
      bg-color="transparent"
      :bg-width="33"
      :bg-height="33"
      :is-rounded="false"
      aria-label="Przejdź do następnej strony z produktami"
    />
  </nav>
</template>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  padding-bottom: 74px;
  &__links {
    list-style-type: none;
    display: flex;
    gap: 10px;
    &-item {
      width: 33px;
      height: 33px;
      background-color: transparent;
      color: var(--darkGrey);
      font-size: 12px;
      font-weight: 300;
      transition: all 0.2s;
      display: flex;
      justify-content: center;
      align-items: center;
      &--current {
        background-color: var(--teal);
        color: var(--white);
        font-size: 14px;
        font-weight: 700;
      }
    }
  }
}
.icon-button {
  display: flex;
  justify-content: center;
  align-items: center;
  &--rounded {
    border-radius: 50%;
  }
}
</style>
