<template>
  <section class="py-32 px-4 md:px-8">
    <div class="max-w-6xl mx-auto">
      <h2 class="font-newsreader italic text-white-shadow text-center text-4xl">
        {{ $t("about.title") }}
      </h2>
      <div class="grid md:grid-cols-2 gap-12 items-center mt-10">
        <div class="space-y-6 order-2 md:order-1">
          <p class="text-lg text-gray-600">
            {{ $t("about.description") }}
          </p>
        </div>
        <div class="relative order-1 md:order-2 w-48 h-48 md:w-72 md:h-72 mx-auto">
          <div class="aspect-w-4 aspect-h-3 rounded-full overflow-hidden">
            <NuxtImg loading="lazy" quality="80" width="500" :src="`https://www.gravatar.com/avatar/${hashedEmail}?s=500`" alt="Profile"
              class="object-cover w-full h-full rounded-full shadow-xl" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import hash256 from '~/shared/utils/hash256';

const { t } = useI18n();
const config = useRuntimeConfig();
const email = config.public.email;

const hashedEmail = hash256(email);

console.log(hashedEmail);

useSeoMeta({
  title: t("about.title"),
  description:
    "Seorang pengembang web passionate dengan pengalaman 3 tahun dalam membangun aplikasi web modern.",
});
</script>

<style></style>
