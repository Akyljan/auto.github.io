function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });;
document.querySelectorAll(".tab-trigger").forEach((item) =>     
    item.addEventListener('click',function(e) {
        e.preventDefault();
        const id = item.getAttribute('href').replace("#" , "");

        document.querySelectorAll(".tab-trigger").forEach(
            (child) => child.classList.remove("active")
        );
        document.querySelectorAll(".tab").forEach(
            (child) => child.classList.remove("active")
        );     
        item.classList.add("active");
        document.getElementById(id).classList.add('active');  
    })
);
document.querySelector('.tab-trigger').click();

const swiper = new Swiper('.slider-main', {
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
    },
    keyboard:{
        enabled: true,
        onlyInViewport: true,
    },
    mousewheel: {
        sensitivity: 1,
        eventsTarget: ".slider-main"
    },
    hashNavigation: {
        watchState: true,
    },
    autoHeight: true,
    freeMode: {
        enabled: true,
    },
    grabCursor: true,
    slideToClickedSlide: true,
    centeredSlides: true,
    initialSlide: 1,
    slidesPerView: 3,
    autoplay: {
        delay: 1500,
        stopOnLastSlide: true,
        disableOnInteraction: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 18,
        },
        480: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 22,
        },  
        992: {
            slidesPerView: 3,
            spaceBetween: 24,
        }
    },
    
});