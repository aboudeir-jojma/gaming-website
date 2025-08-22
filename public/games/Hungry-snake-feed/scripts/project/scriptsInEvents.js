var confetti = {
  maxCount: 150,
  speed: 2,
  frameInterval: 15,
  alpha: 1,
  gradient: !1,
  start: null,
  stop: null,
  toggle: null,
  pause: null,
  resume: null,
  togglePause: null,
  remove: null,
  isPaused: null,
  isRunning: null,
};
!(function () {
  (confetti.start = s),
    (confetti.stop = w),
    (confetti.toggle = function () {
      e ? w() : s();
    }),
    (confetti.pause = u),
    (confetti.resume = m),
    (confetti.togglePause = function () {
      i ? m() : u();
    }),
    (confetti.isPaused = function () {
      return i;
    }),
    (confetti.remove = function () {
      stop(), (i = !1), (a = []);
    }),
    (confetti.isRunning = function () {
      return e;
    });
  var t =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame,
    n = [
      "rgba(30,144,255,",
      "rgba(107,142,35,",
      "rgba(255,215,0,",
      "rgba(255,192,203,",
      "rgba(106,90,205,",
      "rgba(173,216,230,",
      "rgba(238,130,238,",
      "rgba(152,251,152,",
      "rgba(70,130,180,",
      "rgba(244,164,96,",
      "rgba(210,105,30,",
      "rgba(220,20,60,",
    ],
    e = !1,
    i = !1,
    o = Date.now(),
    a = [],
    r = 0,
    l = null;
  function d(t, e, i) {
    return (
      (t.color = n[(Math.random() * n.length) | 0] + (confetti.alpha + ")")),
      (t.color2 = n[(Math.random() * n.length) | 0] + (confetti.alpha + ")")),
      (t.x = Math.random() * e),
      (t.y = Math.random() * i - i),
      (t.diameter = 10 * Math.random() + 5),
      (t.tilt = 10 * Math.random() - 10),
      (t.tiltAngleIncrement = 0.07 * Math.random() + 0.05),
      (t.tiltAngle = Math.random() * Math.PI),
      t
    );
  }
  function u() {
    i = !0;
  }
  function m() {
    (i = !1), c();
  }
  function c() {
    if (!i)
      if (0 === a.length)
        l.clearRect(0, 0, window.innerWidth, window.innerHeight), null;
      else {
        var n = Date.now(),
          u = n - o;
        (!t || u > confetti.frameInterval) &&
          (l.clearRect(0, 0, window.innerWidth, window.innerHeight),
          (function () {
            var t,
              n = window.innerWidth,
              i = window.innerHeight;
            r += 0.01;
            for (var o = 0; o < a.length; o++)
              (t = a[o]),
                !e && t.y < -15
                  ? (t.y = i + 100)
                  : ((t.tiltAngle += t.tiltAngleIncrement),
                    (t.x += Math.sin(r) - 0.5),
                    (t.y += 0.5 * (Math.cos(r) + t.diameter + confetti.speed)),
                    (t.tilt = 15 * Math.sin(t.tiltAngle))),
                (t.x > n + 20 || t.x < -20 || t.y > i) &&
                  (e && a.length <= confetti.maxCount
                    ? d(t, n, i)
                    : (a.splice(o, 1), o--));
          })(),
          (function (t) {
            for (var n, e, i, o, r = 0; r < a.length; r++) {
              if (
                ((n = a[r]),
                t.beginPath(),
                (t.lineWidth = n.diameter),
                (i = n.x + n.tilt),
                (e = i + n.diameter / 2),
                (o = n.y + n.tilt + n.diameter / 2),
                confetti.gradient)
              ) {
                var l = t.createLinearGradient(e, n.y, i, o);
                l.addColorStop("0", n.color),
                  l.addColorStop("1.0", n.color2),
                  (t.strokeStyle = l);
              } else t.strokeStyle = n.color;
              t.moveTo(e, n.y), t.lineTo(i, o), t.stroke();
            }
          })(l),
          (o = n - (u % confetti.frameInterval))),
          requestAnimationFrame(c);
      }
  }
  function s(t, n, o) {
    var r = window.innerWidth,
      u = window.innerHeight;
    window.requestAnimationFrame =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (t) {
        return window.setTimeout(t, confetti.frameInterval);
      };
    var m = document.getElementById("confetti-canvas");
    null === m
      ? ((m = document.createElement("canvas")).setAttribute(
          "id",
          "confetti-canvas"
        ),
        m.setAttribute(
          "style",
          "display:block;z-index:999999;pointer-events:none;position:fixed;top:0"
        ),
        document.body.prepend(m),
        (m.width = r),
        (m.height = u),
        window.addEventListener(
          "resize",
          function () {
            (m.width = window.innerWidth), (m.height = window.innerHeight);
          },
          !0
        ),
        (l = m.getContext("2d")))
      : null === l && (l = m.getContext("2d"));
    var s = confetti.maxCount;
    if (n)
      if (o)
        if (n == o) s = a.length + o;
        else {
          if (n > o) {
            var f = n;
            (n = o), (o = f);
          }
          s = a.length + ((Math.random() * (o - n) + n) | 0);
        }
      else s = a.length + n;
    else o && (s = a.length + o);
    for (; a.length < s; ) a.push(d({}, r, u));
    (e = !0), (i = !1), c(), t && window.setTimeout(w, t);
  }
  function w() {
    e = !1;
  }
})();

