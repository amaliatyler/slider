// let sliders = document.querySelectorAll('._swiper');
// if (sliders) {
//     for (let i = 0; i < sliders.length; i++) {
//         let slider = sliders[i];
//         if (!slider.classList.contains('swiper-build')) {
//             let slider_items = slider.children;
//             if (slider_items) {
//                 for (let i = 0; i < slider_items.length; i++) {
//                     let el = slider_items[i];
//                     el.classList.add('swiper-slide');
//                 }
//             }
//             let slider_content = slider.innerHTML;
//             let slider_wrapper = document.createElement('div');
//             slider_wrapper.classList.add('swiper-wrapper');
//             slider_wrapper.innerHTML = slider_content;
//             slider.innerHTML = '';
//             slider.appendChild(slider_wrapper);
//             slider.classList.add('swiper-build');

//             if (slider.classList.contains('_swiper_scroll')) {
//                 let sliderScroll = document.createElement('div');
//                 sliderScroll.classList.add('swiper-scrollbar');
//                 slider.appendChild(sliderScroll);
//             }
//         }

//         if (slider.classList.contains('_gallery')) {
//             //slider.data('LightGaLlery').destroy(true);
//         }
//     }
//     sliders_build_callback();
// }