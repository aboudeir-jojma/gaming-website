/*
 Platform.js <https://mths.be/platform>
 Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 Copyright 2011-2013 John-David Dalton
 Available under MIT license <https://mths.be/mit>
*/
(function () {
  function a(a) {
    a = String(a);
    return a.charAt(0).toUpperCase() + a.slice(1);
  }
  function c(a, b) {
    var c = -1,
      x = a ? a.length : 0;
    if ("number" == typeof x && -1 < x && x <= m)
      for (; ++c < x; ) b(a[c], c, a);
    else d(a, b);
  }
  function b(b) {
    b = String(b).replace(/^ +| +$/g, "");
    return /^(?:webOS|i(?:OS|P))/.test(b) ? b : a(b);
  }
  function d(a, b) {
    for (var c in a) v.call(a, c) && b(a[c], c, a);
  }
  function g(b) {
    return null == b ? a(b) : E.call(b).slice(8, -1);
  }
  function h(a, b) {
    var c = null != a ? typeof a[b] : "number";
    return (
      !/^(?:boolean|number|string|undefined)$/.test(c) &&
      ("object" == c ? !!a[b] : !0)
    );
  }
  function f(a) {
    return String(a).replace(/([ -])(?!$)/g, "$1?");
  }
  function n(a, b) {
    var d = null;
    c(a, function (c, k) {
      d = b(d, c, k, a);
    });
    return d;
  }
  function p(a) {
    function c(c) {
      return n(c, function (c, d) {
        var k = d.pattern || f(d);
        !c &&
          (c =
            RegExp("\\b" + k + " *\\d+[.\\w_]*", "i").exec(a) ||
            RegExp("\\b" + k + " *\\w+-[\\w]*", "i").exec(a) ||
            RegExp(
              "\\b" + k + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)",
              "i"
            ).exec(a)) &&
          ((c = String(
            d.label && !RegExp(k, "i").test(d.label) ? d.label : c
          ).split("/"))[1] &&
            !/[\d.]+/.test(c[0]) &&
            (c[0] += " " + c[1]),
          (d = d.label || d),
          (c = b(
            c[0]
              .replace(RegExp(k, "i"), d)
              .replace(RegExp("; *(?:" + d + "[_-])?", "i"), " ")
              .replace(RegExp("(" + d + ")[-_.]?(\\w)", "i"), "$1 $2")
          )));
        return c;
      });
    }
    function q(b) {
      return n(b, function (b, c) {
        return (
          b ||
          (RegExp(
            c + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)",
            "i"
          ).exec(a) || 0)[1] ||
          null
        );
      });
    }
    var m = k,
      l = a && "object" == typeof a && "String" != g(a);
    l && ((m = a), (a = null));
    var w = m.navigator || {},
      u = w.userAgent || "";
    a || (a = u);
    var v = l
        ? !!w.likeChrome
        : /\bChrome\b/.test(a) && !/internal|\n/i.test(E.toString()),
      y = l ? "Object" : "ScriptBridgingProxyObject",
      x = l ? "Object" : "Environment",
      F = l && m.java ? "JavaPackage" : g(m.java),
      S = l ? "Object" : "RuntimeObject";
    x = (F = /\bJava/.test(F) && m.java) && g(m.environment) == x;
    var M = F ? "a" : "\u03b1",
      G = F ? "b" : "\u03b2",
      J = m.document || {},
      K = m.operamini || m.opera,
      I = A.test((I = l && K ? K["[[Class]]"] : g(K))) ? I : (K = null),
      e,
      U = a;
    l = [];
    var V = null,
      N = a == u;
    u = N && K && "function" == typeof K.version && K.version();
    var C = (function (b) {
        return n(b, function (b, c) {
          return (
            b ||
            (RegExp("\\b" + (c.pattern || f(c)) + "\\b", "i").exec(a) &&
              (c.label || c))
          );
        });
      })([
        { label: "EdgeHTML", pattern: "Edge" },
        "Trident",
        { label: "WebKit", pattern: "AppleWebKit" },
        "iCab",
        "Presto",
        "NetFront",
        "Tasman",
        "KHTML",
        "Gecko",
      ]),
      r = (function (b) {
        return n(b, function (b, c) {
          return (
            b ||
            (RegExp("\\b" + (c.pattern || f(c)) + "\\b", "i").exec(a) &&
              (c.label || c))
          );
        });
      })([
        "Adobe AIR",
        "Arora",
        "Avant Browser",
        "Breach",
        "Camino",
        "Electron",
        "Epiphany",
        "Fennec",
        "Flock",
        "Galeon",
        "GreenBrowser",
        "iCab",
        "Iceweasel",
        "K-Meleon",
        "Konqueror",
        "Lunascape",
        "Maxthon",
        { label: "Microsoft Edge", pattern: "Edge" },
        "Midori",
        "Nook Browser",
        "PaleMoon",
        "PhantomJS",
        "Raven",
        "Rekonq",
        "RockMelt",
        { label: "Samsung Internet", pattern: "SamsungBrowser" },
        "SeaMonkey",
        { label: "Silk", pattern: "(?:Cloud9|Silk-Accelerated)" },
        "Sleipnir",
        "SlimBrowser",
        { label: "SRWare Iron", pattern: "Iron" },
        "Sunrise",
        "Swiftfox",
        "Waterfox",
        "WebPositive",
        "Opera Mini",
        { label: "Opera Mini", pattern: "OPiOS" },
        "Opera",
        { label: "Opera", pattern: "OPR" },
        "Chrome",
        { label: "Chrome Mobile", pattern: "(?:CriOS|CrMo)" },
        { label: "Firefox", pattern: "(?:Firefox|Minefield)" },
        { label: "Firefox for iOS", pattern: "FxiOS" },
        { label: "IE", pattern: "IEMobile" },
        { label: "IE", pattern: "MSIE" },
        "Safari",
      ]),
      D = c([
        { label: "BlackBerry", pattern: "BB10" },
        "BlackBerry",
        { label: "Galaxy S", pattern: "GT-I9000" },
        { label: "Galaxy S2", pattern: "GT-I9100" },
        { label: "Galaxy S3", pattern: "GT-I9300" },
        { label: "Galaxy S4", pattern: "GT-I9500" },
        { label: "Galaxy S5", pattern: "SM-G900" },
        { label: "Galaxy S6", pattern: "SM-G920" },
        { label: "Galaxy S6 Edge", pattern: "SM-G925" },
        { label: "Galaxy S7", pattern: "SM-G930" },
        { label: "Galaxy S7 Edge", pattern: "SM-G935" },
        "Google TV",
        "Lumia",
        "iPad",
        "iPod",
        "iPhone",
        "Kindle",
        { label: "Kindle Fire", pattern: "(?:Cloud9|Silk-Accelerated)" },
        "Nexus",
        "Nook",
        "PlayBook",
        "PlayStation Vita",
        "PlayStation",
        "TouchPad",
        "Transformer",
        { label: "Wii U", pattern: "WiiU" },
        "Wii",
        "Xbox One",
        { label: "Xbox 360", pattern: "Xbox" },
        "Xoom",
      ]),
      L = (function (b) {
        return n(b, function (b, c, d) {
          return (
            b ||
            ((c[D] ||
              c[/^[a-z]+(?: +[a-z]+\b)*/i.exec(D)] ||
              RegExp("\\b" + f(d) + "(?:\\b|\\w*\\d)", "i").exec(a)) &&
              d)
          );
        });
      })({
        Apple: { iPad: 1, iPhone: 1, iPod: 1 },
        Archos: {},
        Amazon: { Kindle: 1, "Kindle Fire": 1 },
        Asus: { Transformer: 1 },
        "Barnes & Noble": { Nook: 1 },
        BlackBerry: { PlayBook: 1 },
        Google: { "Google TV": 1, Nexus: 1 },
        HP: { TouchPad: 1 },
        HTC: {},
        LG: {},
        Microsoft: { Xbox: 1, "Xbox One": 1 },
        Motorola: { Xoom: 1 },
        Nintendo: { "Wii U": 1, Wii: 1 },
        Nokia: { Lumia: 1 },
        Samsung: {
          "Galaxy S": 1,
          "Galaxy S2": 1,
          "Galaxy S3": 1,
          "Galaxy S4": 1,
        },
        Sony: { PlayStation: 1, "PlayStation Vita": 1 },
      }),
      t = (function (c) {
        return n(c, function (c, d) {
          var k = d.pattern || f(d);
          if (
            !c &&
            (c = RegExp("\\b" + k + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(a))
          ) {
            var e = c,
              h = d.label || d,
              g = {
                "10.0": "10",
                6.4: "10 Technical Preview",
                6.3: "8.1",
                6.2: "8",
                6.1: "Server 2008 R2 / 7",
                "6.0": "Server 2008 / Vista",
                5.2: "Server 2003 / XP 64-bit",
                5.1: "XP",
                5.01: "2000 SP1",
                "5.0": "2000",
                "4.0": "NT",
                "4.90": "ME",
              };
            k &&
              h &&
              /^Win/i.test(e) &&
              !/^Windows Phone /i.test(e) &&
              (g = g[/[\d.]+$/.exec(e)]) &&
              (e = "Windows " + g);
            e = String(e);
            k && h && (e = e.replace(RegExp(k, "i"), h));
            c = e = b(
              e
                .replace(/ ce$/i, " CE")
                .replace(/\bhpw/i, "web")
                .replace(/\bMacintosh\b/, "Mac OS")
                .replace(/_PowerPC\b/i, " OS")
                .replace(/\b(OS X) [^ \d]+/i, "$1")
                .replace(/\bMac (OS X)\b/, "$1")
                .replace(/\/(\d)/, " $1")
                .replace(/_/g, ".")
                .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "")
                .replace(/\bx86\.64\b/gi, "x86_64")
                .replace(/\b(Windows Phone) OS\b/, "$1")
                .replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1")
                .split(" on ")[0]
            );
          }
          return c;
        });
      })([
        "Windows Phone",
        "Android",
        "CentOS",
        { label: "Chrome OS", pattern: "CrOS" },
        "Debian",
        "Fedora",
        "FreeBSD",
        "Gentoo",
        "Haiku",
        "Kubuntu",
        "Linux Mint",
        "OpenBSD",
        "Red Hat",
        "SuSE",
        "Ubuntu",
        "Xubuntu",
        "Cygwin",
        "Symbian OS",
        "hpwOS",
        "webOS ",
        "webOS",
        "Tablet OS",
        "Tizen",
        "Linux",
        "Mac OS X",
        "Macintosh",
        "Mac",
        "Windows 98;",
        "Windows ",
      ]);
    C && (C = [C]);
    L && !D && (D = c([L]));
    if ((e = /\bGoogle TV\b/.exec(D))) D = e[0];
    /\bSimulator\b/i.test(a) && (D = (D ? D + " " : "") + "Simulator");
    "Opera Mini" == r &&
      /\bOPiOS\b/.test(a) &&
      l.push("running in Turbo/Uncompressed mode");
    "IE" == r && /\blike iPhone OS\b/.test(a)
      ? ((e = p(a.replace(/like iPhone OS/, ""))),
        (L = e.manufacturer),
        (D = e.product))
      : /^iP/.test(D)
      ? (r || (r = "Safari"),
        (t =
          "iOS" +
          ((e = / OS ([\d_]+)/i.exec(a)) ? " " + e[1].replace(/_/g, ".") : "")))
      : "Konqueror" != r || /buntu/i.test(t)
      ? (L &&
          "Google" != L &&
          ((/Chrome/.test(r) && !/\bMobile Safari\b/i.test(a)) ||
            /\bVita\b/.test(D))) ||
        (/\bAndroid\b/.test(t) && /^Chrome/.test(r) && /\bVersion\//i.test(a))
        ? ((r = "Android Browser"), (t = /\bAndroid\b/.test(t) ? t : "Android"))
        : "Silk" == r
        ? (/\bMobi/i.test(a) || ((t = "Android"), l.unshift("desktop mode")),
          /Accelerated *= *true/i.test(a) && l.unshift("accelerated"))
        : "PaleMoon" == r && (e = /\bFirefox\/([\d.]+)\b/.exec(a))
        ? l.push("identifying as Firefox " + e[1])
        : "Firefox" == r && (e = /\b(Mobile|Tablet|TV)\b/i.exec(a))
        ? (t || (t = "Firefox OS"), D || (D = e[1]))
        : !r ||
          (e = !/\bMinefield\b/i.test(a) && /\b(?:Firefox|Safari)\b/.exec(r))
        ? (r &&
            !D &&
            /[\/,]|^[^(]+?\)/.test(a.slice(a.indexOf(e + "/") + 8)) &&
            (r = null),
          (e = D || L || t) &&
            (D || L || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(t)) &&
            (r =
              /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(t) ? t : e) +
              " Browser"))
        : "Electron" == r &&
          (e = (/\bChrome\/([\d.]+)\b/.exec(a) || 0)[1]) &&
          l.push("Chromium " + e)
      : (t = "Kubuntu");
    u ||
      (u = q([
        "(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))",
        "Version",
        f(r),
        "(?:Firefox|Minefield|NetFront)",
      ]));
    if (
      (e =
        ("iCab" == C && 3 < parseFloat(u) && "WebKit") ||
        (/\bOpera\b/.test(r) && (/\bOPR\b/.test(a) ? "Blink" : "Presto")) ||
        (/\b(?:Midori|Nook|Safari)\b/i.test(a) &&
          !/^(?:Trident|EdgeHTML)$/.test(C) &&
          "WebKit") ||
        (!C && /\bMSIE\b/i.test(a) && ("Mac OS" == t ? "Tasman" : "Trident")) ||
        ("WebKit" == C && /\bPlayStation\b(?! Vita\b)/i.test(r) && "NetFront"))
    )
      C = [e];
    "IE" == r && (e = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(a) || 0)[1])
      ? ((r += " Mobile"),
        (t = "Windows Phone " + (/\+$/.test(e) ? e : e + ".x")),
        l.unshift("desktop mode"))
      : /\bWPDesktop\b/i.test(a)
      ? ((r = "IE Mobile"),
        (t = "Windows Phone 8.x"),
        l.unshift("desktop mode"),
        u || (u = (/\brv:([\d.]+)/.exec(a) || 0)[1]))
      : "IE" != r &&
        "Trident" == C &&
        (e = /\brv:([\d.]+)/.exec(a)) &&
        (r && l.push("identifying as " + r + (u ? " " + u : "")),
        (r = "IE"),
        (u = e[1]));
    if (N) {
      if (h(m, "global"))
        if (
          (F &&
            ((e = F.lang.System),
            (U = e.getProperty("os.arch")),
            (t =
              t ||
              e.getProperty("os.name") + " " + e.getProperty("os.version"))),
          x)
        ) {
          try {
            (u = m.require("ringo/engine").version.join(".")), (r = "RingoJS");
          } catch (X) {
            (e = m.system) &&
              e.global.system == m.system &&
              ((r = "Narwhal"), t || (t = e[0].os || null));
          }
          r || (r = "Rhino");
        } else
          "object" == typeof m.process &&
            !m.process.browser &&
            (e = m.process) &&
            ("object" == typeof e.versions &&
              ("string" == typeof e.versions.electron
                ? (l.push("Node " + e.versions.node),
                  (r = "Electron"),
                  (u = e.versions.electron))
                : "string" == typeof e.versions.nw &&
                  (l.push("Chromium " + u, "Node " + e.versions.node),
                  (r = "NW.js"),
                  (u = e.versions.nw))),
            r ||
              ((r = "Node.js"),
              (U = e.arch),
              (t = e.platform),
              (u = (u = /[\d.]+/.exec(e.version)) ? u[0] : null)));
      else
        g((e = m.runtime)) == y
          ? ((r = "Adobe AIR"), (t = e.flash.system.Capabilities.os))
          : g((e = m.phantom)) == S
          ? ((r = "PhantomJS"),
            (u =
              (e = e.version || null) &&
              e.major + "." + e.minor + "." + e.patch))
          : "number" == typeof J.documentMode &&
            (e = /\bTrident\/(\d+)/i.exec(a))
          ? ((u = [u, J.documentMode]),
            (e = +e[1] + 4) != u[1] &&
              (l.push("IE " + u[1] + " mode"), C && (C[1] = ""), (u[1] = e)),
            (u = "IE" == r ? String(u[1].toFixed(1)) : u[0]))
          : "number" == typeof J.documentMode &&
            /^(?:Chrome|Firefox)\b/.test(r) &&
            (l.push("masking as " + r + " " + u),
            (r = "IE"),
            (u = "11.0"),
            (C = ["Trident"]),
            (t = "Windows"));
      t = t && b(t);
    }
    u &&
      (e =
        /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(u) ||
        /(?:alpha|beta)(?: ?\d)?/i.exec(a + ";" + (N && w.appMinorVersion)) ||
        (/\bMinefield\b/i.test(a) && "a")) &&
      ((V = /b/i.test(e) ? "beta" : "alpha"),
      (u =
        u.replace(RegExp(e + "\\+?$"), "") +
        ("beta" == V ? G : M) +
        (/\d+\+?/.exec(e) || "")));
    if (
      "Fennec" == r ||
      ("Firefox" == r && /\b(?:Android|Firefox OS)\b/.test(t))
    )
      r = "Firefox Mobile";
    else if ("Maxthon" == r && u) u = u.replace(/\.[\d.]+/, ".x");
    else if (/\bXbox\b/i.test(D))
      "Xbox 360" == D && (t = null),
        "Xbox 360" == D && /\bIEMobile\b/.test(a) && l.unshift("mobile mode");
    else if (
      (!/^(?:Chrome|IE|Opera)$/.test(r) &&
        (!r || D || /Browser|Mobi/.test(r))) ||
      ("Windows CE" != t && !/Mobi/i.test(a))
    )
      if ("IE" == r && N)
        try {
          null === m.external && l.unshift("platform preview");
        } catch (X) {
          l.unshift("embedded");
        }
      else
        (/\bBlackBerry\b/.test(D) || /\bBB10\b/.test(a)) &&
        (e =
          (RegExp(D.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(a) ||
            0)[1] || u)
          ? ((e = [e, /BB10/.test(a)]),
            (t =
              (e[1] ? ((D = null), (L = "BlackBerry")) : "Device Software") +
              " " +
              e[0]),
            (u = null))
          : this != d &&
            "Wii" != D &&
            ((N && K) ||
              (/Opera/.test(r) && /\b(?:MSIE|Firefox)\b/i.test(a)) ||
              ("Firefox" == r && /\bOS X (?:\d+\.){2,}/.test(t)) ||
              ("IE" == r &&
                ((t && !/^Win/.test(t) && 5.5 < u) ||
                  (/\bWindows XP\b/.test(t) && 8 < u) ||
                  (8 == u && !/\bTrident\b/.test(a))))) &&
            !A.test((e = p.call(d, a.replace(A, "") + ";"))) &&
            e.name &&
            ((e = "ing as " + e.name + ((e = e.version) ? " " + e : "")),
            A.test(r)
              ? (/\bIE\b/.test(e) && "Mac OS" == t && (t = null),
                (e = "identify" + e))
              : ((e = "mask" + e),
                (r = I ? b(I.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera"),
                /\bIE\b/.test(e) && (t = null),
                N || (u = null)),
            (C = ["Presto"]),
            l.push(e));
    else r += " Mobile";
    if ((e = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(a) || 0)[1])) {
      e = [parseFloat(e.replace(/\.(\d)$/, ".0$1")), e];
      if ("Safari" == r && "+" == e[1].slice(-1))
        (r = "WebKit Nightly"), (V = "alpha"), (u = e[1].slice(0, -1));
      else if (
        u == e[1] ||
        u == (e[2] = (/\bSafari\/([\d.]+\+?)/i.exec(a) || 0)[1])
      )
        u = null;
      e[1] = (/\bChrome\/([\d.]+)/i.exec(a) || 0)[1];
      537.36 == e[0] &&
        537.36 == e[2] &&
        28 <= parseFloat(e[1]) &&
        "WebKit" == C &&
        (C = ["Blink"]);
      N && (v || e[1])
        ? (C && (C[1] = "like Chrome"),
          (e =
            e[1] ||
            ((e = e[0]),
            530 > e
              ? 1
              : 532 > e
              ? 2
              : 532.05 > e
              ? 3
              : 533 > e
              ? 4
              : 534.03 > e
              ? 5
              : 534.07 > e
              ? 6
              : 534.1 > e
              ? 7
              : 534.13 > e
              ? 8
              : 534.16 > e
              ? 9
              : 534.24 > e
              ? 10
              : 534.3 > e
              ? 11
              : 535.01 > e
              ? 12
              : 535.02 > e
              ? "13+"
              : 535.07 > e
              ? 15
              : 535.11 > e
              ? 16
              : 535.19 > e
              ? 17
              : 536.05 > e
              ? 18
              : 536.1 > e
              ? 19
              : 537.01 > e
              ? 20
              : 537.11 > e
              ? "21+"
              : 537.13 > e
              ? 23
              : 537.18 > e
              ? 24
              : 537.24 > e
              ? 25
              : 537.36 > e
              ? 26
              : "Blink" != C
              ? "27"
              : "28")))
        : (C && (C[1] = "like Safari"),
          (e =
            ((e = e[0]),
            400 > e
              ? 1
              : 500 > e
              ? 2
              : 526 > e
              ? 3
              : 533 > e
              ? 4
              : 534 > e
              ? "4+"
              : 535 > e
              ? 5
              : 537 > e
              ? 6
              : 538 > e
              ? 7
              : 601 > e
              ? 8
              : "8")));
      C &&
        (C[1] +=
          " " + (e += "number" == typeof e ? ".x" : /[.+]/.test(e) ? "" : "+"));
      "Safari" == r && (!u || 45 < parseInt(u)) && (u = e);
    }
    "Opera" == r && (e = /\bzbov|zvav$/.exec(t))
      ? ((r += " "),
        l.unshift("desktop mode"),
        "zvav" == e ? ((r += "Mini"), (u = null)) : (r += "Mobile"),
        (t = t.replace(RegExp(" *" + e + "$"), "")))
      : "Safari" == r &&
        /\bChrome\b/.exec(C && C[1]) &&
        (l.unshift("desktop mode"),
        (r = "Chrome Mobile"),
        (u = null),
        /\bOS X\b/.test(t) ? ((L = "Apple"), (t = "iOS 4.3+")) : (t = null));
    u &&
      0 == u.indexOf((e = /[\d.]+$/.exec(t))) &&
      -1 < a.indexOf("/" + e + "-") &&
      (t = String(t.replace(e, "")).replace(/^ +| +$/g, ""));
    C &&
      !/\b(?:Avant|Nook)\b/.test(r) &&
      (/Browser|Lunascape|Maxthon/.test(r) ||
        ("Safari" != r && /^iOS/.test(t) && /\bSafari\b/.test(C[1])) ||
        (/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(
          r
        ) &&
          C[1])) &&
      (e = C[C.length - 1]) &&
      l.push(e);
    l.length && (l = ["(" + l.join("; ") + ")"]);
    L && D && 0 > D.indexOf(L) && l.push("on " + L);
    D && l.push((/^on /.test(l[l.length - 1]) ? "" : "on ") + D);
    if (t) {
      var W =
        (e = / ([\d.+]+)$/.exec(t)) &&
        "/" == t.charAt(t.length - e[0].length - 1);
      t = {
        architecture: 32,
        family: e && !W ? t.replace(e[0], "") : t,
        version: e ? e[1] : null,
        toString: function () {
          var a = this.version;
          return (
            this.family +
            (a && !W ? " " + a : "") +
            (64 == this.architecture ? " 64-bit" : "")
          );
        },
      };
    }
    (e = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(U)) && !/\bi686\b/i.test(U)
      ? (t &&
          ((t.architecture = 64),
          (t.family = t.family.replace(RegExp(" *" + e), ""))),
        r &&
          (/\bWOW64\b/i.test(a) ||
            (N &&
              /\w(?:86|32)$/.test(w.cpuClass || w.platform) &&
              !/\bWin64; x64\b/i.test(a))) &&
          l.unshift("32-bit"))
      : t &&
        /^OS X/.test(t.family) &&
        "Chrome" == r &&
        39 <= parseFloat(u) &&
        (t.architecture = 64);
    a || (a = null);
    m = {};
    m.description = a;
    m.layout = C && C[0];
    m.manufacturer = L;
    m.name = r;
    m.prerelease = V;
    m.product = D;
    m.ua = a;
    m.version = r && u;
    m.os = t || {
      architecture: null,
      family: null,
      version: null,
      toString: function () {
        return "null";
      },
    };
    m.parse = p;
    m.toString = function () {
      return this.description || "";
    };
    m.version && l.unshift(u);
    m.name && l.unshift(r);
    t &&
      r &&
      (t != String(t).split(" ")[0] || (t != r.split(" ")[0] && !D)) &&
      l.push(D ? "(" + t + ")" : "on " + t);
    l.length && (m.description = l.join(" "));
    return m;
  }
  var l = { function: !0, object: !0 },
    k = (l[typeof window] && window) || this,
    y = l[typeof exports] && exports;
  l = l[typeof module] && module && !module.nodeType && module;
  var q = y && l && "object" == typeof global && global;
  !q || (q.global !== q && q.window !== q && q.self !== q) || (k = q);
  var m = Math.pow(2, 53) - 1,
    A = /\bOpera/;
  q = Object.prototype;
  var v = q.hasOwnProperty,
    E = q.toString,
    F = p();
  "function" == typeof define && "object" == typeof define.amd && define.amd
    ? ((k.platform = F),
      define(function () {
        return F;
      }))
    : y && l
    ? d(F, function (a, b) {
        y[b] = a;
      })
    : (k.platform = F);
}.call(this));
function buildIOSMeta() {
  for (
    var a = [
        {
          name: "viewport",
          content:
            "width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no",
        },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-status-bar-style", content: "black" },
      ],
      c = 0;
    c < a.length;
    c++
  ) {
    var b = document.createElement("meta");
    b.name = a[c].name;
    b.content = a[c].content;
    var d = window.document.head.querySelector('meta[name="' + b.name + '"]');
    d && d.parentNode.removeChild(d);
    window.document.head.appendChild(b);
  }
}
function hideIOSFullscreenPanel() {
  jQuery(".xxx-ios-fullscreen-message").css("display", "none");
  jQuery(".xxx-ios-fullscreen-scroll").css("display", "none");
  jQuery(".xxx-game-iframe-full").removeClass("xxx-game-iframe-iphone-se");
}
function buildIOSFullscreenPanel() {
  jQuery("body").append(
    '<div class="xxx-ios-fullscreen-message"><div class="xxx-ios-fullscreen-swipe"></div></div><div class="xxx-ios-fullscreen-scroll"></div>'
  );
}
function showIOSFullscreenPanel() {
  jQuery(".xxx-ios-fullscreen-message").css("display", "block");
  jQuery(".xxx-ios-fullscreen-scroll").css("display", "block");
}
function __iosResize() {
  window.scrollTo(0, 0);
  console.log(window.devicePixelRatio);
  console.log(window.innerWidth);
  console.log(window.innerHeight);
  if ("iPhone" === platform.product)
    switch (window.devicePixelRatio) {
      case 2:
        switch (window.innerWidth) {
          case 568:
            320 !== window.innerHeight &&
              jQuery(".xxx-game-iframe-full").addClass(
                "xxx-game-iframe-iphone-se"
              );
            break;
          case 667:
            375 === window.innerHeight
              ? hideIOSFullscreenPanel()
              : showIOSFullscreenPanel();
            break;
          case 808:
            414 === window.innerHeight
              ? hideIOSFullscreenPanel()
              : showIOSFullscreenPanel();
            break;
          default:
            hideIOSFullscreenPanel();
        }
        break;
      case 3:
        switch (window.innerWidth) {
          case 736:
            414 === window.innerHeight
              ? hideIOSFullscreenPanel()
              : showIOSFullscreenPanel();
            break;
          case 724:
            375 === window.innerHeight
              ? hideIOSFullscreenPanel()
              : showIOSFullscreenPanel();
            break;
          case 808:
            414 === window.innerHeight
              ? hideIOSFullscreenPanel()
              : showIOSFullscreenPanel();
            break;
          default:
            hideIOSFullscreenPanel();
        }
        break;
      default:
        hideIOSFullscreenPanel();
    }
}
function iosResize() {
  __iosResize();
  setTimeout(function () {
    __iosResize();
  }, 500);
}
function iosInIframe() {
  try {
    return window.self !== window.top;
  } catch (a) {
    return !0;
  }
}
$(document).ready(function () {
  platform &&
    "iPhone" === platform.product &&
    "safari" !== platform.name.toLowerCase() &&
    (buildIOSFullscreenPanel(), buildIOSMeta());
});
jQuery(window).resize(function () {
  platform &&
    "iPhone" === platform.product &&
    "safari" !== platform.name.toLowerCase() &&
    iosResize();
});
var s_iScaleFactor = 1,
  s_bIsIphone = !1,
  s_iOffsetX,
  s_iOffsetY;
