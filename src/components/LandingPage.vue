<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Explore', href: '#' },
    { name: 'Create', href: '#' },
]

const stats = [
    {
        name: 'Top Picks',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`
    },
    {
        name: 'Listen Now',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>`
    },
    {
        name: 'New Adventures',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 4 3 3-3 3"></path><path d="M19 7H5a2 2 0 0 0-2 2v5"></path><circle cx="9" cy="13" r="1"></circle><path d="M15 13h.01"></path><circle cx="12" cy="13" r="1"></circle></svg>`
    },
]

// Import images directly to ensure they work in build
import personalLibImg from '../assets/3b14b387081f22f8e912bacf65afde1c78744c05.jpg'
import chapterExpImg from '../assets/847e97434a97d1696ab972683549c42936272662.jpg'
import readingAbstractImg from '../assets/9988b209d1884e42b169e601097cfff8f1be53f0.jpg'
import avatarImg from '../assets/b78d9b18ecf07a2f4b46cfccf523028ca21fd0d5.jpg'
import aboutUsImg from '../assets/about_us_book_heart_1768317623524.png' // Generated asset
import ctaBgImg from '../assets/cta_book_texture_dark_1768317663518.png' // Generated asset

const castMembers = [
    {
        name: 'Writers',
        tagline: 'Turn your words into worlds',
        description: 'Write freely publish boldly and let your stories find the readers they were meant for.',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>`
    },
    {
        name: 'Readers',
        tagline: 'Get lost in stories that stay',
        description: "Discover powerful tales, unforgettable characters, and worlds you'll never want to leave.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`
    },
    {
        name: 'Voice Artists',
        tagline: 'Give stories a voice',
        description: 'Bring written words to life through emotion, rhythm, and sound and be heard.',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>`
    }
]

const collectionItems = [
    {
        title: 'Personal Library',
        description: 'All your reads, favorites and creations in one place.',
        image: personalLibImg
    },
    {
        title: 'Chapter Explorer',
        description: 'Easily navigate and binge through chapters at your own space.',
        image: chapterExpImg
    },
    {
        title: 'Reading Insights',
        description: 'Track your progress and revisit your favorite moments.',
        image: readingAbstractImg
    }
]

const testimonials = [
    {
        text: "Each module read like a mini-story from someone who faced the same challenges: onboarding bumps, day-to-day HR puzzles, and the constant chase to stay current with real-world HR issues. The characters weren't experts on paper; they were us—HR folks juggling countless tasks and trying to do right by the team.",
        items: ['HR folks', 'juggling countless tasks'],
        name: 'Jackie',
        role: 'Reading Enthusiast',
        avatar: avatarImg
    },
    {
        text: "Each module read like a mini-story from someone who faced the same challenges: onboarding bumps, day-to-day HR puzzles, and the constant chase to stay current with real-world HR issues. The characters weren't experts on paper; they were us—HR folks juggling countless tasks and trying to do right by the team.",
        items: ['HR folks', 'juggling countless tasks'],
        name: 'Jackie',
        role: 'Reading Enthusiast',
        avatar: avatarImg
    },
    {
        text: "Each module read like a mini-story from someone who faced the same challenges: onboarding bumps, day-to-day HR puzzles, and the constant chase to stay current with real-world HR issues. The characters weren't experts on paper; they were us—HR folks juggling countless tasks and trying to do right by the team.",
        items: ['HR folks', 'juggling countless tasks'],
        name: 'Jackie',
        role: 'Reading Enthusiast',
        avatar: avatarImg
    }
]

const features = [
    {
        title: 'Immersive Reading Experience',
        description: 'Dive deep into stories that pulls you in, leaving a lasting impression.',
        icon: `<svg viewBox="0 0 24 24" class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`
    },
    {
        title: "Writer's Own Workshop",
        description: 'Bring your ideas to life with tools that let you write and edit like a pro.',
        icon: `<svg viewBox="0 0 24 24" class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path><path d="M15 7h3"></path></svg>`
    },
    {
        title: 'Voice Over Narration',
        description: 'Listen to your favorite stories brought to life by captivating voices.',
        icon: `<svg viewBox="0 0 24 24" class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line><path d="M8 14h8"></path></svg>`
    },
    {
        title: 'Customizable Themes',
        description: 'Choose, try, and own an avatar that journeys alongside you.',
        icon: `<svg viewBox="0 0 24 24" class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"></path><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.11"></path></svg>`
    },
    {
        title: 'Bookmark & Highlights',
        description: 'Never lose track of your favorite moments.',
        icon: `<svg viewBox="0 0 24 24" class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="2"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path><line x1="9" y1="7" x2="15" y2="7"></line><line x1="9" y1="11" x2="15" y2="11"></line></svg>`
    },
    {
        title: 'Interactive Story Feedbacks',
        description: 'Receive comments from readers and improve with insights.',
        icon: `<svg viewBox="0 0 24 24" class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z"></path><line x1="12" y1="7" x2="12" y2="11"></line><line x1="12" y1="14" x2="12.01" y2="14"></line></svg>`
    }
]

