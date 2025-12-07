document.addEventListener('DOMContentLoaded', function() {
    const carouselElement = document.querySelector('.elementor-element-e26ea01 .swiper');

    if (carouselElement && typeof Swiper !== 'undefined') {
        new Swiper(carouselElement, {
            slidesPerView: 10,
            spaceBetween: 60,
            speed: 34500,
            loop: true,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false
            },
            freeMode: true,
            freeModeMomentum: false,
            breakpoints: {
                320: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                768: {
                    slidesPerView: 5,
                    spaceBetween: 40
                },
                1024: {
                    slidesPerView: 8,
                    spaceBetween: 50
                },
                1440: {
                    slidesPerView: 10,
                    spaceBetween: 60
                }
            }
        });
    }
});
