// main.js

document.addEventListener("DOMContentLoaded", function () {
    let iconnav = document.querySelectorAll('.nav-item');
    let navlink = document.querySelectorAll('.nav-link');
    iconnav.forEach(element => {
        element.classList.add('m-4');
    });
    navlink.forEach(element => element.style.setProperty('color', 'var(--secundaria)'));
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const state = {
        'menu': false
    }

    menuToggle.addEventListener('click', function () {
        if (!state.menu) {
            navbarCollapse.classList.toggle('show');
            state.menu = true;
        } else {
            navbarCollapse.classList.toggle('show');
            state.menu = false;
        }
    });
});

window.addEventListener("scroll", function () {
    let navbar = document.querySelector('.navbar');
    let iconnav = document.querySelectorAll('.nav-item');
    let navlink = document.querySelectorAll('.nav-link');

    if (window.scrollY === 0) {
        iconnav.forEach(element => {
            element.classList.remove('mx-1');
            element.classList.add('m-4');
        });
    } else {
        iconnav.forEach(element => {
            element.classList.remove('m-4');
            element.classList.add('mx-1');
        });
    }

    if (window.scrollY < 100) {
        navbar.style.setProperty('background-color', 'transparent', 'important');
        iconnav.forEach(element => element.style.setProperty('color', 'var(--secundaria)'));
        navlink.forEach(element => element.style.setProperty('color', 'var(--secundaria)'));
    } else {
        navbar.style.setProperty('background-color', 'var(--secundaria)', 'important');
        iconnav.forEach(element => element.style.setProperty('color', 'var(--secundaria-clara)'));
        navlink.forEach(element => element.style.setProperty('color', 'var(--secundaria-clara)'));
    }
});
