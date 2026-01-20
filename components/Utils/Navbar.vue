<template>
  <nav
    class="relative z-10 bg-white shadow-sm flex items-center justify-between px-8 py-4 max-w-full mx-auto"
  >
    <div class="flex items-center">
      <NuxtLink to="/">
        <img
          src="/assets/Frame 118.png"
          alt="LabariX Logo"
          class="h-10 w-auto"
        />
      </NuxtLink>
    </div>

    <div class="hidden md:flex items-center gap-10 text-sm font-semibold">
      <NuxtLink
        v-for="link in navLinks"
        :key="link.name"
        :to="link.href"
        class="text-gray-600 hover:text-yellow-500 transition-colors duration-200 cursor-pointer"
        :class="{
          'text-black font-bold':
            $route.path === link.href ||
            ($route.path === '/' && link.name === 'Home'),
        }"
      >
        {{ link.name }}
      </NuxtLink>
    </div>

    <div class="flex items-center gap-4 text-sm font-bold">
      <button
        class="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-2 rounded-full transition-all active:scale-95"
      >
        Sign Up
      </button>
      <button
        class="bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-100 px-8 py-2 rounded-full transition-all active:scale-95 shadow-sm"
      >
        Log In
      </button>
    </div>
  </nav>
</template>


<script setup>
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Explore", href: "/explore" },
  { name: "Contact Us", href: "/contact-us" },
];
</script>

