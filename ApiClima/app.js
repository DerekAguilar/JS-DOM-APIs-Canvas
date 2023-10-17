const UrlBase ='https://api.openweathermap.org/data/2.5/weather';
const APIKey='40ce983529c45c8616f9a4472cf0cf98';
const btnCiudad=document.querySelector('#btnCiudad');
const inputCity=document.querySelector('#city');

const fetchAPI = url => fetch(url).then(response => response.json());

async function getClima(lat,lon,apiKey){
    const url = `${UrlBase}?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const clima= await fetchAPI(url);
    console.log(clima);
    const temperature=(clima.main.temp-273.15).toFixed(2);
    document.querySelector('#left h2').innerHTML=clima.name;
    changeBGColor(temperature);
    showTemp(temperature);
}

async function getClimaByCity(city,apiKey){
    const url=`${UrlBase}?q=${city}&appid=${apiKey}`;
    const clima= await fetchAPI(url);
    console.log(clima);
    const temperature=(clima.main.temp-273.15).toFixed(2);
    document.querySelector('#left h2').innerHTML=clima.name;
    changeBGColor(temperature);
    showTemp(temperature);
}

function showTemp(temp){
    const h3=document.querySelector('h3');
    if (temp <15){
        h3.innerHTML=`${temp}°C ❄❄❄❄`;
    } else if (temp<23) {
        h3.innerHTML=`${temp}°C ❄🌥❄🌥`;
    } else {
        h3.innerHTML=`${temp}°C 🔥☀🔥☀`;
    }
    
}

function changeBGColor(temp){
    const fondo=document.querySelector('body');
    if (temp<10){
        fondo.style.background='#425dae';
        fondo.style.transition='0.5s';
    } else if (temp<20){
        fondo.style.background='#0d993c';
        fondo.style.transition='0.5s';
    } else if (temp<30){
        fondo.style.background='#755e01';
        fondo.style.transition='0.5s';
    } else {
        fondo.style.background='#801500';
        fondo.style.transition='0.5s';
    }
}

navigator.geolocation.getCurrentPosition(
    position=>{
        const lat=position.coords.latitude;
        const lon=position.coords.longitude;
        getClima(lat,lon,APIKey);
    }
)

btnCiudad.addEventListener('click',()=>{
    const city=inputCity.value;
    if(city){
        getClimaByCity(city,APIKey);
    } else {
        alert('No hay nada en el campo...');
    }
})