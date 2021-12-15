export var pressedKeys = [];

window.addEventListener("keydown", e => {
    if (pressedKeys.indexOf(e.key) === -1) {
        pressedKeys.push(e.key);
    }
	console.log(pressedKeys);
});

window.addEventListener("keyup", e => {
    pressedKeys = pressedKeys.filter(key => key !== e.key);
});
