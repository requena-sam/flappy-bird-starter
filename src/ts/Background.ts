import {settings} from "./settings";
import {Drawable} from "./Drawable";
import {IDrawable} from "./Types/IDrawable";

export class Background extends Drawable implements IDrawable {
    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, sprite: HTMLImageElement) {
        super(ctx, canvas, sprite);
    }

    draw() {
        this.ctx.drawImage(
            this.sprite,
            settings.background.frame.sx,
            settings.background.frame.sy,
            settings.background.frame.sw,
            settings.background.frame.sh,
            settings.background.frame.dx,
            settings.background.frame.dy,
            settings.background.frame.dw,
            settings.background.frame.dh,
        );
    }
}