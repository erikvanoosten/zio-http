"use strict";(self.webpackChunkzio_http_docs=self.webpackChunkzio_http_docs||[]).push([[77],{3905:function(e,t,n){n.d(t,{Zo:function(){return k},kt:function(){return u}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},k=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,k=r(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,m=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return n?o.createElement(m,l(l({ref:t},k),{},{components:n})):o.createElement(m,l({ref:t},k))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var s=2;s<i;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8042:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return k}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],r={sidebar_position:"7"},p="Cookie",s={unversionedId:"v1.x/dsl/cookies",id:"v1.x/dsl/cookies",isDocsHomePage:!1,title:"Cookie",description:"ZIO HTTP has special support for Cookie headers using the Cookie Domain to add and invalidate cookies. Adding a cookie will generate the correct Set-Cookie headers",source:"@site/docs/v1.x/dsl/cookies.md",sourceDirName:"v1.x/dsl",slug:"/v1.x/dsl/cookies",permalink:"/zio-http/docs/v1.x/dsl/cookies",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Headers",permalink:"/zio-http/docs/v1.x/dsl/headers"},next:{title:"Middleware",permalink:"/zio-http/docs/v1.x/dsl/middleware"}},k=[{value:"Create a Cookie",id:"create-a-cookie",children:[{value:"Update a Cookie",id:"update-a-cookie",children:[],level:3}],level:2},{value:"Reset a Cookie",id:"reset-a-cookie",children:[],level:2},{value:"Sign a Cookie",id:"sign-a-cookie",children:[],level:2},{value:"Adding Cookie in Response",id:"adding-cookie-in-response",children:[],level:2},{value:"Getting Cookie from Request",id:"getting-cookie-from-request",children:[],level:2}],c={toc:k};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cookie"},"Cookie"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ZIO HTTP")," has special support for Cookie headers using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Cookie")," Domain to add and invalidate cookies. Adding a cookie will generate the correct ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie"},"Set-Cookie")," headers"),(0,i.kt)("h2",{id:"create-a-cookie"},"Create a Cookie"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Cookie")," can be created with params ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"content"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"expires"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"domain"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"path"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"isSecure"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"isHttpOnly"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"maxAge"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"sameSite")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"secret")," according to HTTP ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie"},"Set-Cookie"),"  "),(0,i.kt)("p",null,"The below snippet creates a cookie ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"content")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"abc")," with default params."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},' val cookie: Cookie = Cookie("id", "abc")\n')),(0,i.kt)("h3",{id:"update-a-cookie"},"Update a Cookie"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"withContent")," updates the content of cookie")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},' val newCookie = cookie.withContent("def")\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"withExpiry")," updates the expiration date of cookie")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"}," val newCookie = cookie.withExpiry(Instant.MAX)\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"withMaxAge")," updates the max-age of the cookie")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"}," val newCookie = cookie.withMaxAge(5 days)\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"withDomain")," updates the host to which the cookie will be sent")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},' val newCookie = cookie.withDomain("example.com")\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"withPath")," updates the path of the cookie")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},' val newCookie = cookie.withPath(!! / "cookie")\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"withSecure")," enables cookie only on https server ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"}," val newCookie = cookie.withSecure\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"withHttpOnly")," forbids JavaScript from accessing the cookie")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"}," val newCookie = cookie.withHttpOnly\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"withSameSite")," updates whether or not a cookie is sent with cross-origin requests")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"}," val newCookie = cookie.withSameSite(Instant.MAX)\n")),(0,i.kt)("h2",{id:"reset-a-cookie"},"Reset a Cookie"),(0,i.kt)("p",null,"you can reset cookie params using:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"withoutSecure")," resets ",(0,i.kt)("inlineCode",{parentName:"li"},"isSecure")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," in cookie"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"withoutHttpOnly")," resets ",(0,i.kt)("inlineCode",{parentName:"li"},"isHttpOnly")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," in cookie"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"withoutExpiry")," resets ",(0,i.kt)("inlineCode",{parentName:"li"},"expires")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"None")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"withoutDomain")," resets ",(0,i.kt)("inlineCode",{parentName:"li"},"domain")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"None")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"withoutPath")," resets ",(0,i.kt)("inlineCode",{parentName:"li"},"path")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"None")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"withoutMaxAge")," resets ",(0,i.kt)("inlineCode",{parentName:"li"},"maxAge")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"None")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"withoutSameSite")," resets ",(0,i.kt)("inlineCode",{parentName:"li"},"sameSite")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"None"))),(0,i.kt)("h2",{id:"sign-a-cookie"},"Sign a Cookie"),(0,i.kt)("p",null,"The cookies can be signed with a signature:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("inlineCode",{parentName:"li"},"sign"),"\nTo sign a cookie, you can use ",(0,i.kt)("inlineCode",{parentName:"li"},"sign"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},' val cookie = Cookie("key", "hello").withMaxAge(5 days)\n val app = Http.collect[Request] { case Method.GET -> !! / "cookie" =>\n    Response.ok.addCookie(cookie.sign("secret"))\n  }\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("inlineCode",{parentName:"li"},"signCookies")," middleware")),(0,i.kt)("p",null,"To sign all the cookies in your ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpApp"),", you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"signCookies")," middleware:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'  private val cookie = Cookie("key", "hello").withMaxAge(5 days)\n  private val app = Http.collect[Request] {\n    case Method.GET -> !! / "cookie" => Response.ok.addCookie(cookie)\n    case Method.GET -> !! / "secure-cookie" => Response.ok.addCookie(cookie.withSecure)\n  }\n\n  // Run it like any simple app\n  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] =\n    Server.start(8090, app @@ signCookies("secret")).exitCode\n')),(0,i.kt)("h2",{id:"adding-cookie-in-response"},"Adding Cookie in Response"),(0,i.kt)("p",null,"The cookies can be added in ",(0,i.kt)("inlineCode",{parentName:"p"},"Response")," headers:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},' val cookie1: Cookie = Cookie("id", "abc")\n val res = Response.ok.addCookie(cookie1)\n')),(0,i.kt)("p",null,"It updates the response header ",(0,i.kt)("inlineCode",{parentName:"p"},"Set-Cookie")," as"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Set-Cookie: <cookie-name>=<cookie-value>")),(0,i.kt)("h2",{id:"getting-cookie-from-request"},"Getting Cookie from Request"),(0,i.kt)("p",null,"In HTTP requests, cookies are stored in the ",(0,i.kt)("inlineCode",{parentName:"p"},"cookie")," header.\n",(0,i.kt)("inlineCode",{parentName:"p"},"cookiesDecoded")," can be used to get all the cookies in the request."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},' private val app = Http.collect[Request] {\n    case req @  Method.GET -> !! / "cookie" =>\n      Response.text(req.cookiesDecoded.mkString(""))\n  }\n')))}d.isMDXComponent=!0}}]);