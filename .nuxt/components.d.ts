
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


export const ExploreHeader: typeof import("../components/ExploreHeader.vue").default
export const ExplorePage: typeof import("../components/ExplorePage.vue").default
export const ExploreRecommended: typeof import("../components/ExploreRecommended.vue").default
export const ExploreSearch: typeof import("../components/ExploreSearch.vue").default
export const ExploreTrending: typeof import("../components/ExploreTrending.vue").default
export const HelloWorld: typeof import("../components/HelloWorld.vue").default
export const LandingAbout: typeof import("../components/LandingAbout.vue").default
export const LandingCTA: typeof import("../components/LandingCTA.vue").default
export const LandingCast: typeof import("../components/LandingCast.vue").default
export const LandingCollection: typeof import("../components/LandingCollection.vue").default
export const LandingFeatures: typeof import("../components/LandingFeatures.vue").default
export const LandingFooter: typeof import("../components/LandingFooter.vue").default
export const LandingHero: typeof import("../components/LandingHero.vue").default
export const LandingNavbar: typeof import("../components/LandingNavbar.vue").default
export const LandingPage: typeof import("../components/LandingPage.vue").default
export const LandingStoryPath: typeof import("../components/LandingStoryPath.vue").default
export const LandingTestimonials: typeof import("../components/LandingTestimonials.vue").default
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
export const LazyExploreHeader: LazyComponent<typeof import("../components/ExploreHeader.vue").default>
export const LazyExplorePage: LazyComponent<typeof import("../components/ExplorePage.vue").default>
export const LazyExploreRecommended: LazyComponent<typeof import("../components/ExploreRecommended.vue").default>
export const LazyExploreSearch: LazyComponent<typeof import("../components/ExploreSearch.vue").default>
export const LazyExploreTrending: LazyComponent<typeof import("../components/ExploreTrending.vue").default>
export const LazyHelloWorld: LazyComponent<typeof import("../components/HelloWorld.vue").default>
export const LazyLandingAbout: LazyComponent<typeof import("../components/LandingAbout.vue").default>
export const LazyLandingCTA: LazyComponent<typeof import("../components/LandingCTA.vue").default>
export const LazyLandingCast: LazyComponent<typeof import("../components/LandingCast.vue").default>
export const LazyLandingCollection: LazyComponent<typeof import("../components/LandingCollection.vue").default>
export const LazyLandingFeatures: LazyComponent<typeof import("../components/LandingFeatures.vue").default>
export const LazyLandingFooter: LazyComponent<typeof import("../components/LandingFooter.vue").default>
export const LazyLandingHero: LazyComponent<typeof import("../components/LandingHero.vue").default>
export const LazyLandingNavbar: LazyComponent<typeof import("../components/LandingNavbar.vue").default>
export const LazyLandingPage: LazyComponent<typeof import("../components/LandingPage.vue").default>
export const LazyLandingStoryPath: LazyComponent<typeof import("../components/LandingStoryPath.vue").default>
export const LazyLandingTestimonials: LazyComponent<typeof import("../components/LandingTestimonials.vue").default>
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
