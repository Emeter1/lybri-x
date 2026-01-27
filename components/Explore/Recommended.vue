<script setup>
const recommendations = [
  {
    id: 1,
    title: "The Potter And the Clay",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempor pellentesque nisi, non faucibus felis posuere sit amet.",
    tags: ["Thriller", "Drama"],
    rating: 4.9,
    reviews: "1,247",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "The Potter And the Clay",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempor pellentesque nisi, non faucibus felis posuere sit amet.",
    tags: ["Thriller", "Drama"],
    rating: 4.9,
    reviews: "1,247",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "The Potter And the Clay",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempor pellentesque nisi, non faucibus felis posuere sit amet.",
    tags: ["Thriller", "Drama"],
    rating: 4.9,
    reviews: "1,247",
    image: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "The Potter And the Clay",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempor pellentesque nisi, non faucibus felis posuere sit amet.",
    tags: ["Thriller", "Drama"],
    rating: 4.9,
    reviews: "1,247",
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];
</script>

<template>
  <section class="py-8">
    <div class="mb-8">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-serif">Recommended for you</h2>
      <p class="text-gray-600 text-lg">Personalized picks based on your reading history and preferences</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="book in recommendations" :key="book.id" class="bg-white rounded-lg overflow-hidden group">
        <!-- Image Container -->
        <div class="aspect-[4/3] overflow-hidden bg-gray-100 mb-4">
          <img :src="book.image" :alt="book.title"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>

        <!-- Content -->
        <div class="space-y-3">
          <h3 class="text-xl font-bold text-gray-900 leading-tight font-serif">{{ book.title }}</h3>

          <p class="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {{ book.description }}
          </p>

          <!-- Tags -->
          <div class="flex items-center gap-2 text-xs font-medium text-gray-900">
            <span v-for="(tag, index) in book.tags" :key="tag">
              {{ tag }}<span v-if="index < book.tags.length - 1" class="mx-1 text-gray-400">•</span>
            </span>
          </div>

          <!-- Rating -->
          <div class="flex items-center gap-1 text-sm">
            <div class="flex text-[#FFC800]">
              <svg v-for="i in 5" :key="i" class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span class="font-bold ml-1 text-gray-900">{{ book.rating }}</span>
            <span class="text-gray-500">({{ book.reviews }} reviews)</span>
          </div>

          <!-- Buttons -->
          <div class="grid grid-cols-2 gap-3 pt-2">
            <NuxtLink :to="`/stories/${book.id}`"
              class="w-full py-2.5 bg-[#FFC800] hover:bg-[#E5B300] text-gray-900 font-medium rounded transition-colors text-sm text-center block">
              Read Now
            </NuxtLink>
            <button
              class="w-full py-2.5 border border-gray-300 hover:border-gray-400 text-gray-600 font-medium rounded transition-colors text-sm">
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
  font-family: 'Playfair Display', serif;
}
</style>