(function (a) {
  (jQuery.browser = jQuery.browser || {}).mobile =
    /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(
      a
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(
      a.substr(0, 4)
    );
})(navigator.userAgent || navigator.vendor || window.opera);
$(window).resize(function () {
  sizeHandler();
});
function trace(a) {
  console.log(a);
}
function isChrome() {
  return (
    /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
  );
}
function isIOS() {
  var a =
    "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(
      ";"
    );
  for (
    -1 !== navigator.userAgent.toLowerCase().indexOf("iphone") &&
    (s_bIsIphone = !0);
    a.length;

  )
    if (navigator.platform === a.pop()) return !0;
  return (s_bIsIphone = !1);
}
function getSize(a) {
  var c = a.toLowerCase(),
    b = window.document,
    d = b.documentElement;
  if (void 0 === window["inner" + a]) a = d["client" + a];
  else if (window["inner" + a] != d["client" + a]) {
    var g = b.createElement("body");
    g.id = "vpw-test-b";
    g.style.cssText = "overflow:scroll";
    var h = b.createElement("div");
    h.id = "vpw-test-d";
    h.style.cssText = "position:absolute;top:-1000px";
    h.innerHTML =
      "<style>@media(" +
      c +
      ":" +
      d["client" + a] +
      "px){body#vpw-test-b div#vpw-test-d{" +
      c +
      ":7px!important}}</style>";
    g.appendChild(h);
    d.insertBefore(g, b.head);
    a = 7 == h["offset" + a] ? d["client" + a] : window["inner" + a];
    d.removeChild(g);
  } else a = window["inner" + a];
  return a;
}
window.addEventListener("orientationchange", onOrientationChange);
function onOrientationChange() {
  window.matchMedia("(orientation: portrait)").matches && sizeHandler();
  window.matchMedia("(orientation: landscape)").matches && sizeHandler();
}
function getIOSWindowHeight() {
  return (
    (document.documentElement.clientWidth / window.innerWidth) *
    window.innerHeight
  );
}
function getHeightOfIOSToolbars() {
  var a =
    (0 === window.orientation ? screen.height : screen.width) -
    getIOSWindowHeight();
  return 1 < a ? a : 0;
}
function sizeHandler() {
  window.scrollTo(0, 1);
  if ($("#canvas")) {
    var a =
      "safari" === platform.name.toLowerCase()
        ? getIOSWindowHeight()
        : getSize("Height");
    var c = getSize("Width");
    _checkOrientation(c, a);
    var b = Math.min(a / CANVAS_HEIGHT, c / CANVAS_WIDTH),
      d = Math.round(CANVAS_WIDTH * b);
    b = Math.round(CANVAS_HEIGHT * b);
    if (b < a) {
      var g = a - b;
      b += g;
      d += (CANVAS_WIDTH / CANVAS_HEIGHT) * g;
    } else
      d < c &&
        ((g = c - d), (d += g), (b += (CANVAS_HEIGHT / CANVAS_WIDTH) * g));
    g = a / 2 - b / 2;
    var h = c / 2 - d / 2,
      f = CANVAS_WIDTH / d;
    if (h * f < -EDGEBOARD_X || g * f < -EDGEBOARD_Y)
      (b = Math.min(
        a / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y),
        c / (CANVAS_WIDTH - 2 * EDGEBOARD_X)
      )),
        (d = Math.round(CANVAS_WIDTH * b)),
        (b = Math.round(CANVAS_HEIGHT * b)),
        (g = (a - b) / 2),
        (h = (c - d) / 2),
        (f = CANVAS_WIDTH / d);
    s_iOffsetX = -1 * h * f;
    s_iOffsetY = -1 * g * f;
    0 <= g && (s_iOffsetY = 0);
    0 <= h && (s_iOffsetX = 0);
    null !== s_oInterface &&
      s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
    null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
    s_bIsIphone
      ? ((canvas = document.getElementById("canvas")),
        (s_oStage.canvas.width = 2 * d),
        (s_oStage.canvas.height = 2 * b),
        (canvas.style.width = d + "px"),
        (canvas.style.height = b + "px"),
        (s_iScaleFactor = 2 * Math.min(d / CANVAS_WIDTH, b / CANVAS_HEIGHT)),
        (s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor))
      : s_bMobile || isChrome()
      ? ($("#canvas").css("width", d + "px"),
        $("#canvas").css("height", b + "px"))
      : ((s_oStage.canvas.width = d),
        (s_oStage.canvas.height = b),
        (s_iScaleFactor = Math.min(d / CANVAS_WIDTH, b / CANVAS_HEIGHT)),
        (s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor));
    0 > g || (g = (a - b) / 2);
    $("#canvas").css("top", g + "px");
    $("#canvas").css("left", h + "px");
    fullscreenHandler();
  }
}
function createBitmap(a, c, b) {
  var d = new createjs.Bitmap(a),
    g = new createjs.Shape();
  c && b
    ? g.graphics.beginFill("#fff").drawRect(0, 0, c, b)
    : g.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
  d.hitArea = g;
  return d;
}
function createSprite(a, c, b, d, g, h) {
  a = null !== c ? new createjs.Sprite(a, c) : new createjs.Sprite(a);
  c = new createjs.Shape();
  c.graphics.beginFill("#000000").drawRect(-b, -d, g, h);
  a.hitArea = c;
  return a;
}
function _checkOrientation(a, c) {
  s_bMobile &&
    ENABLE_CHECK_ORIENTATION &&
    (a > c
      ? "landscape" === $(".orientation-msg-container").attr("data-orientation")
        ? ($(".orientation-msg-container").css("display", "none"),
          s_oMain.startUpdate())
        : ($(".orientation-msg-container").css("display", "block"),
          s_oMain.stopUpdate())
      : "portrait" === $(".orientation-msg-container").attr("data-orientation")
      ? ($(".orientation-msg-container").css("display", "none"),
        s_oMain.startUpdate())
      : ($(".orientation-msg-container").css("display", "block"),
        s_oMain.stopUpdate()));
}
function randomFloatBetween(a, c, b) {
  "undefined" === typeof b && (b = 2);
  return parseFloat(Math.min(a + Math.random() * (c - a), c).toFixed(b));
}
function shuffle(a) {
  for (var c = a.length, b, d; 0 !== c; )
    (d = Math.floor(Math.random() * c)),
      --c,
      (b = a[c]),
      (a[c] = a[d]),
      (a[d] = b);
  return a;
}
function formatTime(a) {
  a /= 1e3;
  var c = Math.floor(a / 60);
  a = parseFloat(a - 60 * c).toFixed(1);
  var b = "";
  b = 10 > c ? b + ("0" + c + ":") : b + (c + ":");
  return 10 > a ? b + ("0" + a) : b + a;
}
function rotateVector2D(a, c) {
  var b = c.getX() * Math.cos(a) + c.getY() * Math.sin(a),
    d = c.getX() * -Math.sin(a) + c.getY() * Math.cos(a);
  c.set(b, d);
  return c;
}
Array.prototype.sortOn = function () {
  var a = this.slice();
  if (!arguments.length) return a.sort();
  var c = Array.prototype.slice.call(arguments);
  return a.sort(function (a, d) {
    for (var b = c.slice(), h = b.shift(); a[h] == d[h] && b.length; )
      h = b.shift();
    return a[h] == d[h] ? 0 : a[h] > d[h] ? 1 : -1;
  });
};
function roundDecimal(a, c) {
  var b = Math.pow(10, c);
  return Math.round(b * a) / b;
}
function tweenVectors(a, c, b, d) {
  d.set(
    a.getX() + b * (c.getX() - a.getX()),
    a.getY() + b * (c.getY() - a.getY())
  );
  return d;
}
function between(a, c, b) {
  var d = !1;
  a < b && c > a && c < b && (d = !0);
  a > b && c > b && c < a && (d = !0);
  if (c === a || c === b) d = !0;
  return d;
}
function pointInRect(a, c, b, d, g, h) {
  var f = !1;
  between(b, a, g) && between(d, c, h) && (f = !0);
  return f;
}
function checkRectIntersection(a, c) {
  return a.x >= c.x + c.width ||
    a.x + a.width <= c.x ||
    a.y >= c.y + c.height ||
    a.y + a.height <= c.y
    ? !1
    : !0;
}
function NoClickDelay(a) {
  this.element = a;
  window.Touch && this.element.addEventListener("touchstart", this, !1);
}
NoClickDelay.prototype = {
  handleEvent: function (a) {
    switch (a.type) {
      case "touchstart":
        this.onTouchStart(a);
        break;
      case "touchmove":
        this.onTouchMove(a);
        break;
      case "touchend":
        this.onTouchEnd(a);
    }
  },
  onTouchStart: function (a) {
    a.preventDefault();
    this.moved = !1;
    this.element.addEventListener("touchmove", this, !1);
    this.element.addEventListener("touchend", this, !1);
  },
  onTouchMove: function (a) {
    this.moved = !0;
  },
  onTouchEnd: function (a) {
    this.element.removeEventListener("touchmove", this, !1);
    this.element.removeEventListener("touchend", this, !1);
    if (!this.moved) {
      a = document.elementFromPoint(
        a.changedTouches[0].clientX,
        a.changedTouches[0].clientY
      );
      3 === a.nodeType && (a = a.parentNode);
      var c = document.createEvent("MouseEvents");
      c.initEvent("click", !0, !0);
      a.dispatchEvent(c);
    }
  },
};
function playSound(a, c, b) {
  return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile
    ? (s_aSounds[a].play(),
      s_aSounds[a].volume(c),
      s_aSounds[a].loop(b),
      s_aSounds[a])
    : null;
}
function stopSound(a) {
  (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || s_aSounds[a].stop();
}
function setVolume(a, c) {
  (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || s_aSounds[a].volume(c);
}
function setMute(a, c) {
  (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || s_aSounds[a].mute(c);
}
function ctlArcadeResume() {
  null !== s_oMain && s_oMain.startUpdate();
}
function ctlArcadePause() {
  null !== s_oMain && s_oMain.stopUpdate();
}
function getParamValue(a) {
  for (
    var c = window.location.search.substring(1).split("&"), b = 0;
    b < c.length;
    b++
  ) {
    var d = c[b].split("=");
    if (d[0] == a) return d[1];
  }
}
function fullscreenHandler() {
  ENABLE_FULLSCREEN &&
    screenfull.isEnabled &&
    ((s_bFullscreen = screenfull.isFullscreen),
    null !== s_oInterface && s_oInterface.resetFullscreenBut(),
    null !== s_oMenu && s_oMenu.resetFullscreenBut());
}
if (screenfull.isEnabled)
  screenfull.on("change", function () {
    s_bFullscreen = screenfull.isFullscreen;
    null !== s_oInterface && s_oInterface.resetFullscreenBut();
    null !== s_oMenu && s_oMenu.resetFullscreenBut();
  });
(function () {
  function a(a) {
    var b = {
      focus: "visible",
      focusin: "visible",
      pageshow: "visible",
      blur: "hidden",
      focusout: "hidden",
      pagehide: "hidden",
    };
    a = a || window.event;
    a.type in b
      ? (document.body.className = b[a.type])
      : ((document.body.className = this[c] ? "hidden" : "visible"),
        "hidden" === document.body.className
          ? s_oMain.stopUpdate()
          : s_oMain.startUpdate());
  }
  var c = "hidden";
  c in document
    ? document.addEventListener("visibilitychange", a)
    : (c = "mozHidden") in document
    ? document.addEventListener("mozvisibilitychange", a)
    : (c = "webkitHidden") in document
    ? document.addEventListener("webkitvisibilitychange", a)
    : (c = "msHidden") in document
    ? document.addEventListener("msvisibilitychange", a)
    : "onfocusin" in document
    ? (document.onfocusin = document.onfocusout = a)
    : (window.onpageshow =
        window.onpagehide =
        window.onfocus =
        window.onblur =
          a);
})();
function CSpriteLibrary() {
  var a = {},
    c,
    b,
    d,
    g,
    h,
    f;
  this.init = function (a, p, l) {
    c = {};
    d = b = 0;
    g = a;
    h = p;
    f = l;
  };
  this.addSprite = function (d, h) {
    if (!a.hasOwnProperty(d)) {
      var f = new Image();
      a[d] = c[d] = { szPath: h, oSprite: f, bLoaded: !1 };
      b++;
    }
  };
  this.getSprite = function (b) {
    return a.hasOwnProperty(b) ? a[b].oSprite : null;
  };
  this._onSpritesLoaded = function () {
    b = 0;
    h.call(f);
  };
  this._onSpriteLoaded = function () {
    g.call(f);
    ++d === b && this._onSpritesLoaded();
  };
  this.loadSprites = function () {
    for (var a in c)
      (c[a].oSprite.oSpriteLibrary = this),
        (c[a].oSprite.szKey = a),
        (c[a].oSprite.onload = function () {
          this.oSpriteLibrary.setLoaded(this.szKey);
          this.oSpriteLibrary._onSpriteLoaded(this.szKey);
        }),
        (c[a].oSprite.onerror = function (a) {
          var b = a.currentTarget;
          setTimeout(function () {
            c[b.szKey].oSprite.src = c[b.szKey].szPath;
          }, 500);
        }),
        (c[a].oSprite.src = c[a].szPath);
  };
  this.setLoaded = function (b) {
    a[b].bLoaded = !0;
  };
  this.isLoaded = function (b) {
    return a[b].bLoaded;
  };
  this.getNumSprites = function () {
    return b;
  };
}
var CANVAS_WIDTH = 1400,
  CANVAS_HEIGHT = 1920,
  EDGEBOARD_X = 160,
  EDGEBOARD_Y = 160,
  FPS = 30,
  FPS_TIME = 1e3 / FPS,
  DISABLE_SOUND_MOBILE = !1,
  FONT_GAME = "upheaval_tt_brkregular",
  SOUNDTRACK_VOLUME_IN_GAME = 0.2,
  STATE_LOADING = 0,
  STATE_INTRO = 1,
  STATE_MENU = 2,
  STATE_HELP = 3,
  STATE_GAME = 4,
  ON_MOUSE_DOWN = 0,
  ON_MOUSE_UP = 1,
  ON_MOUSE_OVER = 2,
  ON_MOUSE_OUT = 3,
  ON_DRAG_START = 4,
  ON_DRAG_END = 5,
  ON_CONTROLLER_END = 6,
  ON_CONTROLLER_REMOVE = 7,
  STATE_HOOK_ROTATE = 0,
  STATE_BLOCK_ROTATE = 1,
  STATE_BLOCK_FALLING = 2,
  STATE_BLOCK_MISPLACED = 3,
  STATE_SHOW_THE_TOWER = 4,
  BG_HEIGHT = 2185,
  FIRST_BLOCK_LANDING_Y = 1735,
  HOOK_START_X = CANVAS_WIDTH / 2,
  HOOK_START_Y = EDGEBOARD_Y + 124,
  START_HOOK_ROT_SPEED,
  HOOK_ROT_INCREASE_FACTOR,
  HOOK_THICKNESS = 4,
  HOOK_MAX_ROT,
  LINE_LENGTH = 300,
  NUM_LEVELS,
  NUM_LIVES,
  FALL_SPEED,
  TIME_GROUND_MOVE = 800,
  Y_OFFSET_CAMERA = CANVAS_HEIGHT / 2 + 300,
  BONUS_TOLLERANCE = 10,
  SPEED_TOWER_SHOWING = 15,
  MAX_SCORE_PER_BLOCK = 350,
  BEST_MULTIPLIER,
  MULTIPLIER_BONUS_POINT,
  BIRD_SPEED = 5e3,
  BIRD_OCCURRENCE = 7e3,
  ENABLE_FULLSCREEN,
  ENABLE_CHECK_ORIENTATION;
CTLText.prototype = {
  constructor: CTLText,
  __autofit: function () {
    if (this._bFitText) {
      for (
        var a = this._iFontSize;
        (this._oText.getBounds().height > this._iHeight - 2 * this._iPaddingV ||
          this._oText.getBounds().width > this._iWidth - 2 * this._iPaddingH) &&
        !(a--,
        (this._oText.font = a + "px " + this._szFont),
        (this._oText.lineHeight = Math.round(a * this._fLineHeightFactor)),
        this.__updateY(),
        this.__verticalAlign(),
        8 > a);

      );
      this._iFontSize = a;
    }
  },
  __verticalAlign: function () {
    if (this._bVerticalAlign) {
      var a = this._oText.getBounds().height;
      this._oText.y -= (a - this._iHeight) / 2 + this._iPaddingV;
    }
  },
  __updateY: function () {
    this._oText.y = this._y + this._iPaddingV;
    switch (this._oText.textBaseline) {
      case "middle":
        this._oText.y +=
          this._oText.lineHeight / 2 +
          (this._iFontSize * this._fLineHeightFactor - this._iFontSize);
    }
  },
  __createText: function (a) {
    this._bDebug &&
      ((this._oDebugShape = new createjs.Shape()),
      this._oDebugShape.graphics
        .beginFill("rgba(255,0,0,0.5)")
        .drawRect(this._x, this._y, this._iWidth, this._iHeight),
      this._oContainer.addChild(this._oDebugShape));
    this._oText = new createjs.Text(
      a,
      this._iFontSize + "px " + this._szFont,
      this._szColor
    );
    this._oText.textBaseline = "middle";
    this._oText.lineHeight = Math.round(
      this._iFontSize * this._fLineHeightFactor
    );
    this._oText.textAlign = this._szAlign;
    this._oText.lineWidth = this._bMultiline
      ? this._iWidth - 2 * this._iPaddingH
      : null;
    switch (this._szAlign) {
      case "center":
        this._oText.x = this._x + this._iWidth / 2;
        break;
      case "left":
        this._oText.x = this._x + this._iPaddingH;
        break;
      case "right":
        this._oText.x = this._x + this._iWidth - this._iPaddingH;
    }
    this._oContainer.addChild(this._oText);
    this.refreshText(a);
  },
  setVerticalAlign: function (a) {
    this._bVerticalAlign = a;
  },
  setOutline: function (a) {
    null !== this._oText && (this._oText.outline = a);
  },
  setShadow: function (a, c, b, d) {
    null !== this._oText &&
      (this._oText.shadow = new createjs.Shadow(a, c, b, d));
  },
  setColor: function (a) {
    this._oText.color = a;
  },
  setAlpha: function (a) {
    this._oText.alpha = a;
  },
  setY: function (a) {
    this._y = this._oText.y = a;
  },
  removeTweens: function () {
    createjs.Tween.removeTweens(this._oText);
  },
  getText: function () {
    return this._oText;
  },
  getY: function () {
    return this._y;
  },
  getFontSize: function () {
    return this._iFontSize;
  },
  refreshText: function (a) {
    "" === a && (a = " ");
    null === this._oText && this.__createText(a);
    this._oText.text = a;
    this._oText.font = this._iFontSize + "px " + this._szFont;
    this._oText.lineHeight = Math.round(
      this._iFontSize * this._fLineHeightFactor
    );
    this.__autofit();
    this.__updateY();
    this.__verticalAlign();
  },
};
function CTLText(a, c, b, d, g, h, f, n, p, l, k, y, q, m, A, v, E) {
  this._oContainer = a;
  this._x = c;
  this._y = b;
  this._iWidth = d;
  this._iHeight = g;
  this._bMultiline = v;
  this._iFontSize = h;
  this._szAlign = f;
  this._szColor = n;
  this._szFont = p;
  this._iPaddingH = k;
  this._iPaddingV = y;
  this._bVerticalAlign = A;
  this._bFitText = m;
  this._bDebug = E;
  this._oDebugShape = null;
  this._fLineHeightFactor = l;
  this._oText = null;
  q && this.__createText(q);
}
var TEXT_GAMEOVER = "GAME OVER",
  TEXT_CONGRATS = "CONGRATULATIONS!!",
  TEXT_WIN = "YOU WIN!!!",
  TEXT_PLAY = "PLAY",
  TEXT_EXIT = "EXIT",
  TEXT_SCORE = "SCORE",
  TEXT_BEST_SCORE = "BEST",
  TEXT_LEVEL = "LEVEL",
  TEXT_LIVES = "LIVES",
  TEXT_COMPLETED = "COMPLETED",
  TEXT_PERFECT = "PERFECT!!",
  TEXT_GREAT = "GREAT!",
  TEXT_GOOD = "GOOD",
  TEXT_BAD = "TOO BAD!!",
  TEXT_MULTIPLIER = "YOUR MULTIPLIER IS",
  TEXT_HELP1 =
    "DROP THE BLOCKS IN THE CENTER OF THE SCREEN TO GET BEST SCORE MULTIPLIER!!",
  TEXT_HELP2 = "STACK BLOCKS PERFECTLY TO GET AN EXTRA BONUS!",
 
  TEXT_PRELOADER_CONTINUE = "START",
  TEXT_SHARE_IMAGE = "200x200.jpg",
  TEXT_SHARE_TITLE = "Congratulations!",
  TEXT_SHARE_MSG1 = "You collected <strong>",
  TEXT_SHARE_MSG2 =
    " points</strong>!<br><br>Share your score with your friends!",
  TEXT_SHARE_SHARE1 = "My score is ",
  TEXT_SHARE_SHARE2 = " points! Can you do better?";
function CPreloader() {
  var a, c, b, d, g, h, f, n, p, l;
  this._init = function () {
    s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
    s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
    s_oSpriteLibrary.addSprite("200x200", "./sprites/200x200.jpg");
    s_oSpriteLibrary.addSprite("but_start", "./sprites/but_start.png");
    s_oSpriteLibrary.loadSprites();
    l = new createjs.Container();
    s_oStage.addChild(l);
  };
  this.unload = function () {
    l.removeAllChildren();
    p.unload();
  };
  this._onImagesLoaded = function () {};
  this._onAllImagesLoaded = function () {
    this.attachSprites();
    s_oMain.preloaderReady();
  };
  this.attachSprites = function () {
    var k = new createjs.Shape();
    k.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    l.addChild(k);
    k = s_oSpriteLibrary.getSprite("200x200");
    f = createBitmap(k);
    f.regX = 0.5 * k.width;
    f.regY = 0.5 * k.height;
    f.x = CANVAS_WIDTH / 2;
    f.y = CANVAS_HEIGHT / 2 - 180;
    l.addChild(f);
    n = new createjs.Shape();
    n.graphics
      .beginFill("rgba(0,0,0,0.01)")
      .drawRoundRect(f.x - 100, f.y - 100, 200, 200, 10);
    l.addChild(n);
    f.mask = n;
    k = s_oSpriteLibrary.getSprite("progress_bar");
    d = createBitmap(k);
    d.x = CANVAS_WIDTH / 2 - k.width / 2;
    d.y = CANVAS_HEIGHT / 2 + 50;
    l.addChild(d);
    a = k.width;
    c = k.height;
    g = new createjs.Shape();
    g.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(d.x, d.y, 1, c);
    l.addChild(g);
    d.mask = g;
    b = new createjs.Text("", "30px " + FONT_GAME, "#fff");
    b.x = CANVAS_WIDTH / 2;
    b.y = CANVAS_HEIGHT / 2 + 100;
    b.textBaseline = "alphabetic";
    b.textAlign = "center";
    l.addChild(b);
    k = s_oSpriteLibrary.getSprite("but_start");
    p = new CTextButton(
      CANVAS_WIDTH / 2,
      CANVAS_HEIGHT / 2,
      k,
      TEXT_PRELOADER_CONTINUE,
      "Arial",
      "#000",
      "bold 50",
      l
    );
    p.addEventListener(ON_MOUSE_UP, this._onButStartRelease, this);
    p.setVisible(!1);
    h = new createjs.Shape();
    h.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    l.addChild(h);
    createjs.Tween.get(h)
      .to({ alpha: 0 }, 500)
      .call(function () {
        createjs.Tween.removeTweens(h);
        l.removeChild(h);
      });
  };
  this._onButStartRelease = function () {
    s_oMain._onRemovePreloader();
  };
  this.refreshLoader = function (k) {
    b.text = k + "%";
    100 === k &&
      (s_oMain._onRemovePreloader(),
      p.setVisible(!1),
      (b.visible = !1),
      (d.visible = !1));
    g.graphics.clear();
    k = Math.floor((k * a) / 100);
    g.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(d.x, d.y, k, c);
  };
  this._init();
}
function CMain(a) {
  var c = !0,
    b = 0,
    d = 0,
    g = STATE_LOADING,
    h,
    f;
  this.initContainer = function () {
    var a = document.getElementById("canvas");
    s_oStage = new createjs.Stage(a);
    s_oStage.preventSelection = !1;
    createjs.Touch.enable(s_oStage);
    s_bMobile = jQuery.browser.mobile;
    !1 === s_bMobile && s_oStage.enableMouseOver(20);
    s_iPrevTime = new Date().getTime();
    createjs.Ticker.framerate = FPS;
    createjs.Ticker.addEventListener("tick", this._update);
    navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
    s_oSpriteLibrary = new CSpriteLibrary();
    h = new CPreloader();

  };
  this.soundLoaded = function () {
    b++;
    h.refreshLoader(Math.floor((b / d) * 100));
  };
  this._initSounds = function () {
    Howler.mute(!s_bAudioActive);
    s_aSoundsInfo = [];
    s_aSoundsInfo.push({
      path: "./sounds/",
      filename: "bonus",
      loop: !1,
      volume: 1,
      ingamename: "bonus",
    });
    s_aSoundsInfo.push({
      path: "./sounds/",
      filename: "click",
      loop: !1,
      volume: 1,
      ingamename: "click",
    });
    s_aSoundsInfo.push({
      path: "./sounds/",
      filename: "end_level",
      loop: !1,
      volume: 1,
      ingamename: "end_level",
    });
    s_aSoundsInfo.push({
      path: "./sounds/",
      filename: "fall_fail",
      loop: !1,
      volume: 1,
      ingamename: "fall_fail",
    });
    s_aSoundsInfo.push({
      path: "./sounds/",
      filename: "fall_ok",
      loop: !1,
      volume: 1,
      ingamename: "fall_ok",
    });
    s_aSoundsInfo.push({
      path: "./sounds/",
      filename: "soundtrack",
      loop: !0,
      volume: 1,
      ingamename: "soundtrack",
    });
    d += s_aSoundsInfo.length;
    s_aSounds = [];
    for (var a = 0; a < s_aSoundsInfo.length; a++)
      this.tryToLoadSound(s_aSoundsInfo[a], !1);
  };
  this.tryToLoadSound = function (a, b) {
    setTimeout(
      function () {
        s_aSounds[a.ingamename] = new Howl({
          src: [a.path + a.filename + ".mp3"],
          autoplay: !1,
          preload: !0,
          loop: a.loop,
          volume: a.volume,
          onload: s_oMain.soundLoaded,
          onloaderror: function (a, b) {
            for (var c = 0; c < s_aSoundsInfo.length; c++)
              if (a === s_aSounds[s_aSoundsInfo[c].ingamename]._sounds[0]._id) {
                s_oMain.tryToLoadSound(s_aSoundsInfo[c], !0);
                break;
              }
          },
          onplayerror: function (a) {
            for (var b = 0; b < s_aSoundsInfo.length; b++)
              if (a === s_aSounds[s_aSoundsInfo[b].ingamename]._sounds[0]._id) {
                s_aSounds[s_aSoundsInfo[b].ingamename].once(
                  "unlock",
                  function () {
                    s_aSounds[s_aSoundsInfo[b].ingamename].play();
                    "soundtrack" === s_aSoundsInfo[b].ingamename &&
                      null !== s_oGame &&
                      setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME);
                  }
                );
                break;
              }
          },
        });
      },
      b ? 200 : 0
    );
  };
  this._loadImages = function () {
    s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
    s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
    s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
    s_oSpriteLibrary.addSprite("bonus", "./sprites/bonus.png");
    s_oSpriteLibrary.addSprite("hook", "./sprites/hook.png");
    s_oSpriteLibrary.addSprite("crane", "./sprites/crane.png");
    s_oSpriteLibrary.addSprite("block1", "./sprites/block1.png");
    s_oSpriteLibrary.addSprite("block2", "./sprites/block2.png");
    s_oSpriteLibrary.addSprite("block3", "./sprites/block3.png");
    s_oSpriteLibrary.addSprite("but_back_home", "./sprites/but_back_home.png");
    s_oSpriteLibrary.addSprite(
      "but_play_again",
      "./sprites/but_play_again.png"
    );
    s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
    s_oSpriteLibrary.addSprite("hit_area", "./sprites/hit_area.png");
    s_oSpriteLibrary.addSprite("game_bg", "./sprites/game_bg.jpg");
    s_oSpriteLibrary.addSprite(
      "perfect_landing",
      "./sprites/perfect_landing.png"
    );
    s_oSpriteLibrary.addSprite("logo", "./sprites/logo.png");
    s_oSpriteLibrary.addSprite("exit_button", "./sprites/exit_button.png");
    s_oSpriteLibrary.addSprite("bird", "./sprites/bird.png");
    s_oSpriteLibrary.addSprite("cloud_1", "./sprites/cloud_1.png");
    s_oSpriteLibrary.addSprite("cloud_2", "./sprites/cloud_2.png");
    s_oSpriteLibrary.addSprite("cloud_3", "./sprites/cloud_3.png");
    s_oSpriteLibrary.addSprite("cloud_4", "./sprites/cloud_4.png");
    s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
    s_oSpriteLibrary.addSprite(
      "information_panel",
      "./sprites/information_panel.png"
    );
    s_oSpriteLibrary.addSprite("floor_icon", "./sprites/floor_icon.png");
    s_oSpriteLibrary.addSprite("help1", "./sprites/help1.jpg");
    s_oSpriteLibrary.addSprite("help2", "./sprites/help2.png");
    s_oSpriteLibrary.addSprite("trajectory", "./sprites/trajectory.png");
    s_oSpriteLibrary.addSprite("but_info", "./sprites/but_info.png");
    s_oSpriteLibrary.addSprite(
      "but_fullscreen",
      "./sprites/but_fullscreen.png"
    );
    d += s_oSpriteLibrary.getNumSprites();
    s_oSpriteLibrary.loadSprites();
  };
  this._onImagesLoaded = function () {
    b++;
    h.refreshLoader(Math.floor((b / d) * 100));
  };
  this.preloaderReady = function () {
    this._loadImages();
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || this._initSounds();
  };
  this._onRemovePreloader = function () {
    h.unload();
    s_oSoundTrack = playSound("soundtrack", 1, !0);
    this.gotoMenu();
  };
  this._onAllImagesLoaded = function () {};
  this.gotoMenu = function () {
    new CMenu();
    g = STATE_MENU;
  };
  this.gotoGame = function () {
    f = new CGame(n);
    g = STATE_GAME;
  };
  this.gotoHelp = function () {
    new CHelp();
    g = STATE_HELP;
  };
  this.stopUpdate = function () {
    c = !1;
    createjs.Ticker.paused = !0;
    $("#block_game").css("display", "block");
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || Howler.mute(!0);
  };
  this.startUpdate = function () {
    s_iPrevTime = new Date().getTime();
    c = !0;
    createjs.Ticker.paused = !1;
    $("#block_game").css("display", "none");
    (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) &&
      s_bAudioActive &&
      Howler.mute(!1);
  };
  this._update = function (a) {
    if (!1 !== c) {
      var b = new Date().getTime();
      s_iTimeElaps = b - s_iPrevTime;
      s_iCntTime += s_iTimeElaps;
      s_iCntFps++;
      s_iPrevTime = b;
      1e3 <= s_iCntTime &&
        ((s_iCurFps = s_iCntFps), (s_iCntTime -= 1e3), (s_iCntFps = 0));
      g === STATE_GAME && f.update();
      s_oStage.update(a);
    }
  };
  s_oMain = this;
  var n = a;
  ENABLE_FULLSCREEN = a.fullscreen;
  ENABLE_CHECK_ORIENTATION = a.check_orientation;
  s_bAudioActive = a.audio_enable_on_startup;
  this.initContainer();
}
var s_bMobile,
  s_bAudioActive = !1,
  s_iCntTime = 0,
  s_iTimeElaps = 0,
  s_iPrevTime = 0,
  s_iCntFps = 0,
  s_iCurFps = 0,
  s_oRollingTextManager,
  s_oDrawLayer,
  s_oStage,
  s_oMain,
  s_oSpriteLibrary,
  s_oSoundTrack = null,
  s_bFullscreen = !1,
  s_aSounds,
  s_aSoundsInfo;
function CTextButton(a, c, b, d, g, h, f, n) {
  var p, l, k, y, q, m, A, v, E, F;
  this._init = function (a, b, c, d, h, f, g) {
    p = !1;
    l = 1;
    k = [];
    y = [];
    F = createBitmap(c);
    v = new createjs.Container();
    v.x = a;
    v.y = b;
    v.regX = c.width / 2;
    v.regY = c.height / 2;
    s_bMobile || (v.cursor = "pointer");
    v.addChild(F, E);
    n.addChild(v);
    E = new CTLText(
      v,
      40,
      0,
      c.width - 80,
      c.height,
      g,
      "center",
      f,
      h,
      1,
      2,
      2,
      d,
      !0,
      !0,
      !1,
      !1
    );
    this._initListener();
  };
  this.unload = function () {
    v.off("mousedown", q);
    v.off("pressup", m);
    n.removeChild(v);
  };
  this.setVisible = function (a) {
    v.visible = a;
  };
  this.setAlign = function (a) {
    E.textAlign = a;
  };
  this.setTextX = function (a) {
    E.x = a;
  };
  this.setScale = function (a) {
    l = v.scaleX = v.scaleY = a;
  };
  this.enable = function () {
    p = !1;
  };
  this.disable = function () {
    p = !0;
  };
  this._initListener = function () {
    q = v.on("mousedown", this.buttonDown);
    m = v.on("pressup", this.buttonRelease);
  };
  this.addEventListener = function (a, b, c) {
    k[a] = b;
    y[a] = c;
  };
  this.addEventListenerWithParams = function (a, b, c, d) {
    k[a] = b;
    y[a] = c;
    A = d;
  };
  this.buttonRelease = function () {
    p ||
      (playSound("click", 1, !1),
      (v.scaleX = l),
      (v.scaleY = l),
      k[ON_MOUSE_UP] && k[ON_MOUSE_UP].call(y[ON_MOUSE_UP], A));
  };
  this.buttonDown = function () {
    p ||
      ((v.scaleX = 0.9 * l),
      (v.scaleY = 0.9 * l),
      k[ON_MOUSE_DOWN] && k[ON_MOUSE_DOWN].call(y[ON_MOUSE_DOWN]));
  };
  this.setPosition = function (a, b) {
    v.x = a;
    v.y = b;
  };
  this.tweenPosition = function (a, b, c, d, k, h, f) {
    createjs.Tween.get(v)
      .wait(d)
      .to({ x: a, y: b }, c, k)
      .call(function () {
        void 0 !== h && h.call(f);
      });
  };
  this.changeText = function (a) {
    E.refreshText(a);
  };
  this.setX = function (a) {
    v.x = a;
  };
  this.setY = function (a) {
    v.y = a;
  };
  this.getButtonImage = function () {
    return v;
  };
  this.getX = function () {
    return v.x;
  };
  this.getY = function () {
    return v.y;
  };
  this.getSprite = function () {
    return v;
  };
  this.getScale = function () {
    return v.scaleX;
  };
  this._init(a, c, b, d, g, h, f);
}
function CGfxButton(a, c, b, d) {
  var g,
    h,
    f,
    n,
    p,
    l = [],
    k,
    y,
    q,
    m;
  this._init = function (a, b, c, d) {
    g = !1;
    n = [];
    p = [];
    h = c.width;
    f = c.height;
    q = createBitmap(c);
    q.x = a;
    q.y = b;
    q.regX = c.width / 2;
    q.regY = c.height / 2;
    q.cursor = "pointer";
    d.addChild(q);
    m = d;
    this._initListener();
  };
  this.unload = function () {
    q.off("mousedown", k);
    q.off("pressup", y);
    m.removeChild(q);
  };
  this.setVisible = function (a) {
    q.visible = a;
  };
  this._initListener = function () {
    k = q.on("mousedown", this.buttonDown);
    y = q.on("pressup", this.buttonRelease);
  };
  this.addEventListener = function (a, b, c) {
    n[a] = b;
    p[a] = c;
  };
  this.addEventListenerWithParams = function (a, b, c, d) {
    n[a] = b;
    p[a] = c;
    l = d;
  };
  this.removeEventListener = function (a) {
    n[a] = null;
    p[a] = null;
  };
  this.buttonRelease = function () {
    g ||
      (playSound("click", 1, !1),
      (q.scaleX = 1),
      (q.scaleY = 1),
      n[ON_MOUSE_UP] && n[ON_MOUSE_UP].call(p[ON_MOUSE_UP], l));
  };
  this.buttonDown = function () {
    g ||
      ((q.scaleX = 0.9),
      (q.scaleY = 0.9),
      n[ON_MOUSE_DOWN] && n[ON_MOUSE_DOWN].call(p[ON_MOUSE_DOWN], l));
  };
  this.setPosition = function (a, b) {
    q.x = a;
    q.y = b;
  };
  this.setX = function (a) {
    q.x = a;
  };
  this.setY = function (a) {
    q.y = a;
  };
  this.enable = function () {
    g = !1;
    q.filters = [];
    q.cache(0, 0, h, f);
  };
  this.disable = function () {
    g = !0;
    var a = new createjs.ColorMatrix()
      .adjustSaturation(-100)
      .adjustBrightness(40);
    q.filters = [new createjs.ColorMatrixFilter(a)];
    q.cache(0, 0, h, f);
  };
  this.getButtonImage = function () {
    return q;
  };
  this.getX = function () {
    return q.x;
  };
  this.getY = function () {
    return q.y;
  };
  this._init(a, c, b, d);
  return this;
}
function CToggle(a, c, b, d, g) {
  var h, f, n, p, l, k;
  this._init = function (a, b, c, d) {
    f = [];
    n = [];
    var l = new createjs.SpriteSheet({
      images: [c],
      frames: {
        width: c.width / 2,
        height: c.height,
        regX: c.width / 2 / 2,
        regY: c.height / 2,
      },
      animations: { state_true: [0], state_false: [1] },
    });
    h = d;
    k = createSprite(
      l,
      "state_" + h,
      c.width / 2 / 2,
      c.height / 2,
      c.width / 2,
      c.height
    );
    k.x = a;
    k.y = b;
    k.stop();
    k.cursor = "pointer";
    g.addChild(k);
    this._initListener();
  };
  this.unload = function () {
    k.off("mousedown", p);
    k.off("pressup", l);
    g.removeChild(k);
  };
  this._initListener = function () {
    p = k.on("mousedown", this.buttonDown);
    l = k.on("pressup", this.buttonRelease);
  };
  this.addEventListener = function (a, b, c) {
    f[a] = b;
    n[a] = c;
  };
  this.setActive = function (a) {
    h = a;
    k.gotoAndStop("state_" + h);
  };
  this.buttonRelease = function () {
    k.scaleX = 1;
    k.scaleY = 1;
    playSound("click", 1, !1);
    h = !h;
    k.gotoAndStop("state_" + h);
    f[ON_MOUSE_UP] && f[ON_MOUSE_UP].call(n[ON_MOUSE_UP], h);
  };
  this.buttonDown = function () {
    k.scaleX = 0.9;
    k.scaleY = 0.9;
    f[ON_MOUSE_DOWN] && f[ON_MOUSE_DOWN].call(n[ON_MOUSE_DOWN]);
  };
  this.setPosition = function (a, b) {
    k.x = a;
    k.y = b;
  };
  this._init(a, c, b, d);
}
function CGame(a) {
  function c(a) {
    a || (a = window.event);
    switch (a.keyCode) {
      case 32:
        if (!d) f = STATE_BLOCK_FALLING;
        else if (!b && T.isVisible()) T.onButPlayAgainRelease();
        else if (!b && S.isVisible()) S.onButRestartRelease();
    }
    a.preventDefault();
    return !1;
  }
  var b = !1,
    d,
    g,
    h,
    f,
    n,
    p,
    l,
    k,
    y,
    q,
    m,
    A,
    v,
    E,
    F,
    x,
    H,
    B,
    z,
    Q,
    w,
    u,
    O = null,
    P,
    R,
    T,
    S,
    M,
    G,
    J,
    K,
    I,
    e;
  this._init = function (a) {
    g = 1;
    E = k = 0;
    h = NUM_LIVES;
    new CGameSettings(a);
    F = s_aHookSpeed[g - 1];
    G = new createjs.Container();
    G.y = CANVAS_HEIGHT - BG_HEIGHT;
    s_oStage.addChild(G);
    a = s_oSpriteLibrary.getSprite("crane");
    P = createBitmap(a);
    P.x = CANVAS_WIDTH - a.width;
    P.y = EDGEBOARD_Y + 60;
    s_oStage.addChild(P);
    R = new CHook();
    K = new createjs.Container();
    s_oStage.addChild(K);
    J = new createjs.Container();
    s_oStage.addChild(J);
    u = new CGfxButton(
      CANVAS_WIDTH / 2,
      CANVAS_HEIGHT / 2,
      s_oSpriteLibrary.getSprite("hit_area"),
      s_oStage
    );
    M = new CInterface();
    this._initLevel();
    this._attachNextBlock();
    a = new createjs.Graphics()
      .beginFill("#fff")
      .drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    e = new createjs.Shape(a);
    e.alpha = 0;
    s_oStage.addChild(e);
    T = new CGameOver(0, 0);
    S = new CWinPanel(0, 0);
    !1 === s_bMobile && (document.onkeydown = c);
    setVolume("soundtrack", SOUNDTRACK_VOLUME_IN_GAME);
    s_oRollingTextManager = new CRollingTextManager();
    new CHelpPanel(s_oStage);
  };
  this.unload = function () {
    M.unload();
    s_oStage.removeEventListener("mousedown", this._onMouseDown);
    !1 === s_bMobile && (document.onkeydown = null);
    s_oStage.removeAllChildren();
  };
  this.startGame = function () {
    I.alpha = 1;
    f = STATE_BLOCK_ROTATE;
    b = !0;
    $(s_oMain).trigger("start_level");
  };
  this._initLevel = function () {
    v = p = 0;
    q = FIRST_BLOCK_LANDING_Y;
    y = 1;
    n = FALL_SPEED;
    G.removeAllChildren();
    B = [];
    z = [];
    z.push(new createjs.Rectangle(0, FIRST_BLOCK_LANDING_Y, CANVAS_WIDTH, 100));
    var a = s_oSpriteLibrary.getSprite("game_bg");
    O = createBitmap(a);
    G.addChild(O);
    a = s_oSpriteLibrary.getSprite("perfect_landing");
    var b = createBitmap(a);
    b.x = CANVAS_WIDTH / 2;
    b.y = CANVAS_HEIGHT - 15;
    b.regX = a.width / 2;
    G.addChild(b);
    I = new createjs.Container();
    I.alpha = 0;
    s_oStage.addChild(I);
    var c = createBitmap(s_oSpriteLibrary.getSprite("trajectory"));
    c.x = b.x - a.width / 2;
    c.y = 0;
    I.addChild(c);
    c = createBitmap(s_oSpriteLibrary.getSprite("trajectory"));
    c.x = b.x + a.width / 2;
    c.y = 0;
    I.addChild(c);
    M.reset(s_aBlocksPerLevel[g - 1], h);
    u.addEventListener(ON_MOUSE_DOWN, this._onMouseDown, this);
    d = !1;
  };
  this._resetLevel = function () {
    for (var a = 0; a < B.length; a++) B[a].unload();
    J.removeAllChildren();
    g++;
    g > NUM_LEVELS
      ? this._win()
      : ((F = s_aHookSpeed[g - 1]),
        parseFloat(F.toFixed(2)),
        this._initLevel(),
        (P.y = EDGEBOARD_Y + 60),
        R.reset(),
        this._attachNextBlock(),
        (f = STATE_BLOCK_ROTATE));
  };
  this.stopUpdate = function () {
    d = !0;
  };
  this.startUpdate = function () {
    d = !1;
  };
  this._attachNextBlock = function () {
    p++;
    1 < p && (I.alpha = 0);
    M.refreshNumBlocks(B.length);
    if (p > s_aBlocksPerLevel[g - 1]) return 0 < h && this._levelComplete(), !1;
    A = m = 0;
    var a = R.getAttachBlockPoint(),
      b = s_aBlockSequence[g - 1][p - 1],
      c = createSprite(
        s_aBlockSpriteSheet[g - 1],
        "block_" + b,
        s_aBlockSize[g - 1][b].width / 2,
        0,
        s_aBlockSize[g - 1][b].width,
        s_aBlockSize[g - 1][b].height
      );
    w = new CBlock(
      a.x,
      a.y,
      c,
      s_aBlockSize[g - 1][b].width,
      s_aBlockSize[g - 1][b].height,
      K
    );
    B.push(w);
    return !0;
  };
  this.tweenTrajectory = function (a, b) {
    b--;
    0 < b
      ? createjs.Tween.get(I)
          .to({ alpha: a }, 200, createjs.Ease.cubicOut)
          .call(function () {
            s_oGame.tweenTrajectory(0 === a ? 1 : 0, b);
          })
      : (I.alpha = 0);
  };
  this._scrollDownCamera = function () {
    d = !0;
    for (
      var a = CANVAS_HEIGHT / 2 - 310 - w.getHeight(), b = 0;
      b < B.length;
      b++
    )
      B[b].scrollDownCamera(a);
    q = w.getY() + a;
    b = new createjs.Graphics()
      .beginFill("#76c8f7")
      .drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT / 2);
    b = new createjs.Shape(b);
    b.y = -((CANVAS_HEIGHT / 2) * y) + y;
    G.addChild(b);
    for (var c = Math.floor(3 * Math.random() + 3), e = 0; e < c; e++) {
      var k = Math.floor(Math.random() * (CANVAS_WIDTH - 100)),
        h = Math.floor(500 * Math.random() + 200),
        f = createBitmap(
          s_oSpriteLibrary.getSprite(
            "cloud_" + Math.floor(3 * Math.random() + 1)
          )
        );
      f.x = k;
      f.y = b.y + h;
      G.addChild(f);
    }
    var g = this;
    createjs.Tween.get(J).to(
      { y: J.y + a },
      TIME_GROUND_MOVE,
      createjs.Ease.cubicOut
    );
    createjs.Tween.get(G)
      .to({ y: G.y + a }, TIME_GROUND_MOVE, createjs.Ease.cubicOut)
      .call(function () {
        g._endScroll();
      });
    y++;
  };
  this._endScroll = function () {
    d = !1;
    b = !0;
    z = [];
    z.push(new createjs.Rectangle(0, FIRST_BLOCK_LANDING_Y, CANVAS_WIDTH, 100));
    for (var a = 0; a < B.length - 1; a++)
      z.push(
        new createjs.Rectangle(
          B[a].getX() - B[a].getHalfWidth(),
          B[a].getY(),
          B[a].getWidth(),
          B[a].getHeight()
        )
      );
  };
  this.tremble = function () {
    var a = s_aTrembleSequence[x];
    G.x += a.x;
    G.y += a.y;
    x++;
    x === s_aTrembleSequence.length && ((x = 0), clearInterval(H));
  };
  this._checkForBonus = function () {
    return !(2 > B.length) &&
      w.getX() > B[B.length - 2].getX() - BONUS_TOLLERANCE &&
      w.getX() < B[B.length - 2].getX() + BONUS_TOLLERANCE
      ? (this.attachBonus(), !0)
      : !1;
  };
  this.attachBonus = function () {
    var a = {
      framerate: 5,
      images: [s_oSpriteLibrary.getSprite("bonus")],
      frames: { width: 77, height: 74, regY: 37 },
      animations: { idle: [0, 1, "idle"] },
    };
    a = new createjs.SpriteSheet(a);
    a = createSprite(a, "idle", 0, 37, 77, 74);
    a.alpha = 0;
    a.x =
      w.getX() + s_aBlockSize[g - 1][s_aBlockSequence[g - 1][p - 1]].width / 2;
    a.y =
      w.getY() -
      J.y +
      s_aBlockSize[g - 1][s_aBlockSequence[g - 1][p - 1]].height / 2 +
      30;
    J.addChild(a);
    createjs.Tween.get(a).to({ alpha: 1 }, 1e3, createjs.Ease.cubicOut);
    playSound("bonus", 1, !1);
  };
  this.checkIfOtherBlocksFalling = function () {
    A++;
    if (A < m) {
      var a = B.pop();
      a.setY(z[z.length - 1].y);
      this._blockMisplaced(a);
    } else A === m && this._attachNextBlock() && (f = STATE_BLOCK_ROTATE);
  };
  this.setBlock = function (a) {
    d = a;
  };
  this.blockFall = function () {
    A === m && this._attachNextBlock() && (f = STATE_BLOCK_ROTATE);
  };
  this._blockMisplaced = function (a) {
    playSound("fall_fail", 1, !1);
    var b =
      a.getX() > z[z.length - 1].x + z[z.length - 1].width / 2
        ? -Math.abs(a.getX() - (z[z.length - 1].x + z[z.length - 1].width))
        : Math.abs(z[z.length - 1].x - a.getX());
    a.misplaced(b);
    this.loseLife();
  };
  this.loseLife = function () {
    var a = new createjs.Graphics()
        .beginFill("#f00")
        .drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT),
      b = new createjs.Shape(a);
    b.alpha = 0;
    s_oStage.addChild(b);
    createjs.Tween.get(b)
      .to({ alpha: 0.5 }, 200, createjs.Ease.cubicOut)
      .call(function () {
        createjs.Tween.get(b)
          .to({ alpha: 0 }, 200, createjs.Ease.cubicOut)
          .call(function () {
            s_oStage.removeChild(b);
          });
      });
    h--;
    0 === h && this._gameOver();
    M.refreshLives(h);
  };
  this.showAllTower = function () {
    f = STATE_SHOW_THE_TOWER;
    b = !0;
  };
  this._levelComplete = function () {
    d = !0;
    u.removeEventListener(ON_MOUSE_DOWN);
    M.refreshNumBlocks(B.length);
    M.levelComplete(g);
    playSound("end_level", 1, !1);
    $(s_oMain).trigger("save_score", k);
    $(s_oMain).trigger("end_level");
  };
  this._gameOver = function () {
    d = !0;
    b = !1;
    f = STATE_BLOCK_ROTATE;
    k > E && (E = k);
    T.show(k);
  };
  this._win = function () {
    d = !0;
    k > E && (E = k);
    S.show(k);
  };
  this._onMouseDown = function (a) {
    d || (f = STATE_BLOCK_FALLING);
  };
  this.onExit = function () {
    this.unload();
    s_oGame = null;
    s_oMain.gotoMenu();
    $(s_oMain).trigger("end_session");
    $(s_oMain).trigger("share_event", k);
  };
  this.update = function () {
    if (!1 !== b) {
      v += s_iTimeElaps;
      if (v > BIRD_OCCURRENCE) {
        v = 0;
        var a = [-1, 1];
        a = a[Math.floor(Math.random() * a.length)];
        new CBird(
          0 < a ? -100 : CANVAS_WIDTH + 100,
          Math.floor(Math.random() * (600 - G.y - (200 - G.y)) + (200 - G.y)),
          a,
          G
        );
      }
      switch (f) {
        case STATE_BLOCK_ROTATE:
          R.updateRotation(F);
          w.updateRotation(R.getAttachBlockPoint());
          break;
        case STATE_BLOCK_FALLING:
          w.updateFalling(n);
          a = w.getRectangle();
          if (!0 === checkRectIntersection(a, z[z.length - 1]))
            if (
              w.getX() > z[z.length - 1].x &&
              w.getX() < z[z.length - 1].x + z[z.length - 1].width
            ) {
              Q = K.getBounds();
              var c = Q.x + Math.round(Q.width / 2);
              a = w.getRectangle();
              if (
                1 < B.length &&
                !1 ===
                  pointInRect(
                    c,
                    w.getY(),
                    a.x,
                    a.y,
                    a.x + a.width,
                    a.y + a.height
                  )
              ) {
                m = 2;
                a = B.pop();
                this._blockMisplaced(w);
                z.splice(z.length - 1, 1);
                q += a.getHeight();
                f = STATE_BLOCK_MISPLACED;
                return;
              }
              w.setY(q - w.getHeight());
              a = (
                Math.abs(CANVAS_WIDTH / 2 - w.getX()) /
                (CANVAS_WIDTH / 2)
              ).toFixed(2);
              l = (BEST_MULTIPLIER * (1 - a)).toFixed(2);
              M.showMultiplier(l);
              a = Math.round(
                MAX_SCORE_PER_BLOCK - Math.abs(CANVAS_WIDTH / 2 - w.getX()) * l
              );
              this._checkForBonus() && (a *= MULTIPLIER_BONUS_POINT);
              M.refreshScore(Math.round(a));
              k += Math.round(a);
              w.attachScore(a, g);
              if (q < Y_OFFSET_CAMERA && p < s_aBlocksPerLevel[g - 1])
                this._scrollDownCamera();
              else {
                void 0 !== s_aBlockSequence[g - 1][p] && (q = w.getY());
                x = 0;
                var h = this;
                H = setInterval(function () {
                  h.tremble();
                }, 20);
              }
              if (p === s_aBlocksPerLevel[g - 1]) {
                this._levelComplete();
                f = STATE_HOOK_ROTATE;
                return;
              }
              z.push(
                new createjs.Rectangle(
                  w.getX() - w.getHalfWidth(),
                  w.getY(),
                  w.getWidth(),
                  w.getHeight()
                )
              );
              this._attachNextBlock();
              playSound("fall_ok", 1, !1);
              f = STATE_BLOCK_ROTATE;
            } else
              (d = !0),
                (m = 1),
                B.pop(),
                w.setY(z[z.length - 1].y),
                this._blockMisplaced(w),
                (f = STATE_BLOCK_MISPLACED);
          else
            w.getYBase() > CANVAS_HEIGHT &&
              (this.loseLife(),
              (A = m = 1),
              B.pop(),
              w.unload(),
              this.blockFall(),
              (f = STATE_BLOCK_ROTATE));
          break;
        case STATE_SHOW_THE_TOWER:
          if (G.y > CANVAS_HEIGHT - BG_HEIGHT) {
            G.y -= SPEED_TOWER_SHOWING;
            J.y -= SPEED_TOWER_SHOWING;
            for (a = 0; a < B.length; a++) B[a].decreaseY(SPEED_TOWER_SHOWING);
            P.y -= SPEED_TOWER_SHOWING;
            R.decreseY(SPEED_TOWER_SHOWING);
          } else
            (f = -1),
              (h = this),
              createjs.Tween.get(e)
                .to({ alpha: 1 }, 1e3, createjs.Ease.cubicOut)
                .call(function () {
                  h._resetLevel();
                  $(s_oMain).trigger("show_interlevel_ad");
                  createjs.Tween.get(e).to(
                    { alpha: 0 },
                    1e3,
                    createjs.Ease.cubicOut
                  );
                });
      }
      s_oRollingTextManager.update();
    }
  };
  s_oGame = this;
  START_HOOK_ROT_SPEED = a.start_hook_rot_speed;
  HOOK_ROT_INCREASE_FACTOR = a.hook_rot_increase;
  HOOK_MAX_ROT = a.hook_max_rot;
  NUM_LIVES = a.num_lives;
  BEST_MULTIPLIER = a.best_mult;
  MULTIPLIER_BONUS_POINT = a.bonus_mult;
  FALL_SPEED = a.block_fall_speed;
  NUM_LEVELS = a.levels.length;
  this._init(a.levels);
}
var s_oGame = null;
function CInterface() {
  var a,
    c,
    b,
    d,
    g,
    h,
    f,
    n,
    p,
    l,
    k,
    y,
    q,
    m,
    A,
    v,
    E,
    F,
    x,
    H,
    B,
    z = null,
    Q = null;
  this._init = function () {
    n = f = 10;
    x = new createjs.Container();
    x.x = f;
    x.y = n;
    s_oStage.addChild(x);
    var w = createBitmap(s_oSpriteLibrary.getSprite("information_panel"));
    x.addChild(w);
    m = new createjs.Text("0", "50px " + FONT_GAME, "#403e39");
    m.x = 80;
    m.y = 50;
    m.outline = 4;
    m.textAlign = "left";
    m.textBaseline = "alphabetic";
    x.addChild(m);
    A = new createjs.Text("0", "50px " + FONT_GAME, "#ffff21");
    A.x = 80;
    A.y = 50;
    A.textAlign = "left";
    A.textBaseline = "alphabetic";
    x.addChild(A);
    y = new createjs.Text("", "50px " + FONT_GAME, "#403e39");
    y.x = 80;
    y.y = 110;
    y.outline = 4;
    y.textAlign = "left";
    y.textBaseline = "alphabetic";
    x.addChild(y);
    q = new createjs.Text("", "50px " + FONT_GAME, "#ffff21");
    q.x = 80;
    q.y = 110;
    q.textAlign = "left";
    q.textBaseline = "alphabetic";
    x.addChild(q);
    w = s_oSpriteLibrary.getSprite("floor_icon");
    g = CANVAS_WIDTH - w.width - 20;
    h = CANVAS_HEIGHT - EDGEBOARD_Y;
    H = new createjs.Container();
    H.x = g;
    H.y = h;
    s_oStage.addChild(H);
    var u = createBitmap(w);
    H.addChild(u);
    v = new createjs.Text(0, "60px " + FONT_GAME, "#403e39");
    v.x = w.width / 2 + 3;
    v.y = 30;
    v.outline = 4;
    v.textAlign = "center";
    v.textBaseline = "middle";
    H.addChild(v);
    k = new createjs.Text(0, "60px " + FONT_GAME, "#ffff21");
    k.x = w.width / 2 + 3;
    k.y = 30;
    k.textAlign = "center";
    k.textBaseline = "middle";
    H.addChild(k);
    w = s_oSpriteLibrary.getSprite("exit_button");
    a = CANVAS_WIDTH - w.height / 2 - 10;
    c = w.height / 2 + 10;
    E = new CGfxButton(a, c, w, s_oStage);
    E.addEventListener(ON_MOUSE_UP, this._onButExitRelease, this);
    !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile
      ? ((w = s_oSpriteLibrary.getSprite("audio_icon")),
        (p = a - w.width / 2 - 10),
        (l = w.height / 2 + 10),
        (F = new CToggle(p, l, w, s_bAudioActive, s_oStage)),
        F.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this),
        (w = s_oSpriteLibrary.getSprite("but_fullscreen")),
        (b = p - w.width / 2 - 10),
        (d = l))
      : ((w = s_oSpriteLibrary.getSprite("but_fullscreen")),
        (b = a - w.width / 2 - 10),
        (d = w.height / 2 + 10));
    u = window.document;
    var O = u.documentElement;
    z =
      O.requestFullscreen ||
      O.mozRequestFullScreen ||
      O.webkitRequestFullScreen ||
      O.msRequestFullscreen;
    Q =
      u.exitFullscreen ||
      u.mozCancelFullScreen ||
      u.webkitExitFullscreen ||
      u.msExitFullscreen;
    !1 === ENABLE_FULLSCREEN && (z = !1);
    z &&
      screenfull.isEnabled &&
      ((B = new CToggle(b, d, w, s_bFullscreen, s_oStage)),
      B.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
    this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
  };
  this.unload = function () {
    E.unload();
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) F.unload(), (F = null);
    z && screenfull.isEnabled && B.unload();
    s_oInterface = null;
  };
  this.reset = function (a, b) {
    k.text = a;
    v.text = a;
    q.text = "x" + b;
    y.text = "x" + b;
  };
  this.refreshButtonPos = function (k, m) {
    E.setPosition(a - k, m + c);
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) ||
      F.setPosition(p - k, m + l);
    z && screenfull.isEnabled && B.setPosition(b - s_iOffsetX, d + s_iOffsetY);
    x.x = f + k;
    x.y = n + m;
    H.x = g - k;
    H.y = h - m;
  };
  this.refreshNumBlocks = function (a) {
    k.text = a;
    v.text = a;
  };
  this.refreshScore = function (a) {
    s_oRollingTextManager.add(A, m, a, 1e3, EASE_LINEAR, null);
  };
  this.refreshBestScore = function (a) {};
  this.refreshLives = function (a) {
    q.text = "x" + a;
    y.text = "x" + a;
  };
  this.showMultiplier = function (a) {
    if (1.9 < a) var b = TEXT_PERFECT;
    else
      1.8 < a && 1.9 >= a
        ? (b = TEXT_GREAT)
        : 1.5 < a && 1.8 >= a
        ? (b = TEXT_GOOD)
        : ((b = TEXT_BAD), s_oGame.tweenTrajectory(1, 10));
    var c = new createjs.Text(b + "\nX " + a, "80px " + FONT_GAME, "#403e39");
    c.lineHeight = 90;
    c.x = CANVAS_WIDTH / 2;
    c.y = -100;
    c.textAlign = "center";
    c.textBaseline = "alphabetic";
    c.outline = 8;
    s_oStage.addChild(c);
    var d = new createjs.Text(b + "\nX " + a, "80px " + FONT_GAME, "#ffff21");
    d.lineHeight = 90;
    d.x = CANVAS_WIDTH / 2;
    d.y = -100;
    d.textAlign = "center";
    d.textBaseline = "alphabetic";
    s_oStage.addChild(d);
    createjs.Tween.get(d)
      .to({ y: 250 }, 500, createjs.Ease.elasticOut)
      .call(function () {
        createjs.Tween.get(d)
          .wait(600)
          .to({ y: -100 }, 200, createjs.Ease.cubicOut)
          .call(function () {
            s_oStage.removeChild(d);
          });
      });
    createjs.Tween.get(c)
      .to({ y: 250 }, 500, createjs.Ease.elasticOut)
      .call(function () {
        createjs.Tween.get(c)
          .wait(600)
          .to({ y: -100 }, 200, createjs.Ease.cubicOut)
          .call(function () {
            s_oStage.removeChild(c);
          });
      });
  };
  this.levelComplete = function (a) {
    var b = new createjs.Text(
      TEXT_CONGRATS + "\n" + TEXT_LEVEL + " " + a + " " + TEXT_COMPLETED + "!",
      "100px " + FONT_GAME,
      "#403e39"
    );
    b.textAlign = "center";
    b.lineWidth = 550;
    b.outline = 8;
    b.scaleX = b.scaleY = 3;
    b.x = CANVAS_WIDTH / 2;
    b.y = CANVAS_HEIGHT / 2;
    s_oStage.addChild(b);
    var c = new createjs.Text(
      TEXT_CONGRATS + "\n" + TEXT_LEVEL + " " + a + " " + TEXT_COMPLETED + "!",
      "100px " + FONT_GAME,
      "#fdba25"
    );
    c.textAlign = "center";
    c.lineWidth = 550;
    c.scaleX = c.scaleY = 3;
    c.x = CANVAS_WIDTH / 2;
    c.y = CANVAS_HEIGHT / 2;
    s_oStage.addChild(c);
    var d = this;
    createjs.Tween.get(c)
      .to({ scaleX: 1, scaleY: 1 }, 1500, createjs.Ease.elasticOut)
      .call(function () {
        d.fadeOutLevelCompleteText(c, b);
      });
    createjs.Tween.get(b).to(
      { scaleX: 1, scaleY: 1 },
      1500,
      createjs.Ease.elasticOut
    );
  };
  this.showLevelCompleteText = function (a) {
    var b = new createjs.Text(
      "COMPLIMENTI, HAI SUPERATO IL " + a + "\u00b0 LIVELLO!",
      "70px " + FONT_GAME,
      "#C5281C"
    );
    b.textAlign = "center";
    b.lineWidth = 550;
    b.outline = 5;
    b.x = CANVAS_WIDTH / 2;
    b.y = -50;
    s_oStage.addChild(b);
    var c = new createjs.Text(
      "COMPLIMENTI, HAI SUPERATO IL " + a + "\u00b0 LIVELLO!",
      "70px " + FONT_GAME,
      "#ffffff"
    );
    c.textAlign = "center";
    c.lineWidth = 550;
    c.x = CANVAS_WIDTH / 2;
    c.y = -50;
    s_oStage.addChild(c);
    var d = this;
    createjs.Tween.get(c)
      .to({ y: CANVAS_HEIGHT / 2 - 150 }, 1500, createjs.Ease.bounceOut)
      .call(function () {
        d.fadeOutLevelCompleteText(c, b);
      });
    createjs.Tween.get(b).to(
      { y: CANVAS_HEIGHT / 2 - 150 },
      1500,
      createjs.Ease.bounceOut
    );
  };
  this.fadeOutLevelCompleteText = function (a, b) {
    createjs.Tween.get(a)
      .to({ alpha: 0 }, 1e3, createjs.Ease.quadIn)
      .call(function () {
        s_oStage.removeChild(a);
        s_oGame.showAllTower();
      });
    createjs.Tween.get(b)
      .to({ alpha: 0 }, 1e3, createjs.Ease.quadIn)
      .call(function () {
        s_oStage.removeChild(b);
      });
  };
  this._onButExitRelease = function () {
    s_oGame.onExit();
  };
  this._onAudioToggle = function () {
    Howler.mute(s_bAudioActive);
    s_bAudioActive = !s_bAudioActive;
  };
  this.resetFullscreenBut = function () {
    z && screenfull.isEnabled && B.setActive(s_bFullscreen);
  };
  this._onFullscreenRelease = function () {
    s_bFullscreen
      ? Q.call(window.document)
      : z.call(window.document.documentElement);
    sizeHandler();
  };
  s_oInterface = this;
  this._init();
  return this;
}
var s_oInterface = null;
function CGameSettings(a) {
  this._init = function (a) {
    this._initBlockSpriteSheet(a.length);
    this._initLevelInfo(a);
    s_aTrembleSequence = [
      { x: 10, y: 0 },
      { x: -20, y: 0 },
      { x: 10, y: -10 },
      { x: 0, y: 20 },
      { x: 10, y: -10 },
      { x: -10, y: 0 },
    ];
  };
  this._initBlockSpriteSheet = function (a) {
    s_aBlockSize = [];
    for (var b = 0; b < a; b++) {
      s_aBlockSize[b] = [];
      for (var c = 0; 8 > c; c++)
        s_aBlockSize[b][c] = { width: 264, height: 120 };
    }
    s_aBlockSpriteSheet = [];
    b = 1;
    for (c = 0; c < a; c++) {
      4 === b && (b = 1);
      var g = {
        images: [s_oSpriteLibrary.getSprite("block" + b)],
        frames: { width: 264, height: 120, regX: 132, regY: 0 },
        animations: {
          block_0: [0],
          block_1: [1],
          block_2: [2],
          block_3: [3],
          block_4: [4],
          block_5: [5],
          block_6: [6],
          block_7: [7],
        },
      };
      s_aBlockSpriteSheet[c] = new createjs.SpriteSheet(g);
      b++;
    }
  };
  this._initLevelInfo = function (a) {
    s_aHookSpeed = [];
    s_aHookSpeed[0] = START_HOOK_ROT_SPEED;
    for (var b = 1; b < NUM_LEVELS; b++)
      s_aHookSpeed[b] = parseFloat(
        (s_aHookSpeed[b - 1] + HOOK_ROT_INCREASE_FACTOR).toFixed(2)
      );
    s_aBlockSequence = [];
    for (b = 0; b < a.length; b++) {
      s_aBlockSequence[b] = [];
      for (var c = 0; c < a[b]; c++)
        s_aBlockSequence[b][c] =
          0 === c ? 0 : c === a[b] - 1 ? 7 : Math.floor(5 * Math.random() + 1);
    }
    s_aBlocksPerLevel = [];
    for (b = 0; b < a.length; b++)
      s_aBlocksPerLevel[b] = s_aBlockSequence[b].length;
  };
  this._init(a);
}
var s_aBlockSpriteSheet,
  s_aBlocksPerLevel,
  s_aBlockSize,
  s_aBlockSpeed,
  s_aHookSpeed,
  s_aTrembleSequence;
