<template>
  <div
    class="z-50 fixed top-0 left-0 right-0 h-screen dark:bg-black bg-white transform origin-left transition-transform duration-300"
    :class="{
      'scale-x-100': loading,
      'scale-x-0': !loading
    }">
    <!-- Loading animation overlay -->
    <div class="fixed inset-0 flex items-center justify-center">
      <svg viewBox="0 0 100 100" class="w-[250px]">
        <rect width="100" height="100" rx="2" fill="#242539" />
        <g fill="none" stroke="#2EC7FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- dashed trail -->
          <g transform="translate(20 35)">
            <path d="M 0 0 v 25 h 15 l 10 -15 h 10 v 20 h 25" stroke-dasharray="3 6" stroke-dashoffset="2" />
            <!-- animate the dash of a line atop the already dashed line -->
            <path class="in-between" stroke="#242539" stroke-width="2.5"
              d="M 60 30 h -25 v -20 h -10 l -10 15 h -15 v -25" />
          </g>

          <!-- include the x character atop the dashed trail -->
          <g transform="translate(20 35)">
            <!-- duplicate the path element describing the x sign to animate the segments in sequence -->
            <path class="start" d="M -3 -3 l 6 6" />
            <path class="start" d="M 3 -3 l -6 6" />
          </g>

          <!-- goalpost icon -->
          <g transform="translate(80 65)">
            <!-- position the group by rotating the shape from a point on the right side -->
            <g transform="translate(40 20)">
              <g class="end">
                <g transform="translate(-40 -20)">
                  <path d="M 0 0 q 6 -6 6 -10 a 6 6 0 0 0 -12 0 q 0 4 6 10" />
                  <circle cy="-10" r="2" stroke="none" fill="#2EC7FF" />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">

const { isLoading } = useCustomLoadingIndicator()

const loading = computed(() => isLoading.value)

const { $anime } = useNuxtApp()
onMounted(() => {
  const timeline = $anime.timeline({
    easing: 'linear',
    // as the animation begin remove the button by adding the prescribed class
  });

  // show the x character
  timeline.add({
    targets: '.start',
    strokeDashoffset: [$anime.setDashoffset, 0],
    duration: 200,
  })

  // show the dashed line
  timeline.add({
    targets: '.in-between',
    strokeDashoffset: [0, $anime.setDashoffset],
    duration: 500,
  })

  // ping, show the goalpost icon
  timeline.add({
    targets: '.end',
    rotate: [20, 0],
    opacity: [0, 1],
    easing: 'easeOutBounce',
    duration: 200,
  })

  watch(loading, (value) => {
    timeline.restart()
  })
})
</script>

<style>
#text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>