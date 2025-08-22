var a0_0x55db6a = a0_0x4c2d;
(function (_0x3fd8ea, _0x3145fc) {
  var _0x1f4591 = a0_0x4c2d,
    _0x16cabb = _0x3fd8ea();
  while (!![]) {
    try {
      var _0x1af034 =
        parseInt(_0x1f4591(0x306)) / 0x1 +
        parseInt(_0x1f4591(0x233)) / 0x2 +
        (parseInt(_0x1f4591(0x25b)) / 0x3) *
          (parseInt(_0x1f4591(0x282)) / 0x4) +
        (-parseInt(_0x1f4591(0x271)) / 0x5) *
          (parseInt(_0x1f4591(0x24c)) / 0x6) +
        -parseInt(_0x1f4591(0x371)) / 0x7 +
        parseInt(_0x1f4591(0x2f2)) / 0x8 +
        parseInt(_0x1f4591(0x302)) / 0x9;
      if (_0x1af034 === _0x3145fc) break;
      else _0x16cabb["push"](_0x16cabb["shift"]());
    } catch (_0x536df3) {
      _0x16cabb["push"](_0x16cabb["shift"]());
    }
  }
})(a0_0x522d, 0x3bc9d);
var stage,
  canvasW = 0x0,
  canvasH = 0x0;
function initGameCanvas(_0x3b987e, _0x1259dc) {
  var _0x38b94d = a0_0x4c2d;
  const _0xfaddb0 = document[_0x38b94d(0x362)](_0x38b94d(0x278));
  (_0xfaddb0[_0x38b94d(0x314)] = _0x3b987e),
    (_0xfaddb0[_0x38b94d(0x1d1)] = _0x1259dc),
    (canvasW = _0x3b987e),
    (canvasH = _0x1259dc),
    (stage = new createjs[_0x38b94d(0x283)](_0x38b94d(0x278), {
      antialias: !![],
    })),
    createjs[_0x38b94d(0x2b8)][_0x38b94d(0x21e)](stage),
    stage[_0x38b94d(0x331)](0x14),
    (stage["mouseMoveOutside"] = !![]),
    (createjs[_0x38b94d(0x20d)][_0x38b94d(0x35d)] = 0x3c),
    createjs["Ticker"]["addEventListener"](_0x38b94d(0x24e), tick);
}
var safeZoneGuide = ![],
  canvasContainer,
  mainContainer,
  gameContainer,
  resultContainer,
  exitContainer,
  optionsContainer,
  shareContainer,
  shareSaveContainer,
  socialContainer,
  guideline,
  bg,
  bgP,
  logo,
  logoP,
  itemExit,
  itemExitP,
  popTitleTxt,
  popDescTxt,
  buttonConfirm,
  buttonCancel,
  itemResult,
  itemResultP,
  buttonContinue,
  resultTitleTxt,
  resultDescTxt,
  buttonShare,
  buttonSave,
  resultTitleOutlineTxt,
  resultDescOutlineTxt,
  resultShareTxt,
  resultShareOutlineTxt,
  popTitleOutlineTxt,
  popDescOutlineTxt,
  buttonSettings,
  buttonFullscreen,
  buttonSoundOn,
  buttonSoundOff,
  buttonMusicOn,
  buttonMusicOff,
  buttonExit;
$[a0_0x55db6a(0x343)] = {};
var levelContainer,
  selectContainer,
  editContainer,
  editAllContainer,
  levelDisplayContainer,
  timerContainer,
  statusContainer,
  waterContainer,
  buttonStart,
  buttonLevels,
  selectLevelTitleTxt,
  buttonLevelArrowL,
  buttonLevelArrowR,
  buttonBack,
  selectTubeTitleTxt,
  buttonSelect,
  buttonArrowL,
  buttonArrowR,
  timerShapeBg,
  timerShape,
  levelTxt,
  statusTxt,
  resultlevelTxt;
function a0_0x4c2d(_0x5f2806, _0x19514b) {
  var _0x522d8f = a0_0x522d();
  return (
    (a0_0x4c2d = function (_0x4c2d66, _0x4ddfa4) {
      _0x4c2d66 = _0x4c2d66 - 0x1d0;
      var _0xc139bb = _0x522d8f[_0x4c2d66];
      return _0xc139bb;
    }),
    a0_0x4c2d(_0x5f2806, _0x19514b)
  );
}
($[a0_0x55db6a(0x2ec)] = {}), ($[a0_0x55db6a(0x2ea)] = {});
function buildGameCanvas() {
  var _0x3b6f64 = a0_0x55db6a;
  (canvasContainer = new createjs[_0x3b6f64(0x2bc)]()),
    (mainContainer = new createjs[_0x3b6f64(0x2bc)]()),
    (gameContainer = new createjs[_0x3b6f64(0x2bc)]()),
    (exitContainer = new createjs[_0x3b6f64(0x2bc)]()),
    (resultContainer = new createjs[_0x3b6f64(0x2bc)]()),
    (shareContainer = new createjs[_0x3b6f64(0x2bc)]()),
    (shareSaveContainer = new createjs[_0x3b6f64(0x2bc)]()),
    (socialContainer = new createjs[_0x3b6f64(0x2bc)]()),
    (levelContainer = new createjs[_0x3b6f64(0x2bc)]()),
    (selectContainer = new createjs[_0x3b6f64(0x2bc)]()),
    (editContainer = new createjs[_0x3b6f64(0x2bc)]()),
    (editAllContainer = new createjs["Container"]()),
    (levelDisplayContainer = new createjs[_0x3b6f64(0x2bc)]()),
    (timerContainer = new createjs[_0x3b6f64(0x2bc)]()),
    (statusContainer = new createjs[_0x3b6f64(0x2bc)]()),
    (waterContainer = new createjs[_0x3b6f64(0x2bc)]()),
    (bg = new createjs[_0x3b6f64(0x2b9)](
      loader[_0x3b6f64(0x341)](_0x3b6f64(0x258))
    )),
    (bgP = new createjs[_0x3b6f64(0x2b9)](
      loader[_0x3b6f64(0x341)](_0x3b6f64(0x298))
    )),
    (logo = new createjs[_0x3b6f64(0x2b9)](loader[_0x3b6f64(0x341)]("logo"))),
    (logoP = new createjs[_0x3b6f64(0x2b9)](loader[_0x3b6f64(0x341)]("logoP"))),
    (buttonStart = new createjs["Bitmap"](
      loader[_0x3b6f64(0x341)](_0x3b6f64(0x29b))
    )),
    centerReg(buttonStart),
    (buttonLevels = new createjs["Bitmap"](
      loader[_0x3b6f64(0x341)](_0x3b6f64(0x2ac))
    )),
    centerReg(buttonLevels);
  var _0x22ed70 = {
      sX: 0x0,
      sY: 0x0,
      x: 0x0,
      y: 0x0,
      space: 0x5,
      size: 0x50,
      count: 0x0,
    },
    _0x51ab1f = (selectData["column"] - 0x1) * _0x22ed70[_0x3b6f64(0x27a)];
  _0x51ab1f += (selectData["column"] - 0x1) * _0x22ed70[_0x3b6f64(0x379)];
  var _0x3cab7c = (selectData[_0x3b6f64(0x248)] - 0x1) * _0x22ed70["size"];
  (_0x3cab7c +=
    (selectData[_0x3b6f64(0x248)] - 0x1) * _0x22ed70[_0x3b6f64(0x379)]),
    (_0x22ed70["sX"] = -(_0x51ab1f / 0x2)),
    (_0x22ed70["sY"] = -(_0x3cab7c / 0x2)),
    (_0x22ed70["y"] = _0x22ed70["sY"]);
  for (
    var _0x1d576f = 0x0;
    _0x1d576f < selectData[_0x3b6f64(0x248)];
    _0x1d576f++
  ) {
    _0x22ed70["x"] = _0x22ed70["sX"];
    for (
      var _0x3dde32 = 0x0;
      _0x3dde32 < selectData[_0x3b6f64(0x297)];
      _0x3dde32++
    ) {
      ($[_0x3b6f64(0x2ea)][_0x1d576f + "_" + _0x3dde32] = new createjs[
        _0x3b6f64(0x2b9)
      ](loader["getResult"](_0x3b6f64(0x1ef)))),
        centerReg($[_0x3b6f64(0x2ea)][_0x1d576f + "_" + _0x3dde32]),
        ($[_0x3b6f64(0x2ea)][_0x1d576f + "_" + _0x3dde32]["x"] =
          _0x22ed70["x"]),
        ($[_0x3b6f64(0x2ea)][_0x1d576f + "_" + _0x3dde32]["y"] =
          _0x22ed70["y"]),
        ($[_0x3b6f64(0x2ea)][_0x1d576f + _0x3b6f64(0x2a9) + _0x3dde32] =
          new createjs[_0x3b6f64(0x2b9)](
            loader["getResult"](_0x3b6f64(0x1fe))
          )),
        centerReg($["level"][_0x1d576f + _0x3b6f64(0x2a9) + _0x3dde32]),
        ($[_0x3b6f64(0x2ea)][_0x1d576f + _0x3b6f64(0x2a9) + _0x3dde32]["x"] =
          _0x22ed70["x"]),
        ($[_0x3b6f64(0x2ea)][_0x1d576f + _0x3b6f64(0x2a9) + _0x3dde32]["y"] =
          _0x22ed70["y"]),
        ($[_0x3b6f64(0x2ea)][_0x1d576f + _0x3b6f64(0x1fa) + _0x3dde32] =
          new createjs[_0x3b6f64(0x308)]()),
        ($[_0x3b6f64(0x2ea)][_0x1d576f + _0x3b6f64(0x1fa) + _0x3dde32][
          _0x3b6f64(0x2d1)
        ] = _0x3b6f64(0x267)),
        ($[_0x3b6f64(0x2ea)][_0x1d576f + _0x3b6f64(0x1fa) + _0x3dde32][
          _0x3b6f64(0x259)
        ] = _0x3b6f64(0x290)),
        ($[_0x3b6f64(0x2ea)][_0x1d576f + _0x3b6f64(0x1fa) + _0x3dde32][
          _0x3b6f64(0x2e2)
        ] = "center"),
        ($[_0x3b6f64(0x2ea)][_0x1d576f + _0x3b6f64(0x1fa) + _0x3dde32][
          _0x3b6f64(0x28b)
        ] = _0x3b6f64(0x29c)),
        ($["level"][_0x1d576f + _0x3b6f64(0x1fa) + _0x3dde32]["x"] =
          _0x22ed70["x"]),
        ($["level"][_0x1d576f + _0x3b6f64(0x1fa) + _0x3dde32]["y"] =
          _0x22ed70["y"] + 0xc),
        ($[_0x3b6f64(0x2ea)][_0x1d576f + "_unlock_" + _0x3dde32][
          _0x3b6f64(0x352)
        ] = $[_0x3b6f64(0x2ea)][_0x1d576f + "_text_" + _0x3dde32]),
        levelContainer[_0x3b6f64(0x21d)](
          $[_0x3b6f64(0x2ea)][_0x1d576f + "_" + _0x3dde32],
          $["level"][_0x1d576f + "_unlock_" + _0x3dde32],
          $[_0x3b6f64(0x2ea)][_0x1d576f + _0x3b6f64(0x1fa) + _0x3dde32]
        ),
        (_0x22ed70["x"] += _0x22ed70["size"] + _0x22ed70["space"]),
        _0x22ed70[_0x3b6f64(0x328)]++;
    }
    _0x22ed70["y"] += _0x22ed70[_0x3b6f64(0x27a)] + _0x22ed70[_0x3b6f64(0x379)];
  }
  (selectLevelTitleTxt = new createjs["Text"]()),
    (selectLevelTitleTxt["font"] = _0x3b6f64(0x29e)),
    (selectLevelTitleTxt[_0x3b6f64(0x259)] = "#fff"),
    (selectLevelTitleTxt[_0x3b6f64(0x2e2)] = _0x3b6f64(0x2c9)),
    (selectLevelTitleTxt["textBaseline"] = "alphabetic"),
    (selectLevelTitleTxt["text"] = textStrings[_0x3b6f64(0x2a7)]),
    (buttonLevelArrowL = new createjs[_0x3b6f64(0x2b9)](
      loader[_0x3b6f64(0x341)](_0x3b6f64(0x334))
    )),
    centerReg(buttonLevelArrowL),
    (buttonLevelArrowR = new createjs["Bitmap"](
      loader["getResult"](_0x3b6f64(0x346))
    )),
    centerReg(buttonLevelArrowR),
    (buttonBack = new createjs[_0x3b6f64(0x2b9)](
      loader["getResult"]("buttonBack")
    )),
    centerReg(buttonBack),
    levelContainer[_0x3b6f64(0x21d)](
      selectLevelTitleTxt,
      buttonLevelArrowL,
      buttonLevelArrowR,
      buttonBack
    ),
    (selectTubeTitleTxt = new createjs[_0x3b6f64(0x308)]()),
    (selectTubeTitleTxt[_0x3b6f64(0x2d1)] = _0x3b6f64(0x29e)),
    (selectTubeTitleTxt[_0x3b6f64(0x259)] = _0x3b6f64(0x367)),
    (selectTubeTitleTxt["textAlign"] = "center"),
    (selectTubeTitleTxt[_0x3b6f64(0x28b)] = _0x3b6f64(0x29c)),
    (selectTubeTitleTxt["text"] = textStrings[_0x3b6f64(0x28c)]),
    (buttonSelect = new createjs[_0x3b6f64(0x2b9)](
      loader[_0x3b6f64(0x341)](_0x3b6f64(0x35e))
    )),
    centerReg(buttonSelect),
    (buttonArrowL = new createjs["Bitmap"](
      loader[_0x3b6f64(0x341)]("buttonArrowL")
    )),
    centerReg(buttonArrowL),
    (buttonArrowR = new createjs["Bitmap"](
      loader[_0x3b6f64(0x341)]("buttonArrowR")
    )),
    centerReg(buttonArrowR),
    selectContainer[_0x3b6f64(0x21d)](
      selectTubeTitleTxt,
      buttonSelect,
      buttonArrowL,
      buttonArrowR
    ),
    (timerShapeBg = new createjs[_0x3b6f64(0x2f5)]()),
    (timerShape = new createjs["Shape"]()),
    timerContainer["addChild"](timerShapeBg, timerShape),
    (levelTxt = new createjs[_0x3b6f64(0x308)]()),
    (levelTxt["font"] = _0x3b6f64(0x2b1)),
    (levelTxt[_0x3b6f64(0x259)] = _0x3b6f64(0x367)),
    (levelTxt[_0x3b6f64(0x2e2)] = _0x3b6f64(0x2c9)),
    (levelTxt["textBaseline"] = _0x3b6f64(0x29c)),
    (levelTxt[_0x3b6f64(0x352)] = _0x3b6f64(0x238)),
    (levelTxt["y"] = 0x14),
    levelDisplayContainer[_0x3b6f64(0x21d)](levelTxt),
    (statusTxt = new createjs[_0x3b6f64(0x308)]()),
    (statusTxt[_0x3b6f64(0x2d1)] = "45px\x20comicyregular"),
    (statusTxt[_0x3b6f64(0x259)] = _0x3b6f64(0x367)),
    (statusTxt["textAlign"] = _0x3b6f64(0x2c9)),
    (statusTxt[_0x3b6f64(0x28b)] = _0x3b6f64(0x29c)),
    statusContainer[_0x3b6f64(0x21d)](statusTxt),
    (itemResult = new createjs[_0x3b6f64(0x2b9)](
      loader[_0x3b6f64(0x341)](_0x3b6f64(0x2ba))
    )),
    (itemResultP = new createjs[_0x3b6f64(0x2b9)](
      loader[_0x3b6f64(0x341)](_0x3b6f64(0x2b2))
    )),
    (buttonContinue = new createjs[_0x3b6f64(0x2b9)](
      loader["getResult"]("buttonContinue")
    )),
    centerReg(buttonContinue),
    (resultShareTxt = new createjs["Text"]()),
    (resultShareTxt[_0x3b6f64(0x2d1)] = "20px\x20comicyregular"),
    (resultShareTxt[_0x3b6f64(0x259)] = _0x3b6f64(0x262)),
    (resultShareTxt[_0x3b6f64(0x2e2)] = _0x3b6f64(0x2c9)),
    (resultShareTxt[_0x3b6f64(0x28b)] = _0x3b6f64(0x29c)),
    (resultShareTxt["text"] = textStrings[_0x3b6f64(0x343)]),
    (resultTitleTxt = new createjs[_0x3b6f64(0x308)]()),
    (resultTitleTxt["font"] = _0x3b6f64(0x29e)),
    (resultTitleTxt[_0x3b6f64(0x259)] = _0x3b6f64(0x230)),
    (resultTitleTxt["textAlign"] = _0x3b6f64(0x2c9)),
    (resultTitleTxt[_0x3b6f64(0x28b)] = _0x3b6f64(0x29c)),
    (resultTitleTxt[_0x3b6f64(0x352)] = textStrings["resultTitle"]),
    (resultlevelTxt = new createjs["Text"]()),
    (resultlevelTxt[_0x3b6f64(0x2d1)] = _0x3b6f64(0x273)),
    (resultlevelTxt[_0x3b6f64(0x259)] = _0x3b6f64(0x262)),
    (resultlevelTxt[_0x3b6f64(0x2e2)] = "center"),
    (resultlevelTxt["textBaseline"] = _0x3b6f64(0x29c)),
    (resultlevelTxt[_0x3b6f64(0x352)] = ""),
    (resultDescTxt = new createjs["Text"]()),
    (resultDescTxt[_0x3b6f64(0x2d1)] = _0x3b6f64(0x293)),
    (resultDescTxt[_0x3b6f64(0x259)] = _0x3b6f64(0x262)),
    (resultDescTxt[_0x3b6f64(0x2e2)] = _0x3b6f64(0x2c9)),
    (resultDescTxt[_0x3b6f64(0x28b)] = _0x3b6f64(0x29c)),
    (resultDescTxt[_0x3b6f64(0x352)] = ""),
    (socialContainer[_0x3b6f64(0x1e5)] = ![]),
    (socialContainer[_0x3b6f64(0x246)] = 0.8),
    shareContainer["addChild"](resultShareTxt, socialContainer);
  if (shareSettings["enable"]) {
    (buttonShare = new createjs[_0x3b6f64(0x2b9)](
      loader[_0x3b6f64(0x341)]("buttonShare")
    )),
      centerReg(buttonShare);
    var _0x170fda = { x: 0x0, y: 0x2d, spaceX: 0x41 };
    _0x170fda["x"] = -(
      ((shareSettings["options"][_0x3b6f64(0x2fa)] - 0x1) *
        _0x170fda[_0x3b6f64(0x22f)]) /
      0x2
    );
    for (
      let _0x19db4 = 0x0;
      _0x19db4 < shareSettings[_0x3b6f64(0x301)][_0x3b6f64(0x2fa)];
      _0x19db4++
    ) {
      var _0x19b0f9 = shareSettings["options"][_0x19db4],
        _0x348702 =
          String(_0x19b0f9[0x0])[_0x3b6f64(0x2b6)]() +
          String(_0x19b0f9)[_0x3b6f64(0x1dc)](0x1);
      ($[_0x3b6f64(0x343)]["button" + _0x19db4] = new createjs[
        _0x3b6f64(0x2b9)
      ](loader[_0x3b6f64(0x341)]("button" + _0x348702))),
        ($["share"]["button" + _0x19db4][_0x3b6f64(0x354)] = _0x19b0f9),
        centerReg($[_0x3b6f64(0x343)]["button" + _0x19db4]),
        ($[_0x3b6f64(0x343)]["button" + _0x19db4]["x"] = _0x170fda["x"]),
        ($[_0x3b6f64(0x343)][_0x3b6f64(0x2a2) + _0x19db4]["y"] =
          _0x170fda["y"]),
        socialContainer[_0x3b6f64(0x21d)](
          $["share"][_0x3b6f64(0x2a2) + _0x19db4]
        ),
        (_0x170fda["x"] += _0x170fda[_0x3b6f64(0x22f)]);
    }
    (buttonShare["y"] =
      buttonShare[_0x3b6f64(0x206)][_0x3b6f64(0x242)] / 0x2 + 0xa),
      shareContainer[_0x3b6f64(0x21d)](buttonShare);
  }
  typeof toggleScoreboardSave == "function" &&
    ((buttonSave = new createjs["Bitmap"](
      loader[_0x3b6f64(0x341)](_0x3b6f64(0x1d5))
    )),
    centerReg(buttonSave),
    (buttonSave["y"] =
      buttonSave[_0x3b6f64(0x206)]["naturalHeight"] / 0x2 + 0xa),
    shareSaveContainer[_0x3b6f64(0x21d)](buttonSave)),
    (buttonFullscreen = new createjs[_0x3b6f64(0x2b9)](
      loader[_0x3b6f64(0x341)](_0x3b6f64(0x211))
    )),
    centerReg(buttonFullscreen),
    (buttonSoundOn = new createjs[_0x3b6f64(0x2b9)](
      loader[_0x3b6f64(0x341)](_0x3b6f64(0x232))
    )),
    centerReg(buttonSoundOn),
    (buttonSoundOff = new createjs["Bitmap"](
      loader["getResult"](_0x3b6f64(0x369))
    )),
    centerReg(buttonSoundOff),
    (buttonSoundOn[_0x3b6f64(0x1e5)] = ![]),
    (buttonMusicOn = new createjs[_0x3b6f64(0x2b9)](
      loader[_0x3b6f64(0x341)](_0x3b6f64(0x1d0))
    )),
    centerReg(buttonMusicOn),
    (buttonMusicOff = new createjs["Bitmap"](
      loader[_0x3b6f64(0x341)](_0x3b6f64(0x374))
    )),
    centerReg(buttonMusicOff),
    (buttonMusicOn[_0x3b6f64(0x1e5)] = ![]),
    (buttonExit = new createjs[_0x3b6f64(0x2b9)](
      loader["getResult"](_0x3b6f64(0x22d))
    )),
    centerReg(buttonExit),
    (buttonSettings = new createjs["Bitmap"](
      loader[_0x3b6f64(0x341)](_0x3b6f64(0x1e6))
    )),
    centerReg(buttonSettings),
    createHitarea(buttonFullscreen),
    createHitarea(buttonSoundOn),
    createHitarea(buttonSoundOff),
    createHitarea(buttonMusicOn),
    createHitarea(buttonMusicOff),
    createHitarea(buttonExit),
    createHitarea(buttonSettings),
    (optionsContainer = new createjs[_0x3b6f64(0x2bc)]()),
    optionsContainer["addChild"](
      buttonFullscreen,
      buttonSoundOn,
      buttonSoundOff,
      buttonMusicOn,
      buttonMusicOff,
      buttonExit
    ),
    (optionsContainer[_0x3b6f64(0x1e5)] = ![]),
    (itemExit = new createjs[_0x3b6f64(0x2b9)](
      loader[_0x3b6f64(0x341)](_0x3b6f64(0x2ba))
    )),
    (itemExitP = new createjs[_0x3b6f64(0x2b9)](
      loader[_0x3b6f64(0x341)](_0x3b6f64(0x2b2))
    )),
    (buttonConfirm = new createjs[_0x3b6f64(0x2b9)](
      loader[_0x3b6f64(0x341)](_0x3b6f64(0x29d))
    )),
    centerReg(buttonConfirm),
    (buttonCancel = new createjs[_0x3b6f64(0x2b9)](
      loader["getResult"]("buttonCancel")
    )),
    centerReg(buttonCancel),
    (popTitleTxt = new createjs[_0x3b6f64(0x308)]()),
    (popTitleTxt[_0x3b6f64(0x2d1)] = "45px\x20comicyregular"),
    (popTitleTxt["color"] = "#1A4970"),
    (popTitleTxt["textAlign"] = _0x3b6f64(0x2c9)),
    (popTitleTxt[_0x3b6f64(0x28b)] = _0x3b6f64(0x29c)),
    (popTitleTxt["text"] = textStrings[_0x3b6f64(0x2c3)]),
    (popDescTxt = new createjs[_0x3b6f64(0x308)]()),
    (popDescTxt[_0x3b6f64(0x2d1)] = _0x3b6f64(0x273)),
    (popDescTxt["lineHeight"] = 0x23),
    (popDescTxt["color"] = _0x3b6f64(0x262)),
    (popDescTxt[_0x3b6f64(0x2e2)] = _0x3b6f64(0x2c9)),
    (popDescTxt[_0x3b6f64(0x28b)] = _0x3b6f64(0x29c)),
    (popDescTxt[_0x3b6f64(0x352)] = textStrings["exitMessage"]),
    exitContainer[_0x3b6f64(0x21d)](
      itemExit,
      itemExitP,
      popTitleTxt,
      popDescTxt,
      buttonConfirm,
      buttonCancel
    ),
    (exitContainer[_0x3b6f64(0x1e5)] = ![]),
    (guideline = new createjs["Shape"]()),
    mainContainer["addChild"](logo, logoP, buttonStart, buttonLevels),
    gameContainer[_0x3b6f64(0x21d)](
      editContainer,
      levelDisplayContainer,
      timerContainer,
      statusContainer
    ),
    resultContainer[_0x3b6f64(0x21d)](
      itemResult,
      itemResultP,
      buttonContinue,
      resultTitleTxt,
      resultDescTxt,
      shareContainer,
      shareSaveContainer
    ),
    canvasContainer[_0x3b6f64(0x21d)](
      bg,
      bgP,
      mainContainer,
      levelContainer,
      waterContainer,
      selectContainer,
      gameContainer,
      resultContainer,
      exitContainer,
      optionsContainer,
      buttonSettings,
      guideline
    ),
    stage[_0x3b6f64(0x21d)](canvasContainer),
    changeViewport(viewport[_0x3b6f64(0x205)]),
    resizeGameFunc();
}
function changeViewport(_0x1e7359) {
  _0x1e7359
    ? ((stageW = landscapeSize["w"]),
      (stageH = landscapeSize["h"]),
      (contentW = landscapeSize["cW"]),
      (contentH = landscapeSize["cH"]))
    : ((stageW = portraitSize["w"]),
      (stageH = portraitSize["h"]),
      (contentW = portraitSize["cW"]),
      (contentH = portraitSize["cH"])),
    (canvasW = stageW),
    (canvasH = stageH),
    changeCanvasViewport();
}
function changeCanvasViewport() {
  var _0x125efa = a0_0x55db6a;
  canvasContainer != undefined &&
    ((stage[_0x125efa(0x2a4)] = stage["scaleY"] = dpr),
    safeZoneGuide &&
      guideline[_0x125efa(0x2fc)]
        ["clear"]()
        [_0x125efa(0x34d)](0x2)
        ["beginStroke"](_0x125efa(0x1d8))
        [_0x125efa(0x350)](
          (stageW - contentW) / 0x2,
          (stageH - contentH) / 0x2,
          contentW,
          contentH
        ),
    viewport[_0x125efa(0x205)]
      ? ((bg[_0x125efa(0x1e5)] = !![]),
        (bgP[_0x125efa(0x1e5)] = ![]),
        (logo[_0x125efa(0x1e5)] = !![]),
        (logoP[_0x125efa(0x1e5)] = ![]),
        (buttonStart["x"] = canvasW / 0x2 - 0x64),
        (buttonStart["y"] = (canvasH / 0x64) * 0x49),
        (buttonLevels["x"] = canvasW / 0x2 + 0x64),
        (buttonLevels["y"] = (canvasH / 0x64) * 0x49),
        (selectTubeTitleTxt["x"] = canvasW / 0x2),
        (selectTubeTitleTxt["y"] = (canvasH / 0x64) * 0x19),
        (buttonSelect["x"] = canvasW / 0x2),
        (buttonSelect["y"] = (canvasH / 0x64) * 0x49),
        (buttonArrowL["x"] = canvasW / 0x2 - 0x82),
        (buttonArrowL["y"] = (canvasH / 0x64) * 0x49),
        (buttonArrowR["x"] = canvasW / 0x2 + 0x82),
        (buttonArrowR["y"] = (canvasH / 0x64) * 0x49),
        (itemResult[_0x125efa(0x1e5)] = !![]),
        (itemResultP[_0x125efa(0x1e5)] = ![]),
        (buttonContinue["x"] = canvasW / 0x2),
        (buttonContinue["y"] = (canvasH / 0x64) * 0x43),
        (shareContainer["x"] = shareSaveContainer["x"] = canvasW / 0x2),
        (shareContainer["y"] = shareSaveContainer["y"] =
          (canvasH / 0x64) * 0x34),
        (resultTitleTxt["x"] = canvasW / 0x2),
        (resultTitleTxt["y"] = (canvasH / 0x64) * 0x25),
        (resultDescTxt["x"] = canvasW / 0x2),
        (resultDescTxt["y"] = (canvasH / 0x64) * 0x2e),
        (itemExit[_0x125efa(0x1e5)] = !![]),
        (itemExitP[_0x125efa(0x1e5)] = ![]),
        (buttonConfirm["x"] = canvasW / 0x2),
        (buttonConfirm["y"] = (canvasH / 0x64) * 0x3a),
        (buttonCancel["x"] = canvasW / 0x2),
        (buttonCancel["y"] = (canvasH / 0x64) * 0x44),
        (popTitleTxt["x"] = canvasW / 0x2),
        (popTitleTxt["y"] = (canvasH / 0x64) * 0x25),
        (popDescTxt["x"] = canvasW / 0x2),
        (popDescTxt["y"] = (canvasH / 0x64) * 0x2a))
      : ((bg[_0x125efa(0x1e5)] = ![]),
        (bgP["visible"] = !![]),
        (logo["visible"] = ![]),
        (logoP[_0x125efa(0x1e5)] = !![]),
        (buttonStart["x"] = canvasW / 0x2),
        (buttonStart["y"] = (canvasH / 0x64) * 0x3c),
        (buttonLevels["x"] = canvasW / 0x2),
        (buttonLevels["y"] = (canvasH / 0x64) * 0x46),
        (selectTubeTitleTxt["x"] = canvasW / 0x2),
        (selectTubeTitleTxt["y"] = (canvasH / 0x64) * 0x19),
        (buttonSelect["x"] = canvasW / 0x2),
        (buttonSelect["y"] = (canvasH / 0x64) * 0x49),
        (buttonArrowL["x"] = canvasW / 0x2 - 0x82),
        (buttonArrowL["y"] = (canvasH / 0x64) * 0x49),
        (buttonArrowR["x"] = canvasW / 0x2 + 0x82),
        (buttonArrowR["y"] = (canvasH / 0x64) * 0x49),
        (itemResult[_0x125efa(0x1e5)] = ![]),
        (itemResultP[_0x125efa(0x1e5)] = !![]),
        (buttonContinue["x"] = canvasW / 0x2),
        (buttonContinue["y"] = (canvasH / 0x64) * 0x3f),
        (shareContainer["x"] = shareSaveContainer["x"] = canvasW / 0x2),
        (shareContainer["y"] = shareSaveContainer["y"] =
          (canvasH / 0x64) * 0x33),
        (resultTitleTxt["x"] = canvasW / 0x2),
        (resultTitleTxt["y"] = (canvasH / 0x64) * 0x28),
        (resultDescTxt["x"] = canvasW / 0x2),
        (resultDescTxt["y"] = (canvasH / 0x64) * 0x2f),
        (itemExit["visible"] = ![]),
        (itemExitP[_0x125efa(0x1e5)] = !![]),
        (buttonConfirm["x"] = canvasW / 0x2),
        (buttonConfirm["y"] = (canvasH / 0x64) * 0x38),
        (buttonCancel["x"] = canvasW / 0x2),
        (buttonCancel["y"] = (canvasH / 0x64) * 0x40),
        (popTitleTxt["x"] = canvasW / 0x2),
        (popTitleTxt["y"] = (canvasH / 0x64) * 0x28),
        (popDescTxt["x"] = canvasW / 0x2),
        (popDescTxt["y"] = (canvasH / 0x64) * 0x2c)));
}
function resizeCanvas() {
  var _0x42d86b = a0_0x55db6a;
  if (canvasContainer != undefined) {
    (buttonSettings["x"] = canvasW - offset["x"] - 0x32),
      (buttonSettings["y"] = offset["y"] + 0x2d);
    var _0x1afb23 = 0x3c,
      _0x3fb548 = 0x0;
    (buttonSoundOn["x"] = buttonSoundOff["x"] = buttonSettings["x"]),
      (buttonSoundOn["y"] = buttonSoundOff["y"] =
        buttonSettings["y"] + _0x1afb23),
      (buttonSoundOn["x"] = buttonSoundOff["x"]),
      (buttonSoundOn["y"] = buttonSoundOff["y"] =
        buttonSettings["y"] + _0x1afb23),
      typeof buttonMusicOn != _0x42d86b(0x2a0)
        ? ((buttonMusicOn["x"] = buttonMusicOff["x"] = buttonSettings["x"]),
          (buttonMusicOn["y"] = buttonMusicOff["y"] =
            buttonSettings["y"] + _0x1afb23 * 0x2),
          (buttonMusicOn["x"] = buttonMusicOff["x"]),
          (buttonMusicOn["y"] = buttonMusicOff["y"] =
            buttonSettings["y"] + _0x1afb23 * 0x2),
          (_0x3fb548 = 0x2))
        : (_0x3fb548 = 0x1),
      (buttonFullscreen["x"] = buttonSettings["x"]),
      (buttonFullscreen["y"] =
        buttonSettings["y"] + _0x1afb23 * (_0x3fb548 + 0x1)),
      curPage == _0x42d86b(0x25c) || curPage == _0x42d86b(0x30c)
        ? ((buttonExit[_0x42d86b(0x1e5)] = ![]),
          (buttonFullscreen["x"] = buttonSettings["x"]),
          (buttonFullscreen["y"] =
            buttonSettings["y"] + _0x1afb23 * (_0x3fb548 + 0x1)))
        : ((buttonExit[_0x42d86b(0x1e5)] = !![]),
          (buttonExit["x"] = buttonSettings["x"]),
          (buttonExit["y"] =
            buttonSettings["y"] + _0x1afb23 * (_0x3fb548 + 0x2))),
      resizeGameUI();
  }
}
function removeGameCanvas() {
  var _0x58c762 = a0_0x55db6a;
  (stage[_0x58c762(0x203)] = !![]),
    stage[_0x58c762(0x20f)](),
    stage[_0x58c762(0x305)](),
    createjs[_0x58c762(0x20d)][_0x58c762(0x323)]("tick", tick),
    createjs["Ticker"][_0x58c762(0x323)]("tick", stage);
}
function tick(_0x4f5952) {
  var _0x5ce90e = a0_0x55db6a;
  updateGame(), stage[_0x5ce90e(0x305)](_0x4f5952);
}
function centerReg(_0x8e4b1f) {
  var _0x51dd85 = a0_0x55db6a;
  (_0x8e4b1f[_0x51dd85(0x2f6)] =
    _0x8e4b1f[_0x51dd85(0x206)]["naturalWidth"] / 0x2),
    (_0x8e4b1f["regY"] = _0x8e4b1f[_0x51dd85(0x206)]["naturalHeight"] / 0x2);
}
function createHitarea(_0xa9b5d9) {
  var _0x4a6ddc = a0_0x55db6a;
  _0xa9b5d9[_0x4a6ddc(0x26f)] = new createjs[_0x4a6ddc(0x2f5)](
    new createjs[_0x4a6ddc(0x363)]()
      [_0x4a6ddc(0x26b)](_0x4a6ddc(0x219))
      [_0x4a6ddc(0x350)](
        0x0,
        0x0,
        _0xa9b5d9[_0x4a6ddc(0x206)][_0x4a6ddc(0x213)],
        _0xa9b5d9[_0x4a6ddc(0x206)][_0x4a6ddc(0x242)]
      )
  );
}
const tubes_arr = [
  {
    imageBack: "assets/tube_back_01.png",
    imageFront: "assets/tube_front_01.png",
    regX: 0x2c,
    regY: 0x136,
    fillW: 0x32,
    fillH: 0xfa,
    tubeW: 0x56,
    tubeH: 0x12c,
    perspective: !![],
    shape: [
      { x: -0x19, y: -0x115 },
      { x: -0x19, y: -0x8d },
      { x: -0x19, y: -0x16 },
      { x: -0x13, y: 0x1 },
      { x: 0x1, y: 0x0 },
      { x: 0x12, y: 0x0 },
      { x: 0x19, y: -0x16 },
      { x: 0x19, y: -0x84 },
      { x: 0x19, y: -0x114 },
      { x: 0x1, y: -0x10f },
      { x: -0x19, y: -0x115 },
    ],
  },
  {
    imageBack: a0_0x55db6a(0x28e),
    imageFront: "assets/tube_front_02.png",
    regX: 0x2c,
    regY: 0x136,
    fillW: 0x36,
    fillH: 0xfa,
    tubeW: 0x56,
    tubeH: 0x12c,
    perspective: !![],
    shape: [
      { x: -0x1b, y: -0x11f },
      { x: -0x1b, y: -0x8d },
      { x: -0x1b, y: -0x1b },
      { x: -0x19, y: -0x3 },
      { x: 0x1, y: -0x4 },
      { x: 0x1a, y: -0x4 },
      { x: 0x1b, y: -0x1a },
      { x: 0x1b, y: -0x84 },
      { x: 0x1b, y: -0x11f },
      { x: 0x1, y: -0x119 },
      { x: -0x1b, y: -0x11f },
    ],
  },
  {
    imageBack: a0_0x55db6a(0x2e7),
    imageFront: "assets/tube_front_03.png",
    regX: 0x68,
    regY: 0x136,
    fillW: 0x28,
    fillH: 0xfa,
    tubeW: 0xcd,
    tubeH: 0x12c,
    perspective: ![],
    shape: [
      { x: -0x14, y: -0x11f },
      { x: -0x14, y: -0xe5 },
      { x: -0x14, y: -0xac },
      { x: -0x14, y: -0x9b },
      { x: -0x19, y: -0x90 },
      { x: -0x35, y: -0x5a },
      { x: -0x5c, y: -0x13 },
      { x: -0x63, y: -0x4 },
      { x: -0x54, y: -0x5 },
      { x: 0x3, y: -0x4 },
      { x: 0x53, y: -0x5 },
      { x: 0x63, y: -0x2 },
      { x: 0x5b, y: -0x12 },
      { x: 0x35, y: -0x5a },
      { x: 0x1a, y: -0x8d },
      { x: 0x13, y: -0x9a },
      { x: 0x13, y: -0xab },
      { x: 0x13, y: -0x11f },
      { x: 0x13, y: -0x11f },
      { x: 0x1, y: -0x11d },
      { x: -0x14, y: -0x11f },
    ],
  },
  {
    imageBack: a0_0x55db6a(0x1ec),
    imageFront: a0_0x55db6a(0x30b),
    regX: 0x5a,
    regY: 0x136,
    fillW: 0x96,
    fillH: 0xfa,
    tubeW: 0xb5,
    tubeH: 0x12c,
    perspective: ![],
    shape: [
      { x: -0x4b, y: -0x11f },
      { x: -0x4b, y: -0x8d },
      { x: -0x4b, y: -0x16 },
      { x: -0x4a, y: -0x3 },
      { x: -0x32, y: -0x3 },
      { x: 0x3, y: -0x3 },
      { x: 0x32, y: -0x3 },
      { x: 0x4c, y: -0x5 },
      { x: 0x4b, y: -0x16 },
      { x: 0x4b, y: -0x84 },
      { x: 0x4c, y: -0x11f },
      { x: 0x1, y: -0x116 },
      { x: -0x4b, y: -0x11f },
    ],
  },
  {
    imageBack: a0_0x55db6a(0x370),
    imageFront: a0_0x55db6a(0x368),
    regX: 0x60,
    regY: 0x136,
    fillW: 0x28,
    fillH: 0xfa,
    tubeW: 0xc0,
    tubeH: 0x12c,
    perspective: ![],
    shape: [
      { x: -0x14, y: -0x11f },
      { x: -0x14, y: -0xe5 },
      { x: -0x14, y: -0xb6 },
      { x: -0x3f, y: -0xac },
      { x: -0x51, y: -0x85 },
      { x: -0x65, y: -0x5e },
      { x: -0x4f, y: -0x32 },
      { x: -0x39, y: -0x9 },
      { x: -0x2, y: -0x2 },
      { x: 0x32, y: -0x5 },
      { x: 0x49, y: -0x29 },
      { x: 0x67, y: -0x54 },
      { x: 0x51, y: -0x86 },
      { x: 0x3e, y: -0xad },
      { x: 0x14, y: -0xb6 },
      { x: 0x14, y: -0xe8 },
      { x: 0x14, y: -0x11f },
    ],
  },
  {
    imageBack: a0_0x55db6a(0x1e9),
    imageFront: a0_0x55db6a(0x2d4),
    regX: 0x2c,
    regY: 0x136,
    fillW: 0x36,
    fillH: 0xfa,
    tubeW: 0x56,
    tubeH: 0x12c,
    perspective: ![],
    shape: [
      { x: -0x1b, y: -0x11f },
      { x: -0x1b, y: -0x8d },
      { x: -0x1b, y: -0x1b },
      { x: -0x19, y: -0x3 },
      { x: 0x1, y: -0x4 },
      { x: 0x1a, y: -0x4 },
      { x: 0x1b, y: -0x1a },
      { x: 0x1b, y: -0x84 },
      { x: 0x1b, y: -0x11f },
      { x: 0x1, y: -0x119 },
      { x: -0x1b, y: -0x11f },
    ],
  },
];
var bubbles_arr = [
    "assets/bubble_01.png",
    "assets/bubble_02.png",
    a0_0x55db6a(0x31f),
    a0_0x55db6a(0x309),
    a0_0x55db6a(0x1eb),
  ],
  colors_arr = [
    { fill: a0_0x55db6a(0x1d2), surface: "#64FF76" },
    { fill: "#8D06C6", surface: a0_0x55db6a(0x2cd) },
    { fill: a0_0x55db6a(0x268), surface: a0_0x55db6a(0x29f) },
    { fill: "#E27C03", surface: "#F5AA1B" },
    { fill: a0_0x55db6a(0x32d), surface: a0_0x55db6a(0x2ae) },
    { fill: a0_0x55db6a(0x312), surface: "#20DEE2" },
    { fill: a0_0x55db6a(0x2df), surface: "#27D894" },
    { fill: a0_0x55db6a(0x2f3), surface: a0_0x55db6a(0x20c) },
    { fill: a0_0x55db6a(0x24f), surface: a0_0x55db6a(0x31e) },
    { fill: a0_0x55db6a(0x1f9), surface: a0_0x55db6a(0x236) },
    { fill: "#CCBE06", surface: a0_0x55db6a(0x20b) },
    { fill: a0_0x55db6a(0x2f8), surface: "#E073C7" },
  ],
  colorsHidden_arr = [
    { fill: a0_0x55db6a(0x210), surface: "#858585" },
    { fill: a0_0x55db6a(0x295), surface: "#939393" },
    { fill: "#7F7F7F", surface: "#9F9F9F" },
    { fill: a0_0x55db6a(0x2ab), surface: a0_0x55db6a(0x32c) },
    { fill: a0_0x55db6a(0x29a), surface: "#AEAEAE" },
  ];
