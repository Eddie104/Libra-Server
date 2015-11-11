/**
 *
 * @author
 *
 */
var RockContainer = (function (_super) {
    __extends(RockContainer, _super);
    function RockContainer(_ip, _port) {
        _super.call(this);
        this._ip = _ip;
        this._port = _port;
        var stage = egret.MainContext.instance.stage;
        var cx = stage.stageWidth / 2;
        var cy = stage.stageHeight / 2;
        var okBtn = new Btn("ok");
        this.addChild(okBtn);
        okBtn.addEventListener("clicked", this.onOKClicked, this);
        okBtn.x = cx - (330 >> 1) + 366;
        okBtn.y = cy - (182 >> 1) + 115;
        var backBtn = new Btn("back");
        this.addChild(backBtn);
        backBtn.addEventListener("clicked", this.onBackClicked, this);
        backBtn.x = cx - (207 >> 1) + 486;
        backBtn.y = cy - (223 >> 1) - 163;
        var menuBtn = new Btn("menu");
        this.addChild(menuBtn);
        menuBtn.addEventListener("clicked", this.onMenuClicked, this);
        menuBtn.x = cx - (207 >> 1) + 219;
        menuBtn.y = cy - (223 >> 1) - 163;
        var rightBtn = new Btn("right");
        this.addChild(rightBtn);
        rightBtn.addEventListener("clicked", this.onRightClicked, this);
        rightBtn.x = cx - (207 >> 1) - 41;
        rightBtn.y = cy - (223 >> 1) - 8;
        var downBtn = new Btn("down");
        this.addChild(downBtn);
        downBtn.addEventListener("clicked", this.onDownClicked, this);
        downBtn.x = cx - (207 >> 1) - 292;
        downBtn.y = cy - (223 >> 1) + 137;
        var leftBtn = new Btn("left");
        this.addChild(leftBtn);
        leftBtn.addEventListener("clicked", this.onLeftClicked, this);
        leftBtn.x = cx - (207 >> 1) - 538;
        leftBtn.y = cy - (223 >> 1) - 8;
        var upBtn = new Btn("up");
        this.addChild(upBtn);
        upBtn.addEventListener("clicked", this.onUpClicked, this);
        upBtn.x = cx - (207 >> 1) - 292;
        upBtn.y = cy - (223 >> 1) - 163;
    }
    var d = __define,c=RockContainer;p=c.prototype;
    p.onOKClicked = function (evt) {
        this.send("ok");
    };
    p.onBackClicked = function (evt) {
        this.send("back");
    };
    p.onMenuClicked = function (evt) {
        this.send("menu");
    };
    p.onRightClicked = function (evt) {
        this.send("right");
    };
    p.onDownClicked = function (evt) {
        this.send("down");
    };
    p.onLeftClicked = function (evt) {
        this.send("left");
    };
    p.onUpClicked = function (evt) {
        this.send("up");
    };
    p.send = function (msg) {
        if (!this._socket) {
            this.tryConnect();
        }
        else {
            this._socket.send(msg);
        }
    };
    p.tryConnect = function () {
        this._socket = new Socket();
        //        console.log("开始连接,ip:" + this._ip + ", port:" + this._port);
        this._socket.connect(this._ip, this._port);
    };
    return RockContainer;
})(egret.DisplayObjectContainer);
egret.registerClass(RockContainer,"RockContainer");
