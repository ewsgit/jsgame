import { ctx, canvas } from "./index.js";

export default class map {
    constructor() {}
    generateMap() {}
    render() {
        ctx.fillStyle = "#00FF00";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}
