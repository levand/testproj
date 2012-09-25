function e(a) {
  throw a;
}
var aa = void 0, g = !0, l = null, m = !1;
function ba() {
  return function(a) {
    return a
  }
}
function o(a) {
  return function() {
    return this[a]
  }
}
function p(a) {
  return function() {
    return a
  }
}
var q, ca = this;
function da(a, b) {
  var c = a.split("."), d = ca;
  !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
  for(var f;c.length && (f = c.shift());) {
    !c.length && s(b) ? d[f] = b : d = d[f] ? d[f] : d[f] = {}
  }
}
function ea() {
}
function v(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
}
function s(a) {
  return a !== aa
}
function fa(a) {
  var b = v(a);
  return"array" == b || "object" == b && "number" == typeof a.length
}
function ga(a) {
  return"string" == typeof a
}
function ha(a) {
  return"function" == v(a)
}
function ia(a) {
  a = v(a);
  return"object" == a || "array" == a || "function" == a
}
function ja(a) {
  return a[ka] || (a[ka] = ++la)
}
var ka = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), la = 0;
function ma(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.wc = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
}
;function na(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}
var qa = {"\x00":"\\0", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\"}, ra = {"'":"\\'"};
function sa(a) {
  a = "" + a;
  if(a.quote) {
    return a.quote()
  }
  for(var b = ['"'], c = 0;c < a.length;c++) {
    var d = a.charAt(c), f = d.charCodeAt(0), h = b, i = c + 1, j;
    if(!(j = qa[d])) {
      if(!(31 < f && 127 > f)) {
        if(d in ra) {
          d = ra[d]
        }else {
          if(d in qa) {
            d = ra[d] = qa[d]
          }else {
            f = d;
            j = d.charCodeAt(0);
            if(31 < j && 127 > j) {
              f = d
            }else {
              if(256 > j) {
                if(f = "\\x", 16 > j || 256 < j) {
                  f += "0"
                }
              }else {
                f = "\\u", 4096 > j && (f += "0")
              }
              f += j.toString(16).toUpperCase()
            }
            d = ra[d] = f
          }
        }
      }
      j = d
    }
    h[i] = j
  }
  b.push('"');
  return b.join("")
}
function ta(a, b) {
  for(var c = 0, d = na("" + a).split("."), f = na("" + b).split("."), h = Math.max(d.length, f.length), i = 0;0 == c && i < h;i++) {
    var j = d[i] || "", k = f[i] || "", n = RegExp("(\\d*)(\\D*)", "g"), t = RegExp("(\\d*)(\\D*)", "g");
    do {
      var r = n.exec(j) || ["", "", ""], u = t.exec(k) || ["", "", ""];
      if(0 == r[0].length && 0 == u[0].length) {
        break
      }
      c = ((0 == r[1].length ? 0 : parseInt(r[1], 10)) < (0 == u[1].length ? 0 : parseInt(u[1], 10)) ? -1 : (0 == r[1].length ? 0 : parseInt(r[1], 10)) > (0 == u[1].length ? 0 : parseInt(u[1], 10)) ? 1 : 0) || ((0 == r[2].length) < (0 == u[2].length) ? -1 : (0 == r[2].length) > (0 == u[2].length) ? 1 : 0) || (r[2] < u[2] ? -1 : r[2] > u[2] ? 1 : 0)
    }while(0 == c)
  }
  return c
}
function ua(a) {
  for(var b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296
  }
  return b
}
;var va = Array.prototype, wa = va.indexOf ? function(a, b, c) {
  return va.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == l ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(ga(a)) {
    return!ga(b) || 1 != b.length ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, xa = va.forEach ? function(a, b, c) {
  va.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, f = ga(a) ? a.split("") : a, h = 0;h < d;h++) {
    h in f && b.call(c, f[h], h, a)
  }
};
function ya(a) {
  return va.concat.apply(va, arguments)
}
function za(a) {
  if("array" == v(a)) {
    return ya(a)
  }
  for(var b = [], c = 0, d = a.length;c < d;c++) {
    b[c] = a[c]
  }
  return b
}
;function Aa(a, b) {
  for(var c in a) {
    b.call(aa, a[c], c, a)
  }
}
function Ba(a) {
  var b = {}, c;
  for(c in a) {
    b[c] = a[c]
  }
  return b
}
;function Ca(a, b) {
  var c = Array.prototype.slice.call(arguments), d = c.shift();
  "undefined" == typeof d && e(Error("[goog.string.format] Template required"));
  return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, j, k, n, t, r) {
    if("%" == n) {
      return"%"
    }
    var u = c.shift();
    "undefined" == typeof u && e(Error("[goog.string.format] Not enough arguments"));
    arguments[0] = u;
    return Ca.ia[n].apply(l, arguments)
  })
}
Ca.ia = {};
Ca.ia.s = function(a, b, c) {
  return isNaN(c) || a.length >= c ? a : a = -1 < b.indexOf("-", 0) ? a + Array(c - a.length + 1).join(" ") : Array(c - a.length + 1).join(" ") + a
};
Ca.ia.f = function(a, b, c, d, f) {
  d = a.toString();
  isNaN(f) || "" == f || (d = a.toFixed(f));
  var h;
  h = 0 > a ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
  0 <= a && (d = h + d);
  if(isNaN(c) || d.length >= c) {
    return d
  }
  d = isNaN(f) ? Math.abs(a).toString() : Math.abs(a).toFixed(f);
  a = c - d.length - h.length;
  return d = 0 <= b.indexOf("-", 0) ? h + d + Array(a + 1).join(" ") : h + Array(a + 1).join(0 <= b.indexOf("0", 0) ? "0" : " ") + d
};
Ca.ia.d = function(a, b, c, d, f, h, i, j) {
  a = parseInt(a, 10);
  return Ca.ia.f(a, b, c, d, 0, h, i, j)
};
Ca.ia.i = Ca.ia.d;
Ca.ia.u = Ca.ia.d;
var Da, Ea, Fa, Ga, Ha, Ia = (Ha = "ScriptEngine" in ca && "JScript" == ca.ScriptEngine()) ? ca.ScriptEngineMajorVersion() + "." + ca.ScriptEngineMinorVersion() + "." + ca.ScriptEngineBuildVersion() : "0";
function Ja(a, b) {
  this.X = Ha ? [] : "";
  a != l && this.append.apply(this, arguments)
}
Ha ? (Ja.prototype.rb = 0, Ja.prototype.append = function(a, b, c) {
  b == l ? this.X[this.rb++] = a : (this.X.push.apply(this.X, arguments), this.rb = this.X.length);
  return this
}) : Ja.prototype.append = function(a, b, c) {
  this.X += a;
  if(b != l) {
    for(var d = 1;d < arguments.length;d++) {
      this.X += arguments[d]
    }
  }
  return this
};
Ja.prototype.clear = function() {
  if(Ha) {
    this.rb = this.X.length = 0
  }else {
    this.X = ""
  }
};
Ja.prototype.toString = function() {
  if(Ha) {
    var a = this.X.join("");
    this.clear();
    a && this.append(a);
    return a
  }
  return this.X
};
function w(a) {
  return a != l && a !== m
}
function x(a, b) {
  return a[v(b == l ? l : b)] ? g : a._ ? g : m
}
function z(a, b) {
  return Error(["No protocol method ", a, " defined for type ", v(b), ": ", b].join(""))
}
var Ka = function() {
  var a = l, a = function(b, c) {
    switch(arguments.length) {
      case 1:
        return Array(b);
      case 2:
        return a.b(c)
    }
    e("Invalid arity: " + arguments.length)
  };
  a.b = function(a) {
    return Array(a)
  };
  a.a = function(b, c) {
    return a.b(c)
  };
  return a
}(), La = {};
function Ma(a) {
  if(a ? a.z : a) {
    return a.z(a)
  }
  var b;
  var c = Ma[v(a == l ? l : a)];
  c ? b = c : (c = Ma._) ? b = c : e(z("ICounted.-count", a));
  return b.call(l, a)
}
function Na(a, b) {
  if(a ? a.G : a) {
    return a.G(a, b)
  }
  var c;
  var d = Na[v(a == l ? l : a)];
  d ? c = d : (d = Na._) ? c = d : e(z("ICollection.-conj", a));
  return c.call(l, a, b)
}
var Oa = {}, A = function() {
  function a(a, b, c) {
    if(a ? a.J : a) {
      return a.J(a, b, c)
    }
    var i;
    var j = A[v(a == l ? l : a)];
    j ? i = j : (j = A._) ? i = j : e(z("IIndexed.-nth", a));
    return i.call(l, a, b, c)
  }
  function b(a, b) {
    if(a ? a.N : a) {
      return a.N(a, b)
    }
    var c;
    var i = A[v(a == l ? l : a)];
    i ? c = i : (i = A._) ? c = i : e(z("IIndexed.-nth", a));
    return c.call(l, a, b)
  }
  var c = l, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.c = a;
  return c
}(), Pa = {}, Qa = {};
function C(a) {
  if(a ? a.T : a) {
    return a.T(a)
  }
  var b;
  var c = C[v(a == l ? l : a)];
  c ? b = c : (c = C._) ? b = c : e(z("ISeq.-first", a));
  return b.call(l, a)
}
function D(a) {
  if(a ? a.R : a) {
    return a.R(a)
  }
  var b;
  var c = D[v(a == l ? l : a)];
  c ? b = c : (c = D._) ? b = c : e(z("ISeq.-rest", a));
  return b.call(l, a)
}
var Ra = {};
function Sa(a) {
  if(a ? a.ma : a) {
    return a.ma(a)
  }
  var b;
  var c = Sa[v(a == l ? l : a)];
  c ? b = c : (c = Sa._) ? b = c : e(z("INext.-next", a));
  return b.call(l, a)
}
var E = function() {
  function a(a, b, c) {
    if(a ? a.p : a) {
      return a.p(a, b, c)
    }
    var i;
    var j = E[v(a == l ? l : a)];
    j ? i = j : (j = E._) ? i = j : e(z("ILookup.-lookup", a));
    return i.call(l, a, b, c)
  }
  function b(a, b) {
    if(a ? a.v : a) {
      return a.v(a, b)
    }
    var c;
    var i = E[v(a == l ? l : a)];
    i ? c = i : (i = E._) ? c = i : e(z("ILookup.-lookup", a));
    return c.call(l, a, b)
  }
  var c = l, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.c = a;
  return c
}();
function Ta(a, b) {
  if(a ? a.Fa : a) {
    return a.Fa(a, b)
  }
  var c;
  var d = Ta[v(a == l ? l : a)];
  d ? c = d : (d = Ta._) ? c = d : e(z("IAssociative.-contains-key?", a));
  return c.call(l, a, b)
}
function Ua(a, b, c) {
  if(a ? a.M : a) {
    return a.M(a, b, c)
  }
  var d;
  var f = Ua[v(a == l ? l : a)];
  f ? d = f : (f = Ua._) ? d = f : e(z("IAssociative.-assoc", a));
  return d.call(l, a, b, c)
}
var Va = {}, Wa = {};
function Xa(a) {
  if(a ? a.fb : a) {
    return a.fb(a)
  }
  var b;
  var c = Xa[v(a == l ? l : a)];
  c ? b = c : (c = Xa._) ? b = c : e(z("IMapEntry.-key", a));
  return b.call(l, a)
}
function Ya(a) {
  if(a ? a.gb : a) {
    return a.gb(a)
  }
  var b;
  var c = Ya[v(a == l ? l : a)];
  c ? b = c : (c = Ya._) ? b = c : e(z("IMapEntry.-val", a));
  return b.call(l, a)
}
var Za = {};
function ab(a) {
  if(a ? a.ga : a) {
    return a.ga(a)
  }
  var b;
  var c = ab[v(a == l ? l : a)];
  c ? b = c : (c = ab._) ? b = c : e(z("IStack.-peek", a));
  return b.call(l, a)
}
var bb = {};
function cb(a, b, c) {
  if(a ? a.Ja : a) {
    return a.Ja(a, b, c)
  }
  var d;
  var f = cb[v(a == l ? l : a)];
  f ? d = f : (f = cb._) ? d = f : e(z("IVector.-assoc-n", a));
  return d.call(l, a, b, c)
}
function db(a) {
  if(a ? a.eb : a) {
    return a.eb(a)
  }
  var b;
  var c = db[v(a == l ? l : a)];
  c ? b = c : (c = db._) ? b = c : e(z("IDeref.-deref", a));
  return b.call(l, a)
}
var eb = {};
function fb(a) {
  if(a ? a.C : a) {
    return a.C(a)
  }
  var b;
  var c = fb[v(a == l ? l : a)];
  c ? b = c : (c = fb._) ? b = c : e(z("IMeta.-meta", a));
  return b.call(l, a)
}
function F(a, b) {
  if(a ? a.F : a) {
    return a.F(a, b)
  }
  var c;
  var d = F[v(a == l ? l : a)];
  d ? c = d : (d = F._) ? c = d : e(z("IWithMeta.-with-meta", a));
  return c.call(l, a, b)
}
var gb = {}, hb = function() {
  function a(a, b, c) {
    if(a ? a.fa : a) {
      return a.fa(a, b, c)
    }
    var i;
    var j = hb[v(a == l ? l : a)];
    j ? i = j : (j = hb._) ? i = j : e(z("IReduce.-reduce", a));
    return i.call(l, a, b, c)
  }
  function b(a, b) {
    if(a ? a.ea : a) {
      return a.ea(a, b)
    }
    var c;
    var i = hb[v(a == l ? l : a)];
    i ? c = i : (i = hb._) ? c = i : e(z("IReduce.-reduce", a));
    return c.call(l, a, b)
  }
  var c = l, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.c = a;
  return c
}();
function ib(a, b) {
  if(a ? a.B : a) {
    return a.B(a, b)
  }
  var c;
  var d = ib[v(a == l ? l : a)];
  d ? c = d : (d = ib._) ? c = d : e(z("IEquiv.-equiv", a));
  return c.call(l, a, b)
}
function jb(a) {
  if(a ? a.H : a) {
    return a.H(a)
  }
  var b;
  var c = jb[v(a == l ? l : a)];
  c ? b = c : (c = jb._) ? b = c : e(z("IHash.-hash", a));
  return b.call(l, a)
}
var lb = {};
function mb(a) {
  if(a ? a.A : a) {
    return a.A(a)
  }
  var b;
  var c = mb[v(a == l ? l : a)];
  c ? b = c : (c = mb._) ? b = c : e(z("ISeqable.-seq", a));
  return b.call(l, a)
}
var nb = {}, ob = {};
function pb(a) {
  if(a ? a.Va : a) {
    return a.Va(a)
  }
  var b;
  var c = pb[v(a == l ? l : a)];
  c ? b = c : (c = pb._) ? b = c : e(z("IReversible.-rseq", a));
  return b.call(l, a)
}
var qb = {};
function rb(a, b) {
  if(a ? a.D : a) {
    return a.D(a, b)
  }
  var c;
  var d = rb[v(a == l ? l : a)];
  d ? c = d : (d = rb._) ? c = d : e(z("IPrintable.-pr-seq", a));
  return c.call(l, a, b)
}
function sb(a, b, c) {
  if(a ? a.jc : a) {
    return a.jc(a, b, c)
  }
  var d;
  var f = sb[v(a == l ? l : a)];
  f ? d = f : (f = sb._) ? d = f : e(z("IWatchable.-notify-watches", a));
  return d.call(l, a, b, c)
}
var tb = {};
function ub(a) {
  if(a ? a.Ga : a) {
    return a.Ga(a)
  }
  var b;
  var c = ub[v(a == l ? l : a)];
  c ? b = c : (c = ub._) ? b = c : e(z("IEditableCollection.-as-transient", a));
  return b.call(l, a)
}
function vb(a, b) {
  if(a ? a.Ia : a) {
    return a.Ia(a, b)
  }
  var c;
  var d = vb[v(a == l ? l : a)];
  d ? c = d : (d = vb._) ? c = d : e(z("ITransientCollection.-conj!", a));
  return c.call(l, a, b)
}
function wb(a) {
  if(a ? a.Wa : a) {
    return a.Wa(a)
  }
  var b;
  var c = wb[v(a == l ? l : a)];
  c ? b = c : (c = wb._) ? b = c : e(z("ITransientCollection.-persistent!", a));
  return b.call(l, a)
}
function xb(a, b, c) {
  if(a ? a.Ha : a) {
    return a.Ha(a, b, c)
  }
  var d;
  var f = xb[v(a == l ? l : a)];
  f ? d = f : (f = xb._) ? d = f : e(z("ITransientAssociative.-assoc!", a));
  return d.call(l, a, b, c)
}
var yb = {};
function zb(a, b) {
  if(a ? a.gc : a) {
    return a.gc(a, b)
  }
  var c;
  var d = zb[v(a == l ? l : a)];
  d ? c = d : (d = zb._) ? c = d : e(z("IComparable.-compare", a));
  return c.call(l, a, b)
}
function Ab(a) {
  if(a ? a.dc : a) {
    return a.dc()
  }
  var b;
  var c = Ab[v(a == l ? l : a)];
  c ? b = c : (c = Ab._) ? b = c : e(z("IChunk.-drop-first", a));
  return b.call(l, a)
}
var Bb = {};
function Cb(a) {
  if(a ? a.vb : a) {
    return a.vb(a)
  }
  var b;
  var c = Cb[v(a == l ? l : a)];
  c ? b = c : (c = Cb._) ? b = c : e(z("IChunkedSeq.-chunked-first", a));
  return b.call(l, a)
}
function Db(a) {
  if(a ? a.cb : a) {
    return a.cb(a)
  }
  var b;
  var c = Db[v(a == l ? l : a)];
  c ? b = c : (c = Db._) ? b = c : e(z("IChunkedSeq.-chunked-rest", a));
  return b.call(l, a)
}
var Eb = function() {
  function a(a, b) {
    var c = a === b;
    return c ? c : ib(a, b)
  }
  var b = l, c = function() {
    function a(b, d, j) {
      var k = l;
      s(j) && (k = G(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, k)
    }
    function c(a, d, f) {
      for(;;) {
        if(w(b.a(a, d))) {
          if(J(f)) {
            a = d, d = K(f), f = J(f)
          }else {
            return b.a(d, K(f))
          }
        }else {
          return m
        }
      }
    }
    a.q = 2;
    a.m = function(a) {
      var b = K(a), d = K(J(a)), a = M(J(a));
      return c(b, d, a)
    };
    a.e = c;
    return a
  }(), b = function(b, f, h) {
    switch(arguments.length) {
      case 1:
        return g;
      case 2:
        return a.call(this, b, f);
      default:
        return c.e(b, f, G(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  b.q = 2;
  b.m = c.m;
  b.b = p(g);
  b.a = a;
  b.e = c.e;
  return b
}();
function Fb(a, b) {
  return b instanceof a
}
jb["null"] = p(0);
E["null"] = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return l;
      case 3:
        return d
    }
    e("Invalid arity: " + arguments.length)
  }
}();
Ua["null"] = function(a, b, c) {
  return Gb.e(G([b, c], 0))
};
Ra["null"] = g;
Sa["null"] = p(l);
Na["null"] = function(a, b) {
  return N.b(b)
};
gb["null"] = g;
hb["null"] = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return c.O ? c.O() : c.call(l);
      case 3:
        return d
    }
    e("Invalid arity: " + arguments.length)
  }
}();
qb["null"] = g;
rb["null"] = function() {
  return N.b("nil")
};
Za["null"] = g;
La["null"] = g;
Ma["null"] = p(0);
ab["null"] = p(l);
Qa["null"] = g;
C["null"] = p(l);
D["null"] = function() {
  return N.O()
};
ib["null"] = function(a, b) {
  return b == l
};
F["null"] = p(l);
eb["null"] = g;
fb["null"] = p(l);
Oa["null"] = g;
A["null"] = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return l;
      case 3:
        return d
    }
    e("Invalid arity: " + arguments.length)
  }
}();
Va["null"] = g;
Date.prototype.B = function(a, b) {
  var c = Fb(Date, b);
  return c ? a.toString() === b.toString() : c
};
jb.number = ba();
ib.number = function(a, b) {
  return a === b
};
jb["boolean"] = function(a) {
  return a === g ? 1 : 0
};
jb._ = function(a) {
  return ja(a)
};
var O = function() {
  function a(a, b, c, d) {
    for(var k = Ma(a);;) {
      if(d < k) {
        c = b.a ? b.a(c, A.a(a, d)) : b.call(l, c, A.a(a, d));
        if(Fb(Hb, c)) {
          return db(c)
        }
        d += 1
      }else {
        return c
      }
    }
  }
  function b(a, b, c) {
    for(var d = Ma(a), k = 0;;) {
      if(k < d) {
        c = b.a ? b.a(c, A.a(a, k)) : b.call(l, c, A.a(a, k));
        if(Fb(Hb, c)) {
          return db(c)
        }
        k += 1
      }else {
        return c
      }
    }
  }
  function c(a, b) {
    var c = Ma(a);
    if(0 === c) {
      return b.O ? b.O() : b.call(l)
    }
    for(var d = A.a(a, 0), k = 1;;) {
      if(k < c) {
        d = b.a ? b.a(d, A.a(a, k)) : b.call(l, d, A.a(a, k));
        if(Fb(Hb, d)) {
          return db(d)
        }
        k += 1
      }else {
        return d
      }
    }
  }
  var d = l, d = function(d, h, i, j) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, i);
      case 4:
        return a.call(this, d, h, i, j)
    }
    e("Invalid arity: " + arguments.length)
  };
  d.a = c;
  d.c = b;
  d.r = a;
  return d
}();
function Ib(a, b) {
  this.Q = a;
  this.t = b;
  this.o = 0;
  this.j = 166199546
}
q = Ib.prototype;
q.H = function(a) {
  return Jb(a)
};
q.ma = function() {
  return this.t + 1 < this.Q.length ? new Ib(this.Q, this.t + 1) : l
};
q.G = function(a, b) {
  return P(b, a)
};
q.Va = function(a) {
  var b = a.z(a);
  return 0 < b ? new Kb(a, b - 1, l) : Q
};
q.toString = function() {
  return R.e(G([this], 0))
};
q.ea = function(a, b) {
  return Lb(this.Q) ? O.r(this.Q, b, this.Q[this.t], this.t + 1) : O.r(a, b, this.Q[this.t], 0)
};
q.fa = function(a, b, c) {
  return Lb(this.Q) ? O.r(this.Q, b, c, this.t) : O.r(a, b, c, 0)
};
q.A = ba();
q.z = function() {
  return this.Q.length - this.t
};
q.T = function() {
  return this.Q[this.t]
};
q.R = function() {
  return this.t + 1 < this.Q.length ? new Ib(this.Q, this.t + 1) : N.O()
};
q.B = function(a, b) {
  return Mb(a, b)
};
q.N = function(a, b) {
  var c = b + this.t;
  return c < this.Q.length ? this.Q[c] : l
};
q.J = function(a, b, c) {
  a = b + this.t;
  return a < this.Q.length ? this.Q[a] : c
};
Ib;
var Ob = function() {
  function a(a, b) {
    return 0 === a.length ? l : new Ib(a, b)
  }
  function b(a) {
    return c.a(a, 0)
  }
  var c = l, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}(), G = function() {
  function a(a, b) {
    return Ob.a(a, b)
  }
  function b(a) {
    return Ob.a(a, 0)
  }
  var c = l, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}();
