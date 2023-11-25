// main.js

let navbar = document.querySelector('.navbar');
let iconnav = document.querySelectorAll('.nav-item');
let navlink = document.querySelectorAll('.nav-link');

document.addEventListener("DOMContentLoaded", function () {
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
            state.menu = true;
            setColoredMenu();
        } else {
            state.menu = false;
            if (window.scrollY < 100) {
                setTransparentMenu();
            }
        }
    });

    iconnav.forEach((item) => {
        item.addEventListener('click', function () {
            navbarCollapse.classList.toggle('show');
            if(state.menu == true){
                state.menu = false;
                if (window.scrollY < 100) {
                    setTransparentMenu();
                }
            }
        });
    })
});

window.addEventListener("scroll", function () {
    if (window.scrollY < 100) {
        setTransparentMenu();
    } else {
       setColoredMenu();
    }
});

function setColoredMenu() {
    navbar.style.setProperty('background-color', 'var(--secundaria)', 'important');
    iconnav.forEach(element => element.style.setProperty('color', 'var(--secundaria-clara)'));
    navlink.forEach(element => element.style.setProperty('color', 'var(--secundaria-clara)'));
}

function setTransparentMenu() {
    navbar.style.setProperty('background-color', 'transparent', 'important');
    iconnav.forEach(element => element.style.setProperty('color', 'var(--secundaria)'));
    navlink.forEach(element => element.style.setProperty('color', 'var(--secundaria)'));
}
