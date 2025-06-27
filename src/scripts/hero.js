document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const mobileNav = document.querySelector('.mobile-nav');

    if (burger && mobileNav) {
        burger.addEventListener('click', () => {
            console.log('clicked');
            mobileNav.classList.toggle('open');
        });
    }
});
