<template>
  <b-container class="py-5">
    <section id="menu">
      <Menu />
    </section>
    <section id="mulheres"><mulheres /></section>
    <section id="voce-ja-viu">c</section>
    <section id="linha-do-tempo">b</section>
    <section id="jogo">a</section>
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
