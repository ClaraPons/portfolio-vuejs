<script setup>

const icons= [
        'mdi-email',
        'mdi-github',
        'mdi-linkedin',
        'mdi-instagram',
      ]

</script>

<template>
    <v-footer
    class=" slider3 bg-teal-lighten-1 text-center d-flex flex-column"
  >
    <div class="py-6">
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4 "
        :icon="icon"
        variant="text"
      ></v-btn>
    </div>

    <v-divider></v-divider>

    <h5 class="pt-0 pb-5">
      © {{ new Date().getFullYear() }} — Clara PONS, Tous droits réservés.
    </h5>


  </v-footer>
  </template>

<style lang="scss">

.slider3{
  height: 150px;
}

</style>
