goog.provide('testproj');
goog.require('cljs.core');
goog.require('domina.css');
goog.require('domina');
goog.require('domina.events');
goog.require('domina');
goog.require('domina.events');
goog.require('domina.css');
testproj.init = (function init(){
return domina.events.listen_BANG_.cljs$lang$arity$3(domina.css.sel.cljs$lang$arity$1("a.delete"),"\uFDD0'click",(function (evt){
return domina.log.cljs$lang$arity$variadic(cljs.core.array_seq([domina.events.target(evt)], 0));
}));
});
goog.exportSymbol('testproj.init', testproj.init);
