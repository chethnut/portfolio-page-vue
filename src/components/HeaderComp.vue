<template>
    <div class="header-container">
        <div class="container1">
            <header class="header">
                <h2 class="title">Seth Chesky Portfolio</h2>
                
            </header>
        </div>

        <div class="container2">
            <header class="header">
                <router-link class="about-me" v-bind:to="{ name: 'about'}">Home</router-link>          
                <router-link class="resume" v-bind:to="{ name: 'resume'}">Resumé</router-link>     
                <router-link class="my-projects" v-bind:to="{ name: 'projects'}">My Projects</router-link>  
            </header>
        </div>
    </div>
    
</template>

<script>

</script>

<style>
.header-container {
    width: 100%;
    background-color: #e7eee7;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    /* box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2); */
}

.container1 {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0;
    margin: 0;
    padding-left: 20px;
}

.container2 {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 30px;
    margin: 0;
    height: 100%;
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
.my-projects,
.resume {
    padding-left: 30px;
    font-size: 26px;
    font-weight: bold;
    color: #343434;
}

.title {
    color:#343434;
}

html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}
</style>