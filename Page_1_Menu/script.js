// ---- Menu Data (17 items across 5 categories) ----
const menuItems = [
  { 
    name: "Paneer Kebab", 
    price: 120, 
    category: "Starters", 
    image: "https://images.unsplash.com/photo-1680359870402-5cc2954e50c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuZWVyJTIwa2ViYWJ8ZW58MHx8MHx8fDA%3D", 
    isVeg: true, 
    desc: "Cottage cheese cubes coal-grilled with aromatic spices." 
  },
  { 
    name: "Corn Fingers", 
    price: 130, 
    category: "Starters", 
    image: "https://images.unsplash.com/photo-1735357801861-e4ef296ff0aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29ybiUyMGZpbmdlcnN8ZW58MHx8MHx8fDA%3D",  
    isVeg: true,  
    desc: "Baby corns in crispy batter, fried and seasoned with chaat masala." 
  },
  { 
    name: "Dragon Chicken", 
    price: 150, 
    category: "Starters",    
    image: "https://images.unsplash.com/photo-1621783166120-d044fe456f4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHJhZ29uJTIwY2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D",
    isVeg: false, 
    desc: "Crispy chicken tossed in a fiery Korean gochujang glaze." 
  },
  { 
    name: "Paneer Butter Masala",
    price: 170, 
    category: "Main Course", 
    image: "https://images.unsplash.com/photo-1708793873401-e8c6c153b76a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGFuZWVyJTIwQnV0dGVyJTIwTWFzYWxhfGVufDB8fDB8fHww", 
    isVeg: true,  
    desc: "Cottage cheese in a rich, velvety tomato-butter gravy." 
  },
  { 
    name: "Butter Chicken", 
    price: 200, 
    category: "Main Course", 
    image: "https://images.unsplash.com/photo-1728910107534-e04e261768ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QnV0dGVyJTIwQ2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D", 
    isVeg: false, 
    desc: "Tender chicken in a silky tomato and cream sauce." 
  },
  { 
    name: "Dal Tadka", 
    price: 130, 
    category: "Main Course", 
    image: "https://images.unsplash.com/photo-1626500154744-e4b394ffea16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGFsJTIwVGFka2F8ZW58MHx8MHx8fDA%3D", 
    isVeg: true,  
    desc: "Yellow lentils tempered with cumin, garlic, and dried red chilli." 
  },
  { 
    name: "Mutton Pepper Masala", 
    price: 260, 
    category: "Main Course", 
    image: "https://images.unsplash.com/photo-1659716306756-13cae19333b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TXV0dG9uJTIwUGVwcGVyJTIwTWFzYWxhfGVufDB8fDB8fHww", 
    isVeg: false, 
    desc: "Kashmiri slow-braised mutton in fragrant spices." 
  },
  { 
    name: "Paneer Biryani", 
    price: 200, 
    category: "Biryani",     
    image: "https://images.unsplash.com/photo-1691171047462-66025ecd5efc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGFuZWVyJTIwQmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D", 
    isVeg: true,  
    desc: "Fragrant basmati layered with spiced cottage cheese." 
  },
  { 
    name: "Chicken Biryani", 
    price: 250, 
    category: "Biryani",    
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2hpY2tlbiUyMEJpcnlhbml8ZW58MHx8MHx8fDA%3D", 
    isVeg: false, 
    desc: "Hyderabadi dum biryani with Basmati rice and chicken." 
  },
  { 
    name: "Mutton Biryani", 
    price: 350, 
    category: "Biryani",     
    image: "https://images.unsplash.com/photo-1691171047312-d809eccef46d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TXV0dG9uJTIwQmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D",
    isVeg: false, 
    desc: "Slow-cooked mutton on saffron-kissed basmati rice." 
  },
  { 
    name: "Gulab Jamun", 
    price: 70,  
    category: "Desserts",    
    image: "https://media.istockphoto.com/id/163064596/photo/gulab-jamun.webp?a=1&b=1&s=612x612&w=0&k=20&c=F_5_AgCdrsecO13W-wiuCZAwYZPBpN3UETTyYtQQlLM=", 
    isVeg: true,  
    desc: "Soft milk-solid dumplings soaked in rose-cardamom syrup." 
  },
  { 
    name: "Chocolate Brownie",   
    price: 80,  
    category: "Desserts",   
    image: "https://images.unsplash.com/photo-1636743715220-d8f8dd900b87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hvY29sYXRlJTIwYnJvd25pZXxlbnwwfHwwfHx8MA%3D%3D", 
    isVeg: true,  
    desc: "Warm fudgy brownie served with a scoop of vanilla ice cream." 
  },
  { 
    name: "Mango Kulfi", 
    price: 90,  
    category: "Desserts",    
    image: "https://images.unsplash.com/photo-1622887499962-15021674729d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TWFuZ28lMjBLdWxmaXxlbnwwfHwwfHx8MA%3D%3D",
    isVeg: true,  
    desc: "Dense, creamy Indian ice cream with Alphonso mango pulp." 
  },
  { 
    name: "Mint Mojito", 
    price: 70,  
    category: "Beverages",   
    image: "https://images.unsplash.com/photo-1696957024753-6165d1fb2b12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWludCUyME1vaml0b3xlbnwwfHwwfHx8MA%3D%3D",
    isVeg: true,  
    desc: "Fizzy lime and mint cooler — perfect with any meal." 
  },
  { 
    name: "Mango Lassi", 
    price: 80,  
    category: "Beverages",   
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFuZ28lMjBMYXNzaXxlbnwwfHwwfHx8MA%3D%3D",
    isVeg: true,  
    desc: "Thick yogurt blended with fresh mango pulp and cardamom." 
  },
  { 
    name: "Filter Coffee", 
    price: 50,  
    category: "Beverages",   
    image: "https://media.istockphoto.com/id/1589593378/photo/filter-coffee.webp?a=1&b=1&s=612x612&w=0&k=20&c=LfgSpkAj_Av4ukZYyCrxwwYclclIaJNtbLTqVPKPCQw=", 
    isVeg: true,  
    desc: "South Indian strong decoction coffee with frothy milk." 
  },
];

