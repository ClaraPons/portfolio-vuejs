<script setup>
  import ImgHeader from '@/components/ImgHeader.vue'
  import ToolbarRs from '@/components/ToolbarRs.vue'
  import CarrouselCard from '@/components/CarrouselCard.vue'
  import SkillsCard from '@/components/SkillsCard.vue'
  import ContactCard from '@/components/ContactCard.vue'
  import FooterCard from '@/components/FooterCard.vue'
  import PresentationCard from '@/components/PresentationCard.vue'

  const scrollToAnchor = () => {
    const element = document.getElementById('presentation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

</script>

<template>
  <div>
    <v-responsive class="align-center fill-height mb-5 responsive"> 
      <v-row class="align-center my-15">
        <v-col cols="2">
          <ToolbarRs/>
        </v-col>

        <v-col class="header-left" cols="3" >
          <h2 data-text="Bonjour">Bonjour</h2>          
          <p  class="text-h6 pt-5 text-grey-lighten-1 font-weight-light">Je m'appelle Clara PONS, je suis développeuse Web Fullstack Junior </p>
          <v-btn
            color="teal-lighten-3"
            class=" mt-10 text-white"
            variant="flat"
            :ripple="false"
            @click="scrollToAnchor"
          >
            Voir mon profil
          </v-btn>
        </v-col>
          <v-col cols="7" class="d-flex justify-center mb-10">
            <ImgHeader/>
          </v-col>
      </v-row>
      <section id="section05" class="demo" @click="scrollToAnchor"> 
        <a ><span></span></a>
      </section>
    </v-responsive>
    <PresentationCard  id="presentation"/>
    <SkillsCard id="skills"/>
    <CarrouselCard id="projects"/>
    <ContactCard id="contact"/>
    <FooterCard />
  </div>
</template>

<style>

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap");

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: "Poppins", sans-serif;
}

p, strong{
	font-family: "Poppins Thin", sans-serif;
}


h2 {
	color: rgba(0, 128, 128, 0.128);
	font-size: 4.85vw;
	position: relative;
	text-transform: uppercase;
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
		width: 100%;
	}
}


#section05 a {
  padding-top: 70px;
  cursor: pointer;
}
#section05 a span {
  position: absolute;
  top: 84%;
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


</style>
