(function(e){function t(t){for(var n,a,r=t[0],i=t[1],o=t[2],b=0,s=[];b<r.length;b++)a=r[b],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&s.push(c[a][0]),c[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);d&&d(t);while(s.length)s.shift()();return u.push.apply(u,o||[]),l()}function l(){for(var e,t=0;t<u.length;t++){for(var l=u[t],n=!0,r=1;r<l.length;r++){var i=l[r];0!==c[i]&&(n=!1)}n&&(u.splice(t--,1),e=a(a.s=l[0]))}return e}var n={},c={app:0},u=[];function a(t){if(n[t])return n[t].exports;var l=n[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,a),l.l=!0,l.exports}a.m=e,a.c=n,a.d=function(e,t,l){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(a.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(l,n,function(t){return e[t]}.bind(null,n));return l},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/badmintoon/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=t,r=r.slice();for(var o=0;o<r.length;o++)t(r[o]);var d=i;u.push([0,"chunk-vendors"]),l()})({0:function(e,t,l){e.exports=l("56d7")},"565d":function(e,t,l){},"56d7":function(e,t,l){"use strict";l.r(t);var n=l("7a23"),c=l("a1e9"),u=l("5c40");const a=e=>(Object(n["i"])("data-v-79fb19ca"),e=e(),Object(n["h"])(),e),r={class:"court"},i=a(()=>Object(n["f"])("div",null,null,-1)),o=a(()=>Object(n["f"])("div",null,null,-1)),d=a(()=>Object(n["f"])("div",null,null,-1)),b=a(()=>Object(n["f"])("div",null,null,-1)),s=a(()=>Object(n["f"])("div",null,null,-1)),f=a(()=>Object(n["f"])("div",null,null,-1)),j=a(()=>Object(n["f"])("div",null,null,-1)),v={class:"flex justify-center items-center text-xl"},O=a(()=>Object(n["f"])("div",null,null,-1)),p=a(()=>Object(n["f"])("div",null,null,-1)),y={class:"flex justify-center items-center text-xl"},g=a(()=>Object(n["f"])("div",null,null,-1)),h=a(()=>Object(n["f"])("div",null,null,-1)),m={class:"flex justify-center items-center text-xl"},x={class:"flex justify-center items-center text-xl"},k=a(()=>Object(n["f"])("div",null,null,-1)),w=a(()=>Object(n["f"])("div",null,null,-1)),C=a(()=>Object(n["f"])("div",null,null,-1)),_=a(()=>Object(n["f"])("div",null,null,-1)),M=a(()=>Object(n["f"])("div",null,null,-1)),P=a(()=>Object(n["f"])("div",null,null,-1)),A=a(()=>Object(n["f"])("div",null,null,-1));var J={__name:"Court",props:{courtData:{type:Object,required:!0}},setup(e){var t,l,c,a;const J=e,S=Object(u["e"])(()=>J.courtData.players),$=S.value.length?null===(t=S.value[0])||void 0===t?void 0:t.name:"",E=S.value.length>1?null===(l=S.value[1])||void 0===l?void 0:l.name:"",R=S.value.length>2?null===(c=S.value[2])||void 0===c?void 0:c.name:"",B=S.value.length>3?null===(a=S.value[3])||void 0===a?void 0:a.name:"";return(e,t)=>(Object(n["g"])(),Object(n["e"])("div",r,[i,o,d,b,s,f,j,Object(n["f"])("div",v,Object(n["k"])(Object(n["l"])($)),1),O,p,Object(n["f"])("div",y,Object(n["k"])(Object(n["l"])(E)),1),g,h,Object(n["f"])("div",m,Object(n["k"])(Object(n["l"])(R)),1),Object(n["f"])("div",x,Object(n["k"])(Object(n["l"])(B)),1),k,w,C,_,M,P,A]))}},S=(l("6b8d"),l("6b0d")),$=l.n(S);const E=$()(J,[["__scopeId","data-v-79fb19ca"]]);var R=E;const B={class:"flex p-4"},D={class:"ml-2",style:{width:"350px"}},I=Object(n["f"])("p",{class:"text-xl mb-4"},[Object(n["f"])("b",null,"Player list:")],-1),T={key:0},q={key:1},F=["onClick","for"],G={class:"flex mt-4"},N={class:"justify-center flex flex-grow bg-yellow-100 items-center"},U={key:0,class:"flex justify-center"};var V={__name:"App",setup(e){const t=Object(c["m"])([{id:1,players:[]}]),l=()=>{t.value.push({id:t.value.length+1,players:[]})},a=Object(c["m"])(["James B","Clara","James S","Ross Marnie","Alan M","Ross Mc","Callum","John","Alex","Gavin","Chris B","Connor B","Aaron","Joanna","Chris F"].map((e,t)=>({name:e,id:t,attending:!0}))),r=(Object(u["e"])(()=>r.value.length),Object(u["e"])(()=>a.value.filter(e=>e.attending))),i=e=>{const t=a.value.findIndex(t=>t.id===e.id);a.value[t].attending=!a.value[t].attending},o=Object(u["e"])(()=>{let e=[];return t.value.forEach(t=>{t.players.forEach(t=>{e.push(t.id)})}),r.value.filter(t=>!e.includes(t.id))}),d=()=>{t.value.forEach(e=>{e.players=[];for(let t=0;t<4;t++){const t=o.value[Math.floor(Math.random()*o.value.length)];t&&e.players.push(t)}})},b=()=>{t.value.forEach(e=>{e.players=[]})},s=Object(c["m"])(""),f=()=>{a.value.push({name:s.value,id:a.value.length,attending:!0}),s.value=""};return(e,c)=>(Object(n["g"])(),Object(n["e"])("div",B,[Object(n["f"])("div",D,[I,(Object(n["g"])(!0),Object(n["e"])(n["a"],null,Object(n["j"])(a.value,e=>(Object(n["g"])(),Object(n["e"])("div",{key:`${e.id}-${e.attending?"attending":"not-attending"}`,class:"text-lg flex"},[e.attending?(Object(n["g"])(),Object(n["e"])("p",T,"✅")):(Object(n["g"])(),Object(n["e"])("p",q,"⛔️")),Object(n["f"])("label",{class:"ml-4 mr-4 pr-4",onClick:t=>i(e),for:e.id},Object(n["k"])(e.name),9,F)]))),128)),Object(n["f"])("div",G,[Object(n["n"])(Object(n["f"])("input",{"onUpdate:modelValue":c[0]||(c[0]=e=>s.value=e),class:"border border-gray-400 rounded-lg p-2 mr-2",type:"text",placeholder:"Add new player"},null,512),[[n["m"],s.value]]),Object(n["f"])("button",{onClick:f,class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}," Add ")]),Object(n["f"])("div",{class:"flex justify-center mt-4"},[Object(n["f"])("button",{onClick:d,class:"px-8 py-3 text-white bg-blue-600 rounded focus:outline-none disabled:opacity-25 mr-2"}," Randomise "),Object(n["f"])("button",{onClick:b,class:"px-8 py-3 text-white bg-red-600 rounded focus:outline-none disabled:opacity-25"}," Reset courts ")])]),Object(n["f"])("div",N,[Object(n["f"])("div",null,[(Object(n["g"])(!0),Object(n["e"])(n["a"],null,Object(n["j"])(t.value,e=>(Object(n["g"])(),Object(n["e"])("div",{key:`count-${e.id+1}-${e.players.length}`},[(Object(n["g"])(),Object(n["c"])(R,{class:"m-3","court-data":e,key:`${JSON.stringify(e.players)}-${e.id}`},null,8,["court-data"])),e.id===t.value.length?(Object(n["g"])(),Object(n["e"])("div",U,[Object(n["f"])("button",{onClick:l}," + Add another court ")])):Object(n["d"])("",!0)]))),128))])])]))}};const z=V;var H=z;l("565d");Object(n["b"])(H).mount("#app")},"6b8d":function(e,t,l){"use strict";l("959d")},"959d":function(e,t,l){}});
//# sourceMappingURL=app.d0a85d30.js.map