function a0_0x522d() {
  var _0x4ba92a = [
    "timer",
    "levelNum",
    "random",
    "assets/sounds/sound_match.ogg",
    "There\x20was\x20an\x20error\x20while\x20trying\x20to\x20resume\x20the\x20SoundJS\x20Web\x20Audio\x20context...",
    "naturalHeight",
    "GAME\x20OVER",
    "tubePos",
    "top",
    "scale",
    "replace",
    "row",
    "logoP",
    "navigator",
    "buttonFacebook",
    "12GlBPzE",
    "play",
    "tick",
    "#B5B5B5",
    "assets/button_music_off.png",
    "protocol",
    "sessionDate",
    "totalCol",
    "startDate",
    "msRequestFullscreen",
    "hiddenIndex",
    "getTime",
    "background",
    "color",
    "assets/sounds/sound_pour1.ogg",
    "447DBVIny",
    "main",
    "installPlugin",
    "left",
    "assets/button_start.png",
    "substr",
    "fileload",
    "#37648E",
    "offsetY",
    "complete",
    "assets/button_select_level_unlock.png",
    "soundResult",
    "25px\x20comicyregular",
    "#B51D1D",
    "fullscreenElement",
    "bottom",
    "beginFill",
    "html",
    "action",
    "accumulate",
    "hitArea",
    "https://www.reddit.com/submit?url=",
    "105035tputho",
    "assets/sounds/music_game.ogg",
    "30px\x20comicyregular",
    "marginX",
    "portrait",
    "assets/button_sound_on.png",
    "empty",
    "gameCanvas",
    "soundStart",
    "size",
    "assets/background.png",
    "imageFront",
    "floor",
    "extraH",
    "suspended",
    "revealLevel",
    "musicGame",
    "7188dlTvLY",
    "Stage",
    "orientationchange",
    "assets/button_levels.png",
    "resume",
    "assets/button_arrow_left.png",
    "webkitFullscreenElement",
    "off",
    "assets/background_p.png",
    "textBaseline",
    "selectTube",
    "alpha",
    "assets/tube_back_02.png",
    "drawRoundRectComplex",
    "#1E6D13",
    "soundTimer",
    "event",
    "60px\x20comicyregular",
    "setChildIndex",
    "#707070",
    "soundPour3",
    "column",
    "backgroundP",
    "direction",
    "#949494",
    "buttonStart",
    "alphabetic",
    "buttonConfirm",
    "45px\x20comicyregular",
    "#DD4545",
    "undefined",
    "buttonCancel",
    "button",
    "loadManifest",
    "scaleX",
    "assets/sounds/sound_pour2.ogg",
    "item",
    "selectLevel",
    "resultTitle",
    "_unlock_",
    "assets/sounds/sound_pour3.ogg",
    "#8C8C8C",
    "buttonLevels",
    "[SCORE]PTS\x20is\x20mine\x20new\x20highscore\x20on\x20Liquid\x20Sort\x20Game\x20game!\x20Try\x20it\x20now!",
    "#4363ED",
    "data",
    "liquidsort2022",
    "35px\x20comicyregular",
    "itemPopP",
    "pourH",
    "mp3",
    "logo",
    "toUpperCase",
    "shape",
    "Touch",
    "Bitmap",
    "itemPop",
    "tube",
    "Container",
    "tubesArr",
    "facebook",
    "option",
    "[SCORE]",
    "killAll",
    "radius",
    "exitTitle",
    "mozFullScreenElement",
    "totalWidth",
    "soundPour1",
    "challengeNum",
    "bubble",
    "center",
    "style",
    "error",
    "exitFullscreen",
    "#9A29D6",
    "assets/social/button_whatsapp.png",
    "reddit",
    "webkitExitFullscreen",
    "font",
    "&thumb=",
    "beginStroke",
    "assets/tube_front_06.png",
    "To\x20install\x20the\x20game\x20just\x20upload\x20folder\x20\x27game\x27\x20to\x20your\x20server.\x20The\x20game\x20won\x27t\x20run\x20locally\x20with\x20some\x20browser\x20like\x20Chrome\x20due\x20to\x20some\x20security\x20mode.",
    "abs",
    "fillW",
    "#rotateHolder",
    "https://www.facebook.com/sharer/sharer.php?u=",
    "tablet",
    "soundError",
    "drawCircle",
    "sound",
    "timesup",
    "#0ABF71",
    "min",
    "context",
    "textAlign",
    "indexOf",
    "https://www.linkedin.com/sharing/share-offsite/?url=",
    "rotateNum",
    "webkitRequestFullscreen",
    "assets/tube_back_03.png",
    "css",
    "levelCompleted",
    "level",
    "soundButton",
    "tubes",
    "removeAllEventListeners",
    "right",
    "currentTarget",
    "hidden",
    "colors",
    "188752KWpIJf",
    "#DD0AA6",
    "ARE\x20YOU\x20SURE\x0aYOU\x20WANT\x20TO\x0aQUIT\x20THE\x20GAME?",
    "Shape",
    "regX",
    "soundPour2",
    "#CC50A9",
    "defaultVol",
    "length",
    "from",
    "graphics",
    "split",
    "Highscore\x20on\x20Liquid\x20Sort\x20is\x20[SCORE]PTS",
    "show",
    "active",
    "options",
    "78705LvTwIf",
    "tubeW",
    "click",
    "update",
    "44185QAkySa",
    "alternateExtensions",
    "Text",
    "assets/bubble_04.png",
    "assets/button_cancel.png",
    "assets/tube_front_04.png",
    "result",
    "perspective",
    "assets/button_settings.png",
    "totalRow",
    "telegram",
    "TIME\x27S\x20UP!",
    "#0EC1C1",
    "containerY",
    "width",
    "scrollTop",
    "linkedin",
    "blur",
    "assets/sounds/sound_score.ogg",
    "lastIndexOf",
    "state",
    "cornerPosB",
    "totalHeight",
    "page",
    "#D6D6D6",
    "assets/bubble_03.png",
    "fillH",
    "select",
    "set",
    "removeEventListener",
    "pointer",
    "assets/sounds/music_main.ogg",
    "assets/button_save.png",
    "focus",
    "count",
    "userAgent",
    "nowDate",
    "splice",
    "#A7A7A7",
    "#203DE5",
    "assets/social/button_telegram.png",
    "colorsArr",
    "editor",
    "enableMouseOver",
    "%20",
    "assets/social/button_facebook.png",
    "buttonArrowL",
    "mask",
    "scoreData",
    "shareTitle",
    "function",
    "location",
    "tubeNum",
    "requestFullscreen",
    "Sound",
    "shareText",
    "colorIndex",
    "tweenScore",
    "buttonTwitter",
    "getResult",
    "paused",
    "share",
    "assets/button_continue.png",
    "assets/sounds/sound_timer_end.ogg",
    "buttonArrowR",
    "cornerPosA",
    "cos",
    "musicMain",
    "assets/item_pop.png",
    "fillY",
    "col",
    "setStrokeStyle",
    "innerHeight",
    "pouring",
    "drawRect",
    "fill",
    "text",
    "scaleY",
    "shareOption",
    "regY",
    "test",
    "pourX",
    "[NUMBER]",
    "container",
    "assets/sounds/sound_clear.ogg",
    "SELECT\x20LEVEL",
    "push",
    "framerate",
    "buttonSelect",
    "sessionTimer",
    "moveTo",
    "gtag",
    "getElementById",
    "Graphics",
    "round",
    "addEventListener",
    "pow",
    "#fff",
    "assets/tube_front_05.png",
    "buttonSoundOff",
    "fillSpeed",
    "resize",
    "LVL[NUMBER]\x20CLEAR",
    "share.jpg",
    "rotation",
    "game",
    "assets/tube_back_05.png",
    "800961duwBKI",
    "#mainLoader\x20span",
    "target",
    "buttonMusicOff",
    "numChildren",
    "substring",
    "autoFill",
    "oldTimer",
    "space",
    "buttonMusicOn",
    "height",
    "#07E021",
    "volume",
    "buttonTelegram",
    "buttonSave",
    "error\x20",
    "assets/button_select_level.png",
    "red",
    "SHARE\x20YOUR\x20SCORE",
    "tubeBack",
    "max",
    "slice",
    "canvas",
    "assets/button_sound_off.png",
    "imageBack",
    "type",
    "filling",
    "buttonShare",
    "colorW",
    "get",
    "visible",
    "buttonSettings",
    "hide",
    "soundSelect",
    "assets/tube_back_06.png",
    "resultLevelTitle",
    "assets/bubble_05.png",
    "assets/tube_back_04.png",
    "assets/button_fullscreen.png",
    "soundScore",
    "itemLevel",
    "buttonWhatsapp",
    "index",
    "sqrt",
    "soundMatch",
    "cursor",
    "WebAudioPlugin",
    "customScore",
    "assets/button_select.png",
    "getContext",
    "#333333",
    "_text_",
    "easeNone",
    "temp",
    "ALLOW_KEYBOARD_INPUT",
    "itemLevelUnlocked",
    "&url=",
    "href",
    "fillPercent",
    "total",
    "autoClear",
    "EXIT\x20GAME",
    "isLandscape",
    "image",
    "clear",
    "#notSupportHolder",
    "countdown",
    "assets/sounds/sound_timer.ogg",
    "#EDE14C",
    "#EF2EC6",
    "Ticker",
    "progress",
    "removeAllChildren",
    "#5D5D5D",
    "buttonFullscreen",
    "share.php?title=",
    "naturalWidth",
    "LVL[NUMBER]",
    "pourY",
    "score",
    "fillX",
    "[NUMBER]PTS",
    "#000",
    "#canvasHolder",
    "#ccff00",
    "totalTubes",
    "addChild",
    "enable",
    "sort",
    "challenge",
    "stop",
    "assets/button_back.png",
    "elapsedTime",
    "levels",
    "resultDesc",
    "stage",
    "#mainLoader",
    "documentElement",
    "msExitFullscreen",
    ".mobileRotate",
    "marginY",
    "tubeFront",
    "buttonExit",
    "fadeOut",
    "spaceX",
    "#1A4970",
    "soundClear",
    "buttonSoundOn",
    "114106CSNXjh",
    "mobile",
    "moveSpeed",
    "#545454",
    "fillShape",
    "00:00",
    "surface",
    "buttonReddit",
    "assets/logo.png",
    "mozCancelFullScreen",
  ];
  a0_0x522d = function () {
    return _0x4ba92a;
  };
  return a0_0x522d();
}
const gameSettings = {
    timer: {
      color: a0_0x55db6a(0x367),
      width: 0x190,
      height: 0x5,
      radius: 0x3,
    },
    score: 0x1e,
    moveSpeed: 0.2,
    fillSpeed: 0.8,
    autoFill: !![],
  },
  textStrings = {
    selectTube: "SELECT\x20TUBE",
    selectLevel: a0_0x55db6a(0x35b),
    level: a0_0x55db6a(0x214),
    clear: a0_0x55db6a(0x36c),
    score: "[NUMBER]PTS",
    timesup: a0_0x55db6a(0x311),
    exitTitle: a0_0x55db6a(0x204),
    exitMessage: a0_0x55db6a(0x2f4),
    share: a0_0x55db6a(0x1d9),
    resultTitle: a0_0x55db6a(0x243),
    resultLevelTitle: "LEVEL\x20[NUMBER]",
    resultDesc: a0_0x55db6a(0x218),
  },
  shareSettings = {
    enable: !![],
    options: [
      a0_0x55db6a(0x2be),
      "twitter",
      "whatsapp",
      a0_0x55db6a(0x310),
      a0_0x55db6a(0x2cf),
      a0_0x55db6a(0x316),
    ],
    shareTitle: a0_0x55db6a(0x2fe),
    shareText: a0_0x55db6a(0x2ad),
    customScore: !![],
    gtag: !![],
  };
