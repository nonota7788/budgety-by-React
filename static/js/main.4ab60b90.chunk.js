(this["webpackJsonpbudgety-by-react"]=this["webpackJsonpbudgety-by-react"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),s=(a(15),a(9)),l=a(8),u=a(1),o=a(2),m=a(4),p=a(3),v=(a(16),a(17),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.item,a=e.onDelete,n=e.formatNum;return r.a.createElement("div",{className:"listItem"},r.a.createElement("div",{className:"listItem__description ".concat(this.getTypeClasses())},t.desc),r.a.createElement("div",{className:"listItem__value ".concat(this.getTypeClasses())},n(t.type,t.value)),r.a.createElement("div",{className:"listItem__btn"},r.a.createElement("button",{className:"listItem__btn--del",onClick:function(){return a(t)}},"x")))}},{key:"getTypeClasses",value:function(){return"inc"===this.props.item.type?"type__inc":"type__exp"}}]),a}(n.Component)),d=(a(18),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.items,a=e.onDelete,n=e.formatNum;return r.a.createElement("div",{className:"list__container"},t.map((function(e){return r.a.createElement(v,{key:e.id,item:e,onDelete:a,formatNum:n})})))}}]),a}(n.Component)),h=a(5),f=(a(19),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={type:"inc",desc:"",value:""},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.desc,r=a.value;n&&r&&e.props.onAddItem(e.state),e.setState({type:"inc",desc:"",value:""})},e.handleInputChange=function(t){var a=e.state,n=t.target,r=n.name,c=n.value;a[r]=c,e.setState(Object(h.a)({},r,c))},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("select",{name:"type",value:this.state.type,onChange:this.handleInputChange},r.a.createElement("option",{value:"inc",defaultChecked:!0},"+"),r.a.createElement("option",{value:"exp"},"-")),r.a.createElement("input",{name:"desc",type:"text",value:this.state.desc,placeholder:"description",onChange:this.handleInputChange}),r.a.createElement("input",{name:"value",type:"number",value:this.state.value,placeholder:"value",onChange:this.handleInputChange}),r.a.createElement("input",{type:"submit",value:"+"}))}}]),a}(n.Component)),b=(a(20),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.inc,a=e.exp,n=e.formatNum,c=this.getTotalNum(t),i=this.getTotalNum(a),s=c-i;return r.a.createElement("div",{className:"overview"},r.a.createElement("div",{className:"overview__container"},r.a.createElement("div",{className:"overview__sum"},n(null,s)),r.a.createElement("div",{className:"overview__inc"},"Income","  ",r.a.createElement("span",{className:"overview__inc-value"},n("inc",c)),r.a.createElement("span",{className:"overview__exp--per"},"\xa0")),r.a.createElement("div",{className:"overview__exp"},"Expense"," ",r.a.createElement("span",{className:"overview__exp-value"},n("exp",i)),r.a.createElement("span",{className:"overview__exp--per"},c?Math.round(i/c*100):"---"," %"))))}},{key:"getTotalNum",value:function(e){return e.reduce((function(e,t){return e+=parseInt(t.value,10)}),0)}}]),a}(n.Component)),y=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={items:[]},e.handleDelete=function(t){var a=e.state.items.filter((function(e){return e.id!==t.id}));e.setState({items:a})},e.handleAddItem=function(t){var a=Object(l.a)({id:Math.random()},t),n=[].concat(Object(s.a)(e.state.items),[a]);e.setState({items:n})},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{inc:this.state.items.filter((function(e){return"inc"===e.type})),exp:this.state.items.filter((function(e){return"exp"===e.type})),formatNum:this.formatNumber}),r.a.createElement(f,{onAddItem:this.handleAddItem}),r.a.createElement("div",{className:"container"},r.a.createElement(d,{items:this.state.items,onDelete:this.handleDelete,formatNum:this.formatNumber})))}},{key:"formatNumber",value:function(e,t){return t=parseInt(t,10).toLocaleString("en",{style:"decimal",minimumFractionDigits:2}),e?"inc"===e?"+ ".concat(t):"- ".concat(t):t}}]),a}(n.Component);i.a.render(r.a.createElement(y,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.4ab60b90.chunk.js.map