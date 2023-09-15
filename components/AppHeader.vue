<template>
  <div class="header-container" :style="{ backgroundColor: `${backgroundColor}` }">
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
        <p>In the meantime, apply to join us as an organizer:</p>
        <LinkButton text="Apply Now!" link="https://forms.gle/kpS58obf7qq9DmYZ7" />
      </div>
      <div class="socials">
        <p>Follow our socials for updates.</p>
        <SocialIcons />
      </div>
    </div>

    <div class="graphics">
      <img class="mountains" src="~/assets/img/images/mountains.svg" alt="mountains">
      <img class="sun" src="~/assets/img/images/sun.svg" :style="{ transform: `translate(200%, calc(-150% + ${shiftY}))`, filter: `hue-rotate(${hue}) brightness(140%) saturate(400%)` }">
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
  props: {
    y: Number
  },
  computed: {
    hue() {
      return `${60 - Math.max(0, Math.min(19, this.y/15) * 3)}deg`;
    },
    shiftY() {
      // return `${Math.min(19, this.y/25)}vw`;
      return `${Math.min(19, this.y/25)}vw`;
    },
    backgroundColor() {
      const step = 60;
      
      const original = [18, 33, 60];
      const final = [17, 24, 53];

      const hueDiff = original[0] - final[0];
      const saturationDiff = original[1] - final[1];
      const brightnessDiff = original[2] - final[2];

      const hue = 18 - Math.min(this.y / step, hueDiff);
      const saturation = 33 - Math.min(this.y/step, saturationDiff)
      const brightness = 60 - Math.min(this.y / step, brightnessDiff);

      return `hsl(${hue}, ${saturation}%, ${brightness}%)`;
    }
  }
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
  top: 62%;
  right: 3%;
  z-index: 2;
  width: 100px;
  animation: right-clouds 28s linear infinite;
}

#big-cloud-right {
  position: absolute;
  top: 66%;
  right: 7%;
  z-index: 2;
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
  padding-bottom: 22vw;
  margin-bottom: 10vw;
  padding-top: 100px;
  gap: 1.8vw;
  text-align: center;
  /* background-color: var(--color-sky); */
}

.header-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3vw;
  font-size: 2.5rem;
  margin-top: 0px;
  z-index: 5;
}

.header-title {
  width: 65%;
  /* two lines */
  line-height: 1.3;
  font-size: 4rem;
  padding-left: 4px;
  padding-right: 4px;
}

.header-body {
  /* display: flex; */
  /* flex-flow: column nowrap; */
  min-width: 45vw;
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
  /* transform: translateX(200%);  */
  /* animation: rise 3.5s linear forwards; */
}

@keyframes rise {
  0% {
    bottom: -15vw; /* Start position, below the horizon */
    /* filter: brightness(0.4); */
  }
  100% {
    bottom: -3vw; /* End position, halfway up the viewport */
    /* filter: brightness(1);
     */
    filter: hue-rotate(50deg) brightness(176.7%) saturate(60.7%);
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

.socials {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* mobile view - header size */
@media (max-width: 768px) {
  .header-container {
    gap: 5vw;
  }
  .header-content {
    gap: 3vw;
    top: 15vw;
    right: 22vw;
    font-size: 2.8rem;
    padding-left: 2vw;
    padding-right: 2vw;
    gap: 10vw;
  }

  .header-title {
    width: auto;
    /* one line */
    line-height: 1.2;
  }

  .header-body {
    width: 85vw;
    line-height: 1.3;
    z-index: 5;
    white-space: normal;
  }

  #small-cloud-left {
    width: 75px;
    top: 28%;
  }

  #big-cloud-left {
    width: 112px;
    top: 33%;
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

@media (min-width: 1500px) {
  #small-cloud-left {
    animation: left-clouds 32s linear infinite;
  }

  #big-cloud-left {
    animation: left-clouds 40s linear infinite;
  }

  #small-cloud-right {
    animation: right-clouds 36s linear infinite;
  }

  #big-cloud-right {
    animation: right-clouds 30s linear infinite;
  }
}
</style>