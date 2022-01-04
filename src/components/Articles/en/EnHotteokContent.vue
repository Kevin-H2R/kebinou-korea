<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <p class="article__p">Hold up ! Stop drooling on your keyboard or on your mobile <vocab-word v-bind="vocab.phone" /> and read
        this article that Kebinou wrote for you on the legendary Nutella 호떡 (Hotteok).</p>
      <p class="article__p">First of all, what is a 호떡? It's a desert, that we could compare to a pancake filled
        with a special mixture. You can find them everywhere in South Korea but especially when
        the temperature starts to fall. You can usually find them in street food stands.</p>

      <v-img class="mt-16" src="@/assets/articles/hotteok/stand.jpg" max-height="400" contain alt="Stand de street food"/>
      <div class="text-center mb-16"><i class="text-caption">{{ $t('streetFoodCaption') }}</i></div>

      <p class="article__p">The origin of 호떡 seems to be coming from Chinese workers who arrived
        in South korea in 1927. They developed a lot of receipe for very cheap dishes in order for
        poor people to afford it. One of those dishes was 호떡.<br/><i>Here I am talking about the origin
          of the 호떡 we can find nowadays everywhere in South Korea. It seems that the real 호떡 was created
          way earlier, around the end of the 19th century.</i></p>
      <p class="article__p">Preparation is quite easy: Flour, milk, surgar, baking powder for the dough, which can then
        be filled with a mix of: brown sugar, honey, peanuts, cinnamon, sesame seeds.<br/>The whole
        thing is then fried</p>

      <v-img class="mt-16" src="@/assets/articles/hotteok/hotteok.jpg" max-height="400" contain alt="Hottoek au Nutella"/>
      <div class="text-center mb-16"><i class="text-caption">{{ $t('hotteokCaption') }}</i></div>

      <p class="article__p">The first time I heard about 호떡, I obviously wanted to rush into the first one I would
        encounter, being a <span class="font-weight-bold">huuuuuuge</span> fan of crêpes/pancakes.
        And it's by my meighboorhood of Hongdae that one night, I met the Holy Grail. And I've got to admit
        I was a bit disappointed:<br> Over cooked, not enough filling, closer to card box than to a desert.
        The <vocab-word v-bind="vocab.granny"/> owning the street food stand tender eyes could not comfort me of this little
        disappointment<br>
        Buuuuut, I did not give up, and the second one I tried was delicious and matched my expectetions.
        Price is usually 1000₩ (~0.75€), but can vary and especially if you want to try another flavour
        than the original 호떡, you might pay a little more.</p>
      <p class="article__p">Speaking of which (nice transition huh?), I heard about a legend, a myth, a rare 호떡 that would give
        you a ticket straight to cloud 9 in business class. I give you :
        <span class="font-weight-bold">the Nutella 호떡.</span></p>
      <p class="article__p">Without waiting, I grab a Seoul city <vocab-word v-bind="vocab.bike"/>
        (first time I rode a bike in ~15 years)
        and I'm on for a 1h30 ride along side the <vocab-word v-bind="vocab.hanRiver"/> until this sanctuary of pleasure
        (I needed to use as much kcal as I could before meeting this wonderful 호떡, with whom I decided
        to get married since then). And well, I was not disappointed at all, it was pure pleasure.
        Filled with just enough Nutella, cooked perfectly, I am in paradise.
        I don't want to spoil you too much so I'll stop my description right here but I am sure you guys can,
        imagine easily how incredible this is, so come try it fast!<br>
        <i>By the way, this one is not a street food stand as I mentionned earlier. It got so famous
          that it has its own little shop now.</i></p>

      <v-img class="mt-16" src="@/assets/articles/hotteok/video.gif" max-height="400" contain alt="Gif d'un Hotteok au Nutella"/>
      <div class="text-center mb-16"><i class="text-caption">No comment 🤤</i></div>

      <p class="article__p">If you ever go there, send me a message or tag me in your insta story
        (<a href="https://www.instagram.com/kebinou_korea/" target="_blank">@kebinou_korea</a>).
        Let's spread the love for 호떡 hehe!<br> Bisous.</p>

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
  name: "en-hotteok-content",
  components: {VocabWord, VocabList},
  data() {
    return {
      vocab: {
        phone: {word: 'phone', korean: '전화', phonetic: 'jeonhwa'},
        granny: {word: 'old lady', korean: '할머니', phonetic: 'halmeoni'},
        bike: {word: 'bike', korean: '자전거', phonetic: 'jajeongeo'},
        hanRiver: {word: 'Han river', korean: '한강', phonetic: 'hangang'},
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/scss/article.scss";
</style>
