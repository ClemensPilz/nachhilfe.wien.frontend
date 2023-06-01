<template>
  <div class="container max-w-md min-h-screen flex flex-col mx-auto justify-center items-center space-y-4">

    <!--    Normale Cards-->
    <CardNormal title="Hello Container!" content="Ich versuche jetzt einfach mal, einen Card-Text zu erstellen."
                button-text="Click me" button-bg="bg-primary"/>

    <CardNormal title="Hello Container!" content="Ich versuche jetzt einfach mal, einen Card-Text zu erstellen."
                button-text="Click me" button-bg="bg-secondary"/>

    <CardNormal title="Hello Container!" content="Ich versuche jetzt einfach mal, einen Card-Text zu erstellen."
                button-text="Click me" button-bg="bg-accent"/>

    <!--    Image-Cards-->
    <CardImage title="Das ist eine Bild-Card"
               content="Schaut ganz gut aus, oder? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur atque delectus, deleniti doloremque enim labore molestiae nemo porro quia quidem"
               button-bg="bg-primary" button-text="Image-Click"/>

    <CardImage title="Das ist eine Bild-Card"
               content="Schaut ganz gut aus, oder? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur atque delectus, deleniti doloremque enim labore molestiae nemo porro quia quidem"
               button-bg="bg-secondary" button-text="Image-Click"/>

    <CardImage title="Das ist eine Bild-Card"
               content="Schaut ganz gut aus, oder? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur atque delectus, deleniti doloremque enim labore molestiae nemo porro quia quidem"
               button-bg="bg-accent" button-text="Image-Click"/>

  </div>


</template>

<script setup>


import CardNormal from "@/components/util/elements/CardNormal.vue";
import CardImage from "@/components/util/elements/CardImage.vue";
</script>

<style lang="scss" scoped>

</style>