<template>
  <HeaderComp />

  <h3 class="characteristics">Software Developer | Luthier | Violinist</h3>
  <div class="about-container">
    <div class="pic/char-container">
      <div class="img-container">
        <img class="profile-picture" src="../assets/Profile-Picture-2.jpg">
      </div>
      <div class="links">
        <a href="https://www.linkedin.com/in/sethchesky" target="_blank" rel="noopener noreferrer">· LinkedIn</a>
        <a href="https://github.com/chethnut" target="_blank" rel="noopener noreferrer">· GitHub</a>
        <a href="/src/assets/Resume.pdf" target="_blank" rel="noopener noreferrer">· Resume</a>
      </div>
    </div>
    <div class="info-container">
      <div class="blurb">
        <h3>Experience</h3>

        <h4>Software Development Bootcamp</h4>
        <p class="school-title-field">Tech Elevator</p>
        <p>Mar 2024 - Jun 2024</p>
        <p class="border-element">Spent three months diving into the intricacies of back and front end development and completed three capstones focusing on object-oriented programming, RESTful API's, relational databases, and web development frameworks</p>

        <h4>All Strings Attached</h4>
        <p class="school-title-field">Luthier</p>
        <p>Dec 2021 - Oct 2024</p>
        <p>Completed over 2000 repairs on violins and violas while coordinating with team members to handle walk-in customer requests and meet weekly shop quotas</p>

      </div>
      <div class="blurb">
        <h3>Education</h3>

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
      <div class="blurb">
        <h3>Skills & Technologies</h3>
        <h4>Full Stack Developer</h4>
        <p class="school-title-field">Java · C# · JavaScript · HTML · CSS · Vue.js · SQL · Git · JDBC Template · RESTful API · PostgreSQL</p>
      </div>
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
  padding-top: 1%;
}

.info-container {
  display: flex;
  flex-direction: column;
}

.profile-picture {
  height: 280px;
  border: 2px solid #222222;
  border-radius: 8px;
  margin-bottom: 6px;
}

.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
}

.blurb {
  border: 2px solid #222222;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
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

.school-title-field {
  font-weight: bold;
}

.border-element {
  border-bottom: 2px solid #ffe66d;
  padding-bottom: 20px;
}

.characteristics {
  font-size: 26px;
  display: flex;
  justify-content: center;
  padding-top: 2%;
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

</style>
