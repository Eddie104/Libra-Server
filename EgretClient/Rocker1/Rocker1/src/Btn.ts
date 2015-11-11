/**
 *
 * @author 
 *
 */
class Btn extends egret.DisplayObjectContainer {

    private _bmd: egret.Bitmap;

    public constructor(resName: string) {
        super();
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnded, this);
        this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchReleasedOutside, this);

        this._bmd = new egret.Bitmap(RES.getRes(resName));
        this.addChild(this._bmd);
    }

    private onTouchBegan(evt: egret.TouchEvent) {
//        this._bmd.texture = RES.getRes("btn_down");
    }

    private onTouchEnded(evt: egret.TouchEvent) {
//        this._bmd.texture = RES.getRes("btn_normal");
        this.dispatchEvent(new egret.Event("clicked"));
    }

    private onTouchReleasedOutside(evt: egret.TouchEvent) {
//        this._bmd.texture = RES.getRes("btn_normal");
    }
}
