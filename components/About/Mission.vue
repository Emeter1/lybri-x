<script setup>
const aboutUsImg = "/assets/about_us_book_heart_1768317623524.png";
</script>

<template>
  <section class="py-10 md:py-16 px-6 bg-white">
    <div class="max-w-7xl mx-auto">
      <h1
        class="text-4xl md:text-6xl font-bold text-[#1a1a1a] mb-8 text-center tracking-tight"
        style="font-family: 'Playfair Display', serif"
      >
        About Us
      </h1>

      <div class="block">
        <!-- Image floated to the right -->
        <div
          class="float-right ml-8 mb-6 w-full md:w-[45%] lg:w-[40%] relative rounded-3xl overflow-hidden shadow-lg"
        >
          <img
            src="@/assets/HeartShapedBook.jpg"
            alt="Heart Shaped Book Pages"
            class="w-full h-auto object-cover"
          />
        </div>

        <!-- Text Content -->
        <div
          class="text-[#1a1a1a] text-lg leading-relaxed text-justify"
          style="font-family: 'Playfair Display', serif"
        >
          <p class="mb-6">
            Labarix is a storytelling platform built to connect words, voices,
            and audiences in one creative space. We believe stories are more
            than just text on a screen—they are experiences meant to be written
            with intention, read with emotion, and heard with depth. Stories
            have the power to inspire, comfort, and connect people, and Labarix
            exists to ensure those stories are given the space and attention
            they deserve. Our platform is designed to empower storytellers with
            the tools, visibility, and audience they need to grow, while giving
            readers and listeners access to stories that truly resonate and stay
            with them.
          </p>
          <p class="mb-6">
            At the core of Labarix are three distinct but interconnected casts:
            Writers, Readers, and Voice Artists. Writers are the creators,
            crafting original novels, series, and narratives that spark
            imagination and build new worlds.
          </p>
          <p class="mb-6">
            Readers are the lifeblood of the platform, bringing stories to life
            through their engagement, feedback, and support, helping stories
            evolve and reach wider audiences. Voice artists add an immersive
            layer to storytelling by transforming written words into expressive
            audio experiences, allowing stories to be felt through tone,
            emotion, and performance. Each cast plays a vital role, and together
            they form a complete storytelling ecosystem where creativity flows
            freely from one form to another.
          </p>
          <p>
            Our mission is simple: to make storytelling accessible,
            collaborative, and impactful for everyone involved. Labarix is built
            to encourage creativity, foster meaningful collaboration, and create
            a community where stories can grow beyond a single format. Whether
            you are crafting your first chapter, discovering your next favorite
            novel, or lending your voice to a powerful story, Labarix is built
            for you. Here, stories don't just live on the page—they move through
            voices, connect with audiences, and continue to grow long after they
            are first created.
          </p>
        </div>
        <div class="clear-both"></div>
      </div>
    </div>
  </section>
</template>
