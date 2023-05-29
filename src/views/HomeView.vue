<template>

  <!--Modals for Login and Registration-->
    <FormModal class="formModal" v-if="isLoggingIn">
        <LoginForm @exit="isLoggingIn = !isLoggingIn"/>
    </FormModal>

    <FormModal class="formModal" v-if="isRegistering">
        <RegisterForm @exit="isRegistering = !isRegistering"/>
    </FormModal>

    <nav>
        <!--Nav-Section-->
        <section id="nav">
            <div class="container max-w-6xl mx-auto mt-6">

                <top-bar
                        @loginClick="isLoggingIn = true; isRegistering = false"
                        @registerClick="isRegistering = true; isLoggingIn = false"
                />

            </div>
        </section>
    </nav>

    <main>


        <!--Hero-Section-->
        <section id="hero">
            <div class="container max-w-6xl mx-auto md:mb-12">
                <VCalendar/>

                <!--Images-->
                <!--Hero-Image Desktop @todo: background instead of border-->
                <div class="relative hidden md:block">
                    <img src="@/assets/images/home/title-desktop2.jpg" alt="happy users of nachhilfe.at"
                         class="w-100">
                    <div class="p-4 border border-white absolute top-1/4 left-16 w-64">
                        <h2 class="text-white text-2xl mb-2">
                            nachhilfe.wien bringt dich auf Zack!
                        </h2>
                        <a href="#" class="text-mainBlue text-md uppercase underline underline-offset-4
                                hover:text-blue-600 duration-200">Termin vereinbaren</a>
                    </div>
                </div>
                <!--Hero-Image Mobile-->
                <div class="block md:hidden">
                    <img src="@/assets/images/home/title-mobile2.jpg" alt="happy users of nachhilfe.at"
                         class="w-100">
                    <div class="text-center uppercase -translate-y-1/2 mx-20 bg-mainBlue p-4 text-white
                        hover:cursor-pointer hover:bg-blue-200 hover:text-mainBlue">
                        Jetzt Termin vereinbaren
                    </div>
                </div>
            </div>
        </section>

        <!--Achievement Section-->
        <section id="achievement">
            <div class="container max-w-6xl mx-auto md:pb-12">
                <div class="flex flex-col md:flex-row justify-between items-center flex-wrap
                    space-y-12 md:space-y-0">

                    <div class="achievementItem">
                        <div>
                            2.700
                        </div>
                        <div>
                            5-Star-Reviews
                        </div>
                    </div>
                    <div class="achievementItem">

                        <div>
                            30+
                        </div>
                        <div>
                            Fachbereiche
                        </div>
                    </div>
                    <div class="achievementItem">
                        <div>
                            3.000
                        </div>
                        <div>
                            vermittelte Termine
                        </div>
                    </div>

                    <div class="md:w-1/4 md:border-r md:border-mainBlue md:order-first">
                        <img class="w-24 mx-auto" src="@/assets/images/logos/codersbay-logo.png"
                             alt="codersbay-wien-logo">
                    </div>

                </div>
            </div>

        </section>


    </main>
</template>

<script setup>

import TopBar from "@/components/home/TopBar.vue";
import FormModal from "@/components/util/FormModal.vue";
import {ref} from "vue";
import LoginForm from "@/components/authentification/LoginForm.vue";
import RegisterForm from "@/components/authentification/RegisterForm.vue";

const isLoggingIn = ref(false);
const isRegistering = ref(false);

function testClose() {
    console.log('close');
}
</script>

<style scoped lang="postcss">

.achievementItem {
    @apply flex-col items-center text-center md:text-left;

    > div:nth-child(odd) {
        @apply text-4xl md:text-6xl font-bold text-mainBlue;
    }

    > div:nth-child(even) {
        @apply text-xl md:text-2xl text-gray-700 font-light;
    }
}

.formModal {
    @apply shadow-2xl
}

</style>
