const dessktop = document.querySelector('.desktop-menu');
const btnEmail = document.querySelector('.email');

btnEmail.addEventListener('click',btnOnClick);

function btnOnClick(){
    dessktop.classList.toggle('active');
}