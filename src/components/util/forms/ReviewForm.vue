<template>
  <form>

    <RatingSelect v-model="rating" :options="['1', '2', '3', '4', '5']" />

    <label for="text">Review:</label>
    <input
        type="text"
        name="text"
        v-model="text"
        placeholder="Mein Review..."
    />
    <div class="error">{{ errors.text }}</div>

    <div class="mt-2 flex justify-around">
      <ButtonRegular @click="$emit('close')" class="bg-secondary" text="Zurück"/>
      <ButtonRegular @click="postReview" class="bg-mainOrange" text="Absenden"/>

    </div>

  </form>
</template>

<script setup>

import ButtonRegular from "@/components/util/buttons/ButtonRegular.vue";
import {useForm} from "vee-validate";
import RatingSelect from "@/components/profile/public/RatingSelect.vue";
import axios from "axios";
import {useUserStore} from "@/stores/user";

const props = defineProps(['teacherId', 'studentId']);
const emit = defineEmits(['close'])
const userStore = useUserStore();

const validationSchema = {
  rating() {
    return true;
  },

  text(value) {
    if (value.trim().length < 8) {
      return 'Bitte Text eingeben';
    }
    return true;
  }
}

const {meta, errors, useFieldModel} = useForm({
  validationSchema: validationSchema,
  initialValues: {
    rating: 5,
    text: '',
  }
})

const [rating, text] = useFieldModel(['rating', 'text']);

async function postReview() {
  if (!meta.value.valid) {
    console.log('invalid');
    return;
  }

  try {
    let date = new Date();
    date = date.toISOString().slice(0, 10);

    const response = await axios({
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      },
      method: "post",
      url: `${userStore.url}/feedback`,
      data: {
        "teacherId": parseInt(props.teacherId),
        "studentId": parseInt(props.studentId),
        "title": `Review von ${userStore.user.firstName}`,
        "content": text.value,
        "rating": rating.value,
        "date": date
      }
    });
    console.log(response.data);
    console.log(response.status);
    if (response.status === 201) {
      alert('Vielen Dank für dein Review!');
      closeModal();
    } else {
      alert('Fehler beim Absenden des Reviews!');
      emit('close');
    }
  } catch (e) {
    console.log(e)
    alert('Fehler beim Absenden des Reviews!');
    emit('close');
  }
}

</script>

<style lang="scss" scoped>

form {
  @apply w-full flex flex-col bg-background max-h-screen py-2 overflow-y-scroll
}

label {
  @apply text-small text-secondary
}

input {
  @apply px-4 py-2 m-2 rounded-3xl text-p
}

.error {
  @apply text-red-700
}

</style>