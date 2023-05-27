<template>
    <div class="flex flex-col w-100 space-y-2 mx-2 mb-2">

        <!--Logo and authentification/Register-->
        <div class="flex justify-between items-center px-4 md:px-0 pb-4 border-b border-sky-300">

            <!--Logo-->
            <img class="h-20 md:h-30" src="../../assets/images/logos/main-logo.png" alt="nachhilfe.wien-logo">

            <!--authentification/Register-->
            <div class="flex space-x-6 items-center">
                <div class="group hover:cursor-pointer select-none">
                    <div class="loginBtn" @click="$emit('loginClick')">
                        Login
                    </div>
                </div>
                <div class="registerBtn select-none" @click="$emit('registerClick')">
                    Register
                </div>
            </div>
        </div>
        <!--Nav-Links-->
        <div class="navLinkBar">
            <a href="#">So geht's</a>
            <a href="#">Lehrer finden</a>
            <a href="#">Blog</a>
            <a href="#">Kontakt</a>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.loginBtn {
  @apply text-xs text-mainBlue uppercase group-hover:scale-110 duration-200 md:text-lg
}

.registerBtn {
  @apply text-xs text-white uppercase px-5 py-2 bg-mainBlue rounded-3xl
  hover:bg-blue-200 hover:text-mainBlue hover:cursor-pointer hover:shadow-xl
  md:text-lg
}

.navLinkBar {
  @apply flex justify-between items-center w-full py-2
  md:items-end md:justify-end md:space-x-12
}

.navLinkBar > a {
  @apply hover:scale-110 duration-200 text-mainBlue text-sm md:text-base
}

</style>