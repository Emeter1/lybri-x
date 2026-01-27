<script setup>
defineProps({
  chapterData: {
    type: Object,
    required: true,
    default: () => ({
      number: 1,
      title: "The First Meeting",
      author: "Ayodele Micheal",
      date: "1st January 2026",
      content: `The rain started early that morning, light and steady, enough to slow the city but not stop it. Aderinsola noticed it only because the café was quieter than usual. Fewer customers came in when the weather looked uncertain, and she didn't mind the calm. Quiet made the hours pass easier.

She stood behind the counter, refilling sugar jars and wiping surfaces that were already clean. Working mornings had become routine—comfortable, predictable. That was how she liked her life now. Simple rules, no surprises.

"Solá," her coworker said from the back. "You're on the floor."

"I know," she replied, tying her apron properly before stepping forward.

The café smelled of coffee and baked bread. A soft playlist played in the background, barely noticeable. Aderinsola moved between tables with practiced ease, taking orders, delivering drinks, exchanging polite smiles. She didn't think much about the people who came in anymore. Faces blurred together after a while.

When the door opened again, she didn't look up immediately.

"Hi," a man said at the counter.

She turned. He looked like someone new—slightly unsure, dressed neatly but without effort. He didn't rush his words, which stood out.

"A flat white, please," he added, his voice low and steady.

She keyed in the order, her hands moving automatically. "Anything else?"

"No, that's all. Thank you."

He paid and moved to the waiting area. Aderinsola made the drink, focusing on the swirl of the milk, the steam rising from the cup. When she handed it to him, their fingers brushed slightly.

"Thanks, Aderinsola," he said, reading her nametag.

She nodded, a small, polite smile on her face. "Enjoy."

He walked to a table by the window and sat down, opening a notebook. She watched him for a second longer than she intended before turning back to her work.

The rain continued to fall, tapping rhythmically against the glass. The café hummed with low conversations and the clinking of cups. But for the rest of his stay, her eyes kept drifting back to the man by the window, wondering what he was writing.`,
    }),
  },
});
</script>

<template>
  <div class="max-w-5xl mx-auto px-6 py-8">
    <!-- Header -->
    <div class="mb-12 border-b border-gray-100 pb-8">
      <h1 class="text-2xl md:text-4xl font-serif font-bold text-[#1a1a1a] mb-4">
        Chapter {{ chapterData.number }}: {{ chapterData.title }}
      </h1>
      <div class="flex items-center gap-2 text-sm font-sans text-gray-500">
        <span class="font-medium text-gray-900"
          >By {{ chapterData.author }}</span
        >
        <span>•</span>
        <span>Uploaded {{ chapterData.date }}</span>
      </div>
    </div>

    <!-- Content -->
    <article class="prose prose-lg prose-gray max-w-none">
      <div
        class="text-lg md:text-xl font-serif leading-loose text-gray-800 space-y-8 tracking-tight whitespace-pre-line"
      >
        {{ chapterData.content }}
      </div>
    </article>

    <!-- Chapter Navigation -->
    <div class="mt-16">
      <div
        class="border border-gray-200 rounded-full px-6 py-4 flex items-center justify-between mb-8 cursor-pointer hover:border-gray-300 transition-colors"
      >
        <div class="flex items-center gap-2">
          <span class="font-serif text-lg text-gray-800"
            >Chapter {{ chapterData.number }}: {{ chapterData.title }}</span
          >
        </div>

        <div class="flex items-center gap-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 15L7 10H17L12 15Z" fill="#1F2937" />
          </svg>
          <span class="font-sans font-medium text-gray-500">1 / 50</span>
        </div>
      </div>

      <div class="flex items-center justify-center gap-6">
        <button
          class="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-xl text-gray-500 font-sans font-medium hover:border-gray-400 hover:text-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 15L7.5 10L12.5 5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Previous Chapter
        </button>
        <button
          class="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-xl text-gray-900 font-sans font-medium hover:border-gray-400 hover:text-black transition-colors"
        >
          Next Chapter
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 5L12.5 10L7.5 15"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.font-serif {
  font-family: "Playfair Display", serif;
}

.font-sans {
  font-family: "Outfit", sans-serif;
}
</style>
