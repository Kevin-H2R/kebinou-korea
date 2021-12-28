<template>
  <v-container fluid class="article"
               style="padding-top: 100px">
    <div class="d-flex flex-column justify-center" style="height: 90vh">
      <v-row justify="center" align="center">
        <h1 class="article__title font-weight-light">{{ $t('mbc1') }}</h1>
      </v-row>
      <v-row>
        <v-img src="@/assets/articles/hotteok/cover.jpg" height="65vh" alt="Hotteok au Nutella"/>
      </v-row>
    </div>
    <div class="d-flex flex-column article__content">
      <v-row justify="center">
        <v-col cols="12" sm="10" md="8" lg="6">
<!--          <span v-html="$t('mbc2')">-->
            <p>Eh oui, j'ai eu l'IMMENSE opportunité de pouvoir participer à une émission télévisée produite par MBC
              (l'équivalent d'un Canal+ chez nous) et diffusée sur la chaine MBC Every1 et sur Netflix.
              L'émission s'appelle "어서와 한국은 처음이지 ?" (que l'on pourrait traduire par : "Bienvenue ! Première fois en Corée ?").
              Le principe de base est le suivant : l'émission suit un étranger fraichement arrivé en Corée,
              la production fait venir 2-3 amis de la personne et ils vont découvrir ensemble un ou plusieurs aspects de la
              culture Coréenne : nourriture, coutumes, traditions, musique, etc...
            </p>
            <p>Le problème étant que l'année durant laquelle je suis arrivée en Corée, le monde était bouleversé par
              la crise du coronavirus. Et, pour une bribe de contexte, la Corée était l'un des pays qui gérait le mieux
              l'épidémie à ce moment, alors que la France était plutôt dans la tranche des pays en difficulté. La République Asiatique
              avait même complètement restreint l'accès à son territoire aux Français à un moment donné, puis avait autorisé
              une poignée de personne seulement et c'est à ce moment que j'ai pu m'y rendre (oui j'ai eu le cul bordé
              de nouille comme dit mon père).
            </p>
            <p>Ceci étant dit, impossible pour MBC de faire venir 2-3 personnes de l'étranger pour 1-2 jours de tournage,
            d'autant plus qu'une quatorzaine était obligatoire => c'était pas du tout worth. La production a donc changé
            légèrement le principe de son émission pour suivre uniquement le seul étranger présent.</p>
<!--          </span>-->
          <v-img src="@/assets/articles/hotteok/stand.jpg" height="400" contain alt="Stand de street food"/>
          <div class="text-center"><i class="text-caption">{{ $t('streetFoodCaption') }}</i></div>
<!--          <span v-html="$t('mbc3')">-->
            <p>Je suis donc fraichement arrivé en Corée, ca fait à-peu-près 1 mois que je suis à Séoul et que j'ai commencé à
              bosser. Un jour je reçois un message assez long, en full-Coréen sur mon insta (alors doté du timide nombre d'environ
              80 followers (&lt;3 je vous aime)), que j'ignore sans vergogne pensant à un spam me promettant de devenir millionaire ou
              de découvrir les filles chaudes de ma région. Quelques jours se passent, et boom, rebelote, même message. Cette
              fois-çi, je traduis le message sur Papago (le sang de la veine), après tout devenir millionaire, pourquoi pas.</p>
            <p>L'auteur du message était selon lui, un employé de MBC, il me décrivait en gros l'émission, me disait qu'ils
              avaient repéré mon profil et qu'il serait intéressé d'avoir un entretien avec moi. Je bosse dans l'informatique,
              ou bien est-ce seulement ma nature, mais à ce moment je pense toujours que ce message est un spam et que l'auteur
              va me demander mon numéro de carte bancaire dans le prochain message. Cependant un léger doute commence à s'installer,
              et je montre donc le message à mes collègues Coréennes. Elles me disent qu'en fait non, le message à l'air d'être
              bel et bien honnête ! Elles ont l'air même un peu choqué, je l'ignorais mais elles m'apprennent que cette
              émission est quand même assez populaire et que tout le monde la connait au moins de nom. Elles n'en reviennent pas,
              et enfait moi non plus.</p>
            <p></p>
<!--          </span>-->
          <v-img src="@/assets/articles/hotteok/hotteok.jpg" height="400" contain alt="Hottoek au Nutella"/>
          <div class="text-center"><i class="text-caption">{{ $t('hotteokCaption') }}</i></div>
<!--          <span v-html="$t('mbc4')">-->
            <p>"L'opportunité est prompte à s'enfuir, mais longue à revenir", cette très ancienne citation de Hazrat Ali résonne
              énormément avec moi depuis que je suis à Séoul. Ni une, ni deux je réponds que je suis extrêmement intéressé et
              on se calle un rendez-vous dans les locaux de MBC Dream Center à Ilsan.
              J'y fonce un soir après le boulot et j'y suis bien très bien accueilli. On m'amène dans une salle de réunion,
              où je patiente 5min, on me propose divers snacks et boisson, plutôt cool. Puis, pas moins de 7 personnes rentrent
              en même temps dans la salle de réunion, producteur, réalisateur, staff technique. Ils sont tous très sympas,
              souriants, peu parle anglais mais l'humeur est légère et je suis à l'aise rapidement.
              Le but de cet entretien est de savoir concrètement qu'est ce que je fou en Corée, pourquoi et comment j'ai
              atterris ici. Par contre le tout était filmé (et pas sur mon bon profil ㅠㅠ !). Ca se passe nickel et ils
              sont obligé de me mettre dehors à un moment donné parce que je raconte trop ma vie; qu'il est presque 21h.
              et qu'ils doivent encore bosser derrière (les pauvres, force à eux).
              Pas de conclusion à ce moment donné, ils devraient me recontacter dans les jours à venir.</p>
            <p>J'étais déjà hyper content d'être arrivé jusqu'ici et je n'attendais pas de réponse pour être honnête,</p>
<!--          </span>-->
          <v-img src="@/assets/articles/hotteok/video.gif" height="400" contain alt="Gif d'un Hotteok au Nutella"/>
          <div class="text-center"><i class="text-caption">No comment 🤤</i></div>
          <span v-html="$t('hotteok4')"></span>
        </v-col>
      </v-row>
      <v-row>
        <v-divider class="mx-16 my-16"></v-divider>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="4" lg="3">
          <address-card v-bind="{name: '삼맛호오떡', imageName: 'hotteok.jpg',
                        price: '3000 (~2€)', phone: '02-2299-3396', naverLink: 'http://naver.me/GgeusipV'}"/>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import AddressCard from "../AddressCard";
export default {
  name: "mbc-article",
  components: {AddressCard},
  metaInfo: {
    title: 'Faire un TV show célèbre en Corée | Kebinou',
    meta: [{
      vmid: 'description',
      name: 'description',
      content: "Mon expérience de participer à un TV show très connu en Corée et qui passe sur Netflix!"
    }]
  }
}
</script>

<style lang="scss">
@import "@/scss/article.scss";
</style>
