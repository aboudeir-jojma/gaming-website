var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.objectCreate =
  $jscomp.ASSUME_ES5 || "function" == typeof Object.create
    ? Object.create
    : function (a) {
        var b = function () {};
        b.prototype = a;
        return new b();
      };
$jscomp.underscoreProtoCanBeSet = function () {
  var a = { a: !0 }, b = {};
  try { return (b.__proto__ = a), b.a; } catch (c) {}
  return !1;
};
$jscomp.setPrototypeOf =
  "function" == typeof Object.setPrototypeOf
    ? Object.setPrototypeOf
    : $jscomp.underscoreProtoCanBeSet()
    ? function (a, b) {
        a.__proto__ = b;
        if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
        return a;
      }
    : null;
$jscomp.inherits = function (a, b) {
  a.prototype = $jscomp.objectCreate(b.prototype);
  a.prototype.constructor = a;
  if ($jscomp.setPrototypeOf) {
    var c = $jscomp.setPrototypeOf; c(a, b);
  } else for (c in b) if ("prototype" != c)
    if (Object.defineProperties) {
      var e = Object.getOwnPropertyDescriptor(b, c);
      e && Object.defineProperty(a, c, e);
    } else a[c] = b[c];
  a.superClass_ = b.prototype;
};

var bestscore = 0;
get_data("rf.sushi_chef_bestscore") && (bestscore = get_data("rf.sushi_chef_bestscore"));

var Menu = function () { return Phaser.Scene.call(this, "menu") || this; };
$jscomp.inherits(Menu, Phaser.Scene);

Menu.prototype.create = function () {
  var a = this, b = "play";
  stop_music();
  play_music("music_menu", this);

  this.add.sprite(480, 640, "bg_menu");
  var c = this.add.sprite(480, -300, "game_title"),
      e = this.add.sprite(-300, 880, "mascot");

  this.add.sprite(config.width / 2, 660, "bar_best");
  this.add
    .text(config.width / 2 + 30, 660, bestscore.toString(), {
      fontFamily: "josefin",
      align: "center",
      fontSize: 35,
      color: "#fff",
    })
    .setOrigin(0.5);

  // Boutons (RATE supprimé)
  var h = draw_button(480, 1400, "play", this),
      g = draw_button(480, 1400, "music", this),
      l = draw_button(620, 1400, "info", this),
      f = this.add.group();

  game_data.music || g.setFrame(1);

  // Animations
  this.tweens.add({ targets: e, delay: 200, x: 250, duration: 500, ease: "Back.easeOut" });
  this.tweens.add({ targets: c, y: 400, duration: 500, ease: "Back.easeOut" });
  this.tweens.add({ targets: h, delay: 1000, y: 900, duration: 500, ease: "Back.easeOut" });
  // Tween du bouton RATE supprimé
  this.tweens.add({ targets: g, delay: 1400, y: 1040, duration: 500, ease: "Back.easeOut" });
  this.tweens.add({ targets: l, delay: 1500, y: 1040, duration: 500, ease: "Back.easeOut" });

  // Gestion des clics (action RATE supprimée)
  this.input.on(
    "gameobjectdown",
    function (c, d) {
      "play" == b
        ? (play_sound("click", this),
          this.tweens.add({
            targets: d,
            scaleX: 0.9,
            scaleY: 0.9,
            duration: 100,
            ease: "Linear",
            yoyo: !0,
            onComplete: function () {
              if ("play" == d.name) {
                a.scene.start("game");
              } else if ("music" == d.name) {
                game_data.music
                  ? ((game_data.music = !1), d.setFrame(1), stop_music())
                  : ((game_data.music = !0), d.setFrame(0), play_music("music_menu", a));
              } else if ("info" == d.name) {
                b = "info";
                f.create(480, 720, "popup");
                var c = draw_button(780, 380, "close", a);
                f.add(c);
                c = a.make.text({
                  x: 480, y: 700, text: '"Sushi Chef"', origin: 0.5,
                  style: {
                    font: "bold 32px josefin",
                    fill: "#fff",
                    align: "center",
                    stroke: "#a35c36",
                    strokeThickness: 5,
                    wordWrap: { width: 500 },
                  },
                });
                f.add(c);
              }
            },
          }))
        : "info" == b && "close" == d.name && (f.clear(!0), (b = "play"));
    },
    this
  );
};