function CGameOver(a, c) {
  var b, d, g, h, f, n;
  this._init = function (a, c) {
    n = new createjs.Container();
    n.alpha = 0;
    n.x = a;
    n.y = c;
    s_oStage.addChild(n);
    var k = s_oSpriteLibrary.getSprite("msg_box");
    k = createBitmap(k);
    n.addChild(k);
    k = 500;
    var l = 90,
      p = CANVAS_WIDTH / 2,
      m = 820;
    b = new CTLText(
      n,
      p - k / 2,
      m - l / 2,
      k,
      l,
      80,
      "center",
      "#403e39",
      FONT_GAME,
      1,
      2,
      2,
      TEXT_GAMEOVER,
      !0,
      !0,
      !0,
      !1
    );
    b.setOutline(4);
    new CTLText(
      n,
      p - k / 2,
      m - l / 2,
      k,
      l,
      80,
      "center",
      "#ffff21",
      FONT_GAME,
      1,
      2,
      2,
      TEXT_GAMEOVER,
      !0,
      !0,
      !0,
      !1
    );
    k = 500;
    l = 250;
    p = CANVAS_WIDTH / 2;
    m = 1020;
    g = new CTLText(
      n,
      p - k / 2,
      m - l / 2,
      k,
      l,
      100,
      "center",
      "#403e39",
      FONT_GAME,
      1,
      2,
      2,
      TEXT_SCORE + ":\n0",
      !0,
      !0,
      !0,
      !1
    );
    g.setOutline(4);
    d = new CTLText(
      n,
      p - k / 2,
      m - l / 2,
      k,
      l,
      100,
      "center",
      "#ffff21",
      FONT_GAME,
      1,
      2,
      2,
      TEXT_SCORE + ":\n0",
      !0,
      !0,
      !0,
      !1
    );
    h = new CGfxButton(
      860,
      1340,
      s_oSpriteLibrary.getSprite("but_play_again"),
      n
    );
    h.addEventListener(ON_MOUSE_UP, this.onButPlayAgainRelease, this);
    f = new CGfxButton(
      540,
      1340,
      s_oSpriteLibrary.getSprite("but_back_home"),
      n
    );
    f.addEventListener(ON_MOUSE_UP, this._onButBackHomeRelease, this);
  };
  this.show = function (a) {
    d.refreshText(TEXT_SCORE + ":\n" + a);
    g.refreshText(TEXT_SCORE + ":\n" + a);
    createjs.Tween.get(n).to({ alpha: 1 }, 500);
    setVolume("soundtrack", 1);
    $(s_oMain).trigger("save_score", a);
  };
  this._onButBackHomeRelease = function () {
    s_oGame.onExit();
  };
  this.onButPlayAgainRelease = function () {
    n.alpha = 0;
    s_oGame.unload();
    s_oMain.gotoGame();
  };
  this.isVisible = function () {
    return 0 === n.alpha ? !1 : !0;
  };
  this._init(a, c);
}
function CWinPanel(a, c) {
  var b, d, g, h, f, n;
  this._init = function (a, c) {
    n = new createjs.Container();
    n.alpha = 0;
    n.x = a;
    n.y = c;
    s_oStage.addChild(n);
    var k = s_oSpriteLibrary.getSprite("msg_box");
    k = createBitmap(k);
    n.addChild(k);
    k = 500;
    var l = 90,
      p = CANVAS_WIDTH / 2,
      m = 820;
    b = new CTLText(
      n,
      p - k / 2,
      m - l / 2,
      k,
      l,
      80,
      "center",
      "#403e39",
      FONT_GAME,
      1,
      2,
      2,
      TEXT_WIN,
      !0,
      !0,
      !0,
      !1
    );
    b.setOutline(4);
    new CTLText(
      n,
      p - k / 2,
      m - l / 2,
      k,
      l,
      80,
      "center",
      "#ffff21",
      FONT_GAME,
      1,
      2,
      2,
      TEXT_WIN,
      !0,
      !0,
      !0,
      !1
    );
    k = 500;
    l = 250;
    p = CANVAS_WIDTH / 2;
    m = 1020;
    d = new CTLText(
      n,
      p - k / 2,
      m - l / 2,
      k,
      l,
      100,
      "center",
      "#403e39",
      FONT_GAME,
      1,
      2,
      2,
      TEXT_SCORE + ":\n0",
      !0,
      !0,
      !0,
      !1
    );
    d.setOutline(4);
    g = new CTLText(
      n,
      p - k / 2,
      m - l / 2,
      k,
      l,
      100,
      "center",
      "#ffff21",
      FONT_GAME,
      1,
      2,
      2,
      TEXT_SCORE + ":\n0",
      !0,
      !0,
      !0,
      !1
    );
    h = new CGfxButton(
      860,
      1340,
      s_oSpriteLibrary.getSprite("but_play_again"),
      n
    );
    h.addEventListener(ON_MOUSE_UP, this.onButPlayAgainRelease, this);
    f = new CGfxButton(
      540,
      1340,
      s_oSpriteLibrary.getSprite("but_back_home"),
      n
    );
    f.addEventListener(ON_MOUSE_UP, this._onButBackHomeRelease, this);
  };
  this.unload = function () {};
  this.show = function (a) {
    g.refreshText(TEXT_SCORE + ":\n" + a);
    d.refreshText(TEXT_SCORE + ":\n" + a);
    createjs.Tween.get(n).to({ alpha: 1 }, 500);
    setVolume("soundtrack", 1);
    $(s_oMain).trigger("save_score", a);
  };
  this.hide = function () {
    n.visible = !1;
  };
  this._onButBackHomeRelease = function () {
    s_oGame.onExit();
  };
  this.onButPlayAgainRelease = function () {
    n.alpha = 0;
    s_oGame.unload();
    s_oMain.gotoGame();
  };
  this.isVisible = function () {
    return 0 === n.alpha ? !1 : !0;
  };
  this._init(a, c);
}
function CHook() {
  var a,
    c,
    b,
    d = 0,
    g = { x: 0, y: 1 },
    h,
    f,
    n,
    p,
    l;
  this._init = function () {
    a = 0;
    f = new createjs.Graphics();
    f.setStrokeStyle(HOOK_THICKNESS);
    f.beginStroke("#000");
    f.moveTo(HOOK_START_X - 10, HOOK_START_Y);
    f.lineTo(HOOK_START_X - 10, HOOK_START_Y + LINE_LENGTH);
    h = new createjs.Shape(f);
    s_oStage.addChild(h);
    p = new createjs.Graphics();
    p.setStrokeStyle(HOOK_THICKNESS);
    p.beginStroke("#000");
    p.moveTo(HOOK_START_X + 10, HOOK_START_Y);
    p.lineTo(HOOK_START_X + 10, HOOK_START_Y + LINE_LENGTH);
    n = new createjs.Shape(p);
    s_oStage.addChild(n);
    var b = s_oSpriteLibrary.getSprite("hook");
    l = createBitmap(b);
    l.regX = b.width / 2;
    s_oStage.addChild(l);
    this._drawLine();
  };
  this.reset = function () {
    d = 0;
    c = HOOK_START_X;
    b = HOOK_START_Y + LINE_LENGTH;
    h.y = n.y = 0;
  };
  this.decreseY = function (a) {
    h.y -= a;
    n.y -= a;
    l.y -= a;
  };
  this.normalize = function (a) {
    var b = Math.sqrt(a.x * a.x + a.y * a.y);
    0 < b && ((a.x /= b), (a.y /= b));
  };
  this.rotateVector2D = function (a, b) {
    var c = b.x * -Math.sin(a) + b.y * Math.cos(a);
    b.x = b.x * Math.cos(a) + b.y * Math.sin(a);
    b.y = c;
  };
  this.toDegree = function (a) {
    return (180 / Math.PI) * a;
  };
  this._drawLine = function () {
    var h = Math.sin(a);
    g.x = 0;
    g.y = 1;
    this.rotateVector2D((Math.PI / 2) * HOOK_MAX_ROT * h, g);
    this.normalize(g);
    h = g.y * (LINE_LENGTH + d);
    c = HOOK_START_X + g.x * (LINE_LENGTH + d);
    b = HOOK_START_Y + h;
    f.clear();
    f.setStrokeStyle(HOOK_THICKNESS);
    f.beginStroke("#000");
    f.moveTo(HOOK_START_X - 8, HOOK_START_Y);
    f.lineTo(c - 8, b);
    p.clear();
    p.setStrokeStyle(HOOK_THICKNESS);
    p.beginStroke("#000");
    p.moveTo(HOOK_START_X + 8, HOOK_START_Y);
    p.lineTo(c + 8, b);
    l.x = c;
    l.y = b - 10;
  };
  this.getAttachBlockPoint = function () {
    return { x: l.x, y: l.y + 30 };
  };
  this.updateRotation = function (b) {
    a += b;
    this._drawLine();
  };
  this._init();
}
function CBlock(a, c, b, d, g, h) {
  var f, n, p, l, k, y, q, m, A;
  this._init = function (a, b, c, d, h, g) {
    n = 0;
    p = Math.floor(d / 2);
    l = d;
    k = h;
    y = new CVector2();
    y.set(0, 1);
    A = g;
    q = c;
    m = new createjs.Container();
    m.x = a;
    m.y = b;
    A.addChild(m);
    m.addChild(c);
    f = !0;
  };
  this.unload = function () {
    A.removeChild(m);
  };
  this.setY = function (a) {
    m.y = a;
  };
  this.decreaseY = function (a) {
    m.y -= a;
  };
  this.scrollDownCamera = function (a) {
    a = m.y + a;
    createjs.Tween.get(m).to(
      { y: a },
      TIME_GROUND_MOVE,
      createjs.Ease.cubicOut
    );
  };
  this.misplaced = function (a) {
    m.x += a;
    m.regX += a;
    m.regY = k;
    var b = 1;
    0 < a && (b = -1);
    f = !1;
    var c = this;
    createjs.Tween.get(m)
      .to({ rotation: 60 * b }, 510)
      .call(function () {
        s_oGame.checkIfOtherBlocksFalling();
      });
    createjs.Tween.get(m)
      .to({ y: CANVAS_HEIGHT + 200 }, 1e3, createjs.Ease.backInOut)
      .call(function () {
        c.unload();
        s_oGame.setBlock(!1);
      });
  };
  this.attachScore = function (a, b) {
    if (1 === b) {
      var c = "#fffc6b";
      var d = "#0a2f77";
    } else
      2 === b
        ? ((c = "#56cc56"), (d = "#fff"))
        : ((c = "#fff"), (d = "#0a2f77"));
    var h = new createjs.Text("+" + a, "50px " + FONT_GAME, d);
    h.alpha = 0;
    h.outline = 6;
    h.x = 0;
    h.y = 0;
    h.textAlign = "center";
    h.textBaseline = "alphabetic";
    m.addChild(h);
    var f = new createjs.Text("+" + a, "50px " + FONT_GAME, c);
    f.alpha = 0;
    f.x = 0;
    f.y = 0;
    f.textAlign = "center";
    f.textBaseline = "alphabetic";
    m.addChild(f);
    createjs.Tween.get(h).to({ alpha: 1 }, 500);
    createjs.Tween.get(h)
      .to({ y: -30 }, 1500, createjs.Ease.cubicOut)
      .call(function () {
        createjs.Tween.get(h)
          .wait(300)
          .to({ alpha: 0 }, 300)
          .call(function () {
            m.removeChild(h);
          });
      });
    createjs.Tween.get(f).to({ alpha: 1 }, 500);
    createjs.Tween.get(f)
      .to({ y: -30 }, 1500, createjs.Ease.cubicOut)
      .call(function () {
        createjs.Tween.get(f)
          .wait(300)
          .to({ alpha: 0 }, 300)
          .call(function () {
            m.removeChild(f);
          });
      });
  };
  this.getYBase = function () {
    return m.y + k;
  };
  this.getX = function () {
    return m.x;
  };
  this.getY = function () {
    return m.y;
  };
  this.getWidth = function () {
    return l;
  };
  this.getHalfWidth = function () {
    return p;
  };
  this.getHeight = function () {
    return k;
  };
  this.getRectangle = function () {
    return new createjs.Rectangle(m.x - p + 20, m.y, l - 20, k);
  };
  this.getSprite = function () {
    return q;
  };
  this.updateRotation = function (a) {
    m.x = a.x;
    m.y = a.y;
  };
  this.updateFalling = function (a) {
    !1 !== f && ((n += a), (m.x += n * y.getX()), (m.y += n * y.getY()));
  };
  this._init(a, c, b, d, g, h);
}
function CVector2() {
  var a, c;
  this._init = function () {
    c = a = 0;
  };
  this.add = function (b) {
    a += b.getX();
    c += b.getY();
  };
  this.scalarDivision = function (b) {
    a /= b;
    c /= b;
  };
  this.subtract = function (b) {
    a -= b.getX();
    c -= b.getY();
  };
  this.scalarProduct = function (b) {
    a *= b;
    c *= b;
  };
  this.invert = function () {
    a *= -1;
    c *= -1;
  };
  this.dotProduct = function (b) {
    return a * b.getX() + c * b.getY();
  };
  this.set = function (b, d) {
    a = b;
    c = d;
  };
  this.setV = function (b) {
    a = b.getX();
    c = b.getY();
  };
  this.setY = function (a) {
    c = a;
  };
  this.length = function () {
    return Math.sqrt(a * a + c * c);
  };
  this.length2 = function () {
    return a * a + c * c;
  };
  this.normalize = function () {
    var b = this.length();
    0 < b && ((a /= b), (c /= b));
  };
  this.getNormalize = function (b) {
    this.length();
    b.set(a, c);
    b.normalize();
  };
  this.rot90CCW = function () {
    var b = a;
    a = -c;
    c = b;
  };
  this.rot90CW = function () {
    var b = a;
    a = c;
    c = -b;
  };
  this.getRotCCW = function (b) {
    b.set(a, c);
    b.rot90CCW();
  };
  this.getRotCW = function (b) {
    b.set(a, c);
    b.rot90CW();
  };
  this.ceil = function () {
    a = Math.ceil(a);
    c = Math.ceil(c);
  };
  this.round = function () {
    a = Math.round(a);
    c = Math.round(c);
  };
  this.getX = function () {
    return a;
  };
  this.getY = function () {
    return c;
  };
  this._init();
}
function CMenu() {
  var a, c, b, d, g, h, f, n;
  function p(a) {
    a || (a = window.event);
    switch (a.keyCode) {
      case 32:
        s_oMenu._onButPlayRelease();
    }
    a.preventDefault();
    return !1;
  }
  var l,
    k,
    y,
    q,
    m,
    A,
    v,
    E = null,
    F = null;
  this._init = function () {
    l = new createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
    s_oStage.addChild(l);
    var x = s_oSpriteLibrary.getSprite("logo");
    g = CANVAS_WIDTH / 2;
    h = 120;
    y = new createBitmap(x);
    y.x = g;
    y.y = h;
    y.regX = x.width / 2;
    s_oStage.addChild(y);
    x = s_oSpriteLibrary.getSprite("but_play");
    k = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 - 90, x, s_oStage);
    k.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile)
      (x = s_oSpriteLibrary.getSprite("audio_icon")),
        (f = CANVAS_WIDTH - x.height / 2 - 10),
        (n = x.height / 2 + 10),
        (m = new CToggle(f, n, x, s_bAudioActive, s_oStage)),
        m.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this),
        setVolume("soundtrack", 1);
    x = s_oSpriteLibrary.getSprite("but_info");
    b = x.height / 2 + 10;
    d = x.height / 2 + 10;
    A = new CGfxButton(b, d, x, s_oStage);
    A.addEventListener(ON_MOUSE_UP, this._onButInfoRelease, this);
    x = window.document;
    var H = x.documentElement;
    E =
      H.requestFullscreen ||
      H.mozRequestFullScreen ||
      H.webkitRequestFullScreen ||
      H.msRequestFullscreen;
    F =
      x.exitFullscreen ||
      x.mozCancelFullScreen ||
      x.webkitExitFullscreen ||
      x.msExitFullscreen;
    !1 === ENABLE_FULLSCREEN && (E = !1);
    E &&
      screenfull.isEnabled &&
      ((x = s_oSpriteLibrary.getSprite("but_fullscreen")),
      (a = b + x.width / 2 + 10),
      (c = d),
      (v = new CToggle(a, c, x, s_bFullscreen, s_oStage)),
      v.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
    q = new createjs.Shape();
    q.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    s_oStage.addChild(q);
    createjs.Tween.get(q)
      .to({ alpha: 0 }, 1e3)
      .call(function () {
        q.visible = !1;
      });
    !1 === s_bMobile && (document.onkeydown = p);
    this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
  };
  this.unload = function () {
    k.unload();
    k = null;
    A.unload();
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) m.unload(), (m = null);
    E && screenfull.isEnabled && v.unload();
    s_oStage.removeAllChildren();
    s_oMenu = null;
  };
  this.refreshButtonPos = function (g, k) {
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) ||
      m.setPosition(f - g, k + n);
    E && screenfull.isEnabled && v.setPosition(a + s_iOffsetX, c + s_iOffsetY);
    A.setPosition(b + g, d + k);
    y.y = h + k;
  };
  this._onAudioToggle = function () {
    Howler.mute(s_bAudioActive);
    s_bAudioActive = !s_bAudioActive;
  };
  this._onButInfoRelease = function () {
    new CCreditsPanel();
  };
  this.resetFullscreenBut = function () {
    E && screenfull.isEnabled && v.setActive(s_bFullscreen);
  };
  this._onFullscreenRelease = function () {
    s_bFullscreen
      ? F.call(window.document)
      : E.call(window.document.documentElement);
    sizeHandler();
  };
  this._onButPlayRelease = function () {
    s_oMenu.unload();
    s_oMain.gotoGame();
    $(s_oMain).trigger("start_session");
  };
  s_oMenu = this;
  this._init();
}
var s_oMenu = null;
function CBird(a, c, b, d) {
  var g, h;
  this._init = function (a, b, c) {
    g = c;
    c = {
      framerate: 10,
      images: [s_oSpriteLibrary.getSprite("bird")],
      frames: { width: 30, height: 26 },
      animations: { fly: [0, 3, "fly"] },
    };
    c = new createjs.SpriteSheet(c);
    h = createSprite(c, "fly", 0, 0, 30, 26);
    h.x = a;
    h.y = b;
    h.scaleX = g;
    f.addChild(h);
    var d = this;
    createjs.Tween.get(h)
      .to({ x: a + g * (CANVAS_WIDTH + 100) }, BIRD_SPEED)
      .call(function () {
        d.unload();
      });
  };
  this.unload = function () {
    f.removeChild(h);
  };
  var f = d;
  this._init(a, c, b);
}
function CHelpPanel(a) {
  var c, b;
  this._init = function () {
    b = new createjs.Container();
    d.addChild(b);
    var a = new createjs.Graphics()
      .beginFill("#000")
      .drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    a = new createjs.Shape(a);
    a.alpha = 0.8;
    b.addChild(a);
    a = s_oSpriteLibrary.getSprite("help1");
    var f = createBitmap(a);
    f.regX = a.width / 2;
    f.x = CANVAS_WIDTH / 2;
    f.y = 520;
    b.addChild(f);
    a = s_oSpriteLibrary.getSprite("help2");
    f = createBitmap(a);
    f.regX = a.width / 2;
    f.x = CANVAS_WIDTH / 2 + 50;
    f.y = 1400;
    b.addChild(f);
    a = CANVAS_WIDTH - 400;
    f = 200;
    var g = CANVAS_WIDTH / 2,
      p = 420;
    c = new CTLText(
      b,
      g - a / 2,
      p - f / 2,
      a,
      f,
      60,
      "center",
      "#403e39",
      FONT_GAME,
      0.8,
      2,
      2,
      TEXT_HELP1,
      !0,
      !0,
      !0,
      !1
    );
    c.setOutline(4);
    new CTLText(
      b,
      g - a / 2,
      p - f / 2,
      a,
      f,
      60,
      "center",
      "#ffff21",
      FONT_GAME,
      0.8,
      2,
      2,
      TEXT_HELP1,
      !0,
      !0,
      !0,
      !1
    );
    a = CANVAS_WIDTH - 400;
    f = 200;
    g = CANVAS_WIDTH / 2;
    p = 1320;
    new CTLText(
      b,
      g - a / 2,
      p - f / 2,
      a,
      f,
      60,
      "center",
      "#403e39",
      FONT_GAME,
      0.8,
      2,
      2,
      TEXT_HELP2,
      !0,
      !0,
      !0,
      !1
    );
    c.setOutline(4);
    new CTLText(
      b,
      g - a / 2,
      p - f / 2,
      a,
      f,
      60,
      "center",
      "#ffff21",
      FONT_GAME,
      0.8,
      2,
      2,
      TEXT_HELP2,
      !0,
      !0,
      !0,
      !1
    );
    var l = this;
    b.on("pressup", function () {
      l._onExitHelp();
    });
  };
  this.unload = function () {
    d.removeChild(b);
    var a = this;
    b.off("pressup", function () {
      a._onExitHelp();
    });
  };
  this._onExitHelp = function () {
    g.unload();
    s_oGame.startGame();
  };
  var d = a;
  var g = this;
  this._init();
}
function CRollingTextController(a, c, b, d, g) {
  var h, f, n, p, l, k, y, q, m, A, v;
  this._init = function (a, b, c, d, f) {
    q = [];
    m = [];
    l = d;
    this.setUpdateInfo(c);
    y = f;
    A = a;
    v = b;
  };
  this.setUpdateInfo = function (b) {
    n = parseFloat(a.text);
    p = n + b;
    h = 0;
    f = Math.round(l / FPS);
    k = 0;
  };
  this.addEventListener = function (a, b, c) {
    q[a] = b;
    m[a] = c;
  };
  this.increaseValue = function (a) {
    k = a;
  };
  this.getTarget = function () {
    return A;
  };
  this.update = function () {
    h++;
    if (h > f)
      (h = 0),
        (A.text = p.toFixed(0)),
        null !== v && (v.text = p.toFixed(0)),
        null !== q[ON_CONTROLLER_END] &&
          q[ON_CONTROLLER_END].call(m[ON_CONTROLLER_END], this),
        0 < k
          ? this.setUpdateInfo(k)
          : q[ON_CONTROLLER_REMOVE].call(m[ON_CONTROLLER_REMOVE], this);
    else {
      switch (y) {
        case EASE_BACKIN:
          var a = s_oTweenController.easeInBack(h, 0, 1, f);
          break;
        case EASE_BACKOUT:
          a = s_oTweenController.easeOutBack(h, 0, 1, f);
          break;
        case EASE_CUBIC_IN:
          a = s_oTweenController.easeInCubic(h, 0, 1, f);
          break;
        case EASE_CUBIC_OUT:
          a = s_oTweenController.easeOutCubic(h, 0, 1, f);
          break;
        case EASE_ELASTIC_OUT:
          a = s_oTweenController.easeOutElastic(h, 0, 1, f);
          break;
        case EASE_LINEAR:
          a = s_oTweenController.easeLinear(h, 0, 1, f);
          break;
        case EASE_QUART_BACKIN:
          a = s_oTweenController.easeBackInQuart(h, 0, 1, f);
          break;
        default:
          a = s_oTweenController.easeLinear(h, 0, 1, f);
      }
      a = s_oTweenController.tweenValue(n, p, a);
      A.text = a.toFixed(0);
      null !== v && (v.text = a.toFixed(0));
    }
  };
  this._init(a, c, b, d, g);
}
function CRollingTextManager() {
  var a = [],
    c = [];
  s_oTweenController = new CTweenController();
  this.add = function (b, c, g, h, f, n, p) {
    var d = this._checkIfControllerExist(b);
    -1 === d
      ? ((b = new CRollingTextController(b, c, g, h, f)),
        b.addEventListener(ON_CONTROLLER_END, n, p),
        b.addEventListener(
          ON_CONTROLLER_REMOVE,
          this._onRemoveController,
          this
        ),
        a.push(b))
      : a[d].increaseValue(g);
  };
  this._checkIfControllerExist = function (b) {
    for (var c = 0; c < a.length; c++) if (a[c].getTarget() === b) return c;
    return -1;
  };
  this._onRemoveController = function (a) {
    c.push(a);
  };
  this.update = function () {
    for (var b = 0; b < a.length; b++) a[b].update();
    for (b = 0; b < c.length; b++)
      for (var d = 0; d < a.length; d++)
        if (c[b] === a[d]) {
          a.splice(d, 1);
          break;
        }
    c = [];
  };
}
var s_oTweenController,
  EASE_LINEAR = 0,
  EASE_CUBIC_IN = 1,
  EASE_QUART_BACKIN = 2,
  EASE_BACKIN = 3,
  EASE_CUBIC_OUT = 4,
  EASE_ELASTIC_OUT = 5,
  EASE_BACKOUT = 6;
