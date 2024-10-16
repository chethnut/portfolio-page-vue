<template>
  <HeaderComp />
  <div class="about-container">
    <div class="img-container">
      <img class="profile-picture" src="../assets/Profile-Picture-2.jpg">
      <div class="characteristics-container">
        <h3 class="characteristics">Software Developer</h3>
        <h3 class="characteristics">Luthier</h3>
        <h3 class="characteristics">Violinist</h3>
      </div>
    </div>
  </div>
  <div class="info-container">

    <div class="blurb">

      <h3 class="section-title">Skills & Technologies</h3>

      <h4>Full Stack Developer</h4>
      <p class="school-title-field">Java · C# · JavaScript · HTML · CSS · Vue.js · SQL · Git · JDBC Template · RESTful
        API · PostgreSQL</p>
    </div>

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
      <p>Spent 3 semesters working towards a Violin Performance Degree (Incomplete)</p>
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
  padding-left: 9.5%;
  padding-top: 5%;
  padding-bottom: 5%;
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
  padding-left: 10%;
  flex-grow: 1;
  white-space: nowrap;
}

.info-container {
  display: flex;
  flex-direction: column;
  padding-right: 20%;
  padding-left: 20%;
  padding-top: 1%;
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
</style>
