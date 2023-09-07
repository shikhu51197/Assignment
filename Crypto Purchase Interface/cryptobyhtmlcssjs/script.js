const cryptocurrencies = [
    { name: "Bitcoin", price: 40000 },
    { name: "Ethereum", price: 2800 },
    { name: "Litecoin", price: 150 },
];

const cart = [];

// Function to render cryptocurrency cards
function renderCryptos() {
    const cryptoSection = document.getElementById("cryptoSection");
    cryptoSection.innerHTML = "";

    cryptocurrencies.forEach((crypto) => {
        const cryptoCard = document.createElement("div");
        cryptoCard.classList.add("crypto-card");

        const cryptoName = document.createElement("h3");
        cryptoName.textContent = crypto.name;

        const cryptoPrice = document.createElement("p");
        cryptoPrice.textContent = `$${crypto.price}`;

        const quantityButton = document.createElement("button");
        quantityButton.textContent = "Quantity";
        quantityButton.addEventListener("click", () => {
            const quantity = prompt(`Enter quantity of ${crypto.name}:`);
            if (quantity !== null && quantity.trim() !== "") {
                addToCart(crypto, parseInt(quantity));
            }
        });

        const buyButton = document.createElement("button");
        buyButton.textContent = "Buy";
        buyButton.addEventListener("click", () => {
            addToCart(crypto, 1);
        });

        cryptoCard.appendChild(cryptoName);
        cryptoCard.appendChild(cryptoPrice);
        cryptoCard.appendChild(quantityButton);
        cryptoCard.appendChild(buyButton);

        cryptoSection.appendChild(cryptoCard);
    });
}

// Function to add an item to the cart
function addToCart(crypto, quantity) {
    if (quantity > 0) {
        const existingItem = cart.find((item) => item.crypto.name === crypto.name);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({ crypto, quantity });
        }
        renderCart();
    } else {
        alert("Please enter a valid quantity.");
    }
}

// Function to render the cart
function renderCart() {
    const cartList = document.getElementById("cartList");
    cartList.innerHTML = "";

    let totalCost = 0;

    if (cart.length === 0) {
        cartList.innerHTML = "<p>Your cart is empty!</p>";
    } else {
        cart.forEach((item) => {
            const cartItem = document.createElement("li");
            cartItem.innerHTML = `${item.crypto.name} x${item.quantity} - $${item.crypto.price * item.quantity}`;
            
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.addEventListener("click", () => {
                removeFromCart(item);
            });

            cartItem.appendChild(removeButton);
            cartList.appendChild(cartItem);

            totalCost += item.crypto.price * item.quantity;
        });
    }

    const cartTotal = document.getElementById("cartTotal");
    cartTotal.textContent = `Total: $${totalCost}`;
}

// Function to remove an item from the cart
function removeFromCart(item) {
    const index = cart.indexOf(item);
    if (index !== -1) {
        cart.splice(index, 1);
        renderCart();
    }
}

// Initial rendering
renderCryptos();
renderCart();
