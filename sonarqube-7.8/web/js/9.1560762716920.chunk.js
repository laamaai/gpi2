(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1348:function(t,e,n){"use strict";function r(t){for(var e,n,r=0;r<t.length;r++){if("---"===t[r].trim()){if(void 0!==e){n=r;break}e=r}}return void 0!==n?{firstLine:e,lastLine:n}:void 0}function o(t){for(var e={},n=0;n<t.length;n++){var r=t[n].split(":").map(function(t){return t.trim()});2===r.length&&(e[r[0]]=r[1])}return e}function c(t,e){for(var n="\x3c!-- "+e+" --\x3e",r="\x3c!-- /"+e+" --\x3e",o=t,c=o.indexOf(n),a=o.indexOf(r);-1!==c&&-1!==a;)c=(o=o.substring(0,c)+o.substring(a+r.length)).indexOf(n),a=o.indexOf(r);return o}t.exports={getFrontMatter:function(t){var e=t.split("\n"),n=r(e);return n?o(e.slice(n.firstLine+1,n.lastLine)):{}},separateFrontMatter:function(t){var e=t.split("\n"),n=r(e);if(n){var c=o(e.slice(n.firstLine+1,n.lastLine)),a=e.slice(n.lastLine+1).join("\n");return{frontmatter:c,content:a}}return{frontmatter:{},content:t}},filterContent:function(t){var e="\x3c!-- \\/?(sonarqube|sonarcloud|static) --\x3e",r=n(110),o=r.isSonarCloud,a=r.getInstance,i=c(t.replace(/{instance}/gi,a()),"static");return(o()?c(i,"sonarqube"):c(i,"sonarcloud")).replace(new RegExp("^"+e+"(\n|\r|\r\n|$)","gm"),"").replace(new RegExp(""+e,"g"),"")}}},823:function(t,e,n){"use strict";n.r(e);var r,o=n(693),c=n(694),a=n(1207),i=n.n(a),l=n(1349),s=n.n(l),u=n(1361),p=n.n(u),f=n(1925),h=n.n(f),d=n(699),m=n(841),v=n(110),y=n(856),O=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),b=function(){return(b=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},g=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&(n[r[o]]=t[r[o]])}return n},w="/#sonarcloud#/",j="/#sonarqube#/",_="/#sonarqube-admin#/",E=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.handleClickOnAnchor=function(t){var n=e.props,r=n.customProps,o=n.href,c=void 0===o?"#":o;r&&r.onAnchorClick&&r.onAnchorClick(c,t)},e}return O(e,t),e.prototype.render=function(){var t=this.props,e=t.children,n=t.href,r=(t.customProps,g(t,["children","href","customProps"]));if(n&&n.startsWith("#"))return o.createElement("a",{href:"#",onClick:this.handleClickOnAnchor},e);if(n&&n.startsWith("/")){if(n.startsWith(w))return o.createElement(k,{url:n},e);if(n.startsWith(j))return o.createElement(C,{url:n},e);if(n.startsWith(_))return o.createElement(A,{canAdmin:this.props.appState.canAdmin,url:n},e);var c="/documentation"+n;return o.createElement(d.Link,b({to:c},r),e)}return o.createElement(o.Fragment,null,o.createElement("a",b({href:n,rel:"noopener noreferrer",target:"_blank"},r),e),o.createElement(m.a,{className:"text-muted little-spacer-left little-spacer-right text-baseline",size:12}))},e}(o.PureComponent),P=Object(y.a)(E);function k(t){var e=t.children,n=t.url;if(Object(v.isSonarCloud)()){var r="/"+n.substr(w.length);return o.createElement(d.Link,{to:r},e)}return o.createElement(o.Fragment,null,e)}function C(t){var e=t.children,n=t.url;if(Object(v.isSonarCloud)())return o.createElement(o.Fragment,null,e);var r="/"+n.substr(j.length);return o.createElement(d.Link,{target:"_blank",to:r},e)}function A(t){var e=t.canAdmin,n=t.children,r=t.url;if(Object(v.isSonarCloud)()||!e)return o.createElement(o.Fragment,null,n);var c="/"+r.substr(_.length);return o.createElement(d.Link,{target:"_blank",to:c},n)}var x=n(700),S=function(){return(S=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},N=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&(n[r[o]]=t[r[o]])}return n};function L(t){var e=t.alt,n=t.src,r=N(t,["alt","src"]);return o.createElement("img",S({alt:e,className:"max-width-100",src:Object(x.b)()+"/images/embed-doc"+n},r))}var z=n(113),F=n.n(z),H=n(754),W=n.n(H),M=n(836),q=n(1926),D=n.n(q);function T(){return this.use(p.a),function(t){var e=D()(t,{heading:"doctoc",maxDepth:2});null!==e.index&&-1!==e.index&&e.map?t.children=[e.map]:t.children=[]}}var R=n(28),I=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),J=function(t){function e(e){var n=t.call(this,e)||this;return n.node=null,n.state={anchors:[]},n.scrollHandler=function(){var t=Object(M.findDOMNode)(n);if(t&&t.parentNode){for(var e,r=t.parentNode.querySelectorAll("h2[id]"),o=window.pageYOffset||document.body.scrollTop,c=0,a=r.length;c<a&&!(r.item(c).offsetTop>o+120);c++)e="#"+r.item(c).id;n.setState({highlightAnchor:e})}},n.debouncedScrollHandler=W()(n.scrollHandler),n}return I(e,t),e.getDerivedStateFromProps=function(t){var n=t.content;return{anchors:e.getAnchors(n)}},e.prototype.componentDidMount=function(){window.addEventListener("scroll",this.debouncedScrollHandler,!0),this.scrollHandler()},e.prototype.componentWillUnmount=function(){window.removeEventListener("scroll",this.debouncedScrollHandler,!0)},e.prototype.render=function(){var t=this,e=this.state,n=e.anchors,r=e.highlightAnchor;return 0===n.length?null:o.createElement("div",{className:"markdown-toc"},o.createElement("div",{className:"markdown-toc-content"},o.createElement("h4",null,Object(R.l)("documentation.on_this_page")),n.map(function(e){return o.createElement("a",{className:c({active:r===e.href}),href:e.href,key:e.title,onClick:function(n){t.props.onAnchorClick(e.href,n)}},e.title)})))},e.getAnchors=F()(function(t){var e=i()().use(s.a).use(T).processSync("\n## doctoc\n"+t);if(e&&e.contents.props.children){for(var n=e.contents,r=10;r&&n.props.children.length&&"ul"!==n.type;)n=n.props.children[0],r--;if("ul"===n.type&&n.props.children.length)return n.props.children.map(function(t){if("string"==typeof t)return null;var e=t.props.children[0];return{href:e.props.href,title:e.props.children[0]}}).filter(function(t){return t})}return[]}),e}(o.PureComponent),U=n(1204),Y=n.n(U),$=function(){return($=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},B=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&(n[r[o]]=t[r[o]])}return n},G="/#sonarcloud#/";function K(t){var e=t.children,n=t.customProps,r=t.href,c=B(t,["children","customProps","href"]);return n&&Y()(n,function(t,e){r&&(r=r.replace("#"+e+"#",encodeURIComponent(t)))}),r&&r.startsWith("/")?(r=r.startsWith(G)?"/"+r.substr(G.length):"/documentation/"+r.substr(1),o.createElement(d.Link,$({rel:"noopener noreferrer",target:"_blank",to:r},c),e)):o.createElement(o.Fragment,null,o.createElement("a",$({href:r,rel:"noopener noreferrer",target:"_blank"},c),e),o.createElement(m.a,{className:"little-spacer-left little-spacer-right text-baseline",size:12}))}var Q=n(845),V=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),X=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={open:!1},e.handleClick=function(t){e.setState(function(t){return{open:!t.open}}),t.stopPropagation(),t.preventDefault()},e}return V(e,t),e.prototype.renderTitle=function(t){return o.createElement("a",{"aria-expanded":this.state.open,"aria-haspopup":!0,className:"link-no-underline",href:"#",onClick:this.handleClick},o.createElement(Q.a,{className:"text-middle little-spacer-right",open:this.state.open}),t.props?t.props.children:t)},e.prototype.render=function(){var t=o.Children.toArray(this.props.children);if(t.length<1)return null;var e=o.Children.toArray(t[0].props.children);return e.length<2?null:o.createElement("div",{className:"collapse-container"},this.renderTitle(e[0]),this.state.open&&e.slice(1))},e}(o.PureComponent),Z=n(1348),tt=n(827),et=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),nt=function(){return(nt=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},rt=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.node=null,e.handleAnchorClick=function(t,n){if(e.node){var r=e.node.querySelector(t);r&&(n.preventDefault(),Object(tt.b)(r,{bottomOffset:window.innerHeight-80}),history.pushState&&history.pushState(null,"",t))}},e}return et(e,t),e.prototype.render=function(){var t=this,e=this.props,n=e.childProps,r=e.content,a=e.className,l=e.displayH1,u=e.stickyToc,f=e.isTooltip,d=Object(Z.separateFrontMatter)(r||""),m=Object(Z.filterContent)(d.content),v=i()();return v.use(h.a,{danger:{classes:"alert alert-danger"},warning:{classes:"alert alert-warning"},info:{classes:"alert alert-info"},success:{classes:"alert alert-success"},collapse:{classes:"collapse"}}).use(s.a,{remarkReactComponents:{div:ct,a:f?ot(K,n):ot(P,{onAnchorClick:this.handleAnchorClick}),img:L},toHast:{},sanitize:!1}).use(p.a),o.createElement("div",{className:c("markdown",a,{"has-toc":u}),ref:function(e){return t.node=e}},o.createElement("div",{className:"markdown-content"},l&&o.createElement("h1",{className:"documentation-title"},d.frontmatter.title),v.processSync(m).contents),u&&o.createElement(J,{content:m,onAnchorClick:this.handleAnchorClick}))},e}(o.PureComponent);e.default=rt;function ot(t,e){return function(n){return o.createElement(t,nt({customProps:e},n))}}function ct(t){return t.className?t.className.includes("collapse")?o.createElement(X,null,t.children):o.createElement("div",{className:c("cut-margins",t.className)},t.children):t.children}},829:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n(693),o=n(698);function c(t){var e=t.className,n=t.fill,c=void 0===n?"currentColor":n,a=t.size;return r.createElement(o.a,{className:e,size:a},r.createElement("path",{d:"M7.72 11.596L3.119 6.992A.382.382 0 0 1 3 6.713c0-.108.04-.2.118-.279l1.03-1.03a.382.382 0 0 1 .278-.117c.108 0 .201.04.28.117L8 8.7l3.294-3.295a.382.382 0 0 1 .28-.117c.108 0 .2.04.279.117l1.03 1.03a.382.382 0 0 1 .117.28c0 .107-.04.2-.118.278L8.28 11.596a.382.382 0 0 1-.279.117.382.382 0 0 1-.28-.117z",style:{fill:c}}))}},841:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n(693),o=n(698);function c(t){var e=t.className,n=t.fill,c=void 0===n?"currentColor":n,a=t.size;return r.createElement(o.a,{className:e,size:a},r.createElement("path",{d:"M12 9.25v2.5A2.25 2.25 0 0 1 9.75 14h-6.5A2.25 2.25 0 0 1 1 11.75v-6.5A2.25 2.25 0 0 1 3.25 3h5.5c.14 0 .25.11.25.25v.5c0 .14-.11.25-.25.25h-5.5C2.562 4 2 4.563 2 5.25v6.5c0 .688.563 1.25 1.25 1.25h6.5c.688 0 1.25-.563 1.25-1.25v-2.5c0-.14.11-.25.25-.25h.5c.14 0 .25.11.25.25zm3-6.75v4c0 .273-.227.5-.5.5a.497.497 0 0 1-.352-.148l-1.375-1.375L7.68 10.57a.27.27 0 0 1-.18.078.27.27 0 0 1-.18-.078l-.89-.89a.27.27 0 0 1-.078-.18.27.27 0 0 1 .078-.18l5.093-5.093-1.375-1.375A.497.497 0 0 1 10 2.5c0-.273.227-.5.5-.5h4c.273 0 .5.227.5.5z",style:{fill:c}}))}},845:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var r=n(693),o=n(829),c=n(839),a=function(){return(a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},i=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&(n[r[o]]=t[r[o]])}return n};function l(t){var e=t.open,n=i(t,["open"]);return e?r.createElement(o.a,a({},n)):r.createElement(c.a,a({},n))}},856:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r,o=n(693),c=n(705),a=n(785),i=n(707),l=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=function(){return(s=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function u(t){var e=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return l(n,e),n.prototype.render=function(){return o.createElement(t,s({},this.props))},n.displayName=Object(a.a)(t,"withAppState"),n}(o.Component);return Object(c.connect)(function(t){return{appState:Object(i.getAppState)(t)}})(e)}}}]);
//# sourceMappingURL=9.1560762716920.chunk.js.map