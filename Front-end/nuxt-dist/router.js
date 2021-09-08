import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _723f10fd = () => interopDefault(import('../pages/blogs/index.vue' /* webpackChunkName: "pages/blogs/index" */))
const _4ac125ce = () => interopDefault(import('../pages/boutique/index.vue' /* webpackChunkName: "pages/boutique/index" */))
const _6e61d050 = () => interopDefault(import('../pages/conditions-generales-ventes.vue' /* webpackChunkName: "pages/conditions-generales-ventes" */))
const _1221856e = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _6d8514ca = () => interopDefault(import('../pages/mentions-legales.vue' /* webpackChunkName: "pages/mentions-legales" */))
const _f403e6c4 = () => interopDefault(import('../pages/politique-confidentialite.vue' /* webpackChunkName: "pages/politique-confidentialite" */))
const _715ade68 = () => interopDefault(import('../pages/producteurs/index.vue' /* webpackChunkName: "pages/producteurs/index" */))
const _5c3ac39a = () => interopDefault(import('../pages/strapi/index.vue' /* webpackChunkName: "pages/strapi/index" */))
const _ada3a144 = () => interopDefault(import('../pages/traiteur/index.vue' /* webpackChunkName: "pages/traiteur/index" */))
const _7c6386f4 = () => interopDefault(import('../pages/blogs/comment-organiser-vos-reception.vue' /* webpackChunkName: "pages/blogs/comment-organiser-vos-reception" */))
const _ed97020c = () => interopDefault(import('../pages/boutique/checkout.vue' /* webpackChunkName: "pages/boutique/checkout" */))
const _4c58a6d9 = () => interopDefault(import('../pages/producteurs/ferme-ekiola.vue' /* webpackChunkName: "pages/producteurs/ferme-ekiola" */))
const _30465b71 = () => interopDefault(import('../pages/producteurs/ferme-elizaldia.vue' /* webpackChunkName: "pages/producteurs/ferme-elizaldia" */))
const _67022118 = () => interopDefault(import('../pages/producteurs/fromagerie-aldudes.vue' /* webpackChunkName: "pages/producteurs/fromagerie-aldudes" */))
const _1fe17812 = () => interopDefault(import('../pages/producteurs/maison-laborie.vue' /* webpackChunkName: "pages/producteurs/maison-laborie" */))
const _70886fb5 = () => interopDefault(import('../pages/blogs/_slug.vue' /* webpackChunkName: "pages/blogs/_slug" */))
const _587b887a = () => interopDefault(import('../pages/cat/_slug.vue' /* webpackChunkName: "pages/cat/_slug" */))
const _7f2af57e = () => interopDefault(import('../pages/categories/_slug.vue' /* webpackChunkName: "pages/categories/_slug" */))
const _347c093b = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _723f10fd,
    name: "blogs"
  }, {
    path: "/boutique",
    component: _4ac125ce,
    name: "boutique"
  }, {
    path: "/conditions-generales-ventes",
    component: _6e61d050,
    name: "conditions-generales-ventes"
  }, {
    path: "/contact",
    component: _1221856e,
    name: "contact"
  }, {
    path: "/mentions-legales",
    component: _6d8514ca,
    name: "mentions-legales"
  }, {
    path: "/politique-confidentialite",
    component: _f403e6c4,
    name: "politique-confidentialite"
  }, {
    path: "/producteurs",
    component: _715ade68,
    name: "producteurs"
  }, {
    path: "/strapi",
    component: _5c3ac39a,
    name: "strapi"
  }, {
    path: "/traiteur",
    component: _ada3a144,
    name: "traiteur"
  }, {
    path: "/blogs/comment-organiser-vos-reception",
    component: _7c6386f4,
    name: "blogs-comment-organiser-vos-reception"
  }, {
    path: "/boutique/checkout",
    component: _ed97020c,
    name: "boutique-checkout"
  }, {
    path: "/producteurs/ferme-ekiola",
    component: _4c58a6d9,
    name: "producteurs-ferme-ekiola"
  }, {
    path: "/producteurs/ferme-elizaldia",
    component: _30465b71,
    name: "producteurs-ferme-elizaldia"
  }, {
    path: "/producteurs/fromagerie-aldudes",
    component: _67022118,
    name: "producteurs-fromagerie-aldudes"
  }, {
    path: "/producteurs/maison-laborie",
    component: _1fe17812,
    name: "producteurs-maison-laborie"
  }, {
    path: "/blogs/:slug",
    component: _70886fb5,
    name: "blogs-slug"
  }, {
    path: "/cat/:slug?",
    component: _587b887a,
    name: "cat-slug"
  }, {
    path: "/categories/:slug?",
    component: _7f2af57e,
    name: "categories-slug"
  }, {
    path: "/",
    component: _347c093b,
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
