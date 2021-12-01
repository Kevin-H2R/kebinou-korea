<template>
    <v-container fluid class="article"
                 style="padding-top: 100px">
        <div class="d-flex flex-column justify-center" style="height: 100vh">
            <v-row justify="center" align="center">
                <h1 class="article__title">Nutella 호떡 (Hotteok)</h1>
            </v-row>
            <v-row>
                <v-img src="@/assets/articles/hotteok/cover.jpg" height="400"/>
            </v-row>
        </div>
    </v-container>
</template>

<script>
    export default {
        name: "HotteokArticle"
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');
    .article {
        font-family: 'Abel', sans-serif;
        &__title {
            font-size: 2em;
        }
    }
</style>