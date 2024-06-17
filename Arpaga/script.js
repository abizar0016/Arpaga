let slideIndex = 0;

function showSlides(n) {
    const slides = document.querySelectorAll(".slider img");
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = n;
    }
    const offset = -slideIndex * 100;
    document.querySelector(".slider").style.transform = `translateX(${offset}%)`;
}

function plusSlides(n) {
    showSlides(slideIndex + n);
}

document.querySelector(".prev").addEventListener("click", () => plusSlides(-0.1));
document.querySelector(".next").addEventListener("click", () => plusSlides(0.1));

showSlides(slideIndex);
