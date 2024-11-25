const activeSlide = document.querySelector('.services__swiper-slide--active');
const secondSlide = document.querySelector('.services__swiper-slide:nth-child(2)');

function updateElement() {
    activeSlide.classList.add('services__swiper-slide--active');
    if(window.screen.width>=1120) {
        activeSlide.classList.remove('services__swiper-slide--active');
        secondSlide.classList.add('services__swiper-slide--active');
    }
    window.addEventListener('resize', updateElement);
}

updateElement();