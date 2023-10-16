<script setup>
  import TitleText from '@/components/TitleText.vue'

</script>

<template>
    <div class="slider d-flex flex-column justify-center pt-2">
        <TitleText title="Mes Projets" subtitle="Portfolio"/>
        <!-- <h1 class="text-center py-5 text-teal-lighten-3 text-h3">Mes projets</h1> -->
        <input type="radio" name="testimonial" id="t-1" />
        <input type="radio" name="testimonial" id="t-2"/>
        <input type="radio" name="testimonial" id="t-3"/>
        <input type="radio" name="testimonial" id="t-4" checked/>
        <input type="radio" name="testimonial" id="t-5" />
        <input type="radio" name="testimonial" id="t-6" />
        <input type="radio" name="testimonial" id="t-7" />
        <div class="testimonials ">
            <label class="item" for="t-1">
                <div class="textCarrousel">
                        <h5 class="text-white pb-5"> Projet Highcast</h5>
                        <p class="text-justify pb-5 font-weight-light  ">Site réalisé dans le cadre de mon alternance au sein de la startup Highcast. Conception de la maquette au développement.</p>
                        <v-row class="pb-5">
                            <v-col >
                                <v-icon  icon="mdi-vuejs" color="white"  />
                            </v-col>
                            <v-col>
                                <v-icon  icon="mdi-language-css3" color="white"  />
                            </v-col>
                            <v-col>
                                <v-icon  icon="mdi-code-json" color="white"  />
                            </v-col>
                        </v-row>
                        <v-btn size="small" href="https://www.highcast.co" target="_blank">Voir</v-btn>
                    </div>
                    <img src="../img/highcast.png"  />                
            </label>
            <label class="item" for="t-2">
                <div class="textCarrousel">
                    <h5 class="text-white pb-5"> Projet Trouve Ta Voix</h5>
                    <p class="text-justify pb-5 font-weight-light  ">Application de matching d'informations réalisée pour l'association Trouve Ta voix dans un délai de 3 semaines.</p>
                        <v-row class="pb-5">
                            <v-col >
                                <v-icon  icon="mdi-react" color="white"  />
                            </v-col>
                            <v-col>
                                <v-icon  icon="mdi-nodejs" color="white"  />
                            </v-col>
                            <v-col>
                                <v-icon  icon="mdi-database-search" color="white"  />
                            </v-col>
                        </v-row>
                        <v-btn size="small" href="https://trouvetavoix.netlify.app/" target="_blank">Voir</v-btn>
                    </div>
                    <img src="../img/trouve-ta-voix.png"  />
                </label>
            <label class="item" for="t-3">
                <div class="textCarrousel">
                    <h5 class="text-white pb-5"> Projet Memory</h5>
                    <p class="text-justify pb-5 font-weight-light  ">Le projet Memory est un jeu réalisé en équipe de 3 personnes lors de ma reconversion. Nous devions le réaliser et le présenter en 2 jours.</p>
                        <v-row class="pb-5">
                            <v-col >
                                <v-icon  icon="mdi-react" color="white"  />
                            </v-col>
                            <v-col>
                                <v-icon  icon="mdi-language-css3" color="white"  />
                            </v-col>
                        </v-row>
                        <v-btn size="small" href="https://singular-marshmallow-57b4e9.netlify.app/" target="_blank">Voir</v-btn>
                    </div>
                    <img src="../img/memory.png"  />
                </label>
                <label class="item" for="t-4">
                    <div class="textCarrousel">
                        <h5 class="text-white pb-5"> Projet Pokemon</h5>
                        <p class="text-justify pb-5 font-weight-light  ">Le projet Pokemon nous a permis à nous inicier à l'utilisation des API. Nous devions resencer la liste des Pokemons existants sur l'API en 2 jours.</p>
                        <v-row class="pb-5">
                            <v-col >
                                <v-icon  icon="mdi-react" color="white"  />
                            </v-col>
                            <v-col>
                                <v-icon  icon="mdi-language-css3" color="white"  />
                            </v-col>
                            <v-col>
                                <v-icon  icon="mdi-api" color="white"  />
                            </v-col>
                        </v-row>
                        <v-btn size="small" href="https://tubular-sundae-be2dda.netlify.app/" target="_blank">Voir</v-btn>
                    </div>
                    <img src="../img/pokemon.png"  />
                </label>
                <label class="item" for="t-5">
                    <div class="textCarrousel">
                        <h5 class="text-white pb-5"> Projet Moovice</h5>
                        <p class="text-justify pb-5 font-weight-light  ">Dans le projet Moovice, nous devions utiliser l'API de movieDB pour développer un site de rencensement de film. Nous devions réaliser ce projets en 3 jours.</p>
                        <v-row class="pb-5">
                            <v-col >
                                <v-icon  icon="mdi-react" color="white"  />
                            </v-col>
                            <v-col>
                                <v-icon  icon="mdi-language-css3" color="white"  />
                            </v-col>
                            <v-col>
                                <v-icon  icon="mdi-api" color="white"  />
                            </v-col>
                        </v-row>
                        <v-btn size="small" href="https://imaginative-cascaron-e4e24e.netlify.app/" target="_blank">Voir</v-btn>
                    </div>
                    <img src="../img/moovice.png"  />              
                </label>
                <label class="item" for="t-6">
                    <div class="textCarrousel">
                        <h5 class="text-white pb-5"> Projet Movie List</h5>
                        <p class="text-justify pb-5 font-weight-light  ">Pour ce projet, nous devions simplement utiliser un tableau JSON pour lister un catalogue de film. Nous devions réaliser ce projets en 1 jour.</p>
                        <v-row class="pb-5">
                            <v-col >
                                <v-icon  icon="mdi-react" color="white"  />
                            </v-col>
                            <v-col>
                                <v-icon  icon="mdi-language-css3" color="white"  />
                            </v-col>
                            <v-col>
                                <v-icon  icon="mdi-code-json" color="white"  />
                            </v-col>
                        </v-row>
                        <v-btn size="small" href="https://dynamic-mochi-82b309.netlify.app/" target="_blank">Voir</v-btn>
                    </div>
                    <img src="../img/movieList.png"  />                
                </label>
                <label class="item" for="t-7">
                    <div >
                        <div class="textCarrousel">
                            <h5 class="text-white pb-5"> Projet Deezer</h5>
                            <p class="text-justify pb-5 font-weight-light  ">Le projet Deezer est l'un des premier projet que j'ai réalisé lors de ma reconversion. Nous devions refaire la homePage de Deezer.</p>
                            <v-row class="pb-5">
                                <v-col >
                                    <v-icon  icon="mdi-language-html5" color="white"  />
                                </v-col>
                                <v-col>
                                    <v-icon  icon="mdi-language-css3" color="white"  />
                                </v-col>
                            </v-row>
                            <v-btn size="small" href="https://clarapons.github.io/deezer-v1/" target="_blank">Voir</v-btn>
                        </div>
                        <img src="../img/deezer.png"  />
                    </div>
                </label>
            </div>
            <div class="dots py-2">
                <label for="t-1"></label>
                <label for="t-2"></label>
                <label for="t-3"></label>
                <label for="t-4"></label>
                <label for="t-5"></label>
                <label for="t-6"></label>
                <label for="t-7"></label>
        </div>
    </div>
