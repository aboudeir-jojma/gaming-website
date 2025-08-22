var s_iScaleFactor = 1,
  s_oCanvasLeft,
  s_oCanvasTop;
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
function getSize(a) {
  var c = a.toLowerCase(),
    b = window.document,
    d = b.documentElement;
  if (void 0 === window["inner" + a]) a = d["client" + a];
  else if (window["inner" + a] != d["client" + a]) {
    var e = b.createElement("body");
    e.id = "vpw-test-b";
    e.style.cssText = "overflow:scroll";
    var f = b.createElement("div");
    f.id = "vpw-test-d";
    f.style.cssText = "position:absolute;top:-1000px";
    f.innerHTML =
      "<style>@media(" +
      c +
      ":" +
      d["client" + a] +
      "px){body#vpw-test-b div#vpw-test-d{" +
      c +
      ":7px!important}}</style>";
    e.appendChild(f);
    d.insertBefore(e, b.head);
    a = 7 == f["offset" + a] ? d["client" + a] : window["inner" + a];
    d.removeChild(e);
  } else a = window["inner" + a];
  return a;
}
window.addEventListener("orientationchange", onOrientationChange);
function onOrientationChange() {
  window.matchMedia("(orientation: portrait)").matches && sizeHandler();
  window.matchMedia("(orientation: landscape)").matches && sizeHandler();
}
function isIOS() {
  for (
    var a =
      "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(
        ";"
      );
    a.length;

  )
    if (navigator.platform === a.pop()) return (s_bIsIphone = !0);
  return (s_bIsIphone = !1);
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
    var a;
    a = navigator.userAgent.match(/(iPad|iPhone|iPod)/g)
      ? getIOSWindowHeight()
      : getSize("Height");
    var c = getSize("Width"),
      b = Math.min(a / CANVAS_HEIGHT, c / CANVAS_WIDTH),
      d = CANVAS_WIDTH * b,
      b = CANVAS_HEIGHT * b,
      e = 0;
    b < a
      ? ((e = a - b), (b += e), (d += (CANVAS_WIDTH / CANVAS_HEIGHT) * e))
      : d < c &&
        ((e = c - d), (d += e), (b += (CANVAS_HEIGHT / CANVAS_WIDTH) * e));
    var e = a / 2 - b / 2,
      f = c / 2 - d / 2,
      g = CANVAS_WIDTH / d;
    if (f * g < -EDGEBOARD_X || e * g < -EDGEBOARD_Y)
      (b = Math.min(
        a / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y),
        c / (CANVAS_WIDTH - 2 * EDGEBOARD_X)
      )),
        (d = CANVAS_WIDTH * b),
        (b *= CANVAS_HEIGHT),
        (e = (a - b) / 2),
        (f = (c - d) / 2),
        (g = CANVAS_WIDTH / d);
    s_iOffsetX = -1 * f * g;
    s_iOffsetY = -1 * e * g;
    0 <= e && (s_iOffsetY = 0);
    0 <= f && (s_iOffsetX = 0);
    null !== s_oInterface &&
      s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
    null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
    $("#canvas").css("width", d + "px");
    $("#canvas").css("height", b + "px");
    0 > e ? $("#canvas").css("top", e + "px") : $("#canvas").css("top", "0px");
    $("#canvas").css("left", f + "px");
  }
}
function createBitmap(a, c, b) {
  var d = new createjs.Bitmap(a),
    e = new createjs.Shape();
  c && b
    ? e.graphics.beginFill("#fff").drawRect(0, 0, c, b)
    : e.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
  d.hitArea = e;
  return d;
}
function createSprite(a, c, b, d, e, f) {
  a = null !== c ? new createjs.Sprite(a, c) : new createjs.Sprite(a);
  c = new createjs.Shape();
  c.graphics.beginFill("#000000").drawRect(-b, -d, e, f);
  a.hitArea = c;
  return a;
}
function randomFloatBetween(a, c, b) {
  "undefined" === typeof b && (b = 2);
  return parseFloat(Math.min(a + Math.random() * (c - a), c).toFixed(b));
}
function rotateVector2D(a, c) {
  var b = c.getX() * Math.cos(a) + c.getY() * Math.sin(a),
    d = c.getX() * -Math.sin(a) + c.getY() * Math.cos(a);
  c.set(b, d);
}
function tweenVectorsOnX(a, c, b) {
  return a + b * (c - a);
}
Array.prototype.max = function () {
  return Math.max.apply(null, this);
};
Array.prototype.min = function () {
  return Math.min.apply(null, this);
};
function shuffle(a) {
  for (var c = a.length, b, d; 0 !== c; )
    (d = Math.floor(Math.random() * c)),
      --c,
      (b = a[c]),
      (a[c] = a[d]),
      (a[d] = b);
  return a;
}
function bubbleSort(a) {
  var c;
  do {
    c = !1;
    for (var b = 0; b < a.length - 1; b++)
      a[b] > a[b + 1] &&
        ((c = a[b]), (a[b] = a[b + 1]), (a[b + 1] = c), (c = !0));
  } while (c);
}
function compare(a, c) {
  return a.index > c.index ? -1 : a.index < c.index ? 1 : 0;
}
function formatTime(a) {
  a /= 1e3;
  var c = Math.floor(a / 60);
  a = Math.floor(a - 60 * c);
  var b = "",
    b = 10 > c ? b + ("0" + c + ":") : b + (c + ":");
  return 10 > a ? b + ("0" + a) : b + a;
}
function degreesToRadians(a) {
  return (a * Math.PI) / 180;
}
function NoClickDelay(a) {
  this.element = a;
  window.Touch && this.element.addEventListener("touchstart", this, !1);
}
function shuffle(a) {
  for (var c = a.length, b, d; 0 < c; )
    (d = Math.floor(Math.random() * c)),
      c--,
      (b = a[c]),
      (a[c] = a[d]),
      (a[d] = b);
  return a;
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
      3 == a.nodeType && (a = a.parentNode);
      var c = document.createEvent("MouseEvents");
      c.initEvent("click", !0, !0);
      a.dispatchEvent(c);
    }
  },
};
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
function playSound(a, c, b) {
  return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile
    ? createjs.Sound.play(a, { loop: b, volume: c })
    : null;
}
function stopSound(a) {
  (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || a.stop();
}
function setVolume(a, c) {
  if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) a.volume = c;
}
function setMute(a, c) {
  (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || a.setMute(c);
}
function CSpriteLibrary() {
  var a, c, b, d, e, f;
  this.init = function (g, h, q) {
    b = c = 0;
    d = g;
    e = h;
    f = q;
    a = {};
  };
  this.addSprite = function (b, d) {
    a.hasOwnProperty(b) || ((a[b] = { szPath: d, oSprite: new Image() }), c++);
  };
  this.getSprite = function (b) {
    return a.hasOwnProperty(b) ? a[b].oSprite : null;
  };
  this._onSpritesLoaded = function () {
    e.call(f);
  };
  this._onSpriteLoaded = function () {
    d.call(f);
    ++b == c && this._onSpritesLoaded();
  };
  this.loadSprites = function () {
    for (var b in a)
      (a[b].oSprite.oSpriteLibrary = this),
        (a[b].oSprite.onload = function () {
          this.oSpriteLibrary._onSpriteLoaded();
        }),
        (a[b].oSprite.src = a[b].szPath);
  };
  this.getNumSprites = function () {
    return c;
  };
}
var CANVAS_WIDTH = 1024,
  CANVAS_HEIGHT = 1400,
  EDGEBOARD_X = 128,
  EDGEBOARD_Y = 188,
  DISABLE_SOUND_MOBILE = !1,
  PRIMARY_FONT = "arialbold",
  FPS_TIME = 1e3 / 24,
  STATE_LOADING = 0,
  STATE_MENU = 1,
  STATE_HELP = 1,
  STATE_GAME = 3,
  ON_MOUSE_DOWN = 0,
  ON_MOUSE_UP = 1,
  ON_MOUSE_OVER = 2,
  ON_MOUSE_OUT = 3,
  ON_DRAG_START = 4,
  ON_DRAG_END = 5,
  GRID_COLS = 8,
  GRID_ROWS = 13,
  GRID_SIZE,
  GRID_OFFSET_X = 195,
  GRID_OFFSET_Y = 2 + EDGEBOARD_Y,
  TIME_SHOW_NEW_BLOCK,
  NUM_COLORS = 6,
  BLOCK_SPEED,
  BLOCK_DOWN_SPEED,
  BLOCK_EMPTY = 0,
  BLOCK_LINE = 3,
  STATE_MOVE = 1,
  STATE_LINE = 2,
  STATE_FALL = 3,
  NUM_LIVES = 3,
  BUT_LEFT_X = 40,
  BUT_LEFT_Y = 400,
  BUT_RIGHT_X = 280,
  BUT_RIGHT_Y = 400,
  TEXT_PLAY = "PLAY",
  TEXT_SCORE = "SCORE",
  TEXT_GAME_OVER = "GAME OVER",
  TEXT_NEXT = "NEXT",
  TEXT_HELP = "MATCH 3 OR MORE SIMILAR ELEMENTS, USING ARROW KEYS OR BUTTONS",
  TEXT_SHARE_IMAGE = "200x200.jpg",
  TEXT_SHARE_TITLE = "Congratulations!",
  TEXT_SHARE_MSG1 = "You collected <strong>",
  TEXT_SHARE_MSG2 =
    " points</strong>!<br><br>Share your score with your friends!",
  TEXT_SHARE_SHARE1 = "My score is ",
  TEXT_SHARE_SHARE2 = " points! Can you do better?";
function CPreloader() {
  var a, c, b, d, e, f, g;
  this._init = function () {
    s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
    s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
    s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
    s_oSpriteLibrary.loadSprites();
    g = new createjs.Container();
    s_oStage.addChild(g);
  };
  this.unload = function () {
    g.removeAllChildren();
  };
  this.hide = function () {
    var a = this;
    setTimeout(function () {
      createjs.Tween.get(f)
        .to({ alpha: 1 }, 500)
        .call(function () {
          a.unload();
          s_oMain.gotoMenu();
        });
    }, 1e3);
  };
  this._onImagesLoaded = function () {};
  this._onAllImagesLoaded = function () {
    this.attachSprites();
    s_oMain.preloaderReady();
  };
  this.attachSprites = function () {
    var h = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
    g.addChild(h);
    h = s_oSpriteLibrary.getSprite("progress_bar");
    d = createBitmap(h);
    d.x = CANVAS_WIDTH / 2 - h.width / 2;
    d.y = CANVAS_HEIGHT - 270;
    g.addChild(d);
    a = h.width;
    c = h.height;
    e = new createjs.Shape();
    e.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(d.x, d.y, 1, c);
    g.addChild(e);
    d.mask = e;
    b = new createjs.Text("", "30px " + PRIMARY_FONT, "#fff");
    b.x = CANVAS_WIDTH / 2;
    b.y = CANVAS_HEIGHT - 225;
    b.shadow = new createjs.Shadow("#000", 2, 2, 2);
    b.textBaseline = "alphabetic";
    b.textAlign = "center";
    g.addChild(b);
    f = new createjs.Shape();
    f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    f.alpha = 0;
    g.addChild(f);
  };
  this.refreshLoader = function (g) {
    b.text = g + "%";
    e.graphics.clear();
    g = Math.floor((g * a) / 100);
    e.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(d.x, d.y, g, c);
  };
  this._init();
}
function CMain(a) {
  var c,
    b = 0,
    d = 0,
    e = STATE_LOADING,
    f,
    g;
  this.initContainer = function () {
    var a = document.getElementById("canvas");
    s_oStage = new createjs.Stage(a);
    s_oStage.preventSelection = !1;
    createjs.Touch.enable(s_oStage);
    s_bMobile = jQuery.browser.mobile;
    s_iPrevTime = new Date().getTime();
    createjs.Ticker.addEventListener("tick", this._update);
    s_oSpriteLibrary = new CSpriteLibrary();
    f = new CPreloader();
    navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
  };
  this.preloaderReady = function () {
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) || this._initSounds();
    this._loadImages();
    c = !0;
  };
  this._initSounds = function () {
    createjs.Sound.initializeDefaultPlugins() &&
      (0 < navigator.userAgent.indexOf("Opera") ||
      0 < navigator.userAgent.indexOf("OPR")
        ? ((createjs.Sound.alternateExtensions = ["mp3"]),
          createjs.Sound.addEventListener(
            "fileload",
            createjs.proxy(this.handleFileLoad, this)
          ),
          createjs.Sound.registerSound("./sounds/soundtrack.ogg", "soundtrack"),
          createjs.Sound.registerSound("./sounds/move.ogg", "move"),
          createjs.Sound.registerSound("./sounds/explosion.ogg", "explosion"))
        : ((createjs.Sound.alternateExtensions = ["ogg"]),
          createjs.Sound.addEventListener(
            "fileload",
            createjs.proxy(this.handleFileLoad, this)
          ),
          createjs.Sound.registerSound("./sounds/soundtrack.mp3", "soundtrack"),
          createjs.Sound.registerSound("./sounds/move.mp3", "move"),
          createjs.Sound.registerSound("./sounds/explosion.mp3", "explosion")),
      (d += 3));
  };
  this._loadImages = function () {
    s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
    s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
    s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
    s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
    s_oSpriteLibrary.addSprite("but_right", "./sprites/but_right.png");
    s_oSpriteLibrary.addSprite("but_left", "./sprites/but_left.png");
    s_oSpriteLibrary.addSprite("but_down", "./sprites/but_down.png");
    s_oSpriteLibrary.addSprite("but_up", "./sprites/but_up.png");
    s_oSpriteLibrary.addSprite("game_bg", "./sprites/bg_game.jpg");
    s_oSpriteLibrary.addSprite("block", "./sprites/block.png");
    s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
    s_oSpriteLibrary.addSprite("bg_help", "./sprites/bg_help.png");
    s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
    d += s_oSpriteLibrary.getNumSprites();
    s_oSpriteLibrary.loadSprites();
  };
  this.handleFileLoad = function (a) {
    b++;
    f.refreshLoader(Math.floor((b / d) * 100));
    b === d && (f.unload(), playSound("soundtrack", 0.5, -1), this.gotoMenu());
  };
  this._onImagesLoaded = function () {
    b++;
    f.refreshLoader(Math.floor((b / d) * 100));
    b === d && (f.unload(), playSound("soundtrack", 0.5, -1), this.gotoMenu());
  };
  this._onAllImagesLoaded = function () {};
  this.onAllPreloaderImagesLoaded = function () {
    this._loadImages();
  };
  this.gotoMenu = function () {
    new CMenu();
    e = STATE_MENU;
  };
  this.gotoGame = function () {
    g = new CGame(a);
    e = STATE_GAME;
  };
  this.gotoHelp = function () {
    new CHelp();
    e = STATE_HELP;
  };
  this.stopUpdate = function () {
    c = !1;
    createjs.Ticker.paused = !0;
    $("#block_game").css("display", "block");
  };
  this.startUpdate = function () {
    s_iPrevTime = new Date().getTime();
    c = !0;
    createjs.Ticker.paused = !1;
    $("#block_game").css("display", "none");
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
      e === STATE_GAME && g.update();
      s_oStage.update(a);
    }
  };
  s_oMain = this;
  this.initContainer();
}
var s_iCntTime = 0,
  s_iTimeElaps = 0,
  s_iPrevTime = 0,
  s_iCntFps = 0,
  s_iCurFps = 0,
  s_bMobile,
  s_bAudioActive = !0,
  s_oDrawLayer,
  s_oStage,
  s_oMain,
  s_oSpriteLibrary;
