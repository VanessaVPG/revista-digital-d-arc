<template>
  <b-container id="voce-ja-viu">
    <b-row class="d-flex justify-content-between">
      <star-bright v-if="$screen.md" />
      <menu-navigation />
    </b-row>
    <b-row class="title">
      <h1>
        <span class="filmes">Filmes</span> e
        <span class="series">séries</span> que
        <b-img
          src="~/assets/img/voce-ja-viu/elemento-filmes-tracos.svg"
          class="tracos"
        /><br />
        <span class="pl-4">fazem a</span>
        <span class="diferenca">diferença</span>
      </h1>
      <br />
    </b-row>
    <b-row class="d-flex justify-content-around pipoca-seta">
      <b-img src="~/assets/img/voce-ja-viu/pipoca.png" class="pipoca" />
      <b-img src="~/assets/img/voce-ja-viu/seta.svg" class="seta" />
      <b-img src="~/assets/img/voce-ja-viu/seta-group.svg" />
    </b-row>

    <Flicking
      :options="{ circular: true }"
      :plugins="plugins"
      class="d-flex justify-content-center align-items-center"
    >
      <div
        v-for="(content, index) in contents"
        :key="index"
        class="voce-ja-viu-carousel d-flex justify-content-center"
      >
        <div class="text w-50">
          <h2>{{ content.title }}</h2>
          <p>{{ content.text }}</p>
        </div>
        <div class="w-50 imagem-video">
          <b-img fluid v-if="image" :src="content.image" />
          <iframe
            color="black"
            width="100%"
            height="100%"
            v-if="!image"
            :src="`https://www.youtube.com/embed/${content.video}`"
            :title="content.title"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="yout"
          ></iframe>
        </div>
      </div>
      <span slot="viewport" class="flicking-arrow-prev is-thin"></span>
      <span slot="viewport" class="flicking-arrow-next is-thin"></span>
    </Flicking>
    <Button class="mt-5" />
    <section class="mulheres-inspiram">
      <div class="background-musicas">
        <h2>Músicas Delas</h2>
      </div>
    </section>
  </b-container>
