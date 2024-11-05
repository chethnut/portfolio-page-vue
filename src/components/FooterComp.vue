<template>
    <footer>
        <div class="links-container">
            <a href="https://www.linkedin.com/in/sethchesky" target="_blank" rel="noopener noreferrer">· LinkedIn</a>
            <a href="https://github.com/chethnut" target="_blank" rel="noopener noreferrer">· GitHub</a>
            <a href="/assets/Resume.pdf" target="_blank" rel="noopener noreferrer">· Resumé</a>
        </div>
    </footer>
</template>

<script>
</script>

<style>
html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
}

footer {
    background-color: #e7eee7;
}

.links-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

a {
    padding: 10px;
    font-weight: bold;
}

main {
    flex-grow: 1;
}
</style>