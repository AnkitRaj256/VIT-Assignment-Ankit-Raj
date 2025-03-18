let train = document.getElementById("train");
let position = 0;
let interval;

function startAnimation() {
    if (!interval) {
        interval = setInterval(moveTrain, 10);
    }
}

function stopAnimation() {
    clearInterval(interval);
    interval = null;
}

function moveTrain() {
    position += 1; // Speed of the train movement
    train.style.right = position + 'px';

    // Reset position if the train goes off the screen
    if (position > window.innerWidth) {
        position = -1;
    }
}
