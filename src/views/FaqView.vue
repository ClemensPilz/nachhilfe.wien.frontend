<script setup>
import { ref, computed } from "vue";
import q from "@/data/questions.json";
import Question from "@/components/aboutUs/Question.vue";

const search = ref("");
const questions = ref(q);
const filteredQuestions = computed(() =>
  questions.value.filter((category) => {
    const matchingQuestions = category.input.filter((question) =>
      question.question.toLowerCase().includes(search.value.toLowerCase()),
    );
    return matchingQuestions.length > 0;
  }),
);
</script>

<template>
  <div>
    <div class="container mx-auto mt-8 max-w-6xl px-2">
      <h2 class="text-mainBlue">Du hast Fragen?</h2>
      <h3>Wir haben die Antworten (naja, hoffentlich die meisten!)</h3>
      <p>
        Nachfolgend finde ein paar Antworten auf die häufigsten Fragen, die im
        Bezug auf das Angebot von nachhilfe.wien auftreten könnten. Wenn du die
        gesuchte Antwort nicht finden solltest, kontaktiere uns einfach.
      </p>
    </div>

    <div class="container mx-auto mt-8 max-w-6xl px-2">
      <input v-model.trim="search" type="text" placeholder="Search..." />
    </div>

    <div class="container mx-auto mt-8 max-w-6xl px-2">
      <Question
        v-for="question in filteredQuestions"
        :key="question.id"
        :question="question"
      />

      <p class="align-center mt-10">
        Sollten Sie weitere Fragen haben, die hier nicht beantwortet wurden,
        kontaktieren Sie uns bitte über unser Kontaktformular. Wir freuen uns,
        Ihnen weiterhelfen zu können!
      </p>
    </div>
  </div>
</template>

<style scoped>
input {
  border: none;
  background-color: rgb(128, 128, 128, 0.1);
  padding: 10px;
  border-radius: 5px;
}
</style>
