<script setup>
const route = useRoute();
const storyId = route.params.id;

// In a real app, we would fetch the story details based on storyId
// For now, we'll use static data that matches the design
const storyMap = {
  default: {
    title: "The Potter And The Clay",
    author: "Ayodele Micheal",
    image: "/assets/abstract_story_cover.png",
    rating: "5.0",
    reviews: "1850 Reviews",
    chapters: "68",
    readers: "20.0K",
    status: "Completed",
    genre: "Mystery",
    synopsis: `Two hearts meet at the wrong time, bound by unspoken feelings and hidden wounds. As secrets from the past begin to surface, love is tested by betrayal and sacrifice. Every choice pulls them further apart, even as their hearts refuse to let go. Pain, longing, and hope intertwine in a journey that changes them forever.
    In choosing between fear and fate, they discover what it truly means to love.`,
  },
};

const story = storyMap[storyId] || storyMap.default;
</script>

<template>
  <div class="min-h-screen bg-[#FDFCF9] font-sans pt-12">
    <StoryDetailsHero :story="story" />
    <StoryDetailsSynopsis :synopsis="story.synopsis" />
    <StoryDetailsChapterPreview />
    <StoryDetailsSimilarStories />
  </div>
</template>

<style scoped>
.font-sans {
  font-family: "Outfit", sans-serif;
}
</style>
