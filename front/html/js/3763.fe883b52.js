"use strict";(self["webpackChunks019"]=self["webpackChunks019"]||[]).push([[3763],{3763:(t,e,s)=>{s.r(e),s.d(e,{default:()=>c});var a=function(){var t=this,e=t._self._c;return e("div",[e("Card",[e("Row",{attrs:{gutter:16}},[e("span",{staticStyle:{"font-weight":"550","font-size":"26px"}},[t._v("园区火灾报警次数历史")])]),e("Row",{attrs:{gutter:16}},[e("Col",{attrs:{span:"24"}},[e("div",{attrs:{id:"container30"}})])],1)],1)],1)},r=[],i=s(4527),l=s(1821);const o={name:"test-page",components:{},props:{},data(){return{stackedBarPlot:{},userData:[{title:"AAA",value:6},{title:"BBB",value:4}]}},methods:{init(){this.getTopCollectionFx()},getTopCollectionFx(){var t=this,e=[];(0,i.dR)().then((s=>{if(console.log(s),s.success){for(var a=0;a<s.result.length;a++){var r={};r.title=s.result[a].title,r.value=s.result[a].alertTimes,e.push(r)}t.stackedBarPlot=new l.Bar("container30",{data:e,xField:"value",yField:"title",seriesField:"title",legend:{position:"top-left"}}),t.stackedBarPlot.render()}}))},initAntvFx(){var t=this.userData;this.stackedBarPlot=new l.Bar("container30",{data:t,xField:"value",yField:"title",seriesField:"title",legend:{position:"top-left"}}),this.stackedBarPlot.render()}},mounted(){this.init()}},n=o;var d=s(1001),u=(0,d.Z)(n,a,r,!1,null,"6b2d973c",null);const c=u.exports},4527:(t,e,s)=>{s.d(e,{Q:()=>r,ZB:()=>i,c6:()=>n,dR:()=>d,i$:()=>o,lY:()=>l});var a=s(7184);const r=t=>(0,a.A_)("/forestPark/getByPage",t),i=t=>(0,a.j0)("/forestPark/insert",t),l=t=>(0,a.j0)("/forestPark/update",t),o=t=>(0,a.j0)("/forestPark/delByIds",t),n=t=>(0,a.A_)("/forestPark/getCardList",t),d=t=>(0,a.A_)("/forestPark/getAntvVoList",t)}}]);