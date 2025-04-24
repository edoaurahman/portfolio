<template>
  <div class="flex flex-col items-center justify-center pt-32">
    <span class="font-newsreader italic text-white-shadow text-center text-4xl">{{ $t("projects.title") }}</span>
    <span class="text-lg font-geist italic text-gray-500">{{
      $t("projects.sub_title")
    }}</span>
  </div>
  <section class="py-20 px-4 md:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <template v-for="(project, index) in featuredProjects" :key="index">
          <MacCard :title="`${project.title}`" :year="`${project.year}`" :image="`${project.image}`"
            :link="`${project.link}`" />
        </template>
      </div>
    </div>
  </section>
  <div class="flex flex-col items-center justify-center pt-32">
    <span class="font-newsreader italic text-white-shadow text-center text-4xl">{{ $t("projects.oot") }}</span>
    <span class="text-lg font-geist italic text-gray-500">{{
      $t("projects.other_skills")
    }}</span>
  </div>
  <section class="py-20 px-4 md:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <template v-for="(project, index) in ootProjects" :key="index">
          <MacCard :title="`${project.title}`" :year="`${project.year}`" :image="`${project.image}`"
            :link="`${project.link}`" />
        </template>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { t } = useI18n();
import { featuredProjects, ootProjects } from '~/data/featured-projects';
useSeoMeta({
  title: t("projects.title"),
  description: "A list of projects I've worked on",
});

</script>

<style></style>
