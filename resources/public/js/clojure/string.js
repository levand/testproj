goog.provide('clojure.string');
goog.require('cljs.core');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
clojure.string.seq_reverse = (function seq_reverse(coll){
return cljs.core.reduce.cljs$lang$arity$3(cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* Returns s with its characters reversed.
*/
clojure.string.reverse = (function reverse(s){
return s.split("").reverse().join("");
});
/**
* Replaces all instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace = (function replace(s,match,replacement){
if(cljs.core.string_QMARK_(match))
{return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else
{if(cljs.core.truth_(match.hasOwnProperty("source")))
{return s.replace((new RegExp(match.source,"g")),replacement);
} else
{if("\uFDD0'else")
{throw [cljs.core.str("Invalid match arg: "),cljs.core.str(match)].join('');
} else
{return null;
}
}
}
});
/**
* Replaces the first instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace_first = (function replace_first(s,match,replacement){
return s.replace(match,replacement);
});
/**
* Returns a string of all elements in coll, as returned by (seq coll),
* separated by an optional separator.
*/
clojure.string.join = (function() {
var join = null;
var join__1 = (function (coll){
return cljs.core.apply.cljs$lang$arity$2(cljs.core.str,coll);
});
var join__2 = (function (separator,coll){
return cljs.core.apply.cljs$lang$arity$2(cljs.core.str,cljs.core.interpose(separator,coll));
});
join = function(separator,coll){
switch(arguments.length){
case 1:
return join__1.call(this,separator);
case 2:
return join__2.call(this,separator,coll);
}
throw('Invalid arity: ' + arguments.length);
};
join.cljs$lang$arity$1 = join__1;
join.cljs$lang$arity$2 = join__2;
return join;
})()
;
/**
* Converts string to all upper-case.
*/
clojure.string.upper_case = (function upper_case(s){
return s.toUpperCase();
});
/**
* Converts string to all lower-case.
*/
clojure.string.lower_case = (function lower_case(s){
return s.toLowerCase();
});
/**
* Converts first character of the string to upper-case, all other
* characters to lower-case.
*/
clojure.string.capitalize = (function capitalize(s){
if((cljs.core.count(s) < 2))
{return clojure.string.upper_case(s);
} else
{return [cljs.core.str(clojure.string.upper_case(cljs.core.subs.cljs$lang$arity$3(s,0,1))),cljs.core.str(clojure.string.lower_case(cljs.core.subs.cljs$lang$arity$2(s,1)))].join('');
}
});
/**
* Splits string on a regular expression. Optional argument limit is
* the maximum number of splits. Not lazy. Returns vector of the splits.
*/
clojure.string.split = (function() {
var split = null;
var split__2 = (function (s,re){
return cljs.core.vec([cljs.core.str(s)].join('').split(re));
});
var split__3 = (function (s,re,limit){
if((limit < 1))
{return cljs.core.vec([cljs.core.str(s)].join('').split(re));
} else
{var s__11287 = s;
var limit__11288 = limit;
var parts__11289 = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core._EQ_.cljs$lang$arity$2(limit__11288,1))
{return cljs.core.conj.cljs$lang$arity$2(parts__11289,s__11287);
} else
{var temp__3971__auto____11290 = cljs.core.re_find(re,s__11287);
if(cljs.core.truth_(temp__3971__auto____11290))
{var m__11291 = temp__3971__auto____11290;
var index__11292 = s__11287.indexOf(m__11291);
{
var G__11293 = s__11287.substring((index__11292 + cljs.core.count(m__11291)));
var G__11294 = (limit__11288 - 1);
var G__11295 = cljs.core.conj.cljs$lang$arity$2(parts__11289,s__11287.substring(0,index__11292));
s__11287 = G__11293;
limit__11288 = G__11294;
parts__11289 = G__11295;
continue;
}
} else
{return cljs.core.conj.cljs$lang$arity$2(parts__11289,s__11287);
}
}
break;
}
}
});
split = function(s,re,limit){
switch(arguments.length){
case 2:
return split__2.call(this,s,re);
case 3:
return split__3.call(this,s,re,limit);
}
throw('Invalid arity: ' + arguments.length);
};
split.cljs$lang$arity$2 = split__2;
split.cljs$lang$arity$3 = split__3;
return split;
})()
;
/**
* Splits s on
* or
* .
*/
clojure.string.split_lines = (function split_lines(s){
return clojure.string.split.cljs$lang$arity$2(s,/\n|\r\n/);
});
/**
* Removes whitespace from both ends of string.
*/
clojure.string.trim = (function trim(s){
return goog.string.trim(s);
});
/**
* Removes whitespace from the left side of string.
*/
clojure.string.triml = (function triml(s){
return goog.string.trimLeft(s);
});
/**
* Removes whitespace from the right side of string.
*/
clojure.string.trimr = (function trimr(s){
return goog.string.trimRight(s);
});
/**
* Removes all trailing newline \n or return \r characters from
* string.  Similar to Perl's chomp.
*/
clojure.string.trim_newline = (function trim_newline(s){
var index__11299 = s.length;
while(true){
if((index__11299 === 0))
{return "";
} else
{var ch__11300 = cljs.core._lookup.cljs$lang$arity$3(s,(index__11299 - 1),null);
if((function (){var or__3824__auto____11301 = cljs.core._EQ_.cljs$lang$arity$2(ch__11300,"\n");
if(or__3824__auto____11301)
{return or__3824__auto____11301;
} else
{return cljs.core._EQ_.cljs$lang$arity$2(ch__11300,"\r");
}
})())
{{
var G__11302 = (index__11299 - 1);
index__11299 = G__11302;
continue;
}
} else
{return s.substring(0,index__11299);
}
}
break;
}
});
/**
* True is s is nil, empty, or contains only whitespace.
*/
clojure.string.blank_QMARK_ = (function blank_QMARK_(s){
var s__11306 = [cljs.core.str(s)].join('');
if(cljs.core.truth_((function (){var or__3824__auto____11307 = cljs.core.not(s__11306);
if(or__3824__auto____11307)
{return or__3824__auto____11307;
} else
{var or__3824__auto____11308 = cljs.core._EQ_.cljs$lang$arity$2("",s__11306);
if(or__3824__auto____11308)
{return or__3824__auto____11308;
} else
{return cljs.core.re_matches(/\s+/,s__11306);
}
}
})()))
{return true;
} else
{return false;
}
});
/**
* Return a new string, using cmap to escape each character ch
* from s as follows:
* 
* If (cmap ch) is nil, append ch to the new string.
* If (cmap ch) is non-nil, append (str (cmap ch)) instead.
*/
clojure.string.escape = (function escape(s,cmap){
var buffer__11315 = (new goog.string.StringBuffer());
var length__11316 = s.length;
var index__11317 = 0;
while(true){
if(cljs.core._EQ_.cljs$lang$arity$2(length__11316,index__11317))
{return buffer__11315.toString();
} else
{var ch__11318 = s.charAt(index__11317);
var temp__3971__auto____11319 = cljs.core._lookup.cljs$lang$arity$3(cmap,ch__11318,null);
if(cljs.core.truth_(temp__3971__auto____11319))
{var replacement__11320 = temp__3971__auto____11319;
buffer__11315.append([cljs.core.str(replacement__11320)].join(''));
} else
{buffer__11315.append(ch__11318);
}
{
var G__11321 = (index__11317 + 1);
index__11317 = G__11321;
continue;
}
}
break;
}
});
