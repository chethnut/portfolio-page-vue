<template>
    <div class="project-card">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
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
        }
    }
}
</script>

<style>
.project-card {
    border: 1px solid black;
    padding: 16px;
    margin: 16px;
    border-radius: 8px;
}
</style>

