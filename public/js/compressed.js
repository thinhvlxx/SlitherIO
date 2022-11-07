function detectmob() {
    var e, t = !1;
    return e = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0), t
}

function componentToHex(e) {
    var t = e.toString(16);
    return 1 == t.length ? "0" + t : t
}

function rgbToHex(e, t, i) {
    return "0x" + componentToHex(e) + componentToHex(t) + componentToHex(i)
}

function hexToRgb(e) {
    var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
    return t ? {
        r: parseInt(t[1], 16),
        g: parseInt(t[2], 16),
        b: parseInt(t[3], 16)
    } : null
}

function sortFunction(e, t) {
    return e[0] === t[0] ? 0 : e[0] > t[0] ? -1 : 1
}

function isOnline() {
    return !!navigator && navigator.onLine
}

function toDataURL(e, s, a, n, h) {
    var t = new Image;
    t.crossOrigin = "Anonymous", t.onload = function() {
        var e, t = document.createElement("CANVAS"),
            i = t.getContext("2d");
        t.height = this.naturalHeight, t.width = this.naturalWidth, i.drawImage(this, 0, 0), i.font = "40px gamefont_regular", i.textAlign = "center", i.fillStyle = "#fff", i.fillText(s, .5 * t.width, t.height - 70), i.font = "54px gamefont_regular", i.textAlign = "center", i.fillStyle = "#fff", i.fillText(a, .5 * t.width, t.height - 20), e = t.toDataURL(h), n(e)
    }, t.src = e, (t.complete || void 0 === t.complete) && (t.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==", t.src = e)
}
void 0 !== navigator.onLine && (window.addEventListener("online", function() {
    console.log("Went Online")
}), window.addEventListener("offline", function() {
    console.log("Went Offline"), isGameStarted && OfflineGame()
}));
var z0, z1, MAX_SKINS = 10,
    MAX_SCALE = .7,
    MIN_SCALE = .2,
    NORMAL_SPEED = .4,
    BOOST_SPEED = 1,
    BOOST_ACC = .002,
    BOOST_DEACC = .005,
    MIN_STRENGTH = 15,
    MAX_STRENGTH = 125,
    MIN_STEER_SPEED = .0045,
    MAX_STEER_SPEED = .009,
    SANKE_PIXEL_SIZE = 250,
    GAP_FACTOR = .175,
    SPAWN_OFFSET = 500,
    MAX_FACES = 75,
    BODY_SCALE_REDUCTION = .4,
    DEPTH_BG = 0,
    DEPTH_BOUNDARY = 1,
    DEPTH_FOOD = 2,
    DEPTH_LIGHT = 3,
    DEPTH_CHILD = 499,
    DEPTH_HEAD = 500,
    CAMERA_LERP = .125,
    MAX_ZOOM = .7,
    MIN_ZOOM = 1,
    MAX_BODIES = 22,
    MAX_FOOD = 400,
    FOOD_VALUE = 1,
    FOOD_SPAWN_OFFSET = 500,
    FOOD_SKINS = 19,
    LEFTOVER_SKINS = 26,
    LEFTOVER_VALUE = .5,
    BOOST_VFX_BRIGHT_COLOR = "#FFFFFF",
    BOOST_VFX_DIM_COLOR = "#969696",
    BOOST_CONSUMPTION = .005,
    BOOST_ALPHA = .85,
    SNAKE_WIDTH = 250,
    DETECTOR_WIDTH = 400,
    MAX_NAME_FONT_SIZE = 32,
    MIN_NAME_FONT_SIZE = 16,
    AI_MAX_RANGE = 600,
    AI_MIN_RANGE = 300,
    PREFIX = "es_",
    factorScale = (MAX_SCALE - MIN_SCALE) / (MAX_STRENGTH - MIN_STRENGTH),
    factorSteer = (MAX_STEER_SPEED - MIN_STEER_SPEED) / (BOOST_SPEED - NORMAL_SPEED),
    factorZoom = (MAX_ZOOM - MIN_ZOOM) / (MAX_STRENGTH - MIN_STRENGTH),
    factorNameSize = (MAX_NAME_FONT_SIZE - MIN_NAME_FONT_SIZE) / (MAX_STRENGTH - MIN_STRENGTH),
    factorRange = (AI_MAX_RANGE - AI_MIN_RANGE) / (MAX_STRENGTH - MIN_STRENGTH),
    CHILD_COLLISION_GAP = 3,
    KILL_LEFT_OVER_GAP = 2,
    JOYSTICK_OFFSET = 150,
    mySkinNo = -1,
    myName = "Waqas Siddique",
    myLongestLength = 0,
    RESUME_TIME = 10,
    isZooming = !1,
    zoomSinAngle = 0,
    zoomMag = .05;

function ZoomScene() {
    isZooming = !(zoomSinAngle = 0)
}
var Blur = new Phaser.Class({
    Extends: Phaser.Renderer.WebGL.Pipelines.TextureTintPipeline,
    initialize: function(e) {
        Phaser.Renderer.WebGL.Pipelines.TextureTintPipeline.call(this, {
            game: e,
            renderer: e.renderer,
            fragShader: ["precision mediump float;", "varying vec4 outColor;", "varying vec2 outTexCoord;", "uniform sampler2D u_texture;", "uniform float resolution;", "uniform float radius;", "uniform vec2 dir;", "void main() {", "vec4 sum = vec4(0.0);", "vec2 tc = outTexCoord;", "float blur = radius/resolution;", "float hstep = dir.x;", "float vstep = dir.y;", "sum += texture2D(u_texture, vec2(tc.x - 4.0*blur*hstep, tc.y - 4.0*blur*vstep)) * 0.0162162162;", "sum += texture2D(u_texture, vec2(tc.x - 3.0*blur*hstep, tc.y - 3.0*blur*vstep)) * 0.0540540541;", "sum += texture2D(u_texture, vec2(tc.x - 2.0*blur*hstep, tc.y - 2.0*blur*vstep)) * 0.1216216216;", "sum += texture2D(u_texture, vec2(tc.x - 1.0*blur*hstep, tc.y - 1.0*blur*vstep)) * 0.1945945946;", "sum += texture2D(u_texture, vec2(tc.x, tc.y)) * 0.2270270270;", "sum += texture2D(u_texture, vec2(tc.x + 1.0*blur*hstep, tc.y + 1.0*blur*vstep)) * 0.1945945946;", "sum += texture2D(u_texture, vec2(tc.x + 2.0*blur*hstep, tc.y + 2.0*blur*vstep)) * 0.1216216216;", "sum += texture2D(u_texture, vec2(tc.x + 3.0*blur*hstep, tc.y + 3.0*blur*vstep)) * 0.0540540541;", "sum += texture2D(u_texture, vec2(tc.x + 4.0*blur*hstep, tc.y + 4.0*blur*vstep)) * 0.0162162162;", "gl_FragColor =  vec4(sum.rgb, 1.0);", "}"].join("\n")
        })
    }
});

function InitFood() {
    var e, t, i, s;
    aGame.foodGroup = aGame.add.group();
    for (var a = 0; a < MAX_FOOD; a++) {
        e = Phaser.Math.RND.between(FOOD_SPAWN_OFFSET, ARENA_WIDTH - FOOD_SPAWN_OFFSET), t = Phaser.Math.RND.between(FOOD_SPAWN_OFFSET, ARENA_HEIGHT - FOOD_SPAWN_OFFSET), s = .6 + .1 * Phaser.Math.RND.between(0, 4), i = Phaser.Math.RND.between(0, FOOD_SKINS - 1);
        var n = new Food(aGame, e, t, FOOD_VALUE, i, s, !1);
        food.push(n), aGame.foodGroup.add(n.food)
    }
}

function Spawn_aFood() {
    var e, t, i, s;
    e = Phaser.Math.RND.between(FOOD_SPAWN_OFFSET, ARENA_WIDTH - FOOD_SPAWN_OFFSET), t = Phaser.Math.RND.between(FOOD_SPAWN_OFFSET, ARENA_HEIGHT - FOOD_SPAWN_OFFSET), s = .6 + .1 * Phaser.Math.RND.between(0, 4), i = Phaser.Math.RND.between(0, FOOD_SKINS - 1);
    var a = new Food(aGame, e, t, FOOD_VALUE, i, s, !1);
    food.push(a), aGame.foodGroup.add(a.food)
}

function RePool_aFood(e) {
    var t, i, s, a;
    t = Phaser.Math.RND.between(FOOD_SPAWN_OFFSET, ARENA_WIDTH - FOOD_SPAWN_OFFSET), i = Phaser.Math.RND.between(FOOD_SPAWN_OFFSET, ARENA_HEIGHT - FOOD_SPAWN_OFFSET), a = .6 + .1 * Phaser.Math.RND.between(0, 4), s = Phaser.Math.RND.between(0, FOOD_SKINS - 1), e.spawnX = t, e.spawnY = i, e.isEnabled = !0, e.isPicked = !1, e.pickedBy = null, e.sAnimAngle = Phaser.Math.RND.between(0, 360), e.mAnimAngle = Phaser.Math.RND.between(0, 360), e.mSeq = 1, e.mRad = Phaser.Math.RND.between(e.mMinRad, e.mMaxRad), e.food.setPosition(e.spawnX, e.spawnY), e.food.setTexture("food_" + s), e.scale = a, e.food.setScale(e.scale)
}

function Spawn_aLeftOver(e, t, i) {
    var s;
    s = (.6 + .1 * Phaser.Math.RND.between(0, 4)) * i, skin = Phaser.Math.RND.between(0, LEFTOVER_SKINS - 1);
    var a = new Food(aGame, e, t, LEFTOVER_VALUE, skin, s, !0);
    food.push(a), aGame.foodGroup.add(a.food)
}
var Food = new Phaser.Class({
        Extends: Phaser.Scene,
        initialize: function(e, t, i, s, a, n, h) {
            this.game = e, this.value = s, this.spawnX = t, this.spawnY = i, this.isLeftOver = h, this.isEnabled = !0, this.isPicked = !1, this.pickedBy = null, this.sAnimAngle = Phaser.Math.RND.between(0, 360), this.sAnimSpeed = .1, this.sMag = .25, this.pAnimSpeed = .001, this.tAnimSpeed = .004, this.mAnimSpeed = .1, this.mDRad = .01, this.mAnimAngle = Phaser.Math.RND.between(0, 360), this.mSeq = 1, this.mMaxRad = 20, this.mMinRad = 10, this.mRad = Phaser.Math.RND.between(this.mMinRad, this.mMaxRad), this.scale = n, this.isLeftOver ? (this.food = this.game.add.image(t, i, "leftover_" + a), isOnMobile || this.food.setBlendMode(Phaser.BlendModes.ADD)) : this.food = this.game.add.image(t, i, "food_" + a), this.food.setDepth(DEPTH_FOOD), this.food.setScale(this.scale), this.food.class = this
        },
        update: function(e) {
            if (this.isPicked) {
                if (0 < this.scale && (this.scale = this.scale - this.pAnimSpeed * e, this.food.setScale(this.scale), null != this.pickedBy && this.food.setPosition(Phaser.Math.Linear(this.food.x, this.pickedBy.x, this.tAnimSpeed * e), Phaser.Math.Linear(this.food.y, this.pickedBy.y, this.tAnimSpeed * e)), this.scale <= 0))
                    if (this.isLeftOver) {
                        this.food.destroy();
                        var t = food.indexOf(this); - 1 < t && food.splice(t, 1)
                    } else this.isEnabled = !1, RePool_aFood(this)
            } else isOnMobile || (this.sAnimAngle = this.sAnimAngle + this.sAnimSpeed * e, 360 <= this.sAnimAngle && (this.sAnimAngle = this.sAnimAngle - 360), this.food.setScale(this.scale + this.scale * this.sMag * Math.sin(Phaser.Math.DEG_TO_RAD * this.sAnimAngle)), this.mAnimAngle = this.mAnimAngle + this.mAnimSpeed * e, 360 <= this.mAnimAngle && (this.mAnimAngle = this.mAnimAngle - 360), this.food.setPosition(this.spawnX + this.mRad * Math.cos(Phaser.Math.DEG_TO_RAD * this.mAnimAngle), this.spawnY + this.mRad * Math.sin(Phaser.Math.DEG_TO_RAD * this.mAnimAngle)), 1 == this.mSeq && this.mRad < this.mMaxRad && (this.mRad = this.mRad + this.mDRad * e, this.mRad >= this.mMaxRad && (this.mSeq = 2)), 2 == this.mSeq && this.mRad > this.mMinRad && (this.mRad = this.mRad - this.mDRad * e, this.mRad <= this.mMinRad && (this.mSeq = 1)))
        },
        pick: function(e) {
            this.isPicked = !0, this.pickedBy = e, this.scale = this.food.scaleX, this.isLeftOver
        }
    }),
    Joystick = new Phaser.Class({
        Extends: Phaser.Scene,
        initialize: function(e, t, i, s, a, n) {
            this.game = e, this.scale = a, this.screen = t, this.frame = this.game.add.image(0, 0, i), this.frame.setScale(this.scale), this.frame.setOrigin(.5, .5), (this.frame.class = this).frame.setInteractive(), this.frame.on("pointerdown", this.onFrameClicked), this.handle = this.game.add.image(0, 0, s), this.handle.setScale(this.scale), this.handle.setOrigin(.5, .5), this.handle.setInteractive(), this.handle.on("pointerover", this.onPointerEnter), this.handle.on("pointerout", this.onPointerExit), this.handle.on("pointerdown", this.onClicked), this.handle.on("pointerup", this.onPointerUp), this.handle.isDragged = !1, this.handle.isEnabled = !0, this.handle.radius = n * this.scale, this.handle.screen = this.screen, this.handle.centerX = 0, this.handle.centerY = 0, this.handle.setDepth(this.frame.depth + 1), this.handle.scene = e, this.handle.pointerDown = -1
        },
        update: function(e) {
            if (0 <= this.handle.pointerDown) switch (this.handle.pointerDown) {
                case 0:
                    this.handle.scene.input.pointer1.isDown || this.onFocusLeft();
                    break;
                case 1:
                    this.handle.scene.input.pointer2.isDown || this.onFocusLeft()
            }
            if (this.handle.isDragged) {
                switch (this.handle.pX = 0, this.handle.pY = 0, this.handle.pointerDown) {
                    case 0:
                        this.handle.pX = this.handle.scene.input.pointer1.x, this.handle.pY = this.handle.scene.input.pointer1.y;
                        break;
                    case 1:
                        this.handle.pX = this.handle.scene.input.pointer2.x, this.handle.pY = this.handle.scene.input.pointer2.y;
                        break;
                    default:
                        this.handle.pX = this.handle.scene.input.pointer1.x, this.handle.pY = this.handle.scene.input.pointer1.y
                }
                this.handle.pX = this.handle.pX / DEFAULT_ZOOM - GameHudScene.zoomDX, this.handle.pY = this.handle.pY / DEFAULT_ZOOM - GameHudScene.zoomDY, this.handle.distance = Phaser.Math.Distance.Between(this.handle.centerX, this.handle.centerY, this.handle.pX, this.handle.pY), this.handle.distance = Phaser.Math.Clamp(this.handle.distance, 0, this.handle.radius), this.handle.deltaAngle = Phaser.Math.Angle.Between(this.handle.centerX, this.handle.centerY, this.handle.pX, this.handle.pY), this.handle.targetX = this.handle.centerX + this.handle.distance * Math.cos(this.handle.deltaAngle), this.handle.targetY = this.handle.centerY + this.handle.distance * Math.sin(this.handle.deltaAngle)
            }
            this.handle.setPosition(Phaser.Math.Linear(this.handle.x, this.handle.targetX, .025 * e), Phaser.Math.Linear(this.handle.y, this.handle.targetY, .025 * e))
        },
        onPointerEnter: function() {
            this.screen == gameScreen && (game.canvas.style.cursor = "pointer")
        },
        onPointerExit: function() {
            this.isEnabled && this.screen == gameScreen && (game.canvas.style.cursor = "default")
        },
        onClicked: function() {
            (this.isEnabled || this.screen == gameScreen) && (this.scene.input.pointer1.isDown && !this.scene.input.pointer2.isDown && (this.pointerDown = 0), this.scene.input.pointer2.isDown && !this.scene.input.pointer1.isDown && (this.pointerDown = 1), this.isDragged = !0)
        },
        onFrameClicked: function() {
            this.class.onClicked.bind(this.class.handle)()
        },
        onPointerUp: function(e) {},
        setPosition: function(e, t) {
            this.frame.setPosition(e, t), this.handle.centerX = e, this.handle.centerY = t, this.handle.targetX = this.handle.centerX, this.handle.targetY = this.handle.centerY, this.handle.setPosition(e, t)
        },
        onFocusLeft: function() {
            this.handle.isDragged = !1, this.handle.targetX = this.handle.centerX, this.handle.targetY = this.handle.centerY, this.handle.pointerDown = -1
        }
    }),
    BootScene = new Phaser.Scene("Boot");
BootScene.preload = function() {
    "use strict";
    this.load.baseURL = this.sys.game.baseURL, this.load.image("logo", "images/logo.png"), this.load.image("ui_bg", "images/ui_bg.png"), platform != PLATFORMS.GD && platform != PLATFORMS.WEB || (this.load.image("loading_bar", "images/loading_bar.png"), this.load.image("loading_frame", "images/loading_frame.png"))
}, BootScene.create = function() {
    "use strict";
    this.scene.start("Preload")
};
var PreloadScene = new Phaser.Scene("Preload");
PreloadScene.init = function() {}, PreloadScene.preload = function() {
    "use strict";
    this.bg = this.add.image(.5 * canvasWidth, .5 * canvasHeight, "ui_bg"), this.bg.setOrigin(.5, .5), this.bg.setSize(1280, 960), this.bg.displayWidth = canvasWidth / DEFAULT_ZOOM, this.bg.displayHeight = canvasHeight / DEFAULT_ZOOM, this.logo = this.add.image(.5 * canvasWidth, -zoomDY + 100 * uHeight, "logo"), this.logo.setOrigin(.5, 0), platform != PLATFORMS.GD && platform != PLATFORMS.WEB || (this.progressBox = this.add.image(.5 * canvasWidth, .5 * canvasHeight, "loading_frame"), this.progressBox.setOrigin(.5, 1), this.progressBar = this.add.image(.5 * canvasWidth, .5 * canvasHeight, "loading_bar"), this.progressBar.setOrigin(0, 1), this.loadingText = this.make.text({
        x: .5 * canvasWidth,
        y: .5 * canvasHeight,
        text: "ĐANG TẢI...",
        style: {
            font: "3em gamefont_regular",
            fill: "#ffffff"
        }
    }), this.loadingText.setOrigin(.5, 1)), Scale(window.innerWidth, window.innerHeight), this.load.baseURL = game.baseURL, this.load.image("background", "images/bg.png"), this.load.image("boundary", "images/arena_boundary.png"), this.load.image("head_detector", "images/snakes/head_detector.png");
    for (var e = 0; e < FOOD_SKINS; e++) this.load.image("food_" + e, "images/food/food_" + e + ".png");
    for (var t = 0; t < MAX_FACES; t++) this.load.image("face_" + t, "images/snakes/faces/face_" + t + ".png");
    for (var i = 0; i < MAX_BODIES; i++) this.load.image("body_" + i, "images/snakes/bodies/body_" + i + ".png"), this.load.image("body_" + i + "_glow", "images/snakes/bodies/body_" + i + "_glow.png");
    this.load.image("overlay", "images/ui/overlay.png"), this.load.image("loading_icon", "images/ui/loading_icon.png"), this.load.image("map_frame", "images/ui/map_frame.png"), this.load.image("lb_frame", "images/ui/lb_frame.png"), this.load.image("btn_play", "images/ui/button_play.png"), this.load.image("btn_skin", "images/ui/button_skin.png"), this.load.image("btn_next", "images/ui/button_next.png"), this.load.image("btn_share", "images/ui/fb_share.png"), this.load.image("btn_invite", "images/ui/fb_invite.png"), this.load.image("btn_lb", "images/ui/button_lb.png"), this.load.image("btn_challenge", "images/ui/fb_challenge.png"), this.load.image("btn_select", "images/ui/button_select.png"), this.load.image("btn_nose", "images/ui/nose.png"), this.load.image("btn_emojisnakes", "images/ui/emojisnakes.png"), this.load.image("btn_ad", "images/ui/add_button.png"), this.load.image("joystick_frame", "images/ui/joystick_frame.png"), this.load.image("joystick_handle", "images/ui/joystick_handle.png"), this.load.image("select_header", "images/ui/selection_header.png"), this.load.image("select_frame", "images/ui/selection_frame.png");
    for (var s = 0; s < LEFTOVER_SKINS; s++) this.load.image("leftover_" + s, "images/leftovers/leftover_" + s + ".png");
    var a = this;
    this.load.on("progress", function(e) {
        isFBInstSDKReady && updateFBProgress(100 * e), platform != PLATFORMS.GD && platform != PLATFORMS.WEB || (a.progressBar.displayWidth = PROGRESS_BAR_WIDTH * e)
    }), this.load.on("complete", function() {
        console.log("Loading Finished")
    })
}, PreloadScene.create = function() {
    game.scene.stop("Preload"), game.scene.start("Menu"), OnGameLoaded()
};
var MenuScene = new Phaser.Scene("Menu");
MenuScene.init = function() {}, MenuScene.preload = function() {
    document.getElementById("yourname").style.display = "block", -1 == mySkinNo && (mySkinNo = Phaser.Math.RND.between(0, MAX_FACES - 1)), this.bg = this.add.image(.5 * canvasWidth, .5 * canvasHeight, "ui_bg"), this.bg.setOrigin(.5, .5), this.bg.setSize(1280, 960), this.bg.displayWidth = canvasWidth / DEFAULT_ZOOM, this.bg.displayHeight = canvasHeight / DEFAULT_ZOOM, this.overlayBg = this.add.tileSprite(0, 0, canvasWidth, canvasHeight, "overlay").setOrigin(.5, .5), this.overlayBg.tint = "0x000000", this.overlayBg.alpha = 0, this.fade_tween = this.tweens.add({
        targets: this.overlayBg,
        alpha: 0,
        duration: 500,
        ease: "Power1",
        yoyo: !1,
        repeat: 0,
        paused: !0
    }), this.logo = this.add.image(.5 * canvasWidth, -zoomDY + 100 * uHeight, "logo"), this.logo.setOrigin(.5, 0), this.playButton = new Button(this, 0, SCREENS.MENU, "btn_play", .5 * canvasWidth, 500, 1), this.skinButton = new Button(this, 1, SCREENS.MENU, "btn_skin", .5 * canvasWidth, 600, 1), this.emojisnakes = new Button(this, 2, SCREENS.MENU, "btn_emojisnakes", .5 * canvasWidth, 500, 1), this.emojisnakes.Visible(!isOnSite), platform == PLATFORMS.FACEBOOK && (this.shareButton = new Button(this, 3, SCREENS.MENU, "btn_share", .5 * canvasWidth, 500, 1), this.lbButton = new Button(this, 5, SCREENS.MENU, "btn_lb", .5 * canvasWidth, 500, .85), this.challengeButton = new Button(this, 7, SCREENS.MENU, "btn_challenge", .5 * canvasWidth, 500, 1), this.scale_tween = this.tweens.add({
        targets: this.shareButton.sprite,
        alpha: .75,
        duration: 500,
        ease: "Power1",
        yoyo: !0,
        repeat: -1
    }), this.myLongestLengthText = this.add.text(0, 0, "Longest Length", {
        fontFamily: "gamefont_regular",
        fontSize: 32,
        color: "#fff",
        align: "center"
    }), this.myLongestLengthText.setOrigin(.5, .5), this.myLongestLengthText.alpha = .65, this.myLongestLength = this.add.text(0, 0, myLongestLength, {
        fontFamily: "gamefont_regular",
        fontSize: 60,
        color: "#fff",
        align: "center"
    }), this.myLongestLength.setOrigin(.5, .5), this.myLongestLength.alpha = 1), this.connecting = {}, this.connecting.bg = this.add.tileSprite(0, 0, canvasWidth, canvasHeight, "overlay").setOrigin(.5, .5), this.connecting.bg.tint = "0x000000", this.connecting.bg.alpha = .85, this.connecting.ctext = this.add.text(.5 * canvasWidth, .5 * canvasHeight, "ĐANG KẾT NỐI...", {
        fontFamily: "gamefont_regular",
        fontSize: 36,
        color: "#fff",
        align: "left",
        fontStyle: "italic"
    }).setOrigin(0, .5), this.connecting.ctext.alpha = .75, this.connecting.icon = this.add.image(.5 * canvasWidth, .5 * canvasHeight, "loading_icon").setOrigin(.5, .5), this.connecting.icon.setScale(.9, .9), this.connecting.ctext_atick = 0, this.connecting.ctext_dots = 0, MenuScene.Hide_ConnectionScreen(), this.selection = {}, this.selection.bg = this.add.tileSprite(0, 0, canvasWidth, canvasHeight, "overlay").setOrigin(.5, .5), this.selection.bg.tint = "0x000000", this.selection.bg.alpha = .85, this.selection.header = this.add.image(.5 * canvasWidth, .5 * canvasHeight, "select_header").setOrigin(.5, 0), this.selection.frame = this.add.image(.5 * canvasWidth, .5 * canvasHeight, "select_frame").setOrigin(.5, .5), this.selection.nextButton = new Button(this, 11, SCREENS.SELECTION, "btn_next", CANVAS_WIDTH - 125, .5 * canvasHeight, 1), this.selection.backButton = new Button(this, 12, SCREENS.SELECTION, "btn_next", 125, .5 * canvasHeight, -1), this.selection.selectButton = new Button(this, 10, SCREENS.SELECTION, "btn_select", 0, 0, 1), MenuScene.Hide_SelectionScreen(), gameScreen = SCREENS.MENU, Scale(window.innerWidth, window.innerHeight), MenuScene.cameras.main.once("camerafadeoutcomplete", function(e) {
        game.scene.stop("Menu"), game.scene.start("Game"), game.scene.start("GameHud")
    }), this.input.on("pointerdown", function() {
        var e = document.getElementById("yourname");
        e === document.activeElement && e.blur()
    }, this)
}, MenuScene.create = function() {
    fromGameOverScreen && (fromGameOverScreen = !1, this.overlayBg.alpha = 1, this.fade_tween.resume()), null == base64Picture && (base64Picture = game.canvas.toDataURL("png"))
}, MenuScene.update = function(e, t) {
    if (gameScreen == SCREENS.CONNECTING && (this.connecting.ctext_atick = this.connecting.ctext_atick + t, this.connecting.icon.angle = this.connecting.icon.angle + .1 * t, 200 <= this.connecting.ctext_atick)) {
        this.connecting.ctext_atick = this.connecting.ctext_atick - 200, this.connecting.ctext_dots++, 5 <= this.connecting.ctext_dots && (this.connecting.ctext_dots = 1), this.connecting.ctext.text = "ĐANG KẾT NỐI ";
        for (var i = 0; i < this.connecting.ctext_dots; i++) this.connecting.ctext.text = this.connecting.ctext.text + "."
    }
    gameScreen == SCREENS.SELECTION && selectSnake.update(t)
}, MenuScene.Show_ConnectionScreen = function() {
    gameScreen = SCREENS.CONNECTING, document.getElementById("yourname").style.display = "none", this.playButton.Disable(), this.skinButton.Disable(), this.connecting.bg.visible = !0, this.connecting.ctext.visible = !0, this.connecting.icon.visible = !0, setTimeout(ProceedToGame, 1e3 + 100 * Phaser.Math.RND.between(0, 10))
}, MenuScene.Hide_ConnectionScreen = function() {
    this.connecting.bg.visible = !1, this.connecting.ctext.visible = !1, this.connecting.icon.visible = !1
}, MenuScene.Show_SelectionScreen = function() {
    gameScreen = SCREENS.SELECTION, document.getElementById("yourname").style.display = "none", this.playButton.Disable(), this.skinButton.Disable(), this.selection.bg.visible = !0, this.selection.header.visible = !0, this.selection.frame.visible = !0, this.selection.nextButton.Visible(!0), this.selection.backButton.Visible(!0), this.selection.selectButton.Visible(!0), selectSnake = new SelectionSnake(MenuScene, .5 * canvasWidth + 150, .5 * canvasHeight, mySkinNo, 30)
}, MenuScene.Hide_SelectionScreen = function() {
    switch (platform) {
        case PLATFORMS.WEB:
        case PLATFORMS.GD:
            document.getElementById("yourname").style.display = "block";
            break;
        case PLATFORMS.FACEBOOK:
            document.getElementById("yourname").style.display = "none"
    }
    this.selection.bg.visible = !1, this.selection.header.visible = !1, this.selection.frame.visible = !1, this.selection.nextButton.Visible(!1), this.selection.backButton.Visible(!1), this.selection.selectButton.Visible(!1)
};
var GameScene = new Phaser.Scene("Game");
GameScene.preload = function() {}, GameScene.create = function() {
    aGame = this, cam = aGame.cameras.main, this.touchDT = 0, StartGame(), this.doubleTapActive = !1, isOnMobile || this.input.on("pointermove", function(e) {
        pointerX = e.x / canvasWidth * scaledWidth, pointerY = e.y / canvasHeight * scaledHeight
    }, this), this.input.on("pointerdown", function() {
        isOnMobile ? (console.log(this.touchDT), this.touchDT <= 500 && (this.doubleTapActive = !0), this.touchDT = 0) : isGameStarted && player.boost()
    }, this), this.input.on("pointerup", function() {
        isOnMobile ? (isGameStarted && player.normal(), this.doubleTapActive = !1) : isGameStarted && player.normal()
    }, this)
}, GameScene.update = function(e, t) {
    if (this.touchDT = this.touchDT + t, scrolluX = (cam.scrollX - zoomDX) / scrollXRange, scrolluY = (cam.scrollY - zoomDY) / scrollYRange, isGameStarted && (snakes.forEach(function(e) {
            e.update(t)
        }), foodTick++, 1 == foodTick && (food.forEach(function(e) {
            e.update(1.25 * t)
        }), foodTick = 0)), isDebugging && (Phaser.Input.Keyboard.JustDown(this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)) && player.changeFace(1), Phaser.Input.Keyboard.JustDown(this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)) && player.changeFace(-1)), isOnMobile) {
        switch (boostPointerID) {
            case 0:
                this.input.pointer1.isDown || (isBoostPressed = !1, boostPointerID = -1, GameHudScene.nose.sprite.setScale(GameHudScene.nose.sprite.scale));
                break;
            case 1:
                this.input.pointer2.isDown || (isBoostPressed = !1, boostPointerID = -1, GameHudScene.nose.sprite.setScale(GameHudScene.nose.sprite.scale))
        }
        if (isGameStarted && (player.isDead || (isBoostPressed ? player.boost() : player.normal())), isJoystickEnabled) return;
        if ((this.input.pointer1.isDown || this.input.pointer2.isDown) && (-1 == touchID && (0 == boostPointerID ? this.input.pointer2.isDown && (touchID = 1) : this.input.pointer1.isDown && (touchID = 0)), 0 == touchID && (this.input.pointer1.isDown || (touchID = -1)), 1 == touchID && (this.input.pointer2.isDown || (touchID = -1)), 0 <= touchID)) switch (touchID) {
            case 0:
            case 1:
            default:
                pointerX = this.input.pointer1.x / canvasWidth * scaledWidth, pointerY = this.input.pointer1.y / canvasHeight * scaledHeight
        }
    }
};
var GameHudScene = new Phaser.Scene("GameHud");
GameHudScene.preload = function() {}, GameHudScene.create = function() {
    this.input.addPointer(1), this.gameover = {}, this.gameover.bg = this.add.tileSprite(0, 0, canvasWidth, canvasHeight, "overlay").setOrigin(.5, .5), this.gameover.bg.tint = "0x000000", this.gameover.bg.alpha = .85, this.gameover.title = this.add.text(0, 0, "THUA RỒI", {
        fontFamily: "gamefont_regular",
        fontSize: 104,
        color: "#ffe383",
        align: "center"
    }), this.gameover.title.setOrigin(.5, .5), this.gameover.detail = this.add.text(0, 0, "ĐỪNG ĐÂM VÀO NHỮNG CON RẮN SĂN MỒI KHÁC", {
        fontFamily: "gamefont_regular",
        fontSize: 48,
        color: "#fff",
        align: "center"
    }), this.gameover.detail.setOrigin(.5, .5), this.gameover.detail.alpha = .75, this.resume = {}, this.resume.adButton = new Button(this, 1, SCREENS.GAMEPLAY, "btn_ad", .5 * canvasWidth, 500, 1), this.resume.inviteButton = new Button(this, 2, SCREENS.GAMEPLAY, "btn_invite", .5 * canvasWidth, 500, 1), this.resume.timerText = this.add.text(0, 0, "Watch Ad", {
        fontFamily: "gamefont_regular",
        fontSize: 50,
        color: "#fff",
        align: "center"
    }), this.resume.timerText.setOrigin(.5, .5), this.resume.isActive = !1, this.resume.tc = 0, this.resume.time = RESUME_TIME, this.map = this.add.sprite(200, 200, "map_frame"), this.map.setOrigin(0, 0), this.nose = new Button(this, 0, SCREENS.GAMEPLAY, "btn_nose", .5 * canvasWidth, 500, 1), this.nose.Visible(isOnMobile), this.headertext = this.add.text(0, 0, "CHIỀU DÀI", {
        fontFamily: "gamefont_regular",
        fontSize: 90,
        color: "#ffe383",
        align: "center"
    }), this.headertext.setOrigin(.5, .5), this.headertext.alpha = 0, this.lengthtext = this.add.text(0, 0, "25", {
        fontFamily: "gamefont_regular",
        fontSize: 160,
        color: "#fff",
        align: "center"
    }), this.lengthtext.setOrigin(.5, .5), this.lengthtext.alpha = 0, this.HideResume(), this.Hide_GameOverScreen(), this.gameover.scale_tween = this.tweens.add({
        targets: [this.gameover.title, this.gameover.detail],
        scaleX: 1,
        scaleY: 1,
        duration: 200,
        ease: "Power1",
        yoyo: !1,
        repeat: 0,
        paused: !0
    }), this.gameover.fade_tween = this.tweens.add({
        targets: this.gameover.bg,
        alpha: .75,
        duration: 2e3,
        ease: "Power1",
        yoyo: !1,
        repeat: 0,
        paused: !0
    }), this.input.on("pointerup", function() {
        this.nose.sprite.isPressed && this.nose.onPointerReleased()
    }, this), PrepareHud(this), gameScreen = SCREENS.GAMEPLAY, Scale(window.innerWidth, window.innerHeight)
}, GameHudScene.update = function(e, t) {
    isOnMobile && this.joystick.update(t), this.resume.isActive && (this.resume.tc = this.resume.tc + t, 1e3 <= this.resume.tc && (this.resume.tc = this.resume.tc - 1e3, this.resume.timerText.text = "Game will end in " + this.resume.time + " seconds", this.resume.time = this.resume.time - 1, this.resume.time < 0 && this.onResumeTimeEnded()))
}, GameHudScene.Hide_GameOverScreen = function() {
    this.gameover.bg.visible = !1, this.gameover.title.visible = !1, this.gameover.detail.visible = !1
}, GameHudScene.Show_GameOverScreen = function() {
    this.gameover.bg.visible = !0, this.gameover.title.visible = !0, this.gameover.detail.visible = !0, this.gameover.bg.alpha = .2, this.gameover.title.setScale(1.5, 1.5), this.gameover.detail.setScale(1.5, 1.5), this.gameover.scale_tween.isPlaying() || this.gameover.scale_tween.resume(), this.gameover.fade_tween.isPlaying() || this.gameover.fade_tween.resume()
}, GameHudScene.ShowResume = function(e) {
    e ? (this.resume.adButton.Visible(!0), this.resume.inviteButton.Visible(!1)) : (this.resume.adButton.Visible(!1), this.resume.inviteButton.Visible(!0)), this.resume.isActive = !0, this.resume.tc = 0, this.resume.time = RESUME_TIME, this.resume.timerText.text = "Game will end in " + this.resume.time + " seconds", this.resume.timerText.visible = !0
}, GameHudScene.HideResume = function() {
    this.resume.adButton.Visible(!1), this.resume.inviteButton.Visible(!1), this.resume.timerText.visible = !1
}, GameHudScene.onResumeTimePaused = function() {
    this.resume.isActive = !1
}, GameHudScene.onResumeTimeResumed = function() {
    this.resume.isActive = !0
}, GameHudScene.onResumeTimeEnded = function() {
    this.resume.isActive = !1, isGameStarted = !1, GameHudScene.cameras.main.fadeOut(500, 0, 0, 0), setTimeout(GameOver, 500)
};
var Snake = new Phaser.Class({
        Extends: Phaser.Scene,
        initialize: function(e, t, i, s, a, n, h, o) {
            this.game = e, this.body = this.game.add.group(), this.skinNo = FACE_BODY_INDEX[n], this.isMe = s, this.no = a, this.name = o, this.strength = h, this.clampStrength = Phaser.Math.Clamp(this.strength, MIN_STRENGTH, MAX_STRENGTH), this.deltaStrength = 0, this.isDead = !1, this.isBoosting = !1, this.scale = MIN_SCALE + (this.clampStrength - MIN_STRENGTH) * factorScale, isDebugging && (this.graphics = this.game.add.graphics(), this.line = new Phaser.Geom.Line(260, 200, 450, 450)), this.head = this.game.add.image(t, i, "body_" + this.skinNo), this.head.setDepth(DEPTH_HEAD), this.head.setOrigin(.5, .5), this.head.setScale(this.scale), this.head.snakeNo = a, this.gap = SANKE_PIXEL_SIZE * GAP_FACTOR * this.scale, this.head.isDead = !1, this.faceNo = n, this.face = this.game.add.image(t, i, "face_" + this.faceNo), this.face.setOrigin(.5, .5), this.face.setScale(this.scale), this.face.setDepth(DEPTH_HEAD), this.face.isDead = !1, this.vfxDeadAlpha = 1, this.mapIcon = new MapIcon(GameHudScene, a, this.skinNo, this.faceNo, s), this.moveSpeed = NORMAL_SPEED, this.steerSpeed = MIN_STEER_SPEED, this.preObject, this.targetAngle = 0, this.moveAngle = 0, this.czoom = 1, this.tzoom = 0, this.zoom = MIN_ZOOM + (this.clampStrength - MIN_STRENGTH) * factorZoom, this.boostVfxCounter = 5, this.boostVfxStep = 10, this.boostVfxTh = 10, this.boostVfxTick = 0, this.boostVfxColors = [], this.nameoY = 20, this.nameText = this.game.add.text(t, i + SNAKE_WIDTH * this.scale * .5 + this.nameoY, this.name, {
                fontFamily: "gamefont_regular",
                fontSize: 32,
                color: "#fff"
            }), this.nameText.setOrigin(.5, 0), this.nameText.alpha = .5, this.nameText.setScale(.5 + (this.scale - MIN_SCALE) / (MAX_SCALE - MIN_SCALE) * .5), this.collisionTick = 10, this.minDistance = -1, this.collisionDistance = -1, this.nearestObject, this.AI_STATE = "FREE", this.aI_tick = 10, this.aI_updatetick = 20, this.aI_food = null, this.aI_range = AI_MIN_RANGE + (this.clampStrength - MIN_STRENGTH) * factorRange, this.amIVeryClose = !1, this.attackAngle = 0, this.isReady = !0, this.readyTc = 0, this.isMe && (this.isReady = !1, this.readyTc = 2e3), this.foodTick = 0;
            for (var c = hexToRgb(BOOST_VFX_BRIGHT_COLOR), r = hexToRgb(BOOST_VFX_DIM_COLOR), l = (c.r - r.r) / (.5 * this.boostVfxStep), d = (c.g - r.g) / (.5 * this.boostVfxStep), g = (c.b - r.b) / (.5 * this.boostVfxStep), m = 0; m < this.boostVfxStep; m++) {
                var S, u, _;
                m <= .5 * this.boostVfxStep ? (S = l * m, u = d * m, _ = g * m, m) : (S = (this.boostVfxStep - m) * l, u = (this.boostVfxStep - m) * d, _ = (this.boostVfxStep - m) * g), this.boostVfxColors[m] = rgbToHex(parseInt(c.r - S), parseInt(c.g - u), parseInt(c.b - _))
            }
            for (var p = 0; p < h; p++) {
                var E = t - this.gap * (p + 1) * .5,
                    f = i,
                    A = (this.scale - (1 - BODY_SCALE_REDUCTION) * this.scale) / h;
                A *= p;
                var b = this.body.create(E, f, "body_" + this.skinNo);
                b.setOrigin(.5, .5), b.setScale(this.scale - A), b.no = p, b.snakeNo = this.no, b.setDepth(DEPTH_CHILD - p), b.isDead = !1, b.no % CHILD_COLLISION_GAP == 0 && this.game.snakeBodies.add(b), b.pinObject = 0 == p ? this.head : this.preObject, b.pinDistance = this.gap, this.preObject = b
            }
            this.isMe && cam.startFollow(this.head, !1, CAMERA_LERP, CAMERA_LERP)
        },
        update: function(e) {
            if (this.isReady || (this.readyTc = this.readyTc - e, this.readyTc <= 0 && (this.isReady = !0)), this.isDead) {
                var t = this;
                if (this.vfxDeadAlpha = this.vfxDeadAlpha - .002 * e, this.head.alpha = this.vfxDeadAlpha, this.face.alpha = this.vfxDeadAlpha, this.body.children.each(function(e) {
                        e.alpha = t.vfxDeadAlpha
                    }), this.isMe && isZooming && (zoomSinAngle += .5 * e, cam.zoom = Phaser.Math.Linear(z0, z1, Math.sin(zoomSinAngle * Phaser.Math.DEG_TO_RAD)), 90 <= zoomSinAngle && (isZooming = !1, this.czoom = this.tzoom, cam.zoom = z1), UpdateZoomParams(cam.zoom)), this.vfxDeadAlpha <= 0) {
                    this.isMe && setTimeout(function() {
                        ProceedToGameEnd()
                    }, 1e3), this.head.destroy(), this.face.destroy(), this.body.children.each(function(e) {
                        e.destroy()
                    });
                    var i = snakes.indexOf(this); - 1 < i && snakes.splice(i, 1)
                }
            } else {
                if (this.isMe && (isOnMobile ? GameHudScene.joystick.handle.isDragged && (this.targetAngle = GameHudScene.joystick.handle.deltaAngle) : this.targetAngle = Phaser.Math.Angle.Between(this.head.x, this.head.y, pointerX + scrolluX * scrollXRange, pointerY + scrolluY * scrollYRange), isZooming || .1 <= .01 * Math.ceil(100 * Math.abs(this.czoom - this.zoom)) && (z0 = this.czoom * DEFAULT_ZOOM, this.czoom > this.zoom && (this.tzoom = this.czoom - .1), this.czoom < this.zoom && (this.tzoom = this.czoom + .1), z1 = this.tzoom * DEFAULT_ZOOM, ZoomScene()), isZooming && (zoomSinAngle += zoomMag * e, cam.zoom = Phaser.Math.Linear(z0, z1, Math.sin(zoomSinAngle * Phaser.Math.DEG_TO_RAD)), 90 <= zoomSinAngle && (isZooming = !1, this.czoom = this.tzoom, cam.zoom = z1), UpdateZoomParams(cam.zoom))), this.moveHead(e), this.moveBody(e), this.updateCollision(e), this.updateFoodCollision(e), this.isMe || this.updateAI(e), this.isBoosting) {
                    if (this.deltaStrength = this.deltaStrength - BOOST_CONSUMPTION * e, this.deltaStrength < 0 && this.removeChild(), this.strength <= MIN_STRENGTH) return void this.normal();
                    this.moveSpeed < BOOST_SPEED && (this.moveSpeed = this.moveSpeed + BOOST_ACC * e, this.moveSpeed >= BOOST_SPEED && (this.moveSpeed = BOOST_SPEED), this.steerSpeed = MIN_STEER_SPEED + (this.moveSpeed - NORMAL_SPEED) * factorSteer), isOnMobile || (this.boostVfxTick = this.boostVfxTick + e, this.boostVfxTick >= this.boostVfxTh && (this.boostVfxTick = this.boostVfxTick - this.boostVfxTh, this.updateBoostVFX(e)))
                }
                this.isBoosting || this.moveSpeed > NORMAL_SPEED && (this.moveSpeed = this.moveSpeed - BOOST_DEACC * e, this.moveSpeed <= NORMAL_SPEED && (this.moveSpeed = NORMAL_SPEED), this.steerSpeed = MIN_STEER_SPEED + (this.moveSpeed - NORMAL_SPEED) * factorSteer), this.steerSpeed = Phaser.Math.Clamp(.5 * this.moveSpeed, MIN_STEER_SPEED, MAX_STEER_SPEED)
            }
        },
        kill: function() {
            var t = this.scale;
            this.isDead = !0, this.head.isDead = !0, this.face.isDead = !0, this.nameText.destroy(), this.mapIcon.icon.destroy(), this.mapIcon.face.destroy(), this.mapIcon = null, Spawn_aLeftOver(this.head.x, this.head.y, t), this.body.children.each(function(e) {
                e.isDead = !0, e.no % KILL_LEFT_OVER_GAP == 0 && Spawn_aLeftOver(e.x, e.y, t)
            }), this.isMe ? (this.zoom = 2, z0 = this.czoom * DEFAULT_ZOOM, z1 = this.zoom * DEFAULT_ZOOM, ZoomScene(), myLastStrength = this.strength, myDeathPosX = this.head.x, myDeathPosY = this.head.y, setTimeout(captureScreenShot, 250), GameHudScene.headertext.alpha = 1, GameHudScene.lengthtext.alpha = 1, GameHudScene.lengthtext.text = this.strength) : setTimeout(RebornSnake, 1e3 + 100 * Phaser.Math.RND.between(0, 10))
        },
        moveHead: function(e) {
            this.boundaryUpdate(), this.moveAngle = Phaser.Math.Angle.RotateTo(Phaser.Math.DEG_TO_RAD * this.head.angle, this.targetAngle, this.steerSpeed * e), this.head.angle = Phaser.Math.RAD_TO_DEG * this.moveAngle, this.head.setPosition(this.head.x + this.moveSpeed * Math.cos(this.moveAngle) * e, this.head.y + this.moveSpeed * Math.sin(this.moveAngle) * e), this.mapIcon.update(this.head.x, this.head.y), this.nameText.setPosition(this.head.x, this.head.y + SNAKE_WIDTH * this.scale * .5 + this.nameoY), isDebugging ? this.nameText.setText(["AISTATE <" + this.AI_STATE + ">", "tooClose " + this.amIVeryClose, "aAngle " + parseInt(this.attackAngle), "minDist" + parseInt(this.minDistance)]) : this.nameText.setText = this.name, this.nameText.setDepth(1e4), snakesHeadX[this.no] = this.head.x, snakesHeadY[this.no] = this.head.y, this.face.setPosition(this.head.x, this.head.y), this.face.angle = this.head.angle - 90
        },
        boundaryUpdate: function() {
            (this.head.x < BOUNDARY_HEIGHT || this.head.x > ARENA_WIDTH - BOUNDARY_HEIGHT || this.head.y < BOUNDARY_HEIGHT || this.head.y > ARENA_HEIGHT - BOUNDARY_HEIGHT) && (this.targetAngle = Phaser.Math.Angle.Between(this.head.x, this.head.y, .5 * ARENA_WIDTH, .5 * ARENA_HEIGHT))
        },
        moveBody: function(e) {
            var i, s = this;
            this.body.children.each(function(e) {
                Phaser.Math.Distance.Between(e.pinObject.x, e.pinObject.y, e.x, e.y) > e.pinDistance && (i = Phaser.Math.Angle.Between(e.pinObject.x, e.pinObject.y, e.x, e.y), e.setPosition(e.pinObject.x + Math.cos(i) * e.pinDistance, e.pinObject.y + Math.sin(i) * e.pinDistance), e.angle = i * Phaser.Math.RAD_TO_DEG + 180);
                if (s.isBoosting) {
                    var t = (e.no + s.boostVfxCounter) % s.boostVfxStep;
                    isOnMobile || (e.tint = s.boostVfxColors[t])
                }
            })
        },
        boost: function() {
            if (!(this.isDead || this.isBoosting || this.strength <= MIN_STRENGTH)) {
                var t = this;
                this.isBoosting = !0, isOnMobile || this.head.setBlendMode(Phaser.BlendModes.ADD), this.head.setTexture("body_" + this.skinNo + "_glow"), this.head.setOrigin(.5, .5), this.body.children.each(function(e) {
                    isOnMobile || (e.alpha = BOOST_ALPHA, e.setBlendMode(Phaser.BlendModes.ADD)), e.setTexture("body_" + t.skinNo + "_glow")
                })
            }
        },
        normal: function() {
            if (!this.isDead && this.isBoosting) {
                var t = this;
                this.isBoosting = !1, this.head.setTexture("body_" + this.skinNo), isOnMobile || this.head.setBlendMode(Phaser.BlendModes.NORMAL), this.body.children.each(function(e) {
                    isOnMobile || (e.setBlendMode(Phaser.BlendModes.NORMAL), e.alpha = 1, e.tint = "0xFFFFFF"), e.setTexture("body_" + t.skinNo)
                })
            }
        },
        updateBoostVFX: function(e) {
            this.boostVfxCounter--, this.boostVfxCounter < 0 && (this.boostVfxCounter = this.boostVfxCounter + this.boostVfxStep)
        },
        addStrength: function(e) {
            for (this.deltaStrength = this.deltaStrength + 1 * e; 1 <= this.deltaStrength;) this.deltaStrength = this.deltaStrength - 1, this.addChild()
        },
        addChild: function() {
            if (!(this.isDead || (this.strength++, this.clampStrength = Phaser.Math.Clamp(this.strength, MIN_STRENGTH, MAX_STRENGTH), this.isMe && platform == PLATFORMS.FACEBOOK && null != entryData && this.strength > parseInt(entryData.score) && (document.getElementById("name").style.textDecoration = "line-through"), this.strength >= MAX_STRENGTH))) {
                var e = this.body.children.entries[this.body.children.entries.length - 1],
                    t = e.x,
                    i = e.y,
                    s = (this.scale - (1 - BODY_SCALE_REDUCTION) * this.scale) / this.strength;
                s *= this.strength;
                var a = this.body.create(t, i, "body_" + this.skinNo);
                a.setOrigin(.5, .5), a.setScale(this.scale - s), a.no = this.strength - 1, a.snakeNo = this.no, a.setDepth(DEPTH_CHILD - a.no), a.isDead = !1, a.pinObject = e, a.pinDistance = Phaser.Math.Distance.Between(a.pinObject.x, a.pinObject.y, a.x, a.y), a.no % CHILD_COLLISION_GAP == 0 && this.game.snakeBodies.add(a), this.isBoosting && (isOnMobile || (a.setBlendMode(Phaser.BlendModes.ADD), a.alpha = BOOST_ALPHA), a.setTexture("body_" + this.skinNo + "_glow")), this.updateScale()
            }
        },
        removeChild: function() {
            if (this.deltaStrength = this.deltaStrength + 1, this.strength--, this.clampStrength = Phaser.Math.Clamp(this.strength, MIN_STRENGTH, MAX_STRENGTH), !(this.strength >= MAX_STRENGTH)) {
                var e = this.body.children.entries[this.body.children.entries.length - 1];
                this.body.children.entries.splice(-1, 1), e.destroy(), this.updateScale()
            }
        },
        updateScale: function() {
            var t, i = this;
            this.scale = MIN_SCALE + (this.clampStrength - MIN_STRENGTH) * factorScale, this.zoom = MIN_ZOOM + (this.clampStrength - MIN_STRENGTH) * factorZoom, this.head.setScale(this.scale), this.gap = SANKE_PIXEL_SIZE * GAP_FACTOR * this.scale, this.nameText.setScale(.5 + (this.scale - MIN_SCALE) / (MAX_SCALE - MIN_SCALE) * .5), this.face.setScale(this.scale), this.body.children.each(function(e) {
                t = (i.scale - (1 - BODY_SCALE_REDUCTION) * i.scale) / i.clampStrength, t *= e.no, e.setScale(i.scale - t), e.pinDistance = i.gap
            })
        },
        updateCollision: function(e) {
            if (this.collisionTick = this.collisionTick - e, !(0 < this.collisionTick)) {
                var t, i = this;
                this.collisionTick = this.collisionTick + 50 + 5 * Phaser.Math.RND.between(0, 10), this.nearestObject = null, this.minDistance = 1e6, aGame.snakeBodies.children.each(function(e) {
                    e.snakeNo == i.no || e.isDead || (t = Phaser.Math.Distance.Between(i.head.x, i.head.y, e.x, e.y)) < i.minDistance && (i.minDistance = t, i.nearestObject = e)
                }), aGame.snakeHeads.children.each(function(e) {
                    e.snakeNo == i.no || e.isDead || (t = Phaser.Math.Distance.Between(i.head.x, i.head.y, e.x, e.y)) < i.minDistance && (i.minDistance = t, i.nearestObject = e)
                }), null != this.nearestObject && (this.collisionDistance = (this.scale + this.nearestObject.scaleX) * SNAKE_WIDTH * .5), this.amIVeryClose = !1, this.minDistance <= 2 * this.collisionDistance && (this.amIVeryClose = !0), this.minDistance < .85 * this.collisionDistance && !this.isDead && this.isReady && this.kill()
            }
        },
        updateFoodCollision: function(e) {
            if (this.foodTick = this.foodTick - e, !(0 < this.foodTick)) {
                var t = this;
                this.foodTick = this.foodTick + 50 + 5 * Phaser.Math.RND.between(0, 10), this.foodMinDistance = 1e6;
                var i, s = this.scale * DETECTOR_WIDTH * .5;
                t.isDead || (null != this.aI_food && this.aI_food.class.isPicked && (this.aI_food = null), aGame.foodGroup.children.each(function(e) {
                    i = Phaser.Math.Distance.Between(t.head.x, t.head.y, e.x, e.y), e.class.isPicked || (i <= s + .5 * e.displayWidth && (t.addStrength(e.class.value), e.class.pick(t.head)), null == this.aI_food && i < t.foodMinDistance && (t.foodMinDistance = i, t.aI_food = e, !0))
                }), this.isMe || "FREE" == this.AI_STATE && null != this.aI_food && (this.targetAngle = Phaser.Math.Angle.Between(this.head.x, this.head.y, this.aI_food.x, this.aI_food.y)))
            }
        },
        updateAI: function(e) {
            if (isDebugging && (this.graphics.clear(), this.graphics.fillStyle(16777215), this.graphics.lineStyle(2, 65280)), this.aI_tick = this.aI_tick - e, this.aI_updatetick = this.aI_updatetick - e, this.aI_updatetick < 0 && (this.aI_updatetick = this.aI_updatetick + 100 + 10 * Phaser.Math.RND.between(0, 10), this.updateAIState(e)), !(0 < this.aI_tick)) {
                this.aI_tick = this.aI_tick + 50 + 5 * Phaser.Math.RND.between(0, 10);
                switch (this.AI_STATE) {
                    case "FREE":
                        if (this.isBoosting && this.normal(), null == this.aI_food) return;
                        this.targetAngle = Phaser.Math.Angle.Between(this.head.x, this.head.y, this.aI_food.x, this.aI_food.y);
                        break;
                    case "AVOID":
                        this.aIFindOppositeAngle(e);
                        break;
                    case "ESCAPE":
                        this.aIFindOppositeAngle(e), this.isBoosting || this.boost();
                        break;
                    case "APPROACH":
                        this.aIFindAppraochAngle(e), this.isBoosting && this.normal();
                        break;
                    case "ATTACK":
                        this.aIFindAttackAngle(e), this.isBoosting || this.boost()
                }
            }
        },
        updateAIState: function(e) {
            var t;
            switch (this.minDistance < 4 * this.collisionDistance ? this.strength < MIN_STRENGTH + 10 ? (t = Phaser.Math.RND.between(0, 4)) <= 3 && this.strength > MIN_STRENGTH ? this.AI_STATE = "AVOID" : this.AI_STATE = "ESCAPE" : this.strength >= MIN_STRENGTH + 10 && this.strength < MAX_STRENGTH - 10 ? this.amIVeryClose ? (t = Phaser.Math.RND.between(0, 5)) <= 2 && this.strength < 70 ? this.AI_STATE = "ESCAPE" : t <= 2 && 70 <= this.strength ? this.AI_STATE = "AVOID" : 2 < t && t < 5 && this.strength < 70 ? this.AI_STATE = "AVOID" : this.AI_STATE = "ATTACK" : (t = Phaser.Math.RND.between(0, 5)) <= 2 && this.strength < 50 ? this.AI_STATE = "ESCAPE" : 3 == t && 50 <= this.strength ? this.AI_STATE = "ATTACK" : this.AI_STATE = "AVOID" : this.amIVeryClose ? this.AI_STATE = "ATTACK" : (t = Phaser.Math.RND.between(0, 5), this.AI_STATE = t <= 3 ? "AVOID" : "ATTACK") : this.minDistance < this.aI_range ? this.strength < MIN_STRENGTH + 10 ? (t = Phaser.Math.RND.between(0, 5)) <= 3 && this.strength > MIN_STRENGTH + 10 ? this.AI_STATE = "FREE" : this.AI_STATE = "AVOID" : this.strength >= MIN_STRENGTH + 10 && this.strength < MAX_STRENGTH - 40 ? (t = Phaser.Math.RND.between(0, 5)) <= 3 && 50 < this.strength ? this.AI_STATE = "APPROACH" : this.AI_STATE = "AVOID" : (t = Phaser.Math.RND.between(0, 5), this.AI_STATE = t <= 3 ? "APPROACH" : "AVOID") : this.AI_STATE = "FREE", this.AI_STATE) {
                case "ATTACK":
                    this.aI_updatetick = this.aI_updatetick + 3e3;
                    break;
                case "AVOID":
                    this.aI_updatetick = this.aI_updatetick + 1e3;
                    break;
                case "ESCAPE":
                    this.aI_updatetick = this.aI_updatetick + 2e3;
                    break;
                case "APPROACH":
                    this.aI_updatetick = this.aI_updatetick + 250
            }
        },
        aIFindOppositeAngle: function(e) {
            tAngle = Phaser.Math.Angle.Between(this.head.x, this.head.y, this.nearestObject.x, this.nearestObject.y) * Phaser.Math.RAD_TO_DEG + (160 + Phaser.Math.RND.between(0, 40)), 180 < tAngle && (tAngle -= 360), mAngle = this.head.angle;
            var t = tAngle - mAngle;
            t += 180 < t ? -360 : t < -180 ? 360 : 0, Math.abs(t) < 50 || (this.targetAngle = tAngle * Phaser.Math.DEG_TO_RAD, 180 < this.targetAngle * Phaser.Math.RAD_TO_DEG && (this.targetAngle = this.targetAngle - 360 * Phaser.Math.DEG_TO_RAD))
        },
        aIFindAttackAngle: function(e) {
            5 < this.collisionTick && (this.collisionTick = 5), 5 < this.aI_tick && (this.aI_tick = 5);
            var t = 90;
            this.minDistance <= this.collisionDistance + 60 && (t = 125), this.minDistance > this.collisionDistance + 350 && (t = 0), this.targetAngle = Phaser.Math.Angle.Between(this.head.x, this.head.y, this.nearestObject.x, this.nearestObject.y) + t * Phaser.Math.DEG_TO_RAD, isDebugging && (this.attackAngle = this.targetAngle * Phaser.Math.RAD_TO_DEG, this.line.x1 = this.head.x, this.line.y1 = this.head.y, this.line.x2 = this.line.x1 + 300 * Math.cos(this.targetAngle), this.line.y2 = this.line.y1 + 300 * Math.sin(this.targetAngle), this.graphics.strokeLineShape(this.line)), 180 < this.targetAngle * Phaser.Math.RAD_TO_DEG && (this.targetAngle = this.targetAngle - 360 * Phaser.Math.DEG_TO_RAD), this.targetAngle * Phaser.Math.RAD_TO_DEG < -180 && (this.targetAngle = this.targetAngle + 360 * Phaser.Math.DEG_TO_RAD)
        },
        aIFindAppraochAngle: function(e) {
            this.targetAngle = Phaser.Math.Angle.Between(this.head.x, this.head.y, this.nearestObject.x, this.nearestObject.y) + 45 * Phaser.Math.DEG_TO_RAD, 180 < this.targetAngle * Phaser.Math.RAD_TO_DEG && (this.targetAngle = this.targetAngle - 360 * Phaser.Math.DEG_TO_RAD)
        },
        changeFace: function(e) {
            var t = this;
            this.faceNo = this.faceNo + e, this.faceNo < 0 && (this.faceNo = this.faceNo + MAX_FACES), this.faceNo >= MAX_FACES && (this.faceNo = this.faceNo - MAX_FACES), this.face.setTexture("face_" + this.faceNo), this.skinNo = FACE_BODY_INDEX[this.faceNo], this.head.setTexture("body_" + this.skinNo), this.body.children.each(function(e) {
                e.setTexture("body_" + t.skinNo)
            })
        }
    }),
    SelectionSnake = new Phaser.Class({
        Extends: Phaser.Scene,
        initialize: function(e, t, i, s, a) {
            this.game = e, this.strength = a, this.faceNo = s, this.skinNo = FACE_BODY_INDEX[s], this.clampStrength = Phaser.Math.Clamp(this.strength, MIN_STRENGTH, MAX_STRENGTH), this.scale = MIN_SCALE + (this.clampStrength - MIN_STRENGTH) * factorScale, this.head = this.game.add.image(t, i, "body_" + this.skinNo), this.head.cX = t, this.head.cY = i, this.head.setDepth(DEPTH_HEAD), this.head.setOrigin(.5, .5), this.head.setScale(this.scale), this.face = this.game.add.image(t, i, "face_" + this.faceNo), this.face.setOrigin(.5, .5), this.face.setScale(this.scale), this.face.setDepth(DEPTH_HEAD), this.face.angle = -90, this.gap = SANKE_PIXEL_SIZE * GAP_FACTOR * this.scale, this.sineMag = 25, this.CYCLE_PER_STRENGTH = 30, this.body = this.game.add.group();
            for (var n = 0; n < a; n++) {
                var h = t - this.gap * (n + 1),
                    o = i,
                    c = (this.scale - (1 - BODY_SCALE_REDUCTION) * this.scale) / a;
                c *= n + 1;
                var r, l, d = this.sineMag / (.5 * this.CYCLE_PER_STRENGTH),
                    g = n % this.CYCLE_PER_STRENGTH,
                    m = 180 / (.5 * this.CYCLE_PER_STRENGTH),
                    S = this.body.create(h, o, "body_" + this.skinNo);
                S.bodyNo = n, S.cX = h, S.cY = o, S.setOrigin(.5, .5), S.setScale(this.scale - c), S.setDepth(DEPTH_CHILD - n), g <= .5 * this.CYCLE_PER_STRENGTH ? (r = d * g, l = m * g) : (r = (this.CYCLE_PER_STRENGTH - g) * d, l = (this.CYCLE_PER_STRENGTH - g) * m, l = m * g, r = d * g), S.sineMag = r, S.sineAngle = l
            }
        },
        update: function(t) {
            this.body.children.each(function(e) {
                e.sineAngle = e.sineAngle - .25 * t, e.sineAngle <= 0 && (e.sineAngle = e.sineAngle + 360), e.setPosition(e.cX, e.cY + e.sineMag * Math.sin(Phaser.Math.DEG_TO_RAD * e.sineAngle))
            })
        },
        reposition: function(s, a) {
            this.head.cX = s, this.head.cY = a, this.head.setPosition(this.head.cX, this.head.cY), this.face.setPosition(this.head.x, this.head.y);
            var n = this;
            this.body.children.each(function(e) {
                var t = s - n.gap * (e.bodyNo + 1),
                    i = a;
                e.cX = t, e.cY = i
            })
        },
        destroy: function() {
            this.head.destroy(), this.face.destroy(), this.body.children.each(function(e) {
                e.destroy()
            })
        },
        changeSkin: function(e) {
            var t = this;
            this.faceNo = e, this.face.setTexture("face_" + this.faceNo), this.skinNo = FACE_BODY_INDEX[this.faceNo], this.head.setTexture("body_" + this.skinNo), this.body.children.each(function(e) {
                e.setTexture("body_" + t.skinNo)
            })
        }
    }),
    MAP_WIDTH = 250,
    MAP_HEIGHT = 250,
    MAP_OFFSET = 20,
    PROGRESS_FRAME_WIDTH = 400,
    PROGRESS_FRAME_HEIGHT = 50,
    PROGRESS_BAR_WIDTH = 384,
    PROGRESS_BAR_HEIGHT = 34,
    mapUX = 0,
    mapUY = 0,
    LB_FRAME_WIDTH = 223,
    LB_FRAME_HEIGHT = 340,
    LB_xOFFSET = 15,
    LB_yOFFSET = 20,
    LB_SIZE = 10,
    lbNames = [],
    lbRanks = [],
    lbScore = [],
    LB_FRESH_INTERVAL = .5,
    BUTTON_CLICK_SCALE = .95,
    isBoostPressed = !1,
    ignoreThisInput = !1,
    boostPointerID = -1;

