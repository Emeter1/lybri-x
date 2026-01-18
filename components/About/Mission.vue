<script setup>
const aboutUsImg = "/assets/about_us_book_heart_1768317623524.png";
</script>

<template>
  <section class="py-24 px-6 bg-white">
    <div class="max-w-7xl mx-auto">
      <h2
        class="text-4xl md:text-5xl font-extrabold text-[#3D1A1A] mb-16 text-center"
        style="font-family: 'Playfair Display', serif"
      >
        About Us
      </h2>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Text Content -->
        <div class="order-2 lg:order-1 text-left flex flex-col justify-center">
          <div
            class="space-y-6 text-gray-600 text-lg leading-relaxed font-medium"
          >
            <p>
              Labarix is a storytelling platform built for those who write,
              read, and give stories a voice. It brings together writers,
              readers, and voice artists in one immersive space where stories
              are created, discovered, and experienced in deeper ways.
            </p>
            <p>
              More than a novel app, Labarix is a home for narratives that
              linger long after the last page. We believe stories are meant to
              be felt, heard, and shared connecting people through imagination,
              emotion, and the power of storytelling.
            </p>
          </div>
        </div>

        <!-- Image -->
        <div
          class="order-1 lg:order-2 relative rounded-[2rem] overflow-hidden shadow-2xl h-80 lg:h-auto"
        >
          <img
            :src="aboutUsImg"
            alt="About Us - Heart Shaped Book"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>
