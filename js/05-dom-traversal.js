const titelEl = document.createElement('h1')
titelEl.classList.add('.page-titel');
titelEl.textContent = 'Заголовок H1';


document.body.appendChild(titelEl)

const imgEl = document.createElement('img')
imgEl.src = 'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
imgEl.alt = 'котик '
imgEl.width = 640;
console.log(imgEl);
document.body.appendChild(imgEl)

const lilEl = document.createElement('li')
lilEl.classList.add('.site-nav__item');

const linklEl = document.createElement('a')
linklEl.classList.add('.site-nav__link');
linklEl.textContent = 'Личный кабинет';
linklEl.href = '/profile'

lilEl.appendChild(linklEl)
const navEl = document.querySelector('.site-nav');

// console.log(navEl.appendChild(lilEl))
navEl.insertBefore(lilEl, navEl.firstElementChild)


const heroEl = document.querySelector('.hero');
// heroEl.appendChild(titelEl);
// heroEl.appendChild(imgEl);

heroEl.append(titelEl,imgEl )