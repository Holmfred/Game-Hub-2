const detailContainer = document.querySelector(".game-details")

const queryString = document.location.search;

const params = new URLSearchParams(queryString)

const id = params.get("id");

console.log(id);

const url = "http://localhost/game-hub/wp-json/wc/store/products/" + id;

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
            <div class="price">${details.prices.price}$</div>
            <a href="cart.html"><button class="cta cta-large">Add to Cart</button></a>
        </div>
    </div>` 
}