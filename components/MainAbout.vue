<template>
  <div class="cont-top flex row">
    <section class="flex column bio cont-bg">
      <img
        class="img"
        src="https://media.licdn.com/dms/image/v2/D5603AQH4yjBJp5JcMg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1680048970300?e=1741824000&v=beta&t=NFYmALxvdlnLbqiSQibpOmIdpMa-jxek6zvdbE6RXXk"
        alt="Headshot image of Rune M. P. P."
      />
      <h1>Rune M. P. Pjetursson</h1>
      <hr />
      <section class="flex column txt-box">
        <p><span>Title: </span>Digital Concept Developer</p>
        <p>
          <span>Current Occupation: </span> Student <span>| 2022 -2026 |</span>
        </p>
      </section>
    </section>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../assets/style/main.scss";

.cont-top {
  .bio {
    text-align: center;
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
      max-width: 100px;
      border-radius: 100%;
      outline: 2px solid #3e3e3e;
      box-shadow: 5px 5px 15px #00000096;
    }
    .txt-box {
      margin: 20px 0 20px 0;
      gap: 25px;
      text-align: left;
      p {
        font-size: 0.9rem;
      }
    }
  }
}
</style>
