import {C as F, E as k, G as E, S as I, X as P, c, e as y, fa as w, s as R, sa as S, t as p, v as n, w as h, x as b, y as _, z as v} from "./chunk-PUHG2OFZ.mjs";
import "./chunk-JR5VT52U.mjs";
import {c as a} from "./chunk-RIUMFBNJ.mjs";
var q = "default"in p ? R : p
    , d = {}
    , x = q;
d.createRoot = x.createRoot;
d.hydrateRoot = x.hydrateRoot;
var D = d.createRoot
    , O = d.hydrateRoot;
var u = {
    augiA20Il: {
        elements: {},
        page: n( () => import("./xLNJWUGz4eu-yPxq0xLaCyDLGSoUTbT_yaczv1fpE7w.43LTJSHU.mjs")),
        path: "/"
    },
    GTaEJ7SyH: {
        elements: {},
        page: n( () => import("./2W9heq6bKXBUkDL_XVG_4v9vMe_vxJshWChaBJcVPVk.FX5T6NEB.mjs")),
        path: "/advice"
    },
    SKoIqgPVo: {
        elements: {},
        page: n( () => import("./166_-DanKn1hug-pkPXz61BkWT8VtvWYKRLPjdVmmVk.HGBVASZM.mjs")),
        path: "/404"
    },
    Yg0gGoq22: {
        collectionId: "qcOEbDaZ_",
        elements: {},
        page: n( () => import("./riSVto02blomP7m0phxhfvoKJU7Itl5S1FGJ4Bys98E.JE7OTELS.mjs")),
        path: "/advice/:HO_Dxy3Fb"
    }
}
    , M = [{
    code: "en",
    id: "default",
    name: "English",
    slug: ""
}];
async function G({routeId: r, pathVariables: o, localeId: t}) {
    await u[r].page.preload();
    let s = c(P, {
        isWebsite: !0,
        routeId: r,
        pathVariables: o,
        routes: u,
        collectionUtils: {
            qcOEbDaZ_: async () => (await import("./7YQCYYzmYzKOE7bkClQNOfDIG2eM60WJ2KDXIfOuwYM.SMMBMKP6.mjs"))?.utils
        },
        framerSiteId: "298eb88a99db037a13abf00b408e48acea7425e8816e1e767940c01e0ea53abf",
        notFoundPage: n( () => import("./166_-DanKn1hug-pkPXz61BkWT8VtvWYKRLPjdVmmVk.HGBVASZM.mjs")),
        isReducedMotion: !0,
        localeId: t,
        locales: M,
        preserveQueryParams: void 0
    })
        , i = c(I, {
        children: s,
        value: {
            enableAsyncURLUpdates: !0,
            replaceNestedLinks: !0,
            useGranularSuspense: !0,
            wrapUpdatesInTransitions: !1
        }
    });
    return c(h, {
        children: i,
        value: {
            global: {
                enter: {
                    opacity: 0,
                    rotate: 0,
                    rotate3d: !1,
                    rotateX: 0,
                    rotateY: 0,
                    scale: 1,
                    transition: {
                        damping: 30,
                        delay: 0,
                        duration: .2,
                        ease: [.27, 0, .51, 1],
                        mass: 1,
                        stiffness: 400,
                        type: "tween"
                    },
                    x: "0px",
                    y: "0px"
                }
            },
            routes: {}
        }
    })
}
var z = typeof document < "u";
if (z) {
    a.__framer_importFromPackage = (o, t) => () => c(k, {
        error: 'Package component not supported: "' + t + '" in "' + o + '"'
    }),
        a.process = {
            ...a.process,
            env: {
                ...a.process ? a.process.env : void 0,
                NODE_ENV: "production"
            }
        },
        a.__framer_events = a.__framer_events || [],
        E();
    let r = document.getElementById("main");
    "framerHydrateV2"in r.dataset ? H(!0, r) : H(!1, r)
}
function V() {
    z && a.__framer_events.push(arguments)
}
async function H(r, o) {
    try {
        let g = function(e, N) {
            let m = N?.componentStack;
            console.warn("Recoverable error during hydration. Please check any custom code or code overrides to fix server/client mismatches.", e, m),
            !(Math.random() > .01) && V("published_site_load_recoverable_error", {
                message: String(e),
                componentStack: m,
                stack: m ? void 0 : e instanceof Error && typeof e.stack == "string" ? e.stack : null
            })
        }, t, s, i, l;
        if (r) {
            let e = JSON.parse(o.dataset.framerHydrateV2);
            t = e.routeId,
                s = e.localeId,
                i = e.pathVariables,
                l = e.breakpoints
        } else {
            let e = F(u, decodeURIComponent(location.pathname), !0, M);
            t = e.routeId,
                s = e.localeId,
                i = e.pathVariables
        }
        let f = await G({
            routeId: t,
            localeId: s,
            pathVariables: i
        });
        r ? (S("framer-rewrite-breakpoints", () => {
                w(l),
                    a.__framer_onRewriteBreakpoints?.(l)
            }
        ),
            y( () => {
                    b(),
                        v(),
                        _(),
                        O(o, f, {
                            onRecoverableError: g
                        })
                }
            )) : D(o, {
            onRecoverableError: g
        }).render(f)
    } catch (t) {
        throw V("published_site_load_error", {
            message: String(t),
            stack: t instanceof Error && typeof t.stack == "string" ? t.stack : null
        }),
            t
    }
}
export {G as getPageRoot};
//# sourceMappingURL=script_main.ZIN3K335.mjs.map
