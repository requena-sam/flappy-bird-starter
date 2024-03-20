import {settings} from "./settings";
import {Drawable} from "./Drawable";

export class Background extends Drawable {
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