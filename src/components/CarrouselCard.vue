<script setup>
  import TitleText from '@/components/TitleText.vue'
  import Projects from '../Projects.json'

</script>

<template>
    <div class="slider d-flex flex-column justify-center pt-2">
        <TitleText title="Mes Projets" subtitle="Portfolio"/>
        <input v-for="(project, index) in Projects" type="radio" name="testimonial" :key="index" :id="'t-' + (index + 1)" :checked="index === 3"/>
        <div class="testimonials">
          <label v-for="(project, index) in Projects" class="item" :key="index" :for="'t-' + (index + 1)">
              <div class="textCarrousel">
                <h5 class="text-white pb-5">{{ project.title }}</h5>
                  <p class="text-justify pb-5 font-weight-light  ">{{project.description}}</p>
                  <v-row >
                      <v-col v-for="(icons, index) in project.icons" :key="index" class="pb-5" >
                          <v-icon :icon="'mdi-' + icons" color="white"  />
                      </v-col>
                  </v-row>
                  <v-btn size="small" :href="project.href" target="_blank">Voir</v-btn>
              </div>
              <img :src="'../img/' + project.img"  /> 
          </label>
        </div>
        <div class="dots py-2">
          <label v-for="(project, index) in Projects" :key="index" :for="'t-' + (index + 1)"></label>
        </div>
  </div>
</template>

<style >

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
  overflow: hidden;
}
.testimonials .item {
  --tw-border-opacity: 1;
  border-color: rgba(30, 58, 138, var(--tw-border-opacity));
  position: absolute;
  box-sizing: border-box;
  width: 320px;
  text-align: center;
  transition: transform 0.4s;
  -webkit-transform-style: preserve-3d;
  user-select: none;
  cursor: pointer;
}
.testimonials .item img {
  width: 100%;
  border-radius: 0.5rem;
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
