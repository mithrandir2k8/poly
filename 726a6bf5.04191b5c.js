(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(9),o=(n(0),n(173)),i={id:"library-hashing",title:"Hashing Sequences"},c={id:"library-hashing",isDocsHomePage:!1,title:"Hashing Sequences",description:"poly provides what are likely the only open source sequence hashing functions that handle circular sequences. By utilizing Booth's Least Rotation Algorithm we're able to determistically rotate circular sequences to a fixed point which makes it possible to hash them. More info on Booth's Least Rotation here.",source:"@site/docs/library-hashing.md",permalink:"/poly/docs/library-hashing",editUrl:"https://github.com/timothystiles/poly/edit/prime/docs/library-hashing.md"},s=[{value:"Blake3 Hashing",id:"blake3-hashing",children:[]},{value:"Generic Hashing",id:"generic-hashing",children:[]},{value:"More Info",id:"more-info",children:[]}],h={rightToc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"poly")," provides what are likely the only open source sequence hashing functions that handle circular sequences. By utilizing Booth's Least Rotation Algorithm we're able to determistically rotate circular sequences to a fixed point which makes it possible to hash them. ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#more-info"}),"More info on Booth's Least Rotation here"),"."),Object(o.b)("p",null,"Hashes make incredibly powerful unique identifiers and with a wide array of hash function options including the superfast blake3 ",Object(o.b)("inlineCode",{parentName:"p"},"poly")," has all your hashing needs covered."),Object(o.b)("h2",{id:"blake3-hashing"},"Blake3 Hashing"),Object(o.b)("p",null,"The golang team is currently figuring out the best way to implement blake3 into the standard library but in the meantime ",Object(o.b)("inlineCode",{parentName:"p"},"poly")," provides this special function and method wrapper to hash sequences using blake3. This will eventually be deprecated in favor of only using the ",Object(o.b)("inlineCode",{parentName:"p"},"GenericSequenceHash()")," function and ",Object(o.b)("inlineCode",{parentName:"p"},".Hash()")," method wrapper."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'  // getting our example Sequence struct\n  puc19AnnotatedSequence := ReadJSON("data/puc19static.json")\n\n  // there are two ways to use the blake3 Least Rotation hasher.\n\n  // the first is with the method wrapper.\n  puc19Blake3Hash := puc19AnnotatedSequence.Blake3Hash()\n  fmt.Println(puc19Blake3Hash)\n\n  // the second is with the Blake3SequenceHash(sequence Sequence) function.\n  puc19Blake3Hash = puc19AnnotatedSequence.Blake3Hash()\n  fmt.Println(puc19Blake3Hash)\n')),Object(o.b)("p",null,"Again, this will be deprecated in favor of using generic hashing with blake3 in the future when available."),Object(o.b)("h2",{id:"generic-hashing"},"Generic Hashing"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"poly")," also provides a generic hashing function and method wrapper for hashing sequences with arbitrary hashing functions that use the golang standard library's hash function interface. Check out this switch statement in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/TimothyStiles/poly/blob/f51ec1c08820394d7cab89a5a4af92d9b803f0a4/commands.go#L261"}),"hash command source code")," to see all that ",Object(o.b)("inlineCode",{parentName:"p"},"poly")," provides in the command line utility alone."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'  // getting our example Sequence struct\n  puc19AnnotatedSequence := ReadJSON("data/puc19static.json")\n\n  // there are two ways to use the Least Rotation generic hasher.\n\n  // the first is with the method wrapper where you pass your hashing function as an argument.\n  puc19Sha1Hash := puc19AnnotatedSequence.Hash(crypto.SHA1)\n  fmt.Println(puc19Sha1Hash)\n\n  // the second is with the GenericSequenceHash() function where you pass an Sequence along with a hash function as arguments.\n  puc19Sha1Hash = GenericSequenceHash(puc19AnnotatedSequence, crypto.SHA1)\n  fmt.Println(puc19Sha1Hash)\n')),Object(o.b)("h2",{id:"more-info"},"More Info"),Object(o.b)("p",null,"For more info about circular sequence hashing and Booth's Least Rotation algorithm check out this ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.ginkgobioworks.com/2020/04/20/fast-database-lookups-for-circular-dna-sequences/"}),"dev blog")," by ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://twitter.com/hofer"}),"Josh Hoffer")," and this ridiculously hard to read ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Lexicographically_minimal_string_rotation#Booth's_Algorithm"}),"python implementation of Booth's Least Rotation on wikipedia"),"."),Object(o.b)("p",null,"For an easier to read implementation of Booth's Least Rotation you can also check out our ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/TimothyStiles/poly/blob/346e3eb58cdd74db14eba333ba428256f77c93b0/hash.go#L40"}),"original implementation"),"."))}l.isMDXComponent=!0},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var h=r.a.createContext({}),l=function(e){var t=r.a.useContext(h),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(h.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=l(n),b=a,d=u["".concat(i,".").concat(b)]||u[b]||p[b]||o;return n?r.a.createElement(d,c(c({ref:t},h),{},{components:n})):r.a.createElement(d,c({ref:t},h))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var h=2;h<o;h++)i[h]=n[h];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);