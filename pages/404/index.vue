<template>
  <b-container>
    <h1>
      Não estamos conseguimos encontrar a página que você está procurando.
    </h1>
  </b-container>
</template>

<script>
export default {
  name: 'NotFound',

  head() {
    return {
      bodyAttrs: {
        class: 'not-found',
      },

      title: `Página não encontrada |  ${process.env.title}`,

      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.not-found {
  padding: 19.3vh 0;

  h1 {
    &.title {
      line-height: 1.2;
    }
  }
}
</style>
