<template>
  <div class="grid bg-white rounded-xl shadow-lg">
    <transition name="modal-animation">
      <div v-show="modalActive2" class="modal">
        <transition name="modal-animation-inner">
          <div v-show="modalActive2" class="modal-inner">
            <h4> Das ist Clemens </h4>
            <img class="md:block hidden" src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png"
                 alt="Olivia featured Image"/>
            <p>
              Clemens ist ein junger Familienvater mit Leidenschaft fürs Coden und das Teilen von Wissen. Er möchte die
              nächste Generation inspirieren und ihnen den Zugang zu Wissen ermöglichen. Clemens liebt es, neue
              Technologien zu erlernen und innovative Lösungen zu entwickeln. Er engagiert sich in Bildungsinitiativen
              und organisiert Workshops, um Kindern die Grundlagen des Codens beizubringen. Clemens teilt sein Wissen
              durch Blogbeiträge und Vorträge, um eine positive Veränderung in der Tech-Branche zu bewirken. Als
              Familienvater ist es ihm wichtig, seine Kinder zu ermutigen, ihre eigenen Träume zu verfolgen. Clemens
              verkörpert die Werte eines engagierten Entwicklers, der sein Wissen weitergibt und die nächste Generation
              fördert.
            </p>
            <slot/>
            <ButtonRegular text="Close" class="bg-mainOrange" @click="closeModal" type="button"/>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script setup>
import ButtonRegular from "@/components/util/buttons/ButtonRegular.vue";


const props = defineProps(['modalActive2']);

const emits = defineEmits(['close']);

function closeModal() {
  emits('close')
}

console.log(props);

</script>

<style lang="less" scoped>

</style>