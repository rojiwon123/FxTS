"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1016],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),s=p(t),d=o,m=s["".concat(u,".").concat(d)]||s[d]||f[d]||c;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=s;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<c;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},2884:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return l},default:function(){return s}});var r=t(7462),o=t(3366),c=(t(7294),t(3905)),i=["components"],a={id:"noop"},u=void 0,p={unversionedId:"noop",id:"noop",isDocsHomePage:!1,title:"noop",description:"noop() function",source:"@site/docs/noop.md",sourceDirName:".",slug:"/noop",permalink:"/docs/noop",tags:[],version:"current",frontMatter:{id:"noop"}},l=[{value:"noop() function",id:"noop-function",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],f={toc:l};function s(e){var n=e.components,t=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"noop-function"},"noop() function"),(0,c.kt)("p",null,"Returns ",(0,c.kt)("inlineCode",{parentName:"p"},"undefined")),(0,c.kt)("b",null,"Signature:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-typescript"},"declare function noop(): void;\n")),(0,c.kt)("b",null,"Returns:"),(0,c.kt)("p",null,"void"),(0,c.kt)("h2",{id:"example"},"Example"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"noop() // undefined\n")))}s.isMDXComponent=!0}}]);