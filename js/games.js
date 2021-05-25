import { productArray } from "./constants/productList.js";
const productContainer = document.querySelector(".products");

productArray.forEach(function(product){
    productContainer.innerHTML += 
    `
    <div class="game">
        <div>
        <img src="${product.image}" alt="${product.name}">
        </div>
        <div>
        <h2>${product.name}</h2>
        <p>${product.description}</p>
            <div class="game_button">
                <div class="price">${product.price}$</div>
                <a href="cart.html"><button class="cta cta-large">Add to Cart</button></a>
            </div>
        </div>        
    </div>
    `
})
