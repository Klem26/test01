const titleEl = document.querySelector('.title');
console.log(titleEl.textContent);
// titleEl.innerHTML = `<a href =""> Куку куку</a > `
// titleEl.innerHTML = ''
titleEl.insertAdjacentHTML(
    'beforeend',
    '<a href="" class="title__link">Это ссылка)</a>',
);

// titleEl.insertAdjacentHTML(
//   'beforeend',
//   '<a href="" class="title__link">Это ссылка)</a>',
// );