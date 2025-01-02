<script lang="ts" setup>
import ThemeToggle from "@/components/ui/toggle/ThemeToggle.vue";
import { Icon } from '@iconify/vue'

type Link = {
  name: string;
  icon: string;
  path: string;
}

const links: Link[] = [
  {
    name: 'Home',
    icon: 'lucide:house',
    path: '/',
  },
  {
    name: 'Projects',
    icon: 'lucide:proportions',
    path: '/projects',
  },
  {
    name: 'About',
    icon: 'lucide:user',
    path: '/about',
  },
  {
    name: 'Contact',
    icon: 'lucide:mail',
    path: '/contact',
  },
];
</script>

<template>
  <div class="w-full flex justify-center fixed bottom-5 md:bottom-auto z-50">
    <Card
      class="dark:bg-slate-900 transition-all duration-300 bg-card border-0 flex items-center justify-center rounded-2xl mt-5 shadow-md w-auto dark:border-2 hover:shadow-lg">
      <ul class="flex items-center py-3 px-4 gap-5 text-card-foreground hover:gap-7 transition-all duration-300">
        <template v-for="link in links">
          <li>
            <NuxtLink :to="link.path" exact-active-class="text-primary">
              <Button variant="outline" :class="{'shadow-2xl shadow-gray-800 dark:shadow-white': $route.path === link.path}">
                <Icon :icon="link.icon" />
              </Button>
            </NuxtLink>
          </li>
        </template>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </Card>
  </div>
</template>

<style></style>