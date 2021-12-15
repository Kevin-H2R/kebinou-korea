import Vue from 'vue'
import VueI18n from "vue-i18n";
import hotteokMessages from "../translations/hotteok";
Vue.use(VueI18n)

const messages = {
    en: {
        categories: "Categories",
        allArticles: "All articles",
        addresses: "Addresses",
        kebinouAdventure: "Kebinou's Korean Adventure",
        food: "Food",
        activities: "Activities",
        ...hotteokMessages.en,
    },
    fr: {
        categories: "Catégories",
        allArticles: "Tous les articles",
        addresses: "Les Adresses",
        kebinouAdventure: "L'aventure Coréenne de Kebinou",
        food: "Bouffe",
        activities: "Activités",
        ...hotteokMessages.fr,
    },
}

export default new VueI18n({
    messages
})
