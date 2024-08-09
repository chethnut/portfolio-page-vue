<template>
    <div class="header-container">
        <div class="container1">
            <header class="header">
                <h2 class="title">Seth Chesky Portfolio</h2>
            </header>
        </div>

        <div class="container2">
            <header class="header">
                <h2 class="about-me">About Me</h2>
                <h2 class="my-projects">My Projects</h2>
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
    padding-left: 20px;
}
</style>