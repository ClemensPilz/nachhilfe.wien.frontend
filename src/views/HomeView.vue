<template>
  <div class="container max-w-6xl min-h-full mx-auto">
    <LoginModal />

    <!--Navbar-->
    <NavBar>
      <div class="container mx-auto px-4">
        <div class="flex space-x-2">
          <ButtonSecondary text="Login" @click="openLoginModal" />
          <ButtonPrimary text="Register" @click="openRegisterModal" />
        </div>
      </div>
    </NavBar>



    <!--Modal-->
    <RegisterModal :isOpen="registerOpen" title="Neuen Account anlegen" @update:registerOpen="v => registerOpen = v" />

    <LoginModal :isOpen="loginOpen" title="Einloggen" @update:loginOpen="v => loginOpen = v" />

    <!--Top-Jumbo-->
    <section class="mb-12">
      <HeroImage/>
    </section>

    <!--Feature-Block-->
    <section class="mb-12 md:mx-10">
      <FeatureBlock/>
    </section>

    <!--Testimonial-->
    <section>
      <TestimonialHorizontal
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              scelerisque diam non nisi semper, et elementum lorem ornare.
              Maecenas placerat facilisis mollis. Duis sagittis ligula in
              sodales vehicula."
          name="Anna Annabauer"
          description="Studentin"
          img-source="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.jpg"
          img-alt="Avatar von Anna Annabauer"/>
    </section>

    <!--Timeline-->
    <section class="mb-12 mx-16 lg:mx-44">
      <TimeLine/>
    </section>

    <!--Lehrer und Schüler Cards-->
    <section class="mb-12">
      <div class="flex flex-col md:flex-row gap-4 md:gap-10">
        <CardNormal title="Nachhilfe finden" class="text-center md:w1/2"
                    content="Melde dich jetzt an, um einen Nachhilfelehrer in deiner Umgebung zu finden."
                    button-text="anmelden" button-bg="bg-accent"/>

        <CardNormal title="Lehrer werden" class="text-center md:w-1/2"
                    content="Du möchtest dein Wissen weitergeben und selbst Lehrer werden? Kontaktiere uns über das Kontaktformular."
                    button-text="Kontakt" button-bg="bg-darkPrimary"/>
      </div>
    </section>

    <!--Footer-->
    <section>
      <FooterBar/>
    </section>

  </div>
</template>

<script setup>
import CardNormal from "@/components/util/elements/CardNormal.vue";
import NavBar from "@/components/global/NavBar.vue";
import HeroImage from "@/components/home/HeroImage.vue";
import FeatureBlock from "@/components/home/FeatureBlock.vue";
import TestimonialHorizontal from "@/components/util/elements/TestimonialHorizontal.vue";
import TimeLine from "@/components/home/TimeLine.vue";
import FooterBar from "@/components/global/FooterBar.vue";
import LoginModal from "@/components/authentification/LoginModal.vue";
import {ref} from "vue";
import RegisterModal from "@/components/authentification/RegisterModal.vue";
import ButtonSecondary from "@/components/util/elements/ButtonSecondary.vue";
import ButtonPrimary from "@/components/util/elements/ButtonPrimary.vue";

const registerOpen = ref(false)
const loginOpen = ref(false)

const openRegisterModal = () => {
  registerOpen.value = true
}

const openLoginModal = () => {
  loginOpen.value = true
}

</script>

<style lang="scss" scoped>

</style>