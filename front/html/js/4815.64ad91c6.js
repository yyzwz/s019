"use strict";(self["webpackChunks019"]=self["webpackChunks019"]||[]).push([[4815],{4815:(t,e,s)=>{s.r(e),s.d(e,{default:()=>d});var o=function(){var t=this,e=t._self._c;return e("div",[e("Card",[e("div",{attrs:{slot:"title"},slot:"title"},[e("div",{staticClass:"edit-head"},[e("a",{staticClass:"back-title",on:{click:t.close}},[e("Icon",{attrs:{type:"ios-arrow-back"}}),t._v("返回 ")],1),e("div",{staticClass:"head-name"},[t._v("添加森林园区")]),e("span"),e("a",{staticClass:"window-close",on:{click:t.close}},[e("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),e("Form",{ref:"form",attrs:{model:t.form,"label-width":100,rules:t.formValidate,"label-position":"left"}},[e("FormItem",{attrs:{label:"园区名称",prop:"title"}},[e("Input",{staticStyle:{width:"570px"},attrs:{clearable:"",type:"textarea",rows:2,maxlength:"240","show-word-limit":"",placeholder:"请输入森林园区名称..."},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),e("FormItem",{attrs:{label:"X坐标",prop:"coordinate1"}},[e("InputNumber",{staticStyle:{width:"570px"},attrs:{min:"1",max:"20",placeholder:"请输入森林园区的 X 坐标..."},model:{value:t.form.coordinate1,callback:function(e){t.$set(t.form,"coordinate1",e)},expression:"form.coordinate1"}})],1),e("FormItem",{attrs:{label:"Y坐标",prop:"coordinate2"}},[e("InputNumber",{staticStyle:{width:"570px"},attrs:{min:"1",max:"20",placeholder:"请输入森林园区的 Y 坐标..."},model:{value:t.form.coordinate2,callback:function(e){t.$set(t.form,"coordinate2",e)},expression:"form.coordinate2"}})],1),e("Form-item",{staticClass:"br"},[e("Button",{attrs:{loading:t.submitLoading,type:"primary"},on:{click:t.handleSubmit}},[t._v("提交并保存")]),e("Button",{on:{click:t.handleReset}},[t._v("重置")]),e("Button",{attrs:{type:"dashed"},on:{click:t.close}},[t._v("关闭")])],1)],1)],1)],1)},a=[],i=s(4527);const r={name:"add",components:{},data(){return{submitLoading:!1,form:{title:"",coordinate1:1,coordinate2:1,smokeValue:0,forestValue:0},formValidate:{}}},methods:{init(){},handleReset(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate((t=>{t&&(0,i.ZB)(this.form).then((t=>{this.submitLoading=!1,t.success&&(this.$Message.success("操作成功"),this.submited())}))}))},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)}},mounted(){this.init()}},l=r;var c=s(1001),n=(0,c.Z)(l,o,a,!1,null,null,null);const d=n.exports},4527:(t,e,s)=>{s.d(e,{Q:()=>a,ZB:()=>i,c6:()=>c,dR:()=>n,i$:()=>l,lY:()=>r});var o=s(7184);const a=t=>(0,o.A_)("/forestPark/getByPage",t),i=t=>(0,o.j0)("/forestPark/insert",t),r=t=>(0,o.j0)("/forestPark/update",t),l=t=>(0,o.j0)("/forestPark/delByIds",t),c=t=>(0,o.A_)("/forestPark/getCardList",t),n=t=>(0,o.A_)("/forestPark/getAntvVoList",t)}}]);