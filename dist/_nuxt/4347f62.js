(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{338:function(t,e,o){var content=o(342);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(36).default)("5228c78e",content,!0,{sourceMap:!1})},339:function(t,e,o){"use strict";var r=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"content_newsletter"},[o("h3",[t._v("Inscrivez vous à la Newsletter")]),t._v(" "),o("p",[t._v("Et recevez toutes nos actus et nos nouvelles offres.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"illus"},[e("img",{attrs:{src:o(340),alt:""}})])}],n=(o(24),o(12),o(23),o(30),o(31),o(6));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={data:function(){return{form:{email:""},loading:!1,state:!0,goodNews:!1,error:!1}},methods:{subscribe:function(t){var e=this;t.preventDefault(),console.log(d({},this.form)),this.loading=!0,this.state=!1,this.$axios.post("https://apimyterroir.rouxnicolas.fr/subscribe",d({},this.form)).then((function(t){return e.form="",e.loading=!1,e.state=!0,e.goodNews=!0})).catch((function(t){e.error=!0,e.form="",e.loading=!1,e.state=!0}))}}},f=(o(341),o(17)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"Newsletter"},[t._m(0),t._v(" "),o("form",{on:{submit:t.subscribe}},[o("div",{staticClass:"cta_newsletter"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],attrs:{required:"",type:"text",placeholder:"contact@my-terroir.fr"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),t.state?o("button",[t._v("Soumettre")]):t._e(),t._v(" "),t.loading?o("button",{staticClass:"loading"},[t._v("En cours")]):t._e()]),t._v(" "),t.goodNews?o("p",{staticClass:"goodNews"},[t._v("\n      Vous avez été enregistré à notre newsletter !\n    ")]):t._e(),t._v(" "),t.error?o("p",{staticClass:"error"},[t._v("\n      Oups, veuillez ressayer ultérieurement ou contacter le support !\n    ")]):t._e()]),t._v(" "),t._m(1)])}),r,!1,null,null,null);e.a=component.exports},340:function(t,e,o){t.exports=o.p+"img/illus.154ab7a.png"},341:function(t,e,o){"use strict";o(338)},342:function(t,e,o){var r=o(35),n=o(75),c=o(122),d=r(!1),l=n(c);d.push([t.i,".Newsletter{background-color:var(--orange);background-image:url("+l+");background-size:70%;background-repeat:repeat;text-align:center}.content_newsletter{padding:50px 15px 20px}.loading{pointer-events:none;opacity:.5}.content_newsletter h3{color:var(--white);font-size:28px;line-height:40px}.goodNews{background-color:#ceffce;color:green}.error,.goodNews{width:300px;padding:10px 15px;margin:20px auto}.error{background-color:#ffcece;color:maroon}.content_newsletter p{color:var(--white);font-size:14px;line-height:26px;padding:0 20px}.cta_newsletter input{border:none;background-color:var(--white);padding:14px 18px;font-family:bodyBold,sans-serif;outline:none;border-radius:0}.cta_newsletter input::-moz-placeholder{font-family:bodyBold,sans-serif;opacity:.5}.cta_newsletter input:-ms-input-placeholder{font-family:bodyBold,sans-serif;opacity:.5}.cta_newsletter input::placeholder{font-family:bodyBold,sans-serif;opacity:.5}.cta_newsletter button{border:none;background-color:var(--black);padding:14px 18px;cursor:pointer;color:var(--white);outline:none;border-radius:0;font-family:bodyBold,sans-serif}.illus{margin-left:-100px;margin-top:40px;overflow-x:hidden}@media screen and (min-width:1024px){.Newsletter{background-color:var(--orange);background-image:url("+l+");background-size:30%;background-repeat:repeat;text-align:center}.cta_newsletter input{width:300px}.content_newsletter h3{color:var(--white);font-size:42px;line-height:56px}}",""]),t.exports=d},343:function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));o(76);function r(t){return t.startsWith("/")?"".concat("https://admin-myterroir.fr/").concat(t):t}},350:function(t,e,o){var content=o(362);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(36).default)("bdee8054",content,!0,{sourceMap:!1})},359:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI0U1NTIxQSIgZD0iTTE3LDkuMTdhMSwxLDAsMCwwLTEuNDEsMEwxMiwxMi43MSw4LjQ2LDkuMTdhMSwxLDAsMCwwLTEuNDEsMCwxLDEsMCwwLDAsMCwxLjQybDQuMjQsNC4yNGExLDEsMCwwLDAsMS40MiwwTDE3LDEwLjU5QTEsMSwwLDAsMCwxNyw5LjE3WiIvPjwvc3ZnPg=="},360:function(t,e,o){t.exports=o.p+"img/jambon.efd09c8.jpg"},361:function(t,e,o){"use strict";o(350)},362:function(t,e,o){var r=o(35)(!1);r.push([t.i,".card_first[data-v-70c1f98c]{display:flex;align-items:center;flex-flow:column-reverse;position:relative}.block_content[data-v-70c1f98c]{display:flex;flex-flow:column;width:100%;background-color:var(--black);height:500px;padding:5px 15px 30px;left:0;margin-top:0;z-index:1}.block_img[data-v-70c1f98c]{width:100%;justify-content:flex-end;display:flex}.block_img img[data-v-70c1f98c]{width:100%;height:300px;-o-object-fit:cover;object-fit:cover}.categorie[data-v-70c1f98c]{text-transform:uppercase;color:var(--orange);font-family:bodyBold,sans-serif;margin-bottom:20px;margin-top:50px;font-size:14px}.block_content h2[data-v-70c1f98c]{font-family:title,sans-serif;line-height:40px;font-size:28px}.block_content h2[data-v-70c1f98c],.description[data-v-70c1f98c]{color:var(--white);margin-bottom:30px}.description[data-v-70c1f98c]{font-size:14px;line-height:28px}.datetime[data-v-70c1f98c],.description[data-v-70c1f98c]{font-family:body,sans-serif}.datetime[data-v-70c1f98c]{font-size:12px;margin-bottom:40px}.datetime[data-v-70c1f98c],button[data-v-70c1f98c]{color:var(--white)}button[data-v-70c1f98c]{background-color:var(--orange);padding:10px 48px;font-size:14px;cursor:pointer;font-family:bodyBold;border:none}@media screen and (min-width:1024px){.getBlog[data-v-70c1f98c]{max-width:1000px;margin:120px auto 650px}.card_first[data-v-70c1f98c]{display:flex;align-items:center;flex-flow:nowrap;position:relative}.block_content[data-v-70c1f98c]{flex-flow:column;width:60%;background-color:var(--black);height:500px;padding:30px 30px 30px 60px;left:0;top:50px;border-radius:6px;z-index:1}.block_content[data-v-70c1f98c],.block_img[data-v-70c1f98c]{display:flex;position:absolute}.block_img[data-v-70c1f98c]{width:70%;justify-content:flex-end;top:50%;right:0}.block_img img[data-v-70c1f98c]{width:100%;height:600px;-o-object-fit:cover;object-fit:cover;border-radius:6px}.categorie[data-v-70c1f98c]{text-transform:uppercase;color:var(--orange);font-family:bodyBold,sans-serif;margin-bottom:20px;margin-top:50px}.block_content h2[data-v-70c1f98c]{font-family:title,sans-serif;line-height:42px;font-size:32px}.block_content h2[data-v-70c1f98c],.description[data-v-70c1f98c]{width:500px;color:var(--white);margin-bottom:30px}.description[data-v-70c1f98c]{font-size:18px;line-height:32px}.datetime[data-v-70c1f98c],.description[data-v-70c1f98c]{font-family:body,sans-serif}.datetime[data-v-70c1f98c]{font-size:12px;margin-bottom:40px}.datetime[data-v-70c1f98c],button[data-v-70c1f98c]{color:var(--white)}button[data-v-70c1f98c]{background-color:var(--orange);padding:10px 48px;font-size:16px;cursor:pointer;font-family:bodyBold;border:none}}@media screen and (min-width:1200px){.getBlog[data-v-70c1f98c]{max-width:1200px;margin:120px auto}.card_first[data-v-70c1f98c]{display:flex;align-items:center;flex-flow:nowrap;position:relative}.block_content[data-v-70c1f98c]{flex-flow:column;width:50%;background-color:var(--black);height:500px;padding:30px 30px 30px 60px;left:0;top:50px;border-radius:6px;z-index:1}.block_content[data-v-70c1f98c],.block_img[data-v-70c1f98c]{display:flex;position:absolute}.block_img[data-v-70c1f98c]{width:70%;justify-content:flex-end;top:50%;right:0}.block_img img[data-v-70c1f98c]{width:100%;height:600px;-o-object-fit:cover;object-fit:cover;border-radius:6px}.categorie[data-v-70c1f98c]{text-transform:uppercase;color:var(--orange);font-family:bodyBold,sans-serif;margin-bottom:20px;margin-top:50px}.block_content h2[data-v-70c1f98c]{font-family:title,sans-serif;width:500px;color:var(--white);line-height:42px;margin-bottom:20px;font-size:32px}.description[data-v-70c1f98c]{font-size:16px;width:500px;line-height:32px;margin-bottom:30px}.datetime[data-v-70c1f98c],.description[data-v-70c1f98c]{font-family:body,sans-serif;color:var(--white)}.datetime[data-v-70c1f98c]{font-size:12px;margin-bottom:40px}button[data-v-70c1f98c]{background-color:var(--orange);padding:10px 48px;color:var(--white);font-size:16px;cursor:pointer;font-family:bodyBold;border:none}}@media screen and (min-width:1400px){.getBlog[data-v-70c1f98c]{max-width:1400px;margin:120px auto}}",""]),t.exports=r},364:function(t,e,o){"use strict";var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"getBlog"},[r("div",{staticClass:"card_first"},[r("div",{staticClass:"block_content"},[r("div",{staticClass:"title_blog"},[r("p",{staticClass:"categorie"},[t._v("Boutique")]),t._v(" "),r("h2",[t._v("Tous nos produits à porter de clic !")]),t._v(" "),r("p",{staticClass:"description"},[t._v("Retrouvez la liste de nos produits de terroir que nous avons spécialement sélectionné pour vous. Charcuteries, viandes, fromages il y en a pour tous les gôuts.")]),t._v(" "),r("button",[t._v("Scroll")])])]),t._v(" "),r("div",{staticClass:"block_img"},[r("img",{attrs:{src:o(360),alt:""}})])])])}],n={name:"HeroBoutique",data:function(){return{slickOptions:{dots:!1,arrows:!1,dotsClass:"slick-dots custom-dot-class",edgeFriction:0,infinite:!0,speed:700,draggable:!1,slidesToShow:1,slidesToScroll:1,cssEase:"cubic-bezier(.945,0,0,1)"}}},methods:{Prev:function(){this.$refs.carousel.prev()},Next:function(){this.$refs.carousel.next()}}},c=(o(361),o(17)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),r,!1,null,"70c1f98c",null);e.a=component.exports},368:function(t,e,o){var content=o(403);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(36).default)("03bd8bab",content,!0,{sourceMap:!1})},402:function(t,e,o){"use strict";o(368)},403:function(t,e,o){var r=o(35)(!1);r.push([t.i,".nuxt-link-active[data-v-56433199]{color:var(--orange)!important;font-family:bodyBold!important}.products_box[data-v-56433199]{margin:50px auto 100px;align-items:flex-start}.categories_products_mobile[data-v-56433199],.products_box[data-v-56433199]{display:flex;flex-flow:column;height:100%;justify-content:space-between}.categories_products_mobile[data-v-56433199]{width:100%;padding:20px 15px;position:sticky;position:-webkit-sticky;font-size:14px;border-top:1px solid var(--gray-light);border-bottom:1px solid var(--gray-light);top:70px;margin-bottom:30px;font-family:bodyBold,sans-serif;background-color:var(--white);z-index:3}.top_bar[data-v-56433199]{display:flex;flex-flow:row wrap;justify-content:space-between}.rayons[data-v-56433199]{font-family:body,sans-serif;display:flex;flex-flow:row;align-items:center}.rayons img[data-v-56433199]{width:20px;transition:all .3s}.rotate[data-v-56433199]{transform:rotate(180deg)}.open_rayon[data-v-56433199]{display:flex;flex-flow:row wrap}a[data-v-56433199]{text-decoration:none;color:var(--Body)}.categorie_mobile[data-v-56433199]{display:flex;flex-flow:row wrap;margin-top:10px;font-size:12px;font-family:body,sans-serif;color:var(--Body)}.categorie_mobile p[data-v-56433199]{margin-right:20px;border:1px solid var(--gray-light);padding:10px 20px;border-radius:3px;margin-bottom:10px}.categories_products_desktop[data-v-56433199]{display:none}hr[data-v-56433199]{margin:15px 0;width:100%;border:none;background-color:var(--orange);height:1px}.categories_products p[data-v-56433199]{text-transform:uppercase;font-family:bodyBold,sans-serif;letter-spacing:1px}.products_cards[data-v-56433199]{width:100%;display:flex;padding:0 15px;flex-flow:row wrap;align-items:flex-end;justify-content:space-between}.card[data-v-56433199]{width:48%;margin-bottom:25px}.img[data-v-56433199],.img img[data-v-56433199]{position:relative}.img img[data-v-56433199]{width:100%;height:180px;-o-object-fit:cover;object-fit:cover;background-color:var(--gray)}.addCart[data-v-56433199]{position:absolute;width:30px;height:30px;background-color:var(--orange);border-radius:50%;font-size:20px;color:var(--white);display:flex;justify-content:center;cursor:pointer;align-items:center;top:15px;z-index:2;transition:all .3s;right:10px}.addCart[data-v-56433199]:hover{color:var(--white);background-color:var(--black)}.number_add[data-v-56433199]{display:flex;flex:row;width:60px;height:40px;font-size:12px;background-color:var(--white);padding:5px 10px;border-radius:20px;justify-content:space-between;align-items:center;z-index:2;cursor:pointer;position:absolute;top:10px;left:10px}.opacity[data-v-56433199]{pointer-events:none;color:var(--gray-light)}.opacity_add[data-v-56433199]{background-color:var(--gray-light)!important}.none[data-v-56433199],.opacity_add[data-v-56433199]{pointer-events:none}.none[data-v-56433199]{position:absolute;z-index:2;background-color:var(--orange);padding:10px 20px;font-size:10px;color:var(--white);display:flex;justify-content:center;align-items:center;top:0;right:0}.titleProducts[data-v-56433199]{margin-top:5px;color:var(--Body);height:50px;width:90%;font-size:12px}.price[data-v-56433199]{display:flex;flex-flow:row;align-items:flex-end;margin-top:10px}.price p[data-v-56433199]:first-child{font-family:bodyBold,sans-serif}.price p[data-v-56433199]:nth-child(2){margin:0 10px;color:var(--Body)}.price p[data-v-56433199]:nth-child(3){font-size:12px;color:var(--Body)}@media screen and (min-width:768px){.card[data-v-56433199]{width:30%;margin-bottom:25px}}@media screen and (min-width:1024px){.card[data-v-56433199]{width:21%;margin-bottom:25px}}@media screen and (min-width:1200px){.products_box[data-v-56433199]{display:flex;max-width:1200px;margin:750px auto 100px;flex-flow:row wrap;height:100%;justify-content:space-between;align-items:flex-start}.categories_products_mobile[data-v-56433199]{display:none}.categories_products_desktop[data-v-56433199]{display:flex;position:sticky;position:-webkit-sticky;top:150px;height:100%;padding:0;font-family:bodyBold,sans-serif;flex-flow:column;align-items:flex-start}hr[data-v-56433199]{margin:15px 0;width:100%;border:none;background-color:var(--gray);height:1px}.categories_products_desktop a[data-v-56433199],.categories_products_name[data-v-56433199]{text-transform:uppercase;font-family:body,sans-serif;letter-spacing:1px;width:100%;color:var(--black);margin-bottom:20px;font-size:14px}.categories_products_name[data-v-56433199]{border-bottom:1px dotted var(--gray-light);padding-bottom:5px}.products_cards[data-v-56433199]{width:80%;display:flex;flex-flow:row wrap;align-items:flex-end;justify-content:space-between}.card[data-v-56433199]{width:22.5%;margin-bottom:25px}.img img[data-v-56433199]{width:220px;height:220px;background-color:var(--gray);position:relative;z-index:2}.addCart[data-v-56433199]{width:30px;height:30px;border-radius:50%;font-size:20px;cursor:pointer;top:15px;right:20px}.addCart[data-v-56433199],.none[data-v-56433199]{position:absolute;background-color:var(--orange);color:var(--white);display:flex;justify-content:center;align-items:center}.none[data-v-56433199]{padding:10px 20px;font-size:12px;pointer-events:none;top:0;right:0}.titleProducts[data-v-56433199]{margin-top:5px;color:var(--Body);height:50px;font-size:14px}.price[data-v-56433199]{display:flex;flex-flow:row;align-items:flex-end;margin-top:10px}.price p[data-v-56433199]:first-child{font-family:bodyBold,sans-serif}.price p[data-v-56433199]:nth-child(2){margin:0 10px;color:var(--Body)}.price p[data-v-56433199]:nth-child(3){font-size:12px;color:var(--Body)}}@media screen and (min-width:1400px){.products_box[data-v-56433199]{display:flex;max-width:1400px;margin:750px auto 100px;flex-flow:row wrap;height:100%;justify-content:space-between;align-items:flex-start}.products_cards[data-v-56433199]{justify-content:flex-start}.card[data-v-56433199]{margin-right:20px}.img[data-v-56433199],.img img[data-v-56433199]{position:relative}.img img[data-v-56433199]{width:240px;-o-object-fit:cover;object-fit:cover;height:240px;background-color:var(--gray)}}",""]),t.exports=r},482:function(t,e,o){"use strict";o.r(e);var r=o(6),n=o(2),c=(o(25),o(123),o(24),o(12),o(23),o(30),o(31),o(364)),d=o(339),l=o(21),f=o(124),v=o.n(f),x=o(343);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o,r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$strapi,r=t.store,n=t.error,e.prev=1,e.next=4,o.find("produits");case 4:c=e.sent,r.commit("setProducts",c),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n(e.t0);case 11:return e.next=13,o.find("products-categories");case 13:return e.t1=e.sent,e.abrupt("return",{productsC:e.t1});case 15:case"end":return e.stop()}}),e,null,[[1,8]])})))()},head:{title:"Produits de terroir Bordeaux | MyTerroir",meta:[{hid:"Produits de terroir Bordeaux | MyTerroir",name:"Produits de terroir Bordeaux | MyTerroir",content:"Retrouvez la liste de nos produits de terroir que nous avons spécialement sélectionné pour vous. Charcuteries, viandes, fromages il y en a pour tous les gôuts.",keywords:"Producteurs, Bordeaux, Producteurs-Bordeaux, Boutique, boutique, Produits de terroir, charcuterie, charcuteries, fromage, fromages, viandes, viande, brasero, plancha, mariages, cocktails, buffets, repas"}]},components:{HeroBoutique:c.a,Newsletter:d.a},data:function(){return{rayons:!1}},mixins:[v.a.mixin],computed:h({},Object(l.c)(["allProducts"])),methods:h(h(h(h({},Object(l.d)("cart",["addOne"])),Object(l.d)(["addProductQuantity"])),Object(l.d)(["removeQuantity"])),{},{getStrapiMedia:x.a})},w=(o(402),o(17)),component=Object(w.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",[r("HeroBoutique"),t._v(" "),r("section",{staticClass:"products_box"},[r("div",{staticClass:"categories_products_mobile"},[r("div",{staticClass:"top_bar"},[r("p",[t._v("Tous nos produits")]),t._v(" "),r("div",{staticClass:"rayons",on:{click:function(e){t.rayons=!t.rayons}}},[r("p",[t._v("Rayons")]),t._v(" "),r("img",{class:{rotate:t.rayons},attrs:{src:o(359),alt:""}})])]),t._v(" "),t.rayons?r("div",{staticClass:"open_rayon"},t._l(t.productsC,(function(e){return r("div",{key:e.id,staticClass:"categorie_mobile"},[r("nuxt-link",{key:e.id,attrs:{to:{name:"cat-slug",params:{slug:e.slug}}}},[r("p",[t._v(t._s(e.name))])])],1)})),0):t._e()]),t._v(" "),r("div",{staticClass:"categories_products_desktop"},[r("nuxt-link",{attrs:{to:"/boutique"}},[r("p",[t._v("Tous les produits")])]),t._v(" "),t._l(t.productsC,(function(e){return r("div",{key:e.id,staticClass:"categories_products_name"},[r("nuxt-link",{key:e.id,attrs:{to:{name:"cat-slug",params:{slug:e.slug}}}},[t._v("\n          "+t._s(e.name))])],1)})),t._v(" "),r("hr")],2),t._v(" "),r("div",{staticClass:"products_cards"},t._l(t.allProducts,(function(p){return r("div",{key:p.id,staticClass:"card"},[r("div",{staticClass:"img"},[r("img",{attrs:{src:t.getStrapiMedia(p.image.url),alt:""}}),t._v(" "),p.stocks>=1?r("p",{staticClass:"addCart",class:{opacity_add:p.quantite===p.stocks},on:{click:function(e){return t.addOne(p)}}},[t._v("+")]):t._e(),t._v(" "),p.stocks>=1?r("div",{staticClass:"number_add"},[r("p",{class:{opacity:1===p.quantite},on:{click:function(e){return t.removeQuantity(p.id)}}},[t._v("-")]),t._v(" "),r("p",[t._v(t._s(p.quantite))]),t._v(" "),r("p",{class:{opacity:p.quantite===p.stocks},on:{click:function(e){return t.addProductQuantity(p.id)}}},[t._v("+")])]):t._e(),t._v(" "),0===p.stocks?r("p",{staticClass:"none"},[t._v("produit épuisé")]):t._e()]),t._v(" "),r("div",{staticClass:"titleProducts"},[r("p",[t._v(t._s(p.name))])]),t._v(" "),r("div",{staticClass:"price"},[r("p",[t._v(t._s(t._f("currency")(p.prix,""))+"€")]),t._v(" "),r("p",[t._v("|")]),t._v(" "),r("p",[t._v(t._s(p.poids))])])])})),0)]),t._v(" "),r("Newsletter")],1)}),[],!1,null,"56433199",null);e.default=component.exports}}]);