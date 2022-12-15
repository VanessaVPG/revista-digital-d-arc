<template>
  <b-navbar class="bg d-flex justify-content-around">
    <b-nav-item id="menu-mulheres" to="#mulheres" class="menu-mulheres"
      >MULHERES<br /><span>IMPORTANTES</span></b-nav-item
    >
    <b-nav-item id="menu-voce-ja-viu" to="#voce-ja-viu" class="voce-ja-viu"
      >VÔCE JÁ <br /><span>VIU?</span></b-nav-item
    >
    <b-nav-item
      id="menu-linha-do-tempo"
      to="#linha-do-tempo"
      class="linha-do-tempo"
      >LINHA DO<br />
      <span>TEMPO</span></b-nav-item
    >
    <b-nav-item id="menu-jogo" to="#jogo" class="jogo"
      >JOGO & <br /><span>MUNDO</span></b-nav-item
    >
  </b-navbar>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 768px) {
  .bg {
    margin-inline: auto;
  }
}
.bg {
  width: 392px;
  max-height: 200px;
  background: url('~/assets/img/menu/menu-navigation/menu-navigation-bg.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.voce-ja-viu,
.linha-do-tempo,
.menu-mulheres,
.jogo {
  font-weight: 700;
  width: 58px;
  height: 58px;
  border-radius: 100%;
  a {
    border-radius: 100%;
    display: flex;
    width: 58px;
    height: 58px;
    flex-direction: column;
    align-items: center;
    color: #000000;
    font-size: 0.5rem;
    justify-content: center;
    scroll-behavior: smooth;
  }
  span {
    font-weight: 400;
  }
}
.voce-ja-viu {
  background: var(--yellow-100);
  position: relative;
  animation: voce-ja-viu 6s infinite linear;
}
.voce-ja-viu::before {
  content: ' ';
  position: absolute;
  z-index: -1;
  top: -8.94px;
  right: -6.32px;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: 3px solid var(--yellow-100);
}

.linha-do-tempo {
  background: var(--pink-100);
  position: relative;
  animation: linha-do-tempo 6s infinite linear;
}
.linha-do-tempo::before {
  content: ' ';
  position: absolute;
  z-index: -1;
  bottom: -8.94px;
  right: -6.32px;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: 3px solid var(--pink-100);
}

.menu-mulheres {
  position: relative;
  background: var(--blue);
  animation: menu-mulheres 6s infinite linear;
}
.menu-mulheres::before {
  content: ' ';
  position: absolute;
  z-index: -1;
  top: -8.94px;
  left: -6.32px;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: 3px solid var(--blue);
}

.jogo {
  position: relative;
  background: var(--purple);
  animation: jogo 6s infinite linear;
}
.jogo::before {
  content: ' ';
  position: absolute;
  z-index: -1;
  bottom: -8.94px;
  right: -6.32px;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: 3px solid var(--purple);
}
#menu-mulheres a.nav-link.nuxt-link-exact-active.nuxt-link-active {
  background: var(--blue);
  scale: 150%;
  animation: active-link 0.5s ease-out;
}
#menu-voce-ja-viu a.nav-link.nuxt-link-exact-active.nuxt-link-active {
  background: var(--yellow-100);
  scale: 150%;
  animation: active-link 0.5s ease-out;
}
#menu-linha-do-tempo a.nav-link.nuxt-link-exact-active.nuxt-link-active {
  background: var(--pink-100);
  scale: 150%;
  animation: active-link 0.5s ease-out;
}
#menu-jogo a.nav-link.nuxt-link-exact-active.nuxt-link-active {
  background: var(--purple);
  scale: 150%;
  animation: active-link 0.5s ease-out;
}

@keyframes active-link {
  from {
    scale: 100%;
  }
  to {
    scale: 153%;
  }
}
</style>
