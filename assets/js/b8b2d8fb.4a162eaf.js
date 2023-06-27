"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[57],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,f=u["".concat(l,".").concat(m)]||u[m]||s[m]||a;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1726:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var r=t(3117),o=t(102),a=(t(7294),t(3905)),i=["components"],c={id:"headline",title:"HeadlineView",sidebar_label:"HeadlineView"},l=void 0,p={unversionedId:"components/headline",id:"components/headline",title:"HeadlineView",description:"Renders the headline or title for the ad recieved from server.",source:"@site/docs/components/headline.md",sourceDirName:"components",slug:"/components/headline",permalink:"/react-native-admob-native-ads/docs/components/headline",editUrl:"https://github.com/ammarahm-ed/react-native-admob-native-ads/edit/master/docs/docs/components/headline.md",tags:[],version:"current",frontMatter:{id:"headline",title:"HeadlineView",sidebar_label:"HeadlineView"},sidebar:"someSidebar",previous:{title:"AdBadge",permalink:"/react-native-admob-native-ads/docs/components/adbadge"},next:{title:"TaglineView",permalink:"/react-native-admob-native-ads/docs/components/tagline"}},d=[{value:"props",id:"props",children:[],level:2}],s={toc:d};function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Renders the headline or title for the ad recieved from server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { HeadlineView } from "react-native-admob-native-ads";\n\n<HeadlineView\n  style={{\n    fontWeight: "bold",\n    fontSize: 13,\n  }}\n/>;\n')),(0,a.kt)("h2",{id:"props"},"props"),(0,a.kt)("p",null,"Inherits all the props from ",(0,a.kt)("inlineCode",{parentName:"p"},"Text")," Component."))}u.isMDXComponent=!0}}]);