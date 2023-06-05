const slides = document.querySelectorAll('.slider-years__slide'),
      prev = document.querySelector('.slider-arrow_prev'),
      next = document.querySelector('.slider-arrow_next'),
      slidesWrapper = document.querySelector('.slider-years__wrapper'), 
      slidesField = document.querySelector('.slider-years__inner'),
      width = window.getComputedStyle(slidesWrapper).width;
      

slidesField.style.width = 100 * slides.length + '%';
// slidesField.style.width = 580 + (60 * (slides.length - 1)) + ((slides.length - 1) * 100) + 'px';
/*slidesField.width = 580px + (60px * (slides.length - 1)) + margin/padding */

let offset = 0;

const rect = slidesWrapper.getBoundingClientRect();
console.log('Смещение X относительно документа:', rect.x + pageXOffset)
console.log('Смещение Y относительно документа:', rect.y + pageYOffset)

function deleteNotDigits(str) {
    return +str.replace(/\D/g, ''); /* regExp*/
}

slides.forEach(slide => {
    slide.style.width = width;
})

next.addEventListener('click', () => {

    console.log(offset)

    if(offset == deleteNotDigits(width) * (slides.length - 1)) {
        offset = 0;
    } else {
        offset += deleteNotDigits(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;
});

prev.addEventListener('click', () => {
    
    console.log(offset)

    if(offset == 0) {
        offset = deleteNotDigits(width) * (slides.length - 1);
    } else {
        offset -= deleteNotDigits(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;
});




// if(document.querySelector('.slider-years__body')) {
//     new Swiper('.slider-years__body', {
//         observer: true,
//         observerParents: true,
//         slidesPerView: 'auto',
//         spaceBetween: 100,
//         navigation: {
//             enabled: true,
//             nextEl: '.slider-arrow_next',
//             prevEl: '.slider-arrow_prev',
//         },
//         loop: true
//     });
// }