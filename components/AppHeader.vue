<template>
  <div class="header-container">
    <img src="../public/bitcamp-brand/logos/wordmark-brown.png" width="200" alt="Bitcamp" />
    <img id="small-cloud-left" src="../assets/img/images/small-cloud.svg" />
    <img id="big-cloud-left" src="../assets/img/images/big-cloud.svg" />
    <img id="small-cloud-right" src="../assets/img/images/small-cloud.svg" />
    <img id="big-cloud-right" src="../assets/img/images/big-cloud.svg" />
    <div class="header-content">
      <h1 class="header-title">We're out exploring, but we'll be back soon!</h1>
      <div class="header-body">
        <p>Bitcamp returns in 2024 for our 10-year anniversary!</p>
        <p>In the meantime, follow our socials for updates.</p>
      </div>
      <SocialIcons />
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

#small-cloud-left {
  position: absolute;
  top: 15%;
  left: 8%;
  z-index: 0;
  width: 100px;
}

#big-cloud-left {
  position: absolute;
  top: 22%;
  left: 1%;
  z-index: 0;
  width: 150px;
}

#small-cloud-right {
  position: absolute;
  top: 60%;
  right: 3%;
  z-index: 0;
  width: 100px;
}

#big-cloud-right {
  position: absolute;
  top: 67%;
  right: 7%;
  z-index: 0;
  width: 150px;
}

.header-container {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 300px;
  margin-bottom: 300px;
  padding-top: 50px;
  gap: 25px;
  text-align: center;
  background-color: var(--color-sky);
}

.header-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1vw;
  font-size: 1.7vw;
  margin-top: 100px;
}

.header-title {
  width: 50%;
  /* two lines */
  line-height: 1.3;
  font-size: 3rem;
}

.header-body {
  /* display: flex; */
  /* flex-flow: column nowrap; */
  width: 40vw;
  font-size: 1.5rem;
}

.button-container {
  margin-top: 0.5vw;
}

/* mobile view - header size */
@media (max-width: 768px) {
  .header-content {
    gap: 3vw;
    top: 15vw;
    right: 22vw;
    font-size: 3vw;
    padding-left: 2vw;
    padding-right: 2vw;
  }

  .header-title {
    width: auto;
    /* one line */
    font-size: 5vw;
    line-height: 1;
  }

  .header-body {
    width: 45vw;
    line-height: 1.3;
  }

  #small-cloud-left {
    width: 75px;
  }

  #big-cloud-left {
    top: 20%;
    width: 112px;
  }

  #big-cloud-right {
    top: 65%;
    width: 112px;
  }

  #small-cloud-right {
    right: 5%;
    width: 75px;
  }
}
</style>
