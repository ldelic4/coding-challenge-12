//task 2
// Get the canvas element
const canvas = document.getElementById('index.html');

// Get the 2D drawing context
const ctx = canvas.getContext('2d');
// mouse events to handle drawing
canvas.addEventListener('mouseup',()=>{
})

//task 3
//rectangle color
ctx.fillStyle = '#e37676';
//rectangle shape
ctx.fillRect(150, 100, canvas.width, canvas.height)
ctx.strokeStyle = '#dadae3';
ctx.lineWidth = 8;
ctx.strokeRect(280, 90, 130, 90)


//task 4 making button and drawing color
ctx.beginPath();
ctx.arc(140, 280, 50, 0, 2 * Math.PI);  // Draw a full circle
ctx.fillStyle = '#3e3fb0';
ctx.fill('clear page here');
