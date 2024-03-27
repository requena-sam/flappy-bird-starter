import {Drawable} from "./Drawable";
import {IAnimatable} from "../Types/IAnimatable";

export class Birdie extends Drawable implements IAnimatable {

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, sprite: HTMLImageElement) {
        super(canvas, ctx, sprite);
    }

    draw(): void {
    }

    update(): void {
    }
}