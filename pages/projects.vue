<template>
  <div class="flex flex-col items-center justify-center pt-32">
    <span
      class="font-newsreader italic text-white-shadow text-center text-4xl"
      >{{ $t("projects.title") }}</span
    >
    <span class="text-lg font-geist italic text-gray-500">{{
      $t("projects.sub_title")
    }}</span>
  </div>
  <section class="py-20 px-4 md:px-8">
    <div class="max-w-6xl mx-auto">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <MacCard
          title="tes"
          year="2024"
          image="https://canvas.hrcd.fr/_ipx/w_3072/projects/hr-folio.webp"
          link="https://hrcd.fr/"
        />
        <MacCard
          title="tes"
          year="2024"
          image="https://canvas.hrcd.fr/_ipx/w_3072/projects/hr-folio.webp"
          link="https://hrcd.fr/"
        />
        <MacCard
          title="tes"
          year="2024"
          image="https://canvas.hrcd.fr/_ipx/w_3072/projects/hr-folio.webp"
          link="https://hrcd.fr/"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { t } = useI18n();

useSeoMeta({
  title: t("projects.title"),
  description: "A list of projects I've worked on",
});
</script>

<style></style>