</template>
<script>
import { Arrow } from '@egjs/flicking-plugins';
import '@egjs/flicking-plugins/dist/flicking-plugins.css';
import { Flicking } from '@egjs/vue-flicking';
import '@egjs/flicking-plugins/dist/arrow.css';
import '@egjs/vue-flicking/dist/flicking.css';
import StarBright from './layout/StarBright.vue';
export default {
  components: { StarBright, Flicking },
  data() {
    return {
      image: false,
      plugins: [new Arrow()],
      contents: [
        {
          title: 'Radioativo',
          text: 'Movida por uma mente brilhante e uma grande paixão, Marie Curie embarca em uma jornada científica com o marido, Pierre, para explicar elementos radioativos até então desconhecidos. Logo se torna evidente que seu trabalho pode levar salvar milhares de vidas se aplicado na medicina - ou destruir bilhões se for usado na guerra.',
          image: require('~/assets/img/voce-ja-viu/radioativo.jpg'),
          video: 'mU0oOUTo5zo',
        },
        {
          title: 'As sufragistas',
          text: 'O início da luta do movimento feminista e os métodos incomuns de batalha. A história das mulheres que enfrentaram seus limites na luta por igualdade e pelo direito de voto. Elas resistiam à opressão de forma passiva, mas, a partir do momento em que começaram a sofrer uma crescente agressão da polícia, decidiram se rebelar publicamente.',
          image: require('~/assets/img/voce-ja-viu/radioativo.jpg'),
          video: 'e88IJJv7PLQ',
        },
        {
          title: 'Suprema',
          text: "Acompanhe a história de Ruth Bader Ginsburg, uma juíza da Suprema Corte que foi nomeada para o Supremo Tribunal no ano de 1993 pelo presidente Bill Clinton e, assim, se tornando a segunda juíza mulher, depois de Sandra Day O'Connor.",
          image: require('~/assets/img/voce-ja-viu/radioativo.jpg'),
          video: 'FaKL-uN4Mi',
        },
        {
          title: 'Estrelas além do tempo',
          text: 'No auge da corrida espacial travada entre Estados Unidos e Rússia durante a Guerra Fria, uma equipe de cientistas da NASA, formada exclusivamente por mulheres afro-americanas, provou ser o elemento crucial que faltava na equação para a vitória dos Estados Unidos, liderando uma das maiores operações tecnológicas registradas na história americana e se tornando verdadeiras heroínas da nação',
          image: require('~/assets/img/voce-ja-viu/radioativo.jpg'),
          video: 'wx3PVtrU-Os',
        },
        {
          title: 'Adoráveis mulheres',
          text: 'Nos anos seguintes à Guerra de Secessão, Jo March e suas duas irmãs voltam para casa quando Beth, a tímida irmã caçula, desenvolve uma doença devastadora que muda para sempre a vida delas.',
          image: require('~/assets/img/voce-ja-viu/radioativo.jpg'),
          video: '7nc1GE_hnLs',
        },
        {
          title: 'Eu não sou um homem fácil',
          text: 'Um machista inveterado prova de seu próprio veneno ao acordar em um mundo dominado por mulheres, onde entra em conflito com uma poderosa escritora.',
          image: require('~/assets/img/voce-ja-viu/radioativo.jpg'),
          video: 'Z31q8m_hxJY',
        },
        {
          title: 'Histórias cruzadas',
          text: 'Nos anos 60, no Mississipi, Skeeter é uma garota da alta sociedade que retorna determinada a se tornar escritora. Ela começa a entrevistar as mulheres negras da cidade, que deixaram suas vidas para trabalhar na criação dos filhos da elite branca, da qual a própria Skeeter faz parte. Aibileen Clark, a emprega da melhor amiga de Skeeter, é a primeira a conceder uma entrevista. Apesar das críticas, Skeeter e Aibileen continuam trabalhando juntas e, aos poucos, conseguem novas adesões.',
          image: require('~/assets/img/voce-ja-viu/radioativo.jpg'),
          video: 'L4B8nJnSjDs',
        },
        {
          title: 'Que horas ela volta?',
          text: 'A pernambucana Val se mudou para São Paulo com o intuito de proporcionar melhores condições de vida para a filha, Jéssica. Anos depois, a garota lhe telefona, dizendo que quer ir para a cidade prestar vestibular. Os chefes de Val recebem a menina de braços abertos, porém o seu comportamento complica as relações na casa.',
          image: require('~/assets/img/voce-ja-viu/radioativo.jpg'),
          video: 'Dffs46VCJ_g',
        },
        {
          title: 'Eu não sou uma bruxa',
          text: 'Uma menina de oito anos é condenada por bruxaria e forçada a viver em uma comunidade sob a custódia do estado.',
          image: require('~/assets/img/voce-ja-viu/radioativo.jpg'),
          video: 'cSGXG9Bx2-E',
        },
        {
          title: 'Mary Shelley?',
          text: 'Mary é uma aspirante a escritora de 16 anos que conhece e se apaixona pelo poeta Percy Bysshe Shelley, de 21 anos, durante uma viagem à Escócia. Quando ele viaja para Londres para conhecer o pai de Mary, eles começam um romance tórrido, apesar da oposição de seu pai. Os dois fogem juntos e viram hóspedes do também poeta Lord Byron, que os desafia a escrever uma história de terror. Assim, Mary escreve "Frankenstein".',
          image: require('~/assets/img/voce-ja-viu/radioativo.jpg'),
          video: 'T-WGaZaojFc',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 991px) {
  h1 {
    font-size: 1.5rem;
  }
}
.voce-ja-viu-carousel {
  border-radius: 10px;
  max-height: 500px;
  max-width: 100%;
  color: #ffffff8c;
}
.yout svg path {
  fill: var(--purple) !important;
}
.flicking-arrow-prev::before,
.flicking-arrow-prev::after,
.flicking-arrow-next::before,
.flicking-arrow-next::after {
  background: var(--pink-100);
}
.flicking-camera {
  width: 100%;
  overflow: hidden;
}
.flicking-viewport {
  overflow: hidden;
}
section .mulheres-inspiram {
  background: url('~/assets/img/voce-ja-viu/background-artistas.svg');
  background-position: center;
  background-size: cover;
  height: 1000px;
  background-repeat: no-repeat;
}
section .mulheres-inspiram .background-musicas,
h2 {
  margin-bottom: 1rem;
}
p {
  width: 100%;
}
.title {
  display: flex;
  align-content: center;
  justify-content: center;
  max-width: 993px;
  height: 275.61px;
}
.text {
  max-width: 30%;
}
.pipoca-seta {
  max-width: 993px;
}
.seta {
  transform: translateY(-100px);
}
h1 {
  color: #ffffff;
  max-width: 500px;
  font-weight: 400;
}
.filmes {
  background: var(--purple);
  border-radius: 8px;
  padding: 6px;
}
.imagem-filme {
  height: 100%;
  width: 100%;
  margin: 10px;
}
.series {
  font-weight: 700;
}
.diferenca {
  border: 1px solid var(--yellow-100);
  border-radius: 0px 30px 0px 30px;
  padding-inline: 10px;
}
.tracos {
  transform: translateY(-12px);
}
.pipoca {
  transform: translateY(-40px);
}
</style>
