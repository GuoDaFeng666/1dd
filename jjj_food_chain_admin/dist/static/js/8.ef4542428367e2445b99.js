webpackJsonp([8],{XVc3:function(e,t){},YDBe:function(e,t){},ceLN:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("vLgD"),l={accessList:function(e,t){return s.a._post("/admin/Access/index",e,t)},addpAccess:function(e,t){return s.a._post("/admin/Access/add",e,t)},editAccess:function(e,t){return s.a._post("/admin/Access/edit",e,t)},delAccess:function(e,t){return s.a._post("/admin/Access/delete",e,t)},status:function(e,t){return s.a._post("/admin/Access/status",e,t)},supplier:function(e,t){return s.a._post("/admin/Access/supplier",e,t)},supplieraccessList:function(e,t){return s.a._post("/admin/SupplierAccess/index",e,t)},supplieraddpAccess:function(e,t){return s.a._post("/admin/SupplierAccess/add",e,t)},suppliereditAccess:function(e,t){return s.a._post("/admin/SupplierAccess/edit",e,t)},supplierdelAccess:function(e,t){return s.a._post("/admin/SupplierAccess/delete",e,t)},supplierstatus:function(e,t){return s.a._post("/admin/SupplierAccess/status",e,t)}},i=a("aFVK"),o={data:function(){return{loading:!1,formData:{name:"",path:"",views:"",alias:"",icon:"",is_menu:1,is_route:1,is_show:0,sort:1,parent_id:0,is_supplier:0},formRules:{name:[{required:!0,message:"请输入菜单名称",trigger:"blur"}],path:[{required:!0,message:"请输入路径",trigger:"blur"}],views:[{required:!0,message:"请输入组件名称",trigger:"blur"}],alias:[{required:!0,message:"请输入别名",trigger:"blur"}]},parentsVal:[],accessList:[],srot:"1",formLabelWidth:"120px",dialogVisible:!1,propsParam:{label:"name",value:"access_id",checkStrictly:!0}}},props:{open_edit:Boolean,add_type:String,rawData:Array,selectModel:Object},created:function(){this.dialogVisible=this.open_edit,this.accessList=Object(i.a)(this.rawData),this.accessList.unshift({name:"顶级菜单",access_id:0}),this.formData=Object(i.a)(this.selectModel),this.findParentsID(this.accessList)},methods:{handleChange:function(e){},findParentsID:function(e){for(var t=!1,a=0;a<e.length;a++){var s=e[a];if(s.access_id==this.formData.parent_id){this.parentsVal.unshift(s.access_id),t=!0;break}var l=s.children;if(void 0!==l&&l.length>0&&this.findParentsID(l)){this.parentsVal.unshift(s.access_id),t=!0;break}}return t},onSubmit:function(){var e=this,t=e.formData;e.parentsVal.length>0&&(t.parent_id=e.parentsVal[e.parentsVal.length-1]),e.$refs.form.validate(function(a){a&&(e.loading=!0,l.editAccess(t,!0).then(function(a){1==a.code&&(e.$message({message:a.msg,type:"success"}),e.$emit("closeDialog",{type:"success",openDialog:!1,data:t}),e.loading=!1)}).catch(function(t){e.loading=!1}))})},dialogFormVisible:function(e){this.$emit("closeDialog",{type:"error",openDialog:!1})}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"修改菜单&权限",visible:e.dialogVisible,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(t){e.dialogVisible=t},close:e.dialogFormVisible}},[a("el-form",{ref:"form",attrs:{size:"small",model:e.formData,rules:e.formRules}},[a("el-form-item",{attrs:{label:"菜单名称",prop:"name","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入菜单名称"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"类型",prop:"name","label-width":e.formLabelWidth}},[a("el-radio-group",{model:{value:e.formData.is_route,callback:function(t){e.$set(e.formData,"is_route",t)},expression:"formData.is_route"}},[a("el-radio",{attrs:{label:1}},[e._v("页面")]),e._v(" "),a("el-radio",{attrs:{label:0}},[e._v("按钮")]),e._v(" "),a("el-radio",{attrs:{label:2}},[e._v("独立单页面")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"上级菜单",prop:"parent_id","label-width":e.formLabelWidth}},[a("el-cascader",{attrs:{size:"small",options:e.accessList,props:e.propsParam},on:{change:e.handleChange},model:{value:e.parentsVal,callback:function(t){e.parentsVal=t},expression:"parentsVal"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"路径",prop:"path","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入组件文件路径",disabled:"/plus"==e.formData.path},model:{value:e.formData.path,callback:function(t){e.$set(e.formData,"path",t)},expression:"formData.path"}}),e._v(" "),a("p",[e._v("提示：对应前端给的文件路径，例如：index/index")])],1),e._v(" "),a("el-form-item",{attrs:{label:"图标","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入icon"},model:{value:e.formData.icon,callback:function(t){e.$set(e.formData,"icon",t)},expression:"formData.icon"}}),e._v(" "),a("p",[e._v("提示：请选择系统提供的图标")])],1),e._v(" "),1==e.formData.is_route?a("el-form-item",{attrs:{label:"是否是菜单","label-width":e.formLabelWidth}},[a("el-radio-group",{model:{value:e.formData.is_menu,callback:function(t){e.$set(e.formData,"is_menu",t)},expression:"formData.is_menu"}},[a("el-radio",{attrs:{label:1}},[e._v("是")]),e._v(" "),a("el-radio",{attrs:{label:0}},[e._v("否")])],1)],1):e._e(),e._v(" "),a("el-form-item",{attrs:{label:"是否显示","label-width":e.formLabelWidth}},[a("el-radio-group",{model:{value:e.formData.is_show,callback:function(t){e.$set(e.formData,"is_show",t)},expression:"formData.is_show"}},[a("el-radio",{attrs:{label:1}},[e._v("是")]),e._v(" "),a("el-radio",{attrs:{label:0}},[e._v("否")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"门店菜单","label-width":e.formLabelWidth}},[a("el-radio-group",{model:{value:e.formData.is_supplier,callback:function(t){e.$set(e.formData,"is_supplier",t)},expression:"formData.is_supplier"}},[a("el-radio",{attrs:{label:1}},[e._v("是")]),e._v(" "),a("el-radio",{attrs:{label:0}},[e._v("否")])],1)],1),e._v(" "),1==e.formData.is_route?a("el-form-item",{attrs:{label:"重定向","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入重定向地址"},model:{value:e.formData.redirect_name,callback:function(t){e.$set(e.formData,"redirect_name",t)},expression:"formData.redirect_name"}})],1):e._e(),e._v(" "),a("el-form-item",{attrs:{label:"备注",prop:"sort","label-width":e.formLabelWidth}},[a("el-input",{attrs:{placeholder:"请输入备注",type:"textarea"},model:{value:e.formData.remark,callback:function(t){e.$set(e.formData,"remark",t)},expression:"formData.remark"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"排序",prop:"sort","label-width":e.formLabelWidth}},[a("el-input",{attrs:{placeholder:"请输入排序",type:"number"},model:{value:e.formData.sort,callback:function(t){e.$set(e.formData,"sort",t)},expression:"formData.sort"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.dialogFormVisible}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",disabled:e.loading},on:{click:function(t){return e.onSubmit()}}},[e._v("确 定")])],1)],1)},staticRenderFns:[]};var n=a("VU/8")(o,r,!1,function(e){a("XVc3")},null,null).exports,c={data:function(){return{loading:!1,formData:{name:"",path:"",views:"",alias:"",icon:"",is_menu:0,is_route:1,is_show:1,sort:1,parent_id:0,is_supplier:0},formRules:{name:[{required:!0,message:"请输入菜单名称",trigger:"blur"}],path:[{required:!0,message:"请输入路径",trigger:"blur"}],views:[{required:!0,message:"请输入组件名称",trigger:"blur"}],alias:[{required:!0,message:"请输入别名",trigger:"blur"}]},parentsVal:[],accessList:[],srot:"1",formLabelWidth:"120px",dialogVisible:!1,propsParam:{label:"name",value:"access_id",checkStrictly:!0}}},props:{open_add:Boolean,add_type:String,rawData:Array,selectModel:Object},created:function(){this.dialogVisible=this.open_add,this.accessList=Object(i.a)(this.rawData),this.accessList.unshift({name:"顶级菜单",access_id:0}),"copy"==this.add_type?(this.formData=Object(i.c)(this.formData,this.selectModel),this.findParentsID(this.accessList)):"child"==this.add_type&&(this.formData.parent_id=this.selectModel.access_id,this.findParentsID(this.accessList))},methods:{handleChange:function(e){},findParentsID:function(e){for(var t=!1,a=0;a<e.length;a++){var s=e[a];if(s.access_id==this.formData.parent_id){this.parentsVal.unshift(s.access_id),t=!0;break}var l=s.children;if(void 0!==l&&l.length>0&&this.findParentsID(l)){this.parentsVal.unshift(s.access_id),t=!0;break}}return t},onSubmit:function(){var e=this,t=this.formData;e.parentsVal.length>0&&(t.parent_id=e.parentsVal[e.parentsVal.length-1]),e.$refs.form.validate(function(a){a&&(e.loading=!0,l.addpAccess(t,!0).then(function(t){1==t.code&&(e.$message({message:t.msg,type:"success"}),e.dialogFormVisible(!0),e.loading=!1)}).catch(function(t){e.loading=!1}))})},dialogFormVisible:function(e){e?this.$emit("closeDialog",{type:"success",openDialog:!1}):this.$emit("closeDialog",{type:"error",openDialog:!1})}}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"添加菜单&权限",visible:e.dialogVisible,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(t){e.dialogVisible=t},close:e.dialogFormVisible}},[a("el-form",{ref:"form",attrs:{size:"small",model:e.formData,rules:e.formRules}},[a("el-form-item",{attrs:{label:"菜单名称",prop:"name","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入菜单名称"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"类型",prop:"name","label-width":e.formLabelWidth}},[a("el-radio-group",{model:{value:e.formData.is_route,callback:function(t){e.$set(e.formData,"is_route",t)},expression:"formData.is_route"}},[a("el-radio",{attrs:{label:1}},[e._v("页面")]),e._v(" "),a("el-radio",{attrs:{label:0}},[e._v("按钮")]),e._v(" "),a("el-radio",{attrs:{label:2}},[e._v("独立单页面")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"上级菜单",prop:"parent_id","label-width":e.formLabelWidth}},[a("el-cascader",{attrs:{size:"small",options:e.accessList,props:e.propsParam},on:{change:e.handleChange},model:{value:e.parentsVal,callback:function(t){e.parentsVal=t},expression:"parentsVal"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"路径",prop:"path","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入组件文件路径"},model:{value:e.formData.path,callback:function(t){e.$set(e.formData,"path",t)},expression:"formData.path"}}),e._v(" "),a("p",[e._v("提示：对应前端给的文件路径，例如：/index/index")])],1),e._v(" "),a("el-form-item",{attrs:{label:"图标","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入icon"},model:{value:e.formData.icon,callback:function(t){e.$set(e.formData,"icon",t)},expression:"formData.icon"}}),e._v(" "),a("p",[e._v("提示：请选择系统提供的图标")])],1),e._v(" "),1==e.formData.is_route?a("el-form-item",{attrs:{label:"是否是菜单","label-width":e.formLabelWidth}},[a("el-radio-group",{model:{value:e.formData.is_menu,callback:function(t){e.$set(e.formData,"is_menu",t)},expression:"formData.is_menu"}},[a("el-radio",{attrs:{label:1}},[e._v("是")]),e._v(" "),a("el-radio",{attrs:{label:0}},[e._v("否")])],1)],1):e._e(),e._v(" "),a("el-form-item",{attrs:{label:"是否显示","label-width":e.formLabelWidth}},[a("el-radio-group",{model:{value:e.formData.is_show,callback:function(t){e.$set(e.formData,"is_show",t)},expression:"formData.is_show"}},[a("el-radio",{attrs:{label:1}},[e._v("是")]),e._v(" "),a("el-radio",{attrs:{label:0}},[e._v("否")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"门店菜单","label-width":e.formLabelWidth}},[a("el-radio-group",{model:{value:e.formData.is_supplier,callback:function(t){e.$set(e.formData,"is_supplier",t)},expression:"formData.is_supplier"}},[a("el-radio",{attrs:{label:1}},[e._v("是")]),e._v(" "),a("el-radio",{attrs:{label:0}},[e._v("否")])],1)],1),e._v(" "),1==e.formData.is_route?a("el-form-item",{attrs:{label:"重定向","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入重定向地址"},model:{value:e.formData.redirect_name,callback:function(t){e.$set(e.formData,"redirect_name",t)},expression:"formData.redirect_name"}})],1):e._e(),e._v(" "),a("el-form-item",{attrs:{label:"备注",prop:"sort","label-width":e.formLabelWidth}},[a("el-input",{attrs:{placeholder:"请输入备注",type:"textarea"},model:{value:e.formData.remark,callback:function(t){e.$set(e.formData,"remark",t)},expression:"formData.remark"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"排序",prop:"sort","label-width":e.formLabelWidth}},[a("el-input",{attrs:{placeholder:"请输入排序",type:"number"},model:{value:e.formData.sort,callback:function(t){e.$set(e.formData,"sort",t)},expression:"formData.sort"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.dialogFormVisible}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",disabled:e.loading},on:{click:function(t){return e.onSubmit()}}},[e._v("确 定")])],1)],1)},staticRenderFns:[]};var u={components:{Edit:n,Add:a("VU/8")(c,d,!1,function(e){a("YDBe")},null,null).exports},data:function(){return{loading:!0,formSearch:{is_menu:!1,pack_up:!1},rawData:[],tableData:[],open_add:!1,add_type:"",selectModel:{},open_edit:!1,userModel:{}}},created:function(){this.getTableList()},methods:{changeIsMenuFunc:function(e){var t=Object(i.a)(this.rawData);e?(this.showScreen(t,1),this.tableData=t):this.tableData=t},isShowFunc:function(e){var t=this;l.status({access_id:e.access_id,status:e.is_show},!0).then(function(e){1==e.code&&(t.$message({message:e.msg,type:"success"}),t.getTableList())}).catch(function(e){t.loading=!1})},isSupplierFunc:function(e){var t=this;l.supplier({access_id:e.access_id,status:e.is_supplier},!0).then(function(e){1==e.code&&(t.$message({message:e.msg,type:"success"}),t.getTableList())}).catch(function(e){t.loading=!1})},changePackUpFunc:function(e){this.forArr(this.tableData,!e)},forArr:function(e,t){var a=this;e.forEach(function(e){a.$refs.theTable.toggleRowExpansion(e,t),e.children&&a.forArr(e.children,t)})},changeShowFunc:function(e){var t=Object(i.a)(this.rawData);if("all"==e)this.tableData=t;else{var a=void 0;"show"==e&&(a=1),"hide"==e&&(a=0),this.showScreen(t,a),this.tableData=t}},showScreen:function(e,t){for(var a=0;a<e.length;a++){var s=e[a];void 0!==s.is_menu&&s.is_menu!=t?(e.splice(a,1),a--):s.children.length>0&&this.showScreen(s.children,t)}},getTableList:function(){var e=this;l.accessList({},!0).then(function(t){e.loading=!1,e.rawData=t.data,e.tableData=t.data}).catch(function(t){e.loading=!1})},addClick:function(e,t){e&&void 0!==e?(this.add_type=t,this.selectModel=Object(i.a)(e)):this.parents_id=0,this.open_add=!0},editClick:function(e){this.selectModel=e,this.open_edit=!0},closeDialogFunc:function(e,t){"add"==t&&(this.open_add=e.openDialog,"success"==e.type&&this.getTableList()),"edit"==t&&(this.open_edit=e.openDialog,"success"==e.type&&this.getTableList())},deleteClick:function(e){var t=this;t.$confirm("删除后不可恢复，确认删除该记录吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.loading=!0,l.delAccess({access_id:e.access_id},!0).then(function(e){1==e.code&&(t.loading=!1,t.$message({message:e.msg,type:"success"}),t.getTableList())}).catch(function(e){t.loading=!1})}).catch(function(){})}}},p={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"product"},[a("div",{staticClass:"common-level-rail d-b-c"},[a("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-plus"},on:{click:e.addClick}},[e._v("添加菜单&权限")]),e._v(" "),a("el-form",{attrs:{inline:!0,model:e.formSearch,size:"small"}},[a("el-form-item",[a("el-checkbox",{on:{change:e.changeIsMenuFunc},model:{value:e.formSearch.is_menu,callback:function(t){e.$set(e.formSearch,"is_menu",t)},expression:"formSearch.is_menu"}},[e._v("只显示菜单")]),e._v(" "),a("el-checkbox",{on:{change:e.changePackUpFunc},model:{value:e.formSearch.pack_up,callback:function(t){e.$set(e.formSearch,"pack_up",t)},expression:"formSearch.pack_up"}},[e._v("收起")])],1)],1)],1),e._v(" "),a("div",{staticClass:"product-content"},[a("div",{staticClass:"table-wrap"},[a("div",[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"theTable",staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{size:"small",data:e.tableData,"row-key":"access_id",border:"","default-expand-all":"","tree-props":{children:"children"}}},[a("el-table-column",{attrs:{prop:"name",label:"菜单名称"},scopedSlots:e._u([{key:"default",fn:function(t){return["/plus"==t.row.path?a("span",{staticClass:"fb red f18"},[e._v("\n                "+e._s(t.row.name)+"\n              ")]):a("span",[e._v("\n                "+e._s(t.row.name)+"\n              ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"path",label:"路径"}}),e._v(" "),a("el-table-column",{attrs:{prop:"is_route",label:"类别",width:"90"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.is_route?a("span",[e._v("页面")]):e._e(),e._v(" "),0==t.row.is_route?a("span",[e._v("按钮")]):e._e(),e._v(" "),2==t.row.is_route?a("span",[e._v("独立单页面")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"is_show",label:"是否显示",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-color":"#13ce66","inactive-color":"#cccccc"},on:{change:function(a){return e.isShowFunc(t.row)}},model:{value:t.row.is_show,callback:function(a){e.$set(t.row,"is_show",a)},expression:"scope.row.is_show"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"is_supplier",label:"门店菜单",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-color":"#13ce66","inactive-color":"#cccccc"},on:{change:function(a){return e.isSupplierFunc(t.row)}},model:{value:t.row.is_supplier,callback:function(a){e.$set(t.row,"is_supplier",a)},expression:"scope.row.is_supplier"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"sort",label:"排序",width:"60"}}),e._v(" "),a("el-table-column",{attrs:{prop:"create_time",label:"添加时间",width:"140"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"操作",width:"230"},scopedSlots:e._u([{key:"default",fn:function(t){return["/plus"!=t.row.path?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.addClick(t.row,"copy")}}},[e._v("一键复制")]):e._e(),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.addClick(t.row,"child")}}},[e._v("添加子菜单")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.editClick(t.row)}}},[e._v("编辑")]),e._v(" "),"/plus"!=t.row.path?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.deleteClick(t.row)}}},[e._v("删除")]):e._e()]}}])})],1)],1)])]),e._v(" "),e.open_add?a("Add",{attrs:{open_add:e.open_add,add_type:e.add_type,rawData:e.rawData,selectModel:e.selectModel},on:{closeDialog:function(t){return e.closeDialogFunc(t,"add")}}}):e._e(),e._v(" "),e.open_edit?a("Edit",{attrs:{open_edit:e.open_edit,rawData:e.rawData,selectModel:e.selectModel},on:{closeDialog:function(t){return e.closeDialogFunc(t,"edit")}}}):e._e()],1)},staticRenderFns:[]},m=a("VU/8")(u,p,!1,null,null,null);t.default=m.exports}});
//# sourceMappingURL=8.ef4542428367e2445b99.js.map