<template>
  <div class="cont-top flex row">
    <section class="flex column bio cont-bg">
      <img
        class="img"
        src="../assets/circle-user-regular.svg"
        alt="Headshot image of Rune M. P. P. - temporary img inserted"
      />
      <h1>Rune M. P. Pjetursson</h1>
      <hr aria-hidden="true" />
      <TagBox />
    </section>
  </div>
</template>

<script setup>
import TagBox from "./sub-components/TagBox.vue";
</script>

<style lang="scss" scoped>
.cont-top {
  margin-bottom: auto;
  .bio {
    text-align: center;
    width: 400px;
    hr {
      width: 90%;
      filter: opacity(20%);
      border-radius: 25px;
      align-self: center;
      margin-top: 10px;
    }
    .img {
      align-self: center;
      margin: 25px;
      max-width: 100px;
      border-radius: 100%;
      outline: 2px solid #3e3e3e;
      box-shadow: 5px 5px 15px #00000096;
    }
  }
}
</style>
