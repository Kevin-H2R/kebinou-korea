<template>
    <v-container fluid class="article"
                 style="padding-top: 100px">
        <div class="d-flex flex-column justify-center" style="height: 90vh">
            <v-row justify="center" align="center">
                <h1 class="article__title font-weight-light">Nutella 호떡 (Hotteok)</h1>
            </v-row>
            <v-row>
                <v-img src="@/assets/articles/hotteok/cover.jpg" height="65vh" alt="Hotteok au Nutella"/>
            </v-row>
        </div>
        <div class="d-flex flex-column article__content">
            <v-row justify="center">
                <v-col cols="12" sm="10" md="8" lg="6">
                    <p>Hop hop hop! On arrête de baver sur son clavier ou sur son écran de téléphone et
                    on lit les infos que Kebinou est allé chercher sur ce legendaire 호똑 (Hotteok) au Nutella.</p>
                    <p>D'arbord, c'est quoi un 호떡 (Hotteok) ? Et bien je vais te le dire petit gourmand ! C'est
                    un dessert, que l'on peut comparer à une crêpe fourée.
                    On en trouve un peu partout en Corée et particulièrement quand les températures
                    commencent à chuter. On en trouve généralement dans des stands de street foods.
                    </p>
                    <v-img src="@/assets/articles/hotteok/stand.jpg" height="400" contain alt="Stand de street food"/>
                    <p>L'origine semble venir de travailleurs Chinois ayant debarqués en Corée du Sud en 1927
                    et ayant rapidement développés pleins de recette de plats peu chers afin de pouvoir les
                    vendre aux plus pauvres. L'un d'eux était le 호떡.<br><i>Je parle ici de l'origine du 호떡 qu'on
                    trouve partout en Corée aujourd'hui. Il semblerait que le vrai 호떡 voit son origine remonter
                    à la fin du 19ème siècle.</i></p>
                    <p>La préparation est assez simple: Farine de blé, lait, sucre, levure pour la pâte, qui peut
                        ensuite être farçie avec un mélange de plusieurs aliments dont :
                        cassonade, miel, cacahuètes, cannelle et graines de sésame.<br>Le tout est ensuite frit.</p>
                    <v-img src="@/assets/articles/hotteok/hotteok.jpg" height="400" contain alt="Hottoek au Nutella"/>
                    <p>Quand j'ai entendu parler du 호떡 la première fois, j'ai évidemment voulu me jetter sur
                      le premier que je croiserais, étant un <span class="font-weight-bold">graaaaaaand</span> amateur de crêpes.
                        C'est donc autour de mon quartier d'Hongdae que je rencontre le Graal un soir. Et j'avoue
                        avoir été un peu déçu :<br> Très peu de garniture et trop cuit, plus proche du carton que d'un dessert.
                        Les yeux doux de la mamie tenant le stand ne m'auront pas reconfortés de la petite déception
                        que je venais de vivre je l'avoue.<br>
                        Maaaaaais, je ne m'avoue pas vaincu et le second que je tente ailleurs était succulent.
                        Le prix est en général de 1000₩ (~0.75€), mais est sujet à variations notamment si vous tenez un
                        호떡 avec un goût différent de l'original.</p>
                    <p>En parlant de ça (quelle transition), j'avais justement entendu parler d'une légende,
                    d'un mythe, un 호떡 rare qui donnerait un ticket allé-simple pour le paradis en classe business. J'ai nommé :
                    <span class="font-weight-bold">le 호똑 au Nutella.</span></p>
                    <p>Ni une, ni deux, j'enfourche mon vélo (première fois que je re faisait du vélo en ~15ans)
                    et je pars pour 1h30 de balade au bord de la rivière Han jusqu'à ce sanctuaire du bonheur
                    (il fallait que je dépense un max de kcal avant la rencontre avec ce 호똑, avec qui je déciderai
                    de me marier, ndlr). Et bien la promesse a été tenue, c'est du plaisir pur et dur. Chargé juste
                    ce qu'il faut en Nutella. Je n'ai pas envie de trop spoil celles et ceux qui testeront un jour,
                    mais on imagine très bien à quel point j'ai longuement hesité à m'installer définitevement dans
                    cette boutique.<br><i>Oui celui-là est un peu célèbre et n'est plus dans un stand mais une boutique carrément.</i></p>
                    <v-img src="@/assets/articles/hotteok/video.gif" height="400" contain alt="Gif d'un Hotteok au Nutella"/>
                    <p>Envoyez-moi un message, taggez-moi sur vos story insta
                      (<a href="https://www.instagram.com/kebinou_korea/" target="_blank">@kebinou_korea</a>)
                      si vous allez tester un 호떡 hehe!<br> Bisous.</p>
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
      name: "HotteokArticle",
      components: {AddressCard},
      metaInfo: {
          title: 'Nutella Hotteok | Kebinou',
          meta: [{
            vmid: 'description',
            name: 'description',
            content: "Apprenez-en plus sur le légendaire et délicieux Hotteok au Nutella que votre serviteur Kebinou est allé tester pour vous!"
          }]
        }
    }
</script>

<style lang="scss">
    //@import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');
    .article {
        font-family: 'Abel', sans-serif;
        &__title {
            font-size: 4em;
        }
        &__content {
            font-size: 1.5em;
            font-weight: lighter;
            letter-spacing: 0.1em;
            line-height: 2.5em;
        }
        p {
            margin: 100px 0;
        }
      &__primary-text {
        color: #1976D2;
      }
    }
</style>
