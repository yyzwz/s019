"use strict";(self["webpackChunks019"]=self["webpackChunks019"]||[]).push([[4719],{4719:(t,e,i)=>{i.r(e),i.d(e,{default:()=>m});var s=function(){var t=this,e=t._self._c;return e("div",[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[t._v("编辑")]),e("Form",{ref:"form",staticStyle:{position:"relative"},attrs:{model:t.form,"label-width":90,rules:t.formValidate}},[e("FormItem",{attrs:{label:"名称",prop:"name"}},[e("Input",{staticStyle:{width:"400px"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),e("Form-item",{staticClass:"br"},[e("Button",{attrs:{loading:t.submitLoading,type:"primary"},on:{click:t.handleSubmit}},[t._v("提交并保存")]),e("Button",{on:{click:t.handleReset}},[t._v("重置")])],1),t.loading?e("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)],1)],1)},a=[];const r={name:"edit",data(){return{loading:!0,submitLoading:!1,form:{id:"",name:""},formValidate:{name:[{required:!0,message:"不能为空",trigger:"blur"}]},backRoute:""}},methods:{init(){this.handleReset(),this.form.id=this.$route.query.id,this.backRoute=this.$route.query.backRoute,this.getData()},handleReset(){this.$refs.form.resetFields()},getData(){this.loading=!0,this.loading=!1,this.form.id,this.form.name="zwz"},handleSubmit(){this.$refs.form.validate((t=>{t&&(this.submitLoading=!1,this.$Message.success("编辑成功"),this.closeCurrentPage())}))},closeCurrentPage(){this.$store.commit("removeTag","edit"),localStorage.pageOpenedList=JSON.stringify(this.$store.state.app.pageOpenedList),this.$router.push({name:this.backRoute})}},watch:{$route(t,e){"edit"==t.name&&(this.handleReset(),this.form.id=this.$route.query.id,this.getData())}},mounted(){this.init()}},o=r;var n=i(1001),l=(0,n.Z)(o,s,a,!1,null,null,null);const m=l.exports}}]);