const cartItems = [];
const menuItems = [
    {
        title: "Angular",
        description: "Un robusto framework de JavaScript ideal para construir aplicaciones web escalables y mantenibles.",
        price: "149.99",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",
        alt: "angular-logo",
    },
    {
        title: "React",
        description: "Una biblioteca de JavaScript centrada en la creación de interfaces de usuario dinámicas y rápidas.",
        price: "149.99",
        src: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
        alt: "react-logo",
    },
    {
        title: "Vue",
        description: "Un framework progresivo de JavaScript que facilita la integración y el desarrollo rápido de proyectos web.",
        price: "149.99",
        src: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png",
        alt: "vue-logo",
    },
    {
        title: "SASS",
        description: "Un poderoso preprocesador de CSS que permite escribir estilos de forma más eficiente y organizada.",
        price: "99.99",
        src: "https://sass-lang.com/assets/img/styleguide/seal-color.png",
        alt: "sass-logo",
    },
    {
        title: "Node.JS",
        description: "Un entorno de ejecución de JavaScript que permite construir aplicaciones de servidor rápidas y escalables.",
        price: "199.99",
        src: "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png",
        alt: "nodejs-logo",
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
                    <h3>${card.price}</h3>
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
                    <h5>${item.price}</h5>
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
    price.textContent = newPrice.toFixed(2);
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