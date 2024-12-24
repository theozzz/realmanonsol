import {F as g, I as it, _ as at} from "./chunk-PUHG2OFZ.mjs";
var ie, E, Z, Et = Object.create, gt = Object.defineProperty, Lt = Object.getOwnPropertyDescriptor, mt = Object.getOwnPropertyNames, Ct = Object.getPrototypeOf, Mt = Object.prototype.hasOwnProperty, oe = (e, t) => function() {
    return t || (0,
        e[mt(e)[0]])((t = {
        exports: {}
    }).exports, t),
        t.exports
}
    , Ft = (e, t, r, a) => {
    if (t && typeof t == "object" || typeof t == "function")
        for (let f of mt(t))
            Mt.call(e, f) || f === r || gt(e, f, {
                get: () => t[f],
                enumerable: !(a = Lt(t, f)) || a.enumerable
            });
    return e
}
    , tt = (e, t, r) => (r = e != null ? Et(Ct(e)) : {},
    Ft(!t && e && e.__esModule ? r : gt(r, "default", {
        value: e,
        enumerable: !0
    }), e)), Pt = oe({
    "../../../node_modules/dataloader/index.js"(e, t) {
        var r, a = function() {
                function u(n, o) {
                    if (typeof n != "function")
                        throw TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: " + n + ".");
                    this._batchLoadFn = n,
                        this._maxBatchSize = function(l) {
                            if (!(!l || l.batch !== !1))
                                return 1;
                            var h = l && l.maxBatchSize;
                            if (h === void 0)
                                return 1 / 0;
                            if (typeof h != "number" || h < 1)
                                throw TypeError("maxBatchSize must be a positive number: " + h);
                            return h
                        }(o),
                        this._batchScheduleFn = function(l) {
                            var h = l && l.batchScheduleFn;
                            if (h === void 0)
                                return f;
                            if (typeof h != "function")
                                throw TypeError("batchScheduleFn must be a function: " + h);
                            return h
                        }(o),
                        this._cacheKeyFn = function(l) {
                            var h = l && l.cacheKeyFn;
                            if (h === void 0)
                                return function(v) {
                                    return v
                                }
                                    ;
                            if (typeof h != "function")
                                throw TypeError("cacheKeyFn must be a function: " + h);
                            return h
                        }(o),
                        this._cacheMap = function(l) {
                            if (!(!l || l.cache !== !1))
                                return null;
                            var h = l && l.cacheMap;
                            if (h === void 0)
                                return new Map;
                            if (h !== null) {
                                var v = ["get", "set", "delete", "clear"].filter(function(p) {
                                    return h && typeof h[p] != "function"
                                });
                                if (v.length !== 0)
                                    throw TypeError("Custom cacheMap missing methods: " + v.join(", "))
                            }
                            return h
                        }(o),
                        this._batch = null,
                        this.name = o && o.name ? o.name : null
                }
                var i = u.prototype;
                return i.load = function(n) {
                    if (n == null)
                        throw TypeError("The loader.load() function must be called with a value, but got: " + String(n) + ".");
                    var o = function(b) {
                        var w = b._batch;
                        if (w !== null && !w.hasDispatched && w.keys.length < b._maxBatchSize)
                            return w;
                        var I = {
                            hasDispatched: !1,
                            keys: [],
                            callbacks: []
                        };
                        return b._batch = I,
                            b._batchScheduleFn(function() {
                                (function(T, _) {
                                        var m;
                                        if (_.hasDispatched = !0,
                                        _.keys.length === 0) {
                                            c(_);
                                            return
                                        }
                                        try {
                                            m = T._batchLoadFn(_.keys)
                                        } catch (x) {
                                            return s(T, _, TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: " + String(x) + "."))
                                        }
                                        if (!m || typeof m.then != "function")
                                            return s(T, _, TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: " + String(m) + "."));
                                        m.then(function(x) {
                                            if (!y(x))
                                                throw TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: " + String(x) + ".");
                                            if (x.length !== _.keys.length)
                                                throw TypeError(`DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` + String(_.keys) + `

Values:
` + String(x));
                                            c(_);
                                            for (var U = 0; U < _.callbacks.length; U++) {
                                                var k = x[U];
                                                k instanceof Error ? _.callbacks[U].reject(k) : _.callbacks[U].resolve(k)
                                            }
                                        }).catch(function(x) {
                                            s(T, _, x)
                                        })
                                    }
                                )(b, I)
                            }),
                            I
                    }(this)
                        , l = this._cacheMap
                        , h = this._cacheKeyFn(n);
                    if (l) {
                        var v = l.get(h);
                        if (v) {
                            var p = o.cacheHits || (o.cacheHits = []);
                            return new Promise(function(b) {
                                    p.push(function() {
                                        b(v)
                                    })
                                }
                            )
                        }
                    }
                    o.keys.push(n);
                    var d = new Promise(function(b, w) {
                            o.callbacks.push({
                                resolve: b,
                                reject: w
                            })
                        }
                    );
                    return l && l.set(h, d),
                        d
                }
                    ,
                    i.loadMany = function(n) {
                        if (!y(n))
                            throw TypeError("The loader.loadMany() function must be called with Array<key> but got: " + n + ".");
                        for (var o = [], l = 0; l < n.length; l++)
                            o.push(this.load(n[l]).catch(function(h) {
                                return h
                            }));
                        return Promise.all(o)
                    }
                    ,
                    i.clear = function(n) {
                        var o = this._cacheMap;
                        if (o) {
                            var l = this._cacheKeyFn(n);
                            o.delete(l)
                        }
                        return this
                    }
                    ,
                    i.clearAll = function() {
                        var n = this._cacheMap;
                        return n && n.clear(),
                            this
                    }
                    ,
                    i.prime = function(n, o) {
                        var l = this._cacheMap;
                        if (l) {
                            var h, v = this._cacheKeyFn(n);
                            l.get(v) === void 0 && (o instanceof Error ? (h = Promise.reject(o)).catch(function() {}) : h = Promise.resolve(o),
                                l.set(v, h))
                        }
                        return this
                    }
                    ,
                    u
            }(), f = typeof process == "object" && typeof process.nextTick == "function" ? function(u) {
                    r || (r = Promise.resolve()),
                        r.then(function() {
                            process.nextTick(u)
                        })
                }
                : typeof setImmediate == "function" ? function(u) {
                        setImmediate(u)
                    }
                    : function(u) {
                        setTimeout(u)
                    }
        ;
        function s(u, i, n) {
            c(i);
            for (var o = 0; o < i.keys.length; o++)
                u.clear(i.keys[o]),
                    i.callbacks[o].reject(n)
        }
        function c(u) {
            if (u.cacheHits)
                for (var i = 0; i < u.cacheHits.length; i++)
                    u.cacheHits[i]()
        }
        function y(u) {
            return typeof u == "object" && u !== null && typeof u.length == "number" && (u.length === 0 || u.length > 0 && Object.prototype.hasOwnProperty.call(u, u.length - 1))
        }
        t.exports = a
    }
}), Nt = oe({
    "../../../node_modules/splaytree/dist/splay.js"(e, t) {
        var r;
        r = function() {
            var a = function(u, i) {
                this.next = null,
                    this.key = u,
                    this.data = i,
                    this.left = null,
                    this.right = null
            };
            function f(u, i) {
                return u > i ? 1 : u < i ? -1 : 0
            }
            function s(u, i, n) {
                for (var o = new a(null,null), l = o, h = o; ; ) {
                    var v = n(u, i.key);
                    if (v < 0) {
                        if (i.left === null)
                            break;
                        if (0 > n(u, i.left.key)) {
                            var p = i.left;
                            if (i.left = p.right,
                                p.right = i,
                            (i = p).left === null)
                                break
                        }
                        h.left = i,
                            h = i,
                            i = i.left
                    } else if (v > 0) {
                        if (i.right === null)
                            break;
                        if (n(u, i.right.key) > 0) {
                            var p = i.right;
                            if (i.right = p.left,
                                p.left = i,
                            (i = p).right === null)
                                break
                        }
                        l.right = i,
                            l = i,
                            i = i.right
                    } else
                        break
                }
                return l.right = i.left,
                    h.left = i.right,
                    i.left = o.right,
                    i.right = o.left,
                    i
            }
            function c(u, i, n, o) {
                var l = new a(u,i);
                if (n === null)
                    return l.left = l.right = null,
                        l;
                n = s(u, n, o);
                var h = o(u, n.key);
                return h < 0 ? (l.left = n.left,
                    l.right = n,
                    n.left = null) : h >= 0 && (l.right = n.right,
                    l.left = n,
                    n.right = null),
                    l
            }
            function y(u, i, n) {
                var o = null
                    , l = null;
                if (i) {
                    i = s(u, i, n);
                    var h = n(i.key, u);
                    h === 0 ? (o = i.left,
                        l = i.right) : h < 0 ? (l = i.right,
                        i.right = null,
                        o = i) : (o = i.left,
                        i.left = null,
                        l = i)
                }
                return {
                    left: o,
                    right: l
                }
            }
            return function() {
                function u(i) {
                    i === void 0 && (i = f),
                        this._root = null,
                        this._size = 0,
                        this._comparator = i
                }
                return u.prototype.insert = function(i, n) {
                    return this._size++,
                        this._root = c(i, n, this._root, this._comparator)
                }
                    ,
                    u.prototype.add = function(i, n) {
                        var o = new a(i,n);
                        this._root === null && (o.left = o.right = null,
                            this._size++,
                            this._root = o);
                        var l = this._comparator
                            , h = s(i, this._root, l)
                            , v = l(i, h.key);
                        return v === 0 ? this._root = h : (v < 0 ? (o.left = h.left,
                            o.right = h,
                            h.left = null) : v > 0 && (o.right = h.right,
                            o.left = h,
                            h.right = null),
                            this._size++,
                            this._root = o),
                            this._root
                    }
                    ,
                    u.prototype.remove = function(i) {
                        this._root = this._remove(i, this._root, this._comparator)
                    }
                    ,
                    u.prototype._remove = function(i, n, o) {
                        var l;
                        return n === null ? null : (n = s(i, n, o),
                            o(i, n.key) === 0 ? (n.left === null ? l = n.right : (l = s(i, n.left, o)).right = n.right,
                                this._size--,
                                l) : n)
                    }
                    ,
                    u.prototype.pop = function() {
                        var i = this._root;
                        if (i) {
                            for (; i.left; )
                                i = i.left;
                            return this._root = s(i.key, this._root, this._comparator),
                                this._root = this._remove(i.key, this._root, this._comparator),
                                {
                                    key: i.key,
                                    data: i.data
                                }
                        }
                        return null
                    }
                    ,
                    u.prototype.findStatic = function(i) {
                        for (var n = this._root, o = this._comparator; n; ) {
                            var l = o(i, n.key);
                            if (l === 0)
                                return n;
                            n = l < 0 ? n.left : n.right
                        }
                        return null
                    }
                    ,
                    u.prototype.find = function(i) {
                        return this._root && (this._root = s(i, this._root, this._comparator),
                        this._comparator(i, this._root.key) !== 0) ? null : this._root
                    }
                    ,
                    u.prototype.contains = function(i) {
                        for (var n = this._root, o = this._comparator; n; ) {
                            var l = o(i, n.key);
                            if (l === 0)
                                return !0;
                            n = l < 0 ? n.left : n.right
                        }
                        return !1
                    }
                    ,
                    u.prototype.forEach = function(i, n) {
                        for (var o = this._root, l = [], h = !1; !h; )
                            o !== null ? (l.push(o),
                                o = o.left) : l.length !== 0 ? (o = l.pop(),
                                i.call(n, o),
                                o = o.right) : h = !0;
                        return this
                    }
                    ,
                    u.prototype.range = function(i, n, o, l) {
                        for (var h = [], v = this._comparator, p = this._root; h.length !== 0 || p; )
                            if (p)
                                h.push(p),
                                    p = p.left;
                            else {
                                if (v((p = h.pop()).key, n) > 0)
                                    break;
                                if (v(p.key, i) >= 0 && o.call(l, p))
                                    return this;
                                p = p.right
                            }
                        return this
                    }
                    ,
                    u.prototype.keys = function() {
                        var i = [];
                        return this.forEach(function(n) {
                            var o = n.key;
                            return i.push(o)
                        }),
                            i
                    }
                    ,
                    u.prototype.values = function() {
                        var i = [];
                        return this.forEach(function(n) {
                            var o = n.data;
                            return i.push(o)
                        }),
                            i
                    }
                    ,
                    u.prototype.min = function() {
                        return this._root ? this.minNode(this._root).key : null
                    }
                    ,
                    u.prototype.max = function() {
                        return this._root ? this.maxNode(this._root).key : null
                    }
                    ,
                    u.prototype.minNode = function(i) {
                        if (i === void 0 && (i = this._root),
                            i)
                            for (; i.left; )
                                i = i.left;
                        return i
                    }
                    ,
                    u.prototype.maxNode = function(i) {
                        if (i === void 0 && (i = this._root),
                            i)
                            for (; i.right; )
                                i = i.right;
                        return i
                    }
                    ,
                    u.prototype.at = function(i) {
                        for (var n = this._root, o = !1, l = 0, h = []; !o; )
                            if (n)
                                h.push(n),
                                    n = n.left;
                            else if (h.length > 0) {
                                if (n = h.pop(),
                                l === i)
                                    return n;
                                l++,
                                    n = n.right
                            } else
                                o = !0;
                        return null
                    }
                    ,
                    u.prototype.next = function(i) {
                        var n = this._root
                            , o = null;
                        if (i.right) {
                            for (o = i.right; o.left; )
                                o = o.left;
                            return o
                        }
                        for (var l = this._comparator; n; ) {
                            var h = l(i.key, n.key);
                            if (h === 0)
                                break;
                            h < 0 ? (o = n,
                                n = n.left) : n = n.right
                        }
                        return o
                    }
                    ,
                    u.prototype.prev = function(i) {
                        var n = this._root
                            , o = null;
                        if (i.left !== null) {
                            for (o = i.left; o.right; )
                                o = o.right;
                            return o
                        }
                        for (var l = this._comparator; n; ) {
                            var h = l(i.key, n.key);
                            if (h === 0)
                                break;
                            h < 0 ? n = n.left : (o = n,
                                n = n.right)
                        }
                        return o
                    }
                    ,
                    u.prototype.clear = function() {
                        return this._root = null,
                            this._size = 0,
                            this
                    }
                    ,
                    u.prototype.toList = function() {
                        return function(i) {
                            for (var n = i, o = [], l = !1, h = new a(null,null), v = h; !l; )
                                n ? (o.push(n),
                                    n = n.left) : o.length > 0 ? n = (n = v = v.next = o.pop()).right : l = !0;
                            return v.next = null,
                                h.next
                        }(this._root)
                    }
                    ,
                    u.prototype.load = function(i, n, o) {
                        n === void 0 && (n = []),
                        o === void 0 && (o = !1);
                        var l = i.length
                            , h = this._comparator;
                        if (o && function p(d, b, w, I, T) {
                            if (!(w >= I)) {
                                for (var _ = d[w + I >> 1], m = w - 1, x = I + 1; ; ) {
                                    do
                                        m++;
                                    while (0 > T(d[m], _));
                                    do
                                        x--;
                                    while (T(d[x], _) > 0);
                                    if (m >= x)
                                        break;
                                    var U = d[m];
                                    d[m] = d[x],
                                        d[x] = U,
                                        U = b[m],
                                        b[m] = b[x],
                                        b[x] = U
                                }
                                p(d, b, w, x, T),
                                    p(d, b, x + 1, I, T)
                            }
                        }(i, n, 0, l - 1, h),
                        this._root === null)
                            this._root = function p(d, b, w, I) {
                                var T = I - w;
                                if (T > 0) {
                                    var _ = w + Math.floor(T / 2)
                                        , m = d[_]
                                        , x = b[_]
                                        , U = new a(m,x);
                                    return U.left = p(d, b, w, _),
                                        U.right = p(d, b, _ + 1, I),
                                        U
                                }
                                return null
                            }(i, n, 0, l),
                                this._size = l;
                        else {
                            var v = function(p, d, b) {
                                for (var w = new a(null,null), I = w, T = p, _ = d; T !== null && _ !== null; )
                                    0 > b(T.key, _.key) ? (I.next = T,
                                        T = T.next) : (I.next = _,
                                        _ = _.next),
                                        I = I.next;
                                return T !== null ? I.next = T : _ !== null && (I.next = _),
                                    w.next
                            }(this.toList(), function(p, d) {
                                for (var b = new a(null,null), w = b, I = 0; I < p.length; I++)
                                    w = w.next = new a(p[I],d[I]);
                                return w.next = null,
                                    b.next
                            }(i, n), h);
                            l = this._size + l,
                                this._root = function p(d, b, w) {
                                    var I = w - b;
                                    if (I > 0) {
                                        var T = b + Math.floor(I / 2)
                                            , _ = p(d, b, T)
                                            , m = d.head;
                                        return m.left = _,
                                            d.head = d.head.next,
                                            m.right = p(d, T + 1, w),
                                            m
                                    }
                                    return null
                                }({
                                    head: v
                                }, 0, l)
                        }
                        return this
                    }
                    ,
                    u.prototype.isEmpty = function() {
                        return this._root === null
                    }
                    ,
                    Object.defineProperty(u.prototype, "size", {
                        get: function() {
                            return this._size
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    Object.defineProperty(u.prototype, "root", {
                        get: function() {
                            return this._root
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    u.prototype.toString = function(i) {
                        i === void 0 && (i = function(o) {
                                return String(o.key)
                            }
                        );
                        var n = [];
                        return function o(l, h, v, p, d) {
                            if (l) {
                                p("" + h + (v ? "\u2514\u2500\u2500 " : "\u251C\u2500\u2500 ") + d(l) + `
`);
                                var b = h + (v ? "    " : "\u2502   ");
                                l.left && o(l.left, b, !1, p, d),
                                l.right && o(l.right, b, !0, p, d)
                            }
                        }(this._root, "", !0, function(o) {
                            return n.push(o)
                        }, i),
                            n.join("")
                    }
                    ,
                    u.prototype.update = function(i, n, o) {
                        var l, h, v = this._comparator, p = y(i, this._root, v), d = p.left, b = p.right;
                        0 > v(i, n) ? b = c(n, o, b, v) : d = c(n, o, d, v),
                            this._root = (l = d,
                                (h = b) === null ? l : (l === null || ((h = s(l.key, h, v)).left = l),
                                    h))
                    }
                    ,
                    u.prototype.split = function(i) {
                        return y(i, this._root, this._comparator)
                    }
                    ,
                    u.prototype[Symbol.iterator] = function() {
                        var i, n, o;
                        return function(l, h) {
                            var v, p, d, b, w = {
                                label: 0,
                                sent: function() {
                                    if (1 & d[0])
                                        throw d[1];
                                    return d[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return b = {
                                next: I(0),
                                throw: I(1),
                                return: I(2)
                            },
                            typeof Symbol == "function" && (b[Symbol.iterator] = function() {
                                    return this
                                }
                            ),
                                b;
                            function I(T) {
                                return function(_) {
                                    return function(m) {
                                        if (v)
                                            throw TypeError("Generator is already executing.");
                                        for (; w; )
                                            try {
                                                if (v = 1,
                                                p && (d = 2 & m[0] ? p.return : m[0] ? p.throw || ((d = p.return) && d.call(p),
                                                    0) : p.next) && !(d = d.call(p, m[1])).done)
                                                    return d;
                                                switch (p = 0,
                                                d && (m = [2 & m[0], d.value]),
                                                    m[0]) {
                                                    case 0:
                                                    case 1:
                                                        d = m;
                                                        break;
                                                    case 4:
                                                        return w.label++,
                                                            {
                                                                value: m[1],
                                                                done: !1
                                                            };
                                                    case 5:
                                                        w.label++,
                                                            p = m[1],
                                                            m = [0];
                                                        continue;
                                                    case 7:
                                                        m = w.ops.pop(),
                                                            w.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!(d = (d = w.trys).length > 0 && d[d.length - 1]) && (m[0] === 6 || m[0] === 2)) {
                                                            w = 0;
                                                            continue
                                                        }
                                                        if (m[0] === 3 && (!d || m[1] > d[0] && m[1] < d[3])) {
                                                            w.label = m[1];
                                                            break
                                                        }
                                                        if (m[0] === 6 && w.label < d[1]) {
                                                            w.label = d[1],
                                                                d = m;
                                                            break
                                                        }
                                                        if (d && w.label < d[2]) {
                                                            w.label = d[2],
                                                                w.ops.push(m);
                                                            break
                                                        }
                                                        d[2] && w.ops.pop(),
                                                            w.trys.pop();
                                                        continue
                                                }
                                                m = h.call(l, w)
                                            } catch (x) {
                                                m = [6, x],
                                                    p = 0
                                            } finally {
                                                v = d = 0
                                            }
                                        if (5 & m[0])
                                            throw m[1];
                                        return {
                                            value: m[0] ? m[1] : void 0,
                                            done: !0
                                        }
                                    }([T, _])
                                }
                            }
                        }(this, function(l) {
                            switch (l.label) {
                                case 0:
                                    i = this._root,
                                        n = [],
                                        o = !1,
                                        l.label = 1;
                                case 1:
                                    return o ? [3, 6] : i === null ? [3, 2] : (n.push(i),
                                        i = i.left,
                                        [3, 5]);
                                case 2:
                                    return n.length === 0 ? [3, 4] : [4, i = n.pop()];
                                case 3:
                                    return l.sent(),
                                        i = i.right,
                                        [3, 5];
                                case 4:
                                    o = !0,
                                        l.label = 5;
                                case 5:
                                    return [3, 1];
                                case 6:
                                    return [2]
                            }
                        })
                    }
                    ,
                    u
            }()
        }
            ,
            typeof e == "object" && t !== void 0 ? t.exports = r() : typeof define == "function" && define.amd ? define(r) : e.SplayTree = r()
    }
}), ke = oe({
    "../../../node_modules/whatwg-mimetype/lib/utils.js"(e) {
        e.removeLeadingAndTrailingHTTPWhitespace = t => t.replace(/^[ \t\n\r]+/u, "").replace(/[ \t\n\r]+$/u, ""),
            e.removeTrailingHTTPWhitespace = t => t.replace(/[ \t\n\r]+$/u, ""),
            e.isHTTPWhitespaceChar = t => t === " " || t === "	" || t === `
` || t === "\r",
            e.solelyContainsHTTPTokenCodePoints = t => /^[-!#$%&'*+.^_`|~A-Za-z0-9]*$/u.test(t),
            e.soleyContainsHTTPQuotedStringTokenCodePoints = t => /^[\t\u0020-\u007E\u0080-\u00FF]*$/u.test(t),
            e.asciiLowercase = t => t.replace(/[A-Z]/ug, r => r.toLowerCase()),
            e.collectAnHTTPQuotedString = (t, r) => {
                let a = "";
                for (r++; ; ) {
                    for (; r < t.length && t[r] !== '"' && t[r] !== "\\"; )
                        a += t[r],
                            ++r;
                    if (r >= t.length)
                        break;
                    let f = t[r];
                    if (++r,
                    f === "\\") {
                        if (r >= t.length) {
                            a += "\\";
                            break
                        }
                        a += t[r],
                            ++r
                    } else
                        break
                }
                return [a, r]
            }
    }
}), At = oe({
    "../../../node_modules/whatwg-mimetype/lib/mime-type-parameters.js"(e, t) {
        var {asciiLowercase: r, solelyContainsHTTPTokenCodePoints: a, soleyContainsHTTPQuotedStringTokenCodePoints: f} = ke();
        t.exports = class {
            get size() {
                return this._map.size
            }
            get(s) {
                return s = r(String(s)),
                    this._map.get(s)
            }
            has(s) {
                return s = r(String(s)),
                    this._map.has(s)
            }
            set(s, c) {
                if (s = r(String(s)),
                    c = String(c),
                    !a(s))
                    throw Error(`Invalid MIME type parameter name "${s}": only HTTP token code points are valid.`);
                if (!f(c))
                    throw Error(`Invalid MIME type parameter value "${c}": only HTTP quoted-string token code points are valid.`);
                return this._map.set(s, c)
            }
            clear() {
                this._map.clear()
            }
            delete(s) {
                return s = r(String(s)),
                    this._map.delete(s)
            }
            forEach(s, c) {
                this._map.forEach(s, c)
            }
            keys() {
                return this._map.keys()
            }
            values() {
                return this._map.values()
            }
            entries() {
                return this._map.entries()
            }
            [Symbol.iterator]() {
                return this._map[Symbol.iterator]()
            }
            constructor(s) {
                this._map = s
            }
        }
    }
}), Dt = oe({
    "../../../node_modules/whatwg-mimetype/lib/parser.js"(e, t) {
        var {removeLeadingAndTrailingHTTPWhitespace: r, removeTrailingHTTPWhitespace: a, isHTTPWhitespaceChar: f, solelyContainsHTTPTokenCodePoints: s, soleyContainsHTTPQuotedStringTokenCodePoints: c, asciiLowercase: y, collectAnHTTPQuotedString: u} = ke();
        t.exports = i => {
            i = r(i);
            let n = 0
                , o = "";
            for (; n < i.length && i[n] !== "/"; )
                o += i[n],
                    ++n;
            if (o.length === 0 || !s(o) || n >= i.length)
                return null;
            ++n;
            let l = "";
            for (; n < i.length && i[n] !== ";"; )
                l += i[n],
                    ++n;
            if ((l = a(l)).length === 0 || !s(l))
                return null;
            let h = {
                type: y(o),
                subtype: y(l),
                parameters: new Map
            };
            for (; n < i.length; ) {
                for (++n; f(i[n]); )
                    ++n;
                let v = "";
                for (; n < i.length && i[n] !== ";" && i[n] !== "="; )
                    v += i[n],
                        ++n;
                if (v = y(v),
                n < i.length) {
                    if (i[n] === ";")
                        continue;
                    ++n
                }
                let p = null;
                if (i[n] === '"')
                    for ([p,n] = u(i, n); n < i.length && i[n] !== ";"; )
                        ++n;
                else {
                    for (p = ""; n < i.length && i[n] !== ";"; )
                        p += i[n],
                            ++n;
                    if ((p = a(p)) === "")
                        continue
                }
                v.length > 0 && s(v) && c(p) && !h.parameters.has(v) && h.parameters.set(v, p)
            }
            return h
        }
    }
}), Ot = oe({
    "../../../node_modules/whatwg-mimetype/lib/serializer.js"(e, t) {
        var {solelyContainsHTTPTokenCodePoints: r} = ke();
        t.exports = a => {
            let f = `${a.type}/${a.subtype}`;
            if (a.parameters.size === 0)
                return f;
            for (let[s,c] of a.parameters)
                f += ";" + s + "=",
                r(c) && c.length !== 0 || (c = c.replace(/(["\\])/ug, "\\$1"),
                    c = `"${c}"`),
                    f += c;
            return f
        }
    }
}), jt = oe({
    "../../../node_modules/whatwg-mimetype/lib/mime-type.js"(e, t) {
        var r = At()
            , a = Dt()
            , f = Ot()
            , {asciiLowercase: s, solelyContainsHTTPTokenCodePoints: c} = ke();
        t.exports = class {
            static parse(y) {
                try {
                    return new this(y)
                } catch {
                    return null
                }
            }
            get essence() {
                return `${this.type}/${this.subtype}`
            }
            get type() {
                return this._type
            }
            set type(y) {
                if ((y = s(String(y))).length === 0)
                    throw Error("Invalid type: must be a non-empty string");
                if (!c(y))
                    throw Error(`Invalid type ${y}: must contain only HTTP token code points`);
                this._type = y
            }
            get subtype() {
                return this._subtype
            }
            set subtype(y) {
                if ((y = s(String(y))).length === 0)
                    throw Error("Invalid subtype: must be a non-empty string");
                if (!c(y))
                    throw Error(`Invalid subtype ${y}: must contain only HTTP token code points`);
                this._subtype = y
            }
            get parameters() {
                return this._parameters
            }
            toString() {
                return f(this)
            }
            isJavaScript({prohibitParameters: y=!1}={}) {
                switch (this._type) {
                    case "text":
                        switch (this._subtype) {
                            case "ecmascript":
                            case "javascript":
                            case "javascript1.0":
                            case "javascript1.1":
                            case "javascript1.2":
                            case "javascript1.3":
                            case "javascript1.4":
                            case "javascript1.5":
                            case "jscript":
                            case "livescript":
                            case "x-ecmascript":
                            case "x-javascript":
                                return !y || this._parameters.size === 0;
                            default:
                                return !1
                        }
                    case "application":
                        switch (this._subtype) {
                            case "ecmascript":
                            case "javascript":
                            case "x-ecmascript":
                            case "x-javascript":
                                return !y || this._parameters.size === 0;
                            default:
                                return !1
                        }
                    default:
                        return !1
                }
            }
            isXML() {
                return this._subtype === "xml" && (this._type === "text" || this._type === "application") || this._subtype.endsWith("+xml")
            }
            isHTML() {
                return this._subtype === "html" && this._type === "text"
            }
            constructor(y) {
                y = String(y);
                let u = a(y);
                if (u === null)
                    throw Error(`Could not parse MIME type string "${y}"`);
                this._type = u.type,
                    this._subtype = u.subtype,
                    this._parameters = new r(u.parameters)
            }
        }
    }
}), Rt = tt(Pt());
function B(e, ...t) {
    if (!e)
        throw Error("Assertion Error" + (t.length > 0 ? ": " + t.join(" ") : ""))
}
function _e(e) {
    throw Error(`Unexpected value: ${e}`)
}
var M = {
        Uint8: 1,
        Uint16: 2,
        Uint32: 4,
        BigUint64: 8,
        Int8: 1,
        Int16: 2,
        Int32: 4,
        BigInt64: 8,
        Float32: 4,
        Float64: 8
    }
    , We = class {
        getOffset() {
            return this.offset
        }
        ensureBufferLength(e) {
            let t = this.buffer.byteLength;
            if (!(this.offset + e <= t))
                throw Error("Reading out of bounds")
        }
        readUint8() {
            let e = M.Uint8;
            this.ensureBufferLength(e);
            let t = this.view.getUint8(this.offset);
            return this.offset += e,
                t
        }
        readUint16() {
            let e = M.Uint16;
            this.ensureBufferLength(e);
            let t = this.view.getUint16(this.offset);
            return this.offset += e,
                t
        }
        readUint32() {
            let e = M.Uint32;
            this.ensureBufferLength(e);
            let t = this.view.getUint32(this.offset);
            return this.offset += e,
                t
        }
        readUint64() {
            let e = this.readBigUint64();
            return Number(e)
        }
        readBigUint64() {
            let e = M.BigUint64;
            this.ensureBufferLength(e);
            let t = this.view.getBigUint64(this.offset);
            return this.offset += e,
                t
        }
        readInt8() {
            let e = M.Int8;
            this.ensureBufferLength(e);
            let t = this.view.getInt8(this.offset);
            return this.offset += e,
                t
        }
        readInt16() {
            let e = M.Int16;
            this.ensureBufferLength(e);
            let t = this.view.getInt16(this.offset);
            return this.offset += e,
                t
        }
        readInt32() {
            let e = M.Int32;
            this.ensureBufferLength(e);
            let t = this.view.getInt32(this.offset);
            return this.offset += e,
                t
        }
        readInt64() {
            let e = this.readBigInt64();
            return Number(e)
        }
        readBigInt64() {
            let e = M.BigInt64;
            this.ensureBufferLength(e);
            let t = this.view.getBigInt64(this.offset);
            return this.offset += e,
                t
        }
        readFloat32() {
            let e = M.Float32;
            this.ensureBufferLength(e);
            let t = this.view.getFloat32(this.offset);
            return this.offset += e,
                t
        }
        readFloat64() {
            let e = M.Float64;
            this.ensureBufferLength(e);
            let t = this.view.getFloat64(this.offset);
            return this.offset += e,
                t
        }
        readBuffer(e) {
            let t = this.offset
                , r = t + e
                , a = this.buffer.slice(t, r);
            return this.offset = r,
                a
        }
        readString() {
            let e = this.readUint32()
                , t = this.readBuffer(e);
            return this.decoder.decode(t)
        }
        readJson() {
            let e = this.readString();
            return JSON.parse(e)
        }
        constructor(e) {
            this.buffer = e,
                this.offset = 0,
                this.view = new DataView(this.buffer),
                this.decoder = new TextDecoder
        }
    }
;
function Be(e) {
    return Number.isFinite(e)
}
function re(e) {
    return e === void 0
}
function Ie(e) {
    return e === null
}
var N = Uint8Array
    , H = Uint16Array
    , rt = Int32Array
    , Te = new N([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0])
    , xe = new N([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0])
    , Ge = new N([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
    , vt = function(e, t) {
    for (var r = new H(31), a = 0; a < 31; ++a)
        r[a] = t += 1 << e[a - 1];
    for (var f = new rt(r[30]), a = 1; a < 30; ++a)
        for (var s = r[a]; s < r[a + 1]; ++s)
            f[s] = s - r[a] << 5 | a;
    return {
        b: r,
        r: f
    }
}
    , wt = vt(Te, 2)
    , bt = wt.b
    , Qe = wt.r;
bt[28] = 258,
    Qe[258] = 28;
var _t = vt(xe, 0)
    , qt = _t.b
    , ot = _t.r
    , Ke = new H(32768);
for (E = 0; E < 32768; ++E)
    ie = (61680 & (ie = (52428 & (ie = (43690 & E) >> 1 | (21845 & E) << 1)) >> 2 | (13107 & ie) << 2)) >> 4 | (3855 & ie) << 4,
        Ke[E] = ((65280 & ie) >> 8 | (255 & ie) << 8) >> 1;
var Y = function(e, t, r) {
    for (var a, f = e.length, s = 0, c = new H(t); s < f; ++s)
        e[s] && ++c[e[s] - 1];
    var y = new H(t);
    for (s = 1; s < t; ++s)
        y[s] = y[s - 1] + c[s - 1] << 1;
    if (r) {
        a = new H(1 << t);
        var u = 15 - t;
        for (s = 0; s < f; ++s)
            if (e[s])
                for (var i = s << 4 | e[s], n = t - e[s], o = y[e[s] - 1]++ << n, l = o | (1 << n) - 1; o <= l; ++o)
                    a[Ke[o] >> u] = i
    } else
        for (s = 0,
                 a = new H(f); s < f; ++s)
            e[s] && (a[s] = Ke[y[e[s] - 1]++] >> 15 - e[s]);
    return a
}
    , ne = new N(288);
for (E = 0; E < 144; ++E)
    ne[E] = 8;
for (E = 144; E < 256; ++E)
    ne[E] = 9;
for (E = 256; E < 280; ++E)
    ne[E] = 7;
for (E = 280; E < 288; ++E)
    ne[E] = 8;
var me = new N(32);
for (E = 0; E < 32; ++E)
    me[E] = 5;
var Ht = Y(ne, 9, 0)
    , zt = Y(ne, 9, 1)
    , Vt = Y(me, 5, 0)
    , $t = Y(me, 5, 1)
    , Ee = function(e) {
    for (var t = e[0], r = 1; r < e.length; ++r)
        e[r] > t && (t = e[r]);
    return t
}
    , J = function(e, t, r) {
    var a = t / 8 | 0;
    return (e[a] | e[a + 1] << 8) >> (7 & t) & r
}
    , Le = function(e, t) {
    var r = t / 8 | 0;
    return (e[r] | e[r + 1] << 8 | e[r + 2] << 16) >> (7 & t)
}
    , nt = function(e) {
    return (e + 7) / 8 | 0
}
    , It = function(e, t, r) {
    return (t == null || t < 0) && (t = 0),
    (r == null || r > e.length) && (r = e.length),
        new N(e.subarray(t, r))
}
    , Jt = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"]
    , te = function(e, t, r) {
    var a = Error(t || Jt[e]);
    if (a.code = e,
    Error.captureStackTrace && Error.captureStackTrace(a, te),
        !r)
        throw a;
    return a
}
    , Zt = function(e, t, r, a) {
    var f = e.length
        , s = a ? a.length : 0;
    if (!f || t.f && !t.l)
        return r || new N(0);
    var c = !r
        , y = c || t.i != 2
        , u = t.i;
    c && (r = new N(3 * f));
    var i = function(he) {
        var ce = r.length;
        if (he > ce) {
            var ue = new N(Math.max(2 * ce, he));
            ue.set(r),
                r = ue
        }
    }
        , n = t.f || 0
        , o = t.p || 0
        , l = t.b || 0
        , h = t.l
        , v = t.d
        , p = t.m
        , d = t.n
        , b = 8 * f;
    do {
        if (!h) {
            n = J(e, o, 1);
            var w = J(e, o + 1, 3);
            if (o += 3,
                w)
                if (w == 1)
                    h = zt,
                        v = $t,
                        p = 9,
                        d = 5;
                else if (w == 2) {
                    var I = J(e, o, 31) + 257
                        , T = J(e, o + 10, 15) + 4
                        , _ = I + J(e, o + 5, 31) + 1;
                    o += 14;
                    for (var m = new N(_), x = new N(19), U = 0; U < T; ++U)
                        x[Ge[U]] = J(e, o + 3 * U, 7);
                    o += 3 * T;
                    for (var k = Ee(x), $ = (1 << k) - 1, O = Y(x, k, 1), U = 0; U < _; ) {
                        var S = O[J(e, o, $)];
                        o += 15 & S;
                        var P = S >> 4;
                        if (P < 16)
                            m[U++] = P;
                        else {
                            var F = 0
                                , j = 0;
                            for (P == 16 ? (j = 3 + J(e, o, 3),
                                o += 2,
                                F = m[U - 1]) : P == 17 ? (j = 3 + J(e, o, 7),
                                o += 3) : P == 18 && (j = 11 + J(e, o, 127),
                                o += 7); j--; )
                                m[U++] = F
                        }
                    }
                    var A = m.subarray(0, I)
                        , L = m.subarray(I);
                    p = Ee(A),
                        d = Ee(L),
                        h = Y(A, p, 1),
                        v = Y(L, d, 1)
                } else
                    te(1);
            else {
                var P = nt(o) + 4
                    , D = e[P - 4] | e[P - 3] << 8
                    , z = P + D;
                if (z > f) {
                    u && te(0);
                    break
                }
                y && i(l + D),
                    r.set(e.subarray(P, z), l),
                    t.b = l += D,
                    t.p = o = 8 * z,
                    t.f = n;
                continue
            }
            if (o > b) {
                u && te(0);
                break
            }
        }
        y && i(l + 131072);
        for (var fe = (1 << p) - 1, V = (1 << d) - 1, X = o; ; X = o) {
            var F = h[Le(e, o) & fe]
                , R = F >> 4;
            if ((o += 15 & F) > b) {
                u && te(0);
                break
            }
            if (F || te(2),
            R < 256)
                r[l++] = R;
            else if (R == 256) {
                X = o,
                    h = null;
                break
            } else {
                var q = R - 254;
                if (R > 264) {
                    var U = R - 257
                        , C = Te[U];
                    q = J(e, o, (1 << C) - 1) + bt[U],
                        o += C
                }
                var W = v[Le(e, o) & V]
                    , se = W >> 4;
                W || te(3),
                    o += 15 & W;
                var L = qt[se];
                if (se > 3) {
                    var C = xe[se];
                    L += Le(e, o) & (1 << C) - 1,
                        o += C
                }
                if (o > b) {
                    u && te(0);
                    break
                }
                y && i(l + 131072);
                var le = l + q;
                if (l < L) {
                    var ve = s - L
                        , we = Math.min(L, le);
                    for (ve + l < 0 && te(3); l < we; ++l)
                        r[l] = a[ve + l]
                }
                for (; l < le; ++l)
                    r[l] = r[l - L]
            }
        }
        t.l = h,
            t.p = X,
            t.b = l,
            t.f = n,
        h && (n = 1,
            t.m = p,
            t.d = v,
            t.n = d)
    } while (!n);
    return l != r.length && c ? It(r, 0, l) : r.subarray(0, l)
}
    , ee = function(e, t, r) {
    r <<= 7 & t;
    var a = t / 8 | 0;
    e[a] |= r,
        e[a + 1] |= r >> 8
}
    , pe = function(e, t, r) {
    r <<= 7 & t;
    var a = t / 8 | 0;
    e[a] |= r,
        e[a + 1] |= r >> 8,
        e[a + 2] |= r >> 16
}
    , Ce = function(e, t) {
    for (var r = [], a = 0; a < e.length; ++a)
        e[a] && r.push({
            s: a,
            f: e[a]
        });
    var f = r.length
        , s = r.slice();
    if (!f)
        return {
            t: Tt,
            l: 0
        };
    if (f == 1) {
        var c = new N(r[0].s + 1);
        return c[r[0].s] = 1,
            {
                t: c,
                l: 1
            }
    }
    r.sort(function(_, m) {
        return _.f - m.f
    }),
        r.push({
            s: -1,
            f: 25001
        });
    var y = r[0]
        , u = r[1]
        , i = 0
        , n = 1
        , o = 2;
    for (r[0] = {
        s: -1,
        f: y.f + u.f,
        l: y,
        r: u
    }; n != f - 1; )
        y = r[r[i].f < r[o].f ? i++ : o++],
            u = r[i != n && r[i].f < r[o].f ? i++ : o++],
            r[n++] = {
                s: -1,
                f: y.f + u.f,
                l: y,
                r: u
            };
    for (var l = s[0].s, a = 1; a < f; ++a)
        s[a].s > l && (l = s[a].s);
    var h = new H(l + 1)
        , v = Ye(r[n - 1], h, 0);
    if (v > t) {
        var a = 0
            , p = 0
            , d = v - t
            , b = 1 << d;
        for (s.sort(function(m, x) {
            return h[x.s] - h[m.s] || m.f - x.f
        }); a < f; ++a) {
            var w = s[a].s;
            if (h[w] > t)
                p += b - (1 << v - h[w]),
                    h[w] = t;
            else
                break
        }
        for (p >>= d; p > 0; ) {
            var I = s[a].s;
            h[I] < t ? p -= 1 << t - h[I]++ - 1 : ++a
        }
        for (; a >= 0 && p; --a) {
            var T = s[a].s;
            h[T] == t && (--h[T],
                ++p)
        }
        v = t
    }
    return {
        t: new N(h),
        l: v
    }
}
    , Ye = function(e, t, r) {
    return e.s == -1 ? Math.max(Ye(e.l, t, r + 1), Ye(e.r, t, r + 1)) : t[e.s] = r
}
    , st = function(e) {
    for (var t = e.length; t && !e[--t]; )
        ;
    for (var r = new H(++t), a = 0, f = e[0], s = 1, c = function(u) {
        r[a++] = u
    }, y = 1; y <= t; ++y)
        if (e[y] == f && y != t)
            ++s;
        else {
            if (!f && s > 2) {
                for (; s > 138; s -= 138)
                    c(32754);
                s > 2 && (c(s > 10 ? s - 11 << 5 | 28690 : s - 3 << 5 | 12305),
                    s = 0)
            } else if (s > 3) {
                for (c(f),
                         --s; s > 6; s -= 6)
                    c(8304);
                s > 2 && (c(s - 3 << 5 | 8208),
                    s = 0)
            }
            for (; s--; )
                c(f);
            s = 1,
                f = e[y]
        }
    return {
        c: r.subarray(0, a),
        n: t
    }
}
    , de = function(e, t) {
    for (var r = 0, a = 0; a < t.length; ++a)
        r += e[a] * t[a];
    return r
}
    , kt = function(e, t, r) {
    var a = r.length
        , f = nt(t + 2);
    e[f] = 255 & a,
        e[f + 1] = a >> 8,
        e[f + 2] = 255 ^ e[f],
        e[f + 3] = 255 ^ e[f + 1];
    for (var s = 0; s < a; ++s)
        e[f + s + 4] = r[s];
    return (f + 4 + a) * 8
}
    , lt = function(e, t, r, a, f, s, c, y, u, i, n) {
    ee(t, n++, r),
        ++f[256];
    for (var o, l, h, v, p = Ce(f, 15), d = p.t, b = p.l, w = Ce(s, 15), I = w.t, T = w.l, _ = st(d), m = _.c, x = _.n, U = st(I), k = U.c, $ = U.n, O = new H(19), S = 0; S < m.length; ++S)
        ++O[31 & m[S]];
    for (var S = 0; S < k.length; ++S)
        ++O[31 & k[S]];
    for (var P = Ce(O, 7), F = P.t, j = P.l, A = 19; A > 4 && !F[Ge[A - 1]]; --A)
        ;
    var L = i + 5 << 3
        , D = de(f, ne) + de(s, me) + c
        , z = de(f, d) + de(s, I) + c + 14 + 3 * A + de(O, F) + 2 * O[16] + 3 * O[17] + 7 * O[18];
    if (u >= 0 && L <= D && L <= z)
        return kt(t, n, e.subarray(u, u + i));
    if (ee(t, n, 1 + (z < D)),
        n += 2,
    z < D) {
        o = Y(d, b, 0),
            l = d,
            h = Y(I, T, 0),
            v = I;
        var fe = Y(F, j, 0);
        ee(t, n, x - 257),
            ee(t, n + 5, $ - 1),
            ee(t, n + 10, A - 4),
            n += 14;
        for (var S = 0; S < A; ++S)
            ee(t, n + 3 * S, F[Ge[S]]);
        n += 3 * A;
        for (var V = [m, k], X = 0; X < 2; ++X)
            for (var R = V[X], S = 0; S < R.length; ++S) {
                var q = 31 & R[S];
                ee(t, n, fe[q]),
                    n += F[q],
                q > 15 && (ee(t, n, R[S] >> 5 & 127),
                    n += R[S] >> 12)
            }
    } else
        o = Ht,
            l = ne,
            h = Vt,
            v = me;
    for (var S = 0; S < y; ++S) {
        var C = a[S];
        if (C > 255) {
            var q = C >> 18 & 31;
            pe(t, n, o[q + 257]),
                n += l[q + 257],
            q > 7 && (ee(t, n, C >> 23 & 31),
                n += Te[q]);
            var W = 31 & C;
            pe(t, n, h[W]),
                n += v[W],
            W > 3 && (pe(t, n, C >> 5 & 8191),
                n += xe[W])
        } else
            pe(t, n, o[C]),
                n += l[C]
    }
    return pe(t, n, o[256]),
    n + l[256]
}
    , Wt = new rt([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632])
    , Tt = new N(0)
    , Gt = function(e, t, r, a, f, s) {
    var c = s.z || e.length
        , y = new N(a + c + 5 * (1 + Math.ceil(c / 7e3)) + f)
        , u = y.subarray(a, y.length - f)
        , i = s.l
        , n = 7 & (s.r || 0);
    if (t) {
        n && (u[0] = s.r >> 3);
        for (var o = Wt[t - 1], l = o >> 13, h = 8191 & o, v = (1 << r) - 1, p = s.p || new H(32768), d = s.h || new H(v + 1), b = Math.ceil(r / 3), w = 2 * b, I = function(Se) {
            return (e[Se] ^ e[Se + 1] << b ^ e[Se + 2] << w) & v
        }, T = new rt(25e3), _ = new H(288), m = new H(32), x = 0, U = 0, k = s.i || 0, $ = 0, O = s.w || 0, S = 0; k + 2 < c; ++k) {
            var P = I(k)
                , F = 32767 & k
                , j = d[P];
            if (p[F] = j,
                d[P] = F,
            O <= k) {
                var A = c - k;
                if ((x > 7e3 || $ > 24576) && (A > 423 || !i)) {
                    n = lt(e, u, 0, T, _, m, U, $, S, k - S, n),
                        $ = x = U = 0,
                        S = k;
                    for (var L = 0; L < 286; ++L)
                        _[L] = 0;
                    for (var L = 0; L < 30; ++L)
                        m[L] = 0
                }
                var D = 2
                    , z = 0
                    , fe = h
                    , V = F - j & 32767;
                if (A > 2 && P == I(k - V))
                    for (var X = Math.min(l, A) - 1, R = Math.min(32767, k), q = Math.min(258, A); V <= R && --fe && F != j; ) {
                        if (e[k + D] == e[k + D - V]) {
                            for (var C = 0; C < q && e[k + C] == e[k + C - V]; ++C)
                                ;
                            if (C > D) {
                                if (D = C,
                                    z = V,
                                C > X)
                                    break;
                                for (var W = Math.min(V, C - 2), se = 0, L = 0; L < W; ++L) {
                                    var le = k - V + L & 32767
                                        , ve = p[le]
                                        , we = le - ve & 32767;
                                    we > se && (se = we,
                                        j = le)
                                }
                            }
                        }
                        j = p[F = j],
                            V += F - j & 32767
                    }
                if (z) {
                    T[$++] = 268435456 | Qe[D] << 18 | ot[z];
                    var he = 31 & Qe[D]
                        , ce = 31 & ot[z];
                    U += Te[he] + xe[ce],
                        ++_[257 + he],
                        ++m[ce],
                        O = k + D,
                        ++x
                } else
                    T[$++] = e[k],
                        ++_[e[k]]
            }
        }
        for (k = Math.max(k, O); k < c; ++k)
            T[$++] = e[k],
                ++_[e[k]];
        n = lt(e, u, i, T, _, m, U, $, S, k - S, n),
        i || (s.r = 7 & n | u[n / 8 | 0] << 3,
            n -= 7,
            s.h = d,
            s.p = p,
            s.i = k,
            s.w = O)
    } else {
        for (var k = s.w || 0; k < c + i; k += 65535) {
            var ue = k + 65535;
            ue >= c && (u[n / 8 | 0] = i,
                ue = c),
                n = kt(u, n + 1, e.subarray(k, ue))
        }
        s.i = c
    }
    return It(y, 0, a + nt(n) + f)
}
    , Qt = function(e, t, r, a, f) {
    if (!f && (f = {
        l: 1
    },
        t.dictionary)) {
        var s = t.dictionary.subarray(-32768)
            , c = new N(s.length + e.length);
        c.set(s),
            c.set(e, s.length),
            e = c,
            f.w = s.length
    }
    return Gt(e, t.level == null ? 6 : t.level, t.mem == null ? f.l ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 20 : 12 + t.mem, r, a, f)
};
function Kt(e, t) {
    return Qt(e, t || {}, 0, 0)
}
function Yt(e, t) {
    return Zt(e, {
        i: 2
    }, t && t.out, t && t.dictionary)
}
var Xt = typeof TextDecoder < "u" && new TextDecoder
    , er = 0;
try {
    Xt.decode(Tt, {
        stream: !0
    }),
        er = 1
} catch {}
var yr = tt(Nt())
    , tr = 1024
    , rr = 1.5
    , Me = e => 2 ** e - 1
    , Fe = e => -(2 ** (e - 1))
    , Pe = e => 2 ** (e - 1) - 1
    , G = {
    Uint8: 0,
    Uint16: 0,
    Uint32: 0,
    Uint64: 0,
    BigUint64: 0,
    Int8: Fe(8),
    Int16: Fe(16),
    Int32: Fe(32),
    Int64: Number.MIN_SAFE_INTEGER,
    BigInt64: -(BigInt(2) ** BigInt(63))
}
    , Q = {
    Uint8: Me(8),
    Uint16: Me(16),
    Uint32: Me(32),
    Uint64: Number.MAX_SAFE_INTEGER,
    BigUint64: BigInt(2) ** BigInt(64) - BigInt(1),
    Int8: Pe(8),
    Int16: Pe(16),
    Int32: Pe(32),
    Int64: Number.MAX_SAFE_INTEGER,
    BigInt64: BigInt(2) ** BigInt(63) - BigInt(1)
};
function K(e, t, r, a) {
    B(e >= t, e, "outside lower bound for", a),
        B(e <= r, e, "outside upper bound for", a)
}
var nr = class {
        getOffset() {
            return this.offset
        }
        slice(e=0, t=this.offset) {
            return this.buffer.slice(e, t)
        }
        subarray(e=0, t=this.offset) {
            return new Uint8Array(this.buffer,e,t)
        }
        ensureBufferLength(e) {
            let t = this.buffer.byteLength;
            if (this.offset + e <= t)
                return;
            let r = new ArrayBuffer(Math.ceil(t * rr) + e);
            ut(this.buffer, r, 0),
                this.buffer = r,
                this.view = new DataView(r)
        }
        writeUint8(e) {
            K(e, G.Uint8, Q.Uint8, "Uint8");
            let t = M.Uint8;
            this.ensureBufferLength(t),
                this.view.setUint8(this.offset, e),
                this.offset += t
        }
        writeUint16(e) {
            K(e, G.Uint16, Q.Uint16, "Uint16");
            let t = M.Uint16;
            this.ensureBufferLength(t),
                this.view.setUint16(this.offset, e),
                this.offset += t
        }
        writeUint32(e) {
            K(e, G.Uint32, Q.Uint32, "Uint32");
            let t = M.Uint32;
            this.ensureBufferLength(t),
                this.view.setUint32(this.offset, e),
                this.offset += t
        }
        writeUint64(e) {
            K(e, G.Uint64, Q.Uint64, "Uint64");
            let t = BigInt(e);
            this.writeBigUint64(t)
        }
        writeBigUint64(e) {
            K(e, G.BigUint64, Q.BigUint64, "BigUint64");
            let t = M.BigUint64;
            this.ensureBufferLength(t),
                this.view.setBigUint64(this.offset, e),
                this.offset += t
        }
        writeInt8(e) {
            K(e, G.Int8, Q.Int8, "Int8");
            let t = M.Int8;
            this.ensureBufferLength(t),
                this.view.setInt8(this.offset, e),
                this.offset += t
        }
        writeInt16(e) {
            K(e, G.Int16, Q.Int16, "Int16");
            let t = M.Int16;
            this.ensureBufferLength(t),
                this.view.setInt16(this.offset, e),
                this.offset += t
        }
        writeInt32(e) {
            K(e, G.Int32, Q.Int32, "Int32");
            let t = M.Int32;
            this.ensureBufferLength(t),
                this.view.setInt32(this.offset, e),
                this.offset += t
        }
        writeInt64(e) {
            K(e, G.Int64, Q.Int64, "Int64");
            let t = BigInt(e);
            this.writeBigInt64(t)
        }
        writeBigInt64(e) {
            K(e, G.BigInt64, Q.BigInt64, "BigInt64");
            let t = M.BigInt64;
            this.ensureBufferLength(t),
                this.view.setBigInt64(this.offset, e),
                this.offset += t
        }
        writeFloat32(e) {
            let t = M.Float32;
            this.ensureBufferLength(t),
                this.view.setFloat32(this.offset, e),
                this.offset += t
        }
        writeFloat64(e) {
            let t = M.Float64;
            this.ensureBufferLength(t),
                this.view.setFloat64(this.offset, e),
                this.offset += t
        }
        writeBuffer(e) {
            let t = e.byteLength;
            this.ensureBufferLength(t),
                ut(e, this.buffer, this.offset),
                this.offset += t
        }
        encodeString(e) {
            let t = this.encodedStrings.get(e);
            if (t)
                return t;
            let r = this.encoder.encode(e);
            return this.encodedStrings.set(e, r),
                r
        }
        writeString(e) {
            let t = this.encodeString(e)
                , r = t.byteLength;
            this.writeUint32(r),
                this.writeBuffer(t)
        }
        writeJson(e) {
            let t = JSON.stringify(e);
            this.writeString(t)
        }
        constructor() {
            this.offset = 0,
                this.buffer = new ArrayBuffer(tr),
                this.view = new DataView(this.buffer),
                this.encoder = new TextEncoder,
                this.encodedStrings = new Map
        }
    }
;
function ut(e, t, r) {
    let a = new Uint8Array(e);
    new Uint8Array(t).set(a, r)
}
var ae = class {
        static fromString(e) {
            let[t,r,a] = e.split("/").map(Number);
            return B(Be(t), "Invalid chunkId"),
                B(Be(r), "Invalid offset"),
                B(Be(a), "Invalid length"),
                new ae(t,r,a)
        }
        toString() {
            return `${this.chunkId}/${this.offset}/${this.length}`
        }
        static read(e) {
            let t = e.readUint16()
                , r = e.readUint32()
                , a = e.readUint32();
            return new ae(t,r,a)
        }
        write(e) {
            e.writeUint16(this.chunkId),
                e.writeUint32(this.offset),
                e.writeUint32(this.length)
        }
        compare(e) {
            return this.chunkId < e.chunkId ? -1 : this.chunkId > e.chunkId ? 1 : this.offset < e.offset ? -1 : this.offset > e.offset ? 1 : (B(this.length === e.length),
                0)
        }
        constructor(e, t, r) {
            this.chunkId = e,
                this.offset = t,
                this.length = r
        }
    }
;
function Ne(e) {
    if (Ie(e))
        return 0;
    switch (e.type) {
        case g.Array:
            return 1;
        case g.Boolean:
            return 2;
        case g.Color:
            return 3;
        case g.Date:
            return 4;
        case g.Enum:
            return 5;
        case g.File:
            return 6;
        case g.ResponsiveImage:
            return 10;
        case g.Link:
            return 7;
        case g.Number:
            return 8;
        case g.Object:
            return 9;
        case g.RichText:
            return 11;
        case g.String:
            return 12;
        default:
            _e(e)
    }
}
(e => {
        e.read = function(t) {
            let r = t.readUint8();
            switch (r) {
                case 0:
                    return null;
                case 1:
                    return Ae.read(t);
                case 2:
                    return De.read(t);
                case 3:
                    return Oe.read(t);
                case 4:
                    return je.read(t);
                case 5:
                    return Re.read(t);
                case 6:
                    return qe.read(t);
                case 7:
                    return He.read(t);
                case 8:
                    return ze.read(t);
                case 9:
                    return Ve.read(t);
                case 10:
                    return $e.read(t);
                case 11:
                    return Je.read(t);
                case 12:
                    return Ze.read(t);
                default:
                    _e(r)
            }
        }
            ,
            e.write = function(t, r) {
                let a = Ne(r);
                if (t.writeUint8(a),
                    !Ie(r))
                    switch (r.type) {
                        case g.Array:
                            return Ae.write(t, r);
                        case g.Boolean:
                            return De.write(t, r);
                        case g.Color:
                            return Oe.write(t, r);
                        case g.Date:
                            return je.write(t, r);
                        case g.Enum:
                            return Re.write(t, r);
                        case g.File:
                            return qe.write(t, r);
                        case g.Link:
                            return He.write(t, r);
                        case g.Number:
                            return ze.write(t, r);
                        case g.Object:
                            return Ve.write(t, r);
                        case g.ResponsiveImage:
                            return $e.write(t, r);
                        case g.RichText:
                            return Je.write(t, r);
                        case g.String:
                            return Ze.write(t, r);
                        default:
                            _e(r)
                    }
            }
            ,
            e.compare = function(t, r, a) {
                let f = Ne(t)
                    , s = Ne(r);
                if (f < s)
                    return -1;
                if (f > s)
                    return 1;
                if (Ie(t) || Ie(r))
                    return 0;
                switch (t.type) {
                    case g.Array:
                        return B(r.type === g.Array),
                            Ae.compare(t, r, a);
                    case g.Boolean:
                        return B(r.type === g.Boolean),
                            De.compare(t, r, a);
                    case g.Color:
                        return B(r.type === g.Color),
                            Oe.compare(t, r, a);
                    case g.Date:
                        return B(r.type === g.Date),
                            je.compare(t, r, a);
                    case g.Enum:
                        return B(r.type === g.Enum),
                            Re.compare(t, r, a);
                    case g.File:
                        return B(r.type === g.File),
                            qe.compare(t, r, a);
                    case g.Link:
                        return B(r.type === g.Link),
                            He.compare(t, r, a);
                    case g.Number:
                        return B(r.type === g.Number),
                            ze.compare(t, r, a);
                    case g.Object:
                        return B(r.type === g.Object),
                            Ve.compare(t, r, a);
                    case g.ResponsiveImage:
                        return B(r.type === g.ResponsiveImage),
                            $e.compare(t, r, a);
                    case g.RichText:
                        return B(r.type === g.RichText),
                            Je.compare(t, r, a);
                    case g.String:
                        return B(r.type === g.String),
                            Ze.compare(t, r, a);
                    default:
                        _e(t)
                }
            }
    }
)(Z || (Z = {}));
var Ae = {
    read(e) {
        let t = e.readUint16()
            , r = [];
        for (let a = 0; a < t; a++) {
            let f = Z.read(e);
            r.push(f)
        }
        return {
            type: g.Array,
            value: r
        }
    },
    write(e, t) {
        for (let r of (e.writeUint16(t.value.length),
            t.value))
            Z.write(e, r)
    },
    compare(e, t, r) {
        let a = e.value.length
            , f = t.value.length;
        if (a < f)
            return -1;
        if (a > f)
            return 1;
        for (let s = 0; s < a; s++) {
            let c = e.value[s]
                , y = t.value[s];
            B(!re(c), "Left item must exist"),
                B(!re(y), "Right item must exist");
            let u = Z.compare(c, y, r);
            if (u !== 0)
                return u
        }
        return 0
    }
}
    , De = {
    read: e => ({
        type: g.Boolean,
        value: e.readUint8() !== 0
    }),
    write(e, t) {
        e.writeUint8(t.value ? 1 : 0)
    },
    compare: (e, t) => e.value < t.value ? -1 : e.value > t.value ? 1 : 0
}
    , Oe = {
    read: e => ({
        type: g.Color,
        value: e.readString()
    }),
    write(e, t) {
        e.writeString(t.value)
    },
    compare: (e, t) => e.value < t.value ? -1 : e.value > t.value ? 1 : 0
}
    , je = {
    read(e) {
        let t = e.readInt64()
            , r = new Date(t);
        return {
            type: g.Date,
            value: r.toISOString()
        }
    },
    write(e, t) {
        let r = new Date(t.value)
            , a = r.getTime();
        e.writeInt64(a)
    },
    compare(e, t) {
        let r = new Date(e.value)
            , a = new Date(t.value);
        return r < a ? -1 : r > a ? 1 : 0
    }
}
    , Re = {
    read: e => ({
        type: g.Enum,
        value: e.readString()
    }),
    write(e, t) {
        e.writeString(t.value)
    },
    compare: (e, t) => e.value < t.value ? -1 : e.value > t.value ? 1 : 0
}
    , qe = {
    read: e => ({
        type: g.File,
        value: e.readString()
    }),
    write(e, t) {
        e.writeString(t.value)
    },
    compare: (e, t) => e.value < t.value ? -1 : e.value > t.value ? 1 : 0
}
    , He = {
    read: e => ({
        type: g.Link,
        value: e.readJson()
    }),
    write(e, t) {
        e.writeJson(t.value)
    },
    compare(e, t) {
        let r = JSON.stringify(e.value)
            , a = JSON.stringify(t.value);
        return r < a ? -1 : r > a ? 1 : 0
    }
}
    , ze = {
    read: e => ({
        type: g.Number,
        value: e.readFloat64()
    }),
    write(e, t) {
        e.writeFloat64(t.value)
    },
    compare: (e, t) => e.value < t.value ? -1 : e.value > t.value ? 1 : 0
}
    , Ve = {
    read(e) {
        let t = e.readUint16()
            , r = {};
        for (let a = 0; a < t; a++) {
            let f = e.readString();
            r[f] = Z.read(e)
        }
        return {
            type: g.Object,
            value: r
        }
    },
    write(e, t) {
        let r = Object.entries(t.value);
        for (let[a,f] of (e.writeUint16(r.length),
            r))
            e.writeString(a),
                Z.write(e, f)
    },
    compare(e, t, r) {
        let a = Object.keys(e.value).sort()
            , f = Object.keys(t.value).sort();
        if (a.length < f.length)
            return -1;
        if (a.length > f.length)
            return 1;
        for (let s = 0; s < a.length; s++) {
            let c = a[s]
                , y = f[s];
            if (B(!re(c), "Left key must exist"),
                B(!re(y), "Left key must exist"),
            c < y)
                return -1;
            if (c > y)
                return 1;
            let u = e.value[c]
                , i = t.value[y];
            B(!re(u), "Left value must exist"),
                B(!re(i), "Right value must exist");
            let n = Z.compare(u, i, r);
            if (n !== 0)
                return n
        }
        return 0
    }
}
    , $e = {
    read: e => ({
        type: g.ResponsiveImage,
        value: e.readJson()
    }),
    write(e, t) {
        e.writeJson(t.value)
    },
    compare(e, t) {
        let r = JSON.stringify(e.value)
            , a = JSON.stringify(t.value);
        return r < a ? -1 : r > a ? 1 : 0
    }
}
    , Je = {
    read: e => ({
        type: g.RichText,
        value: e.readUint32()
    }),
    write(e, t) {
        e.writeUint32(t.value)
    },
    compare(e, t) {
        let r = e.value
            , a = t.value;
        return r < a ? -1 : r > a ? 1 : 0
    }
}
    , Ze = {
    read: e => ({
        type: g.String,
        value: e.readString()
    }),
    write(e, t) {
        e.writeString(t.value)
    },
    compare(e, t, r) {
        let a = e.value
            , f = t.value;
        return r.type === 0 && (a = e.value.toLowerCase(),
            f = t.value.toLowerCase()),
            a < f ? -1 : a > f ? 1 : 0
    }
};
var ir = tt(jt())
    , ye = `\r
`
    , be = "--";
async function ar(e, t) {
    let r = await fetch(e, {
        headers: {
            Range: fr(t)
        }
    });
    if (!r.ok)
        throw Error(`Request failed: ${r.status} ${r.statusText}`);
    let a = await r.arrayBuffer()
        , f = new Uint8Array(a);
    if (r.status === 200)
        return t.map(s => {
                if (s.to > f.length)
                    throw Error("Missing data");
                return f.slice(s.from, s.to)
            }
        );
    if (r.status === 206) {
        let s = r.headers.get("Content-Type");
        if (!s)
            throw Error("Missing Content-Type header");
        let c = new lr
            , y = new ir.default(s);
        if (y.type === "multipart" && y.subtype === "byteranges") {
            let u = y.parameters.get("boundary");
            if (!u)
                throw Error("Missing boundary parameter");
            let i = sr(f, u);
            for (let {headers: n, body: o} of i) {
                let l = n.get("Content-Range");
                if (!l)
                    throw Error("Missing Content-Range header");
                let h = ft(l);
                if (h.unit !== "bytes")
                    throw Error("Unsupported unit");
                c.write(h.start, o)
            }
        } else {
            let u = r.headers.get("Content-Range");
            if (!u)
                throw Error("Missing Content-Range header");
            let i = ft(u);
            if (i.unit !== "bytes")
                throw Error("Unsupported unit");
            c.write(i.start, f)
        }
        return t.map(u => c.read(u.from, u.to - u.from))
    }
    throw Error(`Unsupported response: ${r.status} ${r.statusText}`)
}
var ge = new TextEncoder
    , or = new TextDecoder;
function sr(e, t) {
    let r = ge.encode(be + t)
        , a = Xe(e, r);
    if (re(a))
        throw Error("Missing parts start");
    let f = a + r.length
        , s = ge.encode(ye + be + t + be)
        , c = ur(e, s);
    if (re(c))
        throw Error("Missing parts end");
    let y = ge.encode(ye + be + t)
        , u = e.subarray(f, c);
    return ht(u, y).map(n => {
            let o = ge.encode(ye + ye)
                , l = Xe(n, o);
            if (re(l))
                throw Error("Missing headers end");
            let h = ge.encode(ye)
                , v = n.subarray(0, l)
                , p = ht(v, h)
                , d = new Headers;
            for (let I of p) {
                let T = or.decode(I)
                    , [_,m] = T.split(": ", 2);
                _ && m && d.append(_, m)
            }
            let b = l + o.length
                , w = n.slice(b);
            return {
                headers: d,
                body: w
            }
        }
    )
}
function ft(e) {
    let t = RegExp("^(?<unit>\\w+) (?<start>\\d+)-(?<end>\\d+)\\/(?<size>\\d+|\\*)$", "u").exec(e);
    if (!t || !t.groups)
        throw Error("Invalid Content-Range header");
    let {unit: r, start: a, end: f, size: s} = t.groups;
    return {
        unit: r,
        start: Number(a),
        end: Number(f),
        size: s !== "*" ? Number(s) : null
    }
}
var lr = class {
        read(e, t) {
            for (let r of this.chunks) {
                if (e < r.start)
                    break;
                if (e > r.end)
                    continue;
                if (e + t > r.end)
                    break;
                let a = e - r.start
                    , f = a + t;
                return r.data.slice(a, f)
            }
            throw Error("Missing data")
        }
        write(e, t) {
            let r = e
                , a = r + t.length
                , f = 0
                , s = this.chunks.length;
            for (; f < s; f++) {
                let u = this.chunks[f];
                if (B(u, "Missing chunk"),
                    !(r > u.end)) {
                    if (r > u.start) {
                        let i = r - u.start
                            , n = u.data.subarray(0, i);
                        t = ct(n, t),
                            r = u.start
                    }
                    break
                }
            }
            for (; s > f; s--) {
                let u = this.chunks[s - 1];
                if (B(u, "Missing chunk"),
                    !(a < u.start)) {
                    if (a < u.end) {
                        let i = a - u.start
                            , n = u.data.subarray(i);
                        t = ct(t, n),
                            a = u.end
                    }
                    break
                }
            }
            let c = {
                start: r,
                end: a,
                data: t
            }
                , y = s - f;
            this.chunks.splice(f, y, c)
        }
        constructor() {
            this.chunks = []
        }
    }
;
function ht(e, t) {
    var r;
    let a = [];
    for (; e.length > 0; ) {
        let f = (r = Xe(e, t)) != null ? r : e.length
            , s = e.subarray(0, f);
        a.push(s),
            e = e.subarray(f + t.length)
    }
    return a
}
function Xe(e, t) {
    for (let r = 0; r < e.length - t.length; r++) {
        let a = e.subarray(r);
        if (xt(a, t))
            return r
    }
}
function ur(e, t) {
    for (let r = e.length - t.length; r >= 0; r--) {
        let a = e.subarray(r);
        if (xt(a, t))
            return r
    }
}
function xt(e, t) {
    for (let r = 0; r < t.length; r++)
        if (e[r] !== t[r])
            return !1;
    return !0
}
function ct(e, t) {
    let r = e.length + t.length
        , a = new Uint8Array(r);
    return a.set(e, 0),
        a.set(t, e.length),
        a
}
function fr(e) {
    B(e.length > 0, "Must have at least one range");
    let t = [...e].sort( (f, s) => f.from - s.from)
        , r = [];
    for (let f of t) {
        let s = r.length - 1
            , c = r[s];
        c && f.from <= c.to ? r[s] = {
            from: c.from,
            to: Math.max(c.to, f.to)
        } : r.push(f)
    }
    return `bytes=${r.map(f => `${f.from}-${f.to - 1}`).join(",")}`
}
var et = class {
        static read(e, t) {
            let r = new et
                , a = e.readUint32()
                , f = e.readBuffer(a)
                , s = Yt(new Uint8Array(f), {
                dictionary: t
            })
                , c = new We(s.buffer)
                , y = c.readUint16();
            for (let u = 0; u < y; u++) {
                let i = c.readString()
                    , n = Z.read(c);
                r.setField(i, n)
            }
            return r
        }
        writeUncompressed(e) {
            for (let[t,r] of (e.writeUint16(this.fields.size),
                this.fields))
                e.writeString(t),
                    Z.write(e, r)
        }
        write(e, t) {
            let r = new nr;
            this.writeUncompressed(r);
            let a = Kt(r.subarray(), {
                dictionary: t
            });
            e.writeUint32(a.byteLength),
                e.writeBuffer(a)
        }
        getData() {
            let e = {};
            for (let[t,r] of this.fields)
                e[t] = r;
            return e
        }
        setField(e, t) {
            this.fields.set(e, t)
        }
        getField(e) {
            return this.fields.get(e)
        }
        constructor() {
            this.fields = new Map
        }
    }
    , hr = class {
        scanItems() {
            return this.itemsPromise != null || (this.itemsPromise = Promise.all([fetch(this.url), this.getCompressionDictionary()]).then(async ([e,t]) => {
                    if (!e.ok)
                        throw Error(`Request failed: ${e.status} ${e.statusText}`);
                    let r = await e.arrayBuffer()
                        , a = new We(r)
                        , f = []
                        , s = a.readUint32();
                    for (let c = 0; c < s; c++) {
                        let y = a.getOffset()
                            , u = et.read(a, t)
                            , i = a.getOffset() - y
                            , n = new ae(this.id,y,i)
                            , o = n.toString()
                            , l = {
                            pointer: o,
                            data: u.getData()
                        };
                        this.itemLoader.prime(o, l),
                            f.push(l)
                    }
                    return f
                }
            )),
                this.itemsPromise
        }
        resolveItem(e) {
            return this.itemLoader.load(e)
        }
        getCompressionDictionary() {
            let e = this.compressionDictionaryCache.get(this.compressionDictionaryUrl);
            if (e)
                return e;
            let t = fetch(this.compressionDictionaryUrl).then(async r => {
                    if (!r.ok)
                        throw Error(`Compression dictionary request failed: ${r.status} ${r.statusText}`);
                    let a = await r.arrayBuffer();
                    return new Uint8Array(a)
                }
            );
            return this.compressionDictionaryCache.set(this.compressionDictionaryUrl, t),
                t
        }
        constructor(e, t, r, a) {
            this.id = e,
                this.url = t,
                this.compressionDictionaryUrl = r,
                this.compressionDictionaryCache = a,
                this.itemLoader = new Rt.default(async f => {
                        let s = f.map(u => {
                                let i = ae.fromString(u);
                                return {
                                    from: i.offset,
                                    to: i.offset + i.length
                                }
                            }
                        )
                            , [c,y] = await Promise.all([ar(this.url, s), this.getCompressionDictionary()]);
                        return c.map( (u, i) => {
                                let n = new We(u.buffer)
                                    , o = et.read(n, y)
                                    , l = f[i];
                                return B(l, "Missing pointer"),
                                    {
                                        pointer: l,
                                        data: o.getData()
                                    }
                            }
                        )
                    }
                )
        }
    }
    , Ut = class {
        async scanItems() {
            return (await Promise.all(this.chunks.map(async t => t.scanItems()))).flat()
        }
        async resolveItems(e) {
            return Promise.all(e.map(t => {
                    let r = ae.fromString(t)
                        , a = this.chunks[r.chunkId];
                    return B(a, "Missing chunk"),
                        a.resolveItem(t)
                }
            ))
        }
        compareItems(e, t) {
            let r = ae.fromString(e.pointer)
                , a = ae.fromString(t.pointer);
            return r.compare(a)
        }
        compareValues(e, t, r) {
            return Z.compare(e, t, r)
        }
        constructor(e) {
            this.options = e,
                this.schema = this.options.schema,
                this.indexes = this.options.indexes,
                this.resolveRichText = this.options.resolveRichText;
            let t = new Map;
            this.chunks = this.options.chunks.map( (r, a) => new hr(a,r,this.options.compressionDictionary,t))
        }
    }
;
/*! Bundled license information:

splaytree/dist/splay.js:
  (**
   * splaytree v3.1.2
   * Fast Splay tree for Node and browser
   *
   * @author Alexander Milevski <info@w8r.name>
   * @license MIT
   * @preserve
   *)
  (*! *****************************************************************************
      Copyright (c) Microsoft Corporation. All rights reserved.
      Licensed under the Apache License, Version 2.0 (the "License"); you may not use
      this file except in compliance with the License. You may obtain a copy of the
      License at http://www.apache.org/licenses/LICENSE-2.0

      THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
      WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
      MERCHANTABLITY OR NON-INFRINGEMENT.

      See the Apache Version 2.0 License for specific language governing permissions
      and limitations under the License.
      ***************************************************************************** *)
*/
var cr = [];
async function St(e) {
    let t = cr[e];
    if (t)
        return await t()
}
var pr = {
    CZOu0H9p6: {
        isNullable: !0,
        type: g.String
    },
    HO_Dxy3Fb: {
        isNullable: !0,
        type: g.String
    },
    id: {
        isNullable: !1,
        type: g.String
    },
    KM6vLSrCh: {
        isNullable: !0,
        type: g.ResponsiveImage
    },
    nextItemId: {
        isNullable: !0,
        type: g.String
    },
    previousItemId: {
        isNullable: !0,
        type: g.String
    },
    rAQdOCzbG: {
        isNullable: !0,
        type: g.String
    },
    y34GyoiDi: {
        isNullable: !0,
        type: g.String
    }
}
    , Bt = new at
    , Ue = {
    collectionByLocaleId: {
        default: new Ut({
            chunks: [new URL("./qcOEbDaZ_-chunk-default-0.framercms","https://framerusercontent.com/modules/oSVZi7c2iPNfK6TtBwqV/7VJwVk2isemLQIFlJJBe/qcOEbDaZ_.js").href],
            compressionDictionary: new URL("./qcOEbDaZ_-chunk-default-dict.framercms","https://framerusercontent.com/modules/oSVZi7c2iPNfK6TtBwqV/7VJwVk2isemLQIFlJJBe/qcOEbDaZ_.js").href,
            indexes: [],
            resolveRichText: St,
            schema: pr
        })
    },
    displayName: "advice"
}
    , Fr = Ue;
it(Ue, {
    y34GyoiDi: {
        defaultValue: "",
        maxLength: 30,
        placeholder: "Short project title for the thumbnail",
        title: "Project Thumbnail Title",
        type: g.String
    },
    KM6vLSrCh: {
        title: "Main Image / Thumbnail Image",
        type: g.ResponsiveImage
    },
    HO_Dxy3Fb: {
        title: "Slug",
        type: g.String
    },
    CZOu0H9p6: {
        defaultValue: "",
        displayTextArea: !0,
        title: "Intro Section Heading",
        type: g.String
    },
    rAQdOCzbG: {
        defaultValue: "",
        displayTextArea: !0,
        title: "Intro Section Body",
        type: g.String
    },
    previousItemId: {
        dataIdentifier: "local-module:collection/qcOEbDaZ_:default",
        title: "Previous",
        type: g.CollectionReference
    },
    nextItemId: {
        dataIdentifier: "local-module:collection/qcOEbDaZ_:default",
        title: "Next",
        type: g.CollectionReference
    }
});
var Pr = {}
    , Nr = {
    async getSlugByRecordId(e, t) {
        let[r] = await Bt.query({
            from: {
                data: Ue,
                type: "Collection"
            },
            limit: {
                type: "LiteralValue",
                value: 1
            },
            select: [{
                name: "HO_Dxy3Fb",
                type: "Identifier"
            }],
            where: {
                left: {
                    name: "id",
                    type: "Identifier"
                },
                operator: "==",
                right: {
                    type: "LiteralValue",
                    value: e
                },
                type: "BinaryOperation"
            }
        }, t);
        return r?.HO_Dxy3Fb
    },
    async getRecordIdBySlug(e, t) {
        let[r] = await Bt.query({
            from: {
                data: Ue,
                type: "Collection"
            },
            limit: {
                type: "LiteralValue",
                value: 1
            },
            select: [{
                name: "id",
                type: "Identifier"
            }],
            where: {
                left: {
                    name: "HO_Dxy3Fb",
                    type: "Identifier"
                },
                operator: "==",
                right: {
                    type: "LiteralValue",
                    value: e
                },
                type: "BinaryOperation"
            }
        }, t);
        return r?.id
    }
}
    , Ar = {
    exports: {
        enumToDisplayNameFunctions: {
            type: "variable",
            annotations: {
                framerContractVersion: "1"
            }
        },
        utils: {
            type: "variable",
            annotations: {
                framerContractVersion: "1"
            }
        },
        default: {
            type: "data",
            name: "data",
            annotations: {
                framerCollectionUtils: "1",
                framerCollectionId: "qcOEbDaZ_",
                framerEnumToDisplayNameUtils: "2",
                framerRecordIdKey: "id",
                framerSlug: "HO_Dxy3Fb",
                framerContractVersion: "1",
                framerData: ""
            }
        },
        __FramerMetadata__: {
            type: "variable"
        }
    }
};
export {Fr as a, Pr as b, Nr as c, Ar as d};
//# sourceMappingURL=chunk-7SIW55VD.mjs.map
