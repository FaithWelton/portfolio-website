(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[387],{2700:function(e,t,n){"use strict";n.d(t,{y7:function(){return o},Mv:function(){return i},u2:function(){return a},Do:function(){return c},kG:function(){return s},jZ:function(){return l},f3:function(){return u},q:function(){return d},nb:function(){return f}});var r=n(5893),o="Faith's Portfolio",i=(0,r.jsx)("strong",{children:"This website was made by Faith Madore 2021"}),a="Hi, I'm Faith!",c="mailto:faithmadore@hotmail.com",s="https://www.linkedin.com/in/faithmadore/",l="I am currently headed into my third and final year of Conestoga College's SET program, where I've worked on several projects using different technologies. You can find more information about these on my projects page. Through my education I have found a love for UI design and other front-end development. I have a strong education background, love to learn new things and see each new project as another puzzle to solve.",u="Conestoga College - Software Engineering Technology (September 2019 - present)",d=[{title:"Deal or No Deal",content:"Simple console game made in C++ where the player must choose from 26 briefcases containing different unknown amounts of money. The remaining briefcases will be opened while the player receives offers to quit before their briefcase is revealed.",git:"https://github.com/FaithMadore/DoND"},{title:"TCPIP Chat App",content:"Small client-server chat application made in C#",git:"https://github.com/FaithMadore/SimpleChatApp"},{title:"TCP Web Server",content:"Simple TCP web server made in C# with logging and client-server communications",git:"https://github.com/FaithMadore/WDD-A6"},{title:"Portfolio Website",content:"My personal Portfolio website - you're currently here!",git:"https://github.com/FaithMadore/portfolio-website"}],f=[{content:"Programming Languages include: JavaScript, C++, C#, HTML, CSS"},{content:"Strong organization, communication & time management"},{content:"Quick learner, creative problem solver"}]},3445:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(9008),o=n(4608),i=n.n(o),a=n(5080),c=n.n(a),s=n(1664),l=n(2700),u=n(5893);function d(e){var t=e.children;return(0,u.jsxs)("div",{className:i().container,children:[(0,u.jsxs)(r.default,{children:[(0,u.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,u.jsx)("meta",{name:"description",content:"Faith's Professional Portfolio"}),(0,u.jsx)("meta",{property:"og:image",content:"Profile Image"}),(0,u.jsx)("meta",{name:"og:title",content:l.y7}),(0,u.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]}),(0,u.jsxs)("header",{className:i().header,children:[(0,u.jsx)("img",{src:"/images/profile.jpg",className:c().borderCircle,height:144,width:144,alt:l.u2}),(0,u.jsx)("h2",{className:c().headingXl,children:(0,u.jsx)(s.default,{href:"/",children:(0,u.jsx)("a",{className:c().colorInherit,children:l.u2})})}),(0,u.jsx)("div",{className:"menu-bar",children:(0,u.jsxs)("p",{children:[(0,u.jsx)(s.default,{href:"/about-me",children:"About"})," |",(0,u.jsx)(s.default,{href:"/code-projects",children:" Projects"})," |",(0,u.jsx)(s.default,{href:"/contact-me",children:" Contact"})]})})]}),(0,u.jsx)("main",{children:t}),(0,u.jsx)("footer",{className:i().footer,children:(0,u.jsx)("p",{children:l.Mv})})]})}},2167:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var o,i=(o=n(7294))&&o.__esModule?o:{default:o},a=n(1063),c=n(4651),s=n(7426);var l={};function u(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,o=c.useRouter(),d=i.default.useMemo((function(){var t=a.resolveHref(o,e.href,!0),n=r(t,2),i=n[0],c=n[1];return{href:i,as:e.as?a.resolveHref(o,e.as):c||i}}),[o,e.href,e.as]),f=d.href,h=d.as,p=e.children,m=e.replace,g=e.shallow,v=e.scroll,_=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var b=(t=i.default.Children.only(p))&&"object"===typeof t&&t.ref,j=s.useIntersection({rootMargin:"200px"}),x=r(j,2),y=x[0],w=x[1],C=i.default.useCallback((function(e){y(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,y]);i.default.useEffect((function(){var e=w&&n&&a.isLocalURL(f),t="undefined"!==typeof _?_:o&&o.locale,r=l[f+"%"+h+(t?"%"+t:"")];e&&!r&&u(o,f,h,{locale:t})}),[h,f,w,_,n,o]);var M={ref:C,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),t[o?"replace":"push"](n,r,{shallow:i,locale:s,scroll:c}))}(e,o,f,h,m,g,v,_)},onMouseEnter:function(e){a.isLocalURL(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(o,f,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof _?_:o&&o.locale,I=o&&o.isLocaleDomain&&a.getDomainLocale(h,k,o&&o.locales,o&&o.domainLocales);M.href=I||a.addBasePath(a.addLocale(h,k,o&&o.defaultLocale))}return i.default.cloneElement(t,M)};t.default=d},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,s=o.useRef(),l=o.useState(!1),u=r(l,2),d=u[0],f=u[1],h=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return o.useEffect((function(){if(!a&&!d){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),[h,d]};var o=n(7294),i=n(3447),a="undefined"!==typeof IntersectionObserver;var c=new Map},2103:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(9008),o=n(3445),i=n(5080),a=n.n(i),c=n(2700),s=n(5893);function l(){return(0,s.jsxs)(o.Z,{home:!0,children:[(0,s.jsx)(r.default,{children:(0,s.jsx)("title",{children:c.y7})}),(0,s.jsxs)("div",{class:"about-page",children:[(0,s.jsx)("section",{className:a().headingMd,children:(0,s.jsx)("h1",{className:"title",children:"Let me introduce myself..."})}),(0,s.jsx)("section",{className:a().p,children:(0,s.jsxs)("div",{class:"about-me",children:[(0,s.jsx)("p",{children:c.jZ}),(0,s.jsx)("h3",{children:"Education"}),(0,s.jsx)("p",{class:"about=me",children:c.f3}),(0,s.jsx)("h3",{children:"Skills"}),(0,s.jsx)("div",{class:"skills-rows",children:c.nb.map((function(e){return(0,s.jsx)("p",{children:e.content})}))})]})})]})]})}},5409:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about-me",function(){return n(2103)}])},4608:function(e){e.exports={container:"layout_container__2t4v2",header:"layout_header__2rhWq"}},5080:function(e){e.exports={heading2Xl:"utils_heading2Xl__1I65m",headingXl:"utils_headingXl__1XecN",headingLg:"utils_headingLg__de7p0",headingMd:"utils_headingMd__3de6G",borderCircle:"utils_borderCircle__13qdJ",colorInherit:"utils_colorInherit__3Gudf",padding1px:"utils_padding1px__oCny8",list:"utils_list__S7_pe",listItem:"utils_listItem__2eJpJ",lightText:"utils_lightText__12Ckm"}},9008:function(e,t,n){e.exports=n(639)},1664:function(e,t,n){e.exports=n(2167)}},function(e){e.O(0,[774,888,179],(function(){return t=5409,e(e.s=t);var t}));var t=e.O();_N_E=t}]);