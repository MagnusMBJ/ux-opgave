document.addEventListener("DOMContentLoaded", function () {
    let cartCounter = 0;
    const cartCounterElement = document.getElementById("cart-counter");
    const ctaButtons = document.querySelectorAll(".beer-cta");

    ctaButtons.forEach(button => {
        button.addEventListener("click", function () {
            cartCounter++; // Increase count
            cartCounterElement.innerText = cartCounter; // Update counter

            // Show counter if it's hidden
            if (cartCounter > 0) {
                cartCounterElement.style.display = "inline-block";
            }
        });
    });
});
