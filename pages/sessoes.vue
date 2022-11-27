<template>
  <b-container class="py-5">
    <section id="menu">
      <Menu />
    </section>
    <section id="mulheres"></section>
    <section id="voce-sabia"></section>
    <section id="linha-do-tempo"></section>
    <section id="jogo"></section>
  </b-container>
</template>

<script>
import Menu from '~/components/Menu.vue';
export default {
  components: { Menu },
  layout: '',
};
</script>

<style lang="scss">
#menu {
}
</style>
