<template>
  <section class="txt-box flex row">
    <div class="flex column txt-left">
      <p class="column-1">Title</p>
      <p class="column-1">Occupation</p>
      <p class="column-1">Age</p>
      <p class="column-1">What I know</p>
    </div>
    <hr />
    <div class="flex column txt-right">
      <p class="column-2">Digital Concept Developer</p>
      <p class="column-2">Student <span>| 2022 -2026 |</span></p>
      <p class="column-2">{{ age }}</p>
      <div class="column-2 scrolling-container">
        <p class="scrolling-text">
          <span v-for="(item, index) in allItems" :key="index">{{ item }}</span>
          <span class="separator">|</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// Calculate Age
const birthDate = new Date(1997, 4, 25);

const currentDate = new Date();
let age = currentDate.getFullYear() - birthDate.getFullYear();

if (
  currentDate.getMonth() < birthDate.getMonth() ||
  (currentDate.getMonth() === birthDate.getMonth() &&
    currentDate.getDate() < birthDate.getDate())
) {
  age--;
}
// Calculate Age END
// -----------------------------
// Tags
const allItems = [
  "UI,",
  "UX,",
  "Front-end Development,",
  "HTML/CSS,",
  "SCSS,",
  "JavaScript,",
  "Vue.js,",
  "Nuxt.js,",
  "AstroJS",
  "Prototyping,",
  "Interaction Design,",
  "Digital Concept Development,",
  "Wireframing,",
  "User Research,",
  "Information Architecture,",
  "Responsive Web Design,",
  "App Design,",
  "Web Design,",
  "Creative Direction,",
  "Brand Identity (Digital),",
  "User Testing,",
  "Figma,",
  "Adobe XD,",
  "Wireframes & Mockups,",
  "Design Systems,",
  "Agile/Scrum,",
  "Design Thinking,",
  "Product Design,",
  "Animation & Motion Design (UI),",
];
// Tags END
</script>

<style lang="scss" scoped>
.txt-box {
  margin: 20px 0 20px 0;
  text-align: left;
  gap: 15px;
  overflow: hidden;
  width: 100%;
  hr {
    width: 1px;
    height: 100%;
    filter: opacity(3%);
  }
  .txt-left {
    width: 30%;
    row-gap: 20px;
  }
  .txt-right {
    width: 70%;

    row-gap: 20px;
  }
  /* Scrolling container */
  .scrolling-container {
    grid-column: span 1;
    width: 100%;
    overflow: hidden;
  }

  .scrolling-text {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    position: relative;
    animation: scrollText 90s linear infinite;
    width: auto;
    &:hover {
      animation-play-state: paused;
    }
  }

  .scrolling-text span {
    display: inline-block;
    margin-right: 10px; /* Space between items */
  }

  .separator {
    display: inline-block;
    margin-right: 10px;
  }

  /* Keyframes for the scroll animation */
  @keyframes scrollText {
    0% {
      transform: translateX(10%); /* Start from the right */
    }
    100% {
      transform: translateX(-100%); /* End at the left */
    }
  }
}
</style>
