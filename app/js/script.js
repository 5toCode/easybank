const body = document.querySelector('body');
const hamburger = document.querySelector('#hamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade');

hamburger.addEventListener('click', function() {
    if (header.classList.contains('open')) { // hamburger menu is open, so close it
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElements.forEach(el => {
            el.classList.remove('fade-in');
            el.classList.add('fade-out');
        });

    } else { // hamburger is closed, so open it
        body.classList.add('noscroll');
        header.classList.add('open'); 
        fadeElements.forEach(el => {
            el.classList.remove('fade-out')
            el.classList.add('fade-in');
        });

    }
});