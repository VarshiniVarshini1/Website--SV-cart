
// script.js
const products = [
  { id: 1, name: "Product 1", price: 10.0, image: "img1.jpg" },
  { id: 2, name: "Product 2", price: 15.0, image: "img2.jpg" }
];
const productSection = document.querySelector('.product-section');
products.forEach(product => {
  const productCard = document.createElement('div');
  productCard.className = 'product-card';
  productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <p>$${product.price}</p>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;
  productSection.appendChild(productCard);
});
let cart = [];
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  alert(`${product.name} has been added to your cart!`);
}
    