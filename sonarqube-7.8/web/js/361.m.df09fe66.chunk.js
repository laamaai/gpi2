(window.webpackJsonp=window.webpackJsonp||[]).push([[361],{1647:function(n,t,e){"use strict";e.r(t),e.d(t,"OrganizationAccess",function(){return a}),e.d(t,"hasAdminAccess",function(){return p}),e.d(t,"OrganizationAdminAccess",function(){return h});var s=e(363),o=e(375),c=e(377),i=e(566),r=e(390);class a extends s.PureComponent{constructor(){super(...arguments),this.checkPermissions=(()=>{this.props.hasAccess(this.props)||Object(i.a)()})}componentDidMount(){this.checkPermissions()}componentDidUpdate(){this.checkPermissions()}render(){return this.props.hasAccess(this.props)?s.cloneElement(this.props.children,{location:this.props.location,organization:this.props.organization}):null}}const u=Object(o.connect)((n,t)=>({currentUser:Object(c.getCurrentUser)(n),organization:Object(c.getOrganizationByKey)(n,t.params.organizationKey)}))(a);function p(n){let t=n.currentUser,e=n.organization;return Boolean(Object(r.b)(t)&&e&&e.actions&&e.actions.admin)}function h(n){return s.createElement(u,Object.assign({hasAccess:p},n))}},566:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var s=e(426),o=e(463),c=e(539);function i(){const n=Object(s.default)(),t=Object(o.a)(),e=window.location.pathname+window.location.search+window.location.hash;n.dispatch(Object(c.c)()),t.replace({pathname:"/sessions/new",query:{return_to:e}})}}}]);
//# sourceMappingURL=361.m.df09fe66.chunk.js.map