</template>

<style >
.mycard {
  height: 100%;
  width: 100%;
  /* max-width:  */
}
.cardtitle {
  font-weight: bold;
  --tw-text-opacity: 1;
  color: rgba(31, 41, 55, var(--tw-text-opacity));
  text-align: center;
}
.cardimg {
  margin-left: auto;
  margin-right: auto;
  margin-top: 2.75rem;
  margin-bottom: 2.75rem;
  max-height: 6rem;
  /* border-radius: 9999px; */
}
.carddescription {
  --tw-text-opacity: 1;
  color: rgba(107, 114, 128, var(--tw-text-opacity));
  text-align: center;
}

/* body {
  margin: 0;
  color: #fff;
  font-family: sans-serif;
  display: flex;
  align-items: center;
  min-height: 100vh;
} */
.slider {
  width: 100%;
  min-height: 685px;
  background-color: #E0F2F1;
}

.slider input {
  display: none;
}
.testimonials {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 380px;
  perspective: 300px;
  /* margin-top: 5rem; */
  overflow: hidden;
}
.testimonials .item {
  /* max-width: 22rem; */
  /* border-radius: 1.5rem; */
  /* border-width: 1px; */
  --tw-border-opacity: 1;
  border-color: rgba(30, 58, 138, var(--tw-border-opacity));
  /* top: 2; */
  position: absolute;
  box-sizing: border-box;
  /* background-color: #fff; */
  /* padding: 10px; */
  width: 320px;
  text-align: center;
  transition: transform 0.4s;
  -webkit-transform-style: preserve-3d;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); */
  user-select: none;
  cursor: pointer;
}
.testimonials .item img {
  width: 100%;
  /* box-shadow: 10 20 10px rgba(10, 0, 0, 0.3); */
  border-radius: 0.5rem;
  /* border: 13px solid #3b344d; */
}

