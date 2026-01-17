<script setup>
const castMembers = [
  {
    name: "Writers",
    tagline: "Turn your words into worlds",
    description:
      "Write freely publish boldly and let your stories find the readers they were meant for.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>`,
  },
  {
    name: "Readers",
    tagline: "Get lost in stories that stay",
    description:
      "Discover powerful tales, unforgettable characters, and worlds you'll never want to leave.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
  },
  {
    name: "Voice Artists",
    tagline: "Give stories a voice",
    description:
      "Bring written words to life through emotion, rhythm, and sound and be heard.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>`,
  },
];
</script>

<template>
  <section class="py-24 px-6 bg-white">
    <div class="max-w-7xl mx-auto text-center">
      <h2
        class="text-5xl md:text-6xl font-extrabold text-[#3D1A1A] mb-4"
        style="font-family: 'Playfair Display', serif"
      >
        Built For The <span class="text-yellow-500">Labarix</span> Cast
      </h2>
      <p class="text-gray-500 text-lg md:text-xl font-medium mb-16 opacity-80">
        Where writers, readers, and voice artists come together to create magic.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="member in castMembers"
          :key="member.name"
          class="flex flex-col items-center bg-gradient-to-b from-yellow-100/60 to-white/30 p-10 rounded-[2rem] border border-yellow-100/50 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div class="text-[#3D1A1A] mb-8" v-html="member.icon"></div>

          <h3
            class="text-3xl font-bold text-[#3D1A1A] mb-4"
            style="font-family: 'Playfair Display', serif"
          >
            {{ member.name }}
          </h3>

          <p class="text-xl font-bold text-[#3D1A1A] mb-2 px-4 leading-tight">
            {{ member.tagline }}
          </p>

          <p class="text-gray-500 text-base leading-relaxed mb-10 px-4">
            {{ member.description }}
          </p>

          <button
            class="mt-auto bg-[#602D2D] hover:bg-[#4D2424] text-white px-10 py-3 rounded-xl font-medium transition-all active:scale-95"
          >
            Explore More
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
