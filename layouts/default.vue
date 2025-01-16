<template>
  <div class="default-layout">
    <!-- Only render InteractiveBackground if not on tablet or mobile -->
    <InteractiveBackground v-if="showInteractiveBackground" />
    <MyHeader />
    <slot />
    <MyFooter />
  </div>
</template>

<script>
import InteractiveBackground from "~/components/InteractiveBackground.vue";

export default {
  components: {
    InteractiveBackground,
  },
  data() {
    return {
      showInteractiveBackground: true, //
    };
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      this.showInteractiveBackground = window.innerWidth >= 1024;
    },
  },
};
</script>

<style lang="scss" scoped></style>
