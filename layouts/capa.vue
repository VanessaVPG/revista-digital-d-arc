<template>
  <div class="min-vh-100">
    <main>
      <nuxt />
    </main>
  </div>
</template>
<script>
export default {
  name: 'Capa',
};
</script>
<style lang="scss" scoped>
main {
  background: url('~/assets/img/capa/bg.png');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
