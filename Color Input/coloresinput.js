const body=document.querySelector('body');
const red=document.getElementById('red');
const green=document.getElementById('green');
const blue=document.getElementById('blue');
const transp=document.getElementById('transp');

function getColor() {
    const redVal=Math.floor(red.value/100*255);
    const greenVal=Math.floor(green.value/100*255);
    const blueVal=Math.floor(blue.value/100*255);
    const transpVal=transp.value/100;
    return `rgb(${redVal}, ${greenVal}, ${blueVal},${transpVal})`;
}

function setColor(){
    body.style.background=getColor();
}

setColor();

red.addEventListener('change',setColor);
green.addEventListener('change',setColor);
blue.addEventListener('change',setColor);
transp.addEventListener('change',setColor);