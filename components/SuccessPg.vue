<template>
  <section
    class="h-screen w-full flex items-center justify-center bg-gray-50/50 py-4 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans"
  >
    <div
      class="max-w-[280px] w-full bg-white shadow-5xl rounded-2xl overflow-hidden flex flex-col items-center justify-center p-4 relative"
    >
      <!-- Close Button -->
      <button
        @click="$router.push('/')"
        class="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors z-20 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- Illustration -->
      <div class="mb-3">
        <img
          src="@/assets/CongratulationsImg.png"
          alt="Success Illustration"
          class="w-32 h-auto object-contain"
        />
      </div>

      <!-- Success Message -->
      <div class="text-center mb-4">
        <h2 class="text-2xl font-semibold text-yellow-400 mb-2 font-sans">
          Submitted!
        </h2>
        <p class="text-gray-600 text-xs font-normal font-sans">
          Your concern has been submitted, we would get back to you in 2-3
          business days
        </p>
      </div>

      <!-- Continue Button -->
      <button
        @click="$router.push('/')"
        class="w-full max-w-xs bg-yellow-400 hover:bg-yellow-300 text-black font-medium py-2 px-6 rounded-xl shadow-lg shadow-yellow-400/20 transition-all active:scale-[0.98] font-sans text-sm"
      >
        Continue
      </button>
    </div>
  </section>
</template>

<script setup>
// Success page logic
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap");

.font-sans {
  font-family: "Outfit", sans-serif !important;
}

.font-serif {
  font-family: "Playfair Display", serif !important;
}
</style>
