var t=Object.defineProperty,e=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,n=(e,s,a)=>s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a,l=(t,l)=>{for(var i in l||(l={}))s.call(l,i)&&n(t,i,l[i]);if(e)for(var i of e(l))a.call(l,i)&&n(t,i,l[i]);return t};import{n as i,G as o,F as c}from"./index.2523cd5c.js";import"./vendor.f7aaafb3.js";const r={};var h=i({data:()=>({value:!0})},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("title-link",{attrs:{h2:"",slug:"on-off-and-disabled"}},[t._v("On, off & disabled")]),s("example",{attrs:{"content-class":"pt4"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-switch\n  class="ma2"\n  :value="true"\n  label="On">\n</w-switch>\n\n<w-switch\n  class="ma2"\n  :value="false"\n  label="Off">\n</w-switch>\n\n<w-switch\n  class="ma2"\n  :value="true"\n  disabled\n  label="On disabled">\n</w-switch>\n\n<w-switch\n  class="ma2"\n  :value="false"\n  disabled\n  label="Off disabled">\n</w-switch>\n')]},proxy:!0}])},[s("w-switch",{staticClass:"ma2",attrs:{value:!0,label:"On"}}),s("w-switch",{staticClass:"ma2",attrs:{value:!1,label:"Off"}}),s("w-switch",{staticClass:"ma2",attrs:{value:!0,disabled:"",label:"On disabled"}}),s("w-switch",{staticClass:"ma2",attrs:{value:!1,disabled:"",label:"Off disabled"}})],1),s("title-link",{attrs:{h2:""}},[t._v("V-model")]),s("example",{attrs:{"content-class":"w-flex wrap align-center"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-switch class="mr6" v-model="value"></w-switch>\n<span class="title3 mb0">\n  v-model value:\n  <code class="ml2">'+t._s("{{ value }}")+"</code>\n</span>")]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  value: true\n})\n")]},proxy:!0}])},[s("w-switch",{staticClass:"mr6",model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),s("span",{staticClass:"title3 mb0"},[t._v("v-model value:"),s("code",{staticClass:"ml2"},[t._v(t._s(t.value))])])],1),s("title-link",{attrs:{h2:""}},[t._v("Colors")]),s("example",{attrs:{"content-class":"pt4"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-switch\n  class="ma2"\n  :value="true"\n  color="pink">\n</w-switch>\n\n<w-switch\n  class="ma2"\n  :value="true"\n  color="error">\n</w-switch>\n\n<w-switch\n  class="ma2"\n  :value="true"\n  color="warning">\n</w-switch>\n\n<w-switch\n  class="ma2"\n  :value="true"\n  color="success">\n</w-switch>\n\n<w-switch\n  class="ma2"\n  :value="true"\n  color="info">\n</w-switch>\n')]},proxy:!0}])},[s("w-switch",{staticClass:"ma2",attrs:{value:!0,color:"pink"}}),s("w-switch",{staticClass:"ma2",attrs:{value:!0,color:"error"}}),s("w-switch",{staticClass:"ma2",attrs:{value:!0,color:"warning"}}),s("w-switch",{staticClass:"ma2",attrs:{value:!0,color:"success"}}),s("w-switch",{staticClass:"ma2",attrs:{value:!0,color:"info"}})],1),s("title-link",{attrs:{h2:""}},[t._v("Thin version")]),s("example",{attrs:{"content-class":"pt5"},scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-switch\n  class="ma2"\n  :value="true"\n  thin label="On">\n</w-switch>\n\n<w-switch\n  class="ma2"\n  :value="false"\n  thin label="Off">\n</w-switch>\n\n<w-switch\n  class="ma2"\n  :value="true"\n  disabled\n  thin\n  label="On disabled">\n</w-switch>\n\n<w-switch\n  class="ma2"\n  :value="false"\n  disabled\n  thin\n  label="Off disabled">\n</w-switch>')]},proxy:!0}])},[s("w-switch",{staticClass:"ma2",attrs:{value:!0,thin:"",label:"On"}}),s("w-switch",{staticClass:"ma2",attrs:{value:!1,thin:"",label:"Off"}}),s("w-switch",{staticClass:"ma2",attrs:{value:!0,disabled:"",thin:"",label:"On disabled"}}),s("w-switch",{staticClass:"ma2",attrs:{value:!1,disabled:"",thin:"",label:"Off disabled"}})],1)],1)}),[],!1,(function(t){for(let e in r)this[e]=r[e]}),null,null,null);h.options.__file="src/documentation/views/ui-components/switch/examples.vue";var u=h.exports;const w={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Dictates the state of the switch. When the user toggles the switch, the <code>v-model</code> value will be updated.',label:"Sets a visible label for the switch.",labelOnLeft:"Moves the label to the left of the switch. By default the label is displayed on the right.",color:'Applies a color to the switch. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',thin:"Applies a thiner style to the switch.",noRipple:"Removes the ripple animation on activation.",name:"Provide a native HTML <code>name</code> attribute to the switch. If not provided, a unique name will be computed.",disabled:"Disables the switch making it unreactive to user interactions.",readonly:"The switch will still look like an interactive switch except that it is read-only: its current state cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the switch.",validators:'<span class="deep-orange">Only for validation, when the switch is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the switch. Each function will be executed on switch validation and should return true when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the switch.'},d={default:{description:"The switch label content, if the label prop is not flexible enough."}},p={input:{description:"Emitted each time the state of the switch changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Boolean]":"A boolean representing the current state of the switch."}},"update:modelValue":{description:"Emitted each time the state of the switch changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Boolean]":"A boolean representing the current state of the switch."}},focus:{description:"Emitted on switch focus.",params:{"[DOM event object]":"The associated focus DOM event."}}},v={};var m=i({data:()=>({propsDescs:w,slots:d}),computed:{props:()=>l(l({},o.props),c.props),events:()=>o.emits.reduce(((t,e)=>(t[e]=p[e]||{})&&t),{})}},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"w-divider my12"}),s("title-link",{staticClass:"title1",attrs:{h2:""}},[t._v("API")]),s("component-api",{staticClass:"mt0",attrs:{items:t.props,descriptions:t.propsDescs,title:"Props"}}),s("component-api",{attrs:{items:t.slots,title:"Slots"}}),s("component-api",{attrs:{items:t.events,title:"Events"}})],1)}),[],!1,(function(t){for(let e in v)this[e]=v[e]}),null,null,null);m.options.__file="src/documentation/views/ui-components/switch/api.vue";var f=m.exports;const b={};var _=i({components:{Examples:u,Api:f}},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",[s("ui-component-title",[t._v("w-switch")]),s("examples"),s("api")],1)}),[],!1,(function(t){for(let e in b)this[e]=b[e]}),null,null,null);_.options.__file="src/documentation/views/ui-components/switch/index.vue";var g=_.exports;export default g;
