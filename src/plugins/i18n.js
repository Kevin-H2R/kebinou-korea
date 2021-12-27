import Vue from 'vue'
import VueI18n from "vue-i18n";
import hotteokMessages from "../translations/hotteok";
import mbcMessages from "../translations/mbc";
Vue.use(VueI18n)

const messages = {
    en: {
        categories: "Categories",
        allArticles: "All articles",
        addresses: "Addresses",
        kebinouAdventure: "Kebinou's Korean Adventure",
        food: "Food",
        activities: "Activities",
        introduction: `<div class="text-h4 font-weight-light">Hey ! I'm Kevin (aka Kebinou) a computing engineer in South Korea.</div>
          <div class="text-small font-weight-light my-8">
            I like simple, ergonomic things, sweet potatoes and OSS 117 (french movie) quotes.<br/>
            I made this blog to list all the interesting things to do / eat in the Land of Morning Calm.<br/>
            <span class="font-weight-bold">Let's travel together for a while !</span></div>`,
        ...hotteokMessages.en,
        ...mbcMessages.en,
    },
    fr: {
        categories: "Catégories",
        allArticles: "Tous les articles",
        addresses: "Les Adresses",
        kebinouAdventure: "L'aventure Coréenne de Kebinou",
        food: "Bouffe",
        activities: "Activités",
        introduction: `<div class="text-h4 font-weight-light">Coucou ! Je m'appelle Kevin (aka Kebinou) je suis ingénieur informatique en Corée du Sud.</div>
          <div class="text-small font-weight-light my-8">
            J'aime les choses simples, ergonimiques, la patate douce et les citations d'OSS 117.<br/>
            J'ai fais ce blog pour répertorier les diverses choses que j'ai trouvé intéressantes à faire / déguster au pays du matin calme. <br/>
            <span class="font-weight-bold">Voyageons ensemble pour quelques minutes !</span></div>`,
        ...hotteokMessages.fr,
        ...mbcMessages.fr,
    },
}

export default new VueI18n({
    messages
})
