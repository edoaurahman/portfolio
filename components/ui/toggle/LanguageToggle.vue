<template>
  <div class="bottom-20 md:bottom-0 right-0 fixed p-4 z-40">
    <div class="flex rounded-lg bg-gray-200 dark:bg-gray-800 p-1 font-geist font-medium border dark:border-white/10 dark:bg-zinc-900/90">
      <template v-for="locale in locales">
        <button class="p-1" @click="setLocale(locale.code)">{{ locale.code }}</button>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { setLocale, locales } = useI18n();
</script>

<style></style>
