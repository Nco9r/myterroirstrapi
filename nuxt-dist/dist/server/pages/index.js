exports.ids = [10];
exports.modules = {

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/blog/blog.vue?vue&type=template&id=85043342&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"cards"},_vm._l((_vm.blogs),function(blog){return _c('blogCard',{key:blog.id,attrs:{"blog":blog}})}),1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/blog/blog.vue?vue&type=template&id=85043342&scoped=true&

// EXTERNAL MODULE: ./utils/medias.js
var medias = __webpack_require__(81);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/blog/blogCard.vue?vue&type=template&id=0a842bbd&scoped=true&
var blogCardvue_type_template_id_0a842bbd_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"blogCard"},[_vm._ssrNode("<div data-v-0a842bbd>","</div>",[_c('nuxt-link',{key:_vm.blog.id,attrs:{"to":{ name: 'blogs-slug', params: { slug: _vm.blog.slug } }}},[(_vm.blog.image.url)?_c('div',{staticClass:"picture_wrapper"},[_c('img',{attrs:{"src":_vm.getStrapiMedia(_vm.blog.image.url),"alt":""}})]):_vm._e(),_vm._v(" "),_c('p',{staticClass:"tagline"},[_vm._v(_vm._s(_vm.blog.categorie))]),_vm._v(" "),_c('div',{staticClass:"title"},[_c('h5',[_vm._v(_vm._s(_vm.blog.title))])]),_vm._v(" "),_c('div',{staticClass:"datetime"},[_c('p',[_vm._v(_vm._s(_vm.blog.date))])])])],1)])}
var blogCardvue_type_template_id_0a842bbd_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/blog/blogCard.vue?vue&type=template&id=0a842bbd&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blog/blogCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var blogCardvue_type_script_lang_js_ = ({
  props: {
    blog: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    getStrapiMedia: medias["a" /* getStrapiMedia */]
  }
});
// CONCATENATED MODULE: ./components/blog/blogCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_blogCardvue_type_script_lang_js_ = (blogCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/blog/blogCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(93)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_blogCardvue_type_script_lang_js_,
  blogCardvue_type_template_id_0a842bbd_scoped_true_render,
  blogCardvue_type_template_id_0a842bbd_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "0a842bbd",
  "5cf943c2"
  
)

/* harmony default export */ var blogCard = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blog/blog.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//


/* harmony default export */ var blogvue_type_script_lang_js_ = ({
  props: {
    blogs: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getStrapiMedia: medias["a" /* getStrapiMedia */]
  },
  components: {
    blogCard: blogCard
  }
});
// CONCATENATED MODULE: ./components/blog/blog.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_blogvue_type_script_lang_js_ = (blogvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/blog/blog.vue



