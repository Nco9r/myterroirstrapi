(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{337:function(e,t,n){var content=n(341);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(36).default)("5228c78e",content,!0,{sourceMap:!1})},338:function(e,t,n){"use strict";var r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content_newsletter"},[n("h3",[e._v("Inscrivez vous à la Newsletter")]),e._v(" "),n("p",[e._v("Et recevez toutes nos actus et nos nouvelles offres.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"illus"},[t("img",{attrs:{src:n(339),alt:""}})])}],o=(n(22),n(10),n(21),n(29),n(30),n(6));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={data:function(){return{form:{email:""},loading:!1,state:!0,goodNews:!1,error:!1}},methods:{subscribe:function(e){var t=this;e.preventDefault(),console.log(c({},this.form)),this.loading=!0,this.state=!1,this.$axios.post("https://apimyterroir.rouxnicolas.fr/subscribe",c({},this.form)).then((function(e){return t.form="",t.loading=!1,t.state=!0,t.goodNews=!0})).catch((function(e){t.error=!0,t.form="",t.loading=!1,t.state=!0}))}}},v=(n(340),n(16)),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"Newsletter"},[e._m(0),e._v(" "),n("form",{on:{submit:e.subscribe}},[n("div",{staticClass:"cta_newsletter"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],attrs:{required:"",type:"text",placeholder:"contact@my-terroir.fr"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}}),e._v(" "),e.state?n("button",[e._v("Soumettre")]):e._e(),e._v(" "),e.loading?n("button",{staticClass:"loading"},[e._v("En cours")]):e._e()]),e._v(" "),e.goodNews?n("p",{staticClass:"goodNews"},[e._v("\n      Vous avez été enregistré à notre newsletter !\n    ")]):e._e(),e._v(" "),e.error?n("p",{staticClass:"error"},[e._v("\n      Oups, veuillez ressayer ultérieurement ou contacter le support !\n    ")]):e._e()]),e._v(" "),e._m(1)])}),r,!1,null,null,null);t.a=component.exports},339:function(e,t,n){e.exports=n.p+"img/illus.154ab7a.png"},340:function(e,t,n){"use strict";n(337)},341:function(e,t,n){var r=n(35),o=n(75),l=n(121),c=r(!1),d=o(l);c.push([e.i,".Newsletter{background-color:var(--orange);background-image:url("+d+");background-size:70%;background-repeat:repeat;text-align:center}.content_newsletter{padding:50px 15px 20px}.loading{pointer-events:none;opacity:.5}.content_newsletter h3{color:var(--white);font-size:28px;line-height:40px}.goodNews{background-color:#ceffce;color:green}.error,.goodNews{width:300px;padding:10px 15px;margin:20px auto}.error{background-color:#ffcece;color:maroon}.content_newsletter p{color:var(--white);font-size:14px;line-height:26px;padding:0 20px}.cta_newsletter input{border:none;background-color:var(--white);padding:14px 18px;font-family:bodyBold,sans-serif;outline:none;border-radius:0}.cta_newsletter input::-moz-placeholder{font-family:bodyBold,sans-serif;opacity:.5}.cta_newsletter input:-ms-input-placeholder{font-family:bodyBold,sans-serif;opacity:.5}.cta_newsletter input::placeholder{font-family:bodyBold,sans-serif;opacity:.5}.cta_newsletter button{border:none;background-color:var(--black);padding:14px 18px;cursor:pointer;color:var(--white);outline:none;border-radius:0;font-family:bodyBold,sans-serif}.illus{margin-left:-100px;margin-top:40px;overflow-x:hidden}@media screen and (min-width:1024px){.Newsletter{background-color:var(--orange);background-image:url("+d+");background-size:30%;background-repeat:repeat;text-align:center}.cta_newsletter input{width:300px}.content_newsletter h3{color:var(--white);font-size:42px;line-height:56px}}",""]),e.exports=c},370:function(e,t,n){e.exports=n.p+"img/card_cocktails_5.02d94af.jpg"},394:function(e,t,n){var content=n(462);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(36).default)("765ffea3",content,!0,{sourceMap:!1})},460:function(e,t,n){e.exports=n.p+"img/reception.f397446.jpg"},461:function(e,t,n){"use strict";n(394)},462:function(e,t,n){var r=n(35)(!1);r.push([e.i,".article[data-v-f9451ada]{padding:100px 15px 30px}.title_article h1[data-v-f9451ada]{color:var(--black);font-size:24px;line-height:32px}.title_article hr[data-v-f9451ada]{border:none;width:30px;margin-top:10px;margin-bottom:10px;height:2px;border-radius:10px;background-color:var(--orange)}.infos_article p[data-v-f9451ada]{font-size:12px;color:grey;font-style:italic;margin-bottom:20px;margin-top:15px}.content_article p[data-v-f9451ada]{font-size:14px;line-height:26px;color:var(--black);margin-bottom:15px}.content_article .sous_title[data-v-f9451ada]{font-family:bodyBold!important;color:var(--orange);font-size:16px;margin-bottom:10px}.img_article[data-v-f9451ada]{margin-top:20px;margin-bottom:20px}.img_article img[data-v-f9451ada]{width:100%;height:200px;-o-object-fit:cover;object-fit:cover}@media screen and (min-width:768px){.article[data-v-f9451ada]{max-width:680px;margin:auto}.img_article img[data-v-f9451ada]{width:100%;height:300px}}@media screen and (min-width:1024px){.article[data-v-f9451ada]{max-width:840px;margin:auto}.title_article h1[data-v-f9451ada]{font-size:42px;line-height:64px}}@media screen and (min-width:1300px){.article[data-v-f9451ada]{max-width:1200px;margin:auto}.title_article h1[data-v-f9451ada]{font-size:42px;line-height:64px}.content_article p[data-v-f9451ada]{font-size:16px;line-height:32px}}",""]),e.exports=r},525:function(e,t,n){"use strict";n.r(t);var r=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"article"},[r("div",{staticClass:"title_article"},[r("h1",[e._v("Comment organiser vos réceptions ?")]),e._v(" "),r("hr")]),e._v(" "),r("div",{staticClass:"infos_article"},[r("p",[e._v("Par Stéphane Eclache, le 3 avril 2018")])]),e._v(" "),r("div",{staticClass:"content_article"},[r("p",[e._v("\n        Dans cet article nous avons voulu vous aiguiller un petit peu sur\n        l'organisation de vos événements afin qu'ils soient le plus réussi\n        possible et en vous donnant les clés pour vous simplifier la vie.\n      ")])]),e._v(" "),r("div",{staticClass:"img_article"},[r("img",{attrs:{src:n(370),alt:""}})]),e._v(" "),r("div",{staticClass:"content_article"},[r("p",[e._v("\n        Que vous organisiez un anniversaire, une réception d'entreprise ou\n        bien votre mariage vous trouverez dans ce petit guide les quelques\n        tips que nous avons trouvé les plus importants à vous donner.\n      ")]),e._v(" "),r("p",{staticClass:"sous_title"},[e._v("1. Le planning")]),e._v(" "),r("p",[e._v("\n        Tout d'abord nous vous conseillons d'établir un planning, pour que\n        vous ayez toutes les échéances en tête. Il serait dommage de se rendre\n        compte le jour J qu'il vous manque l'essentiel.\n      ")]),e._v(" "),r("div",{staticClass:"sous_title"},[e._v("2. Le budget")]),e._v(" "),r("p",[e._v("\n        En effet, vous allez devoir délimiter un budget dès le début pour\n        avoir une idée du nombres de personnes que vous allez invité, le type\n        d'événement que vous allez pouvoir réaliser et les services ou\n        animations que vous allez pouvoir ajouter à votre réception. De plus\n        ce budget vous permettra également de sélectionner des prestataires\n        adapter à ce dernier ou au moins de connaitre votre marge de manoeuvre\n        en terme de négociation.\n      ")]),e._v(" "),r("div",{staticClass:"sous_title"},[e._v("3. Le nombre d'invités")]),e._v(" "),r("p",[e._v("\n        Vous l'aurez comprit, définir le nombre de convives va être assez\n        rapidement essentiel. Ce nombre va définir le lieux que vous pourrez\n        sélectionner. Vous allez devoir choisir un lieu adéquat à ce nombre.\n        Rien ne sert de choisir un lieu immense si vous n'êtes qu'un petit\n        nombre. Cela rendrait votre événement froid et impersonnel, voire\n        gênant pour vos invités. À l'inverse si le lieu est trop petit par\n        rapport à votre événement, vos invités ne seront pas à l'aise.\n      ")]),e._v(" "),r("div",{staticClass:"sous_title"},[e._v("4. Le type de réception")]),e._v(" "),r("p",[e._v("\n        Le nombre d'invités va également vous permettre de définir le type de\n        réception possible. Si le nombre d'invités est assez élevé nous vous\n        conseillons de ne pas faire un repas assis qui manquera de\n        convivialité. Néanmoins si vous êtes en plus petit comité ce type\n        d'organisation peut être très bonne pour créer quelque chose de plus\n        intimiste. Selon ce que vous choisirez vous pourrez ainsi orienter vos\n        choix pour le traiteur. Le traiteur que vous choisira devra\n        correspondre à l'ambiance que vous voulez créer. Nous essayons, avec\n        My Terroir, e nous adapter autant que possible aux spécificités de vos\n        événements.\n      ")])]),e._v(" "),r("div",{staticClass:"img_article"},[r("img",{attrs:{src:n(460),alt:""}})]),e._v(" "),r("div",{staticClass:"content_article"},[r("div",{staticClass:"sous_title"},[e._v("5. Le lieu")]),e._v(" "),r("p",[e._v("\n        Le lieu va être très important et interdépendant des éléments cités\n        précédemment. Ce dernier va également dépendre de l'atmosphère que\n        vous voulez créer lors de votre événement. De plus, si vous avez mit\n        en place un thème à votre soirée nous vous conseillons d'adapter ce\n        dernier par rapport à la thématique choisit. Selon l'occasion de cet\n        événements certains lieux selon à valoriser. Nous vous conseillons par\n        exemple si vous organiser un gala ou un diners de remerciement de\n        choisir un lieu type hotel de prestige ou un espace prévu aux\n        événements. Au contraire si votre événement est moins formel vous\n        pouvez très bien organiser ce dernier dans vos locaux, en extérieur ou\n        encore chez vous.\n      ")]),e._v(" "),r("div",{staticClass:"sous_title"},[e._v("6. Les invitations")]),e._v(" "),r("p",[e._v("\n        N'oubliez surtout pas de prévenir vos invités à temps. Et pensez\n        également à choisir une date stratégique. Oubliez les week-end de\n        ponts ou de fêtes. Il sera de très bon goût d'envoyer des invitations\n        papiers à vos convives.\n      ")])])])}],o={components:{Newsletter:n(338).a}},l=(n(461),n(16)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),e._v(" "),n("Newsletter")],1)}),r,!1,null,"f9451ada",null);t.default=component.exports}}]);