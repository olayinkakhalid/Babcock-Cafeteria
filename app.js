AOS.init();

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
    const bookBtn = document.querySelectorAll(".book-btn");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    ulLink.forEach((link) => {
        link.addEventListener("click", () => {
            window.location.href = 'bookingPage.html';
        });
    });

    bookBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            window.location.href = 'bookingPage.html';
        });
    });
});