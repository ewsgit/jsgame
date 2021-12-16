import { pressedKeys } from "./controls.js";
import { canvas, ctx } from "./index.js";
var player = /** @class */ (function () {
    function player() {
        this.width = 16;
        this.height = 16;
        this.x = this.width / 2;
        this.y = this.height / 2;
        this.speed = 0;
        this.maxSpeed = 15;
        this.acceleration = 0.1;
        this.deacceleration = 0.1;
        this.direction = "down";
        this.moving = false;
        this.texture = new Image();
        this.texture.src = "./assets/player.png";
        this.texture.width = this.width;
        this.texture.height = this.height;
        this.tile = [0, 0];
    }
    player.prototype.tick = function () {
        this.tile = [Math.floor(this.x < 0 ? 0 : this.x / 16), Math.floor(this.y < 0 ? 0 : this.y / 16)];
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
            if (this.y - (this.height / 2) < 0) {
                this.y = 0 + (this.height / 2);
                this.speed = 0;
            }
            if (this.speed < this.maxSpeed) {
                this.speed += this.acceleration;
            }
        }
        if (pressedKeys.indexOf("a") !== -1) {
            this.direction = "left";
            this.moving = true;
            if (this.x - (this.width / 2) < 0) {
                this.x = 0 + (this.width / 2);
                this.speed = 0;
            }
            if (this.speed < this.maxSpeed) {
                this.speed += this.acceleration;
            }
        }
        if (pressedKeys.indexOf("s") !== -1) {
            this.direction = "down";
            this.moving = true;
            if (this.y + (this.height / 2) > canvas.height) {
                this.y = canvas.height - (this.height / 2);
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
        ctx.fillText("Tile:" + this.tile, 0, 60);
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(this.tile[0] * 16, this.tile[1] * 16, 16, 16);
        ctx.fillStyle = "#00ff00";
        ctx.fillRect(this.x, 0, 1, canvas.height);
        ctx.fillRect(0, this.y, canvas.width, 1);
        ctx.drawImage(this.texture, this.x - 8, this.y - 8);
    };
    return player;
}());
export default player;
