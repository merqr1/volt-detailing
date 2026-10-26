
// Plynulé zobrazenie sekcií pri posúvaní stránky
const sections = document.querySelectorAll(
    ".hero-content, .hero-visual, .service-card"
);

sections.forEach((section) => {
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
});

// Základná kontrola funkčných interných odkazov
document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
        const target = document.querySelector(link.getAttribute("href"));

        if (target) {
            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});
