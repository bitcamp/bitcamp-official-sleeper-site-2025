<template>
  <div class="header-container">
    <a class="logo" href="/">
      <img src="~/public/bitcamp-brand/logos/wordmark-brown.png" width="300" alt="Bitcamp" />
    </a>
    <div class="header-content">
      <h1 class="header-title">We're out exploring, but we'll be back soon!</h1>
      <div class="header-body">
        <p>Bitcamp returns in 2024 for our 10-year anniversary!</p>
        <p>In the meantime, follow our socials for updates.</p>
      </div>
      <SocialIcons />
    </div>

    <div class="graphics">
      <img class="mountains" src="~/assets/img/images/mountains.svg" alt="mountains">
      <img class="sun" src="~/assets/img/images/sun.svg">

      <img class="cowskull" src="~/assets/img/images/cowskull.svg">
      <img class="cactus" src="~/assets/img/images/cactus.svg">
    </div>
  </div>
</template>

<script lang="ts">
import LinkButton from '~/components/LinkButton.vue';
import SocialIcons from '~/components/SocialIcons.vue';
export default {
  name: 'AppHeader',
  components: { LinkButton, SocialIcons },
};
</script>

<style scoped>
.header-container {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 32vw;
  margin-bottom: 10vw;
  padding-top: 100px;
  gap: 25px;
  text-align: center;
  background-color: var(--color-sky);
}

.header-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3vw;
  font-size: 1.7vw;
  margin-top: 100px;
}

.header-title {
  width: 65%;
  /* two lines */
  line-height: 1.3;
  font-size: 5rem;
}

.header-body {
  /* display: flex; */
  /* flex-flow: column nowrap; */
  width: 40vw;
  font-size: 2.5rem;
}

.button-container {
  margin-top: 0.5vw;
}

.mountains {
  position: absolute;
  width: 55vw;
  bottom: -4.7vw;
  left: 23vw;
  /* transform: translate(-50%); */
  z-index: 10;
}

.sun {
  position: absolute;
  bottom: -4.7vw;
  left: 23vw;
  width: 13.5vw;
  z-index: 1;
  transform: translate(200%, -100%); 
}

.cowskull {
  position: absolute;
  width: 11.6vw;
  bottom: -3.7vw;
  left: 5vw;
}
.cactus {
  position: absolute;
  width: 6vw;
  bottom: -0.66vw;
  right: 5.6vw;
}

/* mobile view - header size */
@media (max-width: 768px) {
  .header-content {
    gap: 3vw;
    top: 15vw;
    right: 22vw;
    font-size: 3rem;
    padding-left: 2vw;
    padding-right: 2vw;
    gap: 10vw;
  }

  .header-title {
    width: auto;
    /* one line */
    line-height: 1;
  }

  .header-body {
    width: 85vw;
    line-height: 1.3;
  }
}
</style>
