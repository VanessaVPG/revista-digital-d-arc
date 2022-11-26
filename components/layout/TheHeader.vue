<template>
  <header class="bg-info fixed-top py-3">
    <b-container class="d-flex justify-content-between">
      <h1>Header</h1>

      <b-nav pills>
        <b-nav-item class="text-white" to="/">Home</b-nav-item>
        <b-nav-item class="text-white" to="/login">Login</b-nav-item>
      </b-nav>
    </b-container>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
};
</script>

<style lang="scss" scoped>
header {
  a {
    color: #fff;
  }
}
</style>
