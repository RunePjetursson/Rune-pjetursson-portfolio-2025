<template>
  <div class="flex row container">
    <hr />
    <div class="projects"></div>
    <div class="active"></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  max-height: 100vh; // delete when done
  min-height: 100px;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  hr {
    width: inherit;
    min-width: 50vw;
    max-width: 1000px;
    border-radius: 100%;
    border-color: #252525;
    height: 1px;
  }
  .projects {
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
    width: 25%;
    background-color: #2b65e274;
  }
  .active {
    height: 100%;
    width: 75%;
    background-color: #892be272;
  }
}
</style>
