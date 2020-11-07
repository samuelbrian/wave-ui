(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["drawer-index-vue","drawer-api-vue","drawer-examples-vue"],{"0b51":function(e,t,o){"use strict";var r=o("45c6"),n=o.n(r);n.a},"45c6":function(e,t,o){},"4fb0":function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"w-divider my12"}),o("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),o("api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),o("api",{attrs:{items:e.slots,title:"Slots"}}),o("api",{attrs:{items:e.events,title:"Events"}})],1)},n=[],a=(o("13d5"),o("7195")),s={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>This prop controls the visibility of the drawer. Any truthy value will show the drawer whereas any falsy value will hide it.',left:"Places the drawer at the left of the screen, or at the left of its container when the <code>absolute</code> prop is set to true.",right:"Places the drawer at the right of the screen, or at the right of its container when the <code>absolute</code> prop is set to true.",top:"Places the drawer at the top of the screen, or at the top of its container when the <code>absolute</code> prop is set to true.",bottom:"Places the drawer at the bottom of the screen, or at the bottom of its container when the <code>absolute</code> prop is set to true.",persistent:"When set to true, clicking outside of the drawer or pressing the escape key will not close the drawer.<br>A bounce animation will give the user a feedback that this drawer needs attention and cannot be closed.",persistentNoAnimation:"When this and the <code>persistent</code> props are set to true, clicking outside of the drawer or pressing the escape key will not trigger the default bounce animation (no feedback is given to the user).",pushContent:"The <code>push-content</code> prop can be used on <code>left</code> and <code>right</code> positions.<br>It will allow the drawer to push the content either on the left or right when it's open.<br>To use the push-content layout, an explicit drawer <code>width</code> is required (don't only set a width via CSS). Any valid CSS width will work.<br>The pushable content should be provided via the <code>pushable</code> slot.",fitContent:"Fits the drawer to its content (sets the width and height to auto).",width:"Sets a width on the drawer when its position is <code>left</code> or <code>right</code>.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",height:"Sets a height on the drawer when its position is <code>top</code> or <code>bottom</code>.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",absolute:"Sets the CSS position of the drawer container to <code>absolute</code>.",zIndex:"Applies a z-index (positive or negative integer) to the drawer.",color:'Applies a color to the drawer\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:'Applies a color to the drawer\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',noOverlay:"Removes the default full screen overlay underneath the open drawer.",overlayColor:'Provide a custom background color for the drawer background overlay (<code>rgba(0, 0, 0, 0.3)</code> by default).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',overlayOpacity:"Provide a custom opacity for the drawer background overlay."},l={default:{description:"The drawer content."},pushable:{description:"When using the <code>push-content</code> prop, defines the outside HTML content to be pushed by the drawer when it opens."}},i={input:"Emitted on drawer close.<br>Updates the v-model value in Vue 2.x only.","update:modelValue":"Emitted on drawer close.<br>Updates the v-model value in Vue 3 only.",close:"Emitted on drawer close."},c={data:function(){return{propsDescs:s,slots:l}},computed:{props:function(){return a["a"].props},events:function(){return a["a"].emits.reduce((function(e,t){return(e[t]={description:i[t]||""})&&e}),{})}}},w=c,u=o("2877"),h=Object(u["a"])(w,r,n,!1,null,null,null);t["default"]=h.exports},efc6:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("main",[o("ui-component-title",[e._v("w-drawer")]),o("examples"),o("api")],1)},n=[],a=o("ffdd"),s=o("4fb0"),l={components:{Examples:a["default"],Api:s["default"]}},i=l,c=o("2877"),w=Object(c["a"])(i,r,n,!1,null,null,null);t["default"]=w.exports},ffdd:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("title-link",{attrs:{h2:""}},[e._v("Positions")]),o("example",{attrs:{"content-class":"w-flex align-center wrap"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-button.ma1(\n  @click="showDrawer = \'left\'"\n  outline\n  color="primary") Show left drawer\nw-button.ma1(\n  @click="showDrawer = \'right\'"\n  outline\n  color="primary") Show right drawer\nw-button.ma1(\n  @click="showDrawer = \'top\'"\n  outline\n  color="primary") Show top drawer\nw-button.ma1(\n  @click="showDrawer = \'bottom\'"\n  outline\n  color="primary") Show bottom drawer\n\nw-drawer(\n  :value="!!showDrawer"\n  :[position]="true"\n  @close="showDrawer = false")\n  w-button.button--close(\n    @click="showDrawer = false"\n    sm\n    outline\n    round\n    absolute\n    color="primary"\n    icon="wi-cross")\n')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  showDrawer: false\n}),\n\ncomputed: {\n  position () {\n    return this.showDrawer || 'right'\n  }\n}\n")]},proxy:!0}])},[o("w-button",{staticClass:"ma1",attrs:{outline:"",color:"primary"},on:{click:function(t){e.showLeftDrawer=!e.showLeftDrawer}}},[e._v("Show left drawer")]),o("w-button",{staticClass:"ma1",attrs:{outline:"",color:"primary"},on:{click:function(t){e.showRightDrawer=!e.showRightDrawer}}},[e._v("Show right drawer")]),o("w-button",{staticClass:"ma1",attrs:{outline:"",color:"primary"},on:{click:function(t){e.noOverlay=!1,e.showTopDrawer=!e.showTopDrawer}}},[e._v("Show top drawer")]),o("w-button",{staticClass:"ma1",attrs:{outline:"",color:"primary"},on:{click:function(t){e.showBottomDrawer=!e.showBottomDrawer}}},[e._v("Show bottom drawer")])],1),o("title-link",{attrs:{h3:""}},[e._v("Absolute position")]),e._m(0),o("example",{attrs:{"content-class":"relative"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-button.my12(\n  @click="showDrawer = !showDrawer"\n  outline\n  color="primary") Show drawer\nw-drawer(v-model="showDrawer" absolute width="160px")')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  showDrawer: false\n})\n")]},proxy:!0}])},[o("w-button",{staticClass:"my12",attrs:{outline:"",color:"primary"},on:{click:function(t){e.showAbsoluteDrawer=!e.showAbsoluteDrawer}}},[e._v("Show drawer")]),o("w-drawer",{attrs:{absolute:"",width:"160px"},model:{value:e.showAbsoluteDrawer,callback:function(t){e.showAbsoluteDrawer=t},expression:"showAbsoluteDrawer"}})],1),o("title-link",{attrs:{h2:""}},[e._v("Control width or height")]),e._m(1),e._m(2),o("example",{attrs:{"content-class":"w-flex align-center"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-button(\n  @click="showDrawer = true"\n  outline\n  color="primary") Show a 60px height bottom drawer\n\nw-drawer(v-model="showDrawer" bottom height="60px")\n  w-button.button--close(\n    @click="showDrawer = false"\n    sm\n    outline\n    round\n    absolute\n    color="primary"\n    icon="wi-cross")')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  showDrawer: false\n})\n")]},proxy:!0}])},[o("w-button",{attrs:{outline:"",color:"primary"},on:{click:function(t){e.bottomDrawerHeight="60px",e.showBottomDrawer=!e.showBottomDrawer}}},[e._v("Show a 60px height bottom drawer")])],1),o("title-link",{attrs:{h2:""}},[e._v("Push content")]),e._m(3),o("example",{attrs:{"content-class":"relative pa0"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-drawer(v-model="showDrawer" push-content :overlay-opacity="0.15" width="160px")\n  template(#pushable="")\n    .py12.w-flex.column.align-center.justify-center\n      p Pushable content\n      w-button(\n        @click="showDrawer = !showDrawer"\n        outline\n        color="primary") Show drawer\n  .ma2 Drawer content')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  showDrawer: false\n})\n")]},proxy:!0}])},[o("w-drawer",{attrs:{"push-content":"","overlay-opacity":.15,width:"160px"},scopedSlots:e._u([{key:"pushable",fn:function(){return[o("div",{staticClass:"py12 w-flex column align-center justify-center"},[o("p",[e._v("Pushable content")]),o("w-button",{attrs:{outline:"",color:"primary"},on:{click:function(t){e.showPushContentRightDrawer=!e.showPushContentRightDrawer}}},[e._v("Show drawer")])],1)]},proxy:!0}]),model:{value:e.showPushContentRightDrawer,callback:function(t){e.showPushContentRightDrawer=t},expression:"showPushContentRightDrawer"}},[o("div",{staticClass:"ma2"},[e._v("Drawer content")])])],1),o("example",{attrs:{"content-class":"relative pa0"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-drawer(v-model="showDrawer" push-content :overlay-opacity="0.15" left width="160px")\n  template(#pushable="")\n    .py12.w-flex.column.align-center.justify-center\n      p Pushable content\n      w-button(\n        @click="showDrawer = !showDrawer"\n        outline\n        color="primary") Show drawer\n  .ma2 Drawer content')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  showDrawer: false\n})\n")]},proxy:!0}])},[o("w-drawer",{attrs:{"push-content":"","overlay-opacity":.15,left:"",width:"160px"},scopedSlots:e._u([{key:"pushable",fn:function(){return[o("div",{staticClass:"py12 w-flex column align-center justify-center"},[o("p",[e._v("Pushable content")]),o("w-button",{attrs:{outline:"",color:"primary"},on:{click:function(t){e.showPushContentLeftDrawer=!e.showPushContentLeftDrawer}}},[e._v("Show drawer")])],1)]},proxy:!0}]),model:{value:e.showPushContentLeftDrawer,callback:function(t){e.showPushContentLeftDrawer=t},expression:"showPushContentLeftDrawer"}},[o("div",{staticClass:"ma2"},[e._v("Drawer content")])])],1),o("title-link",{attrs:{h2:""}},[e._v("No overlay & custom color overlay")]),o("example",{attrs:{"content-class":"w-flex align-center wrap"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('span Open top drawer with a:\nw-button.ma1(\n  @click="noOverlay = false;overlayColor = \'rgba(35, 71, 129, 0.5&#041;\';showDrawer = !showDrawer"\n  outline\n  color="primary") Custom color overlay\nw-button.ma1(\n  @click="noOverlay = false;overlayColor = \'transparent\';showDrawer = !showDrawer"\n  outline\n  color="primary") Transparent overlay\nw-button.ma1(\n  @click="noOverlay = true;overlayColor = \'\';showDrawer = !showDrawer"\n  outline\n  color="primary") No overlay\n\nw-drawer(v-model="showDrawer" top :no-overlay="noOverlay" :overlay-color="overlayColor")\n  w-button.button--close(\n    @click="showDrawer = false"\n    sm\n    outline\n    absolute\n    round\n    color="primary"\n    icon="wi-cross")')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  showDrawer: false,\n  noOverlay: false,\n  overlayColor: ''\n})\n")]},proxy:!0}])},[o("span",[e._v("Open top drawer with a:")]),o("w-button",{staticClass:"ma1",attrs:{outline:"",color:"primary"},on:{click:function(t){e.noOverlay=!1,e.overlayColor="rgba(35, 71, 129, 0.5)",e.showTopDrawer=!e.showTopDrawer}}},[e._v("Custom color overlay")]),o("w-button",{staticClass:"ma1",attrs:{outline:"",color:"primary"},on:{click:function(t){e.noOverlay=!1,e.overlayColor="transparent",e.showTopDrawer=!e.showTopDrawer}}},[e._v("Transparent overlay")]),o("w-button",{staticClass:"ma1",attrs:{outline:"",color:"primary"},on:{click:function(t){e.noOverlay=!0,e.overlayColor="",e.showTopDrawer=!e.showTopDrawer}}},[e._v("No overlay")])],1),e._m(4),o("title-link",{attrs:{h2:""}},[e._v("Persistent drawers")]),o("p",[e._v("A persistent drawer stays open when clicking outside or pressing the escape key.")]),o("example",{attrs:{"content-class":"w-flex align-center"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-button(@click="showDrawer = true" outline color="primary")\n  | Persistent drawer\n\nw-drawer(\n  v-model="showDrawer"\n  bottom\n  persistent\n  bg-color="blue-light4")\n  w-button.button--close(\n    sm\n    @click="showDrawer = false"\n    outline\n    absolute\n    round\n    icon="wi-cross")\n  .w-flex.fill-height.align-center.justify-center You can customize the background color as well.')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  showDrawer: false\n})\n")]},proxy:!0}])},[o("w-button",{attrs:{outline:"",color:"primary"},on:{click:function(t){e.persistent=!0,e.showBottomDrawer=!e.showBottomDrawer}}},[e._v("Persistent drawer")])],1),o("title-link",{attrs:{h2:""}},[e._v("Cookie notice example")]),o("p",[e._v("The cookie notice is a good use case of a persistent drawer, it will not let you click\nanything until you accept.")]),o("example",{attrs:{"content-class":"w-flex align-center"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-button(@click="showCookieNotice = true" outline color="primary")\n  | Show the cookie notice\n\nw-drawer(\n  v-model="showCookieNotice"\n  content-class="cookie-notice"\n  overlay-color="transparent"\n  persistent\n  fit-content\n  bottom)\n  .w-flex.pa2.align-center.wrap\n    .w-flex.align-center\n      w-icon.mr3(color="primary" xl) wi-info-circle\n      span.grey-dark3.\n        Our website uses cookies to give you the best user experience.\n        To continue browsing this site you must agree.\n    .spacer\n    w-button(sm bg-color="primary" dark @click="showCookieNotice = false")\n      w-icon.mr2 wi-check\n      | I agree')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  showCookieNotice: false\n})\n")]},proxy:!0}])},[o("w-button",{attrs:{outline:"",color:"primary"},on:{click:function(t){e.showCookieNotice=!0}}},[e._v("Show the cookie notice")]),o("w-drawer",{attrs:{"content-class":"cookie-notice","overlay-color":"transparent",persistent:"","fit-content":"",bottom:""},model:{value:e.showCookieNotice,callback:function(t){e.showCookieNotice=t},expression:"showCookieNotice"}},[o("div",{staticClass:"w-flex pa2 align-center wrap"},[o("div",{staticClass:"w-flex align-center py1"},[o("w-icon",{staticClass:"mr3",attrs:{color:"primary",xl:""}},[e._v("wi-info-circle")]),o("span",{staticClass:"grey-dark3"},[e._v("Our website uses cookies to give you the best user experience.\nTo continue browsing this site you must agree.")])],1),o("div",{staticClass:"spacer"}),o("w-button",{attrs:{sm:"","bg-color":"primary",dark:""},on:{click:function(t){e.showCookieNotice=!1}}},[o("w-icon",{staticClass:"mr2"},[e._v("wi-check")]),e._v("I agree")],1)],1)])],1),o("p",[e._v("You can then store the result of the acceptation in the localStorage.")]),o("ssh-pre",{attrs:{language:"html-vue",label:"Template"}},[e._v('<w-button\n  class="ml-auto"\n  sm\n  bg-color="primary"\n  dark\n  absolute\n  @click="acceptCookies">\n  <w-icon class="mr2">wi-check</w-icon>\n  I agree\n</w-button>\n')]),o("ssh-pre",{attrs:{language:"js",label:"Javascript"}},[e._v("acceptCookies () {\n  localStorage.acceptCookies = 'yes'\n  this.showCookieNotice = false\n}\n")]),o("w-drawer",{attrs:{left:""},model:{value:e.showLeftDrawer,callback:function(t){e.showLeftDrawer=t},expression:"showLeftDrawer"}},[o("w-button",{staticClass:"button--close",attrs:{sm:"",outline:"",absolute:"",round:"",color:"primary",icon:"wi-cross"},on:{click:function(t){e.showLeftDrawer=!e.showLeftDrawer}}}),o("div",{staticClass:"w-flex align-center justify-center fill-height"},[o("w-button",{attrs:{dark:"","bg-color":"primary"},on:{click:function(t){e.showLeftDrawer=!1,e.showRightDrawer=!0}}},[e._v("Show right drawer")])],1)],1),o("w-drawer",{model:{value:e.showRightDrawer,callback:function(t){e.showRightDrawer=t},expression:"showRightDrawer"}},[o("w-button",{staticClass:"button--close",attrs:{sm:"",outline:"",absolute:"",round:"",color:"primary",icon:"wi-cross"},on:{click:function(t){e.showRightDrawer=!e.showRightDrawer}}})],1),o("w-drawer",{attrs:{top:"","no-overlay":e.noOverlay,"overlay-color":e.overlayColor},model:{value:e.showTopDrawer,callback:function(t){e.showTopDrawer=t},expression:"showTopDrawer"}},[o("w-button",{staticClass:"button--close",attrs:{sm:"",outline:"",absolute:"",round:"",color:"primary",icon:"wi-cross"},on:{click:function(t){e.showTopDrawer=!e.showTopDrawer}}})],1),o("w-drawer",{attrs:{bottom:"",persistent:e.persistent,height:e.bottomDrawerHeight,"bg-color":"blue-light4"},on:{close:function(t){e.bottomDrawerHeight=null,e.persistent=!1}},model:{value:e.showBottomDrawer,callback:function(t){e.showBottomDrawer=t},expression:"showBottomDrawer"}},[o("w-button",{staticClass:"button--close",attrs:{sm:"",outline:"",absolute:"",round:"",icon:"wi-cross"},on:{click:function(t){e.showBottomDrawer=!e.showBottomDrawer}}}),o("div",{staticClass:"w-flex fill-height align-center justify-center"},[e._v("You can customize the background color as well.")])],1)],1)},n=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("The "),o("span",{staticClass:"code"},[e._v("w-drawer")]),e._v(" component can be placed in a deeper structure than the root of\nthe site."),o("br"),e._v("\nWhen using the "),o("code",[e._v("absolute")]),e._v(" position, don't forget to put an "),o("code",[e._v("overflow: hidden")]),e._v("\non the parent to prevent a scrollbar to appear.")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("The "),o("span",{staticClass:"code"},[e._v("w-drawer")]),e._v(" component accepts a "),o("span",{staticClass:"code"},[e._v("width")]),e._v(" or "),o("span",{staticClass:"code"},[e._v("height")]),e._v(" parameter\ndepending on its position on screen to override the default one.")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",{staticClass:"grey-light1"},[o("span",{staticClass:"code grey-light1"},[e._v("width")]),e._v(" and "),o("span",{staticClass:"code grey-light1"},[e._v("height")]),e._v(" are called so for simplicity but\nthey internally translate to "),o("span",{staticClass:"code grey-light1"},[e._v("max-width")]),e._v(" and "),o("span",{staticClass:"code grey-light1"},[e._v("max-height")]),e._v("\nto fit on small screens.\n")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("The "),o("code",[e._v("push-content")]),e._v(" prop can be used on "),o("code",[e._v("left")]),e._v(" and "),o("code",[e._v("right")]),e._v(" positions.\nIt will allow the drawer to push the content either on the left or right when it's open."),o("br"),e._v("\nTo use the push-content layout, an explicit drawer "),o("code",[e._v("width")]),e._v(" is required (don't only set a\nwidth via CSS). Any valid CSS width will work."),o("br"),e._v("\nThe pushable content should be provided via the "),o("code",[e._v("pushable")]),e._v(" slot.")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",{staticClass:"mt4"},[o("strong",[e._v("Note:")]),e._v(" with no overlay the underneath content will be clickable and the drawer\nwill not close.\nTo allow closing the drawer when clicking outside of it, you can set a transparent background\non the overlay.\n")])}],a={data:function(){return{showLeftDrawer:!1,showRightDrawer:!1,showTopDrawer:!1,showBottomDrawer:!1,showAbsoluteDrawer:!1,showPushContentLeftDrawer:!1,showPushContentRightDrawer:!1,noOverlay:!1,overlayColor:"",bottomDrawerHeight:0,persistent:!1,showCookieNotice:!1}}},s=a,l=(o("0b51"),o("2877")),i=Object(l["a"])(s,r,n,!1,null,null,null);t["default"]=i.exports}}]);
//# sourceMappingURL=drawer-index-vue.91f46b5c.js.map