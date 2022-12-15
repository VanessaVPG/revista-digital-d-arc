<template>
  <b-container class="min-h-100">
    <b-row class="d-flex justify-content-between"
      ><b-img
        fluid
        class="vamos-viajar"
        src="~/assets/img/menu/vamos-viajar.png" />
      <b-img v-if="$screen.md" fluid src="~/assets/img/menu/logo-menu.png"
    /></b-row>
    <b-navbar class="bg mx-auto">
      <b-nav-item to="#mulheres" class="menu-mulheres"
        >MULHERES<br /><span>IMPORTANTES</span></b-nav-item
      >
      <b-nav-item to="#voce-ja-viu" class="voce-ja-viu"
        >VOCÊ JÁ <br /><span>VIU?</span></b-nav-item
      >
      <b-nav-item class="linha-do-tempo"
        >LINHA DO<br />
        <span>TEMPO</span></b-nav-item
      >
      <b-nav-item to="#jogo" class="jogo"
        >JOGO & <br /><span>MUNDO</span></b-nav-item
      >
    </b-navbar>
    <b-row class="w-100 d-flex justify-content-between align-items-center">
      <Button />
      <star-bright />
    </b-row>
  </b-container>
</template>
<script>
import Button from './layout/Button.vue';
import StarBright from './layout/StarBright.vue';
export default {
  name: 'Menu',
  components: { Button, StarBright },
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 768px) {
  .bg {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .voce-ja-viu,
  .menu-mulheres,
  .jogo,
  .linha-do-tempo {
    animation: none !important;
  }
}
@keyframes voce-ja-viu {
  0% {
    transform: translateY(-100px);
  }
  25% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(100px);
  }
  75% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-100px);
  }
}
@keyframes jogo {
  0% {
    transform: translateY(-100px);
  }
  25% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(100px);
  }
  75% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-100px);
  }
}
@keyframes linha-do-tempo {
  0% {
    transform: translateY(100px);
  }
  25% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-100px);
  }
  75% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(100px);
  }
}
@keyframes menu-mulheres {
  0% {
    transform: translateY(100px);
  }
  25% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-100px);
  }
  75% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(100px);
  }
}
@keyframes uhul {
  0% {
    transform: translateX(-1000px);
  }
  50% {
    transform: translateX(-10px);
    transform: rotate(-20deg);
  }
  75% {
    transform: translateX(-5px);
    transform: rotate(-20deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes star-bright {
  0% {
    scale: 100%;
    opacity: 0.5;
  }
  25% {
    scale: 125%;
    opacity: 0.7;
  }
  50% {
    scale: 150%;
    opacity: 0.8;
  }
  70% {
    scale: 125%;
    opacity: 1;
  }
  100% {
    scale: 100%;
    opacity: 0.7;
  }
}
.bg {
  display: flex;
  justify-content: space-between;
  margin-top: 82px;
  max-width: 948.21px;
  max-height: 360.34px;
  height: 360.34px;
  background: url(~/assets/img/menu/vamos-viajar-bg.png);
  background-size: contain;
  background-position-x: center;
  background-repeat: repeat-y;
  margin-bottom: 21px;
}
.vamos-viajar {
  animation: uhul 2s linear;
}
.star {
  animation: star-bright 2s linear infinite;
}
.voce-ja-viu,
.linha-do-tempo,
.menu-mulheres,
.jogo {
  font-weight: 700;
  width: 166.6px;
  height: 166.6px;
  border-radius: 100%;
  a {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #000000;

    justify-content: center;
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
.menu-mulheres:hover::before,
.jogo:hover::before,
.linha-do-tempo:hover::before,
.voce-ja-viu:hover::before {
  animation: hover-effect 0.5s linear;
}
@keyframes hover-effect {
  0% {
    transform: translateX(0px);
    transform: translateY(0px);
  }
  50% {
    scale: 140%;
    transform: translateX(6.97px);
    transform: translateY(8.32px);
  }
  100% {
    scale: 100%;
  }
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
</style>
