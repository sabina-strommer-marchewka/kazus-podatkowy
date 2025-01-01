<script setup>
import { ref } from 'vue'

import Cart from './Cart.vue'
import CartModal from './CartModal.vue'
import IconButton from './IconButton.vue'
import Wrapper from './Wrapper.vue'

const links = ref([
  { name: 'O Kazusie', url: '#', current: false },
  { name: 'O Firmie', url: '#', current: true },
  { name: 'Czasopisma', url: '#', current: false },
  { name: 'Szkolenia', url: '#', current: false },
  { name: 'Baza Wiedzy', url: '#', current: false },
  { name: 'Kazus TV', url: '#', current: false },
  { name: 'Kontakt', url: '#', current: false },
])
</script>

<template>
  <nav aria-label="Główna nawigacja" class="navbar">
    <Wrapper class="navbar__wrapper">
      <img src="../assets/logo.png" alt="Strona główna Kazus" class="navbar__logo" />
      <div class="navbar__list-wrapper">
        <ul class="navbar__links" aria-label="Linki głównej nawigacji">
          <li v-for="(link, index) in links" :key="index">
            <a
              :href="link.url"
              :aria-current="link.current ? 'page' : null"
              class="navbar__links-item"
              :class="[{ 'navbar__links-item--current': link.current }]"
              >{{ link.name }}</a
            >
          </li>
        </ul>
        <ul aria-label="Przyciski akcji: wyszukaj, zaloguj się, koszyk" class="navbar__actions">
          <li>
            <IconButton
              icon-name="magnifying-glass"
              icon-color="var(--white)"
              :icon-width="19"
              :icon-height="19"
              bg-color="var(--teal)"
              :bg-width="40"
              :bg-height="40"
              :is-rounded="true"
              aria-label="Wyszukaj"
            />
          </li>
          <li>
            <IconButton
              icon-name="user"
              icon-color="var(--black)"
              :icon-width="18"
              :icon-height="18"
              bg-color="transparent"
              :bg-width="40"
              :bg-height="40"
              :is-rounded="false"
              aria-label="Zaloguj się do panelu użytkownika"
            />
          </li>
          <li>
            <Cart />
          </li>
        </ul>
      </div>
    </Wrapper>
  </nav>
  <CartModal />
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  height: 90px;
  background-color: var(--white);
  border: 1px solid var(--snow);
  position: fixed;
  top: 0;
  z-index: 3;
  width: 100%;

  &__wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__list-wrapper {
    display: flex;
    align-items: center;
    gap: 61px;
  }

  &__logo {
    width: 167px;
    height: 43px;
  }

  &__links {
    list-style-type: none;
    display: flex;
    gap: 13px;

    &-item {
      font-size: 14px;
      font-weight: 300;
      color: var(--black);
      padding: 12px;

      &:hover {
        color: var(--teal);
      }

      &--current {
        color: var(--teal);
      }
    }
  }
  
  &__actions {
    list-style-type: none;
    display: flex;
    gap: 7px;
  }
}
</style>
