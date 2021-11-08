const baseUrl = "https://swapi.dev/api";
const moviesItemsBox = document.getElementById('moviesItemsBox');
const movieIdInput = document.getElementById('movieId');

const getAllCharacters = (moviePart) => {
   fetch(`${baseUrl}/films/${moviePart}`)
    .then(response => response.json())
    .then(response => {
        const charactersResponsesPromises = response.characters.map((character) => {
            return fetch(character);
        });

        return Promise.all(charactersResponsesPromises);
    })
    .then(resArr => {
        const charactersPromises = resArr.map(res => res.json());

        return Promise.all(charactersPromises);
    })
    .then((filmsCharacters) => {
        const listItem = filmsCharacters.map(item => `
            <div class='character'>
                <h3>${item.name}</h3>
                <p>Gender: ${item.gender}</p>
                <p>Birth year:${item.birth_year}</p>
            </div>    
        `);

        moviesItemsBox.innerHTML = listItem.join('');
    })
    .catch((err) => {
        console.log(err);
    });
}

const getAllPlanets = () => {
    fetch(`${baseUrl}/planets/`)
    .then(response => response.json())
    .then(response => response.results)
    .then(response => {
        const listPlanetName = response.map(item => `
            <div class='character'>
                <h3> ${item.name}</h3>
            </div>
        `);

        moviesItemsBox.innerHTML = listPlanetName.join('');
    })
    .catch((err) => {
        console.log(err);
    })
};


document.addEventListener('click', (event) => {
    if (event.target.id === 'getAllCharacters') {
        getAllCharacters(movieIdInput.value);
    } else if (event.target.id === 'getAllPlanets') {
        getAllPlanets();
    }
});

['keyup', 'change'].forEach((eventName) => {
    movieIdInput.addEventListener(eventName, (event) => {
        const btnGetAllCharacters = document.getElementById('getAllCharacters');
    
        if (event.target.value === '') {
            btnGetAllCharacters.disabled = true;
        } else {
            btnGetAllCharacters.disabled = false;
        }
    })
});
