<script setup>
  import TitleText from '@/components/TitleText.vue'
  import Skills from '../Skills.json'

</script>

<template>
  <v-row class="bloc pt-6">
    <TitleText title="Mes Compétences" subtitle="Portfolio" class="py-10"/>
    <v-row class="pb-8 mx-15">
      <v-col v-for="(skill, index) in Skills.slice(0, 4)" :key=index >
        <div class="eb-progress-bar-wrapper">
          <div class="eb-progress-bar" :data-value="skill.data" :style="`--value: ${skill.data}`">
            <progress  min="0" max="100" :value="skill.data"></progress>
          </div>
          <label class="eb-progress-bar-title">
            <h6>{{skill.title}}</h6>
          </label>
        </div>
      </v-col>
    </v-row>
    <v-row class="mx-15 mb-16 pb-8">
      <v-col v-for="(skill, index) in Skills.slice(4, 8)" :key=index >
        <div  class="eb-progress-bar-wrapper">
          <div class="eb-progress-bar" :data-value="skill.data" :style="`--value: ${skill.data}`">
            <progress  min="0" max="100" :value="skill.data"></progress>
          </div>
          <label class="eb-progress-bar-title">
            <h6>{{skill.title}}</h6>
          </label>
        </div>
      </v-col>
  </v-row>
</v-row>
</template>

<style lang="scss">

.bloc{
  min-height: 700px;
  flex-direction: column;
  justify-content: center;
}

@property --eb-progress-value {
  syntax: "<integer>";
  inherits: false;
  initial-value: 0;
}

@keyframes eb-progress {
  0% {
    --eb-progress-value: 0;
  }
  70%, 100%  {
    --eb-progress-value: var(--value);
  }
}

.eb-progress-bar {
  
  --size: 5rem;
  --inner-bg: #ffffff;
  // --inner-bg: #f2f2f2;
  --primary-color: rgba(0, 128, 128, 0.437);
  --secondary-color: #dae9f75d;
  --secondary-color: #dfe0e05e;

  display: flex;
  justify-content: center;
  align-items: center;
  
  width: var(--size);
  height: var(--size);
  font-size: calc(var(--size) / 5);
  color: var(--primary-color);
  background: radial-gradient(
      closest-side,
      var(--inner-bg) 79%,
      transparent 80% 100%
    ),
    conic-gradient(
      var(--primary-color) calc(var(--eb-progress-value) * 1%),
      var(--secondary-color) 0
    );
  border-radius: 50%;

  &-wrapper {
    display: grid;
    place-items: center;
    gap: 0.5rem;
    padding: 1rem;
    transform: scale(1.5);
  }

  &,
  &::before {
    animation: eb-progress 3s infinite;
  }

  &::before {
    counter-reset: percentage var(--eb-progress-value);
    content: counter(percentage) "%";
    font-weight: 400;
    color: #13242f;
    font-family: Roboto;
    font-size: 15px;
    color: #9e9e9e;
    padding: 20px 15px;
    z-index: 1;
    position: relative;
  }

  &-title {
    text-align: center;
    color: inherit;
    letter-spacing: 2px;
    line-height: 1.2;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 400;
    font-family: Roboto;
  }

  progress {
    visibility: hidden;
    width: 0;
    height: 0;
  }
}

h6 {
  // font-family: "integralcfmedium" !important;
  margin-top: 6px;
  color: #878787;
} 


</style>
