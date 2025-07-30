// scripts.js

// Dummy data
const products = [
  { id: 1, name: 'Running Shoes', category: 'shoes', price: 2999, image: 'Moving img3.jpg' },
  { id: 2, name: 'Training T-Shirt', category: 'clothing', price: 999, image: 'https://via.placeholder.com/200x180?text=Shirt' },
  { id: 3, name: 'Casual Sneakers', category: 'shoes', price: 2499, image: 'https://via.placeholder.com/200x180?text=Shoes+2' },
  { id: 4, name: 'Hoodie', category: 'clothing', price: 1999, image: 'https://via.placeholder.com/200x180?text=Hoodie' },
  { id: 5, name: 'Sports Shorts', category: 'clothing', price: 799, image: 'https://via.placeholder.com/200x180?text=Shorts' },
];

let filteredProducts = [...products];

const productList = document.getElementById("product-list");
const categorySelect = document.getElementById("category");
const sortSelect = document.getElementById("sort");

function renderProducts(data) {
  productList.innerHTML = "";
  data.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h4>${p.name}</h4>
      <p>₹${p.price}</p>
    `;
    productList.appendChild(card);
  });
}

categorySelect.addEventListener("change", () => {
  filterAndSort();
});

sortSelect.addEventListener("change", () => {
  filterAndSort();
});

function filterAndSort() {
  const selectedCategory = categorySelect.value;
  const selectedSort = sortSelect.value;

  filteredProducts = products.filter(p => {
    return selectedCategory === "all" || p.category === selectedCategory;
  });

  if (selectedSort === "price-asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (selectedSort === "price-desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  renderProducts(filteredProducts);
}

renderProducts(products);
