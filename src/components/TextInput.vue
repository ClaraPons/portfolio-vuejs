<script setup>
import { defineProps } from 'vue';

const {label, onChange, type} = defineProps(['label', 'onChange', 'type'])
</script>

<template>
    <v-textarea
          :label=label
          auto-grow
          :variant=type
          rows="5"
          color="teal"
    ></v-textarea>
</template>