<template>
<v-container>
  <v-row>A propos de moi :</v-row>
  <v-row>
    <v-col>
      <v-avatar width="200" height="200">
        <v-img src="@/assets/portrait.jpg" height="200" width="200" alt="My face"></v-img>
      </v-avatar>
    </v-col>
    <v-col>
      <v-row>Prénom : Kevin</v-row>
      <v-row>Age : J'ai fais le tour du soleil {{ getAge() }} fois</v-row>
      <v-row>Job : Ingénieur informatique + j'entre dans le monde de l'entertainment</v-row>
      <v-row>Le pourquoi du comment je suis en Corée :</v-row>

    </v-col>
  </v-row>
</v-container>
</template>

<script>
export default {
  name: "AboutMe",
  methods: {
    getAge: function () {
      const today = new Date();
      const birthDate = new Date(1994, 8, 25);
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    }
  }
}
</script>

<style scoped>

</style>
