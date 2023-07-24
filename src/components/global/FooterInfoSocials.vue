<template>
  <ul class="flex w-fit gap-4">
    <li>
      <a href="https://www.twitter.com" target="_blank">
        <HashtagIcon class="w-6" />
      </a>
    </li>
    <li>
      <a href="https://www.github.com" target="_blank">
        <CodeBracketIcon class="w-6" />
      </a>
    </li>
    <li>
      <a href="mailto:office@clemenspilz.com">
        <AtSymbolIcon class="w-6" />
      </a>
    </li>
  </ul>
</template>

<script setup>
import { HashtagIcon } from "@heroicons/vue/20/solid";
import { CodeBracketIcon } from "@heroicons/vue/20/solid";
import { AtSymbolIcon } from "@heroicons/vue/20/solid";
</script>

<style lang="scss" scoped></style>
