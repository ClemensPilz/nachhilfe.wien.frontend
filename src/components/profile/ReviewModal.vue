<template>
  <div
    v-if="props.isOpen"
    @click="closeModal"
    @keydown.enter="login"
    class="fixed inset-0 flex items-center justify-center z-[1001] bg-black bg-opacity-50"
  >
    <div
      @click.stop=""
      class="max-h-screen bg-white py-6 px-10 mx-2 mt-20 rounded-xl"
    >
      <h2 class="text-2xl mb-4">{{ title }}</h2>
      <div>
        <slot />

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
        </form>
      </div>

      <!--Buttons-->
      <div class="flex gap-2 justify-end">
        <button
          class="mt-4 w-fit py-2 px-4 bg-lightPrimary text-white rounded-xl"
          @click="closeModal"
        >
          Schließen
        </button>
        <button
          class="mt-4 w-fit py-2 px-4 bg-accent text-white rounded-xl"
          @click="postReview"
        >
          Absenden
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useForm } from "vee-validate";
import { useUserStore } from "@/stores/user";
import {useRoute, useRouter} from "vue-router";
import RatingSelect from "@/components/profile/RatingSelect.vue";
import axios from "axios";

const userStore = useUserStore();
const user = computed(() => userStore.user);
const router = useRouter();
const route = useRoute();

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  isOpen: {
    type: Boolean,
  },
  teacherId: {
    type: String
  }
});

const emit = defineEmits(["update:reviewModalOpen"]);

const closeModal = () => {
  emit("update:reviewModalOpen", false);
};

// Validation
const validationSchema = {
  rating() {
    return true;
  },

  text(value) {
    if (value.trim().length < 8) {
      return "Bitte Text eingeben";
    }
    return true;
  },
};

const { meta, errors, useFieldModel } = useForm({
  validationSchema: validationSchema,
  initialValues: {
    rating: "1",
    text: "",
  },
});

const [rating, text] = useFieldModel(['rating', 'text']);

async function postReview() {
  if (meta.value.valid) {
    try {
      let date = new Date();
      date = date.toISOString().slice(0,10);

      const response = await axios({
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        method: "post",
        url: `${userStore.url}/feedback`,
        data: {
          "teacherId": route.params.userId,
          "studentId": userStore.userId,
          "title": "title",
          "content": text.value,
          "rating": rating.value,
          "date": date
        }
      });
      console.log(response.data);
    } catch (e) {
      console.log(e)
    }

    console.log("valid!");
  } else {
    console.log("invalid");
  }
}
</script>

<style scoped>
label {
  @apply text-primary text-xs;
}

input {
  @apply text-gray-200 m-2 py-1 px-2 rounded-lg focus:outline-none bg-gray-500 appearance-none;
}

.error {
  @apply text-xs text-red-600 italic;
}
</style>
