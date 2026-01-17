
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
  'ExploreHeader': typeof import("../../components/ExploreHeader.vue").default
  'ExplorePage': typeof import("../../components/ExplorePage.vue").default
  'ExploreRecommended': typeof import("../../components/ExploreRecommended.vue").default
  'ExploreSearch': typeof import("../../components/ExploreSearch.vue").default
  'ExploreTrending': typeof import("../../components/ExploreTrending.vue").default
  'HelloWorld': typeof import("../../components/HelloWorld.vue").default
  'LandingAbout': typeof import("../../components/LandingAbout.vue").default
  'LandingCTA': typeof import("../../components/LandingCTA.vue").default
  'LandingCast': typeof import("../../components/LandingCast.vue").default
  'LandingCollection': typeof import("../../components/LandingCollection.vue").default
  'LandingFeatures': typeof import("../../components/LandingFeatures.vue").default
  'LandingFooter': typeof import("../../components/LandingFooter.vue").default
  'LandingHero': typeof import("../../components/LandingHero.vue").default
  'LandingNavbar': typeof import("../../components/LandingNavbar.vue").default
  'LandingPage': typeof import("../../components/LandingPage.vue").default
  'LandingStoryPath': typeof import("../../components/LandingStoryPath.vue").default
  'LandingTestimonials': typeof import("../../components/LandingTestimonials.vue").default
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
  'LazyExploreHeader': LazyComponent<typeof import("../../components/ExploreHeader.vue").default>
  'LazyExplorePage': LazyComponent<typeof import("../../components/ExplorePage.vue").default>
  'LazyExploreRecommended': LazyComponent<typeof import("../../components/ExploreRecommended.vue").default>
  'LazyExploreSearch': LazyComponent<typeof import("../../components/ExploreSearch.vue").default>
  'LazyExploreTrending': LazyComponent<typeof import("../../components/ExploreTrending.vue").default>
  'LazyHelloWorld': LazyComponent<typeof import("../../components/HelloWorld.vue").default>
  'LazyLandingAbout': LazyComponent<typeof import("../../components/LandingAbout.vue").default>
  'LazyLandingCTA': LazyComponent<typeof import("../../components/LandingCTA.vue").default>
  'LazyLandingCast': LazyComponent<typeof import("../../components/LandingCast.vue").default>
  'LazyLandingCollection': LazyComponent<typeof import("../../components/LandingCollection.vue").default>
  'LazyLandingFeatures': LazyComponent<typeof import("../../components/LandingFeatures.vue").default>
  'LazyLandingFooter': LazyComponent<typeof import("../../components/LandingFooter.vue").default>
  'LazyLandingHero': LazyComponent<typeof import("../../components/LandingHero.vue").default>
  'LazyLandingNavbar': LazyComponent<typeof import("../../components/LandingNavbar.vue").default>
  'LazyLandingPage': LazyComponent<typeof import("../../components/LandingPage.vue").default>
  'LazyLandingStoryPath': LazyComponent<typeof import("../../components/LandingStoryPath.vue").default>
  'LazyLandingTestimonials': LazyComponent<typeof import("../../components/LandingTestimonials.vue").default>
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
