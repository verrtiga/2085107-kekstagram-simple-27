import { renderSimilarList,clearSimilarList } from './similar-list.js';

const userModalElement = document.querySelector('body');
const userModalOpenElement = document.querySelector('.img-upload__input');
const userModalOpenOverlay = document.querySelector('.img-upload__overlay');
const userModalCloseElement = document.querySelector('.img-upload__cancel');
const userForm = document.querySelector('.img-upload__form');
const onPopupEscKeyDown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeUserModal();
  }
};

function openUserModal () {
  userModalElement.classList.add('modal-open');
  userModalOpenOverlay.classList.remove('hidden');
  renderSimilarList();
  document.addEventListener('keydown', onPopupEscKeyDown);
}


function closeUserModal () {
  userModalElement.classList.remove('modal-open');
  userModalOpenOverlay.classList.add('hidden');
  userForm.reset();

  clearSimilarList();
  document.removeEventListener('keydown', onPopupEscKeyDown);
}

userModalOpenElement.addEventListener('click',() => {
  openUserModal();
});

userModalCloseElement.addEventListener('click', () => {
  closeUserModal();
});


