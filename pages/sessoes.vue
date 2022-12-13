<template>
  <b-container class="py-5">
    <section id="menu">
      <Menu />
    </section>
    <section id="mulheres"><mulheres /></section>
    <section id="voce-ja-viu" class="mt-5"><voce-ja-viu /></section>
    <section id="linha-do-tempo" class="mt-5">b</section>
    <section id="jogo" class="mt-5">a</section>
  </b-container>
</template>
<script>
import Menu from '~/components/Menu.vue';
import Mulheres from '~/components/Mulheres.vue';
export default {
  components: { Menu, Mulheres },
  layout: 'defaut',
};
</script>

<style lang="scss">
#mulheres {
  margin-top: 162px;
}
</style>
