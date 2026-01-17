<template>
  <section class="py-24 px-6 bg-white">
    <div class="max-w-7xl mx-auto text-center">
      <h2
        class="text-4xl font-bold text-[#3D1A1A] mb-16"
        style="font-family: 'Playfair Display', serif"
      >
        Meet The Team
      </h2>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div v-for="member in team" :key="member.name" class="group">
          <div
            class="relative overflow-hidden rounded-2xl aspect-[3/4] mb-6 bg-gray-200"
          >
            <!-- Placeholder for team image -->
            <div
              class="w-full h-full flex items-center justify-center text-gray-400"
            >
              Photo
            </div>
            <img
              v-if="member.image"
              :src="member.image"
              :alt="member.name"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <h3 class="text-xl font-bold text-[#3D1A1A]">{{ member.name }}</h3>
          <p
            class="text-yellow-600 font-medium text-sm uppercase tracking-wide mt-1"
          >
            {{ member.role }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const team = [
  {
    name: "Alex Rivera",
    role: "Founder & CEO",
    // image: "/path/to/image.jpg"
  },
  {
    name: "Sarah Chen",
    role: "Head of Content",
    // image: "/path/to/image.jpg"
  },
  {
    name: "Marcus Johnson",
    role: "Lead Developer",
    // image: "/path/to/image.jpg"
  },
  {
    name: "Emily Davis",
    role: "Community Manager",
    // image: "/path/to/image.jpg"
  },
];
</script>
