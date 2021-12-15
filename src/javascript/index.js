import player from "./player.js";
import map from "./map.js";
export var canvas = document.getElementById("gameCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
export var ctx = canvas.getContext("2d");
window.addEventListener("resize", function (e) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
var Game = /** @class */ (function () {
    function Game() {
        this.player = new player();
        this.map = new map();
        this.map.generateMap();
    }
    Game.prototype.tick = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.player.tick();
        this.map.render();
        this.player.render();
        requestAnimationFrame(this.tick.bind(this));
    };
    return Game;
}());
var game = new Game();
requestAnimationFrame(game.tick.bind(game));
