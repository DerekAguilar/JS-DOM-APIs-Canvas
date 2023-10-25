const body=document.querySelector('body');
const h2=document.querySelector('h2');

function setColor(){
    const digits='0123456789ABCDEF';
    let hexColor='#';
    for(let i=0;i<6;i++){
        const num=Math.floor(Math.random()*16);
        hexColor+=digits.charAt(num);
    }
    body.style.background=hexColor;
    h2.innerHTML=hexColor;
}