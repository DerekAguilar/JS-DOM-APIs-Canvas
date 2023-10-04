const names=["Frank","Peter","John","Bruce"];

console.log(names);

function getNames(){
    return names;
}

console.log(getNames());

function asyncGetNames(){
    setTimeout(()=>{
        console.log('Ejecuta función');
        return names;
    },3000);
}

console.log('Inicia petición');
console.log(asyncGetNames());
console.log('Termina petición');