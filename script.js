/* Deal codes: 
Golden: Gold25Au
Silver: Silv20Ag
Bronze: Bron10Ct

Table Number Codes:
1. In120
2. In21
3. In32
4. In412
5. In55 */

const menuItems = [

    // SOUPS
    {
        id: 1,
        name: "Cream of Mushroom Soup",
        category: "soups",
        type: "veg",
        price: 220,
        description: "Creamy mushrooms blended with herbs and fresh cream.",
        image: "https://plus.unsplash.com/premium_photo-1669831178095-005ed789250a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
        id: 2,
        name: "Tomato Basil Soup",
        category: "soups",
        type: "veg",
        price: 180,
        description: "Slow-cooked tomatoes with fragrant basil.",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        name: "Sweet Corn Soup",
        category: "soups",
        type: "veg",
        price: 190,
        description: "A comforting soup with sweet corn and vegetables.",
        image: "https://images.unsplash.com/photo-1665594051407-7385d281ad76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
        id: 4,
        name: "Chicken Clear Soup",
        category: "soups",
        type: "non-veg",
        price: 240,
        description: "Light chicken broth with herbs and tender chicken.",
        image: "https://images.unsplash.com/photo-1652088079703-38f4a8d6b981?q=80&w=695&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
        id: 5,
        name: "Chicken Manchow Soup",
        category: "soups",
        type: "non-veg",
        price: 250,
        description: "Indo-Chinese soup topped with crispy noodles.",
        image: "https://media.istockphoto.com/id/1494080316/photo/chicken-manchow-soup-in-bowl-on-wooden-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=MMkeT8JMdP2RKA-bzgMQeOphMoM7fwCfAurgG6bvo4A="
    },

    // MOCKTAILS
    {
        id: 6,
        name: "Virgin Mojito",
        category: "mocktails",
        type: "veg",
        price: 180,
        description: "Fresh mint, lime, soda and crushed ice.",
        image: "https://media.istockphoto.com/id/1003648912/photo/glass-of-mojito-lime-and-mint-cocktail.webp?a=1&b=1&s=612x612&w=0&k=20&c=Z93hJeDs3N3M2ltWGOQNQH2_TdlKZE3LJsdLflleRGw="
    },
    {
        id: 7,
        name: "Blue Lagoon",
        category: "mocktails",
        type: "veg",
        price: 210,
        description: "A refreshing blue citrus mocktail.",
        image: "https://media.istockphoto.com/id/654785536/photo/refreshing-blue-hawaii-cocktail-punch.webp?a=1&b=1&s=612x612&w=0&k=20&c=XxbPYtv4eXuTdkWUUihDHY1xsDJeJZMIs8jWVp7su5s="
    },
    {
        id: 8,
        name: "Strawberry Daiquiri",
        category: "mocktails",
        type: "veg",
        price: 230,
        description: "Strawberries blended with a refreshing citrus twist.",
        image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
        id: 9,
        name: "Mango Passion",
        category: "mocktails",
        type: "veg",
        price: 220,
        description: "Mango puree, passion fruit and a hint of lime.",
        image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },

    // BEVERAGES
    {
        id: 10,
        name: "Espresso",
        category: "beverages",
        type: "veg",
        price: 130,
        description: "A rich and aromatic shot of freshly brewed coffee.",
        image: "https://images.unsplash.com/photo-1558416165-5fb04b79b0e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
        {
        id: 11,
        name: "Cappuccino",
        category: "beverages",
        type: "veg",
        price: 180,
        description: "Espresso topped with steamed milk and silky foam.",
        image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 12,
        name: "Classic Lemonade",
        category: "beverages",
        type: "veg",
        price: 120,
        description: "Freshly squeezed lemon with a touch of sweetness.",
        image: "https://media.istockphoto.com/id/466723416/photo/fresh-water-with-lemon-and-mint.webp?a=1&b=1&s=612x612&w=0&k=20&c=qryrTfk7rv8ZchIk-O6VGFVubD5zKIEyfqHct_ofWbI="
    },
    {
        id: 13,
        name: "Masala Chai",
        category: "beverages",
        type: "veg",
        price: 60,
        description: "Indian tea brewed with aromatic spices.",
        image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=800&q=80"
    },

    // INDIAN STARTERS — VEG
    {
        id: 14,
        name: "Paneer Tikka",
        category: "indian-starters",
        type: "veg",
        price: 320,
        description: "Marinated paneer grilled with peppers and spices.",
        image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 15,
        name: "Hara Bhara Kebab",
        category: "indian-starters",
        type: "veg",
        price: 260,
        description: "Spinach, peas and herbs shaped into golden kebabs.",
        image: "https://media.istockphoto.com/id/1049733598/photo/hara-bhara-kebab.webp?a=1&b=1&s=612x612&w=0&k=20&c=gzfKBlBmhD40Pzqv4bKEDlr_9aT05St_qTAYVghSu8g="
    },
    {
        id: 16,
        name: "Crispy Corn",
        category: "indian-starters",
        type: "veg",
        price: 240,
        description: "Golden corn tossed with spices and fresh herbs.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdvo5wSp5aAsJP7IiBifENivwiriqk5dUkl7f0g1cl5Q&s=10"
    },

    // INDIAN STARTERS — NON-VEG
    {
        id: 17,
        name: "Chicken Tikka",
        category: "indian-starters",
        type: "non-veg",
        price: 360,
        description: "Chicken marinated in spices and roasted to perfection.",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 18,
        name: "Seekh Kebab",
        category: "indian-starters",
        type: "non-veg",
        price: 380,
        description: "Juicy kebabs seasoned with traditional spices.",
        image: "https://images.unsplash.com/photo-1708782341231-426344114ace?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
        id: 19,
        name: "Fish Tikka",
        category: "indian-starters",
        type: "non-veg",
        price: 400,
        description: "Fish pieces marinated and grilled with Indian spices.",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80"
    },

    // INDIAN MAIN COURSE — VEG
    {
        id: 20,
        name: "Paneer Butter Masala",
        category: "indian-main",
        type: "veg",
        price: 380,
        description: "Paneer in a rich tomato, butter and cream gravy.",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 21,
        name: "Dal Makhani",
        category: "indian-main",
        type: "veg",
        price: 300,
        description: "Slow-cooked black lentils finished with butter and cream.",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 22,
        name: "Veg Biryani",
        category: "indian-main",
        type: "veg",
        price: 320,
        description: "Fragrant basmati rice layered with vegetables and spices.",
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80"
    },
        {
        id: 23,
        name: "Butter Chicken",
        category: "indian-main",
        type: "non-veg",
        price: 430,
        description: "Tender chicken in a smooth buttery tomato gravy.",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 24,
        name: "Chicken Biryani",
        category: "indian-main",
        type: "non-veg",
        price: 390,
        description: "Aromatic basmati rice with seasoned chicken.",
        image: "https://media.istockphoto.com/id/1305451864/photo/biryani.webp?a=1&b=1&s=612x612&w=0&k=20&c=g7HgBCyysc-9lryBAFQIXO4-xEvAw9BRe0a_WideQsc="
    },
    {
        id: 25,
        name: "Mutton Rogan Josh",
        category: "indian-main",
        type: "non-veg",
        price: 480,
        description: "Slow-cooked mutton in a Kashmiri-style gravy.",
        image: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80"
    },

    // CONTINENTAL STARTERS — VEG
    {
        id: 26,
        name: "Cheese Garlic Bread",
        category: "continental-starters",
        type: "veg",
        price: 220,
        description: "Toasted bread with garlic butter and melted cheese.",
        image: "https://images.unsplash.com/photo-1761344788266-5f6957aeea33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
        id: 27,
        name: "Bruschetta",
        category: "continental-starters",
        type: "veg",
        price: 250,
        description: "Toasted bread topped with tomatoes, basil and olive oil.",
        image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 28,
        name: "Loaded Nachos",
        category: "continental-starters",
        type: "veg",
        price: 280,
        description: "Crunchy nachos with cheese, salsa and jalapeños.",
        image: "https://images.unsplash.com/photo-1669624272709-c5b91f66b1b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },

    // CONTINENTAL STARTERS — NON-VEG
    {
        id: 29,
        name: "Chicken Wings",
        category: "continental-starters",
        type: "non-veg",
        price: 350,
        description: "Chicken wings tossed in a flavourful glaze.",
        image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 30,
        name: "Chicken Nuggets",
        category: "continental-starters",
        type: "non-veg",
        price: 290,
        description: "Crispy golden chicken bites served with dip.",
        image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },

    // CONTINENTAL MAIN COURSE — VEG
    {
        id: 31,
        name: "Alfredo Pasta",
        category: "continental-main",
        type: "veg",
        price: 360,
        description: "Pasta coated in a creamy white sauce with herbs.",
        image: "https://images.unsplash.com/photo-1662197480393-2a82030b7b83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
        id: 32,
        name: "Margherita Pizza",
        category: "continental-main",
        type: "veg",
        price: 340,
        description: "Classic pizza topped with mozzarella and basil.",
        image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 33,
        name: "Veg Lasagna",
        category: "continental-main",
        type: "veg",
        price: 390,
        description: "Layers of pasta, vegetables, sauce and cheese.",
        image: "https://images.unsplash.com/photo-1759409117421-1a64af35f118?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },

    // CONTINENTAL MAIN COURSE — NON-VEG
    {
        id: 34,
        name: "Chicken Steak",
        category: "continental-main",
        type: "non-veg",
        price: 480,
        description: "Grilled chicken served with vegetables and sauce.",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
    },
        {
        id: 35,
        name: "Chicken Alfredo",
        category: "continental-main",
        type: "non-veg",
        price: 420,
        description: "Creamy pasta with tender chicken and parmesan.",
        image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 36,
        name: "Fish and Chips",
        category: "continental-main",
        type: "non-veg",
        price: 450,
        description: "Crispy fish served with golden fries.",
        image: "https://images.unsplash.com/photo-1706711053549-f52f73a8960c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },

    // DESSERTS
    {
        id: 37,
        name: "Chocolate Lava Cake",
        category: "desserts",
        type: "veg",
        price: 240,
        description: "Warm chocolate cake with a molten centre.",
        image: "https://images.unsplash.com/photo-1505252929202-c4f39cda4d49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
        id: 38,
        name: "New York Cheesecake",
        category: "desserts",
        type: "veg",
        price: 260,
        description: "Creamy cheesecake with a buttery biscuit base.",
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 39,
        name: "Gulab Jamun",
        category: "desserts",
        type: "veg",
        price: 160,
        description: "Soft milk balls soaked in fragrant sugar syrup.",
        image: "https://images.unsplash.com/photo-1681476747916-8a8fc7e2001e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },
    {
        id: 40,
        name: "Brownie with Ice Cream",
        category: "desserts",
        type: "veg",
        price: 280,
        description: "Chocolate brownie served with creamy vanilla ice cream.",
        image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    }

];
/* ===== MENU & CART FOUNDATION ===== */

const categories = [
    { id: "all", label: "All dishes" },
    { id: "soups", label: "Soups" },
    { id: "beverages", label: "Beverages" },
    { id: "mocktails", label: "Mocktails" },
    { id: "indian", label: "Indian" },
    { id: "continental", label: "Continental" },
    { id: "desserts", label: "Desserts" }
];

let cart = {};
let activeCategory = "all";
let activeDietFilter = "all";
let activeCourseFilter = "all";

const menuContainer = document.getElementById("menu-container");
const signatureFeature = document.getElementById("signature-feature");
const menuCategories = document.getElementById("menu-categories");
const dietFilters = document.getElementById("diet-filters");
const courseFilters = document.getElementById("course-filters");

const cartButton = document.getElementById("cart-button");
const cartPanel = document.getElementById("cart-panel");
const cartOverlay = document.getElementById("cart-overlay");
const closeCartButton = document.getElementById("close-cart");

const cartItemsContainer = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");

const cartSubtotal = document.getElementById("cart-subtotal");
const cartDiscount = document.getElementById("cart-discount");
const cartTotal = document.getElementById("cart-total");

const checkoutButton = document.getElementById("checkout-button");
const finalOrderContainer = document.getElementById("final-order-container");

function formatPrice(price) {
    return "₹" + price.toLocaleString("en-IN");
}

function renderCategories() {
    menuCategories.innerHTML = categories.map(category => `
        <button
            class="category-button ${activeCategory === category.id ? "active" : ""}"
            data-category="${category.id}">
            ${category.label}
        </button>
    `).join("");
}

const menuHighlights = {
    "Veg Lasagna": "CHEF'S PICK",
    "Mango Passion": "SIGNATURE SIP",
    "Brownie with Ice Cream": "SIGNATURE DESSERT"
};

function getMenuHighlightMarkup(item) {
    const label = menuHighlights[item.name];
    return label ? `<span class="menu-highlight">${label}</span>` : "";
}
function getMenuCourseBadge(item) {
    if (item.category.endsWith("-starters")) return "STARTER";
    if (item.category.endsWith("-main")) return "MAIN COURSE";
    return ({
        soups: "SOUP",
        beverages: "BEVERAGE",
        mocktails: "MOCKTAIL",
        desserts: "DESSERT"
    })[item.category] || "FROM OUR MENU";
}

function renderSignatureFeature() {
    const item = menuItems.find(dish => dish.name === "Veg Lasagna");
    if (!item || !signatureFeature) return;

    signatureFeature.innerHTML = `
        <img class="signature-feature-image" src="${item.image}" alt="${item.name}" loading="lazy">
        <div class="signature-feature-copy">
            <p class="signature-feature-eyebrow"><span aria-hidden="true">✦</span> CHEF'S RECOMMENDATION</p>
            <div class="signature-feature-title-row">
                <h3>${item.name}</h3>
                <button class="dish-info-button signature-info-button" type="button" data-signature-details="${item.id}" aria-label="More about ${item.name}" title="More about ${item.name}">i</button>
            </div>
            <p class="signature-feature-description">${item.description} A wonderful way to begin exploring the INDULGENCE menu.</p>
            <div class="signature-feature-meta">
                <span class="course-badge">${getMenuCourseBadge(item)}</span>
                <span class="food-type ${item.type}"><span aria-hidden="true">●</span> ${item.type === "veg" ? "VEG" : "NON-VEG"}</span>
                <span class="signature-feature-price">${formatPrice(item.price)}</span>
            </div>
            <div class="signature-feature-actions">
                <button type="button" data-signature-add="${item.id}">Add to order <span aria-hidden="true">＋</span></button>
            </div>
        </div>`;
}
function getFilteredItems() {
    return menuItems.filter(item => {

        let categoryMatch = false;

        if (activeCategory === "indian") {
            categoryMatch =
                item.category === "indian-starters" ||
                item.category === "indian-main";
        }
        else if (activeCategory === "continental") {
            categoryMatch =
                item.category === "continental-starters" ||
                item.category === "continental-main";
        }
        else {
            categoryMatch = activeCategory === "all" || item.category === activeCategory;
        }

        const dietMatch =
            activeDietFilter === "all" ||
            item.type === activeDietFilter;
        const courseMatch =
            activeCourseFilter === "all" ||
            (activeCourseFilter === "starters" && item.category.endsWith("-starters")) ||
            (activeCourseFilter === "main" && item.category.endsWith("-main"));

        return categoryMatch && dietMatch && courseMatch;
    });
}

function renderMenu() {
    const filteredItems = getFilteredItems();

    if (!filteredItems.length) {
        menuContainer.innerHTML = `
            <p class="empty-menu">No items found in this category.</p>
        `;
        return;
    }

    menuContainer.innerHTML = filteredItems.map(item => {
        const quantity = cart[item.id]?.quantity || 0;

        return `
            <article class="menu-card">
                <img src="${item.image}"
                     alt="${item.name}"
                     class="menu-card-image"
                     loading="lazy">

                <div class="menu-card-content">
                    <div class="menu-card-title-row">
                        <h3>${item.name}</h3>
                        <button class="dish-info-button" type="button" data-dish-details="${item.id}" aria-label="More about ${item.name}" title="More about ${item.name}">i</button>
                    </div>
                    <div class="menu-card-meta">
                        <span class="course-badge">${getMenuCourseBadge(item)}</span>
                        <span class="food-type ${item.type}"><span aria-hidden="true">●</span> ${item.type === "veg" ? "VEG" : "NON-VEG"}</span>
                        ${getMenuHighlightMarkup(item)}
                    </div>

                    <p class="menu-card-description">${item.description}</p>

                    <div class="menu-card-bottom">
                        <span class="menu-price">${formatPrice(item.price)}</span>

                        <div class="quantity-control">
                            <button data-action="remove" data-id="${item.id}">−</button>
                            <span data-menu-quantity="${item.id}">${quantity}</span>
                            <button data-action="add" data-id="${item.id}">+</button>
                        </div>
                    </div>
                </div>
            </article>
        `;
    }).join("");
}

signatureFeature.addEventListener("click", event => {
    const detailButton = event.target.closest("[data-signature-details]");
    if (detailButton) {
        openDishDetails(detailButton.dataset.signatureDetails);
        return;
    }
    const addButton = event.target.closest("[data-signature-add]");
    if (addButton) changeQuantity(addButton.dataset.signatureAdd, 1);
});
/* Category switching */

menuCategories.addEventListener("click", event => {
    const button = event.target.closest(".category-button");
    if (!button) return;

    activeCategory = button.dataset.category;
    renderCategories();
    renderMenu();
});

/* Veg / non-veg filters */

dietFilters.addEventListener("click", event => {
    const button = event.target.closest(".filter-button");
    if (!button) return;

    activeDietFilter = button.dataset.filter;
    dietFilters.querySelectorAll(".filter-button").forEach(btn => {
        btn.classList.toggle("active", btn === button);
    });
    renderMenu();
});

courseFilters.addEventListener("click", event => {
    const button = event.target.closest("[data-course-filter]");
    if (!button) return;

    activeCourseFilter = button.dataset.courseFilter;
    courseFilters.querySelectorAll("[data-course-filter]").forEach(btn => {
        btn.classList.toggle("active", btn === button);
    });
    renderMenu();
});

/* Quantity management */

function changeQuantity(id, change) {
    const item = menuItems.find(food => food.id === Number(id));
    if (!item) return;

    const currentQuantity = cart[id]?.quantity || 0;
    const newQuantity = currentQuantity + change;

    if (newQuantity <= 0) {
        delete cart[id];
    } else {
        cart[id] = {
            ...item,
            quantity: newQuantity
        };
    }

    menuContainer.querySelectorAll(`[data-menu-quantity="${id}"]`).forEach(count => {
        count.textContent = newQuantity > 0 ? newQuantity : 0;
    });

    renderCart();
}

menuContainer.addEventListener("click", event => {
    const detailButton = event.target.closest("[data-dish-details]");
    if (detailButton) {
        openDishDetails(detailButton.dataset.dishDetails);
        return;
    }

    const button = event.target.closest("button[data-action]");
    if (!button) return;

    changeQuantity(
        button.dataset.id,
        button.dataset.action === "add" ? 1 : -1
    );
});

const dishModal = document.getElementById("dish-modal");
const dishDetailContent = document.getElementById("dish-detail-content");
let lastDishTrigger = null;

function openDishDetails(id) {
    const item = menuItems.find(food => food.id === Number(id));
    if (!item) return;

    lastDishTrigger = document.activeElement;
    const category = categories.find(entry => entry.id === item.category)?.label ||
        (item.category.includes("indian") ? "Indian" : "Continental");
    const style = item.type === "veg" ? "Vegetarian" : "Chef's selection";
    const courseStory = item.category === "soups"
        ? "A welcoming first course, designed to warm the palate and ease into the meal."
        : item.category === "mocktails"
            ? "A refreshing glass to savour slowly, bringing a bright pause to the table."
            : item.category === "beverages"
                ? "A considered companion for your meal, whether you are taking a quiet moment or lingering at the table."
                : item.category === "desserts"
                    ? "A graceful final note to the meal, made for a little moment of indulgence."
                    : item.category.endsWith("-starters")
                        ? "An inviting opening to the meal, ideal for sharing or enjoying as your first course."
                        : "A satisfying centrepiece for the table, prepared to be enjoyed at an unhurried pace.";

    dishDetailContent.innerHTML = `
<div class="dish-panel-copy">
            <p class="dish-panel-eyebrow">A SIGNATURE FROM OUR KITCHEN</p>
            <p class="dish-panel-category">${category} <span>·</span> ${style}</p>
            <h2 id="dish-title">${item.name}</h2>
            <p class="dish-panel-description">${item.description}</p>
            <p class="dish-panel-story">${courseStory}</p>
            <div class="dish-panel-note">
                <span class="dish-note-mark">✦</span>
                <p>Prepared to order and finished with the care of our kitchen. Ask our team about today’s seasonal pairing.</p>
            </div>
            <div class="dish-panel-footer">
                <span>${formatPrice(item.price)}</span>
                <button type="button" class="dish-panel-add" data-panel-add="${item.id}">Add to your order <span aria-hidden="true">＋</span></button>
            </div>
        </div>`;

    dishModal.classList.add("is-open");
    dishModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    dishModal.querySelector(".dish-close").focus();
}

function closeDishDetails() {
    dishModal.classList.remove("is-open");
    dishModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    lastDishTrigger?.focus();
}

dishModal.addEventListener("click", event => {
    if (event.target.closest("[data-close-dish]")) {
        closeDishDetails();
        return;
    }
    const addButton = event.target.closest("[data-panel-add]");
    if (addButton) {
        changeQuantity(addButton.dataset.panelAdd, 1);
        closeDishDetails();
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && dishModal.classList.contains("is-open")) {
        closeDishDetails();
    }
});

function getCartSubtotal() {
    return Object.values(cart).reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
}

function getCartItemCount() {
    return Object.values(cart).reduce(
        (count, item) => count + item.quantity,
        0
    );
}

/* Cart item quantity buttons */

cartItemsContainer.addEventListener("click", event => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;

    changeQuantity(
        button.dataset.id,
        button.dataset.action === "add" ? 1 : -1
    );
});

/* Cart drawer open / close */

function openCart() {
    cartPanel.classList.add("active");
    cartOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeCart() {
    cartPanel.classList.remove("active");
    cartOverlay.classList.remove("active");
    document.body.style.overflow = "";
}

cartButton.addEventListener("click", openCart);
closeCartButton.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

/* Checkout button */

checkoutButton.addEventListener("click", () => {
    closeCart();
    renderFinalOrder();

    document.getElementById("checkout").scrollIntoView({
        behavior: "smooth"
    });
});
/* ===== DEALS ===== */

let appliedDeals = { golden: false, silver: false, bronze: false };
let dealMessages = { golden: "", silver: "", bronze: "" };
let dealMessageColors = { golden: "", silver: "", bronze: "" };

function endOfDay() {
    const d = new Date();
    d.setHours(23, 59, 59, 999);
    return d;
}

function endOfWeek() {
    const d = new Date();
    d.setDate(d.getDate() + ((7 - d.getDay()) % 7));
    d.setHours(23, 59, 59, 999);
    return d;
}

function endOfMonth() {
    const d = new Date();
    return new Date(d.getFullYear(), d.getMonth() + 1, 0, 23, 59, 59, 999);
}

const deals = [
    {
        key: "golden",
        title: "Golden Deal",
        frequency: "Monthly",
        tag: "25% OFF",
        description: "25% off one starter + one main-course combo.",
        eligible: "One starter and one main course",
        code: "Gold25Au",
        deadline: endOfMonth()
    },
    {
        key: "silver",
        title: "Silver Deal",
        frequency: "Weekly",
        tag: "20% OFF",
        description: "20% off two soups ordered together.",
        eligible: "Any 2 soups",
        code: "Silv20Ag",
        deadline: endOfWeek()
    },
    {
        key: "bronze",
        title: "Bronze Deal",
        frequency: "Daily",
        tag: "10% OFF",
        description: "10% off beverages for today.",
        eligible: "Any mocktail or beverage",
        code: "Bron10Ct",
        deadline: endOfDay()
    }
];

const dealsContainer = document.getElementById("deals-container");

function timerText(end) {
    let t = Math.max(0, end - Date.now());
    let d = Math.floor(t / 86400000);
    let h = Math.floor(t % 86400000 / 3600000);
    let m = Math.floor(t % 3600000 / 60000);
    let s = Math.floor(t % 60000 / 1000);

    return `${d}d ${String(h).padStart(2, "0")}h ${String(m).padStart(2, "0")}m ${String(s).padStart(2, "0")}s`;
}

function dealEligibility(key) {
    const list = Object.values(cart);

    if (key === "golden") {
        return list.some(x => ["indian-starters", "continental-starters"].includes(x.category) && x.quantity > 0) &&
            list.some(x => ["indian-main", "continental-main"].includes(x.category) && x.quantity > 0)
            ? ""
            : "Add a starter and a main course first.";
    }

    if (key === "silver") {
        return list.filter(x => x.category === "soups")
            .reduce((n, x) => n + x.quantity, 0) >= 2
            ? ""
            : "Add at least two soups first.";
    }

    if (key === "bronze") {
        return list.some(x => ["mocktails", "beverages"].includes(x.category) && x.quantity > 0)
            ? ""
            : "Add a mocktail or beverage first.";
    }

    return "";
}

function renderDeals() {
    dealsContainer.innerHTML = deals.map(d => `
        <article class="deal-card deal-${d.key} ${appliedDeals[d.key] ? "is-applied" : ""}">
            <span class="deal-badge">${d.tag}</span>
            <span class="deal-frequency">${d.frequency}</span>
            <h3>${d.title}</h3>
            <p>${d.description}</p>
            <p><strong>Applies to:</strong> ${d.eligible}</p>
            <p>Expires in: <strong id="timer-${d.key}">${timerText(d.deadline)}</strong></p>

            <div class="deal-code-row">
                <input
                    class="deal-code-input"
                    id="input-code-${d.key}"
                    placeholder="Enter deal code"
                    aria-label="Enter ${d.title} code"
                >
                <button
                    type="button"
                    data-applydeal="${d.key}"
                    class="deal-apply-button"
                >
                    ${appliedDeals[d.key] ? "Applied ✓" : "Apply Code"}
                </button>
            </div>

            <p
                class="deal-message"
                id="deal-msg-${d.key}"
                aria-live="polite"
                style="color:${dealMessageColors[d.key]}"
            >${dealMessages[d.key]}</p>
            <p class="deal-savings" id="deal-savings-${d.key}" aria-live="polite"></p>
        </article>
    `).join("");
}

function updateDealTimers() {
    deals.forEach(d => {
        const el = document.getElementById(`timer-${d.key}`);
        if (el) el.textContent = timerText(d.deadline);
    });
}

function launchDealSprinkles(key) {
    const card = dealsContainer.querySelector(`.deal-card.deal-${key}`);
    if (!card) return;

    const colors = {
        golden: ["#f7d36f", "#e7b84d", "#fff0bd", "#bd8624"],
        silver: ["#f2f4f5", "#cbd2d6", "#ffffff", "#aab2b7"],
        bronze: ["#e7a06a", "#d18149", "#f6c092", "#a85e31"]
    };
    const palette = colors[key] || colors.golden;
    const count = 38;

    for (let index = 0; index < count; index += 1) {
        const side = ["top", "right", "bottom", "left"][index % 4];
        const sprinkle = document.createElement("span");
        const across = 4 + Math.random() * 92;
        const along = 6 + Math.random() * 88;
        let dx = (Math.random() - .5) * 38;
        let dy = (Math.random() - .5) * 38;

        if (side === "top") dy = -(22 + Math.random() * 40);
        if (side === "right") dx = 22 + Math.random() * 40;
        if (side === "bottom") dy = 22 + Math.random() * 40;
        if (side === "left") dx = -(22 + Math.random() * 40);

        sprinkle.className = `deal-sprinkle deal-sprinkle-${key}`;
        sprinkle.style.left = side === "left" ? "0%" : side === "right" ? "100%" : `${across}%`;
        sprinkle.style.top = side === "top" ? "0%" : side === "bottom" ? "100%" : `${along}%`;
        sprinkle.style.setProperty("--sprinkle-x", `${dx}px`);
        sprinkle.style.setProperty("--sprinkle-y", `${dy}px`);
        sprinkle.style.setProperty("--sprinkle-spin", `${Math.round(Math.random() * 280 - 140)}deg`);
        sprinkle.style.setProperty("--sprinkle-delay", `${Math.round(Math.random() * 180)}ms`);
        sprinkle.style.setProperty("--sprinkle-color", palette[Math.floor(Math.random() * palette.length)]);
        sprinkle.style.setProperty("--sprinkle-size", `${1.5 + Math.random() * 2}px`);
        card.appendChild(sprinkle);
        window.setTimeout(() => sprinkle.remove(), 1500);
    }
}
dealsContainer.addEventListener("click", e => {
    const btn = e.target.closest("[data-applydeal]");
    if (!btn) return;

    const key = btn.dataset.applydeal;
    const reason = dealEligibility(key);
    const deal = deals.find(d => d.key === key);
    const entered = document.getElementById(`input-code-${key}`).value.trim();
    let celebrateAppliedDeal = false;

    if (entered !== deal.code) {
        appliedDeals[key] = false;
        dealMessages[key] = "That code is incorrect. Please check the code and try again.";
        dealMessageColors[key] = "#d8a2a2";
    }
    else if (reason) {
        appliedDeals[key] = false;
        dealMessages[key] = reason;
        dealMessageColors[key] = "#d8a2a2";
    }
    else {
        appliedDeals[key] = true;
        dealMessages[key] = deal.code + " applied successfully!";
        celebrateAppliedDeal = true;
        dealMessageColors[key] = "#c9a66b";
    }

    renderDeals();
    if (celebrateAppliedDeal) launchDealSprinkles(key);
    renderCart();

    if (finalOrderContainer.innerHTML.trim()) {
        renderFinalOrder();
    }
});

function getDealSavings(key) {
    if (!appliedDeals[key] || dealEligibility(key)) return 0;

    const items = Object.values(cart);
    if (key === "golden") {
        const starter = items.find(item => ["indian-starters", "continental-starters"].includes(item.category));
        const main = items.find(item => ["indian-main", "continental-main"].includes(item.category));
        return starter && main ? (starter.price + main.price) * .25 : 0;
    }

    if (key === "silver") {
        let need = 2;
        let eligibleTotal = 0;
        for (const soup of items.filter(item => item.category === "soups")) {
            const quantity = Math.min(need, soup.quantity);
            eligibleTotal += quantity * soup.price;
            need -= quantity;
            if (!need) break;
        }
        return eligibleTotal * .2;
    }

    if (key === "bronze") {
        return items
            .filter(item => ["mocktails", "beverages"].includes(item.category))
            .reduce((sum, item) => sum + item.price * item.quantity, 0) * .1;
    }

    return 0;
}

function getDealDiscount() {
    const discount = deals.reduce((sum, deal) => sum + getDealSavings(deal.key), 0);
    return Math.min(discount, getCartSubtotal());
}

function updateDealSavingsDisplays() {
    deals.forEach(deal => {
        const savingsDisplay = document.getElementById(`deal-savings-${deal.key}`);
        const card = dealsContainer.querySelector(`.deal-card.deal-${deal.key}`);
        if (!savingsDisplay || !card) return;

        const isApplied = Boolean(appliedDeals[deal.key]);
        const savings = getDealSavings(deal.key);
        card.classList.toggle("is-applied", isApplied);
        savingsDisplay.classList.toggle("is-visible", isApplied);
        savingsDisplay.textContent = !isApplied
            ? ""
            : savings > 0
                ? `You save ${formatPrice(savings)} with this deal.`
                : "Add eligible items to activate this saving.";
    });
}
function getCartTotal() {
    return Math.max(0, getCartSubtotal() - getDealDiscount());
}

/* ===== CART RENDERING ===== */

function renderCart() {
    const items = Object.values(cart);

    cartCount.textContent = getCartItemCount();

    if (!items.length) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <p>Your cart is empty.</p>
                <p>Discover something delicious!</p>
            </div>`;
    }
    else {
        cartItemsContainer.innerHTML = items.map(i => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${i.name}</h4>
                    <p>${formatPrice(i.price)} × ${i.quantity}</p>
                </div>

                <div class="quantity-control">
                    <button data-action="remove" data-id="${i.id}">−</button>
                    <span>${i.quantity}</span>
                    <button data-action="add" data-id="${i.id}">+</button>
                </div>
            </div>
        `).join("");
    }

    const sub = getCartSubtotal();
    const dis = getDealDiscount();
    const tot = getCartTotal();

    cartSubtotal.textContent = formatPrice(sub);
    cartDiscount.textContent = "−" + formatPrice(dis);
    cartTotal.textContent = formatPrice(tot);

    updateDealSavingsDisplays();
    updateBudgetTracker();
    renderFinalOrder();
}

function renderFinalOrder() {
    const items = Object.values(cart);

    if (!items.length) {
        finalOrderContainer.innerHTML = `
            <div class="order-summary-empty">
                <span aria-hidden="true">✦</span>
                <h3>Your order awaits</h3>
                <p>Add a dish from the menu and your selection will appear here.</p>
            </div>`;
        return;
    }

    const subtotal = getCartSubtotal();
    const discount = getDealDiscount();
    const total = getCartTotal();
    const itemCount = getCartItemCount();

    finalOrderContainer.innerHTML = `
        <article class="final-order-card">
            <header class="order-summary-heading">
                <div>
                    <p class="order-summary-eyebrow">YOUR SELECTION</p>
                    <h3>Order Summary</h3>
                </div>
                <span class="order-item-count">${itemCount} ${itemCount === 1 ? "item" : "items"}</span>
            </header>

            <div class="summary-items">
                ${items.map(item => `
                    <div class="summary-item">
                        <div class="summary-item-details">
                            <span class="summary-item-name">${item.name}</span>
                            <span class="summary-item-quantity">${item.quantity} × ${formatPrice(item.price)}</span>
                        </div>
                        <span class="summary-item-price">${formatPrice(item.price * item.quantity)}</span>
                    </div>
                `).join("")}
            </div>

            <footer class="summary-totals">
                <div class="summary-total-row">
                    <span>Subtotal</span>
                    <span>${formatPrice(subtotal)}</span>
                </div>
                <div class="summary-total-row summary-savings-row">
                    <span>Deal savings</span>
                    <span>${discount > 0 ? `−${formatPrice(discount)}` : formatPrice(0)}</span>
                </div>
                <div class="summary-grand-total">
                    <span>Total payable</span>
                    <span>${formatPrice(total)}</span>
                </div>
            </footer>
        </article>`;
}
/* ===== BUDGET MODAL ===== */

let budgetAmount = null;

const budgetToggle = document.getElementById("budget-toggle");
const budgetOverlay = document.getElementById("budget-modal-overlay");
const budgetClose = document.getElementById("budget-modal-close");
const budgetForm = document.getElementById("budget-form");
const budgetInput = document.getElementById("budget-input");
const removeBudget = document.getElementById("remove-budget");
const budgetSpent = document.getElementById("budget-spent");
const budgetStatus = document.getElementById("budget-status");
const budgetLimitDisplay = document.getElementById("budget-limit");
const budgetBar = document.getElementById("budget-progress-bar");

budgetToggle.addEventListener("click", () =>
    budgetOverlay.classList.add("active")
);

budgetClose.addEventListener("click", () =>
    budgetOverlay.classList.remove("active")
);

budgetOverlay.addEventListener("click", e => {
    if (e.target === budgetOverlay) {
        budgetOverlay.classList.remove("active");
    }
});

budgetForm.addEventListener("submit", e => {
    e.preventDefault();

    const val = Number(budgetInput.value);

    if (!Number.isFinite(val) || val <= 0) {
        alert("Enter a valid budget amount.");
        return;
    }

    budgetAmount = val;
    budgetOverlay.classList.remove("active");
    updateBudgetTracker();
});

removeBudget.addEventListener("click", () => {
    budgetAmount = null;
    budgetInput.value = "";
    budgetOverlay.classList.remove("active");
    updateBudgetTracker();
});

function updateBudgetTracker() {
    if (!budgetSpent) return;

    const spent = getCartTotal();
    const remaining = budgetAmount === null ? null : budgetAmount - spent;
    const usage = budgetAmount === null ? 0 : spent / budgetAmount * 100;
    const reached = budgetAmount !== null && usage >= 100;
    const almost = budgetAmount !== null && usage >= 85 && !reached;

    budgetSpent.textContent = formatPrice(spent);
    budgetLimitDisplay.textContent =
        budgetAmount === null ? "No budget" : formatPrice(budgetAmount);

    if (budgetStatus) {
        budgetStatus.textContent = budgetAmount === null
            ? "Set a budget to see how much is left."
            : reached
                ? remaining < 0
                    ? `₹0 left · ${formatPrice(Math.abs(remaining))} over budget.`
                    : "Budget reached · ₹0 left to spend."
                : almost
                    ? `Almost at your budget · ${formatPrice(remaining)} left.`
                    : `${formatPrice(remaining)} left to spend.`;
        budgetStatus.classList.toggle("is-warning", almost);
        budgetStatus.classList.toggle("is-reached", reached);
    }

    const tracker = document.getElementById("budget-tracker");
    tracker?.classList.toggle("at-limit", reached);
    tracker?.classList.toggle("near-limit", almost);

    if (budgetBar) {
        budgetBar.style.width = `${Math.min(100, usage)}%`;
        budgetBar.style.backgroundColor = reached ? "#b7503e" : almost ? "#d8a847" : "";
    }
}

/* ===== CHECKOUT SUCCESS RECEIPT ===== */

const orderForm = document.getElementById("order-form");
const successArea = document.getElementById("order-success");

const codes = {
    "1": "In120",
    "2": "In21",
    "3": "In32",
    "4": "In412",
    "5": "In55"
};

function escapeText(str) {
    return String(str).replace(/[&<>"']/g, c => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }[c]));
}

orderForm.addEventListener("submit", e => {
    e.preventDefault();

    if (!Object.keys(cart).length) {
        alert("Your cart is empty—add items before confirming.");
        return;
    }

    const customer = document.getElementById("customer-name").value.trim();
    const table = document.getElementById("table-number").value;
    const code = document.getElementById("table-code").value.trim();

    if (!customer || !table || !code) {
        alert("Please fill in all customer details.");
        return;
    }

    if (codes[table] !== code) {
        alert("The table code does not match your selected table.");
        return;
    }

    const subtotal = getCartSubtotal();
    const discount = getDealDiscount();
    const total = getCartTotal();

    const orderId =
        "IND-" + Math.random().toString(36).slice(2, 8).toUpperCase();

    const time = new Date().toLocaleString("en-IN");

    successArea.innerHTML = `
        <article class="confirmation-card">
            <div class="confirmation-ornament" aria-hidden="true"><span>✦</span></div>
            <p class="confirmation-eyebrow">A MOMENT TO SAVOR</p>
            <h2>Order Confirmed</h2>
            <p class="confirmation-thanks">Thank you, <span>${escapeText(customer)}</span>.</p>
            <p class="confirmation-message">Your selection is being prepared with care. We look forward to serving you.</p>

            <div class="confirmation-meta">
                <div><span>ORDER NUMBER</span><strong>${orderId}</strong></div>
                <div><span>YOUR TABLE</span><strong>${table}</strong></div>
                <div><span>CONFIRMED</span><strong>${escapeText(time)}</strong></div>
            </div>

            <div class="confirmation-divider"><span>YOUR ORDER</span></div>
            <div class="confirmation-items">
                ${Object.values(cart).map(i => `
                    <div class="confirmation-item">
                        <div><strong>${escapeText(i.name)}</strong><span>Quantity ${i.quantity}</span></div>
                        <strong>${formatPrice(i.price * i.quantity)}</strong>
                    </div>
                `).join("")}
            </div>

            <div class="confirmation-totals">
                <div><span>Subtotal</span><span>${formatPrice(subtotal)}</span></div>
                <div class="confirmation-discount"><span>Deal savings</span><span>−${formatPrice(discount)}</span></div>
                <div class="confirmation-total"><span>Total paid</span><strong>${formatPrice(total)}</strong></div>
            </div>

            <button id="new-order" class="confirmation-new-order" type="button">Start a New Order <span aria-hidden="true">↗</span></button>
        </article>`;

    successArea.style.display = "block";
    successArea.scrollIntoView({ behavior: "smooth" });

    document.getElementById("new-order").addEventListener("click", () => {
        cart = {};
        appliedDeals = { golden: false, silver: false, bronze: false };

        orderForm.reset();
        successArea.innerHTML = "";
        successArea.style.display = "none";
        finalOrderContainer.innerHTML = "";

        renderMenu();
        renderCart();
        renderDeals();

        document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
    });
});

function updateActiveNavSection() {
    const navSections = ["home", "deals", "menu", "checkout"]
        .map(id => document.getElementById(id))
        .filter(Boolean);
    const navLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];
    const marker = window.innerHeight * .34;
    let current = navSections.find(section => {
        const bounds = section.getBoundingClientRect();
        return bounds.top <= marker && bounds.bottom > marker;
    });

    if (!current && navSections.length) {
        current = navSections.reduce((nearest, section) => {
            const distance = Math.abs(section.getBoundingClientRect().top - marker);
            const nearestDistance = Math.abs(nearest.getBoundingClientRect().top - marker);
            return distance < nearestDistance ? section : nearest;
        });
    }

    navLinks.forEach(link => {
        const isCurrent = current && link.hash === `#${current.id}`;
        link.classList.toggle("active", Boolean(isCurrent));
        if (isCurrent) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
    });
}

window.addEventListener("scroll", updateActiveNavSection, { passive: true });
window.addEventListener("resize", updateActiveNavSection, { passive: true });
/* ===== INITIAL RENDER ===== */

renderCategories();
renderMenu();
renderSignatureFeature();
renderCart();
updateActiveNavSection();
renderDeals();
updateDealSavingsDisplays();
updateBudgetTracker();

setInterval(updateDealTimers, 1000);

/* Four short stock-food scenes crossfade in a cinematic loop. */
const heroScenes = [...document.querySelectorAll(".hero-video")];
let heroSceneIndex = 0;

function playHeroScene(index) {
    if (!heroScenes.length) return;
    heroScenes.forEach((scene, sceneIndex) => {
        scene.classList.toggle("is-active", sceneIndex === index);
        if (sceneIndex !== index) scene.pause();
    });
    const scene = heroScenes[index];
    scene.currentTime = 0;
    const playback = scene.play();
    if (playback) playback.catch(() => {});
    window.setTimeout(() => {
        heroSceneIndex = (index + 1) % heroScenes.length;
        playHeroScene(heroSceneIndex);
    }, 3000);
}

if (heroScenes.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    playHeroScene(0);
}
/* Floating, clustered gold dust behind the page content. */
(() => {
    const canvas = document.getElementById("stardust-canvas");
    const context = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !context) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const palette = ["194, 127, 17", "205, 145, 28", "226, 171, 54", "156, 99, 13", "235, 190, 78"];
    let width = 0;
    let height = 0;
    let particles = [];


    function makeParticle() {
        const hotspot = Math.random() < 0.62;
        const centerX = Math.random() < 0.5 ? width * .34 : width * .78;
        const centerY = Math.random() < 0.5 ? height * .7 : height * .33;
        const spreadX = hotspot ? width * .2 : width * .58;
        const spreadY = hotspot ? height * .18 : height * .58;
        const normal = () => (Math.random() + Math.random() + Math.random() - 1.5) * .72;
        return {
            x: hotspot ? centerX + normal() * spreadX : Math.random() * width,
            y: hotspot ? centerY + normal() * spreadY : Math.random() * height,
            radius: Math.random() < .9 ? .25 + Math.random() * .85 : 1 + Math.random() * .8,
            alpha: .18 + Math.random() * .7,
            phase: Math.random() * Math.PI * 2,
            speed: .12 + Math.random() * .5,
            drift: (Math.random() - .5) * .26,
            color: palette[Math.floor(Math.random() * palette.length)]
        };
    }

    function resize() {
        const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = Math.round(width * ratio);
        canvas.height = Math.round(height * ratio);
        context.setTransform(ratio, 0, 0, ratio, 0, 0);
        const count = Math.max(1400, Math.min(8500, Math.round(width * height / 280)));
        particles = Array.from({ length: count }, makeParticle);
        draw(0);
    }

    function draw(time) {
        context.clearRect(0, 0, width, height);
        const seconds = time / 1000;

        const glow = (x, y, radius, strength) => {
            const gradient = context.createRadialGradient(x, y, 0, x, y, radius);
            gradient.addColorStop(0, `rgba(155, 94, 8, ${strength})`);
            gradient.addColorStop(.44, `rgba(105, 64, 7, ${strength * .42})`);
            gradient.addColorStop(1, "rgba(48, 30, 4, 0)");
            context.fillStyle = gradient;
            context.fillRect(0, 0, width, height);
        };
        glow(width * .28, height * .75, Math.max(width, height) * .44, .2);
        glow(width * .8, height * .36, Math.max(width, height) * .38, .13);

        for (const particle of particles) {
            if (!reduceMotion) {
                particle.x += particle.drift + Math.sin(seconds * .35 + particle.phase) * .12;
                particle.y -= particle.speed;
                if (particle.y < -3) { particle.y = height + 3; particle.x = Math.random() * width; }
                if (particle.x < -3) particle.x = width + 3;
                if (particle.x > width + 3) particle.x = -3;
            }
            const twinkle = .72 + Math.sin(seconds * 1.5 + particle.phase) * .28;
            context.beginPath();
            context.fillStyle = `rgba(${particle.color}, ${particle.alpha * twinkle})`;
            context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            context.fill();
            if (particle.radius > 1.35) {
                context.beginPath();
                context.fillStyle = `rgba(240, 190, 81, ${particle.alpha * .12 * twinkle})`;
                context.arc(particle.x, particle.y, particle.radius * 3.2, 0, Math.PI * 2);
                context.fill();
            }
        }

        if (!reduceMotion) window.requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize, { passive: true });
    resize();
})();
