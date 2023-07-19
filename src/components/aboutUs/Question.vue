<script setup>
const props = defineProps(["question"]);
</script>

<template>
  <div class="container mx-auto max-w-6xl mt-8 px-2">
    <div class="question-container">
      <h1 class="question">
        {{ props.question.id }}. {{ props.question.name }}
      </h1>
    </div>
    <div class="options-container">
      <div v-for="input in props.question.input" :key="input.id" class="input">
        <p class="option-label">{{ input.id }}. {{ input.question }}</p>
        <div class="option-value">
          <p>{{ input.answer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.question-container {
  margin-top: 20px;
}

.question {
  font-size: 40px;
  margin-bottom: 20px;
}

.options-container {
  margin-top: 20px;
}

.option-value {
  font-size: 20px;
  margin-bottom: 10px;
  margin-left: 25px;
  margin-top: 10px;
}
</style>