$["editor"] = { enable: ![] };
const playerData = { score: 0x0 },
  gameData = {
    paused: !![],
    action: ![],
    tubes: [],
    colorsArr: [],
    colorIndex: 0x0,
    tubesArr: [],
    tubesArrIndex: 0x0,
    stageNum: 0x0,
    stage: {},
    levelNum: 0x0,
    challengeNum: 0x0,
    tubeNum: 0x0,
    complete: ![],
    levelCompleted: 0x1,
  },
  tweenData = { score: 0x0, tweenScore: 0x0 },
  timeData = {
    enable: ![],
    startDate: null,
    sessionDate: null,
    nowDate: null,
    sessionTimer: 0x0,
    timer: 0x0,
    oldTimer: 0x0,
    accumulate: 0x0,
  },
  selectData = { page: 0x0, total: 0x1, max: 0x14, column: 0x5, row: 0x4 },
  cookieName = a0_0x55db6a(0x2b0);
function retrieveLevelData() {
  var _0x1173f5 = a0_0x55db6a,
    _0x4feb3c = Cookies[_0x1173f5(0x1e4)](cookieName);
  _0x4feb3c != undefined &&
    ((gameData[_0x1173f5(0x2e9)] = Number(_0x4feb3c)),
    (gameData["levelCompleted"] =
      gameData[_0x1173f5(0x2e9)] >= levelSettings[_0x1173f5(0x2fa)]
        ? levelSettings["length"]
        : gameData[_0x1173f5(0x2e9)]),
    findSelectPage(gameData["levelCompleted"]));
}
function saveLevelData() {
  var _0x2e735f = a0_0x55db6a;
  Number(gameData[_0x2e735f(0x23e)]) >= gameData[_0x2e735f(0x2e9)] &&
    ((gameData[_0x2e735f(0x2e9)] = Number(gameData[_0x2e735f(0x23e)]) + 0x1),
    (gameData[_0x2e735f(0x2e9)] =
      gameData[_0x2e735f(0x2e9)] >= levelSettings[_0x2e735f(0x2fa)]
        ? levelSettings[_0x2e735f(0x2fa)]
        : gameData[_0x2e735f(0x2e9)]),
    Cookies[_0x2e735f(0x322)](cookieName, gameData[_0x2e735f(0x2e9)], {
      expires: 0x168,
    }));
}
function buildGameButton() {
  var _0x3578c3 = a0_0x55db6a;
  $(window)[_0x3578c3(0x327)](function () {
    var _0x5c2574 = _0x3578c3;
    !buttonSoundOn[_0x5c2574(0x1e5)] && toggleSoundInMute(![]),
      typeof buttonMusicOn != _0x5c2574(0x2a0) &&
        !buttonMusicOn[_0x5c2574(0x1e5)] &&
        toggleMusicInMute(![]);
  }),
    $(window)[_0x3578c3(0x317)](function () {
      var _0xb7d42b = _0x3578c3;
      !buttonSoundOn["visible"] && toggleSoundInMute(!![]),
        typeof buttonMusicOn != _0xb7d42b(0x2a0) &&
          !buttonMusicOn[_0xb7d42b(0x1e5)] &&
          toggleMusicInMute(!![]);
    });
  audioOn &&
    (muteSoundOn && toggleSoundMute(!![]),
    muteMusicOn && toggleMusicMute(!![]));
  (buttonStart[_0x3578c3(0x1f4)] = _0x3578c3(0x324)),
    buttonStart["addEventListener"](_0x3578c3(0x304), function (_0x3b9e87) {
      var _0x1f4451 = _0x3578c3;
      (gameData[_0x1f4451(0x1e0)] = _0x1f4451(0x220)),
        playSound(_0x1f4451(0x2eb)),
        goPage(_0x1f4451(0x321));
    }),
    (buttonLevels[_0x3578c3(0x1f4)] = "pointer"),
    buttonLevels[_0x3578c3(0x365)]("click", function (_0x37d844) {
      var _0x3dcbe9 = _0x3578c3;
      (gameData[_0x3dcbe9(0x1e0)] = "level"),
        playSound(_0x3dcbe9(0x2eb)),
        goPage(_0x3dcbe9(0x2ea));
    }),
    (buttonLevelArrowL[_0x3578c3(0x1f4)] = _0x3578c3(0x324)),
    buttonLevelArrowL[_0x3578c3(0x365)]("click", function (_0x40e5be) {
      toggleSelect(![]);
    }),
    (buttonLevelArrowR[_0x3578c3(0x1f4)] = _0x3578c3(0x324)),
    buttonLevelArrowR["addEventListener"](
      _0x3578c3(0x304),
      function (_0x4cd2fc) {
        toggleSelect(!![]);
      }
    ),
    (buttonSelect["cursor"] = _0x3578c3(0x324)),
    buttonSelect[_0x3578c3(0x365)](_0x3578c3(0x304), function (_0x55e557) {
      var _0x83e9e7 = _0x3578c3;
      playSound(_0x83e9e7(0x2eb)), goPage(_0x83e9e7(0x36f));
    }),
    (buttonBack["cursor"] = _0x3578c3(0x324)),
    buttonBack["addEventListener"](_0x3578c3(0x304), function (_0x58b4be) {
      var _0x1a85f4 = _0x3578c3;
      playSound("soundButton"), goPage(_0x1a85f4(0x25c));
    }),
    (buttonArrowL[_0x3578c3(0x1f4)] = _0x3578c3(0x324)),
    buttonArrowL[_0x3578c3(0x365)](_0x3578c3(0x304), function (_0x510460) {
      var _0x42ea30 = _0x3578c3;
      playSound(_0x42ea30(0x1f3)), toggleTube(![]);
    }),
    (buttonArrowR[_0x3578c3(0x1f4)] = "pointer"),
    buttonArrowR[_0x3578c3(0x365)](_0x3578c3(0x304), function (_0x45c9bc) {
      var _0x30186b = _0x3578c3;
      playSound(_0x30186b(0x1f3)), toggleTube(!![]);
    }),
    itemExit["addEventListener"](_0x3578c3(0x304), function (_0xaf864d) {}),
    (buttonContinue[_0x3578c3(0x1f4)] = _0x3578c3(0x324)),
    buttonContinue["addEventListener"](_0x3578c3(0x304), function (_0xc3563f) {
      var _0x9fb1f2 = _0x3578c3;
      playSound(_0x9fb1f2(0x2eb)),
        gameData[_0x9fb1f2(0x1e0)] == _0x9fb1f2(0x2ea)
          ? goPage(_0x9fb1f2(0x2ea))
          : goPage(_0x9fb1f2(0x25c));
    });
  if (shareSettings[_0x3578c3(0x21e)]) {
    (buttonShare["cursor"] = _0x3578c3(0x324)),
      buttonShare[_0x3578c3(0x365)]("click", function (_0x59ef10) {
        var _0x374529 = _0x3578c3;
        playSound(_0x374529(0x2eb)), toggleSocialShare(!![]);
      });
    for (
      let _0x463525 = 0x0;
      _0x463525 < shareSettings["options"][_0x3578c3(0x2fa)];
      _0x463525++
    ) {
      ($[_0x3578c3(0x343)][_0x3578c3(0x2a2) + _0x463525][_0x3578c3(0x1f4)] =
        _0x3578c3(0x324)),
        $[_0x3578c3(0x343)][_0x3578c3(0x2a2) + _0x463525]["addEventListener"](
          _0x3578c3(0x304),
          function (_0xc4ef9f) {
            var _0x1e35b4 = _0x3578c3;
            shareLinks(
              _0xc4ef9f[_0x1e35b4(0x373)][_0x1e35b4(0x354)],
              addCommas(playerData["score"])
            );
          }
        );
    }
  }
  (buttonSoundOff[_0x3578c3(0x1f4)] = _0x3578c3(0x324)),
    buttonSoundOff[_0x3578c3(0x365)]("click", function (_0x37bfb0) {
      toggleSoundMute(!![]);
    }),
    (buttonSoundOn[_0x3578c3(0x1f4)] = _0x3578c3(0x324)),
    buttonSoundOn[_0x3578c3(0x365)](_0x3578c3(0x304), function (_0x955ba4) {
      toggleSoundMute(![]);
    });
  typeof buttonMusicOff != _0x3578c3(0x2a0) &&
    ((buttonMusicOff[_0x3578c3(0x1f4)] = _0x3578c3(0x324)),
    buttonMusicOff["addEventListener"](_0x3578c3(0x304), function (_0x5705f0) {
      toggleMusicMute(!![]);
    }));
  typeof buttonMusicOn != _0x3578c3(0x2a0) &&
    ((buttonMusicOn[_0x3578c3(0x1f4)] = _0x3578c3(0x324)),
    buttonMusicOn[_0x3578c3(0x365)](_0x3578c3(0x304), function (_0x541145) {
      toggleMusicMute(![]);
    }));
  (buttonFullscreen[_0x3578c3(0x1f4)] = _0x3578c3(0x324)),
    buttonFullscreen[_0x3578c3(0x365)](_0x3578c3(0x304), function (_0x566780) {
      toggleFullScreen();
    }),
    (buttonExit["cursor"] = "pointer"),
    buttonExit["addEventListener"](_0x3578c3(0x304), function (_0xa565a2) {
      togglePop(!![]), toggleOptions();
    }),
    (buttonSettings[_0x3578c3(0x1f4)] = _0x3578c3(0x324)),
    buttonSettings["addEventListener"](_0x3578c3(0x304), function (_0x173375) {
      toggleOptions();
    }),
    (buttonConfirm[_0x3578c3(0x1f4)] = "pointer"),
    buttonConfirm[_0x3578c3(0x365)](_0x3578c3(0x304), function (_0x3a4804) {
      var _0x32b3b3 = _0x3578c3;
      playSound(_0x32b3b3(0x2eb)),
        togglePop(![]),
        stopSound(),
        stopGame(),
        goPage(_0x32b3b3(0x25c));
    }),
    (buttonCancel[_0x3578c3(0x1f4)] = _0x3578c3(0x324)),
    buttonCancel[_0x3578c3(0x365)](_0x3578c3(0x304), function (_0x4231a9) {
      var _0x5ebfd2 = _0x3578c3;
      playSound(_0x5ebfd2(0x2eb)), togglePop(![]);
    });
  for (
    var _0x3effb9 = 0x0;
    _0x3effb9 < tubes_arr[_0x3578c3(0x2fa)];
    _0x3effb9++
  ) {
    gameData[_0x3578c3(0x2bd)][_0x3578c3(0x35c)](_0x3effb9);
  }
  for (
    var _0x3effb9 = 0x0;
    _0x3effb9 < colors_arr[_0x3578c3(0x2fa)];
    _0x3effb9++
  ) {
    gameData[_0x3578c3(0x32f)][_0x3578c3(0x35c)](_0x3effb9);
  }
  shuffle(gameData["tubesArr"]), buildSelectLevel();
}
function toggleTube(_0x3dc06d) {
  var _0x5c1efc = a0_0x55db6a;
  _0x3dc06d
    ? (gameData[_0x5c1efc(0x33a)]++,
      (gameData["tubeNum"] =
        gameData["tubeNum"] > tubes_arr["length"] - 0x1
          ? 0x0
          : gameData[_0x5c1efc(0x33a)]))
    : (gameData[_0x5c1efc(0x33a)]--,
      (gameData[_0x5c1efc(0x33a)] =
        gameData[_0x5c1efc(0x33a)] < 0x0
          ? tubes_arr[_0x5c1efc(0x2fa)] - 0x1
          : gameData["tubeNum"])),
    selectTube();
}
function selectTube() {
  var _0x29a57f = a0_0x55db6a,
    _0x141847 = Math[_0x29a57f(0x27d)](
      Math[_0x29a57f(0x23f)]() * colors_arr[_0x29a57f(0x2fa)]
    );
  prepareStage(),
    createTube(0x0, 0x0),
    pushColours(
      0x0,
      _0x141847,
      tubes_arr[gameData[_0x29a57f(0x33a)]][_0x29a57f(0x320)]
    ),
    fillLiquid(0x0),
    updateTubeData(gameData["tubes"][0x0]),
    (gameData[_0x29a57f(0x2ec)][0x0][_0x29a57f(0x2a4)] = gameData[
      _0x29a57f(0x2ec)
    ][0x0][_0x29a57f(0x353)] =
      0.8),
    (gameData[_0x29a57f(0x263)] =
      (tubes_arr[gameData[_0x29a57f(0x33a)]][_0x29a57f(0x320)] / 0x2) * 0.8);
}
function buildSelectLevel() {
  var _0x3a7f6d = a0_0x55db6a;
  selectData[_0x3a7f6d(0x202)] =
    levelSettings[_0x3a7f6d(0x2fa)] / selectData["max"];
  String(selectData[_0x3a7f6d(0x202)])[_0x3a7f6d(0x2e3)](".") > -0x1 &&
    (selectData[_0x3a7f6d(0x202)] =
      Math[_0x3a7f6d(0x27d)](selectData[_0x3a7f6d(0x202)]) + 0x1);
  toggleSelect(![]);
  for (
    var _0x11f954 = 0x0;
    _0x11f954 < selectData[_0x3a7f6d(0x248)];
    _0x11f954++
  ) {
    for (var _0xfd85ff = 0x0; _0xfd85ff < selectData["column"]; _0xfd85ff++) {
      ($[_0x3a7f6d(0x2ea)][_0x11f954 + _0x3a7f6d(0x2a9) + _0xfd85ff][
        _0x3a7f6d(0x1f4)
      ] = _0x3a7f6d(0x324)),
        $[_0x3a7f6d(0x2ea)][_0x11f954 + _0x3a7f6d(0x2a9) + _0xfd85ff][
          _0x3a7f6d(0x365)
        ]("click", function (_0x1c3766) {
          var _0x26423b = _0x3a7f6d;
          (gameData[_0x26423b(0x23e)] =
            Number(
              _0x1c3766[_0x26423b(0x373)][_0x26423b(0x352)][_0x26423b(0x352)]
            ) - 0x1),
            playSound(_0x26423b(0x2eb)),
            goPage(_0x26423b(0x321));
        });
    }
  }
}
function toggleSelect(_0x1326a7) {
  var _0x3cb3d5 = a0_0x55db6a;
  _0x1326a7
    ? (selectData[_0x3cb3d5(0x31d)]++,
      (selectData[_0x3cb3d5(0x31d)] =
        selectData[_0x3cb3d5(0x31d)] > selectData[_0x3cb3d5(0x202)]
          ? selectData[_0x3cb3d5(0x202)]
          : selectData["page"]))
    : (selectData[_0x3cb3d5(0x31d)]--,
      (selectData["page"] =
        selectData[_0x3cb3d5(0x31d)] < 0x1
          ? 0x1
          : selectData[_0x3cb3d5(0x31d)])),
    selectPage(selectData[_0x3cb3d5(0x31d)]);
}
function selectPage(_0x324a39) {
  var _0x4e6d7f = a0_0x55db6a;
  (selectData[_0x4e6d7f(0x31d)] = _0x324a39),
    (selectData[_0x4e6d7f(0x31d)] =
      selectData[_0x4e6d7f(0x31d)] < 0x1 ? 0x1 : selectData[_0x4e6d7f(0x31d)]);
  var _0xcceda0 = (selectData[_0x4e6d7f(0x31d)] - 0x1) * selectData["max"];
  for (
    var _0x4c759a = 0x0;
    _0x4c759a < selectData[_0x4e6d7f(0x248)];
    _0x4c759a++
  ) {
    for (var _0x4cd5a3 = 0x0; _0x4cd5a3 < selectData["column"]; _0x4cd5a3++) {
      ($["level"][_0x4c759a + _0x4e6d7f(0x2a9) + _0x4cd5a3][_0x4e6d7f(0x1e5)] =
        ![]),
        _0xcceda0 < levelSettings[_0x4e6d7f(0x2fa)]
          ? (($["level"][_0x4c759a + _0x4e6d7f(0x1fa) + _0x4cd5a3][
              _0x4e6d7f(0x352)
            ] = _0xcceda0 + 0x1),
            ($[_0x4e6d7f(0x2ea)][_0x4c759a + _0x4e6d7f(0x2a9) + _0x4cd5a3][
              _0x4e6d7f(0x352)
            ][_0x4e6d7f(0x1e5)] = !![]),
            ($[_0x4e6d7f(0x2ea)][_0x4c759a + "_" + _0x4cd5a3][
              _0x4e6d7f(0x1e5)
            ] = !![]))
          : (($[_0x4e6d7f(0x2ea)][_0x4c759a + "_" + _0x4cd5a3][
              _0x4e6d7f(0x1e5)
            ] = ![]),
            ($["level"][_0x4c759a + _0x4e6d7f(0x2a9) + _0x4cd5a3][
              _0x4e6d7f(0x352)
            ][_0x4e6d7f(0x1e5)] = ![])),
        _0xcceda0 < gameData[_0x4e6d7f(0x2e9)] &&
          (gameData[_0x4e6d7f(0x280)] &&
          gameData[_0x4e6d7f(0x23e)] + 0x1 ==
            $[_0x4e6d7f(0x2ea)][_0x4c759a + _0x4e6d7f(0x1fa) + _0x4cd5a3][
              _0x4e6d7f(0x352)
            ]
            ? unlockLevelTween(_0x4c759a, _0x4cd5a3)
            : ($["level"][_0x4c759a + _0x4e6d7f(0x2a9) + _0x4cd5a3]["visible"] =
                !![])),
        _0xcceda0++;
    }
  }
  selectData[_0x4e6d7f(0x31d)] == 0x1
    ? (buttonLevelArrowL[_0x4e6d7f(0x1e5)] = ![])
    : (buttonLevelArrowL[_0x4e6d7f(0x1e5)] = !![]),
    selectData["page"] == selectData[_0x4e6d7f(0x202)] ||
    selectData[_0x4e6d7f(0x202)] == 0x1
      ? (buttonLevelArrowR["visible"] = ![])
      : (buttonLevelArrowR[_0x4e6d7f(0x1e5)] = !![]);
}
function unlockLevelTween(_0x5e3182, _0x345c39) {
  var _0x2ce26d = a0_0x55db6a;
  (gameData["revealLevel"] = ![]),
    ($[_0x2ce26d(0x2ea)][_0x5e3182 + _0x2ce26d(0x2a9) + _0x345c39]["visible"] =
      !![]),
    ($[_0x2ce26d(0x2ea)][_0x5e3182 + _0x2ce26d(0x2a9) + _0x345c39][
      _0x2ce26d(0x28d)
    ] = 0x0),
    TweenMax["to"]($["level"][_0x5e3182 + _0x2ce26d(0x2a9) + _0x345c39], 0.2, {
      delay: 0.5,
      alpha: 0x1,
      scaleX: 1.2,
      scaleY: 1.2,
      overwrite: !![],
      onComplete: function () {
        var _0x450e58 = _0x2ce26d;
        TweenMax["to"](
          $["level"][_0x5e3182 + _0x450e58(0x2a9) + _0x345c39],
          0.2,
          { alpha: 0x1, scaleX: 0x1, scaleY: 0x1, overwrite: !![] }
        );
      },
    });
}
function findSelectPage(_0x2b7e47) {
  var _0x39bff1 = a0_0x55db6a;
  for (var _0x1fa45a = 0x0; _0x1fa45a < 0xa; _0x1fa45a++) {
    var _0x4e41ff = (_0x1fa45a + 0x1) * selectData[_0x39bff1(0x1db)];
    _0x2b7e47 <= _0x4e41ff &&
      ((selectData[_0x39bff1(0x31d)] = _0x1fa45a + 0x1), (_0x1fa45a = 0xa));
  }
}
function toggleSocialShare(_0x561283) {
  var _0x388fa1 = a0_0x55db6a;
  if (!shareSettings[_0x388fa1(0x21e)]) return;
  (buttonShare[_0x388fa1(0x1e5)] = _0x561283 == !![] ? ![] : !![]),
    (shareSaveContainer["visible"] = _0x561283 == !![] ? ![] : !![]),
    (socialContainer[_0x388fa1(0x1e5)] = _0x561283),
    _0x561283 &&
      typeof buttonSave !== "undefined" &&
      TweenMax["to"](buttonShare, 0x3, {
        overwrite: !![],
        onComplete: toggleSocialShare,
        onCompleteParams: [![]],
      });
}
function positionShareButtons() {
  var _0x3a05ef = a0_0x55db6a;
  if (!shareSettings["enable"]) return;
  typeof buttonShare !== "undefined" &&
    typeof buttonSave !== "undefined" &&
    (buttonSave[_0x3a05ef(0x1e5)]
      ? ((buttonShare["x"] = -(
          buttonShare[_0x3a05ef(0x206)][_0x3a05ef(0x213)] / 0x2 +
          0x5
        )),
        (buttonSave["x"] =
          buttonShare[_0x3a05ef(0x206)][_0x3a05ef(0x213)] / 0x2 + 0x5))
      : (buttonShare["x"] = 0x0));
}
function togglePop(_0x270086) {
  var _0x5544ee = a0_0x55db6a;
  exitContainer[_0x5544ee(0x1e5)] = _0x270086;
}
var curPage = "";
function goPage(_0x3e1104) {
  var _0x324173 = a0_0x55db6a;
  (curPage = _0x3e1104),
    (mainContainer["visible"] = ![]),
    (levelContainer[_0x324173(0x1e5)] = ![]),
    (selectContainer["visible"] = ![]),
    (gameContainer[_0x324173(0x1e5)] = ![]),
    (waterContainer[_0x324173(0x1e5)] = ![]),
    (resultContainer[_0x324173(0x1e5)] = ![]),
    togglePop(![]),
    toggleOptions(![]),
    stopMusicLoop("musicGame");
  var _0x3af667 = null;
  switch (_0x3e1104) {
    case _0x324173(0x25c):
      (_0x3af667 = mainContainer), playMusicLoop("musicMain");
      break;
    case _0x324173(0x2ea):
      (_0x3af667 = levelContainer), selectPage(selectData[_0x324173(0x31d)]);
      break;
    case _0x324173(0x321):
      (_0x3af667 = selectContainer),
        (waterContainer[_0x324173(0x1e5)] = !![]),
        selectTube();
      break;
    case "game":
      (_0x3af667 = gameContainer),
        (waterContainer[_0x324173(0x1e5)] = !![]),
        startGame();
      !$["editor"]["enable"] &&
        (stopMusicLoop(_0x324173(0x349)), playMusicLoop(_0x324173(0x281)));
      break;
    case _0x324173(0x30c):
      (_0x3af667 = resultContainer),
        stopGame(),
        toggleSocialShare(![]),
        playSound(_0x324173(0x266));
      gameData[_0x324173(0x1e0)] == _0x324173(0x2ea)
        ? (resultTitleTxt["text"] = textStrings[_0x324173(0x1ea)][
            _0x324173(0x247)
          ](_0x324173(0x358), gameData[_0x324173(0x2c7)]))
        : (resultTitleTxt[_0x324173(0x352)] = textStrings[_0x324173(0x2a8)]);
      (tweenData[_0x324173(0x33f)] = 0x0),
        TweenMax["to"](tweenData, 0.5, {
          tweenScore: playerData["score"],
          overwrite: !![],
          onUpdate: function () {
            var _0x31bbd7 = _0x324173;
            resultDescTxt[_0x31bbd7(0x352)] = textStrings[_0x31bbd7(0x225)][
              "replace"
            ](
              _0x31bbd7(0x358),
              addCommas(Math[_0x31bbd7(0x27d)](tweenData[_0x31bbd7(0x33f)]))
            );
          },
        }),
        saveGame(playerData[_0x324173(0x216)]);
      break;
  }
  _0x3af667 != null &&
    ((_0x3af667[_0x324173(0x1e5)] = !![]),
    (_0x3af667[_0x324173(0x28d)] = 0x0),
    TweenMax["to"](_0x3af667, 0.5, { alpha: 0x1, overwrite: !![] })),
    resizeCanvas();
}
function startGame() {
  var _0x274789 = a0_0x55db6a;
  if ($[_0x274789(0x330)]["enable"]) return;
  (gameData[_0x274789(0x342)] = ![]),
    (gameData[_0x274789(0x26d)] = ![]),
    (gameData[_0x274789(0x263)] = 0x0),
    (gameData["resize"] = ![]),
    gameData[_0x274789(0x1e0)] == _0x274789(0x220) &&
      (gameData["levelNum"] = 0x0),
    (gameData[_0x274789(0x2c7)] = gameData[_0x274789(0x23e)] + 0x1),
    setupStage();
}
function stopGame() {
  var _0x390035 = a0_0x55db6a;
  (gameData[_0x390035(0x342)] = !![]),
    TweenMax[_0x390035(0x2c1)](![], !![], ![]),
    toggleGameTimer(![]),
    waterContainer[_0x390035(0x20f)]();
}
function saveGame(_0x385aeb) {
  var _0x2dee47 = a0_0x55db6a;
  typeof toggleScoreboardSave == _0x2dee47(0x338) &&
    (($[_0x2dee47(0x336)][_0x2dee47(0x216)] = _0x385aeb),
    typeof type != _0x2dee47(0x2a0) &&
      ($[_0x2dee47(0x336)][_0x2dee47(0x1e0)] = type),
    toggleScoreboardSave(!![]));
}
function resizeGameUI() {
  var _0x508c42 = a0_0x55db6a;
  (waterContainer["x"] = canvasW / 0x2),
    (waterContainer["y"] = canvasH / 0x2 + gameData[_0x508c42(0x263)]),
    (editContainer["x"] = canvasW / 0x2),
    (editContainer["y"] = canvasH / 0x2 + gameData[_0x508c42(0x263)]),
    (levelDisplayContainer["x"] = offset["x"] + 0x64),
    (levelDisplayContainer["y"] = offset["y"] + 0x28),
    (levelContainer["x"] = canvasW / 0x2),
    (levelContainer["y"] = canvasH / 0x2),
    viewport[_0x508c42(0x205)]
      ? ((timerShape["x"] = timerShapeBg["x"] =
          canvasW / 0x2 -
          gameSettings[_0x508c42(0x23d)][_0x508c42(0x314)] / 0x2),
        (timerShape["y"] = timerShapeBg["y"] = (canvasH / 0x64) * 0x55),
        (statusContainer["x"] = canvasW / 0x2),
        (statusContainer["y"] = timerShape["y"] - 0x14),
        (selectLevelTitleTxt["y"] = -((canvasH / 0x64) * 0x19)),
        (buttonLevelArrowL["x"] = -0x12c),
        (buttonLevelArrowR["x"] = 0x12c),
        (buttonLevelArrowL["y"] = 0x0),
        (buttonLevelArrowR["y"] = 0x0),
        (buttonBack["y"] = (canvasH / 0x64) * 0x1e))
      : ((timerShape["x"] = timerShapeBg["x"] =
          canvasW / 0x2 -
          gameSettings[_0x508c42(0x23d)][_0x508c42(0x314)] / 0x2),
        (timerShape["y"] = timerShapeBg["y"] = (canvasH / 0x64) * 0x5c),
        (statusContainer["x"] = canvasW / 0x2),
        (statusContainer["y"] = timerShape["y"] - 0x14),
        (selectLevelTitleTxt["y"] = -((canvasH / 0x64) * 0x19)),
        (buttonLevelArrowL["x"] = -0x10e),
        (buttonLevelArrowR["x"] = 0x10e),
        (buttonLevelArrowL["y"] = 0x0),
        (buttonLevelArrowR["y"] = 0x0),
        (buttonBack["y"] = (canvasH / 0x64) * 0x1e)),
    curPage == _0x508c42(0x36f) &&
      (gameData[_0x508c42(0x1e1)]
        ? (gameData[_0x508c42(0x36b)] = !![])
        : positionTubes());
}
function positionTubes() {
  var _0x34a3b3 = a0_0x55db6a;
  if (
    $[_0x34a3b3(0x330)][_0x34a3b3(0x21e)] &&
    edit[_0x34a3b3(0x2bf)] == _0x34a3b3(0x2ec)
  )
    return;
  if (gameData[_0x34a3b3(0x2bb)] == undefined) return;
  var _0x2b5d6d = {
    x: 0x0,
    y: 0x0,
    sX: 0x0,
    sY: 0x0,
    col: 0x0,
    width: 0x0,
    height: 0x0,
    totalTubes: 0x0,
    totalCol: 0x0,
    totalRow: 0x0,
    totalWidth: 0x0,
    totalHeight: 0x0,
  };
  _0x2b5d6d[_0x34a3b3(0x21c)] = gameData[_0x34a3b3(0x2ec)]["length"];
  viewport[_0x34a3b3(0x205)]
    ? ((gameData[_0x34a3b3(0x274)] =
        levelSettings[gameData["levelNum"]]["marginX"]),
      (gameData["marginY"] =
        levelSettings[gameData[_0x34a3b3(0x23e)]][_0x34a3b3(0x22b)]),
      (_0x2b5d6d[_0x34a3b3(0x253)] =
        levelSettings[gameData["levelNum"]][_0x34a3b3(0x297)]))
    : ((gameData[_0x34a3b3(0x274)] =
        levelSettings[gameData[_0x34a3b3(0x23e)]]["portrait"][
          _0x34a3b3(0x274)
        ]),
      (gameData[_0x34a3b3(0x22b)] =
        levelSettings[gameData[_0x34a3b3(0x23e)]][_0x34a3b3(0x275)][
          _0x34a3b3(0x22b)
        ]),
      (_0x2b5d6d[_0x34a3b3(0x253)] =
        levelSettings[gameData[_0x34a3b3(0x23e)]]["portrait"][
          _0x34a3b3(0x297)
        ]));
  (_0x2b5d6d[_0x34a3b3(0x314)] = gameData["tube"]["w"]),
    (_0x2b5d6d[_0x34a3b3(0x1d1)] = gameData[_0x34a3b3(0x2bb)]["h"]),
    (_0x2b5d6d[_0x34a3b3(0x30f)] =
      _0x2b5d6d[_0x34a3b3(0x21c)] / _0x2b5d6d[_0x34a3b3(0x253)]);
  String(_0x2b5d6d[_0x34a3b3(0x30f)])["indexOf"](".") > -0x1 &&
    (_0x2b5d6d[_0x34a3b3(0x30f)] =
      Math[_0x34a3b3(0x27d)](_0x2b5d6d[_0x34a3b3(0x30f)]) + 0x1);
  (_0x2b5d6d["totalWidth"] =
    (_0x2b5d6d[_0x34a3b3(0x253)] - 0x1) *
    (_0x2b5d6d[_0x34a3b3(0x314)] + gameData[_0x34a3b3(0x274)])),
    (_0x2b5d6d["totalHeight"] =
      (_0x2b5d6d[_0x34a3b3(0x30f)] - 0x1) *
      (_0x2b5d6d[_0x34a3b3(0x1d1)] + gameData[_0x34a3b3(0x22b)])),
    (_0x2b5d6d["sX"] = -(_0x2b5d6d["totalWidth"] / 0x2)),
    (_0x2b5d6d["sY"] = -(_0x2b5d6d["totalHeight"] / 0x2)),
    (_0x2b5d6d["x"] = _0x2b5d6d["sX"]),
    (_0x2b5d6d["y"] = _0x2b5d6d["sY"]);
  for (
    var _0x372b44 = 0x0;
    _0x372b44 < gameData[_0x34a3b3(0x2ec)][_0x34a3b3(0x2fa)];
    _0x372b44++
  ) {
    var _0x3176f3 = gameData[_0x34a3b3(0x2ec)][_0x372b44];
    (_0x3176f3["x"] = _0x3176f3["data"]["x"] = _0x2b5d6d["x"]),
      (_0x3176f3["y"] = _0x3176f3[_0x34a3b3(0x2af)]["y"] =
        _0x2b5d6d["y"] + _0x2b5d6d[_0x34a3b3(0x1d1)] / 0x2),
      (_0x2b5d6d["x"] += _0x2b5d6d["width"] + gameData[_0x34a3b3(0x274)]),
      _0x2b5d6d["col"]++;
    if (_0x2b5d6d["col"] > _0x2b5d6d[_0x34a3b3(0x253)] - 0x1) {
      _0x2b5d6d[_0x34a3b3(0x34c)] = 0x0;
      var _0x4a1406 =
        gameData[_0x34a3b3(0x2ec)][_0x34a3b3(0x2fa)] - (_0x372b44 + 0x1);
      if (_0x4a1406 <= _0x2b5d6d["totalCol"]) {
        var _0x3a3154 =
          (_0x4a1406 - 0x1) * (_0x2b5d6d["width"] + gameData[_0x34a3b3(0x274)]);
        _0x2b5d6d["sX"] = -(_0x3a3154 / 0x2);
      }
      (_0x2b5d6d["x"] = _0x2b5d6d["sX"]),
        (_0x2b5d6d["y"] +=
          _0x2b5d6d[_0x34a3b3(0x1d1)] + gameData[_0x34a3b3(0x22b)]);
    }
  }
  var _0x1f3ec3 =
      _0x2b5d6d[_0x34a3b3(0x2c5)] +
      _0x2b5d6d[_0x34a3b3(0x314)] +
      gameData[_0x34a3b3(0x274)],
    _0x5f228d =
      _0x2b5d6d[_0x34a3b3(0x31c)] +
      _0x2b5d6d[_0x34a3b3(0x1d1)] +
      gameData["marginY"],
    _0x1beb82 = 0x3e8,
    _0x58304d = 0x1f4,
    _0x1a83f4 = 0x1,
    _0x1382d1 = 0x1;
  if (viewport[_0x34a3b3(0x205)]) {
  } else (_0x1beb82 = 0x1f4), (_0x58304d = 0x320);
  _0x1f3ec3 > _0x1beb82 && (_0x1a83f4 = _0x1beb82 / _0x1f3ec3),
    _0x5f228d > _0x58304d && (_0x1382d1 = _0x58304d / _0x5f228d),
    (gameData[_0x34a3b3(0x246)] = 0x1),
    (gameData[_0x34a3b3(0x246)] =
      _0x1a83f4 > _0x1382d1 ? _0x1382d1 : _0x1a83f4),
    (waterContainer["scaleX"] = waterContainer[_0x34a3b3(0x353)] =
      gameData[_0x34a3b3(0x246)]);
}
function prepareStage() {
  var _0x52d356 = a0_0x55db6a;
  (tweenData[_0x52d356(0x33f)] = 0x0),
    (statusTxt[_0x52d356(0x352)] = ""),
    waterContainer["removeAllChildren"](),
    (timerContainer[_0x52d356(0x1e5)] = ![]),
    (gameData[_0x52d356(0x2ec)] = []),
    (gameData[_0x52d356(0x34f)] = []),
    (gameData[_0x52d356(0x1e1)] = ![]),
    (gameData["tube"] = {
      w: 0x0,
      h: 0x0,
      colorW: 0x0,
      fillW: 0x0,
      fillH: 0x0,
      fillX: 0x0,
      fillY: 0x0,
      fillPercent: 0x0,
      pourW: 0xa,
      pourH: 0x0,
      surfaceScale: 0.3,
      hidden: levelSettings[gameData[_0x52d356(0x23e)]][_0x52d356(0x2f0)],
    }),
    (gameData[_0x52d356(0x2bb)]["w"] =
      tubes_arr[gameData[_0x52d356(0x33a)]][_0x52d356(0x303)]),
    (gameData[_0x52d356(0x2bb)]["h"] = tubes_arr[gameData["tubeNum"]]["tubeH"]),
    (gameData[_0x52d356(0x2bb)][_0x52d356(0x2d7)] =
      tubes_arr[gameData[_0x52d356(0x33a)]][_0x52d356(0x2d7)]),
    (gameData[_0x52d356(0x2bb)][_0x52d356(0x320)] =
      tubes_arr[gameData["tubeNum"]][_0x52d356(0x320)]),
    (gameData[_0x52d356(0x2bb)][_0x52d356(0x201)] =
      gameData[_0x52d356(0x2bb)][_0x52d356(0x320)] + 0x96),
    (gameData["tube"][_0x52d356(0x1e3)] =
      gameData[_0x52d356(0x2bb)][_0x52d356(0x320)] * 0x3),
    (gameData["tube"][_0x52d356(0x217)] =
      gameData[_0x52d356(0x2bb)][_0x52d356(0x2d7)] / 1.5),
    (gameData[_0x52d356(0x2bb)]["fillY"] =
      gameData[_0x52d356(0x2bb)]["h"] +
      gameData[_0x52d356(0x2bb)]["fillW"] * 1.5),
    (gameData[_0x52d356(0x2bb)][_0x52d356(0x2b3)] =
      gameData["tube"]["h"] + gameData["tube"][_0x52d356(0x2d7)] * 1.05),
    (gameData["stage"][_0x52d356(0x23d)] =
      levelSettings[gameData[_0x52d356(0x23e)]]["timer"]),
    (gameData[_0x52d356(0x226)][_0x52d356(0x216)] =
      levelSettings[gameData[_0x52d356(0x23e)]]["score"]),
    (timeData[_0x52d356(0x209)] =
      levelSettings[gameData[_0x52d356(0x23e)]][_0x52d356(0x23d)]);
}
function setupStage() {
  var _0x945b9d = a0_0x55db6a;
  prepareStage();
  for (
    var _0x506361 = 0x0;
    _0x506361 < levelSettings[gameData[_0x945b9d(0x23e)]][_0x945b9d(0x2ec)];
    _0x506361++
  ) {
    createTube(0x0, 0x0);
  }
  fillAllTubes(),
    resizeGameUI(),
    updateGameLevel(),
    (waterContainer[_0x945b9d(0x28d)] = 0x0),
    !$[_0x945b9d(0x330)][_0x945b9d(0x21e)]
      ? TweenMax["to"](waterContainer, 0x1, {
          alpha: 0x1,
          overwrite: !![],
          onComplete: function () {
            var _0x577640 = _0x945b9d;
            (gameData["action"] = !![]),
              playSound(_0x577640(0x279)),
              (timerContainer[_0x577640(0x1e5)] = !![]),
              toggleGameTimer(!![]),
              toggleGameSessionTimer(!![]);
          },
        })
      : (waterContainer[_0x945b9d(0x28d)] = 0x1);
}
function fillAllTubes() {
  var _0x28831e = a0_0x55db6a,
    _0x8a3e1e = [],
    _0x333478 = [],
    _0x193e24 = [],
    _0x2e9294 = levelSettings[gameData[_0x28831e(0x23e)]][_0x28831e(0x277)];
  _0x2e9294 = _0x2e9294 < 0x0 ? 0x1 : _0x2e9294;
  for (
    var _0x2058ae = 0x0;
    _0x2058ae < gameData[_0x28831e(0x2ec)][_0x28831e(0x2fa)];
    _0x2058ae++
  ) {
    _0x333478[_0x28831e(0x35c)](_0x2058ae);
  }
  shuffle(_0x333478);
  for (var _0x2058ae = 0x0; _0x2058ae < _0x2e9294; _0x2058ae++) {
    _0x8a3e1e["push"](_0x333478[_0x2058ae]);
  }
  _0x333478 = [];
  for (
    var _0x2058ae = 0x0;
    _0x2058ae < gameData[_0x28831e(0x2ec)]["length"];
    _0x2058ae++
  ) {
    _0x8a3e1e["indexOf"](_0x2058ae) == -0x1 &&
      _0x333478[_0x28831e(0x35c)](_0x2058ae);
  }
  (gameData[_0x28831e(0x33e)] = 0x0), shuffle(gameData["colorsArr"]);
  for (var _0x2058ae = 0x0; _0x2058ae < _0x333478["length"]; _0x2058ae++) {
    var _0x17b939 = getTubeColor();
    for (
      var _0x45fe37 = 0x0;
      _0x45fe37 < levelSettings[gameData["levelNum"]][_0x28831e(0x224)];
      _0x45fe37++
    ) {
      var _0x4c6e0c = Math[_0x28831e(0x27d)](
        gameData[_0x28831e(0x2bb)]["fillH"] /
          levelSettings[gameData[_0x28831e(0x23e)]][_0x28831e(0x224)]
      );
      _0x193e24["push"]({ height: _0x4c6e0c, color: _0x17b939 });
    }
  }
  shuffle(_0x193e24), shuffle(_0x333478);
  var _0x215201 = 0x0;
  for (
    var _0x2058ae = 0x0;
    _0x2058ae < _0x193e24[_0x28831e(0x2fa)];
    _0x2058ae++
  ) {
    var _0x215201 = _0x333478[_0x215201],
      _0x5b4543 = gameData[_0x28831e(0x2ec)][_0x215201];
    _0x5b4543[_0x28831e(0x2af)][_0x28831e(0x351)] +
      _0x193e24[_0x2058ae]["height"] <=
    gameData[_0x28831e(0x2bb)][_0x28831e(0x320)]
      ? ((_0x5b4543[_0x28831e(0x2af)]["fill"] +=
          _0x193e24[_0x2058ae][_0x28831e(0x1d1)]),
        pushColours(
          _0x215201,
          _0x193e24[_0x2058ae][_0x28831e(0x259)],
          _0x193e24[_0x2058ae][_0x28831e(0x1d1)]
        ))
      : _0x2058ae--,
      _0x215201++,
      _0x215201 > _0x333478[_0x28831e(0x2fa)] - 0x1 &&
        ((_0x215201 = 0x0), shuffle(_0x333478));
  }
  for (
    var _0x2058ae = 0x0;
    _0x2058ae < _0x333478[_0x28831e(0x2fa)];
    _0x2058ae++
  ) {
    var _0x215201 = _0x333478[_0x2058ae];
    mixSameLiquid(_0x215201),
      fillLiquid(_0x215201),
      updateTubeData(gameData["tubes"][_0x215201]);
  }
  checkLiquidComplete(![]) && setupStage();
}
function getTubeColor() {
  var _0x31ea28 = a0_0x55db6a,
    _0x4c6568 = gameData[_0x31ea28(0x32f)][gameData[_0x31ea28(0x33e)]];
  return (
    gameData[_0x31ea28(0x33e)]++,
    gameData[_0x31ea28(0x33e)] > gameData["colorsArr"]["length"] - 0x1 &&
      ((gameData[_0x31ea28(0x33e)] = 0x0), shuffle(gameData[_0x31ea28(0x32f)])),
    _0x4c6568
  );
}
function pushColours(_0x316a13, _0x525b13, _0x31947a) {
  var _0x111c70 = a0_0x55db6a,
    _0x3a9528 = gameData["tubes"][_0x316a13],
    _0x160357 = gameData["tube"][_0x111c70(0x2f0)] == !![];
  _0x3a9528[_0x111c70(0x2af)][_0x111c70(0x2f1)][_0x111c70(0x35c)]({
    shape: null,
    surface: null,
    bottom: null,
    index: _0x525b13,
    height: _0x31947a,
    hidden: _0x160357,
  });
}
function createTube(_0x2d485a, _0x64b95b) {
  var _0x1f97d0 = a0_0x55db6a,
    _0x142183 = new createjs[_0x1f97d0(0x2bc)]();
  (_0x142183[_0x1f97d0(0x300)] = !![]),
    (_0x142183[_0x1f97d0(0x2af)] = {
      active: !![],
      index: gameData[_0x1f97d0(0x2ec)][_0x1f97d0(0x2fa)],
      x: _0x2d485a,
      y: _0x64b95b,
      fill: 0x0,
      fillShape: null,
      container: null,
      bubble: [],
      bottom: null,
      surface: null,
      colors: [],
      imageBack: null,
      imageFront: null,
      mask: null,
      direction: "",
      temp: [],
    });
  $[_0x1f97d0(0x330)][_0x1f97d0(0x21e)] &&
  edit[_0x1f97d0(0x2bf)] == _0x1f97d0(0x2ec)
    ? ((_0x142183[_0x1f97d0(0x2af)][_0x1f97d0(0x1df)] = new createjs[
        _0x1f97d0(0x2b9)
      ](
        tubeLoader[_0x1f97d0(0x341)](
          _0x1f97d0(0x1da) + gameData[_0x1f97d0(0x33a)]
        )
      )),
      (_0x142183["data"][_0x1f97d0(0x27c)] = new createjs[_0x1f97d0(0x2b9)](
        tubeLoader[_0x1f97d0(0x341)](_0x1f97d0(0x22c) + gameData["tubeNum"])
      )))
    : ((_0x142183[_0x1f97d0(0x2af)][_0x1f97d0(0x1df)] = new createjs[
        _0x1f97d0(0x2b9)
      ](
        loader[_0x1f97d0(0x341)](_0x1f97d0(0x1da) + gameData[_0x1f97d0(0x33a)])
      )),
      (_0x142183[_0x1f97d0(0x2af)][_0x1f97d0(0x27c)] = new createjs["Bitmap"](
        loader["getResult"](_0x1f97d0(0x22c) + gameData[_0x1f97d0(0x33a)])
      )));
  (_0x142183[_0x1f97d0(0x2af)]["imageBack"][_0x1f97d0(0x2f6)] =
    tubes_arr[gameData[_0x1f97d0(0x33a)]][_0x1f97d0(0x2f6)]),
    (_0x142183["data"][_0x1f97d0(0x1df)]["regY"] =
      tubes_arr[gameData["tubeNum"]][_0x1f97d0(0x355)]),
    (_0x142183[_0x1f97d0(0x2af)][_0x1f97d0(0x27c)][_0x1f97d0(0x2f6)] =
      tubes_arr[gameData[_0x1f97d0(0x33a)]]["regX"]),
    (_0x142183[_0x1f97d0(0x2af)][_0x1f97d0(0x27c)]["regY"] =
      tubes_arr[gameData[_0x1f97d0(0x33a)]][_0x1f97d0(0x355)]),
    (_0x142183[_0x1f97d0(0x2af)][_0x1f97d0(0x237)] = new createjs[
      _0x1f97d0(0x2f5)
    ]()),
    (_0x142183[_0x1f97d0(0x2af)]["fillShape"][_0x1f97d0(0x1e5)] = ![]),
    (_0x142183[_0x1f97d0(0x2af)][_0x1f97d0(0x335)] = new createjs["Shape"]()),
    _0x142183["data"]["mask"][_0x1f97d0(0x2fc)]
      [_0x1f97d0(0x26b)](_0x1f97d0(0x21b))
      [_0x1f97d0(0x360)](
        tubes_arr[gameData[_0x1f97d0(0x33a)]][_0x1f97d0(0x2b7)][0x0]["x"],
        tubes_arr[gameData["tubeNum"]][_0x1f97d0(0x2b7)][0x0]["y"]
      );
  for (
    var _0x2d58b0 = 0x0;
    _0x2d58b0 <
    tubes_arr[gameData["tubeNum"]][_0x1f97d0(0x2b7)][_0x1f97d0(0x2fa)];
    _0x2d58b0++
  ) {
    tubes_arr[gameData[_0x1f97d0(0x33a)]][_0x1f97d0(0x2b7)][_0x1f97d0(0x2fa)] -
      _0x2d58b0 >
      0x2 &&
      isEven(_0x2d58b0) &&
      _0x142183[_0x1f97d0(0x2af)][_0x1f97d0(0x335)][_0x1f97d0(0x2fc)][
        "curveTo"
      ](
        tubes_arr[gameData[_0x1f97d0(0x33a)]][_0x1f97d0(0x2b7)][
          _0x2d58b0 + 0x1
        ]["x"],
        tubes_arr[gameData[_0x1f97d0(0x33a)]][_0x1f97d0(0x2b7)][
          _0x2d58b0 + 0x1
        ]["y"],
        tubes_arr[gameData[_0x1f97d0(0x33a)]][_0x1f97d0(0x2b7)][
          _0x2d58b0 + 0x2
        ]["x"],
        tubes_arr[gameData[_0x1f97d0(0x33a)]][_0x1f97d0(0x2b7)][
          _0x2d58b0 + 0x2
        ]["y"]
      );
  }
  var _0x119c33 = new createjs["Container"](),
    _0x272b3b = new createjs[_0x1f97d0(0x2bc)](),
    _0x76f55c = new createjs[_0x1f97d0(0x2bc)](),
    _0x4bcecc = new createjs[_0x1f97d0(0x2bc)]();
  (_0x142183[_0x1f97d0(0x2af)][_0x1f97d0(0x359)] = _0x119c33),
    (_0x142183["data"][_0x1f97d0(0x239)] = _0x272b3b),
    (_0x142183[_0x1f97d0(0x2af)]["bottom"] = _0x76f55c),
    (_0x142183[_0x1f97d0(0x2af)][_0x1f97d0(0x2c8)] = _0x4bcecc),
    (_0x119c33[_0x1f97d0(0x335)] =
      _0x142183[_0x1f97d0(0x2af)][_0x1f97d0(0x335)]),
    (_0x272b3b["mask"] = _0x142183[_0x1f97d0(0x2af)]["mask"]),
    (_0x76f55c[_0x1f97d0(0x335)] =
      _0x142183[_0x1f97d0(0x2af)][_0x1f97d0(0x335)]),
    (_0x4bcecc["mask"] = _0x142183[_0x1f97d0(0x2af)][_0x1f97d0(0x335)]),
    _0x142183[_0x1f97d0(0x21d)](
      _0x142183[_0x1f97d0(0x2af)]["imageBack"],
      _0x142183[_0x1f97d0(0x2af)][_0x1f97d0(0x237)],
      _0x119c33,
      _0x76f55c,
      _0x272b3b,
      _0x142183[_0x1f97d0(0x2af)][_0x1f97d0(0x2c8)],
      _0x142183[_0x1f97d0(0x2af)]["imageFront"]
    ),
    (_0x142183["x"] = _0x2d485a),
    (_0x142183["y"] = _0x64b95b);
  var _0x2f6016 = new createjs[_0x1f97d0(0x2f5)]();
  _0x142183[_0x1f97d0(0x2af)][_0x1f97d0(0x1fc)][_0x1f97d0(0x35c)](_0x2f6016);
  var _0x2f6016 = new createjs[_0x1f97d0(0x2f5)]();
  _0x142183["data"][_0x1f97d0(0x1fc)][_0x1f97d0(0x35c)](_0x2f6016);
  var _0x2f6016 = new createjs[_0x1f97d0(0x2f5)]();
  _0x142183[_0x1f97d0(0x2af)][_0x1f97d0(0x1fc)]["push"](_0x2f6016),
    gameData[_0x1f97d0(0x2ec)][_0x1f97d0(0x35c)](_0x142183),
    waterContainer["addChild"](_0x142183);
  var _0x39e38c = !![];
  $[_0x1f97d0(0x330)][_0x1f97d0(0x21e)] && (_0x39e38c = ![]),
    curPage != _0x1f97d0(0x36f) && (_0x39e38c = ![]),
    _0x39e38c &&
      ((_0x142183[_0x1f97d0(0x1f4)] = _0x1f97d0(0x324)),
      _0x142183[_0x1f97d0(0x365)](_0x1f97d0(0x304), function (_0xf87b36) {
        var _0x4f807d = _0x1f97d0;
        if (gameData[_0x4f807d(0x342)]) return;
        if (!gameData[_0x4f807d(0x26d)]) return;
        if (!_0xf87b36[_0x4f807d(0x2ef)][_0x4f807d(0x2af)][_0x4f807d(0x300)])
          return;
        actionTube(_0xf87b36["currentTarget"]);
      }));
}
function actionTube(_0x1a6b54) {
  var _0x4b9d6a = a0_0x55db6a,
    _0x1cca09 = getPouringIndex();
  if (gameData[_0x4b9d6a(0x34f)][_0x1cca09]["from"] == null)
    _0x1a6b54[_0x4b9d6a(0x2af)][_0x4b9d6a(0x2f1)][_0x4b9d6a(0x2fa)] > 0x0 &&
      ((gameData[_0x4b9d6a(0x34f)][_0x1cca09][_0x4b9d6a(0x2fb)] = _0x1a6b54),
      focusTube(gameData[_0x4b9d6a(0x34f)][_0x1cca09]["from"], !![]),
      waterContainer[_0x4b9d6a(0x294)](
        gameData[_0x4b9d6a(0x34f)][_0x1cca09][_0x4b9d6a(0x2fb)],
        waterContainer["numChildren"] - 0x1
      ),
      playSound("soundSelect"));
  else {
    if (
      gameData[_0x4b9d6a(0x34f)][_0x1cca09][_0x4b9d6a(0x2fb)][_0x4b9d6a(0x2af)][
        _0x4b9d6a(0x1f1)
      ] == _0x1a6b54[_0x4b9d6a(0x2af)][_0x4b9d6a(0x1f1)]
    )
      playSound(_0x4b9d6a(0x2db)),
        focusTube(gameData[_0x4b9d6a(0x34f)][_0x1cca09][_0x4b9d6a(0x2fb)], ![]),
        (gameData[_0x4b9d6a(0x34f)][_0x1cca09][_0x4b9d6a(0x2fb)] = null);
    else {
      if (gameData[_0x4b9d6a(0x34f)][_0x1cca09]["to"] == null) {
        gameData[_0x4b9d6a(0x34f)][_0x1cca09]["to"] = _0x1a6b54;
        if (
          gameData[_0x4b9d6a(0x34f)][_0x1cca09][_0x4b9d6a(0x2fb)][
            _0x4b9d6a(0x2af)
          ][_0x4b9d6a(0x1f1)] != _0x1a6b54[_0x4b9d6a(0x2af)][_0x4b9d6a(0x1f1)]
        ) {
          var _0x1f071d =
              gameData[_0x4b9d6a(0x34f)][_0x1cca09][_0x4b9d6a(0x2fb)][
                _0x4b9d6a(0x2af)
              ][_0x4b9d6a(0x2f1)][_0x4b9d6a(0x2fa)] - 0x1,
            _0x3ae2d2 =
              gameData[_0x4b9d6a(0x34f)][_0x1cca09][_0x4b9d6a(0x2fb)][
                _0x4b9d6a(0x2af)
              ][_0x4b9d6a(0x2f1)][_0x1f071d]["height"];
          gameData[_0x4b9d6a(0x34f)][_0x1cca09]["to"][_0x4b9d6a(0x2af)][
            _0x4b9d6a(0x351)
          ] +
            _0x3ae2d2 <=
          gameData[_0x4b9d6a(0x2bb)][_0x4b9d6a(0x320)]
            ? (moveTube(_0x1cca09),
              focusTube(gameData["pouring"][_0x1cca09]["to"], ![]))
            : (playSound(_0x4b9d6a(0x2db)),
              focusTube(gameData[_0x4b9d6a(0x34f)][_0x1cca09]["from"], ![]),
              (gameData[_0x4b9d6a(0x34f)][_0x1cca09][_0x4b9d6a(0x2fb)] = null),
              (gameData[_0x4b9d6a(0x34f)][_0x1cca09]["to"] = null));
        } else
          playSound(_0x4b9d6a(0x2db)),
            (gameData[_0x4b9d6a(0x34f)][_0x1cca09]["to"] = null);
      }
    }
  }
}
function getPouringIndex() {
  var _0x7a214e = a0_0x55db6a,
    _0x1ffba5 = ![],
    _0x4632f4 = gameData[_0x7a214e(0x34f)][_0x7a214e(0x2fa)] - 0x1;
  if (gameData["pouring"][_0x7a214e(0x2fa)] == 0x0) _0x1ffba5 = !![];
  else {
    if (
      gameData[_0x7a214e(0x34f)][_0x4632f4][_0x7a214e(0x2fb)] == null ||
      gameData[_0x7a214e(0x34f)][_0x4632f4]["to"] == null
    ) {
    } else _0x1ffba5 = !![];
  }
  return (
    _0x1ffba5 &&
      (gameData[_0x7a214e(0x34f)][_0x7a214e(0x35c)]({
        from: null,
        to: null,
        filling: ![],
        complete: ![],
      }),
      (_0x4632f4 = gameData[_0x7a214e(0x34f)][_0x7a214e(0x2fa)] - 0x1)),
    _0x4632f4
  );
}
function clearPourArray() {
  var _0x3dfa6f = a0_0x55db6a,
    _0x31ad2d = ![];
  for (
    var _0x429736 = 0x0;
    _0x429736 < gameData[_0x3dfa6f(0x34f)]["length"];
    _0x429736++
  ) {
    gameData[_0x3dfa6f(0x34f)][_0x429736]["filling"] && (_0x31ad2d = !![]);
  }
  if (!_0x31ad2d)
    for (
      var _0x429736 = 0x0;
      _0x429736 < gameData[_0x3dfa6f(0x34f)][_0x3dfa6f(0x2fa)];
      _0x429736++
    ) {
      gameData[_0x3dfa6f(0x34f)][_0x429736][_0x3dfa6f(0x264)] &&
        gameData[_0x3dfa6f(0x34f)][_0x3dfa6f(0x32b)](_0x429736, 0x1);
    }
}
function mixSameLiquid(_0x3d107e) {
  var _0x4c52e2 = a0_0x55db6a,
    _0x444914 = gameData[_0x4c52e2(0x2ec)][_0x3d107e],
    _0x5be37b = 0x0;
  for (
    var _0x356a97 = 0x0;
    _0x356a97 < _0x444914["data"]["colors"][_0x4c52e2(0x2fa)];
    _0x356a97++
  ) {
    _0x356a97 > 0x0 &&
      (_0x444914["data"][_0x4c52e2(0x2f1)][_0x5be37b][_0x4c52e2(0x1f1)] ==
      _0x444914[_0x4c52e2(0x2af)][_0x4c52e2(0x2f1)][_0x356a97][_0x4c52e2(0x1f1)]
        ? ((_0x444914[_0x4c52e2(0x2af)][_0x4c52e2(0x2f1)][_0x5be37b][
            _0x4c52e2(0x1d1)
          ] +=
            _0x444914[_0x4c52e2(0x2af)][_0x4c52e2(0x2f1)][_0x356a97][
              _0x4c52e2(0x1d1)
            ]),
          _0x444914[_0x4c52e2(0x2af)][_0x4c52e2(0x2f1)]["splice"](
            _0x356a97,
            0x1
          ),
          _0x356a97--)
        : (_0x5be37b = _0x356a97));
  }
}
function fillLiquid(_0x10f5ce) {
  var _0x5ce2ef = a0_0x55db6a,
    _0x376c1e = gameData["tubes"][_0x10f5ce];
  _0x376c1e["data"]["bottom"][_0x5ce2ef(0x20f)](),
    _0x376c1e["data"][_0x5ce2ef(0x239)][_0x5ce2ef(0x20f)](),
    _0x376c1e[_0x5ce2ef(0x2af)][_0x5ce2ef(0x359)][_0x5ce2ef(0x20f)]();
  var _0x30e7c7 = {
    x: 0x0,
    y: 0x0,
    w: gameData[_0x5ce2ef(0x2bb)]["colorW"],
    hiddenIndex: 0x0,
  };
  for (
    var _0x5bcf58 = 0x0;
    _0x5bcf58 < _0x376c1e[_0x5ce2ef(0x2af)]["colors"][_0x5ce2ef(0x2fa)];
    _0x5bcf58++
  ) {
    var _0x4835c5 =
        colors_arr[
          _0x376c1e[_0x5ce2ef(0x2af)][_0x5ce2ef(0x2f1)][_0x5bcf58][
            _0x5ce2ef(0x1f1)
          ]
        ][_0x5ce2ef(0x351)],
      _0x533ea0 =
        colors_arr[
          _0x376c1e[_0x5ce2ef(0x2af)][_0x5ce2ef(0x2f1)][_0x5bcf58]["index"]
        ][_0x5ce2ef(0x239)];
    _0x5bcf58 ==
      _0x376c1e[_0x5ce2ef(0x2af)][_0x5ce2ef(0x2f1)][_0x5ce2ef(0x2fa)] - 0x1 &&
      (_0x376c1e[_0x5ce2ef(0x2af)]["colors"][_0x5bcf58][_0x5ce2ef(0x2f0)] =
        ![]);
    _0x376c1e[_0x5ce2ef(0x2af)]["colors"][_0x5bcf58][_0x5ce2ef(0x2f0)] &&
      ((_0x4835c5 =
        colorsHidden_arr[_0x30e7c7[_0x5ce2ef(0x256)]][_0x5ce2ef(0x351)]),
      (_0x533ea0 =
        colorsHidden_arr[_0x30e7c7[_0x5ce2ef(0x256)]][_0x5ce2ef(0x239)]),
      _0x30e7c7["hiddenIndex"]++,
      (_0x30e7c7[_0x5ce2ef(0x256)] =
        _0x30e7c7[_0x5ce2ef(0x256)] > colorsHidden_arr[_0x5ce2ef(0x2fa)] - 0x1
          ? colorsHidden_arr["length"] - 0x1
          : _0x30e7c7[_0x5ce2ef(0x256)]));
    var _0x1f7e36 = _0x376c1e[_0x5ce2ef(0x2af)][_0x5ce2ef(0x2f1)][_0x5bcf58];
    (_0x1f7e36[_0x5ce2ef(0x2b7)] = new createjs["Shape"]()),
      (_0x1f7e36["shape"][_0x5ce2ef(0x27e)] =
        _0x5bcf58 == 0x0
          ? gameData[_0x5ce2ef(0x2bb)][_0x5ce2ef(0x320)] / 0x2
          : 0x0),
      _0x1f7e36[_0x5ce2ef(0x2b7)][_0x5ce2ef(0x2fc)]
        [_0x5ce2ef(0x26b)](_0x4835c5)
        [_0x5ce2ef(0x350)](
          -(_0x30e7c7["w"] / 0x2),
          _0x1f7e36[_0x5ce2ef(0x2b7)][_0x5ce2ef(0x27e)],
          _0x30e7c7["w"],
          -(
            _0x1f7e36[_0x5ce2ef(0x1d1)] +
            _0x1f7e36[_0x5ce2ef(0x2b7)][_0x5ce2ef(0x27e)]
          )
        ),
      (_0x1f7e36[_0x5ce2ef(0x2b7)][_0x5ce2ef(0x320)] = -_0x1f7e36["height"]),
      (_0x1f7e36[_0x5ce2ef(0x2b7)][_0x5ce2ef(0x259)] =
        _0x376c1e["data"][_0x5ce2ef(0x2f1)][_0x5bcf58][_0x5ce2ef(0x1f1)]),
      (_0x1f7e36[_0x5ce2ef(0x239)] = new createjs[_0x5ce2ef(0x2f5)]()),
      _0x1f7e36[_0x5ce2ef(0x239)][_0x5ce2ef(0x2fc)]
        [_0x5ce2ef(0x26b)](_0x533ea0)
        [_0x5ce2ef(0x2dc)](0x0, 0x0, gameData[_0x5ce2ef(0x2bb)]["fillW"] / 0x2),
      (_0x1f7e36[_0x5ce2ef(0x239)][_0x5ce2ef(0x259)] =
        _0x376c1e[_0x5ce2ef(0x2af)][_0x5ce2ef(0x2f1)][_0x5bcf58][
          _0x5ce2ef(0x1f1)
        ]),
      (_0x1f7e36[_0x5ce2ef(0x26a)] = new createjs[_0x5ce2ef(0x2f5)]()),
      _0x1f7e36[_0x5ce2ef(0x26a)][_0x5ce2ef(0x2fc)]
        [_0x5ce2ef(0x26b)](_0x4835c5)
        [_0x5ce2ef(0x2dc)](0x0, 0x0, gameData[_0x5ce2ef(0x2bb)]["fillW"] / 0x2),
      (_0x1f7e36[_0x5ce2ef(0x26a)][_0x5ce2ef(0x259)] =
        _0x376c1e[_0x5ce2ef(0x2af)][_0x5ce2ef(0x2f1)][_0x5bcf58]["index"]),
      (_0x1f7e36[_0x5ce2ef(0x239)]["scaleY"] = _0x1f7e36[_0x5ce2ef(0x26a)][
        "scaleY"
      ] =
        gameData[_0x5ce2ef(0x2bb)]["surfaceScale"]),
      (_0x1f7e36[_0x5ce2ef(0x239)][_0x5ce2ef(0x1e5)] =
        _0x5bcf58 == _0x376c1e["data"]["colors"][_0x5ce2ef(0x2fa)] - 0x1
          ? !![]
          : ![]),
      (_0x1f7e36["bottom"][_0x5ce2ef(0x1e5)] = _0x5bcf58 == 0x0 ? ![] : !![]),
      !tubes_arr[gameData["tubeNum"]][_0x5ce2ef(0x30d)] &&
        ((_0x1f7e36[_0x5ce2ef(0x239)][_0x5ce2ef(0x1e5)] = ![]),
        (_0x1f7e36["bottom"][_0x5ce2ef(0x1e5)] = ![])),
      (_0x1f7e36[_0x5ce2ef(0x2b7)]["y"] = _0x30e7c7["y"]),
      (_0x1f7e36[_0x5ce2ef(0x26a)]["y"] = _0x30e7c7["y"]),
      (_0x30e7c7["y"] -= _0x1f7e36[_0x5ce2ef(0x1d1)]),
      (_0x1f7e36[_0x5ce2ef(0x239)]["y"] = _0x30e7c7["y"]),
      (_0x376c1e[_0x5ce2ef(0x2af)][_0x5ce2ef(0x351)] = Math[_0x5ce2ef(0x2d6)](
        _0x30e7c7["y"]
      )),
      _0x376c1e[_0x5ce2ef(0x2af)][_0x5ce2ef(0x239)]["addChild"](
        _0x1f7e36[_0x5ce2ef(0x239)]
      ),
      _0x376c1e[_0x5ce2ef(0x2af)]["bottom"][_0x5ce2ef(0x21d)](
        _0x1f7e36[_0x5ce2ef(0x26a)]
      ),
      _0x376c1e["data"]["container"]["addChild"](_0x1f7e36[_0x5ce2ef(0x2b7)]);
  }
}
function focusTube(_0xf19b2e, _0x561b78) {
  var _0x4e55d8 = a0_0x55db6a,
    _0x542434 =
      _0x561b78 == !![]
        ? _0xf19b2e[_0x4e55d8(0x2af)]["y"] - 0x32
        : _0xf19b2e[_0x4e55d8(0x2af)]["y"];
  TweenMax["to"](_0xf19b2e, 0.2, { y: _0x542434, overwrite: !![] });
}
function moveTube(_0xa5d513) {
  var _0x174108 = a0_0x55db6a;
  playSound("soundMatch");
  var _0x255638 = gameData[_0x174108(0x34f)][_0xa5d513][_0x174108(0x2fb)],
    _0xdad34e = gameData[_0x174108(0x34f)][_0xa5d513]["to"];
  (_0x255638[_0x174108(0x2af)][_0x174108(0x300)] = ![]),
    (_0xdad34e["data"]["active"] = ![]),
    (gameData["pouring"][_0xa5d513][_0x174108(0x1e1)] = !![]),
    (_0x255638[_0x174108(0x2af)][_0x174108(0x299)] =
      _0x255638["x"] > _0xdad34e["x"] ? _0x174108(0x2ee) : _0x174108(0x25e)),
    updateTubeData(_0x255638),
    updateTubeData(_0xdad34e);
  var _0x4cef2f = { x: 0x0, y: 0x0 };
  _0x255638[_0x174108(0x2af)]["direction"] == _0x174108(0x25e)
    ? (_0x4cef2f["x"] =
        _0xdad34e["x"] -
        gameData[_0x174108(0x2bb)][_0x174108(0x217)] -
        _0x255638["data"][_0x174108(0x244)]["x"] +
        _0x255638["data"]["containerY"])
    : (_0x4cef2f["x"] =
        _0xdad34e["x"] +
        gameData[_0x174108(0x2bb)][_0x174108(0x217)] -
        _0x255638["data"][_0x174108(0x244)]["x"] -
        _0x255638[_0x174108(0x2af)]["containerY"]),
    (_0x4cef2f["y"] =
      _0xdad34e["y"] -
      _0x255638[_0x174108(0x2af)]["tubePos"]["y"] -
      gameData[_0x174108(0x2bb)]["fillY"]),
    TweenMax["to"](_0x255638, gameSettings["moveSpeed"], {
      x: _0x4cef2f["x"],
      y: _0x4cef2f["y"],
      ease: Linear[_0x174108(0x1fb)],
      overwrite: !![],
      onUpdate: function () {
        updateTubeData(_0x255638), updateTubeData(_0xdad34e);
      },
      onComplete: function () {
        pourLiquid(_0xa5d513);
      },
    }),
    TweenMax["to"](
      _0x255638["data"][_0x174108(0x335)],
      gameSettings[_0x174108(0x235)],
      {
        rotation: _0x255638[_0x174108(0x2af)][_0x174108(0x2e5)],
        ease: Linear[_0x174108(0x1fb)],
        overwrite: !![],
      }
    ),
    TweenMax["to"](
      _0x255638[_0x174108(0x2af)][_0x174108(0x1df)],
      gameSettings[_0x174108(0x235)],
      {
        rotation: _0x255638["data"][_0x174108(0x2e5)],
        ease: Linear[_0x174108(0x1fb)],
        overwrite: !![],
      }
    ),
    TweenMax["to"](
      _0x255638["data"]["imageFront"],
      gameSettings[_0x174108(0x235)],
      {
        rotation: _0x255638[_0x174108(0x2af)][_0x174108(0x2e5)],
        ease: Linear[_0x174108(0x1fb)],
        overwrite: !![],
      }
    ),
    TweenMax["to"](
      _0x255638[_0x174108(0x2af)][_0x174108(0x359)],
      gameSettings[_0x174108(0x235)],
      {
        y: _0x255638[_0x174108(0x2af)]["containerY"],
        ease: Linear[_0x174108(0x1fb)],
        overwrite: !![],
      }
    );
}
function pourLiquid(_0x2ed427) {
  var _0x429975 = a0_0x55db6a,
    _0x33a0c4 = Math[_0x429975(0x27d)](Math["random"]() * 0x3) + 0x1;
  playSound("soundPour" + _0x33a0c4), (gameData["filling"] = !![]);
  var _0xfaded0 = gameData[_0x429975(0x34f)][_0x2ed427][_0x429975(0x2fb)],
    _0x49b156 = gameData["pouring"][_0x2ed427]["to"],
    _0xe5d604 = _0xfaded0["data"][_0x429975(0x2f1)][_0x429975(0x2fa)] - 0x1,
    _0x663c33 =
      _0xfaded0[_0x429975(0x2af)][_0x429975(0x2f1)][_0xe5d604][
        _0x429975(0x2b7)
      ],
    _0xb7c68e =
      _0xfaded0[_0x429975(0x2af)][_0x429975(0x2f1)][_0xe5d604]["surface"],
    _0x5574ef = _0x663c33[_0x429975(0x259)];
  TweenMax["to"](_0x663c33, gameSettings[_0x429975(0x36a)], {
    fillH: 0x0,
    overwrite: !![],
    ease: Linear[_0x429975(0x1fb)],
    onUpdate: function () {
      var _0x2bc23c = _0x429975;
      (_0xfaded0[_0x2bc23c(0x2af)][_0x2bc23c(0x351)] = Math[_0x2bc23c(0x2d6)](
        _0x663c33["y"] + _0x663c33[_0x2bc23c(0x320)]
      )),
        _0x663c33[_0x2bc23c(0x2fc)]
          [_0x2bc23c(0x207)]()
          ["beginFill"](colors_arr[_0x5574ef][_0x2bc23c(0x351)])
          [_0x2bc23c(0x350)](
            -(gameData[_0x2bc23c(0x2bb)][_0x2bc23c(0x1e3)] / 0x2),
            _0x663c33[_0x2bc23c(0x27e)],
            gameData[_0x2bc23c(0x2bb)][_0x2bc23c(0x1e3)],
            _0x663c33[_0x2bc23c(0x320)] - _0x663c33["extraH"]
          ),
        (_0xb7c68e["y"] = _0x663c33["y"] + _0x663c33["fillH"]),
        updateLiquid(_0x2ed427),
        updateTubeData(_0xfaded0),
        updateTubeData(_0x49b156),
        updateFilling(_0x2ed427);
    },
    onComplete: pourLiquidComplete,
    onCompleteParams: [_0x2ed427],
  }),
    pushColours(_0x49b156[_0x429975(0x2af)]["index"], _0x5574ef, 0x0),
    fillLiquid(_0x49b156[_0x429975(0x2af)][_0x429975(0x1f1)]);
  var _0x5e4c79 = _0x49b156["data"]["colors"][_0x429975(0x2fa)] - 0x1,
    _0x3a0a45 =
      _0x49b156["data"][_0x429975(0x2f1)][_0x5e4c79][_0x429975(0x2b7)];
  _0x49b156[_0x429975(0x2af)][_0x429975(0x237)]["graphics"]
    [_0x429975(0x207)]()
    [_0x429975(0x34d)](gameData["tube"]["pourW"], "round", _0x429975(0x364))
    [_0x429975(0x2d3)](colors_arr[_0x5574ef][_0x429975(0x351)])
    ["mt"](0x0, 0x0)
    ["lt"](0x0, -gameData["tube"][_0x429975(0x2b3)]),
    TweenMax["to"](_0x3a0a45, gameSettings["fillSpeed"], {
      fillH: _0x663c33["fillH"],
      overwrite: !![],
      ease: Linear["easeNone"],
      onUpdate: function () {
        var _0x289036 = _0x429975;
        (_0x49b156[_0x289036(0x2af)][_0x289036(0x351)] = Math[_0x289036(0x2d6)](
          _0x3a0a45["y"] + _0x3a0a45[_0x289036(0x320)]
        )),
          _0x3a0a45[_0x289036(0x2fc)]
            ["clear"]()
            ["beginFill"](colors_arr[_0x5574ef]["fill"])
            ["drawRect"](
              -(gameData[_0x289036(0x2bb)][_0x289036(0x1e3)] / 0x2),
              0x0,
              gameData[_0x289036(0x2bb)]["colorW"],
              _0x3a0a45[_0x289036(0x320)]
            );
      },
      onComplete: function () {
        var _0x3971c8 = _0x429975;
        _0x49b156[_0x3971c8(0x2af)][_0x3971c8(0x2f1)][
          _0x49b156[_0x3971c8(0x2af)][_0x3971c8(0x2f1)]["length"] - 0x1
        ][_0x3971c8(0x1d1)] = Math["abs"](_0x3a0a45[_0x3971c8(0x320)]);
      },
    }),
    waterContainer["setChildIndex"](
      _0xfaded0,
      waterContainer[_0x429975(0x375)] - 0x1
    ),
    waterContainer[_0x429975(0x294)](
      _0x49b156,
      waterContainer["numChildren"] - 0x1
    );
}
function pourLiquidComplete(_0x46b5fc) {
  var _0x5a38ce = a0_0x55db6a,
    _0x15ec25 = gameData[_0x5a38ce(0x34f)][_0x46b5fc][_0x5a38ce(0x2fb)],
    _0x3940a8 = gameData[_0x5a38ce(0x34f)][_0x46b5fc]["to"],
    _0x1f9f93 = _0x15ec25[_0x5a38ce(0x2af)]["colors"][_0x5a38ce(0x2fa)] - 0x1;
  _0x15ec25["data"][_0x5a38ce(0x2f1)][_0x5a38ce(0x32b)](_0x1f9f93, 0x1),
    fillLiquid(_0x15ec25[_0x5a38ce(0x2af)][_0x5a38ce(0x1f1)]),
    _0x15ec25[_0x5a38ce(0x2af)][_0x5a38ce(0x237)][_0x5a38ce(0x2fc)]["clear"](),
    _0x3940a8[_0x5a38ce(0x2af)][_0x5a38ce(0x237)][_0x5a38ce(0x2fc)][
      _0x5a38ce(0x207)
    ](),
    (_0x15ec25["data"]["fillShape"][_0x5a38ce(0x1e5)] = ![]),
    (_0x3940a8[_0x5a38ce(0x2af)][_0x5a38ce(0x237)][_0x5a38ce(0x1e5)] = ![]),
    TweenMax["to"](_0x15ec25, gameSettings[_0x5a38ce(0x235)], {
      x: _0x15ec25[_0x5a38ce(0x2af)]["x"],
      y: _0x15ec25[_0x5a38ce(0x2af)]["y"],
      ease: Linear["easeNone"],
      overwrite: !![],
      onUpdate: function () {
        updateTubeData(_0x15ec25), updateTubeData(_0x3940a8);
      },
      onComplete: function () {
        var _0x40a431 = _0x5a38ce;
        mixSameLiquid(_0x3940a8["data"][_0x40a431(0x1f1)]),
          fillLiquid(_0x3940a8["data"][_0x40a431(0x1f1)]),
          (gameData[_0x40a431(0x1e1)] = ![]),
          (_0x15ec25["data"]["active"] = !![]),
          (_0x3940a8[_0x40a431(0x2af)]["active"] = !![]),
          (gameData["pouring"][_0x46b5fc]["filling"] = ![]),
          (gameData[_0x40a431(0x34f)][_0x46b5fc][_0x40a431(0x264)] = !![]),
          clearPourArray(),
          checkLiquidComplete(!![]),
          gameData[_0x40a431(0x36b)] && positionTubes();
      },
    }),
    TweenMax["to"](
      _0x15ec25[_0x5a38ce(0x2af)][_0x5a38ce(0x335)],
      gameSettings[_0x5a38ce(0x235)],
      { rotation: 0x0, ease: Linear[_0x5a38ce(0x1fb)], overwrite: !![] }
    ),
    TweenMax["to"](
      _0x15ec25["data"][_0x5a38ce(0x1df)],
      gameSettings[_0x5a38ce(0x235)],
      { rotation: 0x0, ease: Linear[_0x5a38ce(0x1fb)], overwrite: !![] }
    ),
    TweenMax["to"](
      _0x15ec25["data"][_0x5a38ce(0x27c)],
      gameSettings[_0x5a38ce(0x235)],
      { rotation: 0x0, ease: Linear[_0x5a38ce(0x1fb)], overwrite: !![] }
    ),
    TweenMax["to"](
      _0x15ec25["data"][_0x5a38ce(0x359)],
      gameSettings[_0x5a38ce(0x235)],
      { y: 0x0, ease: Linear[_0x5a38ce(0x1fb)], overwrite: !![] }
    );
}
function checkLiquidComplete(_0xf27d54) {
  var _0x16ea07 = a0_0x55db6a,
    _0x3077ba = [];
  for (
    var _0x4bc93a = 0x0;
    _0x4bc93a < gameData[_0x16ea07(0x2ec)][_0x16ea07(0x2fa)];
    _0x4bc93a++
  ) {
    var _0xc455dc = -0x1,
      _0x4f0256 = !![];
    for (
      var _0x4910b7 = 0x0;
      _0x4910b7 <
      gameData[_0x16ea07(0x2ec)][_0x4bc93a]["data"]["colors"][_0x16ea07(0x2fa)];
      _0x4910b7++
    ) {
      var _0x3eb25b =
        gameData["tubes"][_0x4bc93a][_0x16ea07(0x2af)][_0x16ea07(0x2f1)][
          _0x4910b7
        ];
      (_0x3eb25b[_0x16ea07(0x239)]["x"] = 0x0),
        (_0x3eb25b[_0x16ea07(0x26a)]["x"] = 0x0),
        (_0x3eb25b["surface"][_0x16ea07(0x2a4)] = _0x3eb25b[_0x16ea07(0x26a)][
          "scaleX"
        ] =
          0x1);
      if (
        gameData[_0x16ea07(0x2ec)][_0x4bc93a][_0x16ea07(0x2af)][
          _0x16ea07(0x351)
        ] >=
        gameData[_0x16ea07(0x2bb)][_0x16ea07(0x320)] - 0x5
      ) {
        if (
          _0xc455dc == -0x1 &&
          !gameData[_0x16ea07(0x2ec)][_0x4bc93a][_0x16ea07(0x2af)]["colors"][
            _0x4910b7
          ][_0x16ea07(0x2f0)]
        )
          _0xc455dc =
            gameData[_0x16ea07(0x2ec)][_0x4bc93a][_0x16ea07(0x2af)][
              _0x16ea07(0x2f1)
            ][_0x4910b7][_0x16ea07(0x1f1)];
        else
          (_0xc455dc !=
            gameData[_0x16ea07(0x2ec)][_0x4bc93a]["data"][_0x16ea07(0x2f1)][
              _0x4910b7
            ][_0x16ea07(0x1f1)] ||
            gameData[_0x16ea07(0x2ec)][_0x4bc93a][_0x16ea07(0x2af)][
              _0x16ea07(0x2f1)
            ][_0x4910b7]["hidden"]) &&
            (_0x4f0256 = ![]);
      } else _0x4f0256 = ![];
    }
    gameData[_0x16ea07(0x2ec)][_0x4bc93a][_0x16ea07(0x2af)]["fill"] == 0x0 &&
      (_0x4f0256 = ![]),
      !_0x4f0256 &&
        gameData[_0x16ea07(0x2ec)][_0x4bc93a][_0x16ea07(0x2af)][
          _0x16ea07(0x351)
        ] > 0x0 &&
        _0x3077ba["push"](gameData["tubes"][_0x4bc93a]);
  }
  var _0x1e6364 = ![];
  if (_0x3077ba["length"] == 0x2 && gameSettings[_0x16ea07(0x377)]) {
    var _0x45bc9d = -0x1,
      _0xa954fa = 0x0;
    for (var _0x4bc93a = 0x0; _0x4bc93a < _0x3077ba["length"]; _0x4bc93a++) {
      _0x3077ba[_0x4bc93a][_0x16ea07(0x2af)][_0x16ea07(0x2f1)][
        _0x16ea07(0x2fa)
      ] == 0x1 &&
        (_0x45bc9d == -0x1 &&
          !_0x3077ba[_0x4bc93a][_0x16ea07(0x2af)]["colors"][0x0][
            _0x16ea07(0x2f0)
          ] &&
          (_0x45bc9d =
            _0x3077ba[_0x4bc93a][_0x16ea07(0x2af)][_0x16ea07(0x2f1)][0x0][
              _0x16ea07(0x1f1)
            ]),
        _0x45bc9d ==
          _0x3077ba[_0x4bc93a]["data"][_0x16ea07(0x2f1)][0x0][
            _0x16ea07(0x1f1)
          ] && (_0xa954fa += _0x3077ba[_0x4bc93a][_0x16ea07(0x2af)]["fill"]));
    }
    _0xa954fa >= gameData[_0x16ea07(0x2bb)][_0x16ea07(0x320)] - 0x5 &&
      (_0x1e6364 = !![]);
  }
  if (_0xf27d54) {
    if (_0x1e6364) {
      var _0x390c41 = getPouringIndex();
      (gameData[_0x16ea07(0x34f)][_0x390c41][_0x16ea07(0x2fb)] = null),
        (gameData[_0x16ea07(0x26d)] = ![]);
      var _0x4639dc = 0.2,
        _0x298229 = 0x0;
      for (var _0x4bc93a = 0x0; _0x4bc93a < _0x3077ba["length"]; _0x4bc93a++) {
        var _0x2abd30 = _0x3077ba[_0x4bc93a];
        TweenMax["to"](_0x2abd30, _0x298229, {
          overwrite: !![],
          onComplete: actionTube,
          onCompleteParams: [_0x2abd30],
        }),
          (_0x298229 += _0x4639dc);
      }
    }
    _0x3077ba[_0x16ea07(0x2fa)] == 0x0 &&
      ((gameData["action"] = ![]),
      animateBubbles(),
      calculateScore(),
      toggleGameSessionTimer(![]),
      toggleGameTimer(![]));
  } else return _0x3077ba["length"] == 0x0 ? !![] : ![];
}
function animateBubbles() {
  var _0x166381 = a0_0x55db6a,
    _0x35a7f8 = Math[_0x166381(0x27d)](
      0x64 / gameData[_0x166381(0x2ec)]["length"]
    );
  for (
    var _0x248e3e = 0x0;
    _0x248e3e < gameData["tubes"][_0x166381(0x2fa)];
    _0x248e3e++
  ) {
    var _0x10965f = gameData[_0x166381(0x2ec)][_0x248e3e];
    if (_0x10965f["data"][_0x166381(0x2f1)]["length"] > 0x0) {
      var _0x250102 = randomIntFromInterval(_0x35a7f8, _0x35a7f8 + 0x5);
      for (var _0x7ffd15 = 0x0; _0x7ffd15 < _0x250102; _0x7ffd15++) {
        var _0x39ba75 = Math["floor"](
            Math["random"]() * bubbles_arr[_0x166381(0x2fa)]
          ),
          _0x36f34a = new createjs[_0x166381(0x2b9)](
            loader[_0x166381(0x341)](_0x166381(0x2c8) + _0x39ba75)
          );
        centerReg(_0x36f34a),
          animateBubble(
            _0x36f34a,
            -_0x10965f[_0x166381(0x2af)][_0x166381(0x351)]
          ),
          _0x10965f[_0x166381(0x2af)][_0x166381(0x2c8)][_0x166381(0x21d)](
            _0x36f34a
          );
      }
    }
  }
}
function animateBubble(_0x40f7ee, _0x39a34f) {
  var _0xe3ba02 = a0_0x55db6a;
  (_0x40f7ee["x"] = randomIntFromInterval(
    -gameData[_0xe3ba02(0x2bb)][_0xe3ba02(0x2d7)],
    gameData[_0xe3ba02(0x2bb)][_0xe3ba02(0x2d7)]
  )),
    (_0x40f7ee["y"] = 0xa);
  var _0x10d928 = randomIntFromInterval(0x5, 0x14) * 0.1,
    _0x4db904 = randomIntFromInterval(0x0, 0xf) * 0.1;
  TweenMax["to"](_0x40f7ee, _0x10d928, {
    delay: _0x4db904,
    y: _0x39a34f,
    onComplete: function () {
      var _0x53452e = _0xe3ba02;
      _0x40f7ee[_0x53452e(0x1e5)] = ![];
    },
  });
}
function updateTubeData(_0x49292c) {
  var _0x1b17fb = a0_0x55db6a,
    _0x471c44 = gameData["tube"][_0x1b17fb(0x201)],
    _0x1474fa =
      ((_0x471c44 - _0x49292c[_0x1b17fb(0x2af)]["fill"]) / _0x471c44) * 0x5a,
    _0x57f193 =
      _0x49292c["data"][_0x1b17fb(0x299)] == _0x1b17fb(0x2ee)
        ? -_0x1474fa
        : _0x1474fa,
    _0x308035 = getAnglePosition(
      0x0,
      0x0,
      gameData["tube"]["h"],
      _0x57f193 - 0x5a
    ),
    _0x37c70a = (_0x1474fa / 0x5a) * (gameData["tube"][_0x1b17fb(0x2d7)] / 0x2),
    _0x9f087b = 0x0,
    _0x2c2887 = 0x50 - (_0x1474fa / 0x5a) * 0x50,
    _0x1257fe =
      _0x49292c[_0x1b17fb(0x2af)][_0x1b17fb(0x299)] == _0x1b17fb(0x2ee)
        ? -(gameData[_0x1b17fb(0x2bb)]["fillW"] / 0x2)
        : gameData["tube"][_0x1b17fb(0x2d7)] / 0x2,
    _0x561fcb = getAnglePosition(
      0x0,
      0x0,
      _0x1257fe,
      _0x49292c[_0x1b17fb(0x2af)][_0x1b17fb(0x27c)][_0x1b17fb(0x36e)]
    ),
    _0x4aebfa = getAnglePosition(
      _0x561fcb["x"],
      _0x561fcb["y"] - _0x37c70a,
      gameData[_0x1b17fb(0x2bb)]["h"],
      _0x49292c[_0x1b17fb(0x2af)][_0x1b17fb(0x27c)][_0x1b17fb(0x36e)] - 0x5a
    ),
    _0x2a771b =
      getDistance(
        _0x561fcb["x"],
        _0x561fcb["y"],
        _0x4aebfa["x"],
        _0x4aebfa["y"]
      ) - 0x3;
  (_0x49292c[_0x1b17fb(0x2af)][_0x1b17fb(0x2e5)] = _0x57f193),
    (_0x49292c[_0x1b17fb(0x2af)][_0x1b17fb(0x244)] = _0x308035),
    (_0x49292c["data"][_0x1b17fb(0x313)] = _0x37c70a),
    (_0x49292c[_0x1b17fb(0x2af)][_0x1b17fb(0x357)] = _0x9f087b),
    (_0x49292c["data"][_0x1b17fb(0x215)] = _0x2c2887),
    (_0x49292c["data"][_0x1b17fb(0x347)] = _0x561fcb),
    (_0x49292c[_0x1b17fb(0x2af)][_0x1b17fb(0x31b)] = _0x4aebfa);
  var _0x34cd9b = gameData[_0x1b17fb(0x2bb)]["h"] * 1.35,
    _0x265011 = 0x1;
  for (
    var _0x52c6c5 =
      _0x49292c[_0x1b17fb(0x2af)][_0x1b17fb(0x2f1)][_0x1b17fb(0x2fa)] - 0x1;
    _0x52c6c5 >= 0x0;
    _0x52c6c5--
  ) {
    var _0x53ff00 =
        _0x49292c[_0x1b17fb(0x2af)]["colors"][_0x52c6c5][_0x1b17fb(0x2b7)],
      _0xdfc1db =
        _0x49292c[_0x1b17fb(0x2af)]["colors"][_0x52c6c5][_0x1b17fb(0x239)],
      _0x39b3af =
        Math[_0x1b17fb(0x2d6)](_0x53ff00["y"]) +
        Math[_0x1b17fb(0x2d6)](_0x53ff00[_0x1b17fb(0x320)]),
      _0x5cc8ff = (_0x39b3af / Math["abs"](_0x4aebfa["y"])) * _0x2a771b;
    _0x5cc8ff = _0x5cc8ff > _0x2a771b ? _0x2a771b : _0x5cc8ff;
    var _0x2584e3 = getAnglePosition(
        _0x561fcb["x"],
        _0x561fcb["y"],
        _0x5cc8ff,
        _0x49292c[_0x1b17fb(0x2af)][_0x1b17fb(0x27c)][_0x1b17fb(0x36e)] - 0x5a
      ),
      _0x596e1a =
        (_0x34cd9b -
          (Math["abs"](_0x53ff00["y"]) +
            Math["abs"](_0x53ff00[_0x1b17fb(0x320)]))) *
        0.0058;
    (_0x265011 =
      Math["abs"](
        0x0 - _0x49292c[_0x1b17fb(0x2af)][_0x1b17fb(0x27c)][_0x1b17fb(0x36e)]
      ) * 0.035),
      (_0x265011 = _0x265011 * _0x596e1a),
      (_0x265011 = _0x265011 < 0x1 ? 0x1 : _0x265011);
    _0x49292c[_0x1b17fb(0x2af)]["direction"] == _0x1b17fb(0x2ee)
      ? (_0xdfc1db["x"] =
          _0x2584e3["x"] +
          (gameData[_0x1b17fb(0x2bb)][_0x1b17fb(0x2d7)] / 0x2) * _0x265011)
      : (_0xdfc1db["x"] =
          _0x2584e3["x"] -
          (gameData[_0x1b17fb(0x2bb)][_0x1b17fb(0x2d7)] / 0x2) * _0x265011);
    (_0xdfc1db["y"] = _0x2584e3["y"]), (_0xdfc1db["scaleX"] = _0x265011);
    if (
      _0x52c6c5 <
      _0x49292c[_0x1b17fb(0x2af)]["colors"][_0x1b17fb(0x2fa)] - 0x1
    ) {
      var _0x3fbf89 =
        _0x49292c["data"][_0x1b17fb(0x2f1)][_0x52c6c5 + 0x1][_0x1b17fb(0x26a)];
      _0x49292c[_0x1b17fb(0x2af)][_0x1b17fb(0x299)] == _0x1b17fb(0x2ee)
        ? (_0x3fbf89["x"] =
            _0x2584e3["x"] +
            (gameData[_0x1b17fb(0x2bb)][_0x1b17fb(0x2d7)] / 0x2) * _0x265011)
        : (_0x3fbf89["x"] =
            _0x2584e3["x"] -
            (gameData[_0x1b17fb(0x2bb)]["fillW"] / 0x2) * _0x265011),
        (_0x3fbf89["y"] = _0x2584e3["y"]),
        (_0x3fbf89[_0x1b17fb(0x2a4)] = _0x265011);
    }
  }
}
function updateFilling(_0x116d45) {
  var _0x5eafc2 = a0_0x55db6a,
    _0x1f950d = gameData[_0x5eafc2(0x34f)][_0x116d45]["from"],
    _0x1cb95f = gameData[_0x5eafc2(0x34f)][_0x116d45]["to"],
    _0x3fc18c =
      _0x1f950d["data"][_0x5eafc2(0x299)] == _0x5eafc2(0x2ee)
        ? -(gameData[_0x5eafc2(0x2bb)][_0x5eafc2(0x2d7)] / 0x2)
        : gameData[_0x5eafc2(0x2bb)][_0x5eafc2(0x2d7)] / 0x2,
    _0x4bcf81 = getAnglePosition(
      _0x1f950d[_0x5eafc2(0x2af)]["tubePos"]["x"],
      _0x1f950d[_0x5eafc2(0x2af)]["tubePos"]["y"],
      _0x3fc18c,
      _0x1f950d["data"][_0x5eafc2(0x2e5)]
    );
  (_0x1f950d[_0x5eafc2(0x2af)][_0x5eafc2(0x237)]["x"] = _0x4bcf81["x"]),
    (_0x1f950d[_0x5eafc2(0x2af)]["fillShape"]["y"] = _0x4bcf81["y"]);
  var _0x2a71a6 =
    (_0x1f950d[_0x5eafc2(0x2af)][_0x5eafc2(0x27c)][_0x5eafc2(0x36e)] / 0x5a) *
    (gameData[_0x5eafc2(0x2bb)][_0x5eafc2(0x2d7)] / 0x5);
  (_0x1cb95f["data"]["fillShape"]["x"] =
    _0x1f950d[_0x5eafc2(0x2af)][_0x5eafc2(0x299)] == _0x5eafc2(0x2ee)
      ? Math[_0x5eafc2(0x2d6)](_0x2a71a6)
      : -_0x2a71a6),
    (_0x1cb95f[_0x5eafc2(0x2af)][_0x5eafc2(0x237)]["y"] = -0xa),
    (_0x1cb95f["data"][_0x5eafc2(0x237)][_0x5eafc2(0x353)] = 0x1),
    (_0x1f950d[_0x5eafc2(0x2af)][_0x5eafc2(0x237)]["visible"] = ![]),
    (_0x1cb95f[_0x5eafc2(0x2af)][_0x5eafc2(0x237)][_0x5eafc2(0x1e5)] = !![]);
}
function updateLiquid(_0x22e102) {
  var _0x381a3f = a0_0x55db6a,
    _0x12d417 = gameData[_0x381a3f(0x34f)][_0x22e102][_0x381a3f(0x2fb)],
    _0xa4de13 = gameData[_0x381a3f(0x34f)][_0x22e102]["to"];
  updateTubeData(_0x12d417),
    updateTubeData(_0xa4de13),
    (_0x12d417[_0x381a3f(0x2af)]["container"]["y"] =
      _0x12d417[_0x381a3f(0x2af)][_0x381a3f(0x313)]),
    (_0x12d417["data"][_0x381a3f(0x335)][_0x381a3f(0x36e)] =
      _0x12d417[_0x381a3f(0x2af)]["rotateNum"]),
    (_0x12d417[_0x381a3f(0x2af)][_0x381a3f(0x1df)]["rotation"] =
      _0x12d417["data"][_0x381a3f(0x2e5)]),
    (_0x12d417[_0x381a3f(0x2af)][_0x381a3f(0x27c)][_0x381a3f(0x36e)] =
      _0x12d417[_0x381a3f(0x2af)]["rotateNum"]),
    _0x12d417[_0x381a3f(0x2af)][_0x381a3f(0x299)] == _0x381a3f(0x25e)
      ? (_0x12d417["x"] =
          _0xa4de13["x"] -
          gameData[_0x381a3f(0x2bb)]["fillX"] -
          _0x12d417[_0x381a3f(0x2af)][_0x381a3f(0x244)]["x"] +
          _0x12d417["data"]["containerY"])
      : (_0x12d417["x"] =
          _0xa4de13["x"] +
          gameData[_0x381a3f(0x2bb)]["fillX"] -
          _0x12d417[_0x381a3f(0x2af)][_0x381a3f(0x244)]["x"] -
          _0x12d417["data"][_0x381a3f(0x313)]),
    (_0x12d417["y"] =
      _0xa4de13["y"] -
      _0x12d417["data"][_0x381a3f(0x244)]["y"] -
      gameData[_0x381a3f(0x2bb)][_0x381a3f(0x34b)]);
}
function toggleGameTimer(_0x56059a) {
  var _0x12990c = a0_0x55db6a;
  if (_0x56059a) timeData["startDate"] = new Date();
  else {
  }
  timeData[_0x12990c(0x21e)] = _0x56059a;
}
function toggleGameSessionTimer(_0x51f212) {
  var _0x4b98af = a0_0x55db6a;
  _0x51f212
    ? ((timerShape[_0x4b98af(0x28d)] = 0x1),
      (timeData[_0x4b98af(0x378)] = -0x1),
      (timeData["accumulate"] = 0x0),
      (timeData[_0x4b98af(0x252)] = new Date()))
    : (timeData[_0x4b98af(0x26e)] =
        timeData[_0x4b98af(0x209)] - timeData[_0x4b98af(0x35f)]),
    (timeData["enable"] = _0x51f212);
}
function updateGame() {
  var _0x1782d2 = a0_0x55db6a;
  !gameData[_0x1782d2(0x342)] &&
    timeData[_0x1782d2(0x21e)] &&
    ((timeData[_0x1782d2(0x32a)] = new Date()),
    (timeData["elapsedTime"] = Math[_0x1782d2(0x27d)](
      timeData["nowDate"][_0x1782d2(0x257)]() -
        timeData[_0x1782d2(0x254)]["getTime"]()
    )),
    (timeData[_0x1782d2(0x23d)] = timeData["elapsedTime"]),
    (timeData["elapsedTime"] = Math[_0x1782d2(0x27d)](
      timeData["nowDate"][_0x1782d2(0x257)]() -
        timeData[_0x1782d2(0x252)][_0x1782d2(0x257)]()
    )),
    (timeData[_0x1782d2(0x35f)] = Math["floor"](
      timeData[_0x1782d2(0x209)] - timeData[_0x1782d2(0x223)]
    )),
    updateTimer());
}
function updateTimer() {
  var _0x349cf9 = a0_0x55db6a;
  timeData["oldTimer"] == -0x1 &&
    (timeData[_0x349cf9(0x378)] = timeData["sessionTimer"]),
    timeData[_0x349cf9(0x35f)] <= 0x0
      ? ((timeData[_0x349cf9(0x35f)] = 0x0),
        playSound("soundTimerEnd"),
        showGameStatus("timesup"),
        endGame())
      : timeData["oldTimer"] - timeData[_0x349cf9(0x35f)] > 0x3e8 &&
        (timeData[_0x349cf9(0x35f)] < 0x1388 &&
          (animateTimer(), playSound(_0x349cf9(0x291))),
        (timeData["oldTimer"] = timeData[_0x349cf9(0x35f)])),
    updateTimerBar();
}
function animateTimer() {
  var _0x17bbcb = 0.8;
  (timerShape["alpha"] = 0.2),
    TweenMax["to"](timerShape, _0x17bbcb, { alpha: 0x1 }),
    (timerShapeBg["alpha"] = 0x0),
    TweenMax["to"](timerShapeBg, _0x17bbcb, { alpha: 0.3 });
}
function updateTimerBar() {
  var _0xb808e6 = a0_0x55db6a;
  timerShape[_0xb808e6(0x2fc)][_0xb808e6(0x207)](),
    timerShape["graphics"][_0xb808e6(0x26b)](
      gameSettings[_0xb808e6(0x23d)]["color"]
    ),
    timerShapeBg["graphics"][_0xb808e6(0x207)](),
    timerShapeBg["graphics"][_0xb808e6(0x26b)](
      gameSettings[_0xb808e6(0x23d)][_0xb808e6(0x259)]
    ),
    (timerShapeBg[_0xb808e6(0x28d)] = 0.3);
  var _0x152f59 =
    (timeData[_0xb808e6(0x35f)] / timeData["countdown"]) *
    gameSettings["timer"]["width"];
  _0x152f59 = _0x152f59 < 0x5 ? 0x5 : _0x152f59;
  var _0x17b1a1 = gameSettings[_0xb808e6(0x23d)][_0xb808e6(0x2c2)];
  timerShape[_0xb808e6(0x2fc)][_0xb808e6(0x28f)](
    0x0,
    0x0,
    _0x152f59,
    gameSettings["timer"]["height"],
    _0x17b1a1,
    _0x17b1a1,
    _0x17b1a1,
    _0x17b1a1
  ),
    timerShapeBg[_0xb808e6(0x2fc)][_0xb808e6(0x28f)](
      0x0,
      0x0,
      gameSettings[_0xb808e6(0x23d)][_0xb808e6(0x314)],
      gameSettings["timer"]["height"],
      _0x17b1a1,
      _0x17b1a1,
      _0x17b1a1,
      _0x17b1a1
    );
}
function calculateScore() {
  var _0x24e4ef = a0_0x55db6a;
  playSound(_0x24e4ef(0x1ee)), (statusContainer["alpha"] = 0x1);
  var _0x52ab50 =
    gameData[_0x24e4ef(0x226)][_0x24e4ef(0x216)] /
    gameData[_0x24e4ef(0x226)][_0x24e4ef(0x23d)];
  TweenMax["to"](timeData, 0x1, {
    sessionTimer: 0x0,
    overwrite: !![],
    onUpdate: function () {
      var _0xfc4f73 = _0x24e4ef,
        _0x433fae = timeData[_0xfc4f73(0x209)] - timeData[_0xfc4f73(0x35f)],
        _0x5ac03b = Math[_0xfc4f73(0x27d)](
          (_0x433fae - timeData[_0xfc4f73(0x26e)]) * _0x52ab50
        );
      (statusTxt[_0xfc4f73(0x352)] = textStrings["score"]["replace"](
        "[NUMBER]",
        addCommas(_0x5ac03b)
      )),
        updateTimerBar();
    },
    onComplete: function () {
      var _0x27bb85 = _0x24e4ef,
        _0x1bb798 = timeData[_0x27bb85(0x209)] - timeData[_0x27bb85(0x35f)],
        _0x27414b = Math["floor"](
          (_0x1bb798 - timeData[_0x27bb85(0x26e)]) * _0x52ab50
        );
      (playerData[_0x27bb85(0x216)] += _0x27414b),
        TweenMax["to"](timerContainer, 0x1, {
          overwrite: !![],
          onComplete: function () {
            var _0x368845 = _0x27bb85;
            (statusTxt["text"] = ""),
              playSound(_0x368845(0x231)),
              showGameStatus(_0x368845(0x207));
            var _0x3833d8 =
              gameData[_0x368845(0x1e0)] == _0x368845(0x2ea) ? 0x0 : 0x2;
            TweenMax["to"](timerContainer, _0x3833d8, {
              overwrite: !![],
              onComplete: function () {
                var _0x253825 = _0x368845;
                (gameData[_0x253825(0x280)] = ![]),
                  gameData[_0x253825(0x23e)]++;
                gameData[_0x253825(0x23e)] >= gameData["levelCompleted"] &&
                  gameData[_0x253825(0x23e)] <
                    levelSettings[_0x253825(0x2fa)] &&
                  (gameData[_0x253825(0x280)] = !![]);
                var _0x50868f = gameData[_0x253825(0x23e)] + 0x1;
                (_0x50868f =
                  _0x50868f > levelSettings["length"]
                    ? levelSettings[_0x253825(0x2fa)]
                    : _0x50868f),
                  findSelectPage(_0x50868f),
                  saveLevelData(),
                  gameData[_0x253825(0x1e0)] == _0x253825(0x2ea)
                    ? endGame()
                    : (gameData[_0x253825(0x23e)]--, proceedNextStage());
              },
            });
          },
        });
    },
  });
}
function proceedNextStage() {
  var _0xe13ab8 = a0_0x55db6a;
  gameData[_0xe13ab8(0x2c7)]++,
    gameData[_0xe13ab8(0x23e)]++,
    (gameData[_0xe13ab8(0x23e)] =
      gameData["levelNum"] > levelSettings[_0xe13ab8(0x2fa)] - 0x1
        ? levelSettings[_0xe13ab8(0x2fa)] - 0x1
        : gameData[_0xe13ab8(0x23e)]),
    setupStage();
}
function updateGameLevel() {
  var _0x5ec900 = a0_0x55db6a;
  levelTxt[_0x5ec900(0x352)] = textStrings[_0x5ec900(0x2ea)][_0x5ec900(0x247)](
    _0x5ec900(0x358),
    gameData[_0x5ec900(0x2c7)]
  );
}
function showGameStatus(_0x2d0353) {
  var _0x5817aa = a0_0x55db6a,
    _0x96a686 = 0x2;
  if (_0x2d0353 == _0x5817aa(0x2de))
    statusTxt["text"] = textStrings[_0x5817aa(0x2de)];
  else
    _0x2d0353 == _0x5817aa(0x207) &&
      (gameData[_0x5817aa(0x1e0)] == _0x5817aa(0x2ea)
        ? (statusTxt["text"] = textStrings[_0x5817aa(0x207)][_0x5817aa(0x247)](
            _0x5817aa(0x358),
            gameData[_0x5817aa(0x23e)] + 0x1
          ))
        : (statusTxt[_0x5817aa(0x352)] = textStrings["clear"][_0x5817aa(0x247)](
            _0x5817aa(0x358),
            gameData[_0x5817aa(0x2c7)]
          )));
  (statusContainer[_0x5817aa(0x28d)] = 0x0),
    TweenMax["to"](statusContainer, 0.5, {
      alpha: 0x1,
      overwrite: !![],
      onComplete: function () {
        TweenMax["to"](statusContainer, 0.5, {
          delay: _0x96a686,
          alpha: 0x0,
          overwrite: !![],
        });
      },
    });
}
function endGame() {
  var _0x4f953d = a0_0x55db6a;
  (gameData[_0x4f953d(0x342)] = !![]),
    TweenMax["to"](gameContainer, 0x3, {
      overwrite: !![],
      onComplete: function () {
        var _0x444319 = _0x4f953d;
        goPage(_0x444319(0x30c));
      },
    });
}
function millisecondsToTimeGame(_0x125863) {
  var _0x3ef607 = a0_0x55db6a,
    _0xbf8211 = _0x125863 % 0x3e8,
    _0x56bf2d = Math[_0x3ef607(0x27d)]((_0x125863 / 0x3e8) % 0x3c),
    _0x402fad = Math[_0x3ef607(0x27d)]((_0x125863 / (0x3c * 0x3e8)) % 0x3c);
  return (
    _0x56bf2d < 0xa && (_0x56bf2d = "0" + _0x56bf2d),
    _0x402fad < 0xa && (_0x402fad = "0" + _0x402fad),
    _0x402fad + ":" + _0x56bf2d
  );
}
function toggleOptions(_0x6b4e57) {
  var _0x1e1614 = a0_0x55db6a;
  optionsContainer[_0x1e1614(0x1e5)]
    ? (optionsContainer[_0x1e1614(0x1e5)] = ![])
    : (optionsContainer[_0x1e1614(0x1e5)] = !![]),
    _0x6b4e57 != undefined && (optionsContainer["visible"] = _0x6b4e57);
}
function toggleSoundMute(_0x45a70a) {
  var _0x514426 = a0_0x55db6a;
  (buttonSoundOff["visible"] = ![]),
    (buttonSoundOn["visible"] = ![]),
    toggleSoundInMute(_0x45a70a),
    _0x45a70a
      ? (buttonSoundOn[_0x514426(0x1e5)] = !![])
      : (buttonSoundOff["visible"] = !![]);
}
function toggleMusicMute(_0x320c5d) {
  var _0x57501c = a0_0x55db6a;
  (buttonMusicOff[_0x57501c(0x1e5)] = ![]),
    (buttonMusicOn["visible"] = ![]),
    toggleMusicInMute(_0x320c5d),
    _0x320c5d
      ? (buttonMusicOn[_0x57501c(0x1e5)] = !![])
      : (buttonMusicOff[_0x57501c(0x1e5)] = !![]);
}
function toggleFullScreen() {
  var _0x1ca1da = a0_0x55db6a;
  if (
    !document[_0x1ca1da(0x269)] &&
    !document[_0x1ca1da(0x2c4)] &&
    !document[_0x1ca1da(0x288)] &&
    !document["msFullscreenElement"]
  ) {
    if (document["documentElement"][_0x1ca1da(0x33b)])
      document[_0x1ca1da(0x228)]["requestFullscreen"]();
    else {
      if (document[_0x1ca1da(0x228)][_0x1ca1da(0x255)])
        document[_0x1ca1da(0x228)][_0x1ca1da(0x255)]();
      else {
        if (document[_0x1ca1da(0x228)]["mozRequestFullScreen"])
          document[_0x1ca1da(0x228)]["mozRequestFullScreen"]();
        else
          document["documentElement"][_0x1ca1da(0x2e6)] &&
            document["documentElement"]["webkitRequestFullscreen"](
              Element[_0x1ca1da(0x1fd)]
            );
      }
    }
  } else {
    if (document[_0x1ca1da(0x2cc)]) document[_0x1ca1da(0x2cc)]();
    else {
      if (document["msExitFullscreen"]) document[_0x1ca1da(0x229)]();
      else {
        if (document["mozCancelFullScreen"]) document[_0x1ca1da(0x23c)]();
        else document["webkitExitFullscreen"] && document[_0x1ca1da(0x2d0)]();
      }
    }
  }
}
function shareLinks(_0x4e26f3, _0x334ef1) {
  var _0x51f318 = a0_0x55db6a;
  shareSettings[_0x51f318(0x361)] &&
    gtag(_0x51f318(0x292), _0x51f318(0x304), {
      event_category: _0x51f318(0x343),
      event_label: _0x4e26f3,
    });
  var _0x471d0b = location[_0x51f318(0x200)];
  _0x471d0b = encodeURIComponent(
    _0x471d0b[_0x51f318(0x376)](0x0, _0x471d0b[_0x51f318(0x319)]("/") + 0x1)
  );
  var _0x43a94e = shareSettings[_0x51f318(0x337)][_0x51f318(0x247)](
      "[SCORE]",
      _0x334ef1
    ),
    _0x2ed751 = shareSettings[_0x51f318(0x33d)][_0x51f318(0x247)](
      _0x51f318(0x2c0),
      _0x334ef1
    ),
    _0x356b08 = "";
  if (_0x4e26f3 == _0x51f318(0x2be))
    shareSettings[_0x51f318(0x1f6)]
      ? ((_0x471d0b = decodeURIComponent(_0x471d0b)),
        (_0x356b08 =
          _0x51f318(0x2d9) +
          encodeURIComponent(
            _0x471d0b +
              _0x51f318(0x212) +
              _0x43a94e +
              _0x51f318(0x1ff) +
              _0x471d0b +
              _0x51f318(0x2d2) +
              _0x471d0b +
              _0x51f318(0x36d)
          )))
      : (_0x356b08 = _0x51f318(0x2d9) + _0x471d0b);
  else {
    if (_0x4e26f3 == "twitter")
      _0x356b08 =
        "https://twitter.com/intent/tweet?text=" +
        _0x2ed751 +
        _0x51f318(0x1ff) +
        _0x471d0b;
    else {
      if (_0x4e26f3 == "whatsapp")
        _0x356b08 =
          "https://api.whatsapp.com/send?text=" +
          _0x2ed751 +
          _0x51f318(0x332) +
          _0x471d0b;
      else {
        if (_0x4e26f3 == "telegram")
          _0x356b08 =
            "https://t.me/share/url?url=" + _0x471d0b + "&text=" + _0x2ed751;
        else {
          if (_0x4e26f3 == _0x51f318(0x2cf))
            _0x356b08 = _0x51f318(0x270) + _0x471d0b + "&title=" + _0x2ed751;
          else
            _0x4e26f3 == _0x51f318(0x316) &&
              (_0x356b08 = _0x51f318(0x2e4) + _0x471d0b);
        }
      }
    }
  }
  window["open"](_0x356b08);
}
var stageWidth,
  stageHeight = 0x0,
  isLoaded = ![];
