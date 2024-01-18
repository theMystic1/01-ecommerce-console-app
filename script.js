const addBtn = document.querySelector(".add");
const minusBtn = document.querySelector(".minus");
const clearBtn = document.querySelector(".clear");
const cartBtn = document.querySelector(".total");

let cart = 0;

const addToCart = function () {
  if (cart >= 10) {
    alert("cart is full");
    return;
  }
  cart++;
  console.log(`1 item added to cart our new Cart has ${cart} items`);
};

const subFromCart = function () {
  if (cart > 0) {
    cart--;
    console.log(`1 item removed from cart our new Cart has ${cart} items`);
  } else alert("Cannot remove items from an empty cart ❌");
};

const clearCart = function () {
  if (cart <= 0) alert("cart is already empty 😒");
  cart = 0;
  console.log(`Our cart quantity is ${cart} please add items to the cart`);
};

const totalCart = function () {
  if (cart <= 0) {
    alert("Cart is empty");
  }
  console.log(`Total Items in the Cart is ${cart}`);
};

addBtn.addEventListener("click", addToCart);
minusBtn.addEventListener("click", subFromCart);
clearBtn.addEventListener("click", clearCart);
cartBtn.addEventListener("click", totalCart);
