
const box = document.getElementById('box');
const slideSquare = function() {
    const width = window.innerWidth;
    const boxWidth = box.offsetWidth;
    const height = window.innerHeight;

    const targetPositionDown = height - boxWidth;
    const targetPositionRight = width - boxWidth;
    const targetPositionLeft = 0;
    const tagetPositionTop = 0;

    let currentPositionX = 0;
    let currentPositionY = 0; 
    const step = 3;


    function animateRight () {
        if (currentPositionX < targetPositionRight) {
            currentPositionX = currentPositionX + step;
            box.style.left = currentPositionX + "px";
            requestAnimationFrame(animateRight);
        } else {
            animateLeft();
        }
    }

    function animateLeft() {
        if (currentPositionX > targetPositionLeft) {
            currentPositionX = currentPositionX - step;
            box.style.left = currentPositionX + "px";
            requestAnimationFrame(animateLeft);
        } else {
            animateRight();
        }
    }


    function animateDown() {
        if (currentPositionY < targetPositionDown) {
            currentPositionY = currentPositionY + step;
            box.style.top = currentPositionY + "px";
            requestAnimationFrame(animateDown);
        } else {
            animateUp();
        }
    }

    function animateUp() {
        if (currentPositionY > tagetPositionTop) {
            currentPositionY = currentPositionY - step;
            box.style.top = currentPositionY + "px";
            requestAnimationFrame(animateUp);
        } else {
            animateDown();
        }
    }


    animateRight();
    animateDown();
}
slideSquare();


