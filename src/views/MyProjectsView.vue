<template>
    <HeaderComp />
    <div class="title-wrapper">
        <h3 class="view-title">Projects</h3>
    </div>
    <div class="projectCard-container">
        <ProjectCard v-for="project in projects" 
            :key="project.id" 
            :title="project.title"
            :description="project.description" 
            :contributions="project.contributions"
            :technologies="project.technologies" 
            :img="project.img"
            :demoLink="project.demoLink"
            />
    </div>
    <FooterComp/>
</template>

<script>

import HeaderComp from '../components/HeaderComp.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import NominEatImg from '../assets/NominEat.png';
import TenmoImg from '../assets/Tenmo.png';
import VendingMachineImg from '../assets/Vending-Machine.png';
import FooterComp from '../components/FooterComp.vue';

export default {
    components: {
        HeaderComp,
        ProjectCard,
        FooterComp
    },
    data() {
        return {
            projects: [
                {
                    id: 1,
                    title: 'NominEat',
                    description: 'This web application was developed as my teams final capstone project during the Tech Elevator Java Bootcamp. NominEat simplifies the process of choosing restaurants for group outings. On our platform, event organizers can explore and curate a selection of restaurants to share with friends, who can then vote for their favorites. This transforms the often stressful task of group dining decision-making into a fun engaging activity.',
                    contributions: 'I primarily focused on the restaurant search functionality. Using Axios, I enabled the front end to fetch and display data from the Yelp! API, as well as retrieve user information from the database. Additionally, I contributed to the UI design, developed the user profile page, implemented user authentication, and worked on overall styling and aesthetics.',
                    technologies: 'Vue.js · Axios · JavaScript · HTML · CSS · RESTful API · Java · JDBC Template · Postman · PostgreSQL · Springboot',
                    img: NominEatImg,
                    demoLink: 'https://youtu.be/udWPV8x38rE'
                },

                {
                    id: 2,
                    title: 'Tenmo',
                    description: 'The second group project I completed at Tech Elevator was Tenmo, a Venmo clone that simulates money transfers between users through a CLI application. ', contributions: 'I leveraged my experience in Java and Object Oriented Programming to develop a RESTful API that facilitated transfers. I also utilized JDBC Template to log and retrieve data with a PostgreSQL relational database.',
                    technologies: 'Java · JDBC Template · RESTful API · OOP · Pair Programming · CLI',
                    img: TenmoImg,
                    demoLink: null
                },

                {
                    id: 3,
                    title: 'Vending Machine',
                    description: 'The Vending Machine project was my first group capstone, where I collaborated with two peers to develop an application simulating vending machine transactions. We used Java and object-oriented programming principles to create modular code and implemented a command-line interface.',
                    contributions: 'Key features include product selection, transaction processing, and inventory management.',
                    technologies: 'Java · OOP · CLI',
                    img: VendingMachineImg,
                    demoLink: null
                }
            ]
        };
    }
};
</script>

<style>
.title-wrapper {
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
    
}
.projectCard-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-right: 5%;
    padding-left: 5%;
    padding-top: 2%;
}

</style>