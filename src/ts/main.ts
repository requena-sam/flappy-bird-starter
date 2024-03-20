import {Background} from "./Background";
const canvas = document.getElementById('game') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const sprite = new Image();
sprite.src = 'src/resources/sprite.png';
const background = new Background(ctx,canvas,sprite);

sprite.addEventListener('load',()=>{
    background.draw();
})