.testimonials .item p {
  color: #ddd;
}
.testimonials .item h2 {
  font-size: 14px;
}
.dots {
  display: flex;
  justify-content: center;
  align-items: center;
}
.dots label {
  display: block;
  height: 5px;
  width: 5px;
  border-radius: 50%;
  cursor: pointer;
  background-color: #413b52;
  margin: 7px;
  transition: transform 0.2s, color 0.2s;
}

.textCarrousel{
    display: none;
   
}

.textCarrousel p {
  font-size: 14px;
}

.item:hover .textCarrousel {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* background-color: rgba(0, 0, 0, 0.8); Adjust background color as needed */
    z-index: 1;
  }

.item:hover img{ 
    filter: brightness(10%);
}

/* First */
#t-1:checked ~ .dots label[for="t-1"] {
  transform: scale(2);
  background-color: #fff;
}
#t-1:checked ~ .dots label[for="t-2"] {
  transform: scale(1.5);
}
/* #t-1:checked ~ .testimonials label[for="t-1"] {
  z-index: 4;
} */
#t-1:checked ~ .testimonials label[for="t-1"] {
    z-index: 7;
}
#t-1:checked ~ .testimonials label[for="t-2"] {
  transform: translateX(300px) translateZ(-90px) translateY(-15px);

  z-index: 6;
}
#t-1:checked ~ .testimonials label[for="t-3"] {
  transform: translateX(600px) translateZ(-180px) translateY(-30px);
  z-index: 4;

}
#t-1:checked ~ .testimonials label[for="t-4"] {
  transform: translateX(900px) translateZ(-270px) translateY(-45px);
  z-index: 3;

}
#t-1:checked ~ .testimonials label[for="t-5"] {
  transform: translateX(1200px) translateZ(-360px) translateY(-60px);
  z-index: 2;
}

#t-1:checked ~ .testimonials label[for="t-6"] {
  transform: translateX(1500px) translateZ(-450px) translateY(-75px);  
  z-index: 1;
}

#t-1:checked ~ .testimonials label[for="t-7"] {
  transform: translateX(1800px) translateZ(-540px) translateY(-90px);  
  /* z-index: 1; */
}

/* Second */
#t-2:checked ~ .dots label[for="t-1"] {
  transform: scale(1.5);
}
#t-2:checked ~ .dots label[for="t-2"] {
  transform: scale(2);
  
  background-color: #fff;
}
#t-2:checked ~ .dots label[for="t-3"] {
  transform: scale(1.5);
}
#t-2:checked ~ .testimonials label[for="t-1"] {
  transform: translateX(-300px) translateZ(-90px) translateY(-15px);
}

