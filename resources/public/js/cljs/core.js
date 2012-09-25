goog.provide('cljs.core');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.string.format');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var x__6736 = (((x == null))?null:x);
if((p[goog.typeOf(x__6736)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error(["No protocol method ",proto," defined for type ",goog.typeOf(obj),": ",obj].join(""));
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return array_like.slice();
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return (new Array(size));
});
var make_array__2 = (function (type,size){
return make_array.cljs$lang$arity$1(size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw('Invalid arity: ' + arguments.length);
};
make_array.cljs$lang$arity$1 = make_array__1;
make_array.cljs$lang$arity$2 = make_array__2;
return make_array;
})()
;
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__6737__delegate = function (array,i,idxs){
return cljs.core.apply.cljs$lang$arity$3(aget,aget.cljs$lang$arity$2(array,i),idxs);
};
var G__6737 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6737__delegate.call(this, array, i, idxs);
};
G__6737.cljs$lang$maxFixedArity = 2;
G__6737.cljs$lang$applyTo = (function (arglist__6738){
var array = cljs.core.first(arglist__6738);
var i = cljs.core.first(cljs.core.next(arglist__6738));
var idxs = cljs.core.rest(cljs.core.next(arglist__6738));
return G__6737__delegate(array, i, idxs);
});
G__6737.cljs$lang$arity$variadic = G__6737__delegate;
return G__6737;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$lang$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$lang$arity$2 = aget__2;
aget.cljs$lang$arity$variadic = aget__3.cljs$lang$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.cljs$lang$arity$2(null,aseq);
});
var into_array__2 = (function (type,aseq){
return cljs.core.reduce.cljs$lang$arity$3((function (a,x){
a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw('Invalid arity: ' + arguments.length);
};
into_array.cljs$lang$arity$1 = into_array__1;
into_array.cljs$lang$arity$2 = into_array__2;
return into_array;
})()
;
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3822__auto____6823 = this$;
if(and__3822__auto____6823)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3822__auto____6823;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2370__auto____6824 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6825 = (cljs.core._invoke[goog.typeOf(x__2370__auto____6824)]);
if(or__3824__auto____6825)
{return or__3824__auto____6825;
} else
{var or__3824__auto____6826 = (cljs.core._invoke["_"]);
if(or__3824__auto____6826)
{return or__3824__auto____6826;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3822__auto____6827 = this$;
if(and__3822__auto____6827)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3822__auto____6827;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2370__auto____6828 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6829 = (cljs.core._invoke[goog.typeOf(x__2370__auto____6828)]);
if(or__3824__auto____6829)
{return or__3824__auto____6829;
} else
{var or__3824__auto____6830 = (cljs.core._invoke["_"]);
if(or__3824__auto____6830)
{return or__3824__auto____6830;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3822__auto____6831 = this$;
if(and__3822__auto____6831)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3822__auto____6831;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2370__auto____6832 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6833 = (cljs.core._invoke[goog.typeOf(x__2370__auto____6832)]);
if(or__3824__auto____6833)
{return or__3824__auto____6833;
} else
{var or__3824__auto____6834 = (cljs.core._invoke["_"]);
if(or__3824__auto____6834)
{return or__3824__auto____6834;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3822__auto____6835 = this$;
if(and__3822__auto____6835)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3822__auto____6835;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2370__auto____6836 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6837 = (cljs.core._invoke[goog.typeOf(x__2370__auto____6836)]);
if(or__3824__auto____6837)
{return or__3824__auto____6837;
} else
{var or__3824__auto____6838 = (cljs.core._invoke["_"]);
if(or__3824__auto____6838)
{return or__3824__auto____6838;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3822__auto____6839 = this$;
if(and__3822__auto____6839)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3822__auto____6839;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2370__auto____6840 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6841 = (cljs.core._invoke[goog.typeOf(x__2370__auto____6840)]);
if(or__3824__auto____6841)
{return or__3824__auto____6841;
} else
{var or__3824__auto____6842 = (cljs.core._invoke["_"]);
if(or__3824__auto____6842)
{return or__3824__auto____6842;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3822__auto____6843 = this$;
if(and__3822__auto____6843)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3822__auto____6843;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2370__auto____6844 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6845 = (cljs.core._invoke[goog.typeOf(x__2370__auto____6844)]);
if(or__3824__auto____6845)
{return or__3824__auto____6845;
} else
{var or__3824__auto____6846 = (cljs.core._invoke["_"]);
if(or__3824__auto____6846)
{return or__3824__auto____6846;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3822__auto____6847 = this$;
if(and__3822__auto____6847)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3822__auto____6847;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2370__auto____6848 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6849 = (cljs.core._invoke[goog.typeOf(x__2370__auto____6848)]);
if(or__3824__auto____6849)
{return or__3824__auto____6849;
} else
{var or__3824__auto____6850 = (cljs.core._invoke["_"]);
if(or__3824__auto____6850)
{return or__3824__auto____6850;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3822__auto____6851 = this$;
if(and__3822__auto____6851)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3822__auto____6851;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2370__auto____6852 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6853 = (cljs.core._invoke[goog.typeOf(x__2370__auto____6852)]);
if(or__3824__auto____6853)
{return or__3824__auto____6853;
} else
{var or__3824__auto____6854 = (cljs.core._invoke["_"]);
if(or__3824__auto____6854)
{return or__3824__auto____6854;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3822__auto____6855 = this$;
if(and__3822__auto____6855)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3822__auto____6855;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2370__auto____6856 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6857 = (cljs.core._invoke[goog.typeOf(x__2370__auto____6856)]);
if(or__3824__auto____6857)
{return or__3824__auto____6857;
} else
{var or__3824__auto____6858 = (cljs.core._invoke["_"]);
if(or__3824__auto____6858)
{return or__3824__auto____6858;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3822__auto____6859 = this$;
if(and__3822__auto____6859)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3822__auto____6859;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2370__auto____6860 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6861 = (cljs.core._invoke[goog.typeOf(x__2370__auto____6860)]);
if(or__3824__auto____6861)
{return or__3824__auto____6861;
} else
{var or__3824__auto____6862 = (cljs.core._invoke["_"]);
if(or__3824__auto____6862)
{return or__3824__auto____6862;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3822__auto____6863 = this$;
if(and__3822__auto____6863)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3822__auto____6863;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2370__auto____6864 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6865 = (cljs.core._invoke[goog.typeOf(x__2370__auto____6864)]);
if(or__3824__auto____6865)
{return or__3824__auto____6865;
} else
{var or__3824__auto____6866 = (cljs.core._invoke["_"]);
if(or__3824__auto____6866)
{return or__3824__auto____6866;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3822__auto____6867 = this$;
if(and__3822__auto____6867)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3822__auto____6867;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2370__auto____6868 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6869 = (cljs.core._invoke[goog.typeOf(x__2370__auto____6868)]);
if(or__3824__auto____6869)
{return or__3824__auto____6869;
} else
{var or__3824__auto____6870 = (cljs.core._invoke["_"]);
if(or__3824__auto____6870)
{return or__3824__auto____6870;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3822__auto____6871 = this$;
if(and__3822__auto____6871)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3822__auto____6871;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2370__auto____6872 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6873 = (cljs.core._invoke[goog.typeOf(x__2370__auto____6872)]);
if(or__3824__auto____6873)
{return or__3824__auto____6873;
} else
{var or__3824__auto____6874 = (cljs.core._invoke["_"]);
if(or__3824__auto____6874)
{return or__3824__auto____6874;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3822__auto____6875 = this$;
if(and__3822__auto____6875)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3822__auto____6875;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2370__auto____6876 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6877 = (cljs.core._invoke[goog.typeOf(x__2370__auto____6876)]);
if(or__3824__auto____6877)
{return or__3824__auto____6877;
} else
{var or__3824__auto____6878 = (cljs.core._invoke["_"]);
if(or__3824__auto____6878)
{return or__3824__auto____6878;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3822__auto____6879 = this$;
if(and__3822__auto____6879)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3822__auto____6879;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2370__auto____6880 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6881 = (cljs.core._invoke[goog.typeOf(x__2370__auto____6880)]);
if(or__3824__auto____6881)
{return or__3824__auto____6881;
} else
{var or__3824__auto____6882 = (cljs.core._invoke["_"]);
if(or__3824__auto____6882)
{return or__3824__auto____6882;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3822__auto____6883 = this$;
if(and__3822__auto____6883)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3822__auto____6883;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2370__auto____6884 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6885 = (cljs.core._invoke[goog.typeOf(x__2370__auto____6884)]);
if(or__3824__auto____6885)
{return or__3824__auto____6885;
} else
{var or__3824__auto____6886 = (cljs.core._invoke["_"]);
if(or__3824__auto____6886)
{return or__3824__auto____6886;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3822__auto____6887 = this$;
if(and__3822__auto____6887)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3822__auto____6887;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2370__auto____6888 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6889 = (cljs.core._invoke[goog.typeOf(x__2370__auto____6888)]);
if(or__3824__auto____6889)
{return or__3824__auto____6889;
} else
{var or__3824__auto____6890 = (cljs.core._invoke["_"]);
if(or__3824__auto____6890)
{return or__3824__auto____6890;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3822__auto____6891 = this$;
if(and__3822__auto____6891)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3822__auto____6891;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2370__auto____6892 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6893 = (cljs.core._invoke[goog.typeOf(x__2370__auto____6892)]);
if(or__3824__auto____6893)
{return or__3824__auto____6893;
} else
{var or__3824__auto____6894 = (cljs.core._invoke["_"]);
if(or__3824__auto____6894)
{return or__3824__auto____6894;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3822__auto____6895 = this$;
if(and__3822__auto____6895)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3822__auto____6895;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2370__auto____6896 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6897 = (cljs.core._invoke[goog.typeOf(x__2370__auto____6896)]);
if(or__3824__auto____6897)
{return or__3824__auto____6897;
} else
{var or__3824__auto____6898 = (cljs.core._invoke["_"]);
if(or__3824__auto____6898)
{return or__3824__auto____6898;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3822__auto____6899 = this$;
if(and__3822__auto____6899)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3822__auto____6899;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2370__auto____6900 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6901 = (cljs.core._invoke[goog.typeOf(x__2370__auto____6900)]);
if(or__3824__auto____6901)
{return or__3824__auto____6901;
} else
{var or__3824__auto____6902 = (cljs.core._invoke["_"]);
if(or__3824__auto____6902)
{return or__3824__auto____6902;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3822__auto____6903 = this$;
if(and__3822__auto____6903)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3822__auto____6903;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2370__auto____6904 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____6905 = (cljs.core._invoke[goog.typeOf(x__2370__auto____6904)]);
if(or__3824__auto____6905)
{return or__3824__auto____6905;
} else
{var or__3824__auto____6906 = (cljs.core._invoke["_"]);
if(or__3824__auto____6906)
{return or__3824__auto____6906;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
_invoke.cljs$lang$arity$1 = _invoke__1;
_invoke.cljs$lang$arity$2 = _invoke__2;
_invoke.cljs$lang$arity$3 = _invoke__3;
_invoke.cljs$lang$arity$4 = _invoke__4;
_invoke.cljs$lang$arity$5 = _invoke__5;
_invoke.cljs$lang$arity$6 = _invoke__6;
_invoke.cljs$lang$arity$7 = _invoke__7;
_invoke.cljs$lang$arity$8 = _invoke__8;
_invoke.cljs$lang$arity$9 = _invoke__9;
_invoke.cljs$lang$arity$10 = _invoke__10;
_invoke.cljs$lang$arity$11 = _invoke__11;
_invoke.cljs$lang$arity$12 = _invoke__12;
_invoke.cljs$lang$arity$13 = _invoke__13;
_invoke.cljs$lang$arity$14 = _invoke__14;
_invoke.cljs$lang$arity$15 = _invoke__15;
_invoke.cljs$lang$arity$16 = _invoke__16;
_invoke.cljs$lang$arity$17 = _invoke__17;
_invoke.cljs$lang$arity$18 = _invoke__18;
_invoke.cljs$lang$arity$19 = _invoke__19;
_invoke.cljs$lang$arity$20 = _invoke__20;
_invoke.cljs$lang$arity$21 = _invoke__21;
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if((function (){var and__3822__auto____6911 = coll;
if(and__3822__auto____6911)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3822__auto____6911;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2370__auto____6912 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6913 = (cljs.core._count[goog.typeOf(x__2370__auto____6912)]);
if(or__3824__auto____6913)
{return or__3824__auto____6913;
} else
{var or__3824__auto____6914 = (cljs.core._count["_"]);
if(or__3824__auto____6914)
{return or__3824__auto____6914;
} else
{throw cljs.core.missing_protocol("ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3822__auto____6919 = coll;
if(and__3822__auto____6919)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3822__auto____6919;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2370__auto____6920 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6921 = (cljs.core._empty[goog.typeOf(x__2370__auto____6920)]);
if(or__3824__auto____6921)
{return or__3824__auto____6921;
} else
{var or__3824__auto____6922 = (cljs.core._empty["_"]);
if(or__3824__auto____6922)
{return or__3824__auto____6922;
} else
{throw cljs.core.missing_protocol("IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3822__auto____6927 = coll;
if(and__3822__auto____6927)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3822__auto____6927;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2370__auto____6928 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6929 = (cljs.core._conj[goog.typeOf(x__2370__auto____6928)]);
if(or__3824__auto____6929)
{return or__3824__auto____6929;
} else
{var or__3824__auto____6930 = (cljs.core._conj["_"]);
if(or__3824__auto____6930)
{return or__3824__auto____6930;
} else
{throw cljs.core.missing_protocol("ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3822__auto____6939 = coll;
if(and__3822__auto____6939)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3822__auto____6939;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2370__auto____6940 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6941 = (cljs.core._nth[goog.typeOf(x__2370__auto____6940)]);
if(or__3824__auto____6941)
{return or__3824__auto____6941;
} else
{var or__3824__auto____6942 = (cljs.core._nth["_"]);
if(or__3824__auto____6942)
{return or__3824__auto____6942;
} else
{throw cljs.core.missing_protocol("IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3822__auto____6943 = coll;
if(and__3822__auto____6943)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3822__auto____6943;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2370__auto____6944 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6945 = (cljs.core._nth[goog.typeOf(x__2370__auto____6944)]);
if(or__3824__auto____6945)
{return or__3824__auto____6945;
} else
{var or__3824__auto____6946 = (cljs.core._nth["_"]);
if(or__3824__auto____6946)
{return or__3824__auto____6946;
} else
{throw cljs.core.missing_protocol("IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_nth.cljs$lang$arity$2 = _nth__2;
_nth.cljs$lang$arity$3 = _nth__3;
return _nth;
})()
;
cljs.core.ASeq = {};
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if((function (){var and__3822__auto____6951 = coll;
if(and__3822__auto____6951)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3822__auto____6951;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2370__auto____6952 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6953 = (cljs.core._first[goog.typeOf(x__2370__auto____6952)]);
if(or__3824__auto____6953)
{return or__3824__auto____6953;
} else
{var or__3824__auto____6954 = (cljs.core._first["_"]);
if(or__3824__auto____6954)
{return or__3824__auto____6954;
} else
{throw cljs.core.missing_protocol("ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3822__auto____6959 = coll;
if(and__3822__auto____6959)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3822__auto____6959;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2370__auto____6960 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6961 = (cljs.core._rest[goog.typeOf(x__2370__auto____6960)]);
if(or__3824__auto____6961)
{return or__3824__auto____6961;
} else
{var or__3824__auto____6962 = (cljs.core._rest["_"]);
if(or__3824__auto____6962)
{return or__3824__auto____6962;
} else
{throw cljs.core.missing_protocol("ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3822__auto____6967 = coll;
if(and__3822__auto____6967)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3822__auto____6967;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2370__auto____6968 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6969 = (cljs.core._next[goog.typeOf(x__2370__auto____6968)]);
if(or__3824__auto____6969)
{return or__3824__auto____6969;
} else
{var or__3824__auto____6970 = (cljs.core._next["_"]);
if(or__3824__auto____6970)
{return or__3824__auto____6970;
} else
{throw cljs.core.missing_protocol("INext.-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3822__auto____6979 = o;
if(and__3822__auto____6979)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3822__auto____6979;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2370__auto____6980 = (((o == null))?null:o);
return (function (){var or__3824__auto____6981 = (cljs.core._lookup[goog.typeOf(x__2370__auto____6980)]);
if(or__3824__auto____6981)
{return or__3824__auto____6981;
} else
{var or__3824__auto____6982 = (cljs.core._lookup["_"]);
if(or__3824__auto____6982)
{return or__3824__auto____6982;
} else
{throw cljs.core.missing_protocol("ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3822__auto____6983 = o;
if(and__3822__auto____6983)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3822__auto____6983;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2370__auto____6984 = (((o == null))?null:o);
return (function (){var or__3824__auto____6985 = (cljs.core._lookup[goog.typeOf(x__2370__auto____6984)]);
if(or__3824__auto____6985)
{return or__3824__auto____6985;
} else
{var or__3824__auto____6986 = (cljs.core._lookup["_"]);
if(or__3824__auto____6986)
{return or__3824__auto____6986;
} else
{throw cljs.core.missing_protocol("ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_lookup.cljs$lang$arity$2 = _lookup__2;
_lookup.cljs$lang$arity$3 = _lookup__3;
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3822__auto____6991 = coll;
if(and__3822__auto____6991)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3822__auto____6991;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2370__auto____6992 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____6993 = (cljs.core._contains_key_QMARK_[goog.typeOf(x__2370__auto____6992)]);
if(or__3824__auto____6993)
{return or__3824__auto____6993;
} else
{var or__3824__auto____6994 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3824__auto____6994)
{return or__3824__auto____6994;
} else
{throw cljs.core.missing_protocol("IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3822__auto____6999 = coll;
if(and__3822__auto____6999)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3822__auto____6999;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2370__auto____7000 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7001 = (cljs.core._assoc[goog.typeOf(x__2370__auto____7000)]);
if(or__3824__auto____7001)
{return or__3824__auto____7001;
} else
{var or__3824__auto____7002 = (cljs.core._assoc["_"]);
if(or__3824__auto____7002)
{return or__3824__auto____7002;
} else
{throw cljs.core.missing_protocol("IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3822__auto____7007 = coll;
if(and__3822__auto____7007)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3822__auto____7007;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2370__auto____7008 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7009 = (cljs.core._dissoc[goog.typeOf(x__2370__auto____7008)]);
if(or__3824__auto____7009)
{return or__3824__auto____7009;
} else
{var or__3824__auto____7010 = (cljs.core._dissoc["_"]);
if(or__3824__auto____7010)
{return or__3824__auto____7010;
} else
{throw cljs.core.missing_protocol("IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3822__auto____7015 = coll;
if(and__3822__auto____7015)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3822__auto____7015;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2370__auto____7016 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7017 = (cljs.core._key[goog.typeOf(x__2370__auto____7016)]);
if(or__3824__auto____7017)
{return or__3824__auto____7017;
} else
{var or__3824__auto____7018 = (cljs.core._key["_"]);
if(or__3824__auto____7018)
{return or__3824__auto____7018;
} else
{throw cljs.core.missing_protocol("IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3822__auto____7023 = coll;
if(and__3822__auto____7023)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3822__auto____7023;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2370__auto____7024 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7025 = (cljs.core._val[goog.typeOf(x__2370__auto____7024)]);
if(or__3824__auto____7025)
{return or__3824__auto____7025;
} else
{var or__3824__auto____7026 = (cljs.core._val["_"]);
if(or__3824__auto____7026)
{return or__3824__auto____7026;
} else
{throw cljs.core.missing_protocol("IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3822__auto____7031 = coll;
if(and__3822__auto____7031)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3822__auto____7031;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2370__auto____7032 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7033 = (cljs.core._disjoin[goog.typeOf(x__2370__auto____7032)]);
if(or__3824__auto____7033)
{return or__3824__auto____7033;
} else
{var or__3824__auto____7034 = (cljs.core._disjoin["_"]);
if(or__3824__auto____7034)
{return or__3824__auto____7034;
} else
{throw cljs.core.missing_protocol("ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3822__auto____7039 = coll;
if(and__3822__auto____7039)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3822__auto____7039;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2370__auto____7040 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7041 = (cljs.core._peek[goog.typeOf(x__2370__auto____7040)]);
if(or__3824__auto____7041)
{return or__3824__auto____7041;
} else
{var or__3824__auto____7042 = (cljs.core._peek["_"]);
if(or__3824__auto____7042)
{return or__3824__auto____7042;
} else
{throw cljs.core.missing_protocol("IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3822__auto____7047 = coll;
if(and__3822__auto____7047)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3822__auto____7047;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2370__auto____7048 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7049 = (cljs.core._pop[goog.typeOf(x__2370__auto____7048)]);
if(or__3824__auto____7049)
{return or__3824__auto____7049;
} else
{var or__3824__auto____7050 = (cljs.core._pop["_"]);
if(or__3824__auto____7050)
{return or__3824__auto____7050;
} else
{throw cljs.core.missing_protocol("IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3822__auto____7055 = coll;
if(and__3822__auto____7055)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3822__auto____7055;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2370__auto____7056 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7057 = (cljs.core._assoc_n[goog.typeOf(x__2370__auto____7056)]);
if(or__3824__auto____7057)
{return or__3824__auto____7057;
} else
{var or__3824__auto____7058 = (cljs.core._assoc_n["_"]);
if(or__3824__auto____7058)
{return or__3824__auto____7058;
} else
{throw cljs.core.missing_protocol("IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3822__auto____7063 = o;
if(and__3822__auto____7063)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3822__auto____7063;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2370__auto____7064 = (((o == null))?null:o);
return (function (){var or__3824__auto____7065 = (cljs.core._deref[goog.typeOf(x__2370__auto____7064)]);
if(or__3824__auto____7065)
{return or__3824__auto____7065;
} else
{var or__3824__auto____7066 = (cljs.core._deref["_"]);
if(or__3824__auto____7066)
{return or__3824__auto____7066;
} else
{throw cljs.core.missing_protocol("IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3822__auto____7071 = o;
if(and__3822__auto____7071)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3822__auto____7071;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2370__auto____7072 = (((o == null))?null:o);
return (function (){var or__3824__auto____7073 = (cljs.core._deref_with_timeout[goog.typeOf(x__2370__auto____7072)]);
if(or__3824__auto____7073)
{return or__3824__auto____7073;
} else
{var or__3824__auto____7074 = (cljs.core._deref_with_timeout["_"]);
if(or__3824__auto____7074)
{return or__3824__auto____7074;
} else
{throw cljs.core.missing_protocol("IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3822__auto____7079 = o;
if(and__3822__auto____7079)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3822__auto____7079;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2370__auto____7080 = (((o == null))?null:o);
return (function (){var or__3824__auto____7081 = (cljs.core._meta[goog.typeOf(x__2370__auto____7080)]);
if(or__3824__auto____7081)
{return or__3824__auto____7081;
} else
{var or__3824__auto____7082 = (cljs.core._meta["_"]);
if(or__3824__auto____7082)
{return or__3824__auto____7082;
} else
{throw cljs.core.missing_protocol("IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3822__auto____7087 = o;
if(and__3822__auto____7087)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3822__auto____7087;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2370__auto____7088 = (((o == null))?null:o);
return (function (){var or__3824__auto____7089 = (cljs.core._with_meta[goog.typeOf(x__2370__auto____7088)]);
if(or__3824__auto____7089)
{return or__3824__auto____7089;
} else
{var or__3824__auto____7090 = (cljs.core._with_meta["_"]);
if(or__3824__auto____7090)
{return or__3824__auto____7090;
} else
{throw cljs.core.missing_protocol("IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3822__auto____7099 = coll;
if(and__3822__auto____7099)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3822__auto____7099;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2370__auto____7100 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7101 = (cljs.core._reduce[goog.typeOf(x__2370__auto____7100)]);
if(or__3824__auto____7101)
{return or__3824__auto____7101;
} else
{var or__3824__auto____7102 = (cljs.core._reduce["_"]);
if(or__3824__auto____7102)
{return or__3824__auto____7102;
} else
{throw cljs.core.missing_protocol("IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3822__auto____7103 = coll;
if(and__3822__auto____7103)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3822__auto____7103;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2370__auto____7104 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7105 = (cljs.core._reduce[goog.typeOf(x__2370__auto____7104)]);
if(or__3824__auto____7105)
{return or__3824__auto____7105;
} else
{var or__3824__auto____7106 = (cljs.core._reduce["_"]);
if(or__3824__auto____7106)
{return or__3824__auto____7106;
} else
{throw cljs.core.missing_protocol("IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
_reduce.cljs$lang$arity$2 = _reduce__2;
_reduce.cljs$lang$arity$3 = _reduce__3;
return _reduce;
})()
;
cljs.core.IKVReduce = {};
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3822__auto____7111 = coll;
if(and__3822__auto____7111)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3822__auto____7111;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2370__auto____7112 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7113 = (cljs.core._kv_reduce[goog.typeOf(x__2370__auto____7112)]);
if(or__3824__auto____7113)
{return or__3824__auto____7113;
} else
{var or__3824__auto____7114 = (cljs.core._kv_reduce["_"]);
if(or__3824__auto____7114)
{return or__3824__auto____7114;
} else
{throw cljs.core.missing_protocol("IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3822__auto____7119 = o;
if(and__3822__auto____7119)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3822__auto____7119;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2370__auto____7120 = (((o == null))?null:o);
return (function (){var or__3824__auto____7121 = (cljs.core._equiv[goog.typeOf(x__2370__auto____7120)]);
if(or__3824__auto____7121)
{return or__3824__auto____7121;
} else
{var or__3824__auto____7122 = (cljs.core._equiv["_"]);
if(or__3824__auto____7122)
{return or__3824__auto____7122;
} else
{throw cljs.core.missing_protocol("IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3822__auto____7127 = o;
if(and__3822__auto____7127)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3822__auto____7127;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2370__auto____7128 = (((o == null))?null:o);
return (function (){var or__3824__auto____7129 = (cljs.core._hash[goog.typeOf(x__2370__auto____7128)]);
if(or__3824__auto____7129)
{return or__3824__auto____7129;
} else
{var or__3824__auto____7130 = (cljs.core._hash["_"]);
if(or__3824__auto____7130)
{return or__3824__auto____7130;
} else
{throw cljs.core.missing_protocol("IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3822__auto____7135 = o;
if(and__3822__auto____7135)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3822__auto____7135;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2370__auto____7136 = (((o == null))?null:o);
return (function (){var or__3824__auto____7137 = (cljs.core._seq[goog.typeOf(x__2370__auto____7136)]);
if(or__3824__auto____7137)
{return or__3824__auto____7137;
} else
{var or__3824__auto____7138 = (cljs.core._seq["_"]);
if(or__3824__auto____7138)
{return or__3824__auto____7138;
} else
{throw cljs.core.missing_protocol("ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IList = {};
cljs.core.IRecord = {};
cljs.core.IReversible = {};
cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3822__auto____7143 = coll;
if(and__3822__auto____7143)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3822__auto____7143;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2370__auto____7144 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7145 = (cljs.core._rseq[goog.typeOf(x__2370__auto____7144)]);
if(or__3824__auto____7145)
{return or__3824__auto____7145;
} else
{var or__3824__auto____7146 = (cljs.core._rseq["_"]);
if(or__3824__auto____7146)
{return or__3824__auto____7146;
} else
{throw cljs.core.missing_protocol("IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3822__auto____7151 = coll;
if(and__3822__auto____7151)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3822__auto____7151;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2370__auto____7152 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7153 = (cljs.core._sorted_seq[goog.typeOf(x__2370__auto____7152)]);
if(or__3824__auto____7153)
{return or__3824__auto____7153;
} else
{var or__3824__auto____7154 = (cljs.core._sorted_seq["_"]);
if(or__3824__auto____7154)
{return or__3824__auto____7154;
} else
{throw cljs.core.missing_protocol("ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3822__auto____7159 = coll;
if(and__3822__auto____7159)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3822__auto____7159;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2370__auto____7160 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7161 = (cljs.core._sorted_seq_from[goog.typeOf(x__2370__auto____7160)]);
if(or__3824__auto____7161)
{return or__3824__auto____7161;
} else
{var or__3824__auto____7162 = (cljs.core._sorted_seq_from["_"]);
if(or__3824__auto____7162)
{return or__3824__auto____7162;
} else
{throw cljs.core.missing_protocol("ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3822__auto____7167 = coll;
if(and__3822__auto____7167)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3822__auto____7167;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2370__auto____7168 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7169 = (cljs.core._entry_key[goog.typeOf(x__2370__auto____7168)]);
if(or__3824__auto____7169)
{return or__3824__auto____7169;
} else
{var or__3824__auto____7170 = (cljs.core._entry_key["_"]);
if(or__3824__auto____7170)
{return or__3824__auto____7170;
} else
{throw cljs.core.missing_protocol("ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3822__auto____7175 = coll;
if(and__3822__auto____7175)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3822__auto____7175;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2370__auto____7176 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7177 = (cljs.core._comparator[goog.typeOf(x__2370__auto____7176)]);
if(or__3824__auto____7177)
{return or__3824__auto____7177;
} else
{var or__3824__auto____7178 = (cljs.core._comparator["_"]);
if(or__3824__auto____7178)
{return or__3824__auto____7178;
} else
{throw cljs.core.missing_protocol("ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3822__auto____7183 = o;
if(and__3822__auto____7183)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3822__auto____7183;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2370__auto____7184 = (((o == null))?null:o);
return (function (){var or__3824__auto____7185 = (cljs.core._pr_seq[goog.typeOf(x__2370__auto____7184)]);
if(or__3824__auto____7185)
{return or__3824__auto____7185;
} else
{var or__3824__auto____7186 = (cljs.core._pr_seq["_"]);
if(or__3824__auto____7186)
{return or__3824__auto____7186;
} else
{throw cljs.core.missing_protocol("IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3822__auto____7191 = d;
if(and__3822__auto____7191)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3822__auto____7191;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2370__auto____7192 = (((d == null))?null:d);
return (function (){var or__3824__auto____7193 = (cljs.core._realized_QMARK_[goog.typeOf(x__2370__auto____7192)]);
if(or__3824__auto____7193)
{return or__3824__auto____7193;
} else
{var or__3824__auto____7194 = (cljs.core._realized_QMARK_["_"]);
if(or__3824__auto____7194)
{return or__3824__auto____7194;
} else
{throw cljs.core.missing_protocol("IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3822__auto____7199 = this$;
if(and__3822__auto____7199)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3822__auto____7199;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2370__auto____7200 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7201 = (cljs.core._notify_watches[goog.typeOf(x__2370__auto____7200)]);
if(or__3824__auto____7201)
{return or__3824__auto____7201;
} else
{var or__3824__auto____7202 = (cljs.core._notify_watches["_"]);
if(or__3824__auto____7202)
{return or__3824__auto____7202;
} else
{throw cljs.core.missing_protocol("IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3822__auto____7207 = this$;
if(and__3822__auto____7207)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3822__auto____7207;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2370__auto____7208 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7209 = (cljs.core._add_watch[goog.typeOf(x__2370__auto____7208)]);
if(or__3824__auto____7209)
{return or__3824__auto____7209;
} else
{var or__3824__auto____7210 = (cljs.core._add_watch["_"]);
if(or__3824__auto____7210)
{return or__3824__auto____7210;
} else
{throw cljs.core.missing_protocol("IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3822__auto____7215 = this$;
if(and__3822__auto____7215)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3822__auto____7215;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2370__auto____7216 = (((this$ == null))?null:this$);
return (function (){var or__3824__auto____7217 = (cljs.core._remove_watch[goog.typeOf(x__2370__auto____7216)]);
if(or__3824__auto____7217)
{return or__3824__auto____7217;
} else
{var or__3824__auto____7218 = (cljs.core._remove_watch["_"]);
if(or__3824__auto____7218)
{return or__3824__auto____7218;
} else
{throw cljs.core.missing_protocol("IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3822__auto____7223 = coll;
if(and__3822__auto____7223)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3822__auto____7223;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2370__auto____7224 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7225 = (cljs.core._as_transient[goog.typeOf(x__2370__auto____7224)]);
if(or__3824__auto____7225)
{return or__3824__auto____7225;
} else
{var or__3824__auto____7226 = (cljs.core._as_transient["_"]);
if(or__3824__auto____7226)
{return or__3824__auto____7226;
} else
{throw cljs.core.missing_protocol("IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3822__auto____7231 = tcoll;
if(and__3822__auto____7231)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3822__auto____7231;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2370__auto____7232 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7233 = (cljs.core._conj_BANG_[goog.typeOf(x__2370__auto____7232)]);
if(or__3824__auto____7233)
{return or__3824__auto____7233;
} else
{var or__3824__auto____7234 = (cljs.core._conj_BANG_["_"]);
if(or__3824__auto____7234)
{return or__3824__auto____7234;
} else
{throw cljs.core.missing_protocol("ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3822__auto____7239 = tcoll;
if(and__3822__auto____7239)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3822__auto____7239;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2370__auto____7240 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7241 = (cljs.core._persistent_BANG_[goog.typeOf(x__2370__auto____7240)]);
if(or__3824__auto____7241)
{return or__3824__auto____7241;
} else
{var or__3824__auto____7242 = (cljs.core._persistent_BANG_["_"]);
if(or__3824__auto____7242)
{return or__3824__auto____7242;
} else
{throw cljs.core.missing_protocol("ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3822__auto____7247 = tcoll;
if(and__3822__auto____7247)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3822__auto____7247;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2370__auto____7248 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7249 = (cljs.core._assoc_BANG_[goog.typeOf(x__2370__auto____7248)]);
if(or__3824__auto____7249)
{return or__3824__auto____7249;
} else
{var or__3824__auto____7250 = (cljs.core._assoc_BANG_["_"]);
if(or__3824__auto____7250)
{return or__3824__auto____7250;
} else
{throw cljs.core.missing_protocol("ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3822__auto____7255 = tcoll;
if(and__3822__auto____7255)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3822__auto____7255;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2370__auto____7256 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7257 = (cljs.core._dissoc_BANG_[goog.typeOf(x__2370__auto____7256)]);
if(or__3824__auto____7257)
{return or__3824__auto____7257;
} else
{var or__3824__auto____7258 = (cljs.core._dissoc_BANG_["_"]);
if(or__3824__auto____7258)
{return or__3824__auto____7258;
} else
{throw cljs.core.missing_protocol("ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3822__auto____7263 = tcoll;
if(and__3822__auto____7263)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3822__auto____7263;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2370__auto____7264 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7265 = (cljs.core._assoc_n_BANG_[goog.typeOf(x__2370__auto____7264)]);
if(or__3824__auto____7265)
{return or__3824__auto____7265;
} else
{var or__3824__auto____7266 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3824__auto____7266)
{return or__3824__auto____7266;
} else
{throw cljs.core.missing_protocol("ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3822__auto____7271 = tcoll;
if(and__3822__auto____7271)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3822__auto____7271;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2370__auto____7272 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7273 = (cljs.core._pop_BANG_[goog.typeOf(x__2370__auto____7272)]);
if(or__3824__auto____7273)
{return or__3824__auto____7273;
} else
{var or__3824__auto____7274 = (cljs.core._pop_BANG_["_"]);
if(or__3824__auto____7274)
{return or__3824__auto____7274;
} else
{throw cljs.core.missing_protocol("ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3822__auto____7279 = tcoll;
if(and__3822__auto____7279)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3822__auto____7279;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2370__auto____7280 = (((tcoll == null))?null:tcoll);
return (function (){var or__3824__auto____7281 = (cljs.core._disjoin_BANG_[goog.typeOf(x__2370__auto____7280)]);
if(or__3824__auto____7281)
{return or__3824__auto____7281;
} else
{var or__3824__auto____7282 = (cljs.core._disjoin_BANG_["_"]);
if(or__3824__auto____7282)
{return or__3824__auto____7282;
} else
{throw cljs.core.missing_protocol("ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3822__auto____7287 = x;
if(and__3822__auto____7287)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3822__auto____7287;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2370__auto____7288 = (((x == null))?null:x);
return (function (){var or__3824__auto____7289 = (cljs.core._compare[goog.typeOf(x__2370__auto____7288)]);
if(or__3824__auto____7289)
{return or__3824__auto____7289;
} else
{var or__3824__auto____7290 = (cljs.core._compare["_"]);
if(or__3824__auto____7290)
{return or__3824__auto____7290;
} else
{throw cljs.core.missing_protocol("IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3822__auto____7295 = coll;
if(and__3822__auto____7295)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3822__auto____7295;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2370__auto____7296 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7297 = (cljs.core._drop_first[goog.typeOf(x__2370__auto____7296)]);
if(or__3824__auto____7297)
{return or__3824__auto____7297;
} else
{var or__3824__auto____7298 = (cljs.core._drop_first["_"]);
if(or__3824__auto____7298)
{return or__3824__auto____7298;
} else
{throw cljs.core.missing_protocol("IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3822__auto____7303 = coll;
if(and__3822__auto____7303)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3822__auto____7303;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2370__auto____7304 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7305 = (cljs.core._chunked_first[goog.typeOf(x__2370__auto____7304)]);
if(or__3824__auto____7305)
{return or__3824__auto____7305;
} else
{var or__3824__auto____7306 = (cljs.core._chunked_first["_"]);
if(or__3824__auto____7306)
{return or__3824__auto____7306;
} else
{throw cljs.core.missing_protocol("IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3822__auto____7311 = coll;
if(and__3822__auto____7311)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3822__auto____7311;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2370__auto____7312 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7313 = (cljs.core._chunked_rest[goog.typeOf(x__2370__auto____7312)]);
if(or__3824__auto____7313)
{return or__3824__auto____7313;
} else
{var or__3824__auto____7314 = (cljs.core._chunked_rest["_"]);
if(or__3824__auto____7314)
{return or__3824__auto____7314;
} else
{throw cljs.core.missing_protocol("IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3822__auto____7319 = coll;
if(and__3822__auto____7319)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3822__auto____7319;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2370__auto____7320 = (((coll == null))?null:coll);
return (function (){var or__3824__auto____7321 = (cljs.core._chunked_next[goog.typeOf(x__2370__auto____7320)]);
if(or__3824__auto____7321)
{return or__3824__auto____7321;
} else
{var or__3824__auto____7322 = (cljs.core._chunked_next["_"]);
if(or__3824__auto____7322)
{return or__3824__auto____7322;
} else
{throw cljs.core.missing_protocol("IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
var or__3824__auto____7324 = (x === y);
if(or__3824__auto____7324)
{return or__3824__auto____7324;
} else
{return cljs.core._equiv(x,y);
}
});
var _EQ___3 = (function() { 
var G__7325__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.cljs$lang$arity$2(x,y)))
{if(cljs.core.next(more))
{{
var G__7326 = y;
var G__7327 = cljs.core.first(more);
var G__7328 = cljs.core.next(more);
x = G__7326;
y = G__7327;
more = G__7328;
continue;
}
} else
{return _EQ_.cljs$lang$arity$2(y,cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__7325 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7325__delegate.call(this, x, y, more);
};
G__7325.cljs$lang$maxFixedArity = 2;
G__7325.cljs$lang$applyTo = (function (arglist__7329){
var x = cljs.core.first(arglist__7329);
var y = cljs.core.first(cljs.core.next(arglist__7329));
var more = cljs.core.rest(cljs.core.next(arglist__7329));
return G__7325__delegate(x, y, more);
});
G__7325.cljs$lang$arity$variadic = G__7325__delegate;
return G__7325;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$lang$arity$1 = _EQ___1;
_EQ_.cljs$lang$arity$2 = _EQ___2;
_EQ_.cljs$lang$arity$variadic = _EQ___3.cljs$lang$arity$variadic;
return _EQ_;
})()
;
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
cljs.core.type = (function type(x){
if((x == null))
{return null;
} else
{return x.constructor;
}
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__7330 = null;
var G__7330__2 = (function (o,k){
return null;
});
var G__7330__3 = (function (o,k,not_found){
return not_found;
});
G__7330 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__7330__2.call(this,o,k);
case 3:
return G__7330__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7330;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.cljs$lang$arity$variadic(cljs.core.array_seq([k,v], 0));
}));
(cljs.core.INext["null"] = true);
(cljs.core._next["null"] = (function (_){
return null;
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.cljs$lang$arity$1(o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__7331 = null;
var G__7331__2 = (function (_,f){
return (f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null));
});
var G__7331__3 = (function (_,f,start){
return start;
});
G__7331 = function(_,f,start){
switch(arguments.length){
case 2:
return G__7331__2.call(this,_,f);
case 3:
return G__7331__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7331;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.cljs$lang$arity$1("nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.cljs$lang$arity$0();
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o == null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__7332 = null;
var G__7332__2 = (function (_,n){
return null;
});
var G__7332__3 = (function (_,n,not_found){
return not_found;
});
G__7332 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__7332__2.call(this,_,n);
case 3:
return G__7332__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7332;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var and__3822__auto____7333 = cljs.core.instance_QMARK_(Date,other);
if(and__3822__auto____7333)
{return (o.toString() === other.toString());
} else
{return and__3822__auto____7333;
}
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
if((o === true))
{return 1;
} else
{return 0;
}
}));
(cljs.core.IHash["_"] = true);
(cljs.core._hash["_"] = (function (o){
return goog.getUid(o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt__7346 = cljs.core._count(cicoll);
if((cnt__7346 === 0))
{return (f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null));
} else
{var val__7347 = cljs.core._nth.cljs$lang$arity$2(cicoll,0);
var n__7348 = 1;
while(true){
if((n__7348 < cnt__7346))
{var nval__7349 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(val__7347,cljs.core._nth.cljs$lang$arity$2(cicoll,n__7348)) : f.call(null,val__7347,cljs.core._nth.cljs$lang$arity$2(cicoll,n__7348)));
if(cljs.core.reduced_QMARK_(nval__7349))
{return cljs.core.deref(nval__7349);
} else
{{
var G__7358 = nval__7349;
var G__7359 = (n__7348 + 1);
val__7347 = G__7358;
n__7348 = G__7359;
continue;
}
}
} else
{return val__7347;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__7350 = cljs.core._count(cicoll);
var val__7351 = val;
var n__7352 = 0;
while(true){
if((n__7352 < cnt__7350))
{var nval__7353 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(val__7351,cljs.core._nth.cljs$lang$arity$2(cicoll,n__7352)) : f.call(null,val__7351,cljs.core._nth.cljs$lang$arity$2(cicoll,n__7352)));
if(cljs.core.reduced_QMARK_(nval__7353))
{return cljs.core.deref(nval__7353);
} else
{{
var G__7360 = nval__7353;
var G__7361 = (n__7352 + 1);
val__7351 = G__7360;
n__7352 = G__7361;
continue;
}
}
} else
{return val__7351;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__7354 = cljs.core._count(cicoll);
var val__7355 = val;
var n__7356 = idx;
while(true){
if((n__7356 < cnt__7354))
{var nval__7357 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(val__7355,cljs.core._nth.cljs$lang$arity$2(cicoll,n__7356)) : f.call(null,val__7355,cljs.core._nth.cljs$lang$arity$2(cicoll,n__7356)));
if(cljs.core.reduced_QMARK_(nval__7357))
{return cljs.core.deref(nval__7357);
} else
{{
var G__7362 = nval__7357;
var G__7363 = (n__7356 + 1);
val__7355 = G__7362;
n__7356 = G__7363;
continue;
}
}
} else
{return val__7355;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
ci_reduce.cljs$lang$arity$2 = ci_reduce__2;
ci_reduce.cljs$lang$arity$3 = ci_reduce__3;
ci_reduce.cljs$lang$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){
var cnt__7376 = arr.length;
if((arr.length === 0))
{return (f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null));
} else
{var val__7377 = (arr[0]);
var n__7378 = 1;
while(true){
if((n__7378 < cnt__7376))
{var nval__7379 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(val__7377,(arr[n__7378])) : f.call(null,val__7377,(arr[n__7378])));
if(cljs.core.reduced_QMARK_(nval__7379))
{return cljs.core.deref(nval__7379);
} else
{{
var G__7388 = nval__7379;
var G__7389 = (n__7378 + 1);
val__7377 = G__7388;
n__7378 = G__7389;
continue;
}
}
} else
{return val__7377;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__7380 = arr.length;
var val__7381 = val;
var n__7382 = 0;
while(true){
if((n__7382 < cnt__7380))
{var nval__7383 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(val__7381,(arr[n__7382])) : f.call(null,val__7381,(arr[n__7382])));
if(cljs.core.reduced_QMARK_(nval__7383))
{return cljs.core.deref(nval__7383);
} else
{{
var G__7390 = nval__7383;
var G__7391 = (n__7382 + 1);
val__7381 = G__7390;
n__7382 = G__7391;
continue;
}
}
} else
{return val__7381;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__7384 = arr.length;
var val__7385 = val;
var n__7386 = idx;
while(true){
if((n__7386 < cnt__7384))
{var nval__7387 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(val__7385,(arr[n__7386])) : f.call(null,val__7385,(arr[n__7386])));
if(cljs.core.reduced_QMARK_(nval__7387))
{return cljs.core.deref(nval__7387);
} else
{{
var G__7392 = nval__7387;
var G__7393 = (n__7386 + 1);
val__7385 = G__7392;
n__7386 = G__7393;
continue;
}
}
} else
{return val__7385;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
array_reduce.cljs$lang$arity$2 = array_reduce__2;
array_reduce.cljs$lang$arity$3 = array_reduce__3;
array_reduce.cljs$lang$arity$4 = array_reduce__4;
return array_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 166199546;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7394 = this;
return cljs.core.hash_coll(coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__7395 = this;
if(((this__7395.i + 1) < this__7395.a.length))
{return (new cljs.core.IndexedSeq(this__7395.a,(this__7395.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7396 = this;
return cljs.core.cons(o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__7397 = this;
var c__7398 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__7398 > 0))
{return (new cljs.core.RSeq(coll,(c__7398 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__7399 = this;
var this__7400 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__7400], 0));
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7401 = this;
if(cljs.core.counted_QMARK_(this__7401.a))
{return cljs.core.ci_reduce.cljs$lang$arity$4(this__7401.a,f,(this__7401.a[this__7401.i]),(this__7401.i + 1));
} else
{return cljs.core.ci_reduce.cljs$lang$arity$4(coll,f,(this__7401.a[this__7401.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7402 = this;
if(cljs.core.counted_QMARK_(this__7402.a))
{return cljs.core.ci_reduce.cljs$lang$arity$4(this__7402.a,f,start,this__7402.i);
} else
{return cljs.core.ci_reduce.cljs$lang$arity$4(coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__7403 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7404 = this;
return (this__7404.a.length - this__7404.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__7405 = this;
return (this__7405.a[this__7405.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__7406 = this;
if(((this__7406.i + 1) < this__7406.a.length))
{return (new cljs.core.IndexedSeq(this__7406.a,(this__7406.i + 1)));
} else
{return cljs.core.list.cljs$lang$arity$0();
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7407 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7408 = this;
var i__7409 = (n + this__7408.i);
if((i__7409 < this__7408.a.length))
{return (this__7408.a[i__7409]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7410 = this;
var i__7411 = (n + this__7410.i);
if((i__7411 < this__7410.a.length))
{return (this__7410.a[i__7411]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.cljs$lang$arity$2(prim,0);
});
var prim_seq__2 = (function (prim,i){
if((prim.length === 0))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw('Invalid arity: ' + arguments.length);
};
prim_seq.cljs$lang$arity$1 = prim_seq__1;
prim_seq.cljs$lang$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.cljs$lang$arity$2(array,0);
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.cljs$lang$arity$2(array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw('Invalid arity: ' + arguments.length);
};
array_seq.cljs$lang$arity$1 = array_seq__1;
array_seq.cljs$lang$arity$2 = array_seq__2;
return array_seq;
})()
;
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__7412 = null;
var G__7412__2 = (function (array,f){
return cljs.core.ci_reduce.cljs$lang$arity$2(array,f);
});
var G__7412__3 = (function (array,f,start){
return cljs.core.ci_reduce.cljs$lang$arity$3(array,f,start);
});
G__7412 = function(array,f,start){
switch(arguments.length){
case 2:
return G__7412__2.call(this,array,f);
case 3:
return G__7412__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7412;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__7413 = null;
var G__7413__2 = (function (array,k){
return (array[k]);
});
var G__7413__3 = (function (array,k,not_found){
return cljs.core._nth.cljs$lang$arity$3(array,k,not_found);
});
G__7413 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__7413__2.call(this,array,k);
case 3:
return G__7413__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7413;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__7414 = null;
var G__7414__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__7414__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__7414 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__7414__2.call(this,array,n);
case 3:
return G__7414__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7414;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.cljs$lang$arity$2(array,0);
}));

/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7415 = this;
return cljs.core.hash_coll(coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7416 = this;
return cljs.core.cons(o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__7417 = this;
var this__7418 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__7418], 0));
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7419 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7420 = this;
return (this__7420.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7421 = this;
return cljs.core._nth.cljs$lang$arity$2(this__7421.ci,this__7421.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7422 = this;
if((this__7422.i > 0))
{return (new cljs.core.RSeq(this__7422.ci,(this__7422.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7423 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__7424 = this;
return (new cljs.core.RSeq(this__7424.ci,this__7424.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7425 = this;
return this__7425.meta;
});
cljs.core.RSeq;
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__7429__7430 = coll;
if(G__7429__7430)
{if((function (){var or__3824__auto____7431 = (G__7429__7430.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3824__auto____7431)
{return or__3824__auto____7431;
} else
{return G__7429__7430.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__7429__7430.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ASeq,G__7429__7430);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ASeq,G__7429__7430);
}
})())
{return coll;
} else
{return cljs.core._seq(coll);
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__7436__7437 = coll;
if(G__7436__7437)
{if((function (){var or__3824__auto____7438 = (G__7436__7437.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7438)
{return or__3824__auto____7438;
} else
{return G__7436__7437.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7436__7437.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__7436__7437);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__7436__7437);
}
})())
{return cljs.core._first(coll);
} else
{var s__7439 = cljs.core.seq(coll);
if((s__7439 == null))
{return null;
} else
{return cljs.core._first(s__7439);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if(!((coll == null)))
{if((function (){var G__7444__7445 = coll;
if(G__7444__7445)
{if((function (){var or__3824__auto____7446 = (G__7444__7445.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7446)
{return or__3824__auto____7446;
} else
{return G__7444__7445.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7444__7445.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__7444__7445);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__7444__7445);
}
})())
{return cljs.core._rest(coll);
} else
{var s__7447 = cljs.core.seq(coll);
if(!((s__7447 == null)))
{return cljs.core._rest(s__7447);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__7451__7452 = coll;
if(G__7451__7452)
{if((function (){var or__3824__auto____7453 = (G__7451__7452.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3824__auto____7453)
{return or__3824__auto____7453;
} else
{return G__7451__7452.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__7451__7452.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.INext,G__7451__7452);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.INext,G__7451__7452);
}
})())
{return cljs.core._next(coll);
} else
{return cljs.core.seq(cljs.core.rest(coll));
}
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first(cljs.core.next(coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first(cljs.core.first(coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next(cljs.core.first(coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first(cljs.core.next(coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next(cljs.core.next(coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
var sn__7455 = cljs.core.next(s);
if(!((sn__7455 == null)))
{{
var G__7456 = sn__7455;
s = G__7456;
continue;
}
} else
{return cljs.core.first(s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2 = (function (coll,x){
return cljs.core._conj(coll,x);
});
var conj__3 = (function() { 
var G__7457__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__7458 = conj.cljs$lang$arity$2(coll,x);
var G__7459 = cljs.core.first(xs);
var G__7460 = cljs.core.next(xs);
coll = G__7458;
x = G__7459;
xs = G__7460;
continue;
}
} else
{return conj.cljs$lang$arity$2(coll,x);
}
break;
}
};
var G__7457 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7457__delegate.call(this, coll, x, xs);
};
G__7457.cljs$lang$maxFixedArity = 2;
G__7457.cljs$lang$applyTo = (function (arglist__7461){
var coll = cljs.core.first(arglist__7461);
var x = cljs.core.first(cljs.core.next(arglist__7461));
var xs = cljs.core.rest(cljs.core.next(arglist__7461));
return G__7457__delegate(coll, x, xs);
});
G__7457.cljs$lang$arity$variadic = G__7457__delegate;
return G__7457;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$lang$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$lang$arity$2 = conj__2;
conj.cljs$lang$arity$variadic = conj__3.cljs$lang$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty(coll);
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s__7464 = cljs.core.seq(coll);
var acc__7465 = 0;
while(true){
if(cljs.core.counted_QMARK_(s__7464))
{return (acc__7465 + cljs.core._count(s__7464));
} else
{{
var G__7466 = cljs.core.next(s__7464);
var G__7467 = (acc__7465 + 1);
s__7464 = G__7466;
acc__7465 = G__7467;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(cljs.core.counted_QMARK_(coll))
{return cljs.core._count(coll);
} else
{return cljs.core.accumulating_seq_count(coll);
}
});
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === 0))
{if(cljs.core.seq(coll))
{return cljs.core.first(coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_(coll))
{return cljs.core._nth.cljs$lang$arity$2(coll,n);
} else
{if(cljs.core.seq(coll))
{return linear_traversal_nth.cljs$lang$arity$2(cljs.core.next(coll),(n - 1));
} else
{if("\uFDD0'else")
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
if((coll == null))
{return not_found;
} else
{if((n === 0))
{if(cljs.core.seq(coll))
{return cljs.core.first(coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_(coll))
{return cljs.core._nth.cljs$lang$arity$3(coll,n,not_found);
} else
{if(cljs.core.seq(coll))
{return linear_traversal_nth.cljs$lang$arity$3(cljs.core.next(coll),(n - 1),not_found);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
linear_traversal_nth.cljs$lang$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$lang$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if((coll == null))
{return null;
} else
{if((function (){var G__7474__7475 = coll;
if(G__7474__7475)
{if((function (){var or__3824__auto____7476 = (G__7474__7475.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7476)
{return or__3824__auto____7476;
} else
{return G__7474__7475.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7474__7475.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IIndexed,G__7474__7475);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IIndexed,G__7474__7475);
}
})())
{return cljs.core._nth.cljs$lang$arity$2(coll,Math.floor(n));
} else
{return cljs.core.linear_traversal_nth.cljs$lang$arity$2(coll,Math.floor(n));
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!((coll == null)))
{if((function (){var G__7477__7478 = coll;
if(G__7477__7478)
{if((function (){var or__3824__auto____7479 = (G__7477__7478.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7479)
{return or__3824__auto____7479;
} else
{return G__7477__7478.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7477__7478.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IIndexed,G__7477__7478);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IIndexed,G__7477__7478);
}
})())
{return cljs.core._nth.cljs$lang$arity$3(coll,Math.floor(n),not_found);
} else
{return cljs.core.linear_traversal_nth.cljs$lang$arity$3(coll,Math.floor(n),not_found);
}
} else
{return not_found;
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
nth.cljs$lang$arity$2 = nth__2;
nth.cljs$lang$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
return cljs.core._lookup.cljs$lang$arity$2(o,k);
});
var get__3 = (function (o,k,not_found){
return cljs.core._lookup.cljs$lang$arity$3(o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get.cljs$lang$arity$2 = get__2;
get.cljs$lang$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
return cljs.core._assoc(coll,k,v);
});
var assoc__4 = (function() { 
var G__7482__delegate = function (coll,k,v,kvs){
while(true){
var ret__7481 = assoc.cljs$lang$arity$3(coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__7483 = ret__7481;
var G__7484 = cljs.core.first(kvs);
var G__7485 = cljs.core.second(kvs);
var G__7486 = cljs.core.nnext(kvs);
coll = G__7483;
k = G__7484;
v = G__7485;
kvs = G__7486;
continue;
}
} else
{return ret__7481;
}
break;
}
};
var G__7482 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7482__delegate.call(this, coll, k, v, kvs);
};
G__7482.cljs$lang$maxFixedArity = 3;
G__7482.cljs$lang$applyTo = (function (arglist__7487){
var coll = cljs.core.first(arglist__7487);
var k = cljs.core.first(cljs.core.next(arglist__7487));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7487)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7487)));
return G__7482__delegate(coll, k, v, kvs);
});
G__7482.cljs$lang$arity$variadic = G__7482__delegate;
return G__7482;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$lang$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$lang$arity$3 = assoc__3;
assoc.cljs$lang$arity$variadic = assoc__4.cljs$lang$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
return cljs.core._dissoc(coll,k);
});
var dissoc__3 = (function() { 
var G__7490__delegate = function (coll,k,ks){
while(true){
var ret__7489 = dissoc.cljs$lang$arity$2(coll,k);
if(cljs.core.truth_(ks))
{{
var G__7491 = ret__7489;
var G__7492 = cljs.core.first(ks);
var G__7493 = cljs.core.next(ks);
coll = G__7491;
k = G__7492;
ks = G__7493;
continue;
}
} else
{return ret__7489;
}
break;
}
};
var G__7490 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7490__delegate.call(this, coll, k, ks);
};
G__7490.cljs$lang$maxFixedArity = 2;
G__7490.cljs$lang$applyTo = (function (arglist__7494){
var coll = cljs.core.first(arglist__7494);
var k = cljs.core.first(cljs.core.next(arglist__7494));
var ks = cljs.core.rest(cljs.core.next(arglist__7494));
return G__7490__delegate(coll, k, ks);
});
G__7490.cljs$lang$arity$variadic = G__7490__delegate;
return G__7490;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$lang$arity$1 = dissoc__1;
dissoc.cljs$lang$arity$2 = dissoc__2;
dissoc.cljs$lang$arity$variadic = dissoc__3.cljs$lang$arity$variadic;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta(o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if((function (){var G__7498__7499 = o;
if(G__7498__7499)
{if((function (){var or__3824__auto____7500 = (G__7498__7499.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____7500)
{return or__3824__auto____7500;
} else
{return G__7498__7499.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__7498__7499.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IMeta,G__7498__7499);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IMeta,G__7498__7499);
}
})())
{return cljs.core._meta(o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek(coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop(coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
return cljs.core._disjoin(coll,k);
});
var disj__3 = (function() { 
var G__7503__delegate = function (coll,k,ks){
while(true){
var ret__7502 = disj.cljs$lang$arity$2(coll,k);
if(cljs.core.truth_(ks))
{{
var G__7504 = ret__7502;
var G__7505 = cljs.core.first(ks);
var G__7506 = cljs.core.next(ks);
coll = G__7504;
k = G__7505;
ks = G__7506;
continue;
}
} else
{return ret__7502;
}
break;
}
};
var G__7503 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7503__delegate.call(this, coll, k, ks);
};
G__7503.cljs$lang$maxFixedArity = 2;
G__7503.cljs$lang$applyTo = (function (arglist__7507){
var coll = cljs.core.first(arglist__7507);
var k = cljs.core.first(cljs.core.next(arglist__7507));
var ks = cljs.core.rest(cljs.core.next(arglist__7507));
return G__7503__delegate(coll, k, ks);
});
G__7503.cljs$lang$arity$variadic = G__7503__delegate;
return G__7503;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$lang$arity$1 = disj__1;
disj.cljs$lang$arity$2 = disj__2;
disj.cljs$lang$arity$variadic = disj__3.cljs$lang$arity$variadic;
return disj;
})()
;
cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){
var h__7509 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__7509);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__7509;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__7511 = (cljs.core.string_hash_cache[k]);
if(!((h__7511 == null)))
{return h__7511;
} else
{return cljs.core.add_to_string_hash_cache(k);
}
});
cljs.core.hash = (function() {
var hash = null;
var hash__1 = (function (o){
return hash.cljs$lang$arity$2(o,true);
});
var hash__2 = (function (o,check_cache){
if((function (){var and__3822__auto____7513 = goog.isString(o);
if(and__3822__auto____7513)
{return check_cache;
} else
{return and__3822__auto____7513;
}
})())
{return cljs.core.check_string_hash_cache(o);
} else
{return cljs.core._hash(o);
}
});
hash = function(o,check_cache){
switch(arguments.length){
case 1:
return hash__1.call(this,o);
case 2:
return hash__2.call(this,o,check_cache);
}
throw('Invalid arity: ' + arguments.length);
};
hash.cljs$lang$arity$1 = hash__1;
hash.cljs$lang$arity$2 = hash__2;
return hash;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not(cljs.core.seq(coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7517__7518 = x;
if(G__7517__7518)
{if((function (){var or__3824__auto____7519 = (G__7517__7518.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3824__auto____7519)
{return or__3824__auto____7519;
} else
{return G__7517__7518.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__7517__7518.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ICollection,G__7517__7518);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ICollection,G__7517__7518);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7523__7524 = x;
if(G__7523__7524)
{if((function (){var or__3824__auto____7525 = (G__7523__7524.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3824__auto____7525)
{return or__3824__auto____7525;
} else
{return G__7523__7524.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__7523__7524.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISet,G__7523__7524);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISet,G__7523__7524);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__7529__7530 = x;
if(G__7529__7530)
{if((function (){var or__3824__auto____7531 = (G__7529__7530.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3824__auto____7531)
{return or__3824__auto____7531;
} else
{return G__7529__7530.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__7529__7530.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IAssociative,G__7529__7530);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IAssociative,G__7529__7530);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__7535__7536 = x;
if(G__7535__7536)
{if((function (){var or__3824__auto____7537 = (G__7535__7536.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3824__auto____7537)
{return or__3824__auto____7537;
} else
{return G__7535__7536.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__7535__7536.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISequential,G__7535__7536);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISequential,G__7535__7536);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__7541__7542 = x;
if(G__7541__7542)
{if((function (){var or__3824__auto____7543 = (G__7541__7542.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3824__auto____7543)
{return or__3824__auto____7543;
} else
{return G__7541__7542.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__7541__7542.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ICounted,G__7541__7542);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ICounted,G__7541__7542);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__7547__7548 = x;
if(G__7547__7548)
{if((function (){var or__3824__auto____7549 = (G__7547__7548.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3824__auto____7549)
{return or__3824__auto____7549;
} else
{return G__7547__7548.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__7547__7548.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IIndexed,G__7547__7548);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IIndexed,G__7547__7548);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__7553__7554 = x;
if(G__7553__7554)
{if((function (){var or__3824__auto____7555 = (G__7553__7554.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7555)
{return or__3824__auto____7555;
} else
{return G__7553__7554.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7553__7554.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IReduce,G__7553__7554);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IReduce,G__7553__7554);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__7559__7560 = x;
if(G__7559__7560)
{if((function (){var or__3824__auto____7561 = (G__7559__7560.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3824__auto____7561)
{return or__3824__auto____7561;
} else
{return G__7559__7560.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__7559__7560.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IMap,G__7559__7560);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IMap,G__7559__7560);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__7565__7566 = x;
if(G__7565__7566)
{if((function (){var or__3824__auto____7567 = (G__7565__7566.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3824__auto____7567)
{return or__3824__auto____7567;
} else
{return G__7565__7566.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__7565__7566.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IVector,G__7565__7566);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IVector,G__7565__7566);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__7571__7572 = x;
if(G__7571__7572)
{if(cljs.core.truth_((function (){var or__3824__auto____7573 = null;
if(cljs.core.truth_(or__3824__auto____7573))
{return or__3824__auto____7573;
} else
{return G__7571__7572.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__7571__7572.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_(cljs.core.IChunkedSeq,G__7571__7572);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IChunkedSeq,G__7571__7572);
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
return {};
});
var js_obj__1 = (function() { 
var G__7574__delegate = function (keyvals){
return cljs.core.apply.cljs$lang$arity$2(goog.object.create,keyvals);
};
var G__7574 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7574__delegate.call(this, keyvals);
};
G__7574.cljs$lang$maxFixedArity = 0;
G__7574.cljs$lang$applyTo = (function (arglist__7575){
var keyvals = cljs.core.seq(arglist__7575);;
return G__7574__delegate(keyvals);
});
G__7574.cljs$lang$arity$variadic = G__7574__delegate;
return G__7574;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$lang$arity$0 = js_obj__0;
js_obj.cljs$lang$arity$variadic = js_obj__1.cljs$lang$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys__7577 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__7577.push(key);
}));
return keys__7577;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__7581 = i;
var j__7582 = j;
var len__7583 = len;
while(true){
if((len__7583 === 0))
{return to;
} else
{(to[j__7582] = (from[i__7581]));
{
var G__7584 = (i__7581 + 1);
var G__7585 = (j__7582 + 1);
var G__7586 = (len__7583 - 1);
i__7581 = G__7584;
j__7582 = G__7585;
len__7583 = G__7586;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__7590 = (i + (len - 1));
var j__7591 = (j + (len - 1));
var len__7592 = len;
while(true){
if((len__7592 === 0))
{return to;
} else
{(to[j__7591] = (from[i__7590]));
{
var G__7593 = (i__7590 - 1);
var G__7594 = (j__7591 - 1);
var G__7595 = (len__7592 - 1);
i__7590 = G__7593;
j__7591 = G__7594;
len__7592 = G__7595;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = {};
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null))
{return false;
} else
{var G__7599__7600 = s;
if(G__7599__7600)
{if((function (){var or__3824__auto____7601 = (G__7599__7600.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7601)
{return or__3824__auto____7601;
} else
{return G__7599__7600.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7599__7600.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__7599__7600);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__7599__7600);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__7605__7606 = s;
if(G__7605__7606)
{if((function (){var or__3824__auto____7607 = (G__7605__7606.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3824__auto____7607)
{return or__3824__auto____7607;
} else
{return G__7605__7606.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__7605__7606.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__7605__7606);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeqable,G__7605__7606);
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3822__auto____7610 = goog.isString(x);
if(and__3822__auto____7610)
{return !((function (){var or__3824__auto____7611 = (x.charAt(0) === "\uFDD0");
if(or__3824__auto____7611)
{return or__3824__auto____7611;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3822__auto____7610;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3822__auto____7613 = goog.isString(x);
if(and__3822__auto____7613)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3822__auto____7613;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3822__auto____7615 = goog.isString(x);
if(and__3822__auto____7615)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3822__auto____7615;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3824__auto____7620 = cljs.core.fn_QMARK_(f);
if(or__3824__auto____7620)
{return or__3824__auto____7620;
} else
{var G__7621__7622 = f;
if(G__7621__7622)
{if((function (){var or__3824__auto____7623 = (G__7621__7622.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3824__auto____7623)
{return or__3824__auto____7623;
} else
{return G__7621__7622.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__7621__7622.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IFn,G__7621__7622);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IFn,G__7621__7622);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3822__auto____7625 = cljs.core.number_QMARK_(n);
if(and__3822__auto____7625)
{return (n == n.toFixed());
} else
{return and__3822__auto____7625;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljs.core._lookup.cljs$lang$arity$3(coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3822__auto____7628 = coll;
if(cljs.core.truth_(and__3822__auto____7628))
{var and__3822__auto____7629 = cljs.core.associative_QMARK_(coll);
if(and__3822__auto____7629)
{return cljs.core.contains_QMARK_(coll,k);
} else
{return and__3822__auto____7629;
}
} else
{return and__3822__auto____7628;
}
})()))
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.cljs$lang$arity$2(coll,k)], true);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return !(cljs.core._EQ_.cljs$lang$arity$2(x,y));
});
var distinct_QMARK___3 = (function() { 
var G__7638__delegate = function (x,y,more){
if(!(cljs.core._EQ_.cljs$lang$arity$2(x,y)))
{var s__7634 = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs__7635 = more;
while(true){
var x__7636 = cljs.core.first(xs__7635);
var etc__7637 = cljs.core.next(xs__7635);
if(cljs.core.truth_(xs__7635))
{if(cljs.core.contains_QMARK_(s__7634,x__7636))
{return false;
} else
{{
var G__7639 = cljs.core.conj.cljs$lang$arity$2(s__7634,x__7636);
var G__7640 = etc__7637;
s__7634 = G__7639;
xs__7635 = G__7640;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__7638 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7638__delegate.call(this, x, y, more);
};
G__7638.cljs$lang$maxFixedArity = 2;
G__7638.cljs$lang$applyTo = (function (arglist__7641){
var x = cljs.core.first(arglist__7641);
var y = cljs.core.first(cljs.core.next(arglist__7641));
var more = cljs.core.rest(cljs.core.next(arglist__7641));
return G__7638__delegate(x, y, more);
});
G__7638.cljs$lang$arity$variadic = G__7638__delegate;
return G__7638;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$lang$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$lang$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$lang$arity$variadic = distinct_QMARK___3.cljs$lang$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((x === y))
{return 0;
} else
{if((x == null))
{return -1;
} else
{if((y == null))
{return 1;
} else
{if((cljs.core.type(x) === cljs.core.type(y)))
{if((function (){var G__7645__7646 = x;
if(G__7645__7646)
{if(cljs.core.truth_((function (){var or__3824__auto____7647 = null;
if(cljs.core.truth_(or__3824__auto____7647))
{return or__3824__auto____7647;
} else
{return G__7645__7646.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__7645__7646.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_(cljs.core.IComparable,G__7645__7646);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IComparable,G__7645__7646);
}
})())
{return cljs.core._compare(x,y);
} else
{return goog.array.defaultCompare(x,y);
}
} else
{if("\uFDD0'else")
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){
var xl__7652 = cljs.core.count(xs);
var yl__7653 = cljs.core.count(ys);
if((xl__7652 < yl__7653))
{return -1;
} else
{if((xl__7652 > yl__7653))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.cljs$lang$arity$4(xs,ys,xl__7652,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__7654 = cljs.core.compare(cljs.core.nth.cljs$lang$arity$2(xs,n),cljs.core.nth.cljs$lang$arity$2(ys,n));
if((function (){var and__3822__auto____7655 = (d__7654 === 0);
if(and__3822__auto____7655)
{return ((n + 1) < len);
} else
{return and__3822__auto____7655;
}
})())
{{
var G__7656 = xs;
var G__7657 = ys;
var G__7658 = len;
var G__7659 = (n + 1);
xs = G__7656;
ys = G__7657;
len = G__7658;
n = G__7659;
continue;
}
} else
{return d__7654;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw('Invalid arity: ' + arguments.length);
};
compare_indexed.cljs$lang$arity$2 = compare_indexed__2;
compare_indexed.cljs$lang$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.cljs$lang$arity$2(f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__7661 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(x,y) : f.call(null,x,y));
if(cljs.core.number_QMARK_(r__7661))
{return r__7661;
} else
{if(cljs.core.truth_(r__7661))
{return -1;
} else
{if(cljs.core.truth_((f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(y,x) : f.call(null,y,x))))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.cljs$lang$arity$2(cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.seq(coll))
{var a__7663 = cljs.core.to_array(coll);
goog.array.stableSort(a__7663,cljs.core.fn__GT_comparator(comp));
return cljs.core.seq(a__7663);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort.cljs$lang$arity$1 = sort__1;
sort.cljs$lang$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.cljs$lang$arity$3(keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.cljs$lang$arity$2((function (x,y){
return cljs.core.fn__GT_comparator(comp).call(null,(keyfn.cljs$lang$arity$1 ? keyfn.cljs$lang$arity$1(x) : keyfn.call(null,x)),(keyfn.cljs$lang$arity$1 ? keyfn.cljs$lang$arity$1(y) : keyfn.call(null,y)));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort_by.cljs$lang$arity$2 = sort_by__2;
sort_by.cljs$lang$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__3971__auto____7669 = cljs.core.seq(coll);
if(temp__3971__auto____7669)
{var s__7670 = temp__3971__auto____7669;
return cljs.core.reduce.cljs$lang$arity$3(f,cljs.core.first(s__7670),cljs.core.next(s__7670));
} else
{return (f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null));
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__7671 = val;
var coll__7672 = cljs.core.seq(coll);
while(true){
if(coll__7672)
{var nval__7673 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(val__7671,cljs.core.first(coll__7672)) : f.call(null,val__7671,cljs.core.first(coll__7672)));
if(cljs.core.reduced_QMARK_(nval__7673))
{return cljs.core.deref(nval__7673);
} else
{{
var G__7674 = nval__7673;
var G__7675 = cljs.core.next(coll__7672);
val__7671 = G__7674;
coll__7672 = G__7675;
continue;
}
}
} else
{return val__7671;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
seq_reduce.cljs$lang$arity$2 = seq_reduce__2;
seq_reduce.cljs$lang$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){
var a__7677 = cljs.core.to_array(coll);
goog.array.shuffle(a__7677);
return cljs.core.vec(a__7677);
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__7684__7685 = coll;
if(G__7684__7685)
{if((function (){var or__3824__auto____7686 = (G__7684__7685.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7686)
{return or__3824__auto____7686;
} else
{return G__7684__7685.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7684__7685.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IReduce,G__7684__7685);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IReduce,G__7684__7685);
}
})())
{return cljs.core._reduce.cljs$lang$arity$2(coll,f);
} else
{return cljs.core.seq_reduce.cljs$lang$arity$2(f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__7687__7688 = coll;
if(G__7687__7688)
{if((function (){var or__3824__auto____7689 = (G__7687__7688.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3824__auto____7689)
{return or__3824__auto____7689;
} else
{return G__7687__7688.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__7687__7688.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IReduce,G__7687__7688);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IReduce,G__7687__7688);
}
})())
{return cljs.core._reduce.cljs$lang$arity$3(coll,f,val);
} else
{return cljs.core.seq_reduce.cljs$lang$arity$3(f,val,coll);
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reduce.cljs$lang$arity$2 = reduce__2;
reduce.cljs$lang$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
return cljs.core._kv_reduce(coll,f,init);
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__7690 = this;
return this__7690.val;
});
cljs.core.Reduced;
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return cljs.core.instance_QMARK_(cljs.core.Reduced,r);
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return 0;
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__7691__delegate = function (x,y,more){
return cljs.core.reduce.cljs$lang$arity$3(_PLUS_,(x + y),more);
};
var G__7691 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7691__delegate.call(this, x, y, more);
};
G__7691.cljs$lang$maxFixedArity = 2;
G__7691.cljs$lang$applyTo = (function (arglist__7692){
var x = cljs.core.first(arglist__7692);
var y = cljs.core.first(cljs.core.next(arglist__7692));
var more = cljs.core.rest(cljs.core.next(arglist__7692));
return G__7691__delegate(x, y, more);
});
G__7691.cljs$lang$arity$variadic = G__7691__delegate;
return G__7691;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$lang$arity$0 = _PLUS___0;
_PLUS_.cljs$lang$arity$1 = _PLUS___1;
_PLUS_.cljs$lang$arity$2 = _PLUS___2;
_PLUS_.cljs$lang$arity$variadic = _PLUS___3.cljs$lang$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__7693__delegate = function (x,y,more){
return cljs.core.reduce.cljs$lang$arity$3(_,(x - y),more);
};
var G__7693 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7693__delegate.call(this, x, y, more);
};
G__7693.cljs$lang$maxFixedArity = 2;
G__7693.cljs$lang$applyTo = (function (arglist__7694){
var x = cljs.core.first(arglist__7694);
var y = cljs.core.first(cljs.core.next(arglist__7694));
var more = cljs.core.rest(cljs.core.next(arglist__7694));
return G__7693__delegate(x, y, more);
});
G__7693.cljs$lang$arity$variadic = G__7693__delegate;
return G__7693;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$lang$arity$1 = ___1;
_.cljs$lang$arity$2 = ___2;
_.cljs$lang$arity$variadic = ___3.cljs$lang$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return 1;
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__7695__delegate = function (x,y,more){
return cljs.core.reduce.cljs$lang$arity$3(_STAR_,(x * y),more);
};
var G__7695 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7695__delegate.call(this, x, y, more);
};
G__7695.cljs$lang$maxFixedArity = 2;
G__7695.cljs$lang$applyTo = (function (arglist__7696){
var x = cljs.core.first(arglist__7696);
var y = cljs.core.first(cljs.core.next(arglist__7696));
var more = cljs.core.rest(cljs.core.next(arglist__7696));
return G__7695__delegate(x, y, more);
});
G__7695.cljs$lang$arity$variadic = G__7695__delegate;
return G__7695;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$lang$arity$0 = _STAR___0;
_STAR_.cljs$lang$arity$1 = _STAR___1;
_STAR_.cljs$lang$arity$2 = _STAR___2;
_STAR_.cljs$lang$arity$variadic = _STAR___3.cljs$lang$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.cljs$lang$arity$2(1,x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__7697__delegate = function (x,y,more){
return cljs.core.reduce.cljs$lang$arity$3(_SLASH_,_SLASH_.cljs$lang$arity$2(x,y),more);
};
var G__7697 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7697__delegate.call(this, x, y, more);
};
G__7697.cljs$lang$maxFixedArity = 2;
G__7697.cljs$lang$applyTo = (function (arglist__7698){
var x = cljs.core.first(arglist__7698);
var y = cljs.core.first(cljs.core.next(arglist__7698));
var more = cljs.core.rest(cljs.core.next(arglist__7698));
return G__7697__delegate(x, y, more);
});
G__7697.cljs$lang$arity$variadic = G__7697__delegate;
return G__7697;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$lang$arity$1 = _SLASH___1;
_SLASH_.cljs$lang$arity$2 = _SLASH___2;
_SLASH_.cljs$lang$arity$variadic = _SLASH___3.cljs$lang$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__7699__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next(more))
{{
var G__7700 = y;
var G__7701 = cljs.core.first(more);
var G__7702 = cljs.core.next(more);
x = G__7700;
y = G__7701;
more = G__7702;
continue;
}
} else
{return (y < cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__7699 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7699__delegate.call(this, x, y, more);
};
G__7699.cljs$lang$maxFixedArity = 2;
G__7699.cljs$lang$applyTo = (function (arglist__7703){
var x = cljs.core.first(arglist__7703);
var y = cljs.core.first(cljs.core.next(arglist__7703));
var more = cljs.core.rest(cljs.core.next(arglist__7703));
return G__7699__delegate(x, y, more);
});
G__7699.cljs$lang$arity$variadic = G__7699__delegate;
return G__7699;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$lang$arity$1 = _LT___1;
_LT_.cljs$lang$arity$2 = _LT___2;
_LT_.cljs$lang$arity$variadic = _LT___3.cljs$lang$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__7704__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next(more))
{{
var G__7705 = y;
var G__7706 = cljs.core.first(more);
var G__7707 = cljs.core.next(more);
x = G__7705;
y = G__7706;
more = G__7707;
continue;
}
} else
{return (y <= cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__7704 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7704__delegate.call(this, x, y, more);
};
G__7704.cljs$lang$maxFixedArity = 2;
G__7704.cljs$lang$applyTo = (function (arglist__7708){
var x = cljs.core.first(arglist__7708);
var y = cljs.core.first(cljs.core.next(arglist__7708));
var more = cljs.core.rest(cljs.core.next(arglist__7708));
return G__7704__delegate(x, y, more);
});
G__7704.cljs$lang$arity$variadic = G__7704__delegate;
return G__7704;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$lang$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$lang$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$lang$arity$variadic = _LT__EQ___3.cljs$lang$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__7709__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next(more))
{{
var G__7710 = y;
var G__7711 = cljs.core.first(more);
var G__7712 = cljs.core.next(more);
x = G__7710;
y = G__7711;
more = G__7712;
continue;
}
} else
{return (y > cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__7709 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7709__delegate.call(this, x, y, more);
};
G__7709.cljs$lang$maxFixedArity = 2;
G__7709.cljs$lang$applyTo = (function (arglist__7713){
var x = cljs.core.first(arglist__7713);
var y = cljs.core.first(cljs.core.next(arglist__7713));
var more = cljs.core.rest(cljs.core.next(arglist__7713));
return G__7709__delegate(x, y, more);
});
G__7709.cljs$lang$arity$variadic = G__7709__delegate;
return G__7709;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$lang$arity$1 = _GT___1;
_GT_.cljs$lang$arity$2 = _GT___2;
_GT_.cljs$lang$arity$variadic = _GT___3.cljs$lang$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__7714__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next(more))
{{
var G__7715 = y;
var G__7716 = cljs.core.first(more);
var G__7717 = cljs.core.next(more);
x = G__7715;
y = G__7716;
more = G__7717;
continue;
}
} else
{return (y >= cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__7714 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7714__delegate.call(this, x, y, more);
};
G__7714.cljs$lang$maxFixedArity = 2;
G__7714.cljs$lang$applyTo = (function (arglist__7718){
var x = cljs.core.first(arglist__7718);
var y = cljs.core.first(cljs.core.next(arglist__7718));
var more = cljs.core.rest(cljs.core.next(arglist__7718));
return G__7714__delegate(x, y, more);
});
G__7714.cljs$lang$arity$variadic = G__7714__delegate;
return G__7714;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$lang$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$lang$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$lang$arity$variadic = _GT__EQ___3.cljs$lang$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3 = (function() { 
var G__7719__delegate = function (x,y,more){
return cljs.core.reduce.cljs$lang$arity$3(max,((x > y) ? x : y),more);
};
var G__7719 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7719__delegate.call(this, x, y, more);
};
G__7719.cljs$lang$maxFixedArity = 2;
G__7719.cljs$lang$applyTo = (function (arglist__7720){
var x = cljs.core.first(arglist__7720);
var y = cljs.core.first(cljs.core.next(arglist__7720));
var more = cljs.core.rest(cljs.core.next(arglist__7720));
return G__7719__delegate(x, y, more);
});
G__7719.cljs$lang$arity$variadic = G__7719__delegate;
return G__7719;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$lang$arity$1 = max__1;
max.cljs$lang$arity$2 = max__2;
max.cljs$lang$arity$variadic = max__3.cljs$lang$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3 = (function() { 
var G__7721__delegate = function (x,y,more){
return cljs.core.reduce.cljs$lang$arity$3(min,((x < y) ? x : y),more);
};
var G__7721 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7721__delegate.call(this, x, y, more);
};
G__7721.cljs$lang$maxFixedArity = 2;
G__7721.cljs$lang$applyTo = (function (arglist__7722){
var x = cljs.core.first(arglist__7722);
var y = cljs.core.first(cljs.core.next(arglist__7722));
var more = cljs.core.rest(cljs.core.next(arglist__7722));
return G__7721__delegate(x, y, more);
});
G__7721.cljs$lang$arity$variadic = G__7721__delegate;
return G__7721;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$lang$arity$1 = min__1;
min.cljs$lang$arity$2 = min__2;
min.cljs$lang$arity$variadic = min__3.cljs$lang$arity$variadic;
return min;
})()
;
cljs.core.fix = (function fix(q){
if((q >= 0))
{return (Math.floor.cljs$lang$arity$1 ? Math.floor.cljs$lang$arity$1(q) : Math.floor.call(null,q));
} else
{return (Math.ceil.cljs$lang$arity$1 ? Math.ceil.cljs$lang$arity$1(q) : Math.ceil.call(null,q));
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return cljs.core.fix(x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix(x);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__7724 = (n % d);
return cljs.core.fix(((n - rem__7724) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__7726 = cljs.core.quot(n,d);
return (n - (d * q__7726));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return (Math.random.cljs$lang$arity$0 ? Math.random.cljs$lang$arity$0() : Math.random.call(null));
});
var rand__1 = (function (n){
return (n * rand.cljs$lang$arity$0());
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix(cljs.core.rand.cljs$lang$arity$1(n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){
var v__7729 = (v - ((v >> 1) & 1431655765));
var v__7730 = ((v__7729 & 858993459) + ((v__7729 >> 2) & 858993459));
return ((((v__7730 + (v__7730 >> 4)) & 252645135) * 16843009) >> 24);
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv(x,y);
});
var _EQ__EQ___3 = (function() { 
var G__7731__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.cljs$lang$arity$2(x,y)))
{if(cljs.core.next(more))
{{
var G__7732 = y;
var G__7733 = cljs.core.first(more);
var G__7734 = cljs.core.next(more);
x = G__7732;
y = G__7733;
more = G__7734;
continue;
}
} else
{return _EQ__EQ_.cljs$lang$arity$2(y,cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__7731 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7731__delegate.call(this, x, y, more);
};
G__7731.cljs$lang$maxFixedArity = 2;
G__7731.cljs$lang$applyTo = (function (arglist__7735){
var x = cljs.core.first(arglist__7735);
var y = cljs.core.first(cljs.core.next(arglist__7735));
var more = cljs.core.rest(cljs.core.next(arglist__7735));
return G__7731__delegate(x, y, more);
});
G__7731.cljs$lang$arity$variadic = G__7731__delegate;
return G__7731;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$lang$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$lang$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$lang$arity$variadic = _EQ__EQ___3.cljs$lang$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__7739 = n;
var xs__7740 = cljs.core.seq(coll);
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7741 = xs__7740;
if(and__3822__auto____7741)
{return (n__7739 > 0);
} else
{return and__3822__auto____7741;
}
})()))
{{
var G__7742 = (n__7739 - 1);
var G__7743 = cljs.core.next(xs__7740);
n__7739 = G__7742;
xs__7740 = G__7743;
continue;
}
} else
{return xs__7740;
}
break;
}
});
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___0 = (function (){
return "";
});
var str_STAR___1 = (function (x){
if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2 = (function() { 
var G__7744__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7745 = sb.append(str_STAR_.cljs$lang$arity$1(cljs.core.first(more)));
var G__7746 = cljs.core.next(more);
sb = G__7745;
more = G__7746;
continue;
}
} else
{return str_STAR_.cljs$lang$arity$1(sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.cljs$lang$arity$1(x))),ys);
};
var G__7744 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7744__delegate.call(this, x, ys);
};
G__7744.cljs$lang$maxFixedArity = 1;
G__7744.cljs$lang$applyTo = (function (arglist__7747){
var x = cljs.core.first(arglist__7747);
var ys = cljs.core.rest(arglist__7747);
return G__7744__delegate(x, ys);
});
G__7744.cljs$lang$arity$variadic = G__7744__delegate;
return G__7744;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str_STAR___0.call(this);
case 1:
return str_STAR___1.call(this,x);
default:
return str_STAR___2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
str_STAR_.cljs$lang$arity$0 = str_STAR___0;
str_STAR_.cljs$lang$arity$1 = str_STAR___1;
str_STAR_.cljs$lang$arity$variadic = str_STAR___2.cljs$lang$arity$variadic;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if(cljs.core.symbol_QMARK_(x))
{return x.substring(2,x.length);
} else
{if(cljs.core.keyword_QMARK_(x))
{return cljs.core.str_STAR_.cljs$lang$arity$variadic(":",cljs.core.array_seq([x.substring(2,x.length)], 0));
} else
{if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2 = (function() { 
var G__7748__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7749 = sb.append(str.cljs$lang$arity$1(cljs.core.first(more)));
var G__7750 = cljs.core.next(more);
sb = G__7749;
more = G__7750;
continue;
}
} else
{return cljs.core.str_STAR_.cljs$lang$arity$1(sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.cljs$lang$arity$1(x))),ys);
};
var G__7748 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7748__delegate.call(this, x, ys);
};
G__7748.cljs$lang$maxFixedArity = 1;
G__7748.cljs$lang$applyTo = (function (arglist__7751){
var x = cljs.core.first(arglist__7751);
var ys = cljs.core.rest(arglist__7751);
return G__7748__delegate(x, ys);
});
G__7748.cljs$lang$arity$variadic = G__7748__delegate;
return G__7748;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$lang$arity$0 = str__0;
str.cljs$lang$arity$1 = str__1;
str.cljs$lang$arity$variadic = str__2.cljs$lang$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subs.cljs$lang$arity$2 = subs__2;
subs.cljs$lang$arity$3 = subs__3;
return subs;
})()
;
/**
* Formats a string using goog.string.format.
* @param {...*} var_args
*/
cljs.core.format = (function() { 
var format__delegate = function (fmt,args){
return cljs.core.apply.cljs$lang$arity$3(goog.string.format,fmt,args);
};
var format = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__7752){
var fmt = cljs.core.first(arglist__7752);
var args = cljs.core.rest(arglist__7752);
return format__delegate(fmt, args);
});
format.cljs$lang$arity$variadic = format__delegate;
return format;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if(cljs.core.symbol_QMARK_(name))
{name;
} else
{if(cljs.core.keyword_QMARK_(name))
{cljs.core.str_STAR_.cljs$lang$arity$variadic("\uFDD1",cljs.core.array_seq(["'",cljs.core.subs.cljs$lang$arity$2(name,2)], 0));
} else
{}
}
return cljs.core.str_STAR_.cljs$lang$arity$variadic("\uFDD1",cljs.core.array_seq(["'",name], 0));
});
var symbol__2 = (function (ns,name){
return symbol.cljs$lang$arity$1(cljs.core.str_STAR_.cljs$lang$arity$variadic(ns,cljs.core.array_seq(["/",name], 0)));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
symbol.cljs$lang$arity$1 = symbol__1;
symbol.cljs$lang$arity$2 = symbol__2;
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if(cljs.core.keyword_QMARK_(name))
{return name;
} else
{if(cljs.core.symbol_QMARK_(name))
{return cljs.core.str_STAR_.cljs$lang$arity$variadic("\uFDD0",cljs.core.array_seq(["'",cljs.core.subs.cljs$lang$arity$2(name,2)], 0));
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.cljs$lang$arity$variadic("\uFDD0",cljs.core.array_seq(["'",name], 0));
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return keyword.cljs$lang$arity$1(cljs.core.str_STAR_.cljs$lang$arity$variadic(ns,cljs.core.array_seq(["/",name], 0)));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
keyword.cljs$lang$arity$1 = keyword__1;
keyword.cljs$lang$arity$2 = keyword__2;
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$(((cljs.core.sequential_QMARK_(y))?(function (){var xs__7755 = cljs.core.seq(x);
var ys__7756 = cljs.core.seq(y);
while(true){
if((xs__7755 == null))
{return (ys__7756 == null);
} else
{if((ys__7756 == null))
{return false;
} else
{if(cljs.core._EQ_.cljs$lang$arity$2(cljs.core.first(xs__7755),cljs.core.first(ys__7756)))
{{
var G__7757 = cljs.core.next(xs__7755);
var G__7758 = cljs.core.next(ys__7756);
xs__7755 = G__7757;
ys__7756 = G__7758;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__7759_SHARP_,p2__7760_SHARP_){
return cljs.core.hash_combine(p1__7759_SHARP_,cljs.core.hash.cljs$lang$arity$2(p2__7760_SHARP_,false));
}),cljs.core.hash.cljs$lang$arity$2(cljs.core.first(coll),false),cljs.core.next(coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h__7764 = 0;
var s__7765 = cljs.core.seq(m);
while(true){
if(s__7765)
{var e__7766 = cljs.core.first(s__7765);
{
var G__7767 = ((h__7764 + (cljs.core.hash.cljs$lang$arity$1(cljs.core.key(e__7766)) ^ cljs.core.hash.cljs$lang$arity$1(cljs.core.val(e__7766)))) % 4503599627370496);
var G__7768 = cljs.core.next(s__7765);
h__7764 = G__7767;
s__7765 = G__7768;
continue;
}
} else
{return h__7764;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__7772 = 0;
var s__7773 = cljs.core.seq(s);
while(true){
if(s__7773)
{var e__7774 = cljs.core.first(s__7773);
{
var G__7775 = ((h__7772 + cljs.core.hash.cljs$lang$arity$1(e__7774)) % 4503599627370496);
var G__7776 = cljs.core.next(s__7773);
h__7772 = G__7775;
s__7773 = G__7776;
continue;
}
} else
{return h__7772;
}
break;
}
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__7797__7798 = cljs.core.seq(fn_map);
if(G__7797__7798)
{var G__7800__7802 = cljs.core.first(G__7797__7798);
var vec__7801__7803 = G__7800__7802;
var key_name__7804 = cljs.core.nth.cljs$lang$arity$3(vec__7801__7803,0,null);
var f__7805 = cljs.core.nth.cljs$lang$arity$3(vec__7801__7803,1,null);
var G__7797__7806 = G__7797__7798;
var G__7800__7807 = G__7800__7802;
var G__7797__7808 = G__7797__7806;
while(true){
var vec__7809__7810 = G__7800__7807;
var key_name__7811 = cljs.core.nth.cljs$lang$arity$3(vec__7809__7810,0,null);
var f__7812 = cljs.core.nth.cljs$lang$arity$3(vec__7809__7810,1,null);
var G__7797__7813 = G__7797__7808;
var str_name__7814 = cljs.core.name(key_name__7811);
(obj[str_name__7814] = f__7812);
var temp__3974__auto____7815 = cljs.core.next(G__7797__7813);
if(temp__3974__auto____7815)
{var G__7797__7816 = temp__3974__auto____7815;
{
var G__7817 = cljs.core.first(G__7797__7816);
var G__7818 = G__7797__7816;
G__7800__7807 = G__7817;
G__7797__7808 = G__7818;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413358;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7819 = this;
var h__2199__auto____7820 = this__7819.__hash;
if(!((h__2199__auto____7820 == null)))
{return h__2199__auto____7820;
} else
{var h__2199__auto____7821 = cljs.core.hash_coll(coll);
this__7819.__hash = h__2199__auto____7821;
return h__2199__auto____7821;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7822 = this;
if((this__7822.count === 1))
{return null;
} else
{return this__7822.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7823 = this;
return (new cljs.core.List(this__7823.meta,o,coll,(this__7823.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__7824 = this;
var this__7825 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__7825], 0));
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7826 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7827 = this;
return this__7827.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7828 = this;
return this__7828.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7829 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7830 = this;
return this__7830.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7831 = this;
if((this__7831.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__7831.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7832 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7833 = this;
return (new cljs.core.List(meta,this__7833.first,this__7833.rest,this__7833.count,this__7833.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7834 = this;
return this__7834.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7835 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413326;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7836 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7837 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7838 = this;
return (new cljs.core.List(this__7838.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__7839 = this;
var this__7840 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__7840], 0));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7841 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__7842 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__7843 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__7844 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7845 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7846 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7847 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7848 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7849 = this;
return this__7849.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7850 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__7854__7855 = coll;
if(G__7854__7855)
{if((function (){var or__3824__auto____7856 = (G__7854__7855.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3824__auto____7856)
{return or__3824__auto____7856;
} else
{return G__7854__7855.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__7854__7855.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IReversible,G__7854__7855);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IReversible,G__7854__7855);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq(coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
if(cljs.core.reversible_QMARK_(coll))
{return cljs.core.rseq(coll);
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() {
var list = null;
var list__0 = (function (){
return cljs.core.List.EMPTY;
});
var list__1 = (function (x){
return cljs.core.conj.cljs$lang$arity$2(cljs.core.List.EMPTY,x);
});
var list__2 = (function (x,y){
return cljs.core.conj.cljs$lang$arity$2(list.cljs$lang$arity$1(y),x);
});
var list__3 = (function (x,y,z){
return cljs.core.conj.cljs$lang$arity$2(list.cljs$lang$arity$2(y,z),x);
});
var list__4 = (function() { 
var G__7857__delegate = function (x,y,z,items){
return cljs.core.conj.cljs$lang$arity$2(cljs.core.conj.cljs$lang$arity$2(cljs.core.conj.cljs$lang$arity$2(cljs.core.reduce.cljs$lang$arity$3(cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse(items)),z),y),x);
};
var G__7857 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7857__delegate.call(this, x, y, z, items);
};
G__7857.cljs$lang$maxFixedArity = 3;
G__7857.cljs$lang$applyTo = (function (arglist__7858){
var x = cljs.core.first(arglist__7858);
var y = cljs.core.first(cljs.core.next(arglist__7858));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7858)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7858)));
return G__7857__delegate(x, y, z, items);
});
G__7857.cljs$lang$arity$variadic = G__7857__delegate;
return G__7857;
})()
;
list = function(x,y,z,var_args){
var items = var_args;
switch(arguments.length){
case 0:
return list__0.call(this);
case 1:
return list__1.call(this,x);
case 2:
return list__2.call(this,x,y);
case 3:
return list__3.call(this,x,y,z);
default:
return list__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
list.cljs$lang$maxFixedArity = 3;
list.cljs$lang$applyTo = list__4.cljs$lang$applyTo;
list.cljs$lang$arity$0 = list__0;
list.cljs$lang$arity$1 = list__1;
list.cljs$lang$arity$2 = list__2;
list.cljs$lang$arity$3 = list__3;
list.cljs$lang$arity$variadic = list__4.cljs$lang$arity$variadic;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65405164;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7859 = this;
var h__2199__auto____7860 = this__7859.__hash;
if(!((h__2199__auto____7860 == null)))
{return h__2199__auto____7860;
} else
{var h__2199__auto____7861 = cljs.core.hash_coll(coll);
this__7859.__hash = h__2199__auto____7861;
return h__2199__auto____7861;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7862 = this;
if((this__7862.rest == null))
{return null;
} else
{return cljs.core._seq(this__7862.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7863 = this;
return (new cljs.core.Cons(null,o,coll,this__7863.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__7864 = this;
var this__7865 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__7865], 0));
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7866 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7867 = this;
return this__7867.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7868 = this;
if((this__7868.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__7868.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7869 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7870 = this;
return (new cljs.core.Cons(meta,this__7870.first,this__7870.rest,this__7870.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7871 = this;
return this__7871.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7872 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,this__7872.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3824__auto____7877 = (coll == null);
if(or__3824__auto____7877)
{return or__3824__auto____7877;
} else
{var G__7878__7879 = coll;
if(G__7878__7879)
{if((function (){var or__3824__auto____7880 = (G__7878__7879.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3824__auto____7880)
{return or__3824__auto____7880;
} else
{return G__7878__7879.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__7878__7879.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__7878__7879);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.ISeq,G__7878__7879);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq(coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__7884__7885 = x;
if(G__7884__7885)
{if((function (){var or__3824__auto____7886 = (G__7884__7885.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3824__auto____7886)
{return or__3824__auto____7886;
} else
{return G__7884__7885.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__7884__7885.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IList,G__7884__7885);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IList,G__7884__7885);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__7887 = null;
var G__7887__2 = (function (string,f){
return cljs.core.ci_reduce.cljs$lang$arity$2(string,f);
});
var G__7887__3 = (function (string,f,start){
return cljs.core.ci_reduce.cljs$lang$arity$3(string,f,start);
});
G__7887 = function(string,f,start){
switch(arguments.length){
case 2:
return G__7887__2.call(this,string,f);
case 3:
return G__7887__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7887;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__7888 = null;
var G__7888__2 = (function (string,k){
return cljs.core._nth.cljs$lang$arity$2(string,k);
});
var G__7888__3 = (function (string,k,not_found){
return cljs.core._nth.cljs$lang$arity$3(string,k,not_found);
});
G__7888 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__7888__2.call(this,string,k);
case 3:
return G__7888__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7888;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__7889 = null;
var G__7889__2 = (function (string,n){
if((n < cljs.core._count(string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__7889__3 = (function (string,n,not_found){
if((n < cljs.core._count(string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__7889 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__7889__2.call(this,string,n);
case 3:
return G__7889__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7889;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.cljs$lang$arity$2(string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode(o);
}));

/**
* @constructor
*/
cljs.core.Keyword = (function (k){
this.k = k;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1;
})
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function() {
var G__7901 = null;
var G__7901__2 = (function (this_sym7892,coll){
var this__7894 = this;
var this_sym7892__7895 = this;
var ___7896 = this_sym7892__7895;
if((coll == null))
{return null;
} else
{var strobj__7897 = coll.strobj;
if((strobj__7897 == null))
{return cljs.core._lookup.cljs$lang$arity$3(coll,this__7894.k,null);
} else
{return (strobj__7897[this__7894.k]);
}
}
});
var G__7901__3 = (function (this_sym7893,coll,not_found){
var this__7894 = this;
var this_sym7893__7898 = this;
var ___7899 = this_sym7893__7898;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.cljs$lang$arity$3(coll,this__7894.k,not_found);
}
});
G__7901 = function(this_sym7893,coll,not_found){
switch(arguments.length){
case 2:
return G__7901__2.call(this,this_sym7893,coll);
case 3:
return G__7901__3.call(this,this_sym7893,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7901;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym7890,args7891){
var this__7900 = this;
return this_sym7890.call.apply(this_sym7890,[this_sym7890].concat(args7891.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__7910 = null;
var G__7910__2 = (function (this_sym7904,coll){
var this_sym7904__7906 = this;
var this__7907 = this_sym7904__7906;
return cljs.core._lookup.cljs$lang$arity$3(coll,this__7907.toString(),null);
});
var G__7910__3 = (function (this_sym7905,coll,not_found){
var this_sym7905__7908 = this;
var this__7909 = this_sym7905__7908;
return cljs.core._lookup.cljs$lang$arity$3(coll,this__7909.toString(),not_found);
});
G__7910 = function(this_sym7905,coll,not_found){
switch(arguments.length){
case 2:
return G__7910__2.call(this,this_sym7905,coll);
case 3:
return G__7910__3.call(this,this_sym7905,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7910;
})()
;
String.prototype.apply = (function (this_sym7902,args7903){
return this_sym7902.call.apply(this_sym7902,[this_sym7902].concat(args7903.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count(args) < 2))
{return cljs.core._lookup.cljs$lang$arity$3((args[0]),s,null);
} else
{return cljs.core._lookup.cljs$lang$arity$3((args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__7912 = lazy_seq.x;
if(lazy_seq.realized)
{return x__7912;
} else
{lazy_seq.x = (x__7912.cljs$lang$arity$0 ? x__7912.cljs$lang$arity$0() : x__7912.call(null));
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x,__hash){
this.meta = meta;
this.realized = realized;
this.x = x;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850700;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7913 = this;
var h__2199__auto____7914 = this__7913.__hash;
if(!((h__2199__auto____7914 == null)))
{return h__2199__auto____7914;
} else
{var h__2199__auto____7915 = cljs.core.hash_coll(coll);
this__7913.__hash = h__2199__auto____7915;
return h__2199__auto____7915;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__7916 = this;
return cljs.core._seq(coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7917 = this;
return cljs.core.cons(o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__7918 = this;
var this__7919 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__7919], 0));
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7920 = this;
return cljs.core.seq(cljs.core.lazy_seq_value(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7921 = this;
return cljs.core.first(cljs.core.lazy_seq_value(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7922 = this;
return cljs.core.rest(cljs.core.lazy_seq_value(coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7923 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__7924 = this;
return (new cljs.core.LazySeq(meta,this__7924.realized,this__7924.x,this__7924.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7925 = this;
return this__7925.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__7926 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,this__7926.meta);
});
cljs.core.LazySeq;

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.cljs$lang$type = true;
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7927 = this;
return this__7927.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__7928 = this;
var ___7929 = this;
(this__7928.buf[this__7928.end] = o);
return this__7928.end = (this__7928.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__7930 = this;
var ___7931 = this;
var ret__7932 = (new cljs.core.ArrayChunk(this__7930.buf,0,this__7930.end));
this__7930.buf = null;
return ret__7932;
});
cljs.core.ChunkBuffer;
cljs.core.chunk_buffer = (function chunk_buffer(capacity){
return (new cljs.core.ChunkBuffer(cljs.core.make_array.cljs$lang$arity$1(capacity),0));
});

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.cljs$lang$type = true;
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7933 = this;
return cljs.core.ci_reduce.cljs$lang$arity$4(coll,f,(this__7933.arr[this__7933.off]),(this__7933.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7934 = this;
return cljs.core.ci_reduce.cljs$lang$arity$4(coll,f,start,this__7934.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__7935 = this;
if((this__7935.off === this__7935.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__7935.arr,(this__7935.off + 1),this__7935.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__7936 = this;
return (this__7936.arr[(this__7936.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__7937 = this;
if((function (){var and__3822__auto____7938 = (i >= 0);
if(and__3822__auto____7938)
{return (i < (this__7937.end - this__7937.off));
} else
{return and__3822__auto____7938;
}
})())
{return (this__7937.arr[(this__7937.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7939 = this;
return (this__7939.end - this__7939.off);
});
cljs.core.ArrayChunk;
cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){
return array_chunk.cljs$lang$arity$3(arr,0,arr.length);
});
var array_chunk__2 = (function (arr,off){
return array_chunk.cljs$lang$arity$3(arr,off,arr.length);
});
var array_chunk__3 = (function (arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw('Invalid arity: ' + arguments.length);
};
array_chunk.cljs$lang$arity$1 = array_chunk__1;
array_chunk.cljs$lang$arity$2 = array_chunk__2;
array_chunk.cljs$lang$arity$3 = array_chunk__3;
return array_chunk;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27656296;
})
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__7940 = this;
return cljs.core.cons(o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__7941 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__7942 = this;
return cljs.core._nth.cljs$lang$arity$2(this__7942.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__7943 = this;
if((cljs.core._count(this__7943.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first(this__7943.chunk),this__7943.more,this__7943.meta));
} else
{if((this__7943.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7943.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__7944 = this;
if((this__7944.more == null))
{return null;
} else
{return this__7944.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7945 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__7946 = this;
return (new cljs.core.ChunkedCons(this__7946.chunk,this__7946.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__7947 = this;
return this__7947.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__7948 = this;
return this__7948.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__7949 = this;
if((this__7949.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__7949.more;
}
});
cljs.core.ChunkedCons;
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){
if((cljs.core._count(chunk) === 0))
{return rest;
} else
{return (new cljs.core.ChunkedCons(chunk,rest,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){
return b.add(x);
});
cljs.core.chunk = (function chunk(b){
return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){
return cljs.core._chunked_first(s);
});
cljs.core.chunk_rest = (function chunk_rest(s){
return cljs.core._chunked_rest(s);
});
cljs.core.chunk_next = (function chunk_next(s){
if((function (){var G__7953__7954 = s;
if(G__7953__7954)
{if(cljs.core.truth_((function (){var or__3824__auto____7955 = null;
if(cljs.core.truth_(or__3824__auto____7955))
{return or__3824__auto____7955;
} else
{return G__7953__7954.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__7953__7954.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_(cljs.core.IChunkedNext,G__7953__7954);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IChunkedNext,G__7953__7954);
}
})())
{return cljs.core._chunked_next(s);
} else
{return cljs.core.seq(cljs.core._chunked_rest(s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__7958 = [];
var s__7959 = s;
while(true){
if(cljs.core.seq(s__7959))
{ary__7958.push(cljs.core.first(s__7959));
{
var G__7960 = cljs.core.next(s__7959);
s__7959 = G__7960;
continue;
}
} else
{return ary__7958;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__7964 = cljs.core.make_array.cljs$lang$arity$1(cljs.core.count(coll));
var i__7965 = 0;
var xs__7966 = cljs.core.seq(coll);
while(true){
if(xs__7966)
{(ret__7964[i__7965] = cljs.core.to_array(cljs.core.first(xs__7966)));
{
var G__7967 = (i__7965 + 1);
var G__7968 = cljs.core.next(xs__7966);
i__7965 = G__7967;
xs__7966 = G__7968;
continue;
}
} else
{}
break;
}
return ret__7964;
});
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_(size_or_seq))
{return long_array.cljs$lang$arity$2(size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_(size_or_seq))
{return cljs.core.into_array.cljs$lang$arity$1(size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("long-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a__7976 = cljs.core.make_array.cljs$lang$arity$1(size);
if(cljs.core.seq_QMARK_(init_val_or_seq))
{var s__7977 = cljs.core.seq(init_val_or_seq);
var i__7978 = 0;
var s__7979 = s__7977;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7980 = s__7979;
if(and__3822__auto____7980)
{return (i__7978 < size);
} else
{return and__3822__auto____7980;
}
})()))
{(a__7976[i__7978] = cljs.core.first(s__7979));
{
var G__7983 = (i__7978 + 1);
var G__7984 = cljs.core.next(s__7979);
i__7978 = G__7983;
s__7979 = G__7984;
continue;
}
} else
{return a__7976;
}
break;
}
} else
{var n__2534__auto____7981 = size;
var i__7982 = 0;
while(true){
if((i__7982 < n__2534__auto____7981))
{(a__7976[i__7982] = init_val_or_seq);
{
var G__7985 = (i__7982 + 1);
i__7982 = G__7985;
continue;
}
} else
{}
break;
}
return a__7976;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
long_array.cljs$lang$arity$1 = long_array__1;
long_array.cljs$lang$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_(size_or_seq))
{return double_array.cljs$lang$arity$2(size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_(size_or_seq))
{return cljs.core.into_array.cljs$lang$arity$1(size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("double-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a__7993 = cljs.core.make_array.cljs$lang$arity$1(size);
if(cljs.core.seq_QMARK_(init_val_or_seq))
{var s__7994 = cljs.core.seq(init_val_or_seq);
var i__7995 = 0;
var s__7996 = s__7994;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____7997 = s__7996;
if(and__3822__auto____7997)
{return (i__7995 < size);
} else
{return and__3822__auto____7997;
}
})()))
{(a__7993[i__7995] = cljs.core.first(s__7996));
{
var G__8000 = (i__7995 + 1);
var G__8001 = cljs.core.next(s__7996);
i__7995 = G__8000;
s__7996 = G__8001;
continue;
}
} else
{return a__7993;
}
break;
}
} else
{var n__2534__auto____7998 = size;
var i__7999 = 0;
while(true){
if((i__7999 < n__2534__auto____7998))
{(a__7993[i__7999] = init_val_or_seq);
{
var G__8002 = (i__7999 + 1);
i__7999 = G__8002;
continue;
}
} else
{}
break;
}
return a__7993;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
double_array.cljs$lang$arity$1 = double_array__1;
double_array.cljs$lang$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_(size_or_seq))
{return object_array.cljs$lang$arity$2(size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_(size_or_seq))
{return cljs.core.into_array.cljs$lang$arity$1(size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("object-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a__8010 = cljs.core.make_array.cljs$lang$arity$1(size);
if(cljs.core.seq_QMARK_(init_val_or_seq))
{var s__8011 = cljs.core.seq(init_val_or_seq);
var i__8012 = 0;
var s__8013 = s__8011;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____8014 = s__8013;
if(and__3822__auto____8014)
{return (i__8012 < size);
} else
{return and__3822__auto____8014;
}
})()))
{(a__8010[i__8012] = cljs.core.first(s__8013));
{
var G__8017 = (i__8012 + 1);
var G__8018 = cljs.core.next(s__8013);
i__8012 = G__8017;
s__8013 = G__8018;
continue;
}
} else
{return a__8010;
}
break;
}
} else
{var n__2534__auto____8015 = size;
var i__8016 = 0;
while(true){
if((i__8016 < n__2534__auto____8015))
{(a__8010[i__8016] = init_val_or_seq);
{
var G__8019 = (i__8016 + 1);
i__8016 = G__8019;
continue;
}
} else
{}
break;
}
return a__8010;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
object_array.cljs$lang$arity$1 = object_array__1;
object_array.cljs$lang$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_(s))
{return cljs.core.count(s);
} else
{var s__8024 = s;
var i__8025 = n;
var sum__8026 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____8027 = (i__8025 > 0);
if(and__3822__auto____8027)
{return cljs.core.seq(s__8024);
} else
{return and__3822__auto____8027;
}
})()))
{{
var G__8028 = cljs.core.next(s__8024);
var G__8029 = (i__8025 - 1);
var G__8030 = (sum__8026 + 1);
s__8024 = G__8028;
i__8025 = G__8029;
sum__8026 = G__8030;
continue;
}
} else
{return sum__8026;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null))
{return null;
} else
{if((cljs.core.next(arglist) == null))
{return cljs.core.seq(cljs.core.first(arglist));
} else
{if("\uFDD0'else")
{return cljs.core.cons(cljs.core.first(arglist),spread(cljs.core.next(arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
}),null));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
}),null));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__8035 = cljs.core.seq(x);
if(s__8035)
{if(cljs.core.chunked_seq_QMARK_(s__8035))
{return cljs.core.chunk_cons(cljs.core.chunk_first(s__8035),concat.cljs$lang$arity$2(cljs.core.chunk_rest(s__8035),y));
} else
{return cljs.core.cons(cljs.core.first(s__8035),concat.cljs$lang$arity$2(cljs.core.rest(s__8035),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__8039__delegate = function (x,y,zs){
var cat__8038 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__8037 = cljs.core.seq(xys);
if(xys__8037)
{if(cljs.core.chunked_seq_QMARK_(xys__8037))
{return cljs.core.chunk_cons(cljs.core.chunk_first(xys__8037),cat(cljs.core.chunk_rest(xys__8037),zs));
} else
{return cljs.core.cons(cljs.core.first(xys__8037),cat(cljs.core.rest(xys__8037),zs));
}
} else
{if(cljs.core.truth_(zs))
{return cat(cljs.core.first(zs),cljs.core.next(zs));
} else
{return null;
}
}
}),null));
});
return (cat__8038.cljs$lang$arity$2 ? cat__8038.cljs$lang$arity$2(concat.cljs$lang$arity$2(x,y),zs) : cat__8038.call(null,concat.cljs$lang$arity$2(x,y),zs));
};
var G__8039 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8039__delegate.call(this, x, y, zs);
};
G__8039.cljs$lang$maxFixedArity = 2;
G__8039.cljs$lang$applyTo = (function (arglist__8040){
var x = cljs.core.first(arglist__8040);
var y = cljs.core.first(cljs.core.next(arglist__8040));
var zs = cljs.core.rest(cljs.core.next(arglist__8040));
return G__8039__delegate(x, y, zs);
});
G__8039.cljs$lang$arity$variadic = G__8039__delegate;
return G__8039;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$lang$arity$0 = concat__0;
concat.cljs$lang$arity$1 = concat__1;
concat.cljs$lang$arity$2 = concat__2;
concat.cljs$lang$arity$variadic = concat__3.cljs$lang$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljs.core.seq(args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons(a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons(a,cljs.core.cons(b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,args)));
});
var list_STAR___5 = (function() { 
var G__8041__delegate = function (a,b,c,d,more){
return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(more)))));
};
var G__8041 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8041__delegate.call(this, a, b, c, d, more);
};
G__8041.cljs$lang$maxFixedArity = 4;
G__8041.cljs$lang$applyTo = (function (arglist__8042){
var a = cljs.core.first(arglist__8042);
var b = cljs.core.first(cljs.core.next(arglist__8042));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8042)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8042))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8042))));
return G__8041__delegate(a, b, c, d, more);
});
G__8041.cljs$lang$arity$variadic = G__8041__delegate;
return G__8041;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$lang$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$lang$arity$1 = list_STAR___1;
list_STAR_.cljs$lang$arity$2 = list_STAR___2;
list_STAR_.cljs$lang$arity$3 = list_STAR___3;
list_STAR_.cljs$lang$arity$4 = list_STAR___4;
list_STAR_.cljs$lang$arity$variadic = list_STAR___5.cljs$lang$arity$variadic;
return list_STAR_;
})()
;
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient(coll);
});
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_(tcoll);
});
cljs.core.conj_BANG_ = (function conj_BANG_(tcoll,val){
return cljs.core._conj_BANG_(tcoll,val);
});
cljs.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){
return cljs.core._assoc_BANG_(tcoll,key,val);
});
cljs.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){
return cljs.core._dissoc_BANG_(tcoll,key);
});
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_(tcoll);
});
cljs.core.disj_BANG_ = (function disj_BANG_(tcoll,val){
return cljs.core._disjoin_BANG_(tcoll,val);
});
cljs.core.apply_to = (function apply_to(f,argc,args){
var args__8084 = cljs.core.seq(args);
if((argc === 0))
{return (f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null));
} else
{var a__8085 = cljs.core._first(args__8084);
var args__8086 = cljs.core._rest(args__8084);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__8085);
} else
{return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(a__8085) : f.call(null,a__8085));
}
} else
{var b__8087 = cljs.core._first(args__8086);
var args__8088 = cljs.core._rest(args__8086);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__8085,b__8087);
} else
{return (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(a__8085,b__8087) : f.call(null,a__8085,b__8087));
}
} else
{var c__8089 = cljs.core._first(args__8088);
var args__8090 = cljs.core._rest(args__8088);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__8085,b__8087,c__8089);
} else
{return (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(a__8085,b__8087,c__8089) : f.call(null,a__8085,b__8087,c__8089));
}
} else
{var d__8091 = cljs.core._first(args__8090);
var args__8092 = cljs.core._rest(args__8090);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__8085,b__8087,c__8089,d__8091);
} else
{return (f.cljs$lang$arity$4 ? f.cljs$lang$arity$4(a__8085,b__8087,c__8089,d__8091) : f.call(null,a__8085,b__8087,c__8089,d__8091));
}
} else
{var e__8093 = cljs.core._first(args__8092);
var args__8094 = cljs.core._rest(args__8092);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__8085,b__8087,c__8089,d__8091,e__8093);
} else
{return (f.cljs$lang$arity$5 ? f.cljs$lang$arity$5(a__8085,b__8087,c__8089,d__8091,e__8093) : f.call(null,a__8085,b__8087,c__8089,d__8091,e__8093));
}
} else
{var f__8095 = cljs.core._first(args__8094);
var args__8096 = cljs.core._rest(args__8094);
if((argc === 6))
{if(f__8095.cljs$lang$arity$6)
{return f__8095.cljs$lang$arity$6(a__8085,b__8087,c__8089,d__8091,e__8093,f__8095);
} else
{return (f__8095.cljs$lang$arity$6 ? f__8095.cljs$lang$arity$6(a__8085,b__8087,c__8089,d__8091,e__8093,f__8095) : f__8095.call(null,a__8085,b__8087,c__8089,d__8091,e__8093,f__8095));
}
} else
{var g__8097 = cljs.core._first(args__8096);
var args__8098 = cljs.core._rest(args__8096);
if((argc === 7))
{if(f__8095.cljs$lang$arity$7)
{return f__8095.cljs$lang$arity$7(a__8085,b__8087,c__8089,d__8091,e__8093,f__8095,g__8097);
} else
{return (f__8095.cljs$lang$arity$7 ? f__8095.cljs$lang$arity$7(a__8085,b__8087,c__8089,d__8091,e__8093,f__8095,g__8097) : f__8095.call(null,a__8085,b__8087,c__8089,d__8091,e__8093,f__8095,g__8097));
}
} else
{var h__8099 = cljs.core._first(args__8098);
var args__8100 = cljs.core._rest(args__8098);
if((argc === 8))
{if(f__8095.cljs$lang$arity$8)
{return f__8095.cljs$lang$arity$8(a__8085,b__8087,c__8089,d__8091,e__8093,f__8095,g__8097,h__8099);
} else
{return (f__8095.cljs$lang$arity$8 ? f__8095.cljs$lang$arity$8(a__8085,b__8087,c__8089,d__8091,e__8093,f__8095,g__8097,h__8099) : f__8095.call(null,a__8085,b__8087,c__8089,d__8091,e__8093,f__8095,g__8097,h__8099));
}
} else
{var i__8101 = cljs.core._first(args__8100);
var args__8102 = cljs.core._rest(args__8100);
if((argc === 9))
{if(f__8095.cljs$lang$arity$9)
{return f__8095.cljs$lang$arity$9(a__8085,b__8087,c__8089,d__8091,e__8093,f__8095,g__8097,h__8099,i__8101);
} else
{return (f__8095.cljs$lang$arity$9 ? f__8095.cljs$lang$arity$9(a__8085,b__8087,c__8089,d__8091,e__8093,f__8095,g__8097,h__8099,i__8101) : f__8095.call(null,a__8085,b__8087,c__8089,d__8091,e__8093,f__8095,g__8097,h__8099,i__8101));
}
} else
{var j__8103 = cljs.core._first(args__8102);
var args__8104 = cljs.core._rest(args__8102);
if((argc === 10))
{if(f__8095.cljs$lang$arity$10)
{return f__8095.cljs$lang$arity$10(a__8085,b__8087,c__8089,d__8091,e__8093,f__8095,g__8097,h__8099,i__8101,j__8103);
} else
{return (f__8095.cljs$lang$arity$10 ? f__8095.cljs$lang$arity$10(a__8085,b__8087,c__8089,d__8091,e__8093,f__8095,g__8097,h__8099,i__8101,j__8103) : f__8095.call(null,a__8085,b__8087,c__8089,d__8091,e__8093,f__8095,g__8097,h__8099,i__8101,j__8103));
}
} else
{var k__8105 = cljs.core._first(args__8104);
var args__8106 = cljs.core._rest(args__8104);
if((argc === 11))
{if(f__8095.cljs$lang$arity$11)
{return f__8095.cljs$lang$arity$11(a__8085,b__8087,c__8089,d__8091,e__8093,f__8095,g__8097,h__8099,i__8101,j__8103,k__8105);
} else
{return (f__8095.cljs$lang$arity$11 ? f__8095.cljs$lang$arity$11(a__8085,b__8087,c__8089,d__8091,e__8093,f__8095,g__8097,h__8099,i__8101,j__8103,k__8105) : f__8095.call(null,a__8085,b__8087,c__8089,d__8091,e__8093,f__8095,g__8097,h__8099,i__8101,j__8103,k__8105));
}
} else
{var l__8107 = cljs.core._first(args__8106);
var args__8108 = cljs.core._rest(args__8106);
if((argc === 12))
{if(f__8095.cljs$lang$arity$12)
{return f__8095.cljs$lang$arity$12(a__8085,b__8087,c__8089,d__8091,e__8093,f__8095,g__8097,h__8099,i__8101,j__8103,k__8105,l__8107);
} else
{return (f__8095.cljs$lang$arity$12 ? f__8095.cljs$lang$arity$12(a__8085,b__8087,c__8089,d__8091,e__8093,f__8095,g__8097,h__8099,i__8101,j__8103,k__8105,l__8107) : f__8095.call(null,a__8085,b__8087,c__8089,d__8091,e__8093,f__8095,g__8097,h__8099,i__8101,j__8103,k__8105,l__8107));
}
} else
{var m__8109 = cljs.core._first(args__8108);
var args__8110 = cljs.core._rest(args__8108);
if((argc === 13))
{if(f__8095.cljs$lang$arity$13)
{return f__8095.cljs$lang$arity$13(a__8085,b__8087,c__8089,d__8091,e__8093,f__8095,g__8097,h__8099,i__8101,j__8103,k__8105,l__8107,m__8109);
} else
{return (f__8095.cljs$lang$arity$13 ? f__8095.cljs$lang$arity$13(a__8085,b__8087,c__8089,d__8091,e__8093,f__8095,g__8097,h__8099,i__8101,j__8103,k__8105,l__8107,m__8109) : f__8095.call(null,a__8085,b__8087,c__8089,d__8091,e__8093,f__8095,g__8097,h__8099,i__8101,j__8103,k__8105,l__8107,m__8109));
}
} else
{var n__8111 = cljs.core._first(args__8110);
var args__8112 = cljs.core._rest(args__8110);
if((argc === 14))
{if(f__8095.cljs$lang$arity$14)
{return f__8095.cljs$lang$arity$14(a__8085,b__8087,c__8089,d__8091,e__8093,f__8095,g__8097,h__8099,i__8101,j__8103,k__8105,l__8107,m__8109,n__8111);
} else
{return (f__8095.cljs$lang$arity$14 ? f__8095.cljs$lang$arity$14(a__8085,b__8087,c__8089,d__8091,e__8093,f__8095,g__8097,h__8099,i__8101,j__8103,k__8105,l__8107,m__8109,n__8111) : f__8095.call(null,a__8085,b__8087,c__8089,d__8091,e__8093,f__8095,g__8097,h__8099,i__8101,j__8103,k__8105,l__8107,m__8109,n__8111));
}
} else
{var o__8113 = cljs.core._first(args__8112);
var args__8114 = cljs.core._rest(args__8112);
if((argc === 15))
{if(f__8095.cljs$lang$arity$15)
{return f__8095.cljs$lang$arity$15(a__8085,b__8087,c__8089,d__8091,e__8093,f__8095,g__8097,h__8099,i__8101,j__8103,k__8105,l__8107,m__8109,n__8111,o__8113);
} else
{return (f__8095.cljs$lang$arity$15 ? f__8095.cljs$lang$arity$15(a__8085,b__8087,c__8089,d__8091,e__8093,f__8095,g__8097,h__8099,i__8101,j__8103,k__8105,l__8107,m__8109,n__8111,o__8113) : f__8095.call(null,a__8085,b__8087,c__8089,d__8091,e__8093,f__8095,g__8097,h__8099,i__8101,j__8103,k__8105,l__8107,m__8109,n__8111,o__8113));
}
} else
{var p__8115 = cljs.core._first(args__8114);
var args__8116 = cljs.core._rest(args__8114);
if((argc === 16))
{if(f__8095.cljs$lang$arity$16)
{return f__8095.cljs$lang$arity$16(a__8085,b__8087,c__8089,d__8091,e__8093,f__8095,g__8097,h__8099,i__8101,j__8103,k__8105,l__8107,m__8109,n__8111,o__8113,p__8115);
} else
{return (f__8095.cljs$lang$arity$16 ? f__8095.cljs$lang$arity$16(a__8085,b__8087,c__8089,d__8091,e__8093,f__8095,g__8097,h__8099,i__8101,j__8103,k__8105,l__8107,m__8109,n__8111,o__8113,p__8115) : f__8095.call(null,a__8085,b__8087,c__8089,d__8091,e__8093,f__8095,g__8097,h__8099,i__8101,j__8103,k__8105,l__8107,m__8109,n__8111,o__8113,p__8115));
}
} else
{var q__8117 = cljs.core._first(args__8116);
var args__8118 = cljs.core._rest(args__8116);
if((argc === 17))
{if(f__8095.cljs$lang$arity$17)
{return f__8095.cljs$lang$arity$17(a__8085,b__8087,c__8089,d__8091,e__8093,f__8095,g__8097,h__8099,i__8101,j__8103,k__8105,l__8107,m__8109,n__8111,o__8113,p__8115,q__8117);
} else
{return (f__8095.cljs$lang$arity$17 ? f__8095.cljs$lang$arity$17(a__8085,b__8087,c__8089,d__8091,e__8093,f__8095,g__8097,h__8099,i__8101,j__8103,k__8105,l__8107,m__8109,n__8111,o__8113,p__8115,q__8117) : f__8095.call(null,a__8085,b__8087,c__8089,d__8091,e__8093,f__8095,g__8097,h__8099,i__8101,j__8103,k__8105,l__8107,m__8109,n__8111,o__8113,p__8115,q__8117));
}
} else
{var r__8119 = cljs.core._first(args__8118);
var args__8120 = cljs.core._rest(args__8118);
if((argc === 18))
{if(f__8095.cljs$lang$arity$18)
{return f__8095.cljs$lang$arity$18(a__8085,b__8087,c__8089,d__8091,e__8093,f__8095,g__8097,h__8099,i__8101,j__8103,k__8105,l__8107,m__8109,n__8111,o__8113,p__8115,q__8117,r__8119);
} else
{return (f__8095.cljs$lang$arity$18 ? f__8095.cljs$lang$arity$18(a__8085,b__8087,c__8089,d__8091,e__8093,f__8095,g__8097,h__8099,i__8101,j__8103,k__8105,l__8107,m__8109,n__8111,o__8113,p__8115,q__8117,r__8119) : f__8095.call(null,a__8085,b__8087,c__8089,d__8091,e__8093,f__8095,g__8097,h__8099,i__8101,j__8103,k__8105,l__8107,m__8109,n__8111,o__8113,p__8115,q__8117,r__8119));
}
} else
{var s__8121 = cljs.core._first(args__8120);
var args__8122 = cljs.core._rest(args__8120);
if((argc === 19))
{if(f__8095.cljs$lang$arity$19)
{return f__8095.cljs$lang$arity$19(a__8085,b__8087,c__8089,d__8091,e__8093,f__8095,g__8097,h__8099,i__8101,j__8103,k__8105,l__8107,m__8109,n__8111,o__8113,p__8115,q__8117,r__8119,s__8121);
} else
{return (f__8095.cljs$lang$arity$19 ? f__8095.cljs$lang$arity$19(a__8085,b__8087,c__8089,d__8091,e__8093,f__8095,g__8097,h__8099,i__8101,j__8103,k__8105,l__8107,m__8109,n__8111,o__8113,p__8115,q__8117,r__8119,s__8121) : f__8095.call(null,a__8085,b__8087,c__8089,d__8091,e__8093,f__8095,g__8097,h__8099,i__8101,j__8103,k__8105,l__8107,m__8109,n__8111,o__8113,p__8115,q__8117,r__8119,s__8121));
}
} else
{var t__8123 = cljs.core._first(args__8122);
var args__8124 = cljs.core._rest(args__8122);
if((argc === 20))
{if(f__8095.cljs$lang$arity$20)
{return f__8095.cljs$lang$arity$20(a__8085,b__8087,c__8089,d__8091,e__8093,f__8095,g__8097,h__8099,i__8101,j__8103,k__8105,l__8107,m__8109,n__8111,o__8113,p__8115,q__8117,r__8119,s__8121,t__8123);
} else
{return (f__8095.cljs$lang$arity$20 ? f__8095.cljs$lang$arity$20(a__8085,b__8087,c__8089,d__8091,e__8093,f__8095,g__8097,h__8099,i__8101,j__8103,k__8105,l__8107,m__8109,n__8111,o__8113,p__8115,q__8117,r__8119,s__8121,t__8123) : f__8095.call(null,a__8085,b__8087,c__8089,d__8091,e__8093,f__8095,g__8097,h__8099,i__8101,j__8103,k__8105,l__8107,m__8109,n__8111,o__8113,p__8115,q__8117,r__8119,s__8121,t__8123));
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity__8139 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8140 = cljs.core.bounded_count(args,(fixed_arity__8139 + 1));
if((bc__8140 <= fixed_arity__8139))
{return cljs.core.apply_to(f,bc__8140,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array(args));
}
});
var apply__3 = (function (f,x,args){
var arglist__8141 = cljs.core.list_STAR_.cljs$lang$arity$2(x,args);
var fixed_arity__8142 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8143 = cljs.core.bounded_count(arglist__8141,(fixed_arity__8142 + 1));
if((bc__8143 <= fixed_arity__8142))
{return cljs.core.apply_to(f,bc__8143,arglist__8141);
} else
{return f.cljs$lang$applyTo(arglist__8141);
}
} else
{return f.apply(f,cljs.core.to_array(arglist__8141));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__8144 = cljs.core.list_STAR_.cljs$lang$arity$3(x,y,args);
var fixed_arity__8145 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8146 = cljs.core.bounded_count(arglist__8144,(fixed_arity__8145 + 1));
if((bc__8146 <= fixed_arity__8145))
{return cljs.core.apply_to(f,bc__8146,arglist__8144);
} else
{return f.cljs$lang$applyTo(arglist__8144);
}
} else
{return f.apply(f,cljs.core.to_array(arglist__8144));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__8147 = cljs.core.list_STAR_.cljs$lang$arity$4(x,y,z,args);
var fixed_arity__8148 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8149 = cljs.core.bounded_count(arglist__8147,(fixed_arity__8148 + 1));
if((bc__8149 <= fixed_arity__8148))
{return cljs.core.apply_to(f,bc__8149,arglist__8147);
} else
{return f.cljs$lang$applyTo(arglist__8147);
}
} else
{return f.apply(f,cljs.core.to_array(arglist__8147));
}
});
var apply__6 = (function() { 
var G__8153__delegate = function (f,a,b,c,d,args){
var arglist__8150 = cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(args)))));
var fixed_arity__8151 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8152 = cljs.core.bounded_count(arglist__8150,(fixed_arity__8151 + 1));
if((bc__8152 <= fixed_arity__8151))
{return cljs.core.apply_to(f,bc__8152,arglist__8150);
} else
{return f.cljs$lang$applyTo(arglist__8150);
}
} else
{return f.apply(f,cljs.core.to_array(arglist__8150));
}
};
var G__8153 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__8153__delegate.call(this, f, a, b, c, d, args);
};
G__8153.cljs$lang$maxFixedArity = 5;
G__8153.cljs$lang$applyTo = (function (arglist__8154){
var f = cljs.core.first(arglist__8154);
var a = cljs.core.first(cljs.core.next(arglist__8154));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8154)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8154))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8154)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8154)))));
return G__8153__delegate(f, a, b, c, d, args);
});
G__8153.cljs$lang$arity$variadic = G__8153__delegate;
return G__8153;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$lang$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$lang$arity$2 = apply__2;
apply.cljs$lang$arity$3 = apply__3;
apply.cljs$lang$arity$4 = apply__4;
apply.cljs$lang$arity$5 = apply__5;
apply.cljs$lang$arity$variadic = apply__6.cljs$lang$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta(obj,cljs.core.apply.cljs$lang$arity$3(f,cljs.core.meta(obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__8155){
var obj = cljs.core.first(arglist__8155);
var f = cljs.core.first(cljs.core.next(arglist__8155));
var args = cljs.core.rest(cljs.core.next(arglist__8155));
return vary_meta__delegate(obj, f, args);
});
vary_meta.cljs$lang$arity$variadic = vary_meta__delegate;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return !(cljs.core._EQ_.cljs$lang$arity$2(x,y));
});
var not_EQ___3 = (function() { 
var G__8156__delegate = function (x,y,more){
return cljs.core.not(cljs.core.apply.cljs$lang$arity$4(cljs.core._EQ_,x,y,more));
};
var G__8156 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8156__delegate.call(this, x, y, more);
};
G__8156.cljs$lang$maxFixedArity = 2;
G__8156.cljs$lang$applyTo = (function (arglist__8157){
var x = cljs.core.first(arglist__8157);
var y = cljs.core.first(cljs.core.next(arglist__8157));
var more = cljs.core.rest(cljs.core.next(arglist__8157));
return G__8156__delegate(x, y, more);
});
G__8156.cljs$lang$arity$variadic = G__8156__delegate;
return G__8156;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$lang$arity$1 = not_EQ___1;
not_EQ_.cljs$lang$arity$2 = not_EQ___2;
not_EQ_.cljs$lang$arity$variadic = not_EQ___3.cljs$lang$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.seq(coll))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq(coll) == null))
{return true;
} else
{if(cljs.core.truth_((pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(cljs.core.first(coll)) : pred.call(null,cljs.core.first(coll)))))
{{
var G__8158 = pred;
var G__8159 = cljs.core.next(coll);
pred = G__8158;
coll = G__8159;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return !(cljs.core.every_QMARK_(pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.seq(coll))
{var or__3824__auto____8161 = (pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(cljs.core.first(coll)) : pred.call(null,cljs.core.first(coll)));
if(cljs.core.truth_(or__3824__auto____8161))
{return or__3824__auto____8161;
} else
{{
var G__8162 = pred;
var G__8163 = cljs.core.next(coll);
pred = G__8162;
coll = G__8163;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not(cljs.core.some(pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_(n))
{return ((n & 1) === 0);
} else
{throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return !(cljs.core.even_QMARK_(n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__8164 = null;
var G__8164__0 = (function (){
return cljs.core.not((f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null)));
});
var G__8164__1 = (function (x){
return cljs.core.not((f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(x) : f.call(null,x)));
});
var G__8164__2 = (function (x,y){
return cljs.core.not((f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(x,y) : f.call(null,x,y)));
});
var G__8164__3 = (function() { 
var G__8165__delegate = function (x,y,zs){
return cljs.core.not(cljs.core.apply.cljs$lang$arity$4(f,x,y,zs));
};
var G__8165 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8165__delegate.call(this, x, y, zs);
};
G__8165.cljs$lang$maxFixedArity = 2;
G__8165.cljs$lang$applyTo = (function (arglist__8166){
var x = cljs.core.first(arglist__8166);
var y = cljs.core.first(cljs.core.next(arglist__8166));
var zs = cljs.core.rest(cljs.core.next(arglist__8166));
return G__8165__delegate(x, y, zs);
});
G__8165.cljs$lang$arity$variadic = G__8165__delegate;
return G__8165;
})()
;
G__8164 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__8164__0.call(this);
case 1:
return G__8164__1.call(this,x);
case 2:
return G__8164__2.call(this,x,y);
default:
return G__8164__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__8164.cljs$lang$maxFixedArity = 2;
G__8164.cljs$lang$applyTo = G__8164__3.cljs$lang$applyTo;
return G__8164;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__8167__delegate = function (args){
return x;
};
var G__8167 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8167__delegate.call(this, args);
};
G__8167.cljs$lang$maxFixedArity = 0;
G__8167.cljs$lang$applyTo = (function (arglist__8168){
var args = cljs.core.seq(arglist__8168);;
return G__8167__delegate(args);
});
G__8167.cljs$lang$arity$variadic = G__8167__delegate;
return G__8167;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__8175 = null;
var G__8175__0 = (function (){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$0 ? g.cljs$lang$arity$0() : g.call(null))) : f.call(null,(g.cljs$lang$arity$0 ? g.cljs$lang$arity$0() : g.call(null))));
});
var G__8175__1 = (function (x){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$1 ? g.cljs$lang$arity$1(x) : g.call(null,x))) : f.call(null,(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1(x) : g.call(null,x))));
});
var G__8175__2 = (function (x,y){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$2 ? g.cljs$lang$arity$2(x,y) : g.call(null,x,y))) : f.call(null,(g.cljs$lang$arity$2 ? g.cljs$lang$arity$2(x,y) : g.call(null,x,y))));
});
var G__8175__3 = (function (x,y,z){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$3 ? g.cljs$lang$arity$3(x,y,z) : g.call(null,x,y,z))) : f.call(null,(g.cljs$lang$arity$3 ? g.cljs$lang$arity$3(x,y,z) : g.call(null,x,y,z))));
});
var G__8175__4 = (function() { 
var G__8176__delegate = function (x,y,z,args){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(cljs.core.apply.cljs$lang$arity$5(g,x,y,z,args)) : f.call(null,cljs.core.apply.cljs$lang$arity$5(g,x,y,z,args)));
};
var G__8176 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8176__delegate.call(this, x, y, z, args);
};
G__8176.cljs$lang$maxFixedArity = 3;
G__8176.cljs$lang$applyTo = (function (arglist__8177){
var x = cljs.core.first(arglist__8177);
var y = cljs.core.first(cljs.core.next(arglist__8177));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8177)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8177)));
return G__8176__delegate(x, y, z, args);
});
G__8176.cljs$lang$arity$variadic = G__8176__delegate;
return G__8176;
})()
;
G__8175 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__8175__0.call(this);
case 1:
return G__8175__1.call(this,x);
case 2:
return G__8175__2.call(this,x,y);
case 3:
return G__8175__3.call(this,x,y,z);
default:
return G__8175__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8175.cljs$lang$maxFixedArity = 3;
G__8175.cljs$lang$applyTo = G__8175__4.cljs$lang$applyTo;
return G__8175;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__8178 = null;
var G__8178__0 = (function (){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$0 ? h.cljs$lang$arity$0() : h.call(null))) : g.call(null,(h.cljs$lang$arity$0 ? h.cljs$lang$arity$0() : h.call(null))))) : f.call(null,(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$0 ? h.cljs$lang$arity$0() : h.call(null))) : g.call(null,(h.cljs$lang$arity$0 ? h.cljs$lang$arity$0() : h.call(null))))));
});
var G__8178__1 = (function (x){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$1 ? h.cljs$lang$arity$1(x) : h.call(null,x))) : g.call(null,(h.cljs$lang$arity$1 ? h.cljs$lang$arity$1(x) : h.call(null,x))))) : f.call(null,(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$1 ? h.cljs$lang$arity$1(x) : h.call(null,x))) : g.call(null,(h.cljs$lang$arity$1 ? h.cljs$lang$arity$1(x) : h.call(null,x))))));
});
var G__8178__2 = (function (x,y){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$2 ? h.cljs$lang$arity$2(x,y) : h.call(null,x,y))) : g.call(null,(h.cljs$lang$arity$2 ? h.cljs$lang$arity$2(x,y) : h.call(null,x,y))))) : f.call(null,(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$2 ? h.cljs$lang$arity$2(x,y) : h.call(null,x,y))) : g.call(null,(h.cljs$lang$arity$2 ? h.cljs$lang$arity$2(x,y) : h.call(null,x,y))))));
});
var G__8178__3 = (function (x,y,z){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$3 ? h.cljs$lang$arity$3(x,y,z) : h.call(null,x,y,z))) : g.call(null,(h.cljs$lang$arity$3 ? h.cljs$lang$arity$3(x,y,z) : h.call(null,x,y,z))))) : f.call(null,(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1((h.cljs$lang$arity$3 ? h.cljs$lang$arity$3(x,y,z) : h.call(null,x,y,z))) : g.call(null,(h.cljs$lang$arity$3 ? h.cljs$lang$arity$3(x,y,z) : h.call(null,x,y,z))))));
});
var G__8178__4 = (function() { 
var G__8179__delegate = function (x,y,z,args){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((g.cljs$lang$arity$1 ? g.cljs$lang$arity$1(cljs.core.apply.cljs$lang$arity$5(h,x,y,z,args)) : g.call(null,cljs.core.apply.cljs$lang$arity$5(h,x,y,z,args)))) : f.call(null,(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1(cljs.core.apply.cljs$lang$arity$5(h,x,y,z,args)) : g.call(null,cljs.core.apply.cljs$lang$arity$5(h,x,y,z,args)))));
};
var G__8179 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8179__delegate.call(this, x, y, z, args);
};
G__8179.cljs$lang$maxFixedArity = 3;
G__8179.cljs$lang$applyTo = (function (arglist__8180){
var x = cljs.core.first(arglist__8180);
var y = cljs.core.first(cljs.core.next(arglist__8180));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8180)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8180)));
return G__8179__delegate(x, y, z, args);
});
G__8179.cljs$lang$arity$variadic = G__8179__delegate;
return G__8179;
})()
;
G__8178 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__8178__0.call(this);
case 1:
return G__8178__1.call(this,x);
case 2:
return G__8178__2.call(this,x,y);
case 3:
return G__8178__3.call(this,x,y,z);
default:
return G__8178__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8178.cljs$lang$maxFixedArity = 3;
G__8178.cljs$lang$applyTo = G__8178__4.cljs$lang$applyTo;
return G__8178;
})()
});
var comp__4 = (function() { 
var G__8181__delegate = function (f1,f2,f3,fs){
var fs__8172 = cljs.core.reverse(cljs.core.list_STAR_.cljs$lang$arity$4(f1,f2,f3,fs));
return (function() { 
var G__8182__delegate = function (args){
var ret__8173 = cljs.core.apply.cljs$lang$arity$2(cljs.core.first(fs__8172),args);
var fs__8174 = cljs.core.next(fs__8172);
while(true){
if(fs__8174)
{{
var G__8183 = cljs.core.first(fs__8174).call(null,ret__8173);
var G__8184 = cljs.core.next(fs__8174);
ret__8173 = G__8183;
fs__8174 = G__8184;
continue;
}
} else
{return ret__8173;
}
break;
}
};
var G__8182 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8182__delegate.call(this, args);
};
G__8182.cljs$lang$maxFixedArity = 0;
G__8182.cljs$lang$applyTo = (function (arglist__8185){
var args = cljs.core.seq(arglist__8185);;
return G__8182__delegate(args);
});
G__8182.cljs$lang$arity$variadic = G__8182__delegate;
return G__8182;
})()
;
};
var G__8181 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8181__delegate.call(this, f1, f2, f3, fs);
};
G__8181.cljs$lang$maxFixedArity = 3;
G__8181.cljs$lang$applyTo = (function (arglist__8186){
var f1 = cljs.core.first(arglist__8186);
var f2 = cljs.core.first(cljs.core.next(arglist__8186));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8186)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8186)));
return G__8181__delegate(f1, f2, f3, fs);
});
G__8181.cljs$lang$arity$variadic = G__8181__delegate;
return G__8181;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$lang$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$lang$arity$0 = comp__0;
comp.cljs$lang$arity$1 = comp__1;
comp.cljs$lang$arity$2 = comp__2;
comp.cljs$lang$arity$3 = comp__3;
comp.cljs$lang$arity$variadic = comp__4.cljs$lang$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2 = (function (f,arg1){
return (function() { 
var G__8187__delegate = function (args){
return cljs.core.apply.cljs$lang$arity$3(f,arg1,args);
};
var G__8187 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8187__delegate.call(this, args);
};
G__8187.cljs$lang$maxFixedArity = 0;
G__8187.cljs$lang$applyTo = (function (arglist__8188){
var args = cljs.core.seq(arglist__8188);;
return G__8187__delegate(args);
});
G__8187.cljs$lang$arity$variadic = G__8187__delegate;
return G__8187;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__8189__delegate = function (args){
return cljs.core.apply.cljs$lang$arity$4(f,arg1,arg2,args);
};
var G__8189 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8189__delegate.call(this, args);
};
G__8189.cljs$lang$maxFixedArity = 0;
G__8189.cljs$lang$applyTo = (function (arglist__8190){
var args = cljs.core.seq(arglist__8190);;
return G__8189__delegate(args);
});
G__8189.cljs$lang$arity$variadic = G__8189__delegate;
return G__8189;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__8191__delegate = function (args){
return cljs.core.apply.cljs$lang$arity$5(f,arg1,arg2,arg3,args);
};
var G__8191 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8191__delegate.call(this, args);
};
G__8191.cljs$lang$maxFixedArity = 0;
G__8191.cljs$lang$applyTo = (function (arglist__8192){
var args = cljs.core.seq(arglist__8192);;
return G__8191__delegate(args);
});
G__8191.cljs$lang$arity$variadic = G__8191__delegate;
return G__8191;
})()
;
});
var partial__5 = (function() { 
var G__8193__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__8194__delegate = function (args){
return cljs.core.apply.cljs$lang$arity$5(f,arg1,arg2,arg3,cljs.core.concat.cljs$lang$arity$2(more,args));
};
var G__8194 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8194__delegate.call(this, args);
};
G__8194.cljs$lang$maxFixedArity = 0;
G__8194.cljs$lang$applyTo = (function (arglist__8195){
var args = cljs.core.seq(arglist__8195);;
return G__8194__delegate(args);
});
G__8194.cljs$lang$arity$variadic = G__8194__delegate;
return G__8194;
})()
;
};
var G__8193 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8193__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__8193.cljs$lang$maxFixedArity = 4;
G__8193.cljs$lang$applyTo = (function (arglist__8196){
var f = cljs.core.first(arglist__8196);
var arg1 = cljs.core.first(cljs.core.next(arglist__8196));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8196)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8196))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8196))));
return G__8193__delegate(f, arg1, arg2, arg3, more);
});
G__8193.cljs$lang$arity$variadic = G__8193__delegate;
return G__8193;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$lang$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$lang$arity$2 = partial__2;
partial.cljs$lang$arity$3 = partial__3;
partial.cljs$lang$arity$4 = partial__4;
partial.cljs$lang$arity$variadic = partial__5.cljs$lang$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__8197 = null;
var G__8197__1 = (function (a){
return (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1((((a == null))?x:a)) : f.call(null,(((a == null))?x:a)));
});
var G__8197__2 = (function (a,b){
return (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2((((a == null))?x:a),b) : f.call(null,(((a == null))?x:a),b));
});
var G__8197__3 = (function (a,b,c){
return (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3((((a == null))?x:a),b,c) : f.call(null,(((a == null))?x:a),b,c));
});
var G__8197__4 = (function() { 
var G__8198__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$lang$arity$5(f,(((a == null))?x:a),b,c,ds);
};
var G__8198 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8198__delegate.call(this, a, b, c, ds);
};
G__8198.cljs$lang$maxFixedArity = 3;
G__8198.cljs$lang$applyTo = (function (arglist__8199){
var a = cljs.core.first(arglist__8199);
var b = cljs.core.first(cljs.core.next(arglist__8199));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8199)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8199)));
return G__8198__delegate(a, b, c, ds);
});
G__8198.cljs$lang$arity$variadic = G__8198__delegate;
return G__8198;
})()
;
G__8197 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__8197__1.call(this,a);
case 2:
return G__8197__2.call(this,a,b);
case 3:
return G__8197__3.call(this,a,b,c);
default:
return G__8197__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8197.cljs$lang$maxFixedArity = 3;
G__8197.cljs$lang$applyTo = G__8197__4.cljs$lang$applyTo;
return G__8197;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__8200 = null;
var G__8200__2 = (function (a,b){
return (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2((((a == null))?x:a),(((b == null))?y:b)) : f.call(null,(((a == null))?x:a),(((b == null))?y:b)));
});
var G__8200__3 = (function (a,b,c){
return (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3((((a == null))?x:a),(((b == null))?y:b),c) : f.call(null,(((a == null))?x:a),(((b == null))?y:b),c));
});
var G__8200__4 = (function() { 
var G__8201__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$lang$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__8201 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8201__delegate.call(this, a, b, c, ds);
};
G__8201.cljs$lang$maxFixedArity = 3;
G__8201.cljs$lang$applyTo = (function (arglist__8202){
var a = cljs.core.first(arglist__8202);
var b = cljs.core.first(cljs.core.next(arglist__8202));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8202)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8202)));
return G__8201__delegate(a, b, c, ds);
});
G__8201.cljs$lang$arity$variadic = G__8201__delegate;
return G__8201;
})()
;
G__8200 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__8200__2.call(this,a,b);
case 3:
return G__8200__3.call(this,a,b,c);
default:
return G__8200__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8200.cljs$lang$maxFixedArity = 3;
G__8200.cljs$lang$applyTo = G__8200__4.cljs$lang$applyTo;
return G__8200;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__8203 = null;
var G__8203__2 = (function (a,b){
return (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2((((a == null))?x:a),(((b == null))?y:b)) : f.call(null,(((a == null))?x:a),(((b == null))?y:b)));
});
var G__8203__3 = (function (a,b,c){
return (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3((((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c)) : f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c)));
});
var G__8203__4 = (function() { 
var G__8204__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$lang$arity$5(f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__8204 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8204__delegate.call(this, a, b, c, ds);
};
G__8204.cljs$lang$maxFixedArity = 3;
G__8204.cljs$lang$applyTo = (function (arglist__8205){
var a = cljs.core.first(arglist__8205);
var b = cljs.core.first(cljs.core.next(arglist__8205));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8205)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8205)));
return G__8204__delegate(a, b, c, ds);
});
G__8204.cljs$lang$arity$variadic = G__8204__delegate;
return G__8204;
})()
;
G__8203 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__8203__2.call(this,a,b);
case 3:
return G__8203__3.call(this,a,b,c);
default:
return G__8203__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8203.cljs$lang$maxFixedArity = 3;
G__8203.cljs$lang$applyTo = G__8203__4.cljs$lang$applyTo;
return G__8203;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
fnil.cljs$lang$arity$2 = fnil__2;
fnil.cljs$lang$arity$3 = fnil__3;
fnil.cljs$lang$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__8221 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8229 = cljs.core.seq(coll);
if(temp__3974__auto____8229)
{var s__8230 = temp__3974__auto____8229;
if(cljs.core.chunked_seq_QMARK_(s__8230))
{var c__8231 = cljs.core.chunk_first(s__8230);
var size__8232 = cljs.core.count(c__8231);
var b__8233 = cljs.core.chunk_buffer(size__8232);
var n__2534__auto____8234 = size__8232;
var i__8235 = 0;
while(true){
if((i__8235 < n__2534__auto____8234))
{cljs.core.chunk_append(b__8233,(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2((idx + i__8235),cljs.core._nth.cljs$lang$arity$2(c__8231,i__8235)) : f.call(null,(idx + i__8235),cljs.core._nth.cljs$lang$arity$2(c__8231,i__8235))));
{
var G__8236 = (i__8235 + 1);
i__8235 = G__8236;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b__8233),mapi((idx + size__8232),cljs.core.chunk_rest(s__8230)));
} else
{return cljs.core.cons((f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(idx,cljs.core.first(s__8230)) : f.call(null,idx,cljs.core.first(s__8230))),mapi((idx + 1),cljs.core.rest(s__8230)));
}
} else
{return null;
}
}),null));
});
return (mapi__8221.cljs$lang$arity$2 ? mapi__8221.cljs$lang$arity$2(0,coll) : mapi__8221.call(null,0,coll));
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8246 = cljs.core.seq(coll);
if(temp__3974__auto____8246)
{var s__8247 = temp__3974__auto____8246;
if(cljs.core.chunked_seq_QMARK_(s__8247))
{var c__8248 = cljs.core.chunk_first(s__8247);
var size__8249 = cljs.core.count(c__8248);
var b__8250 = cljs.core.chunk_buffer(size__8249);
var n__2534__auto____8251 = size__8249;
var i__8252 = 0;
while(true){
if((i__8252 < n__2534__auto____8251))
{var x__8253 = (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(cljs.core._nth.cljs$lang$arity$2(c__8248,i__8252)) : f.call(null,cljs.core._nth.cljs$lang$arity$2(c__8248,i__8252)));
if((x__8253 == null))
{} else
{cljs.core.chunk_append(b__8250,x__8253);
}
{
var G__8255 = (i__8252 + 1);
i__8252 = G__8255;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b__8250),keep(f,cljs.core.chunk_rest(s__8247)));
} else
{var x__8254 = (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(cljs.core.first(s__8247)) : f.call(null,cljs.core.first(s__8247)));
if((x__8254 == null))
{return keep(f,cljs.core.rest(s__8247));
} else
{return cljs.core.cons(x__8254,keep(f,cljs.core.rest(s__8247)));
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__8281 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8291 = cljs.core.seq(coll);
if(temp__3974__auto____8291)
{var s__8292 = temp__3974__auto____8291;
if(cljs.core.chunked_seq_QMARK_(s__8292))
{var c__8293 = cljs.core.chunk_first(s__8292);
var size__8294 = cljs.core.count(c__8293);
var b__8295 = cljs.core.chunk_buffer(size__8294);
var n__2534__auto____8296 = size__8294;
var i__8297 = 0;
while(true){
if((i__8297 < n__2534__auto____8296))
{var x__8298 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2((idx + i__8297),cljs.core._nth.cljs$lang$arity$2(c__8293,i__8297)) : f.call(null,(idx + i__8297),cljs.core._nth.cljs$lang$arity$2(c__8293,i__8297)));
if((x__8298 == null))
{} else
{cljs.core.chunk_append(b__8295,x__8298);
}
{
var G__8300 = (i__8297 + 1);
i__8297 = G__8300;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b__8295),keepi((idx + size__8294),cljs.core.chunk_rest(s__8292)));
} else
{var x__8299 = (f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(idx,cljs.core.first(s__8292)) : f.call(null,idx,cljs.core.first(s__8292)));
if((x__8299 == null))
{return keepi((idx + 1),cljs.core.rest(s__8292));
} else
{return cljs.core.cons(x__8299,keepi((idx + 1),cljs.core.rest(s__8292)));
}
}
} else
{return null;
}
}),null));
});
return (keepi__8281.cljs$lang$arity$2 ? keepi__8281.cljs$lang$arity$2(0,coll) : keepi__8281.call(null,0,coll));
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$((p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(x) : p.call(null,x)));
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__3822__auto____8386 = (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(x) : p.call(null,x));
if(cljs.core.truth_(and__3822__auto____8386))
{return (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(y) : p.call(null,y));
} else
{return and__3822__auto____8386;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__3822__auto____8387 = (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(x) : p.call(null,x));
if(cljs.core.truth_(and__3822__auto____8387))
{var and__3822__auto____8388 = (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(y) : p.call(null,y));
if(cljs.core.truth_(and__3822__auto____8388))
{return (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(z) : p.call(null,z));
} else
{return and__3822__auto____8388;
}
} else
{return and__3822__auto____8387;
}
})());
});
var ep1__4 = (function() { 
var G__8457__delegate = function (x,y,z,args){
return cljs.core.boolean$((function (){var and__3822__auto____8389 = ep1.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(and__3822__auto____8389))
{return cljs.core.every_QMARK_(p,args);
} else
{return and__3822__auto____8389;
}
})());
};
var G__8457 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8457__delegate.call(this, x, y, z, args);
};
G__8457.cljs$lang$maxFixedArity = 3;
G__8457.cljs$lang$applyTo = (function (arglist__8458){
var x = cljs.core.first(arglist__8458);
var y = cljs.core.first(cljs.core.next(arglist__8458));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8458)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8458)));
return G__8457__delegate(x, y, z, args);
});
G__8457.cljs$lang$arity$variadic = G__8457__delegate;
return G__8457;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$lang$arity$0 = ep1__0;
ep1.cljs$lang$arity$1 = ep1__1;
ep1.cljs$lang$arity$2 = ep1__2;
ep1.cljs$lang$arity$3 = ep1__3;
ep1.cljs$lang$arity$variadic = ep1__4.cljs$lang$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$((function (){var and__3822__auto____8401 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(and__3822__auto____8401))
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
} else
{return and__3822__auto____8401;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__3822__auto____8402 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(and__3822__auto____8402))
{var and__3822__auto____8403 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(and__3822__auto____8403))
{var and__3822__auto____8404 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(and__3822__auto____8404))
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
} else
{return and__3822__auto____8404;
}
} else
{return and__3822__auto____8403;
}
} else
{return and__3822__auto____8402;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__3822__auto____8405 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(and__3822__auto____8405))
{var and__3822__auto____8406 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(and__3822__auto____8406))
{var and__3822__auto____8407 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(z) : p1.call(null,z));
if(cljs.core.truth_(and__3822__auto____8407))
{var and__3822__auto____8408 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(and__3822__auto____8408))
{var and__3822__auto____8409 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
if(cljs.core.truth_(and__3822__auto____8409))
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(z) : p2.call(null,z));
} else
{return and__3822__auto____8409;
}
} else
{return and__3822__auto____8408;
}
} else
{return and__3822__auto____8407;
}
} else
{return and__3822__auto____8406;
}
} else
{return and__3822__auto____8405;
}
})());
});
var ep2__4 = (function() { 
var G__8459__delegate = function (x,y,z,args){
return cljs.core.boolean$((function (){var and__3822__auto____8410 = ep2.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(and__3822__auto____8410))
{return cljs.core.every_QMARK_((function (p1__8256_SHARP_){
var and__3822__auto____8411 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(p1__8256_SHARP_) : p1.call(null,p1__8256_SHARP_));
if(cljs.core.truth_(and__3822__auto____8411))
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(p1__8256_SHARP_) : p2.call(null,p1__8256_SHARP_));
} else
{return and__3822__auto____8411;
}
}),args);
} else
{return and__3822__auto____8410;
}
})());
};
var G__8459 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8459__delegate.call(this, x, y, z, args);
};
G__8459.cljs$lang$maxFixedArity = 3;
G__8459.cljs$lang$applyTo = (function (arglist__8460){
var x = cljs.core.first(arglist__8460);
var y = cljs.core.first(cljs.core.next(arglist__8460));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8460)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8460)));
return G__8459__delegate(x, y, z, args);
});
G__8459.cljs$lang$arity$variadic = G__8459__delegate;
return G__8459;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$lang$arity$0 = ep2__0;
ep2.cljs$lang$arity$1 = ep2__1;
ep2.cljs$lang$arity$2 = ep2__2;
ep2.cljs$lang$arity$3 = ep2__3;
ep2.cljs$lang$arity$variadic = ep2__4.cljs$lang$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$((function (){var and__3822__auto____8430 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(and__3822__auto____8430))
{var and__3822__auto____8431 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(and__3822__auto____8431))
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(x) : p3.call(null,x));
} else
{return and__3822__auto____8431;
}
} else
{return and__3822__auto____8430;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__3822__auto____8432 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(and__3822__auto____8432))
{var and__3822__auto____8433 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(and__3822__auto____8433))
{var and__3822__auto____8434 = (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(x) : p3.call(null,x));
if(cljs.core.truth_(and__3822__auto____8434))
{var and__3822__auto____8435 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(and__3822__auto____8435))
{var and__3822__auto____8436 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
if(cljs.core.truth_(and__3822__auto____8436))
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(y) : p3.call(null,y));
} else
{return and__3822__auto____8436;
}
} else
{return and__3822__auto____8435;
}
} else
{return and__3822__auto____8434;
}
} else
{return and__3822__auto____8433;
}
} else
{return and__3822__auto____8432;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__3822__auto____8437 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(and__3822__auto____8437))
{var and__3822__auto____8438 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(and__3822__auto____8438))
{var and__3822__auto____8439 = (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(x) : p3.call(null,x));
if(cljs.core.truth_(and__3822__auto____8439))
{var and__3822__auto____8440 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(and__3822__auto____8440))
{var and__3822__auto____8441 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
if(cljs.core.truth_(and__3822__auto____8441))
{var and__3822__auto____8442 = (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(y) : p3.call(null,y));
if(cljs.core.truth_(and__3822__auto____8442))
{var and__3822__auto____8443 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(z) : p1.call(null,z));
if(cljs.core.truth_(and__3822__auto____8443))
{var and__3822__auto____8444 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(z) : p2.call(null,z));
if(cljs.core.truth_(and__3822__auto____8444))
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(z) : p3.call(null,z));
} else
{return and__3822__auto____8444;
}
} else
{return and__3822__auto____8443;
}
} else
{return and__3822__auto____8442;
}
} else
{return and__3822__auto____8441;
}
} else
{return and__3822__auto____8440;
}
} else
{return and__3822__auto____8439;
}
} else
{return and__3822__auto____8438;
}
} else
{return and__3822__auto____8437;
}
})());
});
var ep3__4 = (function() { 
var G__8461__delegate = function (x,y,z,args){
return cljs.core.boolean$((function (){var and__3822__auto____8445 = ep3.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(and__3822__auto____8445))
{return cljs.core.every_QMARK_((function (p1__8257_SHARP_){
var and__3822__auto____8446 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(p1__8257_SHARP_) : p1.call(null,p1__8257_SHARP_));
if(cljs.core.truth_(and__3822__auto____8446))
{var and__3822__auto____8447 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(p1__8257_SHARP_) : p2.call(null,p1__8257_SHARP_));
if(cljs.core.truth_(and__3822__auto____8447))
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(p1__8257_SHARP_) : p3.call(null,p1__8257_SHARP_));
} else
{return and__3822__auto____8447;
}
} else
{return and__3822__auto____8446;
}
}),args);
} else
{return and__3822__auto____8445;
}
})());
};
var G__8461 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8461__delegate.call(this, x, y, z, args);
};
G__8461.cljs$lang$maxFixedArity = 3;
G__8461.cljs$lang$applyTo = (function (arglist__8462){
var x = cljs.core.first(arglist__8462);
var y = cljs.core.first(cljs.core.next(arglist__8462));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8462)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8462)));
return G__8461__delegate(x, y, z, args);
});
G__8461.cljs$lang$arity$variadic = G__8461__delegate;
return G__8461;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$lang$arity$0 = ep3__0;
ep3.cljs$lang$arity$1 = ep3__1;
ep3.cljs$lang$arity$2 = ep3__2;
ep3.cljs$lang$arity$3 = ep3__3;
ep3.cljs$lang$arity$variadic = ep3__4.cljs$lang$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__8463__delegate = function (p1,p2,p3,ps){
var ps__8448 = cljs.core.list_STAR_.cljs$lang$arity$4(p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_((function (p1__8258_SHARP_){
return (p1__8258_SHARP_.cljs$lang$arity$1 ? p1__8258_SHARP_.cljs$lang$arity$1(x) : p1__8258_SHARP_.call(null,x));
}),ps__8448);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_((function (p1__8259_SHARP_){
var and__3822__auto____8453 = (p1__8259_SHARP_.cljs$lang$arity$1 ? p1__8259_SHARP_.cljs$lang$arity$1(x) : p1__8259_SHARP_.call(null,x));
if(cljs.core.truth_(and__3822__auto____8453))
{return (p1__8259_SHARP_.cljs$lang$arity$1 ? p1__8259_SHARP_.cljs$lang$arity$1(y) : p1__8259_SHARP_.call(null,y));
} else
{return and__3822__auto____8453;
}
}),ps__8448);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_((function (p1__8260_SHARP_){
var and__3822__auto____8454 = (p1__8260_SHARP_.cljs$lang$arity$1 ? p1__8260_SHARP_.cljs$lang$arity$1(x) : p1__8260_SHARP_.call(null,x));
if(cljs.core.truth_(and__3822__auto____8454))
{var and__3822__auto____8455 = (p1__8260_SHARP_.cljs$lang$arity$1 ? p1__8260_SHARP_.cljs$lang$arity$1(y) : p1__8260_SHARP_.call(null,y));
if(cljs.core.truth_(and__3822__auto____8455))
{return (p1__8260_SHARP_.cljs$lang$arity$1 ? p1__8260_SHARP_.cljs$lang$arity$1(z) : p1__8260_SHARP_.call(null,z));
} else
{return and__3822__auto____8455;
}
} else
{return and__3822__auto____8454;
}
}),ps__8448);
});
var epn__4 = (function() { 
var G__8464__delegate = function (x,y,z,args){
return cljs.core.boolean$((function (){var and__3822__auto____8456 = epn.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(and__3822__auto____8456))
{return cljs.core.every_QMARK_((function (p1__8261_SHARP_){
return cljs.core.every_QMARK_(p1__8261_SHARP_,args);
}),ps__8448);
} else
{return and__3822__auto____8456;
}
})());
};
var G__8464 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8464__delegate.call(this, x, y, z, args);
};
G__8464.cljs$lang$maxFixedArity = 3;
G__8464.cljs$lang$applyTo = (function (arglist__8465){
var x = cljs.core.first(arglist__8465);
var y = cljs.core.first(cljs.core.next(arglist__8465));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8465)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8465)));
return G__8464__delegate(x, y, z, args);
});
G__8464.cljs$lang$arity$variadic = G__8464__delegate;
return G__8464;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$lang$arity$0 = epn__0;
epn.cljs$lang$arity$1 = epn__1;
epn.cljs$lang$arity$2 = epn__2;
epn.cljs$lang$arity$3 = epn__3;
epn.cljs$lang$arity$variadic = epn__4.cljs$lang$arity$variadic;
return epn;
})()
};
var G__8463 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8463__delegate.call(this, p1, p2, p3, ps);
};
G__8463.cljs$lang$maxFixedArity = 3;
G__8463.cljs$lang$applyTo = (function (arglist__8466){
var p1 = cljs.core.first(arglist__8466);
var p2 = cljs.core.first(cljs.core.next(arglist__8466));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8466)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8466)));
return G__8463__delegate(p1, p2, p3, ps);
});
G__8463.cljs$lang$arity$variadic = G__8463__delegate;
return G__8463;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$lang$arity$1 = every_pred__1;
every_pred.cljs$lang$arity$2 = every_pred__2;
every_pred.cljs$lang$arity$3 = every_pred__3;
every_pred.cljs$lang$arity$variadic = every_pred__4.cljs$lang$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
return (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(x) : p.call(null,x));
});
var sp1__2 = (function (x,y){
var or__3824__auto____8547 = (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(x) : p.call(null,x));
if(cljs.core.truth_(or__3824__auto____8547))
{return or__3824__auto____8547;
} else
{return (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(y) : p.call(null,y));
}
});
var sp1__3 = (function (x,y,z){
var or__3824__auto____8548 = (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(x) : p.call(null,x));
if(cljs.core.truth_(or__3824__auto____8548))
{return or__3824__auto____8548;
} else
{var or__3824__auto____8549 = (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(y) : p.call(null,y));
if(cljs.core.truth_(or__3824__auto____8549))
{return or__3824__auto____8549;
} else
{return (p.cljs$lang$arity$1 ? p.cljs$lang$arity$1(z) : p.call(null,z));
}
}
});
var sp1__4 = (function() { 
var G__8618__delegate = function (x,y,z,args){
var or__3824__auto____8550 = sp1.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(or__3824__auto____8550))
{return or__3824__auto____8550;
} else
{return cljs.core.some(p,args);
}
};
var G__8618 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8618__delegate.call(this, x, y, z, args);
};
G__8618.cljs$lang$maxFixedArity = 3;
G__8618.cljs$lang$applyTo = (function (arglist__8619){
var x = cljs.core.first(arglist__8619);
var y = cljs.core.first(cljs.core.next(arglist__8619));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8619)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8619)));
return G__8618__delegate(x, y, z, args);
});
G__8618.cljs$lang$arity$variadic = G__8618__delegate;
return G__8618;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$lang$arity$0 = sp1__0;
sp1.cljs$lang$arity$1 = sp1__1;
sp1.cljs$lang$arity$2 = sp1__2;
sp1.cljs$lang$arity$3 = sp1__3;
sp1.cljs$lang$arity$variadic = sp1__4.cljs$lang$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3824__auto____8562 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(or__3824__auto____8562))
{return or__3824__auto____8562;
} else
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
}
});
var sp2__2 = (function (x,y){
var or__3824__auto____8563 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(or__3824__auto____8563))
{return or__3824__auto____8563;
} else
{var or__3824__auto____8564 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(or__3824__auto____8564))
{return or__3824__auto____8564;
} else
{var or__3824__auto____8565 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(or__3824__auto____8565))
{return or__3824__auto____8565;
} else
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3824__auto____8566 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(or__3824__auto____8566))
{return or__3824__auto____8566;
} else
{var or__3824__auto____8567 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(or__3824__auto____8567))
{return or__3824__auto____8567;
} else
{var or__3824__auto____8568 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(z) : p1.call(null,z));
if(cljs.core.truth_(or__3824__auto____8568))
{return or__3824__auto____8568;
} else
{var or__3824__auto____8569 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(or__3824__auto____8569))
{return or__3824__auto____8569;
} else
{var or__3824__auto____8570 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
if(cljs.core.truth_(or__3824__auto____8570))
{return or__3824__auto____8570;
} else
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(z) : p2.call(null,z));
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__8620__delegate = function (x,y,z,args){
var or__3824__auto____8571 = sp2.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(or__3824__auto____8571))
{return or__3824__auto____8571;
} else
{return cljs.core.some((function (p1__8301_SHARP_){
var or__3824__auto____8572 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(p1__8301_SHARP_) : p1.call(null,p1__8301_SHARP_));
if(cljs.core.truth_(or__3824__auto____8572))
{return or__3824__auto____8572;
} else
{return (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(p1__8301_SHARP_) : p2.call(null,p1__8301_SHARP_));
}
}),args);
}
};
var G__8620 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8620__delegate.call(this, x, y, z, args);
};
G__8620.cljs$lang$maxFixedArity = 3;
G__8620.cljs$lang$applyTo = (function (arglist__8621){
var x = cljs.core.first(arglist__8621);
var y = cljs.core.first(cljs.core.next(arglist__8621));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8621)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8621)));
return G__8620__delegate(x, y, z, args);
});
G__8620.cljs$lang$arity$variadic = G__8620__delegate;
return G__8620;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$lang$arity$0 = sp2__0;
sp2.cljs$lang$arity$1 = sp2__1;
sp2.cljs$lang$arity$2 = sp2__2;
sp2.cljs$lang$arity$3 = sp2__3;
sp2.cljs$lang$arity$variadic = sp2__4.cljs$lang$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3824__auto____8591 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(or__3824__auto____8591))
{return or__3824__auto____8591;
} else
{var or__3824__auto____8592 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(or__3824__auto____8592))
{return or__3824__auto____8592;
} else
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(x) : p3.call(null,x));
}
}
});
var sp3__2 = (function (x,y){
var or__3824__auto____8593 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(or__3824__auto____8593))
{return or__3824__auto____8593;
} else
{var or__3824__auto____8594 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(or__3824__auto____8594))
{return or__3824__auto____8594;
} else
{var or__3824__auto____8595 = (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(x) : p3.call(null,x));
if(cljs.core.truth_(or__3824__auto____8595))
{return or__3824__auto____8595;
} else
{var or__3824__auto____8596 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(or__3824__auto____8596))
{return or__3824__auto____8596;
} else
{var or__3824__auto____8597 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
if(cljs.core.truth_(or__3824__auto____8597))
{return or__3824__auto____8597;
} else
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(y) : p3.call(null,y));
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3824__auto____8598 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(x) : p1.call(null,x));
if(cljs.core.truth_(or__3824__auto____8598))
{return or__3824__auto____8598;
} else
{var or__3824__auto____8599 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(x) : p2.call(null,x));
if(cljs.core.truth_(or__3824__auto____8599))
{return or__3824__auto____8599;
} else
{var or__3824__auto____8600 = (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(x) : p3.call(null,x));
if(cljs.core.truth_(or__3824__auto____8600))
{return or__3824__auto____8600;
} else
{var or__3824__auto____8601 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(y) : p1.call(null,y));
if(cljs.core.truth_(or__3824__auto____8601))
{return or__3824__auto____8601;
} else
{var or__3824__auto____8602 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(y) : p2.call(null,y));
if(cljs.core.truth_(or__3824__auto____8602))
{return or__3824__auto____8602;
} else
{var or__3824__auto____8603 = (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(y) : p3.call(null,y));
if(cljs.core.truth_(or__3824__auto____8603))
{return or__3824__auto____8603;
} else
{var or__3824__auto____8604 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(z) : p1.call(null,z));
if(cljs.core.truth_(or__3824__auto____8604))
{return or__3824__auto____8604;
} else
{var or__3824__auto____8605 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(z) : p2.call(null,z));
if(cljs.core.truth_(or__3824__auto____8605))
{return or__3824__auto____8605;
} else
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(z) : p3.call(null,z));
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__8622__delegate = function (x,y,z,args){
var or__3824__auto____8606 = sp3.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(or__3824__auto____8606))
{return or__3824__auto____8606;
} else
{return cljs.core.some((function (p1__8302_SHARP_){
var or__3824__auto____8607 = (p1.cljs$lang$arity$1 ? p1.cljs$lang$arity$1(p1__8302_SHARP_) : p1.call(null,p1__8302_SHARP_));
if(cljs.core.truth_(or__3824__auto____8607))
{return or__3824__auto____8607;
} else
{var or__3824__auto____8608 = (p2.cljs$lang$arity$1 ? p2.cljs$lang$arity$1(p1__8302_SHARP_) : p2.call(null,p1__8302_SHARP_));
if(cljs.core.truth_(or__3824__auto____8608))
{return or__3824__auto____8608;
} else
{return (p3.cljs$lang$arity$1 ? p3.cljs$lang$arity$1(p1__8302_SHARP_) : p3.call(null,p1__8302_SHARP_));
}
}
}),args);
}
};
var G__8622 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8622__delegate.call(this, x, y, z, args);
};
G__8622.cljs$lang$maxFixedArity = 3;
G__8622.cljs$lang$applyTo = (function (arglist__8623){
var x = cljs.core.first(arglist__8623);
var y = cljs.core.first(cljs.core.next(arglist__8623));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8623)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8623)));
return G__8622__delegate(x, y, z, args);
});
G__8622.cljs$lang$arity$variadic = G__8622__delegate;
return G__8622;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$lang$arity$0 = sp3__0;
sp3.cljs$lang$arity$1 = sp3__1;
sp3.cljs$lang$arity$2 = sp3__2;
sp3.cljs$lang$arity$3 = sp3__3;
sp3.cljs$lang$arity$variadic = sp3__4.cljs$lang$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__8624__delegate = function (p1,p2,p3,ps){
var ps__8609 = cljs.core.list_STAR_.cljs$lang$arity$4(p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some((function (p1__8303_SHARP_){
return (p1__8303_SHARP_.cljs$lang$arity$1 ? p1__8303_SHARP_.cljs$lang$arity$1(x) : p1__8303_SHARP_.call(null,x));
}),ps__8609);
});
var spn__2 = (function (x,y){
return cljs.core.some((function (p1__8304_SHARP_){
var or__3824__auto____8614 = (p1__8304_SHARP_.cljs$lang$arity$1 ? p1__8304_SHARP_.cljs$lang$arity$1(x) : p1__8304_SHARP_.call(null,x));
if(cljs.core.truth_(or__3824__auto____8614))
{return or__3824__auto____8614;
} else
{return (p1__8304_SHARP_.cljs$lang$arity$1 ? p1__8304_SHARP_.cljs$lang$arity$1(y) : p1__8304_SHARP_.call(null,y));
}
}),ps__8609);
});
var spn__3 = (function (x,y,z){
return cljs.core.some((function (p1__8305_SHARP_){
var or__3824__auto____8615 = (p1__8305_SHARP_.cljs$lang$arity$1 ? p1__8305_SHARP_.cljs$lang$arity$1(x) : p1__8305_SHARP_.call(null,x));
if(cljs.core.truth_(or__3824__auto____8615))
{return or__3824__auto____8615;
} else
{var or__3824__auto____8616 = (p1__8305_SHARP_.cljs$lang$arity$1 ? p1__8305_SHARP_.cljs$lang$arity$1(y) : p1__8305_SHARP_.call(null,y));
if(cljs.core.truth_(or__3824__auto____8616))
{return or__3824__auto____8616;
} else
{return (p1__8305_SHARP_.cljs$lang$arity$1 ? p1__8305_SHARP_.cljs$lang$arity$1(z) : p1__8305_SHARP_.call(null,z));
}
}
}),ps__8609);
});
var spn__4 = (function() { 
var G__8625__delegate = function (x,y,z,args){
var or__3824__auto____8617 = spn.cljs$lang$arity$3(x,y,z);
if(cljs.core.truth_(or__3824__auto____8617))
{return or__3824__auto____8617;
} else
{return cljs.core.some((function (p1__8306_SHARP_){
return cljs.core.some(p1__8306_SHARP_,args);
}),ps__8609);
}
};
var G__8625 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8625__delegate.call(this, x, y, z, args);
};
G__8625.cljs$lang$maxFixedArity = 3;
G__8625.cljs$lang$applyTo = (function (arglist__8626){
var x = cljs.core.first(arglist__8626);
var y = cljs.core.first(cljs.core.next(arglist__8626));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8626)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8626)));
return G__8625__delegate(x, y, z, args);
});
G__8625.cljs$lang$arity$variadic = G__8625__delegate;
return G__8625;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$lang$arity$0 = spn__0;
spn.cljs$lang$arity$1 = spn__1;
spn.cljs$lang$arity$2 = spn__2;
spn.cljs$lang$arity$3 = spn__3;
spn.cljs$lang$arity$variadic = spn__4.cljs$lang$arity$variadic;
return spn;
})()
};
var G__8624 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8624__delegate.call(this, p1, p2, p3, ps);
};
G__8624.cljs$lang$maxFixedArity = 3;
G__8624.cljs$lang$applyTo = (function (arglist__8627){
var p1 = cljs.core.first(arglist__8627);
var p2 = cljs.core.first(cljs.core.next(arglist__8627));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8627)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8627)));
return G__8624__delegate(p1, p2, p3, ps);
});
G__8624.cljs$lang$arity$variadic = G__8624__delegate;
return G__8624;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$lang$arity$1 = some_fn__1;
some_fn.cljs$lang$arity$2 = some_fn__2;
some_fn.cljs$lang$arity$3 = some_fn__3;
some_fn.cljs$lang$arity$variadic = some_fn__4.cljs$lang$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8646 = cljs.core.seq(coll);
if(temp__3974__auto____8646)
{var s__8647 = temp__3974__auto____8646;
if(cljs.core.chunked_seq_QMARK_(s__8647))
{var c__8648 = cljs.core.chunk_first(s__8647);
var size__8649 = cljs.core.count(c__8648);
var b__8650 = cljs.core.chunk_buffer(size__8649);
var n__2534__auto____8651 = size__8649;
var i__8652 = 0;
while(true){
if((i__8652 < n__2534__auto____8651))
{cljs.core.chunk_append(b__8650,(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(cljs.core._nth.cljs$lang$arity$2(c__8648,i__8652)) : f.call(null,cljs.core._nth.cljs$lang$arity$2(c__8648,i__8652))));
{
var G__8664 = (i__8652 + 1);
i__8652 = G__8664;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b__8650),map.cljs$lang$arity$2(f,cljs.core.chunk_rest(s__8647)));
} else
{return cljs.core.cons((f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(cljs.core.first(s__8647)) : f.call(null,cljs.core.first(s__8647))),map.cljs$lang$arity$2(f,cljs.core.rest(s__8647)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8653 = cljs.core.seq(c1);
var s2__8654 = cljs.core.seq(c2);
if((function (){var and__3822__auto____8655 = s1__8653;
if(and__3822__auto____8655)
{return s2__8654;
} else
{return and__3822__auto____8655;
}
})())
{return cljs.core.cons((f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(cljs.core.first(s1__8653),cljs.core.first(s2__8654)) : f.call(null,cljs.core.first(s1__8653),cljs.core.first(s2__8654))),map.cljs$lang$arity$3(f,cljs.core.rest(s1__8653),cljs.core.rest(s2__8654)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8656 = cljs.core.seq(c1);
var s2__8657 = cljs.core.seq(c2);
var s3__8658 = cljs.core.seq(c3);
if((function (){var and__3822__auto____8659 = s1__8656;
if(and__3822__auto____8659)
{var and__3822__auto____8660 = s2__8657;
if(and__3822__auto____8660)
{return s3__8658;
} else
{return and__3822__auto____8660;
}
} else
{return and__3822__auto____8659;
}
})())
{return cljs.core.cons((f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(cljs.core.first(s1__8656),cljs.core.first(s2__8657),cljs.core.first(s3__8658)) : f.call(null,cljs.core.first(s1__8656),cljs.core.first(s2__8657),cljs.core.first(s3__8658))),map.cljs$lang$arity$4(f,cljs.core.rest(s1__8656),cljs.core.rest(s2__8657),cljs.core.rest(s3__8658)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__8665__delegate = function (f,c1,c2,c3,colls){
var step__8663 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8662 = map.cljs$lang$arity$2(cljs.core.seq,cs);
if(cljs.core.every_QMARK_(cljs.core.identity,ss__8662))
{return cljs.core.cons(map.cljs$lang$arity$2(cljs.core.first,ss__8662),step(map.cljs$lang$arity$2(cljs.core.rest,ss__8662)));
} else
{return null;
}
}),null));
});
return map.cljs$lang$arity$2((function (p1__8467_SHARP_){
return cljs.core.apply.cljs$lang$arity$2(f,p1__8467_SHARP_);
}),(step__8663.cljs$lang$arity$1 ? step__8663.cljs$lang$arity$1(cljs.core.conj.cljs$lang$arity$variadic(colls,c3,cljs.core.array_seq([c2,c1], 0))) : step__8663.call(null,cljs.core.conj.cljs$lang$arity$variadic(colls,c3,cljs.core.array_seq([c2,c1], 0)))));
};
var G__8665 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8665__delegate.call(this, f, c1, c2, c3, colls);
};
G__8665.cljs$lang$maxFixedArity = 4;
G__8665.cljs$lang$applyTo = (function (arglist__8666){
var f = cljs.core.first(arglist__8666);
var c1 = cljs.core.first(cljs.core.next(arglist__8666));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8666)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8666))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8666))));
return G__8665__delegate(f, c1, c2, c3, colls);
});
G__8665.cljs$lang$arity$variadic = G__8665__delegate;
return G__8665;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$lang$arity$2 = map__2;
map.cljs$lang$arity$3 = map__3;
map.cljs$lang$arity$4 = map__4;
map.cljs$lang$arity$variadic = map__5.cljs$lang$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if((n > 0))
{var temp__3974__auto____8669 = cljs.core.seq(coll);
if(temp__3974__auto____8669)
{var s__8670 = temp__3974__auto____8669;
return cljs.core.cons(cljs.core.first(s__8670),take((n - 1),cljs.core.rest(s__8670)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__8676 = (function (n,coll){
while(true){
var s__8674 = cljs.core.seq(coll);
if(cljs.core.truth_((function (){var and__3822__auto____8675 = (n > 0);
if(and__3822__auto____8675)
{return s__8674;
} else
{return and__3822__auto____8675;
}
})()))
{{
var G__8677 = (n - 1);
var G__8678 = cljs.core.rest(s__8674);
n = G__8677;
coll = G__8678;
continue;
}
} else
{return s__8674;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return (step__8676.cljs$lang$arity$2 ? step__8676.cljs$lang$arity$2(n,coll) : step__8676.call(null,n,coll));
}),null));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.cljs$lang$arity$2(1,s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.cljs$lang$arity$3((function (x,_){
return x;
}),s,cljs.core.drop(n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
drop_last.cljs$lang$arity$1 = drop_last__1;
drop_last.cljs$lang$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__8681 = cljs.core.seq(coll);
var lead__8682 = cljs.core.seq(cljs.core.drop(n,coll));
while(true){
if(lead__8682)
{{
var G__8683 = cljs.core.next(s__8681);
var G__8684 = cljs.core.next(lead__8682);
s__8681 = G__8683;
lead__8682 = G__8684;
continue;
}
} else
{return s__8681;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__8690 = (function (pred,coll){
while(true){
var s__8688 = cljs.core.seq(coll);
if(cljs.core.truth_((function (){var and__3822__auto____8689 = s__8688;
if(and__3822__auto____8689)
{return (pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(cljs.core.first(s__8688)) : pred.call(null,cljs.core.first(s__8688)));
} else
{return and__3822__auto____8689;
}
})()))
{{
var G__8691 = pred;
var G__8692 = cljs.core.rest(s__8688);
pred = G__8691;
coll = G__8692;
continue;
}
} else
{return s__8688;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return (step__8690.cljs$lang$arity$2 ? step__8690.cljs$lang$arity$2(pred,coll) : step__8690.call(null,pred,coll));
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8695 = cljs.core.seq(coll);
if(temp__3974__auto____8695)
{var s__8696 = temp__3974__auto____8695;
return cljs.core.concat.cljs$lang$arity$2(s__8696,cycle(s__8696));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take(n,coll),cljs.core.drop(n,coll)], true);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons(x,repeat.cljs$lang$arity$1(x));
}),null));
});
var repeat__2 = (function (n,x){
return cljs.core.take(n,repeat.cljs$lang$arity$1(x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
repeat.cljs$lang$arity$1 = repeat__1;
repeat.cljs$lang$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take(n,cljs.core.repeat.cljs$lang$arity$1(x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons((f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null)),repeatedly.cljs$lang$arity$1(f));
}),null));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take(n,repeatedly.cljs$lang$arity$1(f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
repeatedly.cljs$lang$arity$1 = repeatedly__1;
repeatedly.cljs$lang$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons(x,(new cljs.core.LazySeq(null,false,(function (){
return iterate(f,(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(x) : f.call(null,x)));
}),null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__8701 = cljs.core.seq(c1);
var s2__8702 = cljs.core.seq(c2);
if((function (){var and__3822__auto____8703 = s1__8701;
if(and__3822__auto____8703)
{return s2__8702;
} else
{return and__3822__auto____8703;
}
})())
{return cljs.core.cons(cljs.core.first(s1__8701),cljs.core.cons(cljs.core.first(s2__8702),interleave.cljs$lang$arity$2(cljs.core.rest(s1__8701),cljs.core.rest(s2__8702))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__8705__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__8704 = cljs.core.map.cljs$lang$arity$2(cljs.core.seq,cljs.core.conj.cljs$lang$arity$variadic(colls,c2,cljs.core.array_seq([c1], 0)));
if(cljs.core.every_QMARK_(cljs.core.identity,ss__8704))
{return cljs.core.concat.cljs$lang$arity$2(cljs.core.map.cljs$lang$arity$2(cljs.core.first,ss__8704),cljs.core.apply.cljs$lang$arity$2(interleave,cljs.core.map.cljs$lang$arity$2(cljs.core.rest,ss__8704)));
} else
{return null;
}
}),null));
};
var G__8705 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8705__delegate.call(this, c1, c2, colls);
};
G__8705.cljs$lang$maxFixedArity = 2;
G__8705.cljs$lang$applyTo = (function (arglist__8706){
var c1 = cljs.core.first(arglist__8706);
var c2 = cljs.core.first(cljs.core.next(arglist__8706));
var colls = cljs.core.rest(cljs.core.next(arglist__8706));
return G__8705__delegate(c1, c2, colls);
});
G__8705.cljs$lang$arity$variadic = G__8705__delegate;
return G__8705;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$lang$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$lang$arity$2 = interleave__2;
interleave.cljs$lang$arity$variadic = interleave__3.cljs$lang$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop(1,cljs.core.interleave.cljs$lang$arity$2(cljs.core.repeat.cljs$lang$arity$1(sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__8716 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____8714 = cljs.core.seq(coll);
if(temp__3971__auto____8714)
{var coll__8715 = temp__3971__auto____8714;
return cljs.core.cons(cljs.core.first(coll__8715),cat(cljs.core.rest(coll__8715),colls));
} else
{if(cljs.core.seq(colls))
{return cat(cljs.core.first(colls),cljs.core.rest(colls));
} else
{return null;
}
}
}),null));
});
return (cat__8716.cljs$lang$arity$2 ? cat__8716.cljs$lang$arity$2(null,colls) : cat__8716.call(null,null,colls));
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){
return cljs.core.flatten1(cljs.core.map.cljs$lang$arity$2(f,coll));
});
var mapcat__3 = (function() { 
var G__8717__delegate = function (f,coll,colls){
return cljs.core.flatten1(cljs.core.apply.cljs$lang$arity$4(cljs.core.map,f,coll,colls));
};
var G__8717 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8717__delegate.call(this, f, coll, colls);
};
G__8717.cljs$lang$maxFixedArity = 2;
G__8717.cljs$lang$applyTo = (function (arglist__8718){
var f = cljs.core.first(arglist__8718);
var coll = cljs.core.first(cljs.core.next(arglist__8718));
var colls = cljs.core.rest(cljs.core.next(arglist__8718));
return G__8717__delegate(f, coll, colls);
});
G__8717.cljs$lang$arity$variadic = G__8717__delegate;
return G__8717;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.cljs$lang$arity$variadic(f,coll, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.cljs$lang$arity$2 = mapcat__2;
mapcat.cljs$lang$arity$variadic = mapcat__3.cljs$lang$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8728 = cljs.core.seq(coll);
if(temp__3974__auto____8728)
{var s__8729 = temp__3974__auto____8728;
if(cljs.core.chunked_seq_QMARK_(s__8729))
{var c__8730 = cljs.core.chunk_first(s__8729);
var size__8731 = cljs.core.count(c__8730);
var b__8732 = cljs.core.chunk_buffer(size__8731);
var n__2534__auto____8733 = size__8731;
var i__8734 = 0;
while(true){
if((i__8734 < n__2534__auto____8733))
{if(cljs.core.truth_((pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(cljs.core._nth.cljs$lang$arity$2(c__8730,i__8734)) : pred.call(null,cljs.core._nth.cljs$lang$arity$2(c__8730,i__8734)))))
{cljs.core.chunk_append(b__8732,cljs.core._nth.cljs$lang$arity$2(c__8730,i__8734));
} else
{}
{
var G__8737 = (i__8734 + 1);
i__8734 = G__8737;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons(cljs.core.chunk(b__8732),filter(pred,cljs.core.chunk_rest(s__8729)));
} else
{var f__8735 = cljs.core.first(s__8729);
var r__8736 = cljs.core.rest(s__8729);
if(cljs.core.truth_((pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(f__8735) : pred.call(null,f__8735))))
{return cljs.core.cons(f__8735,filter(pred,r__8736));
} else
{return filter(pred,r__8736);
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter(cljs.core.complement(pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__8740 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons(node,(cljs.core.truth_((branch_QMARK_.cljs$lang$arity$1 ? branch_QMARK_.cljs$lang$arity$1(node) : branch_QMARK_.call(null,node)))?cljs.core.mapcat.cljs$lang$arity$2(walk,(children.cljs$lang$arity$1 ? children.cljs$lang$arity$1(node) : children.call(null,node))):null));
}),null));
});
return (walk__8740.cljs$lang$arity$1 ? walk__8740.cljs$lang$arity$1(root) : walk__8740.call(null,root));
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter((function (p1__8738_SHARP_){
return !(cljs.core.sequential_QMARK_(p1__8738_SHARP_));
}),cljs.core.rest(cljs.core.tree_seq(cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__8744__8745 = to;
if(G__8744__8745)
{if((function (){var or__3824__auto____8746 = (G__8744__8745.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3824__auto____8746)
{return or__3824__auto____8746;
} else
{return G__8744__8745.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__8744__8745.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_(cljs.core.IEditableCollection,G__8744__8745);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IEditableCollection,G__8744__8745);
}
})())
{return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj_BANG_,cljs.core.transient$(to),from));
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,to,from);
}
});
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$lang$arity$3((function (v,o){
return cljs.core.conj_BANG_(v,(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(o) : f.call(null,o)));
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$lang$arity$3(f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$lang$arity$4(f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__8747__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into(cljs.core.PersistentVector.EMPTY,cljs.core.apply.cljs$lang$arity$variadic(cljs.core.map,f,c1,c2,c3,cljs.core.array_seq([colls], 0)));
};
var G__8747 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8747__delegate.call(this, f, c1, c2, c3, colls);
};
G__8747.cljs$lang$maxFixedArity = 4;
G__8747.cljs$lang$applyTo = (function (arglist__8748){
var f = cljs.core.first(arglist__8748);
var c1 = cljs.core.first(cljs.core.next(arglist__8748));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8748)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8748))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8748))));
return G__8747__delegate(f, c1, c2, c3, colls);
});
G__8747.cljs$lang$arity$variadic = G__8747__delegate;
return G__8747;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$lang$arity$2 = mapv__2;
mapv.cljs$lang$arity$3 = mapv__3;
mapv.cljs$lang$arity$4 = mapv__4;
mapv.cljs$lang$arity$variadic = mapv__5.cljs$lang$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$lang$arity$3((function (v,o){
if(cljs.core.truth_((pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(o) : pred.call(null,o))))
{return cljs.core.conj_BANG_(v,o);
} else
{return v;
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.cljs$lang$arity$3(n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8755 = cljs.core.seq(coll);
if(temp__3974__auto____8755)
{var s__8756 = temp__3974__auto____8755;
var p__8757 = cljs.core.take(n,s__8756);
if((n === cljs.core.count(p__8757)))
{return cljs.core.cons(p__8757,partition.cljs$lang$arity$3(n,step,cljs.core.drop(step,s__8756)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____8758 = cljs.core.seq(coll);
if(temp__3974__auto____8758)
{var s__8759 = temp__3974__auto____8758;
var p__8760 = cljs.core.take(n,s__8759);
if((n === cljs.core.count(p__8760)))
{return cljs.core.cons(p__8760,partition.cljs$lang$arity$4(n,step,pad,cljs.core.drop(step,s__8759)));
} else
{return cljs.core.list.cljs$lang$arity$1(cljs.core.take(n,cljs.core.concat.cljs$lang$arity$2(p__8760,pad)));
}
} else
{return null;
}
}),null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition.cljs$lang$arity$2 = partition__2;
partition.cljs$lang$arity$3 = partition__3;
partition.cljs$lang$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of keys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return cljs.core.reduce.cljs$lang$arity$3(cljs.core.get,m,ks);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel__8765 = cljs.core.lookup_sentinel;
var m__8766 = m;
var ks__8767 = cljs.core.seq(ks);
while(true){
if(ks__8767)
{var m__8768 = cljs.core._lookup.cljs$lang$arity$3(m__8766,cljs.core.first(ks__8767),sentinel__8765);
if((sentinel__8765 === m__8768))
{return not_found;
} else
{{
var G__8769 = sentinel__8765;
var G__8770 = m__8768;
var G__8771 = cljs.core.next(ks__8767);
sentinel__8765 = G__8769;
m__8766 = G__8770;
ks__8767 = G__8771;
continue;
}
}
} else
{return m__8766;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get_in.cljs$lang$arity$2 = get_in__2;
get_in.cljs$lang$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__8772,v){
var vec__8777__8778 = p__8772;
var k__8779 = cljs.core.nth.cljs$lang$arity$3(vec__8777__8778,0,null);
var ks__8780 = cljs.core.nthnext(vec__8777__8778,1);
if(cljs.core.truth_(ks__8780))
{return cljs.core.assoc.cljs$lang$arity$3(m,k__8779,assoc_in(cljs.core._lookup.cljs$lang$arity$3(m,k__8779,null),ks__8780,v));
} else
{return cljs.core.assoc.cljs$lang$arity$3(m,k__8779,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__8781,f,args){
var vec__8786__8787 = p__8781;
var k__8788 = cljs.core.nth.cljs$lang$arity$3(vec__8786__8787,0,null);
var ks__8789 = cljs.core.nthnext(vec__8786__8787,1);
if(cljs.core.truth_(ks__8789))
{return cljs.core.assoc.cljs$lang$arity$3(m,k__8788,cljs.core.apply.cljs$lang$arity$5(update_in,cljs.core._lookup.cljs$lang$arity$3(m,k__8788,null),ks__8789,f,args));
} else
{return cljs.core.assoc.cljs$lang$arity$3(m,k__8788,cljs.core.apply.cljs$lang$arity$3(f,cljs.core._lookup.cljs$lang$arity$3(m,k__8788,null),args));
}
};
var update_in = function (m,p__8781,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__8781, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__8790){
var m = cljs.core.first(arglist__8790);
var p__8781 = cljs.core.first(cljs.core.next(arglist__8790));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8790)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8790)));
return update_in__delegate(m, p__8781, f, args);
});
update_in.cljs$lang$arity$variadic = update_in__delegate;
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array,__hash){
this.meta = meta;
this.array = array;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Vector.cljs$lang$type = true;
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8793 = this;
var h__2199__auto____8794 = this__8793.__hash;
if(!((h__2199__auto____8794 == null)))
{return h__2199__auto____8794;
} else
{var h__2199__auto____8795 = cljs.core.hash_coll(coll);
this__8793.__hash = h__2199__auto____8795;
return h__2199__auto____8795;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8796 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8797 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8798 = this;
var new_array__8799 = this__8798.array.slice();
(new_array__8799[k] = v);
return (new cljs.core.Vector(this__8798.meta,new_array__8799,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__8830 = null;
var G__8830__2 = (function (this_sym8800,k){
var this__8802 = this;
var this_sym8800__8803 = this;
var coll__8804 = this_sym8800__8803;
return coll__8804.cljs$core$ILookup$_lookup$arity$2(coll__8804,k);
});
var G__8830__3 = (function (this_sym8801,k,not_found){
var this__8802 = this;
var this_sym8801__8805 = this;
var coll__8806 = this_sym8801__8805;
return coll__8806.cljs$core$ILookup$_lookup$arity$3(coll__8806,k,not_found);
});
G__8830 = function(this_sym8801,k,not_found){
switch(arguments.length){
case 2:
return G__8830__2.call(this,this_sym8801,k);
case 3:
return G__8830__3.call(this,this_sym8801,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8830;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym8791,args8792){
var this__8807 = this;
return this_sym8791.call.apply(this_sym8791,[this_sym8791].concat(args8792.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8808 = this;
var new_array__8809 = this__8808.array.slice();
new_array__8809.push(o);
return (new cljs.core.Vector(this__8808.meta,new_array__8809,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__8810 = this;
var this__8811 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__8811], 0));
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8812 = this;
return cljs.core.ci_reduce.cljs$lang$arity$2(this__8812.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8813 = this;
return cljs.core.ci_reduce.cljs$lang$arity$3(this__8813.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8814 = this;
if((this__8814.array.length > 0))
{var vector_seq__8815 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__8814.array.length))
{return cljs.core.cons((this__8814.array[i]),vector_seq((i + 1)));
} else
{return null;
}
}),null));
});
return (vector_seq__8815.cljs$lang$arity$1 ? vector_seq__8815.cljs$lang$arity$1(0) : vector_seq__8815.call(null,0));
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8816 = this;
return this__8816.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8817 = this;
var count__8818 = this__8817.array.length;
if((count__8818 > 0))
{return (this__8817.array[(count__8818 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8819 = this;
if((this__8819.array.length > 0))
{var new_array__8820 = this__8819.array.slice();
new_array__8820.pop();
return (new cljs.core.Vector(this__8819.meta,new_array__8820,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8821 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8822 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8823 = this;
return (new cljs.core.Vector(meta,this__8823.array,this__8823.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8824 = this;
return this__8824.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8825 = this;
if((function (){var and__3822__auto____8826 = (0 <= n);
if(and__3822__auto____8826)
{return (n < this__8825.array.length);
} else
{return and__3822__auto____8826;
}
})())
{return (this__8825.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8827 = this;
if((function (){var and__3822__auto____8828 = (0 <= n);
if(and__3822__auto____8828)
{return (n < this__8827.array.length);
} else
{return and__3822__auto____8828;
}
})())
{return (this__8827.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8829 = this;
return cljs.core.with_meta(cljs.core.Vector.EMPTY,this__8829.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[],0));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs,null));
});

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__2317__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/VectorNode");
});
cljs.core.VectorNode;
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,cljs.core.make_array.cljs$lang$arity$1(32)));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,node.arr.slice()));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__8832 = pv.cnt;
if((cnt__8832 < 32))
{return 0;
} else
{return (((cnt__8832 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__8838 = level;
var ret__8839 = node;
while(true){
if((ll__8838 === 0))
{return ret__8839;
} else
{var embed__8840 = ret__8839;
var r__8841 = cljs.core.pv_fresh_node(edit);
var ___8842 = cljs.core.pv_aset(r__8841,0,embed__8840);
{
var G__8843 = (ll__8838 - 5);
var G__8844 = r__8841;
ll__8838 = G__8843;
ret__8839 = G__8844;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__8850 = cljs.core.pv_clone_node(parent);
var subidx__8851 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset(ret__8850,subidx__8851,tailnode);
return ret__8850;
} else
{var child__8852 = cljs.core.pv_aget(parent,subidx__8851);
if(!((child__8852 == null)))
{var node_to_insert__8853 = push_tail(pv,(level - 5),child__8852,tailnode);
cljs.core.pv_aset(ret__8850,subidx__8851,node_to_insert__8853);
return ret__8850;
} else
{var node_to_insert__8854 = cljs.core.new_path(null,(level - 5),tailnode);
cljs.core.pv_aset(ret__8850,subidx__8851,node_to_insert__8854);
return ret__8850;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3822__auto____8858 = (0 <= i);
if(and__3822__auto____8858)
{return (i < pv.cnt);
} else
{return and__3822__auto____8858;
}
})())
{if((i >= cljs.core.tail_off(pv)))
{return pv.tail;
} else
{var node__8859 = pv.root;
var level__8860 = pv.shift;
while(true){
if((level__8860 > 0))
{{
var G__8861 = cljs.core.pv_aget(node__8859,((i >>> level__8860) & 31));
var G__8862 = (level__8860 - 5);
node__8859 = G__8861;
level__8860 = G__8862;
continue;
}
} else
{return node__8859.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__8865 = cljs.core.pv_clone_node(node);
if((level === 0))
{cljs.core.pv_aset(ret__8865,(i & 31),val);
return ret__8865;
} else
{var subidx__8866 = ((i >>> level) & 31);
cljs.core.pv_aset(ret__8865,subidx__8866,do_assoc(pv,(level - 5),cljs.core.pv_aget(node,subidx__8866),i,val));
return ret__8865;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__8872 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__8873 = pop_tail(pv,(level - 5),cljs.core.pv_aget(node,subidx__8872));
if((function (){var and__3822__auto____8874 = (new_child__8873 == null);
if(and__3822__auto____8874)
{return (subidx__8872 === 0);
} else
{return and__3822__auto____8874;
}
})())
{return null;
} else
{var ret__8875 = cljs.core.pv_clone_node(node);
cljs.core.pv_aset(ret__8875,subidx__8872,new_child__8873);
return ret__8875;
}
} else
{if((subidx__8872 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__8876 = cljs.core.pv_clone_node(node);
cljs.core.pv_aset(ret__8876,subidx__8872,null);
return ret__8876;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__8879 = this;
return (new cljs.core.TransientVector(this__8879.cnt,this__8879.shift,cljs.core.tv_editable_root(this__8879.root),cljs.core.tv_editable_tail(this__8879.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8880 = this;
var h__2199__auto____8881 = this__8880.__hash;
if(!((h__2199__auto____8881 == null)))
{return h__2199__auto____8881;
} else
{var h__2199__auto____8882 = cljs.core.hash_coll(coll);
this__8880.__hash = h__2199__auto____8882;
return h__2199__auto____8882;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8883 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8884 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__8885 = this;
if((function (){var and__3822__auto____8886 = (0 <= k);
if(and__3822__auto____8886)
{return (k < this__8885.cnt);
} else
{return and__3822__auto____8886;
}
})())
{if((cljs.core.tail_off(coll) <= k))
{var new_tail__8887 = this__8885.tail.slice();
(new_tail__8887[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__8885.meta,this__8885.cnt,this__8885.shift,this__8885.root,new_tail__8887,null));
} else
{return (new cljs.core.PersistentVector(this__8885.meta,this__8885.cnt,this__8885.shift,cljs.core.do_assoc(coll,this__8885.shift,this__8885.root,k,v),this__8885.tail,null));
}
} else
{if((k === this__8885.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__8885.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__8935 = null;
var G__8935__2 = (function (this_sym8888,k){
var this__8890 = this;
var this_sym8888__8891 = this;
var coll__8892 = this_sym8888__8891;
return coll__8892.cljs$core$ILookup$_lookup$arity$2(coll__8892,k);
});
var G__8935__3 = (function (this_sym8889,k,not_found){
var this__8890 = this;
var this_sym8889__8893 = this;
var coll__8894 = this_sym8889__8893;
return coll__8894.cljs$core$ILookup$_lookup$arity$3(coll__8894,k,not_found);
});
G__8935 = function(this_sym8889,k,not_found){
switch(arguments.length){
case 2:
return G__8935__2.call(this,this_sym8889,k);
case 3:
return G__8935__3.call(this,this_sym8889,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8935;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym8877,args8878){
var this__8895 = this;
return this_sym8877.call.apply(this_sym8877,[this_sym8877].concat(args8878.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__8896 = this;
var step_init__8897 = [0,init];
var i__8898 = 0;
while(true){
if((i__8898 < this__8896.cnt))
{var arr__8899 = cljs.core.array_for(v,i__8898);
var len__8900 = arr__8899.length;
var init__8904 = (function (){var j__8901 = 0;
var init__8902 = (step_init__8897[1]);
while(true){
if((j__8901 < len__8900))
{var init__8903 = (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(init__8902,(j__8901 + i__8898),(arr__8899[j__8901])) : f.call(null,init__8902,(j__8901 + i__8898),(arr__8899[j__8901])));
if(cljs.core.reduced_QMARK_(init__8903))
{return init__8903;
} else
{{
var G__8936 = (j__8901 + 1);
var G__8937 = init__8903;
j__8901 = G__8936;
init__8902 = G__8937;
continue;
}
}
} else
{(step_init__8897[0] = len__8900);
(step_init__8897[1] = init__8902);
return init__8902;
}
break;
}
})();
if(cljs.core.reduced_QMARK_(init__8904))
{return cljs.core.deref(init__8904);
} else
{{
var G__8938 = (i__8898 + (step_init__8897[0]));
i__8898 = G__8938;
continue;
}
}
} else
{return (step_init__8897[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8905 = this;
if(((this__8905.cnt - cljs.core.tail_off(coll)) < 32))
{var new_tail__8906 = this__8905.tail.slice();
new_tail__8906.push(o);
return (new cljs.core.PersistentVector(this__8905.meta,(this__8905.cnt + 1),this__8905.shift,this__8905.root,new_tail__8906,null));
} else
{var root_overflow_QMARK___8907 = ((this__8905.cnt >>> 5) > (1 << this__8905.shift));
var new_shift__8908 = ((root_overflow_QMARK___8907)?(this__8905.shift + 5):this__8905.shift);
var new_root__8910 = ((root_overflow_QMARK___8907)?(function (){var n_r__8909 = cljs.core.pv_fresh_node(null);
cljs.core.pv_aset(n_r__8909,0,this__8905.root);
cljs.core.pv_aset(n_r__8909,1,cljs.core.new_path(null,this__8905.shift,(new cljs.core.VectorNode(null,this__8905.tail))));
return n_r__8909;
})():cljs.core.push_tail(coll,this__8905.shift,this__8905.root,(new cljs.core.VectorNode(null,this__8905.tail))));
return (new cljs.core.PersistentVector(this__8905.meta,(this__8905.cnt + 1),new_shift__8908,new_root__8910,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__8911 = this;
if((this__8911.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__8911.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__8912 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__8913 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__8914 = this;
var this__8915 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__8915], 0));
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__8916 = this;
return cljs.core.ci_reduce.cljs$lang$arity$2(v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__8917 = this;
return cljs.core.ci_reduce.cljs$lang$arity$3(v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8918 = this;
if((this__8918.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.cljs$lang$arity$3(coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8919 = this;
return this__8919.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8920 = this;
if((this__8920.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__8920.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8921 = this;
if((this__8921.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__8921.cnt))
{return cljs.core._with_meta(cljs.core.PersistentVector.EMPTY,this__8921.meta);
} else
{if((1 < (this__8921.cnt - cljs.core.tail_off(coll))))
{return (new cljs.core.PersistentVector(this__8921.meta,(this__8921.cnt - 1),this__8921.shift,this__8921.root,this__8921.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__8922 = cljs.core.array_for(coll,(this__8921.cnt - 2));
var nr__8923 = cljs.core.pop_tail(coll,this__8921.shift,this__8921.root);
var new_root__8924 = (((nr__8923 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__8923);
var cnt_1__8925 = (this__8921.cnt - 1);
if((function (){var and__3822__auto____8926 = (5 < this__8921.shift);
if(and__3822__auto____8926)
{return (cljs.core.pv_aget(new_root__8924,1) == null);
} else
{return and__3822__auto____8926;
}
})())
{return (new cljs.core.PersistentVector(this__8921.meta,cnt_1__8925,(this__8921.shift - 5),cljs.core.pv_aget(new_root__8924,0),new_tail__8922,null));
} else
{return (new cljs.core.PersistentVector(this__8921.meta,cnt_1__8925,this__8921.shift,new_root__8924,new_tail__8922,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8927 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8928 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8929 = this;
return (new cljs.core.PersistentVector(meta,this__8929.cnt,this__8929.shift,this__8929.root,this__8929.tail,this__8929.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8930 = this;
return this__8930.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8931 = this;
return (cljs.core.array_for(coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8932 = this;
if((function (){var and__3822__auto____8933 = (0 <= n);
if(and__3822__auto____8933)
{return (n < this__8932.cnt);
} else
{return and__3822__auto____8933;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8934 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,this__8934.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node(null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__8939 = xs.length;
var xs__8940 = (((no_clone === true))?xs:xs.slice());
if((l__8939 < 32))
{return (new cljs.core.PersistentVector(null,l__8939,5,cljs.core.PersistentVector.EMPTY_NODE,xs__8940,null));
} else
{var node__8941 = xs__8940.slice(0,32);
var v__8942 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__8941,null));
var i__8943 = 32;
var out__8944 = cljs.core._as_transient(v__8942);
while(true){
if((i__8943 < l__8939))
{{
var G__8945 = (i__8943 + 1);
var G__8946 = cljs.core.conj_BANG_(out__8944,(xs__8940[i__8943]));
i__8943 = G__8945;
out__8944 = G__8946;
continue;
}
} else
{return cljs.core.persistent_BANG_(out__8944);
}
break;
}
}
});
cljs.core.vec = (function vec(coll){
return cljs.core._persistent_BANG_(cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj_BANG_,cljs.core._as_transient(cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec(args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__8947){
var args = cljs.core.seq(arglist__8947);;
return vector__delegate(args);
});
vector.cljs$lang$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27525356;
})
cljs.core.ChunkedSeq.cljs$lang$type = true;
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8948 = this;
if(((this__8948.off + 1) < this__8948.node.length))
{var s__8949 = cljs.core.chunked_seq.cljs$lang$arity$4(this__8948.vec,this__8948.node,this__8948.i,(this__8948.off + 1));
if((s__8949 == null))
{return null;
} else
{return s__8949;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8950 = this;
return cljs.core.cons(o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8951 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8952 = this;
return (this__8952.node[this__8952.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8953 = this;
if(((this__8953.off + 1) < this__8953.node.length))
{var s__8954 = cljs.core.chunked_seq.cljs$lang$arity$4(this__8953.vec,this__8953.node,this__8953.i,(this__8953.off + 1));
if((s__8954 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8954;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__8955 = this;
var l__8956 = this__8955.node.length;
var s__8957 = ((((this__8955.i + l__8956) < cljs.core._count(this__8955.vec)))?cljs.core.chunked_seq.cljs$lang$arity$3(this__8955.vec,(this__8955.i + l__8956),0):null);
if((s__8957 == null))
{return null;
} else
{return s__8957;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8958 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__8959 = this;
return cljs.core.chunked_seq.cljs$lang$arity$5(this__8959.vec,this__8959.node,this__8959.i,this__8959.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__8960 = this;
return this__8960.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8961 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,this__8961.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__8962 = this;
return cljs.core.array_chunk.cljs$lang$arity$2(this__8962.node,this__8962.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__8963 = this;
var l__8964 = this__8963.node.length;
var s__8965 = ((((this__8963.i + l__8964) < cljs.core._count(this__8963.vec)))?cljs.core.chunked_seq.cljs$lang$arity$3(this__8963.vec,(this__8963.i + l__8964),0):null);
if((s__8965 == null))
{return cljs.core.List.EMPTY;
} else
{return s__8965;
}
});
cljs.core.ChunkedSeq;
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){
return chunked_seq.cljs$lang$arity$5(vec,cljs.core.array_for(vec,i),i,off,null);
});
var chunked_seq__4 = (function (vec,node,i,off){
return chunked_seq.cljs$lang$arity$5(vec,node,i,off,null);
});
var chunked_seq__5 = (function (vec,node,i,off,meta){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw('Invalid arity: ' + arguments.length);
};
chunked_seq.cljs$lang$arity$3 = chunked_seq__3;
chunked_seq.cljs$lang$arity$4 = chunked_seq__4;
chunked_seq.cljs$lang$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8968 = this;
var h__2199__auto____8969 = this__8968.__hash;
if(!((h__2199__auto____8969 == null)))
{return h__2199__auto____8969;
} else
{var h__2199__auto____8970 = cljs.core.hash_coll(coll);
this__8968.__hash = h__2199__auto____8970;
return h__2199__auto____8970;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__8971 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__8972 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__8973 = this;
var v_pos__8974 = (this__8973.start + key);
return (new cljs.core.Subvec(this__8973.meta,cljs.core._assoc(this__8973.v,v_pos__8974,val),this__8973.start,((this__8973.end > (v_pos__8974 + 1)) ? this__8973.end : (v_pos__8974 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__9000 = null;
var G__9000__2 = (function (this_sym8975,k){
var this__8977 = this;
var this_sym8975__8978 = this;
var coll__8979 = this_sym8975__8978;
return coll__8979.cljs$core$ILookup$_lookup$arity$2(coll__8979,k);
});
var G__9000__3 = (function (this_sym8976,k,not_found){
var this__8977 = this;
var this_sym8976__8980 = this;
var coll__8981 = this_sym8976__8980;
return coll__8981.cljs$core$ILookup$_lookup$arity$3(coll__8981,k,not_found);
});
G__9000 = function(this_sym8976,k,not_found){
switch(arguments.length){
case 2:
return G__9000__2.call(this,this_sym8976,k);
case 3:
return G__9000__3.call(this,this_sym8976,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9000;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym8966,args8967){
var this__8982 = this;
return this_sym8966.call.apply(this_sym8966,[this_sym8966].concat(args8967.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8983 = this;
return (new cljs.core.Subvec(this__8983.meta,cljs.core._assoc_n(this__8983.v,this__8983.end,o),this__8983.start,(this__8983.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__8984 = this;
var this__8985 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__8985], 0));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8986 = this;
return cljs.core.ci_reduce.cljs$lang$arity$2(coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8987 = this;
return cljs.core.ci_reduce.cljs$lang$arity$3(coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8988 = this;
var subvec_seq__8989 = (function subvec_seq(i){
if((i === this__8988.end))
{return null;
} else
{return cljs.core.cons(cljs.core._nth.cljs$lang$arity$2(this__8988.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq((i + 1));
}),null)));
}
});
return (subvec_seq__8989.cljs$lang$arity$1 ? subvec_seq__8989.cljs$lang$arity$1(this__8988.start) : subvec_seq__8989.call(null,this__8988.start));
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8990 = this;
return (this__8990.end - this__8990.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8991 = this;
return cljs.core._nth.cljs$lang$arity$2(this__8991.v,(this__8991.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8992 = this;
if((this__8992.start === this__8992.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__8992.meta,this__8992.v,this__8992.start,(this__8992.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__8993 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8994 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8995 = this;
return (new cljs.core.Subvec(meta,this__8995.v,this__8995.start,this__8995.end,this__8995.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8996 = this;
return this__8996.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__8997 = this;
return cljs.core._nth.cljs$lang$arity$2(this__8997.v,(this__8997.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__8998 = this;
return cljs.core._nth.cljs$lang$arity$3(this__8998.v,(this__8998.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8999 = this;
return cljs.core.with_meta(cljs.core.Vector.EMPTY,this__8999.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.cljs$lang$arity$3(v,start,cljs.core.count(v));
});
var subvec__3 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end,null));
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subvec.cljs$lang$arity$2 = subvec__2;
subvec.cljs$lang$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,node.arr.slice()));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode({},node.arr.slice()));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret__9002 = cljs.core.make_array.cljs$lang$arity$1(32);
cljs.core.array_copy(tl,0,ret__9002,0,tl.length);
return ret__9002;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__9006 = cljs.core.tv_ensure_editable(tv.root.edit,parent);
var subidx__9007 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset(ret__9006,subidx__9007,(((level === 5))?tail_node:(function (){var child__9008 = cljs.core.pv_aget(ret__9006,subidx__9007);
if(!((child__9008 == null)))
{return tv_push_tail(tv,(level - 5),child__9008,tail_node);
} else
{return cljs.core.new_path(tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__9006;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__9013 = cljs.core.tv_ensure_editable(tv.root.edit,node);
var subidx__9014 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__9015 = tv_pop_tail(tv,(level - 5),cljs.core.pv_aget(node__9013,subidx__9014));
if((function (){var and__3822__auto____9016 = (new_child__9015 == null);
if(and__3822__auto____9016)
{return (subidx__9014 === 0);
} else
{return and__3822__auto____9016;
}
})())
{return null;
} else
{cljs.core.pv_aset(node__9013,subidx__9014,new_child__9015);
return node__9013;
}
} else
{if((subidx__9014 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset(node__9013,subidx__9014,null);
return node__9013;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3822__auto____9021 = (0 <= i);
if(and__3822__auto____9021)
{return (i < tv.cnt);
} else
{return and__3822__auto____9021;
}
})())
{if((i >= cljs.core.tail_off(tv)))
{return tv.tail;
} else
{var root__9022 = tv.root;
var node__9023 = root__9022;
var level__9024 = tv.shift;
while(true){
if((level__9024 > 0))
{{
var G__9025 = cljs.core.tv_ensure_editable(root__9022.edit,cljs.core.pv_aget(node__9023,((i >>> level__9024) & 31)));
var G__9026 = (level__9024 - 5);
node__9023 = G__9025;
level__9024 = G__9026;
continue;
}
} else
{return node__9023.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in transient vector of length "),cljs.core.str(tv.cnt)].join('')));
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 22;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__9066 = null;
var G__9066__2 = (function (this_sym9029,k){
var this__9031 = this;
var this_sym9029__9032 = this;
var coll__9033 = this_sym9029__9032;
return coll__9033.cljs$core$ILookup$_lookup$arity$2(coll__9033,k);
});
var G__9066__3 = (function (this_sym9030,k,not_found){
var this__9031 = this;
var this_sym9030__9034 = this;
var coll__9035 = this_sym9030__9034;
return coll__9035.cljs$core$ILookup$_lookup$arity$3(coll__9035,k,not_found);
});
G__9066 = function(this_sym9030,k,not_found){
switch(arguments.length){
case 2:
return G__9066__2.call(this,this_sym9030,k);
case 3:
return G__9066__3.call(this,this_sym9030,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9066;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym9027,args9028){
var this__9036 = this;
return this_sym9027.call.apply(this_sym9027,[this_sym9027].concat(args9028.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9037 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9038 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9039 = this;
if(this__9039.root.edit)
{return (cljs.core.array_for(coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9040 = this;
if((function (){var and__3822__auto____9041 = (0 <= n);
if(and__3822__auto____9041)
{return (n < this__9040.cnt);
} else
{return and__3822__auto____9041;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9042 = this;
if(this__9042.root.edit)
{return this__9042.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__9043 = this;
if(this__9043.root.edit)
{if((function (){var and__3822__auto____9044 = (0 <= n);
if(and__3822__auto____9044)
{return (n < this__9043.cnt);
} else
{return and__3822__auto____9044;
}
})())
{if((cljs.core.tail_off(tcoll) <= n))
{(this__9043.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__9049 = (function go(level,node){
var node__9047 = cljs.core.tv_ensure_editable(this__9043.root.edit,node);
if((level === 0))
{cljs.core.pv_aset(node__9047,(n & 31),val);
return node__9047;
} else
{var subidx__9048 = ((n >>> level) & 31);
cljs.core.pv_aset(node__9047,subidx__9048,go((level - 5),cljs.core.pv_aget(node__9047,subidx__9048)));
return node__9047;
}
}).call(null,this__9043.shift,this__9043.root);
this__9043.root = new_root__9049;
return tcoll;
}
} else
{if((n === this__9043.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__9043.cnt)].join('')));
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var this__9050 = this;
if(this__9050.root.edit)
{if((this__9050.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__9050.cnt))
{this__9050.cnt = 0;
return tcoll;
} else
{if((((this__9050.cnt - 1) & 31) > 0))
{this__9050.cnt = (this__9050.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__9051 = cljs.core.editable_array_for(tcoll,(this__9050.cnt - 2));
var new_root__9053 = (function (){var nr__9052 = cljs.core.tv_pop_tail(tcoll,this__9050.shift,this__9050.root);
if(!((nr__9052 == null)))
{return nr__9052;
} else
{return (new cljs.core.VectorNode(this__9050.root.edit,cljs.core.make_array.cljs$lang$arity$1(32)));
}
})();
if((function (){var and__3822__auto____9054 = (5 < this__9050.shift);
if(and__3822__auto____9054)
{return (cljs.core.pv_aget(new_root__9053,1) == null);
} else
{return and__3822__auto____9054;
}
})())
{var new_root__9055 = cljs.core.tv_ensure_editable(this__9050.root.edit,cljs.core.pv_aget(new_root__9053,0));
this__9050.root = new_root__9055;
this__9050.shift = (this__9050.shift - 5);
this__9050.cnt = (this__9050.cnt - 1);
this__9050.tail = new_tail__9051;
return tcoll;
} else
{this__9050.root = new_root__9053;
this__9050.cnt = (this__9050.cnt - 1);
this__9050.tail = new_tail__9051;
return tcoll;
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9056 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9057 = this;
if(this__9057.root.edit)
{if(((this__9057.cnt - cljs.core.tail_off(tcoll)) < 32))
{(this__9057.tail[(this__9057.cnt & 31)] = o);
this__9057.cnt = (this__9057.cnt + 1);
return tcoll;
} else
{var tail_node__9058 = (new cljs.core.VectorNode(this__9057.root.edit,this__9057.tail));
var new_tail__9059 = cljs.core.make_array.cljs$lang$arity$1(32);
(new_tail__9059[0] = o);
this__9057.tail = new_tail__9059;
if(((this__9057.cnt >>> 5) > (1 << this__9057.shift)))
{var new_root_array__9060 = cljs.core.make_array.cljs$lang$arity$1(32);
var new_shift__9061 = (this__9057.shift + 5);
(new_root_array__9060[0] = this__9057.root);
(new_root_array__9060[1] = cljs.core.new_path(this__9057.root.edit,this__9057.shift,tail_node__9058));
this__9057.root = (new cljs.core.VectorNode(this__9057.root.edit,new_root_array__9060));
this__9057.shift = new_shift__9061;
this__9057.cnt = (this__9057.cnt + 1);
return tcoll;
} else
{var new_root__9062 = cljs.core.tv_push_tail(tcoll,this__9057.shift,this__9057.root,tail_node__9058);
this__9057.root = new_root__9062;
this__9057.cnt = (this__9057.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9063 = this;
if(this__9063.root.edit)
{this__9063.root.edit = null;
var len__9064 = (this__9063.cnt - cljs.core.tail_off(tcoll));
var trimmed_tail__9065 = cljs.core.make_array.cljs$lang$arity$1(len__9064);
cljs.core.array_copy(this__9063.tail,0,trimmed_tail__9065,0,len__9064);
return (new cljs.core.PersistentVector(null,this__9063.cnt,this__9063.shift,this__9063.root,trimmed_tail__9065,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientVector;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9067 = this;
var h__2199__auto____9068 = this__9067.__hash;
if(!((h__2199__auto____9068 == null)))
{return h__2199__auto____9068;
} else
{var h__2199__auto____9069 = cljs.core.hash_coll(coll);
this__9067.__hash = h__2199__auto____9069;
return h__2199__auto____9069;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9070 = this;
return cljs.core.cons(o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__9071 = this;
var this__9072 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9072], 0));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9073 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9074 = this;
return cljs.core._first(this__9074.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9075 = this;
var temp__3971__auto____9076 = cljs.core.next(this__9075.front);
if(temp__3971__auto____9076)
{var f1__9077 = temp__3971__auto____9076;
return (new cljs.core.PersistentQueueSeq(this__9075.meta,f1__9077,this__9075.rear,null));
} else
{if((this__9075.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__9075.meta,this__9075.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9078 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9079 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__9079.front,this__9079.rear,this__9079.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9080 = this;
return this__9080.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9081 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,this__9081.meta);
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9082 = this;
var h__2199__auto____9083 = this__9082.__hash;
if(!((h__2199__auto____9083 == null)))
{return h__2199__auto____9083;
} else
{var h__2199__auto____9084 = cljs.core.hash_coll(coll);
this__9082.__hash = h__2199__auto____9084;
return h__2199__auto____9084;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9085 = this;
if(cljs.core.truth_(this__9085.front))
{return (new cljs.core.PersistentQueue(this__9085.meta,(this__9085.count + 1),this__9085.front,cljs.core.conj.cljs$lang$arity$2((function (){var or__3824__auto____9086 = this__9085.rear;
if(cljs.core.truth_(or__3824__auto____9086))
{return or__3824__auto____9086;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__9085.meta,(this__9085.count + 1),cljs.core.conj.cljs$lang$arity$2(this__9085.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__9087 = this;
var this__9088 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9088], 0));
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9089 = this;
var rear__9090 = cljs.core.seq(this__9089.rear);
if(cljs.core.truth_((function (){var or__3824__auto____9091 = this__9089.front;
if(cljs.core.truth_(or__3824__auto____9091))
{return or__3824__auto____9091;
} else
{return rear__9090;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__9089.front,cljs.core.seq(rear__9090),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9092 = this;
return this__9092.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9093 = this;
return cljs.core._first(this__9093.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9094 = this;
if(cljs.core.truth_(this__9094.front))
{var temp__3971__auto____9095 = cljs.core.next(this__9094.front);
if(temp__3971__auto____9095)
{var f1__9096 = temp__3971__auto____9095;
return (new cljs.core.PersistentQueue(this__9094.meta,(this__9094.count - 1),f1__9096,this__9094.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__9094.meta,(this__9094.count - 1),cljs.core.seq(this__9094.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9097 = this;
return cljs.core.first(this__9097.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9098 = this;
return cljs.core.rest(cljs.core.seq(coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9099 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9100 = this;
return (new cljs.core.PersistentQueue(meta,this__9100.count,this__9100.front,this__9100.rear,this__9100.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9101 = this;
return this__9101.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9102 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.EMPTY,0));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__9103 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$(((cljs.core.map_QMARK_(y))?(((cljs.core.count(x) === cljs.core.count(y)))?cljs.core.every_QMARK_(cljs.core.identity,cljs.core.map.cljs$lang$arity$2((function (xkv){
return cljs.core._EQ_.cljs$lang$arity$2(cljs.core._lookup.cljs$lang$arity$3(y,cljs.core.first(xkv),cljs.core.never_equiv),cljs.core.second(xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__9106 = array.length;
var i__9107 = 0;
while(true){
if((i__9107 < len__9106))
{if((k === (array[i__9107])))
{return i__9107;
} else
{{
var G__9108 = (i__9107 + incr);
i__9107 = G__9108;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__9111 = cljs.core.hash.cljs$lang$arity$1(a);
var b__9112 = cljs.core.hash.cljs$lang$arity$1(b);
if((a__9111 < b__9112))
{return -1;
} else
{if((a__9111 > b__9112))
{return 1;
} else
{if("\uFDD0'else")
{return 0;
} else
{return null;
}
}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks__9120 = m.keys;
var len__9121 = ks__9120.length;
var so__9122 = m.strobj;
var out__9123 = cljs.core.with_meta(cljs.core.PersistentHashMap.EMPTY,cljs.core.meta(m));
var i__9124 = 0;
var out__9125 = cljs.core.transient$(out__9123);
while(true){
if((i__9124 < len__9121))
{var k__9126 = (ks__9120[i__9124]);
{
var G__9127 = (i__9124 + 1);
var G__9128 = cljs.core.assoc_BANG_(out__9125,k__9126,(so__9122[k__9126]));
i__9124 = G__9127;
out__9125 = G__9128;
continue;
}
} else
{return cljs.core.persistent_BANG_(cljs.core.assoc_BANG_(out__9125,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__9134 = {};
var l__9135 = ks.length;
var i__9136 = 0;
while(true){
if((i__9136 < l__9135))
{var k__9137 = (ks[i__9136]);
(new_obj__9134[k__9137] = (obj[k__9137]));
{
var G__9138 = (i__9136 + 1);
i__9136 = G__9138;
continue;
}
} else
{}
break;
}
return new_obj__9134;
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9141 = this;
return cljs.core.transient$(cljs.core.into(cljs.core.hash_map(),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9142 = this;
var h__2199__auto____9143 = this__9142.__hash;
if(!((h__2199__auto____9143 == null)))
{return h__2199__auto____9143;
} else
{var h__2199__auto____9144 = cljs.core.hash_imap(coll);
this__9142.__hash = h__2199__auto____9144;
return h__2199__auto____9144;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9145 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9146 = this;
if((function (){var and__3822__auto____9147 = goog.isString(k);
if(and__3822__auto____9147)
{return !((cljs.core.scan_array(1,k,this__9146.keys) == null));
} else
{return and__3822__auto____9147;
}
})())
{return (this__9146.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9148 = this;
if(goog.isString(k))
{if((function (){var or__3824__auto____9149 = (this__9148.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3824__auto____9149)
{return or__3824__auto____9149;
} else
{return (this__9148.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map(coll,k,v);
} else
{if(!((cljs.core.scan_array(1,k,this__9148.keys) == null)))
{var new_strobj__9150 = cljs.core.obj_clone(this__9148.strobj,this__9148.keys);
(new_strobj__9150[k] = v);
return (new cljs.core.ObjMap(this__9148.meta,this__9148.keys,new_strobj__9150,(this__9148.update_count + 1),null));
} else
{var new_strobj__9151 = cljs.core.obj_clone(this__9148.strobj,this__9148.keys);
var new_keys__9152 = this__9148.keys.slice();
(new_strobj__9151[k] = v);
new_keys__9152.push(k);
return (new cljs.core.ObjMap(this__9148.meta,new_keys__9152,new_strobj__9151,(this__9148.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map(coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9153 = this;
if((function (){var and__3822__auto____9154 = goog.isString(k);
if(and__3822__auto____9154)
{return !((cljs.core.scan_array(1,k,this__9153.keys) == null));
} else
{return and__3822__auto____9154;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__9176 = null;
var G__9176__2 = (function (this_sym9155,k){
var this__9157 = this;
var this_sym9155__9158 = this;
var coll__9159 = this_sym9155__9158;
return coll__9159.cljs$core$ILookup$_lookup$arity$2(coll__9159,k);
});
var G__9176__3 = (function (this_sym9156,k,not_found){
var this__9157 = this;
var this_sym9156__9160 = this;
var coll__9161 = this_sym9156__9160;
return coll__9161.cljs$core$ILookup$_lookup$arity$3(coll__9161,k,not_found);
});
G__9176 = function(this_sym9156,k,not_found){
switch(arguments.length){
case 2:
return G__9176__2.call(this,this_sym9156,k);
case 3:
return G__9176__3.call(this,this_sym9156,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9176;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym9139,args9140){
var this__9162 = this;
return this_sym9139.call.apply(this_sym9139,[this_sym9139].concat(args9140.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9163 = this;
if(cljs.core.vector_QMARK_(entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.cljs$lang$arity$2(entry,0),cljs.core._nth.cljs$lang$arity$2(entry,1));
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__9164 = this;
var this__9165 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9165], 0));
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9166 = this;
if((this__9166.keys.length > 0))
{return cljs.core.map.cljs$lang$arity$2((function (p1__9129_SHARP_){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([p1__9129_SHARP_,(this__9166.strobj[p1__9129_SHARP_])], 0));
}),this__9166.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9167 = this;
return this__9167.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9168 = this;
return cljs.core.equiv_map(coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9169 = this;
return (new cljs.core.ObjMap(meta,this__9169.keys,this__9169.strobj,this__9169.update_count,this__9169.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9170 = this;
return this__9170.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9171 = this;
return cljs.core.with_meta(cljs.core.ObjMap.EMPTY,this__9171.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9172 = this;
if((function (){var and__3822__auto____9173 = goog.isString(k);
if(and__3822__auto____9173)
{return !((cljs.core.scan_array(1,k,this__9172.keys) == null));
} else
{return and__3822__auto____9173;
}
})())
{var new_keys__9174 = this__9172.keys.slice();
var new_strobj__9175 = cljs.core.obj_clone(this__9172.strobj,this__9172.keys);
new_keys__9174.splice(cljs.core.scan_array(1,k,new_keys__9174),1);
cljs.core.js_delete(new_strobj__9175,k);
return (new cljs.core.ObjMap(this__9172.meta,new_keys__9174,new_strobj__9175,(this__9172.update_count + 1),null));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],{},0,0));
cljs.core.ObjMap.HASHMAP_THRESHOLD = 32;
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,0,null));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj,__hash){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.HashMap.cljs$lang$type = true;
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9180 = this;
var h__2199__auto____9181 = this__9180.__hash;
if(!((h__2199__auto____9181 == null)))
{return h__2199__auto____9181;
} else
{var h__2199__auto____9182 = cljs.core.hash_imap(coll);
this__9180.__hash = h__2199__auto____9182;
return h__2199__auto____9182;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9183 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9184 = this;
var bucket__9185 = (this__9184.hashobj[cljs.core.hash.cljs$lang$arity$1(k)]);
var i__9186 = (cljs.core.truth_(bucket__9185)?cljs.core.scan_array(2,k,bucket__9185):null);
if(cljs.core.truth_(i__9186))
{return (bucket__9185[(i__9186 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9187 = this;
var h__9188 = cljs.core.hash.cljs$lang$arity$1(k);
var bucket__9189 = (this__9187.hashobj[h__9188]);
if(cljs.core.truth_(bucket__9189))
{var new_bucket__9190 = bucket__9189.slice();
var new_hashobj__9191 = goog.object.clone(this__9187.hashobj);
(new_hashobj__9191[h__9188] = new_bucket__9190);
var temp__3971__auto____9192 = cljs.core.scan_array(2,k,new_bucket__9190);
if(cljs.core.truth_(temp__3971__auto____9192))
{var i__9193 = temp__3971__auto____9192;
(new_bucket__9190[(i__9193 + 1)] = v);
return (new cljs.core.HashMap(this__9187.meta,this__9187.count,new_hashobj__9191,null));
} else
{new_bucket__9190.push(k,v);
return (new cljs.core.HashMap(this__9187.meta,(this__9187.count + 1),new_hashobj__9191,null));
}
} else
{var new_hashobj__9194 = goog.object.clone(this__9187.hashobj);
(new_hashobj__9194[h__9188] = [k,v]);
return (new cljs.core.HashMap(this__9187.meta,(this__9187.count + 1),new_hashobj__9194,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9195 = this;
var bucket__9196 = (this__9195.hashobj[cljs.core.hash.cljs$lang$arity$1(k)]);
var i__9197 = (cljs.core.truth_(bucket__9196)?cljs.core.scan_array(2,k,bucket__9196):null);
if(cljs.core.truth_(i__9197))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__9222 = null;
var G__9222__2 = (function (this_sym9198,k){
var this__9200 = this;
var this_sym9198__9201 = this;
var coll__9202 = this_sym9198__9201;
return coll__9202.cljs$core$ILookup$_lookup$arity$2(coll__9202,k);
});
var G__9222__3 = (function (this_sym9199,k,not_found){
var this__9200 = this;
var this_sym9199__9203 = this;
var coll__9204 = this_sym9199__9203;
return coll__9204.cljs$core$ILookup$_lookup$arity$3(coll__9204,k,not_found);
});
G__9222 = function(this_sym9199,k,not_found){
switch(arguments.length){
case 2:
return G__9222__2.call(this,this_sym9199,k);
case 3:
return G__9222__3.call(this,this_sym9199,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9222;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym9178,args9179){
var this__9205 = this;
return this_sym9178.call.apply(this_sym9178,[this_sym9178].concat(args9179.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9206 = this;
if(cljs.core.vector_QMARK_(entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.cljs$lang$arity$2(entry,0),cljs.core._nth.cljs$lang$arity$2(entry,1));
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__9207 = this;
var this__9208 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9208], 0));
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9209 = this;
if((this__9209.count > 0))
{var hashes__9210 = cljs.core.js_keys(this__9209.hashobj).sort();
return cljs.core.mapcat.cljs$lang$arity$2((function (p1__9177_SHARP_){
return cljs.core.map.cljs$lang$arity$2(cljs.core.vec,cljs.core.partition.cljs$lang$arity$2(2,(this__9209.hashobj[p1__9177_SHARP_])));
}),hashes__9210);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9211 = this;
return this__9211.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9212 = this;
return cljs.core.equiv_map(coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9213 = this;
return (new cljs.core.HashMap(meta,this__9213.count,this__9213.hashobj,this__9213.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9214 = this;
return this__9214.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9215 = this;
return cljs.core.with_meta(cljs.core.HashMap.EMPTY,this__9215.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9216 = this;
var h__9217 = cljs.core.hash.cljs$lang$arity$1(k);
var bucket__9218 = (this__9216.hashobj[h__9217]);
var i__9219 = (cljs.core.truth_(bucket__9218)?cljs.core.scan_array(2,k,bucket__9218):null);
if(cljs.core.not(i__9219))
{return coll;
} else
{var new_hashobj__9220 = goog.object.clone(this__9216.hashobj);
if((3 > bucket__9218.length))
{cljs.core.js_delete(new_hashobj__9220,h__9217);
} else
{var new_bucket__9221 = bucket__9218.slice();
new_bucket__9221.splice(i__9219,2);
(new_hashobj__9220[h__9217] = new_bucket__9221);
}
return (new cljs.core.HashMap(this__9216.meta,(this__9216.count - 1),new_hashobj__9220,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__9223 = ks.length;
var i__9224 = 0;
var out__9225 = cljs.core.HashMap.EMPTY;
while(true){
if((i__9224 < len__9223))
{{
var G__9226 = (i__9224 + 1);
var G__9227 = cljs.core.assoc.cljs$lang$arity$3(out__9225,(ks[i__9224]),(vs[i__9224]));
i__9224 = G__9226;
out__9225 = G__9227;
continue;
}
} else
{return out__9225;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__9231 = m.arr;
var len__9232 = arr__9231.length;
var i__9233 = 0;
while(true){
if((len__9232 <= i__9233))
{return -1;
} else
{if(cljs.core._EQ_.cljs$lang$arity$2((arr__9231[i__9233]),k))
{return i__9233;
} else
{if("\uFDD0'else")
{{
var G__9234 = (i__9233 + 2);
i__9233 = G__9234;
continue;
}
} else
{return null;
}
}
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9237 = this;
return (new cljs.core.TransientArrayMap({},this__9237.arr.length,this__9237.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9238 = this;
var h__2199__auto____9239 = this__9238.__hash;
if(!((h__2199__auto____9239 == null)))
{return h__2199__auto____9239;
} else
{var h__2199__auto____9240 = cljs.core.hash_imap(coll);
this__9238.__hash = h__2199__auto____9240;
return h__2199__auto____9240;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9241 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9242 = this;
var idx__9243 = cljs.core.array_map_index_of(coll,k);
if((idx__9243 === -1))
{return not_found;
} else
{return (this__9242.arr[(idx__9243 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9244 = this;
var idx__9245 = cljs.core.array_map_index_of(coll,k);
if((idx__9245 === -1))
{if((this__9244.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__9244.meta,(this__9244.cnt + 1),(function (){var G__9246__9247 = this__9244.arr.slice();
G__9246__9247.push(k);
G__9246__9247.push(v);
return G__9246__9247;
})(),null));
} else
{return cljs.core.persistent_BANG_(cljs.core.assoc_BANG_(cljs.core.transient$(cljs.core.into(cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__9244.arr[(idx__9245 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__9244.meta,this__9244.cnt,(function (){var G__9248__9249 = this__9244.arr.slice();
(G__9248__9249[(idx__9245 + 1)] = v);
return G__9248__9249;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9250 = this;
return !((cljs.core.array_map_index_of(coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__9282 = null;
var G__9282__2 = (function (this_sym9251,k){
var this__9253 = this;
var this_sym9251__9254 = this;
var coll__9255 = this_sym9251__9254;
return coll__9255.cljs$core$ILookup$_lookup$arity$2(coll__9255,k);
});
var G__9282__3 = (function (this_sym9252,k,not_found){
var this__9253 = this;
var this_sym9252__9256 = this;
var coll__9257 = this_sym9252__9256;
return coll__9257.cljs$core$ILookup$_lookup$arity$3(coll__9257,k,not_found);
});
G__9282 = function(this_sym9252,k,not_found){
switch(arguments.length){
case 2:
return G__9282__2.call(this,this_sym9252,k);
case 3:
return G__9282__3.call(this,this_sym9252,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9282;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym9235,args9236){
var this__9258 = this;
return this_sym9235.call.apply(this_sym9235,[this_sym9235].concat(args9236.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9259 = this;
var len__9260 = this__9259.arr.length;
var i__9261 = 0;
var init__9262 = init;
while(true){
if((i__9261 < len__9260))
{var init__9263 = (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(init__9262,(this__9259.arr[i__9261]),(this__9259.arr[(i__9261 + 1)])) : f.call(null,init__9262,(this__9259.arr[i__9261]),(this__9259.arr[(i__9261 + 1)])));
if(cljs.core.reduced_QMARK_(init__9263))
{return cljs.core.deref(init__9263);
} else
{{
var G__9283 = (i__9261 + 2);
var G__9284 = init__9263;
i__9261 = G__9283;
init__9262 = G__9284;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9264 = this;
if(cljs.core.vector_QMARK_(entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.cljs$lang$arity$2(entry,0),cljs.core._nth.cljs$lang$arity$2(entry,1));
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__9265 = this;
var this__9266 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9266], 0));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9267 = this;
if((this__9267.cnt > 0))
{var len__9268 = this__9267.arr.length;
var array_map_seq__9269 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__9268))
{return cljs.core.cons(cljs.core.PersistentVector.fromArray([(this__9267.arr[i]),(this__9267.arr[(i + 1)])], true),array_map_seq((i + 2)));
} else
{return null;
}
}),null));
});
return (array_map_seq__9269.cljs$lang$arity$1 ? array_map_seq__9269.cljs$lang$arity$1(0) : array_map_seq__9269.call(null,0));
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9270 = this;
return this__9270.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9271 = this;
return cljs.core.equiv_map(coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9272 = this;
return (new cljs.core.PersistentArrayMap(meta,this__9272.cnt,this__9272.arr,this__9272.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9273 = this;
return this__9273.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9274 = this;
return cljs.core._with_meta(cljs.core.PersistentArrayMap.EMPTY,this__9274.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9275 = this;
var idx__9276 = cljs.core.array_map_index_of(coll,k);
if((idx__9276 >= 0))
{var len__9277 = this__9275.arr.length;
var new_len__9278 = (len__9277 - 2);
if((new_len__9278 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__9279 = cljs.core.make_array.cljs$lang$arity$1(new_len__9278);
var s__9280 = 0;
var d__9281 = 0;
while(true){
if((s__9280 >= len__9277))
{return (new cljs.core.PersistentArrayMap(this__9275.meta,(this__9275.cnt - 1),new_arr__9279,null));
} else
{if(cljs.core._EQ_.cljs$lang$arity$2(k,(this__9275.arr[s__9280])))
{{
var G__9285 = (s__9280 + 2);
var G__9286 = d__9281;
s__9280 = G__9285;
d__9281 = G__9286;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__9279[d__9281] = (this__9275.arr[s__9280]));
(new_arr__9279[(d__9281 + 1)] = (this__9275.arr[(s__9280 + 1)]));
{
var G__9287 = (s__9280 + 2);
var G__9288 = (d__9281 + 2);
s__9280 = G__9287;
d__9281 = G__9288;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return coll;
}
});
cljs.core.PersistentArrayMap;
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,0,[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljs.core.PersistentArrayMap.fromArrays = (function (ks,vs){
var len__9289 = cljs.core.count(ks);
var i__9290 = 0;
var out__9291 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__9290 < len__9289))
{{
var G__9292 = (i__9290 + 1);
var G__9293 = cljs.core.assoc_BANG_(out__9291,(ks[i__9290]),(vs[i__9290]));
i__9290 = G__9292;
out__9291 = G__9293;
continue;
}
} else
{return cljs.core.persistent_BANG_(out__9291);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__9294 = this;
if(cljs.core.truth_(this__9294.editable_QMARK_))
{var idx__9295 = cljs.core.array_map_index_of(tcoll,key);
if((idx__9295 >= 0))
{(this__9294.arr[idx__9295] = (this__9294.arr[(this__9294.len - 2)]));
(this__9294.arr[(idx__9295 + 1)] = (this__9294.arr[(this__9294.len - 1)]));
var G__9296__9297 = this__9294.arr;
G__9296__9297.pop();
G__9296__9297.pop();
G__9296__9297;
this__9294.len = (this__9294.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9298 = this;
if(cljs.core.truth_(this__9298.editable_QMARK_))
{var idx__9299 = cljs.core.array_map_index_of(tcoll,key);
if((idx__9299 === -1))
{if(((this__9298.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__9298.len = (this__9298.len + 2);
this__9298.arr.push(key);
this__9298.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_(cljs.core.array__GT_transient_hash_map(this__9298.len,this__9298.arr),key,val);
}
} else
{if((val === (this__9298.arr[(idx__9299 + 1)])))
{return tcoll;
} else
{(this__9298.arr[(idx__9299 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9300 = this;
if(cljs.core.truth_(this__9300.editable_QMARK_))
{if((function (){var G__9301__9302 = o;
if(G__9301__9302)
{if((function (){var or__3824__auto____9303 = (G__9301__9302.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____9303)
{return or__3824__auto____9303;
} else
{return G__9301__9302.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9301__9302.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IMapEntry,G__9301__9302);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IMapEntry,G__9301__9302);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key(o),cljs.core.val(o));
} else
{var es__9304 = cljs.core.seq(o);
var tcoll__9305 = tcoll;
while(true){
var temp__3971__auto____9306 = cljs.core.first(es__9304);
if(cljs.core.truth_(temp__3971__auto____9306))
{var e__9307 = temp__3971__auto____9306;
{
var G__9313 = cljs.core.next(es__9304);
var G__9314 = tcoll__9305.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__9305,cljs.core.key(e__9307),cljs.core.val(e__9307));
es__9304 = G__9313;
tcoll__9305 = G__9314;
continue;
}
} else
{return tcoll__9305;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9308 = this;
if(cljs.core.truth_(this__9308.editable_QMARK_))
{this__9308.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot(this__9308.len,2),this__9308.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9309 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9310 = this;
if(cljs.core.truth_(this__9310.editable_QMARK_))
{var idx__9311 = cljs.core.array_map_index_of(tcoll,k);
if((idx__9311 === -1))
{return not_found;
} else
{return (this__9310.arr[(idx__9311 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9312 = this;
if(cljs.core.truth_(this__9312.editable_QMARK_))
{return cljs.core.quot(this__9312.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__9317 = cljs.core.transient$(cljs.core.ObjMap.EMPTY);
var i__9318 = 0;
while(true){
if((i__9318 < len))
{{
var G__9319 = cljs.core.assoc_BANG_(out__9317,(arr[i__9318]),(arr[(i__9318 + 1)]));
var G__9320 = (i__9318 + 2);
out__9317 = G__9319;
i__9318 = G__9320;
continue;
}
} else
{return out__9317;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})
cljs.core.Box.cljs$lang$type = true;
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__2317__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Box");
});
cljs.core.Box;
cljs.core.key_test = (function key_test(key,other){
if(goog.isString(key))
{return (key === other);
} else
{return cljs.core._EQ_.cljs$lang$arity$2(key,other);
}
});
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & 31);
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__9325__9326 = arr.slice();
(G__9325__9326[i] = a);
return G__9325__9326;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__9327__9328 = arr.slice();
(G__9327__9328[i] = a);
(G__9327__9328[j] = b);
return G__9327__9328;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
clone_and_set.cljs$lang$arity$3 = clone_and_set__3;
clone_and_set.cljs$lang$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr__9330 = cljs.core.make_array.cljs$lang$arity$1((arr.length - 2));
cljs.core.array_copy(arr,0,new_arr__9330,0,(2 * i));
cljs.core.array_copy(arr,(2 * (i + 1)),new_arr__9330,(2 * i),(new_arr__9330.length - (2 * i)));
return new_arr__9330;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count((bitmap & (bit - 1)));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return (1 << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable__9333 = inode.ensure_editable(edit);
(editable__9333.arr[i] = a);
return editable__9333;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__9334 = inode.ensure_editable(edit);
(editable__9334.arr[i] = a);
(editable__9334.arr[j] = b);
return editable__9334;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
edit_and_set.cljs$lang$arity$4 = edit_and_set__4;
edit_and_set.cljs$lang$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len__9341 = arr.length;
var i__9342 = 0;
var init__9343 = init;
while(true){
if((i__9342 < len__9341))
{var init__9346 = (function (){var k__9344 = (arr[i__9342]);
if(!((k__9344 == null)))
{return (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(init__9343,k__9344,(arr[(i__9342 + 1)])) : f.call(null,init__9343,k__9344,(arr[(i__9342 + 1)])));
} else
{var node__9345 = (arr[(i__9342 + 1)]);
if(!((node__9345 == null)))
{return node__9345.kv_reduce(f,init__9343);
} else
{return init__9343;
}
}
})();
if(cljs.core.reduced_QMARK_(init__9346))
{return cljs.core.deref(init__9346);
} else
{{
var G__9347 = (i__9342 + 2);
var G__9348 = init__9346;
i__9342 = G__9347;
init__9343 = G__9348;
continue;
}
}
} else
{return init__9343;
}
break;
}
});

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__9349 = this;
var inode__9350 = this;
if((this__9349.bitmap === bit))
{return null;
} else
{var editable__9351 = inode__9350.ensure_editable(e);
var earr__9352 = editable__9351.arr;
var len__9353 = earr__9352.length;
editable__9351.bitmap = (bit ^ editable__9351.bitmap);
cljs.core.array_copy(earr__9352,(2 * (i + 1)),earr__9352,(2 * i),(len__9353 - (2 * (i + 1))));
(earr__9352[(len__9353 - 2)] = null);
(earr__9352[(len__9353 - 1)] = null);
return editable__9351;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9354 = this;
var inode__9355 = this;
var bit__9356 = (1 << ((hash >>> shift) & 0x01f));
var idx__9357 = cljs.core.bitmap_indexed_node_index(this__9354.bitmap,bit__9356);
if(((this__9354.bitmap & bit__9356) === 0))
{var n__9358 = cljs.core.bit_count(this__9354.bitmap);
if(((2 * n__9358) < this__9354.arr.length))
{var editable__9359 = inode__9355.ensure_editable(edit);
var earr__9360 = editable__9359.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward(earr__9360,(2 * idx__9357),earr__9360,(2 * (idx__9357 + 1)),(2 * (n__9358 - idx__9357)));
(earr__9360[(2 * idx__9357)] = key);
(earr__9360[((2 * idx__9357) + 1)] = val);
editable__9359.bitmap = (editable__9359.bitmap | bit__9356);
return editable__9359;
} else
{if((n__9358 >= 16))
{var nodes__9361 = cljs.core.make_array.cljs$lang$arity$1(32);
var jdx__9362 = ((hash >>> shift) & 0x01f);
(nodes__9361[jdx__9362] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9363 = 0;
var j__9364 = 0;
while(true){
if((i__9363 < 32))
{if((((this__9354.bitmap >>> i__9363) & 1) === 0))
{{
var G__9417 = (i__9363 + 1);
var G__9418 = j__9364;
i__9363 = G__9417;
j__9364 = G__9418;
continue;
}
} else
{(nodes__9361[i__9363] = ((!(((this__9354.arr[j__9364]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.cljs$lang$arity$1((this__9354.arr[j__9364])),(this__9354.arr[j__9364]),(this__9354.arr[(j__9364 + 1)]),added_leaf_QMARK_):(this__9354.arr[(j__9364 + 1)])));
{
var G__9419 = (i__9363 + 1);
var G__9420 = (j__9364 + 2);
i__9363 = G__9419;
j__9364 = G__9420;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__9358 + 1),nodes__9361));
} else
{if("\uFDD0'else")
{var new_arr__9365 = cljs.core.make_array.cljs$lang$arity$1((2 * (n__9358 + 4)));
cljs.core.array_copy(this__9354.arr,0,new_arr__9365,0,(2 * idx__9357));
(new_arr__9365[(2 * idx__9357)] = key);
(new_arr__9365[((2 * idx__9357) + 1)] = val);
cljs.core.array_copy(this__9354.arr,(2 * idx__9357),new_arr__9365,(2 * (idx__9357 + 1)),(2 * (n__9358 - idx__9357)));
added_leaf_QMARK_.val = true;
var editable__9366 = inode__9355.ensure_editable(edit);
editable__9366.arr = new_arr__9365;
editable__9366.bitmap = (editable__9366.bitmap | bit__9356);
return editable__9366;
} else
{return null;
}
}
}
} else
{var key_or_nil__9367 = (this__9354.arr[(2 * idx__9357)]);
var val_or_node__9368 = (this__9354.arr[((2 * idx__9357) + 1)]);
if((key_or_nil__9367 == null))
{var n__9369 = val_or_node__9368.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9369 === val_or_node__9368))
{return inode__9355;
} else
{return cljs.core.edit_and_set.cljs$lang$arity$4(inode__9355,edit,((2 * idx__9357) + 1),n__9369);
}
} else
{if(cljs.core.key_test(key,key_or_nil__9367))
{if((val === val_or_node__9368))
{return inode__9355;
} else
{return cljs.core.edit_and_set.cljs$lang$arity$4(inode__9355,edit,((2 * idx__9357) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.cljs$lang$arity$6(inode__9355,edit,(2 * idx__9357),null,((2 * idx__9357) + 1),cljs.core.create_node.cljs$lang$arity$7(edit,(shift + 5),key_or_nil__9367,val_or_node__9368,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__9370 = this;
var inode__9371 = this;
return cljs.core.create_inode_seq.cljs$lang$arity$1(this__9370.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9372 = this;
var inode__9373 = this;
var bit__9374 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9372.bitmap & bit__9374) === 0))
{return inode__9373;
} else
{var idx__9375 = cljs.core.bitmap_indexed_node_index(this__9372.bitmap,bit__9374);
var key_or_nil__9376 = (this__9372.arr[(2 * idx__9375)]);
var val_or_node__9377 = (this__9372.arr[((2 * idx__9375) + 1)]);
if((key_or_nil__9376 == null))
{var n__9378 = val_or_node__9377.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9378 === val_or_node__9377))
{return inode__9373;
} else
{if(!((n__9378 == null)))
{return cljs.core.edit_and_set.cljs$lang$arity$4(inode__9373,edit,((2 * idx__9375) + 1),n__9378);
} else
{if((this__9372.bitmap === bit__9374))
{return null;
} else
{if("\uFDD0'else")
{return inode__9373.edit_and_remove_pair(edit,bit__9374,idx__9375);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test(key,key_or_nil__9376))
{(removed_leaf_QMARK_[0] = true);
return inode__9373.edit_and_remove_pair(edit,bit__9374,idx__9375);
} else
{if("\uFDD0'else")
{return inode__9373;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__9379 = this;
var inode__9380 = this;
if((e === this__9379.edit))
{return inode__9380;
} else
{var n__9381 = cljs.core.bit_count(this__9379.bitmap);
var new_arr__9382 = cljs.core.make_array.cljs$lang$arity$1((((n__9381 < 0))?4:(2 * (n__9381 + 1))));
cljs.core.array_copy(this__9379.arr,0,new_arr__9382,0,(2 * n__9381));
return (new cljs.core.BitmapIndexedNode(e,this__9379.bitmap,new_arr__9382));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__9383 = this;
var inode__9384 = this;
return cljs.core.inode_kv_reduce(this__9383.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9385 = this;
var inode__9386 = this;
var bit__9387 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9385.bitmap & bit__9387) === 0))
{return not_found;
} else
{var idx__9388 = cljs.core.bitmap_indexed_node_index(this__9385.bitmap,bit__9387);
var key_or_nil__9389 = (this__9385.arr[(2 * idx__9388)]);
var val_or_node__9390 = (this__9385.arr[((2 * idx__9388) + 1)]);
if((key_or_nil__9389 == null))
{return val_or_node__9390.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test(key,key_or_nil__9389))
{return cljs.core.PersistentVector.fromArray([key_or_nil__9389,val_or_node__9390], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var this__9391 = this;
var inode__9392 = this;
var bit__9393 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9391.bitmap & bit__9393) === 0))
{return inode__9392;
} else
{var idx__9394 = cljs.core.bitmap_indexed_node_index(this__9391.bitmap,bit__9393);
var key_or_nil__9395 = (this__9391.arr[(2 * idx__9394)]);
var val_or_node__9396 = (this__9391.arr[((2 * idx__9394) + 1)]);
if((key_or_nil__9395 == null))
{var n__9397 = val_or_node__9396.inode_without((shift + 5),hash,key);
if((n__9397 === val_or_node__9396))
{return inode__9392;
} else
{if(!((n__9397 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__9391.bitmap,cljs.core.clone_and_set.cljs$lang$arity$3(this__9391.arr,((2 * idx__9394) + 1),n__9397)));
} else
{if((this__9391.bitmap === bit__9393))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__9391.bitmap ^ bit__9393),cljs.core.remove_pair(this__9391.arr,idx__9394)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test(key,key_or_nil__9395))
{return (new cljs.core.BitmapIndexedNode(null,(this__9391.bitmap ^ bit__9393),cljs.core.remove_pair(this__9391.arr,idx__9394)));
} else
{if("\uFDD0'else")
{return inode__9392;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9398 = this;
var inode__9399 = this;
var bit__9400 = (1 << ((hash >>> shift) & 0x01f));
var idx__9401 = cljs.core.bitmap_indexed_node_index(this__9398.bitmap,bit__9400);
if(((this__9398.bitmap & bit__9400) === 0))
{var n__9402 = cljs.core.bit_count(this__9398.bitmap);
if((n__9402 >= 16))
{var nodes__9403 = cljs.core.make_array.cljs$lang$arity$1(32);
var jdx__9404 = ((hash >>> shift) & 0x01f);
(nodes__9403[jdx__9404] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9405 = 0;
var j__9406 = 0;
while(true){
if((i__9405 < 32))
{if((((this__9398.bitmap >>> i__9405) & 1) === 0))
{{
var G__9421 = (i__9405 + 1);
var G__9422 = j__9406;
i__9405 = G__9421;
j__9406 = G__9422;
continue;
}
} else
{(nodes__9403[i__9405] = ((!(((this__9398.arr[j__9406]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.cljs$lang$arity$1((this__9398.arr[j__9406])),(this__9398.arr[j__9406]),(this__9398.arr[(j__9406 + 1)]),added_leaf_QMARK_):(this__9398.arr[(j__9406 + 1)])));
{
var G__9423 = (i__9405 + 1);
var G__9424 = (j__9406 + 2);
i__9405 = G__9423;
j__9406 = G__9424;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__9402 + 1),nodes__9403));
} else
{var new_arr__9407 = cljs.core.make_array.cljs$lang$arity$1((2 * (n__9402 + 1)));
cljs.core.array_copy(this__9398.arr,0,new_arr__9407,0,(2 * idx__9401));
(new_arr__9407[(2 * idx__9401)] = key);
(new_arr__9407[((2 * idx__9401) + 1)] = val);
cljs.core.array_copy(this__9398.arr,(2 * idx__9401),new_arr__9407,(2 * (idx__9401 + 1)),(2 * (n__9402 - idx__9401)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__9398.bitmap | bit__9400),new_arr__9407));
}
} else
{var key_or_nil__9408 = (this__9398.arr[(2 * idx__9401)]);
var val_or_node__9409 = (this__9398.arr[((2 * idx__9401) + 1)]);
if((key_or_nil__9408 == null))
{var n__9410 = val_or_node__9409.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9410 === val_or_node__9409))
{return inode__9399;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9398.bitmap,cljs.core.clone_and_set.cljs$lang$arity$3(this__9398.arr,((2 * idx__9401) + 1),n__9410)));
}
} else
{if(cljs.core.key_test(key,key_or_nil__9408))
{if((val === val_or_node__9409))
{return inode__9399;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9398.bitmap,cljs.core.clone_and_set.cljs$lang$arity$3(this__9398.arr,((2 * idx__9401) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__9398.bitmap,cljs.core.clone_and_set.cljs$lang$arity$5(this__9398.arr,(2 * idx__9401),null,((2 * idx__9401) + 1),cljs.core.create_node.cljs$lang$arity$6((shift + 5),key_or_nil__9408,val_or_node__9409,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9411 = this;
var inode__9412 = this;
var bit__9413 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9411.bitmap & bit__9413) === 0))
{return not_found;
} else
{var idx__9414 = cljs.core.bitmap_indexed_node_index(this__9411.bitmap,bit__9413);
var key_or_nil__9415 = (this__9411.arr[(2 * idx__9414)]);
var val_or_node__9416 = (this__9411.arr[((2 * idx__9414) + 1)]);
if((key_or_nil__9415 == null))
{return val_or_node__9416.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test(key,key_or_nil__9415))
{return val_or_node__9416;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode;
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,0,cljs.core.make_array.cljs$lang$arity$1(0)));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr__9432 = array_node.arr;
var len__9433 = (2 * (array_node.cnt - 1));
var new_arr__9434 = cljs.core.make_array.cljs$lang$arity$1(len__9433);
var i__9435 = 0;
var j__9436 = 1;
var bitmap__9437 = 0;
while(true){
if((i__9435 < len__9433))
{if((function (){var and__3822__auto____9438 = !((i__9435 === idx));
if(and__3822__auto____9438)
{return !(((arr__9432[i__9435]) == null));
} else
{return and__3822__auto____9438;
}
})())
{(new_arr__9434[j__9436] = (arr__9432[i__9435]));
{
var G__9439 = (i__9435 + 1);
var G__9440 = (j__9436 + 2);
var G__9441 = (bitmap__9437 | (1 << i__9435));
i__9435 = G__9439;
j__9436 = G__9440;
bitmap__9437 = G__9441;
continue;
}
} else
{{
var G__9442 = (i__9435 + 1);
var G__9443 = j__9436;
var G__9444 = bitmap__9437;
i__9435 = G__9442;
j__9436 = G__9443;
bitmap__9437 = G__9444;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__9437,new_arr__9434));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9445 = this;
var inode__9446 = this;
var idx__9447 = ((hash >>> shift) & 0x01f);
var node__9448 = (this__9445.arr[idx__9447]);
if((node__9448 == null))
{var editable__9449 = cljs.core.edit_and_set.cljs$lang$arity$4(inode__9446,edit,idx__9447,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__9449.cnt = (editable__9449.cnt + 1);
return editable__9449;
} else
{var n__9450 = node__9448.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9450 === node__9448))
{return inode__9446;
} else
{return cljs.core.edit_and_set.cljs$lang$arity$4(inode__9446,edit,idx__9447,n__9450);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__9451 = this;
var inode__9452 = this;
return cljs.core.create_array_node_seq.cljs$lang$arity$1(this__9451.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9453 = this;
var inode__9454 = this;
var idx__9455 = ((hash >>> shift) & 0x01f);
var node__9456 = (this__9453.arr[idx__9455]);
if((node__9456 == null))
{return inode__9454;
} else
{var n__9457 = node__9456.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9457 === node__9456))
{return inode__9454;
} else
{if((n__9457 == null))
{if((this__9453.cnt <= 8))
{return cljs.core.pack_array_node(inode__9454,edit,idx__9455);
} else
{var editable__9458 = cljs.core.edit_and_set.cljs$lang$arity$4(inode__9454,edit,idx__9455,n__9457);
editable__9458.cnt = (editable__9458.cnt - 1);
return editable__9458;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.cljs$lang$arity$4(inode__9454,edit,idx__9455,n__9457);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__9459 = this;
var inode__9460 = this;
if((e === this__9459.edit))
{return inode__9460;
} else
{return (new cljs.core.ArrayNode(e,this__9459.cnt,this__9459.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__9461 = this;
var inode__9462 = this;
var len__9463 = this__9461.arr.length;
var i__9464 = 0;
var init__9465 = init;
while(true){
if((i__9464 < len__9463))
{var node__9466 = (this__9461.arr[i__9464]);
if(!((node__9466 == null)))
{var init__9467 = node__9466.kv_reduce(f,init__9465);
if(cljs.core.reduced_QMARK_(init__9467))
{return cljs.core.deref(init__9467);
} else
{{
var G__9486 = (i__9464 + 1);
var G__9487 = init__9467;
i__9464 = G__9486;
init__9465 = G__9487;
continue;
}
}
} else
{return null;
}
} else
{return init__9465;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9468 = this;
var inode__9469 = this;
var idx__9470 = ((hash >>> shift) & 0x01f);
var node__9471 = (this__9468.arr[idx__9470]);
if(!((node__9471 == null)))
{return node__9471.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__9472 = this;
var inode__9473 = this;
var idx__9474 = ((hash >>> shift) & 0x01f);
var node__9475 = (this__9472.arr[idx__9474]);
if(!((node__9475 == null)))
{var n__9476 = node__9475.inode_without((shift + 5),hash,key);
if((n__9476 === node__9475))
{return inode__9473;
} else
{if((n__9476 == null))
{if((this__9472.cnt <= 8))
{return cljs.core.pack_array_node(inode__9473,null,idx__9474);
} else
{return (new cljs.core.ArrayNode(null,(this__9472.cnt - 1),cljs.core.clone_and_set.cljs$lang$arity$3(this__9472.arr,idx__9474,n__9476)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__9472.cnt,cljs.core.clone_and_set.cljs$lang$arity$3(this__9472.arr,idx__9474,n__9476)));
} else
{return null;
}
}
}
} else
{return inode__9473;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9477 = this;
var inode__9478 = this;
var idx__9479 = ((hash >>> shift) & 0x01f);
var node__9480 = (this__9477.arr[idx__9479]);
if((node__9480 == null))
{return (new cljs.core.ArrayNode(null,(this__9477.cnt + 1),cljs.core.clone_and_set.cljs$lang$arity$3(this__9477.arr,idx__9479,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__9481 = node__9480.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9481 === node__9480))
{return inode__9478;
} else
{return (new cljs.core.ArrayNode(null,this__9477.cnt,cljs.core.clone_and_set.cljs$lang$arity$3(this__9477.arr,idx__9479,n__9481)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9482 = this;
var inode__9483 = this;
var idx__9484 = ((hash >>> shift) & 0x01f);
var node__9485 = (this__9482.arr[idx__9484]);
if(!((node__9485 == null)))
{return node__9485.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__9490 = (2 * cnt);
var i__9491 = 0;
while(true){
if((i__9491 < lim__9490))
{if(cljs.core.key_test(key,(arr[i__9491])))
{return i__9491;
} else
{{
var G__9492 = (i__9491 + 2);
i__9491 = G__9492;
continue;
}
}
} else
{return -1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9493 = this;
var inode__9494 = this;
if((hash === this__9493.collision_hash))
{var idx__9495 = cljs.core.hash_collision_node_find_index(this__9493.arr,this__9493.cnt,key);
if((idx__9495 === -1))
{if((this__9493.arr.length > (2 * this__9493.cnt)))
{var editable__9496 = cljs.core.edit_and_set.cljs$lang$arity$6(inode__9494,edit,(2 * this__9493.cnt),key,((2 * this__9493.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__9496.cnt = (editable__9496.cnt + 1);
return editable__9496;
} else
{var len__9497 = this__9493.arr.length;
var new_arr__9498 = cljs.core.make_array.cljs$lang$arity$1((len__9497 + 2));
cljs.core.array_copy(this__9493.arr,0,new_arr__9498,0,len__9497);
(new_arr__9498[len__9497] = key);
(new_arr__9498[(len__9497 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__9494.ensure_editable_array(edit,(this__9493.cnt + 1),new_arr__9498);
}
} else
{if(((this__9493.arr[(idx__9495 + 1)]) === val))
{return inode__9494;
} else
{return cljs.core.edit_and_set.cljs$lang$arity$4(inode__9494,edit,(idx__9495 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__9493.collision_hash >>> shift) & 0x01f)),[null,inode__9494,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__9499 = this;
var inode__9500 = this;
return cljs.core.create_inode_seq.cljs$lang$arity$1(this__9499.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9501 = this;
var inode__9502 = this;
var idx__9503 = cljs.core.hash_collision_node_find_index(this__9501.arr,this__9501.cnt,key);
if((idx__9503 === -1))
{return inode__9502;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__9501.cnt === 1))
{return null;
} else
{var editable__9504 = inode__9502.ensure_editable(edit);
var earr__9505 = editable__9504.arr;
(earr__9505[idx__9503] = (earr__9505[((2 * this__9501.cnt) - 2)]));
(earr__9505[(idx__9503 + 1)] = (earr__9505[((2 * this__9501.cnt) - 1)]));
(earr__9505[((2 * this__9501.cnt) - 1)] = null);
(earr__9505[((2 * this__9501.cnt) - 2)] = null);
editable__9504.cnt = (editable__9504.cnt - 1);
return editable__9504;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__9506 = this;
var inode__9507 = this;
if((e === this__9506.edit))
{return inode__9507;
} else
{var new_arr__9508 = cljs.core.make_array.cljs$lang$arity$1((2 * (this__9506.cnt + 1)));
cljs.core.array_copy(this__9506.arr,0,new_arr__9508,0,(2 * this__9506.cnt));
return (new cljs.core.HashCollisionNode(e,this__9506.collision_hash,this__9506.cnt,new_arr__9508));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__9509 = this;
var inode__9510 = this;
return cljs.core.inode_kv_reduce(this__9509.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9511 = this;
var inode__9512 = this;
var idx__9513 = cljs.core.hash_collision_node_find_index(this__9511.arr,this__9511.cnt,key);
if((idx__9513 < 0))
{return not_found;
} else
{if(cljs.core.key_test(key,(this__9511.arr[idx__9513])))
{return cljs.core.PersistentVector.fromArray([(this__9511.arr[idx__9513]),(this__9511.arr[(idx__9513 + 1)])], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var this__9514 = this;
var inode__9515 = this;
var idx__9516 = cljs.core.hash_collision_node_find_index(this__9514.arr,this__9514.cnt,key);
if((idx__9516 === -1))
{return inode__9515;
} else
{if((this__9514.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__9514.collision_hash,(this__9514.cnt - 1),cljs.core.remove_pair(this__9514.arr,cljs.core.quot(idx__9516,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9517 = this;
var inode__9518 = this;
if((hash === this__9517.collision_hash))
{var idx__9519 = cljs.core.hash_collision_node_find_index(this__9517.arr,this__9517.cnt,key);
if((idx__9519 === -1))
{var len__9520 = this__9517.arr.length;
var new_arr__9521 = cljs.core.make_array.cljs$lang$arity$1((len__9520 + 2));
cljs.core.array_copy(this__9517.arr,0,new_arr__9521,0,len__9520);
(new_arr__9521[len__9520] = key);
(new_arr__9521[(len__9520 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__9517.collision_hash,(this__9517.cnt + 1),new_arr__9521));
} else
{if(cljs.core._EQ_.cljs$lang$arity$2((this__9517.arr[idx__9519]),val))
{return inode__9518;
} else
{return (new cljs.core.HashCollisionNode(null,this__9517.collision_hash,this__9517.cnt,cljs.core.clone_and_set.cljs$lang$arity$3(this__9517.arr,(idx__9519 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__9517.collision_hash >>> shift) & 0x01f)),[null,inode__9518])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9522 = this;
var inode__9523 = this;
var idx__9524 = cljs.core.hash_collision_node_find_index(this__9522.arr,this__9522.cnt,key);
if((idx__9524 < 0))
{return not_found;
} else
{if(cljs.core.key_test(key,(this__9522.arr[idx__9524])))
{return (this__9522.arr[(idx__9524 + 1)]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var this__9525 = this;
var inode__9526 = this;
if((e === this__9525.edit))
{this__9525.arr = array;
this__9525.cnt = count;
return inode__9526;
} else
{return (new cljs.core.HashCollisionNode(this__9525.edit,this__9525.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__9531 = cljs.core.hash.cljs$lang$arity$1(key1);
if((key1hash__9531 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9531,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9532 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__9531,key1,val1,added_leaf_QMARK___9532).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___9532);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__9533 = cljs.core.hash.cljs$lang$arity$1(key1);
if((key1hash__9533 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__9533,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___9534 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__9533,key1,val1,added_leaf_QMARK___9534).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___9534);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw('Invalid arity: ' + arguments.length);
};
create_node.cljs$lang$arity$6 = create_node__6;
create_node.cljs$lang$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9535 = this;
var h__2199__auto____9536 = this__9535.__hash;
if(!((h__2199__auto____9536 == null)))
{return h__2199__auto____9536;
} else
{var h__2199__auto____9537 = cljs.core.hash_coll(coll);
this__9535.__hash = h__2199__auto____9537;
return h__2199__auto____9537;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9538 = this;
return cljs.core.cons(o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__9539 = this;
var this__9540 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9540], 0));
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9541 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9542 = this;
if((this__9542.s == null))
{return cljs.core.PersistentVector.fromArray([(this__9542.nodes[this__9542.i]),(this__9542.nodes[(this__9542.i + 1)])], true);
} else
{return cljs.core.first(this__9542.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9543 = this;
if((this__9543.s == null))
{return cljs.core.create_inode_seq.cljs$lang$arity$3(this__9543.nodes,(this__9543.i + 2),null);
} else
{return cljs.core.create_inode_seq.cljs$lang$arity$3(this__9543.nodes,this__9543.i,cljs.core.next(this__9543.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9544 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9545 = this;
return (new cljs.core.NodeSeq(meta,this__9545.nodes,this__9545.i,this__9545.s,this__9545.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9546 = this;
return this__9546.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9547 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,this__9547.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.cljs$lang$arity$3(nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__9554 = nodes.length;
var j__9555 = i;
while(true){
if((j__9555 < len__9554))
{if(!(((nodes[j__9555]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__9555,null,null));
} else
{var temp__3971__auto____9556 = (nodes[(j__9555 + 1)]);
if(cljs.core.truth_(temp__3971__auto____9556))
{var node__9557 = temp__3971__auto____9556;
var temp__3971__auto____9558 = node__9557.inode_seq();
if(cljs.core.truth_(temp__3971__auto____9558))
{var node_seq__9559 = temp__3971__auto____9558;
return (new cljs.core.NodeSeq(null,nodes,(j__9555 + 2),node_seq__9559,null));
} else
{{
var G__9560 = (j__9555 + 2);
j__9555 = G__9560;
continue;
}
}
} else
{{
var G__9561 = (j__9555 + 2);
j__9555 = G__9561;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_inode_seq.cljs$lang$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$lang$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9562 = this;
var h__2199__auto____9563 = this__9562.__hash;
if(!((h__2199__auto____9563 == null)))
{return h__2199__auto____9563;
} else
{var h__2199__auto____9564 = cljs.core.hash_coll(coll);
this__9562.__hash = h__2199__auto____9564;
return h__2199__auto____9564;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9565 = this;
return cljs.core.cons(o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__9566 = this;
var this__9567 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9567], 0));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9568 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9569 = this;
return cljs.core.first(this__9569.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9570 = this;
return cljs.core.create_array_node_seq.cljs$lang$arity$4(null,this__9570.nodes,this__9570.i,cljs.core.next(this__9570.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9571 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9572 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__9572.nodes,this__9572.i,this__9572.s,this__9572.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9573 = this;
return this__9573.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9574 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,this__9574.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.cljs$lang$arity$4(null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__9581 = nodes.length;
var j__9582 = i;
while(true){
if((j__9582 < len__9581))
{var temp__3971__auto____9583 = (nodes[j__9582]);
if(cljs.core.truth_(temp__3971__auto____9583))
{var nj__9584 = temp__3971__auto____9583;
var temp__3971__auto____9585 = nj__9584.inode_seq();
if(cljs.core.truth_(temp__3971__auto____9585))
{var ns__9586 = temp__3971__auto____9585;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__9582 + 1),ns__9586,null));
} else
{{
var G__9587 = (j__9582 + 1);
j__9582 = G__9587;
continue;
}
}
} else
{{
var G__9588 = (j__9582 + 1);
j__9582 = G__9588;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_array_node_seq.cljs$lang$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$lang$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9591 = this;
return (new cljs.core.TransientHashMap({},this__9591.root,this__9591.cnt,this__9591.has_nil_QMARK_,this__9591.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9592 = this;
var h__2199__auto____9593 = this__9592.__hash;
if(!((h__2199__auto____9593 == null)))
{return h__2199__auto____9593;
} else
{var h__2199__auto____9594 = cljs.core.hash_imap(coll);
this__9592.__hash = h__2199__auto____9594;
return h__2199__auto____9594;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9595 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9596 = this;
if((k == null))
{if(this__9596.has_nil_QMARK_)
{return this__9596.nil_val;
} else
{return not_found;
}
} else
{if((this__9596.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__9596.root.inode_lookup(0,cljs.core.hash.cljs$lang$arity$1(k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9597 = this;
if((k == null))
{if((function (){var and__3822__auto____9598 = this__9597.has_nil_QMARK_;
if(and__3822__auto____9598)
{return (v === this__9597.nil_val);
} else
{return and__3822__auto____9598;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9597.meta,((this__9597.has_nil_QMARK_)?this__9597.cnt:(this__9597.cnt + 1)),this__9597.root,true,v,null));
}
} else
{var added_leaf_QMARK___9599 = (new cljs.core.Box(false));
var new_root__9600 = (((this__9597.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9597.root).inode_assoc(0,cljs.core.hash.cljs$lang$arity$1(k),k,v,added_leaf_QMARK___9599);
if((new_root__9600 === this__9597.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9597.meta,((added_leaf_QMARK___9599.val)?(this__9597.cnt + 1):this__9597.cnt),new_root__9600,this__9597.has_nil_QMARK_,this__9597.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9601 = this;
if((k == null))
{return this__9601.has_nil_QMARK_;
} else
{if((this__9601.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__9601.root.inode_lookup(0,cljs.core.hash.cljs$lang$arity$1(k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__9624 = null;
var G__9624__2 = (function (this_sym9602,k){
var this__9604 = this;
var this_sym9602__9605 = this;
var coll__9606 = this_sym9602__9605;
return coll__9606.cljs$core$ILookup$_lookup$arity$2(coll__9606,k);
});
var G__9624__3 = (function (this_sym9603,k,not_found){
var this__9604 = this;
var this_sym9603__9607 = this;
var coll__9608 = this_sym9603__9607;
return coll__9608.cljs$core$ILookup$_lookup$arity$3(coll__9608,k,not_found);
});
G__9624 = function(this_sym9603,k,not_found){
switch(arguments.length){
case 2:
return G__9624__2.call(this,this_sym9603,k);
case 3:
return G__9624__3.call(this,this_sym9603,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9624;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym9589,args9590){
var this__9609 = this;
return this_sym9589.call.apply(this_sym9589,[this_sym9589].concat(args9590.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9610 = this;
var init__9611 = ((this__9610.has_nil_QMARK_)?(f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(init,null,this__9610.nil_val) : f.call(null,init,null,this__9610.nil_val)):init);
if(cljs.core.reduced_QMARK_(init__9611))
{return cljs.core.deref(init__9611);
} else
{if(!((this__9610.root == null)))
{return this__9610.root.kv_reduce(f,init__9611);
} else
{if("\uFDD0'else")
{return init__9611;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9612 = this;
if(cljs.core.vector_QMARK_(entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.cljs$lang$arity$2(entry,0),cljs.core._nth.cljs$lang$arity$2(entry,1));
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__9613 = this;
var this__9614 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9614], 0));
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9615 = this;
if((this__9615.cnt > 0))
{var s__9616 = ((!((this__9615.root == null)))?this__9615.root.inode_seq():null);
if(this__9615.has_nil_QMARK_)
{return cljs.core.cons(cljs.core.PersistentVector.fromArray([null,this__9615.nil_val], true),s__9616);
} else
{return s__9616;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9617 = this;
return this__9617.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9618 = this;
return cljs.core.equiv_map(coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9619 = this;
return (new cljs.core.PersistentHashMap(meta,this__9619.cnt,this__9619.root,this__9619.has_nil_QMARK_,this__9619.nil_val,this__9619.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9620 = this;
return this__9620.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9621 = this;
return cljs.core._with_meta(cljs.core.PersistentHashMap.EMPTY,this__9621.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9622 = this;
if((k == null))
{if(this__9622.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__9622.meta,(this__9622.cnt - 1),this__9622.root,false,null,null));
} else
{return coll;
}
} else
{if((this__9622.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__9623 = this__9622.root.inode_without(0,cljs.core.hash.cljs$lang$arity$1(k),k);
if((new_root__9623 === this__9622.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__9622.meta,(this__9622.cnt - 1),new_root__9623,this__9622.has_nil_QMARK_,this__9622.nil_val,null));
}
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap;
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,0,null,false,null,0));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len__9625 = ks.length;
var i__9626 = 0;
var out__9627 = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__9626 < len__9625))
{{
var G__9628 = (i__9626 + 1);
var G__9629 = cljs.core.assoc_BANG_(out__9627,(ks[i__9626]),(vs[i__9626]));
i__9626 = G__9628;
out__9627 = G__9629;
continue;
}
} else
{return cljs.core.persistent_BANG_(out__9627);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__9630 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9631 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__9632 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9633 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9634 = this;
if((k == null))
{if(this__9634.has_nil_QMARK_)
{return this__9634.nil_val;
} else
{return null;
}
} else
{if((this__9634.root == null))
{return null;
} else
{return this__9634.root.inode_lookup(0,cljs.core.hash.cljs$lang$arity$1(k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9635 = this;
if((k == null))
{if(this__9635.has_nil_QMARK_)
{return this__9635.nil_val;
} else
{return not_found;
}
} else
{if((this__9635.root == null))
{return not_found;
} else
{return this__9635.root.inode_lookup(0,cljs.core.hash.cljs$lang$arity$1(k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9636 = this;
if(this__9636.edit)
{return this__9636.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__9637 = this;
var tcoll__9638 = this;
if(this__9637.edit)
{if((function (){var G__9639__9640 = o;
if(G__9639__9640)
{if((function (){var or__3824__auto____9641 = (G__9639__9640.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3824__auto____9641)
{return or__3824__auto____9641;
} else
{return G__9639__9640.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9639__9640.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IMapEntry,G__9639__9640);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IMapEntry,G__9639__9640);
}
})())
{return tcoll__9638.assoc_BANG_(cljs.core.key(o),cljs.core.val(o));
} else
{var es__9642 = cljs.core.seq(o);
var tcoll__9643 = tcoll__9638;
while(true){
var temp__3971__auto____9644 = cljs.core.first(es__9642);
if(cljs.core.truth_(temp__3971__auto____9644))
{var e__9645 = temp__3971__auto____9644;
{
var G__9656 = cljs.core.next(es__9642);
var G__9657 = tcoll__9643.assoc_BANG_(cljs.core.key(e__9645),cljs.core.val(e__9645));
es__9642 = G__9656;
tcoll__9643 = G__9657;
continue;
}
} else
{return tcoll__9643;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__9646 = this;
var tcoll__9647 = this;
if(this__9646.edit)
{if((k == null))
{if((this__9646.nil_val === v))
{} else
{this__9646.nil_val = v;
}
if(this__9646.has_nil_QMARK_)
{} else
{this__9646.count = (this__9646.count + 1);
this__9646.has_nil_QMARK_ = true;
}
return tcoll__9647;
} else
{var added_leaf_QMARK___9648 = (new cljs.core.Box(false));
var node__9649 = (((this__9646.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__9646.root).inode_assoc_BANG_(this__9646.edit,0,cljs.core.hash.cljs$lang$arity$1(k),k,v,added_leaf_QMARK___9648);
if((node__9649 === this__9646.root))
{} else
{this__9646.root = node__9649;
}
if(added_leaf_QMARK___9648.val)
{this__9646.count = (this__9646.count + 1);
} else
{}
return tcoll__9647;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__9650 = this;
var tcoll__9651 = this;
if(this__9650.edit)
{if((k == null))
{if(this__9650.has_nil_QMARK_)
{this__9650.has_nil_QMARK_ = false;
this__9650.nil_val = null;
this__9650.count = (this__9650.count - 1);
return tcoll__9651;
} else
{return tcoll__9651;
}
} else
{if((this__9650.root == null))
{return tcoll__9651;
} else
{var removed_leaf_QMARK___9652 = (new cljs.core.Box(false));
var node__9653 = this__9650.root.inode_without_BANG_(this__9650.edit,0,cljs.core.hash.cljs$lang$arity$1(k),k,removed_leaf_QMARK___9652);
if((node__9653 === this__9650.root))
{} else
{this__9650.root = node__9653;
}
if(cljs.core.truth_((removed_leaf_QMARK___9652[0])))
{this__9650.count = (this__9650.count - 1);
} else
{}
return tcoll__9651;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__9654 = this;
var tcoll__9655 = this;
if(this__9654.edit)
{this__9654.edit = null;
return (new cljs.core.PersistentHashMap(null,this__9654.count,this__9654.root,this__9654.has_nil_QMARK_,this__9654.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__9660 = node;
var stack__9661 = stack;
while(true){
if(!((t__9660 == null)))
{{
var G__9662 = ((ascending_QMARK_)?t__9660.left:t__9660.right);
var G__9663 = cljs.core.conj.cljs$lang$arity$2(stack__9661,t__9660);
t__9660 = G__9662;
stack__9661 = G__9663;
continue;
}
} else
{return stack__9661;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9664 = this;
var h__2199__auto____9665 = this__9664.__hash;
if(!((h__2199__auto____9665 == null)))
{return h__2199__auto____9665;
} else
{var h__2199__auto____9666 = cljs.core.hash_coll(coll);
this__9664.__hash = h__2199__auto____9666;
return h__2199__auto____9666;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9667 = this;
return cljs.core.cons(o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__9668 = this;
var this__9669 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9669], 0));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__9670 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9671 = this;
if((this__9671.cnt < 0))
{return (cljs.core.count(cljs.core.next(coll)) + 1);
} else
{return this__9671.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__9672 = this;
return cljs.core.peek(this__9672.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__9673 = this;
var t__9674 = cljs.core.first(this__9673.stack);
var next_stack__9675 = cljs.core.tree_map_seq_push(((this__9673.ascending_QMARK_)?t__9674.right:t__9674.left),cljs.core.next(this__9673.stack),this__9673.ascending_QMARK_);
if(!((next_stack__9675 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__9675,this__9673.ascending_QMARK_,(this__9673.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9676 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9677 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__9677.stack,this__9677.ascending_QMARK_,this__9677.cnt,this__9677.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9678 = this;
return this__9678.meta;
});
cljs.core.PersistentTreeMapSeq;
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push(tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
cljs.core.balance_left = (function balance_left(key,val,ins,right){
if(cljs.core.instance_QMARK_(cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,ins,right,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if(cljs.core.instance_QMARK_(cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,left,ins,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if(cljs.core.instance_QMARK_(cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if(cljs.core.instance_QMARK_(cljs.core.BlackNode,right))
{return cljs.core.balance_right(key,val,del,right.redden());
} else
{if((function (){var and__3822__auto____9680 = cljs.core.instance_QMARK_(cljs.core.RedNode,right);
if(and__3822__auto____9680)
{return cljs.core.instance_QMARK_(cljs.core.BlackNode,right.left);
} else
{return and__3822__auto____9680;
}
})())
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right(right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if(cljs.core.instance_QMARK_(cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if(cljs.core.instance_QMARK_(cljs.core.BlackNode,left))
{return cljs.core.balance_left(key,val,left.redden(),del);
} else
{if((function (){var and__3822__auto____9682 = cljs.core.instance_QMARK_(cljs.core.RedNode,left);
if(and__3822__auto____9682)
{return cljs.core.instance_QMARK_(cljs.core.BlackNode,left.right);
} else
{return and__3822__auto____9682;
}
})())
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left(left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__9686 = (f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(init,node.key,node.val) : f.call(null,init,node.key,node.val));
if(cljs.core.reduced_QMARK_(init__9686))
{return cljs.core.deref(init__9686);
} else
{var init__9687 = ((!((node.left == null)))?tree_map_kv_reduce(node.left,f,init__9686):init__9686);
if(cljs.core.reduced_QMARK_(init__9687))
{return cljs.core.deref(init__9687);
} else
{var init__9688 = ((!((node.right == null)))?tree_map_kv_reduce(node.right,f,init__9687):init__9687);
if(cljs.core.reduced_QMARK_(init__9688))
{return cljs.core.deref(init__9688);
} else
{return init__9688;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9691 = this;
var h__2199__auto____9692 = this__9691.__hash;
if(!((h__2199__auto____9692 == null)))
{return h__2199__auto____9692;
} else
{var h__2199__auto____9693 = cljs.core.hash_coll(coll);
this__9691.__hash = h__2199__auto____9693;
return h__2199__auto____9693;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9694 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9695 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9696 = this;
return cljs.core.assoc.cljs$lang$arity$3(cljs.core.PersistentVector.fromArray([this__9696.key,this__9696.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__9744 = null;
var G__9744__2 = (function (this_sym9697,k){
var this__9699 = this;
var this_sym9697__9700 = this;
var node__9701 = this_sym9697__9700;
return node__9701.cljs$core$ILookup$_lookup$arity$2(node__9701,k);
});
var G__9744__3 = (function (this_sym9698,k,not_found){
var this__9699 = this;
var this_sym9698__9702 = this;
var node__9703 = this_sym9698__9702;
return node__9703.cljs$core$ILookup$_lookup$arity$3(node__9703,k,not_found);
});
G__9744 = function(this_sym9698,k,not_found){
switch(arguments.length){
case 2:
return G__9744__2.call(this,this_sym9698,k);
case 3:
return G__9744__3.call(this,this_sym9698,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9744;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym9689,args9690){
var this__9704 = this;
return this_sym9689.call.apply(this_sym9689,[this_sym9689].concat(args9690.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9705 = this;
return cljs.core.PersistentVector.fromArray([this__9705.key,this__9705.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9706 = this;
return this__9706.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9707 = this;
return this__9707.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__9708 = this;
var node__9709 = this;
return ins.balance_right(node__9709);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__9710 = this;
var node__9711 = this;
return (new cljs.core.RedNode(this__9710.key,this__9710.val,this__9710.left,this__9710.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__9712 = this;
var node__9713 = this;
return cljs.core.balance_right_del(this__9712.key,this__9712.val,this__9712.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__9714 = this;
var node__9715 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__9716 = this;
var node__9717 = this;
return cljs.core.tree_map_kv_reduce(node__9717,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__9718 = this;
var node__9719 = this;
return cljs.core.balance_left_del(this__9718.key,this__9718.val,del,this__9718.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__9720 = this;
var node__9721 = this;
return ins.balance_left(node__9721);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__9722 = this;
var node__9723 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__9723,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__9745 = null;
var G__9745__0 = (function (){
var this__9724 = this;
var this__9726 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9726], 0));
});
G__9745 = function(){
switch(arguments.length){
case 0:
return G__9745__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9745;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__9727 = this;
var node__9728 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9728,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__9729 = this;
var node__9730 = this;
return node__9730;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9731 = this;
return cljs.core.ci_reduce.cljs$lang$arity$2(node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9732 = this;
return cljs.core.ci_reduce.cljs$lang$arity$3(node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9733 = this;
return cljs.core.list.cljs$lang$arity$2(this__9733.key,this__9733.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9734 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9735 = this;
return this__9735.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9736 = this;
return cljs.core.PersistentVector.fromArray([this__9736.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9737 = this;
return cljs.core._assoc_n(cljs.core.PersistentVector.fromArray([this__9737.key,this__9737.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9738 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9739 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.fromArray([this__9739.key,this__9739.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9740 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9741 = this;
if((n === 0))
{return this__9741.key;
} else
{if((n === 1))
{return this__9741.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__9742 = this;
if((n === 0))
{return this__9742.key;
} else
{if((n === 1))
{return this__9742.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__9743 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.BlackNode;

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9748 = this;
var h__2199__auto____9749 = this__9748.__hash;
if(!((h__2199__auto____9749 == null)))
{return h__2199__auto____9749;
} else
{var h__2199__auto____9750 = cljs.core.hash_coll(coll);
this__9748.__hash = h__2199__auto____9750;
return h__2199__auto____9750;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__9751 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__9752 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__9753 = this;
return cljs.core.assoc.cljs$lang$arity$3(cljs.core.PersistentVector.fromArray([this__9753.key,this__9753.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__9801 = null;
var G__9801__2 = (function (this_sym9754,k){
var this__9756 = this;
var this_sym9754__9757 = this;
var node__9758 = this_sym9754__9757;
return node__9758.cljs$core$ILookup$_lookup$arity$2(node__9758,k);
});
var G__9801__3 = (function (this_sym9755,k,not_found){
var this__9756 = this;
var this_sym9755__9759 = this;
var node__9760 = this_sym9755__9759;
return node__9760.cljs$core$ILookup$_lookup$arity$3(node__9760,k,not_found);
});
G__9801 = function(this_sym9755,k,not_found){
switch(arguments.length){
case 2:
return G__9801__2.call(this,this_sym9755,k);
case 3:
return G__9801__3.call(this,this_sym9755,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9801;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym9746,args9747){
var this__9761 = this;
return this_sym9746.call.apply(this_sym9746,[this_sym9746].concat(args9747.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__9762 = this;
return cljs.core.PersistentVector.fromArray([this__9762.key,this__9762.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__9763 = this;
return this__9763.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__9764 = this;
return this__9764.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__9765 = this;
var node__9766 = this;
return (new cljs.core.RedNode(this__9765.key,this__9765.val,this__9765.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__9767 = this;
var node__9768 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__9769 = this;
var node__9770 = this;
return (new cljs.core.RedNode(this__9769.key,this__9769.val,this__9769.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__9771 = this;
var node__9772 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__9773 = this;
var node__9774 = this;
return cljs.core.tree_map_kv_reduce(node__9774,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__9775 = this;
var node__9776 = this;
return (new cljs.core.RedNode(this__9775.key,this__9775.val,del,this__9775.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__9777 = this;
var node__9778 = this;
return (new cljs.core.RedNode(this__9777.key,this__9777.val,ins,this__9777.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__9779 = this;
var node__9780 = this;
if(cljs.core.instance_QMARK_(cljs.core.RedNode,this__9779.left))
{return (new cljs.core.RedNode(this__9779.key,this__9779.val,this__9779.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__9779.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,this__9779.right))
{return (new cljs.core.RedNode(this__9779.right.key,this__9779.right.val,(new cljs.core.BlackNode(this__9779.key,this__9779.val,this__9779.left,this__9779.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__9779.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__9780,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__9802 = null;
var G__9802__0 = (function (){
var this__9781 = this;
var this__9783 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9783], 0));
});
G__9802 = function(){
switch(arguments.length){
case 0:
return G__9802__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9802;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__9784 = this;
var node__9785 = this;
if(cljs.core.instance_QMARK_(cljs.core.RedNode,this__9784.right))
{return (new cljs.core.RedNode(this__9784.key,this__9784.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9784.left,null)),this__9784.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,this__9784.left))
{return (new cljs.core.RedNode(this__9784.left.key,this__9784.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__9784.left.left,null)),(new cljs.core.BlackNode(this__9784.key,this__9784.val,this__9784.left.right,this__9784.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__9785,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__9786 = this;
var node__9787 = this;
return (new cljs.core.BlackNode(this__9786.key,this__9786.val,this__9786.left,this__9786.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__9788 = this;
return cljs.core.ci_reduce.cljs$lang$arity$2(node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__9789 = this;
return cljs.core.ci_reduce.cljs$lang$arity$3(node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__9790 = this;
return cljs.core.list.cljs$lang$arity$2(this__9790.key,this__9790.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__9791 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__9792 = this;
return this__9792.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__9793 = this;
return cljs.core.PersistentVector.fromArray([this__9793.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__9794 = this;
return cljs.core._assoc_n(cljs.core.PersistentVector.fromArray([this__9794.key,this__9794.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9795 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__9796 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.fromArray([this__9796.key,this__9796.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__9797 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__9798 = this;
if((n === 0))
{return this__9798.key;
} else
{if((n === 1))
{return this__9798.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__9799 = this;
if((n === 0))
{return this__9799.key;
} else
{if((n === 1))
{return this__9799.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__9800 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__9806 = (comp.cljs$lang$arity$2 ? comp.cljs$lang$arity$2(k,tree.key) : comp.call(null,k,tree.key));
if((c__9806 === 0))
{(found[0] = tree);
return null;
} else
{if((c__9806 < 0))
{var ins__9807 = tree_map_add(comp,tree.left,k,v,found);
if(!((ins__9807 == null)))
{return tree.add_left(ins__9807);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__9808 = tree_map_add(comp,tree.right,k,v,found);
if(!((ins__9808 == null)))
{return tree.add_right(ins__9808);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,left))
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,right))
{var app__9811 = tree_map_append(left.right,right.left);
if(cljs.core.instance_QMARK_(cljs.core.RedNode,app__9811))
{return (new cljs.core.RedNode(app__9811.key,app__9811.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__9811.left,null)),(new cljs.core.RedNode(right.key,right.val,app__9811.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__9811,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append(left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_(cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append(left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__9812 = tree_map_append(left.right,right.left);
if(cljs.core.instance_QMARK_(cljs.core.RedNode,app__9812))
{return (new cljs.core.RedNode(app__9812.key,app__9812.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__9812.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__9812.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del(left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__9812,right.right,null)));
}
} else
{return null;
}
}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if(!((tree == null)))
{var c__9818 = (comp.cljs$lang$arity$2 ? comp.cljs$lang$arity$2(k,tree.key) : comp.call(null,k,tree.key));
if((c__9818 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append(tree.left,tree.right);
} else
{if((c__9818 < 0))
{var del__9819 = tree_map_remove(comp,tree.left,k,found);
if((function (){var or__3824__auto____9820 = !((del__9819 == null));
if(or__3824__auto____9820)
{return or__3824__auto____9820;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_(cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del(tree.key,tree.val,del__9819,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__9819,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__9821 = tree_map_remove(comp,tree.right,k,found);
if((function (){var or__3824__auto____9822 = !((del__9821 == null));
if(or__3824__auto____9822)
{return or__3824__auto____9822;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_(cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del(tree.key,tree.val,tree.left,del__9821);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__9821,null));
}
} else
{return null;
}
} else
{return null;
}
}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk__9825 = tree.key;
var c__9826 = (comp.cljs$lang$arity$2 ? comp.cljs$lang$arity$2(k,tk__9825) : comp.call(null,k,tk__9825));
if((c__9826 === 0))
{return tree.replace(tk__9825,v,tree.left,tree.right);
} else
{if((c__9826 < 0))
{return tree.replace(tk__9825,tree.val,tree_map_replace(comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__9825,tree.val,tree.left,tree_map_replace(comp,tree.right,k,v));
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9829 = this;
var h__2199__auto____9830 = this__9829.__hash;
if(!((h__2199__auto____9830 == null)))
{return h__2199__auto____9830;
} else
{var h__2199__auto____9831 = cljs.core.hash_imap(coll);
this__9829.__hash = h__2199__auto____9831;
return h__2199__auto____9831;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9832 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9833 = this;
var n__9834 = coll.entry_at(k);
if(!((n__9834 == null)))
{return n__9834.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9835 = this;
var found__9836 = [null];
var t__9837 = cljs.core.tree_map_add(this__9835.comp,this__9835.tree,k,v,found__9836);
if((t__9837 == null))
{var found_node__9838 = cljs.core.nth.cljs$lang$arity$2(found__9836,0);
if(cljs.core._EQ_.cljs$lang$arity$2(v,found_node__9838.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9835.comp,cljs.core.tree_map_replace(this__9835.comp,this__9835.tree,k,v),this__9835.cnt,this__9835.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9835.comp,t__9837.blacken(),(this__9835.cnt + 1),this__9835.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9839 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__9873 = null;
var G__9873__2 = (function (this_sym9840,k){
var this__9842 = this;
var this_sym9840__9843 = this;
var coll__9844 = this_sym9840__9843;
return coll__9844.cljs$core$ILookup$_lookup$arity$2(coll__9844,k);
});
var G__9873__3 = (function (this_sym9841,k,not_found){
var this__9842 = this;
var this_sym9841__9845 = this;
var coll__9846 = this_sym9841__9845;
return coll__9846.cljs$core$ILookup$_lookup$arity$3(coll__9846,k,not_found);
});
G__9873 = function(this_sym9841,k,not_found){
switch(arguments.length){
case 2:
return G__9873__2.call(this,this_sym9841,k);
case 3:
return G__9873__3.call(this,this_sym9841,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9873;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym9827,args9828){
var this__9847 = this;
return this_sym9827.call.apply(this_sym9827,[this_sym9827].concat(args9828.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9848 = this;
if(!((this__9848.tree == null)))
{return cljs.core.tree_map_kv_reduce(this__9848.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9849 = this;
if(cljs.core.vector_QMARK_(entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.cljs$lang$arity$2(entry,0),cljs.core._nth.cljs$lang$arity$2(entry,1));
} else
{return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9850 = this;
if((this__9850.cnt > 0))
{return cljs.core.create_tree_map_seq(this__9850.tree,false,this__9850.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__9851 = this;
var this__9852 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9852], 0));
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__9853 = this;
var coll__9854 = this;
var t__9855 = this__9853.tree;
while(true){
if(!((t__9855 == null)))
{var c__9856 = (this__9853.comp.cljs$lang$arity$2 ? this__9853.comp.cljs$lang$arity$2(k,t__9855.key) : this__9853.comp.call(null,k,t__9855.key));
if((c__9856 === 0))
{return t__9855;
} else
{if((c__9856 < 0))
{{
var G__9874 = t__9855.left;
t__9855 = G__9874;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__9875 = t__9855.right;
t__9855 = G__9875;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__9857 = this;
if((this__9857.cnt > 0))
{return cljs.core.create_tree_map_seq(this__9857.tree,ascending_QMARK_,this__9857.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__9858 = this;
if((this__9858.cnt > 0))
{var stack__9859 = null;
var t__9860 = this__9858.tree;
while(true){
if(!((t__9860 == null)))
{var c__9861 = (this__9858.comp.cljs$lang$arity$2 ? this__9858.comp.cljs$lang$arity$2(k,t__9860.key) : this__9858.comp.call(null,k,t__9860.key));
if((c__9861 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.cljs$lang$arity$2(stack__9859,t__9860),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__9861 < 0))
{{
var G__9876 = cljs.core.conj.cljs$lang$arity$2(stack__9859,t__9860);
var G__9877 = t__9860.left;
stack__9859 = G__9876;
t__9860 = G__9877;
continue;
}
} else
{{
var G__9878 = stack__9859;
var G__9879 = t__9860.right;
stack__9859 = G__9878;
t__9860 = G__9879;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__9861 > 0))
{{
var G__9880 = cljs.core.conj.cljs$lang$arity$2(stack__9859,t__9860);
var G__9881 = t__9860.right;
stack__9859 = G__9880;
t__9860 = G__9881;
continue;
}
} else
{{
var G__9882 = stack__9859;
var G__9883 = t__9860.left;
stack__9859 = G__9882;
t__9860 = G__9883;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__9859 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__9859,ascending_QMARK_,-1,null));
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__9862 = this;
return cljs.core.key(entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__9863 = this;
return this__9863.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9864 = this;
if((this__9864.cnt > 0))
{return cljs.core.create_tree_map_seq(this__9864.tree,true,this__9864.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9865 = this;
return this__9865.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9866 = this;
return cljs.core.equiv_map(coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9867 = this;
return (new cljs.core.PersistentTreeMap(this__9867.comp,this__9867.tree,this__9867.cnt,meta,this__9867.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9868 = this;
return this__9868.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9869 = this;
return cljs.core.with_meta(cljs.core.PersistentTreeMap.EMPTY,this__9869.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9870 = this;
var found__9871 = [null];
var t__9872 = cljs.core.tree_map_remove(this__9870.comp,this__9870.tree,k,found__9871);
if((t__9872 == null))
{if((cljs.core.nth.cljs$lang$arity$2(found__9871,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__9870.comp,null,0,this__9870.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__9870.comp,t__9872.blacken(),(this__9870.cnt - 1),this__9870.meta,null));
}
});
cljs.core.PersistentTreeMap;
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,0,null,0));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in__9886 = cljs.core.seq(keyvals);
var out__9887 = cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__9886)
{{
var G__9888 = cljs.core.nnext(in__9886);
var G__9889 = cljs.core.assoc_BANG_(out__9887,cljs.core.first(in__9886),cljs.core.second(in__9886));
in__9886 = G__9888;
out__9887 = G__9889;
continue;
}
} else
{return cljs.core.persistent_BANG_(out__9887);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__9890){
var keyvals = cljs.core.seq(arglist__9890);;
return hash_map__delegate(keyvals);
});
hash_map.cljs$lang$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot(cljs.core.count(keyvals),2),cljs.core.apply.cljs$lang$arity$2(cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this, keyvals);
};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__9891){
var keyvals = cljs.core.seq(arglist__9891);;
return array_map__delegate(keyvals);
});
array_map.cljs$lang$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new object map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.obj_map = (function() { 
var obj_map__delegate = function (keyvals){
var ks__9895 = [];
var obj__9896 = {};
var kvs__9897 = cljs.core.seq(keyvals);
while(true){
if(kvs__9897)
{ks__9895.push(cljs.core.first(kvs__9897));
(obj__9896[cljs.core.first(kvs__9897)] = cljs.core.second(kvs__9897));
{
var G__9898 = cljs.core.nnext(kvs__9897);
kvs__9897 = G__9898;
continue;
}
} else
{return (cljs.core.ObjMap.fromObject.cljs$lang$arity$2 ? cljs.core.ObjMap.fromObject.cljs$lang$arity$2(ks__9895,obj__9896) : cljs.core.ObjMap.fromObject.call(null,ks__9895,obj__9896));
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return obj_map__delegate.call(this, keyvals);
};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__9899){
var keyvals = cljs.core.seq(arglist__9899);;
return obj_map__delegate(keyvals);
});
obj_map.cljs$lang$arity$variadic = obj_map__delegate;
return obj_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in__9902 = cljs.core.seq(keyvals);
var out__9903 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__9902)
{{
var G__9904 = cljs.core.nnext(in__9902);
var G__9905 = cljs.core.assoc.cljs$lang$arity$3(out__9903,cljs.core.first(in__9902),cljs.core.second(in__9902));
in__9902 = G__9904;
out__9903 = G__9905;
continue;
}
} else
{return out__9903;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this, keyvals);
};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__9906){
var keyvals = cljs.core.seq(arglist__9906);;
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$lang$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in__9909 = cljs.core.seq(keyvals);
var out__9910 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__9909)
{{
var G__9911 = cljs.core.nnext(in__9909);
var G__9912 = cljs.core.assoc.cljs$lang$arity$3(out__9910,cljs.core.first(in__9909),cljs.core.second(in__9909));
in__9909 = G__9911;
out__9910 = G__9912;
continue;
}
} else
{return out__9910;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this, comparator, keyvals);
};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__9913){
var comparator = cljs.core.first(arglist__9913);
var keyvals = cljs.core.rest(arglist__9913);
return sorted_map_by__delegate(comparator, keyvals);
});
sorted_map_by.cljs$lang$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq(cljs.core.map.cljs$lang$arity$2(cljs.core.first,hash_map));
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key(map_entry);
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq(cljs.core.map.cljs$lang$arity$2(cljs.core.second,hash_map));
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val(map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some(cljs.core.identity,maps)))
{return cljs.core.reduce.cljs$lang$arity$2((function (p1__9914_SHARP_,p2__9915_SHARP_){
return cljs.core.conj.cljs$lang$arity$2((function (){var or__3824__auto____9917 = p1__9914_SHARP_;
if(cljs.core.truth_(or__3824__auto____9917))
{return or__3824__auto____9917;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__9915_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__9918){
var maps = cljs.core.seq(arglist__9918);;
return merge__delegate(maps);
});
merge.cljs$lang$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some(cljs.core.identity,maps)))
{var merge_entry__9926 = (function (m,e){
var k__9924 = cljs.core.first(e);
var v__9925 = cljs.core.second(e);
if(cljs.core.contains_QMARK_(m,k__9924))
{return cljs.core.assoc.cljs$lang$arity$3(m,k__9924,(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(cljs.core._lookup.cljs$lang$arity$3(m,k__9924,null),v__9925) : f.call(null,cljs.core._lookup.cljs$lang$arity$3(m,k__9924,null),v__9925)));
} else
{return cljs.core.assoc.cljs$lang$arity$3(m,k__9924,v__9925);
}
});
var merge2__9928 = (function (m1,m2){
return cljs.core.reduce.cljs$lang$arity$3(merge_entry__9926,(function (){var or__3824__auto____9927 = m1;
if(cljs.core.truth_(or__3824__auto____9927))
{return or__3824__auto____9927;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq(m2));
});
return cljs.core.reduce.cljs$lang$arity$2(merge2__9928,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__9929){
var f = cljs.core.first(arglist__9929);
var maps = cljs.core.rest(arglist__9929);
return merge_with__delegate(f, maps);
});
merge_with.cljs$lang$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__9934 = cljs.core.ObjMap.EMPTY;
var keys__9935 = cljs.core.seq(keyseq);
while(true){
if(keys__9935)
{var key__9936 = cljs.core.first(keys__9935);
var entry__9937 = cljs.core._lookup.cljs$lang$arity$3(map,key__9936,"\uFDD0'cljs.core/not-found");
{
var G__9938 = ((cljs.core.not_EQ_.cljs$lang$arity$2(entry__9937,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.cljs$lang$arity$3(ret__9934,key__9936,entry__9937):ret__9934);
var G__9939 = cljs.core.next(keys__9935);
ret__9934 = G__9938;
keys__9935 = G__9939;
continue;
}
} else
{return ret__9934;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9943 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$(this__9943.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9944 = this;
var h__2199__auto____9945 = this__9944.__hash;
if(!((h__2199__auto____9945 == null)))
{return h__2199__auto____9945;
} else
{var h__2199__auto____9946 = cljs.core.hash_iset(coll);
this__9944.__hash = h__2199__auto____9946;
return h__2199__auto____9946;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9947 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9948 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_(this__9948.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__9969 = null;
var G__9969__2 = (function (this_sym9949,k){
var this__9951 = this;
var this_sym9949__9952 = this;
var coll__9953 = this_sym9949__9952;
return coll__9953.cljs$core$ILookup$_lookup$arity$2(coll__9953,k);
});
var G__9969__3 = (function (this_sym9950,k,not_found){
var this__9951 = this;
var this_sym9950__9954 = this;
var coll__9955 = this_sym9950__9954;
return coll__9955.cljs$core$ILookup$_lookup$arity$3(coll__9955,k,not_found);
});
G__9969 = function(this_sym9950,k,not_found){
switch(arguments.length){
case 2:
return G__9969__2.call(this,this_sym9950,k);
case 3:
return G__9969__3.call(this,this_sym9950,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9969;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym9941,args9942){
var this__9956 = this;
return this_sym9941.call.apply(this_sym9941,[this_sym9941].concat(args9942.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9957 = this;
return (new cljs.core.PersistentHashSet(this__9957.meta,cljs.core.assoc.cljs$lang$arity$3(this__9957.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__9958 = this;
var this__9959 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__9959], 0));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9960 = this;
return cljs.core.keys(this__9960.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__9961 = this;
return (new cljs.core.PersistentHashSet(this__9961.meta,cljs.core.dissoc.cljs$lang$arity$2(this__9961.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9962 = this;
return cljs.core.count(cljs.core.seq(coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9963 = this;
var and__3822__auto____9964 = cljs.core.set_QMARK_(other);
if(and__3822__auto____9964)
{var and__3822__auto____9965 = (cljs.core.count(coll) === cljs.core.count(other));
if(and__3822__auto____9965)
{return cljs.core.every_QMARK_((function (p1__9940_SHARP_){
return cljs.core.contains_QMARK_(coll,p1__9940_SHARP_);
}),other);
} else
{return and__3822__auto____9965;
}
} else
{return and__3822__auto____9964;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9966 = this;
return (new cljs.core.PersistentHashSet(meta,this__9966.hash_map,this__9966.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9967 = this;
return this__9967.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9968 = this;
return cljs.core.with_meta(cljs.core.PersistentHashSet.EMPTY,this__9968.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map(),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len__9970 = cljs.core.count(items);
var i__9971 = 0;
var out__9972 = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i__9971 < len__9970))
{{
var G__9973 = (i__9971 + 1);
var G__9974 = cljs.core.conj_BANG_(out__9972,(items[i__9971]));
i__9971 = G__9973;
out__9972 = G__9974;
continue;
}
} else
{return cljs.core.persistent_BANG_(out__9972);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 34;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__9992 = null;
var G__9992__2 = (function (this_sym9978,k){
var this__9980 = this;
var this_sym9978__9981 = this;
var tcoll__9982 = this_sym9978__9981;
if((cljs.core._lookup.cljs$lang$arity$3(this__9980.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__9992__3 = (function (this_sym9979,k,not_found){
var this__9980 = this;
var this_sym9979__9983 = this;
var tcoll__9984 = this_sym9979__9983;
if((cljs.core._lookup.cljs$lang$arity$3(this__9980.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__9992 = function(this_sym9979,k,not_found){
switch(arguments.length){
case 2:
return G__9992__2.call(this,this_sym9979,k);
case 3:
return G__9992__3.call(this,this_sym9979,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9992;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym9976,args9977){
var this__9985 = this;
return this_sym9976.call.apply(this_sym9976,[this_sym9976].concat(args9977.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__9986 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__9987 = this;
if((cljs.core._lookup.cljs$lang$arity$3(this__9987.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9988 = this;
return cljs.core.count(this__9988.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__9989 = this;
this__9989.transient_map = cljs.core.dissoc_BANG_(this__9989.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9990 = this;
this__9990.transient_map = cljs.core.assoc_BANG_(this__9990.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9991 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_(this__9991.transient_map),null));
});
cljs.core.TransientHashSet;

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9995 = this;
var h__2199__auto____9996 = this__9995.__hash;
if(!((h__2199__auto____9996 == null)))
{return h__2199__auto____9996;
} else
{var h__2199__auto____9997 = cljs.core.hash_iset(coll);
this__9995.__hash = h__2199__auto____9997;
return h__2199__auto____9997;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__9998 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__9999 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_(this__9999.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__10025 = null;
var G__10025__2 = (function (this_sym10000,k){
var this__10002 = this;
var this_sym10000__10003 = this;
var coll__10004 = this_sym10000__10003;
return coll__10004.cljs$core$ILookup$_lookup$arity$2(coll__10004,k);
});
var G__10025__3 = (function (this_sym10001,k,not_found){
var this__10002 = this;
var this_sym10001__10005 = this;
var coll__10006 = this_sym10001__10005;
return coll__10006.cljs$core$ILookup$_lookup$arity$3(coll__10006,k,not_found);
});
G__10025 = function(this_sym10001,k,not_found){
switch(arguments.length){
case 2:
return G__10025__2.call(this,this_sym10001,k);
case 3:
return G__10025__3.call(this,this_sym10001,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10025;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym9993,args9994){
var this__10007 = this;
return this_sym9993.call.apply(this_sym9993,[this_sym9993].concat(args9994.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10008 = this;
return (new cljs.core.PersistentTreeSet(this__10008.meta,cljs.core.assoc.cljs$lang$arity$3(this__10008.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__10009 = this;
return cljs.core.map.cljs$lang$arity$2(cljs.core.key,cljs.core.rseq(this__10009.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__10010 = this;
var this__10011 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__10011], 0));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__10012 = this;
return cljs.core.map.cljs$lang$arity$2(cljs.core.key,cljs.core._sorted_seq(this__10012.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__10013 = this;
return cljs.core.map.cljs$lang$arity$2(cljs.core.key,cljs.core._sorted_seq_from(this__10013.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__10014 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__10015 = this;
return cljs.core._comparator(this__10015.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10016 = this;
return cljs.core.keys(this__10016.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__10017 = this;
return (new cljs.core.PersistentTreeSet(this__10017.meta,cljs.core.dissoc.cljs$lang$arity$2(this__10017.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10018 = this;
return cljs.core.count(this__10018.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10019 = this;
var and__3822__auto____10020 = cljs.core.set_QMARK_(other);
if(and__3822__auto____10020)
{var and__3822__auto____10021 = (cljs.core.count(coll) === cljs.core.count(other));
if(and__3822__auto____10021)
{return cljs.core.every_QMARK_((function (p1__9975_SHARP_){
return cljs.core.contains_QMARK_(coll,p1__9975_SHARP_);
}),other);
} else
{return and__3822__auto____10021;
}
} else
{return and__3822__auto____10020;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10022 = this;
return (new cljs.core.PersistentTreeSet(meta,this__10022.tree_map,this__10022.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10023 = this;
return this__10023.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10024 = this;
return cljs.core.with_meta(cljs.core.PersistentTreeSet.EMPTY,this__10024.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map(),0));
/**
* @param {...*} var_args
*/
cljs.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() { 
var G__10030__delegate = function (keys){
var in__10028 = cljs.core.seq(keys);
var out__10029 = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq(in__10028))
{{
var G__10031 = cljs.core.next(in__10028);
var G__10032 = cljs.core.conj_BANG_(out__10029,cljs.core.first(in__10028));
in__10028 = G__10031;
out__10029 = G__10032;
continue;
}
} else
{return cljs.core.persistent_BANG_(out__10029);
}
break;
}
};
var G__10030 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10030__delegate.call(this, keys);
};
G__10030.cljs$lang$maxFixedArity = 0;
G__10030.cljs$lang$applyTo = (function (arglist__10033){
var keys = cljs.core.seq(arglist__10033);;
return G__10030__delegate(keys);
});
G__10030.cljs$lang$arity$variadic = G__10030__delegate;
return G__10030;
})()
;
hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return hash_set__0.call(this);
default:
return hash_set__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
hash_set.cljs$lang$maxFixedArity = 0;
hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
hash_set.cljs$lang$arity$0 = hash_set__0;
hash_set.cljs$lang$arity$variadic = hash_set__1.cljs$lang$arity$variadic;
return hash_set;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
return cljs.core.apply.cljs$lang$arity$2(cljs.core.hash_set,coll);
});
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this, keys);
};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__10034){
var keys = cljs.core.seq(arglist__10034);;
return sorted_set__delegate(keys);
});
sorted_set.cljs$lang$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.cljs$lang$arity$3(cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by(comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this, comparator, keys);
};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__10036){
var comparator = cljs.core.first(arglist__10036);
var keys = cljs.core.rest(arglist__10036);
return sorted_set_by__delegate(comparator, keys);
});
sorted_set_by.cljs$lang$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.vector_QMARK_(coll))
{var n__10042 = cljs.core.count(coll);
return cljs.core.reduce.cljs$lang$arity$3((function (v,i){
var temp__3971__auto____10043 = cljs.core.find(smap,cljs.core.nth.cljs$lang$arity$2(v,i));
if(cljs.core.truth_(temp__3971__auto____10043))
{var e__10044 = temp__3971__auto____10043;
return cljs.core.assoc.cljs$lang$arity$3(v,i,cljs.core.second(e__10044));
} else
{return v;
}
}),coll,cljs.core.take(n__10042,cljs.core.iterate(cljs.core.inc,0)));
} else
{return cljs.core.map.cljs$lang$arity$2((function (p1__10035_SHARP_){
var temp__3971__auto____10045 = cljs.core.find(smap,p1__10035_SHARP_);
if(cljs.core.truth_(temp__3971__auto____10045))
{var e__10046 = temp__3971__auto____10045;
return cljs.core.second(e__10046);
} else
{return p1__10035_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__10076 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__10069,seen){
while(true){
var vec__10070__10071 = p__10069;
var f__10072 = cljs.core.nth.cljs$lang$arity$3(vec__10070__10071,0,null);
var xs__10073 = vec__10070__10071;
var temp__3974__auto____10074 = cljs.core.seq(xs__10073);
if(temp__3974__auto____10074)
{var s__10075 = temp__3974__auto____10074;
if(cljs.core.contains_QMARK_(seen,f__10072))
{{
var G__10077 = cljs.core.rest(s__10075);
var G__10078 = seen;
p__10069 = G__10077;
seen = G__10078;
continue;
}
} else
{return cljs.core.cons(f__10072,step(cljs.core.rest(s__10075),cljs.core.conj.cljs$lang$arity$2(seen,f__10072)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return (step__10076.cljs$lang$arity$2 ? step__10076.cljs$lang$arity$2(coll,cljs.core.PersistentHashSet.EMPTY) : step__10076.call(null,coll,cljs.core.PersistentHashSet.EMPTY));
});
cljs.core.butlast = (function butlast(s){
var ret__10081 = cljs.core.PersistentVector.EMPTY;
var s__10082 = s;
while(true){
if(cljs.core.next(s__10082))
{{
var G__10083 = cljs.core.conj.cljs$lang$arity$2(ret__10081,cljs.core.first(s__10082));
var G__10084 = cljs.core.next(s__10082);
ret__10081 = G__10083;
s__10082 = G__10084;
continue;
}
} else
{return cljs.core.seq(ret__10081);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.string_QMARK_(x))
{return x;
} else
{if((function (){var or__3824__auto____10087 = cljs.core.keyword_QMARK_(x);
if(or__3824__auto____10087)
{return or__3824__auto____10087;
} else
{return cljs.core.symbol_QMARK_(x);
}
})())
{var i__10088 = x.lastIndexOf("/");
if((i__10088 < 0))
{return cljs.core.subs.cljs$lang$arity$2(x,2);
} else
{return cljs.core.subs.cljs$lang$arity$2(x,(i__10088 + 1));
}
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if((function (){var or__3824__auto____10091 = cljs.core.keyword_QMARK_(x);
if(or__3824__auto____10091)
{return or__3824__auto____10091;
} else
{return cljs.core.symbol_QMARK_(x);
}
})())
{var i__10092 = x.lastIndexOf("/");
if((i__10092 > -1))
{return cljs.core.subs.cljs$lang$arity$3(x,2,i__10092);
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__10099 = cljs.core.ObjMap.EMPTY;
var ks__10100 = cljs.core.seq(keys);
var vs__10101 = cljs.core.seq(vals);
while(true){
if((function (){var and__3822__auto____10102 = ks__10100;
if(and__3822__auto____10102)
{return vs__10101;
} else
{return and__3822__auto____10102;
}
})())
{{
var G__10103 = cljs.core.assoc.cljs$lang$arity$3(map__10099,cljs.core.first(ks__10100),cljs.core.first(vs__10101));
var G__10104 = cljs.core.next(ks__10100);
var G__10105 = cljs.core.next(vs__10101);
map__10099 = G__10103;
ks__10100 = G__10104;
vs__10101 = G__10105;
continue;
}
} else
{return map__10099;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if(((k.cljs$lang$arity$1 ? k.cljs$lang$arity$1(x) : k.call(null,x)) > (k.cljs$lang$arity$1 ? k.cljs$lang$arity$1(y) : k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__10108__delegate = function (k,x,y,more){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__10093_SHARP_,p2__10094_SHARP_){
return max_key.cljs$lang$arity$3(k,p1__10093_SHARP_,p2__10094_SHARP_);
}),max_key.cljs$lang$arity$3(k,x,y),more);
};
var G__10108 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10108__delegate.call(this, k, x, y, more);
};
G__10108.cljs$lang$maxFixedArity = 3;
G__10108.cljs$lang$applyTo = (function (arglist__10109){
var k = cljs.core.first(arglist__10109);
var x = cljs.core.first(cljs.core.next(arglist__10109));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10109)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10109)));
return G__10108__delegate(k, x, y, more);
});
G__10108.cljs$lang$arity$variadic = G__10108__delegate;
return G__10108;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$lang$arity$2 = max_key__2;
max_key.cljs$lang$arity$3 = max_key__3;
max_key.cljs$lang$arity$variadic = max_key__4.cljs$lang$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if(((k.cljs$lang$arity$1 ? k.cljs$lang$arity$1(x) : k.call(null,x)) < (k.cljs$lang$arity$1 ? k.cljs$lang$arity$1(y) : k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__10110__delegate = function (k,x,y,more){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__10106_SHARP_,p2__10107_SHARP_){
return min_key.cljs$lang$arity$3(k,p1__10106_SHARP_,p2__10107_SHARP_);
}),min_key.cljs$lang$arity$3(k,x,y),more);
};
var G__10110 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10110__delegate.call(this, k, x, y, more);
};
G__10110.cljs$lang$maxFixedArity = 3;
G__10110.cljs$lang$applyTo = (function (arglist__10111){
var k = cljs.core.first(arglist__10111);
var x = cljs.core.first(cljs.core.next(arglist__10111));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10111)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10111)));
return G__10110__delegate(k, x, y, more);
});
G__10110.cljs$lang$arity$variadic = G__10110__delegate;
return G__10110;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$lang$arity$2 = min_key__2;
min_key.cljs$lang$arity$3 = min_key__3;
min_key.cljs$lang$arity$variadic = min_key__4.cljs$lang$arity$variadic;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){
return partition_all.cljs$lang$arity$3(n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____10114 = cljs.core.seq(coll);
if(temp__3974__auto____10114)
{var s__10115 = temp__3974__auto____10114;
return cljs.core.cons(cljs.core.take(n,s__10115),partition_all.cljs$lang$arity$3(n,step,cljs.core.drop(step,s__10115)));
} else
{return null;
}
}),null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition_all.cljs$lang$arity$2 = partition_all__2;
partition_all.cljs$lang$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____10118 = cljs.core.seq(coll);
if(temp__3974__auto____10118)
{var s__10119 = temp__3974__auto____10118;
if(cljs.core.truth_((pred.cljs$lang$arity$1 ? pred.cljs$lang$arity$1(cljs.core.first(s__10119)) : pred.call(null,cljs.core.first(s__10119)))))
{return cljs.core.cons(cljs.core.first(s__10119),take_while(pred,cljs.core.rest(s__10119)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp__10121 = cljs.core._comparator(sc);
return (test.cljs$lang$arity$2 ? test.cljs$lang$arity$2((comp__10121.cljs$lang$arity$2 ? comp__10121.cljs$lang$arity$2(cljs.core._entry_key(sc,e),key) : comp__10121.call(null,cljs.core._entry_key(sc,e),key)),0) : test.call(null,(comp__10121.cljs$lang$arity$2 ? comp__10121.cljs$lang$arity$2(cljs.core._entry_key(sc,e),key) : comp__10121.call(null,cljs.core._entry_key(sc,e),key)),0));
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include__10133 = cljs.core.mk_bound_fn(sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__3974__auto____10134 = cljs.core._sorted_seq_from(sc,key,true);
if(cljs.core.truth_(temp__3974__auto____10134))
{var vec__10135__10136 = temp__3974__auto____10134;
var e__10137 = cljs.core.nth.cljs$lang$arity$3(vec__10135__10136,0,null);
var s__10138 = vec__10135__10136;
if(cljs.core.truth_((include__10133.cljs$lang$arity$1 ? include__10133.cljs$lang$arity$1(e__10137) : include__10133.call(null,e__10137))))
{return s__10138;
} else
{return cljs.core.next(s__10138);
}
} else
{return null;
}
} else
{return cljs.core.take_while(include__10133,cljs.core._sorted_seq(sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____10139 = cljs.core._sorted_seq_from(sc,start_key,true);
if(cljs.core.truth_(temp__3974__auto____10139))
{var vec__10140__10141 = temp__3974__auto____10139;
var e__10142 = cljs.core.nth.cljs$lang$arity$3(vec__10140__10141,0,null);
var s__10143 = vec__10140__10141;
return cljs.core.take_while(cljs.core.mk_bound_fn(sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn(sc,start_test,start_key).call(null,e__10142))?s__10143:cljs.core.next(s__10143)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
subseq.cljs$lang$arity$3 = subseq__3;
subseq.cljs$lang$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include__10155 = cljs.core.mk_bound_fn(sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__3974__auto____10156 = cljs.core._sorted_seq_from(sc,key,false);
if(cljs.core.truth_(temp__3974__auto____10156))
{var vec__10157__10158 = temp__3974__auto____10156;
var e__10159 = cljs.core.nth.cljs$lang$arity$3(vec__10157__10158,0,null);
var s__10160 = vec__10157__10158;
if(cljs.core.truth_((include__10155.cljs$lang$arity$1 ? include__10155.cljs$lang$arity$1(e__10159) : include__10155.call(null,e__10159))))
{return s__10160;
} else
{return cljs.core.next(s__10160);
}
} else
{return null;
}
} else
{return cljs.core.take_while(include__10155,cljs.core._sorted_seq(sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__3974__auto____10161 = cljs.core._sorted_seq_from(sc,end_key,false);
if(cljs.core.truth_(temp__3974__auto____10161))
{var vec__10162__10163 = temp__3974__auto____10161;
var e__10164 = cljs.core.nth.cljs$lang$arity$3(vec__10162__10163,0,null);
var s__10165 = vec__10162__10163;
return cljs.core.take_while(cljs.core.mk_bound_fn(sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn(sc,end_test,end_key).call(null,e__10164))?s__10165:cljs.core.next(s__10165)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
rsubseq.cljs$lang$arity$3 = rsubseq__3;
rsubseq.cljs$lang$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__10166 = this;
var h__2199__auto____10167 = this__10166.__hash;
if(!((h__2199__auto____10167 == null)))
{return h__2199__auto____10167;
} else
{var h__2199__auto____10168 = cljs.core.hash_coll(rng);
this__10166.__hash = h__2199__auto____10168;
return h__2199__auto____10168;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__10169 = this;
if((this__10169.step > 0))
{if(((this__10169.start + this__10169.step) < this__10169.end))
{return (new cljs.core.Range(this__10169.meta,(this__10169.start + this__10169.step),this__10169.end,this__10169.step,null));
} else
{return null;
}
} else
{if(((this__10169.start + this__10169.step) > this__10169.end))
{return (new cljs.core.Range(this__10169.meta,(this__10169.start + this__10169.step),this__10169.end,this__10169.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__10170 = this;
return cljs.core.cons(o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__10171 = this;
var this__10172 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__10172], 0));
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__10173 = this;
return cljs.core.ci_reduce.cljs$lang$arity$2(rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__10174 = this;
return cljs.core.ci_reduce.cljs$lang$arity$3(rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__10175 = this;
if((this__10175.step > 0))
{if((this__10175.start < this__10175.end))
{return rng;
} else
{return null;
}
} else
{if((this__10175.start > this__10175.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__10176 = this;
if(cljs.core.not(rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__10176.end - this__10176.start) / this__10176.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__10177 = this;
return this__10177.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__10178 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__10178.meta,(this__10178.start + this__10178.step),this__10178.end,this__10178.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__10179 = this;
return cljs.core.equiv_sequential(rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__10180 = this;
return (new cljs.core.Range(meta,this__10180.start,this__10180.end,this__10180.step,this__10180.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__10181 = this;
return this__10181.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__10182 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__10182.start + (n * this__10182.step));
} else
{if((function (){var and__3822__auto____10183 = (this__10182.start > this__10182.end);
if(and__3822__auto____10183)
{return (this__10182.step === 0);
} else
{return and__3822__auto____10183;
}
})())
{return this__10182.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__10184 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__10184.start + (n * this__10184.step));
} else
{if((function (){var and__3822__auto____10185 = (this__10184.start > this__10184.end);
if(and__3822__auto____10185)
{return (this__10184.step === 0);
} else
{return and__3822__auto____10185;
}
})())
{return this__10184.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__10186 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,this__10186.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.cljs$lang$arity$3(0,Number.MAX_VALUE,1);
});
var range__1 = (function (end){
return range.cljs$lang$arity$3(0,end,1);
});
var range__2 = (function (start,end){
return range.cljs$lang$arity$3(start,end,1);
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
range.cljs$lang$arity$0 = range__0;
range.cljs$lang$arity$1 = range__1;
range.cljs$lang$arity$2 = range__2;
range.cljs$lang$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____10189 = cljs.core.seq(coll);
if(temp__3974__auto____10189)
{var s__10190 = temp__3974__auto____10189;
return cljs.core.cons(cljs.core.first(s__10190),take_nth(n,cljs.core.drop(n,s__10190)));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while(pred,coll),cljs.core.drop_while(pred,coll)], true);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____10197 = cljs.core.seq(coll);
if(temp__3974__auto____10197)
{var s__10198 = temp__3974__auto____10197;
var fst__10199 = cljs.core.first(s__10198);
var fv__10200 = (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(fst__10199) : f.call(null,fst__10199));
var run__10201 = cljs.core.cons(fst__10199,cljs.core.take_while((function (p1__10191_SHARP_){
return cljs.core._EQ_.cljs$lang$arity$2(fv__10200,(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(p1__10191_SHARP_) : f.call(null,p1__10191_SHARP_)));
}),cljs.core.next(s__10198)));
return cljs.core.cons(run__10201,partition_by(f,cljs.core.seq(cljs.core.drop(cljs.core.count(run__10201),s__10198))));
} else
{return null;
}
}),null));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$lang$arity$3((function (counts,x){
return cljs.core.assoc_BANG_(counts,x,(cljs.core._lookup.cljs$lang$arity$3(counts,x,0) + 1));
}),cljs.core.transient$(cljs.core.ObjMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3971__auto____10216 = cljs.core.seq(coll);
if(temp__3971__auto____10216)
{var s__10217 = temp__3971__auto____10216;
return reductions.cljs$lang$arity$3(f,cljs.core.first(s__10217),cljs.core.rest(s__10217));
} else
{return cljs.core.list.cljs$lang$arity$1((f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null)));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons(init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3974__auto____10218 = cljs.core.seq(coll);
if(temp__3974__auto____10218)
{var s__10219 = temp__3974__auto____10218;
return reductions.cljs$lang$arity$3(f,(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(init,cljs.core.first(s__10219)) : f.call(null,init,cljs.core.first(s__10219))),cljs.core.rest(s__10219));
} else
{return null;
}
}),null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reductions.cljs$lang$arity$2 = reductions__2;
reductions.cljs$lang$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__10222 = null;
var G__10222__0 = (function (){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null))], 0));
});
var G__10222__1 = (function (x){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(x) : f.call(null,x))], 0));
});
var G__10222__2 = (function (x,y){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(x,y) : f.call(null,x,y))], 0));
});
var G__10222__3 = (function (x,y,z){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(x,y,z) : f.call(null,x,y,z))], 0));
});
var G__10222__4 = (function() { 
var G__10223__delegate = function (x,y,z,args){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$lang$arity$5(f,x,y,z,args)], 0));
};
var G__10223 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10223__delegate.call(this, x, y, z, args);
};
G__10223.cljs$lang$maxFixedArity = 3;
G__10223.cljs$lang$applyTo = (function (arglist__10224){
var x = cljs.core.first(arglist__10224);
var y = cljs.core.first(cljs.core.next(arglist__10224));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10224)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10224)));
return G__10223__delegate(x, y, z, args);
});
G__10223.cljs$lang$arity$variadic = G__10223__delegate;
return G__10223;
})()
;
G__10222 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10222__0.call(this);
case 1:
return G__10222__1.call(this,x);
case 2:
return G__10222__2.call(this,x,y);
case 3:
return G__10222__3.call(this,x,y,z);
default:
return G__10222__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10222.cljs$lang$maxFixedArity = 3;
G__10222.cljs$lang$applyTo = G__10222__4.cljs$lang$applyTo;
return G__10222;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__10225 = null;
var G__10225__0 = (function (){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null)),(g.cljs$lang$arity$0 ? g.cljs$lang$arity$0() : g.call(null))], 0));
});
var G__10225__1 = (function (x){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(x) : f.call(null,x)),(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1(x) : g.call(null,x))], 0));
});
var G__10225__2 = (function (x,y){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(x,y) : f.call(null,x,y)),(g.cljs$lang$arity$2 ? g.cljs$lang$arity$2(x,y) : g.call(null,x,y))], 0));
});
var G__10225__3 = (function (x,y,z){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(x,y,z) : f.call(null,x,y,z)),(g.cljs$lang$arity$3 ? g.cljs$lang$arity$3(x,y,z) : g.call(null,x,y,z))], 0));
});
var G__10225__4 = (function() { 
var G__10226__delegate = function (x,y,z,args){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$lang$arity$5(f,x,y,z,args),cljs.core.apply.cljs$lang$arity$5(g,x,y,z,args)], 0));
};
var G__10226 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10226__delegate.call(this, x, y, z, args);
};
G__10226.cljs$lang$maxFixedArity = 3;
G__10226.cljs$lang$applyTo = (function (arglist__10227){
var x = cljs.core.first(arglist__10227);
var y = cljs.core.first(cljs.core.next(arglist__10227));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10227)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10227)));
return G__10226__delegate(x, y, z, args);
});
G__10226.cljs$lang$arity$variadic = G__10226__delegate;
return G__10226;
})()
;
G__10225 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10225__0.call(this);
case 1:
return G__10225__1.call(this,x);
case 2:
return G__10225__2.call(this,x,y);
case 3:
return G__10225__3.call(this,x,y,z);
default:
return G__10225__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10225.cljs$lang$maxFixedArity = 3;
G__10225.cljs$lang$applyTo = G__10225__4.cljs$lang$applyTo;
return G__10225;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__10228 = null;
var G__10228__0 = (function (){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null)),(g.cljs$lang$arity$0 ? g.cljs$lang$arity$0() : g.call(null)),(h.cljs$lang$arity$0 ? h.cljs$lang$arity$0() : h.call(null))], 0));
});
var G__10228__1 = (function (x){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(x) : f.call(null,x)),(g.cljs$lang$arity$1 ? g.cljs$lang$arity$1(x) : g.call(null,x)),(h.cljs$lang$arity$1 ? h.cljs$lang$arity$1(x) : h.call(null,x))], 0));
});
var G__10228__2 = (function (x,y){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(x,y) : f.call(null,x,y)),(g.cljs$lang$arity$2 ? g.cljs$lang$arity$2(x,y) : g.call(null,x,y)),(h.cljs$lang$arity$2 ? h.cljs$lang$arity$2(x,y) : h.call(null,x,y))], 0));
});
var G__10228__3 = (function (x,y,z){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([(f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(x,y,z) : f.call(null,x,y,z)),(g.cljs$lang$arity$3 ? g.cljs$lang$arity$3(x,y,z) : g.call(null,x,y,z)),(h.cljs$lang$arity$3 ? h.cljs$lang$arity$3(x,y,z) : h.call(null,x,y,z))], 0));
});
var G__10228__4 = (function() { 
var G__10229__delegate = function (x,y,z,args){
return cljs.core.vector.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$lang$arity$5(f,x,y,z,args),cljs.core.apply.cljs$lang$arity$5(g,x,y,z,args),cljs.core.apply.cljs$lang$arity$5(h,x,y,z,args)], 0));
};
var G__10229 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10229__delegate.call(this, x, y, z, args);
};
G__10229.cljs$lang$maxFixedArity = 3;
G__10229.cljs$lang$applyTo = (function (arglist__10230){
var x = cljs.core.first(arglist__10230);
var y = cljs.core.first(cljs.core.next(arglist__10230));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10230)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10230)));
return G__10229__delegate(x, y, z, args);
});
G__10229.cljs$lang$arity$variadic = G__10229__delegate;
return G__10229;
})()
;
G__10228 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10228__0.call(this);
case 1:
return G__10228__1.call(this,x);
case 2:
return G__10228__2.call(this,x,y);
case 3:
return G__10228__3.call(this,x,y,z);
default:
return G__10228__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10228.cljs$lang$maxFixedArity = 3;
G__10228.cljs$lang$applyTo = G__10228__4.cljs$lang$applyTo;
return G__10228;
})()
});
var juxt__4 = (function() { 
var G__10231__delegate = function (f,g,h,fs){
var fs__10221 = cljs.core.list_STAR_.cljs$lang$arity$4(f,g,h,fs);
return (function() {
var G__10232 = null;
var G__10232__0 = (function (){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__10202_SHARP_,p2__10203_SHARP_){
return cljs.core.conj.cljs$lang$arity$2(p1__10202_SHARP_,(p2__10203_SHARP_.cljs$lang$arity$0 ? p2__10203_SHARP_.cljs$lang$arity$0() : p2__10203_SHARP_.call(null)));
}),cljs.core.PersistentVector.EMPTY,fs__10221);
});
var G__10232__1 = (function (x){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__10204_SHARP_,p2__10205_SHARP_){
return cljs.core.conj.cljs$lang$arity$2(p1__10204_SHARP_,(p2__10205_SHARP_.cljs$lang$arity$1 ? p2__10205_SHARP_.cljs$lang$arity$1(x) : p2__10205_SHARP_.call(null,x)));
}),cljs.core.PersistentVector.EMPTY,fs__10221);
});
var G__10232__2 = (function (x,y){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__10206_SHARP_,p2__10207_SHARP_){
return cljs.core.conj.cljs$lang$arity$2(p1__10206_SHARP_,(p2__10207_SHARP_.cljs$lang$arity$2 ? p2__10207_SHARP_.cljs$lang$arity$2(x,y) : p2__10207_SHARP_.call(null,x,y)));
}),cljs.core.PersistentVector.EMPTY,fs__10221);
});
var G__10232__3 = (function (x,y,z){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__10208_SHARP_,p2__10209_SHARP_){
return cljs.core.conj.cljs$lang$arity$2(p1__10208_SHARP_,(p2__10209_SHARP_.cljs$lang$arity$3 ? p2__10209_SHARP_.cljs$lang$arity$3(x,y,z) : p2__10209_SHARP_.call(null,x,y,z)));
}),cljs.core.PersistentVector.EMPTY,fs__10221);
});
var G__10232__4 = (function() { 
var G__10233__delegate = function (x,y,z,args){
return cljs.core.reduce.cljs$lang$arity$3((function (p1__10210_SHARP_,p2__10211_SHARP_){
return cljs.core.conj.cljs$lang$arity$2(p1__10210_SHARP_,cljs.core.apply.cljs$lang$arity$5(p2__10211_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__10221);
};
var G__10233 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10233__delegate.call(this, x, y, z, args);
};
G__10233.cljs$lang$maxFixedArity = 3;
G__10233.cljs$lang$applyTo = (function (arglist__10234){
var x = cljs.core.first(arglist__10234);
var y = cljs.core.first(cljs.core.next(arglist__10234));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10234)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10234)));
return G__10233__delegate(x, y, z, args);
});
G__10233.cljs$lang$arity$variadic = G__10233__delegate;
return G__10233;
})()
;
G__10232 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10232__0.call(this);
case 1:
return G__10232__1.call(this,x);
case 2:
return G__10232__2.call(this,x,y);
case 3:
return G__10232__3.call(this,x,y,z);
default:
return G__10232__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10232.cljs$lang$maxFixedArity = 3;
G__10232.cljs$lang$applyTo = G__10232__4.cljs$lang$applyTo;
return G__10232;
})()
};
var G__10231 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10231__delegate.call(this, f, g, h, fs);
};
G__10231.cljs$lang$maxFixedArity = 3;
G__10231.cljs$lang$applyTo = (function (arglist__10235){
var f = cljs.core.first(arglist__10235);
var g = cljs.core.first(cljs.core.next(arglist__10235));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10235)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10235)));
return G__10231__delegate(f, g, h, fs);
});
G__10231.cljs$lang$arity$variadic = G__10231__delegate;
return G__10231;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$lang$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$lang$arity$1 = juxt__1;
juxt.cljs$lang$arity$2 = juxt__2;
juxt.cljs$lang$arity$3 = juxt__3;
juxt.cljs$lang$arity$variadic = juxt__4.cljs$lang$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljs.core.seq(coll))
{{
var G__10238 = cljs.core.next(coll);
coll = G__10238;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3822__auto____10237 = cljs.core.seq(coll);
if(and__3822__auto____10237)
{return (n > 0);
} else
{return and__3822__auto____10237;
}
})()))
{{
var G__10239 = (n - 1);
var G__10240 = cljs.core.next(coll);
n = G__10239;
coll = G__10240;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
dorun.cljs$lang$arity$1 = dorun__1;
dorun.cljs$lang$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljs.core.dorun.cljs$lang$arity$1(coll);
return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.cljs$lang$arity$2(n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
doall.cljs$lang$arity$1 = doall__1;
doall.cljs$lang$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){
return o instanceof RegExp;
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__10242 = re.exec(s);
if(cljs.core._EQ_.cljs$lang$arity$2(cljs.core.first(matches__10242),s))
{if((cljs.core.count(matches__10242) === 1))
{return cljs.core.first(matches__10242);
} else
{return cljs.core.vec(matches__10242);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__10244 = re.exec(s);
if((matches__10244 == null))
{return null;
} else
{if((cljs.core.count(matches__10244) === 1))
{return cljs.core.first(matches__10244);
} else
{return cljs.core.vec(matches__10244);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__10249 = cljs.core.re_find(re,s);
var match_idx__10250 = s.search(re);
var match_str__10251 = ((cljs.core.coll_QMARK_(match_data__10249))?cljs.core.first(match_data__10249):match_data__10249);
var post_match__10252 = cljs.core.subs.cljs$lang$arity$2(s,(match_idx__10250 + cljs.core.count(match_str__10251)));
if(cljs.core.truth_(match_data__10249))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons(match_data__10249,re_seq(re,post_match__10252));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__10259__10260 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___10261 = cljs.core.nth.cljs$lang$arity$3(vec__10259__10260,0,null);
var flags__10262 = cljs.core.nth.cljs$lang$arity$3(vec__10259__10260,1,null);
var pattern__10263 = cljs.core.nth.cljs$lang$arity$3(vec__10259__10260,2,null);
return (new RegExp(pattern__10263,flags__10262));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.cljs$lang$arity$variadic(cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1(cljs.core.interpose(cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.cljs$lang$arity$2((function (p1__10253_SHARP_){
return (print_one.cljs$lang$arity$2 ? print_one.cljs$lang$arity$2(p1__10253_SHARP_,opts) : print_one.call(null,p1__10253_SHARP_,opts));
}),coll))),cljs.core.array_seq([cljs.core.PersistentVector.fromArray([end], true)], 0));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_(x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if((obj == null))
{return cljs.core.list.cljs$lang$arity$1("nil");
} else
{if((void 0 === obj))
{return cljs.core.list.cljs$lang$arity$1("#<undefined>");
} else
{if("\uFDD0'else")
{return cljs.core.concat.cljs$lang$arity$2((cljs.core.truth_((function (){var and__3822__auto____10273 = cljs.core._lookup.cljs$lang$arity$3(opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3822__auto____10273))
{var and__3822__auto____10277 = (function (){var G__10274__10275 = obj;
if(G__10274__10275)
{if((function (){var or__3824__auto____10276 = (G__10274__10275.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3824__auto____10276)
{return or__3824__auto____10276;
} else
{return G__10274__10275.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__10274__10275.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IMeta,G__10274__10275);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IMeta,G__10274__10275);
}
})();
if(cljs.core.truth_(and__3822__auto____10277))
{return cljs.core.meta(obj);
} else
{return and__3822__auto____10277;
}
} else
{return and__3822__auto____10273;
}
})())?cljs.core.concat.cljs$lang$arity$variadic(cljs.core.PersistentVector.fromArray(["^"], true),pr_seq(cljs.core.meta(obj),opts),cljs.core.array_seq([cljs.core.PersistentVector.fromArray([" "], true)], 0)):null),(((function (){var and__3822__auto____10278 = !((obj == null));
if(and__3822__auto____10278)
{return obj.cljs$lang$type;
} else
{return and__3822__auto____10278;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__10279__10280 = obj;
if(G__10279__10280)
{if((function (){var or__3824__auto____10281 = (G__10279__10280.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3824__auto____10281)
{return or__3824__auto____10281;
} else
{return G__10279__10280.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__10279__10280.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_(cljs.core.IPrintable,G__10279__10280);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_(cljs.core.IPrintable,G__10279__10280);
}
})())?cljs.core._pr_seq(obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_(obj))?cljs.core.list.cljs$lang$arity$3("#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.cljs$lang$arity$3("#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var sb__10301 = (new goog.string.StringBuffer());
var G__10302__10303 = cljs.core.seq(cljs.core.pr_seq(cljs.core.first(objs),opts));
if(G__10302__10303)
{var string__10304 = cljs.core.first(G__10302__10303);
var G__10302__10305 = G__10302__10303;
while(true){
sb__10301.append(string__10304);
var temp__3974__auto____10306 = cljs.core.next(G__10302__10305);
if(temp__3974__auto____10306)
{var G__10302__10307 = temp__3974__auto____10306;
{
var G__10320 = cljs.core.first(G__10302__10307);
var G__10321 = G__10302__10307;
string__10304 = G__10320;
G__10302__10305 = G__10321;
continue;
}
} else
{}
break;
}
} else
{}
var G__10308__10309 = cljs.core.seq(cljs.core.next(objs));
if(G__10308__10309)
{var obj__10310 = cljs.core.first(G__10308__10309);
var G__10308__10311 = G__10308__10309;
while(true){
sb__10301.append(" ");
var G__10312__10313 = cljs.core.seq(cljs.core.pr_seq(obj__10310,opts));
if(G__10312__10313)
{var string__10314 = cljs.core.first(G__10312__10313);
var G__10312__10315 = G__10312__10313;
while(true){
sb__10301.append(string__10314);
var temp__3974__auto____10316 = cljs.core.next(G__10312__10315);
if(temp__3974__auto____10316)
{var G__10312__10317 = temp__3974__auto____10316;
{
var G__10322 = cljs.core.first(G__10312__10317);
var G__10323 = G__10312__10317;
string__10314 = G__10322;
G__10312__10315 = G__10323;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____10318 = cljs.core.next(G__10308__10311);
if(temp__3974__auto____10318)
{var G__10308__10319 = temp__3974__auto____10318;
{
var G__10324 = cljs.core.first(G__10308__10319);
var G__10325 = G__10308__10319;
obj__10310 = G__10324;
G__10308__10311 = G__10325;
continue;
}
} else
{}
break;
}
} else
{}
return sb__10301;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
return [cljs.core.str(cljs.core.pr_sb(objs,opts))].join('');
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
var sb__10327 = cljs.core.pr_sb(objs,opts);
sb__10327.append("\n");
return [cljs.core.str(sb__10327)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var G__10346__10347 = cljs.core.seq(cljs.core.pr_seq(cljs.core.first(objs),opts));
if(G__10346__10347)
{var string__10348 = cljs.core.first(G__10346__10347);
var G__10346__10349 = G__10346__10347;
while(true){
cljs.core.string_print(string__10348);
var temp__3974__auto____10350 = cljs.core.next(G__10346__10349);
if(temp__3974__auto____10350)
{var G__10346__10351 = temp__3974__auto____10350;
{
var G__10364 = cljs.core.first(G__10346__10351);
var G__10365 = G__10346__10351;
string__10348 = G__10364;
G__10346__10349 = G__10365;
continue;
}
} else
{}
break;
}
} else
{}
var G__10352__10353 = cljs.core.seq(cljs.core.next(objs));
if(G__10352__10353)
{var obj__10354 = cljs.core.first(G__10352__10353);
var G__10352__10355 = G__10352__10353;
while(true){
cljs.core.string_print(" ");
var G__10356__10357 = cljs.core.seq(cljs.core.pr_seq(obj__10354,opts));
if(G__10356__10357)
{var string__10358 = cljs.core.first(G__10356__10357);
var G__10356__10359 = G__10356__10357;
while(true){
cljs.core.string_print(string__10358);
var temp__3974__auto____10360 = cljs.core.next(G__10356__10359);
if(temp__3974__auto____10360)
{var G__10356__10361 = temp__3974__auto____10360;
{
var G__10366 = cljs.core.first(G__10356__10361);
var G__10367 = G__10356__10361;
string__10358 = G__10366;
G__10356__10359 = G__10367;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3974__auto____10362 = cljs.core.next(G__10352__10355);
if(temp__3974__auto____10362)
{var G__10352__10363 = temp__3974__auto____10362;
{
var G__10368 = cljs.core.first(G__10352__10363);
var G__10369 = G__10352__10363;
obj__10354 = G__10368;
G__10352__10355 = G__10369;
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
cljs.core.newline = (function newline(opts){
cljs.core.string_print("\n");
if(cljs.core.truth_(cljs.core._lookup.cljs$lang$arity$3(opts,"\uFDD0'flush-on-newline",null)))
{return cljs.core.flush();
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts(objs,cljs.core.pr_opts());
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__10370){
var objs = cljs.core.seq(arglist__10370);;
return pr_str__delegate(objs);
});
pr_str.cljs$lang$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts(objs,cljs.core.pr_opts());
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__10371){
var objs = cljs.core.seq(arglist__10371);;
return prn_str__delegate(objs);
});
prn_str.cljs$lang$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts(objs,cljs.core.pr_opts());
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__10372){
var objs = cljs.core.seq(arglist__10372);;
return pr__delegate(objs);
});
pr.cljs$lang$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts(objs,cljs.core.assoc.cljs$lang$arity$3(cljs.core.pr_opts(),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__10373){
var objs = cljs.core.seq(arglist__10373);;
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$lang$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts(objs,cljs.core.assoc.cljs$lang$arity$3(cljs.core.pr_opts(),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__10374){
var objs = cljs.core.seq(arglist__10374);;
return print_str__delegate(objs);
});
print_str.cljs$lang$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts(objs,cljs.core.assoc.cljs$lang$arity$3(cljs.core.pr_opts(),"\uFDD0'readably",false));
return cljs.core.newline(cljs.core.pr_opts());
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__10375){
var objs = cljs.core.seq(arglist__10375);;
return println__delegate(objs);
});
println.cljs$lang$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts(objs,cljs.core.assoc.cljs$lang$arity$3(cljs.core.pr_opts(),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__10376){
var objs = cljs.core.seq(arglist__10376);;
return println_str__delegate(objs);
});
println_str.cljs$lang$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts(objs,cljs.core.pr_opts());
return cljs.core.newline(cljs.core.pr_opts());
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__10377){
var objs = cljs.core.seq(arglist__10377);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
/**
* Prints formatted output, as per format
* @param {...*} var_args
*/
cljs.core.printf = (function() { 
var printf__delegate = function (fmt,args){
return cljs.core.print.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$lang$arity$3(cljs.core.format,fmt,args)], 0));
};
var printf = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return printf__delegate.call(this, fmt, args);
};
printf.cljs$lang$maxFixedArity = 1;
printf.cljs$lang$applyTo = (function (arglist__10378){
var fmt = cljs.core.first(arglist__10378);
var args = cljs.core.rest(arglist__10378);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10379 = (function (keyval){
return cljs.core.pr_sequential(cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential(pr_pair__10379,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.cljs$lang$arity$1([cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10380 = (function (keyval){
return cljs.core.pr_sequential(cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential(pr_pair__10380,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10381 = (function (keyval){
return cljs.core.pr_sequential(cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential(pr_pair__10381,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"#queue ["," ","]",opts,cljs.core.seq(coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.cljs$lang$arity$1([cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.keyword_QMARK_(obj))
{return cljs.core.list.cljs$lang$arity$1([cljs.core.str(":"),cljs.core.str((function (){var temp__3974__auto____10382 = cljs.core.namespace(obj);
if(cljs.core.truth_(temp__3974__auto____10382))
{var nspc__10383 = temp__3974__auto____10382;
return [cljs.core.str(nspc__10383),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name(obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_(obj))
{return cljs.core.list.cljs$lang$arity$1([cljs.core.str((function (){var temp__3974__auto____10384 = cljs.core.namespace(obj);
if(cljs.core.truth_(temp__3974__auto____10384))
{var nspc__10385 = temp__3974__auto____10384;
return [cljs.core.str(nspc__10385),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name(obj))].join(''));
} else
{if("\uFDD0'else")
{return cljs.core.list.cljs$lang$arity$1((cljs.core.truth_((new cljs.core.Keyword("\uFDD0'readably")).call(null,opts))?goog.string.quote(obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10386 = (function (keyval){
return cljs.core.pr_sequential(cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential(pr_pair__10386,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.cljs$lang$arity$3("#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.list.cljs$lang$arity$1("()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintable$ = true;
Date.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (d,_){
var normalize__10388 = (function (n,len){
var ns__10387 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count(ns__10387) < len))
{{
var G__10390 = [cljs.core.str("0"),cljs.core.str(ns__10387)].join('');
ns__10387 = G__10390;
continue;
}
} else
{return ns__10387;
}
break;
}
});
return cljs.core.list.cljs$lang$arity$1([cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str((normalize__10388.cljs$lang$arity$2 ? normalize__10388.cljs$lang$arity$2((d.getUTCMonth() + 1),2) : normalize__10388.call(null,(d.getUTCMonth() + 1),2))),cljs.core.str("-"),cljs.core.str((normalize__10388.cljs$lang$arity$2 ? normalize__10388.cljs$lang$arity$2(d.getUTCDate(),2) : normalize__10388.call(null,d.getUTCDate(),2))),cljs.core.str("T"),cljs.core.str((normalize__10388.cljs$lang$arity$2 ? normalize__10388.cljs$lang$arity$2(d.getUTCHours(),2) : normalize__10388.call(null,d.getUTCHours(),2))),cljs.core.str(":"),cljs.core.str((normalize__10388.cljs$lang$arity$2 ? normalize__10388.cljs$lang$arity$2(d.getUTCMinutes(),2) : normalize__10388.call(null,d.getUTCMinutes(),2))),cljs.core.str(":"),cljs.core.str((normalize__10388.cljs$lang$arity$2 ? normalize__10388.cljs$lang$arity$2(d.getUTCSeconds(),2) : normalize__10388.call(null,d.getUTCSeconds(),2))),cljs.core.str("."),cljs.core.str((normalize__10388.cljs$lang$arity$2 ? normalize__10388.cljs$lang$arity$2(d.getUTCMilliseconds(),3) : normalize__10388.call(null,d.getUTCMilliseconds(),3))),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10389 = (function (keyval){
return cljs.core.pr_sequential(cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential(pr_pair__10389,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
return cljs.core.compare_indexed.cljs$lang$arity$2(x,y);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2690809856;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10391 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__10392 = this;
var G__10393__10394 = cljs.core.seq(this__10392.watches);
if(G__10393__10394)
{var G__10396__10398 = cljs.core.first(G__10393__10394);
var vec__10397__10399 = G__10396__10398;
var key__10400 = cljs.core.nth.cljs$lang$arity$3(vec__10397__10399,0,null);
var f__10401 = cljs.core.nth.cljs$lang$arity$3(vec__10397__10399,1,null);
var G__10393__10402 = G__10393__10394;
var G__10396__10403 = G__10396__10398;
var G__10393__10404 = G__10393__10402;
while(true){
var vec__10405__10406 = G__10396__10403;
var key__10407 = cljs.core.nth.cljs$lang$arity$3(vec__10405__10406,0,null);
var f__10408 = cljs.core.nth.cljs$lang$arity$3(vec__10405__10406,1,null);
var G__10393__10409 = G__10393__10404;
(f__10408.cljs$lang$arity$4 ? f__10408.cljs$lang$arity$4(key__10407,this$,oldval,newval) : f__10408.call(null,key__10407,this$,oldval,newval));
var temp__3974__auto____10410 = cljs.core.next(G__10393__10409);
if(temp__3974__auto____10410)
{var G__10393__10411 = temp__3974__auto____10410;
{
var G__10418 = cljs.core.first(G__10393__10411);
var G__10419 = G__10393__10411;
G__10396__10403 = G__10418;
G__10393__10404 = G__10419;
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
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__10412 = this;
return this$.watches = cljs.core.assoc.cljs$lang$arity$3(this__10412.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__10413 = this;
return this$.watches = cljs.core.dissoc.cljs$lang$arity$2(this__10413.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__10414 = this;
return cljs.core.concat.cljs$lang$arity$variadic(cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq(this__10414.state,opts),cljs.core.array_seq([">"], 0));
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__10415 = this;
return this__10415.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10416 = this;
return this__10416.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__10417 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__10431__delegate = function (x,p__10420){
var map__10426__10427 = p__10420;
var map__10426__10428 = ((cljs.core.seq_QMARK_(map__10426__10427))?cljs.core.apply.cljs$lang$arity$2(cljs.core.hash_map,map__10426__10427):map__10426__10427);
var validator__10429 = cljs.core._lookup.cljs$lang$arity$3(map__10426__10428,"\uFDD0'validator",null);
var meta__10430 = cljs.core._lookup.cljs$lang$arity$3(map__10426__10428,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__10430,validator__10429,null));
};
var G__10431 = function (x,var_args){
var p__10420 = null;
if (goog.isDef(var_args)) {
  p__10420 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10431__delegate.call(this, x, p__10420);
};
G__10431.cljs$lang$maxFixedArity = 1;
G__10431.cljs$lang$applyTo = (function (arglist__10432){
var x = cljs.core.first(arglist__10432);
var p__10420 = cljs.core.rest(arglist__10432);
return G__10431__delegate(x, p__10420);
});
G__10431.cljs$lang$arity$variadic = G__10431__delegate;
return G__10431;
})()
;
atom = function(x,var_args){
var p__10420 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$lang$arity$1 = atom__1;
atom.cljs$lang$arity$variadic = atom__2.cljs$lang$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3974__auto____10436 = a.validator;
if(cljs.core.truth_(temp__3974__auto____10436))
{var validate__10437 = temp__3974__auto____10436;
if(cljs.core.truth_((validate__10437.cljs$lang$arity$1 ? validate__10437.cljs$lang$arity$1(new_value) : validate__10437.call(null,new_value))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6440))], 0)))].join('')));
}
} else
{}
var old_value__10438 = a.state;
a.state = new_value;
cljs.core._notify_watches(a,old_value__10438,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
return cljs.core.reset_BANG_(a,(f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(a.state) : f.call(null,a.state)));
});
var swap_BANG___3 = (function (a,f,x){
return cljs.core.reset_BANG_(a,(f.cljs$lang$arity$2 ? f.cljs$lang$arity$2(a.state,x) : f.call(null,a.state,x)));
});
var swap_BANG___4 = (function (a,f,x,y){
return cljs.core.reset_BANG_(a,(f.cljs$lang$arity$3 ? f.cljs$lang$arity$3(a.state,x,y) : f.call(null,a.state,x,y)));
});
var swap_BANG___5 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_(a,(f.cljs$lang$arity$4 ? f.cljs$lang$arity$4(a.state,x,y,z) : f.call(null,a.state,x,y,z)));
});
var swap_BANG___6 = (function() { 
var G__10439__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_(a,cljs.core.apply.cljs$lang$arity$variadic(f,a.state,x,y,z,cljs.core.array_seq([more], 0)));
};
var G__10439 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10439__delegate.call(this, a, f, x, y, z, more);
};
G__10439.cljs$lang$maxFixedArity = 5;
G__10439.cljs$lang$applyTo = (function (arglist__10440){
var a = cljs.core.first(arglist__10440);
var f = cljs.core.first(cljs.core.next(arglist__10440));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10440)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10440))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10440)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10440)))));
return G__10439__delegate(a, f, x, y, z, more);
});
G__10439.cljs$lang$arity$variadic = G__10439__delegate;
return G__10439;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
case 5:
return swap_BANG___5.call(this,a,f,x,y,z);
default:
return swap_BANG___6.cljs$lang$arity$variadic(a,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
swap_BANG_.cljs$lang$arity$2 = swap_BANG___2;
swap_BANG_.cljs$lang$arity$3 = swap_BANG___3;
swap_BANG_.cljs$lang$arity$4 = swap_BANG___4;
swap_BANG_.cljs$lang$arity$5 = swap_BANG___5;
swap_BANG_.cljs$lang$arity$variadic = swap_BANG___6.cljs$lang$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.cljs$lang$arity$2(a.state,oldval))
{cljs.core.reset_BANG_(a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref(o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.cljs$lang$arity$3(f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__10441){
var iref = cljs.core.first(arglist__10441);
var f = cljs.core.first(cljs.core.next(arglist__10441));
var args = cljs.core.rest(cljs.core.next(arglist__10441));
return alter_meta_BANG___delegate(iref, f, args);
});
alter_meta_BANG_.cljs$lang$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch(iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch(iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.cljs$lang$arity$1("G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = cljs.core.atom.cljs$lang$arity$1(0);
} else
{}
return cljs.core.symbol.cljs$lang$arity$1([cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.cljs$lang$arity$2(cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
gensym.cljs$lang$arity$0 = gensym__0;
gensym.cljs$lang$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073774592;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__10442 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref(this__10442.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10443 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.cljs$lang$arity$2(this__10443.state,(function (p__10444){
var map__10445__10446 = p__10444;
var map__10445__10447 = ((cljs.core.seq_QMARK_(map__10445__10446))?cljs.core.apply.cljs$lang$arity$2(cljs.core.hash_map,map__10445__10446):map__10445__10446);
var curr_state__10448 = map__10445__10447;
var done__10449 = cljs.core._lookup.cljs$lang$arity$3(map__10445__10447,"\uFDD0'done",null);
if(cljs.core.truth_(done__10449))
{return curr_state__10448;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":(this__10443.f.cljs$lang$arity$0 ? this__10443.f.cljs$lang$arity$0() : this__10443.f.call(null))});
}
})));
});
cljs.core.Delay;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_(cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_(x))
{return cljs.core.deref(x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_(d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__10470__10471 = options;
var map__10470__10472 = ((cljs.core.seq_QMARK_(map__10470__10471))?cljs.core.apply.cljs$lang$arity$2(cljs.core.hash_map,map__10470__10471):map__10470__10471);
var keywordize_keys__10473 = cljs.core._lookup.cljs$lang$arity$3(map__10470__10472,"\uFDD0'keywordize-keys",null);
var keyfn__10474 = (cljs.core.truth_(keywordize_keys__10473)?cljs.core.keyword:cljs.core.str);
var f__10489 = (function thisfn(x){
if(cljs.core.seq_QMARK_(x))
{return cljs.core.doall.cljs$lang$arity$1(cljs.core.map.cljs$lang$arity$2(thisfn,x));
} else
{if(cljs.core.coll_QMARK_(x))
{return cljs.core.into(cljs.core.empty(x),cljs.core.map.cljs$lang$arity$2(thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray(x)))
{return cljs.core.vec(cljs.core.map.cljs$lang$arity$2(thisfn,x));
} else
{if((cljs.core.type(x) === Object))
{return cljs.core.into(cljs.core.ObjMap.EMPTY,(function (){var iter__2469__auto____10488 = (function iter__10482(s__10483){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10483__10486 = s__10483;
while(true){
if(cljs.core.seq(s__10483__10486))
{var k__10487 = cljs.core.first(s__10483__10486);
return cljs.core.cons(cljs.core.PersistentVector.fromArray([(keyfn__10474.cljs$lang$arity$1 ? keyfn__10474.cljs$lang$arity$1(k__10487) : keyfn__10474.call(null,k__10487)),thisfn((x[k__10487]))], true),iter__10482(cljs.core.rest(s__10483__10486)));
} else
{return null;
}
break;
}
}),null));
});
return (iter__2469__auto____10488.cljs$lang$arity$1 ? iter__2469__auto____10488.cljs$lang$arity$1(cljs.core.js_keys(x)) : iter__2469__auto____10488.call(null,cljs.core.js_keys(x)));
})());
} else
{if("\uFDD0'else")
{return x;
} else
{return null;
}
}
}
}
}
});
return (f__10489.cljs$lang$arity$1 ? f__10489.cljs$lang$arity$1(x) : f__10489.call(null,x));
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__10490){
var x = cljs.core.first(arglist__10490);
var options = cljs.core.rest(arglist__10490);
return js__GT_clj__delegate(x, options);
});
js__GT_clj.cljs$lang$arity$variadic = js__GT_clj__delegate;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__10495 = cljs.core.atom.cljs$lang$arity$1(cljs.core.ObjMap.EMPTY);
return (function() { 
var G__10499__delegate = function (args){
var temp__3971__auto____10496 = cljs.core._lookup.cljs$lang$arity$3(cljs.core.deref(mem__10495),args,null);
if(cljs.core.truth_(temp__3971__auto____10496))
{var v__10497 = temp__3971__auto____10496;
return v__10497;
} else
{var ret__10498 = cljs.core.apply.cljs$lang$arity$2(f,args);
cljs.core.swap_BANG_.cljs$lang$arity$4(mem__10495,cljs.core.assoc,args,ret__10498);
return ret__10498;
}
};
var G__10499 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10499__delegate.call(this, args);
};
G__10499.cljs$lang$maxFixedArity = 0;
G__10499.cljs$lang$applyTo = (function (arglist__10500){
var args = cljs.core.seq(arglist__10500);;
return G__10499__delegate(args);
});
G__10499.cljs$lang$arity$variadic = G__10499__delegate;
return G__10499;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret__10502 = (f.cljs$lang$arity$0 ? f.cljs$lang$arity$0() : f.call(null));
if(cljs.core.fn_QMARK_(ret__10502))
{{
var G__10503 = ret__10502;
f = G__10503;
continue;
}
} else
{return ret__10502;
}
break;
}
});
var trampoline__2 = (function() { 
var G__10504__delegate = function (f,args){
return trampoline.cljs$lang$arity$1((function (){
return cljs.core.apply.cljs$lang$arity$2(f,args);
}));
};
var G__10504 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10504__delegate.call(this, f, args);
};
G__10504.cljs$lang$maxFixedArity = 1;
G__10504.cljs$lang$applyTo = (function (arglist__10505){
var f = cljs.core.first(arglist__10505);
var args = cljs.core.rest(arglist__10505);
return G__10504__delegate(f, args);
});
G__10504.cljs$lang$arity$variadic = G__10504__delegate;
return G__10504;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$lang$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$lang$arity$1 = trampoline__1;
trampoline.cljs$lang$arity$variadic = trampoline__2.cljs$lang$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.cljs$lang$arity$1(1);
});
var rand__1 = (function (n){
return ((Math.random.cljs$lang$arity$0 ? Math.random.cljs$lang$arity$0() : Math.random.call(null)) * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return (Math.floor.cljs$lang$arity$1 ? Math.floor.cljs$lang$arity$1(((Math.random.cljs$lang$arity$0 ? Math.random.cljs$lang$arity$0() : Math.random.call(null)) * n)) : Math.floor.call(null,((Math.random.cljs$lang$arity$0 ? Math.random.cljs$lang$arity$0() : Math.random.call(null)) * n)));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.cljs$lang$arity$2(coll,cljs.core.rand_int(cljs.core.count(coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.cljs$lang$arity$3((function (ret,x){
var k__10507 = (f.cljs$lang$arity$1 ? f.cljs$lang$arity$1(x) : f.call(null,x));
return cljs.core.assoc.cljs$lang$arity$3(ret,k__10507,cljs.core.conj.cljs$lang$arity$2(cljs.core._lookup.cljs$lang$arity$3(ret,k__10507,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.ObjMap.EMPTY,coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.EMPTY,"\uFDD0'descendants":cljs.core.ObjMap.EMPTY,"\uFDD0'ancestors":cljs.core.ObjMap.EMPTY});
});
cljs.core.global_hierarchy = cljs.core.atom.cljs$lang$arity$1(cljs.core.make_hierarchy());
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.cljs$lang$arity$3(cljs.core.deref(cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3824__auto____10516 = cljs.core._EQ_.cljs$lang$arity$2(child,parent);
if(or__3824__auto____10516)
{return or__3824__auto____10516;
} else
{var or__3824__auto____10517 = cljs.core.contains_QMARK_((new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3824__auto____10517)
{return or__3824__auto____10517;
} else
{var and__3822__auto____10518 = cljs.core.vector_QMARK_(parent);
if(and__3822__auto____10518)
{var and__3822__auto____10519 = cljs.core.vector_QMARK_(child);
if(and__3822__auto____10519)
{var and__3822__auto____10520 = (cljs.core.count(parent) === cljs.core.count(child));
if(and__3822__auto____10520)
{var ret__10521 = true;
var i__10522 = 0;
while(true){
if((function (){var or__3824__auto____10523 = cljs.core.not(ret__10521);
if(or__3824__auto____10523)
{return or__3824__auto____10523;
} else
{return (i__10522 === cljs.core.count(parent));
}
})())
{return ret__10521;
} else
{{
var G__10524 = isa_QMARK_.cljs$lang$arity$3(h,(child.cljs$lang$arity$1 ? child.cljs$lang$arity$1(i__10522) : child.call(null,i__10522)),(parent.cljs$lang$arity$1 ? parent.cljs$lang$arity$1(i__10522) : parent.call(null,i__10522)));
var G__10525 = (i__10522 + 1);
ret__10521 = G__10524;
i__10522 = G__10525;
continue;
}
}
break;
}
} else
{return and__3822__auto____10520;
}
} else
{return and__3822__auto____10519;
}
} else
{return and__3822__auto____10518;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
isa_QMARK_.cljs$lang$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$lang$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.cljs$lang$arity$2(cljs.core.deref(cljs.core.global_hierarchy),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty(cljs.core._lookup.cljs$lang$arity$3((new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,null));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
parents.cljs$lang$arity$1 = parents__1;
parents.cljs$lang$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.cljs$lang$arity$2(cljs.core.deref(cljs.core.global_hierarchy),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty(cljs.core._lookup.cljs$lang$arity$3((new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,null));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
ancestors.cljs$lang$arity$1 = ancestors__1;
ancestors.cljs$lang$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.cljs$lang$arity$2(cljs.core.deref(cljs.core.global_hierarchy),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty(cljs.core._lookup.cljs$lang$arity$3((new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),tag,null));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
descendants.cljs$lang$arity$1 = descendants__1;
descendants.cljs$lang$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace(parent)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6724))], 0)))].join('')));
}
cljs.core.swap_BANG_.cljs$lang$arity$4(cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.cljs$lang$arity$2(tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6728))], 0)))].join('')));
}
var tp__10534 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__10535 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__10536 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__10537 = (function (m,source,sources,target,targets){
return cljs.core.reduce.cljs$lang$arity$3((function (ret,k){
return cljs.core.assoc.cljs$lang$arity$3(ret,k,cljs.core.reduce.cljs$lang$arity$3(cljs.core.conj,cljs.core._lookup.cljs$lang$arity$3(targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons(target,(targets.cljs$lang$arity$1 ? targets.cljs$lang$arity$1(target) : targets.call(null,target)))));
}),m,cljs.core.cons(source,(sources.cljs$lang$arity$1 ? sources.cljs$lang$arity$1(source) : sources.call(null,source))));
});
var or__3824__auto____10538 = ((cljs.core.contains_QMARK_((tp__10534.cljs$lang$arity$1 ? tp__10534.cljs$lang$arity$1(tag) : tp__10534.call(null,tag)),parent))?null:(function (){if(cljs.core.contains_QMARK_((ta__10536.cljs$lang$arity$1 ? ta__10536.cljs$lang$arity$1(tag) : ta__10536.call(null,tag)),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_((ta__10536.cljs$lang$arity$1 ? ta__10536.cljs$lang$arity$1(parent) : ta__10536.call(null,parent)),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.cljs$lang$arity$3((new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.cljs$lang$arity$2(cljs.core._lookup.cljs$lang$arity$3(tp__10534,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":(tf__10537.cljs$lang$arity$5 ? tf__10537.cljs$lang$arity$5((new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__10535,parent,ta__10536) : tf__10537.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__10535,parent,ta__10536)),"\uFDD0'descendants":(tf__10537.cljs$lang$arity$5 ? tf__10537.cljs$lang$arity$5((new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__10536,tag,td__10535) : tf__10537.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__10536,tag,td__10535))});
})());
if(cljs.core.truth_(or__3824__auto____10538))
{return or__3824__auto____10538;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
derive.cljs$lang$arity$2 = derive__2;
derive.cljs$lang$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljs.core.swap_BANG_.cljs$lang$arity$4(cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap__10543 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__10544 = (cljs.core.truth_((parentMap__10543.cljs$lang$arity$1 ? parentMap__10543.cljs$lang$arity$1(tag) : parentMap__10543.call(null,tag)))?cljs.core.disj.cljs$lang$arity$2((parentMap__10543.cljs$lang$arity$1 ? parentMap__10543.cljs$lang$arity$1(tag) : parentMap__10543.call(null,tag)),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents__10545 = (cljs.core.truth_(cljs.core.not_empty(childsParents__10544))?cljs.core.assoc.cljs$lang$arity$3(parentMap__10543,tag,childsParents__10544):cljs.core.dissoc.cljs$lang$arity$2(parentMap__10543,tag));
var deriv_seq__10546 = cljs.core.flatten(cljs.core.map.cljs$lang$arity$2((function (p1__10526_SHARP_){
return cljs.core.cons(cljs.core.first(p1__10526_SHARP_),cljs.core.interpose(cljs.core.first(p1__10526_SHARP_),cljs.core.second(p1__10526_SHARP_)));
}),cljs.core.seq(newParents__10545)));
if(cljs.core.contains_QMARK_((parentMap__10543.cljs$lang$arity$1 ? parentMap__10543.cljs$lang$arity$1(tag) : parentMap__10543.call(null,tag)),parent))
{return cljs.core.reduce.cljs$lang$arity$3((function (p1__10527_SHARP_,p2__10528_SHARP_){
return cljs.core.apply.cljs$lang$arity$3(cljs.core.derive,p1__10527_SHARP_,p2__10528_SHARP_);
}),cljs.core.make_hierarchy(),cljs.core.partition.cljs$lang$arity$2(2,deriv_seq__10546));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
underive.cljs$lang$arity$2 = underive__2;
underive.cljs$lang$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.cljs$lang$arity$2(method_cache,(function (_){
return cljs.core.deref(method_table);
}));
return cljs.core.swap_BANG_.cljs$lang$arity$2(cached_hierarchy,(function (_){
return cljs.core.deref(hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__10554 = cljs.core.deref(prefer_table).call(null,x);
var or__3824__auto____10556 = (cljs.core.truth_((function (){var and__3822__auto____10555 = xprefs__10554;
if(cljs.core.truth_(and__3822__auto____10555))
{return (xprefs__10554.cljs$lang$arity$1 ? xprefs__10554.cljs$lang$arity$1(y) : xprefs__10554.call(null,y));
} else
{return and__3822__auto____10555;
}
})())?true:null);
if(cljs.core.truth_(or__3824__auto____10556))
{return or__3824__auto____10556;
} else
{var or__3824__auto____10558 = (function (){var ps__10557 = cljs.core.parents.cljs$lang$arity$1(y);
while(true){
if((cljs.core.count(ps__10557) > 0))
{if(cljs.core.truth_(prefers_STAR_(x,cljs.core.first(ps__10557),prefer_table)))
{} else
{}
{
var G__10561 = cljs.core.rest(ps__10557);
ps__10557 = G__10561;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____10558))
{return or__3824__auto____10558;
} else
{var or__3824__auto____10560 = (function (){var ps__10559 = cljs.core.parents.cljs$lang$arity$1(x);
while(true){
if((cljs.core.count(ps__10559) > 0))
{if(cljs.core.truth_(prefers_STAR_(cljs.core.first(ps__10559),y,prefer_table)))
{} else
{}
{
var G__10562 = cljs.core.rest(ps__10559);
ps__10559 = G__10562;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3824__auto____10560))
{return or__3824__auto____10560;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3824__auto____10564 = cljs.core.prefers_STAR_(x,y,prefer_table);
if(cljs.core.truth_(or__3824__auto____10564))
{return or__3824__auto____10564;
} else
{return cljs.core.isa_QMARK_.cljs$lang$arity$2(x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__10582 = cljs.core.reduce.cljs$lang$arity$3((function (be,p__10574){
var vec__10575__10576 = p__10574;
var k__10577 = cljs.core.nth.cljs$lang$arity$3(vec__10575__10576,0,null);
var ___10578 = cljs.core.nth.cljs$lang$arity$3(vec__10575__10576,1,null);
var e__10579 = vec__10575__10576;
if(cljs.core.isa_QMARK_.cljs$lang$arity$2(dispatch_val,k__10577))
{var be2__10581 = (cljs.core.truth_((function (){var or__3824__auto____10580 = (be == null);
if(or__3824__auto____10580)
{return or__3824__auto____10580;
} else
{return cljs.core.dominates(k__10577,cljs.core.first(be),prefer_table);
}
})())?e__10579:be);
if(cljs.core.truth_(cljs.core.dominates(cljs.core.first(be2__10581),k__10577,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__10577),cljs.core.str(" and "),cljs.core.str(cljs.core.first(be2__10581)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__10581;
} else
{return be;
}
}),null,cljs.core.deref(method_table));
if(cljs.core.truth_(best_entry__10582))
{if(cljs.core._EQ_.cljs$lang$arity$2(cljs.core.deref(cached_hierarchy),cljs.core.deref(hierarchy)))
{cljs.core.swap_BANG_.cljs$lang$arity$4(method_cache,cljs.core.assoc,dispatch_val,cljs.core.second(best_entry__10582));
return cljs.core.second(best_entry__10582);
} else
{cljs.core.reset_cache(method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if((function (){var and__3822__auto____10587 = mf;
if(and__3822__auto____10587)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3822__auto____10587;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2370__auto____10588 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10589 = (cljs.core._reset[goog.typeOf(x__2370__auto____10588)]);
if(or__3824__auto____10589)
{return or__3824__auto____10589;
} else
{var or__3824__auto____10590 = (cljs.core._reset["_"]);
if(or__3824__auto____10590)
{return or__3824__auto____10590;
} else
{throw cljs.core.missing_protocol("IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3822__auto____10595 = mf;
if(and__3822__auto____10595)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3822__auto____10595;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2370__auto____10596 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10597 = (cljs.core._add_method[goog.typeOf(x__2370__auto____10596)]);
if(or__3824__auto____10597)
{return or__3824__auto____10597;
} else
{var or__3824__auto____10598 = (cljs.core._add_method["_"]);
if(or__3824__auto____10598)
{return or__3824__auto____10598;
} else
{throw cljs.core.missing_protocol("IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3822__auto____10603 = mf;
if(and__3822__auto____10603)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3822__auto____10603;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2370__auto____10604 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10605 = (cljs.core._remove_method[goog.typeOf(x__2370__auto____10604)]);
if(or__3824__auto____10605)
{return or__3824__auto____10605;
} else
{var or__3824__auto____10606 = (cljs.core._remove_method["_"]);
if(or__3824__auto____10606)
{return or__3824__auto____10606;
} else
{throw cljs.core.missing_protocol("IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3822__auto____10611 = mf;
if(and__3822__auto____10611)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3822__auto____10611;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2370__auto____10612 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10613 = (cljs.core._prefer_method[goog.typeOf(x__2370__auto____10612)]);
if(or__3824__auto____10613)
{return or__3824__auto____10613;
} else
{var or__3824__auto____10614 = (cljs.core._prefer_method["_"]);
if(or__3824__auto____10614)
{return or__3824__auto____10614;
} else
{throw cljs.core.missing_protocol("IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3822__auto____10619 = mf;
if(and__3822__auto____10619)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3822__auto____10619;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2370__auto____10620 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10621 = (cljs.core._get_method[goog.typeOf(x__2370__auto____10620)]);
if(or__3824__auto____10621)
{return or__3824__auto____10621;
} else
{var or__3824__auto____10622 = (cljs.core._get_method["_"]);
if(or__3824__auto____10622)
{return or__3824__auto____10622;
} else
{throw cljs.core.missing_protocol("IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3822__auto____10627 = mf;
if(and__3822__auto____10627)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3822__auto____10627;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2370__auto____10628 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10629 = (cljs.core._methods[goog.typeOf(x__2370__auto____10628)]);
if(or__3824__auto____10629)
{return or__3824__auto____10629;
} else
{var or__3824__auto____10630 = (cljs.core._methods["_"]);
if(or__3824__auto____10630)
{return or__3824__auto____10630;
} else
{throw cljs.core.missing_protocol("IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3822__auto____10635 = mf;
if(and__3822__auto____10635)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3822__auto____10635;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2370__auto____10636 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10637 = (cljs.core._prefers[goog.typeOf(x__2370__auto____10636)]);
if(or__3824__auto____10637)
{return or__3824__auto____10637;
} else
{var or__3824__auto____10638 = (cljs.core._prefers["_"]);
if(or__3824__auto____10638)
{return or__3824__auto____10638;
} else
{throw cljs.core.missing_protocol("IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3822__auto____10643 = mf;
if(and__3822__auto____10643)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3822__auto____10643;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2370__auto____10644 = (((mf == null))?null:mf);
return (function (){var or__3824__auto____10645 = (cljs.core._dispatch[goog.typeOf(x__2370__auto____10644)]);
if(or__3824__auto____10645)
{return or__3824__auto____10645;
} else
{var or__3824__auto____10646 = (cljs.core._dispatch["_"]);
if(or__3824__auto____10646)
{return or__3824__auto____10646;
} else
{throw cljs.core.missing_protocol("IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__10649 = cljs.core.apply.cljs$lang$arity$2(dispatch_fn,args);
var target_fn__10650 = cljs.core._get_method(mf,dispatch_val__10649);
if(cljs.core.truth_(target_fn__10650))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__10649)].join('')));
}
return cljs.core.apply.cljs$lang$arity$2(target_fn__10650,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194304;
this.cljs$lang$protocol_mask$partition1$ = 64;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10651 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__10652 = this;
cljs.core.swap_BANG_.cljs$lang$arity$2(this__10652.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.cljs$lang$arity$2(this__10652.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.cljs$lang$arity$2(this__10652.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.cljs$lang$arity$2(this__10652.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__10653 = this;
cljs.core.swap_BANG_.cljs$lang$arity$4(this__10653.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache(this__10653.method_cache,this__10653.method_table,this__10653.cached_hierarchy,this__10653.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__10654 = this;
cljs.core.swap_BANG_.cljs$lang$arity$3(this__10654.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache(this__10654.method_cache,this__10654.method_table,this__10654.cached_hierarchy,this__10654.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__10655 = this;
if(cljs.core._EQ_.cljs$lang$arity$2(cljs.core.deref(this__10655.cached_hierarchy),cljs.core.deref(this__10655.hierarchy)))
{} else
{cljs.core.reset_cache(this__10655.method_cache,this__10655.method_table,this__10655.cached_hierarchy,this__10655.hierarchy);
}
var temp__3971__auto____10656 = cljs.core.deref(this__10655.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__3971__auto____10656))
{var target_fn__10657 = temp__3971__auto____10656;
return target_fn__10657;
} else
{var temp__3971__auto____10658 = cljs.core.find_and_cache_best_method(this__10655.name,dispatch_val,this__10655.hierarchy,this__10655.method_table,this__10655.prefer_table,this__10655.method_cache,this__10655.cached_hierarchy);
if(cljs.core.truth_(temp__3971__auto____10658))
{var target_fn__10659 = temp__3971__auto____10658;
return target_fn__10659;
} else
{return cljs.core.deref(this__10655.method_table).call(null,this__10655.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__10660 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_(dispatch_val_x,dispatch_val_y,this__10660.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__10660.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.cljs$lang$arity$2(this__10660.prefer_table,(function (old){
return cljs.core.assoc.cljs$lang$arity$3(old,dispatch_val_x,cljs.core.conj.cljs$lang$arity$2(cljs.core._lookup.cljs$lang$arity$3(old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache(this__10660.method_cache,this__10660.method_table,this__10660.cached_hierarchy,this__10660.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__10661 = this;
return cljs.core.deref(this__10661.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__10662 = this;
return cljs.core.deref(this__10662.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__10663 = this;
return cljs.core.do_dispatch(mf,this__10663.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__10665__delegate = function (_,args){
var self__10664 = this;
return cljs.core._dispatch(self__10664,args);
};
var G__10665 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10665__delegate.call(this, _, args);
};
G__10665.cljs$lang$maxFixedArity = 1;
G__10665.cljs$lang$applyTo = (function (arglist__10666){
var _ = cljs.core.first(arglist__10666);
var args = cljs.core.rest(arglist__10666);
return G__10665__delegate(_, args);
});
G__10665.cljs$lang$arity$variadic = G__10665__delegate;
return G__10665;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__10667 = this;
return cljs.core._dispatch(self__10667,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset(multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method(multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method(multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods(multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method(multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers(multifn);
});

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 543162368;
})
cljs.core.UUID.cljs$lang$type = true;
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__2316__auto__){
return cljs.core.list.cljs$lang$arity$1("cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10668 = this;
return goog.string.hashCode(cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this$], 0)));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_10670,_){
var this__10669 = this;
return cljs.core.list.cljs$lang$arity$1([cljs.core.str("#uuid \""),cljs.core.str(this__10669.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__10671 = this;
var and__3822__auto____10672 = cljs.core.instance_QMARK_(cljs.core.UUID,other);
if(and__3822__auto____10672)
{return (this__10671.uuid === other.uuid);
} else
{return and__3822__auto____10672;
}
});
cljs.core.UUID.prototype.toString = (function (){
var this__10673 = this;
var this__10674 = this;
return cljs.core.pr_str.cljs$lang$arity$variadic(cljs.core.array_seq([this__10674], 0));
});
cljs.core.UUID;
