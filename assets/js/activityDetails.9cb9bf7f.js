(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["activityDetails"],{"06bf":function(t,a,i){"use strict";var e=i("3326"),s=i.n(e);s.a},1951:function(t,a,i){},3326:function(t,a,i){},"36e3":function(t,a,i){"use strict";var e=i("fcbb"),s=i.n(e);s.a},"6c6e":function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("table",{staticClass:"two-column-table",attrs:{cellspacing:"0"}},[i("tr",[i("th",{attrs:{colspan:"2"}},[t._v(t._s(t.tableData.head))])]),t._l(t.tableData.body,(function(a,e){return i("tr",{key:e},[i("td",[t._v(t._s(e))]),i("td",[t._v(t._s(a))])])}))],2)},s=[],l={props:{tableData:Object}},c=l,n=(i("06bf"),i("2877")),o=Object(n["a"])(c,e,s,!1,null,null,null);a["a"]=o.exports},cc0b:function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"activity-details"},[i("div",[i("two-column-table",{attrs:{tableData:t.details}}),i("div",{staticClass:"activity-operate-btn"},[i("el-button",{attrs:{type:"primary",disabled:"申请通过"===this.global.activityDetails.audit_status||this.global.activityDetails.act_is_available},on:{click:t.initSignUp}},[t._v(" "+t._s("申请通过"===this.global.activityDetails.audit_status?"已报名":this.global.activityDetails.act_is_available?"活动已结束":"报名")+" ")])],1)],1)])},s=[],l=(i("1951"),i("450d"),i("eedf")),c=i.n(l),n=i("6c6e"),o=i("7591"),b=i("d722"),u=i("c22a"),d={components:{"el-button":c.a,"two-column-table":n["a"]},data:function(){return{details:{head:"活动详情",body:{"活动名称":this.global.activityDetails.act_title,"活动时间":this.global.activityDetails.act_date,"活动地点":this.global.activityDetails.act_loc,"活动方式":this.global.activityDetails.act_method,"活动描述":this.global.activityDetails.act_description,"是否结束":!1===this.global.activityDetails.act_is_available?"否":"是","是否需要审核":!1===this.global.activityDetails.act_need_audit?"无需审核":"需要审核"}},act_need_audit:!1}},methods:{initSignUp:function(){this.act_need_audit=this.global.activityDetails.act_need_audit;var t={relate_activity:this.global.activityDetails.id,audit_user:this.global.memberInfo.userid,audit_member:this.global.applyForms[0].id};Object(o["d"])(b["b"],t,this.getSignUpResponse,u["b"])},getSignUpResponse:function(t){201===parseInt(t.data.code)&&(this.act_need_audit?Object(o["h"])("报名成功","success"):(this.global.isSighUpPage=!0,this.$router.push("/success")))}}},r=d,_=(i("36e3"),i("2877")),v=Object(_["a"])(r,e,s,!1,null,null,null);a["default"]=v.exports},fcbb:function(t,a,i){}}]);
//# sourceMappingURL=activityDetails.9cb9bf7f.js.map