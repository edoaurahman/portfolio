<script setup lang="ts">
import { LoadingBar } from "./components/ui/loading";
import { Navbar } from "./components/ui/navigation-menu";
import { LanguageToggle } from "./components/ui/toggle";
import { Footer } from "./components/ui/footer";
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Edodev` : "Edodev";
  },
  // add favicon
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/img/logo.png",
    },
  ],
});

const { setLoading } = useCustomLoadingIndicator();

// Mendeteksi perubahan route
const router = useRouter();

// Menangani event sebelum navigasi dimulai
router.beforeEach((_to, _from, next) => {
  setLoading(true);
  setTimeout(() => {
    next();
  }, 300);
});

// Menangani event setelah navigasi selesai
router.afterEach(() => {
  // Menambahkan sedikit delay untuk efek visual yang lebih baik
  setTimeout(() => {
    setLoading(false);
  }, 1000);
});

// Menangani error navigasi
router.onError(() => {
  setLoading(false);
});
</script>
<template>
  <LoadingBar />
  <Navbar />
  <LanguageToggle />
  <NuxtPage />
  <Footer />
</template>
