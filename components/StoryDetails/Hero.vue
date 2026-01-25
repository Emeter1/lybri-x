<script setup>
defineProps({
  story: {
    type: Object,
    required: true,
    default: () => ({
      title: "The Potter And The Clay",
      author: "Ayodele Micheal",
      image: "/assets/abstract_story_cover.png",
      rating: "5.0",
      reviews: "1850 Reviews",
      chapters: "68",
      readers: "20.0K",
      status: "Completed",
      genre: "Mystery",
    }),
  },
});
</script>

<template>
  <section class="max-w-7xl mx-auto px-6 py-8">
    <div class="bg-white rounded-[2.5rem] p-8 md:p-12 relative">
      <!-- Close Button -->
      <!-- <NuxtLink
        to="/explore"
        class="absolute top-8 right-8 w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6L6 18M6 6L18 18"
            stroke="#1F2937"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </NuxtLink> -->
      <!-- Putting the close button outside relative logic of the card might be easier for positioning relative to card content, 
           but the design shows it inside the top right.
           Wait, looking at the image, the background is white for the whole page section or card? 
           The image shows a white background for the text area stats, but the main image is on the left.
           Let's look at the "Synopsis" box below.
           
           Actually, looking closer at the image, the top section has the image on the left, and detail text on the right. 
           The "Synopsis" is in its own white card below.
           The top section seems to have a white background too? No, it looks like it's just on the page background?
           Wait, there is a close button on top right of the DETAILS area. 
           Let's assume the page background is the cream color #FDFCF9 like Explore.
      -->

      <div class="flex flex-col lg:flex-row gap-12 items-start">
        <!-- Book Cover -->
        <div class="w-full lg:w-[250px] flex-shrink-0">
          <div class="rounded-[2rem] overflow-hidden shadow-2xl aspect-[3/4]">
            <img
              src="@/assets/abstract_story_cover.png"
              :alt="story.cover"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <!-- Details -->
        <div class="flex-1 w-full pt-4">
          <div class="flex justify-between items-start">
            <div class="flex gap-4 mb-8">
              <span
                class="px-8 py-2.5 bg-[#E1B876] text-[#3D1A1A] rounded-full font-sans font-medium"
              >
                {{ story.genre }}
              </span>
              <span
                class="px-8 py-2.5 border border-[#E1B876] text-[#3D1A1A] rounded-full font-sans font-medium"
              >
                {{ story.status }}
              </span>
            </div>

            <NuxtLink
              to="/explore"
              class="w-10 h-10 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 1L1 13M1 1L13 13"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </NuxtLink>
          </div>

          <h1
            class="text-5xl md:text-6xl font-serif font-bold text-[#1a1a1a] mb-4 leading-tight"
          >
            {{ story.title }}
          </h1>
          <p class="text-xl text-gray-500 font-sans mb-10">
            By {{ story.author }}
          </p>

          <!-- Stats Grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <!-- Rating -->
            <div class="bg-[#F0F0F0] rounded-xl p-6">
              <div class="flex items-center gap-2 mb-1">
                <svg
                  class="w-6 h-6 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <span class="text-xl font-bold font-sans">{{
                  story.rating
                }}</span>
              </div>
              <p class="text-xs text-black font-semibold font-sans">
                {{ story.reviews }}
              </p>
            </div>

            <!-- Chapters -->
            <div class="bg-[#F0F0F0] rounded-xl p-6">
              <div class="flex items-center gap-2 mb-1">
                <svg
                  class="w-6 h-6 text-[#1a1a1a]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <span class="text-xl font-bold font-sans">{{
                  story.chapters
                }}</span>
              </div>
              <p class="text-xs text-black font-semibold font-sans">Chapters</p>
            </div>

            <!-- Readers -->
            <div class="bg-[#F0F0F0] rounded-xl p-6">
              <div class="flex items-center gap-2 mb-1">
                <svg
                  class="w-6 h-6 text-[#1a1a1a]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span class="text-xl font-bold font-sans">{{
                  story.readers
                }}</span>
              </div>
              <p class="text-xs text-black font-semibold font-sans">Readers</p>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink
              :to="`/stories/${$route.params.id || 'default'}/read`"
              class="flex-1 bg-[#FFD700] hover:bg-[#F4C430] text-black py-4 px-8 rounded-xl font-bold font-sans text-lg flex items-center justify-center gap-3 transition-transform active:scale-95"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 5.5C2.5 4.67157 3.17157 4 4 4H10M2.5 5.5V16.5C2.5 17.3284 3.17157 18 4 18H16.5M2.5 5.5H10M10 4V16M10 4H16.5C17.3284 4 18 4.67157 18 5.5V16.5C18 17.3284 17.3284 18 16.5 18M10 16H16.5"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Start Reading
            </NuxtLink>
            <button
              class="flex-1 bg-white border border-gray-200 hover:bg-gray-50 text-black py-4 px-8 rounded-xl font-bold font-sans text-lg flex items-center justify-center gap-3 transition-transform active:scale-95 shadow-sm"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 17V3M10 17C10 17 6.31976 15.5414 4.5452 13.9094C3.89694 13.3131 3.57281 13.015 3.51868 12.6343C3.47161 12.3033 3.58529 11.9791 3.82422 11.758C4.09908 11.5036 4.53856 11.5036 5.41753 11.5036H10M10 17C10 17 13.6802 15.5414 15.4548 13.9094C16.1031 13.3131 16.4272 13.015 16.4813 12.6343C16.5284 12.3033 16.4147 11.9791 16.1758 11.758C15.9009 11.5036 15.4614 11.5036 14.5825 11.5036H10M10 3C10 3 6.31976 4.45862 4.5452 6.09061C3.89694 6.68692 3.57281 6.98507 3.51868 7.3657C3.47161 7.69677 3.58529 8.0209 3.82422 8.24197C4.09908 8.49638 4.53856 8.49638 5.41753 8.49638H10M10 3C10 3 13.6802 4.45862 15.4548 6.09061C16.1031 6.68692 16.4272 6.98507 16.4813 7.3657C16.5284 7.69677 16.4147 8.0209 16.1758 8.24197C15.9009 8.49638 15.4614 8.49638 14.5825 8.49638H10"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Listen to Audio
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
