const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenuIcon = document.querySelector('.menu-icon');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const productDetail = document.querySelector('.product-detail');

navEmail.addEventListener('click', toggleDesktopMenu);
mobileMenuIcon.addEventListener('click', toggleMenuIcon);
menuCarritoIcon.addEventListener('click', toggleCarritoIcon);


function toggleDesktopMenu() {
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

  if(!isDesktopMenuClosed){
    productDetail.classList.add('inactive');
  }

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


/*-------------------------------------------------- */

// function toggleDesktopMenu() {
//   desktopMenu.classList.toggle('inactive');
//   aside.classList.toggle('inactive');
// }

// function toggleMenuIcon() {
//   mobileMenu.classList.toggle('inactive');
//   aside.classList.toggle('inactive');
// }

// function toggleCarritoIcon() {
//   mobileMenu.classList.toggle('inactive');
//   desktopMenu.classList.toggle('inactive');
//   aside.classList.toggle('inactive');
