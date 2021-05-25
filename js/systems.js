import { productArray } from "./constants/systemList.js";
const productContainer = document.querySelector(".systems");

productArray.forEach(function(product){
    productContainer.innerHTML += 
    `
    <section class="systems>
        <div>
            <a href="systems/${product.name}.html"><img src="${product.image}" alt="${product.name}"></a>
            <h2>${product.name}</h2>
        </div>
    </section>
    `
})