<script setup>
// Nuxt auto-imports components from the components/ directory
</script>

<template>
  <div class="min-h-screen bg-[#FDFCF9] font-sans selection:bg-yellow-400/30">
    <LandingNavbar />

    <main class="max-w-7xl mx-auto px-6 py-12">
      <ExploreHeader />
      <ExploreSearch />
      <ExploreRecommended />
      <ExploreTrending />
    </main>

    <LandingFooter />
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap");

.font-sans {
  font-family: "Outfit", sans-serif;
}

:deep(h1),
:deep(h2),
:deep(h3),
:deep(h4) {
  font-family: "Playfair Display", serif;
}
</style>
