
const carousel = document.querySelector(".carousel");
const controls = document.querySelector(".carousel-controls");

const cards = carousel.querySelectorAll(
    ".r1, .r2, .r3"
);

// Create one dot for each review card
cards.forEach((card, index) => {
    const dot = document.createElement("button");

    dot.type = "button";
    dot.setAttribute("aria-label", `Go to review ${index + 1}`);

    dot.addEventListener("click", () => {
        carousel.scrollTo({
            left: card.offsetLeft - carousel.offsetLeft,
            behavior: "smooth"
        });
    });

    controls.appendChild(dot);
});

const dots = controls.querySelectorAll("button");

// Highlight the dot for the visible card
function updateDots() {
    let activeIndex = 0;
    let smallestDistance = Infinity;

    cards.forEach((card, index) => {
        const distance = Math.abs(
            card.getBoundingClientRect().left -
            carousel.getBoundingClientRect().left
        );

        if (distance < smallestDistance) {
            smallestDistance = distance;
            activeIndex = index;
        }
    });

    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === activeIndex);
    });
}

// Update dots whenever the carousel scrolls
carousel.addEventListener("scroll", updateDots);

updateDots();
