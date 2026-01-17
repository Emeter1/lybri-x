<template>
  <section class="py-24 px-6 bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Image Placeholder -->
        <div class="relative group">
          <div
            class="absolute inset-0 bg-yellow-400/20 rounded-[2rem] transform rotate-3 transition-transform group-hover:rotate-6"
          ></div>
          <div
            class="relative bg-gray-100 rounded-[2rem] overflow-hidden h-96 lg:h-[500px] shadow-xl"
          >
            <!-- Ideally replace with actual image asset -->
            <div
              class="w-full h-full flex items-center justify-center bg-gray-50 text-gray-400"
            >
              <span class="text-lg">Mission Image</span>
            </div>
            <img
              src="https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=2070&auto=format&fit=crop"
              alt="Reading a book"
              class="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        <!-- Content -->
        <div class="space-y-8">
          <span
            class="text-yellow-600 font-semibold tracking-wider uppercase text-sm"
            >Our Mission</span
          >
          <h2
            class="text-4xl md:text-5xl font-bold text-[#3D1A1A] leading-tight"
            style="font-family: 'Playfair Display', serif"
          >
            Connecting World <br />Through Stories
          </h2>
          <div
            class="space-y-6 text-lg text-gray-600 leading-relaxed font-medium"
          >
            <p>
              At Lybri-x, we believe that stories are the threads that weave the
              fabric of human connection. They allow us to step into someone
              else's shoes, explore worlds we've never seen, and feel emotions
              we've never felt.
            </p>
            <p>
              Our mission is to create a seamless ecosystem for writers to craft
              their masterpieces and for readers to lose themselves in them.
              Whether through the written word or immersive audio, we bring
              stories to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
