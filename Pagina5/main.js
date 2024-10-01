const cartItems = [];
const menuItems = [
    {
        title: "Halo Infinite",
        description: "Un épico juego de disparos en primera persona que redefine el combate en el universo de Halo con su impresionante campaña y multijugador masivo.",
        price: "1199.99",
        src: "https://m.media-amazon.com/images/I/81nWynmiDPL._AC_SL1500_.jpg",
        alt: "halo-image",
        platform: "xbox"
    },
    {
        title: "Gears of War: Ultimate Edition",
        description: "Un icónico juego de acción en tercera persona que ofrece combates tácticos intensos y una historia envolvente, ahora remasterizado.",
        price: "1199.99",
        src: "https://m.media-amazon.com/images/I/91LJr7Q4SQL._AC_SL1500_.jpg",
        alt: "gears-image",
        platform: "xbox"
    },
    {
        title: "Forza Horizon 5",
        description: "Un emocionante juego de carreras de mundo abierto que te lleva a través de paisajes impresionantes de México con cientos de autos.",
        price: "1199.99",
        src: "https://m.media-amazon.com/images/I/71MGlZZqIzL._AC_SL1290_.jpg",
        alt: "forza-image",
        platform: "xbox"
    },
    {
        title: "Metal Gear Solid Delta: Snake Eater",
        description: "Una obra maestra del sigilo que te sumerge en una emocionante aventura de espionaje y supervivencia en plena selva.",
        price: "1199.99",
        src: "https://m.media-amazon.com/images/I/81Aai5SDanL._AC_SL1500_.jpg",
        alt: "metal-image",
        platform: "xbox"
    },
    {
        title: "Elden Ring",
        description: "Una épica aventura de rol y acción ambientada en un vasto mundo abierto lleno de desafíos, creado por FromSoftware y George R. R. Martin.",
        price: "1199.99",
        src: "https://m.media-amazon.com/images/I/718Psopj65L._AC_SL1346_.jpg",
        alt: "elden-image",
        platform: "xbox"
    },
    {
        title: "The Last of Us Part II Remastered",
        description: "Una desgarradora historia de supervivencia en un mundo postapocalíptico, con gráficos mejorados y jugabilidad refinada.",
        price: "1199.99",
        src: "https://m.media-amazon.com/images/I/71eK4zlswgL._AC_SL1500_.jpg",
        alt: "tlou-image",
        platform: "playstation"
    },
    {
        title: "God of War Ragnarök",
        description: "Una épica saga nórdica donde Kratos y Atreus enfrentan a dioses y monstruos en una lucha por el destino del mundo.",
        price: "1199.99",
        src: "https://m.media-amazon.com/images/I/81fBLI9vSQL._AC_SL1500_.jpg",
        alt: "god-image",
        platform: "playstation"
    },
    {
        title: "Spiderman 2",
        description: "Embárcate en una increíble aventura como el Hombre Araña, enfrentando a nuevos villanos y explorando una ciudad de Nueva York más grande.",
        price: "1199.99",
        src: "https://m.media-amazon.com/images/I/712Z8M12mAL._AC_SL1500_.jpg",
        alt: "spiderman-image",
        platform: "playstation"
    },
    {
        title: "Ghost of Tsushima",
        description: "Un asombroso juego de acción y sigilo ambientado en el Japón feudal, donde debes liberar la isla de Tsushima de la invasión mongola.",
        price: "1199.99",
        src: "https://m.media-amazon.com/images/I/81XPzboI34S._AC_SL1500_.jpg",
        alt: "ghost-image",
        platform: "playstation"
    },
    {
        title: "Uncharted: Legacy of Thieves Collection",
        description: "Vive las emocionantes aventuras de Nathan Drake y Chloe Frazer en esta colección remasterizada de Uncharted.",
        price: "1199.99",
        src: "https://m.media-amazon.com/images/I/81olw39iEsL._AC_SL1500_.jpg",
        alt: "uncharted-image",
        platform: "playstation"
    },
    {
        title: "Super Mario Odyssey",
        description: "Acompaña a Mario en su emocionante aventura por reinos increíbles, utilizando nuevas habilidades y su sombrero Cappy para salvar a la princesa Peach.",
        price: "1199.99",
        src: "https://m.media-amazon.com/images/I/81sS-oqpkLS._AC_SL1500_.jpg",
        alt: "mario-o-image",
        platform: "nintendo"
    },
    {
        title: "Zelda Breath of the Wild",
        description: "Explora el vasto mundo abierto de Hyrule en una aventura épica, descubriendo secretos y enfrentando desafíos únicos en cada rincón.",
        price: "1199.99",
        src: "https://m.media-amazon.com/images/I/716IChJgUzS._AC_SL1200_.jpg",
        alt: "zelda-botw-image",
        platform: "nintendo"
    },
    {
        title: "Zelda Tears of the Kingdom",
        description: "Continúa la aventura en el vasto reino de Hyrule, descubriendo nuevos misterios y enfrentando poderosos enemigos en esta épica secuela.",
        price: "1199.99",
        src: "https://m.media-amazon.com/images/I/71glcphYY0L._AC_SL1500_.jpg",
        alt: "zelda-totk-image",
        platform: "nintendo"
    },
    {
        title: "Pokemón Legends: Arceus",
        description: "Viaja al pasado de la región de Sinnoh para descubrir los orígenes de los Pokémon en este emocionante juego de mundo abierto.",
        price: "1199.99",
        src: "https://m.media-amazon.com/images/I/71NSivnAE6L._AC_SL1483_.jpg",
        alt: "pokemon-image",
        platform: "nintendo"
    },
    {
        title: "Kirby and the Forgotten Land",
        description: "Acompaña a Kirby en su aventura por un misterioso mundo postapocalíptico, lleno de desafíos y nuevas habilidades por descubrir.",
        price: "1199.99",
        src: "https://m.media-amazon.com/images/I/81kfvGfF+SL._AC_SL1500_.jpg",
        alt: "kirby-image",
        platform: "nintendo"
    },
];