#t-2:checked ~ .testimonials label[for="t-2"] {
    z-index:5
}

#t-2:checked ~ .testimonials label[for="t-3"] {
  transform: translateX(300px) translateZ(-90px) translateY(-15px);
  z-index: 4;
}
#t-2:checked ~ .testimonials label[for="t-4"] {
  transform: translateX(600px) translateZ(-180px) translateY(-30px);
  z-index: 3;
}
#t-2:checked ~ .testimonials label[for="t-5"] {
  transform: translateX(900px) translateZ(-270px) translateY(-45px);
  z-index: 2;
}

#t-2:checked ~ .testimonials label[for="t-6"] {
    transform: translateX(1200px) translateZ(-360px) translateY(-60px);
    z-index: 1;
}

#t-2:checked ~ .testimonials label[for="t-7"] {
    transform: translateX(1500px) translateZ(-450px) translateY(-75px);
    /* z-index: 1; */
}

/* Third */
#t-3:checked ~ .dots label[for="t-2"] {
  transform: scale(1.5);
}
#t-3:checked ~ .dots label[for="t-3"] {
  transform: scale(2);
  background-color: #fff;
}
#t-3:checked ~ .dots label[for="t-4"] {
  transform: scale(1.5);
}
#t-3:checked ~ .testimonials label[for="t-1"] {
  transform: translateX(-600px) translateZ(-180px) translateY(-30px);
}
#t-3:checked ~ .testimonials label[for="t-2"] {
  transform: translateX(-300px) translateZ(-90px) translateY(-15px);
}
#t-3:checked ~ .testimonials label[for="t-3"] {
  z-index: 4;
}
#t-3:checked ~ .testimonials label[for="t-4"] {
  transform: translateX(300px) translateZ(-90px) translateY(-15px);
  z-index: 3;
}
#t-3:checked ~ .testimonials label[for="t-5"] {
  transform: translateX(600px) translateZ(-180px) translateY(-30px);
  z-index: 2;
}

#t-3:checked ~ .testimonials label[for="t-6"] {
  transform: translateX(900px) translateZ(-270px) translateY(-45px);
  z-index: 1;
}

#t-3:checked ~ .testimonials label[for="t-7"] {
  transform: translateX(1200px) translateZ(-360px) translateY(-60px);
}

/* Fourth */
#t-4:checked ~ .dots label[for="t-3"] {
  transform: scale(1.5);
}
#t-4:checked ~ .dots label[for="t-4"] {
  transform: scale(2);
  background-color: #fff;
}
#t-4:checked ~ .dots label[for="t-5"] {
  transform: scale(1.5);
}
#t-4:checked ~ .testimonials label[for="t-1"] {
  transform: translateX(-900px) translateZ(-270px) translateY(-45px);
}
#t-4:checked ~ .testimonials label[for="t-2"] {
  transform: translateX(-600px) translateZ(-180px) translateY(-30px);
  z-index: 2;
}
#t-4:checked ~ .testimonials label[for="t-3"] {
  transform: translateX(-300px) translateZ(-90px) translateY(-15px);
  z-index: 3;
}
#t-4:checked ~ .testimonials label[for="t-4"] {
  z-index: 3;
}
#t-4:checked ~ .testimonials label[for="t-5"] {
  transform: translateX(300px) translateZ(-90px) translateY(-15px);
  z-index: 2;
}

#t-4:checked ~ .testimonials label[for="t-6"] {
  transform: translateX(600px) translateZ(-180px) translateY(-30px);
  z-index: 1;
}

#t-4:checked ~ .testimonials label[for="t-7"] {
  transform: translateX(900px) translateZ(-270px) translateY(-45px);
}

