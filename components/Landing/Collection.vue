<script setup>
const personalLibImg = "/assets/3b14b387081f22f8e912bacf65afde1c78744c05.jpg";
const chapterExpImg = "/assets/847e97434a97d1696ab972683549c42936272662.jpg";
const readingAbstractImg =
  "/assets/9988b209d1884e42b169e601097cfff8f1be53f0.jpg";

const collectionItems = [
  {
    title: "Personal Library",
    description: "All your reads, favorites and creations in one place.",
    image: personalLibImg,
  },
  {
    title: "Chapter Explorer",
    description:
      "Easily navigate and binge through chapters at your own space.",
    image: chapterExpImg,
  },
  {
    title: "Reading Insights",
    description: "Track your progress and revisit your favorite moments.",
    image: readingAbstractImg,
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
        Collect Your <span class="text-yellow-500">Stories</span>
      </h2>
      <p
        class="text-gray-500 text-lg md:text-xl font-medium mb-16 opacity-80 text-center mx-auto max-w-2xl"
      >
        Build a library that grows with your imagination.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(item, index) in collectionItems"
          :key="index"
          class="relative h-[400px] rounded-[2rem] overflow-hidden group"
        >
          <img
            :src="item.image"
            :alt="item.title"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-left"
          >
            <h3
              class="text-3xl font-bold text-white mb-2"
              style="font-family: 'Playfair Display', serif"
            >
              {{ item.title }}
            </h3>
            <p class="text-white/80 text-lg leading-snug">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
