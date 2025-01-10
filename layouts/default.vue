<template>
  <div class="default-layout">
    <InteractiveBackground />
    <MyHeader />
    <slot />
    <MyFooter />
  </div>
</template>

<style lang="scss" scoped></style>

<script>
import InteractiveBackground from "@/components/InteractiveBackground.vue";

export default {
  components: {
    InteractiveBackground,
  },
};
</script>
