<template>
  <div id="projects" class="cont cont-bg flex column align">
    <h2>Projects</h2>
    <hr />
    <div class="flex row align wrap fep-cont">
      <div class="fep-item flex column align">
        <p>Student</p>
        <br />
        <h3>Multimedia Design</h3>
        <div class="projects">
          <ProjectsMMD />
        </div>
      </div>
      <div class="fep-item flex column align">
        <p>Student</p>
        <br />
        <h3>Digital Concept Development</h3>
        <div class="projects">
          <ProjectsDKON />
        </div>
      </div>
      <div class="fep-item flex align">
        <h3>Professional</h3>
        <div class="projects">
          <ProjectsPROF />
        </div>
      </div>
      <div class="fep-item flex align">
        <h3>Side Projects</h3>
        <div class="projects">
          <ProjectsSIDE />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProjectsDKON from "./sub-components/ProjectsDKON.vue";
import ProjectsMMD from "./sub-components/ProjectsMMD.vue";
import ProjectsPROF from "./sub-components/ProjectsPROF.vue";
import ProjectsSIDE from "./sub-components/ProjectsSIDE.vue";
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
      position: relative;
      height: 150px;
      width: 250px;
      background-repeat: no-repeat;
      background-size: cover;
      filter: saturate(2%);
      outline: double 45px transparent;
      border-radius: 15px;
      background-color: rgb(0, 18, 117);
      transition: 0.2s all ease-in-out;
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
        filter: saturate(100%);
        outline: solid 2px #ffffff7a;
        cursor: pointer;
        h3 {
          background-color: rgba(4, 4, 4, 0.208);
          backdrop-filter: blur(5px);
        }
      }
      &:nth-child(1) {
        background-image: url("../assets/img/dkon_focus-img.jpg");
        background-position-y: -60px;
        &:hover {
          filter: saturate(100%);
          filter: hue-rotate(200deg);
        }
      }
      &:nth-child(2) {
        background-image: url("../assets/img/dkon_focus-img.jpg");
        background-position-y: -60px;
      }
      &:nth-child(3) {
        // Image from Google DeepMind
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
