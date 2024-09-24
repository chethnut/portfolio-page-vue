<template>
  <HeaderComp/>
  <div class="img-container">
    <img class="profile-picture" src="../assets/Profile-Picture-2.jpg">
  </div>
    
  <div class="about-container">
    
    <h2 class="characteristics">Software Developer | Luthier | Woodworker | Violinist</h2>
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
.profile-picture {
  height: 300px;
  
}
.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
