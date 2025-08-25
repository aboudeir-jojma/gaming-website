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
  } catch (c) {}
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
    var c = $jscomp.setPrototypeOf;
    c(b, a);
  } else
    for (c in a)
      if ("prototype" != c)
        if (Object.defineProperties) {
          var d = Object.getOwnPropertyDescriptor(a, c);
          d && Object.defineProperty(b, c, d);
        } else b[c] = a[c];
  b.superClass_ = a.prototype;
};
var Preload = function () {
  return Phaser.Scene.call(this, "preload") || this;
};
$jscomp.inherits(Preload, Phaser.Scene);
Preload.prototype.preload = function () {
  this.add.sprite(480, 640, "bg_menu");
  this.add.sprite(480, 500, "game_title");
  this.add.sprite(480, 800, "bar");
  var b = this.add.tileSprite(211, 795, 1, 32, "progress");
  b.setOrigin(0, 0.5);
  this.load.on("progress", function (a) {
    b.setScale(538 * a, 1);
  });
  for (var a = 1; a <= game_config.total_stage; a++)
    this.load.image("background" + a, "img/background" + a + ".png");
  for (a = 0; a < game_config.customer.length; a++)
    this.load.spritesheet(
      game_config.customer[a],
      "img/" + game_config.customer[a] + ".png",
      { frameWidth: 228, frameHeight: 285 }
    );
  this.load.image("target", "img/target.png");
  this.load.image("bar_best", "img/bar_best.png");
  this.load.image("heart_icon", "img/heart_icon.png");
  this.load.image("heart_ui", "img/heart_ui.png");
  this.load.image("txt_failed", "img/txt_failed.png");
  this.load.image("btn_play", "img/btn_play.png");
  this.load.image("btn_menu", "img/btn_menu.png");
  this.load.image("btn_info", "img/btn_info.png");
  this.load.image("btn_resume", "img/btn_resume.png");
  this.load.image("btn_pause", "img/btn_pause.png");
  this.load.image("btn_try", "img/btn_try.png");
  this.load.image("btn_close", "img/btn_close.png");


  this.load.image("btn_continue", "img/btn_continue.png");

  this.load.image("btn_new", "img/btn_newgame.png");
  this.load.image("btn_restart", "img/btn_restart.png");
  this.load.image("btn_sound_on", "img/btn_sound_on.png");
  this.load.image("btn_sound_off", "img/btn_sound_off.png");
  this.load.image("popup", "img/popup.png");
  this.load.image("stars", "img/stars.png");
  this.load.image("txt_paused", "img/txt_paused.png");
  this.load.image("dialog", "img/dialog.png");
  this.load.image("mascot", "img/mascot.png");
  this.load.image("swap_tutor", "img/swap_tutor.png");
  this.load.spritesheet("btn_music", "img/btn_music.png", {
    frameWidth: 124,
    frameHeight: 124,
  });
  this.load.spritesheet("orbs", "img/sushi.png", {
    frameWidth: 90,
    frameHeight: 90,
  });
  this.load.spritesheet("timer", "img/timer.png", {
    frameWidth: 190,
    frameHeight: 40,
  });
  this.load.spritesheet("heart", "img/heart.png", {
    frameWidth: 89,
    frameHeight: 76,
  });
  this.load.spritesheet("chef", "img/chef.png", {
    frameWidth: 349,
    frameHeight: 757,
  });
  this.load.audio("click", "audio/click.mp3");
  this.load.audio("wush", "audio/wush.mp3");
  this.load.audio("positive", "audio/positive.mp3");
  this.load.audio("swap", "audio/swap.mp3");
  this.load.audio("add", "audio/add.mp3");
  this.load.audio("match", "audio/match.mp3");
  this.load.audio("completed", "audio/completed.mp3");
  this.load.audio("fail", "audio/fail.mp3");
  this.load.audio("disappoint", "audio/disappoint.mp3");
  this.load.audio("music_menu", "audio/music_menu.mp3");
  this.load.audio("music_game", "audio/music_game.mp3");
  this.load.audio("music_game2", "audio/music_game2.mp3");
  this.load.once(
    "complete",
    function () {
      this.scene.start("menu");
    },
    this
  );
};
