const url = "http://localhost/game-hub/wp-json/wc/store/products";
const productContainer = document.querySelector(".featured-games");

async function getGames(){

    try {
        const response = await fetch(url);
        const getResults = await response.json();
        createHTML(getResults);
    }
    catch(error){
        console.log(error);
    }
}

getGames()

function createHTML(products){
    products.forEach(function(product){
        productContainer.innerHTML += 
        `<div class="game">
        <div>
        <img src="${product.images[0].src}" alt="${product.name}">
        </div>
        <div>
        <h2>${product.name}</h2>
        <p>${product.description}</p>
            <div class="game_button">
                <div class="price">${product.prices.price}$</div>
                <a href="cart.html"><button class="cta cta-large">Add to Cart</button></a>
            </div>
        </div>        
    </div>`
    })
        
   
}
