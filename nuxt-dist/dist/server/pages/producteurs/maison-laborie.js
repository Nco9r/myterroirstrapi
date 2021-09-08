exports.ids = [17];
exports.modules = {

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(215);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("260f4b43", content, true, context)
};

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/photo.a428562.jpeg";

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_maison_laborie_vue_vue_type_style_index_0_id_7a985190_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(142);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_maison_laborie_vue_vue_type_style_index_0_id_7a985190_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_maison_laborie_vue_vue_type_style_index_0_id_7a985190_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_maison_laborie_vue_vue_type_style_index_0_id_7a985190_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_maison_laborie_vue_vue_type_style_index_0_id_7a985190_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".background_img img[data-v-7a985190]{width:100%;height:300px;-o-object-fit:cover;object-fit:cover}.img_producteurs[data-v-7a985190]{display:flex;width:100%;margin:-90px auto 10px}.img_producteurs img[data-v-7a985190]{width:150px;border:4px solid var(--white);display:flex;margin:auto;-o-object-fit:cover;object-fit:cover;height:150px;border-radius:50%}.title_producteurs[data-v-7a985190]{text-align:center;margin-top:20px}.localisation p img[data-v-7a985190]{width:15px;height:15px}.localisation[data-v-7a985190]{width:300px;margin:10px auto}.localisation p[data-v-7a985190]{background-color:var(--gray);padding:10px;font-size:14px;color:var(--black);border-radius:10px;font-family:body,sans-serif}.fiche_producteurs[data-v-7a985190]{background-color:var(--black);flex-flow:column;width:95%;border-radius:4px;display:flex;padding:0 20px;margin:20px auto}.user[data-v-7a985190]{display:flex;align-items:center;justify-content:flex-start;margin-bottom:20px;margin-top:20px}.user img[data-v-7a985190]{width:20px;margin-right:30px}.user p[data-v-7a985190]{color:var(--orange);font-size:14px;font-family:bodyBold,sans-serif}hr[data-v-7a985190]{border:none;width:20px;height:1px;background-color:var(--orange);opacity:1}.content[data-v-7a985190]{padding:0 15px}.content h3[data-v-7a985190]{font-size:18px;font-family:bodyBold,sans-serif}.content h3[data-v-7a985190],.content p[data-v-7a985190]{color:var(--black);margin-bottom:10px}.content p[data-v-7a985190]{font-size:14px;font-family:body,sans-serif;line-height:26px}.cta_fiche[data-v-7a985190]{margin-bottom:20px}.cta_fiche a[data-v-7a985190]{padding:0 15px 50px;color:var(--orange);font-family:bodyBold;font-size:14px;text-decoration:none}@media screen and (min-width:1024px){.block[data-v-7a985190]{display:flex;flex-flow:row;align-items:flex-end;justify-content:center;max-width:900px;margin:auto auto 100px}.block_right[data-v-7a985190]{margin-left:100px}}@media screen and (min-width:1300px){.block[data-v-7a985190]{max-width:1100px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/producteurs/maison-laborie.vue?vue&type=template&id=7a985190&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<section class=\"content_producteurs\" data-v-7a985190>","</section>",[_vm._ssrNode("<div class=\"background_img\" data-v-7a985190><img"+(_vm._ssrAttr("src",__webpack_require__(99)))+" alt data-v-7a985190></div> "),_vm._ssrNode("<div class=\"block\" data-v-7a985190>","</div>",[_vm._ssrNode("<div class=\"block_left\" data-v-7a985190><div class=\"img_producteurs\" data-v-7a985190><img"+(_vm._ssrAttr("src",__webpack_require__(213)))+" alt data-v-7a985190></div> <div class=\"title_producteurs\" data-v-7a985190><h3 data-v-7a985190>La maison laborie</h3> <div class=\"localisation\" data-v-7a985190><p data-v-7a985190><img"+(_vm._ssrAttr("src",__webpack_require__(87)))+" alt data-v-7a985190> Catégorie :\n              <strong data-v-7a985190>Viandes</strong></p></div></div> <div class=\"fiche_producteurs\" data-v-7a985190><div class=\"user\" data-v-7a985190><img"+(_vm._ssrAttr("src",__webpack_require__(88)))+" alt data-v-7a985190> <p data-v-7a985190>Laborie &amp; fils</p></div> <hr data-v-7a985190> <div class=\"user\" data-v-7a985190><img"+(_vm._ssrAttr("src",__webpack_require__(89)))+" alt data-v-7a985190> <p data-v-7a985190>15290 Parlan, France</p></div></div></div> "),_vm._ssrNode("<div class=\"block_right\" data-v-7a985190>","</div>",[_vm._ssrNode("<div class=\"content\" data-v-7a985190><h3 data-v-7a985190>Le producteur en quelques mots</h3> <p data-v-7a985190>\n            Implantée à Parlan, petit village du Cantal, la Maison Laborie est\n            une entreprise familiale fondée en 1932 et spécialisée dans la\n            fabrication de salaisons de qualité (Saucissons &amp; Saucisses\n            sèches, Jambons, Poitrines mais également produits cuits et\n            conserves). Afin de se démarquer des produits standards du marché,\n            la Maison Laborie élève ses propres cochons fermiers, en plein\n            air, pendant 10 à 12 mois. Un abattage tardif combiné à ces\n            conditions d’élevages hors norme permet d’obtenir une viande\n            persillée et goûteuse. Distinguée depuis 2014 « Producteur-artisan\n            de qualité » par le Collège Culinaire de France, la Maison Laborie\n            tient à conserver à tout prix le niveau de qualité de ses produits\n            et rester fidèle à leur goût originel.\n          </p></div> "),_vm._ssrNode("<div class=\"cta_fiche\" data-v-7a985190>","</div>",[_c('nuxt-link',{attrs:{"to":"/producteurs/#categorie"}},[_vm._v("Revenir aux producteurs")])],1)],2)],2)],2),_vm._ssrNode(" "),_c('Newsletter')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/producteurs/maison-laborie.vue?vue&type=template&id=7a985190&scoped=true&

// EXTERNAL MODULE: ./components/default/Newsletter.vue + 4 modules
var Newsletter = __webpack_require__(80);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/producteurs/maison-laborie.vue?vue&type=script&lang=js&
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

/* harmony default export */ var maison_laborievue_type_script_lang_js_ = ({
  components: {
    Newsletter: Newsletter["a" /* default */]
  }
});
// CONCATENATED MODULE: ./pages/producteurs/maison-laborie.vue?vue&type=script&lang=js&
 /* harmony default export */ var producteurs_maison_laborievue_type_script_lang_js_ = (maison_laborievue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/producteurs/maison-laborie.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(214)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  producteurs_maison_laborievue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7a985190",
  "75b72d0f"
  
)

/* harmony default export */ var maison_laborie = __webpack_exports__["default"] = (component.exports);

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

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/map.642f054.svg";

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/usermt.efa132e.svg";

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/mapmt.6ff2eee.svg";

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/photorosco.fd04a3a.jpg";

/***/ })

};;
//# sourceMappingURL=maison-laborie.js.map