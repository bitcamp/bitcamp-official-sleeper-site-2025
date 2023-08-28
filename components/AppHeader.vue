<template>
  <div class="header-container">
    <img src="~/public/bitcamp-brand/logos/wordmark-brown.svg" width="300" alt="Bitcamp" />
    <div class="cloud">
      <img id="small-cloud-left" src="../assets/img/images/small-cloud.svg" />
      <img id="big-cloud-left" src="../assets/img/images/big-cloud.svg" />
      <img id="small-cloud-right" src="../assets/img/images/small-cloud.svg" />
      <img id="big-cloud-right" src="../assets/img/images/big-cloud.svg" />
    </div>
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

#small-cloud-left {
  position: absolute;
  top: 21%;
  left: 8%;
  z-index: 0;
  width: 100px;
  animation: left-clouds 24s linear infinite;
}

#big-cloud-left {
  position: absolute;
  top: 24%;
  left: 1%;
  z-index: 0;
  width: 150px;
  animation: left-clouds 32s linear infinite;
}

#small-cloud-right {
  position: absolute;
  top: 50%;
  right: 3%;
  z-index: 0;
  width: 100px;
  animation: right-clouds 28s linear infinite;
}

#big-cloud-right {
  position: absolute;
  top: 53%;
  right: 7%;
  z-index: 0;
  width: 150px;
  animation: right-clouds 22s linear infinite;
}
		
@keyframes left-clouds {	
  100% {	
    left: calc(100%);	
  }	
}	
@keyframes right-clouds {	
  0% {	
    right: 0;	
  }	
  100% {	
    right: 100vw;	
  }	
}

.header-container {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 26vw;
  margin-bottom: 10vw;
  padding-top: 100px;
  gap: 12px;
  text-align: center;
  background-color: var(--color-sky);
}

.header-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3vw;
  font-size: 1.7vw;
  margin-top: 0px;
  z-index: 5;
}

.header-title {
  width: 65%;
  /* two lines */
  line-height: 1.3;
  font-size: 4rem;
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
  animation: rise 3s linear forwards;
}

@keyframes rise {
  0% {
    bottom: -15vw; /* Start position, below the horizon */
    filter: brightness(0.4);
  }
  100% {
    bottom: 1.5vw; /* End position, halfway up the viewport */
    filter: brightness(1);
  }
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
    z-index: 5;
  }

  #small-cloud-left {
    width: 75px;
    top: 25%;
  }

  #big-cloud-left {
    width: 112px;
    top: 30%;
  }

  #big-cloud-right {
    top: 75%;
    width: 112px;
  }

  #small-cloud-right {
    top: 70%;
    right: 5%;
    width: 75px;
  }
}
</style>