<template>
  <b-container id="mulheres">
    <b-row class="d-flex justify-content-between">
      <b-img v-if="$screen.md" fluid src="~/assets/img/menu/logo-menu.png" />
      <menu-navigation />
    </b-row>
    <div class="d-flex justify-content-between raio">
      <star-bright class="ml-5" />
      <svg
        width="60"
        height="95"
        viewBox="0 0 60 95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_18_26172)">
          <path
            d="M38.4 0L21.5 29.7H34.2L21.5 59.3L59.6 21.2H46.9L59.6 0H38.4Z"
            fill="#FFFF95"
          />
          <path
            d="M0 94.8998L14 62.1998H1.1L19.1 30.7998H42.4L29.6 51.9998H42.9L0 94.8998ZM4.1 60.3998H16.6L5.2 87.0998L38.6 53.6998H26.5L39.2 32.4998H20.1L4.1 60.3998Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_18_26172">
            <rect width="59.6" height="94.9" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>

    <Flicking :options="{ circular: true }" :plugins="plugins">
      <div
        v-for="(content, index) in contents"
        :key="index"
        class="mulheres-carousel"
      >
        <div class="d-flex">
          <div class="img-mulheres-elemento-bg">
            <b-img
              :src="content.photo"
              class="imagem-arredondada position-relative"
            ></b-img>
            <b-img
              src="~/assets/img/mulheres/elemento-foto-mulheres.svg"
              class="elemento-foto-mulheres position-absolute"
            />
          </div>
        </div>
        <div class="title">
          <h1>{{ content.title }}</h1>
        </div>
        <p>
          {{ content.text }}
        </p>
      </div>
      <span slot="viewport" class="flicking-arrow-prev is-thin"></span>
      <span slot="viewport" class="flicking-arrow-next is-thin"></span>
    </Flicking>
    <Button />
  </b-container>
