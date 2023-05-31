<template>
    <Navbar solid>
        <template #logo>
            <NavbarLogo link="https://www.google.com/" alt="Flowbite logo" image-url="https://flowbite.com/docs/images/logo.svg">
                nachhilfe.wien
            </NavbarLogo>
        </template>
        <template #default="{isShowMenu}">
            <NavbarCollapse :isShowMenu="isShowMenu">
                <NavbarLink is-active>Home</NavbarLink>
                <NavbarLink>Services</NavbarLink>
                <NavbarLink>Pricing</NavbarLink>
                <NavbarLink>Contact</NavbarLink>
            </NavbarCollapse>
        </template>
    </Navbar>
</template>

<script setup>

import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink } from 'flowbite-vue'

</script>

<style lang="scss" scoped>

</style>