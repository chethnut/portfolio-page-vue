<template>
  <HeaderComp/>
  <div class="about-container">
    <h1 class="about-me">About Me</h1>
    <h2 class="characteristics">Junior Software Developer | Luthier | Woodworker | Violinist</h2>
    <p>

    </p>
  </div>
</template>

<script>
import HeaderComp from '../components/HeaderComp.vue';

export default {
  components: {
    HeaderComp
  }
};
</script>

<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
.about-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
