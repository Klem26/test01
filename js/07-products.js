import products from './data/proucts.js';

/*
 * Создаём карточку продукта
 * - В классе продукта может быть product--on-sale product--not-available
 */

{
  /*
<article class="product">
  <h2 class="product__name">Название</h2>
  <p class="product__descr">Описание</p>
  <p product__pridct>Цена: 1111 кредитов</p>
</article>
*/
}

// const productEl = document.createElement('article');
// productEl.classList.add('product');

// const namelEl = document.createElement('h2');
// namelEl.classList.add('product__name');
// namelEl.textContent = products.name

// const descrEl = document.createElement('p')
// descrEl.classList.add('product__descr');
// descrEl.textContent = products.description;

// const priceEl = document.createElement('p')
// priceEl.textContent = `Цена: ${products.price} кредитов`;
// priceEl.classList.add('product__price')

// console.log(priceEl)
// productEl.append(namelEl, descrEl, priceEl)
// console.log(productEl)

const productsContainerEl = document.querySelector('.js-products');

const makeProductCard = ({name,description, price}) => {

const productEl = document.createElement('article');
productEl.classList.add('product');

const namelEl = document.createElement('h2');
namelEl.classList.add('product__name');
namelEl.textContent =name

const descrEl = document.createElement('p')
descrEl.classList.add('product__descr');
descrEl.textContent = description;

const priceEl = document.createElement('p')
priceEl.textContent = `Цена: ${ price} кредитов`;
    priceEl.classList.add('product__price')
    
    productEl.append(namelEl, descrEl, priceEl)
    return productEl;
}


console.log(makeProductCard(products[3]));
const elements = products.map(makeProductCard);
console.log(elements)

 productsContainerEl .append(...elements)