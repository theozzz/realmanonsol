import {a as q, b as O, c as J} from "./chunk-2AHVAV5Q.mjs";
import {a as E} from "./chunk-5I6UCAUY.mjs";
import {B as M, F as p, I as Z, J as A, L as T, M as N, P as V, W as L, b as x, d as C, f as G, h as I, ia as S, j as B, ja as j, k as D, ka as z, la as w, n as t, o as y, oa as g, p as b, pa as Y, q as l, qa as Q, r as _, ra as P} from "./chunk-PUHG2OFZ.mjs";
j.loadWebFontsFromSelectors(["GF;Manrope-500", "GF;Manrope-700"]);
var H = [{
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
    , W = ['.framer-RdwZM .framer-styles-preset-1xo5nk6:not(.rich-text-wrapper), .framer-RdwZM .framer-styles-preset-1xo5nk6.rich-text-wrapper h4 { --framer-font-family: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-family-bold: "Manrope", "Manrope Placeholder", sans-serif; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-be079bad-eabd-4234-8a56-5579c7057187, #000000); --framer-text-decoration: none; --framer-text-transform: none; }']
    , K = "framer-RdwZM";
var me = Q(E)
    , de = {
    slBZ3hiPp: {
        hover: !0
    }
}
    , ce = ["slBZ3hiPp", "u7t4xt4bR"]
    , pe = "framer-uGEPf"
    , ue = {
    slBZ3hiPp: "framer-v-14i1txy",
    u7t4xt4bR: "framer-v-136kp4g"
};
function R(r, ...a) {
    let o = {};
    return a?.forEach(n => n && Object.assign(o, r[n])),
        o
}
var he = {
    damping: 60,
    delay: 0,
    mass: 1,
    stiffness: 500,
    type: "spring"
}
    , k = r => typeof r == "object" && r !== null && typeof r.src == "string" ? r : typeof r == "string" ? {
    src: r
} : void 0
    , xe = ({value: r, children: a}) => {
    let o = G(b)
        , n = r ?? o.transition
        , f = B( () => ({
        ...o,
        transition: n
    }), [JSON.stringify(n)]);
    return t(b.Provider, {
        value: f,
        children: a
    })
}
    , ye = l.create(x)
    , ge = {
    Desktop: "slBZ3hiPp",
    Mobile: "u7t4xt4bR"
}
    , ve = ({height: r, id: a, image: o, link: n, projectTitle: f, width: U, ...i}) => {
    var d, c, m;
    return {
        ...i,
        belbEkdrE: o ?? i.belbEkdrE,
        jk7hR1PkU: n ?? i.jk7hR1PkU,
        Ty82T0JvZ: (d = f ?? i.Ty82T0JvZ) !== null && d !== void 0 ? d : "Example Project Title",
        variant: (m = (c = ge[i.variant]) !== null && c !== void 0 ? c : i.variant) !== null && m !== void 0 ? m : "slBZ3hiPp"
    }
}
    , be = (r, a) => r.layoutDependency ? a.join("-") + r.layoutDependency : a.join("-")
    , we = C(function(r, a) {
    let {activeLocale: o, setLocale: n} = M()
        , {style: f, className: U, layoutId: i, variant: d, Ty82T0JvZ: c, belbEkdrE: m, jk7hR1PkU: X, ...$} = ve(r)
        , {baseVariant: h, classNames: ee, clearLoadingGesture: Ee, gestureHandlers: re, gestureVariant: v, isLoading: Re, setGestureState: ke, setVariant: Ue, variants: F} = S({
        cycleOrder: ce,
        defaultVariant: "slBZ3hiPp",
        enabledGestures: de,
        variant: d,
        variantClassNames: ue
    })
        , s = be(r, F)
        , te = D(null)
        , ae = () => h !== "u7t4xt4bR"
        , oe = I()
        , ne = [K, J]
        , e = T();
    return t(_, {
        id: i ?? oe,
        children: t(ye, {
            animate: F,
            initial: !1,
            children: t(xe, {
                value: he,
                children: t(L, {
                    href: X,
                    nodeId: "slBZ3hiPp",
                    openInNewTab: !1,
                    smoothScroll: !1,
                    children: y(l.a, {
                        ...$,
                        ...re,
                        className: `${A(pe, ...ne, "framer-14i1txy", U, ee)} framer-15rhrzq`,
                        "data-framer-name": "Desktop",
                        layoutDependency: s,
                        layoutId: "slBZ3hiPp",
                        ref: a ?? te,
                        style: {
                            ...f
                        },
                        ...R({
                            "slBZ3hiPp-hover": {
                                "data-framer-name": void 0
                            },
                            u7t4xt4bR: {
                                "data-framer-name": "Mobile"
                            }
                        }, h, v),
                        children: [y(l.div, {
                            className: "framer-4kp107",
                            "data-framer-name": "Wrap",
                            layoutDependency: s,
                            layoutId: "h26wnKj0C",
                            style: {
                                borderBottomLeftRadius: 24,
                                borderBottomRightRadius: 24,
                                borderTopLeftRadius: 24,
                                borderTopRightRadius: 24
                            },
                            variants: {
                                u7t4xt4bR: {
                                    borderBottomLeftRadius: 16,
                                    borderBottomRightRadius: 16,
                                    borderTopLeftRadius: 16,
                                    borderTopRightRadius: 16
                                }
                            },
                            children: [t(z, {
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    loading: g((e?.y || 0) + 0 + 0 + (Math.max(0, ((e?.height || 500) - 0 - 90.8) / 1) * 1 * .5000000000000002 - (Math.max(0, ((e?.height || 500) - 0 - 90.8) / 1) * 1 - 0) * 1 / 2)),
                                    sizes: e?.width || "100vw",
                                    ...k(m)
                                },
                                className: "framer-flr8yd",
                                "data-framer-name": "Image",
                                layoutDependency: s,
                                layoutId: "DB1ZXcmvR",
                                ...R({
                                    "slBZ3hiPp-hover": {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: g((e?.y || 0) + 0 + 0 + (Math.max(0, ((e?.height || 500) - 0 - 90.8) / 1) * 1 * .5060000000000002 - (Math.max(0, ((e?.height || 500) - 0 - 90.8) / 1) * 1 - 0) * 1.06 / 2)),
                                            sizes: `calc(${e?.width || "100vw"} * 1.06)`,
                                            ...k(m)
                                        }
                                    },
                                    u7t4xt4bR: {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            loading: g((e?.y || 0) + 0 + 0 + (Math.max(0, ((e?.height || 500) - 0 - 82.8) / 1) * 1 * .5000000000000002 - (Math.max(0, ((e?.height || 500) - 0 - 82.8) / 1) * 1 - 0) * 1 / 2)),
                                            sizes: e?.width || "100vw",
                                            ...k(m)
                                        }
                                    }
                                }, h, v)
                            }), ae() && t(l.div, {
                                className: "framer-egscc7",
                                layoutDependency: s,
                                layoutId: "DYKDc3YKu",
                                style: {
                                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                                    borderBottomLeftRadius: 200,
                                    borderBottomRightRadius: 200,
                                    borderTopLeftRadius: 200,
                                    borderTopRightRadius: 200,
                                    rotate: 45
                                },
                                variants: {
                                    "slBZ3hiPp-hover": {
                                        backgroundColor: "var(--token-e16847f2-b192-48e1-a890-7bbcce11cc6e, rgb(255, 255, 255))",
                                        rotate: 0
                                    }
                                },
                                children: t(N, {
                                    children: t(l.div, {
                                        className: "framer-ai69ei-container",
                                        layoutDependency: s,
                                        layoutId: "QuY00i9fr-container",
                                        style: {
                                            rotate: -45
                                        },
                                        variants: {
                                            "slBZ3hiPp-hover": {
                                                rotate: 45
                                            }
                                        },
                                        children: t(E, {
                                            height: "100%",
                                            id: "QuY00i9fr",
                                            layoutId: "QuY00i9fr",
                                            style: {
                                                height: "100%",
                                                width: "100%"
                                            },
                                            variant: "LQkQ3Cw9q",
                                            width: "100%",
                                            ...R({
                                                "slBZ3hiPp-hover": {
                                                    variant: "lbnGsbzWa"
                                                }
                                            }, h, v)
                                        })
                                    })
                                })
                            })]
                        }), y(l.div, {
                            className: "framer-h433v6",
                            "data-framer-name": "Description",
                            layoutDependency: s,
                            layoutId: "d_cr4CDcv",
                            children: [t(w, {
                                __fromCanvasComponent: !0,
                                children: t(x, {
                                    children: t(l.h4, {
                                        className: "framer-styles-preset-1xo5nk6",
                                        "data-styles-preset": "bmgtGAtvT",
                                        style: {
                                            "--framer-text-color": "var(--extracted-1eung3n, var(--token-0e272a57-d630-4ae6-a209-51c62dec2a5a, rgb(135, 135, 135)))"
                                        },
                                        children: "Click for advice"
                                    })
                                }),
                                className: "framer-vxo9nq",
                                "data-framer-name": "Client Name",
                                fonts: ["Inter"],
                                layoutDependency: s,
                                layoutId: "QSda_pizv",
                                style: {
                                    "--extracted-1eung3n": "var(--token-0e272a57-d630-4ae6-a209-51c62dec2a5a, rgb(135, 135, 135))",
                                    "--framer-link-text-color": "rgb(0, 153, 255)",
                                    "--framer-link-text-decoration": "underline"
                                },
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            }), t(l.div, {
                                className: "framer-9p9zpl",
                                layoutDependency: s,
                                layoutId: "d59pVFh9m",
                                children: t(w, {
                                    __fromCanvasComponent: !0,
                                    children: t(x, {
                                        children: t(l.h3, {
                                            className: "framer-styles-preset-19zkxbw",
                                            "data-styles-preset": "rVaIBWTV0",
                                            style: {
                                                "--framer-text-color": "var(--extracted-a0htzi, var(--token-be079bad-eabd-4234-8a56-5579c7057187, rgb(0, 0, 0)))"
                                            },
                                            children: "Example Project Title"
                                        })
                                    }),
                                    className: "framer-1shy7b4",
                                    fonts: ["Inter"],
                                    layoutDependency: s,
                                    layoutId: "WhiK6USJr",
                                    style: {
                                        "--extracted-a0htzi": "var(--token-be079bad-eabd-4234-8a56-5579c7057187, rgb(0, 0, 0))",
                                        "--framer-link-text-color": "rgb(0, 153, 255)",
                                        "--framer-link-text-decoration": "underline"
                                    },
                                    text: c,
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            })]
                        })]
                    })
                })
            })
        })
    })
})
    , Pe = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-uGEPf.framer-15rhrzq, .framer-uGEPf .framer-15rhrzq { display: block; }", ".framer-uGEPf.framer-14i1txy { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: 500px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 560px; }", ".framer-uGEPf .framer-4kp107 { flex: 1 0 0px; height: 1px; overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-uGEPf .framer-flr8yd { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; }", ".framer-uGEPf .framer-egscc7 { bottom: 28px; flex: none; height: 48px; left: 28px; overflow: visible; position: absolute; width: 32px; }", ".framer-uGEPf .framer-ai69ei-container { flex: none; height: 16px; left: calc(50.00000000000002% - 16px / 2); position: absolute; top: calc(50.00000000000002% - 16px / 2); width: 16px; }", ".framer-uGEPf .framer-h433v6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-uGEPf .framer-vxo9nq, .framer-uGEPf .framer-1shy7b4 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-uGEPf .framer-9p9zpl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-uGEPf.framer-14i1txy, .framer-uGEPf .framer-h433v6, .framer-uGEPf .framer-9p9zpl { gap: 0px; } .framer-uGEPf.framer-14i1txy > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-uGEPf.framer-14i1txy > :first-child, .framer-uGEPf .framer-h433v6 > :first-child { margin-top: 0px; } .framer-uGEPf.framer-14i1txy > :last-child, .framer-uGEPf .framer-h433v6 > :last-child { margin-bottom: 0px; } .framer-uGEPf .framer-h433v6 > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-uGEPf .framer-9p9zpl > * { margin: 0px; margin-left: calc(12px / 2); margin-right: calc(12px / 2); } .framer-uGEPf .framer-9p9zpl > :first-child { margin-left: 0px; } .framer-uGEPf .framer-9p9zpl > :last-child { margin-right: 0px; } }", ".framer-uGEPf.framer-v-136kp4g.framer-14i1txy { cursor: unset; gap: 16px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-uGEPf.framer-v-136kp4g.framer-14i1txy { gap: 0px; } .framer-uGEPf.framer-v-136kp4g.framer-14i1txy > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-uGEPf.framer-v-136kp4g.framer-14i1txy > :first-child { margin-top: 0px; } .framer-uGEPf.framer-v-136kp4g.framer-14i1txy > :last-child { margin-bottom: 0px; } }", ".framer-uGEPf.framer-v-14i1txy.hover .framer-flr8yd { height: 106%; left: calc(50.00000000000002% - 106% / 2); top: calc(50.60000000000002% - 106% / 2); width: 106%; }", ".framer-uGEPf.framer-v-14i1txy.hover .framer-egscc7 { bottom: 24px; height: 56px; left: 24px; width: 56px; }", ...W, ...O]
    , u = V(we, Pe, "framer-uGEPf")
    , Ze = u;
u.displayName = "Case Thumbnail";
u.defaultProps = {
    height: 500,
    width: 560
};
Z(u, {
    variant: {
        options: ["slBZ3hiPp", "u7t4xt4bR"],
        optionTitles: ["Desktop", "Mobile"],
        title: "Variant",
        type: p.Enum
    },
    Ty82T0JvZ: {
        defaultValue: "Example Project Title",
        displayTextArea: !1,
        title: "Project Title",
        type: p.String
    },
    belbEkdrE: {
        title: "Image",
        type: p.ResponsiveImage
    },
    jk7hR1PkU: {
        title: "Link",
        type: p.Link
    }
});
Y(u, [{
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
}, ...me, ...P(H), ...P(q)], {
    supportsExplicitInterCodegen: !0
});
export {Ze as a};
//# sourceMappingURL=chunk-NTUHS7K6.mjs.map
