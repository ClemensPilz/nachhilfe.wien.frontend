<template>
  <transition name="modal-animation">
    <div v-show="modalActive" class="modal">
    <transition name="modal-animation-inner">
      <div v-show="modalActive" class="modal-inner">
        <!--Modal Content-->
        <slot/>
        <button @click="closeModal" type="button">CLOSE</button>
      </div>
    </transition>
  </div>
  </transition>

</template>

<script setup>

const props = defineProps(['modalActive']);

const emits = defineEmits(['close']);

function closeModal(){
  emits('close')
}

console.log(props);

</script>

<style lang="less" scoped>

</style>