let navbar = document.querySelector('.navbar');
let menuBtn = document.querySelector('#menu-btn');

let searchForm = document.querySelector('.search-form');
let searchBtn = document.querySelector('#search-btn');

let cartItem = document.querySelector('.cart-items-container');
let cartBtn = document.querySelector('#cart-btn');

if (menuBtn) {
    menuBtn.onclick = () => {
        navbar.classList.toggle('active');
        searchForm.classList.remove('active');
        cartItem.classList.remove('active');
    };
}

if (searchBtn) {
    searchBtn.onclick = () => {
        searchForm.classList.toggle('active');
        navbar.classList.remove('active');
        cartItem.classList.remove('active');
    };
}

if (cartBtn) {
    cartBtn.onclick = () => {
        cartItem.classList.toggle('active');
        navbar.classList.remove('active');
        searchForm.classList.remove('active');
    };
}

window.onscroll = () => {
    if (navbar) navbar.classList.remove('active');
    if (searchForm) searchForm.classList.remove('active');
    if (cartItem) cartItem.classList.remove('active');
};
