import Vue from 'vue'
import VueI18n from "vue-i18n";

Vue.use(VueI18n)

const messages = {
    en: {
        categories: "Categories",
        allArticles: "All articles",
        addresses: "Addresses",
        kebinouAdventure: "Kebinou's Korean Adventure",
    },
    fr: {
        categories: "Catégories",
        allArticles: "Tous les articles",
        addresses: "Les Adresses",
        kebinouAdventure: "L'aventure Coréenne de Kebinou",
    },
}

export default new VueI18n({
    messages
})
