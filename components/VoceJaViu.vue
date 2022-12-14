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
          <b-img v-if="image" fluid :src="content.image" />
          <iframe
            v-if="!image"
            style="border-radius: 12px"
            color="black"
            width="100%"
            height="100%"
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
      <div class="interprete-musicas d-flex justify-content-end">
        <b-img fluid src="~/assets/img/voce-ja-viu/interprete.png" />
      </div>
      <div class="background-musicas">
        <div style="max-width: 600px; margin-inline: auto" class="pb-5">
          <div
            class="elemento-musicas d-flex align-self-center justify-content-end mb-5"
          >
            <svg
              width="127"
              height="118"
              viewBox="0 0 127 118"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40.9705 74.1327L1.18694 64.2874L29.6262 34.7972L58.3007 5.11504L69.6234 44.6641L80.9461 84.2133L40.9705 74.1327Z"
                fill="#0E100D"
              />
              <path
                d="M78.529 108.134L38.767 98.0755L67.2063 68.5853L95.8592 39.1167L107.203 78.4522L118.526 118.001L78.529 108.134Z"
                fill="#4BD4FE"
              />
              <path
                d="M112.316 113.275L26.2362 91.8471L87.9258 27.959L112.316 113.275ZM70.1878 98.8773L106.811 107.972L85.8891 35.3047L33.3512 89.7612L70.1878 98.8773Z"
                fill="black"
              />
            </svg>
          </div>
          <div class="musicas-delas">
            <b-img fluid src="~/assets/img/voce-ja-viu/musicas-delas.svg" />
          </div>
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/playlist/0F3K3GsErK9hNB83gXRMzx?utm_source=generator&theme=0"
            width="100%"
            height="380"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            class="spot"
          ></iframe>
        </div>
      </div>
      <Button class="mt-5" />
    </section>
    <section class="artistas my-5 py-5">
      <b-row class="justify-content-center">
        <StarBright />
        <h2>Artistas que inspiram</h2>
        <b-img fluid src="~/assets/img/voce-ja-viu/bandeiras-artistas.svg" />
      </b-row>
      <Flicking
        :options="{ circular: true, horizontal: false }"
        :plugins="autoplay"
        class="d-flex justify-content-center container-artistas"
      >
        <div
          v-for="artista in artistas"
          :key="artista.id"
          class="carousel-artistas"
        >
          <h3>{{ artista.name }}</h3>
          <div class="d-flex justify-content-around">
            <div class="arte">
              <b-img :src="artista.arte" />
            </div>
            <div class="pessoa-artista">
              <b-img :src="artista.pessoa" />
            </div>
          </div>
        </div>
      </Flicking>
      <Button class="my-5" />
    </section>
    <section class="escritoras">
      <div
        class="elemento-escritoras d-flex align-self-center justify-content-center mb-5"
      >
        <svg
          width="127"
          height="118"
          viewBox="0 0 127 118"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40.9705 74.1327L1.18694 64.2874L29.6262 34.7972L58.3007 5.11504L69.6234 44.6641L80.9461 84.2133L40.9705 74.1327Z"
            fill="#0E100D"
          />
          <path
            d="M78.529 108.134L38.767 98.0755L67.2063 68.5853L95.8592 39.1167L107.203 78.4522L118.526 118.001L78.529 108.134Z"
            fill="#4BD4FE"
          />
          <path
            d="M112.316 113.275L26.2362 91.8471L87.9258 27.959L112.316 113.275ZM70.1878 98.8773L106.811 107.972L85.8891 35.3047L33.3512 89.7612L70.1878 98.8773Z"
            fill="black"
          />
        </svg>
      </div>
      <b-row class="d-flex justify-content-around w-50">
        <StarBright />
        <h2>Escritoras Extraordinárias</h2>
        <b-img src="~/assets/img/voce-ja-viu/elemento-filmes-tracos.svg" />
      </b-row>
      <Flicking
        :options="{
          circular: true,
          horizontal: true,
          useFractionalSize: true,
        }"
      >
        <div class="livro shadow my-5"></div>
      </Flicking>
      <Button class="mt-5" />
    </section>
  </b-container>
