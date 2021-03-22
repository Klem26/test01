const divContainerBtn = document.querySelector('.js-container');

divContainerBtn.addEventListener('click', onClick);
function onClick(e) {
    if (e.target.nodeName !== 'BUTTON') {
        return
    }
     console.log(e.target.nodeName)
    console.log(e.target.textContent)
}
//  * Код добавления кнопок
//  */
const addBtn = document.querySelector('.js-add-btn');
let labelCounter = 6;

addBtn.addEventListener('click', onAddBtnClick);

function onAddBtnClick() {
  const btn = document.createElement('button');
  btn.textContent = `Кнопка ${labelCounter}`;
  btn.type = 'button';

  divContainerBtn.appendChild(btn);
  labelCounter += 1;
}