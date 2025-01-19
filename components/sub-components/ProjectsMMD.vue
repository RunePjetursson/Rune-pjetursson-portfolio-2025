<template>
  <div class="cont flex row">
    <!-- Left Side -->
    <div class="left flex column">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="item flex align"
        :class="{
          active: activeProjectIndex === index,
          hover: hoveredIndex === index,
        }"
        @click="setActiveProject(index)"
        @mouseover="hoverProject(index)"
        @mouseleave="leaveProject"
      >
        <h4>{{ project.title }}</h4>
      </div>
    </div>

    <!-- Right Side -->
    <div v-if="activeProject" class="right flex column">
      <div class="img-cont flex row">
        <img
          v-for="(image, index) in activeProject.gallery"
          :key="index"
          :src="image.src"
          :alt="image.alt"
          class="project-image"
        />
      </div>
      <!-- Txt container -->
      <div class="txt-cont flex wrap">
        <section
          v-for="(section, index) in activeProject.sections"
          :key="index"
        >
          <h3>{{ section.heading }}</h3>
          <p v-for="(paragraph, pIndex) in section.content" :key="pIndex">
            {{ paragraph }}
          </p>
        </section>

        <a
          v-if="activeProject.link?.url"
          :href="activeProject.link.url"
          target="_blank"
          class="project-link"
          title="Open project in a new tab"
        >
          {{ activeProject.link.text }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Define reactive variables
const projects = ref([]);
const activeProjectIndex = ref(null);
const activeProject = ref(null);
const hoveredIndex = ref(null);

// Set the active project based on the selected index
function setActiveProject(index) {
  activeProjectIndex.value = index;
  activeProject.value = projects.value[index];
}

// Mouse event handlers
function hoverProject(index) {
  hoveredIndex.value = index;
}

function leaveProject() {
  hoveredIndex.value = null;
}

// Fetch the project data
async function fetchData() {
  try {
    const projectFiles = ["design", "fysio-cannerslund", "taiji"];

    // Fetch all project data using the correct path
    const response = await Promise.all(
      projectFiles.map((file) =>
        import(`@/assets/project-data/mmd/${file}.json`)
      )
    );

    // Extract the default property from each module
    projects.value = response.map((res) => res.default[0]);
    console.log(projects.value);
    // Set the first project as active if projects exist
    if (projects.value.length > 0) {
      setActiveProject(0);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    projects.value = []; // Fallback to empty array
  }
}

// Run fetchData when component mounts
onMounted(() => {
  fetchData();
});
</script>

<style lang="scss" scoped>
.cont {
  border-radius: 25px;
  max-width: 1440px;
  width: 100%;
  justify-self: center;
  .left {
    margin-right: auto;
    width: 25%;
    padding: 25px 0 0 0;
    background-color: #181818;
    gap: 25px;
    .item {
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      width: 80%;
      padding: 25px;
      align-self: center;
      border-radius: 17px;
      background-color: rgb(255, 255, 255);
      outline: double 20px transparent;
      h4 {
        color: #181818;
      }
      &:hover {
        transform: scale(1.05);
        box-shadow: 2px 2px 5px #00000078;
        outline: solid 5px rgb(141, 141, 141);
      }
      &:active {
        transform: scale(1.1);
      }
    }
  }

  .right {
    width: 75%;
    .img-cont {
      padding: 25px;
      height: 25%;
      margin-bottom: auto;
      background-color: rgb(184, 184, 184);
      img {
        max-width: 100px;
        margin-right: 10px;
      }
    }

    .txt-cont {
      height: 75%;
      padding: 25px;
      overflow: auto;
      background-color: #6f6f6f;
      &::-webkit-scrollbar {
        width: 10px;
        padding: 2px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #e9e9e9; /* Color of the thumb (draggable part) */
        border-radius: 100px;
      }

      &::-webkit-scrollbar-thumb:hover {
        background-color: #555; /* Color when hovering over the thumb */
      }

      &::-webkit-scrollbar-track {
        background: #000000; /* Color of the track (where the thumb moves) */
      }

      &::-webkit-scrollbar-track:hover {
        background: #000000; /* Track color when hovered */
      }

      section {
        margin-bottom: 1rem;

        h3 {
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        p {
          margin: 0.5rem 0;
          line-height: 1.5;
        }
      }

      a {
        display: inline-block;
        margin-top: 1rem;
        transition: all 0.3s ease-in-out;
        background-color: #000000;
        border-radius: 25px;
        padding: 25px;
        &:hover {
          text-decoration: underline;
          transform: scale(1.02);
        }
      }
    }
  }
}
</style>
