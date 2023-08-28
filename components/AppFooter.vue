<template>
  <footer>
    <div class="floatie-text">
      <div class="links">
        <a href="http://mlh.io/code-of-conduct">MLH Code of Conduct</a> |
        <a href="/brand.pdf">Brand Guidelines</a> |
        <a href="mailto:hello@bit.camp">Contact Us</a>
      </div>
      <div class="copyright">
        Copyright &copy; 2019 - 2023 Bitcamp. All Rights Reserved.
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: 'AppFooter',
};
</script>

<style scoped>

footer {
  position: relative;
  box-sizing: border-box;

  height: 25vw;
  width: 100vw;
  overflow: hidden;
}

.links a {
  text-decoration: underline;
}
.floatie-text {
  position: absolute;
  text-align: center;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 5vw;
  font-size: 1.5vw;
}

@media (max-width: 976px) {
  .floatie-text {
    font-size: 2vw;
  }
}

@media (max-width: 768px) {
  .floatie-text {
    font-size: 2.5vw;
  }
}
</style>
