import{r as x,o as c,c as $,a as f,b as k,d as a,e as s,n as u,F as v,f as y,u as h,g,t as S,h as w,i as d,j as l,k as E,l as I,m as T}from"./vendor.a1d02da8.js";const L=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))_(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&_(p)}).observe(document,{childList:!0,subtree:!0});function o(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function _(i){if(i.ep)return;i.ep=!0;const n=o(i);fetch(i.href,n)}};L();var r=(t,e)=>{const o=t.__vccOpts||t;for(const[_,i]of e)o[_]=i;return o};const C={};function F(t,e){const o=x("router-view");return c(),$(o)}var P=r(C,[["render",F]]);const A={class:"l-header",id:"header"},D={class:"nav bd-container"},M=s("a",{href:"#",class:"nav__logo"},"Mike Hsu",-1),R={class:"nav__list"},N={class:"nav__item"},O=["href"],B=s("i",{class:"bx bx-grid-alt"},null,-1),H=[B],U={setup(t){const e=f(!1),o=k([{id:"#home",icon:"bx-home",title:"Home",active:!1},{id:"#profile",icon:"bx-user",title:"Profile",active:!1},{id:"#education",icon:"bx-book",title:"Education",active:!1},{id:"#skills",icon:"bx-receipt",title:"Skills",active:!1},{id:"#experience",icon:"bx-briefcase-alt",title:"Experience",active:!1},{id:"#certificates",icon:"bx-award",title:"Certificates",active:!1},{id:"#references",icon:"bx-link-external",title:"References",active:!1}]);return(_,i)=>(c(),a("header",A,[s("nav",D,[M,s("div",{class:u(["nav__menu",{"show-menu":e.value}]),id:"nav-menu"},[s("ul",R,[(c(!0),a(v,null,y(h(o),n=>(c(),a("li",N,[s("a",{href:n.id,class:u(["nav__link",{"active-link":n.active}])},[s("i",{class:u(["bx",n.icon,"nav__icon"])},null,2),g(" "+S(n.title),1)],10,O)]))),256))])],2),s("div",{onClick:i[0]||(i[0]=n=>e.value=!e.value),class:"nav__toggle",id:"nav-toggle"},H)])]))}};var V="/vue3-profile/assets/perfil.aa0af61a.jpg";function j(){const t=f(localStorage.selected_theme==="light");return{initTheme:()=>{localStorage.selected_theme=localStorage.selected_theme||"light",document.body.classList[localStorage.selected_theme==="light"?"remove":"add"]("dark-theme")},changeTheme:()=>{document.body.classList[localStorage.selected_theme==="light"?"add":"remove"]("dark-theme"),localStorage.selected_theme=localStorage.selected_theme==="light"?"dark":"light",t.value=localStorage.selected_theme==="light"},isLight:t}}function W(){let t={margin:0,filename:"test.pdf",image:{type:"jpeg",quality:.98},html2canvas:{scale:4},jsPDF:{format:"a4",orientation:"portrait"}};const e=()=>document.body.classList.add("scale-cv"),o=()=>document.body.classList.remove("scale-cv");return{downloadProfile:()=>{let i=document.getElementById("area-cv");e(),html2pdf(i,t),setTimeout(o,5e3)}}}const G={class:"home",id:"home"},q={class:"home__container section bd-grid"},K={class:"home__data bd-grid"},X=s("img",{src:V,alt:"",class:"home__img"},null,-1),z=s("h1",{class:"home__title"},[g("MIKE "),s("b",null,"HSU")],-1),J=s("h3",{class:"home__profession"},"Backend developer",-1),Q=d('<div class="home__address bd-grid"><span class="home__information"><i class="bx bx-map home__icon"></i> Taipei, Taiwan </span><span class="home__information"><i class="bx bx-envelope home__icon"></i> a3698521tw11@gmail.com </span><span class="home__information"><i class="bx bx-phone home__icon"></i> 0975-656-637 </span></div>',1),Y=s("i",{class:"bx bx-download generate-pdf",title:"Generate PDF",id:"resume-button"},null,-1),Z={setup(t){const{isLight:e,initTheme:o,changeTheme:_}=j(),{downloadProfile:i}=W();return w(()=>o()),(n,p)=>(c(),a("section",G,[s("div",q,[s("div",K,[X,z,J,s("div",null,[s("a",{onClick:p[0]||(p[0]=m=>h(i)()),download:"",href:"../../../assets/pdf/ResumeCv.pdf",class:"home__button-movil"},"Download Cv")])]),Q]),s("i",{onClick:p[1]||(p[1]=(...m)=>h(_)&&h(_)(...m)),class:u(["bx","bx-moon","change-theme",{"bx-sun":h(e)}]),title:"Theme",id:"theme-button"},null,2),Y]))}},ee={},se={class:"social section"},ie=d('<h2 class="section-title">SOCIAL</h2><div class="social__container bd-grid"><a href="https://www.linkedin.com/" target="_blank" class="social__link"><i class="bx bxl-linkedin-square social__icon"></i> @linkedin </a><a href="https://www.facebook.com/" target="_blank" class="social__link"><i class="bx bxl-facebook social__icon"></i> @MikeHsu </a><a href="https://www.instagram.com/" target="_blank" class="social__link"><i class="bx bxl-instagram social__icon"></i> @hsu0618 </a></div>',2),te=[ie];function ne(t,e){return c(),a("section",se,te)}var ce=r(ee,[["render",ne]]);const ae={},oe={class:"profile section",id:"profile"},le=s("h2",{class:"section-title"},"Profile",-1),re=s("p",{class:"profile__description"},"I am a person, responsible with their work during working hours. Finish various technical and higher studies at large universities. I have several years of experience and achievements in the labor field.",-1),_e=[le,re];function de(t,e){return c(),a("section",oe,_e)}var pe=r(ae,[["render",de]]);const he={},ue={class:"skills section",id:"skills"},me=d('<h2 class="section-title">Skills</h2><div class="skills__content bd-grid"><ul class="skills__data"><li class="skills__name"><span class="skills__circle"></span> Html </li><li class="skills__name"><span class="skills__circle"></span> Css </li><li class="skills__name"><span class="skills__circle"></span> Sass </li><li class="skills__name"><span class="skills__circle"></span> JavaScript </li></ul><ul class="skills__data"><li class="skills__name"><span class="skills__circle"></span> Angular </li><li class="skills__name"><span class="skills__circle"></span> Firebase </li><li class="skills__name"><span class="skills__circle"></span> React </li></ul></div>',2),fe=[me];function ve(t,e){return c(),a("section",ue,fe)}var ge=r(he,[["render",ve]]);const be={},xe={class:"education section",id:"education"},$e=d('<h2 class="section-title">Education</h2><div class="education__container bd-grid"><div class="education__content"><div class="education__time"><span class="education__rounder"></span><span class="education__line"></span></div><div class="education__data bd-grid"><h3 class="education__title">MASTER OF DESIGN</h3><span class="education__studies">University of Studies</span><span class="education__year">2010 - 2015</span></div></div><div class="education__content"><div class="education__time"><span class="education__rounder"></span><span class="education__line"></span></div><div class="education__data bd-grid"><h3 class="education__title">WEB DEVELOPER</h3><span class="education__studies">Institute Studies</span><span class="education__year">2016 - 2019</span></div></div><div class="education__content"><div class="education__time"><span class="education__rounder"></span></div><div class="education__data bd-grid"><h3 class="education__title">MASTER IN UI/UX</h3><span class="education__studies">Institute Studies</span><span class="education__year">2019 - 2021</span></div></div></div>',2),ke=[$e];function ye(t,e){return c(),a("section",xe,ke)}var Se=r(be,[["render",ye]]);const we={},Ee={class:"experience section",id:"experience"},Ie=d('<h2 class="section-title">Experience</h2><div class="experience__container bd-grid"><div class="experience__content"><div class="experience__time"><span class="experience__rounder"></span><span class="experience__line"></span></div><div class="experience__data bd-grid"><h3 class="experience__title">MASTER OF DESIGN</h3><span class="experience__company">From 2013 to 2015 | Tech Soft</span><p class="experience__description">Work in this company dedicating the best responsibility in the area that corresponds, delivering the best results for the company and improving productivity.</p></div></div><div class="experience__content"><div class="experience__time"><span class="experience__rounder"></span><span class="experience__line"></span></div><div class="experience__data bd-grid"><h3 class="experience__title">UI / UX DESIGN AREA</h3><span class="experience__company">From 2017 to 2019 | Adobe Inc</span><p class="experience__description">Work in this company dedicating the best responsibility in the area that corresponds, delivering the best results for the company and improving productivity.</p></div></div><div class="experience__content"><div class="experience__time"><span class="experience__rounder"></span></div><div class="experience__data bd-grid"><h3 class="experience__title">MOBILE APPLICATION DEVELOPER</h3><span class="experience__company">From 2019 to 2021 | App Tech</span><p class="experience__description">Work in this company dedicating the best responsibility in the area that corresponds, delivering the best results for the company and improving productivity.</p></div></div></div>',2),Te=[Ie];function Le(t,e){return c(),a("section",Ee,Te)}var Ce=r(we,[["render",Le]]);const Fe={},Pe={class:"certificate section",id:"certificates"},Ae=d('<h2 class="section-title">Certificates</h2><div class="certificate__container bd-grid"><div class="certificate__content"><h3 class="certificate__title">Certified for compliance in the work area (2012)</h3><p class="certificate__description">For meeting the expectations of leading the team to work the specified tasks in the labor field.</p></div><div class="certificate__content"><h3 class="certificate__title">Certificate of attendance on computer technology.</h3><p class="certificate__description">For meeting the expectations of leading the team to work the specified tasks in the labor field.</p></div><div class="certificate__content"><h3 class="certificate__title">Achievement medal for productivity excellence during the year (2019)</h3><p class="certificate__description">For meeting the expectations of leading the team to work the specified tasks in the labor field.</p></div></div>',2),De=[Ae];function Me(t,e){return c(),a("section",Pe,De)}var Re=r(Fe,[["render",Me]]);const Ne={},Oe={class:"references section",id:"references"},Be=d('<h2 class="section-title">References</h2><div class="references__container bd-grid"><div class="references__content bd-grid"><span class="references__subtitle">Sr. Director</span><h3 class="references__title">Mr. Clay Doe</h3><ul class="references__contact"><li>Phone: 999-888-777</li><li>Email: user@email.com</li></ul></div><div class="references__content bd-grid"><span class="references__subtitle">Mag. Developer</span><h3 class="references__title">Mr. Robbinson Bass</h3><ul class="references__contact"><li>Phone: 999-888-777</li><li>Email: user@email.com</li></ul></div></div>',2),He=[Be];function Ue(t,e){return c(),a("section",Oe,He)}var Ve=r(Ne,[["render",Ue]]);const je={},We={class:"languages section"},Ge=d('<h2 class="section-title">Languages</h2><div class="languages__container"><ul class="languages__content bd-grid"><li class="languages__name"><span class="languages__circle"></span>Spanish </li><li class="languages__name"><span class="languages__circle"></span>English </li><li class="languages__name"><span class="languages__circle"></span>French </li></ul></div>',2),qe=[Ge];function Ke(t,e){return c(),a("section",We,qe)}var Xe=r(je,[["render",Ke]]);const ze={},Je={class:"interests section"},Qe=d('<h2 class="section-title">Interests</h2><div class="interests__container bd-grid"><div class="interests__content"><i class="bx bx-headphone interests__icon"></i><span class="interests__name">Music</span></div><div class="interests__content"><i class="bx bxs-plane-alt interests__icon"></i><span class="interests__name">Travel</span></div><div class="interests__content"><i class="bx bxs-book interests__icon"></i><span class="interests__name">Read</span></div><div class="interests__content"><i class="bx bx-dumbbell interests__icon"></i><span class="interests__name">Fitness</span></div></div>',2),Ye=[Qe];function Ze(t,e){return c(),a("section",Je,Ye)}var es=r(ze,[["render",Ze]]);const ss={},is={href:"#",class:"scrolltop",id:"scroll-top"},ts=s("i",{class:"bx bx-up-arrow-alt scrolltop__icon"},null,-1),ns=[ts];function cs(t,e){return c(),a("a",is,ns)}var as=r(ss,[["render",cs]]);const os={class:"l-main bd-container"},ls={class:"resume",id:"area-cv"},rs={class:"resume__left"},_s={class:"resume__right"},ds={setup(t){return(e,o)=>(c(),a(v,null,[l(U),s("main",os,[s("div",ls,[s("div",rs,[l(Z),l(ce),l(pe),l(Se),l(ge)]),s("div",_s,[l(Ce),l(Re),l(Ve),l(Xe),l(es)])])]),l(as)],64))}},ps=[{path:"/",name:"profile",component:ds}];var hs=E({history:I("/vue3-profile/"),routes:ps});const b=T(P);b.use(hs);b.mount("#app");
