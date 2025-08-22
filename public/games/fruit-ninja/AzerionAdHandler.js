(() => {
  var e = {
      322: (e, r, d) => {
        var a, t;
        (a = [d, r, d(38)]),
          (t = function (e, r, d) {
            "use strict";
            var a;
            Object.defineProperty(r, "__esModule", { value: !0 }),
              (r.AdHandler = void 0),
              (function (e) {
                (e.PAUSED = "Paused"), (e.RESUMED = "Resumed");
              })(a || (a = {}));
            var t = (function () {
              function e() {}
              return (
                (e.init = function () {
                  (this.azAdWrapper = new window.h5ads.AdWrapper(
                    window._azerionIntegration.advType,
                    window._azerionIntegration.gdId
                  )),
                    (this.contentStatus = a.RESUMED);
                }),
                (e.addListeners = function (e, r) {
                  var d = this;
                  this.azAdWrapper.on(
                    h5ads.AdEvents.CONTENT_PAUSED,
                    function () {
                      (d.contentStatus = a.PAUSED), e && e();
                    }
                  ),
                    this.azAdWrapper.on(
                      h5ads.AdEvents.CONTENT_RESUMED,
                      function () {
                        (d.contentStatus = a.RESUMED), r && r(), window.focus();
                      }
                    );
                }),
                (e.showInterstitialAd = function (e, r, a) {
                  var t = this;
                  d.LoaderHelper.show();
                  var n = function () {
                      d.LoaderHelper.hide(),
                        a && a.call(t),
                        t.azAdWrapper.removeListener(
                          h5ads.AdEvents.CONTENT_PAUSED,
                          n
                        );
                    },
                    o = function () {
                      d.LoaderHelper.hide(),
                        r && r.call(t),
                        t.azAdWrapper.removeListener(
                          h5ads.AdEvents.CONTENT_RESUMED,
                          o
                        );
                    };
                  this.azAdWrapper.on(h5ads.AdEvents.CONTENT_RESUMED, o),
                    this.azAdWrapper.on(h5ads.AdEvents.CONTENT_PAUSED, n),
                    this.azAdWrapper.showAd(h5ads.AdType.interstitial);
                }),
                (e.showRewardedAd = function (e, r, a) {
                  var t = this;
                  d.LoaderHelper.show();
                  var n = !1,
                    o = function () {
                      d.LoaderHelper.hide(),
                        n ? r && r.call(t) : a && a.call(t),
                        t.azAdWrapper.removeListener(
                          h5ads.AdEvents.CONTENT_RESUMED,
                          o
                        ),
                        t.azAdWrapper.preloadAd(h5ads.AdType.rewarded),
                        t.azAdWrapper.removeAllListeners(
                          h5ads.AdEvents.AD_REWARDED
                        );
                    };
                  this.azAdWrapper.addListener(
                    h5ads.AdEvents.AD_REWARDED,
                    function () {
                      n = !0;
                    }
                  ),
                    this.azAdWrapper.on(h5ads.AdEvents.CONTENT_RESUMED, o),
                    this.azAdWrapper.showAd(h5ads.AdType.rewarded);
                }),
                (e.isAdPlaying = function () {
                  return this.contentStatus === a.PAUSED;
                }),
                (e.preloadAd = function (e) {
                  this.azAdWrapper.preloadAd(e);
                }),
                (e.rewardedAdAvailable = function () {
                  return this.azAdWrapper.adAvailable(h5ads.AdType.rewarded);
                }),
                e
              );
            })();
            r.AdHandler = t;
          }.apply(r, a)),
          void 0 === t || (e.exports = t);
      },
      38: (e, r, d) => {
        var a;
        (a = function (e, r) {
          "use strict";
          Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.LoaderHelper = void 0);
          var d = (function () {
            function e() {}
            return (
              (e.show = function () {
                var e = document.getElementById("loader");
                e && (e.style.display = "block");
              }),
              (e.hide = function () {
                var e = document.getElementById("loader");
                e && (e.style.display = "none");
              }),
              e
            );
          })();
          r.LoaderHelper = d;
        }.apply(r, [d, r])),
          void 0 === a || (e.exports = a);
      },
      726: (e, r, d) => {
        var a, t;
        (a = [d, r, d(322)]),
          void 0 ===
            (t = function (e, r, d) {
              "use strict";
              ({ value: !0 });
              window._azerionAdHandler = d.AdHandler;
            }.apply(r, a)) || (e.exports = t);
      },
    },
    r = {};
  (function d(a) {
    var t = r[a];
    if (void 0 !== t) return t.exports;
    var n = (r[a] = { exports: {} });
    return e[a](n, n.exports, d), n.exports;
  })(726);
})();
