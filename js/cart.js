const detailContainer = document.querySelector(".game-in-cart")

const queryString = document.location.search;

const params = new URLSearchParams(queryString)

const id = params.get("id");

console.log(id);

const url = "https://www.sorlienolsen.eu/wp-json/wc/store/products/" + id;

console.log(url);

async function fetchGame() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details)

        createHTML(details);
    }

    catch(error) {
        console.log(error);
    }
}

fetchGame()

function createHTML(details) {
    detailContainer.innerHTML +=
    `<div class="game-details">
    <img src="${details.images[0].src}" alt="${details.name}">
    </div>
    <div>
    <h2>${details.name}</h2>
    <p>${details.description}</p>
        <div class="game_button">
            <div class="price">${details.prices.price.slice(0, 2)}.${details.prices.price.slice(2, 4)}$</div>
        </div>
    </div>` 
}