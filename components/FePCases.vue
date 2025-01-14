<template>
  <div id="projects" class="cont cont-bg flex column align">
    <div class="flex row align wrap fep-cont">
      <div class="fep-item flex align">
        <h3>MMD</h3>
        <div class="projects">
          <ProjectsMMD />
        </div>
      </div>
      <div class="fep-item flex align">
        <h3>DKON</h3>
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
  .fep-cont {
    padding: 25px;
    gap: 25px;
    .fep-item {
      position: relative;
      height: 150px;
      width: 250px;
      filter: saturate(2%);
      outline: double 45px transparent;
      border-radius: 15px;
      transition: 0.2s all ease-in-out;
      background-color: rgb(0, 18, 117);
      h3 {
        text-align: center;
      }
      &:hover {
        filter: saturate(100%);
        outline: solid 2px #ffffff7a;
        cursor: pointer;
      } /*
      &:nth-child(1) {
      }
      &:nth-child(2) {
      }
      &:nth-child(3) {
      }
      &:nth-child(4) {
      } */
      .projects {
        position: absolute;
      }
    }
  }
}
</style>
