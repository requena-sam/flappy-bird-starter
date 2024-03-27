import {Background} from "./Drawables/Background";
import {Ground} from "./Drawables/Ground";
import {IAnimatable} from "./Types/IAnimatable";
import {TubesPair} from "./Drawables/TubesPair";
import {TubesPaires} from "./Drawables/TubesPaires";
import {Birdie} from "./Drawables/Birdie";

const canvas = document.getElementById('game') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

const sprite = new Image();
sprite.src = 'src/resources/sprite.png';

const drawables: IAnimatable[] = [
    new Background(canvas, ctx, sprite),
    new TubesPaires(canvas, ctx, sprite),
    new Ground(canvas, ctx, sprite),
    new Birdie(canvas, ctx, sprite),
];

function animate() {
    drawables.forEach((drawable) => {
        drawable.draw();
        drawable.update();
    });

    window.requestAnimationFrame(animate);
}

sprite.addEventListener('load', () => {
    animate();
});