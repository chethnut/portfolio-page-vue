<template>
    <HeaderComp/>
    <h1 class="view-title">Projects</h1>
    <ProjectCard 
        v-for="project in projects" 
        :key="project.id" 
        :title="project.title" 
        :description="project.description" 
        :contributions="project.contributions"
        :technologies="project.technologies"
        />

</template>

<script>

    import HeaderComp from '../components/HeaderComp.vue';
    import ProjectCard from '@/components/ProjectCard.vue';

    export default {
        components: {
            HeaderComp,
            ProjectCard
        },
        data() {
            return {
                projects: [
                    {   id: 1, 
                        title: 'NominEat', 
                        description: 'This web application was developed as my teams final capstone project during the Tech Elevator Java Bootcamp. NominEat simplifies the process of choosing restaurants for group outings. On our platform, event organizers can explore and curate a selection of restaurants to share with friends, who can then vote for their favorites. This transforms the often stressful task of group dining decision-making into a fun engaging activity.', 
                        contributions: 'I primarily focused on the restaurant search functionality. Using Axios, I enabled the front end to fetch and display data from the Yelp! API, as well as retrieve user information from the database. Additionally, I contributed to the UI design, developed the user profile page, implemented user authentication, and worked on overall styling and aesthetics.', 
                        technologies: 'Vue.js | Axios | JavaScript | HTML | CSS | External APIs | RESTful API | Java | JDBC Template | Postman | PostgreSQL | Springboot' }, 

                    {   id: 2, 
                        title: 'Tenmo', 
                        description: 'The second group project I completed at Tech Elevator was Tenmo, a Venmo clone that simulates money transfers between users through a CLI application. ', contributions: 'I leveraged my experience in Java and OOP to develop a RESTful API that facilitated transfers. I also utilized the JDBC template to log and retrieve data with a PostgreSQL database.', 
                        technologies: 'Java | JDBC template | RESTful API | OOP | Pair Programming | CLI' },

                    {   id: 3, 
                        title: 'Vending Machine', 
                        description: 'The Vending Machine project was my first group capstone, where I collaborated with two peers to develop an application simulating vending machine transactions. We used Java and object-oriented programming principles to create modular code and implemented a command-line interface.', 
                        contributions: 'Key features include product selection, transaction processing, and inventory management.', 
                        technologies: 'Java | OOP | CLI' }
                ]
            };
        }
    };
</script>

<style>
.view-title {
    display: flex;
    justify-content: center;
}

</style>