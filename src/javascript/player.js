import { pressedKeys } from "./controls.js";
import { canvas, ctx } from "./index.js";
var player = /** @class */ (function () {
    function player() {
        this.x = 0;
        this.y = 0;
        this.width = 16;
        this.height = 16;
        this.speed = 0;
        this.maxSpeed = 15;
        this.acceleration = 0.1;
        this.deacceleration = 0.1;
        this.direction = "down";
        this.moving = false;
        this.texture = new Image();
        this.texture.src = "./player.png";
        this.texture.width = this.width;
        this.texture.height = this.height;
    }
    player.prototype.tick = function () {
        if (this.direction === "up") {
            this.y -= this.speed;
        }
        else if (this.direction === "down") {
            this.y += this.speed;
        }
        else if (this.direction === "left") {
            this.x -= this.speed;
        }
        else if (this.direction === "right") {
            this.x += this.speed;
        }
        else {
            this.speed = 0;
        }
        if (pressedKeys.indexOf("w") !== -1) {
            this.direction = "up";
            this.moving = true;
            if (this.y < 0) {
                this.y = 0;
                this.speed = 0;
            }
            if (this.speed < this.maxSpeed) {
                this.speed += this.acceleration;
            }
        }
        if (pressedKeys.indexOf("a") !== -1) {
            this.direction = "left";
            this.moving = true;
            if (this.x < 0) {
                this.x = 0;
                this.speed = 0;
            }
            if (this.speed < this.maxSpeed) {
                this.speed += this.acceleration;
            }
        }
        if (pressedKeys.indexOf("s") !== -1) {
            this.direction = "down";
            this.moving = true;
            if (this.y + this.height > canvas.height) {
                this.y = canvas.height - this.height;
                this.speed = 0;
            }
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
        if (pressedKeys.indexOf("w") === -1 &&
            pressedKeys.indexOf("a") === -1 &&
            pressedKeys.indexOf("s") === -1 &&
            pressedKeys.indexOf("d") === -1) {
            this.moving = false;
            this.direction = "none";
            if (this.speed > 0) {
                this.speed -= this.deacceleration;
            }
            if (this.speed < 0) {
                this.speed = 0;
            }
        }
    };
    player.prototype.render = function () {
        ctx.fillStyle = "#000000";
        ctx.fillText("Speed:" + this.speed, 0, 10);
        ctx.fillText("X:" + this.x, 0, 20);
        ctx.fillText("Y:" + this.y, 0, 30);
        ctx.fillText("Direction:" + this.direction, 0, 40);
        ctx.fillText("Moving:" + this.moving, 0, 50);
        ctx.fillText("Width:" + this.width, 0, 60);
        ctx.fillText("Height:" + this.height, 0, 70);
        ctx.drawImage(this.texture, this.x, this.y);
    };
    return player;
}());
export default player;
