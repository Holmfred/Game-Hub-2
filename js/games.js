import { productArray } from "./constants/productList.js";
const productContainer = document.querySelector(".products");
let cartArray = [];

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
                <button class="cta cta-large" data-product="${product.id}">Add to Cart</button>
            </div>
        </div>        
    </div>
    `
})

const buttons = document.querySelectorAll("button");
buttons.forEach(function(button){
    button.onclick = function(event){
        cartArray.push(event.target.dataset.product)
        console.log(cartArray)
        
    }
})