const scriptsInEvents = {
  async Game_Event11_Act1(runtime, localVars) {
    var snakebodies = runtime.objects.snakebody.getAllInstances();

    for (var i = 0; i < 15; i++) {
      var lastbody = getlastSnakeBody();

      var snakebody = runtime.objects.snakebody.createInstance(
        "body",
        lastbody.getImagePointX("body"),
        lastbody.getImagePointY("body")
      );

      runtime.globalVars.MAX_INDEX += 1;

      snakebody.instVars.index = runtime.globalVars.MAX_INDEX;
      snakebody.opacity = 0;
    }

    function getlastSnakeBody() {
      var body = null;
      snakebodies = runtime.objects.snakebody.getAllInstances();
      snakebodies.forEach(function (_body) {
        if (_body.instVars.index == runtime.globalVars.MAX_INDEX) body = _body;
      });

      return body;
    }
  },

  async Game_Event12_Act1(runtime, localVars) {
    var snakebodies = runtime.objects.snakebody.getAllInstances();

    for (var i = 21; i < runtime.globalVars.MAX_INDEX; i++) {
      var lastbody = getSnakeBodyWithId(i);

      lastbody.destroy();
    }

    runtime.globalVars.MAX_INDEX = 20;

    function getSnakeBodyWithId(_id) {
      var body = null;
      snakebodies = runtime.objects.snakebody.getAllInstances();
      snakebodies.forEach(function (_body) {
        if (_body.instVars.index == _id) body = _body;
      });

      return body;
    }
  },

  async Game_Event42_Act3(runtime, localVars) {
    confetti.start();
  },

  async Game_Event118_Act1(runtime, localVars) {
    confetti.remove();
  },

  async Game_Event146_Act1(runtime, localVars) {
    var snakehead = runtime.objects.snakemouthopen.getFirstInstance();

    var firstsnakebody = runtime.objects.snakebody.createInstance("body", 0, 0);

    firstsnakebody.instVars.index = 0;

    firstsnakebody.x = snakehead.getImagePointX("tail");
    firstsnakebody.y = snakehead.getImagePointY("tail");

    var snakebodies = [];

    for (var i = 0; i < 20; i++) {
      var snakebody = runtime.objects.snakebody.createInstance("body", 0, 0);
      runtime.globalVars.MAX_INDEX += 1;

      if (i == 0) {
        snakebody.x = firstsnakebody.getImagePointX("body");
        snakebody.y = firstsnakebody.getImagePointY("body");
        snakebody.instVars.index = runtime.globalVars.MAX_INDEX;
      } else {
        snakebody.x = snakebodies[i - 1].getImagePointX("body");
        snakebody.y = snakebodies[i - 1].getImagePointY("body");
        snakebody.instVars.index = runtime.globalVars.MAX_INDEX;
      }

      snakebodies.push(snakebody);
    }
  },

  async Game_Event154_Act4(runtime, localVars) {
    var gates = [];
    var arrayId = [1, 2, 3, 4];

    if (runtime.globalVars.level == 1)
      gates = runtime.objects.junglegate.getAllInstances();
    else if (runtime.globalVars.level == 2)
      gates = runtime.objects.beachgate.getAllInstances();
    else if (runtime.globalVars.level == 3)
      gates = runtime.objects.IcyCavegate.getAllInstances();
    else if (runtime.globalVars.level == 4)
      gates = runtime.objects.oceangate.getAllInstances();
    else if (runtime.globalVars.level == 5)
      gates = runtime.objects.pumpkingate.getAllInstances();
    else if (runtime.globalVars.level == 6)
      gates = runtime.objects.castlegate.getAllInstances();

    for (var i = 0; i < runtime.globalVars.keytograb; i++) {
      var index = Math.floor(Math.random() * arrayId.length);
      var id = arrayId[index];

      var gate = gates.filter((g) => g.instVars.id == id);

      gate[0].isVisible = true;

      arrayId = arrayRemove(arrayId, id);
    }

    function arrayRemove(arr, value) {
      return arr.filter(function (_item) {
        return _item != value;
      });
    }
  },

  async Game_Event160_Act1(runtime, localVars) {
    //fetch the head of the snake

    var head = runtime.objects.snakemouthopen.getFirstInstance();

    var tail = runtime.objects.snaketail.getFirstInstance();

    //fetch all instances of snake body
    var snakebodies = runtime.objects.snakebody.getAllInstances();

    /* set the id of each body to scale them according to length of the snake.Through id we can identify the position of body and scale them accordingly. so the very first body attached to snakehead will have a last id, for example if the length of snake is 10, then very first body will have id = 10, second body will have id=9 and so on... so the size starts from default body size and keeps decreeasing based on the length. */
    //snakebodies.sort(function(a, b){return b.instVars.index-a.instVars.index});

    setIds();

    /* iterate through each body, if its a first body then assign an angle equak to snake head else fetch the last body and assign to it. change width and height of the body based on ids. here 14 and 28 are the default width and height of the body means maximum width and height. so dividing the total length of the snake to default width and height and multiplying it with the ids. so suppose length of the snake is 10 and id of first body is 10, so now (14/10) * 10 = 14, means maximum width and height. now if second body has id 9, so its witdh will be (14/10)*9 = 12.6 and so on.... same goes with the height too.*/

    for (var i = 0; i < snakebodies.length; i++) {
      var snakebody = snakebodies[i];

      if (snakebody.instVars.index == 0) {
        var length = snakebodies.length / 1.3;

        snakebody.angle = angle(snakebody.x, snakebody.y, head.x, head.y);

        snakebody.width = (14 / length) * snakebody.instVars.id;
        snakebody.height = (28 / length) * snakebody.instVars.id;

        snakebody.x = head.getImagePointX("tail");
        snakebody.y = head.getImagePointY("tail");
      } else {
        var newang = angle(
          snakebody.x,
          snakebody.y,
          snakebodies[i - 1].x,
          snakebodies[i - 1].y
        );

        snakebody.angle = newang;

        snakebody.width = (14 / length) * snakebody.instVars.id;
        snakebody.height = (28 / length) * snakebody.instVars.id;

        snakebody.x = lerp(
          snakebody.x,
          snakebodies[i - 1].getImagePointX("body"),
          0.5
        );
        snakebody.y = lerp(
          snakebody.y,
          snakebodies[i - 1].getImagePointY("body"),
          0.5
        );

        snakebody.opacity = 100;
      }
    }

    function setIds() {
      for (var i = 0; i < snakebodies.length; i++) {
        var body = snakebodies[i];
        body.instVars.id = snakebodies.length - i / 1.3;
      }
    }

    //tail.angle = angle(tail.x, tail.y, snakebodies[snakebodies.length-1].getImagePointX(1),snakebodies[snakebodies.length-1].getImagePointY(1));

    //tail.x = snakebodies[snakebodies.length-1].getImagePointX(1);
    //tail.y = snakebodies[snakebodies.length-1].getImagePointY(1);

    function angle(cx, cy, ex, ey) {
      var dy = ey - cy;
      var dx = ex - cx;
      var theta = Math.atan2(dy, dx); // range (-PI, PI]
      // rads to degs, range (-180, 180]
      //if (theta < 0) theta = 360 + theta; // range [0, 360)
      return theta;
    }

    function lerp(start, end, amt) {
      return (1 - amt) * start + amt * end;
    }
  },
};

self.C3.ScriptsInEvents = scriptsInEvents;