gb.array = g;
hb.array = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return O.a(a, c);
      case 3:
        return O.c(a, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
E.array = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return a[c];
      case 3:
        return A.c(a, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
Oa.array = g;
A.array = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return c < a.length ? a[c] : l;
      case 3:
        return c < a.length ? a[c] : d
    }
    e("Invalid arity: " + arguments.length)
  }
}();
La.array = g;
Ma.array = function(a) {
  return a.length
};
lb.array = g;
mb.array = function(a) {
  return G.a(a, 0)
};
function Kb(a, b, c) {
  this.ub = a;
  this.t = b;
  this.h = c;
  this.o = 0;
  this.j = 31850570
}
q = Kb.prototype;
q.H = function(a) {
  return Jb(a)
};
q.G = function(a, b) {
  return P(b, a)
};
q.toString = function() {
  return R.e(G([this], 0))
};
q.A = ba();
q.z = function() {
  return this.t + 1
};
q.T = function() {
  return A.a(this.ub, this.t)
};
q.R = function() {
  return 0 < this.t ? new Kb(this.ub, this.t - 1, l) : Q
};
q.B = function(a, b) {
  return Mb(a, b)
};
q.F = function(a, b) {
  return new Kb(this.ub, this.t, b)
};
q.C = o("h");
Kb;
function S(a) {
  if(a == l) {
    a = l
  }else {
    var b;
    b = a ? ((b = a.j & 32) ? b : a.Kd) ? g : a.j ? m : x(Pa, a) : x(Pa, a);
    a = b ? a : mb(a)
  }
  return a
}
function K(a) {
  if(a == l) {
    return l
  }
  var b;
  b = a ? ((b = a.j & 64) ? b : a.xb) ? g : a.j ? m : x(Qa, a) : x(Qa, a);
  if(b) {
    return C(a)
  }
  a = S(a);
  return a == l ? l : C(a)
}
function M(a) {
  if(a != l) {
    var b;
    b = a ? ((b = a.j & 64) ? b : a.xb) ? g : a.j ? m : x(Qa, a) : x(Qa, a);
    if(b) {
      return D(a)
    }
    a = S(a);
    return a != l ? D(a) : Q
  }
  return Q
}
function J(a) {
  if(a == l) {
    a = l
  }else {
    var b;
    b = a ? ((b = a.j & 128) ? b : a.Nd) ? g : a.j ? m : x(Ra, a) : x(Ra, a);
    a = b ? Sa(a) : S(M(a))
  }
  return a
}
function Pb(a) {
  return K(J(a))
}
ib._ = function(a, b) {
  return a === b
};
function Qb(a) {
  return w(a) ? m : g
}
var Rb = function() {
  var a = l, b = function() {
    function b(a, c, i) {
      var j = l;
      s(i) && (j = G(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, j)
    }
    function d(b, c, d) {
      for(;;) {
        if(w(d)) {
          b = a.a(b, c), c = K(d), d = J(d)
        }else {
          return a.a(b, c)
        }
      }
    }
    b.q = 2;
    b.m = function(a) {
      var b = K(a), c = K(J(a)), a = M(J(a));
      return d(b, c, a)
    };
    b.e = d;
    return b
  }(), a = function(a, d, f) {
    switch(arguments.length) {
      case 2:
        return Na(a, d);
      default:
        return b.e(a, d, G(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  a.q = 2;
  a.m = b.m;
  a.a = function(a, b) {
    return Na(a, b)
  };
  a.e = b.e;
  return a
}();
function T(a) {
  if(Lb(a)) {
    a = Ma(a)
  }else {
    a: {
      for(var a = S(a), b = 0;;) {
        if(Lb(a)) {
          a = b + Ma(a);
          break a
        }
        a = J(a);
        b += 1
      }
      a = aa
    }
  }
  return a
}
var Tb = function() {
  function a(a, b, h) {
    return a == l ? h : 0 === b ? S(a) ? K(a) : h : Sb(a) ? A.c(a, b, h) : S(a) ? c.c(J(a), b - 1, h) : h
  }
  function b(a, b) {
    a == l && e(Error("Index out of bounds"));
    if(0 === b) {
      if(S(a)) {
        return K(a)
      }
      e(Error("Index out of bounds"))
    }
    if(Sb(a)) {
      return A.a(a, b)
    }
    if(S(a)) {
      return c.a(J(a), b - 1)
    }
    e(Error("Index out of bounds"))
  }
  var c = l, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.c = a;
  return c
}(), Ub = function() {
  function a(a, b, c) {
    if(a != l) {
      var i;
      i = a ? ((i = a.j & 16) ? i : a.Ua) ? g : a.j ? m : x(Oa, a) : x(Oa, a);
      a = i ? A.c(a, Math.floor(b), c) : Tb.c(a, Math.floor(b), c)
    }else {
      a = c
    }
    return a
  }
  function b(a, b) {
    var c;
    a == l ? c = l : (c = a ? ((c = a.j & 16) ? c : a.Ua) ? g : a.j ? m : x(Oa, a) : x(Oa, a), c = c ? A.a(a, Math.floor(b)) : Tb.a(a, Math.floor(b)));
    return c
  }
  var c = l, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.c = a;
  return c
}(), Vb = function() {
  var a = l, b = function() {
    function b(a, c, i, j) {
      var k = l;
      s(j) && (k = G(Array.prototype.slice.call(arguments, 3), 0));
      return d.call(this, a, c, i, k)
    }
    function d(b, c, d, j) {
      for(;;) {
        if(b = a.c(b, c, d), w(j)) {
          c = K(j), d = Pb(j), j = J(J(j))
        }else {
          return b
        }
      }
    }
    b.q = 3;
    b.m = function(a) {
      var b = K(a), c = K(J(a)), j = K(J(J(a))), a = M(J(J(a)));
      return d(b, c, j, a)
    };
    b.e = d;
    return b
  }(), a = function(a, d, f, h) {
    switch(arguments.length) {
      case 3:
        return Ua(a, d, f);
      default:
        return b.e(a, d, f, G(arguments, 3))
    }
    e("Invalid arity: " + arguments.length)
  };
  a.q = 3;
  a.m = b.m;
  a.c = function(a, b, f) {
    return Ua(a, b, f)
  };
  a.e = b.e;
  return a
}();
function Wb(a, b) {
  return F(a, b)
}
function Xb(a) {
  var b;
  b = a ? ((b = a.j & 131072) ? b : a.zc) ? g : a.j ? m : x(eb, a) : x(eb, a);
  return b ? fb(a) : l
}
var Yb = {}, Zb = 0, ac = function() {
  function a(a, b) {
    var c = ga(a);
    if(c ? b : c) {
      if(255 < Zb && (Yb = {}, Zb = 0), c = Yb[a], c == l) {
        c = ua(a), Yb[a] = c, Zb += 1
      }
    }else {
      c = jb(a)
    }
    return c
  }
  function b(a) {
    return c.a(a, g)
  }
  var c = l, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}();
function bc(a) {
  if(a == l) {
    a = m
  }else {
    if(a) {
      var b = a.j & 4096, a = (b ? b : a.Qd) ? g : a.j ? m : x(Za, a)
    }else {
      a = x(Za, a)
    }
  }
  return a
}
function Lb(a) {
  if(a) {
    var b = a.j & 2, a = (b ? b : a.wb) ? g : a.j ? m : x(La, a)
  }else {
    a = x(La, a)
  }
  return a
}
function Sb(a) {
  if(a) {
    var b = a.j & 16, a = (b ? b : a.Ua) ? g : a.j ? m : x(Oa, a)
  }else {
    a = x(Oa, a)
  }
  return a
}
function cc(a) {
  if(a == l) {
    a = m
  }else {
    if(a) {
      var b = a.j & 1024, a = (b ? b : a.Md) ? g : a.j ? m : x(Va, a)
    }else {
      a = x(Va, a)
    }
  }
  return a
}
function dc(a) {
  if(a) {
    var b = a.j & 16384, a = (b ? b : a.Rd) ? g : a.j ? m : x(bb, a)
  }else {
    a = x(bb, a)
  }
  return a
}
function ec(a) {
  return a ? w(w(l) ? l : a.fc) ? g : a.Bc ? m : x(Bb, a) : x(Bb, a)
}
function fc(a) {
  var b = [];
  Aa(a, function(a, d) {
    return b.push(d)
  });
  return b
}
function gc(a, b, c, d, f) {
  for(;0 !== f;) {
    c[d] = a[b], d += 1, f -= 1, b += 1
  }
}
var hc = {};
function ic(a) {
  if(a == l) {
    a = m
  }else {
    if(a) {
      var b = a.j & 64, a = (b ? b : a.xb) ? g : a.j ? m : x(Qa, a)
    }else {
      a = x(Qa, a)
    }
  }
  return a
}
function jc(a) {
  return w(a) ? g : m
}
function kc(a) {
  var b = ga(a);
  b ? (b = "\ufdd0" === a.charAt(0), a = !(b ? b : "\ufdd1" === a.charAt(0))) : a = b;
  return a
}
function lc(a) {
  var b = ga(a);
  return b ? "\ufdd0" === a.charAt(0) : b
}
function mc(a) {
  var b = ga(a);
  return b ? "\ufdd1" === a.charAt(0) : b
}
function nc(a, b) {
  return E.c(a, b, hc) === hc ? m : g
}
function oc(a, b) {
  if(a === b) {
    return 0
  }
  if(a == l) {
    return-1
  }
  if(b == l) {
    return 1
  }
  if((a == l ? l : a.constructor) === (b == l ? l : b.constructor)) {
    return(a ? w(w(l) ? l : a.xc) || (a.Bc ? 0 : x(yb, a)) : x(yb, a)) ? zb(a, b) : a > b ? 1 : a < b ? -1 : 0
  }
  e(Error("compare on non-nil objects of different types"))
}
var pc = function() {
  function a(a, b, c, i) {
    for(;;) {
      var j = oc(Ub.a(a, i), Ub.a(b, i)), k = 0 === j;
      if(k ? i + 1 < c : k) {
        i += 1
      }else {
        return j
      }
    }
  }
  function b(a, b) {
    var h = T(a), i = T(b);
    return h < i ? -1 : h > i ? 1 : c.r(a, b, h, 0)
  }
  var c = l, c = function(c, f, h, i) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 4:
        return a.call(this, c, f, h, i)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.r = a;
  return c
}(), rc = function() {
  function a(a, b, c) {
    for(c = S(c);;) {
      if(c) {
        b = a.a ? a.a(b, K(c)) : a.call(l, b, K(c));
        if(Fb(Hb, b)) {
          return db(b)
        }
        c = J(c)
      }else {
        return b
      }
    }
  }
  function b(a, b) {
    var c = S(b);
    return c ? qc.c(a, K(c), J(c)) : a.O ? a.O() : a.call(l)
  }
  var c = l, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.c = a;
  return c
}(), qc = function() {
  function a(a, b, c) {
    var i;
    i = c ? ((i = c.j & 524288) ? i : c.Ac) ? g : c.j ? m : x(gb, c) : x(gb, c);
    return i ? hb.c(c, a, b) : rc.c(a, b, c)
  }
  function b(a, b) {
    var c;
    c = b ? ((c = b.j & 524288) ? c : b.Ac) ? g : b.j ? m : x(gb, b) : x(gb, b);
    return c ? hb.a(b, a) : rc.a(a, b)
  }
  var c = l, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.c = a;
  return c
}();
function Hb(a) {
  this.n = a;
  this.o = 0;
  this.j = 32768
}
Hb.prototype.eb = o("n");
Hb;
function sc(a) {
  return 0 <= a ? Math.floor.b ? Math.floor.b(a) : Math.floor.call(l, a) : Math.ceil.b ? Math.ceil.b(a) : Math.ceil.call(l, a)
}
function tc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
}
var uc = function() {
  function a(a) {
    return a == l ? "" : a.toString()
  }
  var b = l, c = function() {
    function a(b, d) {
      var j = l;
      s(d) && (j = G(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, j)
    }
    function c(a, d) {
      return function(a, c) {
        for(;;) {
          if(w(c)) {
            var d = a.append(b.b(K(c))), f = J(c), a = d, c = f
          }else {
            return b.b(a)
          }
        }
      }.call(l, new Ja(b.b(a)), d)
    }
    a.q = 1;
    a.m = function(a) {
      var b = K(a), a = M(a);
      return c(b, a)
    };
    a.e = c;
    return a
  }(), b = function(b, f) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, G(arguments, 1))
    }
    e("Invalid arity: " + arguments.length)
  };
  b.q = 1;
  b.m = c.m;
  b.O = p("");
  b.b = a;
  b.e = c.e;
  return b
}(), U = function() {
  function a(a) {
    return mc(a) ? a.substring(2, a.length) : lc(a) ? uc.e(":", G([a.substring(2, a.length)], 0)) : a == l ? "" : a.toString()
  }
  var b = l, c = function() {
    function a(b, d) {
      var j = l;
      s(d) && (j = G(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, j)
    }
    function c(a, d) {
      return function(a, c) {
        for(;;) {
          if(w(c)) {
            var d = a.append(b.b(K(c))), f = J(c), a = d, c = f
          }else {
            return uc.b(a)
          }
        }
      }.call(l, new Ja(b.b(a)), d)
    }
    a.q = 1;
    a.m = function(a) {
      var b = K(a), a = M(a);
      return c(b, a)
    };
    a.e = c;
    return a
  }(), b = function(b, f) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, G(arguments, 1))
    }
    e("Invalid arity: " + arguments.length)
  };
  b.q = 1;
  b.m = c.m;
  b.O = p("");
  b.b = a;
  b.e = c.e;
  return b
}(), vc = function() {
  var a = l, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return a.substring(c);
      case 3:
        return a.substring(c, d)
    }
    e("Invalid arity: " + arguments.length)
  };
  a.a = function(a, c) {
    return a.substring(c)
  };
  a.c = function(a, c, d) {
    return a.substring(c, d)
  };
  return a
}(), wc = function() {
  function a(a, b) {
    return c.b(uc.e(a, G(["/", b], 0)))
  }
  function b(a) {
    return lc(a) ? a : mc(a) ? uc.e("\ufdd0", G(["'", vc.a(a, 2)], 0)) : uc.e("\ufdd0", G(["'", a], 0))
  }
  var c = l, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}();
