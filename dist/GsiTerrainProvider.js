var GsiTerrainProvider = (function (cesium) {
  'use strict';

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _arrayLikeToArray(r);
  }
  function asyncGeneratorStep(n, t, e, r, o, a, c) {
    try {
      var i = n[a](c),
        u = i.value;
    } catch (n) {
      return void e(n);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
  }
  function _asyncToGenerator(n) {
    return function () {
      var t = this,
        e = arguments;
      return new Promise(function (r, o) {
        var a = n.apply(t, e);
        function _next(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
        }
        function _throw(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
        }
        _next(void 0);
      });
    };
  }
  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[r] = t, e;
  }
  function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _regeneratorRuntime() {
    _regeneratorRuntime = function () {
      return e;
    };
    var t,
      e = {},
      r = Object.prototype,
      n = r.hasOwnProperty,
      o = Object.defineProperty || function (t, e, r) {
        t[e] = r.value;
      },
      i = "function" == typeof Symbol ? Symbol : {},
      a = i.iterator || "@@iterator",
      c = i.asyncIterator || "@@asyncIterator",
      u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
      return Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), t[e];
    }
    try {
      define({}, "");
    } catch (t) {
      define = function (t, e, r) {
        return t[e] = r;
      };
    }
    function wrap(t, e, r, n) {
      var i = e && e.prototype instanceof Generator ? e : Generator,
        a = Object.create(i.prototype),
        c = new Context(n || []);
      return o(a, "_invoke", {
        value: makeInvokeMethod(t, r, c)
      }), a;
    }
    function tryCatch(t, e, r) {
      try {
        return {
          type: "normal",
          arg: t.call(e, r)
        };
      } catch (t) {
        return {
          type: "throw",
          arg: t
        };
      }
    }
    e.wrap = wrap;
    var h = "suspendedStart",
      l = "suspendedYield",
      f = "executing",
      s = "completed",
      y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function () {
      return this;
    });
    var d = Object.getPrototypeOf,
      v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
      ["next", "throw", "return"].forEach(function (e) {
        define(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function AsyncIterator(t, e) {
      function invoke(r, o, i, a) {
        var c = tryCatch(t[r], t, o);
        if ("throw" !== c.type) {
          var u = c.arg,
            h = u.value;
          return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
            invoke("next", t, i, a);
          }, function (t) {
            invoke("throw", t, i, a);
          }) : e.resolve(h).then(function (t) {
            u.value = t, i(u);
          }, function (t) {
            return invoke("throw", t, i, a);
          });
        }
        a(c.arg);
      }
      var r;
      o(this, "_invoke", {
        value: function (t, n) {
          function callInvokeWithMethodAndArg() {
            return new e(function (e, r) {
              invoke(t, n, e, r);
            });
          }
          return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(e, r, n) {
      var o = h;
      return function (i, a) {
        if (o === f) throw Error("Generator is already running");
        if (o === s) {
          if ("throw" === i) throw a;
          return {
            value: t,
            done: !0
          };
        }
        for (n.method = i, n.arg = a;;) {
          var c = n.delegate;
          if (c) {
            var u = maybeInvokeDelegate(c, n);
            if (u) {
              if (u === y) continue;
              return u;
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
            if (o === h) throw o = s, n.arg;
            n.dispatchException(n.arg);
          } else "return" === n.method && n.abrupt("return", n.arg);
          o = f;
          var p = tryCatch(e, r, n);
          if ("normal" === p.type) {
            if (o = n.done ? s : l, p.arg === y) continue;
            return {
              value: p.arg,
              done: n.done
            };
          }
          "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
        }
      };
    }
    function maybeInvokeDelegate(e, r) {
      var n = r.method,
        o = e.iterator[n];
      if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
      var i = tryCatch(o, e.iterator, r.arg);
      if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
      var a = i.arg;
      return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
      var e = {
        tryLoc: t[0]
      };
      1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
      var e = t.completion || {};
      e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(e) {
      if (e || "" === e) {
        var r = e[a];
        if (r) return r.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = -1,
            i = function next() {
              for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
              return next.value = t, next.done = !0, next;
            };
          return i.next = i;
        }
      }
      throw new TypeError(typeof e + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function (t) {
      return {
        __await: t
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
      return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(wrap(t, r, n, o), i);
      return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
        return t.done ? t.value : a.next();
      });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
      return this;
    }), define(g, "toString", function () {
      return "[object Generator]";
    }), e.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var n in e) r.push(n);
      return r.reverse(), function next() {
        for (; r.length;) {
          var t = r.pop();
          if (t in e) return next.value = t, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, e.values = values, Context.prototype = {
      constructor: Context,
      reset: function (e) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      },
      stop: function () {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function (e) {
        if (this.done) throw e;
        var r = this;
        function handle(n, o) {
          return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ("root" === i.tryLoc) return handle("end");
          if (i.tryLoc <= this.prev) {
            var c = n.call(i, "catchLoc"),
              u = n.call(i, "finallyLoc");
            if (c && u) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            } else if (c) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            } else {
              if (!u) throw Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function (t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
            var i = o;
            break;
          }
        }
        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
        var a = i ? i.completion : {};
        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
      },
      complete: function (t, e) {
        if ("throw" === t.type) throw t.arg;
        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
      },
      finish: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
        }
      },
      catch: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              resetTryEntry(r);
            }
            return o;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (e, r, n) {
        return this.delegate = {
          iterator: values(e),
          resultName: r,
          nextLoc: n
        }, "next" === this.method && (this.arg = t), y;
      }
    }, e;
  }
  function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function iota$1(n) {
    var result = new Array(n);
    for(var i=0; i<n; ++i) {
      result[i] = i;
    }
    return result
  }

  var iota_1 = iota$1;

  /*!
   * Determine if an object is a Buffer
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   */

  // The _isBuffer check is for Safari 5-7 support, because it's missing
  // Object.prototype.constructor. Remove this eventually
  var isBuffer_1 = function (obj) {
    return obj != null && (isBuffer$1(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
  };

  function isBuffer$1 (obj) {
    return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
  }

  // For Node v0.10 support. Remove this eventually.
  function isSlowBuffer (obj) {
    return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer$1(obj.slice(0, 0))
  }

  var iota = iota_1;
  var isBuffer = isBuffer_1;

  var hasTypedArrays  = ((typeof Float64Array) !== "undefined");

  function compare1st(a, b) {
    return a[0] - b[0]
  }

  function order() {
    var stride = this.stride;
    var terms = new Array(stride.length);
    var i;
    for(i=0; i<terms.length; ++i) {
      terms[i] = [Math.abs(stride[i]), i];
    }
    terms.sort(compare1st);
    var result = new Array(terms.length);
    for(i=0; i<result.length; ++i) {
      result[i] = terms[i][1];
    }
    return result
  }

  function compileConstructor(dtype, dimension) {
    var className = ["View", dimension, "d", dtype].join("");
    if(dimension < 0) {
      className = "View_Nil" + dtype;
    }
    var useGetters = (dtype === "generic");

    if(dimension === -1) {
      //Special case for trivial arrays
      var code =
        "function "+className+"(a){this.data=a;};\
var proto="+className+".prototype;\
proto.dtype='"+dtype+"';\
proto.index=function(){return -1};\
proto.size=0;\
proto.dimension=-1;\
proto.shape=proto.stride=proto.order=[];\
proto.lo=proto.hi=proto.transpose=proto.step=\
function(){return new "+className+"(this.data);};\
proto.get=proto.set=function(){};\
proto.pick=function(){return null};\
return function construct_"+className+"(a){return new "+className+"(a);}";
      var procedure = new Function(code);
      return procedure()
    } else if(dimension === 0) {
      //Special case for 0d arrays
      var code =
        "function "+className+"(a,d) {\
this.data = a;\
this.offset = d\
};\
var proto="+className+".prototype;\
proto.dtype='"+dtype+"';\
proto.index=function(){return this.offset};\
proto.dimension=0;\
proto.size=1;\
proto.shape=\
proto.stride=\
proto.order=[];\
proto.lo=\
proto.hi=\
proto.transpose=\
proto.step=function "+className+"_copy() {\
return new "+className+"(this.data,this.offset)\
};\
proto.pick=function "+className+"_pick(){\
return TrivialArray(this.data);\
};\
proto.valueOf=proto.get=function "+className+"_get(){\
return "+(useGetters ? "this.data.get(this.offset)" : "this.data[this.offset]")+
  "};\
proto.set=function "+className+"_set(v){\
return "+(useGetters ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v")+"\
};\
return function construct_"+className+"(a,b,c,d){return new "+className+"(a,d)}";
      var procedure = new Function("TrivialArray", code);
      return procedure(CACHED_CONSTRUCTORS[dtype][0])
    }

    var code = ["'use strict'"];

    //Create constructor for view
    var indices = iota(dimension);
    var args = indices.map(function(i) { return "i"+i });
    var index_str = "this.offset+" + indices.map(function(i) {
          return "this.stride[" + i + "]*i" + i
        }).join("+");
    var shapeArg = indices.map(function(i) {
        return "b"+i
      }).join(",");
    var strideArg = indices.map(function(i) {
        return "c"+i
      }).join(",");
    code.push(
      "function "+className+"(a," + shapeArg + "," + strideArg + ",d){this.data=a",
        "this.shape=[" + shapeArg + "]",
        "this.stride=[" + strideArg + "]",
        "this.offset=d|0}",
      "var proto="+className+".prototype",
      "proto.dtype='"+dtype+"'",
      "proto.dimension="+dimension);

    //view.size:
    code.push("Object.defineProperty(proto,'size',{get:function "+className+"_size(){\
return "+indices.map(function(i) { return "this.shape["+i+"]" }).join("*"),
  "}})");

    //view.order:
    if(dimension === 1) {
      code.push("proto.order=[0]");
    } else {
      code.push("Object.defineProperty(proto,'order',{get:");
      if(dimension < 4) {
        code.push("function "+className+"_order(){");
        if(dimension === 2) {
          code.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})");
        } else if(dimension === 3) {
          code.push(
  "var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);\
if(s0>s1){\
if(s1>s2){\
return [2,1,0];\
}else if(s0>s2){\
return [1,2,0];\
}else{\
return [1,0,2];\
}\
}else if(s0>s2){\
return [2,0,1];\
}else if(s2>s1){\
return [0,1,2];\
}else{\
return [0,2,1];\
}}})");
        }
      } else {
        code.push("ORDER})");
      }
    }

    //view.set(i0, ..., v):
    code.push(
  "proto.set=function "+className+"_set("+args.join(",")+",v){");
    if(useGetters) {
      code.push("return this.data.set("+index_str+",v)}");
    } else {
      code.push("return this.data["+index_str+"]=v}");
    }

    //view.get(i0, ...):
    code.push("proto.get=function "+className+"_get("+args.join(",")+"){");
    if(useGetters) {
      code.push("return this.data.get("+index_str+")}");
    } else {
      code.push("return this.data["+index_str+"]}");
    }

    //view.index:
    code.push(
      "proto.index=function "+className+"_index(", args.join(), "){return "+index_str+"}");

    //view.hi():
    code.push("proto.hi=function "+className+"_hi("+args.join(",")+"){return new "+className+"(this.data,"+
      indices.map(function(i) {
        return ["(typeof i",i,"!=='number'||i",i,"<0)?this.shape[", i, "]:i", i,"|0"].join("")
      }).join(",")+","+
      indices.map(function(i) {
        return "this.stride["+i + "]"
      }).join(",")+",this.offset)}");

    //view.lo():
    var a_vars = indices.map(function(i) { return "a"+i+"=this.shape["+i+"]" });
    var c_vars = indices.map(function(i) { return "c"+i+"=this.stride["+i+"]" });
    code.push("proto.lo=function "+className+"_lo("+args.join(",")+"){var b=this.offset,d=0,"+a_vars.join(",")+","+c_vars.join(","));
    for(var i=0; i<dimension; ++i) {
      code.push(
  "if(typeof i"+i+"==='number'&&i"+i+">=0){\
d=i"+i+"|0;\
b+=c"+i+"*d;\
a"+i+"-=d}");
    }
    code.push("return new "+className+"(this.data,"+
      indices.map(function(i) {
        return "a"+i
      }).join(",")+","+
      indices.map(function(i) {
        return "c"+i
      }).join(",")+",b)}");

    //view.step():
    code.push("proto.step=function "+className+"_step("+args.join(",")+"){var "+
      indices.map(function(i) {
        return "a"+i+"=this.shape["+i+"]"
      }).join(",")+","+
      indices.map(function(i) {
        return "b"+i+"=this.stride["+i+"]"
      }).join(",")+",c=this.offset,d=0,ceil=Math.ceil");
    for(var i=0; i<dimension; ++i) {
      code.push(
  "if(typeof i"+i+"==='number'){\
d=i"+i+"|0;\
if(d<0){\
c+=b"+i+"*(a"+i+"-1);\
a"+i+"=ceil(-a"+i+"/d)\
}else{\
a"+i+"=ceil(a"+i+"/d)\
}\
b"+i+"*=d\
}");
    }
    code.push("return new "+className+"(this.data,"+
      indices.map(function(i) {
        return "a" + i
      }).join(",")+","+
      indices.map(function(i) {
        return "b" + i
      }).join(",")+",c)}");

    //view.transpose():
    var tShape = new Array(dimension);
    var tStride = new Array(dimension);
    for(var i=0; i<dimension; ++i) {
      tShape[i] = "a[i"+i+"]";
      tStride[i] = "b[i"+i+"]";
    }
    code.push("proto.transpose=function "+className+"_transpose("+args+"){"+
      args.map(function(n,idx) { return n + "=(" + n + "===undefined?" + idx + ":" + n + "|0)"}).join(";"),
      "var a=this.shape,b=this.stride;return new "+className+"(this.data,"+tShape.join(",")+","+tStride.join(",")+",this.offset)}");

    //view.pick():
    code.push("proto.pick=function "+className+"_pick("+args+"){var a=[],b=[],c=this.offset");
    for(var i=0; i<dimension; ++i) {
      code.push("if(typeof i"+i+"==='number'&&i"+i+">=0){c=(c+this.stride["+i+"]*i"+i+")|0}else{a.push(this.shape["+i+"]);b.push(this.stride["+i+"])}");
    }
    code.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}");

    //Add return statement
    code.push("return function construct_"+className+"(data,shape,stride,offset){return new "+className+"(data,"+
      indices.map(function(i) {
        return "shape["+i+"]"
      }).join(",")+","+
      indices.map(function(i) {
        return "stride["+i+"]"
      }).join(",")+",offset)}");

    //Compile procedure
    var procedure = new Function("CTOR_LIST", "ORDER", code.join("\n"));
    return procedure(CACHED_CONSTRUCTORS[dtype], order)
  }

  function arrayDType(data) {
    if(isBuffer(data)) {
      return "buffer"
    }
    if(hasTypedArrays) {
      switch(Object.prototype.toString.call(data)) {
        case "[object Float64Array]":
          return "float64"
        case "[object Float32Array]":
          return "float32"
        case "[object Int8Array]":
          return "int8"
        case "[object Int16Array]":
          return "int16"
        case "[object Int32Array]":
          return "int32"
        case "[object Uint8Array]":
          return "uint8"
        case "[object Uint16Array]":
          return "uint16"
        case "[object Uint32Array]":
          return "uint32"
        case "[object Uint8ClampedArray]":
          return "uint8_clamped"
        case "[object BigInt64Array]":
          return "bigint64"
        case "[object BigUint64Array]":
          return "biguint64"
      }
    }
    if(Array.isArray(data)) {
      return "array"
    }
    return "generic"
  }

  var CACHED_CONSTRUCTORS = {
    "float32":[],
    "float64":[],
    "int8":[],
    "int16":[],
    "int32":[],
    "uint8":[],
    "uint16":[],
    "uint32":[],
    "array":[],
    "uint8_clamped":[],
    "bigint64": [],
    "biguint64": [],
    "buffer":[],
    "generic":[]
  }

  ;
  function wrappedNDArrayCtor(data, shape, stride, offset) {
    if(data === undefined) {
      var ctor = CACHED_CONSTRUCTORS.array[0];
      return ctor([])
    } else if(typeof data === "number") {
      data = [data];
    }
    if(shape === undefined) {
      shape = [ data.length ];
    }
    var d = shape.length;
    if(stride === undefined) {
      stride = new Array(d);
      for(var i=d-1, sz=1; i>=0; --i) {
        stride[i] = sz;
        sz *= shape[i];
      }
    }
    if(offset === undefined) {
      offset = 0;
      for(var i=0; i<d; ++i) {
        if(stride[i] < 0) {
          offset -= (shape[i]-1)*stride[i];
        }
      }
    }
    var dtype = arrayDType(data);
    var ctor_list = CACHED_CONSTRUCTORS[dtype];
    while(ctor_list.length <= d+1) {
      ctor_list.push(compileConstructor(dtype, ctor_list.length-1));
    }
    var ctor = ctor_list[d+1];
    return ctor(data, shape, stride, offset)
  }

  var ndarray$1 = wrappedNDArrayCtor;

  /* from get-pixels 3.3.3
  The MIT License (MIT)

  Copyright (c) 2013 Mikola Lysenko

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
  */

  var ndarray = ndarray$1;
  function defaultImage(url, cb) {
    var img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = function () {
      var canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      var context = canvas.getContext('2d');
      context.drawImage(img, 0, 0);
      var pixels = context.getImageData(0, 0, img.width, img.height);
      cb(null, ndarray(new Uint8Array(pixels.data), [img.width, img.height, 4], [4, 4 * img.width, 1], 0));
    };
    img.onerror = function (err) {
      cb(err);
    };
    img.src = url;
  }
  var domPixels = function getPixels(url, type, cb) {
    if (!cb) {
      cb = type;
      type = '';
    }
    defaultImage(url, cb);
  };

  var _getPixels = /*@__PURE__*/getDefaultExportFromCjs(domPixels);

  class Martini {
      constructor(gridSize = 257) {
          this.gridSize = gridSize;
          const tileSize = gridSize - 1;
          if (tileSize & (tileSize - 1)) throw new Error(
              `Expected grid size to be 2^n+1, got ${gridSize}.`);

          this.numTriangles = tileSize * tileSize * 2 - 2;
          this.numParentTriangles = this.numTriangles - tileSize * tileSize;

          this.indices = new Uint32Array(this.gridSize * this.gridSize);

          // coordinates for all possible triangles in an RTIN tile
          this.coords = new Uint16Array(this.numTriangles * 4);

          // get triangle coordinates from its index in an implicit binary tree
          for (let i = 0; i < this.numTriangles; i++) {
              let id = i + 2;
              let ax = 0, ay = 0, bx = 0, by = 0, cx = 0, cy = 0;
              if (id & 1) {
                  bx = by = cx = tileSize; // bottom-left triangle
              } else {
                  ax = ay = cy = tileSize; // top-right triangle
              }
              while ((id >>= 1) > 1) {
                  const mx = (ax + bx) >> 1;
                  const my = (ay + by) >> 1;

                  if (id & 1) { // left half
                      bx = ax; by = ay;
                      ax = cx; ay = cy;
                  } else { // right half
                      ax = bx; ay = by;
                      bx = cx; by = cy;
                  }
                  cx = mx; cy = my;
              }
              const k = i * 4;
              this.coords[k + 0] = ax;
              this.coords[k + 1] = ay;
              this.coords[k + 2] = bx;
              this.coords[k + 3] = by;
          }
      }

      createTile(terrain) {
          return new Tile(terrain, this);
      }
  }

  class Tile {
      constructor(terrain, martini) {
          const size = martini.gridSize;
          if (terrain.length !== size * size) throw new Error(
              `Expected terrain data of length ${size * size} (${size} x ${size}), got ${terrain.length}.`);

          this.terrain = terrain;
          this.martini = martini;
          this.errors = new Float32Array(terrain.length);
          this.update();
      }

      update() {
          const {numTriangles, numParentTriangles, coords, gridSize: size} = this.martini;
          const {terrain, errors} = this;

          // iterate over all possible triangles, starting from the smallest level
          for (let i = numTriangles - 1; i >= 0; i--) {
              const k = i * 4;
              const ax = coords[k + 0];
              const ay = coords[k + 1];
              const bx = coords[k + 2];
              const by = coords[k + 3];
              const mx = (ax + bx) >> 1;
              const my = (ay + by) >> 1;
              const cx = mx + my - ay;
              const cy = my + ax - mx;

              // calculate error in the middle of the long edge of the triangle
              const interpolatedHeight = (terrain[ay * size + ax] + terrain[by * size + bx]) / 2;
              const middleIndex = my * size + mx;
              const middleError = Math.abs(interpolatedHeight - terrain[middleIndex]);

              errors[middleIndex] = Math.max(errors[middleIndex], middleError);

              if (i < numParentTriangles) { // bigger triangles; accumulate error with children
                  const leftChildIndex = ((ay + cy) >> 1) * size + ((ax + cx) >> 1);
                  const rightChildIndex = ((by + cy) >> 1) * size + ((bx + cx) >> 1);
                  errors[middleIndex] = Math.max(errors[middleIndex], errors[leftChildIndex], errors[rightChildIndex]);
              }
          }
      }

      getMesh(maxError = 0) {
          const {gridSize: size, indices} = this.martini;
          const {errors} = this;
          let numVertices = 0;
          let numTriangles = 0;
          const max = size - 1;

          // use an index grid to keep track of vertices that were already used to avoid duplication
          indices.fill(0);

          // retrieve mesh in two stages that both traverse the error map:
          // - countElements: find used vertices (and assign each an index), and count triangles (for minimum allocation)
          // - processTriangle: fill the allocated vertices & triangles typed arrays

          function countElements(ax, ay, bx, by, cx, cy) {
              const mx = (ax + bx) >> 1;
              const my = (ay + by) >> 1;

              if (Math.abs(ax - cx) + Math.abs(ay - cy) > 1 && errors[my * size + mx] > maxError) {
                  countElements(cx, cy, ax, ay, mx, my);
                  countElements(bx, by, cx, cy, mx, my);
              } else {
                  indices[ay * size + ax] = indices[ay * size + ax] || ++numVertices;
                  indices[by * size + bx] = indices[by * size + bx] || ++numVertices;
                  indices[cy * size + cx] = indices[cy * size + cx] || ++numVertices;
                  numTriangles++;
              }
          }
          countElements(0, 0, max, max, max, 0);
          countElements(max, max, 0, 0, 0, max);

          const vertices = new Uint16Array(numVertices * 2);
          const triangles = new Uint32Array(numTriangles * 3);
          let triIndex = 0;

          function processTriangle(ax, ay, bx, by, cx, cy) {
              const mx = (ax + bx) >> 1;
              const my = (ay + by) >> 1;

              if (Math.abs(ax - cx) + Math.abs(ay - cy) > 1 && errors[my * size + mx] > maxError) {
                  // triangle doesn't approximate the surface well enough; drill down further
                  processTriangle(cx, cy, ax, ay, mx, my);
                  processTriangle(bx, by, cx, cy, mx, my);

              } else {
                  // add a triangle
                  const a = indices[ay * size + ax] - 1;
                  const b = indices[by * size + bx] - 1;
                  const c = indices[cy * size + cx] - 1;

                  vertices[2 * a] = ax;
                  vertices[2 * a + 1] = ay;

                  vertices[2 * b] = bx;
                  vertices[2 * b + 1] = by;

                  vertices[2 * c] = cx;
                  vertices[2 * c + 1] = cy;

                  triangles[triIndex++] = a;
                  triangles[triIndex++] = b;
                  triangles[triIndex++] = c;
              }
          }
          processTriangle(0, 0, max, max, max, 0);
          processTriangle(max, max, 0, 0, 0, max);

          return {vertices, triangles};
      }
  }

  function gsiTerrainToGrid(png) {
    var gridSize = png.shape[0] + 1;
    var terrain = new Float32Array(gridSize * gridSize);
    var tileSize = png.shape[0];

    // decode terrain values
    for (var y = 0; y < tileSize; y++) {
      for (var x = 0; x < tileSize; x++) {
        var yc = y;
        var r = png.get(x, yc, 0);
        var g = png.get(x, yc, 1);
        var b = png.get(x, yc, 2);
        if (r === 128 && g === 0 && b === 0) {
          terrain[y * gridSize + x] = 0;
        } else {
          terrain[y * gridSize + x] = r >= 128 ? r * 655.36 + g * 2.56 + b * 0.01 + -167772.16 : r * 655.36 + g * 2.56 + b * 0.01;
        }
      }
    }
    // backfill right and bottom borders
    for (var _x = 0; _x < gridSize - 1; _x++) {
      terrain[gridSize * (gridSize - 1) + _x] = terrain[gridSize * (gridSize - 2) + _x];
    }
    for (var _y = 0; _y < gridSize; _y++) {
      terrain[gridSize * _y + gridSize - 1] = terrain[gridSize * _y + gridSize - 2];
    }
    return terrain;
  }

  // https://github.com/CesiumGS/cesium/blob/1.68/Source/Scene/MapboxImageryProvider.js#L42
  var GsiTerrainProvider = /*#__PURE__*/function () {
    // @ts-ignore
    function GsiTerrainProvider(opts) {
      var _opts$ellipsoid;
      _classCallCheck(this, GsiTerrainProvider);
      _defineProperty(this, "martini", void 0);
      _defineProperty(this, "hasWaterMask", false);
      _defineProperty(this, "hasVertexNormals", false);
      _defineProperty(this, "credit", new cesium.Credit('地理院タイル'));
      _defineProperty(this, "ready", void 0);
      _defineProperty(this, "readyPromise", void 0);
      _defineProperty(this, "availability", null);
      _defineProperty(this, "errorEvent", new cesium.Event());
      _defineProperty(this, "tilingScheme", void 0);
      _defineProperty(this, "ellipsoid", void 0);
      _defineProperty(this, "format", void 0);
      _defineProperty(this, "tileSize", 256);
      this.martini = new Martini(this.tileSize + 1);
      this.ready = true;
      this.readyPromise = Promise.resolve(true);
      this.errorEvent.addEventListener(console.log, this);
      this.ellipsoid = (_opts$ellipsoid = opts.ellipsoid) !== null && _opts$ellipsoid !== void 0 ? _opts$ellipsoid : cesium.Ellipsoid.WGS84;
      this.format = 'png';
      this.tilingScheme = new cesium.WebMercatorTilingScheme({
        numberOfLevelZeroTilesX: 1,
        numberOfLevelZeroTilesY: 1,
        ellipsoid: this.ellipsoid
      });
    }
    return _createClass(GsiTerrainProvider, [{
      key: "getPixels",
      value: function () {
        var _getPixels2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url) {
          var type,
            _args = arguments;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                type = _args.length > 1 && _args[1] !== undefined ? _args[1] : '';
                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  _getPixels(url, type, function (err, array) {
                    if (err != null) reject(err);
                    resolve(array);
                  });
                }));
              case 2:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        function getPixels(_x2) {
          return _getPixels2.apply(this, arguments);
        }
        return getPixels;
      }()
    }, {
      key: "requestMapboxTile",
      value: function () {
        var _requestMapboxTile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(x, y, z) {
          var err, url, pxArray, terrain, tile, mesh, v;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                this.tilingScheme.getNumberOfYTilesAtLevel(z);
                err = this.getLevelMaximumGeometricError(z);
                url = "https://cyberjapandata.gsi.go.jp/xyz/dem_png/".concat(z, "/").concat(x, "/").concat(y, ".png");
                _context2.prev = 3;
                _context2.next = 6;
                return this.getPixels(url);
              case 6:
                pxArray = _context2.sent;
                terrain = gsiTerrainToGrid(pxArray); // set up mesh generator for a certain 2^k+1 grid size
                // generate RTIN hierarchy from terrain data (an array of size^2 length)
                tile = this.martini.createTile(terrain); // get a mesh (vertices and triangles indices) for a 10m error
                console.log("Error level: ".concat(err));
                mesh = tile.getMesh(err);
                _context2.next = 13;
                return this.createQuantizedMeshData(x, y, z, tile, mesh);
              case 13:
                return _context2.abrupt("return", _context2.sent);
              case 16:
                _context2.prev = 16;
                _context2.t0 = _context2["catch"](3);
                // We fall back to a heightmap
                v = Math.max(32 - 4 * z, 4);
                return _context2.abrupt("return", this.emptyHeightmap(v));
              case 20:
              case "end":
                return _context2.stop();
            }
          }, _callee2, this, [[3, 16]]);
        }));
        function requestMapboxTile(_x3, _x4, _x5) {
          return _requestMapboxTile.apply(this, arguments);
        }
        return requestMapboxTile;
      }()
    }, {
      key: "emptyHeightmap",
      value: function emptyHeightmap(samples) {
        return new cesium.HeightmapTerrainData({
          buffer: new Uint8Array(Array(samples * samples).fill(0)),
          width: samples,
          height: samples
        });
      }
    }, {
      key: "createQuantizedMeshData",
      value: function () {
        var _createQuantizedMeshData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(x, y, z, tile, mesh) {
          var err, skirtHeight, xvals, yvals, heightMeters, northIndices, southIndices, eastIndices, westIndices, ix, vertexIx, px, py, scalar, xv, yv, maxHeight, minHeight, heights, tileRect, tileCenter, cosWidth, ellipsoidHeight, occlusionHeight, scaledCenter, horizonOcclusionPoint, orientedBoundingBox, boundingSphere, triangles, quantizedVertices;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                err = this.getLevelMaximumGeometricError(z);
                skirtHeight = err * 5;
                xvals = [];
                yvals = [];
                heightMeters = [];
                northIndices = [];
                southIndices = [];
                eastIndices = [];
                westIndices = [];
                for (ix = 0; ix < mesh.vertices.length / 2; ix++) {
                  vertexIx = ix;
                  px = mesh.vertices[ix * 2];
                  py = mesh.vertices[ix * 2 + 1];
                  heightMeters.push(tile.terrain[py * (this.tileSize + 1) + px]);
                  if (py == 0) northIndices.push(vertexIx);
                  if (py == this.tileSize) southIndices.push(vertexIx);
                  if (px == 0) westIndices.push(vertexIx);
                  if (px == this.tileSize) eastIndices.push(vertexIx);

                  // This saves us from out-of-range values like 32768
                  scalar = 32768 / this.tileSize;
                  xv = px * scalar;
                  yv = (this.tileSize - py) * scalar;
                  xvals.push(xv);
                  yvals.push(yv);
                }
                maxHeight = Math.max.apply(this, heightMeters);
                minHeight = Math.min.apply(this, heightMeters);
                heights = heightMeters.map(function (d) {
                  if (maxHeight - minHeight < 1) return 0;
                  return (d - minHeight) * (32767 / (maxHeight - minHeight));
                });
                tileRect = this.tilingScheme.tileXYToRectangle(x, y, z);
                tileCenter = cesium.Cartographic.toCartesian(cesium.Rectangle.center(tileRect)); // Need to get maximum distance at zoom level
                // tileRect.width is given in radians
                // cos of half-tile-width allows us to use right-triangle relationship
                cosWidth = Math.cos(tileRect.width / 2); // half tile width since our ref point is at the center
                // scale max height to max ellipsoid radius
                // ... it might be better to use the radius of the entire
                ellipsoidHeight = maxHeight / this.ellipsoid.maximumRadius; // cosine relationship to scale height in ellipsoid-relative coordinates
                occlusionHeight = (1 + ellipsoidHeight) / cosWidth;
                scaledCenter = cesium.Ellipsoid.WGS84.transformPositionToScaledSpace(tileCenter);
                horizonOcclusionPoint = new cesium.Cartesian3(scaledCenter.x, scaledCenter.y, occlusionHeight);
                orientedBoundingBox = null;
                if (tileRect.width < cesium.Math.PI_OVER_TWO + cesium.Math.EPSILON5) {
                  // @ts-ignore
                  orientedBoundingBox = cesium.OrientedBoundingBox.fromRectangle(tileRect, minHeight, maxHeight);
                  // @ts-ignore
                  boundingSphere = cesium.BoundingSphere.fromOrientedBoundingBox(orientedBoundingBox);
                } else {
                  // If our bounding rectangle spans >= 90º, we should use the entire globe as a bounding sphere.
                  boundingSphere = new cesium.BoundingSphere(cesium.Cartesian3.ZERO,
                  // radius (seems to be max height of Earth terrain?)
                  6379792.481506292);
                }
                triangles = new Uint16Array(mesh.triangles); // @ts-ignore
                // If our tile has greater than ~1º size
                if (!(tileRect.width > 0.02)) {
                  _context3.next = 25;
                  break;
                }
                return _context3.abrupt("return", this.emptyHeightmap(64));
              case 25:
                quantizedVertices = new Uint16Array( //verts
                [].concat(xvals, yvals, _toConsumableArray(heights))); // SE NW NE
                // NE NW SE
                return _context3.abrupt("return", new cesium.QuantizedMeshTerrainData({
                  minimumHeight: minHeight,
                  maximumHeight: maxHeight,
                  quantizedVertices: quantizedVertices,
                  indices: triangles,
                  // @ts-ignore
                  boundingSphere: boundingSphere,
                  // @ts-ignore
                  orientedBoundingBox: orientedBoundingBox,
                  // @ts-ignore
                  horizonOcclusionPoint: horizonOcclusionPoint,
                  westIndices: westIndices,
                  southIndices: southIndices,
                  eastIndices: eastIndices,
                  northIndices: northIndices,
                  westSkirtHeight: skirtHeight,
                  southSkirtHeight: skirtHeight,
                  eastSkirtHeight: skirtHeight,
                  northSkirtHeight: skirtHeight,
                  childTileMask: 14
                }));
              case 27:
              case "end":
                return _context3.stop();
            }
          }, _callee3, this);
        }));
        function createQuantizedMeshData(_x6, _x7, _x8, _x9, _x10) {
          return _createQuantizedMeshData.apply(this, arguments);
        }
        return createQuantizedMeshData;
      }()
    }, {
      key: "requestTileGeometry",
      value: function () {
        var _requestTileGeometry = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(x, y, z) {
          var mapboxTile;
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return this.requestMapboxTile(x, y, z);
              case 3:
                mapboxTile = _context4.sent;
                return _context4.abrupt("return", mapboxTile);
              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                console.log(_context4.t0);
              case 10:
              case "end":
                return _context4.stop();
            }
          }, _callee4, this, [[0, 7]]);
        }));
        function requestTileGeometry(_x11, _x12, _x13) {
          return _requestTileGeometry.apply(this, arguments);
        }
        return requestTileGeometry;
      }()
    }, {
      key: "getLevelMaximumGeometricError",
      value: function getLevelMaximumGeometricError(level) {
        var levelZeroMaximumGeometricError = cesium.TerrainProvider.getEstimatedLevelZeroGeometricErrorForAHeightmap(this.tilingScheme.ellipsoid, 65, this.tilingScheme.getNumberOfXTilesAtLevel(0));
        return levelZeroMaximumGeometricError / (1 << level);
      }
    }, {
      key: "getTileDataAvailable",
      value: function getTileDataAvailable(x, y, z) {
        return z <= 14;
      }
    }]);
  }();

  return GsiTerrainProvider;

})(Cesium);
//# sourceMappingURL=GsiTerrainProvider.js.map
