<script setup>
import { ref } from "vue";
const abstractCover = "/assets/abstract_story_cover.png";

const stories = [
  {
    title: "The Potter And the Clay",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempor pellentesque nisi, non faucibus felis posuere sit amet. Fusce cursus aliquam metus, nec cursus tortor condimentum quis.",
    image: abstractCover,
    rating: 4.9,
    reviews: "1,247",
    genres: ["Thriller", "Drama"],
  },
  {
    title: "The Potter And the Clay",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempor pellentesque nisi, non faucibus felis posuere sit amet. Fusce cursus aliquam metus, nec cursus tortor condimentum quis.",
    image: abstractCover,
    rating: 4.9,
    reviews: "1,247",
    genres: ["Thriller", "Drama"],
  },
  {
    title: "The Potter And the Clay",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempor pellentesque nisi, non faucibus felis posuere sit amet. Fusce cursus aliquam metus, nec cursus tortor condimentum quis.",
    image: abstractCover,
    rating: 4.9,
    reviews: "1,247",
    genres: ["Thriller", "Drama"],
  },
];

const selectedCategory = ref("All");
const trendingCategories = ["All", "Fiction", "Sci-Fi", "Mystery"];
</script>

<template>
  <section>
    <div class="mb-10">
      <h2 class="text-4xl font-bold text-[#3D1A1A] mb-2">Trending Now</h2>
      <p class="text-gray-500 text-lg font-medium opacity-80 mb-8">
        The most popular stories this week across all genres
      </p>

      <!-- Category Filters -->
      <div class="flex flex-wrap gap-4 mb-10">
        <button
          v-for="category in trendingCategories"
          :key="category"
          @click="selectedCategory = category"
          class="px-8 py-3 rounded-xl font-bold text-sm transition-all duration-200 border-2"
          :class="
            selectedCategory === category
              ? 'bg-yellow-50 border-yellow-400 text-[#3D1A1A] shadow-sm'
              : 'bg-white border-gray-100 text-gray-500 hover:border-gray-200 hover:text-gray-700'
          "
        >
          {{ category }}
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="(story, index) in stories"
        :key="index"
        class="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
      >
        <!-- Image Container -->
        <div class="relative h-64 overflow-hidden">
          <img
            :src="story.image"
            :alt="story.title"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
          ></div>
        </div>

        <!-- Content -->
        <div class="p-8 flex-1 flex flex-col text-left">
          <h3
            class="text-2xl font-bold text-[#3D1A1A] mb-3 group-hover:text-yellow-600 transition-colors"
          >
            {{ story.title }}
          </h3>
          <p class="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
            {{ story.description }}
          </p>

          <!-- Metadata -->
          <div
            class="flex items-center gap-2 mb-6 text-xs font-bold text-gray-400 uppercase tracking-wider"
          >
            <span
              v-for="(genre, gIdx) in story.genres"
              :key="gIdx"
              class="flex items-center"
            >
              {{ genre
              }}<span
                v-if="gIdx < story.genres.length - 1"
                class="mx-2 text-yellow-500 text-md"
                >•</span
              >
            </span>
          </div>

          <!-- Rating -->
          <div class="flex items-center gap-1.5 mb-8">
            <div class="flex text-yellow-400">
              <svg
                v-for="i in 5"
                :key="i"
                class="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>
            <span class="text-sm font-bold text-[#3D1A1A] ml-2">{{
              story.rating
            }}</span>
            <span class="text-xs font-medium text-gray-400"
              >({{ story.reviews }} reviews)</span
            >
          </div>

          <!-- Actions -->
          <div class="flex gap-4 mt-auto">
            <button
              class="flex-1 bg-yellow-400 hover:bg-yellow-300 text-black py-3 rounded-xl font-bold text-sm shadow-lg shadow-yellow-400/10 transition-all active:scale-95"
            >
              Read Now
            </button>
            <button
              class="flex-1 bg-white border-2 border-gray-100 hover:border-gray-200 text-[#3D1A1A] py-3 rounded-xl font-bold text-sm transition-all active:scale-95"
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
h2,
h3 {
  font-family: "Playfair Display", serif;
}
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
