<script setup>
defineProps({
  chapterTitle: {
    type: String,
    default: "Chapter 1",
  },
  currentChapter: {
    type: Number,
    default: 1,
  },
  totalChapters: {
    type: Number,
    default: 50,
  },
});
</script>

<template>
  <div
    class="sticky top-0 z-40 bg-white/95 backdrop-blur-sm px-6 py-4 transition-all"
  >
    <div
      class="max-w-5xl mx-auto flex items-center justify-between border border-gray-200 rounded-full px-6 py-3 shadow-sm bg-white"
    >
      <!-- Progress -->
      <div class="text-sm font-bold font-sans text-gray-900">
        {{ currentChapter }} / {{ totalChapters }}
      </div>

      <!-- Title -->
      <h2
        class="text-lg font-serif font-bold text-[#1a1a1a] absolute left-1/2 -translate-x-1/2 hidden md:block"
      >
        {{ chapterTitle }}
      </h2>

      <!-- Actions -->
      <div class="flex items-center gap-6">
        <button
          class="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 10H14"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 14V6"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <!-- Just using icon for comment to match layout roughly, actually image shows bubble icon -->
        </button>

        <button
          class="flex items-center gap-2 text-gray-600 hover:text-black transition-colors font-sans font-medium text-sm"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 17.5V11.25C17.5 7.10786 14.1421 3.75 10 3.75C5.85786 3.75 2.5 7.10786 2.5 11.25V17.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.5 13.75H17.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Listen
        </button>

        <NuxtLink
          :to="`/stories/${$route.params.id}`"
          class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="#1F2937"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.font-serif {
  font-family: "Playfair Display", serif;
}

.font-sans {
  font-family: "Outfit", sans-serif;
}
</style>
