<template>
  <b-container id="linha-do-tempo">
    <b-row class="d-flex justify-content-between">
      <b-img v-if="$screen.md" fluid src="~/assets/img/menu/logo-menu.png" />
      <MenuNavigation />
    </b-row>
    <div>
      <b-card no-body>
        <b-tabs card>
          <b-tab
            v-for="table in tables"
            id="t"
            :key="table.id"
            :title="table.year"
            :style="background"
            active
          >
            <b-card-title class="text-center">{{ table.title }}</b-card-title>
            <div class="d-flex justify-content-around align-items-center mt-5">
              <b-img class="img-timeline" :src="table.imagem" />
              <b-card-text class="text-justify w-50">{{
                table.text
              }}</b-card-text>
            </div>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      background: {
        background: ['#f7134d'],
      },
      isActive: true,

      tables: [
        {
          year: '1827',
          title: '1827: Meninas são liberadas para frequentar escolas',
          text: 'A primeira conquista das mulheres brasileiras veio com uma lei em 1827, que permitia que meninas finalmente frequentassem colégios e estudassem além da escola primária.',
          imagem: require('~/assets/img/linha-do-tempo/1827.jpg'),
          bg: '#f7134d',
        },
        {
          year: '1832',
          title:
            '1832: É publicado Direitos das mulheres e injustiças dos homens, de Nísia Floresta',
          text: 'O livro é considerado o fundador do feminismo brasileiro. Na obra, a autora reforça que a mulher é tão capaz quanto o homem de assumir cargos de liderança e qualquer outra função. Nísia Floresta foi a primeira mulher a denunciar o mito de superioridade do homem publicamente, além de caracterizar as mulheres como seres inteligentes e merecedores de respeito.',
          imagem: require('~/assets/img/linha-do-tempo/1832.jpg'),
          bg: '#ffd310',
        },
        {
          year: '1852',
          title: '1852: Primeiro jornal feminino é criado',
          text: 'Editado por mulheres e direcionado para mulheres, surgiu o Jornal das Senhoras, que afirmava que as pessoas do sexo feminino não deveriam só aprender piano, bordado e costura. Depois disso, outros jornais também apareceram, como o Bello Sexo, em 1862 e O Sexo Feminino, em 1873.',
          imagem: require('~/assets/img/linha-do-tempo/1852.jpg'),
          bg: '#7b07d6',
        },
        {
          year: '1871',
          title: '1871: Lei do Ventre Livre é promulgada',
          text: 'Também conhecida como Lei Rio Branco, a Lei do Ventre Livre, assinada pela Princesa Isabel, determinava que os filhos das mulheres escravizadas na época do Império nasciam livres. A abolição da escravidão só aconteceu em 1888, através da Lei Áurea.',
          imagem: require('~/assets/img/linha-do-tempo/1871.jpg'),
          bg: '#f7134d',
        },
        {
          year: '1879',
          title: '1879: Mulheres podem ser aceitas em faculdades',
          text: 'Em 19 de abril, um decreto de lei permitiu que mulheres pudessem cursar o ensino superior, assim como já acontecia com os homens. Apesar de estarem dentro da legalidade, muitas enfrentaram preconceito ao ingressar em universidades.',
          imagem: require('~/assets/img/linha-do-tempo/1879.jpg'),
          bg: '#ffd310',
        },
        {
          year: '1885',
          title:
            '1885: Chiquinha Gonzaga se torna a primeira maestrina brasileira',
          text: 'Nesse ano, Chiquinha Gonzaga se tornou a primeira maestrina do Brasil. A compositora também era considerada uma mulher muito à frente do seu tempo e costumava desafiar o machismo e os padrões impostos pela sociedade. Na época, Chiquinha chegou a se separar de um marido que tentou fazê-la desistir da música.',
          imagem: require('~/assets/img/linha-do-tempo/1885.jpg'),
          bg: '#7b07d6',
        },
        {
          year: '1887',
          title: '1887:  Surge a primeira médica brasileira',
          text: 'Rita Lobato Freitas foi a primeira mulher a se formar em medicina no Brasil, pela Faculdade de Medicina da Bahia, além de ser a segunda na América Latina. Mesmo com a lei permitindo o ingresso de mulheres na faculdade, Rita sofreu muito preconceito de pessoas que ainda achavam que estudar era uma rebeldia, “coisa de menino”. Sua tese na conclusão do curso também foi centrada no feminino: a operação cesariana.',
          imagem: require('~/assets/img/linha-do-tempo/1887.jpg'),
          bg: '#f7134d',
        },
        {
          year: '1888',
          title: '1888: É declarado o fim da escravidão',
          text: 'Em 13 de maio de 1888, a Lei Áurea foi assinada pela Princesa Isabel e encerrou o período de escravidão no país, que durou cerca de três séculos. Princesa Isabel: primeira senadora brasileira e a primeira mulher a exercer a chefia de Estado no continente americano.',
          imagem: require('~/assets/img/linha-do-tempo/1888.jpg'),
          bg: '#ffd310',
        },
        {
          year: '1910',
          title: '1910: Nasce Patrícia Galvão, a Pagu',
          text: 'Embora tenha nascido em uma família burguesa, a escritora, jornalista e militante se afastou da sua classe social de origem e se juntou ao movimento comunista. Ela se tornou a primeira presa política da história brasileira e chegou a ir para a prisão mais de 20 vezes. Por quê? Basicamente, ela queria a igualdade entre os sexos.',
          imagem: require('~/assets/img/linha-do-tempo/1910.jpg'),
          bg: '#7b07d6',
        },
        {
          year: '1910',
          title: '1910: É criado o Partido Republicano Feminino',
          text: 'O partido reivindicava o direto ao voto e à emancipação feminina. Mais tarde, em 1917, as lideranças desse partido organizaram uma marcha com a presença de noventa mulheres.',
          imagem: require('~/assets/img/linha-do-tempo/1910.jpg'),
          bg: '#7b07d6',
        },
        {
          year: '1918',
          title: '1918: Maria Lacerda de Moura publica Em Torno da Educação',
          text: 'O livro também entra na lista de obras importantes que marcam o começo do feminismo brasileiro. Nele, Maria Lacerda defende o processo educacional na libertação feminina e reforça que a instrução é um fator indispensável na transformação da vida das mulheres.',
          imagem: require('~/assets/img/linha-do-tempo/1871.jpg'),
          bg: '#f7134d',
        },
        {
          year: '1919',
          title:
            '1919: Resolução de salários iguais para homens e mulheres é aprovada',
          text: 'A Conferência do Conselho Feminino da Organização Internacional do Trabalho (OIT) até chegou a aprovar uma resolução de salário igual para homens e mulheres que exercem a mesma função lá em 1919, mas a gente bem sabe que, infelizmente, a igualdade ainda não foi alcançada.',
          imagem: require('~/assets/img/linha-do-tempo/1919.jpg'),
          bg: '#ffd310',
        },
        {
          year: '1921',
          title: '1921: Primeiro jogo de futebol entre mulheres',
          text: 'A primeira partida de futebol feminino aconteceu em 1921, entre mulheres dos bairros de Tremembé e Cantareira, na zona norte de São Paulo. O jogo chegou a ser noticiado por jornais impressos da época como uma coisa “curiosa e cômica”. O primeiro time só surgiu em 1958, com o nome de Araguari Atlético Clube, em Minas Gerais.',
          imagem: require('~/assets/img/linha-do-tempo/1921.jpg'),
          background: '#7b07d6',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin-top: 150px;
}
.tabs {
  height: 400px !important;
}
.img-timeline {
  width: 150px;
  height: 150px;
  border-radius: 100px;
  border: 4px solid black;
}
.tabs {
  background: var(--yellow-100) !important;
}
</style>
