
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  'AboutHero': typeof import("../../components/About/Hero.vue").default
  'AboutMission': typeof import("../../components/About/Mission.vue").default
  'AboutStory': typeof import("../../components/About/Story.vue").default
  'AboutTeam': typeof import("../../components/About/Team.vue").default
  'AboutValues': typeof import("../../components/About/Values.vue").default
  'CastWriter': typeof import("../../components/Cast/Writer.vue").default
  'ContactHero': typeof import("../../components/Contact/Hero.vue").default
  'ExploreRecommended': typeof import("../../components/Explore/Recommended.vue").default
  'ExploreSearch': typeof import("../../components/Explore/Search.vue").default
  'ExploreTrending': typeof import("../../components/Explore/Trending.vue").default
  'ExploreTrending0': typeof import("../../components/Explore/Trending0.vue").default
  'LandingAbout': typeof import("../../components/Landing/About.vue").default
  'LandingCTA': typeof import("../../components/Landing/CTA.vue").default
  'LandingCast': typeof import("../../components/Landing/Cast.vue").default
  'LandingCollection': typeof import("../../components/Landing/Collection.vue").default
  'LandingFeatures': typeof import("../../components/Landing/Features.vue").default
  'LandingHero': typeof import("../../components/Landing/Hero.vue").default
  'LandingStoryPath': typeof import("../../components/Landing/LandingStoryPath.vue").default
  'LandingTestimonials': typeof import("../../components/Landing/LandingTestimonials.vue").default
  'LandingPage': typeof import("../../components/Landing/Page.vue").default
  'StoryDetailsChapterPreview': typeof import("../../components/StoryDetails/ChapterPreview.vue").default
  'StoryDetailsHero': typeof import("../../components/StoryDetails/Hero.vue").default
  'StoryDetailsSimilarStories': typeof import("../../components/StoryDetails/SimilarStories.vue").default
  'StoryDetailsSynopsis': typeof import("../../components/StoryDetails/Synopsis.vue").default
  'StoryReaderContent': typeof import("../../components/StoryReader/Content.vue").default
  'StoryReaderNavbar': typeof import("../../components/StoryReader/Navbar.vue").default
  'SuccessPg': typeof import("../../components/SuccessPg.vue").default
  'UtilsFooter': typeof import("../../components/Utils/Footer.vue").default
  'UtilsNavbar': typeof import("../../components/Utils/Navbar.vue").default
  'NuxtWelcome': typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue").default
  'NuxtLayout': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout").default
  'NuxtErrorBoundary': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default
  'ClientOnly': typeof import("../../node_modules/nuxt/dist/app/components/client-only").default
  'DevOnly': typeof import("../../node_modules/nuxt/dist/app/components/dev-only").default
  'ServerPlaceholder': typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder").default
  'NuxtLink': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link").default
  'NuxtLoadingIndicator': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default
  'NuxtTime': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue").default
  'NuxtRouteAnnouncer': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer").default
  'NuxtImg': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtImg
  'NuxtPicture': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtPicture
  'NuxtPage': typeof import("../../node_modules/nuxt/dist/pages/runtime/page").default
  'NoScript': typeof import("../../node_modules/nuxt/dist/head/runtime/components").NoScript
  'Link': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Link
  'Base': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Base
  'Title': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Title
  'Meta': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Meta
  'Style': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Style
  'Head': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Head
  'Html': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Html
  'Body': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Body
  'NuxtIsland': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island").default
  'LazyAboutHero': LazyComponent<typeof import("../../components/About/Hero.vue").default>
  'LazyAboutMission': LazyComponent<typeof import("../../components/About/Mission.vue").default>
  'LazyAboutStory': LazyComponent<typeof import("../../components/About/Story.vue").default>
  'LazyAboutTeam': LazyComponent<typeof import("../../components/About/Team.vue").default>
  'LazyAboutValues': LazyComponent<typeof import("../../components/About/Values.vue").default>
  'LazyCastWriter': LazyComponent<typeof import("../../components/Cast/Writer.vue").default>
  'LazyContactHero': LazyComponent<typeof import("../../components/Contact/Hero.vue").default>
  'LazyExploreRecommended': LazyComponent<typeof import("../../components/Explore/Recommended.vue").default>
  'LazyExploreSearch': LazyComponent<typeof import("../../components/Explore/Search.vue").default>
  'LazyExploreTrending': LazyComponent<typeof import("../../components/Explore/Trending.vue").default>
  'LazyExploreTrending0': LazyComponent<typeof import("../../components/Explore/Trending0.vue").default>
  'LazyLandingAbout': LazyComponent<typeof import("../../components/Landing/About.vue").default>
  'LazyLandingCTA': LazyComponent<typeof import("../../components/Landing/CTA.vue").default>
  'LazyLandingCast': LazyComponent<typeof import("../../components/Landing/Cast.vue").default>
  'LazyLandingCollection': LazyComponent<typeof import("../../components/Landing/Collection.vue").default>
  'LazyLandingFeatures': LazyComponent<typeof import("../../components/Landing/Features.vue").default>
  'LazyLandingHero': LazyComponent<typeof import("../../components/Landing/Hero.vue").default>
  'LazyLandingStoryPath': LazyComponent<typeof import("../../components/Landing/LandingStoryPath.vue").default>
  'LazyLandingTestimonials': LazyComponent<typeof import("../../components/Landing/LandingTestimonials.vue").default>
  'LazyLandingPage': LazyComponent<typeof import("../../components/Landing/Page.vue").default>
  'LazyStoryDetailsChapterPreview': LazyComponent<typeof import("../../components/StoryDetails/ChapterPreview.vue").default>
  'LazyStoryDetailsHero': LazyComponent<typeof import("../../components/StoryDetails/Hero.vue").default>
  'LazyStoryDetailsSimilarStories': LazyComponent<typeof import("../../components/StoryDetails/SimilarStories.vue").default>
  'LazyStoryDetailsSynopsis': LazyComponent<typeof import("../../components/StoryDetails/Synopsis.vue").default>
  'LazyStoryReaderContent': LazyComponent<typeof import("../../components/StoryReader/Content.vue").default>
  'LazyStoryReaderNavbar': LazyComponent<typeof import("../../components/StoryReader/Navbar.vue").default>
  'LazySuccessPg': LazyComponent<typeof import("../../components/SuccessPg.vue").default>
  'LazyUtilsFooter': LazyComponent<typeof import("../../components/Utils/Footer.vue").default>
  'LazyUtilsNavbar': LazyComponent<typeof import("../../components/Utils/Navbar.vue").default>
  'LazyNuxtWelcome': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue").default>
  'LazyNuxtLayout': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout").default>
  'LazyNuxtErrorBoundary': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default>
  'LazyClientOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only").default>
  'LazyDevOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only").default>
  'LazyServerPlaceholder': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder").default>
  'LazyNuxtLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link").default>
  'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default>
  'LazyNuxtTime': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue").default>
  'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer").default>
  'LazyNuxtImg': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtImg>
  'LazyNuxtPicture': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtPicture>
  'LazyNuxtPage': LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page").default>
  'LazyNoScript': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").NoScript>
  'LazyLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Link>
  'LazyBase': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Base>
  'LazyTitle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Title>
  'LazyMeta': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Meta>
  'LazyStyle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Style>
  'LazyHead': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Head>
  'LazyHtml': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Html>
  'LazyBody': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Body>
  'LazyNuxtIsland': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island").default>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
