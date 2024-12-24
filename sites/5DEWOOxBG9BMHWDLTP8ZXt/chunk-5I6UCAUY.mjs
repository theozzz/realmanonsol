import {B as P, F as x, I as F, J as w, K as ke, L as W, M as z, P as q, W as Q, b as y, d as I, da as Le, f as R, h as j, ia as M, j as V, ja as U, k as N, ka as _e, la as K, n as e, na as de, o as G, oa as ee, p as h, pa as D, q as o, qa as E, r as L, ra as pe} from "./chunk-PUHG2OFZ.mjs";
U.loadWebFontsFromSelectors(["GF;Manrope-500", "GF;Manrope-700"]);
var Ie = [{
    family: "Manrope",
    style: "normal",
    url: "https://fonts.gstatic.com/s/manrope/v15/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk7PFO_A87jxeN7B.woff2",
    weight: "500"
}, {
    family: "Manrope",
    style: "normal",
    url: "https://fonts.gstatic.com/s/manrope/v15/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4aE-_A87jxeN7B.woff2",
    weight: "700"
}]
    , Re = ['.framer-CD6CA .framer-styles-preset-zcx1yu:not(.rich-text-wrapper), .framer-CD6CA .framer-styles-preset-zcx1yu.rich-text-wrapper h1 { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-size: 64px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-be079bad-eabd-4234-8a56-5579c7057187, #000000); --framer-text-decoration: none; --framer-text-transform: none; }', '@media (max-width: 1099px) and (min-width: 768px) { .framer-CD6CA .framer-styles-preset-zcx1yu:not(.rich-text-wrapper), .framer-CD6CA .framer-styles-preset-zcx1yu.rich-text-wrapper h1 { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-size: 52px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-be079bad-eabd-4234-8a56-5579c7057187, #000000); --framer-text-decoration: none; --framer-text-transform: none; } }', '@media (max-width: 767px) and (min-width: 0px) { .framer-CD6CA .framer-styles-preset-zcx1yu:not(.rich-text-wrapper), .framer-CD6CA .framer-styles-preset-zcx1yu.rich-text-wrapper h1 { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-size: 32px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-be079bad-eabd-4234-8a56-5579c7057187, #000000); --framer-text-decoration: none; --framer-text-transform: none; } }']
    , je = "framer-CD6CA";
