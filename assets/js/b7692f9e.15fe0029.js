/*! For license information please see b7692f9e.15fe0029.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[308434],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,g=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},611928:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>p});n(827378);var r=n(603905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={id:"index",title:"Getting Started",description:"Documentation on How to get started with Backstage"},l=void 0,c={unversionedId:"getting-started/index",id:"getting-started/index",title:"Getting Started",description:"Documentation on How to get started with Backstage",source:"@site/../docs/getting-started/index.md",sourceDirName:"getting-started",slug:"/getting-started/",permalink:"/docs/getting-started/",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/getting-started/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Getting Started",description:"Documentation on How to get started with Backstage"},sidebar:"docs",previous:{title:"Logo assets",permalink:"/docs/overview/logos"},next:{title:"Getting Started, configuring Backstage",permalink:"/docs/getting-started/configuration"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Create your Backstage App",id:"create-your-backstage-app",level:3},{value:"Run the Backstage app",id:"run-the-backstage-app",level:3}],d={toc:p};function f(e){var{components:t}=e,s=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},d,s),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"For most Backstage installations, installing the standalone app will bring you\nthe best and most streamlined experience. In this guide you will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deploy Backstage Standalone with npm packages"),(0,r.kt)("li",{parentName:"ul"},"Run Backstage Standalone with a SQLite in-memory database and demo content")),(0,r.kt)("p",null,"This guide assumes a basic understanding of working on a Linux based operating\nsystem using tools like apt-get, npm, yarn, curl. Docker knowledge is also\nhelpful for making the best use of your Backstage installation."),(0,r.kt)("p",null,"If you are planning to contribute plugins or to the project in general, we advise\nyou to use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/contributors"},"Contributors")," guide to do a repository-based installation."),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Access to a Unix-based operating system, such as Linux, MacOS or\n",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/wsl/"},"Windows Subsystem for Linux")),(0,r.kt)("li",{parentName:"ul"},"An account with elevated rights to install the dependencies"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"curl")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"wget")," installed"),(0,r.kt)("li",{parentName:"ul"},"Node.js ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/blog/release/"},"Active LTS Release")," installed using one of these\nmethods:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Using ",(0,r.kt)("inlineCode",{parentName:"li"},"nvm")," (recommended)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm#install--update-script"},"Installing nvm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#nvm"},"Install and change Node version with nvm")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Binary Download")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/"},"Package manager")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/nodesource/distributions/blob/master/README.md"},"Using NodeSource packages")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn")," ",(0,r.kt)("a",{parentName:"li",href:"https://classic.yarnpkg.com/en/docs/install"},"Installation"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You will need to use Yarn classic to create a new project, but it can then be ",(0,r.kt)("a",{parentName:"li",href:"/docs/tutorials/yarn-migration"},"migrated to Yarn 3")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"docker")," ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"installation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"git")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/git-guides/install-git"},"installation")),(0,r.kt)("li",{parentName:"ul"},"If the system is not directly accessible over your network the following ports\nneed to be opened: 3000, 7007. This is quite uncommon, unless when you're\ninstalling in a container, VM or remote system.")),(0,r.kt)("h3",{id:"create-your-backstage-app"},"Create your Backstage App"),(0,r.kt)("p",null,"To install the Backstage Standalone app, we make use of ",(0,r.kt)("inlineCode",{parentName:"p"},"npx"),", a tool to run\nNode executables straight from the registry. This tool is part of your Node.js\ninstallation. Running the command below will install Backstage. The wizard will\ncreate a subdirectory inside your current working directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx @backstage/create-app@latest\n")),(0,r.kt)("p",null,"The wizard will ask you for the name of the app, which will also be the name of the directory"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of the wizard asking for a name for the app.",src:n(158557).Z,width:"984",height:"204"})),(0,r.kt)("h3",{id:"run-the-backstage-app"},"Run the Backstage app"),(0,r.kt)("p",null,"When the installation is complete you can go to the application directory and\nstart the app. The ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn dev")," command will run both the frontend and backend as\nseparate processes (named ",(0,r.kt)("inlineCode",{parentName:"p"},"[0]")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"[1]"),") in the same window."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-backstage-app\nyarn dev\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of the command output, with the message web pack compiled successfully",src:n(115575).Z,width:"1029",height:"197"})),(0,r.kt)("p",null,"It might take a little while, but as soon as the message\n",(0,r.kt)("inlineCode",{parentName:"p"},"[0] webpack compiled successfully")," appears, you can open a browser and directly\nnavigate to your freshly installed Backstage portal at ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),".\nYou can start exploring the demo immediately. Please note that the in-memory\ndatabase will be cleared when you restart the app, so you'll most likely want to\ncarry on with the database steps."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of the Backstage portal.",src:n(391744).Z,width:"1910",height:"1058"})),(0,r.kt)("p",null,"In the next part of this tutorial, you'll learn how to change to a persistent\ndatabase, configure authentication, and add your first integration. Continue\nwith ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/configuration"},"getting started: Configuring Backstage"),"."),(0,r.kt)("p",null,"Share your experiences, comments, or suggestions with us:\n",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/backstage-687207715902193673"},"on discord"),", file issues for any\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/issues/new?labels=help+wanted&template=feature_template.md"},"feature"),"\nor\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/issues/new?labels=plugin&template=plugin_template.md&title=%5BPlugin%5D+THE+PLUGIN+NAME"},"plugin suggestions"),",\nor\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/issues/new?labels=bug&template=bug_template.md"},"bugs"),"\nyou have, and feel free to\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/blob/master/CONTRIBUTING.md"},"contribute"),"!"))}f.isMDXComponent=!0},391744:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/portal-b6d936acea71e18b0f5a39d78b9c0195.png"},115575:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/startup-a67006576cf7f5099d36c8660cf6017a.png"},158557:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/wizard-13cbb72e2015264fda3c57b1577b1494.png"},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var i,s,l=a(e),c=1;c<arguments.length;c++){for(var u in i=Object(arguments[c]))n.call(i,u)&&(l[u]=i[u]);if(t){s=t(i);for(var p=0;p<s.length;p++)r.call(i,s[p])&&(l[s[p]]=i[s[p]])}}return l}},541535:(e,t,n)=>{var r=n(862525),a=60103,o=60106;var i=60109,s=60110,l=60112;var c=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;a=p("react.element"),o=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),s=p("react.context"),l=p("react.forward_ref"),p("react.suspense"),c=p("react.memo"),u=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function h(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||g}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||g}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=h.prototype;var k=b.prototype=new y;k.constructor=b,r(k,h.prototype),k.isPureReactComponent=!0;var w={current:null},v=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var r,o={},i=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)v.call(t,r)&&!O.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:a,type:e,key:i,ref:s,props:o,_owner:w.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var P=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function x(e,t,n,r,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case a:case o:l=!0}}if(l)return i=i(l=e),e=""===r?"."+S(l,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(P,"$&/")+"/"),x(i,t,n,"",(function(e){return e}))):null!=i&&(N(i)&&(i=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=""===r?".":r+":",Array.isArray(e))for(var c=0;c<e.length;c++){var u=r+S(s=e[c],c);l+=x(s,t,n,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(s=e.next()).done;)l+=x(s=s.value,t,n,u=r+S(s,c++),i);else if("object"===s)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function C(e,t,n){if(null==e)return e;var r=[],a=0;return x(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function _(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function D(){var e=E.current;if(null===e)throw Error(f(321));return e}},827378:(e,t,n)=>{n(541535)}}]);