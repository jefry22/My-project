const btnEmail = document.querySelector('#btnEmail');
const desktopMenu= document.querySelector('.desktop-menu');

const btnMenu = document.querySelector('.btn-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const btnClose = document.querySelector('.btnClose');

btnEmail.addEventListener('click',toogleDestokpMenu);
btnMenu.addEventListener('click',toggleMobileMenu);
btnClose.addEventListener('click',toggleMobileMenu);

function toogleDestokpMenu(){
    desktopMenu.classList.toggle('active');
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle('active-mobile');
}