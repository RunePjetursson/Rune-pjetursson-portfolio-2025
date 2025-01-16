<script setup lang="ts">
useSeoMeta({
  title: "Home",
  ogTitle: "Rune Pjetursson - Portfolio",
  description: "Rune Pjetursson - Portfolio",
  ogDescription: "Rune Pjetursson - Portfolio",
  ogImage: "/assets/img/dkon_focus-img.jpg",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <main class="flex column align">
    <div class="cont-top flex row wrap align">
      <MainAbout />
      <MainCodeInfo />
      <FePCases />
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  .cont-top {
    gap: 10px;
    min-height: 75vh;
    margin-bottom: auto;
  }
}
</style>
