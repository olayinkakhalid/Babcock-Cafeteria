AOS.init();

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
    const bookBtn = document.querySelectorAll(".book-btn");
    const bookingPage = document.querySelector(".bookingpage");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    bookingPage.forEach((bookingPage) => {
        bookingPage.addEventListener("click", () => {
            window.location.href = 'bookingPage.html';
        });
    });

    bookBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            window.location.href = 'bookingPage.html';
        });
    });
});