<template>
  <section class="py-24 px-6 bg-gray-50">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2
          class="text-4xl font-bold text-[#3D1A1A] mb-4"
          style="font-family: 'Playfair Display', serif"
        >
          Our Core Values
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          The principles that guide every feature we build and every story we
          share.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="value in values"
          :key="value.title"
          class="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
        >
          <div
            class="w-14 h-14 bg-yellow-400/20 rounded-xl flex items-center justify-center mb-6 text-[#3D1A1A] text-2xl"
          >
            <!-- Simple icon placeholder -->
            <i :class="value.icon"></i>
          </div>
          <h3 class="text-xl font-bold text-[#3D1A1A] mb-3 font-sans">
            {{ value.title }}
          </h3>
          <p class="text-gray-600 leading-relaxed">{{ value.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const values = [
  {
    title: "Creativity First",
    description:
      "We champion the original, the bold, and the imaginative. We provide tools that let creativity flourish without restriction.",
    icon: "pi pi-pencil", // PrimeIcons class example, or replace with SVG
  },
  {
    title: "Deep Connection",
    description:
      "Stories bridge gaps. We build features that foster genuine connection between writers and their audience.",
    icon: "pi pi-heart",
  },
  {
    title: "Quality & Craft",
    description:
      "We honor the dedication of storytelling. We ensure our platform reflects the quality of the work hosted upon it.",
    icon: "pi pi-star",
  },
];
</script>
