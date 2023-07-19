<template>
  <div class="grid rounded-xl bg-white shadow-lg">
    <transition name="modal-animation">
      <div v-show="modalActive === 3" class="modal">
        <transition name="modal-animation-inner">
          <div v-show="modalActive === 3" class="modal-inner">
            <h4 class="text-mainBlue">Das ist René</h4>
            <img
              class="mt-5 h-[20%] w-[20%] md:flex"
              src="@/assets/images/René-Ali%20Günürün.jpg"
              alt="René"
            />
            <p class="mt-5">
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
              class="mt-5 bg-mainOrange"
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
