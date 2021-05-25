import { productArray } from "./constants/saleList.js";
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
            <div class="sale-price">
                <div class="price old-price">${product.oldPrice}$</div>
                <div class="price new-price">${product.newPrice}$</div>
            </div>
            <a href="cart.html"><button class="cta cta-large">Add to Cart</button></a>
            </div>
        </div>
    </div>
    `
})
