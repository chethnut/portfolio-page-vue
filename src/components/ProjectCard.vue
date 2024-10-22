<template>
    <div class="project-card-container">
    <img class="project-img" :src="img" alt="Project Image"/>
        <div class="project-card">
            <h3>{{ title }}</h3>
            <h4>{{ technologies }}</h4>
            <p class="demo-title" v-if="demoLink">
                Project Demo:
                <a class="demo-link" :href="demoLink" target="_blank" rel="noopener noreferrer">{{ demoLink }}</a>
            </p>
            <p>{{ description }}</p>
            <p>{{ contributions }}</p>   
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String
        },
        description: {
            type: String
        },
        contributions: {
            type: String
        },
        technologies: {
            type: String
        },
        img: {
            type: String
        },
        demoLink: {
            type: String
        }
    }
}
</script>

<style>
.project-card {
    padding: 16px;
    margin: 16px;
    border-radius: 8px;
}
.project-img {
    border: 2px solid #f7fff7;
    border-radius: 8px;
    height: 560px;
    margin-right: 20px;
}
.project-card-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 5%;
}
h4 {
    color: #343434;
}
.demo-link {
    font-size: 22px;
    color: #2f3061;
    font-weight: 400;
    text-decoration: underline;
}

</style>

