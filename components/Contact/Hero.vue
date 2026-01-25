<template>
  <section
    class="h-screen w-full flex items-center justify-center bg-gray-50/50 py-4 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans"
  >
    <div
      class="max-w-3xl w-full h-[97vh] bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row relative rounded-none"
    >
      <!-- Close Button -->
      <button
        @click="$router.push('/')"
        class="absolute top-6 right-8 text-gray-400 hover:text-gray-600 transition-colors z-20 cursor-pointer"
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

      <!-- SUCCESS STATE UI -->
      <div
        v-if="submitted"
        class="w-full h-full flex flex-col items-center justify-center p-4 text-center animate-fade-in"
      >
        <div class="max-w-[280px] w-full flex flex-col items-center">
          <!-- Success Illustration -->
          <div class="mb-3 w-32 h-32 flex items-center justify-center">
            <img
              src="@/assets/congratulationsImg.png"
              alt="Success Illustration"
              class="w-full h-full object-contain"
            />
          </div>

          <!-- Success Text -->
          <h2 class="text-2xl font-medium text-yellow-500 mb-2 font-serif">
            Submitted!
          </h2>
          <p class="text-gray-500 text-xs font-normal font-serif mb-4 max-w-sm">
            Your concern has been submitted, we would get back to you in 2-3
            business days
          </p>

          <!-- Continue Button -->
          <button
            @click="$router.push('/')"
            class="w-full max-w-xs bg-yellow-400 hover:bg-yellow-300 text-black font-bolder py-2 rounded-xl shadow-lg shadow-yellow-400/20 transition-all active:scale-[0.98] font-serif text-sm"
          >
            Continue
          </button>
        </div>
      </div>

      <!-- FORM STATE UI (Split Layout) -->
      <template v-else>
        <!-- Left Side: Image -->
        <div class="md:w-[75%] relative min-h-[200px] md:min-h-full">
          <img
            src="@/assets/ContactUs.png"
            alt="Contact Us Sidebar"
            class="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <!-- Right Side: Form Content -->
        <div
          class="md:w-[100%] px-8 md:px-12 lg:px-16 flex flex-col justify-between overflow-hidden relative pb-8"
        >
          <!-- Contact Us Header with 13px top margin -->
          <div class="text-center mt-[13px] mb-6">
            <h2
              class="text-3xl md:text-4xl font-normal text-[#1a1a1a] mb-2 font-serif"
            >
              Contact Us
            </h2>
            <p
              class="text-gray-500 text-sm md:text-base font-normal font-serif pb-2"
            >
              We usually get back to you in 2-3 business day
            </p>
          </div>

          <form
            @submit.prevent="handleSubmit"
            class="space-y-3 flex flex-col items-center flex-grow justify-center"
          >
            <div class="w-full space-y-3">
              <!-- Name Row -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1">
                  <label
                    class="block text-lg font-light text-[#1a1a1a] font-sans"
                    >Name</label
                  >
                  <input
                    type="text"
                    placeholder="First name"
                    class="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none transition-all placeholder:text-gray-400 font-sans font-light"
                  />
                </div>
                <div class="space-y-1">
                  <label
                    class="block text-lg font-light text-transparent select-none sm:block hidden font-sans"
                    >Last Name</label
                  >
                  <input
                    type="text"
                    placeholder="Last name"
                    class="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none transition-all placeholder:text-gray-400 font-sans font-light"
                  />
                </div>
              </div>

              <!-- Email -->
              <div class="space-y-1">
                <label class="block text-lg font-light text-[#1a1a1a] font-sans"
                  >Email</label
                >
                <input
                  type="email"
                  placeholder="****************@gmail.com"
                  class="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none transition-all placeholder:text-gray-400 font-sans font-light"
                />
              </div>

              <!-- Category -->
              <div class="space-y-1">
                <label class="block text-lg font-light text-[#1a1a1a] font-sans"
                  >I need help regarding?</label
                >
                <input
                  type="text"
                  class="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none transition-all placeholder:text-gray-400 font-sans font-light"
                />
              </div>

              <!-- Message -->
              <div class="space-y-1">
                <label class="block text-lg font-light text-[#1a1a1a] font-sans"
                  >Message</label
                >
                <textarea
                  rows="2"
                  class="w-full px-4 mb-2 py-2 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 outline-none transition-all resize-none font-sans font-light"
                ></textarea>
              </div>
            </div>

            <!-- Submit Button (Full width to match inputs) -->
            <button
              type="submit"
              class="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-light py-2 rounded-xl shadow-lg shadow-yellow-400/20 transition-all active:scale-[0.98] mt-4 font-sans block"
            >
              Submit
            </button>
          </form>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const submitted = ref(false);

const handleSubmit = () => {
  // Form submission logic
  submitted.value = true;
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap");

.font-sans {
  font-family: "Outfit", sans-serif !important;
}

.font-serif {
  font-family: "Playfair Display", serif !important;
}

input::placeholder,
textarea::placeholder {
  font-family: "Outfit", sans-serif;
  color: #9ca3af;
}

/* Ensure no overflow or scrolling on the main section or form area */
section,
.h-\[97vh\],
form,
div {
  overflow: hidden !important;
}

section {
  max-height: 100vh;
}

.animate-fade-in {
  animation: fadeIn 0.4s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>