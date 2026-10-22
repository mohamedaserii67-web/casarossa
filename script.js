const dishes = [
  { id: 1, name: "Spaghetti Carbonara", category: "pasta", label: "Roman classic", price: 13, description: "Silky egg yolk sauce, pecorino Romano, crispy guanciale and cracked black pepper.", image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=85" },
  { id: 2, name: "Tagliatelle al Ragù", category: "pasta", label: "House favourite", price: 15, description: "Ribbon pasta with slow-cooked beef ragù, red wine, herbs and Parmigiano.", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=85" },
  { id: 3, name: "Penne Arrabbiata", category: "pasta", label: "A little spicy", price: 11, description: "Penne tossed with garlic, chilli, tomato and fresh Italian parsley.", image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=85" },
  { id: 4, name: "Fettuccine Alfredo", category: "pasta", label: "Creamy comfort", price: 13, description: "Fettuccine folded through a rich butter, cream and Parmesan sauce.", image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=800&q=85" },
  { id: 5, name: "Ravioli Ricotta", category: "pasta", label: "Handmade", price: 16, description: "Pillowy ricotta and spinach ravioli with sage butter and shaved Parmesan.", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=85" },
  { id: 6, name: "Pesto Genovese", category: "pasta", label: "Fresh & fragrant", price: 12, description: "Basil pesto, toasted pine nuts, garlic, extra virgin olive oil and Parmesan.", image: "https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?auto=format&fit=crop&w=800&q=85" },
  { id: 7, name: "Lasagna della Casa", category: "pasta", label: "Oven baked", price: 16, description: "Layers of pasta, slow-cooked ragù, creamy béchamel and golden cheese.", image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=800&q=85" },
  { id: 8, name: "Linguine ai Gamberi", category: "pasta", label: "From the coast", price: 18, description: "Linguine with prawns, cherry tomatoes, garlic, lemon and parsley.", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=85" },

  { id: 9, name: "Margherita", category: "pizza", label: "The original", price: 10, description: "San Marzano tomato, fior di latte mozzarella, basil and olive oil.", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=85" },
  { id: 10, name: "Pepperoni", category: "pizza", label: "Crowd pleaser", price: 13, description: "Tomato, mozzarella and generous slices of spicy pepperoni.", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=85" },
  { id: 11, name: "Quattro Formaggi", category: "pizza", label: "Cheese lover", price: 14, description: "Mozzarella, gorgonzola, fontina and Parmesan on a crisp base.", image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=800&q=85" },
  { id: 12, name: "Diavola", category: "pizza", label: "Hot & bold", price: 14, description: "Spicy salami, mozzarella, tomato and a little chilli kick.", image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=85" },
  { id: 13, name: "Prosciutto e Rucola", category: "pizza", label: "Fresh finish", price: 15, description: "Parma-style ham, mozzarella, peppery rocket and Parmesan shavings.", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=85" },
  { id: 14, name: "Funghi", category: "pizza", label: "Earthy & savoury", price: 12, description: "Roasted mushrooms, mozzarella, garlic, thyme and truffle oil.", image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=85" },
  { id: 15, name: "Ortolana", category: "pizza", label: "Garden fresh", price: 12, description: "Seasonal roasted vegetables, tomato, mozzarella and fresh basil.", image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=85" },
  { id: 16, name: "Burrata e Pomodoro", category: "pizza", label: "Creamy centre", price: 16, description: "Tomato, creamy burrata, basil leaves and extra virgin olive oil.", image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=800&q=85" },

  { id: 17, name: "Tiramisù", category: "dessert", label: "Italian icon", price: 7, description: "Espresso-soaked ladyfingers, mascarpone cream and cocoa dusting.", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=85" },
  { id: 18, name: "Panna Cotta", category: "dessert", label: "Silky & soft", price: 6, description: "Vanilla panna cotta with a bright seasonal berry coulis.", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=85" },
  { id: 19, name: "Cannoli Siciliani", category: "dessert", label: "Sicilian treat", price: 6, description: "Crisp pastry shells filled with sweet ricotta and pistachio.", image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=800&q=85" },
  { id: 20, name: "Gelato Trio", category: "dessert", label: "Three scoops", price: 5, description: "Three scoops of house-style gelato. Ask for today's flavours.", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=85" },
  { id: 21, name: "Affogato", category: "dessert", label: "Coffee & cream", price: 5, description: "Vanilla gelato drowned in a freshly pulled shot of espresso.", image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=85" },
  { id: 22, name: "Lemon Tart", category: "dessert", label: "Zesty delight", price: 6, description: "Buttery pastry, bright lemon curd and a delicate sugar dusting.", image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=800&q=85" },
  { id: 23, name: "Chocolate Fondant", category: "dessert", label: "Warm & rich", price: 7, description: "Warm chocolate cake with a molten centre and vanilla gelato.", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=85" },
  { id: 24, name: "Crostata di Frutta", category: "dessert", label: "Seasonal", price: 6, description: "Italian fruit tart with vanilla pastry cream and fresh seasonal fruit.", image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=800&q=85" }
];

// Replace the example prices/currency, images and descriptions with your real menu before publishing.
const grid = document.querySelector("#dish-grid");
const searchInput = document.querySelector("#dish-search");
const emptyMessage = document.querySelector("#empty-message");
const filterButtons = [...document.querySelectorAll(".filter")];
const dialog = document.querySelector("#dish-dialog");
let activeCategory = "all";
let searchTerm = "";

const money = (price) => `${price} €`;
const categoryName = (category) => ({ pasta: "Pasta", pizza: "Pizza", dessert: "Dolci" }[category] || category);

function renderDishes() {
  const filtered = dishes.filter((dish) => {
    const matchesCategory = activeCategory === "all" || dish.category === activeCategory;
    const haystack = `${dish.name} ${dish.description} ${dish.label} ${dish.category}`.toLowerCase();
    return matchesCategory && haystack.includes(searchTerm);
  });

  grid.innerHTML = filtered.map((dish) => `
    <article class="dish-card" tabindex="0" role="button" data-id="${dish.id}" aria-label="View ${dish.name} details">
      <div class="dish-photo-wrap">
        <img class="dish-photo" src="${dish.image}" alt="${dish.name}" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80'">
        <span class="dish-tag">${dish.label}</span>
        <span class="dish-plus" aria-hidden="true">+</span>
      </div>
      <div class="dish-info">
        <div class="dish-title-row"><h3 class="dish-title">${dish.name}</h3><span class="dish-price">${money(dish.price)}</span></div>
        <p class="dish-description">${dish.description}</p>
      </div>
    </article>
  `).join("");

  emptyMessage.hidden = filtered.length !== 0;
}

function openDish(id) {
  const dish = dishes.find((item) => item.id === Number(id));
  if (!dish) return;
  document.querySelector("#dialog-image").src = dish.image;
  document.querySelector("#dialog-image").alt = dish.name;
  document.querySelector("#dialog-category").textContent = `${categoryName(dish.category)} · ${dish.label}`;
  document.querySelector("#dialog-title").textContent = dish.name;
  document.querySelector("#dialog-description").textContent = dish.description;
  document.querySelector("#dialog-price").textContent = money(dish.price);
  if (typeof dialog.showModal === "function") dialog.showModal();
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    filterButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    renderDishes();
  });
});

searchInput.addEventListener("input", () => {
  searchTerm = searchInput.value.trim().toLowerCase();
  renderDishes();
});

grid.addEventListener("click", (event) => {
  const card = event.target.closest(".dish-card");
  if (card) openDish(card.dataset.id);
});
grid.addEventListener("keydown", (event) => {
  const card = event.target.closest(".dish-card");
  if (card && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    openDish(card.dataset.id);
  }
});

document.querySelectorAll(".dialog-close, .dialog-done").forEach((button) => {
  button.addEventListener("click", () => dialog.close());
});
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

const menuToggle = document.querySelector("#menu-toggle");
const nav = document.querySelector("#nav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "×" : "☰";
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  menuToggle.textContent = "☰";
}));

document.querySelector("#year").textContent = new Date().getFullYear();
renderDishes();
