const lienzo=document.querySelector('#lienzo');
const ctx=lienzo.getContext('2d');

let direction=1;
// 1 derecha
// 2 abajo
// 3 izquierda
// 4 arriba
function ghost(x,y){
    ctx.shadowColor="white";
    ctx.shadowBlur=10;
    ctx.font='30px Trebuchet';
    ctx.fillStyle='white';
    ctx.fillText('👻',x,y);
    targets.forEach(target=>{
        if(x+10>target.indexX && x<target.indexX+30){
            if(y-10>target.indexY-30 && y<target.indexY){
                target.comido=true;
                //alert('Objeto tomado.');
            }
        }
    })
}

const targets=[];
for(let i=0;i<15;i++){
    const target={
        indexX:Math.floor(Math.random()*650),
        indexY:Math.floor(Math.random()*400),
        pinta:function(){
            if(!this.comido){
            ctx.shadowColor='yellow';
            ctx.shadowBlur=20;
            ctx.fillStyle='orange';
            ctx.fillText('🕯',this.indexX,this.indexY);
            }
        },
        comido:false,
        limites:[this.indexX,
            this.indexY,
        this.indexX+10,this.indexY+10]
    }
    targets.push(target);
}

let idx=3;
let idy=27;

setInterval(()=>{
    ctx.clearRect(0,0,650,400);
    targets.forEach(target=>target.pinta());
    ghost(idx,idy);
    switch(direction){
        case 1:
            idx+=5;
            break;
        case 2:
            idy+=5;
            break;
        case 3:
            idx-=5;
            break;
        case 4:
            idy-=5;
            break;
    }
    if(idx>650) idx=0;
    if(idy>400) idy=10;
    if(idx<0) idx=650;
    if(idy<10) idy=400;
},40);

document.querySelector('body')
    .addEventListener('keydown',function(e){
        switch(e.key){
            case 'ArrowUp':
                direction=4;
                break;
            case 'ArrowRight':
                direction=1;
                break;
            case 'ArrowLeft':
                direction=3;
                break;
            case 'ArrowDown':
                direction=2;
        }
    });