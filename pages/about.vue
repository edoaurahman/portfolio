<template>
  <section class="py-32 px-4 md:px-8">
    <div class="max-w-6xl mx-auto">
      <h2
        class="font-newsreader italic text-white-shadow text-center text-4xl">
        About Me</h2>
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <p class="text-lg text-gray-600">
            Seorang pengembang web passionate dengan pengalaman 3 tahun dalam membangun aplikasi web modern.
            Saya menggabungkan kreativitas dengan keahlian teknis untuk menciptakan solusi digital yang menarik.
          </p>
          <div class="flex flex-wrap gap-4">
            <span class="px-4 py-2 bg-gray-100 rounded-full text-gray-700">Vue.js</span>
            <span class="px-4 py-2 bg-gray-100 rounded-full text-gray-700">Nuxt.js</span>
            <span class="px-4 py-2 bg-gray-100 rounded-full text-gray-700">Tailwind CSS</span>
            <span class="px-4 py-2 bg-gray-100 rounded-full text-gray-700">Node.js</span>
          </div>
        </div>
        <div class="relative">
          <div class="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
            <img src="https://placehold.co/600x450" alt="Profile"
              class="object-cover w-full h-full rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: 'About Me',
  description: 'Seorang pengembang web passionate dengan pengalaman 3 tahun dalam membangun aplikasi web modern.',
})
</script>

<style></style>