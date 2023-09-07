"use strict";(self["webpackChunks019"]=self["webpackChunks019"]||[]).push([[4493],{4493:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"search"},[t("Card",[t("Tabs",{attrs:{type:"card"},on:{"on-click":e.changeTab},model:{value:e.tabName,callback:function(t){e.tabName=t},expression:"tabName"}},[t("TabPane",{attrs:{label:"登录日志",icon:"ios-cloud-upload-outline",name:"1"}}),t("TabPane",{attrs:{label:"数据中心日志",icon:"md-list",name:"2"}}),t("TabPane",{attrs:{label:"扩展模块展示日志",icon:"ios-people",name:"3"}}),t("TabPane",{attrs:{label:"图表日志",icon:"md-laptop",name:"4"}})],1),t("Row",{attrs:{gutter:16}},[t("Form",{ref:"searchForm",attrs:{model:e.searchForm,inline:"","label-width":0}},[t("Form-item",{attrs:{label:""}},[t("Input",{staticStyle:{width:"120px"},attrs:{type:"text",clearable:"",placeholder:"日志名称"},model:{value:e.searchForm.name,callback:function(t){e.$set(e.searchForm,"name",t)},expression:"searchForm.name"}})],1),t("Form-item",{attrs:{label:""}},[t("Input",{staticStyle:{width:"120px"},attrs:{type:"text",clearable:"",placeholder:"IP地址"},model:{value:e.searchForm.ip,callback:function(t){e.$set(e.searchForm,"ip",t)},expression:"searchForm.ip"}})],1),t("Form-item",{attrs:{label:""}},[t("Input",{staticStyle:{width:"120px"},attrs:{type:"text",clearable:"",placeholder:"用户名"},model:{value:e.searchForm.username,callback:function(t){e.$set(e.searchForm,"username",t)},expression:"searchForm.username"}})],1),t("Form-item",{attrs:{label:""}},[t("DatePicker",{staticStyle:{width:"200px"},attrs:{type:"daterange",format:"yyyy-MM-dd",clearable:"",placeholder:"选择起始时间"},on:{"on-change":e.selectDateRange},model:{value:e.selectDate,callback:function(t){e.selectDate=t},expression:"selectDate"}})],1),t("Form-item",{staticClass:"br"},[t("Poptip",{attrs:{trigger:"hover",content:"输入搜索条件后,点击搜索完成查询",placement:"bottom"}},[t("Button",{attrs:{type:"primary",icon:"ios-search",size:"small",ghost:"",shape:"circle"},on:{click:e.handleSearch}},[e._v("搜索")])],1),t("Poptip",{attrs:{trigger:"hover",content:"将所有搜索条件删除,搜索全部内容",placement:"bottom"}},[t("Button",{attrs:{type:"warning",size:"small",ghost:"",shape:"circle",icon:"md-refresh"},on:{click:e.handleReset}},[e._v("重置")])],1)],1),t("Form-item",{staticStyle:{position:"fixed",right:"50px",top:"160px"}},[t("Poptip",{attrs:{trigger:"hover",content:"自定义表格的显示列,适应屏幕显示",placement:"left"}},[t("Button",{staticClass:"showFilterPanelFlag",attrs:{type:"info",icon:"ios-settings",size:"small",ghost:""},on:{click:function(t){e.showFilterPanelFlag=!e.showFilterPanelFlag}}},[e._v("列筛选 ")])],1),t("Poptip",{attrs:{trigger:"hover",content:"点我查看本模块的使用教程",placement:"left"}},[t("Button",{staticClass:"showFilterPanelFlag",attrs:{type:"warning",icon:"md-help",size:"small",ghost:""},on:{click:function(t){e.modal1=!0}}},[e._v("使用教程 ")])],1),t("Modal",{attrs:{title:"操作日志档案教程"},model:{value:e.modal1,callback:function(t){e.modal1=t},expression:"modal1"}},[t("p",[e._v("1.所有用户的操作日志均在此模块")]),t("p",[e._v("2.日志根据系统类型，在不同页签展示")])])],1)],1)],1),t("Row",{staticClass:"operation",staticStyle:{position:"relative"}},[t("transition",[t("div",{directives:[{name:"show",rawName:"v-show",value:e.showFilterPanelFlag,expression:"showFilterPanelFlag"}],staticClass:"filter-panel"},[t("CheckboxGroup",{model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},e._l(e.mycolumns,(function(e){return t("div",{key:e.key},[t("Checkbox",{staticStyle:{margin:"2px 5px"},attrs:{label:e.title}})],1)})),0)],1)])],1),t("Row",[t("Table",{ref:"table",attrs:{loading:e.loading,border:"",stripe:"",size:"small",columns:e.columns,height:e.tableHeight,data:e.data,sortable:"custom","context-menu":"","show-context-menu":"","row-class-name":e.rowClassNmae},on:{"on-contextmenu":e.handleContextMenu,"on-sort-change":e.changeSort,"on-selection-change":e.changeSelect,"on-row-click":e.rowClick,"on-row-dblclick":e.lookContacts}},[t("template",{slot:"contextMenu"},[t("DropdownItem",{staticStyle:{color:"#ff9900"},nativeOn:{click:function(t){return e.openMessageModel.apply(null,arguments)}}},[e._v("提示")])],1)],2)],1),t("Row",{staticClass:"page",attrs:{type:"flex",justify:"end"}},[t("Page",{attrs:{current:e.searchForm.pageNumber,total:e.total,"page-size":e.searchForm.pageSize,"page-size-opts":[5,15,25,35,45,1e3],size:"small","show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":e.changePage,"on-page-size-change":e.changePageSize}})],1)],1)],1)},o=[],l=a(7184);const i=e=>(0,l.A_)("/log/getAllByPage",e),r={name:"logLook",data(){return{columns:[{title:"序号",type:"index",minWidth:80,align:"center",fixed:"left"},{title:"操作名称",key:"name",minWidth:120,sortable:!0,fixed:"left",tooltip:!0,align:"center",render:(e,t)=>e("div",[e("Tag",{props:{color:"purple",size:"medium"}},t.row.name)])},{title:"操作者",key:"username",minWidth:100,sortable:!0,fixed:"left",align:"center",tooltip:!0},{title:"秒耗时",key:"costTime",minWidth:150,sortable:!0,align:"center",tooltip:!0,render:(e,t)=>e("div",[e("Tag",{props:{color:t.row.costTime>500?"red":"green",size:"medium"}},t.row.costTime/1e3)])},{title:"请求类型",key:"requestType",minWidth:130,align:"center",sortable:!0,tooltip:!0,render:(e,t)=>"GET"===t.row.requestType?e("div",[e("Tag",{props:{color:"magenta",size:"medium"}},t.row.requestType)]):"POST"===t.row.requestType?e("div",[e("Tag",{props:{color:"orange",size:"medium"}},t.row.requestType)]):e("div",[t.row.requestType])},{title:"请求路径",minWidth:120,key:"requestUrl",align:"center",tooltip:!0},{title:"请求参数",minWidth:120,key:"requestParam",tooltip:!0,align:"center"},{title:"操作者IP",key:"ip",minWidth:150,sortable:!0,align:"center",tooltip:!0},{title:"IP定位",key:"ipInfo",minWidth:150,align:"center",sortable:!0,tooltip:!0},{title:"操作设备",key:"device",minWidth:150,align:"center",sortable:!0,tooltip:!0},{title:"接口编码",key:"doType",minWidth:120,sortable:!0,align:"center",tooltip:!0},{title:"操作时间",key:"createTime",sortable:!0,minWidth:220,align:"center",sortType:"desc",fixed:"right",tooltip:!0}],selected:["序号","操作名称","操作者","秒耗时","请求类型","请求路径","请求参数","操作者IP","IP定位","操作设备","接口编码","操作时间"],tableHeight:0,modal1:!1,tabName:"",loading:!0,selectList:[],selectRow:0,selectDate:null,searchKey:"",searchForm:{logType:"1",pageNumber:1,pageSize:15,startDate:"",endDate:"",sort:"createTime",order:"desc",ipInfo:""},data:[],total:0,showFilterPanelFlag:!1}},methods:{openMessageModel(){this.$Message.info("这是一条日志!")},handleContextMenu(e){this.selectRow=e},changeTab(e){this.searchForm.logType=e,this.getLogList()},changePage(e){this.searchForm.pageNumber=e,this.getLogList()},changePageSize(e){this.searchForm.pageSize=e,this.getLogList()},selectDateRange(e){e&&(this.searchForm.startDate=e[0],this.searchForm.endDate=e[1])},rowClick(e,t){this.selectRow=e},rowClassNmae(e,t){return e.id==this.selectRow.id?"rowClassNmaeColor":""},handleSearch(){this.searchForm.pageNumber=1,this.searchForm.pageSize=20,this.getLogList()},getLogList(){this.loading=!0,this.searchForm.key=this.searchKey,i(this.searchForm).then((e=>{this.loading=!1,e.success&&(this.data=e.result.records,this.total=e.result.total)}))},handleReset(){this.searchKey="",this.selectDate=null,this.searchForm.startDate="",this.searchForm.endDate="",this.getLogList()},changeSort(e){this.searchForm.sort=e.key,this.searchForm.order=e.order,"normal"==e.order&&(this.searchForm.order=""),this.getLogList()}},mounted(){this.getLogList(),this.height=window.innerHeight-this.$refs.table.$el.offsetTop-240,this.tableHeight=Number(window.innerHeight-320),this.mycolumns=this.columns;let e=[];for(var t=0;t<this.selected.length;t++)for(var a=this.selected[t],s=0;s<this.columns.length;s++)this.columns[s].title==a&&e.push(this.columns[s]);this.columns=e},watch:{selected:function(e){let t=[];for(var a=0;a<this.mycolumns.length;a++){var s=this.mycolumns[a];(void 0==s.title||e.includes(s.title))&&t.push(s)}this.columns=t}}},n=r;var c=a(1001),h=(0,c.Z)(n,s,o,!1,null,null,null);const m=h.exports}}]);