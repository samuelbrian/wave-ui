import{n as t,O as a}from"./index.2523cd5c.js";import"./vendor.f7aaafb3.js";const s={};var o=t({data:()=>({colors:a,horizontal:!1})},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("main",[s("title-link",{staticClass:"mt4",attrs:{h1:""}},[t._v("Colors")]),t._m(0),t._m(1),s("p",[t._v("This way, it is possible to mix a background color with a different\ntext color of your choice.\n")]),s("title-link",{attrs:{h2:""}},[t._v("Status colors")]),t._m(2),s("alert",{staticClass:"mb12",attrs:{warning:""}},[t._v("The four status colors are considered dark and will therefore have a white text by default when used as a background color.\nYou can override this via CSS.\n")]),s("h3",[t._v("Status colors shades")]),t._m(3),s("title-link",{attrs:{h2:"",slug:"primary-secondary-and-your-own-colors-and-shades"}},[s("span",{staticClass:"code"},[t._v("primary")]),t._v(", "),s("span",{staticClass:"code"},[t._v("secondary")]),t._v(" and your own colors & shades")]),t._m(4),s("w-flex",{staticClass:"text-center",attrs:{wrap:"",gap:4}},[s("div",{staticClass:"color primary-light3--bg title3 grow basis-zero py3 white body"},[t._v("primary-light3")]),s("div",{staticClass:"color primary-light2--bg title3 grow basis-zero py3 white body"},[t._v("primary-light2")]),s("div",{staticClass:"color primary-light1--bg title3 grow basis-zero py3 white body"},[t._v("primary-light1")]),s("div",{staticClass:"color primary--bg title3 grow basis-zero py3 white"},[t._v("primary")]),s("div",{staticClass:"color primary-dark1--bg title3 grow basis-zero py3 white body"},[t._v("primary-dark1")]),s("div",{staticClass:"color primary-dark2--bg title3 grow basis-zero py3 white body"},[t._v("primary-dark2")]),s("div",{staticClass:"color primary-dark3--bg title3 grow basis-zero py3 white body"},[t._v("primary-dark3")])]),s("alert",{attrs:{warning:""}},[t._v("The primary color is considered dark by default, and will render,\nas well as its 3 darker shades, with a white text when used as a background color.\n")]),s("p",{staticClass:"mt6 title3"},[t._v("To start defining your own colors add them to the WaveUI options:")]),s("ssh-pre",{attrs:{language:"js"}},[t._v("const waveui = new WaveUI({\n  colors: {\n    primary: '#9ac332',\n    secondary: '#5d9a26'\n  }\n})\n")]),s("alert",{attrs:{tip:""}},[t._v("If you don't need it, you can add "),s("code",[t._v("disableColorShades: true")]),t._v(" to the Wave UI options to disable\nthe color shades computing of the status colors and your custom colors.\n")]),s("title-link",{staticClass:"mt12 mb4 w-flex align-center",attrs:{h2:"",slug:"color-palette"}},[t._v("Color Palette"),s("w-button",{staticClass:"ml6",attrs:{"bg-color":"primary",sm:"",dark:""},on:{click:function(a){a.preventDefault(),t.horizontal=!t.horizontal}}},[t._v(t._s(t.horizontal?"Vertical":"Horizontal")+" display")])],1),s("p",[t._v("This built-in color palette will complete your collection of available colors for fast and easy designs.\n")]),s("div",{staticClass:"text-center",class:t.horizontal?"horizontal":"vertical"},[s("div",{staticClass:"w-flex wrap ma-2 basis-zero"},[t._l(t.colors,(function(a,o){var r=a.color,e=a.label,l=a.shades;return s("div",{key:o,staticClass:"color-palette ma2"},[t._l(l,(function(a,o){return[5===o?s("div",{staticClass:"color color--top",class:e+"--bg"},[s("span",[t._v(t._s(e))]),s("small",[t._v(t._s(r))])]):t._e(),s("div",{key:o,staticClass:"color color--shade",class:[a.label+"--bg",o>=5?"color--darker":""]},[s("span",[t._v(t._s(a.label))]),s("small",[t._v(t._s(a.color))])])]}))],2)})),s("div",{staticClass:"color-palette ma2"},[s("div",{staticClass:"w-flex ma-2",class:{column:!t.horizontal}},[t._m(5),t._m(6),t._m(7),t._m(8)])])],2)]),s("title-link",{attrs:{h2:""}},[t._v("Your own CSS color classes")]),t._m(9),s("ssh-pre",{attrs:{language:"css"}},[t._v(".pale-green {color: #eafddd;}\n.pale-blue--bg {background-color: #e3ffff;}\n")]),s("p",[t._v("...and use it on a component like this:")]),s("ssh-pre",{attrs:{language:"html-vue"}},[t._v('<w-tag color="pale-green" bg-color="pale-blue">tag</w-tag>')])],1)}),[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[t._v("Wave UI colors work in a very simple way: for instance the class\n"),s("code",[t._v("pink")]),t._v(" (or any color listed bellow) can be applied to any\nelement's text, and the class "),s("code",[t._v("pink--bg")]),t._v(" can be applied to\nany element's background.\n")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[t._v("All the components that accept colors, will accept the "),s("code",[t._v("color")]),t._v("\nprop for the text color, and "),s("code",[t._v("bg-color")]),t._v(" for the background when applicable.\n")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"w-flex wrap ma-2 text-center basis-zero"},[s("div",{staticClass:"color success--bg title3 grow py3 ma2"},[t._v("success")]),s("div",{staticClass:"color error--bg title3 grow py3 ma2"},[t._v("error")]),s("div",{staticClass:"color warning--bg title3 grow py3 ma2"},[t._v("warning")]),s("div",{staticClass:"color info--bg title3 grow py3 ma2"},[t._v("info")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"w-flex wrap mb12 ma-2 text-center basis-zero"},[s("div",{staticClass:"w-flex wrap"},[s("div",{staticClass:"color success-light3--bg title3 py3 ma2 body xs12"},[t._v("success-light3")]),s("div",{staticClass:"color success-light2--bg title3 py3 ma2 body xs12"},[t._v("success-light2")]),s("div",{staticClass:"color success-light1--bg title3 py3 ma2 body xs12"},[t._v("success-light1")]),s("div",{staticClass:"color success-dark1--bg title3 py3 ma2 white body xs12"},[t._v("success-dark1")]),s("div",{staticClass:"color success-dark2--bg title3 py3 ma2 white body xs12"},[t._v("success-dark2")]),s("div",{staticClass:"color success-dark3--bg title3 py3 ma2 white body xs12"},[t._v("success-dark3")])]),s("div",{staticClass:"w-flex wrap"},[s("div",{staticClass:"color error-light3--bg title3 py3 ma2 body xs12"},[t._v("error-light3")]),s("div",{staticClass:"color error-light2--bg title3 py3 ma2 body xs12"},[t._v("error-light2")]),s("div",{staticClass:"color error-light1--bg title3 py3 ma2 body xs12"},[t._v("error-light1")]),s("div",{staticClass:"color error-dark1--bg title3 py3 ma2 white body xs12"},[t._v("error-dark1")]),s("div",{staticClass:"color error-dark2--bg title3 py3 ma2 white body xs12"},[t._v("error-dark2")]),s("div",{staticClass:"color error-dark3--bg title3 py3 ma2 white body xs12"},[t._v("error-dark3")])]),s("div",{staticClass:"w-flex wrap"},[s("div",{staticClass:"color warning-light3--bg title3 py3 ma2 body xs12"},[t._v("warning-light3")]),s("div",{staticClass:"color warning-light2--bg title3 py3 ma2 body xs12"},[t._v("warning-light2")]),s("div",{staticClass:"color warning-light1--bg title3 py3 ma2 body xs12"},[t._v("warning-light1")]),s("div",{staticClass:"color warning-dark1--bg title3 py3 ma2 white body xs12"},[t._v("warning-dark1")]),s("div",{staticClass:"color warning-dark2--bg title3 py3 ma2 white body xs12"},[t._v("warning-dark2")]),s("div",{staticClass:"color warning-dark3--bg title3 py3 ma2 white body xs12"},[t._v("warning-dark3")])]),s("div",{staticClass:"w-flex wrap"},[s("div",{staticClass:"color info-light3--bg title3 py3 ma2 body xs12"},[t._v("info-light3")]),s("div",{staticClass:"color info-light2--bg title3 py3 ma2 body xs12"},[t._v("info-light2")]),s("div",{staticClass:"color info-light1--bg title3 py3 ma2 body xs12"},[t._v("info-light1")]),s("div",{staticClass:"color info-dark1--bg title3 py3 ma2 white body xs12"},[t._v("info-dark1")]),s("div",{staticClass:"color info-dark2--bg title3 py3 ma2 white body xs12"},[t._v("info-dark2")]),s("div",{staticClass:"color info-dark3--bg title3 py3 ma2 white body xs12"},[t._v("info-dark3")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[t._v("In addition to the built-in status colors and color palette bellow, you can define a set\nof custom colors."),s("br"),t._v("\nThe primary color, and whichever color you add, will also be computed to 6 different shades:\n3 lighter ones and 3 darker ones."),s("br"),t._v("\nMore shades would most likely be redundant with the color palette.\n")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"color color--top ma2 black--bg"},[s("span",[t._v("black")]),s("small",[t._v("#000")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"color color--top ma2 white--bg black"},[s("span",[t._v("white")]),s("small",[t._v("#fff")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"color color--top ma2 transparent--bg black"},[s("span",[t._v("transparent")]),s("small",[t._v("transparent")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"color color--top ma2 inherit--bg black"},[s("span",[t._v("inherit")]),s("small",[t._v("inherit")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[t._v("All the presented colors above are here to make you go faster when you need a color."),s("br"),t._v("\nBut you are completely free to define CSS classes in your CSS to associate a color to a class."),s("br"),t._v("\nFor instance, you can define:")])}],!1,(function(t){for(let a in s)this[a]=s[a]}),null,null,null);o.options.__file="src/documentation/views/colors.vue";var r=o.exports;export default r;
