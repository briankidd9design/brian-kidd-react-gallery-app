(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(64)},35:function(e,t,a){},36:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n,r,c,l=a(0),o=a.n(l),i=a(27),s=a.n(i),u=(a(35),a(10)),h=a(11),m=a(13),d=a(12),f=a(14),g=(a(36),a(9)),p=a.n(g),E=a(6),v=a(7),k=function(e){return o.a.createElement("header",null,o.a.createElement("h1",null,"React Gallery App"))},b=function(){return o.a.createElement("nav",{className:"main-nav"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(E.b,{to:"/kieselguitars"},"Kiesel Guitars ")),o.a.createElement("li",null,o.a.createElement(E.b,{to:"/fenderguitars"},"Fender Guitars")),o.a.createElement("li",null,o.a.createElement(E.b,{to:"/gibsonguitars"},"Gibson Guitars"))))},S=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={searchText:""},a.onSearchChange=function(e){a.setState({searchText:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.searchPhoto(a.query.value,"search");var t=a.query.value,n="/search?q=".concat(t);a.props.history.push(n),e.currentTarget.reset()},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("form",{className:"search-form",onSubmit:this.handleSubmit},o.a.createElement("input",{type:"search",onChange:this.onSearchChange,name:"search",ref:function(t){return e.query=t},placeholder:"Search...",required:!0}),o.a.createElement("button",{type:"submit",id:"submit",className:"search-button"},o.a.createElement("i",{className:"material-icons icn-search"}),o.a.createElement("svg",{fill:"#fff",height:"24",viewBox:"0 0 23 23",width:"24",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),o.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))))}}]),t}(l.Component),y=Object(v.e)(S),j=function(e){return o.a.createElement("li",null,o.a.createElement("img",{src:e.url,alt:e.title}))},w=function(){return o.a.createElement("div",{className:"not-found"},o.a.createElement("h3",null,"No Results Found"),o.a.createElement("p",null,"Your search did not return any results. Please try again."))},P=function(e){var t,a=e.data;return t=a.length>0?a.map(function(e){return o.a.createElement(j,{url:"https://farm".concat(e.farm,".staticflickr.com/").concat(e.server,"/").concat(e.id,"_").concat(e.secret,".jpg"),key:e.id,title:e.title})}):o.a.createElement(w,null),o.a.createElement("div",{className:"photo-container"},o.a.createElement("h2",null,"Search Results"),o.a.createElement("ul",null,t))},N=function(e){var t=e.data;return n=t.length>0?t.map(function(e){return o.a.createElement(j,{url:"https://farm".concat(e.farm,".staticflickr.com/").concat(e.server,"/").concat(e.id,"_").concat(e.secret,".jpg"),key:e.id,title:e.title})}):o.a.createElement(w,null),o.a.createElement("div",{className:"photo-container"},o.a.createElement("h2",null,"Search Results"),o.a.createElement("ul",null,n))},_=function(e){var t=e.data;return r=t.length>0?t.map(function(e){return o.a.createElement(j,{url:"https://farm".concat(e.farm,".staticflickr.com/").concat(e.server,"/").concat(e.id,"_").concat(e.secret,".jpg"),key:e.id,title:e.title})}):o.a.createElement(w,null),o.a.createElement("div",{className:"photo-container"},o.a.createElement("h2",null,"Search Results"),o.a.createElement("ul",null,r))},O=function(e){var t=e.data;return c=t.length>0?t.map(function(e){return o.a.createElement(j,{url:"https://farm".concat(e.farm,".staticflickr.com/").concat(e.server,"/").concat(e.id,"_").concat(e.secret,".jpg"),key:e.id,title:e.title})}):o.a.createElement(w,null),o.a.createElement("div",{className:"photo-container"},o.a.createElement("h2",null,"Search Results"),o.a.createElement("ul",null,c))},x=function(){return o.a.createElement("div",{className:"not-found"},o.a.createElement("h3",null,"404 Page Not Found"))},C="8157d0a037cf0e3b5d722ace1c816185",L=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).defaultSearch=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"guitars";e.state.loading=!0,p.a.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(C,"&tags=").concat(t,"&sort=relevance&per_page=24&format=json&nojsoncallback=1")).then(function(t){e.setState({searchPics:t.data.photos.photo,loading:!1})}).catch(function(e){console.log("Error fetching and parsing data",e)})},e.kieselSearch=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"kieselguitars";e.state.loading=!0,p.a.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(C,"&tags=").concat(t,"&sort=relevance&per_page=24&format=json&nojsoncallback=1")).then(function(t){e.setState({kieselPics:t.data.photos.photo,loading:!1})}).catch(function(e){console.log("Error fetching and parsing data",e)})},e.fenderSearch=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"fenderguitars";e.state.loading=!0,p.a.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(C,"&tags=").concat(t,"&sort=relevance&per_page=24&format=json&nojsoncallback=1")).then(function(t){e.setState({fenderPics:t.data.photos.photo,loading:!1})}).catch(function(e){console.log("Error fetching and parsing data",e)})},e.gibsonSearch=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"gibsonguitars";e.state.loading=!0,p.a.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(C,"&tags=").concat(t,"&sort=relevance&per_page=24&format=json&nojsoncallback=1")).then(function(t){e.setState({gibsonPics:t.data.photos.photo,loading:!1})}).catch(function(e){console.log("Error fetching and parsing data",e)})},e.state={searchPics:[],kieselPics:[],fenderPics:[],gibsonPics:[],loading:!0},e}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.defaultSearch(),this.kieselSearch(),this.fenderSearch(),this.gibsonSearch()}},{key:"render",value:function(){var e=this;return o.a.createElement(E.a,null,o.a.createElement("div",{className:"container"},o.a.createElement(k,null),o.a.createElement(y,{searchPhoto:this.defaultSearch}),o.a.createElement(b,null),o.a.createElement(v.c,null,o.a.createElement(v.a,{exact:!0,path:"/",render:function(){return e.state.loading?o.a.createElement("p",null," Loading..."):o.a.createElement(P,{data:e.state.searchPics})}}),o.a.createElement(v.a,{exact:!0,path:"/kieselguitars",render:function(){return e.state.loading?o.a.createElement("p",null," Loading..."):o.a.createElement(N,{data:e.state.kieselPics})}}),o.a.createElement(v.a,{exact:!0,path:"/fenderguitars",render:function(){return e.state.loading?o.a.createElement("p",null," Loading..."):o.a.createElement(_,{data:e.state.fenderPics})}}),o.a.createElement(v.a,{exact:!0,path:"/gibsonguitars",render:function(){return e.state.loading?o.a.createElement("p",null," Loading..."):o.a.createElement(O,{data:e.state.gibsonPics})}}),o.a.createElement(v.a,{path:"/search",render:function(){return e.state.loading?o.a.createElement("p",null," Loading..."):o.a.createElement(P,{data:e.state.searchPics})}}),o.a.createElement(v.a,{component:x}))))}}]),t}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.fecc2563.chunk.js.map