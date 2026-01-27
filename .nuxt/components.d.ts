
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


export const AboutHero: typeof import("../components/About/Hero.vue").default
export const AboutMission: typeof import("../components/About/Mission.vue").default
export const AboutStory: typeof import("../components/About/Story.vue").default
export const AboutTeam: typeof import("../components/About/Team.vue").default
export const AboutValues: typeof import("../components/About/Values.vue").default
export const ContactHero: typeof import("../components/Contact/Hero.vue").default
export const ExploreRecommended: typeof import("../components/Explore/Recommended.vue").default
export const ExploreSearch: typeof import("../components/Explore/Search.vue").default
export const ExploreTrending: typeof import("../components/Explore/Trending.vue").default
export const ExploreTrending0: typeof import("../components/Explore/Trending0.vue").default
export const LandingAbout: typeof import("../components/Landing/About.vue").default
export const LandingCTA: typeof import("../components/Landing/CTA.vue").default
export const LandingCast: typeof import("../components/Landing/Cast.vue").default
export const LandingCollection: typeof import("../components/Landing/Collection.vue").default
export const LandingFeatures: typeof import("../components/Landing/Features.vue").default
export const LandingHero: typeof import("../components/Landing/Hero.vue").default
export const LandingStoryPath: typeof import("../components/Landing/LandingStoryPath.vue").default
export const LandingTestimonials: typeof import("../components/Landing/LandingTestimonials.vue").default
export const LandingPage: typeof import("../components/Landing/Page.vue").default
export const StoryDetailsChapterPreview: typeof import("../components/StoryDetails/ChapterPreview.vue").default
export const StoryDetailsHero: typeof import("../components/StoryDetails/Hero.vue").default
export const StoryDetailsSimilarStories: typeof import("../components/StoryDetails/SimilarStories.vue").default
export const StoryDetailsSynopsis: typeof import("../components/StoryDetails/Synopsis.vue").default
export const StoryReaderContent: typeof import("../components/StoryReader/Content.vue").default
export const StoryReaderNavbar: typeof import("../components/StoryReader/Navbar.vue").default
export const SuccessPg: typeof import("../components/SuccessPg.vue").default
export const UtilsFooter: typeof import("../components/Utils/Footer.vue").default
export const UtilsNavbar: typeof import("../components/Utils/Navbar.vue").default
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue").default
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout").default
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only").default
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only").default
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder").default
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link").default
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue").default
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer").default
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtImg
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtPicture
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page").default
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components").NoScript
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components").Link
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components").Base
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components").Title
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components").Meta
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components").Style
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components").Head
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components").Html
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components").Body
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island").default
export const LazyAboutHero: LazyComponent<typeof import("../components/About/Hero.vue").default>
export const LazyAboutMission: LazyComponent<typeof import("../components/About/Mission.vue").default>
export const LazyAboutStory: LazyComponent<typeof import("../components/About/Story.vue").default>
export const LazyAboutTeam: LazyComponent<typeof import("../components/About/Team.vue").default>
export const LazyAboutValues: LazyComponent<typeof import("../components/About/Values.vue").default>
export const LazyContactHero: LazyComponent<typeof import("../components/Contact/Hero.vue").default>
export const LazyExploreRecommended: LazyComponent<typeof import("../components/Explore/Recommended.vue").default>
export const LazyExploreSearch: LazyComponent<typeof import("../components/Explore/Search.vue").default>
export const LazyExploreTrending: LazyComponent<typeof import("../components/Explore/Trending.vue").default>
export const LazyExploreTrending0: LazyComponent<typeof import("../components/Explore/Trending0.vue").default>
export const LazyLandingAbout: LazyComponent<typeof import("../components/Landing/About.vue").default>
export const LazyLandingCTA: LazyComponent<typeof import("../components/Landing/CTA.vue").default>
export const LazyLandingCast: LazyComponent<typeof import("../components/Landing/Cast.vue").default>
export const LazyLandingCollection: LazyComponent<typeof import("../components/Landing/Collection.vue").default>
export const LazyLandingFeatures: LazyComponent<typeof import("../components/Landing/Features.vue").default>
export const LazyLandingHero: LazyComponent<typeof import("../components/Landing/Hero.vue").default>
export const LazyLandingStoryPath: LazyComponent<typeof import("../components/Landing/LandingStoryPath.vue").default>
export const LazyLandingTestimonials: LazyComponent<typeof import("../components/Landing/LandingTestimonials.vue").default>
export const LazyLandingPage: LazyComponent<typeof import("../components/Landing/Page.vue").default>
export const LazyStoryDetailsChapterPreview: LazyComponent<typeof import("../components/StoryDetails/ChapterPreview.vue").default>
export const LazyStoryDetailsHero: LazyComponent<typeof import("../components/StoryDetails/Hero.vue").default>
export const LazyStoryDetailsSimilarStories: LazyComponent<typeof import("../components/StoryDetails/SimilarStories.vue").default>
export const LazyStoryDetailsSynopsis: LazyComponent<typeof import("../components/StoryDetails/Synopsis.vue").default>
export const LazyStoryReaderContent: LazyComponent<typeof import("../components/StoryReader/Content.vue").default>
export const LazyStoryReaderNavbar: LazyComponent<typeof import("../components/StoryReader/Navbar.vue").default>
export const LazySuccessPg: LazyComponent<typeof import("../components/SuccessPg.vue").default>
export const LazyUtilsFooter: LazyComponent<typeof import("../components/Utils/Footer.vue").default>
export const LazyUtilsNavbar: LazyComponent<typeof import("../components/Utils/Navbar.vue").default>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue").default>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout").default>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only").default>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only").default>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder").default>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link").default>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue").default>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer").default>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtImg>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtPicture>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page").default>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").NoScript>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Link>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Base>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Title>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Meta>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Style>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Head>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Html>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components").Body>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island").default>

export const componentNames: string[]
