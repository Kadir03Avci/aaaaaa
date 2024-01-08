
// for header

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}
 
// for window scroll 


window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }
    else{
        document.querySelector('.header').classList.remove('active');
    }

    window.onload = () =>{
        if(window.scrollY > 0){
            document.querySelector('.feature').classList.add('active');
        }
        else{
            document.querySelector('.feature').classList.remove('active');
        }
    }
}





// for home section 

var swiper = new Swiper(".home-slider", {


    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
  });




// for feature sectio

var swiper = new Swiper(".feature-slider", {
    spaceBetween: 20,
    
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },

      breakpoints:{
        0:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        991:{
            slidesPerView: 2,
        },
      },
  });


  // for trainers sectio

var swiper = new Swiper(".trainer-slider", {
    spaceBetween: 20,
    
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },

      breakpoints:{
        0:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        991:{
            slidesPerView: 3,
        },
      },
  });

  // for blogs sectio

var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 20,
    
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

      breakpoints:{
        0:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        991:{
            slidesPerView: 3,
        },
      },
  });
  

      // for testimonial sectio

  var swiper = new Swiper(".testimonial-slider", {
    

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    centeredSlides: true,

      breakpoints:{
        0:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 1,
        },
        991:{
            slidesPerView: 1,
        },
      },
  });