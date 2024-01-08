
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










  