</template>
<script>
import { Arrow, AutoPlay } from '@egjs/flicking-plugins';
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
      autoplay: [new AutoPlay()],
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
      artistas: [
        {
          pessoa: require('~/assets/img/voce-ja-viu/julia-artista.jpeg'),
          arte: require('~/assets/img/voce-ja-viu/julia-arte.jpeg'),
          name: 'Júlia Leandro Lopes',
        },
        {
          pessoa: require('~/assets/img/voce-ja-viu/criola-artista.jpeg'),
          arte: require('~/assets/img/voce-ja-viu/criola.jpeg'),
          name: 'Tainá Lima (Criola)',
        },
        {
          pessoa: require('~/assets/img/voce-ja-viu/tarsila-artista.jpeg'),
          arte: require('~/assets/img/voce-ja-viu/tarsila-arte.jpeg'),
          name: 'Tarsila do Amaral',
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
  .voce-ja-viu-carousel {
    flex-direction: column;
    max-height: 1000px;
  }
  .text,
  .imagem-video {
    max-width: 100% !important;
    width: 100% !important;
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
  background-repeat: no-repeat;
}
section .mulheres-inspiram .background-musicas,
.musicas-delas {
  margin-bottom: 1rem;
}
.musicas-delas {
  display: flex;
  align-self: flex-end;
  margin-bottom: 0;
  padding-bottom: 0;
  justify-content: flex-end;
}
.musicas-delas img {
  max-width: 300px;
}
.interprete-musicas {
  margin-bottom: 30px;
}
.elemento-musicas svg :hover {
  fill: var(--purple);
}
.elemento-musicas {
  rotate: 10deg;
  animation: element 3s infinite linear;
}
@keyframes element {
  0% {
    transform: rotateX(30deg);
  }
  50% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(30deg);
  }
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
.spot {
  position: relative;
}
.spot::before {
  width: 600px;
  height: 380px;
  position: absolute;
  background: black;
  border-radius: 12px;
  content: '';
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
.artistas {
  background: url('~/assets/img/voce-ja-viu/bg-artistas.svg');
}
.artistas {
  h2 {
    font-family: 'Rubik', sans-serif;
    color: white;
    width: 250px;
    font-weight: 900;
  }
  .arte,
  .pessoa-artista {
    width: 400px;
    height: 400px;
    position: relative;
  }
  .arte::before {
    content: '';
    width: 400px;
    height: 400px;
    background: var(--pink-100);
    border-radius: 100%;
    left: -15px;
    top: -15px;
    position: absolute;
    z-index: -1;
  }
  .pessoa-artista::before {
    content: '';
    width: 400px;
    height: 400px;
    background: var(--yellow-100);
    border-radius: 100%;
    right: -15px;
    top: -15px;
    position: absolute;
    z-index: -1;
  }
  .pessoa-artista::after {
    content: url('~/assets/img/voce-ja-viu/tracinho-artistas.svg');
    position: absolute;
    max-width: 60px;
  }
  .arte img,
  .pessoa-artista img {
    border-radius: 100%;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .carousel-artistas {
    height: 100%;
  }
  .container-artistas {
    max-height: 430px;
    margin-block: 50px;
  }
  .carousel-artistas {
    h3 {
      color: white;
      text-align: center;
      font-family: 'Rubik', sans-serif;
      font-weight: 600;
    }
  }
}
section .escritoras {
  background: url('~/assets/img/voce-ja-viu/escritoras-bg.svg');
  .elemento-escritoras {
    transform: translateY(10deg);
    animation: element 3s infinite linear;
  }
  @keyframes element {
    0% {
      transform: rotateX(30deg);
    }
    50% {
      transform: rotateX(0deg);
    }
    100% {
      transform: rotateX(30deg);
    }
  }
  h2 {
    font-family: 'Rubik', sans-serif;
    color: white;
    width: 250px;
    font-weight: 900;
  }
}
.livro {
  width: 400px;
  height: 300px;
  border-radius: 12px;
  background: white;
}
</style>
