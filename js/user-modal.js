import './similar-list.js';

const userModalElement = document.querySelector('body');
const userModalOpenElement = document.querySelector('.img-upload__input');
const userModalOpenOverlay = document.querySelector('.img-upload__overlay');
const userModalCloseElement = document.querySelector('img-upload__cancel');

userModalOpenElement.addEventListener('click',() => {
  userModalElement.classList.add('modal-open');
  userModalOpenOverlay.classList.remove('hidden');
});

userModalCloseElement.addEventListener('click', () => {
  userModalElement.classList.remove('modal-open');
  userModalOpenOverlay.classList.add('hidden');
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    userModalElement.classList.remove('modal-open');
    userModalOpenOverlay.classList.add('hidden');
  }
});
