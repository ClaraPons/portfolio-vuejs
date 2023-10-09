<script setup>
  //

      const icons= [
        'mdi-email',
        'mdi-github',
        'mdi-linkedin',
        'mdi-instagram',
      ]
   
</script>

<template>
 
 <v-col class="d-flex flex-column justify-end">
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="plain"
        size="small"
      ></v-btn>
 </v-col>
</template>


<style>

</style>
