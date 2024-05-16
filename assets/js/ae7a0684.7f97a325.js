/*! For license information please see ae7a0684.7f97a325.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[520475],{353805:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var r=n(824246),o=n(511151);const a={id:"plugin-catalog.catalogtable",title:"CatalogTable",description:"API reference for CatalogTable"},u=void 0,l={id:"reference/plugin-catalog.catalogtable",title:"CatalogTable",description:"API reference for CatalogTable",source:"@site/../docs/reference/plugin-catalog.catalogtable.md",sourceDirName:"reference",slug:"/reference/plugin-catalog.catalogtable",permalink:"/docs/reference/plugin-catalog.catalogtable",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog.catalogtable.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog.catalogtable",title:"CatalogTable",description:"API reference for CatalogTable"}},c={},i=[];function s(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-catalog",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-catalog"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-catalog.catalogtable",children:(0,r.jsx)(t.code,{children:"CatalogTable"})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"CatalogTable: {\n    (props: CatalogTableProps): React.JSX.Element;\n    columns: Readonly<{\n        createNameColumn(options?: {\n            defaultKind?: string | undefined;\n        } | undefined): TableColumn<CatalogTableRow>;\n        createSystemColumn(): TableColumn<CatalogTableRow>;\n        createOwnerColumn(): TableColumn<CatalogTableRow>;\n        createSpecTargetsColumn(): TableColumn<CatalogTableRow>;\n        createSpecTypeColumn(options?: {\n            hidden: boolean;\n        }): TableColumn<CatalogTableRow>;\n        createSpecLifecycleColumn(): TableColumn<CatalogTableRow>;\n        createMetadataDescriptionColumn(): TableColumn<CatalogTableRow>;\n        createTagsColumn(): TableColumn<CatalogTableRow>;\n        createTitleColumn(options?: {\n            hidden?: boolean | undefined;\n        } | undefined): TableColumn<CatalogTableRow>;\n        createLabelColumn(key: string, options?: {\n            title?: string | undefined;\n            defaultValue?: string | undefined;\n        } | undefined): TableColumn<CatalogTableRow>;\n        createNamespaceColumn(): TableColumn<CatalogTableRow>;\n    }>;\n    defaultColumnsFunc: CatalogTableColumnsFunc;\n}\n"})})]})}function f(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,n){var r,a={},i=null,s=null;for(r in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(s=t.ref),t)u.call(t,r)&&!c.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:i,ref:s,props:a,_owner:l.current}}t.Fragment=a,t.jsx=i,t.jsxs=i},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,b={};function g(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||y}function h(){}function C(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||y}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=g.prototype;var _=C.prototype=new h;_.constructor=C,m(_,g.prototype),_.isPureReactComponent=!0;var v=Array.isArray,T=Object.prototype.hasOwnProperty,S={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function R(e,t,r){var o,a={},u=null,l=null;if(null!=t)for(o in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(u=""+t.key),t)T.call(t,o)&&!w.hasOwnProperty(o)&&(a[o]=t[o]);var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){for(var i=Array(c),s=0;s<c;s++)i[s]=arguments[s+2];a.children=i}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===a[o]&&(a[o]=c[o]);return{$$typeof:n,type:e,key:u,ref:l,props:a,_owner:S.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var j=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function x(e,t,o,a,u){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var c=!1;if(null===e)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return u=u(c=e),e=""===a?"."+E(c,0):a,v(u)?(o="",null!=e&&(o=e.replace(j,"$&/")+"/"),x(u,t,o,"",(function(e){return e}))):null!=u&&(k(u)&&(u=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||c&&c.key===u.key?"":(""+u.key).replace(j,"$&/")+"/")+e)),t.push(u)),1;if(c=0,a=""===a?".":a+":",v(e))for(var i=0;i<e.length;i++){var s=a+E(l=e[i],i);c+=x(l,t,o,s,u)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),i=0;!(l=e.next()).done;)c+=x(l=l.value,t,o,s=a+E(l,i++),u);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function $(e,t,n){if(null==e)return e;var r=[],o=0;return x(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},I={transition:null},N={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:I,ReactCurrentOwner:S};t.Children={map:$,forEach:function(e,t,n){$(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return $(e,(function(){t++})),t},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=o,t.Profiler=u,t.PureComponent=C,t.StrictMode=a,t.Suspense=s,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),a=e.key,u=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,l=S.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(i in t)T.call(t,i)&&!w.hasOwnProperty(i)&&(o[i]=void 0===t[i]&&void 0!==c?c[i]:t[i])}var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){c=Array(i);for(var s=0;s<i;s++)c[s]=arguments[s+2];o.children=c}return{$$typeof:n,type:e.type,key:a,ref:u,props:o,_owner:l}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=R,t.createFactory=function(e){var t=R.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:i,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return P.current.useCallback(e,t)},t.useContext=function(e){return P.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return P.current.useDeferredValue(e)},t.useEffect=function(e,t){return P.current.useEffect(e,t)},t.useId=function(){return P.current.useId()},t.useImperativeHandle=function(e,t,n){return P.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return P.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return P.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return P.current.useMemo(e,t)},t.useReducer=function(e,t,n){return P.current.useReducer(e,t,n)},t.useRef=function(e){return P.current.useRef(e)},t.useState=function(e){return P.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return P.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return P.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>u});var r=n(667294);const o={},a=r.createContext(o);function u(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:u(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);