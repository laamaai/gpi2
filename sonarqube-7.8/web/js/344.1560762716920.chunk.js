(window.webpackJsonp=window.webpackJsonp||[]).push([[344,22,367],{1978:function(t,e,n){"use strict";n.r(e);var r,o=n(693),i=n(705),a=n(854),c=n(780),s=n(707),u=n(775),l=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.refreshOrganization=function(){return e.props.organization&&e.props.fetchOrganization(e.props.organization.key)},e}return l(e,t),e.prototype.render=function(){var t=this.props.params,e=t.extensionKey,n=t.pluginKey,r=this.props.organization;if(!r)return null;var i=r.actions,s=void 0===i?{}:i,u=r.pages,l=void 0===u?[]:u;s.admin&&r.adminPages&&(l=l.concat(r.adminPages));var p=l.find(function(t){return t.key===n+"/"+e});return p?o.createElement(a.a,{extension:p,options:{organization:r,refreshOrganization:this.refreshOrganization}}):o.createElement(c.default,{withContainer:!1})},e}(o.PureComponent),f={fetchOrganization:u.f};e.default=Object(i.connect)(function(t,e){return{organization:Object(s.getOrganizationByKey)(t,e.params.organizationKey)}},f)(p)},764:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return c});var r=n(693),o=n(834),i=n(701),a=n(805);function c(t){var e=t.children;return r.createElement("div",{className:"global-container"},r.createElement("div",{className:"page-wrapper",id:"container"},r.createElement(a.a,{className:"navbar-global",height:i.globalNavHeightRaw}),e),r.createElement(o.a,null))}},765:function(t,e,n){"use strict";n.d(e,"b",function(){return s}),n.d(e,"a",function(){return u});var r=n(700),o=n(83),i=function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function a(t){try{s(r.next(t))}catch(t){i(t)}}function c(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(a,c)}s((r=r.apply(t,e||[])).next())})},a=function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},c=!1;function s(t,e){return void 0===e&&(e="body"),new Promise(function(n){var o=document.createElement("script");o.src=""+Object(r.b)()+t,o.onload=n,document.getElementsByTagName(e)[0].appendChild(o)})}function u(t){return i(this,void 0,void 0,function(){var e,r;return a(this,function(i){switch(i.label){case 0:return(e=Object(o.a)(t))?[2,Promise.resolve(e)]:c?[3,2]:[4,Promise.all([n.e(0),n.e(1),n.e(16),n.e(283)]).then(n.bind(null,910))];case 1:(0,i.sent().default)(),c=!0,i.label=2;case 2:return[4,s("/static/"+t+".js")];case 3:return i.sent(),(r=Object(o.a)(t))?[2,r]:[2,Promise.reject()]}})})}},780:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return s});var r=n(693),o=n(709),i=n(699),a=n(764),c=n(28);function s(t){var e=t.withContainer,n=void 0===e||e?a.default:r.Fragment;return r.createElement(n,null,r.createElement(o.Helmet,{defaultTitle:Object(c.l)("404_not_found"),defer:!1}),r.createElement("div",{className:"page-wrapper-simple",id:"bd"},r.createElement("div",{className:"page-simple",id:"nonav"},r.createElement("h2",{className:"big-spacer-bottom"},Object(c.l)("page_not_found")),r.createElement("p",{className:"spacer-bottom"},Object(c.l)("address_mistyped_or_page_moved")),r.createElement("p",null,r.createElement(i.Link,{to:"/"},Object(c.l)("go_back_to_homepage"))))))}},854:function(t,e,n){"use strict";var r,o=n(693),i=n(709),a=n.n(i),c=n(688),s=n(705),u=n(756),l=n(736),p=n(765),f=n(748),h=n(28),d=n(707),m=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),b=function(){return(b=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},y=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={},e.handleStart=function(t){var n=Object(u.default)(),r=t(b({store:n,el:e.container,currentUser:e.props.currentUser,intl:e.props.intl,location:e.props.location,router:e.props.router},e.props.options));o.isValidElement(r)?e.setState({extensionElement:r}):e.stop=r},e.handleFailure=function(){e.props.onFail(Object(h.l)("page_extension_failed"))},e}return m(e,t),e.prototype.componentDidMount=function(){this.startExtension()},e.prototype.componentDidUpdate=function(t){t.extension!==this.props.extension?(this.stopExtension(),this.startExtension()):t.location!==this.props.location&&this.startExtension()},e.prototype.componentWillUnmount=function(){this.stopExtension()},e.prototype.startExtension=function(){Object(p.a)(this.props.extension.key).then(this.handleStart,this.handleFailure)},e.prototype.stopExtension=function(){this.stop&&(this.stop(),this.stop=void 0)},e.prototype.render=function(){var t=this;return o.createElement("div",null,o.createElement(a.a,{title:this.props.extension.name}),this.state.extensionElement?this.state.extensionElement:o.createElement("div",{ref:function(e){return t.container=e}}))},e}(o.PureComponent),v={onFail:f.a};e.a=Object(c.injectIntl)(Object(l.a)(Object(s.connect)(function(t){return{currentUser:Object(d.getCurrentUser)(t)}},v)(y)))}}]);
//# sourceMappingURL=344.1560762716920.chunk.js.map