<template>
  <div class="grid bg-white rounded-xl shadow-lg">
    <transition name="modal-animation">
      <div v-show="modalActive === 1" class="modal">
        <transition name="modal-animation-inner">
          <div v-show="modalActive === 1" class="modal-inner">
            <h4>Das ist Dominik</h4>
            <img
              class="md:block hidden"
              src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
              alt="Alexa featured Image"
            />
            <p>
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
            <slot />
            <ButtonRegular
              text="Close"
              class="bg-mainOrange"
              @click="closeModal"
              type="button"
            />
          </div>
        </transition>
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
