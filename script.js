

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

const swiper = new Swiper('.mySwiper', {
    slidesPerView: 4, // Show 4 slides at once
    spaceBetween: 20,
    centeredSlides: false, // Disable centering
    loop: true,
    autoplay: {
        delay: 5000, // Increase delay to reduce potential lag
        disableOnInteraction: false
    },    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // Responsive breakpoints
        320: {
            slidesPerView: 1 // 1 slide on mobile
        },
        768: {
            slidesPerView: 2 // 2 slides on tablets
        },
        1024: {
            slidesPerView: 4 // 4 slides on desktop
        }
    }
});