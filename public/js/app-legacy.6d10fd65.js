(function(){var t={81308:function(t,e,n){"use strict";n(66992),n(88674),n(19601),n(17727);var o=n(28935),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view",{staticClass:"router-view"}),n("Footer")],1)},a=[],i=n(93019),u=(n(57327),n(41539),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-section"},[n("div",{staticClass:"container"},[n("nav",{staticClass:"main-menu left-side"},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),n("router-link",{attrs:{to:"/inventory"}},[t._v("Inventory")])],1),t.isLoggedIn?n("div",{staticClass:"user-coin-info right-side"},[n("span",[t._v(t._s(t.totalSol)+" SOL ("+t._s(t._f("currency")(t.inDollars))+")")]),n("span",[t._v(t._s(t.totalLoot)+" Loot")]),n("el-popover",{attrs:{placement:"bottom",title:"My Account",width:"260",trigger:"click"}},[n("div",{staticClass:"p-row"},[n("label",{staticClass:"block"},[t._v("Wallet Address: ")]),n("strong",[t._v(t._s(t.wallet))]),t._v(" "),n("el-button",{attrs:{icon:"el-icon-copy-document",type:"text"},on:{click:t.copyWallet}})],1),n("div",{staticClass:"p-row"},[n("label",{staticClass:"block"},[t._v("Balance:")]),n("strong",[t._v(t._s(t.totalSol)+" SOL")])]),n("div",{staticClass:"p-row"},[n("el-button",{on:{click:t.logout}},[t._v("Disconnect")])],1),n("el-button",{attrs:{slot:"reference",type:"text",icon:"el-icon-user-solid"},slot:"reference"},[t._v("My Account")])],1)],1):n("div",{staticClass:"user-coin-info right-side"},[n("router-link",{attrs:{to:"/connect-wallet"}},[t._v("Connect Wallet")])],1)])])}),c=[],s=n(67906),l=n(16198),f=n(47010),d=n.n(f),m=n(34665),h=n(98576),v={data:function(){return{}},mixins:[h.Z],computed:(0,i.Z)((0,i.Z)((0,i.Z)({},(0,m.rn)({wallet:function(t){return t.users.wallet},wallet_balance:function(t){return t.users.wallet_balance},user:function(t){return t.users.user},sol_rate:function(t){return t.sol_rate}})),{},{isPhantom:function(){var t;return null===(t=solana)||void 0===t?void 0:t.isPhantom},provider:function(){return this.getProvider()}},(0,m.Se)({isLoggedIn:"users/isLoggedIn"})),{},{totalSol:function(){return this.wallet_balance},inDollars:function(){return this.totalSol*this.sol_rate},totalLoot:function(){return this.user.total_loot}}),methods:(0,i.Z)((0,i.Z)({},(0,m.nv)({doLogout:"users/logout"})),{},{logout:function(){var t=this;return(0,l.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.disconnectPhantom(),e.next=3,t.doLogout();case 3:t.$router.push("/connect-wallet?redirect=".concat(t.$route.fullPath));case 4:case"end":return e.stop()}}),e)})))()},copyWallet:function(){d()(this.wallet),this.$message({message:"Wallet address copied.",type:"success"})},disconnectPhantom:function(){var t=this;return(0,l.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log(t.provider),t.provider.disconnect();case 2:case"end":return e.stop()}}),e)})))()}})},p=v,g=n(1001),E=(0,g.Z)(p,u,c,!1,null,null,null),T=E.exports,S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-section"},[n("div",{staticClass:"container align-center"},[t._v(" (c) 2022 copyright by YourCompany ")])])}],k={data:function(){return{}}},b=k,y=(0,g.Z)(b,S,w,!1,null,null,null),A=y.exports;o["default"].filter("currency",(function(t){if("number"!==typeof t)return t;var e=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});return e.format(t)}));var N={components:{Header:T,Footer:A},computed:(0,i.Z)({},(0,m.rn)({socket:function(t){return t.socket}})),mounted:function(){this.$store.dispatch("get_nfts"),this.socket.on("gts_connect",(function(t){console.log(t)})),this.socket.on("game_update",(function(t){console.log(t)}))}},O=N,L=(0,g.Z)(O,r,a,!1,null,null,null),P=L.exports,Z=(n(78783),n(33948),n(12809));o["default"].use(Z.Z);var I=[{path:"/",name:"home",component:function(){return n.e(177).then(n.bind(n,13354))}},{path:"/login",name:"login",component:function(){return n.e(535).then(n.bind(n,22379))}},{path:"/connect-wallet",name:"connect-wallet",component:function(){return n.e(864).then(n.bind(n,70296))}},{path:"/inventory",name:"inventory",component:function(){return n.e(234).then(n.bind(n,30365))}},{path:"*",redirect:"/404",hidden:!0}],R=function(){return new Z.Z({scrollBehavior:function(){return{y:0}},routes:I})},x=R();function F(){var t=R();x.matcher=t.matcher}var C=x,D=(n(73210),n(54747),n(76133)),G=n(92751),M=n(26166),W=n.n(M),H=n(74549),j=n.n(H),U=n(60329),B="bt_gts_token",$="bt_gts_refresh_token";function K(){return U.Z.get(B)}function Y(t){return U.Z.set(B,t)}function q(){return U.Z.remove(B)}function Q(){return U.Z.get($)}function z(t){return U.Z.set($,t)}function J(){return U.Z.remove($)}n(92196);var V=W().create({baseURL:"https://bonensoher.eosvn.com/api/v1",timeout:45e3});V.interceptors.request.use((function(t){return t.headers["x-app-id"]="123456",ht.getters.token&&(t.headers["Authorization"]="Bearer ".concat(K())),t}),(function(t){return Promise.reject(t)})),V.interceptors.response.use((function(t){return t.data}),(function(t){return Promise.reject(t)}));var X=V,tt=function(){function t(){(0,D.Z)(this,t)}return(0,G.Z)(t,[{key:"login",value:function(t){return X({url:"/auth/login",method:"post",data:t})}},{key:"connectWallet",value:function(t){return X({url:"/auth/connect-wallet",method:"post",data:t})}},{key:"refreshToken",value:function(t){return X({url:"/auth/refresh-token",method:"post",data:t})}},{key:"getInfo",value:function(t){return X({url:"/auth/info",method:"get",params:t})}},{key:"logout",value:function(){return X({url:"/auth/logout",method:"post"})}},{key:"toggleSelectHero",value:function(t){return X({url:"/user/update-hero-status",method:"post",data:t})}},{key:"updateNonNFTEntries",value:function(t){return X({url:"/user/update-non-nft-entries",method:"post",data:t})}},{key:"enterGame",value:function(t){return X({url:"/user/enter-game",method:"post",data:t})}},{key:"getBalanceWallet",value:function(t){return X({url:"/user/get-balance-wallet",method:"post",data:t})}}]),t}(),et=new tt,nt=function(){return{queued:!1,game_playing_id:0,game_id:0,token:K(),refresh_token:Q(),wallet:"",wallet_balance:0,user:{},non_nft_entries:0,heroes_mint:[],heroes_data:[],curent_game_info:{}}},ot=nt(),rt={heroes:function(t,e,n){return void 0===n.nfts?[]:_.filter(n.nfts,(function(e){return t.heroes_mint.indexOf(e.mint)>-1}))},isLoggedIn:function(t){return!!t.token},heroCommitedTotal:function(t){var e=_.filter(t.heroes_data,(function(t){return 1===t.active}));return e.length}},at={SET_QUEUED:function(t,e){t.queued=e},RESET_STATE:function(t){Object.assign(t,nt())},SET_TOKEN:function(t,e){t.token=e},SET_REFRESH_TOKEN:function(t,e){t.refresh_token=e},SET_FULLNAME:function(t,e){t.fullname=e},SET_WALLET:function(t,e){t.wallet=e},SET_WALLET_BALANCE:function(t,e){t.wallet_balance=e},SET_AVATAR:function(t,e){t.avatar=e},SET_USER:function(t,e){t.user=e},SET_HEROES_MINT:function(t,e){t.heroes_mint=e},SET_HEROES_DATA:function(t,e){t.heroes_data=e},SET_NON_NFT_ENTRIES:function(t,e){t.non_nft_entries=e},SET_CURENT_GAME_INFO:function(t,e){ot.curent_game_info=e},SET_GAME_PLAYING_ID:function(t,e){t.game_playing_id=e},SET_GAME_ID:function(t,e){t.game_id=e}},it={login:function(t,e){var n=t.commit,o=e.email,r=e.password;return new Promise((function(t,e){et.login({email:o.trim(),password:r}).then((function(e){var o=e.data;n("SET_TOKEN",o.token),n("SET_REFRESH_TOKEN",o.refresh_token),Y(o.token),z(o.refresh_token),t(e)})).catch((function(t){e(t)}))}))},connectWallet:function(t,e){var n=t.commit,o=e.wallet,r=e.signature;return new Promise((function(t,e){et.connectWallet({wallet:o,signature:r,timestamp:(new Date).getTime()}).then((function(e){var o=e.data;n("SET_TOKEN",o.token),n("SET_REFRESH_TOKEN",o.refresh_token),Y(o.token),z(o.refresh_token),t(e)})).catch((function(t){e(t)}))}))},refreshToken:function(t){var e=t.state,n=t.commit;return new Promise((function(t,o){var r={refresh_token:e.refresh_token};et.refreshToken(r).then((function(e){var o=e.data;null!==o.token?(n("SET_TOKEN",o.token),Y(o.token)):(q(),J()),t(e)})).catch((function(t){o(t)}))}))},getInfo:function(t){t.state;var e=t.commit,n=t.dispatch;return new Promise((function(t,o){et.getInfo().then((function(o){var r=o.data,a=r.user,i=r.heroes,u=r.heroes_data;e("SET_WALLET",a.wallet),e("SET_USER",a),e("SET_HEROES_MINT",i),e("SET_HEROES_DATA",u),e("SET_NON_NFT_ENTRIES",r.non_nft_entries),e("SET_CURENT_GAME_INFO",r.current_entries),e("SET_GAME_PLAYING_ID",r.game_playing_id),e("SET_GAME_ID",r.game_id),e("SET_NFTS_LOADING",!1,{root:!0}),r.game_playing_id>0&&e("SET_QUEUED",!0),n("getBalanceWallet"),t(r)})).catch((function(t){o(t)}))}))},logout:function(t){t.state;var e=t.commit;return new Promise((function(t,n){et.logout().then((function(){q(),J(),F(),e("RESET_STATE"),t()})).catch((function(t){n(t)}))}))},resetToken:function(t){var e=t.commit;return new Promise((function(t){q(),e("RESET_STATE"),t()}))},toggleSelectHero:function(t,e){var n=t.state,o=t.commit;return new Promise((function(t,r){et.toggleSelectHero(e).then((function(e){var r=[];n.heroes_data.forEach((function(t){var n=t;n.mint===e.update.mint&&(n.active=e.update.active),r.push(n)})),o("SET_HEROES_DATA",r),o("SET_CURENT_GAME_INFO",e.game_info),t(e)})).catch((function(t){r(t)}))}))},updateNonNFTEntries:function(t,e){var n=t.commit;return new Promise((function(t,o){et.updateNonNFTEntries({entries:e}).then((function(e){n("SET_CURENT_GAME_INFO",e.game_info),t(e)})).catch((function(t){console.log(t),o(t)}))}))},enterGame:function(t,e){t.commit;var n=t.dispatch;return new Promise((function(t,o){var r={signature:e,timestamp:(new Date).getTime()};et.enterGame(r).then((function(e){n("getBalanceWallet"),t(e)})).catch((function(t){console.log(t),o(t)}))}))},getBalanceWallet:function(t){var e=t.commit,n=t.state;return new Promise((function(t,o){var r={wallet_address:n.wallet};et.getBalanceWallet(r).then((function(n){e("SET_WALLET_BALANCE",n.balance),t(n)})).catch((function(t){console.log(t),o(t)}))}))}},ut={namespaced:!0,state:ot,getters:rt,actions:it,mutations:at},ct=function(){function t(){(0,D.Z)(this,t)}return(0,G.Z)(t,[{key:"getGameInfo",value:function(){return X({url:"/game/info",method:"get"})}},{key:"getNSTF",value:function(){return X({url:"https://cryptoquestnft.com/api/nfts/all",method:"get"})}},{key:"validAuth",value:function(){return X({url:"/app/valid",method:"post"})}}]),t}(),st=new ct,lt=(n(68309),{sidebar:function(t){return t.sidebar},device:function(t){return t.device},token:function(t){return t.users.token},avatar:function(t){return t.users.avatar},name:function(t){return t.users.name}}),ft=lt;o["default"].use(m.ZP);var dt=n(53969),_t=dt("https://bonensoher.eosvn.com/gts.dashboard",{}),mt=new m.ZP.Store({modules:{users:ut},state:{version:"1.0.1",sidebar:!1,device:"",nfts_loading:!1,nfts:[],SolTotal:0,socket:_t,game_info:{},node_type:"devnet",sol_rate:1,primary_wallet:""},getters:ft,mutations:{SET_NFTS_LOADING:function(t,e){t.nfts_loading=e},SET_NFTS_DATA:function(t,e){t.nfts=e},SET_SOL_TOTAL:function(t,e){t.SolTotal=e},SET_GAME_INFO:function(t,e){t.game_info=e},SET_SOL_RATE:function(t,e){t.sol_rate=e},SET_PRIMARY_WALLET:function(t,e){t.primary_wallet=e},SET_NODE_TYPE:function(t,e){t.node_type=e}},actions:{get_game_info:function(t){var e=t.commit;return new Promise((function(t,n){st.getGameInfo().then((function(n){e("SET_GAME_INFO",n.game_info),e("SET_SOL_RATE",n.sol_usd_rate),e("SET_PRIMARY_WALLET",n.primary_wallet),e("SET_NODE_TYPE",n.node_type),t(n)})).catch((function(t){console.log(t),n(t)}))}))},valid:function(t){t.commit;return new Promise((function(t,e){st.validAuth().then((function(e){t(e)})).catch((function(t){console.log(t),e(t)}))}))},get_nfts:function(t){var e=t.commit;return e("SET_NFTS_LOADING",!0),new Promise((function(t,n){st.getNSTF().then((function(n){e("SET_NFTS_DATA",n.nfts),e("SET_NFTS_LOADING",!1),t(n)})).catch((function(t){console.log(t),e("SET_NFTS_LOADING",!1),n(t)}))}))}}}),ht=mt,vt=n(97345),pt=n(2228),gt=n(39879),Et=n.n(gt),Tt=(n(92222),n(69734)),St=n.n(Tt),wt=St().title||"Treasure Stealing";function kt(t){return t?"".concat(t," - ").concat(wt):"".concat(wt)}Et().configure({showSpinner:!1});var bt=["/login","/connect-wallet"];C.beforeEach(function(){var t=(0,l.Z)((0,s.Z)().mark((function t(e,n,o){var r,a;return(0,s.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(Et().start(),document.title=kt(e.meta.title),r=K(),!r){t.next=29;break}if("/connect-wallet"!==e.path){t.next=9;break}o({path:"/"}),Et().done(),t.next=27;break;case 9:if(a=ht.getters.name,!a){t.next=14;break}o(),t.next=27;break;case 14:return t.prev=14,t.next=17,ht.dispatch("users/getInfo");case 17:o(),t.next=27;break;case 20:return t.prev=20,t.t0=t["catch"](14),t.next=24,ht.dispatch("users/resetToken");case 24:H.Message.error(t.t0||"Has Error"),o("/connect-wallet?redirect=".concat(e.path)),Et().done();case 27:t.next=30;break;case 29:-1!==bt.indexOf(e.path)?o():(o("/connect-wallet?redirect=".concat(e.path)),Et().done());case 30:case"end":return t.stop()}}),t,null,[[14,20]])})));return function(e,n,o){return t.apply(this,arguments)}}()),C.afterEach((function(){Et().done()}));var yt=JSON.parse('{"hello":"Hello world!"}'),At="en",Nt={en:yt};o["default"].use(vt.Z),o["default"].use(m.ZP),o["default"].config.productionTip=!1;var Ot=Object.assign(Nt);o["default"].use(j()),o["default"].use(pt.ZP),o["default"].config.productionTip=!1;var Lt=new vt.Z({locale:At,fallbackLocale:"en",messages:Ot});new o["default"]({i18n:Lt,store:ht,router:C,render:function(t){return t(P)}}).$mount("#app")},98576:function(t,e,n){"use strict";var o=n(89914);window.Buffer=o.Buffer;var r={methods:{getProvider:function(){if("phantom"in window){var t,e=null===(t=window.phantom)||void 0===t?void 0:t.solana;if(null!==e&&void 0!==e&&e.isPhantom)return e}window.open("https://phantom.app/","_blank")}}};e["Z"]=r},69734:function(t){t.exports={title:"Treasure Stealing",fixedHeader:!1,sidebarLogo:!0}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,loaded:!1,exports:{}};return t[o].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=t,function(){n.amdO={}}(),function(){var t=[];n.O=function(e,o,r,a){if(!o){var i=1/0;for(l=0;l<t.length;l++){o=t[l][0],r=t[l][1],a=t[l][2];for(var u=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(u=!1,a<i&&(i=a));if(u){t.splice(l--,1);var s=r();void 0!==s&&(e=s)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[o,r,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+{177:"home",234:"inventory",535:"login",864:"connect-wallet"}[t]+"-legacy."+{177:"3b3a4e4e",234:"89816be5",535:"b24ab824",864:"3970951e"}[t]+".js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="game-treasure-stealing-vue:";n.l=function(o,r,a,i){if(t[o])t[o].push(r);else{var u,c;if(void 0!==a)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==e+a){u=f;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",e+a),u.src=o),t[o]=[r];var d=function(e,n){u.onerror=u.onload=null,clearTimeout(_);var r=t[o];if(delete t[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(t){return t(n)})),e)return e(n)},_=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){n.p="/"}(),function(){var t={143:0};n.f.j=function(e,o){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=t[e]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(e),u=new Error,c=function(o){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,r[1](u)}};n.l(i,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,a,i=o[0],u=o[1],c=o[2],s=0;if(i.some((function(e){return 0!==t[e]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(c)var l=c(n)}for(e&&e(o);s<i.length;s++)a=i[s],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},o=self["webpackChunkgame_treasure_stealing_vue"]=self["webpackChunkgame_treasure_stealing_vue"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(81308)}));o=n.O(o)})();