var Se = ["lbnGsbzWa", "LQkQ3Cw9q"];
var Ke = {
    lbnGsbzWa: "framer-v-fdjns5",
    LQkQ3Cw9q: "framer-v-1amdk14"
};
function Ve(a, ...r) {
    let n = {};
    return r?.forEach(t => t && Object.assign(n, a[t])),
        n
}
var ze = {
    default: {
        damping: 60,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: "spring"
    }
}
    , Te = ({value: a, children: r}) => {
    let n = R(h)
        , t = a ?? n.transition
        , s = V( () => ({
        ...n,
        transition: t
    }), [JSON.stringify(t)]);
    return e(h.Provider, {
        value: s,
        children: r
    })
}
    , Oe = {
    "Variant 1": "lbnGsbzWa",
    "Variant 2": "LQkQ3Cw9q"
}
    , Be = ({height: a, id: r, width: n, ...t}) => {
    var s, i;
    return {
        ...t,
        variant: (i = (s = Oe[t.variant]) !== null && s !== void 0 ? s : t.variant) !== null && i !== void 0 ? i : "lbnGsbzWa"
    }
}
    , Qe = (a, r) => r.join("-") + a.layoutDependency
    , Ee = I(function(a, r) {
    let {activeLocale: n} = P()
        , {style: t, className: s, layoutId: i, variant: l, ...f} = Be(a)
        , {baseVariant: d, classNames: b, gestureVariant: g, setGestureState: p, setVariant: C, transition: u, variants: k} = M({
        cycleOrder: Se,
        defaultVariant: "lbnGsbzWa",
        transitions: ze,
        variant: l,
        variantClassNames: Ke
    })
        , _ = Qe(a, k)
        , H = N(null)
        , v = j();
    return e(L, {
        id: i ?? v,
        children: e(o.div, {
            initial: l,
            animate: k,
            onHoverStart: () => p({
                isHovered: !0
            }),
            onHoverEnd: () => p({
                isHovered: !1
            }),
            onTapStart: () => p({
                isPressed: !0
            }),
            onTap: () => p({
                isPressed: !1
            }),
            onTapCancel: () => p({
                isPressed: !1
            }),
            className: w("framer-PDddq", b),
            style: {
                display: "contents"
            },
            children: e(Te, {
                value: u,
                children: e(o.div, {
                    ...f,
                    className: w("framer-fdjns5", s),
                    "data-framer-name": "Variant 1",
                    layoutDependency: _,
                    layoutId: "lbnGsbzWa",
                    ref: r ?? H,
                    style: {
                        ...t
                    },
                    ...Ve({
                        LQkQ3Cw9q: {
                            "data-framer-name": "Variant 2"
                        }
                    }, d, g),
                    children: e(de, {
                        className: "framer-6g0lxz",
                        "data-framer-name": "Arrow",
                        layout: "position",
                        layoutDependency: _,
                        layoutId: "kmPsrPvL7",
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><path d="M 13.667 1.583 L 4 1.583 C 3.586 1.583 3.25 1.919 3.25 2.333 C 3.25 2.747 3.586 3.083 4 3.083 L 11.856 3.083 L 1.803 13.136 C 1.51 13.429 1.51 13.904 1.803 14.197 C 2.096 14.49 2.571 14.49 2.864 14.197 L 12.917 4.144 L 12.917 12 C 12.917 12.414 13.252 12.75 13.667 12.75 C 14.081 12.75 14.417 12.414 14.417 12 L 14.417 2.333 C 14.417 1.919 14.081 1.583 13.667 1.583 Z" fill="var(--token-be079bad-eabd-4234-8a56-5579c7057187, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Primary / Black&quot;} */"></path></svg>',
                        svgContentId: 1342450132,
                        withExternalLayout: !0,
                        ...Ve({
                            LQkQ3Cw9q: {
                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><path d="M 13.667 1.583 L 4 1.583 C 3.586 1.583 3.25 1.919 3.25 2.333 C 3.25 2.747 3.586 3.083 4 3.083 L 11.856 3.083 L 1.803 13.136 C 1.51 13.429 1.51 13.904 1.803 14.197 C 2.096 14.49 2.571 14.49 2.864 14.197 L 12.917 4.144 L 12.917 12 C 12.917 12.414 13.252 12.75 13.667 12.75 C 14.081 12.75 14.417 12.414 14.417 12 L 14.417 2.333 C 14.417 1.919 14.081 1.583 13.667 1.583 Z" fill="var(--token-e16847f2-b192-48e1-a890-7bbcce11cc6e, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;Primary / White&quot;} */"></path></svg>',
                                svgContentId: 318331668
                            }
                        }, d, g)
                    })
                })
            })
        })
    })
})
    , Ze = ['.framer-PDddq [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-PDddq .framer-fe6ctj { display: block; }", ".framer-PDddq .framer-fdjns5 { height: 16px; overflow: hidden; position: relative; width: 16px; }", ".framer-PDddq .framer-6g0lxz { flex: none; height: 16px; left: 0px; position: absolute; top: 0px; width: 16px; }"]
    , re = q(Ee, Ze, "framer-PDddq")
    , ue = re;
re.displayName = "Icon Arrow",
    re.defaultProps = {
        height: 16,
        width: 16
    },
    F(re, {
        variant: {
            options: ["lbnGsbzWa", "LQkQ3Cw9q"],
            optionTitles: ["Variant 1", "Variant 2"],
            title: "Variant",
            type: x.Enum
        }
    }),
    D(re, []);
var Ye = E(ue)
    , We = {
    cmQsGoNxI: {
        hover: !0
    },
    DY9uGg3Qz: {
        hover: !0
    }
}
    , Ue = ["cmQsGoNxI", "DY9uGg3Qz"]
    , Xe = "framer-nRPZV"
    , Je = {
    cmQsGoNxI: "framer-v-1whgvtw",
    DY9uGg3Qz: "framer-v-16o4804"
};
function he(a, ...r) {
    let n = {};
    return r?.forEach(t => t && Object.assign(n, a[t])),
        n
}
var $e = {
    damping: 100,
    delay: 0,
    mass: 1,
    stiffness: 1e3,
    type: "spring"
}
    , er = ({value: a, children: r}) => {
    let n = R(h)
        , t = a ?? n.transition
        , s = V( () => ({
        ...n,
        transition: t
    }), [JSON.stringify(t)]);
    return e(h.Provider, {
        value: s,
        children: r
    })
}
    , rr = o.create(y)
    , ar = {
    Primary: "cmQsGoNxI",
    Secondary: "DY9uGg3Qz"
}
    , tr = ({height: a, id: r, link: n, title: t, width: s, ...i}) => {
    var l, f, d;
    return {
        ...i,
        bohRFuhqj: n ?? i.bohRFuhqj,
        i7oFluX4k: (l = t ?? i.i7oFluX4k) !== null && l !== void 0 ? l : "All Projects",
        variant: (d = (f = ar[i.variant]) !== null && f !== void 0 ? f : i.variant) !== null && d !== void 0 ? d : "cmQsGoNxI"
    }
}
    , nr = (a, r) => a.layoutDependency ? r.join("-") + a.layoutDependency : r.join("-")
    , or = I(function(a, r) {
    let {activeLocale: n, setLocale: t} = P()
        , {style: s, className: i, layoutId: l, variant: f, i7oFluX4k: d, bohRFuhqj: b, ...g} = tr(a)
        , {baseVariant: p, classNames: C, clearLoadingGesture: u, gestureHandlers: k, gestureVariant: _, isLoading: H, setGestureState: v, setVariant: c, variants: A} = M({
        cycleOrder: Ue,
        defaultVariant: "cmQsGoNxI",
        enabledGestures: We,
        variant: f,
        variantClassNames: Je
    })
        , S = nr(a, A)
        , Z = N(null)
        , m = j()
        , ce = []
        , Ce = W();
    return e(L, {
        id: l ?? m,
        children: e(rr, {
            animate: A,
            initial: !1,
            children: e(er, {
                value: $e,
                children: e(Q, {
                    href: b,
                    nodeId: "cmQsGoNxI",
                    openInNewTab: !1,
                    children: G(o.a, {
                        ...g,
                        ...k,
                        className: `${w(Xe, ...ce, "framer-1whgvtw", i, C)} framer-1gdlr2s`,
                        "data-border": !0,
                        "data-framer-name": "Primary",
                        layoutDependency: S,
                        layoutId: "cmQsGoNxI",
                        ref: r ?? Z,
                        style: {
                            "--border-bottom-width": "1px",
                            "--border-color": "rgba(0, 0, 0, 0)",
                            "--border-left-width": "1px",
                            "--border-right-width": "1px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                            backgroundColor: "var(--token-be079bad-eabd-4234-8a56-5579c7057187, rgb(0, 0, 0))",
                            borderBottomLeftRadius: 64,
                            borderBottomRightRadius: 64,
                            borderTopLeftRadius: 64,
                            borderTopRightRadius: 64,
                            ...s
                        },
                        variants: {
                            "cmQsGoNxI-hover": {
                                "--border-color": "rgb(0, 0, 0)",
                                backgroundColor: "var(--token-e16847f2-b192-48e1-a890-7bbcce11cc6e, rgb(255, 255, 255))"
                            },
                            "DY9uGg3Qz-hover": {
                                "--border-color": "rgb(0, 0, 0)",
                                backgroundColor: "var(--token-e16847f2-b192-48e1-a890-7bbcce11cc6e, rgb(255, 255, 255))"
                            },
                            DY9uGg3Qz: {
                                backgroundColor: "var(--token-2c7d0c40-26e8-40d8-9000-c8a4ae165651, rgb(240, 240, 240))"
                            }
                        },
                        ...he({
                            "cmQsGoNxI-hover": {
                                "data-framer-name": void 0
                            },
                            "DY9uGg3Qz-hover": {
                                "data-framer-name": void 0
                            },
                            DY9uGg3Qz: {
                                "data-framer-name": "Secondary"
                            }
                        }, p, _),
                        children: [e(K, {
                            __fromCanvasComponent: !0,
                            children: e(y, {
                                children: e(o.h4, {
                                    style: {
                                        "--font-selector": "R0Y7TWFucm9wZS01MDA=",
                                        "--framer-font-family": '"Manrope", "Manrope Placeholder", sans-serif',
                                        "--framer-font-size": "10px",
                                        "--framer-font-weight": "500",
                                        "--framer-line-height": "1.4em",
                                        "--framer-text-alignment": "left",
                                        "--framer-text-color": "var(--extracted-1eung3n, var(--token-e16847f2-b192-48e1-a890-7bbcce11cc6e, rgb(255, 255, 255)))"
                                    },
                                    children: "All Projects"
                                })
                            }),
                            className: "framer-1jx58dg",
                            fonts: ["GF;Manrope-500"],
                            layoutDependency: S,
                            layoutId: "YIrltqJeK",
                            style: {
                                "--extracted-1eung3n": "var(--token-e16847f2-b192-48e1-a890-7bbcce11cc6e, rgb(255, 255, 255))"
                            },
                            text: d,
                            variants: {
                                "cmQsGoNxI-hover": {
                                    "--extracted-1eung3n": "var(--token-be079bad-eabd-4234-8a56-5579c7057187, rgb(0, 0, 0))"
                                },
                                DY9uGg3Qz: {
                                    "--extracted-1eung3n": "var(--token-be079bad-eabd-4234-8a56-5579c7057187, rgb(0, 0, 0))"
                                }
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                            ...he({
                                "cmQsGoNxI-hover": {
                                    children: e(y, {
                                        children: e(o.h4, {
                                            style: {
                                                "--font-selector": "R0Y7TWFucm9wZS01MDA=",
                                                "--framer-font-family": '"Manrope", "Manrope Placeholder", sans-serif',
                                                "--framer-font-size": "10px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "1.4em",
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--extracted-1eung3n, var(--token-be079bad-eabd-4234-8a56-5579c7057187, rgb(0, 0, 0)))"
                                            },
                                            children: "All Projects"
                                        })
                                    })
                                },
                                DY9uGg3Qz: {
                                    children: e(y, {
                                        children: e(o.h4, {
                                            style: {
                                                "--font-selector": "R0Y7TWFucm9wZS01MDA=",
                                                "--framer-font-family": '"Manrope", "Manrope Placeholder", sans-serif',
                                                "--framer-font-size": "10px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "1.4em",
                                                "--framer-text-alignment": "left",
                                                "--framer-text-color": "var(--extracted-1eung3n, var(--token-be079bad-eabd-4234-8a56-5579c7057187, rgb(0, 0, 0)))"
                                            },
                                            children: "All Projects"
                                        })
                                    })
                                }
                            }, p, _)
                        }), e(z, {
                            children: e(o.div, {
                                className: "framer-1u4mo67-container",
                                layoutDependency: S,
                                layoutId: "v6zaLaLEp-container",
                                style: {
                                    rotate: 0
                                },
                                variants: {
                                    "cmQsGoNxI-hover": {
                                        rotate: 45
                                    },
                                    "DY9uGg3Qz-hover": {
                                        rotate: 45
                                    }
                                },
                                children: e(ue, {
                                    height: "100%",
                                    id: "v6zaLaLEp",
                                    layoutId: "v6zaLaLEp",
                                    style: {
                                        height: "100%",
                                        width: "100%"
                                    },
                                    variant: "LQkQ3Cw9q",
                                    width: "100%",
                                    ...he({
                                        "cmQsGoNxI-hover": {
                                            variant: "lbnGsbzWa"
                                        },
                                        DY9uGg3Qz: {
                                            variant: "lbnGsbzWa"
                                        }
                                    }, p, _)
                                })
                            })
                        })]
                    })
                })
            })
        })
    })
})
    , ir = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-nRPZV.framer-1gdlr2s, .framer-nRPZV .framer-1gdlr2s { display: block; }", ".framer-nRPZV.framer-1whgvtw { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 16px 32px 16px 32px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-nRPZV .framer-1jx58dg { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-nRPZV .framer-1u4mo67-container { flex: none; height: 16px; position: relative; width: 16px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-nRPZV.framer-1whgvtw { gap: 0px; } .framer-nRPZV.framer-1whgvtw > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-nRPZV.framer-1whgvtw > :first-child { margin-left: 0px; } .framer-nRPZV.framer-1whgvtw > :last-child { margin-right: 0px; } }", '.framer-nRPZV[data-border="true"]::after, .framer-nRPZV [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }']
    , ae = q(or, ir, "framer-nRPZV")
    , xe = ae;
ae.displayName = "Button Icon";
ae.defaultProps = {
    height: 48,
    width: 141
};
F(ae, {
    variant: {
        options: ["cmQsGoNxI", "DY9uGg3Qz"],
        optionTitles: ["Primary", "Secondary"],
        title: "Variant",
        type: x.Enum
    },
    i7oFluX4k: {
        defaultValue: "All Projects",
        displayTextArea: !1,
        title: "Title",
        type: x.String
    },
    bohRFuhqj: {
        title: "Link",
        type: x.Link
    }
});
D(ae, [{
    explicitInter: !0,
    fonts: [{
        family: "Manrope",
        source: "google",
        style: "normal",
        url: "https://fonts.gstatic.com/s/manrope/v15/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk7PFO_A87jxeN7B.woff2",
        weight: "500"
    }]
}, ...Ye], {
    supportsExplicitInterCodegen: !0
});
U.loadWebFontsFromSelectors(["GF;Manrope-500", "GF;Manrope-700"]);
var Ne = [{
    family: "Manrope",
    moduleAsset: {
        localModuleIdentifier: "local-module:css/JG4rYVHpN:default",
        url: "https://fonts.gstatic.com/s/manrope/v15/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk7PFO_F87jxeN7B.ttf"
    },
    style: "normal",
    url: "https://fonts.gstatic.com/s/manrope/v15/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk7PFO_F87jxeN7B.ttf",
    weight: "500"
}, {
    family: "Manrope",
    moduleAsset: {
        localModuleIdentifier: "local-module:css/JG4rYVHpN:default",
        url: "https://fonts.gstatic.com/s/manrope/v15/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4aE-_F87jxeN7B.ttf"
    },
    style: "normal",
    url: "https://fonts.gstatic.com/s/manrope/v15/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4aE-_F87jxeN7B.ttf",
    weight: "700"
}]
    , Pe = ['.framer-0hOBL .framer-styles-preset-1mdord3:not(.rich-text-wrapper), .framer-0hOBL .framer-styles-preset-1mdord3.rich-text-wrapper p { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-be079bad-eabd-4234-8a56-5579c7057187, #000000); --framer-text-decoration: none; --framer-text-transform: none; }']
    , Fe = "framer-0hOBL";
U.loadWebFontsFromSelectors(["GF;Manrope-500", "GF;Manrope-700"]);
var X = [{
    family: "Manrope",
    style: "normal",
    url: "https://fonts.gstatic.com/s/manrope/v15/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk7PFO_A87jxeN7B.woff2",
    weight: "500"
}, {
    family: "Manrope",
    style: "normal",
    url: "https://fonts.gstatic.com/s/manrope/v15/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4aE-_A87jxeN7B.woff2",
    weight: "700"
}]
    , J = ['.framer-RdwZM .framer-styles-preset-1xo5nk6:not(.rich-text-wrapper), .framer-RdwZM .framer-styles-preset-1xo5nk6.rich-text-wrapper h4 { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-be079bad-eabd-4234-8a56-5579c7057187, #000000); --framer-text-decoration: none; --framer-text-transform: none; }']
    , $ = "framer-RdwZM";
var lr = ["lbnGsbzWa", "LQkQ3Cw9q"];
var mr = {
    lbnGsbzWa: "framer-v-fdjns5",
    LQkQ3Cw9q: "framer-v-1amdk14"
};
function qe(a, ...r) {
    let n = {};
    return r?.forEach(t => t && Object.assign(n, a[t])),
        n
}
var dr = {
    default: {
        damping: 60,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: "spring"
    }
}
    , fr = ({value: a, children: r}) => {
    let n = R(h)
        , t = a ?? n.transition
        , s = V( () => ({
        ...n,
        transition: t
    }), [JSON.stringify(t)]);
    return e(h.Provider, {
        value: s,
        children: r
    })
}
    , cr = {
    "Variant 1": "lbnGsbzWa",
    "Variant 2": "LQkQ3Cw9q"
}
    , pr = ({height: a, id: r, width: n, ...t}) => {
    var s, i;
    return {
        ...t,
        variant: (i = (s = cr[t.variant]) !== null && s !== void 0 ? s : t.variant) !== null && i !== void 0 ? i : "lbnGsbzWa"
    }
}
    , ur = (a, r) => r.join("-") + a.layoutDependency
    , hr = I(function(a, r) {
    let {activeLocale: n} = P()
        , {style: t, className: s, layoutId: i, variant: l, ...f} = pr(a)
        , {baseVariant: d, classNames: b, gestureVariant: g, setGestureState: p, setVariant: C, transition: u, variants: k} = M({
        cycleOrder: lr,
        defaultVariant: "lbnGsbzWa",
        transitions: dr,
        variant: l,
        variantClassNames: mr
    })
        , _ = ur(a, k)
        , H = N(null)
        , v = j();
    return e(L, {
        id: i ?? v,
        children: e(o.div, {
            initial: l,
            animate: k,
            onHoverStart: () => p({
                isHovered: !0
            }),
            onHoverEnd: () => p({
                isHovered: !1
            }),
            onTapStart: () => p({
                isPressed: !0
            }),
            onTap: () => p({
                isPressed: !1
            }),
            onTapCancel: () => p({
                isPressed: !1
            }),
            className: w("framer-PDddq", b),
            style: {
                display: "contents"
            },
            children: e(fr, {
                value: u,
                children: e(o.div, {
                    ...f,
                    className: w("framer-fdjns5", s),
                    "data-framer-name": "Variant 1",
                    layoutDependency: _,
                    layoutId: "lbnGsbzWa",
                    ref: r ?? H,
                    style: {
                        ...t
                    },
                    ...qe({
                        LQkQ3Cw9q: {
                            "data-framer-name": "Variant 2"
                        }
                    }, d, g),
                    children: e(de, {
                        className: "framer-6g0lxz",
                        "data-framer-name": "Arrow",
                        layout: "position",
                        layoutDependency: _,
                        layoutId: "kmPsrPvL7",
                        opacity: 1,
                        svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><path d="M 13.667 1.583 L 4 1.583 C 3.586 1.583 3.25 1.919 3.25 2.333 C 3.25 2.747 3.586 3.083 4 3.083 L 11.856 3.083 L 1.803 13.136 C 1.51 13.429 1.51 13.904 1.803 14.197 C 2.096 14.49 2.571 14.49 2.864 14.197 L 12.917 4.144 L 12.917 12 C 12.917 12.414 13.252 12.75 13.667 12.75 C 14.081 12.75 14.417 12.414 14.417 12 L 14.417 2.333 C 14.417 1.919 14.081 1.583 13.667 1.583 Z" fill="var(--token-be079bad-eabd-4234-8a56-5579c7057187, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Primary / Black&quot;} */"></path></svg>',
                        svgContentId: 1342450132,
                        withExternalLayout: !0,
                        ...qe({
                            LQkQ3Cw9q: {
                                svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><path d="M 13.667 1.583 L 4 1.583 C 3.586 1.583 3.25 1.919 3.25 2.333 C 3.25 2.747 3.586 3.083 4 3.083 L 11.856 3.083 L 1.803 13.136 C 1.51 13.429 1.51 13.904 1.803 14.197 C 2.096 14.49 2.571 14.49 2.864 14.197 L 12.917 4.144 L 12.917 12 C 12.917 12.414 13.252 12.75 13.667 12.75 C 14.081 12.75 14.417 12.414 14.417 12 L 14.417 2.333 C 14.417 1.919 14.081 1.583 13.667 1.583 Z" fill="var(--token-e16847f2-b192-48e1-a890-7bbcce11cc6e, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;Primary / White&quot;} */"></path></svg>',
                                svgContentId: 318331668
                            }
                        }, d, g)
                    })
                })
            })
        })
    })
})
    , xr = ['.framer-PDddq [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-PDddq .framer-fe6ctj { display: block; }", ".framer-PDddq .framer-fdjns5 { height: 16px; overflow: hidden; position: relative; width: 16px; }", ".framer-PDddq .framer-6g0lxz { flex: none; height: 16px; left: 0px; position: absolute; top: 0px; width: 16px; }"]
    , te = q(hr, xr, "framer-PDddq")
    , ge = te;
te.displayName = "Icon Arrow",
    te.defaultProps = {
        height: 16,
        width: 16
    },
    F(te, {
        variant: {
            options: ["lbnGsbzWa", "LQkQ3Cw9q"],
            optionTitles: ["Variant 1", "Variant 2"],
            title: "Variant",
            type: x.Enum
        }
    }),
    D(te, []);
var yr = E(ge)
    , gr = {
    F3FJrZjum: {
        hover: !0
    },
    KYiBMLCOW: {
        hover: !0
    }
}
    , vr = ["F3FJrZjum", "KYiBMLCOW"];
var br = {
    F3FJrZjum: "framer-v-1ih8gnh",
    KYiBMLCOW: "framer-v-2b7hs3"
};
function ve(a, ...r) {
    let n = {};
    return r?.forEach(t => t && Object.assign(n, a[t])),
        n
}
var wr = {
    default: {
        damping: 60,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: "spring"
    }
}
    , Cr = ({value: a, children: r}) => {
    let n = R(h)
        , t = a ?? n.transition
        , s = V( () => ({
        ...n,
        transition: t
    }), [JSON.stringify(t)]);
    return e(h.Provider, {
        value: s,
        children: r
    })
}
    , kr = {
    "Black Text": "KYiBMLCOW",
    "White Text": "F3FJrZjum"
}
    , Lr = ({height: a, id: r, itemName: n, link: t, width: s, ...i}) => {
    var l, f, d;
    return {
        ...i,
        kImcoGSg6: (l = n ?? i.kImcoGSg6) !== null && l !== void 0 ? l : "Item Name",
        uhsfYPXHm: t ?? i.uhsfYPXHm,
        variant: (d = (f = kr[i.variant]) !== null && f !== void 0 ? f : i.variant) !== null && d !== void 0 ? d : "F3FJrZjum"
    }
}
    , _r = (a, r) => r.join("-") + a.layoutDependency
    , Ir = I(function(a, r) {
    let {activeLocale: n} = P()
        , {style: t, className: s, layoutId: i, variant: l, kImcoGSg6: f, uhsfYPXHm: d, ...b} = Lr(a)
        , {baseVariant: g, classNames: p, gestureVariant: C, setGestureState: u, setVariant: k, transition: _, variants: H} = M({
        cycleOrder: vr,
        defaultVariant: "F3FJrZjum",
        enabledGestures: gr,
        transitions: wr,
        variant: l,
        variantClassNames: br
    })
        , v = _r(a, H)
        , c = N(null)
        , A = j()
        , S = [$];
    return e(L, {
        id: i ?? A,
        children: e(o.div, {
            initial: l,
            animate: H,
            onHoverStart: () => u({
                isHovered: !0
            }),
            onHoverEnd: () => u({
                isHovered: !1
            }),
            onTapStart: () => u({
                isPressed: !0
            }),
            onTap: () => u({
                isPressed: !1
            }),
            onTapCancel: () => u({
                isPressed: !1
            }),
            className: w("framer-A5H8Z", ...S, p),
            style: {
                display: "contents"
            },
            children: e(Cr, {
                value: _,
                children: e(Q, {
                    href: d,
                    openInNewTab: !0,
                    children: G(o.a, {
                        ...b,
                        className: `${w("framer-1ih8gnh", s)} framer-1fw7iow`,
                        "data-framer-name": "White Text",
                        layoutDependency: v,
                        layoutId: "F3FJrZjum",
                        ref: r ?? c,
                        style: {
                            ...t
                        },
                        ...ve({
                            "F3FJrZjum-hover": {
                                "data-framer-name": void 0
                            },
                            "KYiBMLCOW-hover": {
                                "data-framer-name": void 0
                            },
                            KYiBMLCOW: {
                                "data-framer-name": "Black Text"
                            }
                        }, g, C),
                        children: [e(K, {
                            __fromCanvasComponent: !0,
                            children: e(y, {
                                children: e(o.h4, {
                                    className: "framer-styles-preset-1xo5nk6",
                                    "data-styles-preset": "bmgtGAtvT",
                                    style: {
                                        "--framer-text-color": "var(--extracted-1eung3n, var(--token-e16847f2-b192-48e1-a890-7bbcce11cc6e, rgb(255, 255, 255)))"
                                    },
                                    children: "Item Name"
                                })
                            }),
                            className: "framer-9uhey9",
                            "data-framer-name": "Text",
                            layoutDependency: v,
                            layoutId: "uh9_GKqDR",
                            style: {
                                "--extracted-1eung3n": "var(--token-e16847f2-b192-48e1-a890-7bbcce11cc6e, rgb(255, 255, 255))",
                                "--framer-paragraph-spacing": "0px",
                                opacity: 1
                            },
                            text: f,
                            variants: {
                                "F3FJrZjum-hover": {
                                    opacity: .5
                                },
                                "KYiBMLCOW-hover": {
                                    opacity: .5
                                },
                                KYiBMLCOW: {
                                    "--extracted-1eung3n": "var(--token-be079bad-eabd-4234-8a56-5579c7057187, rgb(0, 0, 0))"
                                }
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                            ...ve({
                                KYiBMLCOW: {
                                    children: e(y, {
                                        children: e(o.h4, {
                                            className: "framer-styles-preset-1xo5nk6",
                                            "data-styles-preset": "bmgtGAtvT",
                                            style: {
                                                "--framer-text-color": "var(--extracted-1eung3n, var(--token-be079bad-eabd-4234-8a56-5579c7057187, rgb(0, 0, 0)))"
                                            },
                                            children: "Item Name"
                                        })
                                    })
                                }
                            }, g, C)
                        }), e(o.div, {
                            className: "framer-h846au-container",
                            layoutDependency: v,
                            layoutId: "t_qyR_5Ax-container",
                            style: {
                                opacity: 1,
                                rotate: 0
                            },
                            variants: {
                                "F3FJrZjum-hover": {
                                    opacity: .5,
                                    rotate: 45
                                },
                                "KYiBMLCOW-hover": {
                                    opacity: .5,
                                    rotate: 45
                                }
                            },
                            children: e(ge, {
                                height: "100%",
                                id: "t_qyR_5Ax",
                                layoutId: "t_qyR_5Ax",
                                style: {
                                    height: "100%",
                                    width: "100%"
                                },
                                variant: "LQkQ3Cw9q",
                                width: "100%",
                                ...ve({
                                    KYiBMLCOW: {
                                        variant: "lbnGsbzWa"
                                    }
                                }, g, C)
                            })
                        })]
                    })
                })
            })
        })
    })
})
    , Rr = ['.framer-A5H8Z [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-A5H8Z .framer-1fw7iow { display: block; }", ".framer-A5H8Z .framer-1ih8gnh { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; text-decoration: none; width: 208px; }", ".framer-A5H8Z .framer-9uhey9 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", ".framer-A5H8Z .framer-h846au-container { flex: none; height: 16px; position: relative; width: 16px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-A5H8Z .framer-1ih8gnh { gap: 0px; } .framer-A5H8Z .framer-1ih8gnh > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-A5H8Z .framer-1ih8gnh > :first-child { margin-left: 0px; } .framer-A5H8Z .framer-1ih8gnh > :last-child { margin-right: 0px; } }", ".framer-A5H8Z.framer-v-1ih8gnh.hover .framer-9uhey9 { order: 0; }", ".framer-A5H8Z.framer-v-1ih8gnh.hover .framer-h846au-container { order: 1; }", ...J]
    , ne = q(Ir, Rr, "framer-A5H8Z")
    , fe = ne;
ne.displayName = "Link Item";
ne.defaultProps = {
    height: 25,
    width: 208
};
F(ne, {
    variant: {
        options: ["F3FJrZjum", "KYiBMLCOW"],
        optionTitles: ["White Text", "Black Text"],
        title: "Variant",
        type: x.Enum
    },
    kImcoGSg6: {
        defaultValue: "Item Name",
        displayTextArea: !1,
        placeholder: "Item Name",
        title: "Item Name",
        type: x.String
    },
    uhsfYPXHm: {
        title: "Link",
        type: x.Link
    }
});
D(ne, [...yr, ...X]);
var jr = {
    KBdv3NY6j: {
        hover: !0
    },
    ozmAfnq57: {
        hover: !0
    }
}
    , Vr = ["KBdv3NY6j", "ozmAfnq57", "ybjGpveSk"];
var Nr = {
    KBdv3NY6j: "framer-v-z9xqj5",
    ozmAfnq57: "framer-v-cfpvdy",
    ybjGpveSk: "framer-v-qaq35h"
};
function be(a, ...r) {
    let n = {};
    return r?.forEach(t => t && Object.assign(n, a[t])),
        n
}
var Pr = {
    default: {
        delay: 0,
        duration: .2,
        ease: [.12, .23, .5, 1],
        type: "tween"
    }
}
    , Fr = ({value: a, children: r}) => {
    let n = R(h)
        , t = a ?? n.transition
        , s = V( () => ({
        ...n,
        transition: t
    }), [JSON.stringify(t)]);
    return e(h.Provider, {
        value: s,
        children: r
    })
}
    , qr = {
    "Black Desktop": "KBdv3NY6j",
    "Black Mobile": "ybjGpveSk",
    White: "ozmAfnq57"
}
    , Mr = ({height: a, id: r, link: n, title: t, width: s, ...i}) => {
    var l, f, d;
    return {
        ...i,
        diiPXt8iL: (l = t ?? i.diiPXt8iL) !== null && l !== void 0 ? l : "Link",
        nROLtrc_N: n ?? i.nROLtrc_N,
        variant: (d = (f = qr[i.variant]) !== null && f !== void 0 ? f : i.variant) !== null && d !== void 0 ? d : "KBdv3NY6j"
    }
}
    , Dr = (a, r) => r.join("-") + a.layoutDependency
    , Gr = I(function(a, r) {
    let {activeLocale: n} = P()
        , {style: t, className: s, layoutId: i, variant: l, diiPXt8iL: f, nROLtrc_N: d, ...b} = Mr(a)
        , {baseVariant: g, classNames: p, gestureVariant: C, setGestureState: u, setVariant: k, transition: _, variants: H} = M({
        cycleOrder: Vr,
        defaultVariant: "KBdv3NY6j",
        enabledGestures: jr,
        transitions: Pr,
        variant: l,
        variantClassNames: Nr
    })
        , v = Dr(a, H)
        , c = N(null)
        , A = () => g !== "ybjGpveSk"
        , S = j()
        , Z = [$];
    return e(L, {
        id: i ?? S,
        children: e(o.div, {
            initial: l,
            animate: H,
            onHoverStart: () => u({
                isHovered: !0
            }),
            onHoverEnd: () => u({
                isHovered: !1
            }),
            onTapStart: () => u({
                isPressed: !0
            }),
            onTap: () => u({
                isPressed: !1
            }),
            onTapCancel: () => u({
                isPressed: !1
            }),
            className: w("framer-86E1B", ...Z, p),
            style: {
                display: "contents"
            },
            children: e(Fr, {
                value: _,
                children: e(Q, {
                    href: d,
                    openInNewTab: !1,
                    children: e(o.a, {
                        ...b,
                        className: `${w("framer-z9xqj5", s)} framer-idnakj`,
                        "data-framer-name": "Black Desktop",
                        layoutDependency: v,
                        layoutId: "KBdv3NY6j",
                        ref: r ?? c,
                        style: {
                            ...t
                        },
                        ...be({
                            "KBdv3NY6j-hover": {
                                "data-framer-name": void 0
                            },
                            "ozmAfnq57-hover": {
                                "data-framer-name": void 0
                            },
                            ozmAfnq57: {
                                "data-framer-name": "White"
                            },
                            ybjGpveSk: {
                                "data-framer-name": "Black Mobile"
                            }
                        }, g, C),
                        children: G(o.div, {
                            className: "framer-13vsy8f",
                            layoutDependency: v,
                            layoutId: "uTaarprEM",
                            children: [e(K, {
                                __fromCanvasComponent: !0,
                                children: e(y, {
                                    children: e(o.h4, {
                                        className: "framer-styles-preset-1xo5nk6",
                                        "data-styles-preset": "bmgtGAtvT",
                                        style: {
                                            "--framer-text-color": "var(--extracted-1eung3n, var(--token-be079bad-eabd-4234-8a56-5579c7057187, rgb(0, 0, 0)))"
                                        },
                                        children: "Link"
                                    })
                                }),
                                className: "framer-1nkhyx0",
                                layoutDependency: v,
                                layoutId: "l8AH0FNF0",
                                style: {
                                    "--extracted-1eung3n": "var(--token-be079bad-eabd-4234-8a56-5579c7057187, rgb(0, 0, 0))",
                                    "--framer-paragraph-spacing": "0px"
                                },
                                text: f,
                                variants: {
                                    ozmAfnq57: {
                                        "--extracted-1eung3n": "var(--token-e16847f2-b192-48e1-a890-7bbcce11cc6e, rgb(255, 255, 255))"
                                    }
                                },
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                                ...be({
                                    ozmAfnq57: {
                                        children: e(y, {
                                            children: e(o.h4, {
                                                className: "framer-styles-preset-1xo5nk6",
                                                "data-styles-preset": "bmgtGAtvT",
                                                style: {
                                                    "--framer-text-color": "var(--extracted-1eung3n, var(--token-e16847f2-b192-48e1-a890-7bbcce11cc6e, rgb(255, 255, 255)))"
                                                },
                                                children: "Link"
                                            })
                                        })
                                    }
                                }, g, C)
                            }), A() && e(K, {
                                __fromCanvasComponent: !0,
                                children: e(y, {
                                    children: e(o.h4, {
                                        className: "framer-styles-preset-1xo5nk6",
                                        "data-styles-preset": "bmgtGAtvT",
                                        style: {
                                            "--framer-text-color": "var(--extracted-1eung3n, var(--token-be079bad-eabd-4234-8a56-5579c7057187, rgb(0, 0, 0)))"
                                        },
                                        children: "Link"
                                    })
                                }),
                                className: "framer-18xaqrl",
                                layoutDependency: v,
                                layoutId: "ga4z8AQek",
                                style: {
                                    "--extracted-1eung3n": "var(--token-be079bad-eabd-4234-8a56-5579c7057187, rgb(0, 0, 0))",
                                    "--framer-paragraph-spacing": "0px",
                                    opacity: .6
                                },
                                text: f,
                                variants: {
                                    ozmAfnq57: {
                                        "--extracted-1eung3n": "var(--token-e16847f2-b192-48e1-a890-7bbcce11cc6e, rgb(255, 255, 255))"
                                    }
                                },
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                                ...be({
                                    ozmAfnq57: {
                                        children: e(y, {
                                            children: e(o.h4, {
                                                className: "framer-styles-preset-1xo5nk6",
                                                "data-styles-preset": "bmgtGAtvT",
                                                style: {
                                                    "--framer-text-color": "var(--extracted-1eung3n, var(--token-e16847f2-b192-48e1-a890-7bbcce11cc6e, rgb(255, 255, 255)))"
                                                },
                                                children: "Link"
                                            })
                                        })
                                    }
                                }, g, C)
                            })]
                        })
                    })
                })
            })
        })
    })
})
    , Hr = ['.framer-86E1B [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-86E1B .framer-idnakj { display: block; }", ".framer-86E1B .framer-z9xqj5 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 22px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; text-decoration: none; width: min-content; }", ".framer-86E1B .framer-13vsy8f { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 22px; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }", ".framer-86E1B .framer-1nkhyx0, .framer-86E1B .framer-18xaqrl { flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-86E1B .framer-z9xqj5, .framer-86E1B .framer-13vsy8f { gap: 0px; } .framer-86E1B .framer-z9xqj5 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-86E1B .framer-z9xqj5 > :first-child, .framer-86E1B .framer-13vsy8f > :first-child { margin-top: 0px; } .framer-86E1B .framer-z9xqj5 > :last-child, .framer-86E1B .framer-13vsy8f > :last-child { margin-bottom: 0px; } .framer-86E1B .framer-13vsy8f > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } }", ".framer-86E1B.framer-v-qaq35h .framer-z9xqj5 { cursor: unset; }", ".framer-86E1B.framer-v-z9xqj5.hover .framer-13vsy8f, .framer-86E1B.framer-v-cfpvdy.hover .framer-13vsy8f { justify-content: flex-end; }", ...J]
    , oe = q(Gr, Hr, "framer-86E1B")
    , ie = oe;
oe.displayName = "Text Link";
oe.defaultProps = {
    height: 22,
    width: 34
};
F(oe, {
    variant: {
        options: ["KBdv3NY6j", "ozmAfnq57", "ybjGpveSk"],
        optionTitles: ["Black Desktop", "White", "Black Mobile"],
        title: "Variant",
        type: x.Enum
    },
    diiPXt8iL: {
        defaultValue: "Link",
        displayTextArea: !1,
        placeholder: "Link",
        title: "Title",
        type: x.String
    },
    nROLtrc_N: {
        title: "Link",
        type: x.Link
    }
});
D(oe, [...X]);
var Ar = E(xe)
    , Sr = E(ie)
    , Kr = E(fe)
    , zr = ["gsKKaJUDB", "jbbcbpulJ", "RSos2oHJP"]
    , Tr = "framer-yHiKn"
    , Or = {
    gsKKaJUDB: "framer-v-1aiqux6",
    jbbcbpulJ: "framer-v-1j0xu5",
    RSos2oHJP: "framer-v-x9ma97"
};
function Me(a, ...r) {
    let n = {};
    return r?.forEach(t => t && Object.assign(n, a[t])),
        n
}
var Br = {
    damping: 60,
    delay: 0,
    mass: 1,
    stiffness: 500,
    type: "spring"
}
    , Qr = ({value: a, children: r}) => {
    let n = R(h)
        , t = a ?? n.transition
        , s = V( () => ({
        ...n,
        transition: t
    }), [JSON.stringify(t)]);
    return e(h.Provider, {
        value: s,
        children: r
    })
}
    , Er = o.create(y)
    , Zr = {
    Desktop: "gsKKaJUDB",
    Phone: "RSos2oHJP",
    Tablet: "jbbcbpulJ"
}
    , Yr = ({height: a, id: r, width: n, ...t}) => {
    var s, i;
    return {
        ...t,
        variant: (i = (s = Zr[t.variant]) !== null && s !== void 0 ? s : t.variant) !== null && i !== void 0 ? i : "gsKKaJUDB"
    }
}
    , Wr = (a, r) => a.layoutDependency ? r.join("-") + a.layoutDependency : r.join("-")
    , Ur = I(function(a, r) {
    let {activeLocale: n, setLocale: t} = P()
        , {style: s, className: i, layoutId: l, variant: f, ...d} = Yr(a)
        , {baseVariant: b, classNames: g, clearLoadingGesture: p, gestureHandlers: C, gestureVariant: u, isLoading: k, setGestureState: _, setVariant: H, variants: v} = M({
        cycleOrder: zr,
        defaultVariant: "gsKKaJUDB",
        variant: f,
        variantClassNames: Or
    })
        , c = Wr(a, v)
        , A = N(null)
        , S = j()
        , Z = [je, Fe]
        , m = W();
    return e(L, {
        id: l ?? S,
        children: e(Er, {
            animate: v,
            initial: !1,
            children: e(Qr, {
                value: Br,
                children: G(o.footer, {
                    ...d,
                    ...C,
                    className: w(Tr, ...Z, "framer-1aiqux6", i, g),
                    "data-framer-name": "Desktop",
                    layoutDependency: c,
                    layoutId: "gsKKaJUDB",
                    ref: r ?? A,
                    style: {
                        backgroundColor: "var(--token-be079bad-eabd-4234-8a56-5579c7057187, rgb(0, 0, 0))",
                        ...s
                    },
                    ...Me({
                        jbbcbpulJ: {
                            "data-framer-name": "Tablet"
                        },
                        RSos2oHJP: {
                            "data-framer-name": "Phone"
                        }
                    }, b, u),
                    children: [G(o.div, {
                        className: "framer-1wjynwq",
                        "data-framer-name": "Top Section",
                        layoutDependency: c,
                        layoutId: "AijbwK_IN",
                        children: [G(o.div, {
                            className: "framer-8d91aq",
                            "data-framer-name": "Keep In Touch",
                            layoutDependency: c,
                            layoutId: "m_MIr52Mc",
                            children: [e(o.div, {
                                className: "framer-15o4ay5",
                                "data-framer-name": "Text",
                                layoutDependency: c,
                                layoutId: "dJoCww0aY",
                                children: e(K, {
                                    __fromCanvasComponent: !0,
                                    children: e(y, {
                                        children: e(o.h1, {
                                            className: "framer-styles-preset-zcx1yu",
                                            "data-styles-preset": "KN1n4eozB",
                                            style: {
                                                "--framer-text-color": "var(--extracted-gdpscs, var(--token-e16847f2-b192-48e1-a890-7bbcce11cc6e, rgb(255, 255, 255)))"
                                            },
                                            children: "A MAN project, made by men. For men!"
                                        })
                                    }),
                                    className: "framer-ky8bra",
                                    fonts: ["Inter"],
                                    layoutDependency: c,
                                    layoutId: "INbAuadDX",
                                    style: {
                                        "--extracted-gdpscs": "var(--token-e16847f2-b192-48e1-a890-7bbcce11cc6e, rgb(255, 255, 255))"
                                    },
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(z, {
                                height: 48,
                                y: (m?.y || 0) + 80 + (((m?.height || 720) - 160 - (Math.max(0, ((m?.height || 720) - 160 - 152) / 1) * 1 + 112 + 40)) / 2 + 0 + 0) + 0 + 0 + 140.8,
                                ...Me({
                                    jbbcbpulJ: {
                                        y: (m?.y || 0) + 64 + (((m?.height || 594) - 128 - 478.8) / 2 + 0 + 0) + 0 + 0 + 0 + 140.8
                                    },
                                    RSos2oHJP: {
                                        y: (m?.y || 0) + 48 + (((m?.height || 859) - 96 - 544.8) / 2 + 0 + 0) + 0 + 0 + 0 + 116.8
                                    }
                                }, b, u),
                                children: e(o.div, {
                                    className: "framer-1f3r9pj-container",
                                    layoutDependency: c,
                                    layoutId: "qCxtmAvM1-container",
                                    children: e(xe, {
                                        bohRFuhqj: "https://dexscreener.com/solana/crjtv3wcptszqosmxtyjeeiz1zv57mzdfwup9dg5d37h",
                                        height: "100%",
                                        i7oFluX4k: "WhZEoFj5uejcq392GeYEC7Fmwr5q49wyq9jD5U3pump",
                                        id: "qCxtmAvM1",
                                        layoutId: "qCxtmAvM1",
                                        variant: "DY9uGg3Qz",
                                        width: "100%"
                                    })
                                })
                            })]
                        }), G(o.div, {
                            className: "framer-1995cg8",
                            "data-framer-name": "Right Panel",
                            layoutDependency: c,
                            layoutId: "rE4INsmlE",
                            children: [G(o.nav, {
                                "aria-label": "Footer navigation",
                                className: "framer-1vnk5fw",
                                layoutDependency: c,
                                layoutId: "wYc4clhre",
                                children: [e(z, {
                                    children: e(o.div, {
                                        className: "framer-1hsxorm-container",
                                        layoutDependency: c,
                                        layoutId: "bDta9usaQ-container",
                                        children: e(ie, {
                                            diiPXt8iL: "DEX",
                                            height: "100%",
                                            id: "bDta9usaQ",
                                            layoutId: "bDta9usaQ",
                                            nROLtrc_N: "https://dexscreener.com/solana/crjtv3wcptszqosmxtyjeeiz1zv57mzdfwup9dg5d37h",
                                            variant: "ozmAfnq57",
                                            width: "100%"
                                        })
                                    })
                                }), e(z, {
                                    children: e(o.div, {
                                        className: "framer-1jvm5xc-container",
                                        layoutDependency: c,
                                        layoutId: "fuKeSDdfu-container",
                                        children: e(ie, {
                                            diiPXt8iL: "pump.fun",
                                            height: "100%",
                                            id: "fuKeSDdfu",
                                            layoutId: "fuKeSDdfu",
                                            nROLtrc_N: "https://pump.fun/coin/WhZEoFj5uejcq392GeYEC7Fmwr5q49wyq9jD5U3pump",
                                            variant: "ozmAfnq57",
                                            width: "100%"
                                        })
                                    })
                                }), e(z, {
                                    children: e(o.div, {
                                        className: "framer-1gkf0n4-container",
                                        layoutDependency: c,
                                        layoutId: "TLDm6O1W5-container",
                                        children: e(ie, {
                                            diiPXt8iL: "realmanonsol@gmail.com",
                                            height: "100%",
                                            id: "TLDm6O1W5",
                                            layoutId: "TLDm6O1W5",
                                            nROLtrc_N: "mailto:realmanonsol@gmail.com",
                                            variant: "ozmAfnq57",
                                            width: "100%"
                                        })
                                    })
                                })]
                            }), G(o.nav, {
                                "aria-label": "Social media links",
                                className: "framer-rirdix",
                                layoutDependency: c,
                                layoutId: "ReM8kYASv",
                                children: [e(z, {
                                    children: e(o.div, {
                                        className: "framer-d2xqib-container",
                                        layoutDependency: c,
                                        layoutId: "CDaQQkGG8-container",
                                        children: e(fe, {
                                            height: "100%",
                                            id: "CDaQQkGG8",
                                            kImcoGSg6: "Twitter",
                                            layoutId: "CDaQQkGG8",
                                            style: {
                                                width: "100%"
                                            },
                                            uhsfYPXHm: "https://x.com/RealManOnSol",
                                            variant: "F3FJrZjum",
                                            width: "100%"
                                        })
                                    })
                                }), e(z, {
                                    children: e(o.div, {
                                        className: "framer-13u868q-container",
                                        layoutDependency: c,
                                        layoutId: "KoDUlKTZQ-container",
                                        children: e(fe, {
                                            height: "100%",
                                            id: "KoDUlKTZQ",
                                            kImcoGSg6: "Telegram",
                                            layoutId: "KoDUlKTZQ",
                                            style: {
                                                width: "100%"
                                            },
                                            uhsfYPXHm: "https://t.me/ManCTOSolPortal",
                                            variant: "F3FJrZjum",
                                            width: "100%"
                                        })
                                    })
                                })]
                            })]
                        })]
                    }), e(o.div, {
                        className: "framer-aheazf",
                        "data-framer-name": "Bottom Section",
                        layoutDependency: c,
                        layoutId: "soQHEVAan",
                        children: e(K, {
                            __fromCanvasComponent: !0,
                            children: e(y, {
                                children: e(o.p, {
                                    className: "framer-styles-preset-1mdord3",
                                    "data-styles-preset": "JG4rYVHpN",
                                    style: {
                                        "--framer-text-color": "var(--extracted-r6o4lv, var(--token-e16847f2-b192-48e1-a890-7bbcce11cc6e, rgb(255, 255, 255)))"
                                    },
                                    children: "$MAN \xA9 2024"
                                })
                            }),
                            className: "framer-1o7gejq",
                            fonts: ["Inter"],
                            layoutDependency: c,
                            layoutId: "mgfWsaT1u",
                            style: {
                                "--extracted-r6o4lv": "var(--token-e16847f2-b192-48e1-a890-7bbcce11cc6e, rgb(255, 255, 255))",
                                opacity: .5
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0
                        })
                    })]
                })
            })
        })
    })
})
    , Xr = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-yHiKn.framer-1ehz4vl, .framer-yHiKn .framer-1ehz4vl { display: block; }", ".framer-yHiKn.framer-1aiqux6 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: 720px; justify-content: center; overflow: hidden; padding: 80px; position: relative; width: 1200px; }", ".framer-yHiKn .framer-1wjynwq { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: 1px; justify-content: space-between; max-width: 1800px; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-yHiKn .framer-8d91aq { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; max-width: 550px; overflow: visible; padding: 0px; position: relative; width: 1px; }", ".framer-yHiKn .framer-15o4ay5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-yHiKn .framer-ky8bra { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-yHiKn .framer-1f3r9pj-container, .framer-yHiKn .framer-1hsxorm-container, .framer-yHiKn .framer-1jvm5xc-container, .framer-yHiKn .framer-1gkf0n4-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-yHiKn .framer-1995cg8 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; max-width: 440px; overflow: hidden; padding: 0px; position: relative; width: 1px; }", ".framer-yHiKn .framer-1vnk5fw { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }", ".framer-yHiKn .framer-rirdix { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }", ".framer-yHiKn .framer-d2xqib-container, .framer-yHiKn .framer-13u868q-container { flex: none; height: auto; position: relative; width: 100%; }", ".framer-yHiKn .framer-aheazf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1800px; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-yHiKn .framer-1o7gejq { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-yHiKn.framer-1aiqux6, .framer-yHiKn .framer-8d91aq, .framer-yHiKn .framer-15o4ay5, .framer-yHiKn .framer-1995cg8, .framer-yHiKn .framer-1vnk5fw, .framer-yHiKn .framer-rirdix, .framer-yHiKn .framer-aheazf { gap: 0px; } .framer-yHiKn.framer-1aiqux6 > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-yHiKn.framer-1aiqux6 > :first-child, .framer-yHiKn .framer-8d91aq > :first-child, .framer-yHiKn .framer-15o4ay5 > :first-child, .framer-yHiKn .framer-1vnk5fw > :first-child, .framer-yHiKn .framer-rirdix > :first-child { margin-top: 0px; } .framer-yHiKn.framer-1aiqux6 > :last-child, .framer-yHiKn .framer-8d91aq > :last-child, .framer-yHiKn .framer-15o4ay5 > :last-child, .framer-yHiKn .framer-1vnk5fw > :last-child, .framer-yHiKn .framer-rirdix > :last-child { margin-bottom: 0px; } .framer-yHiKn .framer-8d91aq > * { margin: 0px; margin-bottom: calc(64px / 2); margin-top: calc(64px / 2); } .framer-yHiKn .framer-15o4ay5 > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-yHiKn .framer-1995cg8 > * { margin: 0px; margin-left: calc(24px / 2); margin-right: calc(24px / 2); } .framer-yHiKn .framer-1995cg8 > :first-child, .framer-yHiKn .framer-aheazf > :first-child { margin-left: 0px; } .framer-yHiKn .framer-1995cg8 > :last-child, .framer-yHiKn .framer-aheazf > :last-child { margin-right: 0px; } .framer-yHiKn .framer-1vnk5fw > *, .framer-yHiKn .framer-rirdix > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-yHiKn .framer-aheazf > * { margin: 0px; margin-left: calc(40px / 2); margin-right: calc(40px / 2); } }", ".framer-yHiKn.framer-v-1j0xu5.framer-1aiqux6 { height: min-content; padding: 64px; width: 810px; }", ".framer-yHiKn.framer-v-1j0xu5 .framer-1wjynwq, .framer-yHiKn.framer-v-x9ma97 .framer-1wjynwq { flex: none; flex-direction: column; gap: 40px; height: min-content; justify-content: flex-start; }", ".framer-yHiKn.framer-v-1j0xu5 .framer-8d91aq, .framer-yHiKn.framer-v-1j0xu5 .framer-1995cg8 { flex: none; max-width: unset; width: 100%; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-yHiKn.framer-v-1j0xu5 .framer-1wjynwq { gap: 0px; } .framer-yHiKn.framer-v-1j0xu5 .framer-1wjynwq > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-yHiKn.framer-v-1j0xu5 .framer-1wjynwq > :first-child { margin-top: 0px; } .framer-yHiKn.framer-v-1j0xu5 .framer-1wjynwq > :last-child { margin-bottom: 0px; } }", ".framer-yHiKn.framer-v-x9ma97.framer-1aiqux6 { height: min-content; padding: 48px 24px 48px 24px; width: 390px; }", ".framer-yHiKn.framer-v-x9ma97 .framer-8d91aq { flex: none; gap: 40px; max-width: unset; width: 100%; }", ".framer-yHiKn.framer-v-x9ma97 .framer-15o4ay5 { gap: 12px; }", ".framer-yHiKn.framer-v-x9ma97 .framer-1995cg8 { flex: none; flex-direction: column; max-width: unset; width: 100%; }", ".framer-yHiKn.framer-v-x9ma97 .framer-1vnk5fw, .framer-yHiKn.framer-v-x9ma97 .framer-rirdix, .framer-yHiKn.framer-v-x9ma97 .framer-1o7gejq { flex: none; width: 100%; }", ".framer-yHiKn.framer-v-x9ma97 .framer-aheazf { align-content: flex-start; align-items: flex-start; flex-direction: column; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-yHiKn.framer-v-x9ma97 .framer-1wjynwq, .framer-yHiKn.framer-v-x9ma97 .framer-8d91aq, .framer-yHiKn.framer-v-x9ma97 .framer-15o4ay5, .framer-yHiKn.framer-v-x9ma97 .framer-1995cg8, .framer-yHiKn.framer-v-x9ma97 .framer-aheazf { gap: 0px; } .framer-yHiKn.framer-v-x9ma97 .framer-1wjynwq > *, .framer-yHiKn.framer-v-x9ma97 .framer-8d91aq > *, .framer-yHiKn.framer-v-x9ma97 .framer-aheazf > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-yHiKn.framer-v-x9ma97 .framer-1wjynwq > :first-child, .framer-yHiKn.framer-v-x9ma97 .framer-8d91aq > :first-child, .framer-yHiKn.framer-v-x9ma97 .framer-15o4ay5 > :first-child, .framer-yHiKn.framer-v-x9ma97 .framer-1995cg8 > :first-child, .framer-yHiKn.framer-v-x9ma97 .framer-aheazf > :first-child { margin-top: 0px; } .framer-yHiKn.framer-v-x9ma97 .framer-1wjynwq > :last-child, .framer-yHiKn.framer-v-x9ma97 .framer-8d91aq > :last-child, .framer-yHiKn.framer-v-x9ma97 .framer-15o4ay5 > :last-child, .framer-yHiKn.framer-v-x9ma97 .framer-1995cg8 > :last-child, .framer-yHiKn.framer-v-x9ma97 .framer-aheazf > :last-child { margin-bottom: 0px; } .framer-yHiKn.framer-v-x9ma97 .framer-15o4ay5 > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } .framer-yHiKn.framer-v-x9ma97 .framer-1995cg8 > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } }", ...Re, ...Pe]
    , se = q(Ur, Xr, "framer-yHiKn")
    , No = se;
se.displayName = "Footer";
se.defaultProps = {
    height: 720,
    width: 1200
};
F(se, {
    variant: {
        options: ["gsKKaJUDB", "jbbcbpulJ", "RSos2oHJP"],
        optionTitles: ["Desktop", "Tablet", "Phone"],
        title: "Variant",
        type: x.Enum
    }
});
D(se, [{
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
}, ...Ar, ...Sr, ...Kr, ...pe(Ie), ...pe(Ne)], {
    supportsExplicitInterCodegen: !0
});
var Jr = {
    h8fOcMXQW: {
        hover: !0
    },
    ZANJw_0sv: {
        hover: !0
    }
}
    , $r = ["ZANJw_0sv", "h8fOcMXQW"];
var ea = {
    h8fOcMXQW: "framer-v-sw2gtn",
    ZANJw_0sv: "framer-v-1sxyimb"
};
function De(a, ...r) {
    let n = {};
    return r?.forEach(t => t && Object.assign(n, a[t])),
        n
}
var ra = {
    default: {
        damping: 60,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: "spring"
    }
}
    , aa = ({value: a, children: r}) => {
    let n = R(h)
        , t = a ?? n.transition
        , s = V( () => ({
        ...n,
        transition: t
    }), [JSON.stringify(t)]);
    return e(h.Provider, {
        value: s,
        children: r
    })
}
    , ta = {
    "Variant 1": "ZANJw_0sv",
    "Variant 2": "h8fOcMXQW"
}
    , na = ({height: a, id: r, link: n, tap: t, title: s, width: i, ...l}) => {
    var f, d, b;
    return {
        ...l,
        CVbYx6UR7: n ?? l.CVbYx6UR7,
        rcZkeYv4O: t ?? l.rcZkeYv4O,
        t8ec_oG01: (f = s ?? l.t8ec_oG01) !== null && f !== void 0 ? f : "Contact",
        variant: (b = (d = ta[l.variant]) !== null && d !== void 0 ? d : l.variant) !== null && b !== void 0 ? b : "ZANJw_0sv"
    }
}
    , oa = (a, r) => r.join("-") + a.layoutDependency
    , ia = I(function(a, r) {
    let {activeLocale: n} = P()
        , {style: t, className: s, layoutId: i, variant: l, t8ec_oG01: f, rcZkeYv4O: d, CVbYx6UR7: b, ...g} = na(a)
        , {baseVariant: p, classNames: C, gestureVariant: u, setGestureState: k, setVariant: _, transition: H, variants: v} = M({
        cycleOrder: $r,
        defaultVariant: "ZANJw_0sv",
        enabledGestures: Jr,
        transitions: ra,
        variant: l,
        variantClassNames: ea
    })
        , c = oa(a, v)
        , {activeVariantCallback: A, delay: S} = Le(p)
        , Z = A(async (...He) => {
            if (d && await d(...He) === !1)
                return !1
        }
    )
        , m = N(null)
        , ce = j()
        , Ce = [$];
    return e(L, {
        id: i ?? ce,
        children: e(o.div, {
            initial: l,
            animate: v,
            onHoverStart: () => k({
                isHovered: !0
            }),
            onHoverEnd: () => k({
                isHovered: !1
            }),
            onTapStart: () => k({
                isPressed: !0
            }),
            onTap: () => k({
                isPressed: !1
            }),
            onTapCancel: () => k({
                isPressed: !1
            }),
            className: w("framer-vsCLl", ...Ce, C),
            style: {
                display: "contents"
            },
            children: e(aa, {
                value: H,
                children: e(Q, {
                    href: b,
                    openInNewTab: !1,
                    children: e(o.a, {
                        ...g,
                        className: `${w("framer-1sxyimb", s)} framer-1p4ln0k`,
                        "data-border": !0,
                        "data-framer-name": "Variant 1",
                        "data-highlight": !0,
                        layoutDependency: c,
                        layoutId: "ZANJw_0sv",
                        onTap: Z,
                        ref: r ?? m,
                        style: {
                            "--border-bottom-width": "1px",
                            "--border-color": "rgba(0, 0, 0, 0)",
                            "--border-left-width": "1px",
                            "--border-right-width": "1px",
                            "--border-style": "solid",
                            "--border-top-width": "1px",
                            backgroundColor: "var(--token-be079bad-eabd-4234-8a56-5579c7057187, rgb(0, 0, 0))",
                            borderBottomLeftRadius: 64,
                            borderBottomRightRadius: 64,
                            borderTopLeftRadius: 64,
                            borderTopRightRadius: 64,
                            ...t
                        },
                        variants: {
                            "h8fOcMXQW-hover": {
                                backgroundColor: "var(--token-0e272a57-d630-4ae6-a209-51c62dec2a5a, rgb(135, 135, 135))"
                            },
                            "ZANJw_0sv-hover": {
                                "--border-color": "rgb(0, 0, 0)",
                                backgroundColor: "var(--token-e16847f2-b192-48e1-a890-7bbcce11cc6e, rgb(255, 255, 255))"
                            },
                            h8fOcMXQW: {
                                backgroundColor: "var(--token-14951491-9898-44b6-8e48-90b200ecb226, rgb(227, 227, 227))"
                            }
                        },
                        ...De({
                            "h8fOcMXQW-hover": {
                                "data-framer-name": void 0
                            },
                            "ZANJw_0sv-hover": {
                                "data-framer-name": void 0
                            },
                            h8fOcMXQW: {
                                "data-framer-name": "Variant 2"
                            }
                        }, p, u),
                        children: e(K, {
                            __fromCanvasComponent: !0,
                            children: e(y, {
                                children: e(o.h4, {
                                    className: "framer-styles-preset-1xo5nk6",
                                    "data-styles-preset": "bmgtGAtvT",
                                    style: {
                                        "--framer-text-color": "var(--extracted-1eung3n, var(--token-e16847f2-b192-48e1-a890-7bbcce11cc6e, rgb(255, 255, 255)))"
                                    },
                                    children: "Contact"
                                })
                            }),
                            className: "framer-1g5xqbc",
                            layoutDependency: c,
                            layoutId: "mQ7qp0Dw_",
                            style: {
                                "--extracted-1eung3n": "var(--token-e16847f2-b192-48e1-a890-7bbcce11cc6e, rgb(255, 255, 255))",
                                "--framer-paragraph-spacing": "0px"
                            },
                            text: f,
                            variants: {
                                "h8fOcMXQW-hover": {
                                    "--extracted-1eung3n": "var(--token-e16847f2-b192-48e1-a890-7bbcce11cc6e, rgb(255, 255, 255))"
                                },
                                "ZANJw_0sv-hover": {
                                    "--extracted-1eung3n": "var(--token-be079bad-eabd-4234-8a56-5579c7057187, rgb(0, 0, 0))"
                                },
                                h8fOcMXQW: {
                                    "--extracted-1eung3n": "var(--token-be079bad-eabd-4234-8a56-5579c7057187, rgb(0, 0, 0))"
                                }
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                            ...De({
                                "h8fOcMXQW-hover": {
                                    children: e(y, {
                                        children: e(o.h4, {
                                            className: "framer-styles-preset-1xo5nk6",
                                            "data-styles-preset": "bmgtGAtvT",
                                            style: {
                                                "--framer-text-color": "var(--extracted-1eung3n, var(--token-e16847f2-b192-48e1-a890-7bbcce11cc6e, rgb(255, 255, 255)))"
                                            },
                                            children: "Contact"
                                        })
                                    })
                                },
                                "ZANJw_0sv-hover": {
                                    children: e(y, {
                                        children: e(o.h4, {
                                            className: "framer-styles-preset-1xo5nk6",
                                            "data-styles-preset": "bmgtGAtvT",
                                            style: {
                                                "--framer-text-color": "var(--extracted-1eung3n, var(--token-be079bad-eabd-4234-8a56-5579c7057187, rgb(0, 0, 0)))"
                                            },
                                            children: "Contact"
                                        })
                                    })
                                },
                                h8fOcMXQW: {
                                    children: e(y, {
                                        children: e(o.h4, {
                                            className: "framer-styles-preset-1xo5nk6",
                                            "data-styles-preset": "bmgtGAtvT",
                                            style: {
                                                "--framer-text-color": "var(--extracted-1eung3n, var(--token-be079bad-eabd-4234-8a56-5579c7057187, rgb(0, 0, 0)))"
                                            },
                                            children: "Contact"
                                        })
                                    })
                                }
                            }, p, u)
                        })
                    })
                })
            })
        })
    })
})
    , sa = ['.framer-vsCLl [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }', "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-vsCLl .framer-1p4ln0k { display: block; }", ".framer-vsCLl .framer-1sxyimb { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 8px 16px 8px 16px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-vsCLl .framer-1g5xqbc { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-vsCLl .framer-1sxyimb { gap: 0px; } .framer-vsCLl .framer-1sxyimb > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-vsCLl .framer-1sxyimb > :first-child { margin-left: 0px; } .framer-vsCLl .framer-1sxyimb > :last-child { margin-right: 0px; } }", ...J]
    , le = q(ia, sa, "framer-vsCLl")
    , we = le;
le.displayName = "Button";
le.defaultProps = {
    height: 41,
    width: 102
};
F(le, {
    variant: {
        options: ["ZANJw_0sv", "h8fOcMXQW"],
        optionTitles: ["Variant 1", "Variant 2"],
        title: "Variant",
        type: x.Enum
    },
    t8ec_oG01: {
        defaultValue: "Contact",
        displayTextArea: !1,
        title: "Title",
        type: x.String
    },
    rcZkeYv4O: {
        title: "Tap",
        type: x.EventHandler
    },
    CVbYx6UR7: {
        title: "Link",
        type: x.Link
    }
});
D(le, [...X]);
var la = E(we)
    , ma = ke(o.div)
    , da = ["XR3KwPlhe", "kUbzgqLYa", "dKaOon5M9", "RhoqjXXS9"]
    , fa = "framer-7LGoo"
    , ca = {
    dKaOon5M9: "framer-v-umgy1w",
    kUbzgqLYa: "framer-v-dq0l0a",
    RhoqjXXS9: "framer-v-18hi2ir",
    XR3KwPlhe: "framer-v-10f2rdx"
};
function Ge(a, ...r) {
    let n = {};
    return r?.forEach(t => t && Object.assign(n, a[t])),
        n
}
var pa = {
    delay: 0,
    duration: .6,
    ease: [.35, 0, 0, 1],
    type: "tween"
}
    , ua = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: -86
}
    , ha = {
    damping: 60,
    delay: 0,
    mass: 1,
    stiffness: 500,
    type: "spring"
}
    , xa = ({value: a, children: r}) => {
    let n = R(h)
        , t = a ?? n.transition
        , s = V( () => ({
        ...n,
        transition: t
    }), [JSON.stringify(t)]);
    return e(h.Provider, {
        value: s,
        children: r
    })
}
    , ya = o.create(y)
    , ga = {
    "Phone Opened": "RhoqjXXS9",
    Desktop: "XR3KwPlhe",
    Phone: "dKaOon5M9",
    Tablet: "kUbzgqLYa"
}
    , va = ({height: a, id: r, width: n, ...t}) => {
    var s, i;
    return {
        ...t,
        variant: (i = (s = ga[t.variant]) !== null && s !== void 0 ? s : t.variant) !== null && i !== void 0 ? i : "XR3KwPlhe"
    }
}
    , ba = (a, r) => a.layoutDependency ? r.join("-") + a.layoutDependency : r.join("-")
    , wa = I(function(a, r) {
    let {activeLocale: n, setLocale: t} = P()
        , {style: s, className: i, layoutId: l, variant: f, ...d} = va(a)
        , {baseVariant: b, classNames: g, clearLoadingGesture: p, gestureHandlers: C, gestureVariant: u, isLoading: k, setGestureState: _, setVariant: H, variants: v} = M({
        cycleOrder: da,
        defaultVariant: "XR3KwPlhe",
        variant: f,
        variantClassNames: ca
    })
        , c = ba(a, v)
        , A = N(null)
        , S = j()
        , Z = []
        , m = W();
    return e(L, {
        id: l ?? S,
        children: e(ya, {
            animate: v,
            initial: !1,
            children: e(xa, {
                value: ha,
                children: e(ma, {
                    ...d,
                    ...C,
                    __framer__animate: {
                        transition: pa
                    },
                    __framer__animateOnce: !1,
                    __framer__scrollDirection: {
                        direction: "down",
                        target: ua
                    },
                    __framer__styleAppearEffectEnabled: !0,
                    __framer__threshold: .5,
                    __perspectiveFX: !1,
                    __smartComponentFX: !0,
                    __targetOpacity: 1,
                    className: w(fa, ...Z, "framer-10f2rdx", i, g),
                    "data-framer-name": "Desktop",
                    layoutDependency: c,
                    layoutId: "XR3KwPlhe",
                    ref: r ?? A,
                    style: {
                        backgroundColor: "rgb(255, 255, 255)",
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                        ...s
                    },
                    variants: {
                        dKaOon5M9: {
                            backgroundColor: "var(--token-e16847f2-b192-48e1-a890-7bbcce11cc6e, rgb(255, 255, 255))"
                        },
                        RhoqjXXS9: {
                            backgroundColor: "var(--token-e16847f2-b192-48e1-a890-7bbcce11cc6e, rgb(255, 255, 255))",
                            borderBottomLeftRadius: 16,
                            borderBottomRightRadius: 16
                        }
                    },
                    ...Ge({
                        dKaOon5M9: {
                            "data-framer-name": "Phone"
                        },
                        kUbzgqLYa: {
                            "data-framer-name": "Tablet"
                        },
                        RhoqjXXS9: {
                            "data-framer-name": "Phone Opened"
                        }
                    }, b, u),
                    children: G(o.nav, {
                        "aria-label": "Main navigation",
                        className: "framer-1y5ayfq",
                        "data-framer-name": "Content",
                        layoutDependency: c,
                        layoutId: "KY8iqmhFa",
                        children: [e(o.div, {
                            className: "framer-lxlb9c",
                            layoutDependency: c,
                            layoutId: "sxuntbQnv",
                            children: e(Q, {
                                href: {
                                    webPageId: "augiA20Il"
                                },
                                nodeId: "nueY1RuXS",
                                children: e(_e, {
                                    as: "a",
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        loading: ee((m?.y || 0) + (24 + ((m?.height || 200) - 48 - 41) / 2) + 1.5 + 3),
                                        pixelHeight: 256,
                                        pixelWidth: 256,
                                        src: "https://framerusercontent.com/images/9ZRce1flpVjbosivkoPszfOk1Y.webp"
                                    },
                                    className: "framer-g0qz15 framer-1tb8lt5",
                                    layoutDependency: c,
                                    layoutId: "nueY1RuXS",
                                    ...Ge({
                                        dKaOon5M9: {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                loading: ee((m?.y || 0) + 16 + 0 + 1.5 + 3),
                                                pixelHeight: 256,
                                                pixelWidth: 256,
                                                src: "https://framerusercontent.com/images/9ZRce1flpVjbosivkoPszfOk1Y.webp"
                                            }
                                        },
                                        kUbzgqLYa: {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                loading: ee((m?.y || 0) + (24 + ((m?.height || 89) - 48 - 41) / 2) + 1.5 + 3),
                                                pixelHeight: 256,
                                                pixelWidth: 256,
                                                src: "https://framerusercontent.com/images/9ZRce1flpVjbosivkoPszfOk1Y.webp"
                                            }
                                        },
                                        RhoqjXXS9: {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                loading: ee((m?.y || 0) + 16 + 0 + 0 + 0 + 3),
                                                pixelHeight: 256,
                                                pixelWidth: 256,
                                                src: "https://framerusercontent.com/images/9ZRce1flpVjbosivkoPszfOk1Y.webp"
                                            }
                                        }
                                    }, b, u)
                                })
                            })
                        }), e(z, {
                            children: e(o.div, {
                                className: "framer-9r1ujx-container",
                                layoutDependency: c,
                                layoutId: "xTRExRU_w-container",
                                children: e(we, {
                                    CVbYx6UR7: "https://dexscreener.com/solana/crjtv3wcptszqosmxtyjeeiz1zv57mzdfwup9dg5d37h",
                                    height: "100%",
                                    id: "xTRExRU_w",
                                    layoutId: "xTRExRU_w",
                                    t8ec_oG01: "DEXScreener",
                                    variant: "ZANJw_0sv",
                                    width: "100%"
                                })
                            })
                        })]
                    })
                })
            })
        })
    })
})
    , Ca = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-7LGoo.framer-1tb8lt5, .framer-7LGoo .framer-1tb8lt5 { display: block; }", ".framer-7LGoo.framer-10f2rdx { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 24px 80px 24px 80px; position: relative; width: 1200px; }", ".framer-7LGoo .framer-1y5ayfq { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1800px; overflow: visible; padding: 0px; position: relative; width: 1px; }", ".framer-7LGoo .framer-lxlb9c { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 38px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-7LGoo .framer-g0qz15 { flex: none; height: 32px; position: relative; text-decoration: none; width: 32px; }", ".framer-7LGoo .framer-9r1ujx-container { flex: none; height: auto; position: relative; width: auto; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-7LGoo.framer-10f2rdx, .framer-7LGoo .framer-lxlb9c { gap: 0px; } .framer-7LGoo.framer-10f2rdx > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-7LGoo.framer-10f2rdx > :first-child, .framer-7LGoo .framer-lxlb9c > :first-child { margin-left: 0px; } .framer-7LGoo.framer-10f2rdx > :last-child, .framer-7LGoo .framer-lxlb9c > :last-child { margin-right: 0px; } .framer-7LGoo .framer-lxlb9c > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } }", ".framer-7LGoo.framer-v-dq0l0a.framer-10f2rdx { width: 810px; }", ".framer-7LGoo.framer-v-dq0l0a .framer-1y5ayfq { order: 0; }", ".framer-7LGoo.framer-v-umgy1w.framer-10f2rdx { flex-direction: column; gap: 24px; justify-content: flex-start; padding: 16px; width: 390px; }", ".framer-7LGoo.framer-v-umgy1w .framer-1y5ayfq { flex: none; order: 0; width: 100%; }", ".framer-7LGoo.framer-v-umgy1w .framer-lxlb9c { flex: 1 0 0px; gap: unset; justify-content: space-between; width: 1px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-7LGoo.framer-v-umgy1w.framer-10f2rdx, .framer-7LGoo.framer-v-umgy1w .framer-lxlb9c { gap: 0px; } .framer-7LGoo.framer-v-umgy1w.framer-10f2rdx > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-7LGoo.framer-v-umgy1w.framer-10f2rdx > :first-child { margin-top: 0px; } .framer-7LGoo.framer-v-umgy1w.framer-10f2rdx > :last-child { margin-bottom: 0px; } .framer-7LGoo.framer-v-umgy1w .framer-lxlb9c > *, .framer-7LGoo.framer-v-umgy1w .framer-lxlb9c > :first-child, .framer-7LGoo.framer-v-umgy1w .framer-lxlb9c > :last-child { margin: 0px; } }", ".framer-7LGoo.framer-v-18hi2ir.framer-10f2rdx { flex-direction: column; gap: 48px; justify-content: flex-start; padding: 16px 16px 80px 16px; width: 390px; will-change: var(--framer-will-change-override, transform); }", ".framer-7LGoo.framer-v-18hi2ir .framer-1y5ayfq { flex: none; flex-direction: column; flex-wrap: wrap; order: 0; width: 100%; }", ".framer-7LGoo.framer-v-18hi2ir .framer-lxlb9c { gap: unset; justify-content: space-between; width: 100%; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-7LGoo.framer-v-18hi2ir.framer-10f2rdx, .framer-7LGoo.framer-v-18hi2ir .framer-1y5ayfq, .framer-7LGoo.framer-v-18hi2ir .framer-lxlb9c { gap: 0px; } .framer-7LGoo.framer-v-18hi2ir.framer-10f2rdx > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-7LGoo.framer-v-18hi2ir.framer-10f2rdx > :first-child { margin-top: 0px; } .framer-7LGoo.framer-v-18hi2ir.framer-10f2rdx > :last-child { margin-bottom: 0px; } .framer-7LGoo.framer-v-18hi2ir .framer-1y5ayfq > *, .framer-7LGoo.framer-v-18hi2ir .framer-1y5ayfq > :first-child, .framer-7LGoo.framer-v-18hi2ir .framer-1y5ayfq > :last-child, .framer-7LGoo.framer-v-18hi2ir .framer-lxlb9c > *, .framer-7LGoo.framer-v-18hi2ir .framer-lxlb9c > :first-child, .framer-7LGoo.framer-v-18hi2ir .framer-lxlb9c > :last-child { margin: 0px; } }"]
    , me = q(wa, Ca, "framer-7LGoo")
    , To = me;
me.displayName = "Navigation";
me.defaultProps = {
    height: 89,
    width: 1200
};
F(me, {
    variant: {
        options: ["XR3KwPlhe", "kUbzgqLYa", "dKaOon5M9", "RhoqjXXS9"],
        optionTitles: ["Desktop", "Tablet", "Phone", "Phone Opened"],
        title: "Variant",
        type: x.Enum
    }
});
D(me, [{
    explicitInter: !0,
    fonts: []
}, ...la], {
    supportsExplicitInterCodegen: !0
});
export {ue as a, Ie as b, Re as c, je as d, xe as e, No as f, To as g};
//# sourceMappingURL=chunk-5I6UCAUY.mjs.map
