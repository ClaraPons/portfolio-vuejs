<template>
  <!-- <v-app-bar flat class="bg-teal">
    <v-app-bar-title class="text-h4">
      <v-icon icon="mdi-account-circle" size="x-small"/>
      Clara .
    </v-app-bar-title>
  </v-app-bar> -->
  <v-app-bar fixed elevation="0" class="py-1 pr-3">
        <v-app-bar-title class="text-h4 text-teal">
          Clara .
        </v-app-bar-title>

        <!-- Menu Burger -->
        <div class="d-lg-none">
            <v-menu location="left" color="teal">
                <template v-slot:activator="{ props }">
                    <v-app-bar-nav-icon v-bind="props"></v-app-bar-nav-icon>
                </template>
                <div
                    class=" d-flex flex-column rounded xsmall-gap pa-3"
                >
                <v-list class="bg-teal pa-1 rounded">
                    <v-list-item>
                        <v-btn
                          color="teal"
                          variant="text"
                          :ripple="false"
                        >
                          Compétences
                        </v-btn>
                        <v-btn
                          color="teal"
                          variant="text"
                          :ripple="false"
                        >
                          Projets
                        </v-btn>
                        <v-btn
                          color="teal"
                          variant="text"
                          :ripple="false"
                        >
                          Contact
                        </v-btn>
                        <v-btn
                          color="teal"
                          variant="outlined"
                          :ripple="false"
                        >
                          Télécharger mon CV
                        </v-btn>
                    </v-list-item>
                </v-list>
                  
                    
                </div>
            </v-menu>
        </div>

        <!-- Menu Global -->
        <div class="d-none d-lg-flex d-xl-flex">
            <div class="d-flex align-center xsmall-gap">
              <v-btn
                color="teal"
                variant="plain"
              >
                Compétences
              </v-btn>
              <v-btn
                color="teal"
                variant="plain"
              >
                Projets
              </v-btn>
              <v-btn
                color="teal"
                variant="plain"
              >
                Contact
              </v-btn>
              <v-btn
                color="teal"
                variant="outlined"
              >
                Télécharger mon cv
                <v-icon class="pl-4" icon="mdi-arrow-down-circle-outline"/>
              </v-btn>
            </div>
        </div>
    </v-app-bar>
</template>

<script setup>
  //
</script>
