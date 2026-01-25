<script setup>
defineProps({
  chapterTitle: {
    type: String,
    default: "Chapter One: A Normal Beginning",
  },
  previewText: {
    type: String,
    default: `The rain started early that morning, light and steady, enough to slow the city but not stop it. Aderinsola noticed it only because the café was quieter than usual. Fewer customers came in when the weather looked uncertain, and she didn't mind the calm. Quiet made the hours pass easier.

She stood behind the counter, refilling sugar jars and wiping surfaces that were already clean. Working mornings had become routine—comfortable, predictable. That was how she liked her life now. Simple rules, no surprises.

"Solá," her coworker said from the back. "You're on the floor."

"I know," she replied, tying her apron properly before stepping forward.

The café smelled of coffee and baked bread. A soft playlist played in the background, barely noticeable. Aderinsola moved between tables with practiced ease, taking orders, delivering drinks, exchanging polite smiles. She didn't think much about the people who came in anymore. Faces blurred together after a while.

When the door opened again, she didn't look up immediately.

"Hi," a man said at the counter.

She turned. He looked like someone new—slightly unsure, dressed neatly but without eff..........`,
  },
});
</script>

<template>
  <section class="max-w-7xl mx-auto px-6 pb-12">
    <div
      class="bg-white rounded-[2rem] p-8 md:p-12 border border-gray-100 shadow-sm mb-8"
    >
      <h2 class="text-3xl md:text-4xl font-serif font-bold text-[#1a1a1a] mb-8">
        {{ chapterTitle }}
      </h2>
      <div
        class="text-gray-600 text-lg md:text-xl font-serif leading-relaxed space-y-6 tracking-tight"
      >
        <p class="whitespace-pre-line">
          {{ previewText
          }}<button class="text-[#3B82F6] hover:underline font-medium ml-1">
            Read More
          </button>
        </p>
      </div>
    </div>

    <!-- Continue Reading Button -->
    <NuxtLink
      :to="`/stories/${$route.params.id || 'default'}/read`"
      class="bg-[#FFD700] hover:bg-[#F4C430] text-black py-4 px-8 rounded-xl font-bold font-sans text-lg flex items-center gap-3 transition-transform active:scale-95 shadow-sm inline-flex"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 12H19M19 12L12 5M19 12L12 19"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      Continue Reading
    </NuxtLink>
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
