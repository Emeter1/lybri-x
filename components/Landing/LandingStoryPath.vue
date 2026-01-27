<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const storySteps = [
  {
    type: "card",
    slides: [
      {
        title: "Create the story",
        description:
          "Writers craft the stories, chapters and worlds using labarix's writing tool.",
        icon: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
      },
      {
        title: "AI Story Helper",
        description:
          "Use our AI tools to build complex characters and deep story arcs effortlessly.",
        icon: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
      },
      {
        title: "World Design",
        description:
          "Build immersive worlds with dedicated lore and geography mapping tools.",
        icon: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20"/></svg>`,
      },
      {
        title: "Collaboration",
        description:
          "Invite co-authors and editors to work together in real-time on your masterpiece.",
        icon: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      },
    ],
  },
  {
    type: "text",
    slides: [
      {
        title: "Publish & Discover",
        description:
          "Stories goes live for readers to explore by genre, mood, and interest.",
        icon: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M12 12v9m-4-4 4 4 4-4"/></svg>`,
      },
      {
        title: "Global Reach",
        description:
          "Publish to multiple platforms simultaneously and reach readers everywhere.",
        icon: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20"/></svg>`,
      },
      {
        title: "Get Featured",
        description:
          "Be picked by our editors and see your stories on the homepage daily.",
        icon: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
      },
      {
        title: "Social Snippets",
        description:
          "Automatically generate shareable teaser cards for your social media channels.",
        icon: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>`,
      },
    ],
  },
  {
    type: "card",
    slides: [
      {
        title: "Read & Engage",
        description:
          "Readers dive in, save favorites, react, and follow ongoing stories.",
        icon: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
      },
      {
        title: "Follow Authors",
        description:
          "Never miss a chapter! Get instant notifications from your favorites.",
        icon: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      },
      {
        title: "Smart Reading",
        description:
          "AI-driven recommendations tailored to your unique tastes and history.",
        icon: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7l.6.5"/><path d="M21 3v8h-8"/><path d="M21 3l-8 8"/></svg>`,
      },
      {
        title: "Immersive Reading",
        description:
          "Customize your experience with different themes, fonts, and dark mode.",
        icon: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
      },
    ],
  },
  {
    type: "text",
    slides: [
      {
        title: "Voice the story",
        description:
          "Voice artists bring selected stories to life through expressive audio narration.",
        icon: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>`,
      },
      {
        title: "Audio Magic",
        description:
          "Listen to ambient sounds and professional scores alongside narration.",
        icon: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`,
      },
      {
        title: "Be the Voice",
        description:
          "Audition for Top Picks and build your own following as a narrator.",
        icon: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      },
      {
        title: "AI Narrators",
        description:
          "Scale your reach by creating AI-powered versions of your own unique voice.",
        icon: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
      },
    ],
  },
  {
    type: "card",
    slides: [
      {
        title: "Grow the story",
        description:
          "Creators connects with audience, gain recognition and expand their reach.",
        icon: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
      },
      {
        title: "Analyze Metrics",
        description:
          "Understand reader behavior with our comprehensive heatmaps and data.",
        icon: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
      },
      {
        title: "Monetize Work",
        description:
          "Earn from your creativity through subscriptions, tokens, and tips.",
        icon: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
      },
      {
        title: "Digital Assets",
        description:
          "Turn your characters and worlds into unique digital collectables for fans.",
        icon: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,
      },
    ],
  },
];

const activeIndices = ref([0, 0, 0, 0, 0]);
let carouselTimer = null;

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
        }
      });
    },
    { threshold: 0.1 }
  );

  document
    .querySelectorAll(".stagger-item")
    .forEach((el) => observer.observe(el));

  // Auto-swipe logic
  carouselTimer = setInterval(() => {
    activeIndices.value = activeIndices.value.map((idx, i) => {
      // Rotate through contents at slightly different rates or random intervals for a "natural" feel
      if (Math.random() > 0.4) {
        return (idx + 1) % storySteps[i].slides.length;
      }
      return idx;
    });
  }, 4000);
});

