import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _773ee2f5 = () => interopDefault(import('../pages/blogs/index.vue' /* webpackChunkName: "pages/blogs/index" */))
const _10d470d6 = () => interopDefault(import('../pages/boutique/index.vue' /* webpackChunkName: "pages/boutique/index" */))
const _7ac80c60 = () => interopDefault(import('../pages/conditions-generales-ventes.vue' /* webpackChunkName: "pages/conditions-generales-ventes" */))
const _76d6cb41 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _081c845c = () => interopDefault(import('../pages/mentions-legales.vue' /* webpackChunkName: "pages/mentions-legales" */))
const _e1e9e6d4 = () => interopDefault(import('../pages/politique-confidentialite.vue' /* webpackChunkName: "pages/politique-confidentialite" */))
const _6f417a66 = () => interopDefault(import('../pages/traiteur/index.vue' /* webpackChunkName: "pages/traiteur/index" */))
const _6f46121c = () => interopDefault(import('../pages/boutique/checkout.vue' /* webpackChunkName: "pages/boutique/checkout" */))
const _758841ad = () => interopDefault(import('../pages/blogs/_slug.vue' /* webpackChunkName: "pages/blogs/_slug" */))
const _7cb77872 = () => interopDefault(import('../pages/cat/_slug.vue' /* webpackChunkName: "pages/cat/_slug" */))
const _0d979e86 = () => interopDefault(import('../pages/categories/_slug.vue' /* webpackChunkName: "pages/categories/_slug" */))
const _bb42959a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blogs",
    component: _773ee2f5,
    name: "blogs"
  }, {
    path: "/boutique",
    component: _10d470d6,
    name: "boutique"
  }, {
    path: "/conditions-generales-ventes",
    component: _7ac80c60,
    name: "conditions-generales-ventes"
  }, {
    path: "/contact",
    component: _76d6cb41,
    name: "contact"
  }, {
    path: "/mentions-legales",
    component: _081c845c,
    name: "mentions-legales"
  }, {
    path: "/politique-confidentialite",
    component: _e1e9e6d4,
    name: "politique-confidentialite"
  }, {
    path: "/traiteur",
    component: _6f417a66,
    name: "traiteur"
  }, {
    path: "/boutique/checkout",
    component: _6f46121c,
    name: "boutique-checkout"
  }, {
    path: "/blogs/:slug",
    component: _758841ad,
    name: "blogs-slug"
  }, {
    path: "/cat/:slug?",
    component: _7cb77872,
    name: "cat-slug"
  }, {
    path: "/categories/:slug?",
    component: _0d979e86,
    name: "categories-slug"
  }, {
    path: "/",
    component: _bb42959a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
