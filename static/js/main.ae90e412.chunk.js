(this.webpackJsonpportfolio_website=this.webpackJsonpportfolio_website||[]).push([[0],{119:function(e,t){},145:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(20),i=s.n(n),r=(s(73),s(9)),o=s.n(r),l=s(16),d=s(2),m=s(6),j=s(10),b=s(11),h=s(12),u=s(154),x=s(14),p=s.n(x),g=s(0),O=function(e){Object(b.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(m.a)(this,s);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={name:"",email:"",description:"",submitMessage:"",submitMessageTextColor:""},e.onChange=function(t){e.setState(Object(d.a)({},t.target.name,t.target.value))},e.onSubmit=function(){var t=Object(l.a)(o.a.mark((function t(s){var a,c,n,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.preventDefault(),a={id:Object(u.a)(),name:e.state.name,email:e.state.email,description:e.state.description},t.next=4,p.a.post("http://127.0.0.1:9000/api/contact",a);case 4:c=t.sent,n=c.data.isSuccessful,i=e.state.name,n?e.setState({submitMessage:"Message Submitted ".concat(i,". I will contact you soon!"),submitMessageTextColor:"text-success"}):e.setState({submitMessage:"Oops! Something went wrong. Please try again later :(",submitMessageTextColor:"text-danger"});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(j.a)(s,[{key:"render",value:function(){var e=this.state,t=e.submitMessageTextColor,s=e.submitMessage;return Object(g.jsxs)("div",{className:"container my-5 py-5",children:[Object(g.jsxs)("h1",{className:"font-weight-light text-center py-5",children:[Object(g.jsx)("span",{className:"text-info",children:"Thank you! "}),"for your interest"]}),Object(g.jsx)("div",{className:"row justify-content-center",children:Object(g.jsx)("div",{className:"col-11 col-lg-5",children:Object(g.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"name",children:"Name *"}),Object(g.jsx)("input",{type:"text",name:"name",className:"form-control",onChange:this.onChange})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"email",children:"Email *"}),Object(g.jsx)("input",{type:"email",name:"email",className:"form-control",onChange:this.onChange})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"description",children:"Tell me about your project *"}),Object(g.jsx)("textarea",{className:"form-control",name:"description",rows:"5",onChange:this.onChange})]}),Object(g.jsx)("button",{type:"submit",className:"btn btn-dark float-right",style:{backgroundColor:"black"},children:"Let's talk business"})]})})}),Object(g.jsx)("div",{className:"py-5 mx-2 text-center",children:Object(g.jsx)("h5",{className:t,children:s})})]})}}]),s}(a.Component),f=O,v=s(8);var y=function(){return Object(g.jsx)("footer",{children:Object(g.jsxs)("div",{className:"container-fluid text-center",style:{backgroundColor:"black"},children:[Object(g.jsxs)("div",{className:"py-5",children:[Object(g.jsx)("h2",{className:"text-light",children:"Interested In Working With Me ?"}),Object(g.jsx)(v.b,{to:"/contact",children:Object(g.jsx)("button",{className:"btn btn-outline-light btn-lg mt-3",children:"Let's Talk"})})]}),Object(g.jsxs)("div",{className:"row",children:[Object(g.jsxs)("div",{className:"col-12 col-md-4 py-3",children:[Object(g.jsx)("h5",{className:"text-info pb-3",children:"More Links"}),Object(g.jsx)(v.b,{to:"/all-blogs",className:"text-light d-block",children:"Blogs"}),Object(g.jsx)(v.b,{to:"/",className:"text-light d-block",children:"Home"}),Object(g.jsx)(v.b,{to:"/all-projects",className:"text-light d-block",children:"Projects"}),Object(g.jsx)(v.b,{to:"/contact",className:"text-light d-block",children:"Contact Me"}),Object(g.jsxs)(v.b,{to:"/write-recommendation",className:"text-light",children:["Write A Recommendation ",Object(g.jsx)("i",{className:"fas fa-heart text-light"})]})]}),Object(g.jsx)("div",{className:"col-12 col-md-4 text-light text-justify py-3",children:Object(g.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitaLinkion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"})}),Object(g.jsxs)("div",{className:"col-12 col-md-4 py-3",children:[Object(g.jsx)("h5",{className:"text-info pb-3",children:"Social"}),Object(g.jsx)("a",{href:"/",children:Object(g.jsx)("i",{className:"fab fa-linkedin text-light h1 d-block"})}),Object(g.jsx)("a",{href:"/",children:Object(g.jsx)("i",{className:"fab fa-github text-light h1 d-block"})}),Object(g.jsx)("a",{href:"/",children:Object(g.jsx)("i",{className:"fas fa-envelope text-light h1 d-block"})})]})]}),Object(g.jsx)("div",{className:"text-muted py-3",children:Object(g.jsx)("p",{children:"Copyright @ Jithin Mathew 2021"})})]})})};var N=function(){return Object(g.jsx)("nav",{className:"navbar navbar-expand-md fixed-top bg-white",children:Object(g.jsxs)("div",{className:"container my-2",children:[Object(g.jsx)(v.b,{to:"/",className:"navbar-brand text-dark font-weight-bold",children:"Jithin Mathew"}),Object(g.jsx)(v.b,{to:"/contact",className:"ms-auto mx-3",children:Object(g.jsx)("button",{href:"",className:"btn btn-outline-info",children:"Contact Me"})}),Object(g.jsx)("button",{className:"navbar-toggler","data-bs-toggle":"collapse","data-bs-target":"#collapseNav",children:Object(g.jsx)("span",{className:"fas fa-bars text-dark"})}),Object(g.jsx)("div",{className:"collapse navbar-collapse flex-grow-0",id:"collapseNav",children:Object(g.jsxs)("div",{className:"navbar-nav",children:[Object(g.jsx)(v.b,{to:"/all-projects",className:"nav-item nav-link text-dark h6 mx-1 my-auto",children:"Projects"}),Object(g.jsx)(v.b,{to:"/all-blogs",className:"nav-item nav-link text-dark h6 mx-1 my-auto",children:"Blogs"})]})})]})})},w=s(13),k=s(7),C=c.a.createContext(),M=function(e){Object(b.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(m.a)(this,s);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).handler=function(t,s){switch(t){case"ADD_PROJECT":e.setState({projects:[s].concat(Object(k.a)(e.state.projects))});break;case"ADD_BLOG":e.setState({blogs:[s].concat(Object(k.a)(e.state.blogs))});break;case"ADD_RECOMMENDATION":e.setState({recommendations:[s].concat(Object(k.a)(e.state.recommendations))})}},e.state={handler:e.handler,projects:[{id:1,title:"Project 1",imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-1.jpg",excerpt:"This is my project about...",body:"Body 1"},{id:2,title:"Project 2",imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-2.jpg",excerpt:"This is my project about...",body:"Body 2"},{id:3,title:"Project 3",imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-3.jpg",excerpt:"This is my project about...",body:"Body 3"},{id:4,title:"Project 4",imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-1.jpg",excerpt:"This is my project about...",body:"Body 4"}],blogs:[{id:1,title:"Blog 1",imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-1.jpg",excerpt:"This is my blog about...",body:"Body 1"},{id:2,title:"Blog 2",imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-2.jpg",excerpt:"This is my blog about...",body:"Body 2"},{id:3,title:"Blog 3",imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-3.jpg",excerpt:"This is my blog about...",body:"Body 3"}],recommendations:[{id:1,name:"Jimmy Donaldson",company:"Mr Beast",designation:"Owner",message:"There were lots of smiles and personal relationships that we\u2019ll all take forward in supporting what we do\u2014creating original content for our subscribers"},{id:2,name:"Harry Potter",company:"Hogwarts",designation:"Heir",message:"He ain't a very good developer"},{id:3,name:"The Professor",company:"NRB Of Spain",designation:"Mastermind",message:"In this world, everything is governed by balance. There\u2019s what you stand to gain and what you stand to lose. And when you think you\u2019ve got nothing to lose, you become overconfident."},{id:4,name:"PewDiePie",company:"Youtube",designation:"Owner",message:"I don't care"}],skills:[{id:1,name:"HTML5",imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/html5.png",starsTotal:3,starsActive:3},{id:2,name:"CSS3",imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/css3.png",starsTotal:3,starsActive:3},{id:3,name:"Javascript",imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/javascript.png",starsTotal:3,starsActive:2},{id:4,name:"Bootstrap 4",imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/bootstrap4.png",starsTotal:3,starsActive:1},{id:5,name:"React",imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/react.png",starsTotal:3,starsActive:3},{id:6,name:"MySQL",imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/mysql.png",starsTotal:3,starsActive:2},{id:7,name:"Python",imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/python.png",starsTotal:3,starsActive:3},{id:8,name:"Flask",imageUrl:"https://storage.googleapis.com/unschool-portfolio-website/flask.png",starsTotal:3,starsActive:2}]},e}return Object(j.a)(s,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,s,a,c,n,i,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([p.a.get("http://127.0.0.1:9000/api/recommendations"),p.a.get("http://127.0.0.1:9000/api/skills"),p.a.get("http://127.0.0.1:9000/api/projects"),p.a.get("http://127.0.0.1:9000/api/blogs")]);case 2:t=e.sent,s=Object(w.a)(t,4),a=s[0],c=s[1],n=s[2],i=s[3],r={},a.data.isSuccessful&&0!==a.data.results.length&&(r.recommendations=a.data.results),c.data.isSuccessful&&0!==c.data.results.length&&(r.skills=c.data.results),n.data.isSuccessful&&0!==n.data.results.length&&(r.projects=n.data.results),i.data.isSuccessful&&0!==i.data.results.length&&(r.blogs=i.data.results),this.setState(r);case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(g.jsx)(C.Provider,{value:this.state,children:this.props.children})}}]),s}(a.Component),T=C.Consumer,S=function(e){Object(b.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(m.a)(this,s);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={name:"",email:"",company:"",designation:"",recommendationMessage:"",submitMessage:"",submitMessageTextColor:""},e.onChange=function(t){e.setState(Object(d.a)({},t.target.name,t.target.value))},e.onSubmit=function(){var t=Object(l.a)(o.a.mark((function t(s,a){var c,n,i,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),c={id:Object(u.a)(),name:e.state.name,email:e.state.email,company:e.state.company,designation:e.state.designation,message:e.state.recommendationMessage},t.next=4,p.a.post("http://127.0.0.1:9000/api/recommendation",c);case 4:n=t.sent,i=n.data.isSuccessful,r=e.state.name,i?e.setState({submitMessage:"Thank you ".concat(r," for the recommendation! I really appreciate it."),submitMessageTextColor:"text-info"}):e.setState({submitMessage:"Oops! Something went wrong. Please try again later :(",submitMessageTextColor:"text-danger"}),s("ADD_RECOMMENDATION",c);case 9:case"end":return t.stop()}}),t)})));return function(e,s){return t.apply(this,arguments)}}(),e}return Object(j.a)(s,[{key:"render",value:function(){var e=this;return Object(g.jsx)(T,{children:function(t){var s=e.state,a=s.submitMessage,c=s.submitMessageTextColor,n=t.handler;return Object(g.jsxs)("div",{className:"container my-5 py-5",children:[Object(g.jsxs)("h1",{className:"font-weight-light text-center py-5",children:[Object(g.jsx)("span",{className:"text-info",children:"Thank you! "}),"for your taking your time"]}),Object(g.jsx)("div",{className:"row justify-content-center",children:Object(g.jsx)("div",{className:"col-11 col-lg-5",children:Object(g.jsxs)("form",{onSubmit:e.onSubmit.bind(e,n),children:[Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"name",children:"Name *"}),Object(g.jsx)("input",{type:"text",name:"name",className:"form-control",onChange:e.onChange})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"email",children:"Email *"}),Object(g.jsx)("input",{type:"email",name:"email",className:"form-control",onChange:e.onChange})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"company",children:"Company / Institution *"}),Object(g.jsx)("input",{type:"text",className:"form-control",name:"company",onChange:e.onChange})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"designation",children:"Designation *"}),Object(g.jsx)("input",{type:"text",className:"form-control",name:"designation",onChange:e.onChange})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"recommendationMessage",children:"Recommendation *"}),Object(g.jsx)("textarea",{className:"form-control",name:"recommendationMessage",rows:"5",onChange:e.onChange})]}),Object(g.jsx)("button",{type:"submit",className:"btn btn-danger float-right",children:"Lot's of love!"})]})})}),Object(g.jsx)("div",{className:"py-5 mx-2 text-center",children:Object(g.jsx)("h5",{className:c,children:a})})]})}})}}]),s}(a.Component),U=S,A=s(5);var B=function(e){var t=e.project,s=(t.id,t.title),a=t.excerpt,c=t.imageUrl;return Object(g.jsxs)("div",{className:"card shadow h-100",children:[Object(g.jsx)("img",{className:"card-img-top",src:c,alt:s}),Object(g.jsxs)("div",{className:"card-body",children:[Object(g.jsx)("h4",{className:"card-title",children:s}),Object(g.jsx)("p",{className:"card-text",children:a}),Object(g.jsx)(v.b,{to:"/project/${id}",className:"stretched-link"})]})]})};var P=function(){return Object(g.jsx)(T,{children:function(e){var t=e.projects;return Object(g.jsxs)("div",{className:"container text-center my-5",children:[Object(g.jsxs)("h1",{className:"font-weight-light",children:["My ",Object(g.jsx)("span",{className:"text-info",children:"Projects"})]}),Object(g.jsx)("div",{className:"lead",children:"These Are My Projects. Yes Mine!"}),Object(g.jsx)("div",{className:"row my-5 pt-3",children:t.slice(0,3).map((function(e){return Object(g.jsx)("div",{className:"col-12 col-md-4 my-2",children:Object(g.jsx)(B,{project:e})},e.id)}))}),Object(g.jsx)("div",{className:"my-5",children:Object(g.jsx)(v.b,{to:"/all-projects",className:"text-dark text-end",children:Object(g.jsxs)("h5",{children:["See My Projects",Object(g.jsx)("i",{className:"fas fa-arrow-right align-middle"})]})})})]})}})};var D=function(e){var t=e.blog,s=(t.id,t.title),a=t.excerpt,c=t.imageUrl;return Object(g.jsxs)("div",{className:"card shadow h-100",children:[Object(g.jsx)("img",{className:"card-img-top",src:c,alt:s}),Object(g.jsxs)("div",{className:"card-body",children:[Object(g.jsx)("h4",{className:"card-title",children:s}),Object(g.jsx)("p",{className:"card-text",children:a}),Object(g.jsx)(v.b,{to:"/blog/${id}",className:"stretched-link"})]})]})};var I=function(){return Object(g.jsx)(T,{children:function(e){var t=e.blogs;return Object(g.jsxs)("div",{className:"container text-center my-5",children:[Object(g.jsxs)("h1",{className:"font-weight-light",children:["My ",Object(g.jsx)("span",{className:"text-info",children:"Blogs"})]}),Object(g.jsx)("div",{className:"lead",children:"These Are My Blogs. Yes Mine!"}),Object(g.jsx)("div",{className:"row my-5 pt-3",children:t.slice(0,3).map((function(e){return Object(g.jsx)("div",{className:"col-12 col-md-4 my-2",children:Object(g.jsx)(D,{blog:e})},e.id)}))}),Object(g.jsx)("div",{className:"my-5",children:Object(g.jsx)(v.b,{to:"/all-blogs",className:"text-dark text-end",children:Object(g.jsxs)("h5",{children:["See My Blogs",Object(g.jsx)("i",{className:"fas fa-arrow-right align-middle"})]})})})]})}})};var F=function(e){for(var t=e.skill,s=t.name,a=t.imageUrl,c=t.starsTotal,n=t.starsActive,i=[],r=0;r<c;r++)r<n?i.push(Object(g.jsx)("span",{className:"text-info",children:"\u2605"},Object(u.a)())):i.push(Object(g.jsx)("span",{children:"\u2605"},Object(u.a)()));return Object(g.jsxs)("div",{children:[Object(g.jsx)("img",{className:"rounded-circle",src:a,alt:s,style:{width:"100px",height:"100px"}}),Object(g.jsx)("div",{children:i})]})};var q=function(){return Object(g.jsx)(T,{children:function(e){for(var t=e.skills,s=[],a=0;a<t.length/4;a++){var c=t.slice(4*a,4*(a+1));s.push(Object(g.jsx)("div",{className:"d-flex justify-content-around py-3",children:c.map((function(e){return Object(g.jsx)(F,{skill:e},Object(u.a)())}))},Object(u.a)()))}return Object(g.jsx)("div",{className:"bg-light w-100",children:Object(g.jsxs)("div",{className:"container text-center py-5",children:[Object(g.jsxs)("h1",{className:"font-weight-light",children:[Object(g.jsx)("span",{className:"text-info",children:"Technology"})," Stack"]}),Object(g.jsx)("div",{className:"lead pb-5",children:"I Excel In These Technologies."}),s]})})}})},L=s(153);var E=function(e){var t=Object(a.useState)(!1),s=Object(w.a)(t,2),c=s[0],n=s[1],i=e.recommendation,r=i.name,o=i.company,l=i.designation,d=i.message,m=d;return m.length>=35&&(m=d.slice(0,30)+"...."),Object(g.jsxs)("div",{className:"col-12 col-md-4",onClick:function(){return n(!0)},style:{cursor:"pointer"},children:[Object(g.jsx)("div",{className:"card shadow h-100",children:Object(g.jsxs)("div",{className:"card-body",children:[Object(g.jsx)("h4",{className:"card-text",children:m}),Object(g.jsx)("p",{className:"card-text text-secondary mb-0",children:r}),Object(g.jsxs)("p",{className:"card-text text-secondary",children:[l," At ",o]})]})}),Object(g.jsxs)(L.a,{show:c,onHide:function(){return n(!1)},children:[Object(g.jsx)(L.a.Header,{children:Object(g.jsx)(L.a.Title,{children:d})}),Object(g.jsx)(L.a.Body,{className:"text-center pb-0",children:r}),Object(g.jsxs)(L.a.Body,{className:"text-center pt-0",children:[l," At ",o]}),Object(g.jsx)(L.a.Footer,{children:"Press Esc Key To Close"})]})]})};var H=function(){return Object(g.jsx)(T,{children:function(e){var t=e.recommendations;return Object(g.jsx)("div",{className:"container-fluid my-5",children:Object(g.jsx)("div",{className:"row text-center py-5 d-flex flex-nowrap overflow-auto scrollbar",children:t.map((function(e){return Object(g.jsx)(E,{recommendation:e},Object(u.a)())}))})})}})},J=s.p+"static/media/jithin.d1d9e161.jpg";var R=function(){return Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{className:"row text-center align-items-center my-5 py-5",children:[Object(g.jsx)("div",{className:"col-12 col-md-6",children:Object(g.jsx)("img",{className:"img-fluid rounded-circle w-75",src:J,alt:"Jithin Mathew"})}),Object(g.jsxs)("div",{className:"col-12 col-md-6 pt-5",children:[Object(g.jsxs)("div",{className:"font-weight-light",style:{fontSize:"50px"},children:["Hi, I Am ",Object(g.jsx)("span",{className:"text-info",children:"Jithin Mathew"})]}),Object(g.jsx)("h4",{className:"font-weight-light",children:"I Am A Student From India."})]})]})})};var _=function(){return Object(g.jsx)("div",{className:"bg-light w-100 py-5",children:Object(g.jsxs)("div",{className:"container text-center",children:[Object(g.jsxs)("h1",{className:"font-weight-light pt-5",children:[Object(g.jsx)("span",{className:"text-info",children:"About"})," Me"]}),Object(g.jsx)("div",{className:"lead",children:"I Am A Front And Back End Developer"}),Object(g.jsxs)("div",{className:"row",children:[Object(g.jsxs)("div",{className:"col-12 col-md-6 pt-5",children:[Object(g.jsx)("h5",{className:"text-dark",children:"What I Can Do ?"}),Object(g.jsx)("p",{className:"text-justify",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"})]}),Object(g.jsxs)("div",{className:"col-12 col-md-6 pt-5",children:[Object(g.jsx)("h5",{className:"text-dark",children:"What Am I Doing Currently ?"}),Object(g.jsx)("p",{className:"text-justify",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"})]})]}),Object(g.jsxs)("div",{className:"row",children:[Object(g.jsxs)("div",{className:"col-12 col-md-6 pt-5",children:[Object(g.jsx)("h5",{className:"text-dark",children:"What Do I Believe In ? ?"}),Object(g.jsx)("p",{className:"text-justify",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"})]}),Object(g.jsxs)("div",{className:"col-12 col-md-6 pt-5",children:[Object(g.jsx)("h5",{className:"text-dark",children:"How Can I Help You ?"}),Object(g.jsx)("p",{className:"text-justify",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"})]})]})]})})};var W=function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(R,{name:"Jithin Mathew",leadText:"I am a student developer"}),Object(g.jsx)(H,{}),Object(g.jsx)(q,{}),Object(g.jsx)(P,{}),Object(g.jsx)(_,{}),Object(g.jsx)(I,{})]})},Y=s(24),G=function(e){Object(b.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(m.a)(this,s);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={imageUrl:"",title:"",body:""},e}return Object(j.a)(s,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("http://127.0.0.1:9000/api/project?id=".concat(this.props.match.params.id));case 2:t=e.sent,t.data.isSuccessful&&this.setState({imageUrl:t.data.result.imageUrl,title:t.data.result.title,body:t.data.result.body});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.imageUrl,s=e.title,a=e.body;return Object(g.jsxs)("div",{className:"container py-5 my-5 markdown",children:[Object(g.jsx)("div",{className:"justify-content-center",children:Object(g.jsx)("img",{src:t,alt:s,className:"w-100"})}),Object(g.jsx)("h1",{className:"font-weight-light text-center my-5",children:s}),Object(g.jsx)(Y.a,{source:a})]})}}]),s}(a.Component),$=G;var z=function(){return Object(g.jsxs)("div",{className:"container text-center py-5 my-5",children:[Object(g.jsxs)("div",{className:"display-4 pt-5 mt-5",children:[Object(g.jsx)("span",{className:"text-danger",children:"Oops!"})," It's a 404"]}),Object(g.jsx)("div",{className:"lead",children:"Sorry, couldn't find what you are looking for..."})]})};var K=function(e){return Object(g.jsx)(T,{children:function(t){var s=t.blogs,a=e.match.params.id,c=s.filter((function(e){return e.id===a}))[0],n=c.imageUrl,i=c.title,r=c.body;return Object(g.jsxs)("div",{className:"container py-5 my-5 markdown",children:[Object(g.jsx)("div",{className:"justify-content-center",children:Object(g.jsx)("img",{src:n,alt:i,className:"w-100"})}),Object(g.jsx)("h1",{className:"font-weight-light text-center my-5",children:i}),Object(g.jsx)(Y.a,{source:r})]})}})},Q=s(37),V=s.n(Q),X=(s(53),function(e){Object(b.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(m.a)(this,s);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={imageUrl:"",title:"",excerpt:"",body:"",submitMessage:"",submitMessageTextColor:""},e.onChange=function(t){e.setState(Object(d.a)({},t.target.name,t.target.value))},e.onBodyChange=function(t){e.setState({body:t})},e.onSubmit=function(){var t=Object(l.a)(o.a.mark((function t(s,a){var c,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),c={id:Object(u.a)(),imageUrl:e.state.imageUrl,title:e.state.title,excerpt:e.state.excerpt,body:e.state.body},t.next=4,p.a.post("http://127.0.0.1:9000/api/project",c);case 4:n=t.sent,n.data.isSuccessful?e.setState({submitMessage:"Project published successfully",submitMessageTextColor:"text-info"}):e.setState({submitMessage:"Publish failed :(",submitMessageTextColor:"text-danger"}),s("ADD_PROJECT",c);case 8:case"end":return t.stop()}}),t)})));return function(e,s){return t.apply(this,arguments)}}(),e}return Object(j.a)(s,[{key:"render",value:function(){var e=this;return Object(g.jsx)(T,{children:function(t){var s=e.state,a=s.imageUrl,c=s.title,n=s.body,i=s.submitMessage,r=s.submitMessageTextColor,o=t.handler;return Object(g.jsxs)("div",{className:"container-fluid my-5 py-5",children:[Object(g.jsxs)("h1",{className:"text-center my-5 font-weight-light",children:["Add ",Object(g.jsx)("span",{className:"text-info",children:"Project"})]}),Object(g.jsxs)("div",{className:"row px-3 px-lg-5",children:[Object(g.jsxs)("div",{className:"col-12 col-lg-6 px-lg-5",children:[Object(g.jsxs)("form",{onSubmit:e.onSubmit.bind(e,o),children:[Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"imageUrl",children:"Featured Image Url *"}),Object(g.jsx)("input",{type:"text",name:"imageUrl",id:"imageUrl",className:"form-control",onChange:e.onChange,required:!0})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"title",children:"Title *"}),Object(g.jsx)("input",{type:"text",name:"title",id:"title",className:"form-control",onChange:e.onChange,required:!0})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"excerpt",children:"Excerpt *"}),Object(g.jsx)("input",{type:"text",name:"excerpt",id:"excerpt",className:"form-control",onChange:e.onChange,required:!0})]}),Object(g.jsx)(V.a,{onChange:e.onBodyChange,options:{hideIcons:["preview","side-by-side","fullscreen"]}}),Object(g.jsx)("button",{type:"submit",className:"btn btn-dark btn-block my-5",style:{backgroundColor:"black"},children:"Publish"})]}),Object(g.jsx)("div",{className:"text-center",children:Object(g.jsx)("h5",{className:r,children:i})})]}),Object(g.jsxs)("div",{className:"col-12 col-lg-6 markdown",children:[Object(g.jsx)("div",{className:"justify-content-center",children:Object(g.jsx)("img",{src:a,alt:c})}),Object(g.jsx)("h1",{className:"font-weight-light text-center my-5",children:c}),Object(g.jsx)(Y.a,{source:n})]})]})]})}})}}]),s}(a.Component)),Z=X,ee=function(e){Object(b.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(m.a)(this,s);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={imageUrl:"",title:"",excerpt:"",body:"",submitMessage:"",submitMessageTextColor:""},e.onChange=function(t){e.setState(Object(d.a)({},t.target.name,t.target.value))},e.onBodyChange=function(t){e.setState({body:t})},e.onSubmit=function(){var t=Object(l.a)(o.a.mark((function t(s,a){var c,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),c={id:Object(u.a)(),imageUrl:e.state.imageUrl,title:e.state.title,excerpt:e.state.excerpt,body:e.state.body},t.next=4,p.a.post("http://127.0.0.1:9000/api/blog",c);case 4:n=t.sent,n.data.isSuccessful?e.setState({submitMessage:"Blog published successfully",submitMessageTextColor:"text-info"}):e.setState({submitMessage:"Publish failed :(",submitMessageTextColor:"text-danger"}),s("ADD_BLOG",c);case 8:case"end":return t.stop()}}),t)})));return function(e,s){return t.apply(this,arguments)}}(),e}return Object(j.a)(s,[{key:"render",value:function(){var e=this;return Object(g.jsx)(T,{children:function(t){var s=e.state,a=s.imageUrl,c=s.title,n=s.body,i=s.submitMessage,r=s.submitMessageTextColor,o=t.handler;return Object(g.jsxs)("div",{className:"container-fluid my-5 py-5",children:[Object(g.jsxs)("h1",{className:"text-center my-5 font-weight-light",children:["Add ",Object(g.jsx)("span",{className:"text-info",children:"Blog"})]}),Object(g.jsxs)("div",{className:"row px-3 px-lg-5",children:[Object(g.jsxs)("div",{className:"col-12 col-lg-6 px-lg-5",children:[Object(g.jsxs)("form",{onSubmit:e.onSubmit.bind(e,o),children:[Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"imageUrl",children:"Featured Image Url *"}),Object(g.jsx)("input",{type:"text",name:"imageUrl",id:"imageUrl",className:"form-control",onChange:e.onChange,required:!0})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"title",children:"Title *"}),Object(g.jsx)("input",{type:"text",name:"title",id:"title",className:"form-control",onChange:e.onChange,required:!0})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"excerpt",children:"Excerpt *"}),Object(g.jsx)("input",{type:"text",name:"excerpt",id:"excerpt",className:"form-control",onChange:e.onChange,required:!0})]}),Object(g.jsx)(V.a,{onChange:e.onBodyChange,options:{hideIcons:["preview","side-by-side","fullscreen"]}}),Object(g.jsx)("button",{type:"submit",className:"btn btn-dark btn-block my-5",style:{backgroundColor:"black"},children:"Publish"})]}),Object(g.jsx)("div",{className:"text-center",children:Object(g.jsx)("h5",{className:r,children:i})})]}),Object(g.jsxs)("div",{className:"col-12 col-lg-6 markdown",children:[Object(g.jsx)("div",{className:"justify-content-center",children:Object(g.jsx)("img",{src:a,alt:c})}),Object(g.jsx)("h1",{className:"font-weight-light text-center my-5",children:c}),Object(g.jsx)(Y.a,{source:n})]})]})]})}})}}]),s}(a.Component),te=ee;var se=function(){return Object(g.jsx)(T,{children:function(e){var t=e.projects;return Object(g.jsxs)("div",{className:"container text-center my-5 py-5",children:[Object(g.jsxs)("h1",{className:"font-weight-light py-5",children:["All My",Object(g.jsx)("span",{className:"text-info",children:" Projects"})]}),Object(g.jsx)("div",{className:"row my-4 pt-4",children:t.map((function(e){return Object(g.jsx)("div",{className:"col-12 col-md-6 py-3",children:Object(g.jsx)(B,{project:e})},e.id)}))})]})}})};var ae=function(){return Object(g.jsx)(T,{children:function(e){var t=e.blogs;return Object(g.jsxs)("div",{className:"container text-center my-5 py-5",children:[Object(g.jsxs)("h1",{className:"font-weight-light py-5",children:["All My",Object(g.jsx)("span",{className:"text-info",children:" Blogs"})]}),Object(g.jsx)("div",{className:"row my-4 pt-4",children:t.map((function(e){return Object(g.jsx)("div",{className:"col-12 col-md-6 py-3",children:Object(g.jsx)(D,{blog:e})},e.id)}))})]})}})};var ce=function(){var e=Object(A.e)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},ne=function(e){Object(b.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(m.a)(this,s);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).onClick=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("http://127.0.0.1:5000/");case 2:e.sent;case 3:case"end":return e.stop()}}),e)}))),e}return Object(j.a)(s,[{key:"render",value:function(){return Object(g.jsx)("div",{className:"py-5 my-5",children:Object(g.jsx)("button",{className:"btn btn-dark btn-lg",onClick:this.onClick,children:"Click Me"})})}}]),s}(a.Component),ie=ne;var re=function(){return Object(g.jsx)(M,{children:Object(g.jsxs)(v.a,{children:[Object(g.jsx)(ce,{}),Object(g.jsx)(N,{}),Object(g.jsxs)(A.c,{children:[Object(g.jsx)(A.a,{path:"/",element:Object(g.jsx)(W,{})}),Object(g.jsx)(A.a,{path:"/contact",element:Object(g.jsx)(f,{})}),Object(g.jsx)(A.a,{path:"/write-recommendation",element:Object(g.jsx)(U,{})}),Object(g.jsx)(A.a,{path:"/all-projects",element:Object(g.jsx)(se,{})}),Object(g.jsx)(A.a,{path:"/all-blogs",element:Object(g.jsx)(ae,{})}),Object(g.jsx)(A.a,{path:"/project/add",element:Object(g.jsx)(Z,{})}),Object(g.jsx)(A.a,{path:"/blog/add",element:Object(g.jsx)(te,{})}),Object(g.jsx)(A.a,{path:"/project/:id",element:Object(g.jsx)($,{})}),Object(g.jsx)(A.a,{path:"/blog/:id",element:Object(g.jsx)(K,{})}),Object(g.jsx)(A.a,{path:"/test",element:Object(g.jsx)(ie,{})}),Object(g.jsx)(A.a,{path:"*",element:Object(g.jsx)(z,{})})]}),Object(g.jsx)(y,{})]})})},oe=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,155)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),a(e),c(e),n(e),i(e)}))};s(121),s(122);i.a.render(Object(g.jsx)(re,{}),document.getElementById("root")),oe()},73:function(e,t,s){}},[[145,1,2]]]);
//# sourceMappingURL=main.ae90e412.chunk.js.map