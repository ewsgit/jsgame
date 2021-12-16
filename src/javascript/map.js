import { ctx } from "./index.js";
var map = /** @class */ (function () {
    function map() {
        this.map = this.generateMap();
    }
    map.prototype.generateMap = function () {
        var map = new Array();
        for (var i = 0; i < 10; i++) {
            map[i] = new Array();
            for (var j = 0; j < 10; j++) {
                map[i][j] = Math.floor(Math.random() * 2);
            }
        }
        return map;
    };
    map.prototype.render = function () {
        ctx.fillStyle = "#888888";
        for (var i = 0; i < 10; i++) {
            for (var j = 0; j < 10; j++) {
                if (this.map[i][j] === 1) {
                    ctx.fillRect(i * 16, j * 16, 16, 16);
                }
            }
        }
    };
    return map;
}());
export default map;
