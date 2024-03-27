import {Drawable} from "./Drawable";
import {IAnimatable} from "../Types/IAnimatable";
import {settings} from "../settings";

export class Birdie extends Drawable implements IAnimatable {
    private step: number;
    private x: number;
    private y: number;
    private maxAnimationStep: number;
    private fallSpeed: number;
    private frameCounter: number;

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, sprite: HTMLImageElement) {
        super(canvas, ctx, sprite);
        this.step = 0;
        this.x = canvas.width / settings.birdie.fractionX;
        this.y = canvas.height / settings.birdie.fractionY;
        this.maxAnimationStep = settings.birdie.frames.length - 1;
        this.fallSpeed = 0;
        this.frameCounter = 0;
    }

    draw(): void {
        this.ctx.drawImage(
            this.sprite,
            settings.birdie.frames[this.step].sx,
            settings.birdie.frames[this.step].sy,
            settings.birdie.width,
            settings.birdie.height,
            this.x,
            this.y,
            settings.birdie.width,
            settings.birdie.height,
        )
    }

    update(): void {
        this.frameCounter++;
        if (this.frameCounter >= settings.birdie.maxFrameInterval) {
            this.frameCounter = 0;
            if (++this.step > this.maxAnimationStep) {
                this.step = 0
            }
        }

    }
}