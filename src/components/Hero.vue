<script setup>
import Wrapper from './Wrapper.vue'
</script>

<template>
  <div class="hero">
    <Wrapper>
      <div class="hero__content">
        <div class="hero__text">
          <h1 class="hero__heading">Czasopisma</h1>
          <p class="hero__description">
            Mamy przyjemność oddać w Państwa ręce kolejny numer „Kazusu Podatkowego”, który tym
            razem poświęcony jest w dużej części zmianom w podatkach w roku 2019.
          </p>
          <p class="hero__subdescription">
            Omówiliśmy najważniejsze zagadnienia takie jak zmiany w zakresie rozliczania kosztów
            używania samochodów osobowych, wprowadzenie „exit tax” czy zmiany dotyczące poboru
            podatku u źródła na gruncie podatków dochodowych, poświęcając im odrębne artykuły.
          </p>
        </div>
        <div>
          <img src="../assets/books.png" alt="" class="hero__image" />
        </div>
      </div>
    </Wrapper>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  background-color: var(--teal);
  color: var(--white);
  font-size: 14px;
  height: 360px;
  padding-top: 63px;
  margin-top: 90px;
  background-image: url('../assets/letter.png');
  background-position: left -75px;
  background-repeat: no-repeat;
  background-size: 448px 471px;
  position: relative;
  margin-bottom: 124px;

  &__content {
    display: flex;
    justify-content: space-between;
  }

  &__text {
    max-width: 562px;
  }

  &__heading {
    font-size: 54px;
    font-size: 700;
    padding-bottom: 32px;
  }

  &__description {
    font-weight: 700;
    line-height: 24px;
    padding-bottom: 24px;
  }

  &__subdescription {
    font-weight: 300;
    color: var(--snow);
    line-height: 24px;
  }
  
  &__image {
    margin-top: -48px;
    margin-right: 11px;
  }
}
</style>