onUnmounted(() => {
  if (carouselTimer) clearInterval(carouselTimer);
});
</script>

<template>
  <section class="py-24 px-6 bg-[#FFFFFF] overflow-hidden">
    <div class="max-w-7xl mx-auto text-center relative">
      <h2
        class="text-5xl md:text-6xl font-extrabold text-[#3D1A1A] mb-4"
        style="font-family: 'Playfair Display', serif"
      >
        The <span class="text-yellow-500">Labarix</span> Story Path
      </h2>
      <p class="text-gray-500 text-lg md:text-xl font-medium mb-24 opacity-80">
        Your journey through stories from creation to discoveries.
      </p>

      <!-- The Path Container -->
      <div
        class="relative flex flex-col md:flex-row justify-between items-start gap-0 mt-32 px-4 min-h-[500px]"
      >
        <!-- Connecting Line (Desktop) -->
        <div
          class="absolute top-1/2 left-0 right-0 hidden md:block -translate-y-1/2 pointer-events-none z-0"
        >
          <div
            class="absolute top-1/2 left-0 right-0 h-0.5 bg-amber-200/60 -translate-y-1/2 z-0"
          ></div>
          <div class="relative z-10 grid grid-cols-5">
            <div v-for="i in 5" :key="i" class="flex justify-center">
              <div class="w-4 h-4 rounded-full bg-amber-500"></div>
            </div>
          </div>
        </div>

        <!-- Steps -->
        <div
          v-for="(step, index) in storySteps"
          :key="index"
          class="flex-1 flex flex-col items-center relative z-10 w-full md:w-auto opacity-0 translate-y-10 stagger-item"
          :class="index % 2 === 0 ? 'md:mt-0' : 'md:mt-64'"
        >
          <!-- Step Content Carousel -->
          <div class="relative w-full max-w-[280px] h-[340px] overflow-visible">
            <TransitionGroup name="swipe">
              <div
                v-for="(slide, slideIdx) in step.slides"
                :key="slideIdx"
                v-show="activeIndices[index] === slideIdx"
                class="absolute inset-0 flex flex-col items-center justify-center"
              >
                <div
                  v-if="step.type === 'card'"
                  class="bg-[#FEECAE] px-8 py-10 rounded-[2.5rem] shadow-xl shadow-yellow-200/20 border border-yellow-200/50 w-full h-full flex flex-col items-center justify-center gap-3 hover:scale-105 transition-transform duration-300"
                >
                  <div
                    class="mb-2 text-[#3D1A1A] scale-110"
                    v-html="slide.icon"
                  ></div>
                  <div>
                    <h3
                      class="text-2xl font-bold text-[#3D1A1A] mb-3"
                      style="font-family: 'Playfair Display', serif"
                    >
                      {{ slide.title }}
                    </h3>
                    <p
                      class="text-gray-700 text-sm leading-relaxed mb-6 font-medium text-center"
                    >
                      {{ slide.description }}
                    </p>
                  </div>
                </div>

                <div
                  v-else
                  class="bg-white px-8 py-10 rounded-[2.5rem] shadow-xl border border-gray-100 w-full h-full flex flex-col items-center justify-center gap-3 text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div
                    class="mb-4 text-[#3D1A1A] group-hover:scale-110 transition-transform duration-300 scale-125"
                    v-html="slide.icon"
                  ></div>
                  <div>
                    <h3
                      class="text-2xl font-bold text-[#3D1A1A] mb-3"
                      style="font-family: 'Playfair Display', serif"
                    >
                      {{ slide.title }}
                    </h3>
                    <p
                      class="text-gray-600 text-sm leading-relaxed mb-6 max-w-[180px]"
                    >
                      {{ slide.description }}
                    </p>
                  </div>
                </div>
              </div>
            </TransitionGroup>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stagger-item {
  transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.stagger-item.reveal {
  opacity: 1;
  transform: translateY(0);
}
/* Swipe Animation */
.swipe-enter-active,
.swipe-leave-active {
  transition: all 0.5s ease;
}

.swipe-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.swipe-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
