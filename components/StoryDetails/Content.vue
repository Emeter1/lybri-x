<script setup>
defineProps({
  chapter: {
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

"Good morning," she said. "What can I get you?"

"Black coffee," he replied. "No sugar."

She nodded. "Anything else?"

He thought about it. "Whatever pairs well."

That made her pause. "Do you want something sweet or not too sweet?"

"Not too sweet."

"Alright."

She prepared his order quickly and brought it to the small table near the window. He thanked her, and she returned to her duties. If she noticed that he stayed longer than most people, she didn't comment on it.

A little later, she passed his table again.

"You're not from around here," she said casually, more as conversation than curiosity.

He smiled slightly. "That obvious?"

"We see the same faces most days."

"I just moved back," he said. "Still settling."

"Welcome back then."

"Thanks."

There wasn't much else to say. Silence followed, but it wasn't uncomfortable. He finished his drink slowly, then stood to leave.

"Thanks," he said again. "By the way, what's your name?"

"Solá."

"I'm Kael."

She nodded. "Nice to meet you."

He hesitated briefly, then said, "Maybe I'll stop by again."

"Sure."

When he left, she didn't think much of it. People said things like that all the time.

Her apartment later that evening was quiet, as usual. She cooked, ate, and scrolled through her phone before going to bed. Life felt steady. That mattered more than anything.

The next morning, the rain was gone.

When Kael walked into the café again, Aderinsola recognized him immediately. That surprised her.

"Morning," he said.

"Morning," she replied. "Same order?"

He smiled. "If you remember it, yes."

She did.

As she handed him his coffee, she realized this was how things started—not with grand moments or sudden feelings, but with small, ordinary routines.

And sometimes, those were the ones that changed everything.`
    })
  }
});
</script>

<template>
  <section class="max-w-7xl mx-auto px-6 pb-12 font-sans">
    <div class="bg-white rounnoded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-sm">
      <!-- Header -->
      <div class="mb-10">
        <h2 class="text-4xl md:text-5xl font-serif font-bold text-[#1a1a1a] mb-3">
          Chapter {{ chapter.number }}: {{ chapter.title }}
        </h2>
        <div class="text-gray-500 space-y-1">
          <p class="text-lg font-normal">By {{ chapter.author }}</p>
          <p class="text-sm opacity-60">Uploaded {{ chapter.date }}</p>
        </div>
      </div>

      <!-- Story Content -->
      <div class="text-gray-700 text-lg md:text-xl font-serif leading-relaxed space-y-8 tracking-tight whitespace-pre-line">
        {{ chapter.content }}
      </div>

      <!-- Read More Action (if this is a preview) -->
      <div class="mt-12 flex flex-col sm:flex-row gap-6">
         <NuxtLink
          :to="`/stories/${$route.params.id || 'default'}/read`"
          class="bg-[#FFD700] hover:bg-[#F4C430] text-black py-4 px-10 rounded-xl font-bold font-sans text-lg flex items-center justify-center gap-3 transition-transform active:scale-95 shadow-lg shadow-yellow-400/10"
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
