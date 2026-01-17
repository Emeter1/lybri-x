<script setup>
import { ref, onMounted } from 'vue'
import LandingPage from './components/LandingPage.vue'
import ExplorePage from './components/ExplorePage.vue'

const currentPage = ref('landing')

// Function to update state and browser history
const navigateTo = (page, isPopState = false) => {
  currentPage.value = page
  localStorage.setItem('labarix_page', page)

  if (!isPopState) {
    // Add to browser history so back button works
    window.history.pushState({ page }, '', `?page=${page}`)
  }

  window.scrollTo(0, 0)
}

// Watch for browser back/forward buttons
window.onpopstate = (event) => {
  const page = event.state?.page || 'landing'
  navigateTo(page, true)
}

// Initial load: check URL first, then localStorage
onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search)
  const pageFromUrl = urlParams.get('page')
  const savedPage = localStorage.getItem('labarix_page')

  const initialPage = pageFromUrl || savedPage || 'landing'
  navigateTo(initialPage, true)
})
</script>

<template>
  <LandingPage v-if="currentPage === 'landing' || currentPage === 'about us' || currentPage === 'create'"
    @navigate="navigateTo" />
  <ExplorePage v-else-if="currentPage === 'explore'" @navigate="navigateTo" />
  <!-- Optional: Handle other pages or show a 'Coming Soon' -->
  <div v-else class="min-h-screen flex items-center justify-center bg-[#FDFCF9]">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-[#3D1A1A] mb-4">Coming Soon</h1>
      <button @click="navigateTo('landing')" class="text-yellow-500 font-bold hover:underline">Back to Home</button>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
</style>
