<template>
  <div class="grid bg-white rounded-xl shadow-lg">
    <transition name="modal-animation">
      <div v-show="modalActive3" class="modal">
        <transition name="modal-animation-inner">
          <div v-show="modalActive3" class="modal-inner">
            <h4 class="text-mainBlue"> Das ist René </h4>
            <img class="md:flex w-[20%] h-[20%] mt-5" src="@/assets/images/René-Ali%20Günürün.jpg" alt="René"/>
            <p class="mt-5">
              René ist ein äußerst ambitionierter und leidenschaftlicher Entwickler. Er betrachtet Wissen als kostbares
              Gut und teilt es gerne mit anderen. Als Mentor unterstützt er aufstrebende Entwickler und hilft ihnen,
              technische Herausforderungen zu bewältigen. René strebt stets nach Verbesserung und bleibt auf dem
              neuesten Stand der Technologie. Er ist neugierig, experimentierfreudig und scheut sich nicht vor neuen
              Herausforderungen. In seiner Freizeit arbeitet er an eigenen Projekten und nutzt die Programmierung als
              Ausdruck seiner Leidenschaft. René ist ein inspirierendes Vorbild für Entwickler, die das Wissen schätzen
              und ihre Ambitionen nutzen, um innovative Lösungen zu schaffen.
            </p>
            <slot/>
            <ButtonRegular text="Close" class="bg-mainOrange mt-5" @click="closeModal" type="button"/>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script setup>
import ButtonRegular from "@/components/util/buttons/ButtonRegular.vue";


const props = defineProps(['modalActive3']);

const emits = defineEmits(['close']);

function closeModal() {
  emits('close')
}

console.log(props);

</script>

<style lang="less" scoped>

</style>