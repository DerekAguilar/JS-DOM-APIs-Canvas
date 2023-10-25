const lienzo=document.querySelector('#lienzo');
const ctx=lienzo.getContext('2d');
const score=document.querySelector('span');

let direction=1;

counter=0;
score.innerHTML=counter;

const snake=[];
snake.push({
    x:2,
    y:0,
    nextX:0,
    nextY:0,
    pinta:function(){
        ctx.strokeStyle='lime';
        ctx.shadowColor='lime';
        ctx.shadowBlur=2;
        ctx.font='25px Serif';
        ctx.fillText('🟢',this.x*20,this.y*20);
    }
});
snake.push({
    x:1,
    y:0,
    nextX:snake[0].x,
    nextY:snake[0].y,
    pinta:function(){
        ctx.strokeStyle='lime';
        ctx.shadowColor='lime';
        ctx.shadowBlur=2;
        ctx.font='25px Serif';
        ctx.fillText('🟢',this.x*20,this.y*20);
    }
});
snake.push({
    x:0,
    y:0,
    nextX:snake[1].x,
    nextY:snake[1].y,
    pinta:function(){
        ctx.strokeStyle='lime';
        ctx.shadowColor='lime';
        ctx.shadowBlur=2;
        ctx.font='25px Serif';
        ctx.fillText('🟢',this.x*20,this.y*20);
    }
});

const food={
    x:0,
    y:0,
    aparece:function(){
        this.x=Math.floor(Math.random()*30);
        this.y=Math.ceil(Math.random()*20);
    },
    pinta:function(){
        ctx.shadowColor='orange';
        ctx.fillStyle='orange';
        ctx.font='25px Serif';
        ctx.fillText('🍎',this.x*20,this.y*20);
    }
}

let stPosX=2;
let stPosY=0;


function nextMove(){
    snake.forEach((square,index)=>{
        if(index==0){
            square.x=stPosX;
            square.y=stPosY;
        } else {
            square.x=square.nextX;
            square.y=square.nextY;
            square.nextX=snake[index-1].x;
            square.nextY=snake[index-1].y;
        }
    })
}


food.aparece();
setInterval(()=>{
    ctx.clearRect(0,0,600,400);
    snake.forEach(square=>square.pinta());
    if(snake[0].x===food.x&&snake[0].y===food.y){
        food.aparece();
        const newSquare={...snake[0]}
        newSquare.x=food.x;
        newSquare.y=food.y;
        snake.push(newSquare);
        counter++;
        score.innerHTML=counter;
    }
    food.pinta();
    switch(direction){
        case 1:
            stPosX++;
            break;
        case 2:
            stPosY++;
            break;
        case 3:
            stPosX--;
            break;
        case 4:
            stPosY--;
            break;
    }
    if(stPosX>29) stPosX=0;
    if(stPosX<0) stPosX=29;
    if(stPosY>20) stPosY=1;
    if(stPosY<1) stPosY=20;
    nextMove();
},190);


document.querySelector('body')
    .addEventListener('keydown',function(e){
        switch(e.key){
            case 'ArrowUp':
                direction=4;
                break;
            case 'w':
                direction=4;
                break;
            case 'W':
                direction=4;
                break;
            case 'ArrowRight':
                direction=1;
                break;
            case 'd':
                direction=1;
                break;
            case 'D':
                direction=1;
                break;
            case 'ArrowLeft':
                direction=3;
                break;
            case 'a':
                direction=3;
                break;
            case 'A':
                direction=3;
                break;
            case 'ArrowDown':
                direction=2;
                break;
            case 's':
                direction=2;
                break;
            case 'S':
                direction=2;
        }
    });