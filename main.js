const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu-icon');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const productDetail = document.querySelector('.product-detail');

navEmail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMenuIcon);
menuCarritoIcon.addEventListener('click', toggleCarritoIcon);


function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
}

function toggleMenuIcon() {
const isproductDetailClosed = productDetail.classList.contains('inactive');

  mobileMenu.classList.toggle('inactive');

  if(!isproductDetailClosed){
    productDetail.classList.add('inactive');
  }
}

function toggleCarritoIcon() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  //si mobileMenu esta open, hay que cerrarlo
  if(!isMobileMenuClosed){
    mobileMenu.classList.add('inactive');
  }

  productDetail.classList.toggle('inactive');
}