const btnEmail = document.querySelector('#btnEmail');
const desktopMenu= document.querySelector('.desktop-menu');

const btnMenu = document.querySelector('.btn-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const btnClose = document.querySelector('.btnClose');


const btnCars = document.querySelector('.cars');
const shoppingCart = document.querySelector('#shoppingCart');
const sectionProduct = document.querySelector('section')

const productContainer = document.querySelector(".product-container");

btnEmail.addEventListener('click',toogleDestokpMenu);
btnMenu.addEventListener('click',toggleMobileMenu);
btnClose.addEventListener('click',toggleMobileMenu);
btnCars.addEventListener('click',toggleAside);



function toogleDestokpMenu(){
    const isshoppingCartClose = shoppingCart.classList.contains('inactive');
    const isSectionProduct = sectionProduct.classList.contains('inactive');
    if(!isshoppingCartClose){
        shoppingCart.classList.add('inactive');
    }
    if(isSectionProduct){
      sectionProduct.classList.remove('inactive')
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu(){
    const isshoppingCartClose = shoppingCart.classList.contains('inactive');
    const isSectionProduct = sectionProduct.classList.contains('inactive');

    if(!isshoppingCartClose || !isSectionProduct){
        shoppingCart.classList.add('inactive');
        sectionProduct.classList.add('inactive');
    }

    if(!mobileMenu.classList.contains('inactive')){
      sectionProduct.classList.remove('inactive');
    }
    // }else if(mobileMenu.classList.contains('inactive')){
    //   sectionProduct.classList.remove('inactive');
    // }

    mobileMenu.classList.toggle('inactive');
}
function toggleAside(){
    const isMobileClose = mobileMenu.classList.contains('inactive');
    const isMenuDesktopClose = desktopMenu.classList.contains('inactive');
    const isSectionProduct = sectionProduct.classList.contains('inactive');

    if(!isMobileClose || !isMenuDesktopClose){
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
        // sectionProduct.classList.add('inactive');
    }
    if(!shoppingCart.classList.contains('inactive')){
        sectionProduct.classList.remove('inactive');
    }
    shoppingCart.classList.toggle('inactive');
}

const listProduct = [];

listProduct.push({
  imagen:
    "https://images.pexels.com/photos/1715184/pexels-photo-1715184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  price: 1400,
  productName: "Bikes",
});
listProduct.push({
  imagen:
    "https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  price: 1500,
  productName: "Bikes Moticlycles",
});
listProduct.push({
  imagen:
    "https://images.pexels.com/photos/2393835/pexels-photo-2393835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  price: 1800,
  productName: "Bikes Moticlycles 2",
});
listProduct.push({
    imagen:
      "https://images.pexels.com/photos/2393835/pexels-photo-2393835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 1800,
    productName: "Bikes Moticlycles 2",
  });
  listProduct.push({
    imagen:
      "https://images.pexels.com/photos/2393835/pexels-photo-2393835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 1800,
    productName: "Bikes Moticlycles 2",
  });
  listProduct.push({
    imagen:
      "https://images.pexels.com/photos/2393835/pexels-photo-2393835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 1800,
    productName: "Bikes Moticlycles 2",
  });
  listProduct.push({
    imagen:
      "https://images.pexels.com/photos/2393835/pexels-photo-2393835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 1800,
    productName: "Bikes Moticlycles 2",
  });

function createProduct(arr) {
  for (const product of arr) {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");

    const figureProduct = document.createElement("figure");
    const productImage = document.createElement("img");
    productImage.classList.add("img-product");
    productImage.setAttribute("src", product.imagen);
    figureProduct.appendChild(productImage);
    cardContainer.appendChild(figureProduct);

    const productInfo = document.createElement("div");
    productInfo.classList.add("info-product");

    const productInfoDetails = document.createElement("div");
    productInfoDetails.classList.add("info-product-details");

    const productPrice = document.createElement("p");
    productPrice.innerText= '$' + product.price;
    productInfoDetails.appendChild(productPrice);

    const productName = document.createElement("p");
    productName.innerText=product.productName;
    productInfoDetails.appendChild(productName);


    const infoProductCart = document.createElement('div');
    infoProductCart.classList.add('info-product-img');
    const figureCart = document.createElement('figure');
    const cartImage = document.createElement('img');
    cartImage.setAttribute('src','icons/bt_add_to_cart.svg');
    figureCart.appendChild(cartImage);
    infoProductCart.appendChild(figureCart);

    productInfo.appendChild(productInfoDetails);
    productInfo.appendChild(infoProductCart)
    cardContainer.appendChild(productInfo);


    productContainer.appendChild(cardContainer);
    
  }
}
createProduct(listProduct);
