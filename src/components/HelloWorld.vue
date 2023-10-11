<script setup>
  //
  import TestBis from '@/components/TestBis.vue'
  import ToolbarRs from '@/components/ToolbarRs.vue'
  import CarrouselCard from '@/components/CarrouselCard.vue'
  import SkillsCard from '@/components/SkillsCard.vue'
  import ContactCard from '@/components/ContactCard.vue'
  import FooterCard from '@/components/FooterCard.vue'

</script>

<template>
  <!-- <v-container class="fill-height">
       <v-img height="300" src="@/assets/logo.svg" /> -->
<!-- 
      <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>

      <h1 class="text-h2 font-weight-bold">Vuetify</h1>

      <div class="py-14" />

      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn
            href="https://vuetifyjs.com/components/all/"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            <v-icon
              icon="mdi-view-dashboard"
              size="large"
              start
            />

            Components
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            color="teal"
            href="https://vuetifyjs.com/introduction/why-vuetify/#feature-guides"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            target="_blank"
            variant="flat"
          >
            <v-icon
              icon="mdi-speedometer"
              size="large"
              start
            />

            Get Started
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            href="https://community.vuetifyjs.com/"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            <v-icon
              icon="mdi-account-group"
              size="large"
              start
            />

            Community
          </v-btn>
        </v-col>
      </v-row> -->
      <div>
      <v-responsive class="align-center  fill-height mb-5"> 

      <v-row class="align-center my-10">
        <v-col cols="2">
          <ToolbarRs/>
        </v-col>

        <v-col cols="4" >
          <!-- <a class="link link--kukuri"  data-letters="Hello">Hello</a> -->
          <h2 data-text="Bonjour">Bonjour</h2>
          
          <p  class="text-h6 pt-5 text-grey-lighten-1 font-weight-light">Je m'appelle Clara PONS, je suis développeuse web Fullstack Junior spécialisée en Javascript</p>
          <v-btn
            color="teal-lighten-3"
            class="my-6 mt-10 text-white"
            variant="flat"
            :ripple="false"
          >
            Voir mon profil
          </v-btn>
        </v-col>
        <v-col cols="6" class="d-flex justify-center">
          <TestBis/>
        </v-col>
      </v-row>
      <section id="section05" class="demo">
        <a href="#section06"><span></span></a>
      </section>
    </v-responsive>
    <CarrouselCard/>
    <SkillsCard/>
    <ContactCard/>
    <FooterCard/>
  </div>
  <!-- </v-container>  -->
</template>

<style>

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap");

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: "Poppins", sans-serif;
}


h2 {
	color: rgba(0, 128, 128, 0.128);
	font-size: 5vw;
	position: relative;
	text-transform: uppercase;
	/* -webkit-text-stroke: 0.3vw #f7f7fe; */
}

h2::before {
	top: 0;
	left: 0;
	width: 0;
	height: 80%;
	color: teal;
	overflow: hidden;
	position: absolute;
	content: attr(data-text);
	border-right: 2px solid rgba(0, 128, 128, 0.57);
	-webkit-text-stroke: 0vw #f7f7fe;
	animation: animate 3s linear infinite;
}

@keyframes animate {
	0%,
	10%,
	100% {
		width: 0;
	}

	70%,
	90% {
		width: 80%;
	}
}


#section05 a {
  padding-top: 70px;
}
#section05 a span {
  position: absolute;
  top: 88%;
  left: 50%;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-left: 1px solid rgba(0, 128, 128, 0.453);
  border-bottom: 1px solid rgba(0, 128, 128, 0.453);
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: sdb05 1.5s infinite;
  animation: sdb05 1.5s infinite;
  box-sizing: border-box;
}
@-webkit-keyframes sdb05 {
  0% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}
@keyframes sdb05 {
  0% {
    transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}


/* 
.link {
	outline: none;
	text-decoration: none;
	position: relative;
	font-size: 9em;
	line-height: 1;
	color: #E0F2F1;
	display: inline-block;
  padding-top: 10px;
}
.link--kukuri {
	text-transform: uppercase;
	font-weight: 900;
	overflow: hidden;
	line-height: 0.75;
	color: #E0F2F1;

}

.link--kukuri:hover {
	color: #E0F2F1;
}

.link--kukuri::after {
	content: '';
	position: absolute;
	height: 16px;
	width: 100%;
	top: 50%;
	margin-top: -8px;
	right: 0;
	background: #F9F9F9;
	transform: translate3d(-100%,0,0);
	transition: transform 0.4s;
	transition-timing-function: cubic-bezier(0.7,0,0.3,1);
  
}

.link--kukuri:hover::after {
	transform: translate3d(100%,0,0);
}

.link--kukuri::before {
	content: attr(data-letters);
	position: absolute;
	z-index: 2;
	overflow: hidden;
	color: #80CBC4;
	white-space: nowrap;
	width: 0%;
	transition: width 0.4s 0.3s;
}

.link--kukuri:hover::before {
	width: 100%;
} */

</style>
