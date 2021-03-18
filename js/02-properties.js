const magicBtn = document.querySelector('.js-magic-btn');

magicBtn.addEventListener('click', () => {
    const imageEl = document.querySelector('.hero__image')
console.log(imageEl.src)
 imageEl.src = 'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480'
    imageEl.alt = 'it is me';
    console.log(imageEl.getAttribute('src'))
    console.log(imageEl.hasAttribute('src'))
    
    const inputEl = document.querySelector('.js-input');
    console.log(inputEl.value)
    inputEl.value ='куку'
})

const heroTitelEl = document.querySelector('.hero__title')
console.log(heroTitelEl.textContent)
heroTitelEl.textContent = 'Я сладкий пирожочек';


const btnEl = document.querySelectorAll('.js-actions button')
console.log(btnEl[2].dataset.action)
 

