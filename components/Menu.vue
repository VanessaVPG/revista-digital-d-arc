<template>
  <b-container>
    <b-row class="bg">
      <div class="voce-sabia"></div>
      <div class="menu-mulheres"></div>
      <div class="linha-do-tempo"></div>
      <div class="jogo"></div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Menu',
};
</script>

<style lang="scss" scoped>
.bg {
  background: url(~/assets/img/menu/vamos-viajar-bg.png);
}
.voce-sabia {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background: black;
}
</style>
