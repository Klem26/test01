// const targetBtn = document.querySelector('.js-target-btn');
// const addListenerBtn = document.querySelector('.js-add-listener');
// const removeListenerBtn = document.querySelector('.js-remove-listener');


// addListenerBtn.addEventListener('click', (e) => {
//     console.log(e)
//     console.log('вешаю слушатель на целевую кнопку');
//     targetBtn.addEventListener('click',onTargetBtnClick);
    
// });
 
// removeListenerBtn.addEventListener('click', () => {
//     console.log('снимаю слушатель с целевой кнопки');
//     targetBtn.removeEventListener('click', onTargetBtnClick);
//     })

// function onTargetBtnClick() {
//       console.log('клик по кнопке');
//  }

// формы
// const form = document.querySelector('.js-register-form');

// form.addEventListener('submit',  onFormSub);
// function onFormSub(e) {
//     e.preventDefault();


//     // для сбора и отправки  формы на сервер    со всеми значениями и ключами
//     const formData = new FormData(e.currentTarget);
//     console.log(formData)
//     formData.forEach((value, name) => {
//         console.log('ключ' , name)
//         console.log('значение', value)
//     })

//     //  console.dir(e.currentTarget.elements.subscription.value );
//     // console.log('сабмит формы');

    
// }
//  * Паттерн «Объект ссылок»
//  *
//  * События
//  * - focus и blur
//  * - input и change
//  * - Чекбоксы и свойство checked
//  */

// const refs = {
//   input: document.querySelector('.js-input'),
//   nameLabel: document.querySelector('.js-button > span'),
//   licenseCheckbox: document.querySelector('.js-license'),
//   btn: document.querySelector('.js-button'),
// };

// refs.input.addEventListener('focus', onInputFocous)
// refs.input.addEventListener('blur', onInputBlur)

// function onInputFocous() {
//     console.log('инпут в фокусе ')
// }
// function onInputBlur() {
//     console.log('инпут не в фокусе ')
// }

// refs.input.addEventListener('change', onInputChange);
// refs.input.addEventListener('input', onInputChange);


// function onInputChange(event) {
//     console.log(event.currentTarget.value)
// }

// function onInputChange(e) {
//     // console.log(e.currentTarget.value)
//     refs.nameLabel.textContent = e.currentTarget.value
// };

// refs.licenseCheckbox.addEventListener('change', onLicenseChange);

// function onLicenseChange(e) {
//     // console.log(e.currentTarget.checked);
//     refs.btn.disabled = !e.currentTarget.checked
// }


//keyboard

// const refs = {
//   output: document.querySelector('.js-output'),
//   clearBtn: document.querySelector('.js-clear'),
// };
// // window.addEventListener('keydown', onKeydown);
// window.addEventListener('keypress', onKeypress);
// refs.clearBtn.addEventListener('click', onClearOutput)


// function onKeydown(e) {
//     console.log(e.key)
//     refs.output.textContent += e.key
// };
// function onKeypress(e) {
//     console.log(e.key)
//     refs.output.textContent += e.key
// }
// function onClearOutput() {
//     refs.output.textContent =''
// }

  

// const boxRef = document.querySelector('.js-box');

// boxRef.addEventListener('mouseover', onMouseEnter);
// boxRef.addEventListener('mouseout', onMouseLeave);
// boxRef.addEventListener('mousemove', onMouseMove);

// function onMouseEnter(event) {
//   const box = event.currentTarget;
//   box.classList.add('box--active');
// }

// function onMouseLeave(event) {
//   const box = event.currentTarget;
//   box.classList.remove('box--active');
// }

// function onMouseMove(event) {
//   console.log(event);
// }

// модалка


// const refs = {
//   openModalBtn: document.querySelector('[data-action="open-modal"]'),
//   closeModalBtn: document.querySelector('[data-action="close-modal"]'),
//   backdrop: document.querySelector('.js-backdrop'),
// };

// refs.openModalBtn.addEventListener('click', onModalOpen);
// refs.closeModalBtn.addEventListener('click', onModalClose);
// refs.backdrop.addEventListener('click', onBackdropClikc);


// function onModalOpen() {
//     window.addEventListener('keydown', onKeydownEsc);
//     document.body.classList.add('show-modal')
    
// } 
// function onModalClose() {
//     window.removeEventListener('keydown', onKeydownEsc);
//     document.body.classList.remove('show-modal')
    
// } 

// function onBackdropClikc(e) {
//     console.log(e.currentTarget);
//     console.log(e.target)

//     if (e.currentTarget === e.target) {
//         onModalClose() 
//     }
// }

// function onKeydownEsc(e) {
//     if (e.code === 'Escape'){
//         onModalClose(); 
//     }
   
   
// };