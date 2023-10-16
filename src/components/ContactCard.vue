<script setup>
  //
  import TitleText from '@/components/TitleText.vue'

</script>

<template>
  <div class="align-center pt-10">
    <TitleText title="Me contacter" subtitle="Portfolio" class="pt-2 pb-5"/>
    <div class="btn-holder mt-15">
      <v-icon icon="mdi-email"  class="bg-icon pa-5 rounded-circle"/>
      <a href="mailto:claragapons@gmail.com">
        <button class="btn btn-2 hover-slide-right" >
          <span class="align-center">claragapons@gmail.com</span>
        </button>
      </a>
    </div>
    <div class="btn-holder ">
      <a href="tel:+33624436595">
        <button class="btn btn-2 hover-slide-right" >
          <span>06.24.43.65.95</span>
        </button>
      </a>
      <v-icon icon="mdi-phone"  class="bg-icon pa-5 rounded-circle"/>
    </div>
    <div class="btn-holder ">
      <v-icon icon="mdi-linkedin"  class="bg-icon pa-5 rounded-circle"/>
      <a href="https://www.linkedin.com/in/clara-pons-297bb6b3/" target="_blank">   
        <button class="btn btn-2 hover-slide-right">
            <span>www.linkedin.com/in/clara-pons/</span>
        </button>
      </a>
    </div>
    <div class="btn-holder pb-15">
      <a href="https://github.com/ClaraPons" target="_blank">   
        <button class="btn btn-2 hover-slide-right">
          <span>https://github.com/ClaraPons</span>
        </button>
      </a>
      <v-icon icon="mdi-github"  class="bg-icon pa-5 rounded-circle"/>
    </div>
</div>

</template>

<style>

/* * {
  box-sizing: border-box;
  margin: 0; padding: 0;
}
body {
  font-family: 'Roboto', sans-serif;
  color: rgb(85,75,85);
  background-color: rgb(255,255,255);
}
h1 {
  padding: 50px 0;
  font-size: 45px;
  text-align: center;
  color: rgb(54, 56, 55);
} */



:active, :hover, :focus {
  outline: 0!important;
  outline-offset: 0;
}
::before,
::after {
  position: absolute;
  content: "";
}

.btn-holder {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1000px;
  margin: 10px auto 35px;
}
.btn {
  position: relative;
  display: inline-block;
  width: auto; height: auto;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 0px 25px;
  width: 585px;
}
  .btn span {         
    position: relative;
    display: inline-block;
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
    top: 0; left: 0;
    width: 100%;
    padding: 11px 50px;
    transition: 0.3s;
  }

.bg-icon{
  background-color: rgba(0, 128, 128, 0.759);
  color: white;
}

/*--- btn-2 ---*/
.btn-2::before {
  background-color: rgba(0, 128, 128, 0.759);
  transition: 0.3s ease-out;
}
.btn-2 span {
  color: rgba(0, 128, 128, 0.759);
  border: 1px solid rgba(0, 128, 128, 0.759);
  transition: 0.2s;
}  
.btn-2 span:hover {
  color: rgb(255,255,255);
  transition: 0.2s 0.1s;
}

/* 9. hover-slide-right */
.btn.hover-slide-right::before {
  top: 0; bottom: 0; left: 0; 
  height: 100%; width: 0%;
}
.btn.hover-slide-right:hover::before {
  width: 100%;
}



</style>
