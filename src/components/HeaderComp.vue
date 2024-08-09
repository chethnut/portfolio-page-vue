<template>
    <div class="container">
        <header class="header">
            <h2 class="title">Seth Chesky Portfolio</h2>
            <h2 class="empty-element"></h2>
            <h2 class="about-me">About Me</h2>
            <h2 class="my-projects">My Projects</h2>
        </header>
    </div>
</template>

<script>
</script>

<style>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

    }
    .header {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        padding-left: 20px;
        
    }
    .about-me, .my-projects {
        padding-left: 20px;
        padding-right: 20px;
    }
</style>