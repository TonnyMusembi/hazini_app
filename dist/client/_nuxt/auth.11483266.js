import{f as c,s as p,b as t,h as e,U as d,u as n,e as m,o as s}from"./entry.d9247041.js";import{u as r}from"./login.c95085de.js";const _=""+new URL("beams-cover_95.1c729e80.jpeg",import.meta.url).href,h=""+new URL("hazini-logo-landscape.1555fc92.svg",import.meta.url).href,f={class:"bg-img-1 relative flex flex-1 bg-img-1 flex-col overflow-hidden py-8 px-4 sm:px-6 lg:px-8"},u=m('<img src="'+_+'" alt="" class="absolute top-0 inset-0 left-1/2 -ml-[47.5rem] w-[122.5rem] max-w-none"><div class="absolute inset-0 text-slate-900/[0.07] [mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)]"><svg class="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid-bg" width="32" height="32" patternUnits="userSpaceOnUse" x="100%" patternTransform="translate(0 -1)"><path d="M0 32V.5H32" fill="none" stroke="currentColor"></path></pattern></defs><rect width="100%" height="100%" fill="url(#grid-bg)"></rect></svg></div>',2),g={class:"relative flex flex-1 flex-col items-center justify-center pt-12 pb-16"},x=e("div",{class:"pb-8"},[e("div",{class:"flex space-x-2"},[e("img",{src:h})])],-1),v=e("h1",{class:"sr-only"},"Log in to your hazini UI account",-1),y={class:"relative shrink-0 mt-6"},w={class:"text-center sm:text-left"},b={key:0},k={key:1},R={class:"cursor-pointer inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 text-slate-900 ring-1 ring-slate-900/10 hover:ring-slate-900/20"},T={key:0},E={key:1},S=e("span",{"aria-hidden":"true"},"→",-1),V=c({__name:"auth",setup(I){const{setViewToDisplay:a}=r(),{viewToDisplay:o}=p(r()),i=()=>o.value==="LOGIN"?a("REGISTER"):a("LOGIN");return(l,L)=>(s(),t("main",f,[u,e("div",g,[x,v,d(l.$slots,"default"),e("footer",y,[e("div",{onClick:i,class:"space-y-4 text-sm text-gray-900 sm:flex sm:items-center sm:justify-center sm:space-y-0 sm:space-x-4"},[e("p",w,[n(o)==="REGISTER"?(s(),t("span",b,"Already registered?")):(s(),t("span",k,"Don't have an account?"))]),e("div",R,[e("span",null,[n(o)==="REGISTER"?(s(),t("span",T,"Login")):(s(),t("span",E,"Register")),S])])])])])]))}});export{V as default};