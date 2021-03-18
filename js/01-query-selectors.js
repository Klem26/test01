const magicBtn = document.querySelector('.js-magic-btn');

// console.log(window)

magicBtn.addEventListener('click', () => {
    const navItemEl = document.querySelector('.site-nav')
    console.log(navItemEl)

    const navLinks = document.querySelectorAll('.site-nav__link')
    console.log(navLinks)
});