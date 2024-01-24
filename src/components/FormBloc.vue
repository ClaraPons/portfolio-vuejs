<script setup>
  import { ref } from 'vue';
  import { contact } from '../api/contact'

  const formValues = ref({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })

  const dialog = ref(false)
  const formRef = ref(null);

  const isFormValid = () => {
    return (
      !!formValues.value.firstName &&
      !!formValues.value.lastName &&
      emailRules.every(rule => rule(formValues.value.email)) &&
      !!formValues.value.message
    );
  };

  const submitForm = async () => {
    if (isFormValid()) {
      const response = await contact(formValues.value)
      dialog.value = true
      console.log('Form submitted', response)
    }
  }

  const emailRules = [
    v => !!v || 'Email est requis', 
    v => /.+@.+\..+/.test(v) || 'Email doit être valide',
  ]

  const closeDialog = () => {  
    dialog.value=false
    formRef.value.reset();
  }


</script>

<template>
  <v-sheet max-width="600" class="mx-auto">
    <v-form ref="formRef">
      <div class="d-flex gap form_size">
          <v-text-field ref="formRefs.firstName" class="pb-2" v-model="formValues.firstName" label="Prénom" variant="outlined" :rules="[v => !!v || 'Prénom est requis']"></v-text-field>
          <v-text-field class="pb-2" v-model="formValues.lastName" label="Nom" variant="outlined" :rules="[v => !!v || 'Nom est requis']" ></v-text-field>
      </div>
      <div class="form_size">
          <v-text-field class="pb-2" v-model="formValues.email" label="Email" variant="outlined" :rules="emailRules" ></v-text-field>
          <v-textarea v-model="formValues.message" label="Votre message" variant="outlined" auto-grow rows="5" color="teal" :rules="[v => !!v || 'Un message est requis']"></v-textarea>
      </div>
      <div class="d-flex flex-column">
        <v-btn
          color="teal-lighten-3"
          class="mt-4 mx-auto text-white"
          variant="flat"
          width="200"
          @click="submitForm()"
          :disabled="!isFormValid()"
          >
          Validate
          <v-dialog
            v-model="dialog"
            activator="parent"
            width="auto"
          >
          <v-card class="text-center pa-7">
            <v-card-title class="text-teal-lighten-3 pb-0">
              Votre message a bien été envoyé !
            </v-card-title>
            <v-card-text class="text-teal-lighten-3">Merci {{ formValues.firstName }}.</v-card-text>
            <v-card-actions class="pa-0">  
              <v-btn size="small" variant="outlined" class="text-teal-lighten-3 mx-auto" @click="closeDialog()">
                <v-icon icon="mdi-arrow-left" class="pr-2"></v-icon>
                Retour
              </v-btn> 
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-btn>
      </div>
    </v-form>
  </v-sheet>
</template>

<style lang="scss">
.form_size{
  color: rgba(0, 128, 128, 0.759);
}

.gap{
  gap: 10px;
}

</style>