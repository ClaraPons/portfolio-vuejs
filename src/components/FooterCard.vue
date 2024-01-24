<script setup>

const icons= [
  {
    icon:"mdi-email",
    link: "mailto:claragapons@gmail.com",
  },
  {
    icon:"mdi-github",
    link: "https://github.com/ClaraPons",
  },
  {
    icon:"mdi-linkedin",
    link: "https://www.linkedin.com/in/clara-pons-297bb6b3/",
  },
  {
    icon:"mdi-phone",
    link: "tel:+33624436595",
  }
]

</script>

<template>
  <v-footer
    class=" slider3 bg-teal-lighten-1 text-center d-flex flex-column"
  >
    <div class="py-6" >
      <a class="text-decoration-none" v-for="(icon, index) in icons" :key="index" :href="icon.link" target="_blank">
        <v-btn
          class="mx-2 "
          color="white"
          :icon="icon.icon"
          variant="text"
        ></v-btn>
      </a>
    </div>

    <v-divider></v-divider>

    <h5 class="pt-0 pb-5">
      © {{ new Date().getFullYear() }} — Clara PONS, Tous droits réservés.
    </h5>
  </v-footer>
</template>