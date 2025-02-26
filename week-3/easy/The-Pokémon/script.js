
async function fetchPokemons() {
    const number = document.querySelector('#numPokemon').value;
    const container = document.getElementById("pokemonContainer");
    container.innerHTML = ""; // Clear previous results
    console.log(number);
    for (let i = 0; i < number; i++) {
        let randomId = Math.floor(Math.random() * 151) + 1; // Get a random Pokémon (Gen 1)
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        let data = await response.json();
        console.log(data);

        let card = document.createElement('div');
        card.classList.add("card");
        card.innerHTML = `
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <h3>${data.name.toUpperCase()}</h3>
            <p>Type: ${data.types.map(t => t.type.name).join(", ")}</p>
        `
        container.appendChild(card);
    }
}





// async function fetchPokemons() {
//     const numPokemon = document.getElementById("numPokemon").value;
//     const container = document.getElementById("pokemonContainer");
//     container.innerHTML = ""; // Clear previous results

//     for (let i = 0; i < numPokemon; i++) {
//         let randomId = Math.floor(Math.random() * 151) + 1; // Get a random Pokémon (Gen 1)
//         let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
//         let data = await response.json();

//         let card = document.createElement("div");
//         card.classList.add("card");
//         card.innerHTML = `
//             <img src="${data.sprites.front_default}" alt="${data.name}">
//             <h3>${data.name.toUpperCase()}</h3>
//             <p>Type: ${data.types.map(t => t.type.name).join(", ")}</p>
//         `;
//         container.appendChild(card);
//     }
// }
