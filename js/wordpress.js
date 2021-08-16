const url = "http://localhost/game-hub/wp-json/wc/store/products";
const productContainer = document.querySelector(".featured-games");

async function getGames(){

    try {
        const response = await fetch(url);
        const getResults = await response.json();
        createHTML(getResults);
        console.log(getResults)
    }
    catch(error){
        console.log(error);
    }
}

getGames()

function createHTML(products){
    products.forEach(function(product){
        productContainer.innerHTML += 
        `<a href="details.html?id=${product.id}" class="game">
        <div>
        <img src="${product.images[0].src}" alt="${product.name}">
        </div>
        <div>
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        </div>        
        </a>
        <div class="game_button">
                <div class="price">${product.prices.price}$</div>
                <a href="cart.html?id=${product.id}"><button class="cta cta-large">Add to Cart</button></a>
        </div>`
    })
        
   
}
