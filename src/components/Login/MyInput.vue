<template>

  <div class="inputField">
      <input type="text" v-model="value" />
      <br>
      <span>{{errorMessage}}</span>
  </div>
</template>

<script setup>

import {useField} from "vee-validate";
import {defineProps} from "vue";

const props = defineProps({
    name: {
        type: String,
        required: true
    }
})

const {errorMessage, value } = useField(() => props.name);

</script>

<style lang="scss" scoped>

.inputField {

}

</style>