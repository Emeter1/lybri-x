<script setup>
const stories = [
  {
    title: "The Potter And the Clay",
    genres: ["Thriller", "Drama"],
    reading: 4.9,
    reviews: "1,247 reviews",
    image: "/assets/abstract_story_cover.png",
  },
  {
    title: "The Potter And the Clay",
    genres: ["Thriller", "Drama"],
    reading: 4.9,
    reviews: "1,247 reviews",
    image: "/assets/abstract_story_cover.png",
  },
  {
    title: "The Potter And the Clay",
    genres: ["Thriller", "Drama"],
    reading: 4.9,
    reviews: "1,247 reviews",
    image: "/assets/abstract_story_cover.png",
  },
];
</script>

<template>
  <section class="max-w-7xl mx-auto px-6 pb-24">
    <div class="mb-10">
      <h2 class="text-3xl md:text-4xl font-serif font-bold text-[#1a1a1a] mb-2">
        Similar Stories For You
      </h2>
      <p class="text-gray-500 text-lg font-sans">
        More stories in the same genre and styles.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="(story, index) in stories"
        :key="index"
        class="bg-white rounded-md overflow-hidden"
      >
        <!-- Image Container -->
        <div class="aspect-[16/10] overflow-hidden mb-4">
          <img
            :src="story.image"
            :alt="story.title"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Content -->
        <div>
          <h3 class="text-xl font-bold font-serif text-[#1a1a1a] mb-1">
            {{ story.title }}
          </h3>

          <div class="text-sm font-sans text-gray-500 mb-3 font-medium">
            {{ story.genres.join(" • ") }}
          </div>

          <!-- Rating -->
          <div class="flex items-center gap-2 mb-6">
            <div class="flex text-[#FFA500]">
              <svg
                v-for="i in 5"
                :key="i"
                class="w-4 h-4 fill-current"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>
            <span class="text-sm font-bold text-gray-700 ml-1">{{
              story.reading
            }}</span>
            <span class="text-sm text-gray-400 font-medium"
              >({{ story.reviews }})</span
            >
          </div>

          <!-- Actions -->
          <div class="flex gap-4">
            <button
              class="flex-1 bg-[#FFD700] hover:bg-[#F4C430] text-black py-3 rounded-lg font-bold font-sans text-sm transition-colors"
            >
              Read Now
            </button>
            <button
              class="flex-1 bg-white border border-gray-300 hover:border-gray-400 text-[#555] py-3 rounded-lg font-medium font-sans text-sm transition-colors"
            >
              Listen Now
            </button>
          </div>
        </div>
      </div>
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
