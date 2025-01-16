<template>
  <header>
    <div class="cont align flex">
      <nav>
        <ul class="flex row">
          <li><a href="/" title="Navigate to home page">Home</a></li>
          <li>
            <a
              href="/#projects"
              title="Navigate to home page under the project section"
              >Projects</a
            >
          </li>
          <li>
            <a
              href="/#about"
              title="Navigate to home about under the about section"
              >About</a
            >
          </li>
          <li>
            <a href="/contact" title="Navigate to contact page">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100%;
  max-width: 1440px;
  background-color: #0000000e;
  margin: 0 auto;
  margin-bottom: 25px;
  padding: 25px;
  height: 100px;
  backdrop-filter: blur(10px);
  position: sticky;
  z-index: 100;
  top: 0;
  .cont {
    max-width: 1440px;
    position: relative;
    border-radius: 0 0 5px 5px;
    overflow: hidden;
    nav {
      padding: 25px;
      filter: opacity(90%);
      margin-left: auto;

      ul {
        gap: 25px;

        li {
          a {
            text-shadow: 1px 1px 2px #000000;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
}
</style>