function PrepareHud(e) {
    InitLeaderboard(e), isOnMobile && (e.joystick = new Joystick(e, SCREENS.GAMEPLAY, "joystick_frame", "joystick_handle", 1, 75))
}

function InitLeaderboard(e) {
    e.leaderboard = e.add.sprite(0, 0, "lb_frame"), e.leaderboard.setOrigin(1, 0);
    for (var t = 0; t <= LB_SIZE; t++) t < LB_SIZE && (lbRanks[t] = e.add.text(0, 0, t + 1 + "-", {
        fontFamily: "gamefont_regular",
        fontSize: 22,
        color: "#ffe383",
        align: "center"
    }), lbNames[t] = e.add.text(0, 0, "---------", {
        fontFamily: "gamefont_regular",
        fontSize: 18,
        color: "#fff",
        align: "left"
    }), lbScore[t] = e.add.text(0, 0, "--", {
        fontFamily: "gamefont_regular",
        fontSize: 20,
        color: "#53bcff",
        align: "right"
    })), t == LB_SIZE && (lbRanks[t] = e.add.text(0, 0, "you", {
        fontFamily: "gamefont_regular",
        fontSize: 16,
        color: "#fff",
        align: "center"
    }), lbNames[t] = e.add.text(0, 0, "---------", {
        fontFamily: "gamefont_regular",
        fontSize: 18,
        color: "#fff",
        align: "left"
    }), lbScore[t] = e.add.text(0, 0, "--", {
        fontFamily: "gamefont_regular",
        fontSize: 20,
        color: "#fff",
        align: "right"
    })), lbRanks[t].setOrigin(.5, .5), lbRanks[t].alpha = .75, lbNames[t].setOrigin(0, .5), lbNames[t].alpha = 1, lbScore[t].setOrigin(1, .5)
}

