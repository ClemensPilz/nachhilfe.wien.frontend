<template>
  <div class="flex justify-center items-center w-full h-full bg-gray-100 rounded-xl shadow-lg">
    <transition name="modal-animation">
      <div v-show="modalActive === 2"
           class="fixed inset-0 flex justify-center items-center z-50 bg-gray-800 bg-opacity-70">
        <div class="modal-inner bg-white p-8 rounded-lg w-[600px]">
          <div v-show="modalActive === 2" class="modal-inner flex flex-col items-center p-8">
            <h4 class="text-mainBlue text-center mb-4">Das ist Clemens</h4>
            <div class="flex justify-center items-center">
              <img
                  class="w-40 h-40 mt-5 rounded-full overflow-hidden"
                  src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png"
                  alt="Olivia featured Image"
              />
            </div>
            <p class="mt-5 text-center">
              Clemens ist ein junger Familienvater mit Leidenschaft fürs Coden
              und das Teilen von Wissen. Er möchte die nächste Generation
              inspirieren und ihnen den Zugang zu Wissen ermöglichen. Clemens
              liebt es, neue Technologien zu erlernen und innovative Lösungen zu
              entwickeln. Er engagiert sich in Bildungsinitiativen und
              organisiert Workshops, um Kindern die Grundlagen des Codens
              beizubringen. Clemens teilt sein Wissen durch Blogbeiträge und
              Vorträge, um eine positive Veränderung in der Tech-Branche zu
              bewirken. Als Familienvater ist es ihm wichtig, seine Kinder zu
              ermutigen, ihre eigenen Träume zu verfolgen. Clemens verkörpert
              die Werte eines engagierten Entwicklers, der sein Wissen
              weitergibt und die nächste Generation fördert.
            </p>
            <slot/>
            <ButtonRegular
                text="Close"
                class="bg-mainOrange mt-5 py-2 px-4 rounded"
                @click="closeModal"
                type="button"
            />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import ButtonRegular from "@/components/util/buttons/ButtonRegular.vue";

const props = defineProps(["modalActive"]);

const emits = defineEmits(["close"]);

function closeModal() {
  emits("close");
}

console.log(props);
</script>

<style lang="less" scoped></style>
