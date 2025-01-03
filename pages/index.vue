<script setup lang="ts">
import { Icon } from "@iconify/vue";
useSeoMeta({
  title: "Home",
  description: "Welcome to my portfolio",
});

import type { Container } from "tsparticles-engine";

const onLoad = (container: Container) => {
  container.play();
};

const skills: {
  name: string;
  icon: string;
}[] = [
  { name: "Vue.js", icon: "devicon:vuejs" },
  { name: "React", icon: "devicon:react" },
  { name: "Node.js", icon: "devicon:nodejs" },
  { name: "TypeScript", icon: "devicon:typescript" },
  { name: "Tailwind", icon: "devicon:tailwindcss" },
  { name: "MongoDB", icon: "devicon:mongodb" },
  { name: "Docker", icon: "devicon:docker" },
  { name: "AWS", icon: "devicon:amazonwebservices-wordmark" },
  { name: "Firebase", icon: "devicon:firebase" },
  { name: "Nuxt.js", icon: "devicon:nuxtjs" },
  { name: "Next.js", icon: "devicon:nextjs" },
  { name: "Svelte", icon: "devicon:svelte" },
  { name: "Flutter", icon: "devicon:flutter" },
  { name: "Kotlin", icon: "devicon:kotlin" },
  { name: "Java", icon: "devicon:java" },
  { name: "Python", icon: "devicon:python" },
  { name: "Go", icon: "devicon:go" },
  { name: "C++", icon: "devicon:cplusplus" },
  { name: "C#", icon: "devicon:csharp" },
  { name: "PHP", icon: "devicon:php" },
  { name: "SQL", icon: "devicon:sqldeveloper" },
  { name: "NoSQL", icon: "catppuccin:json" },
  { name: "REST API", icon: "devicon:openapi" },
  { name: "CI/CD", icon: "stash:integrations" },
  { name: "Git", icon: "devicon:git" },
  { name: "GitHub", icon: "devicon:github" },
  { name: "GitLab", icon: "devicon:gitlab" },
  { name: "VS Code", icon: "devicon:vscode" },
  { name: "Xcode", icon: "devicon:xcode" },
  { name: "Android Studio", icon: "devicon:androidstudio" },
];

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online shopping platform built with Vue and Node.js",
    image: "https://placehold.co/600x400",
    tags: ["Vue.js", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    description: "Real-time collaborative task management application",
    image: "https://placehold.co/600x400",
    tags: ["React", "Firebase", "TypeScript"],
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio website built with Nuxt and Tailwind",
    image: "https://placehold.co/600x400",
    tags: ["Nuxt.js", "Tailwind", "Vue.js"],
  },
];

const Typed = useTypedJs();
onMounted(async () => {
  // Konfigurasi dan inisialisasi Typed
  Typed("#typed-sub-content", {
    strings: [
      "Full Stack Developer",
      "Full Stack Web/Mobile Developer | Tech Enthusiast",
    ],
    typeSpeed: 50, // Kecepatan mengetik
    backSpeed: 30, // Kecepatan menghapus
    backDelay: 2000, // Delay sebelum menghapus
    startDelay: 100, // Delay sebelum mulai
    loop: false, // Mengulang animasi
    cursorChar: "|", // Karakter kursor
    smartBackspace: true, // Hanya menghapus karakter yang berbeda
  });

  Typed("#typed-name", {
    strings: ["Ridho Aulia Rah", "Ridho Aulia' Rahman"],
    typeSpeed: 50, // Kecepatan mengetik
    backSpeed: 30, // Kecepatan menghapus
    backDelay: 500, // Delay sebelum menghapus
    startDelay: 100, // Delay sebelum mulai
    loop: false, // Mengulang animasi
    cursorChar: "|", // Karakter kursor
    smartBackspace: true, // Hanya menghapus karakter yang berbeda
  });
});
</script>

<template>
  <main class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative h-screen flex items-center justify-center">
      <!-- Background Pattern -->
      <NuxtParticles
        id="tsparticles"
        url="js/particles.json"
        :load="onLoad"
      ></NuxtParticles>
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <!-- Hero Content -->
          <h1
            class="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            <span
              class="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
            >
              <!-- Animasi typing untuk nama -->
              <span id="typed-name"></span>
            </span>
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
            <span id="typed-sub-content"></span>
          </p>
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" class="p-6">
              <NuxtLink to="/projects"> View My Work </NuxtLink>
            </Button>
            <Button variant="outline" class="p-6">
              <NuxtLink to="/contact"> Get in Touch </NuxtLink>
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Skills Section -->
    <section class="py-20 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <h2
          class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Tech Stack
        </h2>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div
            v-for="(skill, index) in skills"
            :key="index"
            class="p-6 text-center rounded-lg bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-shadow"
          >
            <div class="text-4xl mb-4 flex justify-center">
              <Icon :icon="skill.icon" />
            </div>
            <h3 class="font-medium text-gray-900 dark:text-white">
              {{ skill.name }}
            </h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest Projects Preview -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <NuxtLink
            to="/projects"
            class="text-purple-600 hover:text-purple-700 dark:text-purple-400 font-medium"
          >
            View All →
          </NuxtLink>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(project, index) in featuredProjects"
            :key="index"
            class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {{ project.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                {{ project.description }}
              </p>
              <div class="flex gap-2">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<style>
.bg-grid-gray-100 {
  background-image: linear-gradient(
      to right,
      rgba(156, 163, 175, 0.1) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(156, 163, 175, 0.1) 1px, transparent 1px);
  background-size: 24px 24px;
}

.bg-grid-gray-700 {
  background-image: linear-gradient(
      to right,
      rgba(55, 65, 81, 0.1) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(55, 65, 81, 0.1) 1px, transparent 1px);
  background-size: 24px 24px;
}
</style>
