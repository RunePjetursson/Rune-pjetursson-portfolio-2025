<template>
  <div class="cont-top flex row">
    <section class="flex column bio cont-bg">
      <img
        class="img"
        src="../assets/img/IMG_0508_small.png"
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
    width: 100%;
    max-width: 390px;
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
      max-width: 80%;
      border-radius: 25px;
      box-shadow: 5px 5px 15px #00000096;
    }
  }
}
</style>
