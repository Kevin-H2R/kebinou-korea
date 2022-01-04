<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">

      <p class="article__p">Hop hop hop! On arrête de baver sur son clavier ou sur
        son écran de <vocab-word v-bind="vocab.phone"/> et on lit les infos que Kebinou est allé chercher sur
        ce legendaire 호떡 (Hotteok) au Nutella.</p> <p class="article__p">D'arbord, c'est quoi un 호떡
      (Hotteok) ? Et bien je vais te le dire petit gourmand! C'est un dessert,
      que l'on peut comparer à une crêpe fourée. On en trouve un peu partout en Corée
      et particulièrement quand les températures commencent à chuter. On en
      trouve généralement dans des stands de street foods.</p>

      <v-img class="mt-16" src="@/assets/articles/hotteok/stand.jpg" max-height="400" contain alt="Stand de street food"/>
      <div class="text-center mb-16"><i class="text-caption">{{ $t('streetFoodCaption') }}</i></div>

      <p class="article__p">L'origine semble venir de travailleurs Chinois ayant debarqués en Corée du Sud en 1927
        et ayant rapidement développés pleins de recette de plats peu chers afin de pouvoir les
        vendre aux plus pauvres. L'un d'eux était le 호떡.<br><i>Je parle ici de l'origine du 호떡 qu'on
          trouve partout en Corée aujourd'hui. Il semblerait que le vrai 호떡 voit son origine remonter
          à la fin du 19ème siècle.</i></p>
      <p class="article__p">La préparation est assez simple: Farine de blé, lait, sucre, levure pour la pâte, qui peut
        ensuite être farçie avec un mélange de plusieurs aliments dont :
        cassonade, miel, cacahuètes, cannelle et graines de sésame.<br>Le tout est ensuite frit.</p>

      <v-img class="mt-16" src="@/assets/articles/hotteok/hotteok.jpg" max-height="400" contain alt="Hottoek au Nutella"/>
      <div class="text-center mb-16"><i class="text-caption">{{ $t('hotteokCaption') }}</i></div>

      <p class="article__p">Quand j'ai entendu parler du 호떡 la première fois, j'ai évidemment voulu me jetter sur
        le premier que je croiserais, étant un <span class="font-weight-bold">graaaaaaand</span> amateur de crêpes.
        C'est donc autour de mon quartier d'Hongdae que je rencontre le Graal un soir. Et j'avoue
        avoir été un peu déçu :<br> Très peu de garniture et trop cuit, plus proche du carton que d'un dessert.
        Les yeux doux de la <vocab-word v-bind="vocab.granny"/> tenant le stand ne m'auront pas reconfortés de la petite déception
        que je venais de vivre je l'admet.<br>
        Maaaaaais, je ne m'avoue pas vaincu et le second que je tente ailleurs était succulent.
        Le prix est en général de 1000₩ (~0.75€), mais est sujet à variations notamment si vous tenez un
        호떡 avec un goût différent de l'original.</p>
      <p class="article__p">En parlant de ça (quelle transition), j'avais justement entendu parler d'une légende,
        d'un mythe, un 호떡 rare qui donnerait un ticket allé-simple pour le paradis en classe business. J'ai nommé :
        <span class="font-weight-bold">le 호떡 au Nutella.</span></p>
      <p class="article__p">Ni une, ni deux, j'enfourche mon <vocab-word v-bind="vocab.bike"/>
        (première fois que je re faisait du vélo en ~15ans)
        et je pars pour 1h30 de balade au bord de la <vocab-word v-bind="vocab.hanRiver"/> jusqu'à ce sanctuaire du bonheur
        (il fallait que je dépense un max de kcal avant la rencontre avec ce 호떡, avec qui je déciderai
        de me marier, ndlr). Et bien la promesse a été tenue, c'est du plaisir pur et dur. Chargé juste
        ce qu'il faut en Nutella. Je n'ai pas envie de trop spoil celles et ceux qui testeront un jour,
        mais on imagine très bien à quel point j'ai longuement hésité à m'installer définitivement dans
        cette boutique.<br><i>Oui celui-là est devenu tellement célèbre qu'on ne le trouve pas dans un stand
          de street food comme je l'avais précisé avant, mais dans sa propre petite boutique.</i></p>

      <v-img class="mt-16" src="@/assets/articles/hotteok/video.gif" max-height="400" contain alt="Gif d'un Hotteok au Nutella"/>
      <div class="text-center mb-16"><i class="text-caption">No comment 🤤</i></div>

      <p class="article__p">Si vous allez le tester, envoyez-moi un message et taggez-moi sur vos story insta
        (<a href="https://www.instagram.com/kebinou_korea/" target="_blank">@kebinou_korea</a>).
        Partagons cette nouvelle religion du 호떡 hehe!<br> Bisous.</p>

      <span class="text-caption">2021-11-22</span>

      <v-divider class="ma-16"/>

      <v-row class="mb-16">
        <vocab-list :vocab="vocab"/>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import VocabWord from "../../VocabWord";
import VocabList from "../../VocabList";
export default {
  name: "fr-hotteok-content",
  components: {VocabWord, VocabList},
  data() {
    return {
      vocab: {
        phone: {word: 'téléphone', korean: '전화', phonetic: 'jeonhwa'},
        granny: {word: 'mamie', korean: '할머니', phonetic: 'halmeoni'},
        bike: {word: 'vélo', korean: '자전거', phonetic: 'jajeongeo'},
        hanRiver: {word: 'rivière Han', korean: '한강', phonetic: 'hangang'},
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/scss/article.scss";
</style>
