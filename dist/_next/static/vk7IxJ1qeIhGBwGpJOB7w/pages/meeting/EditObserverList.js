(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"31MD":function(e,t,n){var r=n("/6KZ"),a=n("SvME")(!0);r(r.S,"Object",{entries:function(e){return a(e)}})},"5Krf":function(e,t,n){"use strict";n.r(t);var r=n("mXGw"),a=n.n(r),i=n("YOUh"),c=n("M6oQ"),l=n("pAnI");t.default=function(e){var t=e.meeting,n=e.addUserToObserverList,r=e.removeUserFromObserverList;return a.a.createElement(a.a.Fragment,null,a.a.createElement("section",{className:"mb-3"},a.a.createElement("label",{className:l.a},"Voters:"),a.a.createElement(c.a,{userList:Object(i.c)(t),onClick:n,imgSize:"medium",showPlaceholder:!0})),a.a.createElement("section",null,a.a.createElement("label",{className:l.a},"Observers:"),a.a.createElement(c.a,{userList:Object(i.a)(t),onClick:r,imgSize:"medium",showPlaceholder:!0})))}},AXMb:function(e,t,n){n("31MD"),e.exports=n("TaGV").Object.entries},M6oQ:function(e,t,n){"use strict";var r=n("mXGw"),a=n.n(r),i=n("X7Yp"),c=n("8Jek"),l=n.n(c);t.a=function(e){var t=e.userList,n=e.getDotColor,r=e.imgSize,c=void 0===r?"small":r,o=e.showPlaceholder,s=e.onClick;if(0===t.length&&!o)return null;var u=l()({"w-6 h-6 mr-3":"small"===c,"w-8 h-8 mr-3":"medium"===c}),m=0===t.length&&!0===o;return a.a.createElement("ul",{className:"list-reset flex flex-wrap"},t.map(function(e){return a.a.createElement("li",{key:e.id,className:"mb-3"},a.a.createElement(i.a,{alt:e.displayName,src:e.photoURL,title:e.displayName,className:l()(u,{"cursor-pointer":void 0!==s}),dotColor:n&&n(e.id),onClick:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){return s&&s(e.id)})}))}),m&&a.a.createElement("li",{key:"placeholder",className:l()(u,"rounded-full border bg-grey-2")}))}},NTB8:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/meeting/EditObserverList",function(){var e=n("5Krf");return{page:e.default||e}}])},SvME:function(e,t,n){var r=n("/Lgp"),a=n("T/1i"),i=n("kBaS").f;e.exports=function(e){return function(t){for(var n,c=a(t),l=r(c),o=l.length,s=0,u=[];o>s;)i.call(c,n=l[s++])&&u.push(e?[n,c[n]]:c[n]);return u}}},X7Yp:function(e,t,n){"use strict";var r=n("z3IF"),a=n("2Fjn"),i=n("mXGw"),c=n.n(i),l=n("8Jek"),o=n.n(l);t.a=function(e){var t=e.src,n=e.alt,i=e.className,l=e.dotColor,s=Object(a.a)(e,["src","alt","className","dotColor"]);return c.a.createElement("div",{className:o()("relative",i)},l&&c.a.createElement("span",{className:o()("absolute z-10 w-3 h-3 -mr-1 -mb-1 pin-b pin-r","rounded-full pointer-events-none",l)}),c.a.createElement("span",{className:"absolute h-full rounded-full shadow-inner w-full pointer-events-none"}),c.a.createElement("img",Object(r.a)({src:t,alt:n},s,{className:"rounded-full overflow-hidden"})))}},YOUh:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"c",function(){return u}),n.d(t,"b",function(){return m});var r=n("hDBU"),a=n("pL2a"),i=n.n(a),c=n("Rbzu"),l=n("1qCV"),o=n.n(l);function s(e){return o()(e.observerIDs).map(function(t){return Object(c.a)({id:t},e.participantData[t])})}function u(e){return o()(e.participantIDs).filter(function(t){return!e.observerIDs[t]}).map(function(t){return Object(c.a)({id:t},e.participantData[t])})}function m(e){return i()(e.participantData).map(function(e){var t=Object(r.default)(e,2),n=t[0],a=t[1];return Object(c.a)({id:n},a)})}},pL2a:function(e,t,n){e.exports=n("AXMb")}},[["NTB8",1,0]]]);