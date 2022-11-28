
import { resetScale } from './scale.js';
import { resetEffects } from './effect.js';

const userModalElement = document.querySelector('body');
const userFile = document.querySelector('#upload-file');
const userFileCancel = document.querySelector('.img-upload__cancel');
const userModalOpenOverlay = document.querySelector('.img-upload__overlay');
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
  document.addEventListener('keydown', onPopupEscKeyDown);
}


function closeUserModal () {
  userModalElement.classList.remove('modal-open');
  userModalOpenOverlay.classList.add('hidden');
  userForm.reset();
  resetScale();
  resetEffects();
  document.removeEventListener('keydown', onPopupEscKeyDown);
}

userFile.addEventListener('change',() => {
  openUserModal();
});

userFileCancel.addEventListener('click', () => {
  closeUserModal();
});


export {openUserModal, closeUserModal, onPopupEscKeyDown, userModalOpenOverlay};
