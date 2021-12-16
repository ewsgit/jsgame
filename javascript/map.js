import { ctx, canvas } from "./index.js";
var map = /** @class */ (function () {
    function map() {
        this.width = Math.floor(canvas.width / 16);
        this.height = Math.floor(canvas.height / 16);
        this.map = this.generateMap();
        this.tiles = {};
    }
    map.prototype.generateMap = function () {
        var map = [];
        for (var i = 0; i < this.height; i++) {
            map[i] = [];
            for (var j = 0; j < this.width; j++) {
                console.log(Math.floor(Math.random() * 2));
                switch (Math.floor(Math.random() * 4)) {
                    case 0:
                        map[i][j] = "./assets/tile1.png";
                        break;
                    case 1:
                        map[i][j] = "./assets/tile2.png";
                        break;
                    case 2:
                        map[i][j] = "./assets/tile3.png";
                        break;
                    case 3:
                        map[i][j] = "./assets/tile4.png";
                        break;
                }
            }
        }
        return map;
    };
    map.prototype.render = function () {
        for (var i = 0; i < this.height; i++) {
            for (var j = 0; j < this.width; j++) {
                if (this.tiles[this.map[i][j]]) {
                    ctx.drawImage(this.tiles[this.map[i][j]], j * 16, i * 16);
                }
                else {
                    this.tiles[this.map[i][j]] = new Image();
                    console.log(this.map[i][j]);
                    this.tiles[this.map[i][j]].src = this.map[i][j];
                }
            }
        }
    };
    return map;
}());
export default map;
