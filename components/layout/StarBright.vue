<template>
  <div>
    <b-img
      fluid
      class="star mr-5"
      src="~/assets/img/capa/estrela-capa-3.png"
    ></b-img
    ><b-img
      fluid
      class="star"
      src="~/assets/img/capa/estrela-capa-2.png"
    ></b-img>
  </div>
</template>

<script>
export default {};
</script>

<style>
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
.star {
  animation: star-bright 2s linear infinite;
}
</style>