// ---- Cart: { name, price, qty } ----
const cart = {};

// ---- Render cards for a given category ----
function renderCards(category) {
  const grid = document.getElementById("cardGrid");
  const items = category === "All" ? menuItems : menuItems.filter(i => i.category === category);
  grid.innerHTML = "";

  items.forEach(item => {
    const inCart = cart[item.name];
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img class="card-img" src="${item.image}" alt="${item.name}" />
      <div class="card-body">
        <div class="card-title-row">
          <span class="card-name">${item.name}</span>
          <span class="veg-dot ${item.isVeg ? 'veg' : 'nonveg'}" title="${item.isVeg ? 'Veg' : 'Non-Veg'}"></span>
        </div>
        <p class="card-desc">${item.desc}</p>
        <div class="card-footer">
          <span class="card-price">₹${item.price}</span>
          <button class="add-btn" onclick="addToCart('${item.name}', ${item.price}, this)">
            ${inCart ? `In Cart (${inCart.qty})` : "Add to Cart"}
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ---- Add to cart ----
function addToCart(name, price, btn) {
  if (cart[name]) {
    cart[name].qty++;
  } else {
    cart[name] = { price, qty: 1 };
  }

  // Button feedback
  btn.textContent = "Added! ✓";
  btn.classList.add("added");
  setTimeout(() => {
    btn.textContent = `In Cart (${cart[name].qty})`;
    btn.classList.remove("added");
  }, 900);

  updateCartBar();
}

// ---- Update sticky cart bar ----
function updateCartBar() {
  const bar = document.getElementById("cartBar");
  const names = Object.keys(cart);
  if (names.length === 0) { bar.style.display = "none"; return; }

  const totalQty = names.reduce((s, k) => s + cart[k].qty, 0);
  const totalAmt = names.reduce((s, k) => s + cart[k].price * cart[k].qty, 0);

  document.getElementById("cartCount").textContent = totalQty;
  document.getElementById("cartTotal").textContent = totalAmt;
  bar.style.display = "block";

  // Refresh breakdown if open
  const details = document.getElementById("cartDetails");
  if (details.classList.contains("open")) renderBreakdown();
}

// ---- Toggle cart breakdown ----
let cartOpen = false;
function toggleCart() {
  cartOpen = !cartOpen;
  const details = document.getElementById("cartDetails");
  const hint    = document.getElementById("cartHint");
  details.classList.toggle("open", cartOpen);
  hint.textContent = cartOpen ? "▼ Hide details" : "▲ View details";
  if (cartOpen) renderBreakdown();
}

function renderBreakdown() {
  const details = document.getElementById("cartDetails");
  details.innerHTML = Object.keys(cart).map(name =>
    `<div class="cart-row">
       <span>${name} × ${cart[name].qty}</span>
       <span style="display:flex; align-items:center; gap:0.6rem;">
         ₹${cart[name].price * cart[name].qty}
         <button class="remove-btn" onclick="removeFromCart('${name}')">✕</button>
       </span>
     </div>`
  ).join("");
}

function removeFromCart(name) {
  delete cart[name];
  updateCartBar();
  // Re-render breakdown if still open
  if (cartOpen) renderBreakdown();
  // Refresh card buttons to reflect removal
  renderCards(document.querySelector(".filter-btn.active").dataset.cat);
}

// ---- Filter buttons ----
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderCards(btn.dataset.cat);
  });
});

// ---- Initial render ----
renderCards("All");
