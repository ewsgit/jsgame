import { ctx, canvas } from "./index.js";

export default class map {
	map: Array<Array<number>>;
    constructor() {
		this.map = this.generateMap()
	}
    generateMap() {
		let map = new Array<Array<number>>();
		for (let i = 0; i < 10; i++) {
			map[i] = new Array<number>();
			for (let j = 0; j < 10; j++) {
				map[i][j] = Math.floor(Math.random() * 2);
			}
		}
		return map;
	}
    render() {
        ctx.fillStyle = "#888888";
        for (let i = 0; i < 10; i++) {
			for (let j = 0; j < 10; j++) {
				if (this.map[i][j] === 1) {
					ctx.fillRect(i * 16, j * 16, 16, 16);
				}
			}
		}
    }
}
