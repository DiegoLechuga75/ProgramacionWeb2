const cartItems = [];
const menuItems = [
    {
        title: "Halo Infinite",
        description: "Un robusto framework de JavaScript ideal para construir aplicaciones web escalables y mantenibles.",
        price: "1199.99",
        src: "https://m.media-amazon.com/images/I/81nWynmiDPL._AC_SL1500_.jpg",
        alt: "halo-image",
    },
    {
        title: "Gears of War: Ultimate Edition",
        description: "Una biblioteca de JavaScript centrada en la creación de interfaces de usuario dinámicas y rápidas.",
        price: "1199.99",
        src: "https://m.media-amazon.com/images/I/91LJr7Q4SQL._AC_SL1500_.jpg",
        alt: "gears-image",
    },
    {
        title: "Forza Horizon 5",
        description: "Un framework progresivo de JavaScript que facilita la integración y el desarrollo rápido de proyectos web.",
        price: "1199.99",
        src: "https://m.media-amazon.com/images/I/71MGlZZqIzL._AC_SL1290_.jpg",
        alt: "forza-image",
    },
    {
        title: "Metal Gear Solid Delta: Snake Eater",
        description: "Un poderoso preprocesador de CSS que permite escribir estilos de forma más eficiente y organizada.",
        price: "1199.99",
        src: "https://m.media-amazon.com/images/I/81Aai5SDanL._AC_SL1500_.jpg",
        alt: "metal-image",
    },
    {
        title: "Elden Ring",
        description: "Un entorno de ejecución de JavaScript que permite construir aplicaciones de servidor rápidas y escalables.",
        price: "1199.99",
        src: "https://m.media-amazon.com/images/I/718Psopj65L._AC_SL1346_.jpg",
        alt: "elden-image",
    },
    {
        title: "The Last of Us Part II Remastered",
        description: "Un robusto framework de JavaScript ideal para construir aplicaciones web escalables y mantenibles.",
        price: "1199.99",
        src: "https://m.media-amazon.com/images/I/71eK4zlswgL._AC_SL1500_.jpg",
        alt: "halo-image",
    },
    {
        title: "God of War Ragnarök",
        description: "Una biblioteca de JavaScript centrada en la creación de interfaces de usuario dinámicas y rápidas.",
        price: "1199.99",
        src: "https://m.media-amazon.com/images/I/81fBLI9vSQL._AC_SL1500_.jpg",
        alt: "gears-image",
    },
    {
        title: "Spiderman 2",
        description: "Un framework progresivo de JavaScript que facilita la integración y el desarrollo rápido de proyectos web.",
        price: "1199.99",
        src: "https://m.media-amazon.com/images/I/712Z8M12mAL._AC_SL1500_.jpg",
        alt: "forza-image",
    },
    {
        title: "Metal Gear Solid Delta: Snake Eater",
        description: "Un poderoso preprocesador de CSS que permite escribir estilos de forma más eficiente y organizada.",
        price: "1199.99",
        src: "https://m.media-amazon.com/images/I/81Aai5SDanL._AC_SL1500_.jpg",
        alt: "metal-image",
    },
    {
        title: "Elden Ring",
        description: "Un entorno de ejecución de JavaScript que permite construir aplicaciones de servidor rápidas y escalables.",
        price: "1199.99",
        src: "https://m.media-amazon.com/images/I/718Psopj65L._AC_SL1346_.jpg",
        alt: "elden-image",
    },
];

let clearCartBtn = document.querySelector("#clear-cart");

const renderCards = () => {
    let cardsContainer = document.querySelector(".cards-container");
    while(cardsContainer.firstChild){
        cardsContainer.firstChild.remove();
    }
    menuItems.map((card) => {
        cardsContainer.insertAdjacentHTML("beforeend", `
            <div class="card">
                <div class="image-card-container">
                    <img src="${card.src}" alt="${card.alt}">
                </div>
                <div class="info-container">
                    <h2>${card.title}</h2>
                    <p>${card.description}</p>
                    <h3>$${card.price}</h3>
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/022/093/083/small_2x/star-rating-review-clip-art-free-png.png" alt="stars-icon">
                </div>
                <button>Añadir al carrito</button>
            </div>
        `)
    })
    const cardsButtons = [...document.querySelectorAll(".card button")];
    cardsButtons.forEach((button) => {
        button.addEventListener("click", (e) => addToCart(e));
    })
}

const renderItems = () => {
    let shoppingItems = document.querySelector(".shopping-items");
    while(shoppingItems.firstChild){
        shoppingItems.firstChild.remove();
    }
    cartItems.forEach((item) => {
        shoppingItems.insertAdjacentHTML("beforeend", `
            <div class="shopping-cart-item">
                <div class="info-item">
                    <img src="${item.src}" alt="${item.alt}">
                    <h2>${item.title}</h2>
                    <h5>$${item.price}</h5>
                </div>
                <button>Eliminar</button>
            </div>
        `)
    })
    const itemsButtons = [...document.querySelectorAll(".shopping-cart-item button")];
    itemsButtons.forEach((button) => {
        button.addEventListener("click", (e) => removeFromCart(e));
    })
    renderPrice();
}

const renderPrice = () => {
    let price = document.querySelector("#total-checkout");
    let newPrice = 0;
    cartItems.forEach((item) => {
        newPrice += parseFloat(item.price);
    })
    price.textContent = `$${newPrice.toFixed(2)}`;
}

const addToCart = (e) => {
    let titleCard = e.target.parentElement.children[1].children[0].textContent;
    let indexOnItems = menuItems.findIndex((item) => item.title === titleCard);
    cartItems.push(menuItems[indexOnItems]);
    renderItems();
    menuItems.splice(indexOnItems, 1);
    renderCards();
}

const removeFromCart = (e) => {
    let titleItem = e.target.parentElement.children[0].children[1].textContent;
    let indexOnItems = cartItems.findIndex((item) => item.title === titleItem);
    menuItems.push(cartItems[indexOnItems]);
    renderCards();
    cartItems.splice(indexOnItems, 1);
    renderItems();
}

const clearCart = () => {
    cartItems.forEach((item) => {
        menuItems.push(item);
    })
    cartItems.splice(0, cartItems.length);
    renderItems();
    renderCards();
}

document.addEventListener("DOMContentLoaded", () => renderCards());
clearCartBtn.addEventListener("click", () => clearCart());