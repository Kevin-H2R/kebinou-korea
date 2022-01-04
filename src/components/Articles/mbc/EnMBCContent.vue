<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">

      <p class="article__p">Yes ! I had the HUGE opportunity to participate to a TV show produced by MBC (one of the biggest
        TV show production company in South Korea, if not the biggest) and displayed on MBC Every1 and Netflix.<br/>
        The show name is <span class="font-weight-regular">"어서와 한국은 처음이지 ?"</span> (which could be translated
        as "Welcome ! First time in Korea ?").<br/>The principle is as follows : The TV show follows a foreigner
        who just arrived in Korea, the production makes 2-3 <vocab-word v-bind="vocab.friends" />
        of this person come and together they will
        discover one or more Korean cultural aspects: <vocab-word v-bind="vocab.food" />,
        customs, traditions, <vocab-word v-bind="vocab.music" />, etc ...</p>
      <p class="article__p">The problem is that during the year I arrived in Korea, world was shaken by the coronavirus crisis.<br/>
        And, for a bit more details, South Korea was one of the best country to handle the pandemic, whereas France
        was one really struggling with it.<br/> Therefore, the Asian Republic completely restricted French people
        to enter its territory at some point, then cherry-picked only a few French people to be authorized in the
        country, and it's at this point that I could get in (got extra lucky).</p>
      <p class="article__p">With that said, impossible for MBC to bring 2-3 friends from a foreign country, for 1 or 2 shooting days
        only (not mentioning the 14 days-mandatory-quarantine).<br/> So production change slightly the principle
        of the TV show to follow the stranger journey alone, without friends.</p>

      <v-img class="mt-16" src="@/assets/articles/mbc/welcome.jpg" max-height="400" contain alt="Logo Welcome first time in Korea"/>
      <div class="text-center mb-16"><i class="text-caption">{{ $t('captionPoster') }}</i></div>

      <p class="article__p"> So I am freshly starting my new life in Korea, it's been approximately 1 month that I started working.<br/>
        One day, I get a pretty long, full-korean message on my insta (then gifted with ~80 followers (&lt;3 love you))
        which I ignore thinking that it was a spam promising me to become a multi-millionaire by earning 10000€/hour from
        my sofa. A few days has passed, and boom, same message again. This time I give it a bit more chance and translate
        it on Papago (shout out to the most useful app while being in Korea), after all, being millionaire does not sound
        too bad !</p>
      <p class="article__p">The author of the message, was according to him, an MBC employee, he described to me the principle of the show,
        that they noticed my profile and that they would be interested in having an interview with me.<br/>
        But I work in IT, or maybe I don't trust this kind of message at all by nature, but at this point,
        I still think that this is a spam and that this guy will ask for my card number in the next message.<br/>
        Nonetheless, I start to be a little doubtful, so I show the message to my Korean colleagues. And they told me
        that the message seems super legit! They seem a bit shocked, I did not know anything about this show, but they
        told me that it is super popular and that everybody knew that show, at least by name. It is kinda hard
        to realize what just happened to be honest.</p>

      <v-img class="mt-16" src="@/assets/articles/mbc/wtf.gif" max-height="400" contain alt="WTF gif"/>
      <div class="text-center mb-16"><i class="text-caption">{{ $t('captionReaction') }}</i></div>

      <p class="article__p">"Opportunity passes away like a cloud. Therefore make use of good opportunities.", that ancient quote
        from Hazrat Ali really resonates with me since I arrived in Seoul.<br/>Without waiting, I answer that
        I am super interested, and we set up an appointment in their office at the MBC Dream Center in Ilsan.<br/>
        I rush there one evening after work, and I'm super well welcomed. They bring me to a meeting room, where I
        wait 5min, they propose me diverse <vocab-word v-bind="vocab.snack"/> and <vocab-word v-bind="vocab.drink"/>, pretty cool.
        Then, not less than 7 people enters the room: producer, director, technical staff. They are all super nice to me,
        smiling, only a few speak english though,
        but the mood is wonderful, and I'm comfortable really fast.<br/>The goal of this interview is to understand
        what I'm concretely doing in South Korea, why and how did I arrive here.<br/>
        And everything was filmed (not on my good profile tho 😭 !). I also asked to shoot the interview with my
        camera so that I could share it with you guys, but I was not allowed to :/. The interview goes super well,
        and they have to push me out of their office because I am talking too much about my life, that it's almost
        9pm, and that they still have to work after (poor guys, cheers to them).<br/>
        No conclusion at this point, they should get back to me in the next few days.</p>
      <p class="article__p">I was already extremely happy that I got so far already, and I did not expect to be called back to be honest,
        I don't have a super symmetrical face, and on the introvert/extrovert spectrum I am more on the introvert side,
        summed up: <br/><span class="font-weight-bold">I don't think I'm a good match for TV.</span></p>

      <v-img class="mt-16" src="@/assets/articles/mbc/mbclobby.jpg" max-height="400" contain alt="Lobby du MBC Dream Center"/>
      <div class="text-center mb-16"><i class="text-caption">{{ $t('captionLobby') }}</i></div>

      <p class="article__p">BUT! After a few days / weeks, the guy from MBC calls me and says everything is good on their side, and that
        I will be able to shoot the episode in the following days !<br/> This is nuts! I am super excited, but also
        a bit nervous. Being displayed on TV, in front of hundreds of thousands (maybe even millions) of people, when
        your self-esteem is not high, it's not the easiest thing in the world haha. But I am decided to take this
        opportunity!</p>
      <span>I will not describe the details of the shooting in that pst, it's already too long, but I promise you,
                if you are interested, I'll write it the best to really make you live that moment as you were with me at this time
                during that unique experience.><br/>
                If you want to watch the episode (if you are not in Korea), you'll need a VPN and Netflix:<br/>
                - Set your VPN in South Korea<br/>
                - Look for the terms 'Welcome first time', or directly'어서와 한국은 처음이지'</span>
      (<v-btn color="primary" icon @click="copyToClipBoard()"><v-icon>mdi-content-copy</v-icon></v-btn>)
      <span> if you've got a Korean keyboard (you can also copy it directly from that article 😉)<br/>
                 - Episode 40 from 2021 season, exact date: 2021-10-07<br/>
                 - First part is about an American guy, I'm displayed in the introduction and in the second part of the episode<br/>
                 - Get ready to cringe the hell out of you. Personally, I can not watch the episode, I'm way too ridiculous from
                 time to time 😂</span>

      <v-img class="mt-16" src="@/assets/articles/mbc/netflix-thumbnail.jpg" max-height="400" contain alt="Vignette du tv show sur Netflix"/>
      <div class="text-center mb-16"><i class="text-caption">{{ $t('captionNetflix') }}</i></div>

      <p class="article__p">Bonus: A few images from the episode and the shooting. I did not really have the right to take
        <vocab-word v-bind="vocab.photo"/> photos during the shooting, but I insisted hehe.</p>

      <v-row class="flex-wrap" justify="center">
        <v-col cols="12" sm="6" md="4">
          <v-img src="@/assets/articles/mbc/crew.jpg" alt="Photo de l'équipe de tournage dans le resto de 닭갈비" class="my-1"/>
          <v-img src="@/assets/articles/mbc/riz.jpg" alt="Ils m'ont vraiment foutu la honte" class="my-1"/>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-img src="@/assets/articles/mbc/crew-street.jpg" alt="Remballage des caméras en fin de tournage" class="my-1"/>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-img src="@/assets/articles/mbc/me-alberto.jpg" alt="Moi et Alberto Mundi la re-sta pendant le tournage studio" class="my-1"/>
          <v-img src="@/assets/articles/mbc/studio.jpg" alt="Studio du TV Show" class="my-1"/>
        </v-col>
      </v-row>

      <p class="article__p"><i>As I am writing this post, my second episode is in the making, aired on the 6th of January 2022 on Netflix!</i></p>
      <p class="article__p">Give me your honest feedback on insta if you watched the episode:
        (<a href="https://www.instagram.com/kebinou_korea/" target="_blank">@kebinou_korea</a>).
        I'm really interested in hearing what you think of it ❤. Kisses.</p>

      <span class="text-caption">2021-12-29</span>

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
  name: "en-mbc-content",
  components: {VocabList, VocabWord},
  methods: {
    copyToClipBoard() {
      navigator.clipboard.writeText('어서와 한국은 처음이지')
    }
  },
  data() {
    return {
      vocab: {
        friends: {word: 'friends', korean: '친구', phonetic: 'chingu'},
        food: {word: 'food', korean: '음식', phonetic: 'eumsig'},
        music: {word: 'music', korean: '음악', phonetic: 'eumag'},
        drink: {word: 'drinks', korean: '음료수', phonetic: 'eumlyosu'},
        snack: {word: 'snacks', korean: '과자', phonetic: 'gwaja'},
        photo: {word: 'photos', korean: '사진', phonetic: 'sajin'},
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/scss/article.scss";
</style>
