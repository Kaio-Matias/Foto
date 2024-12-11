document.addEventListener("DOMContentLoaded", () => {
    const carouselTrack = document.querySelector(".carousel-track");
    const images = document.querySelectorAll(".carousel-img");
    const totalImages = images.length / 2; // Consideramos apenas o conjunto original

    // Copia e duplica as imagens para criar o loop infinito
    carouselTrack.innerHTML += carouselTrack.innerHTML;

    let currentX = 0;

    function scrollCarousel() {
        currentX -= 0.5; // Move 0.5px por vez para garantir suavidade e lentidão
        if (Math.abs(currentX) >= carouselTrack.offsetWidth / 2) {
            // Quando o carrossel chega na metade (imagens duplicadas), reinicia
            currentX = 0;
        }
        carouselTrack.style.transform = `translateX(${currentX}px)`;
        requestAnimationFrame(scrollCarousel); // Continua o loop
    }

    scrollCarousel(); // Inicia a animação
});