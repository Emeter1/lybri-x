<script setup>
</script>

<template>
  <div class="bg-[#FAFAFA] min-h-screen">
    <!-- Hero Section -->
    <div class="py-20 px-6 text-center">
      <h1
        class="text-5xl md:text-6xl font-extrabold text-[#3D1A1A] mb-4"
        style="font-family: 'Playfair Display', serif"
      >
        The Writer’s Cast
      </h1>
      <p class="text-gray-500 text-lg md:text-xl font-medium mb-8 opacity-80">
        A dedicated space for writers to write, grow and be recognized.
      </p>
      <button
        class="bg-yellow-400 hover:bg-yellow-500 text-[#3D1A1A] font-bold py-3 px-8 rounded-lg shadow-md transition-colors"
      >
        Start Writing
      </button>
    </div>

    <!-- Content Section -->
    <div
      class="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16"
    >
      <!-- Left Column -->
      <div class="space-y-12">
        <!-- Who You Are -->
        <div>
          <div class="flex items-center gap-2 mb-3">
            <span class="text-yellow-400 text-2xl">★</span>
            <h3
              class="text-2xl font-bold text-[#3D1A1A]"
              style="font-family: 'Playfair Display', serif"
            >
              Who You Are
            </h3>
          </div>
          <p class="text-gray-600 leading-relaxed">
            You are the architect of stories—the one who imagines worlds, builds
            characters, and shapes emotions through words. As a writer on
            Labarix, you are not just publishing text; you are creating
            experiences that others will read, listen to, and connect with.
          </p>
          <div class="h-px bg-gray-200 w-full mt-8"></div>
        </div>

        <!-- What Is This Cast For -->
        <div>
          <div class="flex items-center gap-2 mb-3">
            <!-- Icon placeholder - simpler than SVG for now using text/emoji or simple span -->
            <span class="text-yellow-400 text-2xl font-bold">G</span>
            <h3
              class="text-2xl font-bold text-[#3D1A1A]"
              style="font-family: 'Playfair Display', serif"
            >
              What Is This Cast For
            </h3>
          </div>
          <p class="text-gray-600 leading-relaxed">
            The Writer Cast exists to give storytellers a dedicated space to
            write, grow, and be recognized. Labarix is designed to support
            writers at every stage, whether you are just starting out or already
            have a library of stories to share.
          </p>
          <div class="h-px bg-gray-200 w-full mt-8"></div>
        </div>

        <!-- How It Works -->
        <div>
          <div class="flex items-center gap-2 mb-3">
            <span class="text-yellow-400 text-2xl">⚙</span>
            <h3
              class="text-2xl font-bold text-[#3D1A1A]"
              style="font-family: 'Playfair Display', serif"
            >
              How It Works
            </h3>
          </div>
          <p class="text-gray-600 leading-relaxed">
            You focus on creativity while Labarix handles discovery and
            connection. Your stories become part of a growing library where
            readers can follow your journey and voice artists can help amplify
            your work beyond text.
          </p>
          <div class="h-px bg-gray-200 w-full mt-8"></div>
        </div>
      </div>

      <!-- Right Column (Grey Box) -->
      <div>
        <div class="bg-[#EEEEEE] p-8 md:p-12 rounded-xl sticky top-24">
          <h3
            class="text-2xl font-bold text-[#3D1A1A] mb-6"
            style="font-family: 'Playfair Display', serif"
          >
            What Do You Do On Labarix
          </h3>
          <ul class="space-y-4 text-gray-700">
            <li class="flex items-start gap-3">
              <span
                class="mt-1.5 w-1.5 h-1.5 bg-[#3D1A1A] rounded-full flex-shrink-0"
              ></span>
              <span
                >Write and publish original novels, short stories, or
                series</span
              >
            </li>
            <li class="flex items-start gap-3">
              <span
                class="mt-1.5 w-1.5 h-1.5 bg-[#3D1A1A] rounded-full flex-shrink-0"
              ></span>
              <span>Upload chapters gradually or all at once</span>
            </li>
            <li class="flex items-start gap-3">
              <span
                class="mt-1.5 w-1.5 h-1.5 bg-[#3D1A1A] rounded-full flex-shrink-0"
              ></span>
              <span>Organize your stories by genre and status</span>
            </li>
            <li class="flex items-start gap-3">
              <span
                class="mt-1.5 w-1.5 h-1.5 bg-[#3D1A1A] rounded-full flex-shrink-0"
              ></span>
              <span>Receive feedback, reactions, and support from readers</span>
            </li>
            <li class="flex items-start gap-3">
              <span
                class="mt-1.5 w-1.5 h-1.5 bg-[#3D1A1A] rounded-full flex-shrink-0"
              ></span>
              <span>Monitor how readers engage with your work</span>
            </li>
            <li class="flex items-start gap-3">
              <span
                class="mt-1.5 w-1.5 h-1.5 bg-[#3D1A1A] rounded-full flex-shrink-0"
              ></span>
              <span
                >Partner with voice artists to create audio versions of your
                stories</span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
