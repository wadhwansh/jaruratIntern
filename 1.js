let Number = 0;
let history = [];
let redo = [];

const NumberDisplay = document.getElementById('Number');
const progressBar = document.getElementById('progressbar');
const undoButton = document.getElementById('undo');
const redoButton = document.getElementById('redo');

function updateProgressBar() {
    progressBar.style.width = (Number / 150) * 100 + '%';
}

function updateNumber(value) {
    history.push(Number);
    redo = [];
    Number = Math.min(Math.max(Number + value, 0), 150);
    NumberDisplay.textContent = Number;
    updateProgressBar();
}

document.getElementById('subtract').addEventListener('click', () => {
    updateNumber(-1);
});

document.getElementById('add').addEventListener('click', () => {
    updateNumber(1);
});

undoButton.addEventListener('click', () => {
    if (history.length > 0) {
        redo.push(Number);
        Number = history.pop();
        NumberDisplay.textContent = Number;
        updateProgressBar();
    }
});

redoButton.addEventListener('click', () => {
    if (redo.length > 0) {
        history.push(Number);
        Number = redo.pop();
        NumberDisplay.textContent = Number;
        updateProgressBar();
    }
});
