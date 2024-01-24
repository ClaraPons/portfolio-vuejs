<script setup>
  //

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
 
 <v-col class="d-flex flex-column justify-end">
      <a v-for="(icon, index) in icons" :key="index" :href="icon.link" target="_blank">
        <v-btn
          class="mx-2 "
          color="grey-darken-1"
          :icon="icon.icon"
          variant="plain"
          size="small"
        ></v-btn>
      </a>
 </v-col>
</template>
