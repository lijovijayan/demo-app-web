(this["webpackJsonponeshot-web"]=this["webpackJsonponeshot-web"]||[]).push([[0],{172:function(e,t,n){},173:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){},177:function(e,t,n){},263:function(e,t,n){},269:function(e,t,n){},270:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(56),s=n.n(c),i=(n(172),n(173),n(7));n(175);n(176);var o=n(53);function u(){return Object(i.jsx)("div",{className:"app-navbar",children:Object(i.jsxs)("ol",{children:[Object(i.jsx)("li",{className:"app-icon",children:Object(i.jsx)(o.h,{size:28})}),Object(i.jsx)("li",{children:Object(i.jsx)(o.e,{size:28})}),Object(i.jsx)("li",{className:"active",children:Object(i.jsx)(o.i,{size:28})}),Object(i.jsx)("li",{children:Object(i.jsx)(o.f,{size:28})}),Object(i.jsx)("div",{className:"divider"}),Object(i.jsx)("li",{children:Object(i.jsx)(o.c,{size:28})}),Object(i.jsx)("li",{children:Object(i.jsx)(o.j,{size:28})}),Object(i.jsx)("div",{className:"divider"}),Object(i.jsx)("li",{children:Object(i.jsx)(o.b,{size:28})}),Object(i.jsx)("li",{children:Object(i.jsx)(o.d,{size:28})}),Object(i.jsx)("div",{className:"divider"}),Object(i.jsx)("li",{children:Object(i.jsx)(o.g,{size:28})})]})})}n(177);var l=n(275),d=n(163),p=n(65);function f(){return Object(i.jsx)("div",{className:"app-header",children:Object(i.jsx)(l.a,{className:"site-page-header",title:Object(i.jsxs)(d.a,{className:"app-breadcrumb",children:[Object(i.jsx)(d.a.Item,{children:"Oneshot"}),Object(i.jsx)(d.a.Item,{children:"Home"}),Object(i.jsx)(d.a.Item,{children:"Dashboard"})]}),extra:[Object(i.jsx)(p.a,{disabled:!0,children:"PRINT"},"3"),Object(i.jsx)(p.a,{disabled:!0,children:"EXPORT"},"2")]})})}var j=n(98),b=[{value:2018,label:"2018"},{value:2019,label:"2019"},{value:2020,label:"2020"},{value:2021,label:"2021"},{value:2022,label:"2022"}];function v(e){var t=e.onChange,n=e.value;return Object(i.jsx)(j.a,{showSearch:!0,allowClear:!0,placeholder:"Select batch",onChange:t,options:b,value:n,filterOption:function(e,t){var n,a;return null===t||void 0===t||null===(n=t.label)||void 0===n||null===(a=n.toLowerCase())||void 0===a?void 0:a.startsWith(e.toLocaleLowerCase())}})}var h=n(9),O=n.n(h),x=n(18),g=n(15),m=n(14),C=n(16),w=n(32),y=n.n(w),k=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).BASE_URL,S={api:{country:{list:"".concat(k="https://api.lijovijayan.dev","/oneshot/api/v1/countries"),getById:"".concat(k,"/oneshot/api/v1/countries/{0}"),getWithFilter:"".concat(k,"/oneshot/api/v1/countries")},state:{list:"".concat(k,"/oneshot/api/v1/states"),getById:"".concat(k,"/oneshot/api/v1/states/{0}"),getWithFilter:"".concat(k,"/oneshot/api/v1/states")},city:{list:"".concat(k,"/oneshot/api/v1/cities"),getById:"".concat(k,"/oneshot/api/v1/cities/{0}"),getWithFilter:"".concat(k,"/oneshot/api/v1/cities")},college:{list:"".concat(k,"/oneshot/api/v1/colleges"),getById:"".concat(k,"/oneshot/api/v1/colleges/{0}"),getWithFilter:"".concat(k,"/oneshot/api/v1/colleges")},student:{list:"".concat(k,"/oneshot/api/v1/students"),getById:"".concat(k,"/oneshot/api/v1/students/{0}"),getWithFilter:"".concat(k,"/oneshot/api/v1/students")},cource:{list:"".concat(k,"/oneshot/api/v1/cources"),getById:"".concat(k,"/oneshot/api/v1/cources/{0}"),getWithFilter:"".concat(k,"/oneshot/api/v1/cources")},skill:{list:"".concat(k,"/oneshot/api/v1/skills"),getById:"".concat(k,"/oneshot/api/v1/skills/{0}"),getWithFilter:"".concat(k,"/oneshot/api/v1/skills")}}};function E(e){for(var t=e,n=arguments.length,a=new Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];for(var c=0;c<a.length;c+=1){var s;t=null===(s=t)||void 0===s?void 0:s.replace("{".concat(c,"}"),a[c])}return t}function I(e,t,n){return e.substring(e.indexOf(t)+1,e.lastIndexOf(n))}var T=n(49),N=n.n(T);var R=function(){function e(){Object(m.a)(this,e)}return Object(C.a)(e,[{key:"getCities",value:function(){return new Promise(function(){var e=Object(x.a)(O.a.mark((function e(t,n){var a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get(S.api.city.list);case 3:a=e.sent,r=a.data,t(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),n(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}())}},{key:"getCitiesWithFilter",value:function(e){return new Promise(function(){var t=Object(x.a)(O.a.mark((function t(n,a){var r,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.a.post(S.api.city.list,e);case 3:r=t.sent,c=r.data,n(c),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}())}},{key:"getCityById",value:function(e){return new Promise(function(){var t=Object(x.a)(O.a.mark((function t(n,a){var r,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.a.get(E(S.api.city.list,e));case 3:r=t.sent,c=r.data,n(c),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}())}}]),e}(),L=function(){function e(){Object(m.a)(this,e)}return Object(C.a)(e,[{key:"getStates",value:function(){return new Promise(function(){var e=Object(x.a)(O.a.mark((function e(t,n){var a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get(S.api.state.list);case 3:a=e.sent,r=a.data,t(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),n(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}())}},{key:"getStatesWithFilter",value:function(e){return new Promise(function(){var t=Object(x.a)(O.a.mark((function t(n,a){var r,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.a.post(S.api.state.list,e);case 3:r=t.sent,c=r.data,n(c),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}())}},{key:"getStateById",value:function(e){return new Promise(function(){var e=Object(x.a)(O.a.mark((function e(t,n){var a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get(S.api.state.list);case 3:a=e.sent,r=a.data,t(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),n(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}())}}]),e}(),F=function(){function e(){Object(m.a)(this,e)}return Object(C.a)(e,[{key:"getCountries",value:function(){return new Promise(function(){var e=Object(x.a)(O.a.mark((function e(t,n){var a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get(S.api.country.list);case 3:a=e.sent,r=a.data,t(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),n(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}())}},{key:"getCountriesWithFilter",value:function(e){return new Promise(function(){var t=Object(x.a)(O.a.mark((function t(n,a){var r,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.a.post(S.api.country.list,e);case 3:r=t.sent,c=r.data,n(c),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}())}},{key:"getCountryById",value:function(e){return new Promise(function(){var t=Object(x.a)(O.a.mark((function t(n,a){var r,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.a.get(E(S.api.country.list,e));case 3:r=t.sent,c=r.data,n(c),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}())}}]),e}(),_=function(){function e(){Object(m.a)(this,e)}return Object(C.a)(e,[{key:"getColleges",value:function(){return new Promise(function(){var e=Object(x.a)(O.a.mark((function e(t,n){var a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get(S.api.college.list);case 3:a=e.sent,r=a.data,t(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),n(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}())}},{key:"getCollegesWithFilter",value:function(e){return new Promise(function(){var t=Object(x.a)(O.a.mark((function t(n,a){var r,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.a.post(S.api.college.list,e);case 3:r=t.sent,c=r.data,n(c),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}())}},{key:"getCollegeById",value:function(e){return new Promise(function(){var t=Object(x.a)(O.a.mark((function t(n,a){var r,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.a.get(E(S.api.college.list,e));case 3:r=t.sent,c=r.data,n(c),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}())}}]),e}(),A=function(){function e(){Object(m.a)(this,e)}return Object(C.a)(e,[{key:"getStudents",value:function(){return new Promise(function(){var e=Object(x.a)(O.a.mark((function e(t,n){var a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get(S.api.student.list);case 3:a=e.sent,r=a.data,t(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),n(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}())}},{key:"getStudentsWithFilter",value:function(e){return new Promise(function(){var t=Object(x.a)(O.a.mark((function t(n,a){var r,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.a.post(S.api.student.list,e);case 3:r=t.sent,c=r.data,n(c),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}())}},{key:"getStudentById",value:function(e){return new Promise(function(){var e=Object(x.a)(O.a.mark((function e(t,n){var a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get(S.api.student.list);case 3:a=e.sent,r=a.data,t(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),n(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}())}}]),e}(),W=function(){function e(){Object(m.a)(this,e)}return Object(C.a)(e,[{key:"getCources",value:function(){return new Promise(function(){var e=Object(x.a)(O.a.mark((function e(t,n){var a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get(S.api.cource.list);case 3:a=e.sent,r=a.data,t(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),n(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}())}},{key:"getCourcesWithFilter",value:function(e){return new Promise(function(){var e=Object(x.a)(O.a.mark((function e(t,n){var a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get(S.api.cource.list);case 3:a=e.sent,r=a.data,t(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),n(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}())}},{key:"getCourceById",value:function(e){return new Promise(function(){var t=Object(x.a)(O.a.mark((function t(n,a){var r,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.a.get(E(S.api.cource.list,e));case 3:r=t.sent,c=r.data,n(c),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}())}}]),e}(),P=function(){function e(){Object(m.a)(this,e)}return Object(C.a)(e,[{key:"getSkills",value:function(){return new Promise(function(){var e=Object(x.a)(O.a.mark((function e(t,n){var a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get(S.api.skill.list);case 3:a=e.sent,r=a.data,t(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),n(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}())}},{key:"getSkillsWithFilter",value:function(e){return new Promise(function(){var t=Object(x.a)(O.a.mark((function t(n,a){var r,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.a.post(S.api.skill.list,e);case 3:r=t.sent,c=r.data,n(c),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}())}},{key:"getSkillById",value:function(e){return new Promise(function(){var e=Object(x.a)(O.a.mark((function e(t,n){var a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get(S.api.skill.list);case 3:a=e.sent,r=a.data,t(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),n(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}())}}]),e}();function Y(e){var t=e.onChange,n=e.value,r=e.filter,c=void 0===r?{}:r,s=Object(a.useState)([]),o=Object(g.a)(s,2),u=o[0],l=o[1],d=Object(a.useState)(!1),p=Object(g.a)(d,2),f=p[0],b=p[1];function v(){return(v=Object(x.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),t=new R,e.prev=2,e.next=5,t.getCitiesWithFilter(c);case 5:n=e.sent,l(n.map((function(e){return{value:e.id,label:e.name}}))),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),l([]);case 12:return e.prev=12,b(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[2,9,12,15]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){v.apply(this,arguments)}()}),[c.country_id,c.state_id]),Object(i.jsx)(j.a,{showSearch:!0,allowClear:!0,loading:f,placeholder:"Select city",onChange:t,options:u,value:n,filterOption:function(e,t){var n,a;return null===t||void 0===t||null===(n=t.label)||void 0===n||null===(a=n.toLowerCase())||void 0===a?void 0:a.startsWith(e.toLocaleLowerCase())}})}function B(e){var t=e.onChange,n=e.value,r=Object(a.useState)([]),c=Object(g.a)(r,2),s=c[0],o=c[1],u=Object(a.useState)(!1),l=Object(g.a)(u,2),d=l[0],p=l[1];function f(){return(f=Object(x.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),t=new _,e.prev=2,e.next=5,t.getColleges();case 5:n=e.sent,o(n.map((function(e){return{value:e.id,label:e.name}}))),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),o([]);case 12:return e.prev=12,p(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[2,9,12,15]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){f.apply(this,arguments)}()}),[]),Object(i.jsx)(j.a,{showSearch:!0,allowClear:!0,loading:d,placeholder:"Select college",onChange:t,options:s,value:n,filterOption:function(e,t){var n,a;return null===t||void 0===t||null===(n=t.label)||void 0===n||null===(a=n.toLowerCase())||void 0===a?void 0:a.startsWith(e.toLocaleLowerCase())}})}function z(e){var t=e.onChange,n=e.value,r=Object(a.useState)([]),c=Object(g.a)(r,2),s=c[0],o=c[1],u=Object(a.useState)(!1),l=Object(g.a)(u,2),d=l[0],p=l[1];function f(){return(f=Object(x.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),t=new F,e.prev=2,e.next=5,t.getCountries();case 5:n=e.sent,o(n.map((function(e){return{value:e.id,label:e.name}}))),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),o([]);case 12:return e.prev=12,p(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[2,9,12,15]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){f.apply(this,arguments)}()}),[]),Object(i.jsx)(j.a,{showSearch:!0,allowClear:!0,loading:d,placeholder:"Select country",onChange:t,options:s,value:n,filterOption:function(e,t){var n,a;return null===t||void 0===t||null===(n=t.label)||void 0===n||null===(a=n.toLowerCase())||void 0===a?void 0:a.startsWith(e.toLocaleLowerCase())}})}function H(e){var t=e.onChange,n=e.value,r=Object(a.useState)([]),c=Object(g.a)(r,2),s=c[0],o=c[1],u=Object(a.useState)(!1),l=Object(g.a)(u,2),d=l[0],p=l[1];function f(){return(f=Object(x.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),t=new W,e.prev=2,e.next=5,t.getCources();case 5:n=e.sent,o(n.map((function(e){return{value:e.id,label:e.name}}))),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),o([]);case 12:return e.prev=12,p(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[2,9,12,15]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){f.apply(this,arguments)}()}),[]),Object(i.jsx)(j.a,{showSearch:!0,allowClear:!0,loading:d,placeholder:"Select cource",onChange:t,options:s,value:n,filterOption:function(e,t){var n,a;return null===t||void 0===t||null===(n=t.label)||void 0===n||null===(a=n.toLowerCase())||void 0===a?void 0:a.startsWith(e.toLocaleLowerCase())}})}function K(e){var t=e.onChange,n=e.value,r=Object(a.useState)([]),c=Object(g.a)(r,2),s=c[0],o=c[1],u=Object(a.useState)(!1),l=Object(g.a)(u,2),d=l[0],p=l[1];function f(){return(f=Object(x.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),t=new P,e.prev=2,e.next=5,t.getSkills();case 5:n=e.sent,o(n.map((function(e){return{value:e.id,label:e.name}}))),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),o([]);case 12:return e.prev=12,p(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[2,9,12,15]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){f.apply(this,arguments)}()}),[]),Object(i.jsx)(j.a,{showSearch:!0,allowClear:!0,loading:d,placeholder:"Select skill",onChange:t,options:s,value:n,filterOption:function(e,t){var n,a;return null===t||void 0===t||null===(n=t.label)||void 0===n||null===(a=n.toLowerCase())||void 0===a?void 0:a.startsWith(e.toLocaleLowerCase())}})}function U(e){var t=e.onChange,n=e.value,r=e.filter,c=void 0===r?{}:r,s=Object(a.useState)([]),o=Object(g.a)(s,2),u=o[0],l=o[1],d=Object(a.useState)(!1),p=Object(g.a)(d,2),f=p[0],b=p[1];function v(){return(v=Object(x.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),t=new L,e.prev=2,e.next=5,t.getStatesWithFilter(c);case 5:n=e.sent,l(n.map((function(e){return{value:e.id,label:e.name}}))),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),l([]);case 12:return e.prev=12,b(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[2,9,12,15]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){v.apply(this,arguments)}()}),[c.country_id]),Object(i.jsx)(j.a,{showSearch:!0,allowClear:!0,loading:f,placeholder:"Select state",onChange:t,options:u,value:n,filterOption:function(e,t){var n,a;return null===t||void 0===t||null===(n=t.label)||void 0===n||null===(a=n.toLowerCase())||void 0===a?void 0:a.startsWith(e.toLocaleLowerCase())}})}var D=n(274),V=n(159),G=n(158),J=(n(263),n(31)),q=n(50);function Q(){var e=Object(a.useRef)();return Object(a.useEffect)((function(){}),[]),e}function M(e){var t={labels:[],datasets:[{label:"Skills",data:[],backgroundColor:N()({format:"rgb"})}]};return e.forEach((function(e){t.labels.push(e.name),t.datasets[0].data.push(e.students.length)})),t}var X={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"right"},title:{text:"Number of students with specific skills",display:!0,padding:3,font:{weight:"normal"}}}};function Z(){var e=Q(),t=Object(a.useState)({labels:[],datasets:[]}),n=Object(g.a)(t,2),r=n[0],c=n[1];function s(){return(s=Object(x.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new P,e.next=3,t.getSkills();case 3:n=e.sent,console.log(M(n)),c(M(n));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){s.apply(this,arguments)}()}),[]),Object(i.jsx)(q.a,{ref:function(t){return e.current=t},data:r,options:X})}function $(e,t){var n=e.map((function(e){return e.name})),a=t.map((function(e,t){var a=function(){var e=N()({format:"rgb"});return{color:e,colorWithOpacity:"rgba(".concat(I(e,"(",")"),", 0.2)")}}();return{backgroundColor:a.colorWithOpacity,borderColor:a.color,data:n.map((function(e){return 0})),id:e.id,label:e.name,lineTension:.5}})),r={labels:n,datasets:a};return e.forEach((function(e,n){e.students.forEach((function(e){t.forEach((function(t,a){t.students.includes(e)&&(r.datasets[a].data[n]+=1)}))}))})),r}function ee(e){var t=e.colleges,n=e.setLoader,r=Q(),c=Object(a.useState)([]),s=Object(g.a)(c,2),o=s[0],u=s[1],l=Object(a.useState)({labels:[],datasets:[]}),d=Object(g.a)(l,2),p=d[0],f=d[1];function j(){return(j=Object(x.a)(O.a.mark((function e(){var t,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),t=new P,e.next=4,t.getSkills();case 4:a=e.sent,u(a),n(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){j.apply(this,arguments)}()}),[]),Object(a.useEffect)((function(){t.length>0&&o.length>0&&f($(t,o))}),[t,o]),Object(i.jsx)(q.c,{ref:function(e){return r.current},options:{responsive:!0,maintainAspectRatio:!1,plugins:{title:{text:"Number of students with specific skills in each colleges",display:!0,padding:3,font:{weight:"normal"}}},scales:{x:{ticks:{callback:function(e,t,n){return t+1}}}}},data:p})}function te(e){var t=N()({format:"rgb"}),n={labels:[],datasets:[{label:"Countries",data:[],backgroundColor:"rgba(".concat(I(t,"(",")"),", 0.2)"),borderColor:t,borderWidth:1}]};return e.forEach((function(e){n.labels.push(e.name),n.datasets[0].data.push(e.colleges.length)})),n}var ne={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},title:{text:"Number of colleges offering specific cources",display:!0,padding:3,font:{weight:"normal"}}}};function ae(){var e=Q(),t=Object(a.useState)({labels:[],datasets:[]}),n=Object(g.a)(t,2),r=n[0],c=n[1];function s(){return(s=Object(x.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new W,e.next=3,t.getCources();case 3:n=e.sent,c(te(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){s.apply(this,arguments)}()}),[]),Object(i.jsx)(q.d,{ref:function(t){return e.current=t},data:r,options:ne,style:{width:"100%",height:"100%"}})}var re=n(69),ce=n(156),se=n(131);function ie(e){var t=e.onCountryChange,n=e.colleges,r=e.country,c=Q(),s=Object(a.useState)(!1),o=Object(g.a)(s,2),u=o[0],l=o[1],d=Object(a.useState)({labels:[],datasets:[]}),p=Object(g.a)(d,2),f=p[0],j=p[1];Object(a.useEffect)((function(){var e=new se.a,t=0!==+e.get("hideIndicator");console.log(t,{hideIndicator:e.get("hideIndicator")}),l(t)}),[]),Object(a.useEffect)((function(){var e=function(e){var t={labels:[],datasets:[{label:"Countries",ids:[],data:[],backgroundColor:[],borderColor:[],borderWidth:1}]};return e.forEach((function(e){var n=N()({format:"rgb"}),a="rgba(".concat(I(n,"(",")"),", 0.2)"),r=t.labels.findIndex((function(t){return e.country.name===t}));r>=0?t.datasets[0].data[r]+=1:(t.labels.push(e.country.name),t.datasets[0].ids.push(e.country.id),t.datasets[0].data.push(1),t.datasets[0].backgroundColor.push(a),t.datasets[0].borderColor.push(n))})),t}(n);j(e),r<=0&&e.datasets[0].data.length>0&&t(e.datasets[0].ids[0])}),[n]);var b={responsive:!0,onClick:function(e,n){var a,c,s=null===n||void 0===n||null===(a=n[0])||void 0===a?void 0:a.datasetIndex,i=null===n||void 0===n||null===(c=n[0])||void 0===c?void 0:c.index;if(i>=0&&s>=0){var o=f.datasets[s].ids[i];o!==r&&t(o),u&&((new se.a).set("hideIndicator",0,{path:"/"}),l(!1))}},maintainAspectRatio:!1,plugins:{title:{text:"Countries",display:!0,padding:3,font:{weight:"normal"}}}};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(q.b,{ref:function(e){return c.current=e},data:f,options:b}),u&&Object(i.jsx)(re.a,{placement:"left",title:"click on each sections to filter states and cities",color:"#34dba1",children:Object(i.jsx)("div",{className:"feature-indicator-wrapper blink",children:Object(i.jsx)(ce.a,{})})})]})}function oe(e){var t=e.country,n=e.onStateChange,r=e.colleges,c=e.state,s=Q(),o=Object(a.useState)({labels:[],datasets:[]}),u=Object(g.a)(o,2),l=u[0],d=u[1],p={responsive:!0,maintainAspectRatio:!1,onClick:function(e,t){var a,r,c=null===t||void 0===t||null===(a=t[0])||void 0===a?void 0:a.datasetIndex,s=null===t||void 0===t||null===(r=t[0])||void 0===r?void 0:r.index;if(s>=0&&c>=0){var i=l.datasets[c].ids[s];n(i)}},plugins:{title:{text:"States",display:!0,padding:3,font:{weight:"normal"}}}};return Object(a.useEffect)((function(){var e=function(e,t){var n={labels:[],datasets:[{label:"Countries",data:[],ids:[],backgroundColor:[],borderColor:[],borderWidth:1}]};return e.forEach((function(e){if(e.country.id!==t)return!0;var a=N()({format:"rgb"}),r="rgba(".concat(I(a,"(",")"),", 0.2)"),c=n.labels.findIndex((function(t){return e.state.name===t}));c>=0?n.datasets[0].data[c]+=1:(n.labels.push(e.state.name),n.datasets[0].ids.push(e.state.id),n.datasets[0].data.push(1),n.datasets[0].backgroundColor.push(r),n.datasets[0].borderColor.push(a))})),n}(r,t);d(e),c<=0&&e.datasets[0].data.length>0&&n(e.datasets[0].ids[0])}),[r,t]),Object(i.jsx)(q.b,{ref:function(e){return s.current=e},data:l,options:p})}var ue={maintainAspectRatio:!1,responsive:!0,plugins:{title:{text:"Cities",display:!0,padding:3,font:{weight:"normal"}}}};function le(e){var t=e.state,n=e.colleges,r=Q(),c=Object(a.useState)({labels:[],datasets:[]}),s=Object(g.a)(c,2),o=s[0],u=s[1];return Object(a.useEffect)((function(){u(function(e,t){var n={labels:[],datasets:[{label:"Countries",data:[],ids:[],backgroundColor:[],borderColor:[],borderWidth:1}]};return e.forEach((function(e){if(e.state.id!==t)return!0;var a=N()({format:"rgb"}),r="rgba(".concat(I(a,"(",")"),", 0.2)"),c=n.labels.findIndex((function(t){return e.city.name===t}));c>=0?n.datasets[0].data[c]+=1:(n.labels.push(e.city.name),n.datasets[0].ids.push(e.city.id),n.datasets[0].data.push(1),n.datasets[0].backgroundColor.push(r),n.datasets[0].borderColor.push(a))})),n}(n,t))}),[n,t]),Object(i.jsx)(q.b,{ref:function(e){return r.current},data:o,options:ue})}function de(){var e=Object(a.useState)([]),t=Object(g.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!0),s=Object(g.a)(c,2),o=s[0],u=s[1];function l(){return l=Object(x.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new _,e.next=3,t.getColleges();case 3:n=e.sent,r(n);case 5:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}Object(a.useEffect)((function(){!function(){l.apply(this,arguments)}()}),[]);var d=Object(a.useState)({country:0,state:0}),p=Object(g.a)(d,2),f=p[0],j=p[1];function b(e){j(Object(J.a)(Object(J.a)({},f),e))}var v=f.country,h=f.state;return Object(i.jsxs)("div",{className:"overview ".concat(o?"charts-loading":"charts-loaded"),children:[Object(i.jsx)("div",{children:Object(i.jsx)(ie,{country:v,colleges:n,onCountryChange:function(e){return b({country:e,state:0})}})}),Object(i.jsx)("div",{children:Object(i.jsx)(oe,{state:h,country:v,colleges:n,onStateChange:function(e){return b({state:e})}})}),Object(i.jsx)("div",{children:Object(i.jsx)(le,{colleges:n,state:h})}),Object(i.jsx)("div",{children:Object(i.jsx)(ae,{})}),Object(i.jsx)("div",{children:Object(i.jsx)(Z,{})}),Object(i.jsx)("div",{children:Object(i.jsx)(ee,{setLoader:u,colleges:n})}),Object(i.jsx)("div",{className:"loading-layer",children:Object(i.jsx)("div",{className:"loading-animation"})})]})}var pe,fe,je=n(272);!function(e){e.SEARCH_KEY="SEARCH_KEY",e.COLLEGE="COLLEGE",e.COURCE="COURCE",e.SKILL="SKILL",e.BATCH="BATCH"}(pe||(pe={})),function(e){e.SEARCH_KEY="SEARCH_KEY",e.COUNTRY="ONESHOT_COUNTRY",e.STATE="ONESHOT_STATE",e.CITY="ONESHOT_CITY",e.COURCE="COURCE"}(fe||(fe={}));var be=n(35),ve=n(160),he=n(273),Oe=ve.a.Search,xe=he.a.useForm,ge=he.a.Item;var me=function(e){var t,n=e.onChange;Object(a.useEffect)((function(){setTimeout((function(){document.querySelectorAll("input").forEach((function(e){e.setAttribute("autocomplete","oneshot-prevent-autocomplete")}))}),1e3)}),[]);var r=xe(),c=Object(g.a)(r,1)[0],s=Object(a.useState)((t={},Object(be.a)(t,fe.SEARCH_KEY,""),Object(be.a)(t,fe.COUNTRY,0),Object(be.a)(t,fe.STATE,0),Object(be.a)(t,fe.CITY,0),Object(be.a)(t,fe.COURCE,0),t)),o=Object(g.a)(s,2),u=o[0],l=o[1];return Object(i.jsxs)(he.a,{form:c,className:"filter-container",onValuesChange:function(e,t){e.hasOwnProperty(fe.COUNTRY)?(t[fe.CITY]=void 0,t[fe.STATE]=void 0,c.setFieldsValue(t)):e.hasOwnProperty(fe.STATE)&&(t[fe.CITY]=void 0,c.setFieldsValue(t)),n(t),l(Object(J.a)(Object(J.a)({},u),t))},autoComplete:"off",autoCorrect:"off",children:[Object(i.jsx)(ge,{name:[fe.SEARCH_KEY],children:Object(i.jsx)(Oe,{placeholder:"student name",onSearch:function(e){console.log(e)},allowClear:!0})}),Object(i.jsx)(ge,{name:[fe.COUNTRY],children:Object(i.jsx)(z,{})}),Object(i.jsx)(ge,{name:[fe.STATE],children:Object(i.jsx)(U,{filter:{country_id:u[fe.COUNTRY]||void 0}})}),Object(i.jsx)(ge,{name:[fe.CITY],children:Object(i.jsx)(Y,{filter:{country_id:u[fe.COUNTRY]||void 0,state_id:u[fe.STATE]||void 0}})}),Object(i.jsx)(ge,{name:[fe.COURCE],children:Object(i.jsx)(H,{})})]})},Ce=n(276),we=je.a.Column,ye=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(we,{title:"Full Name",dataIndex:"name",fixed:"left"},"name"),Object(i.jsx)(we,{title:"Year Founded",dataIndex:"year_founded"},"year_founded"),Object(i.jsx)(we,{title:"Country",dataIndex:"country",render:function(e){return Object(i.jsx)(i.Fragment,{children:null===e||void 0===e?void 0:e.name})}},"country"),Object(i.jsx)(we,{title:"State",dataIndex:"state",render:function(e){return Object(i.jsx)(i.Fragment,{children:null===e||void 0===e?void 0:e.name})}},"state"),Object(i.jsx)(we,{title:"City",dataIndex:"city",render:function(e){return Object(i.jsx)(i.Fragment,{children:null===e||void 0===e?void 0:e.name})}},"city"),Object(i.jsx)(we,{title:"cources",dataIndex:"cources",render:function(e){return Object(i.jsx)(i.Fragment,{children:e.map((function(e){return Object(i.jsx)(Ce.a,{color:"blue",children:e.name},e.id)}))})}},"cources"),Object(i.jsx)(we,{title:"Number of Students",dataIndex:"students",render:function(e){return Object(i.jsx)(i.Fragment,{children:e.length})}},"students")]})};function ke(){var e=Object(a.useState)(!1),t=Object(g.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)({}),s=Object(g.a)(c,2),o=s[0],u=s[1],l=Object(a.useState)([]),d=Object(g.a)(l,2),p=d[0],f=d[1],j=Object(a.useState)({page:1,pageSize:10,orderBy:[],searchKey:"",totalRecords:0}),b=Object(g.a)(j,2),v=b[0],h=b[1];function m(e){return C.apply(this,arguments)}function C(){return C=Object(x.a)(O.a.mark((function e(t){var n,a,c,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.pagination.totalRecords=void 0,r(!0),n=new _,e.next=5,n.getCollegesWithFilter(t);case 5:a=e.sent,c=a.data,s=a.pagination,h(Object(J.a)(Object(J.a)({},v),s)),f(c),r(!1);case 11:case"end":return e.stop()}}),e)}))),C.apply(this,arguments)}return Object(a.useEffect)((function(){m({pagination:v})}),[]),console.log(v),Object(i.jsxs)("div",{className:"colleges",children:[Object(i.jsx)(me,{onChange:function(e){var t=function(e){return{name:e[fe.SEARCH_KEY],country:e[fe.COUNTRY],state:e[fe.STATE],city:e[fe.CITY],cources:e[fe.COURCE]?[e[fe.COURCE]]:void 0}}(e);m(Object(J.a)({pagination:Object(J.a)(Object(J.a)({},v),{},{page:1})},t)),u(t)}}),Object(i.jsx)(je.a,{loading:n&&{indicator:Object(i.jsx)("div",{className:"loading-animation"})},pagination:{onChange:function(e,t){console.log({pageNumber:e,pageSize:t});var n=Object(J.a)(Object(J.a)({},v),{},{page:e,pageSize:t});m(Object(J.a)({pagination:n},o))},total:v.totalRecords,pageSize:v.pageSize,current:v.page,showQuickJumper:!0,pageSizeOptions:["10","20","50"]},scroll:{y:"calc(100vh - 285px)",x:"fit-content"},dataSource:p,children:ye()})]})}var Se=ve.a.Search,Ee=he.a.useForm,Ie=he.a.Item;var Te=function(e){var t=e.onChange,n=Ee(),a=Object(g.a)(n,1)[0];return Object(i.jsxs)(he.a,{form:a,className:"filter-container",onValuesChange:function(e,n){t(n)},children:[Object(i.jsx)(Ie,{name:[pe.SEARCH_KEY],children:Object(i.jsx)(Se,{placeholder:"college name",onSearch:function(e){console.log(e)},allowClear:!0})}),Object(i.jsx)(Ie,{name:[pe.BATCH],children:Object(i.jsx)(v,{})}),Object(i.jsx)(Ie,{name:[pe.COLLEGE],children:Object(i.jsx)(B,{})}),Object(i.jsx)(Ie,{name:[pe.COURCE],children:Object(i.jsx)(H,{})}),Object(i.jsx)(Ie,{name:[pe.SKILL],children:Object(i.jsx)(K,{})})]})},Ne=je.a.Column,Re=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(Ne,{title:"Full Name",dataIndex:"name",fixed:"left"},"name"),Object(i.jsx)(Ne,{title:"Year of Batch",dataIndex:"year_of_batch"},"year_of_batch"),Object(i.jsx)(Ne,{title:"College",dataIndex:"college",render:function(e){return Object(i.jsx)(i.Fragment,{children:null===e||void 0===e?void 0:e.name})}},"college"),Object(i.jsx)(Ne,{title:"skills",dataIndex:"skills",render:function(e){return Object(i.jsx)(i.Fragment,{children:e.map((function(e){return Object(i.jsx)(Ce.a,{color:"blue",children:e.name},e.id)}))})}},"skills")]})};function Le(){var e=Object(a.useState)(!1),t=Object(g.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)({}),s=Object(g.a)(c,2),o=s[0],u=s[1],l=Object(a.useState)([]),d=Object(g.a)(l,2),p=d[0],f=d[1],j=Object(a.useState)({page:1,pageSize:10,orderBy:[],searchKey:"",totalRecords:0}),b=Object(g.a)(j,2),v=b[0],h=b[1];function m(e){return C.apply(this,arguments)}function C(){return C=Object(x.a)(O.a.mark((function e(t){var n,a,c,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.pagination.totalRecords=void 0,r(!0),n=new A,e.next=5,n.getStudentsWithFilter(t);case 5:a=e.sent,c=a.data,s=a.pagination,h(Object(J.a)(Object(J.a)({},v),s)),f(c),r(!1);case 11:case"end":return e.stop()}}),e)}))),C.apply(this,arguments)}return Object(a.useEffect)((function(){m({pagination:v})}),[]),Object(i.jsxs)("div",{className:"students",children:[Object(i.jsx)(Te,{onChange:function(e){var t=function(e){return{name:e[pe.SEARCH_KEY],year_of_batch:e[pe.BATCH],college_id:e[pe.COLLEGE],skills:e[pe.SKILL]?[e[pe.SKILL]]:void 0}}(e);m(Object(J.a)({pagination:Object(J.a)(Object(J.a)({},v),{},{page:1})},t)),u(t)}}),Object(i.jsx)(je.a,{pagination:{onChange:function(e,t){var n=Object(J.a)(Object(J.a)({},v),{},{page:e,pageSize:t});m(Object(J.a)({pagination:n},o))},total:v.totalRecords,pageSize:v.pageSize,current:v.page,showQuickJumper:!0,pageSizeOptions:["10","20","50"]},loading:n&&{indicator:Object(i.jsx)("div",{className:"loading-animation"})},scroll:{y:"calc(100vh - 285px)",x:"fit-content"},dataSource:p,children:Re()})]})}var Fe=D.a.TabPane;function _e(){return Object(i.jsx)("div",{className:"dashboard",children:Object(i.jsxs)(D.a,{defaultActiveKey:"1",onChange:function(e){console.log(e)},children:[Object(i.jsx)(Fe,{tab:Object(i.jsxs)("div",{className:"tab-title",children:[Object(i.jsx)(o.a,{}),"Overview"]}),children:Object(i.jsx)(de,{})},"1"),Object(i.jsx)(Fe,{tab:Object(i.jsxs)("div",{className:"tab-title",children:[Object(i.jsx)(G.a,{}),"Colleges"]}),children:Object(i.jsx)(ke,{})},"2"),Object(i.jsx)(Fe,{tab:Object(i.jsxs)("div",{className:"tab-title",children:[Object(i.jsx)(V.a,{}),"Students"]}),children:Object(i.jsx)(Le,{})},"3")]})})}n(269);var Ae=n(33);Ae.f.register(Ae.e,Ae.l,Ae.n,Ae.k,Ae.a,Ae.c,Ae.t,Ae.i,Ae.s,Ae.h,Ae.q);var We=function(){return Object(i.jsxs)("div",{className:"app-container",children:[Object(i.jsx)("div",{className:"navbar",children:Object(i.jsx)(u,{})}),Object(i.jsxs)("div",{className:"app-content",children:[Object(i.jsx)(f,{}),Object(i.jsx)("div",{className:"screen-content",children:Object(i.jsx)(_e,{})})]}),Object(i.jsxs)("div",{className:"not-implemented",children:[Object(i.jsx)("img",{src:"/assets/images/responsive.png",alt:"under development"}),Object(i.jsx)("span",{children:"Responsive design is under development, try a higher dimensional resolution!"})]})]})},Pe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,277)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(We,{})}),document.getElementById("root")),Pe()}},[[270,1,2]]]);
//# sourceMappingURL=main.e33658ed.chunk.js.map