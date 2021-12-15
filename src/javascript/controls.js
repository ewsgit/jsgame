export var pressedKeys = [];
window.addEventListener("keydown", function (e) {
    if (pressedKeys.indexOf(e.key) === -1) {
        pressedKeys.push(e.key);
    }
    console.log(pressedKeys);
});
window.addEventListener("keyup", function (e) {
    pressedKeys = pressedKeys.filter(function (key) { return key !== e.key; });
});
