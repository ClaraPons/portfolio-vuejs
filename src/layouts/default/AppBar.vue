
<script setup>
  //


  const menu = [
    {
      title:"Présentation", 
      link: "#presentation"
    },
    {
      title:"Compétences", 
      link: "#skills"
    },
    {
      title:"Projets", 
      link: "#projects"
    },
    {
      title:"Contact", 
      link: "#contact"
    }
  ]

  const scrollToSection = (link) => {
    const element = document.querySelector(link);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

</script>
<template>
  <v-app-bar fixed elevation="0" class="py-1 pr-3" color="white" id="home">
        <v-app-bar-title class="text-h4" >
          <a class="cursor text-decoration-none text-teal" @click="scrollToSection('#home')">Clara .</a>
        </v-app-bar-title>

        <!-- Menu Burger -->
        <div class="d-lg-none">
            <v-menu location="left" >
                <template v-slot:activator="{ props }">
                    <v-app-bar-nav-icon v-bind="props"></v-app-bar-nav-icon>
                </template>    
                  <v-list class="bg-teal pa-1 rounded">
                      <v-list-item>
                        <div v-for="(info, index) in menu" :key="index" align="center">
                          <v-btn
                            color="white"
                            variant="text"
                            :ripple="false"
                            class="my-1"
                            @click="scrollToSection(info.link)"
                          >
                            {{info.title}}
                          </v-btn>
                        </div>
                          <v-btn
                            color="white"
                            variant="outlined"
                            :ripple="false"
                            class="mt-2"
                            href="PONS_Clara_CV_Dev_Web 18.08.02.pdf"
                            download
                          >
                            Télécharger mon CV
                          </v-btn>
                      </v-list-item>
                  </v-list>
            </v-menu>
        </div>

        <!-- Menu Global -->
        <div class="d-none d-lg-flex d-xl-flex">
            <div class="d-flex align-center xsmall-gap">
              <div v-for="(info, index) in menu" :key="index" align="center">
                  <v-btn
                    variant="plain"
                    @click="scrollToSection(info.link)"
                    color="teal"
                  >
                    {{info.title}}
                  </v-btn>
              </div>
              <v-btn
                color="teal"
                variant="outlined"
                class="ml-2"
                href="PONS_Clara_CV_Dev_Web 18.08.02.pdf"
                download
              >
                Télécharger mon cv
                <v-icon class="pl-4" icon="mdi-arrow-down-circle-outline"/>
              </v-btn>
            </div>
        </div>
    </v-app-bar>
</template>

<style>
#home{
  backdrop-filter: blur(200px);
}

.cursor{
  cursor: pointer;
}


</style>