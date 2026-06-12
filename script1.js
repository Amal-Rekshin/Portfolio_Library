document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".btn");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
        navLinks.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
        });
    });
});