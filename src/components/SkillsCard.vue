<script setup>
  //
  import TitleText from '@/components/TitleText.vue'
  
</script>

<template>
  <v-row class="bloc pt-6">
    <TitleText title="Mes Compétences" subtitle="Portfolio" class="py-10"/>
    <v-row class="pb-8 mx-15">
      <v-col>
        <div class="eb-progress-bar-wrapper">
          <div class="eb-progress-bar html" data-value="95" style="--value: 95; --col: #FF5089">
            <progress id="html" min="0" max="100" value="95"></progress>
          </div>
    
          <label for="html" class="eb-progress-bar-title">
            <h6>Html/CSS</h6>
          </label>
        </div>
      </v-col>
      
      <v-col>
        <div class="eb-progress-bar-wrapper">
          <div class="eb-progress-bar py" data-value="90" style="--value: 90; --col: #AD0346">
            <progress id="py" min="0" max="100" value="90"></progress>
          </div>
    
          <label for="py" class="eb-progress-bar-title">
            <h6>Vue JS</h6>
          </label>
        </div>
      </v-col>
      <v-col>
        <div class="eb-progress-bar-wrapper">
          <div class="eb-progress-bar py" data-value="85" style="--value: 85; --col: #AD0346">
            <progress id="py" min="0" max="100" value="85"></progress>
          </div>
    
          <label for="py" class="eb-progress-bar-title">
            <h6>React JS</h6>
          </label>
        </div>
      </v-col>
      <v-col>
        <div class="eb-progress-bar-wrapper">
          <div class="eb-progress-bar js" data-value="80" style="--value: 80; --col: #E8232E">
            <progress id="js" min="0" max="100" value="80"></progress>
          </div>
    
          <label for="js" class="eb-progress-bar-title">
            <h6>JavaScript</h6>
          </label>
        </div>
      </v-col>

    </v-row>
    <v-row class="mx-15 mb-16 pb-8">
      <v-col>
        <div class="eb-progress-bar-wrapper">
          <div class="eb-progress-bar py" data-value="75" style="--value: 75; --col: #AD0346">
            <progress id="py" min="0" max="100" value="75"></progress>
          </div>
    
          <label for="py" class="eb-progress-bar-title">
            <h6>Node JS</h6>
          </label>
        </div>
      </v-col>
      <v-col>
        <div class="eb-progress-bar-wrapper">
          <div class="eb-progress-bar py" data-value="75" style="--value: 75; --col: #AD0346">
            <progress id="py" min="0" max="100" value="75"></progress>
          </div>
    
          <label for="py" class="eb-progress-bar-title">
            <h6>Express JS</h6>
          </label>
        </div>
      </v-col>
      <v-col>
        <div class="eb-progress-bar-wrapper">
          <div class="eb-progress-bar py" data-value="65" style="--value: 65; --col: #AD0346">
            <progress id="py" min="0" max="100" value="65"></progress>
          </div>
    
          <label for="py" class="eb-progress-bar-title">
            <h6>SQL</h6>
          </label>
        </div>
      </v-col>
      <v-col>
        <div class="eb-progress-bar-wrapper">
          <div class="eb-progress-bar py" data-value="50" style="--value: 50; --col: #AD0346">
            <progress id="py" min="0" max="100" value="50"></progress>
          </div>
    
          <label for="py" class="eb-progress-bar-title">
            <h6>Python</h6>
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