const originalItems = [...menuItems];

let clearCartBtn = document.querySelector("#clear-cart");
let navItems = [...document.querySelectorAll(".nav-item")];
let logoContainer = document.querySelector(".logo-container");
let searchGame = document.querySelector("#search-game");


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

const resetItems = () => {
    menuItems.splice(0, menuItems.length);
    originalItems.forEach((item) => menuItems.push(item));
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

const handleBrand = (e) => {
    resetItems();
    let selectedBrand = e.target.alt.split("-")[0];
    handleColorChange(selectedBrand);
    const newMenuItems = menuItems.filter((item) => item.platform === selectedBrand);
    menuItems.splice(0, menuItems.length);
    newMenuItems.forEach((item) => {
        menuItems.push(item);
    })
    renderCards();
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
    let isAlreadyOnCart = cartItems.some((item) => item.title === titleCard);
    if(!isAlreadyOnCart){
        cartItems.push(menuItems[indexOnItems]);
        renderItems();
    }
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

const handleColorChange = (brand) => {
    let header = document.querySelector("header");
    let buttonHeader = document.querySelector("#search-game button");
    let color = ``;
    if(brand === "xbox"){
        color = `rgba(14, 122, 13,`;
    } else if (brand === "playstation"){
        color = `rgba(0, 112, 209,`;
    } else if (brand === "nintendo"){
        color = `rgba(228, 0, 15,`;
    } else {
        color = `rgba(240, 46, 170,`;
    }
    header.style.boxShadow = `${color} 0.8) 0px 5px, ${color} 0.5) 0px 10px, ${color} 0.3) 0px 15px, ${color} 0.2) 0px 20px, ${color} 0.1) 0px 25px`;
    buttonHeader.style.backgroundColor = `${color} 0.99)`;
};

const handleSearch = (e) => {
    e.preventDefault();
    resetItems();
    let inputText = document.querySelector("#search-game input").value;
    const newMenuItems = menuItems.filter((item) => item.title.includes(inputText));
    menuItems.splice(0, menuItems.length);
    newMenuItems.forEach((item) => {
        menuItems.push(item);
    })
    renderCards();
}

document.addEventListener("DOMContentLoaded", () => renderCards());
clearCartBtn.addEventListener("click", () => clearCart());
navItems.forEach((item) => {
    item.addEventListener("click", (e) => handleBrand(e));
})
logoContainer.addEventListener("click", () => {
    resetItems();
    renderCards();
    handleColorChange();
});
searchGame.addEventListener("submit", (e) => handleSearch(e));