function Mb(a, b) {
  var c;
  c = b ? ((c = b.j & 16777216) ? c : b.Pd) ? g : b.j ? m : x(nb, b) : x(nb, b);
  if(c) {
    a: {
      c = S(a);
      for(var d = S(b);;) {
        if(c == l) {
          c = d == l;
          break a
        }
        if(d != l && Eb.a(K(c), K(d))) {
          c = J(c), d = J(d)
        }else {
          c = m;
          break a
        }
      }
      c = aa
    }
  }else {
    c = l
  }
  return jc(c)
}
function Jb(a) {
  return qc.c(function(a, c) {
    var d = ac.a(c, m);
    return a ^ d + 2654435769 + (a << 6) + (a >> 2)
  }, ac.a(K(a), m), J(a))
}
function xc(a) {
  for(var b = 0, a = S(a);;) {
    if(a) {
      var c = K(a), b = (b + (ac.b(Xa(c)) ^ ac.b(Ya(c)))) % 4503599627370496, a = J(a)
    }else {
      return b
    }
  }
}
function yc(a) {
  for(var b = 0, a = S(a);;) {
    if(a) {
      var c = K(a), b = (b + ac.b(c)) % 4503599627370496, a = J(a)
    }else {
      return b
    }
  }
}
function zc(a, b, c, d, f) {
  this.h = a;
  this.Oa = b;
  this.ka = c;
  this.count = d;
  this.l = f;
  this.o = 0;
  this.j = 65413358
}
q = zc.prototype;
q.H = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = Jb(a)
};
q.ma = function() {
  return 1 === this.count ? l : this.ka
};
q.G = function(a, b) {
  return new zc(this.h, b, a, this.count + 1, l)
};
q.toString = function() {
  return R.e(G([this], 0))
};
q.A = ba();
q.z = o("count");
q.ga = o("Oa");
q.T = o("Oa");
q.R = function() {
  return 1 === this.count ? Q : this.ka
};
q.B = function(a, b) {
  return Mb(a, b)
};
q.F = function(a, b) {
  return new zc(b, this.Oa, this.ka, this.count, this.l)
};
q.C = o("h");
q.K = function() {
  return Q
};
zc;
function Ac(a) {
  this.h = a;
  this.o = 0;
  this.j = 65413326
}
q = Ac.prototype;
q.H = p(0);
q.ma = p(l);
q.G = function(a, b) {
  return new zc(this.h, b, l, 1, l)
};
q.toString = function() {
  return R.e(G([this], 0))
};
q.A = p(l);
q.z = p(0);
q.ga = p(l);
q.T = p(l);
q.R = function() {
  return Q
};
q.B = function(a, b) {
  return Mb(a, b)
};
q.F = function(a, b) {
  return new Ac(b)
};
q.C = o("h");
q.K = ba();
Ac;
var Q = new Ac(l);
function Bc(a) {
  if(a) {
    var b = a.j & 134217728, a = (b ? b : a.Od) ? g : a.j ? m : x(ob, a)
  }else {
    a = x(ob, a)
  }
  return a
}
var N = function() {
  function a(a, b, c) {
    return Rb.a(d.a(b, c), a)
  }
  function b(a, b) {
    return Rb.a(d.b(b), a)
  }
  function c(a) {
    return Rb.a(Q, a)
  }
  var d = l, f = function() {
    function a(c, d, f, h) {
      var r = l;
      s(h) && (r = G(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, f, r)
    }
    function b(a, c, d, f) {
      return Rb.a(Rb.a(Rb.a(qc.c(Rb, Q, Bc(f) ? pb(f) : qc.c(Rb, Q, f)), d), c), a)
    }
    a.q = 3;
    a.m = function(a) {
      var c = K(a), d = K(J(a)), f = K(J(J(a))), a = M(J(J(a)));
      return b(c, d, f, a)
    };
    a.e = b;
    return a
  }(), d = function(d, i, j, k) {
    switch(arguments.length) {
      case 0:
        return Q;
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, i);
      case 3:
        return a.call(this, d, i, j);
      default:
        return f.e(d, i, j, G(arguments, 3))
    }
    e("Invalid arity: " + arguments.length)
  };
  d.q = 3;
  d.m = f.m;
  d.O = function() {
    return Q
  };
  d.b = c;
  d.a = b;
  d.c = a;
  d.e = f.e;
  return d
}();
function Cc(a, b, c, d) {
  this.h = a;
  this.Oa = b;
  this.ka = c;
  this.l = d;
  this.o = 0;
  this.j = 65405164
}
q = Cc.prototype;
q.H = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = Jb(a)
};
q.ma = function() {
  return this.ka == l ? l : mb(this.ka)
};
q.G = function(a, b) {
  return new Cc(l, b, a, this.l)
};
q.toString = function() {
  return R.e(G([this], 0))
};
q.A = ba();
q.T = o("Oa");
q.R = function() {
  return this.ka == l ? Q : this.ka
};
q.B = function(a, b) {
  return Mb(a, b)
};
q.F = function(a, b) {
  return new Cc(b, this.Oa, this.ka, this.l)
};
q.C = o("h");
q.K = function() {
  return F(Q, this.h)
};
Cc;
function P(a, b) {
  var c = b == l;
  c || (c = b ? ((c = b.j & 64) ? c : b.xb) ? g : b.j ? m : x(Qa, b) : x(Qa, b));
  return c ? new Cc(l, a, b, l) : new Cc(l, a, S(b), l)
}
gb.string = g;
hb.string = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return O.a(a, c);
      case 3:
        return O.c(a, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
E.string = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return A.a(a, c);
      case 3:
        return A.c(a, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
Oa.string = g;
A.string = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return c < Ma(a) ? a.charAt(c) : l;
      case 3:
        return c < Ma(a) ? a.charAt(c) : d
    }
    e("Invalid arity: " + arguments.length)
  }
}();
La.string = g;
Ma.string = function(a) {
  return a.length
};
lb.string = g;
mb.string = function(a) {
  return Ob.a(a, 0)
};
jb.string = function(a) {
  return ua(a)
};
function Dc(a) {
  this.Rb = a;
  this.o = 0;
  this.j = 1
}
Dc.prototype.call = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var f;
        c == l ? f = l : (f = c.Ba, f = f == l ? E.c(c, this.Rb, l) : f[this.Rb]);
        return f;
      case 3:
        return c == l ? d : E.c(c, this.Rb, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
Dc.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
Dc;
String.prototype.call = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return E.c(c, this.toString(), l);
      case 3:
        return E.c(c, this.toString(), d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
String.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
String.prototype.apply = function(a, b) {
  return 2 > T(b) ? E.c(b[0], a, l) : E.c(b[0], a, b[1])
};
function Ec(a) {
  var b = a.x;
  if(a.Xb) {
    return b
  }
  a.x = b.O ? b.O() : b.call(l);
  a.Xb = g;
  return a.x
}
function V(a, b, c, d) {
  this.h = a;
  this.Xb = b;
  this.x = c;
  this.l = d;
  this.o = 0;
  this.j = 31850700
}
q = V.prototype;
q.H = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = Jb(a)
};
q.ma = function(a) {
  return mb(a.R(a))
};
q.G = function(a, b) {
  return P(b, a)
};
q.toString = function() {
  return R.e(G([this], 0))
};
q.A = function(a) {
  return S(Ec(a))
};
q.T = function(a) {
  return K(Ec(a))
};
q.R = function(a) {
  return M(Ec(a))
};
q.B = function(a, b) {
  return Mb(a, b)
};
q.F = function(a, b) {
  return new V(b, this.Xb, this.x, this.l)
};
q.C = o("h");
q.K = function() {
  return F(Q, this.h)
};
V;
function Fc(a, b) {
  this.qb = a;
  this.end = b;
  this.o = 0;
  this.j = 2
}
Fc.prototype.z = o("end");
Fc.prototype.add = function(a) {
  this.qb[this.end] = a;
  return this.end += 1
};
Fc.prototype.xa = function() {
  var a = new Gc(this.qb, 0, this.end);
  this.qb = l;
  return a
};
Fc;
function Gc(a, b, c) {
  this.g = a;
  this.P = b;
  this.end = c;
  this.o = 0;
  this.j = 524306
}
q = Gc.prototype;
q.ea = function(a, b) {
  return O.r(a, b, this.g[this.P], this.P + 1)
};
q.fa = function(a, b, c) {
  return O.r(a, b, c, this.P)
};
q.dc = function() {
  this.P === this.end && e(Error("-drop-first of empty chunk"));
  return new Gc(this.g, this.P + 1, this.end)
};
q.N = function(a, b) {
  return this.g[this.P + b]
};
q.J = function(a, b, c) {
  return((a = 0 <= b) ? b < this.end - this.P : a) ? this.g[this.P + b] : c
};
q.z = function() {
  return this.end - this.P
};
Gc;
var Hc = function() {
  function a(a, b, c) {
    return new Gc(a, b, c)
  }
  function b(a, b) {
    return d.c(a, b, a.length)
  }
  function c(a) {
    return d.c(a, 0, a.length)
  }
  var d = l, d = function(d, h, i) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, h);
      case 3:
        return a.call(this, d, h, i)
    }
    e("Invalid arity: " + arguments.length)
  };
  d.b = c;
  d.a = b;
  d.c = a;
  return d
}();
function Ic(a, b, c) {
  this.xa = a;
  this.ua = b;
  this.h = c;
  this.o = 0;
  this.j = 27656296
}
q = Ic.prototype;
q.G = function(a, b) {
  return P(b, a)
};
q.A = ba();
q.T = function() {
  return A.a(this.xa, 0)
};
q.R = function() {
  return 1 < Ma(this.xa) ? new Ic(Ab(this.xa), this.ua, this.h) : this.ua == l ? Q : this.ua
};
q.ec = function() {
  return this.ua == l ? l : this.ua
};
q.B = function(a, b) {
  return Mb(a, b)
};
q.F = function(a, b) {
  return new Ic(this.xa, this.ua, b)
};
q.C = o("h");
q.fc = g;
q.vb = o("xa");
q.cb = function() {
  return this.ua == l ? Q : this.ua
};
Ic;
function Jc(a, b) {
  return 0 === Ma(a) ? b : new Ic(a, b, l)
}
function Mc(a) {
  for(var b = [];;) {
    if(S(a)) {
      b.push(K(a)), a = J(a)
    }else {
      return b
    }
  }
}
function Nc(a, b) {
  if(Lb(a)) {
    return T(a)
  }
  for(var c = a, d = b, f = 0;;) {
    var h;
    h = (h = 0 < d) ? S(c) : h;
    if(w(h)) {
      c = J(c), d -= 1, f += 1
    }else {
      return f
    }
  }
}
var Pc = function Oc(b) {
  return b == l ? l : J(b) == l ? S(K(b)) : P(K(b), Oc(J(b)))
}, Qc = function() {
  function a(a, b) {
    return new V(l, m, function() {
      var c = S(a);
      return c ? ec(c) ? Jc(Cb(c), d.a(Db(c), b)) : P(K(c), d.a(M(c), b)) : b
    }, l)
  }
  function b(a) {
    return new V(l, m, function() {
      return a
    }, l)
  }
  function c() {
    return new V(l, m, p(l), l)
  }
  var d = l, f = function() {
    function a(c, d, f) {
      var h = l;
      s(f) && (h = G(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, h)
    }
    function b(a, c, f) {
      var h = function u(a, b) {
        return new V(l, m, function() {
          var c = S(a);
          return c ? ec(c) ? Jc(Cb(c), u(Db(c), b)) : P(K(c), u(M(c), b)) : w(b) ? u(K(b), J(b)) : l
        }, l)
      };
      return h.a ? h.a(d.a(a, c), f) : h.call(l, d.a(a, c), f)
    }
    a.q = 2;
    a.m = function(a) {
      var c = K(a), d = K(J(a)), a = M(J(a));
      return b(c, d, a)
    };
    a.e = b;
    return a
  }(), d = function(d, i, j) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, i);
      default:
        return f.e(d, i, G(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  d.q = 2;
  d.m = f.m;
  d.O = c;
  d.b = b;
  d.a = a;
  d.e = f.e;
  return d
}(), Rc = function() {
  function a(a, b, c, d) {
    return P(a, P(b, P(c, d)))
  }
  function b(a, b, c) {
    return P(a, P(b, c))
  }
  var c = l, d = function() {
    function a(c, d, f, n, t) {
      var r = l;
      s(t) && (r = G(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, f, n, r)
    }
    function b(a, c, d, f, h) {
      return P(a, P(c, P(d, P(f, Pc(h)))))
    }
    a.q = 4;
    a.m = function(a) {
      var c = K(a), d = K(J(a)), f = K(J(J(a))), t = K(J(J(J(a)))), a = M(J(J(J(a))));
      return b(c, d, f, t, a)
    };
    a.e = b;
    return a
  }(), c = function(c, h, i, j, k) {
    switch(arguments.length) {
      case 1:
        return S(c);
      case 2:
        return P(c, h);
      case 3:
        return b.call(this, c, h, i);
      case 4:
        return a.call(this, c, h, i, j);
      default:
        return d.e(c, h, i, j, G(arguments, 4))
    }
    e("Invalid arity: " + arguments.length)
  };
  c.q = 4;
  c.m = d.m;
  c.b = function(a) {
    return S(a)
  };
  c.a = function(a, b) {
    return P(a, b)
  };
  c.c = b;
  c.r = a;
  c.e = d.e;
  return c
}();
function Sc(a) {
  return ub(a)
}
function Tc(a) {
  return wb(a)
}
function Uc(a, b, c) {
  return xb(a, b, c)
}
function Vc(a, b, c) {
  var d = S(c);
  if(0 === b) {
    return a.O ? a.O() : a.call(l)
  }
  var c = C(d), f = D(d);
  if(1 === b) {
    return a.b ? a.b(c) : a.b ? a.b(c) : a.call(l, c)
  }
  var d = C(f), h = D(f);
  if(2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(l, c, d)
  }
  var f = C(h), i = D(h);
  if(3 === b) {
    return a.c ? a.c(c, d, f) : a.c ? a.c(c, d, f) : a.call(l, c, d, f)
  }
  var h = C(i), j = D(i);
  if(4 === b) {
    return a.r ? a.r(c, d, f, h) : a.r ? a.r(c, d, f, h) : a.call(l, c, d, f, h)
  }
  i = C(j);
  j = D(j);
  if(5 === b) {
    return a.$ ? a.$(c, d, f, h, i) : a.$ ? a.$(c, d, f, h, i) : a.call(l, c, d, f, h, i)
  }
  var a = C(j), k = D(j);
  if(6 === b) {
    return a.na ? a.na(c, d, f, h, i, a) : a.na ? a.na(c, d, f, h, i, a) : a.call(l, c, d, f, h, i, a)
  }
  var j = C(k), n = D(k);
  if(7 === b) {
    return a.Xa ? a.Xa(c, d, f, h, i, a, j) : a.Xa ? a.Xa(c, d, f, h, i, a, j) : a.call(l, c, d, f, h, i, a, j)
  }
  var k = C(n), t = D(n);
  if(8 === b) {
    return a.Jb ? a.Jb(c, d, f, h, i, a, j, k) : a.Jb ? a.Jb(c, d, f, h, i, a, j, k) : a.call(l, c, d, f, h, i, a, j, k)
  }
  var n = C(t), r = D(t);
  if(9 === b) {
    return a.Kb ? a.Kb(c, d, f, h, i, a, j, k, n) : a.Kb ? a.Kb(c, d, f, h, i, a, j, k, n) : a.call(l, c, d, f, h, i, a, j, k, n)
  }
  var t = C(r), u = D(r);
  if(10 === b) {
    return a.yb ? a.yb(c, d, f, h, i, a, j, k, n, t) : a.yb ? a.yb(c, d, f, h, i, a, j, k, n, t) : a.call(l, c, d, f, h, i, a, j, k, n, t)
  }
  var r = C(u), B = D(u);
  if(11 === b) {
    return a.zb ? a.zb(c, d, f, h, i, a, j, k, n, t, r) : a.zb ? a.zb(c, d, f, h, i, a, j, k, n, t, r) : a.call(l, c, d, f, h, i, a, j, k, n, t, r)
  }
  var u = C(B), y = D(B);
  if(12 === b) {
    return a.Ab ? a.Ab(c, d, f, h, i, a, j, k, n, t, r, u) : a.Ab ? a.Ab(c, d, f, h, i, a, j, k, n, t, r, u) : a.call(l, c, d, f, h, i, a, j, k, n, t, r, u)
  }
  var B = C(y), I = D(y);
  if(13 === b) {
    return a.Bb ? a.Bb(c, d, f, h, i, a, j, k, n, t, r, u, B) : a.Bb ? a.Bb(c, d, f, h, i, a, j, k, n, t, r, u, B) : a.call(l, c, d, f, h, i, a, j, k, n, t, r, u, B)
  }
  var y = C(I), H = D(I);
  if(14 === b) {
    return a.Cb ? a.Cb(c, d, f, h, i, a, j, k, n, t, r, u, B, y) : a.Cb ? a.Cb(c, d, f, h, i, a, j, k, n, t, r, u, B, y) : a.call(l, c, d, f, h, i, a, j, k, n, t, r, u, B, y)
  }
  var I = C(H), Z = D(H);
  if(15 === b) {
    return a.Db ? a.Db(c, d, f, h, i, a, j, k, n, t, r, u, B, y, I) : a.Db ? a.Db(c, d, f, h, i, a, j, k, n, t, r, u, B, y, I) : a.call(l, c, d, f, h, i, a, j, k, n, t, r, u, B, y, I)
  }
  var H = C(Z), oa = D(Z);
  if(16 === b) {
    return a.Eb ? a.Eb(c, d, f, h, i, a, j, k, n, t, r, u, B, y, I, H) : a.Eb ? a.Eb(c, d, f, h, i, a, j, k, n, t, r, u, B, y, I, H) : a.call(l, c, d, f, h, i, a, j, k, n, t, r, u, B, y, I, H)
  }
  var Z = C(oa), pa = D(oa);
  if(17 === b) {
    return a.Fb ? a.Fb(c, d, f, h, i, a, j, k, n, t, r, u, B, y, I, H, Z) : a.Fb ? a.Fb(c, d, f, h, i, a, j, k, n, t, r, u, B, y, I, H, Z) : a.call(l, c, d, f, h, i, a, j, k, n, t, r, u, B, y, I, H, Z)
  }
  var oa = C(pa), $a = D(pa);
  if(18 === b) {
    return a.Gb ? a.Gb(c, d, f, h, i, a, j, k, n, t, r, u, B, y, I, H, Z, oa) : a.Gb ? a.Gb(c, d, f, h, i, a, j, k, n, t, r, u, B, y, I, H, Z, oa) : a.call(l, c, d, f, h, i, a, j, k, n, t, r, u, B, y, I, H, Z, oa)
  }
  pa = C($a);
  $a = D($a);
  if(19 === b) {
    return a.Hb ? a.Hb(c, d, f, h, i, a, j, k, n, t, r, u, B, y, I, H, Z, oa, pa) : a.Hb ? a.Hb(c, d, f, h, i, a, j, k, n, t, r, u, B, y, I, H, Z, oa, pa) : a.call(l, c, d, f, h, i, a, j, k, n, t, r, u, B, y, I, H, Z, oa, pa)
  }
  var Nb = C($a);
  D($a);
  if(20 === b) {
    return a.Ib ? a.Ib(c, d, f, h, i, a, j, k, n, t, r, u, B, y, I, H, Z, oa, pa, Nb) : a.Ib ? a.Ib(c, d, f, h, i, a, j, k, n, t, r, u, B, y, I, H, Z, oa, pa, Nb) : a.call(l, c, d, f, h, i, a, j, k, n, t, r, u, B, y, I, H, Z, oa, pa, Nb)
  }
  e(Error("Only up to 20 arguments supported on functions"))
}
var Wc = function() {
  function a(a, b, c, d, f) {
    b = Rc.r(b, c, d, f);
    c = a.q;
    return w(a.m) ? (d = Nc(b, c + 1), d <= c ? Vc(a, d, b) : a.m(b)) : a.apply(a, Mc(b))
  }
  function b(a, b, c, d) {
    b = Rc.c(b, c, d);
    c = a.q;
    return w(a.m) ? (d = Nc(b, c + 1), d <= c ? Vc(a, d, b) : a.m(b)) : a.apply(a, Mc(b))
  }
  function c(a, b, c) {
    b = Rc.a(b, c);
    c = a.q;
    if(w(a.m)) {
      var d = Nc(b, c + 1);
      return d <= c ? Vc(a, d, b) : a.m(b)
    }
    return a.apply(a, Mc(b))
  }
  function d(a, b) {
    var c = a.q;
    if(w(a.m)) {
      var d = Nc(b, c + 1);
      return d <= c ? Vc(a, d, b) : a.m(b)
    }
    return a.apply(a, Mc(b))
  }
  var f = l, h = function() {
    function a(c, d, f, h, i, B) {
      var y = l;
      s(B) && (y = G(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, f, h, i, y)
    }
    function b(a, c, d, f, h, i) {
      c = P(c, P(d, P(f, P(h, Pc(i)))));
      d = a.q;
      return w(a.m) ? (f = Nc(c, d + 1), f <= d ? Vc(a, f, c) : a.m(c)) : a.apply(a, Mc(c))
    }
    a.q = 5;
    a.m = function(a) {
      var c = K(a), d = K(J(a)), f = K(J(J(a))), h = K(J(J(J(a)))), i = K(J(J(J(J(a))))), a = M(J(J(J(J(a)))));
      return b(c, d, f, h, i, a)
    };
    a.e = b;
    return a
  }(), f = function(f, j, k, n, t, r) {
    switch(arguments.length) {
      case 2:
        return d.call(this, f, j);
      case 3:
        return c.call(this, f, j, k);
      case 4:
        return b.call(this, f, j, k, n);
      case 5:
        return a.call(this, f, j, k, n, t);
      default:
        return h.e(f, j, k, n, t, G(arguments, 5))
    }
    e("Invalid arity: " + arguments.length)
  };
  f.q = 5;
  f.m = h.m;
  f.a = d;
  f.c = c;
  f.r = b;
  f.$ = a;
  f.e = h.e;
  return f
}();
function Xc(a, b) {
  for(;;) {
    if(S(b) == l) {
      return g
    }
    if(w(a.b ? a.b(K(b)) : a.call(l, K(b)))) {
      var c = a, d = J(b), a = c, b = d
    }else {
      return m
    }
  }
}
function Yc(a) {
  return a
}
var Zc = function() {
  function a(a, b, c, f) {
    return new V(l, m, function() {
      var n = S(b), t = S(c), r = S(f);
      return(n ? t ? r : t : n) ? P(a.c ? a.c(K(n), K(t), K(r)) : a.call(l, K(n), K(t), K(r)), d.r(a, M(n), M(t), M(r))) : l
    }, l)
  }
  function b(a, b, c) {
    return new V(l, m, function() {
      var f = S(b), n = S(c);
      return(f ? n : f) ? P(a.a ? a.a(K(f), K(n)) : a.call(l, K(f), K(n)), d.c(a, M(f), M(n))) : l
    }, l)
  }
  function c(a, b) {
    return new V(l, m, function() {
      var c = S(b);
      if(c) {
        if(ec(c)) {
          for(var f = Cb(c), n = T(f), t = new Fc(Ka.b(n), 0), r = 0;;) {
            if(r < n) {
              var u = a.b ? a.b(A.a(f, r)) : a.call(l, A.a(f, r));
              t.add(u);
              r += 1
            }else {
              break
            }
          }
          return Jc(t.xa(), d.a(a, Db(c)))
        }
        return P(a.b ? a.b(K(c)) : a.call(l, K(c)), d.a(a, M(c)))
      }
      return l
    }, l)
  }
  var d = l, f = function() {
    function a(c, d, f, h, r) {
      var u = l;
      s(r) && (u = G(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, f, h, u)
    }
    function b(a, c, f, h, i) {
      var u = function y(a) {
        return new V(l, m, function() {
          var b = d.a(S, a);
          return Xc(Yc, b) ? P(d.a(K, b), y(d.a(M, b))) : l
        }, l)
      };
      return d.a(function(b) {
        return Wc.a(a, b)
      }, u.b ? u.b(Rb.e(i, h, G([f, c], 0))) : u.call(l, Rb.e(i, h, G([f, c], 0))))
    }
    a.q = 4;
    a.m = function(a) {
      var c = K(a), d = K(J(a)), f = K(J(J(a))), h = K(J(J(J(a)))), a = M(J(J(J(a))));
      return b(c, d, f, h, a)
    };
    a.e = b;
    return a
  }(), d = function(d, i, j, k, n) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, i);
      case 3:
        return b.call(this, d, i, j);
      case 4:
        return a.call(this, d, i, j, k);
      default:
        return f.e(d, i, j, k, G(arguments, 4))
    }
    e("Invalid arity: " + arguments.length)
  };
  d.q = 4;
  d.m = f.m;
  d.a = c;
  d.c = b;
  d.r = a;
  d.e = f.e;
  return d
}(), ad = function $c(b, c) {
  return new V(l, m, function() {
    if(0 < b) {
      var d = S(c);
      return d ? P(K(d), $c(b - 1, M(d))) : l
    }
    return l
  }, l)
};
function bd(a, b) {
  function c(a, b) {
    for(;;) {
      var c = S(b), i = 0 < a;
      if(w(i ? c : i)) {
        i = a - 1, c = M(c), a = i, b = c
      }else {
        return c
      }
    }
  }
  return new V(l, m, function() {
    return c.a ? c.a(a, b) : c.call(l, a, b)
  }, l)
}
var cd = function() {
  function a(a, b) {
    return ad(a, c.b(b))
  }
  function b(a) {
    return new V(l, m, function() {
      return P(a, c.b(a))
    }, l)
  }
  var c = l, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}(), dd = function() {
  function a(a, c) {
    return new V(l, m, function() {
      var h = S(a), i = S(c);
      return(h ? i : h) ? P(K(h), P(K(i), b.a(M(h), M(i)))) : l
    }, l)
  }
  var b = l, c = function() {
    function a(b, d, j) {
      var k = l;
      s(j) && (k = G(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, k)
    }
    function c(a, d, f) {
      return new V(l, m, function() {
        var c = Zc.a(S, Rb.e(f, d, G([a], 0)));
        return Xc(Yc, c) ? Qc.a(Zc.a(K, c), Wc.a(b, Zc.a(M, c))) : l
      }, l)
    }
    a.q = 2;
    a.m = function(a) {
      var b = K(a), d = K(J(a)), a = M(J(a));
      return c(b, d, a)
    };
    a.e = c;
    return a
  }(), b = function(b, f, h) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, f);
      default:
        return c.e(b, f, G(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  b.q = 2;
  b.m = c.m;
  b.a = a;
  b.e = c.e;
  return b
}();
function ed(a, b) {
  return bd(1, dd.a(cd.b(a), b))
}
function fd(a) {
  var b = function d(a, b) {
    return new V(l, m, function() {
      var i = S(a);
      return i ? P(K(i), d(M(i), b)) : S(b) ? d(K(b), M(b)) : l
    }, l)
  };
  return b.a ? b.a(l, a) : b.call(l, l, a)
}
var gd = function() {
  function a(a, b) {
    return fd(Zc.a(a, b))
  }
  var b = l, c = function() {
    function a(c, d, j) {
      var k = l;
      s(j) && (k = G(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, k)
    }
    function b(a, c, d) {
      return fd(Wc.r(Zc, a, c, d))
    }
    a.q = 2;
    a.m = function(a) {
      var c = K(a), d = K(J(a)), a = M(J(a));
      return b(c, d, a)
    };
    a.e = b;
    return a
  }(), b = function(b, f, h) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, f);
      default:
        return c.e(b, f, G(arguments, 2))
    }
    e("Invalid arity: " + arguments.length)
  };
  b.q = 2;
  b.m = c.m;
  b.a = a;
  b.e = c.e;
  return b
}();
function hd(a, b) {
  var c;
  c = a ? ((c = a.o & 1) ? c : a.Ld) ? g : a.o ? m : x(tb, a) : x(tb, a);
  return c ? Tc(qc.c(vb, ub(a), b)) : qc.c(Na, a, b)
}
var id = function() {
  function a(a, b, c, j) {
    return new V(l, m, function() {
      var k = S(j);
      if(k) {
        var n = ad(a, k);
        return a === T(n) ? P(n, d.r(a, b, c, bd(b, k))) : N.b(ad(a, Qc.a(n, c)))
      }
      return l
    }, l)
  }
  function b(a, b, c) {
    return new V(l, m, function() {
      var j = S(c);
      if(j) {
        var k = ad(a, j);
        return a === T(k) ? P(k, d.c(a, b, bd(b, j))) : l
      }
      return l
    }, l)
  }
  function c(a, b) {
    return d.c(a, a, b)
  }
  var d = l, d = function(d, h, i, j) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, i);
      case 4:
        return a.call(this, d, h, i, j)
    }
    e("Invalid arity: " + arguments.length)
  };
  d.a = c;
  d.c = b;
  d.r = a;
  return d
}();
function jd(a, b, c) {
  this.h = a;
  this.S = b;
  this.l = c;
  this.o = 0;
  this.j = 32400159
}
q = jd.prototype;
q.H = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = Jb(a)
};
q.v = function(a, b) {
  return a.J(a, b, l)
};
q.p = function(a, b, c) {
  return a.J(a, b, c)
};
q.M = function(a, b, c) {
  a = this.S.slice();
  a[b] = c;
  return new jd(this.h, a, l)
};
q.call = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.v(this, c);
      case 3:
        return this.p(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.G = function(a, b) {
  var c = this.S.slice();
  c.push(b);
  return new jd(this.h, c, l)
};
q.toString = function() {
  return R.e(G([this], 0))
};
q.ea = function(a, b) {
  return O.a(this.S, b)
};
q.fa = function(a, b, c) {
  return O.c(this.S, b, c)
};
q.A = function() {
  var a = this;
  if(0 < a.S.length) {
    var b = function d(b) {
      return new V(l, m, function() {
        return b < a.S.length ? P(a.S[b], d(b + 1)) : l
      }, l)
    };
    return b.b ? b.b(0) : b.call(l, 0)
  }
  return l
};
q.z = function() {
  return this.S.length
};
q.ga = function() {
  var a = this.S.length;
  return 0 < a ? this.S[a - 1] : l
};
q.Ja = function(a, b, c) {
  return a.M(a, b, c)
};
q.B = function(a, b) {
  return Mb(a, b)
};
q.F = function(a, b) {
  return new jd(b, this.S, this.l)
};
q.C = o("h");
q.N = function(a, b) {
  var c = 0 <= b;
  return(c ? b < this.S.length : c) ? this.S[b] : l
};
q.J = function(a, b, c) {
  return((a = 0 <= b) ? b < this.S.length : a) ? this.S[b] : c
};
q.K = function() {
  return F(kd, this.h)
};
jd;
var kd = new jd(l, [], 0);
function ld(a, b) {
  this.w = a;
  this.g = b
}
ld;
function md(a) {
  a = a.k;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function nd(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = new ld(a, Ka.b(32));
    d.g[0] = c;
    c = d;
    b -= 5
  }
}
var pd = function od(b, c, d, f) {
  var h = new ld(d.w, d.g.slice()), i = b.k - 1 >>> c & 31;
  5 === c ? h.g[i] = f : (d = d.g[i], b = d != l ? od(b, c - 5, d, f) : nd(l, c - 5, f), h.g[i] = b);
  return h
};
function qd(a, b) {
  var c = 0 <= b;
  if(c ? b < a.k : c) {
    if(b >= md(a)) {
      return a.W
    }
    for(var c = a.root, d = a.shift;;) {
      if(0 < d) {
        var f = d - 5, c = c.g[b >>> d & 31], d = f
      }else {
        return c.g
      }
    }
  }else {
    e(Error([U("No item "), U(b), U(" in vector of length "), U(a.k)].join("")))
  }
}
var td = function sd(b, c, d, f, h) {
  var i = new ld(d.w, d.g.slice());
  if(0 === c) {
    i.g[f & 31] = h
  }else {
    var j = f >>> c & 31, b = sd(b, c - 5, d.g[j], f, h);
    i.g[j] = b
  }
  return i
};
function ud(a, b, c, d, f, h) {
  this.h = a;
  this.k = b;
  this.shift = c;
  this.root = d;
  this.W = f;
  this.l = h;
  this.o = 1;
  this.j = 167668511
}
q = ud.prototype;
q.Ga = function() {
  var a = this.k, b = this.shift, c = new ld({}, this.root.g.slice()), d = this.W, f = Ka.b(32);
  gc(d, 0, f, 0, d.length);
  return new vd(a, b, c, f)
};
q.H = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = Jb(a)
};
q.v = function(a, b) {
  return a.J(a, b, l)
};
q.p = function(a, b, c) {
  return a.J(a, b, c)
};
q.M = function(a, b, c) {
  var d = 0 <= b;
  if(d ? b < this.k : d) {
    return md(a) <= b ? (a = this.W.slice(), a[b & 31] = c, new ud(this.h, this.k, this.shift, this.root, a, l)) : new ud(this.h, this.k, this.shift, td(a, this.shift, this.root, b, c), this.W, l)
  }
  if(b === this.k) {
    return a.G(a, c)
  }
  e(Error([U("Index "), U(b), U(" out of bounds  [0,"), U(this.k), U("]")].join("")))
};
q.call = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.v(this, c);
      case 3:
        return this.p(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.G = function(a, b) {
  if(32 > this.k - md(a)) {
    var c = this.W.slice();
    c.push(b);
    return new ud(this.h, this.k + 1, this.shift, this.root, c, l)
  }
  var d = this.k >>> 5 > 1 << this.shift, c = d ? this.shift + 5 : this.shift;
  if(d) {
    d = new ld(l, Ka.b(32));
    d.g[0] = this.root;
    var f = nd(l, this.shift, new ld(l, this.W));
    d.g[1] = f
  }else {
    d = pd(a, this.shift, this.root, new ld(l, this.W))
  }
  return new ud(this.h, this.k + 1, c, d, [b], l)
};
q.Va = function(a) {
  return 0 < this.k ? new Kb(a, this.k - 1, l) : Q
};
q.fb = function(a) {
  return a.N(a, 0)
};
q.gb = function(a) {
  return a.N(a, 1)
};
q.toString = function() {
  return R.e(G([this], 0))
};
q.ea = function(a, b) {
  return O.a(a, b)
};
q.fa = function(a, b, c) {
  return O.c(a, b, c)
};
q.A = function(a) {
  return 0 === this.k ? l : wd.c(a, 0, 0)
};
q.z = o("k");
q.ga = function(a) {
  return 0 < this.k ? a.N(a, this.k - 1) : l
};
q.Ja = function(a, b, c) {
  return a.M(a, b, c)
};
q.B = function(a, b) {
  return Mb(a, b)
};
q.F = function(a, b) {
  return new ud(b, this.k, this.shift, this.root, this.W, this.l)
};
q.C = o("h");
q.N = function(a, b) {
  return qd(a, b)[b & 31]
};
q.J = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.k : d) ? a.N(a, b) : c
};
q.K = function() {
  return F(xd, this.h)
};
ud;
var yd = new ld(l, Ka.b(32)), xd = new ud(l, 0, 5, yd, [], 0);
function W(a) {
  var b = a.length;
  if(32 > b) {
    return new ud(l, b, 5, yd, a, l)
  }
  for(var c = a.slice(0, 32), d = 32, f = ub(new ud(l, 32, 5, yd, c, l));;) {
    if(d < b) {
      c = d + 1, f = vb(f, a[d]), d = c
    }else {
      return wb(f)
    }
  }
}
function zd(a) {
  return wb(qc.c(vb, ub(xd), a))
}
var Ad = function() {
  function a(a) {
    var c = l;
    s(a) && (c = G(Array.prototype.slice.call(arguments, 0), 0));
    return zd(c)
  }
  a.q = 0;
  a.m = function(a) {
    a = S(a);
    return zd(a)
  };
  a.e = function(a) {
    return zd(a)
  };
  return a
}();
function Bd(a, b, c, d, f) {
  this.Ea = a;
  this.ja = b;
  this.t = c;
  this.P = d;
  this.h = f;
  this.o = 0;
  this.j = 27525356
}
q = Bd.prototype;
q.ma = function(a) {
  return this.P + 1 < this.ja.length ? (a = wd.r(this.Ea, this.ja, this.t, this.P + 1), a == l ? l : a) : a.ec(a)
};
q.G = function(a, b) {
  return P(b, a)
};
q.A = ba();
q.T = function() {
  return this.ja[this.P]
};
q.R = function(a) {
  return this.P + 1 < this.ja.length ? (a = wd.r(this.Ea, this.ja, this.t, this.P + 1), a == l ? Q : a) : a.cb(a)
};
q.ec = function() {
  var a = this.ja.length, a = this.t + a < Ma(this.Ea) ? wd.c(this.Ea, this.t + a, 0) : l;
  return a == l ? l : a
};
q.B = function(a, b) {
  return Mb(a, b)
};
q.F = function(a, b) {
  return wd.$(this.Ea, this.ja, this.t, this.P, b)
};
q.K = function() {
  return F(xd, this.h)
};
q.fc = g;
q.vb = function() {
  return Hc.a(this.ja, this.P)
};
q.cb = function() {
  var a = this.ja.length, a = this.t + a < Ma(this.Ea) ? wd.c(this.Ea, this.t + a, 0) : l;
  return a == l ? Q : a
};
Bd;
var wd = function() {
  function a(a, b, c, d, k) {
    return new Bd(a, b, c, d, k)
  }
  function b(a, b, c, j) {
    return d.$(a, b, c, j, l)
  }
  function c(a, b, c) {
    return d.$(a, qd(a, b), b, c, l)
  }
  var d = l, d = function(d, h, i, j, k) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, h, i);
      case 4:
        return b.call(this, d, h, i, j);
      case 5:
        return a.call(this, d, h, i, j, k)
    }
    e("Invalid arity: " + arguments.length)
  };
  d.c = c;
  d.r = b;
  d.$ = a;
  return d
}();
function Cd(a, b, c, d, f) {
  this.h = a;
  this.Da = b;
  this.start = c;
  this.end = d;
  this.l = f;
  this.o = 0;
  this.j = 32400159
}
q = Cd.prototype;
q.H = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = Jb(a)
};
q.v = function(a, b) {
  return a.J(a, b, l)
};
q.p = function(a, b, c) {
  return a.J(a, b, c)
};
q.M = function(a, b, c) {
  a = this.start + b;
  return new Cd(this.h, Ua(this.Da, a, c), this.start, this.end > a + 1 ? this.end : a + 1, l)
};
q.call = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.v(this, c);
      case 3:
        return this.p(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.G = function(a, b) {
  return new Cd(this.h, cb(this.Da, this.end, b), this.start, this.end + 1, l)
};
q.toString = function() {
  return R.e(G([this], 0))
};
q.ea = function(a, b) {
  return O.a(a, b)
};
q.fa = function(a, b, c) {
  return O.c(a, b, c)
};
q.A = function() {
  var a = this, b = function d(b) {
    return b === a.end ? l : P(A.a(a.Da, b), new V(l, m, function() {
      return d(b + 1)
    }, l))
  };
  return b.b ? b.b(a.start) : b.call(l, a.start)
};
q.z = function() {
  return this.end - this.start
};
q.ga = function() {
  return A.a(this.Da, this.end - 1)
};
q.Ja = function(a, b, c) {
  return a.M(a, b, c)
};
q.B = function(a, b) {
  return Mb(a, b)
};
q.F = function(a, b) {
  return new Cd(b, this.Da, this.start, this.end, this.l)
};
q.C = o("h");
q.N = function(a, b) {
  return A.a(this.Da, this.start + b)
};
q.J = function(a, b, c) {
  return A.c(this.Da, this.start + b, c)
};
q.K = function() {
  return F(kd, this.h)
};
Cd;
var Ed = function Dd(b, c, d, f) {
  var d = b.root.w === d.w ? d : new ld(b.root.w, d.g.slice()), h = b.k - 1 >>> c & 31;
  if(5 === c) {
    b = f
  }else {
    var i = d.g[h], b = i != l ? Dd(b, c - 5, i, f) : nd(b.root.w, c - 5, f)
  }
  d.g[h] = b;
  return d
};
function vd(a, b, c, d) {
  this.k = a;
  this.shift = b;
  this.root = c;
  this.W = d;
  this.j = 275;
  this.o = 22
}
q = vd.prototype;
q.call = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.v(this, c);
      case 3:
        return this.p(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.v = function(a, b) {
  return a.J(a, b, l)
};
q.p = function(a, b, c) {
  return a.J(a, b, c)
};
q.N = function(a, b) {
  if(this.root.w) {
    return qd(a, b)[b & 31]
  }
  e(Error("nth after persistent!"))
};
q.J = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.k : d) ? a.N(a, b) : c
};
q.z = function() {
  if(this.root.w) {
    return this.k
  }
  e(Error("count after persistent!"))
};
function Fd(a, b, c, d) {
  if(a.root.w) {
    if(function() {
      var b = 0 <= c;
      return b ? c < a.k : b
    }()) {
      if(md(b) <= c) {
        a.W[c & 31] = d
      }else {
        var f = function i(b, f) {
          var n = a.root.w === f.w ? f : new ld(a.root.w, f.g.slice());
          if(0 === b) {
            n.g[c & 31] = d
          }else {
            var t = c >>> b & 31, r = i(b - 5, n.g[t]);
            n.g[t] = r
          }
          return n
        }.call(l, a.shift, a.root);
        a.root = f
      }
      return b
    }
    if(c === a.k) {
      return b.Ia(b, d)
    }
    e(Error([U("Index "), U(c), U(" out of bounds for TransientVector of length"), U(a.k)].join("")))
  }
  e(Error("assoc! after persistent!"))
}
q.Ha = function(a, b, c) {
  return Fd(a, a, b, c)
};
q.Ia = function(a, b) {
  if(this.root.w) {
    if(32 > this.k - md(a)) {
      this.W[this.k & 31] = b
    }else {
      var c = new ld(this.root.w, this.W), d = Ka.b(32);
      d[0] = b;
      this.W = d;
      if(this.k >>> 5 > 1 << this.shift) {
        var d = Ka.b(32), f = this.shift + 5;
        d[0] = this.root;
        d[1] = nd(this.root.w, this.shift, c);
        this.root = new ld(this.root.w, d);
        this.shift = f
      }else {
        this.root = Ed(a, this.shift, this.root, c)
      }
    }
    this.k += 1;
    return a
  }
  e(Error("conj! after persistent!"))
};
q.Wa = function(a) {
  if(this.root.w) {
    this.root.w = l;
    var a = this.k - md(a), b = Ka.b(a);
    gc(this.W, 0, b, 0, a);
    return new ud(l, this.k, this.shift, this.root, b, l)
  }
  e(Error("persistent! called twice"))
};
vd;
function Gd(a, b, c, d) {
  this.h = a;
  this.Y = b;
  this.wa = c;
  this.l = d;
  this.o = 0;
  this.j = 31850572
}
q = Gd.prototype;
q.H = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = Jb(a)
};
q.G = function(a, b) {
  return P(b, a)
};
q.toString = function() {
  return R.e(G([this], 0))
};
q.A = ba();
q.T = function() {
  return C(this.Y)
};
q.R = function(a) {
  var b = J(this.Y);
  return b ? new Gd(this.h, b, this.wa, l) : this.wa == l ? a.K(a) : new Gd(this.h, this.wa, l, l)
};
q.B = function(a, b) {
  return Mb(a, b)
};
q.F = function(a, b) {
  return new Gd(b, this.Y, this.wa, this.l)
};
q.C = o("h");
q.K = function() {
  return F(Q, this.h)
};
Gd;
function Hd(a, b, c, d, f) {
  this.h = a;
  this.count = b;
  this.Y = c;
  this.wa = d;
  this.l = f;
  this.o = 0;
  this.j = 31858766
}
q = Hd.prototype;
q.H = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = Jb(a)
};
q.G = function(a, b) {
  var c;
  w(this.Y) ? (c = this.wa, c = new Hd(this.h, this.count + 1, this.Y, Rb.a(w(c) ? c : xd, b), l)) : c = new Hd(this.h, this.count + 1, Rb.a(this.Y, b), xd, l);
  return c
};
q.toString = function() {
  return R.e(G([this], 0))
};
q.A = function() {
  var a = S(this.wa), b = this.Y;
  return w(w(b) ? b : a) ? new Gd(l, this.Y, S(a), l) : l
};
q.z = o("count");
q.ga = function() {
  return C(this.Y)
};
q.T = function() {
  return K(this.Y)
};
q.R = function(a) {
  return M(S(a))
};
q.B = function(a, b) {
  return Mb(a, b)
};
q.F = function(a, b) {
  return new Hd(b, this.count, this.Y, this.wa, this.l)
};
q.C = o("h");
q.K = function() {
  return Id
};
Hd;
var Id = new Hd(l, 0, l, xd, 0);
function Jd() {
  this.o = 0;
  this.j = 2097152
}
Jd.prototype.B = p(m);
Jd;
var Kd = new Jd;
function Ld(a, b) {
  return jc(cc(b) ? T(a) === T(b) ? Xc(Yc, Zc.a(function(a) {
    return Eb.a(E.c(b, K(a), Kd), Pb(a))
  }, a)) : l : l)
}
function Md(a, b, c) {
  for(var d = c.length, f = 0;;) {
    if(f < d) {
      if(b === c[f]) {
        return f
      }
      f += a
    }else {
      return l
    }
  }
}
function Nd(a, b) {
  var c = ac.b(a), d = ac.b(b);
  return c < d ? -1 : c > d ? 1 : 0
}
function Od(a, b, c) {
  for(var d = a.keys, f = d.length, h = a.Ba, i = Wb(Pd, Xb(a)), a = 0, i = ub(i);;) {
    if(a < f) {
      var j = d[a], a = a + 1, i = xb(i, j, h[j])
    }else {
      return Tc(xb(i, b, c))
    }
  }
}
function Qd(a, b) {
  for(var c = {}, d = b.length, f = 0;;) {
    if(f < d) {
      var h = b[f];
      c[h] = a[h];
      f += 1
    }else {
      break
    }
  }
  return c
}
function Rd(a, b, c, d, f) {
  this.h = a;
  this.keys = b;
  this.Ba = c;
  this.ob = d;
  this.l = f;
  this.o = 1;
  this.j = 15075087
}
q = Rd.prototype;
q.Ga = function(a) {
  return Sc(hd(Gb(), a))
};
q.H = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = xc(a)
};
q.v = function(a, b) {
  return a.p(a, b, l)
};
q.p = function(a, b, c) {
  return((a = ga(b)) ? Md(1, b, this.keys) != l : a) ? this.Ba[b] : c
};
q.M = function(a, b, c) {
  if(ga(b)) {
    var d = this.ob > Sd;
    if(d ? d : this.keys.length >= Sd) {
      return Od(a, b, c)
    }
    if(Md(1, b, this.keys) != l) {
      return a = Qd(this.Ba, this.keys), a[b] = c, new Rd(this.h, this.keys, a, this.ob + 1, l)
    }
    a = Qd(this.Ba, this.keys);
    d = this.keys.slice();
    a[b] = c;
    d.push(b);
    return new Rd(this.h, d, a, this.ob + 1, l)
  }
  return Od(a, b, c)
};
q.Fa = function(a, b) {
  var c = ga(b);
  return(c ? Md(1, b, this.keys) != l : c) ? g : m
};
q.call = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.v(this, c);
      case 3:
        return this.p(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.G = function(a, b) {
  return dc(b) ? a.M(a, A.a(b, 0), A.a(b, 1)) : qc.c(Na, a, b)
};
q.toString = function() {
  return R.e(G([this], 0))
};
q.A = function() {
  var a = this;
  return 0 < a.keys.length ? Zc.a(function(b) {
    return Ad.e(G([b, a.Ba[b]], 0))
  }, a.keys.sort(Nd)) : l
};
q.z = function() {
  return this.keys.length
};
q.B = function(a, b) {
  return Ld(a, b)
};
q.F = function(a, b) {
  return new Rd(b, this.keys, this.Ba, this.ob, this.l)
};
q.C = o("h");
q.K = function() {
  return F(Td, this.h)
};
Rd;
var Td = new Rd(l, [], {}, 0, 0), Sd = 32;
function Ud(a, b) {
  return new Rd(l, a, b, 0, l)
}
function Vd(a, b, c, d) {
  this.h = a;
  this.count = b;
  this.ra = c;
  this.l = d;
  this.o = 0;
  this.j = 15075087
}
q = Vd.prototype;
q.H = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = xc(a)
};
q.v = function(a, b) {
  return a.p(a, b, l)
};
q.p = function(a, b, c) {
  a = this.ra[ac.b(b)];
  b = w(a) ? Md(2, b, a) : l;
  return w(b) ? a[b + 1] : c
};
q.M = function(a, b, c) {
  var a = ac.b(b), d = this.ra[a];
  if(w(d)) {
    var d = d.slice(), f = Ba(this.ra);
    f[a] = d;
    a = Md(2, b, d);
    if(w(a)) {
      return d[a + 1] = c, new Vd(this.h, this.count, f, l)
    }
    d.push(b, c);
    return new Vd(this.h, this.count + 1, f, l)
  }
  d = Ba(this.ra);
  d[a] = [b, c];
  return new Vd(this.h, this.count + 1, d, l)
};
q.Fa = function(a, b) {
  var c = this.ra[ac.b(b)];
  return w(w(c) ? Md(2, b, c) : l) ? g : m
};
q.call = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.v(this, c);
      case 3:
        return this.p(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.G = function(a, b) {
  return dc(b) ? a.M(a, A.a(b, 0), A.a(b, 1)) : qc.c(Na, a, b)
};
q.toString = function() {
  return R.e(G([this], 0))
};
q.A = function() {
  var a = this;
  if(0 < a.count) {
    var b = fc(a.ra).sort();
    return gd.a(function(b) {
      return Zc.a(zd, id.a(2, a.ra[b]))
    }, b)
  }
  return l
};
q.z = o("count");
q.B = function(a, b) {
  return Ld(a, b)
};
q.F = function(a, b) {
  return new Vd(b, this.count, this.ra, this.l)
};
q.C = o("h");
q.K = function() {
  return F(Wd, this.h)
};
Vd;
var Wd = new Vd(l, 0, {}, 0);
function Xd(a, b) {
  for(var c = a.g, d = c.length, f = 0;;) {
    if(d <= f) {
      return-1
    }
    if(Eb.a(c[f], b)) {
      return f
    }
    f += 2
  }
}
function Yd(a, b, c, d) {
  this.h = a;
  this.k = b;
  this.g = c;
  this.l = d;
  this.o = 1;
  this.j = 16123663
}
q = Yd.prototype;
q.Ga = function() {
  return new Zd({}, this.g.length, this.g.slice())
};
q.H = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = xc(a)
};
q.v = function(a, b) {
  return a.p(a, b, l)
};
q.p = function(a, b, c) {
  a = Xd(a, b);
  return-1 === a ? c : this.g[a + 1]
};
q.M = function(a, b, c) {
  var d = this, f = Xd(a, b);
  return-1 === f ? d.k < $d ? new Yd(d.h, d.k + 1, function() {
    var a = d.g.slice();
    a.push(b);
    a.push(c);
    return a
  }(), l) : Tc(Uc(Sc(hd(Pd, a)), b, c)) : c === d.g[f + 1] ? a : new Yd(d.h, d.k, function() {
    var a = d.g.slice();
    a[f + 1] = c;
    return a
  }(), l)
};
q.Fa = function(a, b) {
  return-1 !== Xd(a, b)
};
q.call = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.v(this, c);
      case 3:
        return this.p(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.G = function(a, b) {
  return dc(b) ? a.M(a, A.a(b, 0), A.a(b, 1)) : qc.c(Na, a, b)
};
q.toString = function() {
  return R.e(G([this], 0))
};
q.A = function() {
  var a = this;
  if(0 < a.k) {
    var b = a.g.length, c = function f(c) {
      return new V(l, m, function() {
        return c < b ? P(W([a.g[c], a.g[c + 1]]), f(c + 2)) : l
      }, l)
    };
    return c.b ? c.b(0) : c.call(l, 0)
  }
  return l
};
q.z = o("k");
q.B = function(a, b) {
  return Ld(a, b)
};
q.F = function(a, b) {
  return new Yd(b, this.k, this.g, this.l)
};
q.C = o("h");
q.K = function() {
  return F(ae, this.h)
};
Yd;
var ae = new Yd(l, 0, [], l), $d = 16;
function Zd(a, b, c) {
  this.La = a;
  this.ta = b;
  this.g = c;
  this.o = 14;
  this.j = 258
}
q = Zd.prototype;
q.Ha = function(a, b, c) {
  if(w(this.La)) {
    var d = Xd(a, b);
    if(-1 === d) {
      if(this.ta + 2 <= 2 * $d) {
        return this.ta += 2, this.g.push(b), this.g.push(c), a
      }
      var f;
      a: {
        for(var a = this.ta, d = this.g, h = ub(Td), i = 0;;) {
          if(i < a) {
            h = xb(h, d[i], d[i + 1]), i += 2
          }else {
            f = h;
            break a
          }
        }
      }
      return xb(f, b, c)
    }
    c !== this.g[d + 1] && (this.g[d + 1] = c);
    return a
  }
  e(Error("assoc! after persistent!"))
};
q.Ia = function(a, b) {
  if(w(this.La)) {
    var c;
    c = b ? ((c = b.j & 2048) ? c : b.yc) ? g : b.j ? m : x(Wa, b) : x(Wa, b);
    if(c) {
      return a.Ha(a, Xa(b), Ya(b))
    }
    c = S(b);
    for(var d = a;;) {
      var f = K(c);
      if(w(f)) {
        c = J(c), d = d.Ha(d, Xa(f), Ya(f))
      }else {
        return d
      }
    }
  }else {
    e(Error("conj! after persistent!"))
  }
};
q.Wa = function() {
  if(w(this.La)) {
    return this.La = m, new Yd(l, sc((this.ta - this.ta % 2) / 2), this.g, l)
  }
  e(Error("persistent! called twice"))
};
q.v = function(a, b) {
  return a.p(a, b, l)
};
q.p = function(a, b, c) {
  if(w(this.La)) {
    return a = Xd(a, b), -1 === a ? c : this.g[a + 1]
  }
  e(Error("lookup after persistent!"))
};
q.z = function() {
  if(w(this.La)) {
    return sc((this.ta - this.ta % 2) / 2)
  }
  e(Error("count after persistent!"))
};
Zd;
function be(a) {
  this.n = a
}
be;
function ce(a, b) {
  return ga(a) ? a === b : Eb.a(a, b)
}
var de = function() {
  function a(a, b, c, i, j) {
    a = a.slice();
    a[b] = c;
    a[i] = j;
    return a
  }
  function b(a, b, c) {
    a = a.slice();
    a[b] = c;
    return a
  }
  var c = l, c = function(c, f, h, i, j) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, f, h);
      case 5:
        return a.call(this, c, f, h, i, j)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.c = b;
  c.$ = a;
  return c
}(), ee = function() {
  function a(a, b, c, i, j, k) {
    a = a.Na(b);
    a.g[c] = i;
    a.g[j] = k;
    return a
  }
  function b(a, b, c, i) {
    a = a.Na(b);
    a.g[c] = i;
    return a
  }
  var c = l, c = function(c, f, h, i, j, k) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, f, h, i);
      case 6:
        return a.call(this, c, f, h, i, j, k)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.r = b;
  c.na = a;
  return c
}();
function fe(a, b, c) {
  this.w = a;
  this.L = b;
  this.g = c
}
q = fe.prototype;
q.ba = function(a, b, c, d, f, h) {
  var i = 1 << (c >>> b & 31), j = tc(this.L & i - 1);
  if(0 === (this.L & i)) {
    var k = tc(this.L);
    if(2 * k < this.g.length) {
      a = this.Na(a);
      b = a.g;
      h.n = g;
      a: {
        c = 2 * (k - j);
        h = 2 * j + (c - 1);
        for(k = 2 * (j + 1) + (c - 1);;) {
          if(0 === c) {
            break a
          }
          b[k] = b[h];
          k -= 1;
          c -= 1;
          h -= 1
        }
      }
      b[2 * j] = d;
      b[2 * j + 1] = f;
      a.L |= i;
      return a
    }
    if(16 <= k) {
      j = Ka.b(32);
      j[c >>> b & 31] = ge.ba(a, b + 5, c, d, f, h);
      for(f = d = 0;;) {
        if(32 > d) {
          0 !== (this.L >>> d & 1) && (j[d] = this.g[f] != l ? ge.ba(a, b + 5, ac.b(this.g[f]), this.g[f], this.g[f + 1], h) : this.g[f + 1], f += 2), d += 1
        }else {
          break
        }
      }
      return new he(a, k + 1, j)
    }
    b = Ka.b(2 * (k + 4));
    gc(this.g, 0, b, 0, 2 * j);
    b[2 * j] = d;
    b[2 * j + 1] = f;
    gc(this.g, 2 * j, b, 2 * (j + 1), 2 * (k - j));
    h.n = g;
    d = this.Na(a);
    d.g = b;
    d.L |= i;
    return d
  }
  k = this.g[2 * j];
  i = this.g[2 * j + 1];
  if(k == l) {
    return d = i.ba(a, b + 5, c, d, f, h), d === i ? this : ee.r(this, a, 2 * j + 1, d)
  }
  if(ce(d, k)) {
    return f === i ? this : ee.r(this, a, 2 * j + 1, f)
  }
  h.n = g;
  return ee.na(this, a, 2 * j, l, 2 * j + 1, ie.Xa(a, b + 5, k, i, c, d, f))
};
q.Za = function() {
  return je.b(this.g)
};
q.Na = function(a) {
  if(a === this.w) {
    return this
  }
  var b = tc(this.L), c = Ka.b(0 > b ? 4 : 2 * (b + 1));
  gc(this.g, 0, c, 0, 2 * b);
  return new fe(a, this.L, c)
};
q.aa = function(a, b, c, d, f) {
  var h = 1 << (b >>> a & 31), i = tc(this.L & h - 1);
  if(0 === (this.L & h)) {
    var j = tc(this.L);
    if(16 <= j) {
      i = Ka.b(32);
      i[b >>> a & 31] = ge.aa(a + 5, b, c, d, f);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.L >>> c & 1) && (i[c] = this.g[d] != l ? ge.aa(a + 5, ac.b(this.g[d]), this.g[d], this.g[d + 1], f) : this.g[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new he(l, j + 1, i)
    }
    a = Ka.b(2 * (j + 1));
    gc(this.g, 0, a, 0, 2 * i);
    a[2 * i] = c;
    a[2 * i + 1] = d;
    gc(this.g, 2 * i, a, 2 * (i + 1), 2 * (j - i));
    f.n = g;
    return new fe(l, this.L | h, a)
  }
  h = this.g[2 * i];
  j = this.g[2 * i + 1];
  if(h == l) {
    return f = j.aa(a + 5, b, c, d, f), f === j ? this : new fe(l, this.L, de.c(this.g, 2 * i + 1, f))
  }
  if(ce(c, h)) {
    return d === j ? this : new fe(l, this.L, de.c(this.g, 2 * i + 1, d))
  }
  f.n = g;
  return new fe(l, this.L, de.$(this.g, 2 * i, l, 2 * i + 1, ie.na(a + 5, h, j, b, c, d)))
};
q.sa = function(a, b, c, d) {
  var f = 1 << (b >>> a & 31);
  if(0 === (this.L & f)) {
    return d
  }
  var h = tc(this.L & f - 1), f = this.g[2 * h], h = this.g[2 * h + 1];
  return f == l ? h.sa(a + 5, b, c, d) : ce(c, f) ? h : d
};
fe;
var ge = new fe(l, 0, Ka.b(0));
function he(a, b, c) {
  this.w = a;
  this.k = b;
  this.g = c
}
q = he.prototype;
q.ba = function(a, b, c, d, f, h) {
  var i = c >>> b & 31, j = this.g[i];
  if(j == l) {
    return a = ee.r(this, a, i, ge.ba(a, b + 5, c, d, f, h)), a.k += 1, a
  }
  b = j.ba(a, b + 5, c, d, f, h);
  return b === j ? this : ee.r(this, a, i, b)
};
q.Za = function() {
  return ke.b(this.g)
};
q.Na = function(a) {
  return a === this.w ? this : new he(a, this.k, this.g.slice())
};
q.aa = function(a, b, c, d, f) {
  var h = b >>> a & 31, i = this.g[h];
  if(i == l) {
    return new he(l, this.k + 1, de.c(this.g, h, ge.aa(a + 5, b, c, d, f)))
  }
  a = i.aa(a + 5, b, c, d, f);
  return a === i ? this : new he(l, this.k, de.c(this.g, h, a))
};
q.sa = function(a, b, c, d) {
  var f = this.g[b >>> a & 31];
  return f != l ? f.sa(a + 5, b, c, d) : d
};
he;
function le(a, b, c) {
  for(var b = 2 * b, d = 0;;) {
    if(d < b) {
      if(ce(c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function me(a, b, c, d) {
  this.w = a;
  this.oa = b;
  this.k = c;
  this.g = d
}
q = me.prototype;
q.ba = function(a, b, c, d, f, h) {
  if(c === this.oa) {
    b = le(this.g, this.k, d);
    if(-1 === b) {
      if(this.g.length > 2 * this.k) {
        return a = ee.na(this, a, 2 * this.k, d, 2 * this.k + 1, f), h.n = g, a.k += 1, a
      }
      c = this.g.length;
      b = Ka.b(c + 2);
      gc(this.g, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = f;
      h.n = g;
      h = this.k + 1;
      a === this.w ? (this.g = b, this.k = h, a = this) : a = new me(this.w, this.oa, h, b);
      return a
    }
    return this.g[b + 1] === f ? this : ee.r(this, a, b + 1, f)
  }
  return(new fe(a, 1 << (this.oa >>> b & 31), [l, this, l, l])).ba(a, b, c, d, f, h)
};
q.Za = function() {
  return je.b(this.g)
};
q.Na = function(a) {
  if(a === this.w) {
    return this
  }
  var b = Ka.b(2 * (this.k + 1));
  gc(this.g, 0, b, 0, 2 * this.k);
  return new me(a, this.oa, this.k, b)
};
q.aa = function(a, b, c, d, f) {
  return b === this.oa ? (a = le(this.g, this.k, c), -1 === a ? (a = this.g.length, b = Ka.b(a + 2), gc(this.g, 0, b, 0, a), b[a] = c, b[a + 1] = d, f.n = g, new me(l, this.oa, this.k + 1, b)) : Eb.a(this.g[a], d) ? this : new me(l, this.oa, this.k, de.c(this.g, a + 1, d))) : (new fe(l, 1 << (this.oa >>> a & 31), [l, this])).aa(a, b, c, d, f)
};
q.sa = function(a, b, c, d) {
  a = le(this.g, this.k, c);
  return 0 > a ? d : ce(c, this.g[a]) ? this.g[a + 1] : d
};
me;
var ie = function() {
  function a(a, b, c, i, j, k, n) {
    var t = ac.b(c);
    if(t === j) {
      return new me(l, t, 2, [c, i, k, n])
    }
    var r = new be(m);
    return ge.ba(a, b, t, c, i, r).ba(a, b, j, k, n, r)
  }
  function b(a, b, c, i, j, k) {
    var n = ac.b(b);
    if(n === i) {
      return new me(l, n, 2, [b, c, j, k])
    }
    var t = new be(m);
    return ge.aa(a, n, b, c, t).aa(a, i, j, k, t)
  }
  var c = l, c = function(c, f, h, i, j, k, n) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, f, h, i, j, k);
      case 7:
        return a.call(this, c, f, h, i, j, k, n)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.na = b;
  c.Xa = a;
  return c
}();
function oe(a, b, c, d, f) {
  this.h = a;
  this.va = b;
  this.t = c;
  this.la = d;
  this.l = f;
  this.o = 0;
  this.j = 31850572
}
q = oe.prototype;
q.H = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = Jb(a)
};
q.G = function(a, b) {
  return P(b, a)
};
q.toString = function() {
  return R.e(G([this], 0))
};
q.A = ba();
q.T = function() {
  return this.la == l ? W([this.va[this.t], this.va[this.t + 1]]) : K(this.la)
};
q.R = function() {
  return this.la == l ? je.c(this.va, this.t + 2, l) : je.c(this.va, this.t, J(this.la))
};
q.B = function(a, b) {
  return Mb(a, b)
};
q.F = function(a, b) {
  return new oe(b, this.va, this.t, this.la, this.l)
};
q.C = o("h");
q.K = function() {
  return F(Q, this.h)
};
oe;
var je = function() {
  function a(a, b, c) {
    if(c == l) {
      for(c = a.length;;) {
        if(b < c) {
          if(a[b] != l) {
            return new oe(l, a, b, l, l)
          }
          var i = a[b + 1];
          if(w(i) && (i = i.Za(), w(i))) {
            return new oe(l, a, b + 2, i, l)
          }
          b += 2
        }else {
          return l
        }
      }
    }else {
      return new oe(l, a, b, c, l)
    }
  }
  function b(a) {
    return c.c(a, 0, l)
  }
  var c = l, c = function(c, f, h) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.c = a;
  return c
}();
function pe(a, b, c, d, f) {
  this.h = a;
  this.va = b;
  this.t = c;
  this.la = d;
  this.l = f;
  this.o = 0;
  this.j = 31850572
}
q = pe.prototype;
q.H = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = Jb(a)
};
q.G = function(a, b) {
  return P(b, a)
};
q.toString = function() {
  return R.e(G([this], 0))
};
q.A = ba();
q.T = function() {
  return K(this.la)
};
q.R = function() {
  return ke.r(l, this.va, this.t, J(this.la))
};
q.B = function(a, b) {
  return Mb(a, b)
};
q.F = function(a, b) {
  return new pe(b, this.va, this.t, this.la, this.l)
};
q.C = o("h");
q.K = function() {
  return F(Q, this.h)
};
pe;
var ke = function() {
  function a(a, b, c, i) {
    if(i == l) {
      for(i = b.length;;) {
        if(c < i) {
          var j = b[c];
          if(w(j) && (j = j.Za(), w(j))) {
            return new pe(a, b, c + 1, j, l)
          }
          c += 1
        }else {
          return l
        }
      }
    }else {
      return new pe(a, b, c, i, l)
    }
  }
  function b(a) {
    return c.r(l, a, 0, l)
  }
  var c = l, c = function(c, f, h, i) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, f, h, i)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.r = a;
  return c
}();
function qe(a, b, c, d, f, h) {
  this.h = a;
  this.k = b;
  this.root = c;
  this.U = d;
  this.Z = f;
  this.l = h;
  this.o = 1;
  this.j = 16123663
}
q = qe.prototype;
q.Ga = function() {
  return new re({}, this.root, this.k, this.U, this.Z)
};
q.H = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = xc(a)
};
q.v = function(a, b) {
  return a.p(a, b, l)
};
q.p = function(a, b, c) {
  return b == l ? this.U ? this.Z : c : this.root == l ? c : this.root.sa(0, ac.b(b), b, c)
};
q.M = function(a, b, c) {
  if(b == l) {
    var d = this.U;
    return(d ? c === this.Z : d) ? a : new qe(this.h, this.U ? this.k : this.k + 1, this.root, g, c, l)
  }
  d = new be(m);
  c = (this.root == l ? ge : this.root).aa(0, ac.b(b), b, c, d);
  return c === this.root ? a : new qe(this.h, d.n ? this.k + 1 : this.k, c, this.U, this.Z, l)
};
q.Fa = function(a, b) {
  return b == l ? this.U : this.root == l ? m : this.root.sa(0, ac.b(b), b, hc) !== hc
};
q.call = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.v(this, c);
      case 3:
        return this.p(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.G = function(a, b) {
  return dc(b) ? a.M(a, A.a(b, 0), A.a(b, 1)) : qc.c(Na, a, b)
};
q.toString = function() {
  return R.e(G([this], 0))
};
q.A = function() {
  if(0 < this.k) {
    var a = this.root != l ? this.root.Za() : l;
    return this.U ? P(W([l, this.Z]), a) : a
  }
  return l
};
q.z = o("k");
q.B = function(a, b) {
  return Ld(a, b)
};
q.F = function(a, b) {
  return new qe(b, this.k, this.root, this.U, this.Z, this.l)
};
q.C = o("h");
q.K = function() {
  return F(Pd, this.h)
};
qe;
var Pd = new qe(l, 0, l, m, l, 0);
function re(a, b, c, d, f) {
  this.w = a;
  this.root = b;
  this.count = c;
  this.U = d;
  this.Z = f;
  this.o = 14;
  this.j = 258
}
q = re.prototype;
q.Ha = function(a, b, c) {
  return se(a, b, c)
};
q.Ia = function(a, b) {
  var c;
  a: {
    if(a.w) {
      var d;
      d = b ? ((d = b.j & 2048) ? d : b.yc) ? g : b.j ? m : x(Wa, b) : x(Wa, b);
      if(d) {
        c = se(a, Xa(b), Ya(b))
      }else {
        d = S(b);
        for(var f = a;;) {
          var h = K(d);
          if(w(h)) {
            d = J(d), f = se(f, Xa(h), Ya(h))
          }else {
            c = f;
            break a
          }
        }
      }
    }else {
      e(Error("conj! after persistent"))
    }
  }
  return c
};
q.Wa = function(a) {
  var b;
  a.w ? (a.w = l, b = new qe(l, a.count, a.root, a.U, a.Z, l)) : e(Error("persistent! called twice"));
  return b
};
q.v = function(a, b) {
  return b == l ? this.U ? this.Z : l : this.root == l ? l : this.root.sa(0, ac.b(b), b)
};
q.p = function(a, b, c) {
  return b == l ? this.U ? this.Z : c : this.root == l ? c : this.root.sa(0, ac.b(b), b, c)
};
q.z = function() {
  if(this.w) {
    return this.count
  }
  e(Error("count after persistent!"))
};
function se(a, b, c) {
  if(a.w) {
    if(b == l) {
      if(a.Z !== c && (a.Z = c), !a.U) {
        a.count += 1, a.U = g
      }
    }else {
      var d = new be(m), b = (a.root == l ? ge : a.root).ba(a.w, 0, ac.b(b), b, c, d);
      b !== a.root && (a.root = b);
      d.n && (a.count += 1)
    }
    return a
  }
  e(Error("assoc! after persistent!"))
}
re;
function te(a, b, c) {
  for(var d = b;;) {
    if(a != l) {
      b = c ? a.left : a.right, d = Rb.a(d, a), a = b
    }else {
      return d
    }
  }
}
function ue(a, b, c, d, f) {
  this.h = a;
  this.stack = b;
  this.$a = c;
  this.k = d;
  this.l = f;
  this.o = 0;
  this.j = 31850570
}
q = ue.prototype;
q.H = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = Jb(a)
};
q.G = function(a, b) {
  return P(b, a)
};
q.toString = function() {
  return R.e(G([this], 0))
};
q.A = ba();
q.z = function(a) {
  return 0 > this.k ? T(J(a)) + 1 : this.k
};
q.T = function() {
  return ab(this.stack)
};
q.R = function() {
  var a = K(this.stack), a = te(this.$a ? a.right : a.left, J(this.stack), this.$a);
  return a != l ? new ue(l, a, this.$a, this.k - 1, l) : Q
};
q.B = function(a, b) {
  return Mb(a, b)
};
q.F = function(a, b) {
  return new ue(b, this.stack, this.$a, this.k, this.l)
};
q.C = o("h");
ue;
function ve(a, b, c, d, f) {
  this.key = a;
  this.n = b;
  this.left = c;
  this.right = d;
  this.l = f;
  this.o = 0;
  this.j = 32402207
}
q = ve.prototype;
q.H = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = Jb(a)
};
q.v = function(a, b) {
  return a.J(a, b, l)
};
q.p = function(a, b, c) {
  return a.J(a, b, c)
};
q.M = function(a, b, c) {
  return Vb.c(W([this.key, this.n]), b, c)
};
q.call = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.v(this, c);
      case 3:
        return this.p(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.G = function(a, b) {
  return W([this.key, this.n, b])
};
q.fb = o("key");
q.gb = o("n");
q.$b = function(a) {
  return a.bc(this)
};
q.replace = function(a, b, c, d) {
  return new ve(a, b, c, d, l)
};
q.Zb = function(a) {
  return a.ac(this)
};
q.ac = function(a) {
  return new ve(a.key, a.n, this, a.right, l)
};
q.toString = function() {
  return function() {
    switch(arguments.length) {
      case 0:
        return R.e(G([this], 0))
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.bc = function(a) {
  return new ve(a.key, a.n, a.left, this, l)
};
q.bb = function() {
  return this
};
q.ea = function(a, b) {
  return O.a(a, b)
};
q.fa = function(a, b, c) {
  return O.c(a, b, c)
};
q.A = function() {
  return N.a(this.key, this.n)
};
q.z = p(2);
q.ga = o("n");
q.Ja = function(a, b, c) {
  return cb(W([this.key, this.n]), b, c)
};
q.B = function(a, b) {
  return Mb(a, b)
};
q.F = function(a, b) {
  return Wb(W([this.key, this.n]), b)
};
q.C = p(l);
q.N = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.n : l
};
q.J = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.n : c
};
q.K = function() {
  return xd
};
ve;
function we(a, b, c, d, f) {
  this.key = a;
  this.n = b;
  this.left = c;
  this.right = d;
  this.l = f;
  this.o = 0;
  this.j = 32402207
}
q = we.prototype;
q.H = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = Jb(a)
};
q.v = function(a, b) {
  return a.J(a, b, l)
};
q.p = function(a, b, c) {
  return a.J(a, b, c)
};
q.M = function(a, b, c) {
  return Vb.c(W([this.key, this.n]), b, c)
};
q.call = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.v(this, c);
      case 3:
        return this.p(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.G = function(a, b) {
  return W([this.key, this.n, b])
};
q.fb = o("key");
q.gb = o("n");
q.$b = function(a) {
  return new we(this.key, this.n, this.left, a, l)
};
q.replace = function(a, b, c, d) {
  return new we(a, b, c, d, l)
};
q.Zb = function(a) {
  return new we(this.key, this.n, a, this.right, l)
};
q.ac = function(a) {
  return Fb(we, this.left) ? new we(this.key, this.n, this.left.bb(), new ve(a.key, a.n, this.right, a.right, l), l) : Fb(we, this.right) ? new we(this.right.key, this.right.n, new ve(this.key, this.n, this.left, this.right.left, l), new ve(a.key, a.n, this.right.right, a.right, l), l) : new ve(a.key, a.n, this, a.right, l)
};
q.toString = function() {
  return function() {
    switch(arguments.length) {
      case 0:
        return R.e(G([this], 0))
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.bc = function(a) {
  return Fb(we, this.right) ? new we(this.key, this.n, new ve(a.key, a.n, a.left, this.left, l), this.right.bb(), l) : Fb(we, this.left) ? new we(this.left.key, this.left.n, new ve(a.key, a.n, a.left, this.left.left, l), new ve(this.key, this.n, this.left.right, this.right, l), l) : new ve(a.key, a.n, a.left, this, l)
};
q.bb = function() {
  return new ve(this.key, this.n, this.left, this.right, l)
};
q.ea = function(a, b) {
  return O.a(a, b)
};
q.fa = function(a, b, c) {
  return O.c(a, b, c)
};
q.A = function() {
  return N.a(this.key, this.n)
};
q.z = p(2);
q.ga = o("n");
q.Ja = function(a, b, c) {
  return cb(W([this.key, this.n]), b, c)
};
q.B = function(a, b) {
  return Mb(a, b)
};
q.F = function(a, b) {
  return Wb(W([this.key, this.n]), b)
};
q.C = p(l);
q.N = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.n : l
};
q.J = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.n : c
};
q.K = function() {
  return xd
};
we;
var ye = function xe(b, c, d, f, h) {
  if(c == l) {
    return new we(d, f, l, l, l)
  }
  var i = b.a ? b.a(d, c.key) : b.call(l, d, c.key);
  if(0 === i) {
    return h[0] = c, l
  }
  if(0 > i) {
    return b = xe(b, c.left, d, f, h), b != l ? c.Zb(b) : l
  }
  b = xe(b, c.right, d, f, h);
  return b != l ? c.$b(b) : l
}, Ae = function ze(b, c, d, f) {
  var h = c.key, i = b.a ? b.a(d, h) : b.call(l, d, h);
  return 0 === i ? c.replace(h, f, c.left, c.right) : 0 > i ? c.replace(h, c.n, ze(b, c.left, d, f), c.right) : c.replace(h, c.n, c.left, ze(b, c.right, d, f))
};
function Be(a, b, c, d, f) {
  this.pa = a;
  this.Sa = b;
  this.k = c;
  this.h = d;
  this.l = f;
  this.o = 0;
  this.j = 418776847
}
q = Be.prototype;
q.H = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = xc(a)
};
q.v = function(a, b) {
  return a.p(a, b, l)
};
q.p = function(a, b, c) {
  a = Ce(a, b);
  return a != l ? a.n : c
};
q.M = function(a, b, c) {
  var d = [l], f = ye(this.pa, this.Sa, b, c, d);
  return f == l ? (d = Ub.a(d, 0), Eb.a(c, d.n) ? a : new Be(this.pa, Ae(this.pa, this.Sa, b, c), this.k, this.h, l)) : new Be(this.pa, f.bb(), this.k + 1, this.h, l)
};
q.Fa = function(a, b) {
  return Ce(a, b) != l
};
q.call = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.v(this, c);
      case 3:
        return this.p(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.G = function(a, b) {
  return dc(b) ? a.M(a, A.a(b, 0), A.a(b, 1)) : qc.c(Na, a, b)
};
q.Va = function() {
  return 0 < this.k ? new ue(l, te(this.Sa, l, m), m, this.k, l) : l
};
q.toString = function() {
  return R.e(G([this], 0))
};
function Ce(a, b) {
  for(var c = a.Sa;;) {
    if(c != l) {
      var d = a.pa.a ? a.pa.a(b, c.key) : a.pa.call(l, b, c.key);
      if(0 === d) {
        return c
      }
      c = 0 > d ? c.left : c.right
    }else {
      return l
    }
  }
}
q.A = function() {
  return 0 < this.k ? new ue(l, te(this.Sa, l, g), g, this.k, l) : l
};
q.z = o("k");
q.B = function(a, b) {
  return Ld(a, b)
};
q.F = function(a, b) {
  return new Be(this.pa, this.Sa, this.k, b, this.l)
};
q.C = o("h");
q.K = function() {
  return F(De, this.h)
};
Be;
var De = new Be(oc, l, 0, l, 0), Gb = function() {
  function a(a) {
    var d = l;
    s(a) && (d = G(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    for(var a = S(a), b = ub(Pd);;) {
      if(a) {
        var f = J(J(a)), b = Uc(b, K(a), Pb(a)), a = f
      }else {
        return wb(b)
      }
    }
  }
  a.q = 0;
  a.m = function(a) {
    a = S(a);
    return b(a)
  };
  a.e = b;
  return a
}(), Ee = function() {
  function a(a) {
    var d = l;
    s(a) && (d = G(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    for(var a = S(a), b = De;;) {
      if(a) {
        var f = J(J(a)), b = Vb.c(b, K(a), Pb(a)), a = f
      }else {
        return b
      }
    }
  }
  a.q = 0;
  a.m = function(a) {
    a = S(a);
    return b(a)
  };
  a.e = b;
  return a
}();
function Fe(a) {
  return Xa(a)
}
function Ge(a, b, c) {
  this.h = a;
  this.Ya = b;
  this.l = c;
  this.o = 1;
  this.j = 15077647
}
q = Ge.prototype;
q.Ga = function() {
  return new He(ub(this.Ya))
};
q.H = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = yc(a)
};
q.v = function(a, b) {
  return a.p(a, b, l)
};
q.p = function(a, b, c) {
  return w(Ta(this.Ya, b)) ? b : c
};
q.call = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.v(this, c);
      case 3:
        return this.p(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.G = function(a, b) {
  return new Ge(this.h, Vb.c(this.Ya, b, l), l)
};
q.toString = function() {
  return R.e(G([this], 0))
};
q.A = function() {
  return S(Zc.a(K, this.Ya))
};
q.z = function(a) {
  return T(S(a))
};
q.B = function(a, b) {
  var c = bc(b);
  return c ? (c = T(a) === T(b)) ? Xc(function(b) {
    return nc(a, b)
  }, b) : c : c
};
q.F = function(a, b) {
  return new Ge(b, this.Ya, this.l)
};
q.C = o("h");
q.K = function() {
  return F(Ie, this.h)
};
Ge;
var Ie = new Ge(l, Gb(), 0);
function He(a) {
  this.Ca = a;
  this.j = 259;
  this.o = 34
}
q = He.prototype;
q.call = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return E.c(this.Ca, c, hc) === hc ? l : c;
      case 3:
        return E.c(this.Ca, c, hc) === hc ? d : c
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.v = function(a, b) {
  return a.p(a, b, l)
};
q.p = function(a, b, c) {
  return E.c(this.Ca, b, hc) === hc ? c : b
};
q.z = function() {
  return T(this.Ca)
};
q.Ia = function(a, b) {
  this.Ca = xb(this.Ca, b, l);
  return a
};
q.Wa = function() {
  return new Ge(l, wb(this.Ca), l)
};
He;
function Je(a, b, c) {
  this.h = a;
  this.Ta = b;
  this.l = c;
  this.o = 0;
  this.j = 417730831
}
q = Je.prototype;
q.H = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = yc(a)
};
q.v = function(a, b) {
  return a.p(a, b, l)
};
q.p = function(a, b, c) {
  return w(Ta(this.Ta, b)) ? b : c
};
q.call = function() {
  var a = l;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.v(this, c);
      case 3:
        return this.p(this, c, d)
    }
    e("Invalid arity: " + arguments.length)
  }
}();
q.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
q.G = function(a, b) {
  return new Je(this.h, Vb.c(this.Ta, b, l), l)
};
q.Va = function() {
  return Zc.a(Fe, pb(this.Ta))
};
q.toString = function() {
  return R.e(G([this], 0))
};
q.A = function() {
  return S(Zc.a(K, this.Ta))
};
q.z = function() {
  return T(this.Ta)
};
q.B = function(a, b) {
  var c = bc(b);
  return c ? (c = T(a) === T(b)) ? Xc(function(b) {
    return nc(a, b)
  }, b) : c : c
};
q.F = function(a, b) {
  return new Je(b, this.Ta, this.l)
};
q.C = o("h");
q.K = function() {
  return F(Ke, this.h)
};
Je;
var Ke = new Je(l, Ee(), 0), Le = function() {
  var a = l, b = function() {
    function a(c) {
      var h = l;
      s(c) && (h = G(Array.prototype.slice.call(arguments, 0), 0));
      return b.call(this, h)
    }
    function b(a) {
      for(var c = S(a), d = ub(Ie);;) {
        if(S(c)) {
          a = J(c), c = K(c), d = vb(d, c), c = a
        }else {
          return wb(d)
        }
      }
    }
    a.q = 0;
    a.m = function(a) {
      a = S(a);
      return b(a)
    };
    a.e = b;
    return a
  }(), a = function(a) {
    switch(arguments.length) {
      case 0:
        return Ie;
      default:
        return b.e(G(arguments, 0))
    }
    e("Invalid arity: " + arguments.length)
  };
  a.q = 0;
  a.m = b.m;
  a.O = function() {
    return Ie
  };
  a.e = b.e;
  return a
}();
function Me(a) {
  if(kc(a)) {
    return a
  }
  var b = lc(a);
  if(b ? b : mc(a)) {
    return b = a.lastIndexOf("/"), 0 > b ? vc.a(a, 2) : vc.a(a, b + 1)
  }
  e(Error([U("Doesn't support name: "), U(a)].join("")))
}
function Ne(a) {
  var b = lc(a);
  if(b ? b : mc(a)) {
    return b = a.lastIndexOf("/"), -1 < b ? vc.c(a, 2, b) : l
  }
  e(Error([U("Doesn't support namespace: "), U(a)].join("")))
}
function Oe(a, b, c, d, f) {
  this.h = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.l = f;
  this.o = 0;
  this.j = 32375006
}
q = Oe.prototype;
q.H = function(a) {
  var b = this.l;
  return b != l ? b : this.l = a = Jb(a)
};
q.ma = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new Oe(this.h, this.start + this.step, this.end, this.step, l) : l : this.start + this.step > this.end ? new Oe(this.h, this.start + this.step, this.end, this.step, l) : l
};
q.G = function(a, b) {
  return P(b, a)
};
q.toString = function() {
  return R.e(G([this], 0))
};
q.ea = function(a, b) {
  return O.a(a, b)
};
q.fa = function(a, b, c) {
  return O.c(a, b, c)
};
q.A = function(a) {
  return 0 < this.step ? this.start < this.end ? a : l : this.start > this.end ? a : l
};
q.z = function(a) {
  return Qb(a.A(a)) ? 0 : Math.ceil((this.end - this.start) / this.step)
};
q.T = o("start");
q.R = function(a) {
  return a.A(a) != l ? new Oe(this.h, this.start + this.step, this.end, this.step, l) : Q
};
q.B = function(a, b) {
  return Mb(a, b)
};
q.F = function(a, b) {
  return new Oe(b, this.start, this.end, this.step, this.l)
};
q.C = o("h");
q.N = function(a, b) {
  if(b < a.z(a)) {
    return this.start + b * this.step
  }
  var c = this.start > this.end;
  if(c ? 0 === this.step : c) {
    return this.start
  }
  e(Error("Index out of bounds"))
};
q.J = function(a, b, c) {
  c = b < a.z(a) ? this.start + b * this.step : ((a = this.start > this.end) ? 0 === this.step : a) ? this.start : c;
  return c
};
q.K = function() {
  return F(Q, this.h)
};
Oe;
var Pe = function() {
  function a(a, b) {
    for(;;) {
      var c = S(b);
      if(w(c ? 0 < a : c)) {
        var c = a - 1, i = J(b), a = c, b = i
      }else {
        return l
      }
    }
  }
  function b(a) {
    for(;;) {
      if(S(a)) {
        a = J(a)
      }else {
        return l
      }
    }
  }
  var c = l, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}(), Qe = function() {
  function a(a, b) {
    Pe.a(a, b);
    return b
  }
  function b(a) {
    Pe.b(a);
    return a
  }
  var c = l, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}();
function Re(a, b) {
  var c = a.exec(b);
  return c == l ? l : 1 === T(c) ? K(c) : zd(c)
}
function X(a, b, c, d, f, h) {
  return Qc.e(W([b]), fd(ed(W([c]), Zc.a(function(b) {
    return a.a ? a.a(b, f) : a.call(l, b, f)
  }, h))), G([W([d])], 0))
}
var Y = function Se(b, c) {
  return b == l ? N.b("nil") : aa === b ? N.b("#<undefined>") : Qc.a(w(function() {
    var d = E.c(c, "\ufdd0'meta", l);
    return w(d) ? (d = b ? ((d = b.j & 131072) ? d : b.zc) ? g : b.j ? m : x(eb, b) : x(eb, b), w(d) ? Xb(b) : d) : d
  }()) ? Qc.e(W(["^"]), Se(Xb(b), c), G([W([" "])], 0)) : l, function() {
    var c = b != l;
    return c ? b.Mb : c
  }() ? b.Lb(b) : function() {
    var c;
    c = b ? ((c = b.j & 536870912) ? c : b.I) ? g : b.j ? m : x(qb, b) : x(qb, b);
    return c
  }() ? rb(b, c) : w(b instanceof RegExp) ? N.c('#"', b.source, '"') : N.c("#<", "" + U(b), ">"))
}, R = function() {
  function a(a) {
    var d = l;
    s(a) && (d = G(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    var b = Ud(["\ufdd0'flush-on-newline", "\ufdd0'readably", "\ufdd0'meta", "\ufdd0'dup"], {"\ufdd0'flush-on-newline":g, "\ufdd0'readably":g, "\ufdd0'meta":m, "\ufdd0'dup":m}), f = new Ja, h = S(Y(K(a), b));
    if(h) {
      for(var i = K(h);;) {
        if(f.append(i), i = J(h)) {
          h = i, i = K(h)
        }else {
          break
        }
      }
    }
    if(a = S(J(a))) {
      for(i = K(a);;) {
        f.append(" ");
        if(h = S(Y(i, b))) {
          for(i = K(h);;) {
            if(f.append(i), i = J(h)) {
              h = i, i = K(h)
            }else {
              break
            }
          }
        }
        if(a = J(a)) {
          i = a, a = K(i), h = i, i = a, a = h
        }else {
          break
        }
      }
    }
    return"" + U(f)
  }
  a.q = 0;
  a.m = function(a) {
    a = S(a);
    return b(a)
  };
  a.e = b;
  return a
}();
Vd.prototype.I = g;
Vd.prototype.D = function(a, b) {
  return X(function(a) {
    return X(Y, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
qb.number = g;
rb.number = function(a) {
  return N.b("" + U(a))
};
Ib.prototype.I = g;
Ib.prototype.D = function(a, b) {
  return X(Y, "(", " ", ")", b, a)
};
Cd.prototype.I = g;
Cd.prototype.D = function(a, b) {
  return X(Y, "[", " ", "]", b, a)
};
Ic.prototype.I = g;
Ic.prototype.D = function(a, b) {
  return X(Y, "(", " ", ")", b, a)
};
Be.prototype.I = g;
Be.prototype.D = function(a, b) {
  return X(function(a) {
    return X(Y, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
Yd.prototype.I = g;
Yd.prototype.D = function(a, b) {
  return X(function(a) {
    return X(Y, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
Hd.prototype.I = g;
Hd.prototype.D = function(a, b) {
  return X(Y, "#queue [", " ", "]", b, S(a))
};
V.prototype.I = g;
V.prototype.D = function(a, b) {
  return X(Y, "(", " ", ")", b, a)
};
Kb.prototype.I = g;
Kb.prototype.D = function(a, b) {
  return X(Y, "(", " ", ")", b, a)
};
Je.prototype.I = g;
Je.prototype.D = function(a, b) {
  return X(Y, "#{", " ", "}", b, a)
};
qb["boolean"] = g;
rb["boolean"] = function(a) {
  return N.b("" + U(a))
};
qb.string = g;
rb.string = function(a, b) {
  return lc(a) ? N.b([U(":"), U(function() {
    var b = Ne(a);
    return w(b) ? [U(b), U("/")].join("") : l
  }()), U(Me(a))].join("")) : mc(a) ? N.b([U(function() {
    var b = Ne(a);
    return w(b) ? [U(b), U("/")].join("") : l
  }()), U(Me(a))].join("")) : N.b(w((new Dc("\ufdd0'readably")).call(l, b)) ? sa(a) : a)
};
oe.prototype.I = g;
oe.prototype.D = function(a, b) {
  return X(Y, "(", " ", ")", b, a)
};
we.prototype.I = g;
we.prototype.D = function(a, b) {
  return X(Y, "[", " ", "]", b, a)
};
Bd.prototype.I = g;
Bd.prototype.D = function(a, b) {
  return X(Y, "(", " ", ")", b, a)
};
qe.prototype.I = g;
qe.prototype.D = function(a, b) {
  return X(function(a) {
    return X(Y, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
jd.prototype.I = g;
jd.prototype.D = function(a, b) {
  return X(Y, "[", " ", "]", b, a)
};
Ge.prototype.I = g;
Ge.prototype.D = function(a, b) {
  return X(Y, "#{", " ", "}", b, a)
};
ud.prototype.I = g;
ud.prototype.D = function(a, b) {
  return X(Y, "[", " ", "]", b, a)
};
zc.prototype.I = g;
zc.prototype.D = function(a, b) {
  return X(Y, "(", " ", ")", b, a)
};
qb.array = g;
rb.array = function(a, b) {
  return X(Y, "#<Array [", ", ", "]>", b, a)
};
qb["function"] = g;
rb["function"] = function(a) {
  return N.c("#<", "" + U(a), ">")
};
Ac.prototype.I = g;
Ac.prototype.D = function() {
  return N.b("()")
};
ve.prototype.I = g;
ve.prototype.D = function(a, b) {
  return X(Y, "[", " ", "]", b, a)
};
Date.prototype.I = g;
Date.prototype.D = function(a) {
  function b(a, b) {
    for(var f = "" + U(a);;) {
      if(T(f) < b) {
        f = [U("0"), U(f)].join("")
      }else {
        return f
      }
    }
  }
  return N.b([U('#inst "'), U(a.getUTCFullYear()), U("-"), U(b.a ? b.a(a.getUTCMonth() + 1, 2) : b.call(l, a.getUTCMonth() + 1, 2)), U("-"), U(b.a ? b.a(a.getUTCDate(), 2) : b.call(l, a.getUTCDate(), 2)), U("T"), U(b.a ? b.a(a.getUTCHours(), 2) : b.call(l, a.getUTCHours(), 2)), U(":"), U(b.a ? b.a(a.getUTCMinutes(), 2) : b.call(l, a.getUTCMinutes(), 2)), U(":"), U(b.a ? b.a(a.getUTCSeconds(), 2) : b.call(l, a.getUTCSeconds(), 2)), U("."), U(b.a ? b.a(a.getUTCMilliseconds(), 3) : b.call(l, a.getUTCMilliseconds(), 
  3)), U("-"), U('00:00"')].join(""))
};
Cc.prototype.I = g;
Cc.prototype.D = function(a, b) {
  return X(Y, "(", " ", ")", b, a)
};
Oe.prototype.I = g;
Oe.prototype.D = function(a, b) {
  return X(Y, "(", " ", ")", b, a)
};
pe.prototype.I = g;
pe.prototype.D = function(a, b) {
  return X(Y, "(", " ", ")", b, a)
};
Rd.prototype.I = g;
Rd.prototype.D = function(a, b) {
  return X(function(a) {
    return X(Y, "", " ", "", b, a)
  }, "{", ", ", "}", b, a)
};
ue.prototype.I = g;
ue.prototype.D = function(a, b) {
  return X(Y, "(", " ", ")", b, a)
};
ud.prototype.xc = g;
ud.prototype.gc = function(a, b) {
  return pc.a(a, b)
};
function Te(a, b, c, d) {
  this.state = a;
  this.h = b;
  this.Lc = c;
  this.Mc = d;
  this.o = 0;
  this.j = 2690809856
}
q = Te.prototype;
q.H = function(a) {
  return ja(a)
};
q.jc = function(a, b, c) {
  var d = S(this.Mc);
  if(d) {
    var f = K(d);
    Ub.c(f, 0, l);
    for(Ub.c(f, 1, l);;) {
      var h = f, f = Ub.c(h, 0, l), h = Ub.c(h, 1, l);
      h.r ? h.r(f, a, b, c) : h.call(l, f, a, b, c);
      if(d = J(d)) {
        f = d, d = K(f), h = f, f = d, d = h
      }else {
        return l
      }
    }
  }else {
    return l
  }
};
q.D = function(a, b) {
  return Qc.e(W(["#<Atom: "]), rb(this.state, b), G([">"], 0))
};
q.C = o("h");
q.eb = o("state");
q.B = function(a, b) {
  return a === b
};
Te;
var Ue = function() {
  function a(a) {
    return new Te(a, l, l, l)
  }
  var b = l, c = function() {
    function a(c, d) {
      var j = l;
      s(d) && (j = G(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, j)
    }
    function b(a, c) {
      var d = ic(c) ? Wc.a(Gb, c) : c, f = E.c(d, "\ufdd0'validator", l), d = E.c(d, "\ufdd0'meta", l);
      return new Te(a, d, f, l)
    }
    a.q = 1;
    a.m = function(a) {
      var c = K(a), a = M(a);
      return b(c, a)
    };
    a.e = b;
    return a
  }(), b = function(b, f) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, G(arguments, 1))
    }
    e("Invalid arity: " + arguments.length)
  };
  b.q = 1;
  b.m = c.m;
  b.b = a;
  b.e = c.e;
  return b
}();
function Ve(a, b) {
  var c = a.Lc;
  w(c) && !w(c.b ? c.b(b) : c.call(l, b)) && e(Error([U("Assert failed: "), U("Validator rejected reference state"), U("\n"), U(R.e(G([Wb(N("\ufdd1'validate", "\ufdd1'new-value"), Gb("\ufdd0'line", 6440))], 0)))].join("")));
  c = a.state;
  a.state = b;
  sb(a, c, b);
  return b
}
var We = function() {
  function a(a, b, c, d, f) {
    return Ve(a, b.r ? b.r(a.state, c, d, f) : b.call(l, a.state, c, d, f))
  }
  function b(a, b, c, d) {
    return Ve(a, b.c ? b.c(a.state, c, d) : b.call(l, a.state, c, d))
  }
  function c(a, b, c) {
    return Ve(a, b.a ? b.a(a.state, c) : b.call(l, a.state, c))
  }
  function d(a, b) {
    return Ve(a, b.b ? b.b(a.state) : b.call(l, a.state))
  }
  var f = l, h = function() {
    function a(c, d, f, h, i, B) {
      var y = l;
      s(B) && (y = G(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, f, h, i, y)
    }
    function b(a, c, d, f, h, i) {
      return Ve(a, Wc.e(c, a.state, d, f, h, G([i], 0)))
    }
    a.q = 5;
    a.m = function(a) {
      var c = K(a), d = K(J(a)), f = K(J(J(a))), h = K(J(J(J(a)))), i = K(J(J(J(J(a))))), a = M(J(J(J(J(a)))));
      return b(c, d, f, h, i, a)
    };
    a.e = b;
    return a
  }(), f = function(f, j, k, n, t, r) {
    switch(arguments.length) {
      case 2:
        return d.call(this, f, j);
      case 3:
        return c.call(this, f, j, k);
      case 4:
        return b.call(this, f, j, k, n);
      case 5:
        return a.call(this, f, j, k, n, t);
      default:
        return h.e(f, j, k, n, t, G(arguments, 5))
    }
    e("Invalid arity: " + arguments.length)
  };
  f.q = 5;
  f.m = h.m;
  f.a = d;
  f.c = c;
  f.r = b;
  f.$ = a;
  f.e = h.e;
  return f
}();
function Xe(a, b) {
  this.state = a;
  this.ya = b;
  this.o = 0;
  this.j = 1073774592
}
Xe.prototype.eb = function() {
  var a = this;
  return(new Dc("\ufdd0'value")).call(l, We.a(a.state, function(b) {
    var b = ic(b) ? Wc.a(Gb, b) : b, c = E.c(b, "\ufdd0'done", l);
    return w(c) ? b : Ud(["\ufdd0'done", "\ufdd0'value"], {"\ufdd0'done":g, "\ufdd0'value":a.ya.O ? a.ya.O() : a.ya.call(l)})
  }))
};
Xe;
var Ye = Ue.b(Ud(["\ufdd0'parents", "\ufdd0'descendants", "\ufdd0'ancestors"], {"\ufdd0'parents":Td, "\ufdd0'descendants":Td, "\ufdd0'ancestors":Td})), Ze = function() {
  function a(a, b, h) {
    var i = Eb.a(b, h);
    if(!i && !(i = nc((new Dc("\ufdd0'ancestors")).call(l, a).call(l, b), h)) && (i = dc(h))) {
      if(i = dc(b)) {
        if(i = T(h) === T(b)) {
          for(var i = g, j = 0;;) {
            var k = Qb(i);
            if(k ? k : j === T(h)) {
              return i
            }
            i = c.c(a, b.b ? b.b(j) : b.call(l, j), h.b ? h.b(j) : h.call(l, j));
            j += 1
          }
        }else {
          return i
        }
      }else {
        return i
      }
    }else {
      return i
    }
  }
  function b(a, b) {
    return c.c(db(Ye), a, b)
  }
  var c = l, c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.a = b;
  c.c = a;
  return c
}(), $e = function() {
  function a(a, b) {
    var c = E.c((new Dc("\ufdd0'parents")).call(l, a), b, l);
    return S(c) ? c : l
  }
  function b(a) {
    return c.a(db(Ye), a)
  }
  var c = l, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}();
function af(a, b, c, d) {
  We.a(a, function() {
    return db(b)
  });
  We.a(c, function() {
    return db(d)
  })
}
var cf = function bf(b, c, d) {
  var f = db(d).call(l, b), f = w(w(f) ? f.b ? f.b(c) : f.call(l, c) : f) ? g : l;
  if(w(f)) {
    return f
  }
  f = function() {
    for(var f = $e.b(c);;) {
      if(0 < T(f)) {
        bf(b, K(f), d), f = M(f)
      }else {
        return l
      }
    }
  }();
  if(w(f)) {
    return f
  }
  f = function() {
    for(var f = $e.b(b);;) {
      if(0 < T(f)) {
        bf(K(f), c, d), f = M(f)
      }else {
        return l
      }
    }
  }();
  return w(f) ? f : m
};
function df(a, b, c) {
  c = cf(a, b, c);
  return w(c) ? c : Ze.a(a, b)
}
var ff = function ef(b, c, d, f, h, i, j) {
  var k = qc.c(function(d, f) {
    var i = Ub.c(f, 0, l);
    Ub.c(f, 1, l);
    if(Ze.a(c, i)) {
      var j;
      j = (j = d == l) ? j : df(i, K(d), h);
      j = w(j) ? f : d;
      w(df(K(j), i, h)) || e(Error([U("Multiple methods in multimethod '"), U(b), U("' match dispatch value: "), U(c), U(" -> "), U(i), U(" and "), U(K(j)), U(", and neither is preferred")].join("")));
      return j
    }
    return d
  }, l, db(f));
  if(w(k)) {
    if(Eb.a(db(j), db(d))) {
      return We.r(i, Vb, c, Pb(k)), Pb(k)
    }
    af(i, f, j, d);
    return ef(b, c, d, f, h, i, j)
  }
  return l
};
function gf(a, b) {
  if(a ? a.ic : a) {
    return a.ic(0, b)
  }
  var c;
  var d = gf[v(a == l ? l : a)];
  d ? c = d : (d = gf._) ? c = d : e(z("IMultiFn.-get-method", a));
  return c.call(l, a, b)
}
function hf(a, b) {
  if(a ? a.hc : a) {
    return a.hc(a, b)
  }
  var c;
  var d = hf[v(a == l ? l : a)];
  d ? c = d : (d = hf._) ? c = d : e(z("IMultiFn.-dispatch", a));
  return c.call(l, a, b)
}
function jf(a, b, c, d, f, h, i, j) {
  this.name = a;
  this.Fc = b;
  this.Ec = c;
  this.Qb = d;
  this.Vb = f;
  this.Ic = h;
  this.Ub = i;
  this.sb = j;
  this.j = 4194304;
  this.o = 64
}
jf.prototype.H = function(a) {
  return ja(a)
};
jf.prototype.ic = function(a, b) {
  Eb.a(db(this.sb), db(this.Qb)) || af(this.Ub, this.Vb, this.sb, this.Qb);
  var c = db(this.Ub).call(l, b);
  if(w(c)) {
    return c
  }
  c = ff(this.name, b, this.Qb, this.Vb, this.Ic, this.Ub, this.sb);
  return w(c) ? c : db(this.Vb).call(l, this.Ec)
};
jf.prototype.hc = function(a, b) {
  var c = Wc.a(this.Fc, b), d = gf(a, c);
  w(d) || e(Error([U("No method in multimethod '"), U(Me), U("' for dispatch value: "), U(c)].join("")));
  return Wc.a(d, b)
};
jf;
jf.prototype.call = function() {
  function a(a, b) {
    var f = l;
    s(b) && (f = G(Array.prototype.slice.call(arguments, 1), 0));
    return hf(this, f)
  }
  function b(a, b) {
    return hf(this, b)
  }
  a.q = 1;
  a.m = function(a) {
    K(a);
    a = M(a);
    return b(0, a)
  };
  a.e = b;
  return a
}();
jf.prototype.apply = function(a, b) {
  return hf(this, b)
};
function kf(a) {
  this.Yb = a;
  this.o = 0;
  this.j = 543162368
}
kf.prototype.H = function(a) {
  return ua(R.e(G([a], 0)))
};
kf.prototype.D = function() {
  return N.b([U('#uuid "'), U(this.Yb), U('"')].join(""))
};
kf.prototype.B = function(a, b) {
  var c = Fb(kf, b);
  return c ? this.Yb === b.Yb : c
};
kf.prototype.toString = function() {
  return R.e(G([this], 0))
};
kf;
var lf;
function mf() {
  return ca.navigator ? ca.navigator.userAgent : l
}
Ga = Fa = Ea = Da = m;
var nf;
if(nf = mf()) {
  var of = ca.navigator;
  Da = 0 == nf.indexOf("Opera");
  Ea = !Da && -1 != nf.indexOf("MSIE");
  Fa = !Da && -1 != nf.indexOf("WebKit");
  Ga = !Da && !Fa && "Gecko" == of.product
}
var pf = Da, qf = Ea, rf = Ga, sf = Fa, tf;
a: {
  var uf = "", vf;
  if(pf && ca.opera) {
    var wf = ca.opera.version, uf = "function" == typeof wf ? wf() : wf
  }else {
    if(rf ? vf = /rv\:([^\);]+)(\)|;)/ : qf ? vf = /MSIE\s+([^\);]+)(\)|;)/ : sf && (vf = /WebKit\/(\S+)/), vf) {
      var xf = vf.exec(mf()), uf = xf ? xf[1] : ""
    }
  }
  if(qf) {
    var yf, zf = ca.document;
    yf = zf ? zf.documentMode : aa;
    if(yf > parseFloat(uf)) {
      tf = "" + yf;
      break a
    }
  }
  tf = uf
}
var Af = {};
function Bf(a) {
  return Af[a] || (Af[a] = 0 <= ta(tf, a))
}
;!qf || Bf("9");
!rf && !qf || qf && Bf("9") || rf && Bf("1.9.1");
qf && Bf("9");
function Cf() {
  var a = document;
  return a.querySelectorAll && a.querySelector && (!sf || "CSS1Compat" == document.compatMode || Bf("528")) ? a.querySelectorAll("HTML") : a.getElementsByTagName("HTML")
}
function Df(a, b, c) {
  function d(c) {
    c && b.appendChild(ga(c) ? a.createTextNode(c) : c)
  }
  for(var f = 1;f < c.length;f++) {
    var h = c[f];
    fa(h) && !(ia(h) && 0 < h.nodeType) ? xa(Ef(h) ? za(h) : h, d) : d(h)
  }
}
function Ef(a) {
  if(a && "number" == typeof a.length) {
    if(ia(a)) {
      return"function" == typeof a.item || "string" == typeof a.item
    }
    if(ha(a)) {
      return"function" == typeof a.item
    }
  }
  return m
}
function Ff(a) {
  this.Ob = a || ca.document || document
}
Ff.prototype.createElement = function(a) {
  return this.Ob.createElement(a)
};
Ff.prototype.createTextNode = function(a) {
  return this.Ob.createTextNode(a)
};
Ff.prototype.appendChild = function(a, b) {
  a.appendChild(b)
};
Ff.prototype.append = function(a, b) {
  Df(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments)
};
function Lf(a) {
  var b = Mf;
  if(kc(b)) {
    return a.replace(RegExp(("" + b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), "<$1></$2>")
  }
  if(w(b.hasOwnProperty("source"))) {
    return a.replace(RegExp(b.source, "g"), "<$1></$2>")
  }
  e([U("Invalid match arg: "), U(b)].join(""))
}
;var Nf;
!qf || Bf("9");
qf && Bf("8");
function Of() {
}
Of.prototype.lc = m;
Of.prototype.ib = function() {
  this.lc || (this.lc = g, this.Ka())
};
Of.prototype.Ka = function() {
};
function Pf(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
ma(Pf, Of);
Pf.prototype.Ka = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
Pf.prototype.Wb = m;
Pf.prototype.Jc = g;
var Qf = {Pc:"click", Uc:"dblclick", od:"mousedown", sd:"mouseup", rd:"mouseover", qd:"mouseout", pd:"mousemove", Dd:"selectstart", jd:"keypress", hd:"keydown", kd:"keyup", Nc:"blur", bd:"focus", Vc:"deactivate", cd:qf ? "focusin" : "DOMFocusIn", dd:qf ? "focusout" : "DOMFocusOut", Oc:"change", Cd:"select", Ed:"submit", gd:"input", yd:"propertychange", Zc:"dragstart", Wc:"dragenter", Yc:"dragover", Xc:"dragleave", $c:"drop", Id:"touchstart", Hd:"touchmove", Gd:"touchend", Fd:"touchcancel", Rc:"contextmenu", 
ad:"error", fd:"help", ld:"load", md:"losecapture", zd:"readystatechange", Ad:"resize", Bd:"scroll", Jd:"unload", ed:"hashchange", ud:"pagehide", vd:"pageshow", xd:"popstate", Sc:"copy", wd:"paste", Tc:"cut", nd:"message", Qc:"connect"};
var Rf = new Function("a", "return a");
function Sf(a, b) {
  a && this.jb(a, b)
}
ma(Sf, Pf);
q = Sf.prototype;
q.target = l;
q.relatedTarget = l;
q.offsetX = 0;
q.offsetY = 0;
q.clientX = 0;
q.clientY = 0;
q.screenX = 0;
q.screenY = 0;
q.button = 0;
q.keyCode = 0;
q.charCode = 0;
q.ctrlKey = m;
q.altKey = m;
q.shiftKey = m;
q.metaKey = m;
q.jb = function(a, b) {
  var c = this.type = a.type;
  Pf.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(rf) {
      try {
        Rf(d.nodeName)
      }catch(f) {
        d = l
      }
    }
  }else {
    "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement)
  }
  this.relatedTarget = d;
  this.offsetX = a.offsetX !== aa ? a.offsetX : a.layerX;
  this.offsetY = a.offsetY !== aa ? a.offsetY : a.layerY;
  this.clientX = a.clientX !== aa ? a.clientX : a.pageX;
  this.clientY = a.clientY !== aa ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.state = a.state;
  delete this.Jc;
  delete this.Wb
};
q.Ka = function() {
  Sf.wc.Ka.call(this);
  this.relatedTarget = this.currentTarget = this.target = l
};
function Tf() {
}
var Uf = 0;
q = Tf.prototype;
q.key = 0;
q.Ra = m;
q.tb = m;
q.jb = function(a, b, c, d, f, h) {
  ha(a) ? this.rc = g : a && a.handleEvent && ha(a.handleEvent) ? this.rc = m : e(Error("Invalid listener argument"));
  this.kb = a;
  this.vc = b;
  this.src = c;
  this.type = d;
  this.capture = !!f;
  this.pc = h;
  this.tb = m;
  this.key = ++Uf;
  this.Ra = m
};
q.handleEvent = function(a) {
  return this.rc ? this.kb.call(this.pc || this.src, a) : this.kb.handleEvent.call(this.kb, a)
};
function Vf(a, b) {
  this.tc = b;
  this.za = [];
  a > this.tc && e(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
  for(var c = 0;c < a;c++) {
    this.za.push(this.ha ? this.ha() : {})
  }
}
ma(Vf, Of);
Vf.prototype.ha = l;
Vf.prototype.kc = l;
function Wf(a) {
  return a.za.length ? a.za.pop() : a.ha ? a.ha() : {}
}
function Xf(a, b) {
  a.za.length < a.tc ? a.za.push(b) : Yf(a, b)
}
function Yf(a, b) {
  if(a.kc) {
    a.kc(b)
  }else {
    if(ia(b)) {
      if(ha(b.ib)) {
        b.ib()
      }else {
        for(var c in b) {
          delete b[c]
        }
      }
    }
  }
}
Vf.prototype.Ka = function() {
  Vf.wc.Ka.call(this);
  for(var a = this.za;a.length;) {
    Yf(this, a.pop())
  }
  delete this.za
};
var Zf, $f, ag, bg, cg, dg, eg, fg, gg, hg, ig;
(function() {
  function a() {
    return{qa:0, Qa:0}
  }
  function b() {
    return[]
  }
  function c() {
    function a(b) {
      return i.call(a.src, a.key, b)
    }
    return a
  }
  function d() {
    return new Tf
  }
  function f() {
    return new Sf
  }
  var h = Ha && !(0 <= ta(Ia, "5.7")), i;
  dg = function(a) {
    i = a
  };
  if(h) {
    Zf = function() {
      return Wf(j)
    };
    $f = function(a) {
      Xf(j, a)
    };
    ag = function() {
      return Wf(k)
    };
    bg = function(a) {
      Xf(k, a)
    };
    cg = function() {
      return Wf(n)
    };
    eg = function() {
      Xf(n, c())
    };
    fg = function() {
      return Wf(t)
    };
    gg = function(a) {
      Xf(t, a)
    };
    hg = function() {
      return Wf(r)
    };
    ig = function(a) {
      Xf(r, a)
    };
    var j = new Vf(0, 600);
    j.ha = a;
    var k = new Vf(0, 600);
    k.ha = b;
    var n = new Vf(0, 600);
    n.ha = c;
    var t = new Vf(0, 600);
    t.ha = d;
    var r = new Vf(0, 600);
    r.ha = f
  }else {
    Zf = a, $f = ea, ag = b, bg = ea, cg = c, eg = ea, fg = d, gg = ea, hg = f, ig = ea
  }
})();
var jg = {}, kg = {}, lg = {}, mg = {};
function ng(a, b, c, d, f) {
  if(b) {
    if("array" == v(b)) {
      for(var h = 0;h < b.length;h++) {
        ng(a, b[h], c, d, f)
      }
      return l
    }
    var d = !!d, i = kg;
    b in i || (i[b] = Zf());
    i = i[b];
    d in i || (i[d] = Zf(), i.qa++);
    var i = i[d], j = ja(a), k;
    i.Qa++;
    if(i[j]) {
      k = i[j];
      for(h = 0;h < k.length;h++) {
        if(i = k[h], i.kb == c && i.pc == f) {
          if(i.Ra) {
            break
          }
          return k[h].key
        }
      }
    }else {
      k = i[j] = ag(), i.qa++
    }
    h = cg();
    h.src = a;
    i = fg();
    i.jb(c, h, a, b, d, f);
    c = i.key;
    h.key = c;
    k.push(i);
    jg[c] = i;
    lg[j] || (lg[j] = ag());
    lg[j].push(i);
    a.addEventListener ? (a == ca || !a.Dc) && a.addEventListener(b, h, d) : a.attachEvent(b in mg ? mg[b] : mg[b] = "on" + b, h);
    return c
  }
  e(Error("Invalid event type"))
}
function og(a, b, c, d, f) {
  if("array" == v(b)) {
    for(var h = 0;h < b.length;h++) {
      og(a, b[h], c, d, f)
    }
    return l
  }
  a = ng(a, b, c, d, f);
  jg[a].tb = g;
  return a
}
function pg(a, b, c, d) {
  if(!d.lb && d.uc) {
    for(var f = 0, h = 0;f < d.length;f++) {
      if(d[f].Ra) {
        var i = d[f].vc;
        i.src = l;
        eg(i);
        gg(d[f])
      }else {
        f != h && (d[h] = d[f]), h++
      }
    }
    d.length = h;
    d.uc = m;
    if(0 == h && (bg(d), delete kg[a][b][c], kg[a][b].qa--, 0 == kg[a][b].qa && ($f(kg[a][b]), delete kg[a][b], kg[a].qa--), 0 == kg[a].qa)) {
      $f(kg[a]), delete kg[a]
    }
  }
}
function qg(a, b, c, d, f) {
  var h = 1, b = ja(b);
  if(a[b]) {
    a.Qa--;
    a = a[b];
    a.lb ? a.lb++ : a.lb = 1;
    try {
      for(var i = a.length, j = 0;j < i;j++) {
        var k = a[j];
        k && !k.Ra && (h &= rg(k, f) !== m)
      }
    }finally {
      a.lb--, pg(c, d, b, a)
    }
  }
  return Boolean(h)
}
function rg(a, b) {
  var c = a.handleEvent(b);
  if(a.tb) {
    var d = a.key;
    if(jg[d]) {
      var f = jg[d];
      if(!f.Ra) {
        var h = f.src, i = f.type, j = f.vc, k = f.capture;
        h.removeEventListener ? (h == ca || !h.Dc) && h.removeEventListener(i, j, k) : h.detachEvent && h.detachEvent(i in mg ? mg[i] : mg[i] = "on" + i, j);
        h = ja(h);
        j = kg[i][k][h];
        if(lg[h]) {
          var n = lg[h], t = wa(n, f);
          0 <= t && va.splice.call(n, t, 1);
          0 == n.length && delete lg[h]
        }
        f.Ra = g;
        j.uc = g;
        pg(i, k, h, j);
        delete jg[d]
      }
    }
  }
  return c
}
dg(function(a, b) {
  if(!jg[a]) {
    return g
  }
  var c = jg[a], d = c.type, f = kg;
  if(!(d in f)) {
    return g
  }
  var f = f[d], h, i;
  Nf === aa && (Nf = qf && !ca.addEventListener);
  if(Nf) {
    var j;
    if(!(j = b)) {
      a: {
        j = ["window", "event"];
        for(var k = ca;h = j.shift();) {
          if(k[h] != l) {
            k = k[h]
          }else {
            j = l;
            break a
          }
        }
        j = k
      }
    }
    h = j;
    j = g in f;
    k = m in f;
    if(j) {
      if(0 > h.keyCode || h.returnValue != aa) {
        return g
      }
      a: {
        var n = m;
        if(0 == h.keyCode) {
          try {
            h.keyCode = -1;
            break a
          }catch(t) {
            n = g
          }
        }
        if(n || h.returnValue == aa) {
          h.returnValue = g
        }
      }
    }
    n = hg();
    n.jb(h, this);
    h = g;
    try {
      if(j) {
        for(var r = ag(), u = n.currentTarget;u;u = u.parentNode) {
          r.push(u)
        }
        i = f[g];
        i.Qa = i.qa;
        for(var B = r.length - 1;!n.Wb && 0 <= B && i.Qa;B--) {
          n.currentTarget = r[B], h &= qg(i, r[B], d, g, n)
        }
        if(k) {
          i = f[m];
          i.Qa = i.qa;
          for(B = 0;!n.Wb && B < r.length && i.Qa;B++) {
            n.currentTarget = r[B], h &= qg(i, r[B], d, m, n)
          }
        }
      }else {
        h = rg(c, n)
      }
    }finally {
      r && (r.length = 0, bg(r)), n.ib(), ig(n)
    }
    return h
  }
  d = new Sf(b, this);
  try {
    h = rg(c, d)
  }finally {
    d.ib()
  }
  return h
});
var sg = {}, tg = document.createElement("div");
tg.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var ug = Eb.a(tg.firstChild.nodeType, 3), vg = Eb.a(tg.getElementsByTagName("tbody").length, 0);
Eb.a(tg.getElementsByTagName("link").length, 0);
var wg = /<|&#?\w+;/, xg = /^\s+/, Mf = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i, yg = /<([\w:]+)/, zg = /<tbody/i, Ag = W([1, "<select multiple='multiple'>", "</select>"]), Bg = W([1, "<table>", "</table>"]), Cg = W([3, "<table><tbody><tr>", "</tr></tbody></table>"]), Dg = Ud("col \ufdd0'default tfoot caption optgroup legend area td thead th option tbody tr colgroup".split(" "), {col:W([2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"]), "\ufdd0'default":W([0, 
"", ""]), tfoot:Bg, caption:Bg, optgroup:Ag, legend:W([1, "<fieldset>", "</fieldset>"]), area:W([1, "<map>", "</map>"]), td:Cg, thead:Bg, th:Cg, option:Ag, tbody:Bg, tr:W([2, "<table><tbody>", "</tbody></table>"]), colgroup:Bg});
function Eg(a, b) {
  var c = Qb(Re(zg, b)), d = function() {
    var a = Eb.a(sg.Ud, "table");
    return a ? c : a
  }() ? function() {
    var b = a.firstChild;
    return w(b) ? a.firstChild.childNodes : b
  }() : function() {
    var a = Eb.a(sg.Td, "<table>");
    return a ? c : a
  }() ? divchildNodes : xd;
  if(d = S(d)) {
    for(var f = K(d);;) {
      if(function() {
        var a = Eb.a(f.nodeName, "tbody");
        return a ? Eb.a(f.childNodes.length, 0) : a
      }() && f.parentNode.removeChild(f), d = J(d)) {
        var h = d, f = d = K(h), d = h
      }else {
        break
      }
    }
  }
}
function Fg(a) {
  var b = Lf(a), a = ("" + U(Pb(Re(yg, b)))).toLowerCase(), a = E.c(Dg, a, (new Dc("\ufdd0'default")).call(l, Dg)), c = Ub.c(a, 0, l), d = Ub.c(a, 1, l), f = Ub.c(a, 2, l), a = function() {
    var a;
    a = document.createElement("div");
    a.innerHTML = [U(d), U(b), U(f)].join("");
    for(var i = c;;) {
      if(0 < i) {
        i -= 1, a = a.lastChild
      }else {
        return a
      }
    }
  }();
  w(vg) && Eg(a, b);
  w(function() {
    var a = Qb(ug);
    return a ? Re(xg, b) : a
  }()) && a.insertBefore(document.createTextNode(K(Re(xg, b))), a.firstChild);
  return a.childNodes
}
function Gg(a) {
  if(a ? a.mc : a) {
    return a.mc()
  }
  var b;
  var c = Gg[v(a == l ? l : a)];
  c ? b = c : (c = Gg._) ? b = c : e(z("DomContent.nodes", a));
  return b.call(l, a)
}
var Hg = function() {
  function a(a) {
    var d = l;
    s(a) && (d = G(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    return w(window.console) ? console.log(Wc.a(U, a)) : l
  }
  a.q = 0;
  a.m = function(a) {
    a = S(a);
    return b(a)
  };
  a.e = b;
  return a
}(), Ig = function() {
  function a(a, b) {
    return b < a.length ? new V(l, m, function() {
      return P(a.item(b), c.a(a, b + 1))
    }, l) : l
  }
  function b(a) {
    return c.a(a, 0)
  }
  var c = l, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}(), Jg = function() {
  function a(a, b) {
    return b < a.length ? new V(l, m, function() {
      return P(a[b], c.a(a, b + 1))
    }, l) : l
  }
  function b(a) {
    return c.a(a, 0)
  }
  var c = l, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}();
function Kg(a) {
  return w(a.item) ? Ig.b(a) : Jg.b(a)
}
Gg._ = function(a) {
  if(a == l) {
    a = Q
  }else {
    var b;
    b = a ? ((b = a.j & 8388608) ? b : a.hb) ? g : a.j ? m : x(lb, a) : x(lb, a);
    a = b ? S(a) : w(w(a) ? a.length : a) ? Kg(a) : S(W([a]))
  }
  return a
};
Gg.string = function(a) {
  return Qe.b(Gg(w(Re(wg, a)) ? Fg(a) : document.createTextNode(a)))
};
w("undefined" != typeof NodeList) && (q = NodeList.prototype, q.hb = g, q.A = function(a) {
  return Kg(a)
}, q.Ua = g, q.N = function(a, b) {
  return a.item(b)
}, q.J = function(a, b, c) {
  return a.length <= b ? c : Ub.a(a, b)
}, q.wb = g, q.z = function(a) {
  return a.length
});
w("undefined" != typeof StaticNodeList) && (q = StaticNodeList.prototype, q.hb = g, q.A = function(a) {
  return Kg(a)
}, q.Ua = g, q.N = function(a, b) {
  return a.item(b)
}, q.J = function(a, b, c) {
  return a.length <= b ? c : Ub.a(a, b)
}, q.wb = g, q.z = function(a) {
  return a.length
});
w("undefined" != typeof HTMLCollection) && (q = HTMLCollection.prototype, q.hb = g, q.A = function(a) {
  return Kg(a)
}, q.Ua = g, q.N = function(a, b) {
  return a.item(b)
}, q.J = function(a, b, c) {
  return a.length <= b ? c : Ub.a(a, b)
}, q.wb = g, q.z = function(a) {
  return a.length
});
var $;
function Lg(a) {
  if(a ? a.nc : a) {
    return a.ca.target
  }
  var b;
  var c = Lg[v(a == l ? l : a)];
  c ? b = c : (c = Lg._) ? b = c : e(z("Event.target", a));
  return b.call(l, a)
}
var Mg = [], Ng = 0, Og;
for(Og in Qf) {
  Mg[Ng++] = Qf[Og]
}
var Pg, Qg = Zc.a(wc, Mg);
Pg = Wc.a(Le, Qg);
var Rg = window.document.documentElement, Tg = function Sg(b) {
  return function(c) {
    b.b ? b.b(function() {
      aa === $ && ($ = function(b, c, h, i) {
        this.ca = b;
        this.ya = c;
        this.Nb = h;
        this.Tb = i;
        this.o = 0;
        this.j = 393472
      }, $.Mb = g, $.Lb = function() {
        return N.b("domina.events/t10739")
      }, $.prototype.v = function(b, c) {
        var h = this.ca[c];
        return w(h) ? h : this.ca[Me(c)]
      }, $.prototype.p = function(b, c, h) {
        b = b.v(b, c);
        return w(b) ? b : h
      }, $.prototype.nc = function() {
        return this.ca.target
      }, $.prototype.C = o("Tb"), $.prototype.F = function(b, c) {
        return new $(this.ca, this.ya, this.Nb, c)
      }, $);
      return new $(c, b, Sg, l)
    }()) : b.call(l, function() {
      aa === $ && ($ = function(b, c, h, i) {
        this.ca = b;
        this.ya = c;
        this.Nb = h;
        this.Tb = i;
        this.o = 0;
        this.j = 393472
      }, $.Mb = g, $.Lb = function() {
        return N.b("domina.events/t10739")
      }, $.prototype.v = function(b, c) {
        var h = this.ca[c];
        return w(h) ? h : this.ca[Me(c)]
      }, $.prototype.p = function(b, c, h) {
        b = b.v(b, c);
        return w(b) ? b : h
      }, $.prototype.nc = function() {
        return this.ca.target
      }, $.prototype.C = o("Tb"), $.prototype.F = function(b, c) {
        return new $(this.ca, this.ya, this.Nb, c)
      }, $);
      return new $(c, b, Sg, l)
    }());
    return g
  }
};
function Ug(a, b, c) {
  var d = Tg(c), f = nc(Pg, b) ? Me(b) : b;
  return Qe.b(function() {
    var b = function j(a) {
      return new V(l, m, function() {
        for(;;) {
          if(S(a)) {
            var b = K(a);
            return P(w(m) ? og(b, f, d, m) : ng(b, f, d, m), j(M(a)))
          }
          return l
        }
      }, l)
    };
    return b.b ? b.b(Gg(a)) : b.call(l, Gg(a))
  }())
}
var Vg = function() {
  function a(a, d) {
    return b.c(Rg, a, d)
  }
  var b = l, b = function(b, d, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, d);
      case 3:
        return Ug(b, d, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  b.a = a;
  b.c = function(a, b, f) {
    return Ug(a, b, f)
  };
  return b
}();
function Wg() {
  return g
}
;/*
 Portions of this code are from the Dojo Toolkit, received by
 The Closure Library Authors under the BSD license. All other code is
 Copyright 2005-2009 The Closure Library Authors. All Rights Reserved.

The "New" BSD License:

Copyright (c) 2005-2009, The Dojo Foundation
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

 Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
 Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation
    and/or other materials provided with the distribution.
 Neither the name of the Dojo Foundation nor the names of its contributors
    may be used to endorse or promote products derived from this software
    without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
var Xg = function() {
  function a(a, c) {
    if(!a) {
      return[]
    }
    if(a.constructor == Array) {
      return a
    }
    if(!ga(a)) {
      return[a]
    }
    if(ga(c) && (c = ga(c) ? document.getElementById(c) : c, !c)) {
      return[]
    }
    var c = c || document, f = c.ownerDocument || c.documentElement;
    $b = c.contentType && "application/xml" == c.contentType || pf && (c.doctype || "[object XMLDocument]" == f.toString()) || !!f && (qf ? f.xml : c.xmlVersion || f.xmlVersion);
    return(f = d(a)(c)) && f.mb ? f : b(f)
  }
  function b(a) {
    if(a && a.mb) {
      return a
    }
    var b = [];
    if(!a || !a.length) {
      return b
    }
    a[0] && b.push(a[0]);
    if(2 > a.length) {
      return b
    }
    kb++;
    if(qf && $b) {
      var c = kb + "";
      a[0].setAttribute("_zipIdx", c);
      for(var d = 1, f;f = a[d];d++) {
        a[d].getAttribute("_zipIdx") != c && b.push(f), f.setAttribute("_zipIdx", c)
      }
    }else {
      if(qf && a.Cc) {
        try {
          for(d = 1;f = a[d];d++) {
            H(f) && b.push(f)
          }
        }catch(h) {
        }
      }else {
        a[0] && (a[0]._zipIdx = kb);
        for(d = 1;f = a[d];d++) {
          a[d]._zipIdx != kb && b.push(f), f._zipIdx = kb
        }
      }
    }
    return b
  }
  function c(a, b) {
    if(!b) {
      return 1
    }
    var c = Zg(a);
    return!b[c] ? b[c] = 1 : 0
  }
  function d(a, b) {
    if(Gf) {
      var c = Hf[a];
      if(c && !b) {
        return c
      }
    }
    if(c = If[a]) {
      return c
    }
    var c = a.charAt(0), h = -1 == a.indexOf(" ");
    0 <= a.indexOf("#") && h && (b = g);
    if(Gf && !b && -1 == ">~+".indexOf(c) && (!qf || -1 == a.indexOf(":")) && !($a && 0 <= a.indexOf(".")) && -1 == a.indexOf(":contains") && -1 == a.indexOf("|=")) {
      var i = 0 <= ">~+".indexOf(a.charAt(a.length - 1)) ? a + " *" : a;
      return Hf[a] = function(b) {
        try {
          9 == b.nodeType || h || e("");
          var c = b.querySelectorAll(i);
          qf ? c.Cc = g : c.mb = g;
          return c
        }catch(f) {
          return d(a, g)(b)
        }
      }
    }
    var j = a.split(/\s*,\s*/);
    return If[a] = 2 > j.length ? f(a) : function(a) {
      for(var b = 0, c = [], d;d = j[b++];) {
        c = c.concat(f(d)(a))
      }
      return c
    }
  }
  function f(a) {
    var b = oa(na(a));
    if(1 == b.length) {
      var c = h(b[0]);
      return function(a) {
        if(a = c(a, [])) {
          a.mb = g
        }
        return a
      }
    }
    return function(a) {
      for(var a = pa(a), c, d, f = b.length, i, j, k = 0;k < f;k++) {
        j = [];
        c = b[k];
        d = a.length - 1;
        0 < d && (i = {}, j.mb = g);
        d = h(c);
        for(var n = 0;c = a[n];n++) {
          d(c, j, i)
        }
        if(!j.length) {
          break
        }
        a = j
      }
      return j
    }
  }
  function h(a) {
    var b = Jf[a.Pa];
    if(b) {
      return b
    }
    var c = a.qc, c = c ? c.nb : "", d = n(a, {Ma:1}), f = "*" == a.V, h = document.getElementsByClassName;
    if(c) {
      h = {Ma:1}, f && (h.V = 1), d = n(a, h), "+" == c ? b = k(d) : "~" == c ? b = j(d) : ">" == c && (b = i(d))
    }else {
      if(a.id) {
        d = !a.sc && f ? Wg : n(a, {Ma:1, id:1}), b = function(b, c) {
          var f;
          f = b ? new Ff(9 == b.nodeType ? b : b.ownerDocument || b.document) : lf || (lf = new Ff);
          var h = a.id;
          if(h = (f = ga(h) ? f.Ob.getElementById(h) : h) && d(f)) {
            if(!(h = 9 == b.nodeType)) {
              for(h = f.parentNode;h && h != b;) {
                h = h.parentNode
              }
              h = !!h
            }
          }
          if(h) {
            return pa(f, c)
          }
        }
      }else {
        if(h && /\{\s*\[native code\]\s*\}/.test("" + h) && a.da.length && !$a) {
          var d = n(a, {Ma:1, da:1, id:1}), r = a.da.join(" "), b = function(a, b) {
            for(var c = pa(0, b), f, h = 0, i = a.getElementsByClassName(r);f = i[h++];) {
              d(f, a) && c.push(f)
            }
            return c
          }
        }else {
          !f && !a.sc ? b = function(b, c) {
            for(var d = pa(0, c), f, h = 0, i = b.getElementsByTagName(a.Pb());f = i[h++];) {
              d.push(f)
            }
            return d
          } : (d = n(a, {Ma:1, V:1, id:1}), b = function(b, c) {
            for(var f = pa(0, c), h, i = 0, j = b.getElementsByTagName(a.Pb());h = j[i++];) {
              d(h, b) && f.push(h)
            }
            return f
          })
        }
      }
    }
    return Jf[a.Pa] = b
  }
  function i(a) {
    a = a || Wg;
    return function(b, d, f) {
      for(var h = 0, i = b[Nb];b = i[h++];) {
        Kc(b) && ((!f || c(b, f)) && a(b, h)) && d.push(b)
      }
      return d
    }
  }
  function j(a) {
    return function(b, d, f) {
      for(b = b[Lc];b;) {
        if(Kc(b)) {
          if(f && !c(b, f)) {
            break
          }
          a(b) && d.push(b)
        }
        b = b[Lc]
      }
      return d
    }
  }
  function k(a) {
    return function(b, d, f) {
      for(;b = b[Lc];) {
        if(!rd || H(b)) {
          (!f || c(b, f)) && a(b) && d.push(b);
          break
        }
      }
      return d
    }
  }
  function n(a, b) {
    if(!a) {
      return Wg
    }
    var b = b || {}, c = l;
    b.Ma || (c = Z(c, H));
    b.V || "*" != a.V && (c = Z(c, function(b) {
      return b && b.tagName == a.Pb()
    }));
    b.da || xa(a.da, function(a, b) {
      var d = RegExp("(?:^|\\s)" + a + "(?:\\s|$)");
      c = Z(c, function(a) {
        return d.test(a.className)
      });
      c.count = b
    });
    b.Aa || xa(a.Aa, function(a) {
      var b = a.name;
      ne[b] && (c = Z(c, ne[b](b, a.value)))
    });
    b.ab || xa(a.ab, function(a) {
      var b, d = a.pb;
      a.type && Kf[a.type] ? b = Kf[a.type](d, a.Sb) : d.length && (b = $g(d));
      b && (c = Z(c, b))
    });
    b.id || a.id && (c = Z(c, function(b) {
      return!!b && b.id == a.id
    }));
    c || "default" in b || (c = Wg);
    return c
  }
  function t(a) {
    return u(a) % 2
  }
  function r(a) {
    return!(u(a) % 2)
  }
  function u(a) {
    var b = a.parentNode, c = 0, d = b[Nb], f = a._i || -1, h = b._l || -1;
    if(!d) {
      return-1
    }
    d = d.length;
    if(h == d && 0 <= f && 0 <= h) {
      return f
    }
    b._l = d;
    f = -1;
    for(b = b.firstElementChild || b.firstChild;b;b = b[Lc]) {
      Kc(b) && (b._i = ++c, a === b && (f = c))
    }
    return f
  }
  function B(a) {
    for(;a = a[Lc];) {
      if(Kc(a)) {
        return m
      }
    }
    return g
  }
  function y(a) {
    for(;a = a[ah];) {
      if(Kc(a)) {
        return m
      }
    }
    return g
  }
  function I(a, b) {
    return!a ? "" : "class" == b ? a.className || "" : "for" == b ? a.htmlFor || "" : "style" == b ? a.style.cssText || "" : ($b ? a.getAttribute(b) : a.getAttribute(b, 2)) || ""
  }
  function H(a) {
    return 1 == a.nodeType
  }
  function Z(a, b) {
    return!a ? b : !b ? a : function() {
      return a.apply(window, arguments) && b.apply(window, arguments)
    }
  }
  function oa(a) {
    function b() {
      0 <= n && (L.id = c(n, y).replace(/\\/g, ""), n = -1);
      if(0 <= r) {
        var a = r == y ? l : c(r, y);
        0 > ">~+".indexOf(a) ? L.V = a : L.nb = a;
        r = -1
      }
      0 <= k && (L.da.push(c(k + 1, y).replace(/\\/g, "")), k = -1)
    }
    function c(b, d) {
      return na(a.slice(b, d))
    }
    for(var a = 0 <= ">~+".indexOf(a.slice(-1)) ? a + " * " : a + " ", d = [], f = -1, h = -1, i = -1, j = -1, k = -1, n = -1, r = -1, t = "", u = "", B, y = 0, I = a.length, L = l, H = l;t = u, u = a.charAt(y), y < I;y++) {
      if("\\" != t) {
        if(L || (B = y, L = {Pa:l, Aa:[], ab:[], da:[], V:l, nb:l, id:l, Pb:function() {
          return $b ? this.Hc : this.V
        }}, r = y), 0 <= f) {
          if("]" == u) {
            H.pb ? H.Sb = c(i || f + 1, y) : H.pb = c(f + 1, y);
            if((f = H.Sb) && ('"' == f.charAt(0) || "'" == f.charAt(0))) {
              H.Sb = f.slice(1, -1)
            }
            L.ab.push(H);
            H = l;
            f = i = -1
          }else {
            "=" == u && (i = 0 <= "|~^$*".indexOf(t) ? t : "", H.type = i + u, H.pb = c(f + 1, y - i.length), i = y + 1)
          }
        }else {
          0 <= h ? ")" == u && (0 <= j && (H.value = c(h + 1, y)), j = h = -1) : "#" == u ? (b(), n = y + 1) : "." == u ? (b(), k = y) : ":" == u ? (b(), j = y) : "[" == u ? (b(), f = y, H = {}) : "(" == u ? (0 <= j && (H = {name:c(j + 1, y), value:l}, L.Aa.push(H)), h = y) : " " == u && t != u && (b(), 0 <= j && L.Aa.push({name:c(j + 1, y)}), L.sc = L.Aa.length || L.ab.length || L.da.length, L.Sd = L.Pa = c(B, y), L.Hc = L.V = L.nb ? l : L.V || "*", L.V && (L.V = L.V.toUpperCase()), d.length && 
          d[d.length - 1].nb && (L.qc = d.pop(), L.Pa = L.qc.Pa + " " + L.Pa), d.push(L), L = l)
        }
      }
    }
    return d
  }
  function pa(a, b) {
    var c = b || [];
    a && c.push(a);
    return c
  }
  var $a = sf && "BackCompat" == document.compatMode, Nb = document.firstChild.children ? "children" : "childNodes", $b = m, Kf = {"*=":function(a, b) {
    return function(c) {
      return 0 <= I(c, a).indexOf(b)
    }
  }, "^=":function(a, b) {
    return function(c) {
      return 0 == I(c, a).indexOf(b)
    }
  }, "$=":function(a, b) {
    return function(c) {
      c = " " + I(c, a);
      return c.lastIndexOf(b) == c.length - b.length
    }
  }, "~=":function(a, b) {
    var c = " " + b + " ";
    return function(b) {
      return 0 <= (" " + I(b, a) + " ").indexOf(c)
    }
  }, "|=":function(a, b) {
    b = " " + b;
    return function(c) {
      c = " " + I(c, a);
      return c == b || 0 == c.indexOf(b + "-")
    }
  }, "=":function(a, b) {
    return function(c) {
      return I(c, a) == b
    }
  }}, rd = "undefined" == typeof document.firstChild.nextElementSibling, Lc = !rd ? "nextElementSibling" : "nextSibling", ah = !rd ? "previousElementSibling" : "previousSibling", Kc = rd ? H : Wg, ne = {checked:function() {
    return function(a) {
      return a.checked || a.attributes.checked
    }
  }, "first-child":function() {
    return y
  }, "last-child":function() {
    return B
  }, "only-child":function() {
    return function(a) {
      return!y(a) || !B(a) ? m : g
    }
  }, empty:function() {
    return function(a) {
      for(var b = a.childNodes, a = a.childNodes.length - 1;0 <= a;a--) {
        var c = b[a].nodeType;
        if(1 === c || 3 == c) {
          return m
        }
      }
      return g
    }
  }, contains:function(a, b) {
    var c = b.charAt(0);
    if('"' == c || "'" == c) {
      b = b.slice(1, -1)
    }
    return function(a) {
      return 0 <= a.innerHTML.indexOf(b)
    }
  }, not:function(a, b) {
    var c = oa(b)[0], d = {Ma:1};
    "*" != c.V && (d.V = 1);
    c.da.length || (d.da = 1);
    var f = n(c, d);
    return function(a) {
      return!f(a)
    }
  }, "nth-child":function(a, b) {
    if("odd" == b) {
      return t
    }
    if("even" == b) {
      return r
    }
    if(-1 != b.indexOf("n")) {
      var c = b.split("n", 2), d = c[0] ? "-" == c[0] ? -1 : parseInt(c[0], 10) : 1, f = c[1] ? parseInt(c[1], 10) : 0, h = 0, i = -1;
      0 < d ? 0 > f ? f = f % d && d + f % d : 0 < f && (f >= d && (h = f - f % d), f %= d) : 0 > d && (d *= -1, 0 < f && (i = f, f %= d));
      if(0 < d) {
        return function(a) {
          a = u(a);
          return a >= h && (i < 0 || a <= i) && a % d == f
        }
      }
      b = f
    }
    var j = parseInt(b, 10);
    return function(a) {
      return u(a) == j
    }
  }}, $g = qf ? function(a) {
    var b = a.toLowerCase();
    "class" == b && (a = "className");
    return function(c) {
      return $b ? c.getAttribute(a) : c[a] || c[b]
    }
  } : function(a) {
    return function(b) {
      return b && b.getAttribute && b.hasAttribute(a)
    }
  }, Jf = {}, If = {}, Hf = {}, Gf = !!document.querySelectorAll && (!sf || Bf("526")), kb = 0, Zg = qf ? function(a) {
    return $b ? a.getAttribute("_uid") || a.setAttribute("_uid", ++kb) || kb : a.uniqueID
  } : function(a) {
    return a._uid || (a._uid = ++kb)
  };
  a.Aa = ne;
  return a
}();
da("goog.dom.query", Xg);
da("goog.dom.query.pseudos", Xg.Aa);
var Yg, bh = function() {
  function a(a, b) {
    aa === Yg && (Yg = function(a, b, c, d) {
      this.oc = a;
      this.cc = b;
      this.Kc = c;
      this.Gc = d;
      this.o = 0;
      this.j = 393216
    }, Yg.Mb = g, Yg.Lb = function() {
      return N.b("domina.css/t11331")
    }, Yg.prototype.mc = function() {
      var a = this;
      return gd.a(function(b) {
        b = Xg(a.oc, b);
        if(b == l) {
          b = Q
        }else {
          var c;
          c = b ? ((c = b.j & 8388608) ? c : b.hb) ? g : b.j ? m : x(lb, b) : x(lb, b);
          b = c ? S(b) : w(w(b) ? b.length : b) ? Kg(b) : S(W([b]))
        }
        return b
      }, Gg(a.cc))
    }, Yg.prototype.C = o("Gc"), Yg.prototype.F = function(a, b) {
      return new Yg(this.oc, this.cc, this.Kc, b)
    }, Yg);
    return new Yg(b, a, c, l)
  }
  function b(a) {
    return c.a(Cf()[0], a)
  }
  var c = l, c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, f)
    }
    e("Invalid arity: " + arguments.length)
  };
  c.b = b;
  c.a = a;
  return c
}();
da("testproj.init", function() {
  return Vg.c(bh.b("a.delete"), "\ufdd0'click", function(a) {
    return Hg.e(G([Lg(a)], 0))
  })
});
