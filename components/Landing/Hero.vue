<script setup>
const stats = [
  {
    name: "Top Picks",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
  },
  {
    name: "Listen Now",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>`,
  },
  {
    name: "New Adventures",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 4 3 3-3 3"></path><path d="M19 7H5a2 2 0 0 0-2 2v5"></path><circle cx="9" cy="13" r="1"></circle><path d="M15 13h.01"></path><circle cx="12" cy="13" r="1"></circle></svg>`,
  },
];

const personalLibImg = "/assets/3b14b387081f22f8e912bacf65afde1c78744c05.jpg";
</script>

<template>
  <div
    class="relative h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden"
    :style="{ backgroundImage: `url(${personalLibImg})` }"
  >
    <!-- Dark overlay to make text pop -->
    <div class="absolute inset-0 bg-black/40"></div>

    <slot name="navbar" />

    <!-- Hero Content -->
    <div
      class="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-160px)] px-6 text-center"
    >
      <h1
        class="text-6xl md:text-6xl font-bold text-white mb-6 tracking-tight max-w-4xl leading-tight"
      >
        Where Stories <br />
        Come Alive.
      </h1>

      <p class="text-white/90 text-md md:text-xl max-w-2xl mb-12 font-medium">
        Step into worlds of imagination, emotion, and meaning. <br />
        Read, discover, and lose yourself in unforgettable stories.
      </p>

      <div class="flex flex-col sm:flex-row gap-5">
        <button
          class="bg-yellow-500 hover:bg-yellow-400 text-black px-10 py-2 rounded-md font-bold text-sm shadow-xl shadow-yellow-500/20 transition-all active:scale-95 group"
        >
          Start Reading
          <span
            class="inline-block transition-transform group-hover:translate-x-1 ml-1"
            >→</span
          >
        </button>
        <button
          class="bg-black/20 hover:bg-black/40 backdrop-blur-md text-white border-2 border-white/20 px-10 py-2 rounded-md font-bold text-sm transition-all active:scale-95"
        >
          Discover Stories
        </button>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div
      class="absolute bottom-0 left-0 right-0 z-10 bg-black/40 backdrop-blur-xl border-t border-white/10"
    >
      <div class="max-w-7xl mx-auto px-10 md:px-40">
        <div
          class="flex justify-around items-center pt-5 pb-3 border-b border-yellow-500/60"
        >
          <div
            v-for="stat in stats"
            :key="stat.name"
            class="flex items-center gap-3 text-white/90 group cursor-pointer text-center"
          >
            <span
              class="text-xl text-yellow-400 group-hover:scale-110 transition-transform"
              v-html="stat.icon"
            ></span>
            <span
              class="text-md font-semibold tracking-wide group-hover:text-white transition-colors"
              style="font-family: serif"
              >{{ stat.name }}</span
            >
          </div>
        </div>
        <!-- Decorative spacer at the bottom -->
        <div class="h-4"></div>
      </div>
    </div>
  </div>
</template>
