<template>
  <b-container id="mulheres">
    <b-row class="d-flex justify-content-between">
      <b-img v-if="$screen.md" fluid src="~/assets/img/menu/logo-menu.png" />
      <menu-navigation />
      <Flicking>
        <div class="card-panel">111111111</div>
        <div class="card-panel">2</div>
        <div class="card-panel">3</div>
        <div class="card-panel">4</div>
        <div class="card-panel">5</div>
        <div class="card-panel">6</div>
      </Flicking>
    </b-row>
  </b-container>
</template>

<script>
import Flicking from '@egjs/vue-flicking';
import '@egjs/vue-flicking/dist/flicking.css';
import MenuNavigation from './MenuNavigation.vue';
export default {
  components: { MenuNavigation, Flicking },
};
</script>

<style lang="scss" scoped></style>
