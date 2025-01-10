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
    <div class="cont-top flex row">
      <section class="flex column align bio">
        <img
          class="img"
          src="https://media.licdn.com/dms/image/v2/D5603AQH4yjBJp5JcMg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1680048970300?e=1741824000&v=beta&t=NFYmALxvdlnLbqiSQibpOmIdpMa-jxek6zvdbE6RXXk"
          alt="Headshot image of Rune M. P. P."
        />
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "../assets/style/main.scss";

main {
  max-width: 1440px;
  min-width: 350px;
  margin: 0 auto;
  min-height: 90vh;
  width: 100%;
  .cont-top {
    .bio {
      padding: 25px;
      img {
        border-radius: 100%;
        outline: 2px solid #3e3e3e;
        box-shadow: 5px 5px 15px #00000096;
      }
    }
  }
}
</style>
