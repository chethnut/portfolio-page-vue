<template>
    <div class="header-container">
        <div class="container1">
            <header class="header">
                <h2 class="title">Seth Chesky Portfolio</h2>
            </header>
        </div>

        <div class="container2">
            <header class="header">              
                <router-link class="about-me" v-bind:to="{ name: 'about'}">About Me</router-link>             
                <router-link class="my-projects" v-bind:to="{ name: 'projects'}">My Projects</router-link>
            </header>
        </div>
    </div>

</template>

<script>

</script>

<style>
.header-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
}

.container1 {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.container2 {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-right: 20px;
    
}

.header {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;

}

.about-me,
.my-projects {
    padding-top: 20px;
    padding-left: 20px;
    font-size: 24px;
    font-weight: bold;
}
</style>