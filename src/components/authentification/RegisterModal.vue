<template>
  <transition name="fade">
    <div v-if="props.isOpen" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div class="bg-white p-6 rounded">
        <h2 class="text-2xl mb-4">{{ title }}</h2>
        <div class="modal-body">
          <slot></slot>
        </div>
        <button class="mt-4 py-2 px-4 bg-red-500 text-white rounded" @click="closeModal">Close</button>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  isOpen: {
    type: Boolean
  }
})

const emit = defineEmits(['update:registerOpen'])

const closeModal = () => {
  emit('update:registerOpen', false)
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
