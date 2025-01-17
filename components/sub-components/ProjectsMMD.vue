<template>
  <div></div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const fysioData = ref(null);
const taijiData = ref(null);
const designData = ref(null);

onMounted(async () => {
  try {
    const [fysioResponse, taijiResponse, designResponse] = await Promise.all([
      fetch("/api/project-data/fysio-cannerslund"),
      fetch("/api/project-data/taiji"),
      fetch("/api/project-data/design"),
    ]);

    fysioData.value = await fysioResponse.json();
    taijiData.value = await taijiResponse.json();
    designData.value = await designResponse.json();
  } catch (error) {
    console.error("Error loading project data:", error);
  }
});
</script>

<style></style>
