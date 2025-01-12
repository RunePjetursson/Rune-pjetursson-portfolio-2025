<script setup lang="ts">
useSeoMeta({
  title: "Rune M. P. Pjetursson - Portfolio",
  ogTitle: "Rune M. P. Pjetursson - Portfolio",
  description: "Rune M. P. Pjetursson - Portfolio",
  ogDescription: "Rune M. P. Pjetursson - Portfolio",
  ogImage:
    "https://images.pexels.com/photos/2422463/pexels-photo-2422463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <main class="flex column align">
    <div class="cont-top flex row wrap align">
      <MainAbout />
      <MainCodeInfo />
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  max-width: 1440px;
  min-width: 350px;
  margin: 0 auto;
  min-height: 90vh;
  width: 100%;
  .cont-top {
    gap: 10px;
    min-height: 75vh;
    margin-bottom: auto;
  }
}
</style>
