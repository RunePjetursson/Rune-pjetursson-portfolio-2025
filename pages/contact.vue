<script setup>
useSeoMeta({
  title: "Contact",
  ogTitle: "Rune Pjetursson - Portfolio",
  description: "Rune Pjetursson - Portfolio",
  ogDescription: "Rune Pjetursson - Portfolio",
  ogImage: "/assets/img/dkon_focus-img.jpg",
  twitterCard: "summary_large_image",
});
</script>
<template>
  <main class="flex column align">
    <div class="info-box flex row align wrap">
      <div class="portrait"></div>
      <section class="txt-cont flex column">
        <h1>Contact Me</h1>
        <p>
          Feel free to reach out to me via email or LinkedIn for any
          professional inquiries.
        </p>
        <p>
          Currently searching and applying for internships in Aalborg Denmark,
          for a 10 week period, in september - oktober 2025.
        </p>

        <div class="contact-socials flex column">
          <a
            class="mailto flex row"
            href="mailto:hello@runepjetursson.com"
            title="Send mail to Rune (opens your preferred mail program)"
            ><img
              src="assets/img/envelope-regular.svg"
              alt="icon of envelope"
              class="icon invert"
            />
            <p>hello@runepjetursson.com</p>
          </a>
          <a
            class="flex row"
            target="_blank"
            href="https://www.linkedin.com/in/rune-m-p-pjetursson-361870115/"
            title="Open linkedin in a new window of your current browser"
          >
            <img
              class="icon"
              src="assets/img/Linkedin_light.png"
              alt="Icon for the social media Linkedin"
            />
            <p>LinkedIn</p>
          </a>
        </div>
      </section>
    </div>
    <!-- Back side content (contact form) -->
    <div class="form flex column align">
      <!-- Form backend supplied by https://formsubmit.co/ -->
      <form
        id="contact"
        action="https://formsubmit.co/hello@runepjetursson.com"
        method="post"
        class="flex column cont-bg"
      >
        <h2>Send me a message</h2>
        <p>
          When pressing send, you will be directed to a new page for
          confirmation
        </p>
        <div class="flex row fieldset-row">
          <fieldset>
            <input
              placeholder="Your Name..."
              name="Name"
              type="text"
              tabindex="1"
              id="contact-name"
              required
              autofocus
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Email Address..."
              name="Email"
              type="email"
              id="contact-email"
              tabindex="2"
              required
            />
          </fieldset>
        </div>
        <fieldset>
          <input
            placeholder="Subject..."
            name="Subject"
            type="text"
            id="contact-subject"
            tabindex="3"
          />
        </fieldset>
        <fieldset>
          <textarea
            placeholder="Message..."
            tabindex="4"
            name="Message"
            id="contact-text"
            required
          ></textarea>
        </fieldset>
        <fieldset>
          <button type="submit" id="contact-submit" data-submit="...Sending">
            Send email
          </button>
        </fieldset>
      </form>
    </div>
  </main>
</template>
<style lang="scss" scoped>
main {
  gap: 50px;
  margin-bottom: 50px;
  max-width: 1000px;
  .info-box {
    .portrait {
      background-image: url("@/assets/img/IMG-compressed.webp"),
        url("@/assets/img/IMG_0508.png");
      background-size: cover;
      background-repeat: no-repeat;
      height: 500px;
      width: 320px;
    }
    .txt-cont {
      padding: 25px;
      max-width: 50%;
      gap: 15px;
      @media (max-width: 582px) {
        max-width: 90%;
      }
      .contact-socials {
        position: relative;
        overflow: hidden;
        a {
          align-items: center;
          padding: 2%;
          transform: scale(0.9);
          width: 100%;
          transition: 0.2s all ease-in-out;
          overflow: hidden;
          p {
            margin-left: 10px;
          }
          &:hover {
            box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.353);
            transform: scale(1);
            border-radius: 7px;
          }
        }
      }
    }
  }
  .form {
    width: 100%;
    form {
      width: 90%;
      justify-content: center;
      gap: 25px;

      .fieldset-row {
        gap: 25px;
        fieldset {
          width: 50%;
        }
      }
      fieldset {
        border: transparent;
        input {
          padding: 10px;
          border-radius: 5px;
          border: 1px solid #ccc;
          width: 100%;
          color: #000000;
          &:focus {
            outline: none;
            border-color: #000000;
          }
        }
        textarea {
          padding: 10px;
          width: 100%;
          min-height: 100px;
          color: #000000;
          resize: none;
          &:focus {
            outline: none;
            border-color: #000000;
          }
        }
        button {
          padding: 10px 20px;
          background-color: #00711e;
          color: #ffffff;
          border: transparent;
          border-radius: 5px;
          cursor: pointer;
          transition: 0.2s all ease-in-out;
          &:hover {
            background-color: #287700;
            transform: scale(1.11);
          }
        }
      }
    }
  }
}
</style>
