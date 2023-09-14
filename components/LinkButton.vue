<template>
  <a class="button" :href="link">
    <h3 class="button-text">{{ text }}</h3>
  </a>
</template>

<script lang="ts">
export default {
  name: 'LinkButton',
  props: {
    text: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8vw;
  border-radius: 1rem;
  background-color: var(--color-midnight);
  transition: 0.4s;
  width: 25%;
  margin: 0 auto;
  margin-top: 1vw;
  margin-bottom: 1vw;
}

.button:hover {
  background-color: #132226;
  transition: 0.4s;
}

.button-text {
  font-size: 1.3vw;
}

/* mobile view */
@media (max-width: 768px) {
  .button {
    padding: 2vw;
  }

  .button-text {
    font-size: 3vw;
  }
}
</style>
