(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o(1891)}])},1891:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return s}});var i=o(5893),c=o(2729),_=o.n(c);let l=e=>(0,i.jsx)("div",{className:_().cell,onClick:e.clickCell,children:0!==e.color&&(0,i.jsx)("div",{className:_().stone,style:{background:1===e.color?"#000":"#fff"}})});var t=o(7294);let r=()=>{let[e,n]=(0,t.useState)(1),[o,i]=(0,t.useState)([[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,1,2,0,0,0],[0,0,0,2,1,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]]),c=[[1,0],[-1,0],[0,1],[0,-1],[-1,-1],[1,-1],[-1,1],[1,1]],_=(_,l)=>{console.log(_,l);let t=JSON.parse(JSON.stringify(o)),r=[],d=!1;if(0===o[l][_]){for(let n of c){console.log(n);for(let i=1;i<=7&&void 0!==o[l+n[0]*i]&&void 0!==o[_+n[1]*i]&&0!==o[l+n[0]*i][_+n[1]*i];i+=1){if(o[l+n[0]*i][_+n[1]*i]===3-e){r.push([l+n[0]*i,_+n[1]*i]);continue}if(o[l+n[0]*i][_+n[1]*i]===e){for(let n of r)t[n[0]][n[1]]=e,t[l][_]=e,console.log("a"),d=!0;break}console.table(o)}r.splice(0)}d&&(n(3-e),i(t))}};return{board:o,clickCell:_}},d=()=>{let{board:e,clickCell:n}=r();return(0,i.jsx)("div",{className:_().container,children:(0,i.jsx)("div",{className:_().board,children:e.map((e,o)=>e.map((e,c)=>(0,i.jsx)(l,{x:c,y:o,color:e,clickCell:()=>n(c,o)},"".concat(c,"-").concat(o,"}"))))})})};var s=d},2729:function(e){e.exports={container:"index_container__gnN1f",board:"index_board__2d6xe",stone:"index_stone__oeDmm",cell:"index_cell__3W8ZQ",main:"index_main__kAcUb",footer:"index_footer__qq_p6",title:"index_title__gEapU",description:"index_description__087sm",code:"index_code__VeCgy",grid:"index_grid__FmmIe",card:"index_card__kAxi6",logo:"index_logo__FcDOZ"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);