/* Fifth */
#t-5:checked ~ .dots label[for="t-4"] {
  transform: scale(1.5);
}
#t-5:checked ~ .dots label[for="t-5"] {
  transform: scale(2);
  background-color: #fff;
}
#t-5:checked ~ .testimonials label[for="t-1"] {
  transform: translateX(-1200px) translateZ(-360px) translateY(-60px);
}
#t-5:checked ~ .testimonials label[for="t-2"] {
  transform: translateX(-900px) translateZ(-270px) translateY(-45px);
  z-index: 1;
}
#t-5:checked ~ .testimonials label[for="t-3"] {
  transform: translateX(-600px) translateZ(-180px) translateY(-30px);
  z-index: 2;
}
#t-5:checked ~ .testimonials label[for="t-4"] {
  transform: translateX(-300px) translateZ(-90px) translateY(-15px);
  z-index: 3;
}
#t-5:checked ~ .testimonials label[for="t-5"] {
  z-index: 4;
}

#t-5:checked ~ .testimonials label[for="t-6"] {
  transform: translateX(300px) translateZ(-90px) translateY(-15px);
  z-index: 1;
}

#t-5:checked ~ .testimonials label[for="t-7"] {
  transform: translateX(600px) translateZ(-180px) translateY(-30px);
  /* z-index: 1; */
}

/* Six */
#t-6:checked ~ .dots label[for="t-5"] {
  transform: scale(1.5);
}
#t-6:checked ~ .dots label[for="t-6"] {
  transform: scale(2);
  background-color: #fff;
}
#t-6:checked ~ .testimonials label[for="t-1"] {
  transform: translateX(-1500px) translateZ(-450px) translateY(-75px);
}
#t-6:checked ~ .testimonials label[for="t-2"] {
  transform: translateX(-1200px) translateZ(-360px) translateY(-60px);
  z-index: 1;
}
#t-6:checked ~ .testimonials label[for="t-3"] {
  transform: translateX(-900px) translateZ(-270px) translateY(-45px);
  z-index: 2;
}
#t-6:checked ~ .testimonials label[for="t-4"] {
  transform: translateX(-600px) translateZ(-180px) translateY(-30px);
  z-index: 3;
}
#t-6:checked ~ .testimonials label[for="t-5"] {
  transform: translateX(-300px) translateZ(-90px) translateY(-15px);
  z-index: 4;
}

#t-6:checked ~ .testimonials label[for="t-6"] {
  z-index: 6;
}

#t-6:checked ~ .testimonials label[for="t-7"] {
  transform: translateX(300px) translateZ(-90px) translateY(-15px);
  /* z-index: 1; */
}


/* Six */
#t-7:checked ~ .dots label[for="t-6"] {
  transform: scale(1.5);
}
#t-7:checked ~ .dots label[for="t-7"] {
  transform: scale(2);
  background-color: #fff;
}
#t-7:checked ~ .testimonials label[for="t-1"] {
  transform: translateX(-1800px) translateZ(-540px) translateY(-90px);
}
#t-7:checked ~ .testimonials label[for="t-2"] {
  transform: translateX(-1500px) translateZ(-450px) translateY(-75px);
  z-index: 1;
}
#t-7:checked ~ .testimonials label[for="t-3"] {
  transform: translateX(-1200px) translateZ(-360px) translateY(-60px);
  z-index: 2;
}
#t-7:checked ~ .testimonials label[for="t-4"] {
  transform: translateX(-900px) translateZ(-270px) translateY(-45px);
  z-index: 3;
}
#t-7:checked ~ .testimonials label[for="t-5"] {
  transform: translateX(-600px) translateZ(-180px) translateY(-30px);
  z-index: 4;
}

#t-7:checked ~ .testimonials label[for="t-6"] {
    transform: translateX(-300px) translateZ(-90px) translateY(-15px);
  z-index: 5;
}

#t-7:checked ~ .testimonials label[for="t-7"] {
  z-index: 6;
}






</style>
