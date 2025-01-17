<template>
  <div class="cont cont-bg flex align">
    <section class="flex column align">
      <h2>Currently Under Construction</h2>
      <p>Pardon the mess and lack of information</p>
      <p><span>Expected done by</span> 19th of January</p>
      <div class="flex column port">
        <p>I refer to my previous portfolio in the meantime</p>
        <a
          title="open old portfolio in new window"
          href="https://mmd.ucn.dk/class/MMD-CSD-S22/10461970/Eksaminer/Sem3/Rune%20Pjetursson_version%203/"
          target="_blank"
          >Portfolio 2023-24 <span>(open link in new window)</span></a
        >
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.cont {
  height: 50vh;
  max-width: 1440px;
  min-width: 420px;
  section {
    gap: 25px;
    h2 {
      text-decoration: underline;
    }
  }
  .port {
    margin: 25px;
    gap: 15px;
    background-color: rgba(0, 0, 0, 0.485);
    padding: 25px;
    border-radius: 25px;
    a {
      text-decoration: underline;
      span {
        color: #c4c4c488;
        text-decoration: wavy;
      }
    }
  }
}
</style>
