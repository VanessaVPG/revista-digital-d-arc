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
          text: 'Nascida em um pequeno vilarejo na Fran??a, teve sua breve vida (1412-1431), evidenciada por diversos t??tulos, sendo o mais not??rio, o de grande guerreira, aos 17 anos formou uma pequena guerrilha informal de soldados para a Guerra dos cem anos (1337-1453) em busca da vit??ria da Fran??a contra os Ingleses. Sendo logo depois autorizada oficialmente a lutar pela sua p??tria, comandando um batalh??o de mais de 7 mil soldados. Teve sua vida abreviada quando foi julgada por heresia pelos ingleses, e condenada a ser queimada na fogueira, aos 19 anos.',
        },
        {
          title: 'MARIA QUIT??RIA DE JESUS',
          photo: require('~/assets/img/mulheres/maria-quiteria.jpg'),
          text: 'Nasceu em 1792, na Bahia, n??o teve tanto reconhecimento como deveria, ela fez parte do Batalh??o ???Volunt??rios do Pr??ncipe Dom Pedro???, na Guerra da Independ??ncia do Brasil, alistou-se disfar??ada de homem, usando o pseud??nimo de Soldado Medeiros. Viveu seus ??ltimos anos no anonimato e veio a falecer em 1853. Muitos anos depois, em 1996, foi condecorada como Patrona do Quadro Complementar de Oficiais do Ex??rcito e teve seu nome mencionado no Livro dos Her??is da P??tria, em 2018.',
        },
        {
          title: 'DANDARA',
          photo: require('~/assets/img/mulheres/dandara.jpg'),
          text: 'Conhecida como a esposa de Zumbi dos Palmares, l??der quilombola brasileiro do     per??odo colonial, pouco se sabe sobre sua hist??ria, por??m, Dandara era tamb??m descrita como uma guerreira tem??vel, habilidosa na capoeira, e ativa em muitas batalhas pela liberta????o total das negras e negros no Brasil, al??m de n??o de adequar aos padr??es impostos ??s mulheres na ??poca, virando um simbolo de luta para mulhres negras. Acredita-se que ela cometeu suic??dio, ap??s ser presa em 1694, para n??o retornar a vida de escravid??o',
        },
        {
          title: 'HEDY LAMARR',
          photo: require('~/assets/img/mulheres/hedy.png'),
          text: 'A atriz de Holyywood, e inventora respons??vel pela cria????o de um elaborado aparelho de interferencia de r??dio, que serviu para bloquear o sistema de inteligencia de radares da Alemanha Nazista, e serviu como base para tecnologias modernas como o Wi-fi e CDMA (C??digo de Divis??o de Acesso M??ltiplo), usado em aparelhos celulares. Embora tenha tido reconhecimento apenas muitos anos depois, ela viveu para ver seu trabalho reconhecido na d??cada de 1990. ',
        },
        {
          title: 'MARIE  CURIE',
          photo: require('~/assets/img/mulheres/marie-curie.jpg'),
          text: 'Foi a primeira pessoa a receber dois pr??mios Nobel, e a ??nica a receber os pr??mios em ??reas diferentes, um em F??sica e  outro em Qu??mica, lhe foram concedidos pela descoberta da radioatividade, termo inventado por ela, em 1903 e pela descoberta de outros dois novos elementos da tabela peri??dica, o r??dio e o pol??nio, em 1910. Apesar da dificuldade de estudar em universidades, pois a maioria n??o a aceitava, apenas pelo fato de ser mulher, ela conquistou seu doutorado na Universidade de Paris, e hoje ?? a cientista mais conhecida do mundo,',
        },
        {
          title: 'CHIMAMANDA NGOZI ADICHIE',
          photo: require('~/assets/img/mulheres/chimanda.jpg'),
          text: 'Uma grande l??der do movimento feminista, Nascida na Nig??ria, atualmente ?? uma das mais importantes escritoras angl??fonas (que tem o ingl??s como l??ngua oficial ou dominante). Atraindo novos leitores jovens para a literatura Sul Africana.',
        },
        {
          title: 'MARIELLE FRANCISCO DA SILVA',
          photo: require('~/assets/img/mulheres/mariele.jpg'),
          text: 'Mais conhecida como Marielle Franco, foi uma vereadora brasileira assassinada aos 38 anos de idade, em uma emboscada no centro da capital fluminense, no dia 14 de mar??o de 2018. Soci??loga e ativista de direitos humanos, foi presidente da Comiss??o da Mulher na C??mara do Rio de Janeiro e fazia parte da comiss??o que investigava abusos das For??as Armadas e da pol??cia durante a interven????o federal na ??rea da Seguran??a P??blica do Estado.',
        },
        {
          title: 'CLARICE LISPECTOR',
          photo: require('~/assets/img/mulheres/clarisse.jpg'),
          text: 'T??mida e ousada, ca??tica e intensa, s??o adjetivos que sempre estiveram presentes na vida e na obra de Clarice Lispector. Principal nome de uma tend??ncia intimista na literatura brasileira, Clarice prop??s uma viagem ao consciente individual: a experi??ncia interior passa para o primeiro plano da cria????o liter??ria, deixando em segundo plano o meio externo, o homem e sua condi????o social. Por isso, Clarice Lispector acabou se tornando uma uma lenda da literatura do s??culo XX, uma das escritoras mais not??veis e importantes da literatura brasileira, n??o somente no Brasil, mas em toda a literatura ocidental.',
        },
        {
          title: 'Rosa Parks',
          photo: require('~/assets/img/mulheres/rosa.png'),
          text: 'Nascida no Alabama, em 1913vUma mulher muito importante para as conquistas do povo negro nos EUA foi Rosa Parks. Rosa nasceu em 1913 no Alabama, ao sul do pa??s, regi??o onde a segrega????o racial foi intensa. Em 1955 marcou a hist??ria como ativista quando se recusou a ceder seu lugar a uma pessoa branca em um ??nibus. Na ??poca, as leis de segrega????o eram r??gidas e os ??nibus tinham assentos reservados a passageiros brancos. Devido a sua atitude, a ativista foi presa. Isso gerou indigna????o na popula????o negra e impulsionou grandes protestos que resultaram na anula????o das leis de segrega????o racial.',
        },
        {
          title: 'Malala Yousafzai',
          photo: require('~/assets/img/mulheres/malala.jpg'),
          text: 'Ela defendeu que as meninas pudessem frequentar escolas em seu pa??s. Por isso, Malala foi perseguida e sofreu um atentado em 2012, quando voltava da escola em um ??nibus. Depois de meses em tratamento, Malala se recuperou e fundou a Malala Fund, funda????o que arrecada verba para destinar ?? educa????o de meninas em todo o mundo.',
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
