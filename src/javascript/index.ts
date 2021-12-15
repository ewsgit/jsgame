import player from "./player.js";
import map from "./map.js";

export const canvas = <HTMLCanvasElement>document.getElementById("gameCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
export const ctx = canvas.getContext("2d");

window.addEventListener(
    "resize",
    e => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
);

class Game {
    player: player;
    map: map;
    constructor() {
        this.player = new player();
        this.map = new map();
        this.map.generateMap();
    }
    tick() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.player.tick();
        this.map.render();
        this.player.render();
        requestAnimationFrame(this.tick.bind(this));
    }
}

var game = new Game();
requestAnimationFrame(game.tick.bind(game));