<script setup>

</script>

<template>
    <main>
        <!--Hero-Section-->
        <section id="hero">
            <div class="container max-w-6xl mx-auto mt-6 md:pb-12">
                <!--Logo and Login-->
                <div class="flex flex-col w-100 space-y-2 mx-2 mb-2">
                    <div class="flex justify-between items-center pb-4 border-b border-sky-300">
                        <img class="h-20 md:h-30" src="@/assets/images/logos/main-logo.png" alt="nachhilfe.wien-logo">
                        <div class="flex space-x-6 items-center">
                            <div class="group hover:cursor-pointer">
                                <div class="text text-lg text-mainBlue uppercase group-hover:scale-110 duration-200">
                                    login
                                </div>
                            </div>
                            <div class="text text-lg text-white uppercase px-5 py-2 bg-mainBlue rounded-3xl
                            hover:bg-blue-200 hover:text-mainBlue hover:cursor-pointer hover:shadow-xl">
                                registrieren
                            </div>
                        </div>
                    </div>
                    <!--Nav-Links-->
                    <div class="flex justify-between items-center w-100 py-2">
                        <a href="#" class="navlink">So geht's</a>
                        <a href="#" class="navlink">Preise</a>
                        <a href="#" class="navlink">Fächer</a>
                        <a href="#" class="navlink">Lehrer werden</a>
                        <a href="#" class="navlink">Blog</a>
                        <a href="#" class="navlink">Kontakt</a>
                    </div>
                </div>
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

                    <div class="flex-col items-center text-center md:text-left">
                        <div class="text-4xl md:text-6xl font-bold text-mainBlue">
                            2.700
                        </div>
                        <div class="text-xl md:text-2xl text-gray-700 font-light">
                            5-Star-Reviews
                        </div>
                    </div>
                    <div class="flex-col items-center text-center md:text-left">

                        <div class="text-4xl md:text-6xl font-bold text-mainBlue">
                            30+
                        </div>
                        <div class="text-xl md:text-2xl text-gray-700 font-light">
                            Fachbereiche
                        </div>
                    </div>
                    <div class="flex-col items-center text-center md:text-left">
                        <div class="text-4xl md:text-6xl font-bold text-mainBlue">
                            3.000
                        </div>
                        <div class="text-xl md:text-2xl text-gray-700 font-light">
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

<style scoped>

.navlink {
    @apply hover:scale-110 duration-200 text-mainBlue
}

</style>