$(function () {
  var _0x47d83a = a0_0x55db6a,
    _0x2c69d6 = function () {
      var _0x3aa2d7 = a0_0x4c2d;
      try {
        createjs["WebAudioPlugin"]["context"][_0x3aa2d7(0x31a)] ===
          _0x3aa2d7(0x27f) &&
          (createjs[_0x3aa2d7(0x1f5)][_0x3aa2d7(0x2e1)][_0x3aa2d7(0x286)](),
          window[_0x3aa2d7(0x323)](_0x3aa2d7(0x304), _0x2c69d6));
      } catch (_0x1579dc) {
        console[_0x3aa2d7(0x2cb)](_0x3aa2d7(0x241)),
          console[_0x3aa2d7(0x2cb)](_0x1579dc);
      }
    };
  window["addEventListener"](_0x47d83a(0x304), _0x2c69d6),
    window[_0x47d83a(0x339)][_0x47d83a(0x251)][_0x47d83a(0x260)](0x0, 0x4) ===
      "file" && alert(_0x47d83a(0x2d5)),
    $(window)[_0x47d83a(0x36b)](function () {
      resizeLoaderFunc();
    }),
    resizeLoaderFunc(),
    checkBrowser();
});
function resizeLoaderFunc() {
  var _0x54f9a9 = a0_0x55db6a;
  (stageWidth = $(window)[_0x54f9a9(0x314)]()),
    (stageHeight = $(window)["height"]()),
    $("#mainLoader")[_0x54f9a9(0x2e8)](
      "left",
      checkContentWidth($(_0x54f9a9(0x227)))
    ),
    $(_0x54f9a9(0x227))[_0x54f9a9(0x2e8)](
      _0x54f9a9(0x245),
      checkContentHeight($(_0x54f9a9(0x227)))
    ),
    $(_0x54f9a9(0x208))[_0x54f9a9(0x2e8)](
      _0x54f9a9(0x25e),
      checkContentWidth($("#mainLoader"))
    ),
    $(_0x54f9a9(0x208))[_0x54f9a9(0x2e8)](
      _0x54f9a9(0x245),
      checkContentHeight($("#mainLoader"))
    );
}
var browserSupport = ![],
  isMobile,
  isTablet,
  isDesktop;
