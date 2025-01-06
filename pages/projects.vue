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
          <MacCard :title="`${project.title}`" :year="`${project.year}`" :image="`${project.image}`" :link="`${project.link}`" />
        </template>
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

const featuredProjects = [
  {
    title: "Booking Room Polinema",
    link: "https://github.com/edoaurahman/booking-class-2g",
    year: "2023",
    image: "/img/projects/bookingroom.png",
  },
  {
    title: "Portal RW",
    link: "https://github.com/edoaurahman/PORTAL-RW",
    year: "2024",
    image: "/img/projects/portal-rw.png",
  },
  {
    title: "HerbaScan",
    link: "https://github.com/orgs/PBL-2024/repositories",
    year: "2024",
    image: "/img/projects/herbascan.png",
  },
  {
    title: "SmartBooking",
    link: "https://github.com/edoaurahman/smartbooking",
    year: "2023",
    image: "/img/projects/smartbooking.png",
  },
  {
    title: "Simasam",
    link: "https://github.com/rafsanalhad/simasam",
    year: "2024",
    image: "/img/projects/simasam.png",
  },
  {
    title: "Aluma",
    link: "https://github.com/edoaurahman/speechify",
    year: "2023",
    image: "/img/projects/aluma.png",
  },
  {
    title: "Vandel.id",
    link: "https://vandel.id",
    year: "2024",
    image: "/img/projects/vandel.png",
  },
  {
    title: "Nuxt Typedjs",
    link: "https://www.npmjs.com/package/nuxt-typedjs",
    year: "2025",
    image: "/img/projects/nuxt-typedjs.gif",
  },
];

</script>

<style></style>