const storySteps = [
    {
        type: 'card',
        slides: [
            { title: 'Create the story', description: "Writers craft the stories, chapters and worlds using labarix's writing tool.", icon: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>` },
            { title: 'AI Story Helper', description: "Use our AI tools to build complex characters and deep story arcs effortlessly.", icon: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>` },
            { title: 'World Design', description: "Build immersive worlds with dedicated lore and geography mapping tools.", icon: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20"/></svg>` },
            { title: 'Collaboration', description: 'Invite co-authors and editors to work together in real-time on your masterpiece.', icon: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>` }
        ]
    },
    {
        type: 'text',
        slides: [
            { title: 'Publish & Discover', description: 'Stories goes live for readers to explore by genre, mood, and interest.', icon: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M12 12v9m-4-4 4 4 4-4"/></svg>` },
            { title: 'Global Reach', description: 'Publish to multiple platforms simultaneously and reach readers everywhere.', icon: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20"/></svg>` },
            { title: 'Get Featured', description: 'Be picked by our editors and see your stories on the homepage daily.', icon: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>` },
            { title: 'Social Snippets', description: 'Automatically generate shareable teaser cards for your social media channels.', icon: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>` }
        ]
    },
    {
        type: 'card',
        slides: [
            { title: 'Read & Engage', description: 'Readers dive in, save favorites, react, and follow ongoing stories.', icon: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>` },
            { title: 'Follow Authors', description: 'Never miss a chapter! Get instant notifications from your favorites.', icon: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>` },
            { title: 'Smart Reading', description: 'AI-driven recommendations tailored to your unique tastes and history.', icon: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7l.6.5"/><path d="M21 3v8h-8"/><path d="M21 3l-8 8"/></svg>` },
            { title: 'Immersive Reading', description: 'Customize your experience with different themes, fonts, and dark mode.', icon: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>` }
        ]
    },
    {
        type: 'text',
        slides: [
            { title: 'Voice the story', description: 'Voice artists bring selected stories to life through expressive audio narration.', icon: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>` },
            { title: 'Audio Magic', description: 'Listen to ambient sounds and professional scores alongside narration.', icon: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>` },
            { title: 'Be the Voice', description: 'Audition for Top Picks and build your own following as a narrator.', icon: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>` },
            { title: 'AI Narrators', description: 'Scale your reach by creating AI-powered versions of your own unique voice.', icon: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>` }
        ]
    },
    {
        type: 'card',
        slides: [
            { title: 'Grow the story', description: 'Creators connects with audience, gain recognition and expand their reach.', icon: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>` },
            { title: 'Analyze Metrics', description: 'Understand reader behavior with our comprehensive heatmaps and data.', icon: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>` },
            { title: 'Monetize Work', description: 'Earn from your creativity through subscriptions, tokens, and tips.', icon: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>` },
            { title: 'Digital Assets', description: 'Turn your characters and worlds into unique digital collectables for fans.', icon: `<svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>` }
        ]
    }
]

const activeIndices = ref([0, 0, 0, 0, 0])
let carouselTimer = null

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal')
            }
        })
    }, { threshold: 0.1 })

    document.querySelectorAll('.stagger-item').forEach(el => observer.observe(el))

    // Auto-swipe logic
    carouselTimer = setInterval(() => {
        activeIndices.value = activeIndices.value.map((idx, i) => {
            // Rotate through contents at slightly different rates or random intervals for a "natural" feel
            if (Math.random() > 0.4) {
                return (idx + 1) % storySteps[i].slides.length
            }
            return idx
        })
    }, 4000)
})

onUnmounted(() => {
    if (carouselTimer) clearInterval(carouselTimer)
})
</script>