function checkBrowser() {
  var _0x47f336 = a0_0x55db6a;
  if (typeof MobileDetect === "function") {
    var _0x59b3a0 = new MobileDetect(
      window[_0x47f336(0x24a)][_0x47f336(0x329)]
    );
    (isMobile = _0x59b3a0[_0x47f336(0x234)]()),
      (isTablet = _0x59b3a0[_0x47f336(0x2da)]()),
      isMobile == null && isTablet == null && (isDesktop = !![]);
  }
  var _0xa34d2f = document["createElement"](_0x47f336(0x1dd));
  _0xa34d2f[_0x47f336(0x1f8)] && (browserSupport = !![]),
    browserSupport
      ? !isLoaded && ((isLoaded = !![]), initPreload())
      : $("#notSupportHolder")["show"]();
}
const levelSettings = [
  {
    timer: 0xea60,
    score: 0x1f4,
    tubes: 0x3,
    empty: 0x1,
    levels: 0x4,
    hidden: ![],
    column: 0x3,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x3, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0xea60,
    score: 0x1f4,
    tubes: 0x3,
    empty: 0x1,
    levels: 0x5,
    hidden: ![],
    column: 0x3,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x3, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x11170,
    score: 0x1f4,
    tubes: 0x4,
    empty: 0x1,
    levels: 0x4,
    hidden: ![],
    column: 0x4,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x4, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x11170,
    score: 0x1f4,
    tubes: 0x4,
    empty: 0x1,
    levels: 0x4,
    hidden: ![],
    column: 0x4,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x4, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x13880,
    score: 0x1f4,
    tubes: 0x4,
    empty: 0x1,
    levels: 0x5,
    hidden: !![],
    column: 0x4,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x4, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x15f90,
    score: 0x1f4,
    tubes: 0x5,
    empty: 0x1,
    levels: 0x4,
    hidden: ![],
    column: 0x5,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x3, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x15f90,
    score: 0x1f4,
    tubes: 0x5,
    empty: 0x1,
    levels: 0x4,
    hidden: ![],
    column: 0x5,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x3, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x15f90,
    score: 0x1f4,
    tubes: 0x5,
    empty: 0x1,
    levels: 0x5,
    hidden: ![],
    column: 0x5,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x3, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x186a0,
    score: 0x1f4,
    tubes: 0x6,
    empty: 0x2,
    levels: 0x4,
    hidden: ![],
    column: 0x6,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x3, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x186a0,
    score: 0x1f4,
    tubes: 0x6,
    empty: 0x2,
    levels: 0x4,
    hidden: !![],
    column: 0x6,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x3, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x186a0,
    score: 0x1f4,
    tubes: 0x6,
    empty: 0x2,
    levels: 0x5,
    hidden: ![],
    column: 0x6,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x3, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x1adb0,
    score: 0x1f4,
    tubes: 0x7,
    empty: 0x2,
    levels: 0x4,
    hidden: ![],
    column: 0x7,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x4, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x1adb0,
    score: 0x1f4,
    tubes: 0x7,
    empty: 0x2,
    levels: 0x4,
    hidden: ![],
    column: 0x7,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x4, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x1adb0,
    score: 0x1f4,
    tubes: 0x7,
    empty: 0x2,
    levels: 0x5,
    hidden: ![],
    column: 0x7,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x4, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x1d4c0,
    score: 0x1f4,
    tubes: 0x8,
    empty: 0x2,
    levels: 0x4,
    hidden: !![],
    column: 0x4,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x4, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x1d4c0,
    score: 0x1f4,
    tubes: 0x8,
    empty: 0x2,
    levels: 0x4,
    hidden: ![],
    column: 0x4,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x4, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x1d4c0,
    score: 0x1f4,
    tubes: 0x8,
    empty: 0x2,
    levels: 0x5,
    hidden: ![],
    column: 0x4,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x4, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x1fbd0,
    score: 0x1f4,
    tubes: 0x9,
    empty: 0x2,
    levels: 0x4,
    hidden: ![],
    column: 0x5,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x5, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x1fbd0,
    score: 0x1f4,
    tubes: 0x9,
    empty: 0x2,
    levels: 0x4,
    hidden: ![],
    column: 0x5,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x5, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x1fbd0,
    score: 0x1f4,
    tubes: 0x9,
    empty: 0x2,
    levels: 0x5,
    hidden: !![],
    column: 0x5,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x5, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x249f0,
    score: 0x1f4,
    tubes: 0xa,
    empty: 0x2,
    levels: 0x4,
    hidden: ![],
    column: 0x5,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x5, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x249f0,
    score: 0x1f4,
    tubes: 0xa,
    empty: 0x2,
    levels: 0x4,
    hidden: ![],
    column: 0x5,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x5, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x249f0,
    score: 0x1f4,
    tubes: 0xa,
    empty: 0x2,
    levels: 0x5,
    hidden: ![],
    column: 0x5,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x5, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x27100,
    score: 0x1f4,
    tubes: 0xb,
    empty: 0x2,
    levels: 0x4,
    hidden: ![],
    column: 0x6,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x5, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x27100,
    score: 0x1f4,
    tubes: 0xb,
    empty: 0x2,
    levels: 0x4,
    hidden: !![],
    column: 0x6,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x5, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x27100,
    score: 0x1f4,
    tubes: 0xb,
    empty: 0x2,
    levels: 0x5,
    hidden: ![],
    column: 0x6,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x5, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x29810,
    score: 0x1f4,
    tubes: 0xc,
    empty: 0x3,
    levels: 0x4,
    hidden: ![],
    column: 0x6,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x6, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x29810,
    score: 0x1f4,
    tubes: 0xc,
    empty: 0x3,
    levels: 0x4,
    hidden: ![],
    column: 0x6,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x6, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x29810,
    score: 0x1f4,
    tubes: 0xc,
    empty: 0x3,
    levels: 0x5,
    hidden: ![],
    column: 0x6,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x6, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x2bf20,
    score: 0x1f4,
    tubes: 0xd,
    empty: 0x3,
    levels: 0x4,
    hidden: !![],
    column: 0x7,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x5, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x2bf20,
    score: 0x1f4,
    tubes: 0xd,
    empty: 0x3,
    levels: 0x4,
    hidden: ![],
    column: 0x7,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x5, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x2bf20,
    score: 0x1f4,
    tubes: 0xd,
    empty: 0x3,
    levels: 0x5,
    hidden: ![],
    column: 0x7,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x5, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x2bf20,
    score: 0x1f4,
    tubes: 0xd,
    empty: 0x2,
    levels: 0x5,
    hidden: ![],
    column: 0x7,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x5, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x2bf20,
    score: 0x1f4,
    tubes: 0xe,
    empty: 0x3,
    levels: 0x4,
    hidden: ![],
    column: 0x7,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x5, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x2bf20,
    score: 0x1f4,
    tubes: 0xe,
    empty: 0x3,
    levels: 0x4,
    hidden: !![],
    column: 0x7,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x5, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x2bf20,
    score: 0x1f4,
    tubes: 0xe,
    empty: 0x3,
    levels: 0x5,
    hidden: ![],
    column: 0x7,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x5, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x2bf20,
    score: 0x1f4,
    tubes: 0xe,
    empty: 0x2,
    levels: 0x5,
    hidden: ![],
    column: 0x7,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x5, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x2e630,
    score: 0x1f4,
    tubes: 0xf,
    empty: 0x3,
    levels: 0x4,
    hidden: ![],
    column: 0x8,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x5, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x2e630,
    score: 0x1f4,
    tubes: 0xf,
    empty: 0x3,
    levels: 0x4,
    hidden: ![],
    column: 0x8,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x5, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x2e630,
    score: 0x1f4,
    tubes: 0xf,
    empty: 0x3,
    levels: 0x5,
    hidden: !![],
    column: 0x8,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x5, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x2e630,
    score: 0x1f4,
    tubes: 0xf,
    empty: 0x2,
    levels: 0x5,
    hidden: ![],
    column: 0x8,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x5, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x2e630,
    score: 0x1f4,
    tubes: 0x10,
    empty: 0x3,
    levels: 0x4,
    hidden: ![],
    column: 0x8,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x5, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x2e630,
    score: 0x1f4,
    tubes: 0x10,
    empty: 0x3,
    levels: 0x4,
    hidden: ![],
    column: 0x8,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x5, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x2e630,
    score: 0x1f4,
    tubes: 0x10,
    empty: 0x3,
    levels: 0x5,
    hidden: ![],
    column: 0x8,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x5, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x2e630,
    score: 0x1f4,
    tubes: 0x10,
    empty: 0x2,
    levels: 0x5,
    hidden: !![],
    column: 0x8,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x5, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x2e630,
    score: 0x1f4,
    tubes: 0x11,
    empty: 0x3,
    levels: 0x4,
    hidden: ![],
    column: 0x9,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x6, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x2e630,
    score: 0x1f4,
    tubes: 0x11,
    empty: 0x3,
    levels: 0x4,
    hidden: ![],
    column: 0x9,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x6, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x2e630,
    score: 0x1f4,
    tubes: 0x11,
    empty: 0x3,
    levels: 0x5,
    hidden: ![],
    column: 0x9,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x6, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x2e630,
    score: 0x1f4,
    tubes: 0x11,
    empty: 0x2,
    levels: 0x5,
    hidden: ![],
    column: 0x9,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x6, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x30d40,
    score: 0x1f4,
    tubes: 0x12,
    empty: 0x3,
    levels: 0x4,
    hidden: !![],
    column: 0x9,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x5, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x30d40,
    score: 0x1f4,
    tubes: 0x12,
    empty: 0x3,
    levels: 0x4,
    hidden: ![],
    column: 0x9,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x5, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x30d40,
    score: 0x1f4,
    tubes: 0x12,
    empty: 0x3,
    levels: 0x5,
    hidden: ![],
    column: 0x9,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x5, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x30d40,
    score: 0x1f4,
    tubes: 0x12,
    empty: 0x2,
    levels: 0x5,
    hidden: ![],
    column: 0x9,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x5, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x30d40,
    score: 0x1f4,
    tubes: 0x13,
    empty: 0x3,
    levels: 0x4,
    hidden: ![],
    column: 0xa,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x7, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x30d40,
    score: 0x1f4,
    tubes: 0x13,
    empty: 0x3,
    levels: 0x4,
    hidden: !![],
    column: 0xa,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x7, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x30d40,
    score: 0x1f4,
    tubes: 0x13,
    empty: 0x3,
    levels: 0x5,
    hidden: ![],
    column: 0xa,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x7, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x30d40,
    score: 0x1f4,
    tubes: 0x13,
    empty: 0x2,
    levels: 0x5,
    hidden: ![],
    column: 0xa,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x7, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x33450,
    score: 0x1f4,
    tubes: 0x14,
    empty: 0x3,
    levels: 0x4,
    hidden: ![],
    column: 0xa,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x7, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x33450,
    score: 0x1f4,
    tubes: 0x14,
    empty: 0x3,
    levels: 0x4,
    hidden: ![],
    column: 0xa,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x7, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x33450,
    score: 0x1f4,
    tubes: 0x14,
    empty: 0x3,
    levels: 0x5,
    hidden: !![],
    column: 0xa,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x7, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x33450,
    score: 0x1f4,
    tubes: 0x14,
    empty: 0x2,
    levels: 0x5,
    hidden: ![],
    column: 0xa,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x7, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x35b60,
    score: 0x1f4,
    tubes: 0x15,
    empty: 0x4,
    levels: 0x4,
    hidden: ![],
    column: 0xb,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x7, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x35b60,
    score: 0x1f4,
    tubes: 0x15,
    empty: 0x4,
    levels: 0x4,
    hidden: ![],
    column: 0xb,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x7, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x35b60,
    score: 0x1f4,
    tubes: 0x15,
    empty: 0x4,
    levels: 0x5,
    hidden: ![],
    column: 0xb,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x7, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x35b60,
    score: 0x1f4,
    tubes: 0x15,
    empty: 0x3,
    levels: 0x5,
    hidden: !![],
    column: 0xb,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x7, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x35b60,
    score: 0x1f4,
    tubes: 0x16,
    empty: 0x4,
    levels: 0x4,
    hidden: ![],
    column: 0xb,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x7, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x35b60,
    score: 0x1f4,
    tubes: 0x16,
    empty: 0x4,
    levels: 0x4,
    hidden: ![],
    column: 0xb,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x7, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x35b60,
    score: 0x1f4,
    tubes: 0x16,
    empty: 0x4,
    levels: 0x5,
    hidden: ![],
    column: 0xb,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x7, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x35b60,
    score: 0x1f4,
    tubes: 0x16,
    empty: 0x3,
    levels: 0x5,
    hidden: ![],
    column: 0xb,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x7, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x38270,
    score: 0x1f4,
    tubes: 0x17,
    empty: 0x4,
    levels: 0x4,
    hidden: !![],
    column: 0xc,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x7, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x38270,
    score: 0x1f4,
    tubes: 0x17,
    empty: 0x4,
    levels: 0x4,
    hidden: ![],
    column: 0xc,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x7, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x38270,
    score: 0x1f4,
    tubes: 0x17,
    empty: 0x4,
    levels: 0x5,
    hidden: ![],
    column: 0xc,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x7, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x38270,
    score: 0x1f4,
    tubes: 0x17,
    empty: 0x3,
    levels: 0x5,
    hidden: ![],
    column: 0xc,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x7, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x38270,
    score: 0x1f4,
    tubes: 0x18,
    empty: 0x4,
    levels: 0x4,
    hidden: ![],
    column: 0xc,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x7, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x38270,
    score: 0x1f4,
    tubes: 0x18,
    empty: 0x4,
    levels: 0x4,
    hidden: !![],
    column: 0xc,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x7, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x38270,
    score: 0x1f4,
    tubes: 0x18,
    empty: 0x4,
    levels: 0x5,
    hidden: ![],
    column: 0xc,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x7, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x38270,
    score: 0x1f4,
    tubes: 0x18,
    empty: 0x3,
    levels: 0x5,
    hidden: ![],
    column: 0xc,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x7, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x3a980,
    score: 0x1f4,
    tubes: 0x19,
    empty: 0x4,
    levels: 0x4,
    hidden: ![],
    column: 0xd,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x7, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x3a980,
    score: 0x1f4,
    tubes: 0x19,
    empty: 0x4,
    levels: 0x4,
    hidden: ![],
    column: 0xd,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x7, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x3a980,
    score: 0x1f4,
    tubes: 0x19,
    empty: 0x4,
    levels: 0x5,
    hidden: !![],
    column: 0xd,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x7, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x3a980,
    score: 0x1f4,
    tubes: 0x19,
    empty: 0x3,
    levels: 0x5,
    hidden: ![],
    column: 0xd,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x7, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x3a980,
    score: 0x1f4,
    tubes: 0x1a,
    empty: 0x4,
    levels: 0x4,
    hidden: ![],
    column: 0xd,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x7, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x3a980,
    score: 0x1f4,
    tubes: 0x1a,
    empty: 0x4,
    levels: 0x4,
    hidden: ![],
    column: 0xd,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x7, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x3a980,
    score: 0x1f4,
    tubes: 0x1a,
    empty: 0x4,
    levels: 0x5,
    hidden: ![],
    column: 0xd,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x7, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x3a980,
    score: 0x1f4,
    tubes: 0x1a,
    empty: 0x3,
    levels: 0x5,
    hidden: !![],
    column: 0xd,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x7, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x3a980,
    score: 0x1f4,
    tubes: 0x1a,
    empty: 0x3,
    levels: 0x6,
    hidden: ![],
    column: 0xd,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x7, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x3a980,
    score: 0x1f4,
    tubes: 0x1a,
    empty: 0x2,
    levels: 0x6,
    hidden: ![],
    column: 0xd,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x7, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x38270,
    score: 0x1f4,
    tubes: 0x1a,
    empty: 0x3,
    levels: 0x5,
    hidden: ![],
    column: 0xd,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x7, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x38270,
    score: 0x1f4,
    tubes: 0x1a,
    empty: 0x3,
    levels: 0x6,
    hidden: ![],
    column: 0xd,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x7, marginX: 0x28, marginY: 0x32 },
  },
  {
    timer: 0x38270,
    score: 0x1f4,
    tubes: 0x1a,
    empty: 0x2,
    levels: 0x6,
    hidden: !![],
    column: 0xd,
    marginX: 0x28,
    marginY: 0x32,
    portrait: { column: 0x7, marginX: 0x28, marginY: 0x32 },
  },
];
function initPreload() {
  var _0x5d79bf = a0_0x55db6a;
  toggleLoader(!![]),
    checkMobileEvent(),
    $(window)[_0x5d79bf(0x36b)](function () {
      clearTimeout(resizeTimer),
        (resizeTimer = setTimeout(checkMobileOrientation, 0x3e8));
    }),
    resizeGameFunc(),
    (loader = new createjs["LoadQueue"](![])),
    (manifest = [
      { src: _0x5d79bf(0x27b), id: "background" },
      { src: _0x5d79bf(0x28a), id: _0x5d79bf(0x298) },
      { src: _0x5d79bf(0x23b), id: _0x5d79bf(0x2b5) },
      { src: "assets/logo_p.png", id: _0x5d79bf(0x249) },
      { src: _0x5d79bf(0x25f), id: _0x5d79bf(0x29b) },
      { src: _0x5d79bf(0x285), id: _0x5d79bf(0x2ac) },
      { src: _0x5d79bf(0x222), id: "buttonBack" },
      { src: _0x5d79bf(0x1d7), id: _0x5d79bf(0x1ef) },
      { src: _0x5d79bf(0x265), id: _0x5d79bf(0x1fe) },
      { src: _0x5d79bf(0x1f7), id: _0x5d79bf(0x35e) },
      { src: _0x5d79bf(0x287), id: _0x5d79bf(0x334) },
      { src: "assets/button_arrow_right.png", id: _0x5d79bf(0x346) },
      { src: "assets/button_share.png", id: _0x5d79bf(0x1e2) },
      { src: _0x5d79bf(0x326), id: _0x5d79bf(0x1d5) },
      { src: _0x5d79bf(0x333), id: _0x5d79bf(0x24b) },
      { src: "assets/social/button_twitter.png", id: _0x5d79bf(0x340) },
      { src: _0x5d79bf(0x2ce), id: _0x5d79bf(0x1f0) },
      { src: _0x5d79bf(0x32e), id: _0x5d79bf(0x1d4) },
      { src: "assets/social/button_reddit.png", id: _0x5d79bf(0x23a) },
      { src: "assets/social/button_linkedin.png", id: "buttonLinkedin" },
      { src: _0x5d79bf(0x344), id: "buttonContinue" },
      { src: _0x5d79bf(0x34a), id: _0x5d79bf(0x2ba) },
      { src: "assets/item_pop_p.png", id: _0x5d79bf(0x2b2) },
      { src: "assets/button_confirm.png", id: "buttonConfirm" },
      { src: _0x5d79bf(0x30a), id: _0x5d79bf(0x2a1) },
      { src: _0x5d79bf(0x1ed), id: "buttonFullscreen" },
      { src: _0x5d79bf(0x276), id: _0x5d79bf(0x232) },
      { src: _0x5d79bf(0x1de), id: _0x5d79bf(0x369) },
      { src: "assets/button_music_on.png", id: "buttonMusicOn" },
      { src: _0x5d79bf(0x250), id: _0x5d79bf(0x374) },
      { src: "assets/button_exit.png", id: _0x5d79bf(0x22d) },
      { src: _0x5d79bf(0x30e), id: "buttonSettings" },
    ]);
  for (
    var _0x3546be = 0x0;
    _0x3546be < tubes_arr[_0x5d79bf(0x2fa)];
    _0x3546be++
  ) {
    manifest[_0x5d79bf(0x35c)]({
      src: tubes_arr[_0x3546be][_0x5d79bf(0x1df)],
      id: _0x5d79bf(0x1da) + _0x3546be,
    }),
      manifest["push"]({
        src: tubes_arr[_0x3546be][_0x5d79bf(0x27c)],
        id: _0x5d79bf(0x22c) + _0x3546be,
      });
  }
  for (
    var _0x3546be = 0x0;
    _0x3546be < bubbles_arr[_0x5d79bf(0x2fa)];
    _0x3546be++
  ) {
    manifest[_0x5d79bf(0x35c)]({
      src: bubbles_arr[_0x3546be],
      id: _0x5d79bf(0x2c8) + _0x3546be,
    });
  }
  typeof addScoreboardAssets == _0x5d79bf(0x338) && addScoreboardAssets(),
    (audioOn = !![]),
    !isDesktop
      ? !enableMobileAudio && (audioOn = ![])
      : !enableDesktopAudio && (audioOn = ![]),
    audioOn &&
      (manifest[_0x5d79bf(0x35c)]({
        src: "assets/sounds/sound_click.ogg",
        id: _0x5d79bf(0x2eb),
      }),
      manifest[_0x5d79bf(0x35c)]({
        src: _0x5d79bf(0x318),
        id: _0x5d79bf(0x1ee),
      }),
      manifest[_0x5d79bf(0x35c)]({
        src: _0x5d79bf(0x20a),
        id: _0x5d79bf(0x291),
      }),
      manifest["push"]({ src: _0x5d79bf(0x345), id: "soundTimerEnd" }),
      manifest[_0x5d79bf(0x35c)]({
        src: "assets/sounds/sound_result.ogg",
        id: _0x5d79bf(0x266),
      }),
      manifest[_0x5d79bf(0x35c)]({
        src: "assets/sounds/sound_error.ogg",
        id: _0x5d79bf(0x2db),
      }),
      manifest[_0x5d79bf(0x35c)]({ src: _0x5d79bf(0x35a), id: "soundClear" }),
      manifest[_0x5d79bf(0x35c)]({
        src: "assets/sounds/sound_start.ogg",
        id: _0x5d79bf(0x279),
      }),
      manifest["push"]({
        src: "assets/sounds/sound_select.ogg",
        id: _0x5d79bf(0x1e8),
      }),
      manifest[_0x5d79bf(0x35c)]({
        src: _0x5d79bf(0x25a),
        id: _0x5d79bf(0x2c6),
      }),
      manifest["push"]({ src: _0x5d79bf(0x2a5), id: _0x5d79bf(0x2f7) }),
      manifest[_0x5d79bf(0x35c)]({
        src: _0x5d79bf(0x2aa),
        id: _0x5d79bf(0x296),
      }),
      manifest[_0x5d79bf(0x35c)]({
        src: _0x5d79bf(0x240),
        id: _0x5d79bf(0x1f3),
      }),
      manifest[_0x5d79bf(0x35c)]({
        src: _0x5d79bf(0x325),
        id: _0x5d79bf(0x349),
      }),
      manifest["push"]({ src: _0x5d79bf(0x272), id: _0x5d79bf(0x281) }),
      (createjs[_0x5d79bf(0x33c)][_0x5d79bf(0x307)] = [_0x5d79bf(0x2b4)]),
      loader[_0x5d79bf(0x25d)](createjs[_0x5d79bf(0x33c)])),
    loader["addEventListener"](_0x5d79bf(0x264), handleComplete),
    loader[_0x5d79bf(0x365)](_0x5d79bf(0x261), fileComplete),
    loader["addEventListener"](_0x5d79bf(0x2cb), handleFileError),
    loader["on"](_0x5d79bf(0x20e), handleProgress, this),
    loader[_0x5d79bf(0x2a3)](manifest);
}
function fileComplete(_0x194c68) {
  var _0x403a76 = a0_0x55db6a,
    _0x833bb1 = _0x194c68[_0x403a76(0x2a6)];
}
function handleFileError(_0x3455b4) {
  var _0x3424f6 = a0_0x55db6a;
  console["log"](_0x3424f6(0x1d6), _0x3455b4);
}
function handleProgress() {
  var _0x3d3638 = a0_0x55db6a;
  $(_0x3d3638(0x372))[_0x3d3638(0x26c)](
    Math[_0x3d3638(0x364)]((loader[_0x3d3638(0x20e)] / 0x1) * 0x64) + "%"
  );
}
function handleComplete() {
  toggleLoader(![]), initMain();
}
function toggleLoader(_0x3e9842) {
  var _0x2a7eb5 = a0_0x55db6a;
  _0x3e9842
    ? $("#mainLoader")[_0x2a7eb5(0x2ff)]()
    : $(_0x2a7eb5(0x227))[_0x2a7eb5(0x1e7)]();
}
var stageW = 0x500,
  stageH = 0x300,
  contentW = 0x400,
  contentH = 0x240;
