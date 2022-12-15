<template>
  <b-container>
    <section id="jogo-e-mundo" class="mt-5" style="width: 100%; height: ">
      <b-row class="d-flex justify-content-between">
        <b-img v-if="$screen.md" fluid src="~/assets/img/menu/logo-menu.png" />
        <MenuNavigation />
      </b-row>
      <div class="mt-5 d-flex justify-content-center">
        <a href="https://jogo-quiz-vanessavpg.vercel.app/">
          <b-img role="button" fluid src="~/assets/img/jogo/jogo.png" />
        </a>
        <b-button
          href="https://jogo-quiz-vanessavpg.vercel.app/"
          class="play bg-transparent border-0 position-absolute"
        >
          <b-img src="~/assets/img/jogo/botao-jogo.svg" />
        </b-button>
      </div>
    </section>
  </b-container>
</template>
<script>
export default {};
</script>

<style></style>
