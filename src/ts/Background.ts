import {settings} from "./settings";

export class Background {
    private ctx: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;
    private sprite: HTMLImageElement;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, sprite: HTMLImageElement) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.sprite = sprite;
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