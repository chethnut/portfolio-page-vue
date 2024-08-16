

<template>
  <HeaderComp/>
  <header>
    <h1>main view</h1>
  </header>
  <RouterView/>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'

export default {
  components: {
    HeaderComp
  }
}
</script>

<style scoped>
.h1 {
  text-decoration: brown;
}
</style>