const viewport = { isLandscape: !![] },
  landscapeSize = { w: stageW, h: stageH, cW: contentW, cH: contentH },
  portraitSize = { w: 0x300, h: 0x400, cW: 0x240, cH: 0x384 };
function initMain() {
  var _0x384359 = a0_0x55db6a;
  isDesktop && $(_0x384359(0x21a))[_0x384359(0x2ff)](),
    initGameCanvas(stageW, stageH),
    buildGameCanvas(),
    buildGameButton(),
    typeof buildScoreBoardCanvas == _0x384359(0x338) && buildScoreBoardCanvas(),
    $["editor"][_0x384359(0x21e)]
      ? (loadEditPage(), goPage("game"))
      : (retrieveLevelData(), goPage(_0x384359(0x25c))),
    checkMobileOrientation(),
    resizeCanvas();
}
var windowW = (windowH = 0x0),
  scalePercent = 0x0;
const dpr = window["devicePixelRatio"] || 0x1,
  offset = { x: 0x0, y: 0x0, left: 0x0, top: 0x0 };
function resizeGameFunc() {
  setTimeout(function () {
    var _0x36e8d3 = a0_0x4c2d;
    $(_0x36e8d3(0x22a))[_0x36e8d3(0x2e8)](
      _0x36e8d3(0x25e),
      checkContentWidth($(_0x36e8d3(0x22a)))
    ),
      $(_0x36e8d3(0x22a))[_0x36e8d3(0x2e8)](
        _0x36e8d3(0x245),
        checkContentHeight($(_0x36e8d3(0x22a)))
      ),
      (windowW = window["innerWidth"]),
      (windowH = window[_0x36e8d3(0x34e)]),
      (scalePercent = Math[_0x36e8d3(0x2e0)](
        windowW / contentW,
        windowH / contentH
      )),
      (scalePercent = scalePercent > 0x1 ? 0x1 : scalePercent);
    windowW > stageW &&
      windowH > stageH &&
      windowW > stageW &&
      ((scalePercent = windowW / stageW),
      stageH * scalePercent > windowH && (scalePercent = windowH / stageH));
    const _0x3387a6 = stageW * scalePercent,
      _0x24507f = stageH * scalePercent;
    (offset[_0x36e8d3(0x25e)] = 0x0), (offset[_0x36e8d3(0x245)] = 0x0);
    _0x3387a6 > windowW
      ? (offset[_0x36e8d3(0x25e)] = -(_0x3387a6 - windowW))
      : (offset[_0x36e8d3(0x25e)] = windowW - _0x3387a6);
    _0x24507f > windowH
      ? (offset[_0x36e8d3(0x245)] = -(_0x24507f - windowH))
      : (offset["top"] = windowH - _0x24507f);
    (offset["x"] = 0x0), (offset["y"] = 0x0);
    offset[_0x36e8d3(0x25e)] < 0x0 &&
      (offset["x"] = Math[_0x36e8d3(0x2d6)](
        offset[_0x36e8d3(0x25e)] / scalePercent / 0x2
      ));
    offset["top"] < 0x0 &&
      (offset["y"] = Math[_0x36e8d3(0x2d6)](
        offset[_0x36e8d3(0x245)] / scalePercent / 0x2
      ));
    const _0x4fcd84 = document[_0x36e8d3(0x362)]("gameCanvas"),
      _0x523316 = _0x4fcd84[_0x36e8d3(0x1f8)]("2d");
    (_0x4fcd84["style"][_0x36e8d3(0x314)] = _0x3387a6 + "px"),
      (_0x4fcd84[_0x36e8d3(0x2ca)][_0x36e8d3(0x1d1)] = _0x24507f + "px"),
      (_0x4fcd84[_0x36e8d3(0x2ca)][_0x36e8d3(0x25e)] =
        offset["left"] / 0x2 + "px"),
      (_0x4fcd84[_0x36e8d3(0x2ca)]["top"] =
        offset[_0x36e8d3(0x245)] / 0x2 + "px"),
      (_0x4fcd84[_0x36e8d3(0x314)] = stageW * dpr),
      (_0x4fcd84[_0x36e8d3(0x1d1)] = stageH * dpr),
      $(window)[_0x36e8d3(0x315)](0x0),
      resizeCanvas(),
      typeof resizeScore == _0x36e8d3(0x338) && resizeScore();
  }, 0x64);
}
var resizeTimer;
function checkMobileEvent() {
  var _0xbd8696 = a0_0x55db6a;
  !isDesktop &&
    ($(window)
      [_0xbd8696(0x289)]("orientationchange")
      ["on"](_0xbd8696(0x284), function (_0x38e9ea) {
        var _0x19f417 = _0xbd8696;
        $("#canvasHolder")[_0x19f417(0x1e7)](),
          $(_0x19f417(0x2d8))[_0x19f417(0x1e7)](),
          clearTimeout(resizeTimer),
          (resizeTimer = setTimeout(checkMobileOrientation, 0x3e8));
      }),
    checkMobileOrientation());
}
function checkMobileOrientation() {
  var _0x51dc74 = a0_0x55db6a,
    _0x52e2e8 = ![];
  window["innerWidth"] > window[_0x51dc74(0x34e)] && (_0x52e2e8 = !![]),
    $[_0x51dc74(0x330)][_0x51dc74(0x21e)]
      ? (viewport[_0x51dc74(0x205)] = edit[_0x51dc74(0x205)])
      : (viewport["isLandscape"] = _0x52e2e8),
    changeViewport(viewport["isLandscape"]),
    resizeGameFunc(),
    $(_0x51dc74(0x21a))[_0x51dc74(0x2ff)]();
}
function toggleRotate(_0x30b48d) {
  var _0xc23bbf = a0_0x55db6a;
  _0x30b48d
    ? $(_0xc23bbf(0x2d8))["fadeIn"]()
    : $("#rotateHolder")[_0xc23bbf(0x22e)](),
    resizeGameFunc();
}
function checkContentHeight(_0x526c5b) {
  var _0x4cbe65 = a0_0x55db6a,
    _0x20e5d2 = $(window)["height"](),
    _0x3181a7 = _0x20e5d2 / 0x2 - _0x526c5b[_0x4cbe65(0x1d1)]() / 0x2;
  return _0x3181a7;
}
function checkContentWidth(_0x33588f) {
  var _0x353ca7 = a0_0x55db6a,
    _0x167f47 = $(window)[_0x353ca7(0x314)](),
    _0x5bb0ea = _0x167f47 / 0x2 - _0x33588f[_0x353ca7(0x314)]() / 0x2;
  return _0x5bb0ea;
}
function shuffle(_0x38cf26) {
  var _0x3048c9 = a0_0x55db6a,
    _0x46fd81 = _0x38cf26[_0x3048c9(0x2fa)],
    _0x494a2a,
    _0x360740;
  while (0x0 !== _0x46fd81) {
    (_0x360740 = Math[_0x3048c9(0x27d)](Math[_0x3048c9(0x23f)]() * _0x46fd81)),
      (_0x46fd81 -= 0x1),
      (_0x494a2a = _0x38cf26[_0x46fd81]),
      (_0x38cf26[_0x46fd81] = _0x38cf26[_0x360740]),
      (_0x38cf26[_0x360740] = _0x494a2a);
  }
  return _0x38cf26;
}
function randomBoolean() {
  var _0x2a0e33 = a0_0x55db6a;
  return Math[_0x2a0e33(0x23f)]() < 0.5;
}
function getDistance(_0x30dfbc, _0x317178, _0x1bf380, _0x209ae4) {
  var _0x2c0723 = a0_0x55db6a,
    _0x4cf5f8 = Math[_0x2c0723(0x1f2)](
      Math[_0x2c0723(0x366)](_0x30dfbc - _0x1bf380, 0x2) +
        Math["pow"](_0x317178 - _0x209ae4, 0x2)
    );
  return _0x4cf5f8;
}
function sortOnObject(_0x79bb97, _0x2679cd, _0x2f01af) {
  var _0x5be87a = a0_0x55db6a;
  return (
    _0x2f01af
      ? _0x79bb97[_0x5be87a(0x21f)](function (_0x3cb058, _0xd3969e) {
          var _0x98254e = _0x3cb058[_0x2679cd],
            _0x553ff8 = _0xd3969e[_0x2679cd];
          if (_0x98254e == _0x553ff8) return 0x0;
          return _0x98254e < _0x553ff8 ? 0x1 : -0x1;
        })
      : _0x79bb97[_0x5be87a(0x21f)](function (_0x3a5c52, _0x48db30) {
          var _0x18c5cf = _0x3a5c52[_0x2679cd],
            _0x125941 = _0x48db30[_0x2679cd];
          if (_0x18c5cf == _0x125941) return 0x0;
          return _0x18c5cf > _0x125941 ? 0x1 : -0x1;
        }),
    _0x79bb97
  );
}
function randomIntFromInterval(_0x2fe87e, _0x34b35e) {
  var _0x3fb7f2 = a0_0x55db6a;
  return Math[_0x3fb7f2(0x27d)](
    Math[_0x3fb7f2(0x23f)]() * (_0x34b35e - _0x2fe87e + 0x1) + _0x2fe87e
  );
}
function addCommas(_0x4206f1) {
  var _0x473f6e = a0_0x55db6a;
  (_0x4206f1 += ""),
    (x = _0x4206f1[_0x473f6e(0x2fd)](".")),
    (x1 = x[0x0]),
    (x2 = x["length"] > 0x1 ? "." + x[0x1] : "");
  var _0x51d71e = /(\d+)(\d{3})/;
  while (_0x51d71e[_0x473f6e(0x356)](x1)) {
    x1 = x1[_0x473f6e(0x247)](_0x51d71e, "$1" + "," + "$2");
  }
  return x1 + x2;
}
function swapArray(_0x1e3bfa, _0x177b20, _0x1b6cb5) {
  var _0x148034 = _0x1e3bfa[_0x177b20];
  (_0x1e3bfa[_0x177b20] = _0x1e3bfa[_0x1b6cb5]),
    (_0x1e3bfa[_0x1b6cb5] = _0x148034);
}
function getCenterPosition(_0x25f503, _0x2e7247, _0x2cecaa, _0x1f0605) {
  var _0x2c345c = { x: 0x0, y: 0x0 };
  return (
    (_0x2c345c["x"] = (_0x25f503 + _0x2cecaa) / 0x2),
    (_0x2c345c["y"] = (_0x2e7247 + _0x1f0605) / 0x2),
    _0x2c345c
  );
}
function getCenterPositionByPercent(
  _0x5f3797,
  _0x32241c,
  _0x5c0abf,
  _0x51aea2,
  _0x375c96,
  _0x15c612
) {
  _0x15c612 = _0x15c612 > _0x375c96 ? _0x375c96 : _0x15c612;
  var _0x4d9e8a = { x: 0x0, y: 0x0 };
  return (
    (_0x4d9e8a["x"] = (_0x5f3797 + _0x5c0abf) / 0x2),
    (_0x4d9e8a["y"] = (_0x32241c + _0x51aea2) / 0x2),
    _0x4d9e8a
  );
}
function getAnglePosition(_0x54906f, _0x488611, _0x4d6a5b, _0x53143f) {
  var _0x14477f = a0_0x55db6a,
    _0x3f6565 = { x: 0x0, y: 0x0 };
  return (
    (_0x3f6565["x"] =
      _0x54906f +
      _0x4d6a5b * Math[_0x14477f(0x348)]((_0x53143f * Math["PI"]) / 0xb4)),
    (_0x3f6565["y"] =
      _0x488611 + _0x4d6a5b * Math["sin"]((_0x53143f * Math["PI"]) / 0xb4)),
    _0x3f6565
  );
}
function isEven(_0x58c4af) {
  return (
    (_0x58c4af = Number(_0x58c4af)),
    _0x58c4af === 0x0 || !!(_0x58c4af && !(_0x58c4af % 0x2))
  );
}
const enableDesktopAudio = !![],
  enableMobileAudio = !![],
  muteSoundOn = ![],
  muteMusicOn = ![];
