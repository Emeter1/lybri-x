<script setup>
const features = [
  {
    title: "Immersive Reading Experience",
    description:
      "Dive deep into stories that pulls you in, leaving a lasting impression.",
    icon: `<svg viewBox="0 0 24 24" class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
  },
  {
    title: "Writer's Own Workshop",
    description:
      "Bring your ideas to life with tools that let you write and edit like a pro.",
    icon: `<svg viewBox="0 0 24 24" class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path><path d="M15 7h3"></path></svg>`,
  },
  {
    title: "Voice Over Narration",
    description:
      "Listen to your favorite stories brought to life by captivating voices.",
    icon: `<svg viewBox="0 0 24 24" class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line><path d="M8 14h8"></path></svg>`,
  },
  {
    title: "Customizable Themes",
    description: "Choose, try, and own an avatar that journeys alongside you.",
    icon: `<svg viewBox="0 0 24 24" class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"></path><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.11"></path></svg>`,
  },
  {
    title: "Bookmark & Highlights",
    description: "Never lose track of your favorite moments.",
    icon: `<svg viewBox="0 0 24 24" class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="2"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path><line x1="9" y1="7" x2="15" y2="7"></line><line x1="9" y1="11" x2="15" y2="11"></line></svg>`,
  },
  {
    title: "Interactive Story Feedbacks",
    description: "Receive comments from readers and improve with insights.",
    icon: `<svg viewBox="0 0 24 24" class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z"></path><line x1="12" y1="7" x2="12" y2="11"></line><line x1="12" y1="14" x2="12.01" y2="14"></line></svg>`,
  },
];
</script>

<template>
  <section class="py-24 px-6 bg-[#FDFCF9]">
    <div class="max-w-7xl mx-auto text-center">
      <h2
        class="text-5xl md:text-6xl font-extrabold text-[#3D1A1A] mb-4"
        style="font-family: 'Playfair Display', serif"
      >
        Amazing <span class="text-yellow-500">Features</span> To Experience
      </h2>
      <p
        class="text-gray-500 text-lg md:text-xl font-medium mb-16 opacity-80 text-center mx-auto max-w-2xl"
      >
        Tools and experiences designed to make every story unforgettable.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="flex flex-col items-center bg-[#F3E9D2] p-8 rounded-[1.5rem] shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1 max-w-[320px] mx-auto"
        >
          <div
            class="text-[#3D1A1A] mb-6 transition-transform duration-300 group-hover:scale-110"
            v-html="feature.icon"
          ></div>

          <h3
            class="text-xl font-bold text-[#3D1A1A] mb-3 leading-tight text-center"
            style="font-family: 'Playfair Display', serif"
          >
            {{ feature.title }}
          </h3>

          <p class="text-gray-600 text-sm leading-relaxed text-center">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
