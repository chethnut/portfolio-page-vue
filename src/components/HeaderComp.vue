<template>
    <div class="header-container">
        <div class="container1">
            <header class="header">
                <h2 class="title">Seth Chesky Portfolio</h2>
                
            </header>
        </div>

        <div class="container2">
            <header class="header">  
                <router-link class="my-projects" v-bind:to="{ name: 'projects'}">My Projects</router-link>           
                <router-link class="about-me" v-bind:to="{ name: 'about'}">About Me</router-link>             
            </header>
        </div>
    </div>

</template>

<script>

</script>

<style>
.header-container {
    width: 100%;
    border-bottom: 2px solid #ffe66d;
    background-color: #343434;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
}

.container1 {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0;
    margin: 0;
}

.container2 {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-right: 20px;
    margin: 0;
}

.header {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
    margin: 0;
}

.about-me,
.my-projects {
    padding-left: 20px;
    font-size: 24px;
    font-weight: bold;
}

html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}
</style>