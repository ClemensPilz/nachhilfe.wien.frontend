<template>
  <div
      class="flex h-full w-full items-center justify-center rounded-xl bg-gray-100 shadow-lg"
  >
    <transition name="modal-animation">
      <div
          v-show="modalActive === 2"
          class="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-70"
      >
        <div class="modal-inner w-[600px] rounded-lg bg-white p-8">
          <div
              v-show="modalActive === 2"
              class="modal-inner flex flex-col items-center p-8"
          >
            <h4 class="mb-4 text-center text-mainBlue">Das ist Clemens</h4>
            <div class="flex items-center justify-center">
              <img
                  class="mt-5 h-40 w-40 overflow-hidden rounded-full"
                  :src="clemensImage"
                  alt="Clemens Pilz"
              />
            </div>
            <div class="scrollable-content mt-5">
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
            </div>

            <slot/>
            <ButtonRegular
                text="Close"
                class="mt-5 rounded bg-mainOrange px-4 py-2"
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
import clemensImage from "@/assets/images/team/clemens.jpg";

const props = defineProps(["modalActive"]);

const emits = defineEmits(["close"]);

function closeModal() {
  emits("close");
}

console.log(props);
</script>

<style lang="scss" scoped>

.scrollable-content {
  max-height: 400px;
  overflow-y: scroll;
}

</style>
