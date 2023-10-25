const lienzo=document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

let idx=5;
let idy=5;

let dirX=1;
let dirY=1;

function bol(x,y){
    ctx.fillStyle=`hsl(${valHsl++},55%,55%)`;
    ctx.beginPath();
    ctx.arc(x,y,45,0,Math.PI*2);
    ctx.fill();
    //ctx.stroke();
}

function square(x,y){
    ctx.fillStyle=`hsl(${valHsl++},55%,55%)`;
    ctx.strokeStyle=`hsl(${valHsl++},35%,35%)`;
    ctx.fillRect(x,y,50,50);
    ctx.strokeRect(x,y,50,50);
}

function border(){
    lienzo.style.border=`3px solid hsl(${valHsl++},55%,55%)`;
    lienzo.style.boxShadow=`0px 0px 10px 10px hsl(${valHsl++},55%,55%,60%)`;
}

let valHsl = 0;
setInterval(() =>{
    //ctx.clearRect(0,0,650,400);
    bol(idx,idy);
    //square(idx,idy);
    border();
    if(dirX===1) idx+=5; else idx-=5;
    if(dirY===1) idy+=5; else idy-=5;
    if(idx > 600) dirX=2;
    if(idx<5) dirX=1;
    if(idy > 350) dirY=2;
    if (idy<5) dirY=1;
},15);