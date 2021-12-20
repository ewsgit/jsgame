export var pressedKeys = [];
export var mouse = {
    x: 0,
    y: 0,
    down: false,
    lastMove: 0
}

window.addEventListener("keydown", e => {
    if (pressedKeys.indexOf(e.key) === -1) {
        pressedKeys.push(e.key);
    }
});

window.addEventListener("keyup", e => {
    pressedKeys = pressedKeys.filter(key => key !== e.key);
});

window.addEventListener("mousemove", e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.lastMove = Date.now();
})

window.addEventListener("mousedown", e => {
    mouse.down = true;
})

window.addEventListener("mouseup", e => {
    mouse.down = false;
})