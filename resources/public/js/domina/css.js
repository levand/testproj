goog.provide('domina.css');
goog.require('cljs.core');
goog.require('goog.dom.query');
goog.require('goog.dom');
goog.require('domina');
domina.css.root_element = (function root_element(){
return (goog.dom.getElementsByTagNameAndClass("html")[0]);
});
/**
* Returns content based on a css selector expression. Takes an optional content as a base; if none is given, uses the HTML element as a base.
*/
domina.css.sel = (function() {
var sel = null;
var sel__1 = (function (expr){
return sel.cljs$lang$arity$2(domina.css.root_element(),expr);
});
var sel__2 = (function (base,expr){
if((void 0 === domina.css.t11331))
{
/**
* @constructor
*/
domina.css.t11331 = (function (expr,base,sel,meta11332){
this.expr = expr;
this.base = base;
this.sel = sel;
this.meta11332 = meta11332;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.css.t11331.cljs$lang$type = true;
domina.css.t11331.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("domina.css/t11331");
});
domina.css.t11331.prototype.domina$DomContent$ = true;
domina.css.t11331.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var this__11334 = this;
return cljs.core.mapcat.cljs$lang$arity$2((function (p1__11322_SHARP_){
return domina.normalize_seq(goog.dom.query(this__11334.expr,p1__11322_SHARP_));
}),domina.nodes(this__11334.base));
});
domina.css.t11331.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var this__11335 = this;
return cljs.core.first(cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.mapcat.cljs$lang$arity$2((function (p1__11323_SHARP_){
return domina.normalize_seq(goog.dom.query(this__11335.expr,p1__11323_SHARP_));
}),domina.nodes(this__11335.base))));
});
domina.css.t11331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11333){
var this__11336 = this;
return this__11336.meta11332;
});
domina.css.t11331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11333,meta11332){
var this__11337 = this;
return (new domina.css.t11331(this__11337.expr,this__11337.base,this__11337.sel,meta11332));
});
domina.css.t11331;
} else
{}
return (new domina.css.t11331(expr,base,sel,null));
});
sel = function(base,expr){
switch(arguments.length){
case 1:
return sel__1.call(this,base);
case 2:
return sel__2.call(this,base,expr);
}
throw('Invalid arity: ' + arguments.length);
};
sel.cljs$lang$arity$1 = sel__1;
sel.cljs$lang$arity$2 = sel__2;
return sel;
})()
;
