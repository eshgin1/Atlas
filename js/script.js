// создаем слайд

const slideWrapper = document.querySelector('.slider'),
      slideField = document.querySelector('.slider__carousel'),
      slideImg = document.querySelectorAll('.slider__img'),
      width = window.getComputedStyle(slideWrapper).width,
      btnLeft = document.querySelector('.slider__arrow-left'),
      btnRight = document.querySelector('.slider__arrow-right'),
      logo = document.querySelector('.logo');


let slideIndex = 1;
let offset = 0; // отступ

slideField.style.width = 100 * slideImg.length + '%'; // взяли все картинки и поместили в блок карусель

btnRight.addEventListener('click', () => {
    if(offset == +width.slice(0, width.length - 2) * (slideImg.length - 1)){
        offset = 0;
    } else {
        offset = offset + +width.slice(0, width.length - 2);
    }

    slideField.style.transform = `translateX(-${offset}px)`;
})

btnLeft.addEventListener('click', () => {
    if(offset == 0){
        offset = +width.slice(0, width.length - 2) * (slideImg.length - 1)
    } else {
        offset = offset - +width.slice(0, width.length - 2);
    }

    slideField.style.transform = `translateX(-${offset}px)`;
})

window.addEventListener('load', () => {
    logoTransition(logo);
})

// плавное появление слайда
function logoTransition (pic){
    setTimeout( () => {
        pic.style.opacity = '1';
    }, 200)
}

