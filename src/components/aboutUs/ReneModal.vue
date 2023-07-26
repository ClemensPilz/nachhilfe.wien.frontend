<template>
  <div
    class="flex h-full w-full items-center justify-center rounded-xl bg-gray-100 shadow-lg"
  >
    <transition name="modal-animation">
      <div
        v-show="modalActive === 3"
        class="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-70"
      >
        <div class="modal-inner w-[600px] rounded-lg bg-white p-8">
          <div
            v-show="modalActive === 3"
            class="modal-inner flex flex-col items-center p-8"
          >
            <h4 class="mb-4 text-center text-mainBlue">Das ist René</h4>
            <div class="flex items-center justify-center">
              <img
                class="mt-5 h-40 w-40 overflow-hidden rounded-full"
                :src="reneImage"
                alt="Rene Ali Günürün"
              />
            </div>
            <p class="mt-5 text-center">
              René ist ein äußerst ambitionierter und leidenschaftlicher
              Entwickler. Er betrachtet Wissen als kostbares Gut und teilt es
              gerne mit anderen. Als Mentor unterstützt er aufstrebende
              Entwickler und hilft ihnen, technische Herausforderungen zu
              bewältigen. René strebt stets nach Verbesserung und bleibt auf dem
              neuesten Stand der Technologie. Er ist neugierig,
              experimentierfreudig und scheut sich nicht vor neuen
              Herausforderungen. In seiner Freizeit arbeitet er an eigenen
              Projekten und nutzt die Programmierung als Ausdruck seiner
              Leidenschaft. René ist ein inspirierendes Vorbild für Entwickler,
              die das Wissen schätzen und ihre Ambitionen nutzen, um innovative
              Lösungen zu schaffen.
            </p>

            <slot />
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
import reneImage from "@/assets/images/team/rene.jpg";

const { props } = defineProps(["modalActive"]);

const emits = defineEmits(["close"]);

function closeModal() {
  emits("close");
}

console.log(props);
</script>

<style lang="less" scoped></style>
