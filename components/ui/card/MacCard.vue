<template>
  <div>
    <NuxtLink :to="`${props.link}`" rel="noopener noreferrer" target="_blank" :aria-label="`${props.title} project link`"
      class="group relative flex cursor-pointer flex-col gap-1 rounded-lg border border-white/10 bg-zinc-900/80 p-1 shadow-2xl shadow-zinc-950/50 ">
      <div class="flex gap-1 px-1 py-[2px]">
        <div
          class="size-2 rounded-full bg-red-500/90 transition-colors duration-300 group-hover:bg-red-500/90 sm:bg-white/10">
        </div>
        <div
          class="size-2 rounded-full bg-yellow-500/90 transition-colors duration-300 group-hover:bg-yellow-500/90 sm:bg-white/10">
        </div>
        <div
          class="size-2 rounded-full bg-green-500/90 transition-colors duration-300 group-hover:bg-green-500/90 sm:bg-white/10">
        </div>
      </div>
      <div class="flex h-56 justify-center overflow-hidden rounded-lg">
        <NuxtImg width="400" quality="60" loading="lazy" :alt="`${props.title} project image`"
          class="h-full rounded-lg object-cover transition-transform duration-300 hover:scale-105"
          :aria-label="`${props.title} project image`" :src="`${props.image}`" />
      </div>
      <div class="absolute bottom-0 flex w-full justify-center">
        <div
          class="rounded-t-lg border-x border-t border-white/10 border-b-transparent px-4 py-[5px] shadow-md backdrop-blur sm:w-2/3">
          <div class="flex items-center justify-between gap-2">
            <div class="flex items-center gap-2">
              <!---->
              <div class="flex items-center gap-2">
                <span class="whitespace-nowrap text-sm font-semibold text-white/90">{{ props.title }}</span>
                <span class="whitespace-nowrap text-xs text-neutral-500">{{ props.year }}</span>
              </div>
            </div>
            <div
              class="flex items-center justify-center rounded-full border border-transparent p-1 shadow-md transition-transform duration-500 group-hover:-rotate-45 group-hover:border-white/10">
              <Icon icon="material-symbols-light:arrow-right-alt-rounded" />
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";
// get props
const props = defineProps<{
  title: string;
  year: string;
  image: string;
  link: string | null;
}>();
</script>

<style></style>
