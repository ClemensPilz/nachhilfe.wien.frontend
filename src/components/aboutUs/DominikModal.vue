<template>
  <div
      class="flex h-full w-full items-center justify-center rounded-xl bg-gray-100 shadow-lg"
  >
    <transition name="modal-animation">
      <div
          v-show="modalActive === 1"
          class="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-70"
      >
        <div class="modal-inner w-[600px] rounded-lg bg-white p-8">
          <div
              v-show="modalActive === 1"
              class="modal-inner flex flex-col items-center p-8"
          >
            <h4 class="mb-4 text-center text-mainBlue">Das ist Dominik</h4>
            <div class="flex items-center justify-center">
              <img
                  class="mt-5 h-40 w-40 overflow-hidden rounded-full"
                  :src="dominikImage"
                  alt="Dominik Köberl"
              />
            </div>
            <div class="scrollable-content mt-5">
              <p class="mt-5 text-center">
                Dominik ist ein ambitionierter Entwickler, der sein Wissen gerne
                teilt. Er strebt danach, anderen zu helfen, ihr volles Potenzial
                auszuschöpfen. Neben seiner Arbeit liebt er es, in seiner Freizeit
                Gitarre zu spielen. Dominik ist neugierig, immer auf dem neuesten
                Stand der Technologie und bestrebt, kontinuierlich dazuzulernen.
                Er ist ein talentierter Entwickler und ein großartiger
                Kommunikator, der sein Wissen durch verschiedene Plattformen
                teilt. Sein Ziel ist es, anderen zu helfen, ihre technischen
                Fähigkeiten zu verbessern und ihre Ziele zu erreichen. Dominik
                verkörpert die Eigenschaften eines engagierten und inspirierenden
                Entwicklers, der sowohl in der Tech-Welt als auch in der Musik
                Anerkennung findet.
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
import dominikImage from "@/assets/images/team/dominik.jpg";

const props = defineProps(["modalActive"]);

const emits = defineEmits(["close"]);

function closeModal() {
  emits("close");
}

console.log(props);
</script>

<style lang="scss" scoped>

.scrollable-content {
  max-height:  400px;
  overflow-y: scroll;
}

</style>
