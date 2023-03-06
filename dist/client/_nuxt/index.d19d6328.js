import{_ as M}from"./Spin.c43bcd68.js";import{_ as G,a as W}from"./DialogTitle.3caea66f.js";import{i as B,f as N,s as k,r as $,o as h,b as v,h as e,t as d,u as t,y as w,K as S,J as A,E as R,z as re,c as T,x as Q,F as V,D as C,C as y,H as ie,A as ce,B as de,W as Y,a as pe,G as ue}from"./entry.d9247041.js";import{a as j,u as I}from"./login.c95085de.js";import{f as P,g as E}from"./errors.1471274f.js";import{u as D,m as X,_ as Z,a as ee}from"./DialogComponent.vue.4a7fb94b.js";import{_ as _e}from"./PlusButton.fa1895e9.js";import"./use-event-listener.8ae17784.js";const z=B("companies-store",{state:()=>({selectedCompany:null}),actions:{setSelectedCompany(x){console.log(x),this.selectedCompany=x}}}),O=B("update-company-store",{state:()=>({pending:!1,responseOK:!1,nonFieldErrors:"",fieldErrors:null,actionIsToDisable:!1}),actions:{async updateCompany(x,p,r){console.log(r);try{this.pending=!0;let i="",m=null,o=!1;this.responseOK=o;const{data:b}=await j("/api/company/update",{method:"put",body:{body:x,accessToken:p},async onResponse({request:a,response:n,options:s}){n.ok&&(o=!0)},async onResponseError({request:a,response:n,options:s}){var u,_,l;n.status==400&&(m=(u=n._data)==null?void 0:u.data.errors),n.status==401&&(i="Unauthorised"),n.status===403&&(i=(_=n._data)==null?void 0:_.data.error),n.status===404&&(i=(l=n._data)==null?void 0:l.data.error),n.status===500&&(i="Internal Error")}},"$Bsdp9RHvdq");this.pending=!1,this.fieldErrors=m,this.nonFieldErrors=i,this.responseOK=o}catch{this.pending=!1}},setDisableAction(x){this.actionIsToDisable=x}}}),me={class:"text-red-500 mb-6"},fe=["onSubmit"],he={class:"mb-3"},ye=e("label",{for:"name",class:"block text-sm font-semibold leading-6 text-gray-900"},"Name",-1),xe={class:"text-red-500 mb-6 text-sm"},ge={class:"mb-3"},be=e("label",{for:"physical-address",class:"block text-sm font-semibold leading-6 text-gray-900"},"Physical Address",-1),ve={class:"text-red-500 mb-6 text-sm"},ke={class:"mb-3"},Ce=e("label",{for:"number-of-mployees",class:"block text-sm font-semibold leading-6 text-gray-900"},"Number of Employees",-1),we={class:"text-red-500 mb-6 text-sm"},$e={class:"mb-3"},De=e("label",{for:"max-loan-percent",class:"block text-sm font-semibold leading-6 text-gray-900"},"Max percent of loan amount that can be taken as loan",-1),Ee={class:"text-red-500 mb-6 text-sm"},Se={class:"mb-3"},Ue=e("label",{for:"profit-share-percent",class:"block text-sm font-semibold leading-6 text-gray-900"},"Percentage of interest retained by this company",-1),Fe={class:"text-red-500 mb-6 text-sm"},qe={class:"mb-3"},Ae=e("label",{for:"loan-period",class:"block text-sm font-semibold leading-6 text-gray-900"},"Period employees are allowed to request loan",-1),Pe={class:"text-red-500 mb-6 text-sm"},Ne={class:"mb-3"},Te=e("label",{for:"approves-loan",class:"block text-sm font-semibold leading-6 mb-5 text-gray-900"},"Should loans be approved?",-1),Ve={class:"inline-flex relative items-center mr-5 cursor-pointer"},Oe=e("div",{class:"w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"},null,-1),Ke={class:"text-[#2C7075] ml-3"},Le={class:"text-red-500 mb-6 text-sm"},Me={class:"flex justify-end"},Be={type:"submit",class:"inline-flex rounded-lg text-sm font-semibold py-2.5 px-4 text-sky-50 bg-teal-700 hover:text-sky-50/80 hover:bg-teal-600"},Re={key:1},je=N({__name:"UpdateCompany",setup(x){const{updateCompany:p}=O(),{closeUpdateCompanyDialog:r}=D(),{pending:i,nonFieldErrors:m,fieldErrors:o,responseOK:b}=k(O()),{user:a}=k(I()),{selectedCompany:n}=k(z()),s=$(n.value),u=async()=>{const _=a.value.refresh_token;console.log(s.value),await p(s.value,_),b.value&&r()};return $("Add Company"),(_,l)=>{const K=M;return h(),v(V,null,[e("p",me,d(t(m)),1),e("form",{onSubmit:Q(u,["prevent"]),class:"w-full"},[e("div",he,[ye,w(e("input",{type:"text",id:"name","onUpdate:modelValue":l[0]||(l[0]=c=>t(s).name=c),class:A([{"ring-1 ring-red-500 bg-red-50":t(P)(t(o),"Name")},"appearance-none text-slate-900 bg-gray-50 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200"]),required:""},null,2),[[S,t(s).name]]),e("p",xe,d(t(E)(t(o),"Name")),1)]),e("div",ge,[be,w(e("input",{type:"text",id:"physical-address",class:A([{"ring-1 ring-red-500 bg-red-50":t(P)(t(o),"PhysicalAddress")},"appearance-none text-slate-900 bg-gray-50 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 focus:bg-white ring-1 ring-slate-200"]),"aria-required":"","onUpdate:modelValue":l[1]||(l[1]=c=>t(s).physical_address=c)},null,2),[[S,t(s).physical_address]]),e("p",ve,d(t(E)(t(o),"PhysicalAddress")),1)]),e("div",ke,[Ce,w(e("input",{type:"number",id:"number-of-employees",disabled:"",class:A([{"ring-1 ring-red-500 bg-red-50":t(P)(t(o),"NumberOfEmployees")},"appearance-none cursor-not-allowed text-slate-900 bg-gray-50 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 focus:bg-white ring-1 ring-slate-200"]),"aria-required":"",min:"1","onUpdate:modelValue":l[2]||(l[2]=c=>t(s).number_of_employees=c)},null,2),[[S,t(s).number_of_employees]]),e("p",we,d(t(E)(t(o),"NumberOfEmployees")),1)]),e("div",$e,[De,w(e("input",{type:"number",id:"max-loan-percent",step:"0.01",min:"0",class:A([{"ring-1 ring-red-500 bg-red-50":t(P)(t(o),"MaxLoanPercent")},"appearance-none text-slate-900 bg-gray-50 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200"]),required:"","onUpdate:modelValue":l[3]||(l[3]=c=>t(s).max_loan_percent=c)},null,2),[[S,t(s).max_loan_percent]]),e("p",Ee,d(t(E)(t(o),"MaxLoanPercent")),1)]),e("div",Se,[Ue,w(e("input",{type:"number",id:"profit-share-percent",step:"0.01",min:"0",class:A([{"ring-1 ring-red-500 bg-red-50":t(P)(t(o),"ProfitSharePercent")},"appearance-none text-slate-900 bg-gray-50 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 focus:bg-white ring-1 ring-slate-200"]),"aria-required":"","onUpdate:modelValue":l[4]||(l[4]=c=>t(s).profit_share_percent=c)},null,2),[[S,t(s).profit_share_percent]]),e("p",Fe,d(t(E)(t(o),"ProfitSharePercent")),1)]),e("div",qe,[Ae,R(" "+d(t(s).loan_period)+" ",1),w(e("input",{type:"range",id:"loan-period",min:"1",max:"28",class:"text-slate-900 rounded-md block w-full px-3 h-10 sm:text-sm focus:outline-none placeholder:text-slate-400","aria-required":"","onUpdate:modelValue":l[5]||(l[5]=c=>t(s).loan_period=c)},null,512),[[S,t(s).loan_period]]),e("p",Pe,d(t(E)(t(o),"LoanPeriod")),1)]),e("div",Ne,[Te,e("label",Ve,[w(e("input",{type:"checkbox",id:"approves-loan",class:"sr-only peer","onUpdate:modelValue":l[6]||(l[6]=c=>t(s).approves_loan=c),required:""},null,512),[[re,t(s).approves_loan]]),Oe,e("div",Ke,d(t(s).approves_loan),1)]),e("p",Le,d(t(E)(t(o),"ApprovesLoan")),1)]),e("div",Me,[e("button",Be,[t(i)?(h(),T(K,{key:0})):(h(),v("span",Re,"Update Company"))])])],40,fe)],64)}}}),Ie={class:"w-full p-4 space-y-3"},ze=e("p",{class:"text-sm text-gray-600"},null,-1),He=N({__name:"UpdateCompanyDialog",props:{refreshCompanies:{type:Function,required:!0}},setup(x){const{showUpdateCompanyDialog:p}=k(D()),{closeUpdateCompanyDialog:r}=D();return(i,m)=>{const o=G,b=W,a=je,n=Z,s=ee;return h(),T(t(X),{as:"template",show:t(p)},{default:C(()=>[y(s,{closeFunc:t(r)},{default:C(()=>[y(o,null,{default:C(()=>[R("Update Company")]),_:1}),y(b),e("div",Ie,[y(a)]),y(n,null,{default:C(()=>[ze]),_:1})]),_:1},8,["closeFunc"])]),_:1},8,["show"])}}}),J=B("disable-company-store",{state:()=>({pending:!1,responseOK:!1,nonFieldErrors:"",fieldErrors:null}),actions:{async disableCompany(x,p){try{this.pending=!0;let r="",i=null,m=!1;this.responseOK=m;const{data:o}=await j("/api/company/disable",{method:"put",body:{body:x,accessToken:p},async onResponse({request:b,response:a,options:n}){a.ok&&(m=!0)},async onResponseError({request:b,response:a,options:n}){var s,u,_;a.status==400&&(i=(s=a._data)==null?void 0:s.data.errors),a.status==401&&(r="Unauthorised"),a.status===403&&(r=(u=a._data)==null?void 0:u.data.error),a.status===404&&(r=(_=a._data)==null?void 0:_.data.error),a.status===500&&(r="Internal Error")}},"$qzRAnUYHry");this.pending=!1,this.fieldErrors=i,this.nonFieldErrors=r,this.responseOK=m}catch{this.pending=!1}}}}),Ye={class:"mx-auto"},Je=e("p",{class:"text-xl flex justify-center"},"Are you sure!",-1),Ge={class:"flex justify-end"},We={key:1},Qe=N({__name:"DisableCompany",setup(x){const{actionIsToDisable:p}=k(O()),{disableCompany:r}=J(),{closeDisableCompanyDialog:i}=D(),{pending:m,nonFieldErrors:o,fieldErrors:b,responseOK:a}=k(J()),{user:n}=k(I()),{selectedCompany:s}=k(z()),u=$(s.value),_=async()=>{const l=n.value.refresh_token;console.log(u.value),console.log(p.value),p.value?u.value.status=0:u.value.status=1,await r(u.value,l),a.value&&i()};return(l,K)=>{const c=M;return h(),v("div",Ye,[Je,e("div",Ge,[e("button",{onClick:_,class:"inline-flex rounded-lg text-sm font-semibold py-2.5 px-4 text-sky-50 bg-teal-700 hover:text-sky-50/80 hover:bg-teal-600"},[t(m)?(h(),T(c,{key:0})):(h(),v("span",We,"Confirm"))])])])}}}),Xe={class:"w-full p-4 space-y-3"},Ze=e("p",{class:"text-sm text-gray-600"},null,-1),et=N({__name:"DisableCompanyDialog",props:{refreshCompanies:{type:Function,required:!0}},setup(x){const{showDisableCompanyDialog:p}=k(D()),{closeDisableCompanyDialog:r}=D();return(i,m)=>{const o=G,b=W,a=Qe,n=Z,s=ee;return h(),T(t(X),{as:"template",show:t(p)},{default:C(()=>[y(s,{closeFunc:t(r)},{default:C(()=>[y(o,null,{default:C(()=>[R("Update Status")]),_:1}),y(b),e("div",Xe,[y(a)]),y(n,null,{default:C(()=>[Ze]),_:1})]),_:1},8,["closeFunc"])]),_:1},8,["show"])}}}),tt=e("div",{class:"flex justify-start text-xl"}," Companies ",-1),st=e("br",null,null,-1),ot={class:"flex justify-end"},at=["onSubmit"],nt=e("label",{for:"default-search",class:"mb-2 text-sm font-medium text-gray-900 sr-only"},"Search",-1),lt={class:"relative"},rt=e("div",{class:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"},[e("svg",{"aria-hidden":"true",class:"w-5 h-5 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})])],-1),it=e("button",{type:"submit",class:"text-white absolute right-2.5 bottom-2.5 bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-2 py-1"}," Search ",-1),ct=e("br",null,null,-1),dt={key:1,class:"overflow-x-auto h-[35rem] relative shadow-md sm:rounded-lg"},pt={class:"w-full text-sm text-left text-gray-500"},ut=e("thead",{class:"text-xs text-gray-700 bg-gray-200"},[e("tr",{class:"divide-x divide-gray-300"},[e("th",{scope:"col",class:"py-3 px-6"}),e("th",{scope:"col",class:"py-3 px-6"},"Company Name"),e("th",{scope:"col",class:"py-3 px-6"},"Address"),e("th",{scope:"col",class:"py-3 px-6"},"Employees"),e("th",{scope:"col",class:"py-3 px-6"},"Profit Share"),e("th",{scope:"col",class:"py-3 px-6"},"Max.Loan.Percent"),e("th",{scope:"col",class:"py-3 px-6"},"Loan.Period"),e("th",{scope:"col",class:"py-3 px-6"},"Approve.Loans"),e("th",{scope:"col",class:"py-3 px-6"},"Status"),e("th",{scope:"col",class:"py-3 px-6"},"Created.At"),e("th",{scope:"col",class:"py-3 px-6"},"Edit"),e("th",{scope:"col",class:"py-3 px-6"},"Enable/Disable")])],-1),_t={class:"divide-y"},mt={class:"py-4 px-6"},ft={class:"py-4 px-6"},ht={class:"py-4 px-6"},yt={class:"py-4 px-6"},xt={class:"py-4 px-6"},gt={class:"py-4 px-6"},bt={class:"py-4 px-6"},vt={class:"py-4 px-6"},kt={class:"py-4 px-6"},Ct={key:0},wt={key:1},$t={class:"py-4 px-6"},Dt=["onClick"],Et=e("span",{class:"cursor-pointer font-medium text-teal-700 hover:underline"},"Edit",-1),St=[Et],Ut=["onClick"],Ft={class:"inline-flex relative items-center mr-5 cursor-pointer"},qt=["checked"],At=e("div",{class:"w-11 h-6 bg-gray-400 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"},null,-1),Pt={class:"w-1/2"},Nt=N({__name:"TheCompanies",async setup(x){let p,r;$("YYYY-MM-DD h:mm:ss");const{openUpdateCompanyDialog:i}=D(),{openDisableCompanyDialog:m}=D(),{setSelectedCompany:o}=z(),{setDisableAction:b}=O(),{user:a}=k(I()),n=$(10),s=$(1),u=$();$();const{data:_,pending:l,error:K,refresh:c}=([p,r]=ie(()=>j("/api/company/list",{query:{pageSize:n.value,pageID:s.value,accessToken:a.value.refresh_token}},"$4bbEUgJDPt")),p=await p,r(),p);c();function te(g){var U=new Date(g),F=""+(U.getMonth()+1),q=""+U.getDate(),L=U.getFullYear();return F.length<2&&(F="0"+F),q.length<2&&(q="0"+q),[q,F,L].join("-")}const se=g=>{o(g),i()},oe=g=>{o(g),console.log("here"),g.status==1?b(!0):g.status==0&&b(!1),m()},ae=g=>{if(g===1)return!0;if(g===0)return!1},ne=()=>{if(_)return _.value&&(_.value=_.value.filter(g=>g.name.toLowerCase().includes(u.value.toLowerCase()))),_};return(g,U)=>{const F=M,q=He,L=et;return h(),v(V,null,[tt,st,e("div",ot,[e("form",{class:"mb-3 w-1/3",onSubmit:Q(ne,["prevent"])},[nt,e("div",lt,[rt,w(e("input",{type:"search",id:"default-search",class:"block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-teal-700 focus:ring-teal-500 focus:border-0",placeholder:"Search companies..",required:"","onUpdate:modelValue":U[0]||(U[0]=f=>ce(u)?u.value=f:null)},null,512),[[S,t(u)]]),it])],40,at)]),ct,t(l)?(h(),T(F,{key:0,class:"h-20 w-20 text-teal-700"})):(h(),v("div",dt,[e("table",pt,[ut,e("tbody",_t,[(h(!0),v(V,null,de(t(_),(f,H)=>(h(),v("tr",{key:H,class:A([{"bg-gray-50":H%2===1},"bg-white border-b divide-x hover:bg-teal-100 cursor-pointer"])},[e("td",mt,d(f.id),1),e("td",ft,d(f.name),1),e("td",ht,d(f.physical_address),1),e("td",yt,d(f.number_of_employees),1),e("td",xt,d(f.profit_share_percent),1),e("td",gt,d(f.max_loan_percent),1),e("td",bt,d(f.loan_period),1),e("td",vt,d(f.approves_loan),1),e("td",kt,[f.status===0?(h(),v("label",Ct," Not Active ")):Y("",!0),f.status===1?(h(),v("label",wt," Active ")):Y("",!0)]),e("td",$t,d(te(f.created_at)),1),e("td",{onClick:le=>se(f),class:"py-4 px-6"},St,8,Dt),e("td",{class:"py-4 px-6",onClick:le=>oe(f)},[e("label",Ft,[e("input",{type:"checkbox",value:"",class:"sr-only peer",checked:ae(f.status)},null,8,qt),At])],8,Ut)],2))),128))])])])),y(q,{"refresh-companies":t(c)},null,8,["refresh-companies"]),e("div",Pt,[y(L,{"refresh-companies":t(c)},null,8,["refresh-companies"])])],64)}}}),Tt={};function Vt(x,p){const r=Nt,i=_e,m=ue;return h(),v(V,null,[y(r),y(m,{to:"/companies/add"},{default:C(()=>[y(i)]),_:1})],64)}const zt=pe(Tt,[["render",Vt]]);export{zt as default};