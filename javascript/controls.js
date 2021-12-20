export var pressedKeys = [];
export var mouse = {
    x: 0,
    y: 0,
    down: false,
    lastMove: 0
};
window.addEventListener("keydown", function (e) {
    if (pressedKeys.indexOf(e.key) === -1) {
        pressedKeys.push(e.key);
    }
});
window.addEventListener("keyup", function (e) {
    pressedKeys = pressedKeys.filter(function (key) { return key !== e.key; });
});
window.addEventListener("mousemove", function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.lastMove = Date.now();
});
window.addEventListener("mousedown", function (e) {
    mouse.down = true;
});
window.addEventListener("mouseup", function (e) {
    mouse.down = false;
});
