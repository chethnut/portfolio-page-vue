<template>
    <HeaderComp/>
    <h1>Projects View</h1>
    <h3>component goes here</h3>
    <ProjectCard 
        v-for="project in projects" 
        :key="project.id" 
        :title="project.title" 
        :description="project.description" 
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
                    {id: 1, title: 'NominEat', description: 'Final Capstone'},
                    {id: 2, title: 'Tenmo', description: 'Venmo Clone'},
                    {id: 3, title: 'Vending Machine', description: 'Vending Machine App'}
                ]
            };
        }
    };
</script>

<style>
.h1 {
    text-align: center;
}
</style>