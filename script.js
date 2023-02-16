const pokemonName=document.querySelector('.pokemon_name')
const pokemonNumber=document.querySelector('.pokemon_number')
const pokemonImage=document.querySelector('.pokemon_image')

const form=document.querySelector('.form')
const input=document.querySelector('.input_search')
const buttonPrev=document.querySelector('.bnt-Prev')
const buttonNext=document.querySelector('.bnt-next')

let serchpokemon=1;


const fetchpokemon = async (pokemon) => {
    const APIResponse = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if(APIResponse.status === 200) {

        const data= await APIResponse.json();
        return data;
    }

    const data= await APIResponse.json();
   
    return data;
}


const renderpokemon  = async (pokemon) => {

    pokemonName.innerHTML = innerHTML ='loading...'; 
    pokemonNumber.innerHTML='';
    
    const data= await fetchpokemon(pokemon);


    if (data){
        pokemonImage.style.display='block';
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']
        ['animated'] ['front_default'];
    
        input.value = '';
    } 
else {
    pokemonImage.getElementsByClassName.display='mome';
    pokemonName.innerHTML = 'not found :/ ';
    pokemonNumber.innerHTML = '';
    }
    }
form.addEventListener('submit', (event) => {

    event.preventDefault();
    renderpokemon(input.value.toLowerCase());
});

buttonPrev.addEventListener('click', () => {
   if(serchpokemon >1){
    serchpokemon-=1;
    renderpokemon(serchpokemon);
}});

buttonNext.addEventListener('click', () => {
    serchpokemon +=1;
  renderpokemon(serchpokemon);
    });

renderpokemon(serchpokemon);