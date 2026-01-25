<script setup>
const route = useRoute();
const storyId = route.params.id;

// Mock data for the chapter
const chapterData = {
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

She turned. He looked like someone new—slightly unsure, dressed neatly but without effort.

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

And sometimes, those were the ones that changed everything.`,
};
</script>

<template>
  <div class="min-h-screen bg-white font-sans">
    <StoryReaderNavbar
      :chapter-title="'Chapter 1'"
      :current-chapter="1"
      :total-chapters="50"
    />
    <StoryReaderContent :chapter-data="chapterData" />
  </div>
</template>

<style scoped>
.font-sans {
  font-family: "Outfit", sans-serif;
}
</style>
