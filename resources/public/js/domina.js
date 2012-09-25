goog.provide('domina');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper__10872 = cljs.core.PersistentVector.fromArray([1,"<select multiple='multiple'>","</select>"], true);
var table_section_wrapper__10873 = cljs.core.PersistentVector.fromArray([1,"<table>","</table>"], true);
var cell_wrapper__10874 = cljs.core.PersistentVector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"], true);
domina.wrap_map = cljs.core.ObjMap.fromObject(["col","\uFDD0'default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],{"col":cljs.core.PersistentVector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], true),"\uFDD0'default":cljs.core.PersistentVector.fromArray([0,"",""], true),"tfoot":table_section_wrapper__10873,"caption":table_section_wrapper__10873,"optgroup":opt_wrapper__10872,"legend":cljs.core.PersistentVector.fromArray([1,"<fieldset>","</fieldset>"], true),"area":cljs.core.PersistentVector.fromArray([1,"<map>","</map>"], true),"td":cell_wrapper__10874,"thead":table_section_wrapper__10873,"th":cell_wrapper__10874,"option":opt_wrapper__10872,"tbody":table_section_wrapper__10873,"tr":cljs.core.PersistentVector.fromArray([2,"<table><tbody>","</tbody></table>"], true),"colgroup":table_section_wrapper__10873});
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html){
var no_tbody_QMARK___10887 = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));
var tbody__10891 = (((function (){var and__3822__auto____10888 = cljs.core._EQ_.cljs$lang$arity$2(domina.tag_name,"table");
if(and__3822__auto____10888)
{return no_tbody_QMARK___10887;
} else
{return and__3822__auto____10888;
}
})())?(function (){var and__3822__auto____10889 = div.firstChild;
if(cljs.core.truth_(and__3822__auto____10889))
{return div.firstChild.childNodes;
} else
{return and__3822__auto____10889;
}
})():(((function (){var and__3822__auto____10890 = cljs.core._EQ_.cljs$lang$arity$2(domina.start_wrap,"<table>");
if(and__3822__auto____10890)
{return no_tbody_QMARK___10887;
} else
{return and__3822__auto____10890;
}
})())?divchildNodes:cljs.core.PersistentVector.EMPTY));
var G__10892__10893 = cljs.core.seq(tbody__10891);
if(G__10892__10893)
{var child__10894 = cljs.core.first(G__10892__10893);
var G__10892__10895 = G__10892__10893;
while(true){
if((function (){var and__3822__auto____10896 = cljs.core._EQ_.cljs$lang$arity$2(child__10894.nodeName,"tbody");
if(and__3822__auto____10896)
{return cljs.core._EQ_.cljs$lang$arity$2(child__10894.childNodes.length,0);
} else
{return and__3822__auto____10896;
}
})())
{child__10894.parentNode.removeChild(child__10894);
} else
{}
var temp__3974__auto____10897 = cljs.core.next(G__10892__10895);
if(temp__3974__auto____10897)
{var G__10892__10898 = temp__3974__auto____10897;
{
var G__10899 = cljs.core.first(G__10892__10898);
var G__10900 = G__10892__10898;
child__10894 = G__10899;
G__10892__10895 = G__10900;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first(cljs.core.re_find(domina.re_leading_whitespace,html))),div.firstChild);
});
domina.html_to_dom = (function html_to_dom(html){
var html__10914 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name__10915 = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__10914)))].join('').toLowerCase();
var vec__10913__10916 = cljs.core._lookup.cljs$lang$arity$3(domina.wrap_map,tag_name__10915,(new cljs.core.Keyword("\uFDD0'default")).call(null,domina.wrap_map));
var depth__10917 = cljs.core.nth.cljs$lang$arity$3(vec__10913__10916,0,null);
var start_wrap__10918 = cljs.core.nth.cljs$lang$arity$3(vec__10913__10916,1,null);
var end_wrap__10919 = cljs.core.nth.cljs$lang$arity$3(vec__10913__10916,2,null);
var div__10923 = (function (){var wrapper__10921 = (function (){var div__10920 = document.createElement("div");
div__10920.innerHTML = [cljs.core.str(start_wrap__10918),cljs.core.str(html__10914),cljs.core.str(end_wrap__10919)].join('');
return div__10920;
})();
var level__10922 = depth__10917;
while(true){
if((level__10922 > 0))
{{
var G__10925 = wrapper__10921.lastChild;
var G__10926 = (level__10922 - 1);
wrapper__10921 = G__10925;
level__10922 = G__10926;
continue;
}
} else
{return wrapper__10921;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_(div__10923,html__10914);
} else
{}
if(cljs.core.truth_((function (){var and__3822__auto____10924 = cljs.core.not(domina.support.leading_whitespace_QMARK_);
if(and__3822__auto____10924)
{return cljs.core.re_find(domina.re_leading_whitespace,html__10914);
} else
{return and__3822__auto____10924;
}
})()))
{domina.restore_leading_whitespace_BANG_(div__10923,html__10914);
} else
{}
return div__10923.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find(domina.re_html,s)))
{return domina.html_to_dom(s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if((function (){var and__3822__auto____10931 = content;
if(and__3822__auto____10931)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3822__auto____10931;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__2370__auto____10932 = (((content == null))?null:content);
return (function (){var or__3824__auto____10933 = (domina.nodes[goog.typeOf(x__2370__auto____10932)]);
if(or__3824__auto____10933)
{return or__3824__auto____10933;
} else
{var or__3824__auto____10934 = (domina.nodes["_"]);
if(or__3824__auto____10934)
{return or__3824__auto____10934;
} else
{throw cljs.core.missing_protocol("DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if((function (){var and__3822__auto____10939 = nodeseq;
if(and__3822__auto____10939)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3822__auto____10939;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__2370__auto____10940 = (((nodeseq == null))?null:nodeseq);
return (function (){var or__3824__auto____10941 = (domina.single_node[goog.typeOf(x__2370__auto____10940)]);
if(or__3824__auto____10941)
{return or__3824__auto____10941;
} else
{var or__3824__auto____10942 = (domina.single_node["_"]);
if(or__3824__auto____10942)
{return or__3824__auto____10942;
} else
{throw cljs.core.missing_protocol("DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){
if(cljs.core.truth_((function (){var and__3822__auto____10944 = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__3822__auto____10944))
{return !(cljs.core._EQ_.cljs$lang$arity$2(window.console,undefined));
} else
{return and__3822__auto____10944;
}
})()))
{return console.log(cljs.core.apply.cljs$lang$arity$2(cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;
if (goog.isDef(var_args)) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log_debug__delegate.call(this, mesg);
};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__10945){
var mesg = cljs.core.seq(arglist__10945);;
return log_debug__delegate(mesg);
});
log_debug.cljs$lang$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){
if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.cljs$lang$arity$2(cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;
if (goog.isDef(var_args)) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log__delegate.call(this, mesg);
};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__10946){
var mesg = cljs.core.seq(arglist__10946);;
return log__delegate(mesg);
});
log.cljs$lang$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){
return goog.dom.getElement(cljs.core.name(id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){
if((void 0 === domina.t10954))
{
/**
* @constructor
*/
domina.t10954 = (function (class_name,by_class,meta10955){
this.class_name = class_name;
this.by_class = by_class;
this.meta10955 = meta10955;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.t10954.cljs$lang$type = true;
domina.t10954.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("domina/t10954");
});
domina.t10954.prototype.domina$DomContent$ = true;
domina.t10954.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var this__10957 = this;
return domina.normalize_seq(goog.dom.getElementsByClass(cljs.core.name(this__10957.class_name)));
});
domina.t10954.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var this__10958 = this;
return domina.normalize_seq(goog.dom.getElementByClass(cljs.core.name(this__10958.class_name)));
});
domina.t10954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10956){
var this__10959 = this;
return this__10959.meta10955;
});
domina.t10954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10956,meta10955){
var this__10960 = this;
return (new domina.t10954(this__10960.class_name,this__10960.by_class,meta10955));
});
domina.t10954;
} else
{}
return (new domina.t10954(class_name,by_class,null));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){
return cljs.core.doall.cljs$lang$arity$1(cljs.core.mapcat.cljs$lang$arity$2(goog.dom.getChildren,domina.nodes(content)));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){
return cljs.core.map.cljs$lang$arity$2((function (p1__10961_SHARP_){
return p1__10961_SHARP_.cloneNode(true);
}),domina.nodes(content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){
domina.apply_with_cloning(goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning((function (p1__10962_SHARP_,p2__10963_SHARP_){
return goog.dom.insertChildAt(p1__10962_SHARP_,p2__10963_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){
domina.insert_BANG_(parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){
domina.apply_with_cloning((function (p1__10965_SHARP_,p2__10964_SHARP_){
return goog.dom.insertSiblingBefore(p2__10964_SHARP_,p1__10965_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning((function (p1__10967_SHARP_,p2__10966_SHARP_){
return goog.dom.insertSiblingAfter(p2__10966_SHARP_,p1__10967_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning((function (p1__10969_SHARP_,p2__10968_SHARP_){
return goog.dom.replaceNode(p2__10968_SHARP_,p1__10969_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){
return cljs.core.doall.cljs$lang$arity$1(cljs.core.map.cljs$lang$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){
return cljs.core.dorun.cljs$lang$arity$1(cljs.core.map.cljs$lang$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){
cljs.core.dorun.cljs$lang$arity$1(cljs.core.map.cljs$lang$arity$2(goog.dom.removeChildren,domina.nodes(content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){
var s__10971 = goog.style.getStyle(domina.single_node(content),cljs.core.name(name));
if(cljs.core.truth_(clojure.string.blank_QMARK_(s__10971)))
{return null;
} else
{return s__10971;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){
return domina.single_node(content).getAttribute(cljs.core.name(name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){
var G__10978__10979 = cljs.core.seq(domina.nodes(content));
if(G__10978__10979)
{var n__10980 = cljs.core.first(G__10978__10979);
var G__10978__10981 = G__10978__10979;
while(true){
goog.style.setStyle(n__10980,cljs.core.name(name),cljs.core.apply.cljs$lang$arity$2(cljs.core.str,value));
var temp__3974__auto____10982 = cljs.core.next(G__10978__10981);
if(temp__3974__auto____10982)
{var G__10978__10983 = temp__3974__auto____10982;
{
var G__10984 = cljs.core.first(G__10978__10983);
var G__10985 = G__10978__10983;
n__10980 = G__10984;
G__10978__10981 = G__10985;
continue;
}
} else
{}
break;
}
} else
{}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;
if (goog.isDef(var_args)) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_style_BANG___delegate.call(this, content, name, value);
};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__10986){
var content = cljs.core.first(arglist__10986);
var name = cljs.core.first(cljs.core.next(arglist__10986));
var value = cljs.core.rest(cljs.core.next(arglist__10986));
return set_style_BANG___delegate(content, name, value);
});
set_style_BANG_.cljs$lang$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){
var G__10993__10994 = cljs.core.seq(domina.nodes(content));
if(G__10993__10994)
{var n__10995 = cljs.core.first(G__10993__10994);
var G__10993__10996 = G__10993__10994;
while(true){
n__10995.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$lang$arity$2(cljs.core.str,value));
var temp__3974__auto____10997 = cljs.core.next(G__10993__10996);
if(temp__3974__auto____10997)
{var G__10993__10998 = temp__3974__auto____10997;
{
var G__10999 = cljs.core.first(G__10993__10998);
var G__11000 = G__10993__10998;
n__10995 = G__10999;
G__10993__10996 = G__11000;
continue;
}
} else
{}
break;
}
} else
{}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;
if (goog.isDef(var_args)) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_attr_BANG___delegate.call(this, content, name, value);
};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__11001){
var content = cljs.core.first(arglist__11001);
var name = cljs.core.first(cljs.core.next(arglist__11001));
var value = cljs.core.rest(cljs.core.next(arglist__11001));
return set_attr_BANG___delegate(content, name, value);
});
set_attr_BANG_.cljs$lang$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){
var G__11008__11009 = cljs.core.seq(domina.nodes(content));
if(G__11008__11009)
{var n__11010 = cljs.core.first(G__11008__11009);
var G__11008__11011 = G__11008__11009;
while(true){
n__11010.removeAttribute(cljs.core.name(name));
var temp__3974__auto____11012 = cljs.core.next(G__11008__11011);
if(temp__3974__auto____11012)
{var G__11008__11013 = temp__3974__auto____11012;
{
var G__11014 = cljs.core.first(G__11008__11013);
var G__11015 = G__11008__11013;
n__11010 = G__11014;
G__11008__11011 = G__11015;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){
return cljs.core.reduce.cljs$lang$arity$3((function (acc,pair){
var vec__11021__11022 = pair.split(/\s*:\s*/);
var k__11023 = cljs.core.nth.cljs$lang$arity$3(vec__11021__11022,0,null);
var v__11024 = cljs.core.nth.cljs$lang$arity$3(vec__11021__11022,1,null);
if(cljs.core.truth_((function (){var and__3822__auto____11025 = k__11023;
if(cljs.core.truth_(and__3822__auto____11025))
{return v__11024;
} else
{return and__3822__auto____11025;
}
})()))
{return cljs.core.assoc.cljs$lang$arity$3(acc,cljs.core.keyword.cljs$lang$arity$1(k__11023.toLowerCase()),v__11024);
} else
{return acc;
}
}),cljs.core.ObjMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__11028 = domina.attr(content,"style");
if(cljs.core.string_QMARK_(style__11028))
{return domina.parse_style_attributes(style__11028);
} else
{if(cljs.core.truth_(style__11028.cssText))
{return domina.parse_style_attributes(style__11028.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__11034 = domina.single_node(content);
var attrs__11035 = node__11034.attributes;
return cljs.core.reduce.cljs$lang$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$lang$arity$2((function (p1__11026_SHARP_){
var attr__11036 = attrs__11035.item(p1__11026_SHARP_);
var value__11037 = attr__11036.nodeValue;
if((function (){var and__3822__auto____11038 = cljs.core.not_EQ_.cljs$lang$arity$2(null,value__11037);
if(and__3822__auto____11038)
{return cljs.core.not_EQ_.cljs$lang$arity$2("",value__11037);
} else
{return and__3822__auto____11038;
}
})())
{return cljs.core.PersistentArrayMap.fromArrays([cljs.core.keyword.cljs$lang$arity$1(attr__11036.nodeName.toLowerCase())],[attr__11036.nodeValue]);
} else
{return null;
}
}),cljs.core.range.cljs$lang$arity$1(attrs__11035.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__11058__11059 = cljs.core.seq(styles);
if(G__11058__11059)
{var G__11061__11063 = cljs.core.first(G__11058__11059);
var vec__11062__11064 = G__11061__11063;
var name__11065 = cljs.core.nth.cljs$lang$arity$3(vec__11062__11064,0,null);
var value__11066 = cljs.core.nth.cljs$lang$arity$3(vec__11062__11064,1,null);
var G__11058__11067 = G__11058__11059;
var G__11061__11068 = G__11061__11063;
var G__11058__11069 = G__11058__11067;
while(true){
var vec__11070__11071 = G__11061__11068;
var name__11072 = cljs.core.nth.cljs$lang$arity$3(vec__11070__11071,0,null);
var value__11073 = cljs.core.nth.cljs$lang$arity$3(vec__11070__11071,1,null);
var G__11058__11074 = G__11058__11069;
domina.set_style_BANG_.cljs$lang$arity$variadic(content,name__11072,cljs.core.array_seq([value__11073], 0));
var temp__3974__auto____11075 = cljs.core.next(G__11058__11074);
if(temp__3974__auto____11075)
{var G__11058__11076 = temp__3974__auto____11075;
{
var G__11077 = cljs.core.first(G__11058__11076);
var G__11078 = G__11058__11076;
G__11061__11068 = G__11077;
G__11058__11069 = G__11078;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Sets the specified CSS styles fpr each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){
var G__11098__11099 = cljs.core.seq(attrs);
if(G__11098__11099)
{var G__11101__11103 = cljs.core.first(G__11098__11099);
var vec__11102__11104 = G__11101__11103;
var name__11105 = cljs.core.nth.cljs$lang$arity$3(vec__11102__11104,0,null);
var value__11106 = cljs.core.nth.cljs$lang$arity$3(vec__11102__11104,1,null);
var G__11098__11107 = G__11098__11099;
var G__11101__11108 = G__11101__11103;
var G__11098__11109 = G__11098__11107;
while(true){
var vec__11110__11111 = G__11101__11108;
var name__11112 = cljs.core.nth.cljs$lang$arity$3(vec__11110__11111,0,null);
var value__11113 = cljs.core.nth.cljs$lang$arity$3(vec__11110__11111,1,null);
var G__11098__11114 = G__11098__11109;
domina.set_attr_BANG_.cljs$lang$arity$variadic(content,name__11112,cljs.core.array_seq([value__11113], 0));
var temp__3974__auto____11115 = cljs.core.next(G__11098__11114);
if(temp__3974__auto____11115)
{var G__11098__11116 = temp__3974__auto____11115;
{
var G__11117 = cljs.core.first(G__11098__11116);
var G__11118 = G__11098__11116;
G__11101__11108 = G__11117;
G__11098__11109 = G__11118;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.single_node(content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){
var G__11125__11126 = cljs.core.seq(domina.nodes(content));
if(G__11125__11126)
{var node__11127 = cljs.core.first(G__11125__11126);
var G__11125__11128 = G__11125__11126;
while(true){
goog.dom.classes.add(node__11127,class$);
var temp__3974__auto____11129 = cljs.core.next(G__11125__11128);
if(temp__3974__auto____11129)
{var G__11125__11130 = temp__3974__auto____11129;
{
var G__11131 = cljs.core.first(G__11125__11130);
var G__11132 = G__11125__11130;
node__11127 = G__11131;
G__11125__11128 = G__11132;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){
var G__11139__11140 = cljs.core.seq(domina.nodes(content));
if(G__11139__11140)
{var node__11141 = cljs.core.first(G__11139__11140);
var G__11139__11142 = G__11139__11140;
while(true){
goog.dom.classes.remove(node__11141,class$);
var temp__3974__auto____11143 = cljs.core.next(G__11139__11142);
if(temp__3974__auto____11143)
{var G__11139__11144 = temp__3974__auto____11143;
{
var G__11145 = cljs.core.first(G__11139__11144);
var G__11146 = G__11139__11144;
node__11141 = G__11145;
G__11139__11142 = G__11146;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){
return cljs.core.seq(goog.dom.classes.get(domina.single_node(content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){
var classes__11154 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$lang$arity$2(" ",classes):classes);
var G__11155__11156 = cljs.core.seq(domina.nodes(content));
if(G__11155__11156)
{var node__11157 = cljs.core.first(G__11155__11156);
var G__11155__11158 = G__11155__11156;
while(true){
goog.dom.classes.set(node__11157,classes__11154);
var temp__3974__auto____11159 = cljs.core.next(G__11155__11158);
if(temp__3974__auto____11159)
{var G__11155__11160 = temp__3974__auto____11159;
{
var G__11161 = cljs.core.first(G__11155__11160);
var G__11162 = G__11155__11160;
node__11157 = G__11161;
G__11155__11158 = G__11162;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){
return goog.string.trim(goog.dom.getTextContent(domina.single_node(content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){
var G__11169__11170 = cljs.core.seq(domina.nodes(content));
if(G__11169__11170)
{var node__11171 = cljs.core.first(G__11169__11170);
var G__11169__11172 = G__11169__11170;
while(true){
goog.dom.setTextContent(node__11171,value);
var temp__3974__auto____11173 = cljs.core.next(G__11169__11172);
if(temp__3974__auto____11173)
{var G__11169__11174 = temp__3974__auto____11173;
{
var G__11175 = cljs.core.first(G__11169__11174);
var G__11176 = G__11169__11174;
node__11171 = G__11175;
G__11169__11172 = G__11176;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){
return goog.dom.forms.getValue(domina.single_node(content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){
var G__11183__11184 = cljs.core.seq(domina.nodes(content));
if(G__11183__11184)
{var node__11185 = cljs.core.first(G__11183__11184);
var G__11183__11186 = G__11183__11184;
while(true){
goog.dom.forms.setValue(node__11185,value);
var temp__3974__auto____11187 = cljs.core.next(G__11183__11186);
if(temp__3974__auto____11187)
{var G__11183__11188 = temp__3974__auto____11187;
{
var G__11189 = cljs.core.first(G__11183__11188);
var G__11190 = G__11183__11188;
node__11185 = G__11189;
G__11183__11186 = G__11190;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){
return domina.single_node(content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){
return domina.append_BANG_(domina.destroy_children_BANG_(content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK___11207 = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK___11208 = cljs.core.re_find(domina.re_leading_whitespace,html_string);
var tag_name__11209 = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK___11210 = cljs.core.contains_QMARK_(domina.wrap_map,tag_name__11209);
if(cljs.core.truth_((function (){var and__3822__auto____11211 = allows_inner_html_QMARK___11207;
if(and__3822__auto____11211)
{var and__3822__auto____11213 = (function (){var or__3824__auto____11212 = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__3824__auto____11212))
{return or__3824__auto____11212;
} else
{return cljs.core.not(leading_whitespace_QMARK___11208);
}
})();
if(cljs.core.truth_(and__3822__auto____11213))
{return !(special_tag_QMARK___11210);
} else
{return and__3822__auto____11213;
}
} else
{return and__3822__auto____11211;
}
})()))
{var value__11214 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var G__11217__11218 = cljs.core.seq(domina.nodes(content));
if(G__11217__11218)
{var node__11219 = cljs.core.first(G__11217__11218);
var G__11217__11220 = G__11217__11218;
while(true){
goog.events.removeAll(node__11219);
node__11219.innerHTML = value__11214;
var temp__3974__auto____11221 = cljs.core.next(G__11217__11220);
if(temp__3974__auto____11221)
{var G__11217__11222 = temp__3974__auto____11221;
{
var G__11223 = cljs.core.first(G__11217__11222);
var G__11224 = G__11217__11222;
node__11219 = G__11223;
G__11217__11220 = G__11224;
continue;
}
} else
{}
break;
}
} else
{}
}catch (e11215){if(cljs.core.instance_QMARK_(domina.Exception,e11215))
{var e__11216 = e11215;
domina.replace_children_BANG_(content,value__11214);
} else
{if("\uFDD0'else")
{throw e11215;
} else
{}
}
}} else
{domina.replace_children_BANG_(content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){
if(cljs.core.string_QMARK_(inner_content))
{return domina.set_inner_html_BANG_(content,inner_content);
} else
{return domina.replace_children_BANG_(content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){
return get_data.cljs$lang$arity$3(node,key,false);
});
var get_data__3 = (function (node,key,bubble){
var m__11230 = domina.single_node(node).__domina_data;
var value__11231 = (cljs.core.truth_(m__11230)?cljs.core._lookup.cljs$lang$arity$3(m__11230,key,null):null);
if(cljs.core.truth_((function (){var and__3822__auto____11232 = bubble;
if(cljs.core.truth_(and__3822__auto____11232))
{return (value__11231 == null);
} else
{return and__3822__auto____11232;
}
})()))
{var temp__3974__auto____11233 = domina.single_node(node).parentNode;
if(cljs.core.truth_(temp__3974__auto____11233))
{var parent__11234 = temp__3974__auto____11233;
return get_data.cljs$lang$arity$3(parent__11234,key,true);
} else
{return null;
}
} else
{return value__11231;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw('Invalid arity: ' + arguments.length);
};
get_data.cljs$lang$arity$2 = get_data__2;
get_data.cljs$lang$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){
var m__11240 = (function (){var or__3824__auto____11239 = domina.single_node(node).__domina_data;
if(cljs.core.truth_(or__3824__auto____11239))
{return or__3824__auto____11239;
} else
{return cljs.core.ObjMap.EMPTY;
}
})();
return domina.single_node(node).__domina_data = cljs.core.assoc.cljs$lang$arity$3(m__11240,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents__11252 = domina.nodes(parent_content);
var children__11253 = domina.nodes(child_content);
var first_child__11261 = (function (){var frag__11254 = document.createDocumentFragment();
var G__11255__11256 = cljs.core.seq(children__11253);
if(G__11255__11256)
{var child__11257 = cljs.core.first(G__11255__11256);
var G__11255__11258 = G__11255__11256;
while(true){
frag__11254.appendChild(child__11257);
var temp__3974__auto____11259 = cljs.core.next(G__11255__11258);
if(temp__3974__auto____11259)
{var G__11255__11260 = temp__3974__auto____11259;
{
var G__11263 = cljs.core.first(G__11255__11260);
var G__11264 = G__11255__11260;
child__11257 = G__11263;
G__11255__11258 = G__11264;
continue;
}
} else
{}
break;
}
} else
{}
return frag__11254;
})();
var other_children__11262 = cljs.core.doall.cljs$lang$arity$1(cljs.core.repeatedly.cljs$lang$arity$2((cljs.core.count(parents__11252) - 1),(function (){
return first_child__11261.cloneNode(true);
})));
if(cljs.core.seq(parents__11252))
{(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(cljs.core.first(parents__11252),first_child__11261) : f.call(null,cljs.core.first(parents__11252),first_child__11261));
return cljs.core.doall.cljs$lang$arity$1(cljs.core.map.cljs$lang$arity$3((function (p1__11235_SHARP_,p2__11236_SHARP_){
return (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(p1__11235_SHARP_,p2__11236_SHARP_) : f.call(null,p1__11235_SHARP_,p2__11236_SHARP_));
}),cljs.core.rest(parents__11252),other_children__11262));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){
return lazy_nl_via_item.cljs$lang$arity$2(nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){
if((n < nl.length))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons(nl.item(n),lazy_nl_via_item.cljs$lang$arity$2(nl,(n + 1)));
}),null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
lazy_nl_via_item.cljs$lang$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$lang$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){
return lazy_nl_via_array_ref.cljs$lang$arity$2(nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){
if((n < nl.length))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons((nl[n]),lazy_nl_via_array_ref.cljs$lang$arity$2(nl,(n + 1)));
}),null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
lazy_nl_via_array_ref.cljs$lang$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$lang$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){
if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.cljs$lang$arity$1(nl);
} else
{return domina.lazy_nl_via_array_ref.cljs$lang$arity$1(nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){
var and__3822__auto____11266 = obj;
if(cljs.core.truth_(and__3822__auto____11266))
{return obj.length;
} else
{return and__3822__auto____11266;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){
if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__11270__11271 = list_thing;
if(G__11270__11271)
{if((function (){var or__3824__auto____11272 = (G__11270__11271.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____11272)
{return or__3824__auto____11272;
} else
{return G__11270__11271.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__11270__11271.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__11270__11271);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__11270__11271);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if("\uFDD0'default")
{return cljs.core.seq(cljs.core.PersistentVector.fromArray([list_thing], true));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__11273__11274 = content;
if(G__11273__11274)
{if((function (){var or__3824__auto____11275 = (G__11273__11274.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____11275)
{return or__3824__auto____11275;
} else
{return G__11273__11274.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__11273__11274.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__11273__11274);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__11273__11274);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if("\uFDD0'default")
{return cljs.core.seq(cljs.core.PersistentVector.fromArray([content], true));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){
if((content == null))
{return null;
} else
{if((function (){var G__11276__11277 = content;
if(G__11276__11277)
{if((function (){var or__3824__auto____11278 = (G__11276__11277.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____11278)
{return or__3824__auto____11278;
} else
{return G__11276__11277.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__11276__11277.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__11276__11277);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__11276__11277);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if("\uFDD0'default")
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){
return cljs.core.doall.cljs$lang$arity$1(domina.nodes(domina.string_to_dom(s)));
}));
(domina.single_node["string"] = (function (s){
return domina.single_node(domina.string_to_dom(s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
return domina.lazy_nodelist(nodelist);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
return nodelist.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
if((nodelist.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$lang$arity$2(nodelist,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
return nodelist.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
return domina.lazy_nodelist(nodelist);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
return nodelist.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
if((nodelist.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$lang$arity$2(nodelist,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
return nodelist.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
return domina.lazy_nodelist(coll);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
return coll.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
if((coll.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$lang$arity$2(coll,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
return coll.length;
});
} else
{}
