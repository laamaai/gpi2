(window.webpackJsonp=window.webpackJsonp||[]).push([[345,22,367],{1631:function(e,t,n){"use strict";n.r(t);var o=n(363),s=n(375),i=n(524),a=n(450);const r={onFail:n(418).a};t.default=Object(s.connect)(null,r)(function(e){const t=e.params,n=t.extensionKey,s=t.pluginKey,r=e.component,c=r.configuration&&(r.configuration.extensions||[]).find(e=>e.key==="".concat(s,"/").concat(n));return c?o.createElement(i.a,{extension:c,options:{component:r}}):o.createElement(a.default,{withContainer:!1})})},434:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return r});var o=n(363),s=n(504),i=n(371),a=n(475);function r(e){let t=e.children;return o.createElement("div",{className:"global-container"},o.createElement("div",{className:"page-wrapper",id:"container"},o.createElement(a.a,{className:"navbar-global",height:i.globalNavHeightRaw}),t),o.createElement(s.a,null))}},435:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r});var o=n(370),s=n(9);let i=!1;function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"body";return new Promise(n=>{const s=document.createElement("script");s.src="".concat(Object(o.b)()).concat(e),s.onload=n,document.getElementsByTagName(t)[0].appendChild(s)})}async function r(e){const t=Object(s.a)(e);if(t)return Promise.resolve(t);if(!i){(0,(await Promise.all([n.e(0),n.e(1),n.e(16),n.e(283)]).then(n.bind(null,580))).default)(),i=!0}await a("/static/".concat(e,".js"));const o=Object(s.a)(e);return o||Promise.reject()}},450:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c});var o=n(363),s=n(379),i=n(369),a=n(434),r=n(0);function c(e){let t=e.withContainer;const n=void 0===t||t?a.default:o.Fragment;return o.createElement(n,null,o.createElement(s.Helmet,{defaultTitle:Object(r.l)("404_not_found"),defer:!1}),o.createElement("div",{className:"page-wrapper-simple",id:"bd"},o.createElement("div",{className:"page-simple",id:"nonav"},o.createElement("h2",{className:"big-spacer-bottom"},Object(r.l)("page_not_found")),o.createElement("p",{className:"spacer-bottom"},Object(r.l)("address_mistyped_or_page_moved")),o.createElement("p",null,o.createElement(i.Link,{to:"/"},Object(r.l)("go_back_to_homepage"))))))}},524:function(e,t,n){"use strict";var o=n(363),s=n(379),i=n.n(s),a=n(358),r=n(375),c=n(426),l=n(406),p=n(435),u=n(418),m=n(0),d=n(377);const h={onFail:u.a};t.a=Object(a.injectIntl)(Object(l.a)(Object(r.connect)(e=>({currentUser:Object(d.getCurrentUser)(e)}),h)(class extends o.PureComponent{constructor(){super(...arguments),this.state={},this.handleStart=(e=>{const t=Object(c.default)(),n=e(Object.assign({store:t,el:this.container,currentUser:this.props.currentUser,intl:this.props.intl,location:this.props.location,router:this.props.router},this.props.options));o.isValidElement(n)?this.setState({extensionElement:n}):this.stop=n}),this.handleFailure=(()=>{this.props.onFail(Object(m.l)("page_extension_failed"))})}componentDidMount(){this.startExtension()}componentDidUpdate(e){e.extension!==this.props.extension?(this.stopExtension(),this.startExtension()):e.location!==this.props.location&&this.startExtension()}componentWillUnmount(){this.stopExtension()}startExtension(){Object(p.a)(this.props.extension.key).then(this.handleStart,this.handleFailure)}stopExtension(){this.stop&&(this.stop(),this.stop=void 0)}render(){return o.createElement("div",null,o.createElement(i.a,{title:this.props.extension.name}),this.state.extensionElement?this.state.extensionElement:o.createElement("div",{ref:e=>this.container=e}))}})))}}]);
//# sourceMappingURL=345.m.67252d98.chunk.js.map