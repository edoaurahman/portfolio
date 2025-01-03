<template>
  <div class="bottom-0 right-0 fixed p-4">
    <div class="flex rounded-full bg-gray-200 dark:bg-gray-800 p-1 font-geist">
      <template v-for="locale in locales">
        <Toggle @click="setLocale(locale.code)">{{ locale.code }}</Toggle>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { setLocale, locales } = useI18n();
</script>

<style></style>
