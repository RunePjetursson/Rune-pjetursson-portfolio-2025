<template>
  <div class="flex column align"><BusinessCard /></div>
</template>

<script lang="ts" setup>
import BusinessCard from "~/components/3DBusinessCard.vue";

useSeoMeta({
  title: "Contact",
  ogTitle: "Rune Pjetursson - Portfolio",
  description: "Rune Pjetursson - Portfolio",
  ogDescription: "Rune Pjetursson - Portfolio",
  ogImage: "/assets/img/dkon_focus-img.jpg",
  twitterCard: "summary_large_image",
});
</script>

<style lang="scss" scoped></style>
