import { sendData } from './api.js';
import {onPopupEscKeyDown} from './user-modal.js';
import { isEscapeKey } from './util.js';
import {userModalOpenOverlay} from './user-modal.js';

const form = document.querySelector('.img-upload__form');
const body = document.querySelector('body');
const submitButton = document.querySelector('.img-upload__submit');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'error-img-upload__text',
});

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикую...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const successTemplateElement = document.querySelector('#success')
  .content
  .querySelector('.success');

const errorTemplateElement = document.querySelector('#error')
  .content
  .querySelector('.error');

const onNotificationEscKeydown = (evt, notification) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();

    notification.remove();
    document.removeEventListener('keydown', onNotificationEscKeydown);

    if (!userModalOpenOverlay.classList.contains('hidden')) {
      document.addEventListener('keydown', onPopupEscKeyDown);
    }
  }
};
const removeNotification = (notification) => {
  notification.remove();
  document.removeEventListener('keydown', onNotificationEscKeydown);
  document.removeEventListener('keydown', onPopupEscKeyDown);
};

const onClickOutBounds = (evt, notification, targetClass) => {
  if ( !evt.target.classList.contains(targetClass) ) {
    notification.remove();
    notification.removeEventListener('click', onClickOutBounds);
  }
};

const getSuccessNotification = () => {
  const successModal = successTemplateElement.cloneNode(true);
  body.append(successModal);

  const successButtonClose = successModal.querySelector('.success__button');
  document.removeEventListener('keydown', onPopupEscKeyDown);
  document.addEventListener('keydown', (evt) => onNotificationEscKeydown(evt, successModal));

  successButtonClose.addEventListener('click', () => removeNotification(successModal), {once: true});
  successModal.addEventListener( 'click', (evt) => onClickOutBounds(evt, successModal, 'success__inner'));
};

const getErrorNotification = () => {
  const errorModal = errorTemplateElement.cloneNode(true);
  body.append(errorModal);

  const errorCloseButtonElement = errorModal.querySelector('.error__button');
  document.removeEventListener('keydown', onPopupEscKeyDown);
  document.addEventListener('keydown', (evt) => onNotificationEscKeydown(evt, errorModal));


  errorCloseButtonElement.addEventListener('click', () => removeNotification(errorModal), {once: true});
  errorModal.addEventListener( 'click', (evt) => onClickOutBounds(evt, errorModal, 'error__inner'));
};


const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          getSuccessNotification();
          unblockSubmitButton();
        },
        () => {
          getErrorNotification();
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });
};

export {setUserFormSubmit, getErrorNotification, getSuccessNotification, removeNotification};

