<script setup>
import { ref } from "vue";
const searchQuery = ref("");
</script>

<template>
  <div class="relative max-w-full mb-20 group">
    <div
      class="absolute inset-y-0 left-6 flex items-center pointer-events-none"
    >
      <svg
        class="w-5 h-5 text-gray-400 group-focus-within:text-yellow-500 transition-colors"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search for stories, authors, genres...."
      class="w-full pl-16 pr-6 py-5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 shadow-sm text-gray-700 text-lg transition-all"
    />
  </div>
</template>
