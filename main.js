const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu-icon');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

navEmail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMenuIcon);
menuCarritoIcon.addEventListener('click', toggleCarritoIcon);


function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
}

function toggleMenuIcon() {
const isAsideClosed = aside.classList.contains('inactive');

  mobileMenu.classList.toggle('inactive');

  if(!isAsideClosed){
    aside.classList.add('inactive');
  }
}

function toggleCarritoIcon() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  //si mobileMenu esta open, hay que cerrarlo
  if(!isMobileMenuClosed){
    mobileMenu.classList.add('inactive');
  }

  aside.classList.toggle('inactive');
}