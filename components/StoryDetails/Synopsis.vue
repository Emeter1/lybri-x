<script setup>
defineProps({
  synopsis: {
    type: String,
    default:
      "Two hearts meet at the wrong time, bound by unspoken feelings and hidden wounds. As secrets from the past begin to surface, love is tested by betrayal and sacrifice. Every choice pulls them further apart, even as their hearts refuse to let go. Pain, longing, and hope intertwine in a journey that changes them forever. \nIn choosing between fear and fate, they discover what it truly means to love.",
  },
});
</script>

<template>
  <section class="max-w-7xl mx-auto px-6 pb-8">
    <div
      class="bg-white rounded-[2rem] p-8 md:p-12 border border-gray-100 shadow-sm relative z-0"
    >
      <h2 class="text-4xl font-serif font-bold text-[#1a1a1a] mb-6">
        Sypnosis
      </h2>
      <p
        class="text-gray-600 text-lg md:text-xl font-serif leading-relaxed whitespace-pre-line tracking-tight"
      >
        {{ synopsis }}
      </p>
    </div>
  </section>
</template>

<style scoped>
.font-serif {
  font-family: "Playfair Display", serif;
}

.font-sans {
  font-family: "Outfit", sans-serif;
}
</style>
