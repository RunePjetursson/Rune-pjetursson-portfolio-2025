<template>
  <div id="projects" class="cont cont-bg flex column align">
    <h2>Projects</h2>
    <hr />
    <div class="flex row align wrap fep-cont">
      <!-- Loop through project items for better scalability -->
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="fep-item flex column align"
        :id="project.id"
        @click="setActiveProject(project.id)"
      >
        <p>{{ project.type }}</p>
        <h3>{{ project.name }}</h3>
        <div class="projects"></div>
      </div>
    </div>

    <!-- Expanded Projects -->
    <div class="project-expanded" id="projects-expanded">
      <ProjectsMMD v-if="activeProject === 'MMD'" />
      <ProjectsDKON v-if="activeProject === 'DKON'" />
      <ProjectsPROF v-if="activeProject === 'PROF'" />
      <ProjectsSIDE v-if="activeProject === 'SIDE'" />
    </div>
    <!-- Expanded Projects END -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProjectsDKON from "./sub-components/ProjectsDKON.vue";
import ProjectsMMD from "./sub-components/ProjectsMMD.vue";
import ProjectsPROF from "./sub-components/ProjectsPROF.vue";
import ProjectsSIDE from "./sub-components/ProjectsSIDE.vue";

// Project data
const projects = [
  { id: "MMD", type: "Student 2022 - 2024", name: "Multimedia Design" },
  {
    id: "DKON",
    type: "Student 2024 - 2026",
    name: "Digital Concept Development",
  },
  { id: "PROF", type: "", name: "Professional" },
  { id: "SIDE", type: "", name: "Side Projects" },
];

// Reactive variable to track the active project
const activeProject = ref(null);

// Method to set the active project
const setActiveProject = (id) => {
  activeProject.value = activeProject.value === id ? null : id; // Toggle if clicked again
};
</script>

<style lang="scss" scoped>
.cont {
  max-width: 1440px;
  margin: 25px;
  overflow: hidden;

  h2 {
    align-self: flex-start;
    margin-left: 30px;
  }

  hr {
    width: 95%;
    margin-top: 10px;
    border-radius: 100%;
    border-color: #7e7e7e;
  }

  .fep-cont {
    padding: 25px;
    gap: 25px;
    .fep-item {
      filter: saturate(2%);
      position: relative;
      height: 150px;
      width: 250px;
      background-repeat: no-repeat;
      background-size: cover;
      outline: double 45px transparent;
      border-radius: 15px;
      background-color: rgb(0, 18, 117);
      transition: 0.2s all ease-in-out;
      overflow: hidden;
      h3 {
        text-align: center;
        padding: 2%;
        width: 100%;
        font-size: 1.1rem;
        transition: 0.5s all ease-in-out;
        color: rgb(255, 255, 255);
      }

      p {
        font-weight: 500;
      }

      &:hover {
        outline: solid 2px #ffffff7a;
        cursor: pointer;
        filter: saturate(100%);
        h3 {
          background-color: rgba(4, 4, 4, 0.208);
          backdrop-filter: blur(5px);
          font-size: 1.2rem;
        }
      }

      &:nth-child(1) {
        background-image: url("../assets/img/dkon_focus-img.jpg");
        background-position-y: -60px;
        p {
          backdrop-filter: blur(4px);
          border-radius: 10px;
          padding: 8px;
        }

        &:hover {
          filter: saturate(100%);
          filter: hue-rotate(200deg);
        }
      }

      &:nth-child(2) {
        background-image: url("../assets/img/dkon_focus-img.jpg");
        background-position-y: -60px;
        p {
          backdrop-filter: blur(4px);
          border-radius: 10px;
          padding: 8px;
        }
      }

      &:nth-child(3) {
        background-image: url("../assets/img/ai-flower.jpg");
        background-position-y: -90px;
      }

      &:nth-child(4) {
        background-image: url("../assets/img/ai-object.jpg");
      }

      .projects {
        position: absolute;
      }
    }
  }
}
</style>
