(window.webpackJsonp=window.webpackJsonp||[]).push([["a068"],{"2wXF":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/meeting/JiraForm",function(){var e=a("A0oO");return{page:e.default||e}}])},"6B+P":function(e,t,a){"use strict";a.d(t,"a",function(){return i});var r=a("hDBU"),n=a("mXGw"),s=a.n(n),l=a("vPok"),c=s.a.createContext(null);function i(e){var t=s.a.useState(null),a=Object(r.default)(t,2),n=a[0],i=a[1];return s.a.useEffect(function(){return l.a.onProfile(function(e){return i(e)})},[]),s.a.createElement(c.Provider,{value:n,children:e.children})}t.b=c},A0oO:function(e,t,a){"use strict";a.r(t);var r=a("UrUy"),n=a.n(r),s=a("R3/3"),l=a("hDBU"),c=a("mXGw"),i=a.n(c),u=/((?<!([A-Z]{1,10})-?)[A-Z]+-\d+)/;var o=a("L2VZ"),m=a("pG0O"),d=a("zprC"),b=a("DZwE"),f=a("ELYA"),p=a("6B+P");t.default=function(e){var t=e.onSubmit,a=i.a.useContext(p.b),r=i.a.useState(""),c=Object(l.default)(r,2),v=c[0],E=c[1],w=i.a.useState(""),h=Object(l.default)(w,2),g=h[0],N=h[1],y=i.a.useState(!1),O=Object(l.default)(y,2),j=O[0],x=O[1],C=(S=Object(s.default)(n.a.mark(function e(){var a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=v,n=void 0,n=u.exec(r),null!==(a=null==n?null:n[0])){e.next=4;break}return N("The Jira Key entered was not valid."),e.abrupt("return");case 4:return x(!0),e.prev=5,e.next=8,t(a);case 8:E(""),N(""),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),N(e.t0.message);case 15:x(!1);case 16:case"end":return e.stop()}var r,n},e,null,[[5,12]])})),function(){return S.apply(this,arguments)});var S;return null===a?i.a.createElement("div",{className:"text-center text-teal-7"},i.a.createElement(o.e,{className:"animate-spin w-6 h-6"})):a.hasCreds?i.a.createElement("form",{onSubmit:function(e){e.preventDefault(),C()},autoComplete:"off"},g&&i.a.createElement(f.a,{className:"mb-6"},g),i.a.createElement("div",{className:"mb-6"},i.a.createElement(m.a,{"data-lpignore":"true",id:"jira-tid",label:"Jira Ticket Key",value:v,onChange:function(e){N(""),E(e.target.value)},required:!0}),i.a.createElement("div",{className:"mb-3"},i.a.createElement("p",{className:"text-sm text-grey-7 italic"},"ie. AWK-1234 or the URL to the ticket"))),i.a.createElement(d.a,{type:"submit",disabled:j},j?i.a.createElement(o.e,{className:"animate-spin w-5 h-5 mr-2"}):i.a.createElement(o.g,{className:"w-5 h-5 mr-2"}),"Import from Jira")):i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"mb-3 leading-normal"},"Please enter your Jira credentials below to start importing tickets."),i.a.createElement(b.a,null),i.a.createElement("div",{className:"mb-6"}),i.a.createElement("p",{className:"mb-3 leading-tight text-sm"},"Credentials are stored in a write only database for your security. These credentials are only transmitted directly to the Jira server over an https connection."))}},DZwE:function(e,t,a){"use strict";var r=a("azxR"),n=a("Rbzu"),s=a("hDBU");var l=a("mXGw"),c=a.n(l),i=a("vPok"),u=a("pG0O"),o=a("zprC"),m=a("ELYA");t.a=function(e){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e);var t=c.a.useState({url:"",username:"",password:""}),a=Object(s.default)(t,2),l=a[0],d=a[1],b=c.a.useState(!1),f=Object(s.default)(b,2),p=f[0],v=f[1],E=c.a.useState(""),w=Object(s.default)(E,2),h=w[0],g=w[1],N=c.a.useState(""),y=Object(s.default)(N,2),O=y[0],j=y[1],x=function(e){e.persist(),d(function(t){return Object(n.a)({},t,Object(r.a)({},e.target.name,e.target.value))})};return c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t,a="https"!==(t=l.url).substr(0,"https".length)?"URL must start with https":"/"===t.substr(-1,1)?"No trailing slashes":"";a?g(a):(v(!0),i.a.createCredentials(l).then(function(){v(!1),d({url:"",username:"",password:""})},function(e){v(!1),"permission-denied"===e.code?j("Error: Missing or insufficient permissions."):(console.error(e),j("Error: Something went wrong."))}))},method:"POST"},O&&c.a.createElement(m.a,{className:"mb-3"},O),c.a.createElement("div",{className:"mb-6"},c.a.createElement(u.a,{type:"url",id:"url",label:"Jira URL",value:l.url,onChange:x,required:!0}),c.a.createElement("div",{className:"mb-3"},c.a.createElement("p",{className:"text-sm text-grey-7 italic"},"ie. https://jira.company.com"),h&&c.a.createElement(m.a,null,h)),c.a.createElement(u.a,{type:"string",id:"username",label:"Jira Username",value:l.username,onChange:x,required:!0}),c.a.createElement(u.a,{type:"password",id:"password",label:"Jira Password",value:l.password,onChange:x,required:!0})),c.a.createElement(o.a,{type:"submit",disabled:p},"Store Credentials"))}},ELYA:function(e,t,a){"use strict";var r=a("z3IF"),n=a("2Fjn"),s=a("mXGw"),l=a.n(s),c=a("8Jek"),i=a.n(c);t.a=function(e){var t=e.className,a=Object(n.a)(e,["className"]);return l.a.createElement("div",Object(r.a)({className:i()(t,"text-red-9 bg-red-2 border-red-6 border-b border-t p-3")},a))}},zprC:function(e,t,a){"use strict";var r=a("z3IF"),n=a("2Fjn"),s=a("mXGw"),l=a.n(s),c=a("8Jek"),i=a.n(c);t.a=function(e){var t=e.className,a=Object(n.a)(e,["className"]);return l.a.createElement("button",Object(r.a)({className:i()("btn btn--violet",t),type:"button"},a))}}},[["2wXF","5d41","9da1"]]]);