<template>
  <b-container class="min-vh-100">
    <b-row class="w-100">
      <div class="triangulo-preto pt-5 px-3">
        <b-img fluid src="~/assets/img/capa/triangulo-preto-azul-capa.png" />
      </div>
      <div class="pt-5 logo">
        <b-img fluid src="~/assets/img/capa/logo-darc.png" />
      </div>
    </b-row>
    <b-row>
      <div class="pt-5 px-3 triangulo">
        <b-img fluid src="~/assets/img/capa/triangulo.png" />
      </div>
      <section>
        <NuxtLink to="/sessoes">
          <div
            class="abra-sua-mente d-flex justify-content-center align-items-center flex-column position-relative"
          >
            <h1 class="text-center">
              ABRA SUA MENTE<span class="pisca">|</span>
            </h1>
            <div class="abra-sua-mente-sombra2 position-relative">
              <div class="abra-sua-mente-sombra1 position-relative"></div>
            </div>
          </div>
        </NuxtLink>
      </section>
      <div class="pt-5">
        <b-img fluid src="~/assets/img/capa/estrela-capa-3.png" />
      </div>
    </b-row>
    <b-row class="p-0 m-0 d-flex justify-content-between align-items-center">
      <b-img
        v-if="$screen.lg"
        class="raio"
        fluid
        src="~/assets/img/capa/raio.svg"
      />
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Capa',
  layout: 'capa',

  head() {
    return {
      title: `Revista DARC | ${process.env.title}`,
    };
  },
};
</script>
<style lang="scss" scoped>
.container {
  z-index: 10 !important ;
  .triangulo-preto {
    animation: triangle 3s linear;
  }
  .triangulo {
    animation: triangleSeta 3s linear;
  }
  .logo {
    animation: logo-animation 1s linear;
  }
  .pisca {
    animation: logo-animation 2s infinite;
  }
  .feminismo {
    margin-right: 100px;
    max-height: 150px;
    border-radius: 100%;
  }
  @keyframes logo-animation {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 0;
    }
    50% {
      opacity: 100%;
    }
    75% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }
  @keyframes triangle {
    0% {
      scale: 0;
    }
    25% {
      scale: 25%;
    }
    50% {
      scale: 60%;
    }
    75% {
      scale: 110%;
    }
    100% {
      scale: 100%;
    }
  }
  @keyframes triangleSeta {
    0% {
      scale: 0;
    }
    25% {
      scale: 25%;
    }
    50% {
      scale: 60%;
      rotate: 30deg;
    }
    75% {
      scale: 110%;
      rotate: 60deg;
    }
    100% {
      scale: 100%;
      rotate: 890deg;
    }
  }
  .row {
    display: flex;
    padding-top: 40px;
  }
  section {
    padding: 20px;
    .abra-sua-mente {
      text-decoration: none;
      height: 5.086875rem;
      border-radius: 10px;
      background: var(--pink);
      width: 17.238125rem;
    }
    .abra-sua-mente h1 {
      position: absolute;
      z-index: 1000;
      font-size: 1.5rem;
      color: var(--yellow);
    }
    .abra-sua-mente-sombra1 {
      width: 17.238125rem;
      height: 5.086875rem;
      top: -10px;
      background: #0c0b0d;
      border-radius: 10px;
      right: 4px;
    }
    .abra-sua-mente-sombra2 {
      background: var(--blue);
      width: 17.238125rem;
      height: 5.086875rem;
      border-radius: 10px;
    }
  }
  .raio {
    margin-left: 200px;
  }
}
</style>
