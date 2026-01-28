<script setup>
const castMembers = [
  {
    name: "Writers",
    tagline: "Turn your words into worlds",
    description:
      "Write freely publish boldly and let your stories find the readers they were meant for.",
    icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 20H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16.5 3.5C16.8978 3.10217 17.4374 2.87868 18 2.87868C18.5626 2.87868 19.1022 3.10217 19.5 3.5C19.8978 3.89782 20.1213 4.43739 20.1213 5C20.1213 5.56261 19.8978 6.10217 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    name: "Readers",
    tagline: "Get lost in stories that stay",
    description:
      "Discover powerful tales, unforgettable characters, and worlds you'll never want to leave.",
    icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    name: "Voice Artists",
    tagline: "Give stories a voice",
    description:
      "Bring written words to life through emotion, rhythm, and sound and be heard.",
    icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="12" y1="19" x2="12" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="8" y1="23" x2="16" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
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
      <p class="text-gray-500 text-lg md:text-xl font-medium mb-16 opacity-80 max-w-2xl mx-auto">
        Where writers, readers, and voice artists come together to create magic.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="member in castMembers"
          :key="member.name"
          class="flex flex-col items-center bg-gradient-to-br from-[#FFD666] via-[#FFF9E6] to-[#FDFBF7] p-12 rounded-[2.5rem] border border-yellow-200/40 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden relative group"
        >
          <!-- Stylized Icon Container -->
          <div class="text-[#3D1A1A] mb-8 bg-white/40 p-5 rounded-2xl shadow-inner group-hover:scale-110 transition-transform duration-500">
            <div v-html="member.icon"></div>
          </div>

          <h3
            class="text-4xl font-bold text-[#3D1A1A] mb-4"
            style="font-family: 'Playfair Display', serif"
          >
            {{ member.name }}
          </h3>

          <p class="text-xl font-bold text-[#3D1A1A] mb-4 px-2 leading-tight">
            {{ member.tagline }}
          </p>

          <p class="text-gray-600 text-lg leading-relaxed mb-10 px-4 opacity-90">
            {{ member.description }}
          </p>

          <NuxtLink
            :to="member.name === 'Writers' ? '/cast/writers' : member.name === 'Readers' ? '/cast/readers' : member.name === 'Voice Artists' ? '/cast/voice-artists' : '#'"
            class="mt-auto bg-[#602D2D] hover:bg-[#4D2424] text-white px-12 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-[#602D2D]/20 transition-all active:scale-95 inline-block"
          >
            Explore More
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
