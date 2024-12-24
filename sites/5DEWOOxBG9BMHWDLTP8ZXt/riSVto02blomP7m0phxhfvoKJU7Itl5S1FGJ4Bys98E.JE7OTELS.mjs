import {a as w} from "./chunk-ZIMBFKHW.mjs";
import {a as M} from "./chunk-NTUHS7K6.mjs";
import "./chunk-2AHVAV5Q.mjs";
import {a as oe} from "./chunk-7SIW55VD.mjs";
import {b as te, c as ne, d as ie, e as C, f as I, g as F} from "./chunk-5I6UCAUY.mjs";
import {A as j, B, J as A, K as q, M as h, N as T, P as W, Q as L, R as Q, T as Z, V as D, Y as i, Z as O, b as E, d as R, ea as K, g as H, ga as $, h as V, i as S, k as X, ka as J, la as ee, m as Y, n as e, o as m, oa as x, pa as re, q as G, qa as g, r as k, ra as ae} from "./chunk-PUHG2OFZ.mjs";
import "./chunk-JR5VT52U.mjs";
import "./chunk-WTCYPHI4.mjs";
import "./chunk-RIUMFBNJ.mjs";
var ge = g(F)
    , ue = q(ee)
    , xe = g(C)
    , N = q(T)
    , we = g(M)
    , ye = g(I)
    , be = {
    pI9W_PNdI: "(min-width: 768px) and (max-width: 1099px)",
    VnGzoQNds: "(max-width: 767px)",
    WQLkyLRf1: "(min-width: 1100px)"
};
var se = "framer-TAqaM"
    , ve = {
    pI9W_PNdI: "framer-v-11bkdjx",
    VnGzoQNds: "framer-v-rno4l3",
    WQLkyLRf1: "framer-v-72rtr7"
}
    , _e = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 30,
    y: 0
}
    , me = {
    delay: .2,
    duration: 1.5,
    ease: [.35, 0, 0, 1],
    type: "tween"
}
    , ke = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: me,
    x: 30,
    y: 0
}
    , Ae = {
    opacity: .001,
    rotate: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 50,
    y: 0
}
    , qe = {
    delay: .2,
    duration: .5,
    ease: [0, .46, .56, 1],
    type: "tween"
}
    , Te = {
    effect: Ae,
    tokenization: "line",
    transition: qe,
    trigger: "onMount",
    type: "appear"
}
    , Me = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 40,
    y: 0
}
    , fe = {
    delay: .3,
    duration: 1.5,
    ease: [.35, 0, 0, 1],
    type: "tween"
}
    , Ce = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: fe,
    x: 40,
    y: 0
}
    , Ie = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: 30
}
    , ce = {
    delay: 0,
    duration: 1.5,
    ease: [.35, 0, 0, 1],
    type: "tween"
}
    , Fe = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: ce,
    x: 0,
    y: 30
}
    , Ne = a => typeof a == "object" && a !== null && typeof a.src == "string" ? a : typeof a == "string" ? {
    src: a
} : void 0
    , Pe = ({query: a, pageSize: l, children: f}) => {
    let c = $(a);
    return f(c)
}
    , P = w()
    , Ue = {
    Desktop: "WQLkyLRf1",
    Phone: "VnGzoQNds",
    Tablet: "pI9W_PNdI"
}
    , ze = ({height: a, id: l, width: f, ...c}) => {
    var p, d;
    return {
        ...c,
        variant: (d = (p = Ue[c.variant]) !== null && p !== void 0 ? p : c.variant) !== null && d !== void 0 ? d : "WQLkyLRf1"
    }
}
    , Ee = R(function(a, l) {
    let {activeLocale: f, setLocale: c} = B()
        , {style: p, className: d, layoutId: b, variant: le, y34GyoiDieYPccsinJ: He, KM6vLSrCheYPccsinJ: Ve, HO_Dxy3FbeYPccsinJ: Se, ideYPccsinJ: Xe, ...pe} = ze(a);
    H( () => {
            let r = w(void 0, f);
            if (r.robots) {
                let t = document.querySelector('meta[name="robots"]');
                t ? t.setAttribute("content", r.robots) : (t = document.createElement("meta"),
                    t.setAttribute("name", "robots"),
                    t.setAttribute("content", r.robots),
                    document.head.appendChild(t))
            }
        }
        , [void 0, f]),
        S( () => {
                let r = w(void 0, f);
                if (document.title = r.title || "",
                    r.viewport) {
                    var t;
                    (t = document.querySelector('meta[name="viewport"]')) === null || t === void 0 || t.setAttribute("content", r.viewport)
                }
                let v = r.bodyClassName;
                if (v) {
                    let n = document.body;
                    n.classList.forEach(u => u.startsWith("framer-body-") && n.classList.remove(u)),
                        n.classList.add(`${r.bodyClassName}-framer-TAqaM`)
                }
                return () => {
                    v && document.body.classList.remove(`${r.bodyClassName}-framer-TAqaM`)
                }
            }
            , [void 0, f]);
    let[o,Ye] = K(le, be, !1)
        , Ge = void 0
        , de = X(null)
        , je = j()
        , he = V()
        , U = [ie];
    return L({}),
        e(Q.Provider, {
            value: {
                primaryVariantId: "WQLkyLRf1",
                variantClassNames: ve
            },
            children: m(k, {
                id: b ?? he,
                children: [m(G.div, {
                    ...pe,
                    className: A(se, ...U, "framer-72rtr7", d),
                    ref: l ?? de,
                    style: {
                        ...p
                    },
                    children: [e(h, {
                        height: 89,
                        width: "100vw",
                        y: 0,
                        children: e(T, {
                            className: "framer-p34yk0-container",
                            layoutScroll: !0,
                            children: e(i, {
                                breakpoint: o,
                                overrides: {
                                    pI9W_PNdI: {
                                        variant: "kUbzgqLYa"
                                    },
                                    VnGzoQNds: {
                                        variant: "dKaOon5M9"
                                    }
                                },
                                children: e(F, {
                                    height: "100%",
                                    id: "bhImHD0Sl",
                                    layoutId: "bhImHD0Sl",
                                    style: {
                                        width: "100%"
                                    },
                                    variant: "XR3KwPlhe",
                                    width: "100%"
                                })
                            })
                        })
                    }), e("main", {
                        className: "framer-nwve3s",
                        "data-framer-name": "Content",
                        name: "Content",
                        children: m("div", {
                            className: "framer-ftb13i",
                            "data-framer-name": "Inner Content",
                            name: "Inner Content",
                            children: [m("section", {
                                "aria-label": "intro-heading",
                                className: "framer-m6sp60",
                                "data-framer-name": "Hero",
                                name: "Hero",
                                children: [e(ue, {
                                    __framer__animate: {
                                        transition: me
                                    },
                                    __framer__animateOnce: !0,
                                    __framer__enter: _e,
                                    __framer__exit: ke,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0,
                                    __fromCanvasComponent: !0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    children: e(E, {
                                        children: m("h1", {
                                            className: "framer-styles-preset-zcx1yu",
                                            "data-styles-preset": "KN1n4eozB",
                                            style: {
                                                "--framer-text-color": "var(--token-904c14a9-7582-43d7-a43c-85f49d580145, rgb(138, 138, 138))"
                                            },
                                            children: ["Be like a man.", e("br", {}), "Advice for men.", m("span", {
                                                style: {
                                                    "--framer-text-color": "var(--token-be079bad-eabd-4234-8a56-5579c7057187, rgb(0, 0, 0))"
                                                },
                                                children: [e("br", {}), "Be a real $MAN. "]
                                            })]
                                        })
                                    }),
                                    className: "framer-l5382l",
                                    effect: Te,
                                    fonts: ["Inter"],
                                    style: {
                                        transformPerspective: 1200
                                    },
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                }), e(i, {
                                    breakpoint: o,
                                    overrides: {
                                        VnGzoQNds: {
                                            y: 244.8
                                        }
                                    },
                                    children: e(h, {
                                        height: 48,
                                        y: 316.8,
                                        children: e(N, {
                                            __framer__animate: {
                                                transition: fe
                                            },
                                            __framer__animateOnce: !0,
                                            __framer__enter: Me,
                                            __framer__exit: Ce,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: 0,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: "framer-qn66lz-container",
                                            style: {
                                                transformPerspective: 1200
                                            },
                                            children: e(C, {
                                                bohRFuhqj: "https://dexscreener.com/solana/crjtv3wcptszqosmxtyjeeiz1zv57mzdfwup9dg5d37h",
                                                height: "100%",
                                                i7oFluX4k: "WhZEoFj5uejcq392GeYEC7Fmwr5q49wyq9jD5U3pump",
                                                id: "ak1_umG1X",
                                                layoutId: "ak1_umG1X",
                                                variant: "cmQsGoNxI",
                                                width: "100%"
                                            })
                                        })
                                    })
                                })]
                            }), m("div", {
                                className: "framer-po57qo",
                                "data-framer-name": "Projects",
                                name: "Projects",
                                children: [e("div", {
                                    className: "framer-2ibz2h",
                                    children: e(Z, {
                                        children: e(Pe, {
                                            query: {
                                                from: {
                                                    alias: "eYPccsinJ",
                                                    data: oe,
                                                    type: "Collection"
                                                },
                                                offset: {
                                                    type: "LiteralValue",
                                                    value: 0
                                                },
                                                select: [{
                                                    collection: "eYPccsinJ",
                                                    name: "y34GyoiDi",
                                                    type: "Identifier"
                                                }, {
                                                    collection: "eYPccsinJ",
                                                    name: "KM6vLSrCh",
                                                    type: "Identifier"
                                                }, {
                                                    collection: "eYPccsinJ",
                                                    name: "HO_Dxy3Fb",
                                                    type: "Identifier"
                                                }, {
                                                    collection: "eYPccsinJ",
                                                    name: "id",
                                                    type: "Identifier"
                                                }]
                                            },
                                            children: (r, t, v) => e(Y, {
                                                children: r.map( ({y34GyoiDi: n, KM6vLSrCh: u, HO_Dxy3Fb: s, id: z}, Be) => (n ?? (n = ""),
                                                s ?? (s = ""),
                                                    e(k, {
                                                        id: `eYPccsinJ-${z}`,
                                                        children: e(D.Provider, {
                                                            value: {
                                                                HO_Dxy3Fb: s
                                                            },
                                                            children: e(O, {
                                                                links: [{
                                                                    href: {
                                                                        pathVariables: {
                                                                            HO_Dxy3Fb: s
                                                                        },
                                                                        webPageId: "Yg0gGoq22"
                                                                    },
                                                                    implicitPathVariables: void 0
                                                                }, {
                                                                    href: {
                                                                        pathVariables: {
                                                                            HO_Dxy3Fb: s
                                                                        },
                                                                        webPageId: "Yg0gGoq22"
                                                                    },
                                                                    implicitPathVariables: void 0
                                                                }, {
                                                                    href: {
                                                                        pathVariables: {
                                                                            HO_Dxy3Fb: s
                                                                        },
                                                                        webPageId: "Yg0gGoq22"
                                                                    },
                                                                    implicitPathVariables: void 0
                                                                }],
                                                                children: _ => e(i, {
                                                                    breakpoint: o,
                                                                    overrides: {
                                                                        pI9W_PNdI: {
                                                                            height: 450,
                                                                            width: "max((min(100vw - 128px, 1800px) - 40px) / 2, 200px)",
                                                                            y: 484.8
                                                                        },
                                                                        VnGzoQNds: {
                                                                            height: 300,
                                                                            width: "max(min(100vw - 32px, 1800px), 200px)",
                                                                            y: 372.8
                                                                        }
                                                                    },
                                                                    children: e(h, {
                                                                        height: 600,
                                                                        width: "max((min(100vw - 160px, 1800px) - 40px) / 2, 200px)",
                                                                        y: 604.8,
                                                                        children: e(N, {
                                                                            __framer__animate: {
                                                                                transition: ce
                                                                            },
                                                                            __framer__animateOnce: !0,
                                                                            __framer__enter: Ie,
                                                                            __framer__exit: Fe,
                                                                            __framer__styleAppearEffectEnabled: !0,
                                                                            __framer__threshold: 0,
                                                                            __perspectiveFX: !1,
                                                                            __targetOpacity: 1,
                                                                            className: "framer-r5ebzq-container",
                                                                            "data-framer-name": "Project Card",
                                                                            name: "Project Card",
                                                                            style: {
                                                                                transformPerspective: 1200
                                                                            },
                                                                            children: e(i, {
                                                                                breakpoint: o,
                                                                                overrides: {
                                                                                    pI9W_PNdI: {
                                                                                        jk7hR1PkU: _[1]
                                                                                    },
                                                                                    VnGzoQNds: {
                                                                                        jk7hR1PkU: _[2],
                                                                                        variant: "u7t4xt4bR"
                                                                                    }
                                                                                },
                                                                                children: e(M, {
                                                                                    belbEkdrE: Ne(u),
                                                                                    height: "100%",
                                                                                    id: "kvRCSNPG3",
                                                                                    jk7hR1PkU: _[0],
                                                                                    layoutId: "kvRCSNPG3",
                                                                                    name: "Project Card",
                                                                                    style: {
                                                                                        height: "100%",
                                                                                        width: "100%"
                                                                                    },
                                                                                    Ty82T0JvZ: n,
                                                                                    variant: "slBZ3hiPp",
                                                                                    width: "100%"
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    }, z)))
                                            })
                                        })
                                    })
                                }), e(i, {
                                    breakpoint: o,
                                    overrides: {
                                        pI9W_PNdI: {
                                            background: {
                                                alt: "",
                                                fit: "fit",
                                                loading: x(2444.8),
                                                pixelHeight: 200,
                                                pixelWidth: 600,
                                                positionX: "center",
                                                positionY: "center",
                                                sizes: "min(100vw - 128px, 1800px)",
                                                src: "https://framerusercontent.com/images/sCekzZk66GHZHevkBuEnlScapk.gif",
                                                srcSet: "https://framerusercontent.com/images/sCekzZk66GHZHevkBuEnlScapk.gif?scale-down-to=512 512w,https://framerusercontent.com/images/sCekzZk66GHZHevkBuEnlScapk.gif 600w"
                                            }
                                        },
                                        VnGzoQNds: {
                                            background: {
                                                alt: "",
                                                fit: "fit",
                                                loading: x(2752.8),
                                                pixelHeight: 200,
                                                pixelWidth: 600,
                                                positionX: "center",
                                                positionY: "center",
                                                sizes: "min(100vw - 32px, 1800px)",
                                                src: "https://framerusercontent.com/images/sCekzZk66GHZHevkBuEnlScapk.gif",
                                                srcSet: "https://framerusercontent.com/images/sCekzZk66GHZHevkBuEnlScapk.gif?scale-down-to=512 512w,https://framerusercontent.com/images/sCekzZk66GHZHevkBuEnlScapk.gif 600w"
                                            }
                                        }
                                    },
                                    children: e(J, {
                                        background: {
                                            alt: "",
                                            fit: "fit",
                                            loading: x(3164.8),
                                            pixelHeight: 200,
                                            pixelWidth: 600,
                                            positionX: "center",
                                            positionY: "center",
                                            sizes: "min(100vw - 160px, 1800px)",
                                            src: "https://framerusercontent.com/images/sCekzZk66GHZHevkBuEnlScapk.gif",
                                            srcSet: "https://framerusercontent.com/images/sCekzZk66GHZHevkBuEnlScapk.gif?scale-down-to=512 512w,https://framerusercontent.com/images/sCekzZk66GHZHevkBuEnlScapk.gif 600w"
                                        },
                                        className: "framer-ui6wpl"
                                    })
                                })]
                            })]
                        })
                    }), e(i, {
                        breakpoint: o,
                        overrides: {
                            pI9W_PNdI: {
                                height: 720,
                                y: 2804.8
                            },
                            VnGzoQNds: {
                                height: 720,
                                y: 3112.8
                            }
                        },
                        children: e(h, {
                            height: 900,
                            width: "100vw",
                            y: 3604.8,
                            children: e(i, {
                                breakpoint: o,
                                overrides: {
                                    VnGzoQNds: {
                                        __framer__styleTransformEffectEnabled: void 0,
                                        style: {}
                                    }
                                },
                                children: e(N, {
                                    __framer__styleTransformEffectEnabled: !0,
                                    __framer__transformTargets: [{
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: -500
                                        }
                                    }, {
                                        target: {
                                            opacity: 1,
                                            rotate: 0,
                                            rotateX: 0,
                                            rotateY: 0,
                                            scale: 1,
                                            skewX: 0,
                                            skewY: 0,
                                            x: 0,
                                            y: 0
                                        }
                                    }],
                                    __framer__transformTrigger: "onInView",
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: "framer-17j58gd-container",
                                    style: {
                                        transformPerspective: 1200
                                    },
                                    children: e(i, {
                                        breakpoint: o,
                                        overrides: {
                                            pI9W_PNdI: {
                                                style: {
                                                    maxHeight: "100%",
                                                    width: "100%"
                                                },
                                                variant: "jbbcbpulJ"
                                            },
                                            VnGzoQNds: {
                                                style: {
                                                    maxHeight: "100%",
                                                    width: "100%"
                                                },
                                                variant: "RSos2oHJP"
                                            }
                                        },
                                        children: e(I, {
                                            height: "100%",
                                            id: "zzmPK7YZ0",
                                            layoutId: "zzmPK7YZ0",
                                            style: {
                                                height: "100%",
                                                maxHeight: "100%",
                                                width: "100%"
                                            },
                                            variant: "gsKKaJUDB",
                                            width: "100%"
                                        })
                                    })
                                })
                            })
                        })
                    })]
                }), e("div", {
                    className: A(se, ...U),
                    id: "overlay"
                })]
            })
        })
})
    , Re = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", `.${P.bodyClassName}-framer-TAqaM { background: var(--token-e16847f2-b192-48e1-a890-7bbcce11cc6e, rgb(255, 255, 255)) /* {"name":"Primary / White"} */; }`, ".framer-TAqaM.framer-lux5qc, .framer-TAqaM .framer-lux5qc { display: block; }", ".framer-TAqaM.framer-72rtr7 { align-content: center; align-items: center; background-color: var(--token-e16847f2-b192-48e1-a890-7bbcce11cc6e, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1100px; }", ".framer-TAqaM .framer-p34yk0-container { flex: none; height: auto; left: 0px; position: fixed; top: 0px; width: 100%; z-index: 10; }", ".framer-TAqaM .framer-nwve3s { align-content: center; align-items: center; background-color: var(--token-e16847f2-b192-48e1-a890-7bbcce11cc6e, #ffffff); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 160px; height: min-content; justify-content: center; overflow: visible; padding: 160px 80px 240px 80px; position: relative; width: 100%; z-index: 2; }", ".framer-TAqaM .framer-ftb13i { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 240px; height: min-content; justify-content: center; max-width: 1800px; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-TAqaM .framer-m6sp60 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-TAqaM .framer-l5382l { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-TAqaM .framer-qn66lz-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-TAqaM .framer-po57qo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-TAqaM .framer-2ibz2h { display: grid; flex: none; gap: 40px; grid-auto-rows: 600px; grid-template-columns: repeat(2, minmax(200px, 1fr)); height: min-content; justify-content: start; padding: 0px; position: relative; width: 100%; }", ".framer-TAqaM .framer-r5ebzq-container { align-self: start; flex: none; height: 100%; justify-self: start; position: relative; width: 100%; }", ".framer-TAqaM .framer-ui6wpl { flex: none; height: 200px; position: relative; width: 100%; }", ".framer-TAqaM .framer-17j58gd-container { flex: none; height: 90vh; max-height: 1000px; position: relative; width: 100%; z-index: 1; }", "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-TAqaM.framer-72rtr7, .framer-TAqaM .framer-nwve3s, .framer-TAqaM .framer-ftb13i, .framer-TAqaM .framer-m6sp60, .framer-TAqaM .framer-po57qo { gap: 0px; } .framer-TAqaM.framer-72rtr7 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-TAqaM.framer-72rtr7 > :first-child, .framer-TAqaM .framer-nwve3s > :first-child, .framer-TAqaM .framer-ftb13i > :first-child, .framer-TAqaM .framer-m6sp60 > :first-child, .framer-TAqaM .framer-po57qo > :first-child { margin-top: 0px; } .framer-TAqaM.framer-72rtr7 > :last-child, .framer-TAqaM .framer-nwve3s > :last-child, .framer-TAqaM .framer-ftb13i > :last-child, .framer-TAqaM .framer-m6sp60 > :last-child, .framer-TAqaM .framer-po57qo > :last-child { margin-bottom: 0px; } .framer-TAqaM .framer-nwve3s > * { margin: 0px; margin-bottom: calc(160px / 2); margin-top: calc(160px / 2); } .framer-TAqaM .framer-ftb13i > * { margin: 0px; margin-bottom: calc(240px / 2); margin-top: calc(240px / 2); } .framer-TAqaM .framer-m6sp60 > * { margin: 0px; margin-bottom: calc(80px / 2); margin-top: calc(80px / 2); } .framer-TAqaM .framer-po57qo > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } }", `@media (min-width: 768px) and (max-width: 1099px) { .${P.bodyClassName}-framer-TAqaM { background: var(--token-e16847f2-b192-48e1-a890-7bbcce11cc6e, rgb(255, 255, 255)) /* {"name":"Primary / White"} */; } .framer-TAqaM.framer-72rtr7 { width: 768px; } .framer-TAqaM .framer-nwve3s { gap: 0px; padding: 160px 64px 160px 64px; } .framer-TAqaM .framer-ftb13i { gap: 120px; } .framer-TAqaM .framer-2ibz2h { grid-auto-rows: 450px; } .framer-TAqaM .framer-r5ebzq-container { height: 450px; } .framer-TAqaM .framer-17j58gd-container { height: auto; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-TAqaM .framer-nwve3s, .framer-TAqaM .framer-ftb13i { gap: 0px; } .framer-TAqaM .framer-nwve3s > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-TAqaM .framer-nwve3s > :first-child, .framer-TAqaM .framer-ftb13i > :first-child { margin-top: 0px; } .framer-TAqaM .framer-nwve3s > :last-child, .framer-TAqaM .framer-ftb13i > :last-child { margin-bottom: 0px; } .framer-TAqaM .framer-ftb13i > * { margin: 0px; margin-bottom: calc(120px / 2); margin-top: calc(120px / 2); } }}`, `@media (max-width: 767px) { .${P.bodyClassName}-framer-TAqaM { background: var(--token-e16847f2-b192-48e1-a890-7bbcce11cc6e, rgb(255, 255, 255)) /* {"name":"Primary / White"} */; } .framer-TAqaM.framer-72rtr7 { width: 390px; } .framer-TAqaM .framer-nwve3s { gap: 0px; padding: 120px 16px 160px 16px; } .framer-TAqaM .framer-ftb13i { gap: 80px; } .framer-TAqaM .framer-m6sp60 { gap: 48px; } .framer-TAqaM .framer-2ibz2h { grid-auto-rows: 300px; grid-template-columns: repeat(1, minmax(200px, 1fr)); } .framer-TAqaM .framer-r5ebzq-container { height: 300px; } .framer-TAqaM .framer-17j58gd-container { height: auto; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-TAqaM .framer-nwve3s, .framer-TAqaM .framer-ftb13i, .framer-TAqaM .framer-m6sp60 { gap: 0px; } .framer-TAqaM .framer-nwve3s > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-TAqaM .framer-nwve3s > :first-child, .framer-TAqaM .framer-ftb13i > :first-child, .framer-TAqaM .framer-m6sp60 > :first-child { margin-top: 0px; } .framer-TAqaM .framer-nwve3s > :last-child, .framer-TAqaM .framer-ftb13i > :last-child, .framer-TAqaM .framer-m6sp60 > :last-child { margin-bottom: 0px; } .framer-TAqaM .framer-ftb13i > * { margin: 0px; margin-bottom: calc(80px / 2); margin-top: calc(80px / 2); } .framer-TAqaM .framer-m6sp60 > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } }}`, ...ne]
    , y = W(Ee, Re, "framer-TAqaM")
    , ir = y;
y.displayName = "Home";
y.defaultProps = {
    height: 4478,
    width: 1100
};
re(y, [{
    explicitInter: !0,
    fonts: [{
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
        url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
        url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+1F00-1FFF",
        url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0370-03FF",
        url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
        url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
        url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
        weight: "400"
    }, {
        family: "Inter",
        source: "framer",
        style: "normal",
        unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
        url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
        weight: "400"
    }]
}, ...ge, ...xe, ...we, ...ye, ...ae(te)], {
    supportsExplicitInterCodegen: !0
});
var or = {
    exports: {
        default: {
            type: "reactComponent",
            name: "FrameraugiA20Il",
            slots: [],
            annotations: {
                framerIntrinsicWidth: "1100",
                framerImmutableVariables: "true",
                framerIntrinsicHeight: "4478",
                framerComponentViewportWidth: "true",
                framerContractVersion: "1",
                framerDisplayContentsDiv: "false",
                framerResponsiveScreen: "",
                framerCanvasComponentVariantDetails: '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"pI9W_PNdI":{"layout":["fixed","auto"]},"VnGzoQNds":{"layout":["fixed","auto"]}}}'
            }
        },
        Props: {
            type: "tsType",
            annotations: {
                framerContractVersion: "1"
            }
        },
        __FramerMetadata__: {
            type: "variable"
        }
    }
};
export {or as __FramerMetadata__, ir as default};
//# sourceMappingURL=xLNJWUGz4eu-yPxq0xLaCyDLGSoUTbT_yaczv1fpE7w.43LTJSHU.mjs.map
