<script setup>
  //
  // let Img = require("../img/Untitled.png")

</script>

<template>
 
 <img src="../../public/img/picture-clara.png" class="imgHeader">

</template>


<style>
.imgHeader {
  --_g: 10% /45% 45% no-repeat linear-gradient(#000 0 0);
  --m:
    left   var(--_i,0%) top    var(--_g),
    bottom var(--_i,0%) left   var(--_g),
    top    var(--_i,0%) right  var(--_g),
    right  var(--_i,0%) bottom var(--_g);
  -webkit-mask: var(--m);
          mask: var(--m);
  filter: grayscale();
  transition: .3s linear;
  cursor: pointer;
  height: 500px;
}

.imgHeader:hover {
  --_i: 10%;
  filter: grayscale(0);
}


</style>
