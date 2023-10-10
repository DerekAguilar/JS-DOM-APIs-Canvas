const URL = 'https://rickandmortyapi.com/api';
const characters=document.querySelector('.characters');
const modalTitle = document.querySelector('.modal-title');
const modalBody = document.querySelector('.modal-body');

function createPagination(){
    /*    <li class="page-item"><a class="page-link" href="#"> </a></li>
    */
    let buttons = ``;
    for(let i=1;i<=42;i++){
        buttons+=`<li class="page-item"><a class="page-link" href="#" data-id='${i}')>${i}</a></li>`
    }
    document.querySelector('.pagination').innerHTML=buttons;
}

createPagination();

function fetchAPI(url){
    return fetch(url).then(response=>response.json())
}

function getCharacters(page=1){
    fetchAPI(`${URL}/character/?page=${page}`)
        .then(data=>{
            const personajes=data.results;
            showCharacters(personajes);
    })
}

function getCharacter(id){
    fetchAPI(`${URL}/character/${id}`)
        .then(data=>{
            const personaje=data;
            modalTitle.innerHTML=personaje.name;
            modalBody.innerHTML='';
            const card=createCharacterCard(personaje);
            modalBody.appendChild(card);
    })
}

function showCharacters(personajes){
    characters.innerHTML='';
    personajes.forEach(personaje=>{
        characters.appendChild(createCard(personaje));
    });
}

function createCard(personaje){
    const card=document.createElement('div');
    card.classList.add('card','mb-3','bg-secondary');
    card.style.width='18rem';
    const cardContent=`
    <img src="${personaje.image}" class="card-img-top" alt="Portrait: ${personaje.name}">
    <div class="card-body">
        <h5 class="card-title">${personaje.name}</h5>
        <a href="#" 
            class="btn btn-primary" 
            data-bs-toggle="modal" 
            data-bs-target="#exampleModal" 
            data-id="${personaje.id}">See more</a>
    </div>`;
    card.innerHTML=cardContent;
    return card;
}

function createCharacterCard(personaje){
    const card=document.createElement('div');
    card.classList.add('card');
    card.style.width='85%';
    card.style.margin='0 auto';
    let badge='';
    if(personaje.status==='Alive'){
        badge=`<span class="badge rounded-pill text-bg-success">${personaje.status}</span>`;
    } else if(personaje.status==='Dead'){
        badge=`<span class="badge rounded-pill text-bg-danger">${personaje.status}</span>`;
    } else if(personaje.status==='unknown'){
        badge=`<span class="badge rounded-pill text-bg-secondary">${personaje.status}</span>`;
    }
    const cardContent=`
    <img src="${personaje.image}" class="card-img-top" alt="Portrait: ${personaje.name}">
    <div class="card-body">
        <p class="card-text">Status: ${badge}<p>
        <p class="card-text">Gender: ${personaje.gender}<p>
        <p class="card-text">World of origin: ${personaje.origin.name}<p>
        <p class="card-text">Last seen in: ${personaje.location.name}<p>
    </div>`;
    card.innerHTML=cardContent;
    return card;
}

function getButton(e){
    e.preventDefault();
    if(e.target.classList.contains('page-link')){
        const page=e.target.getAttribute('data-id');
        getCharacters(page);
    }
}

function getCard(e){
    e.preventDefault();
    if(e.target.classList.contains('btn')){
        modalTitle.innerHTML= "Buscando...";
        modalBody.innerHTML='<i class="fa fa-circle-o-notch fa-spin fa-3x"></i>'
        getCharacter(e.target.getAttribute('data-id'));
    }
}

document.querySelector('.pagination')
        .addEventListener('click',getButton);
characters.addEventListener('click',getCard);