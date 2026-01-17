<script setup>
const ctaBgImg = "/assets/cta_book_texture_dark_1768317663518.png";
</script>

<template>
  <section class="relative py-32 px-6 overflow-hidden">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 z-0">
      <img
        :src="ctaBgImg"
        alt="Background"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/60"></div>
    </div>

    <div class="relative z-10 max-w-4xl mx-auto text-center text-white">
      <h2
        class="text-4xl md:text-6xl font-extrabold mb-8 leading-tight"
        style="font-family: 'Playfair Display', serif"
      >
        Ready to Explore Your Next Story?
      </h2>

      <p
        class="text-xl md:text-2xl text-white/90 mb-12 font-medium leading-relaxed"
      >
        Join LabariX and Discover Immersive Stories, connect with creators,
        <br class="hidden md:block" />
        and become part of a vibrant reading community.
      </p>

      <button
        class="bg-yellow-500 hover:bg-yellow-400 text-black text-lg font-bold px-12 py-4 rounded-lg shadow-lg shadow-yellow-500/20 transition-all active:scale-95 transform hover:-translate-y-1"
      >
        Explore Now
      </button>
    </div>
  </section>
</template>
