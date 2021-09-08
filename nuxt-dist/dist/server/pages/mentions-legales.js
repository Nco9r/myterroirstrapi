exports.ids = [11];
exports.modules = {

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(162);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("542fbe69", content, true, context)
};

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_mentions_legales_vue_vue_type_style_index_0_id_123e7eb2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(122);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_mentions_legales_vue_vue_type_style_index_0_id_123e7eb2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_mentions_legales_vue_vue_type_style_index_0_id_123e7eb2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_mentions_legales_vue_vue_type_style_index_0_id_123e7eb2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_mentions_legales_vue_vue_type_style_index_0_id_123e7eb2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "a[data-v-123e7eb2]{color:var(--black)}br[data-v-123e7eb2]{margin-bottom:10px}.content_mentions h2[data-v-123e7eb2]{line-height:36px;color:var(--orange);font-size:24px;margin-bottom:30px}.content_mentions[data-v-123e7eb2]{padding:70px 20px 20px}.block_content[data-v-123e7eb2]{margin-bottom:50px}.block_content h3[data-v-123e7eb2]{font-size:18px;color:var(--black);font-weight:700;margin-bottom:10px}.block_content hr[data-v-123e7eb2]{border:none;height:3px;border-radius:3px;background-color:var(--orange);width:40px;margin-bottom:20px}.block_content p[data-v-123e7eb2]{font-size:14px;color:var(--black);line-height:28px;margin-bottom:10px;font-weight:300}@media screen and (min-width:768px){.content_mentions[data-v-123e7eb2]{padding:10px 50px}}@media screen and (min-width:1024px){.content_mentions[data-v-123e7eb2]{padding:100px 150px}}@media screen and (min-width:1440px){.content_mentions[data-v-123e7eb2]{padding:100px 200px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/mentions-legales.vue?vue&type=template&id=123e7eb2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"content_mentions\" data-v-123e7eb2><h2 data-v-123e7eb2>Mentions légales</h2> <div class=\"block_content\" data-v-123e7eb2><h3 data-v-123e7eb2>1. Présentation du site.</h3> <hr data-v-123e7eb2> <p data-v-123e7eb2>\n        En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour la\n        confiance dans l’économie numérique, il est précisé aux utilisateurs\n        du site www.my-terroir.fr l’identité des différents intervenants dans\n        le cadre de sa réalisation et de son suivi :\n      </p> <p data-v-123e7eb2><strong data-v-123e7eb2>Propriétaire :</strong> My Terroir - 482, rue du Courdonney, 33140 Cadaujac.\n      </p> <p data-v-123e7eb2><strong data-v-123e7eb2>Responsable publication : Stéphane Eclache</strong></p> <p data-v-123e7eb2><strong data-v-123e7eb2>Hébergeur :</strong> O2 Switch – 222 Boulevard Gustave\n        Flaubert – 63000 Clermont-Ferrand – France.\n      </p> <p data-v-123e7eb2><strong data-v-123e7eb2>Développement et Webdesign :</strong> <a href=\"https://rouxnicolas.fr\" target=\"_blank\" data-v-123e7eb2> Nicolas ROUX</a></p> <p data-v-123e7eb2><strong data-v-123e7eb2>Charte graphique:</strong> <a href=\"https://noemiepulido-graphiste.com/\" target=\"_blank\" data-v-123e7eb2> Noémie PULIDO</a></p></div> <div class=\"block_content\" data-v-123e7eb2><h3 data-v-123e7eb2>\n        2. Conditions générales d’utilisation du site et des services\n        proposés.\n      </h3> <hr data-v-123e7eb2> <p data-v-123e7eb2>\n        L’utilisation du site www.my-terroir.fr implique l’acceptation pleine\n        et entière des conditions générales d’utilisation ci-après décrites.\n        Ces conditions d’utilisation sont susceptibles d’être modifiées ou\n        complétées à tout moment, les utilisateurs du site www.my-terroir.fr\n        sont donc invités à les consulter de manière régulière.\n      </p> <p data-v-123e7eb2>\n        Ce site est normalement accessible à tout moment aux utilisateurs. Une\n        interruption pour raison de maintenance technique peut être toutefois\n        décidée par  qui s’efforcera alors de communiquer\n        préalablement aux utilisateurs les dates et heures de l’intervention.\n      </p> <p data-v-123e7eb2>\n        Le site www.my-terroir.fr est mis à jour régulièrement par Stéphane Eclache. De la même façon, les mentions légales peuvent être modifiées à\n        tout moment : elles s’imposent néanmoins à l’utilisateur qui est\n        invité à s’y référer le plus souvent possible afin d’en prendre\n        connaissance.\n      </p></div> <div class=\"block_content\" data-v-123e7eb2><h3 data-v-123e7eb2>3. Description des services fournis.</h3> <hr data-v-123e7eb2> <p data-v-123e7eb2>\n        Le site www.my-terroir.fr a pour objet de fournir une information\n        concernant l’ensemble des activités de la société.\n      </p> <p data-v-123e7eb2>\n         s’efforce de fournir des informations aussi précises que\n        possible sur le www.my-terroir.fr . Toutefois, il ne pourra être\n        tenue responsable des omissions, des inexactitudes et des carences\n        dans la mise à jour, qu’elles soient de son fait ou du fait des tiers\n        partenaires qui lui fournissent ces informations.\n      </p> <p data-v-123e7eb2>\n        Tous les informations indiquées sur le site www.my-terroir.fr sont\n        données à titre indicatif, et sont susceptibles d’évoluer. Par\n        ailleurs, les renseignements figurant sur le site www.my-terroir.fr\n        ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications\n        ayant été apportées depuis leur mise en ligne.\n      </p></div> <div class=\"block_content\" data-v-123e7eb2><h3 data-v-123e7eb2>4. Limitations contractuelles sur les données techniques.</h3> <hr data-v-123e7eb2> <p data-v-123e7eb2>Le site utilise la technologie JavaScript.</p> <p data-v-123e7eb2>\n        Le site Internet ne pourra être tenu responsable de dommages matériels\n        liés à l’utilisation du site. De plus, l’utilisateur du site s’engage\n        à accéder au site en utilisant un matériel récent, ne contenant pas de\n        virus et avec un navigateur de dernière génération mis-à-jour\n      </p></div> <div class=\"block_content\" data-v-123e7eb2><h3 data-v-123e7eb2>5. Propriété intellectuelle et contrefaçons.</h3> <hr data-v-123e7eb2> <p data-v-123e7eb2>\n         est propriétaire des droits de propriété intellectuelle\n        ou détient les droits d’usage sur tous les éléments accessibles sur le\n        site, notamment les textes, images, graphismes, logo, icônes, sons,\n        logiciels.\n      </p> <p data-v-123e7eb2>\n        Toute reproduction, représentation, modification, publication,\n        adaptation de tout ou partie des éléments du site, quel que soit le\n        moyen ou le procédé utilisé, est interdite, sauf autorisation écrite\n        préalable de : \n      </p> <p data-v-123e7eb2>\n        Toute exploitation non autorisée du site ou de l’un quelconque des\n        éléments qu’il contient sera considérée comme constitutive d’une\n        contrefaçon et poursuivie conformément aux dispositions des articles\n        L.335-2 et suivants du Code de Propriété Intellectuelle.\n      </p></div> <div class=\"block_content\" data-v-123e7eb2><h3 data-v-123e7eb2>6. Limitations de responsabilité.</h3> <hr data-v-123e7eb2> <p data-v-123e7eb2>\n         ne pourra être tenue responsable des dommages directs et\n        indirects causés au matériel de l’utilisateur, lors de l’accès au site\n        www.my-terroir.fr, et résultant soit de l’utilisation d’un matériel\n        ne répondant pas aux spécifications indiquées au point 4, soit de\n        l’apparition d’un bug ou d’une incompatibilité.\n      </p> <p data-v-123e7eb2>\n         ne pourra également être tenue responsable des dommages\n        indirects (tels par exemple qu’une perte de marché ou perte d’une\n        chance) consécutifs à l’utilisation du site www.my-terroir.fr.\n      </p> <p data-v-123e7eb2>\n        Des espaces interactifs (possibilité de poser des questions dans\n        l’espace contact) sont à la disposition des utilisateurs. \n        se réserve le droit de supprimer, sans mise en demeure préalable, tout\n        contenu déposé dans cet espace qui contreviendrait à la législation\n        applicable en France, en particulier aux dispositions relatives à la\n        protection des données. Le cas échéant,  se réserve\n        également la possibilité de mettre en cause la responsabilité civile\n        et/ou pénale de l’utilisateur, notamment en cas de message à caractère\n        raciste, injurieux, diffamant, ou pornographique, quel que soit le\n        support utilisé (texte, photographie…).\n      </p></div> <div class=\"block_content\" data-v-123e7eb2><h3 data-v-123e7eb2>7. Gestion des données personnelles.</h3> <hr data-v-123e7eb2> <p data-v-123e7eb2>\n        En France, les données personnelles sont notamment protégées par la\n        loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004,\n        l’article L. 226-13 du Code pénal et la Directive Européenne du 24\n        octobre 1995.\n      </p> <p data-v-123e7eb2>\n        A l’occasion de l’utilisation du site www.my-terroir.fr, peuvent\n        êtres recueillies : l’URL des liens par l’intermédiaire desquels\n        l’utilisateur a accédé au site www.my-terroir.fr, le fournisseur\n        d’accès de l’utilisateur, l’adresse de protocole Internet (IP) de\n        l’utilisateur.\n      </p> <p data-v-123e7eb2>\n        En tout état de cause  ne collecte des informations\n        personnelles relatives à l’utilisateur que pour le besoin de certains\n        services proposés par le site www.my-terroir.fr. L’utilisateur\n        fournit ces informations en toute connaissance de cause, notamment\n        lorsqu’il procède par lui-même à leur saisie. Il est alors précisé à\n        l’utilisateur du site www.my-terroir.fr l’obligation ou non de\n        fournir ces informations.\n      </p> <p data-v-123e7eb2>\n        Conformément aux dispositions des articles 38 et suivants de la loi\n        78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux\n        libertés, tout utilisateur dispose d’un droit d’accès, de\n        rectification et d’opposition aux données personnelles le concernant,\n        en effectuant sa demande écrite et signée, accompagnée d’une copie du\n        titre d’identité avec signature du titulaire de la pièce, en précisant\n        l’adresse à laquelle la réponse doit être envoyée.\n      </p> <p data-v-123e7eb2>\n        Aucune information personnelle de l’utilisateur du site\n        www.my-terroir.fr n’est publiée à l’insu de l’utilisateur, échangée,\n        transférée, cédée ou vendue sur un support quelconque à des tiers.\n        Seule l’hypothèse du rachat de  et de ses droits\n        permettrait la transmission des dites informations à l’éventuel\n        acquéreur qui serait à son tour tenu de la même obligation de\n        conservation et de modification des données vis à vis de l’utilisateur\n        du site www.my-terroir.fr.\n      </p> <p data-v-123e7eb2>\n        Le site n’est pas déclaré à la CNIL car il ne recueille pas\n        d’informations personnelles. Les bases de données sont protégées par\n        les dispositions de la loi du 1er juillet 1998 transposant la\n        directive 96/9 du 11 mars 1996 relative à la protection juridique des\n        bases de données.\n      </p></div> <div class=\"block_content\" data-v-123e7eb2><h3 data-v-123e7eb2>8. Liens hypertextes et cookies.</h3> <hr data-v-123e7eb2> <p data-v-123e7eb2>\n        Le site www.my-terroir.fr contient un certain nombre de liens\n        hypertextes vers d’autres sites, mis en place avec l’autorisation de\n        . Cependant,  n’a pas la possibilité de\n        vérifier le contenu des sites ainsi visités, et n’assumera en\n        conséquence aucune responsabilité de ce fait.\n      </p> <p data-v-123e7eb2>\n        La navigation sur le site www.my-terroir.fr est susceptible de\n        provoquer l’installation de cookie(s) sur l’ordinateur de\n        l’utilisateur. Un cookie est un fichier de petite taille, qui ne\n        permet pas l’identification de l’utilisateur, mais qui enregistre des\n        informations relatives à la navigation d’un ordinateur sur un site.\n        Les données ainsi obtenues visent à faciliter la navigation ultérieure\n        sur le site, et ont également vocation à permettre diverses mesures de\n        fréquentation.\n      </p> <p data-v-123e7eb2>\n        Le refus d’installation d’un cookie peut entraîner l’impossibilité\n        d’accéder à certains services. L’utilisateur peut toutefois configurer\n        son ordinateur de la manière suivante, pour refuser l’installation des\n        cookies :\n      </p> <p data-v-123e7eb2><strong data-v-123e7eb2>Sous Internet Explorer :</strong> onglet outil (pictogramme en\n        forme de rouage en haut a droite) / options internet. Cliquez sur\n        Confidentialité et choisissez Bloquer tous les cookies. Validez sur\n        Ok.\n      </p> <p data-v-123e7eb2><strong data-v-123e7eb2>Sous Firefox :</strong> en haut de la fenêtre du navigateur,\n        cliquez sur le bouton Firefox, puis aller dans l’onglet Options.\n        Cliquer sur l’onglet Vie privée. Paramétrez les Règles de conservation\n        sur : utiliser les paramètres personnalisés pour l’historique. Enfin\n        décochez-la pour désactiver les cookies.\n      </p> <p data-v-123e7eb2><strong data-v-123e7eb2>Sous Safari :</strong> Cliquez en haut à droite du navigateur\n        sur le pictogramme de menu (symbolisé par un rouage). Sélectionnez\n        Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la\n        section « Confidentialité », cliquez sur Paramètres de contenu. Dans\n        la section « Cookies », vous pouvez bloquer les cookies.\n      </p> <p data-v-123e7eb2><strong data-v-123e7eb2>Sous Chrome :</strong> Cliquez en haut à droite du navigateur\n        sur le pictogramme de menu (symbolisé par trois lignes horizontales).\n        Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés.\n        Dans la section « Confidentialité », cliquez sur préférences. Dans\n        l’onglet « Confidentialité », vous pouvez bloquer les cookies.\n      </p></div> <div class=\"block_content\" data-v-123e7eb2><h3 data-v-123e7eb2>9. Droit applicable et attribution de juridiction.</h3> <hr data-v-123e7eb2> <p data-v-123e7eb2>\n        Tout litige en relation avec l’utilisation du site www.my-terroir.fr\n        est soumis au droit français. Il est fait attribution exclusive de\n        juridiction aux tribunaux compétents de Bordeaux.\n      </p></div> <div class=\"block_content\" data-v-123e7eb2><h3 data-v-123e7eb2>10. Les principales lois concernées.</h3> <hr data-v-123e7eb2> <p data-v-123e7eb2>\n        Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi n°\n        2004-801 du 6 août 2004 relative à l’informatique, aux fichiers et aux\n        libertés. <br data-v-123e7eb2>Loi n° 2004-575 du 21 juin 2004 pour la confiance dans\n        l’économie numérique.\n      </p></div> <div class=\"block_content\" data-v-123e7eb2><h3 data-v-123e7eb2>11. Lexique.</h3> <hr data-v-123e7eb2> <p data-v-123e7eb2>\n        Utilisateur : Internaute se connectant, utilisant le site susnommé.\n        Informations personnelles : « les informations qui permettent, sous\n        quelque forme que ce soit, directement ou non, l’identification des\n        personnes physiques auxquelles elles s’appliquent » (article 4 de la\n        loi n° 78-17 du 6 janvier 1978).\n      </p></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/mentions-legales.vue?vue&type=template&id=123e7eb2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/mentions-legales.vue?vue&type=script&lang=js&
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
/* harmony default export */ var mentions_legalesvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./pages/mentions-legales.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_mentions_legalesvue_type_script_lang_js_ = (mentions_legalesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/mentions-legales.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(161)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_mentions_legalesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "123e7eb2",
  "8ea71bf2"
  
)

/* harmony default export */ var mentions_legales = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=mentions-legales.js.map