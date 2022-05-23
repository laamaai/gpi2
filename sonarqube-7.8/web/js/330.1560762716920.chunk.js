(window.webpackJsonp=window.webpackJsonp||[]).push([[330],{1734:function(t,e,n){var r=n(1735);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(697)(r,o);r.locals&&(t.exports=r.locals)},1735:function(t,e,n){(t.exports=n(696)(!1)).push([t.i,".quality-profiles-table{padding-top:7px}.quality-profiles-table-inheritance{width:280px}.quality-profiles-table-date,.quality-profiles-table-projects,.quality-profiles-table-rules{min-width:80px}.quality-profiles-list-header{line-height:24px;margin-bottom:20px;padding:5px 10px;border-bottom:1px solid #e6e6e6}.quality-profile-grid{display:flex;justify-content:space-between;align-items:flex-start}.quality-profile-grid-left{width:340px;flex-shrink:0}.quality-profile-grid-right{flex-grow:1;margin-left:20px}.quality-profile-rules-distribution{margin-bottom:15px;padding:7px 20px 0}.quality-profile-rules-deprecated{margin-top:20px;padding:15px 20px;background-color:#f2dede}.quality-profile-rules-sonarway-missing{margin-top:20px;padding:15px 20px;background-color:#fcf8e3}.quality-profile-not-found{padding-top:100px;text-align:center}.quality-profiles-evolution{padding-top:55px}.quality-profiles-evolution-deprecated{border-color:#ebccd1;background-color:#f2dede}.quality-profiles-evolution-stagnant{border-color:#faebcc;background-color:#fcf8e3}.quality-profile-comparison-table{table-layout:fixed}.quality-profile-changelog-rule-cell{line-height:1.5}.quality-profile-changelog-parameter{max-width:270px;word-break:break-word}",""])},2043:function(t,e,n){"use strict";n.r(e);var r,o=n(705),i=n(693),a=n(738),u=n(716),c=n(804),p=n(998),s=n(28),l=(n(1734),r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mounted=!1,e.state={loading:!0},e.updateProfiles=function(){return e.fetchProfiles().then(function(t){e.mounted&&e.setState({profiles:Object(c.g)(t.profiles)})})},e}return l(e,t),e.prototype.componentDidMount=function(){this.mounted=!0,this.loadData()},e.prototype.componentWillUnmount=function(){this.mounted=!1},e.prototype.fetchProfiles=function(){var t=this.props.organization,e=t?{organization:t.key}:{};return Object(a.y)(e)},e.prototype.loadData=function(){var t=this;this.setState({loading:!0}),Promise.all([Object(a.n)(),this.fetchProfiles()]).then(function(e){if(t.mounted){var n=e[0],r=e[1];t.setState({actions:r.actions,exporters:n,profiles:Object(c.g)(r.profiles),loading:!1})}},function(){t.mounted&&t.setState({loading:!1})})},e.prototype.renderChild=function(){if(this.state.loading)return i.createElement("i",{className:"spinner"});var t=this.props.organization,e=Object.values(this.props.languages);return i.cloneElement(this.props.children,{actions:this.state.actions||{},profiles:this.state.profiles||[],languages:e,exporters:this.state.exporters,updateProfiles:this.updateProfiles,organization:t?t.key:null})},e.prototype.render=function(){return i.createElement("div",{className:"page page-limited"},i.createElement(u.a,{suggestions:"quality_profiles"}),i.createElement(p.a,{organization:this.props.organization,title:Object(s.l)("quality_profiles.page")}),this.renderChild())},e}(i.PureComponent),d=n(707);e.default=Object(o.connect)(function(t,e){return{languages:Object(d.getLanguages)(t),organization:e.params.organizationKey?Object(d.getOrganizationByKey)(t,e.params.organizationKey):void 0}})(f)},716:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r,o=n(693),i=n(739),a=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});function u(t){var e=t.suggestions;return o.createElement(i.a.Consumer,null,function(t){var n=t.addSuggestions,r=t.removeSuggestions;return o.createElement(c,{addSuggestions:n,removeSuggestions:r,suggestions:e})})}var c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.componentDidMount=function(){this.props.addSuggestions(this.props.suggestions)},e.prototype.componentDidUpdate=function(t){t.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(t.suggestions))},e.prototype.componentWillUnmount=function(){this.props.removeSuggestions(this.props.suggestions)},e.prototype.render=function(){return null},e}(o.PureComponent)},738:function(t,e,n){"use strict";n.d(e,"y",function(){return p}),n.d(e,"s",function(){return s}),n.d(e,"j",function(){return l}),n.d(e,"w",function(){return f}),n.d(e,"r",function(){return d}),n.d(e,"q",function(){return g}),n.d(e,"A",function(){return y}),n.d(e,"v",function(){return h}),n.d(e,"i",function(){return b}),n.d(e,"l",function(){return m}),n.d(e,"g",function(){return O}),n.d(e,"o",function(){return j}),n.d(e,"n",function(){return q}),n.d(e,"p",function(){return v}),n.d(e,"h",function(){return x}),n.d(e,"d",function(){return _}),n.d(e,"m",function(){return S}),n.d(e,"z",function(){return w}),n.d(e,"x",function(){return N}),n.d(e,"c",function(){return k}),n.d(e,"u",function(){return J}),n.d(e,"b",function(){return P}),n.d(e,"t",function(){return z}),n.d(e,"e",function(){return K}),n.d(e,"f",function(){return E}),n.d(e,"a",function(){return D}),n.d(e,"k",function(){return C});var r=n(741),o=n.n(r),i=n(819),a=n(38),u=n(712),c=function(){return(c=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function p(t){return Object(a.getJSON)("/api/qualityprofiles/search",t).catch(u.a)}function s(t){return Object(a.getJSON)("/api/qualityprofiles/show",t)}function l(t){return Object(a.request)("/api/qualityprofiles/create").setMethod("post").setData(t).submit().then(a.checkStatus).then(a.parseJSON).catch(u.a)}function f(t){return Object(a.request)("/api/qualityprofiles/restore").setMethod("post").setData(t).submit().then(a.checkStatus).then(a.parseJSON).catch(u.a)}function d(t){return Object(a.getJSON)("/api/qualityprofiles/projects",t).catch(u.a)}function g(t){return Object(a.getJSON)("/api/qualityprofiles/inheritance",{profileKey:t}).catch(u.a)}function y(t){return Object(a.post)("/api/qualityprofiles/set_default",{profileKey:t})}function h(t,e){return Object(a.post)("/api/qualityprofiles/rename",{key:t,name:e}).catch(u.a)}function b(t,e){return Object(a.postJSON)("/api/qualityprofiles/copy",{fromKey:t,toName:e}).catch(u.a)}function m(t){return Object(a.post)("/api/qualityprofiles/delete",{profileKey:t}).catch(u.a)}function O(t,e){return Object(a.post)("/api/qualityprofiles/change_parent",{profileKey:t,parentKey:e}).catch(u.a)}function j(){return Object(a.getJSON)("/api/qualityprofiles/importers").then(function(t){return t.importers},u.a)}function q(){return Object(a.getJSON)("/api/qualityprofiles/exporters").then(function(t){return t.exporters})}function v(t){return Object(a.getJSON)("/api/qualityprofiles/changelog",t)}function x(t,e){return Object(a.getJSON)("/api/qualityprofiles/compare",{leftKey:t,rightKey:e})}function _(t,e){return Object(a.post)("/api/qualityprofiles/add_project",{key:t,project:e}).catch(u.a)}function S(t,e){return Object(a.post)("/api/qualityprofiles/remove_project",{key:t,project:e}).catch(u.a)}function w(t){return Object(a.getJSON)("/api/qualityprofiles/search_users",t).catch(u.a)}function N(t){return Object(a.getJSON)("/api/qualityprofiles/search_groups",t).catch(u.a)}function k(t){return Object(a.post)("/api/qualityprofiles/add_user",t).catch(u.a)}function J(t){return Object(a.post)("/api/qualityprofiles/remove_user",t).catch(u.a)}function P(t){return Object(a.post)("/api/qualityprofiles/add_group",t).catch(u.a)}function z(t){return Object(a.post)("/api/qualityprofiles/remove_group",t).catch(u.a)}function K(t){return Object(a.postJSON)("/api/qualityprofiles/activate_rules",t)}function E(t){return Object(a.postJSON)("/api/qualityprofiles/deactivate_rules",t)}function D(t){var e=t.params&&o()(t.params,function(t,e){return e+"="+Object(i.a)(t)}).join(";");return Object(a.post)("/api/qualityprofiles/activate_rule",c({},t,{params:e})).catch(u.a)}function C(t){return Object(a.post)("/api/qualityprofiles/deactivate_rule",t).catch(u.a)}},741:function(t,e,n){var r=n(181),o=n(111),i=n(800),a=n(51);t.exports=function(t,e){return(a(t)?r:i)(t,o(e,3))}},819:function(t,e,n){"use strict";function r(t){return'"'+t.replace(/"/g,'\\"')+'"'}n.d(e,"a",function(){return r})},998:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var r=n(693),o=n(709),i=n.n(o);function a(t){var e=t.title,n=t.organization,o=e+(n?" - "+n.name:"");return r.createElement(i.a,{defaultTitle:o,titleTemplate:"%s - "+o})}}}]);
//# sourceMappingURL=330.1560762716920.chunk.js.map