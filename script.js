document.addEventListener("DOMContentLoaded", () => {
     const modeToggle = document.getElementById("modeToggle");
     const modeIcon = document.getElementById("modeIcon");
     const sidebar = document.getElementById("sidebar");
     const hamburgerMenu = document.querySelector(".hamburger-menu");
     const cartCountDisplay = document.getElementById("cart-count");
     let cart = JSON.parse(localStorage.getItem("cart")) || [];
     let darkMode = false;
 
     // Update the cart count on the page
     function updateCartCount() {
         cartCountDisplay.textContent = cart.length;
     }
 
     // Mode toggle functionality
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
 
     // Hamburger menu functionality
     hamburgerMenu.addEventListener("click", () => {
         if (sidebar.style.left === "0px") {
             sidebar.style.left = "-200px";
         } else {
             sidebar.style.left = "0px";
         }
     });
 
     // Add products to the cart and update local storage
     document.querySelectorAll(".product button").forEach(button => {
         button.addEventListener("click", (event) => {
             const product = event.target.parentElement;
             const productName = product.querySelector("h3").textContent;
             cart.push(productName);
             localStorage.setItem("cart", JSON.stringify(cart)); // Save cart to localStorage
             console.log("Added to cart:", productName);
             alert(`${productName} added to cart!`);
             updateCartCount(); // Update the cart count after adding a product
         });
     });
 
     // Initial cart count update
     updateCartCount();
 });