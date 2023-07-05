<template>
  <nav>
    <h4 id="logo">logo</h4>
    <ul>
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="search">Suche</RouterLink>
      </li>
      <li>
        <RouterLink to="dashboard">Hilfe</RouterLink>
      </li>
      <li class="text-mainBlue">
        Login
      </li>
    </ul>
  </nav>
</template>

<script setup>

</script>

<style lang="scss" scoped>

nav {
  @apply max-w-7xl mx-auto
  items-center justify-between
  mb-20 pt-8 px-8 flex
  bg-background
}

#logo {
  @apply text-mainOrange
}

ul {
  @apply flex gap-8 md:gap-12
  text-xl
}

li {
  @apply hover:cursor-pointer
}

</style>