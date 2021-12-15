import { pressedKeys } from "./controls.js";
import {ctx} from "./index.js";
export default class player {
    x: number;
    y: number;
    width: number;
    height: number;
    speed: number;
    direction: string;
    moving: boolean;
    maxSpeed: number;
    acceleration: number;
    deacceleration: number;
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = 32;
        this.height = 32;
        this.speed = 5;
        this.maxSpeed = 5;
        this.acceleration = 0.1;
        this.deacceleration = 0.1;
        this.direction = "down";
        this.moving = false;
    }
    tick() {
		if (this.direction === "up") {
            this.y -= this.speed;
        } else if (this.direction === "down") {
            this.y += this.speed;
        } else if (this.direction === "left") {
            this.x -= this.speed;
        } else if (this.direction === "right") {
            this.x += this.speed;
        }
		if (pressedKeys.indexOf("w") !== -1) {
			this.direction = "up";
			this.moving = true;
			if (this.speed < this.maxSpeed) {
                this.speed += this.acceleration;
            }
		}
		if (pressedKeys.indexOf("a") !== -1) {
			this.direction = "left";
			this.moving = true;
			if (this.speed < this.maxSpeed) {
                this.speed += this.acceleration;
            }
		}
		if (pressedKeys.indexOf("s") !== -1) {
			this.direction = "down";
			this.moving = true;
			if (this.speed < this.maxSpeed) {
                this.speed += this.acceleration;
            }
		}
		if (pressedKeys.indexOf("d") !== -1) {
			this.direction = "right";
			this.moving = true;
			if (this.speed < this.maxSpeed) {
				this.speed += this.acceleration;
			}
		}
		if (pressedKeys.indexOf("w") === -1 && pressedKeys.indexOf("a") === -1 && pressedKeys.indexOf("s") === -1 && pressedKeys.indexOf("d") === -1) {
			this.moving = false;
			this.direction = "none"
			if (this.speed > 0) {
				this.speed -= this.deacceleration;
			}
			if (this.speed < 0) {
				this.speed = 0;
			}
		}
	}
    render() {
        ctx.fillStyle = "#003300";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}