const btnEmail = document.querySelector('#btnEmail');
const desktopMenu= document.querySelector('.desktop-menu');
const btnMenu = document.querySelector('.btn-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const btnClose = document.querySelector('.btnClose');

btnEmail.addEventListener('click',onClickEmail);
btnMenu.addEventListener('click',onclickMenu);
btnClose.addEventListener('click',onclickMenu);

function onClickEmail(){
    desktopMenu.classList.toggle('active');
}
function onclickMenu(){
    mobileMenu.classList.toggle('active-mobile');
}