</template>
<script>
import { Arrow, Perspective } from '@egjs/flicking-plugins';
import '@egjs/flicking-plugins/dist/flicking-plugins.css';
import { Flicking } from '@egjs/vue-flicking';
import '@egjs/flicking-plugins/dist/arrow.css';
import '@egjs/vue-flicking/dist/flicking.css';
import MenuNavigation from './MenuNavigation.vue';
export default {
  components: { MenuNavigation, Flicking },
  data() {
    return {
      plugins: [
        new Arrow(),
        new Perspective({ rotate: -1, scale: 2, perspective: 600 }),
      ],

      contents: [
        {
          title: "Joana d'Arc",
          photo: require('~/assets/img/mulheres/darc.jpg'),
          text: 'Nascida em um pequeno vilarejo na França, teve sua breve vida (1412-1431), evidenciada por diversos títulos, sendo o mais notório, o de grande guerreira, aos 17 anos formou uma pequena guerrilha informal de soldados para a Guerra dos cem anos (1337-1453) em busca da vitória da França contra os Ingleses. Sendo logo depois autorizada oficialmente a lutar pela sua pátria, comandando um batalhão de mais de 7 mil soldados. Teve sua vida abreviada quando foi julgada por heresia pelos ingleses, e condenada a ser queimada na fogueira, aos 19 anos.',
        },
        {
          title: 'MARIA QUITÉRIA DE JESUS',
          photo: require('~/assets/img/mulheres/maria-quiteria.jpg'),
          text: 'Nasceu em 1792, na Bahia, não teve tanto reconhecimento como deveria, ela fez parte do Batalhão “Voluntários do Príncipe Dom Pedro”, na Guerra da Independência do Brasil, alistou-se disfarçada de homem, usando o pseudônimo de Soldado Medeiros. Viveu seus últimos anos no anonimato e veio a falecer em 1853. Muitos anos depois, em 1996, foi condecorada como Patrona do Quadro Complementar de Oficiais do Exército e teve seu nome mencionado no Livro dos Heróis da Pátria, em 2018.',
        },
        {
          title: 'DANDARA',
          photo: require('~/assets/img/mulheres/dandara.jpg'),
          text: 'Conhecida como a esposa de Zumbi dos Palmares, líder quilombola brasileiro do     período colonial, pouco se sabe sobre sua história, porém, Dandara era também descrita como uma guerreira temível, habilidosa na capoeira, e ativa em muitas batalhas pela libertação total das negras e negros no Brasil, além de não de adequar aos padrões impostos ás mulheres na época, virando um simbolo de luta para mulhres negras. Acredita-se que ela cometeu suicídio, após ser presa em 1694, para não retornar a vida de escravidão',
        },
        {
          title: 'HEDY LAMARR',
          photo: require('~/assets/img/mulheres/hedy.png'),
          text: 'A atriz de Holyywood, e inventora responsável pela criação de um elaborado aparelho de interferencia de rádio, que serviu para bloquear o sistema de inteligencia de radares da Alemanha Nazista, e serviu como base para tecnologias modernas como o Wi-fi e CDMA (Código de Divisão de Acesso Múltiplo), usado em aparelhos celulares. Embora tenha tido reconhecimento apenas muitos anos depois, ela viveu para ver seu trabalho reconhecido na década de 1990. ',
        },
        {
          title: 'MARIE  CURIE',
          photo: require('~/assets/img/mulheres/marie-curie.jpg'),
          text: 'Foi a primeira pessoa a receber dois prêmios Nobel, e a única a receber os prêmios em áreas diferentes, um em Física e  outro em Química, lhe foram concedidos pela descoberta da radioatividade, termo inventado por ela, em 1903 e pela descoberta de outros dois novos elementos da tabela periódica, o rádio e o polônio, em 1910. Apesar da dificuldade de estudar em universidades, pois a maioria não a aceitava, apenas pelo fato de ser mulher, ela conquistou seu doutorado na Universidade de Paris, e hoje é a cientista mais conhecida do mundo,',
        },
        {
          title: 'CHIMAMANDA NGOZI ADICHIE',
          photo: require('~/assets/img/mulheres/chimanda.jpg'),
          text: 'Uma grande líder do movimento feminista, Nascida na Nigéria, atualmente é uma das mais importantes escritoras anglófonas (que tem o inglês como língua oficial ou dominante). Atraindo novos leitores jovens para a literatura Sul Africana.',
        },
        {
          title: 'MARIELLE FRANCISCO DA SILVA',
          photo: require('~/assets/img/mulheres/mariele.jpg'),
          text: 'Mais conhecida como Marielle Franco, foi uma vereadora brasileira assassinada aos 38 anos de idade, em uma emboscada no centro da capital fluminense, no dia 14 de março de 2018. Socióloga e ativista de direitos humanos, foi presidente da Comissão da Mulher na Câmara do Rio de Janeiro e fazia parte da comissão que investigava abusos das Forças Armadas e da polícia durante a intervenção federal na área da Segurança Pública do Estado.',
        },
        {
          title: 'COCO CHANEL',
          photo: require('~/assets/img/mulheres/chanel.png'),
          text: 'Nos anos 1920, a revolucionária estilista francesa, Gabrielle Bonheur Chanel, transformou a moda, trocando os espartilhos e vestimentas pesadas e apertadas, por roupas confortáveis que traduziam a liberdade feminina, como por exemplo, a criação da primeira calça própria para mulheres. ',
        },
        {
          title: 'CLARICE LISPECTOR',
          photo: require('~/assets/img/mulheres/clarisse.jpg'),
          text: 'Tímida e ousada, caótica e intensa, são adjetivos que sempre estiveram presentes na vida e na obra de Clarice Lispector. Principal nome de uma tendência intimista na literatura brasileira, Clarice propôs uma viagem ao consciente individual: a experiência interior passa para o primeiro plano da criação literária, deixando em segundo plano o meio externo, o homem e sua condição social. Por isso, Clarice Lispector acabou se tornando uma uma lenda da literatura do século XX, uma das escritoras mais notáveis e importantes da literatura brasileira, não somente no Brasil, mas em toda a literatura ocidental.',
        },
        {
          title: 'Rosa Parks',
          photo: require('~/assets/img/mulheres/rosa.png'),
          text: 'Nascida no Alabama, em 1913vUma mulher muito importante para as conquistas do povo negro nos EUA foi Rosa Parks. Rosa nasceu em 1913 no Alabama, ao sul do país, região onde a segregação racial foi intensa. Em 1955 marcou a história como ativista quando se recusou a ceder seu lugar a uma pessoa branca em um ônibus. Na época, as leis de segregação eram rígidas e os ônibus tinham assentos reservados a passageiros brancos. Devido a sua atitude, a ativista foi presa. Isso gerou indignação na população negra e impulsionou grandes protestos que resultaram na anulação das leis de segregação racial.',
        },
        {
          title: 'Malala Yousafzai',
          photo: require('~/assets/img/mulheres/malala.jpg'),
          text: 'Ela defendeu que as meninas pudessem frequentar escolas em seu país. Por isso, Malala foi perseguida e sofreu um atentado em 2012, quando voltava da escola em um ônibus. Depois de meses em tratamento, Malala se recuperou e fundou a Malala Fund, fundação que arrecada verba para destinar à educação de meninas em todo o mundo.',
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@keyframes raio {
  0% {
    fill: var(--yellow-100);
  }
  49% {
    fill: var(--yellow-100);
  }
  50% {
    fill: black;
  }
  100% {
    fill: var(--purple);
    transform: translateX(15px);
    transform: translateY(20px);
  }
}
.flicking-arrow-prev::before,
.flicking-arrow-prev::after,
.flicking-arrow-next::before,
.flicking-arrow-next::after {
  background: var(--yellow-100);
}
.flicking-viewport {
  margin-top: 10px;
}

svg path {
  animation: raio 2s linear;
}
svg path:hover {
  fill: var(--purple);
  transform: translatex(-2px);
}
.raio {
  margin-right: 150px;
  margin-top: 40px;
}
.container {
  color: #ffffffb0;
}
h1 {
  font-family: 'Rubik', sans-serif;
  text-align: right;
  width: 200px;
  margin: 0px 40px 40px 0px;
  font-size: 2rem;
  color: #ffffff;
}
.title {
  display: flex;
  justify-content: right;
  width: 100%;
}
.mulheres-carousel {
  max-width: 800px;
  width: 400px;
}
.imagem-arredondada {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
}
.img-mulheres-elemento-bg::before {
  content: '';
  background: #7b07d6;
  width: 200px;
  height: 200px;
  left: -20px;
  position: absolute;
  border-radius: 50%;
}

.elemento-foto-mulheres {
  top: 80px;
  left: 120px;
}
@media screen and (max-width: 991px) {
  .row {
    max-width: 300px;
    .imagem-arredondada {
      max-width: 140px;
      max-height: 140px;
    }
  }
  .mulheres-carousel {
    max-width: 800px;
    width: 280px;
  }
}
</style>