function CGfxButton(a, c, b, d) {
  var e, f, g;
  this._init = function (a, b, d, c) {
    e = [];
    f = [];
    g = createBitmap(d);
    g.x = a;
    g.y = b;
    g.regX = d.width / 2;
    g.regY = d.height / 2;
    c && s_oStage.addChild(g);
    this._initListener();
  };
  this.unload = function () {
    g.off("mousedown", this.buttonDown);
    g.off("pressup", this.buttonRelease);
    s_oStage.removeChild(g);
  };
  this.setVisible = function (a) {
    g.visible = a;
  };
  this._initListener = function () {
    g.on("mousedown", this.buttonDown);
    g.on("pressup", this.buttonRelease);
  };
  this.addEventListener = function (a, b, d) {
    e[a] = b;
    f[a] = d;
  };
  this.buttonRelease = function () {
    g.scaleX = 1;
    g.scaleY = 1;
    e[ON_MOUSE_UP] && e[ON_MOUSE_UP].call(f[ON_MOUSE_UP]);
  };
  this.buttonDown = function () {
    g.scaleX = 0.9;
    g.scaleY = 0.9;
    e[ON_MOUSE_DOWN] && e[ON_MOUSE_DOWN].call(f[ON_MOUSE_DOWN]);
  };
  this.setPosition = function (a, b) {
    g.x = a;
    g.y = b;
  };
  this.setX = function (a) {
    g.x = a;
  };
  this.setY = function (a) {
    g.y = a;
  };
  this.getButtonImage = function () {
    return g;
  };
  this.getX = function () {
    return g.x;
  };
  this.getY = function () {
    return g.y;
  };
  this._init(a, c, b, d);
  return this;
}
function CTextButton(a, c, b, d, e, f, g) {
  var h, q, k;
  this._init = function (a, b, d, c, g, e, f) {
    h = [];
    q = [];
    var y = createBitmap(d),
      B = Math.ceil(f / 20),
      u = new createjs.Text(c, "bold " + f + "px " + g, "#000000");
    u.textAlign = "center";
    var G = u.getBounds();
    u.x = d.width / 2 + B;
    u.y = (d.height - G.height) / 2 + B;
    c = new createjs.Text(c, "bold " + f + "px " + g, e);
    c.textAlign = "center";
    G = c.getBounds();
    c.x = d.width / 2;
    c.y = (d.height - G.height) / 2;
    k = new createjs.Container();
    k.x = a;
    k.y = b;
    k.regX = d.width / 2;
    k.regY = d.height / 2;
    k.addChild(y, u, c);
    s_oStage.addChild(k);
    this._initListener();
  };
  this.unload = function () {
    k.off("mousedown");
    k.off("pressup");
  };
  this.setVisible = function (a) {
    k.visible = a;
  };
  this._initListener = function () {
    oParent = this;
    k.on("mousedown", this.buttonDown);
    k.on("pressup", this.buttonRelease);
  };
  this.addEventListener = function (a, b, d) {
    h[a] = b;
    q[a] = d;
  };
  this.buttonRelease = function () {
    k.scaleX = 1;
    k.scaleY = 1;
    h[ON_MOUSE_UP] && h[ON_MOUSE_UP].call(q[ON_MOUSE_UP]);
  };
  this.buttonDown = function () {
    k.scaleX = 0.9;
    k.scaleY = 0.9;
    h[ON_MOUSE_DOWN] && h[ON_MOUSE_DOWN].call(q[ON_MOUSE_DOWN]);
  };
  this.setPosition = function (a, b) {
    k.x = a;
    k.y = b;
  };
  this.setX = function (a) {
    k.x = a;
  };
  this.setY = function (a) {
    k.y = a;
  };
  this.getButtonImage = function () {
    return k;
  };
  this.getX = function () {
    return k.x;
  };
  this.getY = function () {
    return k.y;
  };
  this._init(a, c, b, d, e, f, g);
  return this;
}
function CToggle(a, c, b) {
  var d, e, f;
  this._init = function (a, b, c) {
    d = [];
    e = [];
    var k = new createjs.SpriteSheet({
      images: [c],
      frames: {
        width: c.width / 2,
        height: c.height,
        regX: c.width / 2 / 2,
        regY: c.height / 2,
      },
      animations: { on: [0, 1], off: [1, 2] },
    });
    f = s_bAudioActive
      ? createSprite(
          k,
          "on",
          c.width / 2 / 2,
          c.height / 2,
          c.width / 2,
          c.height
        )
      : createSprite(
          k,
          "off",
          c.width / 2 / 2,
          c.height / 2,
          c.width / 2,
          c.height
        );
    f.x = a;
    f.y = b;
    f.stop();
    s_oStage.addChild(f);
    this._initListener();
  };
  this.unload = function () {
    f.off("mousedown", this.buttonDown);
    f.off("pressup", this.buttonRelease);
    s_oStage.removeChild(f);
  };
  this._initListener = function () {
    f.on("mousedown", this.buttonDown);
    f.on("pressup", this.buttonRelease);
  };
  this.addEventListener = function (a, b, c) {
    d[a] = b;
    e[a] = c;
  };
  this.setPosition = function (a, b) {
    f.x = a;
    f.y = b;
  };
  this.buttonRelease = function () {
    f.scaleX = 1;
    f.scaleY = 1;
    (s_bAudioActive = !s_bAudioActive)
      ? f.gotoAndStop("on")
      : f.gotoAndStop("off");
    d[ON_MOUSE_UP] && d[ON_MOUSE_UP].call(e[ON_MOUSE_UP]);
  };
  this.buttonDown = function () {
    f.scaleX = 0.9;
    f.scaleY = 0.9;
    d[ON_MOUSE_DOWN] && d[ON_MOUSE_DOWN].call(e[ON_MOUSE_DOWN]);
  };
  this._init(a, c, b);
}
function CMenu() {
  var a, c, b, d, e, f;
  this._init = function () {
    b = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
    s_oStage.addChild(b);
    var g = s_oSpriteLibrary.getSprite("but_play");
    d = new CTextButton(
      CANVAS_WIDTH / 2,
      CANVAS_HEIGHT - 250,
      g,
      TEXT_PLAY,
      PRIMARY_FONT,
      "#ffffff",
      40
    );
    d.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this);
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile)
      (g = s_oSpriteLibrary.getSprite("audio_icon")),
        (a = CANVAS_WIDTH - g.height / 2 - 10),
        (c = g.height / 2 + 10),
        (e = new CToggle(a, c, g)),
        e.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
    f = new createjs.Shape();
    f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    s_oStage.addChild(f);
    createjs.Tween.get(f)
      .to({ alpha: 0 }, 1e3)
      .call(function () {
        f.visible = !1;
      });
    this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
  };
  this.refreshButtonPos = function (b, d) {
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) ||
      e.setPosition(a - b, d + c);
  };
  this.unload = function () {
    d.unload();
    d = null;
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) e.unload(), (e = null);
    s_oStage.removeAllChildren();
    s_oMenu = b = null;
  };
  this._onButPlayRelease = function () {
    this.unload();
    s_oMain.gotoGame();
    $(s_oMain).trigger("start_session");
  };
  this._onAudioToggle = function () {
    createjs.Sound.setMute(!s_bAudioActive);
  };
  s_oMenu = this;
  this._init();
}
var s_oMenu = null;
function CGame(a) {
  function c(a) {
    if (t) return a.preventDefault(), !1;
    a || (a = window.event);
    switch (a.keyCode) {
      case 37:
        s_oGame.shiftLeft();
        break;
      case 38:
        s_oGame.releaseButUp();
        break;
      case 39:
        s_oGame.shiftRight();
        break;
      case 40:
        s_oGame.pressButDown();
    }
    a.preventDefault();
    return !1;
  }
  var b = 0,
    d = [],
    e = [],
    f = [],
    g,
    h,
    q,
    k,
    v,
    w,
    x,
    t = !0,
    A,
    r = 0,
    p,
    y,
    B;
  this._init = function () {
    !1 === s_bMobile && (document.onkeydown = c);
    var a = createBitmap(s_oSpriteLibrary.getSprite("game_bg"));
    s_oStage.addChild(a);
    for (a = 0; a < GRID_COLS; a++)
      (d[a] = Array(GRID_ROWS)),
        (e[a] = Array(GRID_ROWS)),
        (f[a] = Array(GRID_ROWS));
    for (var b = {}, a = 0; a < NUM_COLORS; a++)
      b["block_" + (a + 1)] = [a, a + 1];
    b.invisible = [-1, 0];
    for (
      var a = {
          images: [s_oSpriteLibrary.getSprite("block")],
          frames: { width: GRID_SIZE, height: GRID_SIZE },
          animations: b,
        },
        b = new createjs.SpriteSheet(a),
        l = 0;
      l < GRID_ROWS;
      l++
    )
      for (a = 0; a < GRID_COLS; a++) {
        d[a][l] = BLOCK_EMPTY;
        var m = createSprite(b, "invisible", 0, 0, GRID_SIZE, GRID_SIZE);
        m.stop();
        f[a][l] = m;
        m.x = GRID_OFFSET_X + a * GRID_SIZE;
        m.y = GRID_OFFSET_Y + l * GRID_SIZE;
        s_oStage.addChild(m);
      }
    do
      (v = Math.floor(1 + Math.random() * NUM_COLORS)),
        (w = Math.floor(1 + Math.random() * NUM_COLORS)),
        (x = Math.floor(1 + Math.random() * NUM_COLORS));
    while (v === w && v === x && w === x);
    p = new CFallingBlock(b);
    y = new CInterface(b);
    a = s_oSpriteLibrary.getSprite("bg_help");
    B = new CHelp(a);
    this.setFallingInfo();
    A = 0;
    g = STATE_MOVE;
  };
  this.unload = function () {
    !1 === s_bMobile && (document.onkeydown = null);
    B.unload();
    y.unload();
    s_oStage.removeAllChildren();
  };
  this.onExitHelp = function () {
    t = !1;
    $(s_oMain).trigger("start_level");
  };
  this.setFallingInfo = function () {
    p.setSpeed(BLOCK_SPEED + b);
    var a = Math.floor(GRID_COLS / 2) * GRID_SIZE;
    p.setY(0);
    p.setX(GRID_OFFSET_X + a);
    h = v;
    q = w;
    k = x;
    this.refreshFallingBlock();
    do
      (v = Math.floor(1 + Math.random() * NUM_COLORS)),
        (w = Math.floor(1 + Math.random() * NUM_COLORS)),
        (x = Math.floor(1 + Math.random() * NUM_COLORS));
    while (v === w && v === x && w === x);
    y.setNextBlock(v, w, x);
  };
  this.refreshFallingBlock = function () {
    p.setBlock(h, q, k);
  };
  this.blockDown = function () {
    if (A > TIME_SHOW_NEW_BLOCK) {
      var a = Math.floor((p.getX() - GRID_OFFSET_X) / GRID_SIZE),
        b = Math.floor((p.getY() + p.getSpeed() - GRID_OFFSET_Y) / GRID_SIZE);
      p.getY() + p.getSpeed() < GRID_OFFSET_Y + GRID_ROWS * GRID_SIZE &&
      (d[a][b] === BLOCK_EMPTY || void 0 === d[a][b])
        ? (y.setNextBlock(v, w, x), p.increaseHeight())
        : p.getY() < GRID_OFFSET_Y + 3 * GRID_SIZE
        ? this.gameOver()
        : ((A = 0),
          this.putBlk(a, b - 1, h),
          this.putBlk(a, b - 2, q),
          this.putBlk(a, b - 3, k),
          this.setFallingInfo(),
          (g = STATE_LINE));
    }
  };
  this.putBlk = function (a, b, c) {
    0 <= b && ((d[a][b] = c), f[a][b].gotoAndStop("block_" + c));
  };
  this.checkColorMatching = function () {
    var a, c;
    t = !1;
    for (var l = 0; l < GRID_ROWS; l++)
      for (var m = 0; m < GRID_COLS; m++) e[m][l] = !1;
    for (l = 0; l < GRID_ROWS; l++)
      for (var k = 0; k < GRID_COLS; k++)
        if (d[k][l] !== BLOCK_EMPTY) {
          a = d[k][l];
          c = 0;
          for (var n = k; n < GRID_COLS; n++)
            if (d[n][l] === a) c++;
            else {
              n--;
              break;
            }
          if (c >= BLOCK_LINE) {
            t = !0;
            n === GRID_COLS && n--;
            for (m = k; m <= n; m++) e[m][l] = !0;
            r += c * c;
          }
          k = n;
        }
    for (m = 0; m < GRID_COLS; m++)
      for (n = 0; n < GRID_ROWS; n++)
        if (d[m][n] !== BLOCK_EMPTY) {
          a = d[m][n];
          c = 0;
          for (var h = n; h < GRID_ROWS; h++)
            if (d[m][h] === a) c++;
            else {
              h--;
              break;
            }
          if (c >= BLOCK_LINE) {
            t = !0;
            h === GRID_ROWS && h--;
            for (l = n; l <= h; l++) e[m][l] = !0;
            r += c * c;
          }
          n = h;
        }
    for (l = 0; l < GRID_ROWS - (BLOCK_LINE - 1); l++)
      for (m = 0; m < GRID_COLS - (BLOCK_LINE - 1); m++)
        if (((n = m), (h = l), (a = d[n][h]), a !== BLOCK_EMPTY)) {
          for (c = 0; n < GRID_COLS && h < GRID_ROWS && d[n][h] === a; )
            c++, n++, h++;
          if (c >= BLOCK_LINE) {
            t = !0;
            h--;
            k = m;
            for (n = l; n <= h; ) e[k++][n++] = !0;
            r += c * c * 2;
          }
        }
    for (l = 0; l < GRID_ROWS - (BLOCK_LINE - 1); l++)
      for (m = GRID_COLS - 1; m >= BLOCK_LINE - 1; m--)
        if (((n = m), (h = l), (a = d[n][h]), a !== BLOCK_EMPTY)) {
          for (c = 0; 0 <= n && h < GRID_ROWS && d[n][h] === a; ) c++, n--, h++;
          if (c >= BLOCK_LINE) {
            t = !0;
            h--;
            k = m;
            for (n = l; n <= h; ) e[k--][n++] = !0;
            r += c * c * 2;
          }
        }
    if (t) {
      playSound("explosion", 1, 0);
      for (l = 0; l < GRID_ROWS; l++)
        for (m = 0; m < GRID_COLS; m++)
          e[m][l] &&
            ((d[m][l] = BLOCK_EMPTY), f[m][l].gotoAndStop("invisible"));
      y.refreshScore(r);
      b = Math.floor(r / 100);
      g = STATE_FALL;
      t = !1;
    } else g = STATE_MOVE;
  };
  this.blockFall = function () {
    for (var a = !1, b = GRID_ROWS - 1; 0 < b; b--)
      for (var c = 0; c < GRID_COLS; c++)
        if (d[c][b] === BLOCK_EMPTY && d[c][b - 1] !== BLOCK_EMPTY) {
          var a = !0,
            e = d[c][b - 1];
          d[c][b] = e;
          f[c][b].gotoAndStop("block_" + e);
          d[c][b - 1] = BLOCK_EMPTY;
          f[c][b - 1].gotoAndStop("invisible");
        }
    a || (g = STATE_LINE);
  };
  this.gameOver = function () {
    t = !0;
    y.gameOver(r);
    $(s_oMain).trigger("end_level");
    $(s_oMain).trigger("show_interlevel_ad");
  };
  this.shiftLeft = function () {
    if (g === STATE_MOVE) {
      playSound("move", 1, 0);
      var a = Math.floor((p.getX() - GRID_OFFSET_X) / GRID_SIZE),
        b = Math.floor((p.getY() - GRID_OFFSET_Y) / GRID_SIZE);
      0 < a &&
        0 < p.getX() &&
        d[a - 1][b + 1] === BLOCK_EMPTY &&
        p.setX(p.getX() - GRID_SIZE);
    }
  };
  this.shiftRight = function () {
    if (g === STATE_MOVE) {
      playSound("move", 1, 0);
      var a = Math.floor((p.getX() - GRID_OFFSET_X) / GRID_SIZE),
        b = Math.floor((p.getY() - GRID_OFFSET_Y) / GRID_SIZE);
      p.getX() < GRID_OFFSET_X + (GRID_COLS - 1) * GRID_SIZE &&
        d[a][b + 1] === BLOCK_EMPTY &&
        p.setX(p.getX() + GRID_SIZE);
    }
  };
  this.pressButDown = function () {
    100 > p.getY() || (playSound("move", 1, 0), p.setSpeed(BLOCK_DOWN_SPEED));
  };
  this.releaseButUp = function () {
    var a = k;
    k = q;
    q = h;
    h = a;
    this.refreshFallingBlock();
  };
  this.onExit = function () {
    this.unload();
    $(s_oMain).trigger("end_level");
    $(s_oMain).trigger("share_event", r);
    $(s_oMain).trigger("end_session");
    s_oMain.gotoMenu();
  };
  this.update = function () {
    if (!t)
      switch (((A += s_iTimeElaps), g)) {
        case STATE_MOVE:
          this.blockDown();
          break;
        case STATE_LINE:
          this.checkColorMatching();
          break;
        case STATE_FALL:
          this.blockFall();
      }
  };
  s_oGame = this;
  var u = CANVAS_HEIGHT / 480,
    u = u.toFixed(2);
  GRID_SIZE = s_oSpriteLibrary.getSprite("block").width / NUM_COLORS;
  TIME_SHOW_NEW_BLOCK = a.time_show_block;
  BLOCK_SPEED = a.speed * u;
  BLOCK_DOWN_SPEED = a.speed_down * u;
  this._init();
}
var s_oGame;
function CInterface(a) {
  var c,
    b,
    d,
    e,
    f,
    g,
    h,
    q,
    k = CANVAS_WIDTH - 100,
    v = 260 + 2 * GRID_SIZE,
    w = CANVAS_WIDTH - 100,
    x = 260 + GRID_SIZE,
    t = CANVAS_WIDTH - 100,
    A = EDGEBOARD_X + 60,
    r = CANVAS_HEIGHT - 60,
    p = EDGEBOARD_X + 700,
    y = CANVAS_HEIGHT - 60,
    B = EDGEBOARD_X + 580,
    u = CANVAS_HEIGHT - 60,
    G = EDGEBOARD_X + 180,
    M = CANVAS_HEIGHT - 60,
    l,
    m,
    z,
    n,
    I,
    J,
    K,
    L,
    H,
    C,
    D,
    E,
    F,
    N;
  this._init = function (a) {
    l = createSprite(a, "invisible", 0, 0, GRID_SIZE, GRID_SIZE);
    l.stop();
    l.x = k;
    l.y = v;
    m = createSprite(a, "invisible", 0, 0, GRID_SIZE, GRID_SIZE);
    m.stop();
    m.x = w;
    m.y = x;
    z = createSprite(a, "invisible", 0, 0, GRID_SIZE, GRID_SIZE);
    z.stop();
    z.x = t;
    z.y = 260;
    s_oStage.addChild(l);
    s_oStage.addChild(m);
    s_oStage.addChild(z);
    a = s_oSpriteLibrary.getSprite("but_left");
    I = new CGfxButton(A, r, a, !0);
    I.addEventListener(ON_MOUSE_DOWN, this._onReleaseLeft, this);
    a = s_oSpriteLibrary.getSprite("but_right");
    J = new CGfxButton(p, y, a, !0);
    J.addEventListener(ON_MOUSE_DOWN, this._onReleaseRight, this);
    a = s_oSpriteLibrary.getSprite("but_down");
    L = new CGfxButton(B, u, a, !0);
    L.addEventListener(ON_MOUSE_DOWN, this._onReleaseButDown, this);
    a = s_oSpriteLibrary.getSprite("but_up");
    K = new CGfxButton(G, M, a, !0);
    K.addEventListener(ON_MOUSE_DOWN, this._onReleaseButUp, this);
    a = s_oSpriteLibrary.getSprite("but_exit");
    f = CANVAS_WIDTH - a.width / 2 - 10;
    g = 10 + a.height / 2;
    n = new CGfxButton(f, g, a, !0);
    n.addEventListener(ON_MOUSE_UP, this._onExit, this);
    if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile)
      (a = s_oSpriteLibrary.getSprite("audio_icon")),
        (h = CANVAS_WIDTH - a.height / 2 - 10),
        (q = 180),
        (H = new CToggle(h, q, a)),
        H.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
    d = CANVAS_WIDTH / 2;
    e = CANVAS_HEIGHT - 72;
    C = new createjs.Text("0 PT", "40px " + PRIMARY_FONT, "#000000");
    C.textAlign = "center";
    C.x = d + 2;
    C.y = e + 2;
    s_oStage.addChild(C);
    D = new createjs.Text("0 PT", "40px " + PRIMARY_FONT, "#ffffff");
    D.textAlign = "center";
    D.x = d;
    D.y = e;
    s_oStage.addChild(D);
    c = CANVAS_WIDTH - 110;
    b = 470;
    F = new createjs.Text(TEXT_NEXT, "32px " + PRIMARY_FONT, "#000000");
    F.x = c + 2;
    F.y = b + 2;
    s_oStage.addChild(F);
    E = new createjs.Text(TEXT_NEXT, "32px " + PRIMARY_FONT, "#ffffff");
    E.x = c;
    E.y = b;
    s_oStage.addChild(E);
    N = new CEndPanel(s_oSpriteLibrary.getSprite("msg_box"));
    this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
  };
  this.refreshButtonPos = function (a, d) {
    n.setPosition(f - a, g + d);
    (!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile) ||
      H.setPosition(h - a, d + q);
    I.setPosition(A, r - d);
    J.setPosition(p, y - d);
    L.setPosition(B, u - d);
    K.setPosition(G, M - d);
    l.x = k - a;
    l.y = v + d;
    m.x = w - a;
    m.y = x + d;
    z.x = t - a;
    z.y = 260 + d;
    E.x = c - a;
    E.y = b + d;
    F.x = c - a;
    F.y = b + d + 2;
    D.y = e - d;
    C.y = e - d;
  };
  this.unload = function () {
    n.unload();
    n = null;
    I.unload();
    I = null;
    J.unload();
    J = null;
    L.unload();
    L = null;
    K.unload();
    K = null;
    H && (H.unload(), (H = null));
    s_oStage.removeChild(D);
    s_oStage.removeChild(C);
    s_oStage.removeChild(F);
    s_oStage.removeChild(E);
    s_oStage.removeChild(l);
    s_oStage.removeChild(m);
    s_oStage.removeChild(z);
  };
  this.setNextBlock = function (a, b, c) {
    l.gotoAndStop("block_" + a);
    m.gotoAndStop("block_" + b);
    z.gotoAndStop("block_" + c);
  };
  this.refreshScore = function (a) {
    D.text = a + " PT";
    C.text = a + " PT";
  };
  this.gameOver = function (a) {
    N.show(a);
  };
  this._onReleaseLeft = function () {
    s_oGame.shiftLeft();
  };
  this._onReleaseRight = function () {
    s_oGame.shiftRight();
  };
  this._onReleaseButDown = function () {
    s_oGame.pressButDown();
  };
  this._onReleaseButUp = function () {
    s_oGame.releaseButUp();
  };
  this._onAudioToggle = function () {
    createjs.Sound.setMute(!s_bAudioActive);
  };
  this._onExit = function () {
    s_oGame.onExit();
  };
  s_oInterface = this;
  this._init(a);
  return this;
}
var s_oInterface = null;
function CFallingBlock(a) {
  var c = BLOCK_SPEED,
    b,
    d,
    e,
    f;
  this._init = function (a) {
    b = new createjs.Container();
    d = createSprite(a, "invisible", 0, 0, GRID_SIZE, GRID_SIZE);
    d.y = 2 * GRID_SIZE;
    e = createSprite(a, "invisible", 0, 0, GRID_SIZE, GRID_SIZE);
    e.y = GRID_SIZE;
    f = createSprite(a, "invisible", 0, 0, GRID_SIZE, GRID_SIZE);
    f.y = 0;
    b.addChild(d);
    b.addChild(e);
    b.addChild(f);
    b.regY = 3 * GRID_SIZE;
    s_oStage.addChild(b);
  };
  this.setBlock = function (a, b, c) {
    d.gotoAndStop("block_" + a);
    e.gotoAndStop("block_" + b);
    f.gotoAndStop("block_" + c);
  };
  this.decreaseY = function (a) {
    b.y -= a;
  };
  this.increaseHeight = function () {
    b.y += c;
  };
  this.setSpeed = function (a) {
    c = a;
  };
  this.setX = function (a) {
    b.x = a;
  };
  this.setY = function (a) {
    b.y = a;
  };
  this.getX = function () {
    return b.x;
  };
  this.getY = function () {
    return b.y;
  };
  this.getSpeed = function () {
    return c;
  };
  this._init(a);
  return this;
}
function CEndPanel(a) {
  var c, b, d, e, f, g;
  this._init = function (a) {
    c = createBitmap(a);
    f = new createjs.Text("", "56px " + PRIMARY_FONT, "#000");
    f.x = CANVAS_WIDTH / 2 + 2;
    f.y = CANVAS_HEIGHT / 2 - 76;
    f.textAlign = "center";
    e = new createjs.Text("", "56px " + PRIMARY_FONT, "#ffffff");
    e.x = CANVAS_WIDTH / 2;
    e.y = CANVAS_HEIGHT / 2 - 80;
    e.textAlign = "center";
    b = new createjs.Text("", "40px " + PRIMARY_FONT, "#000");
    b.x = CANVAS_WIDTH / 2 + 2;
    b.y = CANVAS_HEIGHT / 2 + 22;
    b.textAlign = "center";
    d = new createjs.Text("", "40px " + PRIMARY_FONT, "#ffffff");
    d.x = CANVAS_WIDTH / 2;
    d.y = CANVAS_HEIGHT / 2 + 20;
    d.textAlign = "center";
    g = new createjs.Container();
    g.alpha = 0;
    g.visible = !1;
    g.addChild(c, b, d, f, e);
    s_oStage.addChild(g);
  };
  this._initListener = function () {
    g.on("mousedown", this._onExit);
  };
  this.show = function (a) {
    f.text = TEXT_GAME_OVER;
    e.text = TEXT_GAME_OVER;
    b.text = TEXT_SCORE + ": " + a;
    d.text = TEXT_SCORE + ": " + a;
    g.visible = !0;
    var c = this;
    createjs.Tween.get(g)
      .to({ alpha: 1 }, 500)
      .call(function () {
        c._initListener();
      });
    $(s_oMain).trigger("save_score", a);
  };
  this._onExit = function () {
    g.off("mousedown");
    s_oGame.onExit();
  };
  this._init(a);
}
function CHelp(a) {
  var c, b;
  this._init = function (a) {
    b = createBitmap(a);
    s_oStage.addChild(b);
    var e = this;
    b.on("pressup", function () {
      e._onExitHelp();
    });
    c = new createjs.Text(TEXT_HELP, "38px " + PRIMARY_FONT, "#ffffff");
    c.shadow = new createjs.Shadow("#000000", 2, 2, 2);
    c.textAlign = "center";
    c.x = CANVAS_WIDTH / 2;
    c.y = 520;
    c.lineWidth = 420;
    s_oStage.addChild(c);
  };
  this.unload = function () {
    s_oStage.removeChild(b);
    s_oStage.removeChild(c);
    var a = this;
    b.off("pressup", function () {
      a._onExitHelp();
    });
  };
  this._onExitHelp = function () {
    this.unload();
    s_oGame.onExitHelp();
  };
  this._init(a);
}
