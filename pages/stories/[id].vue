<script setup>
import { ref } from 'vue';
const route = useRoute();

// Mock data - in a real app this would fetch based on route.params.id
const story = ref({
    id: route.params.id || 1,
    title: "The Potter And The Clay",
    author: "Ayodele Micheal",
    rating: 5.0,
    reviews: 1850,
    chapters: 68,
    readers: "20.0K",
    tags: ["Mystery", "Completed"],
    description: "Two hearts meet at the wrong time, bound by unspoken feelings and hidden wounds. As secrets from the past begin to surface, love is tested by betrayal and sacrifice. Every choice pulls them further apart, even as their hearts refuse to let go. Pain, longing, and hope intertwine in a journey that changes them forever.\nIn choosing between fear and fate, they discover what it truly means to love.",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
});

const similarStories = [
    {
        id: 2,
        title: "The Potter And the Clay",
        tags: ["Thriller", "Drama"],
        rating: 4.9,
        reviews: "1,247",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 3,
        title: "The Potter And the Clay",
        tags: ["Thriller", "Drama"],
        rating: 4.9,
        reviews: "1,247",
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 4,
        title: "The Potter And the Clay",
        tags: ["Thriller", "Drama"],
        rating: 4.9,
        reviews: "1,247",
        image: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
];
</script>

<template>
    <div class="min-h-screen bg-[#FDFCF9] font-sans selection:bg-yellow-400/30 font-outfit">
        <!-- Navbar placeholder/Back navigation if needed, or just the X button -->

        <main class="max-w-7xl mx-auto px-6 py-12">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">

                <!-- Left: Cover Image -->
                <div class="lg:col-span-5">
                    <div class="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200 shadow-xl">
                        <img :src="story.image" :alt="story.title" class="w-full h-full object-cover">
                    </div>
                </div>

                <!-- Right: Details -->
                <div class="lg:col-span-7 relative">
                    <!-- Close Button -->
                    <NuxtLink to="/explore"
                        class="absolute top-0 right-0 p-2 text-gray-400 hover:text-gray-900 transition-colors">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </NuxtLink>

                    <!-- Tags -->
                    <div class="flex gap-3 mb-6 font-outfit">
                        <span v-for="tag in story.tags" :key="tag"
                            class="px-6 py-1.5 rounded-full border text-sm font-medium"
                            :class="tag === 'Mystery' ? 'bg-[#E1B879] border-[#E1B879] text-gray-900' : 'bg-[#FDFCF9] border-gray-300 text-gray-600'">
                            {{ tag }}
                        </span>
                    </div>

                    <!-- Title & Author -->
                    <div class="mb-8">
                        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-2 font-serif">{{ story.title }}</h1>
                        <p class="text-xl text-gray-600 font-serif">By {{ story.author }}</p>
                    </div>

                    <!-- Stats Grid -->
                    <div class="grid grid-cols-3 gap-4 mb-8">
                        <div class="bg-[#EEEBE7] bg-opacity-50 rounded-lg p-4 font-outfit">
                            <div class="flex items-center gap-1.5 mb-1 font-bold text-lg text-gray-900">
                                <span class="text-[#FFD700]">★</span> {{ story.rating.toFixed(1) }}
                            </div>
                            <div class="text-xs text-black font-medium">{{ story.reviews }} Reviews</div>
                        </div>
                        <div class="bg-[#EEEBE7] bg-opacity-50 rounded-lg p-4 font-outfit">
                            <div class="flex items-center gap-2 mb-1 font-bold text-lg text-gray-900">
                                <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253">
                                    </path>
                                </svg>
                                {{ story.chapters }}
                            </div>
                            <div class="text-xs text-black font-medium">Chapters</div>
                        </div>
                        <div class="bg-[#EEEBE7] bg-opacity-50 rounded-lg p-4 font-outfit">
                            <div class="flex items-center gap-2 mb-1 font-bold text-lg text-gray-900">
                                <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
                                    </path>
                                </svg>
                                {{ story.readers }}
                            </div>
                            <div class="text-xs text-black font-medium">Readers</div>
                        </div>
                    </div>

                    <!-- Action Buttons -->
                    <div class="flex flex-wrap gap-4 font-outfit">
                        <button
                            class="px-8 py-3 bg-[#FFC800] hover:bg-[#E5B300] text-gray-900 font-bold rounded-md transition-colors flex items-center gap-2">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253">
                                </path>
                            </svg>
                            Start Reading
                        </button>
                        <button
                            class="px-8 py-3 bg-white hover:bg-gray-50 border border-gray-200 text-gray-900 font-bold rounded-md transition-colors flex items-center gap-2 shadow-sm">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z">
                                </path>
                            </svg>
                            Listen to Audio
                        </button>
                    </div>
                </div>
            </div>

            <!-- Synopsis -->
            <div class="mt-12 bg-[#FBFFFB] border border-[#F0F0F0] rounded-2xl p-8 lg:p-10 font-serif">
                <!-- Using a subtle background difference if needed, or just white space -->
                <h2 class="text-3xl font-bold text-gray-900 mb-6">Synopsis</h2>
                <p class="text-gray-700 text-lg leading-relaxed whitespace-pre-line font-outfit">
                    {{ story.description }}
                </p>
            </div>

            <!-- Chapter Preview -->
            <div class="mt-8 border border-gray-100 rounded-2xl p-8 lg:p-10 bg-[#FBFFFB] shadow-sm font-serif">
                <h3 class="text-2xl font-bold text-gray-900 mb-6">Chapter One: A Normal Beginning</h3>
                <div class="text-gray-700 text-lg leading-relaxed space-y-6 font-outfit">
                    <p>
                        The rain started early that morning, light and steady, enough to slow the city but not stop it.
                        Aderinsola noticed it only because the café was quieter than usual. Fewer customers came in when
                        the weather looked uncertain, and she didn't mind the calm. Quiet made the hours pass easier.
                    </p>
                    <p>
                        She stood behind the counter, refilling sugar jars and wiping surfaces that were already clean.
                        Working mornings had become routine—comfortable, predictable. That was how she liked her life
                        now.
                        Simple rules, no surprises.
                    </p>
                    <p>
                        “Solá,” her coworker said from the back. “You’re on the floor.”
                    </p>
                    <p>
                        “I know,” she replied, tying her apron properly before stepping forward.
                    </p>
                    <p>
                        The café smelled of coffee and baked bread. A soft playlist played in the background, barely
                        noticeable. Aderinsola moved between tables with practiced ease, taking orders, delivering
                        drinks, exchanging polite smiles. She didn't think much about the people who came in anymore.
                        Faces blurred together after a while.
                    </p>
                    <p>
                        When the door opened again, she didn't look up immediately.
                    </p>
                    <p>
                        “Hi,” a man said at the counter.
                    </p>
                    <p>
                        She turned. He looked like someone new—slightly unsure, dressed neatly but without
                        eff..........<a href="#" class="text-blue-500 hover:text-blue-600 font-medium">Read More</a>
                    </p>
                </div>
            </div>

            <!-- Continue Reading Button -->
            <div class="mt-8">
                <button
                    class="px-8 py-3 bg-[#FFC800] hover:bg-[#E5B300] text-gray-900 font-bold rounded-md transition-colors flex items-center gap-2 font-outfit">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                    Continue Reading
                </button>
            </div>

            <!-- Similar Stories -->
            <div class="mt-16 pt-8 border-t border-gray-100">
                <div class="mb-8">
                    <h2 class="text-3xl font-bold text-gray-900 mb-2 font-serif">Similar Stories For You</h2>
                    <p class="text-gray-600 text-lg font-outfit">More stories in the same genre and styles.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div v-for="book in similarStories" :key="book.id"
                        class="bg-white rounded-lg overflow-hidden group">
                        <!-- Image Container -->
                        <div class="aspect-[16/9] overflow-hidden bg-gray-100 mb-4 rounded-md">
                            <img :src="book.image" :alt="book.title"
                                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>

                        <!-- Content -->
                        <div class="space-y-3">
                            <h3 class="text-xl font-bold text-gray-900 leading-tight font-serif">{{ book.title }}</h3>

                            <!-- Tags -->
                            <div class="flex items-center gap-2 text-xs font-medium text-gray-900 font-outfit">
                                <span v-for="(tag, index) in book.tags" :key="tag">
                                    {{ tag }}<span v-if="index < book.tags.length - 1"
                                        class="mx-1 text-gray-400">•</span>
                                </span>
                            </div>

                            <!-- Rating -->
                            <div class="flex items-center gap-1 text-sm font-outfit">
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
                            <div class="grid grid-cols-2 gap-3 pt-2 font-outfit">
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
            </div>

        </main>
    </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap");

.font-sans {
    font-family: "Outfit", sans-serif;
}

.font-serif {
    font-family: "Playfair Display", serif;
}

.font-outfit {
    font-family: "Outfit", sans-serif;
}
</style>
