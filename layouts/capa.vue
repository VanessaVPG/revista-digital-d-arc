<template>
  <div class="min-vh-100">
    <main class="hero-background">
      <client-only>
        <Particles
          color="#1a005c"
          :particles-number="50"
          shape-type="triangle"
          :particle-size="8"
          movement-direction="top"
          lines-color="#ffffff"
          :line-linked="true"
          :move-speed="0.75"
        />
      </client-only>
      <nuxt />
    </main>
  </div>
</template>
<script>
import Particles from '~/components/Particles.vue';

export default {
  name: 'Capa',
  components: {
    Particles,
  },
};
</script>
<style lang="scss" scoped>
.hero-background {
  height: 100vh !important;
  width: 100vw !important;
  position: fixed !important;
  top: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-blend-mode: overlay !important;
  background-attachment: fixed !important;
  background-position: fixed !important;
  background: rgba($color: black, $alpha: 0.4);
  background-image: url('~/assets/img/capa/bg-prof-white.png') !important;
  z-index: 1 !important;
}
div[id^='particles-instance-'] {
  height: 100vh !important;
  width: 100vw !important;
  position: fixed !important;
  top: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
  background: rgba($color: #000000, $alpha: 0.1);
  z-index: 2 !important;
}
</style>
