import {Background} from "./Background";
import {Ground} from "./Ground";
import {Drawable} from "./Drawable";
import {IDrawable} from "./Types/IDrawable";

const canvas = document.getElementById('game') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const sprite = new Image();
sprite.src = 'src/resources/sprite.png';
const drawables: IDrawable[] = [
    new Background(ctx, canvas, sprite),
    new Ground(ctx, canvas, sprite)
];

sprite.addEventListener('load', () => {
    drawables.forEach((drawable) => {
        drawable.draw();
    })
});
