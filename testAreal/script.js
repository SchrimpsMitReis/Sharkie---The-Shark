const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 100;

let inputText = '';
let cursorVisible = true;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Canvas löschen
  ctx.font = '16px Arial';
  ctx.fillText(inputText + (cursorVisible ? '|' : ''), 10, 30); // Text + Cursor zeichnen
}

setInterval(() => {
  cursorVisible = !cursorVisible;
  draw();
}, 500); // Cursor-Blinken

document.addEventListener('keydown', (event) => {
  if (event.key === 'Backspace') {
    inputText = inputText.slice(0, -1);
  } else if (event.key.length === 1) {
    inputText += event.key;
  }
  draw();
});

canvas.addEventListener('click', () => {
  canvas.focus();
});