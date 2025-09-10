(function (sttc) {
  "use strict";
  var ba,
    ca = Object.defineProperty,
    da = globalThis,
    fa = typeof Symbol === "function" && typeof Symbol("x") === "symbol",
    ha = {},
    ia = {};
  function ja(a, b, c) {
    if (!c || a != null) {
      c = ia[b];
      if (c == null) return a[b];
      c = a[c];
      return c !== void 0 ? c : a[b];
    }
  }
  function ka(a, b, c) {
    if (b)
      a: {
        var d = a.split(".");
        a = d.length === 1;
        var e = d[0],
          f;
        !a && e in ha ? (f = ha) : (f = da);
        for (e = 0; e < d.length - 1; e++) {
          var g = d[e];
          if (!(g in f)) break a;
          f = f[g];
        }
        d = d[d.length - 1];
        c = fa && c === "es6" ? f[d] : null;
        b = b(c);
        b != null &&
          (a
            ? ca(ha, d, { configurable: !0, writable: !0, value: b })
            : b !== c &&
              (ia[d] === void 0 &&
                ((a = (Math.random() * 1e9) >>> 0),
                (ia[d] = fa ? da.Symbol(d) : "$jscp$" + a + "$" + d)),
              ca(f, ia[d], { configurable: !0, writable: !0, value: b })));
      }
  }
  var la = Object.create,
    oa = Object.setPrototypeOf;
  function pa(a, b) {
    a.prototype = la(b.prototype);
    a.prototype.constructor = a;
    oa(a, b);
    a.Zm = b.prototype;
  }
  ka(
    "Symbol.dispose",
    function (a) {
      return a ? a : Symbol("Symbol.dispose");
    },
    "es_next"
  );
  ka(
    "String.prototype.replaceAll",
    function (a) {
      return a
        ? a
        : function (b, c) {
            if (b instanceof RegExp && !b.global)
              throw new TypeError(
                "String.prototype.replaceAll called with a non-global RegExp argument."
              );
            return b instanceof RegExp
              ? this.replace(b, c)
              : this.replace(
                  new RegExp(
                    String(b)
                      .replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1")
                      .replace(/\x08/g, "\\x08"),
                    "g"
                  ),
                  c
                );
          };
    },
    "es_2021"
  );
  ka(
    "AggregateError",
    function (a) {
      function b(c, d) {
        d = Error(d);
        "stack" in d && (this.stack = d.stack);
        this.errors = c;
        this.message = d.message;
      }
      if (a) return a;
      pa(b, Error);
      b.prototype.name = "AggregateError";
      return b;
    },
    "es_2021"
  );
  ka(
    "Promise.any",
    function (a) {
      return a
        ? a
        : function (b) {
            b = b instanceof Array ? b : Array.from(b);
            return Promise.all(
              b.map(function (c) {
                return Promise.resolve(c).then(
                  function (d) {
                    throw d;
                  },
                  function (d) {
                    return d;
                  }
                );
              })
            ).then(
              function (c) {
                throw new ha.AggregateError(c, "All promises were rejected");
              },
              function (c) {
                return c;
              }
            );
          };
    },
    "es_2021"
  );
  ka(
    "Promise.withResolvers",
    function (a) {
      return a
        ? a
        : function () {
            var b, c;
            return {
              promise: new Promise(function (d, e) {
                b = d;
                c = e;
              }),
              resolve: b,
              reject: c,
            };
          };
    },
    "es_next"
  ); /* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/
  var r = this || self;
  function qa(a) {
    a: {
      var b = ["CLOSURE_FLAGS"];
      for (var c = r, d = 0; d < b.length; d++)
        if (((c = c[b[d]]), c == null)) {
          b = null;
          break a;
        }
      b = c;
    }
    a = b && b[a];
    return a != null ? a : !1;
  }
  function ra(a) {
    var b = typeof a;
    return b != "object" ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
  }
  function sa(a) {
    var b = typeof a;
    return (b == "object" && a != null) || b == "function";
  }
  function ua(a) {
    return (
      (Object.prototype.hasOwnProperty.call(a, va) && a[va]) || (a[va] = ++wa)
    );
  }
  var va = "closure_uid_" + ((Math.random() * 1e9) >>> 0),
    wa = 0;
  function xa(a, b, c) {
    return a.call.apply(a.bind, arguments);
  }
  function ya(a, b, c) {
    if (!a) throw Error();
    if (arguments.length > 2) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function () {
        var e = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(e, d);
        return a.apply(b, e);
      };
    }
    return function () {
      return a.apply(b, arguments);
    };
  }
  function za(a, b, c) {
    za =
      Function.prototype.bind &&
      Function.prototype.bind.toString().indexOf("native code") != -1
        ? xa
        : ya;
    return za.apply(null, arguments);
  }
  function Ba(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
      var d = c.slice();
      d.push.apply(d, arguments);
      return a.apply(this, d);
    };
  }
  function Ca(a, b, c) {
    a = a.split(".");
    c = c || r;
    for (var d; a.length && (d = a.shift()); )
      a.length || b === void 0
        ? c[d] && c[d] !== Object.prototype[d]
          ? (c = c[d])
          : (c = c[d] = {})
        : (c[d] = b);
  }
  function Da(a) {
    return a;
  }
  function Ea(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.Zm = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    a.Nq = function (d, e, f) {
      for (
        var g = Array(arguments.length - 2), h = 2;
        h < arguments.length;
        h++
      )
        g[h - 2] = arguments[h];
      return b.prototype[e].apply(d, g);
    };
  }
  var Fa = { Zp: 0, Yp: 1, Xp: 2 };
  var Ga;
  function Ha(a, b) {
    if (typeof a === "string")
      return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
    for (let c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
    return -1;
  }
  function Ia(a, b) {
    const c = a.length,
      d = typeof a === "string" ? a.split("") : a;
    for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a);
  }
  function Ja(a, b) {
    var c = a.length;
    const d = typeof a === "string" ? a.split("") : a;
    for (--c; c >= 0; --c) c in d && b.call(void 0, d[c], c, a);
  }
  function La(a, b) {
    const c = a.length,
      d = [];
    let e = 0;
    const f = typeof a === "string" ? a.split("") : a;
    for (let g = 0; g < c; g++)
      if (g in f) {
        const h = f[g];
        b.call(void 0, h, g, a) && (d[e++] = h);
      }
    return d;
  }
  function Ma(a, b) {
    const c = a.length,
      d = Array(c),
      e = typeof a === "string" ? a.split("") : a;
    for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
    return d;
  }
  function Na(a, b) {
    let c = 1;
    Ia(a, function (d, e) {
      c = b.call(void 0, c, d, e, a);
    });
    return c;
  }
  function Oa(a, b) {
    const c = a.length,
      d = typeof a === "string" ? a.split("") : a;
    for (let e = 0; e < c; e++)
      if (e in d && b.call(void 0, d[e], e, a)) return !0;
    return !1;
  }
  function Pa(a, b) {
    return Ha(a, b) >= 0;
  }
  function Qa(a, b) {
    b = Ha(a, b);
    let c;
    (c = b >= 0) && Array.prototype.splice.call(a, b, 1);
    return c;
  }
  function Ra(a, b) {
    let c = 0;
    Ja(a, function (d, e) {
      b.call(void 0, d, e, a) &&
        Array.prototype.splice.call(a, e, 1).length == 1 &&
        c++;
    });
  }
  function Sa(a) {
    return Array.prototype.concat.apply([], arguments);
  }
  function Wa(a) {
    const b = a.length;
    if (b > 0) {
      const c = Array(b);
      for (let d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    return [];
  }
  function Xa(a, b) {
    for (let d = 1; d < arguments.length; d++) {
      const e = arguments[d];
      var c = ra(e);
      if (c == "array" || (c == "object" && typeof e.length == "number")) {
        c = a.length || 0;
        const f = e.length || 0;
        a.length = c + f;
        for (let g = 0; g < f; g++) a[c + g] = e[g];
      } else a.push(e);
    }
  }
  function Ya(a, b, c) {
    c = c || $a;
    let d = 0,
      e = a.length,
      f;
    for (; d < e; ) {
      const g = d + ((e - d) >>> 1);
      let h;
      h = c(b, a[g]);
      h > 0 ? (d = g + 1) : ((e = g), (f = !h));
    }
    return f ? d : -d - 1;
  }
  function $a(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }
  function ab(a, b) {
    b = b || Math.random;
    for (let c = a.length - 1; c > 0; c--) {
      const d = Math.floor(b() * (c + 1)),
        e = a[c];
      a[c] = a[d];
      a[d] = e;
    }
  }
  var bb = {
    un: "google_adtest",
    yn: "google_ad_client",
    In: "google_ad_intent_query",
    Hn: "google_ad_intent_qetid",
    Gn: "google_ad_intent_eids",
    Fn: "google_ad_intents_format",
    Jn: "google_ad_intent_rs_token",
    zn: "google_ad_format",
    Bn: "google_ad_height",
    Vn: "google_ad_width",
    Kn: "google_ad_layout",
    Ln: "google_ad_layout_key",
    Nn: "google_ad_output",
    On: "google_ad_region",
    Rn: "google_ad_slot",
    Tn: "google_ad_type",
    Un: "google_ad_url",
    Fo: "google_gl",
    No: "google_enable_ose",
    Xo: "google_full_width_responsive",
    cq: "google_rl_filtering",
    bq: "google_rl_mode",
    eq: "google_rt",
    aq: "google_rl_dest_url",
    Ip: "google_max_radlink_len",
    Np: "google_num_radlinks",
    Op: "google_num_radlinks_per_unit",
    xn: "google_ad_channel",
    Hp: "google_max_num_ads",
    Jp: "google_max_responsive_height",
    ro: "google_color_border",
    Mo: "google_enable_content_recommendations",
    Co: "google_content_recommendation_ui_type",
    Bo: "google_source_type",
    Ao: "google_content_recommendation_rows_num",
    zo: "google_content_recommendation_columns_num",
    yo: "google_content_recommendation_ad_positions",
    Do: "google_content_recommendation_use_square_imgs",
    uo: "google_color_link",
    so: "google_color_line",
    wo: "google_color_url",
    vn: "google_ad_block",
    Qn: "google_ad_section",
    wn: "google_ad_callback",
    oo: "google_captcha_token",
    vo: "google_color_text",
    jo: "google_alternate_ad_url",
    En: "google_ad_host_tier_id",
    po: "google_city",
    Cn: "google_ad_host",
    Dn: "google_ad_host_channel",
    ko: "google_alternate_color",
    qo: "google_color_bg",
    Oo: "google_encoding",
    Vo: "google_font_face",
    Zo: "google_hints",
    tp: "google_image_size",
    Kp: "google_mtl",
    Bq: "google_cpm",
    xo: "google_contents",
    Lp: "google_native_settings_key",
    Eo: "google_country",
    zq: "google_targeting",
    Wo: "google_font_size",
    Ko: "google_disable_video_autoplay",
    Hq: "google_video_product_type",
    Gq: "google_video_doc_id",
    Fq: "google_cust_gender",
    tq: "google_cust_lh",
    sq: "google_cust_l",
    Aq: "google_tfs",
    Ap: "google_kw",
    wq: "google_tag_for_child_directed_treatment",
    xq: "google_tag_for_under_age_of_consent",
    gq: "google_region",
    Ho: "google_cust_criteria",
    Pn: "google_safe",
    Go: "google_ctr_threshold",
    iq: "google_resizing_allowed",
    kq: "google_resizing_width",
    jq: "google_resizing_height",
    Eq: "google_cust_age",
    Dp: "google_language",
    Bp: "google_kw_type",
    Up: "google_pucrd",
    Sp: "google_page_url",
    yq: "google_tag_partner",
    oq: "google_restrict_data_processing",
    on: "google_adbreak_test",
    An: "google_ad_frequency_hint",
    rn: "google_admob_interstitial_slot",
    sn: "google_admob_rewarded_slot",
    qn: "google_admob_ads_only",
    Sn: "google_ad_start_delay_hint",
    Gp: "google_max_ad_content_rating",
    Wp: "google_ad_public_floor",
    Vp: "google_ad_private_floor",
    Cq: "google_traffic_source",
    Qp: "google_overlays",
    Tp: "google_privacy_treatments",
    uq: "google_special_category_data",
    Iq: "google_wrap_fullscreen_ad",
    Mn: "google_ad_loaded_callback",
  };
  function cb(a) {
    var b = eb;
    if (!fb(a))
      throw (
        ((b = (typeof b === "function" ? b() : b)?.concat("\n") ?? ""),
        Error(b + String(a)))
      );
  }
  function hb(a) {
    a.Sq = !0;
    return a;
  }
  let eb = void 0;
  var ib = hb((a) => typeof a === "number"),
    fb = hb((a) => typeof a === "string"),
    jb = hb((a) => typeof a === "function"),
    kb = hb((a) => !!a && (typeof a === "object" || typeof a === "function"));
  function lb() {
    var a = fb;
    return mb(hb((b, c) => (b === void 0 ? !0 : a(b, c))));
  }
  function mb(a) {
    a.Vl = !0;
    return a;
  }
  var ob = hb((a) => Array.isArray(a));
  function pb() {
    return hb((a) => (ob(a) ? a.every((b) => ib(b)) : !1));
  }
  let qb,
    rb = 64;
  function sb() {
    try {
      return (
        qb ?? (qb = new Uint32Array(64)),
        rb >= 64 && (crypto.getRandomValues(qb), (rb = 0)),
        qb[rb++]
      );
    } catch (a) {
      return Math.floor(Math.random() * 2 ** 32);
    }
  }
  function tb(a, b) {
    if (!ib(a.goog_pvsid))
      try {
        const c = sb() + (sb() & (2 ** 21 - 1)) * 2 ** 32;
        Object.defineProperty(a, "goog_pvsid", { value: c, configurable: !1 });
      } catch (c) {
        b.Ha({ methodName: 784, Na: c });
      }
    a = Number(a.goog_pvsid);
    (!a || a <= 0) &&
      b.Ha({ methodName: 784, Na: Error(`Invalid correlator, ${a}`) });
    return a || -1;
  }
  function ub() {
    return !1;
  }
  function vb() {
    return !0;
  }
  function wb(a) {
    const b = arguments,
      c = b.length;
    return function () {
      for (let d = 0; d < c; d++) if (!b[d].apply(this, arguments)) return !1;
      return !0;
    };
  }
  function yb(a) {
    return function () {
      return !a.apply(this, arguments);
    };
  }
  function Bb(a) {
    let b = !1,
      c;
    return function () {
      b || ((c = a()), (b = !0));
      return c;
    };
  }
  function Cb(a) {
    let b = a;
    return function () {
      if (b) {
        const c = b;
        b = null;
        c();
      }
    };
  }
  function Db(a, b) {
    let c = 0;
    return function (d) {
      r.clearTimeout(c);
      const e = arguments;
      c = r.setTimeout(function () {
        a.apply(b, e);
      }, 63);
    };
  }
  function Eb(a, b) {
    function c() {
      e = r.setTimeout(d, 63);
      let h = g;
      g = [];
      a.apply(b, h);
    }
    function d() {
      e = 0;
      f && ((f = !1), c());
    }
    let e = 0,
      f = !1,
      g = [];
    return function (h) {
      g = arguments;
      e ? (f = !0) : c();
    };
  }
  var Fb = qa(610401301),
    Gb = qa(748402147);
  function Hb(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
  }
  function Ib(a, b) {
    return a.toLowerCase().indexOf(b.toLowerCase()) != -1;
  }
  function Jb() {
    var a = r.navigator;
    return a && (a = a.userAgent) ? a : "";
  }
  var Kb;
  const Lb = r.navigator;
  Kb = Lb ? Lb.userAgentData || null : null;
  function Mb(a) {
    if (!Fb || !Kb) return !1;
    for (let b = 0; b < Kb.brands.length; b++) {
      const { brand: c } = Kb.brands[b];
      if (c && c.indexOf(a) != -1) return !0;
    }
    return !1;
  }
  function Nb(a) {
    return Jb().indexOf(a) != -1;
  }
  function Ob() {
    return Fb ? !!Kb && Kb.brands.length > 0 : !1;
  }
  function Qb() {
    return Ob() ? !1 : Nb("Opera");
  }
  function Rb() {
    return Nb("Firefox") || Nb("FxiOS");
  }
  function Sb() {
    return (
      Nb("Safari") &&
      !(
        Tb() ||
        (Ob() ? 0 : Nb("Coast")) ||
        Qb() ||
        (Ob() ? 0 : Nb("Edge")) ||
        (Ob() ? Mb("Microsoft Edge") : Nb("Edg/")) ||
        (Ob() ? Mb("Opera") : Nb("OPR")) ||
        Rb() ||
        Nb("Silk") ||
        Nb("Android")
      )
    );
  }
  function Tb() {
    return Ob()
      ? Mb("Chromium")
      : ((Nb("Chrome") || Nb("CriOS")) && !(Ob() ? 0 : Nb("Edge"))) ||
          Nb("Silk");
  }
  function Ub() {
    return Fb && Kb
      ? Kb.mobile
      : !Vb() &&
          (Nb("iPod") || Nb("iPhone") || Nb("Android") || Nb("IEMobile"));
  }
  function Vb() {
    return Fb && Kb
      ? !Kb.mobile && (Nb("iPad") || Nb("Android") || Nb("Silk"))
      : Nb("iPad") || (Nb("Android") && !Nb("Mobile")) || Nb("Silk");
  }
  function Xb(a, b) {
    for (const c in a) b.call(void 0, a[c], c, a);
  }
  function Yb(a, b) {
    const c = {};
    for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
    return c;
  }
  function Zb(a, b) {
    for (const c in a) if (b.call(void 0, a[c], c, a)) return !0;
    return !1;
  }
  function $b(a) {
    var b = ac;
    a: {
      for (const c in b)
        if (b[c] == a) {
          a = !0;
          break a;
        }
      a = !1;
    }
    return a;
  }
  function bc(a) {
    const b = [];
    let c = 0;
    for (const d in a) b[c++] = a[d];
    return b;
  }
  function ec(a) {
    const b = {};
    for (const c in a) b[c] = a[c];
    return b;
  }
  const fc =
    "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
      " "
    );
  function hc(a, b) {
    let c, d;
    for (let e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (let f = 0; f < fc.length; f++)
        (c = fc[f]),
          Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
  function ic(a) {
    ic[" "](a);
    return a;
  }
  ic[" "] = function () {};
  function jc(a, b) {
    try {
      return ic(a[b]), !0;
    } catch (c) {}
    return !1;
  } /* 
 
 Copyright Google LLC 
 SPDX-License-Identifier: Apache-2.0 
*/
  let kc = globalThis.trustedTypes,
    lc;
  function mc() {
    let a = null;
    if (!kc) return a;
    try {
      const b = (c) => c;
      a = kc.createPolicy("goog#html", {
        createHTML: b,
        createScript: b,
        createScriptURL: b,
      });
    } catch (b) {}
    return a;
  }
  function nc() {
    lc === void 0 && (lc = mc());
    return lc;
  }
  var oc = class {
    constructor(a) {
      this.g = a;
    }
    toString() {
      return this.g + "";
    }
  };
  function pc(a) {
    const b = nc();
    a = b ? b.createScriptURL(a) : a;
    return new oc(a);
  }
  function qc(a) {
    if (a instanceof oc) return a.g;
    throw Error("");
  }
  var rc = class {
      constructor(a) {
        this.g = a;
      }
      toString() {
        return this.g;
      }
    },
    tc = new rc("about:invalid#zClosurez");
  function uc(a) {
    return a instanceof rc;
  }
  function vc(a) {
    if (uc(a)) return a.g;
    throw Error("");
  }
  class wc {
    constructor(a) {
      this.Yl = a;
    }
  }
  function xc(a) {
    return new wc((b) => b.substr(0, a.length + 1).toLowerCase() === a + ":");
  }
  const yc = [
    xc("data"),
    xc("http"),
    xc("https"),
    xc("mailto"),
    xc("ftp"),
    new wc((a) => /^[^:]*([/?#]|$)/.test(a)),
  ];
  function zc(a, b = yc) {
    if (uc(a)) return a;
    for (let c = 0; c < b.length; ++c) {
      const d = b[c];
      if (d instanceof wc && d.Yl(a)) return new rc(a);
    }
  }
  var Ac = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
  function Bc(a) {
    if (Ac.test(a)) return a;
  }
  function Cc(a) {
    return a instanceof rc ? vc(a) : Bc(a);
  }
  function Dc(a, b) {
    b = Cc(b);
    b !== void 0 && (a.href = b);
  }
  function Ec(a, b = `unexpected value ${a}!`) {
    throw Error(b);
  }
  var Fc = class {
    constructor(a) {
      this.g = a;
    }
    toString() {
      return this.g + "";
    }
  };
  function Gc(a) {
    const b = nc();
    a = b ? b.createHTML(a) : a;
    return new Fc(a);
  }
  function Kc(a) {
    if (a instanceof Fc) return a.g;
    throw Error("");
  }
  function Lc(a, b) {
    a.src = qc(b).toString();
  }
  function Mc(a = document) {
    a = a.querySelector?.("script[nonce]");
    return a == null ? "" : a.nonce || a.getAttribute("nonce") || "";
  }
  function Nc(a, b) {
    a.src = qc(b);
    (b = Mc(a.ownerDocument)) && a.setAttribute("nonce", b);
  }
  var Oc = class {
    constructor(a) {
      this.g = a;
    }
    toString() {
      return this.g;
    }
  };
  function Pc(a, b) {
    if (a.nodeType === 1 && /^(script|style)$/i.test(a.tagName))
      throw Error("");
    a.innerHTML = Kc(b);
  }
  function Qc(a, b, c) {
    var d = [Rc`width`, Rc`height`];
    if (d.length === 0) throw Error("");
    d = d.map((f) => {
      if (f instanceof Oc) f = f.g;
      else throw Error("");
      return f;
    });
    const e = b.toLowerCase();
    if (d.every((f) => e.indexOf(f) !== 0))
      throw Error(
        `Attribute "${b}" does not match any of the allowed prefixes.`
      );
    a.setAttribute(b, c);
  }
  function Sc(a, b) {
    if (a.namespaceURI !== "http://www.w3.org/1999/xhtml")
      throw Error(
        `Cannot set attribute '${b}' on '${a.tagName}'.` +
          "Element is not in the HTML namespace"
      );
    b = b.toLowerCase();
    switch (`${a.tagName} ${b}`) {
      case "A href":
        Dc(a, "0");
        break;
      case "AREA href":
        b = Cc("0");
        b !== void 0 && (a.href = b);
        break;
      case "BASE href":
        a.href = qc("0");
        break;
      case "BUTTON formaction":
        b = Cc("0");
        b !== void 0 && (a.formAction = b);
        break;
      case "EMBED src":
        a.src = qc("0");
        break;
      case "FORM action":
        b = Cc("0");
        b !== void 0 && (a.action = b);
        break;
      case "IFRAME src":
        Lc(a, "0");
        break;
      case "IFRAME srcdoc":
        a.srcdoc = Kc("0");
        break;
      case "IFRAME sandbox":
        throw Error(
          "Can't set 'sandbox' on iframe tags. Use setIframeSrcWithIntent or setIframeSrcdocWithIntent instead"
        );
      case "INPUT formaction":
        b = Cc("0");
        b !== void 0 && (a.formAction = b);
        break;
      case "LINK href":
        throw Error(
          "Can't set 'href' attribute on link tags. Use setLinkHrefAndRel instead"
        );
      case "LINK rel":
        throw Error(
          "Can't set 'rel' attribute on link tags. Use setLinkHrefAndRel instead"
        );
      case "OBJECT data":
        a.data = qc("0");
        break;
      case "SCRIPT src":
        Nc(a, "0");
        break;
      default:
        if (/^on./.test(b))
          throw Error(
            `Attribute "${b}" looks like an event handler attribute. ` +
              "Please use a safe alternative like addEventListener instead."
          );
        a.setAttribute(b, "0");
    }
  }
  var Tc = class {
    constructor(a) {
      this.g = a;
    }
    toString() {
      return this.g;
    }
  };
  function Uc(a) {
    if (a instanceof Tc) return a.g;
    throw Error("");
  }
  function Vc(a, b) {
    a.__closure__error__context__984382 ||
      (a.__closure__error__context__984382 = {});
    a.__closure__error__context__984382.severity = b;
  }
  function Wc(a, b) {
    const c = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"' };
    let d;
    d = b ? b.createElement("div") : r.document.createElement("div");
    return a.replace(Xc, function (e, f) {
      let g = c[e];
      if (g) return g;
      f.charAt(0) == "#" &&
        ((f = Number("0" + f.slice(1))),
        isNaN(f) || (g = String.fromCharCode(f)));
      g || (Pc(d, Gc(e + " ")), (g = d.firstChild.nodeValue.slice(0, -1)));
      return (c[e] = g);
    });
  }
  var Xc = /&([^;\s<&]+);?/g;
  function $c() {
    return (
      Math.floor(Math.random() * 2147483648).toString(36) +
      Math.abs(Math.floor(Math.random() * 2147483648) ^ Date.now()).toString(36)
    );
  }
  function ad(a) {
    let b = 0;
    for (let c = 0; c < a.length; ++c) b = (31 * b + a.charCodeAt(c)) >>> 0;
    return b;
  }
  function bd(a) {
    return String(a).replace(/\-([a-z])/g, function (b, c) {
      return c.toUpperCase();
    });
  }
  function cd(a) {
    return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function (b, c, d) {
      return c + d.toUpperCase();
    });
  }
  var dd = Ob() ? !1 : Nb("Trident") || Nb("MSIE"),
    ed = Nb("Edge") || dd,
    fd =
      Nb("Gecko") &&
      !(Ib(Jb(), "WebKit") && !Nb("Edge")) &&
      !(Nb("Trident") || Nb("MSIE")) &&
      !Nb("Edge"),
    gd = Ib(Jb(), "WebKit") && !Nb("Edge");
  function Rc(a) {
    return new Oc(a[0].toLowerCase());
  }
  function hd(a) {
    return new Tc(a[0]);
  }
  function id(a) {
    return a instanceof Fc ? a : Gc(jd(String(a)));
  }
  function jd(a) {
    return a
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");
  }
  function kd(a) {
    return ld(a);
  }
  function ld(a) {
    const b = id("");
    return Gc(a.map((c) => Kc(id(c))).join(Kc(b).toString()));
  }
  const md = /^[a-z][a-z\d-]*$/i,
    nd =
      "APPLET BASE EMBED IFRAME LINK MATH META OBJECT SCRIPT STYLE SVG TEMPLATE".split(
        " "
      );
  var od =
    "AREA BR COL COMMAND HR IMG INPUT KEYGEN PARAM SOURCE TRACK WBR".split(" ");
  const pd = ["action", "formaction", "href"];
  function vd(a) {
    if (!md.test(a)) throw Error("");
    if (nd.indexOf(a.toUpperCase()) !== -1) throw Error("");
  }
  function wd(a, b, c) {
    vd(a);
    let d = `<${a}`;
    b && (d += xd(b));
    Array.isArray(c) || (c = c === void 0 ? [] : [c]);
    od.indexOf(a.toUpperCase()) !== -1
      ? (d += ">")
      : ((b = kd(c.map((e) => (e instanceof Fc ? e : id(String(e)))))),
        (d += ">" + b.toString() + "</" + a + ">"));
    return Gc(d);
  }
  function xd(a) {
    var b = "";
    const c = Object.keys(a);
    for (let f = 0; f < c.length; f++) {
      var d = c[f],
        e = a[d];
      if (!md.test(d)) throw Error("");
      if (e !== void 0 && e !== null) {
        if (/^on./i.test(d)) throw Error("");
        pd.indexOf(d.toLowerCase()) !== -1 &&
          (e = uc(e)
            ? e.toString()
            : Bc(String(e)) || "about:invalid#zClosurez");
        e = `${d}="${id(String(e))}"`;
        b += " " + e;
      }
    }
    return b;
  }
  function yd(a, ...b) {
    if (b.length === 0) return pc(a[0]);
    let c = a[0];
    for (let d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
    return pc(c);
  }
  function zd(a, b) {
    a = qc(a).toString();
    const c = a.split(/[?#]/),
      d = /[?]/.test(a) ? "?" + c[1] : "";
    return Ad(c[0], d, /[#]/.test(a) ? "#" + (d ? c[2] : c[1]) : "", b);
  }
  function Ad(a, b, c, d) {
    function e(g, h) {
      g != null &&
        (Array.isArray(g)
          ? g.forEach((k) => e(k, h))
          : ((b += f + encodeURIComponent(h) + "=" + encodeURIComponent(g)),
            (f = "&")));
    }
    let f = b.length ? "&" : "?";
    d.constructor === Object && (d = Object.entries(d));
    Array.isArray(d) ? d.forEach((g) => e(g[1], g[0])) : d.forEach(e);
    return pc(a + b + c);
  }
  function Bd(a) {
    try {
      return !!a && a.location.href != null && jc(a, "foo");
    } catch {
      return !1;
    }
  }
  function Cd(a, b = r) {
    b = Dd(b);
    let c = 0;
    for (; b && c++ < 40 && !a(b); ) b = Dd(b);
  }
  function Dd(a) {
    try {
      const b = a.parent;
      if (b && b != a) return b;
    } catch {}
    return null;
  }
  function Ed(a) {
    return Bd(a.top) ? a.top : null;
  }
  function Fd(a, b) {
    const c = Gd("SCRIPT", a);
    Nc(c, b);
    (a = a.getElementsByTagName("script")[0]) &&
      a.parentNode &&
      a.parentNode.insertBefore(c, a);
  }
  function Hd(a, b) {
    return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle;
  }
  function Id() {
    if (!globalThis.crypto) return Math.random();
    try {
      const a = new Uint32Array(1);
      globalThis.crypto.getRandomValues(a);
      return a[0] / 65536 / 65536;
    } catch {
      return Math.random();
    }
  }
  function Jd(a, b) {
    if (a)
      for (const c in a)
        Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
  }
  function Kd(a) {
    const b = [];
    Jd(a, function (c) {
      b.push(c);
    });
    return b;
  }
  var Nd = Bb(
    () =>
      Oa(
        [
          "Google Web Preview",
          "Mediapartners-Google",
          "Google-Read-Aloud",
          "Google-Adwords",
        ],
        Ld
      ) || Math.random() < 1e-4
  );
  const Ld = (a) => Jb().indexOf(a) != -1;
  var Od = /^([0-9.]+)px$/,
    Pd = /^(-?[0-9.]{1,30})$/;
  function Qd(a) {
    if (!Pd.test(a)) return null;
    a = Number(a);
    return isNaN(a) ? null : a;
  }
  function Rd(a) {
    return (a = Od.exec(a)) ? +a[1] : null;
  }
  var Sd = {
    Wn: "allow-forms",
    Xn: "allow-modals",
    Yn: "allow-orientation-lock",
    Zn: "allow-pointer-lock",
    ao: "allow-popups",
    bo: "allow-popups-to-escape-sandbox",
    co: "allow-presentation",
    eo: "allow-same-origin",
    fo: "allow-scripts",
    ho: "allow-top-navigation",
    io: "allow-top-navigation-by-user-activation",
  };
  const Td = Bb(() => Kd(Sd));
  function Ud(a) {
    const b = Td();
    return a.length ? La(b, (c) => !Pa(a, c)) : b;
  }
  function Vd() {
    const a = Gd("IFRAME"),
      b = {};
    Ia(Td(), (c) => {
      a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0);
    });
    return b;
  }
  var Wd = () => {
      const a = Vd();
      return !(
        !a["allow-top-navigation-by-user-activation"] ||
        !a["allow-popups-to-escape-sandbox"]
      );
    },
    Xd = (a, b) => {
      try {
        return !(!a.frames || !a.frames[b]);
      } catch {
        return !1;
      }
    },
    Yd = (a, b) => {
      for (let c = 0; c < 50; ++c) {
        if (Xd(a, b)) return a;
        if (!(a = Dd(a))) break;
      }
      return null;
    },
    Zd = Bb(() => (Ub() ? 2 : Vb() ? 1 : 0)),
    t = (a, b) => {
      Jd(b, (c, d) => {
        a.style.setProperty(d, c, "important");
      });
    },
    ae = (a, b) => {
      if ("length" in a.style) {
        a = a.style;
        const c = a.length;
        for (let d = 0; d < c; d++) {
          const e = a[d];
          b(a[e], e, a);
        }
      } else (a = $d(a.style.cssText)), Jd(a, b);
    },
    $d = (a) => {
      const b = {};
      if (a) {
        const c = /\s*:\s*/;
        Ia((a || "").split(/\s*;\s*/), (d) => {
          if (d) {
            var e = d.split(c);
            d = e[0];
            e = e[1];
            d && e && (b[d.toLowerCase()] = e);
          }
        });
      }
      return b;
    },
    be = (a) => {
      const b = /!\s*important/i;
      ae(a, (c, d) => {
        b.test(c) ? b.test(c) : a.style.setProperty(d, c, "important");
      });
    };
  const ce = {
      ["http://googleads.g.doubleclick.net"]: !0,
      ["http://pagead2.googlesyndication.com"]: !0,
      ["https://googleads.g.doubleclick.net"]: !0,
      ["https://pagead2.googlesyndication.com"]: !0,
    },
    fe = /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/,
    ge = /.*domain\.test$/,
    he = /\.prod\.google\.com(:\d+)?$/;
  var ie = (a) => ce[a] || fe.test(a) || ge.test(a) || he.test(a),
    je = (a, b) =>
      tb(a, { Ha: ({ methodName: c, Na: d }) => void b?.ma(c, d) }),
    ke = (a, b) =>
      new Promise((c) => {
        setTimeout(() => void c(b), a);
      });
  function Gd(a, b = document) {
    return b.createElement(String(a).toLowerCase());
  }
  var le = (a) => {
      let b = a;
      for (; a && a != a.parent; ) (a = a.parent), Bd(a) && (b = a);
      return b;
    },
    me = (a) => {
      var b = Ed(a);
      if (!b) return 1;
      a = Zd() === 0;
      const c = !!b.document.querySelector(
          'meta[name=viewport][content*="width=device-width"]'
        ),
        d = b.innerWidth;
      b = b.outerWidth;
      if (d === 0) return 1;
      const e = Math.round((b / d + Number.EPSILON) * 100) / 100;
      return e === 1
        ? 1
        : a || c
        ? e
        : Math.round((b / d / 0.4 + Number.EPSILON) * 100) / 100;
    };
  let ne;
  function oe(a) {
    return (ne || (ne = new TextEncoder())).encode(a);
  }
  function pe(a) {
    r.setTimeout(() => {
      throw a;
    }, 0);
  }
  var qe = {},
    re = null;
  function se(a) {
    var b = 3;
    b === void 0 && (b = 0);
    te();
    b = qe[b];
    const c = Array(Math.floor(a.length / 3)),
      d = b[64] || "";
    let e = 0,
      f = 0;
    for (; e < a.length - 2; e += 3) {
      var g = a[e],
        h = a[e + 1],
        k = a[e + 2],
        m = b[g >> 2];
      g = b[((g & 3) << 4) | (h >> 4)];
      h = b[((h & 15) << 2) | (k >> 6)];
      k = b[k & 63];
      c[f++] = m + g + h + k;
    }
    m = 0;
    k = d;
    switch (a.length - e) {
      case 2:
        (m = a[e + 1]), (k = b[(m & 15) << 2] || d);
      case 1:
        (a = a[e]), (c[f] = b[a >> 2] + b[((a & 3) << 4) | (m >> 4)] + k + d);
    }
    return c.join("");
  }
  function ue(a) {
    const b = [];
    let c = 0;
    for (let d = 0; d < a.length; d++) {
      let e = a.charCodeAt(d);
      e > 255 && ((b[c++] = e & 255), (e >>= 8));
      b[c++] = e;
    }
    return se(b);
  }
  function ve(a) {
    const b = [];
    we(a, function (c) {
      b.push(c);
    });
    return b;
  }
  function we(a, b) {
    function c(e) {
      for (; d < a.length; ) {
        const f = a.charAt(d++),
          g = re[f];
        if (g != null) return g;
        if (!/^[\s\xa0]*$/.test(f))
          throw Error("Unknown base64 encoding at char: " + f);
      }
      return e;
    }
    te();
    let d = 0;
    for (;;) {
      const e = c(-1),
        f = c(0),
        g = c(64),
        h = c(64);
      if (h === 64 && e === -1) break;
      b((e << 2) | (f >> 4));
      g != 64 &&
        (b(((f << 4) & 240) | (g >> 2)), h != 64 && b(((g << 6) & 192) | h));
    }
  }
  function te() {
    if (!re) {
      re = {};
      var a =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
            ""
          ),
        b = ["+/=", "+/", "-_=", "-_.", "-_"];
      for (let c = 0; c < 5; c++) {
        const d = a.concat(b[c].split(""));
        qe[c] = d;
        for (let e = 0; e < d.length; e++) {
          const f = d[e];
          re[f] === void 0 && (re[f] = e);
        }
      }
    }
  }
  var xe = typeof structuredClone != "undefined";
  let ye = void 0,
    ze;
  function Ae(a) {
    if (ze) throw Error("");
    ze = (b) => {
      r.setTimeout(() => {
        a(b);
      }, 0);
    };
  }
  function Be(a) {
    if (ze)
      try {
        ze(a);
      } catch (b) {
        throw ((b.cause = a), b);
      }
  }
  function Ce() {
    const a = Error();
    Vc(a, "incident");
    ze ? Be(a) : pe(a);
  }
  function De(a) {
    a = Error(a);
    Vc(a, "warning");
    Be(a);
    return a;
  }
  function Ee(a, b) {
    if (a != null) {
      var c = ye ?? (ye = {});
      var d = c[a] || 0;
      d >= b || ((c[a] = d + 1), Ce());
    }
  }
  function Fe(a, b = !1) {
    return b && Symbol.for && a
      ? Symbol.for(a)
      : a != null
      ? Symbol(a)
      : Symbol();
  }
  var Ge = Fe(),
    He = Fe(),
    Ie = Fe(),
    Je = Fe(),
    Ke = Fe(),
    Le = Fe("m_m", !0);
  const u = Fe("jas", !0);
  var Me;
  const Ne = [];
  Ne[u] = 7;
  Me = Object.freeze(Ne);
  function Oe(a, b) {
    a[u] |= b;
  }
  function Pe(a) {
    if (4 & a) return 512 & a ? 512 : 1024 & a ? 1024 : 0;
  }
  function Se(a) {
    Oe(a, 34);
    return a;
  }
  function Te(a) {
    Oe(a, 32);
    return a;
  }
  var Ue = {};
  function Ve(a, b) {
    return b === void 0
      ? a.l !== We && !!(2 & (a.ba[u] | 0))
      : !!(2 & b) && a.l !== We;
  }
  const We = {};
  class Xe {
    constructor(a, b, c) {
      this.g = a;
      this.j = b;
      this.l = c;
    }
    next() {
      const a = this.g.next();
      a.done || (a.value = this.j.call(this.l, a.value));
      return a;
    }
    [Symbol.iterator]() {
      return this;
    }
  }
  var Ye = Object.freeze({}),
    Ze = Object.freeze({});
  function $e(a, b, c) {
    const d = b & 128 ? 0 : -1,
      e = a.length;
    var f;
    if ((f = !!e))
      (f = a[e - 1]),
        (f = f != null && typeof f === "object" && f.constructor === Object);
    const g = e + (f ? -1 : 0);
    for (b = b & 128 ? 1 : 0; b < g; b++) c(b - d, a[b]);
    if (f) {
      a = a[e - 1];
      for (const h in a)
        Object.prototype.hasOwnProperty.call(a, h) && !isNaN(h) && c(+h, a[h]);
    }
  }
  var af = {};
  function bf(a) {
    if (fb(a)) {
      if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(a)) throw Error(String(a));
    } else if (ib(a) && !Number.isSafeInteger(a)) throw Error(String(a));
    return BigInt(a);
  }
  var ef = hb((a) => a >= cf && a <= df);
  const cf = BigInt(Number.MIN_SAFE_INTEGER),
    df = BigInt(Number.MAX_SAFE_INTEGER);
  let ff = 0,
    gf = 0,
    hf;
  function jf(a) {
    const b = a >>> 0;
    ff = b;
    gf = ((a - b) / 4294967296) >>> 0;
  }
  function kf(a) {
    if (a < 0) {
      jf(-a);
      a = ff;
      var b = gf;
      b = ~b;
      a ? (a = ~a + 1) : (b += 1);
      const [c, d] = [a, b];
      ff = c >>> 0;
      gf = d >>> 0;
    } else jf(a);
  }
  function lf(a, b) {
    const c = b * 4294967296 + (a >>> 0);
    return Number.isSafeInteger(c) ? c : mf(a, b);
  }
  function mf(a, b) {
    b >>>= 0;
    a >>>= 0;
    var c;
    b <= 2097151
      ? (c = "" + (4294967296 * b + a))
      : (c = "" + ((BigInt(b) << BigInt(32)) | BigInt(a)));
    return c;
  }
  function nf() {
    var a = ff,
      b = gf,
      c;
    b & 2147483648
      ? (c = "" + ((BigInt(b | 0) << BigInt(32)) | BigInt(a >>> 0)))
      : (c = mf(a, b));
    return c;
  }
  function of(a) {
    a.length < 16
      ? kf(Number(a))
      : ((a = BigInt(a)),
        (ff = Number(a & BigInt(4294967295)) >>> 0),
        (gf = Number((a >> BigInt(32)) & BigInt(4294967295))));
  }
  const pf = typeof BigInt === "function" ? BigInt.asIntN : void 0,
    qf = typeof BigInt === "function" ? BigInt.asUintN : void 0,
    rf = Number.isSafeInteger,
    sf = Number.isFinite,
    tf = Math.trunc;
  function uf(a) {
    if (a != null && typeof a !== "number")
      throw Error(
        `Value of float/double field must be a number, found ${typeof a}: ${a}`
      );
    return a;
  }
  function vf(a) {
    if (a == null || typeof a === "number") return a;
    if (a === "NaN" || a === "Infinity" || a === "-Infinity") return Number(a);
  }
  function wf(a) {
    if (typeof a !== "boolean")
      throw Error(`Expected boolean but got ${ra(a)}: ${a}`);
    return a;
  }
  function xf(a) {
    if (a == null || typeof a === "boolean") return a;
    if (typeof a === "number") return !!a;
  }
  const yf = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
  function zf(a) {
    switch (typeof a) {
      case "bigint":
        return !0;
      case "number":
        return sf(a);
      case "string":
        return yf.test(a);
      default:
        return !1;
    }
  }
  function Af(a) {
    if (!sf(a)) throw De("enum");
    return a | 0;
  }
  function Bf(a) {
    return a == null ? a : sf(a) ? a | 0 : void 0;
  }
  function Cf(a) {
    if (typeof a !== "number") throw De("int32");
    if (!sf(a)) throw De("int32");
    return a | 0;
  }
  function Df(a) {
    if (a == null) return a;
    if (typeof a === "string" && a) a = +a;
    else if (typeof a !== "number") return;
    return sf(a) ? a | 0 : void 0;
  }
  function Lf(a) {
    if (typeof a !== "number") throw De("uint32");
    if (!sf(a)) throw De("uint32");
    return a >>> 0;
  }
  function Mf(a) {
    if (a == null) return a;
    if (typeof a === "string" && a) a = +a;
    else if (typeof a !== "number") return;
    return sf(a) ? a >>> 0 : void 0;
  }
  function Nf(a, b = 0) {
    if (!zf(a)) throw De("int64");
    const c = typeof a;
    switch (b) {
      case 512:
        switch (c) {
          case "string":
            return Of(a);
          case "bigint":
            return String(pf(64, a));
          default:
            return Pf(a);
        }
      case 1024:
        switch (c) {
          case "string":
            return Qf(a);
          case "bigint":
            return bf(pf(64, a));
          default:
            return Rf(a);
        }
      case 0:
        switch (c) {
          case "string":
            return Of(a);
          case "bigint":
            return bf(pf(64, a));
          default:
            return Sf(a);
        }
      default:
        return Ec(b, "Unknown format requested type for int64");
    }
  }
  function Tf(a) {
    return a == null ? a : Nf(a, 0);
  }
  function Uf(a) {
    if (a[0] === "-") return !1;
    const b = a.length;
    return b < 20 ? !0 : b === 20 && Number(a.substring(0, 6)) < 184467;
  }
  function Vf(a) {
    const b = a.length;
    return a[0] === "-"
      ? b < 20
        ? !0
        : b === 20 && Number(a.substring(0, 7)) > -922337
      : b < 19
      ? !0
      : b === 19 && Number(a.substring(0, 6)) < 922337;
  }
  function Wf(a) {
    if (a < 0) {
      kf(a);
      var b = mf(ff, gf);
      a = Number(b);
      return rf(a) ? a : b;
    }
    b = String(a);
    if (Uf(b)) return b;
    kf(a);
    return lf(ff, gf);
  }
  function Sf(a) {
    a = tf(a);
    if (!rf(a)) {
      kf(a);
      var b = ff,
        c = gf;
      if ((a = c & 2147483648))
        (b = (~b + 1) >>> 0), (c = ~c >>> 0), b == 0 && (c = (c + 1) >>> 0);
      b = lf(b, c);
      a = typeof b === "number" ? (a ? -b : b) : a ? "-" + b : b;
    }
    return a;
  }
  function Xf(a) {
    a = tf(a);
    return a >= 0 && rf(a) ? a : Wf(a);
  }
  function Pf(a) {
    a = tf(a);
    if (rf(a)) a = String(a);
    else {
      {
        const b = String(a);
        Vf(b) ? (a = b) : (kf(a), (a = nf()));
      }
    }
    return a;
  }
  function Yf(a) {
    a = tf(a);
    if (a >= 0 && rf(a)) a = String(a);
    else {
      {
        const b = String(a);
        Uf(b) ? (a = b) : (kf(a), (a = mf(ff, gf)));
      }
    }
    return a;
  }
  function Of(a) {
    var b = tf(Number(a));
    if (rf(b)) return String(b);
    b = a.indexOf(".");
    b !== -1 && (a = a.substring(0, b));
    Vf(a) || (of(a), (a = nf()));
    return a;
  }
  function Qf(a) {
    var b = tf(Number(a));
    if (rf(b)) return bf(b);
    b = a.indexOf(".");
    b !== -1 && (a = a.substring(0, b));
    return bf(pf(64, BigInt(a)));
  }
  function Rf(a) {
    return rf(a) ? bf(Sf(a)) : bf(Pf(a));
  }
  function Zf(a) {
    var b = tf(Number(a));
    if (rf(b) && b >= 0) return String(b);
    b = a.indexOf(".");
    b !== -1 && (a = a.substring(0, b));
    Uf(a) || (of(a), (a = mf(ff, gf)));
    return a;
  }
  function $f(a) {
    if (a == null) return a;
    if (typeof a === "bigint")
      return (
        ef(a)
          ? (a = Number(a))
          : ((a = pf(64, a)), (a = ef(a) ? Number(a) : String(a))),
        a
      );
    if (zf(a)) return typeof a === "number" ? Sf(a) : Of(a);
  }
  function ag(a) {
    const b = typeof a;
    if (a == null) return a;
    if (b === "bigint") return bf(pf(64, a));
    if (zf(a)) return b === "string" ? Qf(a) : Rf(a);
  }
  function bg(a, b = 0) {
    if (!zf(a)) throw De("uint64");
    const c = typeof a;
    switch (b) {
      case 512:
        switch (c) {
          case "string":
            return Zf(a);
          case "bigint":
            return String(qf(64, a));
          default:
            return Yf(a);
        }
      case 1024:
        switch (c) {
          case "string":
            return (
              (b = tf(Number(a))),
              rf(b) && b >= 0
                ? (a = bf(b))
                : ((b = a.indexOf(".")),
                  b !== -1 && (a = a.substring(0, b)),
                  (a = bf(qf(64, BigInt(a))))),
              a
            );
          case "bigint":
            return bf(qf(64, a));
          default:
            return rf(a) ? bf(Xf(a)) : bf(Yf(a));
        }
      case 0:
        switch (c) {
          case "string":
            return Zf(a);
          case "bigint":
            return bf(qf(64, a));
          default:
            return Xf(a);
        }
      default:
        return Ec(b, "Unknown format requested type for int64");
    }
  }
  function cg(a) {
    return a == null ? a : bg(a, 0);
  }
  function dg(a) {
    if (a == null) return a;
    const b = typeof a;
    if (b === "bigint") return String(pf(64, a));
    if (zf(a)) {
      if (b === "string") return Of(a);
      if (b === "number") return Sf(a);
    }
  }
  function eg(a) {
    if (a == null) return a;
    const b = typeof a;
    if (b === "bigint") return String(qf(64, a));
    if (zf(a)) {
      if (b === "string") return Zf(a);
      if (b === "number") return Xf(a);
    }
  }
  function fg(a) {
    if (typeof a !== "string") throw Error();
    return a;
  }
  function gg(a) {
    if (a != null && typeof a !== "string") throw Error();
    return a;
  }
  function hg(a) {
    return a == null || typeof a === "string" ? a : void 0;
  }
  function ig(a, b, c, d) {
    if (a != null && a[Le] === Ue) return a;
    if (!Array.isArray(a))
      return (
        c
          ? d & 2
            ? ((a = b[Ge]) || ((a = new b()), Se(a.ba), (a = b[Ge] = a)),
              (b = a))
            : (b = new b())
          : (b = void 0),
        b
      );
    c = a[u] | 0;
    d = c | (d & 32) | (d & 2);
    d !== c && (a[u] = d);
    return new b(a);
  }
  function jg(a, b, c) {
    return b ? fg(a) : hg(a) ?? (c ? "" : void 0);
  }
  function kg(a) {
    return a;
  }
  const lg = {},
    mg = (() =>
      class extends Map {
        constructor() {
          super();
        }
      })();
  function ng(a) {
    return a;
  }
  function og(a) {
    if (a.jd & 2) throw Error("Cannot mutate an immutable Map");
  }
  var sg = class extends mg {
    constructor(a, b, c = ng, d = ng) {
      super();
      this.jd = a[u] | 0;
      this.Xc = b;
      this.xf = c;
      this.Tj = this.Xc ? pg : d;
      for (let e = 0; e < a.length; e++) {
        const f = a[e],
          g = c(f[0], !1, !0);
        let h = f[1];
        b
          ? h === void 0 && (h = null)
          : (h = d(f[1], !1, !0, void 0, void 0, this.jd));
        super.set(g, h);
      }
    }
    fn() {
      var a = qg;
      if (this.size !== 0) return Array.from(super.entries(), a);
    }
    Pj() {
      return Array.from(super.entries());
    }
    clear() {
      og(this);
      super.clear();
    }
    delete(a) {
      og(this);
      return super.delete(this.xf(a, !0, !1));
    }
    entries() {
      if (this.Xc) {
        var a = super.keys();
        a = new Xe(a, rg, this);
      } else a = super.entries();
      return a;
    }
    values() {
      if (this.Xc) {
        var a = super.keys();
        a = new Xe(a, sg.prototype.get, this);
      } else a = super.values();
      return a;
    }
    forEach(a, b) {
      this.Xc
        ? super.forEach((c, d, e) => {
            a.call(b, e.get(d), d, e);
          })
        : super.forEach(a, b);
    }
    set(a, b) {
      og(this);
      a = this.xf(a, !0, !1);
      return a == null
        ? this
        : b == null
        ? (super.delete(a), this)
        : super.set(a, this.Tj(b, !0, !0, this.Xc, !1, this.jd));
    }
    has(a) {
      return super.has(this.xf(a, !1, !1));
    }
    get(a) {
      a = this.xf(a, !1, !1);
      const b = super.get(a);
      if (b !== void 0) {
        var c = this.Xc;
        return c
          ? ((c = this.Tj(b, !1, !0, c, this.Fk, this.jd)),
            c !== b && super.set(a, c),
            c)
          : b;
      }
    }
    [Symbol.iterator]() {
      return this.entries();
    }
  };
  sg.prototype.toJSON = void 0;
  function pg(a, b, c, d, e, f) {
    a = ig(a, d, c, f);
    e && (a = tg(a));
    return a;
  }
  function rg(a) {
    return [a, this.get(a)];
  }
  let ug;
  function vg() {
    return ug || (ug = new sg(Se([]), void 0, void 0, void 0, lg));
  }
  function wg(a, b, c, d) {
    var e = d !== void 0;
    d = !!d;
    const f = [];
    var g = a.length;
    let h,
      k = 4294967295,
      m = !1;
    const l = !!(b & 64),
      n = l ? (b & 128 ? 0 : -1) : void 0;
    b & 1 ||
      ((h = g && a[g - 1]),
      h != null && typeof h === "object" && h.constructor === Object
        ? (g--, (k = g))
        : (h = void 0),
      !l ||
        b & 128 ||
        e ||
        ((m = !0), (k = (xg ?? kg)(k - n, n, a, h, void 0) + n)));
    b = void 0;
    for (e = 0; e < g; e++) {
      let p = a[e];
      if (p != null && (p = c(p, d)) != null)
        if (l && e >= k) {
          const q = e - n;
          (b ?? (b = {}))[q] = p;
        } else f[e] = p;
    }
    if (h)
      for (let p in h) {
        if (!Object.prototype.hasOwnProperty.call(h, p)) continue;
        a = h[p];
        if (a == null || (a = c(a, d)) == null) continue;
        g = +p;
        let q;
        l && !Number.isNaN(g) && (q = g + n) < k
          ? (f[q] = a)
          : ((b ?? (b = {}))[p] = a);
      }
    b && (m ? f.push(b) : (f[k] = b));
    return f;
  }
  function qg(a) {
    a[0] = yg(a[0]);
    a[1] = yg(a[1]);
    return a;
  }
  function yg(a) {
    switch (typeof a) {
      case "number":
        return Number.isFinite(a) ? a : "" + a;
      case "bigint":
        return ef(a) ? Number(a) : "" + a;
      case "boolean":
        return a ? 1 : 0;
      case "object":
        if (Array.isArray(a)) {
          const b = a[u] | 0;
          return a.length === 0 && b & 1 ? void 0 : wg(a, b, yg);
        }
        if (a != null && a[Le] === Ue) return zg(a);
        if (a instanceof sg) return a.fn();
        return;
    }
    return a;
  }
  var Ag = xe ? structuredClone : (a) => wg(a, 0, yg);
  let xg;
  function zg(a) {
    a = a.ba;
    return wg(a, a[u] | 0, yg);
  }
  let Bg, Cg;
  function Dg(a) {
    switch (typeof a) {
      case "boolean":
        return Bg || (Bg = [0, void 0, !0]);
      case "number":
        return a > 0
          ? void 0
          : a === 0
          ? Cg || (Cg = [0, void 0])
          : [-a, void 0];
      case "string":
        return [0, a];
      case "object":
        return a;
    }
  }
  function Eg(a, b, c) {
    return (a = Fg(a, b[0], b[1], c ? 1 : 2));
  }
  function Fg(a, b, c, d = 0) {
    if (a == null) {
      var e = 32;
      c ? ((a = [c]), (e |= 128)) : (a = []);
      b && (e = (e & -8380417) | ((b & 1023) << 13));
    } else {
      if (!Array.isArray(a)) throw Error("narr");
      e = a[u] | 0;
      if (Gb && 1 & e) throw Error("rfarr");
      2048 & e && !(2 & e) && Gg();
      if (e & 256) throw Error("farr");
      if (e & 64) return d !== 0 || e & 2048 || (a[u] = e | 2048), a;
      if (c && ((e |= 128), c !== a[0])) throw Error("mid");
      a: {
        c = a;
        e |= 64;
        var f = c.length;
        if (f) {
          var g = f - 1;
          const k = c[g];
          if (k != null && typeof k === "object" && k.constructor === Object) {
            b = e & 128 ? 0 : -1;
            g -= b;
            if (g >= 1024) throw Error("pvtlmt");
            for (var h in k)
              if (Object.prototype.hasOwnProperty.call(k, h))
                if (((f = +h), f < g)) (c[f + b] = k[h]), delete k[h];
                else break;
            e = (e & -8380417) | ((g & 1023) << 13);
            break a;
          }
        }
        if (b) {
          h = Math.max(b, f - (e & 128 ? 0 : -1));
          if (h > 1024) throw Error("spvt");
          e = (e & -8380417) | ((h & 1023) << 13);
        }
      }
    }
    e |= 64;
    d === 0 && (e |= 2048);
    a[u] = e;
    return a;
  }
  function Gg() {
    if (Gb) throw Error("carr");
    Ee(Ke, 5);
  }
  function Hg(a, b) {
    if (typeof a !== "object") return a;
    if (Array.isArray(a)) {
      var c = a[u] | 0;
      return a.length === 0 && c & 1 ? void 0 : Ig(a, c, b);
    }
    if (a != null && a[Le] === Ue) return Jg(a);
    if (a instanceof sg) {
      c = a.jd;
      if (c & 2) return a;
      if (a.size) {
        b = Se(a.Pj());
        if (a.Xc)
          for (a = 0; a < b.length; a++) {
            const d = b[a];
            let e = d[1];
            e == null || typeof e !== "object"
              ? (e = void 0)
              : e != null && e[Le] === Ue
              ? (e = Jg(e))
              : Array.isArray(e)
              ? (e = Ig(e, e[u] | 0, !!(c & 32)))
              : (e = void 0);
            d[1] = e;
          }
        return b;
      }
    }
  }
  function Ig(a, b, c) {
    if (b & 2) return a;
    !c || 4096 & b || 16 & b
      ? (a = Kg(a, b, !1, c && !(b & 16)))
      : (Oe(a, 34), b & 4 && Object.freeze(a));
    return a;
  }
  function Lg(a, b, c) {
    a = new a.constructor(b);
    c && (a.l = We);
    a.A = We;
    return a;
  }
  function Jg(a) {
    const b = a.ba,
      c = b[u] | 0;
    return Ve(a, c) ? a : Mg(a, b, c) ? Lg(a, b) : Kg(b, c);
  }
  function Ng(a) {
    const b = a.ba,
      c = b[u] | 0;
    return Mg(a, b, c) ? Lg(a, b, !0) : new a.constructor(Kg(b, c, !1));
  }
  function Kg(a, b, c, d) {
    d ?? (d = !!(34 & b));
    a = wg(a, b, Hg, d);
    d = 32;
    c && (d |= 2);
    b = (b & 8380609) | d;
    a[u] = b;
    return a;
  }
  function tg(a) {
    const b = a.ba,
      c = b[u] | 0;
    return Ve(a, c)
      ? Mg(a, b, c)
        ? Lg(a, b, !0)
        : new a.constructor(Kg(b, c, !1))
      : a;
  }
  function ih(a) {
    const b = a.ba,
      c = b[u] | 0;
    return Ve(a, c)
      ? a
      : Mg(a, b, c)
      ? Lg(a, b)
      : new a.constructor(Kg(b, c, !0));
  }
  function jh(a) {
    if (a.l !== We) return !1;
    var b = a.ba;
    b = Kg(b, b[u] | 0);
    Oe(b, 2048);
    a.ba = b;
    a.l = void 0;
    a.A = void 0;
    return !0;
  }
  function kh(a) {
    if (!jh(a) && Ve(a, a.ba[u] | 0)) throw Error();
  }
  function lh(a, b) {
    b === void 0 && (b = a[u] | 0);
    b & 32 && !(b & 4096) && (a[u] = b | 4096);
  }
  function Mg(a, b, c) {
    return c & 2
      ? !0
      : c & 32 && !(c & 4096)
      ? ((b[u] = c | 2), (a.l = We), !0)
      : !1;
  }
  const mh = bf(0),
    nh = {};
  function w(a, b, c, d, e) {
    b = oh(a.ba, b, c, e);
    if (b !== null || (d && a.A !== We)) return b;
  }
  function oh(a, b, c, d) {
    if (b === -1) return null;
    const e = b + (c ? 0 : -1),
      f = a.length - 1;
    let g, h;
    if (!(f < 1 + (c ? 0 : -1))) {
      if (e >= f)
        if (
          ((g = a[f]),
          g != null && typeof g === "object" && g.constructor === Object)
        )
          (c = g[b]), (h = !0);
        else if (e === f) c = g;
        else return;
      else c = a[e];
      if (d && c != null) {
        d = d(c);
        if (d == null) return d;
        if (!Object.is(d, c)) return h ? (g[b] = d) : (a[e] = d), d;
      }
      return c;
    }
  }
  function ph(a, b, c) {
    kh(a);
    const d = a.ba;
    qh(d, d[u] | 0, b, c);
    return a;
  }
  function qh(a, b, c, d, e) {
    const f = c + (e ? 0 : -1);
    var g = a.length - 1;
    if (g >= 1 + (e ? 0 : -1) && f >= g) {
      const h = a[g];
      if (h != null && typeof h === "object" && h.constructor === Object)
        return (h[c] = d), b;
    }
    if (f <= g) return (a[f] = d), b;
    d !== void 0 &&
      ((g = ((b ?? (b = a[u] | 0)) >> 13) & 1023 || 536870912),
      c >= g ? d != null && (a[g + (e ? 0 : -1)] = { [c]: d }) : (a[f] = d));
    return b;
  }
  function rh(a, b, c) {
    a = a.ba;
    return sh(a, a[u] | 0, b, c) !== void 0;
  }
  function th(a, b, c, d) {
    const e = a.ba;
    return sh(e, e[u] | 0, b, uh(a, d, c)) !== void 0;
  }
  function vh(a, b, c) {
    return w(a, b, void 0, c, vf);
  }
  function wh(a) {
    return a === Ye ? 2 : 4;
  }
  function xh(a, b, c, d, e, f, g) {
    let h = a.ba,
      k = h[u] | 0;
    d = Ve(a, k) ? 1 : d;
    e = !!e || d === 3;
    d === 2 && jh(a) && ((h = a.ba), (k = h[u] | 0));
    let m = yh(h, b, g),
      l = m === Me ? 7 : m[u] | 0,
      n = zh(l, k);
    var p = n;
    4 & p
      ? f == null
        ? (a = !1)
        : (!e &&
            f === 0 &&
            (512 & p || 1024 & p) &&
            (a.constructor[Ie] = (a.constructor[Ie] | 0) + 1) < 5 &&
            Ce(),
          (a = f === 0 ? !1 : !(f & p)))
      : (a = !0);
    if (a) {
      4 & n && ((m = [...m]), (l = 0), (n = Ah(n, k)), (k = qh(h, k, b, m, g)));
      let q = (p = 0);
      for (; p < m.length; p++) {
        const v = c(m[p]);
        v != null && (m[q++] = v);
      }
      q < p && (m.length = q);
      c = (n | 4) & -513;
      n = c &= -1025;
      f && (n |= f);
      n &= -4097;
    }
    n !== l && ((m[u] = n), 2 & n && Object.freeze(m));
    return (m = Bh(m, n, h, k, b, g, d, a, e));
  }
  function Bh(a, b, c, d, e, f, g, h, k) {
    let m = b;
    g === 1 || (g !== 4 ? 0 : 2 & b || (!(16 & b) && 32 & d))
      ? Ch(b) ||
        ((b |=
          !a.length || (h && !(4096 & b)) || (32 & d && !(4096 & b || 16 & b))
            ? 2
            : 256),
        b !== m && (a[u] = b),
        Object.freeze(a))
      : (g === 2 &&
          Ch(b) &&
          ((a = [...a]), (m = 0), (b = Ah(b, d)), (d = qh(c, d, e, a, f))),
        Ch(b) || (k || (b |= 16), b !== m && (a[u] = b)));
    2 & b || !(4096 & b || 16 & b) || lh(c, d);
    return a;
  }
  function yh(a, b, c) {
    a = oh(a, b, c);
    return Array.isArray(a) ? a : Me;
  }
  function zh(a, b) {
    2 & b && (a |= 2);
    return a | 1;
  }
  function Ch(a) {
    return (!!(2 & a) && !!(4 & a)) || !!(256 & a);
  }
  function Dh(a) {
    var b = Eh;
    let c;
    var d = a.ba;
    var e = d[u] | 0;
    c = Ve(a, e);
    a: {
      !c && jh(a) && ((d = a.ba), (e = d[u] | 0));
      var f = oh(d, 14);
      a = !1;
      if (f == null) {
        if (c) {
          d = vg();
          break a;
        }
        f = [];
      } else if (f.constructor === sg)
        if (f.jd & 2 && !c) f = f.Pj();
        else {
          d = f;
          break a;
        }
      else Array.isArray(f) ? (a = !!((f[u] | 0) & 2)) : (f = []);
      if (c) {
        if (!f.length) {
          d = vg();
          break a;
        }
        a || ((a = !0), Se(f));
      } else if (a) {
        a = !1;
        f = [...f];
        for (let g = 0; g < f.length; g++) {
          const h = (f[g] = [...f[g]]);
          Array.isArray(h[1]) && (h[1] = Se(h[1]));
        }
      }
      !a && e & 32 && Te(f);
      f = new sg(f, b, jg, void 0);
      e = qh(d, e, 14, f);
      a || lh(d, e);
      d = f;
    }
    !c && b && (d.Fk = !0);
    return d;
  }
  function Fh(a, b, c, d) {
    kh(a);
    const e = a.ba;
    let f = e[u] | 0;
    if (c == null) return qh(e, f, b), a;
    let g = c === Me ? 7 : c[u] | 0,
      h = g;
    var k = Ch(g);
    let m = k || Object.isFrozen(c);
    k || (g = 0);
    m || ((c = [...c]), (h = 0), (g = Ah(g, f)), (m = !1));
    g |= 5;
    k = Pe(g) ?? 0;
    for (let l = 0; l < c.length; l++) {
      const n = c[l],
        p = d(n, k);
      Object.is(n, p) ||
        (m && ((c = [...c]), (h = 0), (g = Ah(g, f)), (m = !1)), (c[l] = p));
    }
    g !== h && (m && ((c = [...c]), (g = Ah(g, f))), (c[u] = g));
    qh(e, f, b, c);
    return a;
  }
  function Gh(a, b, c, d) {
    kh(a);
    const e = a.ba;
    qh(e, e[u] | 0, b, (d === "0" ? Number(c) === 0 : c === d) ? void 0 : c);
    return a;
  }
  function Hh(a, b, c, d) {
    kh(a);
    const e = a.ba;
    var f = e[u] | 0;
    if (d == null) {
      var g = Ih(e);
      if (Jh(g, e, f, c) === b) g.set(c, 0);
      else return a;
    } else {
      g = Ih(e);
      const h = Jh(g, e, f, c);
      h !== b && (h && (f = qh(e, f, h)), g.set(c, b));
    }
    qh(e, f, b, d);
    return a;
  }
  function uh(a, b, c) {
    return Kh(a, b) === c ? c : -1;
  }
  function Kh(a, b) {
    a = a.ba;
    return Jh(Ih(a), a, void 0, b);
  }
  function Ih(a) {
    return a[He] ?? (a[He] = new Map());
  }
  function Jh(a, b, c, d) {
    let e = a.get(d);
    if (e != null) return e;
    e = 0;
    for (let f = 0; f < d.length; f++) {
      const g = d[f];
      oh(b, g) != null && (e !== 0 && (c = qh(b, c, e)), (e = g));
    }
    a.set(d, e);
    return e;
  }
  function sh(a, b, c, d) {
    let e = !1;
    d = oh(a, d, void 0, (f) => {
      const g = ig(f, c, !1, b);
      e = g !== f && g != null;
      return g;
    });
    if (d != null) return e && !Ve(d) && lh(a, b), d;
  }
  function Lh(a, b, c) {
    a = a.ba;
    (c = sh(a, a[u] | 0, b, c)) ||
      (c = b[Ge]) ||
      ((c = new b()), Se(c.ba), (c = b[Ge] = c));
    return c;
  }
  function x(a, b, c) {
    let d = a.ba,
      e = d[u] | 0;
    b = sh(d, e, b, c);
    if (b == null) return b;
    e = d[u] | 0;
    if (!Ve(a, e)) {
      const f = tg(b);
      f !== b &&
        (jh(a) && ((d = a.ba), (e = d[u] | 0)),
        (b = f),
        (e = qh(d, e, c, b)),
        lh(d, e));
    }
    return b;
  }
  function Mh(a, b, c, d, e, f, g, h, k) {
    var m = Ve(a, c);
    f = m ? 1 : f;
    h = !!h || f === 3;
    m = k && !m;
    (f === 2 || m) && jh(a) && ((b = a.ba), (c = b[u] | 0));
    a = yh(b, e, g);
    var l = a === Me ? 7 : a[u] | 0,
      n = zh(l, c);
    if ((k = !(4 & n))) {
      var p = a,
        q = c;
      const v = !!(2 & n);
      v && (q |= 2);
      let E = !v,
        F = !0,
        R = 0,
        ea = 0;
      for (; R < p.length; R++) {
        const J = ig(p[R], d, !1, q);
        if (J instanceof d) {
          if (!v) {
            const N = Ve(J);
            E && (E = !N);
            F && (F = N);
          }
          p[ea++] = J;
        }
      }
      ea < R && (p.length = ea);
      n |= 4;
      n = F ? n & -4097 : n | 4096;
      n = E ? n | 8 : n & -9;
    }
    n !== l && ((a[u] = n), 2 & n && Object.freeze(a));
    if (
      m &&
      !(
        8 & n ||
        (!a.length &&
          (f === 1 || (f !== 4 ? 0 : 2 & n || (!(16 & n) && 32 & c))))
      )
    ) {
      Ch(n) && ((a = [...a]), (n = Ah(n, c)), (c = qh(b, c, e, a, g)));
      d = a;
      m = n;
      for (l = 0; l < d.length; l++)
        (p = d[l]), (n = tg(p)), p !== n && (d[l] = n);
      m |= 8;
      n = m = d.length ? m | 4096 : m & -4097;
      a[u] = n;
    }
    return (a = Bh(a, n, b, c, e, g, f, k, h));
  }
  function Nh(a, b, c, d) {
    const e = a.ba;
    return Mh(a, e, e[u] | 0, b, c, d, void 0, !1, !0);
  }
  function Oh(a) {
    a == null && (a = void 0);
    return a;
  }
  function y(a, b, c) {
    c = Oh(c);
    ph(a, b, c);
    c && !Ve(c) && lh(a.ba);
    return a;
  }
  function z(a, b, c, d) {
    d = Oh(d);
    Hh(a, b, c, d);
    d && !Ve(d) && lh(a.ba);
    return a;
  }
  function Ph(a, b, c) {
    kh(a);
    const d = a.ba;
    let e = d[u] | 0;
    if (c == null) return qh(d, e, b), a;
    let f = c === Me ? 7 : c[u] | 0,
      g = f;
    const h = Ch(f),
      k = h || Object.isFrozen(c);
    let m = !0,
      l = !0;
    for (let p = 0; p < c.length; p++) {
      var n = c[p];
      h || ((n = Ve(n)), m && (m = !n), l && (l = n));
    }
    h || ((f = m ? 13 : 5), (f = l ? f & -4097 : f | 4096));
    (k && f === g) || ((c = [...c]), (g = 0), (f = Ah(f, e)));
    f !== g && (c[u] = f);
    e = qh(d, e, b, c);
    2 & f || !(4096 & f || 16 & f) || lh(d, e);
    return a;
  }
  function Ah(a, b) {
    return (a = (2 & b ? a | 2 : a & -3) & -273);
  }
  function Qh(a, b, c, d, e, f, g, h) {
    kh(a);
    b = xh(a, b, e, 2, !0, void 0, f);
    e = Pe(b === Me ? 7 : b[u] | 0) ?? 0;
    if (h)
      if (Array.isArray(d))
        for (g = d.length, h = 0; h < g; h++) b.push(c(d[h], e));
      else for (const k of d) b.push(c(k, e));
    else {
      if (g) throw Error();
      b.push(c(d, e));
    }
    return a;
  }
  function Rh(a, b, c, d) {
    var e = d;
    kh(a);
    d = a.ba;
    b = Mh(a, d, d[u] | 0, c, b, 2, void 0, !0);
    e = e != null ? e : new c();
    b.push(e);
    const f = (c = b === Me ? 7 : b[u] | 0);
    (e = Ve(e)) ? ((c &= -9), b.length === 1 && (c &= -4097)) : (c |= 4096);
    c !== f && (b[u] = c);
    e || lh(d);
    return a;
  }
  function Sh(a, b, c) {
    return $f(w(a, b, void 0, c));
  }
  function Th(a, b, c) {
    return ag(w(a, b, void 0, c));
  }
  function Uh(a) {
    {
      a = w(a, 10);
      const b = typeof a;
      a =
        a == null
          ? a
          : b === "bigint"
          ? String(qf(64, a))
          : zf(a)
          ? b === "string"
            ? Zf(a)
            : Yf(a)
          : void 0;
    }
    return a;
  }
  function Vh(a, b, c, d) {
    return xf(w(a, b, c, d));
  }
  function A(a, b) {
    return Vh(a, b) ?? !1;
  }
  function Wh(a, b) {
    return Df(w(a, b)) ?? 0;
  }
  function Xh(a, b) {
    return Th(a, b) ?? mh;
  }
  function Yh(a, b, c = 0) {
    return vh(a, b) ?? c;
  }
  function B(a, b) {
    return hg(w(a, b)) ?? "";
  }
  function C(a, b) {
    return Bf(w(a, b)) ?? 0;
  }
  function Zh(a, b) {
    return xh(a, b, Df, wh());
  }
  function $h(a, b) {
    return xh(a, b, hg, wh());
  }
  function ai(a, b) {
    return xh(a, b, Bf, wh());
  }
  function bi(a, b, c, d) {
    return x(a, b, uh(a, d, c));
  }
  function ci(a, b) {
    return Vh(a, b, void 0, nh);
  }
  function di(a, b) {
    return Df(w(a, b, void 0, nh));
  }
  function ei(a, b) {
    return hg(w(a, b, void 0, nh));
  }
  function fi(a, b) {
    return Bf(w(a, b, void 0, nh));
  }
  function gi(a, b, c) {
    return ph(a, b, c == null ? c : wf(c));
  }
  function D(a, b, c) {
    return Gh(a, b, c == null ? c : wf(c), !1);
  }
  function hi(a, b, c) {
    return ph(a, b, c == null ? c : Cf(c));
  }
  function G(a, b, c) {
    return Gh(a, b, c == null ? c : Cf(c), 0);
  }
  function ii(a, b, c) {
    return ph(a, b, Tf(c));
  }
  function ji(a, b, c) {
    return Gh(a, b, Tf(c), "0");
  }
  function ki(a, b, c) {
    return Gh(a, b, cg(c), "0");
  }
  function li(a, b, c) {
    return ph(a, b, gg(c));
  }
  function mi(a, b, c) {
    return Gh(a, b, gg(c), "");
  }
  function ni(a, b, c) {
    return ph(a, b, c == null ? c : Af(c));
  }
  function H(a, b, c) {
    return Gh(a, b, c == null ? c : Af(c), 0);
  }
  function oi(a, b) {
    return hg(w(a, b)) != null;
  }
  function pi(a, b) {
    b = uh(a, qi, b);
    return hg(w(a, b)) != null;
  }
  function ri(a) {
    a = BigInt.asUintN(64, a);
    return new si(Number(a & BigInt(4294967295)), Number(a >> BigInt(32)));
  }
  function ti(a) {
    if (!a) return ui || (ui = new si(0, 0));
    if (!/^\d+$/.test(a)) return null;
    of(a);
    return new si(ff, gf);
  }
  var si = class {
    constructor(a, b) {
      this.j = a >>> 0;
      this.g = b >>> 0;
    }
  };
  let ui;
  function vi(a) {
    a = BigInt.asUintN(64, a);
    return new wi(Number(a & BigInt(4294967295)), Number(a >> BigInt(32)));
  }
  function xi(a) {
    if (!a) return yi || (yi = new wi(0, 0));
    if (!/^-?\d+$/.test(a)) return null;
    of(a);
    return new wi(ff, gf);
  }
  var wi = class {
    constructor(a, b) {
      this.j = a >>> 0;
      this.g = b >>> 0;
    }
  };
  let yi;
  function zi(a, b, c) {
    for (; c > 0 || b > 127; )
      a.g.push((b & 127) | 128),
        (b = ((b >>> 7) | (c << 25)) >>> 0),
        (c >>>= 7);
    a.g.push(b);
  }
  function Ai(a, b) {
    for (; b > 127; ) a.g.push((b & 127) | 128), (b >>>= 7);
    a.g.push(b);
  }
  function Bi(a, b) {
    if (b >= 0) Ai(a, b);
    else {
      for (let c = 0; c < 9; c++) a.g.push((b & 127) | 128), (b >>= 7);
      a.g.push(1);
    }
  }
  function Ci(a, b) {
    a.g.push((b >>> 0) & 255);
    a.g.push((b >>> 8) & 255);
    a.g.push((b >>> 16) & 255);
    a.g.push((b >>> 24) & 255);
  }
  var Di = class {
    constructor() {
      this.g = [];
    }
    length() {
      return this.g.length;
    }
    end() {
      const a = this.g;
      this.g = [];
      return a;
    }
  };
  function Ei(a, b) {
    b.length !== 0 && (a.l.push(b), (a.j += b.length));
  }
  function Fi(a, b) {
    Ei(a, a.g.end());
    Ei(a, b);
  }
  function Gi(a, b, c) {
    Ai(a.g, b * 8 + c);
  }
  function Hi(a, b) {
    Gi(a, b, 2);
    b = a.g.end();
    Ei(a, b);
    b.push(a.j);
    return b;
  }
  function Ii(a, b) {
    var c = b.pop();
    for (c = a.j + a.g.length() - c; c > 127; )
      b.push((c & 127) | 128), (c >>>= 7), a.j++;
    b.push(c);
    a.j++;
  }
  function Ji(a) {
    Ei(a, a.g.end());
    const b = new Uint8Array(a.j),
      c = a.l,
      d = c.length;
    let e = 0;
    for (let f = 0; f < d; f++) {
      const g = c[f];
      b.set(g, e);
      e += g.length;
    }
    a.l = [b];
    return b;
  }
  function Ki(a, b, c, d) {
    c != null && ((b = Hi(a, b)), d(c, a), Ii(a, b));
  }
  function Li(a, b, c) {
    var d = Mi;
    if (c != null)
      for (let e = 0; e < c.length; e++) {
        const f = Hi(a, b);
        d(c[e], a);
        Ii(a, f);
      }
  }
  var Ni = class {
    constructor() {
      this.l = [];
      this.j = 0;
      this.g = new Di();
    }
  };
  function Oi() {
    const a = class {
      constructor() {
        throw Error();
      }
    };
    Object.setPrototypeOf(a, a.prototype);
    return a;
  }
  var Pi = Oi(),
    Qi = Oi(),
    Ri = Oi(),
    Si = Oi(),
    Ti = Oi(),
    Ui = Oi(),
    Vi = Oi(),
    Wi = Oi(),
    Xi = Oi(),
    Yi = Oi(),
    Zi = Oi();
  function $i(a) {
    return tg(a);
  }
  function pj(a) {
    return JSON.stringify(zg(a));
  }
  function qj(a) {
    return ih(a);
  }
  var I = class {
    constructor(a) {
      this.ba = Fg(a);
    }
    toJSON() {
      return zg(this);
    }
  };
  I.prototype[Le] = Ue;
  function rj(a, b) {
    if (b == null) return new a();
    if (!Array.isArray(b)) throw Error();
    if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b))
      throw Error();
    return new a(Te(b));
  }
  var sj = class {
    constructor(a, b) {
      this.g = a;
      a = Da(Pi);
      this.j = (!!a && b === a) || !1;
    }
  };
  function tj(a, b, c, d, e) {
    Ki(a, c, uj(b, d), e);
  }
  const vj = new sj(tj, Pi),
    wj = new sj(tj, Pi);
  var xj = Symbol(),
    yj = Symbol();
  let zj, Aj;
  function Bj(a) {
    var b = Cj,
      c = Dj,
      d = a[xj];
    if (d) return d;
    d = {};
    d.Oq = a;
    d.ij = Dg(a[0]);
    var e = a[1];
    let f = 1;
    e &&
      e.constructor === Object &&
      ((d.kl = e),
      (e = a[++f]),
      typeof e === "function" &&
        ((d.Ul = !0),
        zj ?? (zj = e),
        Aj ?? (Aj = a[f + 1]),
        (e = a[(f += 2)])));
    const g = {};
    for (
      ;
      e && Array.isArray(e) && e.length && typeof e[0] === "number" && e[0] > 0;

    ) {
      for (var h = 0; h < e.length; h++) g[e[h]] = e;
      e = a[++f];
    }
    for (h = 1; e !== void 0; ) {
      typeof e === "number" && ((h += e), (e = a[++f]));
      let l;
      var k = void 0;
      e instanceof sj ? (l = e) : ((l = vj), f--);
      if (l?.j) {
        e = a[++f];
        k = a;
        var m = f;
        typeof e === "function" && ((e = e()), (k[m] = e));
        k = e;
      }
      e = a[++f];
      m = h + 1;
      typeof e === "number" && e < 0 && ((m -= e), (e = a[++f]));
      for (; h < m; h++) {
        const n = g[h];
        k ? c(d, h, l, k, n) : b(d, h, l, n);
      }
    }
    return (a[xj] = d);
  }
  function uj(a, b) {
    if (a instanceof I) return a.ba;
    if (Array.isArray(a)) return Eg(a, b, !1);
  }
  function Cj(a, b, c) {
    a[b] = c.g;
  }
  function Dj(a, b, c, d) {
    let e, f;
    const g = c.g;
    a[b] = (h, k, m) => g(h, k, m, f || (f = Bj(d).ij), e || (e = Ej(d)));
  }
  function Ej(a) {
    let b = a[yj];
    if (!b) {
      const c = Bj(a);
      b = (d, e) => Fj(d, e, c);
      a[yj] = b;
    }
    return b;
  }
  function Fj(a, b, c) {
    $e(a, a[u] | 0, (d, e) => {
      if (e != null) {
        var f = Gj(c, d);
        f ? f(b, e, d) : d < 500 || Ee(Je, 3);
      }
    });
  }
  function Gj(a, b) {
    var c = a[b];
    if (c) return c;
    if ((c = a.kl))
      if ((c = c[b])) {
        c = Array.isArray(c) ? (c[0] instanceof sj ? c : [wj, c]) : [c, void 0];
        var d = c[0].g;
        if ((c = c[1])) {
          const e = Ej(c),
            f = Bj(c).ij;
          c = a.Ul ? Aj(f, e) : (g, h, k) => d(g, h, k, f, e);
        } else c = d;
        return (a[b] = c);
      }
  }
  function Hj(a, b, c) {
    if (Array.isArray(b)) {
      var d = b[u] | 0;
      if (d & 4) return b;
      for (var e = 0, f = 0; e < b.length; e++) {
        const g = a(b[e]);
        g != null && (b[f++] = g);
      }
      f < e && (b.length = f);
      c && ((b[u] = (d | 5) & -1537), d & 2 && Object.freeze(b));
      return b;
    }
  }
  var Lj = (a, b) => {
    const c = new Ni();
    Fj(a.ba, c, Bj(b));
    return Ji(c);
  };
  function Mj(a, b) {
    return new sj(a, b);
  }
  function Nj(a, b) {
    return new sj(a, b);
  }
  var Oj = new sj(function (a, b, c, d, e) {
    if (b instanceof sg)
      b.forEach((f, g) => {
        Ki(a, c, Eg([g, f], d, !1), e);
      });
    else if (Array.isArray(b))
      for (let f = 0; f < b.length; f++) {
        const g = b[f];
        Array.isArray(g) && Ki(a, c, Eg(g, d, !1), e);
      }
  }, Pi);
  function Pj(a, b, c) {
    b = vf(b);
    b != null &&
      (Gi(a, c, 1),
      (a = a.g),
      (c = hf || (hf = new DataView(new ArrayBuffer(8)))),
      c.setFloat64(0, +b, !0),
      (ff = c.getUint32(0, !0)),
      (gf = c.getUint32(4, !0)),
      Ci(a, ff),
      Ci(a, gf));
  }
  function Qj(a, b, c) {
    b = vf(b);
    b != null &&
      (Gi(a, c, 5),
      (a = a.g),
      (c = hf || (hf = new DataView(new ArrayBuffer(8)))),
      c.setFloat32(0, +b, !0),
      (gf = 0),
      (ff = c.getUint32(0, !0)),
      Ci(a, ff));
  }
  function Rj(a, b, c) {
    b = dg(b);
    if (b != null) {
      switch (typeof b) {
        case "string":
          xi(b);
      }
      if (b != null)
        switch ((Gi(a, c, 0), typeof b)) {
          case "number":
            a = a.g;
            kf(b);
            zi(a, ff, gf);
            break;
          case "bigint":
            c = vi(b);
            zi(a.g, c.j, c.g);
            break;
          default:
            (c = xi(b)), zi(a.g, c.j, c.g);
        }
    }
  }
  function Sj(a, b, c) {
    b = Hj(dg, b, !1);
    if (b != null && b.length) {
      c = Hi(a, c);
      for (let e = 0; e < b.length; e++) {
        const f = b[e];
        switch (typeof f) {
          case "number":
            var d = a.g;
            kf(f);
            zi(d, ff, gf);
            break;
          case "bigint":
            d = vi(f);
            zi(a.g, d.j, d.g);
            break;
          default:
            (d = xi(f)), zi(a.g, d.j, d.g);
        }
      }
      Ii(a, c);
    }
  }
  function Tj(a, b, c) {
    b = eg(b);
    if (b != null) {
      switch (typeof b) {
        case "string":
          ti(b);
      }
      if (b != null)
        switch ((Gi(a, c, 0), typeof b)) {
          case "number":
            a = a.g;
            kf(b);
            zi(a, ff, gf);
            break;
          case "bigint":
            c = ri(b);
            zi(a.g, c.j, c.g);
            break;
          default:
            (c = ti(b)), zi(a.g, c.j, c.g);
        }
    }
  }
  function Uj(a, b, c) {
    b = Df(b);
    b != null && b != null && (Gi(a, c, 0), Bi(a.g, b));
  }
  function Vj(a, b, c) {
    b = xf(b);
    b != null && (Gi(a, c, 0), a.g.g.push(b ? 1 : 0));
  }
  function Wj(a, b, c) {
    b = hg(b);
    b != null && ((b = oe(b)), Gi(a, c, 2), Ai(a.g, b.length), Fi(a, b));
  }
  function Xj(a, b, c, d, e) {
    Ki(a, c, uj(b, d), e);
  }
  function Yj(a, b, c) {
    b = Df(b);
    b != null && ((b = parseInt(b, 10)), Gi(a, c, 0), Bi(a.g, b));
  }
  var Zj = Mj(Pj, Yi),
    ak = Mj(Pj, Yi),
    bk = Mj(Qj, Xi),
    ck = Mj(Qj, Xi),
    dk = Nj(Sj, Vi),
    ek = Mj(Rj, Vi),
    fk = Nj(Sj, Vi),
    gk = Mj(Rj, Vi),
    hk = Mj(Rj, Vi),
    ik = Mj(Tj, Wi),
    jk = Nj(function (a, b, c) {
      b = Hj(eg, b, !1);
      if (b != null && b.length) {
        c = Hi(a, c);
        for (let f = 0; f < b.length; f++) {
          var d = b[f];
          switch (typeof d) {
            case "number":
              var e = a.g;
              kf(d);
              zi(e, ff, gf);
              break;
            case "bigint":
              e = Number(d);
              Number.isSafeInteger(e)
                ? ((d = a.g), kf(e), zi(d, ff, gf))
                : ((d = ri(d)), zi(a.g, d.j, d.g));
              break;
            default:
              (d = ti(d)), zi(a.g, d.j, d.g);
          }
        }
        Ii(a, c);
      }
    }, Wi),
    kk = Mj(Tj, Wi),
    lk = Mj(Uj, Si),
    mk = Nj(function (a, b, c) {
      b = Hj(Df, b, !0);
      if (b != null && b.length) {
        c = Hi(a, c);
        for (let d = 0; d < b.length; d++) Bi(a.g, b[d]);
        Ii(a, c);
      }
    }, Si),
    nk = Mj(Uj, Si),
    ok = Mj(function (a, b, c) {
      b = Mf(b);
      b != null && (Gi(a, c, 5), Ci(a.g, b));
    }, Ui),
    pk = Mj(Vj, Qi),
    qk = Mj(Vj, Qi),
    rk = Mj(Vj, Qi),
    sk = Mj(Wj, Ri),
    tk = Nj(function (a, b, c) {
      b = Hj(hg, b, !0);
      if (b != null)
        for (let g = 0; g < b.length; g++) {
          var d = a,
            e = c,
            f = b[g];
          f != null && ((f = oe(f)), Gi(d, e, 2), Ai(d.g, f.length), Fi(d, f));
        }
    }, Ri),
    uk = Mj(Wj, Ri),
    vk = Mj(Wj, Ri),
    wk = (function (a, b, c = Pi) {
      return new sj(b, c);
    })(
      function (a, b, c, d, e) {
        if (a.g() !== 2) return !1;
        var f = a.j;
        d = Eg(void 0, d, !0);
        var g = b[u] | 0;
        if (g & 2) throw Error();
        const h = g & 128 ? af : void 0;
        let k = yh(b, c, h),
          m = k === Me ? 7 : k[u] | 0,
          l = zh(m, g);
        if (2 & l || Ch(l) || 16 & l)
          (k = [...k]), (m = 0), (l = Ah(l, g)), qh(b, g, c, k, h);
        l &= -13;
        l !== m && (k[u] = l);
        k.push(d);
        f.call(a, d, e);
        return !0;
      },
      function (a, b, c, d, e) {
        if (Array.isArray(b))
          for (let f = 0; f < b.length; f++) Xj(a, b[f], c, d, e);
      }
    ),
    K = new sj(Xj, Pi),
    xk = Mj(function (a, b, c) {
      b = Mf(b);
      b != null && b != null && (Gi(a, c, 0), Ai(a.g, b));
    }, Ti),
    yk = Mj(Yj, Zi),
    zk = Nj(function (a, b, c) {
      b = Hj(Df, b, !0);
      if (b != null && b.length) {
        c = Hi(a, c);
        for (let d = 0; d < b.length; d++) Bi(a.g, b[d]);
        Ii(a, c);
      }
    }, Zi),
    Ak = Mj(Yj, Zi);
  function Bk(a) {
    return () => {
      var b;
      (b = a[Ge]) || ((b = new a()), Se(b.ba), (b = a[Ge] = b));
      return b;
    };
  }
  function Ck(a) {
    return (b) => Lj(b, a);
  }
  function Dk(a) {
    return (b) => {
      if (b == null || b == "") b = new a();
      else {
        b = JSON.parse(b);
        if (!Array.isArray(b)) throw Error("dnarr");
        b = new a(Te(b));
      }
      return b;
    };
  }
  yd`https://www.google.com/recaptcha/api2/aframe`;
  let Ek = [];
  function Fk() {
    const a = Ek;
    Ek = [];
    for (const b of a)
      try {
        b();
      } catch {}
  }
  function Gk(a, b) {
    return Math.min(Math.max(a, 0), b);
  }
  function Hk(a) {
    return Array.prototype.reduce.call(
      arguments,
      function (b, c) {
        return b + c;
      },
      0
    );
  }
  function Ik(a) {
    return Hk.apply(null, arguments) / arguments.length;
  }
  function Jk(a, b) {
    this.x = a !== void 0 ? a : 0;
    this.y = b !== void 0 ? b : 0;
  }
  ba = Jk.prototype;
  ba.equals = function (a) {
    return (
      a instanceof Jk &&
      (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
    );
  };
  ba.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  };
  ba.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  };
  ba.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  };
  ba.scale = function (a, b) {
    this.x *= a;
    this.y *= typeof b === "number" ? b : a;
    return this;
  };
  function Kk(a, b) {
    this.width = a;
    this.height = b;
  }
  function Lk(a, b) {
    return a == b
      ? !0
      : a && b
      ? a.width == b.width && a.height == b.height
      : !1;
  }
  ba = Kk.prototype;
  ba.aspectRatio = function () {
    return this.width / this.height;
  };
  ba.isEmpty = function () {
    return !(this.width * this.height);
  };
  ba.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  ba.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  ba.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  ba.scale = function (a, b) {
    this.width *= a;
    this.height *= typeof b === "number" ? b : a;
    return this;
  };
  function Mk(a) {
    return a ? new Nk(Ok(a)) : Ga || (Ga = new Nk());
  }
  function Pk(a, b) {
    Xb(b, function (c, d) {
      d == "style"
        ? (a.style.cssText = c)
        : d == "class"
        ? (a.className = c)
        : d == "for"
        ? (a.htmlFor = c)
        : Qk.hasOwnProperty(d)
        ? a.setAttribute(Qk[d], c)
        : d.lastIndexOf("aria-", 0) == 0 || d.lastIndexOf("data-", 0) == 0
        ? a.setAttribute(d, c)
        : (a[d] = c);
    });
  }
  var Qk = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    nonce: "nonce",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width",
  };
  function Rk(a) {
    a = a.document;
    a = a.compatMode == "CSS1Compat" ? a.documentElement : a.body;
    return new Kk(a.clientWidth, a.clientHeight);
  }
  function Sk(a) {
    return a.scrollingElement
      ? a.scrollingElement
      : gd || a.compatMode != "CSS1Compat"
      ? a.body || a.documentElement
      : a.documentElement;
  }
  function Tk(a) {
    return a ? a.defaultView : window;
  }
  function Uk(a, b) {
    b = String(b);
    a.contentType === "application/xhtml+xml" && (b = b.toLowerCase());
    return a.createElement(b);
  }
  function Vk(a) {
    a && a.parentNode && a.parentNode.removeChild(a);
  }
  function Ok(a) {
    return a.nodeType == 9 ? a : a.ownerDocument || a.document;
  }
  var Wk = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 },
    Xk = { IMG: " ", BR: "\n" };
  function Yk(a) {
    const b = [];
    Zk(a, b, !0);
    a = b.join("");
    a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
    a = a.replace(/\u200B/g, "");
    a = a.replace(/ +/g, " ");
    a != " " && (a = a.replace(/^\s*/, ""));
    return a;
  }
  function Zk(a, b, c) {
    if (!(a.nodeName in Wk))
      if (a.nodeType == 3)
        c
          ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, ""))
          : b.push(a.nodeValue);
      else if (a.nodeName in Xk) b.push(Xk[a.nodeName]);
      else for (a = a.firstChild; a; ) Zk(a, b, c), (a = a.nextSibling);
  }
  function $k(a, b, c) {
    if (!b && !c) return null;
    const d = b ? String(b).toUpperCase() : null;
    return al(a, function (e) {
      return (
        (!d || e.nodeName == d) &&
        (!c ||
          (typeof e.className === "string" && Pa(e.className.split(/\s+/), c)))
      );
    });
  }
  function al(a, b) {
    let c = 0;
    for (; a; ) {
      if (b(a)) return a;
      a = a.parentNode;
      c++;
    }
    return null;
  }
  function Nk(a) {
    this.g = a || r.document || document;
  }
  Nk.prototype.j = function (a) {
    var b = this.g;
    return typeof a === "string" ? b.getElementById(a) : a;
  };
  Nk.prototype.l = Nk.prototype.j;
  function bl(a, b) {
    return Uk(a.g, b);
  }
  function cl(a, b) {
    var c = a.g;
    a = Uk(c, "DIV");
    Pc(a, b);
    if (a.childNodes.length == 1) b = a.removeChild(a.firstChild);
    else
      for (b = c.createDocumentFragment(); a.firstChild; )
        b.appendChild(a.firstChild);
    return b;
  }
  Nk.prototype.Ba = function () {
    return this.g.defaultView;
  };
  Nk.prototype.contains = function (a, b) {
    return a && b ? a == b || a.contains(b) : !1;
  };
  function dl(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d;
  }
  ba = dl.prototype;
  ba.getWidth = function () {
    return this.right - this.left;
  };
  ba.getHeight = function () {
    return this.bottom - this.top;
  };
  function el(a) {
    return new dl(a.top, a.right, a.bottom, a.left);
  }
  ba.contains = function (a) {
    return this && a
      ? a instanceof dl
        ? a.left >= this.left &&
          a.right <= this.right &&
          a.top >= this.top &&
          a.bottom <= this.bottom
        : a.x >= this.left &&
          a.x <= this.right &&
          a.y >= this.top &&
          a.y <= this.bottom
      : !1;
  };
  ba.ceil = function () {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this;
  };
  ba.floor = function () {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this;
  };
  ba.round = function () {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this;
  };
  ba.scale = function (a, b) {
    b = typeof b === "number" ? b : a;
    this.left *= a;
    this.right *= a;
    this.top *= b;
    this.bottom *= b;
    return this;
  };
  function fl(a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d;
  }
  function gl(a) {
    return new dl(a.top, a.left + a.width, a.top + a.height, a.left);
  }
  function hl(a, b) {
    const c = Math.max(a.left, b.left),
      d = Math.min(a.left + a.width, b.left + b.width);
    if (c <= d) {
      const e = Math.max(a.top, b.top);
      a = Math.min(a.top + a.height, b.top + b.height);
      if (e <= a) return new fl(c, e, d - c, a - e);
    }
    return null;
  }
  ba = fl.prototype;
  ba.contains = function (a) {
    return a instanceof Jk
      ? a.x >= this.left &&
          a.x <= this.left + this.width &&
          a.y >= this.top &&
          a.y <= this.top + this.height
      : this.left <= a.left &&
          this.left + this.width >= a.left + a.width &&
          this.top <= a.top &&
          this.top + this.height >= a.top + a.height;
  };
  ba.ceil = function () {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  ba.floor = function () {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  ba.round = function () {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  ba.scale = function (a, b) {
    b = typeof b === "number" ? b : a;
    this.left *= a;
    this.width *= a;
    this.top *= b;
    this.height *= b;
    return this;
  };
  function il(a, b, c) {
    if (typeof b === "string") (b = jl(a, b)) && (a.style[b] = c);
    else
      for (const e in b) {
        c = a;
        var d = b[e];
        const f = jl(c, e);
        f && (c.style[f] = d);
      }
  }
  var kl = {};
  function jl(a, b) {
    let c = kl[b];
    if (!c) {
      var d = bd(b);
      c = d;
      a.style[d] === void 0 &&
        ((d = (gd ? "Webkit" : fd ? "Moz" : null) + cd(d)),
        a.style[d] !== void 0 && (c = d));
      kl[b] = c;
    }
    return c;
  }
  function ll(a, b) {
    const c = a.style[bd(b)];
    return typeof c !== "undefined" ? c : a.style[jl(a, b)] || "";
  }
  function ml(a, b) {
    a: {
      var c = Ok(a);
      if (
        c.defaultView &&
        c.defaultView.getComputedStyle &&
        (c = c.defaultView.getComputedStyle(a, null))
      ) {
        c = c[b] || c.getPropertyValue(b) || "";
        break a;
      }
      c = "";
    }
    return (
      c ||
      (a.currentStyle ? a.currentStyle[b] : null) ||
      (a.style && a.style[b])
    );
  }
  function nl(a) {
    try {
      return a.getBoundingClientRect();
    } catch (b) {
      return { left: 0, top: 0, right: 0, bottom: 0 };
    }
  }
  function ol(a) {
    const b = Ok(a);
    let c = ml(a, "position"),
      d = c == "fixed" || c == "absolute";
    for (a = a.parentNode; a && a != b; a = a.parentNode)
      if (
        (a.nodeType == 11 && a.host && (a = a.host),
        (c = ml(a, "position")),
        (d = d && c == "static" && a != b.documentElement && a != b.body),
        !d &&
          (a.scrollWidth > a.clientWidth ||
            a.scrollHeight > a.clientHeight ||
            c == "fixed" ||
            c == "absolute" ||
            c == "relative"))
      )
        return a;
    return null;
  }
  function pl(a) {
    var b = Ok(a);
    const c = new Jk(0, 0);
    if (a == (b ? Ok(b) : document).documentElement) return c;
    a = nl(a);
    var d = Mk(b).g;
    b = Sk(d);
    d = d.defaultView;
    b = new Jk(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
    c.x = a.left + b.x;
    c.y = a.top + b.y;
    return c;
  }
  function ql(a) {
    typeof a == "number" && (a = Math.round(a) + "px");
    return a;
  }
  function rl(a) {
    var b = sl;
    if (ml(a, "display") != "none") return b(a);
    const c = a.style,
      d = c.display,
      e = c.visibility,
      f = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    a = b(a);
    c.display = d;
    c.position = f;
    c.visibility = e;
    return a;
  }
  function sl(a) {
    const b = a.offsetWidth,
      c = a.offsetHeight,
      d = gd && !b && !c;
    return (b === void 0 || d) && a.getBoundingClientRect
      ? ((a = nl(a)), new Kk(a.right - a.left, a.bottom - a.top))
      : new Kk(b, c);
  }
  var tl = { passive: !0 },
    ul = Bb(() => {
      let a = !1;
      try {
        const b = Object.defineProperty({}, "passive", {
          get() {
            a = !0;
          },
        });
        r.addEventListener("test", null, b);
      } catch (b) {}
      return a;
    });
  function vl(a) {
    return a ? (a.passive && ul() ? a : a.capture || !1) : !1;
  }
  function wl(a, b, c, d) {
    return typeof a.addEventListener === "function"
      ? (a.addEventListener(b, c, vl(d)), !0)
      : !1;
  }
  function xl(a, b, c, d) {
    return typeof a.removeEventListener === "function"
      ? (a.removeEventListener(b, c, vl(d)), !0)
      : !1;
  }
  function yl(a) {
    a && a.setAttribute("data-load-complete", "true");
  }
  function zl(a, b) {
    a.document.readyState === "complete"
      ? (Ek.push(b),
        Ek.length === 1 &&
          (window.Promise
            ? Promise.resolve().then(Fk)
            : ((a = window.setImmediate),
              typeof a === "function" ? a(Fk) : setTimeout(Fk, 0))))
      : a.addEventListener("load", b);
  }
  function Al(a) {
    var b = window;
    new Promise((c, d) => {
      function e() {
        f.onload = null;
        f.onerror = null;
        f.parentElement?.removeChild(f);
      }
      const f = b.document.createElement("script");
      f.onload = () => {
        e();
        c();
      };
      f.onerror = () => {
        e();
        d(void 0);
      };
      f.type = "text/javascript";
      Nc(f, a);
      b.document.readyState !== "complete"
        ? wl(b, "load", () => {
            b.document.body.appendChild(f);
          })
        : b.document.body.appendChild(f);
    });
  }
  function Bl() {
    Cl || (Cl = new Dl());
    return Cl;
  }
  async function El() {
    try {
      await window.android.webview.getExperimentalMediaIntegrityTokenProvider({
        cloudProjectNumber: 187810013193,
      });
    } catch (a) {
      a.mediaIntegrityErrorName || (a.code && a.code());
    }
  }
  var Dl = class {
      constructor() {
        this.Db = !1;
      }
      j() {
        return (
          window.android &&
          window.android.webview &&
          window.android.webview.getExperimentalMediaIntegrityTokenProvider
        );
      }
    },
    Cl;
  async function Fl(a) {
    var b =
        `${
          a.Sb
            ? "https://ep1.adtrafficquality.google/getconfig/sodar"
            : "https://pagead2.googlesyndication.com/getconfig/sodar"
        }?sv=${200}&tid=${a.g}` +
        `&tv=${a.j}&st=` +
        `${a.Qd}` +
        `${a.l ? "&sde=1" : ""}`,
      c = void 0;
    try {
      c = await Gl(b);
    } catch (g) {}
    if (c) {
      b = a.se || c.sodar_query_id;
      var d = c.rc_enable !== void 0 && a.B ? c.rc_enable : "n",
        e = c.bg_snapshot_delay_ms === void 0 ? "0" : c.bg_snapshot_delay_ms,
        f = c.is_gen_204 === void 0 ? "1" : c.is_gen_204;
      if (b && c.bg_hash_basename && c.bg_binary)
        return (
          (c = {
            context: a.A,
            Ak: c.bg_hash_basename,
            zk: c.bg_binary,
            Zl: a.g + "_" + a.j,
            se: b,
            Qd: a.Qd,
            wf: d,
            Zf: e,
            uf: f,
            Sb: a.Sb,
          }),
          a.Db ? { ...c, Db: !0 } : c
        );
    }
  }
  let Gl = (a) =>
    new Promise((b, c) => {
      const d = new XMLHttpRequest();
      d.onreadystatechange = () => {
        d.readyState === d.DONE &&
          (d.status >= 200 && d.status < 300
            ? b(JSON.parse(d.responseText))
            : c());
      };
      d.open("GET", a, !0);
      d.send();
    });
  async function Hl(a) {
    if (a.Db) {
      Bl().Db = !0;
      var b = Bl();
      b.j() && b.Db && El();
    }
    if ((a = await Fl(a))) {
      b = window;
      var c = b.GoogleGcLKhOms;
      (c && typeof c.push === "function") || (c = b.GoogleGcLKhOms = []);
      const d = {
        _ctx_: a.context,
        _bgv_: a.Ak,
        _bgp_: a.zk,
        _li_: a.Zl,
        _jk_: a.se,
        _st_: a.Qd,
        _rc_: a.wf,
        _dl_: a.Zf,
        _g2_: a.uf,
        _atqg_: a.Sb === void 0 ? "0" : a.Sb ? "1" : "0",
      };
      a.Db ? c.push({ ...d, _wvp_: "1" }) : c.push(d);
      if ((c = b.GoogleDX5YKUSk)) (b.GoogleDX5YKUSk = void 0), c[1]();
      a = a.Sb
        ? yd`https://ep2.adtrafficquality.google/sodar/${"sodar2"}.js`
        : yd`https://tpc.googlesyndication.com/sodar/${"sodar2"}.js`;
      Al(a);
    }
  }
  function Il(a, b) {
    return mi(a, 1, b);
  }
  var Jl = class extends I {
    g() {
      return B(this, 1);
    }
  };
  function Kl(a, b) {
    return y(a, 5, b);
  }
  function Ll(a) {
    return H(a, 2, 1);
  }
  function Ml(a, b) {
    return mi(a, 3, b);
  }
  function Nl(a) {
    return H(a, 4, 1);
  }
  function Ol(a, b) {
    return D(a, 6, b);
  }
  var Pl = class extends I {};
  function Ql(a) {
    switch (a) {
      case 1:
        return "gda";
      case 2:
        return "gpt";
      case 3:
        return "ima";
      case 4:
        return "pal";
      case 5:
        return "xfad";
      case 6:
        return "dv3n";
      case 7:
        return "spa";
      case 8:
        return "afs";
      default:
        return "unk";
    }
  }
  var Rl = class {
      constructor(a) {
        this.g = a.l;
        this.j = a.B;
        this.A = a.A;
        this.se = a.se;
        this.C = a.Ba();
        this.Qd = a.Qd;
        this.wf = a.wf;
        this.Zf = a.Zf;
        this.uf = a.uf;
        this.B = a.j;
        this.Sb = a.Sb;
        this.Db = a.Db;
        this.l = a.g;
      }
    },
    Sl = class {
      constructor(a, b, c) {
        this.l = a;
        this.B = b;
        this.A = c;
        this.C = window;
        this.Qd = "env";
        this.wf = "n";
        this.Zf = "0";
        this.uf = "1";
        this.j = !0;
        this.g = this.Db = this.Sb = !1;
      }
      Ba() {
        return this.C;
      }
      build() {
        return new Rl(this);
      }
    };
  var Tl = class extends I {
      Oa() {
        return B(this, 1);
      }
    },
    qi = [2, 3, 5];
  function Ul() {
    var a = new Vl();
    return li(a, 1, "");
  }
  function Wl(a) {
    return Nh(a, Tl, 2, wh());
  }
  function Xl(a, b) {
    return Ph(a, 2, b);
  }
  var Vl = class extends I {};
  var Yl = class extends I {};
  function Zl(a) {
    var b = new $l();
    return li(b, 1, a);
  }
  var $l = class extends I {
    getValue() {
      return B(this, 1);
    }
    getVersion() {
      return C(this, 5);
    }
  };
  var am = class extends I {};
  function bm(a) {
    var b = new cm();
    return ni(b, 1, a);
  }
  var cm = class extends I {};
  function dm(a) {
    var b = new xm();
    return li(b, 1, a);
  }
  function ym(a) {
    var b = window.Date.now();
    b = Number.isFinite(b) ? Math.round(b) : 0;
    return ii(a, 3, b);
  }
  var xm = class extends I {
      Oa() {
        return ei(this, 1);
      }
      g() {
        return oi(this, 2);
      }
      j() {
        return hg(w(this, 2));
      }
      setError(a) {
        return y(this, 10, a);
      }
    },
    zm = Dk(xm);
  var Am = class extends I {};
  Am.prototype.g = (function (a) {
    return function () {
      return Lj(this, a);
    };
  })([
    0,
    wk,
    [0, 1, [0, ik, -2], -1, sk, -1, pk, [0, 3, yk, sk], ek, zk, xk],
    wk,
    [0, sk, -1, ek, lk, -2, ek, bk, pk, [0, yk], pk],
  ]);
  var Bm = class extends I {};
  function Cm(a, b, c = null, d = !1, e = !1) {
    Dm(a, b, c, d, e);
  }
  function Dm(a, b, c, d, e = !1) {
    a.google_image_requests || (a.google_image_requests = []);
    const f = Gd("IMG", a.document);
    if (c || d) {
      const g = (h) => {
        c && c(h);
        d && Qa(a.google_image_requests, f);
        xl(f, "load", g);
        xl(f, "error", g);
      };
      wl(f, "load", g);
      wl(f, "error", g);
    }
    e && (f.attributionSrc = "");
    f.src = b;
    a.google_image_requests.push(f);
  }
  function Em(a, b) {
    let c = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=${b}`;
    Jd(a, (d, e) => {
      if (d || d === 0) c += `&${e}=${encodeURIComponent(String(d))}`;
    });
    Fm(c);
  }
  function Fm(a) {
    var b = window;
    b.fetch
      ? b.fetch(a, {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors",
        })
      : Cm(b, a, void 0, !1, !1);
  }
  let Gm = null;
  function Hm() {
    a: {
      var a = [r.top];
      var b = [];
      let c = 0,
        d;
      for (; (d = a[c++]); ) {
        b.push(d);
        try {
          if (d.frames)
            for (let e = 0; e < d.frames.length && a.length < 1024; ++e)
              a.push(d.frames[e]);
        } catch {}
      }
      a = b;
      for (b = 0; b < a.length; b++)
        try {
          const e = a[b].frames.google_esf;
          if (e) {
            Gm = e;
            break a;
          }
        } catch (e) {}
      Gm = null;
    }
    return Gm;
  }
  var Im = window;
  var Jm = class extends I {};
  var Km = class extends I {
    getCorrelator() {
      return Xh(this, 1);
    }
    setCorrelator(a) {
      return ji(this, 1, a);
    }
  };
  var Lm = class extends I {};
  let Mm = null,
    Nm = null;
  function Om() {
    if (Mm != null) return Mm;
    Mm = !1;
    try {
      const a = Ed(r);
      a && a.location.hash.indexOf("google_logging") !== -1 && (Mm = !0);
    } catch (a) {}
    return Mm;
  }
  function Pm() {
    if (Nm != null) return Nm;
    Nm = !1;
    try {
      const a = Ed(r);
      a && a.location.hash.indexOf("auto_ads_logging") !== -1 && (Nm = !0);
    } catch (a) {}
    return Nm;
  }
  var Qm = (a, b = []) => {
    let c = !1;
    r.google_logging_queue || ((c = !0), (r.google_logging_queue = []));
    r.google_logging_queue.push([a, b]);
    c &&
      Om() &&
      Fd(
        r.document,
        yd`https://pagead2.googlesyndication.com/pagead/js/logging_library.js`
      );
  };
  const Rm = {
    "AMP-CAROUSEL": "ac",
    "AMP-FX-FLYING-CARPET": "fc",
    "AMP-LIGHTBOX": "lb",
    "AMP-STICKY-AD": "sa",
  };
  function Sm(a = r) {
    let b = a.context || a.AMP_CONTEXT_DATA;
    if (!b)
      try {
        b = a.parent.context || a.parent.AMP_CONTEXT_DATA;
      } catch {}
    return b?.pageViewId && b?.canonicalUrl ? b : null;
  }
  function Tm(a = Sm()) {
    return a && a.mode ? +a.mode.version || null : null;
  }
  function Um(a = Sm()) {
    if (a && a.container) {
      a = a.container.split(",");
      const b = [];
      for (let c = 0; c < a.length; c++) b.push(Rm[a[c]] || "x");
      return b.join();
    }
    return null;
  }
  function Vm() {
    var a = Sm();
    return a && a.initialIntersection;
  }
  function Wm() {
    const a = Vm();
    return a && a.rootBounds && sa(a.rootBounds)
      ? new Kk(a.rootBounds.width, a.rootBounds.height)
      : null;
  }
  function Xm(a = Sm()) {
    return a ? (Bd(a.master) ? a.master : null) : null;
  }
  function jn(a, b) {
    const c = (a.ampInaboxIframes = a.ampInaboxIframes || []);
    let d = () => {},
      e = () => {};
    b &&
      (c.push(b),
      (e = () => {
        a.AMP &&
          a.AMP.inaboxUnregisterIframe &&
          a.AMP.inaboxUnregisterIframe(b);
        Qa(c, b);
        d();
      }));
    if (a.ampInaboxInitialized) return e;
    a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
    const f = (g) => {
      if (a.ampInaboxInitialized) g = !0;
      else {
        var h,
          k = g.data === "amp-ini-load";
        a.ampInaboxPendingMessages &&
          !k &&
          (h = /^amp-(\d{15,20})?/.exec(g.data)) &&
          (a.ampInaboxPendingMessages.push(g),
          (g = h[1]),
          a.ampInaboxInitialized ||
            (g && !/^\d{15,20}$/.test(g)) ||
            a.document.querySelector('script[src$="amp4ads-host-v0.js"]') ||
            Fd(
              a.document,
              g
                ? yd`https://cdn.ampproject.org/rtv/${g}/amp4ads-host-v0.js`
                : yd`https://cdn.ampproject.org/amp4ads-host-v0.js`
            ));
        g = !1;
      }
      g && d();
    };
    c.google_amp_listener_added ||
      ((c.google_amp_listener_added = !0),
      wl(a, "message", f),
      (d = () => {
        xl(a, "message", f);
      }));
    return e;
  }
  var ln = (a, b) => {
      a = kn(a);
      if (!a) return b;
      const c = b.slice(-1);
      return b + (c === "?" || c === "#" ? "" : "&") + a;
    },
    kn = (a) =>
      Object.entries(mn(a))
        .map(([b, c]) => `${b}=${encodeURIComponent(String(c))}`)
        .join("&"),
    mn = (a) => {
      const b = {};
      Jd(a, (c, d) => {
        if (c || c === 0 || c === !1)
          typeof c === "boolean" && (c = c ? 1 : 0), (b[d] = c);
      });
      return b;
    },
    nn = (a) => {
      a.length > 61440 &&
        ((a = a.substring(0, 61432)),
        (a = a.replace(/%\w?$/, "")),
        (a = a.replace(/&[^=]*=?$/, "")),
        (a += "&trunc=1"));
      return a;
    },
    on = (a) => {
      a = Xm(Sm(a)) || a;
      a.google_unique_id = (a.google_unique_id || 0) + 1;
    },
    pn = (a) => {
      a = a.google_unique_id;
      return typeof a === "number" ? a : 0;
    },
    qn = (a) => ((a = a.google_ad_format) ? a.indexOf("_0ads") > 0 : !1),
    rn = (a) => {
      let b = Number(a.google_ad_width),
        c = Number(a.google_ad_height);
      if (!(b > 0 && c > 0)) {
        a: {
          try {
            const e = String(a.google_ad_format);
            if (e && e.match) {
              const f = e.match(/(\d+)x(\d+)/i);
              if (f) {
                const g = parseInt(f[1], 10),
                  h = parseInt(f[2], 10);
                if (g > 0 && h > 0) {
                  var d = { width: g, height: h };
                  break a;
                }
              }
            }
          } catch (e) {}
          d = null;
        }
        a = d;
        if (!a) return null;
        b = b > 0 ? b : a.width;
        c = c > 0 ? c : a.height;
      }
      return { width: b, height: c };
    },
    sn = (a) => {
      if (!a) return "";
      a = a.toLowerCase();
      a.substring(0, 3) != "ca-" && (a = "ca-" + a);
      return a;
    };
  var tn = class {
    constructor(a, b) {
      this.error = a;
      this.meta = {};
      this.context = b.context;
      this.msg = b.message || "";
      this.id = b.id || "jserror";
    }
  };
  function un(a) {
    return new tn(a, { message: vn(a) });
  }
  function vn(a) {
    let b = a.toString();
    a.name && b.indexOf(a.name) == -1 && (b += ": " + a.name);
    a.message && b.indexOf(a.message) == -1 && (b += ": " + a.message);
    a.stack && (b = wn(a.stack, b));
    return b;
  }
  function wn(a, b) {
    try {
      a.indexOf(b) == -1 && (a = b + "\n" + a);
      let c;
      for (; a != c; )
        (c = a),
          (a = a.replace(
            RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"),
            "$1"
          ));
      return a.replace(RegExp("\n *", "g"), "\n");
    } catch (c) {
      return b;
    }
  }
  const xn = RegExp(
    "^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)"
  );
  var yn = class {
      constructor(a, b) {
        this.g = a;
        this.j = b;
      }
    },
    zn = class {
      constructor(a, b, c) {
        this.url = a;
        this.C = b;
        this.g = !!c;
        this.depth = null;
      }
    };
  let An = null;
  function Bn() {
    var a = window;
    if (An === null) {
      An = "";
      try {
        let b = "";
        try {
          b = a.top.location.hash;
        } catch (c) {
          b = a.location.hash;
        }
        if (b) {
          const c = b.match(/\bdeid=([\d,]+)/);
          An = c ? c[1] : "";
        }
      } catch (b) {}
    }
    return An;
  }
  function Cn() {
    const a = r.performance;
    return a && a.now && a.timing
      ? Math.floor(a.now() + a.timing.navigationStart)
      : Date.now();
  }
  function Dn() {
    const a = r.performance;
    return a && a.now ? a.now() : null;
  }
  var En = class {
    constructor(a, b) {
      var c = Dn() || Cn();
      this.label = a;
      this.type = b;
      this.value = c;
      this.duration = 0;
      this.taskId = this.slotId = void 0;
      this.uniqueId = Math.random();
    }
  };
  const Fn = r.performance,
    Gn = !!(Fn && Fn.mark && Fn.measure && Fn.clearMarks),
    Hn = Bb(() => {
      var a;
      if ((a = Gn)) (a = Bn()), (a = !!a.indexOf && a.indexOf("1337") >= 0);
      return a;
    });
  function In(a) {
    a &&
      Fn &&
      Hn() &&
      (Fn.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),
      Fn.clearMarks(`goog_${a.label}_${a.uniqueId}_end`));
  }
  function Jn(a) {
    a.g = !1;
    a.j !== a.l.google_js_reporting_queue &&
      (Hn() && Ia(a.j, In), (a.j.length = 0));
  }
  var Kn = class {
    constructor(a) {
      this.j = [];
      this.l = a || r;
      let b = null;
      a &&
        ((a.google_js_reporting_queue = a.google_js_reporting_queue || []),
        (this.j = a.google_js_reporting_queue),
        (b = a.google_measure_js_timing));
      this.g = Hn() || (b != null ? b : Math.random() < 1);
    }
    start(a, b) {
      if (!this.g) return null;
      a = new En(a, b);
      b = `goog_${a.label}_${a.uniqueId}_start`;
      Fn && Hn() && Fn.mark(b);
      return a;
    }
    end(a) {
      if (this.g && typeof a.value === "number") {
        a.duration = (Dn() || Cn()) - a.value;
        var b = `goog_${a.label}_${a.uniqueId}_end`;
        Fn && Hn() && Fn.mark(b);
        !this.g || this.j.length > 2048 || this.j.push(a);
      }
    }
  };
  function Ln(a, b) {
    const c = {};
    c[a] = b;
    return [c];
  }
  function Mn(a, b, c, d, e) {
    const f = [];
    Jd(a, (g, h) => {
      (g = Nn(g, b, c, d, e)) && f.push(`${h}=${g}`);
    });
    return f.join(b);
  }
  function Nn(a, b, c, d, e) {
    if (a == null) return "";
    b = b || "&";
    c = c || ",$";
    typeof c === "string" && (c = c.split(""));
    if (a instanceof Array) {
      if ((d || (d = 0), d < c.length)) {
        const f = [];
        for (let g = 0; g < a.length; g++) f.push(Nn(a[g], b, c, d + 1, e));
        return f.join(c[d]);
      }
    } else if (typeof a === "object")
      return (
        e || (e = 0), e < 2 ? encodeURIComponent(Mn(a, b, c, d, e + 1)) : "..."
      );
    return encodeURIComponent(String(a));
  }
  function On(a) {
    let b = 1;
    for (const c in a.j) c.length > b && (b = c.length);
    return 3997 - b - a.l.length - 1;
  }
  function Pn(a, b, c, d) {
    b = b + "//" + c + d;
    let e = On(a) - d.length;
    if (e < 0) return "";
    a.g.sort((f, g) => f - g);
    d = null;
    c = "";
    for (let f = 0; f < a.g.length; f++) {
      const g = a.g[f],
        h = a.j[g];
      for (let k = 0; k < h.length; k++) {
        if (!e) {
          d = d == null ? g : d;
          break;
        }
        let m = Mn(h[k], a.l, ",$");
        if (m) {
          m = c + m;
          if (e >= m.length) {
            e -= m.length;
            b += m;
            c = a.l;
            break;
          }
          d = d == null ? g : d;
        }
      }
    }
    a = "";
    d != null && (a = `${c}${"trn"}=${d}`);
    return b + a;
  }
  var Qn = class {
    constructor() {
      this.l = "&";
      this.j = {};
      this.B = 0;
      this.g = [];
    }
  };
  var Rn = RegExp(
    "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
  );
  function Sn(a, b, c) {
    c = c != null ? "=" + encodeURIComponent(String(c)) : "";
    if ((b += c)) {
      c = a.indexOf("#");
      c < 0 && (c = a.length);
      let d = a.indexOf("?"),
        e;
      d < 0 || d > c ? ((d = c), (e = "")) : (e = a.substring(d + 1, c));
      a = [a.slice(0, d), e, a.slice(c)];
      c = a[1];
      a[1] = b ? (c ? c + "&" + b : b) : c;
      a = a[0] + (a[1] ? "?" + a[1] : "") + a[2];
    }
    return a;
  }
  var Tn = /#|$/;
  function Un(a, b) {
    const c = a.search(Tn);
    a: {
      var d = 0;
      for (var e = b.length; (d = a.indexOf(b, d)) >= 0 && d < c; ) {
        var f = a.charCodeAt(d - 1);
        if (f == 38 || f == 63)
          if (((f = a.charCodeAt(d + e)), !f || f == 61 || f == 38 || f == 35))
            break a;
        d += e + 1;
      }
      d = -1;
    }
    if (d < 0) return null;
    e = a.indexOf("&", d);
    if (e < 0 || e > c) e = c;
    d += b.length + 1;
    return decodeURIComponent(a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " "));
  }
  var Xn = class {
    constructor(a = null) {
      this.K = Vn;
      this.j = a;
      this.g = null;
      this.B = !1;
      this.ra = this.ma;
    }
    l(a) {
      this.g = a;
    }
    A(a) {
      this.B = a;
    }
    ec(a, b, c) {
      let d, e;
      try {
        this.j && this.j.g
          ? ((e = this.j.start(a.toString(), 3)), (d = b()), this.j.end(e))
          : (d = b());
      } catch (f) {
        b = !0;
        try {
          In(e), (b = this.ra(a, un(f), void 0, c));
        } catch (g) {
          this.ma(217, g);
        }
        if (b) window.console?.error?.(f);
        else throw f;
      }
      return d;
    }
    hc(a, b, c, d) {
      return (...e) => this.ec(a, () => b.apply(c, e), d);
    }
    ma(a, b, c, d, e) {
      e = e || "jserror";
      let f = void 0;
      try {
        const N = new Qn();
        var g = N;
        g.g.push(1);
        g.j[1] = Ln("context", a);
        (b.error && b.meta && b.id) || (b = un(b));
        g = b;
        if (g.msg) {
          b = N;
          var h = g.msg.substring(0, 512);
          b.g.push(2);
          b.j[2] = Ln("msg", h);
        }
        var k = g.meta || {};
        h = k;
        if (this.g)
          try {
            this.g(h);
          } catch (Aa) {}
        if (d)
          try {
            d(h);
          } catch (Aa) {}
        d = N;
        k = [k];
        d.g.push(3);
        d.j[3] = k;
        var m;
        if (!(m = p)) {
          d = r;
          k = [];
          h = null;
          do {
            var l = d;
            if (Bd(l)) {
              var n = l.location.href;
              h = (l.document && l.document.referrer) || null;
            } else (n = h), (h = null);
            k.push(new zn(n || "", l));
            try {
              d = l.parent;
            } catch (Aa) {
              d = null;
            }
          } while (d && l !== d);
          for (let Aa = 0, Ka = k.length - 1; Aa <= Ka; ++Aa)
            k[Aa].depth = Ka - Aa;
          l = r;
          if (
            l.location &&
            l.location.ancestorOrigins &&
            l.location.ancestorOrigins.length === k.length - 1
          )
            for (n = 1; n < k.length; ++n) {
              const Aa = k[n];
              Aa.url ||
                ((Aa.url = l.location.ancestorOrigins[n - 1] || ""),
                (Aa.g = !0));
            }
          m = k;
        }
        var p = m;
        let aa = new zn(r.location.href, r, !1);
        m = null;
        const db = p.length - 1;
        for (l = db; l >= 0; --l) {
          var q = p[l];
          !m && xn.test(q.url) && (m = q);
          if (q.url && !q.g) {
            aa = q;
            break;
          }
        }
        q = null;
        const Wb = p.length && p[db].url;
        aa.depth !== 0 && Wb && (q = p[db]);
        f = new yn(aa, q);
        if (f.j) {
          p = N;
          var v = f.j.url || "";
          p.g.push(4);
          p.j[4] = Ln("top", v);
        }
        var E = { url: f.g.url || "" };
        if (f.g.url) {
          const Aa = f.g.url.match(Rn);
          var F = Aa[1],
            R = Aa[3],
            ea = Aa[4];
          v = "";
          F && (v += F + ":");
          R && ((v += "//"), (v += R), ea && (v += ":" + ea));
          var J = v;
        } else J = "";
        F = N;
        E = [E, { url: J }];
        F.g.push(5);
        F.j[5] = E;
        Wn(this.K, e, N, this.B, c);
      } catch (N) {
        try {
          Wn(
            this.K,
            e,
            { context: "ecmserr", rctx: a, msg: vn(N), url: f?.g.url ?? "" },
            this.B,
            c
          );
        } catch (aa) {}
      }
      return !0;
    }
    Sa(a, b, c) {
      b.catch((d) => {
        d = d ? d : "unknown rejection";
        this.ma(
          a,
          d instanceof Error ? d : Error(d),
          void 0,
          c || this.g || void 0
        );
      });
    }
  };
  var Yn = class extends I {};
  var Zn = Ck([0, Ak, uk]);
  function $n(a, b) {
    try {
      const c = (d) => [{ [d.Rb]: d.Ff }];
      return JSON.stringify([
        a.filter((d) => d.ub).map(c),
        zg(b),
        a.filter((d) => !d.ub).map(c),
      ]);
    } catch (c) {
      return ao(c, b), "";
    }
  }
  function bo(a, b) {
    const c = new Ni();
    try {
      const d = a.filter((f) => f.ub).map(co);
      Li(c, 1, d);
      Ki(c, 2, Zn(b), Mi);
      const e = a.filter((f) => !f.ub).map(co);
      Li(c, 3, e);
    } catch (d) {
      ao(d, b);
    }
    return Ji(c);
  }
  function ao(a, b) {
    try {
      Em(
        {
          m: vn(a instanceof Error ? a : Error(String(a))),
          b: C(b, 1) || null,
          v: B(b, 2) || null,
        },
        "rcs_internal"
      );
    } catch (c) {}
  }
  function co(a) {
    const b = new Ni();
    Ki(b, a.Rb, a.Xf, Mi);
    return Ji(b);
  }
  function Mi(a, b) {
    Fi(b, a.subarray(0, a.length));
  }
  var eo = class {
    constructor(a, b) {
      var c = new Yn();
      a = H(c, 1, a);
      b = mi(a, 2, b);
      this.j = ih(b);
    }
  };
  function fo(a) {
    return Math.round(a);
  }
  function go(a, b) {
    return Hh(a, 1, ho, gg(b));
  }
  function io(a, b) {
    return Hh(a, 2, ho, Tf(b));
  }
  function jo(a, b) {
    return Hh(a, 3, ho, b == null ? b : wf(b));
  }
  var L = class extends I {},
    ho = [1, 2, 3];
  function ko(a, b) {
    return Hh(a, 2, lo, Tf(b));
  }
  function mo(a, b) {
    return Hh(a, 4, lo, uf(b));
  }
  var no = class extends I {},
    lo = [2, 4];
  function oo(a) {
    var b = new po();
    return mi(b, 1, a);
  }
  function qo(a, b) {
    return y(a, 3, b);
  }
  function M(a, b) {
    return Rh(a, 4, L, b);
  }
  var po = class extends I {};
  var ro = Ck([0, uk, 1, [0, lo, 1, hk, 1, ak], wk, [0, ho, vk, hk, rk]]);
  var so = class extends I {
    j() {
      return B(this, 2);
    }
    getWidth() {
      return B(this, 3);
    }
    getHeight() {
      return B(this, 4);
    }
  };
  var to = class extends I {};
  var uo = class extends I {};
  var vo = class extends I {};
  var wo = class extends I {},
    xo = [5, 6];
  var yo = [0, ek, -1];
  var zo = [0, wk, [0, zk, [0, lk, -3]], yo, -1];
  var Ao = class extends I {
    getValue() {
      return C(this, 1);
    }
  };
  function Bo(a) {
    var b = new Co();
    return ni(b, 1, a);
  }
  var Co = class extends I {
    getValue() {
      return C(this, 1);
    }
  };
  var Do = class extends I {
    getValue() {
      return C(this, 1);
    }
  };
  var Eo = class extends I {
    getHeight() {
      return Wh(this, 2);
    }
  };
  function Fo(a, b) {
    return hi(a, 1, b);
  }
  function Go(a, b) {
    return Ph(a, 2, b);
  }
  var Ho = class extends I {};
  var Io = class extends I {};
  var Jo = class extends I {};
  var Lo = class extends I {
      setError(a) {
        return z(this, 3, Ko, a);
      }
    },
    Ko = [2, 3];
  function Mo(a, b) {
    return ji(a, 1, b);
  }
  function No(a, b) {
    return ji(a, 2, b);
  }
  function Oo(a, b) {
    return ji(a, 3, b);
  }
  function Po(a, b) {
    return ji(a, 4, b);
  }
  function Qo(a, b) {
    return ji(a, 5, b);
  }
  function Ro(a, b) {
    return Gh(a, 8, uf(b), 0);
  }
  function So(a, b) {
    return Gh(a, 9, uf(b), 0);
  }
  var To = class extends I {};
  function Uo(a, b) {
    return ji(a, 1, b);
  }
  function Vo(a, b) {
    return ji(a, 2, b);
  }
  var Wo = class extends I {};
  function Xo(a, b) {
    Rh(a, 1, Wo, b);
  }
  var Eh = class extends I {};
  var Yo = class extends I {};
  function Zo(a, b) {
    return Fh(a, 1, b, fg);
  }
  function $o(a, b) {
    return Fh(a, 12, b, bg);
  }
  function ap() {
    var a = new bp();
    return Qh(a, 2, fg, "irr", hg);
  }
  function cp(a, b) {
    return D(a, 3, b);
  }
  function dp(a, b) {
    return D(a, 4, b);
  }
  function ep(a, b) {
    return D(a, 5, b);
  }
  function fp(a, b) {
    return D(a, 7, b);
  }
  function gp(a, b) {
    return D(a, 8, b);
  }
  function hp(a, b) {
    return ji(a, 9, b);
  }
  function ip(a, b) {
    return Ph(a, 10, b);
  }
  function jp(a, b) {
    return Fh(a, 11, b, Nf);
  }
  var bp = class extends I {};
  function kp(a) {
    var b = lp();
    y(a, 1, b);
  }
  function mp(a, b) {
    return ji(a, 2, b);
  }
  function np(a, b) {
    return Ph(a, 3, b);
  }
  function op(a, b) {
    return Ph(a, 4, b);
  }
  function pp(a, b) {
    return Rh(a, 4, Co, b);
  }
  function qp(a, b) {
    return Ph(a, 5, b);
  }
  function rp(a, b) {
    return Fh(a, 6, b, fg);
  }
  function sp(a, b) {
    return ji(a, 7, b);
  }
  function tp(a, b) {
    return ji(a, 8, b);
  }
  function up(a, b) {
    y(a, 9, b);
  }
  function vp(a, b) {
    return D(a, 10, b);
  }
  function wp(a, b) {
    return D(a, 11, b);
  }
  function xp(a, b) {
    return D(a, 12, b);
  }
  var yp = class extends I {};
  var zp = class extends I {};
  function Ap(a, b) {
    return li(a, 1, b);
  }
  function Bp(a, b) {
    return li(a, 2, b);
  }
  var Cp = class extends I {};
  var Dp = class extends I {};
  function Ep(a) {
    var b = new Fp();
    return H(b, 1, a);
  }
  var Fp = class extends I {};
  var Gp = class extends I {};
  var Hp = class extends I {};
  var Ip = class extends I {};
  var Jp = class extends I {},
    Kp = [1, 2];
  var Lp = class extends I {};
  var Mp = class extends I {},
    Np = [1];
  function Op(a) {
    var b = new Pp();
    return H(b, 1, a);
  }
  var Pp = class extends I {};
  var Qp = class extends I {};
  var Rp = class extends I {};
  var Sp = class extends I {};
  var Tp = class extends I {};
  var Up = class extends I {};
  var Vp = class extends I {};
  var Wp = class extends I {};
  var Xp = class extends I {
    getContentUrl() {
      return B(this, 1);
    }
  };
  var Yp = class extends I {};
  function Zp(a) {
    var b = new $p();
    return Fh(b, 1, a, Af);
  }
  var $p = class extends I {};
  var aq = class extends I {};
  function bq() {
    var a = new cq(),
      b = new aq();
    return z(a, 1, dq, b);
  }
  function eq() {
    var a = new cq(),
      b = new aq();
    return z(a, 9, dq, b);
  }
  function fq() {
    var a = new cq(),
      b = new aq();
    return z(a, 13, dq, b);
  }
  function gq(a, b) {
    return z(a, 14, dq, b);
  }
  var cq = class extends I {},
    dq = [1, 2, 3, 9, 11, 12, 13, 14];
  var hq = class extends I {};
  function iq(a, b) {
    return mi(a, 1, b);
  }
  var jq = class extends I {};
  var kq = class extends I {};
  var lq = class extends I {};
  function mq(a, b) {
    return ki(a, 10, b);
  }
  function nq(a, b) {
    return H(a, 1, b);
  }
  function oq(a, b) {
    return mi(a, 4, b);
  }
  var pq = class extends I {};
  var qq = class extends I {};
  var rq = class extends I {};
  var tq = class extends I {
      j() {
        return bi(this, qq, 4, sq);
      }
      g() {
        return th(this, qq, 4, sq);
      }
    },
    sq = [4, 5];
  function uq(a) {
    var b = new vq();
    return mi(b, 4, a);
  }
  function wq(a, b) {
    return ph(a, 6, cg(b));
  }
  var vq = class extends I {};
  var xq = class extends I {};
  var yq = class extends I {
    j() {
      return x(this, xq, 2);
    }
  };
  var zq = class extends I {},
    Aq = [1];
  function Bq(a) {
    var b = new Cq();
    return G(b, 2, a);
  }
  function Dq(a, b) {
    return Qh(a, 3, Nf, b, $f, void 0, void 0, !0);
  }
  var Cq = class extends I {};
  var Eq = class extends I {
    j() {
      return x(this, qq, 1);
    }
    g() {
      return rh(this, qq, 1);
    }
  };
  var Fq = class extends I {};
  var Gq = class extends I {};
  var Hq = class extends I {};
  var Iq = class extends I {};
  var Jq = class extends I {},
    Kq = [2, 3];
  var Lq = class extends I {},
    Mq = [3, 4, 5, 6, 7, 8, 9, 11, 12, 14, 16, 17, 19, 20, 21];
  function Nq(a, b) {
    return ji(a, 3, b);
  }
  var Oq = class extends I {},
    Pq = [4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  var Qq = [0];
  var Rq = [0, uk, tk];
  var Sq = [
    0,
    1,
    wk,
    [
      0,
      Ak,
      uk,
      -2,
      nk,
      -2,
      [0, uk, 2, nk, -1, uk, [0, nk, -2, ck], -1],
      wk,
      Rq,
      kk,
      1,
      lk,
    ],
  ];
  var Tq = [0, ek, -1];
  var Uq = Ck([
    0,
    Pq,
    gk,
    uk,
    gk,
    K,
    [0, yo, -1, [0, yk], uk, qk],
    K,
    [
      0,
      [0, tk, -1, qk, -5, gk, wk, [0, uk, gk, qk, -1], fk, jk, kk],
      gk,
      wk,
      [0, yk],
      wk,
      [0, yk],
      wk,
      [0, yk],
      tk,
      gk,
      -1,
      [0, gk, -4, 2, Zj, -1],
      qk,
      -2,
      1,
      Oj,
      [!0, sk, [0, wk, [0, gk, -1]]],
      wk,
      [0, uk, -2],
      [
        0,
        Ko,
        1,
        K,
        [0, lk, -2, pk, wk, [0, lk, wk, [0, lk, -1]]],
        K,
        [0, yk, -1],
      ],
    ],
    K,
    [
      0,
      Mq,
      gk,
      -1,
      K,
      [
        0,
        sq,
        [0, uk, -1, qk],
        [0, 1, uk, -1],
        gk,
        K,
        Sq,
        K,
        [0, wk, [0, dq, K, Qq, -2, 5, K, Qq, 1, K, Qq, -2, K, [0, zk]]],
        [0, lk, -1, xk, -2, lk],
      ],
      K,
      [0, 1, kk],
      K,
      [0, gk],
      K,
      [0, 1, ik, 1, uk],
      K,
      [0, gk],
      K,
      [0, 1, ek, -1, uk, 1, ik, ek, -1],
      K,
      [0, Kq, gk, K, [0], K, [0]],
      [0, 1, nk, fk],
      K,
      [0, Ak],
      K,
      [0, 1, uk, kk],
      1,
      K,
      [0, Sq, gk],
      pk,
      K,
      [0, kk],
      K,
      [0, gk],
      Ak,
      K,
      [0, Aq, K, [0, kk, [0, nk, -5], Rq, -1]],
      K,
      [0, kk],
      K,
      [0, gk],
    ],
    gk,
    K,
    [0, uk, [0, nk, -1, [0, Zj, -5, qk]], gk, zo],
    K,
    [0, Ak, mk],
    K,
    [0, Ak, -1, uk, -1],
    K,
    [0, Np, K, [0, pk, -1]],
    K,
    [0, Ak, qk, -9],
    K,
    [
      0,
      Kp,
      K,
      [0, [0, Ak, uk, -1]],
      K,
      [0, nk, -1, uk, [0, nk, -1], -1, qk, zk, nk, -1],
    ],
    K,
    [
      0,
      [1, 2, 3, 4],
      K,
      [0, [0, ek, -1], Tq, pk, sk],
      K,
      [0],
      K,
      [0, Tq],
      K,
      [0],
    ],
    K,
    [
      0,
      [3, 4, 5, 6, 7, 8],
      ek,
      [0, dk],
      K,
      [0],
      K,
      [0],
      K,
      [0],
      K,
      [0],
      K,
      [0],
      K,
      [0, [1, 2, 3, 4, 5], K, [0], -4],
    ],
    K,
    [0, xo, ek, -2, [0, sk, -2, pk, [0, sk, -3]], K, [0], K, [0]],
    K,
    zo,
    K,
    [0, sk, -2, ek],
    K,
    [0, sk, -1],
  ]);
  function Vq(a, b) {
    return ji(a, 1, b);
  }
  function Wq(a, b) {
    return ji(a, 2, b);
  }
  function Xq(a) {
    return H(a, 3, 6);
  }
  var Yq = class extends I {
    getTagSessionCorrelator() {
      return Xh(this, 1);
    }
  };
  var Zq = Ck([0, gk, -1, Ak]);
  var $q = class extends I {};
  function ar() {
    var a = $i(br());
    return mi(a, 1, cr());
  }
  var dr = class extends I {};
  var er = [0, [0, ek, ok, -1], uk];
  var fr = class extends I {};
  var gr = class extends I {
    getTagSessionCorrelator() {
      return Xh(this, 1);
    }
  };
  var hr = class extends I {},
    ir = [1, 7],
    jr = [4, 6, 8];
  var kr = Ck([
    0,
    ir,
    jr,
    K,
    [0, Ak, uk, -1, tk, -1, er],
    [0, gk, mk, uk],
    1,
    K,
    [0, uk, nk, tk],
    gk,
    K,
    [0, uk, -1, sk, [0, mk], 1, Ak, uk, -1],
    K,
    [0, uk, -1, tk, -1, er],
    K,
    [0, [1], K, [0, [0, uk, -2, Ak, uk]], [0, gk, -1]],
  ]);
  class lr {
    constructor(a) {
      this.K = a;
      this.Sd = new mr(this.K);
    }
  }
  class mr {
    constructor(a) {
      this.K = a;
      this.dd = new nr(this.K);
    }
  }
  class nr {
    constructor(a) {
      this.K = a;
      this.g = new Or(this.K);
      this.Ij = new Pr(this.K);
    }
  }
  class Or {
    constructor(a) {
      this.K = a;
      this.j = new Qr(this.K);
      this.g = new Rr(this.K);
    }
  }
  class Qr {
    constructor(a) {
      this.K = a;
    }
    Oc(a) {
      this.K.g(qo(M(oo("xR0Czf"), go(new L(), a.status)), mo(new no(), a.Pc)));
    }
  }
  class Rr {
    constructor(a) {
      this.K = a;
    }
    Oc(a) {
      this.K.g(qo(M(oo("jM4CPd"), io(new L(), fo(a.Nj))), mo(new no(), a.Pc)));
    }
  }
  class Pr {
    constructor(a) {
      this.K = a;
      this.ik = new Sr(this.K);
      this.jk = new Tr(this.K);
      this.tg = new Ur(this.K);
      this.kk = new Vr(this.K);
      this.lk = new Wr(this.K);
      this.mk = new Xr(this.K);
      this.nk = new Yr(this.K);
      this.vg = new Zr(this.K);
      this.Hk = new $r(this.K);
      this.Uk = new as(this.K);
      this.Vk = new bs(this.K);
      this.ul = new cs(this.K);
      this.vl = new ds(this.K);
      this.Dm = new es(this.K);
    }
  }
  class Sr {
    constructor(a) {
      this.K = a;
    }
    ib(a) {
      this.K.g(
        qo(
          M(M(oo("VEDP7d"), go(new L(), a.language)), io(new L(), a.Ua)),
          ko(new no(), fo(a.na))
        )
      );
    }
  }
  class Tr {
    constructor(a) {
      this.K = a;
    }
    ib(a) {
      this.K.g(
        qo(
          M(M(oo("igjuhc"), go(new L(), a.language)), io(new L(), a.Ua)),
          ko(new no(), fo(a.na))
        )
      );
    }
  }
  class Ur {
    constructor(a) {
      this.K = a;
    }
    Oc(a) {
      this.K.g(
        qo(
          M(
            M(
              M(
                M(M(oo("i3zJEd"), go(new L(), a.language)), io(new L(), a.Ua)),
                io(new L(), a.outcome)
              ),
              jo(new L(), a.re)
            ),
            jo(new L(), a.Zg)
          ),
          mo(new no(), a.Pc)
        )
      );
    }
  }
  class Vr {
    constructor(a) {
      this.K = a;
    }
    ib(a) {
      this.K.g(
        qo(
          M(
            M(
              M(
                M(M(oo("JN0hVd"), go(new L(), a.language)), io(new L(), a.Ua)),
                io(new L(), a.outcome)
              ),
              jo(new L(), a.re)
            ),
            jo(new L(), a.Zg)
          ),
          ko(new no(), fo(a.na))
        )
      );
    }
  }
  class Wr {
    constructor(a) {
      this.K = a;
    }
    ib(a) {
      this.K.g(
        qo(
          M(
            M(M(oo("rmHfOd"), go(new L(), a.language)), io(new L(), a.Ua)),
            io(new L(), a.reason)
          ),
          ko(new no(), fo(a.na))
        )
      );
    }
  }
  class Xr {
    constructor(a) {
      this.K = a;
    }
    ib(a) {
      this.K.g(
        qo(
          M(
            M(M(oo("VEyQic"), go(new L(), a.language)), io(new L(), a.Ua)),
            io(new L(), a.format)
          ),
          ko(new no(), fo(a.na))
        )
      );
    }
  }
  class Yr {
    constructor(a) {
      this.K = a;
    }
    ib(a) {
      this.K.g(
        qo(
          M(
            M(M(oo("QFcNxc"), go(new L(), a.language)), io(new L(), a.Ua)),
            io(new L(), a.format)
          ),
          ko(new no(), fo(a.na))
        )
      );
    }
  }
  class Zr {
    constructor(a) {
      this.K = a;
    }
    ib(a) {
      this.K.g(
        qo(
          M(
            M(
              M(M(oo("SIhp4"), go(new L(), a.language)), io(new L(), a.Ua)),
              io(new L(), a.format)
            ),
            jo(new L(), a.re)
          ),
          ko(new no(), fo(a.na))
        )
      );
    }
  }
  class $r {
    constructor(a) {
      this.K = a;
    }
    ib(a) {
      this.K.g(
        qo(
          M(
            M(M(oo("Eeiun"), go(new L(), a.language)), io(new L(), a.Ua)),
            io(new L(), a.format)
          ),
          ko(new no(), fo(a.na))
        )
      );
    }
  }
  class as {
    constructor(a) {
      this.K = a;
    }
    ib(a) {
      this.K.g(
        qo(
          M(M(oo("zGH6sc"), go(new L(), a.language)), io(new L(), a.Ua)),
          ko(new no(), fo(a.na))
        )
      );
    }
  }
  class bs {
    constructor(a) {
      this.K = a;
    }
    ib(a) {
      this.K.g(
        qo(
          M(
            M(M(oo("SmbJl"), go(new L(), a.language)), io(new L(), a.Ua)),
            io(new L(), a.type)
          ),
          ko(new no(), fo(a.na))
        )
      );
    }
  }
  class cs {
    constructor(a) {
      this.K = a;
    }
    ib(a) {
      this.K.g(
        qo(
          M(
            M(M(oo("qleBg"), go(new L(), a.language)), io(new L(), a.Ua)),
            io(new L(), a.format)
          ),
          ko(new no(), fo(a.na))
        )
      );
    }
  }
  class ds {
    constructor(a) {
      this.K = a;
    }
    ib(a) {
      this.K.g(
        qo(
          M(
            M(
              M(M(oo("pVNWme"), go(new L(), a.language)), io(new L(), a.Ua)),
              io(new L(), a.sc)
            ),
            io(new L(), a.format)
          ),
          ko(new no(), fo(a.na))
        )
      );
    }
  }
  class es {
    constructor(a) {
      this.K = a;
    }
    ib(a) {
      this.K.g(
        qo(
          M(
            M(M(oo("pYLGPe"), go(new L(), a.language)), io(new L(), a.Ua)),
            io(new L(), a.type)
          ),
          ko(new no(), fo(a.na))
        )
      );
    }
  }
  class fs extends eo {
    constructor() {
      super(...arguments);
      this.Kd = new lr(this);
    }
  }
  var gs = class extends fs {
      Hj(...a) {
        this.A(...a.map((b) => ({ ub: !0, Rb: 3, Ff: zg(b) })));
      }
      lc(...a) {
        this.A(...a.map((b) => ({ ub: !0, Rb: 7, Ff: zg(b) })));
      }
      F(...a) {
        this.A(...a.map((b) => ({ ub: !0, Rb: 16, Ff: zg(b) })));
      }
      g(...a) {
        this.A(...a.map((b) => ({ ub: !1, Rb: 1, Ff: zg(b) })));
      }
    },
    is = class extends fs {
      Hj(...a) {
        hs(this, ...a.map((b) => ({ ub: !0, Rb: 3, Xf: kr(b) })));
      }
      lc(...a) {
        hs(this, ...a.map((b) => ({ ub: !0, Rb: 7, Xf: Uq(b) })));
      }
      F(...a) {
        hs(this, ...a.map((b) => ({ ub: !0, Rb: 16, Xf: Zq(b) })));
      }
      g(...a) {
        hs(this, ...a.map((b) => ({ ub: !1, Rb: 1, Xf: ro(b) })));
      }
    };
  function js(a, b) {
    globalThis
      .fetch(a, {
        method: "POST",
        body: b,
        keepalive: b.length < 65536,
        credentials: "omit",
        mode: "no-cors",
        redirect: "follow",
      })
      .catch(() => {});
  }
  var ks = class extends gs {
      constructor(a) {
        super(2, a);
        this.l = js;
      }
      A(...a) {
        try {
          const b = $n(a, this.j);
          this.l("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
        } catch (b) {
          ao(b, this.j);
        }
      }
    },
    ls = class extends ks {};
  function ms(a) {
    a.B !== null && (clearTimeout(a.B), (a.B = null));
    if (a.l.length) {
      var b = $n(a.l, a.j);
      a.H("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
      a.l = [];
    }
  }
  var os = class extends gs {
      constructor(a, b, c, d, e) {
        super(2, a);
        this.H = js;
        this.V = b;
        this.L = c;
        this.T = d;
        this.D = e;
        this.l = [];
        this.B = null;
        this.J = !1;
      }
      A(...a) {
        try {
          this.T && $n(this.l.concat(a), this.j).length >= 65536 && ms(this),
            this.D &&
              !this.J &&
              ((this.J = !0),
              ns(this.D, () => {
                ms(this);
              })),
            this.l.push(...a),
            this.l.length >= this.L && ms(this),
            this.l.length &&
              this.B === null &&
              (this.B = setTimeout(() => {
                ms(this);
              }, this.V));
        } catch (b) {
          ao(b, this.j);
        }
      }
    },
    ps = class extends os {
      constructor(a, b = 1e3, c = 100, d = !1, e) {
        super(a, b, c, d && !0, e);
      }
    };
  var qs = (a) => {
    var b = "Fc";
    if (a.Fc && a.hasOwnProperty(b)) return a.Fc;
    b = new a();
    return (a.Fc = b);
  };
  function rs(a, b, c) {
    return b[a] || c;
  }
  function ss(a, b) {
    a.g = (c, d) => rs(2, b, () => [])(c, 1, d);
    a.j = () => rs(3, b, () => [])(1);
  }
  class ts {
    g() {
      return [];
    }
    j() {
      return [];
    }
  }
  function us(a, b) {
    return qs(ts).g(a, b);
  }
  function vs() {
    return qs(ts).j();
  }
  function Wn(a, b, c, d = !1, e) {
    if ((d ? a.g : Math.random()) < (e || 0.01))
      try {
        let f;
        c instanceof Qn
          ? (f = c)
          : ((f = new Qn()),
            Jd(c, (h, k) => {
              var m = f;
              const l = m.B++;
              h = Ln(k, h);
              m.g.push(l);
              m.j[l] = h;
            }));
        const g = Pn(f, a.protocol, a.domain, a.path + b + "&");
        g && Cm(r, g);
      } catch (f) {}
  }
  function ws(a, b) {
    b >= 0 && b <= 1 && (a.g = b);
  }
  var xs = class {
    constructor() {
      this.domain = "pagead2.googlesyndication.com";
      this.path = "/pagead/gen_204?id=";
      this.protocol = "https:";
      this.g = Math.random();
    }
  };
  let Vn, ys;
  const zs = new Kn(window);
  (function (a) {
    Vn = a ?? new xs();
    typeof window.google_srt !== "number" &&
      (window.google_srt = Math.random());
    ws(Vn, window.google_srt);
    ys = new Xn(zs);
    ys.l(() => {});
    ys.A(!0);
    window.document.readyState === "complete"
      ? window.google_measure_js_timing || Jn(zs)
      : zs.g &&
        wl(window, "load", () => {
          window.google_measure_js_timing || Jn(zs);
        });
  })();
  function As(a) {
    ys.Sa(1085, a);
  }
  let Bs = new Date().getTime();
  var Cs = {
    lp: 0,
    kp: 1,
    hp: 2,
    bp: 3,
    ip: 4,
    cp: 5,
    jp: 6,
    fp: 7,
    gp: 8,
    ap: 9,
    ep: 10,
    mp: 11,
  };
  var Ds = { qp: 0, sp: 1, np: 2 };
  function Es(a, b) {
    return (
      a.left < b.right &&
      b.left < a.right &&
      a.top < b.bottom &&
      b.top < a.bottom
    );
  }
  function Fs(a) {
    a = a.map((b) => new dl(b.top, b.right, b.bottom, b.left));
    a = Gs(a);
    return { top: a.top, right: a.right, bottom: a.bottom, left: a.left };
  }
  function Gs(a) {
    if (!a.length) throw Error("pso:box:m:nb");
    return a.slice(1).reduce((b, c) => {
      b.left = Math.min(b.left, c.left);
      b.top = Math.min(b.top, c.top);
      b.right = Math.max(b.right, c.right);
      b.bottom = Math.max(b.bottom, c.bottom);
      return b;
    }, el(a[0]));
  }
  var ac = {
    fq: 0,
    Po: 1,
    So: 2,
    Qo: 3,
    Ro: 4,
    Yo: 8,
    qq: 9,
    Ep: 10,
    Fp: 11,
    nq: 16,
    Jo: 17,
    Io: 24,
    Cp: 25,
    mo: 26,
    lo: 27,
    Zj: 30,
    vp: 32,
    zp: 40,
    vq: 41,
    rq: 42,
  };
  var Hs = {
      overlays: 1,
      interstitials: 2,
      vignettes: 2,
      inserts: 3,
      immersives: 4,
      list_view: 5,
      full_page: 6,
      side_rails: 7,
    },
    Is = { [1]: 1, [2]: 1, [3]: 7, [4]: 7, [8]: 2, [27]: 3, [9]: 4, [30]: 5 };
  var Js = 728 * 1.38;
  function Ks(a, b = -1) {
    if (a !== a.top) {
      if (b < 0) a = !1;
      else {
        var c = Ls(a, !0, !0),
          d = Ms(a, !0);
        a =
          c > 0 &&
          d > 0 &&
          Math.abs(1 - a.screen.width / c) <= b &&
          Math.abs(1 - a.screen.height / d) <= b;
      }
      a = a ? 0 : 512;
    } else a = 0;
    return a;
  }
  function Ns(a, b = 420, c = !1, d = !1) {
    return (a = Ls(a, c, d)) ? (a > b ? 32768 : a < 320 ? 65536 : 0) : 16384;
  }
  function Os(a) {
    return Math.max(0, Ps(a, !0) - Ms(a));
  }
  function Qs(a) {
    a = a.document;
    let b = {};
    a && (b = a.compatMode == "CSS1Compat" ? a.documentElement : a.body);
    return b || {};
  }
  function Ms(a, b = !1) {
    const c = Qs(a).clientHeight;
    return b ? c * (Tb() && Ub() ? me(a) : 1) : c;
  }
  function Ls(a, b = !1, c = !1) {
    c = Qs(a).clientWidth ?? (c ? a.innerWidth : void 0);
    return b ? c * (Tb() && Ub() ? me(a) : 1) : c;
  }
  function Ps(a, b) {
    const c = Qs(a);
    return b
      ? ((a = Ms(a)), c.scrollHeight === a ? c.offsetHeight : c.scrollHeight)
      : c.offsetHeight;
  }
  function Rs(a, b) {
    return ft(b) || b === 10 || !a.adCount
      ? !1
      : b === 1 || b === 2
      ? !(!a.adCount[1] && !a.adCount[2])
      : (a = a.adCount[b])
      ? a >= 1
      : !1;
  }
  function gt(a, b) {
    return a && a.source ? a.source === b || a.source.parent === b : !1;
  }
  function ht(a) {
    return a.pageYOffset === void 0
      ? (
          a.document.documentElement ||
          a.document.body.parentNode ||
          a.document.body
        ).scrollTop
      : a.pageYOffset;
  }
  function it(a) {
    return a.pageXOffset === void 0
      ? (
          a.document.documentElement ||
          a.document.body.parentNode ||
          a.document.body
        ).scrollLeft
      : a.pageXOffset;
  }
  function jt(a) {
    const b = {};
    let c;
    Array.isArray(a) ? (c = a) : a && a.key_value && (c = a.key_value);
    if (c)
      for (a = 0; a < c.length; a++) {
        const d = c[a];
        if ("key" in d && "value" in d) {
          const e = d.value;
          b[d.key] = e == null ? null : String(e);
        }
      }
    return b;
  }
  function kt(a, b, c, d) {
    Wn(
      c,
      b,
      { c: d.data.substring(0, 500), u: a.location.href.substring(0, 500) },
      !0,
      0.1
    );
    return !0;
  }
  function lt(a) {
    const b = {
      bottom: "auto",
      clear: "none",
      display: "inline",
      float: "none",
      height: "auto",
      left: "auto",
      margin: 0,
      "margin-bottom": 0,
      "margin-left": 0,
      "margin-right": "0",
      "margin-top": 0,
      "max-height": "none",
      "max-width": "none",
      opacity: 1,
      overflow: "visible",
      padding: 0,
      "padding-bottom": 0,
      "padding-left": 0,
      "padding-right": 0,
      "padding-top": 0,
      position: "static",
      right: "auto",
      top: "auto",
      "vertical-align": "baseline",
      visibility: "visible",
      width: "auto",
      "z-index": "auto",
    };
    Ia(Object.keys(b), (c) => {
      ll(a, c) || il(a, c, b[c]);
    });
    be(a);
  }
  function ft(a) {
    return a === 26 || a === 27 || a === 40 || a === 41;
  }
  function mt(a, b) {
    nt(a).forEach(b, void 0);
  }
  function nt(a) {
    const b = [],
      c = a.length;
    for (let d = 0; d < c; d++) b.push(a[d]);
    return b;
  }
  function ot(a, b) {
    return a.g[pt(b)] !== void 0;
  }
  function qt(a) {
    const b = [];
    for (const c in a.g)
      a.g[c] !== void 0 && a.g.hasOwnProperty(c) && b.push(a.j[c]);
    return b;
  }
  function rt(a) {
    const b = [];
    for (const c in a.g)
      a.g[c] !== void 0 && a.g.hasOwnProperty(c) && b.push(a.g[c]);
    return b;
  }
  var st = class {
    constructor() {
      this.g = {};
      this.j = {};
    }
    set(a, b) {
      const c = pt(a);
      this.g[c] = b;
      this.j[c] = a;
    }
    remove(a) {
      a = pt(a);
      this.g[a] = void 0;
      this.j[a] = void 0;
    }
    get(a, b) {
      a = pt(a);
      return this.g[a] !== void 0 ? this.g[a] : b;
    }
    oe() {
      return qt(this).length;
    }
    clear() {
      this.g = {};
      this.j = {};
    }
  };
  function pt(a) {
    return a instanceof Object ? String(ua(a)) : a + "";
  }
  var tt = class {
    constructor(a) {
      this.g = new st();
      if (a) for (let b = 0; b < a.length; ++b) this.add(a[b]);
    }
    add(a) {
      this.g.set(a, !0);
    }
    remove(a) {
      this.g.remove(a);
    }
    contains(a) {
      return ot(this.g, a);
    }
  };
  const ut = new tt(
    "IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(
      " "
    )
  );
  function vt(a, { oc: b, Zb: c, hd: d }) {
    return d && c(b)
      ? b
      : (b = b.parentElement)
      ? wt(a, { oc: b, Zb: c, hd: !0 })
      : null;
  }
  function wt(a, { oc: b, Zb: c, hd: d = !1 }) {
    const e = xt({ oc: b, Zb: c, hd: d }),
      f = a.g.get(e);
    if (f) return f.element;
    b = vt(a, { oc: b, Zb: c, hd: d });
    a.g.set(e, { element: b });
    return b;
  }
  var yt = class {
    constructor() {
      this.g = new Map();
    }
  };
  function xt({ oc: a, Zb: b, hd: c }) {
    a = ua(a);
    b = ua(b);
    return `${a}:${b}:${c}`;
  }
  function zt(a) {
    ic(a.document.body.offsetHeight);
  }
  function At(a) {
    a && typeof a.dispose == "function" && a.dispose();
  }
  function O() {
    this.B = this.B;
    this.J = this.J;
  }
  O.prototype.B = !1;
  O.prototype.dispose = function () {
    this.B || ((this.B = !0), this.g());
  };
  O.prototype[ja(Symbol, "dispose")] = function () {
    this.dispose();
  };
  function Bt(a, b) {
    Ct(a, Ba(At, b));
  }
  function Ct(a, b) {
    a.B ? b() : (a.J || (a.J = []), a.J.push(b));
  }
  O.prototype.g = function () {
    if (this.J) for (; this.J.length; ) this.J.shift()();
  };
  function Dt(a) {
    a.j.forEach((b, c) => {
      if (b.overrides.delete(a)) {
        b = Array.from(b.overrides.values()).pop() || b.originalValue;
        var d = a.element;
        b
          ? d.style.setProperty(c, b.value, b.priority)
          : d.style.removeProperty(c);
      }
    });
  }
  function Et(a, b, c) {
    c = { value: c, priority: "important" };
    var d = a.j.get(b);
    if (!d) {
      d = a.element;
      var e = d.style.getPropertyValue(b);
      d = {
        originalValue: e
          ? { value: e, priority: d.style.getPropertyPriority(b) }
          : null,
        overrides: new Map(),
      };
      a.j.set(b, d);
    }
    d.overrides.delete(a);
    d.overrides.set(a, c);
    a = a.element;
    c ? a.style.setProperty(b, c.value, c.priority) : a.style.removeProperty(b);
  }
  var Ft = class extends O {
    constructor(a, b) {
      super();
      this.element = b;
      a = a.googTempStyleOverrideInfo =
        a.googTempStyleOverrideInfo || new Map();
      var c = a.get(b);
      c ? (b = c) : ((c = new Map()), a.set(b, c), (b = c));
      this.j = b;
    }
    g() {
      Dt(this);
      super.g();
    }
  };
  function Gt(a) {
    const b = new P(a.getValue());
    a.listen((c) => b.g(c));
    return b;
  }
  function Ht(a, b) {
    const c = new P({ first: a.X, second: b.X });
    a.listen(() => c.g({ first: a.X, second: b.X }));
    b.listen(() => c.g({ first: a.X, second: b.X }));
    return c;
  }
  function It(...a) {
    const b = [...a],
      c = () => b.every((f) => f.X),
      d = new P(c()),
      e = () => {
        d.g(c());
      };
    b.forEach((f) => f.listen(e));
    return Jt(d);
  }
  function Kt(...a) {
    const b = [...a],
      c = () => b.findIndex((f) => f.X) !== -1,
      d = new P(c()),
      e = () => {
        d.g(c());
      };
    b.forEach((f) => f.listen(e));
    return Jt(d);
  }
  function Jt(a, b = Lt) {
    var c = a.X;
    const d = new P(a.X);
    a.listen((e) => {
      b(e, c) || ((c = e), d.g(e));
    });
    return d;
  }
  function Mt(a, b, c) {
    return a.j((d) => {
      d === b && c();
    });
  }
  function Nt(a, b, c) {
    if (a.X === b) return c(), () => {};
    const d = { Zd: null };
    d.Zd = Mt(a, b, () => {
      d.Zd && (d.Zd(), (d.Zd = null));
      c();
    });
    return d.Zd;
  }
  function Ot(a, b, c) {
    Jt(a).listen((d) => {
      d === b && c();
    });
  }
  function Pt(a, b) {
    a.B && a.B();
    a.B = b.listen((c) => a.g(c), !0);
  }
  function Qt(a, b, c, d) {
    const e = new P(!1);
    var f = null;
    a = a.map(d);
    Mt(a, !0, () => {
      f === null &&
        (f = b.setTimeout(() => {
          e.g(!0);
        }, c));
    });
    Mt(a, !1, () => {
      e.g(!1);
      f !== null && (b.clearTimeout(f), (f = null));
    });
    return Jt(e);
  }
  function Rt(a) {
    return { listen: (b) => a.listen(b), getValue: () => a.X };
  }
  var P = class {
    constructor(a) {
      this.X = a;
      this.l = new Map();
      this.D = 1;
      this.B = null;
    }
    listen(a, b = !1) {
      const c = this.D++;
      this.l.set(c, a);
      b && a(this.X);
      return () => {
        this.l.delete(c);
      };
    }
    j(a) {
      return this.listen(a, !0);
    }
    A() {
      return this.X;
    }
    g(a) {
      this.X = a;
      this.l.forEach((b) => {
        b(this.X);
      });
    }
    map(a) {
      const b = new P(a(this.X));
      this.listen((c) => b.g(a(c)));
      return b;
    }
  };
  function Lt(a, b) {
    return a == b;
  }
  function St(a) {
    return new Tt(a);
  }
  function Ut(a, b) {
    Ia(a.g, (c) => {
      c(b);
    });
  }
  var Vt = class {
    constructor() {
      this.g = [];
    }
  };
  class Tt {
    constructor(a) {
      this.g = a;
    }
    listen(a) {
      this.g.g.push(a);
    }
    map(a) {
      const b = new Vt();
      this.listen((c) => Ut(b, a(c)));
      return St(b);
    }
    delay(a, b) {
      const c = new Vt();
      this.listen((d) => {
        a.setTimeout(() => {
          Ut(c, d);
        }, b);
      });
      return St(c);
    }
  }
  function Wt(...a) {
    const b = new Vt();
    a.forEach((c) => {
      c.listen((d) => {
        Ut(b, d);
      });
    });
    return St(b);
  }
  function Xt(a) {
    return Jt(
      Ht(a.g, a.l).map((b) => {
        var c = b.first;
        b = b.second;
        return c == null || b == null ? null : Yt(c, b);
      })
    );
  }
  var $t = class {
    constructor(a) {
      this.j = a;
      this.g = new P(null);
      this.l = new P(null);
      this.B = new Vt();
      this.J = (b) => {
        this.g.X == null && b.touches.length == 1 && this.g.g(b.touches[0]);
      };
      this.A = (b) => {
        const c = this.g.X;
        c != null &&
          ((b = Zt(c, b.changedTouches)),
          b != null && (this.g.g(null), this.l.g(null), Ut(this.B, Yt(c, b))));
      };
      this.D = (b) => {
        var c = this.g.X;
        c != null &&
          ((c = Zt(c, b.changedTouches)),
          c != null && (this.l.g(c), b.preventDefault()));
      };
    }
  };
  function Yt(a, b) {
    return { Vj: b.pageX - a.pageX, Wj: b.pageY - a.pageY };
  }
  function Zt(a, b) {
    if (b == null) return null;
    for (let c = 0; c < b.length; ++c)
      if (b[c].identifier == a.identifier) return b[c];
    return null;
  }
  function au(a) {
    return Jt(
      Ht(a.g, a.j).map((b) => {
        var c = b.first;
        b = b.second;
        return c == null || b == null ? null : bu(c, b);
      })
    );
  }
  var cu = class {
    constructor(a, b) {
      this.B = a;
      this.A = b;
      this.g = new P(null);
      this.j = new P(null);
      this.l = new Vt();
      this.F = (c) => {
        this.g.g(c);
      };
      this.D = (c) => {
        const d = this.g.X;
        d != null && (this.g.g(null), this.j.g(null), Ut(this.l, bu(d, c)));
      };
      this.J = (c) => {
        this.g.X != null && (this.j.g(c), c.preventDefault());
      };
    }
  };
  function bu(a, b) {
    return { Vj: b.screenX - a.screenX, Wj: b.screenY - a.screenY };
  }
  var fu = (a, b, c) => {
    const d = new du(a, b, c);
    return () => eu(d);
  };
  function eu(a) {
    if (a.g) return !1;
    if (a.j == null) return gu(a), !0;
    const b = a.j + a.A - new Date().getTime();
    if (b < 1) return gu(a), !0;
    hu(a, b);
    return !0;
  }
  function gu(a) {
    a.j = new Date().getTime();
    a.B();
  }
  function hu(a, b) {
    a.g = !0;
    a.l.setTimeout(() => {
      a.g = !1;
      gu(a);
    }, b);
  }
  class du {
    constructor(a, b, c) {
      this.l = a;
      this.A = b;
      this.B = c;
      this.j = null;
      this.g = !1;
    }
  }
  function iu(a) {
    return ju(au(a.g), Xt(a.j));
  }
  function ku(a) {
    return Wt(St(a.g.l), St(a.j.B));
  }
  var lu = class {
    constructor(a, b) {
      this.g = a;
      this.j = b;
    }
  };
  function ju(a, b) {
    return Ht(a, b).map(({ first: c, second: d }) => c || d || null);
  }
  var mu = class {
    constructor() {
      this.cache = new Map();
    }
    getBoundingClientRect(a) {
      var b = this.cache.get(a);
      if (b) return b;
      b = a.getBoundingClientRect();
      this.cache.set(a, b);
      return b;
    }
  };
  function nu(a) {
    a.D == null && (a.D = new P(a.F.getBoundingClientRect()));
    return a.D;
  }
  var ou = class extends O {
    constructor(a, b) {
      super();
      this.l = a;
      this.F = b;
      this.H = !1;
      this.D = null;
      this.A = () => {
        nu(this).g(this.F.getBoundingClientRect());
      };
    }
    j() {
      this.H ||
        ((this.H = !0),
        this.l.addEventListener("resize", this.A),
        this.l.addEventListener("scroll", this.A));
      return nu(this);
    }
    g() {
      this.l.removeEventListener("resize", this.A);
      this.l.removeEventListener("scroll", this.A);
      super.g();
    }
  };
  function pu(a, b) {
    return new qu(a, b);
  }
  function ru(a) {
    a.C.requestAnimationFrame(() => {
      a.B || a.l.g(new Kk(a.element.offsetWidth, a.element.offsetHeight));
    });
  }
  function su(a) {
    a.j || ((a.j = !0), a.A.observe(a.element));
    return Jt(a.l, Lk);
  }
  var qu = class extends O {
    constructor(a, b) {
      super();
      this.C = a;
      this.element = b;
      this.j = !1;
      this.l = new P(
        new Kk(this.element.offsetWidth, this.element.offsetHeight)
      );
      this.A = new ResizeObserver(() => {
        ru(this);
      });
    }
    g() {
      this.A.disconnect();
      super.g();
    }
  };
  function tu(a, b) {
    return { top: a.g - b, right: a.l + a.j, bottom: a.g + b, left: a.l };
  }
  var uu = class {
    constructor(a, b, c) {
      this.l = a;
      this.g = b;
      this.j = c;
    }
  };
  function vu(a, b) {
    a = a.getBoundingClientRect();
    return new wu(a.top + ht(b), a.bottom - a.top);
  }
  function xu(a) {
    return new wu(Math.round(a.g), Math.round(a.j));
  }
  var wu = class {
    constructor(a, b) {
      this.g = a;
      this.j = b;
    }
    getHeight() {
      return this.j;
    }
  };
  var zu = (a, b) => {
    const c = a.google_pso_loaded_fonts || (a.google_pso_loaded_fonts = []),
      d = new tt(c);
    b = b.filter((e) => !d.contains(e));
    b.length && (yu(a, b), Xa(c, b));
  };
  function yu(a, b) {
    for (const d of b) {
      const e = Gd("LINK", a.document);
      e.type = "text/css";
      b = e;
      var c = yd`//fonts.googleapis.com/css?family=${d}`;
      b.href = qc(c).toString();
      b.rel = "stylesheet";
      a.document.head.appendChild(e);
    }
  }
  function Au(a, b) {
    a.H ? b(a.A) : a.l.push(b);
  }
  function Bu(a, b) {
    a.H = !0;
    a.A = b;
    a.l.forEach((c) => {
      c(a.A);
    });
    a.l = [];
  }
  var Cu = class extends O {
    constructor(a) {
      super();
      this.j = a;
      this.l = [];
      this.H = !1;
      this.F = this.A = null;
      this.L = fu(a, 1e3, () => {
        if (this.F != null) {
          var b = Ps(this.j, !0) - this.F;
          b > 1e3 && Bu(this, b);
        }
      });
      this.D = null;
    }
    init(a, b) {
      a == null
        ? ((this.F = a = Ps(this.j, !0)),
          this.j.addEventListener("scroll", this.L),
          b != null && b(a))
        : (this.D = this.j.setTimeout(() => {
            this.init(void 0, b);
          }, a));
    }
    g() {
      this.D != null && this.j.clearTimeout(this.D);
      this.j.removeEventListener("scroll", this.L);
      this.l = [];
      this.A = null;
      super.g();
    }
  };
  var Du = (a, b) => a.reduce((c, d) => c.concat(b(d)), []);
  var Eu = class {
    constructor(a = 1) {
      this.g = a;
    }
    next() {
      const a = (48271 * this.g) % 2147483647;
      this.g = a * 2147483647 < 0 ? a + 2147483647 : a;
      return this.g / 2147483647;
    }
  };
  function Fu(a, b, c) {
    const d = [];
    for (const e of a.g) b(e) ? d.push(e) : c(e);
    return new Gu(d);
  }
  function Hu(a) {
    return a.g.slice(0);
  }
  function Iu(a, b = 1) {
    a = Hu(a);
    const c = new Eu(b);
    ab(a, () => c.next());
    return new Gu(a);
  }
  var Gu = class {
    constructor(a) {
      this.g = a.slice(0);
    }
    forEach(a) {
      this.g.forEach((b, c) => void a(b, c, this));
    }
    filter(a) {
      return new Gu(La(this.g, a));
    }
    apply(a) {
      return new Gu(a(Hu(this)));
    }
    sort(a) {
      return new Gu(Hu(this).sort(a));
    }
    get(a) {
      return this.g[a];
    }
    add(a) {
      const b = Hu(this);
      b.push(a);
      return new Gu(b);
    }
  };
  var Ju = class {
    constructor(a) {
      this.g = new tt(a);
    }
    contains(a) {
      return this.g.contains(a);
    }
  };
  function Ku(a) {
    return new Lu({ value: a }, null);
  }
  function Mu(a) {
    return new Lu(null, a);
  }
  function Nu(a) {
    try {
      return Ku(a());
    } catch (b) {
      return Mu(b);
    }
  }
  function Ou(a) {
    return a.j != null;
  }
  function Pu(a) {
    return Ou(a) ? a.getValue() : null;
  }
  function Qu(a, b) {
    Ou(a) && b(a.getValue());
    return a;
  }
  function Ru(a, b) {
    return Ou(a) ? a : Mu(b(a.g));
  }
  function Su(a, b) {
    return Ru(a, (c) => Error(`${b}${c.message}`));
  }
  function Tu(a, b) {
    Ou(a) || b(a.g);
    return a;
  }
  var Lu = class {
    constructor(a, b) {
      this.j = a;
      this.g = b;
    }
    getValue() {
      return this.j.value;
    }
    map(a) {
      return Ou(this)
        ? ((a = a(this.getValue())), a instanceof Lu ? a : Ku(a))
        : this;
    }
  };
  var Uu = class {
    constructor() {
      this.g = new st();
    }
    set(a, b) {
      let c = this.g.get(a);
      c || ((c = new tt()), this.g.set(a, c));
      c.add(b);
    }
  };
  function Vu(a) {
    return !a;
  }
  function Wu(a) {
    return (b) => {
      for (const c of a) c(b);
    };
  }
  function Xu(a) {
    return a !== null;
  }
  var Yu = class extends I {
    getId() {
      return ei(this, 3);
    }
  };
  var Zu = class {
    constructor(a, { mi: b, gk: c, Ml: d, Aj: e }) {
      this.A = a;
      this.l = c;
      this.B = new Gu(b || []);
      this.j = e;
      this.g = d;
    }
  };
  function $u(a) {
    const b = a.length;
    if (b === 0) return 0;
    let c = 305419896;
    for (let d = 0; d < b; d++)
      c ^= ((c << 5) + (c >> 2) + a.charCodeAt(d)) & 4294967295;
    return c > 0 ? c : 4294967296 + c;
  }
  var av = (a) => {
      var b = a.split("~").filter((c) => c.length > 0);
      a = new st();
      for (const c of b)
        (b = c.indexOf(".")),
          b == -1 ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
      return a;
    },
    cv = (a) => {
      var b = bv(a);
      a = [];
      for (let c of b)
        (b = String(c.ce)),
          a.push(c.Tc + "." + (b.length <= 20 ? b : b.slice(0, 19) + "_"));
      return a.join("~");
    };
  const bv = (a) => {
      const b = [],
        c = a.B;
      c && c.g.length && b.push({ Tc: "a", ce: dv(c) });
      a.l != null && b.push({ Tc: "as", ce: a.l });
      a.g != null && b.push({ Tc: "i", ce: String(a.g) });
      a.j != null && b.push({ Tc: "rp", ce: String(a.j) });
      b.sort(function (d, e) {
        return d.Tc.localeCompare(e.Tc);
      });
      b.unshift({ Tc: "t", ce: ev(a.A) });
      return b;
    },
    ev = (a) => {
      switch (a) {
        case 0:
          return "aa";
        case 1:
          return "ma";
        default:
          throw Error("Invalid slot type" + a);
      }
    },
    dv = (a) => {
      a = Hu(a).map(fv);
      a = JSON.stringify(a);
      return $u(a);
    },
    fv = (a) => {
      const b = {};
      oi(a, 7) && (b.q = ei(a, 7));
      Df(w(a, 2)) != null && (b.o = di(a, 2));
      Df(w(a, 5)) != null && (b.p = di(a, 5));
      return b;
    };
  function gv() {
    var a = new hv();
    return ni(a, 2, 1);
  }
  var hv = class extends I {
    setLocation(a) {
      return ni(this, 1, a);
    }
    g() {
      return Bf(w(this, 1));
    }
  };
  function iv(a) {
    const b = [].slice.call(arguments).filter(yb((e) => e === null));
    if (!b.length) return null;
    let c = [],
      d = {};
    b.forEach((e) => {
      c = c.concat(e.xi || []);
      d = Object.assign(d, e.pe());
    });
    return new jv(c, d);
  }
  function kv(a) {
    switch (a) {
      case 1:
        return new jv(null, { google_ad_semantic_area: "mc" });
      case 2:
        return new jv(null, { google_ad_semantic_area: "h" });
      case 3:
        return new jv(null, { google_ad_semantic_area: "f" });
      case 4:
        return new jv(null, { google_ad_semantic_area: "s" });
      default:
        return null;
    }
  }
  function lv(a) {
    return a == null ? null : new jv(null, { google_ml_rank: a });
  }
  function mv(a) {
    return a == null ? null : new jv(null, { google_placement_id: cv(a) });
  }
  function nv({ Pk: a, jl: b = null }) {
    if (a == null) return null;
    a = { google_daaos_ts: a };
    b != null && (a.google_erank = b + 1);
    return new jv(null, a);
  }
  var jv = class {
    constructor(a, b) {
      this.xi = a;
      this.g = b;
    }
    pe() {
      return this.g;
    }
  };
  var ov = class extends I {};
  var pv = class extends I {};
  var qv = class extends I {
    j() {
      return ei(this, 2);
    }
    g() {
      return ei(this, 5);
    }
    B() {
      return Nh(this, pv, 3, wh());
    }
    D() {
      return Df(w(this, 4));
    }
    J() {
      return vh(this, 6);
    }
    F() {
      return rh(this, ov, 7);
    }
  };
  var rv = class extends I {};
  var sv = class extends I {
    B() {
      return A(this, 12);
    }
    j() {
      return Th(this, 13);
    }
    g() {
      return Vh(this, 23);
    }
  };
  var tv = class extends I {};
  function uv(a) {
    return vh(a, 1, nh);
  }
  var vv = class extends I {
    g() {
      return fi(this, 3);
    }
    j() {
      return ci(this, 6);
    }
  };
  var wv = class extends I {};
  var xv = class extends I {};
  var yv = class extends I {
    wa() {
      return x(this, Yu, 1);
    }
    j() {
      return fi(this, 2);
    }
  };
  var zv = class extends I {};
  var Av = class extends I {};
  var Bv = class extends I {
      getName() {
        return ei(this, 4);
      }
    },
    Cv = [1, 2, 3];
  var Dv = class extends I {
    g() {
      return x(this, vv, 10);
    }
  };
  function Ev(a) {
    return ci(a, 1);
  }
  var Fv = class extends I {
    g() {
      return ci(this, 2);
    }
    j() {
      return ci(this, 3);
    }
  };
  var Gv = class extends I {
    g() {
      return Th(this, 1, nh);
    }
  };
  var Hv = class extends I {
    g() {
      return Xh(this, 1);
    }
  };
  var Iv = class extends I {
    g() {
      return B(this, 1);
    }
    j() {
      return B(this, 2);
    }
  };
  var Jv = class extends I {
    B() {
      return A(this, 1);
    }
    D() {
      return A(this, 3);
    }
    J() {
      return A(this, 7);
    }
    g() {
      return A(this, 4);
    }
    j() {
      return A(this, 5);
    }
  };
  var Kv = class extends I {
    g() {
      return x(this, Hv, 6);
    }
    B() {
      return A(this, 14);
    }
    j() {
      return x(this, Jv, 12);
    }
  };
  var Lv = class extends I {};
  var Mv = class extends I {};
  var Nv = class extends I {};
  var Ov = class extends I {
    g() {
      return Nh(this, Nv, 1, wh());
    }
  };
  var Pv = class extends I {
    setProperty(a) {
      return li(this, 1, a);
    }
    getValue() {
      return ei(this, 2);
    }
  };
  var Qv = class extends I {};
  var Rv = class extends I {};
  var Sv = class extends I {
    wa() {
      return x(this, Yu, 1);
    }
    j() {
      return fi(this, 2);
    }
  };
  var Tv = class extends I {};
  var Uv = class extends I {};
  var Vv = class extends I {
    g() {
      return $h(this, 6);
    }
  };
  var Wv = class extends I {
    ah() {
      return rh(this, Uv, 2);
    }
  };
  var Xv = class extends I {
    g() {
      return Xh(this, 1);
    }
  };
  var Yv = class extends I {};
  var $v = class extends I {
      g() {
        return bi(this, Yv, 2, Zv);
      }
    },
    Zv = [1, 2];
  var aw = class extends I {
    g() {
      return x(this, $v, 3);
    }
  };
  var bw = class extends I {};
  var cw = class extends I {
    g() {
      return Nh(this, bw, 1, wh());
    }
  };
  var dw = class extends I {
    g() {
      return $h(this, 1);
    }
    j() {
      return x(this, aw, 3);
    }
  };
  var ew = Dk(
    class extends I {
      g() {
        return x(this, sv, 15);
      }
    }
  );
  var fw = class extends I {},
    gw = Dk(fw);
  function hw(a) {
    try {
      const b = a.localStorage.getItem("google_ama_settings");
      return b ? gw(b) : null;
    } catch (b) {
      return null;
    }
  }
  function iw(a, b) {
    if (a.Pg !== void 0) {
      var c = hw(b);
      c || (c = new fw());
      a.Pg !== void 0 && gi(c, 2, a.Pg);
      a = Date.now() + 864e5;
      Number.isFinite(a) && ii(c, 1, Math.round(a));
      c = pj(c);
      try {
        b.localStorage.setItem("google_ama_settings", c);
      } catch (d) {}
    } else {
      if ((c = a = hw(b))) (c = Xh(a, 1)), (c = BigInt(c) < Date.now());
      if (c)
        try {
          b.localStorage.removeItem("google_ama_settings");
        } catch (d) {}
    }
  }
  var jw = { vd: "ama_success", jc: 0.1, Ec: !0, Cd: !0 },
    kw = { vd: "ama_failure", jc: 0.1, Ec: !0, Cd: !0 },
    lw = { vd: "ama_coverage", jc: 0.1, Ec: !0, Cd: !0 },
    mw = { vd: "ama_opt", jc: 0.1, Ec: !0, Cd: !1 },
    nw = { vd: "ama_auto_rs", jc: 1, Ec: !0, Cd: !1 },
    ow = { vd: "ama_constraints", jc: 0, Ec: !0, Cd: !0 };
  function pw(a) {
    if (a != null) return qw(a);
  }
  function rw(a) {
    return a == null ? null : qw(a);
  }
  function qw(a) {
    return ef(a) ? Number(a) : String(a);
  }
  function sw(a, b) {
    tw(a.ka, nw, {
      ...b,
      evt: "place",
      vh: Ms(a.C),
      eid: pw(a.g.g()?.g()) || 0,
      hl: x(a.g, Iv, 5)?.g() || "",
    });
  }
  function uw(a, b, c) {
    b = { sts: b };
    c &&
      ((b.excp_n = c.name),
      (b.excp_m = c.message && c.message.substring(0, 512)),
      (b.excp_s = (c.stack && wn(c.stack, "")) || ""));
    sw(a, b);
  }
  var vw = class {
    constructor(a, b, c) {
      this.C = a;
      this.ka = b;
      this.g = c;
    }
  };
  const ww = ["-webkit-text-fill-color"];
  function xw(a, b) {
    if (ed) {
      {
        const d = Hd(a.document.body, a);
        if (d) {
          a = {};
          var c = d.length;
          for (let e = 0; e < c; ++e) a[d[e]] = "initial";
          a = yw(a);
        } else a = zw();
      }
    } else a = zw();
    t(b, a);
  }
  function zw() {
    const a = { all: "initial" };
    Ia(ww, (b) => {
      a[b] = "unset";
    });
    return a;
  }
  function yw(a) {
    Ia(ww, (b) => {
      delete a[b];
    });
    return a;
  }
  var Aw = class {
    constructor(a) {
      this.g = a;
    }
    Yb(a) {
      const b = a.document.createElement("div");
      xw(a, b);
      t(b, { width: "100%", "max-width": "1000px", margin: "auto" });
      b.appendChild(this.g);
      const c = a.document.createElement("div");
      xw(a, c);
      t(c, {
        width: "100%",
        "text-align": "center",
        display: "block",
        padding: "5px 5px 2px",
        "box-sizing": "border-box",
        "background-color": "#FFF",
      });
      c.appendChild(b);
      return c;
    }
  };
  function Bw(a) {
    if (a.nodeType != 1) var b = !1;
    else if ((b = a.tagName == "INS"))
      a: {
        b = ["adsbygoogle-placeholder"];
        var c = a.className ? a.className.split(/\s+/) : [];
        a = {};
        for (let d = 0; d < c.length; ++d) a[c[d]] = !0;
        for (c = 0; c < b.length; ++c)
          if (!a[b[c]]) {
            b = !1;
            break a;
          }
        b = !0;
      }
    return b;
  }
  function Cw(a) {
    return nt(a.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"));
  }
  function Dw(a, b) {
    a = bl(new Nk(a), "DIV");
    const c = a.style;
    c.width = "100%";
    c.height = "auto";
    c.clear = b ? "both" : "none";
    return a;
  }
  function Ew(a, b, c) {
    switch (c) {
      case 0:
        b.parentNode && b.parentNode.insertBefore(a, b);
        break;
      case 3:
        if ((c = b.parentNode)) {
          let d = b.nextSibling;
          if (d && d.parentNode != c)
            for (; d && d.nodeType == 8; ) d = d.nextSibling;
          c.insertBefore(a, d);
        }
        break;
      case 1:
        b.insertBefore(a, b.firstChild);
        break;
      case 2:
        b.appendChild(a);
    }
    Bw(b) &&
      (b.setAttribute("data-init-display", b.style.display),
      (b.style.display = "block"));
  }
  function Fw(a) {
    if (a && a.parentNode) {
      const b = a.parentNode;
      b.removeChild(a);
      Bw(b) &&
        (b.style.display = b.getAttribute("data-init-display") || "none");
    }
  }
  var Q = class {
      constructor(a, b = !1) {
        this.g = a;
        this.defaultValue = b;
      }
    },
    S = class {
      constructor(a, b = 0) {
        this.g = a;
        this.defaultValue = b;
      }
    },
    Gw = class {
      constructor(a, b = "") {
        this.g = a;
        this.defaultValue = b;
      }
    },
    Hw = class {
      constructor(a, b = []) {
        this.g = a;
        this.defaultValue = b;
      }
    },
    Iw = class {
      constructor(a, b = []) {
        this.g = a;
        this.defaultValue = b;
      }
    };
  var Jw = new Q(781756401),
    Kw = new Q(783008199),
    Lw = new S(619278254, 10),
    Mw = new S(45696523, 100),
    Nw = new S(1386),
    Ow = new Hw(1385),
    Pw = new S(1359),
    Qw = new S(1358),
    Rw = new Q(1360),
    Sw = new S(1357),
    Tw = new Q(1345),
    Uw = new Hw(1387),
    Vw = new Q(687716473),
    Ww = new Q(1377),
    Xw = new Q(676894296, !0),
    Yw = new Q(45693370),
    Zw = new Q(682658313, !0),
    $w = new Q(745713445),
    ax = new S(1130, 100),
    bx = new Q(45694447, !0),
    cx = new S(1340, 0.2),
    dx = new S(1338, 0.3),
    ex = new S(1339, 0.3),
    fx = new Q(1337),
    gx = new S(1032, 200),
    hx = new Q(736254284),
    ix = new Gw(14),
    jx = new S(766318165, -1),
    kx = new S(1224, 0.01),
    lx = new S(1346, 6),
    mx = new S(1347, 3),
    nx = new Q(1342),
    ox = new Q(1344),
    px = new S(1343, 300),
    qx = new Q(1260),
    rx = new Q(316),
    sx = new Q(1290),
    tx = new Q(1389),
    ux = new Q(1390),
    vx = new Q(334),
    wx = new Q(1383),
    xx = new S(1263, -1),
    yx = new S(1388),
    zx = new S(54),
    Ax = new S(1323, -1),
    Bx = new S(1265, -1),
    Cx = new S(1264, -1),
    Dx = new Q(1291),
    Ex = new Q(1267, !0),
    Fx = new Q(1266),
    Gx = new Q(313),
    Hx = new S(66, -1),
    Ix = new S(65, -1),
    Jx = new Q(1256),
    Kx = new Q(369),
    Lx = new Q(1241, !0),
    Mx = new Q(368),
    Nx = new Q(1300, !0),
    Ox = new Hw(1273, ["en", "de", "fr", "es", "ja"]),
    Px = new Hw(1261, ["44786015", "44786016"]),
    Qx = new Q(1361),
    Rx = new Q(1372, !0),
    Sx = new Q(290),
    Tx = new S(770241922),
    Ux = new Q(1222),
    Vx = new Q(1354),
    Wx = new Q(1341),
    Xx = new Q(1350),
    Yx = new Q(1356),
    Zx = new Q(626390500),
    $x = new Q(45711092),
    ay = new Q(775603661, !0),
    by = new Q(758110037),
    cy = new Q(45701676),
    dy = new Q(566279275),
    ey = new Q(622128248),
    fy = new Q(566279276),
    gy = new Q(768003785, !0),
    hy = new Q(781016954),
    iy = new Q(767123927),
    jy = new Q(775242544),
    ky = new Iw(635821288, ["29_18", "30_19"]),
    ly = new Gw(780033902, "calc(<DH> - 30px)"),
    my = new Q(45701765),
    ny = new Gw(716722045, "calc(<DH> - 30px)"),
    oy = new S(758110038),
    py = new Q(636570127),
    qy = new S(666400580, 22),
    ry = new S(760535703),
    sy = new Hw(
      712458671,
      " ar bn en es fr hi id ja ko mr pt ru sr te th tr uk vi zh".split(" ")
    ),
    ty = new S(751018117),
    uy = new Q(781985754),
    vy = new Iw(683929765),
    wy = new Q(742688665, !0),
    xy = new Q(767072600),
    yy = new Gw(45701677, "763856898"),
    zy = new Q(683614711),
    Ay = new Q(763847817),
    By = new Q(747408261),
    Cy = new Q(759602315),
    Dy = new Q(506914611),
    Ey = new S(775999093, 1),
    Fy = new Q(45710963),
    Gy = new Iw(630330362),
    Hy = new S(717888910, 0.5423),
    Iy = new S(9604, 0.5423),
    Jy = new S(643258048, 0.1542),
    Ky = new S(9601, 0.1542),
    Ly = new S(643258049, 0.16),
    My = new S(9602, 0.16),
    Ny = new S(618163195, 14141),
    Oy = new S(624950166, 15e3),
    Py = new S(623405755, 300),
    Qy = new S(508040914, 622),
    Ry = new S(547455356, 49),
    Sy = new S(717888911, 0.7),
    Ty = new S(9605, 0.5799),
    Uy = new S(717888912, 0.5849),
    Vy = new S(9606, 0.65),
    Wy = new S(727864505, 3),
    Xy = new S(652486359, 9),
    Yy = new S(626062006, 670),
    Zy = new S(748662193, 4),
    $y = new S(9603, 4),
    az = new S(688905693, 2),
    bz = new S(650548030, 3),
    cz = new S(650548032, 300),
    dz = new S(650548031, 1),
    ez = new S(655966487, 300),
    fz = new S(655966486, 250),
    gz = new S(687270738, 500),
    hz = new S(469675170, 68040),
    iz = new Q(760801919, !0),
    jz = new Q(675298507),
    kz = new Q(644381219),
    lz = new Q(644381220),
    mz = new Q(676460084),
    nz = new Q(710737579),
    oz = new Q(772174848, !0),
    pz = new Q(45712203),
    qz = new Q(763954741, !0),
    rz = new S(684147713, -1),
    sz = new Q(570863962, !0),
    tz = new Gw(570879859, "control_1\\.\\d"),
    uz = new S(570863961, 50),
    vz = new Q(570879858, !0),
    wz = new Q(781146026),
    xz = new Q(732272249),
    yz = new Gw(754933823, "1-0-45"),
    zz = new S(63, 30),
    Az = new Q(1134, !0),
    Bz = new Q(781693592),
    Cz = new Q(751557128, !0),
    Dz = new Q(562874197),
    Ez = new Q(767255412),
    Fz = new S(550718588, 250),
    Gz = new S(624290870, 50),
    Hz = new Q(506738118),
    Iz = new Q(77),
    Jz = new Q(78),
    Kz = new Q(83),
    Lz = new Q(80),
    Mz = new Q(76),
    Nz = new Q(84),
    Oz = new Q(1973),
    Pz = new Q(188),
    Qz = new Q(485990406);
  var Rz = class {
    constructor() {
      const a = {};
      this.j = (b, c) => (a[b] != null ? a[b] : c);
      this.B = (b, c) => (a[b] != null ? a[b] : c);
      this.A = (b, c) => (a[b] != null ? a[b] : c);
      this.D = (b, c) => (a[b] != null ? a[b] : c);
      this.l = (b, c) => (a[b] != null ? c.concat(a[b]) : c);
      this.g = () => {};
    }
  };
  function T(a) {
    return qs(Rz).j(a.g, a.defaultValue);
  }
  function U(a) {
    return qs(Rz).B(a.g, a.defaultValue);
  }
  function Sz(a) {
    return qs(Rz).A(a.g, a.defaultValue);
  }
  function Tz(a) {
    return qs(Rz).D(a.g, a.defaultValue);
  }
  function Uz(a) {
    return qs(Rz).l(a.g, a.defaultValue);
  }
  var Wz = (a, b, c, d = 0) => {
      var e = Vz(b, c, d);
      if (e.init) {
        for (c = b = e.init; (c = e.lf(c)); ) b = c;
        e = { anchor: b, position: e.Mf };
      } else e = { anchor: b, position: c };
      a["google-ama-order-assurance"] = d;
      Ew(a, e.anchor, e.position);
    },
    Xz = (a, b, c, d = 0) => {
      T(Gx) ? Wz(a, b, c, d) : Ew(a, b, c);
    };
  function Vz(a, b, c) {
    const d = (f) => {
        f = Yz(f);
        return f == null ? !1 : c < f;
      },
      e = (f) => {
        f = Yz(f);
        return f == null ? !1 : c > f;
      };
    switch (b) {
      case 0:
        return {
          init: Zz(a.previousSibling, d),
          lf: (f) => Zz(f.previousSibling, d),
          Mf: 0,
        };
      case 2:
        return {
          init: Zz(a.lastChild, d),
          lf: (f) => Zz(f.previousSibling, d),
          Mf: 0,
        };
      case 3:
        return {
          init: Zz(a.nextSibling, e),
          lf: (f) => Zz(f.nextSibling, e),
          Mf: 3,
        };
      case 1:
        return {
          init: Zz(a.firstChild, e),
          lf: (f) => Zz(f.nextSibling, e),
          Mf: 3,
        };
    }
    throw Error("Un-handled RelativePosition: " + b);
  }
  function Yz(a) {
    return a.hasOwnProperty("google-ama-order-assurance")
      ? a["google-ama-order-assurance"]
      : null;
  }
  function Zz(a, b) {
    return a && b(a) ? a : null;
  }
  var $z = { rectangle: 1, horizontal: 2, vertical: 4 };
  function aA(a, b) {
    do {
      const c = Hd(a, b);
      if (c && c.position == "fixed") return !1;
    } while ((a = a.parentElement));
    return !0;
  }
  function bA(a, b) {
    var c = ["width", "height"];
    for (let e = 0; e < c.length; e++) {
      const f = "google_ad_" + c[e];
      if (!b.hasOwnProperty(f)) {
        var d = Rd(a[c[e]]);
        d = d === null ? null : Math.round(d);
        d != null && (b[f] = d);
      }
    }
  }
  function cA(a, b) {
    return !(
      (Pd.test(b.google_ad_width) || Od.test(a.style.width)) &&
      (Pd.test(b.google_ad_height) || Od.test(a.style.height))
    );
  }
  function dA(a, b) {
    return (a = eA(a, b)) ? a.y : 0;
  }
  function eA(a, b) {
    try {
      const c = b.document.documentElement.getBoundingClientRect(),
        d = a.getBoundingClientRect();
      return { x: d.left - c.left, y: d.top - c.top };
    } catch (c) {
      return null;
    }
  }
  function fA(a, b) {
    const c = a.google_reactive_ad_format === 40,
      d = a.google_reactive_ad_format === 16;
    return (
      !!a.google_ad_resizable &&
      (!a.google_reactive_ad_format || c) &&
      !d &&
      !!b.navigator &&
      /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) &&
      b === b.top
    );
  }
  function gA(a, b, c, d, e) {
    if (a !== a.top) return Ed(a) ? 3 : 16;
    if (!(Ls(a) < 488)) return 4;
    if (!(a.innerHeight >= a.innerWidth)) return 5;
    const f = Ls(a);
    if (!f || (f - c) / f > d) a = 6;
    else {
      if ((c = e.google_full_width_responsive !== "true"))
        a: {
          c = b.parentElement;
          for (b = Ls(a); c; c = c.parentElement)
            if (
              (d = Hd(c, a)) &&
              (e = Rd(d.width)) &&
              !(e >= b) &&
              d.overflow !== "visible"
            ) {
              c = !0;
              break a;
            }
          c = !1;
        }
      a = c ? 7 : !0;
    }
    return a;
  }
  function hA(a, b, c, d) {
    const e = gA(b, c, a, U(ex), d);
    e !== !0
      ? (a = e)
      : d.google_full_width_responsive === "true" || aA(c, b)
      ? ((b = Ls(b)),
        (a = b - a),
        (a = b && a >= 0 ? !0 : b ? (a < -10 ? 11 : a < 0 ? 14 : 12) : 10))
      : (a = 9);
    return a;
  }
  function iA(a, b, c) {
    a = a.style;
    b === "rtl" ? (a.marginRight = c) : (a.marginLeft = c);
  }
  function jA(a, b) {
    if (b.nodeType === 3) return /\S/.test(b.data);
    if (b.nodeType === 1) {
      if (/^(script|style)$/i.test(b.nodeName)) return !1;
      let c;
      try {
        c = Hd(b, a);
      } catch (d) {}
      return (
        !c ||
        (c.display !== "none" &&
          !(
            c.position === "absolute" &&
            (c.visibility === "hidden" || c.visibility === "collapse")
          ))
      );
    }
    return !1;
  }
  function kA(a, b, c) {
    a = eA(b, a);
    return c === "rtl" ? -a.x : a.x;
  }
  function lA(a, b) {
    b = b.parentElement;
    return b ? ((a = Hd(b, a)) ? a.direction : "") : "";
  }
  function mA(a, b, c) {
    if (kA(a, b, c) !== 0) {
      iA(b, c, "0px");
      var d = kA(a, b, c);
      iA(b, c, `${-1 * d}px`);
      a = kA(a, b, c);
      a !== 0 && a !== d && iA(b, c, `${(d / (a - d)) * d}px`);
    }
  }
  function nA(a, b) {
    const c = lA(a, b);
    if (c) {
      var d = b.style;
      d.border =
        d.borderStyle =
        d.outline =
        d.outlineStyle =
        d.transition =
          "none";
      d.borderSpacing = d.padding = "0";
      iA(b, c, "0px");
      d.width = `${Ls(a)}px`;
      mA(a, b, c);
      d.zIndex = "30";
    }
  }
  function oA(a, b, c) {
    let d;
    return (
      (a.style && !!a.style[c] && Rd(a.style[c])) ||
      ((d = Hd(a, b)) && !!d[c] && Rd(d[c])) ||
      null
    );
  }
  function pA(a, b) {
    const c = pn(a) === 0;
    return b && c ? Math.max(250, (2 * Ms(a)) / 3) : 250;
  }
  function qA(a, b) {
    let c;
    return (a.style && a.style.zIndex) || ((c = Hd(a, b)) && c.zIndex) || null;
  }
  function rA(a) {
    return (b) => b.g <= a;
  }
  function sA(a, b, c, d) {
    const e = a && tA(c, b),
      f = pA(b, d);
    return (g) => !(e && g.height() >= f);
  }
  function uA(a) {
    return (b) => b.height() <= a;
  }
  function tA(a, b) {
    a = dA(a, b);
    b = Ms(b);
    return a < b - 100;
  }
  function vA(a, b) {
    var c = oA(b, a, "height");
    if (c) return c;
    var d = b.style.height;
    b.style.height = "inherit";
    c = oA(b, a, "height");
    b.style.height = d;
    if (c) return c;
    c = Infinity;
    do
      (d = b.style && Rd(b.style.height)) && (c = Math.min(c, d)),
        (d = oA(b, a, "maxHeight")) && (c = Math.min(c, d));
    while (b.parentElement && (b = b.parentElement) && b.tagName !== "HTML");
    return c;
  }
  const wA = RegExp("(^| )adsbygoogle($| )");
  function xA(a, b) {
    for (let c = 0; c < b.length; c++) {
      const d = b[c],
        e = bd(d.property);
      a[e] = d.value;
    }
  }
  function yA(a, b, c, d, e, f) {
    a = zA(a, e);
    a.Ta.setAttribute("data-ad-format", d ? d : "auto");
    AA(a, b, c, f);
    return a;
  }
  function BA(a, b, c = null) {
    a = zA(a, {});
    AA(a, b, null, c);
    return a;
  }
  function AA(a, b, c, d) {
    var e = [];
    if ((d = d && d.xi)) a.Bc.className = d.join(" ");
    a = a.Ta;
    a.className = "adsbygoogle";
    a.setAttribute("data-ad-client", b);
    c && a.setAttribute("data-ad-slot", c);
    e.length && a.setAttribute("data-ad-channel", e.join("+"));
  }
  function zA(a, b) {
    const c = Dw(a, b.clearBoth || !1);
    var d = c.style;
    d.textAlign = "center";
    b.Lf && xA(d, b.Lf);
    a = bl(new Nk(a), "INS");
    d = a.style;
    d.display = "block";
    d.margin = "auto";
    d.backgroundColor = "transparent";
    b.ai && (d.marginTop = b.ai);
    b.yg && (d.marginBottom = b.yg);
    b.Wd && xA(d, b.Wd);
    c.appendChild(a);
    return { Bc: c, Ta: a };
  }
  function CA(a, b, c) {
    b.dataset.adsbygoogleStatus = "reserved";
    b.className += " adsbygoogle-noablate";
    const d = { element: b };
    c = c && c.pe();
    if (b.hasAttribute("data-pub-vars")) {
      try {
        c = JSON.parse(b.getAttribute("data-pub-vars"));
      } catch (e) {
        return;
      }
      b.removeAttribute("data-pub-vars");
    }
    c && (d.params = c);
    (a.adsbygoogle = a.adsbygoogle || []).push(d);
  }
  function DA(a) {
    const b = Cw(a.document);
    Ia(b, function (c) {
      const d = EA(a, c);
      var e;
      if ((e = d)) {
        e = dA(c, a);
        const f = Ms(a);
        e = !(e < f);
      }
      e &&
        (c.setAttribute("data-pub-vars", JSON.stringify(d)),
        c.removeAttribute("height"),
        c.style.removeProperty("height"),
        c.removeAttribute("width"),
        c.style.removeProperty("width"),
        CA(a, c));
    });
  }
  function EA(a, b) {
    b = b.getAttribute("google_element_uid");
    a = a.google_sv_map;
    if (!b || !a || !a[b]) return null;
    a = a[b];
    b = {};
    for (let c in bb) a[bb[c]] && (b[bb[c]] = a[bb[c]]);
    return b;
  }
  var GA = (a, b, c) => {
    if (!b || !c) return !1;
    var d = b.parentElement;
    const e = c.parentElement;
    if (!d || !e || d != e) return !1;
    d = 0;
    for (b = b.nextSibling; d < 10 && b; ) {
      if (b == c) return !0;
      if (FA(a, b)) break;
      b = b.nextSibling;
      d++;
    }
    return !1;
  };
  const FA = (a, b) => {
    if (b.nodeType == 3)
      return (
        b.nodeType == 3
          ? ((b = b.data),
            (a = b.indexOf("&") != -1 ? Wc(b, a.document) : b),
            (a = /\S/.test(a)))
          : (a = !1),
        a
      );
    if (b.nodeType == 1) {
      var c = a.getComputedStyle(b);
      if (c.opacity == "0" || c.display == "none" || c.visibility == "hidden")
        return !1;
      if ((c = b.tagName) && ut.contains(c.toUpperCase())) return !0;
      b = b.childNodes;
      for (c = 0; c < b.length; c++) if (FA(a, b[c])) return !0;
    }
    return !1;
  };
  var HA = (a) => {
    if (a >= 460)
      return (a = Math.min(a, 1200)), Math.ceil(a < 800 ? a / 4 : 200);
    a = Math.min(a, 600);
    return a <= 420 ? Math.ceil(a / 1.2) : Math.ceil(a / 1.91) + 130;
  };
  var IA = class {
    constructor() {
      this.g = { clearBoth: !0 };
    }
    j(a, b, c, d) {
      return yA(d.document, a, null, null, this.g, b);
    }
    l(a) {
      return HA(Math.min(a.screen.width || 0, a.screen.height || 0));
    }
  };
  function JA(a) {
    const b = [];
    mt(a.getElementsByTagName("p"), function (c) {
      KA(c) >= 100 && b.push(c);
    });
    return b;
  }
  function KA(a) {
    if (a.nodeType == 3) return a.length;
    if (a.nodeType != 1 || a.tagName == "SCRIPT") return 0;
    let b = 0;
    mt(a.childNodes, function (c) {
      b += KA(c);
    });
    return b;
  }
  function LA(a) {
    return a.length == 0 || isNaN(a[0])
      ? a
      : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1);
  }
  function MA(a, b) {
    if (a.g == null) return b;
    switch (a.g) {
      case 1:
        return b.slice(1);
      case 2:
        return b.slice(0, b.length - 1);
      case 3:
        return b.slice(1, b.length - 1);
      case 0:
        return b;
      default:
        throw Error("Unknown ignore mode: " + a.g);
    }
  }
  function NA(a, b) {
    var c = [];
    try {
      c = b.querySelectorAll(a.B);
    } catch (d) {}
    if (!c.length) return [];
    b = Wa(c);
    b = MA(a, b);
    typeof a.j === "number" &&
      ((c = a.j),
      c < 0 && (c += b.length),
      (b = c >= 0 && c < b.length ? [b[c]] : []));
    if (typeof a.l === "number") {
      c = [];
      for (let d = 0; d < b.length; d++) {
        const e = JA(b[d]);
        let f = a.l;
        f < 0 && (f += e.length);
        f >= 0 && f < e.length && c.push(e[f]);
      }
      b = c;
    }
    return b;
  }
  var OA = class {
    constructor(a, b, c, d) {
      this.B = a;
      this.j = b;
      this.l = c;
      this.g = d;
    }
    toString() {
      return JSON.stringify({
        nativeQuery: this.B,
        occurrenceIndex: this.j,
        paragraphIndex: this.l,
        ignoreMode: this.g,
      });
    }
  };
  var PA = class {
    constructor() {
      this.g = yd`https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
    }
    ma(a, b, c = 0.01, d = "jserror") {
      if (Math.random() > c) return !1;
      (b.error && b.meta && b.id) || (b = new tn(b, { context: a, id: d }));
      r.google_js_errors = r.google_js_errors || [];
      r.google_js_errors.push(b);
      r.error_rep_loaded || (Fd(r.document, this.g), (r.error_rep_loaded = !0));
      return !1;
    }
    ec(a, b) {
      try {
        return b();
      } catch (c) {
        if (!this.ma(a, c, 0.01, "jserror")) throw c;
      }
    }
    hc(a, b, c) {
      return (...d) => this.ec(a, () => b.apply(c, d));
    }
    Sa(a, b) {
      b.catch((c) => {
        c = c ? c : "unknown rejection";
        this.ma(a, c instanceof Error ? c : Error(c), void 0);
      });
    }
  };
  function QA(a, b) {
    b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
    b.length < 2048 && b.push(a);
  }
  function RA(a, b, c, d, e = !1) {
    const f = d || window,
      g = typeof queueMicrotask !== "undefined";
    return function (...h) {
      e &&
        g &&
        queueMicrotask(() => {
          f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
          f.google_rum_task_id_counter += 1;
        });
      const k = Dn();
      let m,
        l = 3;
      try {
        m = b.apply(this, h);
      } catch (n) {
        l = 13;
        if (!c) throw n;
        c(a, n);
      } finally {
        f.google_measure_js_timing &&
          k &&
          QA(
            {
              label: a.toString(),
              value: k,
              duration: (Dn() || 0) - k,
              type: l,
              ...(e &&
                g && {
                  taskId: (f.google_rum_task_id_counter =
                    f.google_rum_task_id_counter || 1),
                }),
            },
            f
          );
      }
      return m;
    };
  }
  function SA(a, b) {
    return RA(
      754,
      a,
      (c, d) => {
        new PA().ma(c, d);
      },
      b,
      !0
    );
  }
  function TA(a, b, c) {
    return RA(a, b, void 0, c, !0).apply();
  }
  function UA(a, b) {
    return SA(a, b).apply();
  }
  function VA(a) {
    if (!a) return null;
    var b = ei(a, 7);
    if (ei(a, 1) || a.getId() || $h(a, 4).length > 0) {
      var c = a.getId(),
        d = ei(a, 1),
        e = $h(a, 4);
      b = di(a, 2);
      var f = di(a, 5);
      a = WA(fi(a, 6));
      let g = "";
      d && (g += d);
      c && (g += "#" + LA(c));
      if (e) for (c = 0; c < e.length; c++) g += "." + LA(e[c]);
      b = (e = g) ? new OA(e, b, f, a) : null;
    } else b = b ? new OA(b, di(a, 2), di(a, 5), WA(fi(a, 6))) : null;
    return b;
  }
  const XA = { 1: 1, 2: 2, 3: 3, 0: 0 };
  function WA(a) {
    return a == null ? a : XA[a];
  }
  function YA(a) {
    const b = [];
    for (let c = 0; c < a.length; c++) {
      const d = ei(a[c], 1),
        e = a[c].getValue();
      d && e != null && b.push({ property: d, value: e });
    }
    return b;
  }
  function ZA(a, b) {
    const c = {};
    a && ((c.ai = ei(a, 1)), (c.yg = ei(a, 2)), (c.clearBoth = !!ci(a, 3)));
    b &&
      ((c.Lf = YA(Nh(b, Pv, 3, wh()).map((d) => tg(d)))),
      (c.Wd = YA(Nh(b, Pv, 4, wh()).map((d) => tg(d)))));
    return c;
  }
  const $A = { 1: 0, 2: 1, 3: 2, 4: 3 },
    aB = { 0: 1, 1: 2, 2: 3, 3: 4 };
  var bB = class {
    constructor(a) {
      this.g = a;
    }
    j(a, b, c, d) {
      return yA(d.document, a, null, null, this.g, b);
    }
    l() {
      return null;
    }
  };
  var cB = class {
    constructor(a) {
      this.j = a;
    }
    g(a) {
      a = Math.floor(a.j);
      const b = HA(a);
      return new jv(["ap_container"], {
        google_reactive_ad_format: 27,
        google_responsive_auto_format: 16,
        google_max_num_ads: 1,
        google_ad_type: this.j,
        google_ad_format: a + "x" + b,
        google_ad_width: a,
        google_ad_height: b,
      });
    }
  };
  var dB = class {
    constructor(a, b) {
      this.B = a;
      this.l = b;
    }
    g() {
      return this.B;
    }
    j() {
      return this.l;
    }
  };
  var eB = class {
    constructor(a) {
      this.g = a;
    }
    j(a, b, c, d) {
      var e =
          Nh(this.g, Qv, 9, wh()).length > 0
            ? Nh(this.g, Qv, 9, wh())[0]
            : null,
        f = ZA(Lh(this.g, Rv, 3), e);
      if (!e) return null;
      if ((e = ei(e, 1))) {
        d = d.document;
        var g = c.tagName;
        c = bl(new Nk(d), g);
        c.style.clear = f.clearBoth ? "both" : "none";
        g == "A" && (c.style.display = "block");
        c.style.padding = "0px";
        c.style.margin = "0px";
        f.Lf && xA(c.style, f.Lf);
        d = bl(new Nk(d), "INS");
        f.Wd && xA(d.style, f.Wd);
        c.appendChild(d);
        f = { Bc: c, Ta: d };
        f.Ta.setAttribute("data-ad-type", "text");
        f.Ta.setAttribute("data-native-settings-key", e);
        AA(f, a, null, b);
        a = f;
      } else a = null;
      return a;
    }
    l() {
      var a =
        Nh(this.g, Qv, 9, wh()).length > 0 ? Nh(this.g, Qv, 9, wh())[0] : null;
      if (!a) return null;
      a = Nh(a, Pv, 3, wh());
      for (let b = 0; b < a.length; b++) {
        const c = a[b];
        if (ei(c, 1) == "height" && parseInt(c.getValue(), 10) > 0)
          return parseInt(c.getValue(), 10);
      }
      return null;
    }
  };
  var fB = class {
    constructor(a) {
      this.g = a;
    }
    j(a, b, c, d) {
      if (!this.g) return null;
      const e = this.g.google_ad_format || null,
        f = this.g.google_ad_slot || null;
      if ((c = c.style)) {
        var g = [];
        for (let h = 0; h < c.length; h++) {
          const k = c.item(h);
          k !== "width" &&
            k !== "height" &&
            g.push({ property: k, value: c.getPropertyValue(k) });
        }
        c = { Wd: g };
      } else c = {};
      a = yA(d.document, a, f, e, c, b);
      a.Ta.setAttribute("data-pub-vars", JSON.stringify(this.g));
      return a;
    }
    l() {
      return this.g ? parseInt(this.g.google_ad_height, 10) || null : null;
    }
    pe() {
      return this.g;
    }
  };
  var gB = class {
    constructor(a) {
      this.j = a;
    }
    g() {
      return new jv([], {
        google_ad_type: this.j,
        google_reactive_ad_format: 26,
        google_ad_format: "fluid",
      });
    }
  };
  var hB = class {
    constructor(a, b) {
      this.B = a;
      this.l = b;
    }
    j() {
      return this.l;
    }
    g(a) {
      a = NA(this.B, a.document);
      return a.length > 0 ? a[0] : null;
    }
  };
  function iB(a, b, c) {
    const d = [];
    for (let p = 0; p < a.length; p++) {
      a: {
        var e = a[p];
        var f = p,
          g = b,
          h = c,
          k = e.wa();
        if (!k) {
          e = null;
          break a;
        }
        var m = VA(k);
        if (!m) {
          e = null;
          break a;
        }
        var l = e.j();
        l = $A[l];
        var n = l === void 0 ? null : l;
        if (n === null) {
          e = null;
          break a;
        }
        l = (l = x(e, Rv, 3)) ? ci(l, 3) : null;
        m = new hB(m, n);
        n = ai(e, 10).slice(0);
        Df(w(k, 5)) != null && n.push(1);
        k = di(e, 12);
        const q = rh(e, hv, 4) ? x(e, hv, 4) : null;
        Bf(w(e, 8)) == 1
          ? ((h = (h && h.xk) || null),
            (e = new jB(
              m,
              new bB(ZA(x(e, Rv, 3), null)),
              h,
              l,
              0,
              n,
              q,
              g,
              f,
              k,
              e
            )))
          : (e =
              Bf(w(e, 8)) == 2
                ? new jB(
                    m,
                    new eB(e),
                    (h && h.Nl) || new gB("text"),
                    l,
                    1,
                    n,
                    q,
                    g,
                    f,
                    k,
                    e
                  )
                : null);
      }
      e !== null && d.push(e);
    }
    return d;
  }
  function kB(a) {
    return a.B;
  }
  function lB(a) {
    return a.Aa;
  }
  function mB(a) {
    return a.D instanceof fB ? a.D.pe() : null;
  }
  function nB(a, b, c) {
    ot(a.T, b) || a.T.set(b, []);
    a.T.get(b).push(c);
  }
  function oB(a) {
    return a.D.l(a.g);
  }
  function pB(a, b = null, c = null) {
    return new jB(
      a.F,
      b || a.D,
      c || a.V,
      a.H,
      a.Fd,
      a.te,
      a.Wf,
      a.g,
      a.oa,
      a.J,
      a.l,
      a.A,
      a.ca
    );
  }
  var jB = class {
    constructor(
      a,
      b,
      c,
      d,
      e,
      f,
      g,
      h,
      k,
      m = null,
      l = null,
      n = null,
      p = null
    ) {
      this.F = a;
      this.D = b;
      this.V = c;
      this.H = d;
      this.Fd = e;
      this.te = f;
      this.Wf = g ? g : new hv();
      this.g = h;
      this.oa = k;
      this.J = m;
      this.l = l;
      (a = !l) ||
        ((a = !l.wa()) || ((l = l.wa()), (a = Df(w(l, 5)) == null)), (a = !!a));
      this.Aa = !a;
      this.A = n;
      this.ca = p;
      this.L = [];
      this.B = !1;
      this.T = new st();
    }
    Ba() {
      return this.g;
    }
    j() {
      return this.F.j();
    }
  };
  function qB(a, b, c, d, e, f) {
    const g = gv();
    return new jB(
      new dB(c, e),
      new IA(),
      new cB(a),
      !0,
      2,
      [],
      g,
      d,
      null,
      null,
      null,
      b,
      f
    );
  }
  function rB(a, b, c, d, e) {
    const f = gv();
    return new jB(
      new dB(b, d),
      new bB({ clearBoth: !0 }),
      null,
      !0,
      2,
      [],
      f,
      c,
      null,
      null,
      null,
      a,
      e
    );
  }
  var sB = class {
    constructor(a, b, c) {
      this.articleStructure = a;
      this.element = b;
      this.C = c;
    }
    Ba() {
      return this.C;
    }
    A(a) {
      return qB(a, this.articleStructure, this.element, this.C, 3, null);
    }
    l() {
      return rB(this.articleStructure, this.element, this.C, 3, null);
    }
  };
  const tB = {
    TABLE: { he: new Ju([1, 2]) },
    THEAD: { he: new Ju([0, 3, 1, 2]) },
    TBODY: { he: new Ju([0, 3, 1, 2]) },
    TR: { he: new Ju([0, 3, 1, 2]) },
    TD: { he: new Ju([0, 3]) },
  };
  function uB(a, b, c, d) {
    const e = c.childNodes;
    c = c.querySelectorAll(b);
    b = [];
    for (const f of c)
      (c = Ha(e, f)), c < 0 || b.push(new vB(a, [f], c, f, 3, Yk(f).trim(), d));
    return b;
  }
  function wB(a, b, c) {
    let d = [];
    const e = [],
      f = b.childNodes,
      g = f.length;
    let h = 0,
      k = "";
    for (let n = 0; n < g; n++) {
      var m = f[n];
      if (m.nodeType == 1 || m.nodeType == 3) {
        if (m.nodeType != 1) var l = null;
        else
          m.tagName == "BR"
            ? (l = m)
            : ((l = c.getComputedStyle(m).getPropertyValue("display")),
              (l = l == "inline" || l == "inline-block" ? null : m));
        l
          ? (d.length && k && e.push(new vB(a, d, n - 1, l, 0, k, c)),
            (d = []),
            (h = n + 1),
            (k = ""))
          : (d.push(m), (m = Yk(m).trim()), (k += m && k ? " " + m : m));
      }
    }
    d.length && k && e.push(new vB(a, d, h, b, 2, k, c));
    return e;
  }
  function xB(a, b) {
    return a.g - b.g;
  }
  var vB = class {
    constructor(a, b, c, d, e, f, g) {
      this.B = a;
      this.Ue = b.slice(0);
      this.g = c;
      this.eg = d;
      this.fg = e;
      this.D = f;
      this.j = g;
    }
    Ba() {
      return this.j;
    }
    A(a) {
      return qB(a, this.B, this.eg, this.j, this.fg, this.g);
    }
    l() {
      return rB(this.B, this.eg, this.j, this.fg, this.g);
    }
  };
  function yB(a) {
    return Sa(
      a.D ? wB(a.g, a.l, a.j) : [],
      a.A ? uB(a.g, a.A, a.l, a.j) : []
    ).filter((b) => {
      var c = b.eg.tagName;
      c
        ? ((c = tB[c.toUpperCase()]), (b = c != null && c.he.contains(b.fg)))
        : (b = !1);
      return !b;
    });
  }
  var zB = class {
    constructor(a, b, c) {
      this.l = a;
      this.A = b.Qe;
      this.D = b.Mi;
      this.g = b.articleStructure;
      this.j = c;
      this.B = b.li;
    }
  };
  function AB(a, b) {
    if (!b) return !1;
    const c = ua(b),
      d = a.g.get(c);
    if (d != null) return d;
    if (
      b.nodeType == 1 &&
      (b.tagName == "UL" || b.tagName == "OL") &&
      a.j.getComputedStyle(b).getPropertyValue("list-style-type") != "none"
    )
      return a.g.set(c, !0), !0;
    b = AB(a, b.parentNode);
    a.g.set(c, b);
    return b;
  }
  function BB(a, b) {
    return Oa(b.Ue, (c) => AB(a, c));
  }
  var CB = class {
    constructor(a) {
      this.g = new st();
      this.j = a;
    }
  };
  var DB = class {
    constructor(a, b) {
      this.B = a;
      this.g = [];
      this.j = [];
      this.l = b;
    }
  };
  var FB = (
      a,
      { Wi: b = !1, Th: c = !1, jj: d = c ? 2 : 3, Sh: e = null } = {}
    ) => {
      a = yB(a);
      return EB(a, { Wi: b, Th: c, jj: d, Sh: e });
    },
    EB = (
      a,
      { Wi: b = !1, Th: c = !1, jj: d = c ? 2 : 3, Sh: e = null } = {}
    ) => {
      if (d < 2) throw Error("minGroupSize should be at least 2, found " + d);
      var f = a.slice(0);
      f.sort(xB);
      a = [];
      b = new DB(b, e);
      for (const g of f) {
        e = {
          Nf: g,
          tf: g.D.length < 51 ? !1 : b.l != null ? !BB(b.l, g) : !0,
        };
        if (b.B || e.tf)
          b.g.length
            ? ((f = b.g[b.g.length - 1].Nf),
              (f = GA(f.Ba(), f.Ue[f.Ue.length - 1], e.Nf.Ue[0])))
            : (f = !0),
            f
              ? (b.g.push(e), e.tf && b.j.push(e.Nf))
              : ((b.g = [e]), (b.j = e.tf ? [e.Nf] : []));
        if (b.j.length >= d) {
          e = b;
          f = c ? 0 : 1;
          if (f < 0 || f >= e.j.length) e = null;
          else {
            for (f = e.j[f]; e.g.length && !e.g[0].tf; ) e.g.shift();
            e.g.shift();
            e.j.shift();
            e = f;
          }
          e && a.push(e);
        }
      }
      return a;
    };
  var HB = (a, b, c = !1) => {
      a = GB(a, b);
      const d = new CB(b);
      return Du(a, (e) => FB(e, { Th: c, Sh: d }));
    },
    IB = (a, b) => {
      a = GB(a, b);
      const c = new CB(b);
      return Du(a, (d) => {
        if (d.B) {
          var e = d.g;
          var f = d.j;
          d = d.l.querySelectorAll(d.B);
          var g = [];
          for (var h of d) g.push(new sB(e, h, f));
          e = g;
        } else e = [];
        d = e.slice(0);
        if (d.length) {
          e = [];
          f = d[0];
          for (g = 1; g < d.length; g++) {
            const l = d[g];
            h = f;
            b: {
              if (h.element.hasAttributes())
                for (m of h.element.attributes)
                  if (
                    m.name.toLowerCase() === "style" &&
                    m.value.toLowerCase().includes("background-image")
                  ) {
                    var k = !0;
                    break b;
                  }
              k = h.element.tagName;
              k = k === "IMG" || k === "SVG";
            }
            (k || h.element.textContent.length > 1) &&
              !AB(c, f.element) &&
              GA(l.Ba(), f.element, l.element) &&
              e.push(f);
            f = l;
          }
          var m = e;
        } else m = [];
        return m;
      });
    },
    GB = (a, b) => {
      const c = new st();
      a.forEach((d) => {
        var e = VA(Lh(d, Yu, 1));
        if (e) {
          var f = e.toString();
          ot(c, f) ||
            c.set(f, {
              articleStructure: d,
              rk: e,
              Qe: null,
              Mi: !1,
              li: null,
            });
          e = c.get(f);
          (f = (f = x(d, Yu, 2)) ? ei(f, 7) : null)
            ? (e.Qe = e.Qe ? e.Qe + "," + f : f)
            : (e.Mi = !0);
          d = x(d, Yu, 4);
          e.li = d ? ei(d, 7) : null;
        }
      });
      return rt(c)
        .map((d) => {
          const e = NA(d.rk, b.document);
          return e.length ? new zB(e[0], d, b) : null;
        })
        .filter((d) => d != null);
    };
  var JB = (a) =>
      a?.google_ad_slot
        ? Ku(new Zu(1, { gk: a.google_ad_slot }))
        : Mu(Error("Missing dimension when creating placement id")),
    LB = (a) => {
      switch (a.Fd) {
        case 0:
        case 1:
          var b = a.l;
          b == null
            ? (a = null)
            : ((a = b.wa()),
              a == null
                ? (a = null)
                : ((b = b.j()),
                  (a = b == null ? null : new Zu(0, { mi: [a], Aj: b }))));
          return a != null
            ? Ku(a)
            : Mu(Error("Missing dimension when creating placement id"));
        case 2:
          return (
            (a = KB(a)),
            a != null
              ? Ku(a)
              : Mu(Error("Missing dimension when creating placement id"))
          );
        default:
          return Mu(Error("Invalid type: " + a.Fd));
      }
    };
  const KB = (a) => {
    if (a == null || a.A == null) return null;
    const b = x(a.A, Yu, 1),
      c = x(a.A, Yu, 2);
    if (b == null || c == null) return null;
    const d = a.ca;
    if (d == null) return null;
    a = a.j();
    return a == null ? null : new Zu(0, { mi: [b, c], Ml: d, Aj: aB[a] });
  };
  function MB(a) {
    const b = mB(a.sa);
    return (b ? JB(b) : LB(a.sa)).map((c) => cv(c));
  }
  function NB(a) {
    a.g = a.g || MB(a);
    return a.g;
  }
  function OB(a, b) {
    if (a.sa.B) throw Error("AMA:AP:AP");
    Xz(b, a.wa(), a.sa.j());
    a = a.sa;
    a.B = !0;
    b != null && a.L.push(b);
  }
  const PB = class {
    constructor(a, b, c) {
      this.sa = a;
      this.j = b;
      this.Ea = c;
      this.g = null;
    }
    wa() {
      return this.j;
    }
    fill(a, b) {
      var c = this.sa;
      (a = c.D.j(a, b, this.j, c.g)) && OB(this, a.Bc);
      return a;
    }
  };
  function QB(a, b) {
    return UA(() => {
      const c = [],
        d = [];
      try {
        var e = [];
        for (var f = 0; f < a.length; f++) {
          var g = a[f],
            h = g.F.g(g.g);
          h && e.push({ uj: g, anchorElement: h });
        }
        for (g = 0; g < e.length; g++) {
          f = d;
          var k = f.push;
          {
            var m = e[g];
            const v = m.anchorElement,
              E = m.uj;
            var l = E.H;
            const F = E.g.document.createElement("div");
            F.className = "google-auto-placed";
            const R = F.style;
            R.textAlign = "center";
            R.width = "100%";
            R.height = "0px";
            R.clear = l ? "both" : "none";
            h = F;
            try {
              Xz(h, v, E.j());
              var n = h;
            } catch (ea) {
              throw (Fw(h), ea);
            }
          }
          k.call(f, n);
        }
        const p = ht(b),
          q = it(b);
        for (k = 0; k < d.length; k++) {
          const v = d[k].getBoundingClientRect(),
            E = e[k];
          c.push(
            new PB(
              E.uj,
              E.anchorElement,
              new uu(v.left + q, v.top + p, v.right - v.left)
            )
          );
        }
      } finally {
        for (e = 0; e < d.length; e++) Fw(d[e]);
      }
      return c;
    }, b);
  }
  const RB = { 1: "0.5vp", 2: "300px" },
    SB = { 1: 700, 2: 1200 },
    TB = {
      [1]: { Mj: "3vp", Vh: "1vp", Lj: "0.3vp" },
      [2]: { Mj: "900px", Vh: "300px", Lj: "90px" },
    };
  function UB(a, b, c) {
    var d = VB(a),
      e = Ms(a) || SB[d],
      f = void 0;
    c &&
      (f = (c = (c = WB(Nh(c, qv, 2, wh()), d)) ? x(c, ov, 7) : void 0)
        ? XB(c, e)
        : void 0);
    c = f;
    f = VB(a);
    a = Ms(a) || SB[f];
    const g = YB(TB[f].Vh, a);
    a = g === null ? ZB(f, a) : new $B(g, g, aC(g, 8), 8, 0.3, c);
    c = YB(TB[d].Mj, e);
    f = YB(TB[d].Vh, e);
    d = YB(TB[d].Lj, e);
    e = a.l;
    c &&
      d &&
      f &&
      b !== void 0 &&
      (e = b <= 0.5 ? f + (1 - 2 * b) * (c - f) : d + (2 - 2 * b) * (f - d));
    d = new $B(e, e, aC(e, a.j), a.j, a.D, a.g);
    return bC(d, null, b ?? null);
  }
  function cC(a, b) {
    const c = Sh(a, 4, nh),
      d = vh(a, 5, nh);
    return c == null || d == null ? b : bC(new $B(d, 0, [], c, 1), a, null);
  }
  function dC(a, b) {
    const c = VB(a);
    a = Ms(a) || SB[c];
    if (!b) return ZB(c, a);
    if ((b = WB(Nh(b, qv, 2, wh()), c))) if ((b = eC(b, a))) return b;
    return ZB(c, a);
  }
  function fC(a) {
    const b = VB(a);
    a = Ms(a) || SB[b];
    return ZB(b, a);
  }
  function gC() {
    return T(sx) ? new $B(0, null, [], 8, 0.3) : new $B(0, null, [], 3, null);
  }
  function bC(a, b, c) {
    b = hC(b, c);
    return b == null ? a : new $B(a.l, a.A, a.B, a.j, b, a.g);
  }
  function iC(a, b) {
    let c = { ze: a.l, Jc: a.A };
    for (let d of a.B) d.adCount <= b && (c = d.He);
    return c;
  }
  function hC(a, b) {
    const c = U(yx);
    if (c <= 0) return null;
    if (T(tx)) return c;
    if (!T(ux) || (!a && !b)) return null;
    if (a && a.g() === 2)
      a = String(Th(a, 4, nh)) === "8" && vh(a, 5, nh) === 530;
    else {
      if (!b) return null;
      a = b === 0.5;
    }
    return a ? c : null;
  }
  function jC(a, b, c) {
    var d = ci(b, 2);
    b = x(b, qv, 1);
    var e = VB(c);
    var f = Ms(c) || SB[e];
    c = YB(b?.j(), f) ?? a.l;
    e = YB(b?.g(), f) ?? a.A;
    d = d ? [] : kC(b?.B(), f) ?? a.B;
    const g = b?.D() ?? a.j,
      h = b?.J() ?? a.D;
    a = (b?.F() ? XB(x(b, ov, 7), f) : null) ?? a.g;
    return new $B(c, e, d, g, h, a);
  }
  function lC(a, b) {
    var c = VB(b);
    const d = new rv(),
      e = new qv();
    let f = !1;
    var g = U(xx);
    g >= 0 && (hi(e, 4, g), (f = !0));
    g = null;
    c === 1
      ? ((c = U(Cx)), c >= 0 && (g = c + "vp"))
      : ((c = U(Bx)), c >= 0 && (g = c + "px"));
    c = U(Ax);
    c >= 0 && (g = c + "px");
    g !== null && (li(e, 2, g), (f = !0));
    c = T(Ex) ? "0px" : null;
    c !== null && (li(e, 5, c), (f = !0));
    if (T(Fx)) gi(d, 2, !0), (f = !0);
    else if (c !== null || g !== null) {
      const l = [];
      for (const n of a.B) {
        var h = l,
          k = h.push;
        var m = new pv();
        m = hi(m, 1, n.adCount);
        m = li(m, 3, c ?? n.He.Jc + "px");
        m = li(m, 2, g ?? n.He.ze + "px");
        k.call(h, m);
      }
      Ph(e, 3, l);
    }
    return f ? (y(d, 1, e), jC(a, d, b)) : a;
  }
  var $B = class {
    constructor(a, b, c, d, e, f) {
      this.l = a;
      this.A = b;
      this.B = c.sort((g, h) => g.adCount - h.adCount);
      this.j = d;
      this.D = e;
      this.g = f;
    }
  };
  function WB(a, b) {
    for (let c of a) if (Bf(w(c, 1)) == b) return c;
    return null;
  }
  function kC(a, b) {
    if (a === void 0) return null;
    const c = [];
    for (let d of a) {
      a = di(d, 1);
      const e = YB(ei(d, 2), b),
        f = YB(ei(d, 3), b);
      if (typeof a !== "number" || e === null) return null;
      c.push({ adCount: a, He: { ze: e, Jc: f } });
    }
    return c;
  }
  function eC(a, b) {
    const c = YB(a.j(), b),
      d = YB(a.g(), b);
    if (c === null) return null;
    const e = di(a, 4);
    if (e == null) return null;
    var f = a.B();
    f = kC(f, b);
    if (f === null) return null;
    const g = x(a, ov, 7);
    b = g ? XB(g, b) : void 0;
    return new $B(c, d, f, e, vh(a, 6, nh), b);
  }
  function ZB(a, b) {
    a = YB(RB[a], b);
    return T(sx)
      ? new $B(a === null ? Infinity : a, null, [], 8, 0.3)
      : new $B(a === null ? Infinity : a, null, [], 3, null);
  }
  function YB(a, b) {
    if (!a) return null;
    const c = parseFloat(a);
    return isNaN(c)
      ? null
      : a.endsWith("px")
      ? c
      : a.endsWith("vp")
      ? c * b
      : null;
  }
  function VB(a) {
    a = Ls(a) >= 900;
    return Ub() && !a ? 1 : 2;
  }
  function aC(a, b) {
    if (b < 4) return [];
    const c = Math.ceil(b / 2);
    return [
      { adCount: c, He: { ze: a * 2, Jc: a * 2 } },
      { adCount: c + Math.ceil((b - c) / 2), He: { ze: a * 3, Jc: a * 3 } },
    ];
  }
  function XB(a, b) {
    const c = YB(ei(a, 2), b) || 0,
      d = di(a, 3) || 1;
    a = YB(ei(a, 1), b) || 0;
    return { kj: c, gj: d, ae: a };
  }
  function mC(a, b, c) {
    return Es(
      {
        top: a.g.top - (c + 1),
        right: a.g.right + (c + 1),
        bottom: a.g.bottom + (c + 1),
        left: a.g.left - (c + 1),
      },
      b.g
    );
  }
  function nC(a) {
    if (!a.length) return null;
    const b = Fs(a.map((c) => c.g));
    a = a.reduce((c, d) => c + d.j, 0);
    return new oC(b, a);
  }
  var oC = class {
    constructor(a, b) {
      this.g = a;
      this.j = b;
    }
  };
  function cr() {
    return "m202507210101";
  }
  var pC = Bk($q);
  var br = Bk(dr);
  function qC(a, b) {
    return b(a) ? a : void 0;
  }
  function rC(a, b, c, d, e) {
    c = c instanceof tn ? c.error : c;
    var f = new hr();
    const g = new gr();
    try {
      var h = je(window);
      ji(g, 1, h);
    } catch (p) {}
    try {
      var k = vs();
      Fh(g, 2, k, Cf);
    } catch (p) {}
    try {
      mi(g, 3, window.document.URL);
    } catch (p) {}
    h = y(f, 2, g);
    k = new fr();
    b = H(k, 1, b);
    try {
      var m = fb(c?.name) ? c.name : "Unknown error";
      mi(b, 2, m);
    } catch (p) {}
    try {
      var l = fb(c?.message) ? c.message : `Caught ${c}`;
      mi(b, 3, l);
    } catch (p) {}
    try {
      var n = fb(c?.stack) ? c.stack : Error().stack;
      n && Fh(b, 4, n.split(/\n\s*/), fg);
    } catch (p) {}
    m = z(h, 1, ir, b);
    if (e) {
      l = 0;
      switch (e.errSrc) {
        case "LCC":
          l = 1;
          break;
        case "PVC":
          l = 2;
      }
      n = ar();
      b = qC(e.shv, fb);
      n = mi(n, 2, b);
      l = H(n, 6, l);
      n = $i(pC());
      b = qC(e.es, pb());
      n = Fh(n, 1, b, Cf);
      n = ih(n);
      l = y(l, 4, n);
      n = qC(e.client, fb);
      l = li(l, 3, n);
      n = qC(e.slotname, fb);
      l = mi(l, 7, n);
      e = qC(e.tag_origin, fb);
      e = mi(l, 8, e);
      e = ih(e);
    } else e = qj(ar());
    e = z(m, 6, jr, e);
    d = ji(e, 5, d ?? 1);
    a.Hj(d);
  }
  var tC = class {
    constructor() {
      this.j = sC;
    }
    g(a) {
      var b = this.j();
      return a > 0 && b.om * a <= b.Rk;
    }
  };
  function sC() {
    return {
      om: sb() + (sb() & (2 ** 21 - 1)) * 2 ** 32,
      Rk: Number.MAX_SAFE_INTEGER,
    };
  }
  var wC = class {
    constructor(a = !1) {
      var b = uC;
      this.K = vC;
      this.j = a;
      this.B = b;
      this.g = null;
      this.ra = this.ma;
    }
    l(a) {
      this.g = a;
    }
    A() {}
    ec(a, b, c) {
      let d;
      try {
        d = b();
      } catch (e) {
        b = this.j;
        try {
          b = this.ra(a, un(e), void 0, c);
        } catch (f) {
          this.ma(217, f);
        }
        if (b) window.console?.error?.(e);
        else throw e;
      }
      return d;
    }
    hc(a, b, c, d) {
      return (...e) => this.ec(a, () => b.apply(c, e), d);
    }
    Sa(a, b, c) {
      b.catch((d) => {
        d = d ? d : "unknown rejection";
        this.ma(a, d instanceof Error ? d : Error(d), void 0, c);
      });
    }
    ma(a, b, c, d) {
      try {
        const f = c === void 0 ? 1 / this.B : c === 0 ? 0 : 1 / c;
        if (new tC().g(f)) {
          var e = this.K;
          c = {};
          if (this.g)
            try {
              this.g(c);
            } catch (g) {}
          if (d)
            try {
              d(c);
            } catch (g) {}
          rC(e, a, b, f, c);
        }
      } catch (f) {}
      return this.j;
    }
  };
  var xC = class extends Error {
    constructor(a = "") {
      super();
      this.name = "TagError";
      this.message = a ? "adsbygoogle.push() error: " + a : "";
      Error.captureStackTrace
        ? Error.captureStackTrace(this, xC)
        : (this.stack = Error().stack || "");
    }
  };
  let vC, yC, zC, AC, uC;
  const BC = new Kn(r);
  (function (a, b, c = !0) {
    ({ Em: uC, yl: zC } = CC());
    yC = a || new xs();
    ws(yC, zC);
    vC = b || new ps(cr(), 1e3);
    AC = new wC(c);
    r.document.readyState === "complete"
      ? r.google_measure_js_timing || Jn(BC)
      : BC.g &&
        wl(r, "load", () => {
          r.google_measure_js_timing || Jn(BC);
        });
  })();
  function DC(a, b, c) {
    return AC.ec(a, b, c);
  }
  function EC(a, b) {
    return AC.hc(a, b);
  }
  function FC(a, b, c) {
    AC.Sa(a, b, c);
  }
  function GC(a, b, c = 0.01) {
    const d = vs();
    !b.eid && d.length && (b.eid = d.toString());
    Wn(yC, a, b, !0, c);
  }
  function HC(a, b, c = uC, d) {
    return AC.ma(a, b, c, d, void 0);
  }
  function CC() {
    let a, b;
    typeof r.google_srt === "number"
      ? ((b = r.google_srt), (a = r.google_srt === 0 ? 1 : 0.01))
      : ((b = Math.random()), (a = 0.01));
    return { Em: a, yl: b };
  }
  function IC(a = null) {
    ({ googletag: a } = a ?? window);
    return a?.apiReady ? a : void 0;
  }
  function JC(a, b) {
    var c = KC(b, ".google-auto-placed");
    const d = LC(b),
      e = MC(b),
      f = NC(b),
      g = OC(b),
      h = PC(b),
      k = KC(b, "div.googlepublisherpluginad"),
      m = KC(b, "html > ins.adsbygoogle");
    let l = [].concat(
      ...KC(b, "iframe[id^=aswift_],iframe[id^=google_ads_frame]"),
      ...KC(b, "body ins.adsbygoogle")
    );
    b = [];
    for (const [n, p] of [
      [a.rf, c],
      [a.Bd, d],
      [a.Kl, e],
      [a.jh, f],
      [a.kh, g],
      [a.Hl, h],
      [a.Jl, k],
      [a.Ll, m],
    ])
      n === !1 ? (b = b.concat(p)) : (l = l.concat(p));
    a = QC(l);
    c = QC(b);
    a = a.slice(0);
    for (const n of c)
      for (c = 0; c < a.length; c++)
        (n.contains(a[c]) || a[c].contains(n)) && a.splice(c, 1);
    return a;
  }
  function RC(a) {
    return !!a.className && a.className.indexOf("google-auto-placed") != -1;
  }
  function SC(a) {
    const b = IC(a);
    return b
      ? La(
          Ma(b.pubads().getSlots(), (c) =>
            a.document.getElementById(c.getSlotElementId())
          ),
          (c) => c != null
        )
      : null;
  }
  function KC(a, b) {
    return Wa(a.document.querySelectorAll(b));
  }
  function LC(a) {
    return KC(a, "ins.adsbygoogle[data-anchor-status]");
  }
  function MC(a) {
    return KC(a, "ins.adsbygoogle[data-ad-format=autorelaxed]");
  }
  function NC(a) {
    return (SC(a) || KC(a, "div[id^=div-gpt-ad]")).concat(
      KC(a, "iframe[id^=google_ads_iframe]")
    );
  }
  function OC(a) {
    return KC(
      a,
      "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"
    );
  }
  function PC(a) {
    return KC(a, "ins.adsbygoogle-ablated-ad-slot");
  }
  function QC(a) {
    const b = [];
    for (const c of a) {
      a = !0;
      for (let d = 0; d < b.length; d++) {
        const e = b[d];
        if (e.contains(c)) {
          a = !1;
          break;
        }
        if (c.contains(e)) {
          a = !1;
          b[d] = c;
          break;
        }
      }
      a && b.push(c);
    }
    return b;
  }
  var TC = EC(453, JC),
    UC = EC(454, function (a, b) {
      const c = KC(b, ".google-auto-placed"),
        d = LC(b),
        e = MC(b),
        f = NC(b),
        g = OC(b),
        h = PC(b),
        k = KC(b, "div.googlepublisherpluginad");
      b = KC(b, "html > ins.adsbygoogle");
      return QC([
        ...(a.rf === !0 ? c : []),
        ...(a.Bd === !0 ? d : []),
        ...(a.Kl === !0 ? e : []),
        ...(a.jh === !0 ? f : []),
        ...(a.kh === !0 ? g : []),
        ...(a.Hl === !0 ? h : []),
        ...(a.Jl === !0 ? k : []),
        ...(a.Ll === !0 ? b : []),
      ]);
    });
  function VC(a, b, c) {
    const d = WC(a);
    b = XC(d, b, c);
    return new YC(a, d, b);
  }
  function ZC(a) {
    return (a.bottom - a.top) * (a.right - a.left) > 1;
  }
  function $C(a) {
    return a.g.map((b) => b.box);
  }
  function aD(a) {
    return a.g.reduce((b, c) => b + c.box.bottom - c.box.top, 0);
  }
  var YC = class {
    constructor(a, b, c) {
      this.l = a;
      this.g = b.slice(0);
      this.B = c.slice(0);
      this.j = null;
    }
  };
  function WC(a) {
    const b = TC({ Bd: !1 }, a),
      c = it(a),
      d = ht(a);
    return b
      .map((e) => {
        const f = e.getBoundingClientRect();
        return (e = RC(e)) || ZC(f)
          ? {
              box: {
                top: f.top + d,
                right: f.right + c,
                bottom: f.bottom + d,
                left: f.left + c,
              },
              Jq: e ? 1 : 0,
            }
          : null;
      })
      .filter(yb((e) => e === null));
  }
  function XC(a, b, c) {
    return b != void 0 && a.length <= (c != void 0 ? c : 8)
      ? bD(a, b)
      : Ma(a, (d) => new oC(d.box, 1));
  }
  function bD(a, b) {
    a = Ma(a, (d) => new oC(d.box, 1));
    const c = [];
    for (; a.length > 0; ) {
      let d = a.pop(),
        e = !0;
      for (; e; ) {
        e = !1;
        for (let f = 0; f < a.length; f++)
          if (mC(d, a[f], b)) {
            d = nC([d, a[f]]);
            Array.prototype.splice.call(a, f, 1);
            e = !0;
            break;
          }
      }
      c.push(d);
    }
    return c;
  }
  function cD(a, b, c) {
    const d = tu(c, b);
    return !Oa(a, (e) => Es(e, d));
  }
  function dD(a, b, c, d, e) {
    e = e.Ea;
    const f = tu(e, b),
      g = tu(e, c),
      h = tu(e, d);
    return !Oa(a, (k) => Es(k, g) || (Es(k, f) && !Es(k, h)));
  }
  function eD(a, b, c, d) {
    const e = $C(a);
    if (cD(e, b, d.Ea)) return !0;
    if (!dD(e, b, c.kj, c.ae, d)) return !1;
    const f = new oC(tu(d.Ea, 0), 1);
    a = La(a.B, (g) => mC(g, f, c.ae));
    b = Na(a, (g, h) => g + h.j);
    return a.length === 0 || b > c.gj ? !1 : !0;
  }
  var fD = (a, b) => {
    const c = [];
    let d = a;
    for (
      a = () => {
        c.push({ anchor: d.anchor, position: d.position });
        return d.anchor == b.anchor && d.position == b.position;
      };
      d;

    ) {
      switch (d.position) {
        case 1:
          if (a()) return c;
          d.position = 2;
        case 2:
          if (a()) return c;
          if (d.anchor.firstChild) {
            d = { anchor: d.anchor.firstChild, position: 1 };
            continue;
          } else d.position = 3;
        case 3:
          if (a()) return c;
          d.position = 4;
        case 4:
          if (a()) return c;
      }
      for (
        ;
        d &&
        !d.anchor.nextSibling &&
        d.anchor.parentNode != d.anchor.ownerDocument.body;

      ) {
        d = { anchor: d.anchor.parentNode, position: 3 };
        if (a()) return c;
        d.position = 4;
        if (a()) return c;
      }
      d && d.anchor.nextSibling
        ? (d = { anchor: d.anchor.nextSibling, position: 1 })
        : (d = null);
    }
    return c;
  };
  function gD(a, b) {
    const c = new Uu(),
      d = new tt();
    b.forEach((e) => {
      if (bi(e, zv, 1, Cv)) {
        e = bi(e, zv, 1, Cv);
        if (
          x(e, yv, 1) &&
          x(e, yv, 1).wa() &&
          x(e, yv, 2) &&
          x(e, yv, 2).wa()
        ) {
          const g = hD(a, x(e, yv, 1).wa()),
            h = hD(a, x(e, yv, 2).wa());
          if (g && h)
            for (var f of fD(
              { anchor: g, position: x(e, yv, 1).j() },
              { anchor: h, position: x(e, yv, 2).j() }
            ))
              c.set(ua(f.anchor), f.position);
        }
        x(e, yv, 3) &&
          x(e, yv, 3).wa() &&
          (f = hD(a, x(e, yv, 3).wa())) &&
          c.set(ua(f), x(e, yv, 3).j());
      } else
        bi(e, Av, 2, Cv)
          ? iD(a, bi(e, Av, 2, Cv), c)
          : bi(e, xv, 3, Cv) && jD(a, bi(e, xv, 3, Cv), d);
    });
    return new kD(c, d);
  }
  var kD = class {
    constructor(a, b) {
      this.j = a;
      this.g = b;
    }
  };
  const iD = (a, b, c) => {
      x(b, yv, 2)
        ? ((b = x(b, yv, 2)), (a = hD(a, b.wa())) && c.set(ua(a), b.j()))
        : x(b, Yu, 1) &&
          (a = lD(a, x(b, Yu, 1))) &&
          a.forEach((d) => {
            d = ua(d);
            c.set(d, 1);
            c.set(d, 4);
            c.set(d, 2);
            c.set(d, 3);
          });
    },
    jD = (a, b, c) => {
      x(b, Yu, 1) &&
        (a = lD(a, x(b, Yu, 1))) &&
        a.forEach((d) => {
          c.add(ua(d));
        });
    },
    hD = (a, b) => ((a = lD(a, b)) && a.length > 0 ? a[0] : null),
    lD = (a, b) => ((b = VA(b)) ? NA(b, a) : null);
  var mD = class {
    constructor() {
      var a = Math.random;
      this.g = Math.floor(a() * 2 ** 52);
      this.j = 0;
    }
  };
  function nD(a, b, c) {
    switch (c) {
      case 2:
      case 3:
        break;
      case 1:
      case 4:
        b = b.parentElement;
        break;
      default:
        throw Error("Unknown RelativePosition: " + c);
    }
    for (c = []; b; ) {
      if (oD(b)) return !0;
      if (a.g.has(b)) break;
      c.push(b);
      b = b.parentElement;
    }
    c.forEach((d) => a.g.add(d));
    return !1;
  }
  function pD(a) {
    a = qD(a);
    return a.has("all") || a.has("after");
  }
  function rD(a) {
    a = qD(a);
    return a.has("all") || a.has("before");
  }
  function qD(a) {
    return (a = a && a.getAttribute("data-no-auto-ads"))
      ? new Set(a.split("|"))
      : new Set();
  }
  function oD(a) {
    const b = qD(a);
    return (
      a &&
      (a.tagName === "AUTO-ADS-EXCLUSION-AREA" ||
        b.has("inside") ||
        b.has("all"))
    );
  }
  var sD = class {
    constructor() {
      this.g = new Set();
      this.j = new mD();
    }
  };
  function tD(a) {
    return function (b) {
      return QB(b, a);
    };
  }
  function uD(a) {
    const b = Ms(a);
    return b ? Ba(vD, b + ht(a)) : ub;
  }
  function wD(a, b, c) {
    if (a < 0) throw Error("ama::ead:nd");
    if (a === Infinity) return ub;
    const d = $C(c || VC(b));
    return (e) => cD(d, a, e.Ea);
  }
  function xD(a, b, c, d) {
    if (a < 0 || b.kj < 0 || b.gj < 0 || b.ae < 0) throw Error("ama::ead:nd");
    return a === Infinity ? ub : (e) => eD(d || VC(c, b.ae), a, b, e);
  }
  function yD(a) {
    if (!a.length) return ub;
    const b = new Ju(a);
    return (c) => b.contains(c.Fd);
  }
  function zD(a) {
    return function (b) {
      for (let c of b.te) if (a.indexOf(c) > -1) return !1;
      return !0;
    };
  }
  function AD(a) {
    return a.length
      ? function (b) {
          const c = b.te;
          return a.some((d) => c.indexOf(d) > -1);
        }
      : vb;
  }
  function BD(a, b) {
    if (a <= 0) return vb;
    const c = Qs(b).scrollHeight - a;
    return function (d) {
      return d.Ea.g <= c;
    };
  }
  function CD(a) {
    const b = {};
    a &&
      a.forEach((c) => {
        b[c] = !0;
      });
    return function (c) {
      return !b[fi(c.Wf, 2) || 0];
    };
  }
  function DD(a) {
    return a.length ? (b) => a.includes(fi(b.Wf, 1) || 0) : vb;
  }
  function ED(a, b) {
    const c = gD(a, b);
    return function (d) {
      var e = d.wa();
      d = d.sa.j();
      d = aB[d];
      var f = c.j,
        g = ua(e);
      f = f.g.get(g);
      if (!(f = f ? f.contains(d) : !1))
        a: {
          if (c.g.contains(ua(e)))
            switch (d) {
              case 2:
              case 3:
                f = !0;
                break a;
              default:
                f = !1;
                break a;
            }
          for (e = e.parentElement; e; ) {
            if (c.g.contains(ua(e))) {
              f = !0;
              break a;
            }
            e = e.parentElement;
          }
          f = !1;
        }
      return !f;
    };
  }
  function FD() {
    const a = new sD();
    return function (b) {
      var c = b.wa();
      b = b.sa.j();
      var d = aB[b];
      a: switch (d) {
        case 1:
          b = pD(c.previousElementSibling) || rD(c);
          break a;
        case 4:
          b = pD(c) || rD(c.nextElementSibling);
          break a;
        case 2:
          b = rD(c.firstElementChild);
          break a;
        case 3:
          b = pD(c.lastElementChild);
          break a;
        default:
          throw Error("Unknown RelativePosition: " + d);
      }
      c = nD(a, c, d);
      d = a.j;
      GC(
        "ama_exclusion_zone",
        {
          typ: b ? (c ? "siuex" : "siex") : c ? "suex" : "noex",
          cor: d.g,
          num: d.j++,
          dvc: Zd(),
        },
        0.1
      );
      return !(b || c);
    };
  }
  const vD = (a, b) => b.Ea.g >= a,
    GD = (a, b, c) => {
      c = c.Ea.j;
      return a <= c && c <= b;
    };
  function HD(a, b, c, d, e) {
    var f = ID(JD(a, b), a);
    if (f.length === 0) {
      var g = !!x(b, Ov, 6)?.g()?.length;
      f = x(b, Kv, 28)?.j()?.j() && g ? ID(KD(a, b), a) : f;
    }
    if (f.length === 0) return uw(d, "pfno"), [];
    b = f;
    a = e.bf ? LD(a, b, c) : { xc: b, ff: null };
    const { xc: h, ff: k } = a;
    f = h;
    return f.length === 0 && k
      ? (uw(d, k), [])
      : [
          f[
            e.jn
              ? 0
              : e.gn
              ? Math.floor(f.length / 4)
              : Math.floor(f.length / 2)
          ],
        ];
  }
  function LD(a, b, c) {
    c = c ? Nh(c, Bv, 5, wh()) : [];
    const d = ED(a.document, c),
      e = FD();
    b = b.filter((f) => d(f));
    if (b.length === 0) return { xc: [], ff: "pfaz" };
    b = b.filter((f) => e(f));
    return b.length === 0 ? { xc: [], ff: "pfet" } : { xc: b, ff: null };
  }
  function MD(a, b) {
    return a.Ea.g - b.Ea.g;
  }
  function JD(a, b) {
    const c = x(b, Ov, 6);
    if (!c) return [];
    b = x(b, Kv, 28)?.j();
    return (b?.g() ? IB(c.g(), a) : HB(c.g(), a, !!b?.B())).map((d) => d.l());
  }
  function KD(a, b) {
    b = Nh(b, Sv, 1, wh()) || [];
    return iB(b, a, {}).filter((c) => !c.te.includes(6));
  }
  function ID(a, b) {
    a = QB(a, b);
    const c = uD(b);
    a = a.filter((d) => c(d));
    return a.sort(MD);
  }
  var ND = {},
    OD = {},
    PD = {},
    QD = {},
    RD = {};
  function SD() {
    throw Error("Do not instantiate directly");
  }
  SD.prototype.zi = null;
  SD.prototype.Yb = function () {
    return this.content;
  };
  SD.prototype.toString = function () {
    return this.content;
  };
  function TD(a) {
    if (a.Ai !== ND) throw Error("Sanitized content was not of kind HTML.");
    return Gc(a.toString());
  }
  function UD() {
    SD.call(this);
  }
  Ea(UD, SD);
  UD.prototype.Ai = ND;
  function VD(a) {
    if (a != null)
      switch (a.zi) {
        case 1:
          return 1;
        case -1:
          return -1;
        case 0:
          return 0;
      }
    return null;
  }
  function WD(a) {
    return XD(a, ND)
      ? a
      : a instanceof Fc
      ? YD(Kc(a).toString())
      : YD(String(String(a)).replace(ZD, $D), VD(a));
  }
  var YD = (function (a) {
    function b(c) {
      this.content = c;
    }
    b.prototype = a.prototype;
    return function (c, d) {
      c = new b(String(c));
      d !== void 0 && (c.zi = d);
      return c;
    };
  })(UD);
  function aE(a) {
    return bE(String(a), () => "").replace(cE, "&lt;");
  }
  const dE = RegExp.prototype.hasOwnProperty("sticky"),
    eE = new RegExp(
      (dE ? "" : "^") + "(?:!|/?([a-zA-Z][a-zA-Z0-9:-]*))",
      dE ? "gy" : "g"
    );
  function bE(a, b) {
    const c = [],
      d = a.length;
    let e = 0,
      f = [],
      g,
      h,
      k = 0;
    for (; k < d; ) {
      switch (e) {
        case 0:
          var m = a.indexOf("<", k);
          if (m < 0) {
            if (c.length === 0) return a;
            c.push(a.substring(k));
            k = d;
          } else
            c.push(a.substring(k, m)),
              (h = m),
              (k = m + 1),
              dE
                ? ((eE.lastIndex = k), (m = eE.exec(a)))
                : ((eE.lastIndex = 0), (m = eE.exec(a.substring(k)))),
              m
                ? ((f = ["<", m[0]]), (g = m[1]), (e = 1), (k += m[0].length))
                : c.push("<");
          break;
        case 1:
          m = a.charAt(k++);
          switch (m) {
            case "'":
            case '"':
              let l = a.indexOf(m, k);
              l < 0 ? (k = d) : (f.push(m, a.substring(k, l + 1)), (k = l + 1));
              break;
            case ">":
              f.push(m);
              c.push(b(f.join(""), g));
              e = 0;
              f = [];
              h = g = null;
              break;
            default:
              f.push(m);
          }
          break;
        default:
          throw Error();
      }
      e === 1 &&
        k >= d &&
        ((k = h + 1), c.push("<"), (e = 0), (f = []), (h = g = null));
    }
    return c.join("");
  }
  function fE(a, b) {
    a = a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>");
    return b
      ? a
          .replace(/{/g, " \\{")
          .replace(/}/g, " \\}")
          .replace(/\/\*/g, "/ *")
          .replace(/\\$/, "\\ ")
      : a;
  }
  function V(a) {
    XD(a, ND)
      ? ((a = aE(a.Yb())), (a = String(a).replace(gE, $D)))
      : (a = String(a).replace(ZD, $D));
    return a;
  }
  function hE(a) {
    a = String(a);
    const b = (d, e, f) => {
      const g = Math.min(e.length - f, d.length);
      for (let k = 0; k < g; k++) {
        var h = e[f + k];
        if (d[k] !== ("A" <= h && h <= "Z" ? h.toLowerCase() : h)) return !1;
      }
      return !0;
    };
    for (var c = 0; (c = a.indexOf("<", c)) != -1; ) {
      if (b("\x3c/script", a, c) || b("\x3c!--", a, c)) return "zSoyz";
      c += 1;
    }
    return a;
  }
  function iE(a) {
    if (a == null) return " null ";
    if (XD(a, OD)) return a.Yb();
    switch (typeof a) {
      case "boolean":
      case "number":
        return " " + a + " ";
      default:
        return "'" + String(String(a)).replace(jE, kE) + "'";
    }
  }
  const lE = /['()]/g;
  function mE(a) {
    return "%" + a.charCodeAt(0).toString(16);
  }
  function nE(a) {
    return String(a).replace(oE, pE);
  }
  function W(a) {
    return XD(a, RD)
      ? fE(a.Yb(), !1)
      : a == null
      ? ""
      : a instanceof Tc
      ? fE(Uc(a), !1)
      : fE(String(a), !0);
  }
  function XD(a, b) {
    return a != null && a.Ai === b;
  }
  function qE(a, b) {
    a.g !== void 0 ? a.g.push(b) : (a.content += b);
    return a;
  }
  function rE(a, b) {
    a.g !== void 0
      ? a.g.push(b)
      : b instanceof sE
      ? b.content !== void 0
        ? (a.content += b.Yb())
        : ((a.g = [a.content, b]), (a.content = void 0))
      : (a.content += b);
    return a;
  }
  class sE extends UD {
    Yb() {
      if (this.content !== void 0) return this.content;
      let a = "";
      for (const b of this.g) a += b;
      return a;
    }
    toString() {
      return this.Yb();
    }
  }
  const tE = (() => {
      function a() {
        this.content = "";
      }
      a.prototype = sE.prototype;
      return function () {
        return new a();
      };
    })(),
    uE = {
      "\x00": "&#0;",
      "\t": "&#9;",
      "\n": "&#10;",
      "\v": "&#11;",
      "\f": "&#12;",
      "\r": "&#13;",
      " ": "&#32;",
      '"': "&quot;",
      "&": "&amp;",
      "'": "&#39;",
      "-": "&#45;",
      "/": "&#47;",
      "<": "&lt;",
      "=": "&#61;",
      ">": "&gt;",
      "`": "&#96;",
      "\u0085": "&#133;",
      "\u00a0": "&#160;",
      "\u2028": "&#8232;",
      "\u2029": "&#8233;",
    };
  function $D(a) {
    return uE[a];
  }
  const vE = {
    "\x00": "\\x00",
    "\b": "\\x08",
    "\t": "\\t",
    "\n": "\\n",
    "\v": "\\x0b",
    "\f": "\\f",
    "\r": "\\r",
    '"': "\\x22",
    $: "\\x24",
    "&": "\\x26",
    "'": "\\x27",
    "(": "\\x28",
    ")": "\\x29",
    "*": "\\x2a",
    "+": "\\x2b",
    ",": "\\x2c",
    "-": "\\x2d",
    ".": "\\x2e",
    "/": "\\/",
    ":": "\\x3a",
    "<": "\\x3c",
    "=": "\\x3d",
    ">": "\\x3e",
    "?": "\\x3f",
    "[": "\\x5b",
    "\\": "\\\\",
    "]": "\\x5d",
    "^": "\\x5e",
    "{": "\\x7b",
    "|": "\\x7c",
    "}": "\\x7d",
    "\u0085": "\\x85",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029",
  };
  function kE(a) {
    return vE[a];
  }
  const wE = {
    "\x00": "%00",
    "\u0001": "%01",
    "\u0002": "%02",
    "\u0003": "%03",
    "\u0004": "%04",
    "\u0005": "%05",
    "\u0006": "%06",
    "\u0007": "%07",
    "\b": "%08",
    "\t": "%09",
    "\n": "%0A",
    "\v": "%0B",
    "\f": "%0C",
    "\r": "%0D",
    "\u000e": "%0E",
    "\u000f": "%0F",
    "\u0010": "%10",
    "\u0011": "%11",
    "\u0012": "%12",
    "\u0013": "%13",
    "\u0014": "%14",
    "\u0015": "%15",
    "\u0016": "%16",
    "\u0017": "%17",
    "\u0018": "%18",
    "\u0019": "%19",
    "\u001a": "%1A",
    "\u001b": "%1B",
    "\u001c": "%1C",
    "\u001d": "%1D",
    "\u001e": "%1E",
    "\u001f": "%1F",
    " ": "%20",
    '"': "%22",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "<": "%3C",
    ">": "%3E",
    "\\": "%5C",
    "{": "%7B",
    "}": "%7D",
    "\u007f": "%7F",
    "\u0085": "%C2%85",
    "\u00a0": "%C2%A0",
    "\u2028": "%E2%80%A8",
    "\u2029": "%E2%80%A9",
    "\uff01": "%EF%BC%81",
    "\uff03": "%EF%BC%83",
    "\uff04": "%EF%BC%84",
    "\uff06": "%EF%BC%86",
    "\uff07": "%EF%BC%87",
    "\uff08": "%EF%BC%88",
    "\uff09": "%EF%BC%89",
    "\uff0a": "%EF%BC%8A",
    "\uff0b": "%EF%BC%8B",
    "\uff0c": "%EF%BC%8C",
    "\uff0f": "%EF%BC%8F",
    "\uff1a": "%EF%BC%9A",
    "\uff1b": "%EF%BC%9B",
    "\uff1d": "%EF%BC%9D",
    "\uff1f": "%EF%BC%9F",
    "\uff20": "%EF%BC%A0",
    "\uff3b": "%EF%BC%BB",
    "\uff3d": "%EF%BC%BD",
  };
  function pE(a) {
    return wE[a];
  }
  const ZD = /[\x00\x22\x26\x27\x3c\x3e]/g,
    gE = /[\x00\x22\x27\x3c\x3e]/g,
    jE =
      /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\x5b-\x5d\x7b\x7d\x85\u2028\u2029]/g,
    oE =
      /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
    xE = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i,
    yE =
      /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+-]+;base64,[a-z0-9+\/]+=*$|^blob:/i,
    zE = /^[a-zA-Z0-9+\/_-]+={0,2}$/;
  function AE(a) {
    a = String(a);
    return zE.test(a) ? a : "zSoyz";
  }
  const cE = /</g; /* 
 
 
 Copyright Mathias Bynens <http://mathiasbynens.be/> 
 
 Permission is hereby granted, free of charge, to any person obtaining 
 a copy of this software and associated documentation files (the 
 "Software"), to deal in the Software without restriction, including 
 without limitation the rights to use, copy, modify, merge, publish, 
 distribute, sublicense, and/or sell copies of the Software, and to 
 permit persons to whom the Software is furnished to do so, subject to 
 the following conditions: 
 
 The above copyright notice and this permission notice shall be 
 included in all copies or substantial portions of the Software. 
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE 
 LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION 
 OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION 
 WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 
*/
  const BE = Math.floor;
  var CE = /^xn--/,
    DE = /[\x2E\u3002\uFF0E\uFF61]/g;
  const EE = {
    Pp: "Overflow: input needs wider integers to process",
    Mp: "Illegal input >= 0x80 (not a basic code point)",
    yp: "Invalid input",
  };
  function FE(a) {
    throw RangeError(EE[a]);
  }
  function GE(a, b) {
    const c = a.split("@");
    let d = "";
    c.length > 1 && ((d = c[0] + "@"), (a = c[1]));
    a = a.replace(DE, ".");
    a = a.split(".").map(b).join(".");
    return d + a;
  }
  function HE(a) {
    return GE(a, (b) => {
      if (CE.test(b) && b.length > 4) {
        b = b.slice(4).toLowerCase();
        const h = [],
          k = b.length;
        let m = 0,
          l = 128;
        var c = 72,
          d = b.lastIndexOf("-");
        d < 0 && (d = 0);
        for (var e = 0; e < d; ++e)
          b.charCodeAt(e) >= 128 &&
            FE("Illegal input >= 0x80 (not a basic code point)"),
            h.push(b.charCodeAt(e));
        for (d = d > 0 ? d + 1 : 0; d < k; ) {
          e = m;
          for (let n = 1, p = 36; ; p += 36) {
            d >= k && FE("Invalid input");
            var f = b.charCodeAt(d++);
            f =
              f - 48 < 10
                ? f - 22
                : f - 65 < 26
                ? f - 65
                : f - 97 < 26
                ? f - 97
                : 36;
            (f >= 36 || f > BE((2147483647 - m) / n)) &&
              FE("Overflow: input needs wider integers to process");
            m += f * n;
            var g = p <= c ? 1 : p >= c + 26 ? 26 : p - c;
            if (f < g) break;
            f = 36 - g;
            n > BE(2147483647 / f) &&
              FE("Overflow: input needs wider integers to process");
            n *= f;
          }
          f = h.length + 1;
          c = m - e;
          g = 0;
          c = e == 0 ? BE(c / 700) : c >> 1;
          for (c += BE(c / f); c > 455; g += 36) c = BE(c / 35);
          c = BE(g + (36 * c) / (c + 38));
          BE(m / f) > 2147483647 - l &&
            FE("Overflow: input needs wider integers to process");
          l += BE(m / f);
          m %= f;
          h.splice(m++, 0, l);
        }
        b = String.fromCodePoint.apply(null, h);
      }
      return b;
    });
  }
  function IE(a, b, c) {
    var d = a.R.contentWindow;
    a.Ud
      ? ((b = { action: "search", searchTerm: b, rsToken: c }),
        (b.experimentId = a.rb),
        a.alwaysSetAdSafeHigh && (b.alwaysSetAdSafeHigh = "1"),
        a.postMessage(d, b))
      : ((d = d.google.search.cse.element.getElement(a.nd)),
        (c = { rsToken: c, hostName: a.host }),
        a.Td || typeof a.rb !== "number" || (c.afsExperimentId = a.rb),
        d.execute(b, void 0, c));
  }
  var JE = class {
    constructor(a) {
      this.R = a.R;
      this.pb = a.pb;
      this.nd = a.nd;
      this.Gb = a.Gb;
      this.Je = a.Je;
      this.host = a.location.host;
      this.origin = a.location.origin;
      this.language = a.language;
      this.Ed = a.Ed;
      this.rb = a.rb;
      this.Ae = a.Ae || !1;
      this.Ud = a.Ud;
      this.Lc = a.Lc;
      this.Ge = a.Ge || !1;
      this.Td = a.Td || !1;
      this.Uh = !!a.Uh;
      this.alwaysSetAdSafeHigh = !!a.alwaysSetAdSafeHigh;
    }
    postMessage(a, b) {
      a?.postMessage(b, "https://www.gstatic.com");
    }
    init() {
      this.R.setAttribute("id", "prose-iframe");
      this.R.setAttribute("width", "100%");
      this.R.setAttribute("height", "100%");
      this.R.style.cssText = "box-sizing:border-box;border:unset;";
      var a =
        "https://www.google.com/s2/favicons?sz=64&domain_url=" +
        encodeURIComponent(this.host);
      var b = zc(a, yc) || tc;
      var c = HE(this.host.startsWith("www.") ? this.host.slice(4) : this.host),
        d = {};
      a = this.nd;
      var e = this.Gb,
        f = this.Je;
      const g = this.host;
      c = this.Ed.replace("${website}", c);
      var h = this.Ae;
      const k = this.Ge,
        m = this.Uh,
        l = d && d.ee,
        n = d && d.Nk;
      d = tE();
      h =
        "<style" +
        (l ? ' nonce="' + V(AE(l)) + '"' : "") +
        ">.cse-favicon {display: block; float: left; height: 16px; position: absolute; left: 15px; width: 16px;}.cse-header {font-size: 16px; font-family: Arial; margin-left: 35px; margin-top: 6px; margin-bottom: unset; line-height: 16px;}.gsc-search-box {max-width: 520px !important;}.gsc-input {padding-right: 0 !important;}.gsc-input-box {border-radius: 16px 0 0 16px !important;}.gsc-search-button-v2 {border-left: 0 !important; border-radius: 0 16px 16px 0 !important; min-height: 30px !important; margin-left: 0 !important;}.gsc-cursor-page, .gsc-cursor-next-page, .gsc-cursor-numbered-page {color: #1a73e8 !important;}.gsc-cursor-chevron {fill: #1a73e8 !important;}.gsc-cursor-box {text-align: center !important;}.gsc-cursor-current-page {color: #000 !important;}.gcsc-find-more-on-google-root, .gcsc-find-more-on-google {display: none !important;}.prose-container {max-width: 652px;}#prose-empty-serp-container {display: flex; flex-direction: column; align-items: center; padding: 0; gap: 52px; position: relative; width: 248px; height: 259px; margin: auto; top: 100px;}#prose-empty-serp-icon-image {display: flex; flex-direction: row; justify-content: center; align-items: center; padding: 30px; gap: 10px; width: 124px; height: 124px; border-radius: 62px; flex: none; order: 1; flex-grow: 0; position: absolute; top: 0;}#prose-empty-serp-text-container {display: flex; flex-direction: column; align-items: center; padding: 0; gap: 19px; width: 248px; height: 83px; flex: none; order: 2; align-self: stretch; flex-grow: 0; position: absolute; top: 208px;}#prose-empty-serp-text-div {display: flex; flex-direction: column; align-items: flex-start; padding: 0; gap: 11px; width: 248px; height: 83px; flex: none; order: 0; align-self: stretch; flex-grow: 0;}#prose-empty-serp-supporting-text {width: 248px; height: 40px; font-family: 'Arial'; font-style: normal; font-weight: 400; font-size: 14px; line-height: 20px; text-align: center; letter-spacing: 0.2px; color: #202124; flex: none; order: 1; align-self: stretch; flex-grow: 0;}</style>" +
        (h
          ? "<script" +
            (n ? ' nonce="' + V(AE(n)) + '"' : "") +
            '>window.__gcse={initializationCallback:function(){top.postMessage({action:"init",adChannel:"' +
            String(f).replace(jE, kE) +
            '"},top.location.origin);}};\x3c/script>'
          : "") +
        '<div class="prose-container"><img class="cse-favicon" src="';
      XD(b, PD) || XD(b, QD)
        ? (b = String(b).replace(oE, pE))
        : uc(b)
        ? (b = nE(vc(b)))
        : b instanceof oc
        ? (b = nE(qc(b).toString()))
        : ((b = String(b)),
          (b = yE.test(b) ? b.replace(oE, pE) : "about:invalid#zSoyz"));
      a = qE(
        rE(
          qE(
            d,
            h +
              V(b) +
              '" alt="' +
              V(g) +
              ' icon"><p class="cse-header"><strong>'
          ),
          WD(c)
        ),
        "</strong></p>" +
          (m
            ? '<div class="gcse-searchresults-only" data-gname="' +
              V(a) +
              '" data-adclient="' +
              V(e) +
              '" data-adchannel="' +
              V(f) +
              '" data-as_sitesearch="' +
              V(g) +
              '" data-personalizedAds="false" data-disableAds="true"></div>'
            : '<div class="gcse-search" data-gname="' +
              V(a) +
              '" data-adclient="' +
              V(e) +
              '" data-adchannel="' +
              V(f) +
              '" data-as_sitesearch="' +
              V(g) +
              '" data-personalizedAds="false"></div>') +
          "</div>" +
          (k
            ? "<div id=\"prose-empty-serp-container\"><img id='prose-empty-serp-icon-image' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI0IiBoZWlnaHQ9IjEyNCIgdmlld0JveD0iMCAwIDEyNCAxMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjQiIGhlaWdodD0iMTI0IiByeD0iNjIiIGZpbGw9IiNGMUYzRjQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02OS4zNiA2NS4zODY3TDg0LjY0IDgwLjY2NjdMODAuNjY2NyA4NC42NEw2NS4zODY3IDY5LjM2QzYyLjUzMzMgNzEuNDEzMyA1OS4wOTMzIDcyLjY2NjcgNTUuMzMzMyA3Mi42NjY3QzQ1Ljc2IDcyLjY2NjcgMzggNjQuOTA2NyAzOCA1NS4zMzMzQzM4IDQ1Ljc2IDQ1Ljc2IDM4IDU1LjMzMzMgMzhDNjQuOTA2NyAzOCA3Mi42NjY3IDQ1Ljc2IDcyLjY2NjcgNTUuMzMzM0M3Mi42NjY3IDU5LjA5MzMgNzEuNDEzMyA2Mi41MzMzIDY5LjM2IDY1LjM4NjdaTTU1LjMzMzMgNDMuMzMzM0M0OC42OTMzIDQzLjMzMzMgNDMuMzMzMyA0OC42OTMzIDQzLjMzMzMgNTUuMzMzM0M0My4zMzMzIDYxLjk3MzMgNDguNjkzMyA2Ny4zMzMzIDU1LjMzMzMgNjcuMzMzM0M2MS45NzMzIDY3LjMzMzMgNjcuMzMzMyA2MS45NzMzIDY3LjMzMzMgNTUuMzMzM0M2Ny4zMzMzIDQ4LjY5MzMgNjEuOTczMyA0My4zMzMzIDU1LjMzMzMgNDMuMzMzM1oiIGZpbGw9IiM5QUEwQTYiLz4KPC9zdmc+Cg==' alt=''><div id='prose-empty-serp-text-container'><div id='prose-empty-serp-text-div'><div id='prose-empty-serp-supporting-text'>Search this website by entering a keyword.</div></div></div></div>"
            : "")
      );
      a = TD(a);
      this.Ud
        ? Lc(
            this.R,
            yd`https://www.gstatic.com/prose/protected/${
              this.Lc || "558153351"
            }/iframe.html?cx=${this.pb}&host=${this.host}&hl=${
              this.language
            }&lrh=${this.Ed}&client=${this.Gb}&origin=${this.origin}`
          )
        : ((e = new Map([
            ["cx", this.pb],
            ["language", this.language],
          ])),
          this.Td &&
            ((f = []),
            Array.isArray(this.rb)
              ? f.push(...this.rb)
              : typeof this.rb === "number" && f.push(this.rb),
            f.length && e.set("fexp", f.join())),
          (e = zd(yd`https://cse.google.com/cse.js`, e)),
          (e = qc(e).toString()),
          (e = Gc(`<script src="${jd(e)}"` + ">\x3c/script>")),
          (a = wd("body", { style: "margin:0;" }, [a, e])),
          (this.R.srcdoc = Kc(a)));
    }
  };
  function KE(a) {
    a.google_reactive_ads_global_state
      ? (a.google_reactive_ads_global_state.sideRailProcessedFixedElements ==
          null &&
          (a.google_reactive_ads_global_state.sideRailProcessedFixedElements =
            new Set()),
        a.google_reactive_ads_global_state.sideRailAvailableSpace == null &&
          (a.google_reactive_ads_global_state.sideRailAvailableSpace =
            new Map()),
        a.google_reactive_ads_global_state.sideRailPlasParam == null &&
          (a.google_reactive_ads_global_state.sideRailPlasParam = new Map()),
        a.google_reactive_ads_global_state.sideRailMutationCallbacks == null &&
          (a.google_reactive_ads_global_state.sideRailMutationCallbacks = []))
      : (a.google_reactive_ads_global_state = new LE());
    return a.google_reactive_ads_global_state;
  }
  var LE = class {
      constructor() {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledInAsfe = {};
        this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.tagSpecificState = {};
        this.messageValidationEnabled = !1;
        this.floatingAdsStacking = new ME();
        this.sideRailProcessedFixedElements = new Set();
        this.sideRailAvailableSpace = new Map();
        this.sideRailPlasParam = new Map();
        this.sideRailMutationCallbacks = [];
        this.g = null;
        this.clickTriggeredInterstitialMayBeDisplayed = !1;
      }
    },
    ME = class {
      constructor() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = [];
      }
    };
  function NE(a, b) {
    return new OE(a, b);
  }
  function PE(a) {
    const b = QE(a);
    Ia(a.floatingAdsStacking.maxZIndexListeners, (c) => c(b));
  }
  function QE(a) {
    a = Kd(a.floatingAdsStacking.maxZIndexRestrictions);
    return a.length ? Math.min.apply(null, a) : null;
  }
  function RE(a, b) {
    Ra(a.floatingAdsStacking.maxZIndexListeners, (c) => c === b);
  }
  var SE = class {
    constructor(a) {
      this.floatingAdsStacking = KE(a).floatingAdsStacking;
    }
  };
  function TE(a) {
    if (a.g == null) {
      var b = a.controller,
        c = a.Hc;
      const d = b.floatingAdsStacking.nextRestrictionId++;
      b.floatingAdsStacking.maxZIndexRestrictions[d] = c;
      PE(b);
      a.g = d;
    }
  }
  function UE(a) {
    if (a.g != null) {
      var b = a.controller;
      delete b.floatingAdsStacking.maxZIndexRestrictions[a.g];
      PE(b);
      a.g = null;
    }
  }
  var OE = class {
    constructor(a, b) {
      this.controller = a;
      this.Hc = b;
      this.g = null;
    }
  };
  function VE(a) {
    a = a.activeElement;
    const b = a?.shadowRoot;
    return b ? VE(b) || a : a;
  }
  function WE(a, b) {
    return XE(b, a.document.body).flatMap((c) => YE(c));
  }
  function XE(a, b) {
    var c = a;
    for (a = []; c && c !== b; ) {
      a.push(c);
      let e;
      var d;
      (d = c.parentElement) ||
        ((c = c.getRootNode()),
        (d =
          ((e = c.mode && c.host ? c : null) == null ? void 0 : e.host) ||
          null));
      c = d;
    }
    return c !== b ? [] : a;
  }
  function YE(a) {
    const b = a.parentElement;
    return b ? Array.from(b.children).filter((c) => c !== a) : [];
  }
  function ZE(a) {
    a.state !== null &&
      (a.state.dl.forEach((b) => {
        b.inert = !1;
      }),
      a.state.Cm?.focus(),
      (a.state = null));
  }
  function $E(a, b) {
    ZE(a);
    const c = VE(a.C.document);
    b = WE(a.C, b).filter((d) => !d.inert);
    b.forEach((d) => {
      d.inert = !0;
    });
    a.state = { Cm: c, dl: b };
  }
  var aF = class {
    constructor(a) {
      this.C = a;
      this.state = null;
    }
    bg() {
      ZE(this);
    }
  };
  function bF(a) {
    return new cF(
      a,
      new Ft(a, a.document.body),
      new Ft(a, a.document.documentElement),
      new Ft(a, a.document.documentElement)
    );
  }
  function dF(a) {
    Et(a.l, "scroll-behavior", "auto");
    var b = eF(a.C);
    b.activePageScrollPreventers.add(a);
    b.previousWindowScroll === null && (b.previousWindowScroll = a.C.scrollY);
    Et(a.g, "position", "fixed");
    Et(a.g, "top", `${-b.previousWindowScroll}px`);
    Et(a.g, "width", "100%");
    Et(a.g, "overflow-x", "hidden");
    Et(a.g, "overflow-y", "hidden");
    b = getComputedStyle(a.C.document.documentElement);
    fF(b.overflowX) && Et(a.j, "overflow-x", "unset");
    fF(b.overflowY) && Et(a.j, "overflow-y", "unset");
  }
  function fF(a) {
    return a === "scroll" || a === "auto";
  }
  function gF(a) {
    Dt(a.g);
    Dt(a.j);
    const b = eF(a.C);
    b.activePageScrollPreventers.delete(a);
    b.activePageScrollPreventers.size === 0 &&
      (a.C.scrollTo(0, b.previousWindowScroll || 0),
      (b.previousWindowScroll = null));
    Dt(a.l);
  }
  var cF = class {
    constructor(a, b, c, d) {
      this.C = a;
      this.g = b;
      this.j = c;
      this.l = d;
    }
  };
  function eF(a) {
    return (a.googPageScrollPreventerInfo = a.googPageScrollPreventerInfo || {
      previousWindowScroll: null,
      activePageScrollPreventers: new Set(),
    });
  }
  function hF(a) {
    return a.googPageScrollPreventerInfo &&
      a.googPageScrollPreventerInfo.activePageScrollPreventers.size > 0
      ? !0
      : !1;
  }
  function iF(a, b) {
    return jF(`#${a}`, b);
  }
  function kF(a, b) {
    return jF(`.${a}`, b);
  }
  function jF(a, b) {
    b = b.querySelector(a);
    if (!b) throw Error(`Element (${a}) does not exist`);
    return b;
  }
  function lF(a, b) {
    const c = a.document.createElement("div");
    xw(a, c);
    a = c.attachShadow({ mode: "open" });
    b && c.classList.add(b);
    return { mc: c, shadowRoot: a };
  }
  function mF(a, b) {
    b = lF(a, b);
    a.document.body.appendChild(b.mc);
    return b;
  }
  function nF(a, b) {
    const c = new P(b.X);
    Ot(b, !0, () => void c.g(!0));
    Ot(b, !1, () => {
      a.setTimeout(() => {
        b.X || c.g(!1);
      }, 700);
    });
    return Jt(c);
  }
  function oF(a) {
    var b = {},
      c = a.jf,
      d = a.Qh,
      e = a.ef;
    const f = a.Te,
      g = a.ri,
      h = a.zIndex,
      k = a.sg;
    a = a.Kb;
    b = b && b.ee;
    c =
      "<style" +
      (b ? ' nonce="' + V(AE(b)) + '"' : "") +
      ">#hd-drawer-container {position: fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " +
      W(h) +
      "; pointer-events: none;}#hd-drawer-container.hd-revealed {pointer-events: auto;}#hd-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.hd-revealed > #hd-modal-background {opacity: 0.5;}#hd-drawer {position: absolute; top: 0; height: 100%; width: " +
      W(c) +
      "; background-color: white; display: flex; flex-direction: column; box-sizing: border-box; padding-bottom: ";
    d = d ? (a ? 20 : 16) : 0;
    c +=
      W(d) +
      "px; transition: transform " +
      W(k) +
      "s ease-in-out;" +
      (e
        ? "left: 0; border-top-right-radius: " +
          W(d) +
          "px; border-bottom-right-radius: " +
          W(d) +
          "px; transform: translateX(-100%);"
        : "right: 0; border-top-left-radius: " +
          W(d) +
          "px; border-bottom-left-radius: " +
          W(d) +
          "px; transform: translateX(100%);") +
      "}.hd-revealed > #hd-drawer {transform: translateY(0);}#hd-control-bar {" +
      (a ? "height: 24px;" : "padding: 5px;") +
      "}.hd-control-button {border: none; background: none; cursor: pointer;" +
      (a ? "" : "padding: 5px;") +
      "}#hd-back-arrow-button {" +
      (e ? "float: right;" : "float: left;") +
      "}#hd-close-button {" +
      (e ? "float: left;" : "float: right;") +
      '}#hd-content-container {flex-grow: 1; overflow: auto;}#hd-content-container::-webkit-scrollbar * {background: transparent;}.hd-hidden {visibility: hidden;}</style><div id="hd-drawer-container" class="hd-hidden" aria-modal="true" role="dialog" tabindex="0"><div id="hd-modal-background"></div><div id="hd-drawer"><div id="hd-control-bar"><button id="hd-back-arrow-button" class="hd-control-button hd-hidden" aria-label="' +
      V(g) +
      '">';
    e = a ? "#5F6368" : "#444746";
    c +=
      '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="' +
      V(e) +
      '"><path d="m12 20-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825l5.6 5.6Z"/></svg></button><button id="hd-close-button" class="hd-control-button" aria-label="' +
      V(f) +
      '"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="' +
      V(e) +
      '"><path d="M6.4 19 5 17.6 10.6 12 5 6.4 6.4 5 12 10.6 17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4Z"/></svg></button></div><div id="hd-content-container"></div></div></div>';
    return YD(c);
  }
  function pF(a) {
    a = a.top;
    if (!a) return null;
    try {
      var b = a.history;
    } catch (c) {
      b = null;
    }
    b = b && b.pushState && typeof b.pushState === "function" ? b : null;
    if (!b) return null;
    if (a.googNavStack) return a.googNavStack;
    b = new qF(a, b);
    b.init();
    return b ? (a.googNavStack = b) : null;
  }
  function rF(a, b) {
    return b ? (b.googNavStackId === a.j ? b : null) : null;
  }
  function sF(a, b) {
    for (let c = b.length - 1; c >= 0; --c) {
      const d = c === 0;
      a.M.requestAnimationFrame(() => void b[c].Om({ isFinal: d }));
    }
  }
  function tF(a, b) {
    b = Ya(a.stack, b, (c, d) => c - d.Vi.googNavStackStateId);
    if (b >= 0) return a.stack.splice(b, a.stack.length - b);
    b = -b - 1;
    return a.stack.splice(b, a.stack.length - b);
  }
  class qF extends O {
    constructor(a, b) {
      super();
      this.M = a;
      this.history = b;
      this.stack = [];
      this.j = (Math.random() * 1e9) >>> 0;
      this.A = 0;
      this.l = (c) => {
        (c = rF(this, c.state))
          ? sF(this, tF(this, c.googNavStackStateId + 0.5))
          : sF(this, this.stack.splice(0, this.stack.length));
      };
    }
    pushEvent() {
      const a = { googNavStackId: this.j, googNavStackStateId: this.A++ },
        b = new Promise((c) => {
          this.stack.push({ Om: c, Vi: a });
        });
      this.history.pushState(a, "");
      return {
        navigatedBack: b,
        triggerNavigateBack: () => {
          const c = tF(this, a.googNavStackStateId);
          var d;
          if ((d = c.length > 0)) {
            d = c[0].Vi;
            const e = rF(this, this.history.state);
            d =
              e &&
              e.googNavStackId === d.googNavStackId &&
              e.googNavStackStateId === d.googNavStackStateId;
          }
          d && this.history.go(-c.length);
          sF(this, c);
        },
      };
    }
    init() {
      this.M.addEventListener("popstate", this.l);
    }
    g() {
      this.M.removeEventListener("popstate", this.l);
      super.g();
    }
  }
  function uF(a) {
    return (a = pF(a)) ? new vF(a) : null;
  }
  function wF(a) {
    if (!a.j) {
      var { navigatedBack: b, triggerNavigateBack: c } = a.A.pushEvent();
      a.j = c;
      b.then(() => {
        a.j && !a.B && ((a.j = null), Ut(a.l));
      });
    }
  }
  var vF = class extends O {
    constructor(a) {
      super();
      this.A = a;
      this.l = new Vt();
      this.j = null;
    }
  };
  function xF(a, b, c) {
    var d = c.Mg ? null : new aF(a);
    const e = NE(new SE(a), c.zIndex - 1);
    b = yF(a, b, c);
    d = new zF(a, b, d, c.me, bF(a), e);
    d.init();
    (c.Hi || c.Hi === void 0) && AF(d);
    c.ie &&
      ((a = uF(a))
        ? BF(d, a, c.Dh)
        : c.Dh?.(Error("Unable to create closeNavigator")));
    return d;
  }
  function AF(a) {
    a.D = (b) => {
      b.key === "Escape" && a.j.X && a.collapse();
    };
    a.C.document.body.addEventListener("keydown", a.D);
  }
  function BF(a, b, c) {
    Ot(a.j, !0, () => {
      try {
        wF(b);
      } catch (d) {
        c?.(d);
      }
    });
    Ot(a.j, !1, () => {
      try {
        b.j && (b.j(), (b.j = null));
      } catch (d) {
        c?.(d);
      }
    });
    St(b.l).listen(() => void a.collapse());
    Bt(a, b);
  }
  function CF(a) {
    if (a.B) throw Error("Accessing domItems after disposal");
    return a.F;
  }
  function DF(a) {
    a.C.setTimeout(() => {
      a.j.X && CF(a).qb.focus();
    }, 500);
  }
  function EF(a) {
    const { Ch: b, Ik: c } = CF(a);
    b.addEventListener("click", () => void a.collapse());
    c.addEventListener("click", () => void a.collapse());
  }
  function FF(a) {
    Ot(a.l, !1, () => {
      CF(a).qb.classList.add("hd-hidden");
    });
  }
  var zF = class extends O {
    constructor(a, b, c, d = !0, e, f) {
      super();
      this.C = a;
      this.F = b;
      this.A = c;
      this.me = d;
      this.j = new P(!1);
      this.l = nF(a, this.j);
      Ot(this.l, !0, () => {
        dF(e);
        TE(f);
      });
      Ot(this.l, !1, () => {
        gF(e);
        UE(f);
      });
    }
    show({ Fi: a = !1 } = {}) {
      if (this.B) throw Error("Cannot show drawer after disposal");
      CF(this).qb.classList.remove("hd-hidden");
      zt(this.C);
      CF(this).qb.classList.add("hd-revealed");
      this.j.g(!0);
      this.A && ($E(this.A, CF(this).nc.mc), this.me && DF(this));
      a &&
        Ot(this.l, !1, () => {
          this.dispose();
        });
    }
    collapse() {
      CF(this).qb.classList.remove("hd-revealed");
      this.j.g(!1);
      this.A?.bg();
    }
    isVisible() {
      return this.l;
    }
    init() {
      EF(this);
      FF(this);
    }
    g() {
      this.D && this.C.document.body.removeEventListener("keydown", this.D);
      const a = this.F.nc.mc,
        b = a.parentNode;
      b && b.removeChild(a);
      this.A?.bg();
      super.g();
    }
  };
  function yF(a, b, c) {
    const d = mF(a, c.Ng),
      e = d.shadowRoot;
    e.appendChild(
      cl(
        new Nk(a.document),
        TD(
          oF({
            jf: c.jf,
            Qh: c.Qh ?? !0,
            ef: c.ef || !1,
            Te: c.Te,
            ri: c.ri || "",
            zIndex: c.zIndex,
            sg: 0.5,
            Kb: c.Kb || !1,
          })
        )
      )
    );
    const f = iF("hd-drawer-container", e);
    c.Ug?.j((g) => {
      f.setAttribute("aria-label", g);
    });
    c = iF("hd-content-container", e);
    c.appendChild(b);
    zt(a);
    return {
      qb: f,
      Ch: iF("hd-modal-background", e),
      Fg: c,
      Ik: iF("hd-close-button", e),
      Mq: iF("hd-back-arrow-button", e),
      nc: d,
    };
  }
  function GF(a) {
    {
      var b = {};
      var c = a.wm;
      const f = a.xl;
      var d = a.zIndex,
        e = a.sg;
      a = a.Kb;
      b = b && b.ee;
      d = qE(
        tE(),
        "<style" +
          (b ? ' nonce="' + V(AE(b)) + '"' : "") +
          ">#ved-drawer-container {position:  fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " +
          W(d) +
          "; pointer-events: none;}#ved-drawer-container.ved-revealed {pointer-events: auto;}#ved-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.ved-revealed > #ved-modal-background {opacity: 0.5;}#ved-ui-revealer {position: absolute; left: 0; bottom: 0; width: 100%; height: " +
          W(f) +
          "%; transition: transform " +
          W(e) +
          "s ease-in-out; transform: translateY(100%);}#ved-ui-revealer.ved-no-animation {transition-property: none;}.ved-revealed > #ved-ui-revealer {transform: translateY(0);}#ved-scroller-container {position: absolute; left: 0; bottom: 0; width: 100%; height: 100%; clip-path: inset(0 0 -50px 0 round "
      );
      e = a ? 20 : 28;
      qE(
        rE(
          qE(
            rE(
              qE(
                d,
                W(e) +
                  "px);}#ved-scroller {position: relative; width: 100%; height: 100%; overflow-y: scroll; -ms-overflow-style: none; scrollbar-width: none; overflow-y: scroll; overscroll-behavior: none; scroll-snap-type: y mandatory;}#ved-scroller.ved-scrolling-paused {overflow: hidden;}#ved-scroller.ved-no-snap {scroll-snap-type: none;}#ved-scroller::-webkit-scrollbar {display: none;}#ved-scrolled-stack {width: 100%; height: 100%; overflow: visible;}#ved-scrolled-stack.ved-with-background {background-color: white;}.ved-snap-point-top {scroll-snap-align: start;}.ved-snap-point-bottom {scroll-snap-align: end;}#ved-fully-closed-anchor {height: " +
                  W((c / f) * 100) +
                  "%;}.ved-with-background #ved-fully-closed-anchor {background-color: white;}#ved-partially-extended-anchor {height: " +
                  W(((f - c) / f) * 100) +
                  "%;}.ved-with-background #ved-partially-extended-anchor {background-color: white;}#ved-moving-handle-holder {scroll-snap-stop: always;}.ved-with-background #ved-moving-handle-holder {background-color: white;}#ved-fixed-handle-holder {position: absolute; left: 0; top: 0; width: 100%;}#ved-visible-scrolled-items {display: flex; flex-direction: column; min-height: " +
                  W((c / f) * 100) +
                  "%;}#ved-content-background {width: 100%; flex-grow: 1; padding-top: 1px; margin-top: -1px; background-color: white;}#ved-content-sizer {overflow: hidden; width: 100%; height: 100%;}#ved-content-container {width: 100%;}#ved-over-scroll-block {display: flex; flex-direction: column; position: absolute; bottom: 0; left: 0; width: 100%; height: " +
                  W((c / f) * 100) +
                  "%; pointer-events: none;}#ved-over-scroll-handle-spacer {height: " +
                  W(80) +
                  "px;}#ved-over-scroll-background {flex-grow: 1; background-color: white;}.ved-handle {align-items: flex-end; border-radius: " +
                  W(e) +
                  "px " +
                  W(e) +
                  "px 0 0; background: white; display: flex; height: " +
                  W(30) +
                  "px; justify-content: center; cursor: grab;}.ved-handle-icon {" +
                  (a
                    ? "background: #dadce0; width: 50px;"
                    : "background: #747775; opacity: 0.4; width: 32px;") +
                  'border-radius: 2px; height: 4px; margin-bottom: 8px;}.ved-hidden {visibility: hidden;}</style><div id="ved-drawer-container" class="ved-hidden" aria-modal="true" role="dialog" tabindex="0"><div id="ved-modal-background"></div><div id="ved-ui-revealer"><div id="ved-over-scroll-block" class="ved-hidden"><div id=\'ved-over-scroll-handle-spacer\'></div><div id=\'ved-over-scroll-background\'></div></div><div id="ved-scroller-container"><div id="ved-scroller"><div id="ved-scrolled-stack"><div id="ved-fully-closed-anchor" class="ved-snap-point-top"></div><div id="ved-partially-extended-anchor" class="ved-snap-point-top"></div><div id="ved-visible-scrolled-items"><div id="ved-moving-handle-holder" class="ved-snap-point-top">'
              ),
              HF("ved-moving-handle")
            ),
            '</div><div id="ved-content-background"><div id="ved-content-sizer" class="ved-snap-point-bottom"><div id="ved-content-container"></div></div></div></div></div></div></div><div id="ved-fixed-handle-holder" class="ved-hidden">'
          ),
          HF("ved-fixed-handle")
        ),
        "</div></div></div>"
      );
      c = d;
    }
    return c;
  }
  function HF(a) {
    return YD(
      '<div class="ved-handle" id="' +
        V(a) +
        '"><div class="ved-handle-icon"></div></div>'
    );
  }
  function IF(a) {
    return iu(a.g).map((b) => (b ? JF(a, b) : 0));
  }
  function JF(a, b) {
    switch (a.direction) {
      case 0:
        return KF(-b.Wj);
      case 1:
        return KF(-b.Vj);
      default:
        throw Error(`Unhandled direction: ${a.direction}`);
    }
  }
  function LF(a) {
    return ku(a.g).map((b) => JF(a, b));
  }
  var MF = class {
    constructor(a) {
      this.g = a;
      this.direction = 0;
    }
  };
  function KF(a) {
    return a === 0 ? 0 : a;
  }
  function NF(a) {
    if (a.B) throw Error("Accessing domItems after disposal");
    return a.F;
  }
  function OF(a) {
    a.C.setTimeout(() => {
      a.j.X && NF(a).qb.focus();
    }, 500);
  }
  function PF(a) {
    NF(a).qb.classList.remove("ved-hidden");
    zt(a.C);
    const { Ka: b, dc: c } = NF(a);
    c.getBoundingClientRect().top <= b.getBoundingClientRect().top || QF(a);
    NF(a).qb.classList.add("ved-revealed");
    a.j.g(!0);
    a.l && ($E(a.l, NF(a).nc.mc), a.me && OF(a));
  }
  function RF(a) {
    return nF(a.C, a.j);
  }
  function SF(a, b) {
    const c = new P(b());
    St(a.L).listen(() => void c.g(b()));
    return Jt(c);
  }
  function TF(a) {
    const { Ka: b, Kf: c } = NF(a);
    return SF(
      a,
      () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top
    );
  }
  function UF(a) {
    const { Ka: b, Kf: c } = NF(a);
    return SF(
      a,
      () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top - 1
    );
  }
  function VF(a) {
    const { Ka: b } = NF(a);
    return SF(a, () => b.scrollTop === b.scrollHeight - b.clientHeight);
  }
  function WF(a) {
    return Kt(TF(a), VF(a));
  }
  function XF(a) {
    const { Ka: b, dc: c } = NF(a);
    return SF(
      a,
      () => c.getBoundingClientRect().top < b.getBoundingClientRect().top - 1
    );
  }
  function QF(a) {
    NF(a).dc.classList.add("ved-snap-point-top");
    var b = YF(a, NF(a).dc);
    NF(a).Ka.scrollTop = b;
    ZF(a);
  }
  function $F(a) {
    Mt(TF(a), !0, () => {
      const { Oi: b, Fe: c } = NF(a);
      b.classList.remove("ved-hidden");
      c.classList.add("ved-with-background");
    });
    Mt(TF(a), !1, () => {
      const { Oi: b, Fe: c } = NF(a);
      b.classList.add("ved-hidden");
      c.classList.remove("ved-with-background");
    });
  }
  function aG(a) {
    const b = pu(a.C, NF(a).Fg);
    su(b).j(() => void bG(a));
    Bt(a, b);
  }
  function cG(a) {
    Mt(dG(a), !0, () => {
      NF(a).rj.classList.remove("ved-hidden");
    });
    Mt(dG(a), !1, () => {
      NF(a).rj.classList.add("ved-hidden");
    });
  }
  function eG(a) {
    const b = () => void Ut(a.H),
      { Ch: c, dc: d, wl: e } = NF(a);
    c.addEventListener("click", b);
    d.addEventListener("click", b);
    e.addEventListener("click", b);
    Ot(fG(a), !0, b);
  }
  function gG(a) {
    Ot(RF(a), !1, () => {
      QF(a);
      NF(a).qb.classList.add("ved-hidden");
    });
  }
  function ZF(a) {
    Nt(a.A, !1, () => void Ut(a.L));
  }
  function bG(a) {
    if (!a.A.X) {
      var { Bi: b, Fg: c } = NF(a),
        d = c.getBoundingClientRect().height;
      d = Math.max(hG(a), d);
      a.A.g(!0);
      var e = iG(a);
      b.style.setProperty("height", `${d}px`);
      e();
      a.C.requestAnimationFrame(() => {
        a.C.requestAnimationFrame(() => {
          a.A.g(!1);
        });
      });
    }
  }
  function dG(a) {
    const { Ka: b, dc: c } = NF(a);
    return SF(
      a,
      () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top
    );
  }
  function fG(a) {
    return It(a.D.map(Vu), jG(a));
  }
  function jG(a) {
    return SF(a, () => NF(a).Ka.scrollTop === 0);
  }
  function YF(a, b) {
    ({ Fe: a } = NF(a));
    a = a.getBoundingClientRect().top;
    return b.getBoundingClientRect().top - a;
  }
  function kG(a, b) {
    a.D.g(!0);
    const { Fe: c, Ka: d } = NF(a);
    d.scrollTop = 0;
    d.classList.add("ved-scrolling-paused");
    c.style.setProperty("margin-top", `-${b}px`);
    return () => void jH(a, b);
  }
  function jH(a, b) {
    const { Fe: c, Ka: d } = NF(a);
    c.style.removeProperty("margin-top");
    d.classList.remove("ved-scrolling-paused");
    NF(a).Ka.scrollTop = b;
    ZF(a);
    a.D.g(!1);
  }
  function iG(a) {
    const b = NF(a).Ka.scrollTop;
    kG(a, b);
    return () => void jH(a, b);
  }
  function hG(a) {
    const { Ka: b, Kf: c, Bi: d, dc: e } = NF(a);
    a = b.getBoundingClientRect();
    const f = c.getBoundingClientRect();
    var g = d.getBoundingClientRect();
    const h = e.getBoundingClientRect();
    g = g.top - f.top;
    return Math.max(
      a.height - h.height - g,
      Math.min(a.height, a.bottom - f.top) - g
    );
  }
  var kH = class extends O {
    constructor(a, b, c, d, e = !0) {
      super();
      this.C = a;
      this.F = b;
      this.T = c;
      this.l = d;
      this.me = e;
      this.H = new Vt();
      this.L = new Vt();
      this.j = new P(!1);
      this.D = new P(!1);
      this.A = new P(!1);
    }
    init() {
      QF(this);
      $F(this);
      aG(this);
      cG(this);
      eG(this);
      gG(this);
      NF(this).Ka.addEventListener("scroll", () => void ZF(this));
    }
    g() {
      const a = this.F.nc.mc,
        b = a.parentNode;
      b && b.removeChild(a);
      this.l?.bg();
      super.g();
    }
  };
  function lH(a, b, c) {
    const d = mF(a, c.Ng),
      e = d.shadowRoot;
    e.appendChild(
      cl(
        new Nk(a.document),
        TD(
          GF({
            wm: c.sj * 100,
            xl: c.Pi * 100,
            zIndex: c.zIndex,
            sg: 0.5,
            Kb: c.Kb || !1,
          })
        )
      )
    );
    const f = iF("ved-drawer-container", e);
    c.Ug?.j((g) => {
      f.setAttribute("aria-label", g);
    });
    c = iF("ved-content-container", e);
    c.appendChild(b);
    zt(a);
    return {
      qb: f,
      Ch: iF("ved-modal-background", e),
      Qj: iF("ved-ui-revealer", e),
      Ka: iF("ved-scroller", e),
      Fe: iF("ved-scrolled-stack", e),
      wl: iF("ved-fully-closed-anchor", e),
      dc: iF("ved-partially-extended-anchor", e),
      Bi: iF("ved-content-sizer", e),
      Fg: c,
      Tq: iF("ved-moving-handle", e),
      Kf: iF("ved-moving-handle-holder", e),
      rl: iF("ved-fixed-handle", e),
      Oi: iF("ved-fixed-handle-holder", e),
      rj: iF("ved-over-scroll-block", e),
      nc: d,
    };
  }
  function mH(a, b, c) {
    var d = NE(new SE(a), c.zIndex - 1);
    b = lH(a, b, c);
    const e = c.Mg ? null : new aF(a);
    var f = b.rl;
    f = new lu(new cu(a, f), new $t(f));
    var g = f.g;
    g.A.addEventListener("mousedown", g.F);
    g.B.addEventListener("mouseup", g.D);
    g.B.addEventListener("mousemove", g.J, { passive: !1 });
    g = f.j;
    g.j.addEventListener("touchstart", g.J);
    g.j.addEventListener("touchend", g.A);
    g.j.addEventListener("touchmove", g.D, { passive: !1 });
    b = new kH(a, b, new MF(f), e, c.me);
    b.init();
    d = new nH(a, b, bF(a), d);
    Bt(d, b);
    d.init();
    c.ie &&
      ((a = uF(a))
        ? oH(d, a, c.Dh)
        : c.Dh?.(Error("Unable to create closeNavigator")));
    return d;
  }
  function oH(a, b, c) {
    Ot(a.j.j, !0, () => {
      try {
        wF(b);
      } catch (d) {
        c?.(d);
      }
    });
    Ot(a.j.j, !1, () => {
      try {
        b.j && (b.j(), (b.j = null));
      } catch (d) {
        c?.(d);
      }
    });
    St(b.l).listen(() => void a.collapse());
    Bt(a, b);
  }
  function pH(a) {
    Ot(It(WF(a.j), XF(a.j)), !0, () => {
      NF(a.j).dc.classList.remove("ved-snap-point-top");
    });
    Mt(UF(a.j), !0, () => {
      NF(a.j).Ka.classList.add("ved-no-snap");
    });
    Mt(UF(a.j), !1, () => {
      NF(a.j).Ka.classList.remove("ved-no-snap");
    });
    Ot(UF(a.j), !1, () => {
      var b = a.j;
      var c = NF(b).Kf;
      c = kG(b, YF(b, c));
      b.C.setTimeout(c, 100);
    });
  }
  function qH(a) {
    const b = a.j.T;
    IF(b).listen((c) => {
      c = -c;
      if (c > 0) {
        const { Qj: d } = NF(a.j);
        d.classList.add("ved-no-animation");
        d.style.setProperty("transform", `translateY(${c}px)`);
      } else
        ({ Qj: c } = NF(a.j)),
          c.classList.remove("ved-no-animation"),
          c.style.removeProperty("transform");
    });
    LF(b).listen((c) => {
      -c > 30 && a.collapse();
    });
  }
  var nH = class extends O {
    constructor(a, b, c, d) {
      super();
      this.C = a;
      this.j = b;
      Ot(RF(b), !0, () => {
        dF(c);
        TE(d);
      });
      Ot(RF(b), !1, () => {
        gF(c);
        UE(d);
      });
    }
    show({ Fi: a = !1 } = {}) {
      if (this.B) throw Error("Cannot show drawer after disposal");
      PF(this.j);
      a &&
        Ot(RF(this.j), !1, () => {
          this.dispose();
        });
    }
    collapse() {
      var a = this.j;
      NF(a).qb.classList.remove("ved-revealed");
      a.j.g(!1);
      a.l?.bg();
    }
    isVisible() {
      return RF(this.j);
    }
    init() {
      St(this.j.H).listen(() => {
        this.collapse();
      });
      pH(this);
      qH(this);
      zt(this.C);
    }
  };
  function rH(a, b) {
    return Zd() === 2
      ? mH(a.C, b, { sj: 0.95, Pi: 0.95, zIndex: 2147483645, ie: !0, Kb: !0 })
      : xF(a.C, b, {
          jf: "min(65vw, 768px)",
          Te: "",
          ef: !1,
          zIndex: 2147483645,
          ie: !0,
          Qh: !1,
          Kb: !0,
        });
  }
  function sH(a) {
    ((d, e) => {
      d[e] =
        d[e] ||
        function () {
          (d[e].q = d[e].q || []).push(arguments);
        };
      d[e].t = new Date().getTime();
    })(a.C, "_googCsa");
    const b = a.Ve.map((d) => ({ container: d, relatedSearches: 5 })),
      c = {
        pubId: a.Gb,
        styleId: "5134551505",
        hl: a.language,
        fexp: a.A.join(","),
        channel: "AutoRsVariant",
        resultsPageBaseUrl: "http://google.com",
        resultsPageQueryParam: "q",
        relatedSearchTargeting: "content",
        relatedSearchResultClickedCallback: a.T.bind(a),
        relatedSearchUseResultCallback: !0,
        cx: a.pb,
      };
    a.H && (c.adLoadedCallback = a.L.bind(a));
    a.C._googCsa("relatedsearch", c, b);
  }
  function tH(a) {
    a.C.addEventListener("message", (b) => {
      b.origin === "https://www.gstatic.com" &&
        b.data.action === "resize" &&
        (a.j.style.height = `${Math.ceil(b.data.height) + 1}px`);
    });
  }
  var uH = class extends O {
    constructor(a) {
      super();
      this.C = a.C;
      this.Ve = a.Ve;
      this.Cb = a.Cb;
      this.Jh = a.Jh ?? (() => {});
      this.language = a.ej?.g() || "en";
      this.H = T(Lx);
      this.Gb = a.mb.replace("ca", "partner");
      this.D = new Nk(this.C.document);
      this.j = bl(this.D, "IFRAME");
      this.pb = a.Xj.g ? a.Xj.pb : "9d449ff4a772956c6";
      this.A = vs().concat(a.experimentId);
      const b = a.ej?.j() || "Search results from ${website}";
      this.l = new JE({
        R: this.j,
        pb: this.pb,
        nd: "auto-rs-prose",
        Gb: this.Gb,
        Je: "AutoRsVariant",
        location: this.C.location,
        language: this.language,
        Ed: b,
        rb: this.A,
        Ud: !0,
        Lc: a.Lc,
        Ae: !1,
        Ge: !1,
        Td: !0,
        alwaysSetAdSafeHigh: a.alwaysSetAdSafeHigh,
      });
      this.F = rH(this, this.j);
      Bt(this, this.F);
    }
    init() {
      this.Ve.length !== 0 &&
        (this.H ||
          TA(
            1075,
            () => {
              this.l.init();
            },
            this.C
          ),
        TA(
          1076,
          () => {
            const a = bl(this.D, "SCRIPT");
            Nc(a, yd`https://www.google.com/adsense/search/async-ads.js`);
            this.C.document.head.appendChild(a);
          },
          this.C
        ),
        sH(this),
        sw(this.Cb, { sts: "ok" }),
        tH(this));
    }
    L(a, b) {
      b
        ? TA(
            1075,
            () => {
              this.l.init();
            },
            this.C
          )
        : (this.Jh(), uw(this.Cb, "pfns"));
    }
    T(a, b) {
      IE(this.l, a, b);
      this.F.show();
    }
  };
  var vH = class {
    constructor(a, b) {
      this.g = a;
      this.pb = b;
    }
  };
  var wH = class {
    constructor(a, b, c) {
      this.A = a;
      this.j = b;
      this.D = c;
      this.B = "autors-widget";
      this.g = null;
      this.l = new P(null);
    }
    init() {
      var a = this.j.sa;
      a = Dw(a.g.document, a.H || !1);
      const b = this.D.Yb(this.A);
      a.appendChild(b);
      this.B && (a.className = this.B);
      this.g = a;
      OB(this.j, this.g);
      this.l.g(b);
    }
    remove() {
      this.g && this.g.parentNode && this.g.parentNode.removeChild(this.g);
      this.g = null;
      this.l.g(null);
    }
  };
  async function xH(a) {
    await new Promise((b) => {
      setTimeout(() => {
        a.run();
        b();
      });
    });
  }
  function yH(a) {
    if ((!a.bf || !zH(a.config, a.qa, a.Cb)) && AH(x(a.g, Iv, 5), a.Cb)) {
      var b = a.g.j();
      b = HD(a.C, a.config, a.qa, a.Cb, {
        jn: !!b?.D(),
        bf: a.bf,
        Uq: !!b?.g(),
        gn: !!b?.J(),
      });
      b = BH(b, a.C);
      var c = Object.keys(b),
        d = Object.values(b),
        e = pw(a.g.g()?.g()) || 0,
        f = CH(a.g),
        g = String(B(a.g, 13));
      b = x(a.config, Fv, 25)?.g() || !1;
      var h = a.g?.B() || !1;
      if (!b) {
        var k = () => {
          d.forEach((m) => {
            m.remove();
          });
        };
        TA(
          1074,
          () => {
            const m = {
              C: a.C,
              Ve: c,
              mb: a.mb,
              ej: x(a.g, Iv, 5),
              Cb: a.Cb,
              experimentId: e,
              Xj: f,
              Lc: g,
              Jh: k,
              alwaysSetAdSafeHigh: h,
            };
            new uH(m).init();
          },
          a.C
        );
      }
    }
  }
  var DH = class {
    constructor(a, b, c, d, e) {
      this.C = a;
      this.config = c;
      this.mb = d;
      this.qa = e;
      this.bf = !0;
      this.g = x(this.config, Kv, 28);
      this.Cb = new vw(a, b, this.g);
    }
    run() {
      try {
        yH(this);
      } catch (a) {
        uw(this.Cb, "pfere", a);
      }
    }
  };
  function zH(a, b, c) {
    a = pw(x(a, Kv, 28)?.g()?.g()) || 0;
    const d = Tz(Px);
    return d && d.includes(a.toString())
      ? !1
      : (b ? ai(b, 2) : []).length === 0
      ? (uw(c, "pfeu"), !0)
      : !1;
  }
  function AH(a, b) {
    const c = Tz(Ox);
    a = a?.g() || "";
    return c && c.length !== 0 && !c.includes(a.toString())
      ? (uw(b, "pflna"), !1)
      : !0;
  }
  function BH(a, b) {
    const c = {};
    for (let e = 0; e < a.length; e++) {
      var d = a[e];
      const f = "autors-container-" + e.toString(),
        g = b.document.createElement("div");
      g.setAttribute("id", f);
      d = new wH(b, d, new Aw(g));
      d.init();
      c[f] = d;
    }
    return c;
  }
  function CH(a) {
    const b = A(a, 11) || !1;
    a = B(a, 8) || "";
    return new vH(b, a);
  }
  var EH = (a, b) => {
    const c = [];
    x(a, Tv, 18) && c.push(2);
    b.qa && c.push(0);
    if ((b = x(a, Kv, 28))) (b = x(a, Kv, 28)), (b = C(b, 1) == 1);
    b && c.push(1);
    if ((b = x(a, Wv, 34))) (a = x(a, Wv, 34)), (b = A(a, 3));
    b && c.push(7);
    return c;
  };
  var FH = (a) => (a.googlefc = a.googlefc || {}),
    GH = (a) => {
      a = a.googlefc = a.googlefc || {};
      return (a.__fcusi = a.__fcusi || {});
    },
    HH = (a) => {
      a = a.googlefc = a.googlefc || {};
      if (!a.getFloatingToolbarTranslatedMessages) return null;
      if ((a = a.getFloatingToolbarTranslatedMessages())) {
        var b = new Lv();
        b = li(b, 1, a.defaultFloatingToolbarToggleExpansionText);
        b = li(b, 2, a.defaultFloatingToolbarTogglePrivacySettings);
        a = li(b, 3, a.defaultFloatingToolbarDismissPrivacySettings);
        a = ih(a);
      } else a = null;
      return a;
    };
  function IH(a, b) {
    b = b.filter((c) => x(c, hv, 4)?.g() === 5 && Bf(w(c, 8)) === 1);
    b = iB(b, a);
    a = QB(b, a);
    a.sort((c, d) => d.Ea.g - c.Ea.g);
    return a[0] || null;
  }
  function JH({ Wh: a, Vg: b, Eh: c, Xh: d, Wg: e, Fh: f }) {
    const g = [];
    for (let n = 0; n < f; n++)
      for (let p = 0; p < c; p++) {
        var h = p,
          k = c - 1,
          m = n,
          l = f - 1;
        g.push({
          x: a + (k === 0 ? 0 : h / k) * (b - a),
          y: d + (l === 0 ? 0 : m / l) * (e - d),
        });
      }
    return g;
  }
  function KH(a, b) {
    a.hasOwnProperty("_goog_efp_called_") ||
      (a._goog_efp_called_ = a.elementFromPoint(b.x, b.y));
    return a.elementFromPoint(b.x, b.y);
  }
  function LH(a, b) {
    var c = JH({
      Wh: b.left,
      Vg: b.right,
      Eh: 10,
      Xh: b.top,
      Wg: b.bottom,
      Fh: 10,
    });
    b = new Set();
    for (const d of c) (c = MH(a, d)) && b.add(c);
    return b;
  }
  function NH(a, b, c = !1) {
    for (const d of b)
      if ((b = MH(a, d)) && !b.hasAttribute("google-allow-overlap")) {
        if (c) {
          const e = b.getBoundingClientRect();
          if (e.width >= a.M.innerWidth && e.height >= a.M.innerHeight)
            continue;
        }
        return b;
      }
    return null;
  }
  function OH(a, b, c = !1) {
    return NH(a, b, c) != null;
  }
  function PH(a, b, c) {
    if (ml(b, "position") !== "fixed") return null;
    var d =
      b.getAttribute("class") === "GoogleActiveViewInnerContainer" ||
      (rl(b).width <= 1 && rl(b).height <= 1) ||
      (a.g.al && !a.g.al(b))
        ? !0
        : !1;
    a.g.Ni && a.g.Ni(b, c, d);
    return d ? null : b;
  }
  function MH(a, b) {
    var c = KH(a.M.document, b);
    if (c) {
      var d;
      if (!(d = PH(a, c, b)))
        a: {
          d = a.M.document;
          for (c = c.offsetParent; c && c !== d.body; c = c.offsetParent) {
            const e = PH(a, c, b);
            if (e) {
              d = e;
              break a;
            }
          }
          d = null;
        }
      a = d || null;
    } else a = null;
    return a;
  }
  var QH = class {
    constructor(a, b = {}) {
      this.M = a;
      this.g = b;
    }
  };
  var RH = class {
    constructor(a, b, c) {
      this.position = a;
      this.Zc = b;
      this.bh = c;
    }
  };
  function SH(a, b) {
    this.start = a < b ? a : b;
    this.end = a < b ? b : a;
  }
  function TH(a, b, c) {
    var d = Ms(a);
    d = new RH(
      b.Pd.lj(b.zc),
      b.Zc + 2 * b.zc,
      Math.min(d, b.Cf) - b.Pd.kf() + 2 * b.zc
    );
    d = d.position.Ci(a, d.Zc, d.bh);
    var e = Ls(a),
      f = Ms(a);
    c = UH(
      a,
      new dl(
        Gk(d.top, f - 1),
        Gk(d.right, e - 1),
        Gk(d.bottom, f - 1),
        Gk(d.left, e - 1)
      ),
      c
    );
    f = VH(c);
    let g = d.top;
    e = [];
    for (let h = 0; h < f.length; h++)
      f[h].start > g && e.push(new SH(g, f[h].start)), (g = f[h].end);
    g < d.bottom && e.push(new SH(g, d.bottom));
    a = Ms(a);
    d = [];
    for (f = e.length - 1; f >= 0; f--)
      d.push(new SH(a - e[f].end, a - e[f].start));
    a: {
      for (const h of d)
        if (
          ((a = h.start + b.zc),
          a > b.Pd.kf() + b.uh
            ? (a = null)
            : ((d = Math.min(h.end - b.zc, b.Cf) - a),
              (a = d < b.Bh ? null : { position: b.Pd.Uj(a), xe: d })),
          a)
        ) {
          b = a;
          break a;
        }
      b = null;
    }
    return { xg: b, Lq: c };
  }
  function UH(a, b, c) {
    const d = LH(new QH(a), b);
    c.forEach((e) => void d.delete(e));
    return d;
  }
  function VH(a) {
    return [...a].map(WH).sort((b, c) => b.start - c.start);
  }
  function WH(a) {
    a = a.getBoundingClientRect();
    return new SH(a.top, a.bottom);
  }
  function XH({ va: a, jb: b }) {
    return new YH(a, b);
  }
  var YH = class {
    constructor(a, b) {
      this.va = a;
      this.jb = b;
    }
    lj(a) {
      return new YH(this.va - a, this.jb - a);
    }
    Ci(a, b, c) {
      a = Ms(a) - this.va - c;
      return new dl(a, this.jb + b, a + c, this.jb);
    }
    ni(a) {
      a.bottom = `${this.va}px`;
      a.left = `${this.jb}px`;
      a.right = "";
    }
    Qi() {
      return 0;
    }
    kf() {
      return this.va;
    }
    Uj(a) {
      return new YH(a, this.jb);
    }
  };
  function ZH({ va: a, yb: b }) {
    return new $H(a, b);
  }
  var $H = class {
    constructor(a, b) {
      this.va = a;
      this.yb = b;
    }
    lj(a) {
      return new $H(this.va - a, this.yb - a);
    }
    Ci(a, b, c) {
      var d = Ls(a);
      a = Ms(a) - this.va - c;
      d = d - this.yb - b;
      return new dl(a, d + b, a + c, d);
    }
    ni(a) {
      a.bottom = `${this.va}px`;
      a.right = `${this.yb}px`;
      a.left = "";
    }
    Qi() {
      return 1;
    }
    kf() {
      return this.va;
    }
    Uj(a) {
      return new $H(a, this.yb);
    }
  };
  function aI(a) {
    var b = {};
    const c = a.il,
      d = a.Kk,
      e = a.Ck,
      f = a.Sm,
      g = a.Dk;
    a = a.Bk;
    b = b && b.ee;
    return YD(
      '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"' +
        (b ? ' nonce="' + V(AE(b)) + '"' : "") +
        '/><link href="https://fonts.googleapis.com/css?family=Google+Sans+Text:400,500,700" rel="stylesheet"' +
        (b ? ' nonce="' + V(AE(b)) + '"' : "") +
        "><style" +
        (b ? ' nonce="' + V(AE(b)) + '"' : "") +
        ">.ft-styless-button {border: none; background: none; user-select: none; cursor: pointer; border-radius: " +
        W(16) +
        "px;}.ft-container {position: fixed;}.ft-menu {position: absolute; bottom: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; box-shadow: 0 4px 8px 3px rgba(60, 64, 67, 0.15), 0 1px 3px rgba(60, 64, 67, 0.3); min-height: " +
        W(e) +
        "px;}.ft-menu:not(.ft-multiple-buttons *) {transition: padding 0.25s 0.25s, margin 0.25s 0.25s, border-radius 0.25s 0.25s, background-color 0s 0.5s; padding: 0; margin: " +
        W(a) +
        "px; border-radius: " +
        W(16) +
        "px; background-color: rgba(255, 255, 255, 0);}.ft-multiple-buttons .ft-menu {transition: margin 0.25s, padding 0.25s, border-radius 0.25s 0.25s, background-color 0s; padding: " +
        W(a) +
        "px; margin: 0; border-radius: " +
        W(16 + a) +
        "px; background-color: rgba(255, 255, 255, 1);}.ft-left-pos .ft-menu {left: 0;}.ft-right-pos .ft-menu {right: 0;}.ft-container.ft-hidden {transition: opacity 0.25s, visibility 0.5s 0s; opacity: 0; visibility: hidden;}.ft-container:not(.ft-hidden) {transition: opacity 0.25s, bottom 0.5s ease; opacity: 1;}.google-symbols {font-size: 26px; color: #3c4043;}.ft-button-holder {display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 0;}.ft-flip-vertically {transform: scaleY(-1);}.ft-expand-toggle {width: " +
        W(e) +
        "px; height: " +
        W(e) +
        "px;}.ft-collapsed .ft-expand-icon {transition: transform 0.25s; transform: rotate(180deg);}.ft-expand-icon:not(.ft-collapsed *) {transition: transform 0.25s; transform: rotate(0deg);}.ft-button {position: relative; height: " +
        W(e) +
        "px; margin-bottom: " +
        W(g) +
        "px; transform: margin 0.25s 0.25s;}.ft-button.ft-last-button {margin-bottom: 0;}.ft-button > button {position: relative; height: " +
        W(e) +
        "px; width: " +
        W(e) +
        "px; margin: 0; padding: 0; border: none;}.ft-button > button > * {position: relative;}.ft-button .ft-highlighter {position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); height: " +
        W(e - 6) +
        "px; width: " +
        W(e - 6) +
        "px; border-radius: " +
        W(e / 2) +
        "px; background-color: #d2e3fc; opacity: 0; transition: opacity 0.25s;}.ft-button.ft-highlighted .ft-highlighter {opacity: 1;}.ft-button-corner-info {display: none;}.ft-button.ft-show-corner-info .ft-button-corner-info {position: absolute; left: -5px; top: 4px; background: #b3261e; border: 1.5px solid #ffffff; box-shadow: 0 1px 2px rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15); border-radius: 100px; color: ffffff; font-family: 'Google Sans Text'; font-style: normal; font-weight: 700; font-size: 11px; line-height: 14px; min-width: 16px; height: 16px; display: flex; flex-direction: row; justify-content: center; align-items: center;}.ft-separator {display: block; width: 100%; height: " +
        W(f) +
        "px;}.ft-separator > span {display: block; width: 28px; margin: 0 auto 10px auto; height: 0; border-bottom: 1px solid #dadce0;}.ft-expand-toggle-container {height: " +
        W(e) +
        "px;}.ft-hidden {transition: opacity 0.25s, visibility 0.5s 0s; opacity: 0; visibility: hidden;}:not(.ft-hidden) {transition: opacity 0.25s; opacity: 1;}.ft-collapsed .ft-collapsible, .ft-collapsible.ft-collapsed, .ft-expand-toggle-container.ft-collapsed {transition: opacity 0.25s, margin 0.25s 0.25s, height 0.25s 0.25s, overflow 0.25s 0s, visibility 1s 0s; height: 0; opacity: 0; overflow: hidden; visibility: hidden; margin: 0;}.ft-collapsible:not(.ft-collapsed *):not(.ft-collapsed), .ft-expand-toggle-container:not(.ft-collapsed) {transition: margin 0.25s, height 0.25s, opacity 0.25s 0.25s; opacity: 1;}.ft-symbol-font-load-test {position: fixed; left: -1000px; top: -1000px; font-size: 26px; visibility: hidden;}.ft-reg-bubble {position: absolute; bottom: 0; padding: 10px 10px 0 10px; background: #fff; box-shadow: 0 4px 8px 3px rgba(60, 64, 67, 0.15), 0 1px 3px rgba(60, 64, 67, 0.3); border-radius: " +
        W(16) +
        "px; max-width: calc(90vw - " +
        W(e * 2) +
        "px); width: 300px; height: 200px;}.ft-left-pos .ft-reg-bubble {left: " +
        W(e + 10 + a) +
        "px;}.ft-right-pos .ft-reg-bubble {right: " +
        W(e + 10 + a) +
        "px;}.ft-collapsed .ft-reg-bubble, .ft-reg-bubble.ft-collapsed {transition: width 0.25s ease-in 0.25s, height 0.25s ease-in 0.25s, opacity 0.05s linear 0.45s, overflow 0s 0.25s, visibility 0s 0.5s; width: 0; overflow: hidden; opacity: 0; visibility: hidden;}.ft-collapsed .ft-reg-bubble, .ft-reg-bubble.ft-no-messages {height: 0 !important;}.ft-reg-bubble:not(.ft-collapsed *):not(.ft-collapsed) {transition: width 0.25s ease-out, height 0.25s ease-out, opacity 0.05s linear;}.ft-reg-bubble-content {display: flex; flex-direction: row; max-width: calc(90vw - " +
        W(e * 2) +
        'px); width: 300px;}.ft-collapsed .ft-reg-bubble-content {transition: opacity 0.25s; opacity: 0;}.ft-reg-bubble-content:not(.ft-collapsed *) {transition: opacity 0.25s 0.25s; opacity: 1;}.ft-reg-message-holder {flex-grow: 1; display: flex; flex-direction: column; height: auto;}.ft-reg-controls {flex-grow: 0; padding-left: 5px;}.ft-reg-bubble-close-icon {font-size: 16px;}.ft-reg-message {font-family: \'Google Sans Text\'; font-style: normal; font-weight: 400; font-size: 12px; line-height: 14px; padding-bottom: 5px; margin-bottom: 5px; border-bottom: 1px solid #dadce0;}.ft-reg-message:last-of-type {border-bottom: none;}.ft-reg-message-button {border: none; background: none; font-family: \'Google Sans Text\'; color: #0b57d0; font-weight: 500; font-size: 14px; line-height: 22px; cursor: pointer; margin: 0; padding: 0; text-align: start;}.ft-display-none {display: none;}</style><toolbar id="ft-floating-toolbar" class="ft-container ft-hidden"><div class="ft-menu"><div class="ft-button-holder"></div><div class="ft-separator ft-collapsible ft-collapsed"><span></span></div><div class="ft-bottom-button-holder"></div><div class="ft-expand-toggle-container"><button class="ft-expand-toggle ft-styless-button" aria-controls="ft-floating-toolbar" aria-label="' +
        V(c) +
        '"><span class="google-symbols ft-expand-icon" aria-hidden="true">expand_more</span></button></div></div><div id="ft-reg-bubble" class="ft-reg-bubble ft-collapsed ft-no-messages"><div class="ft-reg-bubble-content"><div class="ft-reg-message-holder"></div><div class="ft-reg-controls"><button class="ft-reg-bubble-close ft-styless-button" aria-controls="ft-reg-bubble" aria-label="' +
        V(d) +
        '"><span class="google-symbols ft-reg-bubble-close-icon" aria-hidden="true">close</span></button></div></div></div></toolbar><span inert class="ft-symbol-font-load-test"><span class="ft-symbol-reference google-symbols" aria-hidden="true">keyboard_double_arrow_right</span><span class="ft-text-reference" aria-hidden="true">keyboard_double_arrow_right</span></span>'
    );
  }
  function bI(a) {
    const b = a.googleIconName,
      c = a.backgroundColorCss,
      d = a.iconColorCss;
    return YD(
      '<div class="ft-button ft-collapsible ft-collapsed ft-last-button"><button class="ft-styless-button" aria-label="' +
        V(a.ariaLabel) +
        '" style="background-color: ' +
        V(W(c)) +
        '"><span class="ft-highlighter"></span><span class="google-symbols" style="color: ' +
        V(W(d)) +
        '" aria-hidden="true">' +
        WD(b) +
        '</span></button><span class="ft-button-corner-info"></span></div>'
    );
  }
  const cI = [
    "Google Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
    "Google Sans Text:400,500,700",
  ];
  function dI(a, b) {
    a = new eI(a, b, fI(a, b));
    a.init();
    return a;
  }
  function gI() {
    ({ be: a } = { be: 2 });
    var a;
    return a > 1 ? 50 : 120;
  }
  function hI(a, b, c) {
    iI(a) === 0 && b.classList.remove("ft-collapsed");
    jI(b, c);
    zt(a.C);
    b.classList.remove("ft-collapsed");
    kI(a);
    return () => void lI(a, b, c);
  }
  function mI(a) {
    nI(a.j.ya.ye).length === 0
      ? (a.A.X?.Hm(),
        a.A.g(null),
        a.j.ya.ah.g(!1),
        a.j.ya.Zi.g(!1),
        a.j.ya.oh.g(!1))
      : (a.j.ya.ah.g(!0), oI(a));
  }
  function pI(a, { hk: b = 0, Kq: c = 0 }) {
    b = Math.max(nI(a.j.ld).length + b, 0);
    c = Math.max(nI(a.j.yc).length + c, 0);
    const d = b + c;
    let e = d * 50;
    b > 0 && c > 0 && (e += 11);
    e += Math.max(0, d - 1) * 10;
    d >= a.l.be && (e += 60);
    d > 1 && (e += 10);
    return e;
  }
  function iI(a) {
    const b = a.j.yc;
    return nI(a.j.ld).length + nI(b).length;
  }
  function kI(a) {
    const b = a.j.yc,
      c = a.j.separator;
    nI(a.j.ld).length > 0 && nI(b).length > 0
      ? c.classList.remove("ft-collapsed")
      : c.classList.add("ft-collapsed");
    iI(a) >= a.l.be ? a.j.Yi.g(!0) : a.j.Yi.g(!1);
    iI(a) > 1 ? a.j.Ui.g(!0) : a.j.Ui.g(!1);
    iI(a) > 0 ? a.j.isVisible.g(!0) : a.j.isVisible.g(!1);
    qI(a);
    rI(a);
  }
  function lI(a, b, c) {
    b.classList.contains("ft-removing") ||
      (b.classList.add("ft-removing"),
      b.classList.add("ft-collapsed"),
      kI(a),
      a.C.setTimeout(() => {
        c.removeChild(b);
      }, 750));
  }
  function qI(a) {
    const b = nI(a.j.ld).concat(nI(a.j.yc));
    b.forEach((c) => {
      c.classList.remove("ft-last-button");
    });
    iI(a) >= a.l.be || b[b.length - 1]?.classList.add("ft-last-button");
  }
  function rI(a) {
    const b = nI(a.j.ld)
      .concat(nI(a.j.yc))
      .filter((c) => !c.classList.contains("ft-reg-button"));
    a.H.g(b.length > 0);
  }
  function sI(a) {
    mt(a.j.ya.ye.children, (b) => {
      const c = a.j.ya.Be;
      lI(a, b, a.j.ya.ye);
      const d = c.get(b);
      c.delete(b);
      d?.isDismissed.g(!0);
    });
    mI(a);
  }
  function oI(a) {
    if (!a.A.X) {
      var b = tI(a.C, {
        googleIconName: "verified_user",
        ariaLabel: B(a.l.Mb, 2),
        orderingIndex: 0,
        onClick: () => {
          a.j.ya.Zi.g(!a.j.ya.isVisible.X);
          for (const [, c] of a.j.ya.Be) c.bj = !0;
          a.j.ya.oh.g(!1);
        },
        backgroundColorCss: "#fff",
      });
      b.Pe.classList.add("ft-reg-button");
      hI(a, b.Pe, a.j.yc);
      Pt(b.Tl, a.j.ya.isVisible);
      a.A.g({ Pq: b, Hm: () => void lI(a, b.Pe, a.j.yc) });
    }
  }
  function uI(a) {
    var b = a.j.ya.oh,
      c = b.g;
    a: {
      for ([, d] of a.j.ya.Be)
        if (((a = d), a.showUnlessUserInControl && !a.bj)) {
          var d = !0;
          break a;
        }
      d = !1;
    }
    c.call(b, d);
  }
  function vI(a) {
    a.j.ya.Jk.listen(() => {
      sI(a);
    });
  }
  var eI = class extends O {
    constructor(a, b, c) {
      super();
      this.C = a;
      this.l = b;
      this.j = c;
      this.A = new P(null);
      this.H = new P(!1);
    }
    addButton(a) {
      a = tI(this.C, a);
      return hI(this, a.Pe, this.j.ld);
    }
    addRegulatoryMessage(a) {
      const b = this.j.ya.ye,
        c = wI(this.C, a);
      jI(c.zh, b);
      this.j.ya.Be.set(c.zh, c);
      mI(this);
      return {
        showUnlessUserInControl: () => {
          c.showUnlessUserInControl = !0;
          uI(this);
        },
        hideUnlessUserInControl: () => {
          c.showUnlessUserInControl = !1;
          uI(this);
        },
        isDismissed: Rt(c.isDismissed),
        removeCallback: () => {
          var d = c.zh;
          const e = this.j.ya.ye;
          d.parentNode === e && e.removeChild(d);
          this.j.ya.Be.delete(d);
          mI(this);
        },
      };
    }
    L() {
      return Jt(this.A.map((a) => a != null));
    }
    F() {
      return Jt(this.H);
    }
    D() {
      return [this.j.container];
    }
    g() {
      const a = this.j.nc.mc;
      a.parentNode?.removeChild(a);
      super.g();
    }
    init() {
      zu(this.C, cI);
      Pt(this.j.mn, this.l.Hc);
      this.C.document.body.appendChild(this.j.nc.mc);
      vI(this);
    }
  };
  function fI(a, b) {
    const c = lF(a),
      d = c.shadowRoot;
    d.appendChild(
      cl(
        new Nk(a.document),
        TD(
          aI({ il: B(b.Mb, 1), Kk: B(b.Mb, 3), Ck: 50, Sm: 11, Dk: 10, Bk: 5 })
        )
      )
    );
    const e = kF("ft-container", d),
      f = kF("ft-expand-toggle", d),
      g = kF("ft-expand-toggle-container", d),
      h = new P(null);
    h.j((p) => {
      e.style.zIndex = String(p ?? 2147483647);
    });
    const k = new P(!0);
    Mt(k, !0, () => {
      e.classList.remove("ft-collapsed");
      f.setAttribute("aria-expanded", "true");
    });
    Mt(k, !1, () => {
      e.classList.add("ft-collapsed");
      f.setAttribute("aria-expanded", "false");
    });
    f.addEventListener("click", () => {
      k.g(!k.X);
    });
    const m = new P(!1);
    Mt(m, !0, () => {
      g.classList.remove("ft-collapsed");
      e.classList.add("ft-toolbar-collapsible");
    });
    Mt(m, !1, () => {
      g.classList.add("ft-collapsed");
      e.classList.remove("ft-toolbar-collapsible");
      k.g(!0);
    });
    const l = new P(!1);
    Mt(l, !0, () => {
      e.classList.add("ft-multiple-buttons");
    });
    Mt(l, !1, () => {
      e.classList.remove("ft-multiple-buttons");
    });
    b.position.j((p) => {
      if (p) {
        p.ni(e.style);
        p = p.Qi();
        switch (p) {
          case 0:
            e.classList.add("ft-left-pos");
            e.classList.remove("ft-right-pos");
            break;
          case 1:
            e.classList.add("ft-right-pos");
            e.classList.remove("ft-left-pos");
            break;
          default:
            throw Error(`Unknown HorizontalAnchoring: ${p}`);
        }
        zt(a);
      }
    });
    const n = new P(!1);
    b = It(
      xI(a, d),
      n,
      b.position.map((p) => p !== null)
    );
    Mt(b, !0, () => {
      e.classList.remove("ft-hidden");
    });
    Mt(b, !1, () => {
      e.classList.add("ft-hidden");
    });
    b = yI(a, kF("ft-reg-bubble", d));
    return {
      container: e,
      ld: kF("ft-button-holder", d),
      yc: kF("ft-bottom-button-holder", d),
      separator: kF("ft-separator", d),
      nc: c,
      mn: h,
      qh: k,
      Yi: m,
      Ui: l,
      isVisible: n,
      ya: b,
    };
  }
  function yI(a, b) {
    const c = new P(!1),
      d = new P(!1),
      e = Kt(c, d);
    Mt(e, !0, () => {
      b.classList.remove("ft-collapsed");
    });
    Mt(e, !1, () => {
      b.classList.add("ft-collapsed");
    });
    const f = new P(!1);
    Mt(f, !0, () => {
      b.classList.remove("ft-no-messages");
    });
    Mt(f, !1, () => {
      b.classList.add("ft-no-messages");
    });
    const g = kF("ft-reg-bubble-close", b),
      h = new Vt();
    g.addEventListener("click", () => {
      Ut(h);
    });
    const k = kF("ft-reg-message-holder", b);
    su(pu(a, k)).j(() => {
      b.style.height = `${k.offsetHeight}px`;
    });
    return {
      ye: k,
      Zi: c,
      oh: d,
      isVisible: e,
      ah: f,
      Be: new Map(),
      Jk: St(h),
    };
  }
  function tI(a, b) {
    const c = cl(
      new Nk(a.document),
      TD(
        bI({
          googleIconName: b.googleIconName,
          ariaLabel: b.ariaLabel,
          backgroundColorCss: b.backgroundColorCss || "#e2eaf6",
          iconColorCss: b.iconColorCss || "#3c4043",
        })
      )
    );
    b.buttonExtension?.styleSheet &&
      c.appendChild(b.buttonExtension.styleSheet);
    if (b.cornerNumber !== void 0) {
      const d = Gk(Math.round(b.cornerNumber), 99);
      kF("ft-button-corner-info", c).appendChild(
        a.document.createTextNode(String(d))
      );
      c.classList.add("ft-show-corner-info");
    }
    c.orderingIndex = b.orderingIndex;
    b.onClick && jF("BUTTON", c).addEventListener("click", b.onClick);
    a = new P(!1);
    Mt(a, !0, () => {
      c.classList.add("ft-highlighted");
    });
    Mt(a, !1, () => {
      c.classList.remove("ft-highlighted");
    });
    return { Pe: c, Tl: a };
  }
  function wI(a, b) {
    a = new Nk(a.document);
    var c = YD(
      '<div class="ft-reg-message"><button class="ft-reg-message-button"></button><div class="ft-reg-message-info"></div></div>'
    );
    a = cl(a, TD(c));
    c = kF("ft-reg-message-button", a);
    b.regulatoryMessage.actionButton
      ? (c.appendChild(b.regulatoryMessage.actionButton.buttonText),
        c.addEventListener("click", b.regulatoryMessage.actionButton.onClick))
      : c.classList.add("ft-display-none");
    c = kF("ft-reg-message-info", a);
    b.regulatoryMessage.informationText
      ? c.appendChild(b.regulatoryMessage.informationText)
      : c.classList.add("ft-display-none");
    a.orderingIndex = b.orderingIndex;
    return {
      zh: a,
      showUnlessUserInControl: !1,
      bj: !1,
      isDismissed: new P(!1),
    };
  }
  function jI(a, b) {
    a: {
      var c = Array.from(b.children);
      for (let d = 0; d < c.length; ++d)
        if (c[d].orderingIndex >= a.orderingIndex) {
          c = d;
          break a;
        }
      c = c.length;
    }
    b.insertBefore(a, b.childNodes[c] || null);
  }
  function nI(a) {
    return Array.from(a.children).filter(
      (b) => !b.classList.contains("ft-removing")
    );
  }
  function xI(a, b) {
    const c = new P(!1),
      d = kF("ft-symbol-font-load-test", b);
    b = kF("ft-symbol-reference", d);
    const e = kF("ft-text-reference", d),
      f = pu(a, b);
    Nt(
      su(f).map((g) => g.width > 0 && g.width < e.offsetWidth / 2),
      !0,
      () => {
        c.g(!0);
        d.parentNode?.removeChild(d);
        f.dispose();
      }
    );
    return c;
  }
  function zI(a) {
    const b = new Vt(),
      c = fu(a, 2500, () => void Ut(b));
    return new AI(a, () => void BI(a, () => void c()), St(b));
  }
  function CI(a) {
    const b = new MutationObserver(() => {
      a.j();
    });
    b.observe(a.C.document.documentElement, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["class", "style"],
    });
    Ct(a, () => void b.disconnect());
  }
  function DI(a) {
    a.C.addEventListener("resize", a.j);
    Ct(a, () => void a.C.removeEventListener("resize", a.j));
  }
  var AI = class extends O {
    constructor(a, b, c) {
      super();
      this.C = a;
      this.j = b;
      this.A = c;
      this.l = !1;
    }
  };
  function BI(a, b) {
    b();
    a.setTimeout(b, 1500);
  }
  function EI(a) {
    return a.g[a.g.length - 1];
  }
  var GI = class {
    constructor() {
      this.l = FI;
      this.g = [];
      this.j = new Set();
    }
    add(a) {
      if (this.j.has(a)) return !1;
      const b = Ya(this.g, a, this.l);
      this.g.splice(b >= 0 ? b : -b - 1, 0, a);
      this.j.add(a);
      return !0;
    }
    first() {
      return this.g[0];
    }
    has(a) {
      return this.j.has(a);
    }
    delete(a) {
      Ra(this.g, (b) => b === a);
      return this.j.delete(a);
    }
    clear() {
      this.j.clear();
      return this.g.splice(0, this.g.length);
    }
    size() {
      return this.g.length;
    }
  };
  function HI(a) {
    var b = a.xe.X;
    let c;
    for (; a.l.Ok() > b && (c = a.j.first()); ) {
      var d = a,
        e = c;
      II(d, e);
      d.g.add(e);
    }
    for (; (d = EI(a.g)) && a.l.Cl() <= b; ) JI(a, d);
    for (; (d = EI(a.g)) && (c = a.j.first()) && d.priority > c.priority; )
      (b = a), (e = c), II(b, e), b.g.add(e), JI(a, d);
  }
  function JI(a, b) {
    a.g.delete(b);
    a.j.add(b) && (b.bi = a.l.addButton(b.buttonSpec));
    b.isInToolbar.g(!0);
  }
  function II(a, b) {
    b.bi && b.bi();
    b.bi = void 0;
    a.j.delete(b);
    b.isInToolbar.g(!1);
  }
  var KI = class {
    constructor(a, b) {
      this.xe = a;
      this.l = b;
      this.g = new GI();
      this.j = new GI();
      this.B = 0;
      this.xe.listen(() => void HI(this));
    }
    addButton(a) {
      const b = {
        buttonSpec: a.buttonSpec,
        priority: a.priority,
        ei: this.B++,
        isInToolbar: new P(!1),
      };
      this.g.add(b);
      HI(this);
      return {
        isInToolbar: Rt(Jt(b.isInToolbar)),
        removeCallback: () => {
          II(this, b);
          this.g.delete(b);
          HI(this);
        },
      };
    }
  };
  function FI(a, b) {
    return a.priority === b.priority ? b.ei - a.ei : a.priority - b.priority;
  }
  function LI(a) {
    if (!hF(a.C)) {
      if (a.l.X) {
        const b = ht(a.C);
        if (b > a.j + 100 || b < a.j - 100) a.l.g(!1), (a.j = Os(a.C));
      }
      a.A && a.C.clearTimeout(a.A);
      a.A = a.C.setTimeout(() => void MI(a), 200);
    }
  }
  function MI(a) {
    if (!hF(a.C)) {
      var b = Os(a.C);
      a.j && a.j > b && (a.j = b);
      b = ht(a.C);
      b >= a.j - 100 && ((a.j = Math.max(a.j, b)), a.l.g(!0));
    }
  }
  var NI = class extends O {
    constructor(a) {
      super();
      this.C = a;
      this.l = new P(!1);
      this.j = 0;
      this.A = null;
      this.D = () => void LI(this);
    }
    init() {
      this.C.addEventListener("scroll", this.D);
      this.j = Os(this.C);
      MI(this);
    }
    g() {
      this.C.removeEventListener("scroll", this.D);
      this.l.g(!1);
      super.g();
    }
  };
  function OI(a) {
    if (!a.j) {
      var b = new NI(a.C);
      b.init();
      a.j = Jt(b.l);
      Bt(a, b);
    }
    return a.j;
  }
  function PI(a, b, c) {
    const d = a.l.addRegulatoryMessage(b.messageSpec);
    b.messageSpec.regulatoryMessage.disableFloatingToolbarAutoShow ||
      QI(a, d, c);
    Nt(c, !0, () => {
      d.removeCallback();
    });
  }
  function QI(a, b, c) {
    a = OI(a);
    const d = Mt(a, !0, () => void b.showUnlessUserInControl()),
      e = Mt(a, !1, () => void b.hideUnlessUserInControl());
    Mt(Gt(b.isDismissed), !0, () => {
      d();
      e();
    });
    Nt(c, !0, () => {
      d();
      e();
    });
  }
  var RI = class extends O {
    constructor(a, b) {
      super();
      this.C = a;
      this.l = b;
      this.j = null;
    }
    addRegulatoryMessage(a) {
      const b = new P(!1),
        c = Nt(OI(this), !0, () => {
          PI(this, a, b);
        });
      return {
        removeCallback: () => {
          b.g(!0);
          c();
        },
      };
    }
  };
  function SI(a, b) {
    a.googFloatingToolbarManager ||
      (a.googFloatingToolbarManager = new TI(a, b));
    return a.googFloatingToolbarManager;
  }
  function UI(a) {
    a.j ||
      ((a.j = VI(a.C, a.l, a.Hc)),
      Bt(a, a.j.rd),
      Bt(a, a.j.zj),
      WI(a),
      XI(a, a.j.rd));
    return a.j;
  }
  function YI(a) {
    a.Hc.X === null && a.j?.position.g(ZI(a));
  }
  function $I(a) {
    a.C.requestAnimationFrame(() => void YI(a));
  }
  function ZI(a) {
    var b = [];
    a.j?.rd?.F().A()
      ? (b.push(() => aJ(a)), b.push(() => bJ(a)))
      : (b.push(() => bJ(a)), b.push(() => aJ(a)));
    a.j?.rd?.L()?.A() &&
      b.push(() => {
        const c = Ms(a.C);
        return { position: XH({ va: Math.floor(c / 3), jb: 10 }), xe: 0 };
      });
    for (const c of b) if ((b = c())) return b;
    return null;
  }
  function WI(a) {
    a.C.googFloatingToolbarManagerAsyncPositionUpdate ? $I(a) : YI(a);
  }
  function XI(a, b) {
    const c = zI(a.C);
    c.l || (CI(c), DI(c), (c.l = !0));
    c.A.listen(() => void WI(a));
    Bt(a, c);
    b.L().listen(() => void WI(a));
    b.F().listen(() => void WI(a));
    a.Hc.listen(() => void WI(a));
  }
  function aJ(a) {
    var b = a.C;
    const c = Ms(a.C);
    return TH(
      b,
      {
        Pd: ZH({ va: 50, yb: 10 }),
        uh: Math.floor(c / 3),
        Zc: 60,
        Bh: gI(),
        Cf: Math.floor(c / 2),
        zc: 20,
      },
      [...(a.j?.rd.D() ?? []), a.C.document.body]
    ).xg;
  }
  function bJ(a) {
    var b = a.C;
    const c = Ms(a.C);
    return TH(
      b,
      {
        Pd: XH({ va: 50, jb: 10 }),
        uh: Math.floor(c / 3),
        Zc: 60,
        Bh: gI(),
        Cf: Math.floor(c / 2),
        zc: 40,
      },
      [...(a.j?.rd.D() ?? []), a.C.document.body]
    ).xg;
  }
  class TI extends O {
    constructor(a, b) {
      super();
      this.C = a;
      this.l = b;
      this.j = null;
      this.Hc = cJ(this.C, this);
    }
    addButton(a) {
      return UI(this).nm.addButton(a);
    }
    addRegulatoryMessage(a) {
      return UI(this).zj.addRegulatoryMessage(a);
    }
  }
  function VI(a, b, c) {
    const d = new P(null),
      e = dI(a, {
        be: 2,
        position: d.map((f) => f?.position ?? null),
        Mb: b,
        Hc: c,
      });
    b = new KI(
      d.map((f) => f?.xe || 0),
      {
        addButton: (f) => e.addButton(f),
        Ok: () => pI(e, {}),
        Cl: () => pI(e, { hk: 1 }),
      }
    );
    a = new RI(a, { addRegulatoryMessage: (f) => e.addRegulatoryMessage(f) });
    return { rd: e, position: d, nm: b, zj: a };
  }
  function cJ(a, b) {
    const c = new SE(a),
      d = new P(null),
      e = (f) => void d.g(f);
    Ct(b, () => {
      RE(c, e);
    });
    c.floatingAdsStacking.maxZIndexListeners.push(e);
    e(QE(c));
    return d;
  }
  const dJ = [
    "Google Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
    "Google Sans Text:400,500",
  ];
  function eJ(a, b, c, d, e) {
    a = new fJ(a, b, c, d, e);
    if (a.A) {
      zu(a.C, dJ);
      var f = a.C;
      b = a.message;
      c = lF(f);
      e = c.shadowRoot;
      d = e.appendChild;
      f = new Nk(f.document);
      var g = ((g = {}), g.ee);
      g = YD(
        '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"' +
          (g ? ' nonce="' + V(AE(g)) + '"' : "") +
          '/><link href="https://fonts.googleapis.com/css?family=Google+Sans+Text:400,500" rel="stylesheet"' +
          (g ? ' nonce="' + V(AE(g)) + '"' : "") +
          "><style" +
          (g ? ' nonce="' + V(AE(g)) + '"' : "") +
          '>.ipr-container {font-family: \'Google Sans Text\'; font-style: normal; font-weight: 400; font-size: 12px; line-height: 14px; color: #000; border-top: 2px solid rgb(236, 237, 237); border-bottom: 2px solid rgb(236, 237, 237); background-color: #fff; padding: 5px; margin: 5px 0; text-align: center;}.ipr-button {border: none; background: none; font-family: \'Google Sans Text\'; color: #0b57d0; font-weight: 500; font-size: 14px; line-height: 22px; cursor: pointer; margin: 0; padding: 0;}.ipr-display-none {display: none;}</style><div class="ipr-container"><button class="ipr-button"></button><div class="ipr-info"></div></div>'
      );
      d.call(e, cl(f, TD(g)));
      d = kF("ipr-container", e);
      e = kF("ipr-button", d);
      b.actionButton
        ? (e.appendChild(b.actionButton.buttonText),
          e.addEventListener("click", b.actionButton.onClick))
        : e.classList.add("ipr-display-none");
      d = kF("ipr-info", d);
      b.informationText
        ? d.appendChild(b.informationText)
        : d.classList.add("ipr-display-none");
      a.j = c.mc;
      OB(a.A, a.j);
      a.l && a.l(Op(1));
      gJ(a);
    } else hJ(a);
    return a;
  }
  function gJ(a) {
    const b = new Cu(a.C);
    b.init(2e3);
    Bt(a, b);
    Au(b, () => {
      iJ(a);
      hJ(a);
      b.dispose();
    });
  }
  function hJ(a) {
    const b = SI(a.C, a.D).addRegulatoryMessage({
      messageSpec: { regulatoryMessage: a.message, orderingIndex: 0 },
    });
    Ct(a, () => void b.removeCallback());
    a.l && a.l(Op(2));
  }
  function iJ(a) {
    a.j && (a.j.parentNode?.removeChild(a.j), (a.j = null));
  }
  var fJ = class extends O {
    constructor(a, b, c, d, e) {
      super();
      this.C = a;
      this.A = b;
      this.message = c;
      this.D = d;
      this.l = e;
      this.j = null;
    }
    g() {
      iJ(this);
      super.g();
    }
  };
  var kJ = (a, b, c, d) => jJ(a, b, c, d);
  function jJ(a, b, c, d) {
    const e = eJ(
      a,
      IH(a, d),
      {
        actionButton: { buttonText: a.document.createTextNode(b), onClick: c },
      },
      lJ(a)
    );
    return () => e.dispose();
  }
  function lJ(a) {
    if ((a = HH(a))) return a;
    HC(1234, Error("No messages"));
    return qj(new Lv());
  }
  function mJ(a, b) {
    b && (a.g = kJ(a.j, b.localizedDnsText, () => nJ(a, b), a.B));
  }
  function oJ(a) {
    const b = FH(a.j);
    b.callbackQueue = b.callbackQueue || [];
    GH(a.j).overrideDnsLink = !0;
    b.callbackQueue.push({ INITIAL_US_STATES_DATA_READY: (c) => mJ(a, c) });
  }
  function nJ(a, b) {
    TE(a.l);
    b.openConfirmationDialog((c) => {
      c && a.g && (a.g(), (a.g = null));
      UE(a.l);
    });
  }
  var pJ = class {
    constructor(a, b, c) {
      this.j = a;
      this.l = NE(b, 2147483643);
      this.B = c;
      this.g = null;
    }
  };
  function qJ(a) {
    rJ(
      a.l,
      (b) => {
        var c = a.j,
          d = b.revocationText,
          e = b.attestationText,
          f = b.showRevocationMessage;
        b = IH(c, a.B);
        d = {
          actionButton: {
            buttonText: c.document.createTextNode(d),
            onClick: f,
          },
          informationText: c.document.createTextNode(e),
        };
        e = HH(c);
        e || (HC(1233, Error("No messages")), (e = qj(new Lv())));
        eJ(c, b, d, e);
      },
      () => {
        UE(a.g);
        sJ(a);
      }
    );
  }
  function tJ(a) {
    TE(a.g);
    qJ(a);
  }
  function sJ(a) {
    a.j.__tcfapi
      ? a.j.__tcfapi("addEventListener", 2, (b, c) => {
          c && b.eventStatus == "cmpuishown" ? TE(a.g) : UE(a.g);
        })
      : HC(1250, Error("No TCF API function"));
  }
  var uJ = class {
    constructor(a, b, c, d) {
      this.j = a;
      this.g = NE(b, 2147483643);
      this.B = c;
      this.l = d;
    }
  };
  var vJ = (a) => {
      if (!a || Bf(w(a, 1)) == null) return !1;
      a = C(a, 1);
      switch (a) {
        case 1:
          return !0;
        case 2:
          return !1;
        default:
          throw Error("Unhandled AutoConsentUiStatus: " + a);
      }
    },
    wJ = (a) => {
      if (!a || Bf(w(a, 3)) == null) return !1;
      a = C(a, 3);
      switch (a) {
        case 1:
          return !0;
        case 2:
          return !1;
        default:
          throw Error("Unhandled AutoCcpaUiStatus: " + a);
      }
    },
    xJ = (a) => (a ? A(a, 5) === !0 : !1);
  function yJ(a) {
    let b = a.location.href;
    if (a === a.top) return { url: b, sh: !0 };
    let c = !1;
    const d = a.document;
    d && d.referrer && ((b = d.referrer), a.parent === a.top && (c = !0));
    (a = a.location.ancestorOrigins) &&
      (a = a[a.length - 1]) &&
      b.indexOf(a) === -1 &&
      ((c = !1), (b = a));
    return { url: b, sh: c };
  }
  function zJ(a, b) {
    Jd(a, (c, d) => {
      b[d] = c;
    });
  }
  function AJ(a) {
    if (a === a.top) return 0;
    for (let b = a; b && b !== b.top && Bd(b); b = b.parent) {
      if (a.sf_) return 2;
      if (a.$sf) return 3;
      if (a.inGptIF) return 4;
      if (a.inDapIF) return 5;
    }
    return 1;
  }
  function BJ() {
    if (CJ) return CJ;
    const a = Xm() || window,
      b = a.google_persistent_state_async;
    return b != null &&
      typeof b == "object" &&
      b.S != null &&
      typeof b.S == "object"
      ? (CJ = b)
      : (a.google_persistent_state_async = CJ = new DJ());
  }
  function EJ(a, b, c) {
    b = FJ[b] || `google_ps_${b}`;
    a = a.S;
    const d = a[b];
    return d === void 0 ? ((a[b] = c()), a[b]) : d;
  }
  function GJ(a, b, c) {
    return EJ(a, b, () => c);
  }
  function HJ(a, b, c) {
    return (a.S[FJ[b] || `google_ps_${b}`] = c);
  }
  function IJ(a, b) {
    return HJ(a, b, GJ(a, b, 0) + 1);
  }
  function JJ() {
    var a = BJ();
    return GJ(a, 20, {});
  }
  function KJ() {
    var a = BJ();
    const b = GJ(a, 23, !1);
    b || HJ(a, 23, !0);
    return !b;
  }
  function LJ() {
    var a = BJ();
    const b = GJ(a, 41, !1);
    b || HJ(a, 41, !0);
    return !b;
  }
  function MJ(a) {
    return GJ(a, 24);
  }
  function NJ() {
    var a = BJ();
    return GJ(a, 26);
  }
  function OJ() {
    var a = BJ();
    return GJ(a, 28, []);
  }
  function PJ(a, b) {
    return EJ(a, 39, b);
  }
  var DJ = class {
      constructor() {
        this.S = {};
      }
    },
    CJ = null;
  const FJ = {
    [8]: "google_prev_ad_formats_by_region",
    [9]: "google_prev_ad_slotnames_by_region",
  };
  function QJ(a) {
    return (a.google_ad_modifications = a.google_ad_modifications || {});
  }
  function RJ(a, b) {
    a = QJ(a);
    a.processed_sra_frame_pingbacks = a.processed_sra_frame_pingbacks || {};
    const c = !a.processed_sra_frame_pingbacks[b];
    a.processed_sra_frame_pingbacks[b] = !0;
    return c;
  }
  function SJ(a) {
    return a.google_ad_client
      ? String(a.google_ad_client)
      : QJ(a).head_tag_slot_vars?.google_ad_client ??
          a.document
            .querySelector(".adsbygoogle[data-ad-client]")
            ?.getAttribute("data-ad-client") ??
          "";
  }
  function ns(a, b) {
    a.j.size > 0 || TJ(a);
    const c = a.j.get(0);
    c ? c.push(b) : a.j.set(0, [b]);
  }
  function UJ(a, b, c, d) {
    wl(b, c, d);
    Ct(a, () => xl(b, c, d));
  }
  function VJ(a, b) {
    a.state !== 1 && ((a.state = 1), a.j.size > 0 && WJ(a, b));
  }
  function TJ(a) {
    a.C.document.visibilityState
      ? UJ(a, a.C.document, "visibilitychange", (b) => {
          a.C.document.visibilityState === "hidden" && VJ(a, b);
          a.C.document.visibilityState === "visible" && (a.state = 0);
        })
      : "onpagehide" in a.C
      ? (UJ(a, a.C, "pagehide", (b) => {
          VJ(a, b);
        }),
        UJ(a, a.C, "pageshow", () => {
          a.state = 0;
        }))
      : UJ(a, a.C, "beforeunload", (b) => {
          VJ(a, b);
        });
  }
  function WJ(a, b) {
    for (let c = 9; c >= 0; c--)
      a.j.get(c)?.forEach((d) => {
        d(b);
      });
  }
  var XJ = class extends O {
    constructor(a) {
      super();
      this.C = a;
      this.state = 0;
      this.j = new Map();
    }
  };
  async function YJ(a, b) {
    var c = 10;
    return c <= 0
      ? Promise.reject(Error(`wfc bad input ${c} ${200}`))
      : b()
      ? Promise.resolve()
      : new Promise((d, e) => {
          const f = a.setInterval(() => {
            --c
              ? b() && (a.clearInterval(f), d())
              : (a.clearInterval(f), e(Error(`wfc timed out ${c}`)));
          }, 200);
        });
  }
  function ZJ() {
    return qs($J);
  }
  function aK(a) {
    const b = a.state.pc;
    return b !== null && b !== 0 ? b : (a.state.pc = je(a.C));
  }
  function bK(a) {
    const b = a.state.wpc;
    return b !== null && b !== "" ? b : (a.state.wpc = SJ(a.C));
  }
  function cK(a, b) {
    var c = new Oq();
    var d = aK(a);
    c = ji(c, 1, d);
    d = bK(a);
    c = mi(c, 2, d);
    c = Nq(c, a.state.sd);
    return ji(c, 7, Math.round(b || a.C.performance.now()));
  }
  function dK(a, b, c) {
    b(a.K.Kd.Sd.dd).ib(c);
  }
  function eK(a, b, c) {
    b(a.K.Kd.Sd.dd).Oc(c);
  }
  async function fK(a) {
    await YJ(a.C, () => !(!aK(a) || !bK(a)));
  }
  function gK(a) {
    a.g && (a.state.tar += 1);
  }
  function hK(a) {
    var b = ZJ();
    if (b.g) {
      var c = b.l;
      a(c);
      b.state.cc = zg(c);
    }
  }
  async function iK(a, b, c) {
    if (a.g && c.length && !a.state.lgdp.includes(Number(b))) {
      a.state.lgdp.push(Number(b));
      var d = a.C.performance.now();
      await fK(a);
      var e = a.K,
        f = e.lc;
      a = cK(a, d);
      d = new zp();
      b = H(d, 1, b);
      c = Fh(b, 2, c, Cf);
      c = z(a, 9, Pq, c);
      f.call(e, c);
    }
  }
  async function jK(a, b) {
    await fK(a);
    var c = cK(a);
    b = z(c, 5, Pq, b);
    a.g && !a.state.le.includes(2) && (a.state.le.push(2), a.K.lc(b));
  }
  async function kK(a, b, c) {
    await fK(a);
    var d = a.K,
      e = d.lc;
    a = Nq(cK(a, c), 1);
    b = z(a, 6, Pq, b);
    e.call(d, b);
  }
  async function lK(a, b, c) {
    await fK(a);
    dK(a, (d) => b(d.Ij), c);
  }
  async function mK(a, b, c) {
    await fK(a);
    eK(a, (d) => b(d.Ij), c);
  }
  async function nK(a, b) {
    await fK(a);
    var c = a.K,
      d = c.lc;
    a = Nq(cK(a), 1);
    b = z(a, 13, Pq, b);
    d.call(c, b);
  }
  async function oK(a, b) {
    if (a.g) {
      await fK(a);
      var c = a.K,
        d = c.lc;
      a = cK(a);
      b = z(a, 11, Pq, b);
      d.call(c, b);
    }
  }
  async function pK(a, b) {
    await fK(a);
    var c = a.K,
      d = c.lc;
    a = Nq(cK(a), 1);
    b = z(a, 16, Pq, b);
    d.call(c, b);
  }
  async function qK(a, b) {
    await fK(a);
    var c = a.K,
      d = c.lc;
    a = Nq(cK(a), 1);
    b = z(a, 19, Pq, b);
    d.call(c, b);
  }
  var $J = class {
    constructor(a, b) {
      this.C = Xm() || window;
      this.j = b ?? new XJ(this.C);
      this.K = a ?? new ps(cr(), 100, 100, !0, this.j);
      this.state = EJ(BJ(), 33, () => {
        const c = U(ax);
        return {
          sd: c,
          ssp: c > 0 && Id() < 1 / c,
          pc: null,
          wpc: null,
          cu: null,
          le: [],
          lgdp: [],
          psi: null,
          tar: 0,
          cc: null,
        };
      });
    }
    get g() {
      return this.state.ssp;
    }
    get Wb() {
      return this.state.cu;
    }
    set Wb(a) {
      this.state.cu = a;
    }
    get l() {
      return DC(1227, () => rj(Dp, Ag(this.state.cc || []))) || new Dp();
    }
  };
  var rK = class {
    constructor(a, b, c, d, e) {
      this.j = a;
      this.l = b;
      this.g = c;
      this.A = d;
      this.B = e || null;
    }
    run() {
      if (this.j.adsbygoogle_ama_fc_has_run !== !0) {
        var a = vJ(this.g),
          b = wJ(this.g),
          c = !1;
        a &&
          (tJ(
            new uJ(this.j, this.A, this.B || Nh(this.g, Sv, 4, wh()), this.l)
          ),
          (c = !0));
        b &&
          (oJ(new pJ(this.j, this.A, this.B || Nh(this.g, Sv, 4, wh()))),
          (c = !0));
        hK((d) => {
          d = D(d, 9, !0);
          d = D(d, 10, a);
          D(d, 11, b);
        });
        xJ(this.g) && (c = !0);
        c && (this.l.start(!0), (this.j.adsbygoogle_ama_fc_has_run = !0));
      }
    }
  };
  function sK(a, b, c, d, e, f) {
    try {
      const g = a.g,
        h = Gd("SCRIPT", g);
      h.async = !0;
      Nc(h, b);
      g.head.appendChild(h);
      h.addEventListener("load", () => {
        e();
        d && g.head.removeChild(h);
      });
      h.addEventListener("error", () => {
        c > 0 ? sK(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f());
      });
    } catch (g) {
      f();
    }
  }
  function tK(a, b, c = () => {}, d = () => {}) {
    sK(Mk(a), b, 0, !1, c, d);
  }
  function uK(a = null) {
    a = a || r;
    return a.googlefc || (a.googlefc = {});
  }
  bc(Cs).map((a) => Number(a));
  bc(Ds).map((a) => Number(a));
  const vK = r.URL;
  function wK(a) {
    const b = (c) =>
      encodeURIComponent(c).replace(
        /[!()~']|(%20)/g,
        (d) =>
          ({
            "!": "%21",
            "(": "%28",
            ")": "%29",
            "%20": "+",
            "'": "%27",
            "~": "%7E",
          }[d])
      );
    return Array.from(a, (c) => b(c[0]) + "=" + b(c[1])).join("&");
  }
  function xK(a) {
    var b = new vK(a.location.href).searchParams;
    a = b.get("fcconsent");
    b = b.get("fc");
    return b === "alwaysshow" ? b : a === "alwaysshow" ? a : null;
  }
  function yK(a) {
    const b =
      "ab gdpr consent gdpr_transparency ccpa monetization usnat usfl".split(
        " "
      );
    return (a = new vK(a.location.href).searchParams.get("fctype")) &&
      b.indexOf(a) !== -1
      ? a
      : null;
  }
  function zK(a) {
    var b = new vK(a),
      c = { search: "", hash: "" };
    a = {};
    b &&
      ((a.protocol = b.protocol),
      (a.username = b.username),
      (a.password = b.password),
      (a.hostname = b.hostname),
      (a.port = b.port),
      (a.pathname = b.pathname),
      (a.search = b.search),
      (a.hash = b.hash));
    Object.assign(a, c);
    if (a.port && a.port[0] === ":")
      throw Error("port should not start with ':'");
    a.hash && a.hash[0] != "#" && (a.hash = "#" + a.hash);
    c.search
      ? c.search[0] != "?" && (a.search = "?" + c.search)
      : c.searchParams &&
        ((a.search = "?" + wK(c.searchParams)), (a.searchParams = void 0));
    b = "";
    a.protocol && (b += a.protocol + "//");
    c = a.username;
    var d = a.password;
    b =
      b +
      (c && d ? c + ":" + d + "@" : c ? c + "@" : d ? ":" + d + "@" : "") +
      (a.hostname || "");
    a.port && (b += ":" + a.port);
    b += a.pathname || "";
    b += a.search || "";
    b += a.hash || "";
    a = new vK(b).toString();
    a.charAt(a.length - 1) === "/" && (a = a.substring(0, a.length - 1));
    return a.toString().length <= 1e3 ? a : null;
  }
  function AK(a, b) {
    const c = a.document,
      d = () => {
        if (!a.frames[b])
          if (c.body) {
            const e = Gd("IFRAME", c);
            e.style.display = "none";
            e.style.width = "0px";
            e.style.height = "0px";
            e.style.border = "none";
            e.style.zIndex = "-1000";
            e.style.left = "-1000px";
            e.style.top = "-1000px";
            e.name = b;
            c.body.appendChild(e);
          } else a.setTimeout(d, 5);
      };
    d();
  }
  var BK = Dk(class extends I {});
  function CK(a) {
    if (a.j) return a.j;
    a.T && a.T(a.l) ? (a.j = a.l) : (a.j = Yd(a.l, a.V));
    return a.j ?? null;
  }
  function DK(a) {
    a.A ||
      ((a.A = (b) => {
        try {
          var c = a.L ? a.L(b) : void 0;
          if (c) {
            var d = c.Kh,
              e = a.H.get(d);
            e && (e.zm || a.H.delete(d), e.Ld?.(e.Sk, c.payload));
          }
        } catch (f) {}
      }),
      wl(a.l, "message", a.A));
  }
  function EK(a, b, c) {
    if (CK(a))
      if (a.j === a.l) (b = a.F.get(b)) && b(a.j, c);
      else {
        var d = a.D.get(b);
        if (d && d.ve) {
          DK(a);
          var e = ++a.ca;
          a.H.set(e, { Ld: d.Ld, Sk: d.zf(c), zm: b === "addEventListener" });
          a.j.postMessage(d.ve(c, e), "*");
        }
      }
  }
  var FK = class extends O {
    constructor(a, b, c, d) {
      super();
      this.V = b;
      this.T = c;
      this.L = d;
      this.F = new Map();
      this.ca = 0;
      this.D = new Map();
      this.H = new Map();
      this.A = void 0;
      this.l = a;
    }
    g() {
      delete this.j;
      this.F.clear();
      this.D.clear();
      this.H.clear();
      this.A && (xl(this.l, "message", this.A), delete this.A);
      delete this.l;
      delete this.L;
      super.g();
    }
  };
  const GK = (a, b) => {
      const c = {
        cb: (d) => {
          d = BK(d);
          b.Bb({ de: d });
        },
      };
      b.spsp && (c.spsp = b.spsp);
      a = a.googlefc || (a.googlefc = {});
      a.__fci = a.__fci || [];
      a.__fci.push(b.command, c);
    },
    HK = {
      zf: (a) => a.Bb,
      ve: (a, b) => ({
        __fciCall: { callId: b, command: a.command, spsp: a.spsp || void 0 },
      }),
      Ld: (a, b) => {
        a({ de: b });
      },
    };
  function IK(a) {
    a = BK(a.data.__fciReturn);
    return { payload: a, Kh: qw(Xh(a, 1)) };
  }
  function JK(a, b = !1) {
    if (b) return !1;
    a.l || ((a.j = !!CK(a.caller)), (a.l = !0));
    return a.j;
  }
  function KK(a) {
    return new Promise((b) => {
      JK(a) &&
        EK(a.caller, "getDataWithCallback", {
          command: "loaded",
          Bb: (c) => {
            b(c.de);
          },
        });
    });
  }
  function LK(a, b) {
    JK(a) &&
      EK(a.caller, "getDataWithCallback", {
        command: "prov",
        spsp: pj(b),
        Bb: () => {},
      });
  }
  var MK = class extends O {
    constructor(a) {
      super();
      this.j = this.l = !1;
      this.caller = new FK(a, "googlefcPresent", void 0, IK);
      this.caller.F.set("getDataWithCallback", GK);
      this.caller.D.set("getDataWithCallback", HK);
    }
    g() {
      this.caller.dispose();
      super.g();
    }
  };
  function NK(a) {
    a.addtlConsent !== void 0 &&
      typeof a.addtlConsent !== "string" &&
      (a.addtlConsent = void 0);
    a.gdprApplies !== void 0 &&
      typeof a.gdprApplies !== "boolean" &&
      (a.gdprApplies = void 0);
    return (a.tcString !== void 0 && typeof a.tcString !== "string") ||
      (a.listenerId !== void 0 && typeof a.listenerId !== "number")
      ? 2
      : a.cmpStatus && a.cmpStatus !== "error"
      ? 0
      : 3;
  }
  function OK(a) {
    if (a.gdprApplies === !1) return !0;
    a.internalErrorState === void 0 && (a.internalErrorState = NK(a));
    return a.cmpStatus === "error" || a.internalErrorState !== 0
      ? a.internalBlockOnErrors
        ? (Em({ e: String(a.internalErrorState) }, "tcfe"), !1)
        : !0
      : a.cmpStatus !== "loaded" ||
        (a.eventStatus !== "tcloaded" && a.eventStatus !== "useractioncomplete")
      ? !1
      : !0;
  }
  function PK(a, b = {}) {
    return OK(a)
      ? a.gdprApplies === !1
        ? !0
        : a.tcString === "tcunavailable"
        ? !b.idpcApplies
        : (b.idpcApplies || a.gdprApplies !== void 0 || b.Qq) &&
          (b.idpcApplies ||
            (typeof a.tcString === "string" && a.tcString.length))
        ? QK(a, "1", 0)
        : !0
      : !1;
  }
  function QK(a, b, c) {
    a: {
      if (a.publisher && a.publisher.restrictions) {
        var d = a.publisher.restrictions[b];
        if (d !== void 0) {
          d = d["755"];
          break a;
        }
      }
      d = void 0;
    }
    if (d === 0) return !1;
    let e = c;
    c === 2
      ? ((e = 0), d === 2 && (e = 1))
      : c === 3 && ((e = 1), d === 1 && (e = 0));
    if (e === 0)
      a =
        a.purpose && a.vendor
          ? (c = RK(a.vendor.consents, "755")) &&
            b === "1" &&
            a.purposeOneTreatment &&
            a.publisherCC === "CH"
            ? !0
            : c && RK(a.purpose.consents, b)
          : !0;
    else {
      var f;
      e === 1
        ? (f =
            a.purpose && a.vendor
              ? RK(a.purpose.legitimateInterests, b) &&
                RK(a.vendor.legitimateInterests, "755")
              : !0)
        : (f = !0);
      a = f;
    }
    return a;
  }
  function RK(a, b) {
    return !(!a || !a[b]);
  }
  function SK(a, b, c) {
    return a.gdprApplies === !1 ? !0 : b.every((d) => QK(a, d, c));
  }
  function TK(a) {
    if (a.j) return a.j;
    a.j = Yd(a.l, "__tcfapiLocator");
    return a.j;
  }
  function UK(a) {
    return typeof a.l.__tcfapi === "function" || TK(a) != null;
  }
  function VK(a, b, c, d) {
    c || (c = () => {});
    var e = a.l;
    typeof e.__tcfapi === "function"
      ? ((a = e.__tcfapi), a(b, 2, c, d))
      : TK(a)
      ? (WK(a),
        (e = ++a.L),
        (a.F[e] = c),
        a.j &&
          a.j.postMessage(
            {
              __tcfapiCall: { command: b, version: 2, callId: e, parameter: d },
            },
            "*"
          ))
      : c({}, !1);
  }
  function XK(a, b) {
    let c = { internalErrorState: 0, internalBlockOnErrors: a.D };
    const d = Cb(() => b(c));
    let e = 0;
    a.H !== -1 &&
      (e = setTimeout(() => {
        e = 0;
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, a.H));
    VK(a, "addEventListener", (f) => {
      f &&
        ((c = f),
        (c.internalErrorState = NK(c)),
        (c.internalBlockOnErrors = a.D),
        OK(c)
          ? (c.internalErrorState !== 0 && (c.tcString = "tcunavailable"),
            VK(a, "removeEventListener", null, c.listenerId),
            (f = e) && clearTimeout(f),
            d())
          : (c.cmpStatus === "error" || c.internalErrorState !== 0) &&
            (f = e) &&
            clearTimeout(f));
    });
  }
  function WK(a) {
    if (!a.A) {
      var b = (c) => {
        try {
          var d = (typeof c.data === "string" ? JSON.parse(c.data) : c.data)
            .__tcfapiReturn;
          a.F[d.callId](d.returnValue, d.success);
        } catch (e) {}
      };
      a.A = b;
      wl(a.l, "message", b);
    }
  }
  var YK = class extends O {
    constructor(a, b = {}) {
      super();
      this.j = null;
      this.F = {};
      this.L = 0;
      this.A = null;
      this.l = a;
      this.H = b.timeoutMs ?? 500;
      this.D = b.yk ?? !1;
    }
    g() {
      this.F = {};
      this.A && (xl(this.l, "message", this.A), delete this.A);
      delete this.F;
      delete this.l;
      delete this.j;
      super.g();
    }
    addEventListener(a) {
      let b = { internalBlockOnErrors: this.D };
      const c = Cb(() => a(b));
      let d = 0;
      this.H !== -1 &&
        (d = setTimeout(() => {
          b.tcString = "tcunavailable";
          b.internalErrorState = 1;
          c();
        }, this.H));
      const e = (f, g) => {
        clearTimeout(d);
        f
          ? ((b = f),
            (b.internalErrorState = NK(b)),
            (b.internalBlockOnErrors = this.D),
            (g && b.internalErrorState === 0) ||
              ((b.tcString = "tcunavailable"), g || (b.internalErrorState = 3)))
          : ((b.tcString = "tcunavailable"), (b.internalErrorState = 3));
        a(b);
      };
      try {
        VK(this, "addEventListener", e);
      } catch (f) {
        (b.tcString = "tcunavailable"),
          (b.internalErrorState = 3),
          d && (clearTimeout(d), (d = 0)),
          c();
      }
    }
    removeEventListener(a) {
      a && a.listenerId && VK(this, "removeEventListener", null, a.listenerId);
    }
  };
  function rJ(a, b, c) {
    const d = uK(a.C);
    d.callbackQueue = d.callbackQueue || [];
    d.callbackQueue.push({
      CONSENT_DATA_READY: () => {
        const e = uK(a.C),
          f = new YK(a.C);
        UK(f) &&
          XK(f, (g) => {
            g.cmpId === 300 &&
              g.tcString &&
              g.tcString !== "tcunavailable" &&
              g.gdprApplies &&
              b({
                revocationText: (0, e.getDefaultConsentRevocationText)(),
                closeText: (0, e.getDefaultConsentRevocationCloseText)(),
                attestationText: (0,
                e.getDefaultConsentRevocationAttestationText)(),
                showRevocationMessage: () => {
                  (0, e.showRevocationMessage)();
                },
              });
          });
        c();
      },
    });
  }
  function ZK(a, b = !1, c) {
    const d = {};
    try {
      const f = xK(a.C),
        g = yK(a.C);
      d.fc = f;
      d.fctype = g;
    } catch (f) {}
    let e;
    try {
      e = zK(a.C.location.href);
    } catch (f) {}
    b && e && (d.href = e);
    b = $K(a.g, d);
    tK(
      a.C,
      b,
      () => {},
      () => {}
    );
    c && LK(new MK(a.C), c);
  }
  var aL = class {
    constructor(a, b) {
      this.C = a;
      this.g = b;
      this.ka = null;
    }
    start(a = !1, b) {
      if (this.C === this.C.top)
        try {
          AK(this.C, "googlefcPresent"), ZK(this, a, b);
        } catch (c) {}
    }
  };
  function $K(a, b) {
    a = yd`https://fundingchoicesmessages.google.com/i/${a}`;
    return zd(a, { ...b, ers: 2 });
  }
  const bL = new Set(["ARTICLE", "SECTION"]);
  var cL = class {
    constructor(a) {
      this.g = a;
    }
  };
  function dL(a, b) {
    return Array.from(b.classList).map((c) => `${a}=${c}`);
  }
  function eL(a) {
    return a.classList.length > 0;
  }
  function fL(a) {
    return bL.has(a.tagName);
  }
  var gL = class {
    constructor(a, b) {
      this.g = a;
      this.j = b;
    }
  };
  function hL(a) {
    return sa(a) && a.nodeType == 1 && a.tagName == "FIGURE"
      ? a
      : (a = a.parentNode)
      ? hL(a)
      : null;
  }
  var iL = (a) => {
    var b = a.src;
    const c = a.getAttribute("data-src") || a.getAttribute("data-lazy-src");
    (b && b.startsWith("data:") && c ? c : b || c)
      ? (a.getAttribute("srcset"),
        (b = (b = hL(a))
          ? (b = b.getElementsByTagName("figcaption")[0])
            ? b.textContent
            : null
          : null),
        (a = new gL(a, b || a.getAttribute("alt") || null)))
      : (a = null);
    return a;
  };
  var jL = class {
    constructor() {
      this.map = new Map();
    }
    clear() {
      this.map.clear();
    }
    delete(a, b) {
      const c = this.map.get(a);
      return c
        ? ((b = c.delete(b)), c.size === 0 && this.map.delete(a), b)
        : !1;
    }
    get(a) {
      return [...(this.map.get(a) ?? [])];
    }
    keys() {
      return this.map.keys();
    }
    add(a, b) {
      let c = this.map.get(a);
      c || this.map.set(a, (c = new Set()));
      c.add(b);
    }
    get size() {
      let a = 0;
      for (const b of this.map.values()) a += b.size;
      return a;
    }
    values() {
      const a = this.map;
      return (function () {
        return (function* () {
          for (const b of a.values()) yield* b;
        })();
      })();
    }
    [Symbol.iterator]() {
      const a = this.map;
      return (function () {
        return (function* () {
          for (const [b, c] of a) {
            const d = b,
              e = c;
            for (const f of e) yield [d, f];
          }
        })();
      })();
    }
  };
  function kL(a) {
    return [a[0], [...a[1]]];
  }
  function lL(a) {
    return Array.from(mL(a).map.values())
      .filter((b) => b.size >= 3)
      .map((b) => [...b]);
  }
  function nL(a, b) {
    return b.every((c) => {
      var d = a.g.getBoundingClientRect(c.g);
      if ((d = d.height >= 50 && d.width >= a.A)) {
        var e = a.g.getBoundingClientRect(c.g);
        d = a.B;
        e = new SH(e.left, e.right);
        d = Math.max(d.start, e.start) <= Math.min(d.end, e.end);
      }
      return d && wt(a.l, { oc: c.g, Zb: oL, hd: !0 }) === null;
    });
  }
  function pL(a) {
    return (
      lL(a)
        .sort(qL)
        .find((b) => nL(a, b)) || []
    );
  }
  function mL(a) {
    return rL(
      Array.from(a.C.document.getElementsByTagName("IMG")).map(iL).filter(Xu),
      (b) => {
        var c = [...dL("CLASS_NAME", b.g)],
          d = b.g.parentElement;
        d = [...(d ? dL("PARENT_CLASS_NAME", d) : [])];
        var e = b.g.parentElement?.parentElement;
        e = [...(e ? dL("GRANDPARENT_CLASS_NAME", e) : [])];
        var f = (f = wt(a.j.g, { oc: b.g, Zb: eL }))
          ? dL("NEAREST_ANCESTOR_CLASS_NAME", f)
          : [];
        return [
          ...c,
          ...d,
          ...e,
          ...f,
          ...(b.j ? ["HAS_CAPTION=true"] : []),
          ...(wt(a.j.g, { oc: b.g, Zb: fL })
            ? ["ARTICLE_LIKE_ANCESTOR=true"]
            : []),
        ];
      }
    );
  }
  var sL = class {
    constructor(a, b, c, d, e) {
      var f = new mu();
      this.C = a;
      this.B = b;
      this.A = c;
      this.g = f;
      this.l = d;
      this.j = e;
    }
  };
  function rL(a, b) {
    const c = new jL();
    for (const d of a) for (const e of b(d)) c.add(e, d);
    return c;
  }
  function oL(a) {
    return a.tagName === "A" && a.hasAttribute("href");
  }
  function qL(a, b) {
    return b.length - a.length;
  }
  function tL(a) {
    const b = a.A.parentNode;
    if (!b) throw Error("Image not in the DOM");
    const c = uL(a.l),
      d = vL(a.l);
    c.appendChild(d);
    b.insertBefore(c, a.A.nextSibling);
    a.D.j().j((e) => {
      var f = a.l;
      const g = d.getBoundingClientRect(),
        h = g.top - e.top,
        k = g.left - e.left,
        m = g.width - e.width;
      e = g.height - e.height;
      (Math.abs(h) < 1 &&
        Math.abs(k) < 1 &&
        Math.abs(m) < 1 &&
        Math.abs(e) < 1) ||
        ((f = f.getComputedStyle(d)),
        t(d, {
          top: parseInt(f.top, 10) - h + "px",
          left: parseInt(f.left, 10) - k + "px",
          width: parseInt(f.width, 10) - m + "px",
          height: parseInt(f.height, 10) - e + "px",
        }));
    });
    return d;
  }
  function wL(a) {
    a.j || (a.j = tL(a));
    return a.j;
  }
  var xL = class extends O {
    constructor(a, b, c) {
      super();
      this.l = a;
      this.A = b;
      this.D = c;
      this.j = null;
    }
    g() {
      if (this.j) {
        var a = this.j;
        const b = a.parentNode;
        b && b.removeChild(a);
        this.j = null;
      }
      super.g();
    }
  };
  function vL(a) {
    const b = a.document.createElement("div");
    xw(a, b);
    t(b, {
      position: "absolute",
      left: "0",
      top: "0",
      width: "0",
      height: "0",
      "pointer-events": "none",
    });
    return b;
  }
  function uL(a) {
    const b = a.document.createElement("div");
    xw(a, b);
    t(b, { position: "relative", width: "0", height: "0" });
    return b;
  }
  function yL(a) {
    const b = new P(a.dataset.adStatus || null);
    new MutationObserver(() => {
      b.g(a.dataset.adStatus || null);
    }).observe(a, { attributes: !0 });
    return Jt(b);
  }
  const zL = ["Google Material Icons", "Roboto"];
  function AL({ C: a, Xa: b, Gl: c, mb: d, Mb: e, Z: f }) {
    const g = new ou(a, c);
    c = new xL(a, c, g);
    Bt(c, g);
    a = new BL(a, d, e, b, c, f);
    Bt(a, c);
    a.init();
  }
  var BL = class extends O {
    constructor(a, b, c, d, e, f) {
      super();
      this.C = a;
      this.mb = b;
      this.Mb = c;
      this.Xa = d;
      this.l = e;
      this.Z = f;
      this.j = new P(!1);
    }
    init() {
      const a = CL(this.C, this.mb, this.Mb);
      wL(this.l).appendChild(a.bl);
      CA(this.C, a.Ta);
      yL(a.Ta).j((b) => {
        if (b !== null) {
          switch (b) {
            case "unfilled":
              this.dispose();
              break;
            case "filled":
              this.j.g(!0);
              break;
            default:
              this.Z?.reportError("Unhandled AdStatus: " + String(b)),
                this.dispose();
          }
          this.Z?.Km(this.Xa, b);
        }
      });
      Nt(this.j, !0, () => void a.Pl.g(!0));
      a.Xk.listen(() => void this.dispose());
      a.Wk.listen(() => void this.Z?.Im(this.Xa));
    }
  };
  function CL(a, b, c) {
    const d = new P(!1),
      e = a.document.createElement("div");
    xw(a, e);
    t(e, {
      position: "absolute",
      top: "50%",
      left: "0",
      transform: "translateY(-50%)",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      "background-color": "rgba(0, 0, 0, 0.75)",
      opacity: "0",
      transition: "opacity 0.25s ease-in-out",
      "box-sizing": "border-box",
      padding: "40px 5px 5px 5px",
    });
    Mt(d, !0, () => void t(e, { opacity: "1" }));
    Mt(d, !1, () => void t(e, { opacity: "0" }));
    const f = a.document.createElement("div");
    xw(a, f);
    t(f, { display: "block", width: "100%", height: "100%" });
    e.appendChild(f);
    const { Ma: g, Ol: h } = DL(a, b);
    f.appendChild(g);
    e.appendChild(EL(a, B(c, 1)));
    b = FL(a, B(c, 2));
    e.appendChild(b.Ek);
    b.Eg.listen(() => void d.g(!1));
    return { Pl: d, bl: e, Ta: h, Wk: b.Eg, Xk: b.Eg.delay(a, 450) };
  }
  function EL(a, b) {
    const c = a.document.createElement("div");
    xw(a, c);
    t(c, {
      position: "absolute",
      top: "10px",
      width: "100%",
      color: "white",
      "font-family": "Roboto",
      "font-size": "12px",
      "line-height": "16px",
      "text-align": "center",
    });
    c.appendChild(a.document.createTextNode(b));
    return c;
  }
  function FL(a, b) {
    const c = a.document.createElement("button");
    c.setAttribute("aria-label", b);
    xw(a, c);
    t(c, {
      position: "absolute",
      top: "10px",
      right: "10px",
      display: "block",
      cursor: "pointer",
      width: "24px",
      height: "24px",
      "font-size": "24px",
      "user-select": "none",
      color: "white",
    });
    b = a.document.createElement("gm-icon");
    b.className = "google-material-icons";
    b.appendChild(a.document.createTextNode("close"));
    c.appendChild(b);
    const d = new Vt();
    c.addEventListener("click", () => void Ut(d));
    return { Ek: c, Eg: St(d) };
  }
  function DL(a, b) {
    a = yA(a.document, b, null, null, {});
    return { Ma: a.Bc, Ol: a.Ta };
  }
  function GL({ target: a, threshold: b = 0 }) {
    const c = new HL();
    c.init(a, b);
    return c;
  }
  var HL = class extends O {
    constructor() {
      super();
      this.j = new P(!1);
    }
    init(a, b) {
      const c = new IntersectionObserver(
        (d) => {
          for (const e of d)
            if (e.target === a) {
              this.j.g(e.isIntersecting);
              break;
            }
        },
        { threshold: b }
      );
      c.observe(a);
      Ct(this, () => void c.disconnect());
    }
  };
  function IL(a) {
    const b = JL(a.C, Df(w(a.g, 2)) ?? 250, Df(w(a.g, 3)) ?? 300);
    let c = 1;
    return pL(a.B).map((d) => ({ Xa: c++, image: d, qc: b(d) }));
  }
  function KL(a, b) {
    const c = GL({ target: b.image.g, threshold: vh(a.g, 4) ?? 0.8 });
    a.l.push(c);
    Nt(
      Qt(c.j, a.C, Df(w(a.g, 5)) ?? 3e3, (d) => d),
      !0,
      () => {
        if (a.j < (Df(w(a.g, 1)) ?? 1)) {
          AL({ C: a.C, Xa: b.Xa, Gl: b.image.g, mb: a.mb, Mb: a.Mb, Z: a.Z });
          a.j++;
          if (!(a.j < (Df(w(a.g, 1)) ?? 1)))
            for (; a.l.length; ) a.l.pop()?.dispose();
          a.Z?.Jm(b.Xa);
        }
      }
    );
  }
  var ML = class {
    constructor(a, b, c, d, e, f) {
      this.C = a;
      this.mb = b;
      this.g = c;
      this.Mb = d;
      this.B = e;
      this.Z = f;
      this.l = [];
      this.j = 0;
    }
    run() {
      const a = IL(this);
      a.filter(LL).forEach((b) => void KL(this, b));
      this.Z?.Lm(a.map((b) => ({ Xa: b.Xa, qc: b.qc })));
    }
  };
  function LL(a) {
    return a.qc.rejectionReasons.length === 0;
  }
  function JL(a, b, c) {
    const d = Ms(a);
    return (e) => {
      e = e.g.getBoundingClientRect();
      const f = [];
      e.width < b && f.push(1);
      e.height < c && f.push(2);
      e.top <= d && f.push(3);
      return { Zc: e.width, bh: e.height, Yk: e.top - d, rejectionReasons: f };
    };
  }
  function NL(a, b) {
    a.Xa = b;
    return a;
  }
  var OL = class {
    constructor(a, b, c, d, e) {
      this.A = a;
      this.mb = b;
      this.hostname = c;
      this.l = d;
      this.B = e;
      this.errorMessage = this.j = this.Xa = this.g = null;
    }
  };
  function PL(a, b) {
    return new OL(b, a.mb, a.hostname, a.j, a.B);
  }
  function QL(a, b, c) {
    var d = a.l++;
    a.g === null ? ((a.g = Cn()), (a = 0)) : (a = Cn() - a.g);
    var e = b.A,
      f = b.mb,
      g = b.hostname,
      h = b.l,
      k = b.B.map(encodeURIComponent).join(",");
    if (b.g) {
      var m = { imcnt: b.g.length };
      var l = Math.min(b.g.length, 10);
      for (let n = 0; n < l; n++) {
        const p = `im${n}`;
        m[`${p}_id`] = b.g[n].Xa;
        m[`${p}_s_w`] = b.g[n].qc.Zc;
        m[`${p}_s_h`] = b.g[n].qc.bh;
        m[`${p}_s_dbf`] = b.g[n].qc.Yk;
        b.g[n].qc.rejectionReasons.length > 0 &&
          (m[`${p}_s_rej`] = b.g[n].qc.rejectionReasons.join(","));
      }
    } else m = null;
    GC(
      "abg::imovad",
      {
        typ: e,
        wpc: f,
        hst: g,
        pvsid: h,
        peid: k,
        rate: c,
        num: d,
        tim: a,
        ...(b.Xa === null ? {} : { imid: b.Xa }),
        ...(b.j === null ? {} : { astat: b.j }),
        ...(b.errorMessage === null ? {} : { errm: b.errorMessage }),
        ...m,
      },
      c
    );
  }
  var RL = class {
    constructor(a, b, c, d) {
      this.mb = a;
      this.hostname = b;
      this.j = c;
      this.B = d;
      this.l = 0;
      this.g = null;
    }
    Lm(a) {
      var b = PL(this, "fndi");
      b.g = a;
      QL(this, b, a.length > 0 ? 1 : 0.1);
    }
    Jm(a) {
      a = NL(PL(this, "adpl"), a);
      QL(this, a, 1);
    }
    Km(a, b) {
      a = NL(PL(this, "adst"), a);
      a.j = b;
      QL(this, a, 1);
    }
    Im(a) {
      a = NL(PL(this, "adis"), a);
      QL(this, a, 1);
    }
    reportError(a) {
      var b = PL(this, "err");
      b.errorMessage = a;
      QL(this, b, 0.1);
    }
  };
  function SL(a, b, c) {
    return (a = a.g()) && ci(a, 11)
      ? c.map((d) => d.l())
      : c.map((d) => d.A(b));
  }
  const TL = new Set([7, 1]);
  var UL = class {
    constructor() {
      this.l = new jL();
      this.B = [];
    }
    g(a, b) {
      TL.has(b) ||
        Tu(
          Qu(NB(a), (c) => void this.l.add(c, b)),
          (c) => void this.B.push(c)
        );
    }
    j(a, b) {
      for (const c of a) this.g(c, b);
    }
  };
  function VL(a) {
    return new jv(["pedestal_container"], {
      google_reactive_ad_format: 30,
      google_ad_width: Math.floor(a),
      google_ad_format: "autorelaxed",
      google_full_width_responsive: !0,
      google_enable_content_recommendations: !0,
      google_content_recommendation_ui_type: "pedestal",
    });
  }
  var WL = class {
    g(a) {
      return VL(Math.floor(a.j));
    }
  };
  var XL = class extends I {};
  function YL(a, b) {
    var c = b.adClient;
    if (typeof c !== "string" || !c) return !1;
    a.gg = c;
    a.j = !!b.adTest;
    c = b.pubVars;
    sa(c) && (a.G = c);
    if (Array.isArray(b.fillMessage) && b.fillMessage.length > 0) {
      a.B = {};
      for (const d of b.fillMessage) a.B[d.key] = d.value;
    }
    a.cd = b.adWidth;
    a.bd = b.adHeight;
    (typeof a.cd === "number" &&
      a.cd > 0 &&
      typeof a.bd === "number" &&
      a.bd > 0) ||
      GC("rctnosize", b);
    return !0;
  }
  var ZL = class {
    constructor() {
      this.B = this.G = this.j = this.gg = null;
      this.bd = this.cd = 0;
    }
    A() {
      return !0;
    }
  };
  function $L(a) {
    try {
      a.setItem("__storage_test__", "__storage_test__");
      const b = a.getItem("__storage_test__");
      a.removeItem("__storage_test__");
      return b === "__storage_test__";
    } catch (b) {
      return !1;
    }
  }
  function aM(a, b = []) {
    const c = Date.now();
    return La(b, (d) => c - d < a * 1e3);
  }
  function bM(a, b, c) {
    try {
      const d = a.getItem(c);
      if (!d) return [];
      let e;
      try {
        e = JSON.parse(d);
      } catch (f) {}
      if (!Array.isArray(e) || Oa(e, (f) => !Number.isInteger(f)))
        return a.removeItem(c), [];
      e = aM(b, e);
      e.length || a?.removeItem(c);
      return e;
    } catch (d) {
      return null;
    }
  }
  function cM(a, b, c) {
    return b <= 0 || a == null || !$L(a) ? null : bM(a, b, c);
  }
  function dM(a, b, c) {
    let d = 0;
    try {
      var e = (d |= Ks(a));
      const h = Ls(a),
        k = a.innerWidth;
      var f = h && k ? h / k : 0;
      d = e | (f ? (f > 1.05 ? 262144 : f < 0.95 ? 524288 : 0) : 131072);
      d |= Ns(a);
      d |= a.innerHeight >= a.innerWidth ? 0 : 8;
      d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
      var g;
      if ((g = b)) g = cM(c, 3600, "__lsv__")?.length !== 0;
      g && (d |= 134217728);
    } catch (h) {
      d |= 32;
    }
    return d;
  }
  var eM = class extends ZL {
    constructor() {
      super(...arguments);
      this.l = !1;
      this.g = null;
    }
    A(a) {
      this.l = !!a.enableAma;
      if ((a = a.amaConfig))
        try {
          var b = ew(a);
        } catch (c) {
          b = null;
        }
      else b = null;
      this.g = b;
      return !0;
    }
  };
  var fM = {};
  function gM(a, b, c) {
    let d = hM(a, c, b);
    if (!d) return !0;
    const e = c.J.j;
    for (; d.Nd && d.Nd.length; ) {
      const f = d.Nd.shift(),
        g = oB(f.sa);
      if (g && !(typeof d.kd === "number" && g <= d.kd)) c.D?.g(f, 18);
      else if (iM(c, f, { Af: d.kd })) {
        if (d.Me.g.length + 1 >= e) return c.D?.j(d.Nd, 19), !0;
        d = hM(a, c, b);
        if (!d) return !0;
      }
    }
    return c.l;
  }
  const hM = (a, b, c) => {
    var d = b.J.j,
      e = b.J.D,
      f = b.J;
    f = VC(b.Ba(), f.g ? f.g.ae : void 0, d);
    if (f.g.length >= d) return b.D?.j(jM(b, f, { types: a }, c), 19), null;
    e
      ? ((d = f.j || (f.j = Qs(f.l).scrollHeight || null)),
        (e = !d || d < 0 ? -1 : d * e - aD(f)))
      : (e = void 0);
    const g = (d = e == null || e >= 50) ? jM(b, f, { types: a }, c) : null;
    d || b.D?.j(jM(b, f, { types: a }, c), 18);
    return { Me: f, kd: e, Nd: g };
  };
  fM[2] = Ba(
    function (a, b) {
      a = jM(b, VC(b.Ba()), { types: a, wc: fC(b.Ba()) }, 2);
      if (a.length == 0) return !0;
      for (let c = 0; c < a.length; c++) if (iM(b, a[c])) return !0;
      return b.l ? (b.B.push(11), !0) : !1;
    },
    [0]
  );
  fM[5] = Ba(gM, [0], 5);
  fM[10] = Ba(function (a, b) {
    a = [];
    const c = b.Fb;
    c.includes(3) && a.push(2);
    c.includes(1) && a.push(0);
    c.includes(2) && a.push(1);
    return gM(a, 10, b);
  }, 10);
  fM[3] = function (a) {
    if (!a.l) return !1;
    const b = jM(a, VC(a.Ba()), { types: [0], wc: fC(a.Ba()) }, 3);
    if (b.length == 0) return !0;
    for (let c = b.length - 1; c >= 0; c--) if (iM(a, b[c])) return !0;
    a.B.push(11);
    return !0;
  };
  const lM = (a) => {
      const b = a.Ba().document.body.getBoundingClientRect().width;
      kM(a, VL(b));
    },
    nM = (a, b) => {
      var c = { types: [0], wc: gC(), Nm: [5] };
      c = jM(a, VC(a.Ba()), c, 8);
      mM(a, c.reverse(), b);
    },
    mM = (a, b, c) => {
      for (const d of b) if (((b = c.g(d.Ea)), iM(a, d, { hg: b }))) return !0;
      return !1;
    };
  fM[8] = function (a) {
    var b = a.Ba().document;
    if (b.readyState != "complete")
      return (
        b.addEventListener("readystatechange", () => fM[8](a), { once: !0 }), !0
      );
    if (!a.l) return !1;
    if (!a.vf()) return !0;
    b = { types: [0], wc: gC(), Oh: [2, 4, 5] };
    b = jM(a, VC(a.Ba()), b, 8);
    const c = new WL();
    if (mM(a, b, c)) return !0;
    if (a.A.Ii)
      switch (a.A.tj || 0) {
        case 1:
          nM(a, c);
          break;
        default:
          lM(a);
      }
    return !0;
  };
  fM[6] = Ba(gM, [2], 6);
  fM[7] = Ba(gM, [1], 7);
  fM[9] = function (a) {
    const b = hM([0, 2], a, 9);
    if (!b || !b.Nd) return a.B.push(17), a.l;
    for (var c of b.Nd) {
      var d = a.A.Yg || null;
      d == null
        ? (d = null)
        : ((d = pB(c.sa, new oM(), new pM(d, a.Ba()))),
          (d = new PB(d, c.wa(), c.Ea)));
      if (!d) continue;
      const e = oB(d.sa);
      if (
        e !== null &&
        !(typeof b.kd === "number" && e > b.kd) &&
        iM(a, d, { Af: b.kd, Ag: !0 })
      )
        return (
          (a = d.sa.L),
          (c = c.sa),
          (a = a.length > 0 ? a[0] : null),
          (c.B = !0),
          a != null && c.L.push(a),
          !0
        );
    }
    a.B.push(17);
    return a.l;
  };
  var oM = class {
    j(a, b, c, d) {
      return BA(d.document, a, b);
    }
    l(a) {
      return Ms(a) || 0;
    }
  };
  var qM = class {
    constructor(a, b, c) {
      this.j = a;
      this.g = b;
      this.Me = c;
    }
    hb(a) {
      return this.g ? xD(this.j, this.g, a, this.Me) : wD(this.j, a, this.Me);
    }
    Wa() {
      return this.g ? 16 : 9;
    }
  };
  var rM = class {
    constructor(a) {
      this.ig = a;
    }
    hb(a) {
      return ED(a.document, this.ig);
    }
    Wa() {
      return 11;
    }
  };
  var sM = class {
    constructor(a) {
      this.Jc = a;
    }
    hb(a) {
      return BD(this.Jc, a);
    }
    Wa() {
      return 13;
    }
  };
  var tM = class {
    hb(a) {
      return uD(a);
    }
    Wa() {
      return 12;
    }
  };
  var uM = class {
    constructor(a) {
      this.je = a;
    }
    hb() {
      return zD(this.je);
    }
    Wa() {
      return 2;
    }
  };
  var vM = class {
    constructor(a) {
      this.g = a;
    }
    hb() {
      return CD(this.g);
    }
    Wa() {
      return 3;
    }
  };
  var wM = class {
    hb() {
      return FD();
    }
    Wa() {
      return 17;
    }
  };
  var xM = class {
    constructor(a) {
      this.g = a;
    }
    hb() {
      return yD(this.g);
    }
    Wa() {
      return 1;
    }
  };
  var yM = class {
    hb() {
      return yb(kB);
    }
    Wa() {
      return 7;
    }
  };
  var zM = class {
    constructor(a) {
      this.Oh = a;
    }
    hb() {
      return AD(this.Oh);
    }
    Wa() {
      return 6;
    }
  };
  var AM = class {
    constructor(a) {
      this.g = a;
    }
    hb() {
      return DD(this.g);
    }
    Wa() {
      return 5;
    }
  };
  var BM = class {
    constructor(a, b) {
      this.minWidth = a;
      this.maxWidth = b;
    }
    hb() {
      return Ba(GD, this.minWidth, this.maxWidth);
    }
    Wa() {
      return 10;
    }
  };
  var CM = class {
    constructor(a) {
      this.B = a.j.slice(0);
      this.j = a.g.slice(0);
      this.l = a.l;
      this.A = a.B;
      this.g = a.A;
    }
  };
  function DM(a) {
    var b = new EM();
    b.A = a;
    b.j.push(new xM(a));
    return b;
  }
  function FM(a, b) {
    a.j.push(new zM(b));
    return a;
  }
  function GM(a, b) {
    a.j.push(new uM(b));
    return a;
  }
  function HM(a, b) {
    a.j.push(new AM(b));
    return a;
  }
  function IM(a, b) {
    a.j.push(new vM(b));
    return a;
  }
  function JM(a) {
    a.j.push(new yM());
    return a;
  }
  function KM(a) {
    a.g.push(new tM());
    return a;
  }
  function LM(a, b = 0, c, d) {
    a.g.push(new qM(b, c, d));
    return a;
  }
  function MM(a, b = 0, c = Infinity) {
    a.g.push(new BM(b, c));
    return a;
  }
  function NM(a) {
    a.g.push(new wM());
    return a;
  }
  function OM(a, b = 0) {
    a.g.push(new sM(b));
    return a;
  }
  function PM(a, b) {
    a.l = b;
    return a;
  }
  var EM = class {
    constructor() {
      this.l = 0;
      this.B = !1;
      this.j = [].slice(0);
      this.g = [].slice(0);
    }
    build() {
      return new CM(this);
    }
  };
  var pM = class {
    constructor(a, b) {
      this.j = a;
      this.l = b;
    }
    g() {
      var a = this.j,
        b = this.l;
      const c = a.G || {};
      c.google_ad_client = a.gg;
      c.google_ad_height = Ms(b) || 0;
      c.google_ad_width = Ls(b) || 0;
      c.google_reactive_ad_format = 9;
      b = new XL();
      b = gi(b, 1, a.l);
      a.g && y(b, 2, a.g);
      c.google_rasc = pj(b);
      a.j && (c.google_adtest = "on");
      return new jv(["fsi_container"], c);
    }
  };
  var QM = cv(new Zu(0, {})),
    RM = cv(new Zu(1, {})),
    SM = (a) => a === QM || a === RM;
  function TM(a, b, c) {
    ot(a.g, b) || a.g.set(b, []);
    a.g.get(b).push(c);
  }
  var UM = class {
    constructor() {
      this.g = new st();
    }
  };
  function VM(a, b) {
    a.J.wpc = b;
    return a;
  }
  function WM(a, b) {
    for (let c = 0; c < a.A.length; c++) if (a.A[c] == b) return a;
    a.A.push(b);
    return a;
  }
  function XM(a, b) {
    for (let c = 0; c < b.length; c++) WM(a, b[c]);
    return a;
  }
  function YM(a, b) {
    a.l = a.l ? a.l : b;
    return a;
  }
  var ZM = class {
    constructor(a) {
      this.J = {};
      this.J.c = a;
      this.A = [];
      this.l = null;
      this.D = [];
      this.F = 0;
    }
    B(a) {
      const b = ec(this.J);
      this.F > 0 && (b.t = this.F);
      b.err = this.A.join();
      b.warn = this.D.join();
      this.l &&
        ((b.excp_n = this.l.name),
        (b.excp_m = this.l.message && this.l.message.substring(0, 512)),
        (b.excp_s = this.l.stack && wn(this.l.stack, "")));
      b.w = 0 < a.innerWidth ? a.innerWidth : null;
      b.h = 0 < a.innerHeight ? a.innerHeight : null;
      return b;
    }
  };
  function $M(a, b) {
    b &&
      ((a.g.apv = ei(b, 4)),
      rh(b, Gv, 23) && (a.g.sat = "" + x(b, Gv, 23).g()));
    return a;
  }
  function aN(a, b) {
    a.g.afm = b.join(",");
    return a;
  }
  var bN = class extends ZM {
    constructor(a) {
      super(a);
      this.g = {};
    }
    B(a) {
      try {
        this.g.su = a.location.hostname;
      } catch (b) {
        this.g.su = "_ex";
      }
      a = super.B(a);
      hc(a, this.g);
      return a;
    }
  };
  function cN(a) {
    return a == null ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3);
  }
  function dN(a, b, c, d = 30) {
    c.length <= d
      ? (a[b] = eN(c))
      : ((a[b] = eN(c.slice(0, d))), (a[b + "_c"] = c.length.toString()));
  }
  function eN(a) {
    const b = a.length > 0 && typeof a[0] === "string";
    a = a.map((c) => c?.toString() ?? "null");
    b && (a = a.map((c) => ja(c, "replaceAll").call(c, "~", "")));
    return a.join("~");
  }
  function fN(a) {
    return a == null
      ? "null"
      : typeof a === "string"
      ? a
      : typeof a === "boolean"
      ? a
        ? "1"
        : "0"
      : Number.isInteger(a)
      ? a.toString()
      : a.toFixed(3);
  }
  function gN(a, b) {
    a.j.op = fN(b);
  }
  function hN(a, b, c) {
    dN(a.j, "fap", b);
    a.j.fad = fN(c);
  }
  function iN(a, b, c) {
    dN(a.j, "fmp", b);
    a.j.fmd = fN(c);
  }
  function jN(a, b, c) {
    dN(a.j, "vap", b);
    a.j.vad = fN(c);
  }
  function kN(a, b, c) {
    dN(a.j, "vmp", b);
    a.j.vmd = fN(c);
  }
  function lN(a, b, c) {
    dN(a.j, "pap", b);
    a.j.pad = fN(c);
  }
  function mN(a, b, c) {
    dN(a.j, "pmp", b);
    a.j.pmd = fN(c);
  }
  function nN(a, b) {
    dN(a.j, "psq", b);
  }
  var oN = class extends bN {
    constructor(a) {
      super(0);
      Object.assign(this, a);
      this.j = {};
      this.errors = [];
    }
    B(a) {
      a = super.B(a);
      Object.assign(a, this.j);
      this.errors.length > 0 && (a.e = eN(this.errors));
      return a;
    }
  };
  function pN(a, b, c) {
    const d = b.sa;
    ot(a.g, d) || a.g.set(d, new qN(Pu(NB(b)) ?? ""));
    c(a.g.get(d));
  }
  function rN(a, b) {
    pN(a, b, (c) => {
      c.g = !0;
    });
  }
  function sN(a, b) {
    pN(a, b, (c) => {
      c.j = !0;
    });
  }
  function tN(a, b) {
    pN(a, b, (c) => {
      c.l = !0;
    });
    a.T.push(b.sa);
  }
  function uN(a, b, c) {
    pN(a, b, (d) => {
      d.Gd = c;
    });
  }
  function vN(a, b, c) {
    const d = [];
    let e = 0;
    for (const f of c.filter(b))
      SM(f.Gd ?? "") ? ++e : ((b = a.j.get(f.Gd ?? "", null)), d.push(b));
    return { list: d.sort((f, g) => (f ?? -1) - (g ?? -1)), Hd: e };
  }
  function wN(a, b) {
    gN(b, a.j.oe());
    var c = rt(a.g).filter((f) => (f.Rc.startsWith(QM) ? 0 : 1) === 0),
      d = rt(a.g).filter((f) => (f.Rc.startsWith(QM) ? 0 : 1) === 1),
      e = vN(a, (f) => f.g, c);
    hN(b, e.list, e.Hd);
    e = vN(a, (f) => f.g, d);
    iN(b, e.list, e.Hd);
    e = vN(a, (f) => f.j, c);
    jN(b, e.list, e.Hd);
    e = vN(a, (f) => f.j, d);
    kN(b, e.list, e.Hd);
    c = vN(a, (f) => f.l, c);
    lN(b, c.list, c.Hd);
    d = vN(a, (f) => f.l, d);
    mN(b, d.list, d.Hd);
    nN(
      b,
      a.T.map((f) => a.g.get(f)?.Gd).map((f) => a.j.get(f) ?? null)
    );
  }
  function lp() {
    var a = qs(xN);
    if (!a.A) return ap();
    const b = jp(
      ip(
        hp(
          gp(
            fp(
              ep(dp(cp($o(Zo(new bp(), a.A ?? []), a.L ?? []), a.D), a.F), a.H),
              a.V
            ),
            a.ca
          ),
          a.J ?? 0
        ),
        rt(a.g).map((c) => {
          var d = new Yo();
          d = mi(d, 1, c.Rc);
          var e = a.j.get(c.Gd ?? "", -1);
          d = ji(d, 2, e);
          d = D(d, 3, c.g);
          return D(d, 4, c.j);
        })
      ),
      a.T.map((c) => a.g.get(c)?.Gd).map((c) => a.j.get(c) ?? -1)
    );
    a.l != null && D(b, 6, a.l);
    a.B != null && ki(b, 13, a.B);
    return b;
  }
  var xN = class {
    constructor() {
      this.B = this.L = this.A = null;
      this.H = this.F = !1;
      this.l = null;
      this.ca = this.D = this.V = !1;
      this.J = null;
      this.j = new st();
      this.g = new st();
      this.T = [];
    }
  };
  class qN {
    constructor(a) {
      this.l = this.j = this.g = !1;
      this.Gd = null;
      this.Rc = a;
    }
  }
  var yN = class {
    constructor(a) {
      this.j = a;
      this.g = -1;
    }
  };
  function zN(a) {
    let b = 0;
    for (; a; )
      (!b || a.previousElementSibling || a.nextElementSibling) && b++,
        (a = a.parentElement);
    return b;
  }
  function AN(a, b) {
    const c = a.L.filter((d) =>
      qt(d.We).every((e) => d.We.get(e) === b.get(e))
    );
    return c.length === 0
      ? (a.j.push(19), null)
      : c.reduce((d, e) => (d.We.oe() > e.We.oe() ? d : e), c[0]);
  }
  function BN(a, b) {
    b = NB(b);
    if (!Ou(b)) return a.j.push(18), null;
    b = b.getValue();
    if (ot(a.l, b)) return a.l.get(b);
    var c = av(b);
    c = AN(a, c);
    a.l.set(b, c);
    return c;
  }
  var CN = class {
    constructor(a) {
      this.g = a;
      this.l = new st();
      this.L = (x(a, cw, 2)?.g() || []).map((b) => {
        const c = av(B(b, 1)),
          d = qw(Xh(b, 2));
        return { We: c, wj: d, Rc: B(b, 1) };
      });
      this.j = [];
    }
    H() {
      const a = qs(xN);
      var b = this.B();
      a.A = b;
      b = this.D();
      a.L = b;
      b = this.A();
      b != null && (a.B = b);
      b = !!this.g.j()?.g()?.g();
      a.H = b;
      b = new st();
      for (const c of x(this.g, cw, 2)?.g() ?? []) b.set(B(c, 1), qw(Xh(c, 2)));
      a.j = b;
    }
    J() {
      return [...this.j];
    }
    B() {
      return [...this.g.g()];
    }
    D() {
      return [...xh(this.g, 4, ag, 1, void 0, 1024).map(qw)];
    }
    A() {
      return pw(x(this.g, Xv, 5)?.g()) ?? null;
    }
    F(a) {
      const b = BN(this, a);
      b?.Rc != null && uN(qs(xN), a, b.Rc);
    }
    T(a) {
      return a.length == 0
        ? !0
        : 0.75 <=
            new Gu(a).filter((b) => {
              b = BN(this, b)?.Rc || "";
              return b != "" && !(b === QM || b === RM);
            }).g.length /
              a.length;
    }
  };
  function DN(a, b) {
    return b.g.length == 0
      ? b
      : b.sort(
          (c, d) =>
            (BN(a.g, c)?.wj ?? Number.MAX_VALUE) -
            (BN(a.g, d)?.wj ?? Number.MAX_VALUE)
        );
  }
  function EN(a, b) {
    var c = b.Ea.g,
      d = Math,
      e = d.min;
    const f = b.wa(),
      g = b.sa.j();
    c += 200 * e.call(d, 20, g == 0 || g == 3 ? zN(f.parentElement) : zN(f));
    a = a.j;
    a.g < 0 && (a.g = Qs(a.j).scrollHeight || 0);
    a = a.g - b.Ea.g;
    a = c + (a > 1e3 ? 0 : 2 * (1e3 - a));
    b.wa();
    return a;
  }
  function FN(a, b) {
    return b.g.length == 0 ? b : b.sort((c, d) => EN(a, c) - EN(a, d));
  }
  function GN(a, b) {
    return b.sort((c, d) => {
      const e = c.sa.J,
        f = d.sa.J;
      var g;
      e == null || f == null
        ? (g =
            e == null && f == null ? EN(a, c) - EN(a, d) : e == null ? 1 : -1)
        : (g = e - f);
      return g;
    });
  }
  var HN = class {
    constructor(a, b = null) {
      this.j = new yN(a);
      this.g = b && new CN(b);
    }
  };
  function IN(a, b, c = 0, d) {
    var e = a.j;
    for (var f of b.B) e = Fu(e, f.hb(a.l), JN(f.Wa(), c));
    f = e = e.apply(tD(a.l));
    for (const g of b.j)
      f = Fu(
        f,
        g.hb(a.l),
        Wu([
          KN(g.Wa(), c),
          (h) => {
            d?.g(h, g.Wa());
          },
        ])
      );
    switch (b.l) {
      case 1:
        f = FN(a.g, f);
        break;
      case 2:
        f = GN(a.g, f);
        break;
      case 3:
        const g = qs(xN);
        f = DN(a.g, f);
        e.forEach((h) => {
          rN(g, h);
          a.g.g?.F(h);
        });
        f.forEach((h) => sN(g, h));
    }
    b.A &&
      (f = Iu(
        f,
        ad(a.l.location.href + a.l.localStorage.google_experiment_mod)
      ));
    b.g?.length === 1 && TM(a.B, b.g[0], { xc: e.g.length, Sj: f.g.length });
    return Hu(f);
  }
  var LN = class {
    constructor(a, b, c = null) {
      this.j = new Gu(a);
      this.g = new HN(b, c);
      this.l = b;
      this.B = new UM();
    }
  };
  const JN = (a, b) => (c) => nB(c, b, a),
    KN = (a, b) => (c) => nB(c.sa, b, a);
  function MN(a, b, c, d) {
    a: {
      switch (b) {
        case 0:
          a = NN(ON(c), a);
          break a;
        case 3:
          a = NN(c, a);
          break a;
        case 2:
          const e = c.lastChild;
          a = NN(e ? (e.nodeType == 1 ? e : ON(e)) : null, a);
          break a;
      }
      a = !1;
    }
    if ((d = !a && !(!d && b == 2 && !PN(c))))
      (b = b == 1 || b == 2 ? c : c.parentNode),
        (d = !(b && !Bw(b) && b.offsetWidth <= 0));
    return d;
  }
  function NN(a, b) {
    if (!a) return !1;
    a = Hd(a, b);
    if (!a) return !1;
    a = a.cssFloat || a.styleFloat;
    return a == "left" || a == "right";
  }
  function ON(a) {
    for (a = a.previousSibling; a && a.nodeType != 1; ) a = a.previousSibling;
    return a ? a : null;
  }
  function PN(a) {
    return !!a.nextSibling || (!!a.parentNode && PN(a.parentNode));
  }
  const QN = !dd && !Sb();
  function RN(a) {
    if (/-[a-z]/.test("adFormat")) return null;
    if (QN && a.dataset) {
      if (
        !(
          !Nb("Android") ||
          Tb() ||
          Rb() ||
          Qb() ||
          Nb("Silk") ||
          "adFormat" in a.dataset
        )
      )
        return null;
      a = a.dataset.adFormat;
      return a === void 0 ? null : a;
    }
    return a.getAttribute(
      "data-" + "adFormat".replace(/([A-Z])/g, "-$1").toLowerCase()
    );
  }
  function SN(a, b, c) {
    if (!b) return null;
    const d = T(wz) ? Gd("INS") : Uk(document, "INS");
    d.id = "google_pedestal_container";
    d.style.width = "100%";
    d.style.zIndex = "-1";
    if (c) {
      var e = a.getComputedStyle(c),
        f = "";
      if (e && e.position !== "static") {
        var g = c.parentNode.lastElementChild;
        for (f = e.position; g && g !== c; ) {
          if (a.getComputedStyle(g).display !== "none") {
            f = a.getComputedStyle(g).position;
            break;
          }
          g = g.previousElementSibling;
        }
      }
      if ((c = f)) d.style.position = c;
    }
    b.appendChild(d);
    if (d) {
      var h = a.document;
      f = h.createElement("div");
      f.style.width = "100%";
      f.style.height = "2000px";
      c = Ms(a);
      e = h.body.scrollHeight;
      a = a.innerHeight;
      g = h.body.getBoundingClientRect().bottom;
      d.appendChild(f);
      var k = f.getBoundingClientRect().top;
      h = h.body.getBoundingClientRect().top;
      d.removeChild(f);
      f = e;
      e <= a && c > 0 && g > 0 && (f = g - h);
      a = k - h >= 0.8 * f;
    } else a = !1;
    return a ? d : (b.removeChild(d), null);
  }
  function TN(a) {
    const b = a.document.body;
    var c = SN(a, b, null);
    if (c) return c;
    if (a.document.body) {
      c = Math.floor(a.document.body.getBoundingClientRect().width);
      for (
        var d = [{ element: a.document.body, depth: 0, height: 0 }],
          e = -1,
          f = null;
        d.length > 0;

      ) {
        const h = d.pop(),
          k = h.element;
        var g = h.height;
        h.depth > 0 && g > e && ((e = g), (f = k));
        if (h.depth < 5)
          for (g = 0; g < k.children.length; g++) {
            const m = k.children[g],
              l = m.getBoundingClientRect().width;
            (l == null || c == null ? 0 : l >= c * 0.9 && l <= c * 1.01) &&
              d.push({
                element: m,
                depth: h.depth + 1,
                height: m.getBoundingClientRect().height,
              });
          }
      }
      c = f;
    } else c = null;
    return c ? SN(a, c.parentNode || b, c) : null;
  }
  function UN(a) {
    let b = 0;
    try {
      (b |= Ks(a)),
        Ub() || (b |= 1048576),
        Math.floor(a.document.body.getBoundingClientRect().width) <= 1200 ||
          (b |= 32768),
        VN(a) && (b |= 33554432);
    } catch (c) {
      b |= 32;
    }
    return b;
  }
  function VN(a) {
    a = a.document.getElementsByClassName("adsbygoogle");
    for (let b = 0; b < a.length; b++)
      if (RN(a[b]) === "autorelaxed") return !0;
    return !1;
  }
  function WN(a) {
    const b = Ps(a, !0),
      c = Qs(a).scrollWidth,
      d = Qs(a).scrollHeight;
    let e = "unknown";
    a && a.document && a.document.readyState && (e = a.document.readyState);
    var f = ht(a);
    const g = [];
    var h = [];
    const k = [],
      m = [];
    var l = [],
      n = [],
      p = [];
    let q = 0,
      v = 0,
      E = Infinity,
      F = Infinity,
      R = null;
    var ea = JC({ Bd: !1 }, a);
    for (var J of ea) {
      ea = J.getBoundingClientRect();
      const db = b - (ea.bottom + f);
      var N = void 0,
        aa = void 0;
      if (
        J.className &&
        J.className.indexOf("adsbygoogle-ablated-ad-slot") != -1
      ) {
        N = J.getAttribute("google_element_uid");
        aa = a.google_sv_map;
        if (!N || !aa || !aa[N]) continue;
        N = (aa = rn(aa[N])) ? aa.height : 0;
        aa = aa ? aa.width : 0;
      } else if (
        ((N = ea.bottom - ea.top), (aa = ea.right - ea.left), N <= 1 || aa <= 1)
      )
        continue;
      g.push(N);
      k.push(aa);
      m.push(N * aa);
      RC(J)
        ? ((v += 1),
          J.className &&
            J.className.indexOf("pedestal_container") != -1 &&
            (R = N))
        : ((E = Math.min(E, db)),
          n.push(ea),
          (q += 1),
          h.push(N),
          l.push(N * aa));
      F = Math.min(F, db);
      p.push(ea);
    }
    E = E === Infinity ? null : E;
    F = F === Infinity ? null : F;
    f = XN(n);
    p = XN(p);
    h = YN(b, h);
    n = YN(b, g);
    l = YN(b * c, l);
    J = YN(b * c, m);
    return new ZN(a, {
      Zk: e,
      Ih: b,
      vm: c,
      tm: d,
      am: q,
      sk: v,
      vk: $N(g),
      wk: $N(k),
      uk: $N(m),
      km: f,
      jm: p,
      im: E,
      hm: F,
      Kg: h,
      Jg: n,
      qk: l,
      pk: J,
      xm: R,
    });
  }
  function aO(a, b, c, d) {
    const e = Ub() && !(Ls(a.C) >= 900);
    d = La(d, (f) => Pa(a.j, f)).join(",");
    b = {
      wpc: b,
      su: c,
      eid: d,
      doc: a.g.Zk ?? null,
      pg_h: bO(a.g.Ih),
      pg_w: bO(a.g.vm),
      pg_hs: bO(a.g.tm),
      c: bO(a.g.am),
      aa_c: bO(a.g.sk),
      av_h: bO(a.g.vk),
      av_w: bO(a.g.wk),
      av_a: bO(a.g.uk),
      s: bO(a.g.km),
      all_s: bO(a.g.jm),
      b: bO(a.g.im),
      all_b: bO(a.g.hm),
      d: bO(a.g.Kg),
      all_d: bO(a.g.Jg),
      ard: bO(a.g.qk),
      all_ard: bO(a.g.pk),
      pd_h: bO(a.g.xm),
      dt: e ? "m" : "d",
    };
    c = {};
    for (const f of Object.keys(b)) b[f] !== null && (c[f] = b[f]);
    return c;
  }
  var ZN = class {
    constructor(a, b) {
      this.j =
        "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(
          " "
        );
      this.C = a;
      this.g = b;
    }
  };
  function $N(a) {
    return (
      Ik.apply(
        null,
        La(a, (b) => b > 0)
      ) || null
    );
  }
  function YN(a, b) {
    return a <= 0 ? null : Hk.apply(null, b) / a;
  }
  function XN(a) {
    let b = Infinity;
    for (let e = 0; e < a.length - 1; e++)
      for (let f = e + 1; f < a.length; f++) {
        var c = a[e],
          d = a[f];
        c = Math.max(
          Math.max(0, c.left - d.right, d.left - c.right),
          Math.max(0, c.top - d.bottom, d.top - c.bottom)
        );
        c > 0 && (b = Math.min(c, b));
      }
    return b !== Infinity ? b : null;
  }
  function bO(a) {
    return a == null ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3);
  }
  function cO(a) {
    var b = TC({ Bd: !1, rf: !1 }, a);
    a = (Ms(a) || 0) - ht(a);
    let c = 0;
    for (let d = 0; d < b.length; d++) {
      const e = b[d].getBoundingClientRect();
      ZC(e) && e.top <= a && (c += 1);
    }
    return c > 0;
  }
  function dO(a) {
    const b = {};
    var c = TC({ Bd: !1, rf: !1, jh: !1, kh: !1 }, a)
      .map((d) => d.getBoundingClientRect())
      .filter(ZC);
    b.fi = c.length;
    c = UC({ jh: !0 }, a)
      .map((d) => d.getBoundingClientRect())
      .filter(ZC);
    b.Gi = c.length;
    c = UC({ kh: !0 }, a)
      .map((d) => d.getBoundingClientRect())
      .filter(ZC);
    b.mj = c.length;
    c = UC({ rf: !0 }, a)
      .map((d) => d.getBoundingClientRect())
      .filter(ZC);
    b.ji = c.length;
    c = (Ms(a) || 0) - ht(a);
    c = TC({ Bd: !1 }, a)
      .map((d) => d.getBoundingClientRect())
      .filter(ZC)
      .filter(za(eO, null, c));
    b.gi = c.length;
    a = WN(a);
    c = a.g.Kg != null ? a.g.Kg : null;
    c != null && (b.fj = c);
    a = a.g.Jg != null ? a.g.Jg : null;
    a != null && (b.hi = a);
    return b;
  }
  function iM(a, b, { Af: c, hg: d, Ag: e } = {}) {
    return TA(997, () => fO(a, b, { Af: c, hg: d, Ag: e }), a.g);
  }
  function jM(a, b, c, d) {
    var e = c.wc ? c.wc : a.J;
    const f = iC(e, b.g.length);
    e = a.A.ii ? e.g : void 0;
    const g = NM(
      OM(
        KM(
          MM(
            LM(
              JM(
                HM(IM(FM(GM(DM(c.types), a.Aa), c.Oh || []), a.oa), c.Nm || [])
              ),
              f.ze || void 0,
              e,
              b
            ),
            c.minWidth,
            c.maxWidth
          )
        ),
        f.Jc || void 0
      )
    );
    a.ca && g.g.push(new rM(a.ca));
    b = 1;
    a.Gc() && (b = 3);
    PM(g, b);
    a.A.Jj && (g.B = !0);
    return TA(995, () => IN(a.j, g.build(), d, a.D || void 0), a.g);
  }
  function kM(a, b) {
    const c = TN(a.g);
    if (c) {
      const d = iv(a.V, b),
        e = yA(a.g.document, a.H, null, null, {}, d);
      e && (Xz(e.Bc, c, 2, 256), TA(996, () => gO(a, e, d), a.g));
    }
  }
  function hO(a) {
    return a.L ? a.L : (a.L = a.g.google_ama_state);
  }
  function fO(a, b, { Af: c, hg: d, Ag: e } = {}) {
    const f = b.sa;
    if (f.B) return !1;
    var g = b.wa(),
      h = f.j();
    if (!MN(a.g, h, g, a.l)) return !1;
    h = null;
    f.te?.includes(6)
      ? ((h = Math.round(g.getBoundingClientRect().height)),
        (h = new jv(null, {
          google_max_responsive_height: c == null ? h : Math.min(c, h),
          google_full_width_responsive: "false",
        })))
      : (h =
          c == null ? null : new jv(null, { google_max_responsive_height: c }));
    c = kv(fi(f.Wf, 2) || 0);
    g = lv(f.J);
    const k = iO(a, f),
      m = jO(a),
      l = iv(a.V, f.V ? f.V.g(b.Ea) : null, h, d || null, c, g, k, m),
      n = b.fill(a.H, l);
    if ((e && !kO(a, n, l)) || !TA(996, () => gO(a, n, l), a.g)) return !1;
    Qm(9, [f.J, f.Fd]);
    a.Gc() && tN(qs(xN), b);
    return !0;
  }
  function iO(a, b) {
    return Pu(
      Tu(LB(b).map(mv), () => {
        a.B.push(18);
      })
    );
  }
  function jO(a) {
    if (!a.Gc()) return null;
    var b = a.j.g.g?.D();
    if (b == null) return null;
    b = b.join("~");
    a = a.j.g.g?.A() ?? null;
    return nv({ Pk: b, jl: a });
  }
  function kO(a, b, c) {
    if (!b) return !1;
    var d = b.Ta;
    const e = d.style.width;
    d.style.width = "100%";
    const f = d.offsetWidth;
    d.style.width = e;
    if (hA(f, a.g, b.Ta, (c && c.pe()) || {})) return nA(a.g, b.Ta), !0;
    Fw(b.Bc);
    return !1;
  }
  function gO(a, b, c) {
    if (!b) return !1;
    try {
      CA(a.g, b.Ta, c);
    } catch (d) {
      return Fw(b.Bc), a.B.push(6), !1;
    }
    return !0;
  }
  var lO = class {
    constructor(a, b, c, d, e = {}, f = [], g = !1) {
      this.j = a;
      this.H = b;
      this.g = c;
      this.J = d.wc;
      this.Aa = d.je || [];
      this.V = d.ll || null;
      this.oa = d.Tk || [];
      this.ca = d.ig || [];
      this.A = e;
      this.l = !1;
      this.F = [];
      this.B = [];
      this.T = this.L = void 0;
      this.Fb = f;
      this.D = g ? new UL() : null;
    }
    Ba() {
      return this.g;
    }
    Gc() {
      if ((this.j.g.g?.B().length ?? 0) == 0) return !1;
      if (this.T === void 0) {
        const a = PM(KM(JM(DM([0, 1, 2]))), 1).build(),
          b = TA(995, () => IN(this.j, a), this.g);
        this.T = this.j.g.g?.T(b) || !1;
      }
      return this.T;
    }
    rh() {
      return !!this.A.Dj;
    }
    vf() {
      return !VN(this.g);
    }
    bb() {
      return this.D;
    }
  };
  const eO = (a, b) => b.top <= a;
  function mO(a, b, c, d, e, f = 0, g = 0) {
    this.Vb = a;
    this.Pf = f;
    this.Of = g;
    this.errors = b;
    this.Yc = c;
    this.g = d;
    this.j = e;
  }
  var nO = (a, { vf: b = !1, rh: c = !1, Pm: d = !1, Gc: e = !1 } = {}) => {
    const f = [];
    d && f.push(9);
    if (e) {
      a.includes(4) && !c && b && f.push(8);
      a.includes(1) && f.push(1);
      d = a.includes(3);
      e = a.includes(2);
      const g = a.includes(1);
      (d || e || g) && f.push(10);
    } else
      a.includes(3) && f.push(6),
        a.includes(4) && !c && b && f.push(8),
        a.includes(1) && f.push(1, 5),
        a.includes(2) && f.push(7);
    a.includes(4) && c && b && f.push(8);
    return f;
  };
  function oO(a, b, c) {
    a = nO(a, { vf: b.vf(), rh: b.rh(), Pm: !!b.A.Yg, Gc: b.Gc() });
    return new pO(a, b, c);
  }
  function qO(a, b) {
    const c = fM[b];
    return c ? TA(998, () => c(a.g), a.A) : (a.g.F.push(12), !0);
  }
  function rO(a, b) {
    return new Promise((c) => {
      setTimeout(() => {
        c(qO(a, b));
      });
    });
  }
  function sO(a) {
    a.g.l = !0;
    return Promise.all(a.j.map((b) => rO(a, b))).then((b) => {
      b.includes(!1) && a.g.F.push(5);
      a.j.splice(0, a.j.length);
    });
  }
  var pO = class {
    constructor(a, b, c) {
      this.B = a.slice(0);
      this.j = a.slice(0);
      this.l = Qa(this.j, 1);
      this.g = b;
      this.A = c;
    }
  };
  var tO = class {
    constructor(a) {
      this.g = a;
      this.exception = void 0;
    }
  };
  function uO(a) {
    return sO(a).then(() => {
      var b = a.g.j.j.filter(kB).g.length;
      var c = a.g.F.slice(0);
      var d = a.g;
      d = [...d.B, ...(d.j.g.g?.J() || [])];
      b = new mO(
        b,
        c,
        d,
        a.g.j.j.g.length,
        a.g.j.B.g,
        a.g.j.j.filter(kB).filter(lB).g.length,
        a.g.j.j.filter(lB).g.length
      );
      return new tO(b);
    });
  }
  var vO = class {
    g() {
      return new jv([], {
        google_reactive_ad_format: 40,
        google_tag_origin: "qs",
      });
    }
  };
  var wO = class {
    g() {
      return new jv(["adsbygoogle-resurrected-ad-slot"], {});
    }
  };
  function xO(a) {
    return Cw(a.g.document).map((b) => {
      const c = new dB(b, 3);
      b = new fB(EA(a.g, b));
      return new jB(c, b, a.j, !1, 0, [], null, a.g, null);
    });
  }
  var yO = class {
    constructor(a) {
      var b = new wO();
      this.g = a;
      this.j = b || null;
    }
  };
  const zO = { ai: "10px", yg: "10px" };
  function AO(a) {
    return nt(a.g.document.querySelectorAll("INS.adsbygoogle-placeholder")).map(
      (b) => new jB(new dB(b, 1), new bB(zO), a.j, !1, 0, [], null, a.g, null)
    );
  }
  var BO = class {
    constructor(a, b) {
      this.g = a;
      this.j = b || null;
    }
  };
  function CO(a, b) {
    const c = [];
    b.forEach((d, e) => {
      c.push(
        ja(e, "replaceAll").call(e, "~", "_") +
          "--" +
          d.map((f) => Number(f)).join("_")
      );
    });
    dN(a.g, "cnstr", c, 80);
  }
  var DO = class extends ZM {
    constructor() {
      super(-1);
      this.g = {};
    }
    B(a) {
      a = super.B(a);
      Object.assign(a, this.g);
      return a;
    }
  };
  var EO = class extends Error {
    constructor(a, b, c) {
      super(a);
      this.g = b;
      this.j = c;
    }
  };
  function FO(a, b, c) {
    return a == null
      ? new EO(b + "ShouldNotBeNull", 2, c)
      : a == 0
      ? new EO(b + "ShouldNotBeZero", 3, c)
      : a < -1
      ? new EO(b + "ShouldNotBeLessMinusOne", 4, c)
      : null;
  }
  function GO(a, b, c) {
    const d =
      FO(c.ne, "gapsMeasurementWindow", 1) ||
      FO(c.ud, "gapsPerMeasurementWindow", 2) ||
      FO(c.Jd, "maxGapsToReport", 3);
    return d != null
      ? Mu(d)
      : c.kg || c.ud != -1 || c.Jd != -1
      ? Ku(new HO(a, b, c))
      : Mu(new EO("ShouldHaveLimits", 1, 0));
  }
  function IO(a) {
    return (hO(a.l) && hO(a.l).placed) || [];
  }
  function JO(a) {
    return IO(a).map((b) => xu(vu(b.element, a.g)));
  }
  function KO(a) {
    return IO(a).map((b) => b.index);
  }
  function LO(a, b) {
    const c = b.sa;
    return !a.D && c.l && Bf(w(c.l, 8)) != null && fi(c.l, 8) == 1
      ? []
      : c.B
      ? (c.L || []).map((d) => xu(vu(d, a.g)))
      : [xu(new wu(b.Ea.g, 0))];
  }
  function MO(a) {
    a.sort((e, f) => e.g - f.g);
    const b = [];
    let c = 0;
    for (let e = 0; e < a.length; ++e) {
      var d = a[e];
      let f = d.g;
      d = d.g + d.j;
      f <= c ? (c = Math.max(c, d)) : (b.push(new wu(c, f - c)), (c = d));
    }
    return b;
  }
  function NO(a, b) {
    b = b.map((c) => {
      var d = new Eo();
      d = hi(d, 1, c.g);
      c = c.getHeight();
      return hi(d, 2, c);
    });
    return Go(Fo(new Ho(), a), b);
  }
  function OO(a) {
    const b = Nh(a, Eo, 2, wh()).map((c) => `G${Wh(c, 1)}~${c.getHeight()}`);
    return `W${Wh(a, 1)}${b.join("")}`;
  }
  function PO(a, b) {
    const c = [];
    let d = 0;
    for (const e of qt(b)) {
      const f = b.get(e);
      f.sort((g, h) => h.getHeight() - g.getHeight());
      a.H || f.splice(a.A, f.length);
      !a.J && d + f.length > a.j && f.splice(a.j - d, f.length);
      c.push(NO(e, f));
      d += f.length;
      if (!a.J && d >= a.j) break;
    }
    return c;
  }
  function QO(a) {
    const b = Nh(a, Ho, 5, wh()).map((c) => OO(c));
    return `M${Wh(a, 1)}H${Wh(a, 2)}C${Wh(a, 3)}B${Number(!!A(a, 4))}${b.join(
      ""
    )}`;
  }
  function RO(a) {
    var b = QB(Hu(a.l.j.j), a.g),
      c = JO(a),
      d = new tt(KO(a));
    for (var e = 0; e < b.length; ++e)
      if (!d.contains(e)) {
        var f = LO(a, b[e]);
        c.push(...f);
      }
    c.push(new wu(0, 0));
    c.push(xu(new wu(Qs(a.g).scrollHeight, 0)));
    b = MO(c);
    c = new st();
    for (d = 0; d < b.length; ++d)
      (e = b[d]),
        (f = a.F ? 0 : Math.floor(e.g / a.B)),
        ot(c, f) || c.set(f, []),
        c.get(f).push(e);
    b = PO(a, c);
    c = new Io();
    c = hi(c, 1, a.j);
    c = hi(c, 2, a.B);
    c = hi(c, 3, a.A);
    a = gi(c, 4, a.D);
    return Ph(a, 5, b);
  }
  function SO(a) {
    a = RO(a);
    return QO(a);
  }
  var HO = class {
    constructor(a, b, c) {
      this.F = c.ne == -1;
      this.B = c.ne;
      this.H = c.ud == -1;
      this.A = c.ud;
      this.J = c.Jd == -1;
      this.j = c.Jd;
      this.D = c.ih;
      this.l = b;
      this.g = a;
    }
  };
  function tw(a, b, c) {
    let d = b.jc;
    b.Cd && T(Jx) && ((d = 1), "r" in c && (c.r += "F"));
    d <= 0 || (!b.Ec || "pvc" in c || (c.pvc = je(a.g)), GC(b.vd, c, d));
  }
  function TO(a, b, c) {
    c = c.B(a.g);
    b.Ec && (c.pvc = je(a.g));
    0 <= b.jc && ((c.r = b.jc), tw(a, b, c));
  }
  var UO = class {
    constructor(a) {
      this.g = a;
    }
  };
  const VO = { google_ad_channel: !0, google_ad_host: !0 };
  function WO(a, b) {
    a.location.href &&
      a.location.href.substring &&
      (b.url = a.location.href.substring(0, 200));
    GC("ama", b, 0.01);
  }
  function XO(a) {
    const b = {};
    Jd(VO, (c, d) => {
      d in a && (b[d] = a[d]);
    });
    return b;
  }
  function YO(a) {
    const b = /[a-zA-Z0-9._~-]/,
      c = /%[89a-zA-Z]./;
    return a.replace(/(%[a-zA-Z0-9]{2})/g, (d) => {
      if (!d.match(c)) {
        const e = decodeURIComponent(d);
        if (e.match(b)) return e;
      }
      return d.toUpperCase();
    });
  }
  function ZO(a) {
    let b = "";
    const c = /[/%?&=]/;
    for (let d = 0; d < a.length; ++d) {
      const e = a[d];
      b = e.match(c) ? b + e : b + encodeURIComponent(e);
    }
    return b;
  }
  function $O(a, b) {
    a = ai(a, 2);
    if (!a) return !1;
    for (let c = 0; c < a.length; c++) if (a[c] == b) return !0;
    return !1;
  }
  function aP(a, b) {
    a = ZO(YO(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
    const c = $u(a),
      d = bP(a);
    return (
      b.find((e) => {
        if (rh(e, wv, 7)) {
          var f = x(e, wv, 7);
          f = Mf(w(f, 1, void 0, nh));
        } else f = Mf(w(e, 1, void 0, nh));
        rh(e, wv, 7) ? ((e = x(e, wv, 7)), (e = fi(e, 2))) : (e = 2);
        if (typeof f !== "number") return !1;
        switch (e) {
          case 1:
            return f == c;
          case 2:
            return d[f] || !1;
        }
        return !1;
      }) || null
    );
  }
  function bP(a) {
    const b = {};
    for (;;) {
      b[$u(a)] = !0;
      if (!a) return b;
      a = a.substring(0, a.lastIndexOf("/"));
    }
  }
  function cP(a, b) {
    try {
      b.removeItem("google_ama_config");
    } catch (c) {
      WO(a, { lserr: 1 });
    }
  }
  var eP = (a, b, c, d, e = null, f = null) => {
      dP(a, new UO(a), b, c, d, e, f);
    },
    dP = (a, b, c, d, e, f = null, g = null) => {
      if (c)
        if (d) {
          var h = EH(d, e);
          try {
            const k = new fP(a, b, c, d, e, h, f, g);
            oi(d, 35) && c !== ei(d, 35)
              ? qK(ZJ(), qj(Ap(Bp(new Cp(), ei(d, 35)), c)))
              : TA(990, () => gP(k), a);
          } catch (k) {
            Pm() && Qm(15, [k]),
              TO(b, kw, YM(WM(VM(aN($M(new bN(0), d), h), c), 1), k)),
              jK(ZJ(), pp(new yp(), Bo(1)));
          }
        } else
          TO(b, kw, WM(VM(new bN(0), c), 8)), jK(ZJ(), pp(new yp(), Bo(8)));
      else TO(b, kw, WM(new bN(0), 9)), jK(ZJ(), pp(new yp(), Bo(9)));
    };
  function gP(a) {
    a.L.forEach((b) => {
      switch (b) {
        case 0:
          TA(991, () => hP(a), a.g);
          break;
        case 1:
          TA(
            1073,
            () => {
              xH(new DH(a.g, a.D, a.B, a.A, a.j.qa));
            },
            a.g
          );
          break;
        case 2:
          iP(a);
          break;
        case 7:
          TA(
            1203,
            () => {
              var c = x(a.B, Wv, 34);
              if (c) {
                var d = a.g,
                  e = a.A,
                  f = ih(c);
                c = d.location.hostname;
                var g = x(f, Vv, 1)?.g() ?? [];
                c = new RL(e, c, je(r), g);
                if ((g = x(f, Vv, 1)))
                  if ((f = x(f, Uv, 2))) {
                    zu(d, zL);
                    const m = new yt();
                    var h = d.innerWidth;
                    var k = 0.375 * h;
                    h = new SH(k, h - k);
                    k = d.innerWidth;
                    k = Ls(d) >= 900 ? 0.2 * k : 0.5 * k;
                    new ML(d, e, g, f, new sL(d, h, k, m, new cL(m)), c).run();
                  } else c.reportError("No messages");
                else c.reportError("No settings");
              }
            },
            a.g
          );
      }
    });
  }
  function hP(a) {
    var b = T(sx) ? void 0 : a.j.Am;
    let c = null;
    c = T(sx) ? fC(a.g) : dC(a.g, b);
    if (a.j.qa && rh(a.j.qa, vv, 10)) {
      var d = uv(a.j.qa.g());
      d !== null && d !== void 0 && (c = UB(a.g, d, b));
      T(Nx) && ((b = a.j.qa.g()), b?.g() === 2 && (c = cC(b, c)));
    }
    rh(a.B, rv, 26) && (c = jC(c, x(a.B, rv, 26), a.g));
    c = lC(c, a.g);
    b = a.j.qa ? ai(a.j.qa, 6) : [];
    d = a.j.qa ? Nh(a.j.qa, Bv, 5, wh()) : [];
    const e = a.j.qa ? ai(a.j.qa, 2) : [],
      f = TA(
        993,
        () => {
          var g = a.B,
            h = Nh(g, Sv, 1, wh()),
            k = a.j.qa && $O(a.j.qa, 1) ? "text_image" : "text",
            m = new vO(),
            l = iB(h, a.g, { xk: m, Nl: new gB(k) });
          h.length != l.length && a.H.push(13);
          l = l.concat(AO(new BO(a.g, m)));
          h = T(Kx);
          m = x(g, dw, 24)?.j()?.g()?.g() || !1;
          if (h || m)
            (h = xO(new yO(a.g))),
              (m = qs(xN)),
              (l = l.concat(h)),
              (m.V = !0),
              (m.J = h.length),
              a.F === "n" && (a.F = x(g, dw, 24)?.g()?.length ? "o" : "p");
          h = T(Nx) && a.j.qa.g()?.g() === 2 && a.j.qa.g()?.j();
          h = T(qx) || h;
          a: {
            if ((m = x(g, Ov, 6)))
              for (n of m.g())
                if (rh(n, Yu, 4)) {
                  var n = !0;
                  break a;
                }
            n = !1;
          }
          h && n
            ? ((n = l.concat),
              (h = a.g),
              (m = x(g, Ov, 6))
                ? ((h = IB(m.g(), h)), (k = SL(g, k, h)))
                : (k = []),
              (k = n.call(l, k)))
            : ((n = l.concat),
              (h = a.g),
              (m = x(g, Ov, 6))
                ? ((h = HB(m.g(), h)), (k = SL(g, k, h)))
                : (k = []),
              (k = n.call(l, k)));
          l = k;
          g = x(g, dw, 24);
          return new LN(l, a.g, g);
        },
        a.g
      );
    a.l = new lO(
      f,
      a.A,
      a.g,
      { wc: c, ll: a.V, je: a.j.je, Tk: b, ig: d },
      jP(a),
      e,
      T(Jx)
    );
    hO(a.l)?.optimization?.ablatingThisPageview &&
      !a.l.Gc() &&
      (DA(a.g), (qs(xN).D = !0), (a.F = "f"));
    a.J = oO(e, a.l, a.g);
    TA(992, () => uO(a.J), a.g).then(
      TA(994, () => a.oa.bind(a), a.g),
      a.ca.bind(a)
    );
  }
  function iP(a) {
    const b = x(a.B, Tv, 18);
    b &&
      new rK(a.g, new aL(a.g, a.A), b, new SE(a.g), Nh(a.B, Sv, 1, wh())).run();
  }
  function jP(a) {
    const b = T(Mx);
    if (!a.B.g())
      return { Jj: b, Ii: !1, Dj: !1, ym: 0, tj: 0, ii: kP(a), Yg: a.T };
    const c = a.B.g();
    return {
      Jj: b || A(c, 14),
      Ii: A(c, 5),
      Dj: A(c, 6),
      ym: Yh(c, 8),
      tj: fi(c, 10),
      ii: kP(a),
      Yg: a.T,
    };
  }
  function kP(a) {
    return T(Dx) || (T(Nx) && a.j.qa?.g()?.g() === 2)
      ? !1
      : a.j.qa && rh(a.j.qa, vv, 10)
      ? (uv(a.j.qa.g()) || 0) >= 0.5
      : !0;
  }
  function lP(a, b) {
    var c = new bN(b.Vb);
    c.g.pp = b.Of;
    c.g.ppp = b.Pf;
    c.g.ppos = b.placementPositionDiffs;
    c.g.eatf = b.fe;
    c.g.eatfAbg = b.ge;
    c.g.reatf = b.wd;
    c.g.a = a.J.B.slice(0).join(",");
    c = aN($M(c, a.B), a.L);
    var d = b.ob;
    d &&
      ((c.g.as_count = d.fi),
      (c.g.d_count = d.Gi),
      (c.g.ng_count = d.mj),
      (c.g.am_count = d.ji),
      (c.g.atf_count = d.gi),
      (c.g.mdns = cN(d.fj)),
      (c.g.alldns = cN(d.hi)));
    d = b.Md;
    d != null && (c.g.allp = d);
    if ((d = b.hf)) {
      var e = [];
      for (var f of qt(d))
        if (d.get(f).length > 0) {
          var g = d.get(f)[0];
          e.push("(" + [f, g.xc, g.Sj].join() + ")");
        }
      c.g.fd = e.join(",");
    }
    f = b.Ih;
    f != null && (c.g.pgh = f);
    c.g.abl = b.Ti;
    c.g.rr = a.F;
    a = XM(XM(VM(c, a.A), b.errors), a.H);
    c = b.Yc;
    for (e = 0; e < c.length; e++)
      a: {
        f = a;
        d = c[e];
        for (g = 0; g < f.D.length; g++) if (f.D[g] == d) break a;
        f.D.push(d);
      }
    b.exception !== void 0 && WM(YM(a, b.exception), 1);
    return a;
  }
  function mP(a, b) {
    var c = lP(a, b);
    TO(
      a.D,
      b.errors.length > 0 || a.H.length > 0 || b.exception !== void 0 ? kw : jw,
      c
    );
    if (x(a.B, dw, 24)) {
      a.l.j.g.g?.H();
      b = hO(a.l);
      const d = qs(xN);
      d.l = !!b?.optimization?.ablationFromStorage;
      b?.optimization?.ablatingThisPageview && (d.F = !0);
      d.ca = !!b?.optimization?.availableAbg;
      b = qs(xN);
      c = new oN(c);
      b.A
        ? ((c.j.sl = eN(b.A ?? [])),
          (c.j.daaos = eN(b.L ?? [])),
          (c.j.ab = fN(b.F)),
          (c.j.rr = fN(b.V)),
          (c.j.oab = fN(b.H)),
          b.l != null && (c.j.sab = fN(b.l)),
          b.D && (c.j.fb = fN(b.D)),
          (c.j.ls = fN(b.ca)),
          gN(c, b.j.oe()),
          b.J != null && (c.j.rp = fN(b.J)),
          b.B != null && (c.j.expl = fN(b.B)),
          wN(b, c))
        : c.errors.push("irr");
      TO(a.D, mw, c);
    }
    c = a.l?.bb();
    T(Jx) &&
      c != null &&
      ((c = new Map([...c.l.map.entries()].map(kL))),
      (b = new DO()),
      CO(b, c),
      TO(a.D, ow, b));
  }
  function nP(a, b) {
    if (T(wx) && a.l != null) {
      var c = GO(a.g, a.l, { ne: U(Ix), ud: U(Hx), Jd: U(zx), ih: !0, kg: !1 });
      if (Ou(c))
        (a = new Lo()),
          (c = RO(c.getValue())),
          (a = z(a, 2, Ko, c)),
          y(b, 16, a);
      else {
        var d = c.g;
        a = new Lo();
        c = a.setError;
        var e = new Jo();
        e = ni(e, 2, d.j);
        d = ni(e, 1, d.g);
        a = c.call(a, d);
        y(b, 16, a);
      }
    }
  }
  function oP(a, b) {
    const c = ZJ();
    if (c.g) {
      var d = new yp(),
        e = b.Yc.filter((g) => g !== null),
        f = a.H.concat(b.errors, b.exception ? [1] : []).filter(
          (g) => g !== null
        );
      up(
        rp(
          xp(
            wp(
              vp(
                tp(
                  sp(
                    mp(
                      op(
                        qp(
                          np(
                            d,
                            a.J.B.slice(0).map((g) => {
                              var h = new Ao();
                              return ni(h, 1, g);
                            })
                          ),
                          e.map((g) => {
                            var h = new Do();
                            return ni(h, 1, g);
                          })
                        ),
                        f.map((g) => Bo(g))
                      ),
                      x(a.B, Gv, 23)?.g()
                    ),
                    b.Vb
                  ),
                  b.Md
                ),
                b.wd
              ),
              b.fe
            ),
            b.ge
          ),
          a.L.map((g) => g.toString())
        ),
        So(
          Ro(
            Qo(
              Po(Oo(No(Mo(new To(), b.ob?.fi), b.ob?.Gi), b.ob?.mj), b.ob?.ji),
              b.ob?.gi
            ),
            b.ob?.fj
          ),
          b.ob?.hi
        )
      );
      if (b.hf)
        for (let g of qt(b.hf)) {
          e = new Eh();
          for (let h of b.hf.get(g)) Xo(e, Vo(Uo(new Wo(), h.xc), h.Sj));
          Dh(d).set(g.toString(), e);
        }
      x(a.B, dw, 24) && kp(d);
      nP(a, d);
      jK(c, d);
    }
  }
  function pP(a, b, c) {
    {
      var d = hO(a.l),
        e = b.g;
      const f = e.g,
        g = e.Of;
      let h = e.Vb,
        k = e.Pf,
        m = e.errors.slice(),
        l = e.Yc.slice(),
        n = b.exception;
      const p = QJ(a.g).had_ads_ablation ?? !1;
      d
        ? (d.numAutoAdsPlaced ? (h += d.numAutoAdsPlaced) : a.J.l && l.push(13),
          d.exception !== void 0 && (n = d.exception),
          d.numPostPlacementsPlaced && (k += d.numPostPlacementsPlaced),
          (c = {
            Vb: h,
            Of: g,
            Pf: k,
            Md: f,
            errors: e.errors.slice(),
            Yc: l,
            exception: n,
            wd: c,
            fe: !!d.eatf,
            ge: !!d.eatfAbg,
            Ti: p,
          }))
        : (l.push(12),
          a.J.l && l.push(13),
          (c = {
            Vb: h,
            Of: g,
            Pf: k,
            Md: f,
            errors: m,
            Yc: l,
            exception: n,
            wd: c,
            fe: !1,
            ge: !1,
            Ti: p,
          }));
    }
    c.ob = dO(a.l.g);
    if ((b = b.g.j)) c.hf = b;
    c.Ih = Qs(a.g).scrollHeight;
    if (Pm() || x(a.B, Fv, 25)?.j()) {
      d = Hu(a.l.j.j);
      b = [];
      for (const f of d) {
        d = {};
        e = f.T;
        for (const g of qt(e)) d[g] = e.get(g);
        d = {
          anchorElement: f.F.g(f.g),
          position: f.j(),
          clearBoth: f.H,
          locationType: f.Fd,
          placed: f.B,
          placementProto: f.l ? zg(f.l) : null,
          articleStructure: f.A ? zg(f.A) : null,
          rejectionReasons: d,
        };
        b.push(d);
      }
      Qm(14, [{ placementIdentifiers: b }, a.l.H, c.ob]);
    }
    return c;
  }
  function qP(a, b) {
    var c = a.l.g;
    c = c.googleSimulationState = c.googleSimulationState || {};
    c.amaConfigPlacementCount = b.Md;
    c.numAutoAdsPlaced = b.Vb;
    c.hasAtfAd = b.wd;
    b.exception !== void 0 && (c.exception = b.exception);
    if (a.l != null)
      if (
        ((a = GO(a.g, a.l, { ne: -1, ud: -1, Jd: -1, ih: !0, kg: !0 })), Ou(a))
      )
        (c.placementPositionDiffs = SO(a.getValue())),
          (b = RO(a.getValue())),
          (a = new Lo()),
          (a = z(a, 2, Ko, b)),
          (c.placementPositionDiffsReport = pj(a));
      else {
        c.placementPositionDiffs = "E" + a.g.message;
        var d = a.g;
        a = new Lo();
        b = a.setError;
        var e = new Jo();
        e = ni(e, 2, d.j);
        d = ni(e, 1, d.g);
        a = b.call(a, d);
        c.placementPositionDiffsReport = pj(a);
      }
  }
  function rP(a, b) {
    mP(a, {
      Vb: 0,
      Md: void 0,
      errors: [],
      Yc: [],
      exception: b,
      wd: void 0,
      fe: void 0,
      ge: void 0,
      ob: void 0,
    });
    oP(a, {
      Vb: 0,
      Md: void 0,
      errors: [],
      Yc: [],
      exception: b,
      wd: void 0,
      fe: void 0,
      ge: void 0,
      ob: void 0,
    });
  }
  var fP = class {
    constructor(a, b, c, d, e, f, g, h) {
      this.g = a;
      this.D = b;
      this.A = c;
      this.B = d;
      this.j = e;
      this.L = f;
      this.V = g || null;
      this.H = [];
      this.T = h;
      this.F = "n";
    }
    oa(a) {
      try {
        const b = cO(this.l.g) || void 0;
        iw({ Pg: b }, this.g);
        const c = pP(this, a, cO(this.l.g));
        rh(this.B, Fv, 25) && Ev(x(this.B, Fv, 25)) && qP(this, c);
        mP(this, c);
        oP(this, c);
        EC(753, () => {
          if (T(vx) && this.l != null) {
            var d = GO(this.g, this.l, {
                ne: U(Ix),
                ud: U(Hx),
                Jd: U(zx),
                ih: !0,
                kg: !1,
              }),
              e = ec(c);
            Ou(d)
              ? ((d = SO(d.getValue())), (e.placementPositionDiffs = d))
              : (e.placementPositionDiffs = "E" + d.g.message);
            e = lP(this, e);
            TO(this.D, lw, e);
          }
        })();
      } catch (b) {
        rP(this, b);
      }
    }
    ca(a) {
      rP(this, a);
    }
  };
  function sP(a) {
    if (tP(a) && ((a = a.data.height), a !== null && !isNaN(a)))
      return { height: Number(a) };
  }
  function tP({ origin: a, data: b }) {
    return a === "https://www.gstatic.com" && b.action === "resize";
  }
  var uP = class extends I {},
    vP = Dk(uP);
  function wP(a) {
    try {
      var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null;
    } catch (d) {
      b = null;
    }
    const c = b;
    return c ? Nu(() => vP(c)) : Ku(null);
  }
  function xP(a) {
    this.g = a || { cookie: "" };
  }
  function yP() {
    var a = zP;
    if (!r.navigator.cookieEnabled) return !1;
    if (!a.isEmpty()) return !0;
    a.set("TESTCOOKIESENABLED", "1", { we: 60 });
    if (a.get("TESTCOOKIESENABLED") !== "1") return !1;
    a.remove("TESTCOOKIESENABLED");
    return !0;
  }
  ba = xP.prototype;
  ba.set = function (a, b, c) {
    let d,
      e,
      f,
      g = !1,
      h;
    typeof c === "object" &&
      ((h = c.Fj),
      (g = c.Vf || !1),
      (f = c.domain || void 0),
      (e = c.path || void 0),
      (d = c.we));
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    d === void 0 && (d = -1);
    this.g.cookie =
      a +
      "=" +
      b +
      (f ? ";domain=" + f : "") +
      (e ? ";path=" + e : "") +
      (d < 0
        ? ""
        : d == 0
        ? ";expires=" + new Date(1970, 1, 1).toUTCString()
        : ";expires=" + new Date(Date.now() + d * 1e3).toUTCString()) +
      (g ? ";secure" : "") +
      (h != null ? ";samesite=" + h : "");
  };
  ba.get = function (a, b) {
    const c = a + "=",
      d = (this.g.cookie || "").split(";");
    for (let e = 0, f; e < d.length; e++) {
      f = Hb(d[e]);
      if (f.lastIndexOf(c, 0) == 0) return f.slice(c.length);
      if (f == a) return "";
    }
    return b;
  };
  ba.remove = function (a, b, c) {
    const d = this.get(a) !== void 0;
    this.set(a, "", { we: 0, path: b, domain: c });
    return d;
  };
  ba.isEmpty = function () {
    return !this.g.cookie;
  };
  ba.oe = function () {
    return this.g.cookie ? (this.g.cookie || "").split(";").length : 0;
  };
  ba.clear = function () {
    var a = (this.g.cookie || "").split(";");
    const b = [],
      c = [];
    let d, e;
    for (let f = 0; f < a.length; f++)
      (e = Hb(a[f])),
        (d = e.indexOf("=")),
        d == -1
          ? (b.push(""), c.push(e))
          : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    for (a = b.length - 1; a >= 0; a--) this.remove(b[a]);
  };
  var zP = new xP(typeof document == "undefined" ? null : document);
  function AP(a, b = window) {
    if (a.aa())
      try {
        return b.localStorage;
      } catch {}
    return null;
  }
  let BP;
  function CP(a) {
    return BP ? BP : a.origin === "null" ? (BP = !1) : (BP = DP(a));
  }
  function DP(a) {
    if (!a.navigator.cookieEnabled) return !1;
    const b = new xP(a.document);
    if (!b.isEmpty()) return !0;
    b.set("TESTCOOKIESENABLED", "1", {
      we: 60,
      Fj: a.isSecureContext ? "none" : void 0,
      Vf: a.isSecureContext || void 0,
    });
    if (b.get("TESTCOOKIESENABLED") !== "1") return !1;
    b.remove("TESTCOOKIESENABLED");
    return !0;
  }
  function EP(a, b) {
    b = b.origin !== "null" ? b.document.cookie : null;
    return b === null ? null : new xP({ cookie: b }).get(a) || "";
  }
  function FP(a, b, c, d) {
    d.origin !== "null" &&
      (d.isSecureContext && (c = { ...c, Fj: "none", Vf: !0 }),
      new xP(d.document).set(a, b, c));
  }
  function GP(a, b) {
    return gi(a, 5, b);
  }
  function HP(a, b) {
    return gi(a, 8, b);
  }
  function IP(a, b) {
    return gi(a, 12, b);
  }
  function JP(a, b) {
    return gi(a, 16, b);
  }
  var KP = class extends I {
    B() {
      return oi(this, 1);
    }
    j() {
      return oi(this, 2);
    }
    g() {
      return A(this, 3);
    }
    aa() {
      return A(this, 5);
    }
  };
  var OP = ({ Bb: a, C: b, Ra: c, pf: d = !1, qf: e = !1 }) => {
      LP({ C: b, Ra: c, pf: d, qf: e })
        ? (b = (b = MJ(BJ())) ? MP(b) : void 0)
          ? a(Ku(b))
          : NP()
              .then((f) => f.map(MP))
              .then(a)
        : a(Ku(GP(new KP(), !0)));
    },
    QP = ({ C: a, Ra: b, pf: c = !1, qf: d = !1 }) =>
      LP({ C: a, Ra: b, pf: c, qf: d })
        ? (b = MJ(BJ()))
          ? PP(a, MP(b))
          : Mu(Error("tcunav"))
        : PP(a, GP(new KP(), !0));
  function LP({ C: a, Ra: b, pf: c, qf: d }) {
    if (!(d = !d && UK(new YK(a)))) {
      if ((c = !c)) {
        if (b) {
          a = wP(a);
          if (Ou(a))
            if ((a = a.getValue()) && Bf(w(a, 1)) != null)
              b: switch (((a = C(a, 1)), a)) {
                case 1:
                  a = !0;
                  break b;
                default:
                  throw Error("Unhandled AutoGdprFeatureStatus: " + a);
              }
            else a = !1;
          else HC(806, a.g), (a = !1);
          b = !a;
        }
        c = b;
      }
      d = c;
    }
    return d ? !0 : !1;
  }
  function NP() {
    return new Promise((a) => {
      var b = BJ();
      a = { resolve: a };
      const c = GJ(b, 25, []);
      c.push(a);
      HJ(b, 25, c);
    }).then(RP);
  }
  function RP(a) {
    return a ? Ku(a) : Mu(Error("tcnull"));
  }
  function MP(a) {
    return GP(new KP(), PK(a));
  }
  function PP(a, b) {
    return (a = AP(b, a)) ? Ku(a) : Mu(Error("unav"));
  }
  function SP(a, b, c, d, e) {
    return new TP(a, b, c, d, e);
  }
  function UP(a) {
    a.j = !0;
    return a;
  }
  var TP = class {
    constructor(a, b, c, d, e) {
      this.g = a;
      this.A = b;
      this.B = c;
      this.j = !1;
      this.l = d;
      this.D = e;
    }
    run() {
      const a = this.B;
      if (this.j) {
        var b = this.g;
        if (this.l && !vJ(a)) {
          var c = new uP();
          c = ni(c, 1, 1);
        } else c = null;
        if (c) {
          c = pj(c);
          try {
            b.localStorage.setItem("google_auto_fc_cmp_setting", c);
          } catch (d) {}
        }
      }
      b = vJ(a) && (this.l || this.D);
      a && b && new rK(this.g, new aL(this.g, this.A), a, new SE(this.g)).run();
    }
  };
  var VP = class extends I {
    getName() {
      return C(this, 1);
    }
    getVersion() {
      return B(this, 3);
    }
  };
  var WP = [0, yk, -1, sk];
  var XP = class extends I {
    zl() {
      return C(this, 3);
    }
  };
  const YP = { "-": 0, Y: 2, N: 1 };
  var ZP = class extends I {
    getVersion() {
      return Wh(this, 2);
    }
  };
  function $P(a) {
    return a.includes("~") ? a.split("~").slice(1) : [];
  }
  function aQ(a) {
    return ve(a.length % 4 !== 0 ? a + "A" : a)
      .map((b) => b.toString(2).padStart(8, "0"))
      .join("");
  }
  function bQ(a) {
    if (!/^[0-1]+$/.test(a))
      throw Error(`Invalid input [${a}] not a bit string.`);
    return parseInt(a, 2);
  }
  function cQ(a) {
    if (!/^[0-1]+$/.test(a))
      throw Error(`Invalid input [${a}] not a bit string.`);
    const b = [1, 2, 3, 5];
    let c = 0;
    for (let d = 0; d < a.length - 1; d++)
      b.length <= d && b.push(b[d - 1] + b[d - 2]),
        (c += parseInt(a[d], 2) * b[d]);
    return c;
  }
  function dQ(a, b) {
    a = aQ(a);
    return a.length < b ? a.padEnd(b, "0") : a;
  }
  function eQ(a) {
    var b = aQ(a),
      c = bQ(b.slice(0, 6));
    a = bQ(b.slice(6, 12));
    var d = new ZP();
    c = G(d, 1, c);
    a = G(c, 2, a);
    b = b.slice(12);
    c = bQ(b.slice(0, 12));
    d = [];
    let e = b.slice(12).replace(/0+$/, "");
    for (let k = 0; k < c; k++) {
      if (e.length === 0)
        throw Error(
          `Found ${k} of ${c} sections [${d}] but reached end of input [${b}]`
        );
      var f = bQ(e[0]) === 0;
      e = e.slice(1);
      var g = fQ(e, b),
        h = d.length === 0 ? 0 : d[d.length - 1];
      h = cQ(g) + h;
      e = e.slice(g.length);
      if (f) d.push(h);
      else {
        f = fQ(e, b);
        g = cQ(f);
        for (let m = 0; m <= g; m++) d.push(h + m);
        e = e.slice(f.length);
      }
    }
    if (e.length > 0)
      throw Error(
        `Found ${c} sections [${d}] but has remaining input [${e}], entire input [${b}]`
      );
    return Fh(a, 3, d, Cf);
  }
  function fQ(a, b) {
    const c = a.indexOf("11");
    if (c === -1)
      throw Error(
        `Expected section bitstring but not found in [${a}] part of [${b}]`
      );
    return a.slice(0, c + 2);
  }
  var gQ = class extends I {
    g() {
      return C(this, 1);
    }
    j() {
      return C(this, 2);
    }
  };
  var hQ = class extends I {};
  var iQ = class extends I {
    getVersion() {
      return Wh(this, 1);
    }
  };
  var jQ = class extends I {};
  function kQ(a) {
    var b = new lQ();
    return y(b, 1, a);
  }
  var lQ = class extends I {};
  const mQ = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    nQ = 6 + mQ.reduce((a, b) => a + b);
  var oQ = class extends I {};
  var pQ = class extends I {
    getVersion() {
      return Wh(this, 1);
    }
  };
  var qQ = class extends I {};
  function rQ(a) {
    var b = new sQ();
    return y(b, 1, a);
  }
  var sQ = class extends I {};
  const tQ = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    uQ = 6 + tQ.reduce((a, b) => a + b);
  var vQ = class extends I {
    g() {
      return C(this, 1);
    }
    j() {
      return C(this, 2);
    }
    B() {
      return C(this, 3);
    }
  };
  var wQ = class extends I {};
  var xQ = class extends I {
    getVersion() {
      return Wh(this, 1);
    }
  };
  var yQ = class extends I {};
  function zQ(a) {
    var b = new AQ();
    return y(b, 1, a);
  }
  var AQ = class extends I {};
  const BQ = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    CQ = 6 + BQ.reduce((a, b) => a + b);
  var DQ = class extends I {
    g() {
      return C(this, 1);
    }
    j() {
      return C(this, 2);
    }
    B() {
      return C(this, 3);
    }
  };
  var EQ = class extends I {};
  var FQ = class extends I {
    getVersion() {
      return Wh(this, 1);
    }
  };
  const GQ = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    HQ = 6 + GQ.reduce((a, b) => a + b);
  var IQ = class extends I {
    j() {
      return C(this, 1);
    }
    B() {
      return C(this, 2);
    }
    g() {
      return C(this, 3);
    }
  };
  var JQ = class extends I {};
  function KQ(a) {
    var b = new LQ();
    return G(b, 1, a);
  }
  var LQ = class extends I {
    getVersion() {
      return Wh(this, 1);
    }
  };
  var MQ = class extends I {};
  function NQ(a) {
    var b = new OQ();
    return y(b, 1, a);
  }
  var OQ = class extends I {};
  const PQ = [
      2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
      2, 2,
    ],
    QQ = [
      2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
      2, 2, 2, 2, 2, 2, 2,
    ],
    RQ = 6 + QQ.reduce((a, b) => a + b);
  function SQ(a, b = [1]) {
    if (a.length === 0)
      throw Error("Cannot decode empty USNat section string.");
    var c = a.split(".");
    if (c.length > 2)
      throw Error(
        `Expected at most 2 segments but got ${c.length} when decoding ${a}.`
      );
    a = TQ(c[0], b);
    if (c.length === 1) a = NQ(a);
    else {
      a = NQ(a);
      c = c[1];
      if (c.length === 0)
        throw Error("Cannot decode empty GPC segment string.");
      b = dQ(c, 3);
      c = bQ(b.slice(0, 2));
      if (c < 0 || c > 1)
        throw Error(
          `Attempting to decode unknown GPC segment subsection type ${c}.`
        );
      c += 1;
      b = bQ(b.charAt(2));
      var d = new MQ();
      c = H(d, 2, c);
      c = D(c, 1, !!b);
      a = y(a, 2, c);
    }
    return a;
  }
  function TQ(a, b = [1]) {
    if (a.length === 0) throw Error("Cannot decode empty core segment string.");
    let c = dQ(a, RQ);
    const d = bQ(c.slice(0, 6));
    c = c.slice(6);
    if (!b.includes(d))
      throw Error(
        "Unable to decode unsupported USNat Section specification version " +
          `${d} - only ` +
          `version${b.length > 1 ? "s" : ""} ` +
          `${b.join(", ")} ` +
          `${b.length > 1 ? "are" : "is"} supported.`
      );
    let e = 0;
    const f = [],
      g = d === 1 ? PQ : QQ;
    for (let aj = 0; aj < g.length; aj++) {
      const em = g[aj];
      f.push(bQ(c.slice(e, e + em)));
      e += em;
    }
    if (d === 1) {
      var h = KQ(d),
        k = f.shift();
      var m = H(h, 2, k);
      var l = f.shift();
      var n = H(m, 3, l);
      var p = f.shift();
      var q = H(n, 4, p);
      var v = f.shift();
      var E = H(q, 5, v);
      var F = f.shift();
      var R = H(E, 6, F);
      var ea = f.shift();
      var J = H(R, 7, ea);
      var N = f.shift();
      var aa = H(J, 8, N);
      var db = f.shift();
      var Wb = H(aa, 9, db);
      var Aa = f.shift();
      var Ka = H(Wb, 10, Aa);
      var Yc = new JQ(),
        Hc = f.shift();
      var Ic = H(Yc, 1, Hc);
      var Md = f.shift();
      var ta = H(Ic, 2, Md);
      var qd = f.shift();
      var Qe = H(ta, 3, qd);
      var Og = f.shift();
      var Pg = H(Qe, 4, Og);
      var Qg = f.shift();
      var Rg = H(Pg, 5, Qg);
      var Sg = f.shift();
      var Tg = H(Rg, 6, Sg);
      var Ug = f.shift();
      var Vg = H(Tg, 7, Ug);
      var Wg = f.shift();
      var Xg = H(Vg, 8, Wg);
      var Yg = f.shift();
      var bj = H(Xg, 9, Yg);
      var cj = f.shift();
      var dj = H(bj, 10, cj);
      var ej = f.shift();
      var fj = H(dj, 11, ej);
      var gj = f.shift();
      var Ef = H(fj, 12, gj);
      var hj = y(Ka, 11, Ef);
      var Zg = new IQ(),
        ij = f.shift();
      var Ff = H(Zg, 1, ij);
      var jj = f.shift();
      var kj = H(Ff, 2, jj);
      var rd = y(hj, 12, kj);
      var lj = f.shift();
      var mj = H(rd, 13, lj);
      var Gf = f.shift();
      var nj = H(mj, 14, Gf);
      var Re = f.shift();
      var $g = H(nj, 15, Re);
      var ah = f.shift();
      var Hf = H($g, 16, ah);
    } else {
      var bh = KQ(d),
        cc = f.shift();
      var sd = H(bh, 2, cc);
      var Ta = f.shift();
      var Pb = H(sd, 3, Ta);
      var ch = f.shift();
      var de = H(Pb, 4, ch);
      var If = f.shift();
      var Jc = H(de, 5, If);
      var dc = f.shift();
      var Zc = H(Jc, 6, dc);
      var td = f.shift();
      var xb = H(Zc, 7, td);
      var sc = f.shift();
      var dh = H(xb, 8, sc);
      var oj = f.shift();
      var eh = H(dh, 9, oj);
      var ud = f.shift();
      var fh = H(eh, 10, ud);
      var Jf = new JQ(),
        Kf = f.shift();
      var ee = H(Jf, 1, Kf);
      var gh = f.shift();
      var hh = H(ee, 2, gh);
      var or = f.shift();
      var pr = H(hh, 3, or);
      var qr = f.shift();
      var rr = H(pr, 4, qr);
      var sr = f.shift();
      var tr = H(rr, 5, sr);
      var ur = f.shift();
      var vr = H(tr, 6, ur);
      var wr = f.shift();
      var xr = H(vr, 7, wr);
      var yr = f.shift();
      var zr = H(xr, 8, yr);
      var Ar = f.shift();
      var Br = H(zr, 9, Ar);
      var Cr = f.shift();
      var Dr = H(Br, 10, Cr);
      var Er = f.shift();
      var Fr = H(Dr, 11, Er);
      var Gr = f.shift();
      var Hr = H(Fr, 12, Gr);
      var Ir = f.shift();
      var Jr = H(Hr, 13, Ir);
      var Kr = f.shift();
      var Lr = H(Jr, 14, Kr);
      var fm = f.shift();
      var gm = H(Lr, 15, fm);
      var hm = f.shift();
      var im = H(gm, 16, hm);
      var jm = y(fh, 11, im);
      var km = new IQ(),
        lm = f.shift();
      var mm = H(km, 1, lm);
      var nm = f.shift();
      var om = H(mm, 2, nm);
      var pm = f.shift();
      var qm = H(om, 3, pm);
      var rm = y(jm, 12, qm);
      var sm = f.shift();
      var tm = H(rm, 13, sm);
      var um = f.shift();
      var vm = H(tm, 14, um);
      var wm = f.shift();
      var Mr = H(vm, 15, wm);
      var Nr = f.shift();
      Hf = H(Mr, 16, Nr);
    }
    return Hf;
  }
  var UQ = class extends I {};
  var VQ = class extends I {
    getVersion() {
      return Wh(this, 1);
    }
  };
  const WQ = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    XQ = 6 + WQ.reduce((a, b) => a + b);
  var YQ = class extends I {};
  function ZQ(a, b) {
    return Fh(a, 1, b, Af);
  }
  function $Q(a, b) {
    return Fh(a, 2, b, Af);
  }
  function aR(a, b) {
    return Fh(a, 3, b, Cf);
  }
  function bR(a, b) {
    Fh(a, 4, b, Cf);
  }
  var cR = class extends I {};
  function dR(a, b) {
    return ji(a, 1, b);
  }
  function eR(a) {
    var b = Number;
    {
      var c = w(a, 1);
      const d = typeof c;
      c =
        c == null
          ? c
          : d === "bigint"
          ? String(pf(64, c))
          : zf(c)
          ? d === "string"
            ? Of(c)
            : Pf(c)
          : void 0;
    }
    b = b(c ?? "0");
    a = Wh(a, 2);
    return new Date(b * 1e3 + a / 1e6);
  }
  var fR = class extends I {};
  function gR(a, b) {
    return G(a, 1, b);
  }
  function hR(a, b) {
    return y(a, 2, b);
  }
  function iR(a, b) {
    return y(a, 3, b);
  }
  function jR(a, b) {
    return G(a, 4, b);
  }
  function kR(a, b) {
    return G(a, 5, b);
  }
  function lR(a, b) {
    return G(a, 6, b);
  }
  function mR(a, b) {
    return mi(a, 7, b);
  }
  function nR(a, b) {
    return G(a, 8, b);
  }
  function oR(a, b) {
    return G(a, 9, b);
  }
  function pR(a, b) {
    return D(a, 10, b);
  }
  function qR(a, b) {
    return D(a, 11, b);
  }
  function rR(a, b) {
    return Fh(a, 12, b, Af);
  }
  function sR(a, b) {
    return Fh(a, 13, b, Af);
  }
  function tR(a, b) {
    return Fh(a, 14, b, Af);
  }
  function uR(a, b) {
    return D(a, 15, b);
  }
  function vR(a, b) {
    return mi(a, 16, b);
  }
  function wR(a, b) {
    return Fh(a, 17, b, Cf);
  }
  function xR(a, b) {
    return Fh(a, 18, b, Cf);
  }
  function yR(a, b) {
    return Ph(a, 19, b);
  }
  var zR = class extends I {
    getVersion() {
      return Wh(this, 1);
    }
  };
  var AR = class extends I {};
  var BR = "a".charCodeAt(),
    CR = bc(Cs),
    DR = bc(Ds);
  function ER(a, b) {
    if (a.g + b > a.j.length)
      throw Error("Requested length " + b + " is past end of string.");
    const c = a.j.substring(a.g, a.g + b);
    a.g += b;
    return parseInt(c, 2);
  }
  function FR(a) {
    a = ER(a, 36);
    var b = dR(new fR(), Math.floor(a / 10));
    return G(b, 2, (a % 10) * 1e8);
  }
  function GR(a) {
    return (
      String.fromCharCode(BR + ER(a, 6)) + String.fromCharCode(BR + ER(a, 6))
    );
  }
  function HR(a) {
    let b = ER(a, 12);
    const c = [];
    for (; b--; ) {
      var d = !!ER(a, 1) === !0,
        e = ER(a, 16);
      if (d) for (d = ER(a, 16); e <= d; e++) c.push(e);
      else c.push(e);
    }
    c.sort((f, g) => f - g);
    return c;
  }
  function IR(a, b, c) {
    const d = [];
    for (let e = 0; e < b; e++)
      if (ER(a, 1)) {
        const f = e + 1;
        if (c && c.indexOf(f) === -1)
          throw Error(`ID: ${f} is outside of allowed values!`);
        d.push(f);
      }
    return d;
  }
  function JR(a) {
    const b = ER(a, 16);
    return !!ER(a, 1) === !0
      ? ((a = HR(a)),
        a.forEach((c) => {
          if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }),
        a)
      : IR(a, b);
  }
  function KR(a) {
    const b = [];
    let c = ER(a, 12);
    for (; c--; ) {
      const k = ER(a, 6);
      var d = ER(a, 2),
        e = HR(a),
        f = b,
        g = f.push;
      var h = new YQ();
      h = H(h, 1, k);
      d = H(h, 2, d);
      e = Fh(d, 3, e, Cf);
      g.call(f, e);
    }
    return b;
  }
  var LR = class {
    constructor(a) {
      if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
      this.j = a;
      this.g = 0;
    }
    skip(a) {
      this.g += a;
    }
  };
  var MR = (a) => {
    try {
      const b = ve(a)
          .map((f) => f.toString(2).padStart(8, "0"))
          .join(""),
        c = new LR(b);
      if (ER(c, 3) !== 3) return null;
      const d = $Q(ZQ(new cR(), IR(c, 24, CR)), IR(c, 24, CR)),
        e = ER(c, 6);
      e !== 0 && bR(aR(d, IR(c, e)), IR(c, e));
      return d;
    } catch (b) {
      return null;
    }
  };
  var NR = (a) => {
    try {
      const b = ve(a)
          .map((d) => d.toString(2).padStart(8, "0"))
          .join(""),
        c = new LR(b);
      return yR(
        xR(
          wR(
            vR(
              uR(
                tR(
                  sR(
                    rR(
                      qR(
                        pR(
                          oR(
                            nR(
                              mR(
                                lR(
                                  kR(
                                    jR(
                                      iR(
                                        hR(gR(new zR(), ER(c, 6)), FR(c)),
                                        FR(c)
                                      ),
                                      ER(c, 12)
                                    ),
                                    ER(c, 12)
                                  ),
                                  ER(c, 6)
                                ),
                                GR(c)
                              ),
                              ER(c, 12)
                            ),
                            ER(c, 6)
                          ),
                          !!ER(c, 1)
                        ),
                        !!ER(c, 1)
                      ),
                      IR(c, 12, DR)
                    ),
                    IR(c, 24, CR)
                  ),
                  IR(c, 24, CR)
                ),
                !!ER(c, 1)
              ),
              GR(c)
            ),
            JR(c)
          ),
          JR(c)
        ),
        KR(c)
      );
    } catch (b) {
      return null;
    }
  };
  var PR = (a) => {
    if (!a) return null;
    a = a.split(".");
    if (a.length > 4) return null;
    var b = NR(a[0]);
    if (!b) return null;
    var c = new AR();
    b = y(c, 1, b);
    a.shift();
    for (const d of a)
      switch (OR(d)) {
        case 1:
        case 2:
          break;
        case 3:
          a = MR(d);
          if (!a) return null;
          y(b, 2, a);
          break;
        default:
          return null;
      }
    return b;
  };
  const OR = (a) => {
    try {
      const b = ve(a)
        .map((c) => c.toString(2).padStart(8, "0"))
        .join("");
      return ER(new LR(b), 3);
    } catch (b) {
      return -1;
    }
  };
  const QR = (a, b) => {
    const c = {};
    if (Array.isArray(b) && b.length !== 0)
      for (const d of b) c[d] = a.indexOf(d) !== -1;
    else for (const d of a) c[d] = !0;
    delete c[0];
    return c;
  };
  var SR = (a, b) => {
    try {
      var c = ve(a.split(".")[0])
        .map((e) => e.toString(2).padStart(8, "0"))
        .join("");
      const d = new LR(c);
      c = {};
      c.tcString = a;
      c.gdprApplies = b;
      d.skip(78);
      c.cmpId = ER(d, 12);
      c.cmpVersion = ER(d, 12);
      d.skip(30);
      c.tcfPolicyVersion = ER(d, 6);
      c.isServiceSpecific = !!ER(d, 1);
      c.useNonStandardStacks = !!ER(d, 1);
      c.specialFeatureOptins = RR(IR(d, 12, DR), DR);
      c.purpose = {
        consents: RR(IR(d, 24, CR), CR),
        legitimateInterests: RR(IR(d, 24, CR), CR),
      };
      c.purposeOneTreatment = !!ER(d, 1);
      c.publisherCC = GR(d);
      c.vendor = {
        consents: RR(JR(d), null),
        legitimateInterests: RR(JR(d), null),
      };
      return c;
    } catch (d) {
      return null;
    }
  };
  const RR = (a, b) => {
    const c = {};
    if (Array.isArray(b) && b.length !== 0)
      for (const d of b) c[d] = a.indexOf(d) !== -1;
    else for (const d of a) c[d] = !0;
    delete c[0];
    return c;
  };
  function hs(a, ...b) {
    try {
      const c = encodeURIComponent(se(bo(b, a.j)));
      a.l(
        `${"https://pagead2.googlesyndication.com/pagead/ping"}?e=${4}&d=${c}`
      );
    } catch (c) {
      ao(c, a.j);
    }
  }
  var TR = class extends is {
    constructor(a) {
      super(7, cr());
      this.l = a;
    }
  };
  var UR = class extends I {
    g() {
      return oi(this, 2);
    }
  };
  var VR = class extends I {
    B() {
      return oi(this, 2);
    }
  };
  var WR = class extends I {
    j() {
      return oi(this, 1);
    }
  };
  var YR = Dk(class extends I {});
  function ZR(a) {
    a = $R(a);
    try {
      var b = a ? YR(a) : null;
    } catch (c) {
      b = null;
    }
    return b ? x(b, WR, 4) || null : null;
  }
  function $R(a) {
    a = new xP(a).get("FCCDCF", "");
    if (a)
      if (a.startsWith("%"))
        try {
          var b = decodeURIComponent(a);
        } catch (c) {
          b = null;
        }
      else b = a;
    else b = null;
    return b;
  }
  function aS(a) {
    a.__tcfapiPostMessageReady || bS(new cS(a));
  }
  function bS(a) {
    a.g = (b) => {
      const c = typeof b.data === "string";
      let d;
      try {
        d = c ? JSON.parse(b.data) : b.data;
      } catch (f) {
        return;
      }
      const e = d.__tcfapiCall;
      e &&
        (e.command === "ping" ||
          e.command === "addEventListener" ||
          e.command === "removeEventListener") &&
        (0, a.C.__tcfapi)(
          e.command,
          e.version,
          (f, g) => {
            const h = {};
            h.__tcfapiReturn =
              e.command === "removeEventListener"
                ? { success: f, callId: e.callId }
                : { returnValue: f, success: g, callId: e.callId };
            f = c ? JSON.stringify(h) : h;
            b.source &&
              typeof b.source.postMessage === "function" &&
              b.source.postMessage(f, b.origin);
            return f;
          },
          e.parameter
        );
    };
    a.C.addEventListener("message", a.g);
    a.C.__tcfapiPostMessageReady = !0;
  }
  var cS = class {
    constructor(a) {
      this.C = a;
    }
  };
  function dS(a) {
    a.__uspapiPostMessageReady || eS(new fS(a));
  }
  function eS(a) {
    a.g = (b) => {
      const c = typeof b.data === "string";
      let d;
      try {
        d = c ? JSON.parse(b.data) : b.data;
      } catch (f) {
        return;
      }
      const e = d.__uspapiCall;
      e &&
        e.command === "getUSPData" &&
        a.C.__uspapi(e.command, e.version, (f, g) => {
          const h = {};
          h.__uspapiReturn = { returnValue: f, success: g, callId: e.callId };
          f = c ? JSON.stringify(h) : h;
          b.source &&
            typeof b.source.postMessage === "function" &&
            b.source.postMessage(f, b.origin);
          return f;
        });
    };
    a.C.addEventListener("message", a.g);
    a.C.__uspapiPostMessageReady = !0;
  }
  var fS = class {
    constructor(a) {
      this.C = a;
      this.g = null;
    }
  };
  var gS = class extends I {};
  var hS = Dk(
    class extends I {
      g() {
        return oi(this, 1);
      }
    }
  );
  function iS(a, b) {
    function c(n) {
      if (n.length < 10) return null;
      var p = h(n.slice(0, 4));
      p = k(p);
      n = h(n.slice(6, 10));
      n = m(n);
      return "1" + p + n + "N";
    }
    function d(n) {
      if (n.length < 10) return null;
      var p = h(n.slice(0, 6));
      p = k(p);
      n = h(n.slice(6, 10));
      n = m(n);
      return "1" + p + n + "N";
    }
    function e(n) {
      if (n.length < 12) return null;
      var p = h(n.slice(0, 6));
      p = k(p);
      n = h(n.slice(8, 12));
      n = m(n);
      return "1" + p + n + "N";
    }
    function f(n) {
      if (n.length < 18) return null;
      var p = h(n.slice(0, 8));
      p = k(p);
      n = h(n.slice(12, 18));
      n = m(n);
      return "1" + p + n + "N";
    }
    function g(n) {
      if (n.length < 10) return null;
      var p = h(n.slice(0, 6));
      p = k(p);
      n = h(n.slice(6, 10));
      n = m(n);
      return "1" + p + n + "N";
    }
    function h(n) {
      const p = [];
      let q = 0;
      for (let v = 0; v < n.length / 2; v++)
        p.push(bQ(n.slice(q, q + 2))), (q += 2);
      return p;
    }
    function k(n) {
      return n.every((p) => p === 1) ? "Y" : "N";
    }
    function m(n) {
      return n.some((p) => p === 1) ? "Y" : "N";
    }
    if (a.length === 0) return null;
    a = a.split(".");
    if (a.length > 2) return null;
    a = aQ(a[0]);
    const l = bQ(a.slice(0, 6));
    a = a.slice(6);
    if (l !== 1) return null;
    switch (b) {
      case 8:
        return c(a);
      case 10:
      case 12:
      case 9:
        return d(a);
      case 11:
        return e(a);
      case 7:
        return f(a);
      case 13:
        return g(a);
      default:
        return null;
    }
  }
  function jS(a) {
    !a.l ||
      a.C.__uspapi ||
      a.C.frames.__uspapiLocator ||
      ((a.C.__uspapiManager = "fc"),
      AK(a.C, "__uspapiLocator"),
      Ca(
        "__uspapi",
        (b, c, d) => {
          typeof d === "function" &&
            b === "getUSPData" &&
            ((b = !A(a.j, 3)),
            d({ version: 1, uspString: b ? "1---" : a.l }, !0));
        },
        a.C
      ),
      dS(a.C));
  }
  function kS(a) {
    !a.tcString ||
      a.C.__tcfapi ||
      a.C.frames.__tcfapiLocator ||
      ((a.C.__tcfapiManager = "fc"),
      AK(a.C, "__tcfapiLocator"),
      (a.C.__tcfapiEventListeners = a.C.__tcfapiEventListeners || []),
      Ca(
        "__tcfapi",
        (b, c, d, e) => {
          if (typeof d === "function")
            if (c && (c > 2.2 || c <= 1)) d(null, !1);
            else {
              var f = a.C.__tcfapiEventListeners;
              c = !a.j.g();
              switch (b) {
                case "ping":
                  d({
                    gdprApplies: !c,
                    cmpLoaded: !0,
                    cmpStatus: "loaded",
                    displayStatus: "disabled",
                    apiVersion: "2.2",
                    cmpVersion: 2,
                    cmpId: 300,
                  });
                  break;
                case "addEventListener":
                  e = f.push(d);
                  b = !c;
                  --e;
                  a.tcString
                    ? ((b = SR(a.tcString, b)),
                      (b.addtlConsent = a.g != null ? a.g : void 0),
                      (b.cmpStatus = "loaded"),
                      (b.eventStatus = "tcloaded"),
                      e != null && (b.listenerId = e))
                    : (b = null);
                  d(b, !0);
                  break;
                case "removeEventListener":
                  e !== void 0 && f[e] ? ((f[e] = null), d(!0)) : d(!1);
                  break;
                case "getInAppTCData":
                case "getVendorList":
                  d(null, !1);
                  break;
                case "getTCData":
                  d(null, !1);
              }
            }
        },
        a.C
      ),
      aS(a.C));
  }
  function lS(a) {
    if (!a?.g() || B(a, 1).length === 0 || Nh(a, gS, 2, wh()).length === 0)
      return null;
    const b = B(a, 1);
    let c;
    try {
      var d = eQ(b.split("~")[0]);
      c = $P(b);
    } catch (e) {
      return null;
    }
    a = Nh(a, gS, 2, wh()).reduce((e, f) => {
      var g = mS(e);
      g = Xh(g, 1);
      g = qw(g);
      var h = mS(f);
      h = Xh(h, 1);
      return g > qw(h) ? e : f;
    });
    d = Zh(d, 3).indexOf(Wh(a, 1));
    return d === -1 || d >= c.length
      ? null
      : { uspString: iS(c[d], Wh(a, 1)), Hg: eR(mS(a)) };
  }
  function nS(a) {
    a = a.find((b) => b && C(b, 1) === 13);
    if (a?.g())
      try {
        return hS(B(a, 2));
      } catch (b) {}
    return null;
  }
  function mS(a) {
    return rh(a, fR, 2) ? x(a, fR, 2) : dR(new fR(), 0);
  }
  var oS = class {
    constructor(a, b) {
      this.C = a;
      this.j = b;
      b = $R(this.C.document);
      try {
        var c = b ? YR(b) : null;
      } catch (e) {
        c = null;
      }
      (b = c)
        ? ((c = x(b, VR, 5) || null),
          (b = Nh(b, UR, 7, wh())),
          (b = nS(b ?? [])),
          (c = { ui: c, Si: b }))
        : (c = { ui: null, Si: null });
      b = c;
      c = lS(b.Si);
      b = b.ui;
      if (b?.B() && B(b, 2).length !== 0) {
        var d = rh(b, fR, 1) ? x(b, fR, 1) : dR(new fR(), 0);
        b = { uspString: B(b, 2), Hg: eR(d) };
      } else b = null;
      this.l =
        b && c
          ? c.Hg > b.Hg
            ? c.uspString
            : b.uspString
          : b
          ? b.uspString
          : c
          ? c.uspString
          : null;
      this.tcString = (c = ZR(a.document)) && c.j() ? B(c, 1) : null;
      this.g = (a = ZR(a.document)) && oi(a, 2) ? B(a, 2) : null;
    }
  };
  function pS() {
    const a = Jb();
    return a
      ? Oa(
          "AmazonWebAppPlatform;Android TV;Apple TV;AppleTV;BRAVIA;BeyondTV;Freebox;GoogleTV;HbbTV;LongTV;MiBOX;MiTV;NetCast.TV;Netcast;Opera TV;PANASONIC;POV_TV;SMART-TV;SMART_TV;SWTV;Smart TV;SmartTV;TV Store;UnionTV;WebOS".split(
            ";"
          ),
          (b) => Ib(a, b)
        ) ||
        (Ib(a, "OMI/") && !Ib(a, "XiaoMi/"))
        ? !0
        : Ib(a, "Presto") &&
          Ib(a, "Linux") &&
          !Ib(a, "X11") &&
          !Ib(a, "Android") &&
          !Ib(a, "Mobi")
      : !1;
  }
  function qS(a) {
    const b = a[0] / 255,
      c = a[1] / 255;
    a = a[2] / 255;
    return (
      (b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4)) * 0.2126 +
      (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)) * 0.7152 +
      (a <= 0.03928 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4)) * 0.0722
    );
  }
  var rS = (a, b) => {
    a = qS(a);
    b = qS(b);
    return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
  };
  function sS(a, b, c, d = null) {
    const e = (g) => {
      let h;
      try {
        h = JSON.parse(g.data);
      } catch (k) {
        return;
      }
      !h ||
        h.googMsgType !== b ||
        (d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g)) ||
        c(h, g);
    };
    wl(a, "message", e);
    let f = !1;
    return () => {
      let g = !1;
      f || ((f = !0), (g = xl(a, "message", e)));
      return g;
    };
  }
  function tS(a, b, c, d = null) {
    const e = sS(
      a,
      b,
      wb(c, () => e()),
      d
    );
    return e;
  }
  function uS(a, b, c, d) {
    c.googMsgType = b;
    a.postMessage(JSON.stringify(c), d);
  }
  function vS(a, b, c, d, e) {
    if (!(e <= 0) && (uS(a, b, c, d), (a = a.frames)))
      for (let f = 0; f < a.length; ++f) e > 1 && vS(a[f], b, c, d, --e);
  }
  function wS(a, b, c, d) {
    return sS(
      a,
      "fullscreen",
      d.hc(952, (e, f) => {
        if (f.source === b) {
          if (!("eventType" in e))
            throw Error(`bad message ${JSON.stringify(e)}`);
          delete e.googMsgType;
          c(e);
        }
      })
    );
  }
  class xS {
    constructor() {
      this.promise = new Promise((a, b) => {
        this.resolve = a;
        this.reject = b;
      });
    }
  }
  async function yS(a) {
    return a.A.promise;
  }
  async function zS(a) {
    return a.j.promise;
  }
  async function AS(a) {
    return a.l.promise;
  }
  function BS(a, b) {
    b.type = "err_st";
    b.slot = a.slotType;
    b.freq = 0.25;
    a.qem && (b.qem = a.qem);
    b.tag_type = a.D.bn;
    b.version = a.D.version;
    Wn(a.K, "fullscreen_tag", b, !1, 0.25);
  }
  class CS extends O {
    constructor(a, b, c) {
      var d = AC,
        e = yC,
        f = { bn: 2, version: cr() };
      super();
      this.slotType = a;
      this.pubWin = b;
      this.Gg = c;
      this.gb = d;
      this.K = e;
      this.D = f;
      this.state = 1;
      this.qem = null;
      this.A = new xS();
      this.j = new xS();
      this.l = new xS();
    }
    init() {
      const a = wS(
        this.pubWin,
        this.Gg,
        (b) => {
          if (b.eventType === "adError") this.l.resolve(), (this.state = 4);
          else if (b.eventType === "adReady" && this.state === 1)
            (this.qem = b.qem),
              b.slotType !== this.slotType &&
                (BS(this, {
                  cur_st: this.state,
                  evt: b.eventType,
                  adp_tp: b.slotType,
                }),
                (this.state = 4)),
              this.A.resolve(),
              (this.state = 2);
          else if (b.eventType === "adClosed" && this.state === 2)
            this.j.resolve(b.result), (this.state = 3);
          else if (b.eventType !== "adClosed" || this.state !== 3)
            b.eventType === "adClosed" &&
              b.closeAfterError &&
              (this.j.resolve(b.result), (this.state = 3)),
              BS(this, { cur_st: this.state, evt: b.eventType }),
              (this.state = 4);
        },
        this.gb
      );
      Ct(this, a);
    }
  }
  var DS = Promise;
  class ES {
    constructor(a) {
      this.l = a;
    }
    g(a, b, c) {
      this.l.then((d) => {
        d.g(a, b, c);
      });
    }
    j(a, b) {
      return this.l.then((c) => c.j(a, b));
    }
  }
  class FS {
    constructor(a) {
      this.data = a;
    }
  }
  function GS(a, b) {
    HS(a, b);
    return new IS(a);
  }
  class IS {
    constructor(a) {
      this.l = a;
    }
    g(a, b, c = []) {
      const d = new MessageChannel();
      HS(d.port1, b);
      this.l.postMessage(a, [d.port2].concat(c));
    }
    j(a, b) {
      return new DS((c) => {
        this.g(a, c, b);
      });
    }
  }
  function HS(a, b) {
    b &&
      (a.onmessage = (c) => {
        b(new FS(c.data, GS(c.ports[0])));
      });
  }
  var JS = class {
    constructor(a) {
      this.g = a;
    }
  };
  const KS = (a) => {
    const b = Object.create(null);
    (typeof a === "string" ? [a] : a).forEach((c) => {
      if (c === "null")
        throw Error(
          "Receiving from null origin not allowed without token verification. Please use NullOriginConnector."
        );
      b[c] = !0;
    });
    return (c) => b[c] === !0;
  };
  var MS = ({
    destination: a,
    R: b,
    origin: c,
    Hb: d = "ZNWN1d",
    onMessage: e,
    pj: f,
  }) =>
    LS({
      destination: a,
      Al: () => b.contentWindow,
      pm:
        c instanceof JS
          ? c
          : typeof c === "function"
          ? new JS(c)
          : new JS(KS(c)),
      Hb: d,
      onMessage: e,
      pj: f,
    });
  const LS = ({
    destination: a,
    Al: b,
    pm: c,
    Yq: d,
    Hb: e,
    onMessage: f,
    pj: g,
  }) =>
    new ES(
      new DS((h, k) => {
        const m = (l) => {
          l.source &&
            l.source === b() &&
            c.g(l.origin) &&
            (l.data.n || l.data) === e &&
            (a.removeEventListener("message", m, !1),
            d && l.data.t !== d
              ? k(
                  Error(
                    `Token mismatch while establishing channel "${e}". Expected ${d}, but received ${l.data.t}.`
                  )
                )
              : (h(GS(l.ports[0], f)), g && g(l)));
        };
        a.addEventListener("message", m, !1);
      })
    );
  function NS(a) {
    return hb((b) => {
      if (b instanceof a) return !0;
      const c = b?.ownerDocument?.defaultView?.[a.name];
      return jb(c) && b instanceof c;
    });
  }
  NS(Node);
  var OS = NS(Element),
    PS = NS(HTMLElement);
  NS(SVGElement);
  var QS = Bk(to);
  var RS = Bk(uo);
  var SS = Bk(wo);
  var TS = Bk(so);
  var US = Bk(vo);
  function VS(a, b, c, d, e, f = null) {
    if (e) {
      if (T(rx)) var g = null;
      else
        try {
          g = e.getItem("google_ama_config");
        } catch (m) {
          g = null;
        }
      try {
        var h = g ? ew(g) : null;
      } catch (m) {
        h = null;
      }
    } else h = null;
    a: {
      if (d)
        try {
          var k = ew(d);
          break a;
        } catch (m) {
          WO(a, { cfg: 1, inv: 1 });
        }
      k = null;
    }
    if ((d = k)) {
      if (e) {
        k = new tv();
        y(d, 3, k);
        h = pw(d?.g()?.j()) || 1;
        h = Date.now() + 864e5 * h;
        Number.isFinite(h) && ii(k, 1, Math.round(h));
        k = Ng(d);
        d.g() &&
          ((h = new sv()),
          (g = d?.g()?.g()),
          (h = gi(h, 23, g)),
          (g = d?.g()?.B()),
          (h = gi(h, 12, g)),
          y(k, 15, h));
        h = Nh(k, Sv, 1, wh());
        for (g = 0; g < h.length; g++) ph(h[g], 11);
        ph(k, 22);
        if (T(rx)) cP(a, e);
        else
          try {
            e.setItem("google_ama_config", pj(k));
          } catch (m) {
            WO(a, { lserr: 1 });
          }
      }
      e = aP(a, Nh(d, Dv, 7, wh()));
      k = {};
      T(sx) || (k.Am = x(d, Mv, 8) || new Mv());
      e && (k.qa = e);
      e && $O(e, 3) && (k.je = [1]);
      e = k;
      RJ(a, 2) &&
        (Qm(5, [zg(d)]),
        (c = XO(c)),
        (k = ((k = e.qa) && ei(k, 4)) || ""),
        (c.google_package = k),
        eP(a, b, d, e, new jv(["google-auto-placed"], c), f));
      return !0;
    }
    h && (WO(a, { cfg: 1, cl: 1 }), e != null && cP(a, e));
    return !1;
  }
  function WS(a) {
    a.j != null ||
      a.B ||
      ((a.j = new MutationObserver((b) => {
        for (const c of b)
          for (const d of c.addedNodes)
            sa(d) &&
              d.nodeType == 1 &&
              ((b = a), d.matches('A[href]:not([href=""])') && Ut(b.l, d));
      })),
      a.j.observe(a.C.document.documentElement, {
        childList: !0,
        subtree: !0,
      }));
  }
  var XS = class extends O {
    constructor(a) {
      super();
      this.C = a;
      this.l = new Vt();
      this.j = null;
      Ct(this, () => {
        this.j?.disconnect();
        this.j = null;
      });
    }
  };
  function YS(a, b) {
    b.addEventListener("click", () => {
      var c = a.g;
      var d = b.getAttribute("href");
      c = d
        ? d === "#"
          ? Ku(Ep(4))
          : d.startsWith("#")
          ? Ku(Ep(5))
          : ZS(d, c)
        : Mu(Error("Empty href"));
      if (Ou(c)) {
        d = c.getValue();
        c = a.Z;
        var e = new Gp();
        d = y(e, 1, d);
        c.call(a, d);
      } else a.j(c.g);
    });
  }
  var aT = class {
    constructor(a, b, c) {
      var d = $S();
      this.C = a;
      this.g = b;
      this.Z = c;
      this.j = d;
    }
    init() {
      const a = new XS(this.C);
      Array.from(
        a.C.document.querySelectorAll('A[href]:not([href=""])')
      ).forEach((b) => {
        YS(this, b);
      });
      WS(a);
      St(a.l).listen((b) => {
        YS(this, b);
      });
    }
  };
  function ZS(a, b) {
    return bT(a, b).map((c) =>
      bT(b).map((d) => {
        if (c.protocol === "http:" || c.protocol === "https:") {
          var e = Ep(2);
          e = mi(e, 2, `${c.host}${c.pathname}`);
          d = mi(e, 3, `${d.host}${d.pathname}`);
        } else d = c.protocol === "javascript:" ? Ep(3) : Ep(1);
        return d;
      })
    );
  }
  function bT(a, b) {
    return Ru(
      Nu(() => new URL(a, b)),
      () => Error("Invalid URL")
    );
  }
  function cT(a) {
    if (a < 0 || !Number.isInteger(a))
      return Mu(Error(`Not a non-negative integer: ${a}`));
    const b = [];
    do
      b.push(
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(
          a % 64
        )
      ),
        (a = Math.floor(a / 64));
    while (a > 0);
    return Ku(b.reverse().join(""));
  }
  class dT {
    constructor() {
      this.Yj = 5e3;
    }
    Mk() {
      return 5e3;
    }
  }
  function eT(a, b) {
    return a.quantizer ? (Math.floor(b / 5e3) * 5e3) / a.quantizer.Yj : b;
  }
  function fT(a, b) {
    b = b.map((c) => eT(a, c));
    return gT(b, a.g === void 0 ? void 0 : eT(a, a.g))
      .map((c) => {
        a: {
          var d = hT;
          const e = [];
          for (const f of c) {
            c = d(f);
            if (!Ou(c)) {
              d = Mu(c.g);
              break a;
            }
            e.push(c.getValue());
          }
          d = Ku(e);
        }
        return d;
      })
      .map((c) => c.join("."))
      .map((c) => iT(c, a.quantizer?.Mk()));
  }
  var jT = class {
    constructor(a, b) {
      this.quantizer = a;
      this.g = b;
    }
  };
  function hT(a) {
    const b = cT(a.value);
    if (!Ou(b)) return b;
    const c = b.getValue();
    return a.Uf === 1
      ? Ku(`${c}`)
      : a.Uf === 2
      ? Ku(`${c}${"~"}`)
      : Tu(cT(a.Uf - 2), (d) => {
          throw d;
        }).map((d) => `${c}${"~"}${d}`);
  }
  function gT(a, b) {
    const c = [];
    for (let d = 0; d < a.length; d++) {
      const e = a[d] ?? b;
      if (e === void 0) return Mu(Error("Sparse but no default"));
      c.length === 0 || e !== c[c.length - 1].value
        ? c.push({ value: e, Uf: 1 })
        : c[c.length - 1].Uf++;
    }
    return Ku(c);
  }
  function iT(a, b) {
    return a === "" ? Ku("") : kT(b).map((c) => `${c}${a}`);
  }
  function kT(a) {
    return a === void 0 || a === 1
      ? Ku("")
      : Su(cT(a), "ComFactor: ").map((b) => `${"~"}${b}${"."}`);
  }
  var lT = class extends O {
    constructor(a) {
      super();
      this.C = a;
      this.l = new P(!1);
      this.j = () => {
        this.l.g(this.C.document.hasFocus());
      };
    }
    init() {
      this.C.addEventListener("focus", this.j);
      this.C.addEventListener("blur", this.j);
      Ct(this, () => void this.C.removeEventListener("focus", this.j));
      Ct(this, () => void this.C.removeEventListener("blur", this.j));
      this.l.g(this.C.document.hasFocus());
    }
  };
  function mT(a) {
    a.l.g(a.C.document.visibilityState === "visible");
  }
  var nT = class extends O {
    constructor(a) {
      super();
      this.C = a;
      this.l = new P(!1);
      this.j = () => void mT(this);
    }
    init() {
      this.C.addEventListener("visibilitychange", this.j);
      Ct(
        this,
        () => void this.C.removeEventListener("visibilitychange", this.j)
      );
      mT(this);
    }
  };
  function oT(a) {
    return a.g !== null ? a.j + a.l() - a.g : a.j;
  }
  var qT = class {
    constructor(a) {
      this.C = a;
      this.j = 0;
      this.g = null;
      this.l = pT(this.C);
    }
    start() {
      this.g === null && (this.g = this.l());
    }
  };
  function pT(a) {
    return a.performance && a.performance.now
      ? () => a.performance.now()
      : () => Date.now();
  }
  function rT(a) {
    a = new sT(a);
    a.init();
    return a;
  }
  function tT(a) {
    const b = fu(a.C, 1e3, () => void a.handleEvent());
    a.C.addEventListener("scroll", () => void b());
  }
  function uT(a) {
    const b = vT(a.C),
      c = () => {
        const d = vT(a.C),
          e = Math.abs(d.height - b.height);
        if (Math.abs(d.width - b.width) > 20 || e > 20)
          (a.H = !0), a.C.removeEventListener("resize", c);
      };
    a.C.addEventListener("resize", c);
  }
  function wT(a) {
    a.B = !a.g.X;
    Nt(a.g, !1, () => {
      a.C.setTimeout(() => {
        a.B = !0;
      }, 100);
    });
  }
  function xT(a) {
    Mt(a.g, !0, () => void a.l.start());
    Mt(a.g, !1, () => {
      var b = a.l;
      b.g !== null && (b.j += b.l() - b.g);
      b.g = null;
    });
    a.F.start();
  }
  function yT(a) {
    var b = a.C.scrollY;
    var c = Ms(a.C);
    b = {
      ag: Math.floor(b / 100),
      Ze: Math.floor((b + c) / 100),
      Oj: a.C.performance.now(),
    };
    if (b.ag < 0 || b.Ze < 0 || b.ag > 1e3 || b.Ze > 1e3)
      (a.J = !0), (a.j = null);
    else {
      if (a.j) {
        c = a.j;
        var d = new SH(c.ag, c.Ze),
          e = new SH(b.ag, b.Ze);
        var f = Math.max(d.start, e.start);
        d = Math.min(d.end, e.end);
        if ((f = f <= d ? new SH(f, d) : null))
          for (c = b.Oj - c.Oj, d = f.start; d <= f.end; d++)
            a.D[d] = (a.D[d] ?? 0) + c;
      }
      a.j = a.A.X ? b : null;
    }
  }
  var sT = class {
    constructor(a) {
      this.C = a;
      this.D = [];
      this.H = this.B = this.J = !1;
      this.j = null;
      var b = this.C;
      a = new lT(b);
      a.init();
      a = Jt(a.l);
      b = new nT(b);
      b.init();
      b = Jt(b.l);
      this.A = this.g = It(a, b);
      this.l = new qT(this.C);
      this.F = new qT(this.C);
      this.L = new jT(new jT(new dT()).quantizer, 0);
    }
    init() {
      tT(this);
      uT(this);
      wT(this);
      xT(this);
      this.A.listen(() => void yT(this));
      r.setInterval(() => void this.handleEvent(), 5e3);
      this.handleEvent();
    }
    handleEvent() {
      this.A.X && yT(this);
    }
  };
  function vT(a) {
    return new Kk(Ls(a), Ms(a));
  }
  function zT(a, { Ra: b }) {
    a = new AT(a, b);
    if (!a.Ra && T(Xx)) {
      b = a.C;
      var c = BT(CT(a));
      new aT(b, b.document.baseURI, c).init();
    }
    DT(a);
  }
  function DT(a) {
    if (T(Yx)) {
      var b = rT(a.C);
      ns(
        new XJ(a.C),
        ET(() => {
          var c = CT(a),
            d = new Jp(),
            e = fT(b.L, b.D);
          if (!Ou(e)) throw Su(e, "PVDC: ").g;
          var f = new Ip();
          f = G(f, 2, 5e3);
          f = G(f, 1, 100);
          e = e.getValue();
          e = mi(f, 3, e);
          f = vT(b.C);
          var g = new Hp();
          g = G(g, 1, f.width);
          f = G(g, 2, f.height);
          e = y(e, 4, f);
          f = new Hp();
          f = G(f, 1, Qs(b.C).scrollWidth);
          f = G(f, 2, Qs(b.C).scrollHeight);
          e = y(e, 5, f);
          e = D(e, 6, b.B);
          f = Math.round(oT(b.F) / 1e3);
          e = G(e, 8, f);
          f = Math.round(oT(b.l) / 1e3);
          e = G(e, 9, f);
          b.J && Qh(e, 7, Af, 1, Bf);
          b.H && Qh(e, 7, Af, 2, Bf);
          d = z(d, 2, Kp, e);
          c(d);
        })
      );
    }
  }
  function CT(a) {
    if (!a.Z) {
      const b = ZJ();
      a.Z = (c) => {
        nK(b, c);
      };
    }
    return a.Z;
  }
  var AT = class {
    constructor(a, b) {
      this.C = a;
      this.Ra = b;
      this.Z = null;
    }
  };
  function BT(a) {
    return (b) => {
      var c = new Jp();
      b = z(c, 1, Kp, b);
      return void a(b);
    };
  }
  function $S() {
    return (a) => {
      HC(1243, a, void 0, FT("LCC"));
    };
  }
  function ET(a) {
    return () => void DC(1243, a, FT("PVC"));
  }
  function FT(a) {
    return (b) => {
      b.errSrc = a;
    };
  }
  const GT = {
    google: 1,
    googlegroups: 1,
    gmail: 1,
    googlemail: 1,
    googleimages: 1,
    googleprint: 1,
  };
  function HT(a, b = !1) {
    try {
      return b
        ? new Kk(a.innerWidth, a.innerHeight).round()
        : Rk(a || window).round();
    } catch (c) {
      return new Kk(-12245933, -12245933);
    }
  }
  function IT(a = r) {
    a = a.devicePixelRatio;
    return typeof a === "number" ? +a.toFixed(3) : null;
  }
  function JT(a, b = r) {
    a =
      a.scrollingElement ||
      (a.compatMode === "CSS1Compat" ? a.documentElement : a.body);
    return new Jk(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop);
  }
  function KT(a) {
    try {
      return !(
        !a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
      );
    } catch (b) {
      return !1;
    }
  }
  function LT(a, b) {
    var c = AC,
      d;
    var e;
    d = (e =
      (e = Sm()) &&
      (d = e.initialLayoutRect) &&
      typeof d.top === "number" &&
      typeof d.left === "number" &&
      typeof d.width === "number" &&
      typeof d.height === "number"
        ? new fl(d.left, d.top, d.width, d.height)
        : null)
      ? new Jk(e.left, e.top)
      : (d = Vm()) && d.rootBounds && sa(d.rootBounds)
      ? new Jk(
          d.rootBounds.left + d.boundingClientRect.left,
          d.rootBounds.top + d.boundingClientRect.top
        )
      : null;
    if (d) return d;
    try {
      {
        const h = new Jk(0, 0);
        let k = Tk(Ok(b));
        if (jc(k, "parent")) {
          do {
            if (k == a) var f = pl(b);
            else {
              const m = nl(b);
              f = new Jk(m.left, m.top);
            }
            d = f;
            h.x += d.x;
            h.y += d.y;
          } while (
            k &&
            k != a &&
            k != k.parent &&
            (b = k.frameElement) &&
            (k = k.parent)
          );
        }
        var g = h;
      }
      return g;
    } catch (h) {
      return c.ma(888, h), new Jk(-12245933, -12245933);
    }
  }
  function MT(a, b, c, d = !1) {
    a = LT(a, c);
    c = Wm() || HT(b.top);
    if (
      !a ||
      a.y === -12245933 ||
      c.width === -12245933 ||
      c.height === -12245933 ||
      !c.height
    )
      return 0;
    let e = 0;
    try {
      const f = b.top;
      e = JT(f.document, f).y;
    } catch (f) {
      return 0;
    }
    b = e + c.height;
    return a.y < e
      ? d
        ? 0
        : (e - a.y) / c.height
      : a.y > b
      ? (a.y - b) / c.height
      : 0;
  }
  function NT(a) {
    return a.length ? a.join("~") : void 0;
  }
  var OT = {
      no: "google_ads_preview",
      Lo: "google_mc_lab",
      Uo: "google_anchor_debug",
      To: "google_bottom_anchor_debug",
      INTERSTITIAL: "google_ia_debug",
      up: "google_scr_debug",
      xp: "google_ia_debug_allow_onclick",
      Rp: "googleads",
      Zj: "google_pedestal_debug",
      mq: "google_responsive_slot_preview",
      lq: "google_responsive_dummy_ad",
    },
    PT = {
      google_bottom_anchor_debug: 1,
      google_anchor_debug: 2,
      google_ia_debug: 8,
      google_scr_debug: 9,
      googleads: 2,
      google_pedestal_debug: 30,
    };
  var QT = {
    INTERSTITIAL: 1,
    BOTTOM_ANCHOR: 2,
    TOP_ANCHOR: 3,
    1: "INTERSTITIAL",
    2: "BOTTOM_ANCHOR",
    3: "TOP_ANCHOR",
  };
  function RT(a, b) {
    if (!a) return !1;
    a = a.hash;
    if (!a || !a.indexOf) return !1;
    if (a.indexOf(b) != -1) return !0;
    b = ST(b);
    return b != "go" && a.indexOf(b) != -1 ? !0 : !1;
  }
  function ST(a) {
    let b = "";
    Jd(a.split("_"), (c) => {
      b += c.substr(0, 2);
    });
    return b;
  }
  function TT() {
    var a = r.location;
    let b = !1;
    Jd(OT, (c) => {
      RT(a, c) && (b = !0);
    });
    return b;
  }
  function UT(a, b) {
    switch (a) {
      case 1:
        return RT(b, "google_ia_debug");
      case 2:
        return RT(b, "google_bottom_anchor_debug");
      case 3:
        return RT(b, "google_anchor_debug") || RT(b, "googleads");
    }
  }
  function VT({ M: a, lm: b, bm: c, Gk: d, ar: e, br: f, K: g, Fl: h }) {
    let k = 0;
    try {
      k |= Ks(a, f);
      const n = Math.min(a.screen.width || 0, a.screen.height || 0);
      k |= n ? (n < 320 ? 8192 : 0) : 2048;
      k |= a.navigator && WT(a.navigator.userAgent) ? 1048576 : 0;
      if (b) {
        f = k;
        const p = a.innerHeight;
        var m = (Tb() && Ub() ? me(a) : 1) * p >= b;
        var l = f | (m ? 0 : 1024);
      } else l = k | (a.innerHeight >= a.innerWidth ? 0 : 8);
      k = l;
      k |= Ns(a, c, !0, e);
    } catch {
      k |= 32;
    }
    switch (d) {
      case 2:
        XT(a, g, h) && (k |= 16777216);
        break;
      case 1:
        YT(a, g, h) && (k |= 16777216);
    }
    return k;
  }
  function WT(a) {
    return (
      /Android 2/.test(a) ||
      /iPhone OS [34]_/.test(a) ||
      /Windows Phone (?:OS )?[67]/.test(a) ||
      /MSIE.*Windows NT/.test(a) ||
      /Windows NT.*Trident/.test(a)
    );
  }
  function XT(a, b = null, c = !1) {
    const d = JH({
      Wh: 0,
      Vg: a.innerWidth,
      Eh: 3,
      Xh: 0,
      Wg: Math.min(Math.round((a.innerWidth / 320) * 50), ZT) + 15,
      Fh: 3,
    });
    return OH($T(a, b), d, c);
  }
  function YT(a, b = null, c = !1) {
    const d = a.innerWidth,
      e = a.innerHeight,
      f = Math.min(Math.round((a.innerWidth / 320) * 50), ZT) + 15,
      g = JH({ Wh: 0, Vg: d, Eh: 3, Xh: e - f, Wg: e, Fh: 3 });
    f > 25 && g.push({ x: d - 25, y: e - 25 });
    return OH($T(a, b), g, c);
  }
  function $T(a, b = null) {
    return new QH(a, { Ni: aU(a, b) });
  }
  function aU(a, b = null) {
    if (b)
      return (c, d, e) => {
        Wn(
          b,
          "ach_evt",
          {
            tn: c.tagName,
            id: c.getAttribute("id") ?? "",
            cls: c.getAttribute("class") ?? "",
            ign: String(e),
            pw: a.innerWidth,
            ph: a.innerHeight,
            x: d.x,
            y: d.y,
          },
          !0,
          1
        );
      };
  }
  const ZT = 90 * 1.38;
  function bU(a, b) {
    const c = U(jx);
    return VT({
      M: a,
      bm: 3e3,
      lm: c !== -1 ? c : a.innerWidth > Js ? 650 : 0,
      K: yC,
      Gk: b,
      Fl: T(hx),
    });
  }
  function cU(a) {
    let b = 0;
    try {
      b |= Ks(a);
    } catch (c) {
      b |= 32;
    }
    return b;
  }
  function dU(a) {
    let b = 0;
    try {
      (b |= Ks(a)), (b |= Ns(a, 1e4));
    } catch (c) {
      b |= 32;
    }
    return b;
  }
  var eU = class extends I {
    getName() {
      return B(this, 1);
    }
  };
  var fU = class extends I {};
  var gU = class extends I {
    g() {
      return A(this, 1);
    }
    j() {
      return A(this, 2);
    }
  };
  function hU(a) {
    return B(a, 3);
  }
  function iU(a) {
    return Vh(a, 4) != null;
  }
  function jU(a) {
    return A(a, 6);
  }
  function kU(a) {
    return Vh(a, 6) != null;
  }
  function lU(a) {
    return B(a, 8);
  }
  function mU(a) {
    return B(a, 12);
  }
  function nU(a) {
    return B(a, 13);
  }
  function oU(a) {
    return B(a, 14);
  }
  var pU = class extends I {
    g() {
      return A(this, 4);
    }
    B() {
      return x(this, fU, 11);
    }
    j() {
      return Lh(this, fU, 11);
    }
  };
  function qU(a) {
    return Lh(a, pU, 1);
  }
  var rU = class extends I {};
  var sU = (function (a) {
      return (b) => {
        b = JSON.parse(b);
        if (!Array.isArray(b))
          throw Error(
            "Expected jspb data to be an array, got " + ra(b) + ": " + b
          );
        Se(b);
        return new a(b);
      };
    })(rU),
    tU = Bk(rU);
  function uU() {
    const a = {};
    Sz(ix) && (a.bust = Sz(ix));
    return a;
  }
  function vU() {
    const { promise: a, resolve: b } = new xS();
    return { promise: a, resolve: b };
  }
  function wU(a, b, c = () => {}) {
    b.google_llp || (b.google_llp = {});
    b = b.google_llp;
    let d = b[a];
    if (d) return d;
    d = vU();
    b[a] = d;
    c();
    return d;
  }
  function xU(a, b, c) {
    return wU(a, b, () => {
      Fd(b.document, c);
    }).promise;
  }
  function yU(a) {
    return a.prerendering
      ? 3
      : { visible: 1, hidden: 2, prerender: 3, preview: 4, unloaded: 5, "": 0 }[
          a.visibilityState ||
            a.webkitVisibilityState ||
            a.mozVisibilityState ||
            ""
        ] ?? 0;
  }
  function zU(a) {
    let b;
    a.visibilityState
      ? (b = "visibilitychange")
      : a.mozVisibilityState
      ? (b = "mozvisibilitychange")
      : a.webkitVisibilityState && (b = "webkitvisibilitychange");
    return b;
  }
  function AU(a) {
    return a.hidden != null
      ? a.hidden
      : a.mozHidden != null
      ? a.mozHidden
      : a.webkitHidden != null
      ? a.webkitHidden
      : null;
  }
  function BU(a, b) {
    if (yU(b) === 3) var c = !1;
    else a(), (c = !0);
    if (!c) {
      const d = () => {
        xl(b, "prerenderingchange", d);
        a();
      };
      wl(b, "prerenderingchange", d);
    }
  }
  Array.from({ length: 11 }, (a, b) => b / 10);
  function CU(a, b = !1) {
    let c = 0;
    try {
      c |= Ks(a);
      var d;
      if (!(d = !a.navigator)) {
        var e = a.navigator;
        d = ("brave" in e && "isBrave" in e.brave) || !1;
      }
      c |= d || /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
      c |= Ns(a, b ? Number.MAX_SAFE_INTEGER : 2500, !0);
    } catch (f) {
      c |= 32;
    }
    return c;
  }
  const DU = "body div footer header html main section".split(" ");
  function EU(a, b = null, c = !1, d = !1, e = !1) {
    let f = Ks(a);
    WT(a.navigator?.userAgent) && (f |= 1048576);
    const g = a.innerWidth;
    g < 1200 && (f |= 65536);
    const h = a.innerHeight;
    h < 650 && (f |= 2097152);
    b &&
      f === 0 &&
      ((b = b === 3 ? "left" : "right"),
      (c = FU({
        M: a,
        Qm: 1,
        position: b,
        ea: g,
        ia: h,
        pd: new Set(),
        minWidth: 120,
        minHeight: 500,
        gh: c,
        Hh: d,
        Gh: e,
      }))
        ? KE(a).sideRailPlasParam.set(
            b,
            `${c.width}x${c.height}_${String(b).charAt(0)}`
          )
        : (f |= 16));
    return f;
  }
  function GU(a) {
    a = KE(a).sideRailPlasParam;
    return [...Array.from(a.values())].join("|");
  }
  function HU(a, b) {
    return al(a, (c) => c.nodeType === Node.ELEMENT_NODE && b.has(c)) !== null;
  }
  function IU(a, b) {
    return al(
      a,
      (c) =>
        c.nodeType === Node.ELEMENT_NODE &&
        b.getComputedStyle(c, null).position === "fixed"
    );
  }
  function JU(a) {
    const b = [];
    for (const c of a.document.querySelectorAll("*")) {
      const d = a.getComputedStyle(c, null);
      d.position === "fixed" &&
        d.display !== "none" &&
        d.visibility !== "hidden" &&
        b.push(c);
    }
    return b;
  }
  function KU(a, b) {
    const { top: c, left: d, bottom: e, right: f } = b.getBoundingClientRect();
    return c >= 0 && d >= 0 && e <= a.innerHeight && f <= a.innerWidth;
  }
  function LU(a) {
    return Math.round(Math.round(a / 10) * 10);
  }
  function MU(a) {
    return `${a.position}-${LU(a.ea)}x${LU(a.ia)}-${LU(a.scrollY + a.Od)}Y`;
  }
  function NU(a) {
    return `f-${MU({
      position: a.position,
      Od: a.Od,
      scrollY: 0,
      ea: a.ea,
      ia: a.ia,
    })}`;
  }
  function OU(a, b) {
    a = Math.min(a ?? Infinity, b ?? Infinity);
    return a !== Infinity ? a : 0;
  }
  function PU(a, b, c) {
    const d = KE(c.M).sideRailProcessedFixedElements;
    if (!d.has(a)) {
      var e = a.getBoundingClientRect();
      if (e) {
        var f = Math.max(e.top - 10, 0),
          g = Math.min(e.bottom + 10, c.ia),
          h = Math.max(e.left - 10, 0);
        e = Math.min(e.right + 10, c.ea);
        for (var k = c.ea * 0.3; f <= g; f += 10) {
          if (e > 0 && h < k) {
            var m = NU({ position: "left", Od: f, ea: c.ea, ia: c.ia });
            b.set(m, OU(b.get(m), h));
          }
          if (h < c.ea && e > c.ea - k) {
            m = NU({ position: "right", Od: f, ea: c.ea, ia: c.ia });
            const l = c.ea - e;
            b.set(m, OU(b.get(m), l));
          }
        }
        d.add(a);
      }
    }
  }
  function QU(a, b) {
    const c = b.M,
      d = b.gh,
      e = b.Gh;
    var f = `f-${LU(b.ea)}x${LU(b.ia)}`;
    a.has(f) ||
      (a.set(f, 0),
      (f = JU(c)),
      d || e
        ? (RU(
            a,
            b,
            f.filter((g) => KU(c, g))
          ),
          SU(
            c,
            f
              .filter((g) => !KU(c, g))
              .concat(
                e
                  ? Array.from(
                      c.document.querySelectorAll(
                        "[google-side-rail-overlap=false]"
                      )
                    )
                  : []
              )
          ))
        : RU(a, b, f));
  }
  function RU(a, b, c) {
    var d = b.pd;
    const e = b.M;
    KE(e).sideRailProcessedFixedElements.clear();
    d = new Set([
      ...Array.from(
        e.document.querySelectorAll(
          "[data-anchor-status],[data-side-rail-status]"
        )
      ),
      ...d,
    ]);
    for (const f of c) HU(f, d) || PU(f, a, b);
  }
  function TU(a) {
    if (a.ea < 1200 || a.ia < 650) return null;
    var b = KE(a.M).sideRailAvailableSpace;
    QU(b, { M: a.M, ea: a.ea, ia: a.ia, pd: a.pd, gh: a.gh, Gh: a.Gh });
    const c = [];
    var d = a.ia * 0.9,
      e = ht(a.M),
      f = (a.ia - d) / 2,
      g = f,
      h = d / 7;
    for (var k = 0; k < 8; k++) {
      var m = c,
        l = m.push;
      a: {
        var n = g;
        var p = a.position,
          q = b,
          v = { M: a.M, ea: a.ea, ia: a.ia, pd: a.pd, Hh: a.Hh };
        const ea = NU({ position: p, Od: n, ea: v.ea, ia: v.ia }),
          J = MU({ position: p, Od: n, scrollY: e, ea: v.ea, ia: v.ia });
        if (q.has(J)) {
          n = OU(q.get(ea), q.get(J));
          break a;
        }
        const N = p === "left" ? 20 : v.ea - 20;
        let aa = N;
        p = ((v.ea * 0.3) / 5) * (p === "left" ? 1 : -1);
        for (let db = 0; db < 6; db++) {
          var E = KH(v.M.document, { x: Math.round(aa), y: Math.round(n) }),
            F = HU(E, v.pd),
            R = IU(E, v.M);
          if (!F && R !== null) {
            PU(R, q, v);
            q.delete(J);
            break;
          }
          F ||
            ((F = v),
            E.getAttribute("google-side-rail-overlap") === "true"
              ? (F = !0)
              : E.getAttribute("google-side-rail-overlap") === "false" ||
                (F.Hh && !DU.includes(E.tagName.toLowerCase()))
              ? (F = !1)
              : ((R = E.offsetHeight >= F.ia * 0.25),
                (F = E.offsetWidth >= F.ea * 0.9 && R)));
          if (F) q.set(J, Math.round(Math.abs(aa - N) + 20));
          else if (aa !== N) (aa -= p), (p /= 2);
          else {
            q.set(J, 0);
            break;
          }
          aa += p;
        }
        n = OU(q.get(ea), q.get(J));
      }
      l.call(m, n);
      g += h;
    }
    b = a.Qm;
    e = a.position;
    d = Math.round(d / 8);
    f = Math.round(f);
    g = a.minWidth;
    a = a.minHeight;
    l = [];
    h = Array(c.length).fill(0);
    for (m = 0; m < c.length; m++) {
      for (; l.length !== 0 && c[l[l.length - 1]] >= c[m]; ) l.pop();
      h[m] = l.length === 0 ? 0 : l[l.length - 1] + 1;
      l.push(m);
    }
    l = [];
    k = c.length - 1;
    m = Array(c.length).fill(0);
    for (n = k; n >= 0; n--) {
      for (; l.length !== 0 && c[l[l.length - 1]] >= c[n]; ) l.pop();
      m[n] = l.length === 0 ? k : l[l.length - 1] - 1;
      l.push(n);
    }
    l = null;
    for (k = 0; k < c.length; k++)
      if (
        ((n = {
          position: e,
          width: Math.round(c[k]),
          height: Math.round((m[k] - h[k] + 1) * d),
          offsetY: f + h[k] * d,
        }),
        (q = n.width >= g && n.height >= a),
        b === 0 && q)
      ) {
        l = n;
        break;
      } else
        b === 1 &&
          q &&
          (!l || n.width * n.height > l.width * l.height) &&
          (l = n);
    return l;
  }
  function SU(a, b) {
    const c = KE(a);
    if (b.length && !c.g) {
      var d = new MutationObserver(() => {
        setTimeout(() => {
          UU(a);
          for (const e of c.sideRailMutationCallbacks) e();
        }, 500);
      });
      for (const e of b) d.observe(e, { attributes: !0 });
      c.g = d;
    }
  }
  function UU(a) {
    ({ sideRailAvailableSpace: a } = KE(a));
    const b = Array.from(a.keys()).filter((c) => c.startsWith("f-"));
    for (const c of b) a.delete(c);
  }
  function FU(a) {
    if (a.gb) return a.gb.ec(1228, () => TU(a)) || null;
    try {
      return TU(a);
    } catch {}
    return null;
  }
  const VU = { [27]: 512, [26]: 128 };
  var WU = (a, b, c, d) => {
      d = AP(d);
      switch (c) {
        case 1:
        case 2:
          return bU(a, c) === 0;
        case 3:
        case 4:
          return EU(a, c, !0, T(Wx), !0) === 0;
        case 8:
          return CU(a, T(Vw)) === 0;
        case 9:
          return (
            (b = !(
              b.google_adtest === "on" || RT(a.location, "google_scr_debug")
            )),
            !dM(a, b, d)
          );
        case 30:
          return UN(a) === 0;
        case 26:
          return dU(a) === 0;
        case 27:
          return cU(a) === 0;
        case 40:
          return !0;
        default:
          return !1;
      }
    },
    XU = (a, b, c, d) => {
      d = d ? AP(d) : null;
      switch (c) {
        case 0:
        case 40:
        case 10:
        case 11:
          return 0;
        case 1:
        case 2:
          return bU(a, c);
        case 3:
        case 4:
          return EU(a, c, !1, T(Wx));
        case 8:
          return CU(a, T(Vw));
        case 9:
          return dM(
            a,
            !(b.google_adtest === "on" || RT(a.location, "google_scr_debug")),
            d
          );
        case 16:
          return fA(b, a) ? 0 : 8388608;
        case 30:
          return UN(a);
        case 26:
          return dU(a);
        case 27:
          return cU(a);
        default:
          return 32;
      }
    },
    YU = (a, b, c) => {
      const d = b.google_reactive_ad_format;
      if (!$b(d)) return !1;
      a = Ed(a);
      if (!a || !WU(a, b, d, c)) return !1;
      b = KE(a);
      if (Rs(b, d)) return !1;
      b.adCount[d] || (b.adCount[d] = 0);
      b.adCount[d]++;
      return !0;
    },
    $U = (a) => {
      const b = a.google_reactive_ad_format;
      return (
        !a.google_reactive_ads_config &&
        ZU(a) &&
        b !== 16 &&
        b !== 10 &&
        b !== 11 &&
        b !== 40 &&
        b !== 41 &&
        b !== 42
      );
    },
    aV = (a) => {
      if (!a.hash) return null;
      let b = null;
      Jd(OT, (c) => {
        !b && RT(a, c) && (b = PT[c] || null);
      });
      return b;
    },
    cV = (a, b) => {
      const c = KE(a).tagSpecificState[1] || null;
      c !== null &&
        c.debugCard == null &&
        Jd(QT, (d) => {
          !c.debugCardRequested &&
            typeof d === "number" &&
            UT(d, a.location) &&
            ((c.debugCardRequested = !0),
            bV(a, b, (e) => {
              c.debugCard = e.createDebugCard(d, a);
            }));
        });
    },
    eV = (a, b, c) => {
      if (!b) return null;
      const d = KE(b);
      let e = 0;
      Jd(ac, (f) => {
        const g = VU[f];
        g && dV(a, b, f, c) === 0 && (e |= g);
      });
      d.wasPlaTagProcessed && (e |= 256);
      a.google_reactive_tag_first && (e |= 1024);
      return e ? `${e}` : null;
    },
    fV = (a, b, c) => {
      const d = [];
      Jd(ac, (e) => {
        const f = dV(b, a, e, c);
        f !== 0 && d.push(`${e}:${f}`);
      });
      return d.join(",") || null;
    },
    gV = (a) => {
      const b = [],
        c = {};
      Jd(a, (d, e) => {
        if ((e = Hs[e]) && !c[e]) {
          c[e] = !0;
          if (d) d = 1;
          else if (d === !1) d = 2;
          else return;
          b.push(`${e}:${d}`);
        }
      });
      return b.join(",");
    },
    hV = (a) => {
      a = a.overlays;
      if (!a) return "";
      a = a.bottom;
      return typeof a === "boolean" ? (a ? "1" : "0") : "";
    };
  function iV(a) {
    return T(iz) ? ((a = a.overlays) ? a["collapsed-bottom"] === !0 : !1) : !1;
  }
  var dV = (a, b, c, d) => {
      if (!b) return 256;
      let e = 0;
      const f = KE(b),
        g = Rs(f, c);
      if (a.google_reactive_ad_format === c || g) e |= 64;
      let h = !1;
      Jd(f.reactiveTypeDisabledByPublisher, (k, m) => {
        String(c) === String(m) && (h = !0);
      });
      return h &&
        aV(b.location) !== c &&
        ((e |= 128), c === 2 || c === 1 || c === 3 || c === 4 || c === 8)
        ? e
        : e | XU(b, a, c, d);
    },
    jV = (a, b) => {
      if (a) {
        var c = KE(a),
          d = {};
        Jd(b, (e, f) => {
          (f = Hs[f]) && (e === !1 || /^false$/i.test(e)) && (d[f] = !0);
        });
        Jd(ac, (e) => {
          d[Is[e]] && (c.reactiveTypeDisabledByPublisher[e] = !0);
        });
      }
    },
    kV = (a, b, c) => {
      b = EC(b, c);
      c = { ...uU() };
      const d = U(rz);
      [0, 1].includes(d) && (c.osttc = `${d}`);
      return xU(1, window, zd(a, new Map(Object.entries(c)))).then(b);
    },
    bV = (a, b, c) => {
      c = EC(212, c);
      xU(3, a, b).then(c);
    },
    lV = (a, b, c) => {
      a.dataset.adsbygoogleStatus = "reserved";
      a.className += " adsbygoogle-noablate";
      c.adsbygoogle ||
        ((c.adsbygoogle = []),
        Fd(
          c.document,
          yd`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`
        ));
      c.adsbygoogle.push({ element: a, params: b });
    },
    mV = (a) => {
      a = a.google_reactive_ad_format;
      return $b(a) ? `${a}` : null;
    },
    ZU = (a) => !!mV(a) || a.google_pgb_reactive != null,
    nV = (a) => {
      a = Number(mV(a));
      return (
        a === 26 || a === 27 || a === 30 || a === 16 || a === 40 || a === 41
      );
    };
  function oV(a) {
    return a.google_pgb_reactive === 5 && !!a.google_reactive_ads_config;
  }
  function pV(a) {
    return typeof a.google_reactive_sra_index === "number";
  }
  function qV(a, b, c) {
    const d = b.M || b.pubWin,
      e = b.G,
      f = AP(c);
    c = fV(d, e, c);
    e.google_reactive_plat = c;
    (c = gV(a)) && (e.google_reactive_plaf = c);
    (c = hV(a)) && (e.google_reactive_fba = c);
    (c = GU(d)) && (e.google_plas = c);
    rV(a, e);
    c = aV(b.pubWin.location);
    sV(a, c, e);
    c
      ? ((e.fra = c), (e.google_pgb_reactive = 6))
      : (e.google_pgb_reactive = 5);
    e.asro = T(Dy);
    e.aihb = T(Zx);
    e.aifxl = NT(Uz(ky));
    U(Jy) && (e.aiapm = U(Jy));
    U(Ly) && (e.aiapmi = U(Ly));
    U(Hy) && (e.aiact = U(Hy));
    U(Sy) && (e.aicct = U(Sy));
    U(Uy) && (e.ailct = U(Uy));
    U(Zy) && (e.aimart = U(Zy));
    T(gy) && (e.aiudt = !0);
    e.aiapmd = U(Ky);
    e.aiapmid = U(My);
    e.aiactd = U(Iy);
    e.aicctd = U(Ty);
    e.ailctd = U(Vy);
    e.aimartd = U($y);
    e.aiof = NT(Uz(vy));
    e.fsapi = !0;
    c !== 8 &&
      (f && $L(f)
        ? ((c = cM(f, 86400, "__lsv__")),
          c?.length &&
            ((c = Math.floor((Date.now() - Math.max(...c)) / 6e4)),
            c >= 0 && (e.vmsli = c)))
        : (e.vmsli = -1));
    iV(a)
      ? (e.dap = 2)
      : ((c = cM(f, 600, "__lsa__")),
        c?.length &&
          Math.floor((Date.now() - Math.max(...c)) / 6e4) <= U(Lw) &&
          (e.dap = 3));
    Wm() || HT(b.pubWin.top);
    c = tS(
      b.pubWin,
      "rsrai",
      EC(429, (g, h) => tV(b, d, e.google_ad_client, a, g, h, f)),
      EC(430, (g, h) => kt(b.pubWin, "431", yC, h))
    );
    b.ha.push(c);
    KE(d).wasReactiveTagRequestSent = !0;
    uV(b, a, f);
  }
  function uV(a, b, c) {
    const d = a.G,
      e = sa(b.page_level_pubvars) ? b.page_level_pubvars : {};
    b = tS(
      a.pubWin,
      "apcnf",
      EC(353, (f, g) => {
        var h = a.pubWin,
          k = d.google_ad_client;
        return ie(g.origin) ? VS(h, k, e, f.config, c, null) : !1;
      }),
      EC(353, (f, g) => kt(a.pubWin, "353", yC, g))
    );
    a.ha.push(b);
  }
  function tV(a, b, c, d, e, f, g) {
    if (!ie(f.origin)) return !1;
    f = e.data;
    if (!Array.isArray(f)) return !1;
    if (!RJ(b, 1)) return !0;
    f && Qm(6, [f]);
    e = e.amaConfig;
    const h = [],
      k = [],
      m = KE(b);
    let l = null;
    for (let n = 0; n < f.length; n++) {
      if (!f[n]) continue;
      const p = f[n],
        q = p.adFormat;
      m && p.enabledInAsfe && (m.reactiveTypeEnabledInAsfe[q] = !0);
      if (!p.noCreative) {
        p.google_reactive_sra_index = n;
        if (q === 9 && e) {
          p.pubVars = Object.assign(p.pubVars || {}, vV(d, p));
          const v = new eM();
          if (YL(v, p) && v.A(p)) {
            l = v;
            continue;
          }
        }
        h.push(p);
        k.push(q);
      }
    }
    h.length &&
      kV(a.ua.yj, 522, (n) => {
        wV(h, b, n, d, g);
      });
    e && VS(b, c, d, e, g, l);
    return !0;
  }
  function vV(a, b) {
    const c = b.adFormat,
      d = b.adKey;
    delete b.adKey;
    const e = {};
    a = a.page_level_pubvars;
    sa(a) && Object.assign(e, a);
    e.google_ad_unit_key = d;
    e.google_reactive_sra_index = b.google_reactive_sra_index;
    c === 30 && (e.google_reactive_ad_format = 30);
    e.google_pgb_reactive = e.google_pgb_reactive || 5;
    return (b.pubVars = e);
  }
  function wV(a, b, c, d, e) {
    const f = [];
    for (let g = 0; g < a.length; g++) {
      const h = a[g],
        k = h.adFormat,
        m = h.adKey,
        l = c.configProcessorForAdFormat(k);
      k &&
        l &&
        m &&
        ((h.pubVars = vV(d, h)),
        delete h.google_reactive_sra_index,
        f.push(k),
        DC(466, () => l.verifyAndProcessConfig(b, h, e)));
    }
  }
  function rV(a, b) {
    const c = [];
    let d = !1;
    Jd(Hs, (e, f) => {
      let g;
      a.hasOwnProperty(f) &&
        ((f = a[f]), f?.google_ad_channel && (g = String(f.google_ad_channel)));
      --e;
      (c[e] && c[e] !== "+") ||
        ((c[e] = g ? g.replace(/,/g, "+") : "+"), d || (d = !!g));
    });
    d && (b.google_reactive_sra_channels = c.join(","));
  }
  function sV(a, b, c) {
    if (!c.google_adtest) {
      var d = a.page_level_pubvars;
      if (a.google_adtest === "on" || d?.google_adtest === "on" || b)
        c.google_adtest = "on";
    }
  }
  const xV = /^blogger$/,
    yV = /^wordpress(.|\s|$)/i,
    zV = /^joomla!/i,
    AV = /^drupal/i,
    BV = /\/wp-content\//,
    CV = /\/wp-content\/plugins\/advanced-ads/,
    DV = /\/wp-content\/themes\/genesis/,
    EV = /\/wp-content\/plugins\/genesis/;
  function FV(a) {
    var b = a.getElementsByTagName("script"),
      c = b.length;
    for (var d = 0; d < c; ++d) {
      var e = b[d];
      if (e.hasAttribute("src")) {
        e = e.getAttribute("src") || "";
        if (CV.test(e)) return 5;
        if (EV.test(e)) return 6;
      }
    }
    b = a.getElementsByTagName("link");
    c = b.length;
    for (d = 0; d < c; ++d)
      if (
        ((e = b[d]),
        e.hasAttribute("href") &&
          ((e = e.getAttribute("href") || ""), DV.test(e) || EV.test(e)))
      )
        return 6;
    a = a.getElementsByTagName("meta");
    d = a.length;
    for (e = 0; e < d; ++e) {
      var f = a[e];
      if (f.getAttribute("name") == "generator" && f.hasAttribute("content")) {
        f = f.getAttribute("content") || "";
        if (xV.test(f)) return 1;
        if (yV.test(f)) return 2;
        if (zV.test(f)) return 3;
        if (AV.test(f)) return 4;
      }
    }
    for (a = 0; a < c; ++a)
      if (
        ((d = b[a]),
        d.getAttribute("rel") == "stylesheet" &&
          d.hasAttribute("href") &&
          ((d = d.getAttribute("href") || ""), BV.test(d)))
      )
        return 2;
    return 0;
  }
  var GV = class extends Error {
      constructor(a) {
        super(a);
      }
    },
    HV = class {
      constructor(a) {
        this.reason = a;
      }
    };
  class IV {
    constructor() {
      this.g = !1;
    }
  }
  function JV(a, b) {
    a.g || ((a.g = !0), (a.B = b), a.j.resolve(b));
  }
  class KV extends IV {
    constructor() {
      super(...arguments);
      this.j = new xS();
    }
    get promise() {
      return this.j.promise;
    }
    get Cj() {
      return this.g;
    }
    get error() {
      return this.l;
    }
  }
  function LV(a, b) {
    JV(a, b);
  }
  function MV(a, b) {
    b.then((c) => {
      JV(a, c);
    }).catch((c) => {
      a.setError(c, void 0);
    });
  }
  var NV = class extends KV {
    setError(a, b) {
      this.g ||
        ((this.g = !0),
        (this.B = null),
        (this.l = a),
        b && b(this.l),
        this.j.reject(a));
    }
  };
  class OV extends IV {
    constructor(a) {
      super();
      this.j = a;
    }
    get error() {
      return this.j.l;
    }
    Cj() {
      return this.j.g;
    }
  }
  var PV = class extends OV {
      constructor(a) {
        super(a);
        this.j = a;
      }
      get value() {
        return this.j.B;
      }
    },
    QV = class extends OV {
      constructor(a) {
        super(a);
        this.j = a;
      }
      get value() {
        return this.j.B ?? null;
      }
    };
  function RV(a, b, c) {
    b.then(() => {
      a.notify();
    }).catch((d) => {
      a.g = !0;
      a.l = d;
      c && c(a.l);
      a.j.reject(d);
    });
  }
  var SV = class extends KV {
    notify() {
      JV(this, null);
    }
  };
  function TV(a, b) {
    a.j.push({ Oe: !1, Lg: b });
  }
  var UV = class extends O {
    constructor() {
      super(...arguments);
      this.l = [];
      this.j = [];
      this.A = [];
    }
    Oe(a) {
      const b = this.j.find((c) => c.Lg === a);
      b && (b.Oe = !0);
    }
    g() {
      this.l.length = 0;
      this.A.length = 0;
      this.j.length = 0;
      super.g();
    }
  };
  async function VV(a, b) {
    const c = b ? a.filter((d) => !d.Oe) : a;
    await Promise.all(c.map(({ Lg: d }) => d.promise));
    a.length !== c.length &&
      ((a = a.filter((d) => d.Oe)),
      await Promise.race([
        Promise.all(a.map(({ Lg: d }) => d.promise)),
        new Promise((d) => void setTimeout(d, b)),
      ]));
  }
  function WV(a, b = new NV()) {
    a.j.l.push(b);
    return b;
  }
  function XV(a, b) {
    TV(a.j, b);
    b = new PV(b);
    a.j.A.push(b);
    return b;
  }
  var YV = class extends O {
    constructor(a, b) {
      super();
      this.id = a;
      this.F = b;
      this.timeoutMs = void 0;
      this.L = !1;
      this.j = new UV();
      Bt(this, this.j);
    }
    async start() {
      if (!this.L) {
        this.L = !0;
        try {
          if ((await VV(this.j.j, this.Aa ?? this.timeoutMs), !this.B)) {
            let a = 0;
            for (const b of this.j.A) {
              if (b.j.B == null) throw Error(`missing input: ${this.id}/${a}`);
              ++a;
            }
            this.A();
          }
        } catch (a) {
          this.B ||
            (a instanceof GV
              ? this.V(a)
              : a instanceof Error &&
                (this.F.Ha({ methodName: this.id, Na: a }), this.l(a)));
        }
      }
    }
    V() {}
    l(a) {
      if (this.j.l.length) {
        var b = new GV(a.message);
        for (const e of this.j.l)
          if (!e.Cj) {
            var c = e,
              d = b;
            c.g = !0;
            c.l = d;
            c.j.reject(d);
          }
      }
      a instanceof GV || console?.error(a);
    }
  };
  function ZV(a) {
    const b = {};
    for (const [c, d] of Object.entries(a.ca)) b[c] = d.value;
    return b;
  }
  function X(a, b) {
    if (a.L) throw Error("Invalid operation: producer has already started");
    TV(a.j, b);
    return a;
  }
  var $V = class extends YV {
    constructor(a, b, c, d, e) {
      super(a, c);
      this.f = b;
      this.T = e;
      a = {};
      for (const [f, g] of Object.entries(d))
        if ((d = g)) TV(this.j, d), (a[f] = new QV(d));
      this.ca = a;
    }
    A() {
      const a = this.f(ZV(this), ...this.T);
      this.D(a);
    }
    V(a) {
      this.l(a);
    }
    reportError() {}
  };
  class aW extends $V {
    constructor(a, b, c, d, e, f, g) {
      super(a, b, c, d, g);
      this.ra = f;
      this.finished = new SV();
      a = Object.keys(e);
      for (const h of a) this[h] = WV(this);
    }
    D(a) {
      for (const [b, c] of Object.entries(a)) {
        a = b;
        const d = c;
        d instanceof Error && this[a].setError(d);
        d instanceof HV || JV(this[a], d);
      }
      this.finished.notify();
    }
    l(a) {
      this.ra ? this.D(this.ra(a)) : super.l(a);
    }
  }
  function Y(a, b) {
    a.id = b.id;
    a.I = b.I;
    a.ra = b.ra;
    return a;
  }
  function bW(a, b, c, ...d) {
    return new aW(a.id, a, b, c, a.I, a.ra, d);
  }
  function cW(a, b, c) {
    if (T(Ez))
      return (
        (a = c.ssl.map((d) => {
          var e = new Tl();
          e = li(e, 1, d.nn);
          d = Hh(e, 2, qi, gg(d.jlu));
          return gi(d, 4, !1);
        })),
        (a = a.length > 0 ? Xl(Ul(), a) : Xl(new Vl(), [])),
        { Dc: a, af: [a] }
      );
    if (!b) return (a = new Vl()), { Dc: a, af: [a] };
    a = Nh(b, eU, 1, wh()).map((d) => {
      var e = new Tl();
      var f = d.getName();
      e = li(e, 1, f);
      d = B(d, 2);
      d = Hh(e, 2, qi, gg(d));
      return gi(d, 4, !1);
    });
    a = Xl(Ul(), a);
    return { Dc: a, af: [a] };
  }
  var dW = Y(cW, { id: 1377, I: { Dc: void 0, af: void 0 } });
  var eW = { yi: [], ti: 0, Di: [], Wq: !1, Rj: !1 };
  function fW(a, b = window, c = () => {}) {
    try {
      return b.localStorage.getItem(a);
    } catch (d) {
      return c(d), null;
    }
  }
  function gW(a, b, c = window, d = () => {}) {
    return b.aa() ? fW(a, c, d) : null;
  }
  function hW(a, b, c = window, d = () => {}) {
    try {
      return c.localStorage.setItem(a, b), !0;
    } catch (e) {
      d(e);
    }
    return !1;
  }
  function iW(a, b, c, d = window, e = () => {}) {
    return c.aa() ? hW(a, b, d, e) : !1;
  }
  function jW(a, b = window, c = () => {}) {
    try {
      b.localStorage.removeItem(a);
    } catch (d) {
      c(d);
    }
  }
  function kW(a, b, c = window, d = () => {}) {
    b.aa() && jW(a, c, d);
  }
  function lW(a = window, b = () => {}) {
    try {
      return a.localStorage.length;
    } catch (c) {
      b(c);
    }
    return null;
  }
  function mW(a) {
    var b = window,
      c = () => {};
    return a.aa() ? lW(b, c) : null;
  }
  function nW(a, b = window, c = () => {}) {
    try {
      return b.localStorage.key(a);
    } catch (d) {
      c(d);
    }
    return null;
  }
  function oW(a, b) {
    var c = window,
      d = () => {};
    return b.aa() ? nW(a, c, d) : null;
  }
  function pW(a = window, b = () => {}) {
    try {
      return Object.keys(a.localStorage);
    } catch (c) {
      b(c);
    }
    return null;
  }
  function qW(a) {
    var b = window,
      c = () => {};
    return a.aa() ? pW(b, c) : null;
  }
  class rW {
    static Ri() {
      throw Error("Must be overridden");
    }
  }
  class sW extends rW {
    constructor() {
      super(...arguments);
      this.g = 0;
    }
  }
  (function () {
    var a = sW;
    a.Fc = void 0;
    a.Ri = function () {
      return a.Fc ? a.Fc : (a.Fc = new a());
    };
  })();
  function tW(a, b, c = null, d = {}) {
    const e = sW.Ri();
    e.g === 0 && (e.g = Math.random() < 0.001 ? 2 : 1);
    e.g === 2 &&
      Em(
        {
          c: String(a),
          pc: String(je(window)),
          em: c,
          lid: b,
          eids: vs().join(),
          ...d,
        },
        "esp"
      );
  }
  function uW() {
    var a = window;
    return new Promise((b) => {
      const c = () => {
        b(void 0);
        xl(a, "load", c);
      };
      wl(a, "load", c);
    });
  }
  function vW(a) {
    const b = [],
      c = RegExp("^_GESPSK-(.+)$"),
      d = mW(a);
    for (let f = 0; f < (d ?? 0); f++) {
      var e = oW(f, a);
      e !== null && (e = (c.exec(e) || [])[1]) && b.push(e);
    }
    return b;
  }
  function wW(a) {
    return `${"_GESPSK"}-${a}`;
  }
  function xW() {
    yW || (yW = new zW());
    return yW;
  }
  function AW(a) {
    const b = rw(Th(a, 3));
    if (!b) return 3;
    if (ei(a, 2) === void 0) return 4;
    a = Date.now();
    return a > b + 2592e5 ? 2 : a > b + 432e5 ? 1 : 0;
  }
  var zW = class {
      constructor() {
        this.cache = {};
      }
      get(a, b, c) {
        function d(g) {
          tW(6, a, g?.message);
          e = !0;
        }
        if (this.cache[a]) return { U: this.cache[a], success: !0 };
        let e = !1;
        const f = wW(a);
        b = c ? fW(f, window, d) : gW(f, b, window, d);
        if (e) return { U: null, success: !1 };
        if (!b) return { U: null, success: !0 };
        try {
          const g = zm(b);
          this.cache[a] = g;
          return { U: g, success: !0 };
        } catch (g) {
          return tW(5, a, g?.message), { U: null, success: !1 };
        }
      }
      set(a, b, c) {
        function d(g) {
          tW(7, e, g?.message);
        }
        const e = a.Oa(),
          f = wW(e);
        ym(a);
        if (c ? !hW(f, pj(a), window, d) : !iW(f, pj(a), b, window, d))
          return !1;
        this.cache[e] = a;
        return !0;
      }
      remove(a, b, c) {
        function d(e) {
          tW(8, a, e?.message);
        }
        c ? jW(wW(a), window, d) : kW(wW(a), b, window, d);
        delete this.cache[a];
      }
    },
    yW = null;
  function BW(a, b, c) {
    return !!a.g
      ?.get(c)
      ?.get(b)
      ?.some((d) => A(d, 4));
  }
  function CW(a, b) {
    for (const c of a.g.values()) if (c.get(b)?.some((d) => A(d, 4))) return !0;
    return !1;
  }
  function DW(a, b, c) {
    const d = new Set();
    a = a.g.get(b);
    if (!a) return d;
    for (const [e, f] of a.entries()) (a = e), f.some((g) => c(g)) && d.add(a);
    return d;
  }
  function EW(a, b) {
    return DW(a, b, (c) => A(c, 4));
  }
  var FW = class {
    constructor(a) {
      const b = new Map();
      for (const c of a) {
        a = B(c, 1);
        const d = b.get(a) ?? new Map();
        for (const e of Wl(c)) {
          const f = e.Oa();
          d.has(f) || d.set(f, []);
          d.get(f).push(e);
        }
        b.set(a, d);
      }
      this.g = b;
    }
  };
  function GW(a, b) {
    return [].some((c) => BW(b, a, c));
  }
  function HW(a, b, c) {
    ({ Dc: a } = cW({}, x(a.pageState, pU, 1)?.B(), a.pageStateTs.ssc));
    {
      var d = [a];
      a = new Map();
      tW(56, "", null);
      var e = a;
      d = new FW(d ?? []);
      var f = Array,
        g = f.from,
        h = [];
      const n = new Set(vW(c));
      for (var k of h) for (var m of EW(d, k)) n.add(m);
      k = g.call(f, n);
      for (const p of k)
        e.get(p)?.g() ||
          (({ U: k } = xW().get(p, c, GW(p, d))),
          k &&
            ((m = AW(k)),
            m !== 2 &&
              m !== 3 &&
              (gi(k, 9, !1),
              (m = ei(k, 2)) &&
                m.length > 1024 &&
                (tW(55, p, null, { sl: String(m.length) }),
                (m = k.setError(bm(108))),
                ph(m, 2)),
              e.set(p, k),
              (k = ei(k, 2)),
              tW(19, p, null, {
                hs: k ? "1" : "0",
                sl: String(k?.length ?? -1),
              }))));
      c = new Am();
      for ([, l] of a) Rh(c, 2, xm, l);
      if (Nh(c, xm, 2, wh()).length) {
        tW(50, "", null, { ns: String(Nh(c, xm, 2, wh()).length) });
        var l = c.g();
        l = se(l);
      } else l = null;
    }
    l && (b.a3p = l);
  }
  function IW(a, b, c = 1e5) {
    a -= b;
    return a >= c ? "M" : a >= 0 ? a : "-M";
  }
  const JW = ic("script");
  var KW = class {
    constructor(
      a,
      b,
      c = null,
      d = null,
      e = null,
      f = null,
      g = null,
      h = null,
      k = null,
      m = null,
      l = null,
      n = null
    ) {
      this.J = a;
      this.Pb = b;
      this.kc = c;
      this.g = d;
      this.F = e;
      this.Ca = f;
      this.sb = g;
      this.B = h;
      this.A = k;
      this.j = m;
      this.l = l;
      this.D = n;
    }
    size() {
      return this.Pb;
    }
  };
  var LW = class {
    constructor(a, b) {
      this.g = a;
      this.B = b;
    }
    height() {
      return this.B;
    }
    j(a) {
      return a > U(px) && this.B > 300 ? this.g : Math.min(1200, Math.round(a));
    }
    l() {}
  };
  const MW = {
    "image-top": (a) => (a <= 600 ? 284 + (a - 250) * 0.414 : 429),
    "image-middle": (a) =>
      a <= 500 ? 196 - (a - 250) * 0.13 : 164 + (a - 500) * 0.2,
    "image-side": (a) =>
      a <= 500 ? 205 - (a - 250) * 0.28 : 134 + (a - 500) * 0.21,
    "text-only": (a) => (a <= 500 ? 187 - 0.228 * (a - 250) : 130),
    "in-article": (a) =>
      a <= 420 ? a / 1.2 : a <= 460 ? a / 1.91 + 130 : a <= 800 ? a / 4 : 200,
  };
  var NW = {
      "image-top": 0,
      "image-middle": 1,
      "image-side": 2,
      "text-only": 3,
      "in-article": 4,
    },
    OW = class extends LW {
      j() {
        return Math.min(1200, this.g);
      }
    };
  function PW(a, b, c, d, e) {
    var f = e.google_ad_layout || "image-top";
    if (f === "in-article") {
      var g = a;
      if (e.google_full_width_responsive === "false") a = g;
      else if (((a = gA(b, c, g, U(cx), e)), a !== !0))
        (e.gfwrnwer = a), (a = g);
      else if ((a = Ls(b)))
        if (((e.google_full_width_responsive_allowed = !0), c.parentElement)) {
          b: {
            g = c;
            for (let h = 0; h < 100 && g.parentElement; ++h) {
              const k = g.parentElement.childNodes;
              for (let m = 0; m < k.length; ++m) {
                const l = k[m];
                if (l !== g && jA(b, l)) break b;
              }
              g = g.parentElement;
              g.style.width = "100%";
              g.style.height = "auto";
            }
          }
          nA(b, c);
        } else a = g;
      else a = g;
    }
    if (a < 250)
      throw new xC(
        "Fluid responsive ads must be at least 250px wide: " +
          `availableWidth=${a}`
      );
    a = Math.min(1200, Math.floor(a));
    if (d && f !== "in-article") {
      f = Math.ceil(d);
      if (f < 50)
        throw new xC(
          "Fluid responsive ads must be at least 50px tall: " + `height=${f}`
        );
      return new KW(11, new LW(a, f));
    }
    if (f !== "in-article" && (d = e.google_ad_layout_key)) {
      f = `${d}`;
      if ((d = (c = f.match(/([+-][0-9a-z]+)/g)) && c.length))
        for (b = [], e = 0; e < d; e++) b.push(parseInt(c[e], 36) / 1e3);
      else b = null;
      if (!b) throw new xC(`Invalid data-ad-layout-key value: ${f}`);
      f = (a + -725) / 1e3;
      c = 0;
      d = 1;
      e = b.length;
      for (g = 0; g < e; g++) (c += b[g] * d), (d *= f);
      f = Math.ceil(c * 1e3 - -725 + 10);
      if (isNaN(f)) throw new xC(`Invalid height: height=${f}`);
      if (f < 50)
        throw new xC(
          "Fluid responsive ads must be at least 50px tall: " + `height=${f}`
        );
      if (f > 1200)
        throw new xC(
          "Fluid responsive ads must be at most 1200px tall: " + `height=${f}`
        );
      return new KW(11, new LW(a, f));
    }
    d = MW[f];
    if (!d) throw new xC("Invalid data-ad-layout value: " + f);
    c = tA(c, b);
    b = Ls(b);
    b =
      f !== "in-article" || c || a !== b
        ? Math.ceil(d(a))
        : Math.ceil(d(a) * 1.25);
    return new KW(11, f === "in-article" ? new OW(a, b) : new LW(a, b));
  }
  function QW(a) {
    var b = window;
    return a.google_adtest === "on" ||
      a.google_adbreak_test === "on" ||
      b.location.host.endsWith("h5games.usercontent.goog") ||
      b.location.host === "gamesnacks.com"
      ? b.document
          .querySelector('meta[name="h5-games-eids"]')
          ?.getAttribute("content")
          ?.split(",")
          .map((c) => Math.floor(Number(c)))
          .filter((c) => !isNaN(c) && c > 0) || []
      : [];
  }
  function RW(a, b) {
    b && !a.g && ((b = SW(b)), (a.g = b.id), (a.l = b.creationTimeSeconds));
  }
  var TW = class {
      constructor() {
        this.B = new Date(Date.now());
        this.l = this.g = null;
        this.j = { [3]: {}, [4]: {}, [5]: {} };
        this.j[3] = {
          [71]: (...a) => {
            var b = this.g;
            var c = this.B,
              d = Number(a[0]);
            a = Number(a[1]);
            b =
              b !== null
                ? $u(`${"w5uHecUBa2S"}:${d}:${b}`) % a ===
                  Math.floor(c.valueOf() / 864e5) % a
                : void 0;
            return b;
          },
        };
        this.j[4] = {
          [15]: () => {
            var a = Number(this.l || void 0);
            isNaN(a)
              ? (a = void 0)
              : ((a = new Date(a * 1e3)),
                (a =
                  a.getFullYear() * 1e4 +
                  (a.getMonth() + 1) * 100 +
                  a.getDate()));
            return a;
          },
        };
      }
    },
    UW;
  function VW(a) {
    return (
      QJ(a)?.head_tag_slot_vars?.google_ad_host ??
      a.document
        ?.querySelector('meta[name="google-adsense-platform-account"]')
        ?.getAttribute("content") ??
      null
    );
  }
  function WW(a, b, c = "") {
    return b && (XW(a, c, b)?.j() ?? !1)
      ? !0
      : YW(
          a,
          c,
          (d) => Oa(Nh(d, Yl, 2, wh()), (e) => fi(e, 1) === 1),
          !!ZW(b)?.g()
        );
  }
  function YW(a, b, c, d) {
    a = Ed(a) || a;
    const e = $W(a, d);
    b && (b = sn(String(b)));
    return Zb(
      e,
      (f, g) =>
        Object.prototype.hasOwnProperty.call(e, g) && (!b || b === g) && c(f)
    );
  }
  function $W(a, b) {
    a = aX(a, b);
    const c = {};
    Jd(a, (d, e) => {
      try {
        const f = rj(am, Ag(d));
        c[e] = f;
      } catch (f) {}
    });
    return c;
  }
  function aX(a, b) {
    a = QP({ C: a, Ra: b });
    return Ou(a) ? bX(a.getValue()) : {};
  }
  function bX(a) {
    try {
      const b = a.getItem("google_adsense_settings");
      if (!b) return {};
      const c = JSON.parse(b);
      return c !== Object(c)
        ? {}
        : Yb(
            c,
            (d, e) =>
              Object.prototype.hasOwnProperty.call(c, e) &&
              typeof e === "string" &&
              Array.isArray(d)
          );
    } catch (b) {
      return {};
    }
  }
  function XW(a, b, c) {
    if (!b) return null;
    const d = bi(c, cX, 27, dX)?.g(),
      e = bi(c, cX, 27, dX)?.B()?.g();
    return eX(a, b ?? "", d ?? "", e ?? "", B(c, 17) || "")
      ? bi(c, cX, 27, dX)
      : null;
  }
  function eX(a, b, c, d, e) {
    a = d === b && !!a.location.host && e === a.location.host;
    return c === b || a;
  }
  function fX(a = r) {
    return a.ggeac || (a.ggeac = {});
  }
  function gX(a, b = document) {
    return !!b.featurePolicy?.features().includes(a);
  }
  function hX(a, b = document) {
    return !!b.featurePolicy?.allowedFeatures().includes(a);
  }
  function iX(a = navigator) {
    try {
      return !!a.protectedAudience?.queryFeatureSupport?.(
        "deprecatedRenderURLReplacements"
      );
    } catch (b) {
      return !1;
    }
  }
  function jX(a, b, c = b.document) {
    return !!(
      a &&
      "sharedStorage" in b &&
      b.sharedStorage &&
      hX("shared-storage", c) &&
      hX("shared-storage-select-url", c)
    );
  }
  function kX(a = Id()) {
    return (b) => $u(`${b} + ${a}`) % 1e3;
  }
  function lX(a, b) {
    a.g = rs(14, b, () => {});
  }
  class mX {
    constructor() {
      this.g = () => {};
    }
  }
  function nX(a) {
    qs(mX).g(a);
  }
  function oX(a = fX()) {
    ss(qs(ts), a);
    pX(a);
    lX(qs(mX), a);
    qs(Rz).g();
  }
  function pX(a) {
    const b = qs(Rz);
    b.j = (c, d) => rs(5, a, () => !1)(c, d, 1);
    b.B = (c, d) => rs(6, a, () => 0)(c, d, 1);
    b.A = (c, d) => rs(7, a, () => "")(c, d, 1);
    b.D = (c, d) => rs(8, a, () => [])(c, d, 1);
    b.l = (c, d) => rs(17, a, () => [])(c, d, 1);
    b.g = () => {
      rs(15, a, () => {})(1);
    };
  }
  function SW(a) {
    var b = a.split(":");
    a = b.find((c) => c.indexOf("ID=") === 0) || null;
    b = b.find((c) => c.indexOf("T=") === 0)?.substring(2) || null;
    return { id: a, creationTimeSeconds: b };
  }
  function qX(a, b, c) {
    c ? ((a = a.C), (b = c.aa() ? EP(b, a) : null)) : (b = null);
    return b;
  }
  function rX(a, b, c, d) {
    if (d) {
      var e = qw(Xh(c, 2)) - Date.now() / 1e3;
      e = { we: Math.max(e, 0), path: B(c, 3), domain: B(c, 4), Vf: !1 };
      c = c.getValue();
      a = a.C;
      d.aa() && FP(b, c, e, a);
    }
  }
  function sX(a, b, c) {
    var d;
    (d = !c) || ((d = a.C), (d = !(c.aa() && EP(b, d))));
    if (!d)
      for (const f of tX(a.C.location.hostname)) {
        d = b;
        var e = a.C;
        c.aa() && e.origin !== "null" && new xP(e.document).remove(d, "/", f);
      }
  }
  var uX = class {
    constructor(a) {
      this.C = a;
    }
  };
  function tX(a) {
    if (a === "localhost") return ["localhost"];
    a = a.split(".");
    if (a.length < 2) return [];
    const b = [];
    for (let c = 0; c < a.length - 1; ++c) b.push(a.slice(c).join("."));
    return b;
  }
  function vX(a, b, c) {
    var d = { [0]: kX(je(b).toString()) };
    if (c) {
      c = qX(new uX(b), "__gads", c) || "";
      UW || (UW = new TW());
      b = UW;
      RW(b, c);
      nX(b.j);
      const e = new RegExp(/(?:^|:)(ID=[^\s:]+)/).exec(c)?.[1];
      d[1] = (f) => (e ? kX(e)(f) : void 0);
    }
    d = us(a, d);
    As(iK(ZJ(), a, d));
  }
  function wX(a) {
    vX(13, a);
    vX(11, a);
  }
  function xX(a, b) {
    vX(20, a, b);
    vX(17, a, b);
  }
  function yX(a) {
    const b = vs();
    a = QW(a);
    return b.concat(a).join(",");
  }
  function zX(a) {
    const b = Bn();
    b && (a.debug_experiment_id = b);
  }
  var AX = {
    google_ad_block: "ad_block",
    google_ad_client: "client",
    google_ad_intent_query: "ait_q",
    google_ad_intent_rs_token: "afdt",
    google_ad_output: "output",
    google_ad_callback: "callback",
    google_ad_height: "h",
    google_ad_resize: "twa",
    google_ad_slot: "slotname",
    google_ad_unit_key: "adk",
    google_ad_dom_fingerprint: "adf",
    google_ad_intent_qetid: "aiqeid",
    google_ad_intents_format: "ait_f",
    google_placement_id: "pi",
    google_daaos_ts: "daaos",
    google_erank: "epr",
    google_ad_width: "w",
    abgtt: "abgtt",
    google_captcha_token: "captok",
    google_content_recommendation_columns_num: "cr_col",
    google_content_recommendation_rows_num: "cr_row",
    google_ctr_threshold: "ctr_t",
    google_cust_criteria: "cust_params",
    gfwrnwer: "fwrn",
    gfwrnher: "fwrnh",
    google_image_size: "image_size",
    google_last_modified_time: "lmt",
    google_loeid: "loeid",
    google_max_num_ads: "num_ads",
    google_max_radlink_len: "max_radlink_len",
    google_mtl: "mtl",
    google_native_settings_key: "nsk",
    google_enable_content_recommendations: "ecr",
    google_num_radlinks: "num_radlinks",
    google_num_radlinks_per_unit: "num_radlinks_per_unit",
    google_pucrd: "pucrd",
    google_reactive_plaf: "plaf",
    google_reactive_plat: "plat",
    google_reactive_fba: "fba",
    google_reactive_sra_channels: "plach",
    google_responsive_auto_format: "rafmt",
    armr: "armr",
    google_plas: "plas",
    google_rl_dest_url: "rl_dest_url",
    google_rl_filtering: "rl_filtering",
    google_rl_mode: "rl_mode",
    google_rt: "rt",
    google_video_play_muted: "vpmute",
    google_source_type: "src_type",
    google_restrict_data_processing: "rdp",
    google_tag_for_child_directed_treatment: "tfcd",
    google_tag_for_under_age_of_consent: "tfua",
    google_tag_origin: "to",
    google_ad_semantic_area: "sem",
    google_tfs: "tfs",
    google_package: "pwprc",
    google_tag_partner: "tp",
    fra: "fpla",
    google_ml_rank: "mlr",
    google_apsail: "psa",
    google_ad_channel: "channel",
    google_ad_type: "ad_type",
    google_ad_format: "format",
    google_color_bg: "color_bg",
    google_color_border: "color_border",
    google_color_link: "color_link",
    google_color_text: "color_text",
    google_color_url: "color_url",
    google_page_url: "url",
    google_ad_section: "region",
    google_cpm: "cpm",
    google_encoding: "oe",
    google_safe: "adsafe",
    google_font_face: "f",
    google_font_size: "fs",
    google_hints: "hints",
    google_ad_host: "host",
    google_ad_host_channel: "h_ch",
    google_ad_host_tier_id: "ht_id",
    google_kw_type: "kw_type",
    google_kw: "kw",
    google_contents: "contents",
    google_targeting: "targeting",
    google_adtest: "adtest",
    google_alternate_color: "alt_color",
    google_alternate_ad_url: "alternate_ad_url",
    google_cust_age: "cust_age",
    google_cust_gender: "cust_gender",
    google_cust_l: "cust_l",
    google_cust_lh: "cust_lh",
    google_language: "hl",
    google_city: "gcs",
    google_country: "gl",
    google_region: "gr",
    google_content_recommendation_ad_positions: "ad_pos",
    google_content_recommendation_ui_type: "crui",
    google_content_recommendation_use_square_imgs: "cr_sq_img",
    sso: "sso",
    google_color_line: "color_line",
    google_disable_video_autoplay: "disable_video_autoplay",
    google_full_width_responsive_allowed: "fwr",
    google_full_width_responsive: "fwrattr",
    efwr: "efwr",
    google_pgb_reactive: "pra",
    rc: "rc",
    google_resizing_allowed: "rs",
    google_resizing_height: "rh",
    google_resizing_width: "rw",
    rpe: "rpe",
    google_responsive_formats: "resp_fmts",
    google_safe_for_responsive_override: "sfro",
    google_video_doc_id: "video_doc_id",
    google_video_product_type: "video_product_type",
    google_webgl_support: "wgl",
    aihb: "aihb",
    aiof: "aiof",
    aiudt: "aiudt",
    asro: "asro",
    aifxl: "aifxl",
    vmsli: "itsi",
    dap: "dap",
    aiapm: "aiapm",
    aiapmd: "aiapmd",
    aiapmi: "aiapmi",
    aiapmid: "aiapmid",
    aiact: "aiact",
    aiactd: "aiactd",
    aicct: "aicct",
    aicctd: "aicctd",
    ailct: "ailct",
    ailctd: "ailctd",
    aimart: "aimart",
    aimartd: "aimartd",
    aieuf: "aieuf",
  };
  function BX(a) {
    a.g === -1 && (a.g = a.data.reduce((b, c, d) => b + (c ? 2 ** d : 0), 0));
    return a.g;
  }
  var CX = class {
    constructor() {
      this.data = [];
      this.g = -1;
    }
    set(a, b = !0) {
      0 <= a &&
        a < 52 &&
        Number.isInteger(a) &&
        this.data[a] !== b &&
        ((this.data[a] = b), (this.g = -1));
    }
    get(a) {
      return !!this.data[a];
    }
  };
  function DX() {
    const a = new CX();
    "SVGElement" in r && "createElementNS" in r.document && a.set(0);
    const b = Vd();
    b["allow-top-navigation-by-user-activation"] && a.set(1);
    b["allow-popups-to-escape-sandbox"] && a.set(2);
    r.crypto && r.crypto.subtle && a.set(3);
    "TextDecoder" in r && "TextEncoder" in r && a.set(4);
    return BX(a);
  }
  function EX(a, b, { Lh: c, Mh: d }) {
    return A(b, 8) || ((c || !b.aa()) && d) || !CP(a.g) ? !1 : !0;
  }
  function FX(a, b, { Lh: c, Mh: d }) {
    if (EX(a, b, { Lh: c, Mh: d })) return EP("__eoi", a.g) ?? void 0;
  }
  var GX = class {
    constructor(a) {
      this.g = a;
    }
  };
  var HX = Ck(WP);
  function IX(a, { hj: b }) {
    return Array.from(a.querySelectorAll("div"))
      .slice(0, b)
      .some((c) => Object.keys(c).some((d) => d.startsWith("__react")));
  }
  function JX(a = document) {
    var b = { Vq: 0, hj: U(Tx) };
    const c = [],
      d = [];
    for (const g of Array.from(
      a.querySelectorAll("meta[name=generator][content]")
    )) {
      if (!g) continue;
      var e = g.getAttribute("content") ?? "";
      const [, h, k] =
          /^([^0-9]+)(?:\s([0-9]+(?:\.[0-9]+){0,2})[.0-9]*)?[^0-9]*$/.exec(e) ??
          [],
        m = h,
        l = k,
        n = new VP();
      l && li(n, 3, l.substring(0, 20));
      let p, q;
      if (m) {
        for (const [v, E] of new Map([
          [1, "WordPress"],
          [2, "Drupal"],
          [3, "MediaWiki"],
          [4, "Blogger"],
          [5, "SEOmatic"],
          [7, "Flutter"],
          [8, "Joomla! - Open Source Content Management"],
          [9, "React"],
        ]).entries()) {
          var f = v;
          if (E === m.trim()) {
            p = f;
            break;
          }
        }
        for (const [v, E] of new Map([
          [1, "All in One SEO (AIOSEO)"],
          [2, "All in One SEO Pro (AIOSEO)"],
          [3, "AMP for WP"],
          [4, "Site Kit by Google"],
          [5, "Elementor"],
          [
            6,
            "Powered by WPBakery Page Builder - drag and drop page builder for WordPress.",
          ],
        ]).entries())
          if (((f = v), E === m.trim())) {
            q = f;
            break;
          }
      }
      q
        ? ((e = ni(n, 1, 1)), ni(e, 2, q))
        : p
        ? ni(n, 1, p)
        : ((f = ni(n, 1, 0)),
          ph(f, 3),
          d.push({ content: e, name: m, version: l }));
      c.push(n);
    }
    b.hj > 0 &&
      IX(a, b) &&
      ((a = c.push), (b = new VP()), (b = ni(b, 1, 9)), a.call(c, b));
    return { labels: c, Zq: d };
  }
  var KX = class extends O {
    constructor() {
      super();
      this.value = null;
    }
    get() {
      return this.value;
    }
  };
  const LX = new Map([
      ["navigate", 1],
      ["reload", 2],
      ["back_forward", 3],
      ["prerender", 4],
    ]),
    MX = new Map([
      [0, 1],
      [1, 2],
      [2, 3],
    ]);
  function NX(a) {
    try {
      const b = a.performance?.getEntriesByType("navigation")?.[0];
      if (b?.type) return LX.get(b.type) ?? null;
    } catch {}
    return MX.get(a.performance?.navigation?.type) ?? null;
  }
  var OX = class extends I {};
  var PX = class extends I {};
  function QX(a, b, c, d, e) {
    a.g.push(new RX(b, c, d, e));
  }
  function SX(a) {
    for (let c = a.g.length - 1; c >= 0; c--) {
      var b = a.g[c];
      b.j
        ? (b.element.style.removeProperty(b.g),
          b.element.style.setProperty(b.g, String(b.l), b.B))
        : (b.element.style[b.g] = b.l);
    }
    a.g.length = 0;
  }
  var TX = class {
      constructor() {
        this.g = [];
      }
    },
    RX = class {
      constructor(a, b, c, d) {
        this.element = a;
        this.g = b;
        this.g = (this.j = !(
          d === void 0 ||
          !a.style ||
          !a.style.getPropertyPriority
        ))
          ? String(b)
              .replace(/([A-Z])/g, "-$1")
              .toLowerCase()
          : b;
        this.l = this.j ? a.style.getPropertyValue(this.g) : a.style[this.g];
        this.B = this.j ? a.style.getPropertyPriority(this.g) : void 0;
        this.j
          ? (a.style.removeProperty(this.g),
            a.style.setProperty(this.g, String(c), d))
          : (a.style[this.g] = String(c));
      }
    };
  function UX(a, b) {
    Array.isArray(b) || (b = [b]);
    b = b.map(function (c) {
      return typeof c === "string"
        ? c
        : c.property + " " + c.duration + "s " + c.timing + " " + c.delay + "s";
    });
    il(a, "transition", b.join(","));
  }
  var VX = Bb(function () {
    const a = Uk(document, "DIV"),
      b = gd ? "-webkit" : fd ? "-moz" : null;
    let c = "transition:opacity 1s linear;";
    b && (c += b + "-transition:opacity 1s linear;");
    Pc(a, wd("div", { style: c }));
    return ll(a.firstChild, "transition") != "";
  });
  function WX(a, b, c) {
    a.j[b].indexOf(c) < 0 && (a.j[b] += c);
  }
  function XX(a, b) {
    a.g.indexOf(b) >= 0 || (a.g = b + a.g);
  }
  function YX(a, b) {
    a.errors.indexOf(b) < 0 && (a.errors = b + a.errors);
  }
  function ZX(a, b, c, d) {
    return a.errors != "" || b
      ? null
      : a.g.replace($X, "") == ""
      ? (c != null && a.j[0]) || (d != null && a.j[1])
        ? !1
        : !0
      : !1;
  }
  function aY(a) {
    var b = ZX(a, "", null, 0);
    if (b === null) return "XS";
    b = b ? "C" : "N";
    a = a.g;
    return a.indexOf("a") >= 0
      ? b + "A"
      : a.indexOf("f") >= 0
      ? b + "F"
      : b + "S";
  }
  var bY = class {
    constructor(a, b) {
      this.j = ["", ""];
      this.g = a || "";
      this.errors = b || "";
    }
    toString() {
      return [this.j[0], this.j[1], this.g, this.errors].join("|");
    }
  };
  function cY(a) {
    let b = a.ca;
    a.F = () => {};
    dY(a, a.D, b);
    let c = a.D.parentElement;
    if (!c) return a.g;
    let d = !0,
      e = null;
    for (; c; ) {
      try {
        e = /^head|html$/i.test(c.nodeName) ? null : Hd(c, b);
      } catch (g) {
        YX(a.g, "c");
      }
      const f = eY(a, b, c, e);
      c.classList.contains("adsbygoogle") &&
        e &&
        (/^\-.*/.test(e["margin-left"]) || /^\-.*/.test(e["margin-right"])) &&
        (a.V = !0);
      if (d && !f && fY(e)) {
        XX(a.g, "l");
        a.H = c;
        break;
      }
      d = d && f;
      if (e && gY(a, e)) break;
      c = c.parentElement;
      if (!c) {
        if (b === a.pubWin) break;
        try {
          if (((c = b.frameElement), (b = b.parent), !Bd(b))) {
            XX(a.g, "c");
            break;
          }
        } catch (g) {
          XX(a.g, "c");
          break;
        }
      }
    }
    a.J && a.A && hY(a);
    return a.g;
  }
  function iY(a) {
    function b(l) {
      for (let n = 0; n < l.length; n++) il(k, l[n], "0px");
    }
    function c() {
      jY(d, g, h);
      !k || m || h || (b(kY), b(lY));
    }
    const d = a.D;
    d.style.overflow = a.Ne ? "visible" : "hidden";
    a.J &&
      (a.H
        ? (UX(d, mY()), UX(a.H, mY()))
        : UX(
            d,
            "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"
          ));
    a.T !== null && (d.style.opacity = String(a.T));
    const e =
        a.width != null && a.l != null && (a.Tf || a.l > a.width) ? a.l : null,
      f =
        a.height != null && a.j != null && (a.Tf || a.j > a.height)
          ? a.j
          : null;
    if (a.L) {
      const l = a.L.length;
      for (let n = 0; n < l; n++) jY(a.L[n], e, f);
    }
    const g = a.l,
      h = a.j,
      k = a.H,
      m = a.V;
    a.J ? r.setTimeout(c, 1e3) : c();
  }
  function nY(a) {
    if ((a.A && !a.oa) || (a.l == null && a.j == null && a.T == null && a.A))
      return a.g;
    var b = a.A;
    a.A = !1;
    cY(a);
    a.A = b;
    if (!b || (a.check != null && !ZX(a.g, a.check, a.l, a.j))) return a.g;
    a.g.g.indexOf("n") >= 0 && ((a.width = null), (a.height = null));
    if ((a.width == null && a.l !== null) || (a.height == null && a.j !== null))
      a.J = !1;
    (a.l == 0 || a.j == 0) && a.g.g.indexOf("l") >= 0 && ((a.l = 0), (a.j = 0));
    b = a.g;
    b.j[0] = "";
    b.j[1] = "";
    b.g = "";
    b.errors = "";
    iY(a);
    return cY(a);
  }
  function gY(a, b) {
    let c = !1;
    b.display == "none" && (XX(a.g, "n"), a.A && (c = !0));
    (b.visibility != "hidden" && b.visibility != "collapse") || XX(a.g, "v");
    b.overflow == "hidden" && XX(a.g, "o");
    b.position == "absolute"
      ? (XX(a.g, "a"), (c = !0))
      : b.position == "fixed" && (XX(a.g, "f"), (c = !0));
    return c;
  }
  function dY(a, b, c) {
    let d = 0;
    if (!b || !b.parentElement) return !0;
    let e = !1,
      f = 0;
    const g = b.parentElement.childNodes;
    for (let k = 0; k < g.length; k++) {
      var h = g[k];
      h == b ? (e = !0) : ((h = oY(a, h, c)), (d |= h), e && (f |= h));
    }
    f & 1 && (d & 2 && WX(a.g, 0, "o"), d & 4 && WX(a.g, 1, "o"));
    return !(d & 1);
  }
  function eY(a, b, c, d) {
    let e = null;
    try {
      e = c.style;
    } catch (E) {
      YX(a.g, "s");
    }
    var f = c.getAttribute("width"),
      g = Qd(f),
      h = c.getAttribute("height"),
      k = Qd(h),
      m = (d && /^block$/.test(d.display)) || (e && /^block$/.test(e.display));
    b = dY(a, c, b);
    var l = d && d.width;
    const n = d && d.height;
    var p = e && e.width,
      q = e && e.height,
      v = Rd(l) == a.width && Rd(n) == a.height;
    l = v ? l : p;
    q = v ? n : q;
    p = Rd(l);
    v = Rd(q);
    g =
      a.width !== null &&
      ((p !== null && a.width >= p) || (g !== null && a.width >= g));
    v =
      a.height !== null &&
      ((v !== null && a.height >= v) || (k !== null && a.height >= k));
    k = !b && fY(d);
    v =
      b ||
      v ||
      k ||
      !(f || l || (d && (!pY(String(d.minWidth)) || !qY(String(d.maxWidth)))));
    m =
      b ||
      g ||
      k ||
      m ||
      !(
        h ||
        q ||
        (d && (!pY(String(d.minHeight)) || !qY(String(d.maxHeight))))
      );
    rY(a, 0, v, c, "width", f, a.width, a.l);
    sY(a, 0, "d", v, e, d, "width", l, a.width, a.l);
    sY(a, 0, "m", v, e, d, "minWidth", e && e.minWidth, a.width, a.l);
    sY(a, 0, "M", v, e, d, "maxWidth", e && e.maxWidth, a.width, a.l);
    a.Ph
      ? ((c = /^html|body$/i.test(c.nodeName)),
        (f = Rd(n)),
        (h = d ? d.overflowY === "auto" || d.overflowY === "scroll" : !1),
        (h =
          a.j != null &&
          d &&
          f &&
          Math.round(f) !== a.j &&
          !h &&
          d.minHeight !== "100%"),
        a.A &&
          !c &&
          h &&
          (e.setProperty("height", "auto", "important"),
          d &&
            !pY(String(d.minHeight)) &&
            e.setProperty("min-height", "0px", "important"),
          d &&
            !qY(String(d.maxHeight)) &&
            a.j &&
            Math.round(f) < a.j &&
            e.setProperty("max-height", "none", "important")))
      : (rY(a, 1, m, c, "height", h, a.height, a.j),
        sY(a, 1, "d", m, e, d, "height", q, a.height, a.j),
        sY(a, 1, "m", m, e, d, "minHeight", e && e.minHeight, a.height, a.j),
        sY(a, 1, "M", m, e, d, "maxHeight", e && e.maxHeight, a.height, a.j));
    return b;
  }
  function hY(a) {
    function b() {
      if (c > 0) {
        var m = Hd(e, d) || { width: 0, height: 0 };
        const l = Rd(m.width);
        m = Rd(m.height);
        l !== null && f !== null && h && h(0, f - l);
        m !== null && g !== null && h && h(1, g - m);
        --c;
      } else r.clearInterval(k), h && (h(0, 0), h(1, 0));
    }
    let c = 31.25;
    const d = a.ca,
      e = a.D,
      f = a.l,
      g = a.j,
      h = a.F;
    let k;
    r.setTimeout(() => {
      k = r.setInterval(b, 16);
    }, 990);
  }
  function oY(a, b, c) {
    if (b.nodeType == 3) return /\S/.test(b.data) ? 1 : 0;
    if (b.nodeType == 1) {
      if (/^(head|script|style)$/i.test(b.nodeName)) return 0;
      let d = null;
      try {
        d = Hd(b, c);
      } catch (e) {}
      if (d) {
        if (d.display == "none" || d.position == "fixed") return 0;
        if (d.position == "absolute") {
          if (
            !a.B.boundingClientRect ||
            d.visibility == "hidden" ||
            d.visibility == "collapse"
          )
            return 0;
          c = null;
          try {
            c = b.getBoundingClientRect();
          } catch (e) {
            return 0;
          }
          return (
            (c.right > a.B.boundingClientRect.left ? 2 : 0) |
            (c.bottom > a.B.boundingClientRect.top ? 4 : 0)
          );
        }
      }
      return 1;
    }
    return 0;
  }
  function rY(a, b, c, d, e, f, g, h) {
    if (h != null) {
      if (typeof f == "string") {
        if (f == "100%" || !f) return;
        f = Qd(f);
        f == null && (YX(a.g, "n"), WX(a.g, b, "d"));
      }
      if (f != null)
        if (c) {
          if (a.A)
            if (a.J) {
              const k = Math.max(f + h - (g || 0), 0),
                m = a.F;
              a.F = (l, n) => {
                l == b && Qc(d, e, String(k - n));
                m && m(l, n);
              };
            } else Qc(d, e, String(h));
        } else WX(a.g, b, "d");
    }
  }
  function sY(a, b, c, d, e, f, g, h, k, m) {
    if (m != null) {
      f = f && f[g];
      typeof f != "string" ||
        (c == "m" ? pY(f) : qY(f)) ||
        ((f = Rd(f)),
        f == null ? XX(a.g, "p") : k != null && XX(a.g, f == k ? "E" : "e"));
      if (typeof h == "string") {
        if (c == "m" ? pY(h) : qY(h)) return;
        h = Rd(h);
        h == null && (YX(a.g, "p"), WX(a.g, b, c));
      }
      if (h != null)
        if (d && e) {
          if (a.A)
            if (a.J) {
              const l = Math.max(h + m - (k || 0), 0),
                n = a.F;
              a.F = (p, q) => {
                p == b && (e[g] = `${l - q}px`);
                n && n(p, q);
              };
            } else e[g] = `${m}px`;
        } else WX(a.g, b, c);
    }
  }
  var xY = class {
    constructor(a, b, c, d, e, f, g) {
      this.pubWin = a;
      this.D = b;
      this.L = c;
      this.H = this.F = null;
      this.V = !1;
      this.B = new tY(this.D);
      this.ca = (a = this.D.ownerDocument) && (a.defaultView || a.parentWindow);
      this.B = new tY(this.D);
      this.A = g;
      this.oa = uY(this.B, d.Yh, d.height, d.De);
      this.width = this.A
        ? this.B.boundingClientRect
          ? this.B.boundingClientRect.right - this.B.boundingClientRect.left
          : null
        : e;
      this.height = this.A
        ? this.B.boundingClientRect
          ? this.B.boundingClientRect.bottom - this.B.boundingClientRect.top
          : null
        : f;
      this.l = vY(d.width);
      this.j = vY(d.height);
      this.T = this.A ? vY(d.opacity) : null;
      this.check = d.check;
      this.De = !!d.De;
      this.J = d.Yh == "animate" && !wY(this.B, this.j, this.De) && VX();
      this.Ne = !!d.Ne;
      this.g = new bY();
      wY(this.B, this.j, this.De) && XX(this.g, "r");
      e = this.B;
      e.g && e.j >= e.ia && XX(this.g, "b");
      this.Tf = !!d.Tf;
      this.Ph = !!d.Ph;
    }
  };
  function wY(a, b, c) {
    var d;
    (d = a.g) &&
      !(d = !a.visible) &&
      (c
        ? ((b = a.j + Math.min(b, vY(a.getHeight()))), (a = a.g && b >= a.ia))
        : (a = a.g && a.j >= a.ia),
      (d = a));
    return d;
  }
  var tY = class {
    constructor(a) {
      this.boundingClientRect = null;
      var b = a && a.ownerDocument,
        c = b && (b.defaultView || b.parentWindow);
      c = c && Ed(c);
      this.g = !!c;
      if (a)
        try {
          this.boundingClientRect = a.getBoundingClientRect();
        } catch (g) {}
      var d = a;
      let e = 0,
        f = this.boundingClientRect;
      for (; d; )
        try {
          f && (e += f.top);
          const g = d.ownerDocument,
            h = g && (g.defaultView || g.parentWindow);
          (d = h && h.frameElement) && (f = d.getBoundingClientRect());
        } catch (g) {
          break;
        }
      this.j = e;
      c = c || r;
      this.ia = (
        c.document.compatMode == "CSS1Compat"
          ? c.document.documentElement
          : c.document.body
      ).clientHeight;
      b = b && yU(b);
      this.visible =
        !!a &&
        !(b == 2 || b == 3) &&
        !(
          this.boundingClientRect &&
          this.boundingClientRect.top >= this.boundingClientRect.bottom &&
          this.boundingClientRect.left >= this.boundingClientRect.right
        );
    }
    isVisible() {
      return this.visible;
    }
    getWidth() {
      return this.boundingClientRect
        ? this.boundingClientRect.right - this.boundingClientRect.left
        : null;
    }
    getHeight() {
      return this.boundingClientRect
        ? this.boundingClientRect.bottom - this.boundingClientRect.top
        : null;
    }
  };
  function uY(a, b, c, d) {
    switch (b) {
      case "no_rsz":
        return !1;
      case "force":
      case "animate":
        return !0;
      default:
        return wY(a, c, d);
    }
  }
  function fY(a) {
    return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat);
  }
  var yY = new bY("s", ""),
    $X = RegExp("[lonvafrbpEe]", "g");
  function qY(a) {
    return !a || /^(auto|none|100%)$/.test(a);
  }
  function pY(a) {
    return !a || /^(0px|auto|none|0%)$/.test(a);
  }
  function jY(a, b, c) {
    b !== null &&
      Qd(a.getAttribute("width")) !== null &&
      a.setAttribute("width", String(b));
    c !== null &&
      Qd(a.getAttribute("height")) !== null &&
      a.setAttribute("height", String(c));
    b !== null && (a.style.width = `${b}px`);
    c !== null && (a.style.height = `${c}px`);
  }
  var kY =
      "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(
        " "
      ),
    lY =
      "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(
        " "
      );
  function mY() {
    let a =
        "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s",
      b = kY;
    for (var c = 0; c < b.length; c++)
      a += ", " + b[c] + " .2s cubic-bezier(.4, 0, 1, 1)";
    b = lY;
    for (c = 0; c < b.length; c++)
      a += ", " + b[c] + " .3s cubic-bezier(.4, 0, 1, 1) .2s";
    return a;
  }
  function vY(a) {
    return typeof a === "string"
      ? Qd(a)
      : typeof a === "number" && isFinite(a)
      ? a
      : null;
  }
  function zY(a, b) {
    if (Tb()) {
      var c = a.document.documentElement.lang;
      AY(a)
        ? BY(b, je(a), !0, "", c)
        : new MutationObserver((d, e) => {
            AY(a) &&
              (BY(b, je(a), !1, c, a.document.documentElement.lang),
              e.disconnect());
          }).observe(a.document.documentElement, {
            attributeFilter: ["class"],
          });
    }
  }
  function AY(a) {
    a = a.document?.documentElement?.classList;
    return !(!a?.contains("translated-rtl") && !a?.contains("translated-ltr"));
  }
  function BY(a, b, c, d, e) {
    Em(
      { ptt: `${a}`, pvsid: `${b}`, ibatl: String(c), pl: d, nl: e },
      "translate-event"
    );
  }
  function CY(a) {
    if ((a = a.navigator?.userActivation)) {
      var b = 0;
      a?.hasBeenActive && (b |= 1);
      a?.isActive && (b |= 2);
      return b;
    }
  }
  const DY = /[+, ]/;
  function EY(a, b) {
    const c = a.G;
    var d = a.pubWin,
      e = {},
      f = d.document,
      g = le(d),
      h = !1,
      k = "",
      m = 1;
    a: {
      m = c.google_ad_width || d.google_ad_width;
      var l = c.google_ad_height || d.google_ad_height;
      if (d && d.top === d) h = !1;
      else {
        h = d.document;
        k = h.documentElement;
        if (m && l) {
          var n = 1;
          let q = 1;
          d.innerHeight
            ? ((n = d.innerWidth), (q = d.innerHeight))
            : k && k.clientHeight
            ? ((n = k.clientWidth), (q = k.clientHeight))
            : h.body && ((n = h.body.clientWidth), (q = h.body.clientHeight));
          if (q > 2 * l || n > 2 * m) {
            h = !1;
            break a;
          }
        }
        h = !0;
      }
    }
    k = h;
    m = yJ(g).sh;
    l = d.top == d ? 0 : Bd(d.top) ? 1 : 2;
    n = 4;
    k || l !== 1
      ? k || l !== 2
        ? k && l === 1
          ? (n = 7)
          : k && l === 2 && (n = 8)
        : (n = 6)
      : (n = 5);
    m && (n |= 16);
    k = String(n);
    m = AJ(d);
    l = !!c.google_page_url;
    e.google_iframing = k;
    m !== 0 && (e.google_iframing_environment = m);
    if (!l && f.domain === "ad.yieldmanager.com") {
      for (
        k = f.URL.substring(f.URL.lastIndexOf("http"));
        k.indexOf("%") > -1;

      )
        try {
          k = decodeURIComponent(k);
        } catch (q) {
          break;
        }
      c.google_page_url = k;
      l = !!k;
    }
    l
      ? ((e.google_page_url = c.google_page_url),
        (e.google_page_location = (h ? f.referrer : f.URL) || "EMPTY"))
      : (h && Bd(d.top) && f.referrer && d.top.document.referrer === f.referrer
          ? (e.google_page_url = d.top.document.URL)
          : (e.google_page_url = h ? f.referrer : f.URL),
        (e.google_page_location = null));
    if (f.URL === e.google_page_url)
      try {
        var p = Math.round(Date.parse(f.lastModified) / 1e3) || null;
      } catch {
        p = null;
      }
    else p = null;
    e.google_last_modified_time = p;
    d = g === g.top ? g.document.referrer : ((d = Sm()) && d.referrer) || "";
    e.google_referrer_url = d;
    zJ(e, c);
    b.aa()
      ? ((e = c.google_page_location || c.google_page_url),
        "EMPTY" === e && (e = c.google_page_url),
        e
          ? ((e = e.toString()),
            e.indexOf("http://") == 0
              ? (e = e.substring(7, e.length))
              : e.indexOf("https://") == 0 && (e = e.substring(8, e.length)),
            (d = e.indexOf("/")),
            d === -1 && (d = e.length),
            (e = e.substring(0, d).split(".")),
            (d = !1),
            e.length >= 3 && (d = e[e.length - 3] in GT),
            e.length >= 2 && (d = d || e[e.length - 2] in GT),
            (e = d))
          : (e = !1),
        (e = e
          ? "pagead2.googlesyndication.com"
          : "googleads.g.doubleclick.net"))
      : (e = "pagead2.googlesyndication.com");
    b = FY(a, b);
    d = a.G;
    f = d.google_ad_channel;
    g = "/pagead/ads?";
    d.google_ad_client === "ca-pub-6219811747049371" &&
      GY.test(f) &&
      (g = "/pagead/lopri?");
    e = `https://${e}${g}`;
    a =
      (T(Ez)
        ? a.pageStateTs.idi
        : kU(qU(a.pageState))
        ? jU(qU(a.pageState))
        : A(a.ja, 9)) && c.google_debug_params
        ? c.google_debug_params
        : "";
    a = ln(b, e + a);
    return (c.google_ad_url = a);
  }
  function HY(a) {
    return (
      encodeURIComponent("RS-" + a.google_reactive_sra_index + "-") +
      "&" +
      kn({
        adk: a.google_ad_unit_key,
        client: a.google_ad_client,
        fa: a.google_reactive_ad_format,
      })
    );
  }
  function IY(a) {
    try {
      if (a.parentNode) return a.parentNode;
    } catch {
      return null;
    }
    if (a.nodeType === 9)
      a: {
        try {
          const c = Tk(a);
          if (c) {
            const d = c.frameElement;
            if (d && Bd(c.parent)) {
              var b = d;
              break a;
            }
          }
        } catch {}
        b = null;
      }
    else b = null;
    return b;
  }
  function JY(a, b) {
    var c = yX(a.pubWin);
    a.G.saaei && (c += (c === "" ? "" : ",") + a.G.saaei);
    a.G.google_ad_intent_eids &&
      (c += `${c === "" ? "" : ","}${a.G.google_ad_intent_eids}`);
    b.eid = c;
    c = a.G.google_loeid;
    typeof c === "string" && ((a.j |= 4096), (b.loeid = c));
  }
  function KY(a, b) {
    a =
      (a = Ed(a.pubWin)) && a.document
        ? JT(a.document, a)
        : new Jk(-12245933, -12245933);
    b.scr_x = Math.round(a.x);
    b.scr_y = Math.round(a.y);
  }
  function LY(a) {
    try {
      const b = r.top.location.hash;
      if (b) {
        const c = b.match(a);
        return (c && c[1]) || "";
      }
    } catch {}
    return "";
  }
  function MY(a, b, c) {
    const d = a.G;
    var e = a.pubWin,
      f = a.M,
      g = le(window);
    d.fsapi && (b.fsapi = !0);
    b.ref = d.google_referrer_url;
    b.loc = d.google_page_location;
    var h;
    (h = Sm(e)) && h.data && sa(h.data) && typeof h.data.type === "string"
      ? ((h = h.data.type.toLowerCase()),
        (h = h === "doubleclick" || h === "adsense" ? null : h))
      : (h = null);
    h && (b.apn = h.substr(0, 10));
    g = yJ(g);
    b.url || b.loc || !g.url || ((b.url = g.url), g.sh || (b.usrc = 1));
    g.url != (b.loc || b.url) && (b.top = g.url);
    a.Cc && (b.etu = a.Cc);
    (c = eV(d, f, c)) && (b.fc = c);
    if (!qn(d)) {
      c = a.pubWin.document;
      g = "";
      if (
        c.documentMode &&
        ((h = bl(new Nk(c), "IFRAME")),
        (h.frameBorder = "0"),
        (h.style.height = 0),
        (h.style.width = 0),
        (h.style.position = "absolute"),
        c.body)
      ) {
        c.body.appendChild(h);
        try {
          const ta = h.contentWindow.document;
          ta.open();
          var k = Gc("<!DOCTYPE html>");
          ta.write(Kc(k));
          ta.close();
          g += ta.documentMode;
        } catch (ta) {}
        c.body.removeChild(h);
      }
      b.docm = g;
    }
    let m, l, n, p, q, v, E, F, R, ea;
    try {
      (m = e.screenX), (l = e.screenY);
    } catch (ta) {}
    try {
      (n = e.outerWidth), (p = e.outerHeight);
    } catch (ta) {}
    try {
      (q = e.innerWidth), (v = e.innerHeight);
    } catch (ta) {}
    try {
      (E = e.screenLeft), (F = e.screenTop);
    } catch (ta) {}
    try {
      (q = e.innerWidth), (v = e.innerHeight);
    } catch (ta) {}
    try {
      (R = e.screen.availWidth), (ea = e.screen.availTop);
    } catch (ta) {}
    b.brdim = [E, F, m, l, R, ea, n, p, q, v].join();
    k = 0;
    r.postMessage === void 0 && (k |= 1);
    k > 0 && (b.osd = k);
    b.vis = yU(e.document);
    k = a.W;
    e = ZU(d)
      ? yY
      : nY(
          new xY(
            e,
            k,
            null,
            { width: 0, height: 0 },
            d.google_ad_width,
            d.google_ad_height,
            !1
          )
        );
    b.rsz = e.toString();
    b.abl = aY(e);
    if (!ZU(d) && ((e = rn(d)), e !== null)) {
      k = 0;
      a: {
        try {
          {
            var J = d.google_async_iframe_id;
            const ta = window.document;
            if (J) var N = ta.getElementById(J);
            else {
              var aa = ta.getElementsByTagName("script"),
                db = aa[aa.length - 1];
              N = (db && db.parentNode) || null;
            }
          }
          if ((J = N)) {
            N = [];
            aa = 0;
            for (
              var Wb = Date.now();
              ++aa <= 100 && Date.now() - Wb < 50 && (J = IY(J));

            )
              J.nodeType === 1 && N.push(J);
            var Aa = N;
            b: {
              for (Wb = 0; Wb < Aa.length; Wb++) {
                c: {
                  var Ka = Aa[Wb];
                  try {
                    if (
                      Ka.parentNode &&
                      Ka.offsetWidth > 0 &&
                      Ka.offsetHeight > 0 &&
                      Ka.style &&
                      Ka.style.display !== "none" &&
                      Ka.style.visibility !== "hidden" &&
                      (!Ka.style.opacity || Number(Ka.style.opacity) !== 0)
                    ) {
                      const ta = Ka.getBoundingClientRect();
                      var Yc = ta.right > 0 && ta.bottom > 0;
                      break c;
                    }
                  } catch (ta) {}
                  Yc = !1;
                }
                if (!Yc) {
                  var Hc = !1;
                  break b;
                }
              }
              Hc = !0;
            }
            if (Hc) {
              b: {
                const ta = Date.now();
                Hc = /^html|body$/i;
                Yc = /^fixed/i;
                for (Ka = 0; Ka < Aa.length && Date.now() - ta < 50; Ka++) {
                  const qd = Aa[Ka];
                  if (
                    !Hc.test(qd.tagName) &&
                    Yc.test(qd.style.position || ml(qd, "position"))
                  ) {
                    var Ic = qd;
                    break b;
                  }
                }
                Ic = null;
              }
              break a;
            }
          }
        } catch {}
        Ic = null;
      }
      Ic &&
        Ic.offsetWidth * Ic.offsetHeight <= e.width * e.height * 4 &&
        (k = 1);
      b.pfx = k;
    }
    a: {
      if (Math.random() < 0.05 && f)
        try {
          const ta = f.document.getElementsByTagName("head")[0];
          var Md = ta ? FV(ta) : 0;
          break a;
        } catch (ta) {}
      Md = 0;
    }
    f = Md;
    f !== 0 && (b.cms = f);
    d.google_lrv !== a.Ya && (b.alvm = d.google_lrv || "none");
  }
  function NY(a, b) {
    let c = 0;
    a.location && a.location.ancestorOrigins
      ? (c = a.location.ancestorOrigins.length)
      : Cd(() => {
          c++;
          return !1;
        }, a);
    c && (b.nhd = c);
  }
  function OY(a, b) {
    const c = GJ(b, 8, {});
    b = GJ(b, 9, {});
    const d = a.google_ad_section,
      e = a.google_ad_format;
    a = a.google_ad_slot;
    e
      ? (c[d] = c[d] ? c[d] + `,${e}` : e)
      : a && (b[d] = b[d] ? b[d] + `,${a}` : a);
  }
  function PY(a, b, c) {
    const d = a.G;
    var e = a.G;
    b.dt = Bs;
    e.google_async_iframe_id && e.google_bpp && (b.bpp = e.google_bpp);
    a: {
      try {
        var f = r.performance;
        if (f && f.timing && f.now) {
          var g =
            f.timing.navigationStart +
            Math.round(f.now()) -
            f.timing.domLoading;
          break a;
        }
      } catch (l) {}
      g = null;
    }
    (e = (e = g) ? IW(e, r.Date.now() - Bs, 1e6) : null) && (b.bdt = e);
    b.idt = IW(a.A, Bs);
    e = a.G;
    b.shv = (T(Ez) ? a.pageStateTs.bv : hU(qU(a.pageState))) || B(a.ja, 2);
    a.Ya && (b.mjsv = a.Ya);
    e.google_loader_used === "sd"
      ? (b.ptt = 5)
      : e.google_loader_used === "aa" && (b.ptt = 9);
    /^\w{1,3}$/.test(e.google_loader_used) && (b.saldr = e.google_loader_used);
    if ((e = Sm(a.pubWin)))
      (b.is_amp = 1), (b.amp_v = Tm(e)), (e = Um(e)) && (b.act = e);
    e = a.pubWin;
    e == e.top && (b.abxe = 1);
    e = new uX(a.pubWin);
    (g = qX(e, "__gads", c))
      ? (b.cookie = g)
      : c.aa() && CP(e.C) && (b.cookie_enabled = "1");
    (g = qX(e, "__gpi", c)) && !g.includes("&") && (b.gpic = g);
    qX(e, "__gpi_opt_out", c) === "1" && (b.pdopt = "1");
    e = new GX(a.pubWin);
    g = { Lh: !1, Mh: !a.l };
    (f = FX(e, c, g)) ? (b.eo_id_str = f) : EX(e, c, g) && (b.eoidce = "1");
    c = BJ();
    g = GJ(c, 8, {});
    e = d.google_ad_section;
    g[e] && (b.prev_fmts = g[e]);
    g = GJ(c, 9, {});
    g[e] && (b.prev_slotnames = g[e].toLowerCase());
    OY(d, c);
    e = GJ(c, 15, 0);
    e > 0 && (b.nras = String(e));
    (g = Sm(window))
      ? (g
          ? ((e = g.pageViewId),
            (g = g.clientId),
            typeof g === "string" &&
              (e += g.replace(/\D/g, "").substring(0, 6)))
          : (e = null),
        (e = +e))
      : ((e = le(window)),
        (g = e.google_global_correlator),
        g ||
          (e.google_global_correlator = g =
            1 + Math.floor(Math.random() * 8796093022208)),
        (e = g));
    b.correlator = GJ(c, 7, e);
    T(Kz) && (b.rume = 1);
    if (d.google_ad_channel) {
      e = GJ(c, 10, {});
      g = "";
      f = d.google_ad_channel.split(DY);
      for (var h = 0; h < f.length; h++) {
        var k = f[h];
        e[k] ? (g += k + "+") : (e[k] = !0);
      }
      b.pv_ch = g;
    }
    if (d.google_ad_host_channel) {
      e = d.google_ad_host_channel;
      g = GJ(c, 11, []);
      f = e.split("|");
      c = -1;
      e = [];
      for (h = 0; h < f.length; h++) {
        k = f[h].split(DY);
        g[h] || (g[h] = {});
        let l = "";
        for (let n = 0; n < k.length; n++) {
          const p = k[n];
          p !== "" && (g[h][p] ? (l += "+" + p) : (g[h][p] = !0));
        }
        l = l.slice(1);
        e[h] = l;
        l !== "" && (c = h);
      }
      g = "";
      if (c > -1) {
        for (f = 0; f < c; f++) g += e[f] + "|";
        g += e[c];
      }
      b.pv_h_ch = g;
    }
    b.frm = d.google_iframing;
    b.ife = d.google_iframing_environment;
    a: {
      c = d.google_ad_client;
      try {
        const l = le(window);
        let n = l.google_prev_clients;
        n || (n = l.google_prev_clients = {});
        if (c in n) {
          var m = 1;
          break a;
        }
        n[c] = !0;
        m = 2;
        break a;
      } catch {
        m = 0;
        break a;
      }
      m = void 0;
    }
    b.pv = m;
    a.M &&
      T(Ux) &&
      ((m = a.M),
      (m = Tb() && AY(m) ? m.document.documentElement.lang : void 0),
      m && (b.tl = m));
    T(Vx) &&
      a.pubWin.location.host.endsWith("h5games.usercontent.goog") &&
      (b.cdm = a.pubWin.location.host);
    NY(a.pubWin, b);
    (a = d.google_ad_layout) && NW[a] >= 0 && (b.rplot = NW[a]);
  }
  function QY(a, b) {
    a = a.O;
    NJ() && (b.npa = 1);
    if (a) {
      Vh(a, 3) != null && (b.gdpr = a.g() ? "1" : "0");
      var c = ei(a, 1);
      c && (b.us_privacy = c);
      (c = ei(a, 2)) && (b.gdpr_consent = c);
      (c = ei(a, 4)) && (b.addtl_consent = c);
      (c = fi(a, 7)) && (b.tcfe = c);
      (c = B(a, 11)) && (b.gpp = c);
      (a = xh(a, 10, ag, 1, void 0, 1024)) &&
        a.length > 0 &&
        (b.gpp_sid = a.join(","));
    }
  }
  function RY(a, b) {
    const c = a.G;
    QY(a, b);
    Jd(AX, (d, e) => {
      b[d] = c[e];
    });
    ZU(c) && ((a = mV(c)), (b.fa = a));
    b.pi ||
      c.google_ad_slot == null ||
      ((a = JB(c)), Ou(a) && ((a = cv(a.getValue())), (b.pi = a)));
  }
  function SY(a, b) {
    var c = Wm() || HT(a.pubWin.top);
    c && ((b.biw = c.width), (b.bih = c.height));
    c = a.pubWin;
    c !== c.top &&
      (a = HT(a.pubWin)) &&
      ((b.isw = a.width), (b.ish = a.height));
  }
  function TY(a, b) {
    var c = a.pubWin;
    c !== null && c != c.top
      ? ((a = [c.document.URL]),
        c.name && a.push(c.name),
        (c = HT(c, !1)),
        a.push(c.width.toString()),
        a.push(c.height.toString()),
        (a = $u(a.join(""))))
      : (a = 0);
    a !== 0 && (b.ifk = a);
  }
  function UY(a, b) {
    (a = JJ()[a.G.google_ad_client]) && (b.psts = a.join());
  }
  function VY(a, b) {
    T(Ez) ? (a = a.pageStateTs.pem) : ((a = qU(a.pageState)), (a = Wh(a, 2)));
    a && a >= 0 && (b.tmod = a);
  }
  function WY(a, b) {
    (a = a.pubWin.google_user_agent_client_hint) && (b.uach = ue(a));
  }
  function XY(a, b) {
    const c = T(qz) ? a.Yf.psldt.fldt.pbfl : a.G.google_ad_public_floor;
    a = T(qz) ? a.Yf.psldt.fldt.pvfl : a.G.google_ad_private_floor;
    c >= 0 && (b.pubf = c);
    a >= 0 && (b.pvtf = a);
  }
  function YY(a, b) {
    const c = Number(a.G.google_traffic_source);
    c && Object.values(Fa).includes(c) && (b.trt = a.G.google_traffic_source);
  }
  function ZY(a, b) {
    var c;
    if ((c = !T(Qz)))
      (c = a.cookieDeprecationLabel?.label),
        (c = !(T(vz) && c && c.match(Sz(tz))));
    c &&
      ("runAdAuction" in a.pubWin.navigator &&
        "joinAdInterestGroup" in a.pubWin.navigator &&
        (b.td = 1),
      (c = a.pubWin.navigator),
      a.pubWin.isSecureContext &&
        "runAdAuction" in c &&
        c.runAdAuction instanceof Function &&
        hX("run-ad-auction", a.pubWin.document) &&
        ((c = new CX()), c.set(1, iX(a.pubWin.navigator)), (b.tdf = BX(c))));
  }
  function $Y(a, b) {
    if (navigator.deprecatedRunAdAuctionEnforcesKAnonymity) {
      var c = new PX();
      var d = new OX();
      d = mi(d, 4, "deprecated_kanon");
      c = y(c, 2, d);
    }
    a.cookieDeprecationLabel != null &&
      Tb() &&
      (c ?? (c = new PX()),
      (d = mi(c, 3, a.cookieDeprecationLabel.label)),
      H(d, 4, a.cookieDeprecationLabel.status));
    c && (b.psd = ue(pj(c)));
  }
  function aZ(a, b) {
    T(Hz) || (hX("attribution-reporting", a.pubWin.document) && (b.nt = 1));
  }
  function bZ(a, b) {
    if (typeof a.G.google_privacy_treatments === "string") {
      var c = new Map([["disablePersonalization", 1]]);
      a = a.G.google_privacy_treatments.split(",");
      var d = [];
      for (const [e, f] of c.entries()) (c = f), a.includes(e) && d.push(c);
      d.length && (b.ppt = d.join("~"));
    }
  }
  function cZ(a, b) {
    if (a.g) {
      a.g.Xi && (b.xatf = 1);
      try {
        a.g.qe?.disconnect(), (a.g.qe = void 0);
      } catch {}
    }
  }
  function dZ(a, b = document) {
    if (T(Zw))
      try {
        const { labels: c } = JX(b);
        c.length &&
          (a.pgls = c
            .map((d) => {
              d = HX(d);
              return se(d);
            })
            .join("~"));
      } catch (c) {
        AC.ma(1278, c);
      }
  }
  function eZ(a, b) {
    T(Yw) && ((a = a.Ab?.get()), (b.bisch = a?.charging), (b.blev = a?.level));
  }
  function FY(a, b) {
    const c = {};
    RY(a, c);
    WY(a, c);
    PY(a, c, b);
    c.u_tz = -new Date().getTimezoneOffset();
    try {
      var d = Im.history.length;
    } catch (e) {
      d = 0;
    }
    c.u_his = d;
    c.u_h = Im.screen?.height;
    c.u_w = Im.screen?.width;
    c.u_ah = Im.screen?.availHeight;
    c.u_aw = Im.screen?.availWidth;
    c.u_cd = Im.screen?.colorDepth;
    c.u_sd = IT(a.pubWin);
    c.dmc = a.pubWin.navigator?.deviceMemory;
    DC(889, () => {
      if (a.M === null) (c.adx = -12245933), (c.ady = -12245933);
      else {
        var e = LT(a.M, a.W);
        (c.adx && c.adx !== -12245933 && c.ady && c.ady !== -12245933) ||
          ((c.adx = Math.round(e.x)), (c.ady = Math.round(e.y)));
        KT(a.W) || ((c.adx = -12245933), (c.ady = -12245933), (a.j |= 32768));
      }
    });
    SY(a, c);
    TY(a, c);
    KY(a, c);
    JY(a, c);
    c.oid = 2;
    UY(a, c);
    T($w) && HW(a, c, b);
    c.pvsid = je(a.pubWin, AC);
    VY(a, c);
    c.uas = CY(a.pubWin);
    (d = NX(a.pubWin)) && (c.nvt = d);
    a.B && (c.scar = a.B);
    cZ(a, c);
    MY(a, c, b);
    c.fu = a.j;
    c.bc = DX();
    if (
      T(Ez)
        ? a.pageStateTs.idi
        : kU(qU(a.pageState))
        ? jU(qU(a.pageState))
        : A(a.ja, 9)
    )
      if (
        (zX(c),
        (c.creatives = LY(/\b(?:creatives)=([\d,]+)/)),
        (c.adgroups = LY(/\b(?:adgroups)=([\d,]+)/)),
        c.adgroups || c.sso)
      )
        (c.adtest = "on"),
          (c.disable_budget_throttling = !0),
          (c.use_budget_filtering = !1),
          (c.retrieve_only = !0),
          (c.disable_fcap = !0);
    Om() && (c.atl = !0);
    c.bz = me(a.pubWin);
    XY(a, c);
    YY(a, c);
    ZY(a, c);
    $Y(a, c);
    aZ(a, c);
    bZ(a, c);
    String(a.G.google_special_category_data) === "true" && (c.scd = 1);
    dZ(c, a.pubWin.document);
    eZ(a, c);
    return c;
  }
  const GY = /YtLoPri/;
  function fZ(a) {
    const b = BJ(),
      c = a.google_ad_section;
    ZU(a) && IJ(b, 15);
    if (qn(a)) {
      if (IJ(b, 5) > 100) return !1;
    } else if (IJ(b, 6) - GJ(b, 15, 0) > 100 && c === "") return !1;
    return !0;
  }
  var gZ = Y(
    function (a, b) {
      const c = b.G,
        d = b.ua,
        e = b.pubWin;
      a = a.O;
      let f = "";
      pV(c)
        ? ((f = (a.aa() ? d.dg : d.cg).toString() + "#" + HY(c)),
          OY(c, BJ()),
          fZ(c))
        : (oV(c) || !$U(c) || YU(e, c, a)) && fZ(c) && (f = EY(b, a));
      Qm(2, [c, f]);
      return { Fa: f, pa: !f };
    },
    { id: 1437, I: { Fa: void 0, pa: void 0 } }
  );
  var hZ = Y(
    function (a, b, c, d, e) {
      var f = a.sf;
      if (!f) return { Fa: "", uc: "" };
      b.google_async_iframe_id || on(c);
      var g = pn(b);
      const h = c === d ? "a!" + g.toString(36) : `${g.toString(36)}.${$c()}`;
      c = MT(d, c, e, !0) > 0;
      g = { ifi: g, uci: h };
      c && ((c = BJ()), (g.btvi = GJ(c, 21, 1)), IJ(c, 21));
      f = ln(g, f);
      Wd() && !pV(b) && (f = Sn(f, "fsb", 1));
      return a.ta ? { Fa: Sn(f, "fca", "1"), uc: h } : { Fa: f, uc: h };
    },
    { id: 1438, I: { Fa: void 0, uc: void 0 } }
  );
  var iZ = Y(
    function (a) {
      const b = a.url;
      if (a.pa) return { Fa: "" };
      a = nn(b);
      if (a !== b) {
        let c = b.lastIndexOf("&", 61432);
        c === -1 && (c = b.lastIndexOf("?", 61432));
        GC(
          "trn",
          { ol: b.length, tr: c === -1 ? "" : b.substring(c + 1), url: b },
          0.01
        );
      }
      return { Fa: a };
    },
    { id: 1374, I: { Fa: void 0 } }
  );
  var jZ = class extends $V {
    constructor(a, b, c, d, e, f) {
      super(a, b, c, d, f);
      this.ra = e;
      this.output = WV(this, new NV());
      this.complete = new SV();
    }
    D(a) {
      a.then(
        (b) => {
          b instanceof HV || (JV(this.output, b), this.complete.notify());
        },
        (b) => {
          this.ra
            ? JV(this.output, this.ra(b))
            : this.output.setError(new GV(`output error: ${b.message}`), () => {
                this.F.Ha({ methodName: this.id, Na: b });
              });
          this.complete.notify();
        }
      );
    }
    l(a) {
      this.ra
        ? (JV(this.output, this.ra(a)), this.complete.notify())
        : super.l(a);
    }
  };
  function kZ(a, b) {
    a.id = b.id;
    a.ra = b.ra;
    return a;
  }
  function lZ(a, b, c, ...d) {
    return new jZ(a.id, a, b, c, a.ra, d);
  }
  function mZ(a, b) {
    Bt(a, b);
    a.ca.push(b);
    return b;
  }
  function Z(a, b, c, ...d) {
    return mZ(a, bW(b, a.j, c, ...d));
  }
  function nZ(a, b, c, ...d) {
    return mZ(a, lZ(b, a.j, c, ...d));
  }
  function oZ(a, b) {
    a.oa.push(b);
    Bt(a, b);
    return b;
  }
  async function pZ(a) {
    a.L.length && (await Promise.all(a.L.map((d) => d.l.promise)));
    if (!(await a.Vd())) return a.l.resolve(a.T), a.l.promise;
    for (var b of a.ca) b.start();
    for (var c of a.oa) pZ(c);
    if (a.H && ((b = Object.keys(a.H)), b.length)) {
      c = await Promise.all(Object.values(a.H).map((e) => e.promise));
      let d = 0;
      for (const e of b) a.T[e] = c[d++];
    }
    a.l.resolve(a.T);
    return a.l.promise;
  }
  var qZ = class extends O {
    constructor(a) {
      super();
      this.j = a;
      this.ca = [];
      this.oa = [];
      this.T = {};
      this.L = [];
      this.l = new xS();
      this.H = {};
    }
    run() {
      pZ(this);
    }
    async Vd() {
      return !0;
    }
    g() {
      super.g();
      this.ca.length = 0;
      this.oa.length = 0;
      this.L.length = 0;
    }
  };
  var rZ = class extends qZ {
    constructor(a, b, c, d, e) {
      super(a);
      a = X(Z(this, gZ, { O: c }, b), d);
      b = Z(this, hZ, { sf: a.Fa, ta: e }, b.G, b.pubWin, b.M, b.W);
      this.A = {
        qm: Z(this, iZ, { pa: a.pa, url: b.Fa }).Fa,
        pa: a.pa,
        uc: b.uc,
      };
    }
  };
  var sZ = Y(
    function (a, b) {
      return { O: b.O };
    },
    { id: 1462, I: { O: void 0 } }
  );
  var tZ = Y(
    function (a, b, c, d, e, f, g) {
      return a.O.aa() || c
        ? { Rd: !0 }
        : (GC(
            "afc_noc_req",
            {
              client: f.google_ad_client,
              isGdprCountry: (T(Ez)
                ? g.gcs.igc
                : iU(qU(d))
                ? qU(d).g()
                : !!ZW(e)?.g()
              ).toString(),
            },
            U(kx)
          ),
          { Rd: !1 });
    },
    { id: 1381, I: { Rd: void 0 } }
  );
  function uZ(a, b, c) {
    var d = qX(a, "__gpi_opt_out", b);
    d &&
      ((d = Zl(d)),
      (d = ii(d, 2, 2147483647)),
      (d = li(d, 3, "/")),
      (c = li(d, 4, c)),
      rX(a, "__gpi_opt_out", c, b));
  }
  function vZ(a, b, c, d) {
    const e = sS(a, "gpi-uoo", (f, g) => {
      if (g.source === c) {
        g = Zl(f.userOptOut ? "1" : "0");
        g = ii(g, 2, 2147483647);
        g = li(g, 3, "/");
        g = li(g, 4, a.location.hostname);
        var h = new uX(a);
        rX(h, "__gpi_opt_out", g, b);
        if (f.userOptOut || f.clearAdsData)
          sX(h, "__gads", b), sX(h, "__gpi", b);
      }
    });
    d.push(e);
  }
  var wZ = Y(
    function (a, b) {
      a = a.O;
      a.aa() && uZ(new uX(b), a, b.location.hostname);
      return {};
    },
    { id: 1382, I: {} }
  );
  var xZ = Y(
    function (a, b) {
      a = a.O;
      vX(20, b, a);
      vX(17, b, a);
      return {};
    },
    { id: 1433, I: {} }
  );
  var yZ = Y(
    function (a, b) {
      T(iy) && !ZU(b) && (b.aieuf = !0);
      return {};
    },
    { id: 1449, I: {} }
  );
  function zZ() {
    return navigator.cookieDeprecationLabel
      ? Promise.race([
          navigator.cookieDeprecationLabel
            .getValue()
            .then((a) => ({ status: 1, label: a }))
            .catch(() => ({ status: 2 })),
          ke(U(uz), { status: 5 }),
        ])
      : Promise.resolve({ status: 3 });
  }
  var AZ = kZ(
    async function (a) {
      a = a.O;
      return T(sz) && a.aa() ? PJ(BJ(), zZ) : null;
    },
    { id: 1432 }
  );
  var BZ = Y(
    function (a, b) {
      a = a.O;
      const c = b.G.google_reactive_ads_config;
      c &&
        (jV(b.M, c),
        qV(c, b, a),
        (a = c.page_level_pubvars),
        sa(a) && hc(b.G, a));
      return {};
    },
    { id: 1434, I: {} }
  );
  var CZ = Y(
    function (a, b) {
      a = a.O;
      if (Hm()) return {};
      const c = Gd("IFRAME");
      c.id = "google_esf";
      c.name = "google_esf";
      Lc(c, a.aa() ? b.dg : b.cg);
      c.style.display = "none";
      c && document.documentElement.appendChild(c);
      return {};
    },
    { id: 1441, I: {} }
  );
  yd`https://securepubads.g.doubleclick.net/pagead/js/car.js`;
  yd`https://securepubads.g.doubleclick.net/pagead/js/cocar.js`;
  var DZ = yd`https://ep3.adtrafficquality.google/ivt/worklet/caw.js`;
  function EZ(a) {
    const b = [];
    for (let c = 0; c < 8; ++c) {
      const d = new TR((f) => {
          b.push({ url: f });
        }),
        e = Xq(Wq(Vq(new Yq(), a), c));
      d.F(e);
    }
    return b;
  }
  function FZ(a, b = () => {}) {
    const c = Tk();
    c.sharedStorage &&
      !c.clientAgeRequested &&
      ((c.clientAgeRequested = !0),
      c.sharedStorage
        .createWorklet(DZ.toString(), { dataOrigin: "script-origin" })
        .then((d) => {
          GZ(d, c, a, b);
        })
        .catch(b));
  }
  function GZ(a, b, c, d = () => {}) {
    a.selectURL("ps_caus", EZ(c), { resolveToConfig: !0, savedQuery: "ps_cac" })
      .then((e) => {
        if (e) {
          var f = b.document.body;
          const g = document.createElement("fencedframe");
          g.id = "ps_caff";
          g.name = "ps_caff";
          g.mode = "opaque-ads";
          g.config = e;
          il(g, "display", "none");
          f.appendChild(g);
        }
      })
      .catch(d);
  }
  var HZ = Y(
    function (a, b, c) {
      if (T(jz)) {
        a = jX(b.isSecureContext, b, b.document);
        const d = !!b.sharedStorage?.createWorklet;
        c &&
          a &&
          d &&
          !GJ(BJ(), 34, !1) &&
          (HJ(BJ(), 34, !0),
          FZ(je(b), (e) => {
            let f = void 0;
            e.message.includes("sharedStorage.worklet.addModule is disabled") &&
              (f = 1e-4);
            AC.ma(1279, e, f);
          }));
      }
      return {};
    },
    { id: 1435, I: {} }
  );
  var IZ = kZ(
    async function (a, b) {
      return b.g?.Og || Promise.resolve();
    },
    { id: 1436 }
  );
  var JZ = Y(
    function (a, b) {
      a.cookieDeprecationLabel &&
        (b.cookieDeprecationLabel = a.cookieDeprecationLabel);
      return {};
    },
    { id: 1439, I: {} }
  );
  var KZ = class extends qZ {
    async Vd() {
      const a = await this.D();
      a || this.F();
      return a;
    }
  };
  async function LZ(a, b, c) {
    a = new MZ(b.id, b, a, c, b.ra);
    await a.start();
    b = await a.H.promise;
    a.dispose();
    return b;
  }
  class MZ extends $V {
    constructor(a, b, c, d, e) {
      super(a, b, c, d, []);
      this.ra = e;
      this.H = ja(Promise, "withResolvers").call(Promise);
    }
    A() {
      const a = this.f(ZV(this), ...this.T);
      this.H.resolve(a);
    }
    D() {}
    l(a) {
      this.ra !== void 0 ? this.H.resolve(this.ra(a)) : super.l(a);
    }
  }
  function NZ(a, b) {
    a.id = b.id;
    a.ra = b.ra;
    return a;
  }
  const OZ = NZ(
    function (a) {
      return a.Pa;
    },
    { id: 1464 }
  );
  var PZ = class extends KZ {
    constructor(a, b, c, d, e) {
      super(a);
      this.ka = a;
      this.Pa = d;
      a = X(Z(this, CZ, { O: c }, b.ua), e);
      a = X(nZ(this, AZ, { O: c }), a.finished);
      d = Z(this, JZ, { cookieDeprecationLabel: a.output }, b);
      d = X(Z(this, xZ, { O: c }, b.pubWin), d.finished);
      d = X(Z(this, BZ, { O: c }, b), d.finished);
      c = X(Z(this, HZ, { O: c }, b.pubWin, b.l), d.finished);
      c = X(nZ(this, IZ, {}, b), c.finished);
      this.A = X(Z(this, yZ, {}, b.G), c.complete).finished;
      this.cookieDeprecationLabel = a.output;
    }
    async D() {
      return LZ(this.ka, OZ, { Pa: this.Pa });
    }
    F() {
      this.A.notify();
      JV(this.cookieDeprecationLabel, null);
    }
  };
  var QZ = Y(
    function (a, b) {
      return { ta: T(xz) && !pV(b.G) && !ZU(b.G) };
    },
    { id: 1488, I: { ta: void 0 } }
  );
  var RZ = Y(
    function (a, b) {
      var c = b.pubWin;
      const d = b.W;
      var e = b.G;
      const f = b.Ya;
      a = U(Gz);
      e =
        !ft(e.google_reactive_ad_format) &&
        (ZU(e) || e.google_reactive_ads_config);
      if (b.g?.qe || a <= 0 || Ed(c) || !r.IntersectionObserver || e) return {};
      b.g = {};
      const g = new ls(f),
        h = Cn();
      c = new Promise((k) => {
        let m = 0;
        const l = b.g,
          n = new r.IntersectionObserver(
            EC(1236, (p) => {
              if ((p = p.find((q) => q.target === d)))
                g.Kd.Sd.dd.g.g.Oc({ Pc: Cn() - h, Nj: ++m }),
                  (l.Xi = p.isIntersecting && p.intersectionRatio >= 0.8),
                  k();
            }),
            { threshold: [0.8] }
          );
        n.observe(d);
        l.qe = n;
      });
      b.g.Og = Promise.race([c, ke(a, null)]).then((k) => {
        g.Kd.Sd.dd.g.j.Oc({
          Pc: Cn() - h,
          status: k === null ? "TIMEOUT" : "OK",
        });
      });
      return {};
    },
    { id: 1345, I: {} }
  );
  var SZ = Y(
    function (a, b, c) {
      const d = a.ga;
      d && d.setAttribute("data-google-container-id", a.uc);
      a = b.iaaso;
      a != null &&
        ((b = c.parentElement),
        (b && wA.test(b.className) ? b : c).setAttribute(
          "data-auto-ad-size",
          a
        ));
      d.setAttribute("tabindex", "0");
      d.setAttribute("title", "Advertisement");
      d.setAttribute("aria-label", "Advertisement");
      return {};
    },
    { id: 1418, I: {} }
  );
  var TZ = Y(
    function (a) {
      return { ga: a.ta ? a.ml : a.ln };
    },
    { id: 1489, I: { ga: void 0 } }
  );
  function UZ(a, b) {
    const c = Gd("STYLE", a);
    c.textContent = Uc(hd`* { pointer-events: none; }`);
    a?.head.appendChild(c);
    setTimeout(() => {
      a?.head.removeChild(c);
    }, b);
  }
  function VZ(a, b, c) {
    if (!a.body) return null;
    const d = new WZ();
    d.apply(a, b);
    return () => {
      var e = c || 0;
      e > 0 && UZ(b.document, e);
      il(a.body, {
        filter: d.g,
        webkitFilter: d.g,
        overflow: d.l,
        position: d.B,
        top: d.A,
      });
      b.scrollTo(0, d.j);
    };
  }
  class WZ {
    constructor() {
      this.g = this.A = this.B = this.l = null;
      this.j = 0;
    }
    apply(a, b) {
      this.l = a.body.style.overflow;
      this.B = a.body.style.position;
      this.A = a.body.style.top;
      this.g = a.body.style.filter
        ? a.body.style.filter
        : a.body.style.webkitFilter;
      this.j = ht(b);
      il(a.body, "top", `${-this.j}px`);
    }
  }
  function XZ(a, b) {
    var c;
    if (!a.l)
      for (a.l = [], c = a.j.parentElement; c; ) {
        a.l.push(c);
        if (a.L(c)) break;
        c = c.parentNode && c.parentNode.nodeType === 1 ? c.parentNode : null;
      }
    c = a.l.slice();
    let d, e;
    for (d = 0; d < c.length; ++d) (e = c[d]) && b.call(a, e, d, c);
  }
  var YZ = class extends O {
    constructor(a, b, c) {
      super();
      this.j = a;
      this.V = b;
      this.F = c;
      this.l = null;
      Ct(this, () => (this.l = null));
    }
    L(a) {
      return this.F === a;
    }
  };
  function ZZ(a, b) {
    const c = a.F;
    c &&
      (b
        ? (TE(a.H),
          t(c, { display: "block" }),
          a.D.body && !a.A && (a.A = VZ(a.D, a.V, a.ca)),
          c.setAttribute("tabindex", "0"),
          c.setAttribute("aria-hidden", "false"),
          a.D.body.setAttribute("aria-hidden", "true"))
        : (UE(a.H),
          t(c, { display: "none" }),
          a.A && (a.A(), (a.A = null)),
          a.D.body.setAttribute("aria-hidden", "false"),
          c.setAttribute("aria-hidden", "true")));
  }
  function $Z(a) {
    ZZ(a, !1);
    const b = a.F;
    if (b) {
      var c = a_(a.T);
      XZ(a, (d) => {
        t(d, c);
        lt(d);
      });
      a.j.setAttribute("width", "");
      a.j.setAttribute("height", "");
      il(a.j, c);
      il(a.j, b_);
      il(b, c_);
      il(b, { background: "transparent" });
      t(b, { display: "none", position: "fixed" });
      lt(b);
      lt(a.j);
      (Tb() && Ub() ? me(a.T) : 1) <= 1 ||
        (il(b, { overflow: "scroll", "max-width": "100vw" }), be(b));
    }
  }
  var d_ = class extends YZ {
      constructor(a, b, c) {
        var d = U(Fz);
        super(a, b, c);
        this.T = b;
        this.ca = d;
        this.A = null;
        this.D = b.document;
        this.H = NE(new SE(b), 2147483646);
      }
    },
    c_ = {
      backgroundColor: "white",
      opacity: "1",
      position: "fixed",
      left: "0px",
      top: "0px",
      margin: "0px",
      padding: "0px",
      display: "none",
      zIndex: "2147483647",
    },
    b_ = { left: "0", position: "absolute", top: "0" };
  function a_(a) {
    a = Tb() && Ub() ? me(a) : 1;
    a = 100 * (a < 1 ? 1 : a);
    return { width: `${a}vw`, height: `${a}vh` };
  }
  var e_ = class extends d_ {
    constructor(a, b, c) {
      super(b, a, c);
      $Z(this);
    }
    L(a) {
      return a.classList
        ? a.classList.contains("adsbygoogle")
        : Pa(
            a.classList
              ? a.classList
              : (typeof a.className == "string"
                  ? a.className
                  : (a.getAttribute && a.getAttribute("class")) || ""
                ).match(/\S+/g) || [],
            "adsbygoogle"
          );
    }
  };
  const f_ = { [1]: "closed", [2]: "viewed", [3]: "dismissed" };
  async function g_(a, b, c, d, e) {
    a = new h_(a, b, c, d, e);
    await a.init();
    return a;
  }
  function i_(a) {
    return setTimeout(
      EC(728, () => {
        j_(() => {
          a.D.reject();
        });
        a.dispose();
      }),
      U(zz) * 1e3
    );
  }
  function k_(a, b) {
    var c = yS(a.j).then(() => {
      clearTimeout(b);
      a.D.resolve();
    });
    FC(1005, c);
    c = zS(a.j).then((d) => {
      l_(a, f_[d.status], d.payload);
    });
    FC(1006, c);
    c = AS(a.j).then(() => {
      l_(a, "error");
    });
    FC(1004, c);
  }
  function m_(a) {
    if (T(Az)) {
      a.C.location.hash !== "" &&
        GC("pub_hash", { o_url: a.C.location.href }, 0.1);
      a.C.location.hash = "goog_fullscreen_ad";
      var b = EC(950, (c) => {
        c.oldURL.endsWith("#goog_fullscreen_ad") &&
          (a.l === 10
            ? (l_(a, "closed"), a.C.removeEventListener("hashchange", b))
            : ((a.C.location.hash = "goog_fullscreen_ad"),
              uS(a.j.Gg, "fullscreen", { eventType: "backButton" }, "*")));
      });
      a.C.addEventListener("hashchange", b);
      Ct(a, () => {
        a.C.removeEventListener("hashchange", b);
        a.C.location.hash === "#goog_fullscreen_ad" && a.C.history.back();
      });
    }
  }
  function j_(a) {
    try {
      a();
    } catch (b) {}
  }
  function l_(a, b, c) {
    ZZ(a.H, !1);
    a.A &&
      (c && b === "viewed"
        ? j_(() => {
            a.A({ status: b, reward: c });
          })
        : j_(() => {
            a.A({ status: b });
          }));
    a.l === 11 &&
      GC(
        "fs_ad",
        {
          tgorigin: a.G.google_tag_origin,
          client: a.G.google_ad_client,
          url: a.G.google_page_url ?? "",
          slot: a.G.google_ad_slot ?? "0",
          ratype: a.l,
          clostat: b,
        },
        1
      );
    a.dispose();
  }
  var h_ = class extends O {
    constructor(a, b, c, d, e) {
      super();
      this.C = a;
      this.F = b;
      this.L = c;
      this.l = d;
      this.G = e;
      this.A = null;
      this.H = new e_(a, c, b);
      a = new CS(this.l === 10 ? 1 : 2, this.C, this.L.contentWindow);
      a.init();
      this.j = a;
      this.D = new xS();
      this.F.dataset[
        "slotcar" + (this.l === 10 ? "Interstitial" : "Rewarded")
      ] = "true";
    }
    async init() {
      const a = i_(this);
      k_(this, a);
      Ct(this, () => {
        this.j.dispose();
        clearTimeout(a);
        Vk(this.F);
      });
      await this.D.promise;
    }
    show(a) {
      this.B ||
        ((this.A = a),
        ZZ(this.H, !0),
        r.IntersectionObserver ||
          uS(this.j.Gg, "fullscreen", { eventType: "visible" }, "*"),
        m_(this));
    }
    disposeAd() {
      this.dispose();
    }
  };
  var n_ = Y(
    function (a, b, c, d) {
      a = a.ga;
      if (b.google_acr)
        if (b.google_wrap_fullscreen_ad) {
          const e = b.google_acr;
          g_(c, d.parentElement, a, b.google_reactive_ad_format, b)
            .then(e)
            .catch(() => {
              e(null);
            });
        } else b.google_acr(a);
      return {};
    },
    { id: 1354, I: {} }
  );
  const o_ = (a, b) => {
    try {
      const n = A(b, 6) === void 0 ? !0 : A(b, 6);
      var c = Ql(C(b, 2)),
        d = B(b, 3);
      a: switch (C(b, 4)) {
        case 1:
          var e = "pt";
          break a;
        case 2:
          e = "cr";
          break a;
        default:
          e = "";
      }
      var f = new Sl(c, d, e),
        g = x(b, Jl, 5)?.g() ?? "";
      f.se = g;
      f.j = n;
      var h = !!A(b, 7);
      f.Sb = h;
      var k = !!A(b, 8);
      f.Db = k;
      var m = !!A(b, 9);
      f.g = m;
      f.C = a;
      var l = f.build();
      Hl(l);
    } catch {}
  };
  function p_(a, b) {
    a.goog_sdr_l ||
      (Object.defineProperty(a, "goog_sdr_l", { value: !0 }),
      a.document.readyState === "complete"
        ? o_(a, b)
        : wl(a, "load", () => void o_(a, b)));
  }
  var q_ = Y(
    function (a, b, c, d, e, f) {
      a = a.O;
      const g = ZJ();
      gK(g);
      g.Wb = b.google_page_url;
      b = Ol(
        Ml(
          Ll(Nl(Kl(new Pl(), Il(new Jl(), String(je(c)))))),
          (T(Ez) ? e.bv : hU(qU(d))) || B(f, 2)
        ),
        a.aa()
      );
      T(Xw) && D(b, 7, !0);
      T(Cz) && D(b, 8, !0);
      T(Bz) && D(b, 9, !0);
      p_(c, b);
      return {};
    },
    { id: 1347, I: {} }
  );
  function r_(a, b, c) {
    const d = b.parentElement?.classList.contains("adsbygoogle")
      ? b.parentElement
      : b;
    c.addEventListener("load", () => {
      s_(d);
    });
    return tS(a, "adpnt", (e, f) => {
      if (gt(f, c.contentWindow)) {
        e = jt(e).qid;
        try {
          c.setAttribute("data-google-query-id", e),
            a.googletag ?? (a.googletag = { cmd: [] }),
            (a.googletag.queryIds = a.googletag.queryIds ?? []),
            a.googletag.queryIds.push(e),
            a.googletag.queryIds.length > 500 && a.googletag.queryIds.shift();
        } catch {}
        d.dataset.adStatus = "filled";
        e = !0;
      } else e = !1;
      return e;
    });
  }
  function s_(a) {
    setTimeout(() => {
      a.dataset.adStatus !== "filled" && (a.dataset.adStatus = "unfilled");
    }, 1e3);
  }
  var t_ = Y(
    function (a, b, c, d) {
      a = a.ga;
      b && d.push(r_(b, c, a));
      return {};
    },
    { id: 1423, I: {} }
  );
  function u_(a) {
    if (a.location?.ancestorOrigins) return a.location.ancestorOrigins.length;
    let b = 0;
    Cd(() => {
      b++;
      return !1;
    }, a);
    return b;
  }
  function v_(a, b, c, d = "//tpc.googlesyndication.com") {
    var e = c;
    e && (e = "?" + e);
    b = d + ("/safeframe/" + b + "/html/container.html" + e);
    (a = u_(a)) && (b += `${c ? "&" : "?"}n=${a}`);
    return `https:${b}`;
  }
  function w_(a) {
    return `//${a}${".safeframe.googlesyndication.com"}`;
  }
  var y_ = Bb(x_);
  function x_() {
    let a = "";
    for (const b of z_()) b <= 15 && (a += "0"), (a += b.toString(16));
    return a;
  }
  function z_() {
    if (typeof window.crypto?.getRandomValues === "function") {
      var a = new Uint8Array(16);
      window.crypto.getRandomValues(a);
      return a;
    }
    a = window;
    if (typeof a.msCrypto?.getRandomValues === "function") {
      var b = new Uint8Array(16);
      a.msCrypto.getRandomValues(b);
      return b;
    }
    a = Array(16);
    for (b = 0; b < a.length; b++) a[b] = Math.floor(Math.random() * 255);
    return a;
  }
  function A_(a, b, c) {
    try {
      if (!B_(a, c.origin) || !gt(c, a.j.contentWindow)) return;
    } catch (f) {
      return;
    }
    const d = b.msg_type;
    let e = null;
    typeof d === "string" &&
      (e = a.messageHandlers[d]) &&
      a.gb.ec(168, () => {
        e.call(a, b, c);
      });
  }
  function B_(a, b) {
    return a.bk.includes(b) || ie(b);
  }
  var C_ = class extends O {
    constructor(a, b) {
      var c = AC,
        d = yC,
        e = T(xz) ? [`https:${w_(y_())}`] : [];
      super();
      this.l = a;
      this.j = b;
      this.gb = c;
      this.K = d;
      this.bk = e;
      this.messageHandlers = {};
      this.ca = [];
      this.Aa = this.gb.hc(168, (f, g) => void A_(this, f, g));
      this.Vd = this.gb.hc(169, (f, g) => kt(this.l, "ras::xsf", this.K, g));
      this.init({});
    }
    init() {
      this.V(this.messageHandlers);
      this.ca.push(sS(this.l, "sth", this.Aa, this.Vd));
    }
    g() {
      for (const a of this.ca) a();
      this.ca.length = 0;
      super.g();
    }
  };
  var D_ = class extends C_ {};
  function E_(a, b, c, d = null) {
    return new F_(a, b, c, d);
  }
  var F_ = class extends D_ {
    constructor(a, b, c, d) {
      super(a, b);
      this.Ra = c;
      this.O = d;
      this.ka = ZJ();
      this.A = () => {};
      wl(this.j, "load", this.A);
    }
    g() {
      xl(this.j, "load", this.A);
      super.g();
    }
    V(a) {
      a["adsense-labs"] = (b) => {
        if ((b = jt(b).settings))
          if (((b = rj(am, JSON.parse(b))), oi(b, 1))) {
            var c = b.ba;
            if (Mh(b, c, c[u] | 0, $l, 4, 3).length > 0) {
              var d = (c = Nh(b, $l, 4, wh(Ye))),
                e = this.ka;
              const h = new Lp();
              for (var f of d)
                switch (f.getVersion()) {
                  case 1:
                    gi(h, 1, !0);
                    break;
                  case 2:
                    gi(h, 2, !0);
                }
              f = new Mp();
              f = z(f, 1, Np, h);
              oK(e, f);
              f = this.l;
              e = this.O;
              if (!GJ(BJ(), 37, !1)) {
                f = new uX(f);
                for (var g of c)
                  switch (g.getVersion()) {
                    case 1:
                      rX(f, "__gads", g, e);
                      break;
                    case 2:
                      rX(f, "__gpi", g, e);
                  }
                HJ(BJ(), 37, !0);
              }
              ph(b, 4);
            }
            if ((g = x(b, $l, 5)))
              (c = this.l),
                GJ(BJ(), 40, !1) ||
                  ((c = new GX(c)),
                  (f = qw(Xh(g, 2)) - Date.now() / 1e3),
                  (f = {
                    we: Math.max(f, 0),
                    path: B(g, 3),
                    domain: B(g, 4),
                    Vf: !1,
                  }),
                  FP("__eoi", g.getValue(), f, c.g),
                  HJ(BJ(), 40, !0));
            ph(b, 5);
            g = this.l;
            c = B(b, 1) || "";
            f = this.Ra;
            if (Ou(QP({ C: g, Ra: f }))) {
              f = aX(g, f);
              b !== null && (f[c] = zg(b));
              try {
                g.localStorage.setItem(
                  "google_adsense_settings",
                  JSON.stringify(f)
                );
              } catch (h) {}
            }
          }
      };
    }
  };
  var G_ = Y(
    function (a, b, c, d) {
      const e = a.ga,
        f = a.Da;
      a = a.O;
      b && f(E_(b, e, T(Ez) ? d.gcs.igc : qU(c).g(), a));
      return {};
    },
    { id: 1424, I: {} }
  );
  var H_ = Y(
    function (a, b, c, d) {
      return {
        Da: (e) => {
          e &&
            d.push(() => {
              e.dispose();
            });
        },
        La: b && (!ZU(c) || nV(c)),
      };
    },
    { id: 1425, I: { Da: void 0, La: void 0 } }
  );
  var I_ = Y(
    function (a, b, c) {
      vZ(b, a.O, a.ga.contentWindow, c);
      return {};
    },
    { id: 1429, I: {} }
  );
  function J_(a) {
    const b = a.L.getBoundingClientRect(),
      c = b.top + b.height < 0;
    return !(b.top > a.j.innerHeight) && !c;
  }
  var K_ = class extends O {
    constructor(a, b, c) {
      super();
      this.j = a;
      this.D = b;
      this.L = c;
      this.F = 0;
      this.A = J_(this);
      const d = Db(this.H, this);
      this.l = EC(433, () => {
        Im.requestAnimationFrame ? Im.requestAnimationFrame(d) : d();
      });
      wl(this.j, "scroll", this.l, tl);
    }
    H() {
      const a = J_(this);
      if (a && !this.A) {
        var b = { rr: "vis-bcr" };
        const c = this.D.contentWindow;
        c && (vS(c, "ig", b, "*", 2), ++this.F >= 10 && this.dispose());
      }
      this.A = a;
    }
    dispose() {
      this.l && xl(this.j, "scroll", this.l, tl);
    }
  };
  var L_ = Y(
    function (a, b, c) {
      const d = a.ga,
        e = a.La;
      a = a.Da;
      b && e && a(b.IntersectionObserver ? null : new K_(b, d, c));
      return {};
    },
    { id: 1427, I: {} }
  );
  function M_(a, b) {
    const c = a.pubWin,
      d = a.G.google_ad_client,
      e = JJ();
    let f = null;
    const g = sS(c, "pvt", (h, k) => {
      typeof h.token === "string" &&
        k.source === b.contentWindow &&
        ((f = h.token),
        g(),
        (e[d] = e[d] || []),
        e[d].push(f),
        e[d].length > 100 && e[d].shift());
    });
    a.ha.push(g);
    return () => {
      f &&
        Array.isArray(e[d]) &&
        (Qa(e[d], f), e[d].length || delete e[d], (f = null));
    };
  }
  var N_ = Y(
    function (a, b) {
      return { Re: M_(b, a.ga) };
    },
    { id: 1430, I: { Re: void 0 } }
  );
  var O_ = class extends I {};
  function P_(a) {
    return Nh(a, O_, 15, wh());
  }
  var Q_ = class extends I {
      g() {
        return Zh(this, 24);
      }
    },
    R_ = Dk(Q_);
  var S_ = class extends I {},
    T_ = Dk(S_);
  var V_ = class extends D_ {
    constructor(a, b, c, d, e) {
      super(a, b);
      this.W = c;
      this.G = d;
      this.tc = e;
    }
    V(a) {
      a["resize-me"] = (b, c) => {
        if (this.tc && this.l?.location?.hash?.match(/\bgoog_cpmi=([^&]*)/)) {
          var d = this.G.google_ad_client;
          if (typeof d !== "string") throw new xC(`Invalid property code ${d}`);
          c = this.tc;
          b = new S_();
          b = mi(b, 2, d);
          U_(c, b);
        } else {
          b = jt(b);
          var e = b.r_chk;
          if (e == null || e === "") {
            d = Qd(b.r_nw);
            var f = Qd(b.r_nh),
              g = Qd(b.r_no);
            g != null || (d !== 0 && f !== 0) || (g = 0);
            var h = b.r_str;
            h = h ? h : null;
            {
              var k = /^true$/.test(b.r_ao),
                m = /^true$/.test(b.r_ifr),
                l = /^true$/.test(b.r_cab);
              const q = window;
              if (q)
                if (h === "no_rsz") (b.err = "7"), (d = !0);
                else {
                  var n = new tY(this.j);
                  if (n.g) {
                    var p = n.getWidth();
                    p != null && (b.w = p);
                    p = n.getHeight();
                    p != null && (b.h = p);
                    uY(n, h, f, l)
                      ? ((n = this.W),
                        (e = nY(
                          new xY(
                            q,
                            n,
                            [this.j],
                            {
                              width: d,
                              height: f,
                              opacity: g,
                              check: e,
                              Yh: h,
                              Ne: k,
                              Tf: m,
                              De: l,
                            },
                            null,
                            null,
                            !0
                          )
                        )),
                        b.r_cui &&
                          /^true$/.test(b.r_cui.toString()) &&
                          t(n, {
                            height: `${f === null ? 0 : f - 48}px`,
                            top: "24px",
                          }),
                        d != null && (b.nw = d),
                        f != null && (b.nh = f),
                        (b.rsz = e.toString()),
                        (b.abl = aY(e)),
                        (b.frsz = (h === "force").toString()),
                        (b.err = "0"),
                        (d = !0))
                      : ((b.err = "1"), (d = !1));
                  } else (b.err = "3"), (d = !1);
                }
              else (b.err = "2"), (d = !1);
            }
            uS(
              c.source,
              "sth",
              { msg_type: "resize-result", r_str: h, r_status: d },
              "*"
            );
            this.j.dataset.googleQueryId ||
              this.j.setAttribute("data-google-query-id", b.qid);
          }
        }
      };
    }
  };
  var W_ = Y(
    function (a, b, c, d) {
      const e = a.ga,
        f = a.La,
        g = a.Da;
      a = a.tc;
      b && f && (c.no_resize || g(new V_(b, e, d, c, a)));
      return {};
    },
    { id: 1426, I: {} }
  );
  function X_(a) {
    return (b) => !!(b.kc() & a);
  }
  var Y_ = class extends LW {
    constructor(a, b, c, d = !1) {
      super(a, b);
      this.D = c;
      this.A = d;
    }
    kc() {
      return this.D;
    }
    l(a, b, c) {
      c.style.height = `${this.height()}px`;
      b.rpe = !0;
    }
  };
  const Z_ = {
      image_stacked: 1 / 1.91,
      image_sidebyside: 1 / 3.82,
      mobile_banner_image_sidebyside: 1 / 3.82,
      pub_control_image_stacked: 1 / 1.91,
      pub_control_image_sidebyside: 1 / 3.82,
      pub_control_image_card_stacked: 1 / 1.91,
      pub_control_image_card_sidebyside: 1 / 3.74,
      pub_control_text: 0,
      pub_control_text_card: 0,
    },
    $_ = {
      image_stacked: 80,
      image_sidebyside: 0,
      mobile_banner_image_sidebyside: 0,
      pub_control_image_stacked: 80,
      pub_control_image_sidebyside: 0,
      pub_control_image_card_stacked: 85,
      pub_control_image_card_sidebyside: 0,
      pub_control_text: 80,
      pub_control_text_card: 80,
    },
    a0 = {
      pub_control_image_stacked: 100,
      pub_control_image_sidebyside: 200,
      pub_control_image_card_stacked: 150,
      pub_control_image_card_sidebyside: 250,
      pub_control_text: 100,
      pub_control_text_card: 150,
    };
  function b0(a) {
    var b = 0;
    a.tb && b++;
    a.kb && b++;
    a.lb && b++;
    if (b < 3)
      return {
        Tb: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together.",
      };
    b = a.tb.split(",");
    const c = a.lb.split(",");
    a = a.kb.split(",");
    if (b.length !== c.length || b.length !== a.length)
      return {
        Tb: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"',
      };
    if (b.length > 2)
      return {
        Tb:
          "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while " +
          `you are providing ${
            b.length
          } parameters. Example: ${'\n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'}.`,
      };
    const d = [],
      e = [];
    for (let g = 0; g < b.length; g++) {
      var f = Number(c[g]);
      if (Number.isNaN(f) || f === 0)
        return {
          Tb: `Wrong value '${c[g]}' for ${"data-matched-content-rows-num"}.`,
        };
      d.push(f);
      f = Number(a[g]);
      if (Number.isNaN(f) || f === 0)
        return {
          Tb: `Wrong value '${
            a[g]
          }' for ${"data-matched-content-columns-num"}.`,
        };
      e.push(f);
    }
    return { lb: d, kb: e, cj: b };
  }
  function c0(a) {
    return a >= 1200
      ? { width: 1200, height: 600 }
      : a >= 850
      ? { width: a, height: Math.floor(a * 0.5) }
      : a >= 550
      ? { width: a, height: Math.floor(a * 0.6) }
      : a >= 468
      ? { width: a, height: Math.floor(a * 0.7) }
      : { width: a, height: Math.floor(a * 3.44) };
  }
  function d0(a, b, c, d) {
    b = Math.floor((((a - 8 * b - 8) / b) * Z_[d] + $_[d]) * c + 8 * c + 8);
    return a > 1500
      ? { width: 0, height: 0, Tm: `Calculated slot width is too large: ${a}` }
      : b > 1500
      ? { width: 0, height: 0, Tm: `Calculated slot height is too large: ${b}` }
      : { width: a, height: b };
  }
  function e0(a, b) {
    const c = a - 8 - 8;
    --b;
    return {
      width: a,
      height:
        Math.floor(c / 1.91 + 70) +
        Math.floor(
          (c * Z_.mobile_banner_image_sidebyside +
            $_.mobile_banner_image_sidebyside) *
            b +
            8 * b +
            8
        ),
    };
  }
  const f0 = [
    "google_content_recommendation_ui_type",
    "google_content_recommendation_columns_num",
    "google_content_recommendation_rows_num",
  ];
  var g0 = class extends LW {
    j(a) {
      return Math.min(1200, Math.max(this.g, Math.round(a)));
    }
  };
  function h0(a, b) {
    i0(a, b);
    if (b.google_content_recommendation_ui_type === "pedestal")
      return new KW(9, new g0(a, Math.floor(a * 2.189)));
    if (T(Rw)) {
      var c = Ub();
      var d = U(Sw);
      var e = U(Qw),
        f = U(Pw);
      a < 468
        ? c
          ? ((a = e0(a, d)),
            (d = {
              Qb: a.width,
              Ob: a.height,
              kb: 1,
              lb: d,
              tb: "mobile_banner_image_sidebyside",
            }))
          : ((a = d0(a, 1, d, "image_sidebyside")),
            (d = {
              Qb: a.width,
              Ob: a.height,
              kb: 1,
              lb: d,
              tb: "image_sidebyside",
            }))
        : ((d = c0(a)),
          e === 1 && (d.height = Math.floor(d.height * 0.5)),
          (d = {
            Qb: d.width,
            Ob: d.height,
            kb: f,
            lb: e,
            tb: "image_stacked",
          }));
    } else
      (d = Ub()),
        a < 468
          ? d
            ? ((d = e0(a, 12)),
              (d = {
                Qb: d.width,
                Ob: d.height,
                kb: 1,
                lb: 12,
                tb: "mobile_banner_image_sidebyside",
              }))
            : ((d = c0(a)),
              (d = {
                Qb: d.width,
                Ob: d.height,
                kb: 1,
                lb: 13,
                tb: "image_sidebyside",
              }))
          : ((d = c0(a)),
            (d = {
              Qb: d.width,
              Ob: d.height,
              kb: 4,
              lb: 2,
              tb: "image_stacked",
            }));
    j0(b, d);
    return new KW(9, new g0(d.Qb, d.Ob));
  }
  function k0(a, b) {
    i0(a, b);
    {
      const f = b0({
        lb: b.google_content_recommendation_rows_num,
        kb: b.google_content_recommendation_columns_num,
        tb: b.google_content_recommendation_ui_type,
      });
      if (f.Tb)
        a = { Qb: 0, Ob: 0, kb: 0, lb: 0, tb: "image_stacked", Tb: f.Tb };
      else {
        var c = f.cj.length === 2 && a >= 468 ? 1 : 0;
        var d = f.cj[c];
        d = d.indexOf("pub_control_") === 0 ? d : "pub_control_" + d;
        var e = a0[d];
        let g = f.kb[c];
        for (; a / g < e && g > 1; ) g--;
        e = g;
        c = f.lb[c];
        a = d0(a, e, c, d);
        a = { Qb: a.width, Ob: a.height, kb: e, lb: c, tb: d };
      }
    }
    if (a.Tb) throw new xC(a.Tb);
    j0(b, a);
    return new KW(9, new g0(a.Qb, a.Ob));
  }
  function i0(a, b) {
    if (a <= 0)
      throw new xC(
        `Invalid responsive width from Matched Content slot ${b.google_ad_slot}: ${a}. Please ensure to put this Matched Content slot into a non-zero width div container.`
      );
  }
  function j0(a, b) {
    a.google_content_recommendation_ui_type = b.tb;
    a.google_content_recommendation_columns_num = b.kb;
    a.google_content_recommendation_rows_num = b.lb;
  }
  var l0 = class extends LW {
    j() {
      return this.g;
    }
    l(a, b, c) {
      nA(a, c);
      c.style.height = `${this.height()}px`;
      b.rpe = !0;
    }
  };
  function m0(a) {
    return (b) => {
      for (let c = a.length - 1; c >= 0; --c) if (!a[c](b)) return !1;
      return !0;
    };
  }
  function n0(a, b) {
    var c = o0.slice(0);
    const d = c.length;
    let e = null;
    for (let f = 0; f < d; ++f) {
      const g = c[f];
      if (a(g)) {
        if (b == null || b(g)) return g;
        e === null && (e = g);
      }
    }
    return e;
  }
  var p0 = [
      new Y_(970, 90, 2),
      new Y_(728, 90, 2),
      new Y_(468, 60, 2),
      new Y_(336, 280, 1),
      new Y_(320, 100, 2),
      new Y_(320, 50, 2),
      new Y_(300, 600, 4),
      new Y_(300, 250, 1),
      new Y_(250, 250, 1),
      new Y_(234, 60, 2),
      new Y_(200, 200, 1),
      new Y_(180, 150, 1),
      new Y_(160, 600, 4),
      new Y_(125, 125, 1),
      new Y_(120, 600, 4),
      new Y_(120, 240, 4),
      new Y_(120, 120, 1, !0),
    ],
    o0 = [
      p0[6],
      p0[12],
      p0[3],
      p0[0],
      p0[7],
      p0[14],
      p0[1],
      p0[8],
      p0[10],
      p0[4],
      p0[15],
      p0[2],
      p0[11],
      p0[5],
      p0[13],
      p0[9],
      p0[16],
    ];
  function q0(a, b, c, d, e) {
    e.google_full_width_responsive === "false"
      ? (c = { Va: a, Ca: 1 })
      : (b === "autorelaxed" && e.google_full_width_responsive) ||
        r0(b) ||
        e.google_ad_resize
      ? ((b = hA(a, c, d, e)),
        (c = b !== !0 ? { Va: a, Ca: b } : { Va: Ls(c) || a, Ca: !0 }))
      : (c = { Va: a, Ca: 2 });
    const { Va: f, Ca: g } = c;
    return g !== !0
      ? { Va: a, Ca: g }
      : d.parentElement
      ? { Va: f, Ca: g }
      : { Va: a, Ca: g };
  }
  function s0(a, b, c, d, e) {
    const { Va: f, Ca: g } = DC(247, () => q0(a, b, c, d, e));
    var h = g === !0;
    const k = Rd(d.style.width),
      m = Rd(d.style.height),
      { Pb: l, sb: n, kc: p, aj: q } = t0(f, b, c, d, e, h);
    h = u0(b, p);
    var v;
    const E = (v = oA(d, c, "marginLeft")) ? `${v}px` : "",
      F = (v = oA(d, c, "marginRight")) ? `${v}px` : "";
    v = qA(d, c) || "";
    return new KW(h, l, p, null, q, g, n, E, F, m, k, v);
  }
  function r0(a) {
    return (
      a === "auto" || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
    );
  }
  function t0(a, b, c, d, e, f) {
    b = v0(c, a, b);
    let g;
    var h = !1;
    let k = !1;
    var m = Ls(c) < 488;
    if (m) {
      g = aA(d, c);
      var l = tA(d, c);
      h = !l && g;
      k = l && g;
    }
    l = [rA(a), X_(b)];
    T(nx) || l.push(sA(m, c, d, k));
    e.google_max_responsive_height != null &&
      l.push(uA(e.google_max_responsive_height));
    m = [(v) => !v.A];
    if (h || k) (h = vA(c, d)), m.push(uA(h));
    const n = n0(m0(l), m0(m));
    if (!n) throw new xC(`No slot size for availableWidth=${a}`);
    const { Pb: p, sb: q } = DC(248, () => {
      var v;
      a: if (f) {
        if (e.gfwrnh && (v = Rd(e.gfwrnh))) {
          v = { Pb: new l0(a, v), sb: !0 };
          break a;
        }
        if (
          e.google_resizing_allowed ||
          e.google_full_width_responsive === "true"
        )
          v = Infinity;
        else {
          v = d;
          let F = Infinity;
          do {
            var E = oA(v, c, "height");
            E && (F = Math.min(F, E));
            (E = oA(v, c, "maxHeight")) && (F = Math.min(F, E));
          } while (
            v.parentElement &&
            (v = v.parentElement) &&
            v.tagName !== "HTML"
          );
          v = F;
        }
        !(T(fx) && v <= a * 2) &&
          ((v = Math.min(a, v)), v < a * 0.5 || v < 100) &&
          (v = a);
        v = { Pb: new l0(a, Math.floor(v)), sb: v < a ? 102 : !0 };
      } else v = { Pb: n, sb: 100 };
      return v;
    });
    return e.google_ad_layout === "in-article"
      ? { Pb: w0(a, c, d, p, e), sb: !1, kc: b, aj: g }
      : { Pb: p, sb: q, kc: b, aj: g };
  }
  function u0(a, b) {
    if (a === "auto") return 1;
    switch (b) {
      case 2:
        return 2;
      case 1:
        return 3;
      case 4:
        return 4;
      case 3:
        return 5;
      case 6:
        return 6;
      case 5:
        return 7;
      case 7:
        return 8;
      default:
        throw Error("bad mask");
    }
  }
  function v0(a, b, c) {
    if (c === "auto") (c = Math.min(1200, Ls(a))), (b = b / c <= 0.25 ? 4 : 3);
    else {
      b = 0;
      for (const d in $z) c.indexOf(d) !== -1 && (b |= $z[d]);
    }
    return b;
  }
  function w0(a, b, c, d, e) {
    const f = e.google_ad_height || oA(c, b, "height");
    b = PW(a, b, c, f, e).size();
    return b.g * b.height() > a * d.height() ? new Y_(b.g, b.height(), 1) : d;
  }
  function x0(a, b, c, d, e) {
    var f;
    (f = Ls(b))
      ? Ls(b) < 488
        ? b.innerHeight >= b.innerWidth
          ? ((e.google_full_width_responsive_allowed = !0),
            nA(b, c),
            (f = { Va: f, Ca: !0 }))
          : (f = { Va: a, Ca: 5 })
        : (f = { Va: a, Ca: 4 })
      : (f = { Va: a, Ca: 10 });
    const { Va: g, Ca: h } = f;
    if (h !== !0 || a === g)
      return new KW(12, new LW(a, d), null, null, !0, h, 100);
    const { Pb: k, sb: m, kc: l } = t0(g, "auto", b, c, e, !0);
    return new KW(1, k, l, 2, !0, h, m);
  }
  function y0(a) {
    const b = a.google_ad_format;
    if (b === "autorelaxed") {
      a: {
        if (a.google_content_recommendation_ui_type !== "pedestal")
          for (const c of f0)
            if (a[c] != null) {
              a = !0;
              break a;
            }
        a = !1;
      }
      return a ? 9 : 5;
    }
    if (r0(b)) return 1;
    if (b === "link") return 4;
    if (b === "fluid")
      return a.google_ad_layout === "in-article" ? (z0(a), 1) : 8;
    if (a.google_reactive_ad_format === 27) return z0(a), 1;
  }
  function A0(a, b, c, d, e = !1) {
    var f =
      b.offsetWidth ||
      ((c.google_ad_resize || e) && oA(b, d, "width")) ||
      c.google_ad_width ||
      0;
    a === 4 && ((c.google_ad_format = "auto"), (a = 1));
    e = (e = B0(a, f, b, c, d)) ? e : s0(f, c.google_ad_format, d, b, c);
    e.size().l(d, c, b);
    e.kc != null && (c.google_responsive_formats = e.kc);
    e.F != null && (c.google_safe_for_responsive_override = e.F);
    e.Ca != null &&
      (e.Ca === !0
        ? (c.google_full_width_responsive_allowed = !0)
        : ((c.google_full_width_responsive_allowed = !1), (c.gfwrnwer = e.Ca)));
    e.sb != null && e.sb !== !0 && (c.gfwrnher = e.sb);
    d = e.l || c.google_ad_width;
    d != null && (c.google_resizing_width = d);
    d = e.j || c.google_ad_height;
    d != null && (c.google_resizing_height = d);
    d = e.size().j(f);
    const g = e.size().height();
    c.google_ad_width = d;
    c.google_ad_height = g;
    var h = e.size();
    f = `${h.j(f)}x${h.height()}`;
    c.google_ad_format = f;
    c.google_responsive_auto_format = e.J;
    e.g != null && (c.armr = e.g);
    c.google_ad_resizable = !0;
    c.google_override_format = 1;
    c.google_loader_features_used = 128;
    e.Ca === !0 && (c.gfwrnh = `${e.size().height()}px`);
    e.B != null && (c.gfwroml = e.B);
    e.A != null && (c.gfwromr = e.A);
    e.j != null && (c.gfwroh = e.j);
    e.l != null && (c.gfwrow = e.l);
    e.D != null && (c.gfwroz = e.D);
    f = Ed(window) || window;
    RT(f.location, "google_responsive_dummy_ad") &&
      (Pa([1, 2, 3, 4, 5, 6, 7, 8], e.J) || e.g === 1) &&
      e.g !== 2 &&
      ((f = JSON.stringify({
        googMsgType: "adpnt",
        key_value: [{ key: "qid", value: "DUMMY_AD" }],
      })),
      (c.dash = `<${JW}>window.top.postMessage('${f}', '*'); 
          </${JW}> 
          <div id="dummyAd" style="width:${d}px;height:${g}px; 
            background:#ddd;border:3px solid #f00;box-sizing:border-box; 
            color:#000;"> 
            <p>Requested size:${d}x${g}</p> 
            <p>Rendered size:${d}x${g}</p> 
          </div>`));
    a !== 1 && ((a = e.size().height()), (b.style.height = `${a}px`));
  }
  function B0(a, b, c, d, e) {
    const f = d.google_ad_height || oA(c, e, "height") || 0;
    switch (a) {
      case 5:
        const { Va: g, Ca: h } = DC(247, () =>
          q0(b, d.google_ad_format, e, c, d)
        );
        h === !0 && b !== g && nA(e, c);
        h === !0
          ? (d.google_full_width_responsive_allowed = !0)
          : ((d.google_full_width_responsive_allowed = !1), (d.gfwrnwer = h));
        return h0(g, d);
      case 9:
        return k0(b, d);
      case 8:
        return PW(b, e, c, f, d);
      case 10:
        return x0(b, e, c, f, d);
    }
  }
  function z0(a) {
    a.google_ad_format = "auto";
    a.armr = 3;
  }
  function C0(a, b) {
    a.google_resizing_allowed = !0;
    a.ovlp = !0;
    a.google_ad_format = "auto";
    a.iaaso = !0;
    a.armr = b;
  }
  var D0 = {
    "120x90": !0,
    "160x90": !0,
    "180x90": !0,
    "200x90": !0,
    "468x15": !0,
    "728x15": !0,
  };
  function E0(a, b) {
    if (b == 15) {
      if (a >= 728) return 728;
      if (a >= 468) return 468;
    } else if (b == 90) {
      if (a >= 200) return 200;
      if (a >= 180) return 180;
      if (a >= 160) return 160;
      if (a >= 120) return 120;
    }
    return null;
  }
  function F0(a, b) {
    var c = Ed(b);
    if (c) {
      c = Ls(c);
      const d = Hd(a, b) || {},
        e = d.direction;
      if (d.width === "0px" && d.cssFloat !== "none") return -1;
      if (e === "ltr" && c)
        return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
      if (e === "rtl" && c)
        return (
          (a =
            b.document.body.getBoundingClientRect().right -
            a.getBoundingClientRect().right),
          Math.floor(
            Math.min(
              1200,
              c - a - Math.floor((c - b.document.body.clientWidth) / 2)
            )
          )
        );
    }
    return -1;
  }
  function G0(a, b) {
    switch (a) {
      case "google_reactive_ad_format":
        return (a = parseInt(b, 10)), isNaN(a) ? 0 : a;
      default:
        return b;
    }
  }
  function H0(a, b) {
    if ((a = Sm(a)))
      switch (a.data && a.data.autoFormat) {
        case "rspv":
          return 13;
        case "mcrspv":
          return 15;
        default:
          return 14;
      }
    else return b.google_ad_intent_query ? 17 : 12;
  }
  function I0(a, b) {
    if (!fA(b, a)) return () => {};
    a = J0(b, a);
    if (!a) return () => {};
    const c = OJ();
    b = ec(b);
    const d = { Nc: a, G: b, offsetWidth: a.offsetWidth };
    c.push(d);
    return () => Qa(c, d);
  }
  function J0(a, b) {
    a = b.document.getElementById(a.google_async_iframe_id);
    if (!a) return null;
    for (a = a.parentElement; a && !wA.test(a.className); ) a = a.parentElement;
    return a;
  }
  function K0(a, b) {
    for (let c = 0; c < a.childNodes.length; c++) {
      const d = {},
        e = a.childNodes[c];
      bA(e.style, d);
      if (
        d.google_ad_width == b.google_ad_width &&
        d.google_ad_height == b.google_ad_height
      )
        return e;
    }
    return null;
  }
  function L0(a, b) {
    a.style.display = b ? "inline-block" : "none";
    const c = a.parentElement;
    b
      ? (c.dataset.adStatus = a.dataset.adStatus)
      : ((a.dataset.adStatus = c.dataset.adStatus), delete c.dataset.adStatus);
  }
  function M0(a, b, c) {
    const d = b.innerHeight >= b.innerWidth ? 1 : 2;
    if (a.j != d) {
      a.j = d;
      a = OJ();
      for (const e of a)
        if (
          e.Nc.offsetWidth != e.offsetWidth ||
          e.G.google_full_width_responsive_allowed
        )
          (e.offsetWidth = e.Nc.offsetWidth),
            DC(467, () => {
              var f = e.Nc,
                g = e.G;
              const h = K0(f, g);
              g.google_full_width_responsive_allowed &&
                ((f.style.marginLeft = g.gfwroml || ""),
                (f.style.marginRight = g.gfwromr || ""),
                (f.style.height = g.gfwroh ? `${g.gfwroh}px` : ""),
                (f.style.width = g.gfwrow ? `${g.gfwrow}px` : ""),
                (f.style.zIndex = g.gfwroz || ""),
                delete g.google_full_width_responsive_allowed);
              delete g.google_ad_format;
              delete g.google_ad_width;
              delete g.google_ad_height;
              delete g.google_content_recommendation_ui_type;
              delete g.google_content_recommendation_rows_num;
              delete g.google_content_recommendation_columns_num;
              if (f.getAttribute("src")) {
                var k = f.getAttribute("src") || "",
                  m = Un(k, "client");
                m && (g.google_ad_client = G0("google_ad_client", m));
                (k = Un(k, "host")) &&
                  (g.google_ad_host = G0("google_ad_host", k));
              }
              for (var l of f.attributes)
                /data-/.test(l.name) &&
                  ((k = Hb(
                    l.name
                      .replace(
                        "data-matched-content",
                        "google_content_recommendation"
                      )
                      .replace("data", "google")
                      .replace(/-/g, "_")
                  )),
                  g.hasOwnProperty(k) ||
                    ((m = G0(k, l.value)), m !== null && (g[k] = m)));
              if (
                b.document &&
                b.document.body &&
                !y0(g) &&
                !g.google_reactive_ad_format &&
                !g.google_ad_intent_query &&
                ((m = parseInt(f.style.width, 10)),
                (k = F0(f, b)),
                k > 0 && m > k)
              ) {
                l = parseInt(f.style.height, 10);
                m = !!D0[m + "x" + l];
                let n = k;
                if (m) {
                  const p = E0(k, l);
                  if (p)
                    (n = p), (g.google_ad_format = p + "x" + l + "_0ads_al");
                  else throw new xC("No slot size for availableWidth=" + k);
                }
                g.google_ad_resize = !0;
                g.google_ad_width = n;
                m ||
                  ((g.google_ad_format = null),
                  (g.google_override_format = !0));
                k = n;
                f.style.width = `${k}px`;
                C0(g, 4);
              }
              if (T(Tw) || Ls(b) < 488) {
                k = Ed(b) || b;
                l =
                  f.offsetWidth || oA(f, b, "width") || g.google_ad_width || 0;
                m = g.google_ad_client;
                if (
                  (k =
                    RT(k.location, "google_responsive_slot_preview") ||
                    WW(k, c, m))
                )
                  b: if (
                    g.google_reactive_ad_format ||
                    g.google_ad_resize ||
                    y0(g) ||
                    cA(f, g)
                  )
                    k = !1;
                  else {
                    for (k = f; k; k = k.parentElement) {
                      m = Hd(k, b);
                      if (!m) {
                        g.gfwrnwer = 18;
                        k = !1;
                        break b;
                      }
                      if (!Pa(["static", "relative"], m.position)) {
                        g.gfwrnwer = 17;
                        k = !1;
                        break b;
                      }
                    }
                    if (
                      !T(ox) &&
                      ((k = U(dx)), (l = gA(b, f, l, k, g)), l !== !0)
                    ) {
                      g.gfwrnwer = l;
                      k = !1;
                      break b;
                    }
                    k = b === b.top ? !0 : !1;
                  }
                k ? (C0(g, 1), (l = !0)) : (l = !1);
              } else l = !1;
              if ((k = y0(g))) A0(k, f, g, b, l);
              else {
                if (cA(f, g)) {
                  if ((l = Hd(f, b)))
                    (f.style.width = l.width),
                      (f.style.height = l.height),
                      bA(l, g);
                  g.google_ad_width || (g.google_ad_width = f.offsetWidth);
                  g.google_ad_height || (g.google_ad_height = f.offsetHeight);
                  g.google_loader_features_used = 256;
                  g.google_responsive_auto_format = H0(b, g);
                } else bA(f.style, g);
                (b.location && b.location.hash === "#gfwmrp") ||
                (g.google_responsive_auto_format === 12 &&
                  g.google_full_width_responsive === "true")
                  ? A0(10, f, g, b, !1)
                  : Math.random() < 0.01 &&
                    g.google_responsive_auto_format === 12 &&
                    ((l = hA(
                      f.offsetWidth ||
                        parseInt(f.style.width, 10) ||
                        g.google_ad_width,
                      b,
                      f,
                      g
                    )),
                    l !== !0
                      ? ((g.efwr = !1), (g.gfwrnwer = l))
                      : (g.efwr = !0));
              }
              l = K0(f, g);
              !l && h && f.childNodes.length == 1
                ? (L0(h, !1),
                  (g.google_reactive_ad_format = 16),
                  (g.google_ad_section = "responsive_resize"),
                  lV(f, g, b))
                : l && h && l != h && (L0(h, !1), L0(l, !0));
            });
    }
  }
  var N0 = class extends O {
    constructor() {
      super(...arguments);
      this.j = null;
    }
    init(a, b) {
      const c = BJ();
      if (!GJ(c, 27, !1)) {
        HJ(c, 27, !0);
        this.j = a.innerHeight >= a.innerWidth ? 1 : 2;
        var d = () => {
          M0(this, a, b);
        };
        wl(a, "resize", d);
        Ct(this, () => {
          xl(a, "resize", d);
        });
      }
    }
  };
  var O0 = Y(
    function (a, b, c, d, e) {
      b && (d.push(I0(b, c)), qs(N0).init(b, e));
      return {};
    },
    { id: 1417, I: {} }
  );
  function P0(a) {
    a.A = a.D;
    a.F.style.transition = "height 500ms";
    a.Ma.style.transition = "height 500ms";
    a.j.style.transition = "height 500ms";
    Q0(a);
  }
  function R0(a, b) {
    uS(
      a.j.contentWindow,
      "sth",
      { msg_type: "expand-on-scroll-result", eos_success: !0, eos_amount: b },
      "*"
    );
  }
  function Q0(a) {
    const b = `rect(0px, ${a.j.width}px, ${a.A}px, 0px)`;
    a.j.style.clip = b;
    a.Ma.style.clip = b;
    a.j.setAttribute("height", a.A.toString());
    a.j.style.height = `${a.A}px`;
    a.Ma.setAttribute("height", a.A.toString());
    a.Ma.style.height = `${a.A}px`;
    a.F.style.height = `${a.A}px`;
  }
  function S0(a, b) {
    b = Qd(b.r_nh);
    a.D = b == null ? 0 : b;
    if (a.D <= 0) return "1";
    a.L = pl(a.F).y;
    a.H = ht(a.l);
    if (a.L + a.A < a.H) return "2";
    if (a.L > Ps(a.l) - a.l.innerHeight) return "3";
    b = a.H;
    a.j.setAttribute("height", a.D.toString());
    a.j.style.height = `${a.D}px`;
    a.Ma.style.overflow = "hidden";
    a.F.style.position = "relative";
    a.F.style.transition = "height 100ms";
    a.Ma.style.transition = "height 100ms";
    a.j.style.transition = "height 100ms";
    b = Math.min(b + a.l.innerHeight - a.L, a.A);
    il(a.Ma, { position: "relative", top: "auto", bottom: "auto" });
    b = `rect(0px, ${a.j.width}px, ${b}px, 0px)`;
    il(a.j, { clip: b });
    il(a.Ma, { clip: b });
    return "0";
  }
  var T0 = class extends D_ {
    constructor(a, b) {
      super(a.M, b);
      this.bb = this.Fb = !1;
      this.oa = this.H = this.D = 0;
      this.Ma = a.W;
      this.F =
        this.Ma.parentElement &&
        this.Ma.parentElement.classList.contains("adsbygoogle")
          ? this.Ma.parentElement
          : this.Ma;
      this.A = parseInt(this.Ma.style.height, 10);
      this.ck = this.A / 5;
      this.L = pl(this.F).y;
      this.ak = Eb(
        EC(651, () => {
          this.L = pl(this.F).y;
          var c = this.H;
          this.H = ht(this.l);
          this.A < this.D
            ? ((c = this.H - c),
              c > 0 &&
                ((this.oa += c),
                this.oa >= this.ck
                  ? (P0(this), R0(this, this.D))
                  : ((this.A = Math.min(this.D, this.A + c)),
                    R0(this, c),
                    Q0(this))))
            : xl(this.l, "scroll", this.T);
        }),
        this
      );
      this.T = () => {
        var c = this.ak;
        Im.requestAnimationFrame ? Im.requestAnimationFrame(c) : c();
      };
    }
    V(a) {
      a["expand-on-scroll"] = (b, c) => {
        b = jt(b);
        this.Fb ||
          ((this.Fb = !0),
          (b = S0(this, b)),
          b === "0" && wl(this.l, "scroll", this.T, tl),
          uS(
            c.target,
            "sth",
            { msg_type: "expand-on-scroll-result", eos_success: b === "0" },
            "*"
          ));
      };
      a["expand-on-scroll-force-expand"] = () => {
        this.bb || ((this.bb = !0), P0(this), xl(this.l, "scroll", this.T));
      };
    }
    g() {
      this.T && xl(this.l, "scroll", this.T, tl);
      super.g();
    }
  };
  var U0 = Y(
    function (a, b) {
      const c = a.ga,
        d = a.La;
      a = a.Da;
      b.M && d && a(new T0(b, c));
      return {};
    },
    { id: 1428, I: {} }
  );
  function V0() {
    var a = new W0();
    var b = new Sv();
    b = ni(b, 2, 4);
    b = ni(b, 8, 1);
    var c = new Yu();
    c = li(c, 7, "#dpId");
    b = y(b, 1, c);
    return Rh(a, 3, Sv, b);
  }
  var W0 = class extends I {},
    X0 = Dk(W0);
  function Y0(a, b) {
    return B(a, 10).replace("TERM", b);
  }
  var Z0 = class {
    constructor(a) {
      this.ac = a.ac ?? [];
      this.Qg = !!a.Qg;
      this.Sg = !!a.Sg;
      this.Rg = !!a.Rg;
      this.If = a.If ?? 250;
      this.Hf = a.Hf ?? 300;
      this.og = a.og ?? 15e3;
      this.ng = a.ng ?? 15e3;
      this.pg = a.pg ?? 0;
      this.Df = a.Df ?? 0;
      this.Ef = a.Ef ?? 670;
      this.Uc = !!a.Uc;
      this.mh = !!a.mh;
      this.wh = a.wh ?? 9;
      this.Bf = a.Bf ?? 0;
      this.vj = !!a.vj;
      this.Gf = a.Gf ?? 0;
      this.Id = a.Id ?? 0;
      this.Ah = new Set(a.Ah ?? []);
      this.Rf = !!a.Rf;
      this.Sf = !!a.Sf;
      this.Ic = a.Ic ?? 0;
      this.Se = !!a.Se;
      this.hh = a.hh ?? 0;
      this.Eb = a.Eb ?? 0;
      this.Nh = !!a.Nh;
      this.Xg = !!a.Xg;
      this.Bg = !!a.Bg;
      this.mg = !!a.mg;
      this.Ye = !!a.Ye;
    }
  };
  function $0(a, b, c, d, e, f, g, h, k, m) {
    const l = k(999, a.top, (n) => {
      n.data.action === "init" &&
        n.data.adChannel === "ShoppingVariant" &&
        a1(a, b, d, c, e, f, g, h, k, m);
    });
    g(() => {
      a.top.removeEventListener("message", l);
    });
  }
  function a1(a, b, c, d, e, f, g, h, k, m) {
    A(f, 13) || IE(c, d, e);
    if (m) {
      const l = k(1066, a, (n) => {
        if ((n = sP(n))) b.height = `${Math.ceil(n.height + 26)}px`;
      });
      g(() => void a.removeEventListener("message", l));
    } else {
      const l = b.contentDocument.documentElement,
        n = new ResizeObserver(() => {
          b.height = `${Math.ceil(l.offsetHeight + 26)}px`;
        });
      n.observe(l);
      const p = h(
        1066,
        a,
        () => {
          const q = l.offsetHeight;
          q && (b.height = `${q + 26}px`);
        },
        1e3
      );
      g(() => {
        n.disconnect();
        a.clearInterval(p);
      });
    }
  }
  var b1 = class {
    constructor(a) {
      this.ed = a;
    }
    zg(a) {
      const b = a.C.document.createElement("iframe"),
        c = a.da,
        d = T(cy),
        e = new JE({
          R: b,
          pb: B(c, 16),
          nd: "anno-cse",
          Gb: this.ed.replace("ca", "partner"),
          Je: "ShoppingVariant",
          location: a.C.location,
          language: B(c, 7),
          Ed: Y0(c, a.searchTerm),
          rb: a.P.ac.filter((f) => f !== 42),
          Ud: d,
          Lc: Sz(yy),
          Ae: !0,
          Ge: void 0,
          Td: !0,
        });
      e.init();
      $0(a.C, b, a.searchTerm, e, a.rsToken, c, a.xb, a.Sc, a.Ub, d);
      return b;
    }
  };
  function c1(a) {
    var b = {},
      c = a.searchTerm;
    const d = a.el;
    var e = a.ed,
      f = a.eh;
    const g = a.Xe,
      h = a.ek,
      k = a.Wl,
      m = a.hn,
      l = a.Mm,
      n = a.rm,
      p = a.sm;
    var q = a.um,
      v = a.fk;
    const E = a.Bm,
      F = a.rsToken,
      R = b && b.ee;
    a = b && b.Nk;
    b = YD;
    f =
      (m
        ? ""
        : '<link href="https://fonts.googleapis.com/css?family=Google+Sans:500" rel="stylesheet"' +
          (R ? ' nonce="' + V(AE(R)) + '"' : "") +
          ">") +
      "<style" +
      (R ? ' nonce="' + V(AE(R)) + '"' : "") +
      ">#gda-search-term {height: 24px; font-size: 18px; font-weight: 500; color: #202124; font-family: 'Google Sans'; padding-bottom: 6px;" +
      (k ? "padding-right: 16px;" : "padding-left: 16px;") +
      "}#display-slot {display: inline-block; height: " +
      W(h) +
      "; width: " +
      W(g) +
      'px;}</style><div id="gda-search-term">' +
      WD(c) +
      "</div>" +
      (p !== -1
        ? "<script" +
          (a ? ' nonce="' + V(AE(a)) + '"' : "") +
          ">window[" +
          hE(iE(n)) +
          "] = " +
          hE(iE(p)) +
          ";\x3c/script>"
        : "") +
      (f !== ""
        ? '<meta name="google-adsense-platform-account" content="' + V(f) + '">'
        : "") +
      '<ins id="display-slot" class="adsbygoogle" data-ad-client="' +
      V(e) +
      '"></ins>' +
      (l
        ? "<script" +
          (a ? ' nonce="' + V(AE(a)) + '"' : "") +
          ">(adsbygoogle=window.adsbygoogle||[]).requestNonPersonalizedAds=1;\x3c/script>"
        : "") +
      (m
        ? "<script" +
          (a ? ' nonce="' + V(AE(a)) + '"' : "") +
          ">const el = document.querySelector('ins.adsbygoogle'); el.dir = 'ltr'; el.style.backgroundColor = 'lightblue'; el.style.fontSize = '25px'; el.style.textDecoration = 'none'; el.textContent = \"Loading display ads inside this slot for query = " +
          String(c).replace(jE, kE) +
          ' and " + "property code = ' +
          String(e).replace(jE, kE) +
          '";\x3c/script>'
        : "") +
      "<script" +
      (a ? ' nonce="' + V(AE(a)) + '"' : "") +
      ">top.postMessage({'action':'sgda-ready'}, top.location.origin);\x3c/script>";
    m
      ? (e = "")
      : ((c =
          '<script data-ad-intent-query="' +
          V(c) +
          '" data-ad-intent-qetid="' +
          V(d) +
          '"' +
          (E ? ' data-ad-intent-rs-token="' + V(F) + '"' : "") +
          ' data-page-url="'),
        XD(q, PD) || XD(q, QD)
          ? (q = String(q).replace(oE, pE))
          : uc(q)
          ? (q = nE(vc(q)))
          : q instanceof oc
          ? (q = nE(qc(q).toString()))
          : ((q = String(q)),
            (q = xE.test(q) ? q.replace(oE, pE) : "about:invalid#zSoyz")),
        (v =
          c +
          V(q) +
          '" data-ad-intents-format="' +
          V(v) +
          '" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client='),
        (e = encodeURIComponent(String(e))),
        (lE.lastIndex = 0),
        (e = lE.test(e) ? e.replace(lE, mE) : e),
        (e =
          v +
          e +
          '" crossorigin="anonymous"' +
          (a ? ' nonce="' + V(AE(a)) + '"' : "") +
          ">\x3c/script>"));
    return b(f + e);
  }
  function d1(a, b) {
    return a ? 0.95 * b.innerHeight - 30 : b.innerHeight;
  }
  var h1 = class {
    constructor(a, b, c, d) {
      this.ed = a;
      this.eh = b;
      this.g = c;
      this.Wb = d;
    }
    zg(a) {
      const b = d1(a.Ga, a.C);
      var c = c1({
        searchTerm: a.searchTerm,
        el: a.Ji || "",
        ed: this.ed,
        eh: this.eh ?? "",
        Xe: a.Xe,
        ek: Sz(a.Ga ? ny : ly).replace("<DH>", `${b}px`),
        Wl: a.la,
        hn: !!A(a.da, 13),
        Mm: a.Bj ?? !1,
        rm: "goog_pvsid",
        sm: this.g,
        um: this.Wb,
        fk: a.format,
        Bm: T(xy),
        rsToken: a.rsToken,
      });
      c = wd(
        "body",
        {
          dir: a.la ? "rtl" : "ltr",
          lang: B(a.da, 7),
          style: "margin:0;height:100%;padding-top:0;overflow:hidden",
        },
        TD(c)
      );
      const d = a.C.document.createElement("iframe");
      t(d, { border: "0", width: "100%" });
      d.height = "24px";
      const e = T(my),
        f = T($x),
        g = new P(!0),
        h = a.Ub(999, a.C, (k) => {
          if (
            k.data.action === "sgda-ready" &&
            ((k = d.contentDocument), k?.body)
          ) {
            var m = d.contentWindow;
            if (!e || m) {
              var l = k.getElementById("display-slot");
              if (l) {
                var n = k.createElement("iframe"),
                  p = e ? m : a.C,
                  q = new MutationObserver((v, E) => {
                    if (l.getAttribute("data-ad-status") === "unfilled") Vk(l);
                    else if (
                      T(wy) &&
                      l.getAttribute("data-ad-status") === "filled"
                    )
                      f && (g.g(!1), e && (e1(n, d, 0), n.remove())),
                        n.contentDocument?.body &&
                          (n.contentDocument.body.innerText = "");
                    else if (l.getAttribute("data-ad-status") !== "filled")
                      return;
                    e ? g.X && e1(n, d, b) : e1(n, d);
                    f1(p, n, d, a.xb, a.Sc, a.Ub, e);
                    E.disconnect();
                  });
                q.observe(l, {
                  attributes: !0,
                  attributeFilter: ["data-ad-status"],
                });
                a.xb(() => void q.disconnect());
                g1(p, this.ed, n, a, e, g);
                k.body.append(n);
              }
            }
          }
        });
      a.xb(() => {
        a.C.removeEventListener("message", h);
      });
      d.srcdoc = Kc(c);
      return d;
    }
  };
  function g1(a, b, c, d, e, f) {
    const g = new JE({
        R: c,
        pb: B(d.da, 16),
        nd: "anno-cse",
        Gb: b.replace("ca", "partner"),
        Je: "ShoppingVariant",
        location: d.C.location,
        language: B(d.da, 7),
        Ed: Y0(d.da, d.searchTerm),
        rb: d.P.ac.filter((k) => k !== 42),
        Ud: e,
        Lc: Sz(yy),
        Ae: !0,
        Ge: void 0,
        Td: !0,
        Uh: !0,
      }),
      h = d.Ub(999, a, (k) => {
        k.data.action === "init" &&
          k.data.adChannel === "ShoppingVariant" &&
          (A(d.da, 13) || IE(g, d.searchTerm, d.rsToken));
      });
    g.init();
    b = () => {
      a.removeEventListener("message", h);
    };
    d.xb(b);
    Nt(f, !1, b);
  }
  function f1(a, b, c, d, e, f, g) {
    if (g) {
      const h = f(1066, a, (k) => {
        (k = sP(k)) && e1(b, c, k.height);
      });
      d(() => void a.removeEventListener("message", h));
    } else {
      f = b.contentDocument.documentElement;
      const h = new ResizeObserver(() => void e1(b, c));
      h.observe(f);
      const k = e(1066, a, () => void e1(b, c), 1e3);
      d(() => {
        h.disconnect();
        a.clearInterval(k);
      });
    }
  }
  function e1(a, b, c = a.contentDocument?.documentElement?.offsetHeight) {
    if (T(wy)) {
      if (c === void 0) return;
    } else if (!c) return;
    const d =
      b.contentDocument?.getElementById("display-slot")?.offsetHeight ?? 0;
    a.height = `${Math.ceil(c + 26)}px`;
    b.height = `${Math.ceil(c + 26 + d)}px`;
  }
  function i1(a, b, c, d, e, f) {
    return {
      da: j1(a) ?? Lh(b, Q_, 1),
      Wb: c,
      mf: d,
      params: k1(2, []),
      sc: l1(2),
      P: new Z0({ ...m1(e), Uc: !0 }),
      od: f,
    };
  }
  function m1(a) {
    return { ac: a, If: U(fz), Hf: U(ez), Ef: U(Yy), Ah: Tz(sy) };
  }
  function k1(a, b) {
    return {
      wordWindowSize: U(Qy),
      sameSearchTermPerWindow: U(dz),
      annotationsPerWindow: U(bz),
      maximumAnnotationsPerPage: U(cz),
      Ei: b,
      Zh: U(hz),
      dj: a === 2 ? 10 : 2,
    };
  }
  function n1(a, b) {
    a = QB(iB([...b], a), a);
    if (a.length !== 0) return a.reduce((c, d) => (c.Ea.g > d.Ea.g ? c : d));
  }
  function l1(a) {
    switch (a) {
      case 1:
        return 2;
      case 2:
        return 1;
      default:
        return 0;
    }
  }
  function j1(a) {
    try {
      a = a?.location?.hash?.match(/\bgoog_cpmi=([^&]*)/);
      if (!a) return null;
      const b = decodeURIComponent(a[1]);
      return R_(b);
    } catch (b) {
      return null;
    }
  }
  function o1(a, b) {
    const c = a.g;
    a.g = a.entries.length;
    var d = new Eq(),
      e = new qq();
    a = Ph(e, 2, a.entries.slice(c));
    d = y(d, 1, a);
    b !== 0 && ji(d, 2, Math.round(b));
    return d;
  }
  var p1 = class {
    constructor() {
      this.entries = [];
      this.language = null;
      this.g = 0;
    }
  };
  function q1(a) {
    return a ? 1 : 0;
  }
  function r1(a) {
    t(a, {
      border: "0",
      "box-shadow": "none",
      display: "inline",
      float: "none",
      margin: "0",
      outline: "0",
      padding: "0",
    });
  }
  function s1(a, b) {
    b = a.document.createElement(b);
    xw(a, b);
    t(b, {
      color: "inherit",
      cursor: "inherit",
      direction: "inherit",
      "font-family": "inherit",
      "font-size": "inherit",
      "font-weight": "inherit",
      "text-align": "inherit",
      "text-orientation": "inherit",
      visibility: "inherit",
      "writing-mode": "inherit",
    });
    return b;
  }
  function t1(a) {
    a.dataset.googleVignette = "false";
    a.dataset.googleInterstitial = "false";
  }
  function u1(a) {
    return (
      a.maximumAnnotationsPerPage > 0 && a.j.l >= a.maximumAnnotationsPerPage
    );
  }
  var w1 = class {
    constructor(a, b, c, d) {
      this.sameSearchTermPerWindow = b;
      this.annotationsPerWindow = c;
      this.maximumAnnotationsPerPage = d;
      this.g = 0;
      this.j = new v1(a);
    }
  };
  function x1(a, b) {
    b -= a.B;
    for (const c of a.g.keys()) {
      const d = a.g.get(c);
      let e = 0;
      for (; e < d.length && d[e] < b; ) e++;
      a.j -= e;
      e > 0 && a.g.set(c, d.slice(e));
    }
  }
  function y1(a, b, c) {
    let d = [];
    a.g.has(b) && (d = a.g.get(b));
    d.push(c);
    a.j++;
    a.g.set(b, d);
  }
  class v1 {
    constructor(a) {
      this.B = a;
      this.g = new Map();
      this.j = 0;
    }
    get l() {
      return this.j;
    }
  }
  function z1(a, b, c) {
    a = A1(a, "100 -1000 840 840", `calc(${b} - 2px)`, b, B1[c]);
    t(a, { color: "inherit", cursor: "inherit", fill: "currentcolor" });
    return a;
  }
  function C1(a, b) {
    a = D1(a, "20px", "#1A73E8", b);
    a.classList.add("google-anno-sa-intent-icon");
    return a;
  }
  function E1(a, b) {
    a = A1(
      a,
      "0 -960 960 960",
      "20px",
      "20px",
      "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
    );
    t(a, {
      left: "13px",
      right: "",
      "pointer-events": "initial",
      position: "absolute",
      top: "15px",
      transform: "none",
      fill: "#1A73E8",
    });
    a.role = "button";
    a.ariaLabel = b;
    a.tabIndex = 0;
    return a;
  }
  const B1 = {
    [0]: "M503-104q-24 24-57 24t-57-24L103-390q-23-23-23-56.5t23-56.5l352-353q11-11 26-17.5t32-6.5h286q33 0 56.5 23.5T879-800v286q0 17-6.5 32T855-456L503-104Zm196-536q25 0 42.5-17.5T759-700q0-25-17.5-42.5T699-760q-25 0-42.5 17.5T639-700q0 25 17.5 42.5T699-640ZM446-160l353-354v-286H513L160-446l286 286Zm353-640Z",
    [1]: "m274-274-128-70 42-42 100 14 156-156-312-170 56-56 382 98 157-155q17-17 42.5-17t42.5 17q17 17 17 42.5T812-726L656-570l98 382-56 56-170-312-156 156 14 100-42 42-70-128Z",
    [2]: "M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z",
    [3]: "M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm200-500 54-18 16-54q-32-48-77-82.5T574-786l-54 38v56l160 112Zm-400 0 160-112v-56l-54-38q-54 17-99 51.5T210-652l16 54 54 18Zm-42 308 46-4 30-54-58-174-56-20-40 30q0 65 18 118.5T238-272Zm242 112q26 0 51-4t49-12l28-60-26-44H378l-26 44 28 60q24 8 49 12t51 4Zm-90-200h180l56-160-146-102-144 102 54 160Zm332 88q42-50 60-103.5T800-494l-40-28-56 18-58 174 30 54 46 4Z",
    [4]: "M120-680v-160l160 80-160 80Zm600 0v-160l160 80-160 80Zm-280-40v-160l160 80-160 80Zm0 640q-76-2-141.5-12.5t-114-26.5Q136-135 108-156t-28-44v-360q0-25 31.5-46.5t85.5-38q54-16.5 127-26t156-9.5q83 0 156 9.5t127 26q54 16.5 85.5 38T880-560v360q0 23-28 44t-76.5 37q-48.5 16-114 26.5T520-80v-160h-80v160Zm40-440q97 0 167.5-11.5T760-558q0-5-76-23.5T480-600q-128 0-204 18.5T200-558q42 15 112.5 26.5T480-520ZM360-166v-154h240v154q80-8 131-23.5t69-27.5v-271q-55 22-138 35t-182 13q-99 0-182-13t-138-35v271q18 12 69 27.5T360-166Zm120-161Z",
    [5]: "M200-80q-33 0-56.5-23.5T120-160v-480q0-33 23.5-56.5T200-720h80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720h80q33 0 56.5 23.5T840-640v480q0 33-23.5 56.5T760-80H200Zm0-80h560v-480H200v480Zm280-240q83 0 141.5-58.5T680-600h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85h-80q0 83 58.5 141.5T480-400ZM360-720h240q0-50-35-85t-85-35q-50 0-85 35t-35 85ZM200-160v-480 480Z",
    [6]: "M80-160v-120h80v-440q0-33 23.5-56.5T240-800h600v80H240v440h240v120H80Zm520 0q-17 0-28.5-11.5T560-200v-400q0-17 11.5-28.5T600-640h240q17 0 28.5 11.5T880-600v400q0 17-11.5 28.5T840-160H600Zm40-120h160v-280H640v280Zm0 0h160-160Z",
    [7]: "M400-40v-80H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h200v-80h80v880h-80ZM200-240h200v-240L200-240Zm360 120v-360l200 240v-520H560v-80h200q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H560Z",
    [8]: "M300-240q25 0 42.5-17.5T360-300q0-25-17.5-42.5T300-360q-25 0-42.5 17.5T240-300q0 25 17.5 42.5T300-240Zm0-360q25 0 42.5-17.5T360-660q0-25-17.5-42.5T300-720q-25 0-42.5 17.5T240-660q0 25 17.5 42.5T300-600Zm180 180q25 0 42.5-17.5T540-480q0-25-17.5-42.5T480-540q-25 0-42.5 17.5T420-480q0 25 17.5 42.5T480-420Zm180 180q25 0 42.5-17.5T720-300q0-25-17.5-42.5T660-360q-25 0-42.5 17.5T600-300q0 25 17.5 42.5T660-240Zm0-360q25 0 42.5-17.5T720-660q0-25-17.5-42.5T660-720q-25 0-42.5 17.5T600-660q0 25 17.5 42.5T660-600ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z",
    [9]: "M160-80v-440H80v-240h208q-5-9-6.5-19t-1.5-21q0-50 35-85t85-35q23 0 43 8.5t37 23.5q17-16 37-24t43-8q50 0 85 35t35 85q0 11-2 20.5t-6 19.5h208v240h-80v440H160Zm400-760q-17 0-28.5 11.5T520-800q0 17 11.5 28.5T560-760q17 0 28.5-11.5T600-800q0-17-11.5-28.5T560-840Zm-200 40q0 17 11.5 28.5T400-760q17 0 28.5-11.5T440-800q0-17-11.5-28.5T400-840q-17 0-28.5 11.5T360-800ZM160-680v80h280v-80H160Zm280 520v-360H240v360h200Zm80 0h200v-360H520v360Zm280-440v-80H520v80h280Z",
    [10]: "m456-200 174-340H510v-220L330-420h126v220Zm24 120q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z",
  };
  function D1(a, b, c, d) {
    a = A1(a, "0 -960 960 960", b, b, B1[d]);
    t(a, { fill: c, cursor: "inherit" });
    return a;
  }
  function A1(a, b, c, d, e) {
    const f = a.document.createElementNS("http://www.w3.org/2000/svg", "path");
    f.setAttribute("d", e);
    e = a.document.createElementNS("http://www.w3.org/2000/svg", "svg");
    xw(a, e);
    e.setAttribute("viewBox", b);
    e.setAttribute("width", c);
    e.setAttribute("height", d);
    r1(e);
    e.appendChild(f);
    return e;
  }
  function F1(a, b, c, d, e, f) {
    const g = s1(a, "div");
    g.classList.add("google-anno-skip", "google-anno-sc");
    d = a.getComputedStyle(d).fontSize || "16px";
    var h = g.appendChild;
    var k = b.g.get(c) || 0;
    k = D1(a, d, f, k);
    t(k, { position: "relative", top: "3px" });
    const m = s1(a, "span");
    t(m, {
      display: "inline-block",
      "padding-left": b.la() ? "" : "3px",
      "padding-right": b.la() ? "3px" : "",
    });
    m.appendChild(k);
    h.call(g, m);
    h = g.appendChild;
    k = s1(a, "span");
    k.appendChild(a.document.createTextNode(c));
    t(k, {
      position: "relative",
      left: b.la() ? "" : "3px",
      right: b.la() ? "3px" : "",
      "padding-left": b.la() ? "6px" : "",
      "padding-right": b.la() ? "" : "6px",
    });
    h.call(g, k);
    t(g, {
      display: "inline-block",
      "border-radius": "20px",
      "padding-left": b.la() ? "7px" : "6px",
      "padding-right": b.la() ? "6px" : "7px",
      "padding-top": "3px",
      "padding-bottom": "3px",
      "border-width": "1px",
      "border-style": "solid",
      color: f,
      "font-family": "Roboto",
      "font-weight": "500",
      "font-size": d,
      "border-color": "#D7D7D7",
      background: e,
      cursor: "pointer",
      "margin-top": "-3px",
    });
    b.P.Bg && t(g, { height: "min-content" });
    g.tabIndex = 0;
    g.role = "link";
    g.ariaLabel = c;
    return g;
  }
  const G1 = [
    { Rh: "1907259590", Jf: 480, jg: 220 },
    { Rh: "2837189651", Jf: 400, jg: 180 },
    { Rh: "9211025045", Jf: 360, jg: 160 },
    { Rh: "6584860439", Jf: -Infinity, jg: 150 },
  ];
  function H1(a) {
    G1.find((b) => b.Jf <= a);
  }
  var I1 = class {
    constructor() {
      this.g = [];
    }
  };
  function J1(a) {
    K1(
      a.config,
      1065,
      a.C,
      () => {
        if (!a.g) {
          var b = new Jq();
          b = ji(b, 1, a.j);
          var c = new Iq();
          b = z(b, 2, Kq, c);
          a.config.Z.Qf(b);
        }
      },
      1e4
    );
  }
  class L1 {
    constructor(a, b, c) {
      this.C = a;
      this.config = b;
      this.j = c;
      this.g = !1;
    }
    cancel(a) {
      this.C.clearTimeout(a);
    }
  }
  function M1(a, b, c, d, e, f, g, h = null, k) {
    H1(b.document.body.clientWidth);
    e = c.Ga ? N1(a, b, c, e, f, h, g, k) : O1(a, b, c, e, f, h, g, k);
    Ot(e.isVisible(), !1, () => {
      var l = a.l;
      for (const n of l.g) n();
      l.g.length = 0;
      a.g.g(!1);
    });
    e.show({ Fi: !0 });
    a.g.g(!0);
    const m = new L1(b, c, d);
    J1(m);
    a.xb(() => {
      var l = c.Z,
        n = l.Qf;
      var p = new Jq();
      p = ji(p, 1, d);
      var q = new Hq();
      p = z(p, 3, Kq, q);
      n.call(l, p);
      m.g = !0;
    });
    return e;
  }
  function P1(a, b, c, d, e, f, g, h = null, k = !1) {
    a.j();
    return new Promise((m) => {
      const l = Nt(a.g, !1, () => void m(M1(a, b, c, d, e, f, g, h, k)));
      a.j = () => {
        l();
        m(null);
      };
    });
  }
  function N1(a, b, c, d, e, f, g, h) {
    e = c.od.zg({
      C: b,
      searchTerm: d,
      rsToken: e,
      P: c.P,
      Ga: c.Ga,
      la: c.la(),
      da: c.da,
      Ji: f,
      Xe: c.Ga ? b.innerWidth : Math.min(b.document.body.clientWidth, c.P.Ef),
      Ub: c.Ub.bind(c),
      Sc: c.Sc.bind(c),
      xb: (k) => void a.xb(k),
      format: g,
      Bj: h,
    });
    return mH(b, e, {
      sj: 0.95,
      Pi: 0.95,
      zIndex: 2147483647,
      ie: !0,
      Ng: "adpub-drawer-root",
      Mg: !1,
      Kb: !0,
      Ug: new P(Y0(c.da, d)),
    });
  }
  function O1(a, b, c, d, e, f, g, h) {
    const k = c.Ga
      ? b.innerWidth
      : Math.min(b.document.body.clientWidth, c.P.Ef);
    e = c.od.zg({
      C: b,
      searchTerm: d,
      rsToken: e,
      P: c.P,
      Ga: c.Ga,
      la: c.la(),
      da: c.da,
      Ji: f,
      Xe: k,
      Ub: c.Ub.bind(c),
      Sc: c.Sc.bind(c),
      xb: (m) => void a.xb(m),
      format: g,
      Bj: h,
    });
    return xF(b, e, {
      jf: `${k}px`,
      ef: c.la(),
      Te: B(c.da, 14),
      zIndex: 2147483647,
      ie: !0,
      Hi: !0,
      Ng: "adpub-drawer-root",
      Mg: !1,
      Kb: !0,
      Ug: new P(Y0(c.da, d)),
    });
  }
  var Q1 = class {
    constructor() {
      this.g = new P(!1);
      this.l = new I1();
      this.j = () => {};
    }
    xb(a) {
      this.l.g.push(a);
    }
  };
  var R1 = class {
      constructor(a) {
        this.performance = a;
      }
      xa() {
        return this.performance.now();
      }
    },
    S1 = class {
      xa() {
        return Date.now();
      }
    };
  const T1 = ["BTN", "BUTTON"],
    V1 = U1(
      "gdpr cookie privacy notice notification dialog prompt sticky".split(" ")
    ),
    W1 = U1(
      "accept ok reject dismiss acknowledge close consent allow deny opt-in opt-out".split(
        " "
      )
    ),
    X1 = U1(["header", "nav", "menu"]),
    Y1 = /^(?:[A-Z][^\s]*\s?)+$/;
  function U1(a) {
    return new RegExp(`(?:^|[_-\\s])${a.join("|(?:^|[_-\\s])")}`, "i");
  }
  function Z1(a) {
    switch (a.tagName?.toUpperCase?.()) {
      case "IFRAME":
      case "A":
      case "AUDIO":
      case "BUTTON":
      case "CANVAS":
      case "CITE":
      case "CODE":
      case "EMBED":
      case "FOOTER":
      case "FORM":
      case "KBD":
      case "LABEL":
      case "OBJECT":
      case "PRE":
      case "SAMP":
      case "SCRIPT":
      case "SELECT":
      case "STYLE":
      case "SUB":
      case "SUPER":
      case "SVG":
      case "TEXTAREA":
      case "TIME":
      case "VAR":
      case "VIDEO":
      case null:
        return !1;
    }
    return ((a.className.toUpperCase?.()?.includes("CRUMB") ||
      a.id.toUpperCase?.()?.includes("CRUMB")) &&
      a.offsetHeight <= 50) ||
      $1(a)
      ? !1
      : !a.classList?.contains("google-anno-skip") &&
          !a.classList?.contains("adsbygoogle");
  }
  function $1(a) {
    return T1.some(
      (b) =>
        a.className.toUpperCase?.()?.includes(b) ||
        a.id.toUpperCase?.()?.includes(b)
    );
  }
  function a2(a) {
    const b = document.elementsFromPoint(
      a.getBoundingClientRect().x + a.getBoundingClientRect().width / 2,
      a.getBoundingClientRect().y + a.getBoundingClientRect().height / 2
    );
    for (const c of b)
      if (a.contains(c)) break;
      else if (b2(c)) return !0;
    return !1;
  }
  function b2(a) {
    return !(
      a.closest(".adsbygoogle") ||
      a.closest("#google-anno-sa") ||
      c2(a)
    );
  }
  function c2(a) {
    const b = a.getAttribute("id") ?? "",
      c = a.className;
    if (b.match(V1) || c.match?.(V1)) return !0;
    if (a.tagName === "A" || a.tagName === "BUTTON")
      if (b.match(W1) || c.match?.(W1)) return !0;
    return (
      !!a.parentElement &&
      a.parentElement.tagName !== "BODY" &&
      c2(a.parentElement)
    );
  }
  function d2(a, b) {
    switch (a.tagName?.toUpperCase?.()) {
      case "ADDRESS":
      case "ARTICLE":
      case "FOOTER":
      case "H1":
      case "H2":
      case "H3":
      case "H4":
      case "H5":
      case "H6":
      case "HEADER":
      case "HGROUP":
      case "HR":
      case "NAV":
      case "SECTION":
      case "TABLE":
      case null:
        return !0;
      case "IMG":
        return PS(a) && a.offsetHeight >= b.hh;
      default:
        return !1;
    }
  }
  function e2(a) {
    const b = a.textContent;
    if (!b) return !1;
    switch (a.tagName?.toUpperCase?.()) {
      case "H1":
      case "H2":
      case "H3":
      case "H4":
      case "H5":
      case "H6":
      case "HEADER":
      case "HGROUP":
      case "TH":
      case "THEAD":
        return !0;
      case "LI":
      case "OL":
      case "TD":
      case "TR":
      case "UL":
        return !1;
    }
    return Y1.test(b);
  }
  const f2 = [255, 255, 255];
  function g2(a) {
    function b(d) {
      return [
        Number(d[1]),
        Number(d[2]),
        Number(d[3]),
        d.length > 4 ? Number(d[4]) : 1,
      ];
    }
    var c = a.match(/rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)/);
    if (
      c ||
      (c = a.match(/rgba\(([0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0-9\\.]+)\)/))
    )
      return b(c);
    if (a === "transparent" || a === "") return [0, 0, 0, 0];
    throw Error(`Invalid color: ${a}`);
  }
  function h2(a) {
    var b = getComputedStyle(a);
    if (b.backgroundImage !== "none") return null;
    b = g2(b.backgroundColor);
    var c = i2(b);
    if (c) return c;
    a = (a = a.parentElement) ? h2(a) : f2;
    if (!a) return null;
    c = b[3];
    return [
      Math.round(c * b[0] + (1 - c) * a[0]),
      Math.round(c * b[1] + (1 - c) * a[1]),
      Math.round(c * b[2] + (1 - c) * a[2]),
    ];
  }
  function i2(a) {
    return a[3] === 1 ? [a[0], a[1], a[2]] : null;
  }
  function j2(a, b, c) {
    b = b.getBoundingClientRect();
    a = oq(nq(mq(new pq(), a), 3), c);
    a = G(a, 6, Math.round(b.x));
    return G(a, 7, Math.round(b.y));
  }
  function k2(a, b) {
    return oq(nq(mq(new pq(), a), 4), b);
  }
  function l2(a) {
    a = g2(a);
    var b = new kq();
    b = G(b, 1, a[0]);
    b = G(b, 2, a[1]);
    b = G(b, 3, a[2]);
    return Gh(b, 4, uf(a[3]), 0);
  }
  function m2(a, b, c, d) {
    var e = d.getBoundingClientRect();
    var f = new xq();
    f = G(f, 1, Math.round(e.x));
    f = G(f, 2, Math.round(e.y));
    f = G(f, 3, Math.round(e.height));
    e = G(f, 4, Math.round(e.width));
    e = G(e, 6, a.innerHeight);
    a = G(e, 5, a.innerWidth);
    e = iq(new jq(), c.tagName);
    c = [...c.classList];
    c = Fh(e, 2, c, fg);
    e = new yq();
    b = ki(e, 1, b);
    b = y(b, 2, a);
    b = y(b, 3, c);
    a: {
      d = document.elementsFromPoint(
        d.getBoundingClientRect().x + d.getBoundingClientRect().width / 2,
        d.getBoundingClientRect().y + d.getBoundingClientRect().height / 2
      );
      for (g of d) if (b2(g)) break a;
      var g = null;
    }
    if ((d = g))
      (g = iq(new jq(), d.tagName)),
        (d = [...d.classList]),
        (g = Fh(g, 2, d, fg)),
        y(b, 4, g);
    g = new zq();
    return z(g, 1, Aq, b);
  }
  const n2 =
    /[\s!'",:;\\(\\)\\?\\.\u00bf\u00a1\u30a0\uff1d\u037e\u061f\u3002\uff1f\uff1b\uff1a\u2014\u2014\uff5e\u300a\u300b\u3008\u3009\uff08\uff09\u300c\u300d\u3001\u00b7\u2026\u2025\uff01\uff0c\u00b7\u2019\u060c\u061b\u060d\u06d4\u0648]/;
  function o2(a, b) {
    switch (b) {
      case 1:
        return !0;
      default:
        return a === "" || n2.test(a);
    }
  }
  function p2(a, b) {
    const c = new q2(b);
    for (const d of a)
      B(d, 5) &&
        $h(d, 3).forEach((e) => {
          r2(c, e, e);
        });
    s2(c);
    return new t2(c);
  }
  function u2(a, b) {
    b = a.match(b);
    a = new Map();
    for (const c of b)
      if (((b = c.l), a.has(b))) {
        const d = a.get(b);
        c.length > d.length && a.set(b, c);
      } else a.set(b, c);
    return [...a.values()];
  }
  var t2 = class {
    constructor(a) {
      this.g = a;
    }
    isEmpty() {
      return this.g.isEmpty();
    }
    match(a) {
      return this.g.match(a);
    }
  };
  function r2(a, b, c) {
    const d = a.j.has(c) ? a.j.get(c) : a.B++;
    a.j.set(c, d);
    a.A.set(d, c);
    c = 0;
    for (let e = 0; e < b.length; e++) {
      const f = b.charCodeAt(e);
      a.g[c].contains(f) ||
        (a.g.push(new v2()),
        (a.g[a.size].A = c),
        (a.g[a.size].J = f),
        a.g[c].l.set(f, a.size),
        a.size++);
      c = a.g[c].l.get(f);
    }
    a.g[c].B = !0;
    a.g[c].D = d;
    a.g[c].F = a.l.length;
    a.l.push(b.length);
  }
  function s2(a) {
    const b = [];
    for (b.push(0); b.length > 0; ) {
      const f = b.shift();
      var c = a,
        d = c.g[f];
      if (f === 0) (d.g = 0), (d.j = 0);
      else if (d.A === 0) (d.g = 0), (d.j = d.B ? f : c.g[c.g[f].g].j);
      else {
        d = c.g[c.g[f].A].g;
        for (var e = c.g[f].J; ; ) {
          if (c.g[d].contains(e)) {
            c.g[f].g = c.g[d].l.get(e);
            break;
          }
          if (d === 0) {
            c.g[f].g = 0;
            break;
          }
          d = c.g[d].g;
        }
        c.g[f].j = c.g[f].B ? f : c.g[c.g[f].g].j;
      }
      for (const g of a.g[f].bb) b.push(g);
    }
  }
  class q2 {
    constructor(a) {
      this.D = a;
      this.size = 1;
      this.g = [new v2()];
      this.l = [];
      this.j = new Map();
      this.A = new Map();
      this.B = 0;
    }
    isEmpty() {
      return this.B === 0;
    }
    match(a) {
      let b = 0;
      const c = [];
      for (let g = 0; g < a.length; g++) {
        for (;;) {
          var d = a.charCodeAt(g),
            e = this.g[b];
          if (e.contains(d)) {
            b = e.l.get(d);
            break;
          }
          if (b === 0) break;
          b = e.g;
        }
        let h = b;
        for (;;) {
          h = this.g[h].j;
          if (h === 0) break;
          const k = g + 1 - this.l[this.g[h].F],
            m = g;
          d = a;
          e = m;
          var f = this.D;
          o2(d.charAt(k - 1), f) &&
            o2(d.charAt(e + 1), f) &&
            c.push(new w2(k, m, this.A.get(this.g[h].D)));
          h = this.g[h].g;
        }
      }
      return c;
    }
  }
  class v2 {
    constructor() {
      this.l = new Map();
      this.T = !1;
      this.Aa = this.L = this.H = this.oa = this.V = this.ca = -1;
    }
    contains(a) {
      return this.l.has(a);
    }
    set A(a) {
      this.ca = a;
    }
    get A() {
      return this.ca;
    }
    set J(a) {
      this.V = a;
    }
    get J() {
      return this.V;
    }
    set B(a) {
      this.T = a;
    }
    get B() {
      return this.T;
    }
    set D(a) {
      this.L = a;
    }
    get D() {
      return this.L;
    }
    set g(a) {
      this.oa = a;
    }
    get g() {
      return this.oa;
    }
    set j(a) {
      this.H = a;
    }
    get j() {
      return this.H;
    }
    set F(a) {
      this.Aa = a;
    }
    get F() {
      return this.Aa;
    }
    get bb() {
      return this.l.values();
    }
  }
  var w2 = class {
    constructor(a, b, c) {
      this.j = a;
      this.g = b;
      this.A = c;
    }
    get l() {
      return this.j;
    }
    get B() {
      return this.g;
    }
    get searchTerm() {
      return this.A;
    }
    get length() {
      return this.g - this.j;
    }
  };
  async function x2(a, b, c, d, e, f) {
    const g = p2(P_(b.da), b.l);
    if (!g.isEmpty()) {
      var h = new Map();
      for (const k of P_(b.da).filter((m) => B(m, 5)))
        $h(k, 3).forEach((m) => {
          h.set(m, B(k, 1));
        });
      await y2(
        a,
        a.document.body,
        b,
        g,
        h,
        new Set(),
        b.P.Eb ? new Map() : null,
        c,
        d,
        new w1(0, 0, 0, b.P.wh),
        b.P.Gf || b.P.Ic ? new z2(b.P.Gf, b.P.Ic) : null,
        e,
        f
      );
    }
  }
  async function y2(a, b, c, d, e, f, g, h, k, m, l, n, p) {
    h.g.xa(9) >= h.j && (await A2(h, 10));
    if (
      PS(b) &&
      (!Z1(b) ||
        (c.P.Xg &&
          (b.tagName?.toUpperCase?.() === "HEADER" ||
            b.tagName?.toUpperCase?.() === "NAV" ||
            b.id?.match(X1) ||
            b.className.match?.(X1))))
    )
      c.P.Ic &&
        l &&
        b.classList?.contains("adsbygoogle") &&
        b.dataset.adStatus === "filled" &&
        B2(l, b.getBoundingClientRect().bottom + a.scrollY);
    else if (
      (c.P.Se && f.size && OS(b) && d2(b, c.P) && f.clear(),
      c.P.mh &&
        f.size &&
        OS(b) &&
        C2(a, b) &&
        b.parentElement &&
        !D2(a, c, b.parentElement) &&
        E2(a, l, b.getBoundingClientRect().top) &&
        !e2(b) &&
        F2(a, f, g, c, k, b.parentElement, b, m, l, p),
      b.nodeType === Node.TEXT_NODE && b.textContent)
    )
      u2(d, b.textContent)
        .map((q) => e.get(q.searchTerm))
        .filter((q) => !!q)
        .forEach((q) => {
          f.add(q);
          c.P.Eb &&
            g &&
            b.parentElement &&
            g.set(q, b.parentElement.getBoundingClientRect().bottom);
        });
    else {
      for (const q of b.childNodes)
        await y2(a, q, c, d, e, f, g, h, k, m, l, n, p);
      f.size &&
        OS(b) &&
        ["block", "table-cell"].includes(a.getComputedStyle(b).display) &&
        !D2(a, c, b) &&
        E2(a, l, b.getBoundingClientRect().bottom) &&
        !e2(b) &&
        F2(a, f, g, c, k, b, null, m, l, p);
      if ((a = c.P.Se && f.size && OS(b)))
        a: switch (b.tagName?.toUpperCase?.()) {
          case "ARTICLE":
          case "NAV":
          case "SECTION":
          case "TABLE":
          case null:
            a = !0;
            break a;
          default:
            a = !1;
        }
      a && (f.clear(), c.P.Eb && g && g.clear());
    }
  }
  function F2(a, b, c, d, e, f, g, h, k, m) {
    var l = [...b];
    d.P.Nh && ab(l);
    for (const [n, p] of l.entries()) {
      l = n;
      const q = p;
      if (u1(h) || (d.P.Id && l === d.P.Id)) return;
      if (
        d.P.Eb &&
        c &&
        ((l = c.get(q)), l !== void 0 && l !== null && G2(l, g, f, d))
      ) {
        b.delete(q);
        continue;
      }
      d.P.Id && (b.delete(q), d.P.Eb && c?.delete(q));
      const v = j2(d.Z.Xd(), g ?? f, q);
      e.entries.push(Ng(v));
      y1(h.j, q, h.g);
      if (A(d.da, 17)) continue;
      l = F1(a, d, q, f, "#0B57D0", "#FFFFFF");
      const E = H2(l, d, Uh(v) ?? "0", a);
      t1(l);
      I2(d, 999, l, (F) => {
        try {
          var R = wq(uq(q), Uh(v) ?? "0");
          var ea = ii(R, 7, E.l);
          const J = d.Z.md(ea);
          d.Sa(
            1401,
            P1(
              m,
              a,
              d,
              J,
              q,
              d.B.get(q) || "",
              3,
              d.P.Uc ? d.j.get(q) || "" : null
            )
          );
          return !1;
        } finally {
          F.preventDefault(), F.stopImmediatePropagation();
        }
      });
      f.insertBefore(l, g);
      if (d.P.Rf && a2(l)) {
        if (d.P.Ye) {
          const F = m2(a, Uh(v) ?? "0", f, l);
          d.Z.Ig(F);
        }
        l.remove();
      } else k && J2(k, l.getBoundingClientRect().bottom + window.scrollY);
    }
    d.P.Id || (b.clear(), d.P.Eb && c?.clear());
  }
  async function K2(a, b, c, d, e) {
    const f = new Q1();
    for (const [, g] of [...b].entries()) {
      const h = g,
        k = k2(c.Z.Xd(), h);
      d.entries.push(Ng(k));
      b = F1(a, c, h, e, "#FFFFFF", "#1A73E8");
      const m = L2(b, c, Uh(k) ?? "0");
      t1(b);
      I2(c, 999, b, (l) => {
        try {
          var n = wq(uq(h), Uh(k) ?? "0");
          var p = ii(n, 8, m.l);
          const q = c.Z.md(p);
          P1(f, a, c, q, h, c.B.get(h) || "", 4, c.j.get(h) || "", !0);
          return !1;
        } finally {
          l.preventDefault(), l.stopImmediatePropagation();
        }
      });
      e.appendChild(b);
      if (e.scrollHeight > e.clientHeight) {
        e.removeChild(b);
        break;
      }
    }
  }
  function C2(a, b) {
    return (
      ["BR", "IMG", "TABLE"].includes(b.tagName) ||
      a.getComputedStyle(b).display === "block"
    );
  }
  function D2(a, b, c) {
    if (!b.P.Bf) return !1;
    a = Rd(a.getComputedStyle(c).fontSize);
    return a !== null && a > b.P.Bf;
  }
  function E2(a, b, c) {
    b
      ? ((a = c + a.scrollY),
        (b =
          (b.g === void 0 || a - b.g > b.l) &&
          (b.j === void 0 || a - b.j > b.Ic)))
      : (b = !0);
    return b;
  }
  function G2(a, b, c, d) {
    b = b?.getBoundingClientRect().top ?? c.getBoundingClientRect().bottom;
    return d.P.Eb < b - a || d.P.Eb < a - b;
  }
  class M2 {
    constructor() {
      this.j = this.g = null;
    }
    get l() {
      return this.g;
    }
  }
  function H2(a, b, c, d) {
    const e = new M2();
    N2(b, (f) => {
      for (const l of f)
        if (l.isIntersecting)
          if (b.P.Rf && e.l === null && a2(a))
            b.P.Ye && ((f = m2(d, c, a.parentElement, a)), b.Z.Ig(f)),
              a.remove();
          else {
            var g = e,
              h = b.Z;
            f = c;
            if (!g.g) {
              var k = h.Dg,
                m = new Rp();
              f = ki(m, 1, f);
              g.g = k.call(h, f);
            }
          }
        else
          e.g &&
            !e.j &&
            ((f = b.Z),
            (g = f.Cg),
            (h = new Qp()),
            (h = ji(h, 1, e.g)),
            (e.j = g.call(f, h)));
    }).observe(a);
    return e;
  }
  function B2(a, b) {
    a.j = b;
  }
  function J2(a, b) {
    a.g = b;
  }
  class z2 {
    constructor(a, b) {
      this.l = a;
      this.Ic = b;
      this.j = this.g = void 0;
    }
  }
  class O2 {
    constructor() {
      this.j = this.g = null;
    }
    get l() {
      return this.g;
    }
  }
  function L2(a, b, c) {
    const d = new O2();
    N2(b, (e) => {
      for (const m of e)
        if (m.isIntersecting) {
          var f = d,
            g = b.Z;
          e = c;
          if (!f.g) {
            var h = g.di,
              k = new Tp();
            e = ki(k, 1, e);
            f.g = h.call(g, e);
          }
        } else
          d.g &&
            !d.j &&
            ((e = b.Z),
            (f = e.ci),
            (g = new Sp()),
            (g = ji(g, 1, d.g)),
            (d.j = f.call(e, g)));
    }).observe(a);
    return d;
  }
  function P2(a, b, c) {
    Q2(a);
    var d = new Map();
    for (const e of b) (b = R2(e)), d.set(b, (d.get(b) ?? 0) + 1);
    for (const [e, f] of d) (d = e), S2(a, f, d, c), T2(a, d);
  }
  function U2(a, b, c, d) {
    a.j.forEach((e) => {
      V2(e, { ...a.g, outcome: b, re: c, Zg: d });
    });
  }
  function W2(a, b, c, d, e) {
    a.j.forEach((f) => {
      f.tg(b, { ...a.g, outcome: c, re: d, Zg: e });
    });
  }
  function Q2(a) {
    a.B ||
      ((a.B = !0),
      a.j.forEach((b) => {
        X2(b, a.g);
      }));
  }
  function S2(a, b, c, d) {
    a.j.forEach((e) => {
      e.vg(b, { ...a.g, format: c, re: d });
    });
  }
  function T2(a, b) {
    a.D.has(b) ||
      (a.D.add(b),
      a.j.forEach((c) => {
        Y2(c, { ...a.g, format: b });
        Z2(c, { ...a.g, sc: a.sc, format: b });
      }));
  }
  function $2(a, b) {
    a.j.forEach((c) => {
      a3(c, { ...a.g, reason: b3(b) });
    });
  }
  var j3 = class {
    constructor(a, b, c, d) {
      this.J = this.l = 1;
      this.A = this.B = !1;
      this.g = {
        language: a.Ah.has(b) ? b : "other",
        Ua: Tb() ? 2 : Rb() ? 4 : Sb() ? 7 : 10,
      };
      a: switch (d) {
        case 1:
          a = 1;
          break a;
        case 2:
          a = 2;
          break a;
        default:
          a = 0;
      }
      this.sc = a;
      this.D = new Set();
      this.j = [...c];
    }
    Xd() {
      return this.J++;
    }
    ug(a) {
      a: switch (Kh(a, sq)) {
        case 4:
          var b = 1;
          break a;
        case 5:
          b = 2;
          break a;
        default:
          b = 0;
      }
      const c = c3(a);
      var d = qw(Xh(a, 3)),
        e = c.length > 0;
      U2(this, b, !1, e);
      W2(this, d, b, !1, e);
      a.g() && c.length > 0 && P2(this, c, !1);
      if (th(a, hq, 5, sq)) {
        a = bi(a, hq, 5, sq);
        for (const f of Nh(a, cq, 1, wh())) $2(this, f);
      }
      this.l++;
    }
    th(a) {
      const b = a.g() ? 1 : 0,
        c = c3(a);
      var d = qw(Xh(a, 2)),
        e = c.length > 0;
      U2(this, b, !0, e);
      W2(this, d, b, !0, e);
      a.g() && c.length > 0 && P2(this, c, !0);
      this.l++;
    }
    yh() {
      this.j.forEach((a) => {
        d3(a, { ...this.g, format: 2 });
      });
      return this.l++;
    }
    xh() {
      this.j.forEach((a) => {
        e3(a, { ...this.g, format: 2 });
      });
      return this.l++;
    }
    rg() {
      this.j.forEach((a) => {
        d3(a, { ...this.g, format: 1 });
      });
      return this.l++;
    }
    qg() {
      this.j.forEach((a) => {
        e3(a, { ...this.g, format: 1 });
      });
      this.l++;
    }
    Dg() {
      this.j.forEach((a) => {
        d3(a, { ...this.g, format: 3 });
      });
      return this.l++;
    }
    Cg() {
      this.j.forEach((a) => {
        e3(a, { ...this.g, format: 3 });
      });
      return this.l++;
    }
    di() {
      this.j.forEach((a) => {
        d3(a, { ...this.g, format: 4 });
      });
      return this.l++;
    }
    ci() {
      this.j.forEach((a) => {
        e3(a, { ...this.g, format: 4 });
      });
      return this.l++;
    }
    md(a) {
      let b = 0;
      Sh(a, 2) != null
        ? (b = 2)
        : Sh(a, 3) != null
        ? (b = 1)
        : Sh(a, 7) != null && (b = 3);
      this.j.forEach((c) => {
        c.click({ ...this.g, format: b });
      });
      return this.l++;
    }
    Qf(a) {
      let b = 0;
      th(a, Iq, 2, Kq) ? (b = 1) : th(a, Hq, 3, Kq) && (b = 2);
      this.j.forEach((c) => {
        f3(c, { ...this.g, type: b });
      });
      this.l++;
    }
    Tg(a) {
      a: switch (C(a, 1)) {
        case 1:
          a = 1;
          break a;
        case 2:
          a = 2;
          break a;
        default:
          a = 0;
      }
      const b = a;
      this.j.forEach((c) => {
        g3(c, { ...this.g, type: b });
      });
      this.A ||
        ((this.A = !0),
        this.j.forEach((c) => {
          h3(c, this.g);
        }));
      this.l++;
    }
    lg() {
      this.j.forEach((a) => {
        i3(a, this.g);
      });
      this.l++;
    }
    Ig() {
      this.l++;
    }
  };
  function c3(a) {
    a.g() ? ((a = a.j()), (a = [...Nh(a, pq, 2, wh())])) : (a = []);
    return a;
  }
  function b3(a) {
    switch (Kh(a, dq)) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 3:
        return 3;
      case 9:
        return 4;
      case 11:
        return 5;
      case 12:
        return 6;
      case 13:
        return 7;
      default:
        return 0;
    }
  }
  function R2(a) {
    switch (C(a, 1)) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 3:
        return 3;
      case 4:
        return 4;
      default:
        return 0;
    }
  }
  function k3(a, b) {
    var c = new Lq();
    var d = a.l++;
    c = ji(c, 1, d);
    b = ji(c, 2, Math.round(a.B.xa(b) - a.D));
    b = y(b, 10, a.J);
    b = gi(b, 15, a.F ? !0 : void 0);
    return H(b, 18, a.sc);
  }
  var l3 = class {
    constructor(a, b, c, d, e, f, g, h, k) {
      this.B = b;
      this.D = c;
      this.J = d;
      this.F = f;
      this.sc = k;
      this.j = this.l = 1;
      this.A = [...g];
      this.g = h.length ? new j3(e, a, h, k) : null;
    }
    Xd() {
      return this.j++;
    }
    ug(a) {
      this.g?.ug(a);
      var b = this.handle,
        c = k3(this, 11);
      a = z(c, 3, Mq, a);
      b.call(this, a);
    }
    th(a) {
      this.g?.th(a);
      var b = this.handle,
        c = k3(this, 11);
      a = z(c, 14, Mq, a);
      b.call(this, a);
    }
    yh(a) {
      this.g?.yh(a);
      var b = this.handle,
        c = k3(this, 15);
      a = z(c, 4, Mq, a);
      return b.call(this, a);
    }
    xh(a) {
      this.g?.xh(a);
      var b = this.handle,
        c = k3(this, 16);
      a = z(c, 5, Mq, a);
      return b.call(this, a);
    }
    rg(a) {
      this.g?.rg(a);
      var b = this.handle,
        c = k3(this, 17);
      a = z(c, 6, Mq, a);
      return b.call(this, a);
    }
    qg(a) {
      this.g?.qg(a);
      var b = this.handle,
        c = k3(this, 18);
      a = z(c, 7, Mq, a);
      b.call(this, a);
    }
    Dg(a) {
      this.g?.Dg(a);
      var b = this.handle,
        c = k3(this, 19);
      a = z(c, 16, Mq, a);
      return b.call(this, a);
    }
    Cg(a) {
      this.g?.Cg(a);
      var b = this.handle,
        c = k3(this, 20);
      a = z(c, 17, Mq, a);
      return b.call(this, a);
    }
    di(a) {
      this.g?.di(a);
      var b = this.handle,
        c = k3(this, 21);
      a = z(c, 20, Mq, a);
      return b.call(this, a);
    }
    ci(a) {
      this.g?.ci(a);
      var b = this.handle,
        c = k3(this, 22);
      a = z(c, 21, Mq, a);
      return b.call(this, a);
    }
    md(a) {
      this.g?.md(a);
      var b = this.handle,
        c = k3(this, 14);
      a = z(c, 8, Mq, a);
      return b.call(this, a);
    }
    Qf(a) {
      this.g?.Qf(a);
      var b = this.handle,
        c = k3(this, 23);
      a = z(c, 9, Mq, a);
      b.call(this, a);
    }
    Tg(a) {
      this.g?.Tg(a);
      var b = this.handle,
        c = k3(this, 24);
      a = z(c, 11, Mq, a);
      b.call(this, a);
    }
    lg(a) {
      this.g?.lg(a);
      var b = this.handle,
        c = k3(this, 26);
      a = z(c, 12, Mq, a);
      b.call(this, a);
    }
    Ig(a) {
      var b = this.handle,
        c = k3(this, 29);
      a = z(c, 19, Mq, a);
      b.call(this, a);
    }
    handle(a) {
      for (const b of this.A) b(a);
      return qw(Xh(a, 1));
    }
  };
  async function A2(a, b) {
    await new Promise((c) => void a.C.setTimeout(c, 0));
    a.j = a.g.xa(b) + a.l;
  }
  var m3 = class {
    constructor(a, b) {
      var c = U(Ry);
      this.C = a;
      this.g = b;
      this.l = c;
      this.j = b.xa(2) + c;
    }
  };
  function n3(a, b) {
    return a
      ? (a = qX(new uX(a), "__gads", b))
        ? $u(a + "t2Z7mVic") % 20
        : null
      : null;
  }
  function o3(a) {
    return a ? ((a = a.match(/^[a-z]{2,3}/i)) ? a[0].toLowerCase() : "") : "";
  }
  function K1(a, b, c, d, e) {
    c.setTimeout(p3(a, b, d), e);
  }
  function I2(a, b, c, d) {
    c.addEventListener("click", p3(a, b, d));
  }
  function N2(a, b) {
    return new IntersectionObserver(p3(a, 1065, b), { threshold: 0.98 });
  }
  function p3(a, b, c) {
    return a.gb.hc(b, c, void 0, (d) => {
      d.es = a.P.ac.join(",");
    });
  }
  function q3(a, b, c) {
    a = p3(a, 898, c);
    b.addEventListener("scroll", a, { passive: !0 });
    return a;
  }
  var s3 = class {
    constructor(a, b, c, d, e, f, g, h) {
      this.Ga = a;
      this.da = b;
      this.gb = c;
      this.Z = d;
      this.J = e;
      this.params = f;
      this.P = g;
      this.od = h;
      this.D = new Map();
      this.A = new Map();
      this.B = new Map();
      this.g = new Map();
      this.j = new Map();
      this.l = Pa(r3, B(b, 7)) ? 1 : 0;
      for (const k of P_(this.da))
        oi(k, 6) && this.D.set(B(k, 1), B(k, 6)),
          oi(k, 7) && this.A.set(B(k, 1), B(k, 7)),
          oi(k, 5) && this.B.set(B(k, 1), B(k, 5)),
          Bf(w(k, 10)) != null && this.g.set(B(k, 1), C(k, 10)),
          oi(k, 11) && this.j.set(B(k, 1), B(k, 11));
    }
    Ub(a, b, c) {
      a = p3(this, a, c);
      b.addEventListener("message", a);
      return a;
    }
    Sc(a, b, c, d) {
      return b.setInterval(p3(this, a, c), d);
    }
    Sa(a, b) {
      this.gb.Sa(a, b, (c) => {
        c.es = this.P.ac.join(",");
      });
      return b;
    }
    xa(a) {
      return this.J.xa(a);
    }
    la() {
      return C(this.da, 12) === 2;
    }
  };
  const r3 = ["ja", "zh_CN", "zh_TW"];
  function t3(a, b) {
    const c = b.Ga === b.la;
    var d = u3(a, b, c);
    if (!d) return null;
    d = d.position.kf();
    a = v3(a, d, b, function (f) {
      f = f.getBoundingClientRect();
      return c ? b.ea - f.right : f.left;
    });
    if (!a || a - 16 < 200) return null;
    const e = b.ea;
    return { jb: c ? e - a : 16, yb: c ? 16 : e - a, va: d };
  }
  function w3(a, b) {
    const c = Ls(a),
      d = Ms(a);
    return (
      LH(new QH(a), new dl(d - b.va - 50, c - b.yb, d - b.va, b.jb)).size > 0
    );
  }
  function u3(a, b, c) {
    b = Math.floor(b.ia * 0.3);
    return b < 66
      ? null
      : TH(
          a,
          {
            Pd: c ? ZH({ va: 16, yb: 16 }) : XH({ va: 16, jb: 16 }),
            uh: b - 66,
            Zc: 200,
            Bh: 50,
            Cf: b,
            zc: 16,
          },
          [a.document.body]
        ).xg;
  }
  function v3(a, b, c, d) {
    a = c.Ga ? x3(a, b, c) : y3(a, b, c);
    b = c.ea;
    let e = c.Ga ? b : b * 0.35;
    a.forEach((f) => {
      e = Math.min(e, d(f));
    });
    return e < 16 ? null : e - 16;
  }
  function x3(a, b, c) {
    const d = c.ia;
    return LH(new QH(a), new dl(d - b - 50, c.ea - 16, d - b, 16));
  }
  function y3(a, b, c) {
    const d = c.ia,
      e = c.ea;
    c = c.la;
    return LH(
      new QH(a),
      new dl(
        d - b - 50,
        (c ? e * 0.35 : e) - 16,
        d - b,
        (c ? 16 : e * 0.65) + 16
      )
    );
  }
  function z3(a, b, c) {
    const d = a.la;
    return { jb: d ? A3(a, b, c) : c, yb: d ? c : A3(a, b, c), va: 16 };
  }
  function A3(a, b, c) {
    const d = a.ea;
    return a.Ga ? d - b + 16 : Math.max(d - c - d * 0.35, d - b + 16);
  }
  function B3(a, b) {
    const c = b.la,
      d = b.ea;
    return [...(b.Ga ? x3(a, 16, b) : y3(a, 16, b))]
      .map(
        (e) =>
          new SH(
            c
              ? d - e.getBoundingClientRect().right
              : e.getBoundingClientRect().left,
            c
              ? d - e.getBoundingClientRect().left
              : e.getBoundingClientRect().right
          )
      )
      .sort((e, f) => e.start - f.start);
  }
  function C3(a, b, c, d) {
    const e = document.createElement("SPAN");
    xw(a, e);
    e.id = "gda";
    e.appendChild(E1(a, B(b.da, 18)));
    t1(e);
    I2(b, 1064, e, (f) => {
      d?.();
      Vk(c);
      f.preventDefault();
      f.stopImmediatePropagation();
      return !1;
    });
    return e;
  }
  function D3(a, b, c, d, e) {
    const f = document.createElement("SPAN");
    xw(a, f);
    r1(f);
    t(f, {
      position: "absolute",
      top: "2.5px",
      bottom: "2.5px",
      left: (b.la(), "50px"),
      right: b.la() ? "24px" : "12px",
      display: "flex",
      "flex-direction": "row",
      color: "#1A73E8",
      cursor: "pointer",
      transition: "width 5s",
    });
    b.Ga || t(f, { "justify-content": "" });
    const g = C1(a, b.g.get(d.eb) || 0),
      h = document.createElement("SPAN");
    t(h, { display: "inline-block", cursor: "inherit" });
    t(h, {
      "margin-left": b.la() ? "6px" : "4px",
      "margin-right": b.la() ? "4px" : "6px",
      "margin-top": "12px",
    });
    f.appendChild(h);
    h.appendChild(g);
    c.classList?.add("google-anno-sa-qtx", "google-anno-skip");
    c.tabIndex = 0;
    c.role = "link";
    c.ariaLive = "polite";
    E3(c, d.eb, B(b.da, 19));
    t(c, {
      height: "40px",
      "align-items": "center",
      "line-height": "44px",
      "font-size": "16px",
      "font-weight": "400",
      "font-style": "normal",
      "font-family": "Roboto",
      "text-overflow": "ellipsis",
      "white-space": "nowrap",
      overflow: "hidden",
      "-webkit-tap-highlight-color": "transparent",
      color: "#1A73E8",
    });
    t1(f);
    I2(b, 999, f, (k) => {
      k.preventDefault();
      if ((d.ki ?? 0) + 800 <= b.xa(28)) {
        k = d.eb;
        const l = b.A.get(k) || "";
        var m = wq(uq(k), d.ue);
        m = ii(m, 3, d.yf);
        m = b.Z.md(m);
        b.Sa(1401, P1(e, a, b, m, k, l, 2, b.P.Uc ? b.j.get(k) || "" : null));
      }
      return !1;
    });
    f.appendChild(c);
    return f;
  }
  function F3(a, b, c, d, e, f) {
    const g = document.createElement("div");
    xw(a, g);
    g.id = "google-anno-sa";
    g.dir = b.la() ? "rtl" : "ltr";
    g.tabIndex = 0;
    t(g, {
      background: "#FFFFFF",
      "border-style": "solid",
      bottom: `${d.va}px`,
      "border-radius": "16px",
      height: "50px",
      position: "fixed",
      "text-align": "center",
      border: "0px",
      left: `${d.jb}px`,
      right: `${d.yb}px`,
      "box-shadow":
        "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
      "z-index": "1000",
    });
    t(g, { fill: "white" });
    d = document.createElement("SPAN");
    xw(a, d);
    t(d, { cursor: "inherit" });
    g.appendChild(D3(a, b, d, c, f));
    g.appendChild(C3(a, b, g, e));
    return g;
  }
  function G3(a, b, c, d, e) {
    var f = c.getElementsByClassName("google-anno-sa-qtx")[0];
    f instanceof HTMLElement && (f.innerText = a.eb);
    if ((d.g.get(e) || 0) !== (d.g.get(a.eb) || 0)) {
      b = C1(b, d.g.get(a.eb) || 0);
      for (const g of c.getElementsByClassName("google-anno-sa-intent-icon"))
        g.replaceWith(b);
    }
    E3(f, a.eb, B(d.da, 19));
    c = d.Z;
    d = c.rg;
    f = new Wp();
    f = ph(f, 2, cg(a.ue));
    a = mi(f, 4, a.eb);
    return d.call(c, a);
  }
  function H3(a, b, c, d, e) {
    if (w3(b, d)) return null;
    a.ki = c.xa(27);
    d = F3(
      b,
      c,
      a,
      d,
      () => {
        a.g = !0;
        var f = c.Z,
          g = f.lg;
        var h = new Up();
        h = ki(h, 3, a.ue);
        h = mi(h, 2, a.eb);
        g.call(f, h);
      },
      e
    );
    e = G3(a, b, d, c, a.eb);
    b.document.body.appendChild(d);
    return e;
  }
  function I3(a, b, c, d, e, f, g, h) {
    if (!(a.g || (a.eb === e && a.ue === d && a.j === f))) {
      if (a.yf !== null) {
        var k = a.yf,
          m = c.Z,
          l = m.qg,
          n = new Vp();
        k = ji(n, 1, k);
        l.call(m, k);
      }
      m = a.eb;
      a.eb = e;
      a.ue = d;
      a.j = f;
      A(c.da, 17) ||
        ((d = b.document.getElementById("google-anno-sa")),
        (a.yf = d ? G3(a, b, d, c, m) : H3(a, b, c, g, h)));
    }
  }
  var J3 = class {
    constructor() {
      this.eb = "";
      this.ue = null;
      this.j = "";
      this.yf = null;
      this.g = !1;
      this.ki = null;
    }
  };
  function E3(a, b, c) {
    a.ariaLabel = c.replace("TERM", b);
  }
  function K3(a, b, c = null) {
    a.g >= a.l.length && ((a.g = 0), a.A++);
    (a.config.P.Df && a.A >= a.config.P.Df) ||
      ((a.J && c !== null ? c : a.j.g.X)
        ? a.j.xb(() => void K3(a, b, !1))
        : ((c = a.l[a.g++]),
          (a.B = !1),
          I3(a.F, a.C, a.config, c.g, c.searchTerm, c.j, a.D, a.j),
          K1(
            a.config,
            898,
            a.C,
            () => {
              K3(a, b);
            },
            a.Zh
          )));
  }
  var L3 = class {
    constructor(a, b, c, d) {
      var e = new J3();
      this.C = a;
      this.config = b;
      this.F = e;
      this.D = c;
      this.j = d;
      this.l = [];
      this.B = !0;
      this.A = this.g = 0;
      this.Zh = b.params.Zh;
      this.J = this.config.P.mg;
    }
  };
  class M3 {
    constructor(a, b, c) {
      this.g = a;
      this.searchTerm = b;
      this.j = c;
    }
  }
  function N3(a, b, c, d, e, f, g) {
    if (!a.g) {
      var h = b.document.createElement("span");
      h.appendChild(z1(b, "12px", f));
      h.appendChild(b.document.createTextNode(d));
      eJ(
        b,
        c || null,
        { informationText: h },
        e,
        g
          ? (k) => {
              g.Tg(k);
            }
          : g
      );
      a.g = !0;
    }
  }
  var O3 = class {
    constructor() {
      this.g = !1;
    }
  };
  const P3 = ["block", "inline", "inline-block", "list-item", "table-cell"];
  async function Q3(a, b, c, d, e) {
    d.g.xa(5) >= d.j && (await A2(d, 6));
    const f = new Q1();
    c.P.Qg || R3(a, b, c, e, P_(c.da), f);
    (c.P.Rg && !S3(a)) || (await c.Sa(898, x2(a, c, d, e, b, f)));
    c.P.Sg || (await T3(a, c, () => new O3(), d, e, f));
  }
  function S3(a) {
    try {
      const b = a.location?.href?.match(/goog_fac=1/);
      return b !== null && b !== void 0;
    } catch (b) {
      return !1;
    }
  }
  async function T3(a, b, c, d, e, f) {
    var g = P_(b.da);
    var h = new q2(b.l);
    for (const k of g) B(k, 6) !== "" && ((g = B(k, 1)), r2(h, g, g));
    s2(h);
    h = new t2(h);
    h.isEmpty() ||
      (await b.Sa(
        898,
        U3(
          a,
          b,
          d,
          e,
          h,
          new w1(
            b.params.wordWindowSize,
            b.params.sameSearchTermPerWindow,
            b.params.annotationsPerWindow,
            b.params.maximumAnnotationsPerPage
          ),
          c(),
          f
        )
      ));
  }
  async function U3(a, b, c, d, e, f, g, h) {
    let k = a.document.body;
    if (A(b.da, 17) || x(b.da, Lv, 21))
      for (; k; ) {
        c.g.xa(7) >= c.j && (await A2(c, 8));
        if (
          k.nodeType === Node.TEXT_NODE &&
          k.textContent !== "" &&
          k.parentElement
        ) {
          const cc = k.parentElement;
          a: {
            var m = a,
              l = b,
              n = cc,
              p = k.textContent,
              q = d,
              v = e,
              E = f,
              F = h;
            const Ta = [];
            b: {
              var R = p;
              switch (l.l) {
                case 1:
                  var ea = R;
                  const Jc = Array(ea.length);
                  let dc = 0;
                  for (let sc = 0; sc < ea.length; sc++)
                    n2.test(ea[sc]) || dc++, (Jc[sc] = dc);
                  var J = Jc;
                  break b;
                default:
                  var N = R;
                  const Zc = Array(N.length);
                  let td = 0,
                    xb = 0;
                  for (; xb < N.length; ) {
                    for (; /\s/.test(N[xb]); ) (Zc[xb] = td), xb++;
                    let sc = !1;
                    for (; xb < N.length && !/\s/.test(N[xb]); )
                      (sc = !0), (Zc[xb] = td), xb++;
                    sc && (td++, (Zc[xb - 1] = td));
                  }
                  J = Zc;
              }
            }
            const Pb = J,
              ch = p.includes("\u00bb") ? [] : u2(v, p);
            let de = -1;
            for (const Jc of ch) {
              const dc = Jc.l,
                Zc = Jc.B;
              if (dc < de) continue;
              var aa = E,
                db = Jc.searchTerm;
              x1(aa.j, aa.g + Pb[dc]);
              var Wb = aa,
                Aa = Wb.j,
                Ka = db;
              if (
                !(
                  (Aa.g.has(Ka) ? Aa.g.get(Ka).length : 0) <
                    Wb.sameSearchTermPerWindow &&
                  aa.j.l < aa.annotationsPerWindow
                )
              )
                continue;
              const td = m.getComputedStyle(n),
                xb = td.fontSize.match(/\d+/);
              if (
                !(
                  xb &&
                  Number(xb[0]) >= 12 &&
                  Number(xb[0]) <= 22 &&
                  Pa(P3, td.display)
                )
              ) {
                E.g += Pb[Pb.length - 1];
                var Yc = [];
                break a;
              }
              const sc = de + 1;
              sc < dc &&
                Ta.push(m.document.createTextNode(p.substring(sc, dc)));
              const dh = p.substring(dc, Zc + 1);
              var Hc = p,
                Ic = dc,
                Md = Zc + 1;
              const oj =
                Hc.substring(Math.max(Ic - 30, 0), Ic) +
                "~~" +
                Hc.substring(Md, Math.min(Md + 30, Hc.length));
              var ta = m,
                qd = l.Z.Xd(),
                Qe = n,
                Og = dh,
                Pg = oj,
                Qg = Jc.searchTerm,
                Rg = Pb[dc];
              const eh = Qe.getBoundingClientRect();
              var Sg = nq(mq(new pq(), qd), 2);
              var Tg = mi(Sg, 2, Og);
              var Ug = mi(Tg, 3, Pg);
              var Vg = oq(Ug, Qg);
              var Wg = G(Vg, 5, Rg);
              var Xg = G(Wg, 6, Math.round(eh.x));
              var Yg = G(Xg, 7, Math.round(eh.y));
              const ud = ta.getComputedStyle(Qe);
              var bj = new lq();
              var cj = mi(bj, 1, ud.fontFamily);
              var dj = l2(ud.color);
              var ej = y(cj, 7, dj);
              var fj = l2(ud.backgroundColor);
              var gj = y(ej, 8, fj);
              const fh = ud.fontSize.match(/^(\d+(\.\d+)?)px$/);
              var Ef = G(gj, 4, fh ? Math.round(Number(fh[1])) : 0);
              const Jf = Math.round(Number(ud.fontWeight));
              isNaN(Jf) || Jf === 400 || G(Ef, 5, Jf);
              ud.textDecorationLine !== "none" &&
                mi(Ef, 6, ud.textDecorationLine);
              var hj = y(Yg, 8, Ef);
              const Kf = [];
              let ee = Qe;
              for (; ee && Kf.length < 20; ) {
                var Zg = Kf,
                  ij = Zg.push,
                  Ff = ee;
                const hh = iq(new jq(), Ff.tagName);
                Ff.className !== "" && Fh(hh, 2, Ff.className.split(" "), fg);
                ij.call(Zg, hh);
                if (ee.tagName === "BODY") break;
                ee = ee.parentElement;
              }
              var jj = Kf.reverse();
              const gh = Ph(hj, 9, jj);
              q.entries.push(Ng(gh));
              Ta.push(V3(m, l, Uh(gh) ?? "0", Jc.searchTerm, dh, n, F));
              y1(E.j, Jc.searchTerm, E.g + Pb[dc]);
              de = Zc;
              if (u1(E)) break;
            }
            const If = de + 1;
            If !== 0 &&
              If < p.length &&
              Ta.push(m.document.createTextNode(p.substring(If)));
            E.g += Pb[Pb.length - 1];
            Yc = Ta;
          }
          const sd = Yc;
          if (sd.length && !A(b.da, 17)) {
            !b.P.Uc &&
              N3(
                g,
                a,
                b.params.Ei ? n1(a, b.params.Ei) : void 0,
                B(b.da, 3),
                qj(x(b.da, Lv, 21)),
                b.params.dj,
                b.Z
              );
            for (const Ta of sd) cc.insertBefore(Ta, k), W3(Ta);
            cc.removeChild(k);
            if (b.P.Sf)
              for (const Ta of cc.children)
                Ta.classList?.contains("google-anno") &&
                  Ta.firstElementChild &&
                  a2(Ta.firstElementChild) &&
                  Ta.replaceWith(
                    a.document.createTextNode(Ta.textContent?.trimStart() ?? "")
                  );
            for (k = sd[sd.length - 1]; k.lastChild; ) k = k.lastChild;
            if (u1(f)) break;
          }
        }
        a: {
          var kj = a,
            rd = k,
            lj = f,
            mj = b.l,
            Gf;
          if ((Gf = rd.firstChild)) {
            var nj = kj,
              Re = rd;
            Gf =
              PS(Re) &&
              !(
                Re.classList?.contains("google-anno-skip") ||
                (!Re.offsetHeight &&
                  nj.getComputedStyle(Re).display !== "contents")
              );
          }
          if (Gf) {
            if (Z1(rd)) {
              k = rd.firstChild;
              break a;
            }
            if (rd.textContent?.length) {
              var $g = lj;
              b: {
                var ah = rd.textContent;
                switch (mj) {
                  case 1:
                    var Hf = ah;
                    let sd = 0;
                    for (let Pb = Hf.length - 1; Pb >= 0; Pb--)
                      n2.test(Hf[Pb]) || sd++;
                    var bh = sd;
                    break b;
                  default:
                    const Ta = ah.trim();
                    bh = Ta === "" ? 0 : Ta.split(/\s+/).length;
                }
              }
              x1($g.j, $g.g + bh);
            }
          }
          let cc = rd;
          for (;;) {
            if (cc.nextSibling) {
              k = cc.nextSibling;
              break a;
            }
            if (!cc.parentNode) {
              k = null;
              break a;
            }
            cc = cc.parentNode;
          }
          k = void 0;
        }
      }
  }
  function X3(a, b) {
    b = { la: b.la(), Ga: b.Ga, ea: Ls(a), ia: Ms(a) };
    if (b.ia >= 400) {
      var c;
      if ((c = t3(a, b)) != null) var d = c;
      else
        a: {
          c = b.ea;
          var e = B3(a, b);
          a = 16;
          for (d of e) {
            e = d.start;
            const f = d.end;
            if (e > a) {
              if (e - a - 16 >= 200) {
                d = z3(b, e, a);
                break a;
              }
              a = f + 16;
            } else f >= a && (a = f + 16);
          }
          d = c - a - 16 >= 200 ? z3(b, c, a) : null;
        }
    } else d = null;
    return d;
  }
  function R3(a, b, c, d, e, f) {
    function g() {
      return (
        k ??
        (k = c.Sc(
          898,
          a,
          () => {
            if (!h) {
              var l = c.xa(12);
              a.clearInterval(k);
              h = !0;
              var n = X3(a, c);
              n && Y3(a, b, c, d, l, e, n, f);
            }
          },
          c.P.og
        ))
      );
    }
    if (e.filter((l) => B(l, 7).length).length) {
      var h = !1,
        k = void 0,
        m = q3(c, a, () => {
          if (!(a.scrollY <= c.P.pg || h)) {
            var l = c.xa(12),
              n = X3(a, c);
            n
              ? ((h = !0),
                a.removeEventListener("scroll", m),
                Y3(a, b, c, d, l, e, n, f))
              : (k = g());
          }
        });
      K1(
        c,
        898,
        a,
        () => {
          if (!h) {
            var l = c.xa(12),
              n = X3(a, c);
            n ? ((h = !0), Y3(a, b, c, d, l, e, n, f)) : (k = g());
          }
        },
        c.P.ng
      );
    }
  }
  function Y3(a, b, c, d, e, f, g, h) {
    const k = new L3(a, c, g, h);
    f.filter((m) => B(m, 7).length).forEach((m) => {
      var l = c.Z.Xd();
      var n = B(m, 1);
      l = oq(nq(mq(new pq(), l), 1), n);
      d.entries.push(Ng(l));
      l = Uh(l) ?? "0";
      n = B(m, 1);
      m = B(m, 1);
      k.l.push(new M3(l, n, m));
      k.B && K3(k, b);
    });
    c.Z.th(o1(d, c.xa(13) - e));
  }
  function W3(a) {
    if (OS(a)) {
      if (a.tagName === "A") {
        var b = i2(g2(getComputedStyle(a.parentElement).color)),
          c = i2(g2(getComputedStyle(a).color));
        var d = h2(a);
        if (
          (d =
            b && c && d ? (rS(c, d) < Math.min(rS(b, d), 2.5) ? b : null) : b)
        ) {
          b = d[0];
          c = d[1];
          d = d[2];
          b = Number(b);
          c = Number(c);
          d = Number(d);
          if (b != (b & 255) || c != (c & 255) || d != (d & 255))
            throw Error(
              '"(' + b + "," + c + "," + d + '") is not a valid RGB color'
            );
          c = (b << 16) | (c << 8) | d;
          b =
            b < 16
              ? "#" + (16777216 | c).toString(16).slice(1)
              : "#" + c.toString(16);
          t(a, { color: b });
        }
      }
      for (b = 0; b < a.childElementCount; b++) W3(a.children[b]);
    }
  }
  class Z3 {
    constructor() {
      this.j = this.g = null;
    }
    get l() {
      return this.g;
    }
  }
  function V3(a, b, c, d, e, f, g) {
    const h = a.document.createElement("SPAN");
    h.className = "google-anno-t";
    r1(h);
    t(h, { "text-decoration": "underline" });
    t(h, { "text-decoration-style": "dotted" });
    t(h, {
      "-webkit-text-decoration-line": "underline",
      "-webkit-text-decoration-style": "dotted",
    });
    t(h, {
      color: "inherit",
      "font-family": "inherit",
      "font-size": "inherit",
      "font-style": "inherit",
      "font-weight": "inherit",
    });
    h.appendChild(a.document.createTextNode(e));
    e = a.document.createElement("A");
    r1(e);
    t(e, { "text-decoration": "none", fill: "currentColor" });
    Dc(e, "#");
    e.className = "google-anno";
    t1(e);
    e.appendChild($3(a, b, f));
    e.appendChild(a.document.createTextNode("\u00a0"));
    e.appendChild(h);
    const k = a4(b, c, e, a);
    I2(b, 999, e, (m) => {
      try {
        var l = wq(uq(d), c);
        var n = ii(l, 2, k.l);
        const p = b.Z.md(n);
        b.Sa(
          1401,
          P1(
            g,
            a,
            b,
            p,
            d,
            b.D.get(d) || "",
            1,
            b.P.Uc ? b.j.get(d) || "" : null
          )
        );
        return !1;
      } finally {
        m.preventDefault(), m.stopImmediatePropagation();
      }
    });
    return e;
  }
  function $3(a, b, c) {
    return z1(a, a.getComputedStyle(c).fontSize, b.params.dj);
  }
  function a4(a, b, c, d) {
    const e = new Z3();
    N2(a, (f) => {
      for (const l of f)
        if (l.isIntersecting)
          if (
            a.P.Sf &&
            c.classList?.contains("google-anno") &&
            e.l === null &&
            c.firstElementChild &&
            a2(c.firstElementChild)
          )
            c.replaceWith(
              d.document.createTextNode(c.textContent?.trimStart() ?? "")
            );
          else {
            var g = e,
              h = a.Z;
            f = b;
            if (!g.g) {
              var k = h.yh,
                m = new Gq();
              f = ki(m, 2, f);
              g.g = k.call(h, f);
            }
          }
        else
          e.g &&
            !e.j &&
            ((f = a.Z),
            (g = f.xh),
            (h = new Fq()),
            (h = ji(h, 1, e.g)),
            (e.j = g.call(f, h)));
    }).observe(c);
    return e;
  }
  const b4 = new Map([
    [1, 1],
    [2, 2],
  ]);
  async function c4(a, b, c, d, e, f, g, h) {
    var k = AC,
      m = n3(a, h) ?? Math.floor(Id() * 20),
      l = f.xa(0),
      n = !!a && Ls(a) < 488;
    h = c.da;
    var p = o3(B(h, 7));
    m = Dq(Bq(m), c.P.ac);
    d = new l3(p, f, l, m, c.P, A(h, 17), d, e, c.sc);
    e = new s3(n, h, k, d, f, c.params, c.P, c.od);
    k = new p1();
    k.language = p;
    g = await d4(a, b, e, g, k);
    b = d.ug;
    p = c.Wb;
    a = a?.location?.hostname || "";
    c = c.mf;
    f = f.xa(11) - l;
    l = new tq();
    e = new Xp();
    p = mi(e, 1, p);
    a = mi(p, 2, a);
    n = D(a, 3, n);
    n = y(l, 1, n);
    l = new Yp();
    l = mi(l, 2, k.language);
    c = mi(l, 3, c);
    n = y(n, 2, c);
    n = ji(n, 3, Math.round(f));
    p = P_(h);
    h = f = c = l = a = 0;
    for (q of p)
      (a += q1(B(q, 6) !== "") + q1(B(q, 7) !== "") + q1(B(q, 5) !== "")),
        (l += q1(B(q, 6) !== "") + q1(B(q, 7) !== "") + q1(B(q, 5) !== "")),
        (c += q1(B(q, 6) !== "")),
        (f += q1(B(q, 7) !== "")),
        (h += q1(B(q, 5) !== ""));
    var q = new rq();
    q = hi(q, 1, p.length);
    q = hi(q, 2, a);
    q = ph(q, 3, l == null ? l : Lf(l));
    q = ph(q, 4, c == null ? c : Lf(c));
    q = ph(q, 5, f == null ? f : Lf(f));
    q = hi(q, 6, h);
    q = y(n, 6, q);
    if (g.length) {
      var v = new hq();
      v = Ph(v, 1, g);
      z(q, 5, sq, v);
    } else {
      k.g = k.entries.length;
      g = new qq();
      c = k.entries;
      kh(g);
      k = g.ba;
      h = Mh(g, k, k[u] | 0, pq, 2, 2, void 0, !0);
      f = n = 0;
      if (Array.isArray(c))
        for (v = c.length, l = 0; l < v; l++)
          (a = c[l]),
            h.push(a),
            (a = Ve(a)) && !n++ && (h[u] &= -9),
            a || f++ || Oe(h, 4096);
      else
        for (v of c)
          (c = v),
            h.push(c),
            (c = Ve(c)) && !n++ && (h[u] &= -9),
            c || f++ || Oe(h, 4096);
      f && lh(k);
      z(q, 4, sq, g);
    }
    b.call(d, q);
  }
  async function d4(a, b, c, d, e) {
    if (!a) return [eq()];
    var f = a.document.body;
    if (!f || !e4(f)) return [bq()];
    d.g.xa(3) >= d.j && (await A2(d, 4));
    f = [];
    ((c.P.If && Ls(a) < c.P.If) || (c.P.Hf && Ms(a) < c.P.Hf)) && f.push(bq());
    if (ai(c.da, 1).length) {
      const g = ai(c.da, 1).map((h) => b4.get(h) ?? 0);
      f.push(gq(new cq(), Zp(g)));
    }
    Nd() && f.push(fq());
    f.length || (await Q3(a, b, c, d, e));
    return f;
  }
  function e4(a) {
    try {
      new ResizeObserver(() => {}).disconnect();
    } catch {
      return !1;
    }
    return (
      a.classList &&
      a.classList.contains !== void 0 &&
      a.attachShadow !== void 0
    );
  }
  async function f4(a, b, c, d, e, f, g) {
    const h = a.performance?.now ? new R1(a.performance) : new S1(),
      k = new m3(a, h);
    if (typeof e !== "string") throw Error(`Invalid config string ${e}`);
    e = X0(e);
    var m = Lh(e, Q_, 1),
      l = c.google_ad_client;
    if (typeof l !== "string") throw new xC(`Invalid property code ${l}`);
    if (!B(e, 5) || l === B(e, 5)) {
      c = g4(c);
      l = C(e, 4) === 2 ? new h1(l, VW(a), je(a), c) : new b1(l);
      a = ZJ();
      m = h4(m);
      var n = j1(b) || Lh(e, Q_, 1),
        p = C(e, 4);
      var q = e.ba;
      q = Mh(e, q, q[u] | 0, Sv, 3, 1);
      g = {
        da: n,
        Wb: c,
        mf: g,
        params: k1(p, q),
        sc: l1(C(e, 4)),
        P: new Z0({
          ...m1(m),
          Qg: T(dy),
          Sg: T(fy),
          og: U(Oy),
          ng: U(Ny),
          pg: U(Py),
          Df: U(Wy),
          Rg: T(ey),
          Uc: C(e, 4) === 2,
          mh: T(py),
          wh: U(Xy),
          Bf: U(qy),
          vj: T(zy),
          Gf: U(gz),
          Id: U(az),
          Rf: T(By),
          Sf: T(Cy),
          Ic: U(ty),
          Se: T(by),
          hh: U(oy),
          Eb: U(ry),
          Nh: T(Ay),
          Xg: T(jy),
          Bg: T(ay),
          mg: T(Fy),
          Ye: T(hy),
        }),
        od: l,
      };
      await i4(b, d, a, g, h, k, f);
    }
  }
  async function j4(a, b, c, d, e, f, g) {
    var h = a.performance?.now ? new R1(a.performance) : new S1(),
      k = c.google_ad_client;
    if (typeof k !== "string") throw new xC(`Invalid property code ${k}`);
    if (!B(d, 2) || k === B(d, 2)) {
      c = g4(c);
      k = i1(b, d, c, f, h4(Lh(d, Q_, 1)), new h1(k, VW(a), je(a), c));
      d = k.da;
      f = new Set();
      for (var m of P_(d).filter((l) => B(l, 5))) f.add(B(m, 1));
      m = o3(B(d, 7));
      c = ZJ();
      e = new l3(
        m,
        h,
        h.xa(0),
        Dq(Bq(n3(b, e) ?? Math.floor(Id() * 20)), k.P.ac),
        k.P,
        A(d, 17),
        k4(c, h, d),
        [new l4(c, d)],
        1
      );
      b = !!b && Ls(b) < 488;
      h = new s3(b, d, AC, e, h, k.params, k.P, k.od);
      b = new p1();
      b.language = m;
      e = s1(a, "div");
      e.className = "goog-rtopics";
      e.append(document.createTextNode(B(d, 2)));
      e.ariaLabel = B(d, 4);
      e.tabIndex = 0;
      t(e, {
        "font-family": "Google Sans Text",
        "font-size": "16px",
        "font-weight": "500",
        "line-height": "24px",
        "letter-spacing": "0%",
        color: "#5F6368",
        "text-align": "center",
        "border-radius": "5px",
        "padding-left": "5px",
        "padding-right": "5px",
        "padding-top": "2px",
        "padding-bottom": "2px",
        background: "#FFFFFF",
      });
      g.appendChild(e);
      await h.Sa(898, K2(a, f, h, b, g));
    }
  }
  function k4(a, b, c) {
    return [
      (d) => {
        AC.Sa(1214, kK(a, d, b.xa(25)), (e) => {
          e.es = h4(c);
        });
      },
    ];
  }
  function h4(a) {
    if (T(uy))
      return (
        (a = [42, ...vs(), ...Uz(Gy).map(Number), ...(a?.g() ?? [])].filter(
          (c) => c > 0
        )),
        [...new Set(a)].sort((c, d) => c - d)
      );
    const b = vs();
    a && b.push(...a.g());
    b.push(...Uz(Gy).map(Number));
    b.push(42);
    b.sort((c, d) => c - d);
    return b;
  }
  async function i4(a, b, c, d, e, f, g) {
    if (a) {
      const h = KE(a);
      if (h.wasReactiveAdConfigReceived[42]) return;
      h.wasReactiveAdConfigReceived[42] = !0;
    }
    await c4(a, b, d, k4(c, e, d.da), [new l4(c, d.da)], e, f, g);
  }
  function X2(a, b) {
    m4(a, (c) => c.jk, { na: 1, ...b });
  }
  function Y2(a, b) {
    m4(a, (c) => c.ul, { na: 1, ...b });
  }
  function Z2(a, b) {
    m4(a, (c) => c.vl, { na: 1, ...b });
  }
  function V2(a, b) {
    m4(a, (c) => c.kk, { na: 1, ...b });
  }
  function a3(a, b) {
    m4(a, (c) => c.lk, { na: 1, ...b });
  }
  function d3(a, b) {
    m4(a, (c) => c.nk, { na: 1, ...b });
  }
  function e3(a, b) {
    m4(a, (c) => c.mk, { na: 1, ...b });
  }
  function f3(a, b) {
    m4(a, (c) => c.Dm, { na: 1, ...b });
  }
  function g3(a, b) {
    m4(a, (c) => c.Vk, { na: 1, ...b });
  }
  function h3(a, b) {
    m4(a, (c) => c.Uk, { na: 1, ...b });
  }
  function i3(a, b) {
    m4(a, (c) => c.ik, { na: 1, ...b });
  }
  function m4(a, b, c) {
    a.ka &&
      a.gb.Sa(1214, lK(a.ka, b, c), (d) => {
        d.es = h4(a.g);
      });
  }
  function n4(a, b, c) {
    a.ka &&
      a.gb.Sa(1214, mK(a.ka, b, c), (d) => {
        d.es = h4(a.g);
      });
  }
  class l4 {
    constructor(a, b) {
      var c = AC;
      this.ka = a;
      this.gb = c;
      this.g = b;
    }
    tg(a, b) {
      n4(this, (c) => c.tg, { Pc: a, ...b });
    }
    vg(a, b) {
      m4(this, (c) => c.vg, { na: a, ...b });
    }
    click(a) {
      m4(this, (b) => b.Hk, { na: 1, ...a });
    }
  }
  function g4(a) {
    a = a.google_page_url;
    return typeof a === "string" ? a : "";
  }
  function o4(a, b, c, d, e, f, g) {
    return new p4(a, b, c, d, e, f, g);
  }
  function U_(a, b) {
    const c = a.j.getBoundingClientRect(),
      d = document.createElement("div");
    t(d, {
      width: `${c.width}px`,
      display: "flex",
      "flex-wrap": "wrap",
      "justify-content": "center",
      "align-items": "center",
      "align-content": "center",
      gap: "10px",
      "font-size": "initial",
    });
    c.bottom < 0 || c.top >= window.innerHeight
      ? (t(d, { height: "auto", "max-height": `${a.j.offsetHeight}px` }),
        t(a.j.parentElement, { height: "auto" }),
        t(a.j.parentElement.parentElement, {
          height: "auto",
          "background-color": "transparent",
        }))
      : t(d, { height: `${c.height}px` });
    a.j.parentElement.replaceChild(d, a.j);
    j4(a.pubWin, a.l, a.G, b, a.O, a.mf, d);
  }
  function q4(a, b) {
    b = jt(b);
    b.r_affa &&
      b.r_affa !== "" &&
      ((b = T_(b.r_affa)),
      P_(Lh(b, Q_, 1)).filter((c) => B(c, 5)).length >= U(Ey) && U_(a, b));
  }
  var p4 = class extends D_ {
    constructor(a, b, c, d, e, f, g) {
      super(a, b);
      this.G = c;
      this.pubWin = d;
      this.ha = e;
      this.O = f;
      this.mf = g;
    }
    V(a) {
      a["unfill-fb"] = (b) => {
        q4(this, b);
      };
    }
  };
  var r4 = Y(
    function (a, b, c, d, e, f, g, h) {
      const k = a.ga;
      var m = a.La;
      const l = a.Da;
      a = a.O;
      if (c && m) {
        if (!(m = T(iy)))
          try {
            m = !!c?.location?.hash?.match(/\bgoog_uffb/);
          } catch (n) {
            m = !1;
          }
        (b = m
          ? o4(c, k, d, b, e, a, (T(Ez) ? g.gd : lU(qU(f))) || B(h, 8))
          : null) && l(b);
        return { tc: b };
      }
      return { tc: null };
    },
    { id: 1422, I: { tc: void 0 } }
  );
  function s4(a, b) {
    return new IntersectionObserver(b, a);
  }
  function t4(a, b, c) {
    wl(a, b, c);
    return () => xl(a, b, c);
  }
  let u4 = null;
  function v4() {
    u4 = Cn();
  }
  function w4(a, b) {
    return b
      ? u4 === null
        ? (wl(a, "mousemove", v4, { passive: !0 }),
          wl(a, "scroll", v4, { passive: !0 }),
          v4(),
          !1)
        : Cn() - u4 >= b * 1e3
      : !1;
  }
  function x4({
    C: a,
    element: b,
    en: c,
    Xm: d,
    Wm: e = 0,
    Bb: f,
    gl: g,
    options: h = {},
    dm: k = !0,
    Rq: m = s4,
  }) {
    let l,
      n = !1,
      p = !1;
    const q = [],
      v = m(h, (E, F) => {
        try {
          const R = () => {
            q.length ||
              (d &&
                (q.push(
                  t4(b, "mouseenter", () => {
                    n = !0;
                    R();
                  })
                ),
                q.push(
                  t4(b, "mouseleave", () => {
                    n = !1;
                    R();
                  })
                )),
              q.push(t4(a.document, "visibilitychange", () => R())));
            const ea = w4(a, e),
              J = AU(a.document);
            if (p && !n && !ea && !J)
              l =
                l ||
                a.setTimeout(() => {
                  w4(a, e) ? R() : (f(), F.disconnect());
                }, c * 1e3);
            else if (k || n || ea || J) a.clearTimeout(l), (l = void 0);
          };
          ({ isIntersecting: p } = E[E.length - 1]);
          R();
        } catch (R) {
          g && g(R);
        }
      });
    v.observe(b);
    return () => {
      v.disconnect();
      for (const E of q) E();
      l != null && a.clearTimeout(l);
    };
  }
  function y4(a, b, c, d, e) {
    return new z4(a, b, c, d, e);
  }
  function A4(a, b, c) {
    const d = a.j,
      e = a.F;
    if (
      e != null &&
      d != null &&
      gt(c, d.contentWindow) &&
      ((b = b.config), typeof b === "string")
    ) {
      try {
        var f = JSON.parse(b);
        if (!Array.isArray(f)) return;
        a.A = rj(Bm, f);
      } catch (g) {
        return;
      }
      a.dispose();
      f = Wh(a.A, 1);
      f <= 0 ||
        (a.D = x4({
          C: a.l,
          element: e,
          en: f - 0.2,
          Xm: !Ub(),
          Wm: Wh(a.A, 3),
          Bb: () => void B4(a, e),
          gl: (g) => ys.ma(1223, g, void 0, void 0),
          options: { threshold: Yh(a.A, 2, 1) },
          dm: !0,
        }));
    }
  }
  function B4(a, b) {
    a.H();
    setTimeout(
      ys.hc(1224, () => {
        var c = Number(a.G.rc);
        a.G.rc = c ? c + 1 : 1;
        c = b.parentElement || null;
        (c && wA.test(c.className)) ||
          ((c = Uk(document, "INS")),
          (c.className = "adsbygoogle"),
          b.parentNode && b.parentNode.insertBefore(c, b.nextSibling));
        T(Qx)
          ? (C4(a, c, b),
            (a.G.no_resize = !0),
            Nt(yL(c), "filled", () => {
              Vk(b);
            }))
          : Vk(b);
        lV(c, a.G, a.l);
      }),
      200
    );
  }
  function C4(a, b, c) {
    a.l.getComputedStyle(b).position === "static" &&
      (b.style.position = "relative");
    c.style.position = "absolute";
    c.style.top = "0";
    c.style.left = "0";
    delete b.dataset.adsbygoogleStatus;
    delete b.dataset.adStatus;
    b.classList.remove("adsbygoogle-noablate");
  }
  var z4 = class extends D_ {
    constructor(a, b, c, d, e) {
      super(a, b);
      this.G = c;
      this.F = d;
      this.H = e;
      this.A = this.D = null;
      (b = (b = b.contentWindow) && b.parent) &&
        a !== b &&
        this.ca.push(sS(b, "sth", this.Aa, this.Vd));
    }
    V(a) {
      a.av_ref = (b, c) => {
        A4(this, b, c);
      };
    }
    g() {
      super.g();
      this.F = null;
      this.D && this.D();
    }
  };
  var D4 = Y(
    function (a, b, c, d, e) {
      const f = a.ga,
        g = a.La,
        h = a.Da,
        k = a.Re;
      b &&
        g &&
        b.IntersectionObserver &&
        h(
          y4(
            b,
            f,
            c,
            d,
            EC(1225, () => {
              k();
              for (const m of e) m();
              e.length = 0;
            })
          )
        );
      return {};
    },
    { id: 1421, I: {} }
  );
  var E4 = class extends qZ {
    constructor(a, b, c, d, e) {
      super(a);
      a = X(Z(this, H_, { ga: d }, b.M, b.G, b.ha), e);
      e = X(Z(this, N_, { ga: d }, b), a.finished);
      var f = X(Z(this, I_, { ga: d, O: c }, b.pubWin, b.ha), e.finished);
      f = X(
        Z(
          this,
          r4,
          { ga: d, La: a.La, Da: a.Da, O: c },
          b.pubWin,
          b.M,
          b.G,
          b.ha,
          b.pageState,
          b.pageStateTs,
          b.ja
        ),
        f.finished
      );
      f = X(
        Z(this, W_, { ga: d, La: a.La, Da: a.Da, tc: f.tc }, b.M, b.G, b.W),
        f.finished
      );
      f = X(Z(this, U0, { ga: d, La: a.La, Da: a.Da }, b), f.finished);
      f = X(Z(this, L_, { ga: d, La: a.La, Da: a.Da }, b.M, b.W), f.finished);
      e = X(
        Z(
          this,
          D4,
          { ga: d, La: a.La, Da: a.Da, Re: e.Re },
          b.M,
          b.G,
          b.W,
          b.ha
        ),
        f.finished
      );
      c = X(
        Z(this, G_, { ga: d, Da: a.Da, O: c }, b.M, b.pageState, b.pageStateTs),
        e.finished
      );
      c = X(Z(this, O0, { ga: d }, b.M, b.G, b.ha, b.ja), c.finished);
      this.A = X(Z(this, t_, { ga: d }, b.M, b.W, b.ha), c.finished).finished;
    }
  };
  var F4 = Y(
    function (a, b, c) {
      const d = Sm(b);
      if (d)
        if (d.container === "AMP-STICKY-AD") {
          const e = (f) => {
            f.data === "fill_sticky" && d.renderStart?.();
          };
          wl(b, "message", EC(616, e));
          c.push(() => {
            xl(b, "message", e);
          });
        } else d.renderStart?.();
      return {};
    },
    { id: 1419, I: {} }
  );
  var G4 = Y(
    function (a) {
      const b = a.ga;
      a = a.Kc;
      const c = () => {
        yl(b);
      };
      a ? a.then(c) : wl(b, "load", c);
      return {};
    },
    { id: 1416, I: {} }
  );
  var H4 = class extends O {
    constructor(a, b) {
      super();
      this.value = a;
      Ct(this, b);
    }
  };
  function I4(a, b) {
    const c = J4(a.getBoundingClientRect()),
      d = new P(c),
      e = K4(a, b, (f) => {
        d.g(J4(f.boundingClientRect));
      });
    return new H4(Jt(d), () => void e.disconnect());
  }
  function K4(a, b, c) {
    b = new IntersectionObserver(
      (d) => {
        d.filter((e) => e.target === a).forEach(c);
      },
      { root: b }
    );
    b.observe(a);
    return b;
  }
  function J4(a) {
    return a.height > 0 || a.width > 0;
  }
  var L4 = {
    wp: 0,
    Dq: 1,
    hq: 2,
    0: "INITIAL_RENDER",
    1: "UNRENDER",
    2: "RENDER_BACK",
  };
  function M4(a, b, c) {
    var d = [1, 2];
    const e = I4(b, c),
      f = e.value,
      g = new Vt();
    Nt(f, !0, () => void N4(a, f, g, d));
    return new H4(St(g), () => void e.dispose());
  }
  function N4(a, b, c, d) {
    const e = new qT(a);
    let f = new qT(a);
    e.start();
    f.start();
    let g = 0;
    const h = (k) => {
      k = { type: k, oj: ++g, gm: oT(f), fm: oT(e) };
      f = new qT(a);
      f.start();
      return k;
    };
    (d && !d.includes(0)) || Ut(c, h(0));
    b.listen((k) => {
      k = k ? 2 : 1;
      (d && !d.includes(k)) || Ut(c, h(k));
    });
  }
  function O4(a, b) {
    var c = ZJ();
    DC(1282, () => void P4(a, b, c));
  }
  function P4(a, b, c) {
    const d = Q4(a);
    if (!d) throw Error("No adsbygoogle INS found");
    const e = M4(a.pubWin, b, d);
    e.value.listen((f) => {
      R4(f, d, c, () => void e.dispose());
    });
  }
  function Q4(a) {
    return (a = a.W.parentElement) && wA.test(a.className) ? a : null;
  }
  function R4(a, b, c, d) {
    if (a.oj > 5) d();
    else {
      var e = a.type === 1;
      d = a.type === 2;
      if (!e && !d) throw Error(`Unsupported event type: ${L4[a.type]}`);
      var f = $i(SS());
      f = ii(f, 1, a.gm);
      f = ii(f, 2, a.fm);
      a = ii(f, 3, a.oj);
      f = b.dataset.vignetteLoaded;
      var g = $i(QS());
      g = li(g, 1, b.dataset.adStatus);
      g = li(g, 2, b.dataset.sideRailStatus);
      g = li(g, 3, b.dataset.anchorStatus);
      f = gi(g, 4, f !== void 0 ? f === "true" : void 0);
      b = getComputedStyle(b);
      g = $i(TS());
      g = li(g, 1, b.display);
      g = li(g, 2, b.position);
      g = li(g, 3, b.width);
      b = li(g, 4, b.height);
      b = ih(b);
      b = y(f, 5, b);
      b = ih(b);
      a = y(a, 4, b);
      e = e ? US() : void 0;
      e = z(a, 5, xo, e);
      d = d ? RS() : void 0;
      d = z(e, 6, xo, d);
      d = qj($i(ih(d)));
      pK(c, d);
    }
  }
  var S4 = Y(
    function (a, b) {
      a = a.ga;
      T(Ww) && O4(b, a);
      return {};
    },
    { id: 1420, I: {} }
  );
  const T4 = NZ(
    function (a) {
      const b = !a.pa && a.Pa;
      return a.ta ? b && a.yd : b;
    },
    { id: 1460 }
  );
  var U4 = class extends KZ {
    constructor(a, b, c, d, e, f, g, h) {
      super(a);
      this.ka = a;
      this.A = h;
      this.V = new SV();
      this.pa = g.pa;
      this.Pa = g.Pa;
      g = f.zd;
      f = f.ql;
      ({ ga: b } = Z(this, TZ, { ta: this.A.ta, ml: this.A.xd, ln: b }));
      g = X(
        X(
          Z(
            this,
            q_,
            { O: e },
            d.G,
            d.pubWin,
            d.pageState,
            d.pageStateTs,
            d.ja
          ),
          g
        ),
        f
      );
      f = Z(this, n_, { ga: b }, d.G, d.pubWin, d.W);
      X(f, g.finished);
      g = Z(this, G4, { ga: b, Kc: this.A.Kc });
      X(g, f.finished);
      a = oZ(this, new E4(a, d, e, b, g.finished));
      c = Z(this, SZ, { ga: b, uc: c }, d.G, d.W);
      X(c, a.A);
      a = Z(this, F4, {}, d.pubWin, d.ha);
      X(a, c.finished);
      d = Z(this, S4, { ga: b }, d);
      X(d, a.finished);
      this.V = d.finished;
    }
    async D() {
      return LZ(this.ka, T4, {
        pa: this.pa,
        Pa: this.Pa,
        ta: this.A.ta,
        yd: this.A.yd,
      });
    }
    F() {
      this.V.notify();
    }
  };
  function V4(a, b) {
    b.allow = b.allow && b.allow.length > 0 ? b.allow + ("; " + a) : a;
  }
  function W4(a) {
    const b = Gd("IFRAME");
    Jd(a, (c, d) => {
      c != null && b.setAttribute(d, c);
    });
    return b;
  }
  var X4 = Y(
    function (a, b) {
      a = a.nb;
      gX("attribution-reporting", b) && V4("attribution-reporting", a);
      gX("run-ad-auction", b) && V4("run-ad-auction", a);
      return { wb: a };
    },
    { id: 1380, I: { wb: void 0 } }
  );
  function Y4(a, b, c, d) {
    if ((a = hX("browsing-topics", a.document)))
      a =
        !c.google_restrict_data_processing &&
        c.google_tag_for_under_age_of_consent !== 1 &&
        c.google_tag_for_child_directed_treatment !== 1 &&
        !!b.aa() &&
        !NJ() &&
        !A(b, 9) &&
        !A(b, 13) &&
        !A(b, 12) &&
        (typeof c.google_privacy_treatments !== "string" ||
          !c.google_privacy_treatments
            .split(",")
            .includes("disablePersonalization")) &&
        !A(b, 14) &&
        !A(b, 16);
    if ((b = a && !T(Dz)))
      (d = d?.label), (b = !(T(vz) && d && d.match(Sz(tz))));
    return b;
  }
  var Z4 = Y(
    function (a, b, c) {
      const d = a.sf;
      var e = c.google_async_iframe_id;
      const f = c.google_ad_width,
        g = c.google_ad_height,
        h = pV(c);
      e = { id: e, name: e };
      Y4(b, a.O, c, a.cookieDeprecationLabel) && (e.browsingTopics = "true");
      h
        ? T(bx)
          ? (e.style = `width:${f}px !IMPORTANT;height:${g}px !IMPORTANT;`)
          : (e.style = [
              `width:${f}px !IMPORTANT`,
              `height:${g}px !IMPORTANT`,
            ].join(";"))
        : (e.style =
            "left:0;position:absolute;top:0;border:0;" +
            `width:${f}px;` +
            `height:${g}px;`);
      T(bx) &&
        (e.style +=
          "min-height:auto;max-height:none;min-width:auto;max-width:none;");
      Wd() &&
        (e.sandbox = Ud([
          "allow-top-navigation",
          "allow-modals",
          "allow-orientation-lock",
          "allow-presentation",
          "allow-pointer-lock",
        ]).join(" "));
      c.google_video_play_muted === !1 && V4("autoplay", e);
      return { nb: e, adUrl: d, Lb: h };
    },
    { id: 1346, I: { nb: void 0, adUrl: void 0, Lb: void 0 } }
  );
  function $4(a, b, c, d, e, f) {
    const g = d.M,
      h = d.pubWin;
    return a.google_reactive_ad_format === 9 && $k(e, null, "fsi_container")
      ? (e.appendChild(f), Promise.resolve(f))
      : kV(b.yj, 525, (k) => {
          e.appendChild(f);
          k.createAdSlot(g, a, f, e.parentElement, pj(c), h);
          return f;
        });
  }
  var a5 = kZ(
    async function (a, b) {
      const c = a.ke,
        d = a.O;
      if (!a.Lb) return null;
      const e = b.G;
      var f = b.Ke;
      const g = b.W;
      b = b.ua;
      const h = f.M;
      f = f.pubWin;
      c.src = a.Fa;
      a = W4(c);
      return $4(e, b, d, { M: h, pubWin: f }, g, a);
    },
    { id: 1396 }
  );
  var b5 = Y(
    function (a, b) {
      var c = a.ke;
      if (a.Lb) return { Wc: null };
      const d = b.W;
      var e = b.ha;
      b = b.Ke.pubWin;
      a = a.Fa;
      const f = {};
      f.dtd = IW(new Date().getTime(), Bs);
      a = ln(f, a);
      c.src = a;
      a = b == b.top;
      c = W4(c);
      a && e.push(jn(b, c));
      for (d.style.visibility = "visible"; (e = d.firstChild); )
        d.removeChild(e);
      d.appendChild(c);
      return { Wc: c };
    },
    { id: 1397, I: { Wc: void 0 } }
  );
  var c5 = Y(
    function (a, b, c, d) {
      if (!b.rpe) return {};
      nY(
        new xY(
          c,
          d,
          void 0,
          {
            height: b.google_ad_height,
            Yh: "force",
            Ne: !0,
            Ph: !0,
            gg: b.google_ad_client,
          },
          null,
          null,
          !0
        )
      );
      return {};
    },
    { id: 1398, I: {} }
  );
  var d5 = Y(
    function (a) {
      const b = a.xj;
      return b ? { Le: b } : { Le: a.Wc };
    },
    { id: 1402, I: { Le: void 0 } }
  );
  var e5 = Y(
    function (a, b) {
      a = a.nb;
      T(kz) &&
        b.credentialless !== void 0 &&
        (T(lz) || b.crossOriginIsolated) &&
        (a.credentialless = "true");
      return { wb: a };
    },
    { id: 1372, I: { wb: void 0 } }
  );
  var f5 = Y(
    function (a, b) {
      a = a.nb;
      const c = b.google_ad_width;
      b = b.google_ad_height;
      c != null && (a.width = String(c));
      b != null && (a.height = String(b));
      a.frameborder = "0";
      a.marginwidth = "0";
      a.marginheight = "0";
      a.vspace = "0";
      a.hspace = "0";
      a.allowtransparency = "true";
      a.scrolling = "no";
      return { wb: a };
    },
    { id: 1373, I: { wb: void 0 } }
  );
  const g5 = NZ(
    function (a) {
      return !a.pa && a.Pa && !a.ta;
    },
    { id: 1461 }
  );
  var h5 = class extends KZ {
    constructor(a, b, c, d, e, f, g, h, k) {
      super(a);
      this.ka = a;
      this.pa = g;
      this.Pa = h;
      this.ta = k;
      const {
        nb: m,
        adUrl: l,
        Lb: n,
      } = Z(
        this,
        Z4,
        { sf: b, O: d, cookieDeprecationLabel: f },
        c.pubWin,
        c.G
      );
      ({ wb: a } = Z(this, f5, { nb: m }, c.G));
      ({ wb: a } = Z(this, X4, { nb: a }, e.document));
      ({ wb: e } = Z(this, e5, { nb: a }, e));
      d = nZ(
        this,
        a5,
        { ke: e, Fa: l, Lb: n, O: d },
        { G: c.G, Ke: { pubWin: c.pubWin, M: c.M }, W: c.W, ua: c.ua, ha: c.ha }
      );
      e = Z(
        this,
        b5,
        { ke: e, Fa: l, Lb: n },
        { G: c.G, Ke: { pubWin: c.pubWin, M: c.M }, W: c.W, ua: c.ua, ha: c.ha }
      );
      d = Z(this, d5, { xj: d.output, Wc: e.Wc });
      this.A = d.Le;
      c = Z(this, c5, {}, c.G, c.pubWin, c.W);
      X(c, d.finished);
      this.zd = c.finished;
    }
    async D() {
      return LZ(this.ka, g5, { ta: this.ta, pa: this.pa, Pa: this.Pa });
    }
    F() {
      this.zd.notify();
      JV(this.A, null);
    }
  };
  var i5 = Y(
    function (a) {
      if (!a.R) return {};
      var b = a.Qa.Vm;
      b && ((a = a.R), (b = id(b)), (a.srcdoc = Kc(b)));
      return {};
    },
    { id: 1455, I: {} }
  );
  var j5 = Y(
    function (a) {
      if (!a.R) return {};
      const b = a.Qa.cd,
        c = a.Qa.bd;
      a.R.style.top = "0";
      a.R.style.left = "0";
      a.R.style.position = "absolute";
      a.R.style.width = `${b}px`;
      a.R.style.height = `${c}px`;
      Sc(a.R, "vspace");
      Sc(a.R, "hspace");
      return {};
    },
    { id: 1456, I: {} }
  );
  function k5(a, b, c) {
    a.F[b] = c;
  }
  function l5(a, b, c) {
    let d = {};
    d.c = a.Hb;
    d.i = a.A;
    d.s = b;
    d.p = c;
    try {
      a.D.postMessage(JSON.stringify(d), a.l);
    } catch (e) {}
  }
  class m5 extends O {
    constructor(a, b, c) {
      super();
      this.Hb = a;
      this.status = 1;
      this.D = b;
      this.l = c;
      this.Dd = !1;
      this.A = Math.random();
      this.F = {};
      this.j = null;
      this.H = za(this.L, this);
      this.zb = void 0;
    }
    L(a) {
      if (
        !(
          (this.l !== "*" && a.origin !== this.l) ||
          (!this.Dd && a.source != this.D)
        )
      ) {
        var b = null;
        try {
          b = JSON.parse(a.data);
        } catch (c) {}
        if (sa(b) && ((a = b.i), b.c === this.Hb && a != this.A)) {
          if (this.status !== 2)
            try {
              (this.status = 2),
                (a = {}),
                (a.c = this.Hb),
                (a.i = this.A),
                this.zb && (a.e = this.zb),
                this.D.postMessage(JSON.stringify(a), this.l),
                this.j && (this.j(), (this.j = null));
            } catch (c) {}
          a = b.s;
          b = b.p;
          if (
            typeof a === "string" &&
            (typeof b === "string" || sa(b)) &&
            this.F.hasOwnProperty(a)
          )
            this.F[a](b);
        }
      }
    }
    connect(a) {
      a && (this.j = a);
      wl(window, "message", this.H);
    }
    g() {
      this.status = 3;
      xl(window, "message", this.H);
      super.g();
    }
  }
  function n5(a, b = {}) {
    const c = {
      frameborder: 0,
      allowTransparency: "true",
      style: "border:0;vertical-align:bottom;",
      src: "about:blank",
    };
    hc(c, b);
    Pk(a, c);
  }
  var o5 = class {
    constructor(a) {
      this.uid = a;
      this.l = null;
      this.D = this.status = 0;
      this.g = null;
      this.Hb = `sfchannel${a}`;
    }
    qh() {
      return this.D === 2;
    }
  };
  function p5(a) {
    const b = {};
    Ia(a, (c) => {
      b[c.g()] = c.j();
    });
    return b;
  }
  function q5(a) {
    var b = b || window;
    var c = b.screenX || b.screenLeft || 0,
      d = b.screenY || b.screenTop || 0;
    b = new dl(
      d,
      c + (b.outerWidth || document.documentElement.clientWidth || 0),
      d + (b.outerHeight || document.documentElement.clientHeight || 0),
      c
    );
    c = pl(a);
    d = rl(a);
    var e = new fl(c.x, c.y, d.width, d.height);
    c = gl(e);
    d = String(ml(a, "zIndex"));
    var f = new dl(0, Infinity, Infinity, 0);
    for (
      var g = Mk(a), h = g.g.body, k = g.g.documentElement, m = Sk(g.g);
      (a = ol(a));

    )
      if (
        (!gd || a.clientHeight != 0 || a != h) &&
        a != h &&
        a != k &&
        ml(a, "overflow") != "visible"
      ) {
        var l = pl(a);
        const n = new Jk(a.clientLeft, a.clientTop);
        l.x += n.x;
        l.y += n.y;
        f.top = Math.max(f.top, l.y);
        f.right = Math.min(f.right, l.x + a.clientWidth);
        f.bottom = Math.min(f.bottom, l.y + a.clientHeight);
        f.left = Math.max(f.left, l.x);
      }
    a = m.scrollLeft;
    m = m.scrollTop;
    f.left = Math.max(f.left, a);
    f.top = Math.max(f.top, m);
    g = Rk(g.Ba() || window);
    f.right = Math.min(f.right, a + g.width);
    f.bottom = Math.min(f.bottom, m + g.height);
    m = (f = (f =
      f.top >= 0 && f.left >= 0 && f.bottom > f.top && f.right > f.left
        ? f
        : null)
      ? new fl(f.left, f.top, f.right - f.left, f.bottom - f.top)
      : null)
      ? hl(e, f)
      : null;
    g = a = 0;
    m &&
      !new Kk(m.width, m.height).isEmpty() &&
      ((a = m.width / e.width), (g = m.height / e.height));
    m = new dl(0, 0, 0, 0);
    if ((h = f))
      (h = hl(e, f))
        ? ((k = gl(f)),
          (l = gl(h)),
          (e = l.right !== k.left && k.right !== l.left),
          (k = l.bottom !== k.top && k.bottom !== l.top),
          (h = (h.width !== 0 || e) && (h.height !== 0 || k)))
        : (h = !1);
    h &&
      (m = new dl(
        Math.max(c.top - f.top, 0),
        Math.max(f.left + f.width - c.right, 0),
        Math.max(f.top + f.height - c.bottom, 0),
        Math.max(c.left - f.left, 0)
      ));
    return new r5(b, c, d, m, a, g);
  }
  function s5(a) {
    return JSON.stringify({
      windowCoords_t: a.l.top,
      windowCoords_r: a.l.right,
      windowCoords_b: a.l.bottom,
      windowCoords_l: a.l.left,
      frameCoords_t: a.j.top,
      frameCoords_r: a.j.right,
      frameCoords_b: a.j.bottom,
      frameCoords_l: a.j.left,
      styleZIndex: a.B,
      allowedExpansion_t: a.g.top,
      allowedExpansion_r: a.g.right,
      allowedExpansion_b: a.g.bottom,
      allowedExpansion_l: a.g.left,
      xInView: a.A,
      yInView: a.D,
    });
  }
  var r5 = class {
    constructor(a, b, c, d, e, f) {
      this.B = c;
      this.A = e;
      this.D = f;
      this.l = el(a);
      this.j = el(b);
      this.g = el(d);
    }
  };
  var t5 = class {
    constructor(a) {
      this.g = a;
    }
    getValue(a, b) {
      a = this.g[a];
      if (a == null) return null;
      b = a[b];
      return b === null || b === void 0 ? null : b;
    }
  };
  var u5 = class {
    constructor(a, b) {
      this.cf = a;
      this.df = b;
      this.j = this.g = !1;
    }
  };
  var v5 = class {
    constructor(a, b, c, d, e, f, g, h = []) {
      this.uid = a;
      this.ca = b;
      this.F = c;
      this.permissions = d;
      this.metadata = e;
      this.g = f;
      this.Dd = g;
      this.hostpageLibraryTokens = h;
      this.zb = "";
    }
  };
  function w5(a) {
    return typeof a === "number" || typeof a === "string";
  }
  var x5 = class {
      constructor(a, b) {
        this.uid = a;
        this.zb = b;
      }
      g(a) {
        this.zb && a && (a.sentinel = this.zb);
        return JSON.stringify(a);
      }
    },
    y5 = class extends x5 {
      constructor(a, b, c = "") {
        super(a, c);
        this.version = b;
      }
      g() {
        return super.g({ uid: this.uid, version: this.version });
      }
    },
    z5 = class extends x5 {
      constructor(a, b, c, d = "") {
        super(a, d);
        this.l = b;
        this.j = c;
      }
      g() {
        return super.g({
          uid: this.uid,
          initialWidth: this.l,
          initialHeight: this.j,
        });
      }
    },
    A5 = class extends x5 {
      constructor(a, b, c = "") {
        super(a, c);
        this.description = b;
      }
      g() {
        return super.g({ uid: this.uid, description: this.description });
      }
    },
    B5 = class extends x5 {
      constructor(a, b, c, d = "") {
        super(a, d);
        this.j = b;
        this.push = c;
      }
      g() {
        return super.g({
          uid: this.uid,
          expand_t: this.j.top,
          expand_r: this.j.right,
          expand_b: this.j.bottom,
          expand_l: this.j.left,
          push: this.push,
        });
      }
    },
    C5 = class extends x5 {
      constructor(a, b = "") {
        super(a, b);
      }
      g() {
        return super.g({ uid: this.uid });
      }
    },
    D5 = class extends x5 {
      constructor(a, b, c = "") {
        super(a, c);
        this.l = b;
      }
      g() {
        const a = { uid: this.uid, newGeometry: s5(this.l) };
        return super.g(a);
      }
    },
    E5 = class extends D5 {
      constructor(a, b, c, d, e) {
        super(a, c, "");
        this.success = b;
        this.j = d;
        this.push = e;
      }
      g() {
        const a = {
          uid: this.uid,
          success: this.success,
          newGeometry: s5(this.l),
          expand_t: this.j.top,
          expand_r: this.j.right,
          expand_b: this.j.bottom,
          expand_l: this.j.left,
          push: this.push,
        };
        this.zb && (a.sentinel = this.zb);
        return JSON.stringify(a);
      }
    },
    F5 = class extends x5 {
      constructor(a, b, c, d = "") {
        super(a, d);
        this.width = b;
        this.height = c;
      }
      g() {
        return super.g({
          uid: this.uid,
          width: this.width,
          height: this.height,
        });
      }
    };
  var G5 = [
      "allow-modals",
      "allow-orientation-lock",
      "allow-presentation",
      "allow-pointer-lock",
    ],
    H5 = ["allow-top-navigation"],
    I5 = ["allow-same-origin"],
    J5 = Ud([...G5, ...H5]);
  Ud([...G5, ...I5]);
  Ud([...G5, ...H5, ...I5]);
  function K5(a) {
    let b = null;
    a.Gj && (b = a.Gj);
    return b == null ? null : b.join(" ");
  }
  function L5({ Za: a, size: b, Xl: c }) {
    b === 1
      ? ((a.style.width = ql("100%")), (a.style.height = ql("auto")))
      : c || ((a.style.width = ql(b.width)), (a.style.height = ql(b.height)));
  }
  function M5(
    a,
    {
      R: b,
      content: c,
      fh: d,
      size: e,
      El: f = "3rd party ad content",
      qd: g,
      wg: h,
      Xl: k,
    }
  ) {
    const m = k || !b;
    var l = { shared: { sf_ver: a.Nb, ck_on: yP() ? 1 : 0, flash_ver: "0" } };
    c = k || !b ? c ?? "" : "";
    var n = a.Nb,
      p = c.length;
    l = new v5(
      a.uid,
      a.ca,
      a.F,
      a.permissions,
      new t5(l),
      a.A,
      a.Dd,
      a.hostpageLibraryTokens
    );
    var q = l.uid,
      v = l.ca,
      E = s5(l.F);
    var F = l.permissions;
    F = JSON.stringify({
      expandByOverlay: F.cf,
      expandByPush: F.df,
      readCookie: F.g,
      writeCookie: F.j,
    });
    q = {
      uid: q,
      hostPeerName: v,
      initialGeometry: E,
      permissions: F,
      metadata: JSON.stringify(l.metadata.g),
      reportCreativeGeometry: l.g,
      isDifferentSourceWindow: l.Dd,
      goog_safeframe_hlt: p5(l.hostpageLibraryTokens),
    };
    l.zb && (q.zb = l.zb);
    l = JSON.stringify(q);
    v = q = 0;
    e !== 1 && ((q = e.width), (v = e.height));
    d = {
      id: d,
      title: f,
      name: `${n};${p};${c}${l}`,
      scrolling: "no",
      marginWidth: "0",
      marginHeight: "0",
      width: String(q),
      height: String(v),
      "data-is-safeframe": "true",
    };
    m && (d.src = v_(Tk(Ok(a.Za)), a.Nb, a.si, a.hostname));
    a.sandbox !== null && (d.sandbox = a.sandbox);
    g && (d.allow = g);
    h && (d.credentialless = !0);
    d["aria-label"] = "Advertisement";
    d.tabIndex = 0;
    k
      ? (a.Za.removeChild(b), n5(b, d), (a.R = b))
      : b
      ? ((a.R = b), Pk(a.R, d))
      : ((b = Gd("IFRAME")), n5(b, d), (a.R = b));
    a.A && (a.R.style.minWidth = "100%");
    a.Za.appendChild(a.R);
  }
  function N5(a) {
    if (a.status === 1 || a.status === 2)
      switch (a.B) {
        case 0:
          O5(a);
          P5(a);
          a.B = 1;
          break;
        case 1:
          a.B = 2;
          break;
        case 2:
          a.B = 2;
      }
  }
  function Q5(a) {
    a.g = new m5(a.Hb, a.R.contentWindow, a.Fb);
    k5(a.g, "init_done", (b) => {
      a.oa(b);
    });
    k5(a.g, "register_done", (b) => {
      a.bb(b);
    });
    k5(a.g, "report_error", (b) => {
      a.reportError(b);
    });
    k5(a.g, "expand_request", (b) => {
      a.T(b);
    });
    k5(a.g, "collapse_request", (b) => {
      a.H(b);
    });
    k5(a.g, "creative_geometry_update", (b) => {
      a.L(b);
    });
    a.g.connect(() => {
      a.Aa();
    });
  }
  function O5(a) {
    a.l = q5(a.R);
    l5(a.g, "geometry_update", new D5(a.uid, a.l).g());
  }
  function P5(a) {
    a.V = window.setTimeout(() => {
      if (a.status === 1 || a.status === 2)
        switch (a.B) {
          case 0:
          case 1:
            a.B = 0;
            break;
          case 2:
            O5(a), P5(a), (a.B = 1);
        }
    }, 1e3);
  }
  var R5 = class extends o5 {
    constructor(a) {
      super(a.uniqueId);
      this.V = -1;
      this.ka = a.ka;
      this.A = a.size === 1;
      this.permissions = new u5(
        a.permissions.cf && !this.A,
        a.permissions.df && !this.A
      );
      this.Za = a.Za;
      this.hostpageLibraryTokens = a.hostpageLibraryTokens ?? [];
      const { protocol: b, host: c } = window.location;
      this.ca = b === "file:" ? "*" : `${b}//${c}`;
      this.Dd = !!a.Dd;
      this.hostname = a.Ej ? w_(a.Ej) : "//tpc.googlesyndication.com";
      this.Fb = a.R ? "*" : `https:${this.hostname}`;
      this.sandbox = K5(a);
      this.j = new TX();
      L5(a);
      this.l = this.F = q5(a.Za);
      this.Nb = a.Nb || "0-0-0";
      this.si = a.si ?? "";
      this.R = null;
      M5(this, a);
      this.J = RA(
        412,
        () => {
          N5(this);
        },
        a.Xb
      );
      this.B = 0;
      const d = RA(
        415,
        () => {
          this.R && ((this.R.name = ""), a.qj && a.qj(), xl(this.R, "load", d));
        },
        a.Xb
      );
      wl(this.R, "load", d);
      this.oa = RA(413, this.oa, a.Xb);
      this.bb = RA(417, this.bb, a.Xb);
      this.reportError = RA(419, this.reportError, a.Xb);
      this.T = RA(411, this.T, a.Xb);
      this.H = RA(409, this.H, a.Xb);
      this.L = RA(410, this.L, a.Xb);
      this.Aa = RA(416, this.Aa, a.Xb);
      Q5(this);
    }
    Aa() {
      wl(window, "resize", this.J);
      wl(window, "scroll", this.J);
    }
    oa(a) {
      try {
        if (this.status !== 0) throw Error("Container already initialized");
        if (typeof a !== "string")
          throw Error("Could not parse serialized message");
        const c = JSON.parse(a);
        if (!sa(c) || !w5(c.uid) || typeof c.version !== "string")
          throw Error("Cannot parse JSON message");
        var b = new y5(c.uid, c.version, c.sentinel || "");
        if (this.uid !== b.uid || this.Nb !== b.version)
          throw Error("Wrong source container");
        this.status = 1;
      } catch (c) {
        this.ka?.error(`Invalid INITIALIZE_DONE message. Reason: ${c.message}`);
      }
    }
    bb(a) {
      try {
        if (this.status !== 1) throw Error("Container not initialized");
        if (typeof a !== "string")
          throw Error("Could not parse serialized message");
        const b = JSON.parse(a);
        if (
          !sa(b) ||
          !w5(b.uid) ||
          typeof b.initialWidth !== "number" ||
          typeof b.initialHeight !== "number"
        )
          throw Error("Cannot parse JSON message");
        if (
          this.uid !==
          new z5(b.uid, b.initialWidth, b.initialHeight, b.sentinel || "").uid
        )
          throw Error("Wrong source container");
        this.status = 2;
      } catch (b) {
        this.ka?.error(`Invalid REGISTER_DONE message. Reason: ${b.message}`);
      }
    }
    reportError(a) {
      try {
        if (typeof a !== "string")
          throw Error("Could not parse serialized message");
        const c = JSON.parse(a);
        if (!sa(c) || !w5(c.uid) || typeof c.description !== "string")
          throw Error("Cannot parse JSON message");
        var b = new A5(c.uid, c.description, c.sentinel || "");
        if (this.uid !== b.uid) throw Error("Wrong source container");
        this.ka?.info(`Ext reported an error. Description: ${b.description}`);
      } catch (c) {
        this.ka?.error(`Invalid REPORT_ERROR message. Reason: ${c.message}`);
      }
    }
    T(a) {
      try {
        if (this.status !== 2) throw Error("Container is not registered");
        if (this.D !== 0) throw Error("Container is not collapsed");
        if (typeof a !== "string")
          throw Error("Could not parse serialized message");
        const J = JSON.parse(a);
        if (
          !sa(J) ||
          !w5(J.uid) ||
          typeof J.expand_t !== "number" ||
          typeof J.expand_r !== "number" ||
          typeof J.expand_b !== "number" ||
          typeof J.expand_l !== "number" ||
          typeof J.push !== "boolean"
        )
          throw Error("Cannot parse JSON message");
        var b = new B5(
          J.uid,
          new dl(J.expand_t, J.expand_r, J.expand_b, J.expand_l),
          J.push,
          J.sentinel || ""
        );
        if (this.uid !== b.uid) throw Error("Wrong source container");
        if (
          !(b.j.top >= 0 && b.j.left >= 0 && b.j.bottom >= 0 && b.j.right >= 0)
        )
          throw Error("Invalid expansion amounts");
        var c;
        if (
          (c =
            (b.push && this.permissions.df) || (!b.push && this.permissions.cf))
        ) {
          var d = b.j,
            e = b.push,
            f = (this.l = q5(this.R));
          if (
            d.top <= f.g.top &&
            d.right <= f.g.right &&
            d.bottom <= f.g.bottom &&
            d.left <= f.g.left
          ) {
            if (!e)
              for (let N = this.R.parentNode; N && N.style; N = N.parentNode)
                QX(this.j, N, "overflowX", "visible", "important"),
                  QX(this.j, N, "overflowY", "visible", "important");
            var g = gl(new fl(0, 0, this.l.j.getWidth(), this.l.j.getHeight()));
            sa(d)
              ? ((g.top -= d.top),
                (g.right += d.right),
                (g.bottom += d.bottom),
                (g.left -= d.left))
              : ((g.top -= d),
                (g.right += Number(void 0)),
                (g.bottom += Number(void 0)),
                (g.left -= Number(void 0)));
            QX(this.j, this.Za, "position", "relative");
            QX(this.j, this.R, "position", "absolute");
            if (e) {
              var h = this.j,
                k = this.Za,
                m = g.getWidth();
              QX(h, k, "width", `${m}px`);
              var l = this.j,
                n = this.Za,
                p = g.getHeight();
              QX(l, n, "height", `${p}px`);
            } else QX(this.j, this.R, "zIndex", "10000");
            var q = this.j,
              v = this.R,
              E = g.getWidth();
            QX(q, v, "width", `${E}px`);
            var F = this.j,
              R = this.R,
              ea = g.getHeight();
            QX(F, R, "height", `${ea}px`);
            QX(this.j, this.R, "left", `${g.left}px`);
            QX(this.j, this.R, "top", `${g.top}px`);
            this.D = 2;
            this.l = q5(this.R);
            c = !0;
          } else c = !1;
        }
        a = c;
        l5(
          this.g,
          "expand_response",
          new E5(this.uid, a, this.l, b.j, b.push).g()
        );
        if (!a)
          throw Error(
            "Viewport or document body not large enough to expand into."
          );
      } catch (J) {
        this.ka?.error(`Invalid EXPAND_REQUEST message. Reason: ${J.message}`);
      }
    }
    H(a) {
      try {
        if (this.status !== 2) throw Error("Container is not registered");
        if (!this.qh()) throw Error("Container is not expanded");
        if (typeof a !== "string")
          throw Error("Could not parse serialized message");
        const b = JSON.parse(a);
        if (!sa(b) || !w5(b.uid)) throw Error("Cannot parse JSON message");
        if (this.uid !== new C5(b.uid, b.sentinel || "").uid)
          throw Error("Wrong source container");
        this.collapse();
        l5(this.g, "collapse_response", new D5(this.uid, this.l).g());
      } catch (b) {
        this.ka?.error(
          `Invalid COLLAPSE_REQUEST message. Reason: ${b.message}`
        );
      }
    }
    collapse() {
      SX(this.j);
      this.D = 0;
      this.R && (this.l = q5(this.R));
    }
    L(a) {
      try {
        if (typeof a !== "string")
          throw Error("Could not parse serialized message");
        const c = JSON.parse(a);
        if (
          !sa(c) ||
          !w5(c.uid) ||
          typeof c.width !== "number" ||
          typeof c.height !== "number" ||
          (c.sentinel && typeof c.sentinel !== "string")
        )
          throw Error("Cannot parse JSON message");
        var b = new F5(c.uid, c.width, c.height, c.sentinel || "");
        if (this.uid !== b.uid) throw Error("Wrong source container");
        const d = String(b.height);
        this.A
          ? d !== this.R.height && ((this.R.height = d), N5(this))
          : this.ka?.error(
              "Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized."
            );
      } catch (c) {
        this.ka?.error(
          `Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: ${c.message}`
        );
      }
    }
    destroy() {
      this.status !== 100 &&
        (this.qh() && (SX(this.j), (this.D = 0)),
        window.clearTimeout(this.V),
        (this.V = -1),
        (this.B = 3),
        this.g && (this.g.dispose(), (this.g = null)),
        xl(window, "resize", this.J),
        xl(window, "scroll", this.J),
        this.Za &&
          this.R &&
          this.Za === (this.R.parentElement || null) &&
          this.Za.removeChild(this.R),
        (this.Za = this.R = null),
        (this.status = 100));
    }
  };
  var S5 = Y(
    function (a) {
      const b = a.Qa.fh,
        c = a.Qa.cd,
        d = a.Qa.bd,
        e = a.Qa.W,
        f = a.Qa.wg,
        { promise: g, resolve: h } = ja(Promise, "withResolvers").call(Promise);
      a = new R5({
        Za: e,
        fh: b,
        El: b,
        size: new Kk(c, d),
        content: a.dk,
        qj: h,
        uniqueId: b,
        Gj: a.Ee ?? void 0,
        permissions: { cf: !1, df: !1 },
        Ej: y_(),
        wg: f,
        qd: a.qd?.join(";"),
      }).R;
      return { xd: a, yd: !!a, Kc: g };
    },
    { id: 1453, I: { xd: void 0, yd: void 0, Kc: void 0 } }
  );
  var T5 = Y(
    function () {
      return Wd() ? { Ee: J5 } : { Ee: void 0 };
    },
    { id: 1475, I: { Ee: void 0 } }
  );
  const U5 = ["run-ad-auction", "attribution-reporting"];
  var V5 = Y(
    function (a, b) {
      a = a.Qa.tk;
      const c = U5.filter((d) => gX(d, b));
      a && c.push("autoplay");
      return { qd: c };
    },
    { id: 1476, I: { qd: void 0 } }
  );
  function W5() {
    var a = Sz(yz) || "0-0-0";
    const b = a.split("-").map((d) => Number(d)),
      c = ["0", "0", "0"].map((d) => Number(d));
    for (let d = 0; d < b.length; d++) {
      if (b[d] > c[d]) return a;
      if (b[d] < c[d]) break;
    }
    return "0-0-0";
  }
  var X5 = Y(
    function () {
      return { Nb: W5() };
    },
    { id: 1477, I: { Nb: void 0 } }
  );
  var Y5 = class extends qZ {
    constructor(a, b, c, d) {
      super(a);
      this.A = new SV();
      ({ Ee: a } = Z(this, T5, {}));
      const { Nb: e } = Z(this, X5, {});
      ({ qd: b } = Z(this, V5, { Qa: d }, b));
      const {
        xd: f,
        yd: g,
        Kc: h,
      } = Z(this, S5, { dk: c, Ee: a, qd: b, Nb: e, Qa: d });
      c = Z(this, i5, { R: f, Qa: d });
      d = X(Z(this, j5, { R: f, Qa: d }), c.finished);
      this.F = this.D = f;
      this.V = g;
      this.Aa = h;
      this.A = d.finished;
    }
  };
  var Z5 = Y(
    function (a, b, c, d) {
      return {
        Qa: {
          fh: c.google_async_iframe_id,
          cd: c.google_ad_width,
          bd: c.google_ad_height,
          W: b,
          tk: c.google_video_play_muted === !1,
          Vm: c.dash || "",
          wg:
            T(kz) &&
            d.credentialless !== void 0 &&
            (T(lz) || d.crossOriginIsolated),
        },
      };
    },
    { id: 1482, I: { Qa: void 0 } }
  );
  var $5 = kZ(
    async function (a) {
      const b = a.Il,
        c = a.Yd;
      a = a.adUrl;
      try {
        return {
          response: await fetch(a, {
            credentials: b ? "include" : "omit",
            ...(c ? { Yd: c } : {}),
          }),
        };
      } catch (d) {
        return { error: d };
      }
    },
    { id: 1452 }
  );
  var a6 = Y(
    function (a, b) {
      return { Yd: Y4(b.pubWin, a.O, b.G, a.cookieDeprecationLabel) };
    },
    { id: 1481, I: { Yd: void 0 } }
  );
  var b6 = Y(
    function (a, b) {
      b = b.l;
      a = a.O.aa();
      return { output: !b && a };
    },
    { id: 1474, I: { output: void 0 } }
  );
  var c6 = class extends Error {
    constructor(a) {
      super(a);
    }
  };
  c6.prototype.name = "NetworkError";
  var d6 = kZ(
    async function (a) {
      let b = Promise.resolve(null);
      const c = a.Li.response;
      a = a.Li.error;
      c
        ? c.status >= 300
          ? HC(
              1454,
              new c6(`Received non-200 response from BOW, status: ${c.status}`)
            )
          : (b = c.text())
        : a && HC(1454, a);
      return b;
    },
    { id: 1454 }
  );
  var e6 = class extends qZ {
    constructor(a, b) {
      super(a);
      ({ output: a } = nZ(this, d6, { Li: b }));
      this.A = a;
    }
  };
  const f6 = NZ(
    function (a) {
      return a.ta && !a.pa && a.Pa;
    },
    { id: 1487 }
  );
  var g6 = class extends KZ {
    constructor(a, b, c, d, e, f) {
      super(a);
      this.ka = a;
      this.ta = f.ta;
      this.pa = f.pa;
      this.nf = f.nf;
      f = Z(this, Z5, {}, c.W, c.G, c.pubWin);
      e = Z(this, a6, { O: d, cookieDeprecationLabel: e }, c);
      ({ output: d } = Z(this, b6, { O: d }, c));
      ({ output: b } = nZ(this, $5, { Il: d, Yd: e.Yd, adUrl: b }));
      ({ A: b } = oZ(this, new e6(a, b)));
      const {
        D: g,
        F: h,
        Aa: k,
        V: m,
        A: l,
      } = oZ(this, new Y5(a, c.pubWin.document, b, f.Qa));
      this.A = g;
      this.V = h;
      this.bb = k;
      this.Aa = m;
      this.Fb = l;
    }
    async D() {
      return LZ(this.ka, f6, { ta: this.ta, pa: this.pa, Pa: this.nf });
    }
    F() {
      JV(this.A, null);
      JV(this.V, null);
      JV(this.Aa, !1);
      JV(this.bb, null);
      this.Fb.notify();
    }
  };
  var h6 = class extends qZ {
    constructor(a, b, c) {
      super(a);
      const { O: d } = X(Z(this, sZ, {}, b), c);
      c = X(Z(this, RZ, {}, b), c);
      c = X(Z(this, wZ, { O: d }, b.pubWin), c.finished);
      c = X(
        Z(
          this,
          tZ,
          { O: d },
          b.pubWin,
          b.l,
          b.pageState,
          b.ja,
          b.G,
          b.pageStateTs
        ),
        c.finished
      );
      var e = oZ(this, new PZ(a, b, d, c.Rd, c.finished));
      const f = X(Z(this, QZ, {}, b), e.A).ta;
      var g = oZ(this, new rZ(a, b, d, e.A, f));
      const h = g.A.qm,
        k = g.A.pa;
      g = g.A.uc;
      const m = oZ(
        this,
        new g6(a, h, b, d, e.cookieDeprecationLabel, { ta: f, pa: k, nf: c.Rd })
      );
      e = oZ(
        this,
        new h5(a, h, b, d, b.pubWin, e.cookieDeprecationLabel, k, c.Rd, f)
      );
      this.A = oZ(
        this,
        new U4(
          a,
          e.A,
          g,
          b,
          d,
          { zd: e.zd, ql: m.Fb },
          { pa: k, Pa: c.Rd },
          { ta: f, xd: m.V, yd: m.Aa }
        )
      ).V;
    }
  };
  var i6 = Y(
    function (a, b) {
      b.j |= a.gf;
      return { Kj: b };
    },
    { id: 1412, I: { Kj: void 0 } }
  );
  const j6 = (a, b) => {
      b = b.listener;
      (a = (0, a.__gpp)("addEventListener", b)) && b(a, !0);
    },
    k6 = (a, b) => {
      (0, a.__gpp)("removeEventListener", b.listener, b.listenerId);
    },
    l6 = {
      zf: (a) => a.listener,
      ve: (a, b) => ({
        __gppCall: { callId: b, command: "addEventListener", version: "1.1" },
      }),
      Ld: (a, b) => {
        b = b.__gppReturn;
        a(b.returnValue, b.success);
      },
    },
    m6 = {
      zf: (a) => a.listener,
      ve: (a, b) => ({
        __gppCall: {
          callId: b,
          command: "removeEventListener",
          version: "1.1",
          parameter: a.listenerId,
        },
      }),
      Ld: (a, b) => {
        b = b.__gppReturn;
        const c = b.returnValue.data;
        a?.(c, b.success);
      },
    };
  function n6(a) {
    let b = {};
    typeof a.data === "string" ? (b = JSON.parse(a.data)) : (b = a.data);
    return { payload: b, Kh: b.__gppReturn.callId };
  }
  function o6(a, b, c) {
    let d = !(b.includes(2) && c?.idpcApplies),
      e = !1,
      f = !1,
      g = !1;
    if (a && !a.startsWith("GPP_ERROR_STRING_")) {
      const P6 = eQ(a.split("~")[0]),
        Q6 = $P(a),
        lG = Zh(P6, 3);
      for (let Ym = 0; Ym < lG.length; ++Ym) {
        const mG = lG[Ym];
        if (!b.includes(mG)) continue;
        const zb = Q6[Ym];
        switch (mG) {
          case 2:
            if (c?.supportTcfeu) {
              a: {
                const ma = PR(zb);
                if (!ma || !zb) {
                  var h = null;
                  break a;
                }
                const gb = x(ma, zR, 1),
                  Zm = x(ma, cR, 2) || new cR();
                var k = Wh(gb, 9),
                  m = Wh(gb, 4),
                  l = Wh(gb, 5),
                  n = A(gb, 10),
                  p = A(gb, 11),
                  q = B(gb, 16),
                  v = A(gb, 15),
                  E = {
                    consents: QR(ai(gb, 13), CR),
                    legitimateInterests: QR(ai(gb, 14), CR),
                  },
                  F = {
                    consents: QR(Zh(gb, 17)),
                    legitimateInterests: QR(Zh(gb, 18)),
                  },
                  R = QR(ai(gb, 12), DR),
                  ea = Nh(gb, YQ, 19, wh());
                const $m = {};
                for (const Ss of ea) {
                  const Ts = C(Ss, 1);
                  $m[Ts] = $m[Ts] || {};
                  for (const R6 of Zh(Ss, 3)) $m[Ts][R6] = C(Ss, 2);
                }
                h = {
                  tcString: zb,
                  tcfPolicyVersion: k,
                  gdprApplies: !0,
                  cmpId: m,
                  cmpVersion: l,
                  isServiceSpecific: n,
                  useNonStandardStacks: p,
                  publisherCC: q,
                  purposeOneTreatment: v,
                  purpose: E,
                  vendor: F,
                  specialFeatureOptins: R,
                  publisher: {
                    restrictions: $m,
                    consents: QR(ai(Zm, 1), CR),
                    legitimateInterests: QR(ai(Zm, 2), CR),
                    customPurposes: {
                      consents: QR(Zh(Zm, 3)),
                      legitimateInterests: QR(Zh(Zm, 4)),
                    },
                  },
                };
              }
              const na = h;
              if (!na) throw Error("Cannot decode TCF V2 section string.");
              d = PK(na);
              !SK(na, ["3", "4"], 0) && (e = !0);
              !SK(na, ["2", "7", "9", "10"], 3) && (f = !0);
            }
            break;
          case 7:
            const nG = SQ(zb, c?.supportUsnatV2 ? [1, 2] : [1]),
              an = x(nG, LQ, 1),
              oG = x(an, IQ, 12);
            (C(an, 8) !== 1 &&
              C(an, 9) !== 1 &&
              C(an, 10) !== 1 &&
              oG?.j() !== 1 &&
              oG?.g() !== 1) ||
              (e = !0);
            var J = x(nG, LQ, 1);
            const pG = x(J, IQ, 12)?.B();
            (pG !== 1 && pG !== 2) || (g = !0);
            break;
          case 8:
            if (zb.length === 0)
              throw Error("Cannot decode empty USCA section string.");
            const Ij = zb.split(".");
            if (Ij.length > 2)
              throw Error(
                `Expected at most 1 sub-section but got ${
                  Ij.length - 1
                } when decoding ${zb}.`
              );
            var N = void 0,
              aa = void 0,
              db = void 0,
              Wb = void 0,
              Aa = void 0,
              Ka = void 0,
              Yc = void 0,
              Hc = void 0,
              Ic = void 0,
              Md = void 0,
              ta = void 0,
              qd = void 0,
              Qe = void 0,
              Og = void 0,
              Pg = void 0,
              Qg = void 0,
              Rg = void 0,
              Sg = void 0,
              Tg = void 0,
              Ug = void 0,
              Vg = void 0,
              Wg = void 0,
              Xg = void 0,
              Yg = Ij[0];
            if (Yg.length === 0)
              throw Error("Cannot decode empty core segment string.");
            let bn = dQ(Yg, nQ);
            const Us = bQ(bn.slice(0, 6));
            bn = bn.slice(6);
            if (Us !== 1)
              throw Error(
                `Unable to decode unsupported USCA Section specification version ${Us} - only version 1 is supported.`
              );
            let Vs = 0;
            const Ua = [];
            for (let na = 0; na < mQ.length; na++) {
              const ma = mQ[na];
              Ua.push(bQ(bn.slice(Vs, Vs + ma)));
              Vs += ma;
            }
            var bj = new iQ();
            Xg = G(bj, 1, Us);
            var cj = Ua.shift();
            Wg = H(Xg, 2, cj);
            var dj = Ua.shift();
            Vg = H(Wg, 3, dj);
            var ej = Ua.shift();
            Ug = H(Vg, 4, ej);
            var fj = Ua.shift();
            Tg = H(Ug, 5, fj);
            var gj = Ua.shift();
            Sg = H(Tg, 6, gj);
            var Ef = new hQ(),
              hj = Ua.shift();
            Rg = H(Ef, 1, hj);
            var Zg = Ua.shift();
            Qg = H(Rg, 2, Zg);
            var ij = Ua.shift();
            Pg = H(Qg, 3, ij);
            var Ff = Ua.shift();
            Og = H(Pg, 4, Ff);
            var jj = Ua.shift();
            Qe = H(Og, 5, jj);
            var kj = Ua.shift();
            qd = H(Qe, 6, kj);
            var rd = Ua.shift();
            ta = H(qd, 7, rd);
            var lj = Ua.shift();
            Md = H(ta, 8, lj);
            var mj = Ua.shift();
            Ic = H(Md, 9, mj);
            Hc = y(Sg, 7, Ic);
            var Gf = new gQ(),
              nj = Ua.shift();
            Yc = H(Gf, 1, nj);
            var Re = Ua.shift();
            Ka = H(Yc, 2, Re);
            Aa = y(Hc, 8, Ka);
            var $g = Ua.shift();
            Wb = H(Aa, 9, $g);
            var ah = Ua.shift();
            db = H(Wb, 10, ah);
            var Hf = Ua.shift();
            aa = H(db, 11, Hf);
            var bh = Ua.shift();
            const qG = (N = H(aa, 12, bh));
            if (Ij.length === 1) var cc = kQ(qG);
            else {
              var sd = kQ(qG),
                Ta = void 0,
                Pb = void 0,
                ch = void 0,
                de = Ij[1];
              if (de.length === 0)
                throw Error("Cannot decode empty GPC segment string.");
              const na = dQ(de, 3),
                ma = bQ(na.slice(0, 2));
              if (ma < 0 || ma > 1)
                throw Error(
                  `Attempting to decode unknown GPC segment subsection type ${ma}.`
                );
              ch = ma + 1;
              const gb = bQ(na.charAt(2));
              var If = new jQ();
              Pb = H(If, 2, ch);
              Ta = D(Pb, 1, !!gb);
              cc = y(sd, 2, Ta);
            }
            const rG = cc,
              sG = x(rG, iQ, 1);
            (C(sG, 5) !== 1 && C(sG, 6) !== 1) || (e = !0);
            var Jc = x(rG, iQ, 1);
            const cn = x(Jc, gQ, 8);
            (cn?.g() !== 1 &&
              cn?.g() !== 2 &&
              cn?.j() !== 1 &&
              cn?.j() !== 2) ||
              (g = !0);
            break;
          case 9:
            if (zb.length === 0)
              throw Error("Cannot decode empty USVA section string.");
            let dn = dQ(zb, XQ);
            const Ws = bQ(dn.slice(0, 6));
            dn = dn.slice(6);
            if (Ws !== 1)
              throw Error(
                `Unable to decode unsupported USVA Section specification version ${Ws} - only version 1 is supported.`
              );
            let Xs = 0;
            const nb = [];
            for (let na = 0; na < WQ.length; na++) {
              const ma = WQ[na];
              nb.push(bQ(dn.slice(Xs, Xs + ma)));
              Xs += ma;
            }
            var dc = Ws,
              Zc = new VQ(),
              td = G(Zc, 1, dc),
              xb = nb.shift(),
              sc = H(td, 2, xb),
              dh = nb.shift(),
              oj = H(sc, 3, dh),
              eh = nb.shift(),
              ud = H(oj, 4, eh),
              fh = nb.shift(),
              Jf = H(ud, 5, fh),
              Kf = nb.shift();
            var ee = H(Jf, 6, Kf);
            var gh = new UQ(),
              hh = nb.shift(),
              or = H(gh, 1, hh),
              pr = nb.shift(),
              qr = H(or, 2, pr),
              rr = nb.shift(),
              sr = H(qr, 3, rr),
              tr = nb.shift(),
              ur = H(sr, 4, tr),
              vr = nb.shift(),
              wr = H(ur, 5, vr),
              xr = nb.shift(),
              yr = H(wr, 6, xr),
              zr = nb.shift(),
              Ar = H(yr, 7, zr),
              Br = nb.shift();
            var Cr = H(Ar, 8, Br);
            var Dr = y(ee, 7, Cr),
              Er = nb.shift(),
              Fr = H(Dr, 8, Er),
              Gr = nb.shift(),
              Hr = H(Fr, 9, Gr),
              Ir = nb.shift(),
              Jr = H(Hr, 10, Ir),
              Kr = nb.shift();
            const Ys = H(Jr, 11, Kr);
            (C(Ys, 5) !== 1 && C(Ys, 6) !== 1) || (e = !0);
            const tG = C(Ys, 8);
            (tG !== 1 && tG !== 2) || (g = !0);
            break;
          case 10:
            if (zb.length === 0)
              throw Error("Cannot decode empty USCO section string.");
            const Jj = zb.split(".");
            if (Jj.length > 2)
              throw Error(
                `Expected at most 2 segments but got ${Jj.length} when decoding ${zb}.`
              );
            var Lr = void 0,
              fm = void 0,
              gm = void 0,
              hm = void 0,
              im = void 0,
              jm = void 0,
              km = void 0,
              lm = void 0,
              mm = void 0,
              nm = void 0,
              om = void 0,
              pm = void 0,
              qm = void 0,
              rm = void 0,
              sm = void 0,
              tm = void 0,
              um = void 0,
              vm = void 0,
              wm = Jj[0];
            if (wm.length === 0)
              throw Error("Cannot decode empty core segment string.");
            let en = dQ(wm, uQ);
            const Zs = bQ(en.slice(0, 6));
            en = en.slice(6);
            if (Zs !== 1)
              throw Error(
                `Unable to decode unsupported USCO Section specification version ${Zs} - only version 1 is supported.`
              );
            let $s = 0;
            const Ab = [];
            for (let na = 0; na < tQ.length; na++) {
              const ma = tQ[na];
              Ab.push(bQ(en.slice($s, $s + ma)));
              $s += ma;
            }
            var Mr = new pQ();
            vm = G(Mr, 1, Zs);
            var Nr = Ab.shift();
            um = H(vm, 2, Nr);
            var aj = Ab.shift();
            tm = H(um, 3, aj);
            var em = Ab.shift();
            sm = H(tm, 4, em);
            var S6 = Ab.shift();
            rm = H(sm, 5, S6);
            var T6 = Ab.shift();
            qm = H(rm, 6, T6);
            var U6 = new oQ(),
              V6 = Ab.shift();
            pm = H(U6, 1, V6);
            var W6 = Ab.shift();
            om = H(pm, 2, W6);
            var X6 = Ab.shift();
            nm = H(om, 3, X6);
            var Y6 = Ab.shift();
            mm = H(nm, 4, Y6);
            var Z6 = Ab.shift();
            lm = H(mm, 5, Z6);
            var $6 = Ab.shift();
            km = H(lm, 6, $6);
            var a7 = Ab.shift();
            jm = H(km, 7, a7);
            im = y(qm, 7, jm);
            var b7 = Ab.shift();
            hm = H(im, 8, b7);
            var c7 = Ab.shift();
            gm = H(hm, 9, c7);
            var d7 = Ab.shift();
            fm = H(gm, 10, d7);
            var e7 = Ab.shift();
            const uG = (Lr = H(fm, 11, e7));
            if (Jj.length === 1) var vG = rQ(uG);
            else {
              var f7 = rQ(uG),
                wG = void 0,
                xG = void 0,
                yG = void 0,
                zG = Jj[1];
              if (zG.length === 0)
                throw Error("Cannot decode empty GPC segment string.");
              const na = dQ(zG, 3),
                ma = bQ(na.slice(0, 2));
              if (ma < 0 || ma > 1)
                throw Error(
                  `Attempting to decode unknown GPC segment subsection type ${ma}.`
                );
              yG = ma + 1;
              const gb = bQ(na.charAt(2));
              var g7 = new qQ();
              xG = H(g7, 2, yG);
              wG = D(xG, 1, !!gb);
              vG = y(f7, 2, wG);
            }
            const AG = vG,
              BG = x(AG, pQ, 1);
            (C(BG, 5) !== 1 && C(BG, 6) !== 1) || (e = !0);
            var h7 = x(AG, pQ, 1);
            const CG = C(h7, 8);
            (CG !== 1 && CG !== 2) || (g = !0);
            break;
          case 12:
            if (zb.length === 0)
              throw Error("Cannot decode empty usct section string.");
            const Kj = zb.split(".");
            if (Kj.length > 2)
              throw Error(
                `Expected at most 2 segments but got ${Kj.length} when decoding ${zb}.`
              );
            var i7 = void 0,
              DG = void 0,
              EG = void 0,
              FG = void 0,
              GG = void 0,
              HG = void 0,
              IG = void 0,
              JG = void 0,
              KG = void 0,
              LG = void 0,
              MG = void 0,
              NG = void 0,
              OG = void 0,
              PG = void 0,
              QG = void 0,
              RG = void 0,
              SG = void 0,
              TG = void 0,
              UG = void 0,
              VG = void 0,
              WG = void 0,
              XG = void 0,
              YG = Kj[0];
            if (YG.length === 0)
              throw Error("Cannot decode empty core segment string.");
            let fn = dQ(YG, CQ);
            const at = bQ(fn.slice(0, 6));
            fn = fn.slice(6);
            if (at !== 1)
              throw Error(
                `Unable to decode unsupported USCT Section specification version ${at} - only version 1 is supported.`
              );
            let bt = 0;
            const Za = [];
            for (let na = 0; na < BQ.length; na++) {
              const ma = BQ[na];
              Za.push(bQ(fn.slice(bt, bt + ma)));
              bt += ma;
            }
            var j7 = new xQ();
            XG = G(j7, 1, at);
            var k7 = Za.shift();
            WG = H(XG, 2, k7);
            var l7 = Za.shift();
            VG = H(WG, 3, l7);
            var m7 = Za.shift();
            UG = H(VG, 4, m7);
            var n7 = Za.shift();
            TG = H(UG, 5, n7);
            var o7 = Za.shift();
            SG = H(TG, 6, o7);
            var p7 = new wQ(),
              q7 = Za.shift();
            RG = H(p7, 1, q7);
            var r7 = Za.shift();
            QG = H(RG, 2, r7);
            var s7 = Za.shift();
            PG = H(QG, 3, s7);
            var t7 = Za.shift();
            OG = H(PG, 4, t7);
            var u7 = Za.shift();
            NG = H(OG, 5, u7);
            var v7 = Za.shift();
            MG = H(NG, 6, v7);
            var w7 = Za.shift();
            LG = H(MG, 7, w7);
            var x7 = Za.shift();
            KG = H(LG, 8, x7);
            JG = y(SG, 7, KG);
            var y7 = new vQ(),
              z7 = Za.shift();
            IG = H(y7, 1, z7);
            var A7 = Za.shift();
            HG = H(IG, 2, A7);
            var B7 = Za.shift();
            GG = H(HG, 3, B7);
            FG = y(JG, 8, GG);
            var C7 = Za.shift();
            EG = H(FG, 9, C7);
            var D7 = Za.shift();
            DG = H(EG, 10, D7);
            var E7 = Za.shift();
            const ZG = (i7 = H(DG, 11, E7));
            if (Kj.length === 1) var $G = zQ(ZG);
            else {
              var F7 = zQ(ZG),
                aH = void 0,
                bH = void 0,
                cH = void 0,
                dH = Kj[1];
              if (dH.length === 0)
                throw Error("Cannot decode empty GPC segment string.");
              const na = dQ(dH, 3),
                ma = bQ(na.slice(0, 2));
              if (ma < 0 || ma > 1)
                throw Error(
                  `Attempting to decode unknown GPC segment subsection type ${ma}.`
                );
              cH = ma + 1;
              const gb = bQ(na.charAt(2));
              var G7 = new yQ();
              bH = H(G7, 2, cH);
              aH = D(bH, 1, !!gb);
              $G = y(F7, 2, aH);
            }
            const eH = $G,
              ct = x(eH, xQ, 1),
              fH = x(ct, vQ, 8);
            (C(ct, 5) !== 1 &&
              C(ct, 6) !== 1 &&
              fH?.j() !== 1 &&
              fH?.B() !== 1) ||
              (e = !0);
            var H7 = x(eH, xQ, 1);
            const gH = x(H7, vQ, 8);
            (gH?.g() !== 1 && gH?.g() !== 2) || (g = !0);
            break;
          case 13:
            if (zb.length === 0)
              throw Error("Cannot decode empty USFL section string.");
            let gn = dQ(zb, HQ);
            const dt = bQ(gn.slice(0, 6));
            gn = gn.slice(6);
            if (dt !== 1)
              throw Error(
                `Unable to decode unsupported USFL Section specification version ${dt} - only version 1 is supported.`
              );
            let et = 0;
            const Va = [];
            for (let na = 0; na < GQ.length; na++) {
              const ma = GQ[na];
              Va.push(bQ(gn.slice(et, et + ma)));
              et += ma;
            }
            var I7 = dt,
              J7 = new FQ(),
              K7 = G(J7, 1, I7),
              L7 = Va.shift(),
              M7 = H(K7, 2, L7),
              N7 = Va.shift(),
              O7 = H(M7, 3, N7),
              P7 = Va.shift(),
              Q7 = H(O7, 4, P7),
              R7 = Va.shift(),
              S7 = H(Q7, 5, R7),
              T7 = Va.shift();
            var U7 = H(S7, 6, T7);
            var V7 = new EQ(),
              W7 = Va.shift(),
              X7 = H(V7, 1, W7),
              Y7 = Va.shift(),
              Z7 = H(X7, 2, Y7),
              $7 = Va.shift(),
              a8 = H(Z7, 3, $7),
              b8 = Va.shift(),
              c8 = H(a8, 4, b8),
              d8 = Va.shift(),
              e8 = H(c8, 5, d8),
              f8 = Va.shift(),
              g8 = H(e8, 6, f8),
              h8 = Va.shift(),
              i8 = H(g8, 7, h8),
              j8 = Va.shift();
            var k8 = H(i8, 8, j8);
            var l8 = y(U7, 7, k8);
            var m8 = new DQ(),
              n8 = Va.shift(),
              o8 = H(m8, 1, n8),
              p8 = Va.shift(),
              q8 = H(o8, 2, p8),
              r8 = Va.shift();
            var s8 = H(q8, 3, r8);
            var t8 = y(l8, 8, s8),
              u8 = Va.shift(),
              v8 = H(t8, 9, u8),
              w8 = Va.shift(),
              x8 = H(v8, 10, w8),
              y8 = Va.shift(),
              z8 = H(x8, 11, y8),
              A8 = Va.shift();
            const hn = H(z8, 12, A8),
              hH = x(hn, DQ, 8);
            (C(hn, 5) !== 1 &&
              C(hn, 6) !== 1 &&
              hH?.j() !== 1 &&
              hH?.B() !== 1) ||
              (e = !0);
            const iH = x(hn, DQ, 8)?.g();
            (iH !== 1 && iH !== 2) || (g = !0);
        }
      }
    }
    return { Ym: d, nj: e, dn: f, wi: g };
  }
  var s6 = class extends O {
    constructor(a) {
      ({ timeoutMs: b } = {});
      var b;
      super();
      this.caller = new FK(
        a,
        "__gppLocator",
        (c) => typeof c.__gpp === "function",
        n6
      );
      this.caller.F.set("addEventListener", j6);
      this.caller.D.set("addEventListener", l6);
      this.caller.F.set("removeEventListener", k6);
      this.caller.D.set("removeEventListener", m6);
      this.timeoutMs = b ?? 500;
    }
    g() {
      this.caller.dispose();
      super.g();
    }
    j() {
      return !!CK(this.caller);
    }
    addEventListener(a) {
      const b = Cb(() => {
          a(p6, !0);
        }),
        c =
          this.timeoutMs === -1
            ? void 0
            : setTimeout(() => {
                b();
              }, this.timeoutMs);
      EK(this.caller, "addEventListener", {
        listener: (d, e) => {
          clearTimeout(c);
          try {
            if (
              d.pingData?.gppVersion === void 0 ||
              d.pingData.gppVersion === "1" ||
              d.pingData.gppVersion === "1.0"
            ) {
              this.removeEventListener(d.listenerId);
              var f = {
                eventName: "signalStatus",
                data: "ready",
                pingData: {
                  internalErrorState: 1,
                  gppString: "GPP_ERROR_STRING_IS_DEPRECATED_SPEC",
                  applicableSections: [-1],
                },
              };
            } else
              Array.isArray(d.pingData.applicableSections)
                ? (f = d)
                : (this.removeEventListener(d.listenerId),
                  (f = {
                    eventName: "signalStatus",
                    data: "ready",
                    pingData: {
                      internalErrorState: 2,
                      gppString:
                        "GPP_ERROR_STRING_EXPECTED_APPLICATION_SECTION_ARRAY",
                      applicableSections: [-1],
                    },
                  }));
            a(f, e);
          } catch {
            if (d?.listenerId)
              try {
                this.removeEventListener(d.listenerId);
              } catch {
                a(q6, !0);
                return;
              }
            a(r6, !0);
          }
        },
      });
    }
    removeEventListener(a) {
      EK(this.caller, "removeEventListener", {
        listener: () => {},
        listenerId: a,
      });
    }
  };
  const r6 = {
      eventName: "signalStatus",
      data: "ready",
      pingData: {
        internalErrorState: 2,
        gppString: "GPP_ERROR_STRING_UNAVAILABLE",
        applicableSections: [-1],
      },
      listenerId: -1,
    },
    p6 = {
      eventName: "signalStatus",
      data: "ready",
      pingData: {
        gppString: "GPP_ERROR_STRING_LISTENER_REGISTRATION_TIMEOUT",
        internalErrorState: 2,
        applicableSections: [-1],
      },
      listenerId: -1,
    },
    q6 = {
      eventName: "signalStatus",
      data: "ready",
      pingData: {
        gppString: "GPP_ERROR_STRING_REMOVE_EVENT_LISTENER_ERROR",
        internalErrorState: 2,
        applicableSections: [-1],
      },
      listenerId: -1,
    };
  function t6(a) {
    return !a || (a.length === 1 && a[0] === -1);
  }
  function u6(a) {
    a = new s6(a);
    if (!a.j()) return Promise.resolve(null);
    const b = BJ(),
      c = GJ(b, 35);
    if (c) return Promise.resolve(c);
    const d = new Promise((e) => {
      e = { resolve: e };
      const f = GJ(b, 36, []);
      f.push(e);
      HJ(b, 36, f);
    });
    c ||
      c === null ||
      (HJ(b, 35, null),
      a.addEventListener((e) => {
        if (
          e.pingData.signalStatus === "ready" ||
          t6(e.pingData.applicableSections)
        ) {
          e = e.pingData;
          HJ(b, 35, e);
          for (const f of GJ(b, 36, [])) f.resolve(e);
          HJ(b, 36, []);
        }
      }));
    return d;
  }
  function v6(a) {
    a = new YK(a, { timeoutMs: -1, yk: !0 });
    if (!UK(a)) return Promise.resolve(null);
    const b = BJ(),
      c = MJ(b);
    if (c) return Promise.resolve(c);
    const d = new Promise((e) => {
      e = { resolve: e };
      const f = GJ(b, 25, []);
      f.push(e);
      HJ(b, 25, f);
    });
    c ||
      c === null ||
      (HJ(b, 24, null),
      a.addEventListener((e) => {
        if (OK(e)) {
          HJ(b, 24, e);
          for (const f of GJ(b, 25, [])) f.resolve(e);
          HJ(b, 25, []);
        } else HJ(b, 24, null);
      }));
    return d;
  }
  const w6 = (a, b) => {
      (0, a.__uspapi)("getUSPData", 1, (c, d) => {
        b.Bb({ de: c ?? void 0, Ki: d ? void 0 : 2 });
      });
    },
    x6 = {
      zf: (a) => a.Bb,
      ve: (a, b) => ({
        __uspapiCall: { callId: b, command: "getUSPData", version: 1 },
      }),
      Ld: (a, b) => {
        b = b.__uspapiReturn;
        a({ de: b.returnValue ?? void 0, Ki: b.success ? void 0 : 2 });
      },
    };
  function y6(a) {
    let b = {};
    typeof a.data === "string" ? (b = JSON.parse(a.data)) : (b = a.data);
    return { payload: b, Kh: b.__uspapiReturn.callId };
  }
  function z6(a, b) {
    let c = {};
    if (CK(a.caller)) {
      var d = Cb(() => {
        b(c);
      });
      EK(a.caller, "getDataWithCallback", {
        Bb: (e) => {
          e.Ki || (c = e.de);
          d();
        },
      });
      setTimeout(d, a.timeoutMs);
    } else b(c);
  }
  var A6 = class extends O {
    constructor(a) {
      super();
      this.timeoutMs = {}.timeoutMs ?? 500;
      this.caller = new FK(
        a,
        "__uspapiLocator",
        (b) => typeof b.__uspapi === "function",
        y6
      );
      this.caller.F.set("getDataWithCallback", w6);
      this.caller.D.set("getDataWithCallback", x6);
    }
    g() {
      this.caller.dispose();
      super.g();
    }
  };
  function B6(a) {
    const b = new A6(a);
    return new Promise((c) => {
      z6(b, (d) => {
        d && typeof d.uspString === "string" ? c(d.uspString) : c(null);
      });
    });
  }
  function C6(a, { cn: b, kn: c, Bl: d }) {
    var e = new KP();
    var f = T(mz)
      ? Vh(d, 5) != null
        ? d.aa()
        : Vh(b, 5) != null
        ? b.aa()
        : a.aa()
      : Vh(b, 5) != null
      ? b.aa()
      : a.aa();
    e = GP(e, f);
    f = T(mz)
      ? Vh(d, 8) != null
        ? A(d, 8)
        : Vh(b, 8) != null
        ? A(b, 8)
        : void 0
      : Vh(b, 8);
    e = HP(e, f);
    a = Vh(a, 14);
    a = gi(e, 14, a);
    f = Vh(b, 3);
    a = gi(a, 3, f);
    f = hg(w(b, 2));
    a = li(a, 2, f);
    f = hg(w(b, 4));
    a = li(a, 4, f);
    f = Bf(w(b, 7));
    a = ni(a, 7, f);
    b = Vh(b, 9);
    b = gi(a, 9, b);
    a = hg(w(c, 1));
    b = li(b, 1, a);
    c = Vh(c, 13);
    c = gi(b, 13, c);
    b = hg(w(d, 11));
    c = li(c, 11, b);
    b = xh(d, 10, $f, wh(), void 0, 0);
    IP(Fh(c, 10, b, Nf), Vh(d, 12));
    return e;
  }
  async function D6(a, { Ra: b, Sl: c }) {
    const [d, e, f] = await Promise.all([
      v6(a.pubWin),
      B6(a.pubWin),
      u6(a.pubWin),
    ]);
    b = !!b && (T(nz) || !pS());
    var g = GP(new KP(), !b);
    c = gi(g, 14, c && navigator.globalPrivacyControl);
    g = new KP();
    if (d) {
      var h = GP(g, PK(d, { idpcApplies: b }));
      h = li(h, 2, d.tcString);
      h = li(h, 4, d.addtlConsent || "");
      h = ni(h, 7, d.internalErrorState);
      var k = !SK(d, ["3", "4"], 0);
      h = gi(h, 9, k);
      HP(h, !SK(d, ["2", "7", "9", "10"], 3));
      d.gdprApplies != null && gi(g, 3, d.gdprApplies);
    }
    h = new KP();
    if (e) {
      k = li(h, 1, e);
      var m = e.toUpperCase();
      if (
        m.length == 4 &&
        (m.indexOf("-") == -1 || m.substring(1) === "---") &&
        m[0] >= "1" &&
        m[0] <= "9" &&
        YP.hasOwnProperty(m[1]) &&
        YP.hasOwnProperty(m[2]) &&
        YP.hasOwnProperty(m[3])
      ) {
        var l = new XP();
        l = G(l, 1, parseInt(m[0], 10));
        l = H(l, 2, YP[m[1]]);
        l = H(l, 3, YP[m[2]]);
        m = H(l, 4, YP[m[3]]);
      } else m = null;
      m = m?.zl() === 2;
      gi(k, 13, m);
    }
    k = new KP();
    if (f)
      if (f.internalErrorState) li(k, 11, f.gppString);
      else if (t6(f.applicableSections))
        IP(Fh(k, 10, f.applicableSections, Nf), !1), T(mz) && GP(k, !0);
      else if (
        ((m = Fh(k, 10, f.applicableSections, Nf)),
        li(m, 11, f.gppString),
        T(mz))
      )
        try {
          const n = o6(f.gppString, f.applicableSections, {
            idpcApplies: b,
            supportTcfeu: !0,
            supportUsnatV2: T(oz),
          });
          HP(JP(IP(GP(k, n.Ym), n.nj), n.wi), n.dn);
        } catch (n) {
          HC(1182, n), HP(JP(IP(GP(k, !b), !1), !1), !1);
        }
      else
        try {
          const n = o6(f.gppString, f.applicableSections, {
            idpcApplies: b,
            supportUsnatV2: T(oz),
          });
          JP(IP(k, n.nj), n.wi);
        } catch (n) {
          HC(1182, n), JP(IP(k, !1), !1);
        }
    a.O = C6(c, { cn: g, kn: h, Bl: k });
  }
  var E6 = Bk(gU);
  async function F6(a) {
    const b = Cn(),
      c = a.ja,
      d = qU(a.pageState),
      e = a.pageStateTs;
    hK((h) => {
      if (C(h, 1) === 0) {
        var k = !!(T(Ez) ? e.gcs.igc : iU(d) ? d.g() : ZW(c)?.g());
        h = D(h, 2, k);
        k = !!(T(Ez) ? e.iur : Vh(d, 5) != null ? A(d, 5) : A(c, 20));
        h = D(h, 6, k);
        H(h, 1, 1);
      }
    });
    G6(a.pubWin, x(d, gU, 10) || H6(c), e.gcs);
    I6(a.G.google_ad_client);
    hK((h) => {
      C(h, 1) === 1 && H(h, 1, 2);
    });
    const f = new MK(a.pubWin);
    await J6(f, T(Ez) ? e.gd || B(c, 8) : lU(d) || B(c, 8));
    hK((h) => {
      C(h, 1) === 2 && ((h = D(h, 3, !0)), H(h, 1, 3));
    });
    await D6(a, {
      Ra: T(Ez) ? e.gcs.igc : iU(d) ? d.g() : !!ZW(c)?.g(),
      Sl: T(Ez) ? e.gcs.iga : Vh(d, 7) != null ? A(d, 7) : !!ZW(c)?.j(),
    });
    const g = Cn();
    hK((h) => {
      if (C(h, 1) === 3) {
        h = D(h, 3, g - b > 500);
        var k = !!a.O?.g();
        h = D(h, 4, k);
        k = !!a.O?.aa();
        h = D(h, 5, k);
        k = !!a.O?.j();
        h = D(h, 7, k);
        k = !!a.O?.B();
        h = D(h, 8, k);
        H(h, 1, 4);
      }
    });
  }
  function G6(a, b, c) {
    T(Ez)
      ? ((b = $i(E6())),
        (b = gi(b, 1, c?.igc)),
        (b = gi(b, 2, c?.iga)),
        (c = gi(b, 3, c?.iuswfcoor)),
        (c = ih(c)))
      : (c = ih(b));
    b = T(pz);
    a !== a.top ||
      (!b && (a.__uspapi || a.frames.__uspapiLocator)) ||
      ((a = new oS(a, c)), jS(a), kS(a));
  }
  function I6(a) {
    var b = Xd(r.top, "googlefcPresent");
    r.googlefc &&
      !b &&
      GC("adsense_fc_has_namespace_but_no_iframes", { publisherId: a }, 1);
  }
  function J6(a, b) {
    return JK(a, b === ".google.cn") ? KK(a) : Promise.resolve(null);
  }
  var K6 = kZ(
    async function (a) {
      return F6(a.Vc);
    },
    { id: 1404 }
  );
  function L6(a) {
    const b = RegExp("^https?://[^/#?]+/?$");
    return !!a && !b.test(a);
  }
  function M6(a) {
    if (a === a.top || Bd(a.top)) return Promise.resolve({ status: 4 });
    a: {
      try {
        var b = (a.top?.frames ?? {}).google_ads_top_frame;
        break a;
      } catch (d) {}
      b = null;
    }
    if (!b) return Promise.resolve({ status: 2 });
    if (a.parent === a.top && L6(a.document.referrer))
      return Promise.resolve({ status: 3 });
    const c = new xS();
    a = new MessageChannel();
    a.port1.onmessage = (d) => {
      d.data.msgType === "__goog_top_url_resp" &&
        c.resolve({ Cc: d.data.topUrl, status: d.data.topUrl ? 0 : 1 });
    };
    b.postMessage({ msgType: "__goog_top_url_req" }, "*", [a.port2]);
    return c.promise;
  }
  function N6(a) {
    const b = Cn();
    return Promise.race([M6(a), ke(200)]).then((c) => {
      GC("afc_etu", { etus: c?.status ?? 100, sig: Cn() - b, tms: 200 });
      return c?.Cc;
    });
  }
  var O6 = kZ(
    async function (a, b) {
      return N6(b);
    },
    { id: 1411 }
  );
  var B8 = Y(
    function (a, b, c, d) {
      a = 0;
      le(b) !== b && (a |= 4);
      yU(b.document) === 3 && (a |= 32);
      var e;
      if ((e = c)) (e = Ls(c)), (e = !(Qs(c).scrollWidth <= e));
      e && (a |= 1024);
      b.Prototype?.Version && (a |= 16384);
      d && (a |= d);
      return { gf: a };
    },
    { id: 1379, I: { gf: void 0 } }
  );
  var C8 = Y(
    function (a) {
      const b = a.Vc;
      b.Cc = a.Cc || "";
      return { Um: b };
    },
    { id: 1406, I: { Um: void 0 } }
  );
  function D8(a, b, c, d) {
    const e = new xS();
    let f = "";
    const g = (k) => {
      try {
        const m = typeof k.data === "object" ? k.data : JSON.parse(k.data);
        f === m.paw_id &&
          (xl(a, "message", g),
          m.error ? e.reject(Error(m.error)) : e.resolve(d(m)));
      } catch (m) {}
    };
    var h = typeof a.gmaSdk?.getQueryInfo === "function" ? a.gmaSdk : void 0;
    if (h) return wl(a, "message", g), (f = c(h)), e.promise;
    c =
      typeof a.webkit?.messageHandlers?.getGmaQueryInfo?.postMessage ===
        "function" ||
      typeof a.webkit?.messageHandlers?.getGmaSig?.postMessage === "function"
        ? a.webkit.messageHandlers
        : void 0;
    return c
      ? ((f = String(Math.floor(Id() * 2147483647))),
        wl(a, "message", g),
        b(c, f),
        e.promise)
      : null;
  }
  function E8(a) {
    return D8(
      a,
      (b, c) => void (b.getGmaQueryInfo ?? b.getGmaSig)?.postMessage(c),
      (b) => b.getQueryInfo(),
      (b) => b.signal
    );
  }
  (function (a) {
    return hb((b) => {
      if (!kb(b)) return !1;
      for (const [c, d] of Object.entries(a)) {
        const e = c,
          f = d;
        if (!(e in b)) {
          if (f.Vl === !0) continue;
          return !1;
        }
        if (!f(b[e])) return !1;
      }
      return !0;
    });
  })(
    { vc: fb, pn: fb, eid: lb(), vnm: lb(), js: fb },
    "RawGmaSdkStaticSignalObject"
  );
  function F8(a) {
    const b = U(gx);
    if (b <= 0) return null;
    const c = Cn(),
      d = E8(a.pubWin);
    if (!d) return null;
    a.B = "0";
    return Promise.race([d, ke(b, "0")])
      .then((e) => {
        GC("adsense_paw", { time: Cn() - c });
        e?.length > 1e4 ? HC(809, Error(`ML:${e.length}`)) : (a.B = e);
      })
      .catch((e) => {
        HC(809, e);
      });
  }
  var G8 = kZ(
    async function (a) {
      return F8(a.Vc);
    },
    { id: 1405 }
  );
  var H8 = class extends qZ {
    constructor(a, b, c) {
      super(a);
      var d = b.G.google_loader_features_used;
      d = Z(this, B8, {}, b.pubWin, b.M, d ? d : null);
      c && X(d, c);
      ({ Kj: d } = Z(this, i6, { gf: d.gf }, b));
      const e = nZ(this, K6, { Vc: d }),
        f = nZ(this, O6, {}, b.pubWin);
      X(f, e.complete);
      c = nZ(this, G8, { Vc: d });
      X(c, e.complete);
      d = Z(this, C8, { Vc: d, Cc: f.output });
      X(d, c.complete);
      T(Jw)
        ? (this.A = oZ(this, new h6(a, b, d.finished)).A)
        : (this.A = d.finished);
    }
  };
  var I8 = Y(
    function (a, b) {
      vX(13, b);
      vX(11, b);
      return {};
    },
    { id: 1486, I: {} }
  );
  var J8 = Y(
    function (a, b, c) {
      T(Rx) &&
        ((b.googFloatingToolbarManagerAsyncPositionUpdate = !0),
        c && c !== b && (c.googFloatingToolbarManagerAsyncPositionUpdate = !0));
      return {};
    },
    { id: 1483, I: {} }
  );
  var L8 = Y(
    function (a, b, c, d) {
      if (KJ()) {
        a = bi(c, K8, 28, dX)?.j() ?? null;
        const e = !!ZW(c)?.g();
        UP(SP(b, d.google_ad_client, a, e, A(c, 20))).run();
      }
      return {};
    },
    { id: 1485, I: {} }
  );
  var M8 = Y(
    function (a, b) {
      b.l = bi(b.ja, K8, 28, dX)?.g() ?? !0;
      return {};
    },
    { id: 1484, I: {} }
  );
  var N8 = class extends qZ {
    constructor(a, b) {
      super(a);
      this.A = new SV();
      /_sdo/.test(b.G.google_ad_format)
        ? this.A.notify()
        : ((a = Z(this, I8, {}, b.pubWin)),
          (a = X(Z(this, M8, {}, b), a.finished)),
          (a = X(Z(this, L8, {}, b.pubWin, b.ja, b.G), a.finished)),
          (this.A = X(Z(this, J8, {}, b.pubWin, b.M), a.finished).finished));
    }
  };
  var O8 = Y(
    function (a, b, c) {
      a = c.google_tag_partner;
      a = (a ? [a] : []).concat(QJ(b).tag_partners || []).join("+");
      c.google_tag_partner = a;
      a = c.google_ad_channel;
      b = (a ? [a] : []).concat(QJ(b).ad_channels || []).join("+");
      c.google_ad_channel = b;
      return {};
    },
    { id: 1444, I: {} }
  );
  var P8 = Y(
    function (a, b, c) {
      b && cV(b, zd(c.Qk, new Map(Object.entries(uU()))));
      return {};
    },
    { id: 1447, I: {} }
  );
  var Q8 = Y(
    function (a, b) {
      a = b.G;
      a.google_ad_output == null && (a.google_ad_output = "html");
      a.google_ad_client != null &&
        (a.google_ad_client = sn(String(a.google_ad_client)));
      a.google_ad_slot != null && (a.google_ad_slot = String(a.google_ad_slot));
      a.google_webgl_support = !!Im.WebGLRenderingContext;
      a.google_ad_section = a.google_ad_section || a.google_ad_region || "";
      a.google_country = a.google_country || a.google_gl || "";
      const c = new Date().getTime();
      var d =
        "google_color_bg google_color_text google_color_link google_color_url google_color_border google_color_line".split(
          " "
        );
      for (const f of d)
        if (Array.isArray(a[f])) {
          d = b;
          var e = a[f];
          d.j |= 2;
          a[f] = e[c % e.length];
        }
      return {};
    },
    { id: 1446, I: {} }
  );
  var R8 = Y(
    function (a, b, c, d, e, f, g, h) {
      DC(326, () => {
        if (pn(d) === 1) {
          var k = T(Pz);
          if ((k || T(Nz)) && b === c) {
            var m = new Km();
            const p = new Lm();
            var l = m.setCorrelator(je(b));
            var n = yX(b);
            l = mi(l, 5, n);
            H(l, 2, 1);
            m = y(p, 1, m);
            l = new Jm();
            l = D(l, 10, !0);
            n = T(Iz);
            l = D(l, 8, n);
            n = T(Jz);
            l = D(l, 12, n);
            n = T(Mz);
            l = D(l, 7, n);
            n = T(Lz);
            l = D(l, 13, n);
            y(m, 2, l);
            b.google_rum_config = zg(p);
            k =
              (T(Ez) ? h.idi : kU(qU(f)) ? jU(qU(f)) : A(e, 9)) && k
                ? g.Fm
                : g.Gm;
            Fd(b.document, k);
          } else Jn(BC);
        }
      });
      return {};
    },
    { id: 1443, I: {} }
  );
  var S8 = Y(
    function (a, b, c) {
      if (!b || QJ(b).ads_density_stats_processed || Sm(b)) return {};
      QJ(b).ads_density_stats_processed = !0;
      if (T(Sx) || Id() < 0.01) {
        const d = () => {
          if (b) {
            var e = aO(
              WN(b),
              c.google_ad_client,
              b.location.hostname,
              yX(c).split(",")
            );
            GC("ama_stats", e, 1);
          }
        };
        zl(b, () => {
          r.setTimeout(d, 1e3);
        });
      }
      return {};
    },
    { id: 1445, I: {} }
  );
  var T8 = Y(
    function (a, b) {
      ZU(b) &&
        (TT() && (b.google_adtest = b.google_adtest || "on"),
        (b.google_pgb_reactive = b.google_pgb_reactive || 3));
      return {};
    },
    { id: 1448, I: {} }
  );
  var U8 = Y(
    function (a, b) {
      a = b.google_start_time;
      typeof a === "number" && ((Bs = a), (b.google_start_time = null));
      return {};
    },
    { id: 1463, I: {} }
  );
  var V8 = class extends qZ {
    constructor(a, b) {
      super(a);
      this.A = new SV();
      var c = Z(
        this,
        R8,
        {},
        b.pubWin,
        b.M,
        b.G,
        b.ja,
        b.pageState,
        b.ua,
        b.pageStateTs
      );
      c = X(Z(this, O8, {}, b.pubWin, b.G), c.finished);
      c = X(Z(this, S8, {}, b.M, b.G), c.finished);
      c = X(Z(this, U8, {}, b.G), c.finished);
      c = X(Z(this, Q8, {}, b), c.finished);
      c = X(Z(this, P8, {}, b.M, b.ua), c.finished);
      c = X(Z(this, T8, {}, b.G), c.finished);
      this.A = oZ(this, new H8(a, b, c.finished)).A;
    }
  };
  var W8 = Y(
    function (a, b, c, d) {
      const e = a.Ya,
        f = a.ja,
        g = a.pageState,
        h = a.pageStateTs,
        k = a.Ab;
      a = qU(g);
      const m = T(Ez),
        l = b(
          e,
          f,
          m ? h.fy : Wh(a, 1),
          m ? h.bv : hU(a),
          m ? h.bvcb || "" : B(a, 9)
        );
      d.google_sa_impl = (n) =>
        c({
          ja: f,
          ua: l,
          Ya: e,
          slot: n,
          pageState: g,
          pageStateTs: h,
          Ab: k,
        });
      d.google_process_slots?.();
      return {};
    },
    { id: 1338, I: {} }
  );
  function X8(a) {
    AC.l((b) => {
      b.shv = String(a);
      b.mjsv = cr();
      b.eid = yX(r);
    });
  }
  var Y8 = Y(
    function (a, b) {
      X8(hU(qU(a.pageState)));
      oX(fX(b));
      return {};
    },
    { id: 1337, I: {} }
  );
  var Z8 = Y(
    function (a, b) {
      let c = null;
      c = c ?? new ps(b);
      try {
        Ae((d) => {
          rC(c, 1192, d);
        });
      } catch (d) {}
      return {};
    },
    { id: 1335, I: {} }
  );
  var $8 = class extends I {
    g() {
      return B(this, 1);
    }
  };
  var cX = class extends I {
    g() {
      return B(this, 1);
    }
    B() {
      return x(this, $8, 2);
    }
    j() {
      return A(this, 3);
    }
  };
  var K8 = class extends I {
    g() {
      return A(this, 1);
    }
    j() {
      return x(this, Tv, 2);
    }
  };
  function ZW(a) {
    return x(a, gU, 26);
  }
  function H6(a) {
    {
      kh(a);
      a = a.ba;
      let b = a[u] | 0;
      const c = oh(a, 26),
        d = void 0 === Ze;
      let e = ig(c, gU, !d, b);
      !d || e
        ? ((e = tg(e)), c !== e && ((b = qh(a, b, 26, e)), lh(a, b)), (a = e))
        : (a = void 0);
    }
    return a;
  }
  var a9 = class extends I {},
    dX = [27, 28];
  var b9 = typeof sttc === "undefined" ? void 0 : sttc;
  var c9 = Y(
    function (a, b, c, d) {
      try {
        const g = c.adsbygoogle.pageState;
        cb(g);
        var e = sU(g);
      } catch (g) {
        e = tU();
      }
      a = e;
      c =
        c.adsbygoogle &&
        "pageStateTs" in c.adsbygoogle &&
        c.adsbygoogle.pageStateTs
          ? c.adsbygoogle.pageStateTs
          : {
              fy: 0,
              bv: "",
              iur: !1,
              idi: !1,
              pem: void 0,
              gd: "",
              bvcb: "",
              gcs: { igc: !1, iga: !1, iuswfcoor: !1 },
              ssc: { ssl: [] },
            };
      a: {
        e = AC;
        try {
          if ((cb(b), b.length > 0)) {
            var f = new a9(JSON.parse(b));
            break a;
          }
        } catch (g) {
          e.ma(838, g instanceof Error ? g : Error(String(g)));
        }
        f = new a9();
      }
      b = f;
      Qm(16, [3, zg(b)]);
      return { pageState: a, pageStateTs: c, ja: b, Ya: d };
    },
    {
      id: 1336,
      I: { pageState: void 0, pageStateTs: void 0, ja: void 0, Ya: void 0 },
    }
  );
  var d9 = Y(
    function (a, b) {
      a = (b.Prototype || {}).Version;
      a != null && GC("prtpjs", { version: a });
      return {};
    },
    { id: 1339, I: {} }
  );
  var e9 = class extends KX {
    constructor(a) {
      super();
      this.promise = a;
      a.then((b) => {
        this.value = b;
      });
    }
    j() {
      return Promise.race([this.promise, ke(U(Mw), null)]).then((a) => {
        this.value = a;
      });
    }
  };
  var f9 = Y(
    function () {
      return T(Yw)
        ? { Ab: new e9(navigator.getBattery?.() ?? Promise.resolve(null)) }
        : { Ab: new e9(Promise.resolve(null)) };
    },
    { id: 1413, I: { Ab: void 0 } }
  );
  var g9 = class {
    constructor() {
      this.g = AC;
    }
    Ha(a) {
      const b = a.Na;
      this.g.ma(a.methodName ?? 0, b instanceof Error ? b : Error(String(b)));
    }
  };
  var h9 = yd`https://pagead2.googlesyndication.com/pagead/s/eeframe.html`;
  var i9 = Y(
    function (a) {
      let b = !1,
        c = !1;
      for (const d of Wl(a.Dc)) pi(d, 5) && ((c = !0), A(d, 4) && (b = !0));
      if ((!b && !a.O.aa()) || !c) return { R: void 0 };
      a = document.createElement("iframe");
      a.name = "goog_ee_frame";
      a.style.display = "none";
      Lc(a, h9);
      document.documentElement.appendChild(a);
      return { R: a };
    },
    { id: 1389, I: { R: void 0 } }
  );
  var j9 = Y(
    function (a) {
      return (a = a.Rm)
        ? {
            Ce: Wl(a).map((b) => {
              var c = pi(b, 2) ? B(b, uh(b, qi, 2)) : B(b, uh(b, qi, 5)),
                d = b.Oa();
              c =
                c &&
                (c.startsWith(location.protocol) ||
                  (c.startsWith("data:") && c.length <= 80))
                  ? pc(c === null ? "null" : c === void 0 ? "undefined" : c)
                  : void 0;
              return { Lk: d, url: c, Rl: A(b, 4), Ql: pi(b, 5) };
            }),
          }
        : { Ce: [] };
    },
    { id: 1040, I: { Ce: void 0 } }
  );
  var l9 = Y(k9, { id: 1041, I: {} });
  function k9(a, b) {
    if (!a.U) return {};
    xW().set(a.U, a.O, b) && a.U.g() && tW(27, a.U.Oa());
    return {};
  }
  var m9 = Y(
    function (a) {
      return AW(a.U) !== 0 ? { U: a.U } : { U: new HV() };
    },
    { id: 1036, I: { U: void 0 } }
  );
  function n9() {
    return r.googletag ?? (r.googletag = { cmd: [] });
  }
  var o9 = kZ(
    async function (a, b, c) {
      if (c) {
        var d = a.U.Oa();
        a.O.g() && (b = zd(b, { gdpr: "1" }));
        var e = B(a.O, 2);
        e && (b = zd(b, { gdpr_consent: e }));
        b = b.toString();
        tW(59, d, null, { url: b });
        e = new URL(h9.toString()).origin;
        c = MS({
          destination: window,
          R: c,
          origin: e,
          Hb: "echo-endpoint-channel",
        });
        var { data: f } = await c.j({ id: d, url: b });
        switch (f.kind) {
          case 0:
            n9().secureSignalProviders?.push({
              id: d,
              collectorFunction: () => Promise.resolve(f.data),
            });
            break;
          case 1:
            return tW(60, d, f.error), a.U.setError(bm(114));
          default:
            Ec(f, void 0);
        }
      }
    },
    { id: 1391 }
  );
  var p9 = kZ(
    async function (a, b) {
      const c = a.U.Oa(),
        d = b.toString();
      tW(30, c, null, { url: d });
      const e = document.createElement("script");
      e.setAttribute("esp-signal", "true");
      Nc(e, b);
      const { promise: f, resolve: g } = ja(Promise, "withResolvers").call(
          Promise
        ),
        h = () => {
          tW(31, c, null, { url: d });
          g(a.U.setError(bm(109)));
          xl(e, "error", h);
        };
      document.head.appendChild(e);
      wl(e, "error", h);
      return f;
    },
    { id: 1035 }
  );
  var q9 = Y(
    function (a, b, c, d) {
      ({ U: a } = xW().get(b, d, c));
      if (a) return { Ia: a, Ja: new HV("CACHED_ENTRY") };
      a = ym(dm(b));
      return { Ia: a, Ja: a.setError(bm(100)) };
    },
    { id: 1027, I: { Ia: void 0, Ja: void 0 } }
  );
  var s9 = Y(r9, { id: 1028, I: { za: void 0 } });
  function r9(a) {
    const b = a.U.Oa();
    Sh(a.U, 3) != null || tW(35, b);
    return { za: a.U };
  }
  var t9 = class extends qZ {
    constructor(a, b, c, d, e, f, g) {
      super(g);
      const h = Z(this, q9, {}, a, c, f, g);
      mZ(this, h);
      a = new NV();
      JV(a, f);
      Z(this, l9, { U: h.Ja, O: a }, c);
      f = Z(this, m9, { U: h.Ia });
      f = Z(this, s9, { U: f.U });
      d
        ? ({ output: b } = nZ(this, o9, { U: f.za, O: a }, b, e))
        : ({ output: b } = nZ(this, p9, { U: f.za }, b, g));
      Z(this, l9, { U: b, O: a }, c);
    }
  };
  var u9 = new Set(),
    v9 = Y(
      function (a, b, c, d) {
        var e = a.Ce;
        c = a.Jb;
        a = a.fl;
        if (!e?.length) return {};
        const f = c.aa();
        for (const { Lk: g, url: h, Rl: k, Ql: m } of e)
          h &&
            (f || k) &&
            !u9.has(h.toString()) &&
            (u9.add(h.toString()),
            (e = new t9(g, h, k, m, a, c, b)),
            Bt(d, e),
            e.run());
        return {};
      },
      { id: 813, I: {} }
    );
  var w9 = class extends qZ {
    constructor(a, b, c) {
      super(a);
      this.D = b;
      this.A = c;
      ({ R: b } = Z(this, i9, { O: this.A, Dc: this.D }));
      ({ Ce: c } = Z(this, j9, { Rm: this.D }));
      Z(this, v9, { Ce: c, Jb: this.A, fl: b }, a, {}, this);
    }
  };
  var x9 = Y(
    function (a) {
      const b = a.O;
      if ((a = a.Qc))
        for (var c of a)
          for (const d of Wl(c)) A(d, 4) && xW().remove(d.Oa(), b, !0);
      if (b.aa()) {
        if (b) {
          c = qW(b) ?? [];
          for (const d of c) d.startsWith("_GESPSK") && kW(d, b);
        }
        yW = new zW();
      }
      return {};
    },
    { id: 1094, I: {} }
  );
  var y9 = Y(
    function (a) {
      const b = a.U;
      a = (c) => {
        tW(c, b.Oa(), null, {
          tic: String(Math.round((Date.now() - rw(Th(b, 3))) / 6e4)),
        });
      };
      switch (AW(b)) {
        case 0:
          return (
            a(24), { Ib: new HV("FRESH_ENTRY"), Ac: new HV("FRESH_ENTRY") }
          );
        case 1:
          return a(25), { Ib: new HV("STALE_ENTRY"), Ac: b };
        case 2:
          return a(26), { Ib: b, Ac: new HV("EXPIRED_ENTRY") };
        case 3:
          return tW(9, b.Oa()), { Ib: b, Ac: new HV("ERROR_ENTRY") };
        case 4:
          return a(23), { Ib: b, Ac: new HV("NEW_ENTRY") };
        default:
          return { Ib: new HV("DEFAULT_ENTRY"), Ac: new HV("DEFAULT_ENTRY") };
      }
    },
    { id: 1048, I: { Ib: void 0, Ac: void 0 } }
  );
  var A9 = Y(z9, { id: 1046, I: { za: void 0 } });
  function z9(a) {
    return { za: a.Ia };
  }
  var B9 = Y(
    function (a) {
      const b = a.oi;
      a = a.U;
      return b.Ja
        ? { Ie: a.setError(b.Ja), Ia: new HV(), signal: new HV() }
        : { Ia: b.Ia, Ie: new HV(), signal: b.signal };
    },
    { id: 1479, I: { Ia: void 0, Ie: void 0, signal: void 0 } }
  );
  function C9(a) {
    return typeof a === "string" ? a : a instanceof Error ? a.message : null;
  }
  var D9 = kZ(
    async function (a, b) {
      const c = Cn(),
        d = hg(w(a.U, 1));
      tW(18, d);
      try {
        return b()
          .then((e) => {
            tW(29, d, null, { delta: String(Cn() - c) });
            return { Ia: li(a.U, 2, e), Ja: null, signal: e };
          })
          .catch((e) => {
            tW(28, d, C9(e));
            return { Ia: null, Ja: bm(106), signal: null };
          });
      } catch (e) {
        return tW(1, d, C9(e)), { Ia: null, Ja: bm(107), signal: null };
      }
    },
    { id: 1478 }
  );
  var F9 = class extends YV {
    constructor(a, b, c) {
      super(1047, c);
      this.collectorFunction = a;
      this.za = WV(this);
      this.D = WV(this);
      this.H = WV(this);
      this.T = XV(this, b);
    }
    A() {
      const a = this.T.value,
        b = a.Oa();
      tW(18, b);
      try {
        const c = Cn();
        this.collectorFunction()
          .then((d) => {
            tW(29, b, null, { delta: String(Cn() - c) });
            var e = this.za,
              f = li(a, 2, d);
            JV(e, f);
            JV(this.H, d ?? null);
          })
          .catch((d) => {
            tW(28, b, E9(d));
            d = this.D;
            var e = a.setError(bm(106));
            JV(d, e);
          });
      } catch (c) {
        tW(1, b, E9(c)), LV(this.D, a.setError(bm(107)));
      }
    }
  };
  function E9(a) {
    return typeof a === "string" ? a : a instanceof Error ? a.message : null;
  }
  var H9 = Y(G9, { id: 1050, I: { za: void 0 } });
  function G9(a, b) {
    const c = a.U.Oa();
    if (a.signal == null) return tW(41, c), a.U.setError(bm(111)), { za: a.U };
    if (typeof a.signal !== "string")
      return tW(21, c), { za: a.U.setError(bm(113)) };
    if (a.signal.length > b)
      return (
        tW(12, c, null, { sl: String(a.signal.length) }),
        (b = a.U.setError(bm(108))),
        ph(b, 2),
        { za: a.U }
      );
    a.signal.length || tW(20, c);
    ph(a.U, 10);
    return { za: a.U };
  }
  var I9 = class {
    constructor(a, b) {
      this.output = new SV();
      RV(this.output, a, (c) => void b.Ha({ methodName: 1046, Na: c }));
    }
  };
  var J9 = class extends I9 {};
  var K9 = class extends qZ {
    constructor(a, b, c, d, e, f = eW) {
      super(e);
      this.A = new NV();
      var g = Z(this, q9, {}, a, b, d, e);
      const h = new NV();
      JV(h, d);
      Z(this, l9, { U: g.Ja, O: h }, b);
      d = Z(this, s9, { U: g.Ia });
      g = Z(this, y9, { U: d.za }, e);
      f.Rj
        ? ((d = nZ(this, D9, { U: g.Ib }, c)),
          (d = Z(this, B9, { oi: d.output, U: g.Ib })))
        : ((d = mZ(this, new F9(c, g.Ib, this.j))),
          (d = { Ia: d.za, Ie: d.D, signal: d.H }));
      Z(this, l9, { U: d.Ie, O: h }, b);
      d = Z(this, H9, { U: d.Ia, signal: d.signal }, 1024);
      Z(this, l9, { U: d.za, O: h }, b);
      e = new J9(uW(), e);
      e = X(Z(this, A9, { Ia: g.Ac }), e.output);
      f.Rj
        ? ((c = nZ(this, D9, { U: e.za }, c)),
          (c = Z(this, B9, { oi: c.output, U: e.za })))
        : ((c = mZ(this, new F9(c, e.za, this.j))),
          (c = { Ia: c.za, Ie: c.D, signal: c.H }));
      Z(this, l9, { U: c.Ia, O: h }, b);
      b = d.za.promise
        .then((k) => ({ id: a, collectorGeneratedData: k?.j() ?? null }))
        .catch(() => ({ id: a, collectorGeneratedData: null }));
      MV(this.A, b);
    }
  };
  var L9 = class extends YV {
    constructor(a, b, c, d, e = eW) {
      super(1059, d);
      this.oa = b;
      this.ca = e;
      this.T = WV(this);
      this.D = XV(this, a);
      this.H = XV(this, c);
    }
    A() {
      var a = new FW([]);
      const b = this.D.value.id;
      var c = this.D.value.collectorFunction;
      const d = this.D.value.networkCode ?? b;
      a = !!b && !!CW(a, b);
      if (this.H.value.aa() || a)
        tW(42, d, null, { ea: String(Number(this.oa)) }),
          (c = new K9(d, a, c, this.H.value, this.F, this.ca)),
          c.run(),
          MV(this.T, c.A.promise);
    }
  };
  var M9 = Y(
    function (a, b, c, d = eW) {
      if (!b)
        return (
          tW(39, "UNKNOWN_COLLECTOR_ID"),
          { Ja: dm("UNKNOWN_COLLECTOR_ID").setError(bm(110)), Mc: new HV() }
        );
      if (typeof b !== "object")
        return (
          tW(46, "UNKNOWN_COLLECTOR_ID"),
          { Ja: dm("UNKNOWN_COLLECTOR_ID").setError(bm(112)), Mc: new HV() }
        );
      a = b.id;
      c = b.networkCode;
      a && c && (delete b.id, tW(47, `${a};${c}`));
      a = c ?? a;
      return typeof a !== "string"
        ? (tW(37, "INVALID_COLLECTOR_ID", null, { ii: JSON.stringify(a) }),
          { Ja: dm("INVALID_COLLECTOR_ID").setError(bm(102)), Mc: new HV() })
        : typeof b.collectorFunction !== "function"
        ? (tW(14, a), { Ja: dm(a).setError(bm(105)), Mc: new HV() })
        : d.Di.includes(a)
        ? (tW(22, a), { Ja: dm(a).setError(bm(104)), Mc: new HV() })
        : { Ja: null, Mc: b };
    },
    { id: 1057, I: { Ja: void 0, Mc: void 0 } }
  );
  function N9(a, b) {
    a.g.g.push(b);
  }
  var P9 = class {
    constructor(a, b, c, d = document, e, f, g = eW) {
      this.l = b;
      this.A = c;
      this.D = d;
      this.L = e;
      this.J = f;
      this.j = g;
      this.H = [];
      this.F = [];
      this.g = new O9();
      this.B = 0;
      for (const h of a) this.push(h);
    }
    push(a) {
      this.A || this.L();
      var b = new qZ(this.g);
      a = Z(b, M9, {}, a, this.g, this.j);
      const c = a.Mc;
      Z(b, l9, { U: a.Ja, O: this.l }, void 0);
      a = mZ(b, new L9(c, this.A, this.l, this.g, this.j));
      b.run();
      b = a.T.promise;
      this.H.push(b);
      for (const d of this.F) b.then(d);
    }
    addOnSignalResolveCallback(a) {
      this.F.push(a);
      for (const b of this.H) b.then(a);
    }
    clearAllCache() {
      const a =
        this.D.currentScript instanceof HTMLScriptElement
          ? this.D.currentScript.src
          : "";
      if (this.B === 1) tW(49, "", null, { url: a });
      else if (this.j.yi.includes(String($u(a ?? ""))))
        tW(48, "", null, { url: a });
      else {
        this.J && this.J();
        var b = new qZ(this.g),
          c = Z(b, x9, { O: this.l, Qc: void 0 }, this.g);
        b.run();
        this.B = 1;
        setTimeout(() => {
          this.B = 0;
        }, this.j.ti * 1e3);
        tW(43, "", null, { url: a });
        return c.finished.promise;
      }
    }
  };
  class O9 {
    constructor() {
      this.g = [];
    }
    Ha(a) {
      this.g.forEach((b) => void b.Ha(a));
    }
  }
  var Q9 = class {
    constructor(a) {
      this.push = (b) => {
        a.push(b);
      };
      this.addOnSignalResolveCallback = (b) => {
        a.addOnSignalResolveCallback(b);
      };
      this.addErrorHandler = (b) => {
        N9(a, { Ha: ({ methodName: c, Na: d }) => void b(c, d) });
      };
      this.clearAllCache = () => {
        a.clearAllCache();
      };
    }
  };
  function R9(a, b, c, d, e, f = eW) {
    if (
      !S9(a, "encryptedSignalProviders", c) ||
      !S9(a, "secureSignalProviders", c)
    ) {
      tW(38, "");
      var g = { Ha: ({ methodName: h, Na: k }) => void c(h, k) };
      T9(a, "encryptedSignalProviders", b, f, g, d, e);
      T9(a, "secureSignalProviders", b, f, g, () => {}, e);
    }
  }
  function S9(a, b, c) {
    if (a[b] === void 0 || a[b] instanceof Array) return !1;
    a[b].addErrorHandler(c);
    return !0;
  }
  function T9(a, b, c, d, e, f, g) {
    c = new P9(a[b] ?? [], c, b === "secureSignalProviders", document, f, g, d);
    a[b] = new Q9(c);
    N9(c, e);
  }
  function U9(a, b, c, d, e) {
    var f = { yi: Tz(Ow), ti: U(Nw), Di: Tz(Uw) };
    const g = new NV();
    JV(g, b);
    R9(a, g, c, d, e, f);
  }
  var W9 = Y(V9, { id: 1049, I: {} });
  function V9(a) {
    const b = new Set();
    var c = new Set(vW(a.Jb));
    for (var d of a.Qc ?? [])
      for (const e of Wl(d)) A(e, 4) && (c.add(e.Oa()), b.add(e.Oa()));
    for (const e of Array.from(c))
      if (
        (({ U: c } = xW().get(e, a.Jb, b.has(e))),
        c && ((d = AW(c)), d === 2 || d === 3))
      )
        xW().remove(hg(w(c, 1)) ?? "", a.Jb, b.has(e)), tW(40, e);
    return {};
  }
  const Y9 = NZ(
    function (a) {
      return a.Jb.aa() || X9(a.Qc);
    },
    { id: 1415 }
  );
  var Z9 = class extends KZ {
    constructor(a, b, c) {
      super(c);
      this.Jb = a;
      this.Qc = b;
      c = new J9(uW(), c);
      X(Z(this, W9, { Jb: a, Qc: b }), c.output);
    }
    async D() {
      return LZ(this.j, Y9, { Jb: this.Jb, Qc: this.Qc });
    }
    F() {}
  };
  function X9(a) {
    return a.some((b) => Wl(b).some((c) => A(c, 4)));
  }
  function $9(a, b, c, d) {
    return (e) => {
      if (
        Ou(e) &&
        eX(
          a,
          b,
          T(Ez) ? d.mcc ?? "" : mU(qU(c)),
          T(Ez) ? d.pwpc ?? "" : nU(qU(c)),
          T(Ez) ? d.hwrj ?? "" : oU(qU(c))
        )
      ) {
        var f = new g9();
        U9(
          n9(),
          e.getValue(),
          (m, l) => void f.Ha({ methodName: m, Na: l }),
          () =>
            void r.console.warn(
              "Using deprecated googletag.encryptedSignalProviders. Please usegoogletag.secureSignalProviders instead."
            ),
          () =>
            void r.console.warn(
              "Calling this method may reduce the likelihood of signals being included in ad requests for the current and potentially later page views. Due to this, it should only be called when meaningful state changes occur, such as events that indicate a new user log in, log out, sign up, etc."
            )
        );
        var g = new NV();
        LV(g, e.getValue());
        e = new qZ(f);
        var { Dc: h, af: k } = Z(e, dW, {}, qU(c)?.j(), d.ssc);
        oZ(e, new w9(f, h, g));
        oZ(e, new Z9(g, k, f));
        e.run();
      }
    };
  }
  var a$ = Y(
    function (a, b) {
      if (!T($w)) return {};
      OP({
        Bb: $9(window, SJ(window), a.pageState, a.pageStateTs),
        C: b,
        Ra: T(Ez) ? a.pageStateTs.gcs.igc : x(a.pageState, pU, 1)?.g() ?? !1,
      });
      return {};
    },
    { id: 1378, I: {} }
  );
  function b$(a, b, c) {
    var d = AC,
      e = c$;
    const f = new qZ({
        Ha: (n) => {
          const p = n.Na;
          d.ma(n.methodName ?? 0, p instanceof Error ? p : Error(String(p)));
        },
      }),
      g = Z(f, Z8, {}, b),
      {
        pageState: h,
        pageStateTs: k,
        ja: m,
        Ya: l,
      } = X(Z(f, c9, {}, a, r, b), g.finished);
    a = Z(f, Y8, { pageState: h }, r);
    X(Z(f, a$, { pageState: h, pageStateTs: k }, r), a.finished);
    ({ Ab: b } = X(Z(f, f9, {}), a.finished));
    c = X(
      Z(f, W8, { Ya: l, ja: m, pageState: h, pageStateTs: k, Ab: b }, c, e, r),
      a.finished
    );
    X(Z(f, d9, {}, r), c.finished);
    f.run();
  }
  function d$(a, b) {
    const c = jX(a.isSecureContext, a, a.document),
      d = !!a.sharedStorage?.createWorklet;
    b &&
      c &&
      d &&
      !GJ(BJ(), 34, !1) &&
      (HJ(BJ(), 34, !0),
      FZ(je(a), (e) => {
        let f = void 0;
        e.message.includes("sharedStorage.worklet.addModule is disabled") &&
          (f = 1e-4);
        AC.ma(1279, e, f);
      }));
  }
  var e$ = kZ(
    async function (a, b) {
      !T(Yw) || U(Mw) <= 0 || (await b.Ab?.j());
    },
    { id: 1390 }
  );
  var f$ = Y(
    function (a, b, c) {
      DC(1032, () => {
        if (b && T(Oz)) {
          var d = c.google_loader_used;
          GJ(BJ(), 32, !1) || (HJ(BJ(), 32, !0), zY(b, d === "sd" ? 5 : 9));
        }
      });
      return {};
    },
    { id: 1349, I: {} }
  );
  function g$(a) {
    var b = AC;
    const c = new qZ({
        Ha: (e) => {
          const f = e.Na;
          b.ma(e.methodName ?? 0, f instanceof Error ? f : Error(String(f)));
        },
      }),
      d = Z(c, f$, {}, a.M, a.G);
    a = nZ(c, e$, {}, a);
    X(a, d.finished);
    c.run();
    return a.output.promise;
  }
  var h$ = class {
    constructor(a, b) {
      this.M = a;
      this.Nc = b;
      this.g = null;
      this.l = 0;
    }
    run() {
      this.g = r.setInterval(za(this.j, this), 500);
      this.j();
    }
    j() {
      ++this.l >= 10 && r.clearInterval(this.g);
      var a = lA(this.M, this.Nc);
      mA(this.M, this.Nc, a);
      a = eA(this.Nc, this.M);
      (a != null && a.x === 0) || r.clearInterval(this.g);
    }
  };
  var i$ = class {
    constructor(a) {
      this.j = 0;
      this.O = this.D = null;
      this.A = 0;
      this.ha = [];
      this.Cc = this.B = "";
      this.l = !1;
      this.M = a.M;
      this.pubWin = a.pubWin;
      this.G = a.G;
      this.ja = a.ja;
      this.ua = a.ua;
      this.Ya = a.Ya;
      this.W = a.W;
      this.pageState = a.pageState;
      this.pageStateTs = a.pageStateTs;
      this.Yf = a.Yf;
    }
  };
  var j$ = class extends qZ {
    constructor(a, b, c, d, e) {
      super(a);
      a = new NV();
      c.cookieDeprecationLabel ? JV(a, c.cookieDeprecationLabel) : JV(a, null);
      const {
        nb: f,
        adUrl: g,
        Lb: h,
      } = Z(
        this,
        Z4,
        { sf: b, O: d, cookieDeprecationLabel: a },
        c.pubWin,
        c.G
      );
      ({ wb: b } = Z(this, f5, { nb: f }, c.G));
      ({ wb: b } = Z(this, X4, { nb: b }, e.document));
      ({ wb: e } = Z(this, e5, { nb: b }, e));
      d = nZ(
        this,
        a5,
        { ke: e, Fa: g, Lb: h, O: d },
        { G: c.G, Ke: { pubWin: c.pubWin, M: c.M }, W: c.W, ua: c.ua, ha: c.ha }
      );
      e = Z(
        this,
        b5,
        { ke: e, Fa: g, Lb: h },
        { G: c.G, Ke: { pubWin: c.pubWin, M: c.M }, W: c.W, ua: c.ua, ha: c.ha }
      );
      d = Z(this, d5, { xj: d.output, Wc: e.Wc });
      this.H = { xd: d.Le };
      c = Z(this, c5, {}, c.G, c.pubWin, c.W);
      X(c, d.finished);
      this.zd = c.finished;
    }
  };
  function k$(a) {
    const b = new NV();
    JV(b, a.adUrl);
    const c = new NV();
    a.O ? JV(c, a.O) : JV(c, null);
    const d = new NV();
    a.cookieDeprecationLabel ? JV(d, a.cookieDeprecationLabel) : JV(d);
    const e = new NV();
    JV(e, !0);
    const f = new NV();
    JV(f, !a.adUrl);
    const g = new NV();
    JV(g, !0);
    a = new g6(a.g, b, a.Vc, c, d, { ta: e, pa: f, nf: g });
    a.run();
    return { Dl: a.A.promise, Kc: a.bb.promise.then(() => {}) };
  }
  var l$ = class {
    constructor(a, b, c, d) {
      this.Vc = a;
      this.adUrl = b;
      this.O = c;
      this.cookieDeprecationLabel = d;
      this.g = {
        Ha: (e) => {
          const f = e.Na;
          (e = e.methodName) &&
            AC.ma(e, f instanceof Error ? f : Error(String(f)));
        },
      };
    }
  };
  function m$() {
    return navigator.cookieDeprecationLabel
      ? Promise.race([
          navigator.cookieDeprecationLabel
            .getValue()
            .then((a) => ({ status: 1, label: a }))
            .catch(() => ({ status: 2 })),
          ke(U(uz), { status: 5 }),
        ])
      : Promise.resolve({ status: 3 });
  }
  function n$(a) {
    a = a.innerInsElement;
    if (!a) throw Error("no_wrapper_element_in_loader_provided_slot");
    return a;
  }
  async function c$({
    ja: a,
    ua: b,
    Ya: c,
    slot: d,
    pageState: e,
    pageStateTs: f,
    Ab: g,
  }) {
    const h = d.vars,
      k = Ed(d.pubWin),
      m = n$(d),
      l = new i$({
        M: k,
        pubWin: d.pubWin,
        G: h,
        ja: a,
        ua: b,
        Ya: c,
        W: m,
        pageState: e,
        pageStateTs: f,
        Yf: T(qz) ? d.sldt : { psldt: { fldt: {} } },
      });
    l.A = Date.now();
    l.Ab = g;
    Qm(1, [l.G]);
    await g$(l);
    try {
      await o$(l);
    } catch (q) {
      if (!HC(159, q)) throw q;
    }
    DC(639, () => {
      var q;
      var v = l.G;
      (q = l.M) &&
      v.google_responsive_auto_format === 1 &&
      v.google_full_width_responsive_allowed === !0
        ? (v = (v = q.document.getElementById(v.google_async_iframe_id))
            ? $k(v, "INS", "adsbygoogle")
            : null)
          ? (new h$(q, v).run(), (q = !0))
          : (q = !1)
        : (q = !1);
      return q;
    });
    const n = (T(Ez) ? f.gd : lU(qU(e))) || B(a, 8);
    if (k?.location?.hash?.match(/\bgoog_cpmi=([^&]*)/)) {
      a = d.pubWin;
      b = l.ha;
      c = V0();
      try {
        var p = !!k?.location?.hash?.match(/\bgoog_aidd/);
      } catch (q) {
        p = !1;
      }
      FC(1008, p$(a, k, h, b, pj(ni(c, 4, p ? 2 : 1)), l.O, n), (q) => {
        q.es = h4(null);
      });
    } else
      tS(l.pubWin, "affa", (q) => {
        FC(1008, p$(d.pubWin, k, h, l.ha, q.config, l.O, n), (v) => {
          v.es = h4(null);
        });
        return !0;
      });
    q$(l);
    return l;
  }
  async function p$(a, b, c, d, e, f, g) {
    await f4(a, b, c, d, e, f, g);
  }
  function o$(a) {
    if (/_sdo/.test(a.G.google_ad_format)) return Promise.resolve();
    if (T(Kw)) {
      const c = AC;
      var b = new N8(
        {
          Ha: (d) => {
            const e = d.Na;
            c.ma(d.methodName ?? 0, e instanceof Error ? e : Error(String(e)));
          },
        },
        a
      );
      b.run();
      return b.A.promise.then(() => r$(a));
    }
    wX(a.pubWin);
    a.l = bi(a.ja, K8, 28, dX)?.g() ?? !0;
    KJ() &&
      ((b = bi(a.ja, K8, 28, dX)?.j() ?? null),
      UP(
        SP(a.pubWin, a.G.google_ad_client, b, !!ZW(a.ja)?.g(), A(a.ja, 20))
      ).run());
    T(Rx) &&
      ((a.pubWin.googFloatingToolbarManagerAsyncPositionUpdate = !0),
      a.M &&
        a.M !== a.pubWin &&
        (a.M.googFloatingToolbarManagerAsyncPositionUpdate = !0));
    return r$(a);
  }
  function r$(a) {
    const b = !Sm() && !Qb();
    return !b || (b && !s$(a)) ? t$(a) : Promise.resolve();
  }
  function s$(a) {
    return u$(a) || v$(a);
  }
  function u$(a) {
    const b = a.G;
    if (!b.google_pause_ad_requests) return !1;
    const c = r.setTimeout(() => {
        GC("abg:cmppar", {
          client: a.G.google_ad_client,
          url: a.G.google_page_url,
        });
      }, 1e4),
      d = EC(450, () => {
        b.google_pause_ad_requests = !1;
        r.clearTimeout(c);
        a.pubWin.removeEventListener(
          "adsbygoogle-pub-unpause-ad-requests-event",
          d
        );
        if (!s$(a)) {
          const e = t$(a);
          FC(1222, e);
        }
      });
    a.pubWin.addEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
    return !0;
  }
  function v$(a) {
    const b = a.pubWin.document,
      c = a.W;
    if (yU(b) === 3)
      return (
        BU(
          EC(332, () => {
            if (!w$(a, x$().visible, c)) {
              const g = t$(a);
              FC(1222, g);
            }
          }),
          b
        ),
        !0
      );
    const d = x$();
    if (d.hidden < 0 && d.visible < 0) return !1;
    const e = zU(b);
    if (!e) return !1;
    if (!AU(b)) return w$(a, d.visible, c);
    if (MT(a.M, a.pubWin, c) <= d.hidden) return !1;
    let f = EC(332, () => {
      if (!AU(b) && f) {
        xl(b, e, f);
        if (!w$(a, d.visible, c)) {
          const g = t$(a);
          FC(1222, g);
        }
        f = null;
      }
    });
    return wl(b, e, f);
  }
  function x$() {
    var a = U(lx);
    const b = U(mx);
    return b === 3 && a === 6
      ? ((a = { hidden: 0, visible: 3 }),
        r.IntersectionObserver || (a.visible = -1),
        Ub() && (a.visible *= 2),
        a)
      : { hidden: 0, visible: r.IntersectionObserver ? (Ub() ? a : b) : -1 };
  }
  function w$(a, b, c) {
    if (!c || b < 0) return !1;
    var d = a.G;
    if (
      (!ft(d.google_reactive_ad_format) &&
        (ZU(d) || d.google_reactive_ads_config)) ||
      !KT(c) ||
      MT(a.M, a.pubWin, c) <= b
    )
      return !1;
    var e = BJ(),
      f = GJ(e, 8, {});
    e = GJ(e, 9, {});
    d = d.google_ad_section || d.google_ad_region || "";
    const g = !!a.pubWin.google_apltlad;
    if (!f[d] && !e[d] && !g) return !1;
    f = new Promise((h) => {
      const k = new r.IntersectionObserver(
        (m, l) => {
          Ia(m, (n) => {
            n.intersectionRatio <= 0 || (l.unobserve(n.target), h(void 0));
          });
        },
        { rootMargin: `${b * 100}%` }
      );
      a.D = k;
      k.observe(c);
    });
    e = new Promise((h) => {
      c.addEventListener("adsbygoogle-close-to-visible-event", () => {
        h(void 0);
      });
    });
    ja(Promise, "any")
      .call(Promise, [f, e])
      .then(() => {
        DC(294, () => {
          const h = t$(a);
          FC(1222, h);
        });
      });
    return !0;
  }
  function t$(a) {
    const b = T(Jw),
      c = AC,
      d = new V8(
        {
          Ha: (e) => {
            const f = e.Na;
            c.ma(e.methodName ?? 0, f instanceof Error ? f : Error(String(f)));
          },
        },
        a
      );
    return y$(d, a, b);
  }
  async function y$(a, b, c) {
    a.run();
    await a.A.promise;
    c || (await z$(b));
  }
  function A$(a, b, c, d, e) {
    gK(ZJ());
    ZJ().Wb = a.G.google_page_url;
    d = Ol(
      Ml(
        Ll(Nl(Kl(new Pl(), Il(new Jl(), String(je(a.pubWin)))))),
        (T(Ez) ? a.pageStateTs.bv : hU(qU(a.pageState))) || B(a.ja, 2)
      ),
      d.aa()
    );
    T(Xw) && D(d, 7, !0);
    T(Cz) && D(d, 8, !0);
    T(Bz) && D(d, 9, !0);
    p_(a.pubWin, d);
    d = a.M;
    if (a.G.google_acr)
      if (a.G.google_wrap_fullscreen_ad) {
        const h = a.G.google_acr;
        g_(a.pubWin, a.W.parentElement, b, a.G.google_reactive_ad_format, a.G)
          .then(h)
          .catch(() => {
            h(null);
          });
      } else a.G.google_acr(b);
    e
      ? e.then(() => {
          yl(b);
        })
      : wl(b, "load", () => {
          yl(b);
        });
    e = (h) => {
      h &&
        a.ha.push(() => {
          h.dispose();
        });
    };
    const f = M_(a, b);
    vZ(a.pubWin, a.O, b.contentWindow, a.ha);
    if (d && (!ZU(a.G) || nV(a.G))) {
      var g;
      if (!(g = T(iy)))
        try {
          g = !!d?.location?.hash?.match(/\bgoog_uffb/);
        } catch (h) {
          g = !1;
        }
      (g = g
        ? o4(
            d,
            b,
            a.G,
            a.pubWin,
            a.ha,
            a.O,
            (T(Ez) ? a.pageStateTs.gd : lU(qU(a.pageState))) || B(a.ja, 8)
          )
        : null) && e(g);
      a.G.no_resize || e(new V_(d, b, a.W, a.G, g));
      e(new T0(a, b));
      e(d.IntersectionObserver ? null : new K_(d, b, a.W));
      d.IntersectionObserver &&
        e(
          y4(
            d,
            b,
            a.G,
            a.W,
            EC(1225, () => {
              f();
              for (const h of a.ha) h();
              a.ha.length = 0;
            })
          )
        );
    }
    d &&
      (e(E_(d, b, T(Ez) ? !!a.pageStateTs.gcs.igc : qU(a.pageState).g(), a.O)),
      a.ha.push(I0(d, a.G)),
      qs(N0).init(d, a.ja),
      a.ha.push(r_(d, a.W, b)));
    b && b.setAttribute("data-google-container-id", c);
    c = a.G.iaaso;
    c != null &&
      ((d = a.W),
      (e = d.parentElement),
      (e && wA.test(e.className) ? e : d).setAttribute("data-auto-ad-size", c));
    b.setAttribute("tabindex", "0");
    b.setAttribute("title", "Advertisement");
    b.setAttribute("aria-label", "Advertisement");
    B$(a);
    T(Ww) && O4(a, b);
  }
  function B$(a) {
    const b = Sm(a.pubWin);
    if (b)
      if (b.container === "AMP-STICKY-AD") {
        const c = (d) => {
          d.data === "fill_sticky" && b.renderStart && b.renderStart();
        };
        wl(a.pubWin, "message", EC(616, c));
        a.ha.push(() => {
          xl(a.pubWin, "message", c);
        });
      } else b.renderStart && b.renderStart();
  }
  function C$(a) {
    const b = nn(a);
    if (b !== a) {
      let c = a.lastIndexOf("&", 61432);
      c === -1 && (c = a.lastIndexOf("?", 61432));
      GC(
        "trn",
        { ol: a.length, tr: c === -1 ? "" : a.substring(c + 1), url: a },
        0.01
      );
    }
    return b;
  }
  async function z$(a) {
    var b = a.G,
      c = a.pubWin;
    const d = a.O;
    D$(a);
    d.aa() && uZ(new uX(a.pubWin), a.O, a.pubWin.location.hostname);
    if (!d.aa() && !a.l)
      return (
        GC(
          "afc_noc_req",
          {
            client: a.G.google_ad_client,
            isGdprCountry: (T(Ez)
              ? !!a.pageStateTs.gcs.igc
              : iU(qU(a.pageState))
              ? qU(a.pageState).g()
              : !!ZW(a.ja)?.g()
            ).toString(),
          },
          U(kx)
        ),
        Promise.resolve()
      );
    var e = E$(a.ua, d);
    e && document.documentElement.appendChild(e);
    T(sz) && d.aa() && (a.cookieDeprecationLabel = await PJ(BJ(), m$));
    xX(a.pubWin, d);
    if ((e = a.G.google_reactive_ads_config))
      jV(a.M, e), qV(e, a, d), (e = e.page_level_pubvars), sa(e) && hc(a.G, e);
    T(jz) && d$(a.pubWin, a.l);
    await a.g?.Og;
    T(iy) && !ZU(a.G) && (a.G.aieuf = !0);
    e = "";
    pV(b)
      ? ((e = (d.aa() ? a.ua.dg : a.ua.cg).toString() + "#" + HY(b)),
        OY(b, BJ()),
        F$(b))
      : (oV(b) || !$U(b) || YU(c, b, d)) && F$(b) && (e = EY(a, d));
    Qm(2, [b, e]);
    if (!e) return Promise.resolve();
    b.google_async_iframe_id || on(c);
    var f = pn(b);
    c = a.pubWin === a.M ? "a!" + f.toString(36) : `${f.toString(36)}.${$c()}`;
    var g = MT(a.M, a.pubWin, a.W, !0) > 0;
    f = { ifi: f, uci: c };
    g && ((g = BJ()), (f.btvi = GJ(g, 21, 1)), IJ(g, 21));
    e = ln(f, e);
    Wd() && !pV(b) && (e = Sn(e, "fsb", 1));
    (b = T(xz) && !pV(a.G) && !ZU(a.G)) && (e = Sn(e, "fca", "1"));
    e = C$(e);
    g = new NV();
    JV(g, e);
    f = new NV();
    JV(f, d);
    const h = AC,
      k = {
        Ha: (l) => {
          const n = l.Na;
          h.ma(l.methodName ?? 0, n instanceof Error ? n : Error(String(n)));
        },
      };
    if (b) {
      var m = k$(new l$(a, e, a.O, a.cookieDeprecationLabel));
      e = await m.Dl;
      m = m.Kc;
    } else
      (b = new j$(k, g, a, f, a.pubWin)),
        (e = (await pZ(b)).xd),
        await b.zd.promise;
    if (e)
      try {
        A$(a, e, c, d, m);
      } catch (l) {
        HC(223, l);
      }
  }
  function D$(a) {
    var b = a.pubWin;
    const c = a.W;
    var d = a.G;
    const e = a.Ya,
      f = U(Gz);
    d =
      !ft(d.google_reactive_ad_format) &&
      (ZU(d) || d.google_reactive_ads_config);
    if (!(a.g?.qe || f <= 0 || Ed(b) || !r.IntersectionObserver || d)) {
      a.g = {};
      var g = new ls(e),
        h = Cn();
      b = new Promise((k) => {
        let m = 0;
        const l = a.g,
          n = new r.IntersectionObserver(
            EC(1236, (p) => {
              if ((p = p.find((q) => q.target === c)))
                g.Kd.Sd.dd.g.g.Oc({ Pc: Cn() - h, Nj: ++m }),
                  (l.Xi = p.isIntersecting && p.intersectionRatio >= 0.8),
                  k();
            }),
            { threshold: [0.8] }
          );
        n.observe(c);
        l.qe = n;
      });
      a.g.Og = Promise.race([b, ke(f, null)]).then((k) => {
        g.Kd.Sd.dd.g.j.Oc({
          Pc: Cn() - h,
          status: k === null ? "TIMEOUT" : "OK",
        });
      });
    }
  }
  function F$(a) {
    const b = BJ(),
      c = a.google_ad_section;
    ZU(a) && IJ(b, 15);
    if (qn(a)) {
      if (IJ(b, 5) > 100) return !1;
    } else if (IJ(b, 6) - GJ(b, 15, 0) > 100 && c === "") return !1;
    return !0;
  }
  function E$(a, b) {
    if (Hm()) return null;
    const c = Gd("IFRAME");
    c.id = "google_esf";
    c.name = "google_esf";
    Lc(c, b.aa() ? a.dg : a.cg);
    c.style.display = "none";
    return c;
  }
  function q$(a) {
    LJ() &&
      r.setTimeout(
        EC(
          1244,
          () =>
            void zT(a.M || a.pubWin, {
              Ra: T(Ez)
                ? !!a.pageStateTs.gcs.igc
                : iU(qU(a.pageState))
                ? qU(a.pageState).g()
                : !!ZW(a.ja)?.g(),
            })
        ),
        1e3
      );
  }
  (function (a, b, c) {
    DC(843, () => {
      r.google_sa_impl || b$(a, b, c);
    });
  })(b9, cr(), function (a, b, c, d, e) {
    c = c > 2012 ? `_fy${c}` : "";
    e || (e = B(b, 3));
    d || (d = B(b, 2));
    return {
      Gm: yd`https://pagead2.googlesyndication.com/pagead/js/${d}/${e}/rum${c}.js`,
      Fm: yd`https://pagead2.googlesyndication.com/pagead/js/${d}/${e}/rum_debug${c}.js`,
      yj: yd`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/reactive_library${c}.js`,
      Qk: yd`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/debug_card_library${c}.js`,
      Xq: yd`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/slotcar_library${c}.js`,
      dg: yd`https://googleads.g.doubleclick.net/pagead/html/${d}/${e}/zrt_lookup${c}.html`,
      cg: yd`https://pagead2.googlesyndication.com/pagead/html/${d}/${e}/zrt_lookup${c}.html`,
    };
  });
}.call(this, ""));
