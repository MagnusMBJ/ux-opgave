// Show popup after 30 seconds
setTimeout(function() {
    document.getElementById("newsletter-popup").style.display = "flex";
}, 7000); // 30 seconds

// Close popup function
function closePopup() {
    document.getElementById("newsletter-popup").style.display = "none";
}

window.onload = function() {
    document.querySelector("header").scrollIntoView({ behavior: "smooth" });
};
document.addEventListener("DOMContentLoaded", function () {
    const beerTrack = document.querySelector(".carousel-track");
    let beerItems = Array.from(document.querySelectorAll(".beer-item"));
    const leftBtn = document.querySelector(".left-btn");
    const rightBtn = document.querySelector(".right-btn");

    let isAnimating = false;

    function updateScaling() {
        beerItems.forEach((item, index) => {
            const distance = Math.abs(index - 2);
            const image = item.querySelector("img");
            const name = item.querySelector(".beer-name");

            let scale, size, fontSize;

            if (distance === 0) {
                scale = 1;
                size = "200px";
                fontSize = "18px";
            } else if (distance === 1) {
                scale = 0.9;
                size = "160px";
                fontSize = "16px";
            } else {
                scale = 0.8;
                size = "130px";
                fontSize = "14px";
            }

            // Smooth transition for scaling and size changes
            image.style.transition = "transform 0.5s ease-in-out, width 0.5s ease-in-out";
            name.style.transition = "font-size 0.5s ease-in-out";

            image.style.transform = `scale(${scale})`;
            image.style.width = size;
            name.style.fontSize = fontSize;
        });
    }

    function updateCarousel(direction) {
        if (isAnimating) return;
        isAnimating = true;

        // Slide animation
        beerTrack.style.transition = "transform 0.5s ease-in-out";
        beerTrack.style.transform = `translateX(${direction === "left" ? 170 : -170}px)`;

        setTimeout(() => {
            beerTrack.style.transition = "none";

            if (direction === "left") {
                const lastItem = beerItems.pop();
                beerItems.unshift(lastItem);
            } else {
                const firstItem = beerItems.shift();
                beerItems.push(firstItem);
            }

            // Reset track position and update scaling
            beerTrack.innerHTML = '';
            beerItems.forEach(item => beerTrack.appendChild(item));
            beerTrack.style.transform = "translateX(0)";

            updateScaling(); // Make scaling dynamic

            isAnimating = false;
        }, 500);
    }

    leftBtn.addEventListener("click", () => updateCarousel("left"));
    rightBtn.addEventListener("click", () => updateCarousel("right"));

    updateScaling(); // Initialize scaling on load
});
