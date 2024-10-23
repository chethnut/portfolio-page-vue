<template>
  <HeaderComp />
  <div class="about-container">
    <div class="img-container">
      <img class="profile-picture" src="../assets/Profile-Picture-2.jpg">
      <div class="characteristics-container">
        <h3 class="characteristics">Full Stack Software Developer</h3>
        <!-- <h3 class="characteristics">Full-Stack Engineer</h3> -->
        <!-- <h3 class="characteristics">Mobile Developer</h3> -->
      </div>
    </div>
  </div>
  <div class="info-container">
    <div class="blurb">

      <h3 class="section-title">Skills & Technologies</h3>

      <h4 class="position">Full Stack Developer</h4>
      <p class="skills">Java · C# · JavaScript · HTML · CSS · Vue.js · SQL · Git · JDBC Template · RESTful
        API · PostgreSQL</p>
    </div>
  </div>
  <FooterComp/>
</template>

<script>
import HeaderComp from '../components/HeaderComp.vue';
import FooterComp from '../components/FooterComp.vue';

export default {
  components: {
    HeaderComp,
    FooterComp
  }
};
</script>

<style>
.about-container {
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: row;
  /* padding-right: 20%; */
  padding-left: 8.25%;
  padding-top: 5%;
  padding-bottom: 3.75%;
  background-color: #eef7ee;
}

.characteristics {
  font-size: 50px;
  margin-right: 20%;
  margin: 0px;
  padding-bottom: 10px;
  
}

.characteristics-container {
  display: flex;
  flex-direction: column;
  padding-left: 5%;
  flex-grow: 1;
  white-space: nowrap;
}

.info-container {
  display: flex;
  flex-direction: column;
  padding-right: 20%;
  padding-left: 20%;
  /* padding-top: 1%; */
}

.profile-picture {
  height: 350px;
  border-radius: 8px;
  margin-bottom: 6px;
}

.img-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 16px;
  /* padding-left: 10%; */
}

.blurb {
  margin-top: 30px;
  margin-bottom: 30px;
}

.school-title-field {
  font-weight: bold;
}

.border-element {
  border-bottom: 2px solid #ffe66d;
  padding-bottom: 20px;
}

.links {
  display: flex;
  flex-direction: column;
  font-weight: bold;
  align-items: flex-start;
  padding-left: 30%;
}

a {
  padding-bottom: 10px;
}

.section-title{
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
}

.position {
  text-align: center;
}

.skills {
  color: #343434;
  font-weight: 0;
}
</style>