var audioOn,
  soundMute = ![],
  musicMute = ![];
$[a0_0x55db6a(0x2dd)] = {};
var soundID = 0x0,
  soundPushArr = [],
  soundLoopPushArr = [],
  musicPushArr = [];
function playSound(_0x1b0349, _0x53af53) {
  var _0x7ac09 = a0_0x55db6a;
  if (audioOn) {
    var _0x20a3bc = soundID;
    soundPushArr[_0x7ac09(0x35c)](_0x20a3bc), soundID++;
    var _0x1eea43 = _0x53af53 == undefined ? 0x1 : _0x53af53;
    ($[_0x7ac09(0x2dd)][_0x20a3bc] =
      createjs[_0x7ac09(0x33c)][_0x7ac09(0x24d)](_0x1b0349)),
      ($[_0x7ac09(0x2dd)][_0x20a3bc]["defaultVol"] = _0x1eea43),
      setSoundVolume(_0x20a3bc),
      $["sound"][_0x20a3bc][_0x7ac09(0x2ed)](),
      $[_0x7ac09(0x2dd)][_0x20a3bc][_0x7ac09(0x365)](
        _0x7ac09(0x264),
        function () {
          var _0xbf7898 = _0x7ac09,
            _0x443729 = soundPushArr[_0xbf7898(0x2e3)](_0x20a3bc);
          _0x443729 != -0x1 && soundPushArr[_0xbf7898(0x32b)](_0x443729, 0x1);
        }
      );
  }
}
function playSoundLoop(_0x221439) {
  var _0x52da63 = a0_0x55db6a;
  audioOn &&
    $[_0x52da63(0x2dd)][_0x221439] == null &&
    (soundLoopPushArr[_0x52da63(0x35c)](_0x221439),
    ($["sound"][_0x221439] = createjs["Sound"]["play"](_0x221439)),
    ($[_0x52da63(0x2dd)][_0x221439]["defaultVol"] = 0x1),
    setSoundLoopVolume(_0x221439),
    $[_0x52da63(0x2dd)][_0x221439]["removeAllEventListeners"](),
    $[_0x52da63(0x2dd)][_0x221439][_0x52da63(0x365)](
      _0x52da63(0x264),
      function () {
        var _0xabaaea = _0x52da63;
        $[_0xabaaea(0x2dd)][_0x221439]["play"]();
      }
    ));
}
function toggleSoundLoop(_0x5cb81c, _0x1e0c64) {
  var _0x4bc499 = a0_0x55db6a;
  audioOn &&
    $[_0x4bc499(0x2dd)][_0x5cb81c] != null &&
    (_0x1e0c64
      ? $[_0x4bc499(0x2dd)][_0x5cb81c][_0x4bc499(0x24d)]()
      : ($[_0x4bc499(0x2dd)][_0x5cb81c]["paused"] = !![]));
}
function stopSoundLoop(_0x2c8545) {
  var _0x72d320 = a0_0x55db6a;
  if (audioOn) {
    if ($["sound"][_0x2c8545] != null) {
      $[_0x72d320(0x2dd)][_0x2c8545][_0x72d320(0x221)](),
        ($["sound"][_0x2c8545] = null);
      var _0x948775 = soundLoopPushArr[_0x72d320(0x2e3)](_0x2c8545);
      _0x948775 != -0x1 && soundLoopPushArr[_0x72d320(0x32b)](_0x948775, 0x1);
    }
  }
}
function playMusicLoop(_0x731d10) {
  var _0x462e23 = a0_0x55db6a;
  audioOn &&
    $["sound"][_0x731d10] == null &&
    (musicPushArr[_0x462e23(0x35c)](_0x731d10),
    ($["sound"][_0x731d10] = createjs[_0x462e23(0x33c)]["play"](_0x731d10)),
    ($[_0x462e23(0x2dd)][_0x731d10][_0x462e23(0x2f9)] = 0x1),
    setMusicVolume(_0x731d10),
    $[_0x462e23(0x2dd)][_0x731d10][_0x462e23(0x2ed)](),
    $[_0x462e23(0x2dd)][_0x731d10][_0x462e23(0x365)](
      _0x462e23(0x264),
      function () {
        var _0x5f38c1 = _0x462e23;
        $[_0x5f38c1(0x2dd)][_0x731d10][_0x5f38c1(0x24d)]();
      }
    ));
}
function toggleMusicLoop(_0x41a673, _0x7bb5d9) {
  var _0x3d8922 = a0_0x55db6a;
  audioOn &&
    $[_0x3d8922(0x2dd)][_0x41a673] != null &&
    (_0x7bb5d9
      ? $[_0x3d8922(0x2dd)][_0x41a673][_0x3d8922(0x24d)]()
      : ($["sound"][_0x41a673][_0x3d8922(0x342)] = !![]));
}
function stopMusicLoop(_0x320437) {
  var _0x19ee65 = a0_0x55db6a;
  if (audioOn) {
    if ($[_0x19ee65(0x2dd)][_0x320437] != null) {
      $[_0x19ee65(0x2dd)][_0x320437]["stop"](),
        ($[_0x19ee65(0x2dd)][_0x320437] = null);
      var _0x53c33f = musicPushArr[_0x19ee65(0x2e3)](_0x320437);
      _0x53c33f != -0x1 && musicPushArr[_0x19ee65(0x32b)](_0x53c33f, 0x1);
    }
  }
}
function stopSound() {
  var _0x2a8236 = a0_0x55db6a;
  createjs[_0x2a8236(0x33c)][_0x2a8236(0x221)]();
}
function toggleSoundInMute(_0x1c05ac) {
  var _0x309ea0 = a0_0x55db6a;
  if (audioOn) {
    soundMute = _0x1c05ac;
    for (
      var _0x3e03bd = 0x0;
      _0x3e03bd < soundPushArr[_0x309ea0(0x2fa)];
      _0x3e03bd++
    ) {
      setSoundVolume(soundPushArr[_0x3e03bd]);
    }
    for (
      var _0x3e03bd = 0x0;
      _0x3e03bd < soundLoopPushArr["length"];
      _0x3e03bd++
    ) {
      setSoundLoopVolume(soundLoopPushArr[_0x3e03bd]);
    }
  }
}
function toggleMusicInMute(_0x104bab) {
  if (audioOn) {
    musicMute = _0x104bab;
    for (var _0x1133e9 = 0x0; _0x1133e9 < musicPushArr["length"]; _0x1133e9++) {
      setMusicVolume(musicPushArr[_0x1133e9]);
    }
  }
}
function setSoundVolume(_0x5ac56a, _0x4bc6c1) {
  var _0x8f1036 = a0_0x55db6a;
  if (audioOn) {
    var _0x57dcca = soundPushArr[_0x8f1036(0x2e3)](_0x5ac56a);
    if (_0x57dcca != -0x1) {
      var _0x51b93e =
          _0x4bc6c1 == undefined
            ? $["sound"][soundPushArr[_0x57dcca]]["defaultVol"]
            : _0x4bc6c1,
        _0x9bc60c = soundMute == ![] ? _0x51b93e : 0x0;
      ($["sound"][soundPushArr[_0x57dcca]][_0x8f1036(0x1d3)] = _0x9bc60c),
        ($["sound"][soundPushArr[_0x57dcca]][_0x8f1036(0x2f9)] = _0x51b93e);
    }
  }
}
function setSoundLoopVolume(_0x4f9b65, _0x1108d1) {
  var _0x2e97ba = a0_0x55db6a;
  if (audioOn) {
    var _0xe07368 = soundLoopPushArr[_0x2e97ba(0x2e3)](_0x4f9b65);
    if (_0xe07368 != -0x1) {
      var _0x20bac9 =
          _0x1108d1 == undefined
            ? $[_0x2e97ba(0x2dd)][soundLoopPushArr[_0xe07368]]["defaultVol"]
            : _0x1108d1,
        _0x51c095 = soundMute == ![] ? _0x20bac9 : 0x0;
      ($[_0x2e97ba(0x2dd)][soundLoopPushArr[_0xe07368]]["volume"] = _0x51c095),
        ($[_0x2e97ba(0x2dd)][soundLoopPushArr[_0xe07368]][_0x2e97ba(0x2f9)] =
          _0x20bac9);
    }
  }
}
function setMusicVolume(_0x2cd5b7, _0x5b576a) {
  var _0x32e420 = a0_0x55db6a;
  if (audioOn) {
    var _0x24d110 = musicPushArr[_0x32e420(0x2e3)](_0x2cd5b7);
    if (_0x24d110 != -0x1) {
      var _0x6f585c =
          _0x5b576a == undefined
            ? $[_0x32e420(0x2dd)][musicPushArr[_0x24d110]][_0x32e420(0x2f9)]
            : _0x5b576a,
        _0x48f40f = musicMute == ![] ? _0x6f585c : 0x0;
      ($[_0x32e420(0x2dd)][musicPushArr[_0x24d110]][_0x32e420(0x1d3)] =
        _0x48f40f),
        ($["sound"][musicPushArr[_0x24d110]]["defaultVol"] = _0x6f585c);
    }
  }
}
