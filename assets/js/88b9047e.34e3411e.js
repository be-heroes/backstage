/*! For license information please see 88b9047e.34e3411e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[635347],{603905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,h=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},901721:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>u});r(827378);var n=r(603905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const s={id:"v1.12.0",title:"v1.12.0",description:"Backstage Release v1.12.0"},l=void 0,c={unversionedId:"releases/v1.12.0",id:"releases/v1.12.0",title:"v1.12.0",description:"Backstage Release v1.12.0",source:"@site/../docs/releases/v1.12.0.md",sourceDirName:"releases",slug:"/releases/v1.12.0",permalink:"/docs/releases/v1.12.0",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/releases/v1.12.0.md",tags:[],version:"current",frontMatter:{id:"v1.12.0",title:"v1.12.0",description:"Backstage Release v1.12.0"},sidebar:"releases",previous:{title:"v1.13.0",permalink:"/docs/releases/v1.13.0"},next:{title:"v1.11.0",permalink:"/docs/releases/v1.11.0"}},p={},u=[{value:"Highlights",id:"highlights",level:2},{value:"Using <code>zod</code> for action definitions",id:"using-zod-for-action-definitions",level:3},{value:"Reading paginated data from the catalog",id:"reading-paginated-data-from-the-catalog",level:3},{value:"Renamed backend system related plugin exports",id:"renamed-backend-system-related-plugin-exports",level:3},{value:"New plugin: <code>catalog-backend</code> <code>puppetdb</code> module",id:"new-plugin-catalog-backend-puppetdb-module",level:3},{value:"New plugin: Octopus deploy",id:"new-plugin-octopus-deploy",level:3},{value:"New plugin: StackStorm",id:"new-plugin-stackstorm",level:3},{value:"Security Fixes",id:"security-fixes",level:2},{value:"Upgrade path",id:"upgrade-path",level:2},{value:"Links and References",id:"links-and-references",level:2}],d={toc:u};function f(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"These are the release notes for the v1.12.0 release of ",(0,n.kt)("a",{parentName:"p",href:"https://backstage.io/"},"Backstage"),"."),(0,n.kt)("p",null,"A huge thanks to the whole team of maintainers and contributors as well as the amazing Backstage Community for the hard work in getting this release developed and done."),(0,n.kt)("h2",{id:"highlights"},"Highlights"),(0,n.kt)("p",null,"This release mostly contains a bunch of smaller additions and bug fixes, but on top of that, there\u2019s also some quality of life improvements and features as listed below. Enjoy!"),(0,n.kt)("h3",{id:"using-zod-for-action-definitions"},"Using ",(0,n.kt)("inlineCode",{parentName:"h3"},"zod")," for action definitions"),(0,n.kt)("p",null,"As a convenience, it is now possible to define your action inputs and outputs as ",(0,n.kt)("inlineCode",{parentName:"p"},"zod")," schemas. This tends to be more convenient than writing JSON schema by hand, and gives you instant type feedback in your editor."),(0,n.kt)("p",null,"Added by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/zcason"},"@zcason")," in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/pull/15561"},"#15561")),(0,n.kt)("h3",{id:"reading-paginated-data-from-the-catalog"},"Reading paginated data from the catalog"),(0,n.kt)("p",null,"The catalog has a new backend endpoint and corresponding client method, for fetching entities with proper cursor based pagination and server side filtering and ordering. This will be used to target performance hot-spots in the frontend and elsewhere."),(0,n.kt)("p",null,"Added by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/vinzscam"},"@vinzscam")," in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/pull/12246"},"#12246")),(0,n.kt)("h3",{id:"renamed-backend-system-related-plugin-exports"},"Renamed backend system related plugin exports"),(0,n.kt)("p",null,"As we settle the new backend system bit by bit, we have renamed a number of exports from individual plugins, to match the new ",(0,n.kt)("a",{parentName:"p",href:"https://backstage.io/docs/backend-system/architecture/naming-patterns"},"recommended naming patterns"),". If you are already leveraging the new backend system, you may find that you need to update some imports. For example, ",(0,n.kt)("inlineCode",{parentName:"p"},"githubEntityProviderCatalogModule")," was renamed to ",(0,n.kt)("inlineCode",{parentName:"p"},"catalogModuleGithubEntityProvider"),". These were considered non-breaking since they are still in alpha. More details can be found in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/pull/16760"},"#16760")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/pull/16764"},"#16764"),"."),(0,n.kt)("h3",{id:"new-plugin-catalog-backend-puppetdb-module"},"New plugin: ",(0,n.kt)("inlineCode",{parentName:"h3"},"catalog-backend")," ",(0,n.kt)("inlineCode",{parentName:"h3"},"puppetdb")," module"),(0,n.kt)("p",null,"Added a ",(0,n.kt)("inlineCode",{parentName:"p"},"catalogModulePuppetDbEntityProvider")," alpha export for the new backend system. Contributed by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tdabasinskas"},"@tdabasinskas")," in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/pull/16184"},"#16184")),(0,n.kt)("h3",{id:"new-plugin-octopus-deploy"},"New plugin: Octopus deploy"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://octopus.com"},"Octopus")," deployment plugin. Contributed by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/jmezach"},"@jmezach")," in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/pull/16353"},"#16353")),(0,n.kt)("h3",{id:"new-plugin-stackstorm"},"New plugin: StackStorm"),(0,n.kt)("p",null,"Integration with ",(0,n.kt)("a",{parentName:"p",href:"https://stackstorm.com"},"StackStorm"),". Contributed by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/pamelin"},"@pamelin")," in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/pull/16152"},"#16152")),(0,n.kt)("h2",{id:"security-fixes"},"Security Fixes"),(0,n.kt)("p",null,"This release does not contain any security fixes."),(0,n.kt)("h2",{id:"upgrade-path"},"Upgrade path"),(0,n.kt)("p",null,"We recommend that you keep your Backstage project up to date with this latest release. For more guidance on how to upgrade, check out the documentation for ",(0,n.kt)("a",{parentName:"p",href:"https://backstage.io/docs/getting-started/keeping-backstage-updated"},"keeping Backstage updated"),"."),(0,n.kt)("h2",{id:"links-and-references"},"Links and References"),(0,n.kt)("p",null,"Below you can find a list of links and references to help you learn about and start using this new release."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://backstage.io/"},"Backstage official website"),", ",(0,n.kt)("a",{parentName:"li",href:"https://backstage.io/docs/"},"documentation"),", and ",(0,n.kt)("a",{parentName:"li",href:"https://backstage.io/docs/getting-started/"},"getting started guide")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/backstage/backstage"},"GitHub repository")),(0,n.kt)("li",{parentName:"ul"},"Backstage's ",(0,n.kt)("a",{parentName:"li",href:"https://backstage.io/docs/overview/versioning-policy"},"versioning and support policy")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://discord.gg/backstage-687207715902193673"},"Community Discord")," for discussions and support"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/backstage/backstage/tree/master/docs/releases/v1.12.0-changelog.md"},"Changelog")),(0,n.kt)("li",{parentName:"ul"},"Backstage ",(0,n.kt)("a",{parentName:"li",href:"https://backstage.io/demos"},"Demos"),", ",(0,n.kt)("a",{parentName:"li",href:"https://backstage.io/blog"},"Blog"),", ",(0,n.kt)("a",{parentName:"li",href:"https://backstage.io/docs/overview/roadmap"},"Roadmap")," and ",(0,n.kt)("a",{parentName:"li",href:"https://backstage.io/plugins"},"Plugins"))),(0,n.kt)("p",null,"Sign up for our ",(0,n.kt)("a",{parentName:"p",href:"https://mailchi.mp/spotify/backstage-community"},"newsletter")," if you want to be informed about what is happening in the world of Backstage."))}f.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var i,s,l=a(e),c=1;c<arguments.length;c++){for(var p in i=Object(arguments[c]))r.call(i,p)&&(l[p]=i[p]);if(t){s=t(i);for(var u=0;u<s.length;u++)n.call(i,s[u])&&(l[s[u]]=i[s[u]])}}return l}},541535:(e,t,r)=>{var n=r(862525),a=60103,o=60106;var i=60109,s=60110,l=60112;var c=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;a=u("react.element"),o=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),i=u("react.provider"),s=u("react.context"),l=u("react.forward_ref"),u("react.suspense"),c=u("react.memo"),p=u("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function m(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}function b(){}function k(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var y=k.prototype=new b;y.constructor=k,n(y,m.prototype),y.isPureReactComponent=!0;var v={current:null},w=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var n,o={},i=null,s=null;if(null!=t)for(n in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,n)&&!O.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var c=Array(l),p=0;p<l;p++)c[p]=arguments[p+2];o.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:a,type:e,key:i,ref:s,props:o,_owner:v.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var P=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function x(e,t,r,n,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case a:case o:l=!0}}if(l)return i=i(l=e),e=""===n?"."+S(l,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(P,"$&/")+"/"),x(i,t,r,"",(function(e){return e}))):null!=i&&(N(i)&&(i=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+e)),t.push(i)),1;if(l=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var p=n+S(s=e[c],c);l+=x(s,t,r,p,i)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),c=0;!(s=e.next()).done;)l+=x(s=s.value,t,r,p=n+S(s,c++),i);else if("object"===s)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function C(e,t,r){if(null==e)return e;var n=[],a=0;return x(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function _(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function T(){var e=E.current;if(null===e)throw Error(f(321));return e}},827378:(e,t,r)=>{r(541535)}}]);