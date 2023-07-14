import loader from "./components/loader.js";
import showMenu from "./components/showMenu.js";
import showCart from "./components/showCart.js";
import cart from "./components/cart.js";
import products from"./components/products.js"
showMenu();
showCart();
/*Ocultar loader*/
loader();
//  Lista de productos
//  FUNCION MOSTRAR PRODUCTOS
function printProducts() {
  const productsHTML = document.querySelector(".products__container");
  let classprod="";
  
  for (const product of products) {
//     if(false){
//       for(const product of products){
//       product.showingQuantity = 'x'}
// console.log(classprod)
//     }
    classprod += `
<article class="product">
<div class="product__image">
  <img
    src=${product.image}
    alt="${product.name}"
  />
</div>
<div class="product__content">
  <button type="button" class="product__btn add--to--cart" data-id="${product.id}">
    <i class="bx bx-cart-add"></i>
  </button>
  <span class="product__price">$${product.price}</span>
  <span class="product__stock">Disponibles:${product.showingQuantity}</span>
  <h3 class="product__title">${product.name}</h3>
</div>
</article>`;
  }
  productsHTML.innerHTML = classprod;
}
printProducts();
cart(products, printProducts);


// Dark Mode
document.addEventListener("DOMContentLoaded", function() {
  const button = document.querySelector(".night__btn");
  const body = document.body;
  
  button.addEventListener("click", function() {
    body.classList.toggle("dark-mode");
    
    const icon = button.querySelector("i");
    if (body.classList.contains("dark-mode")) {
      icon.classList.remove("bx-moon");
      icon.classList.add("bx-sun");
    } else {
      icon.classList.remove("bx-sun");
      icon.classList.add("bx-moon");
    }
  });
});

// Modal
const openModal = document.querySelector('.modal__btn');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});