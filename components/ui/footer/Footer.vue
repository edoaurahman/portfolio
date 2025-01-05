<template>
  <div class="bg-background pb-20">
    <div class="linebreak"></div>
    <footer class="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-6">
      <NuxtLink aria-current="page" :to="localPath('/')"
        class="router-link-active router-link-exact-active flex shrink-0 items-center"
        aria-label="Go back to home page">
        <NuxtImg src="/img/logo.png" alt="Edodev" width="40" height="40" format="webp" />
      </NuxtLink>
      <span class="text-center text-sm text-gray-400">
        © {{ year }}, Ridho Aulia' Rahman - All rights reserved.
      </span>
    </footer>
  </div>
</template>

<script lang="ts" setup>
const year = new Date().getFullYear();
const localPath = useLocalePath();
</script>

<style>
.linebreak {
  background-image: linear-gradient(96.18deg, rgba(215, 196, 255, 0) 10%, hsla(0, 0%, 78%, .24) 50%, rgba(215, 196, 255, 0) 90%);
  bottom: auto;
  height: 1px;
  left: 0;
  margin: 0 auto;
  position: relative;
  right: 0;
  top: 0;
  width: 100%;
}
</style>
