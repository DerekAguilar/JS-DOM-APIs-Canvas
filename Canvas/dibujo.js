const lienzo=document.querySelector('#lienzo');
const ctx=lienzo.getContext('2d');
const cuerpo=document.querySelector('body');

// Pared
ctx.fillStyle='#0096e6';
ctx.fillRect(0,300,400,100);

// Cabeza
ctx.fillStyle='#080808';
ctx.beginPath();
ctx.arc(200,200,100,0,Math.PI*2);
ctx.fill();

// Cuerpo
ctx.beginPath();
ctx.ellipse(200,300,80,55,Math.PI,0,Math.PI);
ctx.fill();

// Orejas
ctx.beginPath();
ctx.ellipse(270,110,60,35,Math.PI*1.6,0,Math.PI);
ctx.fill();

ctx.beginPath();
ctx.ellipse(271,110,60,25,Math.PI*0.6,0,Math.PI);
ctx.fill();

ctx.beginPath();
ctx.moveTo(100,200);
ctx.lineTo(93,90);
ctx.lineTo(130,110);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.ellipse(130,110,60,35,Math.PI*0.4,0,Math.PI);
ctx.fill();

ctx.beginPath();
ctx.ellipse(129,110,60,25,Math.PI*1.4,0,Math.PI);
ctx.fill();

ctx.beginPath();
ctx.moveTo(300,200);
ctx.lineTo(307,90);
ctx.lineTo(270,110);
ctx.closePath();
ctx.fill();

// Ojos
ctx.fillStyle='#e6c300';
ctx.beginPath();
ctx.beginPath();
ctx.arc(150,180,20,0,Math.PI*2);
ctx.fill();

ctx.beginPath();
ctx.beginPath();
ctx.arc(250,180,20,0,Math.PI*2);
ctx.fill();

ctx.beginPath();
ctx.beginPath();
ctx.arc(150,180,20,0,Math.PI*2);
ctx.fill();

ctx.fillStyle='#080808';
ctx.beginPath();
ctx.beginPath();
ctx.arc(250,180,15,0,Math.PI*2);
ctx.fill();

ctx.beginPath();
ctx.arc(150,180,15,0,Math.PI*2);
ctx.fill();

ctx.fillStyle='white';
ctx.beginPath();
ctx.arc(138,170,5,0,Math.PI*2);
ctx.fill();

ctx.beginPath();
ctx.beginPath();
ctx.arc(238,170,5,0,Math.PI*2);
ctx.fill();

// Nariz
ctx.fillStyle='#e66fe5';
ctx.beginPath();
ctx.moveTo(188,205);
ctx.lineTo(212,205);
ctx.lineTo(200,215);
ctx.closePath();
ctx.stroke();
ctx.fill();

// Boca
ctx.beginPath();
ctx.ellipse(170,215,30,30,0,0,Math.PI*3/7);
ctx.strokeStyle='white';
ctx.stroke();

ctx.beginPath();
ctx.ellipse(230,215,30,30,0,Math.PI*4/7,Math.PI);
ctx.strokeStyle='white';
ctx.stroke();