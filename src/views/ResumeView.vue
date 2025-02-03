<template>
  <HeaderComp />
  <div class="title-wrapper">
    <h3 class="view-title">Resumé</h3>
  </div>
  <div class="info-container">

    <div class="blurb">

      <h3 class="section-title">Experience</h3>

      <h4>Software Development Bootcamp</h4>
      <p class="school-title-field">Tech Elevator</p>
      <p>Mar 2024 - Jun 2024</p>
      <p class="border-element">Spent three months diving into the intricacies of back and front end development and
        completed three capstones focusing on object-oriented programming, RESTful API's, relational databases, and web
        development frameworks</p>

      <h4>All Strings Attached</h4>
      <p class="school-title-field">Luthier</p>
      <p>Dec 2021 - Oct 2024</p>
      <p>Completed over 2000 repairs on violins and violas while coordinating with team members to handle walk-in
        customer requests and meet weekly shop quotas</p>

    </div>
    <div class="blurb">

      <h3 class="section-title">Education</h3>

      <h4>Tech Elevator</h4>
      <p class="school-title-field">Software Development</p>
      <p>Mar 2024 - Jun 2024</p>
      <p class="border-element">Graduated with a 2.9 GPA out of 3.0</p>

      <h4>Minnesota State College Southeast</h4>
      <p class="school-title-field">Violin Repair Program</p>
      <p>Sept 2020 - May 2022</p>
      <p class="border-element">Graduated and obtained a diploma in Violin Repair</p>

      <h4>Maranatha University</h4>
      <p class="school-title-field">Violin Performance</p>
      <p>Sept 2018 - Dec 2019</p>
    </div>
    <div class="blurb">

      <h3 class="section-title">Skills & Technologies</h3>

      <p class="skills">Java · C# · JavaScript · HTML · CSS · Vue.js · SQL · Git · JDBC Template · RESTful
        API · PostgreSQL</p>
    </div>
  </div>
  <FooterComp />
</template>

<script>
import HeaderComp from '../components/HeaderComp.vue';
import FooterComp from '../components/FooterComp.vue';

export default {
  components: {
    HeaderComp,
    FooterComp
  }
}
</script>

<style scoped>
.school-title-field {
  color: #6ca6c1;
}

.skills {
  font-weight: 0;
  text-align: center;
}

.view-title {
  font-size: 50px;
  padding-top: 1%;
  padding-bottom: 10px;
  border-bottom: 2px solid #343434;
  max-width: 300px;
  padding-left: 20px;
  padding-right: 20px;
  display: inline-block;
  margin-bottom: 2%;

}

.title-wrapper {
  text-align: center;
}

.info-container {
  display: flex;
  flex-direction: column;
  padding-right: 20%;
  padding-left: 20%;
  /* padding-top: 1%; */
}

.border-element {
  border-bottom: 2px solid #ffe66d;
  padding-bottom: 20px;
}

.blurb {
  margin-top: 19px;
  margin-bottom: 40px;
}

.section-title {
  display: flex;
  justify-content: center;
  margin-top: 26px;
  margin-bottom: 38px;
}
</style>