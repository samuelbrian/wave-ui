var t=Object.defineProperty,e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,r=(e,n,a)=>n in e?t(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,o=(t,o)=>{for(var s in o||(o={}))n.call(o,s)&&r(t,s,o[s]);if(e)for(var s of e(o))a.call(o,s)&&r(t,s,o[s]);return t};import{n as s,A as i,F as l}from"./index.2523cd5c.js";import"./vendor.f7aaafb3.js";const c={};var m=s({data:()=>({rating1:3,rating2:3.42})},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("title-link",{attrs:{h2:""}},[t._v("Default")]),n("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v("<w-rating></w-rating>\n")]},proxy:!0}])},[n("w-rating")],1),n("title-link",{attrs:{h2:""}},[t._v("V-model")]),n("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-rating v-model="rating1"></w-rating>\n<div class="mt2">\n  <strong class="mr2">v-model:</strong>\n  <code>'+t._s("{{ rating1 }}")+'</code>\n</div>\n\n<w-rating class="mt4" v-model="rating2"></w-rating>\n<div class="mt2">\n  <strong class="mr2">v-model:</strong>\n  <code>'+t._s("{{ rating2 }}")+"</code>\n</div>")]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  rating1: 3,\n  rating2: 3.42\n})\n")]},proxy:!0}])},[n("w-rating",{model:{value:t.rating1,callback:function(e){t.rating1=e},expression:"rating1"}}),n("div",{staticClass:"mt2"},[n("strong",{staticClass:"mr2"},[t._v("v-model:")]),n("code",[t._v(t._s(t.rating1))])]),n("w-rating",{staticClass:"mt4",model:{value:t.rating2,callback:function(e){t.rating2=e},expression:"rating2"}}),n("div",{staticClass:"mt2"},[n("strong",{staticClass:"mr2"},[t._v("v-model:")]),n("code",[t._v(t._s(t.rating2))])])],1),n("title-link",{attrs:{h2:""}},[t._v("Color")]),t._m(0),n("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-rating\n  class="my2"\n  color="green">\n</w-rating>\n\n<br />\n\n<w-rating\n  class="my2"\n  bg-color="light-green"\n  color="yellow">\n</w-rating>\n')]},proxy:!0}])},[n("w-rating",{staticClass:"my2",attrs:{color:"green"}}),n("br"),n("w-rating",{staticClass:"my2",attrs:{"bg-color":"light-green",color:"yellow"}})],1),n("title-link",{attrs:{h2:""}},[t._v("Custom Icons")]),n("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-rating\n  class="my2"\n  icon="mdi mdi-heart"\n  :value="3">\n</w-rating>\n\n<br />\n\n<w-rating\n  class="my2"\n  icon="mdi mdi-heart-outline"\n  :value="3">\n</w-rating>\n')]},proxy:!0}])},[n("w-rating",{staticClass:"my2",attrs:{icon:"mdi mdi-heart",value:3.4}}),n("br"),n("w-rating",{staticClass:"my2",attrs:{icon:"mdi mdi-heart-outline",value:3.4}})],1),n("title-link",{attrs:{h2:"",slug:"max"}},[t._v("Max (number of buttons)")]),t._m(1),n("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-rating class="my2" :value="2" :max="3"></w-rating>\n<br />\n<w-rating class="my2" :value="6" :max="10"></w-rating>\n')]},proxy:!0}])},[n("w-rating",{staticClass:"my2",attrs:{value:2,max:3}}),n("br"),n("w-rating",{staticClass:"my2",attrs:{value:6,max:10}})],1),n("title-link",{attrs:{h2:""}},[t._v("Sizes")]),t._m(2),n("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-rating class="my2" xs></w-rating>\n<br />\n<w-rating class="my2" sm></w-rating>\n<br />\n<w-rating class="my2" md></w-rating>\n<br />\n<w-rating class="my2" lg></w-rating>\n<br />\n<w-rating class="my2" xl></w-rating>\n')]},proxy:!0}])},[n("w-rating",{staticClass:"my2",attrs:{xs:""}}),n("br"),n("w-rating",{staticClass:"my2",attrs:{sm:""}}),n("br"),n("w-rating",{staticClass:"my2",attrs:{md:""}}),n("br"),n("w-rating",{staticClass:"my2",attrs:{lg:""}}),n("br"),n("w-rating",{staticClass:"my2",attrs:{xl:""}})],1),n("title-link",{attrs:{h2:""}},[t._v("Disabled & readonly")]),n("p",[t._v("Use the disabled or readonly options to display a rating but prevent user votes.")]),n("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-rating class="my2" :value="3" disabled></w-rating>\n<br />\n<w-rating class="my2" :value="3" readonly></w-rating>')]},proxy:!0}])},[n("w-rating",{staticClass:"my2",attrs:{value:3,disabled:""}}),n("br"),n("w-rating",{staticClass:"my2",attrs:{value:3,readonly:""}})],1)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Like in most components, you can set a "),n("code",[t._v("color")]),t._v(" for the foreground icons (when on) and a "),n("code",[t._v("bg-color")]),t._v(" for the\nbackground icons when off."),n("br"),t._v("\nThe default background color is grey and the default active color is "),n("code",[t._v("primary")]),t._v(".")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("The number of buttons is set via the "),n("code",[t._v("max")]),t._v(" prop."),n("br"),t._v("\nAs expected, the "),n("code",[t._v("max")]),t._v(" prop also sets the maximum number you can set or display via the\n"),n("span",{staticClass:"code"},[t._v("w-rating")]),t._v(" component."),n("br"),t._v("\nWhen setting a rating, the component will always return an integer between 1 and "),n("code",[t._v("max")]),t._v(" included.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("The rating component's size can be controlled via the preset sizes "),n("code",[t._v("xs")]),t._v(", "),n("code",[t._v("sm")]),t._v(",\n"),n("code",[t._v("md")]),t._v(", "),n("code",[t._v("lg")]),t._v(", "),n("code",[t._v("xl")]),t._v(" or via CSS override.\n")])}],!1,(function(t){for(let e in c)this[e]=c[e]}),null,null,null);m.options.__file="src/documentation/views/ui-components/rating/examples.vue";var d=m.exports;const u={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Dictates the current rating value. When the user rates, the <code>v-model</code> value will be updated.',max:"The total count of buttons (usually stars) to display in the rating component.",icon:"Sets the icon (star by default) of each button of the rating component.<br>Accepts a string: e.g. <code>mdi mdi-home</code>.",color:'Sets the color of the rating active icons (when hovering or when showing the current rating).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:'Sets color of the background icons (grey by default).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',xs:"Sets the size of the rating component (font-size).",sm:"Sets the size of the rating component (font-size).",md:"Sets the size of the rating component (font-size).",lg:"Sets the size of the rating component (font-size).",xl:"Sets the size of the rating component (font-size).",noRipple:"Removes the ripple animation on click of one of the buttons.",name:"Provide a native HTML <code>name</code> attribute to the rating component. If not provided, a unique name will be computed.",disabled:"Disables the rating component making it unreactive to user interactions.",readonly:"The rating component will still look like an interactive rating component except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the rating component.",validators:'<span class="deep-orange">Only for validation, when the rating component is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the rating component. Each function will be executed on rating component validation and should return true when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the rating component.'},g={item:{description:"Provide a custom content for each item.",params:{index:"The item index, starting at 1."}}},p={input:{description:"Emitted each time the rating changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Number]":"The current rating."}},"update:modelValue":{description:"Emitted each time the rating changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Number]":"The current rating."}},focus:{description:"Emitted when the rating component is focused (any button).",params:{"[DOM event object]":"The associated focus DOM event."}},blur:{description:"Emitted when the rating component is blurred (any button).",params:{"[DOM event object]":"The associated blur DOM event."}}},v={};var h=s({data:()=>({propsDescs:u,slots:g}),computed:{props:()=>o(o({},i.props),l.props),events:()=>i.emits.reduce(((t,e)=>(t[e]=p[e]||{})&&t),{})}},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"w-divider my12"}),n("title-link",{staticClass:"title1",attrs:{h2:""}},[t._v("API")]),n("component-api",{staticClass:"mt0",attrs:{items:t.props,descriptions:t.propsDescs,title:"Props"}}),n("component-api",{attrs:{items:t.slots,title:"Slots"}}),n("component-api",{attrs:{items:t.events,title:"Events"}})],1)}),[],!1,(function(t){for(let e in v)this[e]=v[e]}),null,null,null);h.options.__file="src/documentation/views/ui-components/rating/api.vue";var f=h.exports;const b={};var w=s({components:{Examples:d,Api:f}},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("ui-component-title",{attrs:{slug:"w-rating"}},[t._v("w-rating")]),n("examples"),n("api")],1)}),[],!1,(function(t){for(let e in b)this[e]=b[e]}),null,null,null);w.options.__file="src/documentation/views/ui-components/rating/index.vue";var _=w.exports;export default _;
