<script setup lang="ts">
import { LoadingBar } from './components/ui/loading';
import { Navbar } from './components/ui/navigation-menu';
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Edodev` : 'Edodev';
  }
});

const { setLoading } = useCustomLoadingIndicator();

// Mendeteksi perubahan route
const router = useRouter()

// Menangani event sebelum navigasi dimulai
router.beforeEach((_to, _from, next) => {
  setLoading(true)
  next()
})

// Menangani event setelah navigasi selesai
router.afterEach(() => {
  // Menambahkan sedikit delay untuk efek visual yang lebih baik
  setTimeout(() => {
    setLoading(false)
  }, 1000)
})

// Menangani error navigasi
router.onError(() => {
  setLoading(false)
})

</script>
<template>
  <LoadingBar />
  <Navbar />
  <NuxtPage />
</template>