import { ctx, canvas } from "./index.js";
var map = /** @class */ (function () {
    function map() {
    }
    map.prototype.generateMap = function () { };
    map.prototype.render = function () {
        ctx.fillStyle = "#888888";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
    return map;
}());
export default map;
