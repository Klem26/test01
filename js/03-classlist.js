const magicBtn = document.querySelector('.js-magic-btn');

const navEl = document.querySelector('.site-nav');
navEl.classList.add('super', 'cool') 

navEl.classList.remove('cool') 
navEl.classList.replace('super', 'newsuper') 
console.log(navEl.classList.contains('cool'))
magicBtn.addEventListener('click', () => {
    navEl.classList.toggle('newclass')
})

const currentPageUrl = '/portfolio'
const linkEl = document.querySelector(`
.site-nav__link[href ="${currentPageUrl}"]`,
)
console.log(linkEl)
linkEl.classList.add('site-nav__link--current')