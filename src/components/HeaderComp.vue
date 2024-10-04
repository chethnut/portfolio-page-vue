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
    border-bottom: 2px solid #6ca6c1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 10px;
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
.my-projects,
.home {
    padding-top: 20px;
    padding-left: 20px;
    font-size: 24px;
    font-weight: bold;
}
</style>