(window.webpackJsonp=window.webpackJsonp||[]).push([[379],{1032:function(t,e,a){"use strict";a.r(e),a.d(e,"default",function(){return i});var n=a(693),r=a(950);function i(t){var e=t.height,a=t.padding,i=void 0===a?[0,0,0,0]:a,u=t.width,l=u-i[1]-i[3],c=e-i[0]-i[2],d=Math.min(l,c),o=Math.floor(d/2),f=Object(r.e)().sort(null).value(function(t){return t.value})(t.data).map(function(e,a){return n.createElement(s,{data:e,fill:t.data[a].fill,key:a,radius:o,thickness:t.thickness})});return n.createElement("svg",{className:"donut-chart",height:e,width:u},n.createElement("g",{transform:"translate("+i[3]+", "+i[0]+")"},n.createElement("g",{transform:"translate("+o+", "+o+")"},f)))}function s(t){var e=Object(r.a)().outerRadius(t.radius).innerRadius(t.radius-t.thickness)(t.data);return n.createElement("path",{d:e,style:{fill:t.fill}})}}}]);
//# sourceMappingURL=379.1560762716920.chunk.js.map