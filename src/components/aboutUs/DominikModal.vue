<template>
  <div class="flex justify-center items-center w-full h-full bg-gray-100 rounded-xl shadow-lg">
    <transition name="modal-animation">
      <div v-show="modalActive === 1"
           class="fixed inset-0 flex justify-center items-center z-50 bg-gray-800 bg-opacity-70">
        <div class="modal-inner bg-white p-8 rounded-lg w-[600px]">
          <div v-show="modalActive === 1" class="modal-inner flex flex-col items-center p-8">
            <h4 class="text-mainBlue text-center mb-4"> Das ist Dominik</h4>
            <div class="flex justify-center items-center">
              <img
                  class="w-40 h-40 mt-5 rounded-full overflow-hidden"
                  src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                  alt="Alexa featured Image"
              />
            </div>
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
