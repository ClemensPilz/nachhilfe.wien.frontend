<template>
  <FormModal :is-active="appStore.devModals.dominik">
    <CardLarge class="m-0">
      <template v-slot:content>
        <DevForm
          title="Dominik"
          text="Dominik Köberl ist ein ambitionierter Entwickler, der sein Wissen gerne
                teilt. Er strebt danach, anderen zu helfen, ihr volles Potenzial
                auszuschöpfen. Neben seiner Arbeit liebt er es, in seiner Freizeit
                Gitarre zu spielen. Dominik ist neugierig, immer auf dem neuesten
                Stand der Technologie und bestrebt, kontinuierlich dazuzulernen.
                Er verkörpert die Eigenschaften eines engagierten und inspirierenden
                Entwicklers, der sowohl in der Tech-Welt, als auch in der Musik
                zuhause ist."
        >
          <img
            class="mx-auto h-[200px] w-[200px] overflow-hidden rounded-full"
            :src="dominikImage"
            alt="Image of Dominik Köberl"
          />
        </DevForm>
      </template>
    </CardLarge>
  </FormModal>

  <FormModal :is-active="appStore.devModals.clemens">
    <CardLarge class="m-0">
      <template v-slot:content>
        <DevForm
          title="Clemens"
          text="Clemens Pilz ist ein junger Familienvater mit Leidenschaft fürs Coden
                und das Teilen von Wissen. Er liebt es, neue Technologien zu erlernen und innovative Lösungen
                zu entwickeln. Als Familienvater ist es ihm wichtig, seine Kinder zu
                ermutigen, ihre eigenen Träume zu verfolgen. Clemens verkörpert
                die Werte eines engagierten Entwicklers, der Wissen als zu teilende Ressource versteht."
        >
          <img
            class="mx-auto h-[200px] w-[200px] overflow-hidden rounded-full"
            :src="clemensImage"
            alt="Image of Clemens Pilz"
          />
        </DevForm>
      </template>
    </CardLarge>
  </FormModal>

  <FormModal :is-active="appStore.devModals.rene">
    <CardLarge class="m-0">
      <template v-slot:content>
        <DevForm
          title="René"
          text="René Günürün ist ein ambitionierter und leidenschaftlicher
                Entwickler. Er betrachtet Wissen als kostbares Gut und teilt es
                gerne mit anderen. Er strebt stets nach Verbesserung und bleibt auf dem
                neuesten Stand der Technologie. Er ist neugierig,
                experimentierfreudig und scheut sich nicht vor neuen
                Herausforderungen. In seiner Freizeit arbeitet er an eigenen
                Projekten und nutzt die Programmierung als Ausdruck seiner
                Leidenschaft."
        >
          <img
            class="mx-auto h-[200px] w-[200px] overflow-hidden rounded-full"
            :src="reneImage"
            alt="Image of René Günürün"
          />
        </DevForm>
      </template>
    </CardLarge>
  </FormModal>
</template>

<script setup>
import FormModal from "@/components/util/modals/FormModal.vue";
import CardLarge from "@/components/util/cards/CardLarge.vue";
import DevForm from "@/components/util/forms/DevForm.vue";
import clemensImage from "@/assets/images/team/clemens.jpg";
import dominikImage from "@/assets/images/team/dominik.jpg";
import reneImage from "@/assets/images/team/rene.jpg";

import { useAppStore } from "@/stores/app.js";

const appStore = useAppStore();
</script>

<style lang="scss" scoped></style>
