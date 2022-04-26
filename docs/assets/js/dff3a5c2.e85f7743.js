"use strict";(self.webpackChunktest_website=self.webpackChunktest_website||[]).push([[861],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8352:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={title:"Introducing Lage"},u=void 0,p={unversionedId:"Guide/README",id:"Guide/README",title:"Introducing Lage",description:"Overview",source:"@site/docs/Guide/README.md",sourceDirName:"Guide",slug:"/Guide/",permalink:"/lage/docs/Guide/",editUrl:"https://github.com/microsoft/lage/docs/Guide/README.md",tags:[],version:"current",frontMatter:{title:"Introducing Lage"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/lage/docs/Introducing Lage/Overview"},next:{title:"Getting Started",permalink:"/lage/docs/Guide/getting-started"}},c=[{value:"Overview",id:"overview",children:[],level:2}],s={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Your JS repo has gotten large enough that you have turned to using a tool to help you manage multiple packages inside a repository. That's great! However, you realized quickly that the tasks defined inside the workspace have to be run in package dependency order."),(0,a.kt)("p",null,"Lerna, Rush, wsrun and even pnpm will provide a simple way for you to run npm scripts to be run in a topological order. However, these tools will force you to run your tasks by script name one at a time. For example, all the ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," scripts will have to run first. Then all the ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," scripts run in the topological order."),(0,a.kt)("p",null,"This usually means that there are wasted CPU cycles in between ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"test"),". We can achieve better pipelining the npm scripts if we had a way to say that ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," can run as soon as ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," are done for the package."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"lage"),' (Norwegian for "make", pronounced law-geh) solves this by providing a terse pipelining syntax. It has features specifically address large monorepos with high number of packages:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"package and task scopes"),(0,a.kt)("li",{parentName:"ul"},"output caching"),(0,a.kt)("li",{parentName:"ul"},"sound scheduling with package task pipeline"),(0,a.kt)("li",{parentName:"ul"},"prioritization")))}d.isMDXComponent=!0}}]);