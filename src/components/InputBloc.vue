<script setup>
import { defineProps } from 'vue';

const { label, onChange, type } = defineProps(['label', 'onChange', 'type'])
</script>

<template>
    <v-text-field 
        :label=label 
        :variant=type>
    </v-text-field>
</template>