(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ae4f0"],{"0a09":function(t,a,n){"use strict";n.r(a);var s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("b-card",{staticClass:"mb-3",attrs:{"bg-variant":"light","no-body":""},scopedSlots:t._u([{key:"header",fn:function(){return[n("i",{staticClass:"ri-window-fill"}),t._v(" 控制台 ")]},proxy:!0}])},[n("b-card-body",[n("div",{staticClass:"mb-3"},[n("p",[t._v("网盘容量")]),n("b-progress",{staticClass:"mb-3",attrs:{max:t.total}},[n("b-progress-bar",{attrs:{variant:"danger",value:t.values[0]}}),n("b-progress-bar",{attrs:{variant:"success",value:t.values[1]}}),n("b-progress-bar",{attrs:{variant:"info",value:t.values[2]}})],1)],1),n("div",{staticClass:"mb-3"},[n("b-form",{on:{submit:t.onSubmit}},[n("b-form-group",{attrs:{id:"input-group",label:"已绑定账号","label-for":"bind_account"}},[n("b-form-input",{attrs:{id:"bind_account",type:"text",disabled:""},model:{value:t.account,callback:function(a){t.account=a},expression:"account"}})],1),n("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("解绑/绑定账户")])],1)],1)])],1)},r=[],e={name:"page-index",data:function(){return{values:[15,30,20],total:100,account:"i@ningkai.wang"}},methods:{onSubmit:function(t){var a=this;t.preventDefault(),a.$router.push({name:"bind"})}}},i=e,o=n("2877"),u=Object(o["a"])(i,s,r,!1,null,null,null);a["default"]=u.exports}}]);