import {settings} from "./settings";
import {Background} from "./Background";
import {Ground} from "./Ground";

const flappyBird = {
    init() {
        this.canvas = document.getElementById(settings.canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.sprite = new Image();
        this.sprite.src = settings.spriteSrc;
        this.background = new Background(this.ctx, this.sprite);
        this.ground = new Ground(this.ctx, this.sprite, this.canvas);
        this.addEventListeners();
    },
    addEventListeners() {
        this.sprite.addEventListener('load', () => {
            this.background.draw();
            this.ground.draw();
        });
    }
}
flappyBird.init();