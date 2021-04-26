(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["tabs-examples-vue"],{"0b02":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("title-link",{attrs:{h2:""}},[t._v("Basic")]),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-tabs :items="tabs"></w-tabs>')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  tabs: [\n    { title: 'Tab 1', content: 'Tab 1 content.' },\n    { title: 'Tab 2', content: 'Tab 2 content.' },\n    { title: 'Tab 3 has a long title', content: 'Tab 3 content.' }\n  ]\n})\n")]},proxy:!0}])},[e("w-tabs",{attrs:{items:t.tabs1}})],1),e("title-link",{attrs:{h2:""}},[t._v("Align center and right")]),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-tabs :items="tabs" center></w-tabs>\n<w-tabs :items="tabs" right></w-tabs>')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  tabs: [\n    { title: 'Tab 1', content: 'Tab 1 content.' },\n    { title: 'Tab 2', content: 'Tab 2 content.' },\n    { title: 'Tab 3', content: 'Tab 3 content.' }\n  ]\n})\n")]},proxy:!0}])},[e("w-tabs",{attrs:{items:t.tabs4.items,center:""}}),e("w-tabs",{staticClass:"mt4",attrs:{items:t.tabs4.items,right:""}})],1),e("title-link",{attrs:{h2:""}},[t._v("Fill bar & disabled items")]),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-switch v-model="fillBar" class="mb3">\n  Fill bar\n</w-switch>\n\n<w-tabs :items="tabs" :fill-bar="fillBar"></w-tabs>')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  tabs: [\n    { title: 'Tab 1', content: 'Tab 1 content.' },\n    { title: 'Tab 2', content: 'Tab 2 content.' },\n    { title: 'Tab 3', content: 'Tab 3 content.' },\n    { title: 'Tab 4', content: 'Tab 4 content.' },\n    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }\n  ],\n  fillBar: true\n})\n")]},proxy:!0}])},[e("w-switch",{staticClass:"mb3",model:{value:t.tabs2.fillBar,callback:function(n){t.$set(t.tabs2,"fillBar",n)},expression:"tabs2.fillBar"}},[t._v("Fill bar")]),e("w-tabs",{attrs:{items:t.tabs2.items,"fill-bar":t.tabs2.fillBar}})],1),e("title-link",{attrs:{h2:""}},[t._v("V-model")]),e("alert",{attrs:{warning:""}},[e("strong",[t._v("Since version 1.21.0")]),t._v(", the v-model/value only accepts a numeric tab index (previously an array of boolean).")]),t._m(0),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-tabs v-model="activeTab" :items="tabs"></w-tabs>\n\n<strong>\n  v-model:\n  <code class="ml2">\n    '+t._s("{{ activeTab }}")+"\n  </code>\n</strong>")]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  tabs: [\n    { title: 'Tab 1', content: 'Tab 1 content.' },\n    { title: 'Tab 2', content: 'Tab 2 content.' },\n    { title: 'Tab 3', content: 'Tab 3 content.' },\n    { title: 'Tab 4', content: 'Tab 4 content.' },\n    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }\n  ],\n  activeTab: 2\n})\n")]},proxy:!0}])},[e("w-tabs",{staticClass:"mb2",attrs:{items:t.tabs2.items},model:{value:t.tabs2.active,callback:function(n){t.$set(t.tabs2,"active",n)},expression:"tabs2.active"}}),e("strong",[t._v("v-model:"),e("code",{staticClass:"ml2"},[t._v(t._s(t.tabs2.active))])])],1),e("title-link",{attrs:{h2:""}},[t._v("Colors")]),t._m(1),e("div",{staticClass:"title3"},[t._v("Color & bg-color")]),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-tabs\n  :items="tabs"\n  color="blue"\n  bg-color="indigo-light5">\n</w-tabs>')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  tabs: [\n    { title: 'Tab 1', content: 'Tab 1 content.' },\n    { title: 'Tab 2', content: 'Tab 2 content.' },\n    { title: 'Tab 3', content: 'Tab 3 content.' },\n    { title: 'Tab 4', content: 'Tab 4 content.' },\n    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }\n  ]\n})\n")]},proxy:!0}])},[e("w-tabs",{attrs:{items:t.tabs2.items,color:"blue","bg-color":"indigo-light5"}})],1),e("div",{staticClass:"title3 mt4"},[t._v("Slider color")]),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-tabs\n  :items="tabs"\n  slider-color="blue-light2">\n</w-tabs>')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  tabs: [\n    { title: 'Tab 1', content: 'Tab 1 content.' },\n    { title: 'Tab 2', content: 'Tab 2 content.' },\n    { title: 'Tab 3', content: 'Tab 3 content.' },\n    { title: 'Tab 4', content: 'Tab 4 content.' },\n    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }\n  ]\n})\n")]},proxy:!0}])},[e("w-tabs",{attrs:{items:t.tabs2.items,"slider-color":"blue-light2"}})],1),e("div",{staticClass:"title3"},[t._v("Active class")]),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-tabs\n  :items="tabs"\n  color="blue"\n  active-class="pink"\n  slider-color="pink">\n</w-tabs>')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  tabs: [\n    { title: 'Tab 1', content: 'Tab 1 content.' },\n    { title: 'Tab 2', content: 'Tab 2 content.' },\n    { title: 'Tab 3', content: 'Tab 3 content.' },\n    { title: 'Tab 4', content: 'Tab 4 content.' },\n    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }\n  ]\n})\n")]},proxy:!0}])},[e("w-tabs",{attrs:{items:t.tabs2.items,color:"blue","active-class":"pink","slider-color":"pink"}})],1),e("title-link",{attrs:{h2:""}},[t._v("No slider")]),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-switch class="mb3" v-model="tabsSlider">\n  Slider\n</w-switch>\n\n<w-tabs\n  :items="tabs"\n  :no-slider="!tabsSlider"\n  active-class="pink">\n</w-tabs>')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  tabsSlider: false,\n  tabs: [\n    { title: 'Tab 1', content: 'Tab 1 content.' },\n    { title: 'Tab 2', content: 'Tab 2 content.' },\n    { title: 'Tab 3', content: 'Tab 3 content.' },\n    { title: 'Tab 4', content: 'Tab 4 content.' },\n    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }\n  ]\n})\n")]},proxy:!0}])},[e("w-switch",{staticClass:"mb3",model:{value:t.tabs2.slider,callback:function(n){t.$set(t.tabs2,"slider",n)},expression:"tabs2.slider"}},[t._v("Slider")]),e("w-tabs",{attrs:{items:t.tabs2.items,"no-slider":!t.tabs2.slider,"active-class":"pink"}})],1),e("title-link",{attrs:{h2:""}},[t._v("Content transitions")]),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-radios\n  class="mb3"\n  :items="transitions"\n  v-model="transition">\n</w-radios>\n\n<w-tabs\n  :items="tabs"\n  :transition="transition">\n</w-tabs>')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  tabs: [\n    { title: 'Tab 1', content: 'Tab 1 content.' },\n    { title: 'Tab 2', content: 'Tab 2 content.' },\n    { title: 'Tab 3', content: 'Tab 3 content.' }\n  ],\n  transition: 'fade',\n  transitions: [\n    { label: 'default', value: '' },\n    { label: 'fade' },\n    { label: 'slide-fade-up' },\n    { label: 'slide-fade-down' },\n    { label: 'slide-fade-left' },\n    { label: 'slide-fade-right' },\n    { label: 'scale-fade' },\n    { label: 'none', value: false }\n  ]\n})\n")]},proxy:!0}])},[e("w-radios",{staticClass:"mb3",attrs:{items:t.transitions},model:{value:t.tabs4.transition,callback:function(n){t.$set(t.tabs4,"transition",n)},expression:"tabs4.transition"}}),e("w-tabs",{attrs:{items:t.tabs4.items,transition:t.tabs4.transition}})],1),e("title-link",{attrs:{h2:""}},[t._v("Add / remove tabs")]),e("p",[t._v("The tabs will naturally try to fit in the available space. But if they can't fit because there are\ntoo many, a scrollbar will allow navigation to all the tabs.")]),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-flex class="mb3" align-center>\n  Number of tabs:\n  <w-button\n    class="mx2"\n    icon="wi-minus"\n    sm\n    @click="tabsCount -= tabsCount < 1 ? 0 : 1">\n  </w-button>\n\n  <code>'+t._s("{{ tabsCount }}")+'</code>\n\n  <w-button\n    class="mx2"\n    icon="wi-plus"\n    sm\n    @click="tabsCount++">\n  </w-button>\n</w-flex>\n\n<w-tabs :items="tabsCount">\n  <template #item-title="{ index }">\n    Tab '+t._s("{{ index }}")+'\n  </template>\n\n  <template #item-content="{ index }">\n    Content '+t._s("{{ index }}")+"\n  </template>\n</w-tabs>")]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  tabsCount: 3\n})\n")]},proxy:!0}])},[e("w-flex",{staticClass:"mb3",attrs:{"align-center":""}},[t._v("Number of tabs:"),e("w-button",{staticClass:"mx2",attrs:{icon:"wi-minus",sm:""},on:{click:function(n){t.tabs3.tabsCount-=t.tabs3.tabsCount<1?0:1}}}),e("code",[t._v(t._s(t.tabs3.tabsCount))]),e("w-button",{staticClass:"mx2",attrs:{icon:"wi-plus",sm:""},on:{click:function(n){t.tabs3.tabsCount++}}})],1),e("w-tabs",{attrs:{items:t.tabs3.tabsCount},scopedSlots:t._u([{key:"item-title",fn:function(n){var e=n.index;return[t._v("Tab "+t._s(e))]}},{key:"item-content",fn:function(n){var e=n.index;return[t._v("Content "+t._s(e))]}}])})],1),e("title-link",{attrs:{h2:""}},[t._v("Card style tabs")]),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-tabs :items="tabs" card></w-tabs>')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  tabs: [\n    { title: 'Tab 1', content: 'Tab 1 content.' },\n    { title: 'Tab 2', content: 'Tab 2 content.' },\n    { title: 'Tab 3 has a long title', content: 'Tab 3 content.' }\n  ]\n})\n")]},proxy:!0}])},[e("w-tabs",{attrs:{items:t.tabs1,card:""}})],1),e("title-link",{attrs:{h2:""}},[t._v("Close button")]),e("alert",{attrs:{tip:""}},[t._v("When using a close button, don't forget to stop the click propagation "),e("code",[t._v("@click.stop")]),t._v(" to prevent\nthe navigation to the tab that you are deleting!")]),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-tabs :items="tabs" card>\n  <template #item-title="{ item, index }">\n    '+t._s("{{ item.title }}")+'\n    <w-button\n      class="ml1 mr-1"\n      @click.stop="tabs.splice(index - 1, 1)"\n      icon="wi-cross"\n      outline\n      xs>\n    </w-button>\n  </template>\n</w-tabs>')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  tabs: [\n    { title: 'Tab 1', content: 'Tab 1 content.' },\n    { title: 'Tab 2', content: 'Tab 2 content.' },\n    { title: 'Tab 3', content: 'Tab 3 content.' }\n  ]\n})\n")]},proxy:!0}])},[e("w-tabs",{attrs:{items:t.tabs6.items,card:""},scopedSlots:t._u([{key:"item-title",fn:function(n){var a=n.item,s=n.index;return[t._v(t._s(a.title)),e("w-button",{staticClass:"ml1 mr-1",attrs:{icon:"wi-cross",outline:"",xs:""},on:{click:function(n){return n.stopPropagation(),t.tabs6.items.splice(s-1,1)}}})]}}])}),e("w-button",{staticClass:"mt4",attrs:{"bg-color":"primary",disabled:3===t.tabs6.items.length},on:{click:function(n){t.tabs6.items=t.tabs6.originals.slice(0)}}},[t._v("Reset tabs")])],1),e("title-link",{attrs:{h2:""}},[t._v("Customizing the tabs title & contents")]),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-tabs :items="tabs" card>\n  <template #item-title="{ item }">\n    <w-icon class="mr1 green">\n      mdi mdi-star\n    </w-icon>\n\n    <span class="green">\n      '+t._s("{{ item.title }}")+'\n    </span>\n  </template>\n\n  <template #item-title.3="{ item }">\n    <w-icon class="pink">\n      mdi mdi-heart\n    </w-icon>\n\n    <span class="pink mx1">\n      '+t._s("{{ item.title }}")+'\n    </span>\n\n    <w-icon class="pink">\n      mdi mdi-heart\n    </w-icon>\n  </template>\n\n  <template #item-content.1="{ item }">\n    <div class="title3">\n      This is a custom tab content.\n    </div>\n\n    <div v-html="item.content"></div>\n  </template>\n</w-tabs>')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  tabs: [\n    { title: 'Tab 1', content: 'Tab 1 content.' },\n    { title: 'Tab 2', content: 'Tab 2 content.' },\n    { title: 'Tab 3', content: 'Tab 3 content.' }\n  ]\n})\n")]},proxy:!0}])},[e("w-tabs",{attrs:{items:t.tabs5,card:""},scopedSlots:t._u([{key:"item-title",fn:function(n){var a=n.item;return[e("w-icon",{staticClass:"mr1 green"},[t._v("mdi mdi-star")]),e("span",{staticClass:"green"},[t._v(t._s(a.title))])]}},{key:"item-title.3",fn:function(n){var a=n.item;return[e("w-icon",{staticClass:"pink"},[t._v("mdi mdi-heart")]),e("span",{staticClass:"pink mx1"},[t._v(t._s(a.title))]),e("w-icon",{staticClass:"pink"},[t._v("mdi mdi-heart")])]}},{key:"item-content.1",fn:function(n){var a=n.item;return[e("div",{staticClass:"title3"},[t._v("This is a custom tab content.")]),e("div",{domProps:{innerHTML:t._s(a.content)}})]}}])})],1),e("title-link",{attrs:{h2:""}},[t._v("Adding a tabs bar extra element")]),t._m(2),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-tabs\n  ref="tabs"\n  :items="tabs.tabsCount"\n  v-model="tabs.currentTab">\n  <template #item-title="{ index }">\n    Item title '+t._s("{{ index }}")+'\n  </template>\n\n  <template #item-content="{ index }">\n    Item content '+t._s("{{ index }}")+'\n  </template>\n\n  <template #tabs-bar-extra>\n    <w-button\n      icon="wi-plus"\n      @click="tabs.tabsCount++;tabs.currentTab = tabs.tabsCount - 1"\n      class="bdrsr mr2">\n    </w-button>\n  </template>\n</w-tabs>')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  tabs: {\n    tabsCount: 3,\n    currentTab: 1\n  }\n})\n")]},proxy:!0}])},[e("w-tabs",{ref:"tabs",attrs:{items:t.tabs7.tabsCount},scopedSlots:t._u([{key:"item-title",fn:function(n){var e=n.index;return[t._v("Item title "+t._s(e))]}},{key:"item-content",fn:function(n){var e=n.index;return[t._v("Item content "+t._s(e))]}},{key:"tabs-bar-extra",fn:function(){return[e("w-button",{staticClass:"bdrsr mr2",attrs:{icon:"wi-plus"},on:{click:function(n){t.tabs7.tabsCount++,t.tabs7.currentTab=t.tabs7.tabsCount-1}}})]},proxy:!0}]),model:{value:t.tabs7.currentTab,callback:function(n){t.$set(t.tabs7,"currentTab",n)},expression:"tabs7.currentTab"}})],1),e("title-link",{attrs:{h2:""}},[t._v("Refreshing the slider width or position")]),t._m(3),e("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-tabs ref="tabs" :items="tabs">\n  <template #item-content="{ item }">\n    <w-input\n      v-model="item.title"\n      class="my6"\n      label="Tab title"\n      @keyup="onTitleChange">\n    </w-input>\n  </template>\n</w-tabs>')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  tabs: [\n    { title: 'Tab 1' },\n    { title: 'Tab 2' },\n    { title: 'Tab 3' }\n  ]\n}),\n\nmethods: {\n  onTitleChange () {\n    this.$refs.tabs.updateSlider()\n  }\n}")]},proxy:!0}])},[e("w-tabs",{ref:"tabs",attrs:{items:t.tabs8},scopedSlots:t._u([{key:"item-content",fn:function(n){var a=n.item;return[e("w-input",{staticClass:"my6",attrs:{label:"Tab title"},on:{keyup:t.onTitleChange},model:{value:a.title,callback:function(n){t.$set(a,"title",n)},expression:"item.title"}})]}}])})],1)],1)},s=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("It is possible to open a particular tab programmatically via "),e("code",[t._v("v-model")]),t._v(" or "),e("code",[t._v("value")]),t._v(".")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("Like in most components, you can set a "),e("code",[t._v("color")]),t._v(" for the text and a "),e("code",[t._v("bg-color")]),t._v(" for the\nbackground. You can also set a "),e("code",[t._v("slider-color")]),t._v(" and an "),e("code",[t._v("active-class")]),t._v(".\n")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("You can add extra elements at the right of the tabs title bar via the "),e("code",[t._v("tabs-bar-extra")]),t._v(" slot.")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("By default there is no data watcher on the tabs title to recalculate the slider width or position."),e("br"),t._v("\nBut you may need to update the slider width for various reasons.\nThanks to the "),e("code",[t._v("updateSlider")]),t._v(" method, this is quite straightforward."),e("br"),t._v("\nIn this scenario, the slider width is updated on title change from the "),e("strong",{staticClass:"code"},[t._v("w-input")]),t._v(" field,\nso the slider width adapts to the number of characters on the current tab's title.")])}],i={data:function(){return{tabs1:[{title:"Tab 1",content:"Tab 1 content."},{title:"Tab 2",content:"Tab 2 content."},{title:"Tab 3 has a long title",content:"Tab 3 content."}],tabs2:{items:[{title:"Tab 1",content:"Tab 1 content."},{title:"Tab 2",content:"Tab 2 content."},{title:"Tab 3",content:"Tab 3 content."},{title:"Tab 4",content:"Tab 4 content."},{title:"Tab 5",content:"Tab 5 content.",disabled:!0}],active:2,fillBar:!0,slider:!1},tabs3:{tabsCount:3},tabs4:{items:[{title:"Tab 1",content:"Tab 1 content."},{title:"Tab 2",content:"Tab 2 content."},{title:"Tab 3",content:"Tab 3 content."}],transition:"fade"},tabs5:[{title:"Tab 1",content:"Tab 1 content."},{title:"Tab 2",content:"Tab 2 content."},{title:"Tab 3",content:"Tab 3 content."}],tabs6:{items:[{title:"Tab 1",content:"Tab 1 content."},{title:"Tab 2",content:"Tab 2 content."},{title:"Tab 3",content:"Tab 3 content."}],originals:[{title:"Tab 1",content:"Tab 1 content."},{title:"Tab 2",content:"Tab 2 content."},{title:"Tab 3",content:"Tab 3 content."}]},tabs7:{tabsCount:3,currentTab:1},tabs8:[{title:"Tab 1"},{title:"Tab 2"},{title:"Tab 3"}],transitions:[{label:"default",value:""},{label:"fade"},{label:"slide-fade-up"},{label:"slide-fade-down"},{label:"slide-fade-left"},{label:"slide-fade-right"},{label:"scale-fade"},{label:"none",value:!1}]}},methods:{onTitleChange:function(){this.$refs.tabs.updateSlider()}}},o=i,l=(e("8c50"),e("2877")),c=Object(l["a"])(o,a,s,!1,null,null,null);n["default"]=c.exports},6766:function(t,n,e){},"8c50":function(t,n,e){"use strict";e("6766")}}]);
//# sourceMappingURL=tabs-examples-vue.681750b7.js.map