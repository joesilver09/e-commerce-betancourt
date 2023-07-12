function cart(prd, printProducts) {
  const cart = [];
  const productsHTML = document.querySelector(".products__container");
  const notifyHTML = document.querySelector(".notify");
  const cartHTML = document.querySelector(".cart__body");
  const countHTML = document.querySelector(".cart__count--item");
  const totalHTML = document.querySelector("cart__total--item");
  const checkoutHTML = document.querySelector(".btn--buy");

  function printCart() {
    if (cart.length === 0) {
      notifyHTML.classList.remove("show--notify");
    } else {
      notifyHTML.classList.add("show--notify");
    }

    notifyHTML.innerHTML = showItemsCount();
  }
  printCart()
  function addToCart(id, qty = 1) {
    const itemFinded = cart.find((i) => i.id === id);
    if (itemFinded) {
      itemFinded.qty += qty;
    } else {
      cart.push({ id, qty });
    }
  }
  function removeFromCart(id, qty = 1) {
    const itemFinded = cart.find((i) => i.id === id);
    const result = itemFinded.qty - qty;
    if (result > 0) {
      itemFinded.qty -= qty;
    } else {
      cart = cart.filter((i) => i.id !== id);
    }
  }
  function deleteFromCart(id) {
    cart = cart.filter((i) => i.id !== id);
  }

  function showItemsCount() {
    let suma = 0;
    for (const item of cart) {
      suma += item.qty;
    }
    return suma;
  }
  function showTotal() {
    let total = 0;
    for (const item of cart) {
      const productFinded = prd.find((p) => p.id === item.id);
      total += item.qty * productFinded.price;
    }
    return total;
  }
  function checkout() {
    for (const item of cart) {
      const productFinded = prd.find(p.id === item.id);
      productFinded.quantity -= item.qty;
    }
    cart = [];
    printCart();
    printProducts();
    window.alert("Gracias por su compra");
  }

  productsHTML.addEventListener("click", function (e) {
    if (e.target.closest(".add--to--cart")) {
      const id = +e.target.closest(".add--to--cart").dataset.id;
      addToCart(id);
    }
  });
}

export default cart;
