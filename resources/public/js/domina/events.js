goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = {};
domina.events.prevent_default = (function prevent_default(evt){
if((function (){var and__3822__auto____10679 = evt;
if(and__3822__auto____10679)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3822__auto____10679;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__2370__auto____10680 = (((evt == null))?null:evt);
return (function (){var or__3824__auto____10681 = (domina.events.prevent_default[goog.typeOf(x__2370__auto____10680)]);
if(or__3824__auto____10681)
{return or__3824__auto____10681;
} else
{var or__3824__auto____10682 = (domina.events.prevent_default["_"]);
if(or__3824__auto____10682)
{return or__3824__auto____10682;
} else
{throw cljs.core.missing_protocol("Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){
if((function (){var and__3822__auto____10687 = evt;
if(and__3822__auto____10687)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3822__auto____10687;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__2370__auto____10688 = (((evt == null))?null:evt);
return (function (){var or__3824__auto____10689 = (domina.events.stop_propagation[goog.typeOf(x__2370__auto____10688)]);
if(or__3824__auto____10689)
{return or__3824__auto____10689;
} else
{var or__3824__auto____10690 = (domina.events.stop_propagation["_"]);
if(or__3824__auto____10690)
{return or__3824__auto____10690;
} else
{throw cljs.core.missing_protocol("Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){
if((function (){var and__3822__auto____10695 = evt;
if(and__3822__auto____10695)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3822__auto____10695;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__2370__auto____10696 = (((evt == null))?null:evt);
return (function (){var or__3824__auto____10697 = (domina.events.target[goog.typeOf(x__2370__auto____10696)]);
if(or__3824__auto____10697)
{return or__3824__auto____10697;
} else
{var or__3824__auto____10698 = (domina.events.target["_"]);
if(or__3824__auto____10698)
{return or__3824__auto____10698;
} else
{throw cljs.core.missing_protocol("Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){
if((function (){var and__3822__auto____10703 = evt;
if(and__3822__auto____10703)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3822__auto____10703;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__2370__auto____10704 = (((evt == null))?null:evt);
return (function (){var or__3824__auto____10705 = (domina.events.current_target[goog.typeOf(x__2370__auto____10704)]);
if(or__3824__auto____10705)
{return or__3824__auto____10705;
} else
{var or__3824__auto____10706 = (domina.events.current_target["_"]);
if(or__3824__auto____10706)
{return or__3824__auto____10706;
} else
{throw cljs.core.missing_protocol("Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){
if((function (){var and__3822__auto____10711 = evt;
if(and__3822__auto____10711)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3822__auto____10711;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__2370__auto____10712 = (((evt == null))?null:evt);
return (function (){var or__3824__auto____10713 = (domina.events.event_type[goog.typeOf(x__2370__auto____10712)]);
if(or__3824__auto____10713)
{return or__3824__auto____10713;
} else
{var or__3824__auto____10714 = (domina.events.event_type["_"]);
if(or__3824__auto____10714)
{return or__3824__auto____10714;
} else
{throw cljs.core.missing_protocol("Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){
if((function (){var and__3822__auto____10719 = evt;
if(and__3822__auto____10719)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3822__auto____10719;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__2370__auto____10720 = (((evt == null))?null:evt);
return (function (){var or__3824__auto____10721 = (domina.events.raw_event[goog.typeOf(x__2370__auto____10720)]);
if(or__3824__auto____10721)
{return or__3824__auto____10721;
} else
{var or__3824__auto____10722 = (domina.events.raw_event["_"]);
if(or__3824__auto____10722)
{return or__3824__auto____10722;
} else
{throw cljs.core.missing_protocol("Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.builtin_events = cljs.core.set(cljs.core.map.cljs$lang$arity$2(cljs.core.keyword,goog.object.getValues(goog.events.EventType)));
domina.events.root_element = window.document.documentElement;
domina.events.find_builtin_type = (function find_builtin_type(evt_type){
if(cljs.core.contains_QMARK_(domina.events.builtin_events,evt_type))
{return cljs.core.name(evt_type);
} else
{return evt_type;
}
});
domina.events.create_listener_function = (function create_listener_function(f){
return (function (evt){
(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((function (){if((void 0 === domina.events.t10739))
{
/**
* @constructor
*/
domina.events.t10739 = (function (evt,f,create_listener_function,meta10740){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta10740 = meta10740;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t10739.cljs$lang$type = true;
domina.events.t10739.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("domina.events/t10739");
});
domina.events.t10739.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var this__10742 = this;
var temp__3971__auto____10743 = (this__10742.evt[k]);
if(cljs.core.truth_(temp__3971__auto____10743))
{var val__10744 = temp__3971__auto____10743;
return val__10744;
} else
{return (this__10742.evt[cljs.core.name(k)]);
}
});
domina.events.t10739.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var this__10745 = this;
var or__3824__auto____10746 = o.cljs$core$ILookup$_lookup$arity$2(o,k);
if(cljs.core.truth_(or__3824__auto____10746))
{return or__3824__auto____10746;
} else
{return not_found;
}
});
domina.events.t10739.prototype.domina$events$Event$ = true;
domina.events.t10739.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var this__10747 = this;
return this__10747.evt.preventDefault();
});
domina.events.t10739.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var this__10748 = this;
return this__10748.evt.stopPropagation();
});
domina.events.t10739.prototype.domina$events$Event$target$arity$1 = (function (_){
var this__10749 = this;
return this__10749.evt.target;
});
domina.events.t10739.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var this__10750 = this;
return this__10750.evt.currentTarget;
});
domina.events.t10739.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var this__10751 = this;
return this__10751.evt.type;
});
domina.events.t10739.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var this__10752 = this;
return this__10752.evt;
});
domina.events.t10739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10741){
var this__10753 = this;
return this__10753.meta10740;
});
domina.events.t10739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10741,meta10740){
var this__10754 = this;
return (new domina.events.t10739(this__10754.evt,this__10754.f,this__10754.create_listener_function,meta10740));
});
domina.events.t10739;
} else
{}
return (new domina.events.t10739(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if((void 0 === domina.events.t10739))
{
/**
* @constructor
*/
domina.events.t10739 = (function (evt,f,create_listener_function,meta10740){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta10740 = meta10740;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t10739.cljs$lang$type = true;
domina.events.t10739.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("domina.events/t10739");
});
domina.events.t10739.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var this__10742 = this;
var temp__3971__auto____10743 = (this__10742.evt[k]);
if(cljs.core.truth_(temp__3971__auto____10743))
{var val__10744 = temp__3971__auto____10743;
return val__10744;
} else
{return (this__10742.evt[cljs.core.name(k)]);
}
});
domina.events.t10739.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var this__10745 = this;
var or__3824__auto____10746 = o.cljs$core$ILookup$_lookup$arity$2(o,k);
if(cljs.core.truth_(or__3824__auto____10746))
{return or__3824__auto____10746;
} else
{return not_found;
}
});
domina.events.t10739.prototype.domina$events$Event$ = true;
domina.events.t10739.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var this__10747 = this;
return this__10747.evt.preventDefault();
});
domina.events.t10739.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var this__10748 = this;
return this__10748.evt.stopPropagation();
});
domina.events.t10739.prototype.domina$events$Event$target$arity$1 = (function (_){
var this__10749 = this;
return this__10749.evt.target;
});
domina.events.t10739.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var this__10750 = this;
return this__10750.evt.currentTarget;
});
domina.events.t10739.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var this__10751 = this;
return this__10751.evt.type;
});
domina.events.t10739.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var this__10752 = this;
return this__10752.evt;
});
domina.events.t10739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10741){
var this__10753 = this;
return this__10753.meta10740;
});
domina.events.t10739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10741,meta10740){
var this__10754 = this;
return (new domina.events.t10739(this__10754.evt,this__10754.f,this__10754.create_listener_function,meta10740));
});
domina.events.t10739;
} else
{}
return (new domina.events.t10739(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){
var f__10764 = domina.events.create_listener_function(listener);
var t__10765 = domina.events.find_builtin_type(type);
return cljs.core.doall.cljs$lang$arity$1((function (){var iter__2469__auto____10772 = (function iter__10766(s__10767){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10767__10770 = s__10767;
while(true){
if(cljs.core.seq(s__10767__10770))
{var node__10771 = cljs.core.first(s__10767__10770);
return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node__10771,t__10765,f__10764,capture):goog.events.listen(node__10771,t__10765,f__10764,capture)),iter__10766(cljs.core.rest(s__10767__10770)));
} else
{return null;
}
break;
}
}),null));
});
return (iter__2469__auto____10772.cljs$lang$arity$1 ? iter__2469__auto____10772.cljs$lang$arity$1(domina.nodes(content)) : iter__2469__auto____10772.call(null,domina.nodes(content)));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){
return listen_BANG_.cljs$lang$arity$3(domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_(content,type,listener,false,false);
});
listen_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,content,type);
case 3:
return listen_BANG___3.call(this,content,type,listener);
}
throw('Invalid arity: ' + arguments.length);
};
listen_BANG_.cljs$lang$arity$2 = listen_BANG___2;
listen_BANG_.cljs$lang$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_BANG_ = (function() {
var capture_BANG_ = null;
var capture_BANG___2 = (function (type,listener){
return capture_BANG_.cljs$lang$arity$3(domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_(content,type,listener,true,false);
});
capture_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_BANG___2.call(this,content,type);
case 3:
return capture_BANG___3.call(this,content,type,listener);
}
throw('Invalid arity: ' + arguments.length);
};
capture_BANG_.cljs$lang$arity$2 = capture_BANG___2;
capture_BANG_.cljs$lang$arity$3 = capture_BANG___3;
return capture_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_once_BANG_ = (function() {
var listen_once_BANG_ = null;
var listen_once_BANG___2 = (function (type,listener){
return listen_once_BANG_.cljs$lang$arity$3(domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_(content,type,listener,false,true);
});
listen_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_once_BANG___2.call(this,content,type);
case 3:
return listen_once_BANG___3.call(this,content,type,listener);
}
throw('Invalid arity: ' + arguments.length);
};
listen_once_BANG_.cljs$lang$arity$2 = listen_once_BANG___2;
listen_once_BANG_.cljs$lang$arity$3 = listen_once_BANG___3;
return listen_once_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_once_BANG_ = (function() {
var capture_once_BANG_ = null;
var capture_once_BANG___2 = (function (type,listener){
return capture_once_BANG_.cljs$lang$arity$3(domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_(content,type,listener,true,true);
});
capture_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_once_BANG___2.call(this,content,type);
case 3:
return capture_once_BANG___3.call(this,content,type,listener);
}
throw('Invalid arity: ' + arguments.length);
};
capture_once_BANG_.cljs$lang$arity$2 = capture_once_BANG___2;
capture_once_BANG_.cljs$lang$arity$3 = capture_once_BANG___3;
return capture_once_BANG_;
})()
;
/**
* Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
*/
domina.events.unlisten_BANG_ = (function() {
var unlisten_BANG_ = null;
var unlisten_BANG___0 = (function (){
return unlisten_BANG_.cljs$lang$arity$1(domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){
var G__10780__10781 = cljs.core.seq(domina.nodes(content));
if(G__10780__10781)
{var node__10782 = cljs.core.first(G__10780__10781);
var G__10780__10783 = G__10780__10781;
while(true){
goog.events.removeAll(node__10782);
var temp__3974__auto____10784 = cljs.core.next(G__10780__10783);
if(temp__3974__auto____10784)
{var G__10780__10785 = temp__3974__auto____10784;
{
var G__10787 = cljs.core.first(G__10780__10785);
var G__10788 = G__10780__10785;
node__10782 = G__10787;
G__10780__10783 = G__10788;
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
var unlisten_BANG___2 = (function (content,type){
var type__10786 = domina.events.find_builtin_type(type);
return goog.events.removeAll(domina.events.node,type__10786);
});
unlisten_BANG_ = function(content,type){
switch(arguments.length){
case 0:
return unlisten_BANG___0.call(this);
case 1:
return unlisten_BANG___1.call(this,content);
case 2:
return unlisten_BANG___2.call(this,content,type);
}
throw('Invalid arity: ' + arguments.length);
};
unlisten_BANG_.cljs$lang$arity$0 = unlisten_BANG___0;
unlisten_BANG_.cljs$lang$arity$1 = unlisten_BANG___1;
unlisten_BANG_.cljs$lang$arity$2 = unlisten_BANG___2;
return unlisten_BANG_;
})()
;
/**
* Returns a seq of a node and its ancestors, starting with the document root.
*/
domina.events.ancestor_nodes = (function() {
var ancestor_nodes = null;
var ancestor_nodes__1 = (function (n){
return ancestor_nodes.cljs$lang$arity$2(n,cljs.core.PersistentVector.fromArray([n], true));
});
var ancestor_nodes__2 = (function (n,so_far){
while(true){
var temp__3971__auto____10791 = n.parentNode;
if(cljs.core.truth_(temp__3971__auto____10791))
{var parent__10792 = temp__3971__auto____10791;
{
var G__10793 = parent__10792;
var G__10794 = cljs.core.cons(parent__10792,so_far);
n = G__10793;
so_far = G__10794;
continue;
}
} else
{return so_far;
}
break;
}
});
ancestor_nodes = function(n,so_far){
switch(arguments.length){
case 1:
return ancestor_nodes__1.call(this,n);
case 2:
return ancestor_nodes__2.call(this,n,so_far);
}
throw('Invalid arity: ' + arguments.length);
};
ancestor_nodes.cljs$lang$arity$1 = ancestor_nodes__1;
ancestor_nodes.cljs$lang$arity$2 = ancestor_nodes__2;
return ancestor_nodes;
})()
;
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){
var ancestors__10808 = domina.events.ancestor_nodes.cljs$lang$arity$1(domina.single_node(source));
var G__10809__10810 = cljs.core.seq(ancestors__10808);
if(G__10809__10810)
{var n__10811 = cljs.core.first(G__10809__10810);
var G__10809__10812 = G__10809__10810;
while(true){
if(cljs.core.truth_(n__10811.propagationStopped))
{} else
{evt.currentTarget = n__10811;
goog.events.fireListeners(n__10811,evt.type,true,evt);
}
var temp__3974__auto____10813 = cljs.core.next(G__10809__10812);
if(temp__3974__auto____10813)
{var G__10809__10814 = temp__3974__auto____10813;
{
var G__10821 = cljs.core.first(G__10809__10814);
var G__10822 = G__10809__10814;
n__10811 = G__10821;
G__10809__10812 = G__10822;
continue;
}
} else
{}
break;
}
} else
{}
var G__10815__10816 = cljs.core.seq(cljs.core.reverse(ancestors__10808));
if(G__10815__10816)
{var n__10817 = cljs.core.first(G__10815__10816);
var G__10815__10818 = G__10815__10816;
while(true){
if(cljs.core.truth_(n__10817.propagationStopped))
{} else
{evt.currentTarget = n__10817;
goog.events.fireListeners(n__10817,evt.type,false,evt);
}
var temp__3974__auto____10819 = cljs.core.next(G__10815__10818);
if(temp__3974__auto____10819)
{var G__10815__10820 = temp__3974__auto____10819;
{
var G__10823 = cljs.core.first(G__10815__10820);
var G__10824 = G__10815__10820;
n__10817 = G__10823;
G__10815__10818 = G__10824;
continue;
}
} else
{}
break;
}
} else
{}
return evt.returnValue_;
});
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
*/
domina.events.dispatch_event_target_BANG_ = (function dispatch_event_target_BANG_(source,evt){
return goog.events.dispatchEvent(source,evt);
});
/**
* Tests whether the object is a goog.event.EventTarget
*/
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){
var and__3822__auto____10826 = o.getParentEventTarget;
if(cljs.core.truth_(and__3822__auto____10826))
{return o.dispatchEvent;
} else
{return and__3822__auto____10826;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){
return dispatch_BANG_.cljs$lang$arity$3(domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){
var evt__10847 = (new goog.events.Event(domina.events.find_builtin_type(type)));
var G__10848__10849 = cljs.core.seq(evt_map);
if(G__10848__10849)
{var G__10851__10853 = cljs.core.first(G__10848__10849);
var vec__10852__10854 = G__10851__10853;
var k__10855 = cljs.core.nth.cljs$lang$arity$3(vec__10852__10854,0,null);
var v__10856 = cljs.core.nth.cljs$lang$arity$3(vec__10852__10854,1,null);
var G__10848__10857 = G__10848__10849;
var G__10851__10858 = G__10851__10853;
var G__10848__10859 = G__10848__10857;
while(true){
var vec__10860__10861 = G__10851__10858;
var k__10862 = cljs.core.nth.cljs$lang$arity$3(vec__10860__10861,0,null);
var v__10863 = cljs.core.nth.cljs$lang$arity$3(vec__10860__10861,1,null);
var G__10848__10864 = G__10848__10859;
(evt__10847[k__10862] = v__10863);
var temp__3974__auto____10865 = cljs.core.next(G__10848__10864);
if(temp__3974__auto____10865)
{var G__10848__10866 = temp__3974__auto____10865;
{
var G__10867 = cljs.core.first(G__10848__10866);
var G__10868 = G__10848__10866;
G__10851__10858 = G__10867;
G__10848__10859 = G__10868;
continue;
}
} else
{}
break;
}
} else
{}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_(source)))
{return domina.events.dispatch_event_target_BANG_(source,evt__10847);
} else
{return domina.events.dispatch_browser_BANG_(source,evt__10847);
}
});
dispatch_BANG_ = function(source,type,evt_map){
switch(arguments.length){
case 2:
return dispatch_BANG___2.call(this,source,type);
case 3:
return dispatch_BANG___3.call(this,source,type,evt_map);
}
throw('Invalid arity: ' + arguments.length);
};
dispatch_BANG_.cljs$lang$arity$2 = dispatch_BANG___2;
dispatch_BANG_.cljs$lang$arity$3 = dispatch_BANG___3;
return dispatch_BANG_;
})()
;
/**
* Given a listener key, removes the listener.
*/
domina.events.unlisten_by_key_BANG_ = (function unlisten_by_key_BANG_(key){
return goog.events.unlistenByKey(key);
});
/**
* Returns a sequence of event listeners for all the nodes in the
* content of a given type.
*/
domina.events.get_listeners = (function get_listeners(content,type){
var type__10871 = domina.events.find_builtin_type(type);
return cljs.core.mapcat.cljs$lang$arity$2((function (p1__10869_SHARP_){
return goog.events.getListeners(p1__10869_SHARP_,type__10871,false);
}),domina.nodes(content));
});
