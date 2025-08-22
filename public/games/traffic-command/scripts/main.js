"use strict";
function w(f, a, b, d) {
  f.u.tc(f.bb, a, b, d, void 0);
}
function H(f, a, b, d) {
  f.u.ca
    ? w(f, a, b, d)
    : f.u
        .pf()
        ._OnMessageFromDOM({
          type: "event",
          component: f.bb,
          handler: a,
          dispatchOpts: d || null,
          data: b,
          responseId: null,
        });
}
function J(f, a, b) {
  f.u.C(f.bb, a, b);
}
function K(f, a) {
  for (const [b, d] of a) J(f, b, d);
}
function M(f) {
  f.Tb || (f.u.Ze(f.ie), (f.Tb = !0));
}
window.Ba = class {
  constructor(f, a) {
    this.u = f;
    this.bb = a;
    this.Tb = !1;
    this.ie = () => this.Ea();
  }
  md() {}
  Ea() {}
};
function N(f) {
  -1 !== f.Ra && (self.clearTimeout(f.Ra), (f.Ra = -1));
}
window.Qe = class {
  constructor(f, a) {
    this.Tc = f;
    this.Cg = a;
    this.Ra = -1;
    this.Ub = -Infinity;
    this.je = () => {
      this.Ra = -1;
      this.Ub = Date.now();
      this.hb = !0;
      this.Tc();
      this.hb = !1;
    };
    this.Rd = this.hb = !1;
  }
  f() {
    N(this);
    this.je = this.Tc = null;
  }
};
("use strict");
function O(f, a) {
  J(f, "get-element", (b) => {
    const d = f.ba.get(b.elementId);
    return a(d, b);
  });
}
window.Xg = class extends self.Ba {
  constructor(f, a) {
    super(f, a);
    this.ba = new Map();
    this.Sc = !0;
    K(this, [
      [
        "create",
        () => {
          throw Error("required override");
        },
      ],
      [
        "destroy",
        (b) => {
          {
            b = b.elementId;
            const d = this.ba.get(b);
            this.Sc && d.parentElement.removeChild(d);
            this.ba.delete(b);
          }
        },
      ],
      [
        "set-visible",
        (b) => {
          this.Sc &&
            (this.ba.get(b.elementId).style.display = b.isVisible
              ? ""
              : "none");
        },
      ],
      [
        "update-position",
        (b) => {
          if (this.Sc) {
            var d = this.ba.get(b.elementId);
            d.style.left = b.left + "px";
            d.style.top = b.top + "px";
            d.style.width = b.width + "px";
            d.style.height = b.height + "px";
            b = b.fontSize;
            null !== b && (d.style.fontSize = b + "em");
          }
        },
      ],
      [
        "update-state",
        (b) => {
          this.ba.get(b.elementId);
          throw Error("required override");
        },
      ],
      ["focus", (b) => this.Mc(b)],
      [
        "set-css-style",
        (b) => {
          this.ba.get(b.elementId).style[b.prop] = b.val;
        },
      ],
      [
        "set-attribute",
        (b) => {
          this.ba.get(b.elementId).setAttribute(b.name, b.val);
        },
      ],
      [
        "remove-attribute",
        (b) => {
          this.ba.get(b.elementId).removeAttribute(b.name);
        },
      ],
    ]);
    O(this, (b) => b);
  }
  Mc(f) {
    var a = this.ba.get(f.elementId);
    f.focus ? a.focus() : a.blur();
  }
};
("use strict");
{
  const f = /(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(
      navigator.userAgent
    ),
    a = /android/i.test(navigator.userAgent);
  let b = 0;
  function d(m) {
    const c = document.createElement("script");
    c.async = !1;
    c.type = "module";
    return m.Ng
      ? new Promise((k) => {
          const l = "c3_resolve_" + b;
          ++b;
          self[l] = k;
          c.textContent = m.Rg + `\n\nself["${l}"]();`;
          document.head.appendChild(c);
        })
      : new Promise((k, l) => {
          c.onload = k;
          c.onerror = l;
          c.src = m;
          document.head.appendChild(c);
        });
  }
  let g = !1,
    n = !1;
  function q() {
    if (!g) {
      try {
        new Worker("blob://", {
          get type() {
            n = !0;
          },
        });
      } catch (m) {}
      g = !0;
    }
    return n;
  }
  let v = new Audio();
  const B = {
    "audio/webm; codecs=opus": !!v.canPlayType("audio/webm; codecs=opus"),
    "audio/ogg; codecs=opus": !!v.canPlayType("audio/ogg; codecs=opus"),
    "audio/webm; codecs=vorbis": !!v.canPlayType("audio/webm; codecs=vorbis"),
    "audio/ogg; codecs=vorbis": !!v.canPlayType("audio/ogg; codecs=vorbis"),
    "audio/mp4": !!v.canPlayType("audio/mp4"),
    "audio/mpeg": !!v.canPlayType("audio/mpeg"),
  };
  v = null;
  async function D(m) {
    m = await x(m);
    return new TextDecoder("utf-8").decode(m);
  }
  function x(m) {
    return new Promise((c, k) => {
      const l = new FileReader();
      l.onload = (p) => c(p.target.result);
      l.onerror = (p) => k(p);
      l.readAsArrayBuffer(m);
    });
  }
  const y = [];
  let C = 0;
  window.RealFile = window.File;
  const E = [],
    A = new Map(),
    F = new Map();
  let I = 0;
  const L = [];
  self.runOnStartup = function (m) {
    if ("function" !== typeof m)
      throw Error("runOnStartup called without a function");
    L.push(m);
  };
  const e = new Set(["cordova", "playable-ad", "instant-games"]);
  let h = !1;
  window.na = class m {
    constructor(c) {
      this.ca = c.Tg;
      this.ra = null;
      this.F = "";
      this.hc = c.Qg;
      this.xb = {};
      this.Ka = this.wb = null;
      this.Rb = [];
      this.kb = this.G = this.Pa = null;
      this.Oa = -1;
      this.Hg = () => this.Nf();
      this.Na = [];
      this.s = c.ke;
      this.ib = "file" === location.protocol.substr(0, 4);
      !this.ca ||
        ("undefined" !== typeof OffscreenCanvas &&
          navigator.userActivation &&
          q()) ||
        (this.ca = !1);
      if ("playable-ad" === this.s || "instant-games" === this.s) this.ca = !1;
      if ("cordova" === this.s && this.ca)
        if (a) {
          const k = /Chrome\/(\d+)/i.exec(navigator.userAgent);
          (k && 90 <= parseInt(k[1], 10)) || (this.ca = !1);
        } else this.ca = !1;
      this.Xb = this.ia = null;
      ("html5" !== this.s && "playable-ad" !== this.s) ||
        !this.ib ||
        alert(
          "Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)"
        );
      "html5" !== this.s ||
        window.isSecureContext ||
        console.warn(
          "[Construct 3] Warning: the browser indicates this is not a secure context. Some features may be unavailable. Use secure (HTTPS) hosting to ensure all features are available."
        );
      this.C("runtime", "cordova-fetch-local-file", (k) => this.xf(k));
      this.C("runtime", "create-job-worker", () => this.yf());
      "cordova" === this.s
        ? document.addEventListener("deviceready", () => this.Ed(c))
        : this.Ed(c);
    }
    f() {
      this.zc();
      this.ra && (this.ra = this.ra.onmessage = null);
      this.wb && (this.wb.terminate(), (this.wb = null));
      this.Ka && (this.Ka.f(), (this.Ka = null));
      this.G && (this.G.parentElement.removeChild(this.G), (this.G = null));
    }
    Le() {
      return f && "cordova" === this.s;
    }
    sc() {
      const c = navigator.userAgent;
      return (
        (f && e.has(this.s)) ||
        navigator.standalone ||
        /crios\/|fxios\/|edgios\//i.test(c)
      );
    }
    Je() {
      return a;
    }
    td() {
      return a && e.has(this.s);
    }
    async Ed(c) {
      "macos-wkwebview" === this.s && this.Qc({ type: "ready" });
      if ("playable-ad" === this.s) {
        this.ia = self.c3_base64files;
        this.Xb = {};
        await this.df();
        for (let l = 0, p = c.Sa.length; l < p; ++l) {
          var k = c.Sa[l].toLowerCase();
          this.Xb.hasOwnProperty(k)
            ? (c.Sa[l] = { Ng: !0, Rg: this.Xb[k] })
            : this.ia.hasOwnProperty(k) &&
              (c.Sa[l] = URL.createObjectURL(this.ia[k]));
        }
      }
      c.Ig
        ? (this.F = c.Ig)
        : ((k = location.origin),
          (this.F = ("null" === k ? "file:///" : k) + location.pathname),
          (k = this.F.lastIndexOf("/")),
          -1 !== k && (this.F = this.F.substr(0, k + 1)));
      c.Vg && (this.xb = c.Vg);
      k = new MessageChannel();
      this.ra = k.port1;
      this.ra.onmessage = (l) => this._OnMessageFromRuntime(l.data);
      window.c3_addPortMessageHandler &&
        window.c3_addPortMessageHandler((l) => this.Jf(l));
      this.kb = new self.Me(this);
      await P(this.kb);
      "object" === typeof window.StatusBar && window.StatusBar.hide();
      "object" === typeof window.AndroidFullScreen &&
        window.AndroidFullScreen.immersiveMode();
      this.ca ? await this.sf(c, k.port2) : await this.rf(c, k.port2);
    }
    Cc(c) {
      c = this.xb.hasOwnProperty(c)
        ? this.xb[c]
        : c.endsWith("/workermain.js") &&
          this.xb.hasOwnProperty("workermain.js")
        ? this.xb["workermain.js"]
        : "playable-ad" === this.s && this.ia.hasOwnProperty(c.toLowerCase())
        ? this.ia[c.toLowerCase()]
        : c;
      c instanceof Blob && (c = URL.createObjectURL(c));
      return c;
    }
    async mc(c, k, l) {
      if (c.startsWith("blob:")) return new Worker(c, l);
      if ("cordova" === this.s && this.ib)
        return (
          (c = await this.yb(l.Mg ? c : this.hc + c)),
          new Worker(
            URL.createObjectURL(
              new Blob([c], { type: "application/javascript" })
            ),
            l
          )
        );
      c = new URL(c, k);
      if (location.origin !== c.origin) {
        c = await fetch(c);
        if (!c.ok) throw Error("failed to fetch worker script");
        c = await c.blob();
        return new Worker(URL.createObjectURL(c), l);
      }
      return new Worker(c, l);
    }
    pa() {
      return Math.max(window.innerWidth, 1);
    }
    fa() {
      return Math.max(window.innerHeight, 1);
    }
    Dd(c) {
      var k = this.kb;
      return {
        baseUrl: this.F,
        windowInnerWidth: this.pa(),
        windowInnerHeight: this.fa(),
        devicePixelRatio: window.devicePixelRatio,
        isFullscreen: m.Wa(),
        projectData: c.bh,
        previewImageBlobs: window.cr_previewImageBlobs || this.ia,
        previewProjectFileBlobs: window.cr_previewProjectFileBlobs,
        previewProjectFileSWUrls: window.cr_previewProjectFiles,
        swClientId: window.$g || "",
        exportType: c.ke,
        isDebug: -1 < self.location.search.indexOf("debug"),
        ife: !!self.ah,
        jobScheduler: {
          inputPort: k.Zc,
          outputPort: k.ed,
          maxNumWorkers: k.Eg,
        },
        supportedAudioFormats: B,
        opusWasmScriptUrl:
          window.cr_opusWasmScriptUrl || this.hc + "opus.wasm.js",
        opusWasmBinaryUrl:
          window.cr_opusWasmBinaryUrl || this.hc + "opus.wasm.wasm",
        isFileProtocol: this.ib,
        isiOSCordova: this.Le(),
        isiOSWebView: this.sc(),
        isFBInstantAvailable: "undefined" !== typeof self.FBInstant,
      };
    }
    async sf(c, k) {
      var l = this.Cc(c.Ug);
      this.wb = await this.mc(l, this.F, {
        type: "module",
        name: "Runtime",
        Mg: !0,
      });
      this.G = document.createElement("canvas");
      this.G.style.display = "none";
      l = this.G.transferControlToOffscreen();
      document.body.appendChild(this.G);
      window.c3canvas = this.G;
      let p = c.ld || [],
        u = c.Sa;
      p = await Promise.all(p.map((r) => this.Fa(r)));
      u = await Promise.all(u.map((r) => this.Fa(r)));
      if ("cordova" === this.s)
        for (let r = 0, t = c.kc.length; r < t; ++r) {
          const z = c.kc[r],
            G = z[0];
          if (
            G === c.jd ||
            "scriptsInEvents.js" === G ||
            G.endsWith("/scriptsInEvents.js")
          )
            z[1] = await this.Fa(G);
        }
      this.wb.postMessage(
        Object.assign(this.Dd(c), {
          type: "init-runtime",
          isInWorker: !0,
          messagePort: k,
          canvas: l,
          workerDependencyScripts: p,
          engineScripts: u,
          projectScripts: c.kc,
          mainProjectScript: c.jd,
          projectScriptsStatus: self.C3_ProjectScriptsStatus,
        }),
        [k, l, ...Q(this.kb)]
      );
      this.Rb = E.map((r) => new r(this));
      this.Cd();
      self.c3_callFunction = (r, t) => this.Pa.tf(r, t);
      "preview" === this.s &&
        (self.goToLastErrorScript = () =>
          this.tc("runtime", "go-to-last-error-script"));
    }
    async rf(c, k) {
      this.G = document.createElement("canvas");
      this.G.style.display = "none";
      document.body.appendChild(this.G);
      window.c3canvas = this.G;
      this.Rb = E.map((r) => new r(this));
      this.Cd();
      var l = c.Sa.map((r) =>
        "string" === typeof r ? new URL(r, this.F).toString() : r
      );
      Array.isArray(c.ld) && l.unshift(...c.ld);
      l = await Promise.all(l.map((r) => this.Fa(r)));
      await Promise.all(l.map((r) => d(r)));
      l = self.C3_ProjectScriptsStatus;
      const p = c.jd,
        u = c.kc;
      for (let [r, t] of u)
        if ((t || (t = r), r === p))
          try {
            (t = await this.Fa(t)),
              await d(t),
              "preview" !== this.s ||
                l[r] ||
                this.Md(r, "main script did not run to completion");
          } catch (z) {
            this.Md(r, z);
          }
        else if (
          "scriptsInEvents.js" === r ||
          r.endsWith("/scriptsInEvents.js")
        )
          (t = await this.Fa(t)), await d(t);
      "preview" === this.s && "object" !== typeof self.Wg.Yg
        ? (this.Kb(),
          console.error(
            "[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."
          ),
          alert(
            "Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."
          ))
        : ((c = Object.assign(this.Dd(c), {
            isInWorker: !1,
            messagePort: k,
            canvas: this.G,
            runOnStartupFunctions: L,
          })),
          this.Gd(),
          (this.Ka = self.C3_CreateRuntime(c)),
          await self.C3_InitRuntime(this.Ka, c));
    }
    Md(c, k) {
      this.Kb();
      console.error(`[Preview] Failed to load project main script (${c}): `, k);
      alert(
        `Failed to load project main script (${c}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`
      );
    }
    Gd() {
      this.Kb();
    }
    Kb() {
      const c = window.Jg;
      c && (c.parentElement.removeChild(c), (window.Jg = null));
    }
    async yf() {
      const c = await R(this.kb);
      return { outputPort: c, transferables: [c] };
    }
    pf() {
      if (this.ca) throw Error("not available in worker mode");
      return this.Ka;
    }
    tc(c, k, l, p, u) {
      this.ra.postMessage(
        {
          type: "event",
          component: c,
          handler: k,
          dispatchOpts: p || null,
          data: l,
          responseId: null,
        },
        u
      );
    }
    vd(c, k, l, p, u) {
      const r = I++,
        t = new Promise((z, G) => {
          F.set(r, { resolve: z, reject: G });
        });
      this.ra.postMessage(
        {
          type: "event",
          component: c,
          handler: k,
          dispatchOpts: p || null,
          data: l,
          responseId: r,
        },
        u
      );
      return t;
    }
    ["_OnMessageFromRuntime"](c) {
      const k = c.type;
      if ("event" === k) return this.Df(c);
      if ("result" === k) this.Qf(c);
      else if ("runtime-ready" === k) this.Rf();
      else if ("alert-error" === k) this.Kb(), alert(c.message);
      else if ("creating-runtime" === k) this.Gd();
      else throw Error(`unknown message '${k}'`);
    }
    Df(c) {
      const k = c.component,
        l = c.handler,
        p = c.data,
        u = c.responseId;
      if ((c = A.get(k)))
        if ((c = c.get(l))) {
          var r = null;
          try {
            r = c(p);
          } catch (t) {
            console.error(`Exception in '${k}' handler '${l}':`, t);
            null !== u && this.Jb(u, !1, "" + t);
            return;
          }
          if (null === u) return r;
          r && r.then
            ? r
                .then((t) => this.Jb(u, !0, t))
                .catch((t) => {
                  console.error(`Rejection from '${k}' handler '${l}':`, t);
                  this.Jb(u, !1, "" + t);
                })
            : this.Jb(u, !0, r);
        } else console.warn(`[DOM] No handler '${l}' for component '${k}'`);
      else console.warn(`[DOM] No event handlers for component '${k}'`);
    }
    Jb(c, k, l) {
      let p;
      l && l.transferables && (p = l.transferables);
      this.ra.postMessage(
        { type: "result", responseId: c, isOk: k, result: l },
        p
      );
    }
    Qf(c) {
      const k = c.responseId,
        l = c.isOk;
      c = c.result;
      const p = F.get(k);
      l ? p.resolve(c) : p.reject(c);
      F.delete(k);
    }
    C(c, k, l) {
      let p = A.get(c);
      p || ((p = new Map()), A.set(c, p));
      if (p.has(k))
        throw Error(`[DOM] Component '${c}' already has handler '${k}'`);
      p.set(k, l);
    }
    static Ta(c) {
      if (E.includes(c)) throw Error("DOM handler already added");
      E.push(c);
    }
    Cd() {
      for (const c of this.Rb)
        if ("runtime" === c.bb) {
          this.Pa = c;
          return;
        }
      throw Error("cannot find runtime DOM handler");
    }
    Jf(c) {
      this.tc("debugger", "message", c);
    }
    Rf() {
      for (const c of this.Rb) c.md();
    }
    static Wa() {
      return !!(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        h
      );
    }
    static Lb(c) {
      h = !!c;
    }
    Ze(c) {
      this.Na.push(c);
      this.Pc();
    }
    cg(c) {
      c = this.Na.indexOf(c);
      if (-1 === c) throw Error("invalid callback");
      this.Na.splice(c, 1);
      this.Na.length || this.zc();
    }
    Pc() {
      -1 === this.Oa &&
        this.Na.length &&
        (this.Oa = requestAnimationFrame(this.Hg));
    }
    zc() {
      -1 !== this.Oa && (cancelAnimationFrame(this.Oa), (this.Oa = -1));
    }
    Nf() {
      this.Oa = -1;
      for (const c of this.Na) c();
      this.Pc();
    }
    wa(c) {
      this.Pa.wa(c);
    }
    Da(c) {
      this.Pa.Da(c);
    }
    Oc() {
      this.Pa.Oc();
    }
    Eb(c) {
      this.Pa.Eb(c);
    }
    Ke() {
      return !!B["audio/webm; codecs=opus"];
    }
    async Ag(c) {
      c = await this.vd("runtime", "opus-decode", { arrayBuffer: c }, null, [
        c,
      ]);
      return new Float32Array(c);
    }
    Ie(c) {
      return (
        /^(?:[a-z\-]+:)?\/\//.test(c) ||
        "data:" === c.substr(0, 5) ||
        "blob:" === c.substr(0, 5)
      );
    }
    ud(c) {
      return !this.Ie(c);
    }
    async Fa(c) {
      return "cordova" === this.s &&
        (c.startsWith("file:") || (this.ib && this.ud(c)))
        ? (c.startsWith(this.F) && (c = c.substr(this.F.length)),
          (c = await this.yb(c)),
          URL.createObjectURL(
            new Blob([c], { type: "application/javascript" })
          ))
        : c;
    }
    async xf(c) {
      const k = c.filename;
      switch (c.as) {
        case "text":
          return await this.Be(k);
        case "buffer":
          return await this.yb(k);
        default:
          throw Error("unsupported type");
      }
    }
    pd(c) {
      const k =
        window.cordova.file.applicationDirectory + "www/" + c.toLowerCase();
      return new Promise((l, p) => {
        window.resolveLocalFileSystemURL(
          k,
          (u) => {
            u.file(l, p);
          },
          p
        );
      });
    }
    async Be(c) {
      c = await this.pd(c);
      return await D(c);
    }
    Ac() {
      if (y.length && !(8 <= C)) {
        C++;
        var c = y.shift();
        this.ef(c.filename, c.Sg, c.Lg);
      }
    }
    yb(c) {
      return new Promise((k, l) => {
        y.push({
          filename: c,
          Sg: (p) => {
            C--;
            this.Ac();
            k(p);
          },
          Lg: (p) => {
            C--;
            this.Ac();
            l(p);
          },
        });
        this.Ac();
      });
    }
    async ef(c, k, l) {
      try {
        const p = await this.pd(c),
          u = await x(p);
        k(u);
      } catch (p) {
        l(p);
      }
    }
    Qc(c) {
      if ("windows-webview2" === this.s)
        window.chrome.webview.postMessage(JSON.stringify(c));
      else if ("macos-wkwebview" === this.s)
        window.webkit.messageHandlers.C3Wrapper.postMessage(JSON.stringify(c));
      else throw Error("cannot send wrapper message");
    }
    async df() {
      const c = [];
      for (const [k, l] of Object.entries(this.ia)) c.push(this.cf(k, l));
      await Promise.all(c);
    }
    async cf(c, k) {
      if ("object" === typeof k)
        (this.ia[c] = new Blob([k.str], { type: k.type })),
          (this.Xb[c] = k.str);
      else {
        let l = await this.mf(k);
        l || (l = this.gf(k));
        this.ia[c] = l;
      }
    }
    async mf(c) {
      try {
        return await (await fetch(c)).blob();
      } catch (k) {
        return (
          console.warn(
            "Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",
            k
          ),
          null
        );
      }
    }
    gf(c) {
      c = this.Xf(c);
      return this.bf(c.data, c.Og);
    }
    Xf(c) {
      var k = c.indexOf(",");
      if (0 > k) throw new URIError("expected comma in data: uri");
      var l = c.substring(k + 1);
      k = c.substring(5, k).split(";");
      c = k[0] || "";
      const p = k[2];
      l = "base64" === k[1] || "base64" === p ? atob(l) : decodeURIComponent(l);
      return { Og: c, data: l };
    }
    bf(c, k) {
      var l = c.length;
      let p = l >> 2,
        u = new Uint8Array(l),
        r = new Uint32Array(u.buffer, 0, p),
        t,
        z;
      for (z = t = 0; t < p; ++t)
        r[t] =
          c.charCodeAt(z++) |
          (c.charCodeAt(z++) << 8) |
          (c.charCodeAt(z++) << 16) |
          (c.charCodeAt(z++) << 24);
      for (l &= 3; l--; ) (u[z] = c.charCodeAt(z)), ++z;
      return new Blob([u], { type: k });
    }
  };
}
("use strict");
{
  const f = self.na;
  function a(e) {
    return (
      (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) ||
      (e.originalEvent &&
        e.originalEvent.sourceCapabilities &&
        e.originalEvent.sourceCapabilities.firesTouchEvents)
    );
  }
  const b = new Map([
      ["OSLeft", "MetaLeft"],
      ["OSRight", "MetaRight"],
    ]),
    d = { dispatchRuntimeEvent: !0, dispatchUserScriptEvent: !0 },
    g = { dispatchUserScriptEvent: !0 },
    n = { dispatchRuntimeEvent: !0 };
  function q(e) {
    return new Promise((h, m) => {
      const c = document.createElement("link");
      c.onload = () => h(c);
      c.onerror = (k) => m(k);
      c.rel = "stylesheet";
      c.href = e;
      document.head.appendChild(c);
    });
  }
  function v(e) {
    return new Promise((h, m) => {
      const c = new Image();
      c.onload = () => h(c);
      c.onerror = (k) => m(k);
      c.src = e;
    });
  }
  async function B(e) {
    e = URL.createObjectURL(e);
    try {
      return await v(e);
    } finally {
      URL.revokeObjectURL(e);
    }
  }
  function D(e) {
    return new Promise((h, m) => {
      let c = new FileReader();
      c.onload = (k) => h(k.target.result);
      c.onerror = (k) => m(k);
      c.readAsText(e);
    });
  }
  async function x(e, h, m) {
    if (!/firefox/i.test(navigator.userAgent)) return await B(e);
    var c = await D(e);
    c = new DOMParser().parseFromString(c, "image/svg+xml");
    const k = c.documentElement;
    if (k.hasAttribute("width") && k.hasAttribute("height")) {
      const l = k.getAttribute("width"),
        p = k.getAttribute("height");
      if (!l.includes("%") && !p.includes("%")) return await B(e);
    }
    k.setAttribute("width", h + "px");
    k.setAttribute("height", m + "px");
    c = new XMLSerializer().serializeToString(c);
    e = new Blob([c], { type: "image/svg+xml" });
    return await B(e);
  }
  function y(e) {
    do {
      if (e.parentNode && e.hasAttribute("contenteditable")) return !0;
      e = e.parentNode;
    } while (e);
    return !1;
  }
  const C = new Set(["input", "textarea", "datalist", "select"]),
    E = new Set(["canvas", "body", "html"]);
  function A(e) {
    E.has(e.target.tagName.toLowerCase()) && e.preventDefault();
  }
  function F(e) {
    (e.metaKey || e.ctrlKey) && e.preventDefault();
  }
  self.C3_GetSvgImageSize = async function (e) {
    e = await B(e);
    if (0 < e.width && 0 < e.height) return [e.width, e.height];
    {
      e.style.position = "absolute";
      e.style.left = "0px";
      e.style.top = "0px";
      e.style.visibility = "hidden";
      document.body.appendChild(e);
      const h = e.getBoundingClientRect();
      document.body.removeChild(e);
      return [h.width, h.height];
    }
  };
  self.C3_RasterSvgImageBlob = async function (e, h, m, c, k) {
    e = await x(e, h, m);
    const l = document.createElement("canvas");
    l.width = c;
    l.height = k;
    l.getContext("2d").drawImage(e, 0, 0, h, m);
    return l;
  };
  let I = !1;
  document.addEventListener("pause", () => (I = !0));
  document.addEventListener("resume", () => (I = !1));
  function L() {
    try {
      return window.parent && window.parent.document.hasFocus();
    } catch (e) {
      return !1;
    }
  }
  f.Ta(
    class extends self.Ba {
      constructor(e) {
        super(e, "runtime");
        this.Wd = !0;
        this.Qa = -1;
        this.gd = "any";
        this.Nd = this.Od = !1;
        this.Ja = this.sb = this.ya = null;
        this.cc = this.bc = 0;
        this.$d = e.pa();
        this.Vb = e.fa();
        this.ub = 0;
        e.C("canvas", "update-size", (c) => this.Uf(c));
        e.C("runtime", "invoke-download", (c) => this.Hf(c));
        e.C("runtime", "raster-svg-image", (c) => this.Of(c));
        e.C("runtime", "get-svg-image-size", (c) => this.Ff(c));
        e.C("runtime", "set-target-orientation", (c) => this.Sf(c));
        e.C("runtime", "register-sw", () => this.Pf());
        e.C("runtime", "post-to-debugger", (c) => this.Id(c));
        e.C("runtime", "go-to-script", (c) => this.Id(c));
        e.C("runtime", "before-start-ticking", () => this.wf());
        e.C("runtime", "debug-highlight", (c) => this.zf(c));
        e.C("runtime", "enable-device-orientation", () => this.af());
        e.C("runtime", "enable-device-motion", () => this.$e());
        e.C("runtime", "add-stylesheet", (c) => this.vf(c));
        e.C("runtime", "alert", (c) => this.Gc(c));
        e.C("runtime", "hide-cordova-splash", () => this.Gf());
        const h = new Set(["input", "textarea", "datalist"]);
        window.addEventListener("contextmenu", (c) => {
          const k = c.target;
          h.has(k.tagName.toLowerCase()) || y(k) || c.preventDefault();
        });
        const m = e.G;
        window.addEventListener("selectstart", A);
        window.addEventListener("gesturehold", A);
        m.addEventListener("selectstart", A);
        m.addEventListener("gesturehold", A);
        window.addEventListener("touchstart", A, { passive: !1 });
        "undefined" !== typeof PointerEvent
          ? (window.addEventListener("pointerdown", A, { passive: !1 }),
            m.addEventListener("pointerdown", A))
          : m.addEventListener("touchstart", A);
        this.pb = 0;
        window.addEventListener("mousedown", (c) => {
          1 === c.button && c.preventDefault();
        });
        window.addEventListener("mousewheel", F, { passive: !1 });
        window.addEventListener("wheel", F, { passive: !1 });
        window.addEventListener("resize", () => this.Vf());
        window.addEventListener("fullscreenchange", () => this.Ya());
        window.addEventListener("webkitfullscreenchange", () => this.Ya());
        window.addEventListener("mozfullscreenchange", () => this.Ya());
        window.addEventListener("fullscreenerror", (c) => this.Jc(c));
        window.addEventListener("webkitfullscreenerror", (c) => this.Jc(c));
        window.addEventListener("mozfullscreenerror", (c) => this.Jc(c));
        e.sc() &&
          window.addEventListener("focusout", () => {
            {
              const l = document.activeElement;
              if (l) {
                var c = l.tagName.toLowerCase();
                var k = new Set(
                  "email number password search tel text url".split(" ")
                );
                c =
                  "textarea" === c
                    ? !0
                    : "input" === c
                    ? k.has(l.type.toLowerCase() || "text")
                    : y(l);
              } else c = !1;
            }
            c || (document.scrollingElement.scrollTop = 0);
          });
        self.C3WrapperOnMessage = (c) => this.Wf(c);
        this.La = new Set();
        this.Yb = new WeakSet();
        this.qa = !1;
      }
      wf() {
        "cordova" === this.u.s
          ? (document.addEventListener("pause", () => this.Nc(!0)),
            document.addEventListener("resume", () => this.Nc(!1)))
          : document.addEventListener("visibilitychange", () =>
              this.Nc(document.hidden)
            );
        return { isSuspended: !(!document.hidden && !I) };
      }
      md() {
        window.addEventListener("focus", () => this.$a("window-focus"));
        window.addEventListener("blur", () => {
          this.$a("window-blur", { parentHasFocus: L() });
          this.pb = 0;
        });
        window.addEventListener("focusin", (h) => {
          h = h.target;
          (C.has(h.tagName.toLowerCase()) || y(h)) && this.$a("keyboard-blur");
        });
        window.addEventListener("keydown", (h) => this.Hd("keydown", h));
        window.addEventListener("keyup", (h) => this.Hd("keyup", h));
        window.addEventListener("dblclick", (h) => this.Kc("dblclick", h, d));
        window.addEventListener("wheel", (h) => this.Lf(h));
        "undefined" !== typeof PointerEvent
          ? (window.addEventListener("pointerdown", (h) => {
              this.Dc(h);
              this.Za("pointerdown", h);
            }),
            this.u.ca &&
            "undefined" !== typeof window.onpointerrawupdate &&
            self === self.top
              ? ((this.sb = new self.Qe(() => this.kf(), 5)),
                (this.sb.Rd = !0),
                window.addEventListener("pointerrawupdate", (h) => this.Mf(h)))
              : window.addEventListener("pointermove", (h) =>
                  this.Za("pointermove", h)
                ),
            window.addEventListener("pointerup", (h) =>
              this.Za("pointerup", h)
            ),
            window.addEventListener("pointercancel", (h) =>
              this.Za("pointercancel", h)
            ))
          : (window.addEventListener("mousedown", (h) => {
              this.Dc(h);
              this.Lc("pointerdown", h);
            }),
            window.addEventListener("mousemove", (h) =>
              this.Lc("pointermove", h)
            ),
            window.addEventListener("mouseup", (h) => this.Lc("pointerup", h)),
            window.addEventListener("touchstart", (h) => {
              this.Dc(h);
              this.Ib("pointerdown", h);
            }),
            window.addEventListener("touchmove", (h) =>
              this.Ib("pointermove", h)
            ),
            window.addEventListener("touchend", (h) => this.Ib("pointerup", h)),
            window.addEventListener("touchcancel", (h) =>
              this.Ib("pointercancel", h)
            ));
        const e = () => this.Oc();
        window.addEventListener("pointerup", e, !0);
        window.addEventListener("touchend", e, !0);
        window.addEventListener("click", e, !0);
        window.addEventListener("keydown", e, !0);
        window.addEventListener("gamepadconnected", e, !0);
        this.u.Je() &&
          !this.u.td() &&
          navigator.virtualKeyboard &&
          ((navigator.virtualKeyboard.overlaysContent = !0),
          navigator.virtualKeyboard.addEventListener("geometrychange", () => {
            this.Hc(this.fa(), navigator.virtualKeyboard.boundingRect.height);
          }));
      }
      Hc(e, h) {
        document.body.style.transform = "";
        if (0 < h) {
          var m = document.activeElement;
          m &&
            ((m = m.getBoundingClientRect()),
            (e = (m.top + m.bottom) / 2 - (e - h) / 2),
            e > h && (e = h),
            0 > e && (e = 0),
            0 < e && (document.body.style.transform = `translateY(${-e}px)`));
        }
      }
      $a(e, h) {
        w(this, e, h || null, n);
      }
      pa() {
        return this.u.pa();
      }
      fa() {
        return this.u.fa();
      }
      Vf() {
        const e = this.pa(),
          h = this.fa();
        if (this.u.td()) {
          if (this.$d === e && h < this.Vb) {
            this.ub = this.Vb - h;
            this.Hc(this.Vb, this.ub);
            return;
          }
          0 < this.ub && ((this.ub = 0), this.Hc(h, this.ub));
          this.$d = e;
          this.Vb = h;
        }
        this.$a("window-resize", {
          innerWidth: e,
          innerHeight: h,
          devicePixelRatio: window.devicePixelRatio,
          isFullscreen: f.Wa(),
        });
        this.u.sc() &&
          (-1 !== this.Qa && clearTimeout(this.Qa), this.Jd(e, h, 0));
      }
      dg(e, h, m) {
        -1 !== this.Qa && clearTimeout(this.Qa);
        this.Qa = setTimeout(() => this.Jd(e, h, m), 48);
      }
      Jd(e, h, m) {
        const c = this.pa(),
          k = this.fa();
        this.Qa = -1;
        c != e || k != h
          ? this.$a("window-resize", {
              innerWidth: c,
              innerHeight: k,
              devicePixelRatio: window.devicePixelRatio,
              isFullscreen: f.Wa(),
            })
          : 10 > m && this.dg(c, k, m + 1);
      }
      Sf(e) {
        this.gd = e.targetOrientation;
      }
      wg() {
        const e = this.gd;
        if (screen.orientation && screen.orientation.lock)
          screen.orientation
            .lock(e)
            .catch((h) =>
              console.warn("[Construct 3] Failed to lock orientation: ", h)
            );
        else
          try {
            let h = !1;
            screen.lockOrientation
              ? (h = screen.lockOrientation(e))
              : screen.webkitLockOrientation
              ? (h = screen.webkitLockOrientation(e))
              : screen.mozLockOrientation
              ? (h = screen.mozLockOrientation(e))
              : screen.msLockOrientation && (h = screen.msLockOrientation(e));
            h || console.warn("[Construct 3] Failed to lock orientation");
          } catch (h) {
            console.warn("[Construct 3] Failed to lock orientation: ", h);
          }
      }
      Ya() {
        const e = f.Wa();
        e && "any" !== this.gd && this.wg();
        w(this, "fullscreenchange", {
          isFullscreen: e,
          innerWidth: this.pa(),
          innerHeight: this.fa(),
        });
      }
      Jc(e) {
        console.warn("[Construct 3] Fullscreen request failed: ", e);
        w(this, "fullscreenerror", {
          isFullscreen: f.Wa(),
          innerWidth: this.pa(),
          innerHeight: this.fa(),
        });
      }
      Nc(e) {
        e ? this.u.zc() : this.u.Pc();
        w(this, "visibilitychange", { hidden: e });
      }
      Hd(e, h) {
        "Backspace" === h.key && A(h);
        const m = b.get(h.code) || h.code;
        H(
          this,
          e,
          {
            code: m,
            key: h.key,
            which: h.which,
            repeat: h.repeat,
            altKey: h.altKey,
            ctrlKey: h.ctrlKey,
            metaKey: h.metaKey,
            shiftKey: h.shiftKey,
            timeStamp: h.timeStamp,
          },
          d
        );
      }
      Lf(e) {
        w(
          this,
          "wheel",
          {
            clientX: e.clientX,
            clientY: e.clientY,
            pageX: e.pageX,
            pageY: e.pageY,
            deltaX: e.deltaX,
            deltaY: e.deltaY,
            deltaZ: e.deltaZ,
            deltaMode: e.deltaMode,
            timeStamp: e.timeStamp,
          },
          d
        );
      }
      Kc(e, h, m) {
        a(h) ||
          H(
            this,
            e,
            {
              button: h.button,
              buttons: h.buttons,
              clientX: h.clientX,
              clientY: h.clientY,
              pageX: h.pageX,
              pageY: h.pageY,
              movementX: h.movementX || 0,
              movementY: h.movementY || 0,
              timeStamp: h.timeStamp,
            },
            m
          );
      }
      Lc(e, h) {
        if (!a(h)) {
          var m = this.pb;
          "pointerdown" === e && 0 !== m
            ? (e = "pointermove")
            : "pointerup" === e && 0 !== h.buttons && (e = "pointermove");
          H(
            this,
            e,
            {
              pointerId: 1,
              pointerType: "mouse",
              button: h.button,
              buttons: h.buttons,
              lastButtons: m,
              clientX: h.clientX,
              clientY: h.clientY,
              pageX: h.pageX,
              pageY: h.pageY,
              movementX: h.movementX || 0,
              movementY: h.movementY || 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              timeStamp: h.timeStamp,
            },
            d
          );
          this.pb = h.buttons;
          this.Kc(h.type, h, g);
        }
      }
      Za(e, h) {
        if (this.sb && "pointermove" !== e) {
          var m = this.sb;
          m.hb || (N(m), (m.Ub = Date.now()));
        }
        m = 0;
        "mouse" === h.pointerType && (m = this.pb);
        H(
          this,
          e,
          {
            pointerId: h.pointerId,
            pointerType: h.pointerType,
            button: h.button,
            buttons: h.buttons,
            lastButtons: m,
            clientX: h.clientX,
            clientY: h.clientY,
            pageX: h.pageX,
            pageY: h.pageY,
            movementX: (h.movementX || 0) + this.bc,
            movementY: (h.movementY || 0) + this.cc,
            width: h.width || 0,
            height: h.height || 0,
            pressure: h.pressure || 0,
            tangentialPressure: h.tangentialPressure || 0,
            tiltX: h.tiltX || 0,
            tiltY: h.tiltY || 0,
            twist: h.twist || 0,
            timeStamp: h.timeStamp,
          },
          d
        );
        this.cc = this.bc = 0;
        "mouse" === h.pointerType &&
          ((m = "mousemove"),
          "pointerdown" === e
            ? (m = "mousedown")
            : "pointerup" === e && (m = "mouseup"),
          this.Kc(m, h, g),
          (this.pb = h.buttons));
      }
      Mf(e) {
        this.Ja &&
          ((this.bc += this.Ja.movementX || 0),
          (this.cc += this.Ja.movementY || 0));
        this.Ja = e;
        e = this.sb;
        if (-1 === e.Ra) {
          var h = Date.now(),
            m = h - e.Ub,
            c = e.Cg;
          m >= c && e.Rd
            ? ((e.Ub = h), (e.hb = !0), e.Tc(), (e.hb = !1))
            : (e.Ra = self.setTimeout(e.je, Math.max(c - m, 4)));
        }
      }
      kf() {
        this.Za("pointermove", this.Ja);
        this.Ja = null;
      }
      Ib(e, h) {
        for (let m = 0, c = h.changedTouches.length; m < c; ++m) {
          const k = h.changedTouches[m];
          H(
            this,
            e,
            {
              pointerId: k.identifier,
              pointerType: "touch",
              button: 0,
              buttons: 0,
              lastButtons: 0,
              clientX: k.clientX,
              clientY: k.clientY,
              pageX: k.pageX,
              pageY: k.pageY,
              movementX: h.movementX || 0,
              movementY: h.movementY || 0,
              width: 2 * (k.radiusX || k.webkitRadiusX || 0),
              height: 2 * (k.radiusY || k.webkitRadiusY || 0),
              pressure: k.force || k.webkitForce || 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: k.rotationAngle || 0,
              timeStamp: h.timeStamp,
            },
            d
          );
        }
      }
      Dc(e) {
        window !== window.top && window.focus();
        this.Fd(e.target) &&
          document.activeElement &&
          !this.Fd(document.activeElement) &&
          document.activeElement.blur();
      }
      Fd(e) {
        return (
          !e ||
          e === document ||
          e === window ||
          e === document.body ||
          "canvas" === e.tagName.toLowerCase()
        );
      }
      af() {
        this.Od ||
          ((this.Od = !0),
          window.addEventListener("deviceorientation", (e) => this.Bf(e)),
          window.addEventListener("deviceorientationabsolute", (e) =>
            this.Cf(e)
          ));
      }
      $e() {
        this.Nd ||
          ((this.Nd = !0),
          window.addEventListener("devicemotion", (e) => this.Af(e)));
      }
      Bf(e) {
        w(
          this,
          "deviceorientation",
          {
            absolute: !!e.absolute,
            alpha: e.alpha || 0,
            beta: e.beta || 0,
            gamma: e.gamma || 0,
            timeStamp: e.timeStamp,
            webkitCompassHeading: e.webkitCompassHeading,
            webkitCompassAccuracy: e.webkitCompassAccuracy,
          },
          d
        );
      }
      Cf(e) {
        w(
          this,
          "deviceorientationabsolute",
          {
            absolute: !!e.absolute,
            alpha: e.alpha || 0,
            beta: e.beta || 0,
            gamma: e.gamma || 0,
            timeStamp: e.timeStamp,
          },
          d
        );
      }
      Af(e) {
        let h = null;
        var m = e.acceleration;
        m && (h = { x: m.x || 0, y: m.y || 0, z: m.z || 0 });
        m = null;
        var c = e.accelerationIncludingGravity;
        c && (m = { x: c.x || 0, y: c.y || 0, z: c.z || 0 });
        c = null;
        const k = e.rotationRate;
        k &&
          (c = { alpha: k.alpha || 0, beta: k.beta || 0, gamma: k.gamma || 0 });
        w(
          this,
          "devicemotion",
          {
            acceleration: h,
            accelerationIncludingGravity: m,
            rotationRate: c,
            interval: e.interval,
            timeStamp: e.timeStamp,
          },
          d
        );
      }
      Uf(e) {
        const h = this.u.G;
        h.style.width = e.styleWidth + "px";
        h.style.height = e.styleHeight + "px";
        h.style.marginLeft = e.marginLeft + "px";
        h.style.marginTop = e.marginTop + "px";
        this.Wd && ((h.style.display = ""), (this.Wd = !1));
      }
      Hf(e) {
        const h = e.url;
        e = e.filename;
        const m = document.createElement("a"),
          c = document.body;
        m.textContent = e;
        m.href = h;
        m.download = e;
        c.appendChild(m);
        m.click();
        c.removeChild(m);
      }
      async Of(e) {
        var h = e.imageBitmapOpts;
        e = await self.C3_RasterSvgImageBlob(
          e.blob,
          e.imageWidth,
          e.imageHeight,
          e.surfaceWidth,
          e.surfaceHeight
        );
        h = h ? await createImageBitmap(e, h) : await createImageBitmap(e);
        return { imageBitmap: h, transferables: [h] };
      }
      async Ff(e) {
        return await self.C3_GetSvgImageSize(e.blob);
      }
      async vf(e) {
        await q(e.url);
      }
      Oc() {
        var e = [...this.La];
        this.La.clear();
        if (!this.qa)
          for (const h of e)
            (e = h.play()) &&
              e.catch(() => {
                this.Yb.has(h) || this.La.add(h);
              });
      }
      wa(e) {
        if ("function" !== typeof e.play) throw Error("missing play function");
        this.Yb.delete(e);
        let h;
        try {
          h = e.play();
        } catch (m) {
          this.La.add(e);
          return;
        }
        h &&
          h.catch(() => {
            this.Yb.has(e) || this.La.add(e);
          });
      }
      Da(e) {
        this.La.delete(e);
        this.Yb.add(e);
      }
      Eb(e) {
        this.qa = !!e;
      }
      Gf() {
        navigator.splashscreen &&
          navigator.splashscreen.hide &&
          navigator.splashscreen.hide();
      }
      zf(e) {
        if (e.show) {
          this.ya ||
            ((this.ya = document.createElement("div")),
            (this.ya.id = "inspectOutline"),
            document.body.appendChild(this.ya));
          var h = this.ya;
          h.style.display = "";
          h.style.left = e.left - 1 + "px";
          h.style.top = e.top - 1 + "px";
          h.style.width = e.width + 2 + "px";
          h.style.height = e.height + 2 + "px";
          h.textContent = e.name;
        } else this.ya && (this.ya.style.display = "none");
      }
      Pf() {
        window.C3_RegisterSW && window.C3_RegisterSW();
      }
      Id(e) {
        window.c3_postToMessagePort &&
          ((e.from = "runtime"), window.c3_postToMessagePort(e));
      }
      tf(e, h) {
        return this.u.vd(
          this.bb,
          "js-invoke-function",
          { name: e, params: h },
          void 0,
          void 0
        );
      }
      Gc(e) {
        alert(e.message);
      }
      Wf(e) {
        "entered-fullscreen" === e
          ? (f.Lb(!0), this.Ya())
          : "exited-fullscreen" === e
          ? (f.Lb(!1), this.Ya())
          : console.warn("Unknown wrapper message: ", e);
      }
    }
  );
}
("use strict");
async function P(f) {
  if (f.Bg) throw Error("already initialised");
  f.Bg = !0;
  var a = f.fc.Cc("dispatchworker.js");
  f.Vc = await f.fc.mc(a, f.F, { name: "DispatchWorker" });
  a = new MessageChannel();
  f.Zc = a.port1;
  f.Vc.postMessage({ type: "_init", "in-port": a.port2 }, [a.port2]);
  f.ed = await R(f);
}
function Q(f) {
  return [f.Zc, f.ed];
}
async function R(f) {
  const a = f.Xd.length;
  var b = f.fc.Cc("jobworker.js");
  b = await f.fc.mc(b, f.F, { name: "JobWorker" + a });
  const d = new MessageChannel(),
    g = new MessageChannel();
  f.Vc.postMessage({ type: "_addJobWorker", port: d.port1 }, [d.port1]);
  b.postMessage(
    {
      type: "init",
      number: a,
      "dispatch-port": d.port2,
      "output-port": g.port2,
    },
    [d.port2, g.port2]
  );
  f.Xd.push(b);
  return g.port1;
}
self.Me = class {
  constructor(f) {
    this.fc = f;
    this.F = f.F;
    this.F = "preview" === f.s ? this.F + "workers/" : this.F + f.hc;
    this.Eg = Math.min(navigator.hardwareConcurrency || 2, 16);
    this.Vc = null;
    this.Xd = [];
    this.ed = this.Zc = null;
  }
};
("use strict");
window.C3_IsSupported &&
  (window.c3_runtimeInterface = new self.na({
    Tg: !1,
    Ug: "workermain.js",
    Sa: ["scripts/c3runtime.js"],
    kc: [],
    jd: "",
    Qg: "scripts/",
    ld: [],
    ke: "html5",
  }));
("use strict");
{
  const f = 180 / Math.PI;
  self.da = class extends self.Ba {
    constructor(a) {
      super(a, "audio");
      this.Qb = this.c = null;
      this.Sb = this.Yc = !1;
      this.ta = () => this.xg();
      this.$ = [];
      this.D = [];
      this.ha = null;
      this.Yd = "";
      this.Zd = -1;
      this.rb = new Map();
      this.bd = 1;
      this.qa = !1;
      this.hd = 0;
      this.ic = 1;
      this.Wc = 0;
      this.be = "HRTF";
      this.Sd = "inverse";
      this.ce = 600;
      this.ae = 1e4;
      this.ee = 1;
      this.Ud = this.fd = !1;
      this.he = this.u.Ke();
      this.aa = new Map();
      this.Ha = new Set();
      this.$c = !1;
      this.cd = "";
      this.za = null;
      self.C3Audio_OnMicrophoneStream = (b, d) => this.Kf(b, d);
      this.Pb = null;
      self.C3Audio_GetOutputStream = () => this.Ef();
      self.C3Audio_DOMInterface = this;
      K(this, [
        ["create-audio-context", (b) => this.ff(b)],
        ["play", (b) => this.Yf(b)],
        ["stop", (b) => this.ug(b)],
        ["stop-all", () => this.vg()],
        ["set-paused", (b) => this.ng(b)],
        ["set-volume", (b) => this.sg(b)],
        ["fade-volume", (b) => this.lf(b)],
        ["set-master-volume", (b) => this.lg(b)],
        ["set-muted", (b) => this.mg(b)],
        ["set-silent", (b) => this.pg(b)],
        ["set-looping", (b) => this.kg(b)],
        ["set-playback-rate", (b) => this.og(b)],
        ["seek", (b) => this.eg(b)],
        ["preload", (b) => this.Zf(b)],
        ["unload", (b) => this.yg(b)],
        ["unload-all", () => this.zg()],
        ["set-suspended", (b) => this.qg(b)],
        ["get-suspended", () => this.qf()],
        ["add-effect", (b) => this.Ad(b)],
        ["set-effect-param", (b) => this.hg(b)],
        ["remove-effects", (b) => this.ag(b)],
        ["tick", (b) => this.Tf(b)],
        ["load-state", (b) => this.If(b)],
      ]);
    }
    async ff(a) {
      a.isiOSCordova && (this.fd = !0);
      this.hd = a.timeScaleMode;
      this.be = ["equalpower", "HRTF", "soundfield"][a.panningModel];
      this.Sd = ["linear", "inverse", "exponential"][a.distanceModel];
      this.ce = a.refDistance;
      this.ae = a.maxDistance;
      this.ee = a.rolloffFactor;
      var b = { latencyHint: a.latencyHint };
      this.he || (b.sampleRate = 48e3);
      if ("undefined" !== typeof AudioContext) this.c = new AudioContext(b);
      else if ("undefined" !== typeof webkitAudioContext)
        this.c = new webkitAudioContext(b);
      else throw Error("Web Audio API not supported");
      this.Bd();
      this.c.onstatechange = () => {
        "running" !== this.c.state && this.Bd();
      };
      this.Qb = this.c.createGain();
      this.Qb.connect(this.c.destination);
      b = a.listenerPos;
      this.c.listener.setPosition(b[0], b[1], b[2]);
      this.c.listener.setOrientation(0, 0, 1, 0, -1, 0);
      self.C3_GetAudioContextCurrentTime = () => this.nc();
      try {
        await Promise.all(
          a.preloadList.map((d) => this.Gb(d.originalUrl, d.url, d.type, !1))
        );
      } catch (d) {
        console.error("[Construct 3] Preloading sounds failed: ", d);
      }
      return { sampleRate: this.c.sampleRate };
    }
    Bd() {
      this.Sb ||
        ((this.Yc = !1),
        window.addEventListener("pointerup", this.ta, !0),
        window.addEventListener("touchend", this.ta, !0),
        window.addEventListener("click", this.ta, !0),
        window.addEventListener("keydown", this.ta, !0),
        (this.Sb = !0));
    }
    hf() {
      this.Sb &&
        ((this.Yc = !0),
        window.removeEventListener("pointerup", this.ta, !0),
        window.removeEventListener("touchend", this.ta, !0),
        window.removeEventListener("click", this.ta, !0),
        window.removeEventListener("keydown", this.ta, !0),
        (this.Sb = !1));
    }
    xg() {
      if (!this.Yc) {
        var a = this.c;
        "suspended" === a.state && a.resume && a.resume();
        var b = a.createBuffer(1, 220, 22050),
          d = a.createBufferSource();
        d.buffer = b;
        d.connect(a.destination);
        d.start(0);
        "running" === a.state && this.hf();
      }
    }
    W() {
      return this.c;
    }
    nc() {
      return this.c.currentTime;
    }
    ua() {
      return this.Qb;
    }
    rd(a) {
      return (a = this.aa.get(a.toLowerCase())) ? a[0].P() : this.ua();
    }
    le(a, b) {
      a = a.toLowerCase();
      let d = this.aa.get(a);
      d || ((d = []), this.aa.set(a, d));
      b.jg(d.length);
      b.rg(a);
      d.push(b);
      this.Ld(a);
    }
    Ld(a) {
      let b = this.ua();
      const d = this.aa.get(a);
      if (d && d.length) {
        b = d[0].P();
        for (let g = 0, n = d.length; g < n; ++g) {
          const q = d[g];
          g + 1 === n ? q.S(this.ua()) : q.S(d[g + 1].P());
        }
      }
      for (const g of this.ma(a)) g.Re(b);
      this.za && this.cd === a && (this.za.disconnect(), this.za.connect(b));
    }
    Ab() {
      return this.bd;
    }
    Bb() {
      return this.qa;
    }
    ig() {
      this.Ud = !0;
    }
    De(a, b) {
      return b
        ? this.u.Ag(a).then((d) => {
            const g = this.c.createBuffer(1, d.length, 48e3);
            g.getChannelData(0).set(d);
            return g;
          })
        : new Promise((d, g) => {
            this.c.decodeAudioData(a, d, g);
          });
    }
    wa(a) {
      this.u.wa(a);
    }
    Da(a) {
      this.u.Da(a);
    }
    wd(a) {
      let b = 0;
      for (let d = 0, g = this.D.length; d < g; ++d) {
        const n = this.D[d];
        this.D[b] = n;
        n.L === a ? n.f() : ++b;
      }
      this.D.length = b;
    }
    Se() {
      let a = 0;
      for (let b = 0, d = this.$.length; b < d; ++b) {
        const g = this.$[b];
        this.$[a] = g;
        g.va() ? g.f() : ++a;
      }
      this.$.length = a;
    }
    *ma(a) {
      if (a) for (const b of this.D) self.da.Ee(b.Y, a) && (yield b);
      else this.ha && !this.ha.T() && (yield this.ha);
    }
    async Gb(a, b, d, g, n) {
      for (const q of this.$) if (q.Va() === b) return await S(q), q;
      if (n) return null;
      g && (this.fd || this.Ud) && this.Se();
      n = "audio/webm; codecs=opus" === d && !this.he;
      g && n && this.ig();
      a =
        !g || this.fd || n
          ? new self.ze(this, a, b, d, g, n)
          : new self.xe(this, a, b, d, g);
      this.$.push(a);
      await S(a);
      return a;
    }
    async Bc(a, b, d, g, n) {
      for (const q of this.D)
        if (q.Va() === b && (q.lc() || n)) return q.Ue(g), q;
      a = await this.Gb(a, b, d, n);
      g = "html5" === a.Rc ? new self.ye(a.i, a, g) : new self.Ae(a.i, a, g);
      this.D.push(g);
      return g;
    }
    Ye(a) {
      let b = this.rb.get(a);
      if (!b) {
        let d = null;
        b = { kd: 0, Pg: new Promise((g) => (d = g)), resolve: d };
        this.rb.set(a, b);
      }
      b.kd++;
    }
    bg(a) {
      const b = this.rb.get(a);
      if (!b) throw Error("expected pending tag");
      b.kd--;
      0 === b.kd && (b.resolve(), this.rb.delete(a));
    }
    yc(a) {
      a || (a = this.Yd);
      return (a = this.rb.get(a)) ? a.Pg : Promise.resolve();
    }
    Hb() {
      if (0 < this.Ha.size) M(this);
      else
        for (const a of this.D)
          if (a.sd()) {
            M(this);
            break;
          }
    }
    Ea() {
      for (var a of this.Ha) a.Ea();
      a = this.nc();
      for (var b of this.D) b.Ea(a);
      b = this.D.filter((d) => d.sd()).map((d) => d.Ua());
      w(this, "state", {
        tickCount: this.Zd,
        audioInstances: b,
        analysers: [...this.Ha].map((d) => d.Ge()),
      });
      0 === b.length &&
        0 === this.Ha.size &&
        this.Tb &&
        (this.u.cg(this.ie), (this.Tb = !1));
    }
    uc(a, b, d) {
      w(this, "trigger", { type: a, tag: b, aiid: d });
    }
    async Yf(a) {
      const b = a.originalUrl,
        d = a.url,
        g = a.type,
        n = a.isMusic,
        q = a.tag,
        v = a.isLooping,
        B = a.vol,
        D = a.pos,
        x = a.panning;
      let y = a.off;
      0 < y &&
        !a.trueClock &&
        (this.c.getOutputTimestamp
          ? ((a = this.c.getOutputTimestamp()),
            (y = y - a.performanceTime / 1e3 + a.contextTime))
          : (y = y - performance.now() / 1e3 + this.c.currentTime));
      this.Yd = q;
      this.Ye(q);
      try {
        (this.ha = await this.Bc(b, d, g, q, n)),
          x
            ? (this.ha.Db(!0),
              this.ha.Te(
                x.x,
                x.y,
                x.angle,
                x.innerAngle,
                x.outerAngle,
                x.outerGain
              ),
              x.hasOwnProperty("uid") && this.ha.Ve(x.uid))
            : this.ha.Db(!1),
          this.ha.Play(v, B, D, y);
      } catch (C) {
        console.error("[Construct 3] Audio: error starting playback: ", C);
        return;
      } finally {
        this.bg(q);
      }
      M(this);
    }
    ug(a) {
      a = a.tag;
      for (const b of this.ma(a)) b.oa();
    }
    vg() {
      for (const a of this.D) a.oa();
    }
    ng(a) {
      const b = a.tag;
      a = a.paused;
      for (const d of this.ma(b)) a ? d.Xa() : d.Cb();
      this.Hb();
    }
    sg(a) {
      const b = a.tag;
      a = a.vol;
      for (const d of this.ma(b)) d.Fb(a);
    }
    async lf(a) {
      const b = a.tag,
        d = a.vol,
        g = a.duration;
      a = a.stopOnEnd;
      await this.yc(b);
      for (const n of this.ma(b)) n.Fe(d, g, a);
      this.Hb();
    }
    lg(a) {
      this.bd = a.vol;
      for (const b of this.D) b.Nb();
    }
    mg(a) {
      const b = a.tag;
      a = a.isMuted;
      for (const d of this.ma(b)) d.xd(a);
    }
    pg(a) {
      this.qa = a.isSilent;
      this.u.Eb(this.qa);
      for (const b of this.D) b.Mb();
    }
    kg(a) {
      const b = a.tag;
      a = a.isLooping;
      for (const d of this.ma(b)) d.wc(a);
    }
    async og(a) {
      const b = a.tag;
      a = a.rate;
      await this.yc(b);
      for (const d of this.ma(b)) d.zd(a);
    }
    async eg(a) {
      const b = a.tag;
      a = a.pos;
      await this.yc(b);
      for (const d of this.ma(b)) d.vc(a);
    }
    async Zf(a) {
      const b = a.originalUrl,
        d = a.url,
        g = a.type;
      a = a.isMusic;
      try {
        await this.Bc(b, d, g, "", a);
      } catch (n) {
        console.error("[Construct 3] Audio: error preloading: ", n);
      }
    }
    async yg(a) {
      if ((a = await this.Gb("", a.url, a.type, a.isMusic, !0)))
        a.f(), (a = this.$.indexOf(a)), -1 !== a && this.$.splice(a, 1);
    }
    zg() {
      for (const a of this.$) a.f();
      this.$.length = 0;
    }
    qg(a) {
      a = a.isSuspended;
      !a && this.c.resume && this.c.resume();
      for (const b of this.D) b.xc(a);
      a && this.c.suspend && this.c.suspend();
    }
    qf() {
      return this.c ? this.c.state : "suspended";
    }
    Tf(a) {
      this.ic = a.timeScale;
      this.Wc = a.gameTime;
      this.Zd = a.tickCount;
      if (0 !== this.hd) for (var b of this.D) b.Ga();
      (b = a.listenerPos) && this.c.listener.setPosition(b[0], b[1], b[2]);
      for (const d of a.instPans) {
        a = d.uid;
        for (const g of this.D) g.ga === a && g.yd(d.x, d.y, d.angle);
      }
    }
    async Ad(a) {
      var b = a.type;
      const d = a.tag;
      var g = a.params;
      if ("filter" === b) g = new self.re(this, ...g);
      else if ("delay" === b) g = new self.pe(this, ...g);
      else if ("convolution" === b) {
        b = null;
        try {
          b = await this.Gb(a.bufferOriginalUrl, a.bufferUrl, a.bufferType, !1);
        } catch (n) {
          console.log("[Construct 3] Audio: error loading convolution: ", n);
          return;
        }
        g = new self.oe(this, b.Z, ...g);
        g.fg(a.bufferOriginalUrl, a.bufferType);
      } else if ("flanger" === b) g = new self.se(this, ...g);
      else if ("phaser" === b) g = new self.ue(this, ...g);
      else if ("gain" === b) g = new self.te(this, ...g);
      else if ("tremolo" === b) g = new self.we(this, ...g);
      else if ("ringmod" === b) g = new self.ve(this, ...g);
      else if ("distortion" === b) g = new self.qe(this, ...g);
      else if ("compressor" === b) g = new self.ne(this, ...g);
      else if ("analyser" === b) g = new self.me(this, ...g);
      else throw Error("invalid effect type");
      this.le(d, g);
      this.Kd();
    }
    hg(a) {
      const b = a.index,
        d = a.param,
        g = a.value,
        n = a.ramp,
        q = a.time;
      a = this.aa.get(a.tag);
      !a || 0 > b || b >= a.length || (a[b].X(d, g, n, q), this.Kd());
    }
    ag(a) {
      a = a.tag.toLowerCase();
      const b = this.aa.get(a);
      if (b && b.length) {
        for (const d of b) d.f();
        this.aa.delete(a);
        this.Ld(a);
      }
    }
    Xe(a) {
      this.Ha.add(a);
      this.Hb();
    }
    $f(a) {
      this.Ha.delete(a);
    }
    Kd() {
      this.$c || ((this.$c = !0), Promise.resolve().then(() => this.jf()));
    }
    jf() {
      const a = {};
      for (const [b, d] of this.aa) a[b] = d.map((g) => g.Ua());
      w(this, "fxstate", { fxstate: a });
      this.$c = !1;
    }
    async If(a) {
      const b = a.saveLoadMode;
      if (3 !== b)
        for (var d of this.D)
          (d.va() && 1 === b) || ((d.va() || 2 !== b) && d.oa());
      for (const g of this.aa.values()) for (const n of g) n.f();
      this.aa.clear();
      this.ic = a.timeScale;
      this.Wc = a.gameTime;
      d = a.listenerPos;
      this.c.listener.setPosition(d[0], d[1], d[2]);
      this.qa = a.isSilent;
      this.u.Eb(this.qa);
      this.bd = a.masterVolume;
      d = [];
      for (const g of Object.values(a.effects))
        d.push(Promise.all(g.map((n) => this.Ad(n))));
      await Promise.all(d);
      await Promise.all(a.playing.map((g) => this.uf(g, b)));
      this.Hb();
    }
    async uf(a, b) {
      if (3 !== b) {
        var d = a.bufferOriginalUrl,
          g = a.bufferUrl,
          n = a.bufferType,
          q = a.isMusic,
          v = a.tag,
          B = a.isLooping,
          D = a.volume,
          x = a.playbackTime;
        if (!q || 1 !== b)
          if (q || 2 !== b) {
            b = null;
            try {
              b = await this.Bc(d, g, n, v, q);
            } catch (y) {
              console.error(
                "[Construct 3] Audio: error loading audio state: ",
                y
              );
              return;
            }
            b.Pe(a.pan);
            b.Play(B, D, x, 0);
            a.isPlaying || b.Xa();
            b.Fc(a);
          }
      }
    }
    Kf(a, b) {
      this.za && this.za.disconnect();
      this.cd = b.toLowerCase();
      this.za = this.c.createMediaStreamSource(a);
      this.za.connect(this.rd(this.cd));
    }
    Ef() {
      this.Pb ||
        ((this.Pb = this.c.createMediaStreamDestination()),
        this.Qb.connect(this.Pb));
      return this.Pb.stream;
    }
    static Ee(a, b) {
      return a.length !== b.length
        ? !1
        : a === b
        ? !0
        : a.toLowerCase() === b.toLowerCase();
    }
    static We(a) {
      return a * f;
    }
    static Ce(a) {
      return Math.pow(10, a / 20);
    }
    static qd(a) {
      return Math.max(Math.min(self.da.Ce(a), 1), 0);
    }
    static Oe(a) {
      return (Math.log(a) / Math.log(10)) * 20;
    }
    static Ne(a) {
      return self.da.Oe(Math.max(Math.min(a, 1), 0));
    }
    static Kg(a, b) {
      return 1 - Math.exp(-b * a);
    }
  };
  self.na.Ta(self.da);
}
("use strict");
function S(f) {
  f.Wb || (f.Wb = f.Ec());
  return f.Wb;
}
self.nd = class {
  constructor(f, a, b, d, g) {
    this.i = f;
    this.Gg = a;
    this.Aa = b;
    this.R = d;
    this.Dg = g;
    this.Rc = "";
    this.Wb = null;
  }
  f() {
    this.Wb = this.i = null;
  }
  Ec() {}
  W() {
    return this.i.W();
  }
  pc() {
    return this.Gg;
  }
  Va() {
    return this.Aa;
  }
  oc() {
    return this.R;
  }
  va() {
    return this.Dg;
  }
  ea() {}
};
("use strict");
self.xe = class extends self.nd {
  constructor(f, a, b, d, g) {
    super(f, a, b, d, g);
    this.Rc = "html5";
    this.K = new Audio();
    this.K.crossOrigin = "anonymous";
    this.K.autoplay = !1;
    this.K.preload = "auto";
    this.lb = this.mb = null;
    this.K.addEventListener("canplaythrough", () => !0);
    this.qb = this.W().createGain();
    this.ob = null;
    this.K.addEventListener("canplay", () => {
      this.mb && (this.mb(), (this.lb = this.mb = null));
      !this.ob &&
        this.K &&
        ((this.ob = this.W().createMediaElementSource(this.K)),
        this.ob.connect(this.qb));
    });
    this.onended = null;
    this.K.addEventListener("ended", () => {
      if (this.onended) this.onended();
    });
    this.K.addEventListener("error", (n) => {
      console.error(`[Construct 3] Audio '${this.Aa}' error: `, n);
      this.lb && (this.lb(n), (this.lb = this.mb = null));
    });
  }
  f() {
    this.i.wd(this);
    this.qb.disconnect();
    this.qb = null;
    this.ob.disconnect();
    this.ob = null;
    this.K && !this.K.paused && this.K.pause();
    this.K = this.onended = null;
    super.f();
  }
  Ec() {
    return new Promise((f, a) => {
      this.mb = f;
      this.lb = a;
      this.K.src = this.Aa;
    });
  }
  O() {
    return this.K;
  }
  ea() {
    return this.K.duration;
  }
};
("use strict");
async function T(f) {
  if (f.xa) return f.xa;
  var a = f.i.u;
  if ("cordova" === a.s && a.ud(f.Aa) && a.ib) f.xa = await a.yb(f.Aa);
  else {
    a = await fetch(f.Aa);
    if (!a.ok)
      throw Error(`error fetching audio data: ${a.status} ${a.statusText}`);
    f.xa = await a.arrayBuffer();
  }
}
async function U(f) {
  if (f.Z) return f.Z;
  f.Z = await f.i.De(f.xa, f.Fg);
  f.xa = null;
}
self.ze = class extends self.nd {
  constructor(f, a, b, d, g, n) {
    super(f, a, b, d, g);
    this.Rc = "webaudio";
    this.Z = this.xa = null;
    this.Fg = !!n;
  }
  f() {
    this.i.wd(this);
    this.Z = this.xa = null;
    super.f();
  }
  async Ec() {
    try {
      await T(this), await U(this);
    } catch (f) {
      console.error(`[Construct 3] Failed to load audio '${this.Aa}': `, f);
    }
  }
  ea() {
    return this.Z ? this.Z.duration : 0;
  }
};
("use strict");
{
  let f = 0;
  self.od = class {
    constructor(a, b, d) {
      this.i = a;
      this.L = b;
      this.Y = d;
      this.Ob = f++;
      this.M = this.W().createGain();
      this.M.connect(this.ua());
      this.B = null;
      this.jb = !1;
      this.ka = [0, 0, 0];
      this.ja = [0, 0, 0];
      this.I = !0;
      this.V = this.la = this.H = !1;
      this.vb = 1;
      this.Ia = !1;
      this.sa = 1;
      a = this.i.hd;
      this.ad = (1 === a && !this.va()) || 2 === a;
      this.fb = this.ga = -1;
      this.ge = !1;
    }
    f() {
      this.L = this.i = null;
      this.B && (this.B.disconnect(), (this.B = null));
      this.M.disconnect();
      this.M = null;
    }
    W() {
      return this.i.W();
    }
    ua() {
      return this.i.rd(this.Y);
    }
    Ab() {
      return this.i.Ab();
    }
    zb() {
      return this.ad ? this.i.Wc : performance.now() / 1e3;
    }
    pc() {
      return this.L.pc();
    }
    Va() {
      return this.L.Va();
    }
    oc() {
      return this.L.oc();
    }
    va() {
      return this.L.va();
    }
    Ue(a) {
      this.Y = a;
    }
    T() {}
    lc() {}
    IsPlaying() {
      return !this.I && !this.H && !this.T();
    }
    sd() {
      return !this.I && !this.T();
    }
    Ca() {}
    ea() {
      return this.L.ea();
    }
    Play() {}
    oa() {}
    Xa() {}
    Cb() {}
    Fb(a) {
      this.vb = a;
      this.M.gain.cancelScheduledValues(0);
      this.fb = -1;
      this.M.gain.value = this.qc();
    }
    Fe(a, b, d) {
      if (!this.Ia) {
        a *= this.Ab();
        var g = this.M.gain;
        g.cancelScheduledValues(0);
        var n = this.i.nc();
        b = n + b;
        g.setValueAtTime(g.value, n);
        g.linearRampToValueAtTime(a, b);
        this.vb = a;
        this.fb = b;
        this.ge = d;
      }
    }
    Nb() {
      this.Fb(this.vb);
    }
    Ea(a) {
      -1 !== this.fb &&
        a >= this.fb &&
        ((this.fb = -1),
        this.ge && this.oa(),
        this.i.uc("fade-ended", this.Y, this.Ob));
    }
    qc() {
      const a = this.vb * this.Ab();
      return isFinite(a) ? a : 0;
    }
    xd(a) {
      a = !!a;
      this.Ia !== a && ((this.Ia = a), this.Mb());
    }
    Bb() {
      return this.i.Bb();
    }
    Mb() {}
    wc() {}
    zd(a) {
      this.sa !== a && ((this.sa = a), this.Ga());
    }
    Ga() {}
    vc() {}
    xc() {}
    Db(a) {
      a = !!a;
      this.jb !== a &&
        ((this.jb = a)
          ? (this.B ||
              ((this.B = this.W().createPanner()),
              (this.B.panningModel = this.i.be),
              (this.B.distanceModel = this.i.Sd),
              (this.B.refDistance = this.i.ce),
              (this.B.maxDistance = this.i.ae),
              (this.B.rolloffFactor = this.i.ee)),
            this.M.disconnect(),
            this.M.connect(this.B),
            this.B.connect(this.ua()))
          : (this.B.disconnect(),
            this.M.disconnect(),
            this.M.connect(this.ua())));
    }
    Te(a, b, d, g, n, q) {
      this.jb &&
        (this.yd(a, b, d),
        (a = self.da.We),
        (this.B.coneInnerAngle = a(g)),
        (this.B.coneOuterAngle = a(n)),
        (this.B.coneOuterGain = q));
    }
    yd(a, b, d) {
      this.jb &&
        ((this.ka[0] = a),
        (this.ka[1] = b),
        (this.ka[2] = 0),
        (this.ja[0] = Math.cos(d)),
        (this.ja[1] = Math.sin(d)),
        (this.ja[2] = 0),
        this.B.setPosition(...this.ka),
        this.B.setOrientation(...this.ja));
    }
    Ve(a) {
      this.ga = a;
    }
    rc() {}
    Re(a) {
      const b = this.B || this.M;
      b.disconnect();
      b.connect(a);
    }
    Ua() {
      return {
        aiid: this.Ob,
        tag: this.Y,
        duration: this.ea(),
        volume: this.vb,
        isPlaying: this.IsPlaying(),
        playbackTime: this.Ca(),
        playbackRate: this.sa,
        uid: this.ga,
        bufferOriginalUrl: this.pc(),
        bufferUrl: "",
        bufferType: this.oc(),
        isMusic: this.va(),
        isLooping: this.V,
        isMuted: this.Ia,
        resumePosition: this.rc(),
        pan: this.He(),
      };
    }
    Fc(a) {
      this.zd(a.playbackRate);
      this.xd(a.isMuted);
    }
    He() {
      if (!this.B) return null;
      const a = this.B;
      return {
        pos: this.ka,
        orient: this.ja,
        cia: a.coneInnerAngle,
        coa: a.coneOuterAngle,
        cog: a.coneOuterGain,
        uid: this.ga,
      };
    }
    Pe(a) {
      if (a) {
        this.Db(!0);
        a = this.B;
        var b = a.pos;
        this.ka[0] = b[0];
        this.ka[1] = b[1];
        this.ka[2] = b[2];
        b = a.orient;
        this.ja[0] = b[0];
        this.ja[1] = b[1];
        this.ja[2] = b[2];
        a.setPosition(...this.ka);
        a.setOrientation(...this.ja);
        a.coneInnerAngle = a.cia;
        a.coneOuterAngle = a.coa;
        a.coneOuterGain = a.cog;
        this.ga = a.uid;
      } else this.Db(!1);
    }
  };
}
("use strict");
self.ye = class extends self.od {
  constructor(f, a, b) {
    super(f, a, b);
    this.L.qb.connect(this.M);
    this.L.onended = () => this.Ic();
  }
  f() {
    this.oa();
    this.L.qb.disconnect();
    super.f();
  }
  O() {
    return this.L.O();
  }
  Ic() {
    this.I = !0;
    this.ga = -1;
    this.i.uc("ended", this.Y, this.Ob);
  }
  T() {
    return this.O().ended;
  }
  lc() {
    return this.I ? !0 : this.T();
  }
  Ca() {
    let f = this.O().currentTime;
    this.V || (f = Math.min(f, this.ea()));
    return f;
  }
  Play(f, a, b) {
    const d = this.O();
    1 !== d.playbackRate && (d.playbackRate = 1);
    d.loop !== f && (d.loop = f);
    this.Fb(a);
    d.muted && (d.muted = !1);
    if (d.currentTime !== b)
      try {
        d.currentTime = b;
      } catch (g) {
        console.warn(
          `[Construct 3] Exception seeking audio '${this.L.Va()}' to position '${b}': `,
          g
        );
      }
    this.i.wa(d);
    this.H = this.I = !1;
    this.V = f;
    this.sa = 1;
  }
  oa() {
    const f = this.O();
    f.paused || f.pause();
    this.i.Da(f);
    this.I = !0;
    this.H = !1;
    this.ga = -1;
  }
  Xa() {
    if (!(this.H || this.I || this.T())) {
      var f = this.O();
      f.paused || f.pause();
      this.i.Da(f);
      this.H = !0;
    }
  }
  Cb() {
    !this.H || this.I || this.T() || (this.i.wa(this.O()), (this.H = !1));
  }
  Mb() {
    this.O().muted = this.Ia || this.Bb();
  }
  wc(f) {
    f = !!f;
    this.V !== f && ((this.V = f), (this.O().loop = f));
  }
  Ga() {
    let f = this.sa;
    this.ad && (f *= this.i.ic);
    try {
      this.O().playbackRate = f;
    } catch (a) {
      console.warn(`[Construct 3] Unable to set playback rate '${f}':`, a);
    }
  }
  vc(f) {
    if (!this.I && !this.T())
      try {
        this.O().currentTime = f;
      } catch (a) {
        console.warn(`[Construct 3] Error seeking audio to '${f}': `, a);
      }
  }
  rc() {
    return this.Ca();
  }
  xc(f) {
    f
      ? this.IsPlaying()
        ? (this.O().pause(), (this.la = !0))
        : (this.la = !1)
      : this.la && (this.i.wa(this.O()), (this.la = !1));
  }
};
("use strict");
function V(f) {
  f.j && f.j.disconnect();
  f.j = null;
  f.ab = null;
}
self.Ae = class extends self.od {
  constructor(f, a, b) {
    super(f, a, b);
    this.j = null;
    this.Zb = (d) => this.Ic(d);
    this.Xc = !0;
    this.ab = null;
    this.N = this.$b = this.ac = 0;
    this.dd = 1;
  }
  f() {
    this.oa();
    V(this);
    this.Zb = null;
    super.f();
  }
  Ic(f) {
    this.H ||
      this.la ||
      f.target !== this.ab ||
      ((this.I = this.Xc = !0),
      (this.ga = -1),
      V(this),
      this.i.uc("ended", this.Y, this.Ob));
  }
  T() {
    return (!this.I && this.j && this.j.loop) || this.H ? !1 : this.Xc;
  }
  lc() {
    return !this.j || this.I ? !0 : this.T();
  }
  Ca() {
    let f;
    f = this.H ? this.N : this.$b + (this.zb() - this.ac) * this.sa;
    this.V || (f = Math.min(f, this.ea()));
    return f;
  }
  Play(f, a, b, d) {
    this.dd = 1;
    this.Fb(a);
    V(this);
    this.j = this.W().createBufferSource();
    this.j.buffer = this.L.Z;
    this.j.connect(this.M);
    this.ab = this.j;
    this.j.onended = this.Zb;
    this.j.loop = f;
    this.j.start(d, b);
    this.H = this.I = this.Xc = !1;
    this.V = f;
    this.sa = 1;
    this.ac = this.zb();
    this.$b = b;
  }
  oa() {
    if (this.j)
      try {
        this.j.stop(0);
      } catch (f) {}
    this.I = !0;
    this.H = !1;
    this.ga = -1;
  }
  Xa() {
    this.H ||
      this.I ||
      this.T() ||
      ((this.N = this.Ca()),
      this.V && (this.N %= this.ea()),
      (this.H = !0),
      this.j.stop(0));
  }
  Cb() {
    !this.H ||
      this.I ||
      this.T() ||
      (V(this),
      (this.j = this.W().createBufferSource()),
      (this.j.buffer = this.L.Z),
      this.j.connect(this.M),
      (this.ab = this.j),
      (this.j.onended = this.Zb),
      (this.j.loop = this.V),
      this.Nb(),
      this.Ga(),
      this.j.start(0, this.N),
      (this.ac = this.zb()),
      (this.$b = this.N),
      (this.H = !1));
  }
  qc() {
    return super.qc() * this.dd;
  }
  Mb() {
    this.dd = this.Ia || this.Bb() ? 0 : 1;
    this.Nb();
  }
  wc(f) {
    f = !!f;
    this.V !== f && ((this.V = f), this.j && (this.j.loop = f));
  }
  Ga() {
    let f = this.sa;
    this.ad && (f *= this.i.ic);
    this.j && (this.j.playbackRate.value = f);
  }
  vc(f) {
    this.I ||
      this.T() ||
      (this.H ? (this.N = f) : (this.Xa(), (this.N = f), this.Cb()));
  }
  rc() {
    return this.N;
  }
  xc(f) {
    f
      ? this.IsPlaying()
        ? ((this.la = !0),
          (this.N = this.Ca()),
          this.V && (this.N %= this.ea()),
          this.j.stop(0))
        : (this.la = !1)
      : this.la &&
        (V(this),
        (this.j = this.W().createBufferSource()),
        (this.j.buffer = this.L.Z),
        this.j.connect(this.M),
        (this.ab = this.j),
        (this.j.onended = this.Zb),
        (this.j.loop = this.V),
        this.Nb(),
        this.Ga(),
        this.j.start(0, this.N),
        (this.ac = this.zb()),
        (this.$b = this.N),
        (this.la = !1));
  }
  Fc(f) {
    super.Fc(f);
    this.N = f.resumePosition;
  }
};
("use strict");
{
  class f {
    constructor(a) {
      this.i = a;
      this.c = a.W();
      this.Vd = -1;
      this.R = this.Y = "";
      this.g = null;
    }
    f() {
      this.c = null;
    }
    jg(a) {
      this.Vd = a;
    }
    rg(a) {
      this.Y = a;
    }
    o() {
      return this.c.createGain();
    }
    P() {}
    S() {}
    m(a, b, d, g) {
      a.cancelScheduledValues(0);
      if (0 === g) a.value = b;
      else {
        var n = this.c.currentTime;
        g += n;
        switch (d) {
          case 0:
            a.setValueAtTime(b, g);
            break;
          case 1:
            a.setValueAtTime(a.value, n);
            a.linearRampToValueAtTime(b, g);
            break;
          case 2:
            a.setValueAtTime(a.value, n), a.exponentialRampToValueAtTime(b, g);
        }
      }
    }
    Ua() {
      return { type: this.R, tag: this.Y, params: this.g };
    }
  }
  self.re = class extends f {
    constructor(a, b, d, g, n, q, v) {
      super(a);
      this.R = "filter";
      this.g = [b, d, g, n, q, v];
      this.l = this.o();
      this.b = this.o();
      this.b.gain.value = v;
      this.a = this.o();
      this.a.gain.value = 1 - v;
      this.A = this.c.createBiquadFilter();
      this.A.type = b;
      this.A.frequency.value = d;
      this.A.detune.value = g;
      this.A.Q.value = n;
      this.A.gain.vlaue = q;
      this.l.connect(this.A);
      this.l.connect(this.a);
      this.A.connect(this.b);
    }
    f() {
      this.l.disconnect();
      this.A.disconnect();
      this.b.disconnect();
      this.a.disconnect();
      super.f();
    }
    S(a) {
      this.b.disconnect();
      this.b.connect(a);
      this.a.disconnect();
      this.a.connect(a);
    }
    P() {
      return this.l;
    }
    X(a, b, d, g) {
      switch (a) {
        case 0:
          b = Math.max(Math.min(b / 100, 1), 0);
          this.g[5] = b;
          this.m(this.b.gain, b, d, g);
          this.m(this.a.gain, 1 - b, d, g);
          break;
        case 1:
          this.g[1] = b;
          this.m(this.A.frequency, b, d, g);
          break;
        case 2:
          this.g[2] = b;
          this.m(this.A.detune, b, d, g);
          break;
        case 3:
          this.g[3] = b;
          this.m(this.A.Q, b, d, g);
          break;
        case 4:
          (this.g[4] = b), this.m(this.A.gain, b, d, g);
      }
    }
  };
  self.pe = class extends f {
    constructor(a, b, d, g) {
      super(a);
      this.R = "delay";
      this.g = [b, d, g];
      this.l = this.o();
      this.b = this.o();
      this.b.gain.value = g;
      this.a = this.o();
      this.a.gain.value = 1 - g;
      this.nb = this.o();
      this.U = this.c.createDelay(b);
      this.U.delayTime.value = b;
      this.eb = this.o();
      this.eb.gain.value = d;
      this.l.connect(this.nb);
      this.l.connect(this.a);
      this.nb.connect(this.b);
      this.nb.connect(this.U);
      this.U.connect(this.eb);
      this.eb.connect(this.nb);
    }
    f() {
      this.l.disconnect();
      this.b.disconnect();
      this.a.disconnect();
      this.nb.disconnect();
      this.U.disconnect();
      this.eb.disconnect();
      super.f();
    }
    S(a) {
      this.b.disconnect();
      this.b.connect(a);
      this.a.disconnect();
      this.a.connect(a);
    }
    P() {
      return this.l;
    }
    X(a, b, d, g) {
      const n = self.da.qd;
      switch (a) {
        case 0:
          b = Math.max(Math.min(b / 100, 1), 0);
          this.g[2] = b;
          this.m(this.b.gain, b, d, g);
          this.m(this.a.gain, 1 - b, d, g);
          break;
        case 4:
          this.g[1] = n(b);
          this.m(this.eb.gain, n(b), d, g);
          break;
        case 5:
          (this.g[0] = b), this.m(this.U.delayTime, b, d, g);
      }
    }
  };
  self.oe = class extends f {
    constructor(a, b, d, g) {
      super(a);
      this.R = "convolution";
      this.g = [d, g];
      this.Qd = this.Pd = "";
      this.l = this.o();
      this.b = this.o();
      this.b.gain.value = g;
      this.a = this.o();
      this.a.gain.value = 1 - g;
      this.cb = this.c.createConvolver();
      this.cb.normalize = d;
      this.cb.buffer = b;
      this.l.connect(this.cb);
      this.l.connect(this.a);
      this.cb.connect(this.b);
    }
    f() {
      this.l.disconnect();
      this.cb.disconnect();
      this.b.disconnect();
      this.a.disconnect();
      super.f();
    }
    S(a) {
      this.b.disconnect();
      this.b.connect(a);
      this.a.disconnect();
      this.a.connect(a);
    }
    P() {
      return this.l;
    }
    X(a, b, d, g) {
      switch (a) {
        case 0:
          (b = Math.max(Math.min(b / 100, 1), 0)),
            (this.g[1] = b),
            this.m(this.b.gain, b, d, g),
            this.m(this.a.gain, 1 - b, d, g);
      }
    }
    fg(a, b) {
      this.Pd = a;
      this.Qd = b;
    }
    Ua() {
      const a = super.Ua();
      a.bufferOriginalUrl = this.Pd;
      a.bufferUrl = "";
      a.bufferType = this.Qd;
      return a;
    }
  };
  self.se = class extends f {
    constructor(a, b, d, g, n, q) {
      super(a);
      this.R = "flanger";
      this.g = [b, d, g, n, q];
      this.l = this.o();
      this.a = this.o();
      this.a.gain.value = 1 - q / 2;
      this.b = this.o();
      this.b.gain.value = q / 2;
      this.gb = this.o();
      this.gb.gain.value = n;
      this.U = this.c.createDelay(b + d);
      this.U.delayTime.value = b;
      this.v = this.c.createOscillator();
      this.v.frequency.value = g;
      this.J = this.o();
      this.J.gain.value = d;
      this.l.connect(this.U);
      this.l.connect(this.a);
      this.U.connect(this.b);
      this.U.connect(this.gb);
      this.gb.connect(this.U);
      this.v.connect(this.J);
      this.J.connect(this.U.delayTime);
      this.v.start(0);
    }
    f() {
      this.v.stop(0);
      this.l.disconnect();
      this.U.disconnect();
      this.v.disconnect();
      this.J.disconnect();
      this.a.disconnect();
      this.b.disconnect();
      this.gb.disconnect();
      super.f();
    }
    S(a) {
      this.b.disconnect();
      this.b.connect(a);
      this.a.disconnect();
      this.a.connect(a);
    }
    P() {
      return this.l;
    }
    X(a, b, d, g) {
      switch (a) {
        case 0:
          b = Math.max(Math.min(b / 100, 1), 0);
          this.g[4] = b;
          this.m(this.b.gain, b / 2, d, g);
          this.m(this.a.gain, 1 - b / 2, d, g);
          break;
        case 6:
          this.g[1] = b / 1e3;
          this.m(this.J.gain, b / 1e3, d, g);
          break;
        case 7:
          this.g[2] = b;
          this.m(this.v.frequency, b, d, g);
          break;
        case 8:
          (this.g[3] = b / 100), this.m(this.gb.gain, b / 100, d, g);
      }
    }
  };
  self.ue = class extends f {
    constructor(a, b, d, g, n, q, v) {
      super(a);
      this.R = "phaser";
      this.g = [b, d, g, n, q, v];
      this.l = this.o();
      this.a = this.o();
      this.a.gain.value = 1 - v / 2;
      this.b = this.o();
      this.b.gain.value = v / 2;
      this.A = this.c.createBiquadFilter();
      this.A.type = "allpass";
      this.A.frequency.value = b;
      this.A.detune.value = d;
      this.A.Q.value = g;
      this.v = this.c.createOscillator();
      this.v.frequency.value = q;
      this.J = this.o();
      this.J.gain.value = n;
      this.l.connect(this.A);
      this.l.connect(this.a);
      this.A.connect(this.b);
      this.v.connect(this.J);
      this.J.connect(this.A.frequency);
      this.v.start(0);
    }
    f() {
      this.v.stop(0);
      this.l.disconnect();
      this.A.disconnect();
      this.v.disconnect();
      this.J.disconnect();
      this.a.disconnect();
      this.b.disconnect();
      super.f();
    }
    S(a) {
      this.b.disconnect();
      this.b.connect(a);
      this.a.disconnect();
      this.a.connect(a);
    }
    P() {
      return this.l;
    }
    X(a, b, d, g) {
      switch (a) {
        case 0:
          b = Math.max(Math.min(b / 100, 1), 0);
          this.g[5] = b;
          this.m(this.b.gain, b / 2, d, g);
          this.m(this.a.gain, 1 - b / 2, d, g);
          break;
        case 1:
          this.g[0] = b;
          this.m(this.A.frequency, b, d, g);
          break;
        case 2:
          this.g[1] = b;
          this.m(this.A.detune, b, d, g);
          break;
        case 3:
          this.g[2] = b;
          this.m(this.A.Q, b, d, g);
          break;
        case 6:
          this.g[3] = b;
          this.m(this.J.gain, b, d, g);
          break;
        case 7:
          (this.g[4] = b), this.m(this.v.frequency, b, d, g);
      }
    }
  };
  self.te = class extends f {
    constructor(a, b) {
      super(a);
      this.R = "gain";
      this.g = [b];
      this.h = this.o();
      this.h.gain.value = b;
    }
    f() {
      this.h.disconnect();
      super.f();
    }
    S(a) {
      this.h.disconnect();
      this.h.connect(a);
    }
    P() {
      return this.h;
    }
    X(a, b, d, g) {
      const n = self.da.qd;
      switch (a) {
        case 4:
          (this.g[0] = n(b)), this.m(this.h.gain, n(b), d, g);
      }
    }
  };
  self.we = class extends f {
    constructor(a, b, d) {
      super(a);
      this.R = "tremolo";
      this.g = [b, d];
      this.h = this.o();
      this.h.gain.value = 1 - d / 2;
      this.v = this.c.createOscillator();
      this.v.frequency.value = b;
      this.J = this.o();
      this.J.gain.value = d / 2;
      this.v.connect(this.J);
      this.J.connect(this.h.gain);
      this.v.start(0);
    }
    f() {
      this.v.stop(0);
      this.v.disconnect();
      this.J.disconnect();
      this.h.disconnect();
      super.f();
    }
    S(a) {
      this.h.disconnect();
      this.h.connect(a);
    }
    P() {
      return this.h;
    }
    X(a, b, d, g) {
      switch (a) {
        case 0:
          b = Math.max(Math.min(b / 100, 1), 0);
          this.g[1] = b;
          this.m(this.h.gain, 1 - b / 2, d, g);
          this.m(this.J.gain, b / 2, d, g);
          break;
        case 7:
          (this.g[0] = b), this.m(this.v.frequency, b, d, g);
      }
    }
  };
  self.ve = class extends f {
    constructor(a, b, d) {
      super(a);
      this.R = "ringmod";
      this.g = [b, d];
      this.l = this.o();
      this.b = this.o();
      this.b.gain.value = d;
      this.a = this.o();
      this.a.gain.value = 1 - d;
      this.tb = this.o();
      this.tb.gain.value = 0;
      this.v = this.c.createOscillator();
      this.v.frequency.value = b;
      this.v.connect(this.tb.gain);
      this.v.start(0);
      this.l.connect(this.tb);
      this.l.connect(this.a);
      this.tb.connect(this.b);
    }
    f() {
      this.v.stop(0);
      this.v.disconnect();
      this.tb.disconnect();
      this.l.disconnect();
      this.b.disconnect();
      this.a.disconnect();
      super.f();
    }
    S(a) {
      this.b.disconnect();
      this.b.connect(a);
      this.a.disconnect();
      this.a.connect(a);
    }
    P() {
      return this.l;
    }
    X(a, b, d, g) {
      switch (a) {
        case 0:
          b = Math.max(Math.min(b / 100, 1), 0);
          this.g[1] = b;
          this.m(this.b.gain, b, d, g);
          this.m(this.a.gain, 1 - b, d, g);
          break;
        case 7:
          (this.g[0] = b), this.m(this.v.frequency, b, d, g);
      }
    }
  };
  self.qe = class extends f {
    constructor(a, b, d, g, n, q) {
      super(a);
      this.R = "distortion";
      this.g = [b, d, g, n, q];
      this.l = this.o();
      this.ec = this.o();
      this.dc = this.o();
      this.gg(g, n);
      this.b = this.o();
      this.b.gain.value = q;
      this.a = this.o();
      this.a.gain.value = 1 - q;
      this.jc = this.c.createWaveShaper();
      this.Uc = new Float32Array(65536);
      this.nf(b, d);
      this.jc.curve = this.Uc;
      this.l.connect(this.ec);
      this.l.connect(this.a);
      this.ec.connect(this.jc);
      this.jc.connect(this.dc);
      this.dc.connect(this.b);
    }
    f() {
      this.l.disconnect();
      this.ec.disconnect();
      this.jc.disconnect();
      this.dc.disconnect();
      this.b.disconnect();
      this.a.disconnect();
      super.f();
    }
    gg(a, b) {
      0.01 > a && (a = 0.01);
      this.ec.gain.value = a;
      this.dc.gain.value = Math.pow(1 / a, 0.6) * b;
    }
    nf(a, b) {
      for (let d = 0; 32768 > d; ++d) {
        let g = d / 32768;
        g = this.tg(g, a, b);
        this.Uc[32768 + d] = g;
        this.Uc[32768 - d - 1] = -g;
      }
    }
    tg(a, b, d) {
      d = 1.05 * d * b - b;
      const g = 0 > a ? -a : a;
      return (g < b ? g : b + d * self.da.Kg(g - b, 1 / d)) * (0 > a ? -1 : 1);
    }
    S(a) {
      this.b.disconnect();
      this.b.connect(a);
      this.a.disconnect();
      this.a.connect(a);
    }
    P() {
      return this.l;
    }
    X(a, b, d, g) {
      switch (a) {
        case 0:
          (b = Math.max(Math.min(b / 100, 1), 0)),
            (this.g[4] = b),
            this.m(this.b.gain, b, d, g),
            this.m(this.a.gain, 1 - b, d, g);
      }
    }
  };
  self.ne = class extends f {
    constructor(a, b, d, g, n, q) {
      super(a);
      this.R = "compressor";
      this.g = [b, d, g, n, q];
      this.h = this.c.createDynamicsCompressor();
      this.h.threshold.value = b;
      this.h.knee.value = d;
      this.h.ratio.value = g;
      this.h.attack.value = n;
      this.h.release.value = q;
    }
    f() {
      this.h.disconnect();
      super.f();
    }
    S(a) {
      this.h.disconnect();
      this.h.connect(a);
    }
    P() {
      return this.h;
    }
    X() {}
  };
  self.me = class extends f {
    constructor(a, b, d) {
      super(a);
      this.R = "analyser";
      this.g = [b, d];
      this.h = this.c.createAnalyser();
      this.h.fftSize = b;
      this.h.smoothingTimeConstant = d;
      this.Td = new Float32Array(this.h.frequencyBinCount);
      this.fe = new Uint8Array(b);
      this.de = this.Ma = 0;
      this.i.Xe(this);
    }
    f() {
      this.i.$f(this);
      this.h.disconnect();
      super.f();
    }
    Ea() {
      this.h.getFloatFrequencyData(this.Td);
      this.h.getByteTimeDomainData(this.fe);
      const a = this.h.fftSize;
      let b = (this.Ma = 0);
      for (var d = 0; d < a; ++d) {
        let g = (this.fe[d] - 128) / 128;
        0 > g && (g = -g);
        this.Ma < g && (this.Ma = g);
        b += g * g;
      }
      d = self.da.Ne;
      this.Ma = d(this.Ma);
      this.de = d(Math.sqrt(b / a));
    }
    S(a) {
      this.h.disconnect();
      this.h.connect(a);
    }
    P() {
      return this.h;
    }
    X() {}
    Ge() {
      return {
        tag: this.Y,
        index: this.Vd,
        peak: this.Ma,
        rms: this.de,
        binCount: this.h.frequencyBinCount,
        freqBins: this.Td,
      };
    }
  };
}
("use strict");
function W(f) {
  window.C3_RegisterSW &&
    window.OfflineClientInfo &&
    window.OfflineClientInfo.SetMessageCallback((a) =>
      w(f, "sw-message", a.data)
    );
}
function X(f) {
  f = f.orientation;
  if (screen.orientation && screen.orientation.lock)
    screen.orientation
      .lock(f)
      .catch((a) =>
        console.warn("[Construct 3] Failed to lock orientation: ", a)
      );
  else
    try {
      let a = !1;
      screen.lockOrientation
        ? (a = screen.lockOrientation(f))
        : screen.webkitLockOrientation
        ? (a = screen.webkitLockOrientation(f))
        : screen.mozLockOrientation
        ? (a = screen.mozLockOrientation(f))
        : screen.msLockOrientation && (a = screen.msLockOrientation(f));
      a || console.warn("[Construct 3] Failed to lock orientation");
    } catch (a) {
      console.warn("[Construct 3] Failed to lock orientation: ", a);
    }
}
self.na.Ta(
  class extends self.Ba {
    constructor(f) {
      super(f, "browser");
      this.s = "";
      K(this, [
        [
          "get-initial-state",
          (a) => {
            this.s = a.exportType;
            return {
              location: location.toString(),
              isOnline: !!navigator.onLine,
              referrer: document.referrer,
              title: document.title,
              isCookieEnabled: !!navigator.cookieEnabled,
              screenWidth: screen.width,
              screenHeight: screen.height,
              windowOuterWidth: window.outerWidth,
              windowOuterHeight: window.outerHeight,
              isScirraArcade: "undefined" !== typeof window.is_scirra_arcade,
            };
          },
        ],
        ["ready-for-sw-messages", () => W(this)],
        ["alert", (a) => this.Gc(a)],
        [
          "close",
          () => {
            navigator.app && navigator.app.exitApp
              ? navigator.app.exitApp()
              : navigator.device && navigator.device.exitApp
              ? navigator.device.exitApp()
              : window.close();
          },
        ],
        ["set-focus", (a) => this.Mc(a)],
        [
          "vibrate",
          (a) => {
            navigator.vibrate && navigator.vibrate(a.pattern);
          },
        ],
        ["lock-orientation", (a) => X(a)],
        [
          "unlock-orientation",
          () => {
            try {
              screen.orientation && screen.orientation.unlock
                ? screen.orientation.unlock()
                : screen.unlockOrientation
                ? screen.unlockOrientation()
                : screen.webkitUnlockOrientation
                ? screen.webkitUnlockOrientation()
                : screen.mozUnlockOrientation
                ? screen.mozUnlockOrientation()
                : screen.msUnlockOrientation && screen.msUnlockOrientation();
            } catch (a) {}
          },
        ],
        [
          "navigate",
          (a) => {
            var b = a.type;
            if ("back" === b)
              navigator.app && navigator.app.backHistory
                ? navigator.app.backHistory()
                : window.history.back();
            else if ("forward" === b) window.history.forward();
            else if ("reload" === b) location.reload();
            else if ("url" === b) {
              b = a.url;
              const d = a.target;
              a = a.exportType;
              self.cordova && self.cordova.InAppBrowser
                ? self.cordova.InAppBrowser.open(b, "_system")
                : "preview" === a || "windows-webview2" === a
                ? window.open(b, "_blank")
                : this.Zg ||
                  (2 === d
                    ? (window.top.location = b)
                    : 1 === d
                    ? (window.parent.location = b)
                    : (window.location = b));
            } else
              "new-window" === b &&
                ((b = a.url),
                (a = a.tag),
                self.cordova && self.cordova.InAppBrowser
                  ? self.cordova.InAppBrowser.open(b, "_system")
                  : window.open(b, a));
          },
        ],
        [
          "request-fullscreen",
          (a) => {
            if ("windows-webview2" === this.s || "macos-wkwebview" === this.s)
              self.na.Lb(!0),
                this.u.Qc({ type: "set-fullscreen", fullscreen: !0 });
            else {
              const b = { navigationUI: "auto" };
              a = a.navUI;
              1 === a
                ? (b.navigationUI = "hide")
                : 2 === a && (b.navigationUI = "show");
              a = document.documentElement;
              a.requestFullscreen
                ? a.requestFullscreen(b)
                : a.mozRequestFullScreen
                ? a.mozRequestFullScreen(b)
                : a.msRequestFullscreen
                ? a.msRequestFullscreen(b)
                : a.webkitRequestFullScreen &&
                  ("undefined" !== typeof Element.ALLOW_KEYBOARD_INPUT
                    ? a.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
                    : a.webkitRequestFullScreen());
            }
          },
        ],
        [
          "exit-fullscreen",
          () => {
            "windows-webview2" === this.s || "macos-wkwebview" === this.s
              ? (self.na.Lb(!1),
                this.u.Qc({ type: "set-fullscreen", fullscreen: !1 }))
              : document.exitFullscreen
              ? document.exitFullscreen()
              : document.mozCancelFullScreen
              ? document.mozCancelFullScreen()
              : document.msExitFullscreen
              ? document.msExitFullscreen()
              : document.webkitCancelFullScreen &&
                document.webkitCancelFullScreen();
          },
        ],
        [
          "set-hash",
          (a) => {
            location.hash = a.hash;
          },
        ],
      ]);
      window.addEventListener("online", () => {
        w(this, "online-state", { isOnline: !0 });
      });
      window.addEventListener("offline", () => {
        w(this, "online-state", { isOnline: !1 });
      });
      window.addEventListener("hashchange", () => {
        w(this, "hashchange", { location: location.toString() });
      });
      document.addEventListener("backbutton", () => {
        w(this, "backbutton");
      });
    }
    Gc(f) {
      alert(f.message);
    }
    Mc(f) {
      f = f.isFocus;
      if ("nwjs" === this.s) {
        const a = "nwjs" === this.s ? nw.Window.get() : null;
        f ? a.focus() : a.blur();
      } else f ? window.focus() : window.blur();
    }
  }
);
("use strict");
self.na.Ta(
  class extends self.Ba {
    constructor(f) {
      super(f, "mouse");
      K(this, [
        [
          "cursor",
          (a) => {
            document.documentElement.style.cursor = a;
          },
        ],
        [
          "request-pointer-lock",
          () => {
            this.u.G.requestPointerLock();
          },
        ],
        [
          "release-pointer-lock",
          () => {
            document.exitPointerLock();
          },
        ],
      ]);
      document.addEventListener("pointerlockchange", () => {
        w(this, "pointer-lock-change", {
          "has-pointer-lock": !!document.pointerLockElement,
        });
      });
      document.addEventListener("pointerlockerror", () => {
        w(this, "pointer-lock-error", {
          "has-pointer-lock": !!document.pointerLockElement,
        });
      });
    }
  }
);
("use strict");
async function Y(f, a) {
  a = a.type;
  let b = !0;
  0 === a ? (b = await Z()) : 1 === a && (b = await aa());
  w(f, "permission-result", { type: a, result: b });
}
async function Z() {
  if (
    !self.DeviceOrientationEvent ||
    !self.DeviceOrientationEvent.requestPermission
  )
    return !0;
  try {
    return (
      "granted" === (await self.DeviceOrientationEvent.requestPermission())
    );
  } catch (f) {
    return (
      console.warn("[Touch] Failed to request orientation permission: ", f), !1
    );
  }
}
async function aa() {
  if (!self.DeviceMotionEvent || !self.DeviceMotionEvent.requestPermission)
    return !0;
  try {
    return "granted" === (await self.DeviceMotionEvent.requestPermission());
  } catch (f) {
    return console.warn("[Touch] Failed to request motion permission: ", f), !1;
  }
}
self.na.Ta(
  class extends self.Ba {
    constructor(f) {
      super(f, "touch");
      J(this, "request-permission", (a) => Y(this, a));
    }
  }
);
