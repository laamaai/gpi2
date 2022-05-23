(window.webpackJsonp=window.webpackJsonp||[]).push([[309,22,367],{1390:function(e,t,n){"use strict";n.r(t),t.default="This organization is subscribed to a paid plan, allowing private projects. Its private projects, members, Quality Profiles and Quality Gates are visible to members only.\n\n---\n\nSee also: [Organization Visibility](/organizations/organization-visibility/)\n"},1684:function(e,t,n){"use strict";n.r(t);var a=n(363),i=n(379),r=n.n(i),o=n(375),s=n(380),c=n.n(s),l=n(369),m=n(522),u=n(385),p=n(373),g=n(389),d=n(770),h=n(422),b=n(0),v=n(370);function E(e){let t=e.currentUser,n=e.organization;const i=e.organizations.filter(e=>e.key!==n.key),r=n.actions&&n.actions.admin;let o,s,E;return n.alm?(o=Object(h.h)(n.alm.key),s=a.createElement(a.Fragment,null,a.createElement("p",null,Object(b.m)("organization.bound_to_x",Object(b.l)(o))),a.createElement("hr",{className:"spacer-top spacer-bottom"}),a.createElement("a",{href:n.alm.url,rel:"noopener noreferrer",target:"_blank"},Object(b.m)("organization.see_on_x",Object(b.l)(o)))),E="".concat(Object(v.b)(),"/images/sonarcloud/").concat(o,".svg")):Object(h.c)(t)&&(o=Object(h.b)(t)||"",s=a.createElement(a.Fragment,null,a.createElement("p",null,Object(b.m)("organization.not_bound_to_x",Object(b.l)(o))),r&&a.createElement(a.Fragment,null,a.createElement("hr",{className:"spacer-top spacer-bottom"}),a.createElement(l.Link,{to:"/organizations/".concat(n.key,"/edit")},Object(b.l)("organization.go_to_settings_to_bind")))),E="".concat(Object(v.b)(),"/images/sonarcloud/").concat(o,"-unbound.svg")),a.createElement("header",{className:"navbar-context-header"},a.createElement(m.a,{organization:n}),i.length?a.createElement(u.b,{className:"display-inline-block",overlay:a.createElement("ul",{className:"menu"},c()(i,e=>e.name.toLowerCase()).map(e=>a.createElement(d.a,{key:e.key,organization:e})))},a.createElement("a",{className:"display-inline-flex-center spacer-left link-base-color link-no-underline",href:"#"},n.name,a.createElement(g.a,{className:"little-spacer-left"}))):a.createElement("span",{className:"spacer-left"},n.name),o&&a.createElement(p.a,{mouseLeaveDelay:.25,overlay:s},a.createElement("img",{alt:Object(b.l)(o),className:"text-middle spacer-left",height:16,src:E,width:16})),null!=n.description&&a.createElement("div",{className:"navbar-context-description"},a.createElement("p",{className:"text-limited text-top",title:n.description},n.description)))}var f=n(599),y=n(393),z=n(14),O=n(501);function k(e){let t=e.currentUser,i=e.organization,r=e.userOrganizations;const o=Object(z.isSonarCloud)();return a.createElement("div",{className:"navbar-context-meta"},null!=i.url&&a.createElement("a",{className:"spacer-right text-limited",href:i.url,rel:"nofollow",title:i.url},i.url),o&&Object(O.c)(i)&&Object(O.a)(t,i,r)&&a.createElement(y.a,{className:"spacer-right",doc:Promise.resolve().then(n.bind(null,1390))},a.createElement("div",{className:"outline-badge"},Object(b.l)("organization.paid_plan.badge"))),a.createElement("div",{className:"text-muted"},a.createElement("strong",null,Object(b.l)("organization.key"),":")," ",i.key),o&&a.createElement("div",{className:"navbar-context-meta-secondary"},a.createElement(f.a,{currentPage:{type:"ORGANIZATION",organization:i.key}})))}var N=n(364);function j(e){let t=e.location,n=e.organization;const i=n.pages||[];if(0===i.length)return null;const r=i.some(e=>t.pathname==="/organizations/".concat(n.key,"/extension/").concat(e.key));return a.createElement(u.b,{overlay:a.createElement("ul",{className:"menu"},i.map(e=>a.createElement("li",{key:e.key},a.createElement(l.Link,{activeClassName:"active",to:"/organizations/".concat(n.key,"/extension/").concat(e.key)},e.name)))),tagName:"li"},a.createElement("a",{className:N("dropdown-toggle",{active:r}),href:"#",id:"organization-navigation-more"},Object(b.l)("more"),a.createElement(g.a,{className:"little-spacer-left"})))}const C=["edit","groups","permissions","permission_templates","projects_management","webhooks"];function x(e){let t=e.location,n=e.organization;const i=n.adminPages,r=void 0===i?[]:i,o=r.map(e=>"extension/".concat(e.key)).concat(C).some(e=>t.pathname.endsWith("organizations/".concat(n.key,"/").concat(e)));return a.createElement(u.b,{overlay:a.createElement("ul",{className:"menu"},a.createElement("li",null,a.createElement(l.Link,{activeClassName:"active",to:"/organizations/".concat(n.key,"/edit")},Object(b.l)("organization.settings"))),r.map(e=>a.createElement("li",{key:e.key},a.createElement(l.Link,{activeClassName:"active",to:"/organizations/".concat(n.key,"/extension/").concat(e.key)},e.name))),a.createElement("li",null,a.createElement(l.Link,{activeClassName:"active",to:"/organizations/".concat(n.key,"/groups")},Object(b.l)("user_groups.page"))),a.createElement("li",null,a.createElement(l.Link,{activeClassName:"active",to:"/organizations/".concat(n.key,"/permissions")},Object(b.l)("permissions.page"))),a.createElement("li",null,a.createElement(l.Link,{activeClassName:"active",to:"/organizations/".concat(n.key,"/permission_templates")},Object(b.l)("permission_templates"))),a.createElement("li",null,a.createElement(l.Link,{activeClassName:"active",to:"/organizations/".concat(n.key,"/projects_management")},Object(b.l)("projects_management"))),a.createElement("li",null,a.createElement(l.Link,{activeClassName:"active",to:"/organizations/".concat(n.key,"/webhooks")},Object(b.l)("webhooks.page")))),tagName:"li"},a.createElement("a",{className:N("dropdown-toggle",{active:o}),href:"#",id:"organization-navigation-admin"},Object(b.l)("layout.settings"),a.createElement(g.a,{className:"little-spacer-left"})))}var _=n(657),L=n(377);var w=Object(o.connect)(e=>({currentUser:Object(L.getCurrentUser)(e),userOrganizations:Object(L.getMyOrganizations)(e)}))(function(e){let t=e.currentUser,n=e.location,i=e.organization,r=e.userOrganizations;const o=Object(O.a)(t,i,r),s=i.actions,c=void 0===s?{}:s;return a.createElement(_.a,{className:"navbar-context-tabs"},a.createElement("li",null,a.createElement(l.Link,{activeClassName:"active",to:"/organizations/".concat(i.key,"/projects")},Object(b.l)("projects.page"))),a.createElement("li",null,a.createElement(l.Link,{activeClassName:"active",to:{pathname:"/organizations/".concat(i.key,"/issues"),query:{resolved:"false"}}},Object(b.l)("issues.page"))),o&&a.createElement("li",null,a.createElement(l.Link,{activeClassName:"active",to:"/organizations/".concat(i.key,"/quality_profiles")},Object(b.l)("quality_profiles.page"))),a.createElement("li",null,a.createElement(l.Link,{activeClassName:"active",to:"/organizations/".concat(i.key,"/rules")},Object(b.l)("coding_rules.page"))),o&&a.createElement("li",null,a.createElement(l.Link,{activeClassName:"active",to:Object(v.y)(i.key)},Object(b.l)("quality_gates.page"))),Object(O.b)(t,i,r)&&a.createElement("li",null,a.createElement(l.Link,{activeClassName:"active",to:"/organizations/".concat(i.key,"/members")},Object(b.l)("organization.members.page"))),a.createElement(j,{location:n,organization:i}),c.admin&&a.createElement(x,{location:n,organization:i}))}),P=n(371),U=n(714);function S(e){let t=e.currentUser,n=e.location,i=e.organization,r=e.userOrganizations;return a.createElement(U.a,{height:P.contextNavHeightRaw,id:"context-navigation"},a.createElement("div",{className:"navbar-context-justified"},a.createElement(E,{currentUser:t,organization:i,organizations:r}),a.createElement(k,{currentUser:t,organization:i,userOrganizations:r})),a.createElement(w,{location:n,organization:i}))}var D=n(450),T=n(386),W=n(445);n.d(t,"OrganizationPage",function(){return K});class K extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!0},this.stopLoading=(()=>{this.mounted&&this.setState({loading:!1})}),this.updateOrganization=(e=>{this.setState({loading:!0}),this.props.fetchOrganization(e).then(this.stopLoading,this.stopLoading)})}componentDidMount(){this.mounted=!0,this.updateOrganization(this.props.params.organizationKey)}componentWillReceiveProps(e){e.params.organizationKey!==this.props.params.organizationKey&&this.updateOrganization(e.params.organizationKey)}componentWillUnmount(){this.mounted=!1}render(){const e=this.props.organization;return e&&e.actions&&null!=e.actions.admin?a.createElement("div",null,a.createElement(r.a,{defaultTitle:e.name,titleTemplate:"%s - "+e.name}),a.createElement(T.a,{suggestions:"organization_space"}),a.createElement(S,{currentUser:this.props.currentUser,location:this.props.location,organization:e,userOrganizations:this.props.userOrganizations}),this.props.children):this.state.loading?null:a.createElement(D.default,{withContainer:!1})}}const M={fetchOrganization:W.f};t.default=Object(o.connect)((e,t)=>({currentUser:Object(L.getCurrentUser)(e),organization:Object(L.getOrganizationByKey)(e,t.params.organizationKey),userOrganizations:Object(L.getMyOrganizations)(e)}),M)(K)},381:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(363),i=n(364),r=n(373),o=n(419),s=n(371);n(391);function c(e){const t=e.children,n=void 0===t?a.createElement(o.a,{fill:s.gray71,size:12}):t,c=e.tagName,l=void 0===c?"div":c;return a.createElement(l,{className:i("help-tooltip",e.className)},a.createElement(r.a,{mouseLeaveDelay:.25,onShow:e.onShow,overlay:e.overlay,placement:e.placement},a.createElement("span",{className:"display-inline-flex-center"},n)))}},386:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(363),i=n(409);function r(e){let t=e.suggestions;return a.createElement(i.a.Consumer,null,e=>{let n=e.addSuggestions,i=e.removeSuggestions;return a.createElement(o,{addSuggestions:n,removeSuggestions:i,suggestions:t})})}class o extends a.PureComponent{componentDidMount(){this.props.addSuggestions(this.props.suggestions)}componentDidUpdate(e){e.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(e.suggestions))}componentWillUnmount(){this.props.removeSuggestions(this.props.suggestions)}render(){return null}}},391:function(e,t,n){var a=n(392);"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(367)(a,i);a.locals&&(e.exports=a.locals)},392:function(e,t,n){(e.exports=n(366)(!1)).push([e.i,".help-tooltip{display:inline-flex;align-items:center;vertical-align:middle}.help-toolip-link{display:block;width:12px;height:12px;border:none}",""])},393:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(363),i=n(381),r=n(378);const o=Object(r.a)(()=>Promise.all([n.e(7),n.e(9)]).then(n.bind(null,493)));class s extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={open:!1},this.close=(()=>{this.mounted&&this.setState({open:!1})})}componentDidMount(){this.mounted=!0,this.props.doc.then(e=>{let t=e.default;this.mounted&&this.setState({content:t})},()=>{}),document.addEventListener("scroll",this.close,!0)}componentWillUnmount(){this.mounted=!1,document.removeEventListener("scroll",this.close,!0)}render(){return this.state.content?a.createElement(i.a,{className:this.props.className,overlay:a.createElement("div",{className:"abs-width-300"},a.createElement(o,{childProps:this.props.overlayProps,className:"cut-margins",content:this.state.content,isTooltip:!0}))},this.props.children):this.props.children||null}}},422:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return r}),n.d(t,"c",function(){return o}),n.d(t,"d",function(){return s}),n.d(t,"e",function(){return c}),n.d(t,"g",function(){return l}),n.d(t,"f",function(){return m}),n.d(t,"h",function(){return u});var a=n(390);function i(e,t){return t.endsWith("/")||(t+="/"),c(e)?t.replace("github.com/","github.com/orgs/")+"people":t+"profile/members"}function r(e){return Object(a.b)(e)&&e.externalProvider?u(e.externalProvider):void 0}function o(e){return Object(a.b)(e)&&(s(e.externalProvider)||c(e.externalProvider))}function s(e){return e&&e.startsWith("bitbucket")}function c(e){return"github"===e}function l(e){return"microsoft"===e}function m(e){return Boolean(e&&e.personal)}function u(e){return s(e)?"bitbucket":e}},434:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return s});var a=n(363),i=n(504),r=n(371),o=n(475);function s(e){let t=e.children;return a.createElement("div",{className:"global-container"},a.createElement("div",{className:"page-wrapper",id:"container"},a.createElement(o.a,{className:"navbar-global",height:r.globalNavHeightRaw}),t),a.createElement(i.a,null))}},450:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c});var a=n(363),i=n(379),r=n(369),o=n(434),s=n(0);function c(e){let t=e.withContainer;const n=void 0===t||t?o.default:a.Fragment;return a.createElement(n,null,a.createElement(i.Helmet,{defaultTitle:Object(s.l)("404_not_found"),defer:!1}),a.createElement("div",{className:"page-wrapper-simple",id:"bd"},a.createElement("div",{className:"page-simple",id:"nonav"},a.createElement("h2",{className:"big-spacer-bottom"},Object(s.l)("page_not_found")),a.createElement("p",{className:"spacer-bottom"},Object(s.l)("address_mistyped_or_page_moved")),a.createElement("p",null,a.createElement(r.Link,{to:"/"},Object(s.l)("go_back_to_homepage"))))))}},501:function(e,t,n){"use strict";n.d(t,"c",function(){return i}),n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o});var a=n(390);function i(e){return Boolean(e&&"PAID"===e.subscription)}function r(e,t,n){return!i(t)||o(e,t,n)}function o(e,t,n){return Boolean(t&&Object(a.b)(e)&&(t.actions&&t.actions.admin||n.some(e=>e.key===t.key)))}},599:function(e,t,n){"use strict";var a=n(363),i=n(364),r=n(375),o=n(373),s=n(368),c=n(371);function l(e){let t=e.className,n=e.fill,r=void 0===n?c.orange:n,o=e.filled,l=void 0!==o&&o,m=e.size;return a.createElement(s.a,{className:i(t,"icon-outline",{"is-filled":l}),size:m,style:{color:r}},a.createElement("g",{transform:"matrix(0.870918,0,0,0.870918,0.978227,0.978227)"},a.createElement("path",{d:"M15.9,7.8L8.2,0.1C8.1,0 7.9,0 7.8,0.1L0.1,7.8C0,7.9 0,8.1 0.1,8.2C0.2,8.3 0.2,8.3 0.3,8.3L2.2,8.3L2.2,15.8C2.2,15.9 2.2,15.9 2.3,16C2.3,16 2.4,16.1 2.5,16.1L6.2,16.1C6.3,16.1 6.5,16 6.5,15.8L6.5,10.5L9.7,10.5L9.7,15.8C9.7,15.9 9.8,16.1 10,16.1L13.7,16.1C13.8,16.1 14,16 14,15.8L14,8.2L15.9,8.2C16,8.2 16,8.2 16.1,8.1C16,8 16.1,7.9 15.9,7.8Z"})))}var m=n(0),u=n(377),p=n(495),g=n(390);const d={setHomePage:p.f};t.a=Object(r.connect)(e=>({currentUser:Object(u.getCurrentUser)(e)}),d)(class extends a.PureComponent{constructor(){super(...arguments),this.handleClick=(e=>{e.preventDefault(),e.currentTarget.blur(),this.props.setHomePage(this.props.currentPage)})}render(){const e=this.props,t=e.currentPage,n=e.currentUser;if(!Object(g.b)(n))return null;const r=n.homepage,s=void 0!==r&&(u=t,(c=r).type===u.type&&c.branch===u.branch&&c.component===u.component&&c.organization===u.organization);var c,u;const p=s?Object(m.l)("homepage.current"):Object(m.l)("homepage.check");return a.createElement(o.a,{overlay:p},s?a.createElement("span",{className:i("display-inline-block",this.props.className)},a.createElement(l,{filled:s})):a.createElement("a",{className:i("link-no-underline","display-inline-block",this.props.className),href:"#",onClick:this.handleClick},a.createElement(l,{filled:s})))}})}}]);
//# sourceMappingURL=309.m.5deb2f7f.chunk.js.map