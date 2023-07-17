<script setup>

const {question} = defineProps(["questions"]);


</script>

<template>
  <div class="question-container">
    <h1 class="question">
      {{ questions.question }}
    </h1>
  </div>
  <div class="options-container">
    <div v-for="input in questions.input"
         :key="input.id"
         class="input">
      <p class="option-label">{{ input.question }}</p>
      <div class="option-value">
        <p>{{input.answer}}</p>
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

.option {
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;
}

.option-label {
  background-color: bisque;
  width: 50px;
  height: 50px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.option-value {
  background-color: rgb(244, 239, 239);
  width: 100%;
  font-size: 30px;
  padding: 0 20px;
}
</style>