(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["referencias","chunk-515a8379"],{"0095":function(t,n,e){"use strict";e("95c5")},"13aa":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container-fluid banner-interno"},[e("div",{staticClass:"banner-interno__fondo",style:{"background-image":"url("+t.globalData.fondoBannerPrincipal+")"}}),e("div",{staticClass:"container"},[e("div",{staticClass:"banner-interno__titulo py-5"},[t.icono.length?e("div",{staticClass:"banner-interno__titulo__icono me-3"},[e("i",{class:t.icono})]):t._e(),e("h2",{staticClass:"mb-0",domProps:{innerHTML:t._s(t.titulo)}})])])])},r=[],i={name:"BannerInterno",props:{icono:{type:String,default:""},titulo:{type:String,default:""}},data:function(){return{}},computed:{globalData:function(){return this.$config.global}}},s=i,o=(e("0095"),e("2877")),c=Object(o["a"])(s,a,r,!1,null,null,null);n["default"]=c.exports},"3cb4":function(t,n,e){"use strict";e("ddc8")},"4e82":function(t,n,e){"use strict";var a=e("23e7"),r=e("1c0b"),i=e("7b0b"),s=e("d039"),o=e("a640"),c=[],l=c.sort,u=s((function(){c.sort(void 0)})),f=s((function(){c.sort(null)})),d=o("sort"),p=u||!f||!d;a({target:"Array",proto:!0,forced:p},{sort:function(t){return void 0===t?l.call(i(this)):l.call(i(this),r(t))}})},"64ef":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"curso-main-container referencias"},[e("BannerInterno",{attrs:{icono:"fas fa-book",titulo:"Referencias bibliográficas"}}),e("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},t._l(t.orderedData,(function(n){return e("div",{key:n.link,staticClass:"referencias__item"},[e("span",{domProps:{innerHTML:t._s(n.referencia)}}),n.link?e("a",{staticClass:"ms-1",attrs:{href:n.link,target:"_blank"}},[e("span",{domProps:{innerHTML:t._s(n.link)}}),e("i",{staticClass:"ms-1 fas fa-external-link-alt"})]):t._e(),e("hr",{staticClass:"my-3"})])})),0)],1)},r=[],i=e("2909"),s=(e("4e82"),e("13aa")),o=e("ecc5"),c={name:"Referencias",components:{BannerInterno:s["default"]},mixins:[o["a"]],computed:{referenciasData:function(){return this.$config.referencias},orderedData:function(){var t=this,n=Object(i["a"])(this.referenciasData).sort((function(n,e){var a=t.quitarAcentos(n.referencia.split(" ")[0].toLowerCase()),r=t.quitarAcentos(e.referencia.split(" ")[0].toLowerCase());return a<r?-1:a>r?1:0}));return n}}},l=c,u=(e("3cb4"),e("2877")),f=Object(u["a"])(l,a,r,!1,null,null,null);n["default"]=f.exports},"95c5":function(t,n,e){},a640:function(t,n,e){"use strict";var a=e("d039");t.exports=function(t,n){var e=[][t];return!!e&&a((function(){e.call(null,n||function(){throw 1},1)}))}},ddc8:function(t,n,e){}}]);
//# sourceMappingURL=referencias.1a13f81d.js.map