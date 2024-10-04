<template>
  <HeaderComp/>
  
    
  <div class="about-container">
    <div class="pic/char-container">
      <div class="img-container">
        <img class="profile-picture" src="../assets/Profile-Picture-2.jpg">
      </div>
      <div class="characteristics-container">
        <p>Software Developer</p>
        <p>Luthier</p>
        <p>Woodworker</p>
        <p>Violinist</p>
      </div>
    </div>
    <div class="blurb">
      <h3>Professional Experience</h3>
      <h4>Java Development Bootcamp Student</h4>
      <p>Tech Elevator</p>
      <p>Mar 2024 - Jun 2024</p>
      

    </div>

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
.about-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  padding-right: 20%;
  padding-left: 20%;
  padding-top: 5%;
}
.profile-picture {
  height: 280px;
  border: 1px solid black;
  border-radius: 8px;
  margin-bottom: 6px;
}
.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.blurb {
    border: 1px solid black;
    padding-left: 16px;
    padding-right: 16px;
    
    margin-left: 16px;
    border-radius: 8px;
}
.characteristics-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.characteristics-container p {
  margin: 6px;
  font-weight: bold;
}
</style>