function blog_injectStyles (context) {
  
  var style0 = __webpack_require__(95)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var blog_component = Object(componentNormalizer["a" /* default */])(
  blog_blogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  blog_injectStyles,
  "85043342",
  "7d1c4a6f"
  
)

/* harmony default export */ var blog = __webpack_exports__["a"] = (blog_component.exports);

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/texture.bcb10a9.png";

/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tache.70ecb64.svg";

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(229);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5ba85d95", content, true, context)
};

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(232);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("7958b06a", content, true, context)
};

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(242);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2bef756a", content, true, context)
};

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(247);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("22d7d4ce", content, true, context)
};

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(249);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2e6c999d", content, true, context)
};

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(251);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6759f5ab", content, true, context)
};

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroHome_vue_vue_type_style_index_0_id_7efb42fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(147);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroHome_vue_vue_type_style_index_0_id_7efb42fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroHome_vue_vue_type_style_index_0_id_7efb42fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroHome_vue_vue_type_style_index_0_id_7efb42fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroHome_vue_vue_type_style_index_0_id_7efb42fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(9);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(103);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".black[data-v-7efb42fa]{color:var(--black)}.card_first[data-v-7efb42fa]{display:flex;align-items:center;flex-flow:column-reverse;position:relative}.block_content[data-v-7efb42fa]{display:flex;flex-flow:column;width:100%;background-color:var(--orange);background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");height:500px;background-size:40%;padding:5px 15px 30px;left:0;margin-top:0;z-index:1}.block_img[data-v-7efb42fa]{width:100%;justify-content:flex-end;display:flex}.block_img img[data-v-7efb42fa]{width:100%;height:300px;-o-object-fit:cover;object-fit:cover}.categorie[data-v-7efb42fa]{text-transform:uppercase;color:var(--black);font-family:bodyBold,sans-serif;margin-bottom:20px;margin-top:50px;font-size:14px}.block_content h2[data-v-7efb42fa]{font-family:title,sans-serif;line-height:40px;font-size:28px}.block_content h2[data-v-7efb42fa],.description[data-v-7efb42fa]{color:var(--white);margin-bottom:30px}.description[data-v-7efb42fa]{font-size:14px;line-height:28px}.datetime[data-v-7efb42fa],.description[data-v-7efb42fa]{font-family:body,sans-serif}.datetime[data-v-7efb42fa]{font-size:12px;margin-bottom:40px}.datetime[data-v-7efb42fa],button[data-v-7efb42fa]{color:var(--white)}button[data-v-7efb42fa]{background-color:var(--black);padding:10px 48px;font-size:14px;cursor:pointer;font-family:bodyBold;border:none}@media screen and (min-width:1024px){.getBlog[data-v-7efb42fa]{max-width:1000px;margin:120px auto 650px}.card_first[data-v-7efb42fa]{display:flex;align-items:center;flex-flow:nowrap;position:relative}.block_content[data-v-7efb42fa]{flex-flow:column;width:60%;background-color:var(--black);height:500px;padding:30px 30px 30px 60px;left:0;top:50px;border-radius:6px;z-index:1}.block_content[data-v-7efb42fa],.block_img[data-v-7efb42fa]{display:flex;position:absolute}.block_img[data-v-7efb42fa]{width:70%;justify-content:flex-end;top:50%;right:0}.block_img img[data-v-7efb42fa]{width:100%;height:600px;-o-object-fit:cover;object-fit:cover;border-radius:6px}.categorie[data-v-7efb42fa]{text-transform:uppercase;color:var(--orange);font-family:bodyBold,sans-serif;margin-bottom:20px;margin-top:50px}.block_content h2[data-v-7efb42fa]{font-family:title,sans-serif;line-height:42px;font-size:32px}.block_content h2[data-v-7efb42fa],.description[data-v-7efb42fa]{width:500px;color:var(--white);margin-bottom:30px}.description[data-v-7efb42fa]{font-size:18px;line-height:32px}.datetime[data-v-7efb42fa],.description[data-v-7efb42fa]{font-family:body,sans-serif}.datetime[data-v-7efb42fa]{font-size:12px;margin-bottom:40px}.datetime[data-v-7efb42fa],button[data-v-7efb42fa]{color:var(--white)}button[data-v-7efb42fa]{background-color:var(--black);padding:10px 48px;font-size:16px;cursor:pointer;font-family:bodyBold;border:none}}@media screen and (min-width:1200px){.getBlog[data-v-7efb42fa]{max-width:1200px;margin:120px auto}.card_first[data-v-7efb42fa]{display:flex;align-items:center;flex-flow:nowrap;position:relative}.block_content[data-v-7efb42fa]{flex-flow:column;width:50%;background-color:var(--orange);height:500px;padding:30px 30px 30px 60px;left:0;top:50px;border-radius:6px;z-index:1}.block_content[data-v-7efb42fa],.block_img[data-v-7efb42fa]{display:flex;position:absolute}.block_img[data-v-7efb42fa]{width:70%;justify-content:flex-end;top:50%;right:0}.block_img img[data-v-7efb42fa]{width:100%;height:600px;-o-object-fit:cover;object-fit:cover;border-radius:6px}.categorie[data-v-7efb42fa]{text-transform:uppercase;color:var(--black);font-family:bodyBold,sans-serif;margin-bottom:20px;margin-top:20px}.block_content h2[data-v-7efb42fa]{font-family:title,sans-serif;width:500px;color:var(--white);line-height:42px;margin-bottom:20px;font-size:32px}.description[data-v-7efb42fa]{font-size:18px;width:500px;line-height:32px;margin-bottom:30px}.datetime[data-v-7efb42fa],.description[data-v-7efb42fa]{font-family:body,sans-serif;color:var(--white)}.datetime[data-v-7efb42fa]{font-size:12px;margin-bottom:40px}button[data-v-7efb42fa]{background-color:var(--black);padding:10px 48px;color:var(--white);font-size:16px;cursor:pointer;font-family:bodyBold;border:none}}@media screen and (min-width:1400px){.getBlog[data-v-7efb42fa]{max-width:1400px;margin:120px auto}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/authentiques.387df78.jpg";

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_637c8f78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(148);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_637c8f78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_637c8f78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_637c8f78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_637c8f78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "strong[data-v-637c8f78]{font-family:bodyBold,sans-serif;color:var(--black)}.about[data-v-637c8f78]{display:flex;flex-flow:column;padding:30px 15px}.about_content h2[data-v-637c8f78]{color:var(--black);font-size:24px;line-height:32px}.about_content hr[data-v-637c8f78]{border:none;width:30px;margin-top:10px;margin-bottom:10px;height:2px;border-radius:10px;background-color:var(--orange)}.about_content p[data-v-637c8f78]{color:var(--Body);font-size:14px;margin-top:20px;line-height:28px}.about_content button[data-v-637c8f78]{margin-top:30px;background-color:var(--orange);padding:12px 48px;color:var(--white);border:none;font-size:14px;font-family:bodyBold;cursor:pointer;transition:all .3s;width:100%;margin-bottom:30px}.about_content button[data-v-637c8f78]:hover{background-color:var(--black)}.about_img[data-v-637c8f78]{display:flex;flex-flow:column;margin-top:20px;position:relative}.about_img img[data-v-637c8f78]{width:100%}@media screen and (min-width:1024px){.about[data-v-637c8f78]{display:flex;flex-flow:row;margin:700px auto 100px;justify-content:space-between;align-items:flex-start;max-width:1000px}.about_content[data-v-637c8f78]{width:40%}.about_content h2[data-v-637c8f78]{width:500px;font-size:32px;line-height:44px}.about_content p[data-v-637c8f78]{font-size:14px;line-height:26px;width:450px}.about_img[data-v-637c8f78]{width:48%;position:relative}.about_img img[data-v-637c8f78]{max-width:100%;height:320px;-o-object-fit:cover;object-fit:cover}.cublic[data-v-637c8f78]{position:absolute;z-index:-1;top:0;bottom:0;right:-44px;width:52%;background-color:var(--orange);transform:translateY(10%)}.about_content button[data-v-637c8f78]{width:200Px;padding:11px 30px}}@media screen and (min-width:1200px){.about_content p[data-v-637c8f78]{width:500px}.about[data-v-637c8f78]{max-width:1200px;margin:700px auto 50px}}@media screen and (min-width:1400px){.about_content p[data-v-637c8f78]{width:500px}.about[data-v-637c8f78]{max-width:1400px;margin:750px auto 50px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/so.4c72a54.png";

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/decat.9fbca64.png";

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bastide.46c7565.png";

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ricard.ed4cf17.png";

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/coq.5eba857.png";

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/club.591314f.png";

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/trip.c6eb306.png";

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/follow.6efada0.png";

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_style_index_0_id_7d2abd50_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(149);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_style_index_0_id_7d2abd50_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_style_index_0_id_7d2abd50_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_style_index_0_id_7d2abd50_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_style_index_0_id_7d2abd50_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".clients[data-v-7d2abd50]{padding:30px 15px}.title_section h2[data-v-7d2abd50]{font-size:24px;line-height:32px}.title_section h2[data-v-7d2abd50],.title_section p[data-v-7d2abd50]{color:var(--black);text-align:center}.title_section p[data-v-7d2abd50]{font-size:14px}hr[data-v-7d2abd50]{border:none;width:30px;display:flex;margin:20px auto;height:2px;border-radius:10px;background-color:var(--orange)}.grid_logo[data-v-7d2abd50]{display:grid;grid-template-columns:repeat(2,1fr);grid-gap:60px 30px;margin-top:40px;align-items:center;justify-items:center;padding:0 50px 40px}.grid_logo img[data-v-7d2abd50]{width:80px}@media screen and (min-width:1024px){.clients[data-v-7d2abd50]{padding:10px 100px 80px;max-width:1250px;margin:auto}.title_section h2[data-v-7d2abd50]{font-size:32px;line-height:52px}.grid_logo[data-v-7d2abd50]{grid-template-columns:repeat(4,1fr);justify-items:center;align-items:center}.grid_logo img[data-v-7d2abd50]{width:120px}.title_section[data-v-7d2abd50]{text-align:center}hr[data-v-7d2abd50]{display:flex;margin:20px auto}.follow[data-v-7d2abd50]{width:70px!important}}@media screen and (min-width:1300px){.clients[data-v-7d2abd50]{max-width:1500px;margin:auto}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/commande.39e296a.svg";

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/valideC.c6124c9.svg";

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bag.abe06a2.svg";

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Commande_vue_vue_type_style_index_0_id_55b8fe7c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(150);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Commande_vue_vue_type_style_index_0_id_55b8fe7c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Commande_vue_vue_type_style_index_0_id_55b8fe7c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Commande_vue_vue_type_style_index_0_id_55b8fe7c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Commande_vue_vue_type_style_index_0_id_55b8fe7c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(9);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(114);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(19);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(103);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "a[data-v-55b8fe7c]{text-decoration:none}section[data-v-55b8fe7c]{background-color:var(--gray);width:100%;border-top:1px solid var(--gray-light);border-bottom:1px solid var(--gray-light);margin-top:20px;padding:20px 15px}.commande_title[data-v-55b8fe7c]{display:flex;flex-flow:column}.commande_title h2[data-v-55b8fe7c]{color:var(--black);font-size:24px;line-height:32px;margin-bottom:20px;margin-top:20px}.commande_title p[data-v-55b8fe7c]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:100%;height:50px;font-size:18px;display:flex;justify-content:center;align-items:center;transform:rotate(-3deg);font-family:bodyBold,sans-serif;color:var(--white);background-repeat:no-repeat}hr[data-v-55b8fe7c]{border:none;width:30px;margin-top:10px;margin-bottom:10px;height:2px;border-radius:10px;background-color:var(--orange)}.commande_wrapper[data-v-55b8fe7c]{background-color:var(--beige);width:100%;margin-top:40px;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");background-repeat:repeat;background-size:80%;border-radius:1px;padding-bottom:40px;margin-bottom:40px}.commande_wrapper[data-v-55b8fe7c],.items_commande[data-v-55b8fe7c]{display:flex;flex-flow:column}.items[data-v-55b8fe7c]{text-align:center;margin-bottom:50px}.items img[data-v-55b8fe7c]{width:200px;margin-bottom:-40px}.items p[data-v-55b8fe7c]:nth-child(2){text-transform:uppercase;font-family:bodyBold}.items p[data-v-55b8fe7c]:nth-child(3){font-family:bodyBold;color:var(--white);width:200px;display:flex;margin:auto}.orange[data-v-55b8fe7c]{color:var(--orange)}.commande_wrapper button[data-v-55b8fe7c]{background-color:var(--orange);padding:10px 78px;display:flex;cursor:pointer;margin:0 auto 20px;color:var(--white);font-size:14px;font-family:bodyBold;border:none;transition:all .3s}.commande_wrapper button[data-v-55b8fe7c]:hover{background-color:var(--black)}@media screen and (min-width:1024px){section[data-v-55b8fe7c]{padding-bottom:100px}.commande_title[data-v-55b8fe7c]{display:flex;max-width:1100px;margin:50px auto;flex-flow:column;text-align:center;justify-content:flex-start}.commande_title h2[data-v-55b8fe7c]{width:600px;margin:auto;font-size:32px;line-height:46px}.commande_title p[data-v-55b8fe7c]{font-size:28px;background-size:100%;width:400px;margin:20px auto}.commande_wrapper[data-v-55b8fe7c]{background-color:var(--beige);width:100%;max-width:1100px;display:flex;margin:150px auto auto;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");background-repeat:repeat;background-size:40%;border-radius:4px;padding:0 90px 40px}.items_commande[data-v-55b8fe7c]{display:flex;flex-flow:row;justify-content:space-between;margin-top:-100px}.items[data-v-55b8fe7c]{width:30%}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_traiteurHome_vue_vue_type_style_index_0_id_62a26bb8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(151);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_traiteurHome_vue_vue_type_style_index_0_id_62a26bb8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_traiteurHome_vue_vue_type_style_index_0_id_62a26bb8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_traiteurHome_vue_vue_type_style_index_0_id_62a26bb8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_traiteurHome_vue_vue_type_style_index_0_id_62a26bb8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "strong[data-v-62a26bb8]{font-family:bodyBold,sans-serif}.about[data-v-62a26bb8]{display:flex;flex-flow:column;padding:50px 15px}.about_content h2[data-v-62a26bb8]{color:var(--black);font-size:24px;line-height:34px}.about_content hr[data-v-62a26bb8]{border:none;width:30px;margin:10px 0;height:2px;border-radius:10px;background-color:var(--orange)}.about_content p[data-v-62a26bb8]{color:var(--black);font-size:14px;margin-top:20px;line-height:26px;margin-bottom:10px}.about_content button[data-v-62a26bb8]{margin-top:20px;background-color:var(--orange);color:var(--white);border:none}.about_content button[data-v-62a26bb8],.overbutton[data-v-62a26bb8]{padding:10px 48px;font-size:14px;width:100%;margin-bottom:30px;font-family:bodyBold;cursor:pointer;transition:all .3s}.overbutton[data-v-62a26bb8]{margin-top:10px!important;background-color:transparent!important;color:var(--orange)!important;border:1px solid var(--orange)!important;border:none}.about_content button[data-v-62a26bb8]:hover{background-color:var(--black)}.about_img[data-v-62a26bb8]{display:flex;flex-flow:column;margin-top:20px}.about_img img[data-v-62a26bb8]{width:100%}@media screen and (min-width:1024px){.about[data-v-62a26bb8]{display:flex;flex-flow:row-reverse;margin:70px auto;justify-content:space-between;align-items:flex-start;max-width:1188px}.about_content[data-v-62a26bb8]{width:40%}.about_content h2[data-v-62a26bb8]{width:500px;font-size:32px;line-height:44px}.about_content p[data-v-62a26bb8]{font-size:14px;line-height:26px;width:450px}.about_img[data-v-62a26bb8]{width:48%;position:relative}.about_img img[data-v-62a26bb8]{max-width:100%;height:320px;-o-object-fit:cover;object-fit:cover}.cublic[data-v-62a26bb8]{position:absolute;z-index:-1;top:0;bottom:0;left:-44px;width:52%;background-color:var(--orange);transform:translateY(10%)}.about_content button[data-v-62a26bb8]{width:200Px;padding:11px 30px}}@media screen and (min-width:1200px){.about_content p[data-v-62a26bb8]{width:500px}.about[data-v-62a26bb8]{max-width:1200px;margin:50px auto}}@media screen and (min-width:1400px){.about_content p[data-v-62a26bb8]{width:500px}.about[data-v-62a26bb8]{max-width:1400px;margin:50px auto}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(152);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".home-enter-active,.home-leave-active{transition:opacity .5s}.home-enter,.home-leave-active{opacity:0}.actus{display:flex;flex-flow:row;justify-content:space-between;align-items:center;padding:10px 20px}.actus p{font-size:12px;color:var(--Body)}@media screen and (min-width:1200px){.actus{max-width:1200px;margin:20px auto;padding:0}.actus p{font-size:14px;color:var(--Body)}}@media screen and (min-width:1400px){.actus{max-width:1400px;margin:20px auto 60px}.actus h2{font-size:32px}.actus p{font-size:14px;color:var(--Body)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=2fdee0e3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('HeroHome'),_vm._ssrNode(" "),_c('About'),_vm._ssrNode(" "),_c('Commande'),_vm._ssrNode(" "),_c('traiteurHome'),_vm._ssrNode(" "),_c('Clients'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"actus\">","</div>",[_vm._ssrNode("<h2>Nos actus</h2> "),_c('nuxt-link',{attrs:{"to":"/blogs"}},[_c('p',[_vm._v("Tout voir")])])],2),_vm._ssrNode(" "),_c('blog',{attrs:{"blogs":_vm.blogs}}),_vm._ssrNode(" "),_c('Newsletter')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=2fdee0e3&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/features/HeroHome.vue?vue&type=template&id=7efb42fa&scoped=true&
var HeroHomevue_type_template_id_7efb42fa_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"getBlog"},[_vm._ssrNode("<div class=\"card_first\" data-v-7efb42fa>","</div>",[_vm._ssrNode("<div class=\"block_content\" data-v-7efb42fa>","</div>",[_vm._ssrNode("<div class=\"title_blog\" data-v-7efb42fa>","</div>",[_vm._ssrNode("<p class=\"categorie\" data-v-7efb42fa>My Terroir</p> <h2 data-v-7efb42fa>Le spécialiste des produits de <span class=\"black\" data-v-7efb42fa>Terroir</span></h2> <p class=\"description\" data-v-7efb42fa>\n          Depuis 2016, My Terroir s’est spécialisé dans la sélection et la\n          livraison à domicile de produits de terroir , fromages et\n          charcuteries de qualités. Tous nos produits sont choisis\n          minutieusement auprès d’artisans.\n        </p> "),_c('nuxt-link',{attrs:{"to":"/boutique"}},[_c('button',[_vm._v("Boutique")])])],2)]),_vm._ssrNode(" <div class=\"block_img\" data-v-7efb42fa><img"+(_vm._ssrAttr("src",__webpack_require__(82)))+" alt data-v-7efb42fa></div>")],2)])}
var HeroHomevue_type_template_id_7efb42fa_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/features/HeroHome.vue?vue&type=template&id=7efb42fa&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/features/HeroHome.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var HeroHomevue_type_script_lang_js_ = ({
  name: "HeroBoutique",

  data() {
    return {
      slickOptions: {
        dots: false,
        arrows: false,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0,
        infinite: true,
        speed: 700,
        draggable: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "cubic-bezier(.945,0,0,1)"
      }
    };
  },

  methods: {
    Prev() {
      this.$refs.carousel.prev();
    },

    Next() {
      this.$refs.carousel.next();
    }

  }
});
// CONCATENATED MODULE: ./components/features/HeroHome.vue?vue&type=script&lang=js&
 /* harmony default export */ var features_HeroHomevue_type_script_lang_js_ = (HeroHomevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/features/HeroHome.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(228)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  features_HeroHomevue_type_script_lang_js_,
  HeroHomevue_type_template_id_7efb42fa_scoped_true_render,
  HeroHomevue_type_template_id_7efb42fa_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "7efb42fa",
  "12c4602b"
  
)

