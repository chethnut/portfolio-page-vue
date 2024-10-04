<template>
  <HeaderComp/>
  
    
  <div class="about-container">
    <div class="pic/char-container">
      <div class="img-container">
        <img class="profile-picture" src="../assets/Profile-Picture-2.jpg">
      </div>
      <h3 class="characteristics">Software Developer | Luthier | Woodworker | Violinist</h3>
    </div>
    <div class="blurb">

      <p>All my life I've been captivated by the magic of making.</p>

      <p>Early on I developed a passion for making music. I started my journey at the young age of four with the violin and still play it to this day. As I matured, my fascination with craftsmanship led me to pursue certification in lutherie, diving into the intricate world of instrument repair and violin making. Although I thoroughly enjoyed that line of work, it unfortunately could not provide the life my wife and I were hoping for. After coming to that realization, I thought long and hard about what could fulfill my desire for creation while also being a lucrative career path. That's what brought me to software development!</p>

      <p>Through programming, I've found a complementary balance between my creative instincts and logical reasoning. What draws me most to this field is its limitless skill ceiling and vast array of approaches it offers to solve any given problem. Here, I can keep the magic of making alive as I satiate my thirst for continuous learning and immerse myself in new concepts and tools every day.</p>

      <p>In my free time, I take part in indoor free climbing, casual video games with friends, and giving my corgi all the love and attention he deserves! On weekends, you can find me in my home workshop working on various small woodworking projects while my wife bakes all manner of pastries upstairs. We frequently take our dogs for hikes, visit family and friends, and go to our favorite local restaurants on the weekends.</p>

      <p>I deeply value the journey that brought me to where I am today. Every experience and decision, from my early musical ventures to my transition to the tech world, holds major significance in my life story. Just like any other pivotal life choice, I'm eagerly anticipating the next chapters that await me. I believe that I can bring a truly distinctive perspective to any company by leveraging my unique background and approach to obstacles.</p>

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
  align-items: center;
  flex-direction: row;
}
.profile-picture {
  height: 300px;
  
}
.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.blurb {
    border: 1px solid black;
    padding: 16px;
    margin: 16px;
    border-radius: 8px;
}
.characteristics {
  display: flex;
  text-align: center;
}
</style>
