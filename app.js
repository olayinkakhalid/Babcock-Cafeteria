AOS.init();

document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
    const bookBtn = document.querySelectorAll(".book-btn");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    
    bookBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            window.location.href = 'bookingPage.html';
        });
    });
    const breakfast = document.querySelector(".breakfast-section");
    const lunch = document.querySelector(".lunch-section");
    const dinner = document.querySelector(".dinner-section");

    const bArrow = document.querySelector(".arrow-breakfast");
    const lArrow = document.querySelector(".arrow-lunch");
    const dArrow = document.querySelector(".arrow-dinner");


    function showLunch() {
        breakfast.classList.add("hide");
        lunch.classList.add("show");

        dinner.classList.remove("show");
    }

    function showDinner() {
        lunch.classList.add("hide");
        dinner.classList.add("show");
    }

    function showBreakfast() {
        dinner.classList.remove("show");

        // lunch.classList.remove("hide");
        breakfast.classList.remove("hide");
    }


    bArrow.addEventListener("click", showLunch);

    lArrow.addEventListener("click", showDinner);

    dArrow.addEventListener("click", showBreakfast);

});
