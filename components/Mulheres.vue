<template>
  <b-container id="mulheres">
    <b-row class="d-flex justify-content-between">
      <b-img v-if="$screen.md" fluid src="~/assets/img/menu/logo-menu.png" />
      <menu-navigation />
    </b-row>
  </b-container>
</template>

<script>
import MenuNavigation from './MenuNavigation.vue';
export default {
  components: { MenuNavigation },
};
</script>

<style lang="scss" scoped></style>
