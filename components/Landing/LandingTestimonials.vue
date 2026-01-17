<script setup>
const avatarImg = "/assets/b78d9b18ecf07a2f4b46cfccf523028ca21fd0d5.jpg";

const testimonials = [
  {
    text: "Each module read like a mini-story from someone who faced the same challenges: onboarding bumps, day-to-day HR puzzles, and the constant chase to stay current with real-world HR issues. The characters weren't experts on paper; they were us—HR folks juggling countless tasks and trying to do right by the team.",
    items: ["HR folks", "juggling countless tasks"],
    name: "Jackie",
    role: "Reading Enthusiast",
    avatar: avatarImg,
  },
  {
    text: "Each module read like a mini-story from someone who faced the same challenges: onboarding bumps, day-to-day HR puzzles, and the constant chase to stay current with real-world HR issues. The characters weren't experts on paper; they were us—HR folks juggling countless tasks and trying to do right by the team.",
    items: ["HR folks", "juggling countless tasks"],
    name: "Jackie",
    role: "Reading Enthusiast",
    avatar: avatarImg,
  },
  {
    text: "Each module read like a mini-story from someone who faced the same challenges: onboarding bumps, day-to-day HR puzzles, and the constant chase to stay current with real-world HR issues. The characters weren't experts on paper; they were us—HR folks juggling countless tasks and trying to do right by the team.",
    items: ["HR folks", "juggling countless tasks"],
    name: "Jackie",
    role: "Reading Enthusiast",
    avatar: avatarImg,
  },
];
</script>

<template>
  <section class="py-24 px-6 bg-white">
    <div class="max-w-7xl mx-auto text-center relative">
      <h2
        class="text-5xl md:text-6xl font-extrabold text-[#3D1A1A] mb-4"
        style="font-family: 'Playfair Display', serif"
      >
        Testimonials
      </h2>
      <p
        class="text-gray-500 text-lg md:text-xl font-medium mb-20 opacity-80 text-center mx-auto max-w-2xl"
      >
        What our users say?
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div
          v-for="(t, index) in testimonials"
          :key="index"
          class="flex flex-col items-center"
        >
          <div
            class="text-yellow-400 text-6xl font-serif mb-6 leading-none self-start"
          >
            “
          </div>
          <p
            class="text-gray-500 text-sm leading-relaxed mb-8 text-center px-4"
          >
            {{ t.text }}
          </p>
          <div
            class="text-yellow-400 text-6xl font-serif mt-auto mb-6 leading-none self-end"
          >
            ”
          </div>

          <div
            class="flex items-center justify-center gap-4 mt-4 w-full border-t border-gray-100 pt-6"
          >
            <img
              :src="t.avatar"
              :alt="t.name"
              class="w-12 h-12 rounded-full object-cover"
            />
            <div class="text-left">
              <h4 class="font-bold text-[#3D1A1A] text-lg">{{ t.name }}</h4>
              <p class="text-gray-400 text-sm">{{ t.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
