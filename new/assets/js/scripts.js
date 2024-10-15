document.addEventListener("DOMContentLoaded", type);
document.addEventListener('DOMContentLoaded', function() {
    const fadeInElements = document.querySelectorAll('.fade-in');
});

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevArrow = document.querySelector('.prev');
const nextArrow = document.querySelector('.next');

let currentIndex = 0;
const totalSlides = slides.length;
const slideWidth = slider.clientWidth;

function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    updateDots(index);
}

function updateDots(index) {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

// Auto-slide every 3 seconds
let autoSlide = setInterval(nextSlide, 3000);

function stopAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 3000);
}

// Event listeners
nextArrow.addEventListener('click', () => {
    nextSlide();
    stopAutoSlide();
});

prevArrow.addEventListener('click', () => {
    prevSlide();
    stopAutoSlide();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
        stopAutoSlide();
    });
});

// Initialize the first slide
showSlide(currentIndex);

    // Function to flip card
    function flipCard(cardId) {
        const card = document.getElementById(cardId).querySelector('.card');
        card.classList.toggle('flip');
    }


