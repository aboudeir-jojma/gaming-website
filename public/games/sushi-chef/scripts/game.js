var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.objectCreate =
  $jscomp.ASSUME_ES5 || "function" == typeof Object.create
    ? Object.create
    : function (b) {
        var a = function () {};
        a.prototype = b;
        return new a();
      };
$jscomp.underscoreProtoCanBeSet = function () {
  var b = { a: !0 },
    a = {};
  try {
    return (a.__proto__ = b), a.a;
  } catch (q) {}
  return !1;
};
$jscomp.setPrototypeOf =
  "function" == typeof Object.setPrototypeOf
    ? Object.setPrototypeOf
    : $jscomp.underscoreProtoCanBeSet()
    ? function (b, a) {
        b.__proto__ = a;
        if (b.__proto__ !== a) throw new TypeError(b + " is not extensible");
        return b;
      }
    : null;
$jscomp.inherits = function (b, a) {
  b.prototype = $jscomp.objectCreate(a.prototype);
  b.prototype.constructor = b;
  if ($jscomp.setPrototypeOf) {
    var q = $jscomp.setPrototypeOf;
    q(b, a);
  } else
    for (q in a)
      if ("prototype" != q)
        if (Object.defineProperties) {
          var t = Object.getOwnPropertyDescriptor(a, q);
          t && Object.defineProperty(b, q, t);
        } else b[q] = a[q];
  b.superClass_ = a.prototype;
};
$jscomp.arrayIteratorImpl = function (b) {
  var a = 0;
  return function () {
    return a < b.length ? { done: !1, value: b[a++] } : { done: !0 };
  };
};
$jscomp.arrayIterator = function (b) {
  return { next: $jscomp.arrayIteratorImpl(b) };
};
$jscomp.makeIterator = function (b) {
  var a = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
  return a ? a.call(b) : $jscomp.arrayIterator(b);
};
$jscomp.getGlobal = function (b) {
  return "undefined" != typeof window && window === b
    ? b
    : "undefined" != typeof global && null != global
    ? global
    : b;
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.defineProperty =
  $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties
    ? Object.defineProperty
    : function (b, a, q) {
        b != Array.prototype && b != Object.prototype && (b[a] = q.value);
      };
$jscomp.polyfill = function (b, a, q, t) {
  if (a) {
    q = $jscomp.global;
    b = b.split(".");
    for (t = 0; t < b.length - 1; t++) {
      var f = b[t];
      f in q || (q[f] = {});
      q = q[f];
    }
    b = b[b.length - 1];
    t = q[b];
    a = a(t);
    a != t &&
      null != a &&
      $jscomp.defineProperty(q, b, {
        configurable: !0,
        writable: !0,
        value: a,
      });
  }
};
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.polyfill(
  "Promise",
  function (b) {
    function a() {
      this.batch_ = null;
    }
    function q(e) {
      return e instanceof f
        ? e
        : new f(function (b, a) {
            b(e);
          });
    }
    if (b && !$jscomp.FORCE_POLYFILL_PROMISE) return b;
    a.prototype.asyncExecute = function (e) {
      if (null == this.batch_) {
        this.batch_ = [];
        var b = this;
        this.asyncExecuteFunction(function () {
          b.executeBatch_();
        });
      }
      this.batch_.push(e);
    };
    var t = $jscomp.global.setTimeout;
    a.prototype.asyncExecuteFunction = function (e) {
      t(e, 0);
    };
    a.prototype.executeBatch_ = function () {
      for (; this.batch_ && this.batch_.length; ) {
        var e = this.batch_;
        this.batch_ = [];
        for (var b = 0; b < e.length; ++b) {
          var a = e[b];
          e[b] = null;
          try {
            a();
          } catch (M) {
            this.asyncThrow_(M);
          }
        }
      }
      this.batch_ = null;
    };
    a.prototype.asyncThrow_ = function (b) {
      this.asyncExecuteFunction(function () {
        throw b;
      });
    };
    var f = function (b) {
      this.state_ = 0;
      this.result_ = void 0;
      this.onSettledCallbacks_ = [];
      var e = this.createResolveAndReject_();
      try {
        b(e.resolve, e.reject);
      } catch (x) {
        e.reject(x);
      }
    };
    f.prototype.createResolveAndReject_ = function () {
      function b(b) {
        return function (e) {
          f || ((f = !0), b.call(a, e));
        };
      }
      var a = this,
        f = !1;
      return { resolve: b(this.resolveTo_), reject: b(this.reject_) };
    };
    f.prototype.resolveTo_ = function (b) {
      if (b === this)
        this.reject_(new TypeError("A Promise cannot resolve to itself"));
      else if (b instanceof f) this.settleSameAsPromise_(b);
      else {
        a: switch (typeof b) {
          case "object":
            var e = null != b;
            break a;
          case "function":
            e = !0;
            break a;
          default:
            e = !1;
        }
        e ? this.resolveToNonPromiseObj_(b) : this.fulfill_(b);
      }
    };
    f.prototype.resolveToNonPromiseObj_ = function (b) {
      var e = void 0;
      try {
        e = b.then;
      } catch (x) {
        this.reject_(x);
        return;
      }
      "function" == typeof e
        ? this.settleSameAsThenable_(e, b)
        : this.fulfill_(b);
    };
    f.prototype.reject_ = function (b) {
      this.settle_(2, b);
    };
    f.prototype.fulfill_ = function (b) {
      this.settle_(1, b);
    };
    f.prototype.settle_ = function (b, a) {
      if (0 != this.state_)
        throw Error(
          "Cannot settle(" +
            b +
            ", " +
            a +
            "): Promise already settled in state" +
            this.state_
        );
      this.state_ = b;
      this.result_ = a;
      this.executeOnSettledCallbacks_();
    };
    f.prototype.executeOnSettledCallbacks_ = function () {
      if (null != this.onSettledCallbacks_) {
        for (var b = 0; b < this.onSettledCallbacks_.length; ++b)
          P.asyncExecute(this.onSettledCallbacks_[b]);
        this.onSettledCallbacks_ = null;
      }
    };
    var P = new a();
    f.prototype.settleSameAsPromise_ = function (b) {
      var a = this.createResolveAndReject_();
      b.callWhenSettled_(a.resolve, a.reject);
    };
    f.prototype.settleSameAsThenable_ = function (b, a) {
      var f = this.createResolveAndReject_();
      try {
        b.call(a, f.resolve, f.reject);
      } catch (M) {
        f.reject(M);
      }
    };
    f.prototype.then = function (b, a) {
      function e(b, a) {
        return "function" == typeof b
          ? function (a) {
              try {
                q(b(a));
              } catch (Y) {
                t(Y);
              }
            }
          : a;
      }
      var q,
        t,
        A = new f(function (b, a) {
          q = b;
          t = a;
        });
      this.callWhenSettled_(e(b, q), e(a, t));
      return A;
    };
    f.prototype.catch = function (b) {
      return this.then(void 0, b);
    };
    f.prototype.callWhenSettled_ = function (b, a) {
      function f() {
        switch (e.state_) {
          case 1:
            b(e.result_);
            break;
          case 2:
            a(e.result_);
            break;
          default:
            throw Error("Unexpected state: " + e.state_);
        }
      }
      var e = this;
      null == this.onSettledCallbacks_
        ? P.asyncExecute(f)
        : this.onSettledCallbacks_.push(f);
    };
    f.resolve = q;
    f.reject = function (b) {
      return new f(function (a, f) {
        f(b);
      });
    };
    f.race = function (b) {
      return new f(function (a, f) {
        for (
          var e = $jscomp.makeIterator(b), t = e.next();
          !t.done;
          t = e.next()
        )
          q(t.value).callWhenSettled_(a, f);
      });
    };
    f.all = function (b) {
      var a = $jscomp.makeIterator(b),
        e = a.next();
      return e.done
        ? q([])
        : new f(function (b, f) {
            function t(a) {
              return function (f) {
                x[a] = f;
                A--;
                0 == A && b(x);
              };
            }
            var x = [],
              A = 0;
            do
              x.push(void 0),
                A++,
                q(e.value).callWhenSettled_(t(x.length - 1), f),
                (e = a.next());
            while (!e.done);
          });
    };
    return f;
  },
  "es6",
  "es3"
);
var game_version = "1.0.3";
document.fonts.load('10pt "josefin"');
var game_data = {
    state: "play",
    stage: 1,
    music: !0,
    next_stage: !1,
    game_end: !1,
  },
  _score = 0,
  first_play = !0,
  game_music,
  Game = function () {
    return Phaser.Scene.call(this, "game") || this;
  };
$jscomp.inherits(Game, Phaser.Scene);
Game.prototype.create = function () {
  function b(g) {
    h[0][0] = g.col;
    h[0][1] = g.row;
    h[0][2] = g.x;
    h[0][3] = g.y;
    h[0][4] = g.frame.name;
    h[0][5] = "a";
    c.tweens.add({
      targets: g,
      scaleX: 1.3,
      scaleY: 1.3,
      duration: 200,
      ease: "Back.easeOut",
    });
  }
  function a(g, b) {
    E = !1;
    var n = w.getChildren(),
      d = w.getLength(),
      k = h[0][0],
      v = h[0][1],
      a = !0;
    if (
      0 > k + g ||
      k + g == game_config.height ||
      0 > v + b ||
      v + b == game_config.width
    ) {
      a = !1;
      E = !0;
      for (var l = 0; l < d; l++) {
        var r = n[l];
        r.col == k &&
          r.row == v &&
          c.tweens.add({
            targets: r,
            scaleX: 1,
            scaleY: 1,
            duration: 200,
            ease: "Back.easeOut",
          });
      }
    }
    if (a) {
      for (a = 0; a < d; a++)
        (l = n[a]),
          l.col == k + g && l.row == v + b
            ? ((h[1][0] = l.col),
              (h[1][1] = l.row),
              (h[1][2] = l.x),
              (h[1][3] = l.y),
              (h[1][4] = l.frame.name),
              (h[1][5] = "b"),
              h[1][0] == h[0][0] &&
                h[1][1] == h[0][1] &&
                c.tweens.add({
                  targets: l,
                  scaleX: 1,
                  scaleY: 1,
                  duration: 200,
                  ease: "Back.easeOut",
                }))
            : l.col == k &&
              l.row == v &&
              c.tweens.add({
                targets: l,
                scaleX: 1,
                scaleY: 1,
                duration: 200,
                ease: "Back.easeOut",
              });
      k + g == h[0][0] && v + b == h[0][1]
        ? (E = !0)
        : (play_sound("swap", c), q("swap"));
    }
  }
  function q(g) {
    for (
      var b = [0, 0], n = w.getLength(), d = w.getChildren(), a = 0;
      2 > a;
      a++
    )
      for (var v = 0; v < n; v++)
        d[v].col == h[a][0] &&
          d[v].row == h[a][1] &&
          ((b[a] = v),
          c.tweens.add({
            targets: d[v],
            y: h[1 - a][3],
            x: h[1 - a][2],
            duration: game_config.swap_speed,
            ease: "Linear",
            onComplete: function () {
              da++;
              if (2 == da) {
                for (var k = 0; 2 > k; k++)
                  for (var c = 0; c < n; c++)
                    if (c == b[k]) {
                      d[c].col = h[1 - k][0];
                      d[c].row = h[1 - k][1];
                      break;
                    }
                k = [];
                k.push(u[h[0][0]][h[0][1]]);
                k.push(u[h[1][0]][h[1][1]]);
                u[h[0][0]][h[0][1]] = k[1];
                u[h[1][0]][h[1][1]] = k[0];
                "swap" == g
                  ? ((k = t("vertical")),
                    (c = t("horizontal")),
                    k || c ? f() : q("return"))
                  : (E = !0);
              }
            },
          }));
    var da = 0;
  }
  function t(g) {
    if (!F) {
      var b = w.getChildren(),
        n = w.getLength(),
        d = 0;
      if ("vertical" == g)
        for (g = 0; 2 > g; g++) {
          for (
            var c = h[g][4],
              a = h[1 - g][0],
              f = h[1 - g][1],
              l = 0,
              r = [],
              e = 0;
            e <= game_config.width - a;
            e++
          ) {
            var z = a + e,
              B = f;
            if (z < game_config.height)
              if (u[z][B] == c) l++, r.push([z, B]);
              else break;
          }
          for (e = 1; e <= a; e++)
            if (((z = a - e), (B = f), u[z][B] == c)) l++, r.push([z, B]);
            else break;
          if (2 < l)
            for (d += l, c = 0; c < l; c++)
              for (a = 0; a < n; a++)
                b[a].col == r[c][0] && b[a].row == r[c][1] && (b[a].match = !0);
        }
      else if ("horizontal" == g)
        for (g = 0; 2 > g; g++) {
          c = h[g][4];
          a = h[1 - g][0];
          f = h[1 - g][1];
          l = 0;
          r = [];
          for (e = 0; e < game_config.width; e++)
            if (((z = a), (B = f + e), u[z][B] == c)) l++, r.push([z, B]);
            else break;
          for (e = 1; e < game_config.width; e++)
            if (((z = a), (B = f - e), u[z][B] == c)) l++, r.push([z, B]);
            else break;
          if (2 < l)
            for (d += l, c = 0; c < l; c++)
              for (a = 0; a < n; a++)
                b[a].col == r[c][0] && b[a].row == r[c][1] && (b[a].match = !0);
        }
      return 2 < d ? !0 : !1;
    }
  }
  function f() {
    function g(g, b, n) {
      for (
        var d = m.targets.length, a = {}, k = 0;
        k < d;
        a = { $jscomp$loop$prop$obj$25$50: a.$jscomp$loop$prop$obj$25$50 }, k++
      )
        if (n == m.targets[k]) {
          a.$jscomp$loop$prop$obj$25$50 = c.add.sprite(g, b, "orbs");
          a.$jscomp$loop$prop$obj$25$50.setFrame(n);
          c.tweens.add({
            targets: a.$jscomp$loop$prop$obj$25$50,
            x: Z[k][0],
            y: Z[k][1],
            duration: 800,
            ease: "Linear",
            onComplete: (function (g) {
              return function () {
                g.$jscomp$loop$prop$obj$25$50.destroy();
              };
            })(a),
          });
          f[k] = 1;
          break;
        }
    }
    function b() {
      for (var g = !1, b = 0; 3 > b; b++) {
        var n = C.getChildren(),
          a = C.getLength();
        if (1 == f[b]) {
          m.targets[b] = -1;
          m.cust_frame[b] = -1;
          g = !0;
          var d = {};
          for (
            --a;
            0 <= a;
            d = { $jscomp$loop$prop$o$52: d.$jscomp$loop$prop$o$52 }, a--
          )
            n[a].id == b &&
              (n[a].char
                ? ((n[a].char = !1),
                  (d.$jscomp$loop$prop$o$52 = n[a]),
                  c.tweens.add({
                    targets: n[a],
                    delay: 800,
                    scaleY: 0,
                    duration: 300,
                    ease: "Back.easeIn",
                    onComplete: (function (g) {
                      return function () {
                        g.$jscomp$loop$prop$o$52.destroy();
                      };
                    })(d),
                  }),
                  ba(n[a].x, n[a].y, "win"))
                : n[a].destroy());
        }
      }
      g &&
        c.time.delayedCall(1400, function () {
          for (var g = 0; 3 > g; g++) 1 == f[g] && (m.customers[g] = 0);
          "play" == p && x(1);
        });
    }
    if (!F) {
      for (
        var n = w.getChildren(), d = w.getLength(), a = 0, f = [0, 0, 0], e = 0;
        e < d;
        e++
      )
        n[e].match && a++;
      for (e = 0; e < a; e++)
        for (var l = 0; l < d; l++) {
          var r = n[l];
          if (r.match) {
            u[r.col][r.row] = -1;
            r.alpha = 0.2;
            r.match = !1;
            r.list = !0;
            g(r.x, r.y, r.frame.name);
            break;
          }
        }
      c.time.delayedCall(300, function () {
        for (var g = 0; g < a; g++)
          for (var c = 0; c < d; c++) {
            var k = n[c];
            if (k.list) {
              u[k.col][k.row] = -1;
              k.destroy();
              y += 10;
              break;
            }
          }
        ea.text = y.toString();
        b();
        P();
      });
    }
  }
  function P() {
    for (
      var g = w.getChildren(), b = w.getLength(), a = 0;
      a < game_config.width;
      a++
    )
      for (var d = game_config.height - 1; 0 <= d; d--)
        for (var f = 0; f < b; f++) {
          var v = g[f],
            h = 0;
          if (v.col == d && v.row == a) {
            for (f = 0; f < game_config.height - d; f++)
              -1 == u[d + f][a] && h++;
            v.shift = h;
            break;
          }
        }
    for (a = 0; a < game_config.height; a++)
      for (d = 0; d < game_config.width; d++) u[a][d] = -1;
    for (a = 0; a < b; a++)
      (d = g[a]),
        0 < d.shift &&
          (c.tweens.add({
            targets: d,
            y: d.y + 95 * d.shift,
            duration:
              game_config.fall_speed + (game_config.fall_speed / 2) * d.shift,
            ease: "Back.easeOut",
          }),
          (d.col += d.shift),
          (d.shift = 0));
    for (a = 0; a < b; a++) (d = g[a]), (u[d.col][d.row] = d.frame.name);
    c.time.delayedCall(600, function () {
      e();
    });
  }
  function e() {
    play_sound("add", c);
    w.getChildren();
    w.getLength();
    for (
      var g = game_config.start_x, a = game_config.start_y, b = 0;
      b < game_config.height;
      b++
    )
      for (var d = 0; d < game_config.width; d++)
        if (-1 == u[b][d]) {
          var e = w.create(g + (95 * d + 47.5), a + (95 * b + 47.5), "orbs");
          e.setInteractive();
          var v = Phaser.Math.Between(0, N - 1);
          e.setFrame(v);
          e.sushi = !0;
          e.col = b;
          e.row = d;
          e.setScale(0, 0);
          u[b][d] = v;
          c.tweens.add({
            targets: e,
            scaleX: 1,
            scaleY: 1,
            duration: 250,
            ease: "Back.easeOut",
          });
        }
    A()
      ? c.time.delayedCall(400, function () {
          f();
        })
      : "play" == p &&
        ca() &&
        ((m.is_nomatch = !0), (p = "failed"), c.time.delayedCall(2e3, Y));
  }
  function A() {
    function b(a, b, g) {
      var c = 0;
      if ("rows" == a) {
        a = game_config.width - g;
        for (var d = 0; d < a; d++)
          if (u[b][g] == u[b][g + d]) c++;
          else break;
      } else if ("column" == a)
        for (a = game_config.height - b, d = 0; d < a; d++)
          if (u[b][g] == u[b + d][g]) c++;
          else break;
      return c;
    }
    if ("paused" != p) {
      for (var a = [], c = 0; c < game_config.height; c++)
        for (var d = 0; d < game_config.width; d++) {
          var e = b("rows", c, d);
          if (2 < e) {
            for (var f = d; f < e + d; f++) a.push({ col: c, row: f });
            d += e;
          }
        }
      for (c = 0; c < game_config.width; c++)
        for (d = 0; d < game_config.height; d++)
          if (((e = b("column", d, c)), 2 < e)) {
            for (f = d; f < e + d; f++) a.push({ col: f, row: c });
            d += e;
          }
      c = w.getLength();
      d = w.getChildren();
      e = 0;
      f = a.length;
      for (var h = 0; h < f; h++)
        for (var l = 0; l < c; l++) {
          var r = d[l];
          if (r.col == a[e].col && r.row == a[e].row) {
            e++;
            d[l].match = !0;
            break;
          }
        }
      if (0 < f) return !0;
      E = !0;
      return !1;
    }
  }
  function x(a) {
    function b() {
      var a = c.add.sprite(325 + 235 * g, 240, "target");
      a.setScale(1, 0);
      a.id = g;
      C.add(a);
      c.tweens.add({
        targets: a,
        scaleY: 1,
        duration: 300,
        ease: "Back.easeOut",
        onComplete: function () {
          for (var a = 0, b = 0; 20 > b; b++) {
            a = Phaser.Math.Between(0, N - 1);
            for (var d = 0, k = 0; 3 > k; k++) a != m.targets[k] && d++;
            if (3 == d) {
              m.targets[g] = a;
              break;
            }
          }
          b = c.add.sprite(325 + 235 * g, 220, "orbs");
          b.setScale(0, 0);
          b.setFrame(a);
          b.id = g;
          C.add(b);
          m.targets[g] = a;
          c.tweens.add({
            targets: b,
            scaleX: 1,
            scaleY: 1,
            duration: 200,
            ease: "Back.easeOut",
          });
        },
      });
    }
    0 !== a && 1 == Math.round(2 * Math.random()) && x(0);
    var g = -1;
    for (a = 0; 10 > a; a++) {
      var d = Math.round(Math.random() * m.customers.length);
      if (0 == m.customers[d]) {
        m.customers[d] = 1;
        g = d;
        break;
      }
    }
    for (a = 0; a < m.targets.length; a++)
      (d = []), d.push(245 + 235 * a), d.push(476), Z.push(d);
    if (0 <= g) {
      for (d = a = 0; 20 > d; d++) {
        a = Phaser.Math.Between(0, 9);
        for (var e = 0, f = 0; 3 > f; f++) a != m.cust_frame[f] && e++;
        if (3 == e) {
          m.cust_frame[g] = a;
          break;
        }
      }
      d = c.add.sprite(245 + 235 * g, 476, Q.chars);
      d.setFrame(a);
      d.setOrigin(0.5, 1);
      d.setScale(1, 0);
      d.id = g;
      d.char = !0;
      C.add(d);
      c.tweens.add({
        targets: d,
        scaleY: 1,
        duration: 300,
        ease: "Back.easeOut",
        onComplete: function () {
          b();
          var a = c.add.sprite(245 + 235 * g, 450, "timer");
          a.id = g;
          a.type = "timer";
          a.timer = {
            subs:
              3 > m.happy_customers
                ? 2
                : 3 > game_data.stage
                ? Math.round(3 * Math.random() + 5)
                : Math.round(3 * Math.random() + 2),
            data: 100,
          };
          C.add(a);
        },
      });
    }
  }
  function M(a) {
    m.targets[a] = -1;
    for (var b = C.getLength(), g = C.getChildren(), d = 0; d < b; d++)
      if (g[d].id == a && g[d].char) {
        g[d].setFrame(g[d].frame.name + 10);
        break;
      }
    var e = 0,
      f = !1;
    c.time.delayedCall(1e3, function () {
      b = C.getLength();
      for (var d = b - 1; 0 <= d; d--)
        g[d].id == a &&
          ((m.cust_frame[d] = -1),
          g[d].char
            ? ((g[d].char = !1),
              c.tweens.add({
                targets: g[d],
                delay: 800,
                scaleY: 0,
                duration: 300,
                ease: "Back.easeIn",
              }),
              ba(g[d].x, g[d].y, "lost"))
            : g[d].destroy());
      c.time.delayedCall(1500, function () {
        for (var b = (m.customers[a] = 0); 3 > b; b++)
          1 == m.customers[b] && e++;
        0 == e &&
          ("play" == p
            ? ((p = "failed"), (f = !0))
            : "paused" == p && (J.clear(!0, !0), (p = "failed"), (f = !0)));
        f && ka();
      });
    });
  }
  function ba(a, b, e) {
    la(e);
    var g = c.add.sprite(a, b - 200, "heart");
    "lost" == e
      ? (play_sound("disappoint", c), g.setFrame(1))
      : "win" == e && (play_sound("positive", c), m.happy_customers++);
    c.tweens.add({
      targets: g,
      y: 150,
      duration: 1500,
      ease: "Linear",
      onComplete: function () {
        g.destroy();
      },
    });
  }
  function la(a) {
    var b = 8,
      g = 6;
    game_config.easy_mode && (b = 20);
    game_config.hard_mode && ((b = 5), (g = 10));
    "lost" == a
      ? ((m.progress -= g), 0 > m.progress && (m.progress = 0))
      : ((m.progress += b),
        100 <= m.progress &&
          ((m.progress = 100),
          "play" != p ||
            fa ||
            ((p = "completed"), (F = !0), c.time.delayedCall(1e3, ma))));
    c.tweens.add({
      targets: ha,
      scaleX: (m.progress / 100) * 538,
      duration: 200,
      ease: "Back.easeOut",
    });
  }
  function ca() {
    function a(a, g, c, e, f) {
      if (0 == b) {
        f = game_config.width;
        for (var d = game_config.height, k = 0; k < d; k++)
          for (var n = 0; n < f; n++) {
            var h = u[k][n];
            if (
              0 <= k + g &&
              0 <= k + e &&
              7 > k + g &&
              7 > k + e &&
              0 <= n + a &&
              0 <= n + c &&
              7 > n + a &&
              7 > n + c &&
              u[k + g][n + a] == h &&
              u[k + e][n + c] == h
            ) {
              b++;
              break;
            }
          }
      }
    }
    var b = 0;
    a(0, 1, 1, 2, "vertical");
    a(1, 1, 0, 2, "vertical");
    a(-1, 1, -1, 2, "vertical");
    a(0, 1, -1, 2, "vertical");
    a(-1, 1, 0, 2, "vertical");
    a(1, 1, 1, 2, "vertical");
    a(1, 0, 2, 1, "horizontal");
    a(1, 1, 2, 0, "horizontal");
    a(1, -1, 2, -1, "horizontal");
    a(1, 0, 2, -1, "horizontal");
    a(1, -1, 2, 0, "horizontal");
    a(1, 1, 2, 1, "horizontal");
    a(0, 1, 0, 3, "vertical2");
    a(0, 2, 0, 3, "vertical2");
    a(2, 0, 3, 0, "horizontal2");
    a(1, 0, 3, 0, "horizontal2");
    return 0 == b ? !0 : !1;
  }
  function ja() {
    p = "guide";
    R().then(function () {
      S().then(function () {
        var a = c.add.sprite(465, 490, "swap_tutor");
        a.setDepth(1);
        c.time.delayedCall(2e3, function () {
          a.destroy(!0, !0);
          T();
          U().then(function () {
            x(1);
            A()
              ? c.time.delayedCall(500, function () {
                  f();
                  p = "play";
                })
              : (p = "play");
          });
        });
      });
    });
  }
  function ka() {
    stop_music();
    play_sound("fail", c);
    p = "failed";
    F = !0;
    y > bestscore &&
      ((bestscore = y), save_data("rf.sushi_chef_bestscore", bestscore));
    R(1).then(function () {
      S().then(function () {
        D.text = "You fired!";
        D.setVisible(!0);
        c.time.delayedCall(2e3, function () {
          D.setVisible(!1);
          T();
          U().then(function () {
            V("close");
          });
        });
      });
    });
  }
  function Y() {
    stop_music();
    game_config.shuffle_nomatch || play_sound("fail", c);
    p = "failed";
    y > bestscore &&
      ((bestscore = y), save_data("rf.sushi_chef_bestscore", bestscore));
    F = !0;
    R(1).then(function () {
      S().then(function () {
        D.text = "No available moves!";
        D.setVisible(!0);
        c.time.delayedCall(2e3, function () {
          D.setVisible(!1);
          T();
          U().then(function () {
            game_config.shuffle_nomatch ? ia() : V("close");
          });
        });
      });
    });
  }
  function ma() {
    play_sound("completed", c);
    p = "completed";
    _score = y;
    y > bestscore &&
      ((bestscore = y), save_data("rf.sushi_chef_bestscore", bestscore));
    game_data.next_stage = !0;
    R().then(function () {
      S().then(function () {
        D.text = "Good job!";
        D.setVisible(!0);
        c.time.delayedCall(2e3, function () {
          D.setVisible(!1);
          T();
          U().then(function () {
            if (game_data.stage == game_config.total_stage) {
              game_data.next_stage = !1;
              p = "all_stage_completed";
              fa = F = !0;
              var a = c.add
                .rectangle(0, 0, config.width, config.height, 0)
                .setOrigin(0);
              a.setInteractive();
              a.alpha = 0;
              c.tweens.add({
                targets: a,
                alpha: 0.5,
                duration: 200,
                ease: "Linear",
              });
              var b = c.add.sprite(480, 720, "popup"),
                e = c.add.text(480, 550, all_stage_completed_msg, {
                  fontFamily: "josefin",
                  fontSize: 40,
                  align: "center",
                });
              e.setOrigin(0.5);
              var d = draw_button(480, 750, "resume", c),
                f = draw_button(480, 910, "sound_on", c),
                h = draw_button(320, 910, "menu", c),
                m = draw_button(640, 910, "music", c);
              game_data.music || m.setFrame(1);
              check_audio(f);
              J.addMultiple([a, b, e, d, f, h, m]);
              J.setDepth(1);
            } else V("close");
          });
        });
      });
    });
  }
  function R(a) {
    a = void 0 === a ? 0 : a;
    return new Promise(function (b) {
      play_sound("wush", c);
      W.setFrame(a);
      c.tweens.add({
        targets: W,
        x: 220,
        duration: 500,
        ease: "Back.easeOut",
        onComplete: function () {
          b(!0);
        },
      });
    });
  }
  function U() {
    return new Promise(function (a) {
      play_sound("wush", c);
      c.tweens.add({
        targets: W,
        x: -220,
        duration: 500,
        ease: "Back.easeIn",
        onComplete: function () {
          a(!0);
        },
      });
    });
  }
  function S() {
    return new Promise(function (a) {
      G.setVisible(!0);
      G.setScale(1, 0);
      play_sound("wush", c);
      c.tweens.add({
        targets: G,
        scaleY: 1,
        duration: 300,
        ease: "Back.easeOut",
        onComplete: function () {
          a(!0);
        },
      });
    });
  }
  function T() {
    return new Promise(function (a) {
      play_sound("wush", c);
      c.tweens.add({
        targets: G,
        scaleY: 0,
        duration: 200,
        ease: "Back.easeIn",
        onComplete: function () {
          G.setVisible(!0);
          a(!0);
        },
      });
    });
  }
  function ia() {
    for (var a = w.getLength(), b = w.getChildren(), e = 0; e < a; e++) {
      var d = b[e],
        h = Phaser.Math.Between(0, N - 1);
      d.setFrame(h);
      u[d.col][d.row] = h;
    }
    ca()
      ? ia()
      : ((m.is_nomatch = !1),
        (p = "wait"),
        (F = !1),
        c.time.delayedCall(500, function () {
          play_music(X, c);
          A()
            ? c.time.delayedCall(500, function () {
                f();
                p = "play";
              })
            : (p = "play");
        }));
  }
  function V(a) {
    if ("close" == a) {
      for (a = 0; 10 > a; a++) {
        var b = c.add.rectangle(480, 128 * a, 960, 128, 0);
        b.setOrigin(0.5, 0);
        b.setScale(1, 0);
        b.setDepth(2);
        c.tweens.add({ targets: b, scaleY: 1, duration: 800, ease: "Linear" });
      }
      c.time.delayedCall(1e3, function () {
        "completed" == p
          ? game_data.game_end
            ? ((game_data.game_end = !1),
              (game_data.stage = 1),
              c.scene.start("menu"))
            : (game_data.stage++, c.scene.start("game"))
          : "failed" == p &&
            ((game_data.stage = 1),
            (game_data.next_stage = !1),
            c.scene.start("menu"));
      });
    } else if ("open" == a) {
      a = {};
      for (
        b = 0;
        10 >= b;
        a = { $jscomp$loop$prop$shape$48$54: a.$jscomp$loop$prop$shape$48$54 },
          b++
      )
        (a.$jscomp$loop$prop$shape$48$54 = c.add.rectangle(
          480,
          128 * b,
          960,
          128,
          0
        )),
          a.$jscomp$loop$prop$shape$48$54.setOrigin(0.5, 0),
          a.$jscomp$loop$prop$shape$48$54.setDepth(2),
          c.tweens.add({
            targets: a.$jscomp$loop$prop$shape$48$54,
            scaleY: 0,
            duration: 800,
            ease: "Linear",
            onComplete: (function (a) {
              return function () {
                a.$jscomp$loop$prop$shape$48$54.destroy();
              };
            })(a),
          });
      c.time.delayedCall(1e3, function () {
        1 !== game_data.stage && (x(1), f(), (p = "play"));
      });
    }
  }
  var c = this,
    p = "wait",
    y = 0,
    Q = { chars: "customers1", bg: "background1" };
  stop_music();
  var X = "music_game";
  3 <= game_data.stage && (X = "music_game2");
  play_music(X, c);
  var N = null;
  N =
    game_config.variation.length < game_data.stage
      ? game_config.variation[game_config.variation.length - 1]
      : game_config.variation[game_data.stage - 1];
  1 < game_data.stage &&
    (0 < _score && ((y = _score), (_score = 0)),
    (Q.chars =
      game_config.customer.length < game_data.stage
        ? game_config.customer[game_config.customer.length - 1]
        : game_config.customer[game_data.stage - 1]),
    (Q.bg = "background" + game_data.stage));
  this.add.sprite(config.width / 2, config.height / 2, Q.bg);
  var m = {
      count: [],
      customers: [0, 0, 0],
      targets: [-1, -1, -1],
      cust_frame: [-1, -1, -1],
      progress: 0,
      happy_customers: 0,
      is_nomatch: !1,
    },
    u = [],
    w,
    E = !1,
    h = [
      [0, 0, 0],
      [0, 0, 0],
    ],
    Z = [],
    C = this.add.group(),
    J = this.add.group(),
    F = !1,
    fa = !1,
    aa = 1e3;
  game_config.easy_mode && (aa = 2e3);
  game_config.hard_mode && (aa = 500);
  this.add.sprite(440, 60, "bar");
  var ha = this.add.tileSprite(171, 55, 1, 32, "progress");
  ha.setOrigin(0, 0.5);
  this.add.sprite(160, 60, "heart_icon");
  var ea = c.add.text(440, 55, y, {
    fontFamily: "josefin",
    fontSize: 30,
    align: "center",
  });
  ea.setOrigin(0.5);
  var W = this.add.sprite(-220, 930, "chef"),
    G = this.add.sprite(460, 530, "dialog"),
    D = this.make.text({
      x: 465,
      y: 490,
      text: "",
      origin: 0.5,
      style: {
        font: "35px josefin",
        fill: "#000",
        align: "center",
        wordWrap: { width: 380 },
      },
    });
  W.setDepth(1);
  G.setDepth(1);
  G.setVisible(!1);
  D.setDepth(1);
  D.setVisible(!1);
  game_data.next_stage &&
    ((p = "hold"), (game_data.next_stage = !1), V("open"));
  first_play && 1 == game_data.stage
    ? ((first_play = !1), ja())
    : "hold" !== p &&
      c.time.delayedCall(300, function () {
        E = !0;
        x(1);
        A()
          ? c.time.delayedCall(500, function () {
              f();
              p = "play";
            })
          : (p = "play");
      });
  (function () {
    w = c.add.group();
    for (
      var a = game_config.start_x, b = game_config.start_y, e = 0;
      e < game_config.height;
      e++
    ) {
      u[e] = [];
      for (var d = 0; d < game_config.width; d++) {
        var f = w.create(a + (95 * d + 47.5), b + (95 * e + 47.5), "orbs");
        f.setInteractive();
        var h = Phaser.Math.Between(0, N - 1);
        f.setFrame(h);
        f.sushi = !0;
        f.col = e;
        f.row = d;
        u[e].push(h);
      }
    }
  })();
  draw_button(780, 80, "pause", c);
  var K,
    H,
    L,
    I,
    O = !1;
  this.input.on(
    "pointerup",
    function (b) {
      if (O) {
        O = !1;
        var c = (b = 0);
        H < K - 70
          ? c--
          : H > K + 70
          ? c++
          : I < L - 70
          ? b--
          : I > L + 70 && b++;
        a(b, c);
      }
    },
    this
  );
  this.input.on(
    "pointermove",
    function (b) {
      if (
        O &&
        E &&
        "play" == p &&
        ((H = b.x), (I = b.y), 70 < Phaser.Math.Distance.Between(K, L, H, I))
      ) {
        O = !1;
        var c = (b = 0);
        H < K - 70
          ? c--
          : H > K + 70
          ? c++
          : I < L - 70
          ? b--
          : I > L + 70 && b++;
        a(b, c);
      }
    },
    this
  );
  this.input.on(
    "gameobjectdown",
    function (a, e) {
      E &&
        e.sushi &&
        "play" == p &&
        ((O = !0), (H = a.x), (I = a.y), (K = e.x), (L = e.y), b(e));
      e.button &&
        (play_sound("click", c),
        c.tweens.add({
          targets: e,
          scaleX: 0.9,
          scaleY: 0.9,
          duration: 100,
          yoyo: !0,
          ease: "Linear",
          onComplete: function () {
            if ("play" == p) {
              if ("pause" == e.name) {
                p = "paused";
                var a = c.add
                  .rectangle(0, 0, config.width, config.height, 0)
                  .setOrigin(0);
                a.setInteractive();
                a.alpha = 0;
                c.tweens.add({
                  targets: a,
                  alpha: 0.5,
                  duration: 200,
                  ease: "Linear",
                });
                var b = c.add.sprite(480, 720, "popup"),
                  g = c.add.sprite(480, 520, "txt_paused"),
                  h = draw_button(480, 700, "resume", c),
                  k = draw_button(480, 860, "sound_on", c),
                  l = draw_button(320, 860, "menu", c),
                  m = draw_button(640, 860, "music", c);
                game_data.music || m.setFrame(1);
                check_audio(k);
                J.addMultiple([a, b, g, h, k, l, m]);
                J.setDepth(1);
              }
            } else
              "resume" == e.name
                ? (J.clear(!0, !0), (p = "play"), (F = !1), A(), f())
                : "sound" == e.name
                ? switch_audio(e)
                : "music" == e.name
                ? game_data.music
                  ? ((game_data.music = !1), e.setFrame(1), stop_music())
                  : ((game_data.music = !0), e.setFrame(0), play_music(X, c))
                : "menu" == e.name
                ? c.scene.start("menu")
                : "try" == e.name
                ? c.scene.start("game")
                : "restart" == e.name &&
                  (y > bestscore &&
                    ((bestscore = y),
                    save_data("rf.sushi_chef_bestscore", bestscore)),
                  (game_data.stage = 1),
                  (game_data.next_stage = !1),
                  (game_data.game_end = !1),
                  c.scene.start("game"));
          },
        }));
    },
    this
  );
  this.time.addEvent({
    delay: aa,
    callback: function () {
      if ("play" == p)
        for (var a = C.getLength(), b = C.getChildren(), c = 0; c < a; c++)
          if ("timer" == b[c].type) {
            var d = 5 - Math.round((b[c].timer.data / 100) * 5);
            b[c].timer.data -= b[c].timer.subs;
            b[c].setFrame(d);
            5 == d && ((b[c].type = "timeout"), M(b[c].id));
          }
    },
    loop: !0,
  });
};
function stop_music() {
  "undefined" !== typeof game_music && game_music.stop();
}
function play_music(b, a) {
  game_data.music &&
    ((game_music = a.sound.add(b, { loop: !0 })), game_music.play());
}
var config = {
    type: Phaser.WEBGL,
    width: 960,
    height: 1280,
    transparent: !0,
    scale: {
      mode: Phaser.Scale.FIT,
      parent: "game_content",
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    dom: { createContainer: !0 },
    scene: [Boot, Preload, Menu, Game],
  },
  game = new Phaser.Game(config);
