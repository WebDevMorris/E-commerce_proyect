document.addEventListener("DOMContentLoaded", () => {
     const modeToggle = document.getElementById("modeToggle");
     const modeIcon = document.getElementById("modeIcon");
     const sidebar = document.getElementById("sidebar");
     const hamburgerMenu = document.querySelector(".hamburger-menu");
     const cartCountDisplay = document.createElement("span");
     cartCountDisplay.id = "cart-count";
     document.querySelector(".cart").appendChild(cartCountDisplay);
     let cart = JSON.parse(localStorage.getItem("cart")) || [];
     let darkMode = false;
 
     function updateCartCount() {
         cartCountDisplay.textContent = `(${cart.length})`;
     }
 
     modeToggle.addEventListener("click", () => {
         darkMode = !darkMode;
         if (darkMode) {
             document.body.style.backgroundColor = "#16181c";
             document.body.style.color = "#cfd7e3";
             modeIcon.textContent = "☀️";
         } else {
             document.body.style.backgroundColor = "#fcebeb";
             document.body.style.color = "#0a0202";
             modeIcon.textContent = "🌙";
         }
     });
 
     hamburgerMenu.addEventListener("click", () => {
         if (sidebar.style.left === "0px") {
             sidebar.style.left = "-200px";
         } else {
             sidebar.style.left = "0px";
         }
     });
 
     document.querySelectorAll(".product button").forEach(button => {
         button.addEventListener("click", (event) => {
             const product = event.target.parentElement;
             const productName = product.querySelector("h3").textContent;
             cart.push(productName);
             localStorage.setItem("cart", JSON.stringify(cart));
             console.log("Added to cart:", productName);
             alert(`${productName} added to cart!`);
             updateCartCount();
         });
     });
 
     updateCartCount();
 });
 