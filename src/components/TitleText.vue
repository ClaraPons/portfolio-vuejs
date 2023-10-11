<script setup>
  //
  import { defineProps } from 'vue';

const { title, subtitle } = defineProps(['title', 'subtitle']);
</script>

<template>
<div class="module-header mt-10">
	<h1 class="module-title my-5">{{ title }}
    <span>{{ subtitle }}</span>
  </h1> 
  <div class="module-line mt-12"></div>
</div>
</template>

<style lang="scss">

.module-line {
    background: rgba(0, 128, 128, 0.232);
    width: 55px;
    height: 1px;
    margin: auto;
    margin-top: 30px;
}

.module-header {
    margin: 0 0 50px;
    text-align: center;
}

.module-title {
    position: relative;
    margin-bottom: 50px;
    font-weight: 400;
    color: rgba(0, 128, 128, 0.411);
    text-transform: uppercase;
    letter-spacing: 15px;
}

.module-title span {
    font-size: 100px;
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    top: -55px;
    z-index: 0;
    opacity: 0.05;
    font-weight: 700;
    color: teal;
}
</style>
