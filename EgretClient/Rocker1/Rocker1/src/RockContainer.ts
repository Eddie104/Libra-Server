/**
 *
 * @author 
 *
 */
class RockContainer extends egret.DisplayObjectContainer{
    
    private _socket: Socket;
    
    public constructor(private _ip: string, private _port: number) {
        super();
        var stage: egret.Stage = egret.MainContext.instance.stage;
        var cx = stage.stageWidth / 2;
        var cy = stage.stageHeight / 2;
        
        var okBtn: Btn = new Btn("ok");
        this.addChild(okBtn);        
        okBtn.addEventListener("clicked", this.onOKClicked, this);
        okBtn.x = cx - (330 >> 1) + 366;
        okBtn.y = cy - (182 >> 1) + 115;
        
        var backBtn: Btn = new Btn("back");
        this.addChild(backBtn);
        backBtn.addEventListener("clicked", this.onBackClicked, this);
        backBtn.x = cx - (207 >> 1) + 486;
        backBtn.y = cy - (223 >> 1) - 163;
        
        var menuBtn: Btn = new Btn("menu");
        this.addChild(menuBtn);
        menuBtn.addEventListener("clicked", this.onMenuClicked, this);
        menuBtn.x = cx - (207 >> 1) + 219;
        menuBtn.y = cy - (223 >> 1) - 163;
        
        var rightBtn: Btn = new Btn("right");
        this.addChild(rightBtn);
        rightBtn.addEventListener("clicked", this.onRightClicked, this);
        rightBtn.x = cx - (207 >> 1) - 41;
        rightBtn.y = cy - (223 >> 1) - 8;
        
        var downBtn: Btn = new Btn("down");
        this.addChild(downBtn);
        downBtn.addEventListener("clicked", this.onDownClicked, this);
        downBtn.x = cx - (207 >> 1) - 292;
        downBtn.y = cy - (223 >> 1) + 137;
        
        var leftBtn: Btn = new Btn("left");
        this.addChild(leftBtn);
        leftBtn.addEventListener("clicked", this.onLeftClicked, this);
        leftBtn.x = cx - (207 >> 1) - 538;
        leftBtn.y = cy - (223 >> 1) - 8;
        
        var upBtn: Btn = new Btn("up");
        this.addChild(upBtn);
        upBtn.addEventListener("clicked", this.onUpClicked, this);
        upBtn.x = cx - (207 >> 1) - 292;
        upBtn.y = cy - (223 >> 1) - 163;
	}
	
    private onOKClicked(evt:egret.Event){
        this.send("ok");
    }
    
    private onBackClicked(evt:egret.Event){
        this.send("back");
    }
    
    private onMenuClicked(evt:egret.Event){
        this.send("menu");
    }
    
    private onRightClicked(evt:egret.Event){
        this.send("right");
    }
    
    private onDownClicked(evt:egret.Event){
        this.send("down");
    }
    
    private onLeftClicked(evt:egret.Event){
        this.send("left");
    }
    
    private onUpClicked(evt:egret.Event){
        this.send("up");
    }
    
    private send(msg:string){
        if(!this._socket) {
            this.tryConnect();
        } else {
            this._socket.send(msg);
        }
    }
    
    private tryConnect() {
        this._socket = new Socket();
//        console.log("开始连接,ip:" + this._ip + ", port:" + this._port);
        this._socket.connect(this._ip, this._port);
    }
}
