(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{336:function(t,e,o){var content=o(340);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(36).default)("5228c78e",content,!0,{sourceMap:!1})},337:function(t,e,o){"use strict";var n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"content_newsletter"},[o("h3",[t._v("Inscrivez vous à la Newsletter")]),t._v(" "),o("p",[t._v("Et recevez toutes nos actus et nos nouvelles offres.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"illus"},[e("img",{attrs:{src:o(338),alt:""}})])}],r=(o(24),o(12),o(23),o(30),o(31),o(6));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={data:function(){return{form:{email:""},loading:!1,state:!0,goodNews:!1,error:!1}},methods:{subscribe:function(t){var e=this;t.preventDefault(),console.log(d({},this.form)),this.loading=!0,this.state=!1,this.$axios.post("https://apimyterroir.rouxnicolas.fr/subscribe",d({},this.form)).then((function(t){return e.form="",e.loading=!1,e.state=!0,e.goodNews=!0})).catch((function(t){e.error=!0,e.form="",e.loading=!1,e.state=!0}))}}},v=(o(339),o(17)),component=Object(v.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"Newsletter"},[t._m(0),t._v(" "),o("form",{on:{submit:t.subscribe}},[o("div",{staticClass:"cta_newsletter"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],attrs:{required:"",type:"text",placeholder:"contact@my-terroir.fr"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),t.state?o("button",[t._v("Soumettre")]):t._e(),t._v(" "),t.loading?o("button",{staticClass:"loading"},[t._v("En cours")]):t._e()]),t._v(" "),t.goodNews?o("p",{staticClass:"goodNews"},[t._v("\n      Vous avez été enregistré à notre newsletter !\n    ")]):t._e(),t._v(" "),t.error?o("p",{staticClass:"error"},[t._v("\n      Oups, veuillez ressayer ultérieurement ou contacter le support !\n    ")]):t._e()]),t._v(" "),t._m(1)])}),n,!1,null,null,null);e.a=component.exports},338:function(t,e,o){t.exports=o.p+"img/illus.154ab7a.png"},339:function(t,e,o){"use strict";o(336)},340:function(t,e,o){var n=o(35),r=o(75),c=o(122),d=n(!1),l=r(c);d.push([t.i,".Newsletter{background-color:var(--orange);background-image:url("+l+");background-size:70%;background-repeat:repeat;text-align:center}.content_newsletter{padding:50px 15px 20px}.loading{pointer-events:none;opacity:.5}.content_newsletter h3{color:var(--white);font-size:28px;line-height:40px}.goodNews{background-color:#ceffce;color:green}.error,.goodNews{width:300px;padding:10px 15px;margin:20px auto}.error{background-color:#ffcece;color:maroon}.content_newsletter p{color:var(--white);font-size:14px;line-height:26px;padding:0 20px}.cta_newsletter input{border:none;background-color:var(--white);padding:14px 18px;font-family:bodyBold,sans-serif;outline:none;border-radius:0}.cta_newsletter input::-moz-placeholder{font-family:bodyBold,sans-serif;opacity:.5}.cta_newsletter input:-ms-input-placeholder{font-family:bodyBold,sans-serif;opacity:.5}.cta_newsletter input::placeholder{font-family:bodyBold,sans-serif;opacity:.5}.cta_newsletter button{border:none;background-color:var(--black);padding:14px 18px;cursor:pointer;color:var(--white);outline:none;border-radius:0;font-family:bodyBold,sans-serif}.illus{margin-left:-100px;margin-top:40px;overflow-x:hidden}@media screen and (min-width:1024px){.Newsletter{background-color:var(--orange);background-image:url("+l+");background-size:30%;background-repeat:repeat;text-align:center}.cta_newsletter input{width:300px}.content_newsletter h3{color:var(--white);font-size:42px;line-height:56px}}",""]),t.exports=d},341:function(t,e,o){"use strict";o.d(e,"a",(function(){return n}));o(76);function n(t){return t.startsWith("/")?"".concat("https://admin-myterroir.fr/").concat(t):t}},343:function(t,e,o){t.exports=o.p+"img/brasero.2e216c2.jpg"},345:function(t,e,o){t.exports=o.p+"img/traiteur.dff2f97.jpg"},346:function(t,e,o){var content=o(354);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(36).default)("620b6321",content,!0,{sourceMap:!1})},347:function(t,e,o){var content=o(356);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(36).default)("88bf0634",content,!0,{sourceMap:!1})},351:function(t,e,o){t.exports=o.p+"img/texture.bcb10a9.png"},352:function(t,e,o){"use strict";var n=o(341),r={props:{blog:{type:Object,default:function(){return{}}}},methods:{getStrapiMedia:n.a}},c=(o(353),o(17)),d=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"blogCard"},[o("div",[o("nuxt-link",{key:t.blog.id,attrs:{to:{name:"blogs-slug",params:{slug:t.blog.slug}}}},[t.blog.image.url?o("div",{staticClass:"picture_wrapper"},[o("img",{attrs:{src:t.getStrapiMedia(t.blog.image.url),alt:""}})]):t._e(),t._v(" "),o("p",{staticClass:"tagline"},[t._v(t._s(t.blog.categorie))]),t._v(" "),o("div",{staticClass:"title"},[o("h5",[t._v(t._s(t.blog.title))])]),t._v(" "),o("div",{staticClass:"datetime"},[o("p",[t._v(t._s(t.blog.date))])])])],1)])}),[],!1,null,"43fa7c64",null).exports,l={props:{blogs:{type:Array,default:function(){return[]}}},methods:{getStrapiMedia:n.a},components:{blogCard:d}},v=(o(355),Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"cards"},t._l(t.blogs,(function(t){return o("blogCard",{key:t.id,attrs:{blog:t}})})),1)}),[],!1,null,"56da3961",null));e.a=v.exports},353:function(t,e,o){"use strict";o(346)},354:function(t,e,o){var n=o(35)(!1);n.push([t.i,'a[data-v-43fa7c64]{text-decoration:none}.blogCard[data-v-43fa7c64]{width:100%;margin-bottom:45px;padding:0 15Px}.picture_wrapper[data-v-43fa7c64]{position:relative}.picture_wrapper[data-v-43fa7c64]:before{content:"";position:absolute;z-index:2;bottom:4px;left:0;right:0;height:0;background-color:var(--orange);transition:height .2s}.picture_wrapper img[data-v-43fa7c64]{height:224px;width:100%;border-radius:4px;-o-object-fit:cover;object-fit:cover}.tagline[data-v-43fa7c64]{margin:16px 0 3px;font-family:bodyBold;font-size:12px;text-transform:uppercase;color:var(--orange);line-height:160%}.tagline[data-v-43fa7c64]:hover{text-decoration:underline}.title[data-v-43fa7c64]{font-weight:600;font-size:20px;line-height:23px}.title h5[data-v-43fa7c64]{font-weight:600;font-family:bodyBold,sans-serif;font-size:16px;color:var(--black);line-height:24px}.title h5[data-v-43fa7c64]:hover{text-decoration:underline}.datetime p[data-v-43fa7c64]{margin-top:20px;color:var(--Body);font-size:12px;font-family:body}@media screen and (min-width:1024px){.blogCard[data-v-43fa7c64]{width:25%;padding:0}.title h5[data-v-43fa7c64]{font-size:20px;line-height:32px}}@media screen and (min-width:1200px){.blogCard[data-v-43fa7c64]{width:32.3%;padding:0}.picture_wrapper img[data-v-43fa7c64]{height:250px;width:100%;-o-object-fit:cover;object-fit:cover}.title h5[data-v-43fa7c64]{height:70px}}',""]),t.exports=n},355:function(t,e,o){"use strict";o(347)},356:function(t,e,o){var n=o(35)(!1);n.push([t.i,"a[data-v-56da3961]{text-decoration:none}.cards[data-v-56da3961]{display:flex;flex-flow:row wrap;align-items:flex-start;justify-content:flex-start}@media screen and (min-width:1024px){.cards[data-v-56da3961]{max-width:850px;margin:20px auto}}@media screen and (min-width:1200px){.cards[data-v-56da3961]{max-width:1200px;margin:20px auto;justify-content:space-between}}@media screen and (min-width:1600px){.cards[data-v-56da3961]{max-width:1400px;margin:20px auto;justify-content:space-between}}",""]),t.exports=n},361:function(t,e,o){t.exports=o.p+"img/tache.70ecb64.svg"},386:function(t,e,o){var content=o(452);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(36).default)("9ccf78d4",content,!0,{sourceMap:!1})},387:function(t,e,o){var content=o(455);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(36).default)("ea37f77a",content,!0,{sourceMap:!1})},388:function(t,e,o){var content=o(465);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(36).default)("2bef756a",content,!0,{sourceMap:!1})},389:function(t,e,o){var content=o(470);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(36).default)("bac0d410",content,!0,{sourceMap:!1})},390:function(t,e,o){var content=o(472);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(36).default)("12c6254c",content,!0,{sourceMap:!1})},391:function(t,e,o){var content=o(474);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(36).default)("6759f5ab",content,!0,{sourceMap:!1})},451:function(t,e,o){"use strict";o(386)},452:function(t,e,o){var n=o(35),r=o(75),c=o(351),d=n(!1),l=r(c);d.push([t.i,".black[data-v-50811b41]{color:var(--black)}.card_first[data-v-50811b41]{display:flex;align-items:center;flex-flow:column-reverse;position:relative}.block_content[data-v-50811b41]{display:flex;flex-flow:column;width:100%;background-color:var(--orange);background-image:url("+l+");height:500px;background-size:40%;padding:5px 15px 30px;left:0;margin-top:0;z-index:1}.block_img[data-v-50811b41]{width:100%;justify-content:flex-end;display:flex}.block_img img[data-v-50811b41]{width:100%;height:300px;-o-object-fit:cover;object-fit:cover}.categorie[data-v-50811b41]{text-transform:uppercase;color:var(--black);font-family:bodyBold,sans-serif;margin-bottom:20px;margin-top:50px;font-size:14px}.block_content h2[data-v-50811b41]{font-family:title,sans-serif;line-height:40px;font-size:28px}.block_content h2[data-v-50811b41],.description[data-v-50811b41]{color:var(--white);margin-bottom:30px}.description[data-v-50811b41]{font-size:14px;line-height:28px}.datetime[data-v-50811b41],.description[data-v-50811b41]{font-family:body,sans-serif}.datetime[data-v-50811b41]{font-size:12px;margin-bottom:40px}.datetime[data-v-50811b41],button[data-v-50811b41]{color:var(--white)}button[data-v-50811b41]{background-color:var(--black);padding:10px 48px;font-size:14px;cursor:pointer;font-family:bodyBold;border:none}@media screen and (min-width:1024px){.getBlog[data-v-50811b41]{max-width:1000px;margin:120px auto 650px}.card_first[data-v-50811b41]{display:flex;align-items:center;flex-flow:nowrap;position:relative}.block_content[data-v-50811b41]{flex-flow:column;width:60%;background-color:var(--black);height:500px;padding:30px 30px 30px 60px;left:0;top:50px;border-radius:6px;z-index:1}.block_content[data-v-50811b41],.block_img[data-v-50811b41]{display:flex;position:absolute}.block_img[data-v-50811b41]{width:70%;justify-content:flex-end;top:50%;right:0}.block_img img[data-v-50811b41]{width:100%;height:600px;-o-object-fit:cover;object-fit:cover;border-radius:6px}.categorie[data-v-50811b41]{text-transform:uppercase;color:var(--orange);font-family:bodyBold,sans-serif;margin-bottom:20px;margin-top:50px}.block_content h2[data-v-50811b41]{font-family:title,sans-serif;line-height:42px;font-size:32px}.block_content h2[data-v-50811b41],.description[data-v-50811b41]{width:500px;color:var(--white);margin-bottom:30px}.description[data-v-50811b41]{font-size:18px;line-height:32px}.datetime[data-v-50811b41],.description[data-v-50811b41]{font-family:body,sans-serif}.datetime[data-v-50811b41]{font-size:12px;margin-bottom:40px}.datetime[data-v-50811b41],button[data-v-50811b41]{color:var(--white)}button[data-v-50811b41]{background-color:var(--black);padding:10px 48px;font-size:16px;cursor:pointer;font-family:bodyBold;border:none}}@media screen and (min-width:1200px){.getBlog[data-v-50811b41]{max-width:1200px;margin:120px auto}.card_first[data-v-50811b41]{display:flex;align-items:center;flex-flow:nowrap;position:relative}.block_content[data-v-50811b41]{flex-flow:column;width:50%;background-color:var(--orange);height:500px;padding:30px 30px 30px 60px;left:0;top:50px;border-radius:6px;z-index:1}.block_content[data-v-50811b41],.block_img[data-v-50811b41]{display:flex;position:absolute}.block_img[data-v-50811b41]{width:70%;justify-content:flex-end;top:50%;right:0}.block_img img[data-v-50811b41]{width:100%;height:600px;-o-object-fit:cover;object-fit:cover;border-radius:6px}.categorie[data-v-50811b41]{text-transform:uppercase;color:var(--black);font-family:bodyBold,sans-serif;margin-bottom:20px;margin-top:20px}.block_content h2[data-v-50811b41]{font-family:title,sans-serif;width:500px;color:var(--white);line-height:42px;margin-bottom:20px;font-size:32px}.description[data-v-50811b41]{font-size:18px;width:500px;line-height:32px;margin-bottom:30px}.datetime[data-v-50811b41],.description[data-v-50811b41]{font-family:body,sans-serif;color:var(--white)}.datetime[data-v-50811b41]{font-size:12px;margin-bottom:40px}button[data-v-50811b41]{background-color:var(--black);padding:10px 48px;color:var(--white);font-size:16px;cursor:pointer;font-family:bodyBold;border:none}}@media screen and (min-width:1600px){.getBlog[data-v-50811b41]{max-width:1400px;margin:120px auto}}",""]),t.exports=d},453:function(t,e,o){t.exports=o.p+"img/authentiques.387df78.jpg"},454:function(t,e,o){"use strict";o(387)},455:function(t,e,o){var n=o(35)(!1);n.push([t.i,"strong[data-v-37a4dc94]{font-family:bodyBold,sans-serif;color:var(--black)}.about[data-v-37a4dc94]{display:flex;flex-flow:column;padding:30px 15px}.about_content h2[data-v-37a4dc94]{color:var(--black);font-size:24px;line-height:32px}.about_content hr[data-v-37a4dc94]{border:none;width:30px;margin-top:10px;margin-bottom:10px;height:2px;border-radius:10px;background-color:var(--orange)}.about_content p[data-v-37a4dc94]{color:var(--Body);font-size:14px;margin-top:20px;line-height:28px}.about_content button[data-v-37a4dc94]{margin-top:30px;background-color:var(--orange);padding:12px 48px;color:var(--white);border:none;font-size:14px;font-family:bodyBold;cursor:pointer;transition:all .3s;width:100%;margin-bottom:30px}.about_content button[data-v-37a4dc94]:hover{background-color:var(--black)}.about_img[data-v-37a4dc94]{display:flex;flex-flow:column;margin-top:20px;position:relative}.about_img img[data-v-37a4dc94]{width:100%}@media screen and (min-width:1024px){.about[data-v-37a4dc94]{display:flex;flex-flow:row;margin:700px auto 100px;justify-content:space-between;align-items:flex-start;max-width:1000px}.about_content[data-v-37a4dc94]{width:40%}.about_content h2[data-v-37a4dc94]{width:500px;font-size:32px;line-height:44px}.about_content p[data-v-37a4dc94]{font-size:14px;line-height:26px;width:450px}.about_img[data-v-37a4dc94]{width:48%;position:relative}.about_img img[data-v-37a4dc94]{max-width:100%;height:320px;-o-object-fit:cover;object-fit:cover}.cublic[data-v-37a4dc94]{position:absolute;z-index:-1;top:0;bottom:0;right:-44px;width:52%;background-color:var(--orange);transform:translateY(10%)}.about_content button[data-v-37a4dc94]{width:200Px;padding:11px 30px}}@media screen and (min-width:1200px){.about_content p[data-v-37a4dc94]{width:500px}.about[data-v-37a4dc94]{max-width:1200px;margin:700px auto 50px}}@media screen and (min-width:1600px){.about_content p[data-v-37a4dc94]{width:500px}.about[data-v-37a4dc94]{max-width:1400px;margin:750px auto 50px}}",""]),t.exports=n},456:function(t,e,o){t.exports=o.p+"img/so.4c72a54.png"},457:function(t,e,o){t.exports=o.p+"img/decat.9fbca64.png"},458:function(t,e,o){t.exports=o.p+"img/bastide.46c7565.png"},459:function(t,e,o){t.exports=o.p+"img/ricard.ed4cf17.png"},460:function(t,e,o){t.exports=o.p+"img/coq.5eba857.png"},461:function(t,e,o){t.exports=o.p+"img/club.591314f.png"},462:function(t,e,o){t.exports=o.p+"img/trip.c6eb306.png"},463:function(t,e,o){t.exports=o.p+"img/follow.6efada0.png"},464:function(t,e,o){"use strict";o(388)},465:function(t,e,o){var n=o(35)(!1);n.push([t.i,".clients[data-v-7d2abd50]{padding:30px 15px}.title_section h2[data-v-7d2abd50]{font-size:24px;line-height:32px}.title_section h2[data-v-7d2abd50],.title_section p[data-v-7d2abd50]{color:var(--black);text-align:center}.title_section p[data-v-7d2abd50]{font-size:14px}hr[data-v-7d2abd50]{border:none;width:30px;display:flex;margin:20px auto;height:2px;border-radius:10px;background-color:var(--orange)}.grid_logo[data-v-7d2abd50]{display:grid;grid-template-columns:repeat(2,1fr);grid-gap:60px 30px;margin-top:40px;align-items:center;justify-items:center;padding:0 50px 40px}.grid_logo img[data-v-7d2abd50]{width:80px}@media screen and (min-width:1024px){.clients[data-v-7d2abd50]{padding:10px 100px 80px;max-width:1250px;margin:auto}.title_section h2[data-v-7d2abd50]{font-size:32px;line-height:52px}.grid_logo[data-v-7d2abd50]{grid-template-columns:repeat(4,1fr);justify-items:center;align-items:center}.grid_logo img[data-v-7d2abd50]{width:120px}.title_section[data-v-7d2abd50]{text-align:center}hr[data-v-7d2abd50]{display:flex;margin:20px auto}.follow[data-v-7d2abd50]{width:70px!important}}@media screen and (min-width:1300px){.clients[data-v-7d2abd50]{max-width:1500px;margin:auto}}",""]),t.exports=n},466:function(t,e,o){t.exports=o.p+"img/commande.39e296a.svg"},467:function(t,e,o){t.exports=o.p+"img/valideC.c6124c9.svg"},468:function(t,e,o){t.exports=o.p+"img/bag.abe06a2.svg"},469:function(t,e,o){"use strict";o(389)},470:function(t,e,o){var n=o(35),r=o(75),c=o(361),d=o(122),l=o(351),v=n(!1),m=r(c),f=r(d),x=r(l);v.push([t.i,"a[data-v-1aa47699]{text-decoration:none}section[data-v-1aa47699]{background-color:var(--gray);width:100%;border-top:1px solid var(--gray-light);border-bottom:1px solid var(--gray-light);margin-top:20px;padding:20px 15px}.commande_title[data-v-1aa47699]{display:flex;flex-flow:column}.commande_title h2[data-v-1aa47699]{color:var(--black);font-size:24px;line-height:32px;margin-bottom:20px;margin-top:20px}.commande_title p[data-v-1aa47699]{background-image:url("+m+");background-size:100%;height:50px;font-size:18px;display:flex;justify-content:center;align-items:center;transform:rotate(-3deg);font-family:bodyBold,sans-serif;color:var(--white);background-repeat:no-repeat}hr[data-v-1aa47699]{border:none;width:30px;margin-top:10px;margin-bottom:10px;height:2px;border-radius:10px;background-color:var(--orange)}.commande_wrapper[data-v-1aa47699]{background-color:var(--beige);width:100%;margin-top:40px;background-image:url("+f+");background-repeat:repeat;background-size:80%;border-radius:1px;padding-bottom:40px;margin-bottom:40px}.commande_wrapper[data-v-1aa47699],.items_commande[data-v-1aa47699]{display:flex;flex-flow:column}.items[data-v-1aa47699]{text-align:center;margin-bottom:50px}.items img[data-v-1aa47699]{width:200px;margin-bottom:-40px}.items p[data-v-1aa47699]:nth-child(2){text-transform:uppercase;font-family:bodyBold}.items p[data-v-1aa47699]:nth-child(3){font-family:bodyBold;color:var(--white);width:200px;display:flex;margin:auto}.orange[data-v-1aa47699]{color:var(--orange)}.commande_wrapper button[data-v-1aa47699]{background-color:var(--orange);padding:10px 78px;display:flex;cursor:pointer;margin:0 auto 20px;color:var(--white);font-size:14px;font-family:bodyBold;border:none;transition:all .3s}.commande_wrapper button[data-v-1aa47699]:hover{background-color:var(--black)}@media screen and (min-width:1024px){section[data-v-1aa47699]{padding-bottom:100px}.commande_title[data-v-1aa47699]{display:flex;max-width:1100px;margin:50px auto;flex-flow:column;text-align:center;justify-content:flex-start}.commande_title h2[data-v-1aa47699]{width:900px;margin:auto;font-size:32px;line-height:46px}.commande_title p[data-v-1aa47699]{font-size:28px;background-size:100%;width:400px;margin:20px auto}.commande_wrapper[data-v-1aa47699]{background-color:var(--beige);width:100%;max-width:1100px;display:flex;margin:150px auto auto;background-image:url("+x+");background-repeat:repeat;background-size:40%;border-radius:4px;padding:0 90px 40px}.items_commande[data-v-1aa47699]{display:flex;flex-flow:row;justify-content:space-between;margin-top:-100px}.items[data-v-1aa47699]{width:30%}}",""]),t.exports=v},471:function(t,e,o){"use strict";o(390)},472:function(t,e,o){var n=o(35)(!1);n.push([t.i,"strong[data-v-93f67b8c]{font-family:bodyBold,sans-serif}.about[data-v-93f67b8c]{display:flex;flex-flow:column;padding:50px 15px}.about_content h2[data-v-93f67b8c]{color:var(--black);font-size:24px;line-height:34px}.about_content hr[data-v-93f67b8c]{border:none;width:30px;margin:10px 0;height:2px;border-radius:10px;background-color:var(--orange)}.about_content p[data-v-93f67b8c]{color:var(--black);font-size:14px;margin-top:20px;line-height:26px;margin-bottom:10px}.about_content button[data-v-93f67b8c]{margin-top:20px;background-color:var(--orange);color:var(--white);border:none}.about_content button[data-v-93f67b8c],.overbutton[data-v-93f67b8c]{padding:10px 48px;font-size:14px;width:100%;margin-bottom:30px;font-family:bodyBold;cursor:pointer;transition:all .3s}.overbutton[data-v-93f67b8c]{margin-top:10px!important;background-color:transparent!important;color:var(--orange)!important;border:1px solid var(--orange)!important;border:none}.about_content button[data-v-93f67b8c]:hover{background-color:var(--black)}.about_img[data-v-93f67b8c]{display:flex;flex-flow:column;margin-top:20px}.about_img img[data-v-93f67b8c]{width:100%}@media screen and (min-width:1024px){.about[data-v-93f67b8c]{display:flex;flex-flow:row-reverse;margin:70px auto;justify-content:space-between;align-items:flex-start;max-width:1188px}.about_content[data-v-93f67b8c]{width:40%}.about_content h2[data-v-93f67b8c]{width:500px;font-size:32px;line-height:44px}.about_content p[data-v-93f67b8c]{font-size:14px;line-height:26px;width:450px}.about_img[data-v-93f67b8c]{width:48%;position:relative}.about_img img[data-v-93f67b8c]{max-width:100%;height:320px;-o-object-fit:cover;object-fit:cover}.cublic[data-v-93f67b8c]{position:absolute;z-index:-1;top:0;bottom:0;left:-44px;width:52%;background-color:var(--orange);transform:translateY(10%)}.about_content button[data-v-93f67b8c]{width:200Px;padding:11px 30px}}@media screen and (min-width:1200px){.about_content p[data-v-93f67b8c]{width:500px}.about[data-v-93f67b8c]{max-width:1200px;margin:50px auto}}@media screen and (min-width:1600px){.about_content p[data-v-93f67b8c]{width:500px}.about[data-v-93f67b8c]{max-width:1400px;margin:50px auto}}",""]),t.exports=n},473:function(t,e,o){"use strict";o(391)},474:function(t,e,o){var n=o(35)(!1);n.push([t.i,'.home-enter-active,.home-leave-active{transition:opacity .5s}.home-enter,.home-leave-active{opacity:0}.actus{display:flex;flex-flow:row;justify-content:space-between;align-items:center;padding:50px 15px}a{text-decoration:none}.actus h2{position:relative}.actus h2:after{content:"";background-color:var(--orange);z-index:-1;left:0;top:10px;right:0;width:100%;height:15px;position:absolute}.actus p{font-size:12px;color:var(--Body)}@media screen and (min-width:1200px){.actus{max-width:1200px;margin:60px auto;padding:0}.actus h2{font-size:32px;line-height:46px}.actus p{font-size:14px;color:var(--Body)}}@media screen and (min-width:1600px){.actus{max-width:1400px;margin:20px auto 60px}.actus h2{font-size:32px}.actus p{font-size:14px;color:var(--Body)}}',""]),t.exports=n},476:function(t,e,o){"use strict";o.r(e);var n=o(2),r=(o(25),o(123),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h2",[t._v("Le spécialiste des produits de "),o("span",{staticClass:"black"},[t._v("Terroir")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"block_img"},[e("img",{attrs:{src:o(343),alt:""}})])}]),c={name:"HeroBoutique",data:function(){return{slickOptions:{dots:!1,arrows:!1,dotsClass:"slick-dots custom-dot-class",edgeFriction:0,infinite:!0,speed:700,draggable:!1,slidesToShow:1,slidesToScroll:1,cssEase:"cubic-bezier(.945,0,0,1)"}}},methods:{Prev:function(){this.$refs.carousel.prev()},Next:function(){this.$refs.carousel.next()}}},d=(o(451),o(17)),l=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"getBlog"},[o("div",{staticClass:"card_first"},[o("div",{staticClass:"block_content"},[o("div",{staticClass:"title_blog"},[o("p",{staticClass:"categorie"},[t._v("My Terroir")]),t._v(" "),t._m(0),t._v(" "),o("p",{staticClass:"description"},[t._v("\n          Depuis 2016, My Terroir s’est spécialisé dans la sélection et la\n          livraison à domicile de produits de terroir , fromages et\n          charcuteries de qualités. Tous nos produits sont choisis\n          minutieusement auprès d’artisans.\n        ")]),t._v(" "),o("nuxt-link",{attrs:{to:"/boutique"}},[o("button",[t._v("Boutique")])])],1)]),t._v(" "),t._m(1)])])}),r,!1,null,"50811b41",null).exports,v=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h2",[t._v("dénicheur de "),o("span",[t._v("produits")]),t._v(" authentiques.")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[t._v("\n      Notre secret : de bons "),o("strong",[t._v("produits")]),t._v(" achetés directement au "),o("strong",[t._v("producteur")]),t._v(", une\n      équipe "),o("strong",[t._v("passionnée")]),t._v(", motivée et quelques bons "),o("strong",[t._v("livres")]),t._v(" de grand-mères. Bon\n      on avoue : il nous aura fallu 5 ans, "),o("strong",[t._v("beaucoup de travail")]),t._v(", de nombreux\n      "),o("strong",[t._v("voyages")]),t._v(" et autant de rencontres pour pouvoir vous proposer en toute\n      humilité notre "),o("strong",[t._v("expertise")]),t._v(" en la matière. Pourquoi chercher compliqué\n      quand nous pouvons vous "),o("strong",[t._v("régaler en toute simplicité!")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about_img"},[n("img",{attrs:{src:o(453),alt:"image de produits"}}),t._v(" "),n("div",{staticClass:"cublic"})])}],m={name:"About"},f=(o(454),Object(d.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"about"},[o("div",{staticClass:"about_content"},[t._m(0),t._v(" "),o("hr"),t._v(" "),t._m(1),t._v(" "),o("nuxt-link",{attrs:{to:"/boutique"}},[o("button",[t._v("\n      Boutique\n    ")])])],1),t._v(" "),t._m(2)])}),v,!1,null,"37a4dc94",null).exports),x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"clients"},[n("div",{staticClass:"title_section"},[n("h2",[t._v("Ils nous font confiance")]),t._v(" "),n("p",[t._v("et nous les remercions")]),t._v(" "),n("hr")]),t._v(" "),n("div",{staticClass:"grid_logo"},[n("img",{attrs:{src:o(456),alt:""}}),t._v(" "),n("img",{attrs:{src:o(457),alt:""}}),t._v(" "),n("img",{attrs:{src:o(458),alt:""}}),t._v(" "),n("img",{staticClass:"ricard",attrs:{src:o(459),alt:""}}),t._v(" "),n("img",{attrs:{src:o(460),alt:""}}),t._v(" "),n("img",{attrs:{src:o(461),alt:""}}),t._v(" "),n("img",{attrs:{src:o(462),alt:""}}),t._v(" "),n("img",{staticClass:"follow",attrs:{src:o(463),alt:""}})])])}],h={},_=(o(464),Object(d.a)(h,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),x,!1,null,"7d2abd50",null).exports),w=o(352),y=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"commande_title"},[o("h2",[t._v("Commandez nos produits en toute simplicité")]),t._v(" "),o("p",[t._v("Un clic et c'est prêt")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"items_commande"},[n("div",{staticClass:"items"},[n("img",{attrs:{src:o(466),alt:""}}),t._v(" "),n("p",[n("span",{staticClass:"orange"},[t._v("#1.")]),t._v(" Passez commande")]),t._v(" "),n("p",[t._v("Sur notre boutique en ligne")])]),t._v(" "),n("div",{staticClass:"items"},[n("img",{attrs:{src:o(467),alt:""}}),t._v(" "),n("p",[n("span",{staticClass:"orange"},[t._v("#2.")]),t._v(" Confirmation")]),t._v(" "),n("p",[t._v("Recevez la confirmation par mail")])]),t._v(" "),n("div",{staticClass:"items"},[n("img",{attrs:{src:o(468),alt:""}}),t._v(" "),n("p",[n("span",{staticClass:"orange"},[t._v("#3.")]),t._v(" Livraison")]),t._v(" "),n("p",[t._v("Retirez ou faites vous livrer la commande")])])])}],k={},z=(o(469),Object(d.a)(k,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"commande"},[t._m(0),t._v(" "),o("div",{staticClass:"commande_wrapper"},[t._m(1),t._v(" "),o("nuxt-link",{attrs:{to:"/boutique"}},[o("button",[t._v("Boutique")])])],1)])}),y,!1,null,"1aa47699",null).exports),C=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[t._v("\n      Cassez les "),o("strong",[t._v("codes")]),t._v(", choisissez un\n      "),o("strong",[t._v("traiteur")]),t._v(" sur "),o("strong",[t._v("Bordeaux")]),t._v(" pas comme les\n      autres qui vous propose une sélection de "),o("strong",[t._v("produits")]),t._v(" de\n      "),o("strong",[t._v("qualité")]),t._v(" dénichée chez des\n      "),o("strong",[t._v("producteurs")]),t._v(" artisanaux en France, Espagne et en Italie.\n      Vous "),o("strong",[t._v("organisez")]),t._v(" votre mariage, un anniversaire ou\n      simplement des retrouvailles entre copains.\n      "),o("strong",[t._v("Choisissez")]),t._v(" avec nous les produits qui s’accorderont au\n      mieux avec votre "),o("strong",[t._v("événement")]),t._v(". Nous pouvons nous occuper\n      des "),o("strong",[t._v("services")]),t._v(" complémentaires comme la vaisselle ou le\n      mobilier.\n    ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about_img"},[n("img",{attrs:{src:o(345),alt:"image de produits"}}),t._v(" "),n("div",{staticClass:"cublic"})])}],j={name:"About"},B=(o(471),Object(d.a)(j,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"about"},[o("div",{staticClass:"about_content"},[o("h2",[t._v("Le service traiteur de my terroir")]),t._v(" "),o("hr"),t._v(" "),t._m(0),t._v(" "),o("nuxt-link",{attrs:{to:"/traiteur"}},[o("button",[t._v("\n        Nos prestations\n      ")])])],1),t._v(" "),t._m(1)])}),C,!1,null,"93f67b8c",null).exports),O=o(337),E={asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$strapi,e.next=3,o.find("blogs?_sort=id:DESC&_limit=3");case 3:return e.t0=e.sent,e.abrupt("return",{blogs:e.t0});case 5:case"end":return e.stop()}}),e)})))()},components:{HeroHome:l,About:f,Commande:z,traiteurHome:B,blog:w.a,Clients:_,Newsletter:O.a}},$=(o(473),Object(d.a)(E,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("HeroHome"),t._v(" "),o("About"),t._v(" "),o("Commande"),t._v(" "),o("traiteurHome"),t._v(" "),o("Clients"),t._v(" "),o("div",{staticClass:"actus"},[o("h2",[t._v("Nos actus")]),t._v(" "),o("nuxt-link",{attrs:{to:"/blogs"}},[o("p",[t._v("Tout voir")])])],1),t._v(" "),o("blog",{attrs:{blogs:t.blogs}}),t._v(" "),o("Newsletter")],1)}),[],!1,null,null,null));e.default=$.exports}}]);