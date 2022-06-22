
window.addEventListener('DOMContentLoaded', function() {
	//слайдер главных пецептов
    let slideIndex = 1;
    const slides = document.querySelectorAll('.offer__slide'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current');

    showSlides(slideIndex);

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        slides[slideIndex - 1].style.display = 'block';   
    }

    function plusSlides (n) {
        showSlides(slideIndex += n);
    }

    prev.addEventListener('click', function(){
        plusSlides(-1);
    });

    next.addEventListener('click', function(){
        plusSlides(1);
    });
	
	//слайдер быстрых пецептов
    let slideIndex4 = 1;
    const slides4 = document.querySelectorAll('.offer__slide4'),
        prev4 = document.querySelector('.offer__slider-prev4'),
        next4 = document.querySelector('.offer__slider-next4'),
        total4 = document.querySelector('#total4'),
        current4 = document.querySelector('#current4');

    showSlides4(slideIndex4);

    function showSlides4(n) {
        if (n > slides4.length) {
            slideIndex4 = 1;
        }
        if (n < 1) {
            slideIndex4 = slides4.length;
        }

        slides4.forEach((item) => item.style.display = 'none');
        slides4[slideIndex4 - 1].style.display = 'block'; 
    }

    function plusSlides4 (n) {
        showSlides4(slideIndex4 += n);
    }

    prev4.addEventListener('click', function(){
        plusSlides4(-1);
    });

    next4.addEventListener('click', function(){
        plusSlides4(1);
    });
	
	
});