function toggleMenu() {
    let menu = document.querySelector(".nav-links");
    menu.classList.toggle("active");

    // Apply animation when opening
    if (menu.classList.contains("active")) {
        menu.style.opacity = "1";
        menu.style.transform = "translateY(0)";
    } else {
        menu.style.opacity = "0";
        menu.style.transform = "translateY(-20px)";
    }
}

// Auto-close menu when clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        let menu = document.querySelector(".nav-links");
        menu.classList.remove("active");

        // Animate closure
        menu.style.opacity = "0";
        menu.style.transform = "translateY(-20px)";
    });
});