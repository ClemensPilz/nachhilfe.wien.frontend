<template>
  <div class="flex justify-center items-center w-full h-full bg-gray-100 rounded-xl shadow-lg">
    <transition name="modal-animation">
      <div v-show="modalActive === 3"
           class="fixed inset-0 flex justify-center items-center z-50 bg-gray-800 bg-opacity-70">
        <div class="modal-inner bg-white p-8 rounded-lg w-[600px]">
          <div v-show="modalActive === 3" class="modal-inner flex flex-col items-center p-8">
            <h4 class="text-mainBlue text-center mb-4">Das ist René</h4>
            <div class="flex justify-center items-center">
              <img
                  class="w-40 h-40 mt-5 rounded-full overflow-hidden"
                  src="@/assets/images/René-Ali%20Günürün.jpg"
                  alt="René"
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

const {props} = defineProps(["modalActive"]);

const emits = defineEmits(["close"]);

function closeModal() {
  emits("close");
}

console.log(props);
</script>

<style lang="less" scoped></style>
