// const addBtn = document.querySelector(".add");
// const minusBtn = document.querySelector(".minus");

const items = [
  {
    id: 1,
    itemName: "Fancy bag for Everyone",
    itemPrice: 32.8,
    itemImage: "img/pt-1.jpg",
    description: ` Architecto rem quas molestiae earum, natus nihil illum alias? Est illum
    suscipit, odit placeat pariatur labore rem tempore assumenda, exercitationem
    ab nesciunt quo ipsa recusandae ad consequatur,`,
  },
  {
    id: 2,
    itemName: "Fancy Sneakers",
    itemPrice: 32.8,
    itemImage: "img/pt-6.jpg",
    description: ` saepe nostrum! Deleniti eum cupiditate blanditiis voluptas minus at officia
    repellat nemo porro non harum itaque, quod delectus.`,
  },
  {
    id: 3,
    itemName: "Lovely Shirt for boys",
    itemPrice: 38,
    itemImage: "img/pt-11.jpg",
    description: `  A inventore eveniet quae qui magnam, libero impedit. Maxime placeat pariatur
    eos quos aperiam consectetur dolorem, eligendi molestias, at, quidem animi`,
  },
  {
    id: 4,
    itemName: "Lovely bag for travels",
    itemPrice: 38,
    itemImage: "img/pt-3.jpg",
    description: `  consequuntur illo fugiat obcaecati cupiditate. Adipisci expedita aliquid
    culpa velit amet voluptates eius id, voluptatem cupiditate a aut voluptatum
    laborum.`,
  },
  {
    id: 5,
    itemName: "Pretty sneakers for all",
    itemPrice: 32,
    itemImage: "img/pt-8.jpg",
    description: ` excepturi et molestias ratione nobis explicabo magni atque, molestiae
    officia iste earum in minus itaque incidunt blanditiis dolorem quia expedita`,
  },
  {
    id: 6,
    itemName: "Fancy bag for big men",
    itemPrice: 32,
    itemImage: "img/pt-2.jpg",
    description: `sunt repellat impedit iste voluptatibus. Totam dolore dicta cum obcaecati
    molestias maxime laudantium illum expedita. Voluptatem soluta adipisci,`,
  },

  {
    id: 7,
    itemName: "Nice shirt",
    itemPrice: 33,
    itemImage: "img/pt-14.webp",
    description: ` assumenda praesentium commodi similique, dolor veritatis dolorum mollitia
      necessitatibus exercitationem accusamus nobis voluptatem pariatur temporibus`,
  },
  {
    id: 8,
    itemName: "Nice sneakers",
    itemPrice: 32,
    itemImage: "img/pt-10.jpg",
    description:
      " illo sequi quis soluta. Similique dolorum et non ut distinctio cum deleniti consequatur nemo, alias vero? Harum totam amet fugiat ab maxime quis",
  },
  {
    id: 9,
    itemName: "Big boys bag for multi-purpose",
    itemPrice: 40,
    itemImage: "img/pt-5.jpg",
    description: ` tempora dolor corrupti impedit optio tenetur officia eos aliquam incidunt
      iure deserunt corporis, blanditiis numquam beatae `,
  },
  {
    id: 10,
    itemName: "Beautiful sneakers for everyone",
    itemPrice: 33,
    itemImage: "img/pt-9.jpg",
    desc: ` blanditiis ab deserunt necessitatibus velit praesentium nobis libero
      voluptatibus? Quis, neque magni. Alias similique necessitatibus distinctio`,
  },
  {
    id: 11,
    itemName: "Fancy bag for travels",
    itemPrice: 33,
    itemImage: "img/pt-4.jpg",
    description: ` harum fugit atque! Sit voluptas ea ratione temporibus modi quod esse
    corrupti voluptates quo facere? Dolor ex ducimus similique aliquam voluptate
    officia consequatur, `,
  },

  {
    id: 12,
    itemName: "Cute Shirt for men",
    itemPrice: 22,
    itemImage: "img/pt-13.jpg",
    description:
      "eaque officia veniam qui laborum quia fuga consequuntur, debitis fugiataliquam, animi provident! Quisquam magni laborum fuga. Beatae laboriosam",
  },

  {
    id: 13,
    itemName: "Fancy sneakers for sports",
    itemPrice: 30,
    itemImage: "img/pt-7.jpg",
    description:
      "totam error hic porro enim, consectetur rerum magni maxime harum doloribusesse temporibus! Suscipit accusantium, soluta harum ",
  },
  {
    id: 14,
    itemName: "Big boys wear for men",
    itemPrice: 35,
    itemImage: "img/pt-12.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias praesentium deleniti, ",
  },
];
const clearBtn = document.querySelector(".clear");
// const cartBtn = document.querySelector(".add");
// const cartBtn = document.querySelector(".add_to-cart");
const item = document.querySelector(".item-name");
const quantity = document.querySelector(".item-quantity");
const totalCart = document.querySelector(".total");
const container = document.querySelector(".container");
const cartViewCont = document.querySelector(".cart-item");
const cartView = document.querySelector(".cart");
const cartBtn = document.querySelector(".cart-btn");
const checkoutCont = document.querySelector(".cout");

let cart = [];

