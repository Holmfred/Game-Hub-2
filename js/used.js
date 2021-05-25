import { productArray } from "./constants/usedList.js";
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
            <button class="cta cta-large">Add to Cart</button>
            </div>
        </div> 
    </div>
    `
})