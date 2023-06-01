let slides, prev, next, slidesWrapper;

if(document.querySelector('.slider-years__body')) {
    new Swiper('.slider-years__body', {
        observer: true,
        observerParents: true,
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.years__arrows .slider-arrow_next',
            prevEl: '.years__arrows .slider-arrow_prev',
        },
        loop: true
    });
}