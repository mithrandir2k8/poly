(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(9),o=(n(0),n(173)),i={id:"installation",title:"Installing Poly"},l={id:"installation",isDocsHomePage:!0,title:"Installing Poly",description:"Poly can be used in two ways.",source:"@site/docs/installation.md",permalink:"/poly/docs/",editUrl:"https://github.com/timothystiles/poly/edit/prime/docs/installation.md",sidebar:"someSidebar"},c=[{value:"Building Poly from Scratch",id:"building-poly-from-scratch",children:[]},{value:"Installing Poly as a Go library",id:"installing-poly-as-a-go-library",children:[]},{value:"Installing Poly as a Command Line Utility",id:"installing-poly-as-a-command-line-utility",children:[]}],s={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Poly can be used in two ways."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"As a Go library where you have finer control and can make magical things happen."),Object(o.b)("li",{parentName:"ol"},"As a command line utility where you can bash script your way to greatness and make DNA go brrrrrrrr.")),Object(o.b)("h3",{id:"building-poly-from-scratch"},"Building Poly from Scratch"),Object(o.b)("p",null,"This assumes you already have a working Go environment, if not please see\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://golang.org/doc/install"}),"this page")," first."),Object(o.b)("p",null,"Also, this will build and install both the library and command line utility."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/TimothyStiles/poly.git && cd poly && go build ./... && go install ./...\n")),Object(o.b)("h3",{id:"installing-poly-as-a-go-library"},"Installing Poly as a Go library"),Object(o.b)("p",null,"This assumes you already have a working Go environment, if not please see\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://golang.org/doc/install"}),"this page")," first."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"go get")," ",Object(o.b)("em",{parentName:"p"},"will always pull the latest released version from the prime branch.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"go get github.com/TimothyStiles/poly\n")),Object(o.b)("h3",{id:"installing-poly-as-a-command-line-utility"},"Installing Poly as a Command Line Utility"),Object(o.b)("p",null,"Poly ships many binaries for many different operating systems and package managers thanks to the wonderful work of the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://goreleaser.com/"}),"go releaser")," team. You can check out our ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/TimothyStiles/poly/releases"}),"releases page")," on github or install via package manager for your OS with the instructions below."),Object(o.b)("h4",{id:"mac-os"},"Mac OS"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"brew install timothystiles/poly/poly\n")),Object(o.b)("h4",{id:"linux---debrpm"},"Linux - deb/rpm"),Object(o.b)("p",null,"Download the .deb or .rpm from the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/TimothyStiles/poly/releases"}),"releases page")," and install with ",Object(o.b)("inlineCode",{parentName:"p"},"dpkg -i")," and ",Object(o.b)("inlineCode",{parentName:"p"},"rpm -i")," respectively."),Object(o.b)("h4",{id:"windows"},"Windows"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/TimothyStiles/poly/issues/16"}),"Coming soon...")))}p.isMDXComponent=!0},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return y}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,y=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return n?r.a.createElement(y,l(l({ref:t},s),{},{components:n})):r.a.createElement(y,l({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);