function UpdateLBPosition(e) {
    var t = e.leaderboard.x - LB_FRAME_WIDTH,
        i = e.leaderboard.y + 88;
    GameHudScene.leaderboard.setPosition(canvasWidth + GameHudScene.zoomDX - Phaser.Math.Clamp(uWidth, 0, 1) * LB_xOFFSET, Phaser.Math.Clamp(uHeight, 0, 1) * LB_yOFFSET - GameHudScene.zoomDY);
    for (var s = 0; s <= LB_SIZE; s++) s < LB_SIZE && (lbRanks[s].setPosition(t + 27, i + 26 * s), lbNames[s].setPosition(t + 48, i + 26 * s), lbScore[s].setPosition(t + 200, i + 26 * s)), s == LB_SIZE && (lbRanks[s].setPosition(t + 27, i - 32), lbNames[s].setPosition(t + 48, i - 32), lbScore[s].setPosition(t + 200, i - 32))
}

function UpdateLeaderboard() {
    var t = [];
    if (isGameStarted) {
        var i = 0;
        if (snakes.forEach(function(e) {
                e.isSorted = !1, t[i] = [e.strength, e.name], i++
            }), t.sort(sortFunction), t.length < LB_SIZE)
            for (var e = t.length; e < LB_SIZE; e++) t[e] = ["--", "---------"];
        for (var s = 0; s <= LB_SIZE; s++) {
            if (s < LB_SIZE) {
                var a = "";
                "--" != t[s][0] && (a = "g"), lbNames[s].text = t[s][1], lbScore[s].text = t[s][0] + a
            }
            s == LB_SIZE && (lbNames[s].text = player.name, lbScore[s].text = player.strength + "g")
        }
    }
}
var Button = new Phaser.Class({
        Extends: Phaser.Scene,
        initialize: function(e, t, i, s, a, n, h) {
            this.game = e, this.id = t, this.scale = h, this.sprite = this.game.add.image(a, n, s), this.sprite.setInteractive(), this.sprite.on("pointerover", this.onPointerEnter), this.sprite.on("pointerout", this.onPointerExit), this.sprite.on("pointerdown", this.onClicked), this.sprite.on("pointerup", this.onPointerUp), this.sprite.setScale(this.scale, this.scale), this.sprite.id = t, this.sprite.screen = i, this.sprite.scale = h, this.sprite.setOrigin(.5, .5), this.sprite.isPressed = !1, this.sprite.posX = a, this.sprite.posY = n, this.sprite.isEnabled = !0
        },
        onPointerEnter: function() {
            this.isEnabled && this.screen == gameScreen && (game.canvas.style.cursor = "pointer", this.tint = "0xd3d3d3")
        },
        onPointerExit: function() {
            this.isEnabled && this.screen == gameScreen && (game.canvas.style.cursor = "default", this.tint = "0xFFFFFF")
        },
        onClicked: function() {
            (this.isEnabled || this.screen == gameScreen) && (this.setScale(this.scale * BUTTON_CLICK_SCALE), this.isPressed = !0, this.screen == SCREENS.GAMEPLAY && 0 == this.id && (console.log("Boost Pressed"), isBoostPressed = !0, boostPointerID = -1 == GameHudScene.joystick.handle.pointerDown ? 0 : 0 == GameHudScene.joystick.handle.pointerDown ? 1 : (GameHudScene.joystick.handle.pointerDown, 0)))
        },
        onPointerUp: function(e) {
            if (this.isEnabled && this.screen == gameScreen) switch (console.log(this.screen + "<>" + this.id), this.setScale(this.scale), this.isPressed = !1, gameScreen) {
                case SCREENS.MENU:
                    switch (this.id) {
                        case 0:
                            if (console.log("Play Button"), gameScreen = SCREENS.DEFAULT, isOnline()) {
                                switch (platform) {
                                    case PLATFORMS.WEB:
                                        MenuScene.Show_ConnectionScreen();
                                        break;
                                    case PLATFORMS.GD:
                                        gameScreen = 100, MenuScene.connecting.bg.visible = !0, document.getElementById("yourname").style.display = "none", ShowAds();
                                        break;
                                    case PLATFORMS.FACEBOOK:
                                        MenuScene.Show_ConnectionScreen()
                                }
                                game.canvas.style.cursor = "default"
                            }
                            break;
                        case 1:
                            console.log("Skin Button"), MenuScene.Show_SelectionScreen();
                            break;
                        case 2:
                            window.open("https://gamevui.vn/slitherio-2/game");
                            break;
                        case 3:
                            ShareOnFacebook("Hey, My snake was " + myLastStrength + " units longer in last game, Anyone who can beat my score?");
                            break;
                        case 4:
                            grabChallengeImage();
                            break;
                        case 5:
                            getFBLeaderboard();
                            break;
                        case 7:
                            grabChallengeImage();
                            break;
                        case 8:
                            InviteOnFacebook("Hey, My snake was " + myLastStrength + " units longer in last game, Anyone who can beat my score?", "REQUEST")
                    }
                    break;
                case SCREENS.SELECTION:
                    switch (this.id) {
                        case 10:
                            console.log("Select Button"), game.canvas.style.cursor = "default", MenuScene.Hide_SelectionScreen(), selectSnake.destroy(), gameScreen = SCREENS.MENU, MenuScene.playButton.Enable(), MenuScene.skinButton.Enable();
                            break;
                        case 11:
                            MAX_FACES <= ++mySkinNo && (mySkinNo -= MAX_FACES), selectSnake.changeSkin(mySkinNo);
                            break;
                        case 12:
                            --mySkinNo < 0 && (mySkinNo += MAX_FACES), selectSnake.changeSkin(mySkinNo)
                    }
                    break;
                case SCREENS.GAMEPLAY:
                    switch (this.id) {
                        case 0:
                            isBoostPressed = !1, boostPointerID = -1;
                            break;
                        case 1:
                            GameHudScene.onResumeTimePaused(), showFBRewardedVideoAd();
                            break;
                        case 2:
                            GameHudScene.onResumeTimePaused(), grabInviteImage()
                    }
            }
        },
        onPointerReleased: function() {
            if (this.sprite.isEnabled && this.screen == gameScreen) switch (this.sprite.setScale(this.sprite.scale), this.sprite.isPressed = !1, gameScreen) {
                case SCREENS.MENU:
                case SCREENS.SELECTION:
                    this.id;
                    break;
                case SCREENS.GAMEPLAY:
                    switch (this.id) {
                        case 0:
                            isBoostPressed = !1, boostPointerID = -1;
                            break;
                        case 1:
                        case 2:
                            GameHudScene.onResumeTimePaused()
                    }
            }
        },
        Enable: function() {
            this.sprite.isEnabled = !0
        },
        Disable: function() {
            this.sprite.isEnabled = !1
        },
        Visible: function(e) {
            this.sprite.visible = e
        },
        setPosition: function(e, t) {
            this.sprite.setPosition(e, t)
        }
    }),
    MapIcon = new Phaser.Class({
        Extends: Phaser.Scene,
        initialize: function(e, t, i, s, a) {
            this.game = e, this.icon, a ? (this.icon = this.game.add.image(200, 200, "body_" + i + "_glow"), this.icon.setScale(.3, .3), this.icon.alpha = .85, this.icon.setDepth(2)) : (this.icon = this.game.add.image(200, 200, "body_" + i), this.icon.setScale(.25, .25), this.icon.alpha = .75, this.icon.setDepth(1)), this.face = this.game.add.image(200, 200, "face_" + s), this.face.setScale(this.icon.scaleX, this.icon.scaleY), this.face.setDepth(this.icon.depth), this.icon.angle = 270
        },
        update: function(e, t) {
            this.icon.setPosition(this.game.map.x + e * mapUX, this.game.map.y + t * mapUY), this.face.setPosition(this.icon.x, this.icon.y)
        }
    });