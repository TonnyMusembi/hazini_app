import{s as g,r as p,H as b,o as c,b as l,h as s,C as v,D as w,E as k,x as S,F as d,B as C,t,u as D,G as N,e as B,a as T,c as L}from"./entry.d9247041.js";import{u as E,a as F}from"./login.c95085de.js";const I={class:"flex justify-end"},V=s("br",null,null,-1),j={class:"flex justify-end"},z=B('<label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label><div class="relative"><div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div><input type="search" id="default-search" class="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-teal-700 focus:ring-teal-500 focus:border-0" placeholder="Search companies.." required><button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-2 py-1"> Search </button></div>',2),A=[z],M=s("br",null,null,-1),q={class:"overflow-x-auto relative shadow-md sm:rounded-lg"},H={class:"w-full text-sm text-left text-gray-500"},$=s("thead",{class:"text-xs text-gray-700 bg-gray-200"},[s("tr",{class:"divide-x divide-gray-300"},[s("th",{scope:"col",class:"py-3 px-6"}),s("th",{scope:"col",class:"py-3 px-6"},"Name"),s("th",{scope:"col",class:"py-3 px-6"},"Interest"),s("th",{scope:"col",class:"py-3 px-6"},"Max.Pricipal"),s("th",{scope:"col",class:"py-3 px-6"},"Installments"),s("th",{scope:"col",class:"py-3 px-6"},"Transaction Cost"),s("th",{scope:"col",class:"py-3 px-6"},"Company"),s("th",{scope:"col",class:"py-3 px-6"},"Waiver"),s("th",{scope:"col",class:"py-3 px-6"},"Duration"),s("th",{scope:"col",class:"py-3 px-6"},"Status"),s("th",{scope:"col",class:"py-3 px-6"},"Edit"),s("th",{scope:"col",class:"py-3 px-6"},"Disable")])],-1),G={class:"divide-y"},J=s("td",{class:"py-4 px-6"},"1",-1),R={class:"py-4 px-6"},W={class:"py-4 px-6"},K={class:"py-4 px-6"},O={class:"py-4 px-6"},Q={class:"py-4 px-6"},U={class:"py-4 px-6"},X={class:"py-4 px-6"},Y={class:"py-4 px-6"},Z={class:"py-4 px-6"},P=s("td",{class:"py-4 px-6"},[s("a",{href:"#",class:"font-medium text-teal-600 hover:underline"},"Edit")],-1),ss=s("td",{class:"py-4 px-6"},[s("a",{href:"#",class:"font-medium text-teal-600 hover:underline"},"Diactivate")],-1),es={__name:"TheLoanProducts",async setup(_){let o,a;const{user:h}=g(E()),u=p(10),x=p(1),{data:n,pending:as,error:cs,refresh:y}=([o,a]=b(()=>F("/api/loan-products/list",{query:{pageSize:u.value,pageID:x.value,accessToken:h.value.refresh_token}},"$2bePNHFJ25")),o=await o,a(),o);return y(),console.log(n.value),(r,i)=>{const m=N;return c(),l(d,null,[s("div",I,[v(m,{to:"loan-products/add",class:"inline-flex rounded-lg text-sm font-semibold py-1 px-2 text-sky-50 bg-teal-700 hover:text-sky-50/80 hover:bg-teal-600"},{default:w(()=>[k(" Add LoanProduct")]),_:1})]),V,s("div",j,[s("form",{class:"mb-3 w-1/3",onSubmit:i[0]||(i[0]=S((...e)=>r.filterCompanies&&r.filterCompanies(...e),["prevent"]))},A,32)]),M,s("div",q,[s("table",H,[$,s("tbody",G,[(c(!0),l(d,null,C(D(n),(e,f)=>(c(),l("tr",{key:f,class:"bg-white border-b divide-x hover:bg-teal-50 cursor-pointer"},[J,s("td",R,t(e.name),1),s("td",W,t(e.interest),1),s("td",K,t(e.maximum_pricipal),1),s("td",O,t(e.installments),1),s("td",Q,t(e.transaction_cost),1),s("td",U,t(e.company_name),1),s("td",X,t(e.waiver),1),s("td",Y,t(e.duration),1),s("td",Z,t(e.status),1),P,ss]))),128))])])])],64)}}},ts={};function os(_,o){const a=es;return c(),L(a)}const rs=T(ts,[["render",os]]);export{rs as default};