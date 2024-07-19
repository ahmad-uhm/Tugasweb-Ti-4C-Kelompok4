let slideIndex = 0;
let slides;
let autoSlideInterval;

function showSlides() {
    slides = document.querySelector('.slides');
    const totalSlides = slides.querySelectorAll('img').length;

    if (slideIndex >= totalSlides) { 
        slideIndex = 0; 
    }
    if (slideIndex < 0) { 
        slideIndex = totalSlides - 1; 
    }

    const offset = -slideIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;

    // Remove active class from all slides
    slides.querySelectorAll('img').forEach(img => img.classList.remove('active-slide'));

    // Add active class to the current slide
    slides.querySelectorAll('img')[slideIndex].classList.add('active-slide');
}

function nextSlide() {
    slideIndex++;
    showSlides();
    resetAutoSlide();
}

function prevSlide() {
    slideIndex--;
    showSlides();
    resetAutoSlide();
}

function autoSlide() {
    slideIndex++;
    showSlides();
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(autoSlide, 5000); // Change slides every 5 seconds
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides();
    autoSlideInterval = setInterval(autoSlide, 5000); // Change slides every 5 seconds
});
