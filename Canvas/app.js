const lienzo=document.querySelector('#lienzo');

const ctx=lienzo.getContext('2d');

// Cuadrados rellenos
ctx.fillRect(100,100,100,100);
ctx.fillRect(50,50,100,100);


// Cuadrados sin relleno
ctx.strokeRect(300,300,80,80);
ctx.strokeRect(250,250,80,80);

// Líneas (para unir cuadrados haciendo ilusión 3d)
ctx.beginPath();
ctx.moveTo(250,250);
ctx.lineTo(300,300);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(330,250);
ctx.lineTo(380,300);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(250,330);
ctx.lineTo(300,380);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(330,330);
ctx.lineTo(380,380);
ctx.stroke();

// Triángulo rojo
ctx.beginPath();
ctx.moveTo(200,200);
ctx.lineTo(250,250);
ctx.lineTo(150,250);
ctx.closePath();
ctx.stroke();
ctx.fillStyle='red';
ctx.fill();

ctx.fillStyle='yellow';
ctx.beginPath();
ctx.arc(300,100,50,0,Math.PI*2);
ctx.fill();

ctx.fillStyle='black';
ctx.beginPath()
ctx.arc(282,85,10,0,Math.PI*2);
ctx.fill();

ctx.beginPath()
ctx.arc(318,85,10,0,Math.PI*2);
ctx.fill();

ctx.beginPath()
ctx.ellipse(300,115,25,15,Math.PI*0.029,0,Math.PI*0.9);
ctx.stroke();