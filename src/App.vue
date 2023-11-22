<script setup>
// eslint-disable-next-line no-unused-vars
import { store } from '@/main';

// function Calculate(){
//   store.commit('increment')
//   return store.state.count
// }

</script>

<template>
  <div class="">
    <RouterView />
    <!-- <h2>{{ store.state.count}}</h2>
    <button @click="Calculate">count</button> -->
  </div>

</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
