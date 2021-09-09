import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d3c5d38e = () => interopDefault(import('../pages/blogs/index.vue' /* webpackChunkName: "pages/blogs/index" */))
const _34844712 = () => interopDefault(import('../pages/boutique/index.vue' /* webpackChunkName: "pages/boutique/index" */))
const _ac59b5d8 = () => interopDefault(import('../pages/conditions-generales-ventes.vue' /* webpackChunkName: "pages/conditions-generales-ventes" */))
const _bb8d7ef6 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _19f615e4 = () => interopDefault(import('../pages/mentions-legales.vue' /* webpackChunkName: "pages/mentions-legales" */))
const _34478e4c = () => interopDefault(import('../pages/politique-confidentialite.vue' /* webpackChunkName: "pages/politique-confidentialite" */))
const _da1d5ebc = () => interopDefault(import('../pages/traiteur/index.vue' /* webpackChunkName: "pages/traiteur/index" */))
const _989eb194 = () => interopDefault(import('../pages/boutique/checkout.vue' /* webpackChunkName: "pages/boutique/checkout" */))
const _d733161e = () => interopDefault(import('../pages/blogs/_slug.vue' /* webpackChunkName: "pages/blogs/_slug" */))
const _5951acb6 = () => interopDefault(import('../pages/cat/_slug.vue' /* webpackChunkName: "pages/cat/_slug" */))
const _04aad5c2 = () => interopDefault(import('../pages/categories/_slug.vue' /* webpackChunkName: "pages/categories/_slug" */))
const _03a5ab77 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _d3c5d38e,
    name: "blogs"
  }, {
    path: "/boutique",
    component: _34844712,
    name: "boutique"
  }, {
    path: "/conditions-generales-ventes",
    component: _ac59b5d8,
    name: "conditions-generales-ventes"
  }, {
    path: "/contact",
    component: _bb8d7ef6,
    name: "contact"
  }, {
    path: "/mentions-legales",
    component: _19f615e4,
    name: "mentions-legales"
  }, {
    path: "/politique-confidentialite",
    component: _34478e4c,
    name: "politique-confidentialite"
  }, {
    path: "/traiteur",
    component: _da1d5ebc,
    name: "traiteur"
  }, {
    path: "/boutique/checkout",
    component: _989eb194,
    name: "boutique-checkout"
  }, {
    path: "/blogs/:slug",
    component: _d733161e,
    name: "blogs-slug"
  }, {
    path: "/cat/:slug?",
    component: _5951acb6,
    name: "cat-slug"
  }, {
    path: "/categories/:slug?",
    component: _04aad5c2,
    name: "categories-slug"
  }, {
    path: "/",
    component: _03a5ab77,
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
