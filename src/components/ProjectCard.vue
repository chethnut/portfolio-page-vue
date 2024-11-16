<template>
    <div class="project-card-container">
        <!-- <img class="project-img" :src="img" alt="Project Image"/> -->
        <div class="image-carousel">
            <button v-if="imagesLength" class="arrow left" @click="prevImage">❮</button>
            <img class="project-img" :src="currentImage" alt="Project Image"/>
            <button v-if="imagesLength" class="arrow right" @click="nextImage">❯</button>
        </div>
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
        images: {
            type: Array,
            default: () => []
        },
        demoLink: {
            type: String
        }
    },
    data() {
        return {
            currentIndex: 0
        };
    },
    computed: {
        currentImage() {
            return this.images[this.currentIndex];
        },
        imagesLength() {
            return this.images.length > 1;
        }
    },
    methods: {
        nextImage() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        },
        prevImage() {
        this.currentIndex = 
            (this.currentIndex - 1 + this.images.length) % this.images.length;
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
.image-carousel {
    position: relative;
    display: flex;
    align-items: center;
}
.project-img {
    border: 2px solid #f7fff7;
    border-radius: 8px;
    height: 560px;
    margin-right: 20px;
}
.arrow {
    background-color: #2f3061;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
}
.arrow.left {
    left: 10px;
}
.arrow.right {
    right: 30px;
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

