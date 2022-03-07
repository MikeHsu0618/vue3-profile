import{r as b,o as c,c as $,a as v,b as k,d as a,e,n as u,F as f,f as S,u as h,g as m,t as y,h as C,i as p,j as l,k as w,l as L,m as T}from"./vendor.a1d02da8.js";const M=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const t of i)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function o(i){const t={};return i.integrity&&(t.integrity=i.integrity),i.referrerpolicy&&(t.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?t.credentials="include":i.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(i){if(i.ep)return;i.ep=!0;const t=o(i);fetch(i.href,t)}};M();var _=(n,s)=>{const o=n.__vccOpts||n;for(const[r,i]of s)o[r]=i;return o};const E={};function B(n,s){const o=b("router-view");return c(),$(o)}var I=_(E,[["render",B]]);const P={class:"l-header",id:"header"},H={class:"nav bd-container"},O=e("a",{href:"#",class:"nav__logo"},"Mike Hsu",-1),A={class:"nav__list"},F={class:"nav__item"},N=["href"],R=e("i",{class:"bx bx-grid-alt"},null,-1),V=[R],D={setup(n){const s=v(!1),o=k([{id:"#home",icon:"bx-home",title:"Home",active:!1},{id:"#profile",icon:"bx-user",title:"Profile",active:!1},{id:"#education",icon:"bx-book",title:"Education",active:!1},{id:"#skills",icon:"bx-receipt",title:"Skills",active:!1},{id:"#experience",icon:"bx-briefcase-alt",title:"Experience",active:!1},{id:"#certificates",icon:"bx-award",title:"Certificates",active:!1},{id:"#references",icon:"bx-link-external",title:"References",active:!1}]);return(r,i)=>(c(),a("header",P,[e("nav",H,[O,e("div",{class:u(["nav__menu",{"show-menu":s.value}]),id:"nav-menu"},[e("ul",A,[(c(!0),a(f,null,S(h(o),t=>(c(),a("li",F,[e("a",{href:t.id,class:u(["nav__link",{"active-link":t.active}])},[e("i",{class:u(["bx",t.icon,"nav__icon"])},null,2),m(" "+y(t.title),1)],10,N)]))),256))])],2),e("div",{onClick:i[0]||(i[0]=t=>s.value=!s.value),class:"nav__toggle",id:"nav-toggle"},V)])]))}};var q="/vue3-profile/assets/perfil.3d2ebac9.png";function U(){const n=v(localStorage.selected_theme==="light");return{initTheme:()=>{localStorage.selected_theme=localStorage.selected_theme||"light",document.body.classList[localStorage.selected_theme==="light"?"remove":"add"]("dark-theme")},changeTheme:()=>{document.body.classList[localStorage.selected_theme==="light"?"add":"remove"]("dark-theme"),localStorage.selected_theme=localStorage.selected_theme==="light"?"dark":"light",n.value=localStorage.selected_theme==="light"},isLight:n}}const W={class:"home",id:"home"},z={class:"home__container section bd-grid"},G=e("div",{class:"home__data bd-grid"},[e("img",{style:{background:"#8080808a"},src:q,alt:"",class:"home__img"}),e("h1",{class:"home__title"},[m("MIKE "),e("b",null,"HSU")]),e("h3",{class:"home__profession"},"Backend developer")],-1),K={class:"home__address bd-grid"},j=p('<span class="home__information"><i class="bx bx-map home__icon"></i> Taipei, Taiwan </span><span class="home__information"><i class="bx bx-envelope home__icon"></i> a3698521tw11@gmail.com </span><span class="home__information"><i class="bx bx-phone home__icon"></i> 0975-656-637 </span>',3),J=e("i",{class:"bx bxl-github home__icon"},null,-1),Q=m(" MikeHsu0618 "),X=[J,Q],Y={setup(n){const{isLight:s,initTheme:o,changeTheme:r}=U(),i=t=>window.open(t);return C(()=>o()),(t,d)=>(c(),a("section",W,[e("div",z,[G,e("div",K,[j,e("span",{onClick:d[0]||(d[0]=g=>i("https://github.com/MikeHsu0618")),style:{cursor:"pointer"},class:"home__information"},X)])]),e("i",{onClick:d[1]||(d[1]=(...g)=>h(r)&&h(r)(...g)),class:u(["bx","bx-moon","change-theme",{"bx-sun":h(s)}]),title:"Theme",id:"theme-button"},null,2)]))}},Z={},ee={class:"social section"},se=p('<h2 class="section-title">SOCIAL</h2><div class="social__container bd-grid"><a href="https://www.linkedin.com/in/hung-hsiang-hsu-76072a168/" target="_blank" class="social__link"><i class="bx bxl-linkedin-square social__icon"></i> @linkedin </a><a href="https://www.facebook.com/" target="_blank" class="social__link"><i class="bx bxl-facebook social__icon"></i> @MikeHsu </a><a href="https://www.instagram.com/" target="_blank" class="social__link"><i class="bx bxl-instagram social__icon"></i> @hsu0618 </a></div>',2),ie=[se];function te(n,s){return c(),a("section",ee,ie)}var ne=_(Z,[["render",te]]);const ce={},ae={class:"profile section",id:"profile"},oe=e("h2",{class:"section-title"},"Profile",-1),le=e("p",{class:"profile__description"}," \u7528\u4E86\u5F88\u9577\u4E00\u6BB5\u6642\u9593\u5C0B\u627E\u81EA\u5DF1\u7684\u771F\u6B63\u60F3\u8981\u7684\u65B9\u5411, \u4E5F\u7528\u4E86\u5F88\u9577\u4E00\u6BB5\u6642\u9593\u4E0D\u9593\u65B7\u5730\u5F9E\u96F6\u7E7C\u7E8C\u524D\u9032\u8457\u3002 ",-1),_e=e("br",null,null,-1),re=e("p",{class:"profile__description"}," \u6CB9\u7BB1\u9084\u662F\u6EFF\u7684, \u60F3\u8B8A\u5F97\u66F4\u5F37\u3002 ",-1),de=[oe,le,_e,re];function pe(n,s){return c(),a("section",ae,de)}var ue=_(ce,[["render",pe]]);const he={},me={class:"skills section",id:"skills"},ge=p('<h2 class="section-title">Languages</h2><div class="skills__content bd-grid"><ul class="skills__data"><li class="skills__name"><span class="skills__circle"></span> Chinese </li></ul><ul class="skills__data"><li class="skills__name"><span class="skills__circle"></span> English </li></ul></div>',2),ve=[ge];function fe(n,s){return c(),a("section",me,ve)}var xe=_(he,[["render",fe]]);const be={},$e={class:"education section",id:"education"},ke=p('<h2 class="section-title">Education</h2><div class="education__container bd-grid"><div class="education__content"><div class="education__time"><span class="education__rounder"></span><span class="education__line"></span></div><div class="education__data bd-grid"><h3 class="education__title">Southwest Minnesota State University</h3><span class="education__studies">MBA</span><span class="education__year">2017 - 2018</span></div></div><div class="education__content"><div class="education__time"><span class="education__rounder"></span></div><div class="education__data bd-grid"><h3 class="education__title">Ming Chang University</h3><span class="education__studies">Insurance and Risk Management</span><span class="education__year">2013 - 2017</span></div></div></div>',2),Se=[ke];function ye(n,s){return c(),a("section",$e,Se)}var Ce=_(be,[["render",ye]]);const we={},Le={class:"experience section",id:"experience"},Te=p('<h2 class="section-title">Experience</h2><div class="experience__container bd-grid"><div class="experience__content"><div class="experience__time"><span class="experience__rounder"></span><span class="experience__line"></span></div><div class="experience__data bd-grid"><h3 class="experience__title">25sprout(SurveyCake)</h3><span class="experience__company">Backend Developer | From 2021/5 to Current</span><p class="experience__description"> \u65BC\u5C08\u6848\u90E8\u9580\u898F\u6A21\u6700\u5927\u7684\u591A\u8A9E\u7CFB\u5C08\u6848 - \u6377\u5B89\u7279\u5168\u7403\u54C1\u724C\u5B98\u7DB2 </p><p class="experience__description">\u8CA0\u8CAC\u8A72\u5C08\u6848\u7684\u91D1\u6D41\u4E32\u63A5, \u8CC7\u6599\u5EAB\u898F\u5283, \u8A02\u55AE\u7CFB\u7D71, \u5EAB\u5B58\u7CFB\u7D71... \u7B49\u61C9\u7528\u958B\u767C\u3002</p><p class="experience__description">- \u6E2C\u8A66\u64B0\u5BEB, \u5C07\u6E2C\u8A66\u8986\u84CB\u7387\u5F9E 20% \u63D0\u9AD8\u81F3 40%</p><p class="experience__description">- AWS \u61C9\u7528 (SNS, EC2, S3...)</p><p class="experience__description">- Cache (Redis)</p><p class="experience__description">- \u5354\u52A9 CI \u6D41\u7A0B with devOps</p><p class="experience__description">- \u8DE8\u90E8\u9580\u6E9D\u901A\u5354\u8ABF (Frontend, Pm, Customer)</p></div></div><div class="experience__content"><div class="experience__time"><span class="experience__rounder"></span></div><div class="experience__data bd-grid"><h3 class="experience__title">SmartBeB</h3><span class="experience__company">Fullstack Developer | From 2020/11 to 2021/5 </span><p class="experience__description"> SmartBeB \u63D0\u4F9B\u4E86\u4E00\u5957\u5E02\u9762\u4E0A\u7368\u6709\u7684\u9AD8\u6548\u7C21\u6F54\u7684\u5F71\u50CF\u6587\u5B57\u8FA8\u8B58\u4FDD\u55AE\u8CC7\u8A0A\u67E5\u8A62\u670D\u52D9, \u5C0F\u5F1F\u65BC\u516C\u53F8\u8CA0\u8CAC\u65BC\u5C0D\u63A5\u6587\u5B57\u8FA8\u8B58\u670D\u52D9\u5546\u4EE5\u53CA\u4FDD\u55AE\u8CC7\u6599\u670D\u52D9\u5546\u4E4B\u5354\u4F5C\u958B\u767C, \u4EE5\u53CA\u7DAD\u8B77\u73FE\u6709\u670D\u52D9\u4E4B\u524D\u5F8C\u7AEF\u3002 </p><p class="experience__description"> \u7576\u670D\u52D9\u4E0A\u7DDA\u6642\u9593\u589E\u9577, \u96A8\u4E4B\u800C\u4F86\u7684\u662F\u65E5\u76CA\u660E\u986F\u7684\u6548\u80FD\u74F6\u9838, \u65BC\u662F \u5728\u8077\u671F\u9593\u5C0D\u8CC7\u6599\u5EAB\u4E00\u7CFB\u5217\u76F8\u95DC\u512A\u5316, \u4F7F\u5176\u6BCF\u7B46\u67E5\u8A62\u6548\u7387\u63D0\u5347\u6578\u500D, \u6BCF\u7B46\u65B0\u589E\u8CC7\u6599\u91CF \u7E2E\u6E1B\u81F3\u4E09\u5206\u4E4B\u4E00\u3002 </p><p class="experience__description">- \u5FB9\u5E95\u4E86\u89E3\u5546\u696D\u908F\u8F2F, \u512A\u5316 query</p><p class="experience__description">- \u91CD\u65B0\u8A2D\u8A08\u8CC7\u6599\u8868\u7D50\u69CB(\u6B04\u4F4D\u8A2D\u8A08, \u62C6\u8868)</p><p class="experience__description">- \u5C0D\u95DC\u9375\u67E5\u8A62\u6B04\u4F4D\u4F7F\u7528\u806F\u5408\u7D22\u5F15</p><p class="experience__description">- \u7D22\u5F15\u512A\u5316 (Optimize Table)</p><p class="experience__description">- \u91CD\u65B0\u8A2D\u8A08 Log \u7CFB\u7D71</p><p class="experience__description">- \u524D\u7AEF\u5DE5\u5177\u9801\u9762\u958B\u767C (Vue)</p></div></div></div>',2),Me=[Te];function Ee(n,s){return c(),a("section",Le,Me)}var Be=_(we,[["render",Ee]]);const Ie={},Pe={class:"certificate section",id:"certificates"},He=p('<h2 class="section-title">Certificates</h2><div class="certificate__container bd-grid"><div class="certificate__content"><h3 class="certificate__title">Certified for AWS Certified Cloud Practitioner (2022)</h3><p class="certificate__description">This credential helps organizations identify and develop talent with critical knowledge related to implementing cloud initiatives.</p></div><div class="certificate__content"><h3 class="certificate__title">Certified for ETC TOEIC : 840.</h3><p class="">Have decent reading and communication skills .</p></div></div>',2),Oe=[He];function Ae(n,s){return c(),a("section",Pe,Oe)}var Fe=_(Ie,[["render",Ae]]);const Ne={},Re={class:"languages section"},Ve=p('<h2 class="section-title">SKILLS</h2><div class="languages__container"><ul class="languages__content bd-grid"><li class="languages__name"><span class="languages__circle"></span>Golang (Gin) </li><li class="languages__name"><span class="languages__circle"></span>PHP (Laravel) </li><li class="languages__name"><span class="languages__circle"></span>JavaScript (Vue) </li><li class="languages__name"><span class="languages__circle"></span>Docker </li><li class="languages__name"><span class="languages__circle"></span>Git CI/CD </li><li class="languages__name"><span class="languages__circle"></span>AWS </li><li class="languages__name"><span class="languages__circle"></span>Postgres </li><li class="languages__name"><span class="languages__circle"></span>Mysql </li><li class="languages__name"><span class="languages__circle"></span>Redis </li></ul></div>',2),De=[Ve];function qe(n,s){return c(),a("section",Re,De)}var Ue=_(Ne,[["render",qe]]);const We={},ze={class:"interests section"},Ge=p('<h2 class="section-title">Interests</h2><div class="interests__container bd-grid"><div class="interests__content"><i class="bx bx-headphone interests__icon"></i><span class="interests__name">Music</span></div><div class="interests__content"><i class="bx bxs-plane-alt interests__icon"></i><span class="interests__name">Travel</span></div><div class="interests__content"><i class="bx bxs-book interests__icon"></i><span class="interests__name">Read</span></div><div class="interests__content"><i class="bx bx-dumbbell interests__icon"></i><span class="interests__name">Fitness</span></div></div>',2),Ke=[Ge];function je(n,s){return c(),a("section",ze,Ke)}var Je=_(We,[["render",je]]);const Qe={},Xe={href:"#",class:"scrolltop",id:"scroll-top"},Ye=e("i",{class:"bx bx-up-arrow-alt scrolltop__icon"},null,-1),Ze=[Ye];function es(n,s){return c(),a("a",Xe,Ze)}var ss=_(Qe,[["render",es]]);const is={class:"l-main bd-container"},ts={class:"resume",id:"area-cv"},ns={class:"resume__left"},cs={class:"resume__right"},as={setup(n){return(s,o)=>(c(),a(f,null,[l(D),e("main",is,[e("div",ts,[e("div",ns,[l(Y),l(ne),l(ue),l(Ce),l(xe)]),e("div",cs,[l(Be),l(Fe),l(Ue),l(Je)])])]),l(ss)],64))}},os=[{path:"/",name:"profile",component:as}];var ls=w({history:L("/vue3-profile/"),routes:os});const x=T(I);x.use(ls);x.mount("#app");