<template>
    <div class="min-h-screen font-sans selection:bg-yellow-400/30">
        <div class="bg-white">
            <div class="relative h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden"
                style="background-image: url('/src/assets/3b14b387081f22f8e912bacf65afde1c78744c05.jpg');">
                <!-- Dark overlay to make text pop -->
                <div class="absolute inset-0 bg-black/40"></div>

                <!-- Navigation -->
                <nav
                    class="relative z-10 bg-white shadow-sm flex items-center justify-between px-8 py-4 max-w-full mx-auto">
                    <div class="flex items-center">
                        <img src="/src/assets/Frame 118.png" alt="LabariX Logo" class="h-10 w-auto" />
                    </div>

                    <div class="hidden md:flex items-center gap-10 text-sm font-semibold">
                        <a v-for="link in navLinks" :key="link.name" :href="link.href"
                            class="text-gray-600 hover:text-yellow-500 transition-colors duration-200"
                            :class="{ 'text-black': link.name === 'Home' }">
                            {{ link.name }}
                        </a>
                    </div>

                    <div class="flex items-center gap-4 text-sm font-bold">
                        <button
                            class="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-2 rounded-full transition-all active:scale-95">
                            Sign Up
                        </button>
                        <button
                            class="bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-100 px-8 py-2 rounded-full transition-all active:scale-95 shadow-sm">
                            Log In
                        </button>
                    </div>
                </nav>

                <!-- Hero Content -->
                <div
                    class="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-160px)] px-6 text-center">
                    <h1 class="text-6xl md:text-6xl font-bold text-white mb-6 tracking-tight max-w-4xl leading-tight">
                        Where Stories <br /> Come Alive.
                    </h1>

                    <p class="text-white/90 text-md md:text-xl max-w-2xl mb-12 font-medium">
                        Step into worlds of imagination, emotion, and meaning. <br />
                        Read, discover, and lose yourself in unforgettable stories.
                    </p>

                    <div class="flex flex-col sm:flex-row gap-5">
                        <button
                            class="bg-yellow-500 hover:bg-yellow-400 text-black px-10 py-2 rounded-md font-bold text-sm shadow-xl shadow-yellow-500/20 transition-all active:scale-95 group">
                            Start Reading
                            <span class="inline-block transition-transform group-hover:translate-x-1 ml-1">→</span>
                        </button>
                        <button
                            class="bg-black/20 hover:bg-black/40 backdrop-blur-md text-white border-2 border-white/20 px-10 py-2 rounded-md font-bold text-sm transition-all active:scale-95">
                            Discover Stories
                        </button>
                    </div>
                </div>

                <!-- Bottom Bar -->
                <div
                    class="absolute bottom-0 left-0 right-0 z-10 bg-black/40 backdrop-blur-xl border-t border-white/10">
                    <div class="max-w-7xl mx-auto px-10 md:px-40">
                        <div class="flex justify-around items-center pt-5 pb-3 border-b border-yellow-500/60">
                            <div v-for="stat in stats" :key="stat.name"
                                class="flex items-center gap-3 text-white/90 group cursor-pointer text-center">
                                <span class="text-xl text-yellow-400 group-hover:scale-110 transition-transform"
                                    v-html="stat.icon"></span>
                                <span
                                    class="text-md font-semibold tracking-wide group-hover:text-white transition-colors"
                                    style="font-family: serif;">{{ stat.name }}</span>
                            </div>
                        </div>
                        <!-- Decorative spacer at the bottom -->
                        <div class="h-4"></div>
                    </div>
                </div>
            </div>

            <!-- Cast Section -->
            <section class="py-24 px-6 bg-white">
                <div class="max-w-7xl mx-auto text-center">
                    <h2 class="text-5xl md:text-6xl font-extrabold text-[#3D1A1A] mb-4"
                        style="font-family: 'Playfair Display', serif;">
                        Built For The <span class="text-yellow-500">Labarix</span> Cast
                    </h2>
                    <p class="text-gray-500 text-lg md:text-xl font-medium mb-16 opacity-80">
                        Where writers, readers, and voice artists come together to create magic.
                    </p>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div v-for="member in castMembers" :key="member.name"
                            class="flex flex-col items-center bg-gradient-to-b from-yellow-100/60 to-white/30 p-10 rounded-[2rem] border border-yellow-100/50 shadow-sm hover:shadow-md transition-all duration-300">

                            <div class="text-[#3D1A1A] mb-8" v-html="member.icon"></div>

                            <h3 class="text-3xl font-bold text-[#3D1A1A] mb-4"
                                style="font-family: 'Playfair Display', serif;">
                                {{ member.name }}
                            </h3>

                            <p class="text-xl font-bold text-[#3D1A1A] mb-2 px-4 leading-tight">
                                {{ member.tagline }}
                            </p>

                            <p class="text-gray-500 text-base leading-relaxed mb-10 px-4">
                                {{ member.description }}
                            </p>

                            <button
                                class="mt-auto bg-[#602D2D] hover:bg-[#4D2424] text-white px-10 py-3 rounded-xl font-medium transition-all active:scale-95">
                                Explore More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Story Path Section -->
            <section class="py-24 px-6 bg-[#FDFCF9] overflow-hidden">
                <div class="max-w-7xl mx-auto text-center relative">
                    <h2 class="text-5xl md:text-6xl font-extrabold text-[#3D1A1A] mb-4"
                        style="font-family: 'Playfair Display', serif;">
                        The <span class="text-yellow-500">Labarix</span> Story Path
                    </h2>
                    <p class="text-gray-500 text-lg md:text-xl font-medium mb-24 opacity-80">
                        Your journey through stories from creation to discoveries.
                    </p>

                    <!-- The Path Container -->
                    <div
                        class="relative flex flex-col md:flex-row justify-between items-start gap-0 mt-32 px-4 min-h-[500px]">

                        <!-- Connecting Line (Desktop) -->
                        <div class="absolute inset-0 hidden md:block pointer-events-none">
                            <svg class="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 500">
                                <!-- Glow Path -->
                                <path d="M 15 250 
                       C 40 250, 40 40, 90 40 
                       L 150 40 C 200 40, 200 460, 250 460
                       L 350 460 C 400 460, 400 40, 450 40 
                       L 550 40 C 600 40, 600 460, 650 460
                       L 750 460 C 800 460, 800 40, 850 40
                       L 920 40 C 960 40, 960 250, 985 250" fill="none" stroke="#D1E9F6" stroke-width="8"
                                    stroke-linecap="round" class="opacity-30 blur-sm" />
                                <!-- Main Path -->
                                <path d="M 15 250 
                       C 40 250, 40 40, 90 40 
                       L 150 40 C 200 40, 200 460, 250 460
                       L 350 460 C 400 460, 400 40, 450 40 
                       L 550 40 C 600 40, 600 460, 650 460
                       L 750 460 C 800 460, 800 40, 850 40
                       L 920 40 C 960 40, 960 250, 985 250" fill="none" stroke="#D1E9F6" stroke-width="2.5"
                                    stroke-linecap="round" />

                                <!-- Start & End Nodes -->
                                <circle cx="15" cy="250" r="4.5" fill="#D1E9F6" />
                                <circle cx="985" cy="250" r="4.5" fill="#D1E9F6" />
                            </svg>
                        </div>

                        <!-- Steps -->
                        <div v-for="(step, index) in storySteps" :key="index"
                            class="flex-1 flex flex-col items-center relative z-10 w-full md:w-auto opacity-0 translate-y-10 stagger-item"
                            :class="index % 2 === 0 ? 'md:mt-0' : 'md:mt-64'">

                            <!-- Step Content Carousel -->
                            <div class="relative w-full max-w-[280px] h-[340px] overflow-visible">
                                <TransitionGroup name="swipe">
                                    <div v-for="(slide, slideIdx) in step.slides" :key="slideIdx"
                                        v-show="activeIndices[index] === slideIdx"
                                        class="absolute inset-0 flex flex-col items-center justify-center">

                                        <div v-if="step.type === 'card'"
                                            class="bg-[#FEECAE] p-8 rounded-[2.5rem] shadow-xl shadow-yellow-200/20 border border-yellow-200/50 w-full h-full flex flex-col items-center justify-between hover:scale-105 transition-transform duration-300">
                                            <div class="mb-2 text-[#3D1A1A] scale-110" v-html="slide.icon"></div>
                                            <div>
                                                <h3 class="text-2xl font-bold text-[#3D1A1A] mb-3"
                                                    style="font-family: 'Playfair Display', serif;">{{ slide.title }}
                                                </h3>
                                                <p
                                                    class="text-gray-700 text-sm leading-relaxed mb-6 font-medium text-center">
                                                    {{ slide.description }}</p>
                                            </div>

                                            <!-- Progress Dots -->
                                            <div class="flex gap-2.5 mt-auto pb-2">
                                                <div v-for="i in step.slides.length" :key="i"
                                                    class="w-2 h-2 rounded-full transition-all duration-300"
                                                    :class="i - 1 === slideIdx ? 'bg-gray-800 scale-125' : 'bg-gray-300'">
                                                </div>
                                            </div>
                                        </div>

                                        <div v-else
                                            class="flex flex-col items-center text-center w-full h-[300px] justify-center group py-4">
                                            <div class="mb-4 text-[#3D1A1A] group-hover:scale-110 transition-transform duration-300 scale-125"
                                                v-html="slide.icon"></div>
                                            <div>
                                                <h3 class="text-2xl font-bold text-[#3D1A1A] mb-3"
                                                    style="font-family: 'Playfair Display', serif;">{{ slide.title }}
                                                </h3>
                                                <p class="text-gray-600 text-sm leading-relaxed mb-6 max-w-[180px]">{{
                                                    slide.description }}</p>
                                            </div>

                                            <!-- Progress Dots -->
                                            <div class="flex gap-2.5 mt-auto pb-2">
                                                <div v-for="i in step.slides.length" :key="i"
                                                    class="w-2 h-2 rounded-full transition-all duration-300"
                                                    :class="i - 1 === slideIdx ? 'bg-gray-600 scale-125' : 'bg-gray-300'">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TransitionGroup>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Amazing Features Section -->
            <section class="py-24 px-6 bg-[#FDFCF9]">
                <div class="max-w-7xl mx-auto text-center">
                    <h2 class="text-5xl md:text-6xl font-extrabold text-[#3D1A1A] mb-4"
                        style="font-family: 'Playfair Display', serif;">
                        Amazing <span class="text-yellow-500">Features</span> To Experience
                    </h2>
                    <p
                        class="text-gray-500 text-lg md:text-xl font-medium mb-16 opacity-80 text-center mx-auto max-w-2xl">
                        Tools and experiences designed to make every story unforgettable.
                    </p>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div v-for="feature in features" :key="feature.title"
                            class="flex flex-col items-center bg-[#F3E9D2] p-8 rounded-[1.5rem] shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1 max-w-[320px] mx-auto">

                            <div class="text-[#3D1A1A] mb-6 transition-transform duration-300 group-hover:scale-110"
                                v-html="feature.icon"></div>

                            <h3 class="text-xl font-bold text-[#3D1A1A] mb-3 leading-tight text-center"
                                style="font-family: 'Playfair Display', serif;">
                                {{ feature.title }}
                            </h3>

                            <p class="text-gray-600 text-sm leading-relaxed text-center">
                                {{ feature.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Collect Your Stories Section -->
            <section class="py-24 px-6 bg-white">
                <div class="max-w-7xl mx-auto text-center">
                    <h2 class="text-5xl md:text-6xl font-extrabold text-[#3D1A1A] mb-4"
                        style="font-family: 'Playfair Display', serif;">
                        Collect Your <span class="text-yellow-500">Stories</span>
                    </h2>
                    <p
                        class="text-gray-500 text-lg md:text-xl font-medium mb-16 opacity-80 text-center mx-auto max-w-2xl">
                        Build a library that grows with your imagination.
                    </p>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div v-for="(item, index) in collectionItems" :key="index"
                            class="relative h-[400px] rounded-[2rem] overflow-hidden group">
                            <img :src="item.image" :alt="item.title"
                                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-left">
                                <h3 class="text-3xl font-bold text-white mb-2"
                                    style="font-family: 'Playfair Display', serif;">
                                    {{ item.title }}
                                </h3>
                                <p class="text-white/80 text-lg leading-snug">
                                    {{ item.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Testimonials Section -->
            <section class="py-24 px-6 bg-white">
                <div class="max-w-7xl mx-auto text-center relative">

                    <h2 class="text-5xl md:text-6xl font-extrabold text-[#3D1A1A] mb-4"
                        style="font-family: 'Playfair Display', serif;">
                        Testimonials
                    </h2>
                    <p
                        class="text-gray-500 text-lg md:text-xl font-medium mb-20 opacity-80 text-center mx-auto max-w-2xl">
                        What our users say?
                    </p>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div v-for="(t, index) in testimonials" :key="index" class="flex flex-col items-center">
                            <div class="text-yellow-400 text-6xl font-serif mb-6 leading-none self-start">“</div>
                            <p class="text-gray-500 text-sm leading-relaxed mb-8 text-center px-4">
                                {{ t.text }}
                            </p>
                            <div class="text-yellow-400 text-6xl font-serif mt-auto mb-6 leading-none self-end">”</div>

                            <div
                                class="flex items-center justify-center gap-4 mt-4 w-full border-t border-gray-100 pt-6">
                                <img :src="t.avatar" :alt="t.name" class="w-12 h-12 rounded-full object-cover" />
                                <div class="text-left">
                                    <h4 class="font-bold text-[#3D1A1A] text-lg">{{ t.name }}</h4>
                                    <p class="text-gray-400 text-sm">{{ t.role }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <!-- About Us Section -->
            <section class="py-24 px-6 bg-white">
                <div class="max-w-7xl mx-auto">
                    <h2 class="text-5xl md:text-6xl font-extrabold text-[#3D1A1A] mb-16 text-center"
                        style="font-family: 'Playfair Display', serif;">
                        About Us
                    </h2>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
                        <!-- Text Content -->
                        <div class="text-left flex flex-col justify-center">
                            <div class="space-y-6 text-gray-600 text-lg leading-relaxed font-medium">
                                <p>
                                    Labarix is a storytelling platform built for those who write, read, and give stories
                                    a voice. It brings together writers, readers, and voice artists in one immersive
                                    space where stories are created, discovered, and experienced in deeper ways.
                                </p>
                                <p>
                                    More than a novel app, Labarix is a home for narratives that linger long after the
                                    last page. We believe stories are meant to be felt, heard, and shared connecting
                                    people through imagination, emotion, and the power of storytelling.
                                </p>
                            </div>
                        </div>

                        <!-- Image -->
                        <div class="relative rounded-[2rem] overflow-hidden shadow-2xl h-80 lg:h-auto">
                            <img :src="aboutUsImg" alt="About Us - Heart Shaped Book"
                                class="w-full h-full object-cover lg:absolute lg:inset-0" />
                        </div>
                    </div>
                </div>
            </section>

            <!-- Ready to Explore CTA Section -->
            <section class="relative py-32 px-6 overflow-hidden">
                <!-- Background Image with Overlay -->
                <div class="absolute inset-0 z-0">
                    <img :src="ctaBgImg" alt="Background" class="w-full h-full object-cover" />
                    <div class="absolute inset-0 bg-black/60"></div>
                </div>

                <div class="relative z-10 max-w-4xl mx-auto text-center text-white">
                    <h2 class="text-4xl md:text-6xl font-extrabold mb-8 leading-tight"
                        style="font-family: 'Playfair Display', serif;">
                        Ready to Explore Your Next Story?
                    </h2>

                    <p class="text-xl md:text-2xl text-white/90 mb-12 font-medium leading-relaxed">
                        Join LabariX and Discover Immersive Stories, connect with creators, <br
                            class="hidden md:block" />
                        and become part of a vibrant reading community.
                    </p>

                    <button
                        class="bg-yellow-500 hover:bg-yellow-400 text-black text-lg font-bold px-12 py-4 rounded-lg shadow-lg shadow-yellow-500/20 transition-all active:scale-95 transform hover:-translate-y-1">
                        Explore Now
                    </button>
                </div>
            </section>

            <!-- Footer -->
            <footer class="bg-[#151515] pt-24 pb-12 px-8 border-t border-gray-800 mt-5">
                <div class="max-w-7xl mx-auto">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20 text-left">
                        <!-- Brand Column -->
                        <div class="lg:col-span-2">
                            <div class="flex items-center gap-2 mb-6">
                                <svg width="126" height="57" viewBox="0 0 126 57" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M118.129 43.0015C118.574 42.725 118.613 42.8054 118.757 42.2123C118.997 41.2216 118.915 40.184 118.281 39.3685C118.144 39.1925 118.154 39.1509 117.879 39.2017C117.689 39.7603 118.154 39.2611 117.253 40.4547C115.647 42.5801 116.905 41.4694 115.178 42.1118C114.773 42.2626 114.205 42.5292 114.012 42.7953C113.596 43.3671 113.779 45.6046 113.448 45.8949C113.308 46.0178 113.058 46.1365 112.872 46.3037C112.189 46.919 112.222 47.1275 112.072 48.2285C111.958 49.0685 112.105 49.1864 112.571 49.5897C112.904 49.8776 113.396 50.054 113.997 49.9704C115.04 49.8253 115.367 48.9012 115.882 48.144C116.622 47.0553 117.929 44.5331 118.129 43.0015ZM86.6074 3.10545C86.9667 2.35315 86.8062 2.6144 86.8948 1.76309C86.9313 1.41291 87.5652 1.07763 87.2628 0.546991C87.1221 0.300396 86.4921 0.0546716 86.0524 0.0178043C85.1954 -0.0541915 85.1195 0.0972216 84.6412 0.380509C83.3007 -0.087637 83.3502 0.653883 82.0941 0.678114C81.5963 0.687794 81.1347 0.551281 80.6291 0.630523C80.2202 0.694519 79.865 0.86303 79.4494 0.971371C78.4671 1.22776 77.7852 1.27315 76.7284 1.33871C76.0826 1.37877 75.8813 1.3539 75.4662 1.05305C74.4727 0.332628 74.3634 1.23976 73.7006 1.75649C72.774 2.4787 71.671 2.44114 71.309 3.88737C71.0249 5.02215 71.5474 5.37047 70.4519 6.00331C69.3401 6.64564 69.4879 6.0247 68.2319 6.82627C65.8454 8.34949 66.4816 8.80563 65.2011 9.87519C64.3113 10.6185 64.2092 10.3818 64.3497 11.8444C64.4159 12.5325 64.2272 13.88 64.0657 14.5534C63.8588 15.4157 63.5531 15.9123 63.1537 16.6066C62.8985 17.0502 63.0187 17.2874 63.1056 17.802C63.1675 18.1686 63.1575 18.8773 63.2335 19.1391C63.3039 19.3815 63.4438 19.4447 63.5952 19.56C64.0707 19.922 63.7729 20.3513 64.6917 20.6878C65.6113 21.0244 65.5811 21.1856 65.8548 22.5254C66.1189 23.8185 66.3044 23.5958 67.2257 24.2073C68.7062 25.1903 68.9721 26.2042 69.7503 26.2063C71.2398 26.2104 72.4236 25.4364 73.6682 25.862C75.316 26.4257 75.9705 25.108 78.6032 24.9235C80.2234 24.8101 79.9545 25.071 80.7158 25.8552C81.8144 26.9865 83.2194 25.5852 84.2383 26.715C84.3673 26.858 84.6713 27.479 84.7318 27.7104C84.9063 28.3769 84.6311 28.4485 84.4018 28.7836C84.1883 29.0957 84.2833 29.5743 84.3116 30.0331C84.4184 31.7583 85.837 32.8255 86.62 33.7018C88.3433 35.6305 87.9386 35.4501 88.1841 38.0723C88.3449 39.7898 88.3041 39.1888 87.4279 40.1474C86.9711 40.6473 86.5871 41.3167 86.5126 42.2177C86.4668 42.7721 86.527 43.2822 86.6556 43.7648L93.0183 35.176L82.3962 20.7089H86.0347L94.7113 32.8928L96.0513 31.0844L98.9554 27.1688H102.571L96.6344 35.176L102.958 43.7807H99.359L95.7486 38.6595L94.9244 37.4272L90.26 43.7807L88.3652 47.1236C88.7549 47.9277 88.7482 47.7172 89.0009 48.7323C89.1118 49.1291 89.1919 49.5437 89.2338 49.9595C89.3665 51.2766 89.2095 50.636 90.1186 52.1316C90.6912 53.0737 91.3136 53.8663 91.8875 54.8476C92.4498 55.8091 91.7221 56.1872 92.9643 56.7599C93.9681 57.2228 94.5972 56.9118 95.5636 56.6953C95.9912 56.5996 96.5623 56.6547 97.0414 56.5761C97.3955 56.5179 97.7705 56.3482 98.2388 56.2486C100.256 55.8192 100.359 54.5546 101.903 53.8617C103.25 53.2577 103.478 52.5972 103.914 51.3752C104.447 49.8797 104.045 50.592 105.337 49.7879C106.665 48.9615 105.976 47.4992 106.119 46.2427C106.232 45.2554 106.841 45.123 107.567 44.7015C107.94 44.4849 108.207 44.2962 108.518 44.0752C109.456 43.4095 110.483 43.3234 111.044 42.0695C111.376 41.3272 111.525 38.9927 111.121 38.1413C110.981 37.8464 110.56 37.4383 110.516 37.2346C110.445 36.9048 110.712 36.3836 110.654 35.9119C110.539 34.9946 109.928 35.499 110.048 34.2403C110.115 33.5406 110.214 33.8785 110.407 33.4932C110.455 33.3977 110.468 33.2985 110.499 33.1935C110.648 32.6746 111.79 31.7321 112.243 31.2196C112.735 30.6629 113.13 30.168 113.617 29.5927C114.86 28.1239 115.486 27.8794 116.875 26.7585C117.633 26.147 118.385 25.0949 118.732 24.1248C118.91 23.627 118.977 23.5153 119.214 23.1145C119.621 22.4279 120.403 20.2003 119.748 19.6635C119.441 19.4123 118.956 19.3436 118.573 19.5699C117.943 19.9423 118.536 19.9527 117.498 20.0126C115.361 20.1359 116.164 20.5533 114.963 20.4972C114.556 20.4782 113.581 20.647 113.422 20.2534C113.416 20.2385 113.411 20.2212 113.406 20.2054C113.392 20.1595 113.38 20.0468 113.372 19.9938C113.214 18.9057 112.492 18.6168 111.737 17.9678C111.35 17.6346 111.022 17.3218 110.601 17.007C109.187 15.9475 109.874 15.3729 108.638 14.73C107.344 14.0578 108.09 12.7612 107.447 11.7791C107.108 11.2607 106.725 11.194 106.31 10.8262C106.423 10.2374 106.429 10.1164 106.108 9.67092L104.852 7.93038C104.65 7.64089 104.368 7.43534 104.223 7.13327L104.769 7.30932C105.096 6.73202 105.293 6.15681 104.848 5.50942C104.551 5.07878 104.121 4.73382 103.456 4.53267C101.812 4.03525 101.803 4.95566 99.3269 4.91265C98.7909 4.90325 98.1602 4.92169 97.6407 4.78807C97.3462 4.71231 97.4955 4.74193 97.2901 4.53197C96.6666 3.89497 95.8747 4.61591 95.4733 4.46879C95.1717 4.35824 94.7477 3.5267 93.7955 3.84117C92.8797 4.14371 93.377 4.77555 93.0353 5.41401C92.2876 5.61713 92.1709 5.31651 91.7415 5.09119C91.243 4.8297 90.8774 4.88227 90.274 4.92007C89.4801 4.22046 90.395 4.53499 88.5298 3.87137C88.1142 3.7235 86.902 3.30567 86.6074 3.10545Z"
                                        fill="#FFCC00" />
                                    <path
                                        d="M2.64205 50V28.1818H5.28409V47.6562H15.4261V50H2.64205ZM23.9915 50.3835C22.9545 50.3835 22.0135 50.1882 21.1683 49.7976C20.3232 49.3999 19.652 48.8281 19.1548 48.0824C18.6577 47.3295 18.4091 46.4205 18.4091 45.3551C18.4091 44.4176 18.5938 43.6577 18.9631 43.0753C19.3324 42.4858 19.826 42.0241 20.4439 41.6903C21.0618 41.3565 21.7436 41.108 22.4893 40.9446C23.2422 40.7741 23.9986 40.6392 24.7585 40.5398C25.7528 40.4119 26.5589 40.3161 27.1768 40.2521C27.8018 40.1811 28.2564 40.0639 28.5405 39.9006C28.8317 39.7372 28.9773 39.4531 28.9773 39.0483V38.9631C28.9773 37.9119 28.6896 37.0952 28.1143 36.5128C27.5462 35.9304 26.6832 35.6392 25.5256 35.6392C24.3253 35.6392 23.3842 35.902 22.7024 36.4276C22.0206 36.9531 21.5412 37.5142 21.2642 38.1108L18.8778 37.2585C19.304 36.2642 19.8722 35.4901 20.5824 34.9361C21.2997 34.375 22.081 33.9844 22.9261 33.7642C23.7784 33.5369 24.6165 33.4233 25.4403 33.4233C25.9659 33.4233 26.5696 33.4872 27.2514 33.6151C27.9403 33.7358 28.6044 33.9879 29.2436 34.3714C29.8899 34.755 30.4261 35.3338 30.8523 36.108C31.2784 36.8821 31.4915 37.919 31.4915 39.2188V50H28.9773V47.7841H28.8494C28.679 48.1392 28.3949 48.5192 27.9972 48.924C27.5994 49.3288 27.0703 49.6733 26.4098 49.9574C25.7493 50.2415 24.9432 50.3835 23.9915 50.3835ZM24.375 48.125C25.3693 48.125 26.2074 47.9297 26.8892 47.5391C27.5781 47.1484 28.0966 46.6442 28.4446 46.0263C28.7997 45.4084 28.9773 44.7585 28.9773 44.0767V41.7756C28.8707 41.9034 28.6364 42.0206 28.2741 42.1271C27.919 42.2266 27.5071 42.3153 27.0384 42.3935C26.5767 42.4645 26.1257 42.5284 25.6854 42.5852C25.2521 42.6349 24.9006 42.6776 24.6307 42.7131C23.9773 42.7983 23.3665 42.9368 22.7983 43.1286C22.2372 43.3132 21.7827 43.5937 21.4347 43.9702C21.0938 44.3395 20.9233 44.8437 20.9233 45.483C20.9233 46.3565 21.2464 47.017 21.8928 47.4645C22.5462 47.9048 23.3736 48.125 24.375 48.125ZM36.4213 50V28.1818H38.9355V36.2358H39.1486C39.3333 35.9517 39.589 35.5895 39.9157 35.1491C40.2495 34.7017 40.7253 34.304 41.3432 33.956C41.9682 33.6009 42.8134 33.4233 43.8787 33.4233C45.2566 33.4233 46.4711 33.7678 47.5222 34.4567C48.5733 35.1456 49.3936 36.1222 49.9831 37.3864C50.5726 38.6506 50.8674 40.142 50.8674 41.8608C50.8674 43.5938 50.5726 45.0959 49.9831 46.3672C49.3936 47.6314 48.5769 48.6115 47.5328 49.3075C46.4888 49.9964 45.285 50.3409 43.9213 50.3409C42.8702 50.3409 42.0286 50.1669 41.3965 49.8189C40.7644 49.4638 40.2779 49.0625 39.937 48.6151C39.5961 48.1605 39.3333 47.7841 39.1486 47.4858H38.8503V50H36.4213ZM38.8929 41.8182C38.8929 43.054 39.074 44.1442 39.4363 45.0888C39.7985 46.0263 40.3276 46.7614 41.0236 47.294C41.7196 47.8196 42.5719 48.0824 43.5804 48.0824C44.6316 48.0824 45.5087 47.8054 46.2118 47.2514C46.9221 46.6903 47.4547 45.9375 47.8098 44.9929C48.1721 44.0412 48.3532 42.983 48.3532 41.8182C48.3532 40.6676 48.1756 39.6307 47.8205 38.7074C47.4725 37.777 46.9434 37.0419 46.2331 36.5021C45.53 35.9553 44.6458 35.6818 43.5804 35.6818C42.5577 35.6818 41.6983 35.9411 41.0023 36.4595C40.3063 36.9709 39.7807 37.6882 39.4256 38.6115C39.0705 39.5277 38.8929 40.5966 38.8929 41.8182ZM59.5286 50.3835C58.4917 50.3835 57.5506 50.1882 56.7054 49.7976C55.8603 49.3999 55.1891 48.8281 54.6919 48.0824C54.1948 47.3295 53.9462 46.4205 53.9462 45.3551C53.9462 44.4176 54.1309 43.6577 54.5002 43.0753C54.8695 42.4858 55.3631 42.0241 55.981 41.6903C56.5989 41.3565 57.2807 41.108 58.0265 40.9446C58.7793 40.7741 59.5357 40.6392 60.2956 40.5398C61.29 40.4119 62.0961 40.3161 62.714 40.2521C63.339 40.1811 63.7935 40.0639 64.0776 39.9006C64.3688 39.7372 64.5144 39.4531 64.5144 39.0483V38.9631C64.5144 37.9119 64.2267 37.0952 63.6515 36.5128C63.0833 35.9304 62.2203 35.6392 61.0627 35.6392C59.8624 35.6392 58.9213 35.902 58.2395 36.4276C57.5577 36.9531 57.0783 37.5142 56.8013 38.1108L54.415 37.2585C54.8411 36.2642 55.4093 35.4901 56.1195 34.9361C56.8368 34.375 57.6181 33.9844 58.4632 33.7642C59.3155 33.5369 60.1536 33.4233 60.9775 33.4233C61.503 33.4233 62.1067 33.4872 62.7885 33.6151C63.4775 33.7358 64.1415 33.9879 64.7807 34.3714C65.427 34.755 65.9632 35.3338 66.3894 36.108C66.8155 36.8821 67.0286 37.919 67.0286 39.2188V50H64.5144V47.7841H64.3865C64.2161 48.1392 63.932 48.5192 63.5343 48.924C63.1365 49.3288 62.6074 49.6733 61.9469 49.9574C61.2864 50.2415 60.4803 50.3835 59.5286 50.3835ZM59.9121 48.125C60.9064 48.125 61.7445 47.9297 62.4263 47.5391C63.1152 47.1484 63.6337 46.6442 63.9817 46.0263C64.3368 45.4084 64.5144 44.7585 64.5144 44.0767V41.7756C64.4078 41.9034 64.1735 42.0206 63.8113 42.1271C63.4561 42.2266 63.0442 42.3153 62.5755 42.3935C62.1138 42.4645 61.6628 42.5284 61.2225 42.5852C60.7892 42.6349 60.4377 42.6776 60.1678 42.7131C59.5144 42.7983 58.9036 42.9368 58.3354 43.1286C57.7743 43.3132 57.3198 43.5937 56.9718 43.9702C56.6309 44.3395 56.4604 44.8437 56.4604 45.483C56.4604 46.3565 56.7836 47.017 57.4299 47.4645C58.0833 47.9048 58.9107 48.125 59.9121 48.125ZM71.6175 50V33.6364H74.0465V36.108H74.217C74.5153 35.2983 75.055 34.6413 75.8363 34.1371C76.6175 33.6328 77.4982 33.3807 78.4783 33.3807C78.663 33.3807 78.8938 33.3842 79.1708 33.3913C79.4478 33.3984 79.6573 33.4091 79.7994 33.4233V35.9801C79.7141 35.9588 79.5188 35.9268 79.2134 35.8842C78.9151 35.8345 78.5991 35.8097 78.2653 35.8097C77.4698 35.8097 76.7596 35.9766 76.1346 36.3104C75.5167 36.6371 75.0266 37.0916 74.6644 37.674C74.3093 38.2493 74.1317 38.9062 74.1317 39.6449V50H71.6175ZM82.7797 50V33.6364H85.2939V50H82.7797ZM84.0581 30.9091C83.568 30.9091 83.1454 30.7422 82.7903 30.4084C82.4423 30.0746 82.2683 29.6733 82.2683 29.2045C82.2683 28.7358 82.4423 28.3345 82.7903 28.0007C83.1454 27.6669 83.568 27.5 84.0581 27.5C84.5481 27.5 84.9672 27.6669 85.3152 28.0007C85.6703 28.3345 85.8478 28.7358 85.8478 29.2045C85.8478 29.6733 85.6703 30.0746 85.3152 30.4084C84.9672 30.7422 84.5481 30.9091 84.0581 30.9091Z"
                                        fill="white" />
                                </svg>

                            </div>

                            <p class="text-gray-400 text-sm leading-relaxed max-w-sm mb-8 font-light">
                                Our solutions make production faster and cheaper. Contact us for more information.
                            </p>

                            <!-- Social Icons -->
                            <div class="flex gap-4">
                                <a href="#"
                                    class="text-yellow-500 hover:text-yellow-400 transition-colors bg-yellow-500/10 p-2 rounded-md">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                                <a href="#"
                                    class="text-yellow-500 hover:text-yellow-400 transition-colors bg-yellow-500/10 p-2 rounded-md">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                    </svg>
                                </a>
                                <a href="#"
                                    class="text-yellow-500 hover:text-yellow-400 transition-colors bg-yellow-500/10 p-2 rounded-md">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                                <a href="#"
                                    class="text-yellow-500 hover:text-yellow-400 transition-colors bg-yellow-500/10 p-2 rounded-md">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <!-- Product Column -->
                        <div>
                            <h4 class="font-semibold text-white mb-6 text-lg">Product</h4>
                            <ul class="space-y-4 text-gray-400 text-sm">
                                <li><a href="#" class="hover:text-yellow-500 transition-colors">Dashboard</a></li>
                                <li><a href="#" class="hover:text-yellow-500 transition-colors">Features</a></li>
                                <li><a href="#" class="hover:text-yellow-500 transition-colors">Story Path</a></li>
                                <li><a href="#" class="hover:text-yellow-500 transition-colors">Cast</a></li>
                            </ul>
                        </div>

                        <!-- Resource Column -->
                        <div>
                            <h4 class="font-semibold text-white mb-6 text-lg">Resource</h4>
                            <ul class="space-y-4 text-gray-400 text-sm">
                                <li><a href="#" class="hover:text-yellow-500 transition-colors">Stories</a></li>
                                <li><a href="#" class="hover:text-yellow-500 transition-colors">FAQs</a></li>
                                <li><a href="#" class="hover:text-yellow-500 transition-colors">Filters</a></li>
                                <li><a href="#" class="hover:text-yellow-500 transition-colors">Testimonials</a></li>
                            </ul>
                        </div>

                        <!-- Company Column -->
                        <div>
                            <h4 class="font-semibold text-white mb-6 text-lg">Company</h4>
                            <ul class="space-y-4 text-gray-400 text-sm">
                                <li><a href="#" class="hover:text-yellow-500 transition-colors">About Us</a></li>
                                <li><a href="#" class="hover:text-yellow-500 transition-colors">Careers</a></li>
                                <li><a href="#" class="hover:text-yellow-500 transition-colors">Blog</a></li>
                                <li><a href="#" class="hover:text-yellow-500 transition-colors">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>

                    <!-- Bottom Bar -->
                    <div
                        class="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p class="text-gray-500 text-sm flex items-center gap-1">
                            <span class="text-lg">©</span> 2025 LabariX. All rights reserved
                        </p>
                        <div class="flex gap-8 text-gray-500 text-sm">
                            <a href="#" class="hover:text-white transition-colors">Terms and Conditions</a>
                            <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

.font-sans {
    font-family: 'Outfit', sans-serif;
}

h1,
h2,
h3,
h4 {
    font-family: 'Playfair Display', serif;
}

h1 {
    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.stagger-item {
    transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.stagger-item.reveal {
    opacity: 1;
    transform: translateY(0);
}

/* Swipe Animation */
.swipe-enter-active,
.swipe-leave-active {
    transition: all 0.5s ease;
}

.swipe-enter-from {
    opacity: 0;
    transform: translateX(30px);
}

.swipe-leave-to {
    opacity: 0;
    transform: translateX(-30px);
}
</style>
