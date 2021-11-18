import{n as i}from"./index.052c2afa.js";import"./vendor.4f8da9ec.js";var l=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("main",[a("title-link",{staticClass:"mt4",attrs:{h1:"",slug:"customization"}},[s._v("Customization Via SCSS (optional)")]),a("alert",{attrs:{info:""}},[a("strong",[s._v("If you are using Nuxt")]),s._v(", the steps to follow are different. Check the last paragraph of the"),a("a",{staticClass:"ml1",attrs:{href:"/getting-started#installation-on-nuxt"}},[s._v("Nuxt installation")]),s._v(".")]),a("p",{staticClass:"mt8"},[s._v(`Wave UI components rely on SCSS variables that you can easily override from your SCSS file,
just like this:`)]),s._m(0),a("div",{staticClass:"title4"},[s._v("But to do so, you need to slightly modify your config.")]),a("title-link",{attrs:{h2:""}},[s._v("Modify your config")]),a("div",{staticClass:"title4 mt4"},[s._v("1. Install the devDependencies")]),a("ssh-pre",{staticClass:"mb2",attrs:{language:"shell"}},[s._v("npm i -D pug pug-plain-loader sass sass-loader@10")]),a("small",{staticClass:"text-italic grey"},[s._v("The dev dependencies are only needed for building the project. They will not ship to production.")]),a("p",{staticClass:"mt3"},[a("strong",[s._v("Notes:")]),a("ul",[s._m(1),a("li",[s._v("The "),a("span",{staticClass:"code"},[s._v("sass")]),s._v(" update is needed to handle the"),a("a",{staticClass:"ml1",attrs:{href:"https://github.com/sass/sass/issues/2565",target:"_blank"}},[s._v("new Sass division"),a("w-icon",{staticClass:"ml1"},[s._v("mdi mdi-open-in-new")])],1),s._v(".")])])]),s._m(2),a("p",[s._v("In main.js, replace the 2 Wave UI imports with:")]),a("ssh-pre",{staticClass:"mt5",attrs:{language:"js",label:"main.js"}},[s._v(`import WaveUI from 'wave-ui/src/wave-ui'
`)]),a("div",{staticClass:"title4 mt8"},[s._v("3. Create an SCSS file & import it globally")]),a("ul",[s._m(3),a("li",{staticClass:"mt2"},[s._v("Import your SCSS variables file globally from Vue config and re-serve the app."),a("ssh-pre",{staticClass:"mt5",attrs:{language:"js",label:"vue.config.js"}},[s._v(`module.exports = {
  transpileDependencies: ['wave-ui'], // ! \\\\
  css: {
    loaderOptions: {
      // \`additionalData\` was called \`prependData\` prior sass-loader 9.
      sass: { additionalData: '@import "@/scss/_variables.scss";' }
    }
  }
}
`)]),a("alert",{attrs:{info:""}},[s._v(`Note from the above code that since you import Wave UI source code, you need to transpile it.
`)])],1)]),a("div",{staticClass:"title4 mt8"},[s._v("Voil\xE0 !")]),a("p",[s._v("You're all set, you can now override the SCSS variables.")]),a("div",{staticClass:"w-divider my12"}),a("title-link",{attrs:{h2:""}},[s._v("Basic SCSS overrides")]),s._m(4),a("title-link",{attrs:{h2:""}},[s._v("Give Wave UI CSS more priority")]),a("p",[s._v("It is also possible to control Wave UI's CSS rules priorities by overriding the CSS base scope:")]),s._m(5),s._m(6),a("alert",{staticClass:"mt6 py3",attrs:{success:""}},[s._v(`This means you can control all the css rules specificity and consequently their priority!
`)]),a("title-link",{attrs:{h2:""}},[s._v("Disable the CSS layout classes (not recommended)")]),s._m(7),a("p",[s._v("You can have a look at all the classes that will not be genererated in this file:"),a("a",{staticClass:"ml2",attrs:{href:"https://github.com/antoniandre/wave-ui/blob/master/src/wave-ui/scss/_layout.scss",target:"_blank"}},[s._v("layout.scss on Github"),a("w-icon",{staticClass:"ml1",attrs:{sm:""}},[s._v("mdi mdi-open-in-new")])],1)]),a("title-link",{attrs:{h2:"",slug:"presets"}},[s._v("Presets"),a("w-tag",{staticClass:"ml3",attrs:{"bg-color":"red-light1",lg:"",color:"white"}},[s._v("Coming soon")])],1),a("ssh-pre",{attrs:{language:"js",label:"Javascript"}},[s._v(`// Buttons example.
{
  'w-button': { sm: true, outlined: true, round: true }
}`)])],1)},r=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{staticClass:"ssh-pre",attrs:{"data-label":"SCSS"}},[a("span",{staticClass:"purple text-bold"},[s._v("@import\xA0")]),a("span",{staticClass:"red-light2"},[s._v("'wave-ui/src/wave-ui/scss/_variables'")]),a("span",{staticClass:"blue-grey"},[s._v(";")]),a("br"),a("br"),a("span",{staticClass:"pink"},[s._v("$base-font-size")]),a("span",{staticClass:"blue-grey"},[s._v(":\xA0")]),a("span",{staticClass:"deep-orange"},[s._v("14px")]),a("span",{staticClass:"blue-grey"},[s._v(";")]),a("br"),a("span",{staticClass:"pink"},[s._v("$base-increment")]),a("span",{staticClass:"blue-grey"},[s._v(":\xA0")]),a("span",{staticClass:"deep-orange"},[s._v("5px")]),a("span",{staticClass:"blue-grey"},[s._v(";")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("li",[a("span",{staticClass:"code"},[s._v("sass-loader 11+")]),s._v(" only works with Webpack 5.")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"title4 mt8"},[s._v("2. Update "),a("span",{staticClass:"code"},[s._v("main.js")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("li",[s._v("In your project "),a("span",{staticClass:"code"},[s._v("src")]),s._v(" folder, create a "),a("code",[s._v("_variables.scss")]),s._v(" (usually in an "),a("span",{staticClass:"code"},[s._v("scss")]),s._v(`
folder), and import Wave UI's variables: `),a("code",[s._v("@import 'wave-ui/src/wave-ui/scss/_variables';")]),s._v(`.
`)])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{staticClass:"ssh-pre",attrs:{"data-label":"@/scss/_variables.scss"}},[a("span",{staticClass:"grey-light1 text-italic"},[s._v("// First import the Wave UI variables, then override what you want.")]),a("br"),a("span",{staticClass:"purple text-bold"},[s._v("@import\xA0")]),a("span",{staticClass:"red-light2"},[s._v("'wave-ui/src/wave-ui/scss/_variables'")]),a("span",{staticClass:"blue-grey"},[s._v(";")]),a("br"),a("br"),a("span",{staticClass:"pink"},[s._v("$base-font-size")]),a("span",{staticClass:"blue-grey"},[s._v(":\xA0")]),a("span",{staticClass:"deep-orange"},[s._v("14px")]),a("span",{staticClass:"blue-grey"},[s._v(";")]),a("br"),a("span",{staticClass:"pink"},[s._v("$base-increment")]),a("span",{staticClass:"blue-grey"},[s._v(":\xA0")]),a("span",{staticClass:"purple text-bold"},[s._v("round")]),a("span",{staticClass:"blue-grey"},[s._v("(")]),a("span",{staticClass:"pink"},[s._v("$base-font-size")]),a("span",{staticClass:"blue-grey mx1"},[s._v("/")]),a("span",{staticClass:"orange"},[s._v("4")]),a("span",{staticClass:"blue-grey"},[s._v(")")]),a("span",{staticClass:"blue-grey"},[s._v(";")]),a("br"),a("span",{staticClass:"pink"},[s._v("$layout-padding")]),a("span",{staticClass:"blue-grey"},[s._v(":\xA0")]),a("span",{staticClass:"pink"},[s._v("$base-increment")]),a("span",{staticClass:"blue-grey mx1"},[s._v("*")]),a("span",{staticClass:"orange"},[s._v("4")]),a("span",{staticClass:"blue-grey"},[s._v(";")]),a("br"),a("span",{staticClass:"pink"},[s._v("$border-radius")]),a("span",{staticClass:"blue-grey"},[s._v(":\xA0")]),a("span",{staticClass:"deep-orange"},[s._v("3px")]),a("span",{staticClass:"blue-grey"},[s._v(";")]),a("br"),a("span",{staticClass:"pink"},[s._v("$border")]),a("span",{staticClass:"blue-grey"},[s._v(":\xA0")]),a("span",{staticClass:"deep-orange"},[s._v("1px solid rgba(0, 0, 0, 0.15)")]),a("span",{staticClass:"blue-grey"},[s._v(";")]),a("br"),a("span",{staticClass:"pink"},[s._v("$drawer-max-size")]),a("span",{staticClass:"blue-grey"},[s._v(":\xA0")]),a("span",{staticClass:"deep-orange"},[s._v("380px")]),a("span",{staticClass:"blue-grey"},[s._v(";")]),a("br"),a("span",{staticClass:"pink"},[s._v("$transition-duration")]),a("span",{staticClass:"blue-grey"},[s._v(":\xA0")]),a("span",{staticClass:"deep-orange"},[s._v("0.25s")]),a("span",{staticClass:"blue-grey"},[s._v(";")]),a("br"),a("span",{staticClass:"pink"},[s._v("$box-shadow")]),a("span",{staticClass:"blue-grey"},[s._v(":\xA0")]),a("span",{staticClass:"deep-orange"},[s._v("0 3px 1px -2px rgba(0, 0, 0, 0.2),")]),a("br"),a("span",{staticClass:"deep-orange"},[s._v("             0 2px 2px 0 rgba(0, 0, 0, 0.15),")]),a("br"),a("span",{staticClass:"deep-orange"},[s._v("             0 1px 5px 0 rgba(0, 0, 0, 0.15)")]),a("span",{staticClass:"blue-grey"},[s._v(";")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{staticClass:"ssh-pre",attrs:{"data-label":"SCSS"}},[a("span",{staticClass:"pink"},[s._v("$css-scope")]),a("span",{staticClass:"blue-grey mr1"},[s._v(":")]),a("span",{staticClass:"red-light2"},[s._v("'.w-app'")]),a("span",{staticClass:"blue-grey"},[s._v(";")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("For instance if you set the scope to "),a("code",[s._v("html > body > div.w-app")]),s._v(`, the default
`),a("code",[s._v(".w-app .primary {color: #234781;}")]),s._v(` would become
`),a("code",[s._v("html > body > div.w-app .primary {color: #234781;}")]),s._v(".")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v(`You may want to use another CSS framework (like Tailwind) instead of the Wave UI's built-in CSS
layout classes.`),a("br"),s._v(`
This is not recommended, but it's possible to disable the CSS layout classes of Wave UI so they
don't conflict with the external library.`),a("br"),s._v(`
For this, follow the above steps in `),a("a",{attrs:{href:"#modify-your-config"}},[s._v("Modify your config")]),s._v(`, then you
can set the `),a("code",{staticClass:"pink"},[s._v("$use-layout-classes")]),s._v(" variable to "),a("code",[s._v("false")]),s._v(".")])}];const n={},e={};var o=i(n,l,r,!1,c,null,null,null);function c(s){for(let t in e)this[t]=e[t]}var p=function(){return o.exports}();export{p as default};