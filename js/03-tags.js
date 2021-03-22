// const tagsContainerRef = document.querySelector('.js-tags');
// let selectedTag = null;


// tagsContainerRef.addEventListener('click', onTagClick);

// function onTagClick(e) {
//     if (e.target.nodeName !== 'BUTTON') {
//         return;
//     }

//     const currentActiveBtn = document.querySelector('.tags__btn--active ');
    
//     // console.log(currentActiveBtn);

//     if (currentActiveBtn) {
//        currentActiveBtn.classList.remove('tags__btn--active');
//     }
//     const nextActiveBtn = e.target
//     nextActiveBtn.classList.add('tags__btn--active'); 
//     selectedTag = nextActiveBtn.dataset.value
//     console.log(selectedTag)
// }


const tagsContainerRef = document.querySelector('.js-tags');
let selectedTag = new Set;


tagsContainerRef.addEventListener('click', onTagClick);

function onTagClick(e) {
    if (e.target.nodeName !== 'BUTTON') {
    
        return;
    }
    const btn = e.target;
    const tag = btn.dataset.value;

    const isActive = btn.classList.contains('tags__btn--active');
    if (isActive) {
        selectedTag.delete(tag)
    } else {
        selectedTag.add(tag);
    }


   btn.classList.toggle('tags__btn--active');
    
    console.log(selectedTag)
};