const displayItems = function () {
  items.map((item, i) => {
    const markup = `
    
    <div class="items">
      <img src='${item.itemImage}' alt="" />
      <div class="item">
        <h1 class="name">
        
        ${item.itemName}
        
        <span class="price"> $${item.itemPrice} </span>
        </h1>
        <p class="desc">
        ${item.description}
        </p>
        <button class="add_to-cart" data-id="${i + 1}">Add to cart</button>
    
      </div>
    </div>
    
    `;

    container.insertAdjacentHTML("beforeend", markup);
  });
};

displayItems();

const updateCartView = function () {
  const markup = cart
    .map(
      (cartItem, i) => `
      <div class="cart-items">
        <div>
          <span class=""></span>
          <span class="remove_from-cart" data-id="${cartItem.id}">X</span>
          </div>
          <img src="${cartItem.itemImage}" alt="" class="cartimg" />
          <div class="cart-item">
          <h1 class="name cart-name">
          ${cartItem.itemName}
            <span class="price"> $${cartItem.itemPrice} </span>
          </h1>
          <p class="cart-desc">
            ${cartItem.description}
          </p>
        </div>
      </div>
      `
    )
    .join("");

  if (cart.length > 0) {
    cartViewCont.innerHTML = markup;
  } else {
    cartViewCont.innerHTML = "Cart is empty";
    checkoutCont.innerHTML = "";
  }
};

const addToCart = function () {
  // const myCart = cart;
  container.addEventListener("click", function (e) {
    e.preventDefault();
    const btn = e.target.closest(".add_to-cart");
    if (!btn) return;

    const id = +btn.dataset.id;

    const selectedItem = items.find((item) => item.id === id);

    if (selectedItem) {
      cart.push(selectedItem);
      console.log(
        `${selectedItem.itemName}.... worth $${selectedItem.itemPrice} added to the cart`
      );

      updateCartView();

      // cart = myCart

      checkoutCont.innerHTML =
        cart.length > 0 ? `<button class="checkout">Checkout</button>` : "";
    }
  });

  console.log(cart);
};

addToCart();

cartBtn.addEventListener("click", function () {
  cartView.classList.toggle("hidden");

  if (cart.length < 1) return;
  console.log(cart);
});

checkoutCont.addEventListener("click", function (e) {
  const checkoutBtn = e.target.closest(".checkout");

  if (!checkoutBtn) return;

  const confirmBuy = window.confirm(
    `You have ${cart.length} items in your cart are you sure thats all you need?`
  );

  if (cart.length > 0) {
    if (confirmBuy) {
      const prices = cart
        .map((item) => item.itemPrice)
        .reduce((acc, curv) => acc + curv, 0);
      console.log(
        `You ordered ${
          cart.length
        } items and The total value of your purchase is $${Math.round(
          prices
        )} thank you for shopping with us`
      );
      cart = [];

      console.log(cart);
      updateCartView();
      // cartViewCont.innerHTML = "Cart is empty";
      // checkoutCont.innerHTML = "";
    }
  } else {
  }
});
cartViewCont.addEventListener("click", function (e) {
  const remBtn = e.target.closest(".remove_from-cart");

  if (!remBtn) return;

  const itemId = +remBtn.dataset.id;

  // Use findIndex to get the index of the item in the cart
  const itemIndex = cart.findIndex((item) => item.id === itemId);
  const itemItself = cart.find((item) => item.id === itemId);

  const confirmation = window.confirm(
    "Are you sure you want to remove this item from the cart?"
  );
  if (confirmation) {
    if (itemIndex !== -1) {
      // Remove the item at the found index
      cart.splice(itemIndex, 1);

      // Update the cart view
      updateCartView();

      if (cart.length > 0) {
        console.log(
          `${itemItself.itemName} worth $${itemItself.itemPrice} removed from the cart you still have ${cart.length} items left in your cart`
        );
      } else {
        console.log(`You cart is empty, kindly add items to your cart`);
        updateCartView();
        // cartViewCont.innerHTML = "Cart is empty";
        // checkoutCont.innerHTML = "";
      }
    }
  }
});

// console.log("Cart is mpty");

// const cartView = function () {

//   });
//   console.log(cart);
// };

// cartView();

// the cart is displayed in the console

/*
  const addToCart = function () {
    if (item.value === "") {
      alert("Please input an item");
      return;
    }
    if (quantity.value < 1) {
      alert("item must be at least 1");
      return;
  }
  const items = {
    item: item.value,
    quantity: +quantity.value,
  };

  cart.push(items);
  // console.log(cart);
};

cartBtn.addEventListener("click", function (e) {
  e.preventDefault();
  addToCart();
  item.value = "";
  quantity.value = "";
  console.log(cart);
});
clearBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (cart.length < 1) {
    alert("cart is already empty");
    return;
  }
  let confirmation = window.confirm("Are you sure you want to clear the cart");

  if (confirmation) cart.splice(0, cart.length);
  // cart = [];
  console.log(cart);
});

totalCart.addEventListener("click", function (e) {
  e.preventDefault();

  if (cart.length < 1) {
    alert("Cart is empty, please add item to the cart");
    return;
  }

  console.log(
    `You have ${cart.length} items in your cart. Here is your cart `,
    cart
  );
});
*/

/*

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
*/
