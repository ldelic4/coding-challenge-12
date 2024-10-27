//task 2
// Get the canvas element
const canvas = document.getElementById('myCanvas');

// Get the 2D drawing context
const ctx = canvas.getContext('2d');
// mouse events to handle drawing
canvas.addEventListener('mouseup',()=>{
})

//task 3
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
//rectangle color
ctx.fillStyle = '#e37676';
//rectangle shape
ctx.fillRect(150, 100, canvas.width, canvas.height)