function CTweenController() {
  this.tweenValue = function (a, c, b) {
    return a + b * (c - a);
  };
  this.easeLinear = function (a, c, b, d) {
    return (b * a) / d + c;
  };
  this.easeInCubic = function (a, c, b, d) {
    d = (a /= d) * a * a;
    return c + b * d;
  };
  this.easeBackInQuart = function (a, c, b, d) {
    d = (a /= d) * a;
    return c + b * (2 * d * d + 2 * d * a + -3 * d);
  };
  this.easeInBack = function (a, c, b, d) {
    return b * (a /= d) * a * (2.70158 * a - 1.70158) + c;
  };
  this.easeOutCubic = function (a, c, b, d) {
    return b * ((a = a / d - 1) * a * a + 1) + c;
  };
  this.easeOutElastic = function (a, c, b, d) {
    if (0 === a) return c;
    if (1 === (a /= d)) return c + b;
    var g = 0.3 * d;
    return (
      b * Math.pow(2, -10 * a) * Math.sin((2 * (a * d - g / 4) * Math.PI) / g) +
      b +
      c
    );
  };
  this.easeOutBack = function (a, c, b, d) {
    return b * ((a = a / d - 1) * a * (2.70158 * a + 1.70158) + 1) + c;
  };
}
function CCreditsPanel() {
  var a, c, b, d, g, h;
  this._init = function () {
    h = new createjs.Container();
    s_oStage.addChild(h);
    var f = s_oSpriteLibrary.getSprite("msg_box");
    g = new createjs.Shape();
    g.graphics.beginFill("#000").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    g.alpha = 0.5;
    g.on("click", this._onLogoButRelease);
    g.cursor = "pointer";
    h.addChild(g);
    c = createBitmap(f);
    c.x = CANVAS_WIDTH / 2;
    c.y = CANVAS_HEIGHT / 2;
    c.regX = 0.5 * f.width;
    c.regY = 0.5 * f.height;
    h.addChild(c);
    f = s_oSpriteLibrary.getSprite("exit_button");
    a = 0.5 * CANVAS_WIDTH + 230;
    d = new CGfxButton(a, 780, f, h);
    d.addEventListener(ON_MOUSE_UP, this.unload, this);
    f = 450;
    var n = 60,
      p = CANVAS_WIDTH / 2,
      l = 0.5 * CANVAS_HEIGHT - 74;
    new CTLText(
      h,
      p - f / 2,
      l - n / 2,
      f,
      n,
      50,
      "center",
      "#ffffff",
      FONT_GAME,
      1,
      2,
      2,
      !0,
      !0,
      !0,
      !1
    );
   
    new CTLText(
      h,
      p - f / 2,
      l - n / 2,
      f,
      n,
      40,
      "center",
      "#ffffff",
      FONT_GAME,
      1,
      2,
      2,
      !0,
      !0,
      !0,
      !1
    );
  };
  this.unload = function () {
    g.off("click", this._onLogoButRelease);
    d.unload();
    d = null;
    s_oStage.removeChild(h);
  };
  this._init();
}
function extractHostname(a) {
  a = -1 < a.indexOf("://") ? a.split("/")[2] : a.split("/")[0];
  a = a.split(":")[0];
  return (a = a.split("?")[0]);
}
function extractRootDomain(a) {
  a = extractHostname(a);
  var c = a.split("."),
    b = c.length;
  2 < b && (a = c[b - 2] + "." + c[b - 1]);
  return a;
}
var getClosestTop = function () {
    var a = window,
      c = !1;
    try {
      for (; a.parent.document !== a.document; )
        if (a.parent.document) a = a.parent;
        else {
          c = !0;
          break;
        }
    } catch (b) {
      c = !0;
    }
    return { topFrame: a, err: c };
  },
  getBestPageUrl = function (a) {
    var c = a.topFrame,
      b = "";
    if (a.err)
      try {
        try {
          b = window.top.location.href;
        } catch (g) {
          var d = window.location.ancestorOrigins;
          b = d[d.length - 1];
        }
      } catch (g) {
        b = c.document.referrer;
      }
    else b = c.location.href;
    return b;
  },
  TOPFRAMEOBJ = getClosestTop(),
  PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);
function seekAndDestroy() {
  for (
    var a = extractRootDomain(PAGE_URL),
      c = [
        String.fromCharCode(
          99,
          111,
          100,
          101,
          116,
          104,
          105,
          115,
          108,
          97,
          98,
          46,
          99,
          111,
          109
        ),
        String.fromCharCode(101, 110, 118, 97, 116, 111, 46, 99, 111, 109),
        String.fromCharCode(
          99,
          111,
          100,
          101,
          99,
          97,
          110,
          121,
          111,
          110,
          46,
          99,
          111,
          109
        ),
        String.fromCharCode(
          99,
          111,
          100,
          101,
          99,
          97,
          110,
          121,
          111,
          110,
          46,
          110,
          101,
          116
        ),
      ],
      b = 0;
    b < c.length;
    b++
  )
    if (c[b] === a) return !0;
  return !1;
}
