<template>
    <div class="project-card">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
        <p>{{ contributions }}</p>
        <p>{{ technologies }}</p>
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
        }
    }
}
</script>

<style>
.project-card {
    border: 2px solid #343434;
    padding: 16px;
    margin: 16px;
    border-radius: 8px;
}
</style>