/* harmony default export */ var HeroHome = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/features/About.vue?vue&type=template&id=637c8f78&scoped=true&
var Aboutvue_type_template_id_637c8f78_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"about"},[_vm._ssrNode("<div class=\"about_content\" data-v-637c8f78>","</div>",[_vm._ssrNode("<h2 data-v-637c8f78>dénicheur de <span data-v-637c8f78>produits</span> authentiques.</h2> <hr data-v-637c8f78> <p data-v-637c8f78>\n      Notre secret : de bons <strong data-v-637c8f78>produits</strong> achetés directement au <strong data-v-637c8f78>producteur</strong>, une\n      équipe <strong data-v-637c8f78>passionnée</strong>, motivée et quelques bons <strong data-v-637c8f78>livres</strong> de grand-mères. Bon\n      on avoue : il nous aura fallu 5 ans, <strong data-v-637c8f78>beaucoup de travail</strong>, de nombreux\n      <strong data-v-637c8f78>voyages</strong> et autant de rencontres pour pouvoir vous proposer en toute\n      humilité notre <strong data-v-637c8f78>expertise</strong> en la matière. Pourquoi chercher compliqué\n      quand nous pouvons vous <strong data-v-637c8f78>régaler en toute simplicité!</strong></p> "),_c('nuxt-link',{attrs:{"to":"/boutique"}},[_c('button',[_vm._v("\n      Boutique\n    ")])])],2),_vm._ssrNode(" <div class=\"about_img\" data-v-637c8f78><img"+(_vm._ssrAttr("src",__webpack_require__(230)))+" alt=\"image de produits\" data-v-637c8f78> <div class=\"cublic\" data-v-637c8f78></div></div>")],2)}
var Aboutvue_type_template_id_637c8f78_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/features/About.vue?vue&type=template&id=637c8f78&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/features/About.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Aboutvue_type_script_lang_js_ = ({
  name: 'About'
});
// CONCATENATED MODULE: ./components/features/About.vue?vue&type=script&lang=js&
 /* harmony default export */ var features_Aboutvue_type_script_lang_js_ = (Aboutvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/features/About.vue



function About_injectStyles (context) {
  
  var style0 = __webpack_require__(231)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var About_component = Object(componentNormalizer["a" /* default */])(
  features_Aboutvue_type_script_lang_js_,
  Aboutvue_type_template_id_637c8f78_scoped_true_render,
  Aboutvue_type_template_id_637c8f78_scoped_true_staticRenderFns,
  false,
  About_injectStyles,
  "637c8f78",
  "deda306a"
  
)

/* harmony default export */ var About = (About_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/features/Clients.vue?vue&type=template&id=7d2abd50&scoped=true&
var Clientsvue_type_template_id_7d2abd50_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"clients"},[_vm._ssrNode("<div class=\"title_section\" data-v-7d2abd50><h2 data-v-7d2abd50>Ils nous font confiance</h2> <p data-v-7d2abd50>et nous les remercions</p> <hr data-v-7d2abd50></div> <div class=\"grid_logo\" data-v-7d2abd50><img"+(_vm._ssrAttr("src",__webpack_require__(233)))+" alt data-v-7d2abd50> <img"+(_vm._ssrAttr("src",__webpack_require__(234)))+" alt data-v-7d2abd50> <img"+(_vm._ssrAttr("src",__webpack_require__(235)))+" alt data-v-7d2abd50> <img"+(_vm._ssrAttr("src",__webpack_require__(236)))+" alt class=\"ricard\" data-v-7d2abd50> <img"+(_vm._ssrAttr("src",__webpack_require__(237)))+" alt data-v-7d2abd50> <img"+(_vm._ssrAttr("src",__webpack_require__(238)))+" alt data-v-7d2abd50> <img"+(_vm._ssrAttr("src",__webpack_require__(239)))+" alt data-v-7d2abd50> <img"+(_vm._ssrAttr("src",__webpack_require__(240)))+" alt class=\"follow\" data-v-7d2abd50></div>")])}
var Clientsvue_type_template_id_7d2abd50_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/features/Clients.vue?vue&type=template&id=7d2abd50&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/features/Clients.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Clientsvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/features/Clients.vue?vue&type=script&lang=js&
 /* harmony default export */ var features_Clientsvue_type_script_lang_js_ = (Clientsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/features/Clients.vue



function Clients_injectStyles (context) {
  
  var style0 = __webpack_require__(241)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Clients_component = Object(componentNormalizer["a" /* default */])(
  features_Clientsvue_type_script_lang_js_,
  Clientsvue_type_template_id_7d2abd50_scoped_true_render,
  Clientsvue_type_template_id_7d2abd50_scoped_true_staticRenderFns,
  false,
  Clients_injectStyles,
  "7d2abd50",
  "a393b974"
  
)

/* harmony default export */ var Clients = (Clients_component.exports);
// EXTERNAL MODULE: ./components/blog/blog.vue + 9 modules
var blog = __webpack_require__(100);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/features/Commande.vue?vue&type=template&id=55b8fe7c&scoped=true&
var Commandevue_type_template_id_55b8fe7c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"commande"},[_vm._ssrNode("<div class=\"commande_title\" data-v-55b8fe7c><h2 data-v-55b8fe7c>Commandez nos produits en toute simplicité</h2> <p data-v-55b8fe7c>Un clic et c'est prêt</p></div> "),_vm._ssrNode("<div class=\"commande_wrapper\" data-v-55b8fe7c>","</div>",[_vm._ssrNode("<div class=\"items_commande\" data-v-55b8fe7c><div class=\"items\" data-v-55b8fe7c><img"+(_vm._ssrAttr("src",__webpack_require__(243)))+" alt data-v-55b8fe7c> <p data-v-55b8fe7c><span class=\"orange\" data-v-55b8fe7c>#1.</span> Passez commande</p> <p data-v-55b8fe7c>Sur notre boutique en ligne</p></div> <div class=\"items\" data-v-55b8fe7c><img"+(_vm._ssrAttr("src",__webpack_require__(244)))+" alt data-v-55b8fe7c> <p data-v-55b8fe7c><span class=\"orange\" data-v-55b8fe7c>#2.</span> Confirmation</p> <p data-v-55b8fe7c>Recevez la confirmation par mail</p></div> <div class=\"items\" data-v-55b8fe7c><img"+(_vm._ssrAttr("src",__webpack_require__(245)))+" alt data-v-55b8fe7c> <p data-v-55b8fe7c><span class=\"orange\" data-v-55b8fe7c>#3.</span> Livraison</p> <p data-v-55b8fe7c>Retirez ou faites vous livrer la commande</p></div></div> "),_c('nuxt-link',{attrs:{"to":"/boutique"}},[_c('button',[_vm._v("Boutique")])])],2)],2)}
var Commandevue_type_template_id_55b8fe7c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/features/Commande.vue?vue&type=template&id=55b8fe7c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/features/Commande.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Commandevue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/features/Commande.vue?vue&type=script&lang=js&
 /* harmony default export */ var features_Commandevue_type_script_lang_js_ = (Commandevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/features/Commande.vue



function Commande_injectStyles (context) {
  
  var style0 = __webpack_require__(246)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Commande_component = Object(componentNormalizer["a" /* default */])(
  features_Commandevue_type_script_lang_js_,
  Commandevue_type_template_id_55b8fe7c_scoped_true_render,
  Commandevue_type_template_id_55b8fe7c_scoped_true_staticRenderFns,
  false,
  Commande_injectStyles,
  "55b8fe7c",
  "a002d3a8"
  
)

/* harmony default export */ var Commande = (Commande_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/features/traiteurHome.vue?vue&type=template&id=62a26bb8&scoped=true&
var traiteurHomevue_type_template_id_62a26bb8_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"about"},[_vm._ssrNode("<div class=\"about_content\" data-v-62a26bb8>","</div>",[_vm._ssrNode("<h2 data-v-62a26bb8>Le service traiteur de my terroir</h2> <hr data-v-62a26bb8> <p data-v-62a26bb8>\n      Cassez les <strong data-v-62a26bb8>codes</strong>, choisissez un\n      <strong data-v-62a26bb8>traiteur</strong> sur <strong data-v-62a26bb8>Bordeaux</strong> pas comme les\n      autres qui vous propose une sélection de <strong data-v-62a26bb8>produits</strong> de\n      <strong data-v-62a26bb8>qualité</strong> dénichée chez des\n      <strong data-v-62a26bb8>producteurs</strong> artisanaux en France, Espagne et en Italie.\n      Vous <strong data-v-62a26bb8>organisez</strong> votre mariage, un anniversaire ou\n      simplement des retrouvailles entre copains.\n      <strong data-v-62a26bb8>Choisissez</strong> avec nous les produits qui s’accorderont au\n      mieux avec votre <strong data-v-62a26bb8>événement</strong>. Nous pouvons nous occuper\n      des <strong data-v-62a26bb8>services</strong> complémentaires comme la vaisselle ou le\n      mobilier.\n    </p> "),_c('nuxt-link',{attrs:{"to":"/traiteur"}},[_c('button',[_vm._v("\n        Nos prestations\n      ")])])],2),_vm._ssrNode(" <div class=\"about_img\" data-v-62a26bb8><img"+(_vm._ssrAttr("src",__webpack_require__(90)))+" alt=\"image de produits\" data-v-62a26bb8> <div class=\"cublic\" data-v-62a26bb8></div></div>")],2)}
var traiteurHomevue_type_template_id_62a26bb8_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/features/traiteurHome.vue?vue&type=template&id=62a26bb8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/features/traiteurHome.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var traiteurHomevue_type_script_lang_js_ = ({
  name: 'About'
});
// CONCATENATED MODULE: ./components/features/traiteurHome.vue?vue&type=script&lang=js&
 /* harmony default export */ var features_traiteurHomevue_type_script_lang_js_ = (traiteurHomevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/features/traiteurHome.vue



function traiteurHome_injectStyles (context) {
  
  var style0 = __webpack_require__(248)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var traiteurHome_component = Object(componentNormalizer["a" /* default */])(
  features_traiteurHomevue_type_script_lang_js_,
  traiteurHomevue_type_template_id_62a26bb8_scoped_true_render,
  traiteurHomevue_type_template_id_62a26bb8_scoped_true_staticRenderFns,
  false,
  traiteurHome_injectStyles,
  "62a26bb8",
  "5a846bf6"
  
)

/* harmony default export */ var traiteurHome = (traiteurHome_component.exports);
// EXTERNAL MODULE: ./components/default/Newsletter.vue + 4 modules
var Newsletter = __webpack_require__(80);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  async asyncData({
    $strapi
  }) {
    return {
      blogs: await $strapi.find('blogs?_limit=3')
    };
  },

  components: {
    HeroHome: HeroHome,
    About: About,
    Commande: Commande,
    traiteurHome: traiteurHome,
    blog: blog["a" /* default */],
    Clients: Clients,
    Newsletter: Newsletter["a" /* default */]
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/index.vue



function pages_injectStyles (context) {
  
  var style0 = __webpack_require__(250)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var pages_component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  pages_injectStyles,
  null,
  "e0aadfc4"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_component.exports);

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(79);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5228c78e", content, true, context)
};

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/illus.154ab7a.png";

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(9);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(19);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Newsletter{background-color:var(--orange);background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:70%;background-repeat:repeat;text-align:center}.content_newsletter{padding:50px 15px 20px}.loading{pointer-events:none;opacity:.5}.content_newsletter h3{color:var(--white);font-size:28px;line-height:40px}.goodNews{background-color:#ceffce;color:green}.error,.goodNews{width:300px;padding:10px 15px;margin:20px auto}.error{background-color:#ffcece;color:maroon}.content_newsletter p{color:var(--white);font-size:14px;line-height:26px;padding:0 20px}.cta_newsletter input{border:none;background-color:var(--white);padding:14px 18px;font-family:bodyBold,sans-serif;outline:none;border-radius:0}.cta_newsletter input::-moz-placeholder{font-family:bodyBold,sans-serif;opacity:.5}.cta_newsletter input:-ms-input-placeholder{font-family:bodyBold,sans-serif;opacity:.5}.cta_newsletter input::placeholder{font-family:bodyBold,sans-serif;opacity:.5}.cta_newsletter button{border:none;background-color:var(--black);padding:14px 18px;cursor:pointer;color:var(--white);outline:none;border-radius:0;font-family:bodyBold,sans-serif}.illus{margin-left:-100px;margin-top:40px;overflow-x:hidden}@media screen and (min-width:1024px){.Newsletter{background-color:var(--orange);background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:30%;background-repeat:repeat;text-align:center}.cta_newsletter input{width:300px}.content_newsletter h3{color:var(--white);font-size:42px;line-height:56px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/default/Newsletter.vue?vue&type=template&id=d40fe5be&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"Newsletter"},[_vm._ssrNode("<div class=\"content_newsletter\"><h3>Inscrivez vous à la Newsletter</h3> <p>Et recevez toutes nos actus et nos nouvelles offres.</p></div> <form><div class=\"cta_newsletter\"><input required=\"required\" type=\"text\" placeholder=\"contact@my-terroir.fr\""+(_vm._ssrAttr("value",(_vm.form.email)))+"> "+((_vm.state)?("<button>Soumettre</button>"):"<!---->")+" "+((_vm.loading)?("<button class=\"loading\">En cours</button>"):"<!---->")+"</div> "+((_vm.goodNews)?("<p class=\"goodNews\">\n      Vous avez été enregistré à notre newsletter !\n    </p>"):"<!---->")+" "+((_vm.error)?("<p class=\"error\">\n      Oups, veuillez ressayer ultérieurement ou contacter le support !\n    </p>"):"<!---->")+"</form> <div class=\"illus\"><img"+(_vm._ssrAttr("src",__webpack_require__(77)))+" alt></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/default/Newsletter.vue?vue&type=template&id=d40fe5be&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/default/Newsletter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Newslettervue_type_script_lang_js_ = ({
  data() {
    return {
      form: {
        email: ''
      },
      loading: false,
      state: true,
      goodNews: false,
      error: false
    };
  },

  methods: {
    subscribe(e) {
      e.preventDefault();
      console.log({ ...this.form
      });
      this.loading = true, this.state = false;
      this.$axios.post('https://apimyterroir.rouxnicolas.fr/subscribe', { ...this.form
      }).then(res => (this.form = '', this.loading = false, this.state = true, this.goodNews = true)).catch(error => {
        ;
        this.error = true, this.form = '', this.loading = false, this.state = true;
      });
    }

  }
});
// CONCATENATED MODULE: ./components/default/Newsletter.vue?vue&type=script&lang=js&
 /* harmony default export */ var default_Newslettervue_type_script_lang_js_ = (Newslettervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/default/Newsletter.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(78)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  default_Newslettervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4a5d17d2"
  
)

/* harmony default export */ var Newsletter = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getStrapiMedia; });
function getStrapiMedia(url) {
  // Check if URL is a local path
  if (url.startsWith("/")) {
    // Prepend Strapi address
    return `${"http://localhost:7878"}${url}`;
  } // Otherwise return full URL


  return url;
}

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/brasero.2e216c2.jpg";

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(94);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("a1c728b4", content, true, context)
};

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(96);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("7a8fce46", content, true, context)
};

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/traiteur.dff2f97.jpg";

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_blogCard_vue_vue_type_style_index_0_id_0a842bbd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_blogCard_vue_vue_type_style_index_0_id_0a842bbd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_blogCard_vue_vue_type_style_index_0_id_0a842bbd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_blogCard_vue_vue_type_style_index_0_id_0a842bbd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_blogCard_vue_vue_type_style_index_0_id_0a842bbd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "a[data-v-0a842bbd]{text-decoration:none}.blogCard[data-v-0a842bbd]{width:100%;margin-bottom:45px;padding:0 15Px}.picture_wrapper[data-v-0a842bbd]{position:relative}.picture_wrapper[data-v-0a842bbd]:before{content:\"\";position:absolute;z-index:2;bottom:4px;left:0;right:0;height:0;background-color:var(--orange);transition:height .2s}.picture_wrapper img[data-v-0a842bbd]{height:224px;width:100%;border-radius:4px;-o-object-fit:cover;object-fit:cover}.tagline[data-v-0a842bbd]{margin:16px 0 3px;font-family:bodyBold;font-size:12px;text-transform:uppercase;color:var(--orange);line-height:160%}.tagline[data-v-0a842bbd]:hover{text-decoration:underline}.title[data-v-0a842bbd]{font-weight:600;font-size:20px;line-height:23px}.title h5[data-v-0a842bbd]{font-weight:600;font-family:bodyBold,sans-serif;font-size:16px;color:var(--black);line-height:24px}.title h5[data-v-0a842bbd]:hover{text-decoration:underline}.datetime p[data-v-0a842bbd]{margin-top:20px;color:var(--Body);font-size:13px;font-family:body}@media screen and (min-width:1024px){.blogCard[data-v-0a842bbd]{width:25%}.title h5[data-v-0a842bbd]{font-size:20px;line-height:32px}}@media screen and (min-width:1200px){.blogCard[data-v-0a842bbd]{width:32.3%}.picture_wrapper img[data-v-0a842bbd]{height:250px;width:100%;-o-object-fit:cover;object-fit:cover}.title h5[data-v-0a842bbd]{height:70px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_style_index_0_id_85043342_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_style_index_0_id_85043342_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_style_index_0_id_85043342_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_style_index_0_id_85043342_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_blog_vue_vue_type_style_index_0_id_85043342_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "a[data-v-85043342]{text-decoration:none}.cards[data-v-85043342]{display:flex;flex-flow:row wrap;align-items:flex-start;justify-content:flex-start}@media screen and (min-width:1024px){.cards[data-v-85043342]{max-width:850px;margin:20px auto}}@media screen and (min-width:1200px){.cards[data-v-85043342]{max-width:1200px;margin:20px auto;justify-content:space-between}}@media screen and (min-width:1400px){.cards[data-v-85043342]{max-width:1400px;margin:20px auto;justify-content:space-between}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map